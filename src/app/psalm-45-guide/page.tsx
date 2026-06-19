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

const STRUCTURE = [
  {
    range: "Psalm 45:1-2",
    label: "The Poet&rsquo;s Overflowing Theme",
    color: PURPLE,
    body: "The psalmist introduces his song with the heart of a court poet: &ldquo;My heart overflows with a pleasing theme; I address my verses to the king.&rdquo; He praises the king as &ldquo;the most handsome of the sons of men,&rdquo; with grace poured upon his lips and the blessing of God upon him forever.",
  },
  {
    range: "Psalm 45:3-5",
    label: "The Victorious Warrior-King",
    color: ROSE,
    body: "The king is summoned to battle: &ldquo;Gird your sword on your thigh, O mighty one.&rdquo; He rides out victoriously &ldquo;for the cause of truth and meekness and righteousness,&rdquo; his arrows sharp, the peoples falling under him. Majesty and moral cause are joined.",
  },
  {
    range: "Psalm 45:6-7",
    label: "The King Addressed as God",
    color: GOLD,
    body: "The astonishing center: &ldquo;Your throne, O God, is forever and ever. The scepter of your kingdom is a scepter of uprightness.&rdquo; Because he loved righteousness and hated wickedness, &ldquo;God, your God, has anointed you with the oil of gladness beyond your companions.&rdquo; Hebrews 1:8-9 cites this of the Son.",
  },
  {
    range: "Psalm 45:8-9",
    label: "The Royal Wedding Splendor",
    color: TEAL,
    body: "Fragrant robes of myrrh, aloes, and cassia; the music of ivory palaces; and at the king&rsquo;s right hand stands the queen &ldquo;in gold of Ophir.&rdquo; The scene turns from conquest to celebration &mdash; a marriage of beauty and joy.",
  },
  {
    range: "Psalm 45:10-12",
    label: "The Bride&rsquo;s Summons",
    color: GREEN,
    body: "The bride is called to leave the old and embrace the new: &ldquo;Hear, O daughter... forget your people and your father&rsquo;s house, and the king will desire your beauty.&rdquo; She is to honor him as lord, and the nations bring tribute to her.",
  },
  {
    range: "Psalm 45:13-17",
    label: "The Procession and the Promise",
    color: PURPLE,
    body: "The princess is led to the king &ldquo;in robes of many colors,&rdquo; with joy and gladness. The psalm closes with a promise of enduring legacy: &ldquo;I will cause your name to be remembered in all generations; therefore nations will praise you forever and ever.&rdquo;",
  },
];

