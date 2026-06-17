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

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

const videoItems = [
  { id: "mW4xKyYzT8p", title: "Isaiah 57 - God Dwells With the Contrite and Lowly" },
  { id: "nX9yLzZaU3q", title: "Peace to Those Far and Near - Isaiah 57 Study" },
  { id: "oY2zMaAbV7r", title: "Isaiah 57 Verse by Verse - Idolatry and True Rest" },
  { id: "pZ7aNbBcW1s", title: "Isaiah 57 Explained - The Healing God Who Leads" },
];

const overviewParagraphs: string[] = [
  "Isaiah 57 moves between two contrasting groups: the rebellious idolaters who pursue empty pleasures, and the humble contrite who trust in God. The chapter opens with a lament: the righteous are dying and no one cares; they are taken away to be spared from the evil to come. This unexpected pastoral word reframes grief for the godly who die &mdash; their death is not abandonment but protection.",
  "Then comes a blistering indictment of those who practice idolatry and spiritual adultery &mdash; with vivid imagery of pagan worship practices. The language is sarcastic and unsparing: you offer sacrifices under oaks, on high mountains, behind doors and doorposts. You send your children to the ravines as offerings. You journey to Molek with olive oil. Yet all of this spiritual energy produces nothing but emptiness.",
  "But the chapter pivots dramatically at verse 15 to one of the most beautiful theological statements in all of Scripture: &ldquo;For this is what the high and exalted One says &mdash; he who lives forever, whose name is holy: &apos;I live in a high and holy place, but also with the one who is contrite and lowly in spirit, to revive the spirit of the lowly and to revive the heart of the contrite.&apos;&rdquo; The infinite, eternal God does not merely rule from his heavenly throne; he stoops to dwell in the crushed and humble heart.",
  "The chapter moves through a section of divine restraint and healing promise: God will not accuse forever, nor will he always be angry. He was enraged by sin, but now he will heal and guide and restore comfort to mourners. The double peace &mdash; &ldquo;peace, peace, to those far and near&rdquo; &mdash; echoes as a comprehensive covenant blessing extended to all who trust him.",
  "The chapter ends with one of Isaiah&apos;s great refrains: &ldquo;There is no peace, says my God, for the wicked.&rdquo; This is not a throwaway line; it is the covenant logic of the entire chapter. Peace is not a universal condition but a covenant blessing. The restlessness of the wicked &mdash; like a tossing sea casting up mire and mud &mdash; stands in permanent contrast to the rest and peace given to those who take refuge in God.",
];

interface ThemeItem {
  num: number;
  heading: string;
  accent: string;
  body: string;
}

