"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Psalm2Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "CE8QbkUCNK4", title: "Psalm 2 Explained: The Messianic Coronation Psalm" },
    { videoId: "Q2oNOlXzBhY", title: "Why Do the Nations Rage? Psalm 2 and the Reign of Christ" },
    { videoId: "8phkAg8PMHE", title: "You Are My Son: The Royal Decree of Psalm 2:7" },
    { videoId: "fNk_zzaMoSs", title: "Kiss the Son: Taking Refuge in the Anointed King" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const themeItems = [
    {
      id: "th-rebellion",
      label: "The Futile Rebellion of the Nations",
      color: ROSE,
      body:
        "Psalm 2 opens with a question that echoes across history: &ldquo;Why do the nations rage and the peoples plot in vain?&rdquo; The kings of the earth set themselves, and the rulers take counsel together, against the LORD and against his Anointed. Their aim is to throw off divine restraint &mdash; &lsquo;Let us burst their bonds apart and cast away their cords from us.&rsquo; The psalm names this as the deepest human delusion: the creature imagining it can overthrow the Creator. " +
        "Crucially, the word translated &ldquo;plot in vain&rdquo; signals that the rebellion is not merely wicked but futile &mdash; an empty muttering. The conspiracy is loud, organized, and global, yet it is destined for nothing. The New Testament reads this rebellion as fulfilled in the conspiracy against Jesus: in Acts 4:25&ndash;26 the apostles pray these very words, identifying Herod, Pilate, the Gentiles, and the peoples of Israel as the &lsquo;kings&rsquo; and &lsquo;rulers&rsquo; who gathered against &ldquo;your holy servant Jesus, whom you anointed.&rdquo; The cross looked like the triumph of rebellion; it was in fact the throne of the King.",
    },
    {
      id: "th-decree",
      label: "The Divine Decree: You Are My Son",
      color: GOLD,
      body:
        "At the heart of the psalm stands the LORD&rsquo;s own word: &ldquo;You are my Son; today I have begotten you.&rdquo; In its original setting this is enthronement language &mdash; the coronation of the Davidic king as God&rsquo;s adopted son (cf. 2 Samuel 7:14). But the New Testament hears in it the eternal Sonship and royal installation of Jesus the Messiah. " +
        "The phrase &ldquo;today I have begotten you&rdquo; is applied to Christ at three decisive moments. It is quoted in Acts 13:33 of the resurrection &mdash; God raising Jesus and seating him as enthroned King. It is quoted in Hebrews 1:5 to prove the Son&rsquo;s supremacy over the angels, and again in Hebrews 5:5 to ground his appointment as high priest. The voice at Jesus&rsquo; baptism (&ldquo;You are my beloved Son&rdquo;) and at the transfiguration echoes this royal declaration. &lsquo;Begotten&rsquo; here is best understood as enthronement and resurrection language &mdash; the public installation of the eternal Son into his mediatorial reign &mdash; rather than a statement about his coming into existence.",
    },
    {
      id: "th-inheritance",
      label: "The Son&rsquo;s Inheritance of the Nations",
      color: TEAL,
      body:
        "The King is invited to ask: &ldquo;Ask of me, and I will make the nations your heritage, and the ends of the earth your possession.&rdquo; The very nations that raged are handed over as the Son&rsquo;s inheritance. The rebellion does not shrink the kingdom; it becomes the territory of the kingdom. " +
        "This universal scope anticipates the Great Commission, where the risen Christ declares that all authority in heaven and on earth has been given to him and sends his disciples to disciple &lsquo;all nations&rsquo; (Matthew 28:18&ndash;20). The &ldquo;rod of iron&rdquo; with which the Son shall break the nations (Psalm 2:9) reappears in Revelation 2:27, 12:5, and 19:15, where the conquering Lamb rules the nations with a rod of iron. What is judgment for the unrepentant is, for those who take refuge, the shepherd&rsquo;s staff of a righteous King.",
    },
    {
      id: "th-refuge",
      label: "Kiss the Son: The Call to Submit and Take Refuge",
      color: PURPLE,
      body:
        "The psalm ends not with destruction but with an invitation. &ldquo;Now therefore, O kings, be wise; be warned, O rulers of the earth. Serve the LORD with fear, and rejoice with trembling. Kiss the Son, lest he be angry, and you perish in the way.&rdquo; To &lsquo;kiss the Son&rsquo; is to render homage &mdash; the ancient gesture of a subject honoring a sovereign. " +
        "The final line transforms the whole psalm from threat into gospel: &ldquo;Blessed are all who take refuge in him.&rdquo; The same King whose wrath the rebels should fear is the refuge in whom sinners are made safe. The warning and the beatitude are one offer: submit to the King and find shelter, or resist him and perish. Psalm 2 thus frames the entire Psalter (alongside Psalm 1) as a choice between two ways &mdash; and that choice is, finally, a choice about the Son.",
    },
  ];

  const verseItems = [
    {
      id: "v1",
      label: "Psalm 2:1&ndash;3 &mdash; The Nations Rage",
      color: ROSE,
      body:
        "&ldquo;Why do the nations rage and the peoples plot in vain? The kings of the earth set themselves, and the rulers take counsel together, against the LORD and against his Anointed, saying, &lsquo;Let us burst their bonds apart and cast away their cords from us.&rsquo;&rdquo; " +
        "Scene one opens on the earthly stage. The camera sweeps across a tumult of nations, peoples, kings, and rulers &mdash; an impressive coalition gathered for one purpose: rebellion. Their target is twofold yet single, &ldquo;the LORD&rdquo; and &ldquo;his Anointed,&rdquo; for to war against the Messiah is to war against God. The rebels speak in the language of liberation &mdash; bonds and cords are to be torn off &mdash; but their freedom is bondage, and their counsel is &lsquo;in vain.&rsquo; Acts 4:25&ndash;26 places this scene at the foot of the cross.",
    },
    {
      id: "v2",
      label: "Psalm 2:4&ndash;6 &mdash; The LORD&rsquo;s Response",
      color: GOLD,
      body:
        "&ldquo;He who sits in the heavens laughs; the Lord holds them in derision. Then he will speak to them in his wrath, and terrify them in his fury, saying, &lsquo;As for me, I have set my King on Zion, my holy hill.&rsquo;&rdquo; " +
        "Scene two lifts our eyes from earth to heaven. While the kings strain and conspire, the enthroned LORD &lsquo;sits&rsquo; &mdash; the posture of unshaken sovereignty &mdash; and laughs. This is not amusement at suffering but the holy derision of omnipotence toward a doomed revolt. His answer is not a counter-army but a single fact already accomplished: &ldquo;I have set my King.&rdquo; The coronation is past tense; the rebellion was over before it began. Zion, the holy hill, is the seat of the King God has installed.",
    },
    {
      id: "v3",
      label: "Psalm 2:7&ndash;9 &mdash; The Decree",
      color: TEAL,
      body:
        "&ldquo;I will tell of the decree: The LORD said to me, &lsquo;You are my Son; today I have begotten you. Ask of me, and I will make the nations your heritage, and the ends of the earth your possession. You shall break them with a rod of iron and dash them in pieces like a potter&rsquo;s vessel.&rsquo;&rdquo; " +
        "Scene three gives the King the microphone. The Anointed One himself recites the decree of his enthronement. The sonship (&ldquo;You are my Son&rdquo;) grounds the inheritance (&ldquo;the nations your heritage&rdquo;) and the authority (&ldquo;a rod of iron&rdquo;). The New Testament gathers all three: the begetting in Acts 13:33 and Hebrews 1:5 and 5:5; the inheritance in the Great Commission; the rod of iron in Revelation 2:27, 12:5, and 19:15. The fragile pottery of human pride cannot withstand the King.",
    },
    {
      id: "v4",
      label: "Psalm 2:10&ndash;12 &mdash; The Warning and the Blessing",
      color: PURPLE,
      body:
        "&ldquo;Now therefore, O kings, be wise; be warned, O rulers of the earth. Serve the LORD with fear, and rejoice with trembling. Kiss the Son, lest he be angry, and you perish in the way, for his wrath is quickly kindled. Blessed are all who take refuge in him.&rdquo; " +
        "Scene four addresses the rebels directly &mdash; not with annihilation but with counsel. &lsquo;Be wise&rsquo; recalls Psalm 1&rsquo;s contrast of two ways. &lsquo;Serve the LORD with fear, and rejoice with trembling&rsquo; holds awe and joy together, the proper posture before a holy King. &lsquo;Kiss the Son&rsquo; is the gesture of submission and allegiance. The psalm that began with raging nations ends with an open door: the wrath that the proud should dread becomes, for the humble, the refuge in which they are everlastingly blessed.",
    },
  ];

  const appItems = [
    {
      id: "ap-allegiance",
      label: "Re-examine Your Allegiance",
      color: ROSE,
      body:
        "Psalm 2 confronts every reader with a question of loyalty. The &lsquo;bonds&rsquo; and &lsquo;cords&rsquo; the rebels long to throw off are the rightful claims of God on his creatures. We feel the pull of that rebellion whenever we treat God&rsquo;s commands as restrictions to escape rather than the wisdom of a good King. Ask honestly where you are still &lsquo;plotting in vain&rsquo; &mdash; quietly resisting Christ&rsquo;s authority in some corner of your life &mdash; and bring it under his reign. To &lsquo;kiss the Son&rsquo; is not a one-time act but a daily renewal of allegiance.",
    },
    {
      id: "ap-comfort",
      label: "Find Comfort in the Reigning King",
      color: GOLD,
      body:
        "When the nations rage and the headlines roar, Psalm 2 lifts our eyes to the One who &lsquo;sits in the heavens.&rsquo; The Christian does not face history as a chaos of competing powers but as the unfolding of a decree already settled: &ldquo;I have set my King.&rdquo; This is profound comfort for the anxious and the persecuted. The early church prayed Psalm 2 in the face of opposition (Acts 4) not to summon vengeance but to be emboldened to keep speaking the word with confidence, knowing the outcome was secure.",
    },
    {
      id: "ap-mission",
      label: "Pray and Labor for the Nations",
      color: TEAL,
      body:
        "The Son is told to &lsquo;ask&rsquo; for the nations as his inheritance, and he does. This psalm fuels missions: the ends of the earth belong to Christ by divine decree, and the church&rsquo;s task is to summon the nations to their rightful King. Let Psalm 2 shape your prayers for the world &mdash; not as wishful thinking but as petitions aligned with a promise. Every people group reached is a portion of the inheritance the Father gave the Son.",
    },
    {
      id: "ap-worship",
      label: "Worship with Awe and Joy Together",
      color: PURPLE,
      body:
        "&lsquo;Serve the LORD with fear, and rejoice with trembling&rsquo; teaches a balanced piety. Reverence without joy becomes cold dread; joy without reverence becomes flippant presumption. The blessed are those who take refuge in the Son &mdash; who come close enough to find shelter while remaining awed enough to bow. Let your worship hold both: the trembling of a subject and the gladness of one who has found, in the very King he feared, his everlasting refuge.",
    },
  ];

  const reflectionQuestions = [
    "Where in your own life do you sense the impulse to &lsquo;burst the bonds&rsquo; of God&rsquo;s authority &mdash; to treat his commands as cords to be cast off rather than the wisdom of a good King?",
    "How does the image of the LORD &lsquo;laughing&rsquo; at the rebellion of the nations reshape the way you read troubling world events and news headlines?",
    "What does it mean for you personally that &lsquo;today I have begotten you&rsquo; is applied to Christ&rsquo;s resurrection and enthronement (Acts 13:33)?",
    "The early church prayed Psalm 2 to gain boldness, not vengeance (Acts 4:25&ndash;31). How might this psalm embolden you to speak and live faithfully under pressure?",
    "What would it look like, this week, to &lsquo;kiss the Son&rsquo; &mdash; to render concrete homage and submission to the reigning Christ?",
    "How do &lsquo;serve with fear&rsquo; and &lsquo;rejoice with trembling&rsquo; hold together in your own experience of worship, and which side do you most need to recover?",
  ];

  const sectionTitle: React.CSSProperties = {
    fontSize: "1.5rem", fontWeight: 700, margin: "0 0 1rem", color: TEXT,
  };
  const paragraph: React.CSSProperties = {
    color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", margin: "0 0 1rem",
  };

  const accordion = (
    items: { id: string; label: string; color: string; body: string }[]
  ) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div
            key={item.id}
            style={{
              background: CARD,
              border: `1px solid ${isOpen ? item.color : BORDER}`,
              borderRadius: 14,
              overflow: "hidden",
              transition: "border-color 0.2s ease",
            }}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "1.1rem 1.35rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                color: TEXT,
                fontSize: "1.08rem",
                fontWeight: 600,
                fontFamily: "inherit",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <span
                  aria-hidden="true"
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: item.color,
                    flexShrink: 0,
                    boxShadow: `0 0 12px ${item.color}`,
                  }}
                />
                <span dangerouslySetInnerHTML={{ __html: item.label }} />
              </span>
              <span
                aria-hidden="true"
                style={{
                  color: item.color,
                  fontSize: "1.4rem",
                  lineHeight: 1,
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  flexShrink: 0,
                }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div style={{ padding: "0 1.35rem 1.4rem" }}>
                <div
                  style={{
                    height: 1,
                    background: BORDER,
                    margin: "0 0 1.1rem",
                  }}
                />
                <p
                  style={{ ...paragraph, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Hero */}
      <section
        style={{
          maxWidth: 920,
          margin: "0 auto",
          padding: "2.75rem 1.5rem 1.5rem",
        }}
      >
        <p
          style={{
            color: ROSE,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontSize: "0.8rem",
            margin: "0 0 0.85rem",
          }}
        >
          A Study in the Psalms
        </p>
        <h1
          style={{
            fontSize: "2.75rem",
            lineHeight: 1.1,
            fontWeight: 800,
            margin: "0 0 1rem",
            color: TEXT,
          }}
        >
          Psalm 2: The Anointed King and the Raging Nations
        </h1>
        <p style={{ ...paragraph, fontSize: "1.12rem" }}>
          One of the most quoted psalms in the New Testament, Psalm 2 is the great
          royal-messianic psalm &mdash; a coronation hymn that moves in four scenes
          from the futile rebellion of the nations to the enthronement of God&rsquo;s
          Son and the blessing of all who take refuge in him.
        </p>
        <blockquote
          style={{
            margin: "1.75rem 0 0",
            padding: "1.4rem 1.6rem",
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${ROSE}`,
            borderRadius: 12,
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              fontStyle: "italic",
              lineHeight: 1.6,
              color: TEXT,
              margin: "0 0 0.6rem",
            }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;I will tell of the decree: The LORD said to me, &lsquo;You are my Son; today I have begotten you.&rsquo;&rdquo;",
            }}
          />
          <cite style={{ color: ROSE, fontWeight: 700, fontStyle: "normal" }}>
            Psalm 2:7
          </cite>
        </blockquote>
      </section>

      {/* Tab bar */}
      <nav
        style={{
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 5,
          background: "rgba(7,7,15,0.92)",
          backdropFilter: "blur(8px)",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            display: "flex",
            gap: "0.5rem",
            padding: "0.75rem 1.5rem",
            overflowX: "auto",
          }}
        >
          {TABS.map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  flexShrink: 0,
                  padding: "0.55rem 1.1rem",
                  borderRadius: 999,
                  border: `1px solid ${active ? ROSE : BORDER}`,
                  background: active ? ROSE : "transparent",
                  color: active ? "#fff" : MUTED,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  whiteSpace: "nowrap",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </div>
      </nav>

      <main style={{ maxWidth: 920, margin: "0 auto", padding: "2.25rem 1.5rem 4rem" }}>
        {/* Overview */}
        {tab === "overview" && (
          <section>
            <h2 style={sectionTitle}>Summary</h2>
            <p
              style={paragraph}
              dangerouslySetInnerHTML={{
                __html:
                  "Psalm 2 is a coronation psalm &mdash; a poem composed for the enthronement of the Davidic king, which the New Testament reads as supremely fulfilled in Jesus the Messiah. Together with Psalm 1, it forms the gateway to the entire Psalter: Psalm 1 sets before us the two ways of the righteous and the wicked, and Psalm 2 reveals that the dividing line between those ways is finally a person &mdash; the LORD&rsquo;s Anointed. To take refuge in the Son is to walk the way of blessing.",
              }}
            />
            <p
              style={paragraph}
              dangerouslySetInnerHTML={{
                __html:
                  "The psalm is electric with tension and yet serenely confident. The nations rage; God laughs. The kings conspire; the King is already installed. The rebels plot in vain; the decree stands. Few passages so vividly portray the gap between the noise of human pride and the calm sovereignty of heaven.",
              }}
            />

            <h2 style={{ ...sectionTitle, marginTop: "2rem" }}>Structure: Four Scenes</h2>
            <p
              style={paragraph}
              dangerouslySetInnerHTML={{
                __html:
                  "Psalm 2 unfolds in four movements, each with a different speaker and vantage point &mdash; a small drama in four acts:",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: "0 0 1.5rem" }}>
              {[
                { n: "Scene 1", v: "2:1&ndash;3", t: "The nations rage", c: ROSE, d: "The peoples and their kings conspire to throw off the rule of the LORD and his Anointed." },
                { n: "Scene 2", v: "2:4&ndash;6", t: "God laughs and speaks", c: GOLD, d: "Enthroned in heaven, the LORD derides the revolt and declares his King already installed on Zion." },
                { n: "Scene 3", v: "2:7&ndash;9", t: "The King declares the decree", c: TEAL, d: "The Anointed recites the decree of his sonship, inheritance, and authority over the nations." },
                { n: "Scene 4", v: "2:10&ndash;12", t: "The warning to the kings", c: PURPLE, d: "The rebels are summoned to wisdom, to serve, to kiss the Son &mdash; and to find refuge and blessing in him." },
              ].map((s) => (
                <div
                  key={s.n}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "1.1rem 1.25rem",
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderLeft: `4px solid ${s.c}`,
                    borderRadius: 12,
                  }}
                >
                  <div style={{ minWidth: 78 }}>
                    <div style={{ color: s.c, fontWeight: 700, fontSize: "0.95rem" }}>{s.n}</div>
                    <div
                      style={{ color: MUTED, fontSize: "0.85rem" }}
                      dangerouslySetInnerHTML={{ __html: s.v }}
                    />
                  </div>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 600, marginBottom: "0.25rem" }}>{s.t}</div>
                    <div
                      style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: s.d }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{ ...sectionTitle, marginTop: "2rem" }}>Context</h2>
            <p
              style={paragraph}
              dangerouslySetInnerHTML={{
                __html:
                  "Psalm 2 belongs to a group of &lsquo;royal psalms&rsquo; tied to the Davidic covenant of 2 Samuel 7, where God promised David an everlasting throne and pledged to be a father to his son. No earthly king ever fulfilled the cosmic scope of Psalm 2 &mdash; ruling the ends of the earth &mdash; and so the psalm pressed Israel&rsquo;s hope forward toward a greater Anointed One. The New Testament writers are emphatic that this King is Jesus.",
              }}
            />
            <p
              style={paragraph}
              dangerouslySetInnerHTML={{
                __html:
                  "Indeed, Psalm 2 is among the most heavily cited psalms in the New Testament. The apostles apply it to Christ&rsquo;s passion (Acts 4:25&ndash;26), his resurrection and enthronement (Acts 13:33), his superiority to angels and his priesthood (Hebrews 1:5; 5:5), and his final reign over the nations (Revelation 2:27; 12:5; 19:15). To read Psalm 2 well is to read it as the church has always read it: as a portrait of the crucified, risen, and reigning Lord.",
              }}
            />
          </section>
        )}

        {/* Themes */}
        {tab === "themes" && (
          <section>
            <h2 style={sectionTitle}>Key Themes</h2>
            <p
              style={{ ...paragraph, marginBottom: "1.5rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Four great themes run through Psalm 2, each carried forward and deepened by the New Testament. Expand each to explore the theme with its cross-references.",
              }}
            />
            {accordion(themeItems)}
          </section>
        )}

        {/* Verse by verse */}
        {tab === "verse" && (
          <section>
            <h2 style={sectionTitle}>Verse by Verse</h2>
            <p
              style={{ ...paragraph, marginBottom: "1.5rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Walk through Psalm 2 scene by scene. Each section pairs the text with commentary, tracing the movement from rebellion to enthronement to refuge.",
              }}
            />
            {accordion(verseItems)}
          </section>
        )}

        {/* Application */}
        {tab === "application" && (
          <section>
            <h2 style={sectionTitle}>Application</h2>
            <p
              style={{ ...paragraph, marginBottom: "1.5rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Psalm 2 is not merely ancient coronation poetry; it presses a present claim on every reader. Here are four ways its truth reshapes the life of faith.",
              }}
            />
            {accordion(appItems)}

            <h2 style={{ ...sectionTitle, marginTop: "2.5rem" }}>Reflection Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {reflectionQuestions.map((q, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "1.05rem 1.2rem",
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      color: ROSE,
                      fontWeight: 800,
                      fontSize: "1.05rem",
                      minWidth: "1.5rem",
                    }}
                  >
                    {i + 1}.
                  </span>
                  <p
                    style={{ ...paragraph, margin: 0, color: TEXT }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                </div>
              ))}
            </div>

            <h2 style={{ ...sectionTitle, marginTop: "2.5rem" }}>Teaching Videos</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {videoItems.map((v) => (
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
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <p style={{ margin: 0, color: TEXT, fontWeight: 600, fontSize: "0.98rem" }}>
                      {v.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{ ...sectionTitle, marginTop: "2.5rem" }}>A Closing Prayer</h2>
            <div
              style={{
                padding: "1.6rem 1.7rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${ROSE}`,
                borderRadius: 12,
              }}
            >
              <p
                style={{ ...paragraph, margin: 0, fontStyle: "italic", color: TEXT }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Sovereign LORD, you who sit enthroned in the heavens and laugh at the raging of the nations: we bow before the King you have set on your holy hill. We confess the rebellion in our own hearts &mdash; the bonds we have tried to break, the cords we have tried to cast off &mdash; and we lay down our arms before your Son. We kiss the Son; we serve you with fear and rejoice with trembling. Make us bold like your early church to speak your word, and glad to labor for the nations that are his inheritance. And in the day of his anger, let us be found among the blessed &mdash; all who take refuge in him. In the name of Jesus, your Anointed One, the begotten Son, amen.",
                }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
