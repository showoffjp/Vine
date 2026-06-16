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

const ACCENT = PURPLE;

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
    heading: "The King's Heart in the Hand of the LORD",
    reference: "Proverbs 21:1",
    color: PURPLE,
    paragraphs: [
      "The chapter opens with one of the most majestic statements of divine sovereignty in all of Scripture: &ldquo;The king&rsquo;s heart is a stream of water in the hand of the LORD; he turns it wherever he will&rdquo; (v. 1). In the ancient world the king was the most powerful and seemingly the most free of all men, answerable to no one and able to bend a nation to his will. Yet the proverb declares that the heart of this mightiest of men lies in the hand of God as easily directed as a channel of water by the farmer who guides it through his fields.",
      "The image is drawn from the irrigation of the land. A farmer cuts channels in the earth and turns the flow of water this way or that with the touch of his hand or foot, sending it wherever he pleases. So the LORD directs the king&rsquo;s heart, not by force against his will but by a sovereign governance that turns even his free choices toward the ends that God intends. The will that no human power can compel is gently and surely turned by the hand of the Almighty.",
      "This truth is the deepest comfort to the people of God under earthly powers they cannot control. When rulers seem to threaten or oppress, the believer remembers that their hearts are in the hand of the LORD, who turned the heart of Pharaoh, who moved Cyrus to free the exiles, who used Caesar&rsquo;s decree to bring the Savior to Bethlehem. No king is so high that he is above God, and no decree is so fixed that God cannot turn it for the good of his people.",
      "If the heart of the king is in God&rsquo;s hand, then so is the heart of every lesser ruler, employer, and authority over us. The proverb does not promise that rulers will always be good, but that God overrules them all. The believer is freed from both the fear of tyrants and the despair of helplessness, for the same God who guides the streams of water guides the hearts of the powerful, turning them wherever he will toward the accomplishment of his purposes.",
    ],
  },
  {
    heading: "The LORD Weighs the Heart",
    reference: "Proverbs 21:2",
    color: TEAL,
    paragraphs: [
      "&ldquo;Every way of a man is right in his own eyes, but the LORD weighs the heart&rdquo; (v. 2). Here is set against each other the verdict of man upon himself and the verdict of God. Left to ourselves, we approve of our own conduct; every path we choose seems right when we are the only judges of it. But there is a higher court, and the LORD does not merely look at the way; he weighs the heart, testing the hidden motive that lies beneath the outward act.",
      "The verb &ldquo;weighs&rdquo; pictures God as a refiner or assayer who places the heart in the balance to test its true worth. Man sees the action; God sees the spring from which it flows. We may do the right thing for the wrong reason, or cloak a selfish motive in the appearance of virtue, but the divine assessment penetrates to the inner truth. Nothing in us is hidden from him with whom we have to do.",
      "This verse exposes the great deceitfulness of self-justification. The heart is so prone to flatter itself that we can scarcely trust our own estimate of our ways. &ldquo;The heart is deceitful above all things, and desperately sick; who can understand it?&rdquo; asks Jeremiah, and the answer follows: &ldquo;I the LORD search the heart and test the mind&rdquo; (Jeremiah 17:9&ndash;10). What we cannot see in ourselves, God sees perfectly, and his weighing is the only verdict that finally matters.",
      "The proverb is therefore a summons to humility and to honest prayer. Rather than resting in our own approval, we are to invite the searching of God, praying with the psalmist, &ldquo;Search me, O God, and know my heart; try me and know my thoughts, and see if there be any grievous way in me&rdquo; (Psalm 139:23&ndash;24). The one who knows that the LORD weighs the heart stops trusting his own self-assessment and learns to live transparently before the God who sees all.",
    ],
  },
  {
    heading: "Righteousness and Justice Over Sacrifice",
    reference: "Proverbs 21:3",
    color: GOLD,
    paragraphs: [
      "&ldquo;To do righteousness and justice is more acceptable to the LORD than sacrifice&rdquo; (v. 3). This is a startling word in a book and a culture saturated with the temple and its offerings. Sacrifice was the divinely appointed means of worship, yet the proverb declares that the practice of righteousness and justice in daily life pleases God even more. God desires not merely the ritual but the righteous life from which true worship springs.",
      "This is one of the great prophetic themes of the Old Testament, that God looks first to the heart and the conduct, and only then to the offering. Samuel told Saul, &ldquo;to obey is better than sacrifice, and to listen than the fat of rams&rdquo; (1 Samuel 15:22). Through Hosea the LORD declared, &ldquo;I desire steadfast love and not sacrifice, the knowledge of God rather than burnt offerings&rdquo; (Hosea 6:6). The offering without obedience is empty in the sight of God.",
      "Micah gathers the same truth into an unforgettable question and answer: &ldquo;With what shall I come before the LORD?... He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?&rdquo; (Micah 6:6&ndash;8). Ritual can never be a substitute for a just and righteous life; the worship God accepts is the worship of those whose dealings with their neighbor are upright.",
      "The Lord Jesus took up this priority and pressed it upon the religious of his own day, twice quoting Hosea: &ldquo;Go and learn what this means: I desire mercy, and not sacrifice&rdquo; (Matthew 9:13; 12:7). The proverb does not abolish worship but orders it rightly, teaching that the God who weighs the heart is not bought off by external religion. He seeks worshippers whose lives are marked by the righteousness and justice that reflect his own character.",
    ],
  },
  {
    heading: "Diligence and the Discipline of Speech",
    reference: "Proverbs 21:5, 17, 23",
    color: GREEN,
    paragraphs: [
      "&ldquo;The plans of the diligent lead surely to abundance, but everyone who is hasty comes only to poverty&rdquo; (v. 5). The wisdom of Proverbs prizes the patient, steady labor that thinks ahead and works with care, and it warns against the impulsive haste that grasps at quick gain. Diligence builds, plans, and waits, and is led surely to abundance; haste cuts corners and chases shortcuts, and ends in want. The way of wisdom is the way of disciplined, persevering work.",
      "The chapter also warns against the love of mere pleasure as the ruin of the diligent life: &ldquo;Whoever loves pleasure will be a poor man; he who loves wine and oil will not be rich&rdquo; (v. 17). Wine and oil were the marks of luxury and feasting, and the one who lives for such indulgence squanders what diligence would have built. The proverb does not condemn enjoyment but the love of pleasure that becomes a master, draining a life of substance and leaving it poor.",
      "A further discipline is set over the tongue: &ldquo;Whoever keeps his mouth and his tongue keeps himself out of trouble&rdquo; (v. 23). So much grief in life flows from unguarded speech, the hasty word, the careless promise, the cutting reply. To keep watch over the mouth is to spare oneself a multitude of troubles, for the tongue is a small member that kindles great fires. The wise learn to bridle their speech as carefully as they order their labor.",
      "These proverbs gather into a single portrait of the self-governed life that wisdom commends, a life of diligence rather than haste, of moderation rather than the love of pleasure, and of guarded speech rather than reckless words. Such self-control is, in the end, a fruit of the fear of the LORD, for the one who walks before God learns to order his work, his appetites, and his tongue. This quiet discipline is its own kind of abundance, sparing a man from the poverty and trouble that folly brings.",
    ],
  },
  {
    heading: "The Cry of the Poor",
    reference: "Proverbs 21:13",
    color: ROSE,
    paragraphs: [
      "&ldquo;Whoever closes his ear to the cry of the poor will himself call out and not be answered&rdquo; (v. 13). This is one of the most solemn proverbs on the care of the needy, and it works by a principle of exact reciprocity. The one who shuts his ear to the poor will one day cry out in his own need and find heaven shut against him. As he treated the poor, so he will be treated; the measure he used will be measured back to him.",
      "The proverb assumes that the cry of the poor is heard in heaven even when it is ignored on earth. God is the special defender of the needy, and how we respond to their cry is taken by him as a response to himself. To close the ear to the poor is not merely a failure of kindness but an offense against the God who hears them, and it incurs a judgment that fits the crime, the closing of God&rsquo;s ear to our own cry.",
      "This same principle of reciprocity runs all through Scripture. &ldquo;Blessed are the merciful, for they shall receive mercy,&rdquo; said the Lord Jesus (Matthew 5:7), and James warns that &ldquo;judgment is without mercy to one who has shown no mercy&rdquo; (James 2:13). In the great picture of the last judgment, the King welcomes those who fed the hungry and clothed the naked, saying, &ldquo;as you did it to one of the least of these my brothers, you did it to me&rdquo; (Matthew 25:40).",
      "The proverb therefore presses upon the believer an open ear and an open hand. To hear the cry of the poor and to answer it is to walk in the likeness of God, who hears the cry of the afflicted. It is also the path of blessing, for the one who is generous to the poor lends to the LORD, and the LORD will repay him. The believer who keeps his ear open to the needy keeps open the way for his own prayers to be heard.",
    ],
  },
  {
    heading: "The Victory Belongs to the LORD",
    reference: "Proverbs 21:30&ndash;31",
    color: PURPLE,
    paragraphs: [
      "The chapter closes by returning to its opening note of divine sovereignty, now stated with even greater force: &ldquo;No wisdom, no understanding, no counsel can avail against the LORD&rdquo; (v. 30). Every human resource, however excellent, is powerless to overturn the purpose of God. The cleverest strategy, the deepest understanding, the wisest counsel, all are as nothing when set against the will of the Almighty. Man may plan against God, but he can never prevail.",
      "Then comes the famous final verse, a proverb that has steadied the hearts of believers through every age: &ldquo;The horse is made ready for the day of battle, but the victory belongs to the LORD&rdquo; (v. 31). The horse stands for all human preparation and strength, the cavalry and chariots in which the nations trusted. The proverb does not forbid the preparation; the horse is rightly made ready. But it locates the outcome where it truly lies, not in the strength of the horse but in the hand of God.",
      "Here human responsibility and divine sovereignty are held perfectly together. We are to make the horse ready, to plan and prepare and labor with all diligence, leaving nothing undone that wisdom requires. Yet when all is done, we confess that the victory is not ours to command. It belongs to the LORD, who gives or withholds success according to his own good purpose. The believer works as if all depended on him and trusts as if all depended on God, which indeed it does.",
      "This closing wisdom echoes through the whole of Scripture. &ldquo;The heart of man plans his way, but the LORD establishes his steps&rdquo; (Proverbs 16:9); &ldquo;Many are the plans in the mind of a man, but it is the purpose of the LORD that will stand&rdquo; (Proverbs 19:21). The believer is set free from both the pride that boasts in its own strength and the despair that fears it has not strength enough, for the victory belongs to the LORD. We prepare the horse and rest the outcome in his sovereign and gracious hand.",
    ],
  },
];

