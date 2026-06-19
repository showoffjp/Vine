"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const THEMES = [
  {
    id: "summons",
    color: GOLD,
    title: "The Joyful Summons to Worship",
    body:
      "Psalm 95 opens with an exuberant, communal invitation: &ldquo;Oh come, let us sing to the LORD; let us make a joyful noise to the rock of our salvation!&rdquo; The verbs are plural and hortatory &mdash; this is not a private meditation but a congregation rousing one another to praise. The Hebrew imagery is physical and loud: singing, shouting, making a joyful noise, coming into God&rsquo;s presence with thanksgiving. Worship here is not a mood that descends on us when we feel like it; it is a summons we extend to one another and obey together. The psalm calls God &ldquo;the rock of our salvation&rdquo; &mdash; an image of unshakable stability and deliverance drawn from Israel&rsquo;s wilderness story (Deuteronomy 32:4, 15, 18). We sing not into a void but to a Rock who has already saved us.",
    refs: "Psalm 95:1&ndash;2; Deuteronomy 32:4; Psalm 100:1&ndash;2; Ephesians 5:19",
  },
  {
    id: "king",
    color: PURPLE,
    title: "The Great King and Creator",
    body:
      "The ground of worship is who God is: &ldquo;For the LORD is a great God, and a great King above all gods.&rdquo; In a world crowded with rival deities, the psalmist declares the LORD&rsquo;s absolute supremacy. The reason follows immediately &mdash; he is the Creator: &ldquo;In his hand are the depths of the earth; the heights of the mountains are his also. The sea is his, for he made it, and his hands formed the dry land.&rdquo; From the lowest valleys to the highest peaks, from the chaotic sea to the solid ground, every realm belongs to him because he made it. The God we are summoned to praise is not a tribal idol but the maker and owner of the whole cosmos. Creation is not a neutral backdrop; it is the workshop and possession of the King, and that is reason enough to bow.",
    refs: "Psalm 95:3&ndash;5; Genesis 1:1; Psalm 24:1&ndash;2; Psalm 89:11",
  },
  {
    id: "humble",
    color: TEAL,
    title: "The Call to Humble Worship",
    body:
      "The mood shifts from joyful noise to reverent silence: &ldquo;Oh come, let us worship and bow down; let us kneel before the LORD, our Maker!&rdquo; True worship holds both notes together &mdash; exuberant praise and humble prostration. The same God who invites us to shout for joy also calls us to kneel. The reason given is tender and covenantal: &ldquo;For he is our God, and we are the people of his pasture, and the sheep of his hand.&rdquo; The Creator of mountains and seas is also a shepherd, and we are his flock. This is the heart of the psalm&rsquo;s key verse (95:6&ndash;7a): worship flows not from fear of a distant tyrant but from belonging to a near and caring Shepherd-King. Bowing down is not groveling; it is the right posture of sheep who know their Shepherd.",
    refs: "Psalm 95:6&ndash;7a; Psalm 23:1; Psalm 100:3; John 10:11&ndash;16",
  },
  {
    id: "warning",
    color: ROSE,
    title: "The Solemn Warning: Do Not Harden Your Hearts",
    body:
      "At verse 7b the psalm turns dramatically. The shepherd&rsquo;s voice becomes a warning: &ldquo;Today, if you hear his voice, do not harden your hearts, as at Meribah, as on the day at Massah in the wilderness.&rdquo; The names Meribah (&ldquo;quarreling&rdquo;) and Massah (&ldquo;testing&rdquo;) recall Israel&rsquo;s rebellion at the waters where they doubted God&rsquo;s presence (Exodus 17:1&ndash;7) and the later refusal to enter the land (Numbers 14). God speaks in the first person: &ldquo;For forty years I loathed that generation&hellip; therefore I swore in my wrath, &lsquo;They shall not enter my rest.&rsquo;&rdquo; The same psalm that summons us to joyful worship warns that worship can curdle into unbelief. The word &ldquo;Today&rdquo; presses the point: the danger is not ancient history but a present possibility. To hear God&rsquo;s voice and not respond in trust is to repeat the wilderness sin.",
    refs: "Psalm 95:7b&ndash;11; Exodus 17:1&ndash;7; Numbers 14:20&ndash;23; Hebrews 3:7&ndash;11",
  },
  {
    id: "rest",
    color: GREEN,
    title: "The Promise and the Threat of God's Rest",
    body:
      "The psalm ends on the word &ldquo;rest&rdquo; &mdash; the menuchah that the wilderness generation forfeited. In its first sense, this rest is the settled life in the promised land that the rebels never reached. But Hebrews 3:7&ndash;4:11 takes up Psalm 95 and shows that the rest is deeper still: a sabbath rest that &ldquo;remains for the people of God,&rdquo; ultimately the gospel rest found in Christ. The warning of the psalm therefore reaches into the church age. The danger is not Canaan geography but unbelief that refuses to enter God&rsquo;s presence. The good news is that the door is still open: &ldquo;Today, if you hear his voice.&rdquo; Worship and warning are not opposites in this psalm; they are two sides of taking God seriously. We sing because he is our Maker, and we tremble because his voice still calls for a response we dare not refuse.",
    refs: "Psalm 95:11; Hebrews 4:1&ndash;11; Matthew 11:28&ndash;30; Joshua 21:44",
  },
];

