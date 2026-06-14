"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Samaritans Receive Spirit",
  "Philip and the Ethiopian",
  "Simon the Sorcerer",
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
    heading: "Overview of Acts 8",
    reference: "Acts 8:1&ndash;40",
    paragraphs: [
      "Acts 8 is a pivotal chapter in the expansion of the early church, tracing the dramatic movement of the gospel beyond the borders of Jerusalem into Samaria and then all the way to sub-Saharan Africa. The chapter opens in the immediate aftermath of Stephen&rsquo;s martyrdom, with a fierce persecution scattering the Jerusalem believers across Judea and Samaria. What looks like a catastrophic setback becomes, in the economy of God&rsquo;s providence, the very mechanism by which the gospel begins to fulfill the mandate of Acts 1:8 &mdash; to be witnesses in Jerusalem, Judea and Samaria, and to the ends of the earth.",
      "The dominant figure of Acts 8 is Philip the Evangelist, one of the seven deacons appointed in Acts 6. He is not to be confused with Philip the Apostle, one of the Twelve. Philip the Evangelist is a Hellenistic Jewish Christian &mdash; a Greek-speaking Jew from the diaspora &mdash; which may partly explain his readiness to cross ethnic and cultural boundaries with the gospel. Luke presents him as a man who follows the Spirit&rsquo;s leading without hesitation, whether that means preaching to crowds in the despised region of Samaria or abandoning a fruitful ministry to follow a desert road at the Spirit&rsquo;s prompting.",
      "Three major episodes structure the chapter. First, Philip preaches in Samaria with great power, and a significant revival breaks out, accompanied by exorcisms and healings. The Apostles Peter and John then come from Jerusalem to confirm the work and pray for the believers to receive the Holy Spirit. Second, threading through the Samaria narrative is the story of Simon the Sorcerer, who believes and is baptized but whose heart is not right with God &mdash; a warning against seeking the gifts of God as instruments of personal power. Third, Philip is divinely redirected from Samaria to a desert road where he meets an Ethiopian court official reading Isaiah, leads him to faith in Christ, and baptizes him &mdash; extending the gospel south into Africa.",
      "Together these three stories illustrate a central Lukan theme: the gospel of Jesus Christ breaks every barrier that human beings erect. The barrier of ethnicity &mdash; Samaritans were half-breeds despised by Jewish purity culture &mdash; falls. The barrier of race and geography &mdash; a foreigner from the very edges of the known world &mdash; falls. Even the barrier of religious status &mdash; the Ethiopian was a eunuch, barred from full participation in the Temple assembly &mdash; falls. In Christ, all are welcomed; in the Spirit, all receive the same gift. Acts 8 is a foretaste of the worldwide church that Revelation will later depict as &ldquo;every tribe and language and people and nation&rdquo; gathered around the throne.",
      "The chapter also models what gospel-centered ministry looks like in practice. Philip does not strategize geographically for maximum impact; he follows the Spirit&rsquo;s leading one step at a time. He preaches Jesus, not a system of doctrine or a social program. He meets people where they are &mdash; in their curiosity, in their captivity to evil spirits, in their earnest reading of a scroll they cannot understand. And when his work in one place is done, he moves on. The result is a trail of joy &mdash; &ldquo;there was much joy in that city&rdquo; (8:8) &mdash; and a single Ethiopian official who goes on his way rejoicing (8:39), carrying the good news back to a continent the Twelve had not yet reached.",
    ],
  },
  {
    id: "Samaritans Receive Spirit",
    heading: "The Samaritans Receive the Spirit",
    reference: "Acts 8:1&ndash;17",
    paragraphs: [
      "The persecution that erupts after Stephen&rsquo;s martyrdom is severe. &ldquo;Saul was ravaging the church, and entering house after house, he dragged off men and women and committed them to prison&rdquo; (8:3). The young man at whose feet the witnesses had laid their cloaks when they stoned Stephen has become the chief engine of suppression. Yet the very force that seeks to stamp out the gospel succeeds only in scattering those who carry it. Those who were scattered went everywhere &ldquo;preaching the word&rdquo; (8:4) &mdash; the Greek word is euangelizomenoi, evangelizing, the verb from which we get the word &ldquo;evangelist.&rdquo; Persecution produced preachers.",
      "Philip goes down to a city of Samaria and proclaims Christ there. The reception is remarkable. The crowds give &ldquo;unified attention&rdquo; to what Philip says, hearing him and seeing the signs he performs &mdash; unclean spirits crying out as they are expelled, the paralyzed and the lame walking. Luke records simply that &ldquo;there was much joy in that city&rdquo; (8:8). The choice of Samaria is itself theologically significant. Jews and Samaritans shared centuries of mutual contempt. Samaritans were descendants of the northern tribes who had intermarried with Assyrian colonists after the fall of the northern kingdom, and their rival worship on Mount Gerizim was a source of deep religious offense to Jerusalem Jews. For the gospel to take root in Samaria was a declaration that no ethnic or religious animosity is too deep for grace to overcome.",
      "When the Jerusalem church hears that Samaria has received the word of God, they send Peter and John. This is notable: the two senior apostles travel to verify and confirm a work they did not initiate. They are not dispatched to assess whether Philip has done something unauthorized; they come to pray for the Samaritan believers to receive the Holy Spirit, because the Spirit had not yet fallen on any of them &mdash; they had been baptized only in the name of the Lord Jesus (8:14&ndash;16). When Peter and John lay hands on them, they receive the Holy Spirit.",
      "This moment has generated extensive theological discussion about why the Spirit was withheld and then given through apostolic prayer and laying on of hands. Some see in it a pattern of confirmation that underlies later sacramental practice. Others see it as a unique, once-for-all event required by the peculiar tension between Jews and Samaritans &mdash; the presence of apostolic witnesses from Jerusalem ensures that the Samaritan church is not a separate, parallel movement but a genuine extension of the one body rooted in Jerusalem. On this reading, the Spirit&rsquo;s arrival through the apostles&rsquo; hands visibly unites Samaria to Jerusalem in a way that could not have been symbolically achieved any other way.",
      "Whatever the precise theological explanation, the outcome is clear: the Samaritans received the same Spirit as the Jerusalem believers, without distinction. The promise of Acts 2:38 &mdash; &ldquo;you will receive the gift of the Holy Spirit&rdquo; &mdash; was extended beyond the Jewish community to include people whom Jewish culture had long written off. The Spirit himself is no respecter of ethnic boundaries. This Samaritan Pentecost is one of several watershed moments in Acts through which Luke demonstrates that the new covenant community is defined not by bloodline but by the Spirit, not by geographic or ethnic proximity to Jerusalem but by faith in the risen Christ.",
      "The disciples&rsquo; joyful return to Jerusalem after praying for Samaria is accompanied by yet more preaching &mdash; they stop in many Samaritan villages on the way back (8:25). The gospel is not a destination that gets settled in one place; it is a movement that keeps moving. Every encounter with its power generates new bearers of its message, new communities of its witness. What began in Jerusalem is now firmly established in the despised region to the north &mdash; and from there it will push further south, to the very edge of the known world.",
    ],
  },
  {
    id: "Philip and the Ethiopian",
    heading: "Philip and the Ethiopian Eunuch",
    reference: "Acts 8:26&ndash;40",
    paragraphs: [
      "One of the most beautiful and carefully crafted stories in the book of Acts unfolds on a desert road running from Jerusalem south toward Gaza. An angel of the Lord speaks to Philip with a striking command: &ldquo;Rise and go toward the south to the road that goes down from Jerusalem to Gaza&rdquo; (8:26). The parenthetical note &mdash; &ldquo;This is a desert place&rdquo; &mdash; seems designed to heighten the improbability of the instruction. Philip is in the middle of a fruitful city revival. The Spirit is directing him away from a crowd and toward a desert highway. He goes.",
      "On that road Philip encounters an Ethiopian official of great authority, the treasurer of the Candace &mdash; the queen mother &mdash; of Ethiopia, who had come to Jerusalem to worship and was now returning home. He is reading aloud from the scroll of Isaiah as his chariot moves through the desert heat. This man is an extraordinary figure. Ethiopia &mdash; ancient Cush &mdash; was located at the southernmost edge of the known world, beyond Egypt, at the limits of the Roman geographical imagination. &ldquo;The ends of the earth&rdquo; in Acts 1:8 finds a partial literal fulfillment in this man&rsquo;s homeland. He represents the furthest reach of the gospel in its initial southward movement.",
      "The Ethiopian had come to Jerusalem to worship, which suggests that he was either a proselyte &mdash; a Gentile who had fully converted to Judaism &mdash; or a God-fearer, a Gentile drawn to Jewish monotheism and ethics without full conversion. He is reading from Isaiah 53, the great Servant Song: &ldquo;As a sheep led to the slaughter or a lamb before its shearer is silent, so he opens not his mouth. In his humiliation justice was denied him. Who can describe his generation? For his life is taken away from the earth&rdquo; (8:32&ndash;33). The Spirit prompts Philip to run and join the chariot, and Philip calls up to the Ethiopian: &ldquo;Do you understand what you are reading?&rdquo; The honest answer comes back: &ldquo;How can I, unless someone guides me?&rdquo;",
      "The Ethiopian asks the question that every reader of Isaiah 53 must ask: who is the prophet speaking about, himself or someone else? Philip, beginning from this scripture, tells him the good news about Jesus. The connection between the suffering Servant of Isaiah 53 and Jesus of Nazareth &mdash; crucified, buried, raised &mdash; is the interpretive key that opens the whole of Israel&rsquo;s Scripture. Isaiah&rsquo;s picture of a silent, innocent, atoning sufferer finds its perfect antitype in the one who bore the sin of many and made intercession for transgressors. In Christ, the Ethiopian eunuch&rsquo;s earnest reading finally makes sense.",
      "As they travel together, they come to water, and the Ethiopian makes an urgent request: &ldquo;See, here is water! What prevents me from being baptized?&rdquo; (8:36). The question is pointed, because there was something that might have been thought to prevent him: he was a eunuch, and Deuteronomy 23:1 excluded eunuchs from the assembly of the Lord. Isaiah 56:3&ndash;5, however, had promised that in the coming age, eunuchs who kept God&rsquo;s covenant would be given &ldquo;a monument and a name better than sons and daughters.&rdquo; In Philip&rsquo;s answer &mdash; he commands the chariot to stop and baptizes the Ethiopian &mdash; Isaiah&rsquo;s promise is fulfilled. The one who was excluded is fully included. Every barrier falls before the love of God in Christ.",
      "When they come up out of the water, the Spirit of the Lord carries Philip away, and the Ethiopian sees him no more. He goes on his way rejoicing &mdash; a transformed man, baptized into Christ, heading home to the ends of the earth with the gospel burning in his heart. Philip finds himself at Azotus and continues preaching all the way to Caesarea. The two men part without ceremony or farewell. But the encounter on the desert road has changed everything: the good news of Jesus Christ is no longer just a Jewish or Samaritan story. It is headed south into Africa, carried by a joyful official whose encounter with a stranger on a desert road opened the Scriptures to him in a way they had never been opened before.",
    ],
  },
  {
    id: "Simon the Sorcerer",
    heading: "Simon the Sorcerer",
    reference: "Acts 8:9&ndash;24",
    paragraphs: [
      "Threading through the account of the Samaritan revival is a cautionary tale about a man named Simon. Before Philip arrived, Simon had practiced magic in the city and amazed the people of Samaria, claiming to be someone great. The people, from the least to the greatest, called him &ldquo;the Great Power of God&rdquo; (8:10). For a long time he had held them spellbound. Simon&rsquo;s story is an early encounter between the gospel and the world of popular religious magic &mdash; a world that offered power, wonder, and status through spiritual technique rather than relationship with the living God.",
      "When Philip came preaching Christ and performing genuine signs, Simon himself believed and was baptized, and he followed Philip everywhere, astonished by the signs and great miracles he saw. At this point Luke does not indicate any problem with Simon&rsquo;s conversion. He believed; he was baptized; he attached himself to Philip. But his true orientation is revealed when Peter and John arrive and the Holy Spirit is given through the laying on of their hands. Simon sees this and offers money: &ldquo;Give me this power also, so that anyone on whom I lay my hands may receive the Holy Spirit&rdquo; (8:19). He wants to add the apostolic gift to his repertoire as a spiritual merchant.",
      "Peter&rsquo;s rebuke is fierce and immediate. &ldquo;Your silver perish with you, because you thought you could obtain the gift of God with money!&rdquo; (8:20). Peter goes further: &ldquo;You have neither part nor lot in this matter, for your heart is not right before God&rdquo; (8:21). Here is the diagnostic test. Simon has the outward markers &mdash; belief, baptism, association with the community of faith &mdash; but his heart is not right. He has approached the gospel as a consumer of spiritual resources rather than as a repentant recipient of grace. He sees the Spirit&rsquo;s gifts as commodities to be obtained, not as sovereign bestowals of a holy God who cannot be purchased.",
      "Peter urges Simon to repent and pray, &ldquo;if possible, the intent of your heart may be forgiven you&rdquo; (8:22). The &ldquo;if possible&rdquo; is not a statement of uncertainty about God&rsquo;s forgiveness but a reflection of the gravity of Simon&rsquo;s sin &mdash; the kind of sin that, if it continues unrepented, leads to destruction. Peter tells him he is in &ldquo;the gall of bitterness and the bond of iniquity&rdquo; (8:23) &mdash; still captive to the spiritual bondage that characterized his life before the gospel came. Simon&rsquo;s response is telling: &ldquo;Pray for me to the Lord, that nothing of what you have said may come upon me&rdquo; (8:24). He is concerned about the consequences, not about the condition of his heart &mdash; a response that does not inspire confidence.",
      "Simon&rsquo;s story gave birth to a word in the English language: simony, the buying or selling of ecclesiastical offices or spiritual gifts. His episode stands as a permanent warning in the life of the church about the temptation to treat the things of God as resources for personal advancement. It is possible to be around the gospel, to see its power at work, even to undergo the outward ceremonies of the Christian community, and yet to remain fundamentally oriented around the self rather than around Christ. The gifts of the Spirit are exactly that &mdash; gifts, freely given by a sovereign God &mdash; and any attempt to control, possess, or leverage them for personal gain is a fundamental category error about the nature of grace.",
      "The Simon episode also highlights the importance of heart examination in Christian community. Baptism is not a magic ritual that automatically transforms the heart. Belief as an intellectual assent to propositions is not the same as the repentance and faith that marks genuine conversion. The early church is not naive about this. Peter&rsquo;s ability to see through Simon&rsquo;s external compliance to the unchanged condition of his heart is a reminder that pastoral discernment, honest confrontation, and the call to genuine repentance are as much a part of the church&rsquo;s ministry as proclamation and baptism. The good news is not safe; it demands everything and settles for nothing less than a transformed heart.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Acts 8 Today",
    reference: "Acts 8 &mdash; For the Life of the Church",
    paragraphs: [
      "Acts 8 has an electric relevance for Christians thinking about mission in the twenty-first century. The chapter&rsquo;s opening premise is bracing: persecution scattered the Jerusalem church and the scattered believers &ldquo;went everywhere preaching the word&rdquo; (8:4). The ordinary believers &mdash; not the apostles, who stayed in Jerusalem &mdash; were the ones who spread the gospel. They were not trained evangelists with a ministry platform. They were refugees carrying the best news they had ever heard, sharing it as naturally as they breathed. The application is direct: mission is not primarily the work of professionals but the overflow of ordinary believers who have genuinely encountered Jesus.",
      "Philip&rsquo;s obedience to the Spirit in Acts 8 offers a model of responsive, Spirit-directed ministry. He preached where he was sent, not where he calculated maximum strategic impact. He followed the Spirit&rsquo;s prompt to leave a thriving urban ministry for a desert road. He ran alongside a moving chariot without knowing why. The Spirit-led life is not a life of carefully calculated outcomes but a life of attentive, responsive obedience to divine prompting. For contemporary Christians, this raises the question: are we attentive enough to the Spirit&rsquo;s leading to respond when he directs us toward an unexpected conversation, an unusual encounter, an open Scripture?",
      "The Ethiopian eunuch episode in particular speaks to the role of the Bible in evangelism and discipleship. The Ethiopian was reading the Scripture earnestly but without understanding. What he needed was not a different text but an interpreter who could show him that Jesus was the fulfillment of everything he had been reading. Philip&rsquo;s ministry was Christ-centered exposition &mdash; he &ldquo;beginning from this Scripture &hellip; told him the good news about Jesus&rdquo; (8:35). This is a model for how Christians engage with people who are spiritually open but lack the interpretive key that unlocks the Bible&rsquo;s coherence. The key is always Jesus &mdash; crucified, risen, reigning, returning.",
      "The question the Ethiopian asked &mdash; &ldquo;Do you understand what you are reading?&rdquo; &mdash; is Philip&rsquo;s question reversed: &ldquo;How can I, unless someone guides me?&rdquo; This honest admission of need is the posture of genuine inquiry, and it opened a gospel conversation that changed the world. Christians today have the opportunity to be that guide &mdash; not in a patronizing sense, but in the sense of walking alongside someone in their questions and confusion and showing them, from the Scriptures, who Jesus is. Few ministries are more effective, more personal, or more lasting than sitting beside someone in their sincere search and opening the Word to them.",
      "The story of Simon the Sorcerer warns against what might be called a transactional or consumerist approach to Christianity. Simon wanted to add the Holy Spirit&rsquo;s power to his repertoire as a spiritual entrepreneur. His error is not foreign to contemporary Christianity, which sometimes promotes the gospel as a resource for personal success, health, or spiritual power. The Simon episode insists that the Spirit is not a commodity, that the grace of God cannot be purchased or leveraged, and that genuine conversion involves a fundamental reorientation of the heart from self to God. The test is not whether someone has prayed a prayer or been baptized but whether their heart is right before God.",
      "Finally, Acts 8 invites the contemporary church to expand its imagination about who belongs to the gospel community. The Samaritans &mdash; despised half-breeds &mdash; and the Ethiopian eunuch &mdash; a foreigner legally barred from Temple membership &mdash; are both fully received into the community of Christ. The chapter&rsquo;s geographic movement from Jerusalem to Samaria to the ends of the earth mirrors a spiritual movement from the familiar and comfortable to the unexpected and marginalized. The church that takes Acts 8 seriously will ask not only &ldquo;who is already in our community?&rdquo; but &ldquo;who is on the desert road outside our city, reading Scripture they do not yet understand, waiting for someone to come alongside them?&rdquo; Those are the people God may be sending us to next.",
    ],
  },
];

