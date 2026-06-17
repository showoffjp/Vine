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
  { id: "aK7nPsRtM3v", title: "Isaiah 42 - The First Servant Song Explained" },
  { id: "bL2mGxQhD8e", title: "A Bruised Reed He Will Not Break - Isaiah 42 Study" },
  { id: "cM5yZvNjK4s", title: "Isaiah 42 Verse by Verse - Justice to the Nations" },
  { id: "dN9wBrSqX1k", title: "Behold My Servant - Isaiah 42 Bible Study" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const keyThemes = [
  {
    color: GREEN,
    title: "The Gentleness of the Servant",
    body: "Unlike the conquering kings of his day, God&apos;s Servant exercises power with radical gentleness: no raised voice in the street, no crushing of the weak. The bruised reed and smoldering wick represent the vulnerable, the barely-surviving. Jesus will handle them with care, not contempt. This portrait overturns every human expectation of what a powerful deliverer looks like. Power through gentleness &mdash; this is the shape of the Messiah&apos;s ministry, and it is the shape the Spirit calls his people into as well.",
  },
  {
    color: TEAL,
    title: "Justice as the Servant&apos;s Mission",
    body: "He will not falter or be discouraged till he establishes justice on earth (v.4). Justice (mishpat) is not merely legal fairness but the right ordering of all things under God. The Servant&apos;s ministry is cosmic in scope &mdash; justice for the nations, for the coastlands. This is not a side project; it is the central commission of the one whom God upholds. The gospel of Jesus is inseparable from the justice of the kingdom he brings. Where the Servant is, the ordering of creation begins to be restored.",
  },
  {
    color: GOLD,
    title: "God&apos;s New Act in History",
    body: "Verse 9 declares: See, the former things have taken place, and new things I declare; before they spring into being I announce them to you. God is always moving forward. The new exodus, the new covenant, the new creation are all foretold here. God is not static &mdash; he is perpetually doing new things. The declaration of new things before they happen is itself proof of God&apos;s sovereign control over history. He announces what no idol or human power could anticipate, because he is the one who brings it to pass.",
  },
  {
    color: ROSE,
    title: "The Blind Servant Israel",
    body: "The latter part of the chapter turns the Servant language back on Israel, who is blind and deaf to God&apos;s instruction despite being his messenger. This contrast heightens the necessity of the individual Servant (Messiah) who succeeds where corporate Israel fails. Israel was called to be a light but became blind; called to be a messenger but became deaf. The Servant of verses 1-9 is not the same as the servant of verses 18-22. The individual Servant accomplishes the mission that the nation could not and would not fulfill.",
  },
  {
    color: PURPLE,
    title: "God as the Sole Creator and Sovereign",
    body: "Verses 5-9 ground the Servant&apos;s mission in the identity of the God who sends him: the one who created the heavens and stretched them out, who spread out the earth, who gives breath to its people. This God&apos;s word can be trusted. The cosmic credentials of the Creator are not theological decoration &mdash; they are the grounds for confidence that the Servant&apos;s mission will succeed. The same hands that stretched out the heavens will uphold the Servant until justice is established on every shore.",
  },
];

const verseItems = [
  {
    ref: "vv.1-4",
    color: GREEN,
    title: "Here Is My Servant",
    body: "Here is my Servant; I uphold him; my chosen one in whom I delight; I will put my Spirit on him; he will bring justice to the nations; he will not shout or cry out in the streets; a bruised reed he will not break; a smoldering wick he will not snuff out; he will not falter or be discouraged until justice is established. The divine introduction of the Servant is extraordinary in its warmth: upheld, chosen, delighted in, Spirit-endowed. God is not sending a reluctant instrument &mdash; he is presenting one in whom he takes personal pleasure. The method of the Servant&apos;s work (quiet, gentle, persistent) is as significant as its goal (justice for the nations). Matthew 12:18-21 quotes these verses directly and applies them to Jesus.",
  },
  {
    ref: "vv.5-9",
    color: TEAL,
    title: "The Creator Sends His Servant",
    body: "Thus says God the LORD, who created the heavens and stretched them out; I the LORD have called you in righteousness; I will keep you and give you as a covenant to the people; to open eyes that are blind; to free captives from prison; I am the LORD, that is my name; see, the former things have taken place and new things I declare. The mission of the Servant is described in liberation language: opening blind eyes, freeing captives, releasing prisoners from darkness. These are not only spiritual metaphors &mdash; they describe the whole scope of what broken creation needs. And the one commissioning this work is the Creator himself, whose name and glory he will not share with another.",
  },
  {
    ref: "vv.10-13",
    color: GOLD,
    title: "Sing to the LORD a New Song",
    body: "Sing to the LORD a new song; let the sea resound; let the wilderness and its towns raise their voices; the LORD will march out like a champion, like a warrior he will stir up his zeal. The announcement of the Servant&apos;s mission erupts into universal worship. The new song is called for because a new act of God is about to occur. The ends of the earth, the sea, the coastlands, the desert towns &mdash; all are summoned to praise. And then the tone shifts: God is not only the gentle One of verses 2-3; he is also the warrior who stirs up zeal. Gentleness and holy zeal are not opposites in God.",
  },
  {
    ref: "vv.14-17",
    color: ROSE,
    title: "Like a Woman in Childbirth",
    body: "For a long time I have kept silent; I have been quiet and held myself back; but now like a woman in childbirth I cry out; I will lay waste the mountains and hills; I will lead the blind by ways they have not known; I will turn the darkness into light; those who trust in idols will be turned back in shame. The long silence of God is not absence &mdash; it is the held breath before a decisive act. The image of God as a woman in childbirth is striking and tender: the outcry of effort, the pain accepted for the sake of new life. God will lead the blind by unfamiliar ways &mdash; which means trusting God often means following him into the unknown.",
  },
  {
    ref: "vv.18-22",
    color: PURPLE,
    title: "Who Is Blind but My Servant?",
    body: "Hear you deaf; look you blind; who is blind but my servant? Who is deaf like the messenger I send? You have seen many things but have not observed them; hearing but not listening. The accusation here is directed at Israel, who was called to be God&apos;s witness but has become spiritually blind and deaf. The painful irony is precise: the people who possess the Law, the temple, the prophets, and the covenants have seen more than any nation and understood less. Privilege without receptivity produces hardness. The nation trusted in its status while ignoring what that status demanded.",
  },
  {
    ref: "vv.23-25",
    color: ACCENT,
    title: "They Did Not Take It to Heart",
    body: "Which of you will listen to this or pay close attention? Who handed Jacob over to become loot? Was it not the LORD, against whom we have sinned? So he poured out on them his burning anger; yet they did not understand; they did not take it to heart. The chapter ends in a somber key. Even the experience of divine discipline &mdash; the Babylonian exile &mdash; has not produced understanding or repentance. They did not take it to heart. This is the diagnostic tragedy of human sin: we can suffer the consequences of our wandering and still not turn. Only grace can break through where discipline has not.",
  },
];

const applicationPoints = [
  {
    color: GREEN,
    head: "Rest in Christ&apos;s Gentle Handling",
    body: "He will not break what is already bruised. If you are barely holding on &mdash; smoldering rather than blazing &mdash; the Servant is not disappointed in you. He came precisely for the weak. The bruised reed is not discarded; it is carefully tended. Bring your fragility to Jesus today without shame.",
  },
  {
    color: TEAL,
    head: "Pray for Justice Among the Nations",
    body: "The Servant&apos;s mission is justice to the nations, to the coastlands. This is not a small or parochial aim. Pray specifically for justice to take root in places of oppression, trafficking, corruption, and war. Align your intercession with the scope of the Servant&apos;s commission.",
  },
  {
    color: GOLD,
    head: "Receive the New Things God Is Declaring",
    body: "Before they spring into being I announce them to you (v.9). Ask God what new thing he is doing in your current season. Do not let familiarity with the old things prevent you from perceiving the new. God is always moving forward &mdash; and he announces it before it arrives so that trust, not surprise, is our posture.",
  },
  {
    color: ROSE,
    head: "Examine Whether You Have Eyes but Do Not See",
    body: "Israel had more revelation than any nation and was spiritually blind. The same danger faces those of us who have grown up in the church, attended Bible studies, listened to sermons. Privilege does not automatically produce sight. Ask God to open your eyes to what he has been saying that you have not yet heard.",
  },
  {
    color: PURPLE,
    head: "Let the Creator&apos;s Sovereignty Fuel Your Confidence",
    body: "The God who stretched out the heavens is the God who sends and upholds the Servant. He is the same God who upholds you. The vastness of his creative power is not separate from his personal, intimate sustaining of you. Let the scale of creation increase your confidence in prayer rather than your sense of insignificance.",
  },
  {
    color: ACCENT,
    head: "Be a Light Through Your Witness",
    body: "The Servant is given as a covenant to the people and a light to the nations. Those who are in Christ share in that calling. Seek to be a light through your witness &mdash; not by being impressive, but by reflecting the Servant&apos;s gentleness, faithfulness, and justice in the places where you live and work.",
  },
];

export default function Isaiah42GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        background: BG,
        minHeight: "100vh",
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "inline-block",
              background: `${GREEN}20`,
              border: `1px solid ${GREEN}40`,
              borderRadius: 20,
              padding: "4px 14px",
              fontSize: 12,
              color: GREEN,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginBottom: 12,
            }}
          >
            Major Prophet &middot; Old Testament
          </div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>
            Isaiah 42 &mdash; The First Servant Song
          </h1>
          <p
            style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 660 }}
            dangerouslySetInnerHTML={{
              __html:
                "The first of four Servant Songs in Isaiah &mdash; a portrait of the coming Messiah who brings justice to the nations with radical gentleness: not breaking a bruised reed, not snuffing a smoldering wick, not faltering until justice is established on every shore.",
            }}
          />
        </div>

        {/* Stat cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            marginBottom: 32,
          }}
        >
          {[
            ["Book", "Isaiah"],
            ["Chapter", "42"],
            ["Verses", "25"],
            ["Section", "Isaiah 40-55"],
            ["NT Quote", "Matthew 12:18-21"],
            ["Key Figure", "The Servant"],
          ].map(([k, v]) => (
            <div
              key={k}
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 10,
                padding: "12px 16px",
              }}
            >
              <div
                style={{
                  color: MUTED,
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 4,
                }}
              >
                {k}
              </div>
              <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`,
                background: activeTab === t.id ? `${GREEN}20` : "transparent",
                color: activeTab === t.id ? GREEN : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 28,
                marginBottom: 24,
              }}
            >
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>
                Overview
              </h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 42 opens with one of the most beautiful portraits of the coming Messiah in all of Scripture &mdash; the first of four Servant Songs in Isaiah. God introduces his Servant: &quot;Here is my servant, whom I uphold, my chosen one in whom I delight; I will put my Spirit on him, and he will bring justice to the nations.&quot; This Servant will not shout or cry out in the streets; he will not break a bruised reed or snuff out a smoldering wick. He will faithfully establish justice until it is found on every shore.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Matthew 12 explicitly identifies this Servant as Jesus. After the Servant Song (vv.1-9), the chapter erupts into a new song of praise for God&apos;s saving activity (vv.10-17), then turns to rebuke a blind and deaf Israel (vv.18-25) who has refused to walk in God&apos;s ways even as God uses foreign powers to discipline them.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter has three distinct movements: (1) The Servant Song proper &mdash; God introduces his Spirit-endowed Servant who will bring justice to the nations through gentleness (vv.1-9); (2) The new song of praise called forth by the Servant&apos;s commission, with God pictured as a warrior stirring up his zeal (vv.10-17); (3) The rebuke of Israel, who despite being God&apos;s servant and messenger has become spiritually blind and deaf, and who has not taken even the bitter lesson of exile to heart (vv.18-25).",
                }}
              />
            </div>

            {/* Three movements */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 24 }}>
              {[
                {
                  ref: "vv.1-9",
                  color: GREEN,
                  label: "Servant Song",
                  desc: "God presents the Servant: upheld, chosen, Spirit-endowed. His mission is justice; his method is radical gentleness. He is given as a covenant to the people and a light to the nations.",
                },
                {
                  ref: "vv.10-17",
                  color: GOLD,
                  label: "New Song of Praise",
                  desc: "The commission erupts into universal worship. The LORD marches out like a warrior, then speaks as one who has been silent too long &mdash; like a woman in childbirth now crying out.",
                },
                {
                  ref: "vv.18-25",
                  color: ROSE,
                  label: "Rebuke of Israel",
                  desc: "The chapter closes with a painful irony: the messenger is deaf, the servant is blind. Even the discipline of exile has not produced understanding. They did not take it to heart.",
                },
              ].map((s) => (
                <div
                  key={s.ref}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: 18,
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      background: `${s.color}20`,
                      border: `1px solid ${s.color}40`,
                      borderRadius: 8,
                      padding: "3px 10px",
                      fontSize: 11,
                      color: s.color,
                      fontWeight: 700,
                      marginBottom: 8,
                    }}
                  >
                    {s.ref}
                  </div>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 8 }}>
                    {s.label}
                  </div>
                  <p
                    style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: s.desc }}
                  />
                </div>
              ))}
            </div>

            {/* Key verse callout */}
            <div
              style={{
                background: `${GREEN}12`,
                border: `1px solid ${GREEN}40`,
                borderRadius: 14,
                padding: "22px 26px",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  color: MUTED,
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 10,
                }}
              >
                Key Verse &mdash; Isaiah 42:1
              </div>
              <p
                style={{
                  color: TEXT,
                  fontSize: 16,
                  fontStyle: "italic",
                  lineHeight: 1.8,
                  margin: "0 0 10px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&quot;Here is my servant, whom I uphold, my chosen one in whom I delight; I will put my Spirit on him, and he will bring justice to the nations.&quot;",
                }}
              />
              <div style={{ color: GREEN, fontSize: 13, fontWeight: 700 }}>Isaiah 42:1 (NIV)</div>
            </div>

            {/* Videos section */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 24,
              }}
            >
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 6px" }}>
                Teaching Videos
              </h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Sermons and studies on Isaiah 42 &mdash; the First Servant Song, the bruised reed, and justice to the nations.",
                }}
              />
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
                    <div style={{ padding: "12px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 15, margin: 0 }}>
                        {v.title}
                      </h4>
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
                padding: 28,
                marginBottom: 24,
              }}
            >
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>
                Key Themes in Isaiah 42
              </h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Five major theological threads run through Isaiah 42 &mdash; each one opening a window into the character of God, the mission of the Servant, and the failure and hope of Israel.",
                }}
              />
            </div>
            {keyThemes.map((t) => (
              <div
                key={t.title}
                style={{
                  background: CARD,
                  border: `1px solid ${openTheme === t.title ? t.color : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 10,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenTheme(openTheme === t.title ? null : t.title)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "18px 22px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{ color: t.color, fontWeight: 700, fontSize: 15 }}
                    dangerouslySetInnerHTML={{ __html: t.title }}
                  />
                  <span style={{ color: MUTED, fontSize: 20, fontWeight: 400 }}>
                    {openTheme === t.title ? "-" : "+"}
                  </span>
                </button>
                {openTheme === t.title && (
                  <div
                    style={{
                      padding: "0 22px 20px",
                      borderTop: `1px solid ${BORDER}`,
                    }}
                  >
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        lineHeight: 1.8,
                        margin: "16px 0 0",
                      }}
                      dangerouslySetInnerHTML={{ __html: t.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Justice callout */}
            <div
              style={{
                background: `${TEAL}12`,
                border: `1px solid ${TEAL}40`,
                borderRadius: 14,
                padding: "22px 26px",
                marginTop: 24,
              }}
            >
              <div
                style={{
                  color: TEAL,
                  fontWeight: 700,
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 10,
                }}
              >
                Theological Note: Mishpat
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The Hebrew word mishpat appears three times in verses 1-4, translated &quot;justice.&quot; It carries the sense of right judgment, proper legal process, and the restoration of right order. In the Servant&apos;s mouth and hands, mishpat is not punitive but restorative &mdash; it is the reordering of a world out of joint. The Servant does not bring justice by force but by faithful, persistent, gentle presence. He will not be discouraged until it is established.",
                }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 28,
                marginBottom: 24,
              }}
            >
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>
                Verse by Verse &mdash; All 25 Verses
              </h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "A section-by-section walk through all 25 verses of Isaiah 42, with commentary on the Hebrew background, NT connections, and pastoral implications of each passage.",
                }}
              />
            </div>

            {verseItems.map((v) => (
              <div
                key={v.ref}
                style={{
                  background: CARD,
                  border: `1px solid ${openVerse === v.ref ? v.color : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 10,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenVerse(openVerse === v.ref ? null : v.ref)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "18px 22px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span
                      style={{
                        background: `${v.color}20`,
                        border: `1px solid ${v.color}40`,
                        borderRadius: 8,
                        padding: "3px 10px",
                        fontSize: 11,
                        color: v.color,
                        fontWeight: 700,
                      }}
                    >
                      {v.ref}
                    </span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 20, fontWeight: 400 }}>
                    {openVerse === v.ref ? "-" : "+"}
                  </span>
                </button>
                {openVerse === v.ref && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        lineHeight: 1.8,
                        margin: "16px 0 0",
                      }}
                      dangerouslySetInnerHTML={{ __html: v.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Structural note */}
            <div
              style={{
                background: `${GOLD}12`,
                border: `1px solid ${GOLD}40`,
                borderRadius: 14,
                padding: "22px 26px",
                marginTop: 24,
              }}
            >
              <div
                style={{
                  color: GOLD,
                  fontWeight: 700,
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 10,
                }}
              >
                Structure of the Chapter
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 42 moves in three discernible sections. Verses 1-9 form the Servant Song proper, grounded in the identity of the Creator God. Verses 10-17 are a hymn of praise to God&apos;s new saving act, picturing God as warrior and tender mother. Verses 18-25 pivot to rebuke: the nation called to be God&apos;s servant has become blind and deaf, and the judgment they have suffered has not produced repentance. The contrast between the obedient individual Servant (vv.1-9) and the disobedient corporate servant Israel (vv.18-25) is the theological spine of the chapter.",
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
                padding: 28,
                marginBottom: 24,
              }}
            >
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>
                Application
              </h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 42 is not only a prophecy about Jesus &mdash; it is a window into the shape of God&apos;s work in every generation. The character of the Servant, the scope of his mission, and the warning to blind Israel all speak directly into the life of the disciple today.",
                }}
              />
            </div>

            {applicationPoints.map((a) => (
              <div
                key={a.head}
                style={{
                  background: CARD,
                  border: `1px solid ${openApp === a.head ? a.color : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 10,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenApp(openApp === a.head ? null : a.head)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "18px 22px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{ color: a.color, fontWeight: 700, fontSize: 15 }}
                    dangerouslySetInnerHTML={{ __html: a.head }}
                  />
                  <span style={{ color: MUTED, fontSize: 20, fontWeight: 400 }}>
                    {openApp === a.head ? "-" : "+"}
                  </span>
                </button>
                {openApp === a.head && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        lineHeight: 1.8,
                        margin: "16px 0 0",
                      }}
                      dangerouslySetInnerHTML={{ __html: a.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Reflection questions */}
            <div
              style={{
                background: `${ACCENT}12`,
                border: `1px solid ${ACCENT}40`,
                borderRadius: 14,
                padding: "24px 28px",
                marginTop: 24,
              }}
            >
              <div
                style={{
                  color: ACCENT,
                  fontWeight: 700,
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 16,
                }}
              >
                Reflection Questions
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Where in your life right now are you the bruised reed or the smoldering wick? How does it change things to know the Servant will not break or snuff you out?",
                  "What new thing might God be declaring in your current season that you have not yet recognized because you are looking for the old familiar patterns?",
                  "In what areas of your life do you have the most spiritual knowledge but the least spiritual sight? What might you be hearing without truly listening?",
                  "What would it look like to pursue mishpat &mdash; right ordering &mdash; in your home, workplace, or neighborhood this week?",
                  "The Creator who stretched out the heavens is the one who sends and upholds you. How does this reality change the way you approach prayer today?",
                ].map((q, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: ACCENT,
                        fontWeight: 800,
                        fontSize: 15,
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      {i + 1}.
                    </span>
                    <p
                      style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Prayer */}
            <div
              style={{
                background: `${GREEN}12`,
                border: `1px solid ${GREEN}40`,
                borderRadius: 14,
                padding: "24px 28px",
                marginTop: 20,
              }}
            >
              <div
                style={{
                  color: GREEN,
                  fontWeight: 700,
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 14,
                }}
              >
                A Prayer from Isaiah 42
              </div>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 10px", fontStyle: "italic" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Lord, you upheld your Servant; uphold me now. Where I am a bruised reed, do not break me &mdash; tend me with the care of the one who will not snuff a smoldering wick. Declare your new things over my life before they spring into being, so that I may walk in trust rather than surprise. Open my eyes to what I have been hearing without truly listening. Give me a portion in your Servant&apos;s mission &mdash; to carry justice gently, to be a light where there is darkness, to bring release where there is captivity. You are the LORD, that is your name. I trust the work of your hands. Amen.",
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