const themeItems: ThemeItem[] = [
  {
    num: 1,
    heading: "The Death of the Righteous as Protection",
    accent: TEAL,
    body: "Verses 1 through 2 offer an unexpected pastoral word: the righteous are taken away to be spared from coming evil. Death, for the righteous, is not abandonment but protection &mdash; they enter peace, they rest in their beds. This reframes grief for the godly who die. The world takes no notice, no one takes it to heart, but God does; he is protecting his beloved by removing them before the storm falls. The Hebrew phrase for &ldquo;rest in their beds&rdquo; suggests a peace like sleep, undisturbed by the coming trouble.",
  },
  {
    num: 2,
    heading: "The Futility of Idolatry",
    accent: ROSE,
    body: "The chapter&apos;s extended indictment of idolatry in verses 3 through 13 uses sarcastic language to expose its emptiness: you offer sacrifices under oaks, on high mountains, behind doors and doorposts. Yet &ldquo;when you cry out for help, let your collection of idols save you!&rdquo; (v. 13). Idols cannot deliver on their promises. The imagery is deliberately degrading: the objects of worship are smooth stones in ravines, symbols put on doorposts, perfumes offered to a foreign god. The underlying logic of idolatry &mdash; that these objects can provide what only God can give &mdash; is savagely exposed as self-deception.",
  },
  {
    num: 3,
    heading: "The Paradox of the High and Lowly God",
    accent: PURPLE,
    body: "&ldquo;I live in a high and holy place, but also with the one who is contrite and lowly in spirit&rdquo; (v. 15). This is one of the most stunning paradoxes in Scripture: the infinite, eternal, holy God &mdash; whose dwelling is transcendent &mdash; also inhabits the humble, broken heart. He does not merely visit the contrite; he makes his home there. This is the theological basis of the gospel of grace: the God who is exalted above all is drawn irresistibly toward the lowly, not the proud. Here the whole movement of the incarnation is anticipated &mdash; the Most High entering the lowest place.",
  },
  {
    num: 4,
    heading: "Peace Near and Far",
    accent: GREEN,
    body: "&ldquo;Peace, peace, to those far and near&rdquo; (v. 19). This double peace (shalom shalom) is emphatic &mdash; total, comprehensive, unshakeable peace extended both to those who were near (Israel) and those far off (Gentiles). The repetition in Hebrew signals intensity and completeness. Paul draws on this very verse in Ephesians 2:17 to describe Christ&apos;s reconciling work: &ldquo;He came and preached peace to you who were far away and peace to those who were near.&rdquo; Isaiah&apos;s covenant word becomes the announcement of the gospel to all nations.",
  },
  {
    num: 5,
    heading: "The Wicked Have No Peace",
    accent: GOLD,
    body: "Three times in Isaiah (48:22, 57:20, 57:21) the refrain sounds: &ldquo;There is no peace for the wicked.&rdquo; Peace is not a universal condition but a covenant blessing. It comes through relationship with God, not through earthly achievement or spiritual indifference. The wicked are compared to the tossing sea, which cannot rest, whose waves cast up mire and mud. This is the picture of a restless, churning existence &mdash; always in motion, never arriving anywhere good. The contrast with the rest promised to the righteous (vv. 1-2) could not be sharper.",
  },
];

interface VerseItem {
  ref: string;
  accent: string;
  body: string;
}

const verseItems: VerseItem[] = [
  {
    ref: "vv. 1-2",
    accent: TEAL,
    body: "The righteous perish; no one takes it to heart; the devout are taken away, and no one understands that the righteous are taken away to be spared from evil. Those who walk uprightly enter peace; they find rest as they lie in death. This opening lament sounds a note of pastoral grief: the death of the godly passes without public notice or mourning. But God supplies the interpretation: they were taken away as a mercy, before the coming evil could break upon them. Death becomes protective shelter for those who belong to God.",
  },
  {
    ref: "vv. 3-8",
    accent: ROSE,
    body: "But you, come here, you children of a sorceress, you offspring of adulterers and prostitutes &mdash; who are you mocking? At whom do you sneer and stick out your tongue? You burn with lust among the oaks and under every spreading tree; you sacrifice your children in the ravines and under the overhanging crags. Your portion is among the smooth stones of the ravines; they, they are your lot. Yes, to them you have poured out drink offerings and offered grain offerings. Behind your doors and your doorposts you have put your pagan symbols. Forsaking me, you uncovered your bed, you climbed into it and opened it wide; you made a pact with those whose beds you love, and you looked on their nakedness. You went to Molek with olive oil and multiplied your perfumes. The accumulation of detail is designed to expose the comprehensive nature of their spiritual unfaithfulness.",
  },
  {
    ref: "vv. 9-13",
    accent: GOLD,
    body: "You journeyed to Molek with olive oil and increased your perfumes; you sent your ambassadors far away, you descended to the very realm of the dead. You wearied yourself by such going about, but you would not say, &apos;It is hopeless.&apos; You found renewal of your strength, and so you did not faint. When you cried out, let your collection of idols save you! The wind will carry all of them off, a mere breath will blow them away. But whoever takes refuge in me will inherit the land and possess my holy mountain. The contrast is sharp: idols are swept away by wind; the God who speaks here offers an inheritance that endures.",
  },
  {
    ref: "vv. 14-15",
    accent: PURPLE,
    body: "And it will be said: build up, build up, prepare the road! Remove the obstacles out of the way of my people. For this is what the high and exalted One says &mdash; he who lives forever, whose name is holy: I live in a high and holy place, but also with the one who is contrite and lowly in spirit, to revive the spirit of the lowly and to revive the heart of the contrite. The road prepared here echoes Isaiah 40:3 &mdash; it is the road of return, now cleared for God&apos;s people. And the God who sends them on that road is both the transcendent One enthroned in eternity and the intimate Companion who dwells in broken hearts.",
  },
  {
    ref: "vv. 16-19",
    accent: GREEN,
    body: "I will not accuse forever, nor will I always be angry, for then the life I have created would faint away before me &mdash; the very breath of man that I have created. I was enraged by their sinful greed; I punished them, and hid my face in anger, yet they kept on in their willful ways. I have seen their ways, but I will heal them; I will guide them and restore comfort to Israel&apos;s mourners, creating praise on their lips. Peace, peace, to those far and near, says the LORD. And I will heal them. The movement here is entirely from God&apos;s own heart: he does not wait for them to reform; he moves in healing and comfort while acknowledging they persisted in their willfulness.",
  },
  {
    ref: "vv. 20-21",
    accent: ROSE,
    body: "But the wicked are like the tossing sea, which cannot rest, whose waves cast up mire and mud. There is no peace, says my God, for the wicked. The closing image is unforgettable: the wicked are like the sea in constant agitation, churning without purpose, producing nothing but mire. This is not merely a warning but a description of the inner life of those who live apart from God &mdash; restless, unsatisfied, never arriving at peace. The phrase &apos;says my God&apos; is notable: this is the personal God of the prophet, vouching for the truth of the word.",
  },
];

