"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "creeds" | "confessions" | "catechisms" | "why" | "videos";

const CREEDS = [
  {
    name: "Apostles' Creed",
    era: "2nd century (current form ~700 AD)",
    color: "#EF4444",
    tradition: "Universal",
    text: "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.",
    significance: "The most universally used baptismal creed across Christian traditions. Covers the essential narrative of the faith: creation, incarnation, crucifixion, resurrection, ascension, return. Memorized by Christians across two millennia as the summary of what they believe.",
    key_phrases: "'Descended into hell' — debated; means he truly died and entered the realm of the dead. 'Holy catholic Church' — means the universal church across all times and places, not Roman Catholicism. 'Communion of saints' — the community of all believers, living and dead.",
  },
  {
    name: "Nicene Creed",
    era: "325 AD (Council of Nicaea) / 381 AD (Constantinople)",
    color: "#F59E0B",
    tradition: "Catholic, Orthodox, Protestant",
    text: "We believe in one God, the Father Almighty, Maker of heaven and earth, and of all things visible and invisible. And in one Lord Jesus Christ, the only-begotten Son of God, begotten of the Father before all worlds; God of God, Light of Light, very God of very God; begotten, not made, being of one substance with the Father, by whom all things were made. Who, for us men and for our salvation, came down from heaven, and was incarnate by the Holy Spirit of the virgin Mary, and was made man; and was crucified also for us under Pontius Pilate; He suffered and was buried; and the third day He rose again, according to the Scriptures; and ascended into heaven, and sits on the right hand of the Father; and He shall come again, with glory, to judge the quick and the dead; whose kingdom shall have no end. And I believe in the Holy Ghost, the Lord and Giver of Life; who proceeds from the Father and the Son; who with the Father and the Son together is worshipped and glorified; who spoke by the prophets. And I believe in one holy catholic and apostolic Church. I acknowledge one baptism for the remission of sins; and I look for the resurrection of the dead, and the life of the world to come. Amen.",
    significance: "Produced by ecumenical councils to settle the Arian controversy about Christ's nature. 'Of one substance with the Father' (homoousios) was the decisive affirmation of full deity. Still used every week in liturgical churches worldwide as the principal statement of Christian belief.",
    key_phrases: "'Of one substance with the Father' — the key anti-Arian phrase: Christ is not a lesser god but fully divine. 'Proceeds from the Father and the Son' (Filioque) — added by the Western church, rejected by the East; major factor in the Great Schism. 'One holy catholic and apostolic Church' — the four marks of the church.",
  },
  {
    name: "Athanasian Creed",
    era: "~5th century",
    color: "#8B5CF6",
    tradition: "Western churches",
    text: "[The Athanasian Creed runs to 44 clauses on the Trinity and the Incarnation. It begins: 'Whosoever will be saved, before all things it is necessary that he hold the Catholic faith, which faith except every one do keep whole and undefiled, without doubt he shall perish everlasting.' It concludes with parallel affirmations that refuse to collapse the Trinity into one person or divide the substance into three gods, and that refuse to deny either Christ's divinity or his full humanity.]",
    significance: "The most theologically detailed of the ancient creeds, written specifically against both Arianism (denying Christ's divinity) and Apollinarianism (denying his humanity). Not as universally used as the Apostles' or Nicene but highly regarded in Western Christianity for its precision.",
    key_phrases: "The Trinity section: 'We worship one God in Trinity and Trinity in Unity; neither confounding the Persons, nor dividing the Substance.' The Christology section: 'One, not by conversion of the Godhead into flesh, but by taking of the Manhood into God. One altogether; not by confusion of Substance, but by unity of Person.'",
  },
];

