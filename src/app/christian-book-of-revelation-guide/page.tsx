"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Reading Revelation Rightly",
  "Four Ways to Read It",
  "The Seven Churches",
  "The Throne and the Lamb",
  "The Millennium and the New Jerusalem",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Reading Revelation Rightly",
    heading: "Reading Revelation Rightly",
    paragraphs: [
      "Revelation is the most abused book in the Bible. More than any other portion of Scripture, it has been pressed into the service of date-setting, conspiracy, and sensational prediction &mdash; mined for clues about helicopters, microchips, and the identity of the antichrist. Almost all of this misuse springs from a single failure: a failure to ask what kind of book Revelation actually is. Genre is not a technical afterthought. It is the first and most decisive interpretive question, and getting it wrong distorts everything that follows.",
      "The book belongs to a recognized ancient literary genre: the &ldquo;apocalypse&rdquo; (from the Greek apokalypsis, an &ldquo;unveiling&rdquo; or &ldquo;disclosure&rdquo;). Apocalyptic literature flourished in Judaism between roughly 200 BC and AD 100, and it has its own conventions: vivid symbolic imagery, cosmic visions, angelic guides, sharp dualism between the present evil age and the age to come, and a pervasive use of numbers as symbols rather than statistics. To read such a book as a coded timeline of modern events is to read it against its own grain &mdash; like reading a political cartoon as a photograph.",
      "Revelation is also two other things at once. It is a letter &mdash; addressed to seven real congregations in the Roman province of Asia, with all the pastoral particularity that implies. And it is a prophecy, in the full biblical sense of that word: not merely fore-telling the future but forth-telling God&rsquo;s word into a concrete situation, calling God&rsquo;s people to faithfulness. The Old Testament prophets spent far more energy confronting present injustice than predicting distant events, and Revelation stands squarely in that tradition.",
      "The historical setting matters. The book was written by John, most likely during the reign of the emperor Domitian (around AD 95), to churches living under the mounting pressure of the imperial cult &mdash; the worship of Caesar as &ldquo;lord and god.&rdquo; Some believers had already suffered for refusing to participate; Antipas of Pergamum is named as a martyr (2:13). Others were tempted to compromise, to find some quiet accommodation with the idolatry that saturated public life. Into that pressure Revelation speaks.",
      "Its original purpose was therefore pastoral and political in the deepest sense: to comfort persecuted Christians with the unshakable assurance that Christ, not Caesar, is Lord; that the empire&rsquo;s power is real but penultimate; and that God will judge evil and make all things new. The repeated visions of heavenly worship are not decoration &mdash; they are subversive. They declare that the truest account of reality is not the one broadcast from Rome but the one sung around the throne of God.",
      "The danger, then, is reading Revelation as a newspaper of the future rather than as a pastoral and theological vision for the present. When the book becomes a puzzle to be decoded against today&rsquo;s headlines, it loses its actual power: the power to reorient a frightened church&rsquo;s imagination, to unveil the world as it truly is, and to summon believers to patient endurance and faithful witness in the face of a hostile order.",
      "Finally, Revelation is saturated with the Old Testament. Remarkably, it contains no direct Old Testament quotations &mdash; yet it is woven through with hundreds of allusions, especially to Daniel, Ezekiel, Isaiah, and Zechariah. The four living creatures, the throne vision, the measuring of the temple, the lampstands, the beast from the sea, the harlot city, the river of life &mdash; nearly every image is drawn from the prophetic Scriptures. To read Revelation well is, in large part, to know the Old Testament well. It is the climax of the whole biblical story, told in the symbolic language of Israel&rsquo;s prophets.",
    ],
  },
  {
    id: "Four Ways to Read It",
    heading: "Four Ways to Read It",
    paragraphs: [
      "Across church history, four main interpretive approaches to Revelation have emerged, and each has had serious, faithful advocates. Knowing these four frameworks is the single most useful thing a reader can do, because most disagreements about Revelation are really disagreements about which of these lenses one is using. They differ chiefly on one question: to what time period do the visions of the book primarily refer?",
      "The first is the preterist approach (from the Latin praeter, &ldquo;past&rdquo;). On this reading, most of Revelation was fulfilled in the first century, referring to events surrounding the fall of Jerusalem in AD 70 and the persecutions of the Roman Empire. The beast is Rome (or a specific emperor such as Nero, whose name in Hebrew letters famously yields 666); the harlot &ldquo;Babylon&rdquo; is the city of Rome or apostate Jerusalem. The strength of this view is that it takes seriously the book&rsquo;s own claim that these things must &ldquo;soon take place&rdquo; (1:1) and that they spoke directly to John&rsquo;s first hearers.",
      "The second is the historicist approach. Here Revelation maps the whole sweep of church history, from John&rsquo;s own day to the end of the age, as a kind of prophetic outline of the centuries. This was the dominant view of the Protestant Reformation: Luther and others read the papacy as the antichrist and saw the corruptions and conflicts of medieval and Reformation Europe foretold in the seals, trumpets, and bowls. Its weakness is its instability &mdash; each generation tends to find itself near the climax, and the identifications shift constantly.",
      "The third is the futurist approach. On this reading, most of Revelation &mdash; everything from chapter 4 onward &mdash; refers to events still future, immediately preceding the return of Christ: a final tribulation, a personal antichrist, a literal battle at Armageddon. This is the dominant view in popular evangelicalism, especially in the form of dispensationalism, which has shaped countless books, films, and sermons. Its appeal is its vividness and its sense of imminent expectation; its danger is the recurring temptation to identify current events with the text and to set dates.",
      "The fourth is the idealist (or symbolic) approach. This view holds that Revelation portrays the timeless struggle between good and evil, God and Satan, the church and the world &mdash; a conflict applicable in every age rather than tied to a single set of historical events. The beast is not one empire but the recurring face of idolatrous, persecuting power, whether Roman, medieval, or modern. The strength of this reading is its perennial relevance; its weakness, if pressed too far, is that it can dissolve the book&rsquo;s rootedness in real history and its hope of a real future consummation.",
      "Many careful scholars today hold not to one of these in isolation but to a blend &mdash; an &ldquo;eclectic&rdquo; or progressively-applied approach. Such a reading takes the first-century context seriously (with the preterist), recognizes that the book unveils recurring patterns of evil and faithfulness that repeat throughout history (with the idealist), and affirms that Revelation points toward a genuine future consummation when Christ returns and God makes all things new (with the futurist). The visions are not exhausted by any single moment; they disclose how God works in every age and how the story will finally end.",
      "What unites all responsible readings is humility. Revelation invites us into a vision, not a calculation. The interpretive temperature of the church drops considerably once we stop asking &ldquo;when exactly will this happen?&rdquo; and start asking the questions the book actually presses upon us: Who is Lord? Where is true power? Will you worship the beast or the Lamb? Will you endure?",
    ],
  },
  {
    id: "The Seven Churches",
    heading: "The Seven Churches",
    paragraphs: [
      "Before any of the famous visions of seals and beasts, Revelation grounds itself in the ordinary life of the church. Chapters 2 and 3 contain seven letters dictated by the risen Christ to seven real congregations in the Roman province of Asia Minor: Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, and Laodicea. These were actual cities, lying along a circular postal route, each with its own pressures, temptations, and failures. Whatever else Revelation is, it begins as a word to the church on the ground.",
      "Each letter follows a recognizable pattern. It opens with an address to the church and its &ldquo;angel,&rdquo; then a description of Christ drawn from the opening vision of chapter 1 &mdash; a different facet of the glorified Lord for each situation. Then comes a commendation of what is good, a rebuke of what is wrong, an exhortation to repent or hold fast, and finally a promise &ldquo;to the one who conquers.&rdquo; The structure is diagnostic and pastoral: Christ examines, names, warns, and encourages.",
      "Ephesus is commended for its labor and doctrinal vigilance, but it has &ldquo;abandoned the love you had at first&rdquo; (2:4) &mdash; orthodoxy without warmth, truth without love. Smyrna, poor and persecuted, receives no rebuke at all; Christ tells this suffering church that it is in fact rich (2:9), and calls it to be faithful unto death. Pergamum dwells &ldquo;where Satan&rsquo;s throne is&rdquo; (2:13) &mdash; a center of imperial cult and pagan worship &mdash; and is faithful under pressure yet tolerant of corrupting teaching.",
      "Thyatira is praised for growing love and service but rebuked for tolerating a false prophetess who lures believers into compromise. Sardis has &ldquo;the reputation of being alive, but you are dead&rdquo; (3:1) &mdash; a sobering word to any church that mistakes its history or appearance for spiritual vitality. Philadelphia, like Smyrna, escapes rebuke: it has &ldquo;but little power&rdquo; yet has kept Christ&rsquo;s word and not denied his name, and is promised an open door.",
      "Laodicea receives the most damning assessment of all. It is &ldquo;lukewarm, and neither hot nor cold&rdquo; (3:16), so nauseating to Christ that he threatens to spit it out of his mouth. Wealthy and self-satisfied &mdash; &ldquo;I am rich, I have prospered, and I need nothing&rdquo; &mdash; it does not know that it is &ldquo;wretched, pitiable, poor, blind, and naked&rdquo; (3:17). To this complacent church comes the famous image of Christ standing outside, knocking, asking to be let back in to his own people (3:20).",
      "These seven letters are far more than ancient correspondence. Seven is the number of completeness, and the seven churches together form a portrait of the whole church in every age &mdash; its strengths and its besetting sins. Every congregation can find itself somewhere in this gallery: the loveless and the lukewarm, the faithful and the compromised, the persecuted and the complacent. The risen Christ walks among the lampstands (2:1), seeing each church exactly as it is.",
      "Read this way, the letters function as Christ&rsquo;s own diagnostic of his people, then and now. Before the church is shown the throne of God and the cosmic conflict, it is shown itself &mdash; honestly. The promises &ldquo;to the one who conquers&rdquo; that close each letter (the tree of life, the crown of life, hidden manna, the morning star, a place on Christ&rsquo;s throne) anticipate the glories of the book&rsquo;s final chapters. The whole of Revelation, in a sense, is an extended answer to these seven situations: a summons to overcome.",
    ],
  },
  {
    id: "The Throne and the Lamb",
    heading: "The Throne and the Lamb",
    paragraphs: [
      "The theological center of Revelation is found in chapters 4 and 5, when a door is opened in heaven and John is caught up into the throne room of God. After the searching letters to the churches, the perspective lifts dramatically: from the troubled congregations of Asia to the very center of reality, the throne around which all things turn. Everything that follows in the book must be read in the light cast from this room.",
      "Chapter 4 is a vision of worship. God is seated on the throne, radiant as jasper and carnelian, encircled by a rainbow and surrounded by twenty-four elders and four living creatures who never cease their song: &ldquo;Holy, holy, holy, is the Lord God Almighty, who was and is and is to come&rdquo; (4:8). The vision establishes the book&rsquo;s foundational claim before a single seal is opened: whatever chaos may unfold on earth, God reigns. Heaven&rsquo;s deepest activity is not panic but praise.",
      "Chapter 5 introduces a crisis. In the right hand of the One on the throne is a scroll, sealed with seven seals &mdash; the scroll of God&rsquo;s purposes for history, the destiny of the world. But a mighty angel asks, &ldquo;Who is worthy to open the scroll?&rdquo; and no one is found, in heaven or on earth. John weeps loudly (5:4): the future is locked, God&rsquo;s purposes seem stalled, and no creature can move them forward. Then one of the elders says, &ldquo;Weep no more; behold, the Lion of the tribe of Judah&hellip; has conquered&rdquo; (5:5).",
      "Here comes the most important turn in the entire book. John hears of a Lion &mdash; the messianic warrior, the conquering king of David&rsquo;s line. But when he turns to look, he sees not a lion but &ldquo;a Lamb standing, as though it had been slain&rdquo; (5:6). The hearing and the seeing are deliberately set against each other. The conquering Lion of prophecy turns out to be a slaughtered Lamb &mdash; bearing still the marks of its death, yet standing alive. This single image is the interpretive key to the whole of Revelation.",
      "For it reveals how God actually conquers. Not by superior violence, not by crushing his enemies with raw force, but through the sacrificial, self-giving death of the Lamb. &ldquo;Worthy are you&hellip; for you were slain, and by your blood you ransomed people for God from every tribe and language and people and nation&rdquo; (5:9). The victory has already been won, and it was won at the cross. Power itself is redefined: the throne of the universe belongs to the One who laid down his life.",
      "This means the slain-yet-standing Lamb is the hermeneutical center of the book &mdash; the lens through which every subsequent image of judgment, plague, and warfare must be read. When the rider on the white horse goes out conquering, when armies are defeated, when the beast is overthrown, we are not to import a contradictory picture of brute domination. The Lamb conquers as the Lamb. His sharpest weapon is the sword that comes from his mouth &mdash; his word, his testimony, his truth.",
      "And so the worship that filled chapter 4 now expands to encompass the Lamb. The living creatures, the elders, then myriads of angels, then every creature in heaven and earth and under the earth join in a swelling doxology: &ldquo;Worthy is the Lamb who was slain&rdquo; and &ldquo;To him who sits on the throne and to the Lamb be blessing and honor and glory and might forever and ever&rdquo; (5:12&ndash;13). The crucified and risen Christ stands at the center of heaven&rsquo;s worship. Whatever fearful visions follow, the reader has already seen the end: the Lamb has overcome, and he is worthy.",
    ],
  },
  {
    id: "The Millennium and the New Jerusalem",
    heading: "The Millennium and the New Jerusalem",
    paragraphs: [
      "Revelation 20 contains one of the most fiercely debated passages in the Bible: a description of a thousand-year reign of Christ, during which Satan is bound and the martyrs reign with Christ. From the Latin for &ldquo;thousand years&rdquo; comes the term &ldquo;millennium,&rdquo; and the interpretation of this single chapter has divided sincere Christians into three broad camps. The differences turn on the timing and nature of this reign relative to the return of Christ.",
      "Premillennialism holds that Christ returns before the millennium. On this reading, the second coming inaugurates a literal, future, thousand-year earthly reign of Christ, after which comes the final judgment and the new creation. It takes the thousand years as a real, future period and is the most straightforwardly chronological reading of the chapter. It has ancient roots and remains widespread in evangelical and especially dispensational circles.",
      "Postmillennialism holds that Christ returns after the millennium. Here the thousand years (often understood figuratively) represents a coming age of gospel triumph, in which the world is increasingly Christianized through the church&rsquo;s witness, before Christ returns to a world largely won. This view fueled much nineteenth-century missionary optimism; it waned after the World Wars but retains thoughtful advocates who emphasize the gospel&rsquo;s transforming power in history.",
      "Amillennialism holds that the millennium is not a separate future epoch at all but the present church age &mdash; Christ reigning now, through his church, from his throne in heaven, with Satan&rsquo;s power decisively bound by the cross. The &ldquo;thousand years&rdquo; is symbolic of a long, complete period between Christ&rsquo;s first and second comings. This was the historic view of Augustine and became the majority position of the Reformation and much of the church through the centuries.",
      "It is worth saying plainly: these are differences among faithful Christians, not tests of orthodoxy. Each view is held by devout believers who confess the same risen Lord and await the same returning King. The Nicene Creed commits us to the truth that Christ &ldquo;will come again in glory to judge the living and the dead, and his kingdom will have no end&rdquo; &mdash; not to a particular schedule for the millennium. Charity and humility are in order where Scripture leaves room for honest disagreement.",
      "Whatever one makes of the thousand years, the book&rsquo;s true climax lies just beyond it, in chapters 21 and 22: the vision of the New Jerusalem descending from heaven, the marriage of heaven and earth. The decisive announcement is this: &ldquo;Behold, the dwelling place of God is with man. He will dwell with them, and they will be his people&rdquo; (21:3). The whole story has been moving toward this &mdash; God dwelling unhindered with his people. Death is no more, and God himself wipes away every tear (21:4).",
      "The final images are images of restoration, not destruction. Through the city flows the river of the water of life, and on its banks grows the tree of life, whose leaves are &ldquo;for the healing of the nations&rdquo; (22:2). The Bible does not end with the world&rsquo;s annihilation but with its renewal: the garden of Genesis returns, now as a garden-city, illumined not by sun or moon but by the glory of God and the Lamb. The book that has unveiled so much darkness ends in radiant light, with the promise &ldquo;Behold, I am making all things new&rdquo; (21:5) and the church&rsquo;s answering prayer, &ldquo;Come, Lord Jesus&rdquo; (22:20).",
    ],
  },
];

