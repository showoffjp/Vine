"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "persons" | "theologians" | "heresies" | "implications" | "videos";

const THEOLOGIANS = [
  {
    id: "athanasius",
    name: "Athanasius",
    era: "c. 296-373",
    context: "Bishop of Alexandria; 'Athanasius contra mundum'",
    bio: "Athanasius is the hero of Nicene orthodoxy. He attended the Council of Nicaea (325 AD) as a young deacon and spent the next five decades defending its conclusions against Arianism — being exiled five times by four emperors ('Athanasius against the world'). His 'On the Incarnation' is the greatest short treatment of why the Son of God had to become human: only one who is truly God can truly save, because only God can give what we cannot give ourselves. He identified that Arianism made salvation impossible — a creature cannot redeem creatures.",
    quote: "He became what we are that we might become what he is. The Word of God became human that we might be made divine.",
    contribution: "Athanasius grounded trinitarian theology in soteriology: the doctrine of the Trinity is not speculation but the necessary grammar of salvation. If the Son is not fully God, the incarnation cannot save. His argument — that a semi-divine mediator saves nobody, because salvation requires the full weight of divine life — became the permanent defense of homoousios (same substance). His exiles demonstrate that theological conviction has a cost, and that orthodoxy is often won by a minority who refuse to capitulate to political pressure.",
  },
  {
    id: "cappadocians",
    name: "The Cappadocians",
    era: "4th century",
    context: "Basil of Caesarea, Gregory of Nyssa, Gregory of Nazianzus",
    bio: "The three Cappadocian fathers gave the church its technical vocabulary for trinitarian theology and resolved the late-4th century crisis by distinguishing ousia (essence/substance) from hypostasis (person). God is one ousia in three hypostaseis — one divine essence shared by three distinct persons. This formula, formalized at Constantinople (381 AD), has been the orthodox Christian grammar ever since. Gregory of Nazianzus wrote the theological orations; Gregory of Nyssa explored the ineffability of the divine essence; Basil provided the practical ecclesial framework.",
    quote: "We do not confess three gods. We confess one Godhead, one power, one substance of the Father, Son, and Holy Spirit. — Basil of Caesarea",
    contribution: "The Cappadocians resolved the terminological confusion that plagued early trinitarian debate: Nicaea had affirmed homoousios but not clearly defined what 'person' meant. Their ousia/hypostasis distinction gave the church stable language for speaking about both the unity and diversity of the Trinity. Gregory of Nyssa also developed the concept of perichoresis — the mutual indwelling of the three persons — which became a central theme in 20th-century trinitarian renewal.",
  },
  {
    id: "augustine",
    name: "Augustine of Hippo",
    era: "354-430",
    context: "Bishop of Hippo; author of De Trinitate",
    bio: "Augustine's 'On the Trinity' (De Trinitate, c. 400-420 AD) is the greatest theological text in the Western Christian tradition. Augustine approached the Trinity from the inside out: rather than beginning with the three persons and working toward unity (Eastern approach), he began with the unity of the divine essence and worked toward the persons. His use of psychological analogies (memory/understanding/will in the human mind as a trace of the Trinity) has been enormously influential — and enormously debated. He also formulated the filioque: the Spirit proceeds from the Father and the Son.",
    quote: "Our heart is restless until it rests in you. You have made us for yourself, O Lord — and in the Trinity we begin to see what you are and what love means.",
    contribution: "Augustine shaped Western trinitarian theology for a millennium. His starting point — the divine unity — gave Latin theology a different flavor from Greek theology. The filioque ('and the Son') he formulated was inserted into the Creed by the Western church, becoming the central point of division between Eastern Orthodoxy and Western Christianity in the Great Schism (1054). His psychological analogies, despite their problems, gave the church a way to speak about the Trinity from human experience rather than purely from abstract categories.",
  },
  {
    id: "barth",
    name: "Karl Barth",
    era: "1886-1968",
    context: "Swiss Reformed theologian; Church Dogmatics",
    bio: "Barth's massive Church Dogmatics (13 part-volumes) placed the doctrine of the Trinity at the beginning — not the end — of Christian theology. His argument: revelation is the starting point of theology, and God's revelation is irreducibly trinitarian. The one who reveals (Father), the content of revelation (Son), and the act of revelation reaching the human (Spirit) are all genuinely God. The Trinity is thus not a conclusion from natural reason but the shape of God's self-disclosure. This reversed the typical 19th-century order (natural theology first, then revelation).",
    quote: "The doctrine of the Trinity is not a speculation about God's inner being. It is the grammar of what God has actually done in revealing himself to us. Revelation is the starting point, and the Trinity is its shape.",
    contribution: "Barth's placing of the Trinity at the beginning of dogmatics (rather than at the end, as in Schleiermacher) was a revolution in Protestant theology. He insisted that Christian theology must begin with who God has revealed himself to be — not with human religious experience or natural theology. His trinitarian account of revelation (God reveals God through God) provided the framework for 20th-century trinitarian renewal, including the Social Trinity theologies of Moltmann and Zizioulas.",
  },
  {
    id: "zizioulas",
    name: "John Zizioulas",
    era: "1931-2023",
    context: "Greek Orthodox Metropolitan of Pergamon; Being as Communion",
    bio: "Zizioulas's 'Being as Communion' (1985) is the most significant work in Orthodox trinitarian theology since the Cappadocians. His central argument: personhood and communion are ontologically primary. The Father, Son, and Spirit exist as who they are in relation — not as pre-relational substances who then relate. This means that existence is always communal; to be is to be-in-relation. His theology has influenced Catholic, Orthodox, and Protestant thinkers and has had enormous impact on ecclesiology: the church is an icon of the Trinity — a community of persons in communion.",
    quote: "Being is communion. There is no true being without communion. This is the deepest truth of the Trinity — and it is the deepest truth of what we are made to be.",
    contribution: "Zizioulas gave the 20th century its most developed account of what it means to say that God is relational at the deepest level of his being. His distinction between hypostasis (person) and ousia (nature) re-read the Cappadocians to argue that personhood is constitutive of being, not additional to it. His work has been enormously influential in ecumenical dialogue — especially between Orthodox and Catholic traditions — and has generated the 'Social Trinity' movement in Protestant theology (Moltmann, Miroslav Volf, Stanley Grenz).",
  },
];


