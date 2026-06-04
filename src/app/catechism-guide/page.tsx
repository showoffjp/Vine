"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "catechisms" | "questions" | "history" | "voices" | "videos";

const CATECHISMS = [
  {
    name: "Westminster Shorter Catechism",
    tradition: "Reformed / Presbyterian",
    year: "1647",
    color: GREEN,
    questions: 107,
    audience: "Children & New Believers",
    description: "Produced by the Westminster Assembly in 1647 alongside the Larger Catechism and Confession of Faith, the Shorter Catechism has been the most widely used catechism in the English-speaking Reformed world for nearly 400 years. It consists of 107 questions and answers covering the Ten Commandments, the Apostles Creed, the Lord's Prayer, and the sacraments. Its opening question and answer remains the most famous in Christian catechesis.",
    famous_qa: [
      { q: "Q1: What is the chief end of man?", a: "Man's chief end is to glorify God, and to enjoy him forever." },
      { q: "Q4: What is God?", a: "God is a Spirit, infinite, eternal, and unchangeable, in his being, wisdom, power, holiness, justice, goodness, and truth." },
      { q: "Q14: What is sin?", a: "Sin is any want of conformity unto, or transgression of, the law of God." },
    ],
    best_for: "Children's catechesis; new converts; Reformed churches; anyone wanting a comprehensive, brief theological summary",
    access: "Free at westminsterstandards.org; also in many Reformed study Bibles",
    initials: "WSC",
  },
  {
    name: "Westminster Larger Catechism",
    tradition: "Reformed / Presbyterian",
    year: "1647",
    color: PURPLE,
    questions: 196,
    audience: "Adults & Church Members",
    description: "The companion to the Shorter Catechism, the Larger Catechism is designed for adult instruction and public use in the church. Its 196 questions provide much more extensive treatment of doctrine, including a detailed exposition of each commandment listing specific duties required and sins forbidden. The Larger Catechism is the most thorough catechetical treatment of biblical ethics in the Protestant tradition.",
    famous_qa: [
      { q: "Q1: What is the chief and highest end of man?", a: "Man's chief and highest end is to glorify God, and fully to enjoy him forever." },
      { q: "Q7: What is God?", a: "God is a Spirit, in and of himself infinite in being, glory, blessedness, and perfection..." },
      { q: "Q36: Who is the Mediator of the covenant of grace?", a: "The only Mediator of the covenant of grace is the Lord Jesus Christ, who, being the eternal Son of God..." },
    ],
    best_for: "Deep theological formation; understanding the Christian ethical system; serious adult study groups",
    access: "Free at westminsterstandards.org; Trinity Psalter Hymnal includes both catechisms",
    initials: "WLC",
  },
  {
    name: "Heidelberg Catechism",
    tradition: "Reformed / Continental",
    year: "1563",
    color: "#EF4444",
    questions: 129,
    audience: "All Ages — especially Confirmands",
    description: "Written in 1563 in Heidelberg, Germany, under the direction of Elector Frederick III, the Heidelberg Catechism is the most warmly devotional of all the Reformed standards. It is organized around three themes: human misery, deliverance through Christ, and gratitude for salvation. Its opening question is considered one of the most beautiful statements of assurance in all of Christian literature. Used weekly in many Dutch Reformed churches worldwide.",
    famous_qa: [
      { q: "Q1: What is your only comfort in life and in death?", a: "That I am not my own, but belong — body and soul, in life and in death — to my faithful Savior, Jesus Christ." },
      { q: "Q2: What must you know to live and die in the joy of this comfort?", a: "Three things: first, how great my sin and misery are; second, how I am set free from all my sins and their misery; third, how I am to thank God for such deliverance." },
      { q: "Q26: What do you believe when you say: I believe in God, the Father almighty, Creator of heaven and earth?", a: "That the eternal Father of our Lord Jesus Christ, who out of nothing created heaven and earth..." },
    ],
    best_for: "Confirmation classes; personal devotional use; Dutch Reformed, Christian Reformed, and URC churches; the warmest and most pastoral of all catechisms",
    access: "Free at heidelblog.net; also RCA and CRCNA websites; many editions available",
    initials: "HC",
  },
  {
    name: "New City Catechism",
    tradition: "Broadly Evangelical / Reformed",
    year: "2012",
    color: "#3B82F6",
    questions: 52,
    audience: "Families & Contemporary Learners",
    description: "Developed by Timothy Keller and Sam Shammas and published by The Gospel Coalition and Redeemer Presbyterian, the New City Catechism is a contemporary 52-question catechism drawing from the Westminster and Heidelberg standards. Each question includes a brief answer, a longer explanation, a Scripture reference, a historic prayer, and modern commentary. The free app includes audio, video, and children's versions.",
    famous_qa: [
      { q: "Q1: What is our only hope in life and death?", a: "That we are not our own but belong, body and soul, both in life and death, to God and to our Savior Jesus Christ." },
      { q: "Q11: What is God's will for us in the fourth commandment?", a: "That the divine service and rest be maintained; that I regularly attend the assembly of God's people to learn what God's Word teaches..." },
      { q: "Q35: Since we are redeemed by grace alone, through faith alone, why must we still do good works?", a: "Because Christ, having redeemed us by his blood, is also restoring us by his Spirit to be like himself..." },
    ],
    best_for: "Family catechesis; small groups; modern learners; anyone wanting a theologically rich but accessible format with multimedia support",
    access: "Free app at newcitycatechism.com; also available in book form from Crossway",
    initials: "NCC",
  },
  {
    name: "Luther's Small Catechism",
    tradition: "Lutheran",
    year: "1529",
    color: "#F59E0B",
    questions: 6,
    audience: "Children & Families",
    description: "Written by Martin Luther in 1529 after visiting parishes in Saxony and being horrified by the ignorance of both laity and clergy, the Small Catechism covers the Ten Commandments, the Apostles Creed, the Lord's Prayer, Baptism, Confession, and the Lord's Supper. Luther intended it for household use — fathers teaching their families. Its simplicity, warmth, and brevity have made it beloved for 500 years.",
    famous_qa: [
      { q: "Second Commandment: What does this mean?", a: "We should fear and love God so that we do not curse, swear, use satanic arts, lie, or deceive by His name, but call upon it in every trouble, pray, praise, and give thanks." },
      { q: "First Article of the Creed: What does this mean?", a: "I believe that God has made me and all creatures; that He has given me my body and soul, eyes, ears, and all my members, my reason and all my senses, and still takes care of them." },
      { q: "Lord's Prayer: What is prayer?", a: "Prayer is talking with God, trusting that He hears us and will answer." },
    ],
    best_for: "Lutheran families; children ages 8-14; anyone wanting the original Reformation catechetical document",
    access: "Free at lutheran-catechism.com; CPH (Concordia Publishing House); many editions",
    initials: "LSC",
  },
  {
    name: "Baltimore Catechism",
    tradition: "Roman Catholic",
    year: "1885",
    color: "#10B981",
    questions: 421,
    audience: "Catholic Children & Adults",
    description: "The official catechism of American Roman Catholicism from 1885 until the publication of the Catechism of the Catholic Church in 1992. Produced by the Third Plenary Council of Baltimore, it remained the primary catechetical text in American Catholic schools for over 80 years. Its question-and-answer format covering creation, fall, redemption, the sacraments, and the commandments shaped the faith of generations of American Catholics.",
    famous_qa: [
      { q: "Q1: Who made us?", a: "God made us." },
      { q: "Q2: Who is God?", a: "God is the Supreme Being, infinitely perfect, who made all things and keeps them in existence." },
      { q: "Q6: Why did God make us?", a: "God made us to show forth His goodness and to share with us His everlasting happiness in heaven." },
    ],
    best_for: "Understanding Catholic catechesis; comparative theology; Catholic families; historical perspective",
    access: "Public domain — multiple free online editions; Baltimore Catechism No. 2 and No. 3 available on Amazon",
    initials: "BAL",
  },
  {
    name: "Catechism of the Catholic Church",
    tradition: "Roman Catholic",
    year: "1992",
    color: "#6366F1",
    questions: 2865,
    audience: "Adults — Reference Work",
    description: "The official contemporary catechism of the Roman Catholic Church, promulgated by Pope John Paul II in 1992. At 2,865 paragraphs, it is the most comprehensive catechetical document in Christian history — covering all Catholic doctrine, moral teaching, liturgy, and prayer with full biblical and patristic citations. Even Protestants studying Catholic theology find it indispensable as a definitive primary source.",
    famous_qa: [
      { q: "CCC 27: The desire for God", a: "The desire for God is written in the human heart, because man is created by God and for God; and God never ceases to draw man to himself." },
      { q: "CCC 234: The mystery of the Most Holy Trinity", a: "The mystery of the Most Holy Trinity is the central mystery of Christian faith and life." },
      { q: "CCC 1691: Life in Christ", a: "Christian, recognize your dignity, and now that you share in God's own nature, do not return by sin to your former base condition." },
    ],
    best_for: "Understanding Catholic doctrine comprehensively; ecumenical dialogue; comparative theology; serious scholars",
    access: "Free at vatican.va; USCCB edition at usccb.org; many print editions available",
    initials: "CCC",
  },
  {
    name: "Baptist Catechism (Keach's)",
    tradition: "Baptist / Reformed",
    year: "1677",
    color: "#EC4899",
    questions: 114,
    audience: "Baptist Families & Churches",
    description: "Written by Benjamin Keach and based on the Westminster Shorter Catechism, adapted for Baptist distinctives (particularly regarding baptism and church membership). It was revised and endorsed by Charles Spurgeon as Spurgeon's Catechism. The Reformed Baptist tradition has used this catechism for over 300 years as a tool for family discipleship and new member instruction.",
    famous_qa: [
      { q: "Q1: Who is the first and best of beings?", a: "God is the first and best of beings." },
      { q: "Q4: What is God?", a: "God is a Spirit, infinite, eternal, and unchangeable, in his being, wisdom, power, holiness, justice, goodness, and truth." },
      { q: "Q30: How doth the Spirit apply to us the redemption purchased by Christ?", a: "The Spirit applies to us the redemption purchased by Christ, by working faith in us..." },
    ],
    best_for: "Reformed Baptist churches; families in the 1689 London Baptist Confession tradition; Spurgeon-influenced ministries",
    access: "Free at reformedreader.org; also published by Founders Press; Spurgeon's version widely available",
    initials: "BKC",
  },
];

