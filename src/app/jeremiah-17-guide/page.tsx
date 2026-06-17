"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const videoItems = [
  { id: "cM8nWaBpJ2f", title: "Jeremiah 17 - The Deceitful Heart and the Blessed Man" },
  { id: "dN3oCbQqK7g", title: "The Heart Is Deceitful Above All Things - Jeremiah 17 Study" },
  { id: "eO5pDcRrL1h", title: "Jeremiah 17 Verse by Verse - Trust in God Not Man" },
  { id: "fP9qEdSsM6i", title: "Jeremiah 17 Explained - The Spring of Living Water" },
];

const keyThemes = [
  {
    id: "theme1",
    title: "Sin Inscribed on the Heart",
    color: "#E11D48",
    body: "Judah&apos;s sin is not incidental but structural: engraved with an iron stylus on their hearts (v.1). This is the biblical anthropology of sin as heart-deep, not merely behavioral. External reform cannot fix what is written internally. Only God can write a new law on the heart (Jeremiah 31:33) &mdash; the new covenant promise that flows from this diagnosis.",
  },
  {
    id: "theme2",
    title: "The Cursed vs. Blessed Man",
    color: "#3a7d56",
    body: "The contrast of Psalm 1 reappears here: the one who trusts in human strength is like a bush in the desert, unable to see when good comes. The one who trusts in the LORD is like a tree by the stream, not anxious in the year of drought. This is not a prosperity gospel &mdash; it is a theology of rooted, enduring life through trust in God.",
  },
  {
    id: "theme3",
    title: "The Deceitful Heart",
    color: "#D97706",
    body: "&quot;The heart is deceitful above all things and beyond cure. Who can understand it?&quot; (v.9). This is one of the most honest and sobering statements about human nature in all of Scripture. The very organ of judgment &mdash; the heart &mdash; is itself compromised. We cannot trust our own internal moral compass. We need an external word from the God who searches hearts.",
  },
  {
    id: "theme4",
    title: "The LORD Who Searches the Heart",
    color: "#6B4FBB",
    body: "&quot;I the LORD search the heart and examine the mind&quot; (v.10). God is not fooled by external religion. He penetrates to the motivations, the hidden desires, the private calculations that drive human behavior. This truth is sobering (nothing is hidden from him) but also comforting (he knows us completely and still loves us).",
  },
  {
    id: "theme5",
    title: "Jeremiah&apos;s Personal Lament",
    color: "#0D9488",
    body: "Verses 14-18 record one of Jeremiah&apos;s most personal prayers: &quot;Heal me, LORD, and I will be healed; save me and I will be saved.&quot; He has not run away from being a shepherd to God&apos;s people, yet he is mocked. He prays for deliverance from his enemies and for God&apos;s word to be vindicated. This humanizes the prophet and gives every believer language for their own seasons of faithful suffering.",
  },
];

