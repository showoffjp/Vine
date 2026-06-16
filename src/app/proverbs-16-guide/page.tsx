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
    heading: "Divine Sovereignty over Human Plans",
    reference: "Proverbs 16:1, 9, 33",
    color: PURPLE,
    paragraphs: [
      "Three verses in this chapter form a single great theme like a triple cord: &ldquo;The plans of the heart belong to man, but the answer of the tongue is from the LORD&rdquo; (v. 1); &ldquo;The heart of man plans his way, but the LORD establishes his steps&rdquo; (v. 9); and &ldquo;The lot is cast into the lap, but its every decision is from the LORD&rdquo; (v. 33). Together they frame the whole chapter with one of the most profound truths in all of Scripture, that God is sovereign over the affairs of men even as men freely make their plans.",
      "Verse 9 is the key verse of the chapter and one of the clearest statements of providence in the Bible. Man genuinely plans his way; the deliberation, the choosing, the effort are all truly his. Yet it is the LORD who establishes his steps, directing the outcome and guiding the course of a life toward ends that man neither sees nor controls. Human responsibility and divine sovereignty are not played against each other but held together; man plans, and God overrules.",
      "This is not a denial of human freedom or effort but its proper setting. The proverb does not say that planning is useless; on the contrary, the wise are urged throughout the book to plan diligently. Rather it says that the final word, the establishing of the steps and the answer of the tongue, belongs to God. Even the casting of the lot, the most apparently random of decisions, falls under his hand, so that nothing in human life lies outside his governing purpose.",
      "This doctrine of providence is woven throughout Scripture. Joseph could say to the brothers who sold him, &ldquo;You meant evil against me, but God meant it for good&rdquo; (Genesis 50:20). Paul declares that God &ldquo;works all things according to the counsel of his will&rdquo; (Ephesians 1:11) and that for those who love him, all things work together for good (Romans 8:28). The believer plans and labors with all diligence, yet rests in the confidence that a sovereign and loving God is establishing every step.",
    ],
  },
  {
    heading: "Committing Your Work to the LORD",
    reference: "Proverbs 16:3",
    color: GREEN,
    paragraphs: [
      "&ldquo;Commit your work to the LORD, and your plans will be established&rdquo; (v. 3). If God is sovereign over human plans, the wise response is not passivity but committal. The Hebrew picture behind the word &ldquo;commit&rdquo; is that of rolling a heavy burden off oneself and onto another, the way a traveler might roll a load from his own back onto a stronger beast. The believer is invited to roll the weight of his plans, his labors, and his anxieties onto the LORD.",
      "This verse holds together the two truths the chapter keeps weaving: God establishes the steps, yet man is to act, to plan, and to commit those plans to God. There is no contradiction. The one who knows that the LORD directs the outcome does not therefore sit idle but works diligently and then entrusts the result to God. Committal is the bridge between human effort and divine sovereignty, the posture of faith that labors and rests at once.",
      "The promise attached is striking: &ldquo;and your plans will be established.&rdquo; This is not a guarantee that God will rubber-stamp whatever we devise, but that plans surrendered to him and aligned with his will are brought to a sure and stable end. When our works are committed to the LORD, they are taken up into his purpose and given a permanence they could never have on their own. What we roll onto him, he establishes.",
      "The New Testament gathers this wisdom into the call to cast all our anxieties on God, &ldquo;because he cares for you&rdquo; (1 Peter 5:7), and into Paul&rsquo;s charge to be anxious for nothing but in everything, by prayer and supplication, to make our requests known to God (Philippians 4:6). The believer who commits his work to the LORD trades the crushing weight of self-reliance for the peace of a God who carries our burdens and establishes our way.",
    ],
  },
  {
    heading: "The LORD Has Made Everything for Its Purpose",
    reference: "Proverbs 16:4, 7",
    color: GOLD,
    paragraphs: [
      "&ldquo;The LORD has made everything for its purpose, even the wicked for the day of trouble&rdquo; (v. 4). This sweeping statement declares that nothing in God&rsquo;s world is purposeless or outside his design. All things, including the workings of judgment, serve the ends that God has appointed. Even the wicked, who set themselves against him, will in the end serve his righteous purposes, whether by repentance or by judgment on the day of trouble.",
      "This is a sobering verse, for it affirms that God&rsquo;s sovereignty extends even over evil and its final reckoning. It does not make God the author of sin, for the wicked are wicked by their own choice and bear their own guilt. But it does insist that no rebellion can finally frustrate the divine plan; the very ones who oppose God will be made to serve the day of his justice. History is not a chaos but a purpose moving toward God&rsquo;s appointed end.",
      "Verse 7 shows the gracious side of the same sovereignty: &ldquo;When a man&rsquo;s ways please the LORD, he makes even his enemies to be at peace with him.&rdquo; The God who governs all things can turn the hearts of enemies and grant peace where there was hostility. The one whose life pleases God finds that even his adversaries may be reconciled, for the same LORD who appoints the wicked for the day of trouble can also still the rage of the foe.",
      "Together these verses reveal a God whose purpose embraces the whole of reality, both the judgment of the wicked and the protection of the righteous. Nothing escapes his design, and nothing can ultimately stand against those whose ways please him. The believer rests not in his own ability to manage his enemies but in the God who works all things, even the hostility of foes, toward his own good and wise ends.",
    ],
  },
  {
    heading: "Pride Goes Before Destruction",
    reference: "Proverbs 16:18&ndash;19",
    color: ROSE,
    paragraphs: [
      "&ldquo;Pride goes before destruction, and a haughty spirit before a fall&rdquo; (v. 18). This is among the most famous proverbs ever written, a warning so universally true that it has passed into common speech. Pride is named here as the great forerunner of ruin, the inner disposition that swells before the outward collapse. The haughty spirit, lifted up in self-importance, stands precisely at the edge of the fall it cannot see coming.",
      "Pride is, in the biblical reckoning, the root of all sin, the first and deepest rebellion of the creature against the Creator. It was pride that toppled the king of Babylon, who said in his heart, &ldquo;I will ascend above the heights of the clouds; I will make myself like the Most High,&rdquo; and was brought down to Sheol (Isaiah 14:13&ndash;15). It was the pride of the prince of Tyre, whose heart was lifted up because of his beauty (Ezekiel 28:17). At the root of every fall lies a heart that exalted itself.",
      "The companion verse drives the point home: &ldquo;It is better to be of a lowly spirit with the poor than to divide the spoil with the proud&rdquo; (v. 19). A humble place among the lowly is better than a share in the triumph of the arrogant, for the spoil of the proud is gathered on the brink of their destruction. The proverb reverses the world&rsquo;s estimate, counting lowliness with the poor as a higher good than victory with the haughty.",
      "The whole of Scripture confirms this verdict. &ldquo;God opposes the proud but gives grace to the humble&rdquo; (James 4:6; 1 Peter 5:5), and the Lord Jesus taught that everyone who exalts himself will be humbled, but the one who humbles himself will be exalted (Luke 14:11). The cross stands as the great reversal, where the One who humbled himself was exalted to the highest place (Philippians 2:8&ndash;9). The believer is warned to watch his own heart, for pride goes before destruction.",
    ],
  },
  {
    heading: "Self-Control Surpasses Conquest",
    reference: "Proverbs 16:32",
    color: TEAL,
    paragraphs: [
      "&ldquo;Whoever is slow to anger is better than the mighty, and he who rules his spirit than he who takes a city&rdquo; (v. 32). This proverb mounts a quiet but stunning challenge to the world&rsquo;s definition of greatness. The conqueror who storms a city and the warrior of mighty strength were the celebrated heroes of the ancient world, yet the proverb declares that the one who is slow to anger and rules his own spirit is greater still. The hardest and noblest conquest is the conquest of self.",
      "To be slow to anger is to possess a strength that no army can supply. The patient man, who does not let his temper master him, holds a power over himself that the strongest warrior may lack. A man may conquer nations and yet be a slave to his own rage; a man may take a city and yet be unable to take command of his own spirit. The proverb teaches that true might is measured not by what we can subdue outside us but by what we can govern within.",
      "This vision of self-mastery stands at the heart of biblical ethics. The fruit of the Spirit includes patience and self-control (Galatians 5:22&ndash;23), and a man without self-control is likened to &ldquo;a city broken into and left without walls&rdquo; (Proverbs 25:28), defenseless against every assault. The disciplined spirit is not a matter of cold suppression but of a soul ordered and ruled, at peace within and therefore strong without.",
      "Supremely, the ruling of the spirit is a fruit that the Spirit of God produces in those who belong to Christ. The believer is not left to master himself by sheer willpower but is given a new heart and the indwelling Spirit who works patience and self-government from within. To be slow to anger and to rule one&rsquo;s spirit is, in the end, to be conformed to the likeness of Christ, who is gentle and lowly in heart (Matthew 11:29).",
    ],
  },
  {
    heading: "The Crown of Age and the Two Ways",
    reference: "Proverbs 16:17, 25, 31",
    color: GREEN,
    paragraphs: [
      "&ldquo;Gray hair is a crown of glory; it is gained in a righteous life&rdquo; (v. 31). In an age that prizes youth and often despises the old, this proverb sets a crown upon the head of age. Gray hair is not a thing to be hidden or lamented but a glory, the visible mark of a life that has run its course in righteousness. The honor, however, is bound to the manner of the life; it is &ldquo;gained in a righteous life,&rdquo; the reward of years walked faithfully before God.",
      "The chapter also sets before the reader the two ways. &ldquo;The way of life leads upward for the prudent, that he may turn away from Sheol beneath&rdquo; (v. 17). The path of wisdom is an ascending road, leading the prudent up and away from death. There is a direction to the moral life; one is either climbing toward life or sliding toward the grave, and the prudent take the upward way that turns from destruction.",
      "Yet the chapter sounds a solemn warning twice, in words so weighty they are repeated later in the book: &ldquo;There is a way that seems right to a man, but its end is the way to death&rdquo; (v. 25; cf. Proverbs 14:12). The danger is not only the way we know to be wrong but the way that seems right, the path that flatters our judgment and yet leads to ruin. Human self-confidence is no safe guide; what seems right to us may end in death.",
      "These verses press the reader to weigh the end of the way, not merely its present appearance. The crown of gray hair is gained only by those who walk the upward way of righteousness over a lifetime, and the warning about the way that seems right exposes the peril of trusting our own sense of what is right. The believer is called to walk by the fear of the LORD, which alone leads upward to life, and to distrust the path that merely seems right in his own eyes.",
    ],
  },
];

