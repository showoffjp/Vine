"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const videoItems = [
  { id: "gQ4rEsStN8j", title: "Jeremiah 33 - Call to Me and I Will Answer Great Things" },
  { id: "hR9sFtTuO3k", title: "The Righteous Branch of David - Jeremiah 33 Study" },
  { id: "iS1tGuUvP7l", title: "Jeremiah 33 Verse by Verse - God Restores His People" },
  { id: "jT6uHvVwQ2m", title: "Jeremiah 33 Explained - The Unbreakable Covenant of Day and Night" },
];

const keyThemes = [
  {
    id: "theme1",
    title: "The Invitation to Call",
    color: "#3a7d56",
    body: "&quot;Call to me and I will answer you&quot; (v.3). This is not a conditional promise based on worthiness &mdash; it is an open invitation from God to anyone who calls. The word for &quot;call&quot; is the same used throughout the psalms for crying out to God. The promise is twofold: God will answer and he will reveal &quot;great and unsearchable things&quot; &mdash; mysteries beyond what we could discover on our own. Prayer is the key to revelation.",
  },
  {
    id: "theme2",
    title: "Healing, Cleansing, and Restoration",
    color: "#0D9488",
    body: "God promises to bring health and healing to the city, to cleanse it from all its sin and rebellion, to rebuild it (vv.6-9). The order matters: healing and cleansing precede rebuilding. Personal and corporate restoration follows the same pattern: first the deep work of cleansing from sin, then the rebuilding of what has been destroyed.",
  },
  {
    id: "theme3",
    title: "The Return of Joy and the Voice of the Bride",
    color: "#D97706",
    body: "&quot;I will restore the fortunes of the land... the sounds of joy and gladness, the voices of bride and bridegroom, and the voices of those who bring thank offerings to the house of the LORD&quot; (vv.10-11). Joy is not merely emotional &mdash; it is the sign of covenant restored. When the marriage (between God and his people) is renewed, the music returns. Silence and desolation are not God&apos;s final word.",
  },
  {
    id: "theme4",
    title: "The Righteous Branch of David",
    color: "#6B4FBB",
    body: "&quot;In those days and at that time I will make a righteous Branch sprout from David&apos;s line&quot; (v.15). This Messianic prophecy (echoing Jeremiah 23:5) points directly to Jesus. His name: &quot;The LORD Our Righteous Savior.&quot; He will execute justice and righteousness in the land. This Branch has come &mdash; Christ is the fulfillment of every promise made to David.",
  },
  {
    id: "theme5",
    title: "The Covenant as Unbreakable as Day and Night",
    color: "#E11D48",
    body: "&quot;If you can break my covenant with the day and my covenant with the night, so that day and night no longer come at their appointed time, then my covenant with David my servant... and my covenant with the Levites... can be broken&quot; (vv.20-21). The regularity of day and night is God&apos;s signature on his covenant faithfulness. Every sunrise is a covenant renewal. Every sunset is a promise sealed.",
  },
];

