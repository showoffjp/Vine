"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";

type Tab = "theology" | "kenosis" | "practice" | "dangers" | "models" | "videos";

const TAB_LABELS: Record<Tab, string> = {
  theology: "The Theology",
  kenosis: "Kenosis & the Cross",
  practice: "Practicing Humility",
  dangers: "Pride & Its Dangers",
  models: "Models of Humility",
  videos: "Videos",
};

const THEOLOGY_SECTIONS = [
  {
    title: "What Is Tapeinophrosyne?",
    ref: "Philippians 2:3",
    color: GREEN,
    body: "The Greek word tapeinophrosyne — translated &ldquo;humility&rdquo; or &ldquo;lowliness of mind&rdquo; — was actually considered a vice in the ancient Greek world. To the Greeks, a low estimation of oneself was a character flaw, not a virtue. The Stoic ideal was magnanimity — a great-souled person who rightly esteemed his own greatness. Into this world, Paul drops a bombshell: &ldquo;In humility count others more significant than yourselves&rdquo; (Philippians 2:3). The Christian gospel invented humility as a virtue. What the ancient world despised, Jesus embodied and Paul commanded. Tapeinophrosyne is not low self-esteem — it is a rightly ordered self that is freed from the compulsive need to establish its own greatness.",
  },
  {
    title: "Humility Is Not Self-Deprecation",
    ref: "Matthew 5:5; Romans 12:3",
    color: TEAL,
    body: "Christian humility is routinely confused with self-contempt, false modesty, or a refusal to acknowledge genuine gifts. This is a distortion. C.S. Lewis captured the distinction precisely: &ldquo;Humility is not thinking less of yourself; it is thinking of yourself less.&rdquo; Paul commands the Romans: &ldquo;Do not think of yourself more highly than you ought, but rather think of yourself with sober judgment&rdquo; (Romans 12:3). Sober judgment — not inflated, not deflated, but accurate. The humble person can receive a compliment without either deflecting it falsely or being puffed up by it. They can acknowledge genuine gifts because they know those gifts came from God, not as a basis for superiority. Humility is freedom from the ego&rsquo;s agenda — the freedom to accurately assess yourself and get on with serving others.",
  },
  {
    title: "The Beatitude of Meekness",
    ref: "Matthew 5:5",
    color: GOLD,
    body: "Jesus declares in the Sermon on the Mount: &ldquo;Blessed are the meek, for they shall inherit the earth.&rdquo; The Greek word praus — meekness — does not mean weakness or passivity. It was used of a war horse trained to respond to a rider&rsquo;s command: enormous power under discipline. Moses is called the meekest man on earth (Numbers 12:3), yet he confronted Pharaoh, led an entire nation, and spoke with God face to face. Jesus calls himself &ldquo;gentle and lowly in heart&rdquo; (Matthew 11:29) — yet he overturned tables in the Temple and spoke with an authority that astonished crowds. Meekness is strength submitted to God&rsquo;s purposes rather than deployed for self-promotion. The meek person is not without power — they have simply stopped using power to protect their ego.",
  },
  {
    title: "The Humble Shall Be Exalted",
    ref: "Luke 14:11; James 4:10; 1 Peter 5:6",
    color: PURPLE,
    body: "One of the most consistent themes across both Testaments is the divine inversion: God opposes the proud and gives grace to the humble. Jesus states this as a structural law of the kingdom: &ldquo;For all those who exalt themselves will be humbled, and those who humble themselves will be exalted&rdquo; (Luke 14:11). This is not merely an ethical observation — it is an ontological description of how the universe actually works under a sovereign God. The person who builds his identity on his own greatness is building on sand. The person who releases his identity into the hands of God receives a dignity that cannot be threatened because it does not depend on performance, status, or the opinions of others. James 4:10: &ldquo;Humble yourselves before the Lord, and he will lift you up.&rdquo;",
  },
  {
    title: "Fear of the Lord as the Root of Humility",
    ref: "Proverbs 15:33; Isaiah 66:2",
    color: GREEN,
    body: "Proverbs 15:33 identifies the root of all genuine humility: &ldquo;Wisdom&rsquo;s instruction is to fear the Lord, and humility comes before honor.&rdquo; The fear of the LORD — a reverential awe in the presence of a holy God — is the only soil in which true humility grows. When you have genuinely encountered the living God — his holiness, his greatness, his infinite worth — the question of your own relative greatness becomes genuinely uninteresting. Isaiah 66:2: &ldquo;These are the ones I look on with favor: those who are humble and contrite in spirit, and who tremble at my word.&rdquo; Humility is not self-manufactured — it is the natural result of an accurate vision of God. The proudest people are usually those who have not yet seen how small they are in the presence of infinite holiness.",
  },
];

