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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { id: "yI6jSwClF2b", title: "Isaiah 66 - Heaven Is My Throne All Flesh Will Worship" },
  { id: "zJ1kTxDmG5c", title: "As a Mother Comforts Her Child God Comforts You - Isaiah 66" },
  { id: "aK4lUyEnH9d", title: "Isaiah 66 Verse by Verse - The Final Vision of Isaiah" },
  { id: "bL8mVzFoI3e", title: "Isaiah 66 Explained - New Creation and Universal Worship" },
];

const THEMES = [
  {
    id: "t1",
    color: PURPLE,
    title: "The Smallness of Temples Before the Infinite God",
    body: "\"Heaven is my throne and the earth is my footstool. Where is the house you will build for me?\" (v.1). Stephen quotes this at his martyrdom (Acts 7:48-50). God cannot be contained in a building, a denomination, or a theological system. The appropriate response to this God is not religious architecture but a humble, trembling heart. The question is rhetorical and pointed: if heaven is my throne and earth my footstool, what kind of house could you possibly build that would contain me? The implication is not that temples are wrong but that they can become substitutes &mdash; places where religious people feel they have God managed and domesticated. Isaiah 66 confronts the illusion of religious control.",
  },
  {
    id: "t2",
    color: TEAL,
    title: "Trembling at God&apos;s Word",
    body: "\"But these are the ones I will look on with favor: those who are humble and contrite in spirit, and who tremble at my word\" (v.2). The person who trembles at God&apos;s word is the one who takes it with ultimate seriousness &mdash; who hears it as the living word of the living God. This is the opposite of casual familiarity with Scripture. The Hebrew word for &quot;tremble&quot; (charad) appears throughout the Old Testament in contexts of holy fear in the presence of the divine. To tremble at God&apos;s word is to receive it as God actually speaking &mdash; not a religious text to be managed but a divine voice to be obeyed. This posture of humble trembling is what God looks for in contrast to religious performance.",
  },
  {
    id: "t3",
    color: GOLD,
    title: "The Birth of the Nation in a Day",
    body: "\"Who has heard of such a thing? Who has seen such things? Can a country be born in a day or a nation be brought forth in a moment?\" (v.8). This image of instantaneous new creation anticipates Pentecost (Acts 2), where three thousand were added in a single day, and the eschatological new creation of Revelation. God specializes in miraculous birth from barrenness. The rhetorical questions of verse 8 are meant to produce astonishment: this is unprecedented. And yet it happens. Zion gives birth. The miraculous births of the Old Testament &mdash; Isaac to Sarah, Samson to Manoah&apos;s wife, Samuel to Hannah &mdash; are all types of this ultimate miracle: the creation of a new people in an instant by the power of God alone. The church itself is this nation born in a day.",
  },
  {
    id: "t4",
    color: ROSE,
    title: "Mother-Like Divine Comfort",
    body: "\"As a mother comforts her child, so will I comfort you; and you will be comforted over Jerusalem\" (v.13). The feminine metaphor of God&apos;s comfort here is striking and intentional. God&apos;s comfort is not abstract or philosophical &mdash; it is as intimate, warm, and instinctive as a mother holding her distressed child. Isaiah 49:15 already used the nursing mother image: &quot;Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you!&quot; Isaiah 66 develops this further: the comfort is not just individual but communal &mdash; Zion herself becomes a mother who nurses her children (v.11), and God&apos;s comfort flows through the restored city. The feminine metaphor is not accidental; it describes the most intimate, body-level, instinctive form of nurture.",
  },
  {
    id: "t5",
    color: GREEN,
    title: "All Flesh Worshipping Together",
    body: "\"All mankind will come to bow down before me, says the LORD\" (v.23). The book of Isaiah that began with Israel&apos;s specific covenant failure ends with the universal gathering of all peoples before the living God. This is the eschatological fulfillment of the Abrahamic promise and the heart of the Great Commission. The movement from Isaiah 1 (Israel has failed) to Isaiah 66 (all flesh worships) is the entire theological arc of the book &mdash; and arguably the arc of the whole Bible. The nations are not conquered and forced to bow; they come to worship, drawn by the proclamation of God&apos;s glory among them (v.19). This is mission theology: God sends his people to proclaim his glory so that all peoples will come.",
  },
];

