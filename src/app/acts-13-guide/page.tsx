"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Church Sends Paul and Barnabas",
  "Preaching in Cyprus",
  "The Antioch Sermon",
  "Turning to the Gentiles",
  "Application",
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
    id: "Overview",
    heading: "Overview of Acts 13",
    reference: "Acts 13:1&ndash;52",
    paragraphs: [
      "Acts 13 is one of the great turning points in the entire New Testament. What began as a Jerusalem-centered movement, expanding outward through persecution and the Spirit&rsquo;s leading, now takes a decisive leap into the wider Gentile world. The chapter opens at Antioch in Syria &mdash; the cosmopolitan city that has become the second great center of the early church &mdash; and ends with Paul and Barnabas shaking the dust from their feet against Jewish opponents in Pisidian Antioch while the Gentiles of the region rejoice and the word of the Lord spreads throughout the whole region.",
      "The chapter pivots on two events that together define the missionary character of the church. The first is the commissioning at Antioch, where the Holy Spirit intervenes in a prayer-and-fasting gathering of five named leaders and declares that Barnabas and Saul are set apart for a specific work to which God has called them. The second is the great synagogue sermon in Pisidian Antioch (vv. 16&ndash;41) &mdash; the longest recorded speech of Paul in the book of Acts &mdash; which traces the history of Israel from the Exodus to the resurrection of Jesus and declares that in Christ the promise made to David is fulfilled and forgiveness of sins is available to all who believe.",
      "Luke&rsquo;s narrative artistry is evident throughout the chapter. He introduces the five prophets and teachers at Antioch with names that signal the remarkable diversity of this community &mdash; a Levite from Cyprus, a man called Niger (suggesting North African origin), a man from Cyrene, a childhood companion of the Herodian tetrarch, and Saul of Tarsus. This multiethnic, multicultural leadership team is the launching pad for the mission to the nations. The Spirit&rsquo;s choice falls not on a homogeneous religious establishment but on a gathered, fasting, worshiping community.",
      "The first missionary journey that begins in Acts 13 will take Paul and Barnabas through Cyprus and into the southern interior of Asia Minor, planting churches in Pisidian Antioch, Iconium, Lystra, and Derbe before returning to Antioch in Syria to report. But Acts 13 captures the inaugural energy of that journey &mdash; the moment when the church moved from reactive expansion (scattered by persecution) to proactive mission (sent by the Spirit). It is the chapter in which the church learns what it will always need to know: that the mission to the nations is not a human initiative supplemented by divine blessing, but a divine initiative executed through human obedience.",
      "The chapter also introduces the pattern that will characterize Paul&rsquo;s entire missionary strategy: to the Jew first, and then to the Greek. In every city Paul enters, he begins in the synagogue, addressing fellow Jews and God-fearers who already know the Scriptures. When the Jewish community divides &mdash; some believing, some rejecting &mdash; Paul turns explicitly to the Gentiles. This pattern is not merely tactical; it is theological. Paul&rsquo;s letter to the Romans will later explain the deep logic: the gospel is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek (Romans 1:16).",
      "For the contemporary church, Acts 13 raises the irreducible question of how the Spirit calls, equips, and sends the community of God into mission. The answer the chapter provides is not a program or a methodology but a posture: a gathered community worshiping, fasting, and open to the Spirit&rsquo;s interruption. Out of that posture comes the most consequential missionary movement in human history.",
    ],
  },
  {
    id: "The Church Sends Paul and Barnabas",
    heading: "The Church Sends Paul and Barnabas",
    reference: "Acts 13:1&ndash;5",
    paragraphs: [
      "The opening verses of Acts 13 are among the most significant in the book, not only for what they describe but for what they reveal about the nature of the church that produced the first deliberate missionary expedition. Luke begins with a list: &ldquo;Now there were in the church at Antioch prophets and teachers, Barnabas, Simeon who was called Niger, Lucius of Cyrene, Manaen a lifelong friend of Herod the tetrarch, and Saul&rdquo; (13:1). Five names, five backgrounds, and behind each name a story of how the gospel had crossed the most formidable social and ethnic barriers of the ancient world.",
      "Barnabas is already well known to Luke&rsquo;s readers &mdash; the Levite from Cyprus who sold a field and laid the money at the apostles&rsquo; feet (4:36&ndash;37), who vouched for the newly converted Saul when the Jerusalem believers were afraid of him (9:27), and who was sent to Antioch to investigate reports of Gentile conversions (11:22). Simeon called Niger &mdash; Niger being the Latin word for black &mdash; is most likely a man of African descent, possibly from North Africa. Lucius of Cyrene connects the leadership to the Libyan coast. Manaen&rsquo;s description as a lifelong friend (syntrophos, literally &ldquo;foster brother&rdquo;) of Herod Antipas, the tetrarch who executed John the Baptist, is a stunning detail: the gospel had penetrated the very court of Israel&rsquo;s most notorious political family.",
      "It is while this diverse leadership community is &ldquo;worshiping the Lord and fasting&rdquo; (13:2) that the Holy Spirit speaks. Luke does not explain how the Spirit communicated &mdash; through a prophet, through a consensus impression, through a word of knowledge. He records only the content: &ldquo;Set apart for me Barnabas and Saul for the work to which I have called them.&rdquo; The phrasing is deliberate and significant. The Spirit does not say &ldquo;the work you should do&rdquo; or &ldquo;the work the church has planned&rdquo; but &ldquo;the work to which I have called them.&rdquo; The mission already exists in God&rsquo;s intention; the community is being invited to participate in it through the act of release.",
      "The community&rsquo;s response is immediate and liturgically shaped. &ldquo;Then after fasting and praying they laid their hands on them and sent them off&rdquo; (13:3). The laying on of hands is not ordination in the formal sense &mdash; Barnabas and Saul are already apostles and teachers; this is not the conferral of an office. It is an act of solidarity, blessing, and release &mdash; the community placing its hands on those who are going and saying, in effect: you carry us with you, and we commend you to the God who has called you. The fasting that accompanies it signals the seriousness of the act and the depth of dependence on God.",
      "Verse 4 provides the theological frame that governs the entire missionary journey: &ldquo;So, being sent out by the Holy Spirit, they went down to Seleucia.&rdquo; Luke does not say they were sent by the church, though they were. He does not say they were sent by the leaders of Antioch, though those leaders laid hands on them. He says they were sent by the Holy Spirit. The human action of commissioning and sending is real and important, but it is instrumental to and derivative of the prior divine sending. The missionary is always, at the deepest level, one who has been sent by God.",
      "They sail from Seleucia to Cyprus &mdash; the native island of Barnabas &mdash; and when they arrive at Salamis they begin, characteristically, in the synagogues of the Jews. With them goes John Mark, a cousin of Barnabas who will later become a point of serious contention (15:37&ndash;39) but who here simply appears as a helper. The team of three has been set apart, sent, and they have arrived at the first stop on the journey. The mission to the Gentile world has begun.",
    ],
  },
  {
    id: "Preaching in Cyprus",
    heading: "Preaching in Cyprus",
    reference: "Acts 13:4&ndash;12",
    paragraphs: [
      "Cyprus was a natural starting point for Barnabas and Saul&rsquo;s first missionary journey. It was Barnabas&rsquo;s home island (4:36), it had a significant Jewish community with multiple synagogues (Luke says &ldquo;synagogues&rdquo; in the plural at 13:5), and it was already a place where the gospel had penetrated through the scattering of Jewish believers after Stephen&rsquo;s death (11:19&ndash;20). The team was not entering completely foreign territory; they were working in a soil that had already received some seed, now bringing apostolic proclamation and depth.",
      "They travel the length of the island from Salamis on the eastern coast to Paphos on the western coast, and it is at Paphos that the narrative slows down to record a significant incident. There they encounter a Jewish false prophet named Bar-Jesus (meaning &ldquo;son of Joshua&rdquo; or &ldquo;son of Jesus&rdquo; &mdash; a name of considerable irony) who is also called Elymas, which Luke translates as &ldquo;the magician.&rdquo; He is an attendant of Sergius Paulus, the Roman proconsul of Cyprus, who is described as &ldquo;an intelligent man&rdquo; who summoned Barnabas and Saul and wanted to hear the word of God.",
      "The conflict that follows is the first direct confrontation of the missionary journey with supernatural opposition. Bar-Jesus/Elymas opposes Barnabas and Saul and seeks to turn the proconsul away from the faith. Luke&rsquo;s narrative then records something significant: Saul, who is also called Paul &mdash; the first use of his Roman name, and a subtle signal that the Gentile mission is underway &mdash; filled with the Holy Spirit, looks intently at Elymas and speaks words of striking severity.",
      "&ldquo;You son of the devil, you enemy of all righteousness, full of all deceit and villainy, will you not stop making crooked the straight paths of the Lord? And now, behold, the hand of the Lord is upon you, and you will be blind and unable to see the sun for a time&rdquo; (13:10&ndash;11). The judgment falls immediately: Elymas is struck blind, groping for someone to lead him by the hand. The irony of the moment is pointed &mdash; the man who sought to keep the proconsul in spiritual darkness is himself plunged into physical darkness. The &ldquo;son of Jesus&rdquo; proves to be a son of the devil; the opponent of the Straight Way is made unable to find his way.",
      "The proconsul, watching all this, believes. Luke notes carefully that he believed &ldquo;when he saw what had occurred&rdquo; but specifies the content of his astonishment: he was astonished &ldquo;at the teaching of the Lord&rdquo; (13:12). The miracle confirmed the message, but it was the message that produced faith. Sergius Paulus becomes the first named Gentile convert of the first missionary journey &mdash; a Roman official of considerable rank, won to Christ on the island of Barnabas, at the beginning of the journey that will ultimately carry the gospel to Rome itself.",
      "The Cyprus episode establishes several patterns that will recur throughout Paul&rsquo;s missionary career. The gospel will consistently encounter supernatural and human opposition. That opposition will be overmatched by the Spirit who accompanies and empowers the messengers. Gentiles of high social standing are not outside the reach of the gospel; the proclaimed word, confirmed by the Spirit&rsquo;s action, is sufficient to produce genuine faith. And Paul&rsquo;s leadership is now in evidence &mdash; from this point in Acts, the team is consistently referred to as &ldquo;Paul and Barnabas&rdquo; rather than &ldquo;Barnabas and Saul.&rdquo;",
    ],
  },
  {
    id: "The Antioch Sermon",
    heading: "The Antioch Sermon",
    reference: "Acts 13:13&ndash;41",
    paragraphs: [
      "The synagogue sermon in Pisidian Antioch (vv. 16&ndash;41) is the longest recorded speech of Paul in Acts, and it is the fullest window Luke gives us into how Paul proclaimed the gospel in a Jewish context. It is a magnificent piece of theological argument, tracing the arc of Israel&rsquo;s history from the patriarchs through the Exodus, the conquest, the period of the judges, the monarchy, John the Baptist, the death and resurrection of Jesus, and the promise of David &mdash; all converging on the declaration that in Jesus of Nazareth God has fulfilled what he promised to the fathers.",
      "Paul begins by rehearsing the great acts of God in Israel&rsquo;s history: the election of the patriarchs, the Exodus from Egypt, the forty years in the wilderness, the gift of the land, and the judges up to Samuel. He is not telling his audience something they do not know; he is establishing the shared narrative, the story within which everything else must be understood. &ldquo;The God of this people Israel chose our fathers&rdquo; (13:17) &mdash; the first person plural is deliberate; Paul stands within the story he is telling, not outside it.",
      "The turn to David in verses 22&ndash;23 is the hinge on which the whole argument pivots. God raised up David as a man after his own heart, who would do all his will &mdash; and then the decisive move: &ldquo;Of this man&rsquo;s offspring God has brought to Israel a Savior, Jesus, as he promised&rdquo; (13:23). The resurrection is the fulfillment of God&rsquo;s promise to David; Jesus is not merely a prophet or a reformer but the Davidic heir through whom God keeps his ancient covenant. Paul reinforces this with the quotation from Psalm 2 (&ldquo;You are my Son, today I have begotten you&rdquo;) and from Isaiah 55 (&ldquo;I will give you the holy and sure blessings of David&rdquo;) &mdash; each text pointing beyond the historical David to the one in whom David&rsquo;s line reaches its ultimate fulfillment.",
      "What makes the Pisidian Antioch sermon so theologically dense is its treatment of forgiveness. Paul builds to the climax with precision: &ldquo;Let it be known to you therefore, brothers, that through this man forgiveness of sins is proclaimed to you, and by him everyone who believes is freed from everything from which you could not be freed by the law of Moses&rdquo; (13:38&ndash;39). This is the gospel in its Pauline sharpness. The law could not provide what it was never designed to provide &mdash; the final justification of the sinner before a holy God. Jesus can and does. &ldquo;Everyone who believes&rdquo; is freed from what the law could not free them from. The scope is universal; the condition is faith.",
      "Paul closes the sermon with a warning drawn from Habakkuk 1:5 &mdash; &ldquo;Look, you scoffers, be astounded and perish; for I am doing a work in your days, a work that you will not believe, even if one tells it to you&rdquo; (13:41). The warning is for those who, having heard what God is doing in Jesus, choose not to believe. The citation of Habakkuk is pointed: in its original context it described the coming of the Babylonians as an unbelievable act of judgment on Israel. Paul applies it to the unbelievable act of grace in the resurrection of Christ, warning that the response of scoffing unbelief brings its own form of judgment. The sermon ends not with triumphalism but with urgency.",
      "The immediate response to the sermon is remarkable. As Paul and Barnabas were leaving, &ldquo;the people begged that these things might be told them the next Sabbath&rdquo; (13:42). And on the next Sabbath &ldquo;almost the whole city gathered to hear the word of the Lord&rdquo; (13:44). The gospel Paul preached was not a theological abstraction; it was a word that created hunger, that drew people back, that spread from the synagogue into the city at large. The power behind the preaching was evident not in Paul&rsquo;s rhetorical technique but in the Spirit who made the word living and effective.",
    ],
  },
  {
    id: "Turning to the Gentiles",
    heading: "Turning to the Gentiles",
    reference: "Acts 13:42&ndash;52",
    paragraphs: [
      "The closing movement of Acts 13 is one of the most consequential passages in the entire book of Acts. When the Jewish leaders of Pisidian Antioch see the crowds gathering on the second Sabbath, they are filled with jealousy and begin to contradict Paul&rsquo;s message with blasphemy. Their opposition is not primarily theological; it is reactive, driven by the threatening size of the crowd Paul has attracted. The gospel&rsquo;s popularity becomes the occasion for organized resistance. This is the moment when Paul makes the explicit turn that will define the rest of his ministry.",
      "&ldquo;And Paul and Barnabas spoke out boldly, saying, &lsquo;It was necessary that the word of God be spoken first to you. Since you thrust it aside and judge yourselves unworthy of eternal life, behold, we are turning to the Gentiles&rsquo;&rdquo; (13:46). The word &ldquo;necessary&rdquo; (dei) is the same word Luke uses throughout his Gospel for what Jesus &ldquo;must&rdquo; do &mdash; the necessity of the divine plan. It was necessary to go to the Jews first; that was not a mere missionary convenience but a theological requirement arising from God&rsquo;s covenant with Israel. But the rejection of that word by its intended first recipients opens the way explicitly to the Gentiles.",
      "Paul then reaches for Scripture to authorize this turn. He quotes Isaiah 49:6 &mdash; part of the great Servant Song of the Suffering Servant &mdash; and applies it directly to himself and Barnabas: &ldquo;For so the Lord has commanded us, saying, I have made you a light for the Gentiles, that you may bring salvation to the ends of the earth&rdquo; (13:47). In Isaiah, the &ldquo;light for the Gentiles&rdquo; is the Servant of the Lord, the one who will restore Jacob and be a covenant to the nations. Paul applies this text to the missionary team as participants in the Servant&rsquo;s mission &mdash; they are instruments through whom the light reaches the Gentile world.",
      "The Gentile response is immediate and joyful. &ldquo;And when the Gentiles heard this, they began rejoicing and glorifying the word of the Lord, and as many as were appointed to eternal life believed&rdquo; (13:48). Luke&rsquo;s phrasing is theologically loaded. The Gentiles rejoice and glorify the word &mdash; the proclamation itself is honored and celebrated. And those who believe are described as &ldquo;appointed to eternal life&rdquo; &mdash; the Greek word (tasso) means ordered, arranged, or assigned. Luke does not develop a full doctrine of election in this verse, but he clearly attributes the origin of saving faith to God&rsquo;s prior action, not merely to human decision.",
      "The Jewish leaders, however, stir up the devout women of high standing and the leading men of the city and incite persecution against Paul and Barnabas, who are driven out of the district. Paul&rsquo;s response to being expelled is drawn directly from Jesus&rsquo;s instruction to the seventy-two disciples: &ldquo;And they shook off the dust from their feet against them and went to Iconium&rdquo; (13:51; cf. Luke 10:11). The gesture is not one of bitterness or defeat but of prophetic declaration: the missionaries have done their work, the message has been offered, and those who refuse it bear responsibility for their refusal.",
      "The final verse of the chapter strikes a note that might seem paradoxical given the persecution just described: &ldquo;And the disciples were filled with joy and with the Holy Spirit&rdquo; (13:52). Joy in the context of expulsion and opposition is not the joy of comfortable circumstances but the joy that is a fruit of the Spirit (Galatians 5:22), the deep gladness that comes from knowing that the word of God is accomplishing its purpose even when the circumstances are difficult. The chapter ends not with Paul and Barnabas but with the disciples they have left behind in Pisidian Antioch &mdash; a new community of believers, filled with the Spirit, full of joy, carrying the word into their own region.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Acts 13 Today",
    reference: "Acts 13 &mdash; For the Life of the Church",
    paragraphs: [
      "The commissioning scene at the beginning of Acts 13 has much to teach the contemporary church about the relationship between community life and missionary calling. The Spirit does not call Barnabas and Saul out of isolation or as individuals pursuing private spiritual ambitions; he calls them out of a gathered community that is worshiping and fasting together. The posture of the community &mdash; turned toward God, attentive, disciplined, seeking &mdash; is the context in which the Spirit&rsquo;s call is heard. Churches that want to be sending communities must first be worshiping, praying, fasting communities. The mission flows from the altar, not from the strategy session.",
      "The diversity of the Antioch leadership team (13:1) is not incidental background but a theological statement about the character of the community through which God chose to launch the Gentile mission. A Jewish Levite from Cyprus, a man who may have been North African, a man from Libya, a former court companion of the Herods, and the converted persecutor of the church &mdash; these five together represent the kind of unity-in-diversity that the gospel creates and that the Spirit uses. The contemporary church that takes seriously its missionary calling must also take seriously the formation of communities that visibly embody the reconciliation the gospel announces.",
      "Paul&rsquo;s great sermon in Pisidian Antioch offers a model of gospel proclamation that is simultaneously rooted in Scripture and urgently present-tense. He does not begin with the needs of his audience and work backward to a convenient Jesus; he begins with the grand narrative of God&rsquo;s dealings with Israel and shows how that narrative reaches its appointed climax in the death and resurrection of Jesus. The sermon assumes that the Scriptures of Israel are not background material to be replaced by a simpler gospel presentation but the interpretive framework without which the gospel cannot be understood. Biblical literacy is not a cultural luxury; it is a theological necessity for the church&rsquo;s proclamation.",
      "The declaration of forgiveness and justification in verses 38&ndash;39 &mdash; &ldquo;through this man forgiveness of sins is proclaimed to you, and by him everyone who believes is freed from everything from which you could not be freed by the law of Moses&rdquo; &mdash; remains the irreplaceable center of Christian preaching. Every generation of the church is tempted to soften this declaration, to replace the specific announcement of forgiveness through Christ with a more general message of spiritual uplift, ethical improvement, or social transformation. Acts 13 will not permit this softening. The distinctiveness of the gospel &mdash; that what the law could not accomplish has been accomplished in and through Jesus &mdash; is not one theme among many but the theme that gives everything else its meaning.",
      "The response of the Gentiles in verses 48&ndash;49 &mdash; rejoicing, glorifying the word, and spreading it throughout the whole region &mdash; models what genuine encounter with the gospel produces. The word of God is not received as one religious option among many; it is glorified, celebrated, and spread. The disciples who remain in Pisidian Antioch after Paul and Barnabas leave are described as &ldquo;filled with joy and with the Holy Spirit&rdquo; (13:52) even in the context of the opposition that has driven their teachers out. This is a picture of the self-propagating, Spirit-sustained character of the word: it does not depend on the presence of the apostle to continue its work. The church that is planted on the gospel of Jesus Christ carries within itself the resources for its own growth and expansion.",
      "The pattern of rejection by some and reception by others that runs through Acts 13 prepares the church for a realistic assessment of missionary work. Not everyone who hears the gospel will believe it; some will actively oppose it; some who initially respond will later fall away (as John Mark&rsquo;s departure in verse 13 hints). The mission does not depend on universal acceptance; it depends on the faithfulness of the One who said, &ldquo;I have made you a light for the Gentiles, that you may bring salvation to the ends of the earth.&rdquo; The ends of the earth remain the horizon of the church&rsquo;s calling, and Acts 13 stands at the beginning of the story of how the gospel began to reach them.",
    ],
  },
];