const sections: Section[] = [
  {
    id: "Overview",
    heading: "Overview of Proverbs 16",
    reference: "Proverbs 16:1&ndash;33",
    paragraphs: [
      "Proverbs 16 stands near the very center of the book and marks a kind of high point in its teaching. It opens a major collection of proverbs (chapters 16 through 22) and is distinguished by a remarkable concentration of sayings about the LORD himself. Where many chapters scatter their references to God among a wider range of subjects, this chapter returns again and again to the sovereign rule of God over the heart, the plans, and the steps of man, making it one of the most theologically rich chapters in all of Proverbs.",
      "The chapter is framed by three closely related sayings on divine sovereignty: &ldquo;The plans of the heart belong to man, but the answer of the tongue is from the LORD&rdquo; (v. 1); &ldquo;The heart of man plans his way, but the LORD establishes his steps&rdquo; (v. 9); and &ldquo;The lot is cast into the lap, but its every decision is from the LORD&rdquo; (v. 33). These verses form bookends and a center that give the whole chapter its dominant theme, the relationship between human planning and divine providence.",
      "Within this frame the chapter ranges widely. It calls the reader to commit his work to the LORD (v. 3), it weighs righteousness against riches (v. 8), it sounds the famous warning that pride goes before destruction (v. 18), it crowns gray hair gained in righteousness (v. 31), and it declares the conquest of self greater than the conquest of cities (v. 32). Each saying is a self-contained pearl of wisdom, yet all are gathered around the great truth that God governs the affairs of men.",
      "A recurring emphasis falls on the heart and the spirit, and on the LORD who weighs them. &ldquo;All the ways of a man are pure in his own eyes, but the LORD weighs the spirit&rdquo; (v. 2). The chapter probes beneath outward action to the inner motive, insisting that God examines not merely what we do but the springs from which our deeds flow. This searching of the heart undergirds the chapter&rsquo;s warnings against pride and its call to humility and self-rule.",
      "The chapter holds together two truths that the modern mind often tears apart: that man genuinely plans and acts and is responsible, and that God sovereignly directs and establishes the outcome. Proverbs 16 does not resolve this mystery by suppressing either truth but presents them side by side, teaching the reader to plan with diligence and to rest in providence. This is the theology of providence in its most practical and memorable form.",
      "This guide explores the chapter through four lenses: an overview of its place and message, its key recurring themes, a closer walk through its principal verses, and the ways its ancient wisdom shapes the believer&rsquo;s daily life. Proverbs 16 is a chapter to be lived as much as studied, for its great theme, the sovereignty of God over the plans of man, touches every decision, every ambition, and every step of the believing life.",
    ],
  },
  {
    id: "Key Themes",
    heading: "Key Themes of Proverbs 16",
    reference: "Proverbs 16:1&ndash;33",
    paragraphs: [],
  },
  {
    id: "Verse by Verse",
    heading: "Walking Through Proverbs 16",
    reference: "Proverbs 16:1&ndash;33",
    paragraphs: [
      "Verses 1 through 3 open the chapter with its governing theme. &ldquo;The plans of the heart belong to man, but the answer of the tongue is from the LORD&rdquo; (v. 1); &ldquo;All the ways of a man are pure in his own eyes, but the LORD weighs the spirit&rdquo; (v. 2); and &ldquo;Commit your work to the LORD, and your plans will be established&rdquo; (v. 3). Man plans and supposes his ways pure, but God weighs the spirit and directs the outcome, and the wise response is to commit one&rsquo;s work to him.",
      "Verses 4 and 7 reveal the reach of God&rsquo;s purpose. &ldquo;The LORD has made everything for its purpose, even the wicked for the day of trouble&rdquo; (v. 4); nothing lies outside his design, not even the final reckoning of evil. And &ldquo;When a man&rsquo;s ways please the LORD, he makes even his enemies to be at peace with him&rdquo; (v. 7); the God who governs all can turn the hearts of foes and grant peace to those whose lives please him.",
      "Verse 8 sets righteousness above riches: &ldquo;Better is a little with righteousness than great revenues with injustice.&rdquo; This &ldquo;better than&rdquo; saying reverses the world&rsquo;s scale of value, declaring a small portion held in righteousness superior to vast wealth gained by injustice. Verse 9 then sounds the chapter&rsquo;s key note: &ldquo;The heart of man plans his way, but the LORD establishes his steps,&rdquo; the clearest summary of human responsibility under divine sovereignty.",
      "Verses 17 and 18 hold together the upward way and the warning against pride. &ldquo;The way of life leads upward for the prudent, that he may turn away from Sheol beneath&rdquo; (v. 17); the path of wisdom climbs toward life. But immediately follows the famous warning: &ldquo;Pride goes before destruction, and a haughty spirit before a fall&rdquo; (v. 18), and &ldquo;It is better to be of a lowly spirit with the poor than to divide the spoil with the proud&rdquo; (v. 19).",
      "Verse 25 repeats one of the most solemn warnings in the book: &ldquo;There is a way that seems right to a man, but its end is the way to death.&rdquo; The peril is the path that flatters our judgment and yet leads to ruin, exposing the danger of trusting our own sense of what is right. The believer is warned not to lean on his own understanding but to walk in the fear of the LORD.",
      "Verses 31 through 33 bring the chapter to its close. &ldquo;Gray hair is a crown of glory; it is gained in a righteous life&rdquo; (v. 31) honors the dignity of age walked faithfully. &ldquo;Whoever is slow to anger is better than the mighty, and he who rules his spirit than he who takes a city&rdquo; (v. 32) crowns self-control above conquest. And the chapter ends where it began, in sovereignty: &ldquo;The lot is cast into the lap, but its every decision is from the LORD&rdquo; (v. 33).",
    ],
  },
  {
    id: "Application",
    heading: "Application: Living Under the Sovereignty of God",
    reference: "Proverbs 16:1&ndash;33",
    paragraphs: [
      "The first and deepest application of Proverbs 16 is to learn to plan diligently and trust completely. The chapter forbids both fatalism, which refuses to plan because God is sovereign, and self-reliance, which plans as though God were not. The believer makes his plans with care and effort, then commits them to the LORD, knowing that he establishes the steps. To live this way is to labor with all one&rsquo;s strength while resting in the providence of a God who works all things for good.",
      "Second, the chapter calls the believer to roll his burdens onto God. &ldquo;Commit your work to the LORD, and your plans will be established&rdquo; (v. 3). Whatever weight we carry, of ambition, anxiety, or responsibility, we are invited to roll it off our own backs and onto the One who is strong enough to bear it. This is the antidote to the crushing exhaustion of self-reliance, the daily practice of casting our cares on the God who cares for us.",
      "Third, Proverbs 16 sounds an urgent warning against pride. Since pride goes before destruction and a haughty spirit before a fall, the believer must watch his own heart with vigilance, for pride is the most deceptive of sins and the most fatal. The remedy is humility, the lowly spirit that God exalts in his time. To guard against pride is to guard against the very root of ruin, and to cultivate humility is to walk the path that leads to honor.",
      "Fourth, the chapter sets before the believer the conquest of self as the truest greatness. To be slow to anger and to rule one&rsquo;s spirit is better than to take a city, yet it is a victory won not by willpower alone but by the Spirit of God working patience and self-control within. The believer is called to pursue this inner mastery, to govern the temper, the tongue, and the desires, and to find in this quiet strength a greatness the world cannot give.",
      "Finally, the chapter teaches the believer to honor the way that truly leads to life and to distrust the way that merely seems right. The upward way of the prudent turns from death, while the way that seems right ends in destruction; human self-confidence is no safe guide. So too the crown of gray hair is gained only in a righteous life, the reward of years walked faithfully before God. The believer measures his way not by what seems right to him but by the fear of the LORD, which alone leads upward to life.",
    ],
  },
];

