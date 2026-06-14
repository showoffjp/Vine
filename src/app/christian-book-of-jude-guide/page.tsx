"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Contend for the Faith",
  "False Teachers Exposed",
  "Warnings from History",
  "Building Yourselves Up",
  "The Doxology",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Contend for the Faith",
    heading: "Contend for the Faith",
    reference: "Jude 1&ndash;4",
    paragraphs: [
      "The little letter of Jude opens with a warm and humble greeting. The author identifies himself simply as &ldquo;Jude, a servant of Jesus Christ and brother of James&rdquo; (v. 1) &mdash; almost certainly the brother of Jesus himself, yet he claims no special status beyond being a bondservant of the Lord. He writes &ldquo;to those who are called, beloved in God the Father and kept for Jesus Christ.&rdquo; In a letter that will warn sternly of judgment, the readers are first reminded that they are loved, called, and kept.",
      "Jude tells us that his letter took an unexpected turn. &ldquo;Beloved, although I was very eager to write to you about our common salvation, I found it necessary to write appealing to you to contend for the faith that was once for all delivered to the saints&rdquo; (v. 3). He had intended to write a warm meditation on the salvation they shared; instead, an urgent danger compelled him to send a different kind of letter altogether &mdash; a call to arms.",
      "The phrase &ldquo;the faith that was once for all delivered to the saints&rdquo; is one of the most important in the letter. &ldquo;The faith&rdquo; here is the body of apostolic truth, the gospel handed down from Christ through his apostles. It was delivered &ldquo;once for all&rdquo; &mdash; complete, settled, not to be added to or subtracted from. This deposit of truth is worth defending, and Jude calls his readers to &ldquo;contend&rdquo; for it, a word drawn from the world of athletic struggle.",
      "To contend earnestly does not mean to be quarrelsome or harsh; it means to take the truth seriously enough to fight for it. The faith is not the private possession of any one generation but a treasure entrusted to the whole church, to be guarded and passed on intact. Jude summons ordinary believers, not just leaders, to this vigilant defense of the gospel.",
      "The reason for the urgency follows at once: &ldquo;For certain people have crept in unnoticed who long ago were designated for this condemnation, ungodly people, who pervert the grace of our God into sensuality and deny our only Master and Lord, Jesus Christ&rdquo; (v. 4). The danger was not an external army but an internal infiltration. False teachers had slipped quietly into the fellowship of the church, unrecognized for what they truly were.",
      "Their twofold error sets the agenda for the rest of the letter. They &ldquo;pervert the grace of our God into sensuality&rdquo; &mdash; turning the freedom of the gospel into a license to sin &mdash; and they &ldquo;deny our only Master and Lord, Jesus Christ.&rdquo; A distortion of grace and a denial of Christ&rsquo;s lordship always travel together. It is against this twin threat that Jude marshals the warnings and exhortations of his short but searing letter.",
    ],
  },
  {
    id: "False Teachers Exposed",
    heading: "False Teachers Exposed",
    reference: "Jude 5&ndash;13",
    paragraphs: [
      "Having named the intruders, Jude moves to expose their character with a series of vivid descriptions. These are not mere doctrinal mistakes to be debated politely; they are &ldquo;ungodly people&rdquo; whose lives betray their hearts. Jude is unsparing because the stakes are high &mdash; souls are endangered and the honor of Christ is at risk.",
      "He marks them out as those who &ldquo;rely on their dreams,&rdquo; who &ldquo;defile the flesh, reject authority, and blaspheme the glorious ones&rdquo; (v. 8). They claim spiritual experience and visionary insight, yet they live in moral pollution and contempt for God-given authority. Their boasting outruns their reverence; they speak arrogantly even of matters they do not understand, and &ldquo;blaspheme all that they do not understand&rdquo; (v. 10).",
      "Jude contrasts their arrogance with the restraint of the archangel Michael, who, when contending with the devil about the body of Moses, &ldquo;did not presume to pronounce a blasphemous judgment, but said, &lsquo;The Lord rebuke you&rsquo;&rdquo; (v. 9). If even an archangel showed such reverence in a heavenly dispute, how reckless are these false teachers who slander what they cannot comprehend. Their irreverence is a measure of how far they have strayed.",
      "He then pronounces a solemn woe upon them: &ldquo;Woe to them! For they walked in the way of Cain and abandoned themselves for the sake of gain to Balaam&rsquo;s error and perished in Korah&rsquo;s rebellion&rdquo; (v. 11). In a single sentence Jude links them to three notorious figures of the Old Testament &mdash; the murderous jealousy of Cain, the greed of Balaam who sold his prophetic gift for money, and the proud rebellion of Korah who challenged God&rsquo;s appointed leadership. Their portrait is drawn from the rogues&rsquo; gallery of Scripture.",
      "Jude then heaps up images of empty menace and barren beauty. They are &ldquo;hidden reefs at your love feasts, as they feast with you without fear, shepherds feeding themselves&rdquo; (v. 12). They are &ldquo;waterless clouds, swept along by winds&rdquo; that promise rain but give none; &ldquo;fruitless trees in late autumn, twice dead, uprooted&rdquo; (v. 12). They offer the appearance of nourishment while delivering nothing but danger and disappointment.",
      "The catalogue climaxes with images of restless wickedness and certain doom: they are &ldquo;wild waves of the sea, casting up the foam of their own shame; wandering stars, for whom the gloom of utter darkness has been reserved forever&rdquo; (v. 13). Behind their confident exterior lies emptiness, and beyond their present boldness lies judgment. Jude wants his readers to see the false teachers clearly &mdash; not impressive guides but deceptive perils.",
    ],
  },
  {
    id: "Warnings from History",
    heading: "Warnings from History",
    reference: "Jude 5&ndash;7, 14&ndash;16",
    paragraphs: [
      "Jude grounds his warning in the unchanging pattern of God&rsquo;s dealings with sin, reaching back into the history of God&rsquo;s judgments to remind his readers that ungodliness has never gone unanswered. &ldquo;Now I want to remind you, although you once fully knew it, that Jesus, who saved a people out of the land of Egypt, afterward destroyed those who did not believe&rdquo; (v. 5). Even those who had been rescued from Egypt were not spared when they fell into unbelief. Deliverance is no guarantee of safety apart from continued faith.",
      "His second example reaches even higher &mdash; to the angels themselves. &ldquo;And the angels who did not stay within their own position of authority, but left their proper dwelling, he has kept in eternal chains under gloomy darkness until the judgment of the great day&rdquo; (v. 6). If God did not spare angelic beings who rebelled against their appointed place, the false teachers who reject authority can expect no exemption. No creature is too exalted to fall under judgment.",
      "The third example is the cities of the plain: &ldquo;just as Sodom and Gomorrah and the surrounding cities, which likewise indulged in sexual immorality and pursued unnatural desire, serve as an example by undergoing a punishment of eternal fire&rdquo; (v. 7). The destruction of Sodom stands as a permanent and visible warning. Together these three examples &mdash; unbelieving Israel, the fallen angels, and Sodom &mdash; form a triple witness that God judges ungodliness wherever it is found.",
      "Jude draws one further witness from outside the canonical Scriptures, citing a prophecy attributed to Enoch: &ldquo;Behold, the Lord comes with ten thousands of his holy ones, to execute judgment on all and to convict all the ungodly of all their deeds of ungodliness&rdquo; (vv. 14&ndash;15). The repetition of &ldquo;ungodly&rdquo; hammers the point home: the Lord himself will come to judge the ungodliness of the ungodly, both their deeds and their harsh words spoken against him.",
      "These warnings from history serve a clear purpose. They are not told to satisfy curiosity but to sober the reader and to expose the false teachers for what they are &mdash; the latest in a long line of rebels whose end is judgment. The past is a mirror; what God has done before, he will do again.",
      "Jude returns to his targets with a final summary of their character: &ldquo;These are grumblers, malcontents, following their own sinful desires; they are loud-mouthed boasters, showing favoritism to gain advantage&rdquo; (v. 16). Discontent, self-indulgence, arrogant speech, and flattery for profit &mdash; this is the consistent fingerprint of those who creep into the church to corrupt it. Against the backdrop of God&rsquo;s historic judgments, their doom is sealed.",
    ],
  },
  {
    id: "Building Yourselves Up",
    heading: "Building Yourselves Up",
    reference: "Jude 17&ndash;23",
    paragraphs: [
      "After the long and unsparing exposure of the false teachers, Jude turns at last to his beloved readers with words of warm pastoral encouragement. &ldquo;But you must remember, beloved, the predictions of the apostles of our Lord Jesus Christ&rdquo; (v. 17). The presence of scoffers should not shake their faith; the apostles had foretold that &ldquo;in the last time there will be scoffers, following their own ungodly passions&rdquo; (v. 18). The arrival of these mockers actually confirms the apostolic word rather than undermining it.",
      "Jude diagnoses the troublemakers in a single piercing line: &ldquo;It is these who cause divisions, worldly people, devoid of the Spirit&rdquo; (v. 19). For all their claims to spiritual superiority and visionary dreams, they lack the very Spirit they boast of. Their fruit is division, not unity; their nature is worldly, not spiritual. By contrast, Jude calls the faithful to a different way of life altogether.",
      "The heart of his exhortation is a beautiful fourfold call: &ldquo;But you, beloved, building yourselves up in your most holy faith and praying in the Holy Spirit, keep yourselves in the love of God, waiting for the mercy of our Lord Jesus Christ that leads to eternal life&rdquo; (vv. 20&ndash;21). The best defense against false teaching is not merely argument but a vigorous, growing spiritual life.",
      "Each phrase repays meditation. To build yourselves up &ldquo;in your most holy faith&rdquo; is to grow ever deeper in the apostolic truth they were called to contend for. To pray &ldquo;in the Holy Spirit&rdquo; is to draw on the very Spirit the false teachers lacked. To &ldquo;keep yourselves in the love of God&rdquo; is to remain in the place of blessing and fellowship. And to wait &ldquo;for the mercy of our Lord Jesus Christ&rdquo; is to fix their hope on his return. Faith, prayer, love, and hope together form the believer&rsquo;s stability.",
      "From this secure foundation, Jude calls them outward to merciful action toward others caught in the danger. &ldquo;And have mercy on those who doubt; save others by snatching them out of the fire; to others show mercy with fear, hating even the garment stained by the flesh&rdquo; (vv. 22&ndash;23). There is to be tenderness toward the wavering and bold rescue of those on the brink of ruin.",
      "Yet this mercy is wise, not naive. Even as they reach out to save, they are to do so &ldquo;with fear,&rdquo; keeping a healthy hatred of the corruption itself &mdash; &ldquo;the garment stained by the flesh.&rdquo; Compassion for the sinner is held together with horror at the sin. Jude calls his readers to a love that rescues without being contaminated, a mercy that pulls others from the fire without being scorched by it.",
    ],
  },
  {
    id: "The Doxology",
    heading: "The Doxology",
    reference: "Jude 24&ndash;25",
    paragraphs: [
      "Jude closes his letter with one of the most magnificent doxologies in all of Scripture. After pages of warning about those who fall, who wander, and who face judgment, he lifts the eyes of his readers to the one who alone can hold them secure: &ldquo;Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy&rdquo; (v. 24). The whole letter has been a call to vigilance, and now it rests at last upon the power of God.",
      "The two great verbs of this verse carry the weight of the believer&rsquo;s assurance. God is able &ldquo;to keep you from stumbling&rdquo; &mdash; the same God who keeps his people, as Jude said at the very start of the letter, where the readers were called &ldquo;kept for Jesus Christ&rdquo; (v. 1). The letter that began with being kept ends with being kept; the safety of the saints lies not in their own grip on God but in his grip on them.",
      "And God is able &ldquo;to present you blameless before the presence of his glory.&rdquo; The same false teachers who were stained by the flesh and reserved for darkness stand in stark contrast to the destiny of the faithful, who will one day be set before God&rsquo;s glory without spot or blemish. What is more, this presentation comes &ldquo;with great joy&rdquo; &mdash; not the grudging acquittal of a reluctant judge but the overflowing gladness of a God who delights to save his people.",
      "The doxology then ascends to its full height in praise: &ldquo;to the only God, our Savior, through Jesus Christ our Lord, be glory, majesty, dominion, and authority, before all time and now and forever. Amen&rdquo; (v. 25). Against the false teachers who deny &ldquo;our only Master and Lord,&rdquo; Jude exalts the &ldquo;only God, our Savior.&rdquo; The letter that began by exposing those who denied Christ&rsquo;s lordship ends by ascribing all glory to him.",
      "Notice the sweep of time embraced in these words: &ldquo;before all time and now and forever.&rdquo; God&rsquo;s glory and dominion are not a passing reality but the everlasting truth that frames all of history. The false teachers are a momentary intrusion; the reign of God is eternal. To set the eye on his unending majesty is to be steadied against every present trouble.",
      "So Jude, having sounded such grave warnings, leaves his readers not in fear but in worship and confidence. The God who is able to keep them will keep them; the God who is able to present them blameless will do so with joy. The believer&rsquo;s final security rests in the power and faithfulness of the only God our Savior, to whom belongs all glory, both now and forever. Amen.",
    ],
  },
];

