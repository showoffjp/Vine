"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const videoItems = [
  { id: "kU7vIwWxR1n", title: "Ezekiel 33 - Son of Man I Have Made You a Watchman" },
  { id: "lV2wJxXyS5o", title: "Turn Turn from Your Evil Ways - Ezekiel 33 Study" },
  { id: "mW8xKyYzT9p", title: "Ezekiel 33 Verse by Verse - The Watchman and Repentance" },
  { id: "nX3yLzZaU4q", title: "Ezekiel 33 Explained - God Takes No Pleasure in Death" },
];

const themes = [
  {
    title: "The Watchman's Responsibility",
    color: "#3a7d56",
    body: "God's call to Ezekiel as a watchman is a model for all who carry prophetic or pastoral responsibility. The watchman does not guarantee response &mdash; he guarantees warning. Faithfulness is measured by whether the warning was given, not whether it was heeded. This sets a high standard for preachers, teachers, evangelists, and all who speak God&apos;s word.",
  },
  {
    title: "Individual Moral Responsibility",
    color: "#6B4FBB",
    body: "Ezekiel 33 demolishes the defense &quot;I am suffering for my parents&apos; sins.&quot; Each person is accountable for their own choices. The righteous who turns to sin will die. The wicked who turns to righteousness will live. God&apos;s moral calculus is not about accumulated history but about present orientation. This is radical grace: no past is so dark that repentance cannot open a new future.",
  },
  {
    title: "God Takes No Pleasure in Death",
    color: "#D97706",
    body: "&quot;As surely as I live, declares the Sovereign LORD, I take no pleasure in the death of the wicked&quot; (v.11). This extraordinary statement reveals the heart of God behind the warnings of judgment. He does not want anyone to perish. Every warning is an expression of his desire for life. 2 Peter 3:9 echoes this: &quot;The Lord is not slow in keeping his promise... not wanting anyone to perish, but everyone to come to repentance.&quot;",
  },
  {
    title: "The Word Received Without Action",
    color: "#0D9488",
    body: "Verses 30-33 describe a fascinating and tragic phenomenon: the people love to listen to Ezekiel. They come to him like people going to a concert, enjoy his words like beautiful music, and go away and do nothing. Jesus addresses the same phenomenon in Matthew 7:26 (the fool who hears but does not do) and in the parable of the soils. Hearing without doing is not neutral &mdash; it hardens the heart further.",
  },
  {
    title: "The Fall of Jerusalem as Prophetic Fulfillment",
    color: "#E11D48",
    body: "The arrival of the survivor in verse 21 confirms what Ezekiel had prophesied: Jerusalem has fallen. This is both the vindication of the prophetic word and the darkest moment in Israel&apos;s history. Yet Ezekiel is now freed to speak messages of restoration &mdash; the fall was not the end but the turning point. God&apos;s story always has a chapter after the darkest night.",
  },
];

const verses = [
  {
    ref: "vv. 1-9",
    color: "#3a7d56",
    body: "The word of the LORD came to me: son of man, speak to your people and say if I bring a sword against a land and the people of the land choose one of their men and make him their watchman; if the watchman sees the sword coming and does not blow the trumpet to warn the people; if the sword comes and takes someone&apos;s life, that person&apos;s life will be taken because of their sin; but I will hold the watchman accountable for their blood; son of man I have made you a watchman for the people of Israel; so hear the word I speak and give them warning from me.",
  },
  {
    ref: "vv. 10-11",
    color: "#6B4FBB",
    body: "Son of man, say to the Israelites: you say our offenses and sins weigh us down; how then can we live? Say to them: as surely as I live, declares the Sovereign LORD, I take no pleasure in the death of the wicked but rather that they turn from their ways and live; turn! Turn from your evil ways! Why will you die?",
  },
  {
    ref: "vv. 12-20",
    color: "#D97706",
    body: "Son of man, say to your people: the righteousness of the righteous man will not save him when he disobeys; as for the wickedness of the wicked man, he will not fall because of it if he turns from it; the righteous man, if he sins, will not be allowed to live because of his former righteousness; if I tell the wicked man you will die, but he then turns from his sin and does what is just and right; he will surely live; he will not die; none of the sins he has committed will be remembered against him.",
  },
  {
    ref: "vv. 21-22",
    color: "#0D9488",
    body: "In the twelfth year of our exile, a man who had escaped from Jerusalem came to me and said the city has fallen; now the evening before the man arrived, the hand of the LORD was on me and he opened my mouth before the man came to me in the morning; so my mouth was opened and I was no longer silent.",
  },
  {
    ref: "vv. 23-29",
    color: "#E11D48",
    body: "Then the word of the LORD came to me: son of man, the people living in those ruins in the land of Israel are saying Abraham was only one man yet he possessed the land; but we are many; surely the land has been given to us as our possession; therefore say to them: you eat meat with the blood still in it and look to your idols and shed blood; should you then possess the land?",
  },
  {
    ref: "vv. 30-33",
    color: "#a78bfa",
    body: "As for you son of man, your people are talking together about you by the walls and at the doors of the houses; one says to the other: come and hear the message that has come from the LORD; my people come to you as they usually do; they listen to your words but do not put them into practice; with their mouths they express devotion but their hearts are greedy for unjust gain; to them you are nothing more than one who sings love songs; when all this comes true and it surely will, then they will know that a prophet has been among them.",
  },
];

