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

const VIDEOS = [
  {
    videoId: "t9JMbs6UJCI",
    title: "What Is Discipleship? — A Biblical Definition",
    channel: "Desiring God",
    description: "John Piper explores what it means to be a mathetes &mdash; a learner and follower of Jesus &mdash; and why discipleship is not a program but a way of life.",
  },
  {
    videoId: "aXDI94BDX-U",
    title: "The Cost of Discipleship — Bonhoeffer&rsquo;s Challenge",
    channel: "The Gospel Coalition",
    description: "An exploration of Dietrich Bonhoeffer&rsquo;s distinction between cheap grace and costly grace, and why the church&rsquo;s great temptation is to offer conversion without cross-bearing.",
  },
  {
    videoId: "J1QBzaqUNW8",
    title: "Spiritual Formation: How We Grow in Christ",
    channel: "Renovar&eacute;",
    description: "Dallas Willard on the disciplines of the spiritual life &mdash; how transformation happens, why information alone never produces it, and what intentional training in godliness looks like.",
  },
];

const THEOLOGY_SECTIONS = [
  {
    id: "mathetes",
    color: GREEN,
    title: "Mathetes: The Learner-Follower",
    ref: "Matthew 4:18-22; Luke 14:25-33",
    body: [
      "The Greek word mathetes, translated &ldquo;disciple,&rdquo; carries a richer meaning than our word &ldquo;student.&rdquo; A mathetes was not merely someone who attended lectures. In the ancient world, a disciple attached himself to a teacher, lived in proximity to him, imitated his way of life, and was apprenticed into his wisdom. The goal was not passing an exam &mdash; it was becoming like the teacher.",
      "Jesus&rsquo;s call in Matthew 4 is strikingly concrete: &ldquo;Follow me.&rdquo; Not &ldquo;believe these propositions,&rdquo; not &ldquo;attend my meetings,&rdquo; not &ldquo;adopt my values.&rdquo; Follow me &mdash; present tense, ongoing, relational. The disciples literally walked where Jesus walked, ate what he ate, heard how he prayed, saw how he responded to the powerful and the marginalized. Discipleship was not primarily a classroom exercise; it was an apprenticeship in a whole way of being.",
      "Luke 14:25-33 raises the stakes: &ldquo;If anyone comes to me and does not hate his own father and mother and wife and children and brothers and sisters, yes, and even his own life, he cannot be my disciple.&rdquo; Jesus uses the language of comparison &mdash; the hyperbolic &ldquo;hate&rdquo; means &ldquo;love by comparison so much less.&rdquo; But the point stands: discipleship requires total allegiance. It is not a supplement to ordinary life but the reordering of it.",
    ],
  },
  {
    id: "cost",
    color: GOLD,
    title: "The Cost of Discipleship: Bonhoeffer",
    ref: "Luke 9:23; Dietrich Bonhoeffer, The Cost of Discipleship (1937)",
    body: [
      "Dietrich Bonhoeffer wrote The Cost of Discipleship in 1937 from the underground seminary at Finkenwalde while the Nazi church was capitulating to Hitler. His famous opening line still indicts: &ldquo;Cheap grace is the deadly enemy of our church.&rdquo; Cheap grace is the grace of forgiveness without repentance, baptism without church discipline, communion without confession. It is grace as doctrine, grace as idea, grace as principle &mdash; grace without Jesus Christ, living and incarnate.",
      "Bonhoeffer&rsquo;s contrast is costly grace: &ldquo;Costly grace is the treasure hidden in the field; for the sake of it a man will go and sell all that he has... It is costly because it costs a man his life, and it is grace because it gives a man the only true life.&rdquo; For Bonhoeffer, the issue was not whether grace is free &mdash; it is entirely free; it cannot be earned. The issue is whether the one who receives it is genuinely transformed by it. A grace that leaves the recipient unchanged is not grace at all; it is a transaction with a religion.",
      "Luke 9:23 is the hinge: &ldquo;If anyone would come after me, let him deny himself and take up his cross daily and follow me.&rdquo; The word &ldquo;daily&rdquo; is Luke&rsquo;s unique contribution to the synoptic tradition. Matthew and Mark simply say &ldquo;take up his cross.&rdquo; Luke adds the word that refuses to let discipleship become a one-time decision &mdash; it is a daily, ongoing, repeated act of self-denial and re-commitment. The cross is not carried once. It is picked up every morning.",
    ],
  },
  {
    id: "formation",
    color: PURPLE,
    title: "Spiritual Formation: Education vs. Transformation",
    ref: "Romans 12:2; 2 Corinthians 3:18; Philippians 1:6",
    body: [
      "Dallas Willard made the distinction that changed evangelical discipleship conversations: information is not transformation. You can know the entire Bible, pass every theology exam, answer every catechism question correctly, and still be an anxious, impatient, self-serving person. Information enters the mind. Transformation enters the character &mdash; and character is formed by practice, by habit, by the repeated choices that carve patterns into the soul.",
      "Romans 12:2 uses the language of metamorphosis: &ldquo;be transformed by the renewing of your mind.&rdquo; The Greek metamorphousthe is passive &mdash; something is done to you, not by you. But it is also imperative &mdash; you are commanded to submit to it. Transformation is a work of God that requires the cooperation of the human will. We do not transform ourselves; we position ourselves to be transformed. This is the logic of spiritual disciplines: they are not ways of earning grace but of opening ourselves to the grace that is already at work.",
      "2 Corinthians 3:18 gives the mechanism: &ldquo;And we all, with unveiled face, beholding the glory of the Lord, are being transformed into the same image from one degree of glory to another.&rdquo; We are transformed by beholding. We become what we look at, over time. The person who looks at wealth becomes acquisitive. The person who stares into screens becomes anxious and distracted. The person who looks at Jesus &mdash; in Scripture, in prayer, in community, in service &mdash; is gradually, imperceptibly reshaped into his image. This is the logic of Christian formation.",
    ],
  },
  {
    id: "mentoring",
    color: TEAL,
    title: "The Mentoring Relationship: 2-3-12",
    ref: "Mark 3:13-15; 2 Timothy 2:2; Acts 18:24-26",
    body: [
      "Jesus made disciples in concentric circles. He spoke to the crowds. He taught the seventy-two. He lived with the twelve. He poured himself most deeply into three &mdash; Peter, James, and John. The model is intentional, differentiated investment: Jesus did not give the same level of access to everyone. He chose specific people and gave them more of himself.",
      "2 Timothy 2:2 distills the pattern into its replicating form: &ldquo;and what you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also.&rdquo; Paul to Timothy to faithful men to others &mdash; four generations of discipleship in one verse. The genius of the model is its multiplication: a one-to-many broadcast never multiplies; a one-to-one investment replicates.",
      "The mentoring relationship in the New Testament is concrete and relational, not programmatic. Priscilla and Aquila take Apollos aside and &ldquo;explained to him the way of God more accurately&rdquo; (Acts 18:26). This is mentoring: one who knows more investing in one who knows less, in the context of relationship, with the goal of the other&rsquo;s formation. The great deficit in contemporary discipleship is not materials or programs &mdash; it is older, more mature believers willing to invest time in younger, less mature ones without a curriculum to hide behind.",
    ],
  },
  {
    id: "stages",
    color: BLUE,
    title: "Stages of Spiritual Formation",
    ref: "1 John 2:12-14; Hebrews 5:11-14; Ephesians 4:13",
    body: [
      "Scripture itself recognizes stages of spiritual growth. John writes to &ldquo;little children,&rdquo; to &ldquo;young men,&rdquo; and to &ldquo;fathers&rdquo; in 1 John 2:12-14 &mdash; not merely chronological ages but developmental stages of spiritual life. Hebrews 5 rebukes immature believers who, though they ought to be teachers by now, still need milk rather than solid food. Ephesians 4:13 describes the goal as &ldquo;mature manhood, to the measure of the stature of the fullness of Christ.&rdquo;",
      "Spiritual formation researchers have mapped these stages in various ways. Janet Hagberg and Robert Guelich identify six stages from early belief through deep transformation and outward release into sacrificial mission. Robert Clinton&rsquo;s Leader Development model traces a lifetime arc of formation. What the models share is the recognition that formation is not flat &mdash; it has seasons, crises, and turning points. The dark night of the soul is not an accident; it is often where the deepest formation happens. The desert is not abandonment; it is preparation.",
      "The practical implication: a church that offers only one mode of formation &mdash; the Sunday sermon, the new members class &mdash; cannot take people through the full arc of spiritual development. Different stages require different contexts: new believers need basic formation; established believers need challenge and accountability; mature believers need to be releasing the next generation. A healthy discipleship culture has pathways for all three.",
    ],
  },
];