const verseItems = [
  {
    id: "vv1",
    ref: "vv.1-4",
    text: "Judah&apos;s sin is engraved with an iron stylus on the tablet of their hearts; they have set up their altars and Asherah poles beside every spreading tree; a mountain in the open country; I will give away your wealth as plunder; you will lose the inheritance I gave you; you will serve your enemies in a land you do not know; for you have kindled my anger.",
  },
  {
    id: "vv2",
    ref: "vv.5-8",
    text: "Cursed is the one who trusts in man, who draws strength from mere flesh and whose heart turns away from the LORD; that person will be like a bush in the wastelands; they will not see prosperity when it comes; they will dwell in the parched places; but blessed is the one who trusts in the LORD; they will be like a tree planted by the water that sends out its roots by the stream; it does not fear when heat comes; its leaves are always green; it has no worries in a year of drought and never fails to bear fruit.",
  },
  {
    id: "vv3",
    ref: "vv.9-10",
    text: "The heart is deceitful above all things and beyond cure; who can understand it? I the LORD search the heart and examine the mind, to reward each person according to their conduct, according to what their deeds deserve.",
  },
  {
    id: "vv4",
    ref: "vv.11-13",
    text: "Like a partridge that hatches eggs it did not lay are those who gain riches by unjust means; a glorious throne, exalted from the beginning, is the place of our sanctuary; LORD, you are the hope of Israel; all who forsake you will be put to shame; those who turn away from you will be written in the dust because they have forsaken the LORD, the spring of living water.",
  },
  {
    id: "vv5",
    ref: "vv.14-18",
    text: "Heal me LORD and I will be healed; save me and I will be saved, for you are the one I praise; they keep saying to me where is the word of the LORD? Let it now be fulfilled; I have not run away from being your shepherd; you know I have not desired the day of despair; do not be a terror to me; let my persecutors be put to shame; bring on them the day of disaster.",
  },
  {
    id: "vv6",
    ref: "vv.19-27",
    text: "This is what the LORD said to me: go and stand at the gate of the people; say to them hear the word of the LORD, you kings of Judah; be careful not to carry a load on the Sabbath day or bring it through the gates of Jerusalem; if you obey me and keep the Sabbath, then kings who sit on David&apos;s throne will come through these gates; but if you do not listen to me to keep the Sabbath day holy, then I will kindle an unquenchable fire in the gates of Jerusalem.",
  },
];

