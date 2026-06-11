"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const LOCI = [
  {
    name: "Prolegomena",
    subtitle: "How We Know What We Know",
    color: "#3B82F6",
    verse: "2 Timothy 3:16-17",
    summary: "Prolegomena (from Greek: 'before the word') deals with the foundations of theological method: How do we know anything about God? What are the sources and norms of theology? Classical theology distinguishes between general revelation (creation, conscience, human experience — what everyone can know) and special revelation (Scripture, the prophets, the incarnation of Christ). It also addresses the relationship between faith and reason, the role of tradition and church authority, and the question of theological method.",
    key_questions: ["What are the sources of theological knowledge?", "What is the relationship between faith and reason?", "How does Scripture function as theological authority?", "What role does church tradition play?"],
    key_theologians: "Thomas Aquinas, John Calvin, Karl Barth, Herman Bavinck",
    books: "Herman Bavinck, Reformed Dogmatics Vol. 1; Millard Erickson, Christian Theology Ch. 1-3",
    initials: "PRO",
  },
  {
    name: "Theology Proper",
    subtitle: "The Doctrine of God",
    color: PURPLE,
    verse: "Exodus 3:14",
    summary: "Theology proper (the doctrine of God) asks: What is God like? Classical treatments address the existence of God (arguments: cosmological, ontological, teleological, moral), the knowability of God (can finite creatures know an infinite God?), and the divine attributes. These attributes are typically divided into communicable (love, holiness, justice, wisdom — attributes humans share in an analogous sense) and incommunicable (omnipotence, omniscience, omnipresence, aseity, immutability — attributes unique to God). Contemporary debates include open theism, divine simplicity, and divine impassibility.",
    key_questions: ["Can God be known?", "What are God's essential attributes?", "Is God simple or composed?", "Does God experience emotions?", "How do we reconcile God's sovereignty with human freedom?"],
    key_theologians: "Anselm, Aquinas, Calvin, Bavinck, John Frame",
    books: "A.W. Tozer, Knowledge of the Holy; John Frame, The Doctrine of God; Herman Bavinck, Reformed Dogmatics Vol. 2",
    initials: "THK",
  },
  {
    name: "Theology of the Trinity",
    subtitle: "One God in Three Persons",
    color: GREEN,
    verse: "Matthew 28:19",
    summary: "The doctrine of the Trinity is the distinctive Christian claim about God: there is one God eternally existing as three persons — Father, Son, and Holy Spirit — who are coequal and coeternal, distinct in person but identical in divine nature. The doctrine was formalized at the Council of Nicaea (325 AD) against Arianism (which denied the Son's full divinity) and the Council of Constantinople (381 AD). Key debates include: the eternal generation of the Son, the procession of the Spirit, the perichoresis (mutual indwelling) of the three persons, and the relationship between ontological and economic Trinity.",
    key_questions: ["How are the three persons related to each other?", "Is there hierarchy within the Trinity?", "What is the relationship between the immanent and economic Trinity?", "How does Trinitarian doctrine shape worship and prayer?"],
    key_theologians: "Athanasius, Augustine, Gregory of Nazianzus, Karl Barth, Jürgen Moltmann",
    books: "Robert Letham, The Holy Trinity; Michael Reeves, Delighting in the Trinity; Augustine, On the Trinity",
    initials: "TRI",
  },
  {
    name: "Anthropology",
    subtitle: "The Doctrine of Humanity",
    color: "#F59E0B",
    verse: "Genesis 1:26-27",
    summary: "Theological anthropology asks: What is a human being? Key questions include the imago Dei (image of God) — what it means, how it was affected by the fall, and how it is being restored in Christ. It addresses the constitution of human persons (body-soul dualism? monism? trichotomy?), the origin of the soul, and the nature of human freedom and dignity. Post-fall anthropology examines total depravity and its implications for human capacity for good. Contemporary anthropology engages questions of gender, sexuality, and human identity through a theological lens.",
    key_questions: ["What does it mean to be made in God's image?", "How has sin affected human nature?", "Are humans body and soul, or just body?", "Do humans have genuine freedom?"],
    key_theologians: "Augustine, Aquinas, Calvin, Karl Barth, Wolfhart Pannenberg",
    books: "Anthony Hoekema, Created in God's Image; Rosaria Butterfield, The Gospel Comes with a House Key",
    initials: "ANT",
  },
  {
    name: "Hamartiology",
    subtitle: "The Doctrine of Sin",
    color: "#EF4444",
    verse: "Romans 5:12",
    summary: "Hamartiology is the study of sin. It addresses the origin of sin (the fall of Adam and Eve in Genesis 3), the nature of sin (missing the mark / rebellion / privation of good / structural evil), and the transmission of sin (original sin: how Adam's sin affects all humanity). Key debates: Is original sin inherited guilt, inherited corruption, or both? What is total depravity — complete moral incapacity or simply that every aspect of human nature is affected by sin? How does sin relate to the demonic? Sin's structural dimensions — how do corporate and systemic forms of evil function?",
    key_questions: ["What is the nature of original sin?", "Are humans born guilty or merely corrupt?", "What is total depravity?", "Is sin primarily individual or corporate/structural?"],
    key_theologians: "Augustine, Calvin, Reinhold Niebuhr, Cornelius Plantinga",
    books: "Cornelius Plantinga, Not the Way It's Supposed to Be; John Owen, Mortification of Sin",
    initials: "HAM",
  },
  {
    name: "Christology",
    subtitle: "The Doctrine of Christ",
    color: "#EC4899",
    verse: "John 1:14",
    summary: "Christology asks: Who is Jesus Christ? The Council of Chalcedon (451 AD) formulated the classic answer: Jesus is one person (hypostasis) with two natures — fully divine and fully human — without confusion, change, division, or separation. This rules out Docetism (only divine, seeming human), Arianism (less than fully divine), Nestorianism (two persons), and Eutychianism (one mixed nature). Contemporary Christology addresses the kenotic debate (how did Jesus take on human limitations?), the impeccability question (could Jesus have sinned?), and the significance of Jesus's resurrection and ascension for Christian life.",
    key_questions: ["How can Jesus be both fully God and fully human?", "Did the Son of God limit himself in the incarnation?", "Could Jesus have sinned?", "What is the significance of the resurrection for present Christian life?"],
    key_theologians: "Athanasius, Cyril of Alexandria, Anselm, T.F. Torrance, Donald Macleod",
    books: "Donald Macleod, The Person of Christ; Chalcedonian Definition (451 AD)",
    initials: "CHR",
  },
  {
    name: "Soteriology",
    subtitle: "The Doctrine of Salvation",
    color: "#10B981",
    verse: "Ephesians 2:8-9",
    summary: "Soteriology encompasses the entire scope of God's saving work: election (the predestination debate), the atonement (how Christ's death saves), justification (the doctrine that sparked the Reformation), regeneration, conversion, adoption, sanctification, and glorification. Key debates: Limited vs. unlimited atonement. Monergism vs. synergism in conversion. The order of salvation (ordo salutis). The relationship between justification and sanctification. The perseverance of the saints. Contemporary soteriology also addresses the scope of salvation (exclusivism, inclusivism, universalism) and the New Perspective on Paul.",
    key_questions: ["How does Christ's death actually save us?", "Are the elect predetermined?", "Is justification by faith alone?", "Can a true believer lose their salvation?"],
    key_theologians: "Luther, Calvin, John Owen, N.T. Wright, Thomas Schreiner",
    books: "Leon Morris, The Apostolic Preaching of the Cross; Thomas Schreiner, Faith Alone",
    initials: "SOT",
  },
  {
    name: "Pneumatology",
    subtitle: "The Doctrine of the Holy Spirit",
    color: "#A855F7",
    verse: "John 14:26",
    summary: "Pneumatology is the study of the Holy Spirit. It addresses the Spirit's person (the third person of the Trinity, the Spirit of both Father and Son), the Spirit's work in creation (hovering over the waters in Genesis 1:2), in the Old Testament (empowering prophets and leaders), in Jesus (his baptism, temptation, and ministry), and in the new covenant community (Pentecost, regeneration, sanctification, gifting). The primary debates are the cessationism/continuationism dispute (are the sign gifts still active?) and the baptism of the Spirit (second blessing or simultaneous with conversion?).",
    key_questions: ["Is the Spirit a person or a force?", "Are the spiritual gifts still active?", "What is baptism of the Spirit?", "How does the Spirit relate to Scripture?"],
    key_theologians: "John Owen, Martyn Lloyd-Jones, Gordon Fee, Wayne Grudem",
    books: "John Owen, Communion with the Triune God; Gordon Fee, God's Empowering Presence",
    initials: "PHE",
  },
  {
    name: "Ecclesiology",
    subtitle: "The Doctrine of the Church",
    color: "#00D4AA",
    verse: "Matthew 16:18",
    summary: "Ecclesiology addresses the nature, marks, and government of the church. The Reformers identified two essential marks of the true church: the pure preaching of the Word and the right administration of the sacraments. Some add a third mark: church discipline. Ecclesiology debates governance (episcopal, presbyterian, congregational), the nature of baptism and the Lord's Supper (sacramental or ordinance?), the relationship between the visible and invisible church, church membership, and the church's mission in the world. Contemporary ecclesiology engages questions of multi-site churches, online church, and megachurch models.",
    key_questions: ["What are the marks of a true church?", "Who should govern the church?", "What is the relationship between baptism and salvation?", "Is online church real church?"],
    key_theologians: "Calvin, Mark Dever, Jonathan Leeman, Miroslav Volf",
    books: "Mark Dever, Nine Marks of a Healthy Church; Miroslav Volf, After Our Likeness",
    initials: "ECC",
  },
  {
    name: "Eschatology",
    subtitle: "The Doctrine of Last Things",
    color: "#F59E0B",
    verse: "Revelation 21:1",
    summary: "Eschatology addresses the end: death, resurrection, judgment, and the ultimate destiny of humans and creation. Individual eschatology covers death, intermediate state (what happens between death and resurrection?), and the final resurrection. Cosmic eschatology addresses the parousia (second coming of Christ), the millennium (amillennialism, premillennialism, postmillennialism), the Great Tribulation, the final judgment, heaven, and hell. The central debate is over the nature of the millennium and the sequence of last events. All evangelical positions agree on bodily resurrection, final judgment, eternal life, and eternal condemnation.",
    key_questions: ["Is there a literal 1000-year reign?", "Is hell eternal conscious punishment or annihilation?", "What is the 'new creation' — renovated earth or entirely new?", "What happens immediately after death?"],
    key_theologians: "Augustine, John Calvin, N.T. Wright, Anthony Hoekema, D.A. Carson",
    books: "Anthony Hoekema, The Bible and the Future; N.T. Wright, Surprised by Hope",
    initials: "ESC",
  },
];

