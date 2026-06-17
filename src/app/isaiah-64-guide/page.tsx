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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { id: "uE4fOsYhB8x", title: "Isaiah 64 - Oh That You Would Rend the Heavens" },
  { id: "vF9gPtZiC3y", title: "We Are the Clay You Are the Potter - Isaiah 64 Study" },
  { id: "wG2hQuAjD7z", title: "Isaiah 64 Verse by Verse - Prayer for Divine Intervention" },
  { id: "xH7iRvBkE1a", title: "Isaiah 64 Explained - Confession and the Potter God" },
];

const THEMES = [
  {
    id: "t1",
    color: PURPLE,
    title: "Bold Petition for Divine Intervention",
    body: "\"Oh, that you would rend the heavens and come down\" &mdash; this is the prayer of desperate faith. The prophet is not content with a distant God; he cries for the God of the Exodus to show up again with power. Every revival in church history has been born from this kind of desperate, bold intercession. The language is violent and urgent: &quot;rend&quot; means to tear apart, like tearing a garment. Isaiah is asking God to break through the visible order of things with manifest presence. This is not the prayer of someone comfortable with the status quo &mdash; it is the prayer of someone who knows what God can do and cannot settle for less.",
  },
  {
    id: "t2",
    color: TEAL,
    title: "The God Who Acts for Those Who Wait",
    body: "\"You come to the help of those who gladly do right, who remember your ways\" (v.5). God is not passive &mdash; he acts on behalf of those who trust him and remember his ways. Yet the tragedy is Israel&apos;s persistent sin that has hidden God&apos;s face. The gap between what God could do and what they experience is created by sin, not by God&apos;s unwillingness. The word &quot;wait&quot; in Hebrew (chakah) carries the sense of expectant, patient longing &mdash; not passive resignation but active, trusting anticipation. God rewards this posture. The tragedy of the chapter is that the people have abandoned this posture and swept away by their sins like a leaf in the wind.",
  },
  {
    id: "t3",
    color: GOLD,
    title: "All Our Righteous Acts Like Filthy Rags",
    body: "Verse 6 is one of the most quoted texts on human sinfulness: \"All of us have become like one who is unclean, and all our righteous acts are like filthy rags.\" This is the diagnosis that makes the gospel necessary: even human &quot;goodness&quot; falls short before a holy God. Grace alone bridges the gap. The Hebrew behind &quot;filthy rags&quot; is startling in its specificity &mdash; it refers to rags used during menstruation, the most ritually impure object in the Levitical system. Isaiah is not saying our righteousness is a little inadequate; he is saying it is ritually defiling in the eyes of a holy God. This is not pessimism &mdash; it is the necessary ground of grace.",
  },
  {
    id: "t4",
    color: GREEN,
    title: "The Potter and the Clay",
    body: "\"Yet, LORD, you are our Father. We are the clay, you are the potter; we are all the work of your hand\" (v.8). This image (developed in Romans 9 and Jeremiah 18) grounds human identity in divine creativity and divine authority. We do not form ourselves; we are formed by God. And the potter does not abandon the clay mid-formation. The appeal here is not to human merit but to divine artistry &mdash; the potter has invested himself in the clay, has a vision for what it will become, and is not finished. To say &quot;we are the work of your hand&quot; is to say: you started this project, and you are the one who must complete it. It is a prayer that relies entirely on God&apos;s own investment in us.",
  },
  {
    id: "t5",
    color: ACCENT,
    title: "Desperate Appeal to Fatherhood",
    body: "Despite the catalog of failure, the prayer ends in relationship: \"You are our Father\" (v.8). The basis for prayer in desperate times is not our performance but our relationship &mdash; we are God&apos;s children, his works of art, formed by his hands. This relational ground never changes regardless of how far we have wandered. Jesus himself taught his disciples to begin prayer with &quot;Our Father&quot; &mdash; and that pattern has its deep roots here in Isaiah 64. When everything else has failed, when all righteousness has proven to be filthy rags, when the sacred cities lie in ruins, the one thing that remains is the father-child relationship. God does not disown his children even in their worst seasons.",
  },
];

