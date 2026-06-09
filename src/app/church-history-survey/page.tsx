"use client";
import { useState } from "react";
import VideoEmbed from "@/components/VideoEmbed";

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

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "apostolic", label: "Apostolic Age" },
  { id: "early", label: "Early Church" },
  { id: "councils", label: "Councils" },
  { id: "medieval", label: "Medieval Church" },
  { id: "reformation", label: "Reformation" },
  { id: "modern", label: "Modern Era" },
  { id: "global", label: "Global Church" },
  { id: "videos", label: "Videos" },
];

type Era = {
  era: string;
  dates: string;
  summary: string;
  color: string;
  key_figures: string;
  key_events: string;
};

const ERAS: Era[] = [
  {
    era: "Apostolic Age",
    dates: "30–100 AD",
    summary: "The foundation period. The apostles plant churches across the Roman Empire. The NT is written. The Jerusalem council settles the Gentile question. The temple falls (70 AD). John is exiled to Patmos.",
    color: GREEN,
    key_figures: "Peter, Paul, James, John, Luke",
    key_events: "Pentecost, Paul's missionary journeys, Jerusalem Council (Acts 15), Nero's persecution, Temple destruction",
  },
  {
    era: "Apostolic Fathers",
    dates: "100–150 AD",
    summary: "The generation after the apostles. Ignatius of Antioch writes letters defending the incarnation on his way to martyrdom. Clement of Rome writes to Corinth. The Didache provides a picture of early church practice.",
    color: TEAL,
    key_figures: "Ignatius of Antioch, Clement of Rome, Polycarp, Justin Martyr",
    key_events: "Polycarp's martyrdom (~155 AD), Marcion's heresy, First Apologies defending Christianity to Rome",
  },
  {
    era: "Ante-Nicene Period",
    dates: "150–325 AD",
    summary: "The church defends against heresy (Gnosticism, Marcionism) and Roman persecution. Irenaeus defeats Gnosticism with the rule of faith and apostolic succession. Tertullian coins 'Trinity.' Origen allegorizes Scripture in Alexandria.",
    color: PURPLE,
    key_figures: "Irenaeus, Tertullian, Origen, Cyprian, Athanasius",
    key_events: "Diocletian Persecution (303–313), development of canon, Edict of Milan (313)",
  },
  {
    era: "Nicene and Post-Nicene",
    dates: "325–600 AD",
    summary: "Constantine's conversion changes everything. The church fights Arianism at Nicaea. The Cappadocians develop Trinitarian theology. Augustine shapes Western theology for a millennium. The Roman Empire falls; monasticism rises.",
    color: GOLD,
    key_figures: "Athanasius, Basil, Gregory of Nazianzus, Gregory of Nyssa, Augustine, Jerome",
    key_events: "Council of Nicaea (325), Council of Constantinople (381), Council of Chalcedon (451), Sack of Rome (410)",
  },
  {
    era: "Medieval Church",
    dates: "600–1500 AD",
    summary: "The papacy rises. Islam emerges and conquers the Middle East. The Great Schism splits Eastern and Western churches (1054). The Crusades. Aquinas systematizes theology. The Black Death. Wycliffe and Hus anticipate the Reformation.",
    color: BLUE,
    key_figures: "Gregory the Great, Anselm, Thomas Aquinas, Bernard of Clairvaux, Francis of Assisi, Wycliffe, Hus",
    key_events: "Great Schism (1054), Crusades (1095–1291), Magna Carta (1215), Black Death (1347), Gutenberg Bible (1455)",
  },
  {
    era: "Reformation",
    dates: "1517–1600 AD",
    summary: "Luther posts 95 Theses. The Protestant Reformation recovers justification by faith, the authority of Scripture, and the priesthood of all believers. The church fractures into Lutheran, Reformed, Anabaptist, and Anglican streams. The Counter-Reformation responds.",
    color: RED,
    key_figures: "Luther, Zwingli, Calvin, Cranmer, Menno Simons, Trent Council Fathers",
    key_events: "95 Theses (1517), Diet of Worms (1521), Augsburg Confession (1530), Council of Trent (1545–1563), English Reformation",
  },
  {
    era: "Post-Reformation / Early Modern",
    dates: "1600–1800 AD",
    summary: "The Puritans colonize America. The Great Awakenings (Edwards, Whitefield, Wesley) revitalize Protestant Christianity. Pietism renews the German church. The Enlightenment challenges Christian foundations. Deism rises.",
    color: "#EC4899",
    key_figures: "John Owen, Richard Baxter, Jonathan Edwards, George Whitefield, John Wesley, William Carey",
    key_events: "Westminster Assembly (1643–49), First Great Awakening (1730s–40s), Second Great Awakening (1790s–1840s), beginning of modern missions",
  },
  {
    era: "Modern Era",
    dates: "1800–present",
    summary: "The modern missions movement explodes (Carey, Adoniram Judson, Hudson Taylor). Liberal theology challenges orthodoxy; Fundamentalism responds. The Pentecostal movement begins (1906, Azusa Street). The WCC forms (1948). The Global South becomes the center of Christianity.",
    color: TEAL,
    key_figures: "Spurgeon, Moody, Carey, Hudson Taylor, Jim Elliot, Billy Graham, John Stott, Francis Schaeffer",
    key_events: "Edinburgh Missionary Conference (1910), Azusa Street Revival (1906), World Wars, Holocaust, Second Vatican Council (1962–65)",
  },
];