const VERSES = [
  {
    id: "v1",
    ref: "vv. 1-2",
    color: PURPLE,
    title: "Heaven Is My Throne &mdash; The Humble Heart God Dwells In",
    body: "\"This is what the LORD says: Heaven is my throne and the earth is my footstool. Where is the house you will build for me? Where will my resting place be? Has not my hand made all these things, and so they came into being? declares the LORD. These are the ones I look on with favor: those who are humble and contrite in spirit, and who tremble at my word.\" The opening is disorienting for religious people: God challenges the entire project of temple-building. Not because temples are wrong but because they can become substitutes for the only dwelling God actually desires &mdash; the humble, contrite, trembling heart. Stephen quotes these verses at his martyrdom to make the same point: God is not limited to the Jerusalem temple, and those who think he is have missed the entire point. The three characteristics of those God looks on with favor &mdash; humble, contrite in spirit, trembling at God&apos;s word &mdash; stand in stark contrast to the religious performance condemned in the next verse.",
  },
  {
    id: "v2",
    ref: "vv. 3-6",
    color: ROSE,
    title: "Empty Religion Condemned &mdash; They Chose Their Own Ways",
    body: "\"But whoever sacrifices a bull is like one who kills a person; whoever offers a lamb is like one who breaks a dog&apos;s neck; whoever makes a grain offering is like one who presents pig&apos;s blood; whoever burns memorial incense is like one who worships an idol. They have chosen their own ways, and they delight in their abominations.\" The shocking equivalences of verses 3-4 are Isaiah&apos;s most severe critique of empty religion. The correct rituals (bull sacrifice, grain offering, incense) become as defiling as murder, breaking a dog&apos;s neck, and presenting pig&apos;s blood &mdash; all things that would make an Israelite unclean. The point: religious performance without a humble, trembling heart before God is not neutral; it is actively offensive to him. The key phrase is &quot;they chose their own ways.&quot; They were doing what God commanded but on their own terms, for their own reasons. Religion as self-expression rather than God-response.",
  },
  {
    id: "v3",
    ref: "vv. 7-9",
    color: GOLD,
    title: "Before She Labors She Gives Birth &mdash; Miraculous New Creation",
    body: "\"Before she goes into labor, she gives birth; before the pains come upon her, she delivers a son. Who has heard of such a thing? Who has seen such things? Can a country be born in a day or a nation be brought forth in a moment? Yet no sooner is Zion in labor than she gives birth to her children. Do I bring to the moment of birth and not give delivery? says the LORD. Do I close up the womb when I bring to delivery? says your God.\" The miracle described in verse 7 is birth before labor &mdash; delivery without the expected process of suffering. This is a sign of supernatural, instantaneous creation. The rhetorical questions of verse 8 pile up to make the point: this is unprecedented. And then God gives the theological interpretation of his own miracle: he does not bring to the moment of birth and then fail to deliver. If he has begun the work of creating a new people, he will complete it. This is one of the most profound statements in the Old Testament about God&apos;s faithfulness to complete what he has begun.",
  },
  {
    id: "v4",
    ref: "vv. 10-13",
    color: TEAL,
    title: "Rejoice with Jerusalem &mdash; The River of Peace and the Mother&apos;s Comfort",
    body: "\"Rejoice with Jerusalem and be glad for her, all you who love her; rejoice greatly with her, all you who mourn over her. For you will nurse and be satisfied at her comforting breasts; you will drink deeply and delight in her overflowing abundance. For this is what the LORD says: I will extend peace to her like a river and the wealth of nations like a flooding stream; you will nurse and be carried on her arm and dandled on her knees. As a mother comforts her child, so will I comfort you; and you will be comforted over Jerusalem.\" The city becomes a nursing mother &mdash; abundance flows from her like a river. The wealth of nations streams into her like an overflowing river. And then the most intimate image: God himself as mother, holding the child on her arm, dandling on her knees. Verse 13 is one of the tenderest divine self-descriptions in all of Scripture. The God who opens the chapter speaking from an eternal throne that fills heaven comes down to hold his children on his arm. Both images are true simultaneously.",
  },
  {
    id: "v5",
    ref: "vv. 14-17",
    color: ROSE,
    title: "The Hand of the LORD Known to His Servants &mdash; Judgment on His Foes",
    body: "\"When you see this, your heart will rejoice and you will flourish like grass; the hand of the LORD will be made known to his servants, but his fury will be shown to his foes. See, the LORD is coming with fire, and his chariots are like a whirlwind; he will bring down his anger with fury, and his rebuke with flames of fire. For with fire and with his sword the LORD will execute judgment on all people, and many will be those slain by the LORD.\" The comfort of verses 10-13 is not universal &mdash; it is specifically for those who love Jerusalem and mourn over her. For the enemies of God&apos;s people, the coming of the LORD means judgment. The same divine presence that comforts his servants &mdash; that extends peace like a river &mdash; comes with fire and a sword against those who have rejected him. Isaiah 66 does not allow a sentimentalized picture of God; the divine comfort and the divine judgment are two aspects of the same holy character.",
  },
  {
    id: "v6",
    ref: "vv. 18-23",
    color: GREEN,
    title: "All Nations Gathered &mdash; The Sign Among the Nations and Universal Worship",
    body: "\"And I, because of what they have planned and done, am about to come and gather the people of all nations and languages, and they will come and see my glory. I will set a sign among them, and I will send some of those who survive to the nations &mdash; to Tarshish, to the Libyans and Lydians, to Tubal and Greece, and to the distant islands that have not heard of my fame or seen my glory. They will proclaim my glory among the nations. And they will bring all your people, from all the nations, to my holy mountain in Jerusalem as an offering to the LORD... And all mankind will come to bow down before me, says the LORD. From one New Moon to another and from one Sabbath to another, all mankind will come to bow down before me, says the LORD.\" This is the book of Isaiah&apos;s climactic missionary vision. God gathers the nations, sets a sign among them, and sends survivors to the far corners of the world &mdash; to places the name of God has never been heard. These emissaries proclaim God&apos;s glory, and as a result all mankind comes to worship. The movement is from gathering to sending to proclamation to universal worship. This is the entire shape of Christian mission in Isaiah&apos;s eschatological vision.",
  },
  {
    id: "v7",
    ref: "v. 24",
    color: MUTED,
    title: "The Solemn Warning &mdash; The Unquenchable Fire",
    body: "\"And they will go out and look on the dead bodies of those who rebelled against me; the worms that eat them will not die, the fire that burns them will not be quenched, and they will be loathsome to all mankind.\" The book of Isaiah ends not with universal salvation but with a solemn warning. Those who come to worship (v.23) will see the fate of those who rebelled. Jesus quotes this verse three times in Mark 9 (vv.44, 46, 48) to describe the final judgment &mdash; &quot;where their worm does not die and the fire is not quenched.&quot; The ending is not comfortable, and it was not meant to be. Isaiah concludes with a vision that makes both the blessing and the warning as clear as possible. The worshippers see the rebels; the new creation stands in contrast to the judgment. The choice that runs through the entire book &mdash; trust God or rebel against him &mdash; ends in two radically different destinations.",
  },
];

