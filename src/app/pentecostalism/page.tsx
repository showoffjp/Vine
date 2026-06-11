"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "overview" | "theology" | "history" | "global" | "critiques" | "journal" | "videos";

const OVERVIEW_POINTS = [
  {
    title: "The Fastest-Growing Christian Movement in History",
    icon: "🔥",
    color: "#EF4444",
    body: "Pentecostalism and its charismatic offshoots constitute the fastest-growing religious movement in human history. From virtually zero adherents in 1900 (the Azusa Street Revival was 1906), the movement has grown to an estimated 600–700 million people globally — roughly 27% of all Christians. In Latin America, sub-Saharan Africa, and South and Southeast Asia, the growth is explosive. Brazil, Nigeria, South Korea, and the Philippines are home to some of the world's largest churches, almost all Pentecostal or charismatic.",
    verse: "Acts 1:8 — 'You will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.'"
  },
  {
    title: "What Pentecostalism Is",
    icon: "🕊️",
    color: "#F59E0B",
    body: "Pentecostalism is a renewal movement within Christianity that emphasizes the direct, ongoing, present-day work of the Holy Spirit — particularly the spiritual gifts described in 1 Corinthians 12-14 and Acts 2. Most Pentecostals hold that speaking in tongues (glossolalia) is the initial evidence of the baptism in the Holy Spirit. They also believe in the continuing gifts of healing, prophecy, miracles, and discernment. Pentecostalism is theologically evangelical (affirming Scripture's authority, the necessity of conversion, and the atoning death and bodily resurrection of Christ) but adds distinctive Spirit-baptism theology.",
    verse: "1 Corinthians 12:7-11 — 'Now to each one the manifestation of the Spirit is given for the common good.'"
  },
  {
    title: "The Three Waves",
    icon: "🌊",
    color: GREEN,
    body: "Church historians identify three major waves: (1) Classical Pentecostalism (1900s) — denominations like the Assemblies of God, Church of God in Christ, and Foursquare Gospel, originating from the Azusa Street Revival. (2) The Charismatic Renewal (1960s-80s) — the Holy Spirit breaking out into mainline Protestant and Roman Catholic churches, creating 'charismatic Catholics' and charismatic Anglicans, etc., who remained in their denominations. (3) The Third Wave / Neo-Charismatic Movement (1980s-present) — independent charismatic churches, apostolic networks, and megachurches that combine Pentecostal spirituality with new ecclesiological forms.",
    verse: "Joel 2:28-29 — 'I will pour out my Spirit on all people. Your sons and daughters will prophesy.'"
  },
  {
    title: "The Global South Revolution",
    icon: "🌍",
    color: PURPLE,
    body: "The center of Christianity has shifted. In 1900, 80% of Christians lived in the Global North. Today, 67% live in the Global South. Pentecostalism is the primary driver of this shift. The largest churches on earth include: Yoido Full Gospel Church (Seoul, South Korea — ~480,000 members), Living Faith Church (Nigeria — millions of members), and thousands of megachurches in Brazil, Nigeria, Kenya, and the Philippines. This is not an Americanization of Christianity — African, Asian, and Latin American Pentecostalism has developed its own distinct theological emphases.",
    verse: "Revelation 7:9 — 'A great multitude from every nation, tribe, people, and language.'"
  }
];

