"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Lystra Miracle",
  "Mistaken for Gods",
  "Strengthening the Churches",
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
    id: "Overview",
    heading: "Acts 14: Boldness, Signs, Suffering, and Elders",
    reference: "Acts 14:1&ndash;28",
    paragraphs: [
      "Acts 14 is the climactic chapter of what scholars call the First Missionary Journey of Paul and Barnabas, and it reads like a compressed handbook for the theology of mission. In twenty-eight verses the reader watches two ordinary men &mdash; described in this very chapter as &ldquo;men of like nature with you&rdquo; (14:15) &mdash; preach in synagogues and market squares, perform a startling healing miracle, nearly be worshiped as pagan gods, suffer a vicious stoning that leaves Paul for dead, rise up, re-enter the city, and then methodically revisit every church they have planted in order to strengthen the disciples and appoint elders. It is a portrait of the missionary vocation in its full, unglamorous, costly reality.",
      "The chapter opens at Iconium, a city in the Roman province of Galatia (modern Turkey), where Paul and Barnabas enter the synagogue and speak so effectively that a great number of Jews and Greeks believe (14:1). But the unbelieving Jews stir up the Gentiles and poison their minds against the brothers. Rather than retreating, Paul and Barnabas remain for a long time &mdash; speaking boldly, with the Lord bearing witness by granting signs and wonders to be done by their hands (14:3). Their boldness is not bravado; it is a response to divine confirmation. God&rsquo;s own authentication of the message emboldens the messengers.",
      "The city of Iconium becomes divided &mdash; some siding with the Jews, some with the apostles. When a plot forms to stone them, Paul and Barnabas learn of it and flee to Lystra and Derbe, cities of Lycaonia, and to the surrounding region (14:6). This is not cowardice but wisdom: Jesus himself had taught his disciples that when they are persecuted in one city they are to flee to the next (Matthew 10:23), and throughout Acts the Spirit-led movement of the Gospel into new territories is often propelled by exactly this kind of pressure.",
      "At Lystra occurs the most theologically complex episode in the chapter. Paul heals a man who has been lame from birth, and the crowd, drawing on their own religious categories, concludes that the gods have come down in human form. The priest of Zeus brings oxen and garlands to offer sacrifice. Paul and Barnabas tear their garments in horror and rush out among the crowd, delivering what amounts to a brief natural theology: there is one living God who made heaven and earth and sea and all that is in them, who in past generations allowed all the nations to walk in their own ways, yet who never left himself without a witness, giving rain and fruitful seasons, filling human hearts with food and gladness (14:15&ndash;17). Even so, they can barely restrain the crowd from offering sacrifices.",
      "The episode at Lystra takes a sudden and violent turn. Jews from Antioch and Iconium arrive and persuade the crowds, who moments before had been calling Paul Hermes and preparing to worship him, to stone him. Paul is dragged out of the city and left for dead. But when the disciples gather around him, he rises up, goes back into the city, and departs the next day for Derbe. The speed of the reversal &mdash; from near-worship to near-murder &mdash; is one of the most dramatic moments in Acts, and one of the most instructive about the volatility of popular religious enthusiasm.",
      "At Derbe the mission bears fruit quietly: they preach the gospel and make many disciples (14:21). Then comes the extraordinary return journey. Rather than taking the safer coastal route home, Paul and Barnabas retrace their steps through Lystra, Iconium, and Antioch &mdash; the very cities where they have been persecuted &mdash; in order to strengthen the disciples, encourage them to continue in the faith, and appoint elders in every church with prayer and fasting. This return visit is the ecclesiological heart of the chapter: making disciples is not enough; disciples must be formed into stable, governed communities with appointed leaders who can tend the flock after the missionaries have gone.",
    ],
  },
  {
    id: "Lystra Miracle",
    heading: "The Healing at Lystra: Faith That Is Seen",
    reference: "Acts 14:8&ndash;10",
    paragraphs: [
      "The healing of the lame man at Lystra is described with remarkable economy. Luke gives us just three verses, yet they carry an enormous theological weight. The man &ldquo;had never walked&rdquo; (14:8) &mdash; his condition was not an injury or a temporary ailment but a lifelong disability, congenital and apparently permanent. He sat in the public square, the place of commerce and social interaction, hearing Paul speak. Luke does not tell us how long the man had been listening, but something in what Paul was saying was taking root.",
      "Paul, Luke tells us, &ldquo;looked intently at him and saw that he had faith to be made well&rdquo; (14:9). This phrase deserves close attention. Paul perceives faith in the man. Faith here is not merely intellectual assent to propositions about Jesus; it is an active orientation of trust, a reaching toward the word that is being spoken. The man who could not walk was nonetheless moving toward the Gospel in the way that mattered most &mdash; with the posture of his heart.",
      "The parallel with Peter&rsquo;s healing of the lame man at the Beautiful Gate (Acts 3:1&ndash;10) is unmistakable and deliberate. In both cases the man has been lame from birth. In both cases the apostle looks at the man and perceives readiness. In both cases the healing is immediate and complete. Luke is making a point: the same Spirit who worked through Peter in Jerusalem is working through Paul in the Gentile hinterland of Lycaonia. The mission to the nations is not a different enterprise from the mission to Israel; it is the same gospel, the same Spirit, the same Jesus, now moving outward in fulfillment of the promise that the apostles would be witnesses &ldquo;to the end of the earth&rdquo; (Acts 1:8).",
      "Paul&rsquo;s command is stark and public: &ldquo;Stand upright on your feet&rdquo; (14:10). He does not touch the man, does not anoint him with oil, does not pray over him at length. He speaks a command in Jesus&rsquo; name and the man responds. The text says he &ldquo;sprang up and began walking&rdquo; &mdash; the word for &lsquo;sprang up&rsquo; is the same word used in Acts 3 of the lame man who leaped up and walked and entered the Temple, &ldquo;walking and leaping and praising God.&rdquo; There is an exuberance to healing miracles in Acts that reflects the nature of what is happening: the powers of the age to come are breaking into the present age. Where the Kingdom of God comes, broken things are made whole.",
      "The crowd&rsquo;s response to the miracle, though misguided, reveals something true: the healing is extraordinary, impossible by human means, and demands a supernatural explanation. The crowd is right to recognize that something divine is happening. What they get wrong is the identity of the divine agent. They reach for the nearest available framework &mdash; the gods of Lystra, Hermes and Zeus &mdash; and apply it to what they have seen. This is not wickedness; it is the inevitable error of people attempting to make sense of genuine transcendence without the categories provided by divine revelation.",
      "The healing at Lystra is also a window into the relationship between faith and miracle in Acts. The text does not say that Paul healed the man because he had faith; it says that Paul saw the man had faith to be made well and then acted. Faith is the receptive soil in which the miracle takes root. This is consistent with the pattern throughout the Gospels and Acts: Jesus and the apostles regularly note the presence or absence of faith in connection with miraculous works. Faith does not compel God or bind him; it is the human posture of openness and trust that receives what God freely gives. The lame man at Lystra had been sitting under the sound of the Gospel long enough for faith to be kindled &mdash; and in the kindling of that faith, he was made well.",
    ],
  },
  {
    id: "Mistaken for Gods",
    heading: "Mistaken for Gods: We Are Only Men!",
    reference: "Acts 14:11&ndash;18",
    paragraphs: [
      "The crowd&rsquo;s reaction to the healing at Lystra is one of the most dramatic and instructive episodes in the Book of Acts. Seeing the lame man spring to his feet, the crowd shouts in Lycaonian &mdash; their native tongue, not Greek, which is why Paul and Barnabas do not immediately understand what is happening &mdash; &ldquo;The gods have come down to us in the likeness of men!&rdquo; (14:11). They identify Barnabas as Zeus, the chief of the gods, and Paul as Hermes, the messenger deity and spokesman, &ldquo;because he was the chief speaker&rdquo; (14:12).",
      "The identification is not random. The region around Lystra had its own local tradition, preserved in the Roman poet Ovid&rsquo;s Metamorphoses, about Zeus and Hermes visiting that very area in disguise, being refused hospitality by all but one elderly couple, and then punishing the inhospitable. The crowd&rsquo;s reaction is shaped by this tradition: these two miraculous strangers could be the gods come again, and this time the Lystrans want to get it right. They are not being foolish &mdash; they are responding with great theological seriousness to the categories they have inherited.",
      "The priest of the temple of Zeus, which stood before the city, brings oxen and garlands to the gates, intending to offer sacrifice. When Paul and Barnabas finally grasp what is happening, their reaction is immediate and physical: they tear their garments &mdash; the ancient gesture of grief and horror at blasphemy &mdash; and rush out into the crowd. &ldquo;Men, why are you doing these things? We also are men, of like nature with you&rdquo; (14:15). The Greek word underlying &lsquo;like nature&rsquo; is homoiopatheis &mdash; the same passions, the same frailty, the same humanity. Paul and Barnabas will not allow even a moment of divine honor to settle upon them.",
      "The speech that follows (14:15&ndash;17) is the first extended example in Acts of Paul addressing a purely Gentile audience with no synagogue background &mdash; people who do not know the Scriptures of Israel, who have no framework of promise and fulfillment, who know only the gods of their own tradition. Rather than quoting Isaiah or citing the Psalms, Paul begins with creation. He calls them to turn from &ldquo;these vain things to a living God, who made the heaven and the earth and the sea and all that is in them&rdquo; (14:15). The argument is from natural theology: the world is ordered, fruitful, and life-sustaining, and these facts constitute a testimony to the Creator.",
      "Paul does not say that the Lystrans have had no revelation at all. He says that God &ldquo;did not leave himself without witness&rdquo; (14:17) &mdash; the rain, the fruitful seasons, the food and gladness with which he fills human hearts are all forms of divine testimony, available to all people everywhere. This is a significant theological point. The God of the Bible is not hidden; he has never been entirely silent. What the Gentiles lacked was not all access to divine truth but the specific, verbal, propositional revelation that came through Israel, through the prophets, and now through the apostles. The Gospel does not introduce God to a world that has never heard of him; it identifies the God who has been there all along.",
      "The rhetorical situation in Acts 14 stands in contrast to Paul&rsquo;s later speech on the Areopagus in Athens (Acts 17), which addresses a philosophically sophisticated audience with a more developed natural theology argument and a direct citation of Greek poetry. But the theological logic is the same in both cases: from what can be known about God through creation, Paul moves toward the specific claims of the Gospel. Here in Lystra the argument is cut short by events; barely even with these words, Luke says, they restrained the people from offering sacrifice (14:18). The hold of the old religion on the human imagination is powerful and does not yield to argument alone.",
      "The episode carries a perpetual warning for anyone engaged in ministry or public Christian witness. The line between honoring God&rsquo;s servants and worshiping them is thinner than we like to think. The crowd at Lystra went from witnessing a miracle to preparing animal sacrifice in the space of a few verses. The instinct to divinize the human agent of divine power is ancient and persistent. Paul&rsquo;s response &mdash; tearing his clothes, crying out &ldquo;We are men!&rdquo; &mdash; is the model for all Christian leadership: every act of power, every healing, every word of knowledge, every turning of the tide belongs entirely to the living God, and those through whom he works are instruments, not sources, of divine grace.",
    ],
  },
  {
    id: "Strengthening the Churches",
    heading: "Strengthening the Churches: Through Many Tribulations",
    reference: "Acts 14:19&ndash;28",
    paragraphs: [
      "The stoning of Paul at Lystra is one of the most jarring scenes in the Book of Acts, and it arrives with breathtaking suddenness. The very crowd that had been preparing to worship Paul as Hermes is persuaded by newly arrived Jews from Antioch and Iconium to stone him. Paul is dragged out of the city and left for dead. The speed of the reversal &mdash; from divinity to corpse in a single passage &mdash; captures something essential about the volatility of crowd allegiance and the fragility of popularity as a foundation for anything.",
      "When the disciples gather around him, Paul rises up and goes back into the city. The Greek verb anast&emacr;s, translated &lsquo;rose up&rsquo; or &lsquo;got up,&rsquo; is the same verb family used throughout the New Testament for resurrection. Whether or not Luke intends a deliberate echo, the pattern is unmistakable: Paul is left for dead and rises. He does not flee; he re-enters the very city where he was stoned. Then the next day he departs for Derbe, not in retreat but in continuation of the mission. His body has been battered; his purpose has not wavered.",
      "At Derbe, Paul and Barnabas preach the gospel and make many disciples (14:21). The text is quiet about this phase &mdash; no dramatic miracles, no near-worship, no stoning. Just preaching, just disciples, just the slow ordinary work of the Word taking root in human hearts. Not every moment of faithful mission is spectacular. Much of it is exactly this: two men speaking, people listening, and the Spirit doing what only the Spirit can do.",
      "Then comes the decision that defines the chapter&rsquo;s theology of the Church. Paul and Barnabas could have taken the easy route home &mdash; continuing eastward through the Cilician gates, the mountain pass close to Paul&rsquo;s hometown of Tarsus. Instead they turn back, retracing their steps through Lystra, Iconium, and Antioch &mdash; the cities where they have been persecuted, where Paul has been stoned, where plots have been laid against their lives. They return not out of bravado but out of pastoral obligation. The people who have become disciples through their preaching need more than a conversion moment; they need to be built up, established in the faith, and organized into a community that can survive and thrive after the missionaries have moved on.",
      "The message they bring to the disciples in these cities is one of the most striking in the New Testament: &ldquo;Through many tribulations we must enter the kingdom of God&rdquo; (14:22). The word &lsquo;must&rsquo; (dei) signals divine necessity, not mere probability. Suffering is not an accident of Christian faithfulness or a temporary condition that will improve; it is the appointed path by which God&rsquo;s people walk into the Kingdom. This is not pessimism; it is the honest realism of the Gospel, grounded in the cross of Christ. The disciples in Lystra have just watched Paul get stoned and left for dead. They are being told that this &mdash; this kind of suffering, this kind of cost &mdash; is the shape of the way in.",
      "The appointment of elders in every church (14:23) is the ecclesiological climax of the chapter and of the First Missionary Journey as a whole. Paul and Barnabas do not merely plant churches and move on; they install leaders. The Greek word for &lsquo;appoint&rsquo; (cheirotone&emacr;santes) may carry the sense of ordaining by a show of hands or, more likely in this context, of appointing by the authority vested in the apostles. The elders are entrusted to the Lord in whom they have believed, through prayer and fasting &mdash; an act of intentional, sustained intercession for the communities being left behind.",
      "When Paul and Barnabas finally return to Antioch &mdash; the church that had sent them out &mdash; they gather the community and declare all that God had done with them and how he had opened a door of faith to the Gentiles (14:27). The report is theological before it is biographical: &lsquo;all that God had done with them.&rsquo; They are not reporting their own achievement; they are reporting the work of God in which they have been privileged to participate. This is the posture of all authentic mission: not &ldquo;look what we accomplished,&rdquo; but &ldquo;look what God did&rdquo; &mdash; through suffering, through miracle, through ordinary preaching, through the slow formation of communities gathered around elders and prayer and the Word.",
    ],
  },
];