const THINKERS_ST: { id: string; name: string; era: string; tradition: string; bio: string; quote: string; contribution: string }[] = [
  {
    id: "calvin-j",
    name: "John Calvin",
    era: "1509-1564",
    tradition: "Reformed",
    bio: "John Calvin was a French theologian and pastor who became the leading figure of the second generation of the Protestant Reformation. Working primarily in Geneva, he produced the Institutes of the Christian Religion — first published in 1536 and expanded through 1559 — which became the definitive statement of Reformed theology. Calvin was a rigorous biblical commentator, a systematic thinker, and a church reformer whose influence shaped Presbyterianism, Congregationalism, and the broader Reformed tradition.",
    quote: "Our wisdom, in so far as it ought to be deemed true and solid wisdom, consists almost entirely of two parts: the knowledge of God and of ourselves.",
    contribution: "Calvin created the definitive model of systematic theological treatment organized by loci, demonstrating how all Christian doctrine coheres around the knowledge of God and self. His Institutes set the template for confessional Reformed theology that endures to the present day.",
  },
  {
    id: "bavinck-h",
    name: "Herman Bavinck",
    era: "1854-1921",
    tradition: "Dutch Reformed",
    bio: "Herman Bavinck was a Dutch Reformed theologian, professor at the Theological School in Kampen and later at the Free University of Amsterdam. His four-volume Reformed Dogmatics (Gereformeerde Dogmatiek) is widely regarded as the greatest achievement of Reformed systematic theology in the modern era. Bavinck sought to integrate the best of classical Reformed orthodoxy with a rigorous engagement with modern philosophy, natural science, and historical theology — demonstrating the organic unity of Christian doctrine.",
    quote: "The same God who reveals himself in nature and in Scripture also created the human mind and implanted in it the capacity for knowing him.",
    contribution: "The greatest modern Reformed dogmatician, Bavinck masterfully integrated Scripture, reason, and church tradition into an organically unified theological vision. His work demonstrates how Reformed orthodoxy can engage modernity without capitulating to it.",
  },
  {
    id: "barth-k",
    name: "Karl Barth",
    era: "1886-1968",
    tradition: "Neo-orthodox",
    bio: "Karl Barth was a Swiss Reformed theologian whose work represents the most significant theological achievement of the twentieth century. His massive Church Dogmatics (Kirchliche Dogmatik, 13 part-volumes, left incomplete at his death) reoriented Protestant theology around the radical otherness of God and the centrality of Jesus Christ as the one Word of God. Barth's 1919 commentary on Romans broke decisively with nineteenth-century liberal theology and launched the neo-orthodox movement.",
    quote: "The Word of God is not a thing which we can handle, manipulate, or put to our own uses. It confronts us; it addresses us; it judges us.",
    contribution: "The twentieth century's most influential theologian, Barth developed a christocentric dogmatics of unparalleled scope and rigor. His insistence that all true knowledge of God comes through Jesus Christ reshaped Protestant theology and ecumenical dialogue.",
  },
  {
    id: "erickson-m",
    name: "Millard Erickson",
    era: "b. 1932",
    tradition: "Baptist",
    bio: "Millard Erickson is an American Baptist theologian who served for many years as a professor at Bethel Seminary and Truett Seminary. His three-volume Christian Theology (1983-1985, later revised as a single-volume work) became the most widely used evangelical systematic theology textbook in the English-speaking world. Erickson writes with clarity, pastoral concern, and careful engagement with alternative positions, making rigorous theology accessible to students and pastors.",
    quote: "The Bible is the supreme and final authority in matters of faith and practice, the standard by which all else must be measured.",
    contribution: "Author of the most widely used evangelical systematic theology textbook, Erickson made rigorous doctrinal thinking accessible to generations of seminary students and pastors. His work exemplifies the conservative evangelical synthesis of biblical authority and careful theological reasoning.",
  },
  {
    id: "aquinas-t",
    name: "Thomas Aquinas",
    era: "1225-1274",
    tradition: "Catholic",
    bio: "Thomas Aquinas was a Dominican friar, philosopher, and theologian who taught at the University of Paris. His Summa Theologiae — an encyclopedic systematic treatment of Christian doctrine structured as a series of disputed questions — represents the greatest achievement of medieval scholastic theology. Aquinas sought to synthesize Aristotelian philosophy with Christian revelation, demonstrating that faith and reason, properly understood, cannot ultimately contradict one another. He was declared a Doctor of the Church in 1323.",
    quote: "Theology is a science. The principles of other sciences are either self-evident and cannot be proved, or are proved by natural reason. This science derives its principles from divine revelation.",
    contribution: "The greatest synthesis of faith and reason in Christian history, Aquinas established the framework of natural theology, articulated the classical doctrine of God with philosophical precision, and showed how Christian doctrine could engage and subsume the best of human philosophy.",
  },
];

