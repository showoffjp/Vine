"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = [
  { id: "four-views", label: "The Four Views Overview" },
  { id: "revelation", label: "Revelation in Context" },
  { id: "rapture", label: "The Rapture Debate" },
  { id: "olivet", label: "The Olivet Discourse" },
  { id: "living", label: "Living in the Last Days" },
  { id: "videos", label: "Videos" },
];

type MillennialView = {
  id: string;
  view: string;
  color: string;
  millennium: string;
  rapture: string;
  tribulation: string;
  israelChurch: string;
  scholars: string;
  summary: string;
};

const MILLENNIAL_VIEWS: MillennialView[] = [
  {
    id: "mv1",
    view: "Historic Premillennialism",
    color: ROSE,
    millennium: "Literal future 1,000-year reign of Christ on earth after his return",
    rapture: "No pre-trib rapture; church present through tribulation",
    tribulation: "Church passes through the Great Tribulation",
    israelChurch: "Church is the continuation of Israel; one people of God",
    scholars: "George Ladd, Wayne Grudem, N.T. Wright (modified)",
    summary: "Christ returns bodily before (pre) the millennium — a literal or figurative 1,000-year reign on earth. After this, the final resurrection and judgment. The church passes through the Great Tribulation. The oldest premillennial position, held by many early church fathers.",
  },
  {
    id: "mv2",
    view: "Dispensational Premillennialism",
    color: GOLD,
    millennium: "Literal future 1,000-year reign of Christ from Jerusalem",
    rapture: "Pre-tribulation rapture — church removed before the 7-year tribulation",
    tribulation: "Tribulation is primarily for Israel, not the church",
    israelChurch: "Israel and church are two distinct peoples of God with separate programs",
    scholars: "John MacArthur, Charles Ryrie, Tim LaHaye, Hal Lindsey",
    summary: "The dominant view in American evangelical popular Christianity. Christ raptures the church before a 7-year tribulation focused on Israel, then returns to establish a literal 1,000-year kingdom in Jerusalem. Developed by John Nelson Darby in the 1830s; popularized by the Scofield Reference Bible.",
  },
  {
    id: "mv3",
    view: "Amillennialism",
    color: PURPLE,
    millennium: "The millennium is the present reign of Christ (from ascension to return)",
    rapture: "No rapture; Christ returns once at the end of history",
    tribulation: "Tribulation is ongoing throughout the church age",
    israelChurch: "Church is the true Israel; OT promises fulfilled in Christ and the church",
    scholars: "Augustine, Calvin, Louis Berkhof, G.K. Beale, Sam Storms",
    summary: "The millennium of Revelation 20 is not a future earthly reign but the present reign of Christ in heaven and in the church between his first and second comings. Christ returns once at the end to judge the living and dead and establish the eternal state. The dominant view in Reformed and Lutheran traditions.",
  },
  {
    id: "mv4",
    view: "Postmillennialism",
    color: GREEN,
    millennium: "The millennium is a golden age of gospel prosperity before Christ returns",
    rapture: "No rapture; Christ returns after the millennium",
    tribulation: "The tribulation was largely fulfilled in AD 70",
    israelChurch: "Church is the new Israel; OT promises spiritually fulfilled",
    scholars: "Jonathan Edwards, Charles Hodge, B.B. Warfield, Doug Wilson",
    summary: "Through the preaching of the gospel, the world will be largely Christianized before Christ returns to an earth progressively transformed by kingdom advance. The millennium is a future era of gospel flourishing, not a literal 1,000 years. Christ returns at the end of this era to judge and consummate. Influential in Reformed circles; associated with theonomy and Christian Reconstruction.",
  },
  {
    id: "mv5",
    view: "Partial Preterism",
    color: TEAL,
    millennium: "Varies — most partial preterists are amillennial or postmillennial",
    rapture: "No rapture; the language of 1 Thes 4 is about resurrection, not removal",
    tribulation: "Matthew 24's tribulation was fulfilled in AD 70 destruction of Jerusalem",
    israelChurch: "The church is the new covenant community; Israel fulfilled in Christ",
    scholars: "R.C. Sproul, N.T. Wright, Kenneth Gentry",
    summary: "Most of the prophetic texts in Matthew 24 and Revelation 1–19 were fulfilled in the first century, particularly in the destruction of Jerusalem in AD 70. The 'great tribulation' is past. The second coming and final judgment are still future. To be distinguished from full preterism (which is outside orthodoxy) — partial preterists affirm a future bodily return of Christ.",
  },
];

