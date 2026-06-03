"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Doctrine = {
  id: string; name: string; category: string; emoji: string; color: string;
  headline: string; plainEnglish: string; whyItMatters: string; keyVerse: string; keyVerseRef: string;
  commonMisunderstandings: string[]; denominationViews: { name: string; view: string }[];
  thinkers: string[]; difficulty: "Foundational" | "Intermediate" | "Deep Dive";
};
type Council = { id: string; name: string; year: string; location: string; issue: string; decision: string; creed: string; significance: string; };
type Creed = { id: string; name: string; year: string; origin: string; fullText: string; keyLine: string; explanation: string; };
type TheoVideo = { id: string; preacher: string; title: string; description: string; videoId: string; };
type Tab = "doctrines" | "councils" | "creeds" | "videos";

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
    thinkers: ["N.T. Wright", "George Eldon Ladd", "Anthony Hoekema", "Jurgen Moltmann", "C.S. Lewis"],
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

const THEO_COUNCILS: Council[] = [
  {
    id: "nicaea",
    name: "Council of Nicaea",
    year: "325 AD",
    location: "Nicaea (modern Turkey)",
    issue: "Is the Son of the same substance as the Father, or a created being subordinate to him?",
    decision: "Homoousios — the Son is of the same substance (essence) as the Father. Arianism condemned.",
    creed: "Nicene Creed (original form)",
    significance: "The first great ecumenical council; settled the doctrine of the Trinity for all subsequent Christian theology. Without Nicaea, Christianity might have become a form of ethical monotheism rather than Trinitarian faith."
  },
  {
    id: "constantinople",
    name: "Council of Constantinople",
    year: "381 AD",
    location: "Constantinople (modern Istanbul)",
    issue: "Is the Holy Spirit truly divine, or a lesser divine being subordinate to Father and Son?",
    decision: "The Holy Spirit is fully divine, co-equal with Father and Son. The Pneumatomachians (Spirit-fighters) condemned.",
    creed: "Nicene-Constantinopolitan Creed — the full Trinitarian formula recited in churches today",
    significance: "Completed the Trinitarian formula still confessed in the Nicene Creed. Established that all three persons of the Trinity are fully and equally divine — the theological foundation for Christian worship."
  },
  {
    id: "ephesus",
    name: "Council of Ephesus",
    year: "431 AD",
    location: "Ephesus (modern Turkey)",
    issue: "Are Christ's two natures so separate that Mary should only be called 'Christotokos' (Christ-bearer), not 'Theotokos' (God-bearer)?",
    decision: "Nestorius condemned. Mary affirmed as Theotokos. The unity of Christ's person — one person, not two — upheld.",
    creed: "No new creed; reaffirmed Nicaea",
    significance: "Upheld the unity of Christ's person against Nestorian division. If Christ were two persons, his death would not be the death of God incarnate — and the atonement would be fundamentally different."
  },
  {
    id: "chalcedon",
    name: "Council of Chalcedon",
    year: "451 AD",
    location: "Chalcedon (near Constantinople)",
    issue: "Does Christ have one nature (divine absorbing human — Monophysitism) or two complete natures?",
    decision: "Two natures, one person — fully divine and fully human, without confusion, mixture, separation, or division. The Chalcedonian Definition.",
    creed: "Chalcedonian Definition — 'one and the same Son... perfect in divinity and perfect in humanity'",
    significance: "The most precise Christological statement in church history. The four negative adverbs — without confusion, without change, without division, without separation — remain the standard for orthodox Christology across Catholic, Orthodox, and Protestant traditions."
  },
  {
    id: "worms",
    name: "Diet of Worms",
    year: "1521 AD",
    location: "Worms, Germany",
    issue: "Are Luther's writings heresy requiring recantation, or legitimate reform grounded in Scripture?",
    decision: "Luther refused to recant unless shown by Scripture or plain reason that he was wrong. The Emperor declared him an outlaw. Luther's famous stand: 'Here I stand; I can do no other.'",
    creed: "No creed; led directly to the Augsburg Confession (1530)",
    significance: "The pivotal moment of the Protestant Reformation. Luther's refusal established the principle of Sola Scriptura in practice — that Scripture, not papal authority, is the supreme arbiter of Christian doctrine."
  },
  {
    id: "trent",
    name: "Council of Trent",
    year: "1545-1563 AD",
    location: "Trent (northern Italy)",
    issue: "How should the Catholic Church respond to Protestant Reformation claims about Scripture, justification, and the sacraments?",
    decision: "Affirmed Scripture and Tradition as co-equal sources; condemned the Lutheran doctrine of justification by faith alone; confirmed seven sacraments; standardized the Mass.",
    creed: "Tridentine decrees — the basis of Catholic doctrine for four centuries",
    significance: "Defined Catholic identity in contrast to Protestantism in terms that held for 400 years. The Council of Trent made reconciliation between Rome and the Reformers impossible in the 16th century, but also produced a reformed and more disciplined Catholic Church."
  }
];