const TRADITIONS = ["All", "Reformed / Presbyterian", "Reformed / Continental", "Broadly Evangelical / Reformed", "Lutheran", "Roman Catholic", "Baptist / Reformed"];

const SAMPLE_QUESTIONS = [
  {
    id: 1,
    question: "What is the chief end of man?",
    answer: "Man's chief end is to glorify God, and to enjoy him forever.",
    source: "Westminster Shorter Catechism, Q1",
    tradition: "Reformed / Presbyterian",
  },
  {
    id: 2,
    question: "What is your only comfort in life and in death?",
    answer: "That I am not my own, but belong — body and soul, in life and in death — to my faithful Savior, Jesus Christ.",
    source: "Heidelberg Catechism, Q1",
    tradition: "Reformed / Continental",
  },
  {
    id: 3,
    question: "Who made you?",
    answer: "God made me.",
    source: "Baltimore Catechism, Q1",
    tradition: "Roman Catholic",
  },
  {
    id: 4,
    question: "What is God?",
    answer: "God is the Supreme Being, infinitely perfect, who made all things and keeps them in existence.",
    source: "Baltimore Catechism, Q2",
    tradition: "Roman Catholic",
  },
  {
    id: 5,
    question: "I believe in God, the Father Almighty — what do you confess here?",
    answer: "That the eternal Father of our Lord Jesus Christ, who out of nothing created heaven and earth and everything in them, who still upholds and rules them by his eternal counsel and providence, is my God and Father because of Christ his Son.",
    source: "Heidelberg Catechism, Q26",
    tradition: "Reformed / Continental",
  },
  {
    id: 6,
    question: "What is our only hope in life and death?",
    answer: "That we are not our own but belong, body and soul, both in life and death, to God and to our Savior Jesus Christ.",
    source: "New City Catechism, Q1",
    tradition: "Broadly Evangelical / Reformed",
  },
];