const applicationPoints = [
  "Submit your heart to God&apos;s searching gaze through daily examination and confession.",
  "Identify what human strength you are trusting in instead of God.",
  "Plant your roots by the streams of Scripture and prayer so you do not wither in drought seasons.",
  "Pray with Jeremiah: &quot;Heal me LORD and I will be healed.&quot;",
  "Resist the self-deception that your own heart is reliable &mdash; bring it before the One who searches it.",
  "Honor the rhythms of rest God has built into human life.",
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

export default function Jeremiah17GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  function toggleAccordion(id: string) {
    setOpenAccordion((prev) => (prev === id ? null : id));
  }

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        background: "#07070F",
        minHeight: "100vh",
        color: "#F2F2F8",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(217,119,6,0.13) 0%, rgba(107,79,187,0.07) 55%, transparent 100%)",
          padding: "72px 24px 56px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(217,119,6,0.1)",
            border: "1px solid rgba(217,119,6,0.3)",
            borderRadius: "100px",
            padding: "6px 18px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              color: "#D97706",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              fontFamily: "sans-serif",
            }}
          >
            JEREMIAH 17 &mdash; BIBLE STUDY GUIDE
          </span>
        </div>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: "20px",
            background: "linear-gradient(135deg, #D97706 0%, #a78bfa 60%, #D97706 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          The Deceitful Heart
          <br />
          and the Blessed Man
        </h1>
        <p
          style={{
            fontSize: "clamp(15px, 2.2vw, 19px)",
            color: "#9898B3",
            lineHeight: 1.75,
            maxWidth: "680px",
            margin: "0 auto 12px",
            fontStyle: "italic",
          }}
        >
          Jeremiah 17 &mdash; 27 Verses
        </p>
        <p
          style={{
            fontSize: "clamp(14px, 1.8vw, 16px)",
            color: "#6B6B8A",
            lineHeight: 1.6,
            maxWidth: "560px",
            margin: "0 auto",
          }}
        >
          &quot;The heart is deceitful above all things and beyond cure. Who can understand it?
          I the LORD search the heart and examine the mind.&quot; &mdash; Jeremiah 17:9-10
        </p>
      </section>

      {/* Video Grid */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "48px 24px 0",
        }}
      >
        <p
          style={{
            color: "#D97706",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            marginBottom: "20px",
            fontFamily: "sans-serif",
          }}
        >
          VIDEO TEACHINGS
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
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
              <div style={{ padding: "14px 16px" }}>
                <p
                  style={{
                    color: "#F2F2F8",
                    fontSize: "13px",
                    fontWeight: 700,
                    lineHeight: 1.4,
                    fontFamily: "sans-serif",
                  }}
                >
                  {v.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs + Content */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "52px 24px 100px",
        }}
      >
        {/* Tab Bar */}
        <div
          style={{
            display: "flex",
            gap: "4px",
            borderBottom: "1px solid #1E1E32",
            marginBottom: "40px",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: isActive ? "2px solid #D97706" : "2px solid transparent",
                  color: isActive ? "#D97706" : "#9898B3",
                  cursor: "pointer",
                  padding: "12px 22px",
                  fontSize: "14px",
                  fontWeight: isActive ? 700 : 500,
                  fontFamily: "sans-serif",
                  letterSpacing: "0.03em",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s, border-color 0.2s",
                  flexShrink: 0,
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === "Overview" && (
          <div>
            <div
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderLeft: "4px solid #D97706",
                borderRadius: "20px",
                padding: "40px 40px 40px 36px",
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
                  fontFamily: "sans-serif",
                }}
              >
                CHAPTER OVERVIEW
              </p>
              <h2
                style={{
                  fontSize: "clamp(20px, 3vw, 30px)",
                  fontWeight: 900,
                  color: "#F2F2F8",
                  marginBottom: "24px",
                  lineHeight: 1.2,
                }}
              >
                Jeremiah 17 &mdash; 27 Verses
              </h2>
              <p
                style={{
                  color: "#B0B0CC",
                  fontSize: "16px",
                  lineHeight: 1.85,
                  marginBottom: "20px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Jeremiah 17 opens with Judah&apos;s sin engraved on their hearts with an iron stylus and inscribed on the horns of their altars. The people have forgotten God and set their hearts on trusting in human strength. Then comes the great contrast: the cursed man who trusts in flesh and the blessed man who trusts in the LORD. The blessed man is like a tree planted by water that does not fear drought. The wicked are like a shrub in the desert.",
                }}
              />
              <p
                style={{
                  color: "#B0B0CC",
                  fontSize: "16px",
                  lineHeight: 1.85,
                  marginBottom: "20px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter&apos;s theological center is verse 9: &quot;The heart is deceitful above all things and beyond cure. Who can understand it?&quot; God&apos;s answer: he alone searches the heart and tests the mind. The chapter then turns to Jeremiah&apos;s own lament and prayer for vindication, and ends with a word about Sabbath observance as the key to Judah&apos;s survival.",
                }}
              />
            </div>

            {/* Key Verse Callout */}
            <div
              style={{
                background: "rgba(217,119,6,0.07)",
                border: "1px solid rgba(217,119,6,0.2)",
                borderRadius: "16px",
                padding: "28px 32px",
                marginBottom: "32px",
              }}
            >
              <p
                style={{
                  color: "#D97706",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "12px",
                  fontFamily: "sans-serif",
                }}
              >
                KEY VERSE
              </p>
              <p
                style={{
                  color: "#F2F2F8",
                  fontSize: "18px",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: "8px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&quot;The heart is deceitful above all things and beyond cure. Who can understand it? I the LORD search the heart and examine the mind, to reward each person according to their conduct, according to what their deeds deserve.&quot;",
                }}
              />
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "13px",
                  fontWeight: 700,
                  fontFamily: "sans-serif",
                }}
              >
                &mdash; Jeremiah 17:9-10
              </p>
            </div>

            {/* Quick Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                { label: "Total Verses", value: "27", color: "#D97706" },
                { label: "Key Theme", value: "The Deceitful Heart", color: "#E11D48" },
                { label: "Central Command", value: "Trust the LORD", color: "#3a7d56" },
                { label: "Prophet", value: "Jeremiah", color: "#6B4FBB" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "14px",
                    padding: "20px 24px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "22px",
                      fontWeight: 900,
                      color: stat.color,
                      marginBottom: "6px",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      color: "#9898B3",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "Key Themes" && (
          <div>
            <p
              style={{
                color: "#9898B3",
                fontSize: "15px",
                lineHeight: 1.7,
                marginBottom: "32px",
                fontStyle: "italic",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "Five major theological threads run through Jeremiah 17. Click each theme to explore the depth of God&apos;s Word.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {keyThemes.map((theme) => {
                const isOpen = openAccordion === theme.id;
                return (
                  <div
                    key={theme.id}
                    style={{
                      background: "#12121F",
                      border: `1px solid ${isOpen ? theme.color + "55" : "#1E1E32"}`,
                      borderLeft: `4px solid ${theme.color}`,
                      borderRadius: "16px",
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(theme.id)}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        padding: "20px 24px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                        gap: "12px",
                      }}
                    >
                      <span
                        style={{
                          color: isOpen ? theme.color : "#F2F2F8",
                          fontSize: "16px",
                          fontWeight: 700,
                          textAlign: "left",
                          lineHeight: 1.3,
                          fontFamily: "sans-serif",
                        }}
                        dangerouslySetInnerHTML={{ __html: theme.title }}
                      />
                      <span
                        style={{
                          color: theme.color,
                          fontSize: "22px",
                          fontWeight: 400,
                          lineHeight: 1,
                          flexShrink: 0,
                          fontFamily: "monospace",
                        }}
                      >
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 24px 24px" }}>
                        <p
                          style={{
                            color: "#B0B0CC",
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
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "Verse by Verse" && (
          <div>
            <p
              style={{
                color: "#9898B3",
                fontSize: "15px",
                lineHeight: 1.7,
                marginBottom: "32px",
                fontStyle: "italic",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "A passage-by-passage walk through all 27 verses of Jeremiah 17, following the chapter&apos;s movement from diagnosis to prescription.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {verseItems.map((item, idx) => {
                const colors = ["#E11D48", "#3a7d56", "#D97706", "#6B4FBB", "#0D9488", "#a78bfa"];
                const accentColor = colors[idx % colors.length];
                return (
                  <div
                    key={item.id}
                    style={{
                      background: "#12121F",
                      border: "1px solid #1E1E32",
                      borderRadius: "16px",
                      padding: "24px 28px",
                      display: "flex",
                      gap: "20px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        background: accentColor + "22",
                        border: `1px solid ${accentColor}44`,
                        borderRadius: "10px",
                        padding: "6px 12px",
                        flexShrink: 0,
                        minWidth: "64px",
                        textAlign: "center",
                      }}
                    >
                      <span
                        style={{
                          color: accentColor,
                          fontSize: "12px",
                          fontWeight: 800,
                          letterSpacing: "0.04em",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {item.ref}
                      </span>
                    </div>
                    <p
                      style={{
                        color: "#B0B0CC",
                        fontSize: "15px",
                        lineHeight: 1.85,
                        margin: 0,
                      }}
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "Application" && (
          <div>
            <div
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderLeft: "4px solid #3a7d56",
                borderRadius: "20px",
                padding: "36px 36px 36px 32px",
                marginBottom: "32px",
              }}
            >
              <p
                style={{
                  color: "#3a7d56",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "12px",
                  fontFamily: "sans-serif",
                }}
              >
                LIVING IT OUT
              </p>
              <h2
                style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 900,
                  color: "#F2F2F8",
                  marginBottom: "8px",
                  lineHeight: 1.2,
                }}
              >
                How to Apply Jeremiah 17
              </h2>
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Jeremiah 17 is not merely history &mdash; it is a mirror for the soul. Let these points guide your response to God this week.",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {applicationPoints.map((point, idx) => {
                const colors = ["#D97706", "#3a7d56", "#6B4FBB", "#E11D48", "#0D9488", "#a78bfa"];
                const accentColor = colors[idx % colors.length];
                return (
                  <div
                    key={idx}
                    style={{
                      background: "#12121F",
                      border: "1px solid #1E1E32",
                      borderRadius: "14px",
                      padding: "20px 24px",
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
                        background: accentColor + "22",
                        border: `1px solid ${accentColor}44`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontFamily: "sans-serif",
                      }}
                    >
                      <span
                        style={{
                          color: accentColor,
                          fontSize: "13px",
                          fontWeight: 900,
                        }}
                      >
                        {idx + 1}
                      </span>
                    </div>
                    <p
                      style={{
                        color: "#B0B0CC",
                        fontSize: "15px",
                        lineHeight: 1.75,
                        margin: 0,
                        paddingTop: "4px",
                      }}
                      dangerouslySetInnerHTML={{ __html: point }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Prayer Prompt */}
            <div
              style={{
                marginTop: "36px",
                background: "rgba(217,119,6,0.06)",
                border: "1px solid rgba(217,119,6,0.18)",
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
                  marginBottom: "12px",
                  fontFamily: "sans-serif",
                }}
              >
                PRAYER PROMPT
              </p>
              <p
                style={{
                  color: "#F2F2F8",
                  fontSize: "17px",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  marginBottom: "12px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&quot;Heal me, LORD, and I will be healed; save me and I will be saved, for you are the one I praise. Search my heart, O God, and know my anxious thoughts. See if there is any offensive way in me, and lead me in the way everlasting.&quot;",
                }}
              />
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "13px",
                  fontWeight: 700,
                  fontFamily: "sans-serif",
                }}
              >
                &mdash; Adapted from Jeremiah 17:14 and Psalm 139:23-24
              </p>
            </div>

            {/* Cross-Reference Banner */}
            <div
              style={{
                marginTop: "28px",
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "16px",
                padding: "24px 28px",
              }}
            >
              <p
                style={{
                  color: "#6B4FBB",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "12px",
                  fontFamily: "sans-serif",
                }}
              >
                CROSS-REFERENCES
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                {["Psalm 1:1-3", "Jeremiah 31:33", "Psalm 139:23-24", "Romans 3:10-12", "Hebrews 4:12"].map(
                  (ref) => (
                    <span
                      key={ref}
                      style={{
                        background: "rgba(107,79,187,0.12)",
                        border: "1px solid rgba(107,79,187,0.25)",
                        borderRadius: "8px",
                        padding: "6px 14px",
                        color: "#a78bfa",
                        fontSize: "13px",
                        fontWeight: 600,
                        fontFamily: "sans-serif",
                      }}
                    >
                      {ref}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(217,119,6,0.05) 50%, transparent 100%)",
          padding: "60px 24px 80px",
          textAlign: "center",
          borderTop: "1px solid #1E1E32",
        }}
      >
        <p
          style={{
            color: "#D97706",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            marginBottom: "16px",
            fontFamily: "sans-serif",
          }}
        >
          CONTINUE YOUR STUDY
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 42px)",
            fontWeight: 900,
            color: "#F2F2F8",
            marginBottom: "16px",
            lineHeight: 1.2,
          }}
        >
          Go Deeper in Jeremiah
        </h2>
        <p
          style={{
            color: "#9898B3",
            fontSize: "16px",
            lineHeight: 1.7,
            marginBottom: "32px",
            maxWidth: "500px",
            margin: "0 auto 32px",
          }}
          dangerouslySetInnerHTML={{
            __html:
              "Jeremiah&apos;s prophecy spans 52 chapters of raw, honest dialogue between God and his people. Every chapter rewards careful study.",
          }}
        />
        <div
          style={{
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/jeremiah-33-guide"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #D97706, #a78bfa)",
              color: "#07070F",
              borderRadius: "12px",
              padding: "14px 28px",
              fontWeight: 800,
              fontSize: "14px",
              textDecoration: "none",
              fontFamily: "sans-serif",
            }}
          >
            Jeremiah 33 &mdash; Call to Me and I Will Answer
          </a>
          <a
            href="/bible-study"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "#9898B3",
              border: "1px solid #1E1E32",
              borderRadius: "12px",
              padding: "14px 28px",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              fontFamily: "sans-serif",
            }}
          >
            All Bible Study Guides
          </a>
        </div>
      </section>
    </div>
  );
}