const THEOLOGY_ITEMS = [
  {
    doctrine: "Baptism in the Holy Spirit",
    color: "#EF4444",
    explanation: "The 'baptism in the Holy Spirit' (Acts 1:5; 2:4) is understood by classical Pentecostals as a distinct, subsequent experience to salvation — a second work of grace that empowers the believer for witness and ministry. Most classical Pentecostals hold that speaking in tongues is the 'initial evidence' of this baptism. Charismatic Christians often hold that Spirit baptism may or may not be accompanied by tongues. Reformed and cessationist Christians dispute whether this experience is a normative second blessing or was a once-for-all historical event.",
    debate: "Cessationists argue that sign gifts ceased after the apostolic age. Pentecostals argue that the NT gives no indication that gifts were temporary. This is one of the most significant ongoing debates in evangelical Christianity."
  },
  {
    doctrine: "Speaking in Tongues (Glossolalia)",
    color: "#F59E0B",
    explanation: "Speaking in tongues — a Spirit-given utterance in a language unknown to the speaker — is the most distinctive Pentecostal practice. Pentecostals distinguish between tongues as a private prayer language (1 Corinthians 14:2) and tongues as a public gift requiring interpretation (1 Corinthians 14:27-28). The experience at Pentecost (Acts 2:4-11) is understood as tongues recognized as foreign languages; the Corinthian tongues appear to be a different kind of utterance. The practice is controversial among non-Pentecostal Christians.",
    debate: "Many Reformed Christians hold that tongues were xenolalia (known languages, as in Acts 2) for the sign to unbelieving Israel, and that they ceased with the apostolic age. Charismatics argue that Paul's instructions in 1 Corinthians assume tongues are ongoing."
  },
  {
    doctrine: "Divine Healing",
    color: "#10B981",
    explanation: "Pentecostals strongly emphasize divine healing as part of the atonement (Matthew 8:16-17; Isaiah 53:4-5; James 5:14-16). Many hold that physical healing is provided for in Christ's redemptive work and is available through prayer and faith. Critics worry that this theology creates false expectations and burdens on sick believers. The spectrum within Pentecostalism ranges from faith-healing ministries that discourage medical treatment (a dangerous fringe) to mainstream Pentecostal congregations that affirm healing prayer and medical care together.",
    debate: "The question of whether healing is 'in the atonement' (and therefore guaranteed for believers who have sufficient faith) or a gracious sovereign act of God is crucial. The 'name it and claim it' prosperity gospel is a distorted form of healing theology that most mainstream Pentecostals reject."
  },
  {
    doctrine: "Prophecy in the Local Church",
    color: PURPLE,
    explanation: "Pentecostals affirm that the gift of prophecy is operative today — that the Holy Spirit can speak through believers in intelligible utterances for the edification, encouragement, and exhortation of the church (1 Corinthians 14:3). Most mainstream Pentecostals hold that contemporary prophecy is fallible (not equal to Scripture) and must be tested (1 Thessalonians 5:20-21). New Apostolic Reformation movements have controversially claimed a new level of prophetic and apostolic authority, which has been widely criticized.",
    debate: "Cessationists deny that prophecy continues today. Mainstream Pentecostals affirm congregational prophecy while rejecting claims to scriptural authority. NAR advocates go further in ways that most Pentecostals reject."
  },
  {
    doctrine: "Word of Faith / Prosperity Gospel",
    color: "#EC4899",
    explanation: "The 'Word of Faith' or prosperity gospel teaches that faith can command health, wealth, and success from God — that believers have authority to 'speak' these realities into existence. Associated with figures like Kenneth Hagin, Kenneth Copeland, Joel Osteen, and Creflo Dollar. The prosperity gospel is one of the most widely condemned theological errors in Christianity — by Catholic, Reformed, mainstream evangelical, AND most mainstream Pentecostal theologians. It distorts the theology of divine healing and faith into a name-it-claim-it formula that exploits vulnerable people.",
    debate: "The prosperity gospel is widely rejected even within Pentecostalism itself as a theological error. David Platt, John Piper, and many others have written and preached extensively against it. It should not be treated as representative of Pentecostalism as a whole."
  }
];