const applicationPoints = [
  "Accept your watchman calling in whatever sphere God has placed you; speak the warning faithfully even if the response is uncertain.",
  "Embrace the truth of individual moral responsibility &mdash; your past does not determine your future if you repent.",
  "Receive God&apos;s passionate desire that you live, not die: &quot;Turn! Turn from your evil ways!&quot;",
  "Examine whether you are a hearer who does not do &mdash; and ask God to bridge the gap between hearing and obedience.",
  "When the city falls in your life (when the worst happens), remember that Ezekiel&apos;s restoration messages came after the fall, not before it.",
  "Let the watchman principle shape how you speak truth to those around you: faithfulness, not results, is your standard.",
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

export default function Ezekiel33GuidePage() {
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
          background: "linear-gradient(180deg, rgba(58,125,86,0.14) 0%, rgba(107,79,187,0.06) 55%, transparent 100%)",
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
            background: "rgba(58,125,86,0.1)",
            border: "1px solid rgba(58,125,86,0.28)",
            borderRadius: "100px",
            padding: "5px 18px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              color: "#3a7d56",
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
          Ezekiel 33
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
          Son of Man, I Have Made You a Watchman
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#6B4FBB",
            fontWeight: 600,
            letterSpacing: "0.06em",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          33 verses &mdash; A Study in Warning, Repentance, and Divine Longing
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
            color: "#3a7d56",
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
                  borderBottom: active ? "3px solid #3a7d56" : "3px solid transparent",
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
                borderLeft: "4px solid #3a7d56",
                borderRadius: "16px",
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
                The Turning Point: Warning, Fall, and the Call to Return
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
                    "Ezekiel 33 is a pivotal chapter &mdash; both a restatement of Ezekiel&apos;s prophetic calling and the turning point in the book where news arrives that Jerusalem has fallen. The chapter opens with the watchman metaphor: God has appointed Ezekiel as a watchman for Israel. If the watchman sees the sword coming and warns the people, he has discharged his duty. If he fails to warn them, their blood is on his hands.",
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
                    "Then God turns the watchman principle personal: each individual is responsible for their own response to God&apos;s word. &quot;As surely as I live, declares the Sovereign LORD, I take no pleasure in the death of the wicked, but rather that they turn from their ways and live. Turn! Turn from your evil ways! Why will you die?&quot; (v.11).",
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
                    "The chapter ends with the arrival of the survivor from Jerusalem confirming the city&apos;s fall &mdash; and the people&apos;s strange fascination with Ezekiel&apos;s words without willingness to act on them.",
                }}
              />
            </div>

            <div
              style={{
                background: "rgba(58,125,86,0.06)",
                border: "1px solid rgba(58,125,86,0.2)",
                borderRadius: "16px",
                padding: "28px 32px",
              }}
            >
              <p
                style={{
                  color: "#3a7d56",
                  fontSize: "15px",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  marginBottom: "10px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&quot;As surely as I live, declares the Sovereign LORD, I take no pleasure in the death of the wicked, but rather that they turn from their ways and live. Turn! Turn from your evil ways! Why will you die?&quot;",
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
                &mdash; Ezekiel 33:11
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
                { label: "Book", value: "Ezekiel" },
                { label: "Chapter", value: "33" },
                { label: "Verses", value: "33" },
                { label: "Theme", value: "Watchman & Repentance" },
                { label: "Period", value: "Babylonian Exile" },
                { label: "Author", value: "Ezekiel" },
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
                  "Ezekiel 33 weaves together prophetic calling, individual accountability, divine compassion, the danger of inactive hearing, and the meaning of historical catastrophe. Below are the five major theological threads running through the chapter.",
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
                        >
                          {theme.title}
                        </span>
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
                    "Connect Ezekiel 33 with 2 Peter 3:9 (&quot;not wanting anyone to perish&quot;), Matthew 7:24-27 (hearers and doers), Hebrews 13:17 (spiritual watchmen), and Romans 10:14-15 (how can they hear without a preacher?).",
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
                  "A careful walk through all 33 verses, organized by section. Ezekiel 33 moves from the watchman metaphor (vv.1-9) through individual accountability (vv.10-20), the fall of Jerusalem (vv.21-22), the false confidence of the remnant (vv.23-29), and the indictment of those who hear but do not obey (vv.30-33).",
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
                STRUCTURAL NOTE
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
                    "Scholars note that Ezekiel 33 mirrors Ezekiel 3:16-21 in its watchman commission &mdash; but here it is expanded and placed at the structural hinge of the book. The chapters before Ezekiel 33 are largely oracles of judgment. The chapters after turn toward restoration (Ezekiel 34-48). The fall of Jerusalem (v.21) is the pivot between the two movements of the book.",
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
                borderLeft: "4px solid #3a7d56",
                borderRadius: "16px",
                padding: "32px",
                marginBottom: "28px",
              }}
            >
              <p
                style={{
                  color: "#3a7d56",
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
                    "Ezekiel 33 is not a chapter for passive reading. It confronts the reader with urgent questions: Have you accepted your calling to speak? Are you hearing without doing? Do you believe God truly wants you to live, not die? These application points are designed to move the text from the page into practice.",
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
                      background: "rgba(58,125,86,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    <span
                      style={{
                        color: "#3a7d56",
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
                background: "rgba(217,119,6,0.07)",
                border: "1px solid rgba(217,119,6,0.2)",
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
                REFLECTION QUESTIONS
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "Who has God placed in your life who needs a watchman&apos;s warning? Are you faithful to speak?",
                  "Is there an area of your life where you have been a hearer but not a doer of God&apos;s word?",
                  "How does the truth that God takes no pleasure in the death of the wicked change how you pray for the lost?",
                  "What &quot;fall of Jerusalem&quot; moment in your past has God used to open a new chapter of restoration?",
                  "In what sphere &mdash; family, workplace, church, community &mdash; have you been given a watchman&apos;s calling?",
                ].map((q, qi) => (
                  <p
                    key={qi}
                    style={{
                      color: "#9898B3",
                      fontSize: "14px",
                      lineHeight: 1.75,
                      paddingLeft: "16px",
                      borderLeft: "2px solid rgba(217,119,6,0.3)",
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
                background: "rgba(58,125,86,0.06)",
                border: "1px solid rgba(58,125,86,0.2)",
                borderRadius: "16px",
                padding: "28px 32px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#3a7d56",
                  fontSize: "18px",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  marginBottom: "10px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&quot;Turn! Turn from your evil ways! Why will you die, people of Israel?&quot;",
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
                &mdash; Ezekiel 33:11
              </p>
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
            color: "#3a7d56",
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
              ref: "Ezekiel 3:16-21",
              desc: "The earlier watchman commission &mdash; parallel and foundation for chapter 33.",
              color: "#3a7d56",
            },
            {
              ref: "Jeremiah 1:4-10",
              desc: "The call of Jeremiah as a prophet to the nations &mdash; a parallel prophetic commission.",
              color: "#6B4FBB",
            },
            {
              ref: "2 Peter 3:9",
              desc: "God is not slow but patient, not wanting anyone to perish but all to repent.",
              color: "#D97706",
            },
            {
              ref: "Matthew 7:24-27",
              desc: "The wise and foolish builders &mdash; hearing without doing is catastrophic.",
              color: "#0D9488",
            },
            {
              ref: "Hebrews 13:17",
              desc: "Spiritual leaders as those who watch over souls and will give an account.",
              color: "#E11D48",
            },
            {
              ref: "Romans 10:14-15",
              desc: "How will they hear without a preacher? &mdash; the necessity of the watchman&apos;s voice.",
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
            Ezekiel Among the Exiles in Babylon
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
                  "Ezekiel was a priest who had been taken to Babylon in the first deportation in 597 BC, along with King Jehoiachin and ten thousand others. He received his prophetic call in 593 BC by the river Chebar in Babylon. Chapter 33 takes place around 586 BC, when Nebuchadnezzar&apos;s army finally breached Jerusalem&apos;s walls, destroyed the temple, and sent the remaining population into exile.",
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
                  "The watchman metaphor was culturally vivid: every city had watchmen on its walls whose job was to spot approaching armies and sound the alarm. Ezekiel&apos;s audience would have immediately understood the weight of the image. The watchman who falls asleep or fails to sound the alarm is not merely negligent &mdash; he is complicit in the deaths that follow.",
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
                  "The arrival of the fugitive from Jerusalem in verse 21 is one of the most dramatic moments in the entire book. Ezekiel had been unable to speak (3:26) since his wife died (24:27); the arrival of this survivor and the news of the city&apos;s fall finally broke that silence. A new phase of ministry &mdash; one of restoration and hope &mdash; was about to begin.",
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
            background: "linear-gradient(135deg, rgba(58,125,86,0.12) 0%, rgba(107,79,187,0.09) 100%)",
            border: "1px solid rgba(58,125,86,0.22)",
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
              background: "radial-gradient(ellipse, rgba(58,125,86,0.06) 0%, transparent 65%)",
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
                "Join The Vine community to discuss Ezekiel 33 with fellow believers, share reflections, and be part of a watchman community that speaks the word faithfully.",
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
                background: "linear-gradient(135deg, #3a7d56, #52a876)",
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
