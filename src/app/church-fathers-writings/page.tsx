"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const ERA_FILTERS = ["All", "Apostolic Fathers", "Apologists", "Nicene Era", "Post-Nicene", "Medieval"];

const FATHERS = [
  {
    name: "Ignatius of Antioch",
    dates: "c. 35 – c. 108 AD",
    era: "Apostolic Fathers",
    color: GREEN,
    region: "Antioch, Syria",
    role: "Bishop of Antioch; martyr",
    key_works: ["Seven Letters (written while under arrest en route to Rome for execution)"],
    contribution: "One of the earliest post-apostolic witnesses to the full-orbed faith of the early church. His letters — written while chained to guards on his way to be eaten by lions in Rome — contain the earliest uses of the word 'catholic' (universal) for the church, insistence on the authority of bishops as successors to the apostles, and a burning theology of martyrdom. He explicitly states the real bodily resurrection of Christ and the real presence in the Eucharist.",
    famous_quote: "I am the wheat of God, and am ground by the teeth of the wild beasts, that I may be found the pure bread of God.",
    read_free: "ccel.org/ccel/schaff/anf01.html — Ante-Nicene Fathers Vol. 1",
    why_read: "To see what the church believed within living memory of the apostles — before any councils or creeds had been formally written.",
    initials: "IGN",
  },
  {
    name: "Justin Martyr",
    dates: "c. 100 – c. 165 AD",
    era: "Apologists",
    color: "#3B82F6",
    region: "Flavia Neapolis (modern Nablus, West Bank)",
    role: "Philosopher, apologist, martyr",
    key_works: ["First Apology", "Second Apology", "Dialogue with Trypho"],
    contribution: "The first great Christian intellectual to engage Greek philosophy head-on, arguing that Christianity is the fulfillment of all that philosophy sought. His First Apology (addressed to Emperor Antoninus Pius) is the earliest surviving description of Christian worship, including the Sunday gathering, the Eucharist, and baptism. His Dialogue with Trypho is the earliest extended Jewish-Christian theological debate.",
    famous_quote: "Whatever things were rightly said among all men, are the property of us Christians.",
    read_free: "ccel.org — Ante-Nicene Fathers; also newadvent.org/fathers",
    why_read: "For the first sophisticated engagement between Christianity and secular thought — and to see what Christian worship looked like in 150 AD.",
    initials: "JM",
  },
  {
    name: "Irenaeus of Lyon",
    dates: "c. 130 – c. 202 AD",
    era: "Apologists",
    color: PURPLE,
    region: "Smyrna (modern Turkey); later Lyon, Gaul (France)",
    role: "Bishop of Lyon; anti-Gnostic theologian",
    key_works: ["Against Heresies (5 volumes)", "Demonstration of the Apostolic Preaching"],
    contribution: "The most important theologian of the 2nd century. Irenaeus was a student of Polycarp, who was a student of the Apostle John — making him two steps from an apostle. Against Heresies is the definitive refutation of Gnosticism, arguing for the unity of Old and New Testaments, the importance of apostolic succession, and the recapitulation of all things in Christ (anakephalaiosis). His theology of the image of God and the restoration of humanity is profound.",
    famous_quote: "The glory of God is a living man; and the life of man consists in beholding God.",
    read_free: "ccel.org/ccel/schaff/anf01.html; also newadvent.org/fathers/0103.htm",
    why_read: "To understand what the early church actually believed against its heresies, and for Irenaeus's extraordinary theological vision of creation and redemption.",
    initials: "IRN",
  },
  {
    name: "Tertullian",
    dates: "c. 155 – c. 220 AD",
    era: "Apologists",
    color: "#EF4444",
    region: "Carthage, North Africa (modern Tunisia)",
    role: "Lawyer, theologian, apologist",
    key_works: ["Apologeticus", "On the Prescription of Heretics", "On the Trinity", "Against Marcion"],
    contribution: "The father of Latin Christian theology. Tertullian gave the Western church its theological vocabulary: Trinity (trinitas), Person (persona), Substance (substantia). He was a fierce polemicist who argued Christianity's case before Roman law (Apologeticus) and demolished heresy with lawyer's precision. He later joined the Montanist movement — evidence that brilliant theology and spiritual pride can coexist dangerously.",
    famous_quote: "The blood of the martyrs is the seed of the church. What is more unlike our ways than to practice so exquisite a cruelty?",
    read_free: "ccel.org; Ante-Nicene Fathers Vols. 3-4",
    why_read: "For the sharpest apologetic mind of the early church, and to understand the roots of Western Christian theological vocabulary.",
    initials: "TRT",
  },
  {
    name: "Origen of Alexandria",
    dates: "c. 184 – c. 253 AD",
    era: "Apologists",
    color: "#6366F1",
    region: "Alexandria, Egypt; later Caesarea",
    role: "Theologian, biblical scholar, preacher",
    key_works: ["De Principiis (On First Principles)", "Contra Celsum (Against Celsus)", "Hexapla (6-column OT comparison)", "Homilies on Genesis, Exodus, Leviticus"],
    contribution: "The most prolific Christian writer of antiquity — legend says he wrote 2,000 works, of which hundreds survive. Origen's allegorical biblical interpretation, his doctrine of preexistence of souls, and his speculation about universal salvation (apokatastasis) were later condemned at councils. But his commentaries, homilies, and Contra Celsum (the finest response to pagan anti-Christian polemic in antiquity) shaped all subsequent Christian thought.",
    famous_quote: "Scripture is written by the Spirit of God and has a meaning not only the obvious one, but also another meaning which escapes our notice.",
    read_free: "ccel.org; Ante-Nicene Fathers Vol. 4; also newadvent.org",
    why_read: "For the most sophisticated early Christian engagement with Greek philosophy and for the model of allegorical biblical interpretation.",
    initials: "ORG",
  },
  {
    name: "Athanasius of Alexandria",
    dates: "c. 296 – 373 AD",
    era: "Nicene Era",
    color: GREEN,
    region: "Alexandria, Egypt",
    role: "Bishop of Alexandria; defender of Nicene orthodoxy",
    key_works: ["On the Incarnation", "Life of Anthony", "Defence of the Nicene Definition"],
    contribution: "The man who saved orthodox Christianity at the Council of Nicaea (325 AD) and in the subsequent decades of Arian dominance — earning the title Athanasius contra mundum (Athanasius against the world). He was exiled five times by four emperors for refusing to accept the Arian doctrine that Christ was a created being. His On the Incarnation — written when he was in his twenties — remains one of the greatest theological works ever written.",
    famous_quote: "You could not have the endurance of God unless God had first endured everything for you.",
    read_free: "ccel.org/ccel/athanasius/incarnation.html; C.S. Lewis wrote the introduction to a popular edition",
    why_read: "Essential for understanding the doctrine of the Incarnation, and for understanding why Nicene orthodoxy was worth dying and being exiled for.",
    initials: "ATH",
  },
  {
    name: "Augustine of Hippo",
    dates: "354 – 430 AD",
    era: "Post-Nicene",
    color: "#F59E0B",
    region: "Thagaste and Hippo, North Africa (modern Algeria)",
    role: "Bishop of Hippo; theologian, philosopher, preacher",
    key_works: ["Confessions", "City of God", "On the Trinity", "On Christian Doctrine", "Enchiridion"],
    contribution: "The single most influential theologian in the history of Western Christianity, bar none. His Confessions is the first autobiography in Western literature and the most profound account of conversion and grace ever written. City of God established the theological framework of Western political thought for a thousand years. His doctrines of grace, original sin, predestination, and the Trinity shaped both Catholic and (through the Reformers) Protestant theology.",
    famous_quote: "You have made us for yourself, O Lord, and our hearts are restless until they rest in you.",
    read_free: "ccel.org — Confessions free; Nicene and Post-Nicene Fathers Series 1, Vols. 1-8",
    why_read: "Confessions alone justifies reading Augustine. No other book in history has described the interior experience of conversion with such devastating honesty and theological depth.",
    initials: "AUG",
  },
  {
    name: "John Chrysostom",
    dates: "c. 349 – 407 AD",
    era: "Post-Nicene",
    color: PURPLE,
    region: "Antioch, Syria; Constantinople",
    role: "Archbishop of Constantinople; preacher",
    key_works: ["Homilies on Matthew", "Homilies on Romans", "Homilies on 1 Corinthians", "On the Priesthood"],
    contribution: "Chrysostomos means golden-mouthed in Greek — a title given posthumously for his extraordinary preaching. As Archbishop of Constantinople he offended the imperial court by giving away his salary to hospitals for the poor and denouncing the wealth of the aristocracy. He preached through entire books of the Bible verse by verse — his commentary homilies on Matthew, John, and Paul's letters remain among the finest expository preaching in history.",
    famous_quote: "The desire to rule is the mother of heresies. Not wealth, not poverty — but the desire to dominate. This is why the Devil fell.",
    read_free: "ccel.org; Nicene and Post-Nicene Fathers Series 1, Vols. 9-14",
    why_read: "For the greatest expository preacher of antiquity — his verse-by-verse homilies on Scripture are richer than most modern commentaries.",
    initials: "JCH",
  },
  {
    name: "Thomas Aquinas",
    dates: "1225 – 1274",
    era: "Medieval",
    color: "#10B981",
    region: "Aquino, Kingdom of Sicily (modern Italy)",
    role: "Dominican friar; theologian; philosopher",
    key_works: ["Summa Theologica", "Summa Contra Gentiles", "Commentary on the Sentences of Peter Lombard"],
    contribution: "The greatest systematic theologian of the medieval church. Aquinas synthesized Aristotelian philosophy with Christian theology, producing the most comprehensive intellectual system of the Middle Ages. His Five Ways (proofs for God's existence) remain the starting point for every discussion of natural theology. The Summa Theologica is structured as a series of objections, responses, and replies — a model of rigorous, charitable intellectual engagement.",
    famous_quote: "To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.",
    read_free: "newadvent.org/summa — full text free; also CCEL",
    why_read: "For the most rigorous integration of faith and reason in Christian history. Even if you disagree with Aquinas, you cannot think seriously about theology without engaging him.",
    initials: "AQN",
  },
  {
    name: "Anselm of Canterbury",
    dates: "1033 – 1109",
    era: "Medieval",
    color: "#EF4444",
    region: "Aosta, Italy; later Canterbury, England",
    role: "Archbishop of Canterbury; theologian",
    key_works: ["Proslogion (Ontological Argument)", "Cur Deus Homo (Why God Became Man)", "Monologion"],
    contribution: "Often called the father of Scholasticism. Anselm defined the theological task as fides quaerens intellectum — faith seeking understanding. His Proslogion contains the famous Ontological Argument for God's existence (God is that than which nothing greater can be conceived). Cur Deus Homo is the most influential treatment of the Atonement in the medieval church, establishing the satisfaction theory that the Reformers built on.",
    famous_quote: "Lord, I do not try to attain to your heights, because my understanding is in no way equal to this. But I do desire to understand your truth a little, that truth that my heart believes and loves.",
    read_free: "ccel.org; Proslogion and Cur Deus Homo both available free online",
    why_read: "For the ontological argument and for the deepest treatment of why the Incarnation was necessary — why God became man.",
    initials: "ANS",
  },
];