const APPLICATION_POINTS = [
  {
    id: "a1",
    color: PURPLE,
    title: "Bring a Humble, Trembling Heart to Scripture",
    body: "Isaiah 66:2 says God looks with favor on those who &quot;tremble at my word.&quot; Let this reorient your Bible reading. Come to Scripture not as a religious consumer but as someone standing before the living God who is actually speaking. Before you read, ask: what would it mean to tremble at this? What would change in my life if I took this as God actually addressing me? The cure for biblical illiteracy is not more information but more reverence &mdash; the recovery of trembling.",
  },
  {
    id: "a2",
    color: TEAL,
    title: "Let God&apos;s Infinite Transcendence Cure Your Religiosity",
    body: "God cannot be contained in your theological system, your worship style, your denominational tradition, or your personal piety. Isaiah 66:1 is a perpetual challenge to religious self-satisfaction. The God whose throne is heaven and whose footstool is earth does not fit in your categories. This is not a reason for theological agnosticism but for theological humility &mdash; the recognition that all our forms, structures, and systems are at best approximations of a reality too large to contain.",
  },
  {
    id: "a3",
    color: GOLD,
    title: "Believe That God Can Birth a New People in a Day",
    body: "Isaiah 66:8 asks: &quot;Can a country be born in a day?&quot; The answer is yes &mdash; and pray accordingly. God can do in a moment what seems to require generations. He can breathe life into dead valleys of dry bones (Ezekiel 37). He can add three thousand to the church in a single afternoon (Acts 2). He can birth something entirely new from what looks completely barren. Do not limit your prayers to what seems demographically or sociologically possible. Pray for miraculous birth &mdash; for the nation that comes forth before the labor pains.",
  },
  {
    id: "a4",
    color: ROSE,
    title: "Receive God&apos;s Mother-Like Comfort When You Are Distressed",
    body: "Isaiah 66:13 gives you permission to receive God&apos;s comfort as intimate, physical, and tender &mdash; as close and instinctive as a mother holding a distressed infant. When you are in pain, you do not need to be stoic before God. You can come to him as a child comes to a mother &mdash; just needing to be held. This is not weakness; it is the appropriate posture of a creature before a Creator who loves with this kind of intensity. Let the mother-image of God shape how you receive his comfort.",
  },
  {
    id: "a5",
    color: GREEN,
    title: "Pray for All Nations to Come to Worship",
    body: "Isaiah 66:23 says all mankind will come to bow before God. Let this eschatological certainty fuel your missionary prayer and engagement. Pray for the nations by name. Support global mission. Share the gospel with those around you who have not heard. Isaiah&apos;s final vision is not Israel alone worshipping in Jerusalem &mdash; it is all peoples, all languages, all nations streaming in. The Great Commission (Matthew 28:18-20) is the mechanism by which Isaiah 66:23 gets fulfilled. You participate in the final worship gathering every time you proclaim the gospel.",
  },
  {
    id: "a6",
    color: ACCENT,
    title: "Live in the Light of the Final Gathering",
    body: "History is heading somewhere definite: universal worship of the one true God. Every Sabbath, every new moon &mdash; all flesh will come to bow. This means the present moment is not the final word. The ruins of the present are not the final reality. The divisions, the failures, the persecutions, and the apparent defeats are all penultimate. The ultimate is all flesh bowing in worship. Live with that end in view &mdash; let it give you patience in the present and boldness in proclamation. The one who promised it is faithful; the vision will come to pass.",
  },
];