const PERSONS = [
  {
    id: "father",
    name: "God the Father",
    icon: "☁️",
    color: "#3B82F6",
    role: "Creator, Initiator, Source",
    key_texts: ["Matthew 6:9", "John 17:1-5", "1 Corinthians 8:6"],
    desc: "The Father is the first person of the Trinity — the source and origin of the Godhead, not in time (the Son is eternally begotten, not created at a point in time) but in relation. The Father initiates: he sends the Son (John 3:16), sends the Spirit (John 14:26), and elects his people (Ephesians 1:3-6). He is the one Jesus addressed as 'Abba' and taught his disciples to call Father.",
    misconception: "The Father is not simply 'God before Jesus' or an OT-only deity. The Father is distinguished from the Son and Spirit but inseparable from them. Every act of God involves all three persons.",
  },
  {
    id: "son",
    name: "God the Son",
    icon: "✝️",
    color: "#EF4444",
    role: "Redeemer, Revealer, Image of the Father",
    key_texts: ["John 1:1-18", "Colossians 1:15-20", "Hebrews 1:1-4"],
    desc: "The Son is the second person of the Trinity — eternally begotten of the Father, not made. The eternal Son became human (incarnation) without ceasing to be divine — fully God, fully human (Chalcedon, 451 AD). He is the Word through whom all things were made (John 1:3), the one who reveals the Father perfectly ('Whoever has seen me has seen the Father,' John 14:9), and the only mediator between God and humanity (1 Tim. 2:5).",
    misconception: "The Son is not a lesser god or a created being. Arianism (which taught the Son was the highest creature, not truly God) was condemned at Nicaea (325 AD). The Son is homoousios — the same substance as the Father.",
  },
  {
    id: "spirit",
    name: "God the Holy Spirit",
    icon: "🕊️",
    color: "#10B981",
    role: "Sanctifier, Indweller, Empowerer",
    key_texts: ["John 14:16-17", "Romans 8:9-17", "1 Corinthians 12:4-11"],
    desc: "The Spirit is the third person of the Trinity — not a force or an influence but a person who acts, speaks, grieves (Ephesians 4:30), and intercedes (Romans 8:26). He is sent by the Father and Son at Pentecost (Acts 2) to indwell believers, convict of sin, apply the work of Christ, produce the fruit of holiness, distribute spiritual gifts, and unite the body. He is the guarantee of the coming inheritance (Ephesians 1:14).",
    misconception: "The Spirit is not a subordinate member of a divine hierarchy. He is equally God. He is also not a spiritual 'energy' or impersonal force — the NT consistently uses personal pronouns for him and attributes personal actions to him.",
  },
];