const WHAT_ALL_AGREE = [
  { color: GOLD, label: "Bodily Return", text: "Jesus Christ will return bodily, visibly, and personally — Acts 1:11: \"This same Jesus... will come back in the same way you have seen him go.\"" },
  { color: BLUE, label: "Final Judgment", text: "All the dead will be raised and judged — Revelation 20:11-15; John 5:28-29; Acts 17:31." },
  { color: GREEN, label: "Resurrection", text: "Bodily resurrection of the dead — both the righteous and the wicked — is certain and central to the Christian hope." },
  { color: PURPLE, label: "New Creation", text: "God will create the new heavens and new earth — the final dwelling of the redeemed — Revelation 21:1-5; 2 Peter 3:13." },
];

const REVELATION_ITEMS = [
  {
    id: "rv1",
    title: "Revelation as Apocalyptic Literature",
    body: "Revelation belongs to the genre of Jewish apocalyptic literature — a genre that flourished from 200 BC to 200 AD (Daniel, 1 Enoch, 4 Ezra, 2 Baruch, and others). Apocalyptic literature is characterized by: (1) visions and heavenly journeys; (2) symbolic numbers, colors, and animals; (3) cosmic warfare between good and evil; (4) divine intervention to vindicate the righteous; (5) highly coded symbolic language, often to avoid detection by oppressors. Reading Revelation as a literal prediction of 21st-century geopolitics is like reading Ezekiel's dry bones as a biology textbook — it misreads the genre. The symbols were meaningful to first-century readers in their specific historical situation.",
  },
  {
    id: "rv2",
    title: "The First-Century Audience",
    body: "Revelation opens: \"John, to the seven churches in the province of Asia\" (1:4). It was written to specific first-century communities under Roman imperial pressure — probably during the reign of Domitian (c. 95 AD) or Nero (c. 68 AD). The original readers knew who the symbols pointed to. The message was primarily for them in their crisis, not primarily for 21st-century readers. This does not mean Revelation has nothing to say to us — it has an enduring message about the Lamb who conquers through suffering, the eventual defeat of all evil empires, and the coming of God's kingdom. But that message must first be understood in its original context.",
  },
  {
    id: "rv3",
    title: "666 as Nero Caesar",
    body: "Revelation 13:18: \"This calls for wisdom. Let the person who has insight calculate the number of the beast, for it is the number of a man. That number is 666.\" Gematria is the practice of assigning numerical values to letters. In Greek transliteration of the Hebrew spelling of \"Neron Caesar\" (Nero Caesar), the letters add up to 666. This is the dominant scholarly interpretation: the beast is the Roman emperor Nero, the first systematic persecutor of Christians (64 AD). This does not prevent the passage from also having typological application to future manifestations of imperial evil — but the original referent is Nero, not a future figure who has not yet appeared.",
  },
  {
    id: "rv4",
    title: "The Beast as Rome",
    body: "The seven heads of the beast (Revelation 17:9) are explicitly said to be \"seven hills\" — Rome was famously the city on seven hills. The ten horns are ten kings (17:12). The woman who rides the beast is \"the great city that rules over the kings of the earth\" (17:18) — Rome. The purple and scarlet clothing, the gold and jewels, the trade goods listed in chapter 18 — all evoke the wealth and commerce of imperial Rome. Babylon (the code name for Rome throughout Revelation) is Rome: the empire that destroyed Jerusalem in 70 AD, persecuted Christians, and demanded emperor worship. Reading the beast as a future individual misses the primary referent.",
  },
  {
    id: "rv5",
    title: "What It Says to Persecuted Christians Then and Now",
    body: "Revelation's enduring message: the Lamb who was slain has conquered; Caesar is not lord, Jesus is; the suffering of the saints is not meaningless but participates in the Lamb's own conquest; Rome's wealth and power will fall; God will judge every oppressive empire; the new creation is coming. This message is just as powerful for Christians under persecution today as it was in the first century. The book is not primarily predictive but paraenetic (exhortatory): it calls Christians to faithful witness (\"testimony of Jesus\", 12:17) and endurance even unto death, trusting that the Lamb wins.",
  },
  {
    id: "rv6",
    title: "The Lamb Who Was Slain",
    body: "The central image of Revelation is not the beast, the antichrist, or the tribulation — it is the Lamb who was slain (5:6). In Revelation 5, John hears that the Lion of Judah has conquered — and when he turns to look, he sees a Lamb, looking as if it had been slain, standing at the center of the throne. This is the interpretive key: God conquers through sacrifice, not violence. The Lamb opens the seals of history. The Lamb is worthy to receive power and honor. The Lamb is the temple and the light of the New Jerusalem. Reading Revelation as a book about violent tribulation and divine wrath misses the central christological image: Jesus wins by dying.",
  },
];

