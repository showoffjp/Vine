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

const SECTIONS = [
  {
    id: "assumption",
    label: "When You Fast",
    color: GREEN,
    icon: "📖",
    title: "Jesus Said “When,” Not “If”",
    scripture: "Matthew 6:16-18",
    scriptureText:
      "“And when you fast, do not look gloomy like the hypocrites, for they disfigure their faces that their fasting may be seen by others. Truly, I say to you, they have received their reward. But when you fast, anoint your head and oil your face, that your fasting may not be seen by others but by your Father who is in secret. And your Father who sees in secret will reward you.”",
    body: [
      "Notice what Jesus does not say: He does not say “if you fast.” He says “when you fast” — the same construction He uses in Matthew 6 for prayer (“when you pray”) and giving (“when you give”). Fasting, like prayer and almsgiving, was simply assumed to be part of the normal rhythm of discipleship. The question was never whether a follower of Jesus would fast, but how — and with what heart.",
      "The context in Matthew 6 is the Sermon on the Mount, where Jesus is correcting distorted versions of true religion. The Pharisees fasted twice a week (Luke 18:12) and arranged their appearance to make sure everyone noticed. Jesus calls His disciples to a different practice: invisible fasting, performed for an audience of one, rewarded by the Father who sees in secret.",
      "This is a radical reorientation. The Pharisees fasted to signal spiritual status to the community. Jesus calls His disciples to fast in hiddenness — which means the only motivation left is genuine seeking of God. You cannot fast in secret for the applause of others. That is the design.",
    ],
  },
  {
    id: "biblical-fasts",
    label: "Biblical Fasts",
    color: GOLD,
    icon: "🕊️",
    title: "The Great Fasts of Scripture",
    scripture: "Exodus 34:28; 1 Kings 19:8; Daniel 1:12; Esther 4:16; Acts 13:2-3",
    scriptureText:
      "“So he was there with the LORD forty days and forty nights. He neither ate bread nor drank water.” — Exodus 34:28",
    body: [
      "Moses fasted forty days twice — once receiving the law, once interceding after the golden calf (Exodus 34:28; Deuteronomy 9:18). These were supernatural fasts — sustained by God’s presence beyond the limits of human biology. They were not strategies; they were encounters with the living God.",
      "Elijah, in utter despair under the juniper tree, fasted forty days sustained by an angel’s provision before reaching Horeb — the mountain of God (1 Kings 19:8). His fast was not an act of discipline; it was a journey of depletion and renewal. God met him not in wind or earthquake or fire but in a still small voice. Fasting often clears the static so we can hear what we could not hear before.",
      "Daniel’s fast was different: a partial fast — vegetables and water, no royal food or wine — for ten days at first, then later three weeks of mourning (Daniel 1:12; 10:3). The Daniel fast is about consecration and refusal of the world’s table. It demonstrated that spiritual clarity sometimes requires stepping away from the comforts that dull our senses to God.",
      "Esther called a three-day absolute fast for herself and all the Jews of Susa before she approached the king unsummoned — an act that could mean death (Esther 4:16). Her fast was an act of communal intercession and spiritual preparation before a moment of extreme risk. “If I perish, I perish.” The fast prepared her to act with a courage that was not her own.",
      "In Acts 13, the church at Antioch was worshiping and fasting when the Holy Spirit spoke: “Set apart for me Barnabas and Saul for the work to which I have called them.” They fasted again before sending them out. The first great missionary journey began in a fasting church. Fasting and the leading of the Spirit run together throughout Acts — the early church prayed and fasted as a posture of dependence before major decisions.",
    ],
  },
  {
    id: "types",
    label: "Types of Fasting",
    color: PURPLE,
    icon: "🧭",
    title: "Types of Fasting: Full, Partial, and Media",
    scripture: "Matthew 4:2; Daniel 10:3; Psalm 101:3",
    scriptureText:
      "“I will not set before my eyes anything that is worthless.” — Psalm 101:3",
    body: [
      "A full fast — no food, only water — is the most common form in Scripture. Jesus fasted for forty days in the wilderness before His public ministry began (Matthew 4:2). This kind of fast is a radical reordering: the body’s most insistent demands are deliberately set aside so the spirit can seek what the body cannot give. Medical caution is appropriate for extended fasts; most believers begin with a 24-hour fast and build from there.",
      "A partial fast, like Daniel’s, removes specific foods or meals while keeping the body functional. Many Christians observe a Daniel fast — abstaining from meat, sweets, and bread — for extended seasons of prayer. The point is not the specific food group but the intentional self-denial and the deliberate redirection of attention toward God at each meal that would otherwise have been eaten.",
      "A media fast is the modern equivalent of removing yourself from noise: no social media, no streaming, no news, no entertainment for a set period. Psalm 101:3 may have been written for a king managing his court, but its principle is ancient and contemporary at once — setting a guard on the eyes and mind. When the noise stops, space opens for listening. A media fast is often most powerful when combined with a food fast and structured Bible reading and prayer.",
      "Whatever form it takes, fasting is not a tool for twisting God’s arm or changing His will. It is a posture of dependence that positions us to receive what God is already willing to give. Isaiah 58:6-7 makes the point sharply: the fast God chooses is not religious performance but justice, mercy, and liberation of the oppressed. The outward fast must correspond to an inward reorientation toward God and neighbor.",
    ],
  },
  {
    id: "warfare",
    label: "Spiritual Warfare",
    color: TEAL,
    icon: "⚔️",
    title: "Fasting as Spiritual Warfare",
    scripture: "Matthew 17:21; Mark 9:29; Ephesians 6:12",
    scriptureText:
      "“This kind cannot be driven out by anything but prayer [and fasting].” — Mark 9:29",
    body: [
      "When the disciples failed to cast out a demon that had tormented a boy from childhood, Jesus rebuked the spirit and delivered the child immediately. The disciples asked Him privately why they could not do it. His answer pointed to prayer and fasting. There are categories of spiritual opposition, Jesus suggests, that require a depth of faith and dependence that ordinary spiritual routine does not reach. Fasting is not a formula for power; it is a means of intensified dependence on the power that belongs to God alone.",
      "Paul’s description of spiritual warfare in Ephesians 6 makes clear that the battle is not against flesh and blood — not primarily against people, institutions, or circumstances — but against spiritual forces in the heavenly realms. The armor of God is relational: truth, righteousness, peace, faith, salvation, the word of God, and prayer. Fasting is the intensification of prayer — the act of saying with the whole body, not just the mind: I am not living by bread alone.",
      "Many Christians have found that fasting breaks through places where prayer alone seems to produce no movement. This is not magic. It is not that God is finally persuaded by physical suffering. It is that fasting positions us differently: more alert, more serious, more aware of our need, less distracted by comfort. The posture of fasting is the posture of total dependence. And total dependence is exactly the position from which God tends to work.",
    ],
  },
  {
    id: "breakthrough",
    label: "Fasting for Breakthrough",
    color: GOLD,
    icon: "🌅",
    title: "Fasting for Breakthrough and Discernment",
    scripture: "Ezra 8:21-23; Isaiah 58:6-9; Acts 13:2-3",
    scriptureText:
      "“Is not this the fast that I choose: to loose the bonds of wickedness, to undo the straps of the yoke, to let the oppressed go free, and to break every yoke?” — Isaiah 58:6",
    body: [
      "Ezra refused to ask the king for an armed escort to Jerusalem because he had told the king that God’s hand was on those who seek Him. To ask for a military guard would have contradicted his testimony. So he proclaimed a fast — seeking God’s protection for the journey. He humbled himself before God rather than relying on the power structure around him (Ezra 8:21-23). The fast was an act of theological consistency: matching behavior to belief.",
      "Isaiah 58 is the longest prophetic treatment of fasting in the Bible, and it is largely a critique. God’s people were fasting but still oppressing their workers, quarreling, and striking with fists. God refused to hear their fasts because fasting without justice and mercy is religious theater. But then Isaiah describes the fast God does choose — one that accompanies liberation of the oppressed, feeding the hungry, sheltering the homeless — and promises that this fast will produce light, healing, righteousness, and answered prayer.",
      "This is a stunning promise: Then you shall call, and the LORD will answer; you shall cry, and he will say, ‘Here I am’ (Isaiah 58:9). The breakthrough fast is not just the absence of food but the presence of justice. It is not spiritual performance but spiritual alignment — aligning our desires with what God desires for the world.",
      "For discernment specifically: when facing a major decision — a calling, a move, a marriage, a ministry — fasting creates sustained space for listening. The Acts 13 pattern (worshiping, fasting, hearing the Spirit) suggests that fasting is not a last resort when everything else fails but a first-order practice when clarity is most needed.",
    ],
  },
  {
    id: "practice",
    label: "How to Fast",
    color: GREEN,
    icon: "🙏",
    title: "Practical Guide: What to Do While Fasting",
    scripture: "Matthew 6:6; Colossians 3:2; Psalm 63:1",
    scriptureText:
      "“O God, you are my God; earnestly I seek you; my soul thirsts for you; my flesh faints for you, as in a dry and weary land where there is no water.” — Psalm 63:1",
    body: [
      "Begin with clarity of purpose. Why are you fasting? Breakthrough for a specific prayer? Intercession for another person? Consecration before a new season? Spiritual warfare? The answer shapes how you structure the fast. Write it down. Come back to it every time hunger is at its sharpest — use the hunger itself as a prayer prompt.",
      "Fill the time normally spent on food with specific spiritual activity: scheduled prayer times, extended Bible reading, worship music without multitasking, journaling what you are hearing from God. A fast without an intentional plan for those hours easily fills with distraction. The physical hunger becomes spiritual hunger only when you direct it toward God.",
      "Choose a length appropriate to where you are. A beginner might start with one meal, then a full day, then two days. Extended fasts (3 days, 7 days, 21 days) require physical preparation and medical awareness. Many mature believers observe a regular 24-hour fast one day each week — often called a “weekly fast” — as an ongoing spiritual discipline.",
      "Break your fast deliberately and gently. Re-entry into regular eating is itself a moment for gratitude and prayer. Some Christians break their fast with communion, returning to the table of the Lord before returning to ordinary eating.",
      "Community fasting multiplies the effect. When a household, a small group, or a church fasts together around a shared concern — as in Esther’s case — the sense of unified intercession and shared dependence is powerful. Corporate fasting is not peer pressure; it is joining a united prayer with your body as well as your voice.",
    ],
  },
];

