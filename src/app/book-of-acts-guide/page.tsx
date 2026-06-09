"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "pentecost", label: "Pentecost" },
  { id: "jerusalem", label: "Jerusalem Church" },
  { id: "expansion", label: "Expansion" },
  { id: "paul", label: "Paul's Journeys" },
  { id: "speeches", label: "Key Speeches" },
  { id: "themes", label: "Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const PENTECOST_ITEMS = [
  {
    title: "Acts 2:1–13 — The Coming of the Spirit",
    color: GOLD,
    body: "On the day of Pentecost (a Jewish harvest festival, 50 days after Passover), the disciples were gathered together when \'suddenly a sound like the blowing of a violent wind came from heaven and filled the whole house\' and \'tongues of fire\' rested on each of them. They were \'filled with the Holy Spirit and began to speak in other tongues\' (Acts 2:4). The crowds from many nations each heard them speaking in their own language — a reversal of Babel (Gen 11), where languages were confused to divide; now the Spirit unifies across language boundaries.",
  },
  {
    title: "Acts 2:14–41 — Peter's Pentecost Sermon",
    color: GREEN,
    body: "Peter\'s first sermon is a masterwork of biblical theology. He interprets Pentecost through Joel 2 (\'In the last days, God says, I will pour out my Spirit on all people\'), Psalm 16 (David\'s prophecy of the resurrection), and Psalm 110 (the Lord\'s ascension to God\'s right hand). The sermon\'s structure: Jesus of Nazareth was accredited by miracles; you had him killed; God raised him; David prophesied this; therefore know for certain that God has made this Jesus both Lord and Messiah. \'What shall we do?\' — repent and be baptized. Three thousand were added.",
  },
  {
    title: "Acts 2:42–47 — The Jerusalem Community",
    color: TEAL,
    body: "The first description of the church: \'They devoted themselves to the apostles\' teaching and to fellowship, to the breaking of bread and to prayer.\' Signs and wonders. Holding all things in common, selling possessions to give to those in need. Meeting daily in the temple courts and in homes. \'The Lord added to their number daily those who were being saved\' (2:47). This picture — Word, sacrament, prayer, community, generosity, growth — has shaped Christian visions of church renewal ever since.",
  },
  {
    title: "The Meaning of Pentecost",
    color: PURPLE,
    body: "Pentecost is the birthday of the church in the age of the Spirit. It fulfills Jesus\'s promise (Acts 1:8: \'you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, Judea, Samaria, and to the ends of the earth\'). The gift of tongues demonstrates that the gospel is for all nations — a preview of the multinational, multicultural church that will emerge throughout Acts. John Stott: Pentecost is the Christian\'s birthright — every believer has received the Spirit (Rom 8:9), the down payment of the age to come (Eph 1:14).",
  },
];