const KENOSIS_SECTIONS = [
  {
    title: "Philippians 2: The Kenotic Hymn",
    ref: "Philippians 2:5-11",
    color: PURPLE,
    body: "The most theologically profound text on humility in the New Testament is the Christ-hymn of Philippians 2:5-11. Paul writes: &ldquo;Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself, by taking the form of a servant, being born in the likeness of men. And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross.&rdquo; The Greek kenosis — emptying — describes the voluntary self-limitation of the Son of God. He who possessed the fullness of divine glory relinquished the independent exercise of that glory in order to serve, suffer, and save. This is the pattern Paul commands believers to follow: &ldquo;Have this mind among yourselves.&rdquo; Humility is not just a behavior — it is a mindset modeled on the Incarnation itself.",
  },
  {
    title: "Jesus Washes Feet",
    ref: "John 13:1-17",
    color: TEAL,
    body: "John 13 records the most vivid enacted parable of humility in the Gospels. On the night of his betrayal, Jesus rises from the table, wraps a towel around his waist, pours water into a basin, and begins to wash his disciples&rsquo; feet — the work of the lowest household slave. John frames it with devastating theological irony: &ldquo;Jesus, knowing that the Father had given all things into his hands, and that he had come from God and was going back to God, rose from supper&rdquo; — and washed feet. His humility was not the humility of someone who did not know his own worth. It was the humility of someone who knew exactly who he was and therefore had nothing to prove. &ldquo;If I then, your Lord and Teacher, have washed your feet, you also ought to wash one another&rsquo;s feet. For I have given you an example, that you also should do just as I have done to you&rdquo; (v. 14-15).",
  },
  {
    title: "The Cross as the Ultimate Act of Humility",
    ref: "Philippians 2:8; Hebrews 12:2",
    color: GOLD,
    body: "The kenotic movement of Philippians 2 culminates not in the stable of Bethlehem but at Golgotha. Paul writes: &ldquo;And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross.&rdquo; Crucifixion was not merely painful — it was designed to be maximally humiliating. It was reserved for slaves and rebels, executed naked in public. The Son of God, through whom all things were made, submitted to the most contemptible death the Roman world had invented. He who deserved infinite honor received infinite dishonor — for our sake. Hebrews 12:2 describes him &ldquo;who for the joy that was set before him endured the cross, despising the shame.&rdquo; The resurrection is God&rsquo;s answer to that humiliation: &ldquo;Therefore God has highly exalted him and bestowed on him the name that is above every name&rdquo; (Philippians 2:9).",
  },
];

