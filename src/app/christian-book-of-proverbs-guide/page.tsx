"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Fear of the Lord",
  "Wisdom and Folly",
  "Wisdom Personified",
  "Practical Wisdom",
  "Proverbs and Christ",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "The Fear of the Lord",
    heading: "The Fear of the Lord",
    reference: "Proverbs 1",
    paragraphs: [
      "Proverbs belongs to the &ldquo;wisdom literature&rdquo; of the Old Testament, alongside Job and Ecclesiastes. It is largely attributed to Solomon, whom God granted unparalleled wisdom (1 Kings 3). Its purpose is stated at the outset: &ldquo;to know wisdom and instruction, to understand words of insight&hellip; to give prudence to the simple, knowledge and discretion to the youth&rdquo; (1:2-4).",
      "The foundational principle of the entire book is announced in 1:7: &ldquo;The fear of the Lord is the beginning of knowledge; fools despise wisdom and instruction.&rdquo; This single sentence functions as the gateway to everything that follows. Before a reader learns one practical lesson about money or speech or friendship, Proverbs insists that the whole project of wise living must begin in the right relationship to God.",
      "This &ldquo;fear&rdquo; is not cringing terror but reverent awe &mdash; a recognition of God&rsquo;s majesty, authority, and moral order that reorients all of life. It is the posture of a creature before the Creator, of the finite before the infinite, of the sinner before the holy. To fear the Lord is to take him seriously as the most real and weighty fact of existence, and to order one&rsquo;s priorities accordingly.",
      "Wisdom in Proverbs is not mere intelligence or cleverness; it is skill in the art of godly living, the ability to navigate reality as God designed it. The Hebrew word often carries the sense of craftsmanship &mdash; the same term used for the skilled artisans who built the tabernacle. Wisdom is practical know-how applied to the moral and relational fabric of daily life, a kind of expertise in being human.",
      "Because God made the world, living wisely means living in alignment with the grain of his creation, and that begins with knowing and revering him. The wise person does not fight against the way reality is built; rather, like a woodworker who reads the grain before making a cut, the wise person discerns God&rsquo;s order and works with it. Folly, by contrast, is the futile effort to live against the grain.",
      "This is why Proverbs presents wisdom as something to be actively sought, like silver and hidden treasure (2:4). It must be desired, pursued, and prized. The book addresses itself especially to the young &mdash; &ldquo;my son&rdquo; &mdash; urging them to receive instruction while their character is still being formed, before foolish habits harden into a settled way of life.",
      "The fear of the Lord, then, is both the starting point and the soil in which all other wisdom grows. Strip it away, and the practical sayings of Proverbs become mere prudential tips, a manual for worldly success. Keep it central, and the whole book becomes what it was meant to be: an invitation to know God and to walk humbly and skillfully in his world.",
    ],
  },
  {
    id: "Wisdom and Folly",
    heading: "Wisdom and Folly",
    reference: "Proverbs 1-9",
    paragraphs: [
      "Proverbs presents life as a choice between two paths, two ways of living that lead to two destinations. The way of wisdom leads to life, flourishing, and blessing; the way of folly leads to destruction and death. There is no neutral third road in the worldview of Proverbs &mdash; every person is walking one way or the other, and the direction of the path determines the destination.",
      "These two ways are personified throughout as two women calling out to the &ldquo;simple&rdquo; &mdash; Lady Wisdom and the forbidden or foolish woman &mdash; each inviting the young to her house. Wisdom cries aloud in the streets and at the city gates, offering life; folly sits at her door calling out to those who pass by, promising stolen pleasures that end in the grave. The young reader must decide whose invitation to accept.",
      "The &ldquo;fool&rdquo; in Proverbs is not unintelligent but morally deficient. The book draws careful distinctions between several types. The &ldquo;simple&rdquo; are naive and easily led, lacking the discernment to see where a path is heading. The &ldquo;fool&rdquo; is stubborn and resistant to correction, repeating the same mistakes. The &ldquo;scoffer&rdquo; actively mocks wisdom and despises rebuke. And the &ldquo;sluggard&rdquo; is undone by laziness, forever inventing excuses while opportunity slips away.",
      "Wisdom, by contrast, is teachable, accepts correction, and grows. The wise person welcomes rebuke as a gift: &ldquo;Whoever loves discipline loves knowledge, but he who hates reproof is stupid&rdquo; (12:1). The mark of wisdom is not that one already knows everything, but that one remains humble, correctable, and eager to learn. This teachability is the trait that separates the wise from the fool more reliably than raw intelligence ever could.",
      "A central theme is that character is destiny: the choices we make and the habits we form set the trajectory of our lives. Small decisions, repeated daily, compound into a settled character, and that character carries us toward life or toward ruin. Proverbs takes the long view, insisting that the consequences of wisdom and folly, though sometimes delayed, are finally inescapable.",
      "This is captured in one of the book&rsquo;s most luminous images: &ldquo;The path of the righteous is like the light of dawn, which shines brighter and brighter until full day, but the way of the wicked is like deep darkness&rdquo; (4:18-19). The righteous walk in growing light, seeing their way more clearly with each step; the wicked stumble in darkness, not even knowing what makes them fall.",
      "The two-paths motif is therefore not a scare tactic but a clarifying gift. By naming the destinations honestly, Proverbs frees the reader to choose with open eyes. It is a summons to consider the end of the road before setting out upon it, and to choose, while choice is still possible, the way that leads to life.",
    ],
  },
  {
    id: "Wisdom Personified",
    heading: "Wisdom Personified",
    reference: "Proverbs 8",
    paragraphs: [
      "In one of the most striking passages of the book, wisdom is personified as a woman who was present with God at creation. This poetic figure, Lady Wisdom, is no mere literary ornament; she speaks with authority, calls out in public, and claims a relationship with God that reaches back before the world began. The personification lifts wisdom from the realm of helpful advice into something woven into the structure of reality itself.",
      "In Proverbs 8, Lady Wisdom declares: &ldquo;The Lord possessed me at the beginning of his work&hellip; before the beginning of the earth&hellip; when he established the heavens, I was there&hellip; then I was beside him, like a master workman, and I was daily his delight&rdquo; (8:22-30). She portrays herself rejoicing before God as he fashioned the cosmos, a companion in the great work of creation.",
      "Wisdom is woven into the very fabric of creation; the world is ordered according to it. This means that wisdom is not arbitrary, a set of customs that might have been otherwise. To live wisely is to live in tune with the deep structure of a universe that God made by wisdom. The same wisdom that ordered the heavens orders a well-lived human life, which is why folly is not merely unwise but unnatural &mdash; a discord struck against the music of creation.",
      "This poetic personification raised profound questions for later readers. If wisdom was &ldquo;with&rdquo; God at creation, distinct enough to be called his delight and his master workman, what exactly was this wisdom? The figure seemed to point beyond an abstract attribute toward something, or someone, more personal &mdash; a question the Old Testament left open and the New Testament would answer.",
      "The New Testament picks up the theme: Christ is called &ldquo;the wisdom of God&rdquo; (1 Cor 1:24, 30), the one &ldquo;through whom all things were made&rdquo; (John 1:3, Col 1:16). The language of Proverbs 8 &mdash; wisdom present at creation, the agent through whom the world was framed &mdash; finds a startling echo in the way the apostles describe the eternal Son. What was glimpsed in poetry becomes manifest in a person.",
      "The early church saw in Proverbs 8 a foreshadowing of the eternal Word. Reading it in light of the gospel, they heard in Lady Wisdom&rsquo;s ancient song an anticipation of Christ, the Logos who was with God in the beginning. While interpreters have debated the precise relationship, the deep instinct was sound: the wisdom that delighted God before the foundation of the world is fully revealed in his Son.",
      "To pursue wisdom, then, is ultimately to pursue the One in whom &ldquo;are hidden all the treasures of wisdom and knowledge&rdquo; (Col 2:3). The search for wisdom that Proverbs commends is not finally a search for a thing but for a Person. Every step toward true wisdom is a step toward Christ, and to find him is to find the treasure the whole book was reaching toward.",
    ],
  },
  {
    id: "Practical Wisdom",
    heading: "Practical Wisdom",
    reference: "Proverbs 10-29",
    paragraphs: [
      "The bulk of Proverbs, especially chapters 10-29, consists of short, pithy sayings offering practical wisdom for everyday life. After the extended poems of the opening chapters, the book settles into a different rhythm: hundreds of compact, two-line sayings, each a self-contained nugget of insight. They are made to be memorized, carried in the heart, and recalled in the moment a decision must be made.",
      "These cover an astonishing range of human experience, beginning with the power of the tongue. &ldquo;Death and life are in the power of the tongue&rdquo; (18:21); &ldquo;A soft answer turns away wrath, but a harsh word stirs up anger&rdquo; (15:1). Few subjects receive more attention in Proverbs than speech &mdash; its capacity to heal or wound, to build up or tear down, to bless or destroy.",
      "Money and work form another major theme. &ldquo;A little sleep, a little slumber&hellip; and poverty will come upon you&rdquo; (6:10-11) warns the sluggard, while elsewhere the book cautions against get-rich-quick schemes and the dangers of debt. Proverbs commends diligence, honest gain, and generosity, and it warns repeatedly that wealth gained by fraud or hoarded in greed brings no lasting good.",
      "Friendship and relationships receive their own rich treatment. &ldquo;A friend loves at all times, and a brother is born for adversity&rdquo; (17:17); &ldquo;Iron sharpens iron, so one man sharpens another&rdquo; (27:17). Proverbs prizes loyalty, honest counsel, and the sharpening influence of true companions, while warning against the flatterer, the gossip, and the false friend who deserts in time of need.",
      "The sayings range further still: honesty and integrity, parenting and discipline, humility and pride. &ldquo;Pride goes before destruction, and a haughty spirit before a fall&rdquo; (16:18) stands among the most quoted lines in all of literature. Alongside these come repeated counsel on self-control and sober warnings about the destructive power of anger, gossip, and folly left unchecked.",
      "A crucial interpretive key keeps all of this in proper focus: proverbs are general principles, not absolute promises. They describe how life usually works under God&rsquo;s order, not guarantees that hold in every case. To read &ldquo;train up a child&hellip; and he will not depart&rdquo; as an ironclad guarantee is to misread the genre and to set oneself up for needless despair.",
      "This is precisely why Job and Ecclesiastes exist, to address the exceptions where the righteous suffer and the wicked prosper. The wisdom literature is a conversation, not a single voice. Proverbs gives the general pattern; Job and Ecclesiastes guard that pattern from being flattened into a mechanical formula. Together they offer a wisdom robust enough to handle both the rule and its painful exceptions.",
    ],
  },
  {
    id: "Proverbs and Christ",
    heading: "Proverbs and Christ",
    reference: "Proverbs 30-31",
    paragraphs: [
      "Proverbs concludes with two memorable portraits that round off the book on a personal and reflective note. After the long collections of individual sayings, these final chapters gather wisdom into vivid human pictures &mdash; first a humble sage confessing his limits, then a woman whose whole life embodies the wisdom the book has commended.",
      "Chapter 30 offers the humble sayings of Agur, who confesses his own limitations and marvels at the mysteries of God. &ldquo;Surely I am too stupid to be a man&hellip; I have not learned wisdom, nor have I knowledge of the Holy One,&rdquo; he says, before pondering the wonders he cannot comprehend &mdash; the way of an eagle in the sky, the way of a ship in the sea. Agur reminds us that true wisdom ends in humility, in awe before a God whose ways surpass our understanding.",
      "Chapter 31 presents the famous &ldquo;wife of noble character&rdquo; (eshet chayil) &mdash; an acrostic poem celebrating a woman of strength, industry, wisdom, and the fear of the Lord, who &ldquo;far surpasses&rdquo; jewels and whose &ldquo;works praise her in the gates.&rdquo; She trades and plants, cares for her household and the poor, speaks with wisdom and kindness, and laughs at the time to come because she is clothed with strength and dignity.",
      "Often read narrowly as a checklist for women, this portrait is better understood as a portrait of wisdom embodied in a life. The poem is not a burden laid on wives but a celebration of what wisdom looks like when it takes flesh in daily faithfulness. It gathers up the themes of the whole book &mdash; diligence, generosity, prudent speech, the fear of the Lord &mdash; and shows them living and breathing in one full-orbed character.",
      "The whole book ultimately points beyond itself: the wisdom it commends finds its fullest expression in Jesus Christ, who not only taught wisdom but is the wisdom of God incarnate. The sayings, the two paths, Lady Wisdom at creation, the noble life of chapter 31 &mdash; all of it strains toward a wisdom greater than any proverb can contain, a wisdom finally embodied in a Person.",
      "Where Proverbs says &ldquo;the fear of the Lord is the beginning of wisdom,&rdquo; the gospel reveals that true wisdom is found in knowing Christ crucified &mdash; &ldquo;foolishness to the world&rdquo; yet &ldquo;the power of God and the wisdom of God&rdquo; (1 Cor 1:23-24). The cross overturns every merely worldly notion of wisdom, revealing that God&rsquo;s deepest wisdom looks like self-giving love.",
      "To walk in wisdom is to follow him. The book that began by urging the young to seek wisdom as hidden treasure ends by directing every seeker to the One in whom that treasure is found. Proverbs trains the heart to love wisdom; the gospel shows that wisdom has a name and a face. To fear the Lord and to follow Christ are, in the end, the same path &mdash; the way that leads to life.",
    ],
  },
];

const videoItems = [
  { videoId: "MdEEqzfQNLg", title: "BibleProject - Book of Proverbs Overview" },
  { videoId: "MkETkCsRbDU", title: "The Fear of the Lord - Proverbs Explained" },
  { videoId: "rngfHC1Sj2I", title: "Wisdom Literature in the Bible" },
];

export default function ChristianBookOfProverbsGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of Proverbs
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The fear of the Lord as the beginning of wisdom &mdash; the two paths of wisdom and folly, wisdom personified at creation, practical wisdom for speech, money, work and relationships, and how Proverbs points to Christ the wisdom of God.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                background: tab === t ? ACCENT : CARD,
                color: tab === t ? "#fff" : MUTED,
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
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {tab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Proverbs through visual teaching on the structure of the book, the fear of the Lord as the beginning of wisdom, and the wisdom literature of the Bible.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Begin with the Fear of the Lord</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Proverbs invites every reader to pursue wisdom as hidden treasure, beginning in reverent awe before God and ending in the One who is the wisdom of God incarnate. To fear the Lord and to follow Christ is to walk the path that grows brighter and brighter until full day.
          </p>
        </div>
      </main>
    </div>
  );
}
