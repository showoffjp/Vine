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
    videoId: "vF8aQRwtP3c",
    title: "Daniel 10 - The Vision of the Man Clothed in Linen",
  },
  {
    videoId: "p3K0jXs8Cdo",
    title: "Spiritual Warfare and the Prince of Persia",
  },
  {
    videoId: "Js9Wc7Y8j9o",
    title: "Praying with Daniel - Fasting and Persevering Intercession",
  },
  {
    videoId: "Q3l6T1aRk2M",
    title: "Michael the Archangel and the Angelic Realm",
  },
];

const THEMES = [
  {
    color: TEAL,
    title: "The Discipline of Prayer and Fasting",
    body:
      "Daniel 10 opens with three full weeks of mourning, during which Daniel eats no delicacies, no meat, and no wine, and uses no ointments. This is sustained, costly intercession - not a quick request but a setting of the heart to seek understanding from God. Fasting here is the bodily expression of a soul leaning hard into prayer, refusing comfort while a burden remains unanswered. The chapter teaches that the deepest works of God are often sought through humble, persevering, self-denying prayer rather than passing wishes.",
  },
  {
    color: GOLD,
    title: "The Glorious Heavenly Messenger",
    body:
      "By the Tigris, Daniel sees a man clothed in linen with a belt of fine gold, a body like beryl, a face like lightning, eyes like flaming torches, arms and legs like burnished bronze, and a voice like the sound of a multitude. The vision overwhelms him; his strength fails and his face turns deathly pale. This radiant figure has prompted long debate among interpreters, with some seeing the angel Gabriel and others a pre-incarnate appearance of Christ. Either way, the encounter underscores the staggering glory of the heavenly realm and the smallness of mortal flesh before it.",
  },
  {
    color: ROSE,
    title: "The Reality of Spiritual Warfare",
    body:
      "The most arresting disclosure of the chapter is that the messenger was withstood for twenty-one days by the prince of the kingdom of Persia, until Michael, one of the chief princes, came to help. Behind the visible politics of empires lies an invisible conflict among spiritual powers. The same days Daniel spent in prayer, a battle was being waged in the unseen realm over the affairs of nations. The chapter pulls back the curtain on a dimension of reality that the rest of Scripture confirms - that earthly events have heavenly backstories.",
  },
  {
    color: GREEN,
    title: "The Prayer Heard from the First Day",
    body:
      "The messenger tells Daniel that from the first day he set his heart to understand and to humble himself, his words were heard, and that he has come because of those words. The answer was dispatched at the very start, even though it arrived only after twenty-one days. This reframes delayed answers to prayer: silence is not necessarily refusal, and the apparent gap between asking and receiving may conceal a contest in which God is already at work. Daniel&rsquo;s perseverance kept him praying through the very interval in which the answer was on its way.",
  },
  {
    color: PURPLE,
    title: "Angelic Ministry and Strengthening",
    body:
      "Three times in the chapter Daniel is touched and strengthened - first set trembling on his hands and knees, then enabled to stand, then given strength to speak. The angel addresses him tenderly: O Daniel, man greatly loved; fear not, peace be with you; be strong and of good courage. Heaven does not merely overwhelm the prophet; it stoops to steady him. Michael, called your prince, stands as the special guardian of God&rsquo;s people, a reminder that the saints are not left defenseless in the cosmic struggle but are surrounded by ministering powers.",
  },
];