const PRACTICES = [
  {
    color: GREEN,
    title: "Daily Cross-Bearing",
    desc: "Luke 9:23 is not metaphorical. The cross was the most degrading form of public execution. Jesus&rsquo;s hearers knew exactly what it meant to carry one. Daily cross-bearing means the daily death of the self-will that wants to be served, to be comfortable, to be in control. It means choosing what God wants over what you want, every day, before the day has proved itself easy or hard.",
    steps: [
      "Each morning, name one specific area where you are tempted to serve yourself rather than God",
      "Surrender that area explicitly in prayer before the day starts",
      "At night, review: where did you take the cross, and where did you put it down?",
    ],
  },
  {
    color: GOLD,
    title: "Intentional Mentoring",
    desc: "Discipleship does not happen accidentally. It requires someone to pursue it &mdash; both to seek a mentor and to become one. The 2-3-12 pattern of Jesus requires intentionality: who is pouring into you, and who are you pouring into? If the answers are &ldquo;no one&rdquo; in either direction, something is missing.",
    steps: [
      "Identify one person further along in faith who you will ask to meet with regularly",
      "Identify one person earlier in faith who you will intentionally invest in",
      "Make the ask &mdash; most potential mentors are waiting to be asked, not looking for students",
    ],
  },
  {
    color: PURPLE,
    title: "Spiritual Disciplines as Training",
    desc: "Willard&rsquo;s insight: spiritual disciplines are training, not performance. An athlete doesn&rsquo;t run the race to get fit; she trains in order to run the race. Scripture, prayer, fasting, silence, solitude, service &mdash; these are the training for the kind of person who can run well under pressure. They don&rsquo;t earn grace; they prepare the soul to receive and express it.",
    steps: [
      "Choose one discipline you have neglected and practice it for 30 days",
      "Start smaller than you think you should &mdash; five minutes beats zero minutes",
      "Find a partner who will ask you whether you practiced, not whether you felt good about it",
    ],
  },
  {
    color: TEAL,
    title: "Accountability Without Performance",
    desc: "The accountability question &ldquo;how are you doing?&rdquo; invites performance. Better questions require honesty: &ldquo;Where did you fail this week?&rdquo; &ldquo;What did you avoid that you knew you should face?&rdquo; Real accountability creates the conditions where honesty is safer than pretense &mdash; because the person asking already knows you are broken and is not surprised by it.",
    steps: [
      "Find one person you can be completely honest with, and meet regularly",
      "Agree on the questions you will ask each other",
      "Confess specific sins rather than general &lsquo;areas of struggle&rsquo; &mdash; specificity is the test of real accountability",
    ],
  },
  {
    color: BLUE,
    title: "Study That Forms, Not Just Informs",
    desc: "Read Scripture to be encountered, not just informed. The difference between a student of the Bible and a disciple formed by it is posture: the student extracts information; the disciple submits to address. Lectio Divina (sacred reading) is the ancient practice of slow, attentive, prayerful engagement with Scripture &mdash; reading until something speaks, then staying with it until it forms.",
    steps: [
      "Read one short passage slowly, three times, letting each reading deepen",
      "Ask: what word or phrase catches you? What is the invitation? What is the resistance?",
      "Respond in prayer before moving on",
    ],
  },
  {
    color: "#EF4444",
    title: "Be Formed in Community",
    desc: "Solitary formation is incomplete. The New Testament knows nothing of the Christian who grows alone. We are formed by the community we inhabit &mdash; for better or for worse. The church at its best is a formation community: a place where iron sharpens iron, where the weak are cared for, where sin is named and forgiven, where the image of God in each member is drawn out by the love of the others.",
    steps: [
      "Join a small group that prays, studies, and is honest together &mdash; not just social",
      "Stay when it gets uncomfortable &mdash; the discomfort is where formation happens",
      "Commit to a congregation and serve it &mdash; formation requires responsibility, not just attendance",
    ],
  },
];

