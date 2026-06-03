"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#C9A227";

type Tab = "overview" | "theology" | "liturgy" | "history" | "dialogue" | "videos";

const OVERVIEW_POINTS = [
  {
    title: "The Ancient Church Preserved",
    icon: "⛪",
    color: GOLD,
    body: "Eastern Orthodox Christianity claims to be the direct continuation of the original apostolic church. With roots in the Eastern Roman (Byzantine) Empire, Orthodoxy traces its liturgy, theology, and episcopate (bishops) in an unbroken line to the apostles and the early ecumenical councils. It is the world's second-largest Christian communion after Roman Catholicism, with approximately 220–260 million adherents worldwide — concentrated in Russia, Greece, Romania, Serbia, Bulgaria, Georgia, Ethiopia, and the Middle East.",
    verse: "Acts 2:42 — 'They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer.'"
  },
  {
    title: "The Great Schism of 1054",
    icon: "✝️",
    color: "#3B82F6",
    body: "In 1054 AD, the church formally divided into the Roman Catholic West (led by the Pope) and the Eastern Orthodox East (led by the Patriarch of Constantinople). The split had theological, political, and cultural roots. Key disputes: (1) the Filioque controversy — whether the Holy Spirit proceeds from the Father alone, or from the Father 'and the Son' (filioque); (2) papal supremacy — Rome claimed universal jurisdiction over the church; (3) liturgical and disciplinary differences. Both communions to this day consider themselves the one, holy, catholic, and apostolic church.",
    verse: "John 17:21 — 'That they may all be one, just as you, Father, are in me, and I in you.'"
  },
  {
    title: "A Communion of Autocephalous Churches",
    icon: "🌍",
    color: "#52a876",
    body: "Unlike Roman Catholicism (which has a centralized pope) or Protestantism (which has no formal central authority), Eastern Orthodoxy is organized as a communion of self-governing (autocephalous) national churches — Greek Orthodox, Russian Orthodox, Romanian Orthodox, etc. — each led by their own patriarch or metropolitan, all in communion with one another. The Patriarch of Constantinople holds a primacy of honor as 'first among equals' but no supreme juridical authority over the others.",
    verse: "Ephesians 4:4-6 — 'There is one body and one Spirit... one Lord, one faith, one baptism.'"
  },
  {
    title: "The Largest Christian Body in the Eastern World",
    icon: "🕊️",
    color: PURPLE,
    body: "Russia has the largest Orthodox population (~100 million), followed by Ethiopia (~50 million), Romania (~18 million), Greece (~10 million), and Serbia (~7 million). In Ethiopia, the ancient Tewahedo Orthodox Church predates Western Christianity in Ethiopia by centuries. Orthodox Christianity is experiencing significant growth in sub-Saharan Africa and in the West through converts. There are an estimated 4-6 million Orthodox Christians in North America.",
    verse: "Revelation 7:9 — 'A great multitude from every nation, tribe, people, and language.'"
  }
];

