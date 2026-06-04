"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const HERESIES = [
  {
    name: "Arianism",
    era: "4th century",
    founder: "Arius of Alexandria (c. 256-336)",
    color: "#EF4444",
    doctrine: "Arianism teaches that the Son of God is the first and greatest of God's creations — a divine being, but not eternal, not fully God. The slogan: 'There was a time when he was not.' The Son had a beginning; he is a god, but not the God. The Holy Spirit is even further down the hierarchy. This was the most significant theological crisis in the ancient church's history.",
    council: "Council of Nicaea (325 AD)",
    response: "The Council of Nicaea (325 AD) responded by formulating the Nicene Creed, which declares the Son to be 'of the same substance' (homoousios) as the Father — not similar substance, not a lesser divinity, but identical in nature. Athanasius led the orthodox response with the dictum: 'Whatever is true of the Father is true of the Son' — except being the Father. Arianism was condemned as heresy. Despite this, it survived for centuries in various forms.",
    why_matters: "If Christ is not fully God, he cannot save us from God's judgment — only a fully divine Savior can achieve full reconciliation between God and humanity. The incarnation requires that the person who becomes human is genuinely divine.",
    modern_echoes: "Jehovah's Witnesses hold an essentially Arian Christology. Some forms of Unitarianism. The 'Cosmic Christ' theology of some liberal Protestants.",
    verse: "John 1:1; John 10:30; Colossians 2:9",
    initials: "ARI",
  },
  {
    name: "Docetism",
    era: "1st-2nd century",
    founder: "Various Gnostic teachers",
    color: PURPLE,
    doctrine: "From the Greek dokein (to seem or appear), Docetism teaches that Christ only seemed to have a physical body — he was a purely spiritual being who appeared human but did not actually become flesh, suffer, or die. Matter is evil or inferior in the Gnostic worldview, so God could not truly become material. The crucifixion was an illusion; Christ either switched places with Simon of Cyrene or simply appeared to suffer.",
    council: "Addressed in the early Apostolic Fathers, opposed by Ignatius of Antioch",
    response: "Ignatius of Antioch (c. 107 AD) was the most vigorous early opponent: 'He was truly born, truly suffered, truly was crucified.' John's Prologue ('the Word became flesh and dwelt among us') and John's First Letter ('every spirit that does not acknowledge Jesus as having come in the flesh is not from God' — 1 John 4:2) are direct responses to Docetic tendencies. The Apostles' Creed's insistence on 'born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried' is a point-by-point anti-Docetic statement.",
    why_matters: "If Christ did not truly become human, he did not truly die, and therefore the resurrection is meaningless. Hebrews 2:17 insists that Christ had to be made like his brothers and sisters in every way to make atonement. Docetism also destroys the sympathy dimension of Christology (Hebrews 4:15).",
    modern_echoes: "New Age spirituality tends toward a Docetic Christ. Some popular Jesus-as-spiritual-guide views implicitly deny his physical humanity.",
    verse: "John 1:14; 1 John 4:2; Hebrews 2:17",
    initials: "DOC",
  },
  {
    name: "Pelagianism",
    era: "5th century",
    founder: "Pelagius (c. 360-420)",
    color: "#F59E0B",
    doctrine: "The British monk Pelagius taught that humans are born morally neutral — with the same freedom Adam had before the fall — and that salvation is achieved by human free choice and moral effort, assisted but not necessitated by divine grace. Adam's sin affected only Adam; it is not inherited by his descendants. God's grace primarily consists of external teaching and example (especially Christ's example), not internal transformation.",
    council: "Council of Carthage (418 AD); Council of Ephesus (431 AD)",
    response: "Augustine led the response with his mature doctrine of original sin, total depravity, and irresistible grace. He argued from Romans 5 (sin entered through Adam, spreading to all) and from John 6 (no one can come to me unless the Father draws him). Grace is not merely external assistance but internal transformation — the regeneration of a will that cannot help itself. Both Carthage (418) and Ephesus (431) condemned Pelagianism. Semi-Pelagianism (humans initiate, grace completes) was condemned at the Council of Orange (529 AD).",
    why_matters: "If humans can merit salvation through effort, then Christ's atonement is not strictly necessary — it merely makes salvation easier. Grace becomes optional rather than essential. The pastoral consequence is spiritual pride (I earned this) and despair (I can never be good enough).",
    modern_echoes: "Most American folk religion is effectively Pelagian: 'God helps those who help themselves.' Moralism in many evangelical churches. The prosperity gospel's works-based framework.",
    verse: "Romans 5:12; Ephesians 2:8-9; John 6:44",
    initials: "PEL",
  },
  {
    name: "Nestorianism",
    era: "5th century",
    founder: "Nestorius, Patriarch of Constantinople (c. 386-450)",
    color: "#3B82F6",
    doctrine: "Nestorius (or his followers) taught that Christ has two complete, separate persons — a divine person and a human person — joined by a moral or voluntary union rather than a genuine personal union. The practical consequence: Mary should not be called Theotokos (God-bearer/Mother of God) but only Christotokos (Christ-bearer). The two natures are so distinct that they sometimes seem to be two subjects.",
    council: "Council of Ephesus (431 AD); Council of Chalcedon (451 AD)",
    response: "Cyril of Alexandria led the orthodox response, insisting on the communicatio idiomatum — the communication of attributes. Because Christ is one person, what is true of either nature can be attributed to the one person. Mary is therefore properly called Theotokos — not because she is the mother of the divine nature in abstraction, but because she bore the one person who is both divine and human. Chalcedon (451) defined the orthodox position: one person, two natures, without confusion, change, division, or separation.",
    why_matters: "If Christ is two persons, it is unclear who died on the cross — the human or the divine? If the divine person did not truly suffer and die, the atonement loses its infinite weight. The union of natures in one person is what gives Christ's sacrifice its saving power.",
    modern_echoes: "Some popular Christology implicitly divides Jesus's divine and human aspects in ways that approach Nestorianism.",
    verse: "Luke 1:43; John 1:14; Galatians 4:4",
    initials: "NES",
  },
  {
    name: "Modalism (Sabellianism)",
    era: "3rd century",
    founder: "Sabellius (early 3rd century)",
    color: GREEN,
    doctrine: "Modalism (also called Sabellianism or Patripassianism) teaches that there is one God who reveals himself in three successive modes or masks: as Father in the Old Testament, as Son in the incarnation, and as Holy Spirit at Pentecost. There are not three distinct eternal persons — just one God appearing in three different ways at different times. The practical appeal: it seems to protect monotheism while honoring Father, Son, and Spirit.",
    council: "Condemned by various synods in the 3rd century; opposed by Tertullian and Origen",
    response: "Tertullian formulated the classical Western Trinitarian formula — one substance (substantia), three persons (personae) — specifically against Modalism. The Father and the Son are not merely different modes of the same entity but genuinely distinct: the Father sends, the Son is sent; the Father speaks from heaven at Jesus's baptism while the Son stands in the water. John 17 alone (with its sustained address of the Son to the Father) makes Modalism impossible. There is genuine intratrinitarian relationship, not successive masks.",
    why_matters: "Modalism destroys both the Trinity and the atonement. If the Father is the Son, then God the Father died on the cross (Patripassianism — the Father suffered). If there is no genuine Son who is eternally distinct from the Father, there is no genuine incarnation — God merely wore a human mask.",
    modern_echoes: "United Pentecostal Church (Oneness Pentecostalism). The 'Jesus Only' movement. Some popular preaching that treats the three persons as three different hats God wears.",
    verse: "John 17:1-5; Matthew 3:16-17; John 1:1",
    initials: "MOD",
  },
  {
    name: "Marcionism",
    era: "2nd century",
    founder: "Marcion of Sinope (c. 85-160)",
    color: "#10B981",
    doctrine: "Marcion of Sinope taught that the God of the Old Testament is an inferior, harsh deity (the Demiurge) distinct from the loving Father revealed by Jesus. The two gods are antithetical: the OT God is just and wrathful; the NT God is gracious and loving. Marcion rejected the entire Old Testament and most of the New Testament, accepting only a modified version of Luke and ten Pauline letters (minus the Pastoral Epistles). He was the first to attempt a Christian canon — and one of the forces that accelerated the orthodox canon's formation.",
    council: "Excommunicated by the Roman church (c. 144 AD); condemned by Irenaeus, Tertullian, and Origen",
    response: "Irenaeus of Lyons (Against Heresies) made the most thorough response: the God of the OT and the Father of Jesus Christ are one and the same God. The divine attributes of justice and love are not contradictory but complementary — they come to their resolution in the atonement, where God's justice is satisfied and his love is demonstrated simultaneously (Romans 3:25-26). The OT is not superseded by the NT but fulfilled in Christ (Matthew 5:17).",
    why_matters: "A God who changes between testaments or who has two conflicting aspects cannot be trusted. Marcionism also destroys the unity of Scripture, the coherence of the atonement, and the theological meaning of the OT — which the NT authors regarded as their authoritative foundation.",
    modern_echoes: "The instinct to reject the 'violent OT God' is common in contemporary culture. Marcionite impulses appear in liberal Protestantism's selective use of Scripture. The 'I follow the red letters only' approach tends toward Marcionite assumptions.",
    verse: "Matthew 5:17; Romans 3:25-26; Luke 24:27",
    initials: "MAR",
  },
  {
    name: "Gnosticism",
    era: "2nd century",
    founder: "Valentinus, Basilides, others",
    color: "#EC4899",
    doctrine: "Gnosticism was a family of movements (not a single unified system) that taught: (1) the material world is evil or inferior, created by an ignorant or malevolent lesser deity (Demiurge); (2) humans contain a divine spark trapped in matter; (3) salvation is achieved through secret gnosis (knowledge) that allows the divine spark to escape the material prison; (4) Christ came to bring this saving knowledge, not to die as an atoning sacrifice. Gnosticism produced elaborate cosmological mythologies with multiple levels of divine being (aeons, pleroma).",
    council: "Opposed by Irenaeus (Against Heresies), Tertullian, and Origen",
    response: "Irenaeus's Against Heresies is the most thorough ancient response. Key arguments: (1) The creator God and the redeemer God are one — Genesis and John 1 begin with the same 'in the beginning.' (2) Creation is declared very good (Genesis 1:31) — matter is not evil. (3) Salvation is not escape from the body but resurrection of the body. (4) The church's rule of faith (Scripture + apostolic tradition) is the criterion of truth, not secret knowledge.",
    why_matters: "Gnosticism destroys the goodness of creation, the reality of the incarnation, and the bodily nature of salvation. If matter is evil, Jesus could not have a real body; if salvation is escape from matter, bodily resurrection is not salvation. The Gnostic gospel is ultimately a counsel of escape, not transformation.",
    modern_echoes: "New Age spirituality. The prosperity gospel's implicit spirit-body dualism. The idea that 'true Christianity' is a private inner experience, not a bodily and communal reality.",
    verse: "Genesis 1:31; John 1:1-3; 1 Corinthians 15:20-22",
    initials: "GNO",
  },
  {
    name: "Socinianism / Unitarianism",
    era: "16th century",
    founder: "Fausto Sozzini (Socinus) (1539-1604)",
    color: "#A855F7",
    doctrine: "Socinianism, developed by Fausto Sozzini in Poland, denied the Trinity, the preexistence of Christ, and penal substitutionary atonement. Christ is a uniquely gifted moral teacher who became divine through his resurrection and is now worthy of worship as lord — but he is not the eternal second person of the Trinity. The atonement is primarily an example of love and obedience, not a satisfaction of divine justice. This was a rationalist revision of Christianity that retained Jesus while rejecting classical Trinitarian and soteriological claims.",
    council: "Condemned by various Reformed synods; Racovian Catechism (1605) stated Socinian position",
    response: "John Owen wrote the definitive Reformed response in Vindiciae Evangelicae (1655). The Socinian view of atonement (moral influence or governmental theories) was shown to contradict the penal and substitutionary language of Scripture (Isaiah 53, Romans 3:25, 2 Corinthians 5:21, Hebrews 9:22). The Trinitarian and Christological Socinian rejections were answered by the same arguments that refuted Arianism: the eternal sonship, divine preexistence, and deity of Christ are clearly attested in John 1:1, Colossians 1:15-20, Hebrews 1.",
    why_matters: "A Jesus who is not divine cannot make an atonement of infinite worth. A God who forgives without addressing sin's offense against his justice is not the holy God of Scripture but a permissive grandfather.",
    modern_echoes: "Liberal Protestantism broadly. Unitarian Universalism. The emergent church's minimalist Christology in some forms.",
    verse: "John 1:1; Isaiah 53:4-5; Romans 3:25",
    initials: "SOC",
  },
];

