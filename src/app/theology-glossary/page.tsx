"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

interface Term {
  id: string;
  term: string;
  pronunciation?: string;
  category: string;
  level: "Basic" | "Intermediate" | "Advanced";
  definition: string;
  expanded: string;
  keyVerse?: string;
  keyVerseRef?: string;
  relatedTerms: string[];
  commonMisconception?: string;
  whyItMatters: string;
}

const terms: Term[] = [
  { id: "t1", term: "Justification", pronunciation: "jus-tih-fih-KAY-shun", category: "Salvation", level: "Intermediate", definition: "The legal declaration by God that a sinner is righteous, based on the finished work of Christ.", expanded: "Justification is forensic — it is a legal verdict, not a moral transformation. It answers the question: 'How can a holy God declare an unholy person righteous?' The answer is imputation: Christ's perfect righteousness is credited to the believer's account, and the believer's sin is credited to Christ's account at the cross. This is sometimes called the 'great exchange.' Justification happens at the moment of saving faith and is entirely complete — it cannot be added to or taken away.", keyVerse: "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ.", keyVerseRef: "Romans 5:1", relatedTerms: ["Sanctification", "Imputation", "Righteousness", "Faith", "Salvation"], commonMisconception: "Confusing justification (legal standing) with sanctification (moral transformation). Justification is instantaneous and complete; sanctification is ongoing and progressive.", whyItMatters: "Understanding justification means you're not trying to earn God's acceptance — you already have it, fully, in Christ. This changes everything about how you relate to God, yourself, and others." },
  { id: "t2", term: "Sanctification", pronunciation: "sank-tih-fih-KAY-shun", category: "Salvation", level: "Intermediate", definition: "The ongoing process of being made holy — growing more like Christ in character, thought, and action.", expanded: "Unlike justification (which is instant and complete), sanctification is progressive. It involves the Holy Spirit's work in the believer over time, cultivating the fruit of the Spirit (Galatians 5:22-23) and conforming the believer to the image of Christ (Romans 8:29). Sanctification involves both God's action and human cooperation — 'work out your salvation with fear and trembling, for it is God who works in you.' It is complete only at glorification (death or Christ's return).", keyVerse: "And we all, who with unveiled faces contemplate the Lord's glory, are being transformed into his image with ever-increasing glory.", keyVerseRef: "2 Corinthians 3:18", relatedTerms: ["Justification", "Glorification", "Holiness", "Spirit", "Transformation"], whyItMatters: "Sanctification is the explanation for why the Christian life requires ongoing effort, discipline, and dependence on the Spirit — not to earn favor, but because you've been made new and are being made more new." },
  { id: "t3", term: "Atonement", pronunciation: "ah-TONE-ment", category: "Christ", level: "Basic", definition: "The reconciliation between God and humanity achieved through the death of Jesus Christ.", expanded: "Atonement means 'at-one-ment' — the restoration of relationship between estranged parties. Several biblical models illuminate different aspects: Penal Substitution (Christ bore the penalty we deserved), Ransom (Christ's death as a ransom payment), Moral Influence (Christ's death demonstrating God's love), Christus Victor (Christ's death defeating sin and death). Most evangelical theologians hold Penal Substitution as the central model, while recognizing the others as legitimate biblical themes.", keyVerse: "God presented Christ as a sacrifice of atonement, through the shedding of his blood — to be received by faith.", keyVerseRef: "Romans 3:25", relatedTerms: ["Propitiation", "Reconciliation", "Substitution", "Cross", "Redemption"], commonMisconception: "That atonement was God punishing an innocent third party. In orthodox Trinitarian theology, it is the second person of the Trinity voluntarily taking on human nature and offering Himself — God reconciling the world to Himself.", whyItMatters: "The atonement is the heart of the Gospel. Every other Christian doctrine orbits around it. How you understand the atonement shapes your view of God, sin, salvation, and ethics." },
  { id: "t4", term: "Grace", category: "Salvation", level: "Basic", definition: "The unmerited, undeserved favor of God toward sinners — the foundation of salvation.", expanded: "Grace (Hebrew: חֵן, hen; Greek: χάρις, charis) is not simply kindness or leniency. It is the free, sovereign, and unearned bestowal of God's love, forgiveness, and blessing to those who deserve judgment. The Reformation recovered the radical nature of grace: salvation is entirely a gift, not a wage (Romans 4:4-5). Common Grace refers to blessings God extends to all humanity (sunshine, beauty, common moral intuitions). Special Grace or Saving Grace refers to the redemptive work of God that brings a person to saving faith.", keyVerse: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God.", keyVerseRef: "Ephesians 2:8", relatedTerms: ["Faith", "Justification", "Mercy", "Election", "Forgiveness"], commonMisconception: "That grace makes God's moral standards irrelevant. Paul addresses this directly: 'Shall we sin more that grace may abound? By no means!' (Romans 6:1-2). Grace transforms behavior; it doesn't excuse it.", whyItMatters: "Grace defines the whole relationship between God and humanity. Misunderstand grace and you'll either become self-righteous (thinking you've earned favor) or licentious (thinking favor removes responsibility)." },
  { id: "t5", term: "Trinity", category: "God", level: "Advanced", definition: "The Christian doctrine that God exists eternally as one Being in three co-equal, co-eternal Persons: Father, Son, and Holy Spirit.", expanded: "The Trinity is simultaneously the most important and most misunderstood doctrine in Christianity. It is not tri-theism (three gods), modalism (one God wearing three masks), or subordinationism (a hierarchy of divine beings). Rather, there is one divine nature (substance/essence) shared fully and equally by three distinct Persons. The economic Trinity refers to how the three Persons act in creation and salvation (the Father sends, the Son is sent, the Spirit applies). The immanent Trinity refers to the eternal relations within the Godhead. This distinction matters: God's inner life reflects His outward works, but is not defined only by them.", keyVerse: "Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.", keyVerseRef: "Matthew 28:19", relatedTerms: ["Incarnation", "Holy Spirit", "Monotheism", "Person", "Nature"], commonMisconception: "The most common heretical analogies: water as ice/liquid/steam (modalism — one thing in three states), a shamrock (three separate things), or the egg (three separate parts). All fail. The Trinity has no perfect analogy because no created thing shares one nature in multiple persons.", whyItMatters: "The Trinity explains why love is not a secondary characteristic of God but His very nature: love requires a lover, a beloved, and the spirit of love — all eternally present within the Godhead before creation existed." },
  { id: "t6", term: "Propitiation", pronunciation: "pro-pish-ee-AY-shun", category: "Christ", level: "Advanced", definition: "The act of satisfying or appeasing God's righteous wrath against sin through Christ's sacrifice.", expanded: "Propitiation (Greek: hilasmos) is closely related to 'mercy seat' — the place on the Ark of the Covenant where the blood was sprinkled. It means turning away deserved wrath through a satisfying sacrifice. This term makes many modern people uncomfortable because it implies that God has wrath that must be satisfied. But Scripture is clear: God's holy nature requires that sin be fully addressed — not simply overlooked. Jesus, as fully God and fully human, is uniquely positioned to make propitiation: He represents both the offended party (God) and the offending party (humanity).", keyVerse: "He is the atoning sacrifice for our sins, and not only for ours but also for the sins of the whole world.", keyVerseRef: "1 John 2:2", relatedTerms: ["Atonement", "Wrath", "Justification", "Mercy", "Substitution"], commonMisconception: "Confusing propitiation (turning away wrath) with expiation (removing guilt/sin). Both are involved in Christ's work, but they are distinct concepts.", whyItMatters: "Propitiation ensures that salvation isn't God simply overlooking sin but God fully addressing it at infinite personal cost. This is why the cross cannot be reduced to a moral example — something real and necessary happened there." },
  { id: "t7", term: "Incarnation", pronunciation: "in-kar-NAY-shun", category: "Christ", level: "Intermediate", definition: "The eternal Son of God taking on full human nature while retaining His full divine nature — Jesus Christ, fully God and fully human.", expanded: "The Incarnation (Latin: in + caro, 'in flesh') is the central mystery of Christianity. The Council of Chalcedon (451 AD) formulated the orthodox position: Jesus Christ is one Person in two complete natures — divine and human — 'without confusion, without change, without division, without separation.' This is called the hypostatic union. The Incarnation was not temporary: Jesus rose bodily and ascended bodily. The glorified Christ at the right hand of the Father is still fully human. This has profound implications for the meaning of embodiment, matter, and the coming resurrection.", keyVerse: "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.", keyVerseRef: "John 1:14", relatedTerms: ["Trinity", "Atonement", "Hypostatic Union", "Resurrection", "Person"], whyItMatters: "If Jesus is not fully human, He cannot represent humanity. If He is not fully God, His sacrifice cannot have infinite value. The Incarnation is the foundation of the entire redemptive narrative." },
  { id: "t8", term: "Sovereignty", category: "God", level: "Intermediate", definition: "The absolute, uncontested authority and rule of God over all creation, history, and every event that occurs.", expanded: "Divine sovereignty means that nothing happens outside of God's ultimate control and purposes. This includes joy and tragedy, salvation and judgment, the rise and fall of nations. Theologians distinguish between God's directive will (what He actively brings about) and permissive will (what He allows). The relationship between God's sovereignty and human free will is one of the great theological debates: Calvinism leans heavily into meticulous sovereignty; Arminianism emphasizes genuine human freedom; Molinism attempts a middle position via middle knowledge. What all agree on: God is not surprised, defeated, or outmaneuvered by anything in creation.", keyVerse: "The Lord has established his throne in heaven, and his kingdom rules over all.", keyVerseRef: "Psalm 103:19", relatedTerms: ["Providence", "Election", "Free Will", "Omniscience", "Predestination"], commonMisconception: "That sovereignty makes God the author of evil. Orthodox theology maintains the distinction: God permits evil for greater purposes, but He is not its source or author.", whyItMatters: "Understanding sovereignty transforms how you relate to suffering, uncertainty, and outcomes beyond your control. It's the foundation of real peace — not that circumstances will be easy, but that they are never outside God's redemptive reach." },
  { id: "t9", term: "Regeneration", pronunciation: "ree-jen-er-AY-shun", category: "Salvation", level: "Intermediate", definition: "The supernatural work of the Holy Spirit that gives new spiritual life to a person who was spiritually dead — 'being born again.'", expanded: "Regeneration (Greek: palingenesia) is the divine act that precedes and enables saving faith. Jesus used the metaphor of 'being born again' (John 3) — a person cannot birth themselves. This is entirely a work of God, not human effort. Different theological traditions disagree on the ordering: does regeneration precede faith (Reformed/Calvinist view) or does faith precede regeneration (Arminian view)? What all agree on: regeneration is supernatural, non-repeatable, and results in a fundamentally new nature — new desires, new capacities, new direction.", keyVerse: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!", keyVerseRef: "2 Corinthians 5:17", relatedTerms: ["Justification", "Conversion", "Holy Spirit", "Faith", "New Birth"], whyItMatters: "Regeneration means Christian transformation is not self-improvement — it is new creation. This prevents both spiritual pride (I changed myself) and despair (I can't change)." },
  { id: "t10", term: "Eschatology", pronunciation: "es-kah-TOL-oh-jee", category: "End Times", level: "Advanced", definition: "The study of 'last things' — including death, resurrection, the second coming of Christ, judgment, and the new creation.", expanded: "Eschatology covers both personal eschatology (what happens at individual death and resurrection) and cosmic eschatology (the consummation of all things). Major views on the millennium (Revelation 20) include: Premillennialism (Christ returns before a literal 1,000-year reign), Amillennialism (the millennium is symbolic of the current church age), and Postmillennialism (the church Christianizes the world before Christ returns). Regarding the timing of the rapture: Pretribulational, Midtribulational, and Posttribulational views all have significant evangelical defenders. The points of near-universal agreement: Christ will return bodily, the dead will be raised, there will be final judgment, and God will make all things new.", keyVerse: "He who testifies to these things says, 'Yes, I am coming soon.' Amen. Come, Lord Jesus.", keyVerseRef: "Revelation 22:20", relatedTerms: ["Millennium", "Rapture", "Resurrection", "New Creation", "Judgment"], commonMisconception: "That eschatology is just about end-times speculation. Properly understood, it shapes present-day ethics: how you live now is shaped by what you believe about where everything is heading.", whyItMatters: "Eschatology answers the deepest human questions: Does history have a direction? Will justice be done? Will death have the last word? Is there hope beyond what we can see? Christian answers to all of these are a resounding yes." },
  { id: "t11", term: "Covenant", category: "Scripture", level: "Intermediate", definition: "A formal, binding agreement between God and His people, defining their relationship, obligations, and promises.", expanded: "The biblical narrative is structured around covenants. Major covenants include: Noahic (with all creation; sign: rainbow), Abrahamic (with Abraham and his descendants; sign: circumcision), Mosaic (with Israel at Sinai; sign: Sabbath), Davidic (with David's house; sign: temple), and the New Covenant (inaugurated by Christ's blood; sign: baptism and the Lord's Supper). The New Covenant fulfills and surpasses all previous covenants. Covenant theology sees the whole Bible through this lens. Dispensationalism offers a different framework. Both recognize the covenant concept as central to understanding Scripture.", keyVerse: "This is my blood of the covenant, which is poured out for many for the forgiveness of sins.", keyVerseRef: "Matthew 26:28", relatedTerms: ["Promise", "Law", "Grace", "Old Testament", "New Testament"], whyItMatters: "Understanding covenants unlocks the unity of the Bible — why the Old Testament matters for Christians, how Jesus fulfills rather than abolishes the law, and what our relationship with God is actually founded on." },
  { id: "t12", term: "Imputation", pronunciation: "im-pyoo-TAY-shun", category: "Salvation", level: "Advanced", definition: "The crediting or reckoning of one party's moral status to another — the mechanism by which Christ's righteousness is credited to believers and their sin was credited to Christ.", expanded: "Imputation is the legal/accounting concept at the heart of justification. Three imputations are central to Reformed theology: (1) Adam's sin imputed to all humanity (Romans 5:12-21); (2) The believer's sin imputed to Christ at the cross; (3) Christ's perfect active obedience (righteousness) imputed to the believer at faith. The New Perspective on Paul (N.T. Wright et al.) challenges the traditional understanding of imputation, arguing that 'righteousness of God' in Paul is primarily about God's covenant faithfulness rather than a righteousness transferred to humans. This is one of the most significant current debates in evangelical theology.", keyVerse: "Abraham believed God, and it was credited to him as righteousness.", keyVerseRef: "Romans 4:3", relatedTerms: ["Justification", "Righteousness", "Atonement", "Federal Headship", "Substitution"], whyItMatters: "Imputation means the ground of our acceptance before God is not our own moral performance — even our best efforts — but the perfect righteousness of Christ credited to us. This is the most secure possible foundation." },
];

const categories = ["All", "Salvation", "God", "Christ", "Scripture", "End Times"];
const levels = ["All", "Basic", "Intermediate", "Advanced"];
const levelColors = { Basic: "#3a7d56", Intermediate: "#F59E0B", Advanced: "#EF4444" };

interface Doctrine {
  id: string;
  name: string;
  icon: string;
  oneliner: string;
  explanation: string;
  scripture: string;
  importance: string;
}

const CORE_DOCTRINES: Doctrine[] = [
  {
    id: "d1",
    name: "Trinity",
    icon: "△",
    oneliner: "One God, three co-equal, co-eternal Persons: Father, Son, and Holy Spirit.",
    explanation: "The Trinity is the foundational Christian doctrine about the nature of God. It affirms that there is one divine Being who eternally exists as three distinct Persons. This is not three gods (tritheism) nor one God appearing in three modes (modalism), but one substance in three Persons. The doctrine was formally defined at the Council of Nicaea (325 AD) and the Council of Constantinople (381 AD), though its roots are entirely biblical. Relationships within the Trinity provide the basis for understanding love, community, and self-giving as eternal realities within God himself.",
    scripture: "Matthew 28:19 — baptizing in the name of the Father and of the Son and of the Holy Spirit.",
    importance: "The Trinity means that God is inherently relational. Love is not incidental to God — it is His eternal nature, expressed within the Godhead before any created thing existed.",
  },
  {
    id: "d2",
    name: "Incarnation",
    icon: "✦",
    oneliner: "The eternal Son of God became fully human without ceasing to be fully God.",
    explanation: "The Incarnation is the doctrine that the second Person of the Trinity, the eternal Son of God, took on full human nature in the person of Jesus of Nazareth. The Council of Chalcedon (451 AD) defined this as 'one Person in two natures' — fully divine and fully human, without confusion, change, division, or separation. Jesus was not half-human and half-divine; He was completely both. The Incarnation was not a temporary visit: the risen, glorified Christ retains His human nature. This doctrine stands at the intersection of every other major Christian belief.",
    scripture: "John 1:14 — The Word became flesh and made his dwelling among us.",
    importance: "Only a fully human representative can stand in for humanity. Only a fully divine sacrifice can have infinite worth. The Incarnation is the hinge on which salvation turns.",
  },
  {
    id: "d3",
    name: "Atonement",
    icon: "✟",
    oneliner: "Christ's death reconciled sinners to God by bearing sin's penalty in our place.",
    explanation: "The Atonement refers to the work of Christ on the cross that restored the broken relationship between God and humanity. Multiple biblical models describe its facets: Penal Substitution (Christ bore the punishment we deserved), Ransom (Christ's life given as ransom for many), Christus Victor (Christ's victory over sin, death, and the devil), and Moral Influence (Christ's love drawing humanity back to God). Evangelical Christianity holds Penal Substitution as the central model, while recognizing the others. The Atonement is not mere demonstration — something real happened at the cross that objectively changed humanity's standing before God.",
    scripture: "Isaiah 53:5 — He was pierced for our transgressions; he was crushed for our iniquities.",
    importance: "The Atonement is the center of the Gospel. Every other doctrine exists in orbit around it. To minimize what happened at the cross is to minimize the entirety of Christian faith.",
  },
  {
    id: "d4",
    name: "Justification",
    icon: "⚖",
    oneliner: "God legally declares the believing sinner righteous on account of Christ's righteousness.",
    explanation: "Justification is the forensic act of God in which He declares a sinner righteous — not because they are righteous, but because Christ's perfect righteousness is imputed (credited) to their account. It is the 'great exchange': our sin to Christ, His righteousness to us. This is the doctrine that drove the Protestant Reformation — Luther's rediscovery of 'the just shall live by faith' changed Western civilization. Justification is complete at the moment of saving faith; it is not a process. The ongoing process of becoming holy is sanctification, which must never be confused with justification.",
    scripture: "Romans 5:1 — Since we have been justified through faith, we have peace with God.",
    importance: "Justification means your standing before God rests entirely on Christ's performance, not yours. This is the most liberating truth in Christianity — and the most resisted by human pride.",
  },
  {
    id: "d5",
    name: "Resurrection",
    icon: "☀",
    oneliner: "Christ rose bodily from the dead — and His resurrection guarantees ours.",
    explanation: "The Resurrection of Jesus Christ is the most foundational historical claim of Christianity. Paul states plainly: 'If Christ has not been raised, your faith is futile; you are still in your sins' (1 Corinthians 15:17). The resurrection was bodily — the tomb was empty, the risen Jesus ate, was touched, and bore His wounds. It was not a resuscitation (returning to mortal life) but a transformation into glorified, immortal, bodily existence. The resurrection vindicates Jesus's identity and atoning work, defeats death, inaugurates the new creation, and guarantees the future bodily resurrection of all who are in Christ.",
    scripture: "1 Corinthians 15:20 — But Christ has indeed been raised from the dead, the firstfruits of those who have fallen asleep.",
    importance: "The Resurrection means death does not have the final word for anyone united to Christ. It transforms how Christians face suffering, mortality, and hope.",
  },
  {
    id: "d6",
    name: "Scripture's Authority",
    icon: "📖",
    oneliner: "The Bible is the inspired, authoritative, and sufficient Word of God for faith and life.",
    explanation: "The doctrine of Scripture's authority (often summarized as sola scriptura in the Reformation tradition) holds that the Bible, as God-breathed (theopneustos, 2 Timothy 3:16), is the final authority for Christian belief and practice. Evangelical theology typically affirms inerrancy (the original autographs contain no errors) and infallibility (Scripture reliably accomplishes its purpose). This does not mean the Bible is a science textbook or that all its genres should be read in the same way — it means that what Scripture affirms is true, and that it is sufficient to equip believers for every good work. Higher criticism and postmodern hermeneutics challenge this view from without; charismatic revelatory claims can challenge it from within.",
    scripture: "2 Timothy 3:16-17 — All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.",
    importance: "How you view Scripture determines how you do theology, how you read the Bible, and ultimately what authority governs your faith. Every other doctrine stands downstream of this one.",
  },
];

interface TheologyHistory {
  id: string;
  era: string;
  period: string;
  summary: string;
  key_figure: string;
  key_development: string;
}

const THEOLOGY_HISTORY: TheologyHistory[] = [
  {
    id: "h1",
    era: "Apostolic Age",
    period: "c. AD 30–100",
    summary: "The foundational period of Christianity, shaped by the eyewitness testimony of the apostles. Theology was primarily oral and kerygmatic — the proclamation of the death and resurrection of Jesus. The New Testament letters address specific doctrinal and ethical crises in early churches. The Apostles' Creed emerged from baptismal confessions of this era. Persecution under Nero (64 AD) and Domitian (81-96 AD) shaped a theology of suffering and martyrdom.",
    key_figure: "Paul of Tarsus",
    key_development: "The articulation of justification by faith (Galatians, Romans) and the cosmic significance of Christ's person and work (Colossians, Ephesians).",
  },
  {
    id: "h2",
    era: "Patristic Period",
    period: "c. AD 100–500",
    summary: "The era of the Church Fathers — theologians who defended and defined Christian orthodoxy against heresy and pagan philosophy. Major councils defined Trinitarian theology (Nicaea 325, Constantinople 381) and Christology (Chalcedon 451). Gnosticism, Arianism, and Pelagianism were the major heresies confronted. The canon of Scripture was formally recognized. Augustine of Hippo dominated the late Patristic period with his theologies of grace, sin, predestination, and the Church.",
    key_figure: "Athanasius of Alexandria",
    key_development: "The Nicene Creed's affirmation that the Son is 'of the same substance' (homoousios) as the Father, defending the full divinity of Christ against Arianism.",
  },
  {
    id: "h3",
    era: "Medieval Scholasticism",
    period: "c. AD 800–1400",
    summary: "Theology was conducted primarily within monasteries and later universities, employing Aristotelian logic and philosophical rigor. Anselm of Canterbury developed the satisfaction theory of atonement and the ontological argument for God's existence. Peter Lombard's Sentences became the standard theological textbook. Thomas Aquinas synthesized Aristotelian philosophy with Christian theology in the Summa Theologica, producing a comprehensive system that still shapes Roman Catholic theology. The Fourth Lateran Council (1215) codified transubstantiation.",
    key_figure: "Thomas Aquinas",
    key_development: "The Summa Theologica — the most comprehensive theological synthesis in Christian history, integrating faith and reason, Scripture and Aristotle.",
  },
  {
    id: "h4",
    era: "Protestant Reformation",
    period: "c. 1517–1600",
    summary: "Martin Luther's 95 Theses (1517) ignited a movement that reshaped Western Christianity. The Reformation recovered the Pauline doctrine of justification by faith alone (sola fide) and placed Scripture's authority above church tradition (sola scriptura). Luther, Zwingli, Calvin, and Cranmer each developed distinct theological traditions: Lutheran, Reformed, and Anglican. The Council of Trent (1545-1563) defined Roman Catholic theology in response. The Reformation produced the major Protestant confessions: the Augsburg Confession, the Heidelberg Catechism, the Westminster Standards.",
    key_figure: "John Calvin",
    key_development: "The Institutes of the Christian Religion — the most systematic and influential theological work of the Reformation, codifying Reformed theology across five editions (1536-1559).",
  },
  {
    id: "h5",
    era: "Enlightenment Response",
    period: "c. 1650–1900",
    summary: "The Enlightenment challenged Christian theology with the rise of rationalism, empiricism, historical criticism, and Darwinian evolution. Schleiermacher attempted to reground theology in religious experience rather than doctrinal propositions. Liberal theology (Ritschl, Harnack) reduced Christianity to ethics and Jesus's moral example. Conservative and confessional theologians (Princeton School: Hodge, Warfield) defended the historic doctrines. Revivalism (Wesley, Whitefield, Edwards, Finney) shaped popular evangelical faith. The gap between academic and popular theology widened dramatically.",
    key_figure: "Friedrich Schleiermacher",
    key_development: "The emergence of historical-critical biblical scholarship, which transformed how Scripture is read in academic institutions and eventually in mainline denominations.",
  },
  {
    id: "h6",
    era: "Modern / Contemporary",
    period: "c. 1900–present",
    summary: "The 20th century saw Karl Barth's neo-orthodox revolution, which rejected liberal theology's reduction of Christianity to human religion and reasserted the revelation of God in Christ. Liberation theology (Gutierrez) read Scripture from the perspective of the poor. Feminist theology (Ruether, Johnson) challenged patriarchal theological language. Evangelical theology organized institutionally (NAE, ETS) and produced major confessional statements (Chicago Statement on Biblical Inerrancy, 1978). Pentecostalism and the charismatic movement became globally dominant streams. Postmodern theology (Vanhoozer, Merold Westphal) engaged deconstructionism and cultural hermeneutics.",
    key_figure: "Karl Barth",
    key_development: "The Church Dogmatics — Barth's massive, unfinished theological system that reasserted the priority of divine revelation and the centrality of Jesus Christ against both liberal and fundamentalist distortions.",
  },
];

interface TheologicalVoice {
  id: string;
  name: string;
  era: string;
  context: string;
  bio: string;
  quote: string;
  contribution: string;
}

const VOICES_THEO: TheologicalVoice[] = [
  {
    id: "v1",
    name: "Athanasius",
    era: "c. 296–373 AD",
    context: "Bishop of Alexandria, defender of Nicene orthodoxy",
    bio: "Athanasius served as Bishop of Alexandria for 45 years, spending 17 of those years in exile — exiled five times by four emperors for refusing to compromise on the full divinity of Christ. The phrase 'Athanasius contra mundum' (Athanasius against the world) captures his tenacity. When Arianism had the backing of the imperial court and most bishops, Athanasius stood nearly alone, insisting that the Son is homoousios (of the same substance) with the Father. His treatise On the Incarnation remains one of the greatest works in the Christian tradition.",
    quote: "The Son of God became man so that we might become God.",
    contribution: "Athanasius secured the Trinitarian and Christological foundation of Christian orthodoxy at its most critical juncture. Without his decades of resistance, Arian Christianity — in which Jesus is a great creature but not fully God — might have become the dominant form of the faith.",
  },
  {
    id: "v2",
    name: "Anselm of Canterbury",
    era: "c. 1033–1109 AD",
    context: "Archbishop of Canterbury, Father of Scholasticism",
    bio: "Anselm was an Italian-born Benedictine monk who became Archbishop of Canterbury. His theological method — 'faith seeking understanding' (fides quaerens intellectum) — became the hallmark of medieval scholasticism. He developed the ontological argument for God's existence and, most influentially, the satisfaction theory of the atonement in Cur Deus Homo (Why God Became Man). Anselm argued that humanity's sin against an infinite God required an infinite satisfaction — which only God-made-man could provide. This framework shaped Western atonement theology for a millennium.",
    quote: "God can be thought of as that than which nothing greater can be conceived.",
    contribution: "Anselm's satisfaction theory of the atonement (Cur Deus Homo) provided the conceptual framework that later developed into the penal substitution theory, making him arguably the most influential medieval theologian on the doctrine of salvation.",
  },
  {
    id: "v3",
    name: "Thomas Aquinas",
    era: "c. 1225–1274 AD",
    context: "Dominican friar, Professor of Theology in Paris",
    bio: "Thomas Aquinas was born into Italian nobility and became a Dominican friar against his family's wishes. He studied under Albertus Magnus in Cologne and went on to teach at the University of Paris. His Summa Theologica — unfinished at his death — is the most comprehensive theological system in Christian history, synthesizing Aristotelian philosophy with Christian revelation. Thomas distinguished between what reason can know (natural theology) and what must be revealed (sacred doctrine). He is the Doctor Communis of the Roman Catholic Church and his influence extends to Protestant natural law theory and philosophical theology.",
    quote: "Grace does not destroy nature but perfects it.",
    contribution: "The Summa Theologica provided a comprehensive and rationally ordered account of Christian doctrine that still serves as the official theological framework of Roman Catholicism and has shaped philosophical theology across all traditions.",
  },
  {
    id: "v4",
    name: "John Calvin",
    era: "1509–1564 AD",
    context: "Reformer of Geneva, systematic theologian of the Reformation",
    bio: "John Calvin was a French humanist who underwent a sudden conversion and became the principal theologian of the Reformed wing of the Protestant Reformation. Exiled from France, he settled in Geneva and spent most of his career there, transforming the city into a model Reformed community. His Institutes of the Christian Religion (first edition 1536, final edition 1559) is the most systematic and influential theological work of the Reformation. Calvin also produced commentaries on nearly every book of the Bible. His doctrines of predestination, covenant, and the sovereignty of God shaped Reformed, Presbyterian, Puritan, and Baptist traditions worldwide.",
    quote: "Our wisdom, in so far as it ought to be deemed true and solid wisdom, consists almost entirely of two parts: the knowledge of God and of ourselves.",
    contribution: "The Institutes of the Christian Religion codified Reformed theology and provided the doctrinal DNA for Presbyterian, Congregationalist, Baptist, and many other Protestant traditions globally. Calvin's exegetical method also shaped the historical-grammatical approach to biblical interpretation.",
  },
  {
    id: "v5",
    name: "Karl Barth",
    era: "1886–1968 AD",
    context: "Swiss Reformed theologian, father of neo-orthodoxy",
    bio: "Karl Barth began his career as a liberal Protestant pastor in Switzerland. The horrors of World War I — and the fact that his liberal theology professors signed the Kaiser's war manifesto — shattered his confidence in the liberal project. His commentary on Romans (1919, 1922) landed like a bomb in the playground of theologians, reasserting the radical transcendence of God and the priority of divine revelation. His Church Dogmatics (13 volumes, never completed) is the most extensive theological work in Protestant history. Barth consistently opposed Nazism, drafting the Barmen Declaration (1934) against the Nazi-aligned German Christians.",
    quote: "The theologian who has no joy in his work is not a theologian at all. Sulky faces, morose thoughts, and boring ways of speaking are not fitting for those who have the name 'evangelical.'",
    contribution: "Barth's Church Dogmatics reoriented 20th-century Protestant theology around the self-revelation of God in Jesus Christ, breaking from both liberal theology's reduction of Christianity to human religion and fundamentalism's wooden biblicism.",
  },
];

type Tab = "glossary" | "doctrines" | "history" | "voices" | "journal" | "videos";

export default function TheologyGlossaryPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_theology-glossary_tab", "glossary");
  const [savedIds, setSavedIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_theology_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [learnedIds, setLearnedIds] = useState<Set<string>>(() => {
    try { const l = localStorage.getItem("vine_theology_learned"); return l ? new Set(JSON.parse(l)) : new Set(); } catch { return new Set(); }
  });
  const [selected, setSelected] = useState<Term | null>(null);
  const [filterCat, setFilterCat] = usePersistedState("vine_theology-glossary_filter_cat", "All");
  const [filterLevel, setFilterLevel] = usePersistedState("vine_theology-glossary_filter_level", "All");
  const [search, setSearch] = useState("");
  const [selectedVoice, setSelectedVoice] = useState<TheologicalVoice>(VOICES_THEO[0]);


  const handleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_theology_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handleLearn = (id: string) => {
    setLearnedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_theology_learned", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const filtered = terms.filter((t) => {
    if (filterCat !== "All" && t.category !== filterCat) return false;
    if (filterLevel !== "All" && t.level !== filterLevel) return false;
    if (search && !t.term.toLowerCase().includes(search.toLowerCase()) && !t.definition.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  type JournalEntry = { id: string; date: string; term: string; insight: string; applying: string };
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(() => { try { return JSON.parse(localStorage.getItem("vine_tglj_entries") ?? "[]"); } catch { return []; } });
  const [jTerm, setJTerm] = useState("");
  const [jInsight, setJInsight] = useState("");
  const [jApplying, setJApplying] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_tglj_entries", JSON.stringify(journalEntries)); } catch {} }, [journalEntries]);
  function saveJournalEntry() {
    if (!jTerm.trim() && !jInsight.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), term: jTerm, insight: jInsight, applying: jApplying };
    setJournalEntries(prev => [entry, ...prev]);
    setJTerm(""); setJInsight(""); setJApplying("");
  }
  function deleteJournalEntry(id: string) { setJournalEntries(prev => prev.filter(e => e.id !== id)); }

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ background: "linear-gradient(135deg, #070714 0%, #07070F 100%)", padding: "52px 24px 36px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 44, marginBottom: 10 }}>🎓</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Theology Glossary</h1>
        <p style={{ fontSize: 16, color: MUTED, maxWidth: 520, margin: "0 auto 24px" }}>
          Clear, honest definitions of key Christian theological terms &mdash; from the basics to the advanced &mdash; with real explanations of why they matter.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {[
            { value: terms.length.toString(), label: "Terms" },
            { value: learnedIds.size.toString(), label: "Learned" },
            { value: savedIds.size.toString(), label: "Saved" },
            { value: "3", label: "Difficulty Levels" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 24, fontWeight: 700, color: GREEN }}>{s.value}</div>
              <div style={{ fontSize: 12, color: MUTED }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Bar */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 24px 0" }}>
        <div style={{ display: "flex", gap: 6, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}`, width: "fit-content" }}>
          {(["glossary", "doctrines", "history", "voices", "journal", "videos"] as const).map(t => (
            <button type="button" key={t} onClick={() => setActiveTab(t)}
              style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "glossary" ? "Glossary" : t === "doctrines" ? "Core Doctrines" : t === "history" ? "History" : t === "voices" ? "Voices" : t === "journal" ? "📓 My Journal" : "Videos"}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px" }}>

        {/* GLOSSARY TAB */}
        {activeTab === "glossary" && (
          <>
            {/* Filters */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24, alignItems: "center" }}>
              <input value={search} onChange={(e) => setSearch(e.target.value)}
                aria-label="Search terms or definitions..." placeholder="Search terms or definitions..."
                style={{ flex: 1, minWidth: 200, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "9px 14px", color: TEXT, fontSize: 13, outline: "none" }} />
              <div style={{ display: "flex", gap: 6 }}>
                {categories.map((c) => (
                  <button type="button" key={c} onClick={() => setFilterCat(c)}
                    style={{ padding: "6px 14px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                      border: `1px solid ${filterCat === c ? PURPLE : BORDER}`,
                      background: filterCat === c ? `${PURPLE}20` : "transparent",
                      color: filterCat === c ? PURPLE : MUTED }}>
                    {c}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {levels.map((l) => (
                  <button type="button" key={l} onClick={() => setFilterLevel(l)}
                    style={{ padding: "6px 14px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                      border: `1px solid ${filterLevel === l ? (l === "All" ? MUTED : levelColors[l as keyof typeof levelColors]) : BORDER}`,
                      background: filterLevel === l ? `${l === "All" ? MUTED : levelColors[l as keyof typeof levelColors]}20` : "transparent",
                      color: filterLevel === l ? (l === "All" ? MUTED : levelColors[l as keyof typeof levelColors]) : MUTED }}>
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ fontSize: 13, color: MUTED, marginBottom: 16 }}>{filtered.length} terms</div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {filtered.map((term) => {
                const saved = savedIds.has(term.id);
                const learned = learnedIds.has(term.id);
                return (
                  <div key={term.id}
                    style={{ background: CARD, border: `1px solid ${learned ? `${GREEN}30` : BORDER}`, borderRadius: 14, padding: 20, cursor: "pointer" }}
                    onClick={() => setSelected(term)}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                      <div>
                        <div style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                          <span style={{ padding: "1px 8px", borderRadius: 20, fontSize: 10, fontWeight: 600,
                            background: `${levelColors[term.level]}20`, color: levelColors[term.level] }}>{term.level}</span>
                          <span style={{ padding: "1px 8px", borderRadius: 20, fontSize: 10, background: `${PURPLE}20`, color: PURPLE }}>{term.category}</span>
                          {learned && <span style={{ fontSize: 13, color: GREEN }}>✓</span>}
                        </div>
                        <h3 style={{ fontSize: 17, fontWeight: 700, color: TEXT, margin: 0 }}>{term.term}</h3>
                        {term.pronunciation && <div style={{ fontSize: 11, color: MUTED, fontStyle: "italic" }}>/{term.pronunciation}/</div>}
                      </div>
                      <button type="button" onClick={(e) => { e.stopPropagation(); handleSave(term.id); }}
                        style={{ padding: "4px 8px", borderRadius: 6, border: "none", background: saved ? `${PURPLE}20` : BORDER, color: saved ? PURPLE : MUTED, cursor: "pointer", fontSize: 14 }}>
                        {saved ? "★" : "☆"}
                      </button>
                    </div>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: "0 0 10px" }}>{term.definition}</p>
                    {term.keyVerse && (
                      <div style={{ fontSize: 11, color: PURPLE, fontStyle: "italic" }}>
                        {term.keyVerseRef}
                      </div>
                    )}
                    <div style={{ fontSize: 11, color: MUTED, marginTop: 6 }}>
                      Related: {term.relatedTerms.slice(0, 3).join(", ")}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* DOCTRINES TAB */}
        {activeTab === "doctrines" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Core Christian Doctrines</h2>
              <p style={{ color: MUTED, fontSize: 14 }}>The essential theological convictions that define orthodox Christianity across traditions.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
              {CORE_DOCTRINES.map(doc => (
                <div key={doc.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: PURPLE }}>
                      {doc.icon}
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: TEXT }}>{doc.name}</h3>
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 12, lineHeight: 1.5 }}>{doc.oneliner}</p>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.8, marginBottom: 14 }}>{doc.explanation}</p>
                  <div style={{ background: `${GREEN}0D`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 12, marginBottom: 12 }}>
                    <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Key Scripture</div>
                    <p style={{ fontSize: 13, color: GREEN, margin: 0, fontStyle: "italic" }}>{doc.scripture}</p>
                  </div>
                  <div style={{ background: `${PURPLE}0D`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 12 }}>
                    <div style={{ fontSize: 11, color: PURPLE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Why It Matters</div>
                    <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.6 }}>{doc.importance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HISTORY TAB */}
        {activeTab === "history" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>History of Theology</h2>
              <p style={{ color: MUTED, fontSize: 14 }}>How Christian doctrine developed across twenty centuries of church history.</p>
            </div>
            <div style={{ position: "relative", paddingLeft: 32 }}>
              {/* vertical line */}
              <div style={{ position: "absolute", left: 10, top: 8, bottom: 8, width: 2, background: `linear-gradient(180deg, ${PURPLE}, ${GREEN})`, borderRadius: 2 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {THEOLOGY_HISTORY.map((era, idx) => (
                  <div key={era.id} style={{ position: "relative" }}>
                    {/* dot */}
                    <div style={{ position: "absolute", left: -26, top: 18, width: 14, height: 14, borderRadius: "50%", background: idx % 2 === 0 ? PURPLE : GREEN, border: `2px solid ${BG}`, zIndex: 1 }} />
                    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 16, fontWeight: 800, color: TEXT }}>{era.era}</span>
                        <span style={{ fontSize: 12, padding: "2px 10px", borderRadius: 20, background: `${PURPLE}20`, color: PURPLE, border: `1px solid ${PURPLE}30` }}>{era.period}</span>
                      </div>
                      <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.8, marginBottom: 16 }}>{era.summary}</p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        <div style={{ background: BG, borderRadius: 10, padding: 12 }}>
                          <div style={{ fontSize: 10, color: GREEN, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Key Figure</div>
                          <div style={{ fontSize: 13, color: TEXT, fontWeight: 600 }}>{era.key_figure}</div>
                        </div>
                        <div style={{ background: BG, borderRadius: 10, padding: 12 }}>
                          <div style={{ fontSize: 10, color: PURPLE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Key Development</div>
                          <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.5 }}>{era.key_development}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VOICES TAB */}
        {activeTab === "voices" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Theological Voices</h2>
              <p style={{ color: MUTED, fontSize: 14 }}>The thinkers who shaped Christian theology &mdash; their lives, contributions, and enduring insights.</p>
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              {/* Left panel */}
              <div style={{ width: 210, flexShrink: 0, position: "sticky", top: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                {VOICES_THEO.map(v => (
                  <button type="button" key={v.id} onClick={() => setSelectedVoice(v)}
                    style={{ background: selectedVoice.id === v.id ? `${PURPLE}25` : CARD, border: `1px solid ${selectedVoice.id === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: selectedVoice.id === v.id ? TEXT : MUTED, marginBottom: 2 }}>{v.name}</div>
                    <div style={{ fontSize: 11, color: MUTED }}>{v.era}</div>
                  </button>
                ))}
              </div>
              {/* Right panel */}
              <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: `${PURPLE}20`, color: PURPLE, border: `1px solid ${PURPLE}30` }}>{selectedVoice.era}</span>
                </div>
                <h2 style={{ fontSize: 26, fontWeight: 800, color: TEXT, margin: "10px 0 4px" }}>{selectedVoice.name}</h2>
                <p style={{ fontSize: 13, color: MUTED, marginBottom: 20, fontStyle: "italic" }}>{selectedVoice.context}</p>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.8, marginBottom: 22 }}>{selectedVoice.bio}</p>
                <blockquote style={{ margin: "0 0 22px", padding: "16px 20px", background: BG, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 10px 10px 0" }}>
                  <p style={{ fontSize: 15, color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 8px" }}>
                    &ldquo;{selectedVoice.quote}&rdquo;
                  </p>
                  <span style={{ fontSize: 12, color: PURPLE, fontWeight: 700 }}>— {selectedVoice.name}</span>
                </blockquote>
                <div style={{ background: `${GREEN}0D`, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Lasting Contribution</div>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, margin: 0 }}>{selectedVoice.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "journal" && (
          <div style={{ maxWidth: 880, margin: "0 auto", padding: "32px 24px" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>My Theology Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Record theological terms that are shaping your understanding and how they are changing your faith and practice.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input value={jTerm} onChange={e => setJTerm(e.target.value)} placeholder="Theological term or concept" style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <textarea value={jInsight} onChange={e => setJInsight(e.target.value)} placeholder="What insight struck you about this term?" rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jApplying} onChange={e => setJApplying(e.target.value)} placeholder="How is this reshaping your worship, prayer, or ethics?" rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <button type="button" onClick={saveJournalEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "11px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer", alignSelf: "flex-start" }}>Save Entry</button>
              </div>
            </div>
            {journalEntries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", padding: 32 }}>No journal entries yet. Begin recording how theological study is shaping your faith.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {journalEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ color: PURPLE, fontWeight: 700, fontSize: 15 }}>{entry.term || "Theology Journal"}</span>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                    </div>
                    {entry.insight && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}><strong>Insight:</strong> {entry.insight}</p>}
                    {entry.applying && <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}><strong>Applying:</strong> {entry.applying}</p>}
                    <button type="button" onClick={() => deleteJournalEntry(entry.id)} style={{ background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "4px 12px", color: MUTED, fontSize: 12, cursor: "pointer" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars on Christian doctrine and theology.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "GQI72THyO5I", title: "What Is Theology? — An Overview of Systematic Theology", channel: "Ligonier Ministries / R.C. Sproul", description: "Sproul defines theology and explains why every Christian is a theologian — showing how the truths of Scripture relate to each other in perfect harmony." },
                  { videoId: "t6L-F2emwUc", title: "What's So Important About Theology?", channel: "Ligonier Ministries / R.C. Sproul", description: "An explanation of why understanding doctrine matters for knowing God better — and why theological ignorance is never spiritually neutral." },
                  { videoId: "jH_aojNJM3E", title: "Introduction: What Is Reformed Theology?", channel: "Ligonier Ministries / R.C. Sproul", description: "Sproul introduces the major theological traditions and what distinguishes Reformed theology from Liberal, Catholic, Dispensational, and Pentecostal approaches." },
                  { videoId: "oNpTha80yyE", title: "R.C. Sproul: Back to Basics", channel: "Ligonier Ministries", description: "A return to the foundational doctrines of the Christian faith — examining the core beliefs that have sustained the church through centuries of controversy and change." },
                  { videoId: "IJ-FekWUZzE", title: "What Is the Trinity? | Crucial Questions", channel: "Ligonier Ministries / R.C. Sproul", description: "Sproul's accessible introduction to the doctrine of the Trinity — one of the most misunderstood and most important doctrines in all of Christian theology." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
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

      {/* Term Detail Modal */}
      {selected && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}
          onClick={() => setSelected(null)}>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: 28, maxWidth: 620, width: "100%", maxHeight: "90vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}>
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
                <span style={{ padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                  background: `${levelColors[selected.level]}20`, color: levelColors[selected.level] }}>{selected.level}</span>
                <span style={{ padding: "2px 10px", borderRadius: 20, fontSize: 11, background: `${PURPLE}20`, color: PURPLE }}>{selected.category}</span>
              </div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 2 }}>{selected.term}</h2>
              {selected.pronunciation && <div style={{ fontSize: 13, color: MUTED, fontStyle: "italic", marginBottom: 8 }}>/{selected.pronunciation}/</div>}
              <p style={{ fontSize: 15, color: "#D0D0E8", fontWeight: 500, lineHeight: 1.6 }}>{selected.definition}</p>
            </div>

            {selected.keyVerse && (
              <div style={{ background: BG, borderRadius: 10, padding: 14, marginBottom: 16, borderLeft: `3px solid ${PURPLE}` }}>
                <div style={{ fontSize: 13, color: TEXT, fontStyle: "italic", lineHeight: 1.6, marginBottom: 4 }}>
                  &ldquo;{selected.keyVerse}&rdquo;
                </div>
                <div style={{ fontSize: 12, color: PURPLE, fontWeight: 600 }}>{selected.keyVerseRef}</div>
              </div>
            )}

            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.8, marginBottom: 16 }}>{selected.expanded}</p>

            {selected.commonMisconception && (
              <div style={{ background: "#EF444410", border: "1px solid #EF444420", borderRadius: 10, padding: 14, marginBottom: 16 }}>
                <div style={{ fontSize: 11, color: "#EF4444", fontWeight: 700, marginBottom: 6, textTransform: "uppercase" }}>⚠️ Common Misconception</div>
                <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: 0 }}>{selected.commonMisconception}</p>
              </div>
            )}

            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 14, marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 6, textTransform: "uppercase" }}>Why It Matters</div>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: 0 }}>{selected.whyItMatters}</p>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 12, color: MUTED, marginBottom: 6 }}>Related terms:</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {selected.relatedTerms.map((r) => (
                  <span key={r} style={{ padding: "3px 10px", borderRadius: 20, background: BORDER, color: MUTED, fontSize: 11,
                    cursor: terms.find((t) => t.term === r) ? "pointer" : "default" }}
                    onClick={() => { const t = terms.find((x) => x.term === r); if (t) setSelected(t); }}>
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div role="button" tabIndex={0} style={{ display: "flex", gap: 10 }}>
              <button type="button" onClick={() => handleLearn(selected.id)}
                style={{ flex: 1, padding: "11px 16px", borderRadius: 10, border: "none",
                  background: learnedIds.has(selected.id) ? `${GREEN}20` : PURPLE,
                  color: learnedIds.has(selected.id) ? GREEN : "#fff",
                  cursor: "pointer", fontWeight: 700, fontSize: 15 }}>
                {learnedIds.has(selected.id) ? "✓ Learned" : "Mark as Learned"}
              </button>
              <button type="button" onClick={() => handleSave(selected.id)}
                style={{ padding: "11px 16px", borderRadius: 10, border: "none",
                  background: savedIds.has(selected.id) ? `${PURPLE}20` : BORDER,
                  color: savedIds.has(selected.id) ? PURPLE : MUTED,
                  cursor: "pointer", fontWeight: 600, fontSize: 15 }}>
                {savedIds.has(selected.id) ? "★" : "☆"}
              </button>
              <button type="button" onClick={() => setSelected(null)}
                style={{ padding: "11px 16px", borderRadius: 10, border: `1px solid ${BORDER}`, background: "transparent", color: MUTED, cursor: "pointer", fontSize: 15 }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </main>
      <Footer />
    </div>
  );
}