const RAPTURE_ITEMS = [
  {
    id: "rp1",
    title: "The History of the Pre-Tribulation Rapture",
    body: "The pre-tribulation rapture — the idea that the church will be secretly removed from earth before a 7-year tribulation — was virtually unknown before the 1830s. Its origin is traced to John Nelson Darby, an Anglo-Irish clergyman and founder of the Plymouth Brethren movement, who developed it around 1830–1833. Some attribute its origin to a prophetic utterance by a teenage girl, Margaret MacDonald, though Darby scholars debate this. The view was spread to America by Cyrus Scofield's Scofield Reference Bible (1909), which embedded dispensationalist notes directly into the biblical text, giving readers the impression that the pre-trib rapture was simply what the Bible taught. Before Darby, no major theologian taught this view.",
  },
  {
    id: "rp2",
    title: "Left Behind and Popular Culture",
    body: "The Left Behind series (Tim LaHaye and Jerry Jenkins, 1995–2007) sold over 80 million copies and brought the pre-tribulation rapture scenario to mass popular culture. The series presents a detailed narrative of the rapture, the emergence of the Antichrist, the Tribulation, and Armageddon as literal future events. The cultural impact has been enormous: many Christians assume these details are straightforwardly biblical. But the Left Behind scenario draws heavily on Darby's dispensationalism — specifically the ideas that the rapture is distinct from the second coming, that there is a 7-year tribulation focused on Israel, and that the Antichrist will make and break a treaty with Israel. These are contested interpretive positions, not plain readings of Scripture.",
  },
  {
    id: "rp3",
    title: "The Key Texts",
    body: "1 Thessalonians 4:16–17: \"For the Lord himself will descend from heaven with a cry of command, with the voice of an archangel, and with the sound of the trumpet of God. And the dead in Christ will rise first. Then we who are alive, who are left, will be caught up together with them in the clouds to meet the Lord in the air, and so we will always be with the Lord.\" Paul's language of \"meeting\" (Greek: apantesis) was a technical term for the formal procession of citizens going out to meet a visiting dignitary and escort him back into the city — suggesting the saints go out to meet the descending Christ and return to earth with him, not be evacuated away. Matthew 24 — the language of \"one taken and one left\" (v. 40–41) is most naturally read as the wicked being taken in judgment (as in Noah's flood, v. 39), not the righteous being raptured.",
  },
  {
    id: "rp4",
    title: "Why Most Christians Through History Did Not Hold This View",
    body: "The pre-tribulation rapture is absent from the church fathers, the medieval church, the Reformers, and the Puritans. It was not taught by Augustine, Aquinas, Luther, Calvin, Bunyan, Wesley, Whitefield, Spurgeon, or Edwards. The dominant view before Darby was that the church would be present through tribulation and persecution (historic premillennialism) or that the millennium was the present age (amillennialism) or that the world would be Christianized before Christ returned (postmillennialism). The novelty of the pre-trib rapture does not by itself disprove it — new insight into Scripture is possible — but it should prompt careful examination rather than assumption.",
  },
  {
    id: "rp5",
    title: "Posttribulation and Historic Premillennial Alternatives",
    body: "Many premillennialists hold that the church will go through (not around) the Great Tribulation — a posttribulation position. This is the view of George Ladd (A Theology of the New Testament), the most influential evangelical New Testament scholar of the 20th century on this question. Ladd argued that the church is not promised exemption from tribulation — in fact, the NT consistently prepares Christians for persecution. The \"rapture\" of 1 Thessalonians 4 is not a secret evacuation but the public meeting of the saints with the descending Christ at his visible, audible, triumphant return. Historic premillennialism has deep roots in the early church (Justin Martyr, Irenaeus, Tertullian, Hippolytus) and does not depend on the 19th-century innovations of dispensationalism.",
  },
];

