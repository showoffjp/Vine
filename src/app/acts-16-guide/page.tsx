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
  "The Macedonian Call",
  "Lydia of Thyatira",
  "Paul and Silas in Prison",
  "Believe in the Lord Jesus",
  "The Philippian Jailer Baptized",
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
    id: "The Macedonian Call",
    heading: "The Macedonian Call",
    reference: "Acts 16:1&ndash;10",
    paragraphs: [
      "Acts 16 opens at a crossroads &mdash; literally and spiritually. Paul, on his second missionary journey, arrives at Lystra and encounters a young disciple named Timothy whose mother was Jewish and whose father was Greek. Timothy had an excellent reputation among the believers in Lystra and Iconium, and Paul wanted him to accompany the mission. He circumcised Timothy, not as a requirement for salvation, but as a practical measure to open doors of witness among the Jewish communities they would visit. From the beginning of the chapter, Paul demonstrates the wisdom of removing unnecessary stumbling blocks while refusing to compromise on the essentials of the gospel.",
      "As the team travels through the region of Phrygia and Galatia, something unexpected happens. The Holy Spirit forbids them to speak the word in Asia. When they come to the border of Mysia and attempt to go into Bithynia, the Spirit of Jesus does not allow it. These brief, cryptic statements are among the most theologically freighted in the book of Acts. God was actively steering his missionaries &mdash; not just by opening doors, but by closing them. The sovereign Spirit was redirecting the mission according to a plan Paul and his companions could not yet see.",
      "Arriving at Troas, a coastal city on the Aegean, Paul receives a vision in the night: a man of Macedonia standing and appealing, &ldquo;Come over to Macedonia and help us.&rdquo; This vision becomes one of the hinge moments of the entire New Testament &mdash; the moment the gospel first crosses from Asia into Europe. The call is urgent and personal. Macedonia needed help, and the Lord was sending it through his missionaries.",
      "The response of Paul and his companions is immediate. Luke notes, &ldquo;immediately we sought to go on into Macedonia, concluding that God had called us to preach the gospel to them.&rdquo; The shift from &ldquo;they&rdquo; to &ldquo;we&rdquo; in verse 10 is significant &mdash; it marks the first of Luke&rsquo;s famous &ldquo;we passages,&rdquo; indicating that he himself joined the mission at this point. The missionaries were not passive recipients of divine guidance. They saw the vision, discerned its meaning as God&rsquo;s call, and acted without delay.",
      "The Macedonian call carries perennial significance for Christian mission. It teaches that the Spirit&rsquo;s leading involves both open and closed doors, that God&rsquo;s plan for the gospel&rsquo;s advance may look like apparent failure or detour before it resolves into clarity, and that the people of God must remain attentive enough to heavenly direction to recognize it and bold enough to respond immediately. The gospel did not reach Europe by human strategy alone &mdash; it was carried there by obedient servants following a Spirit who goes before.",
      "This passage also challenges the assumption that fruitful ministry always follows our best plans. Paul had intentions for Asia and Bithynia. God had other plans. The willingness to hold one&rsquo;s agenda loosely, to read the closings as well as the openings of divine providence, is one of the deepest lessons the church draws from the Troas vision. The most significant advances of the kingdom often begin not with clarity but with redirection &mdash; not with a burning bush but with a closed door.",
    ],
  },
  {
    id: "Lydia of Thyatira",
    heading: "Lydia of Thyatira",
    reference: "Acts 16:11&ndash;15",
    paragraphs: [
      "Sailing from Troas, Paul and his companions pass through Samothrace and come to Philippi, a leading city of the district of Macedonia and a Roman colony. They stay there for several days, and on the Sabbath they go outside the city gate to the riverside, where they expect to find a place of prayer. What they find is a group of women gathered there &mdash; no synagogue, no throng of ready listeners, simply a riverside gathering of praying women. This is where the gospel first takes root on European soil.",
      "Among the women listening is Lydia, a dealer in purple goods from the city of Thyatira. Purple cloth was expensive, associated with wealth and status, and Lydia&rsquo;s trade suggests she was a woman of means and commercial experience. She was already a worshiper of God, which indicates she had embraced Jewish monotheism even as a Gentile. She was devout, attentive, and spiritually seeking &mdash; but she had not yet heard the gospel of Jesus Christ.",
      "What happens next is stated with extraordinary precision and theological depth: &ldquo;The Lord opened her heart to pay attention to what was said by Paul.&rdquo; Luke does not say that Lydia was intellectually persuaded by compelling arguments, though the arguments may have been compelling. He says the Lord opened her heart. The initiative in Lydia&rsquo;s conversion belongs to God. Paul spoke, but God acted. The sovereign grace that directed the mission to Macedonia now acts within the heart of the first European convert to bend it toward the truth.",
      "Lydia is baptized, along with her household. This household baptism &mdash; the first of two in Acts 16 &mdash; reflects the biblical pattern of covenant faith that extends to those under one&rsquo;s care and authority. Lydia does not receive the gospel and keep it to herself. Those who belong to her household are included in her turning to Christ, and all of them are baptized. The gospel&rsquo;s power to transform does not stop at the individual &mdash; it radiates outward through relationships.",
      "Lydia then urges Paul and his companions to stay at her house. Her hospitality is not merely generous; it is an act of faith and mission partnership. &ldquo;If you have judged me to be faithful to the Lord,&rdquo; she says, &ldquo;come to my house and stay.&rdquo; And she prevailed upon them. Her home becomes the base of operations for the Philippian mission and, later, the gathering place for the new church in Philippi. The church of Philippi &mdash; the community Paul would later address as his greatest joy, who partnered with him in the gospel from the first day (Philippians 1:5) &mdash; begins in the converted heart and open home of a business woman by a riverside.",
      "Lydia&rsquo;s story is a reminder that God does not require impressive infrastructure to plant his church. A riverside, a group of women at prayer, a heart opened by divine grace &mdash; these are sufficient materials for the beginning of what became one of the most beloved and faithful congregations in the entire New Testament. She stands as a model of the convert who immediately turns outward: opening home, household, and resources to the advance of the mission that saved her.",
    ],
  },
  {
    id: "Paul and Silas in Prison",
    heading: "Paul and Silas in Prison",
    reference: "Acts 16:16&ndash;25",
    paragraphs: [
      "As Paul and his companions go to the place of prayer, they encounter a slave girl who has a spirit of divination &mdash; a Python spirit, as Luke describes it, invoking the ancient Greco-Roman association with oracular prophecy. She had been bringing her owners considerable profit through fortune-telling. For many days she follows Paul and his group, crying out, &ldquo;These men are servants of the Most High God, who proclaim to you the way of salvation.&rdquo; What she says is true. But her testimony comes from a demonic source, and Paul refuses to allow it to stand.",
      "Paul, having become greatly annoyed, turns and says to the spirit, &ldquo;I command you in the name of Jesus Christ to come out of her.&rdquo; And the spirit came out that very hour. The exorcism is instantaneous and total. The power of Jesus&rsquo; name, invoked by his apostle, is sufficient to expel the demonic presence without ceremony or prolonged struggle. The slave girl is freed. But her freedom immediately sets off a chain of consequences, because her owners see that their hope of profit is gone.",
      "This is a stark collision between the kingdom of God and the economic interests of those who profit from spiritual darkness. The owners of the girl seize Paul and Silas and drag them into the marketplace before the rulers. Their accusation is framed in terms of Roman civic order rather than the actual grievance: &ldquo;These men are Jews, and they are disturbing our city. They advocate customs that are not lawful for us as Romans to accept or practice.&rdquo; The charge is political cover for an economic grievance. The gospel has disrupted their business model, and they want it stopped.",
      "The crowd joins in the attack, and the magistrates order Paul and Silas stripped and beaten with rods. They receive many blows &mdash; this is not a token punishment but a severe flogging. Then they are thrown into prison, with orders to the jailer to keep them securely. The jailer puts them in the inner prison and fastens their feet in the stocks. The language emphasizes confinement and maximum security. By every human measure, the mission to Philippi has been violently shut down.",
      "And yet at midnight Paul and Silas are praying and singing hymns to God, and the prisoners are listening to them. This scene is one of the most remarkable in all of Acts. Beaten, bleeding, shackled in the darkness of an inner cell, the apostles do not despair, do not curse their captors, do not call down judgment. They pray. They sing. Their response to suffering is worship, and their worship carries a witness even in the prison house. The other prisoners are listening. The gospel permeates even chains and darkness.",
      "The midnight hymns of Paul and Silas have echoed through two millennia of Christian suffering. They testify to a joy that does not depend on circumstances, a peace that transcends pain, and a trust in God that transforms even imprisonment into an opportunity for worship. Augustine wrote that &ldquo;our heart is restless until it repose in thee&rdquo; &mdash; and here we see the opposite truth embodied: the heart that rests in God is at peace even in chains. The prison becomes a sanctuary. The midnight hour becomes an act of praise.",
    ],
  },
  {
    id: "Believe in the Lord Jesus",
    heading: "Believe in the Lord Jesus",
    reference: "Acts 16:26&ndash;31",
    paragraphs: [
      "Suddenly, at the very moment of Paul and Silas&rsquo;s midnight worship, a great earthquake shakes the foundations of the prison. The doors fly open. Every prisoner&rsquo;s bonds are loosed. The earthquake is an act of God, not merely a natural phenomenon coincidentally timed. It is the same God who opened the Red Sea, who shook Sinai at the giving of the law, who raised Jesus from the dead on the third day &mdash; the God who rules over the physical order as surely as he rules the hearts of his servants and the course of history.",
      "The jailer wakes to find the prison doors open. He draws his sword to kill himself, assuming the prisoners have escaped and knowing that Roman law made him responsible for their lives with his own. But Paul calls out with a great voice, &ldquo;Do not harm yourself, for we are all here.&rdquo; This is an astonishing moment. Nothing legally or humanly compelled any prisoner to remain. The earthquake had broken every shackle and swung every door. The prisoners could have fled. But no one ran &mdash; not Paul, not Silas, not the other inmates. The integrity and authority of the apostles' witness had created a different kind of captivity: the captivity of attention to something greater than freedom from a cell.",
      "The jailer calls for lights and rushes in, trembling. He falls down before Paul and Silas. The man who had received orders to keep them securely, who had placed them in the inner prison with their feet in stocks, is now prostrate before them. He brings them out and asks, &ldquo;Sirs, what must I do to be saved?&rdquo; This is the great question of Acts 16. It is the question that the whole chapter has been building toward &mdash; through the Macedonian call, through Lydia&rsquo;s conversion, through the exorcism, through the flogging and the prison, through the midnight songs and the earthquake. God has been orchestrating circumstances to bring this man to this moment and this question.",
      "&ldquo;Believe in the Lord Jesus, and you will be saved, you and your household.&rdquo; The answer is both simple and inexhaustibly rich. Believe in the Lord Jesus. Not merely believe certain doctrines, though doctrine matters. Not merely perform religious rites, though the jailer and his household will be baptized. The heart of salvation is personal trust in a personal Lord &mdash; Jesus, the one who was crucified and raised, who sits at the right hand of the Father, whose name commands demons and shakes prison doors and opens hearts.",
      "The promise extends beyond the individual: &ldquo;you and your household.&rdquo; This is not a guarantee of automatic salvation for the jailer&rsquo;s family regardless of their faith. It is a promise that the same gospel that reached the jailer is sufficient and intended for his whole household. And indeed, Paul and Silas speak the word of the Lord to him and to all who are in his house. The message is proclaimed to all; all are given the opportunity to hear and believe. The gospel is not merely personal in the narrow sense &mdash; it is communal, household-forming, society-shaping in its intent.",
      "The question &ldquo;What must I do to be saved?&rdquo; is the pivotal question of all human existence. The Philippian jailer asked it from fear and desperation at midnight, in the ruins of a shaken prison. People ask it from every conceivable condition &mdash; from wealth and comfort, from emptiness and addiction, from religious searching and moral exhaustion. The answer is always the same: believe in the Lord Jesus. Not earn, not achieve, not perform &mdash; believe. Trust the one who died for sinners and rose to give life. This is the heart of the gospel that Paul and Silas carried from Troas to Philippi, that God preserved through flogging and imprisonment to deliver at midnight in a broken jail.",
    ],
  },
  {
    id: "The Philippian Jailer Baptized",
    heading: "The Philippian Jailer Baptized",
    reference: "Acts 16:32&ndash;40",
    paragraphs: [
      "The jailer who fell before Paul and Silas at midnight is a transformed man by morning. He and all his household are baptized in the same hour of the night &mdash; there is no delay, no waiting period, no prolonged catechesis before the outward sign of inward transformation is applied. Then he takes Paul and Silas, washes their wounds &mdash; the very wounds inflicted by the system the jailer had served &mdash; and sets food before them. He rejoices along with his entire household that he has believed in God. Joy, care, and table fellowship mark the birth of a new community of faith.",
      "The washing of the apostles&rsquo; wounds by the jailer carries a powerful symbolic resonance. This is not a reversal of roles for the sake of irony alone. It is an act of service that embodies the love and repentance of the new convert. The man who facilitated their imprisonment is now tending their injuries. The gospel does not leave people unchanged &mdash; it reconfigures their relationships and redirects their hands. What had been hands of confinement become hands of care.",
      "The entire sequence from the jailer&rsquo;s terror to his household&rsquo;s baptism to the table spread in joy covers a single night. This compressed narrative demonstrates something important about salvation&rsquo;s character: it is immediate in its essential action, even as its effects unfold over a lifetime. The jailer did not need to reform himself before coming to Christ. He came in trembling desperation and was received. The transformation &mdash; evidenced in the washed wounds and the set table &mdash; followed the believing, not preceded it.",
      "In the morning, the magistrates send word to release the prisoners. But Paul insists on a public acknowledgment. He and Silas are Roman citizens, and they have been publicly beaten and imprisoned without trial &mdash; a violation of Roman law. Paul is not being petty or litigious. He understands that the young church in Philippi needs the protection of a public correction. If the magistrates quietly release the apostles while the public charge against them stands, the church will be left exposed to the same accusations. Paul demands that the magistrates come themselves and release them publicly, which they do, with apologies.",
      "Paul and Silas go to Lydia&rsquo;s house, encourage the brothers, and depart. In two brief scenes &mdash; the public vindication before the magistrates and the encouragement of the new church at Lydia&rsquo;s home &mdash; Luke shows us Paul&rsquo;s pastoral wisdom. The gospel advances not only by preaching but by protecting the communities it creates. The apostle cares not only about individual souls but about the conditions in which the church can flourish and grow.",
      "The church of Philippi that was born in Acts 16 &mdash; in a riverside prayer meeting, in a slave girl&rsquo;s liberation, in a prison cell at midnight, at a jailer&rsquo;s table at dawn &mdash; would become one of Paul&rsquo;s greatest joys. He wrote to them from his own imprisonment years later: &ldquo;I thank my God in all my remembrance of you, always in every prayer of mine for you all making my prayer with joy, because of your partnership in the gospel from the first day until now&rdquo; (Philippians 1:3&ndash;5). The Philippian church was a partnership built on suffering, sustained by joy, and sealed by the blood of Christ &mdash; and it all began with a vision at midnight and a voice calling across the water: come over and help us.",
    ],
  },
];

