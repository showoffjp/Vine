"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const ERAS = ["All", "Apostolic (c.70-150)", "Ante-Nicene (150-325)", "Nicene (325-400)", "Post-Nicene (400-600)"];

const FATHERS = [
  {
    name: "Ignatius of Antioch",
    dates: "c. 35-108 AD",
    era: "Apostolic (c.70-150)",
    color: "#F59E0B",
    role: "Bishop of Antioch, Martyr",
    significance: "Disciple of the Apostle John, Ignatius wrote seven letters while being transported to Rome for martyrdom under Emperor Trajan. These letters are the most important early Christian documents outside the New Testament — they are the first Christian writings to use the term 'Catholic church' (meaning the universal church), to insist on the authority of the bishop as successor to the apostles, and to argue against Docetism with unusual force. His martyrdom was witnessed by many and became one of the formative models of Christian martyrdom.",
    key_work: "Seven Letters (Ephesians, Magnesians, Trallians, Romans, Philadelphians, Smyrnaeans, Polycarp)",
    key_quote: "I am the wheat of God, and let me be ground by the teeth of the wild beasts that I may be found the pure bread of Christ.",
    theology: "Bishop of Antioch; emphasized real presence in the Eucharist; anti-Docetic (Christ truly suffered and died); high ecclesiology centered on the bishop",
    initials: "IG",
  },
  {
    name: "Justin Martyr",
    dates: "c. 100-165 AD",
    era: "Ante-Nicene (150-325)",
    color: PURPLE,
    role: "Apologist, Philosopher",
    significance: "The first great Christian apologist — a philosopher who converted to Christianity and used Greek philosophical concepts to defend the faith to pagan emperors. His First and Second Apologies are addressed to Emperor Antoninus Pius and defend Christians against the charges of atheism, immorality, and sedition. He is also the earliest source for detailed descriptions of Christian worship — including the order of the Sunday Eucharist. He was beheaded in Rome around 165 AD for refusing to sacrifice to Roman gods.",
    key_work: "First Apology, Second Apology, Dialogue with Trypho",
    key_quote: "Christ is the Logos — the divine reason — in whom all rational beings share, and his Incarnation is the full manifestation of what all have glimpsed in part.",
    theology: "Logos Christology; reason and philosophy as a preparation for the gospel; early sacramental theology",
    initials: "JM",
  },
  {
    name: "Irenaeus of Lyons",
    dates: "c. 130-202 AD",
    era: "Ante-Nicene (150-325)",
    color: "#3B82F6",
    role: "Bishop of Lyons",
    significance: "Arguably the most important theologian of the 2nd century. His Against Heresies is the first systematic refutation of Gnosticism, and his theology of 'recapitulation' (Christ as the second Adam who restores in himself everything the first Adam corrupted) is one of the most influential atonement frameworks in Christian history. He insisted that the true church is the church in succession from the apostles — that the rule of faith (Scripture + apostolic tradition) is the criterion against which Gnosticism must be measured.",
    key_work: "Against Heresies (5 volumes), Proof of the Apostolic Preaching",
    key_quote: "The glory of God is a human being fully alive, and the life of a human being is the vision of God.",
    theology: "Anti-Gnostic; recapitulation theory of atonement; apostolic succession and rule of faith; genuine embodied salvation",
    initials: "IR",
  },
  {
    name: "Tertullian",
    dates: "c. 160-220 AD",
    era: "Ante-Nicene (150-325)",
    color: "#EF4444",
    role: "Theologian, North Africa",
    significance: "The first major Christian theologian to write in Latin and the originator of much Latin theological vocabulary. He coined the term 'Trinity' (trinitas) and formulated the Trinitarian formula 'one substance, three persons' (una substantia, tres personae) that became the Western orthodox standard. Brilliant, combative, and deeply rigorist, he eventually joined the Montanist movement — a charismatic sect — but his theological contributions to Trinitarian and Christological doctrine were irrevocable.",
    key_work: "Apologeticus, Against Marcion, Against Praxeas, On the Trinity, On Baptism",
    key_quote: "What does Jerusalem have to do with Athens? What does the Academy have to do with the Church?",
    theology: "Trinitarian formula; Christological precision; rigorism on penance; early baptismal theology; anti-Marcionite",
    initials: "TER",
  },
  {
    name: "Origen of Alexandria",
    dates: "c. 184-253 AD",
    era: "Ante-Nicene (150-325)",
    color: GREEN,
    role: "Theologian, Biblical Scholar",
    significance: "The most prolific and learned biblical scholar of the ancient church. Origen produced the Hexapla (six-column parallel text of the Old Testament), commentaries on almost every book of the Bible, and the first Christian systematic theology (On First Principles). His allegorical method of biblical interpretation had enormous influence on all subsequent Christian exegesis. Posthumously declared heretical on several points (pre-existence of souls, universal salvation, spiritual bodies at resurrection), but his hermeneutical and scholarly contributions are incalculable.",
    key_work: "On First Principles, Hexapla, Against Celsus, Commentaries on Romans/John/Matthew",
    key_quote: "The Scriptures have been written in such a way as to have a veil drawn over their meaning... We must go beyond the letter.",
    theology: "Allegorical interpretation; pre-existence of souls (controversial); proto-universalism; Logos Christology; Scripture's multiple senses",
    initials: "OR",
  },
  {
    name: "Athanasius of Alexandria",
    dates: "c. 296-373 AD",
    era: "Nicene (325-400)",
    color: "#A855F7",
    role: "Bishop of Alexandria",
    significance: "The defender of Nicene orthodoxy against Arianism. Athanasius was exiled five times for refusing to compromise on the full divinity of Christ — giving rise to the phrase 'Athanasius contra mundum' (Athanasius against the world). His On the Incarnation (written around 318 AD, before Nicaea) is one of the most important early Christological texts. He argued that only a fully divine Savior could achieve a fully divine salvation: if Christ is a lesser being, our deification (theosis) in Christ is also lesser.",
    key_work: "On the Incarnation, Defense of the Nicene Definition, Life of Antony",
    key_quote: "He became what we are so that he might make us what he is.",
    theology: "Full divinity of Christ; homoousios; theosis (deification); anti-Arian; defender of Nicene Creed",
    initials: "ATH",
  },
  {
    name: "The Cappadocian Fathers",
    dates: "c. 329-395 AD",
    era: "Nicene (325-400)",
    color: "#10B981",
    role: "Three Theologians (Basil, Gregory of Nyssa, Gregory of Nazianzus)",
    significance: "Three theologians from Cappadocia (modern Turkey) who completed the Trinitarian theology of Athanasius and defended it at the Council of Constantinople (381). Basil the Great developed the distinction between ousia (substance, what the three share) and hypostasis (person, what distinguishes them). Gregory of Nazianzus's Five Theological Orations are the summit of Greek Trinitarian thought. Gregory of Nyssa was the most philosophically sophisticated of the three and is also the father of Christian mystical theology (Life of Moses, homilies on the Song of Songs).",
    key_work: "Basil: On the Holy Spirit; Gregory of Nazianzus: Five Theological Orations; Gregory of Nyssa: Life of Moses",
    key_quote: "'God is always moving, always in motion, always at work. And when I see him, I see light and not darkness, fire and not cold.' (Gregory of Nazianzus)",
    theology: "Trinitarian formula (ousia/hypostasis); pneumatology (divinity of Holy Spirit); theosis; Christian Platonism; mystical theology",
    initials: "CAP",
  },
  {
    name: "Augustine of Hippo",
    dates: "354-430 AD",
    era: "Post-Nicene (400-600)",
    color: "#F59E0B",
    role: "Bishop of Hippo, North Africa",
    significance: "The single most influential theologian in Western Christianity. His Confessions is the first autobiography in the modern sense. The City of God is the first Christian philosophy of history. His anti-Pelagian writings defined Western doctrines of original sin, grace, and predestination that still shape Reformed and Catholic theology. His trinitarian theology (On the Trinity) introduced the psychological analogy for the Trinity. His controversies with Donatists shaped Western ecclesiology. No single figure has shaped Western Christian thought more thoroughly.",
    key_work: "Confessions, City of God, On the Trinity, On the Spirit and the Letter, Enchiridion",
    key_quote: "You have made us for yourself, O Lord, and our heart is restless until it rests in you.",
    theology: "Original sin and total depravity; irresistible grace; predestination; two cities (City of God / City of Man); trinitarian psychology; just war theory",
    initials: "AUG",
  },
  {
    name: "John Chrysostom",
    dates: "c. 347-407 AD",
    era: "Post-Nicene (400-600)",
    color: "#EC4899",
    role: "Archbishop of Constantinople",
    significance: "Chrysostom (Golden-mouth) is the greatest preacher of the ancient church. His homilies on Matthew, John, Romans, 1 Corinthians, and Galatians remain in print and remain models of expository preaching. He was deposed twice by empress Eudoxia for his unsparing social criticism — he attacked the luxury of the wealthy, demanded care for the poor, and insisted that the Eucharist and the poor are equally the body of Christ. His liturgy (the Divine Liturgy of St. John Chrysostom) remains in use in Orthodox churches every Sunday.",
    key_work: "Homilies on Matthew, Romans, 1 Corinthians; On the Priesthood; Divine Liturgy",
    key_quote: "If you cannot find Christ in the beggar at the church door, neither will you find him in the chalice.",
    theology: "Expository preaching; social justice; high Eucharistic theology; pastoral care; anti-Arianism",
    initials: "CHR",
  },
];