const CFW_THEMES = [
  {
    id: 1,
    theme: "The Trinity",
    icon: "△",
    description: "The defining theological controversy of the 4th century. Athanasius argued against Arius that the Son is homoousios — of the same substance as the Father, not a created being. The Council of Nicaea (325 AD) and Constantinople (381 AD) settled the question for orthodox Christianity. The Fathers developed the vocabulary — one ousia, three hypostases — that all subsequent theology depends on.",
    key_texts: ["Athanasius, On the Incarnation", "Basil of Caesarea, On the Holy Spirit", "Gregory of Nazianzus, Theological Orations", "Augustine, On the Trinity"],
  },
  {
    id: 2,
    theme: "Christology: Two Natures",
    icon: "✦",
    description: "How can Christ be fully God and fully human? The Council of Chalcedon (451 AD) defined the answer: one Person, two natures (divine and human), without confusion, change, division, or separation. The Fathers who shaped this answer — Cyril of Alexandria, Leo the Great, and the Cappadocians — were working out the logic of incarnation against Nestorian and Eutychian errors.",
    key_texts: ["Cyril of Alexandria, On the Unity of Christ", "Leo the Great, Tome of Leo", "John of Damascus, Exposition of the Orthodox Faith", "Athanasius, Against the Arians"],
  },
  {
    id: 3,
    theme: "Grace & Free Will",
    icon: "⊕",
    description: "Augustine's debate with Pelagius defined Western Christianity's understanding of human nature, sin, and salvation. Pelagius argued that humans have the natural capacity to choose good. Augustine responded that the Fall corrupted the will so thoroughly that only divine grace can move it toward God — a position later developed by Luther, Calvin, and Jansenism. The Councils of Carthage and Orange affirmed Augustine.",
    key_texts: ["Augustine, On Grace and Free Will", "Augustine, Anti-Pelagian Writings", "John Cassian, Conferences (semi-Pelagian counterpoint)", "Council of Orange (529 AD) canons"],
  },
  {
    id: 4,
    theme: "Church & Sacraments",
    icon: "◎",
    description: "The Fathers developed a robust theology of the church as the Body of Christ — visible, structured, sacramental. Ignatius of Antioch insisted on episcopal authority; Cyprian of Carthage argued there is no salvation outside the church; Ambrose and Augustine developed sacramental theology. The Eucharist, baptism, and ordination were not mere symbols but means of grace.",
    key_texts: ["Ignatius of Antioch, Letters", "Cyprian, On the Unity of the Church", "Augustine, On Baptism", "Ambrose, On the Mysteries"],
  },
  {
    id: 5,
    theme: "Scripture & Tradition",
    icon: "⊞",
    description: "How does Scripture relate to the church's living tradition? Jerome produced the Latin Vulgate Bible and argued for a precise Hebrew canon. Basil of Caesarea distinguished written and unwritten tradition. Vincent of Lerins defined orthodoxy as what has been believed everywhere, always, and by all. The Fathers assumed Scripture and tradition were mutually interpreting, not competing authorities.",
    key_texts: ["Jerome, Prefaces to the Vulgate", "Basil of Caesarea, On the Holy Spirit", "Vincent of Lerins, Commonitory", "Irenaeus, Against Heresies (Book III)"],
  },
];