const VERSES = [
  {
    id: "v1",
    ref: "vv. 1-3",
    color: PURPLE,
    title: "The Opening Cry for God to Come Down",
    body: "\"Oh that you would rend the heavens and come down, that the mountains would tremble before you &mdash; as when fire sets twigs ablaze and causes water to boil &mdash; come down to make your name known to your enemies and cause the nations to quake before you! For when you did awesome things that we did not expect, you came down, and the mountains trembled before you.\" The prayer opens with explosive urgency. The prophet is praying out of memory &mdash; he knows what God has done at Sinai, at the Exodus, at the entry into Canaan. He is asking God to do it again. The mountains trembling, the fire, the boiling water &mdash; these are theophanic images drawn from the Sinai tradition. Isaiah is praying for a new Sinai, a fresh theophany, a manifest intervention that would shake the nations and make God&apos;s name known. This is the prayer of someone who has read the history of salvation and cannot understand why God seems absent now.",
  },
  {
    id: "v2",
    ref: "vv. 4-5",
    color: TEAL,
    title: "The Incomparable God Who Acts for Waiters",
    body: "\"Since ancient times no one has heard, no ear has perceived, no eye has seen any God besides you, who acts on behalf of those who wait for him. You come to the help of those who gladly do right, who remember your ways. But when we continued to sin against them, you were angry. How then can we be saved?\" Verse 4 is quoted by Paul in 1 Corinthians 2:9 to describe the hidden wisdom of God revealed by the Spirit. The God of Israel is incomparable: no other deity acts for those who wait. Waiting is a posture of faith &mdash; it is not passive but actively trusting. And yet the prophet immediately pivots to the contradiction: Israel has not waited or gladly done right. They have continued in sin. So the gap between the God who acts for waiters and the people who have not waited creates the crisis the prayer addresses. How can we be saved? is the question that opens the door for the gospel.",
  },
  {
    id: "v3",
    ref: "vv. 6-7",
    color: GOLD,
    title: "Filthy Rags and the Hidden Face of God",
    body: "\"All of us have become like one who is unclean, and all our righteous acts are like filthy rags; we all shrivel up like a leaf, and like the wind our sins sweep us away. No one calls on your name or strives to lay hold of you; for you have hidden your face from us and have given us over to our sins.\" The double confession is devastating: not only are we unclean, but our very attempts at righteousness are unclean. And not only do our sins sweep us away, but no one is even trying to call on God or grasp after him. The people have not only fallen short &mdash; they have stopped reaching. And the theological explanation is chilling: God himself has hidden his face and given them over to their sins. This is the language of Romans 1 (God gave them over) &mdash; God&apos;s judgment can take the form of releasing people to the consequences of their own choices. The hiddenness of God is not permanent, but it is real.",
  },
  {
    id: "v4",
    ref: "vv. 8-9",
    color: GREEN,
    title: "Yet You Are Our Father &mdash; Potter and Clay",
    body: "\"Yet, LORD, you are our Father. We are the clay, you are the potter; we are all the work of your hand. Do not be angry beyond measure, LORD; do not remember our sins forever. Oh, look on us, we pray, for we are all your people.\" The hinge of the chapter is this &quot;yet&quot; &mdash; a defiant but. Despite everything in verses 6-7, the prayer pivots to relationship. The basis of the appeal is not the people&apos;s merit but God&apos;s identity as Father and Potter. The three petitions in verse 9 are simple and urgent: do not be angry forever; do not remember our sins forever; look on us. The third petition is the most personal &mdash; look on us. After the hiddenness of verse 7 (you have hidden your face), the prayer is simply: look at us again. You are the Father; we are the work of your hands. Do not look away from what you have made.",
  },
  {
    id: "v5",
    ref: "vv. 10-12",
    color: ACCENT,
    title: "The Ruins and the Final Question",
    body: "\"Your sacred cities have become a wasteland; even Zion is a wasteland, Jerusalem a desolation. Our holy and glorious temple, where our ancestors praised you, has been burned with fire, and all that we treasured lies in ruins. After all this, LORD, will you hold yourself back? Will you keep silent and punish us beyond measure?\" The prayer ends not with resolution but with a raw question aimed at God. The visible evidence of judgment is total: the cities are wasteland, Jerusalem is desolate, the temple is burned, the treasures are in ruins. And the prophet lays this before God as an argument: look at what has happened. You cannot stay silent forever. The final verses are an act of bold faith &mdash; bringing the ruins before God and demanding that he see them. This is lament at its most mature: honest about the devastation, refusing to minimize it, but still addressing God and expecting a response.",
  },
];