type Tab = "heresies" | "defenders" | "councils" | "patterns" | "videos";

const DEFENDERS = [
  { id: "athanasius", name: "Athanasius of Alexandria", era: "c. 296-373", context: "Bishop of Alexandria; 'Athanasius contra mundum'", bio: "Athanasius devoted his entire ministry to defending the full divinity of Christ against Arianism, which had gained imperial favor after Nicaea. He was exiled five times for refusing to compromise — three times by emperors who favored the Arian cause — and returned each time more resolute. His De Incarnatione remains one of the greatest Christological texts ever written. His slogan: 'Whatever is true of the Father is true of the Son, except being the Father.' He died as bishop of Alexandria after a career of unparalleled theological courage.", quote: "The Son of God became man so that we might become God. He was not made man and then became God, but being God he became man to deify us.", contribution: "Held the Trinitarian faith against the full weight of imperial power and theological confusion for decades. Without Athanasius, Arianism might have become the orthodox position of the Western church. He is the paradigm of faithful orthodoxy under pressure." },
  { id: "irenaeus", name: "Irenaeus of Lyons", era: "c. 130-202", context: "Bishop of Lyons; Against Heresies", bio: "Irenaeus is the first systematic theologian of the Christian tradition and the most important early opponent of Gnosticism. His Against Heresies is the definitive refutation of the major Gnostic systems — he describes them in detail, then dismantles them from Scripture and apostolic tradition. His positive contribution: the doctrine of recapitulation (anakephalaiosis) — Christ recapitulates and restores everything Adam lost, redeeming the full human person. He was also the first to give clear articulation to the role of apostolic succession in doctrinal stability.", quote: "The glory of God is man fully alive; the life of man is the vision of God.", contribution: "Established the method of orthodox theological refutation: describe the heresy accurately, then answer it from Scripture and apostolic tradition. His rule of faith as interpretive principle and his doctrine of recapitulation shaped orthodox Christology for centuries." },
  { id: "cyril", name: "Cyril of Alexandria", era: "c. 376-444", context: "Archbishop of Alexandria; led the Council of Ephesus", bio: "Cyril led the orthodox response to Nestorianism at the Council of Ephesus (431 AD). His insistence on the communicatio idiomatum — the communication of attributes between Christ's two natures in the one person — established the technical Christological vocabulary still used today. He also vigorously defended the title Theotokos for Mary as a Christological claim: she bore the one person who is both divine and human, so she can rightly be called the God-bearer. His polemical methods were sometimes harsh, but his theological precision was essential.", quote: "We do not speak of the natures being confused or mingled, but united to one another. The one Son, the Lord Jesus Christ, is both God and man.", contribution: "Established the technical vocabulary for Chalcedonian Christology — one person, two natures. The formula of Ephesus and Chalcedon is largely Cyril's achievement, and it remains the touchstone for orthodox Christology in Catholic, Protestant, and Orthodox traditions." },
  { id: "augustine", name: "Augustine of Hippo", era: "354-430", context: "Bishop of Hippo; opposed Pelagianism and Donatism", bio: "Augustine's battles against Pelagianism produced his mature doctrine of grace — one of the most significant theological developments in Christian history. His anti-Pelagian writings (On the Spirit and the Letter, On Grace and Free Will, On the Predestination of the Saints) established the Reformed tradition's understanding of original sin, total depravity, and sovereign grace. Against the Donatists (who insisted the church must be composed only of the pure), he developed the doctrine of the visible and invisible church and sacramental validity.", quote: "Our heart is restless until it rests in Thee. Thou hast made us for Thyself.", contribution: "Established the theological framework that Reformed and Lutheran Christianity draws on — especially original sin, the bondage of the will, and sovereign grace. His anti-Pelagian theology was ratified at Carthage (418), Orange (529), and became the foundation of Western soteriology." },
  { id: "tertullian", name: "Tertullian", era: "c. 155-240", context: "Carthage; first major Latin theologian", bio: "Tertullian was the first Christian writer to develop Trinitarian vocabulary in Latin — inventing the terms trinitas (Trinity), substantia (substance), and persona (person) to describe the one-in-three nature of God. He opposed Modalism (Sabellianism) with the formulation that became standard: one substance, three persons. His Against Praxeas is the foundational text in Trinitarian theology. Despite his later association with the Montanist sect, his Trinitarian contribution was preserved and became the bedrock of Latin orthodox theology.", quote: "What has Athens to do with Jerusalem? What has the Academy to do with the Church? What have heretics to do with Christians?", contribution: "Created the Latin vocabulary for Trinitarian theology that shaped all subsequent Western Christian thought. His formula — una substantia, tres personae — remains the standard definition of the Trinity in Western Christianity." }
];

