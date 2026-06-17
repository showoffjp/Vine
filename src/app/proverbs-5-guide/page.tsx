"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const ROSE = "#E11D48";
const PURPLE_LIGHT = "#a78bfa";

const videoItems = [
  { id: "nK8pLsVhM3w", title: "Proverbs 5 - Warning Against Adultery and Sexual Purity" },
  { id: "rT2mGxQbD9z", title: "Rejoice in the Wife of Your Youth - Proverbs 5 Study" },
  { id: "vF6cNyPwJ4k", title: "The Bitter End of Sexual Sin - Proverbs 5 Explained" },
  { id: "xB1tKrWsH7e", title: "Proverbs 5 - Sexual Wisdom for Every Generation" },
];

const keyThemes = [
  {
    id: "deceptive",
    title: "The Deceptive Sweetness of Forbidden Pleasure",
    color: ROSE,
    body: "The adulteress&apos;s lips drip honey but her end is wormwood and a double-edged sword. Sin&apos;s appeal is real but its ultimate destination is death. The father calls his son to see beyond the immediate sensation to the final consequence. This is not prudishness but moral realism: the sweetness is genuine, and so is the bitterness. Wormwood (la&apos;anah) was the bitterest plant known in the ancient Near East &mdash; used as a symbol of extreme suffering and divine judgment (Lamentations 3:15, 19; Amos 5:7). The double-edged sword (literally &quot;a sword of mouths&quot;) wounds going in and coming out. The father is not exaggerating for rhetorical effect; he is describing the actual trajectory of forbidden pleasure when pursued to its end. The immediate experience and the final destination are radically different &mdash; this gap is the deception.",
  },
  {
    id: "cost",
    title: "The Comprehensive Cost of Sexual Sin",
    color: GOLD,
    body: "Proverbs 5 catalogs the total loss: honor, years of life, strength, hard-earned wealth, and ultimately health and body. Sexual immorality is never &quot;just&quot; a sin &mdash; it touches every dimension of human existence. The father lists what is given away to the &quot;merciless&quot; (literally &quot;cruel ones&quot;): your honor (wealth and status), your years (the time and seasons of your life), your strength (the Hebrew word means vigor and substance &mdash; the very life force of a person). Verse 10 adds: strangers will be filled with your wealth, and your labors will go to the house of a foreigner. The economic and relational devastation is not peripheral; it is the predictable harvest of choices made in private. And verse 11 reaches the body itself: at the end, flesh and body are consumed. Sin&apos;s trajectory is always toward disintegration.",
  },
  {
    id: "marital",
    title: "The Beauty of Marital Faithfulness",
    color: GREEN,
    body: "The father&apos;s solution is not cold law but warm delight: &quot;Rejoice in the wife of your youth... let her breasts satisfy you at all times; be intoxicated always in her love.&quot; Biblical sexual ethics are not merely restrictive but celebratory. The language is intentionally sensuous: &quot;a lovely deer, a graceful doe&quot; (v.19). The word translated &quot;satisfy&quot; (ravah) means to be saturated, drenched, fully satisfied &mdash; the same word used of a watered garden. The word translated &quot;intoxicated&quot; (shagah) appears elsewhere for staggering with intoxication or being lost in something overwhelmingly good. The father does not say &quot;tolerate your wife&quot; or &quot;be content with your wife.&quot; He says: be exhilarated by her, find in her a delight that makes all other options absurd. This is the Bible&apos;s answer to sexual temptation &mdash; not suppression but redirection toward the good that God has given.",
  },
  {
    id: "omniscience",
    title: "The Omniscience of God Over Private Sin",
    color: TEAL,
    body: "\"For a man&apos;s ways are before the eyes of the LORD, and he ponders all his paths&quot; (v.21). What is done in secret is not hidden. This truth is meant not to crush but to guide &mdash; God&apos;s watchful presence calls for integrity in every moment. The Hebrew word for &quot;ponders&quot; (palac) means to weigh carefully, to measure out. God does not merely glance at human paths; he examines them with the precision of a goldsmith weighing precious metal. Nothing is overlooked, no rationalization holds up under his gaze. But this omniscience is not surveillance for the purpose of condemnation alone &mdash; it is the watchfulness of a father who knows what his children are doing and who grieves or delights accordingly. The same God who sees every act of secret sin also sees every act of hidden faithfulness. Both matter. Both are known. The awareness of God&apos;s gaze is the invitation to integrity, not merely the threat of exposure.",
  },
  {
    id: "snare",
    title: "The Snare of Habitual Sin",
    color: PURPLE_LIGHT,
    body: "The wicked man is &quot;held fast in the cords of his sin&quot; (v.22). Sin that is entertained becomes a habit, and habit becomes a snare. The father&apos;s warning is to flee before the cords tighten, not after. The Hebrew word for &quot;held fast&quot; (tamak) suggests being firmly gripped &mdash; the cords of sin are not loose or easily shed once they have been wrapped around a life. Verse 22 describes a kind of moral entropy: the wicked man is captured by his own sin, and his lack of discipline becomes his death sentence. The father is not describing someone who fell once &mdash; he is describing the outcome of a sustained pattern of choice. Each act of sin tightens the cord; each refusal to repent adds another wrap. The man who eventually dies &quot;for lack of discipline&quot; (v.23) did not arrive there suddenly &mdash; he was led there by ten thousand small surrenders. This is why the father&apos;s warning is urgent from the first verse: before the cords are tight, before the path is worn, turn away.",
  },
];