const PRACTICE_ITEMS = [
  {
    color: GREEN,
    title: "Put Others First — Concretely",
    desc: "Philippians 2:3-4 gives a specific practice: &ldquo;Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. Let each of you look not only to his own interests, but also to the interests of others.&rdquo; Humility is not an attitude to maintain — it is a direction of attention to practice. The question shifts from &ldquo;How do I appear?&rdquo; to &ldquo;What do they need?&rdquo;",
    steps: [
      "In every conversation today, ask at least one genuine question about the other person before sharing your own news",
      "Volunteer for the task no one wants — without announcing that you volunteered",
      "Let someone else receive credit for shared work this week",
    ],
  },
  {
    color: TEAL,
    title: "Practice Submission to Authority",
    desc: "1 Peter 5:5-6: &ldquo;Clothe yourselves, all of you, with humility toward one another, for God opposes the proud but gives grace to the humble. Humble yourselves, therefore, under the mighty hand of God.&rdquo; Submission to legitimate authority — parents, elders, employers, government — is one of the primary practices by which humility is formed. The instinct to resist accountability is pride wearing the costume of autonomy.",
    steps: [
      "Identify one area of legitimate authority you have been resisting or resenting",
      "Ask a mentor or elder for honest feedback about a blind spot in your character",
      "Submit a decision to wise counsel rather than acting unilaterally",
    ],
  },
  {
    color: GOLD,
    title: "Confess Your Sins Specifically",
    desc: "James 5:16: &ldquo;Therefore, confess your sins to each other and pray for each other so that you may be healed.&rdquo; Confession is one of the most powerful humility practices available. It requires you to name specifically — not vaguely — where you have been wrong. It requires accepting that you need grace. It requires trusting that the other person will not despise you. The ego resists all three.",
    steps: [
      "Confess a specific sin to a trusted brother or sister — not a vague &ldquo;I struggle with pride&rdquo; but a named, concrete failure",
      "Do not explain or justify after you confess — just receive the grace",
      "Make this a regular practice, not a crisis measure",
    ],
  },
  {
    color: PURPLE,
    title: "Serve Without Recognition",
    desc: "Matthew 6:1-4 warns against performing righteousness before others to be seen by them. &ldquo;When you give to the needy, do not let your left hand know what your right hand is doing, so that your giving may be in secret. And your Father who sees in secret will reward you.&rdquo; Secret service is one of the most direct antidotes to pride because it removes the reward of reputation entirely. What is left when the applause is gone?",
    steps: [
      "Do one act of service this week that you tell no one about — not even as a humble brag",
      "Give anonymously",
      "Clean up after others without being asked or acknowledged",
    ],
  },
  {
    color: TEAL,
    title: "Receive Correction Graciously",
    desc: "Proverbs 12:1: &ldquo;Whoever loves discipline loves knowledge, but he who hates reproof is stupid.&rdquo; The way you receive criticism is one of the clearest windows into the state of your pride. Do you immediately explain yourself? Do you attack the critic? Do you spiral into self-contempt? The humble response is simply: &ldquo;Thank you. Help me understand more. You might be right.&rdquo;",
    steps: [
      "Next time you receive criticism, pause before responding — breathe, pray, then ask a clarifying question instead of defending",
      "Assume there is something true in every critique before identifying what is overstated",
      "Thank the person who corrects you — even if they did it clumsily",
    ],
  },
];