const CATECHISM_HISTORY = [
  {
    id: 1,
    era: "Early Church",
    title: "The Didache & Baptismal Catechesis",
    year: "c. AD 50–150",
    description: "The earliest Christian communities developed oral and written instruction for converts preparing for baptism. The Didache ('The Teaching of the Twelve Apostles') is the oldest surviving catechetical document, containing ethical instruction, liturgical practices, and the Two Ways teaching. Baptismal catechesis in this period could last up to three years, covering basic doctrine, ethics, and Christian community life.",
    significance: "Establishes that catechesis is as old as the church itself — the Great Commission's 'teaching them to observe all that I commanded' required structured instruction from the beginning.",
  },
  {
    id: 2,
    era: "Medieval",
    title: "Peter Lombard's Sentences & Scholastic Formation",
    year: "c. 1150–1500",
    description: "Medieval catechesis shifted toward the universities and the confessional. Peter Lombard's Four Books of Sentences (c. 1150) became the standard theological textbook for centuries, requiring every theology student to write a commentary on it — including Aquinas, Bonaventure, and Luther. The Fourth Lateran Council (1215) mandated annual confession, driving parish priests to teach the basics of the faith systematically.",
    significance: "The medieval period demonstrates the tension between academic theology and popular catechesis — a tension the Reformers would address directly with vernacular, accessible catechisms.",
  },
  {
    id: 3,
    era: "Reformation",
    title: "Luther's Catechisms",
    year: "1529",
    description: "After conducting parish visitations in Saxony in 1528, Martin Luther was appalled by the theological ignorance of clergy and laity alike. In 1529 he published both the Small Catechism (for households and children) and the Large Catechism (for pastors and teachers). Both cover the Ten Commandments, Apostles Creed, Lord's Prayer, Baptism, and the Lord's Supper. The Small Catechism's simple question-and-answer format for each section became the model for all Protestant catechisms that followed.",
    significance: "Luther's catechisms triggered a catechetical revolution across Protestantism. Within a generation, Calvin, Bullinger, Cranmer, and others produced their own catechisms — making the 16th century the golden age of Christian catechesis.",
  },
  {
    id: 4,
    era: "Post-Reformation",
    title: "Westminster Standards & Reformed Confessionalism",
    year: "1647",
    description: "The Westminster Assembly (1643–1653) produced the most comprehensive Reformed confessional standards in history: the Confession of Faith, the Larger Catechism, and the Shorter Catechism. The Heidelberg Catechism (1563) had already given the Continental Reformed churches their catechetical standard. Together these documents defined Reformed orthodoxy and have shaped Presbyterian, Dutch Reformed, and Baptist confessionalism for nearly four centuries.",
    significance: "The confessional period established the principle that churches should have precise, agreed-upon doctrinal standards — and that catechisms are the primary vehicle for transmitting those standards to successive generations.",
  },
  {
    id: 5,
    era: "Modern",
    title: "Baltimore Catechism to New City Catechism",
    year: "1885–present",
    description: "The Baltimore Catechism (1885) standardized Catholic catechesis in America for nearly a century. Vatican II (1962–65) prompted the eventual Catechism of the Catholic Church (1992), the most comprehensive catechetical document ever produced. In Protestant circles, catechetical interest waned through much of the 20th century before a major revival beginning in the 1990s — producing the New City Catechism (2012) and renewed emphasis on catechesis in Reformed and Anglican churches.",
    significance: "The modern catechetical revival reflects a growing recognition that doctrinal formation — not merely emotional experience — is essential for durable Christian discipleship in a post-Christian culture.",
  },
];