const verseItems = [
  {
    id: "vv1",
    ref: "vv.1-3",
    text: "While Jeremiah was still confined in the courtyard of the guard, the word of the LORD came to him a second time: call to me and I will answer you and tell you great and unsearchable things you do not know.",
  },
  {
    id: "vv2",
    ref: "vv.4-9",
    text: "For this is what the LORD, the God of Israel, says about the houses in this city: they will be torn down; I will bring health and healing to it; I will heal my people and will let them enjoy abundant peace and security; I will bring Judah and Israel back from captivity and will rebuild them; I will cleanse them from all the sin they have committed; and this city will bring me renown, joy, praise and honor before all nations on earth.",
  },
  {
    id: "vv3",
    ref: "vv.10-13",
    text: "This is what the LORD says: you say about this place it is a desolate waste; yet in the towns of Judah and in the streets of Jerusalem that are deserted there will be heard once more the sounds of joy and gladness; the voices of bride and bridegroom; and the voices of those who bring thank offerings to the house of the LORD.",
  },
  {
    id: "vv4",
    ref: "vv.14-16",
    text: "The days are coming, declares the LORD, when I will fulfill the good promise I made to the people of Israel and Judah; in those days and at that time I will make a righteous Branch sprout from David&apos;s line; he will do what is just and right in the land; in those days Judah will be saved and Jerusalem will live in safety; this is the name by which it will be called: The LORD Our Righteous Savior.",
  },
  {
    id: "vv5",
    ref: "vv.17-22",
    text: "For this is what the LORD says: David will never fail to have a man to sit on the throne of Israel; nor will the Levitical priests ever fail to have a man to stand before me; as surely as I can break my covenant with the day and my covenant with the night so that day and night no longer come at their appointed time, so my covenant with David my servant can be broken; I will make the descendants of David my servant and the Levites who minister before me as countless as the stars in the sky and as measureless as the sand on the seashore.",
  },
  {
    id: "vv6",
    ref: "vv.23-26",
    text: "The word of the LORD came to Jeremiah: have you not noticed that these people are saying the LORD has rejected the two kingdoms? So they despise my people; this is what the LORD says: if I have not made my covenant with day and night and established the laws of heaven and earth, then I will reject the descendants of Jacob; but I will restore their fortunes and have compassion on them.",
  },
];

