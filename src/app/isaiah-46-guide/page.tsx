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
  { id: "gQ2rEsStN6j", title: "Isaiah 46 - I Am God and There Is None Like Me" },
  { id: "hR7sFtTuO1k", title: "I Have Made You and I Will Carry You - Isaiah 46 Study" },
  { id: "iS3tGuUvP5l", title: "Isaiah 46 Verse by Verse - Idols vs the Living God" },
  { id: "jT8uHvVwQ9m", title: "Isaiah 46 Explained - God Who Carries His People" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = typeof TABS[number];

const keyThemes = [
  {
    id: "idols-fall",
    title: "Idols That Fall When You Fall",
    color: GOLD,
    body: "The Babylonian gods Bel (Marduk) and Nebo (Nabu) are carried into exile on the backs of cattle. They are burdens, not helps. When the city falls, they fall with it. Idols are fatally dependent on their worshippers &mdash; the moment you cannot support them, they cannot support you. This is the first great irony of the chapter: the gods of the most powerful empire on earth must be loaded onto donkeys like luggage. There is no rescue, no intervention, no answer from the idol. It merely goes where it is carried.",
  },
  {
    id: "god-carries",
    title: "The God Who Carries",
    color: GREEN,
    body: "The contrast is stunning: God says &quot;I have made you and I will carry you.&quot; From birth to old age to gray hairs, God does the carrying. This is the gospel of grace: not the human effort of sustaining God&apos;s favor, but God&apos;s own initiative sustaining his people through every season. Where idols are dead weight, God is the one who bears the weight. The direction of carrying is entirely reversed. Every religion invented by human hands requires you to carry the god &mdash; through ritual, performance, and sacrifice. Israel&apos;s God inverts this entirely: he carries his people.",
  },
  {
    id: "incomparable",
    title: "God&apos;s Incomparable Uniqueness",
    color: PURPLE,
    body: "&#39;I am God, and there is no other; I am God, and there is none like me&#39; (v.9). The double declaration emphasizes both exclusivity (no other God exists) and uniqueness (no being resembles God). He is in a category entirely by himself &mdash; not the best among many but the only one. The first claim rules out polytheism: there is no pantheon, no rival deity, no competing power. The second claim rules out analogy: there is no being in any category that resembles God. Philosophers speak of this as the doctrine of divine aseity &mdash; God&apos;s absolute self-sufficiency and incomparability.",
  },
  {
    id: "end-from-beginning",
    title: "Declaring the End from the Beginning",
    color: TEAL,
    body: "&#39;I make known the end from the beginning, from ancient times, what is still to come&#39; (v.10). God&apos;s knowledge is not merely comprehensive &mdash; it is eternal. He speaks the future into being through prophecy. This is the foundation of biblical confidence in prophecy and providence. No idol and no human rival can do this. The predictive dimension of prophecy &mdash; naming Cyrus by name more than a century before his birth (Isaiah 44:28) &mdash; is one of the strongest evidences in Scripture for the divine origin of the biblical text. God&apos;s foreknowledge is not observation of a future that exists independently; it is the declarative power of the one who holds all times in his hand.",
  },
  {
    id: "stubborn-heart",
    title: "The Stubborn of Heart Called to Remember",
    color: ACCENT,
    body: "The chapter addresses &#39;you stubborn-hearted, who are far from my righteousness&#39; (v.12). The call to remember God&apos;s former saving acts is the antidote to present stubbornness. Memory of God&apos;s faithfulness reshapes the rebel heart toward trust. The Hebrew word for stubborn here evokes hardness of heart &mdash; not merely ignorance but willful refusal. Yet the call is not condemnation but invitation: remember, fix it in mind, take it to heart. The antidote to idolatry is not argument but memory &mdash; the practiced, intentional recollection of what God has actually done. The Exodus, the return from exile, the sending of the servant &mdash; these are the anchors of a faith that will not drift.",
  },
];

const verseByVerse = [
  {
    ref: "vv. 1-2",
    color: GOLD,
    body: "Bel bows down, Nebo stoops low. Their idols are borne by animals &mdash; the images that are carried about are burdensome. They stoop and bow down together, unable to rescue the burden; they themselves go off into captivity. The gods of Babylon are named directly: Bel is Marduk, the chief deity of Babylon, whose name appears in Nebuchadnezzar and Belshazzar. Nebo (Nabu) was the god of writing and wisdom. Both were given elaborate processional festivals in which their statues were carried through the streets. Isaiah inverts this image: they are carried not in triumph but in flight, not in worship but in humiliation. The very act of carrying them exposes their impotence.",
  },
  {
    ref: "vv. 3-4",
    color: GREEN,
    body: "Listen to me, you descendants of Jacob, all the remnant of the people of Israel, you whom I have upheld since your birth, and have carried since you were born. Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you. These verses contain the theological heart of the chapter. The contrast is deliberate: idols are carried by people (vv.1-2); God carries his people (vv.3-4). The word translated &quot;carried&quot; in verse 3 is the same word used of the idols being borne on animals. God turns the image: I am the carrier, not the carried. The phrase &quot;from birth to gray hairs&quot; encompasses the entire human lifespan &mdash; there is no season in which God&apos;s carrying work ceases.",
  },
  {
    ref: "vv. 5-7",
    color: PURPLE,
    body: "With whom will you compare me or count me equal? To whom will you liken me that we may be compared? Some pour out gold from their bags and weigh out silver on the scales; they hire a goldsmith to make it into a god, and they bow down and worship it. They lift it to their shoulders and carry it; they set it up in its place, and there it stands. From that spot it cannot move. Even though someone cries out to it, it cannot answer; it cannot save them from their troubles. The rhetorical question of verse 5 is one of the greatest in Scripture. The answer is: no one. No category of being compares to God. Verses 6-7 then describe in devastating detail the absurdity of idol manufacture &mdash; human beings commission an object, carry it to a fixed position, and then pray to it. An object that cannot move, cannot speak, and cannot save. The irony is almost comic: you carry your god into position and then ask it to carry you.",
  },
  {
    ref: "vv. 8-10",
    color: TEAL,
    body: "Remember this, fix it in mind, take it to heart, you rebels. Remember the former things, those of long ago; I am God, and there is no other; I am God, and there is none like me. I make known the end from the beginning, from ancient times, what is still to come. I say, &apos;My purpose will stand, and I will do all that I please.&apos; The triple imperative &mdash; remember, fix it, take it to heart &mdash; is addressed to rebels, not enemies. These are people who know God but have drifted from him. Memory is the instrument of return. The claim in verse 9 is the most sweeping monotheistic declaration in the chapter: not only is there no other God, there is nothing like God in any category. Verse 10 grounds this in prophecy: God&apos;s declaration of the end from the beginning is the evidence that no other being can produce.",
  },
  {
    ref: "vv. 11-13",
    color: ACCENT,
    body: "From the east I summon a bird of prey; from a far-off land, a man to fulfill my purpose. What I have said, that I will bring about; what I have planned, that I will do. Listen to me, you stubborn-hearted, you who are now far from my righteousness. I am bringing my righteousness near, it is not far away; and my salvation will not be delayed. I will grant salvation to Zion, my splendor to Israel. The &quot;bird of prey from the east&quot; is Cyrus of Persia, whom God will use to end the Babylonian exile and commission the rebuilding of Jerusalem. The audacity of this prophecy &mdash; naming a foreign king as God&apos;s instrument a century before his birth &mdash; is the supreme demonstration of verses 9-10. The chapter ends not with threat but with promise: righteousness and salvation are near. The stubborn of heart are not condemned but called. God&apos;s purposes will not be thwarted by human stubbornness.",
  },
];

const applicationPoints = [
  {
    title: "Audit Your Idols",
    color: GOLD,
    body: "Isaiah 46 asks a searching question: what are you carrying that promises to carry you? Modern idols rarely look like statues. They are systems, achievements, relationships, and identities that we invest with saving power &mdash; asking them to justify our existence, secure our future, and give us what only God can give. The idol&apos;s fatal flaw is always the same: it requires you to maintain it, and when you fall, it falls with you. Career prestige collapses when the market turns. Relationships shatter under the weight of unrealistic expectations. Physical health declines with age. Ask honestly: what am I carrying that I have been told will carry me?",
  },
  {
    title: "Rest in the God Who Carries You",
    color: GREEN,
    body: "The promise of Isaiah 46:4 is not primarily about comfort but about the nature of grace: God is the carrier, not the carried. From birth to gray hairs, God&apos;s carrying work is continuous and unconditional. This is not passive Christianity &mdash; the people of Isaiah 46 are called to remember, listen, and obey. But the energy source is entirely different from performance religion: obedience flows from being carried, not toward earning the carrying. Let God&apos;s declaration &mdash; &quot;I have made you and I will carry you&quot; &mdash; reorder your understanding of the spiritual life. You are not earning God&apos;s support. You are living in it.",
  },
  {
    title: "Let God&apos;s Uniqueness Reorder Your Loves",
    color: PURPLE,
    body: "&#39;I am God, and there is none like me&#39; is not a boast but an invitation. If God is truly in a category by himself &mdash; if there is no being in any category that compares &mdash; then the entire structure of human seeking is reoriented. We were made for the incomparable one. Every substitute, however impressive, is a diminishment. This does not mean created goods are worthless; it means they find their proper place when God occupies his. Augustine&apos;s language is precise: &quot;Thou madest us for Thyself, and our heart is restless until it repose in Thee.&quot; Let the incomparability of God reshape your order of loves: God first, all else in its proper place beneath him.",
  },
  {
    title: "Anchor Your Faith in Prophecy Fulfilled",
    color: TEAL,
    body: "From Cyrus to Christ, the Scripture is full of fulfilled prophecy &mdash; God&apos;s calling of the end from the beginning. Cyrus was named by name more than a century before his birth (Isaiah 44:28, 45:1). The details of the Messiah&apos;s suffering in Psalm 22 and Isaiah 53 were written centuries before crucifixion was even a known form of execution. The destruction of Jerusalem in AD 70 was predicted by Jesus in detail (Luke 21:20-24). These are not general religious principles but specific historical predictions that came true. Let the track record of biblical prophecy strengthen your confidence in what has not yet been fulfilled: the return of Christ, the resurrection of the dead, the new creation.",
  },
  {
    title: "Return from Stubbornness by Remembering",
    color: ACCENT,
    body: "The chapter&apos;s prescription for stubbornness is not guilt but memory. &quot;Remember the former things, those of long ago.&quot; The antidote to a drifting, hardening heart is not effort but recollection &mdash; the practiced, intentional remembering of what God has actually done in your life and in history. Build memory disciplines into your rhythms: journal about God&apos;s past faithfulness, celebrate the Lord&apos;s Supper as an act of remembrance, read the Psalms of recollection (Psalm 78, 105, 106). When the heart grows stubborn, the prescription is not trying harder but remembering deeper. The God who carried you yesterday is the God who carries you today.",
  },
];

export default function Isaiah46GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
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
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(180deg, rgba(58,125,86,0.12) 0%, rgba(7,7,15,0) 100%)",
          borderBottom: `1px solid ${BORDER}`,
          padding: "48px 20px 40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: `${GREEN}18`,
            border: `1px solid ${GREEN}40`,
            borderRadius: 20,
            padding: "4px 16px",
            fontSize: 12,
            fontWeight: 700,
            color: GREEN,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Isaiah 46 - Bible Study Guide
        </div>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: 16,
            maxWidth: 760,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          I Am God and There Is{" "}
          <span
            style={{
              background: `linear-gradient(135deg, ${GREEN}, ${PURPLE})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            None Like Me
          </span>
        </h1>
        <p
          style={{
            color: MUTED,
            fontSize: 17,
            maxWidth: 640,
            margin: "0 auto 24px",
            lineHeight: 1.7,
          }}
        >
          Isaiah 46 - 13 verses - A masterpiece of theological contrast between idols that must be
          carried and the God who carries his people from birth to gray hairs.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "13 Verses", color: GREEN },
            { label: "Old Testament", color: PURPLE },
            { label: "Prophecy", color: GOLD },
            { label: "Monotheism", color: TEAL },
          ].map((tag) => (
            <span
              key={tag.label}
              style={{
                background: `${tag.color}15`,
                border: `1px solid ${tag.color}35`,
                color: tag.color,
                borderRadius: 8,
                padding: "4px 12px",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      {/* Tab Bar */}
      <div
        style={{
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 10,
          background: BG,
          borderBottom: `1px solid ${BORDER}`,
          padding: "0 20px",
          display: "flex",
          gap: 0,
          maxWidth: 960,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            style={{
              background: "transparent",
              border: "none",
              borderBottom: activeTab === tab ? `2px solid ${GREEN}` : "2px solid transparent",
              color: activeTab === tab ? GREEN : MUTED,
              fontWeight: activeTab === tab ? 700 : 500,
              fontSize: 14,
              padding: "14px 18px",
              cursor: "pointer",
              transition: "color 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "40px 20px 80px",
        }}
      >
        {/* ---- OVERVIEW TAB ---- */}
        {activeTab === "Overview" && (
          <div>
            {/* Main overview card */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: 32,
                marginBottom: 28,
              }}
            >
              <h2
                style={{
                  color: GREEN,
                  fontWeight: 800,
                  fontSize: 22,
                  marginBottom: 16,
                  marginTop: 0,
                }}
              >
                Overview of Isaiah 46
              </h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16, marginTop: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 46 is a masterpiece of theological contrast. On one side: the idols of Babylon (Bel and Nebo) must be carried by weary animals and exhausted men &mdash; and when the people fall, the idols fall with them. On the other side: Israel&apos;s God carries his people. &quot;I have made you and I will carry you; I will sustain you and I will rescue you&quot; (v.4). The chapter culminates in one of Scripture&apos;s most sweeping monotheistic claims: &quot;Remember the former things, those of long ago; I am God, and there is no other; I am God, and there is none like me. I make known the end from the beginning, from ancient times, what is still to come.&quot;",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 0, marginTop: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "God calls on the stubborn of heart to remember his saving purposes and the &quot;bird of prey from the east&quot; &mdash; Cyrus of Persia &mdash; who will execute his purposes. The chapter is part of the &quot;Servant Songs&quot; section of Isaiah (chapters 40-55), written to exiles in Babylon and proclaiming that the God who made the universe has not abandoned his people. The contrast between idols and the living God is not merely theological argument; it is pastoral comfort: the God who holds the future carries the people through the present.",
                }}
              />
            </div>

            {/* Context cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
                marginBottom: 28,
              }}
            >
              {[
                {
                  title: "Historical Setting",
                  color: GOLD,
                  text: "Isaiah 46 is addressed to Israelites in Babylonian exile (or anticipating it). Babylon was the dominant superpower, and its gods &mdash; Bel (Marduk) and Nebo (Nabu) &mdash; were celebrated as the powers behind its empire. The chapter deconstructs this claim: the gods of the greatest empire on earth are powerless.",
                },
                {
                  title: "Literary Structure",
                  color: PURPLE,
                  text: "The chapter divides into three movements: the fall of Babylon&apos;s gods (vv.1-2), the contrast with the carrying God (vv.3-7), and the summons to remember and trust (vv.8-13). The central literary device is the inversion of carrying: idols are carried; God carries his people.",
                },
                {
                  title: "The Prophecy of Cyrus",
                  color: TEAL,
                  text: "The &quot;bird of prey from the east&quot; (v.11) is Cyrus of Persia, named explicitly in Isaiah 44:28 and 45:1. This prophecy, made over a century before Cyrus conquered Babylon in 539 BC, is one of Scripture&apos;s most remarkable fulfilled predictions. Cyrus issued the edict permitting the Jews to return to Jerusalem (Ezra 1:1-4).",
                },
                {
                  title: "Connections to the New Testament",
                  color: ACCENT,
                  text: "The theology of Isaiah 46 reaches its fulfillment in Christ. The one who carries his people from birth to gray hairs (v.4) is the same God who, in the fullness of time, became flesh to carry human sin itself (Isaiah 53:4-6). The declaration &quot;I am God and there is none like me&quot; echoes through the &quot;I am&quot; statements of Jesus in John&apos;s Gospel.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${card.color}30`,
                    borderRadius: 14,
                    padding: 22,
                  }}
                >
                  <h3
                    style={{
                      color: card.color,
                      fontWeight: 700,
                      fontSize: 15,
                      marginBottom: 10,
                      marginTop: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: card.text }}
                  />
                </div>
              ))}
            </div>

            {/* Key verse */}
            <div
              style={{
                background: `${GREEN}10`,
                border: `1px solid ${GREEN}35`,
                borderRadius: 14,
                padding: 28,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: GREEN,
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Key Verse - Isaiah 46:4
              </div>
              <blockquote
                style={{
                  margin: 0,
                  fontStyle: "italic",
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: TEXT,
                  fontWeight: 500,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&quot;Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you.&quot;",
                }}
              />
            </div>

            {/* Videos teaser */}
            <div style={{ marginTop: 36 }}>
              <h2
                style={{
                  color: TEXT,
                  fontWeight: 800,
                  fontSize: 20,
                  marginBottom: 20,
                  marginTop: 0,
                }}
              >
                Teaching Videos
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: 20,
                }}
              >
                {videoItems.map((v) => (
                  <div
                    key={v.id}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div style={{ padding: "12px 14px" }}>
                      <p
                        style={{
                          color: TEXT,
                          fontSize: 13,
                          fontWeight: 600,
                          margin: 0,
                          lineHeight: 1.45,
                        }}
                      >
                        {v.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ---- KEY THEMES TAB ---- */}
        {activeTab === "Key Themes" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2
                style={{
                  color: TEXT,
                  fontWeight: 800,
                  fontSize: 22,
                  marginBottom: 8,
                  marginTop: 0,
                }}
              >
                Key Themes in Isaiah 46
              </h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginTop: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Five interlocking themes run through Isaiah 46, each exposing the fatal weakness of idolatry and the incomparable power of the living God.",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {keyThemes.map((theme, idx) => {
                const isOpen = openTheme === theme.id;
                return (
                  <div
                    key={theme.id}
                    style={{
                      background: CARD,
                      border: `1px solid ${isOpen ? theme.color + "50" : BORDER}`,
                      borderRadius: 14,
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenTheme(isOpen ? null : theme.id)}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "20px 24px",
                        cursor: "pointer",
                        textAlign: "left",
                        gap: 16,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            background: `${theme.color}20`,
                            border: `1px solid ${theme.color}50`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: theme.color,
                            fontWeight: 900,
                            fontSize: 13,
                            flexShrink: 0,
                          }}
                        >
                          {idx + 1}
                        </div>
                        <h3
                          style={{
                            color: isOpen ? theme.color : TEXT,
                            fontWeight: 700,
                            fontSize: 16,
                            margin: 0,
                            transition: "color 0.2s",
                          }}
                          dangerouslySetInnerHTML={{ __html: theme.title }}
                        />
                      </div>
                      <span
                        style={{
                          color: theme.color,
                          fontSize: 22,
                          fontWeight: 700,
                          flexShrink: 0,
                          lineHeight: 1,
                        }}
                      >
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: "0 24px 24px",
                          borderTop: `1px solid ${theme.color}20`,
                        }}
                      >
                        <p
                          style={{
                            color: TEXT,
                            fontSize: 15,
                            lineHeight: 1.85,
                            margin: "20px 0 0",
                          }}
                          dangerouslySetInnerHTML={{ __html: theme.body }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Summary of contrast */}
            <div
              style={{
                background: `${PURPLE}10`,
                border: `1px solid ${PURPLE}30`,
                borderRadius: 14,
                padding: 28,
                marginTop: 28,
              }}
            >
              <h3
                style={{
                  color: PURPLE,
                  fontWeight: 800,
                  fontSize: 17,
                  marginBottom: 16,
                  marginTop: 0,
                }}
              >
                The Central Contrast
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 20,
                }}
              >
                <div
                  style={{
                    background: `${GOLD}08`,
                    border: `1px solid ${GOLD}25`,
                    borderRadius: 10,
                    padding: 16,
                  }}
                >
                  <div
                    style={{
                      color: GOLD,
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: "0.08em",
                      marginBottom: 10,
                    }}
                  >
                    IDOLS OF BABYLON
                  </div>
                  <ul
                    style={{
                      margin: 0,
                      padding: "0 0 0 16px",
                      color: MUTED,
                      fontSize: 13,
                      lineHeight: 1.8,
                    }}
                  >
                    <li>Carried by animals and men</li>
                    <li>Cannot move from their place</li>
                    <li>Cannot answer when called</li>
                    <li>Cannot save in trouble</li>
                    <li>Fall when their people fall</li>
                    <li>Go into exile with the defeated</li>
                  </ul>
                </div>
                <div
                  style={{
                    background: `${GREEN}08`,
                    border: `1px solid ${GREEN}25`,
                    borderRadius: 10,
                    padding: 16,
                  }}
                >
                  <div
                    style={{
                      color: GREEN,
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: "0.08em",
                      marginBottom: 10,
                    }}
                  >
                    THE GOD OF ISRAEL
                  </div>
                  <ul
                    style={{
                      margin: 0,
                      padding: "0 0 0 16px",
                      color: MUTED,
                      fontSize: 13,
                      lineHeight: 1.8,
                    }}
                  >
                    <li>Carries his people from birth</li>
                    <li>Sustains through every season</li>
                    <li>Answers and rescues</li>
                    <li>Declares the end from the beginning</li>
                    <li>Incomparable &mdash; none like him</li>
                    <li>His purpose will always stand</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---- VERSE BY VERSE TAB ---- */}
        {activeTab === "Verse by Verse" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2
                style={{
                  color: TEXT,
                  fontWeight: 800,
                  fontSize: 22,
                  marginBottom: 8,
                  marginTop: 0,
                }}
              >
                Verse by Verse - Isaiah 46
              </h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginTop: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "A close reading of all 13 verses, grouped by the chapter&apos;s natural movements. Click each section to expand the commentary.",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {verseByVerse.map((section) => {
                const isOpen = openVerse === section.ref;
                return (
                  <div
                    key={section.ref}
                    style={{
                      background: CARD,
                      border: `1px solid ${isOpen ? section.color + "50" : BORDER}`,
                      borderRadius: 14,
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenVerse(isOpen ? null : section.ref)}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "18px 24px",
                        cursor: "pointer",
                        textAlign: "left",
                        gap: 16,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span
                          style={{
                            background: `${section.color}20`,
                            border: `1px solid ${section.color}40`,
                            color: section.color,
                            fontWeight: 700,
                            fontSize: 12,
                            padding: "3px 10px",
                            borderRadius: 8,
                            flexShrink: 0,
                          }}
                        >
                          {section.ref}
                        </span>
                        <span
                          style={{
                            color: isOpen ? section.color : TEXT,
                            fontWeight: 600,
                            fontSize: 14,
                          }}
                        >
                          Isaiah 46 {section.ref}
                        </span>
                      </div>
                      <span
                        style={{
                          color: section.color,
                          fontSize: 22,
                          fontWeight: 700,
                          flexShrink: 0,
                          lineHeight: 1,
                        }}
                      >
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: "20px 24px 24px",
                          borderTop: `1px solid ${section.color}20`,
                        }}
                      >
                        <p
                          style={{
                            color: TEXT,
                            fontSize: 15,
                            lineHeight: 1.85,
                            margin: 0,
                          }}
                          dangerouslySetInnerHTML={{ __html: section.body }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Chapter at a glance */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 28,
                marginTop: 28,
              }}
            >
              <h3
                style={{
                  color: TEXT,
                  fontWeight: 800,
                  fontSize: 17,
                  marginBottom: 16,
                  marginTop: 0,
                }}
              >
                Chapter at a Glance
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "vv. 1-2", label: "Bel and Nebo humiliated - idols carried into captivity", color: GOLD },
                  { ref: "vv. 3-4", label: "God carried his people from birth - will carry to gray hairs", color: GREEN },
                  { ref: "vv. 5-7", label: "Who compares to God? Idols manufactured, carried, and mute", color: PURPLE },
                  { ref: "vv. 8-10", label: "Remember - I am God alone; I declare the end from the beginning", color: TEAL },
                  { ref: "vv. 11-13", label: "Cyrus called; righteousness and salvation near for Zion", color: ACCENT },
                ].map((row) => (
                  <div
                    key={row.ref}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      padding: "10px 14px",
                      background: `${row.color}08`,
                      borderRadius: 8,
                      border: `1px solid ${row.color}20`,
                    }}
                  >
                    <span
                      style={{
                        color: row.color,
                        fontWeight: 700,
                        fontSize: 12,
                        minWidth: 60,
                        flexShrink: 0,
                      }}
                    >
                      {row.ref}
                    </span>
                    <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }}>{row.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ---- APPLICATION TAB ---- */}
        {activeTab === "Application" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2
                style={{
                  color: TEXT,
                  fontWeight: 800,
                  fontSize: 22,
                  marginBottom: 8,
                  marginTop: 0,
                }}
              >
                Applying Isaiah 46
              </h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginTop: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 46 is not merely ancient history &mdash; it is a searchlight on the modern soul. These five application areas bring the chapter into the present.",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {applicationPoints.map((point, idx) => {
                const isOpen = openApp === point.title;
                return (
                  <div
                    key={point.title}
                    style={{
                      background: CARD,
                      border: `1px solid ${isOpen ? point.color + "50" : BORDER}`,
                      borderRadius: 14,
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenApp(isOpen ? null : point.title)}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "20px 24px",
                        cursor: "pointer",
                        textAlign: "left",
                        gap: 16,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            background: `${point.color}20`,
                            border: `1px solid ${point.color}50`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: point.color,
                            fontWeight: 900,
                            fontSize: 13,
                            flexShrink: 0,
                          }}
                        >
                          {idx + 1}
                        </div>
                        <h3
                          style={{
                            color: isOpen ? point.color : TEXT,
                            fontWeight: 700,
                            fontSize: 16,
                            margin: 0,
                            transition: "color 0.2s",
                          }}
                          dangerouslySetInnerHTML={{ __html: point.title }}
                        />
                      </div>
                      <span
                        style={{
                          color: point.color,
                          fontSize: 22,
                          fontWeight: 700,
                          flexShrink: 0,
                          lineHeight: 1,
                        }}
                      >
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: "0 24px 24px",
                          borderTop: `1px solid ${point.color}20`,
                        }}
                      >
                        <p
                          style={{
                            color: TEXT,
                            fontSize: 15,
                            lineHeight: 1.85,
                            margin: "20px 0 0",
                          }}
                          dangerouslySetInnerHTML={{ __html: point.body }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Reflection questions */}
            <div
              style={{
                background: `${GREEN}10`,
                border: `1px solid ${GREEN}35`,
                borderRadius: 14,
                padding: 28,
                marginTop: 28,
              }}
            >
              <h3
                style={{
                  color: GREEN,
                  fontWeight: 800,
                  fontSize: 17,
                  marginBottom: 20,
                  marginTop: 0,
                }}
              >
                Discussion and Reflection Questions
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  {
                    q: "What modern equivalents of Bel and Nebo are you most tempted to rely on for security, identity, or salvation?",
                    color: GOLD,
                  },
                  {
                    q: "In what area of your life are you carrying something that was supposed to carry you? What would it look like to set it down?",
                    color: GREEN,
                  },
                  {
                    q: "How does the prophecy of Cyrus &mdash; named more than a century before his birth &mdash; affect your confidence in the rest of biblical prophecy?",
                    color: TEAL,
                  },
                  {
                    q: "The chapter addresses &quot;stubborn-hearted&quot; people who are far from righteousness. In what area of your life is your heart currently stubborn toward God?",
                    color: PURPLE,
                  },
                  {
                    q: "What specific acts of God&apos;s faithfulness in your own history do you need to intentionally remember in this season?",
                    color: ACCENT,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
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
                        background: `${item.color}20`,
                        border: `1px solid ${item.color}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: item.color,
                        fontWeight: 900,
                        fontSize: 12,
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      {i + 1}
                    </div>
                    <p
                      style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: item.q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Closing call */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 28,
                marginTop: 20,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: MUTED,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Isaiah 46:9
              </div>
              <p
                style={{
                  color: TEXT,
                  fontSize: 17,
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  margin: 0,
                  fontWeight: 500,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&quot;Remember the former things, those of long ago; I am God, and there is no other; I am God, and there is none like me.&quot;",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
