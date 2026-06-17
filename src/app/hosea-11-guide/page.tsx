"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const videoItems = [
  { id: "oY6zMaAbV1r", title: "Hosea 11 - When Israel Was a Child I Loved Him" },
  { id: "pZ1aNbBcW5s", title: "How Can I Give You Up Ephraim - Hosea 11 Study" },
  { id: "qA5bOcCdX9t", title: "Hosea 11 Verse by Verse - God Tender Love Endures" },
  { id: "rB8cPdDeY4u", title: "Hosea 11 Explained - The Divine Parental Heart" },
];

const themes = [
  {
    title: "God's Parental Love",
    color: "#3a7d56",
    body: "The dominant metaphor of Hosea 11 is parenthood &mdash; specifically fatherly (and in some translations, motherly) love. God taught Israel to walk, carried them in his arms, bent down to feed them. This is not the image of a distant sovereign but an intimate, hands-on parent. The God of the prophets is not cold and impersonal but warmly relational, emotionally invested in his people.",
  },
  {
    title: "The Heartbreak of Unreturned Love",
    color: "#6B4FBB",
    body: "The tragedy of the chapter is that Israel refused to return. &quot;The more they were called, the more they went away from me&quot; (v.2). This is the sorrow of unreturned love &mdash; not weakness in God but the divine choice to love freely rather than coercively. God does not force love. He calls, woos, disciplines, and waits. But the human will can refuse.",
  },
  {
    title: "&quot;How Can I Give You Up?&quot;",
    color: "#D97706",
    body: "The emotional climax of the chapter is God&apos;s own inner struggle: &quot;How can I give you up, Ephraim? How can I hand you over, Israel? How can I treat you like Admah? How can I make you like Zeboiim? My heart is changed within me; all my compassion is aroused&quot; (v.8). This language describes something like divine anguish &mdash; not that God is confused, but that his love for his people is so fierce that even deserved judgment is not emotionally simple. This is the God who &quot;so loved the world&quot; (John 3:16).",
  },
  {
    title: "&quot;I Am God and Not a Man&quot;",
    color: "#0D9488",
    body: "The resolution of God&apos;s inner struggle comes in verse 9: &quot;I will not carry out my fierce anger, nor will I devastate Ephraim again. For I am God, and not a man &mdash; the Holy One among you. I will not come against their cities.&quot; God&apos;s refusal to destroy is grounded not in Israel&apos;s merit but in God&apos;s divine nature. His holiness is expressed not in consuming wrath alone but in consuming love. This is the scandalous good news: God is better than we deserve.",
  },
  {
    title: "The Lion's Roar and the Return",
    color: "#E11D48",
    body: "The chapter ends with a stunning image: God will roar like a lion, and his children will come trembling from the west, like birds from Egypt and doves from Assyria. The call of God for his people to return is not a gentle suggestion but a lion&apos;s roar. The response is trembling but homecoming. This is the pattern of revival: God roars through his word, his people are undone, and they come home.",
  },
];

const verses = [
  {
    ref: "vv. 1-4",
    color: "#3a7d56",
    body: "When Israel was a child I loved him; and out of Egypt I called my son; but the more they were called, the more they went away from me; they sacrificed to the Baals and they burned incense to images; it was I who taught Ephraim to walk, taking them by the arms; but they did not realize it was I who healed them; I led them with cords of human kindness, with ties of love; to them I was like one who lifts a little child to the cheek; and I bent down to feed them.",
  },
  {
    ref: "vv. 5-7",
    color: "#6B4FBB",
    body: "Will they not return to Egypt and will not Assyria rule over them because they refuse to repent? A sword will flash in their cities; it will devour their false prophets and put an end to their plans; my people are determined to turn from me; even though they call to the Most High, he will by no means exalt them.",
  },
  {
    ref: "vv. 8-9",
    color: "#D97706",
    body: "How can I give you up Ephraim? How can I hand you over Israel? How can I treat you like Admah? How can I make you like Zeboiim? My heart is changed within me; all my compassion is aroused; I will not carry out my fierce anger; nor will I devastate Ephraim again; for I am God and not a man &mdash; the Holy One among you; I will not come against their cities.",
  },
  {
    ref: "vv. 10-11",
    color: "#0D9488",
    body: "They will follow the LORD; he will roar like a lion; when he roars, his children will come trembling from the west; they will come from Egypt, trembling like sparrows, from Assyria, fluttering like doves; I will settle them in their homes, declares the LORD.",
  },
  {
    ref: "v. 12",
    color: "#E11D48",
    body: "Ephraim has surrounded me with lies; Israel with deceit; and Judah is unruly against God, even against the faithful Holy One.",
  },
];