const videoItems = [
  { videoId: "6vi7CN_-NPI", title: "BibleProject - Overview - Jude" },
  { videoId: "Vb24Lk1Oh5M", title: "The Book of Jude - Contending for the Faith" },
  { videoId: "PtQywQt9w5g", title: "Jude - False Teachers and the Judgments of God" },
  { videoId: "qmFGB9Cu_Lc", title: "Now to Him Who Is Able - The Doxology of Jude" },
];

export default function ChristianBookOfJudeGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of Jude
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A short but searing letter &mdash; Jude&rsquo;s urgent call to contend for the faith once delivered, his exposure of false teachers who crept in unnoticed, his warnings drawn from the judgments of history, his exhortation to build up faith and keep in the love of God, and one of the most magnificent doxologies in all of Scripture.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Jude through visual teaching on contending for the faith, the exposure of false teachers, the warnings drawn from history, building yourselves up in the most holy faith, and the great closing doxology.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Now to Him Who Is Able</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Jude calls the church to contend earnestly for the faith once for all delivered, to discern and resist those who would corrupt it, and to build itself up in faith, prayer, love, and hope. Yet its final word is not warning but worship: the God who is able to keep you from stumbling will present you blameless before his glory with great joy &mdash; and to him belongs all glory, majesty, dominion, and authority, now and forever.
          </p>
        </div>
      </main>
    </div>
  );
}