const THEMES = [
  {
    id: "king",
    title: "The Beauty and Majesty of the King",
    color: PURPLE,
    body: "&ldquo;You are the most handsome of the sons of men; grace is poured upon your lips.&rdquo; The psalm exalts the king&rsquo;s splendor &mdash; not vanity, but the radiance of a ruler in whom beauty, eloquence, and divine blessing meet. Read of Christ, this becomes the church&rsquo;s confession that her Bridegroom is altogether lovely, the one in whom the fullness of God dwells and from whose lips grace truly flows.",
    refs: "Song of Solomon 5:10-16 &middot; Isaiah 33:17 &middot; Luke 4:22 &middot; John 1:14",
  },
  {
    id: "righteous",
    title: "A Righteous and Victorious Reign",
    color: ROSE,
    body: "&ldquo;Ride out victoriously for the cause of truth and meekness and righteousness.&rdquo; This king&rsquo;s power serves justice, not tyranny. He loves righteousness and hates wickedness (v. 7). His conquest is moral as well as military &mdash; a reign that establishes truth. In Christ, the rider on the white horse who judges and makes war in righteousness, this royal ideal finds its perfect and everlasting fulfillment.",
    refs: "Psalm 72:1-4 &middot; Isaiah 11:3-5 &middot; Hebrews 1:8 &middot; Revelation 19:11-16",
  },
  {
    id: "deity",
    title: "The King Addressed as God",
    color: GOLD,
    body: "&ldquo;Your throne, O God, is forever and ever&rdquo; (v. 6). Within a wedding song, the king is addressed directly as God, yet in the next breath &ldquo;God, your God, has anointed you&rdquo; (v. 7) &mdash; both divine and distinct. Hebrews 1:8-9 seizes on exactly this to prove the deity and supremacy of the Son. It is one of the clearest Old Testament addresses of the Messiah as God, anchoring the doctrine that the eternal King shares the divine throne.",
    refs: "Hebrews 1:8-9 &middot; Isaiah 9:6-7 &middot; John 1:1 &middot; John 20:28",
  },
  {
    id: "oil",
    title: "Anointed with the Oil of Gladness",
    color: TEAL,
    body: "&ldquo;Therefore God, your God, has anointed you with the oil of gladness beyond your companions&rdquo; (v. 7). Anointing marked kings as set apart and empowered; here it is also the oil of joy. The title Messiah and Christ both mean &ldquo;Anointed One.&rdquo; Jesus is anointed beyond all his companions &mdash; with the Spirit without measure &mdash; and his gladness overflows to the people he loves and saves.",
    refs: "1 Samuel 16:13 &middot; Isaiah 61:1-3 &middot; Acts 10:38 &middot; Hebrews 1:9",
  },
  {
    id: "bride",
    title: "The Bride Who Leaves All for the King",
    color: GREEN,
    body: "&ldquo;Forget your people and your father&rsquo;s house, and the king will desire your beauty&rdquo; (vv. 10-11). The bride is summoned to a wholehearted, exclusive love that leaves the old life behind. The king delights in her beauty &mdash; a beauty he himself bestows. So Christ loved the church and gave himself for her, that he might present her to himself in splendor, the radiant bride of the Lamb.",
    refs: "Genesis 2:24 &middot; 2 Corinthians 11:2 &middot; Ephesians 5:25-27 &middot; Revelation 19:7-8",
  },
  {
    id: "fulfillment",
    title: "The Wedding Fulfilled in Christ and the Church",
    color: PURPLE,
    body: "A royal wedding song &mdash; possibly for Solomon &mdash; is transcended by its messianic fulfillment. The New Testament unfolds the King as Christ the Bridegroom and the bride as his church. The original ceremony was a shadow; the marriage of the Lamb is the substance. The psalm&rsquo;s closing promise that the king&rsquo;s name will be remembered in all generations is answered in the eternal praise of the redeemed.",
    refs: "Matthew 22:1-14 &middot; Ephesians 5:31-32 &middot; Revelation 19:9 &middot; Revelation 21:2",
  },
];

const VERSES = [
  {
    id: "v1",
    ref: "Psalm 45:1-2",
    title: "A Pleasing Theme for the King",
    color: PURPLE,
    body: "&ldquo;My heart overflows with a pleasing theme; I address my verses to the king; my tongue is like the pen of a ready scribe.&rdquo; The poet is moved, his words flowing freely in praise. He turns to the king himself: &ldquo;You are the most handsome of the sons of men; grace is poured upon your lips; therefore God has blessed you forever.&rdquo; Beauty, gracious speech, and divine blessing converge in the figure of the king &mdash; a portrait that points beyond any earthly monarch to Christ.",
  },
  {
    id: "v2",
    ref: "Psalm 45:3-5",
    title: "Ride Out Victoriously",
    color: ROSE,
    body: "&ldquo;Gird your sword on your thigh, O mighty one, in your splendor and majesty!&rdquo; The king is called to battle &mdash; but for a cause: &ldquo;In your majesty ride out victoriously for the cause of truth and meekness and righteousness.&rdquo; His arrows are sharp in the hearts of his enemies; peoples fall under him. This is power wielded for justice, a conquering King whose victories serve truth. The church reads here the triumph of Christ over every enemy.",
  },
  {
    id: "v3",
    ref: "Psalm 45:6-7",
    title: "Your Throne, O God, Is Forever",
    color: GOLD,
    body: "&ldquo;Your throne, O God, is forever and ever. The scepter of your kingdom is a scepter of uprightness; you have loved righteousness and hated wickedness. Therefore God, your God, has anointed you with the oil of gladness beyond your companions.&rdquo; Here the king is addressed as God, yet anointed by God &mdash; divine and yet distinct. Hebrews 1:8-9 quotes these verses to prove the deity and superiority of the Son. This is one of the clearest Old Testament addresses of the Messiah as God.",
  },
  {
    id: "v4",
    ref: "Psalm 45:8-9",
    title: "Robes Fragrant with Myrrh",
    color: TEAL,
    body: "&ldquo;Your robes are all fragrant with myrrh and aloes and cassia. From ivory palaces stringed instruments make you glad; daughters of kings are among your ladies of honor; at your right hand stands the queen in gold of Ophir.&rdquo; The scene shifts from the battlefield to the wedding feast. The king is surrounded by fragrance, music, and royalty, and the queen takes her place of honor at his right hand, adorned in the finest gold &mdash; a picture of the bride dignified by her union with the king.",
  },
  {
    id: "v5",
    ref: "Psalm 45:10-12",
    title: "Forget Your Father&rsquo;s House",
    color: GREEN,
    body: "&ldquo;Hear, O daughter, and consider, and incline your ear: forget your people and your father&rsquo;s house, and the king will desire your beauty. Since he is your lord, bow to him.&rdquo; The bride is called to a complete reorientation of love and loyalty toward the king. To honor him is not loss but gain: he desires her beauty, and the wealthy among the people seek her favor with gifts. So the church leaves the old life to belong wholly to Christ her Lord.",
  },
  {
    id: "v6",
    ref: "Psalm 45:13-17",
    title: "Led to the King in Joy",
    color: PURPLE,
    body: "&ldquo;The princess is decked in her chamber with gold-woven robes; in many-colored robes she is led to the king.&rdquo; With her companions she is brought to him &ldquo;with joy and gladness&rdquo; into the palace. The psalm ends with a promise to the king: &ldquo;In place of your fathers shall be your sons... I will cause your name to be remembered in all generations; therefore nations will praise you forever and ever.&rdquo; The everlasting praise points to the King whose name endures beyond all generations.",
  },
];