const CFW_HOWTO = [
  {
    id: 1,
    step: 1,
    title: "Start with a readable translation",
    description: "The Ante-Nicene and Nicene Fathers series (38 volumes, translated in the 19th century) is freely available at ccel.org and newadvent.org. The translations are solid but occasionally archaic. For a modern entry point, try Crestwood Press (St. Vladimir's Seminary) editions or the Ancient Christian Writers series — these use contemporary English while preserving theological precision.",
    tip: "Start with Athanasius, On the Incarnation — C.S. Lewis wrote the introduction to a popular edition and personally recommends reading old books directly.",
  },
  {
    id: 2,
    step: 2,
    title: "Read with historical context",
    description: "Every patristic text is a response to a specific situation — a heresy, a persecution, a pastoral crisis, an imperial edict. Without knowing what Arius actually taught, Athanasius is hard to understand. Without knowing who Pelagius was, Augustine seems to be arguing with himself. A basic church history (e.g., Justo Gonzalez's Story of Christianity) will dramatically increase your comprehension.",
    tip: "Keep a timeline beside you. Knowing that Nicaea (325) preceded Chalcedon (451) by 126 years helps you see theological development rather than a static 'early church.'",
  },
  {
    id: 3,
    step: 3,
    title: "Identify what problem they were solving",
    description: "The Fathers were not writing systematic theologies for textbooks — they were solving real, urgent problems. Irenaeus was dealing with Gnosticism threatening to separate Christianity from the Old Testament. Tertullian was defending Christians accused of cannibalism before Roman courts. Chrysostom was preaching to congregations where the rich ignored the poor. Ask: what is this Father afraid of? What is he trying to save?",
    tip: "The polemical context sharpens their arguments. Knowing the opponent makes the champion more intelligible.",
  },
  {
    id: 4,
    step: 4,
    title: "Hold tradition and Scripture in proper order",
    description: "The Fathers regarded themselves as servants of Scripture — their task was to expound what Scripture taught, not to add to it. This does not mean tradition is irrelevant: they also believed the church's received faith provided the context within which Scripture is rightly read. Read the Fathers as the church's exegetes, not as independent authorities alongside Scripture.",
    tip: "When a Father's interpretation surprises you, ask whether you are reading Scripture more carefully than he did — or less carefully.",
  },
  {
    id: 5,
    step: 5,
    title: "Find a modern guide or commentary",
    description: "You do not have to read the Fathers alone. Ancient Christian Commentary on Scripture (IVP) organizes patristic quotations by biblical passage — an ideal entry for readers already in the Bible. Thomas Oden's Classic Christianity synthesizes patristic consensus systematically. Peter Leithart and Robert Louis Wilken have written accessible modern introductions to several Fathers.",
    tip: "The best guide for Protestants may be Thomas Oden, who spent his career arguing that evangelical Christianity is continuous with patristic orthodoxy.",
  },
];

