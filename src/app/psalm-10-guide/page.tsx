"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Psalm10Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "rNcERbkSTXU", title: "Psalm 10 Explained: Why, O LORD, Do You Stand Far Away?" },
    { videoId: "OjJ7GkWCHvA", title: "The Portrait of the Wicked: Practical Atheism in Psalm 10" },
    { videoId: "pHBzJ2dVXgk", title: "Arise, O LORD: The Turn from Lament to Petition" },
    { videoId: "3sO5FH2ybPY", title: "The LORD Is King Forever: Justice for the Fatherless and Oppressed" },
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
      id: "th-absence",
      label: "The Anguished Question of God's Apparent Absence",
      color: ROSE,
      body:
        "Psalm 10 opens with a cry that gives voice to every believer who has ever felt abandoned: &ldquo;Why, O LORD, do you stand far away? Why do you hide yourself in times of trouble?&rdquo; This is the language of theodicy &mdash; the honest wrestling with God&rsquo;s seeming silence while evil flourishes. Strikingly, the very phrase &lsquo;in times of trouble&rsquo; echoes Psalm 9:9, where the LORD was declared a &lsquo;stronghold in times of trouble.&rsquo; The same trouble that drew confidence in Psalm 9 now provokes a question in Psalm 10. " +
        "The Bible never silences this question; it sanctifies it. The psalmist does not pretend that God&rsquo;s nearness is always felt. He addresses his complaint to God himself, which is the deepest act of faith &mdash; one does not argue with a God one has abandoned. This honest lament anticipates the cry of the cross, &lsquo;My God, my God, why have you forsaken me?&rsquo; (Psalm 22:1; Matthew 27:46), where God&rsquo;s apparent absence becomes the very place of redemption.",
    },
    {
      id: "th-wicked",
      label: "The Portrait of the Wicked and Practical Atheism",
      color: PURPLE,
      body:
        "Psalm 10 contains one of Scripture&rsquo;s most detailed portraits of the wicked. He &lsquo;boasts of the desires of his soul,&rsquo; he &lsquo;curses and renounces the LORD,&rsquo; and in the pride of his face he will not seek God. The root of his sin is named precisely: &ldquo;All his thoughts are, &lsquo;There is no God.&rsquo;&rdquo; This is not the theory of the atheist but the practice of the proud &mdash; a functional, lived-out denial that God sees or judges. " +
        "His self-talk reveals everything: &lsquo;God has forgotten, he has hidden his face, he will never see it.&rsquo; This &lsquo;practical atheism&rsquo; connects directly to Psalm 14:1, &lsquo;The fool says in his heart, There is no God.&rsquo; The wicked man&rsquo;s error is not philosophical but moral: he banishes God from his accounting so that he may sin without fear of reckoning. His mouth is &lsquo;filled with cursing and deceit and oppression&rsquo; (cf. Romans 3:14, which quotes this very line), and beneath his tongue lie mischief and iniquity.",
    },
    {
      id: "th-oppression",
      label: "The Oppression of the Poor and the Helpless",
      color: GOLD,
      body:
        "The wickedness of Psalm 10 is not abstract; it has victims. The psalmist describes the wicked man as a predator who &lsquo;lurks in ambush like a lion in his thicket,&rsquo; lying in wait &lsquo;to seize the poor&rsquo; and dragging them off in his net. The repeated objects of his cruelty are the &lsquo;poor,&rsquo; the &lsquo;helpless,&rsquo; the &lsquo;hapless,&rsquo; and the &lsquo;innocent&rsquo; &mdash; precisely those with no power to defend themselves. " +
        "This focus on the vulnerable runs through the whole law and the prophets. God identifies himself as the defender of the widow, the orphan, and the sojourner (Deuteronomy 10:18), and he warns that he hears their cry (Exodus 22:22&ndash;23). The crime of the wicked in Psalm 10 is therefore not merely against the poor but against the God who has made their cause his own. To prey on the helpless is to provoke their Defender.",
    },
    {
      id: "th-petition",
      label: "The Turn to Petition: Arise, O LORD",
      color: TEAL,
      body:
        "At its midpoint the psalm pivots from complaint to plea: &ldquo;Arise, O LORD; O God, lift up your hand; forget not the afflicted.&rdquo; The very God accused of standing &lsquo;far away&rsquo; is now urgently summoned to draw near and act. This turn is the heartbeat of biblical lament &mdash; it refuses to remain in despair and presses toward God in bold petition. &lsquo;Lift up your hand&rsquo; is a call for God to intervene with power. " +
        "The psalmist even throws the wicked man&rsquo;s own logic back at God as an argument: &lsquo;Why does the wicked renounce God and say in his heart, You will not call to account?&rsquo; In other words, the honor of God&rsquo;s name is at stake. The plea &lsquo;break the arm of the wicked&rsquo; asks God to shatter the strength on which evil relies. This same &lsquo;Arise, O LORD&rsquo; sounded at the close of Psalm 9, binding the two psalms into one sustained appeal.",
    },
    {
      id: "th-kingship",
      label: "The Closing Confidence: The LORD Is King Forever",
      color: GREEN,
      body:
        "The psalm that began in anguish ends in assurance: &ldquo;The LORD is king forever and ever; the nations perish from his land.&rdquo; The resolution comes not from changed circumstances &mdash; the wicked have not yet been visibly judged &mdash; but from a renewed grip on the eternal kingship of God. Faith here is settled not by sight but by the affirmation of who God is. " +
        "And the King is no remote sovereign; he stoops to the lowly: &ldquo;O LORD, you hear the desire of the afflicted; you will strengthen their heart; you will incline your ear to do justice to the fatherless and the oppressed, so that man who is of the earth may strike terror no more.&rdquo; The God who seemed to &lsquo;hide his face&rsquo; is the God who &lsquo;inclines his ear.&rsquo; This is the same care for the oppressed celebrated in Psalm 9, now reached on the far side of lament &mdash; a hard-won confidence that the King forever will do justice for the fatherless.",
    },
  ];

  const verseItems = [
    {
      id: "v1",
      label: "Psalm 10:1&ndash;2 &mdash; Why Do You Stand Far Away?",
      color: ROSE,
      body:
        "&ldquo;Why, O LORD, do you stand far away? Why do you hide yourself in times of trouble? In arrogance the wicked hotly pursue the poor; let them be caught in the schemes that they have devised.&rdquo; " +
        "The psalm opens with two raw questions hurled toward heaven. There is no superscription, no preamble &mdash; only the cry of one bewildered by God&rsquo;s seeming distance &lsquo;in times of trouble,&rsquo; the very phrase from Psalm 9:9. The complaint moves at once to its cause: the wicked, in arrogance, &lsquo;hotly pursue the poor.&rsquo; The opening plea &mdash; that the wicked be caught in their own schemes &mdash; already gestures toward the reversal that Psalm 9 celebrated.",
    },
    {
      id: "v2",
      label: "Psalm 10:3&ndash;7 &mdash; The Portrait of the Wicked",
      color: PURPLE,
      body:
        "&ldquo;For the wicked boasts of the desires of his soul, and the one greedy for gain curses and renounces the LORD. In the pride of his face the wicked does not seek him; all his thoughts are, &lsquo;There is no God.&rsquo;... He says in his heart, &lsquo;I shall not be moved; throughout all generations I shall not meet adversity.&rsquo; His mouth is filled with cursing and deceit and oppression; under his tongue are mischief and iniquity.&rdquo; " +
        "Here the camera turns to the wicked man himself. His sin begins inwardly &mdash; in boasting, greed, and pride &mdash; and reaches its root in practical atheism: &lsquo;There is no God.&rsquo; Secure in self-confidence (&lsquo;I shall not be moved&rsquo;), he imagines himself beyond reckoning. Verse 7 is quoted in Romans 3:14 as part of Paul&rsquo;s indictment of universal human sin, showing that this portrait is not only of one man but of the corruption latent in all.",
    },
    {
      id: "v3",
      label: "Psalm 10:8&ndash;11 &mdash; The Lion in Ambush",
      color: GOLD,
      body:
        "&ldquo;He sits in ambush in the villages; in hiding places he murders the innocent. His eyes stealthily watch for the helpless; he lurks in ambush like a lion in his thicket; he lurks that he may seize the poor... And he says in his heart, &lsquo;God has forgotten, he has hidden his face, he will never see it.&rsquo;&rdquo; " +
        "The portrait sharpens into predation. The wicked man is a lurking lion, an ambusher of the helpless and the poor, crushing his victims and dragging them off. The section climaxes by exposing the lie that fuels his cruelty: &lsquo;God has forgotten, he has hidden his face, he will never see it.&rsquo; This is the same false confidence the psalmist&rsquo;s own opening question feared &mdash; but in the mouth of the wicked it becomes a creed of impunity, the conviction that no one is watching.",
    },
    {
      id: "v4",
      label: "Psalm 10:12&ndash;15 &mdash; Arise, O LORD; Break the Arm",
      color: TEAL,
      body:
        "&ldquo;Arise, O LORD; O God, lift up your hand; forget not the afflicted. Why does the wicked renounce God and say in his heart, &lsquo;You will not call to account&rsquo;? But you do see, for you note mischief and vexation, that you may take it into your hands... Break the arm of the wicked and evildoer; call his wickedness to account till you find none.&rdquo; " +
        "The psalm pivots decisively from lament to petition. &lsquo;Arise, O LORD&rsquo; summons the very God accused of distance. The psalmist answers the wicked man&rsquo;s lie head-on: &lsquo;But you do see.&rsquo; God is not the absentee the wicked imagine; the helpless commit themselves to him, &lsquo;for you have been the helper of the fatherless.&rsquo; The plea to &lsquo;break the arm&rsquo; of the wicked asks God to shatter the power evil leans upon and to call its wickedness fully to account.",
    },
    {
      id: "v5",
      label: "Psalm 10:16&ndash;18 &mdash; The LORD Is King Forever",
      color: GREEN,
      body:
        "&ldquo;The LORD is king forever and ever; the nations perish from his land. O LORD, you hear the desire of the afflicted; you will strengthen their heart; you will incline your ear to do justice to the fatherless and the oppressed, so that man who is of the earth may strike terror no more.&rdquo; " +
        "The lament resolves in worship. The decisive answer to God&rsquo;s apparent absence is the affirmation of his eternal reign: &lsquo;The LORD is king forever and ever.&rsquo; The King hears, strengthens, and inclines his ear to do justice for the fatherless and the oppressed. The closing line punctures the pride of the wicked once and for all &mdash; &lsquo;man who is of the earth&rsquo; (mere dust) &lsquo;may strike terror no more.&rsquo; The psalm ends not with the wicked silenced by force but with God&rsquo;s kingship affirmed by faith.",
    },
  ];

  const appItems = [
    {
      id: "ap-honest",
      label: "Bring Your Honest Questions to God",
      color: ROSE,
      body:
        "Psalm 10 gives believers permission to pray their bewilderment: &lsquo;Why, O LORD, do you stand far away?&rsquo; God is not threatened by honest lament. In fact, the psalmist directs his complaint to God rather than away from him &mdash; which is itself an act of faith. When you feel God&rsquo;s absence, do not bury the feeling or pretend it away; bring it to him in the very words of Scripture. Lament that is addressed to God is a doorway back to trust, not a departure from it.",
    },
    {
      id: "ap-discern",
      label: "Recognize Practical Atheism in the Heart",
      color: PURPLE,
      body:
        "The wicked man&rsquo;s creed is &lsquo;There is no God&rsquo; &mdash; not as a theory but as a way of living. Practical atheism is the quiet assumption that God does not see, will not act, and need not be reckoned with. This temptation is not only &lsquo;out there&rsquo; in the openly godless; it whispers in every believer&rsquo;s small acts of hidden sin, where we behave as though God has &lsquo;hidden his face.&rsquo; Examine where you live as if unobserved, and let the truth &lsquo;but you do see&rsquo; recover a holy awareness of God&rsquo;s presence.",
    },
    {
      id: "ap-defend",
      label: "Take Up the Cause of the Helpless",
      color: GOLD,
      body:
        "Psalm 10 portrays God as the helper of the fatherless and the one who does justice for the oppressed. Those who pray this psalm cannot remain indifferent to the vulnerable. If God inclines his ear to the afflicted, his people must incline theirs as well. Let this psalm move you from mere outrage to concrete care &mdash; for the poor, the orphan, the abused, and all who are preyed upon. To love the God of Psalm 10 is to share his special concern for those the world treats as prey.",
    },
    {
      id: "ap-kingship",
      label: "Rest in God's Kingship When Circumstances Do Not Change",
      color: GREEN,
      body:
        "The remarkable thing about Psalm 10 is how it resolves: not because the wicked are visibly judged, but because &lsquo;the LORD is king forever and ever.&rsquo; Faith here rests on God&rsquo;s character, not on changed circumstances. When the evil you grieve still stands and the answer still tarries, you can yet affirm the eternal reign of God. This is the discipline of biblical hope &mdash; to preach to your own heart the kingship of God until anguish gives way to confidence, even before the situation turns.",
    },
  ];

  const reflectionQuestions = [
    "When have you felt that God was &lsquo;standing far away&rsquo; in your time of trouble, and how does Psalm 10 give you language to bring that to him honestly?",
    "Where do you notice &lsquo;practical atheism&rsquo; &mdash; living as if &lsquo;there is no God&rsquo; &mdash; creeping into your own thoughts and choices?",
    "How does the truth &lsquo;but you do see&rsquo; (Psalm 10:14) change the way you face hidden sin or unseen suffering?",
    "Psalm 10 dwells on the oppression of the poor and the fatherless. What concrete step could you take to share God&rsquo;s concern for the helpless?",
    "The psalm resolves through affirming God&rsquo;s eternal kingship rather than through changed circumstances. How might you preach &lsquo;the LORD is king forever&rsquo; to your own heart today?",
    "Psalms 9 and 10 are one acrostic &mdash; praise and lament joined. How can you hold thanksgiving and honest lament together in your own prayers?",
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
          Psalm 10: Why, O LORD, Do You Stand Far Away?
        </h1>
        <p style={{ ...paragraph, fontSize: "1.12rem" }}>
          Psalm 10 is the lament half of the Psalm 9&ndash;10 acrostic. It begins
          with the anguished question of God&rsquo;s apparent absence, paints a
          searching portrait of the arrogant wicked who say &lsquo;there is no God,&rsquo;
          turns to the bold petition &lsquo;Arise, O LORD,&rsquo; and ends in
          confidence that the LORD is King forever and will do justice for the
          fatherless and the oppressed.
        </p>
        <blockquote
          style={{
            margin: "1.75rem 0 0",
            padding: "1.4rem 1.6rem",
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${GREEN}`,
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
                "&ldquo;O LORD, you hear the desire of the afflicted; you will strengthen their heart; you will incline your ear to do justice to the fatherless and the oppressed.&rdquo;",
            }}
          />
          <cite style={{ color: GREEN, fontWeight: 700, fontStyle: "normal" }}>
            Psalm 10:17&ndash;18
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
                  "Psalm 10 is a lament that begins where most of us are tempted to stop &mdash; in the raw question of why God seems absent while evil prospers. It does not flinch from describing the arrogance of the wicked in vivid detail, yet it refuses to end in despair. The psalm turns to bold petition (&lsquo;Arise, O LORD&rsquo;) and finally rests in the eternal kingship of God, who hears the afflicted and does justice for the fatherless. It is the lamenting companion to the praising Psalm 9.",
              }}
            />
            <p
              style={paragraph}
              dangerouslySetInnerHTML={{
                __html:
                  "The genius of Psalm 10 is its honesty. It names the problem of theodicy without pretending to a tidy answer, and it finds resolution not in changed circumstances but in renewed confidence about who God is. The wicked say &lsquo;God has forgotten&rsquo;; the psalmist answers, &lsquo;but you do see.&rsquo; The God who seemed to hide his face is the God who inclines his ear.",
              }}
            />

            <h2 style={{ ...sectionTitle, marginTop: "2rem" }}>Structure: From Lament to Confidence</h2>
            <p
              style={paragraph}
              dangerouslySetInnerHTML={{
                __html:
                  "Psalm 10 moves in five movements, traveling from the cry of God&rsquo;s absence, through the portrait of the wicked, to the petition and the closing confidence in God&rsquo;s reign:",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: "0 0 1.5rem" }}>
              {[
                { n: "Part 1", v: "10:1&ndash;2", t: "Why do you stand far away?", c: ROSE, d: "The anguished opening question, as the arrogant wicked hotly pursue the poor." },
                { n: "Part 2", v: "10:3&ndash;7", t: "The portrait of the wicked", c: PURPLE, d: "He boasts in greed, renounces the LORD, says there is no God, and fills his mouth with cursing and deceit." },
                { n: "Part 3", v: "10:8&ndash;11", t: "The lion in ambush", c: GOLD, d: "He lurks like a lion to seize the poor, convinced that God has hidden his face and will never see." },
                { n: "Part 4", v: "10:12&ndash;15", t: "The petition", c: TEAL, d: "Arise, O LORD; lift up your hand; but you do see; break the arm of the wicked and call him to account." },
                { n: "Part 5", v: "10:16&ndash;18", t: "The confidence", c: GREEN, d: "The LORD is king forever; he hears the afflicted and does justice for the fatherless and oppressed." },
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
                  "Psalm 10 has no superscription of its own &mdash; a telling sign that it belongs with Psalm 9. In the Hebrew, the two together form a single acrostic, the lines beginning with successive letters of the Hebrew alphabet. The Greek Septuagint and Latin Vulgate count them as one psalm; the Hebrew tradition divides them. Psalm 9 is the praising, confident half; Psalm 10 is the lamenting half, and the cry &lsquo;Arise, O LORD&rsquo; binds the two together.",
              }}
            />
            <p
              style={paragraph}
              dangerouslySetInnerHTML={{
                __html:
                  "Read in this light, Psalm 10 keeps the Psalter&rsquo;s praise honest. The phrase &lsquo;there is no God&rsquo; (10:4) is the heart of practical atheism and connects directly to Psalm 14:1, &lsquo;The fool says in his heart, There is no God.&rsquo; Verse 7 is quoted by Paul in Romans 3:14 as evidence of universal human sinfulness. Yet the psalm&rsquo;s resolution is not in the destruction of every enemy but in the affirmation of God&rsquo;s eternal kingship and his unfailing care for the oppressed &mdash; the same care celebrated in Psalm 9, now reached through the valley of lament.",
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
                  "Five great themes run through Psalm 10, tracing the path from honest lament to settled confidence. Expand each to explore the theme with its cross-references.",
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
                  "Walk through Psalm 10 section by section. Each part pairs the text with commentary, tracing the movement from the cry of God&rsquo;s absence to the confidence that he is King forever.",
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
                  "Psalm 10 is not only ancient lament; it speaks to every believer who has wrestled with the silence of God and the prospering of evil. Here are four ways its truth reshapes the life of faith.",
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
                borderLeft: `4px solid ${GREEN}`,
                borderRadius: 12,
              }}
            >
              <p
                style={{ ...paragraph, margin: 0, fontStyle: "italic", color: TEXT }}
                dangerouslySetInnerHTML={{
                  __html:
                    "O LORD, when you seem to stand far away and to hide yourself in our times of trouble, teach us to bring our honest questions to you and not away from you. We confess the practical atheism that whispers &lsquo;there is no God&rsquo; in our hidden choices, and we cling to the truth that you do see. Arise, O LORD; lift up your hand; forget not the afflicted. Defend the poor, the helpless, and the fatherless, and make us defenders of them too. And when circumstances do not change, settle our hearts in this: you are King forever and ever, and you incline your ear to do justice. Through Jesus Christ, who was forsaken that we might never be, amen.",
                }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
