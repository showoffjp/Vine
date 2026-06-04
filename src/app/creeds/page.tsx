"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const CREEDS = [
  {
    id: "apostles",
    name: "The Apostles' Creed",
    date: "c. AD 140–390 (final form)",
    origin: "Western Church",
    usage: "Used in baptism services, morning/evening prayer, and catechism across Catholic, Lutheran, Reformed, Anglican, and many evangelical traditions.",
    text: `I believe in God, the Father almighty,
Creator of heaven and earth.

I believe in Jesus Christ, his only Son, our Lord,
who was conceived by the Holy Spirit,
born of the Virgin Mary,
suffered under Pontius Pilate,
was crucified, died, and was buried;
he descended to the dead.
On the third day he rose again;
he ascended into heaven,
he is seated at the right hand of the Father,
and he will come to judge the living and the dead.

I believe in the Holy Spirit,
the holy catholic Church,
the communion of saints,
the forgiveness of sins,
the resurrection of the body,
and life everlasting. Amen.`,
    lineByLine: [
      { line: "God, the Father almighty, Creator of heaven and earth.", explanation: "God is personal (Father), omnipotent, and the source of all creation — both physical and spiritual reality." },
      { line: "Jesus Christ, his only Son, our Lord", explanation: "'Only Son' = unique divine relationship, not one among many. 'Lord' (Kyrios) = the Greek equivalent of YHWH, a declaration of Christ's full divinity." },
      { line: "was crucified, died, and was buried", explanation: "Emphasizes the full reality of Jesus's death against early heresies (Docetism) that denied his physical humanity." },
      { line: "the holy catholic Church", explanation: "'Catholic' means universal — the one worldwide body of believers, not the Roman Catholic institution specifically." },
      { line: "the communion of saints", explanation: "The living community of believers, united across time — all who have died in faith are still members of the one body of Christ." },
    ],
  },
  {
    id: "nicene",
    name: "The Nicene Creed",
    date: "AD 325 (Nicaea), revised 381 (Constantinople)",
    origin: "Ecumenical Councils",
    usage: "The most universal Christian creed — recited by Catholics, Eastern Orthodox, and most Protestant denominations at Eucharist. Foundational statement of Trinitarian orthodoxy.",
    text: `We believe in one God,
the Father almighty,
maker of heaven and earth,
of all things visible and invisible.

We believe in one Lord Jesus Christ,
the only Son of God,
eternally begotten of the Father,
God from God, Light from Light,
true God from true God,
begotten, not made,
of one Being with the Father.
Through him all things were made.
For us and for our salvation
he came down from heaven:
by the power of the Holy Spirit
he became incarnate from the Virgin Mary,
and was made man.
For our sake he was crucified under Pontius Pilate;
he suffered death and was buried.
On the third day he rose again
in accordance with the Scriptures;
he ascended into heaven
and is seated at the right hand of the Father.
He will come again in glory
to judge the living and the dead,
and his kingdom will have no end.

We believe in the Holy Spirit, the Lord, the giver of life,
who proceeds from the Father and the Son.
With the Father and the Son he is worshiped and glorified.
He has spoken through the Prophets.

We believe in one holy catholic and apostolic Church.
We acknowledge one baptism for the forgiveness of sins.
We look for the resurrection of the dead,
and the life of the world to come. Amen.`,
    lineByLine: [
      { line: "eternally begotten of the Father", explanation: "Directly addresses Arianism — the Son was not created at a point in time but eternally generated from the Father's being." },
      { line: "of one Being with the Father", explanation: "The Greek word homoousios — 'same substance' — was the key theological victory at Nicaea. Christ shares the same divine nature, not merely similar nature (homoiousios)." },
      { line: "For us and for our salvation he came down from heaven", explanation: "The Incarnation has a purpose: it is for us. The creed emphasizes the soteriological (salvation) motive for the Incarnation." },
      { line: "in accordance with the Scriptures", explanation: "The resurrection is not a new idea — it was foretold. The creed ties the resurrection to the entire OT witness." },
      { line: "his kingdom will have no end", explanation: "Against any view that Christ's reign is temporary or that there will be a time without his lordship." },
    ],
  },
  {
    id: "chalcedon",
    name: "The Definition of Chalcedon",
    date: "AD 451",
    origin: "Council of Chalcedon (modern Turkey)",
    usage: "The authoritative statement on the two natures of Christ. Less commonly recited in worship, but foundational to Christology across all major traditions.",
    text: `Following the holy Fathers, we all with one accord teach men to acknowledge one and the same Son, our Lord Jesus Christ, at once complete in Godhead and complete in manhood, truly God and truly man, consisting also of a reasonable soul and body; of one substance with the Father as regards his Godhead, and at the same time of one substance with us as regards his manhood; like us in all respects, apart from sin.

As regards his Godhead, begotten of the Father before the ages, but yet as regards his manhood begotten, for us men and for our salvation, of Mary the Virgin, the God-bearer; one and the same Christ, Son, Lord, Only-begotten, recognized in two natures, without confusion, without change, without division, without separation.`,
    lineByLine: [
      { line: "complete in Godhead and complete in manhood", explanation: "The 'two-natures' doctrine: Jesus is 100% God and 100% human — not 50/50, not God dressed as man, not a lesser god." },
      { line: "without confusion, without change, without division, without separation", explanation: "The four 'withouts' — rejecting four heresies: Eutychianism (confusion), Monophysitism (change into one nature), Nestorianism (division), and Arianism (separation)." },
      { line: "Mary the Virgin, the God-bearer", explanation: "Theotokos ('God-bearer') — Mary is called God-bearer not to exalt Mary but to protect Christ's full divinity from birth." },
    ],
  },
  {
    id: "athanasian",
    name: "The Athanasian Creed",
    date: "c. AD 500",
    origin: "Western Church (likely not Athanasius himself)",
    usage: "Used in some Lutheran, Anglican, and Catholic traditions. The most detailed of the three ecumenical creeds on the Trinity and Christology. Rarely recited in full, but theologically rich.",
    text: `Whoever desires to be saved should above all hold to the catholic faith. Anyone who does not keep it whole and unbroken will doubtless perish eternally.

Now this is the catholic faith: That we worship one God in trinity and the trinity in unity, neither blending their persons nor dividing their essence. For the person of the Father is a distinct person, the person of the Son is another, and that of the Holy Spirit still another. But the divinity of the Father, Son, and Holy Spirit is one, their glory equal, their majesty coeternal.

Such as the Father is, such is the Son and such is the Holy Spirit. The Father is uncreated, the Son is uncreated, the Holy Spirit is uncreated... The Father is immeasurable, the Son is immeasurable, the Holy Spirit is immeasurable. The Father is eternal, the Son is eternal, the Holy Spirit is eternal. And yet there are not three eternal beings; there is but one eternal being.`,
    lineByLine: [
      { line: "one God in trinity and the trinity in unity", explanation: "The paradox of the Trinity: one essence (ousia), three persons (hypostases). Monotheism without collapsing the distinctions." },
      { line: "neither blending their persons nor dividing their essence", explanation: "The two errors the creed guards against: modalism (blending persons into one) and tritheism (three separate gods)." },
      { line: "The Father is uncreated, the Son is uncreated, the Holy Spirit is uncreated... and yet there are not three eternal beings", explanation: "Three fully divine persons who are each eternal, omnipotent, immeasurable — yet not three gods but one." },
    ],
  },
];