const videoItems = [
  { videoId: "CGbNw855ksw", title: "BibleProject - Overview: Acts 1-12" },
  { videoId: "Z-17KxpjL0Q", title: "BibleProject - Overview: Acts 13-28" },
  { videoId: "qpnHJFn6A8A", title: "Paul and Silas in Prison - Acts 16 Explained" },
  { videoId: "3nhNbVhyFbM", title: "The Philippian Jailer - Salvation and Household Faith" },
];

export default function Acts16GuidePage() {
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
            Acts 16 &mdash; The Philippian Mission
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The Macedonian vision calling the gospel into Europe, Lydia of Thyatira whose heart the Lord opened by the riverside, Paul and Silas praying and singing at midnight in chains, and the Philippian jailer who asked &ldquo;What must I do to be saved?&rdquo; and believed with his whole household.
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
              Deepen your study of Acts 16 through visual teaching on the Macedonian call, Lydia&rsquo;s conversion, Paul and Silas in prison, and the Philippian jailer&rsquo;s faith.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Come Over and Help Us</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Acts 16 shows the gospel advancing not by human strategy alone but by the Spirit&rsquo;s sovereign direction &mdash; through closed doors, a vision in the night, an open heart by a river, a midnight earthquake, and a broken jailer asking the greatest question any soul can ask. God saves entire households, and he uses willing servants who will follow when he calls them across the water.
          </p>
        </div>
      </main>
    </div>
  );
}