const VERSE_SECTIONS = [
  {
    id: "v1",
    ref: "Psalm 95:1&ndash;2",
    color: GOLD,
    summary: "The joyful call to sing",
    body:
      "&ldquo;Oh come, let us sing to the LORD; let us make a joyful noise to the rock of our salvation! Let us come into his presence with thanksgiving; let us make a joyful noise to him with songs of praise!&rdquo; The psalm begins with a fourfold invitation &mdash; sing, make a joyful noise, come with thanksgiving, sing songs of praise. Worship is corporate and loud, the glad response of a saved people to the Rock who saved them. To &ldquo;come into his presence&rdquo; (literally, to come before his face) is the privilege of the redeemed, and the appropriate luggage we bring is thanksgiving.",
  },
  {
    id: "v3",
    ref: "Psalm 95:3&ndash;5",
    color: PURPLE,
    summary: "The great King over all creation",
    body:
      "&ldquo;For the LORD is a great God, and a great King above all gods. In his hand are the depths of the earth; the heights of the mountains are his also. The sea is his, for he made it, and his hands formed the dry land.&rdquo; The &ldquo;for&rdquo; gives the reason to worship: God&rsquo;s greatness and his creatorship. Every region of the cosmos &mdash; the deep places, the mountain heights, the sea, the dry land &mdash; is named as his possession because his hands made it. The rival gods are nothing beside the King who owns the world he formed.",
  },
  {
    id: "v6",
    ref: "Psalm 95:6&ndash;7a",
    color: TEAL,
    summary: "Worship and bow down, for we are his sheep",
    body:
      "&ldquo;Oh come, let us worship and bow down; let us kneel before the LORD, our Maker! For he is our God, and we are the people of his pasture, and the sheep of his hand.&rdquo; This is the psalm&rsquo;s key verse. A second &ldquo;Oh come&rdquo; calls the congregation to a humbler posture &mdash; worship, bow, kneel. The reason is covenant relationship: the Maker is &ldquo;our God,&rdquo; and we are the flock under his shepherding hand. The same hand that formed the dry land cradles his people as sheep of his pasture.",
  },
  {
    id: "v7b",
    ref: "Psalm 95:7b&ndash;9",
    color: ROSE,
    summary: "Today, do not harden your hearts",
    body:
      "&ldquo;Today, if you hear his voice, do not harden your hearts, as at Meribah, as on the day at Massah in the wilderness, when your fathers put me to the test and put me to the proof, though they had seen my work.&rdquo; The shepherd now speaks a warning. &ldquo;Today&rdquo; makes the call urgent and present. Meribah and Massah recall Exodus 17, where Israel quarreled and tested God despite having seen the plagues, the sea, and the manna. Hearing God&rsquo;s voice demands a soft, responsive heart; the alternative is the hardened unbelief of the wilderness.",
  },
  {
    id: "v10",
    ref: "Psalm 95:10&ndash;11",
    color: GREEN,
    summary: "God's oath that they would not enter his rest",
    body:
      "&ldquo;For forty years I loathed that generation and said, &lsquo;They are a people who go astray in their heart, and they have not known my ways.&rsquo; Therefore I swore in my wrath, &lsquo;They shall not enter my rest.&rsquo;&rdquo; The psalm closes with God&rsquo;s sober verdict. A whole generation wandered the desert because their hearts strayed and they refused to know his ways. God&rsquo;s oath barred them from the rest of the promised land. Hebrews hears in this &ldquo;rest&rdquo; the deeper sabbath rest still offered in the gospel &mdash; and still forfeited by unbelief.",
  },
];