const HISTORY_FIGURES = [
  {
    name: "William J. Seymour",
    dates: "1870–1922",
    color: "#F59E0B",
    role: "Leader of the Azusa Street Revival",
    bio: "William Seymour was the son of freed slaves, born in Louisiana. He had learned about Holy Spirit baptism from Charles Parham but was barred from Parham's classes (due to his race) and had to listen from outside. In 1906, in a small house on Bonnie Brae Street in Los Angeles, a revival broke out that moved to 312 Azusa Street — a former stable. The Azusa Street Revival lasted three years with continuous meetings. Seymour's distinctive contribution: his insistence that the cross-racial, cross-cultural nature of the revival was itself a sign of the kingdom. In Jim Crow America, Azusa Street was one of the first sustained integrated gatherings in American religious history.",
    significance: "The Azusa Street Revival is the birthplace of modern Pentecostalism. Seymour's vision that the Spirit would overcome racial and social divisions is a corrective to the racism that subsequently infected much of the movement."
  },
  {
    name: "Aimee Semple McPherson",
    dates: "1890–1944",
    color: GREEN,
    role: "Founder of the International Church of the Foursquare Gospel",
    bio: "Aimee Semple McPherson was the most famous woman preacher in America in the 1920s-30s — at a time when female preaching was extraordinary. She founded Angelus Temple in Los Angeles (1923), one of the first megachurches, and the Foursquare Gospel denomination. She used radio, dramatic presentations, and novel forms of public outreach that anticipated modern media ministry by decades. Despite significant personal controversies, her influence on the development of Pentecostal evangelism and church planting was enormous.",
    significance: "Established Pentecostalism as a mainstream American religious movement and pioneered media ministry."
  },
  {
    name: "Oral Roberts",
    dates: "1918–2009",
    color: "#3B82F6",
    role: "Faith healer; founder of Oral Roberts University",
    bio: "Oral Roberts was the most prominent Pentecostal healing evangelist of the 20th century. His tent crusades across America in the 1940s-50s drew hundreds of thousands. His television ministry made him the first televangelist. He founded Oral Roberts University in 1963. His theological contribution: developing and popularizing the 'seed faith' concept (giving to God produces spiritual and material returns) — a theological move that influenced prosperity gospel teachers, though Roberts himself was more nuanced. His later theological evolution moved closer to mainstream evangelicalism.",
    significance: "Brought Pentecostal healing theology to national and international attention; pioneered televangelism."
  },
  {
    name: "Jack Hayford",
    dates: "1934–2023",
    color: PURPLE,
    role: "Pastor; songwriter; ecumenical bridge-builder",
    bio: "Jack Hayford served as pastor of The Church on the Way in Van Nuys, California, for 30 years, growing it from 18 to 10,000 members. He wrote the worship song 'Majesty' (one of the most widely sung hymns in contemporary Christianity). Hayford was known for his theological depth, pastoral integrity, and ability to build bridges between Pentecostals and evangelicals who were suspicious of each other. His books on prayer, worship, and marriage are read across denominational lines. He represented the best of Pentecostal spirituality: experiential, biblical, and theologically grounded.",
    significance: "Demonstrated that Pentecostalism could be both experiential and theologically serious; authored beloved worship music."
  }
];

const GLOBAL_CHURCH = [
  { region: "Latin America", countries: "Brazil, Chile, Colombia, Guatemala", color: "#EF4444", size: "~150M Pentecostals", growth: "Christianity's fastest-growing region since 1960", note: "Brazil has the largest evangelical/Pentecostal population outside the USA. The Universal Church of the Kingdom of God, Assembly of God Brazil, and hundreds of megachurches shape culture and politics." },
  { region: "Sub-Saharan Africa", countries: "Nigeria, Ghana, Kenya, South Africa", color: "#F59E0B", size: "~100M+ Pentecostals", growth: "50% of African Christians are now Pentecostal", note: "Living Faith Church (David Oyedepo, Nigeria) and Redeemed Christian Church of God claim tens of millions of members. African Pentecostalism is developing its own distinct theological identity." },
  { region: "East and Southeast Asia", countries: "South Korea, Philippines, Indonesia, China", color: GREEN, size: "~90M Pentecostals", growth: "South Korea has the world's largest churches; Philippines is majority Protestant-Charismatic", note: "Yoido Full Gospel Church (Seoul) has ~480,000 members, making it the world's largest congregation. Christianity in China — largely underground and Pentecostal — may number 100+ million." },
  { region: "North America", countries: "USA, Canada", color: "#3B82F6", size: "~75M Pentecostals/Charismatics", growth: "Declining in mainline churches; growing in independent charismatic settings", note: "The Assemblies of God (USA) is the world's largest Pentecostal denomination (~70M globally). Many of the world's most influential Pentecostal theologians and institutions are American." },
];