const APPLICATIONS = [
  {
    id: "a1",
    title: "Behold the Beauty of Your King",
    color: PURPLE,
    body: "&ldquo;You are the most handsome of the sons of men; grace is poured upon your lips.&rdquo; Worship begins with seeing. Take time to behold Christ the King &mdash; his majesty, his grace, his loveliness. A heart captivated by his beauty is a heart freed from lesser loves. Let your meditation on who he is overflow, like the psalmist&rsquo;s, into a pleasing theme of praise. Adoration is not optional decoration; it is the soul&rsquo;s right response to the King.",
  },
  {
    id: "a2",
    title: "Trust the Righteous Reign of Christ",
    color: ROSE,
    body: "This King rides out &ldquo;for the cause of truth and meekness and righteousness.&rdquo; In a world where power so often serves itself, here is a Ruler whose throne is upright and whose victories establish justice. When evil seems to triumph, remember that the scepter of his kingdom is a scepter of uprightness. He will set all things right. Submit your causes and your fears to the King whose reign is forever and ever.",
  },
  {
    id: "a3",
    title: "Confess Christ as God Enthroned",
    color: GOLD,
    body: "&ldquo;Your throne, O God, is forever and ever.&rdquo; Hebrews 1 builds the deity of the Son on this very verse. Let this guard your worship: Jesus is not merely a great teacher or anointed man but God enthroned, worthy of the worship due to God alone. When doubt or culture would reduce him, return to the throne that is forever. To know him rightly is to bow before him as Lord and God.",
  },
  {
    id: "a4",
    title: "Leave All to Belong to the Bridegroom",
    color: GREEN,
    body: "&ldquo;Forget your people and your father&rsquo;s house, and the king will desire your beauty.&rdquo; The bride&rsquo;s call is exclusive devotion &mdash; leaving the old allegiances to belong wholly to the king. As Christ&rsquo;s bride, the church is summoned to that same undivided love. Ask where competing loyalties still rival your devotion to Christ. He has loved you and given himself for you; respond by giving him your whole heart in joyful surrender.",
  },
  {
    id: "a5",
    title: "Live Toward the Wedding of the Lamb",
    color: TEAL,
    body: "The royal wedding of Psalm 45 is a shadow of the marriage of the Lamb (Revelation 19:7-9). Live as those awaiting that day &mdash; clothed not in self-righteousness but in the fine linen that is the righteous deeds of the saints, granted by grace. Let the certainty of that final celebration shape how you wait, how you love, and how you keep yourself for the King who is coming to bring his bride home.",
  },
];

const QUESTIONS = [
  "When did you last simply &ldquo;behold&rdquo; the beauty and majesty of Christ the King rather than only ask things of him?",
  "How does the truth that Christ reigns &ldquo;for the cause of truth and meekness and righteousness&rdquo; steady you in a world that feels unjust?",
  "Hebrews 1 uses Psalm 45:6 to prove the deity of the Son. How does confessing &ldquo;your throne, O God, is forever&rdquo; shape your worship of Jesus?",
  "The bride is told to &ldquo;forget your people and your father&rsquo;s house.&rdquo; What old loyalties still compete with your devotion to Christ the Bridegroom?",
  "If you are part of the church, the bride of Christ, how should the king&rsquo;s desire for your beauty reshape your sense of identity and worth?",
  "How does living toward the marriage of the Lamb (Revelation 19:7-9) change the way you wait, love, and worship today?",
];

