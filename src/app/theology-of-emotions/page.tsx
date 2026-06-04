"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "jesus" | "emotions" | "practices" | "videos";

const STATS = [
  { label: "Jesus wept (John 11:35)", sub: "the shortest verse in Scripture" },
  { label: "The Psalms contain 57 distinct emotional words", sub: "" },
  { label: "Jonathan Edwards wrote on 'Religious Affections' in 1746", sub: "" },
  { label: "Jesus expressed anger, grief, joy, compassion, and distress", sub: "" },
];

const THEOLOGY_ITEMS = [
  {
    title: "Emotions Are Not the Enemy",
    body: "Western Christianity — especially in its more rationalist, Reformed expressions — has sometimes treated emotion with suspicion. Emotion is seen as unreliable, manipulable, and therefore less trustworthy than doctrine. But this is a distortion. Emotions are part of the image of God (imago Dei) in human beings. God himself, in Scripture, is described as loving (1 John 4:8), grieving (Genesis 6:6), delighting (Zeph 3:17), being jealous (Exod 20:5), and experiencing wrath (Rom 1:18). These are not anthropomorphisms to be dismissed — they describe the living God who is not emotionally inert. To be made in God's image includes emotional capacity.",
  },
  {
    title: "Emotions Are Not the Authority",
    body: "At the same time, the charismatic and therapeutic streams of Christianity can overcorrect in the other direction — making emotion the primary authority for spiritual experience. 'I felt God's presence' becomes the highest form of evidence. 'I don't feel forgiven' can override the objective declaration of Scripture. This is equally dangerous. Emotions are real and should be honored, but they are not infallible guides. Jeremiah 17:9 warns: 'The heart is deceitful above all things.' The path is not emotion-denial or emotion-worship but emotion-sanctification.",
  },
  {
    title: "The Fallen Condition of Emotions",
    body: "In a fallen world, our emotional responses are disordered by sin. Fear that should produce appropriate caution instead produces paralyzing anxiety. Anger that should respond to real injustice instead flares at minor offenses. Desire that should be oriented toward God becomes addiction. Grief that should process loss can become permanent despair. Jonathan Edwards, in Religious Affections (1746), argued that true spiritual affections are distinguished from mere religious excitement by their fruits — not by their intensity. Emotional intensity is not evidence of the Spirit's work.",
  },
  {
    title: "The Sanctification of Emotions",
    body: "Discipleship includes the gradual transformation of our emotional lives. Paul prays that love would 'abound more and more in knowledge and depth of insight, so that you may be able to discern what is best' (Phil 1:9-10). Love — an emotion/will combination — is to be shaped by theological knowledge. The goal is not the suppression of emotion but its reorientation: anger redirected toward injustice rather than personal offense; fear of God displacing fear of others; desire for God greater than desire for comfort. This is the work of a lifetime, not a one-time emotional experience.",
  },
  {
    title: "Emotions as Spiritual Diagnostics",
    body: "Dan Allender and Tremper Longman III, in their book The Cry of the Soul, argue that 'our emotions are a report card on what we believe about God.' Emotions surface our actual beliefs — the things we genuinely trust, fear, and hope in — rather than our stated beliefs. A person who claims to trust God but lives in chronic anxiety may actually believe the universe is indifferent. A person who claims to believe in grace but lives in shame may functionally believe God cannot forgive them. Paying honest attention to our emotions — in prayer, in the Psalms, with a counselor or director — is a form of spiritual self-knowledge.",
  },
  {
    title: "The Goal: Integrity Between Head, Heart, and Will",
    body: "Biblical faith is never merely intellectual belief, emotional experience, or act of will alone — it engages the whole person. The Shema calls for love of God with 'all your heart and with all your soul and with all your might' (Deut 6:5). The Psalms move from lament to trust to praise in a single poem — modeling the integration of emotion with theology. The goal is a person who thinks truly about God, feels appropriately in response to truth, and acts accordingly. This is what Jesus displayed perfectly — and what the Spirit is restoring in us.",
  },
];