const THEOLOGY_ITEMS = [
  {
    doctrine: "Theosis (Deification)",
    greek: "θέωσις",
    color: GOLD,
    explanation: "The central goal of Orthodox spirituality is theosis — being progressively transformed into the likeness of God, participating in the divine nature (2 Peter 1:4). Athanasius of Alexandria's famous formula: 'God became man that man might become God.' This is not pantheism (humans don't become God in essence) but a real, participatory union with God through grace. The Orthodox liturgy, sacraments, and spiritual disciplines are all oriented toward theosis. This concept has no exact equivalent in Western theology but echoes the Wesleyan concept of entire sanctification.",
    key_figure: "Maximus the Confessor (580-662 AD)"
  },
  {
    doctrine: "Holy Tradition",
    greek: "Ἱερά Παράδοσις",
    color: "#3B82F6",
    explanation: "Orthodoxy holds that Scripture and Holy Tradition are together the single source of revealed truth. Tradition includes the writings of the Church Fathers, the seven Ecumenical Councils, the liturgical life of the church, the lives of the saints, and the ongoing consensus of the church through the ages. This is not a supplement to Scripture but the living context within which Scripture is properly understood. The Orthodox argue that the New Testament itself emerged from the Tradition of the church.",
    key_figure: "Vincent of Lérins (c. 450 AD) — 'What has been believed everywhere, always, by everyone.'"
  },
  {
    doctrine: "The Seven Ecumenical Councils",
    greek: "Οἰκουμενικὴ Σύνοδος",
    color: "#EF4444",
    explanation: "Orthodoxy recognizes seven ecumenical councils (325-787 AD) as authoritative: Nicaea I, Constantinople I, Ephesus, Chalcedon, Constantinople II, Constantinople III, and Nicaea II. These councils defined the Trinity (Nicaea I, 325), the two natures of Christ (Chalcedon, 451), and the legitimacy of icons (Nicaea II, 787). Orthodox theology holds that these councils speak with the authority of the Holy Spirit and cannot be overturned. The great creeds of Christianity — Nicene, Apostles', Athanasian — emerged from this process.",
    key_figure: "Ecumenical councils 325–787 AD"
  },
  {
    doctrine: "Apophatic Theology",
    greek: "Ἀποφατική θεολογία",
    color: "#10B981",
    explanation: "The Orthodox theological tradition emphasizes apophatic (negative) theology — describing God by what he is not rather than what he is. This guards against reducing God to human concepts. God's essence is unknowable and incomprehensible; his energies (his active presence and grace in the world) are knowable and participable. This distinction between divine essence and divine energies (Palamism, after Gregory Palamas, 1296-1359) is one of the major theological differences between Orthodox and Western Christianity.",
    key_figure: "Gregory Palamas (1296-1359 AD)"
  },
  {
    doctrine: "The Incarnation as Central",
    greek: "Ἐνσάρκωσις",
    color: PURPLE,
    explanation: "Orthodox theology is deeply incarnational — the Incarnation of the Son of God is not just the means of atonement but the central event of cosmic history. Because the eternal Son became human, human nature was taken up into the divine life. Orthodox soteriology (theology of salvation) tends to emphasize healing, transformation, and deification rather than primarily legal/forensic categories (justification, imputation). Sin is disease, not merely guilt; salvation is healing and transformation, not merely pardon.",
    key_figure: "Athanasius of Alexandria (296-373 AD)"
  },
  {
    doctrine: "The Sacraments (Mysteries)",
    greek: "Μυστήρια",
    color: "#F59E0B",
    explanation: "Orthodox Christianity recognizes seven sacraments (called Mysteries): Baptism, Chrismation (equivalent of Confirmation), Eucharist, Repentance/Confession, Holy Orders, Marriage, and Holy Unction (anointing of the sick). The Eucharist is truly the body and blood of Christ — not symbolic (as in most Protestant traditions) and not explained by the scholastic category of transubstantiation (as in Roman Catholicism), but genuinely and mysteriously transformed by the Holy Spirit. The Divine Liturgy is the central act of Orthodox worship.",
    key_figure: "John Chrysostom (347-407 AD) — liturgy named after him"
  }
];