const CONFESSIONS = [
  {
    name: "Westminster Confession",
    era: "1646",
    color: "#3B82F6",
    tradition: "Reformed / Presbyterian",
    summary: "The Westminster Confession of Faith (WCF) is an extended confessional document of 33 chapters covering the whole of Christian doctrine from Scripture to the last things. It is not typically recited but studied. Chapter 1 on Scripture, Chapter 3 on God's decrees, Chapter 7 on the covenant of grace, and Chapter 8 on Christ the Mediator are among its most important sections.",
    significance: "The most influential Reformed confessional document. Produced by the Westminster Assembly at the request of the English Parliament. The standard for Presbyterian and many Reformed churches worldwide. Its catechisms (Larger and Shorter) were widely used for education and memorization.",
    key_phrases: "Chapter 1: 'The Supreme Judge, by which all controversies of religion are to be determined... can be no other but the Holy Spirit speaking in the Scripture.' Chapter 7: Introduces covenant theology — the covenant of works with Adam, the covenant of grace with Christ.",
  },
  {
    name: "Augsburg Confession",
    era: "1530",
    color: GREEN,
    tradition: "Lutheran",
    summary: "The Augsburg Confession has 28 articles covering Lutheran doctrine, presented to Emperor Charles V. The first 21 articles state Lutheran doctrine; the last 7 address abuses to be reformed. It was written primarily by Melanchthon and is the primary confessional document of Lutheran churches.",
    significance: "The foundational Lutheran confessional document — presenting the Lutheran position to the Emperor at a moment of existential political danger. Its moderate and irenic tone attempted to show continuity with catholic tradition while maintaining the Reformation insights on justification, Scripture, and the sacraments.",
    key_phrases: "Article IV: 'Men cannot be justified before God by their own strength, merits, or works, but are freely justified for Christ's sake, through faith.' Article VII: 'The church is the assembly of saints, in which the Gospel is taught purely and the Sacraments are rightly administered.'",
  },
  {
    name: "Heidelberg Catechism",
    era: "1563",
    color: "#F59E0B",
    tradition: "Reformed",
    summary: "Though technically a catechism, the Heidelberg is often categorized with the confessions due to its doctrinal depth. It consists of 129 questions and answers structured around three themes: human guilt, God's grace in Christ, and the grateful response. It opens with the famous Question 1.",
    significance: "One of the most beloved documents of the Reformation — unusual for its warm, personal tone in contrast to the more abstract Westminster. Its influence spread from Germany and the Netherlands throughout the Reformed world. Still used weekly in many Dutch Reformed churches.",
    key_phrases: "Q1: 'What is your only comfort in life and in death? A: That I am not my own, but belong — body and soul, in life and in death — to my faithful Savior, Jesus Christ.' This opening question and answer has been called the most pastorally profound sentence produced by the Reformation.",
  },
  {
    name: "London Baptist Confession",
    era: "1689",
    color: "#EC4899",
    tradition: "Baptist",
    summary: "The Second London Baptist Confession (1689) was adopted by Particular Baptists in England. It is closely aligned with the Westminster Confession but differs on ecclesiology (congregational polity, believer's baptism) and covenant theology. It remains the confessional standard for many Reformed Baptist churches.",
    significance: "Demonstrates that Baptist theology can be thoroughly reformed and confessional. Settles the doctrine of believers' baptism within a covenant theology framework. Still used as a confessional standard by Reformed Baptist churches worldwide.",
    key_phrases: "Chapter 29 (Baptism): 'Baptism is an ordinance of the New Testament, ordained by Jesus Christ, to be unto the party baptized, a sign of his fellowship with him, in his death and resurrection; of his being engrafted into him; of remission of sins; and of his giving up unto God through Jesus Christ, to live and walk in newness of life.'",
  },
];

