"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Psalm5Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "rNcERbkSTXU", title: "Psalm 5: A Morning Prayer for Guidance and Protection" },
    { videoId: "OjJ7GkWCHvA", title: "In the Morning You Hear My Voice: Praying Psalm 5" },
    { videoId: "pHBzJ2dVXgk", title: "The Holiness of God in Psalm 5" },
    { videoId: "3sO5FH2ybPY", title: "Covered with Favor as with a Shield: Refuge in Psalm 5" },
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
      id: "th-morning",
      label: "Morning Prayer and the Posture of Watching",
      color: GOLD,
      body:
        "Psalm 5 is one of the great morning prayers of Scripture: &ldquo;O LORD, in the morning you hear my voice; in the morning I prepare a sacrifice for you and watch.&rdquo; The repetition of &lsquo;in the morning&rsquo; signals deliberate, daily devotion &mdash; prayer offered at the threshold of the day, before the world&rsquo;s clamor crowds it out. " +
        "The closing word, &lsquo;watch,&rsquo; is the posture of expectant waiting. David does not merely speak and move on; he lays out his petition like a morning sacrifice and then stands on the watchtower, looking for God&rsquo;s answer. This is prayer as vigilance &mdash; the confidence that the God who hears will also act. Psalm 5 pairs beautifully with Psalm 3 (a morning psalm) and Psalm 4 (an evening psalm), framing the day in prayer from dawn to dusk.",
    },
    {
      id: "th-holiness",
      label: "The Holiness of God Who Hates Wickedness",
      color: ROSE,
      body:
        "At the center of Psalm 5 is a sustained meditation on God&rsquo;s holiness: &ldquo;For you are not a God who delights in wickedness; evil may not dwell with you. The boastful shall not stand before your eyes; you hate all evildoers. You destroy those who speak lies; the LORD abhors the bloodthirsty and deceitful man.&rdquo; " +
        "This is bracing theology. The same God who is a refuge for the humble is utterly opposed to evil &mdash; not indifferent, not tolerant, but holy. Evil &lsquo;may not dwell&rsquo; with him because his presence is moral light in which darkness cannot survive. Far from making God unapproachable, this holiness is precisely what makes his house a safe place: the wicked cannot enter to harm those who shelter there. The worshiper&rsquo;s confidence rests not on his own merit but on God&rsquo;s steadfast love.",
    },
    {
      id: "th-contrast",
      label: "Two Kinds of People Before God",
      color: PURPLE,
      body:
        "Psalm 5 draws a sharp contrast between two sorts of people. On one side stand the boastful, the bloodthirsty, the deceitful &mdash; those whose throat is &lsquo;an open grave&rsquo; and whose tongues flatter (5:9). On the other side stands the worshiper who, &lsquo;through the abundance of your steadfast love,&rsquo; enters God&rsquo;s house and bows down in his holy temple (5:7). " +
        "The difference is not that the worshiper is sinless &mdash; he enters only by God&rsquo;s mercy &mdash; but that he comes the right way, through grace and in reverence, rather than through self-assertion and deceit. Paul gathers Psalm 5:9 into his great indictment of universal sinfulness in Romans 3:13, reminding us that apart from grace we all belong to the company of the &lsquo;open grave.&rsquo; The line between the two ways runs not between good people and bad people but through the abundance of God&rsquo;s steadfast love.",
    },
    {
      id: "th-refuge",
      label: "The Joy and Shield of Those Who Take Refuge",
      color: TEAL,
      body:
        "The psalm rises to a buoyant conclusion: &ldquo;But let all who take refuge in you rejoice; let them ever sing for joy, and spread your protection over them, that those who love your name may exult in you. For you bless the righteous, O LORD; you cover him with favor as with a shield.&rdquo; " +
        "Refuge in God is not a grim endurance but a fountain of joy &mdash; &lsquo;ever sing for joy,&rsquo; &lsquo;exult in you.&rsquo; And it is profoundly secure: God&rsquo;s favor surrounds the righteous &lsquo;as with a shield,&rsquo; a large, body-covering shield (the Hebrew pictures the great shield that guards on every side). The same holiness that excludes the wicked becomes the protective wall around the worshiper. Joy and safety meet in the presence of the holy God.",
    },
  ];

  const verseItems = [
    {
      id: "v1",
      label: "Psalm 5:1&ndash;3 &mdash; The Morning Cry",
      color: GOLD,
      body:
        "&ldquo;Give ear to my words, O LORD; consider my groaning. Give attention to the sound of my cry, my King and my God, for to you do I pray. O LORD, in the morning you hear my voice; in the morning I prepare a sacrifice for you and watch.&rdquo; " +
        "David begins by piling up appeals for God&rsquo;s attention &mdash; &lsquo;give ear,&rsquo; &lsquo;consider,&rsquo; &lsquo;give attention&rsquo; &mdash; covering everything from articulate &lsquo;words&rsquo; to inarticulate &lsquo;groaning.&rsquo; He addresses God as &lsquo;my King and my God,&rsquo; rooting his prayer in covenant relationship. Then comes the heart of the section: morning prayer offered like a sacrifice, followed by the watch. He prays and then waits, eyes lifted, expecting an answer.",
    },
    {
      id: "v2",
      label: "Psalm 5:4&ndash;6 &mdash; God&rsquo;s Holy Character",
      color: ROSE,
      body:
        "&ldquo;For you are not a God who delights in wickedness; evil may not dwell with you. The boastful shall not stand before your eyes; you hate all evildoers. You destroy those who speak lies; the LORD abhors the bloodthirsty and deceitful man.&rdquo; " +
        "Here David grounds his confidence not in himself but in who God is. Because God takes no pleasure in evil and will not let it dwell with him, the worshiper&rsquo;s enemies &mdash; the proud, the violent, the deceitful &mdash; have no standing in his court. This is sobering and comforting at once: sobering, because we too are weighed by this holiness; comforting, because the holy God will not finally allow evil to triumph over those who trust him.",
    },
    {
      id: "v3",
      label: "Psalm 5:7&ndash;8 &mdash; Entering by Steadfast Love",
      color: TEAL,
      body:
        "&ldquo;But I, through the abundance of your steadfast love, will enter your house. I will bow down toward your holy temple in the fear of you. Lead me, O LORD, in your righteousness because of my enemies; make your way straight before me.&rdquo; " +
        "The pivotal &lsquo;But I&rsquo; sets the worshiper apart from the wicked &mdash; yet notice the ground of his access: not his worthiness but &lsquo;the abundance of your steadfast love.&rsquo; He enters in reverent fear and then prays the prayer at the psalm&rsquo;s devotional core: &lsquo;Lead me in your righteousness; make your way straight before me.&rsquo; Surrounded by enemies and tempted to crooked paths, he asks God to make the right road plain and walkable.",
    },
    {
      id: "v4",
      label: "Psalm 5:9&ndash;10 &mdash; The Indictment of the Wicked",
      color: PURPLE,
      body:
        "&ldquo;For there is no truth in their mouth; their inmost self is destruction; their throat is an open grave; they flatter with their tongue. Make them bear their guilt, O God; let them fall by their own counsels.&rdquo; " +
        "David exposes the wicked from the inside out: their words are unreliable, their inner being is ruin, and their throat is &lsquo;an open grave&rsquo; &mdash; a vivid image of speech that brings death and decay. Paul quotes this very line in Romans 3:13 as part of his catena (a chain of Old Testament quotations) proving that all people, Jew and Gentile, are under sin. The petition that the wicked &lsquo;fall by their own counsels&rsquo; appeals to God&rsquo;s justice rather than personal revenge.",
    },
    {
      id: "v5",
      label: "Psalm 5:11&ndash;12 &mdash; The Joy of Refuge",
      color: GREEN,
      body:
        "&ldquo;But let all who take refuge in you rejoice; let them ever sing for joy, and spread your protection over them, that those who love your name may exult in you. For you bless the righteous, O LORD; you cover him with favor as with a shield.&rdquo; " +
        "The psalm that began in groaning ends in singing. From the narrow path of the individual worshiper the vision widens to &lsquo;all who take refuge&rsquo; &mdash; the whole company of God&rsquo;s people &mdash; and the dominant note becomes joy. God&rsquo;s protection is spread over them like a tent, and his favor surrounds the righteous like a great shield. The holiness that menaces the wicked is the very thing that shelters the trusting. Morning prayer ends in everlasting song.",
    },
  ];

  const appItems = [
    {
      id: "ap-morning",
      label: "Begin the Day with God",
      color: GOLD,
      body:
        "Psalm 5 models the discipline of morning prayer &mdash; meeting God before the day&rsquo;s demands crowd him out. Consider making the first words of your day words addressed to God, however brief. &lsquo;In the morning I prepare a sacrifice for you and watch&rsquo; suggests not a hurried request but a deliberate offering followed by attentive waiting. Lay your concerns before God at dawn, then go into the day expecting that the One who heard you will act.",
    },
    {
      id: "ap-watch",
      label: "Learn the Posture of Watching",
      color: TEAL,
      body:
        "The little word &lsquo;watch&rsquo; transforms prayer from a transaction into a relationship of expectant trust. Many of us pray and then immediately forget we prayed, never looking for the answer. Psalm 5 invites us to keep our eyes open &mdash; to watch for God&rsquo;s movement, to notice his providence, to remain on the watchtower of faith. Try keeping a simple record of your morning petitions and revisiting them; you may be surprised how often the watch is rewarded.",
    },
    {
      id: "ap-holiness",
      label: "Take God&rsquo;s Holiness Seriously",
      color: ROSE,
      body:
        "Psalm 5&rsquo;s portrait of a God who &lsquo;hates all evildoers&rsquo; and in whom &lsquo;evil may not dwell&rsquo; is unfashionable but vital. It reminds us that grace is not God&rsquo;s indifference to sin but his costly remedy for it. We enter his house only &lsquo;through the abundance of your steadfast love.&rsquo; Let this humble any self-righteousness &mdash; Paul reminds us in Romans 3 that we all belong by nature to the &lsquo;open grave&rsquo; &mdash; and let it deepen your gratitude for the mercy that makes you welcome.",
    },
    {
      id: "ap-guidance",
      label: "Pray for a Straight Path",
      color: PURPLE,
      body:
        "&lsquo;Lead me, O LORD, in your righteousness; make your way straight before me.&rsquo; When you face pressure, opposition, or hard decisions, make this your prayer. Ask not merely for relief but for guidance &mdash; for God to make the right road clear and to lead you in his righteousness rather than your own cleverness. And then take refuge in him, knowing that his favor covers the righteous &lsquo;as with a shield&rsquo; on every side.",
    },
  ];

  const reflectionQuestions = [
    "What does it look like, practically, for you to &lsquo;prepare a sacrifice and watch&rsquo; in your own morning routine &mdash; and what tends to crowd God out of the start of your day?",
    "How do you respond to the bracing description of God&rsquo;s holiness in 5:4&ndash;6? Does it unsettle you, comfort you, or both &mdash; and why?",
    "Paul places Psalm 5:9 in his case for universal sinfulness (Romans 3:13). How does recognizing that you enter God&rsquo;s house only &lsquo;through the abundance of his steadfast love&rsquo; shape your worship?",
    "Where do you most need to pray &lsquo;make your way straight before me&rsquo; right now, and what crooked path are you tempted to take instead?",
    "The psalm moves from &lsquo;groaning&rsquo; (5:1) to &lsquo;singing for joy&rsquo; (5:11). Have you experienced that movement, and what helped you make it?",
    "What would it mean to live this week as one who is &lsquo;covered with favor as with a shield&rsquo; &mdash; how might that confidence change how you face opposition?",
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
            color: GOLD,
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
          Psalm 5: A Morning Prayer for Guidance and Protection
        </h1>
        <p style={{ ...paragraph, fontSize: "1.12rem" }}>
          Psalm 5 is a morning prayer offered like a sacrifice and followed by a
          watchful wait. It meditates on the holiness of a God in whom evil cannot
          dwell, contrasts the deceitful with the worshiper welcomed by steadfast
          love, and ends in the joy and shield of all who take refuge in him.
        </p>
        <blockquote
          style={{
            margin: "1.75rem 0 0",
            padding: "1.4rem 1.6rem",
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${GOLD}`,
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
                "&ldquo;O LORD, in the morning you hear my voice; in the morning I prepare a sacrifice for you and watch.&rdquo;",
            }}
          />
          <cite style={{ color: GOLD, fontWeight: 700, fontStyle: "normal" }}>
            Psalm 5:3
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
                  border: `1px solid ${active ? GOLD : BORDER}`,
                  background: active ? GOLD : "transparent",
                  color: active ? "#1a1205" : MUTED,
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
                  "Psalm 5 is a morning prayer of David &mdash; a cry for God to hear, a meditation on God&rsquo;s holiness, a plea for guidance along a straight path, and a celebration of the joy and protection of those who take refuge in the LORD. It belongs to the world of lament and petition, yet it never loses its footing in confidence: the same holiness that opposes the wicked is the security of the worshiper.",
              }}
            />
            <p
              style={paragraph}
              dangerouslySetInnerHTML={{
                __html:
                  "The psalm moves with emotional honesty from &lsquo;groaning&rsquo; (5:1) to &lsquo;singing for joy&rsquo; (5:11). Along the way it gives the church one of its most enduring images of devotion: prayer offered at daybreak like a morning sacrifice, followed by the watch &mdash; the patient, expectant waiting for God to answer.",
              }}
            />

            <h2 style={{ ...sectionTitle, marginTop: "2rem" }}>Structure</h2>
            <p
              style={paragraph}
              dangerouslySetInnerHTML={{
                __html:
                  "Psalm 5 unfolds in five clear movements, alternating between the worshiper&rsquo;s prayer, the character of God, and the contrast between the wicked and the righteous:",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: "0 0 1.5rem" }}>
              {[
                { v: "5:1&ndash;3", t: "The morning cry", c: GOLD, d: "David asks God to hear his words and groaning, offering morning prayer like a sacrifice and watching for an answer." },
                { v: "5:4&ndash;6", t: "God&rsquo;s holy character", c: ROSE, d: "The LORD takes no delight in wickedness; evil cannot dwell with him; he opposes the boastful, the deceitful, and the bloodthirsty." },
                { v: "5:7&ndash;8", t: "Entering by steadfast love", c: TEAL, d: "Through the abundance of God&rsquo;s steadfast love the worshiper enters his house, asking to be led in righteousness on a straight path." },
                { v: "5:9&ndash;10", t: "The indictment of the wicked", c: PURPLE, d: "Their throat is an open grave and their tongue flatters; David appeals to God&rsquo;s justice. Paul cites this in Romans 3:13." },
                { v: "5:11&ndash;12", t: "The joy of refuge", c: GREEN, d: "All who take refuge in God rejoice and sing; he spreads his protection over them and covers the righteous with favor as with a shield." },
              ].map((s) => (
                <div
                  key={s.t}
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
                    <div
                      style={{ color: s.c, fontWeight: 700, fontSize: "0.95rem" }}
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
                  "Psalm 5 sits among the early Davidic psalms and is traditionally read alongside its neighbors as part of a rhythm of prayer. Psalm 3 is a morning psalm (&lsquo;I lay down and slept; I woke again, for the LORD sustained me&rsquo;); Psalm 4 is an evening psalm (&lsquo;In peace I will both lie down and sleep&rsquo;); and Psalm 5 returns us to the morning, completing a small liturgy of dawn and dusk. The superscription associates it with instruments, marking it for use in corporate worship.",
              }}
            />
            <p
              style={paragraph}
              dangerouslySetInnerHTML={{
                __html:
                  "The psalm&rsquo;s reach extends into the New Testament. Paul quotes Psalm 5:9 &mdash; &lsquo;their throat is an open grave&rsquo; &mdash; in Romans 3:13, weaving it into his catena of Old Testament texts that together prove the universal sinfulness of humanity. In Paul&rsquo;s hands, the indictment David aimed at his enemies becomes a mirror in which every reader sees his own need for the grace that alone opens the door of God&rsquo;s house.",
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
                  "Four themes give Psalm 5 its enduring power: morning prayer, the holiness of God, the contrast of two kinds of people, and the joy of refuge. Expand each to explore it with its cross-references.",
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
                  "Walk through Psalm 5 section by section. Each pairs the biblical text with commentary, following the movement from morning cry to joyful refuge.",
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
                  "Psalm 5 is a school of prayer. Here are four ways its pattern of morning devotion, reverence, and refuge can shape the life of faith.",
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
                      color: GOLD,
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
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: 12,
              }}
            >
              <p
                style={{ ...paragraph, margin: 0, fontStyle: "italic", color: TEXT }}
                dangerouslySetInnerHTML={{
                  __html:
                    "O LORD, my King and my God, in the morning you hear my voice. Give ear to my words and consider my groaning. You are holy &mdash; evil cannot dwell with you &mdash; and yet through the abundance of your steadfast love you welcome me into your house. Lead me in your righteousness; make your way straight before me. Guard my tongue from the open grave of deceit, and let me take refuge in you with joy. Cover me with your favor as with a shield, and let me ever sing for joy in your name. I lay my prayer before you this day, and I watch. In the name of Jesus, amen.",
                }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