const HERESIES = [
  { name: "Arianism", era: "4th century", error: "The Son is the highest created being — divine but not fully God ('there was a time when he was not'). Still taught by Jehovah's Witnesses.", orthodox: "The Son is homoousios — same substance as the Father. Eternally begotten, not created." },
  { name: "Modalism / Sabellianism", era: "3rd century", error: "God is one person who reveals himself in three modes — as Father in creation, Son in incarnation, Spirit after Pentecost. The Oneness Pentecostal tradition holds a version of this.", orthodox: "The three persons are simultaneously distinct. The Father and Son speak to each other (John 17). At Jesus' baptism all three are present at once." },
  { name: "Tritheism", era: "Various periods", error: "Three separate gods who cooperate. Father, Son, and Spirit are three divine beings.", orthodox: "There is one God (Deuteronomy 6:4). The three persons share one divine essence — not three essences." },
  { name: "Subordinationism", era: "Various forms", error: "The Son and Spirit are eternally lesser in being than the Father — not just in role but in nature.", orthodox: "The Son and Spirit are equal in being with the Father. Economic subordination (the Son obeys the Father in the incarnation) is a matter of role, not of nature." },
  { name: "Docetism", era: "1st–2nd centuries", error: "Jesus only appeared to be human — he was purely divine, and his suffering and death were illusions.", orthodox: "The Son fully became human (John 1:14). He truly suffered, died, and rose bodily. 1 John was written partly to counter Docetism." },
];

const IMPLICATIONS = [
  { title: "God Is Inherently Relational", body: "God did not create humans because he was lonely or needed relationship. Before creation existed, the Father, Son, and Spirit dwelt in perfect love and communion. Creation flows from this eternal love — not from a deficit in God. We are made for relationship because God himself is relationship." },
  { title: "Love Is Eternal and Primary", body: "'God is love' (1 John 4:8) is not merely a description of God's character toward creation — it describes the eternal nature of the inner-divine life. The Father has loved the Son before the foundation of the world (John 17:24). Love is not a later addition; it is what God is." },
  { title: "Mission Is Participation in God's Life", body: "The Father sends the Son; the Son sends the Spirit; the Spirit gathers the church. Mission flows out of the inner-trinitarian life — we are invited into the movement of God's love toward the world. Christian mission is not a program; it is participation in what God is already doing." },
  { title: "Diversity and Unity Can Coexist", body: "The Trinity models that genuine diversity (three distinct persons) and genuine unity (one being) are not opposites. This has profound implications for how the church understands community — we are called to a unity that does not erase difference, and a diversity that does not fragment into separation." },
];

