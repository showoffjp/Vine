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
  { id: "kU4vIwWxR3n", title: "Isaiah 48 - God Teaches You What Is Best for You" },
  { id: "lV9wJxXyS7o", title: "Leave Babylon Find Peace Like a River - Isaiah 48 Study" },
  { id: "mW1xKyYzT2p", title: "Isaiah 48 Verse by Verse - Stubbornness and Redemption" },
  { id: "nX6yLzZaU5q", title: "Isaiah 48 Explained - God Refines His People" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = typeof TABS[number];

const keyThemes = [
  {
    id: "hollow-profession",
    title: "The Hollow Religious Profession",
    color: ROSE,
    body: "Israel swears by God&apos;s name but not in truth or righteousness. They call themselves citizens of the Holy City but do not rely on God. This is the danger of religious formalism: an inherited name without living faith. God is not fooled by vocabulary without reality. The people of Isaiah 48 are not pagans who have never heard of God &mdash; they are insiders who use God&apos;s name as a social identifier while their hearts remain unaligned with his character. This is the most common form of spiritual failure in religious communities: the gap between the confession on the lips and the reality in the life. Jesus addresses the same pattern in Matthew 15:8: &quot;These people honor me with their lips, but their hearts are far from me.&quot;",
  },
  {
    id: "prophecy-advance",
    title: "Why God Announces Prophecy in Advance",
    color: GOLD,
    body: "God declared former things before they happened so that Israel would not say &quot;my idol did them&quot; or &quot;my image and metal god ordained them&quot; (v.5). Fulfilled prophecy is God&apos;s signature &mdash; it guards his people from misattributing his works to lesser powers. This is a remarkable apologetic insight: predictive prophecy is not merely evidence for the skeptic but protection for the believer. When the thing comes to pass exactly as foretold, the temptation to give credit to coincidence, human wisdom, or other powers is pre-empted. God&apos;s advance declaration is an act of pastoral care: it ensures that when Israel sees the fulfillment, they cannot look anywhere but to him.",
  },
  {
    id: "refines-not-destroys",
    title: "God Refines, Not Destroys",
    color: TEAL,
    body: "&#39;See, I have refined you, though not as silver; I have tested you in the furnace of affliction. For my own sake, for my own sake, I do this&#39; (vv.10-11). Suffering in Israel&apos;s history (and in the believer&apos;s life) is not abandonment but refining. God&apos;s motive is his own name and Israel&apos;s ultimate good. The phrase &quot;for my own sake&quot; appears twice &mdash; a double emphasis that signals this is not merely about Israel&apos;s benefit but about God&apos;s own glory and character. He cannot let himself be defamed (v.11). The refining metaphor is significant: silver is purified by fire, not destroyed by it. The dross is burned away; the precious metal remains. Suffering in God&apos;s hands has the same purpose: not annihilation but purification.",
  },
  {
    id: "peace-river",
    title: "Peace Like a River",
    color: GREEN,
    body: "&#39;If only you had paid attention to my commands, your peace would have been like a river, your well-being like the waves of the sea&#39; (v.18). This is one of Scripture&apos;s great &quot;if only&quot; statements &mdash; not accusation but lament. God wanted better for his people. Obedience opens the channel through which peace flows. The image of peace like a river is deeply evocative: a river is not static but flowing, not occasional but constant, not shallow but deep. The waves of the sea speak of abundance &mdash; well-being that comes wave after wave without exhaustion. This is what disobedience has forfeited. The &quot;if only&quot; is God&apos;s grief, not his condemnation &mdash; a parent who sees what could have been and mourns the unnecessary loss.",
  },
  {
    id: "leave-babylon",
    title: "Leave Babylon",
    color: PURPLE,
    body: "The chapter ends with an urgent call: &quot;Leave Babylon, flee from the Babylonians!&quot; (v.20). This is not just historical advice to exiles but a perpetual spiritual call: leave the systems of the world that hold you captive and trust God to provide as he did for Israel in the wilderness. Babylon in Scripture is more than a city &mdash; it is a symbol of human civilization organized around self-sufficiency, the accumulation of power, and the rejection of God&apos;s reign. The call to leave Babylon echoes through the New Testament (Revelation 18:4: &quot;Come out of her, my people&quot;) and applies to every generation. The shout of joy that accompanies the exodus &mdash; &quot;announce this with shouts of joy, proclaim it to the ends of the earth&quot; &mdash; tells us that leaving is not a loss but a liberation.",
  },
];

const verseByVerse = [
  {
    ref: "vv. 1-2",
    color: ROSE,
    body: "Hear this, descendants of Jacob, you who are called by the name of Israel and come from the line of Judah, you who take oaths in the name of the LORD and invoke the God of Israel &mdash; but not in truth or righteousness &mdash; you who call yourselves citizens of the Holy City and rely on the God of Israel &mdash; the LORD Almighty is his name. The chapter opens with a biting irony: the people being addressed have all the right religious vocabulary. They invoke God&apos;s name, take oaths in his name, call themselves citizens of the Holy City. But these are not credentials; they are accusations. The addition &quot;but not in truth or righteousness&quot; strips away the religious veneer and exposes the hollow center. This is not an attack on outsiders but on insiders &mdash; the covenant community whose profession outpaces their reality.",
  },
  {
    ref: "vv. 3-6",
    color: GOLD,
    body: "I foretold the former things long ago, my mouth announced them and I made them known; then suddenly I acted, and they came to pass. For I knew how stubborn you were; your neck muscles were iron, your forehead was bronze. Therefore I told you these things long ago; before they happened I announced them to you so that you could not say, &apos;My images brought them about; my wooden image and metal god ordained them.&apos; You have heard these things; look at them all. Will you not admit them? From now on I will tell you of new things, of hidden things unknown to you. God&apos;s advance disclosure of events is here given a specific pastoral purpose: it pre-empts the crediting of God&apos;s works to idols. The description of Israel as iron-necked and bronze-foreheaded is one of the most vivid hardness-of-heart images in the Bible &mdash; the prophetic tradition&apos;s most visceral way of describing willful resistance to God. God worked around their stubbornness not by overriding it but by providing undeniable evidence in advance.",
  },
  {
    ref: "vv. 7-9",
    color: TEAL,
    body: "They are created now, and not long ago; you have not heard of them before today. So you cannot say, &apos;Yes, I knew of them.&apos; You have neither heard nor understood; from of old your ears have not been open. Well do I know how treacherous you are; you were called a rebel from birth. For my own name&apos;s sake I delay my wrath; for the sake of my praise I hold it back from you, so as not to destroy you. God announces &quot;new things&quot; to prevent a second form of dishonesty: claiming after the fact that they already knew what was coming. The exposure of Israel&apos;s treachery is complete: they are not merely forgetful but consistently dishonest &mdash; they would deny the evidence of fulfilled prophecy just as they have denied everything else. And yet God holds back his wrath. &quot;For my own name&apos;s sake&quot; is not a cold reason but a revelatory one: God&apos;s character is itself the ground of his restraint. He is the God who does not destroy what he made.",
  },
  {
    ref: "vv. 10-11",
    color: GREEN,
    body: "See, I have refined you, though not as silver; I have tested you in the furnace of affliction. For my own sake, for my own sake, I do this. How can I let myself be defamed? I will not yield my glory to another. The refinement metaphor is carefully qualified: &quot;though not as silver.&quot; Silver refining involves complete purification; Israel&apos;s refinement has not produced that result. Yet it has been purposeful. The affliction of exile was not random suffering but a deliberate act of divine discipline. The double &quot;for my own sake&quot; is striking in its honesty: God does not pretend his primary motivation is Israel&apos;s benefit alone. His name, his glory, his reputation are at stake. But this is not narcissism &mdash; it is the foundation of hope: a God who acts for his own glory is the one who cannot ultimately allow his purposes to fail.",
  },
  {
    ref: "vv. 12-13",
    color: PURPLE,
    body: "Listen to me, Jacob, Israel, whom I have called: I am he; I am the first and I am the last. My own hand laid the foundations of the earth, and my right hand spread out the heavens; when I summon them, they all stand up together. The &quot;I am he&quot; formula is one of the most theologically pregnant in Isaiah 40-55, connecting God&apos;s self-designation to the divine name itself. &quot;I am the first and I am the last&quot; declares God&apos;s priority over and sovereignty through all of time &mdash; nothing precedes him, nothing outlasts him. The creation claims (foundations of the earth, spread out the heavens) are not mere background; they are the basis of the redemptive claim that follows. The one summoning Cyrus is the one who summoned the stars into being.",
  },
  {
    ref: "vv. 14-16",
    color: GOLD,
    body: "Come together, all of you, and listen: Which of the idols has foretold these things? The LORD&apos;s chosen ally will carry out his purpose against Babylon; his arm will be against the Babylonians. I, even I, have spoken; yes, I have called him. I will bring him, and he will succeed in his mission. Come near me and listen to this: From the first announcement I have not spoken in secret; at the time it happens, I am there. And now the Sovereign LORD has sent me, with his Spirit. The courtroom challenge to the idols returns: which of them predicted this? None. Only God declared in advance what Cyrus would do. The phrase &quot;I have not spoken in secret&quot; is a direct contrast with pagan oracles, which were typically ambiguous and hidden. God&apos;s word is public, specific, and verifiable. The final line &mdash; &quot;the Sovereign LORD has sent me, with his Spirit&quot; &mdash; has been read as an early Trinitarian formulation: the Sovereign LORD sends both the servant and the Spirit.",
  },
  {
    ref: "vv. 17-19",
    color: GREEN,
    body: "This is what the LORD says &mdash; your Redeemer, the Holy One of Israel: I am the LORD your God, who teaches you what is best for you, who directs you in the way you should go. If only you had paid attention to my commands, your peace would have been like a river, your well-being like the waves of the sea. Your descendants would have been like the sand, your children like its numberless grains; their name would never be destroyed nor cut off from before me. These verses contain the emotional peak of the entire chapter. God identifies himself with four titles: LORD, Redeemer, Holy One of Israel, and Teacher &mdash; the last being the most surprising. The one who laid the foundations of the earth is also the one who teaches what is best. The &quot;if only&quot; of verse 18 is the chapter&apos;s greatest lament: this peace was available, this abundance was offered, and it was forfeited by disobedience. God is not indifferent &mdash; he grieves the unnecessary loss.",
  },
  {
    ref: "vv. 20-22",
    color: ROSE,
    body: "Leave Babylon, flee from the Babylonians! Announce this with shouts of joy and proclaim it. Send it out to the ends of the earth; say, &apos;The LORD has redeemed his servant Jacob.&apos; They did not thirst when he led them through the deserts; he made water flow for them from the rock; he split the rock and water gushed out. &apos;There is no peace,&apos; says the LORD, &apos;for the wicked.&apos; The chapter ends with exodus imagery: God providing water in the desert just as he did at Meribah (Exodus 17). The new exodus out of Babylon will replicate the original exodus from Egypt. The shout of joy &mdash; &quot;The LORD has redeemed his servant Jacob&quot; &mdash; is the declaration to the ends of the earth. But the chapter closes with a somber note: there is no peace for the wicked. This is not a threat but a statement of structure: peace flows through obedience to God, and those who refuse God&apos;s way refuse the only channel through which peace flows.",
  },
];

const applicationPoints = [
  {
    title: "Examine Your Religious Profession",
    color: ROSE,
    body: "Isaiah 48 is a mirror for the religious insider. The people being addressed are not pagans but covenant people who use God&apos;s name while their hearts are elsewhere. The question for self-examination is not &quot;Am I religious?&quot; but &quot;Is my religion in truth?&quot; Do I invoke God&apos;s name in prayer while habitually making decisions without reference to him? Do I call myself a Christian while structuring my life around values indistinguishable from the surrounding culture? Do I take oaths and make commitments in God&apos;s name without the intention or the effort to keep them? God sees through the vocabulary to the reality. The chapter calls for honest interior examination: where is the gap between my profession and my practice?",
  },
  {
    title: "Let Fulfilled Prophecy Strengthen Your Faith in Scripture",
    color: GOLD,
    body: "God&apos;s purpose in announcing things before they happen is to create undeniable evidence that he alone is God. When the thing comes to pass exactly as declared, there is no room for saying &quot;my idol did this&quot; or &quot;this was coincidence.&quot; Take time to study the fulfilled prophecies of Scripture: Cyrus named a century in advance (Isaiah 44:28); the details of Christ&apos;s suffering in Psalm 22 and Isaiah 53; the fall of Tyre in Ezekiel 26; the rise and fall of empires in Daniel 2 and 7; Jesus&apos;s prediction of Jerusalem&apos;s destruction in Luke 21. Each fulfilled prophecy is God&apos;s signature on the text. Use this evidence not as a debate tactic but as a personal anchor: the God who called those things into being is the God who holds your future.",
  },
  {
    title: "Receive Suffering as God&apos;s Refining, Not His Rejection",
    color: TEAL,
    body: "&#39;I have refined you in the furnace of affliction&#39; (v.10). When suffering comes &mdash; illness, loss, failure, persecution &mdash; the temptation is to interpret it as evidence that God has abandoned us or is punishing us. Isaiah 48 offers a different framework: suffering can be purposeful refining. The fire that burns is not destroying the precious metal; it is removing the dross. This does not mean all suffering is discipline (the book of Job corrects that misreading); it means that in God&apos;s hands, suffering is never wasted. Ask in the midst of affliction: what is being burned away? What dross &mdash; false confidence, misplaced trust, proud self-sufficiency &mdash; am I losing? What is being refined and clarified in me? God&apos;s motive is not cruelty but beauty &mdash; he is after the silver, not the dross.",
  },
  {
    title: "Open the Channel of Peace Through Obedience",
    color: GREEN,
    body: "The &quot;if only&quot; of Isaiah 48:18 is one of the Bible&apos;s most poignant statements: &quot;If only you had paid attention to my commands, your peace would have been like a river.&quot; Peace is not manufactured by human effort or achieved by spiritual disciplines alone &mdash; it flows through obedience to God&apos;s commands. When the channel is open &mdash; when we are walking in alignment with God&apos;s word &mdash; peace flows freely and continuously like a river. When the channel is blocked by disobedience, the flow stops. This is not a threat but a description of how the spiritual world works. Peace is not God&apos;s reward for good behavior; it is the natural result of life lived in alignment with reality as God has structured it. Identify specific areas of disobedience that may be blocking the flow of peace in your life.",
  },
  {
    title: "Identify Your Babylon and Heed the Call to Leave",
    color: PURPLE,
    body: "&quot;Leave Babylon, flee from the Babylonians!&quot; (v.20). Babylon in Scripture is not merely a historical city but a symbol: human civilization organized around self-sufficiency, the accumulation of power, and the rejection of God&apos;s reign. Every generation faces its own Babylon &mdash; systems, cultures, and habits that hold us captive and tell us they can provide what only God can give. For some, Babylon is a career culture of endless ambition and achievement. For others, it is a media environment that shapes desires and values at odds with the kingdom of God. For others, it is a relationship pattern, a financial habit, or an addiction. The call is urgent: leave. Not gradually, but with the shout of joy that belongs to liberation. Trust that the God who provided water in the desert will provide what you need outside Babylon.",
  },
  {
    title: "Trust That God Teaches You What Is Best",
    color: ACCENT,
    body: "The most remarkable self-description in Isaiah 48 is found in verse 17: &quot;I am the LORD your God, who teaches you what is best for you, who directs you in the way you should go.&quot; The one who laid the foundations of the earth and spread out the heavens is also your teacher &mdash; and his curriculum is not abstract theology but the concrete way you should go. This is extraordinary pastoral care from a cosmic God. He is not indifferent to the details of your life; he is actively engaged in directing your path. The challenge is receiving his teaching rather than substituting your own judgment. Isaiah 48 shows that Israel&apos;s stubbornness (iron neck, bronze forehead) was precisely the refusal to receive God&apos;s direction. Trust that the one who knows the end from the beginning also knows what is best for the middle of your story.",
  },
];

export default function Isaiah48GuidePage() {
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
          background: "linear-gradient(180deg, rgba(13,148,136,0.10) 0%, rgba(7,7,15,0) 100%)",
          borderBottom: `1px solid ${BORDER}`,
          padding: "48px 20px 40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: `${TEAL}18`,
            border: `1px solid ${TEAL}40`,
            borderRadius: 20,
            padding: "4px 16px",
            fontSize: 12,
            fontWeight: 700,
            color: TEAL,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Isaiah 48 - Bible Study Guide
        </div>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: 16,
            maxWidth: 780,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          God Who Teaches You{" "}
          <span
            style={{
              background: `linear-gradient(135deg, ${TEAL}, ${PURPLE})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What Is Best
          </span>
        </h1>
        <p
          style={{
            color: MUTED,
            fontSize: 17,
            maxWidth: 660,
            margin: "0 auto 24px",
            lineHeight: 1.7,
          }}
        >
          Isaiah 48 - 22 verses - God addresses Israel&apos;s stubbornness while declaring his
          unbreakable commitment to refine, redeem, and teach his people the way they should go.
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
            { label: "22 Verses", color: TEAL },
            { label: "Old Testament", color: PURPLE },
            { label: "Refining", color: GOLD },
            { label: "Peace", color: GREEN },
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
              borderBottom: activeTab === tab ? `2px solid ${TEAL}` : "2px solid transparent",
              color: activeTab === tab ? TEAL : MUTED,
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
                  color: TEAL,
                  fontWeight: 800,
                  fontSize: 22,
                  marginBottom: 16,
                  marginTop: 0,
                }}
              >
                Overview of Isaiah 48
              </h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16, marginTop: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 48 is a complex, searching chapter in which God addresses Israel&apos;s profound spiritual stubbornness while simultaneously declaring his stubborn commitment to redeem them. The people invoke God&apos;s name but not in truth; they are hard as iron and bronze-browed. God announced former things in advance precisely so Israel could not credit them to idols. Now he announces new things &mdash; hidden, yet to be declared.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 0, marginTop: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter reaches its emotional peak in verse 17: &quot;I am the LORD your God, who teaches you what is best for you, who directs you in the way you should go. If only you had paid attention to my commands, your peace would have been like a river, your well-being like the waves of the sea.&quot; The chapter ends with a call to leave Babylon and a proclamation that there is no peace for the wicked. Isaiah 48 closes the first major section of the &quot;Book of Comfort&quot; (Isaiah 40-55) before the servant songs of Isaiah 49-55 move toward the climactic suffering servant of Isaiah 53.",
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
                  title: "The Pattern of Stubbornness",
                  color: ROSE,
                  text: "The Hebrew word for &quot;stubborn&quot; in this chapter evokes iron and bronze &mdash; metals so hard they resist reshaping. This is not occasional moral failure but structural resistance: a chronic pattern of hearing God&apos;s word, understanding it, and refusing to respond. God identifies this not in surprise but in foreknowledge: &quot;I knew how stubborn you were.&quot;",
                },
                {
                  title: "Literary Structure",
                  color: PURPLE,
                  text: "Isaiah 48 divides into four movements: the hollow profession exposed (vv.1-2), prophecy given in advance to prevent false attribution (vv.3-11), the cosmic God summons Cyrus (vv.12-16), and the great lament and call to leave (vv.17-22). The chapter moves from accusation to lament to invitation.",
                },
                {
                  title: "God as Teacher",
                  color: TEAL,
                  text: "Verse 17 contains one of the most remarkable self-descriptions in Scripture: God calls himself the one &quot;who teaches you what is best for you, who directs you in the way you should go.&quot; The one who made the universe stoops to teach his creature the specific path. This is not abstract wisdom but personal direction.",
                },
                {
                  title: "No Peace for the Wicked",
                  color: GOLD,
                  text: "The chapter&apos;s closing line &mdash; &quot;there is no peace for the wicked&quot; &mdash; appears also in Isaiah 57:21. It is not a threat but a structural observation: peace is only available through the God who offers it, and those who refuse God refuse the only source of peace. Babylon promises peace but cannot deliver it.",
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
                background: `${TEAL}10`,
                border: `1px solid ${TEAL}35`,
                borderRadius: 14,
                padding: 28,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: TEAL,
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Key Verse - Isaiah 48:17
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
                    "&quot;I am the LORD your God, who teaches you what is best for you, who directs you in the way you should go.&quot;",
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
                Key Themes in Isaiah 48
              </h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginTop: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Five interlocking themes weave through Isaiah 48, addressing both the depth of Israel&apos;s failure and the height of God&apos;s commitment to his people.",
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

            {/* Peace like a river pull-quote */}
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
                  marginBottom: 16,
                  marginTop: 0,
                }}
              >
                The &quot;If Only&quot; - Isaiah&apos;s Great Lament
              </h3>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16, marginTop: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 48:18 contains one of Scripture&apos;s most emotionally powerful conditional statements: &quot;If only you had paid attention to my commands, your peace would have been like a river, your well-being like the waves of the sea.&quot; This is not a threat or a rebuke &mdash; it is a lament. God is grieving what could have been and was not.",
                }}
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    background: `${ROSE}08`,
                    border: `1px solid ${ROSE}25`,
                    borderRadius: 10,
                    padding: 16,
                  }}
                >
                  <div
                    style={{
                      color: ROSE,
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: "0.08em",
                      marginBottom: 10,
                    }}
                  >
                    WHAT WAS FORFEITED
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
                    <li>Peace like a river</li>
                    <li>Well-being like ocean waves</li>
                    <li>Descendants like the sand</li>
                    <li>A name that endures</li>
                    <li>Continuity before God</li>
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
                    STILL OFFERED
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
                    <li>Redemption from Babylon</li>
                    <li>God as personal teacher</li>
                    <li>Direction for the path ahead</li>
                    <li>Water in the desert</li>
                    <li>Joy in departure from exile</li>
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
                Verse by Verse - Isaiah 48
              </h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginTop: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "A close reading of all 22 verses, grouped by the chapter&apos;s natural movements. Click each section to expand the commentary.",
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
                          Isaiah 48 {section.ref}
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
                  { ref: "vv. 1-2", label: "Hollow religious profession - name without truth or righteousness", color: ROSE },
                  { ref: "vv. 3-6", label: "Prophecy given in advance so idols cannot get the credit", color: GOLD },
                  { ref: "vv. 7-9", label: "New things declared; God holds back wrath for his name&apos;s sake", color: TEAL },
                  { ref: "vv. 10-11", label: "Refined in the furnace of affliction - for God&apos;s own sake", color: GREEN },
                  { ref: "vv. 12-13", label: "I am the first and the last; my hand laid the foundations", color: PURPLE },
                  { ref: "vv. 14-16", label: "Cyrus summoned; God has not spoken in secret", color: GOLD },
                  { ref: "vv. 17-19", label: "God teaches what is best - if only you had listened", color: GREEN },
                  { ref: "vv. 20-22", label: "Leave Babylon with joy; no peace for the wicked", color: ROSE },
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
                    <span
                      style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: row.label }}
                    />
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
                Applying Isaiah 48
              </h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginTop: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 48 speaks to every generation with stubborn hearts. These six application areas bring the chapter&apos;s searching questions into the present.",
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
                background: `${TEAL}10`,
                border: `1px solid ${TEAL}35`,
                borderRadius: 14,
                padding: 28,
                marginTop: 28,
              }}
            >
              <h3
                style={{
                  color: TEAL,
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
                    q: "In what ways does your religious life consist of vocabulary without reality &mdash; using God&apos;s name in ways that do not correspond to genuine reliance on him?",
                    color: ROSE,
                  },
                  {
                    q: "Which fulfilled prophecy of Scripture has had the greatest impact on your confidence in the Bible? Which do you find most compelling to study further?",
                    color: GOLD,
                  },
                  {
                    q: "What season of suffering in your own life can you now identify as God&apos;s refining rather than his rejection? What was being burned away?",
                    color: TEAL,
                  },
                  {
                    q: "What specific area of disobedience is blocking the flow of peace in your life right now? What would it look like to open that channel?",
                    color: GREEN,
                  },
                  {
                    q: "What is your &quot;Babylon&quot; &mdash; the system, habit, or culture that holds you captive and promises what only God can give? What would leaving look like concretely?",
                    color: PURPLE,
                  },
                  {
                    q: "God says &quot;I teach you what is best for you.&quot; In what area of your life are you currently substituting your own judgment for God&apos;s direction?",
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
                Isaiah 48:18
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
                    "&quot;If only you had paid attention to my commands, your peace would have been like a river, your well-being like the waves of the sea.&quot;",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
