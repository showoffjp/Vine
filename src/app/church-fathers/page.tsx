"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "fathers" | "theology" | "legacy";

const THEOLOGY_DEVELOPMENTS = [
  { title: "The Canon of Scripture", era: "2nd-4th centuries", body: "The church did not invent the canon in 381 — it recognized it. The 27 books of the NT were already functioning as authoritative in most churches before formal councils. Athanasius's Easter letter (367 AD) is the first to list all 27 books exactly as we have them. The criteria: apostolic origin, universal use, and doctrinal consistency with the rule of faith. The canon reflects what the church was already reading, not what bishops invented." },
  { title: "The Rule of Faith", era: "2nd century (Irenaeus)", body: "Irenaeus developed the 'rule of faith' (regula fidei) — a summary of the Christian narrative used to interpret Scripture. Not a creed in the formal sense but a framework: creation, fall, redemption through Christ, eschatological hope. This narrative structure prevented the Gnostic use of individual proof-texts divorced from the whole story. The Apostles' Creed grew from this tradition." },
  { title: "The Nicene Creed (325, 381)", era: "4th century", body: "The Council of Nicaea (325) affirmed that the Son is homoousios (same substance) as the Father, decisively rejecting Arianism. Constantinople (381) completed the Creed with the clause on the Holy Spirit as 'Lord and Giver of Life, who proceeds from the Father, who with the Father and the Son together is worshiped and glorified.' The Nicene Creed is the ecumenical consensus of Eastern and Western Christianity." },
  { title: "The Two Natures of Christ (Chalcedon, 451)", era: "5th century", body: "The Council of Chalcedon (451) defined that Christ is 'truly God and truly man, of one substance with the Father according to the Godhead, and of one substance with us according to humanity.' These two natures exist 'without confusion, without change, without division, without separation.' Chalcedonian Christology is accepted by Catholic, Orthodox, and Protestant Christianity, though rejected by some Oriental Orthodox churches." },
  { title: "Grace and Free Will (Augustine vs. Pelagius)", era: "Early 5th century", body: "Augustine's anti-Pelagian writings addressed whether human beings can initiate their own salvation (Pelagius: yes, through free will) or whether God's grace must act first (Augustine: yes, because the will is in bondage to sin). Augustine won the official debate at the Council of Carthage (418), though the practical implications continued to be debated for centuries and are still the central divide between Catholic-Orthodox and Reformed Protestant soteriology." },
];