const videoItems = [
  { videoId: "ypAo6qQEMxM", title: "BibleProject - Overview of Acts 1-12" },
  { videoId: "eK6AvEn3iFU", title: "Philip and the Ethiopian Eunuch - Acts 8 Explained" },
  { videoId: "1nB7GMMRo8Y", title: "The Gospel Goes to Samaria - Acts 8 Study" },
  { videoId: "Lp3SNGCkzFs", title: "Simon the Sorcerer and the Gift of the Holy Spirit - Acts 8" },
];

export default function Acts8GuidePage() {
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
            Acts 8 &mdash; Philip and the Ethiopian
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The gospel spreads south &mdash; Philip proclaims Christ in Samaria, exposes the counterfeit faith of Simon the Sorcerer, and follows the Spirit to a desert road where an Ethiopian eunuch&rsquo;s earnest reading of Isaiah opens a door to the ends of the earth.
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

        <section style={{ marginTop: "3.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Go deeper into Acts 8 through these video teachings on Philip&rsquo;s ministry in Samaria, his encounter with the Ethiopian eunuch, and the dramatic spread of the gospel to the ends of the earth.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Gospel That Crosses Every Boundary</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Acts 8 shows that the gospel of Jesus Christ knows no borders &mdash; ethnic, geographic, social, or religious. The despised Samaritans and the distant Ethiopian receive the same Spirit, the same baptism, the same joy. What persecution scattered, the Spirit gathered into a worldwide movement. Philip&rsquo;s obedience on a desert road echoes still: go where the Spirit sends, open the Scripture, proclaim Jesus, and watch the ends of the earth rejoice.
          </p>
        </div>
      </main>
    </div>
  );
}