const videoItems = [
  { videoId: "Z-17KxkjnNQ", title: "BibleProject - Overview of Acts 1-12" },
  { videoId: "oNNZO9i1Gjc", title: "BibleProject - Overview of Acts 13-28" },
  { videoId: "zMN3l2xCOrE", title: "Paul's First Missionary Journey Explained" },
  { videoId: "WE9jjJ4BNKY", title: "Acts 13 - Paul's Sermon in Pisidian Antioch" },
];

export default function Acts13GuidePage() {
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
            Acts 13 &mdash; The First Missionary Journey Begins
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            While the church at Antioch worships and fasts, the Holy Spirit says: &ldquo;Set apart for me Barnabas and Saul for the work to which I have called them.&rdquo; They sail to Cyprus, then to Pisidian Antioch, where Paul preaches a sweeping synagogue sermon tracing Israel&rsquo;s history to Christ &mdash; &ldquo;through this man forgiveness of sins is proclaimed to you&rdquo; &mdash; and declares they are turning to the Gentiles.
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

        {currentSection && activeTab !== "Videos" && (
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
              Deepen your study of Acts 13 through these video teachings on the first missionary journey, the commissioning at Antioch, Paul&rsquo;s great sermon in Pisidian Antioch, and the turning to the Gentiles.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Light for the Gentiles</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Acts 13 marks the moment the church moved from reactive expansion to proactive mission. Sent by the Spirit from a worshiping, fasting community in Antioch, Paul and Barnabas carry the ancient promises of Israel&rsquo;s God to the ends of the earth. Through this man &mdash; crucified, risen, and reigning &mdash; forgiveness is proclaimed to all who believe.
          </p>
        </div>
      </main>
    </div>
  );
}