const EXPANSION_ITEMS = [
  {
    id: "ex1",
    title: "Persecution and Scattering (Acts 6–8)",
    content: "Stephen, full of grace and power, performs signs among the people and is brought before the Sanhedrin. His speech (7:1–53) is the longest in Acts — a retelling of Israel\'s history emphasizing repeated rejection of God\'s messengers: \'You always resist the Holy Spirit!\' He is stoned; Saul watches. The church is scattered throughout Judea and Samaria — fulfilling Acts 1:8. Philip takes the gospel to Samaria and to an Ethiopian eunuch (8:26–40), a Gentile official, pointing toward the book\'s movement outward. The persecution that aimed to destroy the church spread it instead.",
  },
  {
    id: "ex2",
    title: "Saul's Conversion (Acts 9)",
    content: "On the road to Damascus to persecute Christians, Saul is confronted by the risen Christ: \'Saul, Saul, why do you persecute me?\' He is blinded, fasts three days, and is healed and baptized by Ananias. The most dramatic conversion in church history — the leading persecutor becomes the leading missionary. Luke tells this story three times in Acts (chapters 9, 22, 26), underscoring its theological weight. Paul will later describe himself as the chief of sinners saved by grace (1 Tim 1:15), making his conversion a paradigm of the gospel\'s reach.",
  },
  {
    id: "ex3",
    title: "Peter and Cornelius (Acts 10–11)",
    content: "God gives Peter a vision of unclean animals with the command \'Do not call anything impure that God has made clean.\' Simultaneously, the Roman centurion Cornelius (a devout Gentile) is directed to send for Peter. Peter speaks in Cornelius\'s household; the Holy Spirit falls on these Gentiles — \'even on Gentiles\' (10:45) — before baptism. Jewish Christians in Jerusalem question Peter; he recounts the vision. \'So then, God has granted even Gentiles repentance that leads to life.\' This is the decisive theological breakthrough in Acts: the gospel is for Gentiles without first becoming Jews.",
  },
  {
    id: "ex4",
    title: "Antioch — First Gentile Church (Acts 11:19–30)",
    content: "Scattered believers reach Antioch in Syria (the third largest city in the Roman Empire) and begin speaking to Greeks. A great number turn to the Lord. Barnabas brings Saul from Tarsus. For a full year they teach great numbers. \'The disciples were called Christians first at Antioch\' (11:26) — the first time the name appears. Antioch becomes the home base for the Gentile mission — the church that sends Paul and Barnabas on their journeys (Acts 13:1–3). A model for mission-sending churches.",
  },
];

const PAUL_JOURNEYS = [
  {
    id: "j1",
    title: "First Missionary Journey (Acts 13:1–14:28)",
    content: "Barnabas and Saul are set apart by the Spirit and sent from Antioch. Cyprus (Sergius Paulus, the proconsul, believes), then the southern coast of Asia Minor: Pisidian Antioch (major synagogue sermon — Paul\'s first extended speech in Acts — Jews reject, Gentiles receive), Iconium, Lystra (Paul stoned and left for dead), Derbe. Return through the same cities, appointing elders in each church. Report back to Antioch: \'how he had opened a door of faith to the Gentiles\' (14:27). The pattern established: synagogue first, then Gentiles.",
  },
  {
    id: "j2",
    title: "Jerusalem Council (Acts 15)",
    content: "The critical theological crisis: some teachers insist Gentile converts must be circumcised and follow the Mosaic law. The Jerusalem Council debates: Peter testifies to Cornelius; Barnabas and Paul report; James gives the ruling. Decision: do not burden Gentiles with the full Mosaic law — only abstain from food sacrificed to idols, from blood, from the meat of strangled animals, and from sexual immorality. The letter is sent. This is the foundational decision that preserves the gospel of grace — justification by faith without circumcision.",
  },
  {
    id: "j3",
    title: "Second Missionary Journey (Acts 15:36–18:22)",
    content: "Paul (now with Silas) returns to Asia Minor, picks up Timothy at Lystra. The Spirit prevents them from entering Asia or Bithynia — they receive the Macedonian vision (\'Come over to Macedonia and help us!\'). Philippi: Lydia converts, slave girl delivered, Paul and Silas imprisoned, earthquake, jailer\'s conversion — \'Believe in the Lord Jesus and you will be saved, you and your household.\' Thessalonica: success and riot. Berea: noble Bereans search the scriptures daily. Athens: Areopagus speech. Corinth: 18 months, founding the church. Ephesus briefly.",
  },
  {
    id: "j4",
    title: "Third Journey & Rome (Acts 18:23–28:31)",
    content: "Paul spends two years in Ephesus (major center), then Macedonia and Greece, then the return journey. In Troas: Eutychus falls from a window, Paul raises him. Jerusalem: arrested at the Temple (false accusation). Paul appeals to Caesar. Sea voyage and shipwreck at Malta (28:1–10). Arrival in Rome: Paul under house arrest preaching the kingdom of God for two years, \'welcoming all who came to him, proclaiming the kingdom of God and teaching about the Lord Jesus Christ — with all boldness and without hindrance!\' The abrupt ending: the Word is not chained (2 Tim 2:9).",
  },
];