const THEO_CREEDS: Creed[] = [
  {
    id: "apostles",
    name: "Apostles' Creed",
    year: "c. 140 AD",
    origin: "Developed from early baptismal confessions in Rome; reached its current form by the 7th century. Used in Western churches for catechesis and baptism.",
    fullText: "I believe in God, the Father Almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father Almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.",
    keyLine: "I believe in God, the Father Almighty, Creator of heaven and earth",
    explanation: "The Apostles' Creed is the oldest summary of Christian faith still in universal use. It moves through the three persons of the Trinity — God the Father (Creator), God the Son (the narrative of Christ's life, death, and resurrection), and God the Holy Spirit (the church, forgiveness, resurrection). It is not a philosophical treatise but a narrative confession — faith summarized as a story."
  },
  {
    id: "nicene",
    name: "Nicene Creed",
    year: "325/381 AD",
    origin: "Formulated at the Council of Nicaea (325) and expanded at Constantinople (381) to address Arian and Pneumatomachian heresies. Used in the Eucharist across Catholic, Orthodox, and most Protestant traditions.",
    fullText: "We believe in one God, the Father Almighty, maker of heaven and earth, of all things visible and invisible. And in one Lord Jesus Christ, the only Son of God, eternally begotten of the Father, God from God, Light from Light, true God from true God, begotten, not made, of one Being with the Father; through him all things were made. For us and for our salvation he came down from heaven, was incarnate of the Holy Spirit and the Virgin Mary and became truly human. For our sake he was crucified under Pontius Pilate; he suffered death and was buried. On the third day he rose again in accordance with the Scriptures; he ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead, and his kingdom will have no end. And we believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is worshiped and glorified, who has spoken through the prophets. We believe in one holy catholic and apostolic church. We acknowledge one baptism for the forgiveness of sins. We look for the resurrection of the dead, and the life of the world to come. Amen.",
    keyLine: "of one Being with the Father; through him all things were made",
    explanation: "The Nicene Creed is the most universally accepted statement of Christian faith. Written to refute Arianism, it uses the philosophical term homoousios ('of one Being') to assert that Jesus is not a lesser divine being but fully and truly God. The phrase 'eternally begotten, not made' is the theological heart: Jesus was not created but has always been the eternal Son."
  },
  {
    id: "chalcedonian",
    name: "Chalcedonian Definition",
    year: "451 AD",
    origin: "Formulated at the Council of Chalcedon to resolve the Monophysite controversy. Accepted by Catholic, Orthodox (with some exceptions), and Protestant churches as the standard of orthodox Christology.",
    fullText: "We confess one and the same Son, our Lord Jesus Christ, the same perfect in divinity and perfect in humanity, the same truly God and truly human, consisting of a rational soul and a body, of one being with the Father as regards his divinity, and the same of one being with us as regards his humanity, like us in all respects except for sin; begotten before the ages from the Father as regards his divinity, and in the last days the same for us and for our salvation from Mary, the virgin God-bearer, as regards his humanity; one and the same Christ, Son, Lord, only-begotten, acknowledged in two natures which undergo no confusion, no change, no division, no separation; at no point was the difference between the natures taken away through the union, but rather the property of both natures is preserved and comes together into a single person and a single subsistent being.",
    keyLine: "acknowledged in two natures which undergo no confusion, no change, no division, no separation",
    explanation: "The Chalcedonian Definition is the most precise Christological statement in Christian history. Its four negative adverbs — no confusion, no change, no division, no separation — rule out the two major heresies: Monophysitism (which confuses or mixes the natures) and Nestorianism (which divides them into two persons). The result is a paradox that resists reduction: Jesus is fully God and fully human, one person, forever."
  },
  {
    id: "athanasian",
    name: "Athanasian Creed",
    year: "c. 500 AD",
    origin: "Not actually written by Athanasius; likely composed in southern Gaul in the late 5th century. Known for its precise Trinitarian and Christological formulations and its stark language about salvation.",
    fullText: "Whoever desires to be saved must, above all, hold the Catholic faith. Whoever does not keep it whole and unbroken will doubtless perish eternally. Now this is the Catholic faith: that we worship one God in Trinity and the Trinity in Unity, neither confusing the persons nor dividing the divine being. For the Father is one person, the Son is another, and the Holy Spirit is still another. But the divinity of the Father, Son, and Holy Spirit is one: equal in glory, coeternal in majesty... Such as the Father is, such is the Son, and such is the Holy Spirit... The Father is not made, nor created, nor begotten by anyone. The Son is not made, nor created, but begotten of the Father alone. The Holy Spirit is not made, nor created, nor begotten, but proceeds from the Father and the Son... This is the Trinity: Father, Son, and Holy Spirit — one God.",
    keyLine: "We worship one God in Trinity and the Trinity in Unity, neither confusing the persons nor dividing the divine being",
    explanation: "The Athanasian Creed is the most theologically precise of the three historic creeds. Its distinctive contribution is its relentless parallelism: it works through each person of the Trinity in turn, carefully asserting what is common to all three (one divine nature) and what is distinct to each (the Father is unbegotten; the Son is eternally begotten; the Spirit eternally proceeds). Its opening and closing warnings about salvation have made it controversial, but its Trinitarian formulations are considered among the most precise ever produced."
  },
  {
    id: "westminster",
    name: "Westminster Confession of Faith, Chapter 1",
    year: "1646",
    origin: "Produced by the Westminster Assembly (1643-1649), a gathering of English and Scottish theologians. Chapter 1 addresses the doctrine of Scripture — the foundational question of Reformed theology.",
    fullText: "Although the light of nature, and the works of creation and providence, do so far manifest the goodness, wisdom, and power of God, as to leave men inexcusable; yet are they not sufficient to give that knowledge of God, and of his will, which is necessary unto salvation; therefore it pleased the Lord, at sundry times, and in divers manners, to reveal himself, and to declare that his will unto his church; and afterwards for the better preserving and propagating of the truth, and for the more sure establishment and comfort of the church against the corruption of the flesh, and the malice of Satan and of the world, to commit the same wholly unto writing; which maketh the Holy Scripture to be most necessary... The authority of the Holy Scripture, for which it ought to be believed and obeyed, dependeth not upon the testimony of any man or church, but wholly upon God (who is truth itself), the author thereof; and therefore it is to be received, because it is the Word of God... The whole counsel of God, concerning all things necessary for his own glory, man's salvation, faith, and life, is either expressly set down in Scripture, or by good and necessary consequence may be deduced from Scripture.",
    keyLine: "The authority of the Holy Scripture... dependeth not upon the testimony of any man or church, but wholly upon God, the author thereof",
    explanation: "Westminster Confession Chapter 1 is the most thorough and influential Reformed statement on Scripture ever produced. It addresses the necessity of Scripture (natural revelation is insufficient for salvation), the inspiration and canonicity of the Bible, its authority (which rests on God alone, not church tradition), its clarity (perspicuity — ordinary people can understand the saving message), and its sufficiency (Scripture contains everything necessary for faith and life). It has been the standard for Presbyterian and Reformed confessional theology for nearly 400 years."
  }
];

