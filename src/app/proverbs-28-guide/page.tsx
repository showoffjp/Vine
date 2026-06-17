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
const ACCENT = "#a78bfa";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

interface Block {
  heading: string;
  reference?: string;
  accent: string;
  paragraphs: string[];
}

const overviewBlocks: Block[] = [
  {
    heading: "Rapid-Fire Contrasts: The Wicked and the Righteous",
    reference: "Proverbs 28:1&ndash;10",
    accent: PURPLE,
    paragraphs: [
      "Proverbs 28 opens with one of the most vivid contrasts in all of wisdom literature: &ldquo;The wicked flee when no one pursues, but the righteous are bold as a lion.&rdquo; Guilt produces its own torment &mdash; the wicked man carries a prosecuting conscience that never sleeps. The righteous, by contrast, possess a freedom of heart that translates into courage in the world. This contrast sets the tone for the entire chapter, which moves rapidly between the wicked and the righteous, the corrupt and the just.",
      "Verses 2 through 10 cascade through a series of rapid observations about leadership, law, integrity, and prayer. A land in moral chaos produces unstable government; a wise leader with understanding brings stability. A poor man who oppresses is as destructive as a violent rainstorm that strips the land bare. The chapter continually measures human conduct against the standard of God&rsquo;s law: those who forsake it praise the wicked, while those who keep it stand against them. Even prayer is affected: the one who turns his ear from the law finds that even his petitions are an abomination before God.",
      "Proverbs 28:6 stakes out a bold claim: &ldquo;Better is a poor man who walks in integrity than a rich man who is crooked in his ways.&rdquo; The entire consumer culture of the ancient world &mdash; and the modern one &mdash; would dispute this. Wealth was viewed as evidence of divine favor and personal competence. Proverbs says otherwise: character assessed by the law of God outweighs material success achieved through compromise. The chapter will return again and again to this reversal.",
    ],
  },
  {
    heading: "Confession and Mercy: The Gospel Seed in Proverbs",
    reference: "Proverbs 28:11&ndash;18",
    accent: TEAL,
    paragraphs: [
      "The pivot of Proverbs 28 is verse 13, one of the most direct gospel statements in the entire Old Testament: &ldquo;Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy.&rdquo; This is not merely practical advice about emotional health. It is a theological declaration about the nature of God and the path to restoration. Sin concealed is sin compounding; sin confessed and forsaken opens the door to divine mercy.",
      "The verse anticipates 1 John 1:9 (&ldquo;If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness&rdquo;) and Psalm 32, where David describes the misery of concealed guilt and the joy of confession: &ldquo;I acknowledged my sin to you, and I did not cover my iniquity; I said, I will confess my transgressions to the LORD, and you forgave the iniquity of my sin.&rdquo; Proverbs 28:13 is therefore not merely one maxim among many; it is a window into the character of God as one whose response to honest repentance is mercy.",
      "Verse 14 follows appropriately: &ldquo;Blessed is the one who fears the LORD always; whoever hardens his heart will fall into calamity.&rdquo; The blessed life is one of ongoing reverence, maintained through honest engagement with God about one&rsquo;s sins. The hardened heart is the one that refuses to look honestly at itself and therefore closes itself to the mercy that would heal it. Verses 15 through 18 continue the contrast between the oppressive ruler and the one who walks in integrity, pressing toward the chapter&rsquo;s final focus on justice and generosity.",
    ],
  },
  {
    heading: "Greed, Integrity, and the Long Game of Faithfulness",
    reference: "Proverbs 28:19&ndash;28",
    accent: GOLD,
    paragraphs: [
      "The closing section of Proverbs 28 returns to the danger of shortcuts. Verse 20 states it memorably: &ldquo;A faithful man will abound with blessings; whoever hastens to be rich will not go unpunished.&rdquo; The contrast is between faithfulness &mdash; patient, steady, God-fearing labor &mdash; and the frantic pursuit of rapid wealth. The one who works the land will have plenty of bread; the one who follows worthless pursuits will have plenty of poverty. The wisdom principle is that sustainable abundance comes through steady integrity, not through cutting corners.",
      "Verse 21 touches on a subtle form of injustice: partiality. &ldquo;To show partiality is not good; for a piece of bread a man will do wrong.&rdquo; Corruption does not always come in grand dramatic forms; often it arrives as a small compromise, a minor favor for a modest reward. The willingness to show partiality for &ldquo;a piece of bread&rdquo; reveals how cheaply integrity can be sold when it is not anchored in the fear of God.",
      "The chapter closes with themes of generosity and justice. Verse 27 states: &ldquo;Whoever gives to the poor will not want; he who hides his eyes will get many a curse.&rdquo; And verse 28 echoes the concern that runs throughout: when the wicked rise to power, people hide; when they perish, the righteous increase. The chapter thus frames human life as existing between two poles &mdash; the rise of wickedness that drives the righteous underground, and the eventual increase of righteousness when wickedness collapses under the weight of its own folly and God&rsquo;s judgment.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "Righteousness and Its Boldness",
    accent: PURPLE,
    paragraphs: [
      "The opening verse of Proverbs 28 presents one of the great paradoxes of the moral life: the wicked flee when no one is chasing them, while the righteous are bold as a lion. Guilt creates its own persecution. The conscience of the wicked man is a prosecuting attorney that never rests, accusing him whether or not any external threat is present. He is a fugitive from himself.",
      "The righteous, by contrast, possess what the New Testament calls &ldquo;a good conscience toward God&rdquo; (1 Peter 3:21). This inner peace before God translates into a kind of fearlessness in the world. The bold person is not one who has suppressed all awareness of sin but one who has dealt with sin honestly &mdash; through confession and the mercy of God &mdash; and so possesses the settled assurance of one who stands clean before the Judge of all. Boldness, in the biblical vision, is not personality; it is a fruit of righteousness.",
      "This theme runs through the entire chapter. The righteous man who walks in integrity is contrasted with the rich man who is crooked; the faithful man who abounds with blessings is contrasted with the one who hastens to be rich and faces punishment. In every case, the righteous person&rsquo;s life is characterized by a quality of freedom and stability that the wicked man, for all his apparent success, cannot access.",
    ],
  },
  {
    heading: "Confession and Mercy",
    accent: TEAL,
    paragraphs: [
      "Proverbs 28:13 stands as one of the most remarkable verses in the entire Old Testament: &ldquo;Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy.&rdquo; In a chapter full of practical contrasts, this verse cuts to the spiritual core of the matter: how does a human being stand rightly before God?",
      "The answer Proverbs gives anticipates the full gospel: not through concealment and self-justification, but through honest acknowledgment of sin and a genuine turning from it. The word for &ldquo;confesses&rdquo; here (Hebrew yadah) means to acknowledge openly, to make no pretense about the reality of one&rsquo;s transgressions. The word for &ldquo;forsakes&rdquo; (azab) means to leave them behind, to no longer cleave to them. Together they describe repentance: honest acknowledgment and genuine departure.",
      "The promise attached is equally remarkable: such a person will &ldquo;obtain mercy&rdquo; (Hebrew racham, the deep compassion that God has for the repentant). This is not a vague hope but a stated certainty from the wisdom of God. The mercy of God is the open door into which all honest confessors walk. It is what makes the Christian life not a treadmill of self-improvement but a relationship of ongoing repentance and ongoing mercy.",
    ],
  },
  {
    heading: "Just and Unjust Leadership",
    accent: ROSE,
    paragraphs: [
      "Proverbs 28 is unusual among the chapters of Proverbs in its extended attention to the responsibilities and dangers of leadership. The chapter contains a cluster of verses that speak directly to rulers, governors, and those in positions of power over others. The standard by which all leadership is measured is justice &mdash; specifically the justice defined by God&rsquo;s law rather than by the preferences of the powerful.",
      "Verse 2 opens the theme: when a land is in sin, its rulers multiply; but with a discerning man the stability of government is maintained. Verse 3 describes the horror of a poor man who oppresses the poor: he is like a driving rain that leaves no food, destroying the very people who had no one else to turn to. Verse 15 extends the image: a wicked ruler over a poor people is like a roaring lion or a charging bear &mdash; terrifying, destructive, operating on appetite alone.",
      "Verse 16 provides the positive contrast: &ldquo;A ruler who lacks understanding is a cruel oppressor; he who hates unjust gain will prolong his days.&rdquo; The mark of a godly leader is not merely the absence of gross corruption but the active hatred of unjust gain. The leader who builds his rule on justice and integrity is the one whose tenure will be long and whose legacy will bless those who come after. Proverbs 28 is therefore not merely personal wisdom; it is a handbook for leadership formed by the fear of God.",
    ],
  },
  {
    heading: "The Law as Anchor",
    accent: GREEN,
    paragraphs: [
      "One of the distinctive features of Proverbs 28 is its repeated appeal to &ldquo;the law&rdquo; (Hebrew torah) as the standard by which all human conduct is measured. The law here is not merely a set of regulations but the revealed wisdom of God &mdash; the instruction that discloses what is truly good and what leads to life.",
      "Verse 4 states the basic opposition: those who forsake the law praise the wicked, while those who keep the law strive against them. The law functions as a lens through which the wicked are seen clearly for what they are. Those who have abandoned God&rsquo;s instruction lose the capacity to make moral distinctions; they begin to call evil good and good evil. Those who hold fast to the law retain the moral clarity to identify and oppose wickedness.",
      "Verse 5 sharpens the point: &ldquo;Evil men do not understand justice; those who seek the LORD understand everything.&rdquo; Understanding justice is not primarily an intellectual achievement; it is a spiritual one. Those who seek the LORD &mdash; who orient their entire lives toward knowing and obeying God &mdash; have access to a comprehensive understanding that eludes even the most intelligent people who live without reference to God. The law is the anchor that keeps this understanding stable across changing cultural winds.",
    ],
  },
  {
    heading: "The Danger of Greed",
    accent: GOLD,
    paragraphs: [
      "Proverbs 28 returns repeatedly to the theme of greed and the pursuit of rapid wealth, consistently warning that such a pursuit leads to punishment rather than the prosperity it promises. Verse 20 makes the contrast clear: &ldquo;A faithful man will abound with blessings; whoever hastens to be rich will not go unpunished.&rdquo; The faithful man and the hasty man represent two entirely different orientations toward material life.",
      "Verse 22 adds detail to the portrait of greed: &ldquo;A stingy man hastens after wealth and does not know that poverty will come upon him.&rdquo; The stingy man&rsquo;s fixation on accumulation blinds him to the consequences of his own character. His greed produces the parched relational landscape and the collapsed trust that eventually impoverish him materially as well as spiritually.",
      "The contrast with generosity is sharpest in verse 27: &ldquo;Whoever gives to the poor will not want; he who hides his eyes will get many a curse.&rdquo; Generosity, far from depleting resources, positions the giver to receive the blessing of God and the trust of others. Hiding one&rsquo;s eyes from the need of the poor &mdash; the deliberate refusal to see what demands a response &mdash; brings its own judgment. Proverbs 28 thus presents greed not merely as a character flaw but as a form of practical atheism: the conviction that one must hoard because God cannot be trusted to provide.",
    ],
  },
];

interface VerseEntry {
  verse: string;
  text: string;
  accent: string;
}

const verseEntries: VerseEntry[] = [
  { verse: "v.1", text: "The wicked flee when no one pursues, but the righteous are bold as a lion. Guilt is its own prosecutor; a clear conscience before God produces courage that no external threat can take away.", accent: PURPLE },
  { verse: "v.2", text: "When a land transgresses, it has many rulers; but with a man of understanding and knowledge, its stability will long continue. Moral chaos in a people produces political instability at the top.", accent: TEAL },
  { verse: "v.3", text: "A poor man who oppresses the poor is like a driving rain that leaves no food. The most destructive oppressor is one who should know what it is to need mercy but instead exploits the vulnerable.", accent: ROSE },
  { verse: "v.4", text: "Those who forsake the law praise the wicked, but those who keep the law strive against them. Abandoning God&apos;s instruction destroys the moral vision that allows us to tell the righteous from the wicked.", accent: GREEN },
  { verse: "v.5", text: "Evil men do not understand justice, but those who seek the LORD understand it completely. Moral clarity is a spiritual gift, flowing from the pursuit of God rather than from intellectual power alone.", accent: GOLD },
  { verse: "v.6", text: "Better is a poor man who walks in his integrity than a rich man who is crooked in his ways. Proverbs consistently refuses to equate wealth with worth or poverty with failure.", accent: PURPLE },
  { verse: "v.7", text: "The one who keeps the law is a son with understanding, but a companion of gluttons shames his father. The company we keep shapes our character and reflects the values we are forming.", accent: TEAL },
  { verse: "v.8", text: "Whoever multiplies his wealth by interest and profit from the poor gathers it for him who is generous to the poor. Wealth extracted unjustly will ultimately be redistributed by God&apos;s providential hand.", accent: ROSE },
  { verse: "v.9", text: "If one turns away his ear from hearing the law, even his prayer is an abomination. The relationship with God cannot be compartmentalized; indifference to his word poisons even worship.", accent: GREEN },
  { verse: "v.10", text: "Whoever misleads the upright into an evil way will fall into his own pit, but the blameless will have a goodly inheritance. The traps laid for others become the traps that catch the one who set them.", accent: GOLD },
  { verse: "v.11", text: "A rich man is wise in his own eyes, but a poor man who has understanding will find him out. Wealth creates an illusion of wisdom; genuine understanding can see through it.", accent: PURPLE },
  { verse: "v.12", text: "When the righteous triumph, there is great glory, but when the wicked rise, people hide themselves. The presence of righteous leadership produces flourishing; the rise of wickedness drives the best people underground.", accent: TEAL },
  { verse: "v.13", text: "Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy. This is the gospel seed in Proverbs: honest repentance opens the door to divine mercy.", accent: ACCENT },
  { verse: "v.14", text: "Blessed is the one who fears the LORD always, but whoever hardens his heart will fall into calamity. Ongoing reverence, sustained through honest self-examination, is the path of blessing.", accent: GREEN },
  { verse: "v.15", text: "Like a roaring lion or a charging bear is a wicked ruler over a poor people. Predatory leadership that targets the vulnerable is one of the most severe forms of wickedness in Proverbs.", accent: ROSE },
  { verse: "v.16", text: "A ruler who lacks understanding is a cruel oppressor, but he who hates unjust gain will prolong his days. The mark of godly leadership is not merely avoiding gross corruption but actively hating it.", accent: GOLD },
  { verse: "v.17", text: "If one is burdened with the blood of another, he will be a fugitive until death; let no one help him. The guilt of bloodshed follows a person with relentless tenacity; there is no refuge from a guilty conscience.", accent: ROSE },
  { verse: "v.18", text: "Whoever walks in integrity will be delivered, but he who is crooked in his ways will suddenly fall. Integrity is a form of stability; crookedness is a form of structural instability waiting to collapse.", accent: PURPLE },
  { verse: "v.19", text: "Whoever works his land will have plenty of bread, but he who follows worthless pursuits will have plenty of poverty. Faithful, diligent labor in one&apos;s calling produces sustainable abundance.", accent: TEAL },
  { verse: "v.20", text: "A faithful man will abound with blessings, but whoever hastens to be rich will not go unpunished. Faithfulness and haste represent two entirely different orientations toward work, wealth, and trust in God.", accent: GOLD },
  { verse: "v.21", text: "To show partiality is not good, but for a piece of bread a man will do wrong. Corruption rarely arrives in dramatic form; it often begins as a small compromise for a small reward.", accent: ROSE },
  { verse: "v.22", text: "A stingy man hastens after wealth and does not know that poverty will come upon him. The fixation on accumulation blinds the greedy person to the consequences his own character is already producing.", accent: GREEN },
  { verse: "v.23", text: "Whoever rebukes a man will afterward find more favor than he who flatters with his tongue. Honest rebuke, though initially uncomfortable, builds the trust that flattery always destroys.", accent: TEAL },
  { verse: "v.24", text: "Whoever robs his father or his mother and says, &apos;That is no transgression,&apos; is a companion to a man who destroys. Self-justification in the face of obvious wrong is not innocence &mdash; it is complicity with destruction.", accent: ROSE },
  { verse: "v.25", text: "A greedy man stirs up strife, but whoever trusts in the LORD will be enriched. The alternative to greed is not merely restraint but active trust in God as the true provider of all good things.", accent: GOLD },
  { verse: "v.26", text: "Whoever trusts in his own mind is a fool, but he who walks in wisdom will be delivered. Self-reliance and wisdom are opposites in Proverbs; wisdom begins where self-sufficiency ends.", accent: PURPLE },
  { verse: "v.27", text: "Whoever gives to the poor will not want, but he who hides his eyes will get many a curse. Generosity positions us within the flow of God&apos;s blessing; deliberate blindness to need brings its own judgment.", accent: GREEN },
  { verse: "v.28", text: "When the wicked rise, people hide themselves, but when they perish, the righteous increase. The chapter ends where it began &mdash; the moral condition of a society determines whether the righteous can flourish or must hide.", accent: TEAL },
];

const applicationBlocks: Block[] = [
  {
    heading: "Pursue the Boldness of a Clear Conscience",
    accent: PURPLE,
    paragraphs: [
      "Proverbs 28:1 is a diagnostic verse: if you find yourself fleeing from shadows, looking over your shoulder when no one is chasing you, the chapter invites you to ask honestly what is producing that inner anxiety. Boldness is not manufactured by willpower or self-talk; it is the fruit of a conscience that has been brought into the light. The path to the lion&rsquo;s boldness runs through the honest acknowledgment of sin and the reception of God&rsquo;s mercy.",
      "Concretely, this means building a regular practice of confession &mdash; not merely the acknowledgment that you are &ldquo;a sinner in general&rdquo; but the honest naming of specific sins before God. It also means cultivating relationships in which honest rebuke is possible (v.23), because iron sharpens iron and the friends who tell us the truth are the friends who help us maintain the integrity that produces boldness.",
    ],
  },
  {
    heading: "Practice Regular Confession and Forsaking of Sin",
    accent: TEAL,
    paragraphs: [
      "Verse 13 is not merely a comfort; it is a call to action. The two verbs &mdash; confesses and forsakes &mdash; describe a complete movement: honest acknowledgment followed by genuine departure. Many people practice one without the other: they confess without forsaking (acknowledging the sin but returning to it), or they try to forsake without confessing (cleaning up behavior while refusing to look honestly at the heart).",
      "The promised result is mercy &mdash; not just forgiveness in a legal sense, but the deep compassion of God toward the one who has stopped hiding. Make verse 13 a practical guide: regularly name your sins specifically before God, and then make specific plans for how you will turn from them. Bring trusted accountability partners into the process. The shame of honest confession before a person you trust is far lighter than the weight of concealed guilt.",
    ],
  },
  {
    heading: "Evaluate Your Leadership by Justice, Not Expediency",
    accent: ROSE,
    paragraphs: [
      "If you exercise any form of leadership &mdash; as a parent, employer, pastor, teacher, or supervisor &mdash; Proverbs 28 holds you to a demanding standard. The chapter asks not whether your leadership is effective by the world&rsquo;s metrics but whether it is just by God&rsquo;s standard. A leader who oppresses the vulnerable for their own benefit is like a driving rain that destroys the very people they were meant to shelter.",
      "The positive vision is the leader who hates unjust gain (v.16) &mdash; who has cultivated an active aversion to the shortcuts and compromises that leadership positions make available. This requires building structures of accountability, welcoming honest feedback, and regularly asking whether your decisions serve the people under your care or primarily serve yourself. Long-term stability in leadership is the fruit of justice, not expediency.",
    ],
  },
  {
    heading: "Guard Against the Lure of Quick Wealth",
    accent: GOLD,
    paragraphs: [
      "The warnings against hastening to be rich (vv.20, 22) are as relevant as any financial advice available today. Every generation faces the temptation of shortcuts: get-rich-quick schemes, financial products that promise high returns without risk, business practices that extract value without creating it, and the quiet corruption of showing partiality for a piece of bread (v.21). Proverbs 28 counsels the long game of faithfulness.",
      "Practically, this means examining your financial life for signs of the &ldquo;haste&rdquo; that Proverbs warns against: decisions made out of anxiety about the future, investment strategies driven by fear of missing out, business practices that cut ethical corners for profit. Set these against the standard of the faithful man who works his land and abounds with blessings &mdash; not a romantic picture of poverty, but a vision of sustainable abundance built on integrity and trust in God as provider.",
    ],
  },
  {
    heading: "Give Generously to the Poor",
    accent: GREEN,
    paragraphs: [
      "Verse 27 is a promise with teeth: &ldquo;Whoever gives to the poor will not want.&rdquo; This is not a formula for prosperity theology but a declaration of how God&rsquo;s economy works. Generosity positions the giver within the flow of divine blessing because it aligns the giver&rsquo;s heart with the heart of God, who is consistently described throughout Scripture as the champion of the poor and the defender of the vulnerable.",
      "The opposite posture &mdash; hiding your eyes from the need of the poor &mdash; brings many curses (v.27). Deliberate blindness is not neutrality; it is a choice to place yourself outside the community of mercy. Let this chapter prompt a concrete examination of your giving: Are you giving generously and strategically to the poor? Are there needs you have been hiding your eyes from? Verse 8 even suggests that wealth gained unjustly will ultimately flow to those who are generous &mdash; God&rsquo;s providential redistribution is at work even in human economic history.",
    ],
  },
];

const reflectionQuestions = [
  "Where in your life does the anxiety of verse 1 &mdash; fleeing when no one pursues &mdash; manifest? What does that anxiety reveal about what you are concealing?",
  "What specific sin have you been concealing rather than confessing and forsaking? What would it look like to apply verse 13 to that situation this week?",
  "How does your leadership (in family, workplace, church, or community) measure up against the standard of verses 15&ndash;16? Are there people under your care whom your decisions have been burdening rather than sheltering?",
  "In what areas of your financial life are you tempted to hasten after wealth rather than practice the patient faithfulness of verse 20? What specific steps would move you toward faithfulness?",
  "Are there poor people in your community from whom you have been hiding your eyes? What would obedience to verse 27 look like in your context?",
];

const videoItems = [
  { id: "kL3nPsVhM8w", title: "Proverbs 28 - The Righteous Are Bold as a Lion" },
  { id: "tR6mGxQbD2z", title: "Confessing Sin and Finding Mercy - Proverbs 28 Study" },
  { id: "vF9cNyPwJ5k", title: "Proverbs 28 Explained - Justice Leadership and Integrity" },
  { id: "xB4tKrWsH1e", title: "Proverbs 28 Verse by Verse - Wisdom for Leaders" },
];

function BlockView({ block }: { block: Block }) {
  return (
    <section style={{ marginBottom: "2.75rem" }}>
      <h3
        style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 6px", color: TEXT }}
        dangerouslySetInnerHTML={{ __html: block.heading }}
      />
      {block.reference && (
        <div
          style={{
            color: block.accent,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: "1.1rem",
          }}
          dangerouslySetInnerHTML={{ __html: block.reference }}
        />
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.1rem",
          borderLeft: `3px solid ${block.accent}55`,
          paddingLeft: "1.25rem",
        }}
      >
        {block.paragraphs.map((para, i) => (
          <p
            key={i}
            style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: para }}
          />
        ))}
      </div>
    </section>
  );
}

