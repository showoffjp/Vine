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
    videoId: "Qp7vN2kLx9R",
    title: "Daniel 12 - The Resurrection and the End of Days",
  },
  {
    videoId: "Zm4tH8sBq1W",
    title: "Many Who Sleep Shall Awake - The Hope of Resurrection",
  },
  {
    videoId: "Lk9rD3pXn2T",
    title: "Those Who Are Wise Shall Shine Like the Stars",
  },
  {
    videoId: "Tv6bC1mJq8K",
    title: "Seal the Book Until the Time of the End",
  },
];

const THEMES = [
  {
    color: PURPLE,
    title: "The Resurrection of the Dead",
    body:
      "Daniel 12:2 is the clearest statement of bodily resurrection in the whole Old Testament, declaring that many of those who sleep in the dust of the earth shall awake. It speaks of two awakenings to two destinies, some to everlasting life and some to shame and everlasting contempt. Here the hope of the saints reaches beyond death itself, for the grave is not the end but a sleep from which the dead will be raised. Jesus takes up this very teaching when he promises that all who are in the tombs will hear his voice and come out, those who have done good to the resurrection of life and those who have done evil to the resurrection of judgment.",
  },
  {
    color: GOLD,
    title: "The Wise Who Shine Like Stars",
    body:
      "Those who are wise, the maskilim, shall shine like the brightness of the sky above, and those who turn many to righteousness shall shine like the stars forever and ever. The wise are not merely the clever but those who understand God&rsquo;s purposes and walk faithfully in them, even through tribulation. Their reward is to share the radiance of the heavens, a glory that does not fade. And the highest honor belongs to those who turn many to righteousness, who lead others to know and trust God, for they will shine like the stars throughout eternity.",
  },
  {
    color: TEAL,
    title: "The Sealing of the Prophecy",
    body:
      "Daniel is told to shut up the words and seal the book until the time of the end, for these visions point beyond his own day to a future appointed by God. The sealing does not hide the truth forever but preserves it until the time when it will be understood. This stands in striking contrast to the close of Revelation, where John is told not to seal the words of his prophecy, for the time is near. What was sealed in Daniel is opened in the gospel, for the end-time hope of resurrection and deliverance has drawn near in the coming of Christ.",
  },
  {
    color: ROSE,
    title: "The Great Tribulation and Michael's Deliverance",
    body:
      "At that time Michael, the great prince who has charge of God&rsquo;s people, shall arise, and there shall be a time of trouble such as never has been since there was a nation. Yet this unparalleled distress is met by an unfailing promise: God&rsquo;s people shall be delivered, everyone whose name is found written in the book. The deliverance is not earned but rooted in God&rsquo;s electing grace, recorded in the book of life. Michael stands as the heavenly guardian of the saints, and his rising signals that even in the darkest hour the people of God are kept secure by a power greater than every earthly foe.",
  },
  {
    color: GREEN,
    title: "The Promised Rest and Reward",
    body:
      "The book closes with a tender personal word to Daniel: go your way till the end, and you shall rest and shall stand in your allotted place at the end of the days. After a lifetime of faithful service in exile, the aged prophet is promised rest in death and resurrection at the last day to receive his inheritance. The language of resting and standing again is the language of death and resurrection, the very hope declared earlier in the chapter, now applied personally to Daniel himself. It is the assurance every believer may claim, that those who die in faith will rest and then rise to stand in the place God has prepared.",
  },
  {
    color: PURPLE,
    title: "The Apocalyptic Numbers and the Time of the End",
    body:
      "The chapter is filled with mysterious numbers: a time, times, and half a time, which is three and a half; the 1290 days; and the 1335 days, with a blessing pronounced on the one who waits and reaches them. These figures have been understood in many ways, from periods of persecution under Antiochus to symbols of the whole age of tribulation between the comings of Christ. Whatever their precise reference, their function in the text is clear, to assure the suffering saints that the time of trouble is measured and limited by God. The end is not open-ended chaos but a span God has numbered, and beyond it lies blessing for those who endure.",
  },
];