export default function Isaiah66GuidePage() {
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
              background: `${TEAL}22`,
              border: `1px solid ${TEAL}44`,
              borderRadius: 20,
              padding: "4px 14px",
              fontSize: 12,
              color: TEAL,
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
            Isaiah 66 &mdash; Heaven Is My Throne and All Flesh Will Worship
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
                "The grand finale of Isaiah &mdash; 24 verses that move from the humble heart God seeks, through judgment on empty religion, through the miraculous birth of a new people, through God&apos;s mother-like comfort, to the ultimate vision of all flesh worshipping before the living God.",
            }}
          />
        </div>

        {/* Key verse callout */}
        <div
          style={{
            background: `${TEAL}14`,
            border: `1px solid ${TEAL}44`,
            borderRadius: 14,
            padding: "18px 24px",
            marginBottom: 32,
            borderLeft: `4px solid ${TEAL}`,
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
            Key Verse &mdash; Isaiah 66:1-2
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
                "\"Heaven is my throne and the earth is my footstool. Where is the house you will build for me?... These are the ones I look on with favor: those who are humble and contrite in spirit, and who tremble at my word.\"",
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
            ["Chapter", "66"],
            ["Verses", "24"],
            ["Genre", "Eschatological Vision"],
            ["Theme", "All Flesh Will Worship"],
            ["Key Image", "Mother Comforting Child"],
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
                border: `1px solid ${activeTab === t.id ? TEAL : BORDER}`,
                background: activeTab === t.id ? `${TEAL}22` : "transparent",
                color: activeTab === t.id ? TEAL : MUTED,
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
                  color: TEAL,
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
                    "Isaiah 66 is the grand finale of the book &mdash; a chapter that moves from the humble heart God dwells in, to judgment on empty religion, to the miraculous birth of a new nation, to God&apos;s mother-like comfort, to the gathering of all nations in worship. The chapter opens with God&apos;s challenge to self-sufficient religion: \"Heaven is my throne and the earth is my footstool. Where is the house you will build for me? Where will my resting place be?\" The only thing God looks for is \"the one who is humble and contrite in spirit, and who trembles at my word\" (v.2).",
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
                    "The chapter&apos;s great turn comes with the birth of the nation in a day (v.8) &mdash; a miraculous new creation. Then Zion&apos;s mother-comfort (vv.12-13): \"As a mother comforts her child, so will I comfort you.\" The chapter closes with the eschatological vision of all flesh coming to worship before God &mdash; and the solemn warning that wickedness faces the unquenchable fire of God&apos;s judgment.",
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
                    "Isaiah 66 is one of the most theologically dense chapters in the entire Old Testament. It simultaneously addresses the character of true worship (vv.1-4), the miracle of new creation (vv.7-9), the tenderness of divine comfort (vv.12-13), the universal scope of the gospel mission (vv.18-23), and the seriousness of divine judgment (v.24). It is a fitting conclusion to the prophet who saw most clearly the full scope of God&apos;s redemptive purposes.",
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
                  color: PURPLE,
                  fontWeight: 800,
                  fontSize: 20,
                  marginBottom: 14,
                }}
              >
                Literary Context: The Grand Finale of Isaiah
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
                    "Isaiah 66 functions as the capstone of the entire 66-chapter book. The book that began with the indictment of Israel&apos;s covenant failure (chapter 1) and moved through the Servant Songs (chapters 40-55) and the vision of new creation (chapter 65) now concludes with the full eschatological panorama: the humble heart God seeks, judgment on empty religion, miraculous new creation, divine comfort, and universal worship.",
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
                    "The chapter is deeply connected to Isaiah 65 (new heavens and new earth) and together they form the conclusion to the sustained eschatological vision of chapters 60-66. But Isaiah 66 adds a missionary dimension absent from chapter 65 &mdash; the sending of survivors to the nations (v.19) and the universal gathering that results (v.23). The New Testament picks up these themes in Acts 2 (Pentecost as new creation), Revelation 21-22 (new Jerusalem), and throughout Paul&apos;s missionary theology.",
                }}
              />
            </div>

            {/* NT connections */}
            <div
              style={{
                background: `${GREEN}12`,
                border: `1px solid ${GREEN}44`,
                borderRadius: 12,
                padding: "20px 24px",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  color: GREEN,
                  fontWeight: 800,
                  fontSize: 15,
                  marginBottom: 14,
                }}
              >
                New Testament Connections to Isaiah 66
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                {[
                  ["Acts 7:48-50", "Stephen quotes Isa 66:1-2 at his martyrdom"],
                  ["Acts 2:1-41", "Pentecost as the nation born in a day (Isa 66:8)"],
                  ["Mark 9:44-48", "Jesus quotes Isa 66:24 on the unquenchable fire"],
                  ["Revelation 21-22", "New Jerusalem as fulfillment of Isa 65-66"],
                  ["Romans 15:20-21", "Paul&apos;s mission to unreached peoples (Isa 66:19)"],
                  ["Philippians 2:10-11", "All knees bow, echoing Isa 66:23"],
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
                    <span
                      style={{ color: MUTED }}
                      dangerouslySetInnerHTML={{ __html: note }}
                    />
                  </div>
                ))}
              </div>
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
                Key Themes in Isaiah 66
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
                    "Isaiah 66 is the eschatological and theological summit of the book. Its five major themes span the full range of biblical theology: the character of God, the nature of true worship, the miracle of new creation, the tenderness of divine care, and the universality of final redemption.",
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

            {/* Thematic arc */}
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
                The Thematic Arc of Isaiah 66
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                {[
                  [PURPLE, "vv.1-4", "Transcendence vs. empty religion &mdash; the God who cannot be housed"],
                  [GOLD, "vv.7-9", "Miraculous new creation &mdash; a nation born in a day"],
                  [ROSE, "vv.10-13", "Divine comfort &mdash; God as nursing mother"],
                  [ROSE, "vv.14-17", "Judgment on God&apos;s foes &mdash; fire and sword"],
                  [GREEN, "vv.18-23", "Universal worship &mdash; all flesh bows before God"],
                  [MUTED, "v.24", "Solemn warning &mdash; the unquenchable fire"],
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
                Verse by Verse &mdash; Isaiah 66 (24 Verses)
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
                    "Isaiah 66 moves through seven distinct sections, from the challenge to self-sufficient religion in verses 1-4 to the solemn final warning of verse 24. The chapter is the conclusion not only of chapters 65-66 but of the entire book of Isaiah.",
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

            {/* Missionary map callout */}
            <div
              style={{
                background: `${GREEN}12`,
                border: `1px solid ${GREEN}44`,
                borderRadius: 12,
                padding: "20px 24px",
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
                The Nations in Isaiah 66:19
              </div>
              <p
                style={{
                  color: MUTED,
                  fontSize: 13,
                  lineHeight: 1.75,
                  margin: "0 0 10px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 66:19 names specific nations to which the survivors will be sent: Tarshish, the Libyans, Lydians, Tubal, Greece, and the distant islands. These represent the farthest reaches of the known world in Isaiah&apos;s day &mdash; the ends of the earth. The missionary vision of Isaiah 66 is not vague; it is directional: from Jerusalem outward to the uttermost parts.",
                }}
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 8,
                }}
              >
                {[
                  ["Tarshish", "Far western coast (Spain?)"],
                  ["Libyans", "North Africa"],
                  ["Lydians", "Asia Minor (Turkey)"],
                  ["Tubal", "Asia Minor / Caucasus"],
                  ["Greece", "Iavan &mdash; the Aegean"],
                  ["Distant islands", "The ends of the earth"],
                ].map(([name, loc]) => (
                  <div
                    key={name}
                    style={{
                      background: `${GREEN}0A`,
                      border: `1px solid ${GREEN}25`,
                      borderRadius: 8,
                      padding: "8px 12px",
                    }}
                  >
                    <div
                      style={{
                        color: GREEN,
                        fontWeight: 700,
                        fontSize: 13,
                        marginBottom: 2,
                      }}
                    >
                      {name}
                    </div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{loc}</div>
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
                Application &mdash; Living Isaiah 66
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
                    "Isaiah 66 is a chapter that demands a response on multiple levels &mdash; in personal devotion, in corporate worship, in missionary engagement, and in eschatological hope. These applications draw out what it means to live under the light of Isaiah&apos;s final vision.",
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
                background: `${TEAL}14`,
                border: `1px solid ${TEAL}44`,
                borderRadius: 14,
                padding: "24px 28px",
                marginTop: 24,
              }}
            >
              <div
                style={{
                  color: TEAL,
                  fontWeight: 800,
                  fontSize: 16,
                  marginBottom: 12,
                }}
              >
                A Prayer Based on Isaiah 66
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
                    "Lord, you are enthroned in heaven and the earth is your footstool. Deliver us from the illusion that we can manage you, contain you, or capture you in our religious forms. Give us humble and contrite hearts that tremble at your word. Cause us to receive your comfort as a child receives a mother&apos;s embrace &mdash; with openness, with dependence, with gratitude. Lord of the nations, send your people to the ends of the earth to proclaim your glory. Gather all peoples before you. Let every knee bow. Let all flesh come to worship. We believe the day is coming; make us faithful until it arrives.",
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
                      "Isaiah 66:1-2 says God looks for the humble and contrite who tremble at his word, not for impressive religious performance. Where in your religious life might you have substituted performance for this posture?",
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html:
                      "The image of God as a comforting mother (v.13) is striking. How does this metaphor expand your understanding of God&apos;s character? How might it change how you come to him in times of distress?",
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html:
                      "Isaiah 66:8 asks: &quot;Can a country be born in a day?&quot; Where do you need to pray for miraculous, instantaneous new creation? What seems too slow or too dead to be reborn?",
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html:
                      "The chapter ends with universal worship (v.23) immediately followed by the solemn warning of verse 24. How do these two realities &mdash; the final gathering and the final judgment &mdash; shape your sense of urgency about the gospel?",
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html:
                      "Isaiah 66:19 describes survivors being sent to nations that have never heard God&apos;s name. How does this missionary vision connect to the Great Commission? What is your personal role in the fulfillment of Isaiah 66:23?",
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
