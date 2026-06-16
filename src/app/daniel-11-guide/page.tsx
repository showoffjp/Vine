"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verses", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  {
    videoId: "Z5JC9vUz3Pk",
    title: "Daniel 11 - The Kings of the North and South",
  },
  {
    videoId: "Rb8qN4j2wXc",
    title: "Antiochus IV Epiphanes and the Abomination of Desolation",
  },
  {
    videoId: "tQ7lW0pK9bM",
    title: "The People Who Know Their God Shall Stand Firm",
  },
  {
    videoId: "M2sV6yH8dRq",
    title: "Prophecy and the Antichrist - Daniel 11 and the End",
  },
];

const THEMES = [
  {
    color: GOLD,
    title: "The Sovereignty of God Over the Rise and Fall of Kings",
    body:
      "Daniel 11 is the most detailed prophecy in the Old Testament, and its very specificity makes a single point overwhelming: the God of Israel rules the history of empires. Persia rises and falls, Greece blazes and is broken, the kingdoms of the north and south war for centuries, and a contemptible king exalts himself &mdash; yet every movement is foretold, and every tyrant comes to his end. The book of truth records what will happen before it happens, declaring that no emperor moves outside the will of the Most High. The kingdoms of men are loud and violent, but they are not in charge; the One who inscribed history in his book is.",
  },
  {
    color: TEAL,
    title: "The Long Conflict of North and South",
    body:
      "Most of the chapter narrates the protracted struggle between the king of the South, the Ptolemies of Egypt, and the king of the North, the Seleucids of Syria, the two dynasties that emerged from Alexander&rsquo;s divided empire. Their wars, alliances, and royal marriages are traced with a precision that historians can match to the events of the third and second centuries before Christ. The point is not merely accurate prediction but the futility of human empire: generation after generation the great powers scheme and fight, marry and betray, and nothing they build endures. Against this restless tumult the steadfast purpose of God stands in quiet contrast.",
  },
  {
    color: ROSE,
    title: "The Contemptible King and the Desecration of the Temple",
    body:
      "Into this history strides a contemptible person who seizes the kingdom by flatteries rather than honor. Historically this is Antiochus IV Epiphanes, who profaned the sanctuary, abolished the daily burnt offering, and set up the abomination that makes desolate. He turns his fury against the holy covenant and seduces with flattery those who violate it. The chapter exposes the pattern of every persecuting power that exalts itself against God and tramples his people and his worship. Yet even this blasphemer is on a leash, permitted to act only for a time, until the indignation is accomplished and his appointed end arrives.",
  },
  {
    color: GREEN,
    title: "The People Who Know Their God Shall Stand Firm",
    body:
      "At the darkest point of the prophecy comes its brightest promise: the people who know their God shall stand firm and take action. While the tyrant seduces the unfaithful, those who are wise among the people remain loyal even at the cost of their lives, and by their faithful witness they make many understand. Some of the wise stumble and fall, refined and purified by suffering, but their loss is not defeat. This is the great pastoral aim of the chapter, to brace the faithful for persecution with the assurance that knowing God produces a courage the world cannot crush, and that the suffering of the wise is not wasted but refining.",
  },
  {
    color: PURPLE,
    title: "From History to the End - The Antichrist Pattern",
    body:
      "Beginning around verse 36 the prophecy seems to stretch beyond the historical Antiochus into language too vast for any single ancient king. This king exalts himself above every god and speaks astonishing things against the God of gods, and he comes to his end at the time of the end with none to help him. Many interpreters see here a transition to an eschatological antichrist, the final embodiment of the self-exalting power that Antiochus foreshadowed. Paul&rsquo;s man of lawlessness in Second Thessalonians 2 and the beast of Revelation 13 follow the same pattern, so that Daniel 11 prepares God&rsquo;s people not only for one tyrant but for the whole line of them, down to the last.",
  },
];

