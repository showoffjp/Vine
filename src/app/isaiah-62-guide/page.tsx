"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const ROSE = "#E11D48";
const ACCENT = "#a78bfa";

const videoItems = [
  { id: "sC4dQeFfZ9v", title: "Isaiah 62 - For Zion Sake I Will Not Keep Silent" },
  { id: "tD8eRfGgA3w", title: "You Will Be Called by a New Name - Isaiah 62 Study" },
  { id: "uE2fSgHhB7x", title: "Isaiah 62 Explained - Watchmen on the Walls" },
  { id: "vF6gThIiC1y", title: "Isaiah 62 Verse by Verse - The Holy People Redeemed" },
];

const keyThemes = [
  {
    id: "advocacy",
    title: "Passionate Advocacy for God&apos;s People",
    verse: "Isaiah 62:1",
    color: TEAL,
    body: "Whether God or the prophet speaks, the posture is the same: persistent, vocal, unrelenting advocacy for Zion&apos;s salvation. This is the model for both God&apos;s own heart and the calling of intercessors &mdash; to pray and not stop until the promise is fulfilled.",
  },
  {
    id: "newname",
    title: "A New Name for a New Identity",
    verse: "Isaiah 62:2-4",
    color: PURPLE,
    body: "In the ancient world, a name was not just a label but an identity. Israel&apos;s old names &mdash; Deserted, Desolate &mdash; spoke of shame and abandonment. The new names &mdash; Hephzibah, Beulah, Sought After &mdash; speak of delight, marriage, and desirability. God renames his people according to his love, not their history.",
  },
  {
    id: "bridegroom",
    title: "God as Bridegroom Delighting in His Bride",
    verse: "Isaiah 62:5",
    color: ROSE,
    body: "\"As a bridegroom rejoices over his bride, so will your God rejoice over you\" (v.5). This marital image of God&apos;s delight in his people is one of Scripture&apos;s most intimate. It is not just that God tolerates his people or endures them &mdash; he rejoices, he delights, he pursues.",
  },
  {
    id: "watchmen",
    title: "Watchmen Who Give God No Rest",
    verse: "Isaiah 62:6-7",
    color: GOLD,
    body: "\"You who call on the LORD, give yourselves no rest, and give him no rest till he establishes Jerusalem\" (vv.6-7). This is a theology of persistent intercession modeled on Jacob&apos;s wrestling with the angel (Genesis 32): holy boldness in prayer, pressing God until the promise comes. It is not unbelief but faith that refuses to settle for the promise unfulfilled.",
  },
  {
    id: "holypeople",
    title: "The Redeemed Called the Holy People",
    verse: "Isaiah 62:12",
    color: GREEN,
    body: "The final verse names God&apos;s redeemed people &quot;the Holy People, the Redeemed of the LORD.&quot; Holiness and redemption are inseparable. The people who belong to God are distinguished not by their achievement but by what God has done for them &mdash; and called to live visibly as those who bear his name.",
  },
];

const verseByVerse = [
  {
    ref: "vv.1-2",
    color: TEAL,
    body: "For Zion&apos;s sake I will not keep silent; for Jerusalem&apos;s sake I will not remain quiet; till her vindication shines out like the dawn; her salvation like a blazing torch; the nations will see your vindication and all kings your glory; you will be called by a new name that the mouth of the LORD will bestow.",
  },
  {
    ref: "vv.3-5",
    color: PURPLE,
    body: "You will be a crown of splendor in the LORD&apos;s hand; a royal diadem in the hand of your God; no longer will they call you Deserted; or name your land Desolate; but you will be called Hephzibah, and your land Beulah; for the LORD will take delight in you; as a bridegroom rejoices over his bride, so will your God rejoice over you.",
  },
  {
    ref: "vv.6-7",
    color: GOLD,
    body: "I have posted watchmen on your walls, Jerusalem; they will never be silent day or night; you who call on the LORD, give yourselves no rest; and give him no rest till he establishes Jerusalem and makes her the praise of the earth.",
  },
  {
    ref: "vv.8-9",
    color: GREEN,
    body: "The LORD has sworn by his right hand and by his mighty arm: Never again will I give your grain as food for your enemies; but those who harvest it will eat it and praise the LORD; and those who gather the grapes will drink it in the courts of my sanctuary.",
  },
  {
    ref: "vv.10-12",
    color: ROSE,
    body: "Pass through, pass through the gates; prepare the way for the people; build up, build up the highway; remove the stones; raise a banner for the nations; see, your Savior comes; see, his reward is with him; they will be called the Holy People; the Redeemed of the LORD; and you will be called Sought After; the City No Longer Deserted.",
  },
];

