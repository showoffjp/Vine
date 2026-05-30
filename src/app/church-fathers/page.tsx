"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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
      </div>
    </div>
  );
}