const VOICES_CAT = [
  {
    id: 1,
    name: "Martin Luther",
    era: "1483–1546",
    context: "Reformer, Wittenberg",
    bio: "Martin Luther's discovery that ordinary Germans — including pastors — were ignorant of the most basic Christian truths drove him to write his catechisms in 1529. He saw catechesis not as a mechanical drilling of doctrine but as the means by which the gospel would enter the home and transform daily life. He directed his Small Catechism specifically to fathers, making them responsible for the spiritual instruction of their households.",
    quote: "A person who knows the Ten Commandments perfectly knows the entire Scripture. In all affairs and circumstances he can counsel, help, comfort, judge, and decide both spiritual and temporal matters, and is qualified to sit in judgment upon all doctrines, estates, spirits, laws, and whatever else is in the world.",
    contribution: "Invented the modern catechetical format — brief Q&A structure, household use, covering law, creed, prayer, and sacraments — which every Protestant catechism since has followed.",
  },
  {
    id: 2,
    name: "John Calvin",
    era: "1509–1564",
    context: "Reformer, Geneva",
    bio: "Calvin wrote his Genevan Catechism in 1542 as a tool for the instruction of children in Geneva. He believed that without systematic catechesis the Reformation would produce a church of nominal converts rather than formed disciples. Calvin's catechism is notable for its warm, pastoral tone — quite different from his reputation — and for its insistence that all Christian doctrine flows from and returns to the knowledge of God.",
    quote: "Without knowledge of self there is no knowledge of God. Without knowledge of God there is no knowledge of self. This double knowledge — and nothing less — is what catechesis exists to produce.",
    contribution: "Established catechetical instruction as a regular part of the church's weekly life in Geneva, making Sunday catechism classes for children normative in Reformed churches across Europe.",
  },
  {
    id: 3,
    name: "Zacharias Ursinus",
    era: "1534–1583",
    context: "Primary author, Heidelberg Catechism",
    bio: "Ursinus was a student of Melanchthon in Wittenberg before settling in Heidelberg, where Elector Frederick III commissioned him to write a catechism that could unite the Lutheran and Reformed factions in the Palatinate. The resulting Heidelberg Catechism (1563) — written primarily by Ursinus with input from Caspar Olevianus — achieved something rare: a confessional document that is simultaneously precise in doctrine and warm in pastoral application. Ursinus's genius was organizing all of Christian doctrine around the single question of personal assurance.",
    quote: "The entire knowledge of Christian doctrine necessary for salvation is comprised in the answer to this one question: what is your only comfort in life and in death? Everything else is elaboration.",
    contribution: "Created the most beloved catechism in the Reformed tradition — distinguished from Westminster's precision by its personal, devotional tone, organizing all doctrine around the believer's comfort in Christ.",
  },
  {
    id: 4,
    name: "J.I. Packer",
    era: "1926–2020",
    context: "Oxford-trained theologian; Regent College, Vancouver",
    bio: "J.I. Packer spent decades arguing that evangelical Christianity had lost its doctrinal backbone — producing a mile-wide, inch-deep faith unable to sustain believers through suffering or resist cultural accommodation. His book Knowing God (1973) was itself a work of popular catechesis, and he wrote extensively on the necessity of recovering formal catechetical instruction. Packer believed that without knowing what you believe and why, Christian experience has no foundation.",
    quote: "Catechizing is the work of filling the mind with the truth of God, in such a way that the heart is engaged and the will is directed. It is not indoctrination — it is formation. The difference is whether you are producing parrots or disciples.",
    contribution: "Made the theological case for catechetical recovery in modern evangelicalism, arguing that doctrinal shallowness — not cultural irrelevance — is the church's deepest crisis.",
  },
  {
    id: 5,
    name: "Timothy Keller",
    era: "1950–2023",
    context: "Redeemer Presbyterian, New York City",
    bio: "Keller co-authored the New City Catechism (2012) as a contemporary adaptation of the Westminster and Heidelberg standards for urban, 21st-century Christians. He believed catechisms had been abandoned precisely when they were most needed — in a culture that offers no coherent account of the good life. Keller argued that the question-and-answer form is uniquely suited to a generation shaped by search engines and soundbites: it provides a memorable, precise handle on truths that would otherwise remain vague.",
    quote: "Catechesis is not an alternative to the gospel — it is how the gospel becomes habitual in the mind and heart. You need both conversion and formation. The Reformers never separated them.",
    contribution: "Revived catechetical practice in urban Reformed churches and produced the New City Catechism — making the tradition accessible to a new generation through app, video, and contemporary commentary.",
  },
];