const LEGACY_ITEMS = [
  { title: "The Creeds", icon: "📜", color: "#3B82F6", body: "The Apostles' Creed, Nicene Creed, and Chalcedonian Definition are the church fathers' most lasting gift. Every Sunday when a congregation recites 'I believe in God the Father Almighty, maker of heaven and earth...' they are speaking words forged in the fires of 4th-century controversy. These creeds are ecumenical consensus across Catholic, Orthodox, and Protestant Christianity — the minimum of Christian orthodoxy." },
  { title: "Scriptural Interpretation", icon: "📖", color: "#10B981", body: "The Patristic interpretive tradition — allegorical (Origen), typological (Irenaeus, Augustine), and historical-grammatical — provides resources for contemporary biblical interpretation. The church's best hermeneutics have always been responsive to the fathers. The Reformation, which could seem to break with tradition, was actually a return to Patristic exegesis: Calvin frequently cited Augustine, Chrysostom, and Jerome." },
  { title: "Christian Worship", icon: "🕯️", color: PURPLE, body: "The shape of Christian worship — gathering, Word, Table, sending — was developed by the church fathers and described in documents like the Didache (c. 100 AD), Justin Martyr's First Apology (c. 155 AD), and the Apostolic Tradition (c. 215 AD). The liturgical traditions of Catholic, Orthodox, Anglican, and Lutheran Christianity are direct inheritances. Even free-church evangelicalism follows a shape it doesn't always know came from the fathers." },
  { title: "Monasticism and Spiritual Disciplines", icon: "🏔️", color: "#F59E0B", body: "The desert fathers (Anthony, Pachomius, the Cappadocians) developed the spiritual disciplines that have shaped Christian formation for 1700 years: fasting, silence, lectio divina, regular prayer, confession, and community. Benedict's Rule (6th century) structured this inheritance into a sustainable form. The modern spiritual formation movement — Dallas Willard, Richard Foster, Henri Nouwen — is largely a rediscovery of Patristic practice." },
  { title: "Apologetics and Public Theology", icon: "🎓", color: "#EF4444", body: "Justin Martyr, Tertullian, Clement, and Origen developed the model of Christian intellectual engagement with secular philosophy and public life. Their approach — taking the best of the surrounding culture seriously, exposing its incoherence, and showing how Christianity answers what the culture asks — remains the template for Christian apologetics. Kuyper, Lewis, Schaeffer, and Keller are all, in different ways, practicing Justin's method." },
  { title: "The Church as Community", icon: "⛪", color: "#0EA5E9", body: "Ignatius of Antioch, Cyprian of Carthage, and Augustine developed a robust theology of the church as a visible, episcopal, sacramental community — not merely an invisible fellowship of those who believe correctly. This ecclesiology — its structures, its discipline, its sacramental life — is the ancestor of both Catholic-Orthodox ecclesiology and (via the Reformation's response) Protestant ecclesiology. The argument about the nature of the church never ended; it was forged in the Patristic era." },
];