const APPLICATIONS = [
  {
    id: "a1",
    color: GOLD,
    title: "Let Worship Be Both Joyful and Reverent",
    body:
      "Psalm 95 refuses to let us choose between exuberance and reverence. It commands us to &ldquo;make a joyful noise&rdquo; and to &ldquo;kneel before the LORD, our Maker.&rdquo; Healthy worship holds both. If our gatherings are all shout and no silence, we may be celebrating ourselves; if they are all hush and no gladness, we may have forgotten the Rock of our salvation. Examine your own worship: where do you need more joy, and where do you need more awe? Come into his presence with thanksgiving, and then bow.",
  },
  {
    id: "a2",
    color: PURPLE,
    title: "Worship the Creator, Not the Creation",
    body:
      "The psalm grounds praise in the fact that God made and owns the depths, the heights, the sea, and the dry land. Whenever we are tempted to give ultimate weight to created things &mdash; money, nature, achievement, even good gifts &mdash; Psalm 95 redirects our worship to the One whose hands formed them. Practicing gratitude for creation should always lift our eyes past the gift to the Giver, the great King above all gods.",
  },
  {
    id: "a3",
    color: ROSE,
    title: "Guard Your Heart Against Hardening &mdash; Today",
    body:
      "The most searching application is the word &ldquo;Today.&rdquo; Hearts do not harden all at once; they calcify slowly through small refusals to trust and obey. The wilderness generation had seen God&rsquo;s mighty works and still hardened. Familiarity with God&rsquo;s acts is no protection if the heart grows resistant. Hebrews 3:13 urges us to &ldquo;exhort one another every day, as long as it is called &lsquo;today.&rsquo;&rdquo; Where is God&rsquo;s voice meeting resistance in you right now? Respond today.",
  },
  {
    id: "a4",
    color: GREEN,
    title: "Enter the Rest That Remains in Christ",
    body:
      "Hebrews reads the &ldquo;rest&rdquo; of Psalm 95 as the gospel rest offered in Jesus &mdash; the cessation of striving to justify ourselves, the settled peace of belonging to the Shepherd. The wilderness generation lost their rest through unbelief; we enter ours through faith. Jesus says, &ldquo;Come to me, all who labor and are heavy laden, and I will give you rest&rdquo; (Matthew 11:28). The same psalm that warns also invites. Do not merely admire the rest from a distance &mdash; enter it by trusting Christ.",
  },
];

const QUESTIONS = [
  "Psalm 95 commands both joyful noise and humble kneeling. Which comes more naturally to you in worship, and which do you need to grow in?",
  "The psalm calls God &ldquo;the rock of our salvation&rdquo; and &ldquo;our Maker.&rdquo; How does remembering that God both saved you and made you change the way you approach him?",
  "Where in your life right now is God&rsquo;s voice calling for a response of trust? What would it look like to respond &ldquo;today&rdquo; rather than putting it off?",
  "The wilderness generation hardened their hearts even after seeing God&rsquo;s works. What small refusals to trust might be hardening your own heart over time?",
  "Hebrews applies the &ldquo;rest&rdquo; of Psalm 95 to the gospel rest in Christ. In what area are you still striving and laboring rather than resting in what Jesus has done?",
  "How could you and your community &ldquo;exhort one another every day&rdquo; (Hebrews 3:13) to keep soft, responsive hearts before God?",
];

const PRAYER =
  "Great King above all gods, Maker of the depths and the heights, the sea and the dry land &mdash; we come into your presence with thanksgiving and bow before you as the sheep of your hand. You are the Rock of our salvation; we make a joyful noise to you. Soften our hearts today. Where we have grown resistant, like our fathers at Meribah and Massah, forgive us and turn us back. Let us hear your voice and not harden our hearts. Lead us, by faith in Jesus, into the rest that still remains for your people, that we may worship you with gladness and reverence all our days. In the name of Christ our Shepherd we pray. Amen.";

const RELATED = [
  { label: "Psalm 96 Guide", href: "/psalm-96-guide" },
  { label: "Hebrews Guide", href: "/hebrews-guide" },
  { label: "Worship Theology", href: "/worship-theology-guide" },
  { label: "Sabbath Guide", href: "/sabbath-guide" },
];

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 95: A Call to Worship and a Warning" },
  { videoId: "Q2oNOlXzBhY", title: "The Venite &mdash; Psalm 95 in Christian Worship" },
  { videoId: "8phkAg8PMHE", title: "Today, If You Hear His Voice (Hebrews and Psalm 95)" },
  { videoId: "fNk_zzaMoSs", title: "Entering God's Rest: Psalm 95 and Hebrews 4" },
];