const FATHER_PERIODS = [
  {
    id: 1,
    era: "Apostolic Fathers",
    period: "c. 70-150 AD",
    description: "Students and disciples of the apostles who served as the bridge between the New Testament era and the broader sweep of church history. Their writings are not Scripture, but they represent the living memory of those who knew the apostles and preserve the teaching of the first generation. They wrote to encourage, correct, and unify young churches facing persecution and doctrinal confusion.",
    key_figures: ["Ignatius of Antioch", "Clement of Rome", "Polycarp of Smyrna", "Papias of Hierapolis", "The Didache (anonymous)"],
    key_controversy: "Establishing authentic Christianity — which communities, leaders, and teachings are genuinely apostolic",
    significance: "The Apostolic Fathers give us our earliest window into how the church worshipped, organized itself, dealt with false teaching, and faced martyrdom. Their writings are the primary evidence for what Christianity looked like in the generation immediately after the apostles.",
  },
  {
    id: 2,
    era: "Apologists",
    period: "c. 150-220 AD",
    description: "The Apologists were educated Christians who addressed their writings to pagan Roman emperors and intellectuals to defend the faith against mischaracterizations and persecution. They argued that Christianity is morally superior to paganism, philosophically coherent, and not a threat to the Roman state. Many drew on Greek philosophy (Stoicism, Platonism) as a bridge to the gospel.",
    key_figures: ["Justin Martyr", "Tertullian", "Athenagoras", "Theophilus of Antioch", "Minucius Felix"],
    key_controversy: "Showing Christianity is philosophically credible and morally defensible to pagan Rome",
    significance: "The Apologists pioneered the engagement between Christian faith and secular philosophy that has continued ever since. Justin Martyr's description of Sunday worship is our earliest detailed account of Christian liturgy. Tertullian's Latin theological vocabulary shaped Western Christianity for centuries.",
  },
  {
    id: 3,
    era: "Pre-Nicene Fathers",
    period: "c. 170-325 AD",
    description: "As Christianity grew, heresies multiplied — especially Gnosticism, which claimed a secret spiritual knowledge superior to the bodily resurrection and material creation. The Pre-Nicene Fathers responded by articulating the rule of faith (regula fidei), defending apostolic succession, and developing systematic approaches to Scripture and doctrine. Origen represents the high-water mark of pre-Nicene theological ambition.",
    key_figures: ["Irenaeus of Lyons", "Origen of Alexandria", "Cyprian of Carthage", "Hippolytus of Rome", "Clement of Alexandria"],
    key_controversy: "Gnosticism, Montanism, Modalism (Sabellianism) — all challenging the apostolic pattern of faith",
    significance: "Irenaeus's Against Heresies gave the church its first comprehensive theological system. Origen's allegorical method shaped biblical interpretation for a millennium. Cyprian's ecclesiology ('outside the church there is no salvation') became foundational for both Catholic and Protestant ecclesiology.",
  },
  {
    id: 4,
    era: "Nicene Fathers",
    period: "c. 325-430 AD",
    description: "The great conciliar era, when the church's ecumenical councils defined the Trinity (Nicaea, 325; Constantinople, 381) and the two natures of Christ (Ephesus, 431; Chalcedon, 451). The Nicene Fathers were both bishops and theologians who engaged political power, endured exile, and argued with extraordinary precision over the Greek terms that would define Christian orthodoxy.",
    key_figures: ["Athanasius of Alexandria", "Basil the Great", "Gregory of Nazianzus", "Gregory of Nyssa", "John Chrysostom", "Ambrose of Milan", "Augustine of Hippo"],
    key_controversy: "Arianism (Christ is a created being, not fully divine) — the greatest theological crisis of the first millennium",
    significance: "The Nicene Creed, hammered out in this period, remains the common confession of Catholic, Orthodox, and most Protestant churches. Athanasius's phrase 'homoousios' (same substance with the Father) and the Cappadocians' ousia/hypostasis distinction are the permanent framework for Trinitarian theology.",
  },
  {
    id: 5,
    era: "Post-Nicene Fathers",
    period: "c. 430-600 AD",
    description: "After the great doctrinal councils, the church turned to applying orthodoxy pastorally, politically, and institutionally. The Western Roman Empire was collapsing; the church increasingly stepped into civil roles. Monasticism grew as a counter-cultural spiritual movement. The great fathers of this era organized church and society, developed pastoral theology, and preserved learning through the darkening of late antiquity.",
    key_figures: ["Leo the Great", "John Cassian", "Vincent of Lerins", "Gregory the Great", "Boethius", "Isidore of Seville"],
    key_controversy: "Church-state relations, the nature of monasticism, and the Nestorian/Monophysite aftermath",
    significance: "Gregory the Great's pastoral writings (Pastoral Rule) defined the bishop's role for the medieval church. John Cassian's Institutes and Conferences gave Western monasticism its spirituality. Leo's Tome and interventions at Chalcedon established papal authority in a new register.",
  },
];

