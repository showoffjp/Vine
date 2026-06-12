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
const BLUE = "#3B82F6";
const TEAL = "#0D9488";

const SECTIONS = [
  {
    id: "exomologeomai",
    label: "The Greek Word",
    color: PURPLE,
    icon: "📜",
    title: "Exomologeomai: Full, Public, Acknowledged",
    scripture: "James 5:16; Matthew 3:6; Romans 14:11",
    scriptureText:
      "“Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working” — James 5:16",
    body: [
      "The Greek word James uses for confession is exomologeomai (ἐξομολογέομαι). The prefix ex- means out — out of, from within. The root homologeo means to say the same thing, to agree, to acknowledge. Put together: to speak out from within in full agreement. To say about yourself what is true. To bring what is hidden into the open.",
      "This is not a private mental acknowledgment. The word appears in Matthew 3:6 where crowds were baptized by John, confessing their sins — a public act in a communal context. It appears in Romans 14:11 as a quotation from Isaiah: every tongue shall confess to God — not whisper, but declare. In Philippians 2:11 the same word is used for every tongue confessing that Jesus Christ is Lord.",
      "Exomologeomai, in other words, is the confession of reality — acknowledging publicly what is true. It is the opposite of concealment. When James tells the church to confess sins to one another, he is calling for the same kind of acknowledgment we give to God's lordship: open, verbal, real. Not performance but authenticity.",
      "The weight of this word should land on us. James is not suggesting an optional spiritual practice for the deeply troubled. He is addressing the whole church: therefore, confess your sins to one another. The therefore connects it to the preceding context of suffering, prayer, and the healing power of the elders' intercession. Confession is embedded in community life, not isolated in a private booth.",
    ],
  },
  {
    id: "to-god-vs-one-another",
    label: "God vs. One Another",
    color: GOLD,
    icon: "⚖️",
    title: "Two Dimensions: 1 John 1:9 and James 5:16",
    scripture: "1 John 1:9; James 5:16; Psalm 32:3-5",
    scriptureText:
      "“If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness” — 1 John 1:9",
    body: [
      "These are two distinct but inseparable acts. First John 1:9 describes vertical confession — the believer before God, acknowledging sin and receiving forgiveness and cleansing. This is the foundation. There is no truly Christian understanding of horizontal confession to another person that does not rest on the prior reality that God forgives through the blood of Jesus Christ. We confess to one another because our sins are already forgiven before God; we are not confessing to earn what God has not given.",
      "But James 5:16 describes horizontal confession — the believer before another believer, speaking sin aloud in relationship. This is not the same act as confessing to God. It is a distinct, communal practice with its own distinct effect: that you may be healed. The Greek word for healed here (iathete) is a physical and spiritual healing word. James suggests that confession to one another is connected to healing — not in a mechanical sense but in the sense that what we keep secret keeps us sick.",
      "The Psalmist understood this long before the New Testament. Psalm 32 begins with the blessing of forgiveness but then describes what happened before that: when I kept silent, my bones wasted away through my groaning all day long. For day and night your hand was heavy upon me; my strength was dried up as by the heat of summer (Psalm 32:3-4). Then: I acknowledged my sin to you, and I did not cover my iniquity; I said, 'I will confess my transgressions to the LORD,' and you forgave the iniquity of my sin. Relief and renewal came when David stopped concealing.",
      "The difference between confessing to God and confessing to one another is not a difference in the source of forgiveness — God forgives in both cases — but a difference in the relational reality of sin. Sin is rarely purely private. It affects our relationships, our community, our witness. Confessing only to God while concealing from the people we have affected or who could hold us accountable leaves half the wound unaddressed.",
    ],
  },
  {
    id: "shame-guilt",
    label: "Shame and Guilt",
    color: TEAL,
    icon: "🧠",
    title: "The Psychology of Confession: Shame, Guilt, and What Secrecy Does",
    scripture: "Proverbs 28:13; John 3:20-21; Romans 8:1",
    scriptureText:
      "“Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy” — Proverbs 28:13",
    body: [
      "Shame and guilt are not the same thing, and the difference matters enormously for how we understand confession. Guilt says: I did something wrong. Shame says: I am something wrong. Guilt is specific — it is attached to an act. Shame is global — it collapses into identity. Guilt says 'I lied.' Shame says 'I am a liar and everyone would hate me if they knew.'",
      "Shame thrives in secrecy. The researcher Brené Brown (whose work on vulnerability and shame has been widely received even in Christian circles) found that shame needs three things to survive: secrecy, silence, and judgment. Confession, by definition, attacks all three. When we speak our shame aloud to a trustworthy person who responds with grace and truth rather than condemnation, shame loses its grip. This is not therapy replacing theology — it is the confirmation that James was right.",
      "Jesus draws this connection explicitly in John 3:20: everyone who does wicked things hates the light and does not come to the light, lest his works should be exposed. The language is photographic: sin prefers darkness because exposure brings judgment. But Jesus immediately adds the flip side in verse 21: whoever does what is true comes to the light so that it may be clearly seen that his works have been carried out in God. The person who lives in truth is not afraid of the light. Confession is the act of choosing light over darkness.",
      "Romans 8:1 is the theological ground beneath all of this: there is therefore now no condemnation for those who are in Christ Jesus. Confession does not produce condemnation — Christ has already dealt with condemnation. Confession opens the door to the freedom of full acceptance in Christ that secrecy and shame prevent us from experiencing. We are already accepted; confession lets us live in what is already true.",
      "The shame-guilt distinction also helps us understand why some people seem perpetually guilty and never find freedom even after repeated confession. If the confession is primarily driven by shame-management — doing something religious to relieve the feeling of being wrong — rather than genuine repentance (turning from sin toward God), the relief is temporary. True confession is not primarily emotional relief but relational reorientation: toward God and toward the community whose trust we may have broken.",
    ],
  },
  {
    id: "receiving",
    label: "Receiving Confession",
    color: GREEN,
    icon: "🤝",
    title: "How to Receive Confession: The Pastor and Friend",
    scripture: "Galatians 6:1-2; Luke 15:20; John 8:11",
    scriptureText:
      "“Brothers, if anyone is caught in any transgression, you who are spiritual should restore him in a spirit of gentleness. Keep watch on yourself, lest you too be tempted. Bear one another&rsquo;s burdens, and so fulfill the law of Christ” — Galatians 6:1-2",
    body: [
      "Receiving confession is a sacred act, and it carries its own responsibilities. Galatians 6:1 identifies two that run together: restore in a spirit of gentleness, and keep watch on yourself. The one who receives confession is not a judge pronouncing verdict, not a therapist offering analysis, and not a gossip banking information. The role is restorer — and restoration requires gentleness, not force.",
      "Paul's instruction to keep watch on yourself is a striking pastoral safeguard. The one who hears confession is themselves vulnerable. Pride — 'I cannot believe they did that' — and vicarious temptation — the sin described may awaken desire in the listener — are both real risks. Humility is the posture: I am capable of this too. This is not false modesty but anthropological honesty.",
      "The father in Luke 15 is the paradigm for receiving the returning prodigal. He saw him while he was yet a great way off and ran — not waited, ran. He fell on his neck and kissed him before the son had finished his confession speech. He called for a robe and a ring and a feast. The response to genuine confession and repentance is not measured approval after sufficient groveling; it is extravagant welcome. Spiritual directors and pastors who cultivate a face and posture of extravagant welcome — not naivety, not endorsement of the sin, but genuine welcome of the person — create the conditions in which real confession becomes possible.",
      "Jesus in John 8 offers the clearest model: to the woman caught in adultery He first refused to condemn her, then He commanded her to leave her life of sin. The order matters: welcome precedes command to change. Condemnation first destroys the possibility of genuine transformation. Those who receive confession would do well to learn the sequence: presence and welcome, then honest direction toward life.",
      "Practical wisdom for receiving confession: listen without interrupting. Resist the urge to minimize ('It&rsquo;s not that bad') or catastrophize ('I can&rsquo;t believe you did this'). Ask clarifying questions only when necessary for understanding, not for curiosity. Pray aloud for the person before they leave. Affirm the courage it took to speak. Follow up in the days ahead — not to monitor but to be present. And keep the confidence: confession shared in trust is never shared without explicit permission.",
    ],
  },
  {
    id: "practice",
    label: "Practicing Confession",
    color: BLUE,
    icon: "📝",
    title: "How to Begin a Practice of Confession",
    scripture: "1 John 1:7-9; Psalm 139:23-24; Acts 19:18",
    scriptureText:
      "“Search me, O God, and know my heart! Try me and know my thoughts! And see if there be any grievous way in me, and lead me in the way everlasting” — Psalm 139:23-24",
    body: [
      "The earliest Christian practice of corporate confession appears in Acts 19:18: many of those who were now believers came, confessing and divulging their practices — literally practicing magic and sorcery. They brought their scrolls and burned them publicly. The Ephesian confession was specific (named practices), embodied (physical destruction of the scrolls), and communal (before many witnesses). It was not vague spiritual acknowledgment but specific, costly, relational honesty.",
      "Start with God, daily. The Daily Examen, developed by Ignatius of Loyola, is a 15-minute practice of ending each day by reviewing it with God: where did I experience grace today? Where did I resist it? Where did I sin? Where did I act from love? What do I want to bring before God tonight? This creates the habit of honest self-examination that makes genuine confession to another person possible. You cannot confess specifically to another person if you have not been honest with yourself first.",
      "Choose a confessor wisely. This is not just the first person who comes to mind. A confessor should be: trustworthy with confidences (proven over time), spiritually mature enough to receive serious sin without being destabilized, able to speak truth as well as grace, and not in a position of power over your life circumstances (a boss, for example, is rarely the right confessor). Many find a pastor, a spiritual director, or a same-gender mature friend the right context.",
      "Prepare specifically. Vague confession — 'I&rsquo;ve been struggling with sin generally' — produces vague relief and no real accountability. The Reformers preserved the practice of particular confession precisely because naming specific sins is more honest, more humbling, and more freeing. Write it down before you speak it. The act of writing forces specificity and preparation.",
      "Confession is not a one-time emergency measure but a regular rhythm. Many Christians practice monthly or quarterly confession with a trusted person as a standard discipline — not because they are unusually sinful but because they know that regular honesty with another person is how they stay free. The early church practiced this; the Reformation upheld it; the wisdom traditions of every Christian century affirm it. We are not made to carry our sins alone.",
    ],
  },
];