const sections: Section[] = [
  {
    id: "Overview",
    heading: "Overview of Proverbs 21",
    reference: "Proverbs 21:1&ndash;31",
    paragraphs: [
      "Proverbs 21 belongs to the great central collection of Solomon&rsquo;s sayings, and it is framed at its beginning and its end by the towering theme of the sovereignty of God. It opens with the king&rsquo;s heart held like a stream of water in the hand of the LORD (v. 1) and closes with the declaration that the victory belongs to the LORD (v. 31). Between these two pillars the chapter ranges over the heart, justice, diligence, speech, and the care of the poor, yet all is gathered under the rule of the God who governs human plans.",
      "The chapter shares the characteristic form of Proverbs, a string of mostly self-contained sayings, each a polished gem of wisdom. Yet certain themes recur and bind the whole together. Again and again the LORD is named as the one who weighs the heart, who prefers righteousness to sacrifice, who frustrates the schemes of the wicked, and who holds the final outcome of every battle in his hand. The reader is never allowed to forget that all human conduct is lived out under the eye and the rule of God.",
      "A strong ethical current runs through the chapter, pressing the priority of righteousness and justice over mere ritual. &ldquo;To do righteousness and justice is more acceptable to the LORD than sacrifice&rdquo; (v. 3) sounds the prophetic note that worship without obedience is empty. The chapter probes beneath outward religion to the inner heart and the daily conduct, insisting that the God who weighs the heart desires a just and righteous life more than the most diligent offering.",
      "The chapter is also intensely practical in its wisdom for everyday living. It commends the diligence that leads to abundance and warns against the haste that brings poverty (v. 5); it cautions against the love of pleasure that makes a man poor (v. 17); it teaches the discipline of speech that keeps a man out of trouble (v. 23); and it observes, with a touch of wry realism, that it is better to live in a corner of the housetop or in a desert land than in a house shared with a quarrelsome spouse (vv. 9, 19).",
      "Through it all sounds a note of moral seriousness, especially in the warning that whoever closes his ear to the cry of the poor will himself cry out and not be answered (v. 13). The chapter holds together the comfort of God&rsquo;s sovereignty and the searching demand of his justice. The same God who turns the king&rsquo;s heart also weighs ours; the same God who grants the victory also requires that we hear the cry of the poor and walk in righteousness before him.",
      "This guide explores Proverbs 21 through four lenses: an overview of its place and message, its key recurring themes, a closer walk through its principal verses, and the ways its ancient wisdom shapes the believer&rsquo;s daily life. It is a chapter to be lived as well as studied, for its great twin truths, the absolute sovereignty of God and the priority of righteousness and justice, touch every plan we make, every word we speak, and every cry of the needy we are able to answer.",
    ],
  },
  {
    id: "Key Themes",
    heading: "Key Themes of Proverbs 21",
    reference: "Proverbs 21:1&ndash;31",
    paragraphs: [],
  },
  {
    id: "Verse by Verse",
    heading: "Walking Through Proverbs 21",
    reference: "Proverbs 21:1&ndash;31",
    paragraphs: [
      "Verses 1 through 3 open the chapter with its great themes. &ldquo;The king&rsquo;s heart is a stream of water in the hand of the LORD; he turns it wherever he will&rdquo; (v. 1) sets the sovereignty of God over the mightiest of men. &ldquo;Every way of a man is right in his own eyes, but the LORD weighs the heart&rdquo; (v. 2) sets the divine verdict over our self-justification. And &ldquo;To do righteousness and justice is more acceptable to the LORD than sacrifice&rdquo; (v. 3) sets obedience above ritual.",
      "Verse 5 commends the steady labor of wisdom: &ldquo;The plans of the diligent lead surely to abundance, but everyone who is hasty comes only to poverty.&rdquo; The diligent who plan and persevere are led to plenty, while the hasty who chase quick gain end in want. The proverb prizes patient, careful work over impulsive shortcuts, teaching that abundance is the fruit of disciplined diligence rather than of grasping haste.",
      "Verse 9 offers a memorable observation on domestic peace: &ldquo;It is better to live in a corner of the housetop than in a house shared with a quarrelsome wife,&rdquo; a saying repeated in verse 19, which prefers even a desert land to such strife. With characteristic realism, Proverbs teaches that constant conflict in the home is a misery worse than discomfort or solitude, and that peace under one&rsquo;s roof is a treasure to be valued and guarded.",
      "Verse 13 sounds a solemn warning: &ldquo;Whoever closes his ear to the cry of the poor will himself call out and not be answered.&rdquo; By a principle of exact reciprocity, the one who ignores the needy will find heaven deaf to his own cry. Verse 17 adds a caution against indulgence: &ldquo;Whoever loves pleasure will be a poor man; he who loves wine and oil will not be rich,&rdquo; warning that the love of luxury drains a life of substance.",
      "Verse 23 teaches the discipline of speech: &ldquo;Whoever keeps his mouth and his tongue keeps himself out of trouble.&rdquo; So much grief flows from unguarded words that to bridle the tongue is to spare oneself a host of troubles. Throughout the chapter the wise are marked by such self-government, ordering their labor, their appetites, and their speech in the fear of the LORD, while the foolish are undone by haste, indulgence, and reckless words.",
      "Verses 30 and 31 bring the chapter to its sovereign climax. &ldquo;No wisdom, no understanding, no counsel can avail against the LORD&rdquo; (v. 30) declares that no human resource can overturn God&rsquo;s purpose. And the famous final verse, &ldquo;The horse is made ready for the day of battle, but the victory belongs to the LORD&rdquo; (v. 31), holds together human preparation and divine sovereignty. We make the horse ready, yet we rest the outcome in the hand of God, to whom the victory belongs.",
    ],
  },
  {
    id: "Application",
    heading: "Application: Living Under the Sovereign and Righteous LORD",
    reference: "Proverbs 21:1&ndash;31",
    paragraphs: [
      "The first application of Proverbs 21 is to rest in the sovereignty of God over every authority we cannot control. The king&rsquo;s heart is a stream of water in the hand of the LORD, and so is the heart of every ruler, employer, and power over us. When earthly authorities seem threatening or unjust, the believer is freed from both fear and despair, trusting that the God who turns the streams of water turns the hearts of the mighty wherever he will, for the good of his people and the glory of his name.",
      "Second, the chapter calls the believer to live transparently before the God who weighs the heart. Since every way of a man seems right in his own eyes, we cannot trust our own self-approval, but must invite the searching of God. The practice of this truth is honest, humble prayer: &ldquo;Search me, O God, and know my heart.&rdquo; The believer who knows that the LORD weighs the heart stops flattering himself and learns to walk in the light, open and honest before the One who sees all.",
      "Third, Proverbs 21 presses the priority of righteousness and justice over mere ritual. God is more pleased by a just and upright life than by the most diligent religious observance. The believer is therefore to examine whether his worship is matched by his conduct, whether the songs and prayers of Sunday are reflected in the honesty and mercy of the week. True worship is not a substitute for a righteous life but flows from it, in the lives of those whose dealings with their neighbor are upright.",
      "Fourth, the chapter commands an open ear and an open hand toward the poor. Whoever closes his ear to their cry will himself cry out and not be answered, for God hears the needy and takes our response to them as a response to himself. The believer is called to listen for the cry of the poor and to answer it with generosity, walking in the likeness of the merciful God and keeping open, by his mercy, the very way for his own prayers to be heard.",
      "Finally, the chapter teaches the believer to prepare diligently and trust completely. &ldquo;The horse is made ready for the day of battle, but the victory belongs to the LORD&rdquo; (v. 31). We are to plan, prepare, and labor with all our strength, leaving nothing undone, and then to rest the outcome in the hand of God. This frees us from the pride that boasts in our own strength and the despair that fears we have too little, for the victory is not ours to command but the LORD&rsquo;s to give.",
    ],
  },
];