const CFW_ERAS = [
  {
    id: 1,
    era: "Apostolic Fathers",
    period: "AD 70 – 150",
    description: "The generation immediately after the apostles — men who knew the apostles personally or were taught by those who did. Their writings are not Scripture but are the oldest witnesses to how the apostolic message was received, transmitted, and lived. Clement of Rome, Ignatius of Antioch, Polycarp of Smyrna, and the anonymous authors of the Didache and Epistle of Barnabas make up this group.",
    key_figures: ["Clement of Rome", "Ignatius of Antioch", "Polycarp of Smyrna", "Papias of Hierapolis"],
    key_contribution: "Preserved the apostolic deposit in the immediate post-apostolic generation; established episcopal church structure; first martyrologies.",
  },
  {
    id: 2,
    era: "Apologists",
    period: "AD 150 – 220",
    description: "Christian writers who defended the faith before pagan emperors and educated Greeks and Romans. They argued that Christianity was not a dangerous superstition but the fulfillment of Greek philosophy and Jewish prophecy. Justin Martyr, Irenaeus, Tertullian, Athenagoras, and Clement of Alexandria are the major figures. Irenaeus's Against Heresies also belongs here as the first great anti-heresy work.",
    key_figures: ["Justin Martyr", "Irenaeus of Lyon", "Tertullian", "Clement of Alexandria", "Athenagoras"],
    key_contribution: "Engaged Greek philosophy and Roman law; established the canon of Scripture; refuted Gnosticism; created Latin theological vocabulary.",
  },
  {
    id: 3,
    era: "Ante-Nicene Fathers",
    period: "AD 200 – 325",
    description: "The period between the Apologists and the Council of Nicaea, characterized by increasingly sophisticated biblical scholarship and theological reflection. Origen of Alexandria produced the most voluminous and philosophically ambitious body of work; Cyprian of Carthage developed ecclesiology; Novatian wrote on the Trinity. This era also saw the first great persecutions under Decius and Diocletian.",
    key_figures: ["Origen of Alexandria", "Cyprian of Carthage", "Hippolytus of Rome", "Novatian"],
    key_contribution: "Systematic biblical commentary tradition; development of ecclesiology and penitential discipline; martyrological literature.",
  },
  {
    id: 4,
    era: "Nicene & Post-Nicene Fathers",
    period: "AD 325 – 600",
    description: "The golden age of patristic theology. The great ecumenical councils — Nicaea (325), Constantinople (381), Ephesus (431), Chalcedon (451) — defined Trinitarian and Christological orthodoxy. The Cappadocian Fathers (Basil, Gregory of Nazianzus, Gregory of Nyssa), Athanasius, Ambrose, Jerome, Augustine, Chrysostom, and Cyril of Alexandria produced the defining works of Christian theology.",
    key_figures: ["Athanasius", "Basil the Great", "Gregory of Nazianzus", "Augustine of Hippo", "John Chrysostom", "Jerome", "Cyril of Alexandria"],
    key_contribution: "Trinitarian and Christological creeds; the Latin Vulgate Bible; foundational theology of grace, church, and sacraments.",
  },
  {
    id: 5,
    era: "Western Medieval",
    period: "AD 600 – 1200",
    description: "As the Western Roman Empire collapsed and the church became the custodian of learning and culture, a new theological synthesis emerged. Gregory the Great organized the medieval papacy and wrote extensively on pastoral theology. The Venerable Bede preserved learning in England. John of Damascus systematized Eastern theology. Anselm of Canterbury launched Scholasticism with his ontological argument and satisfaction theory of atonement.",
    key_figures: ["Gregory the Great", "Venerable Bede", "John of Damascus", "Anselm of Canterbury", "Bernard of Clairvaux"],
    key_contribution: "Pastoral theology and church administration; preservation of classical learning; Scholastic method; monastic theology.",
  },
];