const verseByVerse = [
  {
    id: "v1-2",
    ref: "Verses 1-2",
    heading: "Call to Attention: Pay Heed and Keep Discretion",
    body: "The chapter opens with the father&apos;s earnest summons: &quot;My son, be attentive to my wisdom; incline your ear to my understanding.&quot; This is not information transfer but formation &mdash; the father wants his son to receive wisdom that will shape his inner life. The goal stated in verse 2 is dual: &quot;that you may keep discretion, and your lips may guard knowledge.&quot; Discretion (mezimmah) is the capacity for moral discernment and strategic thinking about consequences. Knowledge here is not intellectual but experiential &mdash; knowing in practice what is true. The father wants his son to have a mind so formed by wisdom that the right words come naturally at the moment of temptation. This is character formation before crisis management. The wise person has already decided, in formation, what they will do when the moment comes; the foolish person tries to decide at the moment itself.",
  },
  {
    id: "v3-6",
    ref: "Verses 3-6",
    heading: "The Adulteress: Honey That Ends in Wormwood",
    body: "Now the father describes the figure his son will encounter: &quot;For the lips of a forbidden woman drip honey, and her speech is smoother than oil.&quot; The sensory imagery is precise &mdash; taste and touch before sight. The seduction operates through speech as much as through appearance. Smooth oil was the most pleasant of substances in the ancient world; the comparison is not mild. But the father immediately pivots: &quot;but in the end she is bitter as wormwood, sharp as a double-edged sword.&quot; The contrast between &quot;drips honey&quot; and &quot;bitter as wormwood&quot; is total. Then verse 5 delivers the most sobering image: &quot;Her feet go down to death; her steps follow the path to Sheol.&quot; Every step in her direction is a step toward the grave. Verse 6 adds a chilling observation: she does not know this herself. &quot;She does not ponder the path of life; her ways wander, and she does not know it.&quot; She is not a calculated deceiver; she is herself deceived. The path to ruin rarely announces itself.",
  },
  {
    id: "v7-10",
    ref: "Verses 7-10",
    heading: "Stay Away from Her Door: The Comprehensive Loss",
    body: "The father redoubles his urgency: &quot;And now, O sons, listen to me, and do not depart from the words of my mouth. Keep your way far from her, and do not go near the door of her house.&quot; The strategy is spatial: distance, not proximity. The father does not say &quot;resist her when she tempts you&quot; but &quot;do not go near her door.&quot; The battle is won or lost long before the door. Then the father catalogs the cost of proximity: &quot;lest you give your honor to others and your years to the merciless; lest strangers take their fill of your strength, and your labors go to the house of a foreigner.&quot; Honor, years, strength, labors &mdash; the whole of a life poured out for those who care nothing for you. The word &quot;merciless&quot; (achzari) means cruel without compassion. The adulteress is not neutral toward her partner &mdash; she takes from him what cannot be recovered.",
  },
  {
    id: "v11-14",
    ref: "Verses 11-14",
    heading: "Groaning at the End: The Ruin Recognized Too Late",
    body: "Verses 11-14 describe the moment of reckoning that comes after the path of folly has been traveled. &quot;And at the end of your life you groan, when your flesh and body are consumed.&quot; The body itself bears the cost &mdash; this is not merely metaphorical. The Hebrew word for &quot;consumed&quot; (kalah) means to be spent entirely, used up, finished. Then the soliloquy of regret: &quot;How I hated discipline, and my heart despised reproof! I did not listen to the voice of my teachers or incline my ear to my instructors.&quot; The tragedy is not ignorance but willful refusal. The warning was given; the instruction was available; the voice of wisdom called. The fool did not lack information; he lacked the will to receive it. Verse 14 adds the social dimension: &quot;I am at the brink of utter ruin in the assembled congregation.&quot; Private sin has public consequences. The groaning is not only physical but social &mdash; before the eyes of the community that once respected him.",
  },
  {
    id: "v15-17",
    ref: "Verses 15-17",
    heading: "Drink from Your Own Cistern: The Positive Command",
    body: "The pivot in the chapter arrives here: from warning to invitation. &quot;Drink water from your own cistern, flowing water from your own well.&quot; Water in the ancient Near East was precious &mdash; a personal cistern was a significant investment. The metaphor is domestic, not clinical: this is the water of your own household, your own cultivated source of refreshment. Verses 16-17 develop the image: &quot;Should your springs be scattered abroad, streams of water in the streets? Let them be for yourself alone, and not for strangers with you.&quot; The image of springs scattered in the streets is of water wasted, of intimacy made common. The father is describing the preciousness of sexual faithfulness not as restriction but as conservation &mdash; keeping something of infinite value for the relationship where it belongs. The &quot;springs&quot; and &quot;streams of water&quot; point to the life-giving vitality of sexual intimacy, which loses its power and meaning when scattered indiscriminately.",
  },
  {
    id: "v18-20",
    ref: "Verses 18-20",
    heading: "Rejoice in the Wife of Your Youth: Marital Delight",
    body: "This section contains the most celebratory language in the chapter: &quot;Let your fountain be blessed, and rejoice in the wife of your youth, a lovely deer, a graceful doe. Let her breasts fill you at all times with delight; be intoxicated always in her love.&quot; The phrase &quot;wife of your youth&quot; carries deep emotional weight &mdash; this is the woman you chose, to whom you made vows, with whom you built a life. The animal imagery (&quot;lovely deer, graceful doe&quot;) comes from the Song of Solomon and represents beauty, grace, and desirability. &quot;Be intoxicated always in her love&quot; (v.19) uses the same verb (shagah) used in verse 20 for being &quot;intoxicated with a forbidden woman.&quot; The father is not saying: resist temptation by grinding your teeth and white-knuckling through. He is saying: let your wife&apos;s love be the intoxication that makes other intoxications lose their pull. The antidote to one kind of captivation is a better one.",
  },
  {
    id: "v21-23",
    ref: "Verses 21-23",
    heading: "God Sees All; Sin Ensnares; Discipline or Death",
    body: "The chapter closes with a theological grounding and a stark warning. Verse 21: &quot;For a man&apos;s ways are before the eyes of the LORD, and he ponders all his paths.&quot; This is the final argument for sexual faithfulness: God sees. Not as a threat alone but as a reality that gives weight to every private choice. Then verses 22-23 describe the outcome of the path of folly: &quot;The iniquities of the wicked ensnare him, and he is held fast in the cords of his sin. He dies for lack of discipline, and because of his great folly he is led astray.&quot; Three images of entrapment: ensnared (like an animal in a trap), held fast (gripped without escape), and led astray (wandering without knowing the way). The death that comes is not arbitrary punishment from outside &mdash; it is the natural harvest of a life lived without the discipline wisdom requires. The cords that bind are the man&apos;s own iniquities. He built his own prison. The father has offered the key from the beginning: listen, attend, keep your way far from her door.",
  },
];