const APPLICATION_POINTS = [
  {
    id: "a1",
    color: PURPLE,
    title: "Pray Bold, Desperate Prayers",
    body: "Cry out for God to &quot;rend the heavens&quot; in your generation, your church, your city. Do not settle for comfortable religion when the God of Sinai is still the same God. Bold, desperate intercession has always preceded revival &mdash; learn the language of Isaiah 64 and make it your own. The saints who have moved history in prayer have been those who could not settle for God&apos;s seeming absence. Let this chapter give you vocabulary for that kind of intercession.",
  },
  {
    id: "a2",
    color: TEAL,
    title: "Confess the Insufficiency of Your Own Righteousness",
    body: "Come to God through Christ alone. Do not bring your religious performance as currency with God &mdash; Isaiah 64:6 strips away that pretense entirely. The gospel is the answer to the question of verse 5: &quot;How then can we be saved?&quot; We are saved not by our righteous acts but by the righteousness of the one who took our filthy rags and gave us his clean garments. Let this passage drive you to Christ as your only righteousness before the Father.",
  },
  {
    id: "a3",
    color: GOLD,
    title: "Rest in Your Identity as Clay in the Potter&apos;s Hands",
    body: "He who began the work will complete it (Philippians 1:6 echoes Isaiah 64:8). You are the work of God&apos;s hands &mdash; he has not abandoned the project of making you into what he designed you to be. In seasons of failure, confusion, and apparent ruin, return to this image: you are clay. The potter does not discard clay mid-formation. He kneads it, works it, and brings it to completion. Rest in that.",
  },
  {
    id: "a4",
    color: GREEN,
    title: "Appeal to God as Father in Your Darkest Moments",
    body: "When you have nothing else to stand on &mdash; when your own righteousness has failed, when the sacred places in your life lie in ruins, when God&apos;s face seems hidden &mdash; appeal to the relationship. &quot;You are our Father.&quot; This is the ground that never shifts. Jesus taught us to pray &quot;Our Father&quot; precisely because fatherhood is the relationship that persists through our worst failures. The prodigal son had no merit left &mdash; only a father. That is enough.",
  },
  {
    id: "a5",
    color: ACCENT,
    title: "Bring Specific Ruins Before God and Ask Him to Rebuild",
    body: "Do not pray in generalities. Isaiah names the specific ruins: the sacred cities, Zion, Jerusalem, the temple, the treasures. Bring the specific ruins of your life, your relationships, your church, your nation before God by name. Tell him what has been burned. Tell him what lies in rubble. Ask him to look. This is the practice of biblical lament &mdash; specific, honest, persistent. And remember: the God who can rend the heavens can rebuild ruins.",
  },
];