const VERSES = [
  {
    ref: "Daniel 11:1-2",
    color: GOLD,
    title: "The Book of Truth and the Kings of Persia",
    body:
      "The angel continues the revelation begun in chapter 10, telling Daniel that he is making known what is inscribed in the book of truth. He announces that three more kings will arise in Persia, and a fourth who will be far richer than all of them, and by his wealth he will stir up everyone against the kingdom of Greece. This brief survey compresses the whole Persian period into a single sentence, fixing attention on the collision that is coming between Persia and Greece. The phrase the book of truth establishes the tone of the entire chapter: what follows is not speculation but the certain disclosure of what God has determined.",
  },
  {
    ref: "Daniel 11:3-4",
    color: TEAL,
    title: "The Mighty King of Greece and the Four Winds",
    body:
      "A mighty king shall arise who will rule with great dominion and do as he wills. This is Alexander the Great, whose conquests swept from Greece to the borders of India in little more than a decade. But at the height of his power his kingdom is broken and divided toward the four winds of heaven, given not to his own descendants but to others. After Alexander&rsquo;s sudden death his empire fractured among his generals, exactly as the vision foretold, leaving the field to the contending dynasties that the rest of the chapter will trace. The towering conqueror appears and vanishes in two verses, a sober comment on the brevity of human glory.",
  },
  {
    ref: "Daniel 11:5-9",
    color: PURPLE,
    title: "The First Wars and Alliances of North and South",
    body:
      "The narrative turns to the king of the South and the king of the North, the Ptolemies of Egypt and the Seleucids of Syria. At first the king of the South grows strong, but one of his princes becomes stronger still. Then an attempt is made to seal peace through marriage: the daughter of the king of the South is given to the king of the North, but the alliance collapses and she and her supporters are given up. A branch from her roots rises to avenge her, marching against the fortress of the king of the North and prevailing. The chapter has begun its long, intricate account of two dynasties locked in a struggle that no treaty or marriage can resolve.",
  },
  {
    ref: "Daniel 11:10-19",
    color: GOLD,
    title: "The Tide of Battle Turns Back and Forth",
    body:
      "The sons of the king of the North assemble a great multitude and sweep south like a flood, only for the king of the South to rouse himself and win a great victory, casting down tens of thousands. Yet pride does not bring lasting strength, and the king of the North returns with an even greater army and many resources. In these days many will rise against the king of the South, including violent men among Daniel&rsquo;s own people who fulfill the vision but fall. The king of the North takes a fortified city, and even a marriage alliance with the South fails to secure his aims. At last, after turning his attention to the coastlands, he stumbles and falls and is seen no more.",
  },
  {
    ref: "Daniel 11:20-24",
    color: ROSE,
    title: "The Rise of a Contemptible Person",
    body:
      "After a brief ruler who sends an exactor of tribute, there arises in his place a contemptible person to whom royal majesty had not been given, but who comes in quietly and obtains the kingdom by flatteries. This is Antiochus IV Epiphanes, who was not the rightful heir yet seized the throne through intrigue. Armies are swept away before him and broken, and even a prince of the covenant. He acts deceitfully, growing strong with a small people, and in time of security he comes into the richest parts of the province and does what neither his fathers nor his fathers&rsquo; fathers had done, scattering plunder and devising schemes against strongholds, but only for a time.",
  },
  {
    ref: "Daniel 11:25-28",
    color: TEAL,
    title: "The Campaign Against Egypt and Deceit at the Table",
    body:
      "The contemptible king stirs up his power and courage against the king of the South with a great army, and the king of the South wages war with an even greater force but cannot stand, for plots are devised against him by those who eat his food. Two kings sit at one table speaking lies to each other, but their schemes do not prosper, for the appointed end has not yet come. The king of the North returns to his land with great wealth, and his heart is set against the holy covenant. The verses anticipate the cruelty he will soon turn against Jerusalem, foreshadowing the desecration to come even as he enriches himself from his southern campaign.",
  },
  {
    ref: "Daniel 11:29-30",
    color: PURPLE,
    title: "The Ships of Kittim Turn Him Back",
    body:
      "At the appointed time the king of the North returns to come into the South, but this time it is not as before, for the ships of Kittim come against him. Kittim refers to Rome, whose intervention forced Antiochus to abandon his designs on Egypt and withdraw in humiliation. Enraged and frustrated, he turns his fury against the holy covenant on his way home, and he shows favor to those who forsake it. The verse marks the turning point of the chapter, for the king who cannot conquer Egypt vents his rage on the people of God, and the persecution that will define his reign is about to fall on Jerusalem and its temple.",
  },
  {
    ref: "Daniel 11:31-35",
    color: ROSE,
    title: "The Abomination and the Wise Who Stand Firm",
    body:
      "Forces from the king profane the temple and fortress, take away the regular burnt offering, and set up the abomination that makes desolate. With flattery he seduces those who violate the covenant, but the people who know their God shall stand firm and take action. The wise among the people make many understand, though for some days they fall by sword and flame, by captivity and plunder. When they stumble they receive a little help, and many join them with flattery, yet some of the wise stumble so that they may be refined, purified, and made white, until the time of the end. Here the chapter reaches its spiritual heart: faithful endurance amid desecration and persecution.",
  },
  {
    ref: "Daniel 11:36-39",
    color: GOLD,
    title: "The King Who Exalts Himself Above Every God",
    body:
      "The king does as he wills, exalts and magnifies himself above every god, and speaks astonishing things against the God of gods, prospering until the indignation is accomplished, for what is decreed shall be done. He pays no heed to the gods of his fathers or to any other god, but magnifies himself above all, honoring instead a god of fortresses with gold and silver and costly gifts. The language here swells beyond what fits the historical Antiochus alone, and many interpreters discern a shift toward an eschatological figure, the antichrist who sets himself in the place of God. Whether near or far, the portrait is of self-exalting blasphemy that God permits only until his purpose is complete.",
  },
  {
    ref: "Daniel 11:40-45",
    color: PURPLE,
    title: "The Time of the End and the King's Final Fall",
    body:
      "At the time of the end the king of the South attacks, and the king of the North rushes against him like a whirlwind with chariots, horsemen, and many ships, sweeping through countries and overflowing like a flood. He enters the glorious land, and many fall, though some are delivered. He stretches out his hand against the lands, plundering the treasures of Egypt, but reports from the east and the north alarm him, and he goes out with great fury to destroy many. He pitches his royal tents between the sea and the glorious holy mountain, yet he comes to his end with none to help him. The chapter closes with the certainty that even the most terrible power has an appointed end, and that no one will rescue the enemy of God.",
  },
];

