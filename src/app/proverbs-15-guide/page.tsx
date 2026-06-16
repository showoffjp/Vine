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

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

interface SubBlock {
  heading: string;
  reference: string;
  color: string;
  paragraphs: string[];
}

const themeBlocks: SubBlock[] = [
  {
    heading: "The Soft Answer and the Power of Gentle Speech",
    reference: "Proverbs 15:1",
    color: GOLD,
    paragraphs: [
      "Proverbs 15 opens with one of the most quoted and practical verses in all of Scripture: &ldquo;A soft answer turns away wrath, but a harsh word stirs up anger&rdquo; (v. 1). The proverb is built on the antithetical form so characteristic of this book, setting two opposite responses side by side so that the contrast itself teaches the lesson. A gentle, measured reply has the power to defuse a tense and angry exchange, while a sharp, cutting word pours fuel on the fire. The verse names a dynamic that every reader has experienced from both sides.",
      "The wisdom here is profoundly counterintuitive. When attacked or provoked, the natural human instinct is to answer harshness with harshness, to match force with force, to defend oneself by escalating. The proverb teaches the opposite: that strength in conflict often lies in restraint, and that the truly wise person controls not only what is said but the very tone in which it is spoken. The soft answer is not weakness or cowardice; it is the deliberate, disciplined choice to lower the temperature rather than raise it.",
      "This theme runs throughout chapter 15, which returns again and again to the power of the tongue. Speech, in the wisdom of Proverbs, is never trivial; words have the power to heal or to wound, to build up or to tear down, to bring life or death (Proverbs 18:21). The soft answer is the visible fruit of an inner disposition shaped by humility and self-control, and it stands as a kind of motto for the whole chapter, which probes the difference between wise and foolish speech at every turn.",
      "The New Testament gathers up and deepens this wisdom. James devotes an entire passage to the power of the tongue, that small member which boasts of great things and can set a whole forest ablaze (James 3:5&ndash;6). Paul urges that our speech be always gracious, seasoned with salt (Colossians 4:6). And the supreme example is Christ himself, who when reviled did not revile in return, but entrusted himself to the One who judges justly (1 Peter 2:23). The soft answer finds its perfect embodiment in the Savior.",
    ],
  },
  {
    heading: "Wise Speech and the Tree of Life",
    reference: "Proverbs 15:2, 4",
    color: GREEN,
    paragraphs: [
      "The chapter continues to explore the contrast between wise and foolish speech. &ldquo;The tongue of the wise commends knowledge, but the mouths of fools pour out folly&rdquo; (v. 2). The wise person uses words to make knowledge attractive and accessible, dispensing it with care and timing so that it commends itself to the hearer. The fool, by contrast, simply &ldquo;pours out&rdquo; folly, gushing forth whatever is in his heart without restraint or discernment. The image is of an overflowing vessel that cannot hold back its contents.",
      "Verse 4 deepens the theme with a striking metaphor: &ldquo;A gentle tongue is a tree of life, but perverseness in it breaks the spirit.&rdquo; The phrase &ldquo;tree of life&rdquo; reaches all the way back to Eden, evoking the source of life and healing that God planted in the garden. Words spoken with gentleness and grace nourish and sustain those who receive them, giving life to the weary and refreshment to the discouraged. The right word at the right time has a creative, life-giving power that echoes the very tree of life itself.",
      "The opposite is equally vivid: perverseness or crookedness in the tongue &ldquo;breaks the spirit.&rdquo; Twisted, deceitful, cruel speech does not merely offend; it crushes something in the hearer, breaking down the spirit and wounding the soul. The same instrument that can be a tree of life can also be a weapon that shatters. The proverb thus charges the reader with enormous responsibility, for the tongue holds within it the power both to heal and to destroy.",
      "Taken together, these verses portray speech as a moral and spiritual act of the highest consequence. The wise are not merely those who possess knowledge but those who know how to speak it well, dispensing it as a tree dispenses fruit. The pursuit of wisdom is therefore inseparable from the disciplining of the tongue, and the believer who would grow in grace must give careful attention to the words that proceed from the heart.",
    ],
  },
  {
    heading: "The Eyes of the LORD in Every Place",
    reference: "Proverbs 15:3, 11",
    color: PURPLE,
    paragraphs: [
      "At the very center of the chapter&rsquo;s teaching on conduct stands a profound statement about God himself: &ldquo;The eyes of the LORD are in every place, keeping watch on the evil and the good&rdquo; (v. 3). This is the doctrine of divine omniscience and omnipresence stated in the plain, memorable form of a proverb. Nothing escapes the gaze of God; there is no place so hidden, no deed so secret, no thought so concealed that it lies beyond his sight. He keeps watch over the evil and the good alike, and all human conduct unfolds before his eyes.",
      "This verse functions as the theological foundation for the entire chapter and indeed for the whole book of Proverbs. The soft answer, the gentle tongue, the contented heart, the humble spirit &mdash; all of these matter precisely because they are seen by the One whose eyes are in every place. Wisdom is not merely social skill or shrewd management of life; it is lived out before the watching face of God, who sees and weighs every word and motive.",
      "The same truth is sounded again in verse 11: &ldquo;Sheol and Abaddon lie open before the LORD; how much more the hearts of the children of man!&rdquo; If even the realm of the dead, the deepest and most hidden place imaginable, is laid bare before God, then surely the human heart with all its secret thoughts is fully exposed to him. This is a sobering and searching truth, stripping away every illusion that any part of life can be lived in the dark, away from the divine gaze.",
      "This teaching stands in the great biblical tradition of God&rsquo;s all-seeing knowledge, supremely expressed in Psalm 139: &ldquo;O LORD, you have searched me and known me . . . even before a word is on my tongue, behold, O LORD, you know it altogether&rdquo; (Psalm 139:1, 4). For the wicked this is a terror, but for the faithful it is a comfort, for the God who sees all is also the God who knows our frame, remembers our struggles, and watches over us for good. The eyes of the LORD are at once a warning and a refuge.",
    ],
  },
  {
    heading: "The Better-Than Proverbs: Contentment and Love",
    reference: "Proverbs 15:16&ndash;17",
    color: TEAL,
    paragraphs: [
      "Chapter 15 contains two of the most beloved of the &ldquo;better than&rdquo; proverbs, a distinctive form that weighs two goods against each other and declares which is truly superior. &ldquo;Better is a little with the fear of the LORD than great treasure and trouble with it&rdquo; (v. 16). The proverb does not condemn wealth itself, but it insists that a modest portion held in reverent fellowship with God far surpasses great riches accompanied by anxiety and turmoil. The fear of the LORD is the one ingredient that turns even a little into a feast.",
      "This is a direct challenge to the assumptions of every age, including our own, which measures the good life by the size of one&rsquo;s treasure. The proverb reverses the scale of value entirely. Great wealth is not the highest good; it can even be a curse if it comes laden with &ldquo;trouble.&rdquo; What makes life truly rich is not abundance but the fear of the LORD, that reverent, trusting relationship with God which brings peace to the soul regardless of outward circumstances.",
      "The companion proverb in verse 17 makes the same point through the homely image of a shared meal: &ldquo;Better is a dinner of herbs where love is than a fattened ox and hatred with it.&rdquo; A simple meal of vegetables eaten among those who love one another is better than the finest feast of roasted ox poisoned by hatred and strife. The proverb teaches that the quality of our relationships matters infinitely more than the quality of our provisions, and that love at a humble table is worth more than luxury without it.",
      "Together these two proverbs commend a vision of the good life rooted in contentment, reverence, and love rather than acquisition. They expose the emptiness of a life that gains the world&rsquo;s treasure but loses peace, communion with God, and loving relationships. The New Testament echoes this wisdom when Paul writes that &ldquo;godliness with contentment is great gain&rdquo; (1 Timothy 6:6) and when the writer to the Hebrews urges, &ldquo;Keep your life free from love of money, and be content with what you have&rdquo; (Hebrews 13:5).",
    ],
  },
  {
    heading: "The Heart and the Countenance",
    reference: "Proverbs 15:13, 15",
    color: ROSE,
    paragraphs: [
      "Proverbs 15 displays a remarkable insight into the connection between the inner life of the heart and its outward expression. &ldquo;A glad heart makes a cheerful face, but by sorrow of heart the spirit is crushed&rdquo; (v. 13). The proverb observes how the inner state of the heart shapes the visible countenance; joy within radiates outward in a cheerful face, while sorrow within bows down and crushes the spirit. The wisdom tradition does not separate the inner and outer life but sees them as deeply intertwined.",
      "Verse 15 develops this with great psychological depth: &ldquo;All the days of the afflicted are evil, but the cheerful of heart has a continual feast.&rdquo; The proverb does not deny that affliction is real and that hard days come. But it observes that the disposition of the heart colors the whole of one&rsquo;s experience. The one whose heart is cast down finds every day burdensome, while the one with a cheerful, trusting heart enjoys a continual feast regardless of outward circumstances. The feast is not in the table but in the heart.",
      "This is not a call to denial or forced cheerfulness, but a recognition that the inner orientation of the heart profoundly shapes how life is lived. The same circumstances can be experienced as a burden or as a feast depending on the state of the soul. For the believer, the cheerful heart is ultimately rooted in trust, in the fear of the LORD, and in the assurance of God&rsquo;s watchful care, which is the very foundation the chapter has laid.",
      "The chapter also commends the value of counsel and humility in this connection. &ldquo;Without counsel plans fail, but with many advisers they succeed&rdquo; (v. 22). The wise person does not trust his own heart alone but seeks the counsel of others, recognizing that wisdom is found in community. And the chapter closes with its crowning maxim: &ldquo;The fear of the LORD is instruction in wisdom, and humility comes before honor&rdquo; (v. 33). The cheerful, well-counseled, humble heart is the soil in which true wisdom grows.",
    ],
  },
  {
    heading: "Counsel, Humility, and the Fear of the LORD",
    reference: "Proverbs 15:22, 33",
    color: GREEN,
    paragraphs: [
      "The chapter places great weight on the value of wise counsel in community. &ldquo;Without counsel plans fail, but with many advisers they succeed&rdquo; (v. 22). The proverb gently rebukes the proud self-sufficiency that refuses to seek advice. No single person, however gifted, sees every angle of a matter; plans formed in isolation are prone to failure, while plans tested and refined through many wise counselors are far more likely to succeed. Wisdom is a communal enterprise, and humility to seek and receive counsel is itself a mark of the wise.",
      "This commendation of counsel runs against the grain of a culture that prizes the lone visionary and the self-made decision. The book of Proverbs insists that the wise person surrounds himself with advisers, listens before acting, and tests his plans against the perspective of others. Such counsel is not a sign of weakness but of strength, for it is the proud and the foolish who imagine they have no need of any voice but their own.",
      "The chapter reaches its summit in its final verse, which gathers up the whole into a single maxim: &ldquo;The fear of the LORD is instruction in wisdom, and humility comes before honor&rdquo; (v. 33). The fear of the LORD, named at the very opening of Proverbs as the beginning of knowledge, is here named as the instruction or discipline of wisdom. All true wisdom is rooted in reverent submission to God; apart from this, the cleverest human insight is ultimately folly.",
      "The proverb closes with one of the great paradoxes of the biblical wisdom tradition: &ldquo;humility comes before honor.&rdquo; The way up is down; the path to true exaltation runs through lowliness. This truth is woven throughout Scripture and reaches its climax in the gospel, where the One who humbled himself, taking the form of a servant and becoming obedient to the point of death, was therefore highly exalted by God (Philippians 2:8&ndash;9). James and Peter both echo the proverb directly: &ldquo;God opposes the proud but gives grace to the humble&rdquo; (James 4:6; 1 Peter 5:5), and &ldquo;humble yourselves . . . so that at the proper time he may exalt you&rdquo; (1 Peter 5:6).",
    ],
  },
];