const JESUS_EMOTIONS = [
  {
    name: "Joy",
    scriptures: ["John 15:11", "Luke 10:21", "Hebrews 12:2"],
    description: "Jesus spoke explicitly of his joy and commanded disciples to share it. He rejoiced in the Holy Spirit (Luke 10:21). Hebrews says he endured the cross 'for the joy set before him.' This was not shallow happiness but the deep joy of a person fully aligned with God's purposes.",
    application: "Christian joy is not the absence of suffering but the presence of the Risen Christ within suffering.",
  },
  {
    name: "Compassion",
    scriptures: ["Matthew 9:36", "Mark 6:34", "Luke 7:13"],
    description: "The Greek word splanchnizomai — used 12 times for Jesus — means a gut-wrenching compassion that rises from the bowels. He was 'moved with compassion' when he saw crowds like sheep without a shepherd, when he raised the widow of Nain's son, when he healed the sick. This is not distant pity but visceral solidarity.",
    application: "Christian compassion is a learnable emotional response — it is trained by presence with suffering, not distance from it.",
  },
  {
    name: "Grief/Sorrow",
    scriptures: ["John 11:35", "Matthew 26:38", "Luke 19:41"],
    description: "Jesus wept at Lazarus's tomb — even knowing he would raise him. He was 'deeply moved' and 'troubled' in spirit. He wept over Jerusalem. In Gethsemane, he said his soul was 'overwhelmed with sorrow to the point of death.' Jesus does not manage or suppress grief — he enters it fully.",
    application: "Christian grief is not lack of faith. It is faithfulness to reality — the acknowledgment that death is wrong, loss is real, and resurrection has not yet come for everything.",
  },
  {
    name: "Anger",
    scriptures: ["Mark 3:5", "John 2:13-17", "Mark 10:14"],
    description: "Jesus was angry at the Pharisees' hardness of heart (Mark 3:5). He drove out money-changers with a whip (John 2). He was indignant when disciples rebuked parents bringing children (Mark 10:14). This is righteous anger — anger at sin, injustice, religious hypocrisy, and harm done to the vulnerable. It is not explosive, not self-serving, and it does not lead to sin.",
    application: "Anger at injustice and harm is appropriate — the question is whether it leads to righteous action or to sin.",
  },
  {
    name: "Distress/Anguish",
    scriptures: ["Luke 12:50", "Mark 14:33-34", "Matthew 27:46"],
    description: "Jesus said he had a 'baptism to be baptized with' and was 'distressed until it is completed' — the cross was a weight he carried. In Gethsemane, he fell to the ground in anguish, prayed three times to be spared, sweat like drops of blood (Luke 22:44). On the cross, he cried the forsakenness of Psalm 22. Jesus experienced profound spiritual and emotional anguish — not as spiritual failure but as perfect faithfulness.",
    application: "Emotional anguish in the Christian life is not evidence of abandonment by God.",
  },
  {
    name: "Indignation/Zeal",
    scriptures: ["Mark 11:15-17", "John 2:17"],
    description: "'Zeal for your house will consume me' (John 2:17 — quoting Psalm 69:9). Jesus's anger at the money-changers in the temple was not impulsive but prophetic — he made a whip, drove out the animals, overturned tables. This is righteous zeal: burning passion for the purity of God's house, God's worship, God's name. It is the antithesis of tepid, culturally accommodated religion.",
    application: "Christians should burn with zeal for God's glory — a holy restlessness when worship becomes commerce and religion becomes brand.",
  },
];

const SCRIPTURE_EMOTIONS = [
  {
    name: "Fear",
    scripture: "Proverbs 9:10, 1 John 4:18",
    teaching: "The fear of the Lord is wisdom's beginning; it is reverence, awe, and holy dread before the living God. Perfect love casts out tormenting fear — not the fear of God but the fear of punishment, rejection, and death.",
    accent: "#EF4444",
  },
  {
    name: "Grief",
    scripture: "Psalm 34:18, Romans 12:15",
    teaching: "God is near to the brokenhearted and saves the crushed in spirit. Weeping with those who weep is a command — Christian community is one that makes room for honest sorrow.",
    accent: "#6B7280",
  },
  {
    name: "Anger",
    scripture: "Ephesians 4:26, James 1:19-20",
    teaching: "'Be angry, and do not sin' — anger is not forbidden but its expression is regulated. Human anger rarely achieves God's righteous purposes; slow anger and quick listening are marks of wisdom.",
    accent: "#F59E0B",
  },
  {
    name: "Shame",
    scripture: "Romans 8:1, Psalm 25:3",
    teaching: "There is now no condemnation for those who are in Christ Jesus. No one who hopes in God will ever be put to shame. The cross is God's definitive treatment of shame — Jesus bore it publicly so that we might be clothed in his righteousness.",
    accent: "#8B5CF6",
  },
  {
    name: "Joy",
    scripture: "Nehemiah 8:10, Romans 15:13",
    teaching: "The joy of the Lord is your strength — not happiness dependent on circumstances but delight in God that runs beneath even suffering. God fills believers with all joy and peace as they trust in him.",
    accent: "#10B981",
  },
  {
    name: "Hope",
    scripture: "Romans 5:3-5, Romans 15:4",
    teaching: "Hope is not optimism; it is confident expectation based on God's proven character. Suffering produces endurance, endurance character, character hope — and hope does not put us to shame because God's love is poured into our hearts.",
    accent: "#3B82F6",
  },
  {
    name: "Anxiety",
    scripture: "Philippians 4:6-7, 1 Peter 5:7",
    teaching: "Do not be anxious about anything — present every worry to God in prayer with thanksgiving. Cast all your anxiety on him because he cares for you. Peace that surpasses understanding will guard heart and mind.",
    accent: "#EC4899",
  },
  {
    name: "Love",
    scripture: "1 Corinthians 13:4-8, 1 John 4:19",
    teaching: "Love is the greatest emotion-will-action, the fulfillment of the law and the prophets. We love because God first loved us — love originates in God, flows to us, and must flow through us to others.",
    accent: "#F97316",
  },
];