const LITURGY_ELEMENTS = [
  {
    name: "The Divine Liturgy",
    color: GOLD,
    desc: "The central act of Orthodox worship. Most Orthodox parishes use the Divine Liturgy of St. John Chrysostom (4th century). It is approximately 90 minutes long and is sung almost entirely — the Orthodox tradition has no tradition of spoken liturgy. The liturgy is divided into the Liturgy of the Catechumens (Scripture readings and teaching) and the Liturgy of the Faithful (Eucharist). The priest stands behind the iconostasis (icon screen), entering and exiting through the Royal Doors. The congregation stands throughout most of the service.",
    significance: "Participating in the Divine Liturgy is understood as entering into heaven itself — joining the eternal worship of the angels."
  },
  {
    name: "Icons",
    color: "#3B82F6",
    desc: "Icons (sacred images of Christ, the Virgin Mary, and the saints) are central to Orthodox worship and spirituality. They are not 'idols' or merely decorative — they are 'windows into heaven,' a theology of the holy image grounded in the Incarnation: because God became visible in Jesus Christ, he can be depicted. Nicaea II (787 AD) defended the veneration (not worship) of icons against iconoclasm. Orthodox churches are covered with icons; Orthodox homes typically have an 'icon corner' where the family prays.",
    significance: "Theology in color — icons communicate the gospel visually and connect the worshipper to the communion of saints."
  },
  {
    name: "The Jesus Prayer",
    color: "#10B981",
    desc: "'Lord Jesus Christ, Son of God, have mercy on me, a sinner' — the Jesus Prayer is the foundational prayer of Orthodox spirituality. It is practiced with a prayer rope (chotki) as a constant, rhythmic prayer — synchronized with breathing in the tradition of hesychasm (the practice of stillness). The 19th-century Russian spiritual classic The Way of the Pilgrim describes a layman who learns to pray the Jesus Prayer continuously and is transformed. This practice has influenced contemplative Christianity globally.",
    significance: "A prayer that can be prayed anywhere, any time — approaching the state of 'pray without ceasing' (1 Thessalonians 5:17)."
  },
  {
    name: "The Church Calendar",
    color: "#EC4899",
    desc: "The Orthodox liturgical year follows a complex calendar of fasts, feasts, and saints' days. There are four major fasting periods: Great Lent (before Pascha/Easter), Apostles' Fast, Dormition Fast, and Nativity Fast. Orthodox Easter (Pascha) is the most important feast of the year — often different in date from Western Easter. The celebration of Pascha (beginning at midnight with 'Christ is risen!') is one of the most profound liturgical experiences in Christianity.",
    significance: "The liturgical year forms the Christian in the pattern of the gospel — death, burial, resurrection — through annual rhythm."
  },
  {
    name: "Hesychasm and Stillness",
    color: PURPLE,
    desc: "Hesychasm (from Greek hesychia, stillness) is the Orthodox contemplative tradition — the practice of inner prayer, stillness, and the vision of the divine light. Associated especially with Mount Athos (the monastic center of Orthodoxy in Greece) and with the theology of Gregory Palamas (1296-1359). The practitioner of hesychasm seeks through sustained prayer, fasting, and watchfulness to receive the uncreated light of God — the same light that shone on Mount Tabor at the Transfiguration.",
    significance: "The interior life is the heart of Orthodox spirituality — not just external religious observance but union with God through prayer."
  }
];

const HISTORIANS = [
  {
    name: "Alexander Schmemann",
    dates: "1921–1983",
    color: GOLD,
    tradition: "Orthodox — Russian/American",
    role: "Dean, St. Vladimir's Orthodox Theological Seminary; liturgical theologian",
    contribution: "Schmemann's work on Orthodox liturgical theology — especially For the Life of the World (1963) — translated the meaning of Orthodox worship for Western readers. He articulated how the Eucharist and the liturgical life of the church are not 'religious rituals' separate from the world but the world's transformation — the foretaste of the kingdom of God. His influence extends far beyond Orthodox circles, shaping how many Christians think about worship and the church.",
    quote: "The eucharist is the sacrament of the kingdom — not of anything 'next world,' but of this world, raised up and transfigured, filling all things with divine presence.",
  },
  {
    name: "Timothy (Kallistos) Ware",
    dates: "1934–2022",
    color: "#3B82F6",
    tradition: "Orthodox — English convert; Bishop of Diokleia",
    role: "Author of The Orthodox Church (the standard English introduction to Orthodoxy)",
    contribution: "Bishop Kallistos Ware's The Orthodox Church (1963, revised 1993) remains the single most accessible and respected introduction to Eastern Orthodox Christianity in English. A former Anglican convert to Orthodoxy, Ware wrote with clarity, generosity, and scholarly depth about a tradition that had been almost invisible to the English-speaking world. His work created the possibility of serious ecumenical dialogue between Orthodoxy and Western Christians.",
    quote: "Orthodoxy believes itself to be the Church of the ancient councils, the Church of the Fathers, and sees its task not to add to their witness but to guard and transmit it faithfully.",
  },
  {
    name: "Georges Florovsky",
    dates: "1893–1979",
    color: "#10B981",
    tradition: "Orthodox — Russian; Harvard professor",
    role: "Theologian; architect of the neo-patristic synthesis",
    contribution: "Florovsky's neo-patristic synthesis called Orthodox theology back to the Church Fathers as the normative source for theological renewal. He argued against both Western theological categories and against Russian religious philosophy, insisting that genuine Orthodox theology must 'think in the Fathers' — not merely repeat patristic texts but inhabit the patristic mind. His vision of a 'Christian Hellenism' — that Orthodox theology represents the authentic flowering of the encounter between the Gospel and Greek philosophy — has been enormously influential.",
    quote: "Christianity entered history as a new social order — the Church. The Church is not an institution, but a new life with Christ and in Christ.",
  },
  {
    name: "Metropolitan Anthony Bloom",
    dates: "1914–2003",
    color: PURPLE,
    tradition: "Orthodox — Russian/British",
    role: "Metropolitan of Sourozh (Britain and Ireland); widely read spiritual writer",
    contribution: "Anthony Bloom's books on prayer — Beginning to Pray, School for Prayer, and others — have introduced millions of non-Orthodox readers to Orthodox spirituality. His approach: prayer is a relationship, not a technique; it begins with silence, with meeting God as he is, not as we imagine him. His practical, psychologically perceptive, spiritually demanding approach to prayer transcends denominational boundaries and has shaped Christian spirituality broadly.",
    quote: "We must learn to come before God with the feeling that we are 'nothing' — not a religious performance of nothingness, but the real experience of discovering that without God, we are truly empty.",
  }
];