const sections: Section[] = [
  {
    id: "Overview",
    heading: "Overview of Proverbs 15",
    reference: "Proverbs 15:1&ndash;33",
    paragraphs: [
      "Proverbs 15 is one of the richest chapters in the book of Proverbs, a collection of individual sayings gathered around several recurring themes. Unlike a narrative or an argument that builds from beginning to end, this chapter is a string of pearls, each verse a self-contained nugget of wisdom that can stand on its own yet gains depth when read alongside its neighbors. The chapter opens with its most famous line, &ldquo;A soft answer turns away wrath&rdquo; (v. 1), and closes with one of its weightiest, &ldquo;The fear of the LORD is instruction in wisdom, and humility comes before honor&rdquo; (v. 33).",
      "Though the proverbs are individually composed, certain great themes weave through the chapter and give it coherence. The most prominent is the power of speech: the soft answer and the harsh word, the tongue of the wise and the mouth of the fool, the gentle tongue that is a tree of life. Closely related is the theme of the heart, the inner spring from which both speech and conduct flow, and which determines whether one&rsquo;s days are a burden or a continual feast.",
      "Anchoring the whole chapter is its towering doctrine of God: &ldquo;The eyes of the LORD are in every place, keeping watch on the evil and the good&rdquo; (v. 3). This statement of divine omniscience gives weight and seriousness to every other verse, for all the conduct the chapter commends or condemns is lived out before the watching eyes of God. Wisdom in Proverbs is never merely practical cleverness; it is life lived in the fear of the LORD, under his all-seeing gaze.",
      "The chapter also contains two of the beloved &ldquo;better than&rdquo; proverbs, which weigh competing goods and declare the surprising superior. &ldquo;Better is a little with the fear of the LORD than great treasure and trouble with it&rdquo; (v. 16), and &ldquo;Better is a dinner of herbs where love is than a fattened ox and hatred with it&rdquo; (v. 17). These sayings reverse the world&rsquo;s scale of values, declaring that reverence, contentment, and love far outweigh wealth and luxury.",
      "Two literary forms dominate the chapter and are worth noticing. The antithetical proverb sets two opposites side by side, joined by &ldquo;but,&rdquo; so that the contrast itself does the teaching: a soft answer versus a harsh word, the glad heart versus the crushed spirit. The &ldquo;better than&rdquo; proverb, by contrast, places two goods on a scale and declares which is truly better, training the reader to value rightly. Both forms work by comparison, shaping not only what we know but how we weigh and choose.",
      "Read as a whole, Proverbs 15 paints a portrait of the wise life: gentle in speech, content in circumstances, glad in heart, humble in spirit, open to counsel, and grounded throughout in the fear of the LORD. This guide explores the chapter through four lenses: an overview of its message and form, its key recurring themes, a closer walk through its principal verses, and the ways its ancient wisdom shapes the believer&rsquo;s daily life today.",
    ],
  },
  {
    id: "Key Themes",
    heading: "Key Themes of Proverbs 15",
    reference: "Proverbs 15:1&ndash;33",
    paragraphs: [],
  },
  {
    id: "Verse by Verse",
    heading: "Walking Through Proverbs 15",
    reference: "Proverbs 15:1&ndash;33",
    paragraphs: [
      "Verse 1 sets the tone for the chapter: &ldquo;A soft answer turns away wrath, but a harsh word stirs up anger.&rdquo; The antithetical form contrasts two responses to conflict, teaching that gentleness defuses anger while harshness inflames it. This single verse summarizes the chapter&rsquo;s deep concern with the power of the tongue and the discipline of speech.",
      "Verse 2 continues the theme: &ldquo;The tongue of the wise commends knowledge, but the mouths of fools pour out folly.&rdquo; The wise dispense knowledge attractively and with discernment, while fools simply gush forth whatever is within them. Verse 4 adds the striking image of the tongue as a tree of life: &ldquo;A gentle tongue is a tree of life, but perverseness in it breaks the spirit.&rdquo; Gracious words give life; twisted words crush the soul.",
      "Verse 3 plants the chapter&rsquo;s great theological foundation: &ldquo;The eyes of the LORD are in every place, keeping watch on the evil and the good.&rdquo; This statement of divine omniscience undergirds everything else, for all conduct unfolds before the watching face of God. Verse 11 reinforces it: even Sheol and Abaddon lie open before the LORD, and how much more the hearts of the children of man.",
      "Verses 13 and 15 probe the connection between heart and countenance: &ldquo;A glad heart makes a cheerful face, but by sorrow of heart the spirit is crushed&rdquo; (v. 13), and &ldquo;All the days of the afflicted are evil, but the cheerful of heart has a continual feast&rdquo; (v. 15). The inner disposition of the heart colors the whole of life, so that the cheerful of heart feast continually whatever their circumstances.",
      "Verses 16 and 17 give the chapter&rsquo;s two great &ldquo;better than&rdquo; proverbs: &ldquo;Better is a little with the fear of the LORD than great treasure and trouble with it&rdquo; (v. 16), and &ldquo;Better is a dinner of herbs where love is than a fattened ox and hatred with it&rdquo; (v. 17). These reverse the world&rsquo;s values, declaring reverence and love superior to wealth and luxury.",
      "Verse 22 commends wise counsel: &ldquo;Without counsel plans fail, but with many advisers they succeed.&rdquo; Wisdom is a communal enterprise, found in the humility to seek and receive advice. The chapter then climbs to its crowning maxim in verse 33: &ldquo;The fear of the LORD is instruction in wisdom, and humility comes before honor.&rdquo; All true wisdom is rooted in reverence for God, and the path to honor runs through humility.",
    ],
  },
  {
    id: "Application",
    heading: "Application: Living the Wisdom of Proverbs 15",
    reference: "Proverbs 15:1&ndash;33",
    paragraphs: [
      "The first and most immediate application of Proverbs 15 is to the discipline of our speech. The soft answer that turns away wrath is not a mere personality trait but a skill to be cultivated and a choice to be made in the heat of conflict. The believer is called to pause before responding to provocation, to lower the temperature rather than raise it, and to make knowledge attractive by the grace with which it is spoken. Few decisions shape our relationships, our families, and our churches more than the daily choice between the soft answer and the harsh word.",
      "Second, the truth that the eyes of the LORD are in every place reshapes the whole of life. To live in the conscious awareness that God sees every deed, hears every word, and knows every thought is both a sobering warning against secret sin and a profound comfort in loneliness and obscurity. The believer is never truly alone and never truly hidden; the God who sees all is the God who watches over his own for good. This awareness lends weight and seriousness to even the smallest and most private acts of obedience.",
      "Third, the &ldquo;better than&rdquo; proverbs call the believer to a radical recalibration of values in a culture obsessed with wealth and acquisition. A little with the fear of the LORD is better than great treasure and trouble; a simple meal with love is better than a feast with hatred. To embrace this wisdom is to be set free from the anxious pursuit of more and to find contentment in reverence, relationship, and the peace that the world cannot give. The believer measures the good life not by the size of the treasure but by the presence of the fear of the LORD and of love.",
      "Fourth, the chapter&rsquo;s insight into the heart and the countenance invites believers to tend the inner spring from which all of life flows. Since a glad heart makes a cheerful face and the cheerful of heart enjoy a continual feast, the cultivation of a trusting, grateful, God-centered heart is no small matter. This is not forced positivity but a settled joy rooted in the fear of the LORD and the assurance of his watchful care. The believer guards the heart, knowing that from it flow the springs of life.",
      "Finally, the chapter calls the believer to seek counsel and to walk in humility. Plans formed in proud isolation are prone to failure, while those tested through many wise advisers tend to succeed; the wise therefore surround themselves with counsel and listen before acting. And above all, the believer takes to heart the chapter&rsquo;s closing maxim: the fear of the LORD is the very instruction of wisdom, and humility comes before honor. The way up is down, as the gospel of the humble and exalted Christ makes gloriously clear.",
    ],
  },
];