const MODELS = [
  {
    name: "The Twelve",
    era: "c. 28&ndash;30 AD",
    color: GREEN,
    desc: "Jesus&rsquo;s investment in twelve ordinary men &mdash; fishermen, a tax collector, a zealot &mdash; is the founding model of intentional discipleship. He called them to &lsquo;be with him&rsquo; (Mark 3:14) before he sent them out. Proximity and mission together.",
    lesson: "Discipleship requires proximity. You cannot be formed at a distance. The incarnational pattern &mdash; God with us &mdash; is also the discipleship pattern.",
  },
  {
    name: "Paul & Timothy",
    era: "c. 50s AD",
    color: GOLD,
    desc: "Paul called Timothy his &lsquo;true son in the faith.&rsquo; He mentored him across years and distances, wrote him two letters of pastoral formation, and trusted him with the most demanding assignments. Timothy was apprenticed into apostolic ministry, not merely taught it.",
    lesson: "Mentoring requires genuine investment over time &mdash; not a program but a relationship. The letters to Timothy read like a father writing to a son he deeply loves and is preparing for leadership.",
  },
  {
    name: "Dietrich Bonhoeffer",
    era: "1906&ndash;1945",
    color: PURPLE,
    desc: "Bonhoeffer practiced what he preached. The underground seminary at Finkenwalde was a community of intense mutual formation &mdash; daily Scripture, daily communal prayer, daily service, deep accountability. When the Gestapo closed it, Bonhoeffer continued through letters. He was executed at 39 for his resistance to Hitler. His discipleship was not theoretical.",
    lesson: "Formation happens in communities that share life together, not merely attend programs together. And discipleship must be costly enough to produce the kind of courage Bonhoeffer displayed.",
  },
  {
    name: "Dallas Willard",
    era: "1935&ndash;2013",
    color: TEAL,
    desc: "Willard was a philosopher who became the most important discipleship theologian of the late 20th century. His argument: the church has been so focused on getting people into heaven that it has forgotten to let heaven get into people. His concept of the &lsquo;apprentice to Jesus&rsquo; reframed discipleship as the lifelong project of becoming the kind of person who does naturally and joyfully what Jesus would do.",
    lesson: "Discipleship is not about behavior modification but character transformation. The goal is not willpower obedience but the kind of person who loves what God loves &mdash; so that obedience flows from desire, not duty.",
  },
  {
    name: "Benedict of Nursia",
    era: "c. 480&ndash;547 AD",
    color: BLUE,
    desc: "Benedict&rsquo;s Rule organized monastic life around a rhythm of prayer, work, and community that has formed disciples for fifteen centuries. Ora et labora &mdash; pray and work &mdash; as the daily structure of a whole life. The Rule is not primarily about rules; it is about creating the conditions in which formation can happen.",
    lesson: "Structure is not the enemy of grace &mdash; it is the container that makes sustained formation possible. The person who has no rhythm of prayer and Scripture is not more free; she is more scattered. A rule of life is not a cage; it is a trellis.",
  },
];

