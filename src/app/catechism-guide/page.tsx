"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

export default function CatechismGuidePage() {
  const [tradition, setTradition] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const [expandedQA, setExpandedQA] = useState<Record<string, boolean>>({});

  const filtered = CATECHISMS.filter(c => tradition === "All" || c.tradition === tradition);
  const cat = CATECHISMS.find(c => c.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📖</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Guide to the Christian Catechisms</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            Catechisms are question-and-answer guides to Christian doctrine used for 2,000 years to form believers in the faith. From Luther to Westminster to Heidelberg — every tradition has its catechism.
          </p>
        </div>

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
            <button key={t} onClick={() => setTradition(t)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${tradition === t ? GREEN : BORDER}`, background: tradition === t ? `${GREEN}15` : "transparent", color: tradition === t ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: cat ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((c, i) => (
              <button key={i} onClick={() => setSelected(selected === c.name ? null : c.name)}
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
      </div>
    </div>
  );
}