const FATHERS = [
  {
    name: "Ignatius of Antioch",
    dates: "c. 35-108 AD",
    color: "#EF4444",
    region: "Syria",
    period: "Apostolic",
    desc: "Bishop of Antioch, student of the apostle John. Written while being transported to Rome for execution, his seven letters are among the earliest Christian writings outside the New Testament. He wrote with both pastoral tenderness and theological precision — defending the full humanity and divinity of Christ against early Docetism.",
    contribution: "First known use of the word 'Catholic' (meaning universal) for the church. Clear teaching on bishop-elder-deacon structure. First extensive description of the Eucharist as the body of Christ.",
    quote: "I am God's wheat, and I am to be ground by the teeth of wild beasts so that I may become the pure bread of Christ.",
    work: "Letters to the Ephesians, Magnesians, Trallians, Romans, Philadelphians, Smyrneans, and Polycarp",
  },
  {
    name: "Justin Martyr",
    dates: "c. 100-165 AD",
    color: "#F59E0B",
    region: "Palestine/Rome",
    period: "Apologist",
    desc: "A philosopher who converted to Christianity and devoted his intellect to its defense. He engaged directly with pagan philosophy, arguing that the best Greek thought anticipated Christ (the Logos) and that Christianity was the fulfillment of the best of human reasoning. Martyred in Rome under Marcus Aurelius.",
    contribution: "First great Christian apologist to pagans and Jews. Earliest detailed description of Sunday worship (1st Apology). Pioneered the use of Logos theology to connect Christianity to Greek philosophy.",
    quote: "Whatever things were rightly said among all men are the property of us Christians.",
    work: "First and Second Apology; Dialogue with Trypho the Jew",
  },
  {
    name: "Irenaeus of Lyon",
    dates: "c. 130-202 AD",
    color: "#10B981",
    region: "Gaul (France)",
    period: "Anti-Gnostic",
    desc: "Bishop of Lyon, student of Polycarp (who knew the apostle John). The most important theologian of the 2nd century, he wrote the definitive refutation of Gnosticism and articulated the concept of the 'rule of faith' — the central Christian narrative as the interpretive key for Scripture.",
    contribution: "Developed recapitulation theology: Christ undoes what Adam did by living human life faithfully from birth to death. Articulated apostolic succession as a criterion for orthodox teaching. First systematic theology of Scripture.",
    quote: "The glory of God is man fully alive, and the life of man is the vision of God.",
    work: "Against Heresies (Adversus Haereses); The Demonstration of Apostolic Preaching",
  },
  {
    name: "Tertullian",
    dates: "c. 155-220 AD",
    color: "#8B5CF6",
    region: "North Africa",
    period: "Latin West",
    desc: "The first great Latin theologian — brilliant, combative, and creative. He coined most of the Latin theological vocabulary we still use (Trinity, person, substance). Later in life he joined the Montanist movement (a rigorist charismatic sect), which complicates his legacy but doesn't diminish his massive influence.",
    contribution: "Coined the term 'Trinity' (Trinitas) and 'Person' (persona) for the doctrine. First developed the two-natures Christology. His rigorist ethics shaped Western Christianity's stricter moral tradition.",
    quote: "Credo quia absurdum est — I believe because it is absurd. [Often misquoted; he meant Christian truth transcends worldly reason, not that it is irrational.]",
    work: "Apology; On the Prescription of Heretics; Against Praxeas; On Prayer",
  },
  {
    name: "Athanasius of Alexandria",
    dates: "c. 296-373 AD",
    color: "#3B82F6",
    region: "Egypt",
    period: "Nicene",
    desc: "The great defender of Nicene orthodoxy against Arianism (the heresy that Christ was a created being, not fully God). He was exiled five times for refusing to compromise the full divinity of Christ. 'Athanasius contra mundum' — Athanasius against the world — describes his lonely courage when emperors and bishops backed Arianism.",
    contribution: "Primary defender of Christ's full divinity. The Athanasian logic: 'God became man so that man might become God' (theosis). First to list the 27 books of the New Testament in their current form (Easter Letter, 367 AD).",
    quote: "For the Son of God became man so that we might become God.",
    work: "On the Incarnation; Discourses Against the Arians; Life of Anthony",
  },
  {
    name: "Augustine of Hippo",
    dates: "354-430 AD",
    color: "#DC2626",
    region: "North Africa",
    period: "Latin West",
    desc: "The most influential theologian in Western Christianity. A brilliant rhetorician, he spent his youth seeking truth through Manichaeism and Neo-Platonism before converting to Christianity at 33 under the influence of Ambrose and his mother Monica. His Confessions remain a devotional masterpiece. His theology of grace, sin, and predestination shaped both Catholic and Protestant thought.",
    contribution: "Doctrine of original sin and total depravity. Augustine's view of grace was the foundation for both Catholic and Reformed theology. Just War theory. Philosophy of time and eternity. The two cities (City of God vs. City of Man).",
    quote: "You have made us for yourself, O Lord, and our heart is restless until it rests in you.",
    work: "Confessions; The City of God; On the Trinity; On Free Will",
  },
  {
    name: "John Chrysostom",
    dates: "c. 349-407 AD",
    color: "#0EA5E9",
    region: "Constantinople",
    period: "Eastern",
    desc: "Called 'Golden Mouth' (Chrysostom) for his extraordinary preaching. Archbishop of Constantinople, he used his platform to challenge the wealth and corruption of the imperial court and the clergy — which got him exiled. His thousands of sermons, especially his series on Matthew, Romans, and the Pauline letters, remain among the greatest in Christian history.",
    contribution: "Homiletical preaching tradition. Chrysostom's liturgy is still used in Eastern Orthodox worship today. Social justice preaching — his attacks on wealth inequality are remarkably sharp.",
    quote: "If you cannot find Christ in the beggar at the church door, you will not find him in the chalice.",
    work: "Homilies on Matthew; Homilies on Romans; On the Priesthood",
  },
  {
    name: "Anselm of Canterbury",
    dates: "1033-1109 AD",
    color: "#7C3AED",
    region: "England",
    period: "Medieval",
    desc: "Archbishop of Canterbury, theologian, and philosopher. Known for his ontological argument for God's existence and his satisfaction theory of atonement — still the dominant framework in much of Western Christianity. He pursued theology as 'faith seeking understanding' (fides quaerens intellectum).",
    contribution: "Satisfaction theory of atonement (Christ's death satisfies God's justice). Ontological argument for God's existence. 'Faith seeking understanding' as the proper relationship of faith and reason.",
    quote: "God is that than which nothing greater can be conceived.",
    work: "Proslogion; Cur Deus Homo (Why God Became Man); Monologion",
  },
];

