"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Psalm9Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "CE8QbkUCNK4", title: "Psalm 9 Explained: Thanksgiving for God's Righteous Judgment" },
    { videoId: "Q2oNOlXzBhY", title: "A Stronghold for the Oppressed: The Refuge of Psalm 9" },
    { videoId: "8phkAg8PMHE", title: "The LORD Enthroned Forever: Justice and the Reversal of the Wicked" },
    { videoId: "fNk_zzaMoSs", title: "Psalms 9 and 10: The Single Acrostic of the Afflicted" },
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
      id: "th-thanks",
      label: "Wholehearted Thanksgiving and the Recounting of God's Deeds",
      color: GOLD,
      body:
        "Psalm 9 begins not with petition but with praise: &ldquo;I will give thanks to the LORD with my whole heart; I will recount all of your wonderful deeds.&rdquo; The thanksgiving is total &mdash; &lsquo;with my whole heart&rsquo; &mdash; and it is specific, anchored in the memory of what God has actually done. Biblical praise is rarely abstract; it tells a story. David vows to &lsquo;recount&rsquo; and to &lsquo;sing praise to your name, O Most High,&rsquo; making worship an act of remembering. " +
        "This recounting is the antidote to despair. By rehearsing God&rsquo;s past faithfulness, the worshiper builds a case for present trust. The pattern runs through Scripture: Israel is repeatedly called to &lsquo;remember&rsquo; the LORD&rsquo;s mighty acts (Deuteronomy 8:2), and the Psalter is, in large part, a school of holy memory. Hebrews 13:15 picks up this thread, urging believers to &lsquo;continually offer up a sacrifice of praise to God, that is, the fruit of lips that acknowledge his name.&rsquo;",
    },
    {
      id: "th-judge",
      label: "The LORD Enthroned Forever, Judge of the World in Righteousness",
      color: PURPLE,
      body:
        "At the structural center of the psalm stands a majestic affirmation: &ldquo;The LORD sits enthroned forever; he has established his throne for justice, and he judges the world with righteousness; he judges the peoples with uprightness.&rdquo; While earthly kings and nations rise and perish, God&rsquo;s throne is permanent, and the purpose of that throne is justice. His judgment is not arbitrary power but righteousness measured out with perfect uprightness. " +
        "This vision of the LORD as the world&rsquo;s righteous judge undergirds the whole Bible&rsquo;s confidence that wrongs will be set right. Abraham appealed to it (&ldquo;Shall not the Judge of all the earth do what is just?&rdquo; Genesis 18:25), and the New Testament carries it to its climax in the One to whom the Father &lsquo;has given all judgment&rsquo; (John 5:22), the Christ who &lsquo;will judge the world in righteousness&rsquo; (Acts 17:31). Psalm 9 lets the oppressed rest in a courtroom that never closes and a Judge who never errs.",
    },
    {
      id: "th-refuge",
      label: "A Stronghold for the Oppressed in Times of Trouble",
      color: TEAL,
      body:
        "The heart of Psalm 9 is its key verse: &ldquo;The LORD is a stronghold for the oppressed, a stronghold in times of trouble. And those who know your name put their trust in you, for you, O LORD, have not forsaken those who seek you.&rdquo; The Hebrew word for &lsquo;stronghold&rsquo; pictures a high, inaccessible refuge &mdash; a fortress set above the reach of the enemy. God himself is that high place for the crushed and the cornered. " +
        "Notice the link between knowing and trusting: &lsquo;those who know your name put their trust in you.&rsquo; To &lsquo;know the name&rsquo; is to know God&rsquo;s revealed character &mdash; his faithfulness, his justice, his covenant love. Such knowledge is not cold information but the ground of confidence. The promise that he has &lsquo;not forsaken those who seek you&rsquo; anticipates the seeking-and-finding pattern of Jeremiah 29:13 and the assurance of Hebrews 11:6 that God &lsquo;rewards those who seek him.&rsquo;",
    },
    {
      id: "th-reversal",
      label: "The Reversal of the Wicked and the Hope of the Needy",
      color: ROSE,
      body:
        "Psalm 9 is full of dramatic reversals. The wicked dig a pit and fall into it; they spread a net and are caught in it: &ldquo;The nations have sunk in the pit that they made; in the net that they hid, their own foot has been caught.&rdquo; God is &lsquo;known by the justice he has done&rsquo; precisely in this poetic justice &mdash; the schemer ensnared by his own scheme (cf. Proverbs 26:27; Esther 7:10). The names of the wicked are &lsquo;blotted out forever,&rsquo; their cities reduced to ruins whose very memory perishes. " +
        "Set against this is the steadfast hope of the lowly: &ldquo;For the needy shall not always be forgotten, and the hope of the poor shall not perish forever.&rdquo; This is the great counterweight to the apparent triumph of evil. The afflicted may be overlooked by men, but they are remembered by God. The Magnificat sings the same reversal &mdash; the mighty cast down and the humble exalted (Luke 1:52&ndash;53) &mdash; and the Beatitudes promise the kingdom to the poor in spirit (Matthew 5:3).",
    },
    {
      id: "th-acrostic",
      label: "The Acrostic Bond of Psalms 9 and 10",
      color: GREEN,
      body:
        "Psalm 9 cannot be fully understood in isolation, for it is half of a single poem. In the Hebrew, Psalms 9 and 10 together form one acrostic, the successive lines beginning with the letters of the Hebrew alphabet in order. The Greek Septuagint and the Latin Vulgate treat them as one psalm; the Hebrew tradition splits them in two. Several clues confirm the bond: Psalm 10 carries no superscription of its own, and the alphabetic sequence broken off in Psalm 9 resumes in Psalm 10. " +
        "This literary unity is theologically rich. Psalm 9 is the confident, praising half &mdash; thanksgiving for judgment already accomplished. Psalm 10 is the lamenting half &mdash; the anguished cry over the wicked who still prosper and the God who seems to &lsquo;stand far away.&rsquo; Read together, the pair refuses to let praise become naive or lament become despairing. The same God who has judged in the past (Psalm 9) is implored to arise and judge in the present distress (Psalm 10), and both halves rest on his unshakable kingship and his care for the oppressed.",
    },
  ];

  const verseItems = [
    {
      id: "v1",
      label: "Psalm 9:1&ndash;2 &mdash; Wholehearted Praise",
      color: GOLD,
      body:
        "&ldquo;I will give thanks to the LORD with my whole heart; I will recount all of your wonderful deeds. I will be glad and exult in you; I will sing praise to your name, O Most High.&rdquo; " +
        "The psalm opens with four resolves piled one upon another &mdash; give thanks, recount, be glad and exult, sing praise. Each is a deliberate act of the will (&lsquo;I will&rsquo;), and each is directed wholly to God (&lsquo;to you,&rsquo; &lsquo;your name&rsquo;). The phrase &lsquo;with my whole heart&rsquo; sets the tone: this is undivided, glad-hearted worship that begins by remembering &lsquo;all of your wonderful deeds.&rsquo; Praise here is not a feeling that happens to the worshiper but a vow he makes and keeps.",
    },
    {
      id: "v2",
      label: "Psalm 9:3&ndash;6 &mdash; The Defeat of the Enemies",
      color: ROSE,
      body:
        "&ldquo;When my enemies turn back, they stumble and perish before your presence. For you have maintained my just cause; you have sat on the throne, giving righteous judgment. You have rebuked the nations; you have made the wicked perish; you have blotted out their name forever and ever. The enemy came to an end in everlasting ruins; their cities you rooted out; the very memory of them has perished.&rdquo; " +
        "The ground of David&rsquo;s praise now appears: God has acted as the righteous Judge. The enemies stumble and perish &lsquo;before your presence&rsquo; &mdash; it is the LORD&rsquo;s appearing, not David&rsquo;s strength, that routs them. The verbs accumulate the completeness of the verdict: maintained, judged, rebuked, made perish, blotted out, rooted out. Even the &lsquo;memory&rsquo; of the wicked perishes, the opposite fate of the righteous, whose remembrance is blessed (Proverbs 10:7).",
    },
    {
      id: "v3",
      label: "Psalm 9:7&ndash;10 &mdash; The Enthroned Judge and Stronghold",
      color: PURPLE,
      body:
        "&ldquo;But the LORD sits enthroned forever; he has established his throne for justice, and he judges the world with righteousness; he judges the peoples with uprightness. The LORD is a stronghold for the oppressed, a stronghold in times of trouble. And those who know your name put their trust in you, for you, O LORD, have not forsaken those who seek you.&rdquo; " +
        "Here is the theological summit of the psalm. The little word &lsquo;but&rsquo; turns from the perishing of the wicked to the permanence of God: while their memory fails, &lsquo;the LORD sits enthroned forever.&rsquo; His eternal throne exists &lsquo;for justice,&rsquo; and from it he becomes a high fortress for the crushed. The progression is exquisite &mdash; from the cosmic Judge of all peoples to the personal refuge of the single oppressed soul. To &lsquo;know your name&rsquo; is to trust, and to trust is to discover that he has &lsquo;not forsaken those who seek you.&rsquo;",
    },
    {
      id: "v4",
      label: "Psalm 9:11&ndash;12 &mdash; Sing to the One Who Remembers",
      color: TEAL,
      body:
        "&ldquo;Sing praises to the LORD, who dwells in Zion! Tell among the peoples his deeds! For he who avenges blood is mindful of them; he does not forget the cry of the afflicted.&rdquo; " +
        "The vow of praise becomes a summons: let the congregation sing, and let the deeds of God be told &lsquo;among the peoples.&rsquo; The reason given is tender and weighty &mdash; the LORD &lsquo;who avenges blood&rsquo; (the Avenger of the innocent slain) &lsquo;is mindful&rsquo; of the afflicted and &lsquo;does not forget the cry&rsquo; of the lowly. The God enthroned in unapproachable majesty (v. 7) is the same God who stoops to remember the smallest cry. Justice and compassion meet in his single character.",
    },
    {
      id: "v5",
      label: "Psalm 9:13&ndash;18 &mdash; Grace, the Pit, and the Hope of the Needy",
      color: ROSE,
      body:
        "&ldquo;Be gracious to me, O LORD! See my affliction from those who hate me, O you who lift me up from the gates of death, that I may recount all your praises... The nations have sunk in the pit that they made; in the net that they hid, their own foot has been caught. The LORD has made himself known; he has executed judgment; the wicked are snared in the work of their own hands... For the needy shall not always be forgotten, and the hope of the poor shall not perish forever.&rdquo; " +
        "Praise momentarily yields to petition (&lsquo;Be gracious to me&rsquo;), for confidence in God&rsquo;s justice does not erase present pain. David asks to be lifted from &lsquo;the gates of death&rsquo; so that he may keep recounting God&rsquo;s praise. Then comes the great reversal: the nations are trapped in the very pit and net they prepared, and God &lsquo;has made himself known&rsquo; by this poetic justice. The section closes on the steadying promise that the needy and the poor have a future secured by God himself.",
    },
    {
      id: "v6",
      label: "Psalm 9:19&ndash;20 &mdash; Arise, O LORD",
      color: PURPLE,
      body:
        "&ldquo;Arise, O LORD! Let not man prevail; let the nations be judged before you! Put them in fear, O LORD! Let the nations know that they are but men!&rdquo; " +
        "The psalm ends with a cry that will become the opening note of its twin. &lsquo;Arise, O LORD&rsquo; petitions the Judge to act, lest mere &lsquo;man&rsquo; prevail against the purposes of God. The closing plea &mdash; &lsquo;let the nations know that they are but men&rsquo; &mdash; asks God to puncture the pride of those who imagine themselves more than mortal. It is the perfect hinge into Psalm 10, where the arrogance of the wicked and the apparent silence of God are confronted at length. Praise has prepared the way for lament.",
    },
  ];

  const appItems = [
    {
      id: "ap-remember",
      label: "Make Praise an Act of Remembering",
      color: GOLD,
      body:
        "David vows to &lsquo;recount all of your wonderful deeds.&rsquo; Worship that remembers is worship that endures. When trouble comes, the believer who has rehearsed God&rsquo;s past faithfulness has a storehouse of evidence to draw upon. Consider keeping a record &mdash; a journal, a list, a habit of testimony &mdash; of the specific ways God has helped you. Then, like David, return to that record with your whole heart and let memory feed gratitude. Praise grounded in real history is far stronger than praise built on passing feeling.",
    },
    {
      id: "ap-stronghold",
      label: "Run to the Stronghold in Times of Trouble",
      color: TEAL,
      body:
        "&lsquo;The LORD is a stronghold for the oppressed, a stronghold in times of trouble.&rsquo; This is not a promise that the oppressed will avoid trouble, but that they have a refuge within it. When you are cornered, do not first run to your own cleverness or to the approval of others; run to God himself. To &lsquo;take refuge&rsquo; is concrete: it means prayer instead of panic, dependence instead of self-reliance, and the deliberate rehearsal of who God is. The fortress is not a place but a Person.",
    },
    {
      id: "ap-know",
      label: "Know His Name, and So Learn to Trust",
      color: PURPLE,
      body:
        "&lsquo;Those who know your name put their trust in you.&rsquo; Trust is not willpower; it grows out of knowledge. The more deeply you know God&rsquo;s revealed character &mdash; his justice, his faithfulness, his steadfast love &mdash; the more naturally you will lean on him under pressure. This is why study and worship are not luxuries but lifelines. Devote yourself to knowing the name of the LORD through his Word, and you will find that trust follows knowledge the way a shadow follows light.",
    },
    {
      id: "ap-justice",
      label: "Entrust Justice to the Judge Who Never Forgets",
      color: ROSE,
      body:
        "&lsquo;The needy shall not always be forgotten, and the hope of the poor shall not perish forever.&rsquo; Psalm 9 frees the believer from both despair and vengeance. We need not despair, because the Judge of all the earth will set things right. And we need not avenge ourselves, because that judgment belongs to him (Romans 12:19). Let this psalm shape both your patience under injustice and your compassion toward the oppressed, whom God himself remembers. Work for justice as those who know it is finally secured by the throne of God.",
    },
  ];

  const reflectionQuestions = [
    "What &lsquo;wonderful deeds&rsquo; of God in your own life are you tempted to forget, and how might recounting them with your whole heart reshape your worship this week?",
    "What does it mean to you that God is described as a &lsquo;stronghold in times of trouble&rsquo; rather than a guarantee against trouble?",
    "How does &lsquo;knowing the name&rsquo; of God lead to trust in your experience &mdash; and where do you most need to deepen that knowledge?",
    "Where are you tempted to take justice into your own hands, and how does the truth that &lsquo;the LORD sits enthroned forever&rsquo; for justice change your response?",
    "How does the promise that &lsquo;the needy shall not always be forgotten&rsquo; comfort you, and how might it move you toward the oppressed around you?",
    "Psalm 9 ends with &lsquo;Arise, O LORD,&rsquo; the doorway into the lament of Psalm 10. How do praise and honest lament belong together in your own prayer life?",
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
            color: TEAL,
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
          Psalm 9: A Stronghold for the Oppressed
        </h1>
        <p style={{ ...paragraph, fontSize: "1.12rem" }}>
          Psalm 9 is a psalm of wholehearted thanksgiving for God&rsquo;s righteous
          judgment. It celebrates the LORD enthroned forever, who judges the world
          with uprightness, becomes a high refuge for the crushed, and remembers the
          afflicted whom the world forgets. Together with Psalm 10 it forms a single
          acrostic poem &mdash; the praising half before the lament.
        </p>
        <blockquote
          style={{
            margin: "1.75rem 0 0",
            padding: "1.4rem 1.6rem",
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${TEAL}`,
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
                "&ldquo;The LORD is a stronghold for the oppressed, a stronghold in times of trouble. And those who know your name put their trust in you, for you, O LORD, have not forsaken those who seek you.&rdquo;",
            }}
          />
          <cite style={{ color: TEAL, fontWeight: 700, fontStyle: "normal" }}>
            Psalm 9:9&ndash;10
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
                  border: `1px solid ${active ? TEAL : BORDER}`,
                  background: active ? TEAL : "transparent",
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
                  "Psalm 9 is an exuberant song of thanksgiving in which David praises God for vindicating his cause and judging the nations in righteousness. Its movement is from gratitude to confidence to petition: it recounts deeds already done, rests in the eternal throne of the Judge, and ends with the cry &lsquo;Arise, O LORD&rsquo; &mdash; a plea that opens directly into the lament of Psalm 10. The two psalms are, in the Hebrew, a single alphabetic acrostic, deliberately joined.",
              }}
            />
            <p
              style={paragraph}
              dangerouslySetInnerHTML={{
                __html:
                  "What gives Psalm 9 its enduring power is the way it holds majesty and tenderness together. The God who &lsquo;sits enthroned forever&rsquo; over all peoples is the very same God who &lsquo;does not forget the cry of the afflicted.&rsquo; The cosmic Judge is the personal stronghold of the single oppressed soul. Here greatness and gentleness are not in tension but are two facets of one righteous character.",
              }}
            />

            <h2 style={{ ...sectionTitle, marginTop: "2rem" }}>Structure: The Movement of the Psalm</h2>
            <p
              style={paragraph}
              dangerouslySetInnerHTML={{
                __html:
                  "Psalm 9 unfolds in six movements, oscillating between praise for past judgment and petition for present help &mdash; a rhythm that builds toward the closing cry:",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: "0 0 1.5rem" }}>
              {[
                { n: "Part 1", v: "9:1&ndash;2", t: "Wholehearted praise", c: GOLD, d: "David vows to give thanks, recount God's deeds, be glad, and sing praise to the Most High." },
                { n: "Part 2", v: "9:3&ndash;6", t: "The defeat of enemies", c: ROSE, d: "God has maintained his cause, rebuked the nations, and blotted out the name and memory of the wicked." },
                { n: "Part 3", v: "9:7&ndash;10", t: "The enthroned Judge and stronghold", c: PURPLE, d: "The LORD reigns forever for justice and is a high refuge for the oppressed who know his name." },
                { n: "Part 4", v: "9:11&ndash;12", t: "Sing to the One who remembers", c: TEAL, d: "Praise the LORD who dwells in Zion; he avenges blood and never forgets the cry of the afflicted." },
                { n: "Part 5", v: "9:13&ndash;18", t: "Grace, the pit, and hope", c: ROSE, d: "A plea for grace; the nations sink in their own pit; the needy shall not always be forgotten." },
                { n: "Part 6", v: "9:19&ndash;20", t: "Arise, O LORD", c: PURPLE, d: "A closing cry that mere men not prevail, and that the nations know they are but mortal." },
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
                  "Psalm 9 carries a superscription assigning it to David and setting it &lsquo;according to Muth-labben&rsquo; (likely a tune or musical direction). Its great structural feature is hidden in the Hebrew: Psalms 9 and 10 together form a single acrostic, with successive lines beginning with the letters of the Hebrew alphabet in sequence. The Greek Septuagint and Latin Vulgate count them as one psalm; the Hebrew tradition divides them. Psalm 10 has no superscription of its own, a further sign of the bond.",
              }}
            />
            <p
              style={paragraph}
              dangerouslySetInnerHTML={{
                __html:
                  "This pairing shapes how we read Psalm 9. It is the praising, confident half &mdash; thanksgiving for judgment already accomplished &mdash; while Psalm 10 is the lamenting half, wrestling with the wicked who still prosper and a God who seems to &lsquo;stand far away.&rsquo; The two together insist that worship and lament belong side by side, both anchored in the LORD&rsquo;s eternal kingship and his unfailing care for the oppressed and the afflicted.",
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
                  "Five great themes run through Psalm 9, each woven into the wider witness of Scripture. Expand each to explore the theme with its cross-references.",
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
                  "Walk through Psalm 9 section by section. Each part pairs the text with commentary, tracing the movement from thanksgiving to confidence to the closing cry, &lsquo;Arise, O LORD.&rsquo;",
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
                  "Psalm 9 is not merely a record of ancient deliverance; it presses a present claim on every reader. Here are four ways its truth reshapes the life of faith.",
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
                      color: TEAL,
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
                borderLeft: `4px solid ${TEAL}`,
                borderRadius: 12,
              }}
            >
              <p
                style={{ ...paragraph, margin: 0, fontStyle: "italic", color: TEXT }}
                dangerouslySetInnerHTML={{
                  __html:
                    "O LORD enthroned forever, we give you thanks with our whole heart and recount your wonderful deeds. You judge the world with righteousness, and you have become a stronghold for the oppressed, a high refuge in times of trouble. Teach us to know your name, that knowing you we may trust you. Lift us up from the gates of death, that we may keep recounting your praise. Remember the needy who are forgotten by the world, and let the hope of the poor never perish. And when evil seems to prevail, hear our cry, &lsquo;Arise, O LORD&rsquo; &mdash; and let the nations know they are but men. Through Jesus Christ, the righteous Judge and our refuge, amen.",
                }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