const VIDEO_ITEMS = [
  { videoId: "rNcERbkSTXU", title: "Psalm 45 Overview &mdash; The Royal Wedding Song" },
  { videoId: "OjJ7GkWCHvA", title: "Your Throne, O God: Psalm 45 and the Deity of Christ" },
  { videoId: "pHBzJ2dVXgk", title: "The King and His Bride &mdash; Psalm 45 and Ephesians 5" },
  { videoId: "3sO5FH2ybPY", title: "Anointed with the Oil of Gladness" },
];

export default function Psalm45Guide() {
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
        {/* HERO */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>&#128081;</span>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: 2,
                color: PURPLE,
                textTransform: "uppercase",
              }}
            >
              Psalms &middot; Book Study
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Psalm 45: A Royal Wedding and the King Who Is God
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680, marginBottom: "1.5rem" }}>
            A wedding song for a king that rises into one of Scripture&rsquo;s clearest addresses of the Messiah as God.
            Behold the King&rsquo;s beauty, his righteous reign, his eternal throne &mdash; and the bride summoned to leave
            all and belong to him.
          </p>
          <div
            style={{
              background: `${PURPLE}10`,
              border: `1px solid ${PURPLE}30`,
              borderLeft: `4px solid ${PURPLE}`,
              borderRadius: 12,
              padding: "1.25rem 1.5rem",
            }}
          >
            <div style={{ fontSize: "0.8rem", fontWeight: 800, color: PURPLE, letterSpacing: 1, marginBottom: "0.5rem" }}>
              KEY VERSE &middot; PSALM 45:6
            </div>
            <p
              style={{ color: TEXT, fontSize: "1.15rem", lineHeight: 1.7, fontStyle: "italic", margin: 0 }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;Your throne, O God, is forever and ever. The scepter of your kingdom is a scepter of uprightness.&rdquo;",
              }}
            />
          </div>
        </div>

        {/* TAB BAR */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
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
                background: tab === t ? PURPLE : "transparent",
                color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? PURPLE : BORDER}`,
                cursor: "pointer",
                transition: "all .18s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: PURPLE }}>Summary</h2>
              <p
                style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Psalm 45 is a royal wedding song, written by a court poet whose &ldquo;heart overflows with a pleasing theme&rdquo; as he addresses his verses to the king. He praises the king&rsquo;s beauty and gracious speech (vv. 1-2), his victorious reign for the cause of truth and righteousness (vv. 3-5), and then &mdash; astonishingly &mdash; addresses the king directly as God whose throne is forever and whose kingdom is upright (vv. 6-7). The song moves to the splendor of the wedding: fragrant robes, palace music, and the queen at the king&rsquo;s right hand in gold of Ophir (vv. 8-9). The bride is summoned to forget her father&rsquo;s house and give herself wholly to the king (vv. 10-12), and the psalm closes with the joyful procession and a promise that the king&rsquo;s name will be praised in all generations (vv. 13-17).",
                }}
              />
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: GOLD }}>Context</h2>
              <p
                style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Psalm 45 carries a superscription naming it a song of love and a maskil of the Sons of Korah, set to a tune about lilies. Its original setting is a royal wedding &mdash; possibly the marriage of Solomon &mdash; celebrating an actual Davidic king and his bride. Yet the language soon outgrows any earthly monarch: no mere man could be hailed with &ldquo;your throne, O God, is forever.&rdquo; The writer of Hebrews recognizes this, quoting Psalm 45:6-7 in Hebrews 1:8-9 to prove the deity and superiority of the Son. The wedding imagery is taken up across the New Testament &mdash; Christ the Bridegroom and the church his bride (2 Corinthians 11:2; Ephesians 5:25-32; Revelation 19:7-9; 21:2). The historical royal wedding is real, but it is transcended by its messianic fulfillment.",
                }}
              />
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Structure</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {STRUCTURE.map((s) => (
                  <div
                    key={s.range}
                    style={{
                      background: `${s.color}0A`,
                      border: `1px solid ${s.color}25`,
                      borderLeft: `3px solid ${s.color}`,
                      borderRadius: 12,
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.35rem" }}>
                      <span style={{ fontWeight: 800, color: s.color, fontSize: "0.85rem" }}>{s.range}</span>
                      <span style={{ fontWeight: 700, color: TEXT }} dangerouslySetInnerHTML={{ __html: s.label }} />
                    </div>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.body }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <div style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>Key Themes</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Six themes carry Psalm 45 from a royal wedding to the marriage of the Lamb &mdash; the King&rsquo;s beauty,
              his righteous reign, his deity, his anointing, his bride, and the fulfillment in Christ. Tap each to open.
            </p>
            {THEMES.map((t) => {
              const isOpen = open === t.id;
              return (
                <div key={t.id}>
                  <button
                    type="button"
                    onClick={() => toggle(t.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem 1.25rem",
                      background: isOpen ? `${t.color}12` : "transparent",
                      border: `1px solid ${isOpen ? t.color + "40" : BORDER}`,
                      borderRadius: 12,
                      cursor: "pointer",
                      marginBottom: 8,
                      color: TEXT,
                      fontWeight: 700,
                      transition: "all .2s",
                    }}
                  >
                    <span>{t.title}</span>
                    <span style={{ color: t.color }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        background: `${t.color}0A`,
                        border: `1px solid ${t.color}20`,
                        borderRadius: 10,
                        padding: "1rem 1.25rem",
                        marginBottom: 8,
                      }}
                    >
                      <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "0.75rem" }} dangerouslySetInnerHTML={{ __html: t.body }} />
                      <p style={{ color: t.color, fontSize: "0.85rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Cross-references: " + t.refs }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* VERSE BY VERSE */}
        {tab === "verse" && (
          <div style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: GOLD }}>Verse by Verse</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Move through Psalm 45 in six sections, from the poet&rsquo;s overflowing praise to the joyful wedding
              procession and the promise of everlasting renown.
            </p>
            {VERSES.map((v) => {
              const isOpen = open === v.id;
              return (
                <div key={v.id}>
                  <button
                    type="button"
                    onClick={() => toggle(v.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem 1.25rem",
                      background: isOpen ? `${v.color}12` : "transparent",
                      border: `1px solid ${isOpen ? v.color + "40" : BORDER}`,
                      borderRadius: 12,
                      cursor: "pointer",
                      marginBottom: 8,
                      color: TEXT,
                      fontWeight: 700,
                      transition: "all .2s",
                    }}
                  >
                    <span>
                      <span style={{ color: v.color, fontWeight: 800 }}>{v.ref}</span>
                      <span style={{ fontWeight: 400, color: MUTED }} dangerouslySetInnerHTML={{ __html: " &mdash; " + v.title }} />
                    </span>
                    <span style={{ color: v.color }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        background: `${v.color}0A`,
                        border: `1px solid ${v.color}20`,
                        borderRadius: 10,
                        padding: "1rem 1.25rem",
                        marginBottom: 8,
                      }}
                    >
                      <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.body }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Living Psalm 45</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {APPLICATIONS.map((a) => (
                  <div
                    key={a.id}
                    style={{
                      background: `${a.color}08`,
                      border: `1px solid ${a.color}25`,
                      borderRadius: 12,
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <h3 style={{ fontWeight: 800, color: a.color, marginBottom: "0.4rem" }} dangerouslySetInnerHTML={{ __html: a.title }} />
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: a.body }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GREEN }}>
                Reflection Questions
              </h2>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {QUESTIONS.map((q, i) => (
                  <li key={i} style={{ color: MUTED, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: ROSE }}>Video Teaching</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {VIDEO_ITEMS.map((v) => (
                  <div key={v.videoId}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <p style={{ color: MUTED, fontSize: "0.85rem", marginTop: "0.5rem" }} dangerouslySetInnerHTML={{ __html: v.title }} />
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: `${PURPLE}10`,
                border: `1px solid ${PURPLE}30`,
                borderLeft: `4px solid ${PURPLE}`,
                borderRadius: 12,
                padding: "1.5rem",
              }}
            >
              <h2 style={{ fontWeight: 900, fontSize: "1.2rem", marginBottom: "0.75rem", color: PURPLE }}>Closing Prayer</h2>
              <p
                style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Lord Jesus, you are the most handsome of the sons of men, and grace is poured upon your lips. Your throne, O God, is forever and ever, and the scepter of your kingdom is a scepter of uprightness. We confess you as God enthroned, anointed beyond your companions with the oil of gladness. You loved righteousness and hated wickedness; reign over us and over all things in truth. Make us, your bride, willing to forget every rival love and to belong wholly to you. Clothe us in your righteousness, and bring us at last to the marriage of the Lamb, that your name may be remembered and praised in all generations. Amen.",
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