const VERSES = [
  {
    ref: "Daniel 10:1-4",
    color: TEAL,
    title: "Three Weeks of Mourning by the Tigris",
    body:
      "In the third year of Cyrus king of Persia, a word is revealed to Daniel, and the word is true and concerns a great conflict. Understanding the vision, Daniel mourns for three weeks, eating no delicacies, no meat, and drinking no wine, and using no ointment until the weeks are completed. The exile is technically over, yet Daniel&rsquo;s heart is heavy over the unfinished trials of his people. On the twenty-fourth day of the first month he is standing on the bank of the great river, the Tigris, having set himself to seek the meaning of what he has seen.",
  },
  {
    ref: "Daniel 10:5-6",
    color: GOLD,
    title: "The Man Clothed in Linen",
    body:
      "Lifting his eyes, Daniel beholds a man clothed in linen, with a belt of the fine gold of Uphaz around his waist. His body is like beryl, his face like the appearance of lightning, his eyes like flaming torches, his arms and legs like the gleam of burnished bronze, and the sound of his words like the sound of a multitude. The description is luminous and terrifying, blending precious stone, fire, and light. The parallels with the vision of the glorified Christ in Revelation 1 are unmistakable, and they have led many readers to ponder whether this is an angel of the highest rank or the Lord himself appearing in glory.",
  },
  {
    ref: "Daniel 10:7-9",
    color: PURPLE,
    title: "Daniel Alone Sees It; His Strength Fails",
    body:
      "Only Daniel sees the vision; the men who are with him do not see it, but a great trembling falls upon them and they flee to hide themselves. Left alone, Daniel watches the great vision and is drained of strength, his radiant appearance turning to a deathly pallor, and he retains no strength at all. As the figure speaks, Daniel falls on his face in a deep sleep, his face to the ground. The pattern is consistent across Scripture: when mortal flesh encounters unveiled heavenly glory, it cannot stand. Daniel&rsquo;s collapse is not weakness of faith but the natural response of the creature before the overwhelming holiness of the unseen world.",
  },
  {
    ref: "Daniel 10:10-11",
    color: GREEN,
    title: "A Hand Touches Him - Man Greatly Loved",
    body:
      "A hand touches Daniel and sets him trembling on his hands and knees. The messenger says, O Daniel, man greatly loved, understand the words that I speak to you, and stand upright, for now I have been sent to you. The Hebrew term behind &ldquo;greatly loved&rdquo; (chamudot) speaks of one who is precious, treasured, deeply desired. At the very moment Daniel feels least able to stand, heaven names him beloved. When he hears these words he stands up trembling, a posture that captures the whole encounter: still shaking, yet upright by grace, ready to receive what God has to say.",
  },
  {
    ref: "Daniel 10:12-13",
    color: ROSE,
    title: "The Prince of Persia and the Twenty-One Days",
    body:
      "Fear not, Daniel, for from the first day that you set your heart to understand and humbled yourself before your God, your words have been heard, and I have come because of your words. But the prince of the kingdom of Persia withstood me twenty-one days, and behold, Michael, one of the chief princes, came to help me, for I was left there with the kings of Persia. Here the curtain lifts on spiritual warfare: an unseen prince opposed the messenger for the exact span of Daniel&rsquo;s fast, until the archangel Michael intervened. The geopolitics of Persia had a parallel battle in the heavenly places.",
  },
  {
    ref: "Daniel 10:14-17",
    color: TEAL,
    title: "Strengthened by a Touch",
    body:
      "The messenger has come to make Daniel understand what is to happen to his people in the latter days, for the vision is for days yet to come. As he speaks, Daniel turns his face toward the ground and is mute. Then one in the likeness of the children of man touches his lips, and Daniel opens his mouth, confessing that pain has overwhelmed him and he retains no strength, and asking how the servant of his lord can speak with such a lord. The repeated touches show heaven patiently restoring a man undone by glory, enabling him by degrees to hear, to stand, and finally to speak.",
  },
  {
    ref: "Daniel 10:18-19",
    color: GOLD,
    title: "Fear Not, Peace Be With You, Be Strong",
    body:
      "Again the one with a human appearance touches Daniel and strengthens him, saying, O man greatly loved, fear not, peace be with you; be strong and of good courage. And when he speaks, Daniel is strengthened and says, Let my lord speak, for you have strengthened me. The threefold comfort &mdash; do not fear, be at peace, be strong &mdash; is the very vocabulary God uses to brace his servants for hard tasks. Strength comes not before the word but through it; as heaven speaks courage, courage rises. Only now, steadied and beloved, is Daniel ready to receive the revelation he has fasted to understand.",
  },
  {
    ref: "Daniel 10:20-21",
    color: PURPLE,
    title: "The Battle Continues - Michael Your Prince",
    body:
      "The messenger asks if Daniel knows why he has come, then announces that he must return to fight against the prince of Persia, and when he goes out, the prince of Greece will come. But first he will tell Daniel what is inscribed in the book of truth, and in this work, he says, there is none who contends by his side except Michael, your prince. The conflict is ongoing; one hostile power gives way to another as empires rise and fall, and the heavenly struggle continues behind them. Yet Israel is not without a defender: Michael, called &ldquo;your prince,&rdquo; stands as the appointed guardian of God&rsquo;s people.",
  },
];

const REFLECTION = [
  "Daniel set his heart to seek understanding for three full weeks. Is there a concern in my life worth that kind of sustained, costly prayer - and what comfort might I lay aside to pursue it?",
  "Heaven named Daniel greatly loved at the moment he felt weakest. How does knowing I am treasured by God change the way I come to him in prayer?",
  "The answer was sent on the first day, yet arrived after twenty-one. Where am I tempted to read delay as denial, and how can I keep praying through the interval?",
  "Behind the politics of Persia lay an unseen battle. How does the reality of spiritual warfare reshape the way I view the conflicts and powers of my own day?",
  "Three times Daniel needed a touch to be strengthened. Where do I need God to steady me before I can stand and speak the task he has given?",
  "Michael is called the prince who guards God's people. How does the truth that I am defended in the unseen realm steady me when I feel exposed and alone?",
];