// ── DATA ─────────────────────────────────────────────────────────────────────

const CREED_COMMENTARY = [
  {
    id: "cc-1",
    creedName: "Apostles' Creed",
    article: 1,
    phrase: "I believe in God, the Father Almighty, Creator of heaven and earth",
    explanation: [
      "The word 'almighty' translates the Latin omnipotens and the Greek pantokrator — 'ruler of all.' This is not merely a statement about raw power but about sovereign authority over every domain of existence. The creed does not say God is powerful; it says he is the Almighty — the one whose will cannot ultimately be thwarted, whose purposes cannot be derailed by any creaturely agency, whether human rebellion or cosmic disorder.",
      "The name 'Father' is striking and deliberate. In ancient Near Eastern and Greco-Roman religion, the divine was approached as the impersonal Absolute, the unmoved Mover, the cosmic Force — not as a father. To call God 'Father' is to assert that God is not a principle or a force but a person, one who relates to his creatures with parental intentionality. The Apostles' Creed positions this personal name before any attribute: before almighty, before creator. We know him first as Father.",
      "The phrase 'Creator of heaven and earth' rules out any dualistic account of the universe — the idea that matter is evil, or that the physical world was made by a lesser god, or that evil is an independent power co-eternal with God. Everything that exists exists because God willed it into being. This has radical ethical implications: the body, the physical world, food, sex, labor, art — all of it is creation, and creation is good because the Creator is good.",
    ],
    significance: "The opening article establishes the framework for everything that follows: a personal God, sovereign over all, who made the universe ex nihilo. If you get this wrong, everything downstream collapses.",
  },
  {
    id: "cc-2",
    creedName: "Apostles' Creed",
    article: 2,
    phrase: "I believe in Jesus Christ, his only Son, our Lord",
    explanation: [
      "The title 'Christ' is not a surname — it is the Greek translation of the Hebrew 'Messiah,' meaning 'anointed one.' In Israel's tradition, prophets, priests, and kings were anointed for their offices. To call Jesus 'the Christ' is to claim that he is the anointed prophet, priest, and king who fulfills all three offices — the one Israel's entire redemptive history was pointing toward. The creed assumes the entire Old Testament as context.",
      "The phrase 'his only Son' uses the Greek monogenes, often translated 'only-begotten.' This is the same word used in John 3:16. It does not mean God produced Jesus in the way a father produces a biological son — it means Jesus stands in a singular, unshared relationship to the Father. He is not one son among many, not the greatest of God's creatures, not an elevated human being. He is uniquely and exclusively the Son in a way that defines his eternal being.",
      "The title 'Lord' — kyrios in Greek — was the word used in the Greek Old Testament (the Septuagint) to translate the divine name YHWH. When first-century Jews and Gentiles heard 'Jesus Christ is Lord,' they heard a claim to full divine status. In the Roman Empire, 'Caesar is Lord' was a political-religious declaration of ultimate allegiance. The creed's counter-declaration — 'Jesus is Lord' — was not merely pious language. It was a confrontation with every rival claim to ultimate authority.",
    ],
    significance: "The second article names the center of the Christian faith. Every word — Christ, only Son, Lord — carries centuries of theological freight. To say these words carefully is to know what you are claiming.",
  },
  {
    id: "cc-3",
    creedName: "Apostles' Creed",
    article: 3,
    phrase: "conceived by the Holy Spirit, born of the Virgin Mary",
    explanation: [
      "The Incarnation is the hinge of all Christian theology. The eternal Son of God — the one through whom all things were made — took on human flesh. He did not merely appear as a human being, or temporarily inhabit a human body, or adopt a human persona. He became human: genuinely, fully, permanently. The creed insists on the means: conceived by the Holy Spirit, born of a human mother. Both clauses matter.",
      "The virgin birth is not included in the creed as a biological curiosity. It functions as a theological marker: Jesus enters human history from outside the normal chain of human generation. He is not simply the best human being who ever lived; he is the one who comes from beyond. The Spirit's overshadowing of Mary in Luke 1:35 echoes the Spirit hovering over the waters in Genesis 1:2 — the birth of Jesus is presented as a new creation event.",
      "The naming of Mary — an ordinary Jewish woman from an obscure town — is also significant. The creed affirms that the divine took on real flesh in real history, born of a specific woman. This is the scandal of particularity: the infinite God chose to enter finitude not through myth or symbol but through a particular woman in a particular place at a particular time. Christian theology has always insisted that this particularity is not incidental but essential to the Gospel.",
    ],
    significance: "The Incarnation is the presupposition of all Christian theology. If Jesus was not genuinely human and genuinely divine, then neither his death nor his resurrection can accomplish what the Gospel claims.",
  },
  {
    id: "cc-4",
    creedName: "Apostles' Creed",
    article: 4,
    phrase: "suffered under Pontius Pilate, was crucified, died, and was buried",
    explanation: [
      "Pontius Pilate was a Roman prefect whose term in Judea is documented by Josephus, Tacitus, and a stone inscription found at Caesarea Maritima in 1961. His name in the creed does something no other article does: it anchors the death of Jesus to a dateable, verifiable historical moment. The creed is not recounting a myth or a spiritual experience — it is making a claim about what happened at a specific time, under a named official, in the real world.",
      "The scandal of the cross was enormous in the ancient world. Crucifixion was a form of execution reserved for slaves, bandits, and insurrectionists — it was designed to be maximally humiliating. For Jewish readers, Deuteronomy 21:23 declared that 'anyone who is hung on a tree is under God's curse.' For Greek and Roman readers, a crucified god was simply absurd. Paul did not downplay this: 'We preach Christ crucified, a stumbling block to Jews and foolishness to Gentiles' (1 Cor 1:23). The creed does not soften it either.",
      "The words 'died and was buried' insist on the full reality of the death. Against early Docetic heresies that claimed Jesus only appeared to die, the creed presses the point with cumulative force: suffered, crucified, died, buried. He was not resuscitated from a coma. He did not escape death by divine intervention at the last moment. He died the death that we die — the full stopping of biological life — and was laid in a tomb. The resurrection, when it comes in the next article, is therefore not a resuscitation but a genuine conquest of death.",
    ],
    significance: "The historical specificity of the creed at this point is a theological commitment: the Gospel is not about timeless truths but about a particular death that happened in history and changed what history means.",
  },
  {
    id: "cc-5",
    creedName: "Apostles' Creed",
    article: 5,
    phrase: "On the third day he rose again; he ascended to heaven",
    explanation: [
      "The resurrection is the most audacious claim in the creed. Paul staked everything on it: 'If Christ has not been raised, your faith is futile and you are still in your sins... we are of all people most to be pitied' (1 Cor 15:17, 19). The creed does not present the resurrection as metaphor, as the disciples' subjective experience of Christ's ongoing influence, or as the survival of Jesus's spirit. It presents the resurrection as a historical event: 'on the third day' — the same third day that the women found an empty tomb, that Peter ran and saw the grave clothes, that Mary encountered a living man in a garden.",
      "The Ascension — 'he ascended to heaven' — is often treated as an afterthought, but it carries enormous theological weight. The Ascension means that Jesus did not return to the mode of existence he had before the Incarnation. He ascended as the God-man: a human being, with a resurrection body, now seated at the right hand of the Father. Hebrews develops this: Jesus is our high priest who has passed through the heavens, who 'always lives to make intercession' for us (Heb 7:25). The Ascension is not Jesus leaving — it is Jesus continuing his priestly mediation in a new mode.",
      "The phrase 'seated at the right hand of the Father' echoes Psalm 110:1, the most quoted Old Testament text in the New Testament. In ancient Near Eastern royal courts, to sit at the king's right hand was to share in his authority and reign. The creed claims that Jesus currently reigns — not that he will one day reign, but that his kingdom is active now, and that his intercession for his people is ongoing. The creed's eschatology — 'he will come to judge the living and the dead' — is the completion of this reign, not its beginning.",
    ],
    significance: "The resurrection and ascension together form the basis for Christian hope. Jesus rose not merely as proof of divine power but as the 'firstfruits' (1 Cor 15:20) of the new creation — the beginning of the age to come breaking into the present age.",
  },
];

