"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Resurrection Morning",
  "Go Into All the World",
  "Signs and Wonders",
  "Application",
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
    heading: "Overview of Mark 16",
    reference: "Mark 16:1&ndash;20",
    paragraphs: [
      "Mark 16 is the climax and culmination of the shortest and most urgent of the four Gospels. Mark wrote his account at a breathless pace &mdash; the word &ldquo;immediately&rdquo; appears over forty times in the book &mdash; and the final chapter maintains that urgency even as it describes the most world-shaking event in history. The empty tomb, the angelic announcement, the commission to go into all the world, and the ascension of the risen Lord are all compressed into a chapter that reads like a dispatches from the front lines of a war that has just been decided in the most unexpected possible way.",
      "The chapter divides naturally into three parts. Verses 1&ndash;8 describe the women&rsquo;s visit to the tomb on the first day of the week, their discovery that the stone has been rolled away, the young man in white who announces that Jesus of Nazareth has risen, and the commission to tell the disciples and Peter that Jesus is going before them to Galilee. Verses 9&ndash;13 (in manuscripts that include the longer ending) recount the appearances to Mary Magdalene and to two disciples on the road. Verses 14&ndash;20 record the appearance to the eleven, the Great Commission to preach the gospel to every creature, the promise of signs following, and the ascension.",
      "Scholars have long noted that the earliest and most reliable manuscripts of Mark end at 16:8, with the women fleeing the tomb in trembling and astonishment, saying nothing to anyone &mdash; &ldquo;for they were afraid.&rdquo; This abrupt ending may be deliberate: Mark concludes his Gospel not with a neat resolution but with an open question hanging in the air, inviting the reader to enter the story and carry the proclamation forward. The longer ending (verses 9&ndash;20) represents early tradition that sought to complete the resurrection narrative more fully.",
      "Whether one reads the shorter or longer ending, the theological message of Mark 16 is the same: death has been defeated. The one who was crucified, buried, and sealed behind a stone has emerged victorious on the third day. The angel&rsquo;s words at the tomb &mdash; &ldquo;He has risen; he is not here&rdquo; (16:6) &mdash; are the most consequential words ever spoken, the announcement that changes the meaning of every other event in human history. If Jesus rose, then every claim he made about himself is vindicated; every promise he gave is guaranteed; every threat of sin and death is ultimately answered.",
      "Mark 16 is also a chapter about mission. The resurrection is not announced as a private spiritual experience for a few insiders; it is immediately connected to a charge: go, tell, proclaim. The risen Lord does not invite his disciples to gather in a room and contemplate what has happened. He sends them &mdash; to Jerusalem, to Judea, to Samaria, to the uttermost parts of the earth. The same power that raised Jesus from the dead is now placed at the disposal of those who carry his gospel to the nations.",
    ],
  },
  {
    id: "Resurrection Morning",
    heading: "Resurrection Morning",
    reference: "Mark 16:1&ndash;8",
    paragraphs: [
      "The account of Resurrection Morning in Mark 16 begins with grief. When the Sabbath was past, Mary Magdalene and Mary the mother of James and Salome bought spices so that they could go and anoint Jesus. They were going to perform the final act of devotion for a man they loved and had watched die &mdash; a gesture of tenderness toward a corpse. Their question as they walked &mdash; &ldquo;Who will roll away the stone for us from the entrance of the tomb?&rdquo; (16:3) &mdash; is the question of people expecting nothing more than a sealed grave.",
      "The stone was very large. Mark notes its size not incidentally but to underscore the magnitude of what the women find when they arrive: the stone has already been rolled back. The women do not roll it away; they do not find it cracked or shifted. It has been rolled back, and the tomb stands open before them. Something or someone with the power to move a great stone has already been at work here before any human witness arrived.",
      "Entering the tomb, they see a young man sitting on the right side, dressed in a white robe. His appearance &mdash; a human figure in white inside the tomb of the crucified &mdash; is startling enough that Mark tells us they were alarmed. The white robe is the visual signal of heavenly origin throughout Scripture; this is an angelic messenger, sent to speak on behalf of the God who acts. His first words are a pastoral acknowledgment of their state: &ldquo;Do not be alarmed.&rdquo; The command is common in angelic announcements, as though fear is the entirely predictable human response to divine action and must be addressed before the message can be heard.",
      "Then comes the announcement itself, one of the most compact and explosive sentences in all of human literature: &ldquo;You seek Jesus of Nazareth, who was crucified. He has risen; he is not here. See the place where they laid him&rdquo; (16:6). Three clauses: an identification (&ldquo;Jesus of Nazareth, who was crucified&rdquo;), a declaration (&ldquo;He has risen; he is not here&rdquo;), and an invitation to empirical verification (&ldquo;See the place where they laid him&rdquo;). The resurrection is not presented as a spiritual impression or a theological category; it is offered as a fact that can be confirmed by the evidence of an empty tomb.",
      "The commission the angel gives is immediate and specific: &ldquo;Go, tell his disciples and Peter that he is going before you to Galilee. There you will see him, just as he told you&rdquo; (16:7). The mention of Peter by name is deeply significant in Mark&rsquo;s Gospel. Peter had denied Jesus three times &mdash; the most dramatic failure among the disciples. To name him specifically in the resurrection commission is to announce that the risen Lord&rsquo;s first concern is not condemnation but restoration. The one who had wept bitterly over his betrayal is sought out by name on the morning of the resurrection.",
      "Mark 16:8 ends with a note that has puzzled readers for centuries: &ldquo;And they went out and fled from the tomb, for trembling and astonishment had seized them, and they said nothing to anyone, for they were afraid.&rdquo; The women who were supposed to tell said nothing. They fled in fear. This ending is not a failure narrative; it is Mark&rsquo;s way of capturing the sheer enormity of what they had encountered. The resurrection is not a comfortable event to process. It shatters every category. The trembling and astonishment of the women at the empty tomb is the appropriate first response to the world&rsquo;s foundations being turned upside down.",
    ],
  },
  {
    id: "Go Into All the World",
    heading: "Go Into All the World",
    reference: "Mark 16:14&ndash;18",
    paragraphs: [
      "When Jesus appears to the eleven as they are reclining at table, his first words to them are a rebuke: &ldquo;He rebuked them for their unbelief and hardness of heart, because they had not believed those who saw him after he had risen&rdquo; (16:14). This is a striking note on which to begin the Great Commission scene. The disciples who are about to be sent to the ends of the earth have just been rebuked for failing to believe the testimony of eyewitnesses. The commission that follows is not given to people who have their faith perfectly sorted; it is given to a group that includes doubters, to people who are still processing the magnitude of what has happened.",
      "Verse 15 then delivers the commission with magnificent sweep: &ldquo;Go into all the world and proclaim the gospel to the whole creation.&rdquo; The scope is breathtaking. Not &ldquo;go to your village&rdquo; or &ldquo;go to your nation&rdquo; &mdash; but &ldquo;all the world,&rdquo; and not to human beings only but to &ldquo;the whole creation.&rdquo; The Greek word for &ldquo;gospel&rdquo; here is euangelion, the same word with which Mark opened his entire Gospel: &ldquo;The beginning of the gospel of Jesus Christ, the Son of God&rdquo; (1:1). The book that begins with the announcement of the gospel ends with the command to take it everywhere.",
      "The content of the gospel to be proclaimed is inseparable from the response it requires: &ldquo;Whoever believes and is baptized will be saved, but whoever does not believe will be condemned&rdquo; (16:16). Belief and baptism belong together in the New Testament pattern &mdash; faith is expressed and sealed in the public act of baptism. But the verse also makes clear that the decisive factor for salvation is belief, not baptism: the condemnation falls on those who do not believe, not on those who believe but are unbaptized. The gospel calls for a response, and the response determines eternal destiny.",
      "The Great Commission in Mark is thus both universal and urgent. Universal, because it knows no geographical, cultural, ethnic, or linguistic boundaries &mdash; &ldquo;all the world&rdquo; means every people group, every language, every culture that the disciples and their successors could reach. Urgent, because salvation and condemnation hang in the balance. These are not terms that allow for a relaxed or optional attitude toward evangelism. Jesus sends his people on a mission with the highest possible stakes, backed by the authority of the one who has just risen from the dead.",
      "The commission in Mark 16 has been the propulsive force behind two thousand years of Christian mission. Missionaries to every continent, translators who gave the Scriptures in hundreds of languages, church planters who crossed oceans and mountains and cultural barriers, ordinary believers who shared the gospel with neighbors and coworkers and family members &mdash; all of them are acting in direct response to the command of the risen Christ: go into all the world. Every generation of the church is accountable to this commission, and every generation must find fresh ways to obey it in the particular world it inhabits.",
      "For Mark&rsquo;s original readers &mdash; probably in Rome, probably in the early decades of intense Roman persecution &mdash; the commission was not an abstraction. Going into all the world meant risking arrest, social ostracism, and death. The same Jesus who commanded them to go had himself been arrested, tried, condemned, and executed. He had risen, which proved that his way through suffering led to life &mdash; but the path itself was not smooth. The commission has always been costly, and those who take it seriously have always found that the cost is worth it.",
    ],
  },
  {
    id: "Signs and Wonders",
    heading: "Signs and Wonders",
    reference: "Mark 16:17&ndash;20",
    paragraphs: [
      "Following the commission to go into all the world, Jesus makes a remarkable promise about the signs that will accompany those who believe: &ldquo;And these signs will accompany those who believe: in my name they will cast out demons; they will speak in new tongues; they will pick up serpents with their hands; and if they drink any deadly poison, it will not hurt them; they will lay their hands on the sick, and they will recover&rdquo; (16:17&ndash;18). These five signs &mdash; exorcism, tongues, serpent handling without harm, immunity to poison, and healing of the sick &mdash; have generated extensive theological discussion across the centuries and across Christian traditions.",
      "It is important to read these promises in their narrative context. They are not presented as a checklist of spiritual achievements for individual Christians to demonstrate; they are signs that accompany &ldquo;those who believe&rdquo; &mdash; the community of faith, the church in its collective mission. Throughout the book of Acts, the spread of the gospel into new territories was accompanied by displays of divine power that authenticated the message in culturally specific ways. Signs and wonders functioned as confirmatory evidence that the one being proclaimed as risen Lord was indeed present and active.",
      "The promise of speaking in new tongues connects directly to the Pentecost narrative of Acts 2, where the disciples were filled with the Holy Spirit and began speaking in the languages of the nations gathered in Jerusalem. The miracle of tongues at Pentecost was itself a kind of enacted Great Commission &mdash; the barriers of language that divide humanity were momentarily overcome by the power of the Spirit, pointing toward the eventual gathering of people from every tribe and tongue and people and nation around the throne of God.",
      "The promise about serpents and poison echoes the Acts 28 account of Paul on the island of Malta, where a viper fastened onto his hand and he shook it off without harm &mdash; an event that led the islanders to conclude that he was a god, and that opened a door for healing ministry on the island. These accounts are not presented in Acts as things Paul sought out or arranged; they happened in the course of mission, and God used them to validate the gospel message. The signs serve the Word, not the other way around.",
      "The healing of the sick through the laying on of hands carries forward the ministry pattern of Jesus himself throughout Mark&rsquo;s Gospel. Jesus regularly healed by touching &mdash; touching the leper that no one else would approach, taking the hand of Jairus&rsquo;s daughter, placing his fingers in the ears of the deaf man. The disciples are now sent with that same healing authority exercised in his name. The church throughout its history has prayed for the sick and anointed the sick with oil, expecting that the same Lord who healed in Galilee remains active through his people.",
      "Verse 20 provides the historical confirmation that these promises were fulfilled: &ldquo;And they went out and preached everywhere, while the Lord worked with them and confirmed the message by accompanying signs.&rdquo; The mission was not conducted in the disciples&rsquo; own strength or wisdom; the Lord worked with them, and the signs confirmed the message. This verse is a bridge between the Gospel and the book of Acts, which records in narrative form how the Lord continued to work with the early church as it carried the gospel from Jerusalem to Rome. The signs and the word belonged together; neither was sufficient alone.",
    ],
  },
  {
    id: "Application",
    heading: "Living Mark 16 Today",
    reference: "Personal and Community Application",
    paragraphs: [
      "Mark 16 calls every generation of Christians to the same reckoning with the resurrection that it called the first disciples to face. The empty tomb is not a symbol or a metaphor &mdash; Mark presents it as an event that happened in a specific place, at a specific time, leaving specific physical evidence. Either the tomb was empty on the first day of the week because Jesus rose from the dead, or it was not. If it was, then the implications are total: the same Lord who defeated death is alive and active, the same commission he gave to his first disciples is still in effect, and the same Spirit who accompanied their mission accompanies ours.",
      "One of the most personally significant notes in Mark 16 is the mention of Peter by name in the angel&rsquo;s message. &ldquo;Tell his disciples and Peter&rdquo; &mdash; Peter, who had denied even knowing Jesus, who had wept bitterly over his failure, who might have supposed that his cowardice had disqualified him from the story forever. The risen Lord seeks out the one who failed. This is the gospel in miniature: not a reward for those who performed well, but a restoration for those who fell, a commission given to the repentant and the broken. If you have failed the Lord, the resurrection word is &ldquo;and you &mdash; go and tell.&rdquo;",
      "The Great Commission of Mark 16:15 challenges every local church to take seriously its responsibility toward those who have not yet heard the gospel. The command to &ldquo;go into all the world&rdquo; does not allow for a purely inward-facing church that tends to its own members while the world goes unreached. This does not mean that every individual Christian must leave home and cross an ocean, but it does mean that every Christian and every church should have some genuine engagement with mission &mdash; supporting those who go, praying for the unreached, and sharing the gospel in the particular world they inhabit.",
      "For those struggling with doubt, the rebuke of verse 14 is strangely encouraging. Jesus rebuked the eleven for their unbelief before commissioning them. He did not commission a different, more believing group while leaving the doubters behind. He confronted their doubt, addressed it, and then sent them anyway. Doubt and mission are not mutually exclusive; the commission comes to people who are still working through their questions. The church is a community of people who are not yet fully convinced of everything, but who are nonetheless sent on the mission of the risen Lord.",
      "The signs promised in verses 17&ndash;18 invite the church to expect the Lord to be at work as it carries the gospel forward. This does not mean engineering dramatic displays or testing God by deliberately handling serpents; it means going about the business of mission with confidence that the same Lord who confirmed the word in the first century by accompanying signs is not less present or less powerful today. The church should pray for the sick, pray for the power of the Spirit, and expect God to confirm his word in ways appropriate to the people and contexts it is reaching.",
      "Mark 16:20 ends with a summary that is itself a model for the Christian life: &ldquo;They went out and preached everywhere, while the Lord worked with them and confirmed the message by accompanying signs.&rdquo; They went. They preached. The Lord worked. The signs confirmed. The initiative was theirs &mdash; they had to get up and go &mdash; but the power was his. This is the pattern of the Christian mission in every age: human obedience and divine power working together, the disciples carrying the Word into the world and the risen Lord going with them, working through them, confirming through them that the gospel is true, that death has been defeated, and that the kingdom of God is on the move.",
    ],
  },
];