const VERSES = [
  {
    ref: "Daniel 12:1",
    color: ROSE,
    title: "Michael Arises in a Time of Trouble",
    body:
      "At that time shall arise Michael, the great prince who has charge of Daniel&rsquo;s people, and there shall be a time of trouble such as never has been since there was a nation till that time. This unparalleled distress is the great tribulation that precedes the end, a season of suffering beyond any that history has known. Yet the verse does not end in despair, for at that time Daniel&rsquo;s people shall be delivered, everyone whose name shall be found written in the book. The deliverance flows not from human strength but from the guardianship of Michael and the security of being written in God&rsquo;s book of life.",
  },
  {
    ref: "Daniel 12:2",
    color: PURPLE,
    title: "Many Who Sleep Shall Awake",
    body:
      "And many of those who sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt. This is the clearest resurrection text in the Old Testament, announcing that death is not the final word and that the dead will rise to face their destinies. There are two awakenings and two outcomes, everlasting life for some and everlasting shame for others, so that the resurrection is both a hope to be longed for and a judgment to be feared. The sleep of death will give way to an awakening that is eternal, and what one awakens to is decided by one&rsquo;s relationship to God.",
  },
  {
    ref: "Daniel 12:3",
    color: GOLD,
    title: "The Wise Shall Shine Like the Stars",
    body:
      "And those who are wise shall shine like the brightness of the sky above, and those who turn many to righteousness, like the stars forever and ever. The wise are those who understand and trust God&rsquo;s purposes and remain faithful through the tribulation, and their destiny is to share in the radiance of heaven. Special honor is given to those who turn many to righteousness, who through teaching and witness lead others into right relationship with God. Their reward is an everlasting glory, a shining that will never be dimmed, like the stars that fill the night sky forever.",
  },
  {
    ref: "Daniel 12:4",
    color: TEAL,
    title: "Seal the Book Until the End",
    body:
      "But you, Daniel, shut up the words and seal the book, until the time of the end. The vision is not for Daniel&rsquo;s generation alone but reaches far forward to a future appointed by God, and so it must be preserved and protected until its appointed hour. Many shall run to and fro, and knowledge shall increase, a phrase often understood as a restless searching of the prophecy or a growing of understanding as the end draws near. The sealing assures the reader that what is hidden for now will one day be opened, and that God has set a fixed time when these things will be made plain.",
  },
  {
    ref: "Daniel 12:5-7",
    color: ROSE,
    title: "How Long Till the End of These Wonders",
    body:
      "Then Daniel sees two others standing, one on each bank of the river, and one asks the man clothed in linen who is above the waters, How long shall it be till the end of these wonders. The man clothed in linen raises both hands to heaven and swears by him who lives forever that it shall be for a time, times, and half a time, that is, three and a half. He adds that these things will be finished when the shattering of the power of the holy people comes to an end. The solemn oath, sworn with both hands lifted to heaven, underscores the certainty of God&rsquo;s appointed timetable, that the suffering of his people is measured and will surely reach its end.",
  },
  {
    ref: "Daniel 12:8-9",
    color: GOLD,
    title: "I Heard but Did Not Understand",
    body:
      "Daniel confesses, I heard, but I did not understand, and he asks, O my lord, what shall be the outcome of these things. The prophet who received the vision does not grasp its full meaning, a humble reminder that even the greatest of God&rsquo;s servants see in part. The answer comes gently but firmly: Go your way, Daniel, for the words are shut up and sealed until the time of the end. Understanding is not denied out of cruelty but deferred until the proper time, when God himself will unveil what is now hidden. Daniel is called to trust where he cannot yet see and to rest in the wisdom of the One who knows the end from the beginning.",
  },
  {
    ref: "Daniel 12:10",
    color: PURPLE,
    title: "The Wise Shall Understand",
    body:
      "Many shall purify themselves and make themselves white and be refined, but the wicked shall act wickedly, and none of the wicked shall understand, but those who are wise shall understand. The tribulation itself becomes a means of refining, purifying the faithful as fire purifies precious metal, while the wicked persist in their rebellion and remain blind to the truth. Understanding the things of God is granted not to the merely intelligent but to the wise, those whose hearts are turned toward him. The same events that refine the righteous harden the wicked, so that the end-time crisis reveals and deepens the difference between the two.",
  },
  {
    ref: "Daniel 12:11-13",
    color: GREEN,
    title: "The Days, the Blessing, and Daniel's Rest",
    body:
      "From the time the regular burnt offering is taken away and the abomination that makes desolate is set up, there shall be 1290 days, and blessed is he who waits and arrives at the 1335 days. These numbered days assure the saints that the time of trial is measured and that a blessing awaits those who endure to the end. Then comes the final, tender word to Daniel: go your way till the end, and you shall rest and shall stand in your allotted place at the end of the days. After a long life of faithfulness in exile, Daniel is promised the rest of death and the resurrection to receive his inheritance, the personal hope of every believer who dies in faith.",
  },
];