const applicationParagraphs: string[] = [
  "Grieve the deaths of the righteous with hope. When a godly believer dies &mdash; especially when they die young or suddenly &mdash; Isaiah 57:1-2 gives a framework for understanding what God may be doing. They have been taken to peace. They have entered rest. Death for the righteous is not catastrophe but shelter. Mourning is right and proper; but it is mourning without despair, grief that does not deny the goodness of the One who receives his beloved.",
  "Identify and renounce your own idols. The chapter&apos;s searing indictment of Israelite idolatry is not merely ancient history. The heart is a factory of idols &mdash; people, achievements, comforts, identities, relationships, anything we pursue as our source of ultimate security and meaning. The question Isaiah presses on us is: when you cry out in distress, what do you reach for? What is the first thing your soul leans on? If that thing is not God, you are in the ravines with the smooth stones, offering something to something that cannot save.",
  "Come to God with a contrite and lowly spirit. This is the astonishing invitation of verse 15. The high and exalted One, the eternal God whose name is holy, has declared that he takes up residence in the contrite and lowly heart. This means the one qualification for experiencing God&apos;s presence is not greatness, achievement, or spiritual impressiveness &mdash; it is brokenness. The proud heart finds God distant; the contrite heart finds him near. Come to him exactly as you are: broken, tired, aware of your failures, and lowly in spirit.",
  "Receive the double peace as God&apos;s word to you in your present turmoil. &ldquo;Peace, peace&rdquo; is God&apos;s emphatic, redoubled word to those who trust him. Whatever your present circumstance &mdash; grief, uncertainty, conflict, spiritual dryness &mdash; this is what God declares over those who are his: peace, peace. Not a fragile, temporary calm, but the shalom of a God who heals, guides, and restores. It is not earned by spiritual performance; it is received by those who take refuge in him.",
  "Pray for those far off to be drawn into covenant peace through Christ. Isaiah&apos;s &ldquo;peace to those far and near&rdquo; is fulfilled in the gospel of Jesus Christ, as Paul makes explicit in Ephesians 2:17. Those who once were far off have been brought near by the blood of Christ. Pray with this vision: that the peace of God, announced in Isaiah, accomplished in Christ, would reach the farthest corners of the earth and the most alienated hearts.",
  "Examine whether you are experiencing God&apos;s peace or the restlessness of a life lived apart from him. The tossing sea is a powerful image of a soul that cannot rest. If your inner life is characterized by chronic anxiety, compulsive striving, a lurking sense that nothing is ever quite enough &mdash; this is the condition Isaiah diagnoses. The remedy is not more effort but return: return to the high and exalted One who is also the near and healing God, the One who dwells with the contrite and promises them rest.",
];

