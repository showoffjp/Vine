"use client";

import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Doctrine = {
  id: string; name: string; category: string; emoji: string; color: string;
  headline: string; plainEnglish: string; whyItMatters: string; keyVerse: string; keyVerseRef: string;
  commonMisunderstandings: string[]; denominationViews: { name: string; view: string }[];
  thinkers: string[]; difficulty: "Foundational" | "Intermediate" | "Deep Dive";
};

const doctrines: Doctrine[] = [
  {
    id: "trinity",
    name: "The Trinity",
    category: "God",
    emoji: "🔺",
    color: PURPLE,
    difficulty: "Intermediate",
    headline: "One God, three persons — Father, Son, and Holy Spirit. Not three gods. Not three modes. One God who exists in eternal relationship.",
    plainEnglish: "The Trinity is the Christian claim that God is fundamentally relational — not a solitary being but an eternal community of three co-equal, co-eternal persons who share one divine nature.\n\nAnalogies help but all break down: the Trinity is not like water (ice/liquid/vapor — that's Modalism), not like a man who's a father, son, and husband to different people (Modalism again), not like three separate beings who work together (that's Tritheism).\n\nThe closest analogy: think of love. Love requires a lover and a beloved. God is love (1 John 4:8). If God were a solitary being before creation, who did he love? The Trinity answers this: God has always been in a relationship of perfect self-giving love between Father, Son, and Spirit. Creation isn't God filling a need — it's God extending his love outward.",
    whyItMatters: "The Trinity isn't an abstract puzzle — it's the architecture of reality. Because God is relational at his core, relationships are fundamental to the universe. It means the deepest thing about existence is not power, not isolation, but communion. Salvation is participation in this relational life. Prayer is conversation with the Father through the Son by the Spirit. The church is called to reflect trinitarian community. Everything changes when God is Trinity.",
    keyVerse: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.",
    keyVerseRef: "Matthew 28:19",
    commonMisunderstandings: [
      "The Trinity means Christians believe in three gods — NO. One God, three persons who share one divine nature.",
      "Jesus is just a great prophet — NO. The NT presents Jesus as fully divine (John 1:1, Col 2:9, Phil 2:6).",
      "The Holy Spirit is a force, not a person — NO. The Spirit has will, emotions, and can be grieved (Eph 4:30)."
    ],
    denominationViews: [
      { name: "Catholic / Orthodox / Protestant mainstream", view: "Fully affirm the classical Trinity as defined at Nicaea (325 AD) and Constantinople (381 AD)" },
      { name: "Oneness Pentecostals", view: "Teach 'Modalism' — Jesus is the full expression of the one God who reveals himself in different modes" },
      { name: "Jehovah's Witnesses", view: "Reject the Trinity; Jesus is the first created being, not fully divine" },
    ],
    thinkers: ["Augustine", "Athanasius", "Basil of Caesarea", "C.S. Lewis", "Alvin Plantinga"],
  },
  {
    id: "grace",
    name: "Grace & Salvation",
    category: "Salvation",
    emoji: "🎁",
    color: GREEN,
    difficulty: "Foundational",
    headline: "Grace is God's unearned, undeserved favor — and it's the only basis on which anyone can be saved. Not morality, not effort, not religion. Pure gift.",
    plainEnglish: "Grace means you can't earn it, don't deserve it, and can't repay it. The moment you think you earned it, you've already misunderstood it.\n\nHere's the bad news: the standard is perfection (Matt 5:48). We can't reach it. The good news: Jesus did reach it, and his perfect life and atoning death are credited to our account when we trust him. This is justification — being declared righteous not because we are, but because Christ is.\n\nThe theological term is 'imputed righteousness': Christ's righteous record is imputed (credited) to us, and our sinful record is taken by him. 2 Corinthians 5:21: 'God made him who had no sin to be sin for us, so that in him we might become the righteousness of God.'\n\nGrace doesn't mean anything goes — it means everything is forgiven so we're free to change. The reformed tradition emphasizes God's sovereign initiative in grace; the Arminian tradition emphasizes human response. But both agree: we are saved by grace through faith, not by works (Eph 2:8-9).",
    whyItMatters: "Grace fundamentally changes how you relate to God — from transaction to relationship. You don't approach God as someone owed something, but as a Father who has already given everything. This changes prayer, service, worship, and how you relate to people who fail you. If you've received undeserved grace, you extend it to others. Grace is not just the entry point — it's the operating system of the Christian life.",
    keyVerse: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast.",
    keyVerseRef: "Ephesians 2:8-9",
    commonMisunderstandings: [
      "Grace means God overlooks sin — NO. Grace means sin has been fully paid for by the cross. Grace is costly, not cheap.",
      "As long as I try hard enough, God will accept me — NO. This is works-righteousness. Grace is not a grade on a curve.",
      "Once saved, always saved, so I can do anything — NO. True saving grace always produces changed life (Eph 2:10, James 2:17)."
    ],
    denominationViews: [
      { name: "Reformed / Calvinist", view: "Grace is entirely God's sovereign act; God elects whom he will save unconditionally" },
      { name: "Arminian / Wesleyan", view: "Grace is offered to all; humans respond in free will; salvation can be lost through rejection" },
      { name: "Catholic", view: "Grace is infused through sacraments; works cooperate with grace; final salvation not guaranteed at conversion" },
    ],
    thinkers: ["Martin Luther", "John Calvin", "John Wesley", "C.S. Lewis", "Tim Keller"],
  },
  {
    id: "atonement",
    name: "The Atonement",
    category: "Salvation",
    emoji: "✝️",
    color: "#EF4444",
    difficulty: "Intermediate",
    headline: "Why did Jesus have to die? Multiple biblical metaphors explain the cross — each capturing a different dimension of what God accomplished in Christ.",
    plainEnglish: "The word 'atonement' means 'at-one-ment' — to make two parties one. The cross is where God and humanity are reconciled.\n\nThe Bible uses multiple images to describe what the cross accomplished, and different theological traditions emphasize different ones:\n\n1. SUBSTITUTION (Penal Substitution): Jesus took the punishment we deserved. 'God made him who had no sin to be sin for us' (2 Cor 5:21). Jesus absorbed God's just wrath against sin so we don't have to.\n\n2. RANSOM / REDEMPTION: Jesus paid the price to free us from slavery to sin. 'The Son of Man came to give his life as a ransom for many' (Mark 10:45). We were slaves; he bought our freedom.\n\n3. MORAL INFLUENCE: Jesus's death demonstrates the extent of God's love and transforms us by that demonstration. (Abelard's view — tends to underemphasize substitution.)\n\n4. CHRISTUS VICTOR: Jesus's death and resurrection defeated the powers of sin, death, and the devil. The cross is not primarily about satisfying justice but about cosmic victory over evil.\n\n5. SCAPEGOAT / GIRARDIAN: Jesus exposed and ended the cycle of human violence and scapegoating by becoming the ultimate victim — showing that God is on the side of the victim.\n\nMost orthodox theology holds that substitution is primary, with the other models adding important dimensions.",
    whyItMatters: "How you understand the atonement shapes how you preach, worship, counsel, and understand justice. If you emphasize only substitution without Christus Victor, you may lack a robust framework for fighting systemic evil. If you emphasize only moral influence, you may end up with a gospel that's just an inspiring example rather than actual rescue. The full picture requires multiple lenses.",
    keyVerse: "He himself bore our sins in his body on the cross, so that we might die to sins and live for righteousness.",
    keyVerseRef: "1 Peter 2:24",
    commonMisunderstandings: [
      "The cross was God punishing Jesus (cosmic child abuse) — NO. The Trinity acts together; the Father doesn't punish the Son from outside — the Son volunteers to take the weight as an act of the unified divine will.",
      "Christianity requires blood, which is primitive — NO. What the cross requires is justice. God doesn't waive the debt — he pays it himself.",
      "The cross only applies to 'believers' — The cross has cosmic scope: all of creation groans and will be restored (Rom 8:21-22)."
    ],
    denominationViews: [
      { name: "Reformed / Evangelical", view: "Penal substitution is the central and primary model of atonement" },
      { name: "Catholic / Orthodox", view: "Greater emphasis on the Incarnation, Christus Victor, and theosis than on penal substitution" },
      { name: "Liberal Protestant", view: "Tends toward moral influence theory; skeptical of penal substitution as involving divine violence" },
    ],
    thinkers: ["Anselm", "John Calvin", "N.T. Wright", "Scot McKnight", "Miroslav Volf"],
  },
  {
    id: "scripture",
    name: "Scripture & Revelation",
    category: "Bible",
    emoji: "📖",
    color: "#F59E0B",
    difficulty: "Foundational",
    headline: "Christians believe God has revealed himself — ultimately in Jesus, authoritatively in Scripture. The Bible is not just human wisdom about God; it is God's Word to humanity.",
    plainEnglish: "2 Timothy 3:16 says Scripture is 'God-breathed' (theopneustos). This doesn't mean the human authors were robots — Paul's letters sound like Paul, Luke's histories sound like a historian. But the Spirit superintended the process so that what was written carries divine authority.\n\nKey terms:\n• INSPIRATION: The Bible is 'breathed out' by God through human authors\n• AUTHORITY: Scripture has the right to govern belief and practice\n• INERRANCY: The Bible is without error in all that it affirms (affirmed by most evangelicals)\n• INFALLIBILITY: The Bible will not fail in its purpose and central teachings (broader term)\n• ILLUMINATION: The Spirit helps us understand Scripture as we read it\n\nScripture is not a science textbook or a history textbook by modern standards — it uses phenomenological language, poetry, hyperbole, and other literary genres. 'The four corners of the earth' (Isa 11:12) is not a flat-earth claim. Interpreting Scripture well requires attention to genre, context, culture, and the unfolding of redemptive history.",
    whyItMatters: "If Scripture is God's Word, it functions as the highest authority for Christian belief and practice — above tradition, above church councils, above personal experience. The Reformation's cry was 'Sola Scriptura': Scripture alone is the supreme authority. But this doesn't mean 'only Scripture' (no tradition) — it means Scripture is the test by which tradition and experience are evaluated.",
    keyVerse: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.",
    keyVerseRef: "2 Timothy 3:16",
    commonMisunderstandings: [
      "The Bible has contradictions — many alleged contradictions are resolved by attention to genre, context, and parallel accounts. The Bible has textual diversity, not logical contradiction.",
      "The Bible was written by men, so it's just human opinion — Christianity holds dual authorship: written by humans, superintended by God.",
      "Every verse is direct instruction — NO. Genre matters: narrative, poetry, prophecy, wisdom literature, epistles all function differently."
    ],
    denominationViews: [
      { name: "Evangelical", view: "Verbal, plenary inspiration; inerrancy of original autographs; Scripture as supreme authority" },
      { name: "Catholic / Orthodox", view: "Scripture AND Tradition together constitute the full revelation; church interprets Scripture authoritatively" },
      { name: "Liberal Protestant", view: "Scripture as a human record of divine encounter; not inerrant but authoritative in teaching" },
    ],
    thinkers: ["B.B. Warfield", "N.T. Wright", "Kevin Vanhoozer", "Scot McKnight", "Karl Barth"],
  },
  {
    id: "eschatology",
    name: "Eschatology (End Times)",
    category: "Future",
    emoji: "🌅",
    color: "#10B981",
    difficulty: "Deep Dive",
    headline: "What happens at the end of history? Christians agree: Jesus returns, the dead are raised, evil is defeated, and God creates all things new. The details are where it gets complex.",
    plainEnglish: "Eschatology literally means 'the study of last things.' The central Christian convictions:\n• Jesus will return bodily and visibly (Acts 1:11)\n• The dead will be resurrected physically (1 Cor 15)\n• There will be a final judgment\n• God will create a new heaven and new earth (Rev 21)\n• Evil, death, and suffering will be ended permanently\n\nWhere Christians disagree:\n\nTHE MILLENNIUM (Rev 20): The thousand-year reign. Three views:\n• Premillennialism: Jesus returns BEFORE a literal 1000-year reign on earth (most common in evangelical/charismatic churches)\n• Amillennialism: The 'millennium' is the current church age, not a future literal period (Reformed, Lutheran, Catholic, Orthodox)\n• Postmillennialism: The church brings about a golden age before Jesus returns (less common today)\n\nTHE RAPTURE: Not all Christians believe in a 'rapture' separate from the Second Coming. Pre-tribulation rapture theology (Left Behind) is mostly a 19th-century American evangelical innovation, not historic Christianity.\n\nHELL: Views range from eternal conscious torment (traditional) to annihilationism (the wicked cease to exist) to universalism (all are eventually saved). N.T. Wright and C.S. Lewis offer nuanced evangelical perspectives.",
    whyItMatters: "Eschatology isn't just futurism — it determines how you engage with the present. If you believe God is making all things new and inviting us to participate, you care about justice, creation care, and beauty now — not as salvation, but as signs of the Kingdom coming. What you think about the end shapes how you live in the middle.",
    keyVerse: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.",
    keyVerseRef: "Revelation 21:4",
    commonMisunderstandings: [
      "The rapture is biblical — the concept of a pre-tribulation rapture is largely a 19th-century American development; most Christians historically have not held this view.",
      "Heaven is spiritual, not physical — the Bible promises bodily resurrection and a NEW EARTH, not an escape from matter into pure spirit.",
      "Christians should focus only on saving souls, not the world — the resurrection and new creation mandate care for all creation, not just evacuation."
    ],
    denominationViews: [
      { name: "Evangelical (dispensational)", view: "Pre-tribulation rapture, premillennial return, literal interpretation of Revelation" },
      { name: "Reformed / Lutheran / Catholic", view: "Amillennialism; no rapture separate from second coming; more symbolic reading of Revelation" },
      { name: "Eastern Orthodox", view: "Strong theosis emphasis; less systematic on details; cosmic renewal as central" },
    ],
    thinkers: ["N.T. Wright", "George Eldon Ladd", "Anthony Hoekema", "Jürgen Moltmann", "C.S. Lewis"],
  },
  {
    id: "sanctification",
    name: "Sanctification",
    category: "Christian Life",
    emoji: "🌱",
    color: "#EC4899",
    difficulty: "Foundational",
    headline: "Sanctification is the ongoing process of becoming more like Jesus after salvation. It's not optional, and it's never complete in this life — but it's real.",
    plainEnglish: "Justification is the moment you're declared righteous (God's verdict). Sanctification is the process of becoming righteous (God's work in you). Both are true; neither replaces the other.\n\nThink of it like this: adoption and growing up. When you trust Christ, you're adopted into God's family — that's complete, settled, irreversible. But then you spend your life growing up into who you are. That growth is sanctification.\n\nSanctification is:\n• By grace — not by willpower alone. The Spirit does the heavy lifting (Phil 2:13)\n• Through means — Scripture, prayer, community, sacraments, spiritual disciplines are how the Spirit works\n• Progressive — you won't arrive fully until glorification\n• Real — transformation is actual, not just moral accounting\n\nWhere traditions differ:\n• Reformed: Sanctification is gradual and never complete in this life\n• Wesleyan: Entire sanctification (a 'second blessing' of full consecration) is possible in this life\n• Pentecostal/Charismatic: Spirit baptism empowers life-transformation\n• Catholic: Sanctification is the gradual infusion of grace, completed in purgatory if necessary",
    whyItMatters: "Without sanctification, salvation becomes merely fire insurance — a get-out-of-hell card with no real life change. The gospel has never been just about forgiveness; it's about re-creation. If someone claims to be saved but there's no trajectory of growth, James 2:14-17 raises a pointed question. At the same time, sanctification is not a ladder you climb to earn God's approval — it's the natural flowering of a life in union with Christ.",
    keyVerse: "Work out your salvation with fear and trembling, for it is God who works in you to will and to act in order to fulfill his good purpose.",
    keyVerseRef: "Philippians 2:12-13",
    commonMisunderstandings: [
      "Once saved, I don't need to work at godliness — NO. Salvation is free; growth requires cooperation with the Spirit.",
      "I'm saved by grace but kept by performance — NO. Grace saves and sustains.",
      "I need to wait for a 'second blessing' before I can really change — the Spirit is fully present from the moment of salvation."
    ],
    denominationViews: [
      { name: "Reformed / Presbyterian", view: "Gradual, never complete in this life; means of grace are primary vehicles" },
      { name: "Wesleyan / Methodist", view: "Entire sanctification — a work of grace that fully consecrates the will — is possible before death" },
      { name: "Pentecostal", view: "Spirit baptism (often evidenced by tongues) empowers transformation in a distinct second work" },
    ],
    thinkers: ["John Owen", "John Wesley", "Dallas Willard", "Sinclair Ferguson", "Richard Foster"],
  }
];