const reflectionQuestions = [
  "When was the last time a soft answer turned away wrath in one of your relationships, or a harsh word stirred up anger? What would change if you made the soft answer your deliberate practice?",
  "How does the truth that the eyes of the LORD are in every place affect the way you live in private, when no one else is watching?",
  "The chapter says a little with the fear of the LORD is better than great treasure with trouble. Where are you tempted to measure the good life by treasure rather than by reverence and love?",
  "A glad heart makes a cheerful face. What is the present state of your heart, and what would it look like to tend it as the spring from which your life flows?",
  "Proverbs 15 commends seeking counsel and walking in humility. Whose wise counsel do you need to seek, and where is God calling you to choose the lowly path that leads to honor?",
];

const videoItems = [
  { videoId: "Qk3Wc0xMjVE", title: "Proverbs 15 - A Soft Answer Turns Away Wrath (Bible Study)" },
  { videoId: "rT0Vd3sQ7bY", title: "The Eyes of the LORD Are in Every Place - Proverbs 15:3" },
  { videoId: "Jp9Q5tVx8aM", title: "Better Is a Little with the Fear of the LORD - Proverbs 15:16" },
  { videoId: "Lw4Hb2nZc8U", title: "Proverbs 15 - The Power of the Tongue and the Heart" },
];