type Father = {
  name: string;
  dates: string;
  contribution: string;
  color: string;
};

const CHURCH_FATHERS: Father[] = [
  {
    name: "Irenaeus of Lyon",
    dates: "130–202 AD",
    contribution: "Against Heresies — defeated Gnosticism by arguing for the rule of faith, apostolic succession, and the four Gospels. First systematic theologian.",
    color: GREEN,
  },
  {
    name: "Tertullian",
    dates: "155–220 AD",
    contribution: "Coined 'Trinity' (Trinitas), 'substance' (substantia), 'person' (persona). Brilliant apologist. Later joined Montanism (controversial).",
    color: TEAL,
  },
  {
    name: "Origen",
    dates: "184–253 AD",
    contribution: "First systematic biblical commentator. Pioneered allegorical interpretation. Enormous influence despite later condemnation for some speculative positions.",
    color: PURPLE,
  },
  {
    name: "Athanasius",
    dates: "296–373 AD",
    contribution: "Athanasius contra mundum — defended the full deity of Christ against Arianism. Exiled five times. The Nicene doctrine won because he refused to compromise.",
    color: GOLD,
  },
  {
    name: "Augustine of Hippo",
    dates: "354–430 AD",
    contribution: "The most influential theologian in Western Christianity after Paul. Confessions (autobiography of grace), City of God (Christian philosophy of history), On the Trinity, and foundational work on grace, will, and sin.",
    color: RED,
  },
  {
    name: "Thomas Aquinas",
    dates: "1225–1274 AD",
    contribution: "Summa Theologica — synthesized Aristotelian philosophy with Christian theology. Foundational for Catholic theology. Natural law, just war, the five ways for God's existence.",
    color: BLUE,
  },
];

const COUNCILS = [
  {
    council: "Nicaea (325 AD)",
    issue: "Is Jesus divine?",
    decision: "Homoousios — Christ is 'of the same substance' as the Father. Arius condemned. Nicene Creed formulated. The full deity of Christ affirmed.",
    color: GREEN,
  },
  {
    council: "Constantinople (381 AD)",
    issue: "Is the Spirit divine?",
    decision: "The Holy Spirit proceeds from the Father and is to be worshiped and glorified together with the Father and Son. The Nicene Creed expanded to include full Trinitarian statement.",
    color: TEAL,
  },
  {
    council: "Ephesus (431 AD)",
    issue: "Is Mary Theotokos (God-bearer)?",
    decision: "Mary is rightly called Theotokos — not to exalt Mary but to affirm that Jesus is one person, not two (Nestorianism rejected). The unity of Christ's person affirmed.",
    color: PURPLE,
  },
  {
    council: "Chalcedon (451 AD)",
    issue: "How are divinity and humanity related in Christ?",
    decision: "Two natures (divine and human) in one person — without confusion, change, division, or separation. The Definition of Chalcedon remains the touchstone of orthodox Christology.",
    color: GOLD,
  },
];

const VIDEOS = [
  { videoId: "NanAOEMwXg0", title: "Church History in 5 Minutes" },
  { videoId: "rEFNBVlIzGc", title: "The Early Church Fathers" },
  { videoId: "tPLQFuHdGVQ", title: "The Protestant Reformation Explained" },
  { videoId: "OqGDLwm_PG4", title: "Global Christianity: The Modern Story" },
];