const applicationItems = [
  {
    id: "purity",
    heading: "Pursue Sexual Purity as a Spiritual Discipline",
    body: "Proverbs 5 treats sexual purity not as one rule among many but as a matter of comprehensive wisdom. The father&apos;s instruction begins with &quot;be attentive to my wisdom&quot; &mdash; purity is not achieved by willpower alone but by a formed mind. Build the spiritual disciplines that form your inner life: Scripture reading, prayer, fasting, and accountability are not peripheral to sexual faithfulness but central to it. A mind formed by wisdom has already decided before the temptation arrives. Set boundaries that reflect the wisdom of verse 8 (&quot;Keep your way far from her&quot;) not just at the moment of temptation but in the architecture of your daily life.",
  },
  {
    id: "marriage",
    heading: "Invest in Your Marriage Covenant as the Antidote to Temptation",
    body: "The father does not tell his son to simply resist forbidden pleasure; he tells him to cultivate delight in what God has given. &quot;Rejoice in the wife of your youth; let her love intoxicate you always.&quot; This is active work. A marriage that intoxicates is not a passive gift &mdash; it is a cultivated one. Invest time, attention, creativity, and affection in your marriage. Date your spouse. Pursue them. Let the love that began at marriage deepen and widen over decades. The best protection against the honey of the adulteress is a marriage so rich in delight that the comparison is laughable. This is not naive romanticism; it is Proverbs&apos; practical wisdom.",
  },
  {
    id: "eyes",
    heading: "Guard Your Eyes and Heart from Sources of Sexual Temptation",
    body: "Proverbs 5:8 says &quot;Keep your way far from her, and do not go near the door of her house.&quot; The battle is not won at the door but long before it. What digital doors do you visit that lead toward sexual temptation? What viewing habits, content choices, or relational patterns are leading you toward the adulteress rather than away from her? Job made a covenant with his eyes (Job 31:1). Jesus spoke of plucking out the eye that causes you to sin (Matthew 5:29) &mdash; not literally, but with radical intentionality about what you allow in. Guard the approach, not just the destination.",
  },
  {
    id: "cords",
    heading: "Confess and Break the Cord of Habitual Sexual Sin",
    body: "If you are already entangled in the cords of sexual sin &mdash; pornography, infidelity, habitual lust, or patterns of sexual compromise &mdash; Proverbs 5:22 describes your situation with painful accuracy. But the gospel is that God can cut cords that we cannot cut ourselves. Confession to God (1 John 1:9) and confession to a trusted believer (James 5:16) are the biblical means of breaking what has become habitual. Do not wait until the cords are tighter. Seek help now. The man who dies &quot;for lack of discipline&quot; is the man who never asked for accountability and help before it was too late.",
  },
  {
    id: "accountability",
    heading: "Find Accountability with Trusted Believers",
    body: "Proverbs is literature for the community, not just the individual. The father speaks to the son in the context of a relationship of instruction and love. That relational context of accountability is itself part of the wisdom. Pursue honest accountability with one or two trusted believers of the same sex &mdash; people who will ask hard questions, who will not be satisfied with vague reassurances, who love you enough to speak truth. Sexual sin thrives in secrecy; accountability interrupts that secrecy. The darkness that sin needs to survive cannot survive the light of honest, grace-filled community.",
  },
  {
    id: "omniscience",
    heading: "Let God&apos;s Omniscience Motivate Integrity, Not Guilt",
    body: "&quot;A man&apos;s ways are before the eyes of the LORD&quot; (v.21). This truth can be received as threat or as grace, depending on your posture. For the person already walking in faithfulness, it is confirmation: your hidden choices are seen and valued by God. For the person in sexual sin, it is not first a condemnation but an invitation: God already knows; come into the light where he can also heal. God&apos;s omniscience is not the gaze of a prosecuting attorney but the gaze of a father who already knows and who already loves. Let his watchfulness motivate you toward the integrity that is its own reward, not the performance anxiety that produces shame.",
  },
  {
    id: "gift",
    heading: "Celebrate the Gift of Faithful Marriage",
    body: "Proverbs 5 is not simply a negative warning &mdash; it is a call to joy. &quot;Let your fountain be blessed.&quot; &quot;Rejoice in the wife of your youth.&quot; The father wants his son to experience the deep, sustaining joy of a faithful marriage. If you are married, make it your project to cultivate that joy: speak words of affirmation, pursue intimacy, honor your spouse publicly and privately. If you are single, let the vision of Proverbs 5:15-20 shape your hopes and your preparation. The world offers honey that ends in wormwood; God offers water from your own cistern that sustains a lifetime. The gift is worth the discipline that protects it.",
  },
];