export default function Isaiah64GuidePage() {
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
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "inline-block",
              background: `${PURPLE}22`,
              border: `1px solid ${PURPLE}44`,
              borderRadius: 20,
              padding: "4px 14px",
              fontSize: 12,
              color: PURPLE,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginBottom: 12,
            }}
          >
            Major Prophet &middot; Old Testament
          </div>
          <h1
            style={{
              color: TEXT,
              fontSize: 34,
              fontWeight: 900,
              margin: "0 0 12px",
              lineHeight: 1.15,
            }}
          >
            Isaiah 64 &mdash; Oh That You Would Rend the Heavens and Come Down
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: 15,
              lineHeight: 1.75,
              margin: 0,
              maxWidth: 660,
            }}
            dangerouslySetInnerHTML={{
              __html:
                "One of the most powerful lament prayers in all of Scripture &mdash; a raw, desperate cry for God to tear open the heavens, a searing confession of human sinfulness, and a confident appeal to God as Father and Potter. Isaiah 64 gives the church language for intercession in dark times.",
            }}
          />
        </div>

        {/* Key verse callout */}
        <div
          style={{
            background: `${PURPLE}14`,
            border: `1px solid ${PURPLE}44`,
            borderRadius: 14,
            padding: "18px 24px",
            marginBottom: 32,
            borderLeft: `4px solid ${PURPLE}`,
          }}
        >
          <div
            style={{
              color: MUTED,
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginBottom: 6,
            }}
          >
            Key Verse &mdash; Isaiah 64:8
          </div>
          <p
            style={{
              color: TEXT,
              fontSize: 15,
              fontStyle: "italic",
              lineHeight: 1.75,
              margin: 0,
            }}
            dangerouslySetInnerHTML={{
              __html:
                "\"Yet, LORD, you are our Father. We are the clay, you are the potter; we are all the work of your hand.\"",
            }}
          />
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
            marginBottom: 32,
          }}
        >
          {[
            ["Book", "Isaiah"],
            ["Chapter", "64"],
            ["Verses", "12"],
            ["Genre", "Lament Prayer"],
            ["Theme", "Rend the Heavens"],
            ["Key Image", "Potter and Clay"],
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
              <div style={{ color: TEXT, fontSize: 14, fontWeight: 700 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 32,
          }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? PURPLE : BORDER}`,
                background: activeTab === t.id ? `${PURPLE}22` : "transparent",
                color: activeTab === t.id ? PURPLE : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
                transition: "all .18s",
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
              <h2
                style={{
                  color: PURPLE,
                  fontWeight: 800,
                  fontSize: 22,
                  marginBottom: 14,
                }}
              >
                Overview
              </h2>
              <p
                style={{
                  color: TEXT,
                  fontSize: 15,
                  lineHeight: 1.85,
                  margin: "0 0 16px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 64 is one of the most powerful lament prayers in all of Scripture &mdash; a raw, honest cry for God to tear open the heavens and come down. The prophet prays on behalf of the remnant, beginning with the bold petition: \"Oh, that you would rend the heavens and come down, that the mountains would tremble before you!\" (v.1). This is not polite, measured religion &mdash; it is desperate intercession rooted in the knowledge of who God is and what he has done before.",
                }}
              />
              <p
                style={{
                  color: TEXT,
                  fontSize: 15,
                  lineHeight: 1.85,
                  margin: "0 0 16px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter includes one of the Bible&apos;s most well-known statements: \"All of us have become like one who is unclean, and all our righteous acts are like filthy rags\" (v.6). Yet the prayer does not end in despair but in confident appeal to God as Father and Potter: \"Yet, LORD, you are our Father. We are the clay, you are the potter; we are all the work of your hand\" (v.8).",
                }}
              />
              <p
                style={{
                  color: TEXT,
                  fontSize: 15,
                  lineHeight: 1.85,
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 64 belongs to the great tradition of biblical lament &mdash; prayers that are brutally honest about suffering and failure while never letting go of the God who can intervene. The chapter models what it means to pray with both profound humility (filthy rags) and bold faith (rend the heavens). It is the prayer of people who know God well enough to demand that he show up.",
                }}
              />
            </div>

            {/* Context card */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 28,
                marginBottom: 24,
              }}
            >
              <h2
                style={{
                  color: TEAL,
                  fontWeight: 800,
                  fontSize: 20,
                  marginBottom: 14,
                }}
              >
                Historical and Literary Context
              </h2>
              <p
                style={{
                  color: MUTED,
                  fontSize: 14,
                  lineHeight: 1.8,
                  margin: "0 0 14px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 64 is part of the concluding section of the book (chapters 63-66), which contains a sustained communal lament and divine response. Chapter 63 opens with the vision of the Divine Warrior and then pivots to a historical review of God&apos;s saving acts (63:7-14). Chapter 64 continues and intensifies the lament, moving from memory of what God has done (vv.1-4) to confession of what the people have done (vv.5-7) to appeal for God to act again (vv.8-12).",
                }}
              />
              <p
                style={{
                  color: MUTED,
                  fontSize: 14,
                  lineHeight: 1.8,
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The most natural historical setting for this prayer is the Babylonian exile &mdash; a period when Jerusalem and the temple lay in ruins and the people were scattered. The prayer thus comes from a community that has experienced catastrophic judgment and is crying out for restoration. Its structure is classic lament: complaint, confession, petition. But it is also a model of what prayer looks like when human resources are exhausted and only God can act.",
                }}
              />
            </div>

            {/* Video section */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 28,
              }}
            >
              <h2
                style={{
                  color: GOLD,
                  fontWeight: 800,
                  fontSize: 20,
                  marginBottom: 20,
                }}
              >
                Teaching Videos
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {videoItems.map((v) => (
                  <VideoEmbed key={v.id} videoId={v.id} title={v.title} />
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
              <h2
                style={{
                  color: GOLD,
                  fontWeight: 800,
                  fontSize: 22,
                  marginBottom: 10,
                }}
              >
                Key Themes in Isaiah 64
              </h2>
              <p
                style={{
                  color: MUTED,
                  fontSize: 14,
                  lineHeight: 1.75,
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 64 weaves together five interlocking themes that together form one of the most complete theologies of prayer, confession, and trust in the entire Old Testament. Click each theme to explore it in depth.",
                }}
              />
            </div>

            {THEMES.map((t) => (
              <div
                key={t.id}
                style={{
                  background: CARD,
                  border: `1px solid ${openTheme === t.id ? t.color : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 10,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenTheme(openTheme === t.id ? null : t.id)
                  }
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
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: t.color,
                        flexShrink: 0,
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        color: TEXT,
                        fontWeight: 700,
                        fontSize: 15,
                      }}
                    >
                      {t.title}
                    </span>
                  </div>
                  <span
                    style={{
                      color: t.color,
                      fontSize: 20,
                      lineHeight: 1,
                      flexShrink: 0,
                      marginLeft: 12,
                    }}
                  >
                    {openTheme === t.id ? "-" : "+"}
                  </span>
                </button>
                {openTheme === t.id && (
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
                        lineHeight: 1.85,
                        margin: "16px 0 0",
                      }}
                      dangerouslySetInnerHTML={{ __html: t.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Cross-reference box */}
            <div
              style={{
                background: `${GREEN}14`,
                border: `1px solid ${GREEN}44`,
                borderRadius: 12,
                padding: "18px 22px",
                marginTop: 16,
              }}
            >
              <div
                style={{
                  color: GREEN,
                  fontWeight: 800,
                  fontSize: 14,
                  marginBottom: 10,
                }}
              >
                Key Cross-References
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                {[
                  ["Jeremiah 18:1-6", "The Potter and the Clay (OT parallel)"],
                  ["Romans 9:19-21", "Paul develops the potter image"],
                  ["1 Corinthians 2:9", "Paul quotes Isaiah 64:4"],
                  ["Romans 3:10-12", "Echoes filthy rags theology"],
                  ["Philippians 1:6", "God who began work completes it"],
                  ["Luke 11:5-13", "Bold, persistent prayer to the Father"],
                ].map(([ref, note]) => (
                  <div key={ref} style={{ fontSize: 13 }}>
                    <span
                      style={{
                        color: GREEN,
                        fontWeight: 700,
                        marginRight: 6,
                      }}
                    >
                      {ref}
                    </span>
                    <span style={{ color: MUTED }}>{note}</span>
                  </div>
                ))}
              </div>
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
              <h2
                style={{
                  color: TEAL,
                  fontWeight: 800,
                  fontSize: 22,
                  marginBottom: 10,
                }}
              >
                Verse by Verse &mdash; Isaiah 64 (12 Verses)
              </h2>
              <p
                style={{
                  color: MUTED,
                  fontSize: 14,
                  lineHeight: 1.75,
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 64 moves through three distinct movements: the bold petition (vv.1-5), the honest confession (vv.6-7), and the relational appeal (vv.8-12). Each section builds on the previous one, creating a complete model of biblical lament prayer.",
                }}
              />
            </div>

            {VERSES.map((v) => (
              <div
                key={v.id}
                style={{
                  background: CARD,
                  border: `1px solid ${openVerse === v.id ? v.color : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 10,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenVerse(openVerse === v.id ? null : v.id)
                  }
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
                        background: `${v.color}22`,
                        border: `1px solid ${v.color}44`,
                        borderRadius: 8,
                        padding: "3px 10px",
                        fontSize: 11,
                        color: v.color,
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {v.ref}
                    </span>
                    <span
                      style={{
                        color: TEXT,
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      {v.title}
                    </span>
                  </div>
                  <span
                    style={{
                      color: v.color,
                      fontSize: 20,
                      lineHeight: 1,
                      flexShrink: 0,
                      marginLeft: 12,
                    }}
                  >
                    {openVerse === v.id ? "-" : "+"}
                  </span>
                </button>
                {openVerse === v.id && (
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
                        lineHeight: 1.85,
                        margin: "16px 0 0",
                      }}
                      dangerouslySetInnerHTML={{ __html: v.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Full text summary */}
            <div
              style={{
                background: `${TEAL}12`,
                border: `1px solid ${TEAL}44`,
                borderRadius: 12,
                padding: "20px 24px",
                marginTop: 16,
              }}
            >
              <div
                style={{
                  color: TEAL,
                  fontWeight: 800,
                  fontSize: 14,
                  marginBottom: 12,
                }}
              >
                The Flow of Isaiah 64
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                {[
                  [PURPLE, "vv.1-3", "Bold petition: Oh that you would rend the heavens and come down"],
                  [TEAL, "vv.4-5", "God&apos;s character: he acts for those who wait and do right"],
                  [GOLD, "vv.6-7", "Searing confession: filthy rags, swept away, hidden face"],
                  [GREEN, "vv.8-9", "Relational appeal: you are our Father, we are the clay"],
                  [ACCENT, "vv.10-12", "Naming the ruins: will you hold yourself back forever?"],
                ].map(([color, ref, desc]) => (
                  <div
                    key={String(ref)}
                    style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                  >
                    <span
                      style={{
                        background: `${color}22`,
                        border: `1px solid ${color}44`,
                        borderRadius: 6,
                        padding: "2px 8px",
                        fontSize: 11,
                        color: String(color),
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      {String(ref)}
                    </span>
                    <span
                      style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: String(desc) }}
                    />
                  </div>
                ))}
              </div>
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
              <h2
                style={{
                  color: GREEN,
                  fontWeight: 800,
                  fontSize: 22,
                  marginBottom: 10,
                }}
              >
                Application &mdash; Living Isaiah 64
              </h2>
              <p
                style={{
                  color: MUTED,
                  fontSize: 14,
                  lineHeight: 1.75,
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 64 is not merely a historical document; it is a living prayer model. These applications draw out what it means to pray this chapter into your own life, your church, and your generation.",
                }}
              />
            </div>

            {APPLICATION_POINTS.map((a) => (
              <div
                key={a.id}
                style={{
                  background: CARD,
                  border: `1px solid ${openApp === a.id ? a.color : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 10,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenApp(openApp === a.id ? null : a.id)
                  }
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
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: a.color,
                        flexShrink: 0,
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        color: TEXT,
                        fontWeight: 700,
                        fontSize: 15,
                      }}
                    >
                      {a.title}
                    </span>
                  </div>
                  <span
                    style={{
                      color: a.color,
                      fontSize: 20,
                      lineHeight: 1,
                      flexShrink: 0,
                      marginLeft: 12,
                    }}
                  >
                    {openApp === a.id ? "-" : "+"}
                  </span>
                </button>
                {openApp === a.id && (
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
                        lineHeight: 1.85,
                        margin: "16px 0 0",
                      }}
                      dangerouslySetInnerHTML={{ __html: a.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Prayer prompt */}
            <div
              style={{
                background: `${PURPLE}14`,
                border: `1px solid ${PURPLE}44`,
                borderRadius: 14,
                padding: "24px 28px",
                marginTop: 24,
              }}
            >
              <div
                style={{
                  color: PURPLE,
                  fontWeight: 800,
                  fontSize: 16,
                  marginBottom: 12,
                }}
              >
                A Prayer Based on Isaiah 64
              </div>
              <p
                style={{
                  color: TEXT,
                  fontSize: 14,
                  fontStyle: "italic",
                  lineHeight: 1.9,
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Lord, we cry to you as Isaiah cried: rend the heavens and come down. Let the mountains of our complacency, our false comfort, our distance from you tremble before your presence. We confess that we have become unclean, that our best efforts fall like filthy rags before your holiness. We have no righteousness to offer, no performance to present. But you are our Father. We are the clay; you are the potter. We are the work of your hands &mdash; do not abandon what you have made. Look on us. Come to us. Do not hold yourself back. For the sake of your name and your people and your world &mdash; rend the heavens, Lord. Come down.",
                }}
              />
            </div>

            {/* Reflection questions */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "24px 28px",
                marginTop: 16,
              }}
            >
              <div
                style={{
                  color: GOLD,
                  fontWeight: 800,
                  fontSize: 16,
                  marginBottom: 14,
                }}
              >
                Discussion and Reflection Questions
              </div>
              <ol
                style={{
                  color: MUTED,
                  fontSize: 14,
                  lineHeight: 1.9,
                  margin: 0,
                  paddingLeft: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <li
                  dangerouslySetInnerHTML={{
                    __html:
                      "What does it mean to pray a &quot;rend the heavens&quot; prayer in your own context? What would it look like for God to show up in manifest power in your church or city?",
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html:
                      "Isaiah 64:6 says even our righteous acts are like filthy rags. How does this change how you approach God? How does the gospel answer this problem?",
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html:
                      "The image of God as Potter and us as clay appears here, in Jeremiah 18, and in Romans 9. What does it mean to you personally that God is still forming you? What gives you confidence that he has not abandoned the project?",
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html:
                      "Isaiah names specific ruins at the end of chapter 64. What are the &quot;ruins&quot; in your life or community that you need to bring before God? How does lament theology help you pray over them?",
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html:
                      "The prayer appeals to God as Father even after cataloguing total failure. How does the father-child relationship provide a ground for prayer when our performance has failed completely?",
                  }}
                />
              </ol>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