const SPEECHES = [
  {
    title: "Peter at Pentecost (Acts 2:14–41)",
    color: GOLD,
    body: "The paradigm apostolic sermon: OT fulfillment (Joel, Psalms), historical claims about Jesus (miracles, crucifixion, resurrection, ascension), a call to response (repent and be baptized). Peter argues from Scripture that Jesus, crucified by human hands and raised by God, is both Lord and Messiah — the fulfillment of everything Israel was waiting for. The structure anticipates the gospel presentations throughout Acts: promise → fulfillment in Jesus → response required.",
  },
  {
    title: "Stephen\'s Speech (Acts 7:2–53)",
    color: GREEN,
    body: "The longest speech in Acts and a theological masterwork. Stephen retells Israel\'s entire history — Abraham, Joseph, Moses, the wilderness, the tabernacle, Solomon\'s temple — to make one point: Israel has consistently rejected God\'s messengers. The prophets, Moses, and now the Righteous One himself. \'You always resist the Holy Spirit!\' The speech is deliberately provocative — Stephen knows it will cost him his life. He models the prophetic tradition of truth-telling even unto death, and becomes the first Christian martyr.",
  },
  {
    title: "Paul at Pisidian Antioch (Acts 13:16–41)",
    color: TEAL,
    body: "Paul\'s first major speech is addressed to a synagogue congregation. Like Peter, he moves through OT history (Exodus to David) to arrive at Jesus. God has brought to Israel \'a Savior, Jesus, as he promised.\' John\'s baptism of repentance. The people of Jerusalem and their leaders fulfilled prophecy by condemning him. God raised him from the dead — as the Psalms foretold. Through Jesus, forgiveness and justification are proclaimed — what the law of Moses could not accomplish. \'See that what the prophets have said does not happen to you.\'",
  },
  {
    title: "Paul at the Areopagus (Acts 17:22–31)",
    color: PURPLE,
    body: "Paul\'s speech to Greek philosophers in Athens is the NT\'s premier model of cultural engagement. He begins with what they already know (\'I see that you are very religious\'), quotes their own poets (Aratus: \'We are his offspring\'), and uses the \'unknown god\' altar as a bridge to the true God. He then makes exclusive claims: God has appointed a man to judge the world; he has raised him from the dead. Some scoff (resurrection is foolishness to Greeks); some want to hear more; some believe. The speech demonstrates engaging rather than condemning culture — and the resurrection remains non-negotiable.",
  },
];

const THEMES = [
  {
    title: "The Spirit Drives the Mission",
    color: GOLD,
    body: "Acts is sometimes called \'The Acts of the Holy Spirit.\' The Spirit initiates (13:2: \'Set apart Barnabas and Saul for the work to which I have called them\'), directs (16:6–7: prevented from going to Asia or Bithynia), empowers (1:8), falls on converts (10:44), and speaks through prophets (21:11). The church does not spread primarily because of clever strategy or great personalities — it spreads because the Spirit is at work. This is profoundly liberating: our job is faithfulness and availability; the Spirit handles growth.",
  },
  {
    title: "The Gospel Breaks Every Barrier",
    color: GREEN,
    body: "Acts systematically shows the gospel crossing every human boundary: Jewish → Samaritan (ch 8) → Gentile (ch 10) → Greek intellectual (ch 17) → Roman official (ch 10, 16) → to the ends of the earth. Every social barrier falls: the Ethiopian eunuch (racial/geographical boundary), Cornelius (Jewish-Gentile boundary), Lydia (gender boundary), the Philippian jailer (economic boundary). The gospel is \'for all people\' (Luke 2:10) and Acts demonstrates it in historical narrative.",
  },
  {
    title: "The Pattern of Rejection and Blessing",
    color: TEAL,
    body: "A striking pattern throughout Acts: the gospel is preached, some respond, others reject. When the synagogue rejects Paul, he turns to the Gentiles (13:46: \'Since you reject [the word] and do not consider yourselves worthy of eternal life, we now turn to the Gentiles\'). This happens three times (13, 18, 28). Paul is never bitter — he follows the Spirit\'s leading. The same gospel that saves some hardens others (2 Cor 2:15–16). This should inform our expectations in mission: rejection is not failure; it is part of the pattern.",
  },
  {
    title: "Acts and the Church Today",
    color: PURPLE,
    body: "Acts is both descriptive (what happened) and prescriptive (patterns for the church). Not everything in Acts is normative — Paul\'s unique apostolic authority, the founding miracles of the new age — but the patterns are instructive: prayerful dependence on the Spirit, bold proclamation, crossing cultural boundaries, planting reproducing communities, appointing leaders, suffering as the path of mission. The book ends without formal closure — the story is still being written. Every generation of the church is a new chapter in the Acts of the Spirit.",
  },
];