const DEBATES_ST: { id: string; topic: string; question: string; positions: { label: string; summary: string }[]; key_texts: string }[] = [
  {
    id: "impassibility",
    topic: "Divine Impassibility",
    question: "Does God suffer? Can God be affected by creaturely actions and experiences?",
    positions: [
      {
        label: "Classical Impassibility",
        summary: "God is without passions in the sense that he is not subject to involuntary emotional changes caused by creatures. God's love and justice are perfect and unchanging. Suffering implies deficiency; God lacks nothing. The Son suffered in his human nature, not his divine nature.",
      },
      {
        label: "Divine Passibility",
        summary: "God genuinely suffers with and for creation. The cross reveals a God who enters into human pain. Immutability and impassibility are Greek philosophical imports that distort the biblical portrait of a God who grieves, relents, and is moved by love.",
      },
    ],
    key_texts: "Thomas Weinandy, Does God Suffer?; Jurgen Moltmann, The Crucified God; Paul Gavrilyuk, The Suffering of the Impassible God",
  },
  {
    id: "3Dv4-n6OYGI",
    topic: "Open Theism vs. Classical Theism",
    question: "Does God know future free choices? Does divine foreknowledge entail divine determinism?",
    positions: [
      {
        label: "Classical Theism",
        summary: "God eternally knows all things, including every free human choice, without this knowledge causally determining those choices. God's omniscience is simple, eternal, and complete. Middle knowledge (Molinism) or timeless eternity (Boethius) are proposed solutions to the foreknowledge-freedom tension.",
      },
      {
        label: "Open Theism",
        summary: "God knows all that can be known, but future free choices are not yet actual and therefore unknowable even to God. God takes genuine risks, responds to prayer, and interacts dynamically with creation. This view preserves real human freedom and makes sense of biblical passages where God appears to change his mind.",
      },
    ],
    key_texts: "Clark Pinnock, The Openness of God; Bruce Ware, God's Lesser Glory; John Sanders, The God Who Risks",
  },
  {
    id: "hell",
    topic: "The Nature of Hell",
    question: "Is hell eternal conscious torment, annihilation of the wicked, or universal reconciliation?",
    positions: [
      {
        label: "Eternal Conscious Torment (ECT)",
        summary: "The wicked are raised bodily at the last judgment and consigned to eternal, conscious punishment. Hell is a real place of unending suffering. This is the historic majority position, grounded in passages like Matthew 25:46, Revelation 20:10, and the language of 'eternal' punishment.",
      },
      {
        label: "Annihilationism / Conditionalism",
        summary: "The wicked are finally destroyed rather than tormented forever. Immortality is a gift granted to the redeemed, not an inherent human property. 'Eternal punishment' refers to the permanent and irreversible nature of the destruction, not its duration. Proponents include John Stott and Edward Fudge.",
      },
    ],
    key_texts: "Edward Fudge, The Fire That Consumes; Robert Peterson, Hell on Trial; John Stott in Essentials; D.A. Carson, The Gagging of God",
  },
  {
    id: "women-ministry",
    topic: "Women in Ministry",
    question: "Are the offices of elder and senior pastor limited to qualified men, or open to all qualified believers?",
    positions: [
      {
        label: "Complementarianism",
        summary: "God designed men and women as equals in dignity but with distinct, complementary roles. The offices of elder and pastor are reserved for qualified men (1 Tim. 2:12, 1 Tim. 3:2). This reflects creational order, not cultural accommodation, and mirrors the relationship between Christ and the church.",
      },
      {
        label: "Egalitarianism",
        summary: "Spiritual gifts and church offices are distributed without regard to sex. The restrictive passages in Paul reflect specific first-century cultural situations, not universal norms. Galatians 3:28 ('neither male nor female') sets the redemptive-historical trajectory. Women served as prophets, deacons, and apostles in the New Testament.",
      },
    ],
    key_texts: "Wayne Grudem, Recovering Biblical Manhood and Womanhood; Ronald Pierce, Discovering Biblical Equality; Thomas Schreiner, Women in the Church",
  },
  {
    id: "justification",
    topic: "Justification",
    question: "Is justification the imputation of Christ's righteousness, or the covenant-membership declaration of the New Perspective?",
    positions: [
      {
        label: "Traditional Imputation",
        summary: "Justification is a forensic act in which God declares the sinner righteous on the basis of Christ's active and passive obedience imputed to the believer through faith alone. The righteousness that justifies is alien — outside the believer, belonging to Christ and credited to the sinner's account.",
      },
      {
        label: "New Perspective on Paul",
        summary: "Paul's doctrine of justification is primarily about covenant membership, not individual guilt. 'Works of the law' refers to Jewish identity markers (circumcision, food laws), not moral achievement. Justification declares who is in the covenant community, not merely how an individual is made right with God.",
      },
    ],
    key_texts: "N.T. Wright, What Saint Paul Really Said; Thomas Schreiner, Faith Alone; John Piper, The Future of Justification; E.P. Sanders, Paul and Palestinian Judaism",
  },
  {
    id: "atonement",
    topic: "Atonement",
    question: "Is penal substitution the necessary heart of the atonement, or one metaphor among several equally valid ones?",
    positions: [
      {
        label: "Penal Substitution as Necessary",
        summary: "The cross is objectively efficacious because Christ bore the penalty due to sinners in their place, satisfying divine justice. This is not merely one atonement metaphor but the underlying mechanism that grounds all others. Without it, there is no atonement — only moral influence or a display of love.",
      },
      {
        label: "Penal Substitution as Contingent",
        summary: "Scripture employs multiple atonement models — Christus Victor, moral influence, ransom, reconciliation, sacrifice — none of which requires the others. Penal substitution is a valid and important model but reflects a particular legal framework, not a metaphysical necessity. God could have forgiven freely without requiring satisfaction.",
      },
    ],
    key_texts: "John Stott, The Cross of Christ; Steve Chalke, The Lost Message of Jesus; Henri Blocher, 'Penal Substitution'; Scot McKnight, A Community Called Atonement",
  },
];

