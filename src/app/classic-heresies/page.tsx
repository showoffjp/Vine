"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

export default function ClassicHeresiesPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const heresy = HERESIES.find(h => h.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚠️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Classic Heresies Explained</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The church's doctrinal boundaries were forged in controversy. Understanding what the church rejected — and why — is essential for understanding what the church believes. Heresy is not merely wrong; it is wrong in ways that destroy the gospel.
          </p>
        </div>

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
      </div>
    </div>
  );
}
