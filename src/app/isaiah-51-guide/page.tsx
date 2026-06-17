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
const ACCENT = "#a78bfa";

const videoItems = [
  { id: "oY7zMaAbV3r", title: "Isaiah 51 - Look to the Rock from Which You Were Cut" },
  { id: "pZ2aNbBcW8s", title: "Awake Arm of the LORD - Isaiah 51 Study" },
  { id: "qA6bOcCdX1t", title: "Isaiah 51 Verse by Verse - Everlasting Salvation" },
  { id: "rB9cPdDeY5u", title: "Isaiah 51 Explained - Fear God Not Man" },
];

const keyThemes = [
  {
    id: "rock",
    title: "Looking to the Rock: Remembering Origins",
    verse: "Isaiah 51:1-2",
    color: TEAL,
    body: "\"Look to the rock from which you were cut and to the quarry from which you were hewn; look to Abraham, your father, and to Sarah, who gave you birth\" (vv.1-2). In seasons of discouragement, Israel is called to remember its miraculous beginnings &mdash; one man and one barren woman, from whom a great nation sprang. This is the basis for faith in future promises: the God who did it once will do it again.",
  },
  {
    id: "eden",
    title: "The Promise of Edenic Restoration",
    verse: "Isaiah 51:3",
    color: GREEN,
    body: "\"The LORD will surely comfort Zion... he will make her deserts like Eden, her wastelands like the garden of the LORD\" (v.3). The Eden imagery signals that what was lost in the fall will be restored. Restoration is not just a return to the past but a transformation beyond it.",
  },
  {
    id: "salvation",
    title: "God&apos;s Everlasting Salvation",
    verse: "Isaiah 51:8",
    color: GOLD,
    body: "\"My righteousness will last forever, my salvation through all generations\" (v.8). The transience of earthly powers (moth-eaten garments, worm-consumed wool) contrasts with the permanence of God&apos;s righteousness and salvation. What the world considers stable crumbles; what God declares stable endures forever.",
  },
  {
    id: "fear",
    title: "Fear God, Not Men",
    verse: "Isaiah 51:12",
    color: PURPLE,
    body: "\"Who are you that you fear mere mortals, human beings who are but grass?\" (v.12). The fear of man is the great spiritual disease of every generation. God names it precisely: those who fear humans have forgotten the LORD their Maker, who stretched out the heavens and laid the foundations of the earth.",
  },
  {
    id: "cup",
    title: "The Cup That Passes",
    verse: "Isaiah 51:17-23",
    color: ACCENT,
    body: "Jerusalem has drunk the cup of God&apos;s wrath to the dregs (vv.17-23). But God will take it from her hand and give it to those who tormented her. This pattern of the cup passing &mdash; from the guilty to the punisher &mdash; anticipates Christ taking the cup of wrath that should have been ours (Matthew 26:39).",
  },
];

const verseByVerse = [
  {
    ref: "vv.1-3",
    color: TEAL,
    body: "Listen to me, you who pursue righteousness; look to the rock from which you were cut; look to Abraham your father and to Sarah who gave you birth; I called him when he was only one man and I blessed him and made him many; the LORD will surely comfort Zion; he will make her deserts like Eden.",
  },
  {
    ref: "vv.4-6",
    color: GREEN,
    body: "Listen to me, my people; my justice will become a light to the nations; my righteousness draws near; the islands will look to me and wait in hope; lift up your eyes to the heavens; look at the earth beneath; the heavens will vanish like smoke; the earth will wear out like a garment; but my salvation will last forever; my righteousness will never fail.",
  },
  {
    ref: "vv.7-8",
    color: GOLD,
    body: "Hear me, you who know what is right; do not fear the reproach of mere mortals; the moth will eat them up like a garment; the worm will devour them like wool; but my righteousness will last forever; my salvation through all generations.",
  },
  {
    ref: "vv.9-11",
    color: PURPLE,
    body: "Awake, awake, arm of the LORD; was it not you who cut Rahab to pieces; was it not you who dried up the sea; the ransomed of the LORD will return; everlasting joy will crown their heads; gladness and joy will overtake them; sorrow and sighing will flee away.",
  },
  {
    ref: "vv.12-16",
    color: ACCENT,
    body: "I, even I, am he who comforts you; who are you that you fear mere mortals; you have forgotten the LORD your Maker; I am the LORD your God, who churns up the sea so that its waves roar; I have put my words in your mouth and covered you with the shadow of my hand.",
  },
  {
    ref: "vv.17-23",
    color: TEAL,
    body: "Awake, awake, rise up, Jerusalem; you have drunk from the hand of the LORD the cup of his wrath; see I have taken from your hand the cup that made you stagger; I will put it into the hands of your tormentors.",
  },
];

