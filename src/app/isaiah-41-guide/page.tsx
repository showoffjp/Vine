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
const ACCENT = "#a78bfa";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

interface Block {
  heading: string;
  reference?: string;
  accent: string;
  paragraphs: string[];
}

const overviewBlocks: Block[] = [
  {
    heading: "The Courtroom of History: God Calls the Nations",
    reference: "Isaiah 41:1&ndash;7",
    accent: PURPLE,
    paragraphs: [
      "Isaiah 41 opens in a courtroom. God calls the coastlands and the nations to silence and then to speak: &ldquo;Let them approach, then let them speak; let us together draw near for judgment.&rdquo; The question at issue is a historical one: who stirred up the conqueror from the east, who gave the nations before him and made him trample kings underfoot? The answer the text supplies is unambiguous: &ldquo;I, the LORD, the first, and with the last; I am he.&rdquo; The one who controls the career of the conquering king &mdash; identified elsewhere in Isaiah as Cyrus of Persia &mdash; is the God of Israel, who names and directs the movements of the greatest empire-builders of the age.",
      "The reaction of the coastlands and nations in verses 5 through 7 is telling: they see what God has done and they are afraid, but instead of turning to God, they turn to one another. They encourage each other and set to work making stronger idols, fastening them with nails &ldquo;so that it cannot be moved.&rdquo; This is the comedy and tragedy of idolatry: the fear that should drive people to the living God instead drives them to construct better versions of their helpless substitutes. The nails that hold the idol in place are an implicit contrast with the God who needs no such support &mdash; the one who holds the universe in place by his word.",
      "The section establishes the epistemological challenge of the chapter: who can predict and control the movements of history? Only God. And the response to that question determines everything. The nations double down on their idols; Israel is invited to a different response entirely.",
    ],
  },
  {
    heading: "The Servant of the LORD: Fear Not",
    reference: "Isaiah 41:8&ndash;16",
    accent: TEAL,
    paragraphs: [
      "Having silenced the nations and exposed the futility of idolatry, God turns to address Israel directly &mdash; and the tone shifts completely. The courtroom argument gives way to tender personal address: &ldquo;But you, Israel, my servant, Jacob whom I have chosen, offspring of Abraham, my friend.&rdquo; This is the language of covenant intimacy, not legal proceedings. Israel is not addressed as a defendant or a spectator but as the chosen servant, the friend of Abraham&rsquo;s God.",
      "&ldquo;Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.&rdquo; These words in verse 10 are among the most frequently quoted in the entire Old Testament, and they repay the attention they receive. The command not to fear is grounded in four divine commitments stacked on each other: I am with you; I am your God; I will strengthen you; I will help you. The fifth &mdash; I will uphold you &mdash; is the seal on the promise. The ground of courage is not the absence of threatening circumstances but the presence and commitment of the God who is there.",
      "Verses 11 through 16 press the point home with the great reversal of verse 14: &ldquo;Fear not, you worm Jacob.&rdquo; The tenderness of the address and the apparent insult are both intentional. Israel is called a worm &mdash; tiny, powerless, without natural defenses. And yet the very next lines promise that this worm will become a sharp threshing sledge that will thresh mountains and make them like chaff. The pattern is the biblical pattern of transformation: God begins where his people are at their most depleted, not their most impressive.",
    ],
  },
  {
    heading: "Water in the Desert and the Silence of Idols",
    reference: "Isaiah 41:17&ndash;29",
    accent: GOLD,
    paragraphs: [
      "Verses 17 through 20 contain some of the most beautiful poetry in Isaiah. The poor and needy seek water, and there is none &mdash; their tongue is parched with thirst. Into this image of desolation God speaks: &ldquo;I the LORD will answer them; I the God of Israel will not forsake them. I will open rivers on the bare heights, and fountains in the midst of the valleys. I will make the wilderness a pool of water, and the dry land springs of water.&rdquo; The desert is not merely watered; it is planted. Cedar, acacia, myrtle, olive, cypress, plane, and pine trees will all be set in the wilderness &mdash; a catalogue of beauty growing precisely where nothing grew before.",
      "The purpose of this transformation is declared explicitly in verse 20: &ldquo;that they may see and know, may consider and understand together, that the hand of the LORD has done this, the Holy One of Israel has created it.&rdquo; God&rsquo;s acts in the world are always acts of self-revelation. The rivers in the desert are not merely practical provision; they are a signature, a way of writing the character of God in the landscape of human experience.",
      "The chapter closes by returning to the courtroom of verses 1 through 7, now pressing the challenge against the idols directly: &ldquo;Present your case, says the LORD; bring your proofs, says the King of Jacob. Let them bring them, and tell us what is to come.&rdquo; The idols cannot speak, cannot predict, cannot save. &ldquo;Behold, you are nothing, and your work is less than nothing; an abomination is he who chooses you.&rdquo; The chapter that began with trembling nations nailing their idols in place ends with the verdict of the court: the idols are nothing, and the one who stirred up the conqueror from the north remains the only God there is.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "God&apos;s Sovereignty Over World History",
    accent: PURPLE,
    paragraphs: [
      "The most politically explosive claim in Isaiah 41 is that the career of the conquering king from the east &mdash; Cyrus of Persia, who would not rise to power for another century and a half after Isaiah wrote &mdash; is under the direction of the God of Israel. &ldquo;Who stirred up one from the east whom victory meets at every step?... I, the LORD, the first, and with the last; I am he.&rdquo; No one predicted this, no counselor of the nations had told them, because no one had access to the one who was doing it.",
      "This claim challenges every form of political and nationalistic ultimacy. The empires of the world &mdash; Assyria, Babylon, Persia, and by implication every subsequent power &mdash; are instruments in hands that belong to the God of a small, exiled people. The one who controls the mightiest armies in the world is also the one who calls a trembling Israel &ldquo;my servant.&rdquo; The contrast is not incidental; it is the point. God&rsquo;s sovereignty over the headlines is inseparable from his intimate care for the overlooked.",
      "For the contemporary reader, this theme is a prophylactic against both despair and idolatry. When political powers rise that seem unstoppable, when the news cycle produces events that appear to be spinning out of control, Isaiah 41 plants its flag in the ground: &ldquo;I, the LORD, the first, and with the last; I am he.&rdquo; The God who directed Cyrus is not watching the twenty-first century with less attention than he gave the sixth century BC.",
    ],
  },
  {
    heading: "The Courtroom Challenge to Idols",
    accent: TEAL,
    paragraphs: [
      "Isaiah 41 stages a legal drama in which God calls the nations and their gods to give evidence. The question is simple and devastating: can you predict? Can you tell us what the former things meant, or what the things to come will be? &ldquo;Tell us what is to come hereafter, that we may know that you are gods&rdquo; (v.23). The silence of the idols in response to this challenge is the court&rsquo;s verdict: they are nothing.",
      "This is not merely an ancient polemic against the bronze and stone statues of the ancient Near East. It is a perpetual challenge to every substitute for the living God. Every idol promises what it cannot deliver: the career idol promises security but cannot protect from retrenchment; the relationship idol promises unconditional love but cannot absorb the full weight of a soul&rsquo;s longing; the political idol promises justice but cannot guarantee it. The test Isaiah applies is rigorous: can your god speak, save, and predict? If not, it is nothing.",
      "The craftsmen of verse 7 who strengthen one another and nail their idol in place so it cannot totter are not merely historical curiosities. They are every person who invests in a substitute for God &mdash; reinforcing it with arguments, relationships, routines, and resources &mdash; hoping that the additional nails will make it more reliable. Isaiah&rsquo;s chapter cuts through the effort: only the living God can pass the test of the courtroom, because only he controls the events of history.",
    ],
  },
  {
    heading: "Fear Not &mdash; God&apos;s Most Repeated Command",
    accent: ROSE,
    paragraphs: [
      "&ldquo;Do not fear&rdquo; is the most frequently repeated command in the entire Bible &mdash; it appears in various forms over 365 times, one for every day of the year by some counts. Isaiah 41 gives it in two concentrated expressions: verse 10 (&ldquo;Fear not, for I am with you; be not dismayed, for I am your God&rdquo;) and verses 13 through 14 (&ldquo;Fear not, I am the one who helps you... Fear not, you worm Jacob&rdquo;). The repetition is intentional: God knows that fear is the dominant emotional experience of his people in every generation, and he addresses it with lavish reassurance.",
      "The command does not rest on optimism or the denial of danger. Israel is genuinely threatened &mdash; exiled, surrounded by more powerful nations, facing what appears to be the abandonment of God. The command not to fear rests instead on the character and commitment of God himself: &ldquo;I am with you... I am your God... I will strengthen you... I will help you... I will uphold you.&rdquo; Five promises stacked on each other, each one a load-bearing wall in the structure of courage.",
      "The New Testament presses this even further. When Jesus says &ldquo;Fear not, little flock, for it is your Father&rsquo;s good pleasure to give you the kingdom&rdquo; (Luke 12:32), he stands in the tradition of Isaiah 41. When Paul writes &ldquo;God gave us a spirit not of fear but of power and love and self-control&rdquo; (2 Timothy 1:7), the same root is visible. The repetition of the command across the canon signals that God takes the fear of his people seriously and meets it not with rebuke but with revelation of himself.",
    ],
  },
  {
    heading: "The Worm Becomes a Threshing Sledge",
    accent: GREEN,
    paragraphs: [
      "Verse 14 contains one of the strangest and most encouraging address forms in all of Scripture: &ldquo;Fear not, you worm Jacob, you men of Israel.&rdquo; The worm is not a compliment. It describes something tiny, without natural defenses, easily crushed underfoot. Applied to Jacob &mdash; to the people of Israel in their exilic weakness &mdash; it acknowledges without softening the reality of their situation. They are not great; they are not powerful; they have no resources by which to accomplish anything significant.",
      "And yet the very next verse promises: &ldquo;Behold, I will make you a threshing sledge, new, sharp, and having teeth; you shall thresh the mountains and crush them, and you shall make the hills like chaff.&rdquo; The worm becomes an instrument of transformation. The thing that had no natural power of its own becomes a tool in the hands of God that can thresh mountains. This is the biblical pattern of transformation: weakness plus God equals an outcome that transcends all natural explanation.",
      "The New Testament comes back to this theme repeatedly. &ldquo;God chose what is weak in the world to shame the strong&rdquo; (1 Corinthians 1:27). &ldquo;My grace is sufficient for you, for my power is made perfect in weakness&rdquo; (2 Corinthians 12:9). The worm-to-threshing-sledge transformation of Isaiah 41 is the pattern that runs from the Old Testament through the cross and resurrection of Jesus and into the life of every person who has experienced God&rsquo;s power working through their acknowledged weakness.",
    ],
  },
  {
    heading: "Water in the Desert",
    accent: GOLD,
    paragraphs: [
      "Verses 17 through 20 move from the legal argument of the courtroom to the pastoral tenderness of divine provision. The image of the poor and needy seeking water with parched tongues is an image of maximum human desolation: not merely inconvenience, not merely difficulty, but the kind of thirst that threatens life. Into this image God speaks the most extravagant promise: not just water, but rivers on bare heights, fountains in valleys, pools in the wilderness, springs in the dry land.",
      "The planting of trees in the wilderness adds another dimension. Cedar, acacia, myrtle, olive, cypress, plane, and pine &mdash; these are not weeds but noble trees, trees that provide shade, food, timber, and beauty. The wilderness is not merely moistened; it is transformed into a garden. The signature God leaves on this transformation is declared in verse 20: it is so that everyone may see and know that &ldquo;the hand of the LORD has done this, the Holy One of Israel has created it.&rdquo; Provision is not merely practical; it is revelatory.",
      "For the reader in a spiritually or materially dry season, this passage carries enormous weight. The condition of the poor and needy of verse 17 is not a disqualification for God&rsquo;s intervention; it is precisely the condition that activates his response. &ldquo;I the LORD will answer them; I the God of Israel will not forsake them.&rdquo; The desert does not become a garden because the needy person found the right resources; it becomes a garden because the LORD will not let his people perish in the wilderness.",
    ],
  },
];

interface VerseEntry {
  verses: string;
  heading: string;
  text: string;
  accent: string;
}

const verseEntries: VerseEntry[] = [
  {
    verses: "vv.1-4",
    heading: "God Calls the Nations to Judgment",
    text: "God calls the coastlands and nations to a legal hearing: keep silence before me, then speak. The question he poses is historical: who stirred up the conqueror from the east, giving nations before him and making him trample kings? The answer is unambiguous: &ldquo;I, the LORD, the first, and with the last; I am he.&rdquo; The God of Israel is the director of the most powerful movements of world history, not a spectator of them.",
    accent: PURPLE,
  },
  {
    verses: "vv.5-7",
    heading: "The Nations Turn to Idols",
    text: "The coastlands see what God has done and they are afraid &mdash; but their fear drives them not to God but to each other. Craftsmen encourage one another and strengthen their idols, fastening them with nails so they will not totter. The comedy and tragedy of idolatry: the only response to the evidence of God&apos;s power is a more secure version of the substitute. The nails that hold the idol in place are the implicit confession that without them, it would fall.",
    accent: TEAL,
  },
  {
    verses: "vv.8-10",
    heading: "But You, Israel: Fear Not",
    text: "&ldquo;But you, Israel, my servant, Jacob whom I have chosen, offspring of Abraham my friend; you whom I took from the ends of the earth, and called from its farthest corners, saying to you, &apos;You are my servant, I have chosen you and not cast you off.&apos;&rdquo; Then the great promise: &ldquo;Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.&rdquo; Five commitments stacked on each other as the foundation of courage.",
    accent: ROSE,
  },
  {
    verses: "vv.11-13",
    heading: "Those Who Oppose You Will Come to Nothing",
    text: "God promises that all who are incensed against Israel will be put to shame and confounded; those who strive against them shall be as nothing and shall perish. &ldquo;You shall seek those who contend with you, but you shall not find them.&rdquo; The promise is not that the opposition will be weak but that it will ultimately cease to exist. Then the intimate restatement: &ldquo;For I, the LORD your God, hold your right hand; it is I who say to you, &apos;Fear not, I am the one who helps you.&apos;&rdquo;",
    accent: GREEN,
  },
  {
    verses: "vv.14-16",
    heading: "The Worm Jacob Becomes a Threshing Sledge",
    text: "&ldquo;Fear not, you worm Jacob, you men of Israel! I am the one who helps you, declares the LORD; your Redeemer is the Holy One of Israel.&rdquo; God names Israel&apos;s weakness without softening it: a worm. Then he promises transformation: &ldquo;I will make you a threshing sledge, new, sharp, and having teeth; you shall thresh the mountains and crush them, and you shall make the hills like chaff. You shall winnow them, and the wind shall carry them away.&rdquo; The worm-to-sledge reversal is the signature pattern of divine power working through acknowledged weakness.",
    accent: ACCENT,
  },
  {
    verses: "vv.17-20",
    heading: "Rivers in the Desert",
    text: "The poor and needy seek water, and there is none; their tongue is parched with thirst. Into this image of maximum desolation God speaks: &ldquo;I the LORD will answer them; I the God of Israel will not forsake them. I will open rivers on the bare heights, and fountains in the midst of the valleys. I will make the wilderness a pool of water, and the dry land springs of water.&rdquo; Seven species of trees will be planted in the wilderness. The purpose: &ldquo;that they may see and know, may consider and understand together, that the hand of the LORD has done this.&rdquo;",
    accent: TEAL,
  },
  {
    verses: "vv.21-24",
    heading: "The Idol Challenge: Tell Us What Is to Come",
    text: "&ldquo;Present your case, says the LORD; bring your proofs, says the King of Jacob. Let them bring them, and tell us what is to come; tell us the former things, what they are, that we may consider them, that we may know their outcome; or declare to us the things to come. Tell us what is to come hereafter, that we may know that you are gods.&rdquo; The idols fail the test. &ldquo;Behold, you are nothing, and your work is less than nothing; an abomination is he who chooses you.&rdquo;",
    accent: GOLD,
  },
  {
    verses: "vv.25-29",
    heading: "I Stirred Up One from the North",
    text: "God declares that he stirred up one from the north, calling on his name, and that he tramples on rulers as on mortar. No one predicted this; no one told of it in advance. The counselors of the nations are an abomination &mdash; their counsel is vanity, their idols wind and emptiness. The chapter closes where it opened: God controls the conqueror, no idol can take credit, and the evidence of God&apos;s sovereignty over history is complete. The court has heard the case and rendered its verdict.",
    accent: PURPLE,
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "Replace Fear with the Promise: I Am With You",
    accent: ROSE,
    paragraphs: [
      "Isaiah 41:10 is a verse to be personalized in specific trials, not just admired in the abstract. &ldquo;Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.&rdquo; The command not to fear is not issued into a vacuum; it is addressed to people in the specific circumstances of exile, threat, and helplessness. It is meant for you in your specific circumstances right now.",
      "Concretely: identify the specific fear that is currently dominating your emotional life. Name it as precisely as you can. Then take each of the five divine commitments in verse 10 and apply it to that specific fear. God is with you in that situation. He is your God in that situation. He will strengthen you for that situation. He will help you in that situation. He will uphold you through that situation. Do not let these promises remain abstractions; work them into the soil of your actual circumstances.",
    ],
  },
  {
    heading: "Expose Your Idols by the Courtroom Test",
    accent: TEAL,
    paragraphs: [
      "Isaiah 41 offers a remarkably precise test for idolatry: can your substitute for God speak, predict, and save? Apply this test to the things you are currently trusting for security, significance, or salvation. Your career: can it predict the future of your industry and guarantee your place in it? Your relationships: can they absorb the full weight of your soul&rsquo;s longing and provide unconditional love? Your health: can it guarantee you safety and a long life? Your savings: can they protect you against every possible loss?",
      "The failure of these things to pass the courtroom test is not a reason for despair but an invitation to release your grip on them. The idol that cannot speak cannot help you; nailing it down more securely only wastes the energy that could be spent trusting the one God who passed the test. Let Isaiah 41&rsquo;s legal argument move from intellectual assent to actual reorientation: hold your substitutes loosely, and hold the living God with the grip that belongs to him alone.",
    ],
  },
  {
    heading: "Embrace the Worm Moments as Setups for God&apos;s Power",
    accent: GREEN,
    paragraphs: [
      "If you are in a &ldquo;worm Jacob&rdquo; season &mdash; one of those periods where you feel tiny, without resources, easily overlooked, unable to produce significant results by your own efforts &mdash; Isaiah 41:14 is addressed directly to you. The address &ldquo;you worm Jacob&rdquo; is not an insult designed to shame but a diagnosis designed to comfort: God knows where you are, and he has chosen this specific configuration of weakness to demonstrate his power.",
      "The practical implication is to stop waiting until you feel stronger or better resourced before you engage fully with what God has placed before you. The threshing sledge is not made from a mighty oak; it is made from a worm. Your weakness is not an obstacle to God&rsquo;s work through you; in the economy of Isaiah 41, it is the raw material. Acknowledge the weakness honestly, bring it to God explicitly, and watch for the ways he begins to make a sharp instrument out of what you would have regarded as useless material.",
    ],
  },
  {
    heading: "Pray for Rivers in Your Desert Places",
    accent: GOLD,
    paragraphs: [
      "The poor and needy of verses 17 through 20 are in a condition of maximum desolation, and God&rsquo;s response to their condition is not to tell them to look harder for water but to promise that he will open rivers in the bare heights and fountains in the valleys. This is an invitation to bring the specific dry places of your life to God in specific prayer.",
      "Where are the deserts in your life right now &mdash; the relationships that have gone barren, the ministry that has produced no visible fruit, the area of your soul that has not felt the freshness of God&rsquo;s presence in a long time? Isaiah 41 invites you to name these deserts by name in prayer and to ask God for the specific rivers and trees and springs that would transform them. The purpose clause of verse 20 is worth claiming: &ldquo;that they may see and know, may consider and understand, that the hand of the LORD has done this.&rdquo; Pray not just for provision but for the revelation of God&rsquo;s character that comes with it.",
    ],
  },
  {
    heading: "Trust That God Controls the Headlines",
    accent: PURPLE,
    paragraphs: [
      "The political and geopolitical argument of Isaiah 41 &mdash; that the God of a small, exiled people directs the careers of the greatest conquerors in world history &mdash; is meant to steady the faith of people for whom the headlines are terrifying. If you find yourself anxious about the state of the world, about political developments that seem to be moving in destructive directions, about the rise of forces that appear to be winning, Isaiah 41 plants a flag: &ldquo;I, the LORD, the first, and with the last; I am he.&rdquo;",
      "This is not a call to political passivity or to indifference about justice. It is a call to the settled confidence that refuses to let anxiety about the future drive us to the idol-making frenzy of verses 5 through 7. The people of God are not called to nail their idols down harder when the news is frightening; they are called to wait on the LORD, who holds the right hand of his servant and says: Fear not, I am the one who helps you.",
    ],
  },
];

const reflectionQuestions = [
  "What specific fear is currently dominating your emotional life? Take the five commitments of verse 10 and apply each one directly to that fear &mdash; write them out.",
  "What is the thing you are currently trusting for security, significance, or salvation that would fail Isaiah 41&apos;s courtroom test? What would it mean to hold it more loosely?",
  "Are you in a &apos;worm Jacob&apos; season? What would it look like to stop waiting until you feel stronger and instead bring your weakness to God as the raw material of his work?",
  "Where are the desert places in your life right now &mdash; the dry relationships, barren seasons of ministry, areas of spiritual drought? Bring them to God in specific prayer, asking for rivers in the bare heights.",
  "How does the claim that God controls the career of Cyrus of Persia speak to whatever political or geopolitical development is currently frightening you?",
];

const videoItems = [
  { id: "pN8mBkLtT4n", title: "Isaiah 41 - Fear Not For I Am With You" },
  { id: "qE2rZxQvS9f", title: "God Strengthens and Upholds - Isaiah 41 Study" },
  { id: "jD5tNySwK7g", title: "Isaiah 41 Explained - God&apos;s Challenge to the Nations" },
  { id: "uH1bCfMwR3j", title: "I Will Help You Says the LORD - Isaiah 41 Verse by Verse" },
];

function BlockView({ block }: { block: Block }) {
  return (
    <section style={{ marginBottom: "2.75rem" }}>
      <h3
        style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 6px", color: TEXT }}
        dangerouslySetInnerHTML={{ __html: block.heading }}
      />
      {block.reference && (
        <div
          style={{
            color: block.accent,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: "1.1rem",
          }}
          dangerouslySetInnerHTML={{ __html: block.reference }}
        />
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.1rem",
          borderLeft: `3px solid ${block.accent}55`,
          paddingLeft: "1.25rem",
        }}
      >
        {block.paragraphs.map((para, i) => (
          <p
            key={i}
            style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: para }}
          />
        ))}
      </div>
    </section>
  );
}