const CREED_HISTORY = [
  {
    id: "ch-1",
    era: "1st–2nd Century",
    period: "Baptismal Confessions",
    development: "The earliest creedal statements were short 'I believe' formulas recited at baptism. Phrases like 'Jesus is Lord' (Romans 10:9) and 'Jesus Christ has come in the flesh' (1 John 4:2) functioned as confessional touchstones — both as personal affirmations and as anti-heretical markers distinguishing orthodox Christians from early Gnostic groups who denied Christ's full humanity or true divinity.",
    keyFigures: ["Paul of Tarsus", "The Apostle John", "Ignatius of Antioch"],
    significance: "These proto-credal statements demonstrate that from the earliest period, Christian faith required articulation. The impulse to summarize what is believed — and to do so publicly — is apostolic, not medieval.",
  },
  {
    id: "ch-2",
    era: "2nd–3rd Century",
    period: "The Rule of Faith",
    development: "As Gnosticism threatened to fundamentally redefine Christianity — positing secret knowledge, multiple divine emanations, and a creator God distinct from the true God — bishops began appealing to the 'Rule of Faith' (regula fidei): a summary of apostolic teaching that could be measured against heretical innovation. Irenaeus of Lyon and Tertullian of Carthage both formulated versions of this rule as a standard for sound interpretation of Scripture. The Old Roman Symbol — ancestor of what we call the Apostles' Creed — took shape in this period as a structured baptismal interrogation.",
    keyFigures: ["Irenaeus of Lyon (c. 130-202)", "Tertullian of Carthage (c. 155-240)"],
    significance: "The Rule of Faith represents the church's first formal attempt to identify the boundaries of orthodox interpretation — demonstrating that Scripture requires a community, a tradition, and a canon of faithful reading.",
  },
  {
    id: "ch-3",
    era: "325 AD",
    period: "Council of Nicaea",
    development: "Arius, a presbyter in Alexandria, taught that the Son was the first and greatest of God's creatures — 'there was a time when he was not.' His formulation was elegant and appealing: it preserved monotheism while explaining the Son's exalted status. Emperor Constantine, alarmed by the theological fracture threatening imperial unity, convened 318 bishops at Nicaea. The council's response to Arius was decisive: the Son is 'of one Being with the Father' (homoousios) — not a created being but eternal God. The Greek term homoousios became the creed's most contested and consequential word.",
    keyFigures: ["Arius of Alexandria (c. 256-336)", "Athanasius of Alexandria (c. 296-373)", "Emperor Constantine"],
    significance: "Nicaea is the most consequential theological decision in church history. It established that Christian worship of Jesus Christ is not ditheism but the worship of the one God — and that any reduction of Christ to a created being, however exalted, destroys the Gospel.",
  },
  {
    id: "ch-4",
    era: "381 AD",
    period: "Council of Constantinople",
    development: "The Nicene settlement of 325 left the doctrine of the Holy Spirit underdeveloped. Various groups — including the Pneumatomachi ('Spirit-fighters') — denied the full divinity of the Spirit. The Council of Constantinople, under the presidency of Gregory of Nazianzus, revised and expanded the Nicene Creed to include the full Trinitarian affirmation of the Spirit: 'the Lord, the giver of life, who proceeds from the Father, who with the Father and the Son is worshiped and glorified.' This completed the Trinitarian grammar of Christian theology. The creed produced here is technically the Niceno-Constantinopolitan Creed — what we now call simply 'the Nicene Creed.'",
    keyFigures: ["Gregory of Nazianzus (c. 329-390)", "Gregory of Nyssa (c. 335-395)", "Basil of Caesarea (c. 330-379)"],
    significance: "The completion of Trinitarian doctrine at Constantinople marked the end of the 'classic' period of creedal formation. The theological grammar established here — one God, three persons — has been the foundation of Christian theology in all major traditions ever since.",
  },
  {
    id: "ch-5",
    era: "451 AD",
    period: "Chalcedonian Definition",
    development: "After Nicaea and Constantinople defined who Jesus is in relation to the Father and Spirit, the question of how his divine and human natures relate in one person demanded resolution. Nestorius appeared to divide Christ into two persons; Eutyches appeared to blend the natures into a single hybrid. The Council of Chalcedon's Definition articulated the 'hypostatic union': Jesus Christ is 'recognized in two natures, without confusion, without change, without division, without separation.' The four 'withouts' (alpha-privatives in Greek) remain the most precise formulation of Christology ever achieved by an ecumenical council.",
    keyFigures: ["Leo the Great of Rome (c. 400-461)", "Cyril of Alexandria (c. 376-444)", "Nestorius of Constantinople (c. 386-450)"],
    significance: "Chalcedon's precision on the two natures of Christ has defined orthodox Christology for Roman Catholic, Eastern Orthodox, and most Protestant traditions. It guards against the persistent temptation to overemphasize either Christ's divinity (making his humanity nominal) or his humanity (making his divinity merely honorific).",
  },
  {
    id: "ch-6",
    era: "1646",
    period: "Westminster Standards",
    development: "The English Civil War produced an unlikely theological achievement: the Westminster Assembly, convened by Parliament from 1643 to 1649, produced the Westminster Confession of Faith, the Westminster Larger Catechism, and the Westminster Shorter Catechism — the most comprehensive and carefully argued Reformed confessional standards ever produced. The WCF's treatment of Scripture, covenant theology, the law, salvation, the church, and the last things built systematically on the earlier ecumenical creeds while articulating the distinctives of Reformed Protestantism with precision and pastoral depth. The Shorter Catechism's opening question — 'What is the chief end of man? To glorify God and enjoy him forever' — has become one of the most beloved formulations in Christian theological history.",
    keyFigures: ["William Perkins (1558-1602, foundational influence)", "Samuel Rutherford (1600-1661)", "George Gillespie (1613-1648)", "John Owen (1616-1683)"],
    significance: "The Westminster Standards represent the flowering of Reformation-era confessional theology. They demonstrate that the impulse to confess — to put into words what is believed, why it is believed, and what it requires — is not a distraction from Scripture but the most rigorous engagement with it.",
  },
];