const REFLECTION = [
  "Daniel 12 promises that those whose names are written in the book will be delivered through the time of trouble. Do I rest my hope in being known and kept by God, rather than in my own strength to survive the storm?",
  "The chapter declares that many who sleep in the dust will awake to everlasting life. How does the certainty of bodily resurrection change the way I face death, grief, and the loss of those I love?",
  "Those who turn many to righteousness will shine like the stars forever. Am I investing my life in leading others toward God, the one labor that yields an eternal and unfading glory?",
  "The tribulation refines the faithful even as it hardens the wicked. When trials come, do I let them purify and strengthen my faith, or do I let them drive me toward bitterness and unbelief?",
  "Daniel heard the vision but did not understand, and he was told to trust and go his way. Where is God calling me to walk by faith and rest in his wisdom even when I cannot see the outcome of things?",
  "Daniel was promised that he would rest and then stand in his allotted place at the end of the days. Do I live in the hope of that rest and resurrection, faithful in my own season of service until the Lord calls me home?",
];

type DanielTab = "overview" | "themes" | "verses" | "application";

export default function Daniel12GuidePage() {
  const [activeTab, setActiveTab] = useState<DanielTab>("overview");
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
              background: `${PURPLE}20`,
              border: `1px solid ${PURPLE}40`,
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
            Book of Daniel - Chapter 12
          </div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>
            The Resurrection and the End of Days
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>
            Michael arises in a time of trouble unlike any other; many who sleep in the dust will
            awake, some to everlasting life and some to everlasting shame; the wise will shine like
            the stars; the book is sealed until the time of the end - and Daniel is promised rest.
          </p>
          <p
            style={{ color: PURPLE, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: "14px 0 0", maxWidth: 640 }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;And many of those who sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt.&rdquo; &mdash; Daniel 12:2",
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
              onClick={() => setActiveTab(t.id as DanielTab)}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? PURPLE : BORDER}`,
                background: activeTab === t.id ? `${PURPLE}20` : "transparent",
                color: activeTab === t.id ? PURPLE : MUTED,
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
                  ["Chapter", "12"],
                  ["Setting", "Exile in Babylon"],
                  ["Genre", "Apocalyptic"],
                  ["Key Theme", "Resurrection"],
                  ["Key Verse", "Daniel 12:2"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>The Climax of Daniel's Vision</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Daniel 12 is the closing chapter of the book and the climax of the great final vision that began in chapter 10. After surveying the rise and fall of kingdoms and the suffering of God&rsquo;s people, the vision lifts its eyes beyond all earthly history to the time of the end. Here, for the first time with full clarity, the Old Testament unveils the hope of bodily resurrection, the awakening of the dead to everlasting life or everlasting shame. The chapter gathers the deepest hopes of the saints in exile and answers the oldest human question, what lies beyond death.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter belongs to the genre of apocalyptic literature, a form that pulls back the veil on heavenly realities and the end of history through vivid imagery, angelic messengers, and symbolic numbers. It speaks of Michael the great prince, of a time of trouble unlike any other, of the wise shining like the stars, and of mysterious spans of days. Such writing is not meant to satisfy idle curiosity about dates but to comfort and strengthen a suffering people, assuring them that history is moving toward a God-appointed end in which the faithful will be vindicated and the wicked judged.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "At its heart Daniel 12 is a chapter of hope set against the backdrop of tribulation. It does not deny that God&rsquo;s people will pass through a time of trouble such as never has been, but it surrounds that trouble with promises of deliverance, resurrection, glory, and rest. The book that began with young exiles standing faithful in a foreign court ends with the aged prophet given a personal promise that he will rest in death and stand again at the end of the days. The whole arc of Daniel closes not in fear but in the sure and certain hope of resurrection.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>The Movement of the Chapter</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter opens with the rising of Michael and a time of trouble unlike any other, yet with the promise that God&rsquo;s people, all whose names are written in the book, shall be delivered (verse 1). Then comes the great resurrection text, the awakening of many who sleep in the dust to everlasting life or everlasting contempt (verse 2), followed by the shining of the wise and those who turn many to righteousness like the stars forever (verse 3). Daniel is then commanded to seal the book until the time of the end, when knowledge shall increase (verse 4).",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The scene shifts to two figures by the river and the man clothed in linen above the waters, who is asked how long until the end and answers, a time, times, and half a time (verses 5 to 7). Daniel hears but does not understand, and is told the words are sealed until the end (verses 8 to 9). The faithful will be refined and the wicked will remain blind, but the wise will understand (verse 10). The book closes with the 1290 and 1335 days, a blessing on the one who waits, and the promise that Daniel will rest and stand in his place at the end of the days (verses 11 to 13).",
                }}
              />
            </div>
          </div>
        )}

        {/* Key Themes */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>The Major Themes of Daniel 12</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Daniel 12 gathers the great hopes of the end into a single chapter &mdash; the resurrection of the dead to life and to judgment, the wise who shine like stars, the sealing of the prophecy until the time of the end, the great tribulation met by Michael&rsquo;s deliverance, the measured span of a time, times, and half a time, and the promised rest and reward for Daniel himself. These six threads turn a book of exile into a testament of resurrection hope.",
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Walking Through Daniel 12</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Section by section, the chapter moves from the rising of Michael in the great tribulation to the personal promise of rest given to Daniel. Each passage below traces the flow of the vision, attending to the words of the heavenly messengers, the hope of resurrection, and the sovereign timetable by which God brings history to its appointed end.",
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
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>The Clearest Resurrection Hope of the Old Testament</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Daniel 12:2 stands as the most explicit teaching of bodily resurrection in the entire Old Testament. Earlier hints appear in the hope of Job that he would see God in his flesh, in the promise of Isaiah that the dead shall live and the dust shall awake and sing, and in the vision of dry bones in Ezekiel, but here the doctrine emerges in its fullest clarity. Many who sleep in the dust of the earth shall awake, and the language of sleep and awakening teaches that death is real but not final, a slumber from which God will rouse the dead. The resurrection is bodily, for it is those in the dust of the earth who awake, not disembodied souls but whole persons restored to life.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The verse speaks of two resurrections to two destinies, some to everlasting life and some to shame and everlasting contempt. This double outcome is taken up directly by Jesus in John 5, where he declares that an hour is coming when all who are in the tombs will hear his voice and come out, those who have done good to the resurrection of life and those who have done evil to the resurrection of judgment. What Daniel saw from afar, the Lord reveals as bound up with his own voice and authority, for the Son of God is the one who will raise the dead. The hope sealed in Daniel finds its fulfillment and its agent in the risen Christ.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "This resurrection hope reframes the whole experience of God&rsquo;s suffering people. The wise who endure tribulation, who turn many to righteousness, are promised not merely survival but glory, shining like the brightness of the sky and like the stars forever and ever. The martyr who dies for faithfulness has not lost everything but gained everything, for beyond the grave lies an awakening to everlasting life and an unfading radiance. The doctrine of resurrection transforms tribulation from meaningless suffering into the refining road that leads to glory.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 14 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>The Sealed Book, the Numbers, and Michael the Guardian</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Daniel is commanded to seal the book until the time of the end, a striking contrast to the close of Revelation, where John is told not to seal the words of the prophecy, for the time is near. The difference is the coming of Christ. In Daniel the end-time hope is still distant and veiled, preserved under seal until its appointed hour, but in the gospel that hour has arrived, and the resurrection life of the age to come has broken into the present in the risen Lord. What was sealed in shadow is unsealed in the light of Christ, so that the church now lives in the days toward which Daniel could only gaze.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter offers a cluster of symbolic numbers: a time, times, and half a time, which is three and a half; the 1290 days; and the 1335 days. Interpreters have understood these in various ways, some pointing to the persecution under Antiochus Epiphanes when the temple was desecrated, others reading them as symbols of the whole age of tribulation between the comings of Christ. The three and a half, being half of seven, the number of completeness, suggests a time of trial that is real but limited, cut short by God&rsquo;s mercy. The precise reckoning matters less than the comfort the numbers carry, that the days of distress are measured and numbered by God and that a blessing awaits the one who waits and endures to the end.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Standing over the whole scene is Michael, the great prince who has charge of God&rsquo;s people, who arises to defend them in the time of trouble. Throughout Daniel, Michael appears as the heavenly guardian of Israel, contending against the spiritual powers behind the nations. His rising in chapter 12 assures the saints that they do not face the great tribulation alone, for the armies of heaven are arrayed on their behalf. And their ultimate security rests not in their own endurance but in the book in which their names are written, the register of those whom God has chosen and will surely deliver.",
                }}
              />
            </div>
          </div>
        )}

        {/* Application */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Living Daniel 12</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Daniel 12 is a chapter to be lived in the face of death and tribulation. It calls us to hope in the resurrection, to endure faithfully through trial, to labor at turning others to righteousness, and to rest in the security of being known and kept by God. To apply this chapter well is to let its resurrection hope reshape how we face the grave, its promise of deliverance steady us in trouble, and its picture of the shining wise spur us to invest our lives in what lasts forever. The believer who grasps Daniel 12 can face the end of the days without fear.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "First, let the promise of resurrection transform how we face death. Because many who sleep in the dust will awake to everlasting life, the grave is for the believer a sleep and not an ending, and we grieve, as Paul says, not as those who have no hope. Second, let the picture of the shining wise reorder our ambitions. Those who turn many to righteousness will shine like the stars forever, so the labor of leading others to God, however hidden or costly now, is the one investment that yields an eternal and unfading reward.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>Trusting God With What We Cannot Yet See</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Daniel heard the vision and confessed, I did not understand, and he was told simply to go his way, for the words were sealed until the time of the end. There is a lesson here for every believer who wrestles with the mysteries of prophecy and the timing of God&rsquo;s purposes. We are not given to know all things, and the temptation to obsess over dates and decode every symbol can distract us from the plain call to faithfulness. Like Daniel, we are to trust where we cannot trace, resting in the wisdom of the One who knows the end from the beginning, content to walk by faith until he makes all things plain.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter ends with one of the most tender promises in all of Scripture, spoken to an old man who had served God faithfully through a lifetime of exile: go your way till the end, and you shall rest and shall stand in your allotted place at the end of the days. To Daniel, and to every believer who dies in faith, God promises both rest and resurrection, a quiet sleep in death and a glorious standing again at the last day to receive the inheritance prepared for us. We may face our own end, whenever it comes, with this same hope, that those who rest in the Lord will rise to stand in the place he has appointed.",
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
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on Daniel 12</h2>
            <p
              style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{
                __html:
                  "Sermons and teaching on Daniel 12 &mdash; the rising of Michael in the great tribulation, the resurrection of the dead to life and judgment, the wise who shine like the stars, and the sealing of the book until the time of the end.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: 16, margin: 0 }}>{v.title}</h4>
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