const FATHER_TEXTS = [
  {
    id: 1,
    title: "The Didache",
    author: "Anonymous",
    date: "c. 100 AD",
    excerpt: "You shall not murder; you shall not commit adultery; you shall not corrupt children; you shall not fornicate... And concerning the Eucharist, hold Eucharist thus: First concerning the Cup, 'We give thanks to thee, our Father, for the holy vine of David thy child.'",
    significance: "Earliest non-canonical church manual — the first written evidence of how early Christians worshipped, practiced baptism, celebrated the Eucharist, and organized their communities. Rediscovered in 1873 in a monastery in Constantinople after being lost for 1,500 years.",
  },
  {
    id: 2,
    title: "Epistle to the Romans",
    author: "Ignatius of Antioch",
    date: "c. 110 AD",
    excerpt: "I am God's wheat, ground fine by the lion's teeth to be made purest bread for Christ. Better still, incite the wild beasts to become my tomb and leave no trace of my body. Thus, when I have fallen asleep, I shall be a burden to no one.",
    significance: "The most moving early Christian letter on martyrdom — written while Ignatius was being transported to Rome to be killed. Reveals the early church's theology of suffering, the Eucharist, and union with Christ through death.",
  },
  {
    id: 3,
    title: "First Apology",
    author: "Justin Martyr",
    date: "c. 155 AD",
    excerpt: "We who formerly delighted in fornication now embrace chastity alone; we who formerly used magical arts now dedicate ourselves to the good and unbegotten God; we who formerly valued above all things the acquisition of wealth now bring what we have into a common stock and share with everyone in need.",
    significance: "First systematic defense of Christianity addressed to a Roman Emperor (Antoninus Pius). Contains the earliest detailed description of Sunday Christian worship — including the reading of Scripture, preaching, prayers, and Eucharist — making it invaluable for liturgical history.",
  },
  {
    id: 4,
    title: "Against Heresies",
    author: "Irenaeus of Lyons",
    date: "c. 180 AD",
    excerpt: "For the glory of God is a living man; and the life of man consists in beholding God. For if the manifestation of God which is made by means of the creation affords life to all living in the earth, much more does that revelation of the Father which comes through the Word give life to those who see God.",
    significance: "The first comprehensive statement of orthodox theology — a five-volume refutation of Gnosticism that established the rule of faith, apostolic succession, and the canon of Scripture as the criteria for authentic Christianity. Still unsurpassed as an anti-Gnostic resource.",
  },
  {
    id: 5,
    title: "Confessions",
    author: "Augustine of Hippo",
    date: "c. 397 AD",
    excerpt: "Thou madest us for Thyself, and our heart is restless, until it repose in Thee... Thou awakest us to delight in Thy praise; for Thou madest us for Thyself, and our heart is restless, until it repose in Thee.",
    significance: "The first autobiography in Western literature and the most personal account of conversion in the history of the church. Augustine's account of his life from birth through his conversion at age 31 and his mother Monica's death has shaped Christian spirituality for 1,600 years.",
  },
  {
    id: 6,
    title: "On the Incarnation",
    author: "Athanasius of Alexandria",
    date: "c. 318 AD",
    excerpt: "He became what we are that he might make us what he is. The Word of God came in His own Person, because it was He alone, the Image of the Father, Who could recreate man made after the Image.",
    significance: "The clearest and most compelling statement of why God became man — written before the Arian controversy erupted. C.S. Lewis wrote the introduction to a 20th-century edition, describing it as one of the greatest books he had ever read. Required reading for any serious Christian.",
  },
];