export default function Proverbs5GuidePage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const tabs = ["Overview", "Key Themes", "Verse by Verse", "Application"];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 940, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", padding: "48px 0 40px" }}>
          <div style={{ display: "inline-block", background: `${GREEN}18`, border: `1px solid ${GREEN}40`, borderRadius: 8, padding: "4px 16px", fontSize: 13, color: GREEN, fontWeight: 700, marginBottom: 16, letterSpacing: "0.08em" }}>
            PROVERBS 5
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 12, lineHeight: 1.15, color: TEXT }}>
            Warning Against Adultery and Rejoicing in Marriage
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "The father&apos;s earnest warning against sexual immorality and his passionate call to rejoice in the wife of your youth &mdash; wisdom for sexual integrity that applies to every generation." }}
          />
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <span style={{ background: `${GREEN}20`, color: GREEN, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>23 Verses</span>
            <span style={{ background: `${ROSE}18`, color: ROSE, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>Warning Against Adultery</span>
            <span style={{ background: `${TEAL}18`, color: TEAL, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>Marital Delight</span>
            <span style={{ background: `${GOLD}18`, color: GOLD, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>Sexual Wisdom</span>
          </div>
        </div>

        {/* Video Grid */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: PURPLE_LIGHT, marginBottom: 20, borderBottom: `1px solid ${BORDER}`, paddingBottom: 12 }}>
            Teaching Videos
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {videoItems.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.id} title={v.title} />
                <div style={{ padding: "12px 14px" }}>
                  <p style={{ color: TEXT, fontSize: 13, fontWeight: 600, margin: 0, lineHeight: 1.5 }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, marginBottom: 32, display: "flex", overflowX: "auto" }}>
          {tabs.map((label, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setTab(i)}
              style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: tab === i ? "2px solid #6B4FBB" : "2px solid transparent", cursor: "pointer", color: tab === i ? PURPLE_LIGHT : MUTED, fontWeight: tab === i ? 700 : 500, fontSize: 15, whiteSpace: "nowrap" }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab 0: Overview */}
        {tab === 0 && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 32, marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: GREEN, marginBottom: 18 }}>Overview of Proverbs 5</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 5 is the father&apos;s earnest warning against the path of sexual immorality. He addresses his son with urgency: the lips of the adulteress drip honey, but her end is bitter as wormwood. Her feet go down to death; her paths lead to Sheol." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The father fears his son will give his honor, years, and strength to cruel strangers and only groan in regret at life&apos;s end. The antidote is positive, not merely prohibitive: &quot;Drink water from your own cistern&quot; &mdash; rejoice in your own wife, let her love captivate you always." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The chapter ends solemnly: God sees all a man&apos;s ways, the wicked are ensnared in their own sin, and they die without instruction. This is wisdom for sexual integrity that applies to every generation." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "What makes Proverbs 5 remarkable is not its warning alone &mdash; many texts warn against sexual sin. What sets it apart is its positive vision: the beauty and delight of faithful marriage as the God-given alternative. The father is not merely closing a door; he is opening a much better one." }}
              />
            </div>

            {/* Context Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 28 }}>
              <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 10, letterSpacing: "0.07em" }}>POSITION IN PROVERBS</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Proverbs 5 is the first of three chapters (5, 6, 7) that address sexual temptation in detail. Together they form the most extended treatment of sexual wisdom in the Old Testament. Chapter 5 introduces the warning and the positive alternative; chapters 6-7 extend the portrait of the adulteress and the deadly consequences of following her." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${TEAL}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 10, letterSpacing: "0.07em" }}>THE FATHER&apos;S AUDIENCE</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "The chapter is addressed to &quot;my son&quot; &mdash; a young man on the threshold of life who has not yet made the choices that will define his years. The father speaks from experience and from love. This is not impersonal moral legislation but personal, urgent instruction from one who has seen what the wrong path costs. The instruction model of Proverbs assumes relationship as the context for formation." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: GOLD, fontWeight: 800, fontSize: 13, marginBottom: 10, letterSpacing: "0.07em" }}>BIBLICAL SEXUAL ETHICS</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Proverbs 5 makes clear that the Bible&apos;s sexual ethics are not only prohibitive but celebratory. God designed sexual intimacy within marriage as a profound good &mdash; a source of joy, delight, and bonding that reflects the covenant love between God and his people. The restrictions exist to protect the good, not to diminish it." }}
                />
              </div>
            </div>

            {/* Key Verse */}
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 14, letterSpacing: "0.07em" }}>KEY VERSE &mdash; PROVERBS 5:18-19</div>
              <blockquote style={{ margin: 0, padding: 0 }}>
                <p style={{ color: TEXT, fontSize: 18, fontStyle: "italic", lineHeight: 1.65, fontWeight: 600, margin: "0 0 12px" }}
                  dangerouslySetInnerHTML={{ __html: "&quot;Let your fountain be blessed, and rejoice in the wife of your youth, a lovely deer, a graceful doe. Let her breasts fill you at all times with delight; be intoxicated always in her love.&quot;" }}
                />
                <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Proverbs 5:18-19 (ESV)</p>
              </blockquote>
            </div>
          </div>
        )}

        {/* Tab 1: Key Themes */}
        {tab === 1 && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: PURPLE_LIGHT, marginBottom: 8 }}>Key Themes in Proverbs 5</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Five theological and pastoral themes that run through the chapter &mdash; each one with direct application for life today." }}
              />
            </div>
            {keyThemes.map((theme) => (
              <div key={theme.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => toggle(theme.id)}
                  style={{ width: "100%", background: "none", border: "none", padding: "20px 24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                    <span style={{ color: theme.color, fontWeight: 700, fontSize: 16 }} dangerouslySetInnerHTML={{ __html: theme.title }} />
                  </div>
                  <span style={{ color: MUTED, fontSize: 22, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>{open === theme.id ? "-" : "+"}</span>
                </button>
                {open === theme.id && (
                  <div style={{ padding: "0 24px 24px" }}>
                    <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 20 }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Study note */}
            <div style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}30`, borderRadius: 12, padding: 24, marginTop: 24 }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 12, letterSpacing: "0.07em" }}>STUDY NOTE: NEW TESTAMENT CONNECTIONS</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}
                dangerouslySetInnerHTML={{ __html: "Jesus deepens Proverbs 5&apos;s teaching in the Sermon on the Mount: &quot;everyone who looks at a woman with lustful intent has already committed adultery with her in his heart&quot; (Matthew 5:28). The father of Proverbs addresses the external path (&quot;do not go near her door&quot;); Jesus addresses the internal condition from which the path begins. Both are needed. Paul extends the positive vision of Proverbs 5 to its theological foundation in 1 Corinthians 7 and Ephesians 5, where marriage is the image of Christ&apos;s love for the church." }}
              />
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The Song of Solomon &mdash; which uses the same imagery as Proverbs 5:15-20 (deer, water, wine, intoxication) &mdash; is the extended celebration of what Proverbs 5 commands. Together they present a complete picture: wisdom warns against what destroys, and Scripture also celebrates what God has given to delight and sustain." }}
              />
            </div>
          </div>
        )}

        {/* Tab 2: Verse by Verse */}
        {tab === 2 && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: PURPLE_LIGHT, marginBottom: 8 }}>Verse by Verse: Proverbs 5</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "A close reading of all 23 verses &mdash; attending to the father&apos;s structure, imagery, and the cumulative force of his instruction." }}
              />
            </div>
            {verseByVerse.map((section, idx) => (
              <div key={section.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => toggle(section.id)}
                  style={{ width: "100%", background: "none", border: "none", padding: "20px 24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${GREEN}20`, border: `1px solid ${GREEN}60`, display: "flex", alignItems: "center", justifyContent: "center", color: GREEN, fontWeight: 800, fontSize: 12, flexShrink: 0 }}>
                      {idx + 1}
                    </div>
                    <div>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", marginBottom: 2 }}>{section.ref}</div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: section.heading }} />
                    </div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 22, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>{open === section.id ? "-" : "+"}</span>
                </button>
                {open === section.id && (
                  <div style={{ padding: "0 24px 24px" }}>
                    <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 20 }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Quick reference */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginTop: 24 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 16, letterSpacing: "0.07em" }}>QUICK REFERENCE: ALL 23 VERSES</div>
              {[
                { ref: "v.1-2", summary: "Call to pay attention; keep discretion and knowledge on your lips" },
                { ref: "v.3-6", summary: "Adulteress lips drip honey; smoother than oil; end is bitter as wormwood; feet go down to death; paths lead to Sheol" },
                { ref: "v.7-10", summary: "Do not go near her door; lest you give honor to others, years to the merciless; strangers take your strength" },
                { ref: "v.11-14", summary: "Groan at the end when flesh and body consumed; say &quot;How I hated discipline! I am on the brink of utter ruin&quot;" },
                { ref: "v.15-17", summary: "Drink water from your own cistern; let your springs be for yourself alone, not strangers" },
                { ref: "v.18-20", summary: "Let your fountain be blessed; rejoice in wife of your youth; lovely deer, graceful doe; be intoxicated in her love" },
                { ref: "v.21-23", summary: "A man&apos;s ways before the LORD; wicked held in cords of his sin; dies for lack of discipline" },
              ].map((row) => (
                <div key={row.ref} style={{ display: "flex", gap: 16, padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                  <span style={{ color: GREEN, fontWeight: 700, fontSize: 13, minWidth: 56, flexShrink: 0 }}>{row.ref}</span>
                  <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: row.summary }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Application */}
        {tab === 3 && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: PURPLE_LIGHT, marginBottom: 8 }}>Application: Proverbs 5 for Today</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Seven ways to live the wisdom of Proverbs 5 in the twenty-first century &mdash; covering purity, marriage, accountability, and the gift of faithful love." }}
              />
            </div>
            {applicationItems.map((item) => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", background: "none", border: "none", padding: "20px 24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}
                >
                  <span style={{ color: GREEN, fontWeight: 700, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.heading }} />
                  <span style={{ color: MUTED, fontSize: 22, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>{open === item.id ? "-" : "+"}</span>
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 24px 24px" }}>
                    <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 20 }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Reflection questions */}
            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28, marginTop: 28 }}>
              <div style={{ color: PURPLE_LIGHT, fontWeight: 800, fontSize: 13, marginBottom: 14, letterSpacing: "0.07em" }}>REFLECTION QUESTIONS</div>
              {[
                "What in your life currently resembles &quot;honey that leads to wormwood&quot;? Where is the appeal real but the destination dangerous?",
                "What specific choices could you make this week to &quot;keep your way far from her door&quot;?",
                "If you are married: what would it look like to genuinely &quot;rejoice&quot; in your spouse this week &mdash; not as duty but as delight?",
                "Are you entangled in cords of habitual sexual sin? Who could you bring into accountability with you?",
                "How does knowing that God sees all your private choices change what you do in private today?",
                "What would it look like to celebrate the gift of faithful marriage &mdash; whether you are married or preparing for it?",
              ].map((q, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${PURPLE}30`, border: `1px solid ${PURPLE}`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE_LIGHT, fontWeight: 800, fontSize: 11, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                </div>
              ))}
            </div>

            {/* Prayer prompt */}
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28, marginTop: 20 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 14, letterSpacing: "0.07em" }}>PRAYER PROMPT</div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, fontStyle: "italic", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Lord, give me the wisdom to see beyond the honey to the wormwood. Give me eyes that recognize the path that leads to death before I have taken more steps along it. Protect me from the deceptions I am most vulnerable to. Where I am already ensnared in the cords of my own sin, cut them. Free me and heal me. Where I am married, help me to rejoice in the spouse you have given me &mdash; to be intoxicated with the good you have placed in my own house. Let your omniscience be my comfort, not my condemnation: you see me, you know me, and you love me still. Teach me to live before your eyes in integrity. Amen." }}
              />
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