const PRACTICES_ITEMS = [
  {
    title: "The Daily Examen: Emotional Review",
    body: "At the end of each day, ask: What emotions did I feel today? When did I feel closest to God? When did I pull away? What was I most grateful for? What caused me distress? Where did I act from fear rather than faith? This practice, developed by Ignatius of Loyola, trains emotional self-awareness in the presence of God.",
  },
  {
    title: "Praying the Psalms of Emotion",
    body: "The Psalms give voice to every human emotion. When you feel anger, pray Psalm 109 or 35. When you feel despair, pray Psalm 88. When you feel joy, pray Psalm 103. When you feel shame, pray Psalm 25. The Psalms rescue us from having to be emotionally articulate with God — they lend us words when we have none.",
  },
  {
    title: "Naming Emotions Before God",
    body: "Many Christians have not been taught to name their emotions. They say 'I feel like...' and describe a thought, not a feeling. Practice: once per day, pause and ask 'What am I feeling right now?' Name it with precision: not 'upset' but 'betrayed'; not 'bad' but 'ashamed'; not 'fine' but 'quietly grateful.' Bring that named emotion to God in prayer.",
  },
  {
    title: "Counseling as Spiritual Formation",
    body: "The church has sometimes treated psychological counseling as spiritually inferior to prayer or pastoral care. This is a false dichotomy. Our emotional lives are shaped by attachment patterns, family systems, and traumatic experiences that may need professional care to address. Seeking a Christian counselor is not a failure of faith — it is faithful stewardship of your emotional health. Look for integration of biblical truth with evidence-based therapy.",
  },
  {
    title: "Reading Books on Emotional Health",
    body: "Key books: The Cry of the Soul by Dan Allender and Tremper Longman III; Emotionally Healthy Spirituality by Peter Scazzero; Religious Affections by Jonathan Edwards; The Wounded Heart by Dan Allender (for trauma survivors); Untangling Emotions by J. Alasdair Groves and Winston T. Smith (biblical theology of emotion); The Sacred Enneagram by Christopher Heuertz.",
  },
  {
    title: "Community as Emotional Formation",
    body: "We cannot become emotionally healthy alone. We need others who will name what they see in us that we cannot see in ourselves — the defensiveness, the emotional avoidance, the chronic anger. Find a small group, a spiritual director, or a close friend who has permission to speak truthfully into your emotional life. James 5:16: 'Confess your sins to one another and pray for one another, that you may be healed.'",
  },
];