const REFLECTION = [
  "Daniel 11 traces empires rising and falling exactly as God foretold. When the powers of my own day seem unstoppable, how does the truth that God rules the rise and fall of kings steady my heart?",
  "The contemptible king gained his kingdom by flatteries and seduced the unfaithful with smooth words. Where am I tempted to be won over by flattery rather than to stand on what is true?",
  "The chapter promises that the people who know their God shall stand firm and take action. What does it mean for me to truly know God, and how would that knowledge produce courage under pressure?",
  "Some of the wise stumbled so that they might be refined, purified, and made white. How can I receive seasons of suffering not as evidence of defeat but as God's refining of my faith?",
  "The wise are said to make many understand and to turn many to righteousness. Who has God placed around me that I might help to understand and lead toward him, even at some cost to myself?",
  "Every tyrant in the chapter comes to his appointed end with none to help him. How does the certain downfall of every power that exalts itself against God shape the way I pray and live under unjust authority?",
];

type DanTab = "overview" | "themes" | "verses" | "application";

export default function Daniel11GuidePage() {
  const [activeTab, setActiveTab] = useState<DanTab>("overview");
  const [loaded, setLoaded] = useState(false);
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
      <main id="main-content" style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 60px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "inline-block",
              background: `${GOLD}20`,
              border: `1px solid ${GOLD}40`,
              borderRadius: 20,
              padding: "4px 14px",
              fontSize: 12,
              color: GOLD,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginBottom: 12,
            }}
          >
            Book of Daniel - Chapter 11
          </div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>
            The Kings of the North and South
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>
            The most detailed prophecy in the Old Testament traces Persia, Greece, and the long wars
            of Egypt and Syria down to a contemptible king who desecrates the temple - and beyond
            him to the self-exalting power that comes to its end at the time of the end.
          </p>
          <p
            style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: "14px 0 0", maxWidth: 640 }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;The people who know their God shall stand firm and take action.&rdquo; &mdash; Daniel 11:32",
            }}
          />
        </div>

        {/* Sticky tab nav */}
        <div
          style={{
            position: "sticky",
            top: "var(--header-height, 80px)",
            zIndex: 10,
            background: BG,
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 32,
            padding: "10px 0",
          }}
        >
          {TABS.map((t) => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id as DanTab)}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? GOLD : BORDER}`,
                background: activeTab === t.id ? `${GOLD}20` : "transparent",
                color: activeTab === t.id ? GOLD : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[
                  ["Book", "Daniel"],
                  ["Chapter", "11"],
                  ["Setting", "Persian and Greek Era"],
                  ["Form", "Apocalyptic Prophecy"],
                  ["Key Theme", "God Over Kings"],
                  ["Key Verse", "Daniel 11:32"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>The Most Detailed Prophecy in Scripture</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Daniel 11 is the body of the final vision that began in chapter 10 and concludes in chapter 12. Where chapter 10 described the glorious messenger and the unseen warfare, and chapter 12 will reveal the resurrection, chapter 11 fills the center with a sweeping prophecy of the centuries between Daniel&rsquo;s day and the time of the end. It is the most detailed predictive passage in the entire Bible, naming no kings outright yet describing their reigns, wars, and intrigues with such precision that the history of the Persian and Greek periods can be read alongside it almost verse for verse.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "This very specificity has placed Daniel 11 at the center of a long scholarly debate. Because the chapter matches the events of the third and second centuries before Christ so closely, many critical scholars conclude that it must have been written after the fact, around the time of Antiochus IV Epiphanes in the second century. Conservative interpreters, by contrast, take the book at its word as genuine predictive prophecy given to Daniel in the sixth century, arguing that a God who declares the end from the beginning is fully able to disclose the future. The reader&rsquo;s view of God and of inspired Scripture largely shapes which conclusion seems more compelling.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Whatever one concludes about its date, the purpose of the chapter is plain and pastoral. It was given to strengthen the faithful for a coming storm, to assure them that the chaos of warring empires unfolds within the certain plan of God, and to call the wise to stand firm even unto death. The detailed history is not an end in itself; it is the proof that the God who foretold all of this also rules all of this, and that the persecution about to fall on his people will not have the last word. The chapter ends with a tyrant coming to his appointed end with none to help him, a fitting close to a vision designed to fortify hope.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>The Movement of the Chapter</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The prophecy opens with the kings of Persia and the mighty king of Greece, Alexander, whose empire is broken and divided to the four winds (verses 1 to 4). It then settles into the long conflict between the king of the South, the Ptolemies of Egypt, and the king of the North, the Seleucids of Syria, tracing their wars, alliances, and marriages across many decades (verses 5 to 20). The center of the chapter is the rise of a contemptible person, the historical Antiochus IV Epiphanes, who seizes power by flattery (verses 21 to 24).",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "His campaigns against Egypt are turned back by the ships of Kittim, the Romans, and he vents his fury on the holy covenant, profaning the temple and setting up the abomination that makes desolate, while the wise stand firm and are refined (verses 25 to 35). The closing section describes a king who exalts himself above every god and speaks against the God of gods (verses 36 to 39), a portrait many take as a transition to an eschatological antichrist. The chapter ends at the time of the end with the king coming to his end, none to help him (verses 40 to 45).",
                }}
              />
            </div>
          </div>
        )}

        {/* Key Themes */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>The Major Themes of Daniel 11</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Beneath its dense historical detail, Daniel 11 carries a handful of profound themes &mdash; the sovereignty of God over the kings of the earth, the endless and futile conflict of empires, the desecrating fury of the persecutor, the steadfast courage of those who know their God, and the unfolding of the antichrist pattern toward the time of the end. These themes turn a catalogue of ancient wars into a word of enduring comfort and warning.",
                }}
              />
            </div>
            {THEMES.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ color: t.color, fontWeight: 800, fontSize: 17, marginBottom: 10 }}>{t.title}</div>
                <p
                  style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: t.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Verse by Verse */}
        {activeTab === "verses" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Walking Through Daniel 11</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Section by section, the chapter moves from the kings of Persia to a tyrant who pitches his tents near the holy mountain only to come to his end. Each passage below traces the flow of the prophecy, connecting its veiled descriptions to the history they foretell and listening for the steady assurance that God rules every reign.",
                }}
              />
            </div>
            {VERSES.map((v) => (
              <div key={v.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${v.color}20`, border: `1px solid ${v.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: v.color, fontWeight: 700 }}>{v.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{v.title}</span>
                </div>
                <p
                  style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: v.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 6 }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>Antiochus IV Epiphanes and the Maccabean Revolt</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The contemptible king who dominates the second half of the chapter is, in his immediate historical reference, Antiochus IV Epiphanes, the Seleucid ruler who reigned in the second century before Christ. He took the title Epiphanes, meaning the god made manifest, an arrogant claim that his contemporaries mocked by calling him Epimanes, the madman. Rebuffed by Rome in Egypt and enraged against the Jews, he banned the practices of the covenant, plundered and profaned the temple, halted the daily sacrifice, and erected an altar to Zeus over the altar of God &mdash; the abomination that makes desolate.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "His persecution provoked the Maccabean revolt, a rising led by the priest Mattathias and his sons, most famously Judas Maccabeus. Against great odds the faithful resisted, recaptured Jerusalem, and cleansed and rededicated the temple, an event still remembered in the feast of Hanukkah. The little help mentioned in verse 34 has often been read as an allusion to this resistance, and the wise who stood firm and made many understand are precisely the devout Jews who refused to abandon the covenant under threat of death. The chapter thus stands as the prophetic backdrop to one of the most stirring episodes of faithful endurance in Israel&rsquo;s history.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Jesus himself reached back to this language when he warned of the abomination of desolation spoken of by Daniel the prophet standing in the holy place. By invoking Daniel, he signaled that the pattern of desecration and persecution would recur, pointing forward to the fall of Jerusalem and beyond. Antiochus, then, is not merely a figure of the past but a type, an early and vivid instance of the persecuting power that returns again and again in history. To understand him is to be equipped to recognize the same spirit whenever and wherever it rises against God and his people.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 14 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>The Shift to the End and the Antichrist Typology</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Around verse 36 the description of the self-exalting king seems to outgrow the historical Antiochus. He magnifies himself above every god, speaks astonishing things against the God of gods, and prospers until the indignation is accomplished &mdash; language of cosmic blasphemy that some details of Antiochus&rsquo; reign do not neatly fit. For this reason many interpreters, both ancient and modern, see a prophetic transition here from the near horizon of the second century to the far horizon of the end, where Antiochus becomes a foreshadowing of a final antichrist who gathers up and intensifies all that he embodied.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The New Testament develops this trajectory. Paul describes a man of lawlessness who exalts himself against every so-called god and takes his seat in the temple of God, proclaiming himself to be God &mdash; an unmistakable echo of Daniel 11. The book of Revelation pictures a beast given a mouth uttering haughty and blasphemous words and authority to wage war on the saints for a limited time. Across these passages the same figure recurs: a power that lifts itself above God, persecutes his people, and is permitted to prosper only until the appointed moment, when it is destroyed by the coming of the Lord.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Interpreters differ on exactly where the line between Antiochus and the antichrist falls within the chapter, and faithful readers hold a range of views with humility. What unites them is the conviction that Daniel 11 prepares God&rsquo;s people for a recurring pattern, not merely a single ancient crisis. The closing scene, where the king pitches his tents between the sea and the glorious holy mountain yet comes to his end with none to help him, declares the certain outcome of every such power. However high it exalts itself, its end is fixed, and the kingdom that endures belongs to God alone.",
                }}
              />
            </div>
          </div>
        )}

        {/* Application */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Living Daniel 11</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "At first glance a chapter full of ancient wars may seem distant from daily faith, but Daniel 11 speaks powerfully to anyone living under powers they cannot control. It calls us to trust the God who rules the rise and fall of kings, to refuse the flattery of the world, to know our God deeply enough to stand firm, and to receive even suffering as refining rather than defeat. To apply it well is to live with steady courage in turbulent times, anchored in the certainty that every tyrant has an appointed end.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "First, let the chapter cure us of both despair and naivety about earthly power. The believer is not surprised when nations rage and rulers scheme, for Scripture foretold it; nor is the believer crushed by it, for the same Scripture declares its limits. Second, let the warning about flattery sharpen our discernment. The contemptible king did not seize power by honest strength but by smooth and deceptive words, and many were seduced who should have resisted. We are called to love truth more than comfort, and to recognize that the most dangerous assaults on faith often come dressed in flattery rather than open hostility.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>Knowing God and Standing Firm</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The verse at the heart of the chapter is a promise and a summons: the people who know their God shall stand firm and take action. Standing firm is not the fruit of natural temperament or sheer willpower; it flows from knowing God. The deeper our knowledge of who he is &mdash; his sovereignty, his faithfulness, his coming vindication &mdash; the more unshakable we become when pressure rises. The wise in Daniel 11 did not crumble because they understood that the tyrant was on a leash and the indignation had a limit. Real courage is the overflow of real theology, and the cultivation of a deep knowledge of God in days of peace is the best preparation for days of trial.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Yet standing firm did not always mean escaping harm. Some of the wise fell by sword and flame, and the text says they stumbled so that they might be refined, purified, and made white. This reframes Christian suffering entirely: persecution is not the failure of faith but the furnace that purifies it, and the loss of the faithful is gathered into God&rsquo;s purpose rather than wasted. The wise also turned many to righteousness, so that their endurance bore fruit in others, a promise echoed in the next chapter where those who turn many to righteousness shine like the stars forever. We are called, then, to a faithfulness that may cost us much, confident that nothing offered to God in such loyalty is ever lost.",
                }}
              />
            </div>

            {/* Reflection questions block */}
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {REFLECTION.map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span
                      style={{
                        flexShrink: 0,
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: `${GREEN}20`,
                        border: `1px solid ${GREEN}55`,
                        color: GREEN,
                        fontSize: 13,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {i + 1}
                    </span>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Always-visible video section */}
        <div style={{ marginTop: 40 }}>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on Daniel 11</h2>
            <p
              style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{
                __html:
                  "Sermons and teaching on Daniel 11 &mdash; the kings of the north and south, Antiochus IV Epiphanes and the abomination of desolation, the faithful who stand firm, and the antichrist typology of the time of the end.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: GOLD, fontWeight: 700, fontSize: 16, margin: 0 }}>{v.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