type Tab = "writings" | "themes" | "howto" | "eras" | "videos";

export default function ChurchFathersWritingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("writings");
  const [era, setEra] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = FATHERS.filter(f => era === "All" || f.era === era);
  const father = FATHERS.find(f => f.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📜</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Church Fathers: Their Writings</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            The men who shaped Christian theology from 100 to 1274 AD &mdash; their lives, their key works, their greatest quotes, and where to read them free today. The faith was not invented at the Reformation.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6, marginBottom: 32, width: "fit-content" }}>
          {(["writings", "themes", "howto", "eras", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)}
              style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "writings" ? "Writings" : t === "themes" ? "Themes" : t === "howto" ? "How To Read" : t === "eras" ? "Eras" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {activeTab === "writings" && (
          <>
            <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: "12px 18px", marginBottom: 28 }}>
              <span style={{ color: GREEN, fontWeight: 700, fontSize: 12 }}>Where to read them free: </span>
              <span style={{ color: MUTED, fontSize: 13 }}>
                The Christian Classics Ethereal Library (ccel.org) and New Advent (newadvent.org/fathers) have the complete Ante-Nicene, Nicene, and Post-Nicene Fathers series &mdash; 38 volumes &mdash; available free online. This is the greatest treasure trove of primary source Christian theology in existence.
              </span>
            </div>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {ERA_FILTERS.map(e => (
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
                    style={{ background: selected === f.name ? `${f.color}12` : CARD, border: `1px solid ${selected === f.name ? f.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${f.color}20`, border: `1px solid ${f.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: f.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                        {f.initials}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{f.name}</span>
                          <span style={{ background: `${f.color}15`, color: f.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{f.era}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 3 }}>{f.dates} &middot; {f.region}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {father && (
                <div style={{ background: CARD, border: `1px solid ${father.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <h2 style={{ color: father.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{father.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{father.dates} &middot; {father.role}</div>

                  <div style={{ marginBottom: 14 }}>
                    {father.key_works.map((w, i) => (
                      <div key={i} style={{ color: MUTED, fontSize: 12, marginBottom: 2 }}>&middot; {w}</div>
                    ))}
                  </div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{father.contribution}</p>

                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>FAMOUS QUOTE</div>
                    <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.65 }}>{father.famous_quote}</p>
                  </div>

                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 10, marginBottom: 10 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY READ THIS FATHER</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{father.why_read}</p>
                  </div>

                  <div style={{ background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10 }}>
                    <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>READ FREE AT</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{father.read_free}</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {activeTab === "themes" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CFW_THEMES.map(th => (
              <div key={th.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 900, fontSize: 20, flexShrink: 0 }}>
                    {th.icon}
                  </div>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 18, margin: 0 }}>{th.theme}</h2>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{th.description}</p>
                <div>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>KEY TEXTS</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {th.key_texts.map((kt, i) => (
                      <span key={i} style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}20`, color: TEXT, padding: "4px 12px", borderRadius: 20, fontSize: 12 }}>{kt}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "howto" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CFW_HOWTO.map(h => (
              <div key={h.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, display: "flex", gap: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 18, flexShrink: 0 }}>
                  {h.step}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 17, margin: "0 0 10px" }}>{h.title}</h3>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "0 0 14px" }}>{h.description}</p>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}25`, borderRadius: 8, padding: "10px 14px" }}>
                    <span style={{ color: GREEN, fontWeight: 700, fontSize: 11 }}>TIP: </span>
                    <span style={{ color: TEXT, fontSize: 13 }}>{h.tip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "eras" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {CFW_ERAS.map((er, i) => (
              <div key={er.id} style={{ display: "flex", gap: 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 20 }}>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", background: PURPLE, border: `3px solid ${PURPLE}`, flexShrink: 0, marginTop: 28 }} />
                  {i < CFW_ERAS.length - 1 && <div style={{ width: 2, flex: 1, background: `${PURPLE}30`, minHeight: 32 }} />}
                </div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 16, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
                    <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 17, margin: 0 }}>{er.era}</h2>
                    <span style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>{er.period}</span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{er.description}</p>
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>KEY FIGURES</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {er.key_figures.map((kf, j) => (
                        <span key={j} style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}20`, color: TEXT, padding: "3px 10px", borderRadius: 16, fontSize: 12 }}>{kf}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: "10px 14px" }}>
                    <span style={{ color: PURPLE, fontWeight: 700, fontSize: 11 }}>KEY CONTRIBUTION: </span>
                    <span style={{ color: TEXT, fontSize: 13 }}>{er.key_contribution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on the Church Fathers, early church history, and their enduring theological contributions.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "Dp3LnNXACZ8", title: "Life in the Early Church (Acts 2:40–47)", channel: "Ligonier Ministries / R.C. Sproul", description: "R.C. Sproul examines the life of the apostolic church as they participated in doctrine, fellowship, the Lord's Supper, and prayer — connecting to the church fathers." },
                  { videoId: "-I2VcMxXH0w", title: "Early Church Fathers & R.C. Sproul on the Birth of Jesus", channel: "Ligonier Ministries", description: "Excerpts from early church fathers on Jesus's birth, read alongside commentary from R.C. Sproul on their theological significance." },
                  { videoId: "-QofkM5vXT8", title: "Apostles and Deacons (Acts 6:1–7)", channel: "Ligonier Ministries / R.C. Sproul", description: "R.C. Sproul on the early church's structure — the foundation for the ecclesiology developed by Ignatius, Cyprian, and the Fathers." },
                  { videoId: "AtYCVDlV9kE", title: "Early Church Heresies: Modalistic Monarchianism", channel: "Ligonier Ministries / R.C. Sproul", description: "R.C. Sproul on the early heresies that forced the church fathers to articulate the doctrine of the Trinity with precision." },
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
    </div>
  );
}
