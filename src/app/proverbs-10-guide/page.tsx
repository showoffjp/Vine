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

const videoItems = [
  { videoId: "pN3tKqWmBsX", title: "Proverbs 10: The Proverbs of Solomon Begin" },
  { videoId: "vR8yZcLnDmQ", title: "The Two Ways: Righteous and Wicked in Proverbs" },
  { videoId: "jT5wGhXpCkF", title: "The Power of the Tongue in Proverbs 10" },
  { videoId: "qM2sNbVtHrE", title: "How to Read a Proverb: Principles, Not Promises" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* HERO */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #1a1a2e 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: GOLD, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Chapter Guide</p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>Proverbs Chapter 10</h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "Proverbs 10 marks a decisive turn in the book. The first nine chapters were extended poems &mdash; a father&rsquo;s sustained appeals to his son, the dramatic contest between Lady Wisdom and Woman Folly, long flowing arguments for the value of wisdom. With the heading &ldquo;The proverbs of Solomon&rdquo; (10:1), the book shifts into its main collection: hundreds of short, self-contained, two-line sayings, most of them built on sharp contrast. Almost every verse in this chapter sets two ways side by side &mdash; the wise and the foolish, the righteous and the wicked, the diligent and the lazy, the controlled tongue and the reckless one. Reading Proverbs 10 is like turning over a handful of polished gems, each catching the light of a single truth: that the way a person lives carries within it the seeds of its own outcome." }} />
        </div>
      </div>

      {/* TABS */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{ padding: "14px 24px", background: "none", border: "none", color: activeTab === i ? TEXT : MUTED, fontFamily: "Georgia, serif", fontSize: "0.95rem", cursor: "pointer", borderBottom: activeTab === i ? `2px solid ${GOLD}` : "2px solid transparent", whiteSpace: "nowrap" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px" }}>

        {/* TAB 0: OVERVIEW */}
        {activeTab === 0 && (
          <div>

            {/* Section 1 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: 12 }}>A New Beginning: The Proverbs of Solomon (v.1)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Chapter 10 opens with a fresh superscription: &ldquo;The proverbs of Solomon.&rdquo; This is a literary hinge. Everything before it (chapters 1-9) consisted of long, developed discourses &mdash; the father&rsquo;s lectures, the call of Lady Wisdom in the streets, the seductive whisper of the adulteress, the great poem of Wisdom present at creation. With 10:1 that style ends and the book&rsquo;s defining form begins: the individual proverb, typically a single verse of two balanced lines." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The very first of these sets the tone: &ldquo;A wise son makes a glad father, but a foolish son is a sorrow to his mother&rdquo; (v.1). The mention of father and mother deliberately echoes the family setting of chapters 1-9, easing the reader from the extended speeches into the staccato sayings. But the form has changed completely. Where the earlier chapters argued and persuaded at length, this verse simply states two outcomes and lets the contrast do the work. The reader is now meant to slow down and meditate on each saying, one at a time." }} />
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>Wealth, Righteousness, and the Hand of God (vv.2-5)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The opening cluster of sayings concerns wealth, work, and their relationship to character. &ldquo;Treasures gained by wickedness do not profit, but righteousness delivers from death&rdquo; (v.2). Ill-gotten gain ultimately yields no lasting benefit; it is righteousness, not riches, that rescues. Verse 3 grounds this in the character of God himself: &ldquo;The LORD does not let the righteous go hungry, but he thwarts the craving of the wicked.&rdquo; Behind the deed-consequence connection stands a personal God who actively sustains the righteous and frustrates the schemes of the wicked." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Verses 4-5 then turn to the practical engine of provision: diligence. &ldquo;A slack hand causes poverty, but the hand of the diligent makes rich&rdquo; (v.4). And in agricultural imagery: &ldquo;He who gathers in summer is a prudent son, but he who sleeps in harvest is a son who brings shame&rdquo; (v.5). Wisdom is not only about ultimate destiny; it is about reading the seasons rightly, working when work is to be done, and not squandering opportunity through laziness. The harvest does not wait for the sluggard." }} />
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>The Mouth as Fountain and Concealment (v.11)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "A major preoccupation of the chapter is speech, and verse 11 gives one of its richest images: &ldquo;The mouth of the righteous is a fountain of life, but the mouth of the wicked conceals violence.&rdquo; The righteous person&rsquo;s words are like a spring in a dry land &mdash; refreshing, life-giving, a source from which others may drink. They build up, encourage, instruct, and heal. Words, in this vision, are not neutral; they actively give life." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The contrast is chilling: the mouth of the wicked &ldquo;conceals violence.&rdquo; Beneath the surface of the wicked person&rsquo;s speech lies hidden harm &mdash; smooth words that mask malice, flattery that disguises a trap, a pleasant tone that hides the intent to wound or exploit. The same instrument, the mouth, can be a fountain of life or a hidden weapon. The chapter returns again and again to this theme: what comes out of a person&rsquo;s mouth reveals, and shapes, the kind of person they are." }} />
            </div>

            {/* Section 4 - Key Verse */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ color: GOLD, marginBottom: 12, fontSize: "1.1rem" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0 }}>
                <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Hatred stirs up strife, but love covers all offenses.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>Proverbs 10:12 (ESV)</p>
              </blockquote>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: 12 }}>Love That Covers and Words That Restrain (vv.12, 19)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Verse 12 is among the most quoted in the chapter: &ldquo;Hatred stirs up strife, but love covers all offenses.&rdquo; Hatred is restless to provoke conflict, always finding fresh fuel for the fire. Love does the opposite: it covers, it does not parade or multiply the faults of others, it absorbs offense rather than broadcasting it. This verse is taken up directly in the New Testament, where Peter writes, &ldquo;love covers a multitude of sins&rdquo; (1 Peter 4:8), and James echoes the same idea (James 5:20)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "A complementary saying on speech comes in verse 19: &ldquo;When words are many, transgression is not lacking, but whoever restrains his lips is prudent.&rdquo; The more we talk, the greater the statistical certainty that something foolish, harmful, or sinful will slip out. The prudent person, by contrast, exercises restraint &mdash; knowing when to be silent, weighing words before speaking, and recognizing that wisdom is often shown as much in what is left unsaid as in what is said. The controlled tongue is a mark of maturity." }} />
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: 12 }}>The Fear of the LORD and Length of Days (v.27)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Near the end of the chapter stands a saying that ties the whole collection back to the book&rsquo;s thesis: &ldquo;The fear of the LORD prolongs life, but the years of the wicked will be short&rdquo; (v.27). The fear of the LORD &mdash; reverent awe, trust, and obedience toward God &mdash; was announced in 1:7 as &ldquo;the beginning of knowledge,&rdquo; and here it surfaces again as the root of a long and well-ordered life. Wisdom is not finally a technique but a relationship with the LORD." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The surrounding verses reinforce the same horizon: &ldquo;The hope of the righteous brings joy, but the expectation of the wicked will perish&rdquo; (v.28); &ldquo;The way of the LORD is a stronghold to the blameless, but destruction to evildoers&rdquo; (v.29). These sayings are not crude guarantees that every righteous person will outlive every wicked one in this life. They are statements of the deep grain of reality: a life lived in the fear of the LORD is built on something that endures, while the wicked build on what cannot last. The chapter closes by anchoring its many observations in the steady governance of God." }} />
            </div>

          </div>
        )}

        {/* TAB 1: KEY THEMES */}
        {activeTab === 1 && (
          <div>

            {/* Theme 1 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GOLD, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Antithetical Proverb Form</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The defining literary feature of Proverbs 10 is antithetical parallelism: a two-line saying in which the second line states the opposite of the first, usually joined by &ldquo;but.&rdquo; &ldquo;A wise son makes a glad father, BUT a foolish son is a sorrow to his mother.&rdquo; Almost every verse in this chapter follows the pattern. After the flowing discourses of chapters 1-9, the reader meets a wall of contrasts, each one compact, balanced, and self-contained." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The form is not merely a stylistic preference; it is a teaching method. By placing opposites side by side, the proverb forces the reader to see a truth from both directions at once &mdash; what wisdom looks like and what folly looks like, what the righteous gain and what the wicked lose. The contrast sharpens each truth and makes it memorable. The two lines together draw a clear line between two ways of living and invite the hearer to stand on one side of it." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Because each proverb is largely independent, the chapter does not build a single argument but assembles a mosaic. The reader is meant to take them one at a time, turning each over, rather than racing through for a cumulative conclusion. This is wisdom delivered in concentrated drops, designed for meditation and memorization &mdash; the kind of saying a parent could teach a child, a worker could recall in the field, or a believer could ponder through a long day." }} />
            </div>

            {/* Theme 2 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Two Ways: Righteous and Wicked</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The deepest structure of the chapter is the division of humanity into two camps: the righteous and the wicked, the wise and the foolish. There is no third option, no neutral middle. Verse after verse describes the diverging destinies of these two groups: the righteous are remembered with blessing (v.7), are delivered from death (v.2), will never be uprooted (v.30); the wicked have their name rot, their craving thwarted, their hope perish." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This is the same &ldquo;two ways&rdquo; theology that runs from Psalm 1 (the way of the righteous and the way of the wicked) through the whole wisdom tradition and into the teaching of Jesus, who speaks of the narrow gate and the wide road, the house on the rock and the house on the sand. Proverbs 10 presses the reader to ask a single defining question: which way am I walking? The sayings function like a series of mirrors, each one asking the reader to locate himself among the wise or the foolish." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Importantly, in Proverbs the &ldquo;righteous&rdquo; and the &ldquo;wicked&rdquo; are not abstract moral categories but lived patterns of conduct &mdash; how a person handles money, work, words, anger, and relationships. The two ways are concrete and daily. One walks the way of righteousness not by a single heroic choice but by a thousand small ones, each shaped by the fear of the LORD." }} />
            </div>

            {/* Theme 3 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: PURPLE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Power of Speech</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "No theme recurs more often in Proverbs 10 than the tongue. The mouth of the righteous is &ldquo;a fountain of life&rdquo; (v.11) and &ldquo;the lips of the righteous feed many&rdquo; (v.21). By contrast, &ldquo;the mouth of the wicked conceals violence&rdquo; (v.11), &ldquo;a babbling fool will come to ruin&rdquo; (v.10), and &ldquo;when words are many, transgression is not lacking&rdquo; (v.19). The chapter treats speech as one of the truest indices of the heart and one of the most consequential powers a person wields." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The wisdom of speech in this chapter has two sides. The first is restraint: &ldquo;whoever restrains his lips is prudent&rdquo; (v.19). The wise know when to be silent and how to weigh their words. The second is constructive power: righteous lips do not merely avoid harm; they actively nourish, instruct, and bring life to others. To control the tongue is the negative discipline; to make it a fountain of life is the positive calling." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This emphasis flows directly into the New Testament, where James devotes a whole chapter to the tongue &mdash; small as a rudder yet able to set a forest ablaze (James 3) &mdash; and where Paul urges that no corrupting talk come out of our mouths but only what builds up and gives grace (Ephesians 4:29). Proverbs 10 lays the groundwork: words are never trivial; they are the overflow of the heart and a means of life or death to those who hear them." }} />
            </div>

            {/* Theme 4 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GREEN, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Diligence, Laziness, and Wealth</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Proverbs 10 returns repeatedly to the contrast between the diligent and the slack. &ldquo;A slack hand causes poverty, but the hand of the diligent makes rich&rdquo; (v.4). The image of the slack or loose hand &mdash; a hand that will not grip the work &mdash; recurs throughout the book as a portrait of the sluggard. The diligent hand, by contrast, takes hold of opportunity and labors faithfully, and in the ordinary course of things this leads to provision and plenty." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Verse 5 sharpens the point with the rhythm of the agricultural year: &ldquo;He who gathers in summer is a prudent son, but he who sleeps in harvest is a son who brings shame.&rdquo; There is a time to work, and the wise person reads the season and acts within it. To sleep through the harvest is not merely unfortunate; it is shameful, a squandering of the window God provides. Wisdom includes the discipline of timing &mdash; doing the right work at the right moment." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Yet the chapter holds diligence in careful balance with its theology of God&rsquo;s provision. &ldquo;The LORD does not let the righteous go hungry&rdquo; (v.3), and &ldquo;the blessing of the LORD makes rich, and he adds no sorrow with it&rdquo; (v.22). Hard work is essential, but wealth is finally a blessing from the LORD, not a mechanical reward we manufacture. Diligence and dependence are not in tension; the wise person works hard and trusts God, never collapsing the one into the other." }} />
            </div>

            {/* Theme 5 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: TEAL, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Deed-Consequence Connection</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Underlying nearly every saying in the chapter is a conviction often called the deed-consequence connection: actions carry their outcomes within them. Righteousness tends toward life and blessing; wickedness tends toward ruin. &ldquo;The wage of the righteous leads to life, the gain of the wicked to sin&rdquo; (v.16). The world, in the wisdom vision, is morally ordered &mdash; not a chaos in which anything can lead to anything, but a creation with a moral grain that the wise learn to work with." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Crucially, this is not an impersonal law of karma. The chapter repeatedly names the LORD as the active agent who upholds the moral order: he keeps the righteous from hunger and thwarts the wicked (v.3); his blessing makes rich (v.22); his way is a stronghold to the blameless (v.29). The deed-consequence connection is sustained by a personal God who governs his world, not by a mechanical force. This is the wisdom tradition&rsquo;s theology of retribution &mdash; reality answers to a righteous Lord." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This theme must be held alongside the rest of Scripture, including Job and Ecclesiastes, which wrestle openly with the cases where the connection seems broken &mdash; the righteous who suffer and the wicked who prosper. Proverbs describes the way the world generally and reliably works; the other wisdom books explore the exceptions and the longer horizon. Together they teach the believer both to trust the moral order God has built and to wait in faith when, for a time, that order seems hidden." }} />
            </div>

            {/* Theme 6 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The New Testament Use of Proverbs 10:12</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Among all the sayings in this chapter, verse 12 has the most direct New Testament afterlife: &ldquo;Hatred stirs up strife, but love covers all offenses.&rdquo; Peter draws on it explicitly: &ldquo;Above all, keep loving one another earnestly, since love covers a multitude of sins&rdquo; (1 Peter 4:8). James seems to echo the same proverb when he says that whoever turns a sinner back &ldquo;will cover a multitude of sins&rdquo; (James 5:20). A single Old Testament couplet becomes a load-bearing principle for Christian community." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The image of love &ldquo;covering&rdquo; offenses is rich. It does not mean ignoring sin or pretending wrong has not occurred; rather, it means refusing to expose, publicize, multiply, or weaponize the faults of others. Love does not go looking for offenses to broadcast; it absorbs them, forgives them, and protects the relationship rather than the grievance. In a community of imperfect people, this covering love is the only thing that keeps fellowship from collapsing under the weight of mutual failure." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "That a proverb from Solomon&rsquo;s collection becomes a cornerstone of apostolic ethics shows how the wisdom of Proverbs is not left behind in the new covenant but taken up and fulfilled. The covering love that Proverbs commends finds its ultimate expression in the cross, where the offenses of many were covered once for all. The believer&rsquo;s call to cover offenses in love is a reflection of the gospel itself." }} />
            </div>

          </div>
        )}

        {/* TAB 2: VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>

            {/* v.1 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verse 1: The Collection Begins</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>A Wise Son and a Glad Father</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.1a</strong> &mdash; The heading &ldquo;The proverbs of Solomon&rdquo; signals the start of the book&rsquo;s main collection. The flowing lectures of chapters 1-9 give way to terse, two-line sayings. From here through 22:16 the reader encounters hundreds of these independent maxims, most built on the contrast pattern that dominates chapter 10." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.1b</strong> &mdash; &ldquo;A wise son makes a glad father, but a foolish son is a sorrow to his mother.&rdquo; The verse bridges old and new: it keeps the family setting of the earlier chapters while modeling the new form. Naming both father and mother shows that a child&rsquo;s conduct reaches into the whole household. Wisdom and folly are not private; they produce joy or grief in the people who love us most." }} />
            </div>

            {/* vv.2-5 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 2-5: Wealth, Provision, and Work</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Righteousness Delivers, Diligence Provides</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.2-3</strong> &mdash; &ldquo;Treasures gained by wickedness do not profit, but righteousness delivers from death.&rdquo; Ill-gotten wealth has no lasting power to save; righteousness does what riches cannot. Verse 3 roots this in God: &ldquo;The LORD does not let the righteous go hungry, but he thwarts the craving of the wicked.&rdquo; The moral order is not impersonal; the LORD himself sustains the righteous and frustrates the appetites of the wicked." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.4-5</strong> &mdash; &ldquo;A slack hand causes poverty, but the hand of the diligent makes rich.&rdquo; The slack hand is the recurring emblem of the sluggard; the diligent hand grips the work. Verse 5 adds the wisdom of timing: &ldquo;He who gathers in summer is a prudent son, but he who sleeps in harvest is a son who brings shame.&rdquo; The wise read the seasons and act within them; to sleep through harvest is to forfeit what God has provided and to bring shame on oneself." }} />
            </div>

            {/* vv.6-11 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 6-11: Blessing, Memory, and the Mouth</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>A Fountain of Life</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.6-7</strong> &mdash; &ldquo;Blessings are on the head of the righteous, but the mouth of the wicked conceals violence&rdquo; (v.6). Verse 7 contrasts how the two are remembered: &ldquo;The memory of the righteous is a blessing, but the name of the wicked will rot.&rdquo; Reputation outlives the person; the righteous leave a legacy that blesses, while the very name of the wicked decays. The way we live shapes how we will be remembered." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.8-10</strong> &mdash; &ldquo;The wise of heart will receive commandments, but a babbling fool will come to ruin&rdquo; (v.8). The wise listen and obey; the fool talks himself into destruction. Verse 9 commends integrity: &ldquo;Whoever walks in integrity walks securely, but he who makes his ways crooked will be found out.&rdquo; Crookedness may hide for a time, but it will be exposed. Verse 10 warns against the troublemaker whose sly gestures and reckless speech sow grief." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.11</strong> &mdash; &ldquo;The mouth of the righteous is a fountain of life, but the mouth of the wicked conceals violence.&rdquo; This is one of the chapter&rsquo;s central images. The righteous person&rsquo;s words refresh and give life like a spring in a dry land; the wicked person&rsquo;s words hide harm beneath a pleasant surface. The same instrument can heal or wound, depending on the heart from which it flows." }} />
            </div>

            {/* vv.12-21 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 700 }}>Verses 12-21: Love, Restraint, and Nourishing Lips</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Love Covers, Restraint Is Prudent</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.12</strong> &mdash; &ldquo;Hatred stirs up strife, but love covers all offenses.&rdquo; Hatred is restless to provoke conflict; love refuses to expose or multiply the faults of others, absorbing offense rather than broadcasting it. The verse is quoted directly by Peter (1 Peter 4:8) and echoed by James (5:20), becoming a foundation stone of New Testament teaching on Christian fellowship." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.13-18</strong> &mdash; This cluster keeps circling speech and wealth: wisdom is found on the lips of the discerning (v.13); the rich man&rsquo;s wealth is his fortress, but it can be a deceptive one (v.15); the wage of the righteous leads to life (v.16); whoever heeds instruction is on the path of life (v.17); lying lips and slander mark the fool (v.18). The wise person guards both his words and his heart." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.19-21</strong> &mdash; &ldquo;When words are many, transgression is not lacking, but whoever restrains his lips is prudent&rdquo; (v.19). Volume of speech multiplies the chance of sin; restraint is wisdom. Verse 20 calls the tongue of the righteous &ldquo;choice silver,&rdquo; while &ldquo;the lips of the righteous feed many&rdquo; (v.21) and &ldquo;fools die for lack of sense.&rdquo; The righteous mouth not only avoids harm but actively nourishes others." }} />
            </div>

            {/* vv.22-32 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 700 }}>Verses 22-32: Blessing, the Fear of the LORD, and Enduring Hope</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Fear of the LORD Prolongs Life</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.22-24</strong> &mdash; &ldquo;The blessing of the LORD makes rich, and he adds no sorrow with it&rdquo; (v.22). True prosperity comes from God and carries no hidden grief. Verse 23 contrasts the fool, who finds amusement in wrongdoing, with the person of understanding, who delights in wisdom. Verse 24 sounds the deed-consequence note: what the wicked dreads will come upon him, but the desire of the righteous will be granted." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.25-27</strong> &mdash; &ldquo;When the tempest passes, the wicked is no more, but the righteous is established forever&rdquo; (v.25). The righteous have a foundation that storms cannot sweep away. Verse 26 paints the sluggard as vinegar to the teeth and smoke to the eyes &mdash; an irritation to those who depend on him. Verse 27 anchors the whole chapter: &ldquo;The fear of the LORD prolongs life, but the years of the wicked will be short.&rdquo; Reverence for God is the root of a long, well-ordered life." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.28-32</strong> &mdash; &ldquo;The hope of the righteous brings joy, but the expectation of the wicked will perish&rdquo; (v.28). &ldquo;The way of the LORD is a stronghold to the blameless, but destruction to evildoers&rdquo; (v.29). The chapter ends on speech once more: &ldquo;The mouth of the righteous brings forth wisdom&rdquo; (v.31) and &ldquo;the lips of the righteous know what is acceptable&rdquo; (v.32), while the perverse tongue is cut off. The collection closes where so much of it dwelt &mdash; on the enduring hope of the righteous and the life-giving power of righteous words." }} />
            </div>

          </div>
        )}

        {/* TAB 3: APPLICATION */}
        {activeTab === 3 && (
          <div>

            {/* Application 1 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: 12 }}>Read Proverbs as Principles, Not Absolute Promises</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Proverbs 10 says the LORD does not let the righteous go hungry and that the fear of the LORD prolongs life. Yet we know righteous people who have gone hungry and godly people who died young. The key to reading Proverbs faithfully is to understand its genre: a proverb states a general truth about how the world usually and reliably works, not an iron-clad guarantee for every individual case. It tells us the grain of reality, the wise direction in which to live." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "This protects us from two errors: despair when life seems not to match the proverb, and a prosperity-gospel reading that treats godliness as a guaranteed formula for wealth and long life. Job and Ecclesiastes sit in the same canon precisely to explore the exceptions. The wise believer trusts the general truth of Proverbs, lives by it, and waits in faith for the longer horizon when, in eternity, the moral order God built will be fully vindicated." }} />
            </div>

            {/* Application 2 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: ROSE, fontSize: "1.1rem", marginBottom: 12 }}>Guard Your Words and Make Them a Fountain</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The chapter&rsquo;s relentless focus on the tongue presses a daily discipline. &ldquo;When words are many, transgression is not lacking&rdquo; (v.19) is a call to talk less and listen more, to weigh words before speaking, and to recognize that wisdom often shows itself in restraint. Before we speak, the proverb invites us to ask whether what we are about to say is true, kind, necessary, and timely." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "But restraint is only half the calling. The mouth of the righteous is a fountain of life (v.11) and the lips of the righteous feed many (v.21). The goal is not merely to avoid harmful speech but to use words to nourish, encourage, instruct, and heal. Each day offers countless chances to speak life into others. The question is whether our mouths are springs from which people drink and are refreshed, or hidden weapons that wound." }} />
            </div>

            {/* Application 3 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.1rem", marginBottom: 12 }}>Let Love Cover Offenses</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Hatred stirs up strife, but love covers all offenses&rdquo; (v.12). In every family, friendship, workplace, and church, we are constantly faced with the small (and sometimes large) failures of others. The proverb gives us a choice between two postures: hatred, which keeps stirring the pot, rehearsing grievances, and broadcasting faults; or love, which covers &mdash; not by denying wrong, but by refusing to expose, multiply, or weaponize it." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "Peter calls this love the thing to pursue &ldquo;above all&rdquo; (1 Peter 4:8), because it is the only thing that keeps a community of sinners from tearing itself apart. Covering love does not mean ignoring serious sin that needs to be addressed; it means we do not go looking for offenses to publicize, and we forgive the daily friction of life together. This is a direct reflection of the gospel, in which our own offenses were covered by Christ at the cross." }} />
            </div>

            {/* Application 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Work Diligently and Trust God for the Increase</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Proverbs 10 honors the diligent hand and shames the slack one (v.4), and it praises the one who gathers in summer rather than sleeping through harvest (v.5). There is a time to work, and wisdom includes the discipline of reading the season and laboring within it. The chapter offers no comfort to laziness; faithfulness in our work is part of walking in wisdom." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "Yet the same chapter insists that &ldquo;the blessing of the LORD makes rich&rdquo; (v.22). Diligence and dependence are held together, not played against each other. We work hard as if it depends on us, and we trust God as the One who finally gives the increase. This guards us from both the laziness that presumes on grace and the anxious self-reliance that forgets the LORD. We labor faithfully and rest in his provision." }} />
            </div>

            {/* Application 5 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: 12 }}>Discussion Questions</h3>
              <ol style={{ color: MUTED, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                <li dangerouslySetInnerHTML={{ __html: "Proverbs are general principles, not absolute promises. Where have you been tempted to read a proverb as a guarantee, and how does understanding the genre change the way you trust it?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Verse 19 warns that many words multiply sin and commends restraint. In what situations do you most need to talk less and listen more? What would change if you practiced that restraint this week?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Verse 11 calls the mouth of the righteous &ldquo;a fountain of life.&rdquo; Whose life could you nourish with your words? What is one concrete, life-giving thing you could say to someone this week?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Verse 12 says &ldquo;love covers all offenses.&rdquo; Is there an offense you have been rehearsing or broadcasting rather than covering? What would it look like to let love cover it?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The chapter holds together hard work (v.4) and the LORD&rsquo;s blessing (v.22). Do you tend to lean toward anxious self-reliance or toward laziness that presumes on grace, and how can you keep diligence and dependence in balance?" }} />
              </ol>
            </div>

            {/* Application 6 */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}22 0%, ${TEAL}11 100%)`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Prayer Focus</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Lord, you have set before me two ways &mdash; the way of the righteous and the way of the wicked &mdash; and you call me to walk in wisdom. Make my mouth a fountain of life and not a hidden weapon; teach me when to speak and when to keep silent, for in many words sin is not lacking. Give me a love that covers offenses rather than a heart that stirs up strife. Help me to work diligently in the season you have given and to trust your blessing for every increase. And root my whole life in the fear of you, for that is the beginning of wisdom and the source of length of days. Establish me forever on the foundation that no tempest can sweep away. Amen." }} />
            </div>

          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 8, color: TEXT }}>Video Teaching</h2>
          <p style={{ color: MUTED, marginBottom: 32, fontSize: "0.95rem" }}>Watch these selected teachings to deepen your understanding of Proverbs 10.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "12px 16px" }}>
                  <p style={{ color: TEXT, fontSize: "0.9rem", fontWeight: 600, margin: 0 }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