const OLIVET_ITEMS = [
  {
    id: "od1",
    title: "What Jesus Actually Said",
    body: "Matthew 24 (parallel: Mark 13, Luke 21) is Jesus's response to the disciples' question: \"When will these things happen?\" — referring to Jesus's prediction that \"not one stone here will be left on another\" (v. 2) about the temple. Jesus's answer interweaves two questions: the destruction of the temple (which happened in AD 70) and the end of the age. The challenge for interpreters: determining which verses refer to AD 70, which refer to the end, and which refer to both. N.T. Wright argues that most of Matthew 24:1–35 refers to the events leading up to and including AD 70; vv. 36 onward shift to the final parousia. Others (including many dispensationalists) read the entire discourse as referring to the still-future seven-year tribulation.",
  },
  {
    id: "od2",
    title: "The Destruction of Jerusalem as Partial Fulfillment",
    body: "In 70 AD, the Roman general Titus besieged Jerusalem, destroyed the temple (fulfilling v. 2: not one stone left on another), and slaughtered or enslaved the population. The Jewish historian Josephus records that over 1 million Jews died and 97,000 were enslaved. This was a catastrophe of almost incomprehensible proportions for first-century Judaism. Jesus's language of \"great distress, unequaled from the beginning of the world until now\" (v. 21) fits this event, as does his specific instruction to \"flee to the mountains\" (v. 16) — which early Jewish Christians actually did, fleeing to Pella in the Jordan Valley. The warning made practical sense to first-century readers facing a specific historical event.",
  },
  {
    id: "od3",
    title: "The \"This Generation\" Problem",
    body: "Matthew 24:34: \"Truly I tell you, this generation will certainly not pass away until all these things have happened.\" This is one of the most debated verses in eschatology. Three main interpretations: (1) \"This generation\" means the generation alive when Jesus spoke — all the events described (including the destruction of Jerusalem) happened before that generation passed (within 40 years, before 70 AD). (2) \"This generation\" means the generation alive when the signs begin to appear at the end of history. (3) \"This generation\" means the Jewish nation/race — Israel will survive until the end. The first reading requires that most of Matthew 24 refers to AD 70; the second requires a gap of thousands of years; the third is linguistically forced.",
  },
  {
    id: "od4",
    title: "The Abomination of Desolation",
    body: "Matthew 24:15: \"So when you see standing in the holy place the abomination that causes desolation, spoken of through the prophet Daniel — let the reader understand.\" Daniel's abomination of desolation (Daniel 9:27; 11:31; 12:11) originally referred to Antiochus Epiphanes IV desecrating the Jerusalem temple by sacrificing a pig on the altar in 167 BC. Jesus applies this language to a future event. For most preterists and partial preterists, the fulfillment is the Roman armies surrounding Jerusalem in 66–70 AD (Luke's version says \"when you see Jerusalem surrounded by armies,\" 21:20 — the armies being the abomination). For dispensationalists, it refers to a future antichrist desecrating a rebuilt Jerusalem temple.",
  },
  {
    id: "od5",
    title: "Signs of the Times vs. Imminence",
    body: "A fundamental tension in eschatological expectation: on one hand, Jesus gives signs (wars, rumors of wars, famines, earthquakes, false prophets, the abomination of desolation) that precede the end. On the other hand, Jesus insists that \"no one knows the day or the hour\" (v. 36) and uses parables about the master returning unexpectedly (the thief in the night, the wise and foolish virgins). The signs seem to enable prediction; the imminence language seems to forbid it. The resolution: the signs are not a timeline for prediction but a call to readiness. Christians in every generation should live as if Christ could return at any moment — not because they know he will, but because no one knows when he will.",
  },
  {
    id: "od6",
    title: "How to Read Apocalyptic Language",
    body: "Matthew 24:29: \"Immediately after the distress of those days the sun will be darkened, and the moon will not give its light; the stars will fall from the sky, and the heavenly bodies will be shaken.\" This is apocalyptic cosmic imagery — standard Old Testament prophetic language for major historical upheavals. Isaiah uses nearly identical language to describe the fall of Babylon (13:10) and Edom (34:4) — events that clearly happened in history without the literal sun going dark. NT Wright: this is not a description of the end of the physical universe but apocalyptic imagery for a world-shaking historical event. Reading it as a literal description of cosmic catastrophe imports a wooden literalism into a literary genre that works precisely through symbolic hyperbole.",
  },
];