export default function ChurchHistorySurveyPage() {
  const [tab, setTab] = useLocalStorage("vine_ch_tab", "overview");
  const [openEra, setOpenEra] = useLocalStorage("vine_ch_era", "");
  const [openFather, setOpenFather] = useLocalStorage("vine_ch_father", "");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🏛️</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Church History Survey</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>
            Two thousand years of the church&apos;s story — from the upper room to the global South. Where did Christianity come from, what battles shaped it, and where is it going?
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", background: tab === t.id ? GREEN : CARD, color: tab === t.id ? "#fff" : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${GREEN}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>Why Study Church History?</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "0.75rem" }}>To ignore church history is to think that God began his work with you. The church&apos;s story is the story of God working in and through fallible people across 2,000 years — planting, preserving, purifying, and spreading the gospel to the ends of the earth.</p>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Church history teaches humility (our generation is not the first to face hard questions), roots (orthodoxy was hammered out by real people at real cost), and hope (the gates of hell have not prevailed).</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {ERAS.slice(0, 4).map((era, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: era.color, color: "#fff", borderRadius: 8, padding: "0.25rem 0.6rem", fontWeight: 700, fontSize: "0.75rem", whiteSpace: "nowrap", flexShrink: 0 }}>{era.dates}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: era.color, marginBottom: "0.2rem" }}>{era.era}</div>
                    <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{era.summary}</p>
                  </div>
                </div>
              ))}
              {ERAS.slice(4).map((era, i) => (
                <div key={i + 4} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: era.color, color: "#fff", borderRadius: 8, padding: "0.25rem 0.6rem", fontWeight: 700, fontSize: "0.75rem", whiteSpace: "nowrap", flexShrink: 0 }}>{era.dates}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: era.color, marginBottom: "0.2rem" }}>{era.era}</div>
                    <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{era.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* APOSTOLIC AGE */}
        {tab === "apostolic" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${GREEN}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>30–100 AD: The Foundation</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The church begins at Pentecost with 120 people in an upper room and the explosive arrival of the Holy Spirit (Acts 2). Within 30 years, Paul has planted churches from Jerusalem to Rome. Within 70 years, the NT is written, the temple has fallen, and John has received the Revelation on Patmos.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { event: "Pentecost (33 AD)", desc: "The Holy Spirit descends. 3,000 baptized in a day. The church is born not as a program but as a community of the Spirit. The mission begins in Jerusalem and reaches to the uttermost parts.", color: GREEN },
                { event: "Paul's Three Missionary Journeys (46–57 AD)", desc: "Paul plants churches across Asia Minor, Greece, and Macedonia. Letters to these churches become most of the NT. His strategy: city centers, synagogues, then Gentile households.", color: TEAL },
                { event: "Jerusalem Council (49 AD)", desc: "The first major theological controversy: must Gentiles be circumcised? Acts 15 records the council's decision: no — salvation is by grace through faith. The Gentile mission is affirmed. This is the first 'General Council.'", color: PURPLE },
                { event: "Nero's Persecution (64–68 AD)", desc: "After the Great Fire of Rome, Nero blames Christians. Peter and Paul are martyred in Rome. The church's blood becomes its seed — persecution spreads the gospel.", color: RED },
                { event: "Destruction of Jerusalem (70 AD)", desc: "The Roman general Titus destroys the temple. 1.1 million Jews killed. Jewish Christianity is scattered. The church's center shifts decisively to Antioch, Rome, and Alexandria.", color: GOLD },
                { event: "John on Patmos (90s AD)", desc: "The last apostle writes the Gospel, three letters, and Revelation. His emphasis: love, truth, and the ultimate victory of the Lamb. The apostolic witness is complete.", color: BLUE },
              ].map(e => (
                <div key={e.event} style={{ background: CARD, border: `1px solid ${e.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${e.color}` }}>
                  <div style={{ fontWeight: 700, color: e.color, marginBottom: "0.4rem" }}>{e.event}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EARLY CHURCH */}
        {tab === "early" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: PURPLE }}>Key Church Fathers</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The early church fathers are not equal to Scripture, but they are the church&apos;s ancient commentators — wrestling with the same texts, defending against the same heresies, and forming the theological categories that orthodox Christianity still uses today.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {CHURCH_FATHERS.map((f, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenFather(openFather === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ textAlign: "left" }}>
                      <span style={{ fontWeight: 700, color: f.color }}>{f.name}</span>
                      <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{f.dates}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openFather === String(i) ? "−" : "+"}</span>
                  </button>
                  {openFather === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem", color: MUTED, lineHeight: 1.7 }}>{f.contribution}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COUNCILS */}
        {tab === "councils" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GOLD }}>The Ecumenical Councils</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The first seven ecumenical councils (325–787 AD) settled the core doctrines that all orthodox Christianity shares: the Trinity and the person of Christ. These were not smooth academic debates — they were fought with exiles, anathemas, and occasionally violence. The winners wrote orthodox theology; the losers were called heretics.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {COUNCILS.map(c => (
                <div key={c.council} style={{ background: CARD, border: `1px solid ${c.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${c.color}` }}>
                  <div style={{ fontWeight: 700, color: c.color, marginBottom: "0.25rem" }}>{c.council}</div>
                  <div style={{ color: MUTED, fontSize: "0.85rem", fontStyle: "italic", marginBottom: "0.5rem" }}>Issue: {c.issue}</div>
                  <p style={{ color: TEXT, margin: 0, lineHeight: 1.7 }}>{c.decision}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MEDIEVAL */}
        {tab === "medieval" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BLUE}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${BLUE}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: BLUE }}>600–1500: The Medieval Church</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The medieval church is neither the golden age Catholics sometimes present nor the total darkness Protestants sometimes imply. It was a millennium of genuine devotion, breathtaking art, intellectual achievement, terrible corruption, and spiritual hunger — all mixed together.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { era: "Rise of the Papacy (600–1000)", desc: "Gregory the Great (604) models servant-leadership and pastoral care. The papacy grows in power as the Western Roman Empire collapses. Boniface and others evangelize Germanic tribes. Charlemagne is crowned by the Pope (800) — church and state intertwine.", color: BLUE },
                { era: "The Great Schism (1054)", desc: "Eastern and Western churches split over papal authority, the filioque (does the Spirit proceed from the Father and Son, or only the Father?), and cultural differences. Eastern Orthodoxy and Roman Catholicism become distinct traditions.", color: GOLD },
                { era: "The Crusades (1095–1291)", desc: "Pope Urban II calls Western Christians to reclaim Jerusalem. Seven major crusades follow — with genuine piety, political manipulation, and horrific violence mixed together. The lasting legacy: damaged Christian witness among Jews and Muslims.", color: RED },
                { era: "Scholasticism and Aquinas (1100–1300)", desc: "The recovery of Aristotle via Islamic scholarship prompts a theological revolution. Anselm, Abelard, and culminating in Thomas Aquinas — reason and faith are integrated, not opposed. The Summa Theologica remains a masterpiece.", color: TEAL },
                { era: "Reform Movements (1300–1500)", desc: "Wycliffe (England), Hus (Bohemia), and Savonarola (Florence) call for reform decades before Luther. Hus is burned at the Council of Constance (1415). The printing press arrives (1455). The stage is set for the Reformation.", color: GREEN },
              ].map(e => (
                <div key={e.era} style={{ background: CARD, border: `1px solid ${e.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${e.color}` }}>
                  <div style={{ fontWeight: 700, color: e.color, marginBottom: "0.4rem" }}>{e.era}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REFORMATION */}
        {tab === "reformation" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${RED}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${RED}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: RED }}>1517–1600: The Reformation</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>October 31, 1517. An obscure Augustinian monk nails 95 theses to a church door in Wittenberg — or sends them to Archbishop Albert. Within weeks, the printing press distributes them across Europe. Within a generation, Western Christianity is fractured permanently.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { stream: "Lutheran Reformation", leader: "Martin Luther (Germany)", desc: "Justification by faith alone, Scripture alone, grace alone. The German church breaks with Rome. The Augsburg Confession (1530) summarizes Lutheran theology. Music (Luther composed hymns) and education are emphasized.", color: RED },
                { stream: "Reformed / Calvinist", leader: "Zwingli (Zurich), Calvin (Geneva)", desc: "Zwingli reforms Zurich (1519–1531). Calvin's Institutes becomes the most systematic expression of Reformed theology — sovereignty of God, total depravity, election, double predestination. Presbyterianism and Congregationalism develop from this stream.", color: GOLD },
                { stream: "Anabaptist / Radical Reformation", leader: "Grebel, Simons, Hubmaier", desc: "The 'left wing' of the Reformation: reject infant baptism, church-state entanglement, and oaths. Believers' church, pacifism, community of goods. Persecuted by both Catholics and Protestants. Ancestors of Mennonites, Amish, Baptists.", color: TEAL },
                { stream: "English Reformation", leader: "Cranmer, later Puritans", desc: "Begins as political (Henry VIII) but becomes theological. Cranmer's Book of Common Prayer shapes Anglican worship. Elizabethan settlement tries to hold Catholics and Protestants together. Puritans push for further reform.", color: BLUE },
                { stream: "Catholic Counter-Reformation", leader: "Loyola, Council of Trent", desc: "Jesuits (Society of Jesus) are founded by Ignatius of Loyola for education and mission. The Council of Trent (1545–1563) reaffirms Catholic doctrine, reforms abuses, and condemns Protestant teaching. The church is clarified and renewed.", color: PURPLE },
              ].map(s => (
                <div key={s.stream} style={{ background: CARD, border: `1px solid ${s.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${s.color}` }}>
                  <div style={{ fontWeight: 700, color: s.color, marginBottom: "0.15rem" }}>{s.stream}</div>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.5rem" }}>{s.leader}</div>
                  <p style={{ color: TEXT, margin: 0, lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODERN */}
        {tab === "modern" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${TEAL}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${TEAL}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: TEAL }}>1800–Present: The Modern Era</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The modern era is defined by three massive movements: the global missions explosion, the intellectual crisis of liberal theology and its conservative response, and the dramatic growth of Christianity in the Global South — Africa, Asia, and Latin America.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { period: "The Modern Missions Movement (1793–)", desc: "William Carey goes to India (1793) and ignites modern Protestant missions. Adoniram Judson (Burma), Hudson Taylor (China), David Livingstone (Africa), and thousands of others follow. By 1900, Christianity has reached virtually every people group on earth.", color: GREEN },
                { period: "Liberal Theology (1800s–1920s)", desc: "Schleiermacher, Ritschl, and Harnack respond to the Enlightenment by redefining Christianity around experience and ethics rather than doctrine and history. The historical-critical method questions Scripture's authority. The modernist-fundamentalist controversy erupts.", color: BLUE },
                { period: "Azusa Street and Pentecostalism (1906–)", desc: "An interracial revival at a Los Angeles warehouse launches the Pentecostal movement. By the late 20th century, Pentecostalism/Charismatic Christianity is the fastest-growing branch of the faith — now over 600 million worldwide.", color: GOLD },
                { period: "Neo-orthodoxy and Evangelicalism (1920s–)", desc: "Karl Barth's Commentary on Romans (1919) challenges both liberalism and fundamentalism. Evangelicalism coalesces around Billy Graham (1949 Los Angeles revival), founding of Christianity Today (1956), and the Lausanne Covenant (1974).", color: TEAL },
                { period: "Second Vatican Council (1962–1965)", desc: "Pope John XXIII opens aggiornamento — 'updating.' Vatican II reforms Catholic worship (Mass in vernacular), affirms Scripture's role, and opens ecumenical dialogue. The most significant Catholic event since Trent.", color: PURPLE },
              ].map(p => (
                <div key={p.period} style={{ background: CARD, border: `1px solid ${p.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
                  <div style={{ fontWeight: 700, color: p.color, marginBottom: "0.4rem" }}>{p.period}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GLOBAL */}
        {tab === "global" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>The Global Church Today</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The center of global Christianity has shifted dramatically southward. In 1900, 82% of the world&apos;s Christians lived in the Global North (Europe, North America). Today, the majority live in the Global South. The story of the church in the 21st century is being written in Lagos, Nairobi, Seoul, and Sao Paulo.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { region: "Africa", stat: "~700 million Christians", desc: "Sub-Saharan Africa has undergone one of the most dramatic Christianizations in history. African churches are generally theologically conservative, charismatic in practice, and globally influential. Nigeria, DR Congo, Ethiopia, and Kenya have massive Christian populations.", color: GREEN },
                { region: "Latin America", stat: "~600 million Christians", desc: "Long dominated by Catholicism, Latin America has seen explosive Protestant and especially Pentecostal growth since the 1960s. Brazil is now the largest Catholic country and one of the largest Pentecostal countries simultaneously.", color: TEAL },
                { region: "Asia", stat: "~380 million Christians", desc: "South Korea produced one of the great revival stories of the 20th century. China has an estimated 80–100 million Christians, largely in unregistered house churches. India's church is ancient (Thomas tradition) and growing.", color: BLUE },
                { region: "North America & Europe", stat: "~870 million Christians", desc: "Europe continues to decline rapidly — the most secular continent on earth in terms of practice. North America shows slow decline in mainline denominations but growth in immigrant churches and evangelical movements. The Global North is now a mission field.", color: GOLD },
                { region: "The Persecuted Church", stat: "340+ million face persecution", desc: "Open Doors estimates that 340 million Christians face high levels of persecution globally — primarily in North Korea, Central Asia, the Middle East, and parts of Africa. The church in the 21st century is a persecuted church.", color: RED },
              ].map(r => (
                <div key={r.region} style={{ background: CARD, border: `1px solid ${r.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${r.color}` }}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "baseline", marginBottom: "0.4rem" }}>
                    <div style={{ fontWeight: 700, color: r.color }}>{r.region}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{r.stat}</div>
                  </div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Video Teaching</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))", gap: "1.25rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