function VerseCard({
  entry,
  open,
  onToggle,
}: {
  entry: VerseEntry;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        background: CARD,
        border: `1px solid ${open ? entry.accent + "66" : BORDER}`,
        borderRadius: 10,
        marginBottom: 10,
        overflow: "hidden",
        transition: "border-color 0.15s",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: 14,
          textAlign: "left",
          fontFamily: "inherit",
        }}
      >
        <span
          style={{
            color: entry.accent,
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: 1,
            textTransform: "uppercase",
            minWidth: 52,
          }}
        >
          {entry.verses}
        </span>
        <span
          style={{ color: TEXT, fontSize: "1rem", fontWeight: 600, flex: 1 }}
          dangerouslySetInnerHTML={{ __html: entry.heading }}
        />
        <span style={{ color: entry.accent, fontSize: 20, fontWeight: 700, lineHeight: 1, flexShrink: 0 }}>
          {open ? "-" : "+"}
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 18px 16px 84px" }}>
          <p
            style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: entry.text }}
          />
        </div>
      )}
    </div>
  );
}

export default function Isaiah41GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [openVerse, setOpenVerse] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  function toggleVerse(verses: string) {
    setOpenVerse((prev) => (prev === verses ? null : verses));
  }

  const tabAccentMap: Record<Tab, string> = {
    Overview: PURPLE,
    "Key Themes": TEAL,
    "Verse by Verse": GREEN,
    Application: GOLD,
  };

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
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div
            style={{
              display: "inline-block",
              background: `${TEAL}22`,
              color: TEAL,
              borderRadius: 6,
              padding: "4px 12px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Old Testament Study
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              margin: "0 0 1rem",
              lineHeight: 1.15,
            }}
          >
            Isaiah Chapter 41
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
            Fear Not, For I Am With You
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
                "&ldquo;Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.&rdquo; &mdash; Isaiah 41:10",
            }}
          />
        </header>

        <div
          style={{
            background: CARD,
            border: `1px solid ${TEAL}44`,
            borderRadius: 12,
            padding: "1.5rem 1.75rem",
            marginBottom: "2.25rem",
          }}
        >
          <h2 style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.1rem" }}>
            Chapter at a Glance
          </h2>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "1rem" }}
            dangerouslySetInnerHTML={{
              __html:
                "Isaiah 41 moves between two worlds: the great courtroom of history, where God challenges the nations and silences their idols, and the intimate personal address to a trembling servant. From &ldquo;I the LORD am first and last&rdquo; to &ldquo;Fear not, you worm Jacob&rdquo; to rivers in the desert &mdash; twenty-nine verses that span world history and the individual heart in a single sustained argument about the sovereignty and tenderness of the only God.",
            }}
          />
        </div>

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
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? tabAccentMap[t] : BORDER}`,
                background: activeTab === t ? tabAccentMap[t] : CARD,
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

        {activeTab === "Overview" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>
              Overview of Isaiah 41
            </h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Isaiah 41 is one of the most encouraging chapters in all of Scripture. God calls the nations to a courtroom and challenges the idols: who predicted the rise of Cyrus? Who has declared what is to come? The idols are silent &mdash; they are the work of craftsmen. But God speaks to his servant Israel with some of the most tender, powerful words of comfort in the Bible: &ldquo;Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.&rdquo; The chapter moves between God&apos;s sovereignty over world history and his intimate care for his trembling servant.",
              }}
            />
            {overviewBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}
          </div>
        )}

        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Key Themes</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Five major themes weave through Isaiah 41, each a different facet of the same diamond: the God who controls world history is the same God who holds your right hand and tells you not to be afraid. These themes span the full range of theological concern &mdash; from political sovereignty to personal reassurance, from idol critique to pastoral promise.",
              }}
            />
            {themeBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}
          </div>
        )}

        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 0.75rem" }}>
              Verse by Verse &mdash; All 29 Verses
            </h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 1.75rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Click any section to expand its commentary. Isaiah 41 moves in three major movements: the courtroom challenge (vv.1-7), the tender address to the servant (vv.8-16), and the promise of desert transformation followed by the final idol verdict (vv.17-29). Each movement deepens the chapter&apos;s central argument: there is one God, and he is with you.",
              }}
            />
            {verseEntries.map((entry) => (
              <VerseCard
                key={entry.verses}
                entry={entry}
                open={openVerse === entry.verses}
                onToggle={() => toggleVerse(entry.verses)}
              />
            ))}
          </div>
        )}

        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Application</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Isaiah 41 is not only a theological argument; it is a pastoral invitation. Each of its major themes has a corresponding movement of the heart and a concrete practice of the life. The five application areas below trace the chapter&apos;s greatest promises into the specific situations where they are most needed.",
              }}
            />
            {applicationBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}

            <div
              style={{
                marginTop: "1rem",
                background: CARD,
                border: `1px solid ${GOLD}44`,
                borderRadius: 12,
                padding: "1.75rem 2rem",
              }}
            >
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 1.1rem", fontSize: "1.25rem" }}>
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
          </div>
        )}

        <section style={{ marginTop: "3.5rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 8px" }}>Video Teaching</h2>
          <p
            style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
            dangerouslySetInnerHTML={{
              __html:
                "Go deeper into Isaiah 41 with these video teachings on the sovereignty of God over world history, the &ldquo;Fear not&rdquo; promises, the worm-to-threshing-sledge transformation, and God&apos;s challenge to every idol that would take his place.",
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
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>
                  {v.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{
            marginTop: "3.5rem",
            background: CARD,
            border: `1px solid ${ROSE}44`,
            borderRadius: 12,
            padding: "1.75rem 2rem",
          }}
        >
          <h3 style={{ color: ROSE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            Fear Not, For I Am With You
          </h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{
              __html:
                "Isaiah 41 gives us a God who controls the careers of world conquerors and who simultaneously holds the right hand of the trembling servant and says: &ldquo;Fear not, I am the one who helps you.&rdquo; The worm becomes a threshing sledge. The desert becomes a garden. The idols are exposed as nothing. And the God who is first and last &mdash; the only one who could predict all of this &mdash; is the God who is with you in your specific trial today. Receive his right hand. Do not be dismayed. He is your God.",
            }}
          />
        </div>
      </main>
    </div>
  );
}