const applicationPoints = [
  "Receive God&apos;s parental love as foundational to your identity &mdash; you are his child, not just his subject.",
  "Grieve with God the sorrow of unreturned love in those around you who have wandered from him.",
  "Let the question &quot;How can I give you up?&quot; assure you that God has not given up on you regardless of how far you have wandered.",
  "Rest in the truth that God&apos;s holiness is expressed in fierce love, not only in judgment.",
  "Respond to the lion&apos;s roar of God&apos;s call by coming home now &mdash; do not wait for a more convenient moment.",
  "Pray for those in your life whose wandering breaks the heart of God, and trust his pursuing love to reach them.",
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

export default function Hosea11GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  function toggleAccordion(id: string) {
    setOpenAccordion(openAccordion === id ? null : id);
  }

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        background: "#07070F",
        minHeight: "100vh",
        color: "#F2F2F8",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      {/* -- HERO -- */}
      <section
        style={{
          background: "linear-gradient(180deg, rgba(217,119,6,0.12) 0%, rgba(107,79,187,0.06) 55%, transparent 100%)",
          padding: "72px 24px 56px",
          textAlign: "center",
          borderBottom: "1px solid #1E1E32",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(217,119,6,0.1)",
            border: "1px solid rgba(217,119,6,0.28)",
            borderRadius: "100px",
            padding: "5px 18px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              color: "#D97706",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            BIBLE STUDY GUIDE
          </span>
        </div>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: "16px",
            color: "#F2F2F8",
          }}
        >
          Hosea 11
        </h1>
        <p
          style={{
            fontSize: "clamp(18px, 2.5vw, 26px)",
            color: "#9898B3",
            lineHeight: 1.5,
            marginBottom: "12px",
            fontStyle: "italic",
          }}
        >
          When Israel Was a Child, I Loved Him
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#D97706",
            fontWeight: 600,
            letterSpacing: "0.06em",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          12 verses &mdash; The Tenderest Portrait of God in the Old Testament
        </p>
      </section>

      {/* -- VIDEO GRID -- */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "56px 24px 0",
        }}
      >
        <p
          style={{
            color: "#D97706",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            marginBottom: "20px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          VIDEO RESOURCES
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {videoItems.map((v) => (
            <div
              key={v.id}
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <VideoEmbed videoId={v.id} title={v.title} />
              <p
                style={{
                  padding: "12px 14px",
                  fontSize: "13px",
                  color: "#9898B3",
                  lineHeight: 1.5,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {v.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* -- TABS -- */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "56px 24px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0",
            borderBottom: "1px solid #1E1E32",
            marginBottom: "40px",
            overflowX: "auto",
            flexWrap: "nowrap",
          }}
        >
          {TABS.map((tab) => {
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: active ? "3px solid #D97706" : "3px solid transparent",
                  color: active ? "#F2F2F8" : "#9898B3",
                  padding: "12px 22px",
                  fontSize: "14px",
                  fontWeight: active ? 700 : 500,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  fontFamily: "system-ui, sans-serif",
                  transition: "color 0.2s",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "Overview" && (
          <div style={{ maxWidth: "820px" }}>
            <div
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderLeft: "4px solid #D97706",
                borderRadius: "16px",
                padding: "36px 36px 36px 32px",
                marginBottom: "32px",
              }}
            >
              <p
                style={{
                  color: "#D97706",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "16px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                CHAPTER OVERVIEW
              </p>
              <h2
                style={{
                  fontSize: "clamp(20px, 3vw, 30px)",
                  fontWeight: 900,
                  color: "#F2F2F8",
                  marginBottom: "20px",
                  lineHeight: 1.25,
                }}
              >
                A Portrait of God as the Tenderhearted Parent
              </h2>
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "16px",
                  lineHeight: 1.9,
                  marginBottom: "18px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Hosea 11 is arguably the most tender chapter in the Old Testament &mdash; a portrait of God not as king or judge but as a parent who has loved a wayward child from infancy. The chapter opens: &quot;When Israel was a child, I loved him, and out of Egypt I called my son&quot; (v.1, quoted in Matthew 2:15 as fulfilled in Jesus&apos; return from Egypt). God taught Ephraim to walk, took them in his arms, healed them, led them with cords of human kindness and ties of love, bent down to feed them.",
                }}
              />
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "16px",
                  lineHeight: 1.9,
                  marginBottom: "18px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Yet they refused to return. The more God called, the more they went away. They would return to Egypt and Assyria would be their king. Then the chapter&apos;s emotional turning point arrives: &quot;How can I give you up, Ephraim? How can I hand you over, Israel?... My heart is changed within me; all my compassion is aroused. I will not carry out my fierce anger... for I am God, and not a man &mdash; the Holy One among you.&quot;",
                }}
              />
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "16px",
                  lineHeight: 1.9,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Divine love wins. God will roar like a lion and they will come trembling from the west. Hosea 11 does not resolve the tension of God&apos;s justice and love by choosing one over the other &mdash; it holds both together and shows that in God, love has the final word.",
                }}
              />
            </div>

            <div
              style={{
                background: "rgba(217,119,6,0.06)",
                border: "1px solid rgba(217,119,6,0.2)",
                borderRadius: "16px",
                padding: "28px 32px",
              }}
            >
              <p
                style={{
                  color: "#D97706",
                  fontSize: "15px",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  marginBottom: "10px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&quot;How can I give you up, Ephraim? How can I hand you over, Israel?... My heart is changed within me; all my compassion is aroused.&quot;",
                }}
              />
              <p
                style={{
                  color: "#6B4FBB",
                  fontSize: "13px",
                  fontWeight: 700,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                &mdash; Hosea 11:8
              </p>
            </div>

            <div
              style={{
                marginTop: "32px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                { label: "Book", value: "Hosea" },
                { label: "Chapter", value: "11" },
                { label: "Verses", value: "12" },
                { label: "Theme", value: "Divine Parental Love" },
                { label: "Period", value: "8th Century BC" },
                { label: "Author", value: "Hosea" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "12px",
                    padding: "16px 18px",
                  }}
                >
                  <p
                    style={{
                      color: "#9898B3",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      marginBottom: "6px",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {item.label.toUpperCase()}
                  </p>
                  <p
                    style={{
                      color: "#F2F2F8",
                      fontSize: "14px",
                      fontWeight: 700,
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "24px",
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "14px",
                padding: "24px 28px",
              }}
            >
              <p
                style={{
                  color: "#a78bfa",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "12px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                MESSIANIC CONNECTION
              </p>
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  fontFamily: "system-ui, sans-serif",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Matthew 2:15 quotes Hosea 11:1 &mdash; &quot;Out of Egypt I called my son&quot; &mdash; as fulfilled in Joseph, Mary, and Jesus returning from Egypt after Herod&apos;s death. This is a typological fulfillment: Jesus recapitulates the journey of Israel, succeeding where Israel failed. What Israel-as-son could not accomplish, Jesus-as-Son fulfills perfectly.",
                }}
              />
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "Key Themes" && (
          <div style={{ maxWidth: "820px" }}>
            <p
              style={{
                color: "#9898B3",
                fontSize: "16px",
                lineHeight: 1.75,
                marginBottom: "32px",
                fontFamily: "system-ui, sans-serif",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "Hosea 11 is a chapter of extraordinary emotional depth. In just 12 verses it covers parental tenderness, the tragedy of unreturned love, divine inner struggle, the ground of mercy in God&apos;s own nature, and the certainty of eventual homecoming. These five themes are the theological heart of the chapter.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {themes.map((theme, i) => {
                const id = `theme-${i}`;
                const open = openAccordion === id;
                return (
                  <div
                    key={id}
                    style={{
                      background: "#12121F",
                      border: `1px solid ${theme.color}33`,
                      borderLeft: `4px solid ${theme.color}`,
                      borderRadius: "14px",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(id)}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        padding: "20px 24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        textAlign: "left",
                        gap: "12px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <span
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            background: `${theme.color}20`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "12px",
                            fontWeight: 800,
                            color: theme.color,
                            flexShrink: 0,
                            fontFamily: "system-ui, sans-serif",
                          }}
                        >
                          {i + 1}
                        </span>
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "#F2F2F8",
                            fontFamily: "system-ui, sans-serif",
                          }}
                          dangerouslySetInnerHTML={{ __html: theme.title }}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: "22px",
                          color: theme.color,
                          fontWeight: 300,
                          flexShrink: 0,
                          lineHeight: 1,
                        }}
                      >
                        {open === true ? "-" : "+"}
                      </span>
                    </button>
                    {open && (
                      <div
                        style={{
                          padding: "0 24px 22px 66px",
                        }}
                      >
                        <p
                          style={{
                            color: "#9898B3",
                            fontSize: "15px",
                            lineHeight: 1.85,
                          }}
                          dangerouslySetInnerHTML={{ __html: theme.body }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div
              style={{
                marginTop: "32px",
                background: "rgba(107,79,187,0.07)",
                border: "1px solid rgba(107,79,187,0.2)",
                borderRadius: "16px",
                padding: "28px 32px",
              }}
            >
              <p
                style={{
                  color: "#a78bfa",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "12px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                CROSS-REFERENCE
              </p>
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  fontFamily: "system-ui, sans-serif",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Connect Hosea 11 with Matthew 2:15 (the Messianic echo of v.1), John 3:16 (the God who so loved), Luke 15:11-32 (the prodigal son as the same divine heart in narrative form), Isaiah 49:15 (can a mother forget her nursing child?), and Deuteronomy 1:31 (the LORD your God carried you as a father carries his son).",
                }}
              />
            </div>

            <div
              style={{
                marginTop: "16px",
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "16px",
                padding: "28px 32px",
              }}
            >
              <p
                style={{
                  color: "#0D9488",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "12px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                THEOLOGICAL NOTE: DIVINE IMPASSIBILITY AND DIVINE EMOTION
              </p>
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  fontFamily: "system-ui, sans-serif",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Hosea 11:8 &mdash; &quot;My heart is changed within me; all my compassion is aroused&quot; &mdash; raises profound theological questions about whether God changes or experiences emotion. The classical tradition (impassibility) holds that God does not literally suffer as we do; the more recent &quot;open theology&quot; tradition reads such texts as revealing genuine divine emotion. Most evangelical theologians hold that while God does not change in his essential nature, he does genuinely and truly engage with his creation in a way that is analogous to human emotion. Hosea 11:9 itself grounds God&apos;s mercy not in his emotion but in his nature: &quot;I am God and not a man.&quot;",
                }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "Verse by Verse" && (
          <div style={{ maxWidth: "820px" }}>
            <p
              style={{
                color: "#9898B3",
                fontSize: "16px",
                lineHeight: 1.75,
                marginBottom: "32px",
                fontFamily: "system-ui, sans-serif",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "A careful walk through all 12 verses of Hosea 11, organized by section. The chapter moves from God&apos;s loving past with Israel (vv.1-4) through the coming consequences of their rebellion (vv.5-7), then to the breathtaking pivot of divine compassion (vv.8-9), the call of homecoming (vv.10-11), and a closing indictment (v.12).",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {verses.map((section, i) => {
                const id = `verse-${i}`;
                const open = openAccordion === id;
                return (
                  <div
                    key={id}
                    style={{
                      background: "#12121F",
                      border: "1px solid #1E1E32",
                      borderRadius: "14px",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(id)}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        padding: "18px 22px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        textAlign: "left",
                        gap: "12px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: 700,
                          color: section.color,
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {section.ref}
                      </span>
                      <span
                        style={{
                          fontSize: "20px",
                          color: section.color,
                          fontWeight: 300,
                          flexShrink: 0,
                          lineHeight: 1,
                        }}
                      >
                        {open === true ? "-" : "+"}
                      </span>
                    </button>
                    {open && (
                      <div style={{ padding: "0 22px 20px" }}>
                        <div
                          style={{
                            borderTop: `1px solid ${section.color}30`,
                            paddingTop: "16px",
                          }}
                        >
                          <p
                            style={{
                              color: "#9898B3",
                              fontSize: "15px",
                              lineHeight: 1.9,
                              fontStyle: "italic",
                            }}
                            dangerouslySetInnerHTML={{ __html: section.body }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div
              style={{
                marginTop: "36px",
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "16px",
                padding: "28px 32px",
              }}
            >
              <p
                style={{
                  color: "#D97706",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "14px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                LITERARY NOTE
              </p>
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "14px",
                  lineHeight: 1.85,
                  fontFamily: "system-ui, sans-serif",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Hosea 11 is a lyrical poem, not prose narrative. It employs direct divine speech, rhetorical questions (&quot;How can I give you up?&quot;), and vivid parental imagery in rapid succession. The shift from third person (&quot;Israel&quot; in vv.1-7) to first person (&quot;My heart&quot; in v.8) marks the emotional turn. Scholars have noted that verse 8 is one of the most emotionally intense verses in all of Old Testament poetry.",
                }}
              />
            </div>

            <div
              style={{
                marginTop: "16px",
                background: "rgba(217,119,6,0.06)",
                border: "1px solid rgba(217,119,6,0.2)",
                borderRadius: "14px",
                padding: "24px 28px",
              }}
            >
              <p
                style={{
                  color: "#D97706",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "12px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                ON ADMAH AND ZEBOIIM
              </p>
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  fontFamily: "system-ui, sans-serif",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Verse 8 references Admah and Zeboiim &mdash; cities destroyed alongside Sodom and Gomorrah (Deuteronomy 29:23, Genesis 14:2). The question &quot;How can I make you like Zeboiim?&quot; means: how can I destroy you with the same totality as those cities of total destruction? The answer is: I cannot. My love will not permit it. The God who destroyed Sodom will not destroy Ephraim in the same way. This is not because Ephraim is better, but because God&apos;s covenant love for his own people holds him.",
                }}
              />
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "Application" && (
          <div style={{ maxWidth: "820px" }}>
            <div
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderLeft: "4px solid #D97706",
                borderRadius: "16px",
                padding: "32px",
                marginBottom: "28px",
              }}
            >
              <p
                style={{
                  color: "#D97706",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "16px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                LIVING IT OUT
              </p>
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "16px",
                  lineHeight: 1.8,
                  fontFamily: "system-ui, sans-serif",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Hosea 11 is a chapter to sit with slowly. It does not primarily call for action but for a reorientation of how we understand God and ourselves. Allow the image of the divine parent &mdash; teaching you to walk, bending down to feed you, calling after you with aching love &mdash; to become the lens through which you read your own story.",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {applicationPoints.map((point, i) => (
                <div
                  key={i}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "14px",
                    padding: "22px 24px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "rgba(217,119,6,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    <span
                      style={{
                        color: "#D97706",
                        fontSize: "13px",
                        fontWeight: 800,
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <p
                    style={{
                      color: "#9898B3",
                      fontSize: "15px",
                      lineHeight: 1.8,
                      fontFamily: "system-ui, sans-serif",
                    }}
                    dangerouslySetInnerHTML={{ __html: point }}
                  />
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "32px",
                background: "rgba(107,79,187,0.07)",
                border: "1px solid rgba(107,79,187,0.2)",
                borderRadius: "16px",
                padding: "28px 32px",
              }}
            >
              <p
                style={{
                  color: "#a78bfa",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "14px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                REFLECTION QUESTIONS
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "How does thinking of God as a parent &mdash; rather than only as king or judge &mdash; change the way you relate to him in prayer?",
                  "Is there an area of your life where you have been going further away the more God has called you back? What would it look like to turn around today?",
                  "What does it mean for you personally that God&apos;s decision not to destroy is rooted in his own nature (&quot;I am God and not a man&quot;) rather than in your goodness?",
                  "Who in your life is currently prodigal? How does Hosea 11&apos;s portrait of God&apos;s pursuing love shape the way you pray and act toward them?",
                  "Have you ever heard the lion&apos;s roar of God&apos;s call? What was that experience like, and what was your response?",
                ].map((q, qi) => (
                  <p
                    key={qi}
                    style={{
                      color: "#9898B3",
                      fontSize: "14px",
                      lineHeight: 1.75,
                      paddingLeft: "16px",
                      borderLeft: "2px solid rgba(107,79,187,0.35)",
                      fontFamily: "system-ui, sans-serif",
                    }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: "28px",
                background: "rgba(217,119,6,0.06)",
                border: "1px solid rgba(217,119,6,0.2)",
                borderRadius: "16px",
                padding: "28px 32px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#D97706",
                  fontSize: "18px",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  marginBottom: "10px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&quot;How can I give you up, Ephraim? How can I hand you over, Israel?... My heart is changed within me; all my compassion is aroused.&quot;",
                }}
              />
              <p
                style={{
                  color: "#6B4FBB",
                  fontSize: "13px",
                  fontWeight: 700,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                &mdash; Hosea 11:8
              </p>
            </div>

            <div
              style={{
                marginTop: "24px",
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "14px",
                padding: "24px 28px",
              }}
            >
              <p
                style={{
                  color: "#3a7d56",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "12px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                THE PRODIGAL CONNECTION
              </p>
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  fontFamily: "system-ui, sans-serif",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Jesus&apos; parable of the prodigal son (Luke 15:11-32) is the New Testament counterpart to Hosea 11. The father who runs to his returning son, who falls on his neck and kisses him, who calls for the robe and the ring and the feast &mdash; this is the same God who says in Hosea 11: &quot;I bent down to feed them.&quot; Both passages together reveal that the heart of God toward the wandering is not primarily indignation but longing, not first punishment but welcome.",
                }}
              />
            </div>
          </div>
        )}
      </section>

      {/* -- RELATED PASSAGES -- */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "56px 24px",
        }}
      >
        <p
          style={{
            color: "#D97706",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            marginBottom: "20px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          RELATED PASSAGES
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "14px",
          }}
        >
          {[
            {
              ref: "Matthew 2:15",
              desc: "Out of Egypt I called my son &mdash; Matthew&apos;s Messianic quotation of Hosea 11:1.",
              color: "#3a7d56",
            },
            {
              ref: "Luke 15:11-32",
              desc: "The prodigal son parable: the same divine heart in narrative form, told by Jesus.",
              color: "#6B4FBB",
            },
            {
              ref: "Isaiah 49:15",
              desc: "Can a mother forget her nursing child? God&apos;s maternal love as the ground of covenant faithfulness.",
              color: "#D97706",
            },
            {
              ref: "Deuteronomy 1:31",
              desc: "The LORD your God carried you as a father carries his son &mdash; the same parental image in the Torah.",
              color: "#0D9488",
            },
            {
              ref: "John 3:16",
              desc: "God so loved the world &mdash; the New Testament restatement of the love that will not let go.",
              color: "#E11D48",
            },
            {
              ref: "Romans 8:38-39",
              desc: "Nothing can separate us from the love of God &mdash; the permanent security of the divine parental bond.",
              color: "#a78bfa",
            },
          ].map((passage) => (
            <div
              key={passage.ref}
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderTop: `3px solid ${passage.color}`,
                borderRadius: "12px",
                padding: "18px 20px",
              }}
            >
              <p
                style={{
                  color: passage.color,
                  fontSize: "13px",
                  fontWeight: 700,
                  marginBottom: "8px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {passage.ref}
              </p>
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "13px",
                  lineHeight: 1.65,
                  fontFamily: "system-ui, sans-serif",
                }}
                dangerouslySetInnerHTML={{ __html: passage.desc }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* -- HISTORICAL CONTEXT -- */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px 56px",
        }}
      >
        <div
          style={{
            background: "#12121F",
            border: "1px solid #1E1E32",
            borderRadius: "20px",
            padding: "40px",
          }}
        >
          <p
            style={{
              color: "#6B4FBB",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            HISTORICAL AND CULTURAL CONTEXT
          </p>
          <h3
            style={{
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 800,
              color: "#F2F2F8",
              marginBottom: "20px",
              lineHeight: 1.3,
            }}
          >
            Hosea, Ephraim, and the Fall of the Northern Kingdom
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p
              style={{
                color: "#9898B3",
                fontSize: "15px",
                lineHeight: 1.9,
                fontFamily: "system-ui, sans-serif",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "Hosea ministered to the northern kingdom of Israel (also called Ephraim, its largest tribe) in the eighth century BC, during the decades preceding the Assyrian conquest of 722 BC. His own marriage to an unfaithful wife (Hosea 1-3) became a living parable of God&apos;s relationship to Israel. The book moves between judgment oracles and radical love oracles in rapid succession, mirroring the emotional complexity of a spurned but faithful spouse.",
              }}
            />
            <p
              style={{
                color: "#9898B3",
                fontSize: "15px",
                lineHeight: 1.9,
                fontFamily: "system-ui, sans-serif",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "Baal worship &mdash; mentioned in verse 2 &mdash; was the dominant temptation facing Israel in this era. The Baals were fertility gods worshipped at local shrines (high places), and their worship often included sexually immoral practices. Israel had become syncretistic: they still called on the LORD but also worshipped at the Baal shrines. Hosea saw this as adultery against the God who had loved them from Egypt.",
              }}
            />
            <p
              style={{
                color: "#9898B3",
                fontSize: "15px",
                lineHeight: 1.9,
                fontFamily: "system-ui, sans-serif",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "Egypt and Assyria in verses 5 and 11 are not simply geographical references but symbolic poles of captivity. Egypt represents the old captivity from which God once delivered Israel; Assyria represents the new captivity coming upon them. That God promises to bring his children from both directions &mdash; trembling like birds &mdash; is a declaration that no exile is final for those who bear his name.",
              }}
            />
          </div>
        </div>
      </section>

      {/* -- CALL TO ACTION -- */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, rgba(217,119,6,0.11) 0%, rgba(107,79,187,0.08) 100%)",
            border: "1px solid rgba(217,119,6,0.22)",
            borderRadius: "24px",
            padding: "56px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "500px",
              height: "280px",
              background: "radial-gradient(ellipse, rgba(217,119,6,0.06) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 40px)",
              fontWeight: 900,
              color: "#F2F2F8",
              marginBottom: "14px",
              position: "relative",
              lineHeight: 1.2,
            }}
          >
            Go Deeper in Your Study
          </h2>
          <p
            style={{
              color: "#9898B3",
              fontSize: "16px",
              lineHeight: 1.7,
              marginBottom: "32px",
              maxWidth: "460px",
              margin: "0 auto 32px",
              position: "relative",
              fontFamily: "system-ui, sans-serif",
            }}
            dangerouslySetInnerHTML={{
              __html:
                "Join The Vine community to explore Hosea 11 together. Discuss the divine parental heart, share how this passage has shaped your understanding of God&apos;s love, and be part of a community where the Father&apos;s love is the foundation.",
            }}
          />
          <div
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
              position: "relative",
            }}
          >
            <a
              href="/bible-study"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #D97706, #B8922A)",
                color: "#07070F",
                borderRadius: "12px",
                padding: "13px 28px",
                fontWeight: 800,
                fontSize: "15px",
                textDecoration: "none",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Explore Bible Studies
            </a>
            <a
              href="/discussions"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "#9898B3",
                border: "1px solid #1E1E32",
                borderRadius: "12px",
                padding: "13px 28px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Join the Discussion
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