const PERIODS = ["All", "Apostolic", "Apologist", "Anti-Gnostic", "Nicene", "Latin West", "Eastern", "Medieval"];

export default function ChurchFathersPage() {
  const [selected, setSelected] = useState<string | null>("Athanasius of Alexandria");
  const [period, setPeriod] = useState("All");
  const [activeTab, setActiveTab] = useState<Tab>("fathers");

  const filtered = period === "All" ? FATHERS : FATHERS.filter(f => f.period === period);
  const father = FATHERS.find(f => f.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📜</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Church Fathers</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The theologians of the first five centuries who defined orthodox Christianity, defended it against heresy, and bequeathed us a rich theological tradition. Knowing them helps you understand both where Christianity came from and where it stands.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "fathers" as const, label: "The Fathers", icon: "📜" },
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "legacy" as const, label: "Legacy", icon: "🏛️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                The church fathers did not invent Christian theology — they clarified and defended it under the pressure of heresy and controversy. These are the five most consequential theological developments of the Patristic era.
              </p>
            </div>
            {THEOLOGY_DEVELOPMENTS.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{t.era}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "legacy" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                The church fathers are not museum pieces. Their theology, their practices, and their forms of community are still operating in every Christian church — whether or not the congregation knows it. Here is where their legacy is most visible.
              </p>
            </div>
            {LEGACY_ITEMS.map((l, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${l.color}30`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 22 }}>{l.icon}</span>
                  <h3 style={{ color: l.color, fontWeight: 800, fontSize: 17, margin: 0 }}>{l.title}</h3>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{l.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "fathers" && <div>
        <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap", justifyContent: "center" }}>
          {PERIODS.map(p => (
            <button key={p} onClick={() => setPeriod(p)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${period === p ? PURPLE : BORDER}`, background: period === p ? `${PURPLE}20` : "transparent", color: period === p ? PURPLE : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {p}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          <div style={{ width: 200, flexShrink: 0 }}>
            {filtered.map(f => (
              <button key={f.name} onClick={() => setSelected(f.name)}
                style={{ width: "100%", background: selected === f.name ? `${f.color}15` : "transparent", border: `1px solid ${selected === f.name ? f.color + "60" : BORDER}`, borderRadius: 10, padding: "10px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                <div style={{ color: selected === f.name ? f.color : MUTED, fontSize: 10, fontWeight: 700, marginBottom: 2 }}>{f.period.toUpperCase()}</div>
                <div style={{ color: selected === f.name ? f.color : TEXT, fontWeight: 700, fontSize: 13, lineHeight: 1.3 }}>{f.name}</div>
                <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{f.dates}</div>
              </button>
            ))}
          </div>

          {father && (
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${father.color}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div>
                    <h2 style={{ color: father.color, fontWeight: 900, fontSize: 22, margin: 0, marginBottom: 4 }}>{father.name}</h2>
                    <div style={{ color: MUTED, fontSize: 13 }}>{father.dates} · {father.region}</div>
                  </div>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 10px", borderRadius: 10, fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{father.period}</span>
                </div>

                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{father.desc}</p>

                <div style={{ background: BG, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                  <div style={{ color: father.color, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.65, fontStyle: "italic", margin: 0 }}>"{father.quote}"</p>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY CONTRIBUTIONS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{father.contribution}</p>
                </div>

                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>MAJOR WORKS</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{father.work}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        </div>}
      </div>
    </div>
  );
}