const reflectionQuestions = [
  "Proverbs 21:1 says the king's heart is in the hand of the LORD. What authority or circumstance beyond your control are you anxious about, and how does this truth free you from fear?",
  "Every way of a man seems right in his own eyes, but the LORD weighs the heart. In what area might you be trusting your own self-approval instead of inviting God to search you?",
  "God prefers righteousness and justice to sacrifice. Is there a gap between your worship and your daily conduct that God is calling you to close?",
  "Whoever closes his ear to the cry of the poor will not be answered. Whose cry have you been tempted to ignore, and what would an open ear and an open hand look like for you this week?",
  "The horse is made ready, but the victory belongs to the LORD. Where do you need to prepare diligently and then release the outcome into God's sovereign and gracious hand?",
];

const videoItems = [
  { videoId: "Kp7vR3nX2mD", title: "Proverbs 21 - The King's Heart and the Sovereignty of the LORD (Bible Study)" },
  { videoId: "Lq4tH8nZ9bV", title: "The King's Heart Is a Stream of Water - Proverbs 21:1" },
  { videoId: "Wm6vK2pY5aT", title: "Righteousness and Justice Over Sacrifice - Proverbs 21:3" },
  { videoId: "Bn3dR9xT1cQ", title: "The Victory Belongs to the LORD - Proverbs 21:31" },
];