const COUNCILS = [
  { name: "Council of Nicaea", year: "325 AD", color: "#EF4444", trigger: "Arianism — Arius claimed the Son is a created being, not fully God.", outcome: "Formulated the Nicene Creed. Declared the Son homoousios (of the same substance) as the Father. Condemned Arianism. Emperor Constantine presided but the theological work was done by Alexander of Alexandria and Athanasius.", creed: "We believe in one Lord Jesus Christ, the Son of God, begotten of the Father, only-begotten, that is, of the substance of the Father, God of God, Light of Light, very God of very God, begotten, not made, of one substance with the Father.", significance: "Established the full divinity of the Son as the non-negotiable center of Trinitarian faith. The Nicene Creed is still recited weekly in churches across Catholic, Orthodox, Anglican, Lutheran, and many Reformed traditions." },
  { name: "Council of Constantinople", year: "381 AD", color: PURPLE, trigger: "Semi-Arianism and Pneumatomachian (Spirit-fighters) denial of the Holy Spirit's full divinity.", outcome: "Confirmed and expanded the Nicene Creed. Added the pneumatological section: 'We believe in the Holy Spirit, the Lord and Giver of Life, who proceeds from the Father, who with the Father and the Son is worshipped and glorified.' Condemned Apollinarianism (which denied Christ's full human mind).", creed: "We believe in the Holy Spirit, the Lord, the Giver of Life, who proceeds from the Father, who with the Father and the Son is worshipped and glorified, who has spoken through the prophets.", significance: "Completed the Trinitarian settlement of Nicaea by establishing the full divinity of the Holy Spirit. The Nicene-Constantinopolitan Creed (which is what churches today usually call the Nicene Creed) is the product of this council." },
  { name: "Council of Ephesus", year: "431 AD", color: "#3B82F6", trigger: "Nestorianism — Nestorius's apparent teaching of two persons in Christ and his refusal to call Mary Theotokos.", outcome: "Declared Mary Theotokos (God-bearer) as a Christological (not Mariological) claim. Affirmed the union of natures in one person. Condemned Nestorius. Cyril of Alexandria's twelve anathemas shaped the outcome.", creed: "Mary is Theotokos — not because the divine nature had a beginning in her womb, but because the one person who is eternally divine was born of her as man.", significance: "Established the personal unity of Christ — two natures, one person — against any teaching that divides Christ into two subjects. The Theotokos title remains one of the most important Christological affirmations in the church's history." },
  { name: "Council of Chalcedon", year: "451 AD", color: GREEN, trigger: "Eutychianism (Monophysitism) — the view that Christ has only one nature, his humanity absorbed into divinity.", outcome: "Formulated the Chalcedonian Definition: Christ is one person in two natures (divine and human) without confusion, change, division, or separation. The four famous negatives eliminate both Nestorian separation and Eutychian confusion. Accepted by Catholics, most Protestants, and Reformed and Lutheran traditions. The Oriental Orthodox churches (Coptic, Ethiopian, Armenian, Syriac) rejected it.", creed: "One and the same Christ, Son, Lord, Only-begotten, recognized in two natures, without confusion, without change, without division, without separation.", significance: "The definitive Christological formulation of the ancient church. The Chalcedonian definition established the boundaries within which all orthodox Christology has been done ever since. Its four negatives are still the touchstone for Christological orthodoxy." }
];