const applicationPoints = [
  { color: TEAL, text: "In seasons of discouragement, look back to your rock &mdash; the God who began a great work from small beginnings." },
  { color: GREEN, text: "Pray for God to restore your personal Eden and make your desert places flourish." },
  { color: GOLD, text: "Replace the fear of man with the fear of God &mdash; he churns up seas." },
  { color: PURPLE, text: "Let the permanence of God&apos;s salvation anchor you when earthly things are shifting." },
  { color: ACCENT, text: "Receive the promise that the cup of suffering will pass." },
  { color: TEAL, text: "Live with eternity in view, for moth and worm consume what God&apos;s salvation does not." },
];

type Tab = "overview" | "themes" | "verses" | "application";

export default function Isaiah51GuidePage() {
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
              background: `${TEAL}18`,
              border: `1px solid ${TEAL}40`,
              borderRadius: 8,
              padding: "4px 14px",
              fontSize: 12,
              fontWeight: 700,
              color: TEAL,
              letterSpacing: "0.08em",
              marginBottom: 16,
            }}
          >
            ISAIAH 51 &mdash; BIBLE STUDY GUIDE
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
            Look to the Rock from Which You Were Cut
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
            Isaiah 51 &mdash; 23 verses of triple awakening, Edenic promise, and the
            cup that passes from God&apos;s people to their tormentors.
          </p>
          <div
            style={{
              display: "inline-block",
              background: `${GOLD}18`,
              border: `1px solid ${GOLD}40`,
              borderRadius: 6,
              padding: "3px 12px",
              fontSize: 13,
              color: GOLD,
              fontWeight: 600,
            }}
          >
            Isaiah 51:1-23
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
                background: activeTab === t.id ? TEAL : "transparent",
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
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 20, marginBottom: 16 }}>
                Chapter Overview
              </h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 51 is a chapter of triple awakening &mdash; God calls his people to awake three times (v.9, v.17, and 52:1), while also calling on his own arm to awake (v.9). The chapter opens with a summons to those who pursue righteousness: look to the rock (Abraham) from which you were cut, to the quarry from which you were hewn. This is a call to remember origins and identity. God promises to comfort Zion, to make her wilderness like Eden, her desert like the garden of the LORD. The middle section addresses the fear of man: &quot;Who are you that you fear mortal humans? But I am the LORD your God, who churns up the sea so that its waves roar&quot; (vv.12-15). The chapter ends with God calling Jerusalem to awake from the cup of staggering &mdash; and promising that the cup will pass to her tormentors.",
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
                { label: "Chapter", value: "51" },
                { label: "Verses", value: "23" },
                { label: "Section", value: "Deutero-Isaiah (chs. 40-55)" },
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
                background: `${TEAL}0f`,
                border: `1px solid ${TEAL}35`,
                borderRadius: 14,
                padding: 24,
                marginBottom: 28,
              }}
            >
              <div style={{ color: TEAL, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>
                KEY VERSE
              </div>
              <blockquote
                style={{
                  margin: 0,
                  padding: "0 0 0 16px",
                  borderLeft: `3px solid ${TEAL}`,
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
                      "&quot;I, even I, am he who comforts you. Who are you that you fear mere mortals, human beings who are but grass, that you forget the LORD your Maker, who stretches out the heavens and who lays the foundations of the earth?&quot;",
                  }}
                />
                <cite style={{ color: TEAL, fontSize: 13, fontWeight: 700, fontStyle: "normal" }}>
                  Isaiah 51:12-13
                </cite>
              </blockquote>
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
                Structure of Isaiah 51
              </h3>
              {[
                { range: "vv.1-3", title: "Summons to Remember the Rock", color: TEAL, desc: "Look to Abraham and Sarah; God will comfort Zion and restore her like Eden." },
                { range: "vv.4-6", title: "The Everlasting Law Goes Forth", color: GREEN, desc: "God&apos;s justice becomes a light to the nations; heavens and earth perish but salvation endures." },
                { range: "vv.7-8", title: "Do Not Fear Human Reproach", color: GOLD, desc: "Those who know righteousness must not dread mortal mockers; God&apos;s salvation outlasts them all." },
                { range: "vv.9-11", title: "The Arm of the LORD Awakens", color: PURPLE, desc: "Israel calls on the LORD&apos;s mighty arm that divided the sea; the ransomed will return with joy." },
                { range: "vv.12-16", title: "I Am Your Comforter &mdash; Not Man", color: ACCENT, desc: "God confronts the fear of man directly: he who made the cosmos comforts you; do not forget him." },
                { range: "vv.17-23", title: "Awake, Jerusalem &mdash; The Cup Passes", color: TEAL, desc: "Jerusalem drank the cup of wrath; now God takes it from her hand and gives it to her oppressors." },
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
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 20, margin: "0 0 8px" }}>
                Key Themes in Isaiah 51
              </h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Five interlocking themes run through Isaiah 51 &mdash; each addressing the people of God in their discouragement and calling them to a larger vision of who God is.",
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
                        <div style={{ color: theme.color, fontWeight: 800, fontSize: 15 }}>
                          {theme.title}
                        </div>
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

            {/* Thematic summary */}
            <div
              style={{
                background: `${GOLD}0e`,
                border: `1px solid ${GOLD}35`,
                borderRadius: 12,
                padding: 22,
                marginTop: 8,
              }}
            >
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>
                THEMATIC UNITY
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "These five themes form a coherent argument: remember your origins (the Rock), trust God&apos;s promise of restoration (Eden), rest in his everlasting salvation (not moth-eaten), stop fearing men (he churns seas), and receive the transfer of the cup (from you to your tormentors). Together they answer the question: how do you remain faithful when everything around you says God has forgotten you?",
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
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 20, margin: "0 0 6px" }}>
                Verse by Verse &mdash; Isaiah 51:1-23
              </h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                All 23 verses in six strophes, following the natural movement of the chapter.
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

            {/* Cross-reference panel */}
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
                Key Cross-References
              </h3>
              {[
                { ref: "Genesis 12:1-3", note: "The original call of Abraham &mdash; one man, one promise, a great nation. Isaiah 51:1-2 calls Israel to look back here." },
                { ref: "Genesis 2:8-15", note: "The Garden of Eden &mdash; the template for the restoration promise of v.3. Wilderness becoming Eden is new-creation language." },
                { ref: "Exodus 14:21-22", note: "The drying of the sea (v.10) &mdash; the Exodus miracle that the arm of the LORD performed. Past redemption grounds future hope." },
                { ref: "Matthew 26:39", note: "Jesus prays that the cup pass from him. Isaiah 51:22-23 anticipates this: the cup of wrath passes to the tormentor." },
                { ref: "Revelation 21:1-5", note: "The ultimate fulfillment of v.3 &mdash; God makes all things new; the wilderness becomes the garden of God forever." },
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
                      background: `${PURPLE}18`,
                      border: `1px solid ${PURPLE}40`,
                      borderRadius: 5,
                      padding: "2px 8px",
                      fontSize: 11,
                      fontWeight: 700,
                      color: PURPLE,
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

            {/* Structural note: three awakenings */}
            <div
              style={{
                background: `${ACCENT}0d`,
                border: `1px solid ${ACCENT}30`,
                borderRadius: 12,
                padding: 22,
                marginTop: 14,
              }}
            >
              <div style={{ color: ACCENT, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>
                LITERARY NOTE: THE THREE AWAKENINGS
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The double imperative &quot;Awake, awake&quot; (uri, uri) appears three times in close succession: in 51:9 (calling on the arm of the LORD to awake), in 51:17 (calling Jerusalem to awake from the cup of staggering), and in 52:1 (calling Zion to awake and clothe herself). This triple awakening is one of the most striking rhetorical features of Second Isaiah. The word that Israel uses to call on God (v.9) is then turned back on Israel herself (v.17, 52:1): Israel wants God to awake &mdash; but God in turn calls Israel to awake. Both are needed. The interaction of divine initiative and human response is baked into the very grammar of the passage.",
                }}
              />
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
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 20, margin: "0 0 8px" }}>
                Application
              </h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                Six ways to move from study to lived obedience.
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

            {/* Reflection prompts */}
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
                Reflection Questions
              </h3>
              {[
                { q: "Where have you been looking for comfort instead of to God?", hint: "Isaiah 51:12 &mdash; the comfort God offers is greater than any human source." },
                { q: "What &quot;rock&quot; of past faithfulness can you point to in your own history with God?", hint: "vv.1-2 &mdash; Israel is told to look back at Abraham. What is your personal Abraham story?" },
                { q: "What do you fear in the opinion or power of people that you would not fear if you remembered who made the heavens?", hint: "v.13 &mdash; the fear of man comes from forgetting the LORD your Maker." },
                { q: "What &quot;deserts&quot; in your life need Edenic restoration?", hint: "v.3 &mdash; God promises to make desert places like the garden of the LORD. Bring yours to him." },
                { q: "Are you waiting for a cup of suffering to pass? How does the promise of vv.22-23 speak to that season?", hint: "God takes the cup from Jerusalem&apos;s hand. He is still sovereign over the cups we drink." },
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
                background: `${GREEN}0e`,
                border: `1px solid ${GREEN}35`,
                borderRadius: 14,
                padding: 24,
              }}
            >
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 12 }}>
                CLOSING PRAYER PROMPT
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Lord, you are the God who called one man from Ur and made him into a multitude. You are the God who dried the sea and led your people through. You are the one who comforts me &mdash; not a human arm that will fail, but the arm that hung the heavens and laid the earth&apos;s foundation. Forgive me for the fear of man. Restore my deserts. Take from my hand the cup I have been carrying, and remind me that my salvation does not wear out &mdash; it lasts forever. Awake in me what needs waking. Amen.",
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
                marginTop: 24,
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