export default function Psalm95Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const card: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    padding: "1.5rem",
  };
  const html = (s: string) => ({ dangerouslySetInnerHTML: { __html: s } });
  const accordionBtn = (isOpen: boolean, color: string): React.CSSProperties => ({
    width: "100%",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 1.25rem",
    background: isOpen ? `${color}14` : "transparent",
    border: `1px solid ${isOpen ? color + "55" : BORDER}`,
    borderRadius: 12,
    cursor: "pointer",
    marginBottom: 8,
    color: TEXT,
    fontWeight: 700,
    fontSize: "0.98rem",
    transition: "all .2s",
  });

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
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span
              aria-hidden="true"
              style={{ fontSize: "1.6rem", color: GOLD }}
              dangerouslySetInnerHTML={{ __html: "&#9835;" }}
            />
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: 2,
                color: GOLD,
                textTransform: "uppercase",
              }}
            >
              Book of Psalms &middot; Study Guide
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem,4vw,2.9rem)", fontWeight: 900, lineHeight: 1.12, margin: "0 0 1rem" }}>
            Psalm 95: A Call to Worship That Becomes a Warning
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }} {...html(
            "Known as the &ldquo;Venite&rdquo; in Christian liturgy, Psalm 95 begins with an exuberant summons to praise the Creator-King and ends with a solemn warning drawn from the wilderness: &ldquo;Today, if you hear his voice, do not harden your hearts.&rdquo; This guide explores how praise and warning hold together in a single psalm."
          )} />
          <div
            style={{
              marginTop: "1.5rem",
              background: `${GOLD}10`,
              border: `1px solid ${GOLD}33`,
              borderLeft: `3px solid ${GOLD}`,
              borderRadius: 12,
              padding: "1.1rem 1.3rem",
            }}
          >
            <div style={{ fontWeight: 800, color: GOLD, fontSize: "0.82rem", letterSpacing: 1, marginBottom: "0.4rem" }}>
              KEY VERSE &middot; PSALM 95:6&ndash;7
            </div>
            <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }} {...html(
              "&ldquo;Oh come, let us worship and bow down; let us kneel before the LORD, our Maker! For he is our God, and we are the people of his pasture, and the sheep of his hand.&rdquo;"
            )} />
          </div>
        </header>

        {/* Tab bar */}
        <nav style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                padding: "0.5rem 1.1rem",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: "0.82rem",
                background: tab === t ? GOLD : "transparent",
                color: tab === t ? "#0b0b14" : MUTED,
                border: `1px solid ${tab === t ? GOLD : BORDER}`,
                cursor: "pointer",
                transition: "all .18s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </nav>

        {/* Overview */}
        {tab === "overview" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 0.75rem", color: GOLD }}>Summary</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }} {...html(
                "Psalm 95 is one of the great worship psalms of Israel. It falls naturally into two unequal halves. Verses 1&ndash;7a are a glad invitation to praise the LORD as the rock of our salvation, the great King above all gods, the Creator who holds the depths and heights of the earth, and the Shepherd whose flock we are. Then, at verse 7b, the tone changes sharply. The same God who invites us to kneel now warns us not to harden our hearts as Israel did at Meribah and Massah. The psalm ends with God&rsquo;s own oath that the rebellious generation would never enter his rest."
              )} />
            </div>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 0.75rem", color: PURPLE }}>Structure</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { r: "95:1&ndash;2", t: "Joyful summons &mdash; sing and shout to the Rock of our salvation", c: GOLD },
                  { r: "95:3&ndash;5", t: "The reason &mdash; the great King and Creator owns all things", c: PURPLE },
                  { r: "95:6&ndash;7a", t: "Humble worship &mdash; bow and kneel before our Maker and Shepherd", c: TEAL },
                  { r: "95:7b&ndash;9", t: "The turn &mdash; today, do not harden your hearts as at Meribah", c: ROSE },
                  { r: "95:10&ndash;11", t: "God&rsquo;s oath &mdash; the rebels would not enter his rest", c: GREEN },
                ].map((s) => (
                  <div
                    key={s.r}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "baseline",
                      background: `${s.c}0A`,
                      border: `1px solid ${s.c}25`,
                      borderRadius: 10,
                      padding: "0.8rem 1rem",
                    }}
                  >
                    <span style={{ fontWeight: 800, color: s.c, fontSize: "0.85rem", whiteSpace: "nowrap" }} {...html(s.r)} />
                    <span style={{ color: MUTED, lineHeight: 1.6 }} {...html(s.t)} />
                  </div>
                ))}
              </div>
            </div>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 0.75rem", color: TEAL }}>Context</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 1rem" }} {...html(
                "Psalm 95 is used as the &ldquo;Venite&rdquo; (from the Latin for &ldquo;Oh come&rdquo;) &mdash; the invitatory psalm sung at the start of daily morning prayer in many Christian traditions for centuries. Its first half perfectly opens a service of worship; its second half reminds the worshiper that gathering to praise is no light thing."
              )} />
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }} {...html(
                "The book of Hebrews (3:7&ndash;4:11) quotes Psalm 95:7&ndash;11 at length, applying the &ldquo;Today&hellip; do not harden your hearts&rdquo; and the theme of &ldquo;rest&rdquo; to the Christian life. For Hebrews, the rest is ultimately the gospel rest in Christ, and the warning is against the unbelief that forfeits it. The two halves of the psalm &mdash; joyful call and solemn warning &mdash; together hold praise and the seriousness of responding to God &ldquo;today.&rdquo;"
              )} />
            </div>
          </section>
        )}

        {/* Themes */}
        {tab === "themes" && (
          <section style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 0.5rem", color: GOLD }}>Key Themes</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 1.5rem" }} {...html(
              "Five threads run through Psalm 95, from the joyful summons to praise to the searching warning about the heart. Open each to explore the theme and its cross-references."
            )} />
            {THEMES.map((th) => {
              const isOpen = open === th.id;
              return (
                <div key={th.id}>
                  <button type="button" style={accordionBtn(isOpen, th.color)} onClick={() => toggle(th.id)}>
                    <span {...html(th.title)} />
                    <span style={{ color: th.color, fontSize: "1.2rem" }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        background: `${th.color}0A`,
                        border: `1px solid ${th.color}22`,
                        borderRadius: 10,
                        padding: "1rem 1.25rem",
                        marginBottom: 8,
                      }}
                    >
                      <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.9rem" }} {...html(th.body)} />
                      <p style={{ color: th.color, fontSize: "0.85rem", fontWeight: 700, margin: 0 }} {...html("Cross-references: " + th.refs)} />
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {/* Verse by Verse */}
        {tab === "verse" && (
          <section style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 0.5rem", color: PURPLE }}>Verse by Verse</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 1.5rem" }} {...html(
              "Move through Psalm 95 section by section, watching the psalm pivot from joyful invitation to solemn warning. Open each passage for its text and explanation."
            )} />
            {VERSE_SECTIONS.map((v) => {
              const isOpen = open === v.id;
              return (
                <div key={v.id}>
                  <button type="button" style={accordionBtn(isOpen, v.color)} onClick={() => toggle(v.id)}>
                    <span style={{ display: "flex", flexDirection: "column", gap: "0.2rem", textAlign: "left" }}>
                      <span style={{ color: v.color, fontWeight: 800 }} {...html(v.ref)} />
                      <span style={{ color: MUTED, fontWeight: 500, fontSize: "0.85rem" }} {...html(v.summary)} />
                    </span>
                    <span style={{ color: v.color, fontSize: "1.2rem" }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        background: `${v.color}0A`,
                        border: `1px solid ${v.color}22`,
                        borderRadius: 10,
                        padding: "1rem 1.25rem",
                        marginBottom: 8,
                      }}
                    >
                      <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }} {...html(v.body)} />
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {/* Application */}
        {tab === "application" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 1rem", color: TEAL }}>Living Psalm 95</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {APPLICATIONS.map((a) => (
                  <div
                    key={a.id}
                    style={{
                      background: `${a.color}08`,
                      border: `1px solid ${a.color}25`,
                      borderLeft: `3px solid ${a.color}`,
                      borderRadius: 12,
                      padding: "1.1rem 1.3rem",
                    }}
                  >
                    <h3 style={{ fontWeight: 800, color: a.color, margin: "0 0 0.5rem", fontSize: "1.05rem" }} {...html(a.title)} />
                    <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }} {...html(a.body)} />
                  </div>
                ))}
              </div>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 1rem", color: GOLD }}>Reflection Questions</h2>
              <ol style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {QUESTIONS.map((q, i) => (
                  <li key={i} style={{ color: MUTED, lineHeight: 1.7 }} {...html(q)} />
                ))}
              </ol>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 1rem", color: PURPLE }}>Video Teaching</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <div key={v.videoId}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <p style={{ color: MUTED, fontSize: "0.85rem", margin: "0.5rem 0 0" }} {...html(v.title)} />
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: `${GREEN}0E`,
                border: `1px solid ${GREEN}33`,
                borderRadius: 16,
                padding: "1.5rem",
              }}
            >
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 0.75rem", color: GREEN }}>A Closing Prayer</h2>
              <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontStyle: "italic" }} {...html(PRAYER)} />
            </div>
          </section>
        )}

        {/* Related guides */}
        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {RELATED.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: 999,
                fontSize: "0.82rem",
                fontWeight: 700,
                border: `1px solid ${BORDER}`,
                color: MUTED,
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