const LIVING_ITEMS = [
  {
    id: "ll1",
    title: "The NT Authors Believed They Were in the Last Days",
    body: "Acts 2:17 — Peter at Pentecost applies Joel's prophecy of the last days directly to the present: \"In the last days, God says, I will pour out my Spirit on all people.\" Hebrews 1:2: \"In these last days he has spoken to us by his Son.\" 1 John 2:18: \"Dear children, this is the last hour.\" James 5:3: \"You have hoarded wealth in the last days.\" The NT authors did not think they were waiting for the last days — they believed the last days had begun with the incarnation, death, resurrection, and ascension of Jesus. The age to come has broken in. Christians have always been living in the last days, in the overlap of the ages.",
  },
  {
    id: "ll2",
    title: "The \"Already but Not Yet\" Tension",
    body: "The most important category in NT eschatology is the \"already but not yet\" — the tension between what has already been accomplished in Christ and what is not yet consummated. The kingdom of God has already come (Matthew 12:28); it is not yet fully manifest (Matthew 6:10). The Spirit has already been poured out; the resurrection has not yet occurred. Satan has already been defeated (John 12:31); he is not yet fully bound. Eternal life is already possessed by believers (John 6:47); it has not yet been fully revealed (1 John 3:2). This tension is not a problem to be resolved but the shape of the Christian life — living in the overlap of the ages, between Christ's first coming and his return.",
  },
  {
    id: "ll3",
    title: "How Eschatology Shapes Ethics",
    body: "The hope of the new creation and the return of Christ is not an excuse for withdrawal from the world but a motive for engagement. If God is going to renew creation — not destroy it — then caring for creation matters now. If God will establish justice for every oppressed person — then pursuing justice now is eschatologically grounded, not abandoned because \"Jesus is coming anyway.\" If human work will somehow carry over into the new creation (1 Corinthians 15:58; Revelation 21:24–26) — then work done faithfully and beautifully has eternal weight. Eschatological hope produces diligence, generosity, and justice — not passivity.",
  },
  {
    id: "ll4",
    title: "Eschatological Urgency Without Date-Setting",
    body: "Jesus explicitly forbids date-setting (Matthew 24:36: \"no one knows the day or the hour\") while insisting on eschatological urgency (\"stay awake, because you do not know on what day your Lord will come,\" v. 42). The two are not contradictory: precisely because we do not know when he will return, we must always be ready. History has seen an unbroken series of eschatological predictions that have all failed — William Miller (1844), various rapture date-setters, Harold Camping (1994, 2011). Every prediction has been wrong. Jesus said it would be so. The appropriate response is not to calculate a new date but to live faithfully in the present with an expectant, unsurprised heart.",
  },
  {
    id: "ll5",
    title: "The Danger of Rapture Anxiety",
    body: "One pastoral consequence of the pre-tribulation rapture culture is Rapture anxiety — a chronic fear of being left behind, of missing the rapture, of not being \"good enough\" to be taken. This is not a trivial concern: many adults who grew up in rapture-focused churches report genuine psychological suffering from this fear. The irony: the pre-trib rapture was supposedly \"good news\" — the church would be protected from tribulation. But the effect for many people has been fear rather than hope. Healthy Christian eschatology should produce hope (\"looking forward to the blessed hope,\" Titus 2:13), not anxiety. The return of Christ is the consummation of redemption, not a cosmic sorting mechanism to be feared.",
  },
];