const RESOURCES_ST: { id: string; title: string; author: string; level: string; tradition: string; desc: string; best_for: string }[] = [
  {
    id: "grudem-st",
    title: "Systematic Theology",
    author: "Wayne Grudem",
    level: "Beginner",
    tradition: "Evangelical",
    desc: "The most widely read one-volume evangelical systematic theology, known for its accessibility, Scripture-richness, and clear explanations of each doctrine. Includes application sections and discussion questions. Reflects a conservative Baptist-Reformed perspective.",
    best_for: "Laypeople, undergraduates, and anyone beginning serious theological study",
  },
  {
    id: "GGCF3OPWN14",
    title: "Christian Theology",
    author: "Millard Erickson",
    level: "Beginner-Intermediate",
    tradition: "Baptist",
    desc: "A comprehensive one-volume systematic theology that carefully surveys alternative positions before presenting and defending Erickson's own conclusions. Known for fairness, clarity, and thorough bibliographies. The standard seminary textbook for a generation of evangelical students.",
    best_for: "Seminary students and pastors wanting a thorough, balanced evangelical introduction",
  },
  {
    id: "berkhof-st",
    title: "Systematic Theology",
    author: "Louis Berkhof",
    level: "Intermediate",
    tradition: "Reformed",
    desc: "A rigorous one-volume Reformed systematic theology in the tradition of the Westminster Standards. Berkhof covers the full range of Reformed doctrine with precision and careful interaction with alternative views. More technical than Grudem but invaluable for those in the Reformed tradition.",
    best_for: "Those in the Reformed tradition wanting a thorough, confessional systematic theology",
  },
  {
    id: "bavinck-rd",
    title: "Reformed Dogmatics (4 vols.)",
    author: "Herman Bavinck",
    level: "Advanced",
    tradition: "Dutch Reformed",
    desc: "The magnum opus of Dutch Reformed theology, covering Prolegomena, God and Creation, Sin and Salvation, and Holy Spirit/Church/New Creation. Bavinck engages the full sweep of Christian thought — patristic, medieval, Reformation, and modern — with encyclopedic learning and a synthetic theological vision.",
    best_for: "Advanced students and scholars wanting the greatest Reformed systematic theology",
  },
  {
    id: "barth-cd",
    title: "Church Dogmatics (13 vols.)",
    author: "Karl Barth",
    level: "Advanced",
    tradition: "Neo-Orthodox",
    desc: "The most ambitious theological project of the twentieth century. Barth's christocentric dogmatics spans doctrine of the Word of God, doctrine of God, doctrine of creation, and the unfinished doctrine of reconciliation. Dense, discursive, and rewarding — not meant to be read straight through but mined for its riches.",
    best_for: "Advanced students willing to wrestle with the most important theologian of the modern era",
  },
  {
    id: "aquinas-summa",
    title: "Summa Theologiae",
    author: "Thomas Aquinas",
    level: "Classic",
    tradition: "Catholic",
    desc: "The greatest systematic theological work of the medieval period, organized as a series of disputed questions covering the existence and nature of God, creation, the virtues, the life of Christ, and the sacraments. Written as a teaching text for students, though it has become the definitive statement of Catholic theology.",
    best_for: "Anyone wanting to understand classical Catholic theology and the synthesis of faith and reason",
  },
];