const SHARED_GROUND = [
  { area: "The Holy Trinity", color: GOLD, orthodox: "The defining doctrine of Christianity, fully shared. The Nicene-Constantinopolitan Creed (381 AD) was formulated by Eastern bishops and is sung/recited at every Orthodox liturgy.", protestant: "Protestants fully affirm the Nicene Creed's Trinitarian formulation. This is common ground." },
  { area: "The Full Divinity and Humanity of Christ", color: "#3B82F6", orthodox: "Chalcedon (451 AD) — one person, two natures — is accepted by all Orthodox churches. The Christological heresies condemned by the councils are rejected.", protestant: "Protestants universally affirm Chalcedonian Christology. This is common ground." },
  { area: "The Authority of Scripture", color: "#10B981", orthodox: "Scripture is the supreme written expression of Holy Tradition. The canon was established by the church. Orthodox interpret Scripture through the Fathers and the councils, not through individual private judgment.", protestant: "Protestants affirm Scripture's supreme authority but vary in how they relate it to tradition. The Orthodox critique of private interpretation has merit and deserves serious engagement." },
  { area: "The Resurrection", color: "#EF4444", orthodox: "Pascha (Easter) is the 'Feast of Feasts' — the greatest celebration of the year. 'Christ is Risen! Truly He is Risen!' (Χριστὸς Ἀνέστη!)", protestant: "The resurrection is universally affirmed as the center of the faith. Common ground." },
  { area: "Salvation by Grace", color: PURPLE, orthodox: "Orthodoxy affirms that salvation is entirely by God's grace — not human merit. The language differs (theosis rather than justification) but the anti-Pelagian foundation is shared.", protestant: "Though Protestant/Orthodox soteriology differs in categories and emphases, both traditions reject the idea that humans save themselves. Deeper dialogue needed on justification vs. theosis." },
  { area: "The Necessity of Prayer and Fasting", color: "#F59E0B", orthodox: "Orthodox Christians fast extensively (Wednesday and Friday weekly, plus four fasting seasons). Prayer is structured, regular, and communal.", protestant: "Most Protestant traditions affirm the importance of prayer and many practice fasting, though less structured than Orthodoxy. The Orthodox practice challenges Protestant informality." }
];