function VerseCard({ entry, open, onToggle }: { entry: VerseEntry; open: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        background: CARD,
        border: `1px solid ${open ? entry.accent + "66" : BORDER}`,
        borderRadius: 10,
        marginBottom: 10,
        overflow: "hidden",
        transition: "border-color 0.15s",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: 14,
          textAlign: "left",
          fontFamily: "inherit",
        }}
      >
        <span
          style={{
            color: entry.accent,
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: 1,
            textTransform: "uppercase",
            minWidth: 36,
          }}
        >
          {entry.verse}
        </span>
        <span style={{ color: TEXT, fontSize: "1rem", fontWeight: 600, flex: 1 }}
          dangerouslySetInnerHTML={{ __html: entry.text.split(".")[0] + "." }}
        />
        <span style={{ color: entry.accent, fontSize: 20, fontWeight: 700, lineHeight: 1, flexShrink: 0 }}>
          {open ? "-" : "+"}
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 18px 16px 68px" }}>
          <p
            style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: entry.text }}
          />
        </div>
      )}
    </div>
  );
}

export default function Proverbs28GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [openVerse, setOpenVerse] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  function toggleVerse(verse: string) {
    setOpenVerse((prev) => (prev === verse ? null : verse));
  }

  const tabAccentMap: Record<Tab, string> = {
    Overview: PURPLE,
    "Key Themes": TEAL,
    "Verse by Verse": GREEN,
    Application: GOLD,
  };

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div
            style={{
              display: "inline-block",
              background: `${GOLD}22`,
              color: GOLD,
              borderRadius: 6,
              padding: "4px 12px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Old Testament Study
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              margin: "0 0 1rem",
              lineHeight: 1.15,
            }}
          >
            Proverbs Chapter 28
          </h1>
          <p
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
              color: TEXT,
              lineHeight: 1.6,
              margin: "0 0 1rem",
              fontWeight: 600,
            }}
          >
            The Righteous Are Bold as a Lion
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
              color: MUTED,
              lineHeight: 1.75,
              margin: 0,
              fontStyle: "italic",
            }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy.&rdquo; &mdash; Proverbs 28:13",
            }}
          />
        </header>

        <div
          style={{
            background: CARD,
            border: `1px solid ${PURPLE}44`,
            borderRadius: 12,
            padding: "1.5rem 1.75rem",
            marginBottom: "2.25rem",
          }}
        >
          <h2 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.1rem" }}>
            Chapter at a Glance
          </h2>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "1rem" }}
            dangerouslySetInnerHTML={{
              __html:
                "Proverbs 28 is a chapter of rapid-fire contrasts between the wicked and the righteous, the corrupt ruler and the just one, the greedy and the generous. It opens with the bold lion of righteousness, pivots at verse 13 to the gospel-seed of confession and mercy, and closes with the long game of faithful labor and generosity. Twenty-eight verses that cover the full sweep of wisdom for both personal integrity and public leadership.",
            }}
          />
        </div>

        <nav
          style={{
            position: "sticky",
            top: "var(--header-height, 80px)",
            zIndex: 10,
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: "2.5rem",
            borderBottom: `1px solid ${BORDER}`,
            paddingBottom: "1rem",
            paddingTop: "0.5rem",
            background: BG,
          }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? tabAccentMap[t] : BORDER}`,
                background: activeTab === t ? tabAccentMap[t] : CARD,
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

        {activeTab === "Overview" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>
              Overview of Proverbs 28
            </h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Proverbs 28 is a chapter packed with rapid-fire contrasts between the wicked and the righteous, the poor and the rich, the wise ruler and the tyrant. It opens memorably: &ldquo;The wicked flee when no one pursues, but the righteous are bold as a lion.&rdquo; The chapter addresses themes of confession and mercy, faithful leadership versus corrupt leadership, the danger of greed, the importance of following the law, and God&apos;s ultimate sovereignty over all human schemes. It is wisdom for both personal integrity and public leadership.",
              }}
            />
            {overviewBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}
          </div>
        )}

        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Key Themes</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Five major themes weave through Proverbs 28, each touching a different dimension of the wise life. Together they form a coherent vision of what it means to live righteously before God and justly toward others &mdash; from the inner life of confession and boldness, to the public life of leadership and generosity.",
              }}
            />
            {themeBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}
          </div>
        )}

        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 0.75rem" }}>
              Verse by Verse &mdash; All 28 Verses
            </h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 1.75rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Click any verse to expand its commentary. Proverbs 28 moves quickly &mdash; each verse is a compressed insight that rewards slow, careful attention. Notice how the contrasts accumulate to form a comprehensive vision of the wise, just, and God-fearing life.",
              }}
            />
            {verseEntries.map((entry) => (
              <VerseCard
                key={entry.verse}
                entry={entry}
                open={openVerse === entry.verse}
                onToggle={() => toggleVerse(entry.verse)}
              />
            ))}
          </div>
        )}

        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Application</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Proverbs 28 is not abstract philosophy; it is practical wisdom designed to be applied. The five application areas below trace the chapter&apos;s main themes into concrete habits of the heart and disciplines of the life. Each begins with a verse that anchors the application and moves to specific, actionable steps.",
              }}
            />
            {applicationBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}

            <div
              style={{
                marginTop: "1rem",
                background: CARD,
                border: `1px solid ${GOLD}44`,
                borderRadius: 12,
                padding: "1.75rem 2rem",
              }}
            >
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 1.1rem", fontSize: "1.25rem" }}>
                Reflection Questions
              </h3>
              <ol
                style={{
                  margin: 0,
                  paddingLeft: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                }}
              >
                {reflectionQuestions.map((q, i) => (
                  <li
                    key={i}
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: "1.02rem" }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>
          </div>
        )}

        <section style={{ marginTop: "3.5rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 8px" }}>Video Teaching</h2>
          <p
            style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
            dangerouslySetInnerHTML={{
              __html:
                "Go deeper into Proverbs 28 with these video teachings on righteousness and boldness, the transforming power of confession and mercy, just leadership, and the long game of faithful generosity.",
            }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {videoItems.map((v) => (
              <div
                key={v.id}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <VideoEmbed videoId={v.id} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>
                  {v.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{
            marginTop: "3.5rem",
            background: CARD,
            border: `1px solid ${ACCENT}44`,
            borderRadius: 12,
            padding: "1.75rem 2rem",
          }}
        >
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            The Righteous Are Bold as a Lion
          </h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{
              __html:
                "Proverbs 28 calls us to the life of integrity that produces boldness, the regular practice of confession that opens us to mercy, the just leadership that protects the vulnerable, the patient faithfulness that outlasts the hasty pursuit of wealth, and the open-handed generosity that aligns us with the heart of God. &ldquo;He who confesses and forsakes his transgressions will obtain mercy&rdquo; &mdash; this is not merely ancient wisdom. It is the perennial word of God to every generation that will receive it.",
            }}
          />
        </div>
      </main>
    </div>
  );
}