const VIDEOS = [
  {
    videoId: "LhKMRGe9jLU",
    title: "Why Christians Should Fast",
    description: "John Piper walks through the biblical theology of fasting — why Jesus assumed His disciples would fast, and what fasting does to the heart.",
  },
  {
    videoId: "lWwt3CiMQPQ",
    title: "Fasting for Spiritual Breakthrough",
    description: "A practical guide to beginning a fast, the different types of fasting in Scripture, and how to use hunger as a prayer prompt.",
  },
  {
    videoId: "NXv_HXHGH88",
    title: "The Daniel Fast: Purpose, Practice, and Prayer",
    description: "An in-depth look at the partial fast Daniel practiced, its spiritual significance, and how to apply it as a modern believer.",
  },
];

export default function ChristianFastingGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("assumption");

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const section = SECTIONS.find((s) => s.id === activeSection)!;

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
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(160deg, #07070F 0%, #0e0e1c 50%, #07070F 100%)`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "64px 24px 56px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: `${GREEN}18`,
            border: `1px solid ${GREEN}40`,
            borderRadius: 10,
            padding: "6px 18px",
            color: GREEN,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Spiritual Discipline
        </div>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 900,
            letterSpacing: -1,
            marginBottom: 16,
            lineHeight: 1.15,
          }}
        >
          Christian Fasting Guide
        </h1>
        <p
          style={{
            color: MUTED,
            fontSize: 17,
            maxWidth: 640,
            margin: "0 auto 28px",
            lineHeight: 1.75,
          }}
        >
          Jesus said &ldquo;when you fast&rdquo; &mdash; not &ldquo;if.&rdquo; Fasting has accompanied every
          major movement of God in Scripture: from Sinai to the wilderness, from
          Susa to Antioch. It is the discipline that says with the whole body what
          prayer says with the mouth: I need You more than bread.
        </p>
        <div
          style={{
            display: "inline-block",
            background: `${GOLD}12`,
            border: `1px solid ${GOLD}30`,
            borderRadius: 12,
            padding: "14px 28px",
            color: GOLD,
            fontSize: 15,
            fontStyle: "italic",
            fontWeight: 500,
          }}
        >
          &ldquo;And when you fast&hellip; your Father who sees in secret will reward you.&rdquo;
          &mdash; Matthew 6:17-18
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Section nav */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            margin: "40px 0 36px",
          }}
        >
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveSection(s.id)}
              style={{
                padding: "9px 18px",
                borderRadius: 20,
                border: `1px solid ${activeSection === s.id ? s.color : BORDER}`,
                background:
                  activeSection === s.id ? `${s.color}18` : "transparent",
                color: activeSection === s.id ? s.color : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span>{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Section content */}
        <div
          style={{
            background: CARD,
            border: `1px solid ${section.color}30`,
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: 40,
          }}
        >
          {/* Section header */}
          <div
            style={{
              background: `${section.color}10`,
              borderBottom: `1px solid ${section.color}25`,
              padding: "28px 32px",
            }}
          >
            <div
              style={{
                color: section.color,
                fontWeight: 800,
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              {section.icon} {section.label}
            </div>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 900,
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              {section.title}
            </h2>
            <div
              style={{
                background: BG,
                border: `1px solid ${section.color}25`,
                borderRadius: 10,
                padding: "14px 18px",
                borderLeft: `3px solid ${section.color}`,
              }}
            >
              <div
                style={{
                  color: section.color,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {section.scripture}
              </div>
              <p
                style={{
                  color: TEXT,
                  fontSize: 14,
                  fontStyle: "italic",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {section.scriptureText}
              </p>
            </div>
          </div>

          {/* Section body */}
          <div style={{ padding: "28px 32px" }}>
            {section.body.map((para, i) => (
              <p
                key={i}
                style={{
                  color: TEXT,
                  fontSize: 15,
                  lineHeight: 1.85,
                  marginBottom: i < section.body.length - 1 ? 20 : 0,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Biblical fasts reference cards */}
        <div style={{ marginBottom: 56 }}>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: TEXT,
              marginBottom: 20,
            }}
          >
            Quick Reference: Biblical Fasts
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 14,
            }}
          >
            {[
              {
                name: "Moses",
                reference: "Exodus 34:28",
                type: "Full fast, 40 days",
                context:
                  "Receiving the law on Sinai; interceding after the golden calf. A supernatural fast sustained by God&rsquo;s presence.",
                color: GOLD,
              },
              {
                name: "Elijah",
                reference: "1 Kings 19:8",
                type: "Full fast, 40 days",
                context:
                  "Journey from despair to Horeb, the mountain of God. A fast of depletion, renewal, and the still small voice.",
                color: TEAL,
              },
              {
                name: "Daniel",
                reference: "Daniel 1:12; 10:3",
                type: "Partial fast",
                context:
                  "Vegetables and water for ten days; no rich food for three weeks. A fast of consecration and spiritual alertness.",
                color: PURPLE,
              },
              {
                name: "Esther",
                reference: "Esther 4:16",
                type: "Full fast, 3 days",
                context:
                  "Communal fast before approaching the king. Intercession and courage in the face of mortal risk.",
                color: "#EF4444",
              },
              {
                name: "Jesus",
                reference: "Matthew 4:2",
                type: "Full fast, 40 days",
                context:
                  "Wilderness fast before public ministry. Preparation, testing, and the defeat of Satan&rsquo;s temptations by the Word of God.",
                color: GREEN,
              },
              {
                name: "Antioch Church",
                reference: "Acts 13:2-3",
                type: "Corporate fast",
                context:
                  "Fasting during worship; the Holy Spirit commissioned the first missionary journey. Fasting preceded the greatest gospel advance of the first century.",
                color: GOLD,
              },
            ].map((fast) => (
              <div
                key={fast.name}
                style={{
                  background: CARD,
                  border: `1px solid ${fast.color}25`,
                  borderRadius: 12,
                  padding: "18px 20px",
                  borderTop: `3px solid ${fast.color}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{ color: fast.color, fontWeight: 800, fontSize: 15 }}
                  >
                    {fast.name}
                  </div>
                  <span
                    style={{
                      background: `${fast.color}15`,
                      color: fast.color,
                      padding: "2px 8px",
                      borderRadius: 6,
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    {fast.type}
                  </span>
                </div>
                <div
                  style={{ color: MUTED, fontSize: 11, marginBottom: 8 }}
                >
                  {fast.reference}
                </div>
                <p
                  style={{
                    color: TEXT,
                    fontSize: 13,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: fast.context }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Video section */}
        <div style={{ marginBottom: 56 }}>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: TEXT,
              marginBottom: 8,
            }}
          >
            Video Teaching on Fasting
          </h3>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 24 }}>
            Deeper teaching on the theology and practice of Christian fasting.
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: 24 }}
          >
            {VIDEOS.map((v) => (
              <div
                key={v.videoId}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  overflow: "hidden",
                }}
              >
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "16px 20px" }}>
                  <h4
                    style={{
                      color: GREEN,
                      fontWeight: 700,
                      fontSize: 16,
                      marginBottom: 8,
                    }}
                  >
                    {v.title}
                  </h4>
                  <p
                    style={{
                      color: MUTED,
                      fontSize: 14,
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing encouragement */}
        <div
          style={{
            background: `linear-gradient(135deg, ${GREEN}15 0%, ${PURPLE}15 100%)`,
            border: `1px solid ${GREEN}30`,
            borderRadius: 16,
            padding: "40px 36px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 32,
              marginBottom: 16,
            }}
          >
            🌿
          </div>
          <h3
            style={{
              fontSize: 22,
              fontWeight: 900,
              color: TEXT,
              marginBottom: 14,
            }}
          >
            Begin Where You Are
          </h3>
          <p
            style={{
              color: MUTED,
              fontSize: 15,
              lineHeight: 1.85,
              maxWidth: 600,
              margin: "0 auto 20px",
            }}
          >
            You do not need to fast forty days to begin. Skip one meal this week.
            Use the hunger. Let it become a prayer. Bring to God whatever you
            most need to hear from Him. Your Father who sees in secret will
            reward you &mdash; not because you earned it, but because He is the
            kind of Father who delights to be sought.
          </p>
          <div
            style={{
              display: "inline-block",
              background: BG,
              border: `1px solid ${GOLD}30`,
              borderRadius: 10,
              padding: "12px 24px",
              color: GOLD,
              fontSize: 14,
              fontStyle: "italic",
            }}
          >
            &ldquo;Man shall not live by bread alone, but by every word that comes from
            the mouth of God.&rdquo; &mdash; Matthew 4:4
          </div>
        </div>
      </div>
    </div>
  );
}
