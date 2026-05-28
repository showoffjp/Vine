"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

export default function SystematicTheology101Page() {
  const [selected, setSelected] = useState<string | null>(null);
  const locus = LOCI.find(l => l.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🏛️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Systematic Theology 101</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            Systematic theology organizes Christian doctrine into the major loci — the classical headings under which the whole counsel of God is examined. This is the map of Christian thought.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: locus ? "1fr 1fr" : "repeat(auto-fill, minmax(280px, 1fr))", gap: 14, alignItems: "start" }}>
          <div style={{ display: "contents" }}>
            {!locus && LOCI.map((l, i) => (
              <button key={i} onClick={() => setSelected(l.name)}
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
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{l.verse}</span>
              </button>
            ))}
          </div>

          {locus && (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {LOCI.map((l, i) => (
                  <button key={i} onClick={() => setSelected(l.name)}
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

                <button onClick={() => setSelected(null)}
                  style={{ background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, padding: "7px 14px", borderRadius: 8, fontSize: 12, cursor: "pointer" }}>
                  ← Back to all
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