const videoItems = [
  { videoId: "5nbcGs2Ox5o", title: "BibleProject — Book of Revelation Overview" },
  { videoId: "I4lP011RmnY", title: "How to Read Revelation — Four Views Explained" },
  { videoId: "rJoufuzZ4Lo", title: "The Lamb on the Throne — Revelation 4-5" },
];

export default function ChristianBookOfRevelationGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: ACCENT, color: "#fff", padding: "4px 18px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            THE BOOK OF REVELATION
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, margin: "0 0 14px", lineHeight: 1.15 }}>
            Book of Revelation Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 600, margin: "0 auto", lineHeight: 1.75, fontSize: 16 }}>
            A sober, non-sensationalist reading of Revelation &mdash; its apocalyptic genre, the four ways to read it, the seven churches, the Lamb on the throne, the millennium debate, and the New Jerusalem.
          </p>
        </div>

        {/* Key verse banner */}
        <div style={{ background: ACCENT + "28", border: `1px solid ${ACCENT}55`, borderRadius: 12, padding: "14px 24px", marginBottom: "2.5rem", textAlign: "center" }}>
          <p style={{ margin: 0, fontStyle: "italic", fontWeight: 600, color: TEXT, fontSize: 15 }}>
            &ldquo;Behold, I am making all things new.&rdquo; &mdash; Revelation 21:5
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: "2rem", flexWrap: "wrap" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                background: tab === t ? ACCENT : CARD,
                color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                borderRadius: 8,
                padding: "8px 16px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content: text tabs */}
        {tab !== "Videos" && currentSection && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: ACCENT, marginBottom: 4 }}>
              {currentSection.heading}
            </h2>
            {currentSection.paragraphs.map((para, i) => (
              <p
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${ACCENT}`,
                  borderRadius: "0 10px 10px 0",
                  padding: "1.25rem 1.5rem",
                  color: MUTED,
                  lineHeight: 1.78,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </section>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: ACCENT, marginBottom: 4 }}>Videos</h2>
            <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}>
              Overviews and teaching on Revelation &mdash; its structure and genre, the four interpretive views, and the vision of the Lamb on the throne.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45, color: ACCENT, margin: 0 }}>{v.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing callout */}
        <div style={{ marginTop: "3rem", background: ACCENT + "18", border: `1px solid ${ACCENT}44`, borderRadius: 14, padding: "2rem", textAlign: "center" }}>
          <h3 style={{ color: ACCENT, fontWeight: 800, fontSize: 20, marginTop: 0, marginBottom: 10 }}>
            Reading Revelation as Worship
          </h3>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
            Revelation is not a code to be cracked but a vision to be entered. Read it slowly, with the Old Testament open beside it, and let it do its work: to unveil the world as it truly is, to summon a frightened church to faithful endurance, and to fix our eyes on the Lamb who has already conquered.
          </p>
        </div>
      </main>
    </div>
  );
}
