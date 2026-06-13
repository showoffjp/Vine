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
  "Pentecost and the Birth of the Church",
  "The Jerusalem Community",
  "The Conversion of Paul",
  "The Gospel Goes to the Gentiles",
  "Paul&rsquo;s Missionary Journeys",
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
    id: "Pentecost and the Birth of the Church",
    heading: "Pentecost and the Birth of the Church",
    reference: "Acts 1&ndash;2",
    paragraphs: [
      "Acts is the sequel to Luke&rsquo;s Gospel, written by the same author and addressed to the same recipient, Theophilus. Where the Gospel narrated &ldquo;all that Jesus began to do and teach,&rdquo; Acts narrates what the risen and ascended Christ continues to do through his Spirit and his church. It is the bridge between the life of Jesus and the letters of the New Testament, the single historical narrative that tells us how a small band of Galilean disciples became a movement that reached the heart of the Roman empire within a generation.",
      "The whole book is organized around a single programmatic verse. Just before his ascension, Jesus tells the disciples, &ldquo;you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth&rdquo; (1:8). That sentence is the table of contents for the entire book: the gospel will spread in widening circles, from Jerusalem outward, until it reaches Rome. Acts is the story of that geographical and ethnic expansion, driven not by human ambition but by the Spirit.",
      "Chapter 1 sets the stage. The risen Jesus appears over forty days, gives final instructions, and then ascends, with the promise that he will return as he departed. The disciples wait and pray in Jerusalem, and they address one piece of unfinished business: the replacement of Judas. Matthias is chosen by lot to restore the apostolic number to twelve, a deliberate echo of the twelve tribes &mdash; the renewed people of God is being constituted around the apostolic witness to the resurrection.",
      "Then comes Pentecost (ch. 2), the hinge of the book. On the Jewish feast fifty days after Passover, the Holy Spirit descends with the sound of a rushing wind and tongues of fire resting on each believer. They begin to speak in other languages, and Jews gathered in Jerusalem from every nation under heaven each hear the mighty works of God in their own tongue. This is a deliberate reversal of Babel (Genesis 11): where human pride once scattered the nations into mutual incomprehension, the Spirit now gathers them back into one community that understands a single message.",
      "Peter rises to interpret the event in the first Christian sermon. He explains the outpouring through the prophet Joel &mdash; &ldquo;in the last days&hellip; I will pour out my Spirit on all flesh&rdquo; &mdash; and through the Psalms, arguing that David spoke prophetically of the resurrection of the Messiah. The sermon moves relentlessly toward its climax: this Jesus, whom you crucified, God has made both Lord and Christ. The proclamation is christological from the very first day &mdash; the church is born preaching the death, resurrection, and lordship of Jesus.",
      "The response is overwhelming. Cut to the heart, the crowd asks what they must do, and Peter answers, &ldquo;Repent and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins, and you will receive the gift of the Holy Spirit&rdquo; (2:38). About three thousand are added in a single day. The lesson of these opening chapters is unmistakable: the birth of the church is the work of the Spirit, not the achievement of human strategy. What begins at Pentecost is nothing less than a new humanity, empowered to carry the gospel to the ends of the earth.",
    ],
  },
  {
    id: "The Jerusalem Community",
    heading: "The Jerusalem Community",
    reference: "Acts 2&ndash;7",
    paragraphs: [
      "Luke gives us a luminous portrait of the earliest church in the summary of 2:42&ndash;47. The new believers &ldquo;devoted themselves to the apostles&rsquo; teaching and the fellowship, to the breaking of bread and the prayers.&rdquo; These four marks &mdash; doctrine, community, sacrament, and prayer &mdash; form a template that the church has returned to in every age of renewal. This was not a vague spirituality but a concrete, shared, embodied life centered on the teaching of those who had walked with Jesus.",
      "The community was marked by radical generosity. They held their possessions in common, selling property and goods to distribute to anyone in need, meeting daily in the temple courts and breaking bread in their homes &ldquo;with glad and generous hearts.&rdquo; They enjoyed the favor of all the people, and the Lord added to their number day by day those who were being saved. The growth of the church in these chapters is consistently attributed to God&rsquo;s action, not merely to the believers&rsquo; appeal.",
      "The early chapters also record the church&rsquo;s first miracles and its first collisions with the authorities. Peter and John heal a man lame from birth at the temple gate (ch. 3), and the resulting crowd gives Peter another platform to preach the resurrection. This brings the apostles before the Sanhedrin (chs. 4&ndash;5), the same council that had condemned Jesus. Commanded to stop preaching, Peter and John reply, &ldquo;We must obey God rather than men&rdquo; &mdash; a principle of faithful resistance that has echoed through Christian history.",
      "Not every challenge came from outside. The deception of Ananias and Sapphira (ch. 5), who lied about the proceeds of a sale, exposes the danger of hypocrisy within the community and the seriousness with which God regards the integrity of his church. Their sudden deaths fall on the assembly like a warning: this new community is holy, and its life is not to be treated as a means of self-promotion. Great fear came upon the whole church.",
      "A practical crisis then tests the community&rsquo;s unity (ch. 6). The Greek-speaking widows are being overlooked in the daily distribution of food, and the resulting complaint threatens to divide the church along cultural lines. The apostles respond by appointing seven men &ldquo;full of the Spirit and of wisdom&rdquo; to oversee the work, freeing themselves for prayer and the ministry of the word. This is often read as the seedbed of the diaconate and a model of shared, Spirit-led leadership that addresses real needs without abandoning the church&rsquo;s central calling.",
      "The section reaches its climax in the martyrdom of Stephen (chs. 6&ndash;7), one of the seven. Hauled before the Sanhedrin, Stephen delivers the longest speech in Acts, retelling Israel&rsquo;s history from Abraham onward to show that God has never been confined to one place and that his people have always resisted his messengers. Enraged, the council stones him &mdash; the first Christian martyr &mdash; while he prays for his killers and sees the heavens opened. Luke notes pointedly that the witnesses laid their garments at the feet of a young man named Saul.",
      "Stephen&rsquo;s death is a turning point. The persecution it unleashes scatters the believers throughout Judea and Samaria, and they preach the word wherever they go. What looked like a catastrophe becomes the means by which the gospel breaks out of Jerusalem &mdash; exactly as Jesus had promised in 1:8. The blood of the first martyr becomes, in the providence of God, the seed of the church&rsquo;s expansion.",
    ],
  },
  {
    id: "The Conversion of Paul",
    heading: "The Conversion of Paul",
    reference: "Acts 8&ndash;9",
    paragraphs: [
      "The persecution that follows Stephen&rsquo;s death scatters the believers, and they carry the gospel with them. Philip, another of the seven, goes down to Samaria and proclaims Christ with great success, and crowds receive the word with joy (ch. 8). The Samaritans &mdash; long despised by the Jews &mdash; are now embraced as fellow believers, and the apostles come down from Jerusalem to confirm the work. The gospel is already crossing one of the deepest ethnic boundaries in the ancient world.",
      "Philip is then led by the Spirit to the desert road, where he meets an Ethiopian eunuch, a court official returning from Jerusalem, puzzling over a scroll of Isaiah. Beginning from that very passage about the suffering servant, Philip tells him the good news about Jesus, and the eunuch is baptized on the spot. A foreigner and an outsider becomes one of the first Gentile converts, a sign of where the story is heading and of a gospel that excludes no one.",
      "Then comes the pivotal event of the whole book. Saul of Tarsus, the zealous young Pharisee last seen approving Stephen&rsquo;s death, is still &ldquo;breathing threats and murder against the disciples,&rdquo; traveling to Damascus with authority to arrest believers. On the road a light from heaven flashes around him, he falls to the ground, and a voice says, &ldquo;Saul, Saul, why are you persecuting me?&rdquo; When he asks who is speaking, the answer comes: &ldquo;I am Jesus, whom you are persecuting&rdquo; (ch. 9).",
      "Those words carry a theology in miniature. Saul thought he was persecuting a misguided sect, but the risen Christ identifies himself completely with his suffering people: to persecute the church is to persecute Jesus himself. This intimate union between Christ and his body would later become a defining theme of Paul&rsquo;s own letters, where the church is the body of which Christ is the head. The persecutor is confronted not merely by an idea but by the living Lord.",
      "Blinded by the encounter, Saul is led by the hand into Damascus, where for three days he neither eats nor drinks. God then sends a reluctant disciple named Ananias, who lays hands on him so that he regains his sight, is filled with the Holy Spirit, and is baptized. The Lord tells Ananias that Saul is a chosen instrument to carry his name &ldquo;before the Gentiles and kings and the children of Israel.&rdquo; Almost immediately Saul begins proclaiming in the synagogues that Jesus is the Son of God &mdash; preaching the very faith he had set out to destroy.",
      "The conversion of Paul is one of the most consequential events in the history of the church. The man who had been its fiercest opponent becomes its greatest missionary, the author of much of the New Testament and the apostle who carries the gospel across the Roman world. So central is this turning point that Luke recounts it three separate times in Acts &mdash; here as narrative and twice more in Paul&rsquo;s own words before hostile crowds and Roman officials &mdash; signaling how decisively the trajectory of the whole book turns on this moment of grace.",
    ],
  },
  {
    id: "The Gospel Goes to the Gentiles",
    heading: "The Gospel Goes to the Gentiles",
    reference: "Acts 10&ndash;15",
    paragraphs: [
      "The most theologically significant development in Acts is the inclusion of the Gentiles &mdash; non-Jews &mdash; in the people of God on equal terms. This was not a foregone conclusion. The first believers were Jews who continued to worship in the temple and keep the law, and the question of whether Gentiles could belong to the Messiah&rsquo;s people without first becoming Jews would convulse the early church. Luke devotes these chapters to showing how God himself forced the issue.",
      "The breakthrough comes through Peter (ch. 10). On a rooftop in Joppa he falls into a trance and sees a sheet lowered from heaven full of animals the law called unclean, with a voice commanding him to kill and eat. When Peter objects, the voice replies, &ldquo;What God has made clean, do not call common.&rdquo; The vision is repeated three times. While Peter puzzles over its meaning, messengers arrive from Cornelius, a Roman centurion &mdash; a God-fearing Gentile &mdash; and the Spirit tells Peter to go with them without hesitation.",
      "At Cornelius&rsquo;s house Peter preaches the gospel, and before he has even finished, the Holy Spirit falls on all who hear, and these uncircumcised Gentiles speak in tongues and praise God just as the believers had at Pentecost. Peter draws the only possible conclusion: &ldquo;Can anyone withhold water for baptizing these people, who have received the Holy Spirit just as we have?&rdquo; They are baptized. God has poured out his Spirit on Gentiles directly, settling by his own action what the church was still debating.",
      "Meanwhile, the scattered believers reach Antioch in Syria, where for the first time large numbers of Greeks turn to the Lord (ch. 11). This congregation becomes the first genuinely multi-ethnic church, Jews and Gentiles worshiping together, and it is here, Luke notes, that the disciples are first called &ldquo;Christians&rdquo; (11:26). Antioch becomes the launching pad for the church&rsquo;s deliberate mission to the Gentile world, sending out Barnabas and Saul as its first missionaries.",
      "The influx of Gentiles forces a crisis that comes to a head at the Jerusalem Council (ch. 15), the most important meeting in the book. Some insisted that Gentile converts must be circumcised and keep the law of Moses to be saved. After much debate, Peter recounts what happened with Cornelius, Paul and Barnabas report what God has done among the nations, and James cites the prophets to show that God always intended to gather the Gentiles. The council concludes that Gentiles are saved by grace through faith, not by works of the law, and need not be circumcised.",
      "The decision of the Jerusalem Council is one of the great hinges of Christian history. It established that the gospel is for all people on the same footing &mdash; that one does not have to become a Jew in order to become a Christian. Had the council ruled otherwise, Christianity might have remained a movement within Judaism. Instead it was confirmed as a universal faith, open to every nation, and the way was cleared for Paul&rsquo;s missionary journeys to carry that message across the Roman world.",
    ],
  },
  {
    id: "Paul&rsquo;s Missionary Journeys",
    heading: "Paul&rsquo;s Missionary Journeys",
    reference: "Acts 13&ndash;28",
    paragraphs: [
      "The second half of Acts follows Paul as its central figure, tracing his three great missionary journeys and his final voyage to Rome. The focus narrows from the church in general to the relentless westward push of the gospel through one extraordinary apostle, as the witness promised in 1:8 advances from Antioch toward the heart of the empire. The pattern of these journeys is remarkably consistent and tells us much about how the early mission worked.",
      "The first journey (chs. 13&ndash;14) sends Paul and Barnabas, commissioned by the church at Antioch, through Cyprus and into the cities of southern Asia Minor. They preach, plant churches, appoint elders, and meet both belief and violent opposition &mdash; at one point Paul is stoned and left for dead, only to rise and continue. Already the strategy is clear: establish communities in strategic cities and entrust them to local leadership before moving on.",
      "The second journey (chs. 15&ndash;18) carries the gospel into Europe. Crossing into Macedonia in response to a vision, Paul founds churches in Philippi &mdash; where he and Silas sing in prison and the jailer is converted &mdash; and then in Thessalonica, Berea, and Corinth. In Athens he delivers the Areopagus address (ch. 17), engaging Greek philosophers and poets on their own ground, quoting their writers and proclaiming the unknown God whom they ignorantly worshiped, now revealed in the risen Christ.",
      "The third journey (chs. 18&ndash;21) is centered on Ephesus, where Paul spends some three years and the word spreads so powerfully through the province of Asia that the local silversmiths, fearing for their idol trade, incite a riot. Throughout all three journeys the same rhythm repeats: Paul preaches first in the synagogue, faces rejection from many of his own people, turns to the Gentiles, plants a church, and endures hardship &mdash; beatings, imprisonments, shipwrecks &mdash; for the sake of the gospel.",
      "The final chapters (21&ndash;28) follow Paul as a prisoner. Arrested in Jerusalem after a riot in the temple, he makes a series of defenses &mdash; before the Jewish crowd, the Sanhedrin, the governors Felix and Festus, and finally King Agrippa &mdash; in each case turning his trial into an occasion to testify about Christ and his own conversion. When justice in the provinces stalls, Paul exercises his right as a Roman citizen and appeals to Caesar, which sets him on the road to Rome.",
      "The voyage to Rome includes one of the most vivid sea narratives in ancient literature: a fierce storm, the loss of the ship, and a dramatic shipwreck off Malta from which all aboard escape unharmed, just as Paul had foretold. Even in disaster Paul is the calm center, assuring his fellow travelers of God&rsquo;s protection and his appointed destiny to stand before Caesar.",
      "Acts ends abruptly and deliberately. Paul reaches Rome and, though under guard, lives in his own rented quarters and welcomes all who come to him, &ldquo;proclaiming the kingdom of God and teaching about the Lord Jesus Christ with all boldness and without hindrance&rdquo; (28:31). There is no account of his trial&rsquo;s outcome. The point is the message, not the man: the gospel has reached the capital of the empire and continues to advance unstoppably. The witness that began in Jerusalem has reached the ends of the earth, and the mission goes on.",
    ],
  },
];

const videoItems = [
  { videoId: "CGbNw855ksw", title: "BibleProject — Book of Acts Overview Part 1" },
  { videoId: "Z-17KxpjL0Q", title: "BibleProject — Book of Acts Overview Part 2" },
  { videoId: "smH3oM5z6vM", title: "Pentecost and the Birth of the Church Explained" },
];

export default function ChristianBookOfActsGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of Acts
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The story of how the gospel spread &ldquo;from Jerusalem to the ends of the earth&rdquo; &mdash; Pentecost and the birth of the church, the early Jerusalem community, the conversion of Paul, the inclusion of the Gentiles, and Paul&rsquo;s missionary journeys to Rome.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                background: tab === t ? ACCENT : CARD,
                color: tab === t ? "#fff" : MUTED,
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

        {tab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Acts through visual teaching on the structure of the book, the work of the Spirit, and the birth of the church at Pentecost.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Mission Continues</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Acts ends without a tidy conclusion because the story it tells is not finished. The same Spirit who fell at Pentecost and carried the gospel from Jerusalem to Rome still empowers the church today. To read Acts is to find ourselves caught up in the same mission &mdash; witnesses to the risen Christ, sent to the ends of the earth.
          </p>
        </div>
      </main>
    </div>
  );
}