const DANGERS = [
  {
    color: "#EF4444",
    title: "Pride: The Great Sin",
    desc: "C.S. Lewis wrote in Mere Christianity that pride is &ldquo;the great sin&rdquo; — not one sin among many but the root from which all other sins grow. &ldquo;According to Christian teachers,&rdquo; he writes, &ldquo;the essential vice, the utmost evil, is Pride. Unchastity, anger, greed, drunkenness, and all that, are mere fleabites in comparison: it was through Pride that the devil became the devil.&rdquo; Pride is the competitive desire to be better than — it is not satisfied by being rich, clever, or good, but only by being richer, cleverer, or better than someone else. This is why pride is uniquely resistant to grace: the proudest person is most confident he does not need it.",
    remedy: "Regularly confront your smallness before God. Daily prayer that begins with adoration — dwelling on God&rsquo;s greatness — is one of the most reliable antidotes. You cannot sustain inflated self-regard in the sustained presence of a holy God.",
  },
  {
    color: GOLD,
    title: "Spiritual Pride",
    desc: "The subtlest and most dangerous form of pride is spiritual pride — taking pride in your own humility. The Pharisee in Jesus&rsquo;s parable prayed: &ldquo;God, I thank you that I am not like other men&rdquo; (Luke 18:11). He was proud of his religiosity, his fasting, his tithing. He was proud, specifically, of not being proud like that tax collector. Spiritual pride is the pride that has learned the language of humility and weaponized it. It says the right things about grace while maintaining a subtle sense of superiority over those who need more grace than it does.",
    remedy: "Watch for comparative spirituality — any thought that begins &ldquo;at least I am not...&rdquo; The tax collector&rsquo;s prayer is the model: &ldquo;God, be merciful to me, a sinner.&rdquo; Not &ldquo;a sinner like others&rdquo; — just &ldquo;a sinner.&rdquo;",
  },
  {
    color: PURPLE,
    title: "Vainglory",
    desc: "The medieval theologians distinguished pride from vainglory — the desire for the praise and honor of others. While pride is self-referential (I think myself great), vainglory is other-referential (I need others to think me great). The vainglorious person is addicted to approval — they perform, manage their image, shrink when unnoticed. Jesus confronted this directly in the Sermon on the Mount: those who give, pray, and fast to be seen by others &ldquo;have received their reward&rdquo; — a temporary, human reward that exhausts itself the moment the audience disperses.",
    remedy: "Practice the discipline of secrecy (Matthew 6). Do good works that cannot generate approval. The approval addict needs repeated experiences of doing right without being seen, until the pattern breaks and the deeper satisfaction of God&rsquo;s secret smile becomes enough.",
  },
  {
    color: MUTED,
    title: "False Humility",
    desc: "Not all apparent humility is genuine. False humility says &ldquo;I&rsquo;m nothing&rdquo; in a way that bids for reassurance. It refuses compliments to appear spiritual. It self-deprecates in public to attract praise for its modesty. Colossians 2:23 warns against a &ldquo;self-imposed worship,&rdquo; false humility that &ldquo;lacks any value in restraining sensual indulgence&rdquo; — it looks humble but is actually another form of self-focus. True humility does not think about itself very much at all. It is focused outward — on God and on others.",
    remedy: "Notice when self-deprecation is bait for affirmation. When you say &ldquo;I&rsquo;m terrible at this,&rdquo; are you hoping someone will say you are not? The test: does your humility produce relief in others or compliments from them?",
  },
];

const MODELS = [
  {
    name: "Moses",
    era: "c. 1400s BC",
    color: GOLD,
    example: "Numbers 12:3 records the extraordinary statement: &ldquo;Now the man Moses was very humble, more than all people who were on the face of the earth.&rdquo; This about the man who confronted Pharaoh, performed ten plagues, led two million people through the wilderness, and spoke with God face to face. Moses&rsquo;s humility was not weakness — it was the settled absence of self-promotion in a man who had genuinely encountered God.",
    lesson: "Proximity to God produces humility. The more clearly you see God, the less interested you are in your own greatness.",
  },
  {
    name: "Jesus",
    era: "c. 30 AD",
    color: GREEN,
    example: "Matthew 11:29 — Jesus&rsquo;s self-description: &ldquo;I am gentle and lowly in heart.&rdquo; The one who created all things calls himself lowly. He washed feet. He ate with sinners. He had no place to lay his head. He submitted to an unjust trial without self-defense. He died naked between criminals. Every act of his life was an enacted parable of kenotic humility — power wielded for the benefit of others, never for self-protection.",
    lesson: "Humility and greatness are not opposites. The greatest person who ever lived was also, by his own testimony, the most lowly.",
  },
  {
    name: "The Apostle Paul",
    era: "c. 50s AD",
    color: PURPLE,
    example: "Paul — who had every reason for confidence in the flesh (Philippians 3:4-6) — calls himself &ldquo;the chief of sinners&rdquo; (1 Timothy 1:15), &ldquo;the least of all the saints&rdquo; (Ephesians 3:8), and &ldquo;the least of the apostles&rdquo; (1 Corinthians 15:9). This is not false modesty — Paul could speak with staggering authority when the gospel required it. But his accomplishments were entirely re-credited: &ldquo;By the grace of God I am what I am.&rdquo; Grace received honestly produces humility — the more you know you owe, the less you can boast.",
    lesson: "Understanding grace is the most sustainable engine of humility. The person who has grasped how much he was forgiven cannot sustain a contemptuous superiority over others.",
  },
  {
    name: "Francis of Assisi",
    era: "1182–1226",
    color: TEAL,
    example: "Francis — the son of a wealthy cloth merchant who embraced radical poverty, kissed lepers, and called himself &ldquo;God&rsquo;s fool&rdquo; — embodied a humility so complete it read as scandalous to his contemporaries. He refused ecclesiastical rank. He refused to call himself the head of his own order. He referred to the brothers who disagreed with him as &ldquo;my lords&rdquo; because they humbled him. His spiritual testament: &ldquo;The Lord gave me, Brother Francis, thus to begin doing penance: when I was in sin, it seemed too bitter for me to see lepers. And the Lord himself led me among them.&rdquo;",
    lesson: "Proximity to those the world despises is one of the most powerful schools of humility. Francis learned who he was by learning to love who he thought he was above.",
  },
  {
    name: "John Newton",
    era: "1725–1807",
    color: GOLD,
    example: "The former slave trader who wrote &ldquo;Amazing Grace&rdquo; never recovered from his astonishment that he had been forgiven. Decades after his conversion he wrote: &ldquo;Although my memory&rsquo;s fading, I remember two things very clearly: I am a great sinner and Christ is a great Savior.&rdquo; Newton&rsquo;s humility was not constructed — it was the natural overflow of a man who had lived the worst of human evil and received, nonetheless, the grace of God.",
    lesson: "The depth of a person&rsquo;s humility is often proportional to their clarity about how much grace they have received.",
  },
];