const HERESY_PATTERNS = [
  { title: "Heresies Always Begin with a Valid Concern", icon: "⚠️", color: "#F59E0B", desc: "Arius wanted to protect monotheism. Nestorius wanted to protect the distinction of natures. Pelagius wanted to preserve human responsibility. Every heresy begins with a genuine theological intuition pressed too far or defended by excluding another truth. This is why heresy is not stupidity — it is oversimplification in the service of a partial truth." },
  { title: "Heresy is Always Christological at its Core", icon: "✝️", color: "#EF4444", desc: "Nearly every major heresy in church history touches Christology — either denying Christ's full divinity (Arianism, Socinianism), denying his full humanity (Docetism, Apollinarianism), or dividing what must be held together (Nestorianism) or confusing what must be distinguished (Eutychianism, Modalism). The person of Christ is the pressure point of theological controversy because he is the center of the Christian gospel." },
  { title: "Heresies Simplify What Must Be Complex", icon: "🧩", color: "#8B5CF6", desc: "Orthodox Christianity insists on paradoxes: one God in three persons; Christ fully divine and fully human; humans both totally depraved and genuinely responsible; salvation both totally by grace and genuinely involving human faith. Heresies resolve the paradox prematurely. Arianism made the Son less than the Father to make the math easier. Modalism made the three persons identical. Monophysitism merged the natures. Heresy is always easier to explain — and that is part of its appeal." },
  { title: "Heresies Always Return", icon: "🔄", color: "#3B82F6", desc: "The ancient heresies are not merely historical. Arianism returns in every generation as the commonsense position: surely Jesus can't be fully God. Docetism returns whenever Christianity becomes purely spiritual and disembodied. Pelagianism returns whenever the church emphasizes human decision without divine initiative. Gnosticism returns in any spirituality that treats matter as inferior and salvation as escape rather than transformation. Knowing the ancient heresies is essential for recognizing their modern forms." },
  { title: "The Church's Boundaries Were Forged in Battle", icon: "🛡️", color: "#10B981", desc: "The creeds are not bureaucratic documents — they are the scars of theological warfare. Every phrase in the Nicene Creed was chosen to exclude a specific heresy. 'Very God of very God' excludes Arianism. 'Begotten, not made' excludes the Arian view that the Son is a creature. 'Of one substance with the Father' is the decisive line. The church learned what to say by first confronting what could not be said." },
  { title: "Heresy Destroys Soteriology", icon: "🔑", color: GREEN, desc: "The Fathers consistently argued that false Christology destroys salvation. Athanasius: if the Son is not truly God, he cannot deify us. Gregory of Nazianzus: 'That which is not assumed is not healed' — if Christ did not take on a full human nature, he did not redeem it. Anselm: only one who is both fully God (to make the satisfaction infinite) and fully human (to represent humanity) can make atonement. Every Christological error affects soteriology — who saves us and how." }
];