export default function SystematicTheology101Page() {
  type Tab = "loci" | "thinkers" | "debates" | "resources" | "journal" | "videos";
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_systematic-theology-101_tab", "loci");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedThinker, setSelectedThinker] = usePersistedState("vine_systematic-theology-101_selected_thinker", "calvin-j");
  const locus = LOCI.find(l => l.name === selected);

  type JournalEntry = { id: string; date: string; locus: string; insight: string; applying: string };
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(() => { try { return JSON.parse(localStorage.getItem("vine_st101j_entries") ?? "[]"); } catch { return []; } });
  const [jLocus, setJLocus] = useState("");
  const [jInsight, setJInsight] = useState("");
  const [jApplying, setJApplying] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_st101j_entries", JSON.stringify(journalEntries)); } catch {} }, [journalEntries]);
  function saveJournalEntry() {
    if (!jLocus.trim() && !jInsight.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), locus: jLocus, insight: jInsight, applying: jApplying };
    setJournalEntries(prev => [entry, ...prev]);
    setJLocus(""); setJInsight(""); setJApplying("");
  }
  function deleteJournalEntry(id: string) { setJournalEntries(prev => prev.filter(e => e.id !== id)); }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🏛️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Systematic Theology 101</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            Systematic theology organizes Christian doctrine into the major loci &mdash; the classical headings under which the whole counsel of God is examined. This is the map of Christian thought.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 28, background: CARD, padding: 6, borderRadius: 10, border: `1px solid ${BORDER}` }}>
          {([
            { id: "loci" as const, label: "Loci", icon: "📐" },
            { id: "thinkers" as const, label: "Thinkers", icon: "🎓" },
            { id: "debates" as const, label: "Debates", icon: "⚡" },
            { id: "resources" as const, label: "Resources", icon: "📚" },
            { id: "journal" as const, label: "My Journal", icon: "📓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ]).map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "loci" && (
          <div style={{ display: "grid", gridTemplateColumns: locus ? "1fr 1fr" : "repeat(auto-fill, minmax(280px, 1fr))", gap: 14, alignItems: "start" }}>
            <div style={{ display: "contents" }}>
              {!locus && LOCI.map((l, i) => (
                <button type="button" key={i} onClick={() => setSelected(l.name)}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22, cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.border = `1px solid ${l.color}40`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.border = `1px solid ${BORDER}`; }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: `${l.color}20`, border: `1px solid ${l.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: l.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                      {l.initials}
                    </div>
                    <div>
                      <div style={{ color: l.color, fontWeight: 800, fontSize: 16 }}>{l.name}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{l.subtitle}</div>
                    </div>
                  </div>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}><VerseRef reference={l.verse} /></span>
                </button>
              ))}
            </div>

            {locus && (
              <>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {LOCI.map((l, i) => (
                    <button type="button" key={i} onClick={() => setSelected(l.name)}
                      style={{ background: selected === l.name ? `${l.color}12` : CARD, border: `1px solid ${selected === l.name ? l.color + "50" : BORDER}`, borderRadius: 12, padding: "14px 18px", cursor: "pointer", textAlign: "left" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 38, height: 38, borderRadius: 8, background: `${l.color}20`, border: `1px solid ${l.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: l.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                          {l.initials}
                        </div>
                        <div>
                          <div style={{ color: selected === l.name ? l.color : TEXT, fontWeight: 700, fontSize: 14 }}>{l.name}</div>
                          <div style={{ color: MUTED, fontSize: 11 }}>{l.subtitle}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${locus.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: `${locus.color}20`, border: `1px solid ${locus.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: locus.color, fontWeight: 900, fontSize: 12, flexShrink: 0 }}>
                      {locus.initials}
                    </div>
                    <div>
                      <h2 style={{ color: locus.color, fontWeight: 900, fontSize: 20, margin: "0 0 2px" }}>{locus.name}</h2>
                      <div style={{ color: MUTED, fontSize: 13 }}>{locus.subtitle} · {locus.verse}</div>
                    </div>
                  </div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{locus.summary}</p>

                  <div style={{ background: `${locus.color}08`, border: `1px solid ${locus.color}15`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                    <div style={{ color: locus.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY QUESTIONS</div>
                    <ul style={{ margin: 0, padding: "0 0 0 14px" }}>
                      {locus.key_questions.map((q, i) => (
                        <li key={i} style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, marginBottom: 2 }}>{q}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
                    <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10 }}>
                      <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>KEY THEOLOGIANS</div>
                      <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{locus.key_theologians}</p>
                    </div>
                    <div style={{ background: "#F59E0B08", border: "1px solid #F59E0B15", borderRadius: 8, padding: 10 }}>
                      <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>START HERE</div>
                      <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{locus.books}</p>
                    </div>
                  </div>

                  <button type="button" onClick={() => setSelected(null)}
                    style={{ background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, padding: "7px 14px", borderRadius: 8, fontSize: 12, cursor: "pointer" }}>
                    ← Back to all
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === "thinkers" && (
          <div style={{ display: "grid", gridTemplateColumns: "210px 1fr", gap: 20, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 100 }}>
              {THINKERS_ST.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedThinker(v.id)}
                  style={{ background: selectedThinker === v.id ? `${PURPLE}20` : CARD,
                    border: `1px solid ${selectedThinker === v.id ? PURPLE : BORDER}`,
                    borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedThinker === v.id ? "#fff" : TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.era}</div>
                </button>
              ))}
            </div>
            {(() => {
              const t = THINKERS_ST.find(x => x.id === selectedThinker)!;
              return (
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                  <h2 style={{ margin: "0 0 4px", color: TEXT, fontWeight: 900, fontSize: 24 }}>{t.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{t.era} · {t.tradition}</div>
                  <p style={{ marginTop: 16, color: TEXT, fontSize: 14, lineHeight: 1.8 }}>{t.bio}</p>
                  <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 16, fontStyle: "italic", color: MUTED, margin: "20px 0" }}>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 14 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>CONTRIBUTION</div>
                    <p style={{ color: TEXT, margin: 0, fontSize: 14, lineHeight: 1.7 }}>{t.contribution}</p>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {activeTab === "debates" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {DEBATES_ST.map(d => (
              <div key={d.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: GREEN, marginBottom: 8, margin: "0 0 8px", fontWeight: 800, fontSize: 18 }}>{d.topic}</h3>
                <p style={{ color: MUTED, fontStyle: "italic", marginBottom: 16 }}>{d.question}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                  {d.positions.map((p, i) => (
                    <div key={i} style={{ background: i === 0 ? `${PURPLE}10` : `${GREEN}10`, border: `1px solid ${i === 0 ? PURPLE : GREEN}30`, borderRadius: 8, padding: 12 }}>
                      <div style={{ color: i === 0 ? PURPLE : GREEN, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>{p.label}</div>
                      <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{p.summary}</p>
                    </div>
                  ))}
                </div>
                <div style={{ color: MUTED, fontSize: 12 }}>Key texts: {d.key_texts}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "resources" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {RESOURCES_ST.map(r => (
              <div key={r.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 8px", borderRadius: 6, fontSize: 10, fontWeight: 700 }}>{r.level}</span>
                  <div style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{r.title}</div>
                </div>
                <div style={{ color: MUTED, fontSize: 13 }}>{r.author} · {r.tradition}</div>
                <p style={{ fontSize: 13, marginTop: 12, color: TEXT, lineHeight: 1.7 }}>{r.desc}</p>
                <div style={{ marginTop: 12, background: `${GREEN}10`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: "8px 12px", fontSize: 12, color: GREEN }}>Best for: {r.best_for}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>My Systematic Theology Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Record the theological loci you are studying, what you are learning, and how it is shaping your faith.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input value={jLocus} onChange={e => setJLocus(e.target.value)} placeholder="Locus or doctrine (Christology, Soteriology, Eschatology…)" style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <textarea value={jInsight} onChange={e => setJInsight(e.target.value)} placeholder="Key insight or question from your study?" rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jApplying} onChange={e => setJApplying(e.target.value)} placeholder="How is this reshaping your worship, prayer, or ethics?" rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <button type="button" onClick={saveJournalEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "11px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer", alignSelf: "flex-start" }}>Save Entry</button>
              </div>
            </div>
            {journalEntries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", padding: 32 }}>No journal entries yet. Begin recording your theological study.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {journalEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ color: PURPLE, fontWeight: 700, fontSize: 15 }}>{entry.locus || "Theology Journal"}</span>
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
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on systematic theology.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "HGHqu9-DtXk", title: "Foundations (1 of 59): What Is Theology?", channel: "Ligonier Ministries / R.C. Sproul", description: "The opening lecture in R.C. Sproul's landmark 'Foundations' series — an overview of systematic theology and why every Christian should care about doctrine." },
                  { videoId: "E65KV3M8RZE", title: "What Is Theology? — An Overview of Systematic Theology", channel: "Ligonier Ministries / R.C. Sproul", description: "Sproul defines theology and shows how God's revelation fits together coherently, setting the stage for the entire systematic theology curriculum." },
                  { videoId: "Z-17KxpjL0Q", title: "Sanctification — Foundations Overview", channel: "Ligonier Ministries / R.C. Sproul", description: "A focused lecture on the doctrine of sanctification — what it is, how it works, and its relationship to justification and glorification." },
                  { videoId: "ej_6dVdJSIU", title: "Three in Person — The Trinity", channel: "Ligonier Ministries / R.C. Sproul", description: "Sproul unpacks the doctrine of the Trinity with clarity and depth, addressing why this central doctrine matters for every Christian." },
                  { videoId: "G-2e9mMf7E8", title: "Perseverance of the Saints — Foundations", channel: "Ligonier Ministries / R.C. Sproul", description: "A theological examination of the perseverance of the saints, its biblical foundations, and its pastoral implications for assurance and faith." },
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
      </main>
      <Footer />
    </div>
  );
}