const FATHERS_VIDEOS = [
  { id: "v6xk8e7gdMA", title: "The Holiness of God", speaker: "R.C. Sproul" },
  { id: "7CBgp74UwbU", title: "The Trauma of Holiness", speaker: "R.C. Sproul" },
  { id: "by8ykv7-A3c", title: "Supremacy of Christ and Truth", speaker: "Voddie Baucham" },
  { id: "Kxup3OS5ZhQ", title: "The Reason for God at Google", speaker: "Tim Keller" },
  { id: "JHdB1dYAteA", title: "Don't Waste Your Life", speaker: "John Piper" },
  { id: "lsTzXI7cJGA", title: "The Prodigal Sons", speaker: "Tim Keller" },
];

type Tab = "guide" | "periods" | "texts" | "videos";

export default function ChurchFathersGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_church-fathers-guide_tab", "guide");
  const [era, setEra] = usePersistedState<string>("vine_church-fathers-guide_era", "All");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedText, setSelectedText] = useState<number | null>(null);

  const filtered = FATHERS.filter(f => era === "All" || f.era === era);
  const father = FATHERS.find(f => f.name === selected);
  const text = FATHER_TEXTS.find(t => t.id === selectedText) ?? null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🏛️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Church Fathers</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The theologians who shaped Christian doctrine in the first six centuries &mdash; from Ignatius&rsquo;s martyrdom letters to Augustine&rsquo;s City of God. The cloud of witnesses who worked out what we now confess.
          </p>
        </div>

        {/* Top Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {(["guide", "periods", "texts", "videos"] as const).map(t => (
            <button type="button" key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer", flex: 1 }}>
              {t === "guide" ? "Guide" : t === "periods" ? "Periods" : t === "texts" ? "Texts" : "Videos"}
            </button>
          ))}
        </div>

        {/* GUIDE TAB */}
        {activeTab === "guide" && (
          <>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {ERAS.map(e => (
                <button type="button" key={e} onClick={() => setEra(e)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${era === e ? GREEN : BORDER}`, background: era === e ? `${GREEN}15` : "transparent", color: era === e ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {e}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: father ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((f, i) => (
                  <button type="button" key={i} onClick={() => setSelected(selected === f.name ? null : f.name)}
                    style={{ background: selected === f.name ? `${f.color}12` : CARD, border: `1px solid ${selected === f.name ? f.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${f.color}20`, border: `1px solid ${f.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: f.color, fontWeight: 900, fontSize: 12, flexShrink: 0 }}>
                        {f.initials}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{f.name}</span>
                          <span style={{ background: `${f.color}15`, color: f.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{f.dates}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{f.role}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {father && (
                <div style={{ background: CARD, border: `1px solid ${father.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: `${father.color}20`, border: `1px solid ${father.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: father.color, fontWeight: 900, fontSize: 13, flexShrink: 0 }}>
                      {father.initials}
                    </div>
                    <div>
                      <h2 style={{ color: father.color, fontWeight: 900, fontSize: 20, margin: "0 0 2px" }}>{father.name}</h2>
                      <div style={{ color: MUTED, fontSize: 12 }}>{father.dates} &middot; {father.role}</div>
                    </div>
                  </div>

                  <div style={{ background: `${father.color}08`, border: `1px solid ${father.color}20`, borderRadius: 10, padding: 14, marginBottom: 14 }}>
                    <div style={{ color: father.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY QUOTE</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{father.key_quote}&rdquo;</p>
                  </div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>{father.significance}</p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
                    <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10 }}>
                      <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>KEY WORKS</div>
                      <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{father.key_work}</p>
                    </div>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 10 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>THEOLOGY</div>
                      <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{father.theology}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* PERIODS TAB */}
        {activeTab === "periods" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, maxWidth: 720, marginBottom: 8 }}>
              The Church Fathers span five distinct periods, each shaped by different controversies, contexts, and challenges. Understanding the era helps you understand why a father wrote what he wrote.
            </p>
            {FATHER_PERIODS.map(period => (
              <div key={period.id} style={{ background: CARD, borderRadius: 16, padding: 28, border: `1px solid ${BORDER}` }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginBottom: 6 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 900, color: TEXT, margin: 0 }}>{period.era}</h3>
                      <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700, border: `1px solid ${GREEN}30` }}>{period.period}</span>
                    </div>
                    <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 14 }}>{period.description}</p>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 14 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 8 }}>KEY FIGURES</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      {period.key_figures.map(f => (
                        <div key={f} style={{ fontSize: 13, color: TEXT, display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ color: PURPLE, fontSize: 10 }}>&#9658;</span> {f}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ background: "#FF444408", border: "1px solid #FF444420", borderRadius: 10, padding: 14 }}>
                      <div style={{ color: "#FF6666", fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY CONTROVERSY</div>
                      <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{period.key_controversy}</p>
                    </div>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>SIGNIFICANCE</div>
                      <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{period.significance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TEXTS TAB */}
        {activeTab === "texts" && (
          <div style={{ display: "grid", gridTemplateColumns: text ? "1fr 300px" : "1fr", gap: 16, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 8 }}>
                Six primary texts every serious student of the Church Fathers should read &mdash; with real excerpts and their significance in Christian history.
              </p>
              {FATHER_TEXTS.map(t => (
                <button type="button" key={t.id} onClick={() => setSelectedText(selectedText === t.id ? null : t.id)}
                  style={{ background: selectedText === t.id ? `${GREEN}08` : CARD, border: `1px solid ${selectedText === t.id ? GREEN + "40" : BORDER}`, borderRadius: 14, padding: "20px 24px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginBottom: 8 }}>
                    <span style={{ color: TEXT, fontWeight: 900, fontSize: 16 }}>{t.title}</span>
                    <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "1px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{t.date}</span>
                  </div>
                  <div style={{ color: MUTED, fontSize: 13, marginBottom: 12 }}>by {t.author}</div>
                  <p style={{ fontSize: 13, color: GREEN, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
                    &ldquo;{t.excerpt}&rdquo;
                  </p>
                </button>
              ))}
            </div>

            {text && (
              <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 20, position: "sticky", top: 100 }}>
                <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 16, marginBottom: 4 }}>{text.title}</h3>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 4 }}>by {text.author}</div>
                <div style={{ color: PURPLE, fontSize: 12, fontWeight: 700, marginBottom: 14 }}>{text.date}</div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14, marginBottom: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>EXCERPT</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>&ldquo;{text.excerpt}&rdquo;</p>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 14 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>SIGNIFICANCE</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{text.significance}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div>
            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 24 }}>
              Lectures and sermons on theology, church history, and the truth the Fathers gave their lives to defend.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: 20 }}>
              {FATHERS_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, borderRadius: 14, overflow: "hidden", border: `1px solid ${BORDER}` }}>
                  <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", borderRadius: 0 }}
                    src={`https://www.youtube.com/embed/${v.id}`} title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <div style={{ padding: "14px 18px" }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: TEXT, marginBottom: 4 }}>{v.title}</div>
                    <div style={{ fontSize: 12, color: MUTED }}>{v.speaker}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
}