export default function CatechismGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_catechism-guide_tab", "catechisms");
  const [tradition, setTradition] = usePersistedState<string>("vine_catechism-guide_tradition", "All");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<number>(VOICES_CAT[0].id);

  const filtered = CATECHISMS.filter(c => tradition === "All" || c.tradition === tradition);
  const cat = CATECHISMS.find(c => c.name === selected);
  const voice = VOICES_CAT.find(v => v.id === selectedVoice) ?? VOICES_CAT[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📖</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Guide to the Christian Catechisms</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            Catechisms are question-and-answer guides to Christian doctrine used for 2,000 years to form believers in the faith. From Luther to Westminster to Heidelberg &mdash; every tradition has its catechism.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 4, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 4, marginBottom: 28, width: "fit-content" }}>
          {(["catechisms", "questions", "history", "voices", "videos"] as const).map(t => (
            <button type="button" key={t} onClick={() => setActiveTab(t)}
              style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "catechisms" ? "Catechisms" : t === "questions" ? "Famous Q&As" : t === "history" ? "History" : t === "voices" ? "Voices" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {/* CATECHISMS TAB */}
        {activeTab === "catechisms" && (
          <>
            <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 20, marginBottom: 28 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 10 }}>WHY CATECHIZE?</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
                {[
                  { label: "Rooted Doctrine", desc: "Catechisms prevent theological drift by grounding believers in precise, time-tested formulations" },
                  { label: "Family Worship", desc: "Originally designed for parents to teach children — the primary catechism venue in the Reformation" },
                  { label: "Memorable Truth", desc: "The Q&A format imprints doctrine at a deep level — many believers remember catechism answers for life" },
                  { label: "Church Unity", desc: "A shared catechism creates theological unity within a congregation and a confessional tradition" },
                ].map((r, i) => (
                  <div key={i} style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{r.label}</div>
                    <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{r.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {TRADITIONS.map(t => (
                <button type="button" key={t} onClick={() => setTradition(t)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${tradition === t ? GREEN : BORDER}`, background: tradition === t ? `${GREEN}15` : "transparent", color: tradition === t ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {t}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: cat ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((c, i) => (
                  <button type="button" key={i} onClick={() => setSelected(selected === c.name ? null : c.name)}
                    style={{ background: selected === c.name ? `${c.color}12` : CARD, border: `1px solid ${selected === c.name ? c.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${c.color}20`, border: `1px solid ${c.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                        {c.initials}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{c.name}</span>
                          <span style={{ background: `${c.color}15`, color: c.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{c.year}</span>
                        </div>
                        <div style={{ display: "flex", gap: 8, marginTop: 3, alignItems: "center", flexWrap: "wrap" }}>
                          <span style={{ color: MUTED, fontSize: 12 }}>{c.tradition}</span>
                          <span style={{ color: MUTED, fontSize: 10 }}>·</span>
                          <span style={{ color: MUTED, fontSize: 11 }}>{c.questions} questions</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {cat && (
                <div style={{ background: CARD, border: `1px solid ${cat.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <h2 style={{ color: cat.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{cat.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{cat.tradition} · {cat.year} · {cat.questions} questions</div>

                  <div style={{ marginBottom: 6 }}>
                    <span style={{ background: `${cat.color}12`, color: cat.color, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{cat.audience}</span>
                  </div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14, marginTop: 14 }}>{cat.description}</p>

                  <div style={{ marginBottom: 14 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 8 }}>SAMPLE QUESTIONS & ANSWERS</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {cat.famous_qa.map((qa, i) => (
                        <div key={i} style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 10 }}>
                          <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{qa.q}</div>
                          <div style={{ color: TEXT, fontSize: 12, lineHeight: 1.6, fontStyle: "italic" }}>{qa.a}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>BEST FOR</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{cat.best_for}</p>
                  </div>

                  <div style={{ background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10 }}>
                    <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHERE TO ACCESS</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{cat.access}</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* QUESTIONS TAB */}
        {activeTab === "questions" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 6px" }}>Famous Catechism Questions &amp; Answers</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                Six of the most celebrated Q&amp;As in the catechetical tradition &mdash; spanning traditions, centuries, and audiences.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {SAMPLE_QUESTIONS.map(q => (
                <div key={q.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22, display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ color: TEXT, fontWeight: 800, fontSize: 16, lineHeight: 1.4 }}>
                    &ldquo;{q.question}&rdquo;
                  </div>
                  <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, fontStyle: "italic", flex: 1 }}>
                    {q.answer}
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}>
                    <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{q.source}</span>
                    <span style={{ background: `${GREEN}10`, color: GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{q.tradition}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HISTORY TAB */}
        {activeTab === "history" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 6px" }}>History of Christian Catechesis</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                Two thousand years of the church teaching the faith &mdash; from early baptismal instruction to the contemporary catechetical revival.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {CATECHISM_HISTORY.map((entry, idx) => {
                const eraColors: Record<string, string> = {
                  "Early Church": "#10B981",
                  "Medieval": "#F59E0B",
                  "Reformation": "#EF4444",
                  "Post-Reformation": PURPLE,
                  "Modern": "#3B82F6",
                };
                const color = eraColors[entry.era] ?? GREEN;
                const isLast = idx === CATECHISM_HISTORY.length - 1;
                return (
                  <div key={entry.id} style={{ display: "flex", gap: 20, alignItems: "stretch" }}>
                    {/* Timeline spine */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 32, flexShrink: 0 }}>
                      <div style={{ width: 14, height: 14, borderRadius: "50%", background: color, border: `2px solid ${color}`, marginTop: 22, flexShrink: 0 }} />
                      {!isLast && <div style={{ width: 2, flex: 1, background: BORDER, marginTop: 4 }} />}
                    </div>
                    {/* Content */}
                    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 14, flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                        <span style={{ background: `${color}18`, color: color, padding: "2px 12px", borderRadius: 20, fontSize: 11, fontWeight: 800 }}>{entry.era}</span>
                        <span style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>{entry.year}</span>
                      </div>
                      <div style={{ color: TEXT, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{entry.title}</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: "0 0 10px" }}>{entry.description}</p>
                      <div style={{ background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: 10 }}>
                        <div style={{ color: color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>SIGNIFICANCE</div>
                        <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{entry.significance}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VOICES TAB */}
        {activeTab === "voices" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 6px" }}>Voices on Catechesis</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                Five theologians who shaped how the church thinks about catechetical formation.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "210px 1fr", gap: 16, alignItems: "start" }}>
              {/* Left panel */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6, position: "sticky", top: 100 }}>
                {VOICES_CAT.map(v => (
                  <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                    style={{ background: selectedVoice === v.id ? `${PURPLE}18` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE + "60" : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ color: selectedVoice === v.id ? TEXT : MUTED, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{v.era}</div>
                  </button>
                ))}
              </div>
              {/* Right panel */}
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 4 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voice.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{voice.era} &middot; {voice.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0" }}>{voice.bio}</p>
                <blockquote style={{ background: `${PURPLE}0A`, border: `1px solid ${PURPLE}25`, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 8px 8px 0", margin: "0 0 16px", padding: "14px 18px" }}>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                    &ldquo;{voice.quote}&rdquo;
                  </p>
                </blockquote>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{voice.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Lectures and teachings on catechism — the Westminster Shorter Catechism, the New City Catechism, and the history of catechesis in the church.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "-1g8SUeW6Oo", title: "Introduction to the Westminster Shorter Catechism", channel: "Westminster Shorter Catechism Course", description: "An introduction to the Westminster Shorter Catechism — its history, purpose, and how to use it for personal and family discipleship." },
                  { videoId: "TQI6LGaBJsc", title: "Westminster Shorter Catechism Q. 1 — Lesson 2", channel: "Westminster Shorter Catechism Course", description: "A careful study of the most famous question in the catechism: 'What is the chief end of man?' — and why the answer still shapes Christian living." },
                  { videoId: "haJ_3n0upv0", title: "Sunday School Lesson 1: The Westminster Shorter Catechism", channel: "Sunday School Catechism", description: "The first lesson in a Sunday school series teaching the Westminster Shorter Catechism — accessible for all ages and backgrounds." },
                  { videoId: "IpdSuDt46kU", title: "Three Resources for Families on the Westminster Shorter Catechism", channel: "Ligonier Ministries", description: "Ligonier recommends three key resources for families who want to teach the catechism to their children — practical guidance for household discipleship." },
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
      </main>
      <Footer />
    </div>
  );
}