const THEOLOGY_VIDEOS: TheoVideo[] = [
  {
    id: "keller-google",
    preacher: "Tim Keller",
    title: "The Reason for God",
    description: "Keller makes the intellectual case for Christian theism before a Google audience, covering doubt, evil, and justice with characteristic clarity and cultural engagement.",
    videoId: "Kxup3OS5ZhQ"
  },
  {
    id: "sproul-holiness",
    preacher: "R.C. Sproul",
    title: "The Holiness of God",
    description: "Sproul's landmark lecture on the attribute that distinguishes God from everything else — the foundation of all Christian theology and the lost note of modern Christianity.",
    videoId: "v6xk8e7gdMA"
  },
  {
    id: "sproul-trauma",
    preacher: "R.C. Sproul",
    title: "The Trauma of Holiness",
    description: "Lecture 2 from Sproul's series — why encountering the holy God undoes and remakes the human person. The pattern of Isaiah 6 as the shape of all genuine conversion.",
    videoId: "7CBgp74UwbU"
  },
  {
    id: "baucham-supremacy",
    preacher: "Voddie Baucham",
    title: "The Supremacy of Christ and Truth",
    description: "A rigorous theological defense of Christ's exclusive supremacy delivered at the 2006 Desiring God Conference — addressing pluralism, postmodernism, and the claims of the gospel.",
    videoId: "by8ykv7-A3c"
  },
  {
    id: "chan-spirit",
    preacher: "Francis Chan",
    title: "Forgotten God: Theology of the Holy Spirit",
    description: "Chan's accessible teaching on the person and work of the Holy Spirit in the Christian life — the most neglected person of the Trinity in contemporary evangelical churches.",
    videoId: "SCUEicqda1g"
  },
  {
    id: "piper-waste",
    preacher: "John Piper",
    title: "Don't Waste Your Life",
    description: "Piper roots radical living in deep theology: because God is God and human life is brief, there is a purpose that demands all of us — and anything less is a wasted life.",
    videoId: "JHdB1dYAteA"
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
  const [activeTab, setActiveTab] = useState<Tab>("doctrines");
  const [catFilter, setCatFilter] = useState("All");
  const [diffFilter, setDiffFilter] = useState("All");
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);
  const [selectedCreed, setSelectedCreed] = useState<string>("apostles");
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

  const activeCreed = THEO_CREEDS.find(c => c.id === selectedCreed)!;

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "inherit" }}>
      <Navbar />
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

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28, padding: "6px", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, flexWrap: "wrap" }}>
          {(["doctrines", "councils", "creeds", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "doctrines" ? "Doctrines" : t === "councils" ? "Historic Councils" : t === "creeds" ? "Creeds & Confessions" : "Watch & Learn"}
            </button>
          ))}
        </div>

        {/* DOCTRINES TAB */}
        {activeTab === "doctrines" && (
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
                              {studiedDocs.has(doc.id) && <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: "rgba(58,125,86,0.1)", color: GREEN, fontWeight: 700 }}>&#x2713; Studied</span>}
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
                        <div style={{ marginBottom: 24 }}>
                          <h4 style={{ fontSize: 13, fontWeight: 800, color: doc.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>In Plain English</h4>
                          {doc.plainEnglish.split("\n").map((p, i) => (
                            <p key={i} style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 8 }}>{p}</p>
                          ))}
                        </div>

                        <div style={{ background: `${doc.color}08`, border: `1px solid ${doc.color}25`, borderRadius: 12, padding: "16px", marginBottom: 24 }}>
                          <p style={{ fontSize: 14, fontStyle: "italic", color: "#C0C0D8", lineHeight: 1.7, margin: "0 0 8px" }}>&ldquo;{doc.keyVerse}&rdquo;</p>
                          <p style={{ fontSize: 12, fontWeight: 700, color: doc.color, margin: 0 }}>&mdash; {doc.keyVerseRef}</p>
                        </div>

                        <div style={{ marginBottom: 24 }}>
                          <h4 style={{ fontSize: 13, fontWeight: 800, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Why It Matters</h4>
                          <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>{doc.whyItMatters}</p>
                        </div>

                        <div style={{ marginBottom: 24 }}>
                          <h4 style={{ fontSize: 13, fontWeight: 800, color: "#EF4444", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Common Misunderstandings</h4>
                          {doc.commonMisunderstandings.map((m, i) => (
                            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                              <span style={{ color: "#EF4444", fontWeight: 900, flexShrink: 0 }}>&#x2717;</span>
                              <p style={{ fontSize: 14, color: "#C0C0D8", margin: 0, lineHeight: 1.6 }}>{m}</p>
                            </div>
                          ))}
                        </div>

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

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {doc.thinkers.map(t => (
                              <span key={t} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(107,79,187,0.1)", color: PURPLE, fontWeight: 600 }}>&#x1F464; {t}</span>
                            ))}
                          </div>
                          <button onClick={() => toggleStudied(doc.id)}
                            style={{ padding: "8px 18px", borderRadius: 10, border: `1px solid ${studiedDocs.has(doc.id) ? GREEN : BORDER}`, background: studiedDocs.has(doc.id) ? "rgba(58,125,86,0.1)" : "transparent", color: studiedDocs.has(doc.id) ? GREEN : MUTED, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                            {studiedDocs.has(doc.id) ? "&#x2713; Studied" : "Mark as Studied"}
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

        {/* COUNCILS TAB */}
        {activeTab === "councils" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              The great councils of church history were not abstract academic exercises &mdash; they were moments of crisis in which the church had to decide what it actually believed about God, Christ, and salvation. These decisions still shape Christianity today.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {THEO_COUNCILS.map((c, idx) => (
                <div key={c.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <div style={{ padding: "22px 24px" }}>
                    <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
                      <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 12, background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, color: PURPLE }}>
                        {idx + 1}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginBottom: 6 }}>
                          <h3 style={{ fontSize: 18, fontWeight: 900, margin: 0, color: TEXT }}>{c.name}</h3>
                          <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: `${GREEN}15`, color: GREEN, fontWeight: 700 }}>{c.year}</span>
                          <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: `${PURPLE}15`, color: PURPLE, fontWeight: 700 }}>{c.location}</span>
                        </div>
                        <p style={{ fontSize: 14, color: MUTED, margin: 0, fontStyle: "italic", lineHeight: 1.5 }}>&ldquo;{c.issue}&rdquo;</p>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
                      <div style={{ background: "rgba(58,125,86,0.05)", border: "1px solid rgba(58,125,86,0.15)", borderRadius: 10, padding: "12px 14px" }}>
                        <p style={{ fontSize: 11, fontWeight: 800, color: GREEN, textTransform: "uppercase", letterSpacing: 1, margin: "0 0 6px" }}>Decision</p>
                        <p style={{ fontSize: 13, color: "#C0C0D8", margin: 0, lineHeight: 1.6 }}>{c.decision}</p>
                      </div>
                      <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: "12px 14px" }}>
                        <p style={{ fontSize: 11, fontWeight: 800, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, margin: "0 0 6px" }}>Resulting Creed</p>
                        <p style={{ fontSize: 13, color: "#C0C0D8", margin: 0, lineHeight: 1.6 }}>{c.creed}</p>
                      </div>
                    </div>
                    <div style={{ marginTop: 12, background: "rgba(255,255,255,0.02)", borderRadius: 10, padding: "12px 14px" }}>
                      <p style={{ fontSize: 11, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, margin: "0 0 6px" }}>Why It Matters</p>
                      <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.6 }}>{c.significance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CREEDS TAB */}
        {activeTab === "creeds" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              The creeds are the church&rsquo;s most careful and durable attempts to summarize what Scripture teaches. They were written in controversy, tested in persecution, and refined across centuries &mdash; they deserve to be known and prayed.
            </p>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {THEO_CREEDS.map(c => (
                <button key={c.id} onClick={() => setSelectedCreed(c.id)}
                  style={{ padding: "8px 16px", borderRadius: 10, border: `1px solid ${selectedCreed === c.id ? PURPLE : BORDER}`, background: selectedCreed === c.id ? `${PURPLE}20` : "transparent", color: selectedCreed === c.id ? TEXT : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {c.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "28px" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 20, flexWrap: "wrap" }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 900, color: TEXT, margin: "0 0 4px" }}>{activeCreed.name}</h2>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: `${GREEN}15`, color: GREEN, fontWeight: 700 }}>{activeCreed.year}</span>
                  </div>
                </div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px", marginBottom: 20 }}>
                <p style={{ fontSize: 12, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, margin: "0 0 8px" }}>Origin</p>
                <p style={{ fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.6 }}>{activeCreed.origin}</p>
              </div>
              <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                <p style={{ fontSize: 11, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, margin: "0 0 8px" }}>Key Line</p>
                <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{activeCreed.keyLine}&rdquo;</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px", marginBottom: 20 }}>
                <p style={{ fontSize: 12, fontWeight: 800, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, margin: "0 0 10px" }}>Full Text</p>
                <p style={{ fontSize: 14, color: "#C0C0D8", margin: 0, lineHeight: 1.9, fontStyle: "italic" }}>{activeCreed.fullText}</p>
              </div>
              <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}25`, borderRadius: 10, padding: "16px 18px" }}>
                <p style={{ fontSize: 12, fontWeight: 800, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, margin: "0 0 10px" }}>What It Addresses &amp; Why It Matters</p>
                <p style={{ fontSize: 14, color: TEXT, margin: 0, lineHeight: 1.7 }}>{activeCreed.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              These lectures and sermons represent some of the finest theological teaching available. Each addresses a different dimension of Christian doctrine &mdash; not abstract speculation, but truth that transforms.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 20 }}>
              {THEOLOGY_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <div style={{ padding: "20px 20px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: 20, background: PURPLE, color: "#fff", fontWeight: 700 }}>{v.preacher}</span>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 800, margin: "0 0 10px", color: TEXT }}>{v.title}</h3>
                    <p style={{ fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.6 }}>{v.description}</p>
                  </div>
                  <div style={{ padding: "0 20px 20px" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", borderRadius: 8 }}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
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