export default function TheologyOfEmotionsPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_theology-of-emotions_tab", "theology");
  const [expandedTheology, setExpandedTheology] = useState<number | undefined>(undefined);
  const [expandedPractices, setExpandedPractices] = useState<number | undefined>(undefined);
  const [activeEmotion, setActiveEmotion] = useState<number>(0);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 12, color: TEXT }}>A Theology of Emotions</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto", lineHeight: 1.75 }}>
            Emotions are not obstacles to faith — they are part of being made in God&apos;s image. But they are also fallen, and they must be trained by truth. A Christian theology of emotions holds both.
          </p>
        </div>

        {/* Stats Banner */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 36 }}>
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "16px 18px",
                borderLeft: `3px solid ${i % 2 === 0 ? GREEN : PURPLE}`,
              }}
            >
              <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, lineHeight: 1.5 }}>{s.label}</div>
              {s.sub && <div style={{ color: MUTED, fontSize: 12, marginTop: 4 }}>{s.sub}</div>}
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {(
            [
              { id: "theology" as Tab, label: "Theology" },
              { id: "jesus" as Tab, label: "Jesus's Emotions" },
              { id: "emotions" as Tab, label: "Emotions in Scripture" },
              { id: "practices" as Tab, label: "Practices" },
              { id: "videos" as Tab, label: "Videos" },
            ] as { id: Tab; label: string }[]
          ).map((t) => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "10px 8px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Theology of Emotions */}
        {activeTab === "theology" && (
          <div>
            {THEOLOGY_ITEMS.map((item, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  marginBottom: 12,
                  overflow: "hidden",
                }}
              >
                <button type="button"
                  onClick={() => setExpandedTheology(expandedTheology === i ? undefined : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 22px",
                    background: "transparent",
                    border: "none",
                    color: TEXT,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontWeight: 800, fontSize: 16, color: expandedTheology === i ? GREEN : TEXT }}>
                    {item.title}
                  </span>
                  <span style={{ color: MUTED, fontSize: 18, flexShrink: 0, marginLeft: 12 }}>
                    {expandedTheology === i ? "−" : "+"}
                  </span>
                </button>
                {expandedTheology === i && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: "16px 0 0" }}>{item.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Jesus's Emotional Life */}
        {activeTab === "jesus" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            {/* Left: emotion buttons */}
            <div style={{ width: 180, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {JESUS_EMOTIONS.map((e, i) => (
                <button type="button"
                  key={i}
                  onClick={() => setActiveEmotion(i)}
                  style={{
                    padding: "12px 16px",
                    borderRadius: 10,
                    border: `1px solid ${activeEmotion === i ? PURPLE : BORDER}`,
                    background: activeEmotion === i ? `${PURPLE}22` : CARD,
                    color: activeEmotion === i ? TEXT : MUTED,
                    fontWeight: activeEmotion === i ? 800 : 600,
                    fontSize: 14,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s",
                  }}
                >
                  {e.name}
                </button>
              ))}
            </div>

            {/* Right: sticky detail panel */}
            <div style={{ flex: 1, position: "sticky", top: 24 }}>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: 28,
                  borderTop: `3px solid ${PURPLE}`,
                }}
              >
                <h2 style={{ fontSize: 24, fontWeight: 900, color: GREEN, marginBottom: 16, marginTop: 0 }}>
                  {JESUS_EMOTIONS[activeEmotion].name}
                </h2>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
                  {JESUS_EMOTIONS[activeEmotion].scriptures.map((s, si) => (
                    <span
                      key={si}
                      style={{
                        background: `${PURPLE}28`,
                        color: PURPLE,
                        padding: "3px 11px",
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, marginBottom: 20, marginTop: 0 }}>
                  {JESUS_EMOTIONS[activeEmotion].description}
                </p>
                <div
                  style={{
                    background: `${GREEN}10`,
                    border: `1px solid ${GREEN}30`,
                    borderRadius: 10,
                    padding: "14px 18px",
                  }}
                >
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: 1 }}>
                    Application
                  </span>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "8px 0 0" }}>
                    {JESUS_EMOTIONS[activeEmotion].application}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Key Emotions in Scripture */}
        {activeTab === "emotions" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {SCRIPTURE_EMOTIONS.map((e, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: 20,
                  borderTop: `3px solid ${e.accent}`,
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 900,
                    color: e.accent,
                    marginBottom: 8,
                  }}
                >
                  {e.name}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: MUTED,
                    marginBottom: 12,
                    letterSpacing: 0.5,
                  }}
                >
                  {e.scripture}
                </div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{e.teaching}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Practices for Emotional Health */}
        {activeTab === "practices" && (
          <div>
            {PRACTICES_ITEMS.map((item, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  marginBottom: 12,
                  overflow: "hidden",
                }}
              >
                <button type="button"
                  onClick={() => setExpandedPractices(expandedPractices === i ? undefined : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 22px",
                    background: "transparent",
                    border: "none",
                    color: TEXT,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontWeight: 800, fontSize: 16, color: expandedPractices === i ? GREEN : TEXT }}>
                    {item.title}
                  </span>
                  <span style={{ color: MUTED, fontSize: 18, flexShrink: 0, marginLeft: 12 }}>
                    {expandedPractices === i ? "−" : "+"}
                  </span>
                </button>
                {expandedPractices === i && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: "16px 0 0" }}>{item.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on the theology of emotions.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "OtUenqxT9p8", title: "A Theology of Emotions", channel: "Christian Teaching", description: "A foundational session exploring what Scripture teaches about human emotions, their role in the spiritual life, and how they relate to our knowledge of God." },
                  { videoId: "bjQ2zr3rAVY", title: "Understanding Emotions — Full Sermon", channel: "Joyce Meyer Ministries", description: "A practical biblical sermon on the nature of emotions, why Christians struggle with them, and how God's truth transforms our emotional lives." },
                  { videoId: "3yyxPAlF4Dc", title: "As a Christian, Do My Emotions Matter?", channel: "Theocast", description: "A theological conversation on whether and how emotions matter in the Christian life, and what a healthy relationship with our feelings looks like." },
                  { videoId: "Eb3IUHzB2rE", title: "Untangle Your Emotions — Bible Study Session 1", channel: "Jennie Allen", description: "Jennie Allen opens her Bible study series on emotions, helping Christians understand the God-designed purpose of their emotional experiences." },
                  { videoId: "ZoKI2BmTCgo", title: "God's Design for Mental Health: The Role of Emotions in Christian Life", channel: "Church Teaching", description: "A sermon from John 11:1-44 on how Jesus modeled emotional health and what his example teaches us about grief, compassion, and authentic faith." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