const videoItems = [
  { videoId: "HGHqu9-DtXk", title: "BibleProject - Overview: Mark" },
  { videoId: "n1CV_pHPASA", title: "Mark 16 - The Resurrection of Jesus Explained" },
  { videoId: "fXyLCE7mXyQ", title: "Go Into All the World - The Great Commission in Mark 16" },
  { videoId: "RA8ixHFMoFo", title: "The Resurrection Morning - Mark 16:1-8 Study" },
];

export default function Mark16GuidePage() {
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
            Mark 16 &mdash; Go Into All the World
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The Resurrection and the Great Commission &mdash; Mark&rsquo;s Gospel reaches its thundering climax with an empty tomb, an angelic announcement, and a command that has driven Christian mission for two thousand years: go into all the world and proclaim the gospel to the whole creation.
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

        <section style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Explore Mark 16 and the resurrection of Jesus through these video teachings on the empty tomb, the Great Commission, and the mission of the risen Christ through his church.
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

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>He Has Risen &mdash; Now Go</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Mark 16 does not let the resurrection stay in the tomb. The same announcement that shook the women with trembling and astonishment is immediately connected to a commission: go, tell, proclaim to all the world. The risen Lord who ascended to the right hand of the Father did not leave his people alone &mdash; he works with those who go, confirming the message that death has been defeated and that life in his name is freely offered to all who will believe.
          </p>
        </div>
      </main>
    </div>
  );
}