const VIDEOS = [
  {
    videoId: "26cpOvkTMqo",
    title: "Why Christians Should Confess Their Sins to Each Other",
    description:
      "A biblical case for James 5:16 — the command to confess sins to one another — and why horizontal confession is not Catholic invention but apostolic instruction.",
  },
  {
    videoId: "nFc-0JiicqM",
    title: "What Is True Repentance?",
    description:
      "The difference between worldly sorrow and godly sorrow (2 Corinthians 7:10), and how genuine repentance leads to real change rather than mere regret.",
  },
  {
    videoId: "1A3YbM4lLLM",
    title: "The Freedom of Confession and Repentance",
    description:
      "How confession breaks the power of shame, why secrecy keeps sin alive, and how the grace of God makes honesty possible.",
  },
];

export default function ChristianConfessionGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("exomologeomai");
  const [expandedFaq, setExpandedFaq] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const section = SECTIONS.find((s) => s.id === activeSection)!;

  function toggleFaq(id: string) {
    setExpandedFaq((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const FAQS = [
    {
      id: "protestant-confession",
      q: "Is confession to another person a Catholic practice?",
      a: "No. James 5:16 predates Roman Catholic sacramental theology. The command to confess sins to one another is found in the earliest apostolic writing. The Reformers distinguished between confession as a sacrament that confers forgiveness through priestly absolution (which they rejected) and confession as a pastoral practice of speaking sin aloud in the presence of another believer and receiving the gospel proclaimed to you personally (which they affirmed). Luther, Calvin, and the early Reformed confessions all retained voluntary confession as a valuable practice. The abuse of a practice does not negate its biblical roots.",
    },
    {
      id: "who-to-confess",
      q: "Do I need to confess to a pastor or priest specifically?",
      a: "Scripture does not limit confession to ordained clergy. James 5:16 says confess to one another — the Greek is mutual and reciprocal. The elders in James 5:14 are called to pray over the sick, but the confession command in verse 16 is addressed to the whole community. A spiritually mature, trustworthy believer — a friend, a spiritual director, an elder — is sufficient. What matters is the character of the confessor (see the Galatians 6:1 qualifications) more than their office.",
    },
    {
      id: "sin-versus-struggle",
      q: "Should I confess every sinful thought or only serious sins?",
      a: "The tradition has generally distinguished between sins of thought (interior temptations) and sins of action or deliberate choice. Not every temptation requires formal confession to another person — Jesus was tempted but did not sin (Hebrews 4:15). However, patterns of thought — persistent lust, ongoing anger, chronic dishonesty — do benefit from being spoken aloud to a confessor. The line is less about severity and more about honesty: are you concealing something that has taken root? That is what needs to be confessed.",
    },
    {
      id: "shame-after-confession",
      q: "I confessed but still feel guilty. Did it not work?",
      a: "Feelings of guilt after genuine confession may reflect several things: the conviction of the Holy Spirit about ongoing repentance (good), the lingering neurological effects of shame that have been practiced for years (understandable), or the fact that some consequences of sin remain even after forgiveness (realistic). Forgiveness is a legal reality before God that does not depend on your emotional experience of it. Romans 8:1 is true whether you feel it or not. The feeling often follows the practice of confession over time — not the first time, but over years of honesty and grace received.",
    },
  ];

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
          background: `linear-gradient(160deg, #07070F 0%, #0d0d20 50%, #07070F 100%)`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "64px 24px 56px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: `${PURPLE}18`,
            border: `1px solid ${PURPLE}40`,
            borderRadius: 10,
            padding: "6px 18px",
            color: PURPLE,
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
          Christian Confession Guide
        </h1>
        <p
          style={{
            color: MUTED,
            fontSize: 17,
            maxWidth: 660,
            margin: "0 auto 28px",
            lineHeight: 1.75,
          }}
        >
          Confess your sins to one another &mdash; James 5:16. Not just to God in
          private, but to another human being. This is one of the most neglected
          commands in the New Testament and one of the most liberating practices
          in the Christian life.
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
          &ldquo;Whoever conceals his transgressions will not prosper, but he who
          confesses and forsakes them will obtain mercy.&rdquo; &mdash; Proverbs 28:13
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Key concept banner */}
        <div
          style={{
            background: `${PURPLE}10`,
            border: `1px solid ${PURPLE}25`,
            borderRadius: 14,
            padding: "22px 28px",
            margin: "36px 0",
            display: "flex",
            gap: 20,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              background: `${PURPLE}20`,
              color: PURPLE,
              borderRadius: 10,
              padding: "10px 14px",
              fontSize: 22,
              flexShrink: 0,
            }}
          >
            📜
          </div>
          <div>
            <div
              style={{
                color: PURPLE,
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Key Word: Exomologeomai
            </div>
            <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
              The Greek word James uses for &ldquo;confess&rdquo; is{" "}
              <em>exomologeomai</em> &mdash; from <em>ex</em> (out of) +{" "}
              <em>homologeo</em> (to say the same thing, to agree). It means to
              speak out from within in full agreement with the truth. Public,
              verbal, real acknowledgment &mdash; not a private mental note, but
              the full-throated confession of what is true about yourself.
            </p>
          </div>
        </div>

        {/* Section nav */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 32,
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
            marginBottom: 48,
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
                fontSize: "clamp(20px, 3vw, 26px)",
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

        {/* Side-by-side comparison */}
        <div style={{ marginBottom: 48 }}>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: TEXT,
              marginBottom: 20,
            }}
          >
            Confession to God vs. Confession to One Another
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {[
              {
                label: "Confession to God (1 John 1:9)",
                color: GOLD,
                points: [
                  "Vertical: between the believer and God",
                  "Produces forgiveness and cleansing before God",
                  "Available at all times, in any place, privately",
                  "The foundation — without this, horizontal confession has no theological basis",
                  "Grounded in the blood of Jesus Christ as the basis of forgiveness",
                  "The primary source of assurance and peace with God",
                ],
              },
              {
                label: "Confession to One Another (James 5:16)",
                color: TEAL,
                points: [
                  "Horizontal: between believers in community",
                  "Connected to healing — that you may be healed",
                  "Requires trust, relationship, and careful choice of confessor",
                  "Addresses the relational and communal dimension of sin",
                  "Breaks the power of shame through witnessed grace",
                  "Creates accountability and opens the door to genuine change",
                ],
              },
            ].map((col) => (
              <div
                key={col.label}
                style={{
                  background: CARD,
                  border: `1px solid ${col.color}25`,
                  borderRadius: 14,
                  padding: "22px 24px",
                  borderTop: `3px solid ${col.color}`,
                }}
              >
                <div
                  style={{
                    color: col.color,
                    fontWeight: 800,
                    fontSize: 14,
                    marginBottom: 16,
                    lineHeight: 1.35,
                  }}
                >
                  {col.label}
                </div>
                <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                  {col.points.map((pt, i) => (
                    <li
                      key={i}
                      style={{
                        color: TEXT,
                        fontSize: 13,
                        lineHeight: 1.7,
                        marginBottom: i < col.points.length - 1 ? 10 : 0,
                      }}
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Video section */}
        <div style={{ marginBottom: 48 }}>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: TEXT,
              marginBottom: 8,
            }}
          >
            Video Teaching on Confession
          </h3>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 24 }}>
            Biblical and pastoral teaching on confession, repentance, and the
            freedom that comes from speaking truth.
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
                      color: PURPLE,
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

        {/* FAQ section */}
        <div style={{ marginBottom: 56 }}>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: TEXT,
              marginBottom: 20,
            }}
          >
            Common Questions
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            {FAQS.map((faq) => (
              <div
                key={faq.id}
                style={{
                  background: CARD,
                  border: `1px solid ${expandedFaq[faq.id] ? PURPLE + "40" : BORDER}`,
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  style={{
                    width: "100%",
                    padding: "16px 20px",
                    cursor: "pointer",
                    textAlign: "left",
                    background: "transparent",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      color: TEXT,
                      fontWeight: 700,
                      fontSize: 15,
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      color: MUTED,
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    {expandedFaq[faq.id] ? "−" : "+"}
                  </span>
                </button>
                {expandedFaq[faq.id] && (
                  <div
                    style={{
                      padding: "0 20px 20px",
                      borderTop: `1px solid ${BORDER}`,
                    }}
                  >
                    <p
                      style={{
                        color: TEXT,
                        fontSize: 14,
                        lineHeight: 1.8,
                        margin: "16px 0 0",
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Closing encouragement */}
        <div
          style={{
            background: `linear-gradient(135deg, ${PURPLE}15 0%, ${BLUE}10 100%)`,
            border: `1px solid ${PURPLE}30`,
            borderRadius: 16,
            padding: "40px 36px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 16 }}>✝️</div>
          <h3
            style={{
              fontSize: 22,
              fontWeight: 900,
              color: TEXT,
              marginBottom: 14,
            }}
          >
            The Light Is Safe
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
            The hardest sentence is often the first one spoken aloud: what
            you have been carrying alone for years. But those who have said it
            &mdash; who have spoken their sin into the presence of a trustworthy
            person and heard the gospel spoken back to them &mdash; consistently
            describe the same thing: relief, freedom, the first full breath
            they have taken in a long time. This is what James promised. The
            prayer of a righteous person has great power as it is working.
            Bring your sin into the light. The light is safe, because the One
            who is light has already absorbed your darkness in His own body.
          </p>
          <div
            style={{
              display: "inline-block",
              background: BG,
              border: `1px solid ${GREEN}30`,
              borderRadius: 10,
              padding: "12px 24px",
              color: GREEN,
              fontSize: 14,
              fontStyle: "italic",
            }}
          >
            &ldquo;There is therefore now no condemnation for those who are in
            Christ Jesus.&rdquo; &mdash; Romans 8:1
          </div>
        </div>
      </div>
    </div>
  );
}