const CATECHISMS = [
  {
    name: "Westminster Shorter Catechism",
    era: "1647",
    color: "#3B82F6",
    tradition: "Reformed / Presbyterian",
    qna: [
      { q: "Q1: What is the chief end of man?", a: "Man's chief end is to glorify God, and to enjoy him forever." },
      { q: "Q2: What rule hath God given to direct us how we may glorify and enjoy him?", a: "The Word of God, which is contained in the Scriptures of the Old and New Testaments, is the only rule to direct us how we may glorify and enjoy him." },
      { q: "Q21: Who is the Redeemer of God's elect?", a: "The only Redeemer of God's elect is the Lord Jesus Christ, who, being the eternal Son of God, became man, and so was, and continueth to be, God and man in two distinct natures, and one person, forever." },
    ],
    overview: "107 questions and answers covering God, humanity, sin, Christ, salvation, the Ten Commandments, and the Lord's Prayer. Designed for children and new believers but with doctrinal depth that repays adult study. Q1 — 'Man's chief end is to glorify God and enjoy him forever' — is among the most celebrated sentences in Christian literature.",
  },
  {
    name: "Heidelberg Catechism Q1",
    era: "1563",
    color: "#F59E0B",
    tradition: "Reformed",
    qna: [
      { q: "Q1: What is your only comfort in life and in death?", a: "That I am not my own, but belong — body and soul, in life and in death — to my faithful Savior, Jesus Christ. He has fully paid for all my sins with his precious blood, and has set me free from the tyranny of the devil. He also watches over me in such a way that not a hair can fall from my head without the will of my Father in heaven; in fact, all things must work together for my salvation. Because I belong to him, Christ, by his Holy Spirit, assures me of eternal life and makes me wholeheartedly willing and ready from now on to live for him." },
      { q: "Q2: How many things must you know to live and die in the joy of this comfort?", a: "Three things: first, how great my sin and misery is; second, how I am set free from all my sins and their misery; third, how I am to thank God for such deliverance." },
    ],
    overview: "129 questions structured in three parts: guilt (our sin and need), grace (God's rescue in Christ), and gratitude (our response in obedience). Q1 is widely considered the most pastorally rich single question-and-answer in catechetical history. The catechism was written in Heidelberg under Elector Frederick III.",
  },
  {
    name: "Luther's Small Catechism",
    era: "1529",
    color: GREEN,
    tradition: "Lutheran",
    qna: [
      { q: "What is the First Commandment?", a: "You shall have no other gods before me. What does this mean? We should fear, love, and trust in God above all things." },
      { q: "What is the meaning of the Apostles' Creed's First Article?", a: "I believe that God has made me and all creatures; that He has given me my body and soul, eyes, ears, and all my members, my reason and all my senses, and still takes care of them." },
      { q: "What is the Lord's Prayer's first petition?", a: "Hallowed be thy name. What does this mean? God's name is certainly holy in itself, but we pray in this petition that it may be kept holy among us also." },
    ],
    overview: "Luther wrote the Small Catechism for heads of households to teach their families after discovering that common people knew almost nothing of Christian teaching. It covers the Ten Commandments, the Apostles' Creed, the Lord's Prayer, Baptism, and the Lord's Supper. Its explanations follow the pattern 'What does this mean? We should...' — making abstract doctrine immediately practical.",
  },
  {
    name: "New City Catechism",
    era: "2012",
    color: PURPLE,
    tradition: "Reformed / Evangelical",
    qna: [
      { q: "Q1: What is our only hope in life and death?", a: "That we are not our own but belong, body and soul, both in life and death, to God and to our Savior Jesus Christ." },
      { q: "Q3: How many persons are there in God?", a: "There are three persons in the one true and living God: the Father, the Son, and the Holy Spirit. They are the same in substance, equal in power and glory." },
      { q: "Q20: What is redemption?", a: "Redemption is the act of God the Father in which he frees us from the power of sin and Satan through the work of his Son Jesus Christ." },
    ],
    overview: "A contemporary catechism for adults and children, drawing on the Westminster Shorter and Heidelberg catechisms. 52 questions designed for weekly use over a year. Each question includes a Scripture verse, historical commentary, and a contemporary prayer. Available as an app. Reflects collaboration between Tim Keller and Redeemer Presbyterian.",
  },
];

const WHY = [
  { title: "Confessions Are Not Scripture", body: "The first thing to say about confessions is what they are not: they are not equal to Scripture, they are not infallible, and they are subject to correction by Scripture. A confession derives its authority from its fidelity to Scripture — which means a confession can be wrong and can be corrected. Protestant confessionalism is not a second Magisterium; it is a collective attempt to summarize what Scripture teaches, open to revision by Scripture." },
  { title: "They Connect Us to Church History", body: "The Christian who interprets Scripture only through their own reading is cut off from two thousand years of collective discernment. The creeds represent the conclusions of thousands of Christians who read the same texts, often under intense pressure and with very high stakes (the Nicene Council met during a period of persecution). Their conclusions are not infallible — but they represent a weight of wisdom that should not be dismissed lightly." },
  { title: "They Protect Against Heresy", body: "Most modern heresies are not new: Arianism (Jesus is a created being, less than God) resurfaces in every generation. Gnosticism (the material world is evil, salvation is escape from it) resurfaces constantly. Modalism (Father, Son, and Spirit are three masks of one person, not three persons) is preached in churches today. The creeds and confessions exist specifically to name and reject these errors. Knowing the creeds is knowing the boundaries." },
  { title: "They Give Language for Faith", body: "The person who has never memorized the Apostles' Creed or the Westminster Shorter Catechism lacks the vocabulary to articulate their faith with precision. Confessions supply the language that makes theological conversation possible — within a community, across time, and between traditions. The Christian who cannot say what they believe clearly cannot teach it, defend it, or pass it on." },
  { title: "They Form Community", body: "A shared confession is a form of covenant — we believe these things together, we will live by these commitments together, we will hold each other accountable to this summary of the faith. Confessionalism at its best produces not uniformity but solidarity: a community that knows what it believes and can build on that foundation together. The absence of a shared confession tends to produce either theological drift or perpetual conflict about basics." },
];