export default function PentecostalismPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_pentecostalism_tab", "overview");
  const [selectedTheology, setSelectedTheology] = usePersistedState("vine_pentecostalism_selected_theology", "Baptism in the Holy Spirit");
  const [selectedFigure, setSelectedFigure] = usePersistedState<string>("vine_pentecostalism_selected_figure", "William J. Seymour");

  const theologyItem = THEOLOGY_ITEMS.find(t => t.doctrine === selectedTheology)!;
  const figure = HISTORY_FIGURES.find(f => f.name === selectedFigure)!;

  const [pentJEntries, setPentJEntries] = useState<{ id: string; date: string; experience: string; question: string; discernment: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_pentj_entries") ?? "[]"); } catch { return []; }
  });
  const [pentJForm, setPentJForm] = useState({ experience: "", question: "", discernment: "" });
  const [pentJSaved, setPentJSaved] = useState(false);
  useEffect(() => { try { localStorage.setItem("vine_pentj_entries", JSON.stringify(pentJEntries)); } catch {} }, [pentJEntries]);
  const savePentJEntry = () => {
    if (!pentJForm.experience.trim()) return;
    setPentJEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...pentJForm }, ...prev]);
    setPentJForm({ experience: "", question: "", discernment: "" });
    setPentJSaved(true);
    setTimeout(() => setPentJSaved(false), 2000);
  };
  const deletePentJEntry = (id: string) => setPentJEntries(prev => prev.filter(e => e.id !== id));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔥</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Pentecostalism & the Charismatic Movement</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            From Azusa Street to 700 million believers worldwide — Pentecostalism is the fastest-growing Christian movement in history,
            reshaping global Christianity through an emphasis on the immediate, present-day work of the Holy Spirit.
          </p>
        </div>

        {/* Verse banner */}
        <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "12px 18px", marginBottom: 28, textAlign: "center" }}>
          <span style={{ color: GREEN, fontWeight: 700, fontSize: 13 }}>Acts 2:17 — </span>
          <span style={{ color: TEXT, fontSize: 13 }}>"'In the last days, God says, I will pour out my Spirit on all people. Your sons and daughters will prophesy...'"</span>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, flexWrap: "wrap" }}>
          {([
            { id: "overview" as Tab, label: "Overview", icon: "📖" },
            { id: "theology" as Tab, label: "Theology", icon: "🕊️" },
            { id: "history" as Tab, label: "Key Figures", icon: "🎓" },
            { id: "global" as Tab, label: "Global Church", icon: "🌍" },
            { id: "critiques" as Tab, label: "Critiques & Cautions", icon: "⚖️" },
            { id: "journal" as Tab, label: "My Journal", icon: "📓" },
            { id: "videos" as Tab, label: "Videos", icon: "🎬" },
          ]).map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? "#EF4444" : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", minWidth: 100 }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {OVERVIEW_POINTS.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${p.color}25`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 24 }}>{p.icon}</span>
                  <h3 style={{ color: p.color, fontWeight: 800, fontSize: 17, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>{p.body}</p>
                <div style={{ background: `${p.color}08`, border: `1px solid ${p.color}20`, borderRadius: 8, padding: "8px 12px" }}>
                  <span style={{ color: p.color, fontSize: 12, fontStyle: "italic" }}><VerseRef reference={p.verse} /></span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Theology */}
        {tab === "theology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 20 }}>
              <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>
                These are the most significant and debated theological distinctives of Pentecostalism. Coverage here includes mainstream Pentecostal theology
                AND critiques from Reformed/cessationist perspectives — both deserve honest hearing.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 16 }}>
              <div>
                {THEOLOGY_ITEMS.map(t => (
                  <button type="button" key={t.doctrine} onClick={() => setSelectedTheology(t.doctrine)}
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${selectedTheology === t.doctrine ? t.color : BORDER}`, background: selectedTheology === t.doctrine ? `${t.color}15` : "transparent", color: selectedTheology === t.doctrine ? t.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", marginBottom: 6, textAlign: "left" }}>
                    {t.doctrine}
                  </button>
                ))}
              </div>
              <div style={{ background: CARD, border: `1px solid ${theologyItem.color}30`, borderRadius: 14, padding: 26 }}>
                <h2 style={{ color: theologyItem.color, fontWeight: 900, fontSize: 20, marginBottom: 14 }}>{theologyItem.doctrine}</h2>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 16 }}>{theologyItem.explanation}</p>
                <div style={{ background: `${theologyItem.color}08`, border: `1px solid ${theologyItem.color}20`, borderRadius: 8, padding: "12px 14px" }}>
                  <div style={{ color: theologyItem.color, fontSize: 11, fontWeight: 800, marginBottom: 6 }}>THE DEBATE</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{theologyItem.debate}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* History / Figures */}
        {tab === "history" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 200, flexShrink: 0 }}>
              {HISTORY_FIGURES.map(h => (
                <button type="button" key={h.name} onClick={() => setSelectedFigure(h.name)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${selectedFigure === h.name ? h.color : BORDER}`, background: selectedFigure === h.name ? `${h.color}12` : "transparent", color: selectedFigure === h.name ? h.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", marginBottom: 6, textAlign: "left" }}>
                  <div>{h.name}</div>
                  <div style={{ fontWeight: 400, fontSize: 10, marginTop: 2 }}>{h.dates}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${figure.color}30`, borderRadius: 14, padding: 26 }}>
                <h2 style={{ color: figure.color, fontWeight: 900, fontSize: 20, marginBottom: 2 }}>{figure.name}</h2>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 4 }}>{figure.dates}</div>
                <div style={{ color: figure.color, fontSize: 12, fontWeight: 700, marginBottom: 16 }}>{figure.role}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 16 }}>{figure.bio}</p>
                <div style={{ background: `${figure.color}08`, border: `1px solid ${figure.color}20`, borderRadius: 8, padding: "10px 14px" }}>
                  <div style={{ color: figure.color, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>HISTORICAL SIGNIFICANCE</div>
                  <div style={{ color: TEXT, fontSize: 13 }}>{figure.significance}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Global Church */}
        {tab === "global" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Pentecostalism is the most demographically significant Christian development of the 20th century.
                By 2050, projections suggest 1 billion Pentecostal/charismatic Christians worldwide — representing nearly
                40% of all Christians. The center of gravity is the Global South.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {GLOBAL_CHURCH.map((g, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${g.color}25`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                    <h3 style={{ color: g.color, fontWeight: 800, fontSize: 16, margin: 0 }}>{g.region}</h3>
                    <div style={{ display: "flex", gap: 8 }}>
                      <span style={{ background: `${g.color}15`, color: g.color, padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{g.size}</span>
                    </div>
                  </div>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>Key countries: {g.countries}</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, marginBottom: 8 }}>{g.note}</p>
                  <div style={{ color: GREEN, fontSize: 12, fontStyle: "italic" }}>Growth: {g.growth}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Critiques */}
        {tab === "critiques" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>A Note on This Section</h3>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                The strongest critiques of Pentecostalism come from within Christianity — from Reformed, Lutheran, and mainstream evangelical theologians
                who love the church and want to see it strengthened. These critiques deserve honest engagement, not dismissal. At the same time,
                the critics do not have the final word on movements that have brought hundreds of millions of people to faith in Christ.
              </p>
            </div>
            {[
              {
                critique: "Elevation of Experience Over Doctrine",
                color: "#EF4444",
                concern: "Some Pentecostal expressions prioritize subjective spiritual experience over objective doctrinal formation. When experience becomes the primary criterion of authentic faith, theological drift follows. This is the core of the cessationist critique: not that God cannot work miraculously, but that when claimed supernatural experience cannot be tested by Scripture, it becomes susceptible to manipulation and deception.",
                response: "Mainstream Pentecostals agree that experience must be tested by Scripture (1 Thessalonians 5:21). The best Pentecostal theology (Gordon Fee, Craig Keener) is deeply biblical and theologically rigorous. The critique is most valid against movements where Scripture is marginalized in favor of 'the Spirit's leading.'"
              },
              {
                critique: "The Prosperity Gospel",
                color: "#F59E0B",
                concern: "The prosperity gospel — the teaching that faith in God guarantees health and wealth — is a theological distortion that causes immense harm. It exploits the poor and vulnerable, burdens suffering people with false guilt, and replaces the gospel of the cross with a gospel of self-fulfillment. John Piper, David Platt, and virtually every serious theologian across traditions have written against it.",
                response: "Most mainstream Pentecostal denominations (Assemblies of God, Church of God in Christ) explicitly reject prosperity theology. The Word of Faith movement is a specific and controversial stream that does not represent Pentecostalism as a whole. The prosperity gospel is strongest in contexts of poverty and social exclusion — which is also its greatest tragedy."
              },
              {
                critique: "New Apostolic Reformation (NAR) Claims",
                color: "#8B5CF6",
                concern: "The NAR movement claims that God is restoring the offices of apostle and prophet to the church, with new revelatory authority. Critics argue this places extra-biblical claims of prophetic authority above Scripture and creates structures that resist accountability. The failed predictions of NAR 'prophets' in recent political events have caused widespread embarrassment and theological damage.",
                response: "The NAR is a specific and controversial stream, not representative of mainstream Pentecostalism. Many Pentecostal scholars (Gordon Fee, Jack Hayford) have distanced themselves from NAR theology and called for careful scrutiny of prophetic claims."
              },
              {
                critique: "Lack of Theological Depth",
                color: "#10B981",
                concern: "Some charismatic churches are accused of being 'a mile wide and an inch deep' — large, emotionally engaging, but lacking in sustained catechesis, theological formation, and biblical literacy. The emphasis on worship experience and emotional encounter can displace the formation of a well-rounded Christian mind.",
                response: "This is a valid pastoral concern that the best Pentecostal leaders acknowledge. Gordon Fee's major works on the Holy Spirit, Craig Keener's commentaries, and the work of Pentecostal scholars at Regent University, Oral Roberts University, and other institutions demonstrate that Pentecostalism can be theologically serious."
              }
            ].map((c, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${c.color}25`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: c.color, fontWeight: 800, fontSize: 15, marginBottom: 12 }}>{c.critique}</h3>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ color: "#EF4444", fontSize: 11, fontWeight: 800, marginBottom: 6 }}>THE CONCERN</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{c.concern}</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: "10px 14px" }}>
                  <div style={{ color: GREEN, fontSize: 11, fontWeight: 800, marginBottom: 4 }}>PENTECOSTAL RESPONSE</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{c.response}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>My Pentecostalism Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Record your experience with the Spirit, questions you are wrestling with, and your best discernment so far.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Experience or encounter with the Spirit</label>
                  <textarea rows={2} value={pentJForm.experience} onChange={e => setPentJForm(f => ({ ...f, experience: e.target.value }))} placeholder="What have you experienced or witnessed?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Question I am wrestling with</label>
                  <textarea rows={2} value={pentJForm.question} onChange={e => setPentJForm(f => ({ ...f, question: e.target.value }))} placeholder="What theological or practical question do you have?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>My discernment so far</label>
                  <textarea rows={2} value={pentJForm.discernment} onChange={e => setPentJForm(f => ({ ...f, discernment: e.target.value }))} placeholder="How are you thinking through this biblically?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button type="button" onClick={savePentJEntry} style={{ alignSelf: "flex-start", background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  {pentJSaved ? "Saved ✓" : "Save Entry"}
                </button>
              </div>
            </div>
            {pentJEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {pentJEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deletePentJEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>✕</button>
                    </div>
                    {e.experience && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Experience</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.experience}</p></div>}
                    {e.question && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Question</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.question}</p></div>}
                    {e.discernment && <div><span style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Discernment</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.discernment}</p></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Videos */}
        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching & Documentary Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Documentaries, lectures, and sermons exploring Pentecostalism and the charismatic movement from multiple perspectives.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  {
                    videoId: "ej_6dVdJSIU",
                    title: "The Azusa Street Revival — The Birth of Pentecostalism",
                    channel: "Christian History Magazine",
                    description: "A historical documentary on the 1906 Azusa Street Revival that launched the modern Pentecostal movement — examining the key figures, the events, and the lasting impact on global Christianity."
                  },
                  {
                    videoId: "GQI72THyO5I",
                    title: "Gordon Fee on the Holy Spirit and Paul's Letters",
                    channel: "Regent University",
                    description: "Gordon Fee — perhaps the foremost Pentecostal biblical scholar — on the Holy Spirit in Paul's epistles. A model of theologically serious, biblically grounded Pentecostal scholarship."
                  },
                  {
                    videoId: "krxcqH522uo",
                    title: "Is Speaking in Tongues for Today? — A Balanced View",
                    channel: "The Gospel Coalition",
                    description: "A thoughtful conversation between Reformed and charismatic perspectives on tongues, prophecy, and the ongoing work of the Spirit — modeling the kind of charitable disagreement Christians should have."
                  },
                  {
                    videoId: "nQWFzMvCfLE",
                    title: "The Prosperity Gospel Explained and Evaluated",
                    channel: "Desiring God / John Piper",
                    description: "John Piper gives a thorough theological critique of the prosperity gospel — why it is a distortion of the true gospel and what the New Testament actually teaches about suffering, wealth, and faith."
                  },
                  {
                    videoId: "ccNvwDPguNU",
                    title: "Pentecostal Christianity in the Global South",
                    channel: "Duke Divinity School",
                    description: "A scholarly examination of why Pentecostalism has grown so explosively in Latin America, Africa, and Asia — exploring the theological, cultural, and sociological factors."
                  }
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
      </main>
      <Footer />
    </div>
  );
}
