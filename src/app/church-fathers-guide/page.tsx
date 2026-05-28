"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

export default function ChurchFathersGuidePage() {
  const [era, setEra] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = FATHERS.filter(f => era === "All" || f.era === era);
  const father = FATHERS.find(f => f.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🏛️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Church Fathers</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The theologians who shaped Christian doctrine in the first six centuries — from Ignatius's martyrdom letters to Augustine's City of God. The cloud of witnesses who worked out what we now confess.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {ERAS.map(e => (
            <button key={e} onClick={() => setEra(e)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${era === e ? GREEN : BORDER}`, background: era === e ? `${GREEN}15` : "transparent", color: era === e ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {e}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: father ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((f, i) => (
              <button key={i} onClick={() => setSelected(selected === f.name ? null : f.name)}
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
                  <div style={{ color: MUTED, fontSize: 12 }}>{father.dates} · {father.role}</div>
                </div>
              </div>

              <div style={{ background: `${father.color}08`, border: `1px solid ${father.color}20`, borderRadius: 10, padding: 14, marginBottom: 14 }}>
                <div style={{ color: father.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY QUOTE</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>"{father.key_quote}"</p>
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
      </div>
    </div>
  );
}