export default function TrinityPage() {
  const [activeTab, setActiveTab] = useState<Tab>("persons");
  const [selected, setSelected] = useState("father");
  const [selectedTheologian, setSelectedTheologian] = useState("athanasius");
  const theologian = THEOLOGIANS.find(t => t.id === selectedTheologian)!;

  const person = PERSONS.find(p => p.id === selected)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>☁️✝️🕊️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Holy Trinity</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto" }}>
            One God in three persons — Father, Son, and Holy Spirit. Not a mathematical puzzle to solve but the living reality at the center of Christian worship, prayer, and mission.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "persons" as const, label: "Three Persons", icon: "👥" },
            { id: "theologians" as const, label: "Theologians", icon: "📜" },
            { id: "heresies" as const, label: "Classic Errors", icon: "🚫" },
            { id: "implications" as const, label: "Why It Matters", icon: "💡" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "persons" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The doctrine of the Trinity: there is one God who exists eternally as three distinct persons — Father, Son, and Holy Spirit — each fully God, sharing one divine essence, equal in power and glory. This is not a contradiction (one God who is three gods) but a mystery: one what (essence), three whos (persons).
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
                {PERSONS.map(p => (
                  <button key={p.id} onClick={() => setSelected(p.id)}
                    style={{ padding: "12px 14px", borderRadius: 10, border: `1px solid ${selected === p.id ? p.color : BORDER}`, background: selected === p.id ? `${p.color}18` : CARD, color: selected === p.id ? p.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textAlign: "left" }}>
                    {p.icon} {p.name}
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ background: CARD, border: `1px solid ${person.color}40`, borderRadius: 14, padding: 26 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <span style={{ fontSize: 32 }}>{person.icon}</span>
                    <div>
                      <h2 style={{ color: person.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{person.name}</h2>
                      <div style={{ color: MUTED, fontSize: 13 }}>{person.role}</div>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "14px 0" }}>{person.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                    {person.key_texts.map(t => (
                      <span key={t} style={{ background: `${person.color}15`, color: person.color, padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 14 }}>
                    <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 12, marginBottom: 6 }}>Common Misconception</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{person.misconception}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "theologians" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {THEOLOGIANS.map(t => (
                <button key={t.id} onClick={() => setSelectedTheologian(t.id)}
                  style={{ width: "100%", background: selectedTheologian === t.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedTheologian === t.id ? PURPLE + "70" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedTheologian === t.id ? PURPLE : TEXT, fontWeight: 800, fontSize: 13, marginBottom: 2 }}>{t.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{t.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{theologian.era}</div>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 24, marginBottom: 4 }}>{theologian.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{theologian.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{theologian.bio}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 10 }}>IN THEIR OWN WORDS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>&ldquo;{theologian.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{theologian.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "heresies" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The church refined trinitarian doctrine through centuries of controversy — not because theologians loved arguing, but because getting God wrong has practical consequences. Every major trinitarian error is still present in some form today.
              </p>
            </div>
            {HERESIES.map((h, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <div style={{ color: "#EF4444", fontWeight: 800, fontSize: 17 }}>{h.name}</div>
                  <span style={{ background: "#EF444420", color: "#EF4444", padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{h.era}</span>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>THE ERROR</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{h.error}</p>
                </div>
                <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}25`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>THE ORTHODOX RESPONSE</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{h.orthodox}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "implications" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The Trinity is not an abstract theological puzzle — it is the grammar of Christian life. Prayer, community, mission, and love all look different because God is triune. Here is why it matters practically.
              </p>
            </div>
            {IMPLICATIONS.map((imp, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>{imp.title}</h3>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{imp.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on the doctrine of the Trinity.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "Sh72wgZEcKk", title: "R.C. Sproul: For the Doctrine of the Trinity", channel: "Ligonier Ministries", description: "Sproul explains why Christians must stand firm in proclaiming the one living and true God revealed in Scripture — Father, Son, and Holy Spirit." },
                  { videoId: "LUCDrhB19cE", title: "Is the Trinity a Contradiction?", channel: "Ligonier Ministries / R.C. Sproul", description: "Sproul addresses the charge that the doctrine of the Trinity is logically contradictory — explaining why one God in three persons is a mystery but not an irrationality." },
                  { videoId: "UqQyle8vq-0", title: "The Biblical Witness: The Mystery of the Trinity", channel: "Ligonier Ministries / R.C. Sproul", description: "A careful examination of the biblical texts that reveal the triune nature of God — exploring how the New Testament authors came to understand the Trinity." },
                  { videoId: "e9T2K8f6W3o", title: "One in Essence, Three in Person", channel: "Ligonier Ministries / R.C. Sproul", description: "The precise formulation of Trinitarian doctrine — what it means to say God is one in essence yet three in person, and why that distinction matters." },
                  { videoId: "cJlenDjSsVA", title: "Fifth-Century Heresies: The Mystery of the Trinity", channel: "Ligonier Ministries / R.C. Sproul", description: "An examination of early church heresies about the Trinity — Arianism, Modalism, and Tritheism — and how the councils refined orthodox Trinitarian doctrine." },
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
    </div>
  );
}