export default function ChristianDiscipleshipGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"theology" | "practices" | "models" | "videos">("theology");

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const toggleSection = (id: string) => {
    setActiveSection((prev) => (prev === id ? null : id));
  };

  const TABS: { key: "theology" | "practices" | "models" | "videos"; label: string }[] = [
    { key: "theology", label: "Biblical Theology" },
    { key: "practices", label: "Practices" },
    { key: "models", label: "Historical Models" },
    { key: "videos", label: "Videos" },
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
          background: `linear-gradient(160deg, #0d0d20 0%, ${BG} 60%)`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "64px 20px 56px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: `${PURPLE}22`,
              border: `1px solid ${PURPLE}44`,
              borderRadius: 24,
              padding: "5px 16px",
              color: PURPLE,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Mathetes &mdash; Learner &amp; Follower
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Christian Discipleship:
            <br />
            <span style={{ color: PURPLE }}>Take Up Your Cross Daily</span>
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              lineHeight: 1.8,
              maxWidth: 620,
              margin: "0 auto 32px",
            }}
          >
            From Bonhoeffer&rsquo;s costly grace to Dallas Willard&rsquo;s apprenticeship model &mdash; what it means
            to be formed into the image of Christ, not just informed about him.
          </p>
          <blockquote
            style={{
              background: CARD,
              border: `1px solid ${PURPLE}33`,
              borderLeft: `4px solid ${PURPLE}`,
              borderRadius: 10,
              padding: "18px 24px",
              margin: "0 auto",
              maxWidth: 560,
              textAlign: "left",
            }}
          >
            <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>
              &ldquo;If anyone would come after me, let him deny himself and take up his cross daily and follow me.&rdquo;
            </p>
            <cite style={{ color: MUTED, fontSize: 12, fontStyle: "normal", marginTop: 8, display: "block" }}>
              Luke 9:23
            </cite>
          </blockquote>
        </div>
      </div>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Bonhoeffer Banner */}
        <div
          style={{
            background: CARD,
            border: `1px solid ${GOLD}30`,
            borderLeft: `4px solid ${GOLD}`,
            borderRadius: 12,
            padding: "20px 24px",
            margin: "40px 0",
            display: "flex",
            gap: 20,
            alignItems: "flex-start",
          }}
        >
          <div style={{ flexShrink: 0 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: `${GOLD}22`,
                border: `2px solid ${GOLD}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              &#10013;
            </div>
          </div>
          <div>
            <div style={{ color: GOLD, fontWeight: 800, fontSize: 14, marginBottom: 6 }}>
              Dietrich Bonhoeffer, The Cost of Discipleship (1937)
            </div>
            <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>
              &ldquo;Cheap grace is the deadly enemy of our church. We are fighting today for costly grace. Cheap grace means grace as a doctrine, a principle, a system. It means forgiveness of sins proclaimed as a general truth, the love of God taught as the Christian &lsquo;conception&rsquo; of God. Cheap grace is grace without the cross, grace without Jesus Christ, living and incarnate.&rdquo;
            </p>
          </div>
        </div>

        {/* Tab Bar */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 28,
            background: CARD,
            borderRadius: 10,
            padding: 4,
            width: "fit-content",
            flexWrap: "wrap",
          }}
        >
          {TABS.map((t) => (
            <button
              type="button"
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.key ? PURPLE : "transparent",
                color: activeTab === t.key ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab: Biblical Theology */}
        {activeTab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {THEOLOGY_SECTIONS.map((sec) => (
              <div
                key={sec.id}
                style={{
                  background: CARD,
                  border: `1px solid ${activeSection === sec.id ? sec.color + "55" : BORDER}`,
                  borderRadius: 14,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleSection(sec.id)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    cursor: "pointer",
                    textAlign: "left",
                    background: "transparent",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div>
                    <div style={{ color: sec.color, fontWeight: 800, fontSize: 16, marginBottom: 3 }}>
                      {sec.title}
                    </div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{sec.ref}</div>
                  </div>
                  <span
                    style={{
                      color: sec.color,
                      fontSize: 26,
                      fontWeight: 300,
                      flexShrink: 0,
                      lineHeight: 1,
                    }}
                  >
                    {activeSection === sec.id ? "−" : "+"}
                  </span>
                </button>
                {activeSection === sec.id && (
                  <div style={{ padding: "0 24px 28px", borderTop: `1px solid ${BORDER}` }}>
                    {sec.body.map((para, i) => (
                      <p
                        key={i}
                        style={{
                          color: TEXT,
                          fontSize: 14,
                          lineHeight: 1.85,
                          margin: i === 0 ? "20px 0 14px" : "0 0 14px",
                        }}
                        dangerouslySetInnerHTML={{ __html: para }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab: Practices */}
        {activeTab === "practices" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 16,
            }}
          >
            {PRACTICES.map((p) => (
              <div
                key={p.title}
                style={{
                  background: CARD,
                  border: `1px solid ${p.color}30`,
                  borderRadius: 14,
                  padding: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      background: p.color,
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  />
                  <div style={{ color: p.color, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                </div>
                <p
                  style={{ color: TEXT, fontSize: 13, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: p.desc }}
                />
                <div
                  style={{
                    background: `${p.color}0e`,
                    border: `1px solid ${p.color}20`,
                    borderRadius: 10,
                    padding: "12px 14px",
                  }}
                >
                  <div
                    style={{
                      color: p.color,
                      fontSize: 10,
                      fontWeight: 800,
                      marginBottom: 8,
                      letterSpacing: "0.09em",
                      textTransform: "uppercase",
                    }}
                  >
                    How to Practice It
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                    {p.steps.map((step, i) => (
                      <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: p.color,
                            flexShrink: 0,
                            marginTop: 5,
                          }}
                        />
                        <span
                          style={{ color: MUTED, fontSize: 12, lineHeight: 1.65 }}
                          dangerouslySetInnerHTML={{ __html: step }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Historical Models */}
        {activeTab === "models" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 16,
            }}
          >
            {MODELS.map((m) => (
              <div
                key={m.name}
                style={{
                  background: CARD,
                  border: `1px solid ${m.color}30`,
                  borderRadius: 14,
                  padding: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div>
                  <div
                    style={{ color: m.color, fontWeight: 900, fontSize: 16, marginBottom: 3 }}
                    dangerouslySetInnerHTML={{ __html: m.name }}
                  />
                  <div
                    style={{ color: MUTED, fontSize: 11 }}
                    dangerouslySetInnerHTML={{ __html: m.era }}
                  />
                </div>
                <p
                  style={{ color: TEXT, fontSize: 13, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: m.desc }}
                />
                <div
                  style={{
                    background: `${m.color}0e`,
                    border: `1px solid ${m.color}20`,
                    borderRadius: 8,
                    padding: "10px 14px",
                  }}
                >
                  <div
                    style={{
                      color: m.color,
                      fontSize: 10,
                      fontWeight: 800,
                      marginBottom: 5,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Key Lesson
                  </div>
                  <p
                    style={{ color: TEXT, fontSize: 12, lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: m.lesson }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Videos */}
        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
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
                  <h3
                    style={{ color: PURPLE, fontWeight: 700, fontSize: 16, marginBottom: 4 }}
                    dangerouslySetInnerHTML={{ __html: v.title }}
                  />
                  <p style={{ color: GREEN, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
                    {v.channel}
                  </p>
                  <p
                    style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: v.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Scripture Gallery */}
        <div style={{ marginTop: 56, marginBottom: 56 }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 24 }}>Scriptures for the Disciple</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 14,
            }}
          >
            {[
              {
                ref: "Luke 9:23",
                text: "&ldquo;If anyone would come after me, let him deny himself and take up his cross daily and follow me.&rdquo;",
                color: PURPLE,
              },
              {
                ref: "Matthew 28:19-20",
                text: "&ldquo;Go therefore and make disciples of all nations... teaching them to observe all that I have commanded you.&rdquo;",
                color: GREEN,
              },
              {
                ref: "Romans 12:2",
                text: "&ldquo;Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God.&rdquo;",
                color: GOLD,
              },
              {
                ref: "2 Timothy 2:2",
                text: "&ldquo;What you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also.&rdquo;",
                color: TEAL,
              },
              {
                ref: "Philippians 1:6",
                text: "&ldquo;He who began a good work in you will bring it to completion at the day of Jesus Christ.&rdquo;",
                color: BLUE,
              },
              {
                ref: "2 Corinthians 3:18",
                text: "&ldquo;We all, with unveiled face, beholding the glory of the Lord, are being transformed into the same image from one degree of glory to another.&rdquo;",
                color: "#EF4444",
              },
            ].map((s) => (
              <div
                key={s.ref}
                style={{
                  background: CARD,
                  border: `1px solid ${s.color}30`,
                  borderLeft: `4px solid ${s.color}`,
                  borderRadius: 10,
                  padding: "16px 18px",
                }}
              >
                <div
                  style={{
                    color: s.color,
                    fontWeight: 700,
                    fontSize: 12,
                    marginBottom: 8,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.ref}
                </div>
                <p
                  style={{ color: TEXT, fontSize: 13, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: s.text }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Closing Encouragement */}
        <div
          style={{
            background: `linear-gradient(135deg, ${PURPLE}18 0%, ${GREEN}10 100%)`,
            border: `1px solid ${PURPLE}33`,
            borderRadius: 20,
            padding: "40px 36px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 14, color: TEXT }}>
            He Who Began a Good Work Will Complete It
          </h2>
          <p
            style={{
              color: MUTED,
              fontSize: 15,
              lineHeight: 1.85,
              maxWidth: 580,
              margin: "0 auto 28px",
            }}
          >
            Discipleship is not a self-improvement project &mdash; it is participation in something God began before
            you understood what was happening. The promise of Philippians 1:6 is not contingent on your consistency:
            the one who started this work is faithful to complete it. Your job is not to generate transformation
            by willpower but to remain available to the one who transforms. Pick up the cross again today.
            He is already there.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                background: PURPLE,
                color: "#fff",
                fontWeight: 800,
                fontSize: 14,
                padding: "12px 24px",
                borderRadius: 10,
              }}
            >
              &ldquo;Follow me.&rdquo; &mdash; Matthew 4:19
            </div>
            <div
              style={{
                background: "transparent",
                color: MUTED,
                fontWeight: 600,
                fontSize: 14,
                padding: "12px 24px",
                borderRadius: 10,
                border: `1px solid ${BORDER}`,
              }}
            >
              Daily. Not perfectly. But faithfully.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