export default function ConfessionsPage() {
  const [tab, setTab] = useState<Tab>("creeds");
  const [selectedCreed, setSelectedCreed] = useState("Apostles' Creed");
  const [selectedConf, setSelectedConf] = useState("Westminster Confession");
  const [selectedCat, setSelectedCat] = useState("Westminster Shorter Catechism");

  const creed = CREEDS.find(c => c.name === selectedCreed)!;
  const conf = CONFESSIONS.find(c => c.name === selectedConf)!;
  const cat = CATECHISMS.find(c => c.name === selectedCat)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📜</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Historic Confessions & Creeds</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The church's historic confessions and creeds are the accumulated wisdom of Christians wrestling with the most important questions — often under enormous pressure and with eternal stakes.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "creeds" as Tab, label: "Ancient Creeds", icon: "🏛️" },
            { id: "confessions" as Tab, label: "Confessions", icon: "📋" },
            { id: "catechisms" as Tab, label: "Catechisms", icon: "❓" },
            { id: "why" as Tab, label: "Why It Matters", icon: "💡" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "creeds" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {CREEDS.map(c => (
                <button key={c.name} onClick={() => setSelectedCreed(c.name)}
                  style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${selectedCreed === c.name ? c.color : BORDER}`, background: selectedCreed === c.name ? `${c.color}15` : "transparent", color: selectedCreed === c.name ? c.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {c.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${creed.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                <div>
                  <h2 style={{ color: creed.color, fontWeight: 900, fontSize: 24, margin: 0, marginBottom: 4 }}>{creed.name}</h2>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ color: MUTED, fontSize: 13 }}>{creed.era}</span>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{creed.tradition}</span>
                  </div>
                </div>
              </div>
              <div style={{ background: BG, borderRadius: 10, padding: 20, marginBottom: 16, borderLeft: `3px solid ${creed.color}` }}>
                <div style={{ color: creed.color, fontWeight: 700, fontSize: 12, marginBottom: 10 }}>THE TEXT</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0, fontStyle: "italic" }}>{creed.text}</p>
              </div>
              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16, marginBottom: 12 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>HISTORICAL SIGNIFICANCE</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{creed.significance}</p>
              </div>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY PHRASES EXPLAINED</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{creed.key_phrases}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "confessions" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {CONFESSIONS.map(c => (
                <button key={c.name} onClick={() => setSelectedConf(c.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedConf === c.name ? c.color : BORDER}`, background: selectedConf === c.name ? `${c.color}15` : "transparent", color: selectedConf === c.name ? c.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {c.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${conf.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ marginBottom: 18 }}>
                <h2 style={{ color: conf.color, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{conf.name}</h2>
                <div style={{ display: "flex", gap: 10 }}>
                  <span style={{ color: MUTED, fontSize: 13 }}>{conf.era}</span>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{conf.tradition}</span>
                </div>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }}>{conf.summary}</p>
              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16, marginBottom: 12 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>HISTORICAL SIGNIFICANCE</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{conf.significance}</p>
              </div>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY PHRASES</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{conf.key_phrases}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "catechisms" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {CATECHISMS.map(c => (
                <button key={c.name} onClick={() => setSelectedCat(c.name)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${selectedCat === c.name ? c.color : BORDER}`, background: selectedCat === c.name ? `${c.color}12` : "transparent", color: selectedCat === c.name ? c.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", marginBottom: 6, textAlign: "left" }}>
                  {c.name}
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${cat.color}30`, borderRadius: 14, padding: 26 }}>
                <div style={{ marginBottom: 16 }}>
                  <h2 style={{ color: cat.color, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{cat.name}</h2>
                  <div style={{ display: "flex", gap: 10 }}>
                    <span style={{ color: MUTED, fontSize: 13 }}>{cat.era}</span>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{cat.tradition}</span>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 18 }}>{cat.overview}</p>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>SAMPLE QUESTIONS & ANSWERS</div>
                {cat.qna.map((item, i) => (
                  <div key={i} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: i < cat.qna.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                    <div style={{ color: cat.color, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{item.q}</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "why" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                In an age of solo-Scripture interpretation and doctrinal minimalism, confessions and creeds may seem unnecessary or even divisive. But they serve irreplaceable functions in the life of the church and the individual believer.
              </p>
            </div>
            {WHY.map((w, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 14 }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, marginBottom: 10 }}>{w.title}</h3>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{w.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