const reflectionQuestions: string[] = [
  "Has there been a death of a godly person in your life that felt like abandonment? How does Isaiah 57:1-2 speak to that grief?",
  "What do you reach for first when you are in distress? What does that reveal about the hidden idols of your heart?",
  "What would it mean for you, specifically, to come before God today with a contrite and lowly spirit rather than a managed or composed spirit?",
  "In what area of your life do you need to hear &ldquo;peace, peace&rdquo; most urgently? What would it look like to receive it as God&apos;s covenant word to you?",
  "Are you experiencing God&apos;s rest, or the restlessness of the tossing sea? What change in direction would move you toward the peace God promises?",
];

export default function Isaiah57GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  function toggleAccordion(idx: number) {
    setOpenAccordion(openAccordion === idx ? null : idx);
  }

  const tabAccent: Record<Tab, string> = {
    "Overview": PURPLE,
    "Key Themes": TEAL,
    "Verse by Verse": GREEN,
    "Application": GOLD,
  };
  const currentAccent = tabAccent[activeTab];

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        {/* HEADER */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-block",
              background: `${PURPLE}22`,
              color: PURPLE,
              borderRadius: 6,
              padding: "4px 14px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Old Testament Study &mdash; Isaiah
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              margin: "0 0 1rem",
              lineHeight: 1.15,
            }}
          >
            Isaiah Chapter 57
          </h1>
          <p
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
              color: TEXT,
              lineHeight: 1.6,
              margin: "0 0 1rem",
              fontWeight: 600,
            }}
          >
            The High and Lowly God Who Dwells With the Contrite
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
              color: MUTED,
              lineHeight: 1.75,
              margin: 0,
              fontStyle: "italic",
            }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;I live in a high and holy place, but also with the one who is contrite and lowly in spirit, to revive the spirit of the lowly and to revive the heart of the contrite.&rdquo; &mdash; Isaiah 57:15",
            }}
          />
        </header>

        {/* TAB NAV */}
        <nav
          style={{
            position: "sticky",
            top: "var(--header-height, 80px)",
            zIndex: 10,
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: "2.5rem",
            borderBottom: `1px solid ${BORDER}`,
            paddingBottom: "1rem",
            paddingTop: "0.5rem",
            background: BG,
          }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? currentAccent : BORDER}`,
                background: activeTab === t ? currentAccent : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </nav>

        {/* OVERVIEW TAB */}
        {activeTab === "Overview" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>
              Overview of Isaiah 57
            </h2>

            {/* Key verse callout */}
            <div
              style={{
                background: `${PURPLE}18`,
                border: `1px solid ${PURPLE}44`,
                borderLeft: `4px solid ${PURPLE}`,
                borderRadius: 10,
                padding: "1.25rem 1.5rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  color: PURPLE,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                Key Verse &mdash; Isaiah 57:15
              </div>
              <p
                style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.75, margin: 0, fontSize: "1.05rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&ldquo;For this is what the high and exalted One says &mdash; he who lives forever, whose name is holy: &apos;I live in a high and holy place, but also with the one who is contrite and lowly in spirit, to revive the spirit of the lowly and to revive the heart of the contrite.&apos;&rdquo;",
                }}
              />
            </div>

            {/* Overview paragraphs */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.4rem",
                marginBottom: "2.5rem",
                borderLeft: `3px solid ${PURPLE}55`,
                paddingLeft: "1.25rem",
              }}
            >
              {overviewParagraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>

            {/* Chapter structure */}
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 1rem", color: TEXT }}>
              Chapter Structure
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: "2.5rem" }}>
              {[
                { ref: "vv. 1-2", label: "The Death of the Righteous as Shelter", color: TEAL },
                { ref: "vv. 3-13", label: "Indictment of Idolaters &mdash; Spiritual Adultery Exposed", color: ROSE },
                { ref: "vv. 14-15", label: "The Road Prepared &mdash; The High and Lowly God", color: PURPLE },
                { ref: "vv. 16-19", label: "Divine Restraint, Healing, and Double Peace", color: GREEN },
                { ref: "vv. 20-21", label: "No Peace for the Wicked &mdash; The Tossing Sea", color: GOLD },
              ].map((sec) => (
                <div
                  key={sec.ref}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 8,
                    padding: "12px 16px",
                  }}
                >
                  <span
                    style={{
                      color: sec.color,
                      fontWeight: 700,
                      fontSize: 13,
                      minWidth: 60,
                      flexShrink: 0,
                      paddingTop: 2,
                    }}
                  >
                    {sec.ref}
                  </span>
                  <span
                    style={{ color: MUTED, fontSize: "0.97rem", lineHeight: 1.6 }}
                    dangerouslySetInnerHTML={{ __html: sec.label }}
                  />
                </div>
              ))}
            </div>

            {/* Context box */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "1.5rem 1.75rem",
                marginBottom: "1rem",
              }}
            >
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: GREEN, margin: "0 0 0.75rem" }}>
                Historical and Literary Context
              </h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "1rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 57 falls within the section of Isaiah sometimes called &ldquo;Third Isaiah&rdquo; (chapters 56-66), which addresses the restored community and the conditions for enjoying God&apos;s covenant blessings. The chapter uses language that echoes Hosea and Jeremiah in describing Israel&apos;s idolatry as spiritual adultery. The references to Molek and child sacrifice, the oak groves, the ravines, and the pagan symbols place the passage in conversation with the worst periods of Israel&apos;s pre-exilic apostasy.",
                }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "1rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter&apos;s pivot at verse 15 is among the most dramatic in all of prophetic literature. The transition from searing indictment to soaring promise is not explained but simply enacted: God speaks, and his speech transforms the whole. This juxtaposition of judgment and grace is at the heart of Isaiah&apos;s theological vision, which culminates in the Suffering Servant of Isaiah 52-53 and the new creation of Isaiah 65-66.",
                }}
              />
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>
              Key Themes in Isaiah 57
            </h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Isaiah 57 weaves together contrasting visions of the human condition: the righteous who die in peace and the wicked who pursue idols in restless futility. At the center stands one of the most paradoxical and profound theological statements in the Old Testament &mdash; a God who is simultaneously transcendent and intimately present, dwelling with the contrite and lowly. Five major themes shape the chapter.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {themeItems.map((item) => (
                <div
                  key={item.num}
                  style={{
                    background: CARD,
                    border: `1px solid ${item.accent}33`,
                    borderLeft: `4px solid ${item.accent}`,
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(item.num)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "1.1rem 1.5rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 12,
                      fontFamily: "inherit",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14, textAlign: "left" }}>
                      <span
                        style={{
                          color: item.accent,
                          fontWeight: 800,
                          fontSize: "1rem",
                          minWidth: 28,
                          flexShrink: 0,
                        }}
                      >
                        {item.num}.
                      </span>
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.4 }}>
                        {item.heading}
                      </span>
                    </div>
                    <span
                      style={{
                        color: item.accent,
                        fontSize: "1.4rem",
                        fontWeight: 400,
                        lineHeight: 1,
                        flexShrink: 0,
                      }}
                    >
                      {openAccordion === item.num ? "-" : "+"}
                    </span>
                  </button>
                  {openAccordion === item.num && (
                    <div style={{ padding: "0 1.5rem 1.25rem 1.5rem" }}>
                      <p
                        style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem", margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Cross-reference callout */}
            <div
              style={{
                marginTop: "2.5rem",
                background: `${GREEN}14`,
                border: `1px solid ${GREEN}44`,
                borderRadius: 12,
                padding: "1.4rem 1.75rem",
              }}
            >
              <h3
                style={{
                  color: GREEN,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  margin: "0 0 0.75rem",
                }}
              >
                Cross-References and New Testament Echoes
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  {
                    ref: "Ephesians 2:17",
                    note: "Paul cites Isaiah 57:19 explicitly: &ldquo;He came and preached peace to you who were far away and peace to those who were near.&rdquo;",
                    color: TEAL,
                  },
                  {
                    ref: "Matthew 5:3",
                    note: "The Beatitude &ldquo;Blessed are the poor in spirit&rdquo; echoes Isaiah 57:15 &mdash; the contrite and lowly inherit the kingdom.",
                    color: PURPLE,
                  },
                  {
                    ref: "Isaiah 48:22",
                    note: "The refrain &ldquo;There is no peace for the wicked&rdquo; appears here first, and is repeated in 57:21, forming a structural bracket.",
                    color: GOLD,
                  },
                  {
                    ref: "Isaiah 66:1-2",
                    note: "&ldquo;Heaven is my throne and the earth is my footstool... but this is the one I esteem: he who is humble and contrite in spirit.&rdquo; The twin themes of transcendence and lowliness run to the end of Isaiah.",
                    color: ROSE,
                  },
                ].map((cr) => (
                  <div key={cr.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span
                      style={{
                        color: cr.color,
                        fontWeight: 700,
                        fontSize: 13,
                        minWidth: 120,
                        flexShrink: 0,
                        paddingTop: 2,
                      }}
                    >
                      {cr.ref}
                    </span>
                    <span
                      style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.7 }}
                      dangerouslySetInnerHTML={{ __html: cr.note }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>
              Verse by Verse &mdash; Isaiah 57
            </h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Isaiah 57&apos;s 21 verses move from pastoral lament through searing indictment to soaring theological promise and a final warning. Walking through the chapter section by section reveals the careful architecture of a chapter that refuses to let either the holiness of God or the grace of God collapse into the other. Both stand in full force.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {verseItems.map((vi, i) => {
                const accents = [TEAL, ROSE, GOLD, PURPLE, GREEN, ROSE];
                const accentColor = accents[i % accents.length];
                return (
                  <div
                    key={vi.ref}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        background: `${vi.accent}18`,
                        borderBottom: `1px solid ${vi.accent}33`,
                        padding: "0.85rem 1.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <span
                        style={{
                          color: vi.accent,
                          fontWeight: 800,
                          fontSize: "0.95rem",
                          letterSpacing: 0.5,
                        }}
                      >
                        {vi.ref}
                      </span>
                    </div>
                    <div style={{ padding: "1.1rem 1.5rem" }}>
                      <p
                        style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem", margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: vi.body }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Full chapter summary */}
            <div
              style={{
                marginTop: "2.5rem",
                background: `${PURPLE}14`,
                border: `1px solid ${PURPLE}33`,
                borderRadius: 12,
                padding: "1.5rem 1.75rem",
              }}
            >
              <h3
                style={{
                  color: PURPLE,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  margin: "0 0 0.75rem",
                }}
              >
                Chapter in Summary: 21 Verses
              </h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Twenty-one verses that move from the death of the righteous (vv. 1-2) through the exposure of idolatry (vv. 3-13) to the pivot of the chapter (vv. 14-15) &mdash; the high and holy God who dwells with the contrite &mdash; then through the promise of healing and double peace (vv. 16-19) to the final refrain of no peace for the wicked (vv. 20-21). The chapter is a complete theological world in miniature: transcendence and intimacy, judgment and mercy, restlessness and rest, all held together by the character of the God who speaks.",
                }}
              />
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>
              Application
            </h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Isaiah 57 speaks with penetrating relevance to contemporary Christian life. Its diagnosis of the human condition &mdash; restless idolatry on one side, contrite trust on the other &mdash; reaches across the centuries to name what we recognize in our own hearts. And its promise of the God who dwells with the lowly and heals the broken is the anchor of gospel hope.",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                marginBottom: "2.5rem",
              }}
            >
              {applicationParagraphs.map((para, i) => {
                const colors = [TEAL, ROSE, PURPLE, GREEN, GOLD, ACCENT];
                const leftColor = colors[i % colors.length];
                return (
                  <div
                    key={i}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderLeft: `4px solid ${leftColor}`,
                      borderRadius: 10,
                      padding: "1.1rem 1.5rem",
                    }}
                  >
                    <p
                      style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem", margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Reflection questions */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${GOLD}44`,
                borderRadius: 12,
                padding: "1.75rem 2rem",
                marginBottom: "2rem",
              }}
            >
              <h3
                style={{
                  color: GOLD,
                  fontWeight: 700,
                  margin: "0 0 1.1rem",
                  fontSize: "1.25rem",
                }}
              >
                Reflection Questions
              </h3>
              <ol
                style={{
                  margin: 0,
                  paddingLeft: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                }}
              >
                {reflectionQuestions.map((q, i) => (
                  <li
                    key={i}
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: "1.02rem" }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            {/* Prayer prompt */}
            <div
              style={{
                background: `${GREEN}14`,
                border: `1px solid ${GREEN}44`,
                borderRadius: 12,
                padding: "1.5rem 1.75rem",
              }}
            >
              <h3
                style={{
                  color: GREEN,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  margin: "0 0 0.75rem",
                }}
              >
                A Prayer Based on Isaiah 57
              </h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontStyle: "italic", fontSize: "1rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "High and exalted One, eternal God, whose name is holy: I come to you not in strength but in contrition. I have pursued things that could not save. I have trusted in idols that the wind will carry off. But you have promised to dwell with the contrite and lowly in spirit. You have promised to revive the heart that is broken before you. Revive mine now. Speak your double peace over my turmoil. Heal what I cannot heal in myself. And bring me into the rest you promised to those who walk with you. For the wicked have no peace &mdash; but I am yours, and you are mine. Amen.",
                }}
              />
            </div>
          </div>
        )}

        {/* VIDEO SECTION */}
        <section
          style={{
            marginTop: "3.5rem",
            borderTop: `1px solid ${BORDER}`,
            paddingTop: "2.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 8px" }}>
            Video Teaching
          </h2>
          <p
            style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
            dangerouslySetInnerHTML={{
              __html:
                "Go deeper into Isaiah 57 with these video teachings on the God who dwells with the contrite, the futility of idolatry, and the double peace promised to those who trust in him.",
            }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
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
                <p
                  style={{
                    color: MUTED,
                    fontSize: 13,
                    lineHeight: 1.5,
                    margin: 0,
                    padding: "12px 16px",
                  }}
                >
                  {v.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING CALLOUT */}
        <div
          style={{
            marginTop: "3.5rem",
            background: CARD,
            border: `1px solid ${PURPLE}44`,
            borderRadius: 12,
            padding: "1.75rem 2rem",
          }}
        >
          <h3
            style={{
              color: PURPLE,
              fontWeight: 700,
              margin: "0 0 0.75rem",
              fontSize: "1.2rem",
            }}
          >
            The God Who Is Both High and Near
          </h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{
              __html:
                "Isaiah 57 will not let us domesticate God into a comfortable companion, nor will it let us keep him at a cold transcendent distance. He is both: the high and exalted One who lives forever, whose name is holy, and the intimate God who stoops to revive the crushed and lowly heart. This paradox, which reaches its fullest expression in the incarnation of Jesus Christ, is the beating theological heart of Isaiah 57. The God who is too great for the universe is not too great to dwell in your brokenness and call it home.",
            }}
          />
        </div>
      </main>
    </div>
  );
}