const VIDEOS = [
  { videoId: "oNNZO9i1Gjc", title: "The Book of Acts — BibleProject Overview" },
  { videoId: "CGbNw855ksw", title: "Acts Part 1 — BibleProject" },
  { videoId: "Z-17KxpjL0Q", title: "Acts Part 2 — BibleProject" },
  { videoId: "Z-17KxpjL0Q", title: "Paul's Missionary Journeys in Acts" },
  { videoId: "7NKVLJOxudU", title: "Pentecost and the Holy Spirit in Acts" },
  { videoId: "YSP5GGriijI", title: "The Jerusalem Council — Acts 15 Explained" },
];

export default function BookOfActsGuide() {
  const [activeTab, setActiveTab] = useLocalStorage("vine_acts_tab", "overview");
  const [openExp, setOpenExp] = useLocalStorage("vine_acts_exp", "");
  const [openPaul, setOpenPaul] = useLocalStorage("vine_acts_paul", "");
  const [journal, setJournal] = useLocalStorage("vine_acts_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ marginBottom: 8 }}>
          <span style={{ color: GOLD, fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Bible Study</span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>The Book of Acts</h1>
        <p style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }}>
          The Acts of the Apostles is the sequel to Luke&apos;s Gospel — the story of what the risen Jesus continued to do through his Spirit-empowered church. From Pentecost in Jerusalem to Paul&apos;s imprisonment in Rome, Acts traces the gospel&apos;s explosive spread across the Roman world, crossing every ethnic, cultural, and social barrier in its path.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ padding: "8px 16px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#fff" : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Introduction to Acts</h2>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                Acts was written by Luke (the physician and traveling companion of Paul) as the second volume of his two-part work (Luke–Acts). It covers approximately 30 years of early church history, from the resurrection appearances (c. 30 AD) through Paul&apos;s Roman imprisonment (c. 62 AD). The organizing principle is Acts 1:8: &ldquo;You will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.&rdquo;
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                Acts is the only NT book that is primarily narrative history. It serves as the crucial bridge between the Gospels and the Epistles — explaining how the church that Paul writes to in Romans, Corinthians, and Galatians came to exist. Without Acts, the Epistles are letters without context; without the Epistles, Acts is narrative without theology.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12 }}>The Structure of Acts</h3>
              {[
                "Jerusalem: The Birth of the Church (1–7)",
                "Judea and Samaria: Persecution and Expansion (8–12)",
                "First Missionary Journey: Asia Minor (13–14)",
                "Jerusalem Council (15)",
                "Second Missionary Journey: Macedonia and Greece (15:36–18:22)",
                "Third Missionary Journey: Ephesus (18:23–21:16)",
                "Jerusalem Arrest and Caesarean Imprisonment (21–26)",
                "Voyage to Rome and House Arrest (27–28)",
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                  <span style={{ color: GOLD, fontWeight: 700, minWidth: 24 }}>{i + 1}.</span>
                  <span style={{ color: MUTED, lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PENTECOST */}
        {activeTab === "pentecost" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Pentecost — Acts 2</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {PENTECOST_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JERUSALEM */}
        {activeTab === "jerusalem" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>The Jerusalem Church (Acts 2–7)</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {[
                { title: "Healing of the Lame Man (Acts 3–4)", color: GOLD, body: "Peter and John heal a man lame from birth at the temple gate Beautiful. Peter\'s sermon: Jesus raised from the dead, the author of life — \'Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved\' (4:12). The Sanhedrin arrests them; Peter and John respond: \'We must obey God rather than human beings.\' Released, the church prays for boldness — and the meeting place shakes. The first confrontation between the church and Jewish authorities sets the pattern for the whole book." },
                { title: "Ananias and Sapphira (Acts 5:1–11)", color: GREEN, body: "The first internal crisis of the church. Ananias and Sapphira sell property and donate part while claiming to give all. Peter confronts them: \'You have not lied just to human beings but to God.\' Both die. \'Great fear seized the whole church and all who heard about these events\' (5:11). The integrity of the community depends on truthfulness before God. This sobering episode shows that the Spirit who gives life also judges dishonesty. The church is a divine community, not merely a human organization." },
                { title: "The Seven (Acts 6:1–7) — First Church Conflict", color: TEAL, body: "The Hellenistic Jewish widows are being neglected in daily food distribution. The Twelve say: \'It would not be right for us to neglect the ministry of the word of God in order to wait on tables.\' They appoint seven men of good reputation, full of the Spirit and wisdom. Stephen and Philip are among them. This is a practical model of church governance: when administration threatened the teaching ministry, the apostles delegated wisely rather than either ignoring the problem or trying to do everything themselves. \'The word of God spread. The number of disciples increased rapidly\' (6:7)." },
                { title: "Persecution Scatters the Church (Acts 8:1–4)", color: PURPLE, body: "After Stephen\'s martyrdom, a great persecution scatters the Jerusalem believers throughout Judea and Samaria — except the apostles. The enemies of the gospel unintentionally fulfill Acts 1:8. \'Those who had been scattered preached the word wherever they went\' (8:4). What appeared to be catastrophe became the vehicle of expansion. This is a recurring pattern in church history: persecution spreads rather than eliminates the gospel. Tertullian: \'The blood of the martyrs is the seed of the church.\'" },
              ].map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EXPANSION */}
        {activeTab === "expansion" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>The Gospel Expands (Acts 8–12)</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>The critical chapters where the gospel breaks through every boundary — to Samaritans, to an Ethiopian, and definitively to Gentiles.</p>
            {EXPANSION_ITEMS.map((item) => {
              const isOpen = openExp === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenExp(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{item.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* PAUL'S JOURNEYS */}
        {activeTab === "paul" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Paul&apos;s Missionary Journeys</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>Three missionary journeys and the final journey to Rome — covering modern-day Turkey, Greece, and eventually Rome itself.</p>
            {PAUL_JOURNEYS.map((item) => {
              const isOpen = openPaul === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenPaul(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{item.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* SPEECHES */}
        {activeTab === "speeches" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Key Speeches in Acts</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>Speeches make up nearly a third of Acts. They are not verbatim transcripts but theological summaries of apostolic preaching — showing how the gospel was proclaimed in different contexts.</p>
            <div style={{ display: "grid", gap: 16 }}>
              {SPEECHES.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* THEMES */}
        {activeTab === "themes" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Theological Themes</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {THEMES.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {activeTab === "journal" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: 16, lineHeight: 1.6 }}>Reflect on Acts. What does this book reveal about how the Spirit works? What patterns from Acts should shape the church — and your life — today?</p>
            <textarea value={journal} onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }} />
            <p style={{ color: MUTED, fontSize: 12, marginTop: 8 }}>Saved locally to your device.</p>
          </div>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Video Teaching</h2>
            <div style={{ display: "grid", gap: 20 }}>
              {VIDEOS.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "12px 16px" }}>
                    <p style={{ color: TEXT, fontWeight: 600, fontSize: 14 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