export default function ClassicHeresiesPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_classic-heresies_tab", "heresies");
  const [selectedDefender, setSelectedDefender] = usePersistedState("vine_classic-heresies_selected_defender", "athanasius");
  const defender = DEFENDERS.find(d => d.id === selectedDefender)!;
  const [selected, setSelected] = useState<string | null>(null);

  const heresy = HERESIES.find(h => h.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚠️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Classic Heresies Explained</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The church's doctrinal boundaries were forged in controversy. Understanding what the church rejected — and why — is essential for understanding what the church believes. Heresy is not merely wrong; it is wrong in ways that destroy the gospel.
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {([
            { id: "heresies" as Tab, label: "The Heresies", icon: "⚠️" },
            { id: "defenders" as Tab, label: "Defenders", icon: "🛡️" },
            { id: "councils" as Tab, label: "Councils", icon: "📜" },
            { id: "patterns" as Tab, label: "Patterns", icon: "🔄" },
            { id: "videos" as Tab, label: "Videos", icon: "🎬" },
          ]).map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13, background: activeTab === t.id ? GREEN : "transparent", color: activeTab === t.id ? BG : MUTED, transition: "all 0.15s" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "heresies" && (
        <div style={{ display: "grid", gridTemplateColumns: heresy ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {HERESIES.map((h, i) => (
              <button key={i} onClick={() => setSelected(selected === h.name ? null : h.name)}
                style={{ background: selected === h.name ? `${h.color}12` : CARD, border: `1px solid ${selected === h.name ? h.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${h.color}20`, border: `1px solid ${h.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: h.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                    {h.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{h.name}</span>
                      <span style={{ background: `${h.color}15`, color: h.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{h.era}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{h.founder}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {heresy && (
            <div style={{ background: CARD, border: `1px solid ${heresy.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: `${heresy.color}20`, border: `1px solid ${heresy.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: heresy.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                  {heresy.initials}
                </div>
                <div>
                  <h2 style={{ color: heresy.color, fontWeight: 900, fontSize: 20, margin: "0 0 2px" }}>{heresy.name}</h2>
                  <div style={{ color: MUTED, fontSize: 12 }}>{heresy.era} · {heresy.council}</div>
                </div>
              </div>

              <div style={{ background: "#EF444410", border: "1px solid #EF444425", borderRadius: 8, padding: 12, marginBottom: 14 }}>
                <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>THE TEACHING</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{heresy.doctrine}</p>
              </div>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginBottom: 14 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>THE ORTHODOX RESPONSE</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{heresy.response}</p>
              </div>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12, marginBottom: 14 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY IT MATTERS</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{heresy.why_matters}</p>
              </div>

              <div style={{ background: `${heresy.color}08`, border: `1px solid ${heresy.color}20`, borderRadius: 8, padding: 12, marginBottom: 14 }}>
                <div style={{ color: heresy.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>MODERN ECHOES</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{heresy.modern_echoes}</p>
              </div>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {heresy.verse.split("; ").map(v => (
                  <span key={v} style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 600 }}>{v}</span>
                ))}
              </div>
            </div>
          )}
        </div>
        )}

        {activeTab === "defenders" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {DEFENDERS.map(d => (
                <button key={d.id} onClick={() => setSelectedDefender(d.id)}
                  style={{ width: "100%", background: selectedDefender === d.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedDefender === d.id ? PURPLE + "80" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedDefender === d.id ? TEXT : MUTED, fontWeight: 700, fontSize: 13 }}>{d.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{d.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 18 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{defender.name}</h2>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{defender.era}</span>
                    <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{defender.context}</span>
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>LIFE & BATTLE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{defender.bio}</p>
                </div>
                <div style={{ background: BG, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 10px 10px 0", padding: 18, marginBottom: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>CHARACTERISTIC QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>&ldquo;{defender.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION TO ORTHODOXY</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{defender.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "councils" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {COUNCILS.map(c => (
              <div key={c.name} style={{ background: CARD, border: `1px solid ${c.color}30`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div>
                    <h3 style={{ color: c.color, fontWeight: 900, fontSize: 18, margin: "0 0 4px" }}>{c.name}</h3>
                    <span style={{ background: `${c.color}15`, color: c.color, padding: "1px 8px", borderRadius: 6, fontSize: 11, fontWeight: 700 }}>{c.year}</span>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                  <div style={{ background: "#EF444410", border: "1px solid #EF444420", borderRadius: 8, padding: 12 }}>
                    <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 11, marginBottom: 4 }}>TRIGGERED BY</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.trigger}</p>
                  </div>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>OUTCOME</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.outcome}</p>
                  </div>
                </div>
                <div style={{ background: BG, borderLeft: `3px solid ${c.color}`, borderRadius: "0 8px 8px 0", padding: 12, marginBottom: 12 }}>
                  <div style={{ color: c.color, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>KEY FORMULA</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>&ldquo;{c.creed}&rdquo;</p>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>WHY IT STILL MATTERS</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.significance}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "patterns" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {HERESY_PATTERNS.map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${p.color}30`, borderRadius: 14, padding: 22 }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{p.icon}</div>
                <h3 style={{ color: p.color, fontWeight: 900, fontSize: 15, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Learn from R.C. Sproul and other theologians about the classic heresies of church history — what was taught, why it was wrong, and how the church responded to defend orthodoxy.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "AtYCVDlV9kE", title: "Heresies of the Early Church", channel: "Ligonier Ministries", description: "R.C. Sproul surveys the major heresies that threatened the early church — Arianism, Gnosticism, Docetism, and more — and explains how the councils responded to preserve orthodox doctrine." },
                  { videoId: "7-utwkfgyyI", title: "Wolf in Sheep's Clothing", channel: "Ligonier Ministries", description: "R.C. Sproul examines how false teaching infiltrates the church and the theological vigilance required to identify and refute it, drawing on the councils and creeds of the early church." },
                  { videoId: "T5R9JmJTtOM", title: "Introduction to Reformed Theology", channel: "Ligonier Ministries", description: "R.C. Sproul introduces the theological framework that grew directly from the church's battles against heresy — explaining how orthodox doctrine was hammered out in the crucible of controversy." },
                  { videoId: "VITwhgPNtPM", title: "Original Sin", channel: "Ligonier Ministries", description: "R.C. Sproul explains the doctrine of original sin — including Augustine's battle against Pelagianism — and why this foundational doctrine is still contested and essential today." },
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