const videoItems = [
  { videoId: "hNmL0QLWQOI", title: "Acts 14 Overview - Paul and Barnabas on Mission" },
  { videoId: "Y1hF6o4KPUI", title: "Paul at Lystra - Healing, Gods, and Stoning" },
  { videoId: "iS6Q9Cq8ZKo", title: "Acts 14 Bible Study - Through Many Tribulations" },
  { videoId: "lRKFpFp_2pI", title: "The First Missionary Journey - Acts 13-14 Explained" },
];

export default function Acts14GuidePage() {
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
            Acts 14: Paul, Barnabas, and the Door of Faith
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul and Barnabas at Iconium, Lystra, and Derbe &mdash; healing a lame man, nearly worshiped as Zeus and Hermes, stoned and left for dead, rising up and pressing on, strengthening new churches with the word that &ldquo;through many tribulations we must enter the kingdom of God.&rdquo;
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
            >
              {t}
            </button>
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

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.15rem" }}>Video Teaching</h3>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: "0 0 1.5rem" }}>
            Deepen your study of Acts 14 through visual teaching covering Paul and Barnabas in Iconium, the healing at Lystra, the attempt to worship them as gods, the stoning of Paul, and the strengthening of the churches on the return journey.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>&ldquo;Through Many Tribulations We Must Enter the Kingdom&rdquo;</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Acts 14 refuses to romanticize mission. It shows us apostles who are worshiped one moment and stoned the next, who preach boldly and suffer repeatedly, who return to dangerous cities not because it is safe but because the people there belong to God. The chapter&rsquo;s lasting word to the Church is the one Paul spoke to the battered disciples at Lystra: the path into the Kingdom runs through tribulation, the same path their Lord walked first, and the God who opened a door of faith to the Gentiles walks with those who go through it.
          </p>
        </div>
      </main>
    </div>
  );
}