const applicationPoints = [
  "Call on God daily for great and unsearchable things beyond your own understanding.",
  "Believe that God heals before he rebuilds &mdash; bring your brokenness to him first.",
  "Pray for the return of joy to your church community.",
  "Receive Jesus as the Righteous Branch who is &quot;The LORD Our Righteous Savior.&quot;",
  "Let every sunrise remind you of God&apos;s covenant faithfulness.",
  "Speak the promises of Jeremiah 33 over situations that look like permanent desolation.",
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

export default function Jeremiah33GuidePage() {
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
            "linear-gradient(180deg, rgba(58,125,86,0.13) 0%, rgba(107,79,187,0.07) 55%, transparent 100%)",
          padding: "72px 24px 56px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(58,125,86,0.1)",
            border: "1px solid rgba(58,125,86,0.3)",
            borderRadius: "100px",
            padding: "6px 18px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              color: "#3a7d56",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              fontFamily: "sans-serif",
            }}
          >
            JEREMIAH 33 &mdash; BIBLE STUDY GUIDE
          </span>
        </div>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: "20px",
            background: "linear-gradient(135deg, #3a7d56 0%, #a78bfa 60%, #3a7d56 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Call to Me and I
          <br />
          Will Answer You
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
          Jeremiah 33 &mdash; 26 Verses
        </p>
        <p
          style={{
            fontSize: "clamp(14px, 1.8vw, 16px)",
            color: "#6B6B8A",
            lineHeight: 1.6,
            maxWidth: "560px",
            margin: "0 auto",
          }}
          dangerouslySetInnerHTML={{
            __html:
              "&quot;Call to me and I will answer you and tell you great and unsearchable things you do not know.&quot; &mdash; Jeremiah 33:3",
          }}
        />
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
            color: "#3a7d56",
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
                  borderBottom: isActive ? "2px solid #3a7d56" : "2px solid transparent",
                  color: isActive ? "#3a7d56" : "#9898B3",
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
                borderLeft: "4px solid #3a7d56",
                borderRadius: "20px",
                padding: "40px 40px 40px 36px",
                marginBottom: "32px",
              }}
            >
              <p
                style={{
                  color: "#3a7d56",
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
                Jeremiah 33 &mdash; 26 Verses
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
                    "Jeremiah 33 is one of the greatest chapters of hope in the entire Old Testament &mdash; written while Jeremiah was still confined in the courtyard of the guard during the Babylonian siege of Jerusalem. God speaks to him a second time with a message of extraordinary promise. The chapter opens with one of the Bible&apos;s most beloved invitations: &quot;Call to me and I will answer you and tell you great and unsearchable things you do not know&quot; (v.3).",
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
                    "God then unfolds a vision of complete restoration: healing, rebuilding, cleansing from sin, forgiveness, the return of joy, the return of the voice of bride and bridegroom, the Righteous Branch of David who will execute justice and righteousness, and the unbreakable covenant of day and night that guarantees the perpetuity of both the Levitical priests and the Davidic line. All these promises flow to their fulfillment in Jesus Christ.",
                }}
              />
            </div>

            {/* Key Verse Callout */}
            <div
              style={{
                background: "rgba(58,125,86,0.07)",
                border: "1px solid rgba(58,125,86,0.2)",
                borderRadius: "16px",
                padding: "28px 32px",
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
                    "&quot;Call to me and I will answer you and tell you great and unsearchable things you do not know.&quot;",
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
                &mdash; Jeremiah 33:3
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
                { label: "Total Verses", value: "26", color: "#3a7d56" },
                { label: "Central Promise", value: "Call to Me", color: "#D97706" },
                { label: "Messianic Title", value: "Righteous Branch", color: "#6B4FBB" },
                { label: "Setting", value: "Siege of Jerusalem", color: "#E11D48" },
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

            {/* Context Note */}
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
                  color: "#0D9488",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "10px",
                  fontFamily: "sans-serif",
                }}
              >
                HISTORICAL CONTEXT
              </p>
              <p
                style={{
                  color: "#B0B0CC",
                  fontSize: "14px",
                  lineHeight: 1.8,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "This chapter was written while Jeremiah sat in prison &mdash; confined in the courtyard of the guard by King Zedekiah (Jeremiah 32:2). Jerusalem was under Babylonian siege. The city was on the brink of destruction. Yet God chose this exact moment of catastrophe to speak his most extravagant promises. Hope is not God&apos;s response to favorable conditions &mdash; it is God&apos;s character breaking into impossible situations.",
                }}
              />
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
                  "Five major threads of hope and promise run through Jeremiah 33. Click each theme to explore what God is revealing.",
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
                      >
                        {theme.title}
                      </span>
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

            {/* Messianic Highlight Box */}
            <div
              style={{
                marginTop: "28px",
                background: "rgba(107,79,187,0.07)",
                border: "1px solid rgba(107,79,187,0.2)",
                borderRadius: "16px",
                padding: "28px 32px",
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
                MESSIANIC FULFILLMENT
              </p>
              <p
                style={{
                  color: "#F2F2F8",
                  fontSize: "16px",
                  lineHeight: 1.75,
                  marginBottom: "12px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The &quot;Righteous Branch&quot; of Jeremiah 33:15 is a direct Messianic prophecy fulfilled in Jesus Christ. He is the one who sits on David&apos;s throne forever (Luke 1:32-33), who executes perfect justice and righteousness (Isaiah 11:4-5), and whose name is &quot;The LORD Our Righteous Savior&quot; &mdash; a name that points to justification by faith in him alone.",
                }}
              />
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {["Isaiah 11:1-5", "Luke 1:32-33", "Romans 1:3-4", "Revelation 22:16"].map(
                  (ref) => (
                    <span
                      key={ref}
                      style={{
                        background: "rgba(107,79,187,0.14)",
                        border: "1px solid rgba(107,79,187,0.28)",
                        borderRadius: "8px",
                        padding: "5px 12px",
                        color: "#a78bfa",
                        fontSize: "12px",
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
                  "A passage-by-passage walk through all 26 verses of Jeremiah 33, following the chapter&apos;s arc from invitation to unbreakable covenant.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {verseItems.map((item, idx) => {
                const colors = ["#3a7d56", "#0D9488", "#D97706", "#6B4FBB", "#E11D48", "#a78bfa"];
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

            {/* The Great Verse 3 Callout */}
            <div
              style={{
                marginTop: "32px",
                background: "linear-gradient(135deg, rgba(58,125,86,0.1) 0%, rgba(13,148,136,0.07) 100%)",
                border: "1px solid rgba(58,125,86,0.25)",
                borderRadius: "20px",
                padding: "32px 36px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#3a7d56",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "14px",
                  fontFamily: "sans-serif",
                }}
              >
                THE GREAT INVITATION &mdash; VERSE 3
              </p>
              <p
                style={{
                  color: "#F2F2F8",
                  fontSize: "clamp(18px, 3vw, 26px)",
                  fontStyle: "italic",
                  lineHeight: 1.65,
                  marginBottom: "12px",
                  fontWeight: 600,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&quot;Call to me and I will answer you and tell you great and unsearchable things you do not know.&quot;",
                }}
              />
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "14px",
                  fontWeight: 700,
                  fontFamily: "sans-serif",
                }}
              >
                &mdash; Jeremiah 33:3
              </p>
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
                How to Apply Jeremiah 33
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
                    "Jeremiah 33 is God&apos;s word of hope into your siege. Whatever feels impossible or permanently desolate, bring it before the God who promises to answer when you call.",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {applicationPoints.map((point, idx) => {
                const colors = ["#3a7d56", "#0D9488", "#D97706", "#6B4FBB", "#E11D48", "#a78bfa"];
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
                background: "rgba(58,125,86,0.06)",
                border: "1px solid rgba(58,125,86,0.18)",
                borderRadius: "16px",
                padding: "28px 32px",
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
                    "&quot;Lord, I am calling to you as you have commanded. Answer me with great and unsearchable things. Heal what is broken in me before you rebuild. Restore the sounds of joy in my home and my church. You are the Righteous Branch &mdash; my LORD and my Righteous Savior. Your covenant is as sure as the rising of the sun.&quot;",
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
                &mdash; Adapted from Jeremiah 33:3, 6, 11, 15-16, 20
              </p>
            </div>

            {/* Day and Night Covenant Reminder */}
            <div
              style={{
                marginTop: "28px",
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "16px",
                padding: "24px 28px",
                display: "flex",
                gap: "20px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #D97706 0%, #6B4FBB 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: "26px" }}>*</span>
              </div>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <p
                  style={{
                    color: "#D97706",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    marginBottom: "6px",
                    fontFamily: "sans-serif",
                  }}
                >
                  DAILY REMINDER
                </p>
                <p
                  style={{
                    color: "#B0B0CC",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Every morning when the sun rises, God is renewing his covenant with you. Every evening when the sun sets, he is sealing his promise. His faithfulness is written into the rhythm of creation itself (Jeremiah 33:20-21).",
                  }}
                />
              </div>
            </div>

            {/* Cross-Reference Banner */}
            <div
              style={{
                marginTop: "24px",
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
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {[
                  "Jeremiah 23:5-6",
                  "Isaiah 11:1-5",
                  "Luke 1:32-33",
                  "Romans 1:3-4",
                  "Lamentations 3:22-23",
                  "Revelation 22:16",
                ].map((ref) => (
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
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(58,125,86,0.05) 50%, transparent 100%)",
          padding: "60px 24px 80px",
          textAlign: "center",
          borderTop: "1px solid #1E1E32",
        }}
      >
        <p
          style={{
            color: "#3a7d56",
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
              "Jeremiah preaches hope into desolation across 52 chapters. Every promise he received points forward to Jesus, the Righteous Branch who has come.",
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
            href="/jeremiah-17-guide"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #3a7d56, #a78bfa)",
              color: "#07070F",
              borderRadius: "12px",
              padding: "14px 28px",
              fontWeight: 800,
              fontSize: "14px",
              textDecoration: "none",
              fontFamily: "sans-serif",
            }}
          >
            Jeremiah 17 &mdash; The Deceitful Heart
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
