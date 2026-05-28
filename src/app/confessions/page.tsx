"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const STATEMENTS = [
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
    text: "[Long form — the Athanasian Creed is the most detailed of the three, running to 44 clauses on the Trinity and the Incarnation. It begins: 'Whosoever will be saved, before all things it is necessary that he hold the Catholic faith, which faith except every one do keep whole and undefiled, without doubt he shall perish everlasting.' It concludes with parallel affirmations of the Trinity and the Incarnation.]",
    significance: "The most theologically detailed of the ancient creeds, written specifically against both Arianism (denying Christ's divinity) and Apollinarianism (denying his humanity). Not as universally used as the Apostles' or Nicene but highly regarded in Western Christianity for its precision.",
    key_phrases: "The 'Athanasian Quicunque' ('whosoever will be saved') — its opening identifies salvation with correct belief about the Trinity. The Trinity section carefully distinguishes the persons without separating the substance. The Incarnation section affirms full divinity and full humanity without confusion or separation.",
  },
  {
    name: "Westminster Confession",
    era: "1646",
    color: "#3B82F6",
    tradition: "Reformed / Presbyterian",
    text: "[The Westminster Confession of Faith is an extended confessional document of 33 chapters covering the whole of Christian doctrine from Scripture to the last things. It is not typically recited but studied. Chapter 1 on Scripture, Chapter 3 on God's decrees, Chapter 7 on the covenant of grace, and Chapter 8 on Christ the Mediator are among its most important sections.]",
    significance: "The most influential Reformed confessional document. Produced by the Westminster Assembly at the request of the English Parliament. The standard for Presbyterian and many Reformed churches worldwide. Its catechisms (Larger and Shorter) were widely used for education and memorization.",
    key_phrases: "Chapter 1: 'The Supreme Judge, by which all controversies of religion are to be determined... can be no other but the Holy Spirit speaking in the Scripture.' Chapter 7: 'The distance between God and the creature is so great, that although reasonable creatures do owe obedience unto Him as their Creator, yet they could never have any fruition of Him as their blessedness and reward, but by some voluntary condescension on God's part.'",
  },
  {
    name: "Augsburg Confession",
    era: "1530",
    color: GREEN,
    tradition: "Lutheran",
    text: "[The Augsburg Confession has 28 articles covering Lutheran doctrine, presented to Emperor Charles V. The first 21 articles state Lutheran doctrine; the last 7 address abuses to be reformed. It was written primarily by Melanchthon and is the primary confessional document of Lutheran churches.]",
    significance: "The foundational Lutheran confessional document — presenting the Lutheran position to the Emperor at a moment of existential political danger. Its moderate and irenic tone attempted to show continuity with catholic tradition while maintaining the Reformation insights on justification, Scripture, and the sacraments.",
    key_phrases: "Article IV: 'Also they teach that men cannot be justified before God by their own strength, merits, or works, but are freely justified for Christ's sake, through faith, when they believe that they are received into favor, and that their sins are forgiven for Christ's sake.' — The clearest Reformation statement of justification by faith alone.",
  },
];

export default function ConfessionsPage() {
  const [selected, setSelected] = useState("Apostles' Creed");

  const stmt = STATEMENTS.find(s => s.name === selected)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📜</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Historic Confessions</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The church's historic confessions and creeds are the accumulated wisdom of Christians wrestling with the most important questions — often under enormous pressure and with eternal stakes.
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
          {STATEMENTS.map(s => (
            <button key={s.name} onClick={() => setSelected(s.name)}
              style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${selected === s.name ? s.color : BORDER}`, background: selected === s.name ? `${s.color}15` : "transparent", color: selected === s.name ? s.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {s.name}
            </button>
          ))}
        </div>

        <div style={{ background: CARD, border: `1px solid ${stmt.color}30`, borderRadius: 14, padding: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
            <div>
              <h2 style={{ color: stmt.color, fontWeight: 900, fontSize: 24, margin: 0, marginBottom: 4 }}>{stmt.name}</h2>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ color: MUTED, fontSize: 13 }}>{stmt.era}</span>
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{stmt.tradition}</span>
              </div>
            </div>
          </div>

          <div style={{ background: BG, borderRadius: 10, padding: 20, marginBottom: 20, borderLeft: `3px solid ${stmt.color}` }}>
            <div style={{ color: stmt.color, fontWeight: 700, fontSize: 12, marginBottom: 10 }}>THE TEXT</div>
            <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0, fontStyle: "italic" }}>{stmt.text}</p>
          </div>

          <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18, marginBottom: 14 }}>
            <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>HISTORICAL SIGNIFICANCE</div>
            <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{stmt.significance}</p>
          </div>

          <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 18 }}>
            <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY PHRASES EXPLAINED</div>
            <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{stmt.key_phrases}</p>
          </div>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginTop: 20 }}>
          <div style={{ color: GREEN, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>WHY CONFESSIONS MATTER</div>
          <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
            Confessions are not Scripture — they are the church's attempt to summarize, defend, and transmit what Scripture teaches. They represent the concentrated wisdom of generations of Christians wrestling with the hardest questions under the highest stakes. Knowing the creeds and confessions connects you to the church across twenty centuries and provides tested language for the faith you hold. The person who has only their personal interpretation of Scripture is cut off from two thousand years of collective discernment.
          </p>
        </div>
      </div>
    </div>
  );
}