const CREED_VIDEOS = [
  {
    id: "cv-1",
    title: "The Reason for God",
    preacher: "Tim Keller",
    videoId: "Kxup3OS5ZhQ",
    description: "Keller&rsquo;s case for historic Christian faith &mdash; the substance behind the creeds",
  },
  {
    id: "cv-2",
    title: "The Holiness of God",
    preacher: "R.C. Sproul",
    videoId: "v6xk8e7gdMA",
    description: "Sproul on the God the creeds describe: holy, sovereign, eternal",
  },
  {
    id: "cv-3",
    title: "The Trauma of Holiness",
    preacher: "R.C. Sproul",
    videoId: "7CBgp74UwbU",
    description: "What it means to encounter the God named in the Apostles&rsquo; Creed",
  },
  {
    id: "cv-4",
    title: "The Supremacy of Christ and Truth",
    preacher: "Voddie Baucham",
    videoId: "by8ykv7-A3c",
    description: "Baucham defends the creedal Christ against postmodern challenges",
  },
  {
    id: "cv-5",
    title: "Don&rsquo;t Waste Your Life",
    preacher: "John Piper",
    videoId: "JHdB1dYAteA",
    description: "Piper shows what the creed&rsquo;s claims demand of the one who says &ldquo;I believe&rdquo;",
  },
  {
    id: "cv-6",
    title: "Forgotten God Part 3",
    preacher: "Francis Chan",
    videoId: "SCUEicqda1g",
    description: "The Holy Spirit &mdash; the third person of the creed &mdash; explained practically",
  },
];