const reflectionQuestions = [
  "Proverbs 16:9 says the heart of man plans his way, but the LORD establishes his steps. Where in your life do you need to plan diligently and yet release the outcome to God's sovereign care?",
  "To commit your work to the LORD is to roll your burdens onto him. What weight are you carrying that you need to roll off your own back and onto the God who cares for you?",
  "Pride goes before destruction. Where might pride be quietly at work in your heart, and what would humility look like in that area of your life?",
  "The chapter says ruling your own spirit is greater than taking a city. Which area of self-control - your temper, your tongue, your desires - is God calling you to surrender to his Spirit?",
  "There is a way that seems right to a man, but its end is death. Is there a path you are tempted to follow simply because it seems right to you? How can the fear of the LORD reshape your judgment?",
];

const videoItems = [
  { videoId: "Yp4cR8mX2vK", title: "Proverbs 16 - The Sovereignty of God and the Plans of Man (Bible Study)" },
  { videoId: "Lq7tH3nZ9bD", title: "The Heart of Man Plans His Way - Proverbs 16:9" },
  { videoId: "Wm2vK6pY8aJ", title: "Pride Goes Before Destruction - Proverbs 16:18" },
  { videoId: "Bn5dR1xT4cQ", title: "Better Than the Mighty - Self-Control in Proverbs 16:32" },
];

export default function Proverbs16GuidePage() {
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
            Proverbs 16 &mdash; The Sovereignty of God and the Plans of Man
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;The heart of man plans his way, but the LORD establishes his steps&rdquo; (Proverbs 16:9). A chapter at the heart of the book, gathered around the sovereignty of God over human plans, committing your work to the LORD, the pride that goes before a fall, the self-control that surpasses conquest, and the crown of age gained in righteousness." }} />
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
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Watch and Study Proverbs 16</h2>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, margin: "0 0 1.75rem" }}>
            Explore the sovereignty of God over human plans, the warning against pride, and the strength of self-control through these teaching videos.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The LORD Establishes the Steps</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Proverbs 16 begins and ends in the sovereignty of God, from the answer of the tongue that is from the LORD to the lot whose every decision is his. Between them lies a treasury of wisdom on committing your work to God, the pride that goes before destruction, the self-control that surpasses conquest, and the crown of age gained in righteousness &mdash; all gathered around the great truth that man plans his way, but the LORD establishes his steps." }} />
        </div>
      </main>
    </div>
  );
}