export default function Proverbs21GuidePage() {
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
            Proverbs 21 &mdash; The King&rsquo;s Heart and the Sovereignty of the LORD
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;The king&rsquo;s heart is a stream of water in the hand of the LORD; he turns it wherever he will&rdquo; (Proverbs 21:1). A chapter framed by the sovereignty of God, gathered around the LORD who weighs the heart, righteousness and justice above sacrifice, the diligence that leads to abundance, the cry of the poor, the discipline of the tongue, and the famous closing word that the horse is made ready for battle but the victory belongs to the LORD." }} />
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
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Watch and Study Proverbs 21</h2>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, margin: "0 0 1.75rem" }}>
            Explore the sovereignty of God over kings and human plans, the priority of righteousness and justice over sacrifice, and the victory that belongs to the LORD through these teaching videos.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Victory Belongs to the LORD</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Proverbs 21 begins and ends in the sovereignty of God, from the king&rsquo;s heart held like a stream of water in his hand to the victory that belongs to him alone. Between them lies a treasury of wisdom on the LORD who weighs the heart, righteousness above sacrifice, diligence above haste, the cry of the poor, and the discipline of the tongue &mdash; all gathered around the truth that the horse is made ready for the day of battle, but the victory belongs to the LORD." }} />
        </div>
      </main>
    </div>
  );
}