type DanTab = "overview" | "themes" | "verses" | "application";

export default function Daniel10GuidePage() {
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
              background: `${TEAL}20`,
              border: `1px solid ${TEAL}40`,
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
            Book of Daniel - Chapter 10
          </div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>
            The Man Clothed in Linen and Spiritual Warfare
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>
            Daniel fasts and mourns for three weeks, sees a glorious heavenly messenger by the
            Tigris, and learns that his prayer was heard from the first day - even as an unseen war
            among the princes of the nations delayed the answer.
          </p>
          <p
            style={{ color: TEAL, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: "14px 0 0", maxWidth: 640 }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;O Daniel, man greatly loved, understand the words that I speak to you.&rdquo; &mdash; Daniel 10:11",
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
                border: `1px solid ${activeTab === t.id ? TEAL : BORDER}`,
                background: activeTab === t.id ? `${TEAL}20` : "transparent",
                color: activeTab === t.id ? TEAL : MUTED,
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
                  ["Chapter", "10"],
                  ["Setting", "By the Tigris River"],
                  ["Date", "3rd Year of Cyrus"],
                  ["Key Theme", "Prayer and Warfare"],
                  ["Key Verse", "Daniel 10:12"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>The Prologue to Daniel&rsquo;s Final Vision</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Daniel 10 is the opening of the last great vision of the book, a unified revelation that runs through chapters 10, 11, and 12. Chapter 10 is the prologue &mdash; it sets the scene, describes the messenger, and explains how the revelation came to Daniel. Chapter 11 unfolds the detailed prophecy of the kings of the north and south, and chapter 12 closes with the resurrection and the final deliverance of God&rsquo;s people. Understanding chapter 10 as the doorway into this final vision helps the reader see why so much attention is given to Daniel&rsquo;s preparation, the messenger&rsquo;s glory, and the unseen conflict.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The setting is the third year of Cyrus king of Persia, several years after the first exiles had been permitted to return to Jerusalem. Daniel, now an old man, remains in Persia, and his heart is burdened over the troubles still facing his people. The technical liberation from exile had not erased the very real difficulties of rebuilding and opposition. So Daniel gives himself to mourning and fasting for three weeks, setting his heart to understand a vision concerning a great conflict. The chapter is, at its core, the story of what happens when a faithful man humbles himself to seek God with sustained intensity.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "What Daniel receives is far more than information. He is given a window into the architecture of reality &mdash; the glory of the heavenly realm, the tenderness of God toward his servant, and the existence of a spiritual conflict behind the rise and fall of empires. The chapter holds in one frame the intimacy of being called &ldquo;greatly loved&rdquo; and the immensity of cosmic warfare among the princes of nations. It teaches that prayer is not a transaction conducted in a closed universe but a participation in a vast, contested, God-governed order in which the prayers of the humble are heard from the very first day.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>The Movement of the Chapter</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter moves in a clear arc. It begins with Daniel&rsquo;s three weeks of mourning and fasting by the Tigris (verses 1 to 4), establishing the posture of humble, persevering prayer. Then comes the overwhelming vision of the man clothed in linen, whose glory drains Daniel of all strength and casts him to the ground (verses 5 to 9). The turning point is the touch of a hand that lifts him and the words that name him greatly loved (verses 10 to 11), drawing him up from collapse into attentive readiness.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The heart of the chapter is the disclosure that the answer was sent on the first day, yet the messenger was withstood for twenty-one days by the prince of Persia until Michael came to help (verses 12 to 14). The closing movement repeats the gracious strengthening &mdash; fear not, peace, be strong &mdash; and ends with the sobering news that the heavenly battle will continue, against Persia and then Greece, with Michael standing as Israel&rsquo;s prince (verses 15 to 21). Preparation, glory, comfort, and warfare follow one another in a single sweep that prepares Daniel, and the reader, for the prophecy to come.",
                }}
              />
            </div>
          </div>
        )}

        {/* Key Themes */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>The Major Themes of Daniel 10</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Daniel 10 gathers some of the richest themes in all of Scripture &mdash; the costly discipline of prayer, the blinding glory of the heavenly realm, the hidden war behind earthly affairs, the comfort of being loved by God, and the ministry of angels. These five threads weave together into a single tapestry that reveals how heaven works in answer to the prayers of the faithful.",
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
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Walking Through Daniel 10</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Section by section, the chapter moves from a man fasting by a river to a glimpse of the war among the princes of the nations. Each passage below traces the flow of the narrative, attending both to the overwhelming glory of the vision and to the tender, strengthening words that prepare Daniel to receive the revelation that follows.",
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
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>Who Is the Man Clothed in Linen?</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The identity of the radiant figure in verses 5 and 6 has long divided interpreters. One view holds that he is a pre-incarnate appearance of Christ, a Christophany. The description is strikingly close to the vision of the glorified Son of Man in Revelation 1, who has eyes like a flame of fire, feet like burnished bronze, a voice like the roar of many waters, and a face shining like the sun. On this reading the glory that overwhelms Daniel is the glory of the Lord himself, and the title &ldquo;man clothed in linen&rdquo; recalls priestly and heavenly purity.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The other major view is that the figure is a high-ranking angel, very likely Gabriel, who was named earlier in the book as the one sent to give Daniel understanding. Supporting this reading is the fact that the messenger says he was withstood by the prince of Persia and required the help of Michael &mdash; language that seems difficult to apply to the omnipotent Lord, who needs no assistance. Some interpreters resolve the tension by suggesting that the glorious figure of verses 5 and 6 and the speaking messenger of verse 11 onward may not be the same being, with a divine appearance giving way to an angelic interpreter.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Faithful readers have landed on both sides, and the text invites reverent humility rather than dogmatism. What is beyond dispute is the effect: the unveiled glory of heaven undoes a mortal man, and yet that same glory stoops to touch, to steady, and to speak words of love. Whether angel or the Lord himself, the messenger carries heaven&rsquo;s tenderness toward a beloved servant, and the chapter directs our gaze upward to the One whose throne sends such glory into our world.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 14 }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>The Princes of the Nations and Spiritual Warfare</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The reference to the prince of the kingdom of Persia and the prince of Greece is one of the clearest windows in the Old Testament into the world of unseen powers. These princes are best understood not as human kings but as spiritual beings exercising malign influence over the nations they are associated with. The New Testament makes this explicit when Paul writes that our struggle is not against flesh and blood, but against the rulers, the authorities, the cosmic powers over this present darkness, the spiritual forces of evil in the heavenly places. Daniel 10 gives a narrative glimpse of the very reality Ephesians 6 names.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Several cautions guard against misreading this. First, the passage never suggests a dualism in which good and evil powers are evenly matched; God remains wholly sovereign, the messenger comes at his command, and Michael prevails. Second, the delay in Daniel&rsquo;s answer was not caused by any failure on God&rsquo;s part but unfolded within his governance of a contested order. Third, the believer&rsquo;s posture is not fearful preoccupation with hostile powers but persevering prayer, since it was Daniel&rsquo;s humble intercession that set heavenly help in motion. The chapter sobers us to the reality of warfare while anchoring us in the certainty that God&rsquo;s purposes, and his guardian Michael, will not fail his people.",
                }}
              />
            </div>
          </div>
        )}

        {/* Application */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Living Daniel 10</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Daniel 10 reshapes the way we pray and the way we read the troubles of our world. It calls us to a humility deep enough to fast and persevere, a confidence that our words are heard from the first day, and a sober awareness that the conflicts we see have unseen dimensions. To apply it well is to pray with greater seriousness and to wait with greater hope, knowing that delay is not the same as denial.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "First, recover the lost discipline of fasting and sustained intercession. Daniel did not pray once and move on; he set his heart and humbled himself for three full weeks. Some burdens are carried to God over seasons, not seconds. Second, let the words &ldquo;greatly loved&rdquo; settle the soul. The same Daniel who collapsed in weakness was named beloved by heaven, and so are all who are united to Christ. We pray not as strangers but as treasured children whose voices reach the throne the moment we begin.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>Praying Through the Delay</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Perhaps the most pastorally powerful lesson of the chapter is what it does to our experience of unanswered prayer. Daniel had no idea, during those twenty-one days, that his answer had already been dispatched and was contending its way to him through opposition. He simply kept praying. How many believers abandon intercession in the very interval when the answer is on the way, mistaking silence for refusal. Daniel 10 invites us to keep our hearts set and our hands lifted, trusting that the God who hears from the first day is at work even when the heavens seem closed.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "This persevering posture is matched by a settled confidence about the unseen realm. We are not to grow obsessed with spiritual powers, charting them or fearing them, but neither may we pretend they do not exist. The believer stands in a contested world, yet stands defended &mdash; Michael guards God&rsquo;s people, the messenger comes at God&rsquo;s command, and the outcome is never in doubt. So we pray with eyes open to the warfare and hearts at rest in the sovereignty of God, strengthened by the same threefold word given to Daniel: do not fear, be at peace, be strong.",
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
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on Daniel 10</h2>
            <p
              style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{
                __html:
                  "Sermons and teaching on Daniel 10 &mdash; the vision of the man clothed in linen, the discipline of fasting and prayer, and the reality of spiritual warfare behind the nations.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: TEAL, fontWeight: 700, fontSize: 16, margin: 0 }}>{v.title}</h4>
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