const VIDEOS = [
  { videoId: "s4YbY7LfFds", title: "N.T. Wright on Revelation" },
  { videoId: "jqJsKTn_5aQ", title: "Tim Keller on Eschatology and Culture" },
  { videoId: "uSWMdl-BRGI", title: "John MacArthur vs. Alternative View Comparison" },
];

export default function ChristianEndTimesGuide() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("four-views");
  const [openView, setOpenView] = useState("");
  const [rvOpen, setRvOpen] = useState("");
  const [rpOpen, setRpOpen] = useState("");
  const [odOpen, setOdOpen] = useState("");
  const [llOpen, setLlOpen] = useState("");

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const activeColor = BLUE;

  function Accordion({
    items,
    openId,
    setOpenId,
    accentColor,
  }: {
    items: { id: string; title: string; body: string }[];
    openId: string;
    setOpenId: (v: string) => void;
    accentColor: string;
  }) {
    return (
      <div style={{ display: "grid", gap: 8 }}>
        {items.map((it) => (
          <div
            key={it.id}
            style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}
          >
            <button
              onClick={() => setOpenId(openId === it.id ? "" : it.id)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "1rem 1.25rem",
                background: openId === it.id ? `rgba(59,130,246,0.07)` : "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem" }}>
                {it.title}
              </span>
              <span style={{ color: MUTED, fontSize: "1.1rem", flexShrink: 0 }}>
                {openId === it.id ? "−" : "+"}
              </span>
            </button>
            {openId === it.id && (
              <div style={{ padding: "0 1.25rem 1.25rem", borderTop: `1px solid ${BORDER}` }}>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                    marginTop: "1rem",
                  }}
                >
                  {it.body}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  function SectionHeader({
    title,
    subtitle,
    color,
  }: {
    title: string;
    subtitle: string;
    color: string;
  }) {
    return (
      <div
        style={{
          background: CARD,
          border: `1px solid ${BORDER}`,
          borderRadius: 16,
          padding: "1.5rem",
          marginBottom: "1.5rem",
          borderLeft: `4px solid ${color}`,
        }}
      >
        <h2 style={{ fontWeight: 800, color: TEXT, fontSize: "1.15rem", marginBottom: "0.5rem" }}>
          {title}
        </h2>
        <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{subtitle}</p>
      </div>
    );
  }

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
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(59,130,246,0.12)",
              border: `1px solid rgba(59,130,246,0.25)`,
              borderRadius: 20,
              padding: "0.35rem 1rem",
              fontSize: "0.78rem",
              color: BLUE,
              fontWeight: 600,
              marginBottom: "1rem",
              letterSpacing: "0.05em",
            }}
          >
            ESCHATOLOGY &middot; END TIMES
          </div>
          <h1
            style={{
              fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Christian End Times Guide
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: 660,
              margin: "0 auto",
            }}
          >
            Eschatology without sensationalism &mdash; what the four major views actually teach,
            how to read Revelation as a first-century document, and what all Christians
            agree on: Jesus is coming back.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: "2rem",
            justifyContent: "center",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer",
                border: `1px solid ${tab === t.id ? activeColor : BORDER}`,
                background: tab === t.id ? "rgba(59,130,246,0.12)" : "transparent",
                color: tab === t.id ? activeColor : MUTED,
                transition: "all 0.18s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab: Four Views */}
        {tab === "four-views" && (
          <div>
            <SectionHeader
              title="The Four Millennial Views"
              subtitle="Premillennialism (historic &amp; dispensational), Amillennialism, Postmillennialism, and Partial Preterism &mdash; with a comparison chart and what all four agree on."
              color={BLUE}
            />

            {/* What all views agree on */}
            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: "0.95rem",
                  marginBottom: "0.75rem",
                }}
              >
                What All Views Agree On
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "0.75rem",
                }}
              >
                {WHAT_ALL_AGREE.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      padding: "1rem",
                      borderTop: `3px solid ${item.color}`,
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        color: item.color,
                        fontSize: "0.82rem",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {item.label}
                    </div>
                    <p style={{ color: MUTED, fontSize: "0.8rem", lineHeight: 1.6 }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Four Views */}
            <h3
              style={{
                fontWeight: 700,
                color: TEXT,
                fontSize: "0.95rem",
                marginBottom: "0.75rem",
              }}
            >
              The Five Major Positions
            </h3>
            <div style={{ display: "grid", gap: 8 }}>
              {MILLENNIAL_VIEWS.map((mv) => (
                <div
                  key={mv.id}
                  style={{
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => setOpenView(openView === mv.id ? "" : mv.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "1rem 1.25rem",
                      background:
                        openView === mv.id
                          ? "rgba(59,130,246,0.07)"
                          : "transparent",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          background: mv.color,
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem" }}>
                        {mv.view}
                      </span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.1rem", flexShrink: 0 }}>
                      {openView === mv.id ? "−" : "+"}
                    </span>
                  </button>
                  {openView === mv.id && (
                    <div
                      style={{
                        padding: "1rem 1.25rem 1.25rem",
                        borderTop: `1px solid ${BORDER}`,
                      }}
                    >
                      <p
                        style={{
                          color: MUTED,
                          fontSize: "0.88rem",
                          lineHeight: 1.75,
                          marginBottom: "1rem",
                        }}
                      >
                        {mv.summary}
                      </p>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                          gap: "0.5rem",
                        }}
                      >
                        {[
                          { label: "Millennium", value: mv.millennium },
                          { label: "Rapture", value: mv.rapture },
                          { label: "Tribulation", value: mv.tribulation },
                          { label: "Israel &amp; Church", value: mv.israelChurch },
                          { label: "Key Scholars", value: mv.scholars },
                        ].map((row, i) => (
                          <div
                            key={i}
                            style={{
                              background: BG,
                              border: `1px solid ${BORDER}`,
                              borderRadius: 8,
                              padding: "0.6rem 0.75rem",
                            }}
                          >
                            <div
                              style={{
                                color: mv.color,
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                marginBottom: "0.2rem",
                              }}
                              dangerouslySetInnerHTML={{ __html: row.label }}
                            />
                            <div
                              style={{ color: TEXT, fontSize: "0.82rem", lineHeight: 1.5 }}
                            >
                              {row.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Revelation in Context */}
        {tab === "revelation" && (
          <div>
            <SectionHeader
              title="Revelation in Context"
              subtitle="Apocalyptic genre, first-century audience, 666 as Nero, the beast as Rome &mdash; reading Revelation as it was written, not as a 21st-century newspaper."
              color={ROSE}
            />
            <div
              style={{
                background: "rgba(225,29,72,0.07)",
                border: `1px solid rgba(225,29,72,0.2)`,
                borderRadius: 14,
                padding: "1.25rem 1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  color: MUTED,
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                }}
              >
                &ldquo;The genre of a document determines how it should be read. Revelation is
                apocalyptic literature, not a prophetic timeline. Reading it as a detailed
                prediction of 21st-century events is like reading Aesop&rsquo;s fables as wildlife
                biology.&rdquo;
              </p>
            </div>
            <Accordion
              items={REVELATION_ITEMS}
              openId={rvOpen}
              setOpenId={setRvOpen}
              accentColor={ROSE}
            />
          </div>
        )}

        {/* Tab: Rapture Debate */}
        {tab === "rapture" && (
          <div>
            <SectionHeader
              title="The Rapture Debate"
              subtitle="The history of the pre-tribulation rapture (John Nelson Darby, 1830s), Left Behind, the key texts, and why most Christians through history did not hold this view."
              color={GOLD}
            />
            <div
              style={{
                background: "rgba(217,119,6,0.07)",
                border: `1px solid rgba(217,119,6,0.2)`,
                borderRadius: 14,
                padding: "1.25rem 1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.75 }}>
                The pre-tribulation rapture is one of the most widely believed and least
                historically attested doctrines in modern evangelicalism. Understanding its
                origin and the alternatives helps Christians engage the texts themselves rather
                than inherited assumptions.
              </p>
            </div>
            <Accordion
              items={RAPTURE_ITEMS}
              openId={rpOpen}
              setOpenId={setRpOpen}
              accentColor={GOLD}
            />
          </div>
        )}

        {/* Tab: Olivet Discourse */}
        {tab === "olivet" && (
          <div>
            <SectionHeader
              title="The Olivet Discourse"
              subtitle="Matthew 24 explained &mdash; AD 70 as partial fulfillment, the &ldquo;this generation&rdquo; problem, signs vs. imminence, and how to read apocalyptic language."
              color={TEAL}
            />
            <div
              style={{
                background: "rgba(13,148,136,0.07)",
                border: `1px solid rgba(13,148,136,0.2)`,
                borderRadius: 14,
                padding: "1.25rem 1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  color: MUTED,
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                }}
              >
                &ldquo;Truly I tell you, this generation will certainly not pass away until all
                these things have happened.&rdquo;
                <span style={{ color: TEAL, fontWeight: 600, fontStyle: "normal" }}>
                  {" "}
                  &mdash; Matthew 24:34
                </span>
              </p>
            </div>
            <Accordion
              items={OLIVET_ITEMS}
              openId={odOpen}
              setOpenId={setOdOpen}
              accentColor={TEAL}
            />
          </div>
        )}

        {/* Tab: Living in the Last Days */}
        {tab === "living" && (
          <div>
            <SectionHeader
              title="Living in the Last Days"
              subtitle="The NT authors believed they were in the last days. The &ldquo;already but not yet&rdquo; tension, eschatology and ethics, urgency without date-setting, and the danger of Rapture anxiety."
              color={PURPLE}
            />
            <div
              style={{
                background: "rgba(107,79,187,0.07)",
                border: `1px solid rgba(107,79,187,0.2)`,
                borderRadius: 14,
                padding: "1.25rem 1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "0.75rem",
                }}
              >
                {[
                  { text: "Acts 2:17", sub: "Pentecost as the last days" },
                  { text: "Hebrews 1:2", sub: "The Son speaks in these last days" },
                  { text: "1 John 2:18", sub: "This is the last hour" },
                  { text: "James 5:3", sub: "Wealth hoarded in the last days" },
                ].map((ref, i) => (
                  <div
                    key={i}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 10,
                      padding: "0.75rem",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.88rem" }}>
                      {ref.text}
                    </div>
                    <div style={{ color: MUTED, fontSize: "0.78rem", marginTop: "0.2rem" }}>
                      {ref.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Accordion
              items={LIVING_ITEMS}
              openId={llOpen}
              setOpenId={setLlOpen}
              accentColor={PURPLE}
            />
          </div>
        )}

        {/* Tab: Videos */}
        {tab === "videos" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <h2
                style={{
                  fontWeight: 800,
                  color: TEXT,
                  fontSize: "1.15rem",
                  marginBottom: "0.5rem",
                }}
              >
                Video Teaching
              </h2>
              <p style={{ color: MUTED, fontSize: "0.88rem" }}>
                N.T. Wright on Revelation, Tim Keller on eschatology and culture, and a
                comparison of millennial views.
              </p>
            </div>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId}>
                  <p
                    style={{
                      color: MUTED,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {v.title}
                  </p>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