// ─────────────────────────────────────────────────────────────────────────────

type Tab = "creeds" | "commentary" | "history" | "videos";

export default function CreedsPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_creeds_tab", "creeds");
  const [selected, setSelected] = useState<typeof CREEDS[0] | null>(null);
  const [showLines, setShowLines] = useState(false);
  const [memorizedIds, setMemorizedIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_creeds_memorized"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleMemorized = (id: string) => {
    setMemorizedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("vine_creeds_memorized", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const copyText = async (text: string, id: string) => {
    try { await navigator.clipboard.writeText(text); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); } catch {}
  };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📜</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Creeds &amp; Historic Prayers</h1>
          <p style={{ color: MUTED, fontSize: 16 }}>The faith once delivered to all the saints</p>
          <div style={{ background: "rgba(107,79,187,0.08)", borderRadius: 14, padding: "12px 20px", marginTop: 20, border: "1px solid rgba(107,79,187,0.2)", maxWidth: 560, margin: "20px auto 0" }}>
            <p style={{ fontSize: 14, color: "#C0C0D8", fontStyle: "italic" }}>
              &ldquo;The creeds are like maps. A man who has never been to the Atlantic can still know about it from a map.&rdquo;
            </p>
            <p style={{ fontSize: 12, color: "#A080FF", fontWeight: 700, marginTop: 6 }}>&mdash; C.S. Lewis, Mere Christianity</p>
          </div>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 4 }}>
          {(["creeds", "commentary", "history", "videos"] as const).map(t => (
            <button type="button" key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer", flex: 1 }}>
              {t === "creeds" ? "Creeds" : t === "commentary" ? "Commentary" : t === "history" ? "History" : "Videos"}
            </button>
          ))}
        </div>

        {/* ── CREEDS TAB ── */}
        {activeTab === "creeds" && !selected && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CREEDS.map(c => (
              <div key={c.id} onClick={() => { setSelected(c); setShowLines(false); }}
                style={{ background: CARD, border: `1px solid ${memorizedIds.has(c.id) ? "rgba(58,125,86,0.25)" : BORDER}`, borderRadius: 16, padding: 24, cursor: "pointer", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = PURPLE}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = memorizedIds.has(c.id) ? "rgba(58,125,86,0.25)" : BORDER}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 6 }}>{c.name}</h2>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 12, padding: "2px 8px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)" }}>{c.origin}</span>
                      <span style={{ fontSize: 12, padding: "2px 8px", borderRadius: 20, background: BORDER, color: MUTED }}>{c.date}</span>
                    </div>
                  </div>
                  {memorizedIds.has(c.id) && <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: "rgba(58,125,86,0.1)", color: GREEN }}>&#10003; Memorizing</span>}
                </div>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.6 }}>{c.usage}</p>
              </div>
            ))}
          </div>
        )}

        {/* Creed Detail */}
        {activeTab === "creeds" && selected && (
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <button type="button" onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: GREEN, cursor: "pointer", fontSize: 14, fontWeight: 700, marginBottom: 20, display: "flex", alignItems: "center", gap: 6, padding: 0 }}>
              &#8592; Back to Creeds
            </button>
            <div style={{ background: CARD, borderRadius: 20, padding: 32, border: "1px solid #2A2A40", marginBottom: 20 }}>
              <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 8 }}>{selected.name}</h2>
              <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)" }}>{selected.origin}</span>
                <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: BORDER, color: MUTED }}>{selected.date}</span>
              </div>
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 24 }}>{selected.usage}</p>

              <div style={{ background: "#0D0D1A", borderRadius: 14, padding: 24, marginBottom: 20, borderLeft: `3px solid ${PURPLE}` }}>
                <pre style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 2, fontFamily: "inherit", whiteSpace: "pre-wrap", margin: 0 }}>{selected.text}</pre>
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
                <button type="button" onClick={() => copyText(selected.text, selected.id)}
                  style={{ padding: "10px 18px", borderRadius: 10, border: "1px solid #2A2A40", background: BORDER, color: copiedId === selected.id ? GREEN : MUTED, cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                  {copiedId === selected.id ? "✓ Copied!" : "Copy Text"}
                </button>
                <button type="button" onClick={() => toggleMemorized(selected.id)}
                  style={{ padding: "10px 18px", borderRadius: 10, border: `1px solid ${memorizedIds.has(selected.id) ? "rgba(58,125,86,0.35)" : "#2A2A40"}`, background: memorizedIds.has(selected.id) ? "rgba(58,125,86,0.1)" : BORDER, color: memorizedIds.has(selected.id) ? GREEN : MUTED, cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                  {memorizedIds.has(selected.id) ? "✓ Memorizing" : "Track Memorization"}
                </button>
              </div>

              <button type="button" onClick={() => setShowLines(!showLines)}
                style={{ background: "none", border: "none", cursor: "pointer", color: PURPLE, fontWeight: 700, fontSize: 14, padding: 0 }}>
                {showLines ? "▲ Hide line-by-line commentary" : "▼ Show line-by-line commentary"}
              </button>

              {showLines && (
                <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                  {selected.lineByLine.map((ll, i) => (
                    <div key={i} style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, border: `1px solid ${BORDER}` }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#C0C0D8", marginBottom: 8, fontStyle: "italic" }}>&ldquo;{ll.line}&rdquo;</p>
                      <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7 }}>{ll.explanation}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── COMMENTARY TAB ── */}
        {activeTab === "commentary" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 28 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Phrase-by-Phrase: The Apostles&rsquo; Creed</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Five key phrases from the Apostles&rsquo; Creed examined in depth &mdash; what each phrase meant in its historical context, what it guards against theologically, and why it still matters for the person who says &ldquo;I believe.&rdquo;
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {CREED_COMMENTARY.map((entry) => (
                <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
                    <span style={{ background: `rgba(107,79,187,0.15)`, color: PURPLE, fontSize: 11, fontWeight: 800, padding: "3px 10px", borderRadius: 20, border: `1px solid rgba(107,79,187,0.3)` }}>
                      Article {entry.article}
                    </span>
                    <span style={{ color: MUTED, fontSize: 12 }}>{entry.creedName}</span>
                  </div>
                  <p style={{ fontSize: 17, fontWeight: 700, color: PURPLE, fontStyle: "italic", lineHeight: 1.5, marginBottom: 20 }}>
                    &ldquo;{entry.phrase}&rdquo;
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
                    {entry.explanation.map((para, i) => (
                      <p key={i} style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, margin: 0 }}>{para}</p>
                    ))}
                  </div>
                  <div style={{ background: "rgba(58,125,86,0.05)", border: "1px solid rgba(58,125,86,0.15)", borderRadius: 10, padding: "12px 16px" }}>
                    <p style={{ fontSize: 11, fontWeight: 800, color: GREEN, textTransform: "uppercase" as const, letterSpacing: 1, marginBottom: 6 }}>Significance</p>
                    <p style={{ fontSize: 13, color: GREEN, lineHeight: 1.7, margin: 0 }}>{entry.significance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── HISTORY TAB ── */}
        {activeTab === "history" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 28 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The creeds were not decreed from the sky &mdash; they were forged in controversy, hammered out in councils, and refined across six centuries of theological dispute. Understanding their development illuminates why every word matters.
              </p>
            </div>
            <div style={{ position: "relative" as const }}>
              <div style={{ position: "absolute" as const, left: 20, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${PURPLE}, rgba(107,79,187,0.1))` }} />
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
                {CREED_HISTORY.map((h, i) => (
                  <div key={h.id} style={{ paddingLeft: 52, position: "relative" as const }}>
                    <div style={{ position: "absolute" as const, left: 12, top: 16, width: 18, height: 18, borderRadius: "50%", background: PURPLE, border: `3px solid ${BG}`, zIndex: 1 }} />
                    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                        <div>
                          <h3 style={{ fontSize: 17, fontWeight: 800, color: GREEN, margin: "0 0 4px" }}>{h.period}</h3>
                          <span style={{ fontSize: 12, fontWeight: 700, color: PURPLE, background: "rgba(107,79,187,0.12)", padding: "2px 10px", borderRadius: 10 }}>{h.era}</span>
                        </div>
                        <span style={{ fontSize: 28, fontWeight: 900, color: "rgba(107,79,187,0.2)", fontFamily: "serif" }}>{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 16 }}>{h.development}</p>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                        {h.keyFigures.map(f => (
                          <span key={f} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}`, color: MUTED }}>{f}</span>
                        ))}
                      </div>
                      <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 12 }}>
                        <p style={{ fontSize: 12, fontWeight: 800, color: GREEN, textTransform: "uppercase" as const, letterSpacing: 1, marginBottom: 6 }}>Why It Matters</p>
                        <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, margin: 0 }}>{h.significance}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── VIDEOS TAB ── */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 28 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Preaching on the Creeds</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Six messages from leading preachers and theologians on the God the creeds describe &mdash; his holiness, his sovereignty, and the demands his existence places on those who confess &ldquo;I believe.&rdquo;
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 24 }}>
              {CREED_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", borderRadius: 0, display: "block" }}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div style={{ padding: "16px 18px" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 800, padding: "3px 10px", borderRadius: 20, background: `rgba(107,79,187,0.15)`, color: PURPLE, border: `1px solid rgba(107,79,187,0.3)` }}>{v.preacher}</span>
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 6, color: TEXT }} dangerouslySetInnerHTML={{ __html: v.title }} />
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.description }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      </main>
      <Footer />
    </div>
  );
}