export default function Proverbs15GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Proverbs 15 &mdash; The Soft Answer and the Eyes of the LORD
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;A soft answer turns away wrath, but a harsh word stirs up anger&rdquo; (Proverbs 15:1). A chapter of gathered wisdom on the power of gentle speech, the all-seeing eyes of the LORD, contentment over riches, the glad heart, wise counsel, and the humility that comes before honor." }} />
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />

            {activeTab === "Key Themes" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                {themeBlocks.map((block, bi) => (
                  <div key={bi} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${block.color}`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 4px", color: TEXT }} dangerouslySetInnerHTML={{ __html: block.heading }} />
                    <div style={{ color: block.color, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: block.reference }} />
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {block.paragraphs.map((para, i) => (
                        <p key={i} style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.02rem", lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: para }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {currentSection.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            )}

            {activeTab === "Application" && (
              <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
                <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.2rem" }}>Questions for Reflection</h3>
                <ul style={{ margin: 0, padding: "0 0 0 1.1rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                  {reflectionQuestions.map((q, i) => (
                    <li key={i} style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: q }} />
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        <div style={{ marginTop: "3.5rem", paddingTop: "2.5rem", borderTop: `1px solid ${BORDER}` }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Watch and Study Proverbs 15</h2>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, margin: "0 0 1.75rem" }}>
            Explore the wisdom of the soft answer, the all-seeing eyes of the LORD, and the better-than proverbs through these teaching videos.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Fear of the LORD Is Instruction in Wisdom</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Proverbs 15 begins with the soft answer that turns away wrath and ends with the fear of the LORD that is the instruction of wisdom. Between them lies a treasury of gathered wisdom on the power of the tongue, the all-seeing eyes of God, the contentment that outweighs riches, the glad heart, the value of counsel, and the humility that comes before honor &mdash; all lived out before the watching face of the LORD." }} />
        </div>
      </main>
    </div>
  );
}