const VIDEOS = [
  {
    videoId: "lGCEzReQqCw",
    title: "Humility — The Forgotten Virtue",
    channel: "Tim Keller / Redeemer Presbyterian",
    description: "Tim Keller on why humility is the foundation of the Christian life and how the gospel uniquely produces it — not by demanding we think less of ourselves but by giving us a security that frees us from self-preoccupation.",
  },
  {
    videoId: "YcFGpKqWNE8",
    title: "The Freedom of Self-Forgetfulness",
    channel: "Tim Keller",
    description: "Based on Keller&rsquo;s book of the same name — a deep look at 1 Corinthians 3:21-4:7 and what Paul means by a mind so shaped by the gospel that it has stopped caring about its own verdict.",
  },
  {
    videoId: "8HyDa-oEDVQ",
    title: "Philippians 2: The Humility of Christ",
    channel: "Desiring God / John Piper",
    description: "John Piper on the kenotic hymn of Philippians 2 — what it means for the Son of God to empty himself, and what it means for believers to have the same mind.",
  },
];

export default function ChristianHumilityGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  function toggle(key: string) {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  }

  const TABS: Array<{ id: Tab; label: string }> = [
    { id: "theology", label: "The Theology" },
    { id: "kenosis", label: "Kenosis & the Cross" },
    { id: "practice", label: "Practicing Humility" },
    { id: "dangers", label: "Pride & Its Dangers" },
    { id: "models", label: "Models of Humility" },
    { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(180deg, #0e0b1f 0%, ${BG} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "60px 20px 48px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, border: `1px solid ${PURPLE}55`, borderRadius: 99, padding: "4px 16px", marginBottom: 20 }}>
            <span style={{ color: PURPLE, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Spiritual Formation</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, margin: "0 0 18px", lineHeight: 1.15, background: `linear-gradient(135deg, ${GREEN} 0%, ${PURPLE} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Christian Humility
          </h1>
          <p style={{ color: MUTED, fontSize: "clamp(14px, 2vw, 17px)", lineHeight: 1.8, maxWidth: 680, margin: "0 auto 28px" }}>
            The virtue the ancient world called a vice. The mind of Christ described in Philippians 2.
            C.S. Lewis on pride as the root of all evil. And why the humble — and only the humble — shall be exalted.
          </p>
          {/* Scripture banner */}
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 28px", maxWidth: 560, margin: "0 auto", textAlign: "left" }}>
            <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
              &ldquo;Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. Let each of you look not only to his own interests, but also to the interests of others. Have this mind among yourselves, which is yours in Christ Jesus.&rdquo;
            </p>
            <p style={{ color: PURPLE, fontSize: 13, fontWeight: 700, margin: "12px 0 0" }}>Philippians 2:3-5</p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
          {[
            { val: "tapeinophrosyne", label: "Greek word for humility — Philippians 2:3" },
            { val: "kenosis", label: "Self-emptying — the pattern of Christ&rsquo;s Incarnation" },
            { val: "7x", label: "Jesus taught the humble-exalted inversion in the Gospels" },
            { val: "C.S. Lewis", label: "Called pride &ldquo;the great sin&rdquo; in Mere Christianity" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "18px 16px", borderRight: i < 3 ? `1px solid ${BORDER}` : "none", textAlign: "center" }}>
              <div style={{ color: GREEN, fontWeight: 900, fontSize: 15, marginBottom: 4, letterSpacing: "-0.01em" }}>{s.val}</div>
              <div style={{ color: MUTED, fontSize: 11, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: s.label }} />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 20px 80px" }}>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 14, padding: 6, border: `1px solid ${BORDER}`, marginBottom: 40, overflowX: "auto" }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, minWidth: "max-content", padding: "10px 16px", borderRadius: 10, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "background 0.15s", whiteSpace: "nowrap" }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: The Theology */}
        {activeTab === "theology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px", marginBottom: 24 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Christian humility is not the human default. It was not a Greek virtue. It was not celebrated in Rome or Israel before Christ. It was invented — or rather, embodied — by Jesus of Nazareth, and then commanded by his apostles to a world that had no category for it. Understanding what it is, and is not, begins here.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {THEOLOGY_SECTIONS.map(section => (
                <div key={section.title} style={{ background: CARD, border: `1px solid ${expanded[section.title] ? section.color + "55" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggle(section.title)}
                    style={{ width: "100%", padding: "18px 22px", background: "transparent", border: "none", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}
                  >
                    <div>
                      <div style={{ color: section.color, fontWeight: 800, fontSize: 15, marginBottom: 3 }}>{section.title}</div>
                      <div style={{ color: MUTED, fontSize: 11 }}>{section.ref}</div>
                    </div>
                    <span style={{ color: MUTED, fontSize: 22, flexShrink: 0, marginTop: 2 }}>{expanded[section.title] ? "−" : "+"}</span>
                  </button>
                  {expanded[section.title] && (
                    <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${BORDER}` }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: "18px 0 0" }} dangerouslySetInnerHTML={{ __html: section.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Kenosis & the Cross */}
        {activeTab === "kenosis" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px", marginBottom: 28 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                The ultimate ground of Christian humility is not a principle but a Person. Jesus Christ did not merely teach humility — he enacted it in the most radical way possible, descending from the throne of heaven to a feeding trough, from a feeding trough to a cross. This is what Paul means when he says &ldquo;have this mind.&rdquo;
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {KENOSIS_SECTIONS.map(section => (
                <div key={section.title} style={{ background: CARD, border: `1px solid ${section.color}33`, borderRadius: 14, padding: 28 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
                    <div style={{ width: 4, borderRadius: 2, background: section.color, alignSelf: "stretch", flexShrink: 0 }} />
                    <div>
                      <h3 style={{ color: section.color, fontWeight: 900, fontSize: 18, margin: "0 0 4px" }}>{section.title}</h3>
                      <div style={{ color: MUTED, fontSize: 12 }}>{section.ref}</div>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
                </div>
              ))}
            </div>
            {/* Closing verse */}
            <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}40`, borderRadius: 14, padding: "24px 28px", marginTop: 32, textAlign: "center" }}>
              <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.8, margin: "0 0 10px", fontStyle: "italic" }}>
                &ldquo;Therefore God has highly exalted him and bestowed on him the name that is above every name, so that at the name of Jesus every knee should bow...&rdquo;
              </p>
              <span style={{ color: PURPLE, fontWeight: 700, fontSize: 13 }}>Philippians 2:9-10</span>
            </div>
          </div>
        )}

        {/* Tab 3: Practicing Humility */}
        {activeTab === "practice" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px", marginBottom: 28 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Humility is not waiting to feel humble. It is a set of practices — specific, concrete, repeatable acts — that over time form the disposition of a humble person. Aristotle was right: we become what we do. The Spirit works through deliberate practice to form Christlike character.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {PRACTICE_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 14, padding: 22, display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                    <div style={{ color: item.color, fontWeight: 900, fontSize: 15 }}>{item.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  <div style={{ background: `${item.color}10`, border: `1px solid ${item.color}20`, borderRadius: 8, padding: "12px 14px" }}>
                    <div style={{ color: item.color, fontSize: 10, fontWeight: 800, marginBottom: 8, letterSpacing: "0.08em", textTransform: "uppercase" }}>This Week</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {item.steps.map((step, i) => (
                        <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: item.color, flexShrink: 0, marginTop: 6 }} />
                          <div style={{ color: TEXT, fontSize: 12, lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: step }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Pride & Its Dangers */}
        {activeTab === "dangers" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px", marginBottom: 28 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                To understand humility we must understand its opposite. C.S. Lewis called pride &ldquo;the great sin&rdquo; — not one sin among many but the root from which all others grow. It was pride that made Satan a devil. It was pride that drove Adam and Eve to grasp for knowledge that was not theirs. Understanding pride clearly is the beginning of being free from it.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {DANGERS.map(d => (
                <div key={d.title} style={{ background: CARD, border: `1px solid ${d.color}30`, borderRadius: 14, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: d.color, flexShrink: 0 }} />
                    <h3 style={{ color: d.color, fontWeight: 900, fontSize: 17, margin: 0 }}>{d.title}</h3>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 16px" }} dangerouslySetInnerHTML={{ __html: d.desc }} />
                  <div style={{ background: `${d.color}0d`, border: `1px solid ${d.color}25`, borderRadius: 8, padding: "12px 16px" }}>
                    <div style={{ color: d.color, fontSize: 10, fontWeight: 800, marginBottom: 6, letterSpacing: "0.1em", textTransform: "uppercase" }}>Remedy</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: d.remedy }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Models of Humility */}
        {activeTab === "models" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px", marginBottom: 28 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Humility is learned in community and through examples. Scripture and the history of the church provide a cloud of witnesses who embodied lowliness of mind — not as weakness, but as the strength that comes from having nothing to prove.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {MODELS.map(m => (
                <div key={m.name} style={{ background: CARD, border: `1px solid ${m.color}30`, borderRadius: 14, padding: 22, display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <div style={{ color: m.color, fontWeight: 900, fontSize: 18, marginBottom: 2 }}>{m.name}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{m.era}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: m.example }} />
                  <div style={{ background: `${m.color}0e`, border: `1px solid ${m.color}28`, borderRadius: 8, padding: "10px 14px" }}>
                    <div style={{ color: m.color, fontSize: 10, fontWeight: 800, marginBottom: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>Lesson</div>
                    <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.65, margin: 0 }} dangerouslySetInnerHTML={{ __html: m.lesson }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Videos */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px", marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, margin: "0 0 8px" }}>Teaching Videos on Humility</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Sermons and lectures from trusted pastors and teachers on the theology and practice of Christian humility.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "16px 20px" }}>
                    <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, margin: "0 0 4px" }}>{v.title}</h4>
                    <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, margin: "0 0 8px" }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.description }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing Encouragement */}
        <div style={{ marginTop: 64, background: `linear-gradient(135deg, ${GREEN}18 0%, ${PURPLE}18 100%)`, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "40px 36px", textAlign: "center" }}>
          <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, margin: "0 0 16px" }}>The Invitation of Humility</h2>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, maxWidth: 580, margin: "0 auto 24px" }}>
            Humility is not a destination you arrive at — it is a direction you keep choosing. It is not the absence of confidence but the presence of a security so deep, grounded in who God says you are, that you no longer need to spend your life proving yourself to anyone.
          </p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 24px", maxWidth: 480, margin: "0 auto" }}>
            <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 10px", fontStyle: "italic" }}>
              &ldquo;Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you.&rdquo;
            </p>
            <span style={{ color: GREEN, fontWeight: 700, fontSize: 13 }}>1 Peter 5:6</span>
          </div>
        </div>

      </div>
    </div>
  );
}
