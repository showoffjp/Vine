"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const videoItems = [
  { id: "yI7jSwClF4b", title: "Isaiah 52 - Awake Zion and the Beautiful Gospel Herald" },
  { id: "zJ2kTxDmG8c", title: "How Beautiful the Feet of Those Who Bring Good News - Isaiah 52" },
  { id: "aK5lUyEnH1d", title: "Isaiah 52 Verse by Verse - The Lord Reigns" },
  { id: "bL9mVzFoI6e", title: "Isaiah 52 Explained - From Exile to Redemption" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

const keyThemes = [
  {
    id: "t1",
    color: "#3a7d56",
    title: "The Call to Awake",
    body: "God calls his sleeping, captive people to arise. This awakening language runs through all of Scripture &mdash; Ephesians 5:14 quotes an early hymn rooted in this very passage. The church in every age needs to hear the command to shake off spiritual slumber and put on strength. Zion is not called to wait passively but to actively rouse herself, clothe herself, and take her seat as a royal city. The imperative is doubled &mdash; &quot;Awake, awake!&quot; &mdash; to signal urgency. God has already accomplished the redemption; the call is for his people to live into what is already true.",
  },
  {
    id: "t2",
    color: "#6B4FBB",
    title: "The Beautiful Gospel Messenger",
    body: "Romans 10:15 quotes verse 7 explicitly as describing those who preach the good news of Jesus Christ. &quot;How beautiful are the feet&quot; honors the human messenger who carries the word of salvation across difficult terrain. The imagery is of a runner crossing mountains to bring news of victory to a waiting city. Every believer who shares the gospel participates in this prophetic vision. The beauty is not in personal eloquence or charisma but in the message carried and the willingness to carry it. The feet are beautiful because of where they have been willing to go.",
  },
  {
    id: "t3",
    color: "#D97706",
    title: "Your God Reigns!",
    body: "The content of the good news is emphatically theocentric: &quot;Your God reigns!&quot; The kingship of God &mdash; expressed through the resurrection and ascension of Christ &mdash; is the very heart of the gospel. Evangelism is not merely an offer of personal forgiveness and individual comfort but the proclamation of a new King who has taken his throne. The watching watchmen on the walls burst into shouts of joy not because things are going well for them personally but because the Lord himself has returned to Zion. The kingdom announcement precedes and grounds the personal application.",
  },
  {
    id: "t4",
    color: "#0D9488",
    title: "The LORD Comforts and Redeems",
    body: "Verse 9 declares: &quot;The LORD has comforted his people; he has redeemed Jerusalem.&quot; The comfort and the redemption are spoken in the past tense of prophetic certainty even before they have been historically accomplished. God&apos;s promises are so sure that they can be announced as already done. The ruins of Jerusalem are summoned to burst into songs of joy. Even in a state of devastation, the city is commanded to celebrate &mdash; not because of present appearances but because of the unshakeable word of the LORD. This is faith operating from the certainty of God&apos;s declared intention.",
  },
  {
    id: "t5",
    color: "#E11D48",
    title: "The Servant&apos;s Exaltation",
    body: "Verses 13 through 15 introduce the Servant who will act wisely and be raised and lifted up and highly exalted. The three verbs used here &mdash; raised, lifted up, highly exalted &mdash; are the same three verbs used of God himself in Isaiah 6:1. This Servant shares in the divine exaltation. Yet before that exaltation comes a disfigurement beyond human likeness. Kings shut their mouths in stunned silence because they see and understand what was never told or explained to them. The resurrection pattern of the gospel &mdash; humiliation followed by exaltation &mdash; is announced here centuries before Calvary.",
  },
];

const verses = [
  {
    id: "v1",
    ref: "vv. 1-2",
    color: "#3a7d56",
    body: "Awake, awake, O Zion &mdash; clothe yourself with strength; put on your garments of splendor, Jerusalem, the holy city. The uncircumcised and defiled will not enter you again. Shake off your dust; rise up, sit enthroned, Jerusalem. Free yourself from the chains on your neck, Daughter of Zion, now captive. The double imperative &quot;Awake, awake&quot; echoes the urgency of one shaking a sleeping person. The call to clothe oneself with strength is not a call to self-effort but to receive and put on what God has already provided. The chains on the neck picture the humiliation of exile and captivity from which God is about to liberate his people.",
  },
  {
    id: "v2",
    ref: "vv. 3-6",
    color: "#6B4FBB",
    body: "For this is what the LORD says: you were sold for nothing, and without money you will be redeemed. Long ago my people went down to Egypt to dwell there; the Assyrian also has oppressed them without cause. And now what do I have here? declares the LORD, since my people have been taken away for nothing? Those who rule them mock, and all day long my name is constantly blasphemed. Therefore in that day they will know that it is I who foretold it; yes, it is I. The theology here is profound &mdash; Israel&apos;s oppressors gained nothing real from their conquest of God&apos;s people. The ransom paid for their redemption will be nothing, because the price was already paid in God&apos;s own purpose.",
  },
  {
    id: "v3",
    ref: "vv. 7-8",
    color: "#D97706",
    body: "How beautiful on the mountains are the feet of those who bring good news, who proclaim peace, who bring good tidings, who proclaim salvation, who say to Zion, &quot;Your God reigns!&quot; Listen! Your watchmen lift up their voices; together they shout for joy. When the LORD returns to Zion, they will see it with their own eyes. This is arguably the most missional passage in the entire Old Testament. Paul quotes it in Romans 10 to describe the preaching of the gospel of Jesus Christ. The watchmen on the walls of Jerusalem catch sight of the herald coming over the ridge and they begin to shout in relay &mdash; the good news ripples outward from person to person.",
  },
  {
    id: "v4",
    ref: "vv. 9-10",
    color: "#0D9488",
    body: "Burst into songs of joy together, you ruins of Jerusalem, for the LORD has comforted his people; he has redeemed Jerusalem. The LORD will lay bare his holy arm in the sight of all the nations, and all the ends of the earth will see the salvation of our God. The ruins of the city are commanded to sing before the rebuilding begins. The arm of the LORD is an image of divine power deployed in public display. The salvation is not merely local and national but cosmic in scope &mdash; all the ends of the earth will witness it. This universalism prepares for the Servant Songs and for the New Testament proclamation of a gospel for every nation.",
  },
  {
    id: "v5",
    ref: "vv. 11-12",
    color: "#a78bfa",
    body: "Depart, depart, go out from there! Touch no unclean thing! Come out from it and be pure, you who carry the articles of the LORD&apos;s house. But you will not leave in haste or go in flight; for the LORD will go before you, the God of Israel will be your rear guard. The call to depart echoes the Exodus command to leave Egypt. But this departure is marked by unhurried dignity rather than desperate flight. The LORD himself forms both the vanguard and the rearguard of the procession &mdash; his people are fully surrounded by his protection. Those who carry the sacred vessels must be consecrated, a picture of the holiness required of those who bear the gospel.",
  },
  {
    id: "v6",
    ref: "vv. 13-15",
    color: "#E11D48",
    body: "See, my servant will act wisely; he will be raised and lifted up and highly exalted. Just as many were appalled at him &mdash; his appearance was so disfigured beyond that of any human being and his form marred beyond human likeness &mdash; so he will sprinkle many nations, and kings will shut their mouths because of him. For what they were not told, they will see, and what they have not heard, they will understand. This fourth Servant Song opening is startling in its juxtaposition: the same figure who is raised and exalted to divine heights was previously disfigured beyond recognition as human. The sprinkling of nations picks up priestly language from Leviticus &mdash; this Servant performs a cosmic priestly act of atonement and cleansing.",
  },
];

const appPoints = [
  {
    id: "a1",
    color: "#3a7d56",
    title: "Awake from Spiritual Lethargy",
    body: "The imperative &quot;Awake, awake!&quot; is addressed to the covenant community in every generation. Where have you grown spiritually passive, comfortable in captivity, or accustomed to chains that God has already broken? The call to clothe yourself with strength means drawing on resources already given &mdash; the word, the Spirit, the community of believers. Identify one area where spiritual slumber has settled in and bring it before God this week. Ask him to rouse what has grown dormant.",
  },
  {
    id: "a2",
    color: "#6B4FBB",
    title: "Become a Beautiful-Footed Messenger",
    body: "Romans 10:15 makes the application explicit for New Testament believers: you are the herald whose feet are beautiful when you carry the good news. The beauty is not in your polish or preparation but in your willingness to go and speak. Who in your neighborhood, workplace, or family needs to hear &quot;Your God reigns&quot;? The missionary vision of Isaiah 52 is not primarily for professional preachers &mdash; it is for every person who has received the good news and can pass it on. Make a specific plan to share the gospel with one person this month.",
  },
  {
    id: "a3",
    color: "#D97706",
    title: "Declare the Kingship of God",
    body: "The content of the gospel as announced in Isaiah 52:7 is royal: &quot;Your God reigns!&quot; Christian worship and witness that loses this declaration shrinks the gospel. In your prayers, your conversations, your worship, practice proclaiming the kingship of God. When circumstances look chaotic or threatening, return to the declaration: the LORD is on the throne. The watchmen&apos;s shout is not wishful thinking but prophetic announcement based on what they have seen coming over the mountain.",
  },
  {
    id: "a4",
    color: "#0D9488",
    title: "Receive Past-Tense Certainty as Present Reality",
    body: "God announces comfort and redemption in the past tense before they happen because his word is as good as its fulfillment. Identify one promise of God that you need to receive with this same past-tense certainty. God&apos;s promises are not merely future hopes &mdash; they are present realities held in the grip of his unchanging purpose. The ruins are commanded to sing now, in advance of the rebuilding. What song of faith can you sing now, over the ruins of something in your life that God has promised to restore?",
  },
  {
    id: "a5",
    color: "#E11D48",
    title: "Separate from Spiritual Compromise",
    body: "Verse 11 calls those who carry the articles of the LORD&apos;s house to touch no unclean thing and come out and be pure. The gospel commission requires a life of integrity. Where have worldly entanglements compromised your witness or your worship? The departure described here is unhurried and dignified &mdash; not reactive panic but deliberate consecration. God goes before you and behind you; the separation is not isolation from the world but distinction within it. Ask the Spirit to show you what &quot;unclean things&quot; need to be released.",
  },
  {
    id: "a6",
    color: "#a78bfa",
    title: "Embrace the Exaltation-Through-Humiliation Pattern",
    body: "The Servant of Isaiah 52-53 is both deeply humiliated and supremely exalted &mdash; and the exaltation comes through and after the humiliation, not instead of it. The same pattern operates in the life of every follower of Jesus: &quot;If we died with him, we will also live with him&quot; (2 Timothy 2:11). Where God is calling you into difficulty, service, or sacrifice, receive it as participation in the Servant&apos;s pattern rather than as abandonment. The disfigurement precedes the exaltation; the cross precedes the crown. Trust the pattern.",
  },
];

export default function Isaiah52GuidePage() {
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
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      {/* -- HERO ------------------------------------------------------- */}
      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(58,125,86,0.18) 0%, rgba(107,79,187,0.10) 55%, transparent 100%)",
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
            background: "rgba(58,125,86,0.12)",
            border: "1px solid rgba(58,125,86,0.30)",
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
          Isaiah 52
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 22px)",
            color: "#9898B3",
            lineHeight: 1.6,
            maxWidth: "640px",
            margin: "0 auto 12px",
          }}
        >
          Awake Zion and How Beautiful the Feet of the Gospel
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#6B6B88",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          15 verses &mdash; Expository Study with Video, Commentary, and Application
        </p>
      </section>

      {/* -- TAB BAR ---------------------------------------------------- */}
      <div
        style={{
          background: "#12121F",
          borderBottom: "1px solid #1E1E32",
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            gap: "0",
            overflowX: "auto",
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "transparent",
                border: "none",
                borderBottom: activeTab === tab ? "3px solid #3a7d56" : "3px solid transparent",
                color: activeTab === tab ? "#3a7d56" : "#9898B3",
                cursor: "pointer",
                fontFamily: "system-ui, sans-serif",
                fontSize: "14px",
                fontWeight: activeTab === tab ? 700 : 500,
                padding: "16px 20px",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* -- MAIN CONTENT ----------------------------------------------- */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px 100px" }}>

        {/* -- VIDEO GRID ---------------------------------------------- */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#3a7d56",
              marginBottom: "24px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            VIDEO TEACHING
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
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
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: 1.45,
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {v.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* -- OVERVIEW TAB -------------------------------------------- */}
        {activeTab === "Overview" && (
          <section>
            <div
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderLeft: "4px solid #3a7d56",
                borderRadius: "16px",
                padding: "40px 40px 40px 36px",
                marginBottom: "40px",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(20px, 3vw, 30px)",
                  fontWeight: 900,
                  color: "#F2F2F8",
                  marginBottom: "24px",
                  lineHeight: 1.25,
                }}
              >
                Chapter Overview
              </h2>
              <p
                style={{
                  color: "#C0C0D8",
                  fontSize: "17px",
                  lineHeight: 1.9,
                  marginBottom: "20px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 52 is a transitional chapter of immense energy and beauty. It opens with God&apos;s command to Zion: &quot;Awake, awake! Clothe yourself with strength... Shake off your dust; rise up, sit enthroned... Free yourself from the chains on your neck, Daughter of Zion now captive.&quot; This is the language of exodus and resurrection &mdash; God calls his people out of their captivity with sovereign authority and tender urgency.",
                }}
              />
              <p
                style={{
                  color: "#C0C0D8",
                  fontSize: "17px",
                  lineHeight: 1.9,
                  marginBottom: "20px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Then comes the famous missionary herald passage (vv. 7-10): &quot;How beautiful on the mountains are the feet of those who bring good news, who proclaim peace, who bring good tidings, who proclaim salvation, who say to Zion, &apos;Your God reigns!&apos;&quot; The watchmen shout for joy, the ruins burst into song &mdash; for the LORD returns to Zion. Paul quotes this passage in Romans 10:15 as the prophetic foundation for Christian mission and preaching.",
                }}
              />
              <p
                style={{
                  color: "#C0C0D8",
                  fontSize: "17px",
                  lineHeight: 1.9,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter moves into the beginning of the fourth Servant Song (vv. 13-15), which continues into chapter 53: &quot;See, my servant will act wisely; he will be raised and lifted up and highly exalted.&quot; The three verbs of exaltation echo those used of God himself in Isaiah 6:1, preparing the reader for the stunning revelation that this Servant shares in the divine glory &mdash; even as he was disfigured beyond human likeness before his exaltation.",
                }}
              />
            </div>

            {/* Key Facts cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "16px",
                marginBottom: "40px",
              }}
            >
              {[
                { label: "Book", value: "Isaiah", color: "#3a7d56" },
                { label: "Chapter", value: "52", color: "#6B4FBB" },
                { label: "Verses", value: "15", color: "#D97706" },
                { label: "Genre", value: "Prophecy", color: "#0D9488" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  style={{
                    background: "#12121F",
                    border: `1px solid ${fact.color}33`,
                    borderTop: `3px solid ${fact.color}`,
                    borderRadius: "14px",
                    padding: "20px 24px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      color: "#9898B3",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      marginBottom: "8px",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {fact.label.toUpperCase()}
                  </p>
                  <p
                    style={{
                      color: fact.color,
                      fontSize: "22px",
                      fontWeight: 800,
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            {/* NT Connections */}
            <div
              style={{
                background: "rgba(107,79,187,0.08)",
                border: "1px solid rgba(107,79,187,0.22)",
                borderRadius: "16px",
                padding: "32px",
              }}
            >
              <h3
                style={{
                  color: "#a78bfa",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "16px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                NEW TESTAMENT CONNECTIONS
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Romans 10:15 quotes Isaiah 52:7 as the foundation of gospel proclamation",
                  "Romans 10:16 quotes Isaiah 52:7 again in relation to Israel's response to the gospel",
                  "1 Corinthians 15:54 alludes to the victory cry rooted in this passage",
                  "Ephesians 5:14 quotes an early Christian hymn rooted in the awakening call of Isaiah 52:1",
                  "Philippians 2:9 echoes the three verbs of exaltation from Isaiah 52:13",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      color: "#C0C0D8",
                      fontSize: "15px",
                      lineHeight: 1.7,
                    }}
                  >
                    <span
                      style={{
                        color: "#a78bfa",
                        fontWeight: 800,
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      &rsaquo;
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* -- KEY THEMES TAB ------------------------------------------ */}
        {activeTab === "Key Themes" && (
          <section>
            <p
              style={{
                color: "#9898B3",
                fontSize: "15px",
                lineHeight: 1.7,
                marginBottom: "32px",
                fontFamily: "system-ui, sans-serif",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "Five major theological threads run through Isaiah 52. Each is rooted in the text and reaches forward into the New Testament. Explore them below.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {keyThemes.map((theme) => {
                const isOpen = openAccordion === theme.id;
                return (
                  <div
                    key={theme.id}
                    style={{
                      background: "#12121F",
                      border: "1px solid #1E1E32",
                      borderRadius: "14px",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion(theme.id)}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "20px 24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        textAlign: "left",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: theme.color,
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            color: "#F2F2F8",
                            fontSize: "16px",
                            fontWeight: 700,
                            fontFamily: "system-ui, sans-serif",
                          }}
                          dangerouslySetInnerHTML={{ __html: theme.title }}
                        />
                      </div>
                      <span
                        style={{
                          color: theme.color,
                          fontSize: "20px",
                          fontWeight: 700,
                          flexShrink: 0,
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: "0 24px 24px 48px",
                          borderTop: `1px solid ${theme.color}22`,
                        }}
                      >
                        <p
                          style={{
                            color: "#C0C0D8",
                            fontSize: "16px",
                            lineHeight: 1.85,
                            paddingTop: "20px",
                          }}
                          dangerouslySetInnerHTML={{ __html: theme.body }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* -- VERSE BY VERSE TAB -------------------------------------- */}
        {activeTab === "Verse by Verse" && (
          <section>
            <div
              style={{
                background: "rgba(58,125,86,0.07)",
                border: "1px solid rgba(58,125,86,0.18)",
                borderRadius: "14px",
                padding: "20px 24px",
                marginBottom: "32px",
              }}
            >
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  fontFamily: "system-ui, sans-serif",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "This section walks through all 15 verses of Isaiah 52 in grouped sections, offering expository commentary on the meaning and context of each passage.",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {verses.map((v) => {
                const isOpen = openAccordion === v.id;
                return (
                  <div
                    key={v.id}
                    style={{
                      background: "#12121F",
                      border: "1px solid #1E1E32",
                      borderLeft: `4px solid ${v.color}`,
                      borderRadius: "14px",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion(v.id)}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "20px 24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        textAlign: "left",
                      }}
                    >
                      <span
                        style={{
                          color: v.color,
                          fontSize: "15px",
                          fontWeight: 700,
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {v.ref}
                      </span>
                      <span
                        style={{
                          color: v.color,
                          fontSize: "20px",
                          fontWeight: 700,
                          flexShrink: 0,
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: "0 24px 24px 24px",
                          borderTop: `1px solid ${v.color}22`,
                        }}
                      >
                        <p
                          style={{
                            color: "#C0C0D8",
                            fontSize: "16px",
                            lineHeight: 1.9,
                            paddingTop: "20px",
                          }}
                          dangerouslySetInnerHTML={{ __html: v.body }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Verse summary box */}
            <div
              style={{
                marginTop: "40px",
                background: "rgba(217,119,6,0.08)",
                border: "1px solid rgba(217,119,6,0.22)",
                borderRadius: "16px",
                padding: "32px",
              }}
            >
              <h3
                style={{
                  color: "#D97706",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "14px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                KEY VERSE
              </h3>
              <blockquote
                style={{
                  margin: 0,
                  borderLeft: "3px solid #D97706",
                  paddingLeft: "20px",
                }}
              >
                <p
                  style={{
                    color: "#F2F2F8",
                    fontSize: "18px",
                    lineHeight: 1.75,
                    fontStyle: "italic",
                    marginBottom: "10px",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "&quot;How beautiful on the mountains are the feet of those who bring good news, who proclaim peace, who bring good tidings, who proclaim salvation, who say to Zion, &apos;Your God reigns!&apos;&quot;",
                  }}
                />
                <cite
                  style={{
                    color: "#D97706",
                    fontSize: "14px",
                    fontWeight: 700,
                    fontStyle: "normal",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  Isaiah 52:7
                </cite>
              </blockquote>
            </div>
          </section>
        )}

        {/* -- APPLICATION TAB ----------------------------------------- */}
        {activeTab === "Application" && (
          <section>
            <div
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "16px",
                padding: "32px",
                marginBottom: "32px",
              }}
            >
              <h2
                style={{
                  color: "#F2F2F8",
                  fontSize: "22px",
                  fontWeight: 900,
                  marginBottom: "12px",
                }}
              >
                Putting Isaiah 52 Into Practice
              </h2>
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  fontFamily: "system-ui, sans-serif",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 52 is not merely a historical record &mdash; it is a living word addressed to God&apos;s people in every generation. The following applications draw directly from the text and invite personal and communal response.",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {appPoints.map((ap, idx) => (
                <div
                  key={ap.id}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "16px",
                    padding: "28px 32px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      marginBottom: "14px",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: ap.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "#07070F",
                        fontWeight: 900,
                        fontSize: "14px",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {idx + 1}
                    </div>
                    <h3
                      style={{
                        color: "#F2F2F8",
                        fontSize: "18px",
                        fontWeight: 800,
                        lineHeight: 1.3,
                        paddingTop: "4px",
                      }}
                      dangerouslySetInnerHTML={{ __html: ap.title }}
                    />
                  </div>
                  <p
                    style={{
                      color: "#C0C0D8",
                      fontSize: "15px",
                      lineHeight: 1.85,
                      paddingLeft: "48px",
                    }}
                    dangerouslySetInnerHTML={{ __html: ap.body }}
                  />
                </div>
              ))}
            </div>

            {/* Reflection questions */}
            <div
              style={{
                marginTop: "48px",
                background: "rgba(107,79,187,0.08)",
                border: "1px solid rgba(107,79,187,0.22)",
                borderRadius: "16px",
                padding: "32px",
              }}
            >
              <h3
                style={{
                  color: "#a78bfa",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "20px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                REFLECTION QUESTIONS
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "Where in your life have you grown spiritually passive, accepting captivity that God has already broken through the gospel?",
                  "Who in your daily life needs to hear the announcement &quot;Your God reigns&quot;? What is one step you can take this week to carry that message?",
                  "How does the past-tense certainty of God&apos;s promises in Isaiah 52:9 change the way you pray and worship today, even before you see the fulfillment?",
                  "What &quot;unclean things&quot; (v.11) might be compromising your witness or your ability to carry the sacred things of God with integrity?",
                  "Where do you see the pattern of exaltation through humiliation at work in your own story? How does the Servant&apos;s pattern give you confidence?",
                ].map((q, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "14px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: "#a78bfa",
                        fontWeight: 800,
                        flexShrink: 0,
                        fontSize: "15px",
                        fontFamily: "system-ui, sans-serif",
                        paddingTop: "2px",
                      }}
                    >
                      {i + 1}.
                    </span>
                    <p
                      style={{
                        color: "#C0C0D8",
                        fontSize: "15px",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <div
              style={{
                marginTop: "48px",
                background:
                  "linear-gradient(135deg, rgba(58,125,86,0.12) 0%, rgba(107,79,187,0.08) 100%)",
                border: "1px solid rgba(58,125,86,0.22)",
                borderRadius: "20px",
                padding: "48px 40px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  color: "#F2F2F8",
                  fontSize: "26px",
                  fontWeight: 900,
                  marginBottom: "12px",
                  lineHeight: 1.25,
                }}
              >
                Continue Your Study
              </h3>
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  maxWidth: "480px",
                  margin: "0 auto 28px",
                  fontFamily: "system-ui, sans-serif",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 52 flows directly into the great suffering Servant Song of Isaiah 53. Continue reading to see how the exalted Servant achieves his glory through bearing our griefs and carrying our sorrows.",
                }}
              />
              <a
                href="/bible-study"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "linear-gradient(135deg, #3a7d56, #52a876)",
                  color: "#07070F",
                  borderRadius: "12px",
                  padding: "14px 28px",
                  fontWeight: 800,
                  fontSize: "15px",
                  textDecoration: "none",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Explore More Bible Studies
              </a>
            </div>
          </section>
        )}
      </div>

      {/* -- FOOTER STRIP ----------------------------------------------- */}
      <div
        style={{
          borderTop: "1px solid #1E1E32",
          background: "#12121F",
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#6B6B88",
            fontSize: "13px",
            fontFamily: "system-ui, sans-serif",
          }}
          dangerouslySetInnerHTML={{
            __html:
              "Isaiah 52 &mdash; Part of The Vine&apos;s expository Bible study series. Scripture quotations based on the NIV.",
          }}
        />
      </div>
    </div>
  );
}