export default function EasternOrthodoxPage() {
  const [tab, setTab] = useState<Tab>("overview");
  const [selectedTheology, setSelectedTheology] = useState(THEOLOGY_ITEMS[0].doctrine);
  const [selectedLiturgy, setSelectedLiturgy] = useState(LITURGY_ELEMENTS[0].name);
  const [selectedHistorian, setSelectedHistorian] = useState(HISTORIANS[0].name);

  const theologyItem = THEOLOGY_ITEMS.find(t => t.doctrine === selectedTheology)!;
  const liturgyItem = LITURGY_ELEMENTS.find(l => l.name === selectedLiturgy)!;
  const historian = HISTORIANS.find(h => h.name === selectedHistorian)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>☦️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Eastern Orthodox Christianity</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            The ancient Eastern church — preserving 2,000 years of liturgy, theology, and spirituality. The second-largest Christian communion
            in the world, with 220 million adherents from Greece to Russia to Ethiopia.
          </p>
        </div>

        {/* Verse banner */}
        <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 10, padding: "12px 18px", marginBottom: 28, textAlign: "center" }}>
          <span style={{ color: GOLD, fontWeight: 700, fontSize: 13 }}>Χριστὸς Ἀνέστη — </span>
          <span style={{ color: TEXT, fontSize: 13 }}>Christ is Risen! The central proclamation of Orthodox faith, sung at every Paschal liturgy since the earliest centuries.</span>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, flexWrap: "wrap" }}>
          {([
            { id: "overview" as Tab, label: "Overview", icon: "📖" },
            { id: "theology" as Tab, label: "Theology", icon: "✝️" },
            { id: "liturgy" as Tab, label: "Liturgy & Life", icon: "🕯️" },
            { id: "history" as Tab, label: "Voices", icon: "🎓" },
            { id: "dialogue" as Tab, label: "Common Ground", icon: "🤝" },
            { id: "videos" as Tab, label: "Videos", icon: "🎬" },
          ]).map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? GOLD : "transparent", color: tab === t.id ? BG : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", minWidth: 100 }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Eastern Orthodoxy is not a "version" of Christianity that diverged from a Western original — it claims to be the original apostolic church in its Eastern expression.
                For Western Christians (Protestant or Catholic), Orthodoxy represents a window into how the church developed in the Greek-speaking, Byzantine world —
                with its own profound theological vocabulary, liturgical richness, and contemplative depth that the Western church largely lost after the Great Schism.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {OVERVIEW_POINTS.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${p.color}25`, borderRadius: 12, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <span style={{ fontSize: 24 }}>{p.icon}</span>
                    <h3 style={{ color: p.color, fontWeight: 800, fontSize: 17, margin: 0 }}>{p.title}</h3>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>{p.body}</p>
                  <div style={{ background: `${p.color}08`, border: `1px solid ${p.color}20`, borderRadius: 8, padding: "8px 12px" }}>
                    <span style={{ color: p.color, fontSize: 12, fontStyle: "italic" }}>{p.verse}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Theology Tab */}
        {tab === "theology" && (
          <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 16 }}>
            <div>
              {THEOLOGY_ITEMS.map(t => (
                <button key={t.doctrine} onClick={() => setSelectedTheology(t.doctrine)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${selectedTheology === t.doctrine ? t.color : BORDER}`, background: selectedTheology === t.doctrine ? `${t.color}15` : "transparent", color: selectedTheology === t.doctrine ? t.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", marginBottom: 6, textAlign: "left" }}>
                  <div style={{ marginBottom: 2 }}>{t.doctrine}</div>
                  <div style={{ fontWeight: 400, fontSize: 10, fontStyle: "italic" }}>{t.greek}</div>
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${theologyItem.color}30`, borderRadius: 14, padding: 26 }}>
              <div style={{ marginBottom: 14 }}>
                <h2 style={{ color: theologyItem.color, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{theologyItem.doctrine}</h2>
                <div style={{ color: MUTED, fontSize: 13, fontStyle: "italic" }}>{theologyItem.greek}</div>
              </div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>{theologyItem.explanation}</p>
              <div style={{ background: `${theologyItem.color}08`, border: `1px solid ${theologyItem.color}20`, borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ color: theologyItem.color, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>KEY FIGURE</div>
                <div style={{ color: TEXT, fontSize: 13 }}>{theologyItem.key_figure}</div>
              </div>
            </div>
          </div>
        )}

        {/* Liturgy Tab */}
        {tab === "liturgy" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Orthodox worship is among the most beautiful, historically layered, and theologically dense liturgical traditions in all of Christianity.
                The liturgy has changed remarkably little since the 4th-7th centuries — attending an Orthodox service is entering into the ancient church.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {LITURGY_ELEMENTS.map(l => (
                <button key={l.name} onClick={() => setSelectedLiturgy(l.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedLiturgy === l.name ? l.color : BORDER}`, background: selectedLiturgy === l.name ? `${l.color}15` : "transparent", color: selectedLiturgy === l.name ? l.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {l.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${liturgyItem.color}30`, borderRadius: 14, padding: 26 }}>
              <h2 style={{ color: liturgyItem.color, fontWeight: 900, fontSize: 20, marginBottom: 14 }}>{liturgyItem.name}</h2>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 16 }}>{liturgyItem.desc}</p>
              <div style={{ background: `${liturgyItem.color}08`, border: `1px solid ${liturgyItem.color}20`, borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ color: liturgyItem.color, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>SIGNIFICANCE</div>
                <div style={{ color: TEXT, fontSize: 13 }}>{liturgyItem.significance}</div>
              </div>
            </div>
          </div>
        )}

        {/* Voices Tab */}
        {tab === "history" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 200, flexShrink: 0 }}>
              {HISTORIANS.map(h => (
                <button key={h.name} onClick={() => setSelectedHistorian(h.name)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${selectedHistorian === h.name ? h.color : BORDER}`, background: selectedHistorian === h.name ? `${h.color}12` : "transparent", color: selectedHistorian === h.name ? h.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", marginBottom: 6, textAlign: "left" }}>
                  <div>{h.name}</div>
                  <div style={{ fontWeight: 400, fontSize: 10, marginTop: 2 }}>{h.dates}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${historian.color}30`, borderRadius: 14, padding: 26 }}>
                <h2 style={{ color: historian.color, fontWeight: 900, fontSize: 20, marginBottom: 2 }}>{historian.name}</h2>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 4 }}>{historian.dates} · {historian.tradition}</div>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 16, fontStyle: "italic" }}>{historian.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${historian.color}`, paddingLeft: 16, margin: "0 0 18px 0" }}>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>"{historian.quote}"</p>
                </blockquote>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{historian.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {/* Common Ground Tab */}
        {tab === "dialogue" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>A Note on Ecumenism</h3>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                The Vine is committed to presenting all Christian traditions with accuracy and respect. This page does not exist to blur genuine theological differences —
                Orthodox and Protestant/Catholic theology differ significantly on important matters. It exists to help Christians from all traditions
                understand their brothers and sisters and identify the vast common ground that unites 2.4 billion followers of Jesus Christ.
                The goal is informed ecumenism: honest about difference, committed to unity in Christ.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {SHARED_GROUND.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${s.color}25`, borderRadius: 12, padding: 20 }}>
                  <h3 style={{ color: s.color, fontWeight: 800, fontSize: 15, marginBottom: 12 }}>{s.area}</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <div style={{ color: GOLD, fontSize: 11, fontWeight: 800, marginBottom: 6 }}>ORTHODOX PERSPECTIVE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{s.orthodox}</p>
                    </div>
                    <div>
                      <div style={{ color: GREEN, fontSize: 11, fontWeight: 800, marginBottom: 6 }}>PROTESTANT PERSPECTIVE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{s.protestant}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching & Documentary Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Explore Eastern Orthodox Christianity through these documentaries, lectures, and worship recordings.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  {
                    videoId: "RIpMsC5Lv3U",
                    title: "What Is Eastern Orthodox Christianity?",
                    channel: "Orthodoxy and Heterodoxy",
                    description: "A clear, sympathetic introduction to Eastern Orthodox Christianity for those unfamiliar with the tradition — covering theology, liturgy, history, and distinctive practices."
                  },
                  {
                    videoId: "Zh9hHJVHVco",
                    title: "The Orthodox Understanding of Salvation",
                    channel: "Ancient Faith Ministries",
                    description: "Father Andrew Stephen Damick explains how Orthodox Christianity understands salvation, theosis, and the human journey toward God — an accessible introduction to Orthodox soteriology."
                  },
                  {
                    videoId: "B-OWhGcb61s",
                    title: "Introduction to Eastern Orthodox Liturgy",
                    channel: "Ancient Faith Ministries",
                    description: "A guided tour through the Divine Liturgy of St. John Chrysostom — understanding what is happening in Orthodox worship and why it has remained largely unchanged for 1,600 years."
                  },
                  {
                    videoId: "Mf5RTLA_mAA",
                    title: "The Jesus Prayer — Orthodox Contemplative Practice",
                    channel: "Ancient Faith Radio / Ministries",
                    description: "An introduction to the practice of the Jesus Prayer ('Lord Jesus Christ, Son of God, have mercy on me, a sinner') — the central contemplative practice of Orthodox Christianity."
                  },
                  {
                    videoId: "zAOzAiLMpwY",
                    title: "Orthodox Christianity and Protestant Christianity — Similarities and Differences",
                    channel: "Unboxing Theology",
                    description: "A respectful, scholarly comparison of Orthodox and Protestant Christian theology — covering salvation, Scripture, tradition, sacraments, and ecclesiology from both perspectives."
                  }
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
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
      <Footer />
    </div>
  );
}