const categories = ["All", "God", "Salvation", "Bible", "Future", "Christian Life"];
const difficulties = ["All", "Foundational", "Intermediate", "Deep Dive"];

const diffColors: Record<string, string> = {
  "Foundational": GREEN,
  "Intermediate": "#F59E0B",
  "Deep Dive": "#EF4444"
};

export default function TheologyPage() {
  const [tab, setTab] = useState<"doctrines" | "compare" | "glossary">("doctrines");
  const [catFilter, setCatFilter] = useState("All");
  const [diffFilter, setDiffFilter] = useState("All");
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);
  const [studiedDocs, setStudiedDocs] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_theology_studied"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [savedDocs, setSavedDocs] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_theology_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });

  useEffect(() => {
    try { localStorage.setItem("vine_theology_studied", JSON.stringify([...studiedDocs])); } catch {}
  }, [studiedDocs]);
  useEffect(() => {
    try { localStorage.setItem("vine_theology_saved", JSON.stringify([...savedDocs])); } catch {}
  }, [savedDocs]);

  const toggleStudied = (id: string) => setStudiedDocs(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const toggleSaved = (id: string) => setSavedDocs(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const filtered = doctrines.filter(d =>
    (catFilter === "All" || d.category === catFilter) &&
    (diffFilter === "All" || d.difficulty === diffFilter)
  );

  const glossaryTerms = [
    { term: "Theism", def: "Belief in a personal God who created and sustains the universe" },
    { term: "Monotheism", def: "Belief in one God (Judaism, Christianity, Islam)" },
    { term: "Incarnation", def: "The eternal Son of God taking on human flesh in Jesus of Nazareth" },
    { term: "Justification", def: "Being declared righteous before God through faith in Christ" },
    { term: "Sanctification", def: "The ongoing process of becoming more like Christ" },
    { term: "Glorification", def: "The final stage of salvation: bodily resurrection and perfection" },
    { term: "Soteriology", def: "The study of salvation (from Greek 'soter' = savior)" },
    { term: "Pneumatology", def: "The study of the Holy Spirit" },
    { term: "Christology", def: "The study of the person and work of Jesus Christ" },
    { term: "Ecclesiology", def: "The study of the church — its nature, structure, and purpose" },
    { term: "Eschatology", def: "The study of last things: return of Christ, resurrection, judgment, new creation" },
    { term: "Hermeneutics", def: "The science and art of biblical interpretation" },
    { term: "Exegesis", def: "Drawing out the meaning of a text in its original context" },
    { term: "Eisegesis", def: "Reading meaning INTO a text (what to avoid)" },
    { term: "Propitiation", def: "Satisfying God's just wrath against sin (see Rom 3:25)" },
    { term: "Expiation", def: "The removal/cleansing of sin's guilt" },
    { term: "Imputation", def: "The act of crediting something to someone's account" },
    { term: "Infallibility", def: "The Bible will not fail in its ultimate purpose and central teachings" },
    { term: "Inerrancy", def: "The Bible is without error in all that it affirms" },
    { term: "Imago Dei", def: "Image of God — the status of humans as bearers of God's image (Gen 1:27)" },
    { term: "Kenosis", def: "Christ 'emptying himself' (Phil 2:7) by taking on human limitations" },
    { term: "Hypostatic Union", def: "Jesus is one person with two natures — fully God, fully human" },
    { term: "Theosis", def: "Participation in God's divine nature (2 Pet 1:4) — central in Orthodox theology" },
    { term: "Antinomianism", def: "The false view that grace eliminates any moral obligation" },
  ];

  const comparisonDenominations = [
    {
      name: "Roman Catholic",
      color: "#F59E0B",
      salvation: "Faith + works + sacraments; completed in purgatory if needed",
      bible: "Scripture + Tradition; interpreted by Magisterium",
      church: "Hierarchical; Pope as head; apostolic succession essential",
      sacraments: "7 sacraments; Eucharist is real presence (transubstantiation)"
    },
    {
      name: "Eastern Orthodox",
      color: "#EC4899",
      salvation: "Theosis — participation in divine life; emphasis on ascent",
      bible: "Scripture + Tradition; Council decisions; less juridical than Catholics",
      church: "Conciliar; patriarchs; no single earthly head",
      sacraments: "7 sacraments (called 'mysteries'); real presence affirmed"
    },
    {
      name: "Reformed (Presbyterian)",
      color: PURPLE,
      salvation: "Grace alone, faith alone, in Christ alone; unconditional election",
      bible: "Scripture alone is supreme authority; perspicuous on salvation",
      church: "Elder-governed; presbyterian polity",
      sacraments: "2 sacraments; spiritual presence in communion (not physical)"
    },
    {
      name: "Evangelical Baptist",
      color: "#3B82F6",
      salvation: "Grace through faith; believer's decision; eternal security",
      bible: "Scripture alone; inerrant in original autographs",
      church: "Congregational; believer's church; no infant baptism",
      sacraments: "2 ordinances (not sacraments): baptism (believer's) and Lord's Supper (memorial)"
    },
    {
      name: "Pentecostal / Charismatic",
      color: GREEN,
      salvation: "Grace through faith; Spirit baptism as a second distinct experience",
      bible: "Scripture inerrant; ongoing prophecy and revelation possible",
      church: "Apostolic/prophetic leadership common; revival culture",
      sacraments: "2 ordinances; emphasis on physical healing and miracles"
    }
  ];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "inherit" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 16px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(107,79,187,0.12)", border: "1px solid rgba(107,79,187,0.25)", borderRadius: 20, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ fontSize: 16 }}>📚</span>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: PURPLE, textTransform: "uppercase" }}>Theology in Plain English</span>
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, lineHeight: 1.1 }}>
            What Christians{" "}
            <span style={{ background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Actually Believe
            </span>
          </h1>
          <p style={{ color: MUTED, fontSize: 17, maxWidth: 580, margin: "0 auto 24px" }}>
            Classic Christian doctrines explained without jargon, with honest attention to where Christians agree and disagree. Theology is not the property of experts.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, maxWidth: 420, margin: "0 auto" }}>
            {[
              { v: studiedDocs.size, label: "Studied", color: GREEN },
              { v: savedDocs.size, label: "Saved", color: PURPLE },
              { v: doctrines.length, label: "Doctrines", color: "#3B82F6" },
            ].map(s => (
              <div key={s.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "12px 8px", textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: s.color }}>{s.v}</div>
                <div style={{ fontSize: 11, color: MUTED }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, borderBottom: `1px solid ${BORDER}` }}>
          {[
            { id: "doctrines", label: "📋 Doctrines" },
            { id: "compare", label: "⚖️ Traditions Compared" },
            { id: "glossary", label: "📖 Glossary" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id as typeof tab)}
              style={{ padding: "10px 20px", borderRadius: "10px 10px 0 0", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 14, background: tab === t.id ? CARD : "transparent", color: tab === t.id ? TEXT : MUTED, borderBottom: tab === t.id ? `2px solid ${GREEN}` : "2px solid transparent" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* DOCTRINES TAB */}
        {tab === "doctrines" && (
          <div>
            {/* Filters */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {categories.map(c => (
                  <button key={c} onClick={() => setCatFilter(c)}
                    style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${catFilter === c ? PURPLE : BORDER}`, background: catFilter === c ? "rgba(107,79,187,0.15)" : "transparent", color: catFilter === c ? TEXT : MUTED, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                    {c}
                  </button>
                ))}
              </div>
              <div style={{ width: "100%", height: 1, background: BORDER }} />
              <div style={{ display: "flex", gap: 6 }}>
                {difficulties.map(d => (
                  <button key={d} onClick={() => setDiffFilter(d)}
                    style={{ padding: "5px 12px", borderRadius: 20, border: `1px solid ${diffFilter === d ? (diffColors[d] || BORDER) : BORDER}`, background: diffFilter === d ? `${diffColors[d] || "#3B82F6"}15` : "transparent", color: diffFilter === d ? diffColors[d] || TEXT : MUTED, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {filtered.map(doc => {
                const isExp = expandedDoc === doc.id;
                return (
                  <div key={doc.id} style={{ background: CARD, border: `1px solid ${isExp ? doc.color + "40" : BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                    <div style={{ padding: "20px 24px" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                        <div style={{ display: "flex", gap: 14, flex: 1 }}>
                          <span style={{ fontSize: 26, flexShrink: 0 }}>{doc.emoji}</span>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
                              <h3 style={{ fontSize: 18, fontWeight: 800, margin: 0 }}>{doc.name}</h3>
                              <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: `${doc.color}15`, color: doc.color, fontWeight: 700 }}>{doc.category}</span>
                              <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: `${diffColors[doc.difficulty]}15`, color: diffColors[doc.difficulty], fontWeight: 700 }}>{doc.difficulty}</span>
                              {studiedDocs.has(doc.id) && <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: "rgba(0,255,136,0.1)", color: GREEN, fontWeight: 700 }}>✓ Studied</span>}
                            </div>
                            <p style={{ fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.6 }}>{doc.headline}</p>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                          <button onClick={() => toggleSaved(doc.id)}
                            style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${savedDocs.has(doc.id) ? PURPLE : BORDER}`, background: savedDocs.has(doc.id) ? "rgba(107,79,187,0.15)" : "transparent", cursor: "pointer", fontSize: 13, color: savedDocs.has(doc.id) ? PURPLE : MUTED }}>
                            {savedDocs.has(doc.id) ? "🔖" : "📌"}
                          </button>
                          <button onClick={() => setExpandedDoc(isExp ? null : doc.id)}
                            style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${doc.color}40`, background: `${doc.color}10`, color: doc.color, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                            {isExp ? "Close" : "Study"}
                          </button>
                        </div>
                      </div>
                    </div>

                    {isExp && (
                      <div style={{ borderTop: `1px solid ${BORDER}`, padding: "24px" }}>
                        {/* Plain English */}
                        <div style={{ marginBottom: 24 }}>
                          <h4 style={{ fontSize: 13, fontWeight: 800, color: doc.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>In Plain English</h4>
                          {doc.plainEnglish.split("\n").map((p, i) => (
                            <p key={i} style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 8 }}>{p}</p>
                          ))}
                        </div>

                        {/* Key Verse */}
                        <div style={{ background: `${doc.color}08`, border: `1px solid ${doc.color}25`, borderRadius: 12, padding: "16px", marginBottom: 24 }}>
                          <p style={{ fontSize: 14, fontStyle: "italic", color: "#C0C0D8", lineHeight: 1.7, margin: "0 0 8px" }}>"{doc.keyVerse}"</p>
                          <p style={{ fontSize: 12, fontWeight: 700, color: doc.color, margin: 0 }}>— {doc.keyVerseRef}</p>
                        </div>

                        {/* Why It Matters */}
                        <div style={{ marginBottom: 24 }}>
                          <h4 style={{ fontSize: 13, fontWeight: 800, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Why It Matters</h4>
                          <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>{doc.whyItMatters}</p>
                        </div>

                        {/* Misunderstandings */}
                        <div style={{ marginBottom: 24 }}>
                          <h4 style={{ fontSize: 13, fontWeight: 800, color: "#EF4444", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Common Misunderstandings</h4>
                          {doc.commonMisunderstandings.map((m, i) => (
                            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                              <span style={{ color: "#EF4444", fontWeight: 900, flexShrink: 0 }}>✗</span>
                              <p style={{ fontSize: 14, color: "#C0C0D8", margin: 0, lineHeight: 1.6 }}>{m}</p>
                            </div>
                          ))}
                        </div>

                        {/* Denomination Views */}
                        <div style={{ marginBottom: 20 }}>
                          <h4 style={{ fontSize: 13, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>How Traditions Differ</h4>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            {doc.denominationViews.map(dv => (
                              <div key={dv.name} style={{ display: "flex", gap: 12, padding: "10px 14px", background: "rgba(255,255,255,0.02)", borderRadius: 10 }}>
                                <span style={{ fontSize: 12, fontWeight: 800, color: PURPLE, flexShrink: 0, minWidth: 160 }}>{dv.name}</span>
                                <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.6 }}>{dv.view}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Thinkers & Action */}
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {doc.thinkers.map(t => (
                              <span key={t} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(107,79,187,0.1)", color: PURPLE, fontWeight: 600 }}>👤 {t}</span>
                            ))}
                          </div>
                          <button onClick={() => toggleStudied(doc.id)}
                            style={{ padding: "8px 18px", borderRadius: 10, border: `1px solid ${studiedDocs.has(doc.id) ? GREEN : BORDER}`, background: studiedDocs.has(doc.id) ? "rgba(0,255,136,0.1)" : "transparent", color: studiedDocs.has(doc.id) ? GREEN : MUTED, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                            {studiedDocs.has(doc.id) ? "✓ Studied" : "Mark as Studied"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* COMPARE TAB */}
        {tab === "compare" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              Christians agree on a great deal — the Trinity, the Incarnation, the resurrection, grace through faith, the authority of Scripture. Where we disagree is often in the details of how these doctrines are applied and structured.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${BORDER}` }}>
                    <th style={{ textAlign: "left", padding: "12px 16px", color: MUTED, fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: 1 }}>Topic</th>
                    {comparisonDenominations.map(d => (
                      <th key={d.name} style={{ textAlign: "left", padding: "12px 16px", fontWeight: 800, color: d.color, fontSize: 12 }}>{d.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Salvation", key: "salvation" },
                    { label: "Bible", key: "bible" },
                    { label: "Church", key: "church" },
                    { label: "Sacraments", key: "sacraments" },
                  ].map((row, ri) => (
                    <tr key={row.label} style={{ borderBottom: `1px solid ${BORDER}`, background: ri % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                      <td style={{ padding: "14px 16px", fontWeight: 800, color: TEXT, verticalAlign: "top" }}>{row.label}</td>
                      {comparisonDenominations.map(d => (
                        <td key={d.name} style={{ padding: "14px 16px", color: MUTED, verticalAlign: "top", lineHeight: 1.6 }}>
                          {d[row.key as keyof typeof d]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: 28, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "24px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, color: GREEN }}>What All Christians Agree On</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
                {[
                  "One God, Creator of all",
                  "The Trinity: Father, Son, Spirit",
                  "Jesus is fully God and fully human",
                  "The death and resurrection of Jesus",
                  "Salvation through faith in Christ",
                  "The authority of Scripture",
                  "The Church as the Body of Christ",
                  "The physical return of Jesus",
                  "Bodily resurrection of the dead",
                  "The New Creation / eternal life",
                ].map(item => (
                  <div key={item} style={{ display: "flex", gap: 8, padding: "10px 14px", background: "rgba(0,255,136,0.04)", borderRadius: 10, border: "1px solid rgba(0,255,136,0.12)" }}>
                    <span style={{ color: GREEN, fontWeight: 900 }}>✓</span>
                    <p style={{ fontSize: 13, color: "#C0C0D8", margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* GLOSSARY TAB */}
        {tab === "glossary" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              Theological vocabulary — defined simply. Knowing the words unlocks the tradition.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10 }}>
              {glossaryTerms.map(term => (
                <div key={term.term} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "14px 18px" }}>
                  <p style={{ fontSize: 14, fontWeight: 800, color: PURPLE, margin: "0 0 6px" }}>{term.term}</p>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.6 }}>{term.def}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