const applicationPoints = [
  { color: TEAL, text: "Adopt the posture of persistent intercession for your church, city, or nation &mdash; do not keep silent." },
  { color: PURPLE, text: "Receive your new name from God, not from your past or your failures." },
  { color: ROSE, text: "Rest in the reality that God delights in you as a bridegroom." },
  { color: GOLD, text: "Take your post as a watchman in prayer." },
  { color: GREEN, text: "Live visibly as one of the Holy People &mdash; Redeemed of the LORD &mdash; in your community." },
  { color: ACCENT, text: "Pray without ceasing until the promises of God are established." },
];

type Tab = "overview" | "themes" | "verses" | "application";

export default function Isaiah62GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "themes", label: "Key Themes" },
    { id: "verses", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        background: BG,
        minHeight: "100vh",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", padding: "48px 0 36px" }}>
          <div
            style={{
              display: "inline-block",
              background: `${ROSE}18`,
              border: `1px solid ${ROSE}40`,
              borderRadius: 8,
              padding: "4px 14px",
              fontSize: 12,
              fontWeight: 700,
              color: ROSE,
              letterSpacing: "0.08em",
              marginBottom: 16,
            }}
          >
            ISAIAH 62 &mdash; BIBLE STUDY GUIDE
          </div>
          <h1
            style={{
              fontSize: "clamp(26px, 5vw, 42px)",
              fontWeight: 900,
              color: TEXT,
              marginBottom: 12,
              lineHeight: 1.2,
            }}
          >
            For Zion&apos;s Sake I Will Not Keep Silent
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              maxWidth: 600,
              margin: "0 auto 12px",
              lineHeight: 1.7,
            }}
          >
            Isaiah 62 &mdash; 12 verses of passionate intercession, new names, the
            bridegroom&apos;s delight, and watchmen who give God no rest.
          </p>
          <div
            style={{
              display: "inline-block",
              background: `${PURPLE}18`,
              border: `1px solid ${PURPLE}40`,
              borderRadius: 6,
              padding: "3px 12px",
              fontSize: 13,
              color: PURPLE,
              fontWeight: 600,
            }}
          >
            Isaiah 62:1-12
          </div>
        </div>

        {/* Tab Navigation */}
        <div
          style={{
            display: "flex",
            gap: 4,
            background: CARD,
            borderRadius: 12,
            padding: 5,
            border: `1px solid ${BORDER}`,
            marginBottom: 32,
          }}
        >
          {tabs.map((t) => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "10px 8px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.id ? ROSE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
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

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            {/* Overview card */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 28,
                marginBottom: 28,
              }}
            >
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 20, marginBottom: 16 }}>
                Chapter Overview
              </h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 62 is a chapter of passionate intercession and prophetic zeal for the restoration of Zion. &quot;For Zion&apos;s sake I will not keep silent, for Jerusalem&apos;s sake I will not remain quiet, till her vindication shines out like the dawn, her salvation like a blazing torch&quot; (v.1). This is either God speaking or the prophet speaking on God&apos;s behalf &mdash; and both are models of persistent, vocal advocacy for God&apos;s people. The chapter celebrates Zion&apos;s new name &mdash; no longer &quot;Deserted&quot; or &quot;Desolate&quot; but &quot;Hephzibah&quot; (my delight is in her) and &quot;Beulah&quot; (married). God delights in his people as a bridegroom delights in his bride. Watchmen are set on the walls who must never be silent &mdash; they are to give God no rest until he establishes Jerusalem. The chapter ends with a proclamation: &quot;They will be called the Holy People, the Redeemed of the LORD; and you will be called Sought After, the City No Longer Deserted.&quot;",
                }}
              />
            </div>

            {/* Context strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 14,
                marginBottom: 28,
              }}
            >
              {[
                { label: "Book", value: "Isaiah" },
                { label: "Chapter", value: "62" },
                { label: "Verses", value: "12" },
                { label: "Section", value: "Trito-Isaiah (chs. 56-66)" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 10,
                    padding: "14px 16px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", marginBottom: 4 }}>
                    {item.label.toUpperCase()}
                  </div>
                  <div style={{ color: TEXT, fontSize: 15, fontWeight: 700 }}>{item.value}</div>
                </div>
              ))}
            </div>

            {/* Key verse */}
            <div
              style={{
                background: `${ROSE}0f`,
                border: `1px solid ${ROSE}35`,
                borderRadius: 14,
                padding: 24,
                marginBottom: 28,
              }}
            >
              <div style={{ color: ROSE, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>
                KEY VERSE
              </div>
              <blockquote
                style={{
                  margin: 0,
                  padding: "0 0 0 16px",
                  borderLeft: `3px solid ${ROSE}`,
                }}
              >
                <p
                  style={{
                    color: TEXT,
                    fontSize: 16,
                    lineHeight: 1.8,
                    fontStyle: "italic",
                    margin: "0 0 8px",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "&quot;For Zion&apos;s sake I will not keep silent, for Jerusalem&apos;s sake I will not remain quiet, till her vindication shines out like the dawn, her salvation like a blazing torch.&quot;",
                  }}
                />
                <cite style={{ color: ROSE, fontSize: 13, fontWeight: 700, fontStyle: "normal" }}>
                  Isaiah 62:1
                </cite>
              </blockquote>
            </div>

            {/* New names panel */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 24,
                marginBottom: 28,
              }}
            >
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 16 }}>
                The New Names of Zion
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                {[
                  { old: "Deserted", hebrew: "Azubah", newN: "Hephzibah", meaning: "My delight is in her", color: ROSE },
                  { old: "Desolate", hebrew: "Shemamah", newN: "Beulah", meaning: "Married", color: PURPLE },
                  { old: "Unnamed city", hebrew: "", newN: "Sought After", meaning: "Sought After", color: GOLD },
                  { old: "Deserted city", hebrew: "", newN: "City No Longer Deserted", meaning: "Inhabited by God", color: GREEN },
                ].map((n) => (
                  <div
                    key={n.newN}
                    style={{
                      background: BG,
                      border: `1px solid ${n.color}30`,
                      borderRadius: 10,
                      padding: 16,
                    }}
                  >
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 4, letterSpacing: "0.06em" }}>
                      OLD NAME
                    </div>
                    <div style={{ color: MUTED, fontStyle: "italic", fontSize: 14, marginBottom: 10 }}>
                      {n.old}
                    </div>
                    <div style={{ color: n.color, fontSize: 11, fontWeight: 700, marginBottom: 4, letterSpacing: "0.06em" }}>
                      NEW NAME
                    </div>
                    <div style={{ color: n.color, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>
                      {n.newN}
                    </div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{n.meaning}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Structure overview */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 24,
                marginBottom: 28,
              }}
            >
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 17, marginBottom: 16 }}>
                Structure of Isaiah 62
              </h3>
              {[
                { range: "vv.1-2", title: "The Vow of Unsilence", color: TEAL, desc: "God (or the prophet) pledges not to keep silent until Zion&apos;s vindication blazes out like dawn." },
                { range: "vv.3-5", title: "New Names, Bridal Delight", color: PURPLE, desc: "Zion is a crown in God&apos;s hand; old names of shame give way to Hephzibah and Beulah; God rejoices as a bridegroom." },
                { range: "vv.6-7", title: "The Watchmen Commanded", color: GOLD, desc: "Watchmen are posted on the walls and charged to be unceasing in their intercession until Jerusalem is established." },
                { range: "vv.8-9", title: "God&apos;s Sworn Oath", color: GREEN, desc: "The LORD swears by his arm: no more will enemies eat Zion&apos;s harvest; the people will enjoy the fruit of their labor." },
                { range: "vv.10-12", title: "The Highway and the Coming Savior", color: ROSE, desc: "A road is prepared; the Savior comes with his reward; the people are named Holy People, Redeemed, Sought After." },
              ].map((s) => (
                <div
                  key={s.range}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    marginBottom: 14,
                    paddingBottom: 14,
                    borderBottom: `1px solid ${BORDER}`,
                  }}
                >
                  <div
                    style={{
                      background: `${s.color}20`,
                      border: `1px solid ${s.color}50`,
                      borderRadius: 6,
                      padding: "3px 9px",
                      fontSize: 11,
                      fontWeight: 700,
                      color: s.color,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    {s.range}
                  </div>
                  <div>
                    <div style={{ color: s.color, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>
                      {s.title}
                    </div>
                    <p
                      style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: s.desc }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Videos in overview */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 24,
              }}
            >
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, marginBottom: 18 }}>
                Teaching Videos
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {videoItems.map((v) => (
                  <div
                    key={v.id}
                    style={{
                      background: BG,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div style={{ padding: "12px 14px" }}>
                      <p style={{ color: GREEN, fontWeight: 700, fontSize: 14, margin: 0 }}>{v.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 22,
                marginBottom: 24,
              }}
            >
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 20, margin: "0 0 8px" }}>
                Key Themes in Isaiah 62
              </h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Five themes run through these 12 verses &mdash; each one an invitation to inhabit a different dimension of God&apos;s relationship with his people.",
                }}
              />
            </div>

            {keyThemes.map((theme) => {
              const isOpen = openTheme === theme.id;
              return (
                <div
                  key={theme.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${isOpen ? theme.color + "60" : BORDER}`,
                    borderRadius: 12,
                    marginBottom: 12,
                    overflow: "hidden",
                    transition: "border-color 0.15s",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenTheme(isOpen ? null : theme.id)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: "18px 20px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: theme.color,
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <div
                          style={{ color: theme.color, fontWeight: 800, fontSize: 15 }}
                          dangerouslySetInnerHTML={{ __html: theme.title }}
                        />
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{theme.verse}</div>
                      </div>
                    </div>
                    <span
                      style={{
                        color: theme.color,
                        fontSize: 22,
                        fontWeight: 300,
                        lineHeight: 1,
                        flexShrink: 0,
                        marginLeft: 12,
                      }}
                    >
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: "0 20px 20px",
                        borderTop: `1px solid ${theme.color}25`,
                      }}
                    >
                      <div style={{ height: 16 }} />
                      <p
                        style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: theme.body }}
                      />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Bridegroom focus */}
            <div
              style={{
                background: `${ROSE}0d`,
                border: `1px solid ${ROSE}35`,
                borderRadius: 12,
                padding: 22,
                marginTop: 8,
              }}
            >
              <div style={{ color: ROSE, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>
                THE MARITAL METAPHOR IN SCRIPTURE
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The image of God as bridegroom and Israel as bride runs from Hosea (chapters 1-3) through Ezekiel 16, through Isaiah 54 and 62, to the Song of Songs, and finds its New Testament culmination in Ephesians 5:25-32 and Revelation 19:7-9 and 21:2. Isaiah 62:5 is a central station on this canonical arc. The bridegroom image insists that God&apos;s relationship with his people is not merely covenantal duty but delighted longing &mdash; the love of a husband who has sought and found his bride.",
                }}
              />
            </div>

            {/* Thematic note on intercession */}
            <div
              style={{
                background: `${GOLD}0e`,
                border: `1px solid ${GOLD}35`,
                borderRadius: 12,
                padding: 22,
                marginTop: 14,
              }}
            >
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>
                THEOLOGY OF PERSISTENT INTERCESSION
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 62:6-7 is one of the boldest intercession texts in the Bible: the watchmen are to give God no rest until he acts. This is not manipulating God but aligning with his own stated will. God appoints the watchmen and then commands them to press him. It is the same logic as Luke 18:1-8 (the persistent widow) and Genesis 32:26 (Jacob refusing to let go). The God who commands persistent prayer is the same God who will answer it. The watchman who gives God no rest does so because God&apos;s own heart is already set on Zion&apos;s restoration.",
                }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verses" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 22,
                marginBottom: 24,
              }}
            >
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 20, margin: "0 0 6px" }}>
                Verse by Verse &mdash; Isaiah 62:1-12
              </h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                All 12 verses in five strophes, following the movement of the chapter from vow to vindication.
              </p>
            </div>

            {verseByVerse.map((section, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: 22,
                  marginBottom: 14,
                  borderLeft: `4px solid ${section.color}`,
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: `${section.color}18`,
                    border: `1px solid ${section.color}45`,
                    borderRadius: 6,
                    padding: "2px 10px",
                    fontSize: 12,
                    fontWeight: 700,
                    color: section.color,
                    marginBottom: 12,
                  }}
                >
                  {section.ref}
                </div>
                <p
                  style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: section.body }}
                />
              </div>
            ))}

            {/* Word study panel */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 24,
                marginTop: 8,
              }}
            >
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 16, marginBottom: 16 }}>
                Word Studies
              </h3>
              {[
                { word: "Hephzibah", lang: "Hebrew", meaning: "My delight is in her (chephtsi-bah)", note: "The name given to the land (v.4). It is also the name of Hezekiah&apos;s mother (2 Kings 21:1), suggesting continuity with David&apos;s line. The name transforms the land from a place of abandonment to a place of divine delight." },
                { word: "Beulah", lang: "Hebrew", meaning: "Married (ba&apos;al)", note: "The verb ba&apos;al means to become master or husband of. The land will be &quot;married&quot; &mdash; no longer widowed and deserted but in covenant union with its God. This language is picked up in Revelation 21:2." },
                { word: "Watchmen (shomrim)", lang: "Hebrew", meaning: "Guards, keepers, those who watch", note: "The same root used of the keeper of the vineyard (Isaiah 27:3) and of the prophet as watchman (Ezekiel 33:7). To be a shomer is a vocation of vigilance &mdash; eyes on the horizon, voice ready to cry out." },
                { word: "Vindication (tsedeq)", lang: "Hebrew", meaning: "Righteousness, justice, rightness", note: "Not merely vindication in a legal sense but the righting of all that is wrong &mdash; the dawning of the age when God&apos;s righteousness fills the earth as the waters cover the sea (Habakkuk 2:14)." },
              ].map((ws) => (
                <div
                  key={ws.word}
                  style={{
                    background: BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 10,
                    padding: 16,
                    marginBottom: 12,
                  }}
                >
                  <div style={{ display: "flex", gap: 10, alignItems: "baseline", marginBottom: 6 }}>
                    <span style={{ color: PURPLE, fontWeight: 800, fontSize: 16 }}>{ws.word}</span>
                    <span
                      style={{
                        background: `${PURPLE}18`,
                        color: PURPLE,
                        borderRadius: 4,
                        padding: "1px 7px",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {ws.lang}
                    </span>
                  </div>
                  <div style={{ color: GOLD, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{ws.meaning}</div>
                  <p
                    style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: ws.note }}
                  />
                </div>
              ))}
            </div>

            {/* Cross-references */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 24,
                marginTop: 14,
              }}
            >
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 16, marginBottom: 16 }}>
                Key Cross-References
              </h3>
              {[
                { ref: "Hosea 2:16-20", note: "God betroths Israel to himself forever &mdash; in righteousness, love, and faithfulness. The marital metaphor that Isaiah 62 continues." },
                { ref: "Genesis 32:26", note: "Jacob refuses to let the angel go: &quot;I will not let you go unless you bless me.&quot; This is the posture of the watchman in Isaiah 62:7 &mdash; holy boldness that will not release the promise." },
                { ref: "Luke 18:1-8", note: "The parable of the persistent widow: Jesus teaches that God&apos;s people should pray and not give up. Isaiah 62:6-7 is the Old Testament precedent." },
                { ref: "Ephesians 5:25-27", note: "Christ loves the church as a husband loves his bride, giving himself to present her holy and blameless. Isaiah 62:5 anticipates this ultimate bridegroom." },
                { ref: "Revelation 21:2", note: "The New Jerusalem comes down as a bride adorned for her husband. Isaiah 62 is fulfilled: the city is no longer desolate but sought after, the city of God." },
              ].map((cr) => (
                <div
                  key={cr.ref}
                  style={{
                    display: "flex",
                    gap: 12,
                    marginBottom: 12,
                    paddingBottom: 12,
                    borderBottom: `1px solid ${BORDER}`,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      background: `${TEAL}18`,
                      border: `1px solid ${TEAL}40`,
                      borderRadius: 5,
                      padding: "2px 8px",
                      fontSize: 11,
                      fontWeight: 700,
                      color: TEAL,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {cr.ref}
                  </span>
                  <p
                    style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: cr.note }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 22,
                marginBottom: 24,
              }}
            >
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 20, margin: "0 0 8px" }}>
                Application
              </h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                Six ways to move from study to lived obedience in light of Isaiah 62.
              </p>
            </div>

            {applicationPoints.map((pt, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: 20,
                  marginBottom: 12,
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: `${pt.color}20`,
                    border: `1px solid ${pt.color}55`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: pt.color,
                    fontWeight: 800,
                    fontSize: 13,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  {i + 1}
                </div>
                <p
                  style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: pt.text }}
                />
              </div>
            ))}

            {/* Watchman practice */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 24,
                marginTop: 8,
                marginBottom: 24,
              }}
            >
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 16, marginBottom: 16 }}>
                The Watchman Practice
              </h3>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "To take your post as a watchman on the walls (v.6) is a concrete calling, not a metaphor. Isaiah describes watchmen who are never silent day or night &mdash; who give themselves no rest and give God no rest. What would it look like to adopt this posture for a specific community, city, or person?",
                }}
              />
              {[
                { step: "Name the walls you are watching over", desc: "What church, family, neighborhood, city, or nation has God placed on your heart? Name it specifically. Watchmen are posted on particular walls." },
                { step: "Establish a regular intercession rhythm", desc: "The watchmen never fell silent day or night. This does not mean ceaseless verbal prayer &mdash; it means an orientation of heart that regularly returns to the named thing in prayer. A daily time, however brief, anchors the rhythm." },
                { step: "Pray the text over your watch", desc: "Use Isaiah 62:1-12 as a prayer template: &quot;For [name of city]&apos;s sake I will not keep silent... I am asking you to make [name] Sought After, No Longer Deserted.&quot; Let the text shape your intercession." },
                { step: "Report what you see", desc: "Watchmen cried out what they saw approaching. Part of the calling is to announce &mdash; in prayer and in community &mdash; when you see signs of God&apos;s answer breaking through, however small." },
              ].map((step, i) => (
                <div
                  key={i}
                  style={{
                    background: BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 10,
                    padding: 16,
                    marginBottom: 10,
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      background: `${GOLD}20`,
                      border: `1px solid ${GOLD}50`,
                      borderRadius: "50%",
                      width: 24,
                      height: 24,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: GOLD,
                      fontWeight: 800,
                      fontSize: 12,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ color: GOLD, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{step.step}</div>
                    <p
                      style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: step.desc }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Reflection questions */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 24,
                marginBottom: 24,
              }}
            >
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 16, marginBottom: 16 }}>
                Reflection Questions
              </h3>
              {[
                { q: "What name has shame or failure given you that God wants to replace?", hint: "vv.2-4 &mdash; God renames his people. Old names like Deserted and Desolate are displaced by Hephzibah and Beulah. What old name are you still living under?" },
                { q: "Do you believe that God delights in you as a bridegroom delights in his bride?", hint: "v.5 &mdash; This is not a metaphor about fondness but about joy. What makes it hard to receive this?" },
                { q: "What is the persistent prayer you have not yet given up on?", hint: "vv.6-7 &mdash; The watchmen are commanded to give God no rest. Is there a promise you have grown quiet about?" },
                { q: "For whose sake will you refuse to keep silent?", hint: "v.1 &mdash; The chapter opens with a commitment not to be silent. Who in your community needs someone to advocate for them before God?" },
                { q: "How does knowing you are called &quot;the Holy People, the Redeemed of the LORD&quot; change how you carry yourself this week?", hint: "v.12 &mdash; Identity shapes behavior. You are named before you act. Let the name lead." },
              ].map((rq, i) => (
                <div
                  key={i}
                  style={{
                    background: BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 10,
                    padding: 16,
                    marginBottom: 12,
                  }}
                >
                  <p
                    style={{ color: TEXT, fontWeight: 700, fontSize: 14, margin: "0 0 6px" }}
                    dangerouslySetInnerHTML={{ __html: rq.q }}
                  />
                  <p
                    style={{ color: MUTED, fontSize: 12, lineHeight: 1.65, margin: 0, fontStyle: "italic" }}
                    dangerouslySetInnerHTML={{ __html: rq.hint }}
                  />
                </div>
              ))}
            </div>

            {/* Prayer prompt */}
            <div
              style={{
                background: `${ROSE}0e`,
                border: `1px solid ${ROSE}35`,
                borderRadius: 14,
                padding: 24,
                marginBottom: 24,
              }}
            >
              <div style={{ color: ROSE, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 12 }}>
                CLOSING PRAYER PROMPT
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Lord, for the sake of your people I will not keep silent. I take my post on the wall. I give myself no rest and ask you for no rest until you establish what you have promised. You have named me Hephzibah &mdash; your delight is in me &mdash; and I receive that name today. Rename the places in me that still answer to Deserted and Desolate. Let your vindication shine out like the dawn. Come, Savior, with your reward. Make your people what you have already declared them to be: the Holy People, the Redeemed of the LORD, Sought After, the city of God. Amen.",
                }}
              />
            </div>

            {/* Videos at bottom of application */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 24,
              }}
            >
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, marginBottom: 18 }}>
                Further Study: Teaching Videos
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {videoItems.map((v) => (
                  <div
                    key={v.id}
                    style={{
                      background: BG,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div style={{ padding: "12px 14px" }}>
                      <p style={{ color: GREEN, fontWeight: 700, fontSize: 14, margin: 0 }}>{v.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
