"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#c9a227";

type Tab = "what" | "natures" | "why" | "chalcedon" | "kenosis" | "videos";

const TWO_NATURES = [
  { nature: "Fully Divine", color: PURPLE, icon: "✨", texts: ["John 1:1", "Colossians 1:15-17", "Hebrews 1:3", "John 10:30"],
    evidences: [
      "He forgives sins — a divine prerogative (Mark 2:5-7)",
      "He receives worship (Matthew 28:17; John 20:28)",
      "He claims the divine name 'I AM' (John 8:58)",
      "He existed before Abraham (John 8:58)",
      "He shares the Father's glory from before creation (John 17:5)",
      "He is the agent of creation (John 1:3; Colossians 1:16)",
    ],
    desc: "The early church was clear: Jesus is not a semi-divine intermediary or the highest of created beings. He is fully God — 'the radiance of the glory of God and the exact imprint of his nature' (Hebrews 1:3). His divine nature was not diminished in the incarnation; the eternal Son took on human nature in addition to his divine nature." },
  { nature: "Fully Human", color: GREEN, icon: "🌿", texts: ["Luke 2:40", "John 11:35", "Matthew 4:2", "Hebrews 4:15"],
    evidences: [
      "He was born of a woman (Galatians 4:4)",
      "He grew in wisdom (Luke 2:52)",
      "He was hungry (Matthew 4:2) and thirsty (John 19:28)",
      "He was tired (John 4:6)",
      "He wept at Lazarus's tomb (John 11:35)",
      "He died — a genuinely human death (Philippians 2:8)",
    ],
    desc: "Jesus was genuinely, fully human — not God wearing a human costume (Docetism). He experienced the full range of human life: birth, childhood, hunger, exhaustion, grief, temptation, suffering, and death. Hebrews 4:15 is categorical: 'We have a high priest who has been tempted in every way, just as we are — yet he did not sin.' The incarnation is real, not theatrical." },
];

const WHY_MATTERS = [
  { title: "Only a Divine Savior Can Save", ref: "Hebrews 9:11-12", icon: "⚖️", body: "Athanasius's argument (On the Incarnation, c. 318 AD): humanity needed redemption from sin and death — but no creature could provide it, because a creature is only finite and cannot bear infinite guilt. Only the infinite God himself could provide an infinite atonement. This is why the incarnation was necessary: the one who saves must be fully God. A semi-divine mediator would be insufficient." },
  { title: "Only a Human Savior Can Substitute", ref: "Romans 5:12-21", icon: "🤝", body: "Paul's Adam/Christ typology: just as through one man (Adam) sin and death entered, so through one man (Christ) righteousness and life are given. The redeemer must be human to substitute for humans — to live the life we should have lived and die the death we deserved to die. A savior who was only God could not substitute; he must also be flesh-and-blood humanity." },
  { title: "To Model Perfect Humanity", ref: "Hebrews 2:17-18", icon: "🌟", body: "Jesus is 'the image of the invisible God, the firstborn over all creation' (Colossians 1:15) — and in becoming human he reveals what true humanity looks like. In his compassion, courage, prayer life, service, and obedience, Jesus shows us the human life fully lived in dependence on the Father. He is both the object of our salvation and the model of our sanctification." },
  { title: "To Be Our High Priest", ref: "Hebrews 4:14-16", icon: "🙏", body: "'For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are — yet he did not sin.' Jesus can intercede for us with genuine empathy because he experienced genuine human life. The incarnation is not past — the Son remains human forever, our eternal high priest in the heavenly sanctuary." },
  { title: "To Defeat Death From Within", ref: "Hebrews 2:14-15", icon: "💀", body: "'Since the children have flesh and blood, he too shared in their humanity so that by his death he might break the power of him who holds the power of death — that is, the devil.' Death had to be defeated from within human nature. The eternal Son entered mortality to die — and in dying conquered death from the inside. This was the divine strategy: infiltrating the human condition to liberate it." },
  { title: "To Begin the New Creation", ref: "2 Corinthians 5:17", icon: "🌅", body: "The incarnation is not merely about forgiveness — it is about transformation. In becoming human, the Son of God began the renewal of human nature itself. His resurrection is the firstfruits of the new humanity. N.T. Wright: the incarnation inaugurates the new creation. When Jesus rose, the first particle of the new creation appeared within the old. We are being conformed to his image." },
];

const CHALCEDON_CONTENT = [
  { heading: "The Definition (451 AD)", body: "The Council of Chalcedon produced the most carefully worded statement on the person of Christ in Christian history. Key phrases: Christ is 'perfect in divinity and perfect in humanity, truly God and truly man, of a rational soul and a body; consubstantial with the Father according to the divinity, and consubstantial with us according to the humanity.' He is 'one and the same Christ, Son, Lord, Only-Begotten, in two natures without confusion, without change, without division, without separation.'" },
  { heading: "The Four 'Withouts'", body: "'Without confusion' (asunchutos): the two natures are not mixed into a third thing. 'Without change' (atreptos): neither nature is altered. 'Without division' (adiairetos): the two natures exist in one undivided person. 'Without separation' (achoristos): the natures cannot be split apart. These four negatives define the boundaries of orthodoxy, ruling out Nestorianism (separation) and Eutychianism (confusion) simultaneously." },
  { heading: "The Hypostatic Union", body: "The technical term for the Chalcedonian formula is hypostatic union — the union of two natures in one hypostasis (person). The one person of the eternal Son took on human nature at the incarnation. The subject of all of Christ's acts — divine and human — is the same one person. When Jesus was hungry, it was the Son of God who was hungry. When Jesus died, it was the Son of God who died in his human nature." },
  { heading: "Why It Was Necessary", body: "The council met to resolve the Nestorian controversy (which too sharply divided the natures) and the Eutychian controversy (which confused them into a third substance). Both errors had salvific consequences: if the natures are divided, the person of Christ is divided, and it is unclear who saves. If the natures are confused, Christ is neither truly God nor truly human, and he can neither reveal God perfectly nor substitute for human beings." },
];

const KENOSIS = [
  { title: "The Text", ref: "Philippians 2:5-8", color: PURPLE, body: "Paul writes that the Son of God 'who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself (ekenosen), by taking the form of a servant, being born in the likeness of men. And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross.'" },
  { title: "Classical Kenotic Theory", ref: "19th century", color: GREEN, body: "Some 19th-century theologians (Gottfried Thomasius, Charles Gore) argued that in the incarnation the Son of God voluntarily divested himself of certain divine attributes — particularly omniscience, omnipotence, and omnipresence — in order to be genuinely human. Jesus' limited knowledge (Matthew 24:36 — 'no one knows the day or hour, not even the Son') is cited as evidence." },
  { title: "Orthodox Response to Kenotic Theory", ref: "Classical Theology", color: GOLD, body: "Most orthodox theologians argue that the Son did not shed divine attributes (which would make him no longer divine) but took on human nature and exercised divine attributes only as the Father led him to. The 'emptying' of Philippians 2 is an emptying of privilege, status, and glory — not of divine nature. Jesus voluntarily restricted the use of his divine powers through the Spirit's direction rather than surrendering those powers. John Calvin: 'He did not lay aside his glory; he concealed it under the veil of flesh.'" },
  { title: "What All Sides Agree On", ref: "Consensus", color: GREEN, body: "Whatever the mechanics of the incarnation, all orthodox theologians agree: (1) the Son became genuinely human, (2) his divine nature was not destroyed, (3) he lived a genuinely dependent human life in submission to the Father, and (4) he was subject to human limitations including limited knowledge and physical weakness. The how is debated; the what is settled: he is fully God and fully human in one person." },
];

const VIDEOS = [
  { videoId: "FRIEXVq7vEI", title: "What Is the Incarnation?", channel: "Desiring God", description: "John Piper explores the mystery and meaning of the incarnation — what it means that God became flesh, and why it matters for salvation and Christian life." },
  { videoId: "1lYGWpb6v34", title: "The Hypostatic Union Explained", channel: "Ligonier Ministries", description: "R.C. Sproul explains the hypostatic union — what it means to say Jesus is fully God and fully human in one person, and why the Council of Chalcedon matters." },
  { videoId: "MtNOdM4N5Dk", title: "Why Did God Become Man?", channel: "Ligonier Ministries", description: "The soteriological necessity of the incarnation — why only one who is both fully God and fully human could accomplish our redemption." },
  { videoId: "v2lE16R9aQ4", title: "The Virgin Birth and Incarnation", channel: "Ligonier Ministries", description: "An examination of the biblical account of the virgin birth and its significance for the doctrine of the incarnation." },
  { videoId: "pgcMvMM96oA", title: "C.S. Lewis on the Incarnation", channel: "The Gospel Coalition", description: "Lewis's argument for the incarnation from Mere Christianity and from his introduction to Athanasius's On the Incarnation — the logic of God becoming man." },
];

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "what", label: "What Is Incarnation", icon: "📖" },
  { id: "natures", label: "Two Natures", icon: "⚖️" },
  { id: "why", label: "Why It Matters", icon: "💡" },
  { id: "chalcedon", label: "Council of Chalcedon", icon: "🏛️" },
  { id: "kenosis", label: "Kenosis Debate", icon: "🔍" },
  { id: "videos", label: "Videos", icon: "🎬" },
];

export default function IncarnationPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_incarnation_tab", "what");
  const [selectedNature, setSelectedNature] = useState(0);
  const [expandedWhy, setExpandedWhy] = useState<number | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: `var(--font-jost, system-ui, sans-serif)` }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0d0820 0%, #1a0d1a 40%, #080d14 100%)`, paddingTop: 100, paddingBottom: 60, textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>✝️</div>
        <div style={{ display: "inline-block", background: `${GOLD}18`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 16px", fontSize: 12, fontWeight: 700, color: GOLD, marginBottom: 16, letterSpacing: 1 }}>
          CHRISTOLOGY
        </div>
        <h1 style={{ fontFamily: `var(--font-cormorant, Georgia, serif)`, fontSize: "clamp(34px, 6vw, 58px)", fontWeight: 700, margin: "0 auto 16px", maxWidth: 700, lineHeight: 1.1 }}>
          The Incarnation
        </h1>
        <p style={{ color: MUTED, fontSize: 17, maxWidth: 580, margin: "0 auto 24px", lineHeight: 1.75 }}>
          The eternal Son of God took on human flesh — not as a disguise but in genuine, irreversible humanity. Fully God, fully human, forever. This is the central miracle on which all salvation depends.
        </p>
        <div style={{ display: "inline-block", background: `${PURPLE}18`, border: `1px solid ${PURPLE}40`, borderRadius: 20, padding: "6px 20px", fontSize: 13, color: PURPLE }}>
          &ldquo;The Word became flesh and dwelt among us, and we have seen his glory.&rdquo; — John 1:14
        </div>
      </div>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Tab nav */}
        <div style={{ display: "flex", gap: 4, margin: "32px 0", background: CARD, borderRadius: 14, padding: 5, border: `1px solid ${BORDER}`, overflowX: "auto" }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, minWidth: 80, padding: "10px 6px", borderRadius: 10, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "all 0.2s ease", whiteSpace: "nowrap" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* WHAT IS INCARNATION */}
        {activeTab === "what" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 12 }}>God Became Flesh</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}>
                The incarnation (from Latin: in carne — &ldquo;in the flesh&rdquo;) is the event in which the eternal Son of God — the second person of the Trinity, who existed before creation (John 1:1-3) and through whom all things were made — took on human nature by being born of the Virgin Mary. He became what he was not (human) without ceasing to be what he is (divine).
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                This is the hinge of Christian theology. Every other Christian doctrine — the atonement, the resurrection, justification, sanctification, the new creation — depends on the reality that God became human in Jesus Christ. C.S. Lewis called it &ldquo;the grand miracle&rdquo; around which everything else in Christianity either clusters or fails.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16, marginBottom: 24 }}>
              {[
                { title: "Pre-existent Son", ref: "John 1:1-3", color: PURPLE, body: "The subject of the incarnation is the eternal Son of God — who existed 'in the beginning' with the Father, through whom all things were made, who was himself 'with God' and 'was God.' The incarnation is not the creation of Christ but the entry of the pre-existent Son into human existence." },
                { title: "Genuinely Human", ref: "Galatians 4:4", color: GREEN, body: "God sent 'his Son, born of a woman, born under the law.' The incarnation is real — Jesus was genuinely, physically human. He was not God in a human disguise (Docetism) but the eternal Son of God who truly became human." },
                { title: "The Virgin Birth", ref: "Luke 1:35", color: GOLD, body: "The Spirit of God conceived the Son in the womb of the Virgin Mary, so that the child born would be both Son of God and son of Mary. The virgin birth is the mechanism of the incarnation — the unique entry of the eternal Son into human existence without the cooperation of a human father." },
                { title: "Permanent Union", ref: "Hebrews 7:24-25", color: "#EF4444", body: "The incarnation is permanent. The Son of God did not temporarily 'wear' humanity and then shed it at the ascension. The risen and ascended Christ retains his humanity forever. He is our eternal high priest — the glorified, resurrected human being who intercedes for us at the Father's right hand." },
              ].map((c, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${c.color}30`, borderRadius: 14, padding: 22 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <h3 style={{ color: c.color, fontWeight: 800, fontSize: 16, margin: 0 }}>{c.title}</h3>
                    <span style={{ background: `${c.color}20`, color: c.color, padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 600, whiteSpace: "nowrap", marginLeft: 8 }}>{c.ref}</span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{c.body}</p>
                </div>
              ))}
            </div>

            {[
              { quote: "He became what we are that we might become what he is. The Word of God became human so that we might be made divine.", by: "Athanasius of Alexandria, On the Incarnation" },
              { quote: "The eternal Son does not merely appear human. He is not an actor in a costume. He took on our nature — our hunger, our weariness, our grief, our death — because that was the only way to redeem it from within.", by: "C.S. Lewis, Mere Christianity" },
              { quote: "The very fact of the incarnation shows us what God thinks of matter, of flesh, of the physical world: he thought it worth becoming. Creation is not a prison to be escaped but a home to be redeemed.", by: "N.T. Wright" },
            ].map((q, i) => (
              <div key={i} style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }}>&ldquo;{q.quote}&rdquo;</p>
                <div style={{ color: GOLD, fontWeight: 700, fontSize: 12 }}>— {q.by}</div>
              </div>
            ))}
          </div>
        )}

        {/* TWO NATURES */}
        {activeTab === "natures" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                The Council of Chalcedon (451 AD) defined orthodoxy: Jesus Christ is one person in two complete natures — fully divine and fully human — &ldquo;without confusion, without change, without division, without separation.&rdquo; Neither nature diminishes the other. Both are real. Both are complete.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
              {TWO_NATURES.map((n, i) => (
                <button type="button" key={i} onClick={() => setSelectedNature(i)}
                  style={{ flex: 1, padding: "14px 16px", borderRadius: 12, border: `1px solid ${selectedNature === i ? n.color : BORDER}`, background: selectedNature === i ? `${n.color}18` : CARD, color: selectedNature === i ? n.color : MUTED, fontWeight: 700, fontSize: 15, cursor: "pointer", transition: "all 0.2s ease" }}>
                  {n.icon} {n.nature}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${TWO_NATURES[selectedNature].color}40`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{TWO_NATURES[selectedNature].desc}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                {TWO_NATURES[selectedNature].texts.map(t => (
                  <span key={t} style={{ background: `${TWO_NATURES[selectedNature].color}15`, color: TWO_NATURES[selectedNature].color, padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{t}</span>
                ))}
              </div>
              <h4 style={{ color: TWO_NATURES[selectedNature].color, fontWeight: 700, fontSize: 14, marginBottom: 12 }}>Biblical Evidence:</h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 8 }}>
                {TWO_NATURES[selectedNature].evidences.map((e, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 8, padding: 10, border: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{e}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 22 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 10 }}>The Communicatio Idiomatum</h3>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                The communicatio idiomatum (Latin: &ldquo;communication of attributes&rdquo;) is the principle that the attributes of both natures can be predicated of the one person of Christ. The Son of God died (though divinity cannot die — he died in his human nature). The Son of Man is omniscient (though humans are not — he knows all things in his divine nature). The person is one; the natures are two; what happens to either nature happens to the one person.
              </p>
            </div>
          </div>
        )}

        {/* WHY IT MATTERS */}
        {activeTab === "why" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                The incarnation is not a theological curiosity — it is the foundation of salvation. Every major aspect of the Christian gospel depends on the reality that the eternal Son became genuinely human. Athanasius&apos;s masterwork <em>On the Incarnation</em> (c. 318 AD) is still the best explanation of why it was both necessary and fitting.
              </p>
            </div>
            {WHY_MATTERS.map((w, i) => (
              <div key={i} onClick={() => setExpandedWhy(expandedWhy === i ? null : i)}
                style={{ background: CARD, border: `1px solid ${expandedWhy === i ? `${GREEN}50` : BORDER}`, borderRadius: 14, padding: 22, marginBottom: 12, cursor: "pointer", transition: "all 0.2s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 24 }}>{w.icon}</span>
                    <div>
                      <h3 style={{ color: expandedWhy === i ? GREEN : TEXT, fontWeight: 800, fontSize: 17, margin: 0, transition: "all 0.2s ease" }}>{w.title}</h3>
                      <span style={{ background: `${PURPLE}18`, color: PURPLE, padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 600 }}>{w.ref}</span>
                    </div>
                  </div>
                  <span style={{ color: MUTED }}>{expandedWhy === i ? "▲" : "▼"}</span>
                </div>
                {expandedWhy === i && (
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginTop: 14, marginBottom: 0 }}>{w.body}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* CHALCEDON */}
        {activeTab === "chalcedon" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 12 }}>The Council of Chalcedon (451 AD)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Called by Emperor Marcian to settle the Nestorian controversy and the Eutychian controversy, the Council of Chalcedon produced the most carefully worded statement on Christ&apos;s person in Christian history — one that all major Christian traditions (Catholic, Orthodox, Protestant) affirm. It used Greek philosophical vocabulary not to speculate but to set the boundaries of orthodoxy.
              </p>
            </div>
            {CHALCEDON_CONTENT.map((c, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 24, marginBottom: 14 }}>
                <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>{c.heading}</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{c.body}</p>
              </div>
            ))}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginTop: 4 }}>
              {[
                { heresy: "Nestorianism", color: "#EF4444", error: "Two persons in Christ — the divine Son and the human Jesus — loosely united. Mary is mother of the human Jesus, not of the divine Son. Condemned at the Council of Ephesus (431 AD) through the work of Cyril of Alexandria." },
                { heresy: "Eutychianism", color: "#F59E0B", error: "The two natures of Christ were mixed into a third substance — neither truly divine nor truly human. Jesus' humanity was 'absorbed' by his divinity. Condemned at Chalcedon (451 AD). Still present in some Monophysite traditions." },
                { heresy: "Apollinarianism", color: PURPLE, error: "Jesus had a human body but the Logos replaced the human mind/soul. This preserves unity but sacrifices genuine humanity. Condemned at the Council of Constantinople (381 AD) — if he did not take on a human mind, he cannot redeem our minds." },
              ].map((h, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${h.color}30`, borderRadius: 12, padding: 18 }}>
                  <div style={{ color: h.color, fontWeight: 800, fontSize: 15, marginBottom: 8 }}>{h.heresy}</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{h.error}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* KENOSIS */}
        {activeTab === "kenosis" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                The &ldquo;kenosis debate&rdquo; centers on how to interpret Philippians 2:7 — that the Son &ldquo;emptied himself&rdquo; (Greek: ekenosen) in the incarnation. What did he empty himself of? Did he give up divine attributes? This has been one of the most contested questions in Christology since the 19th century.
              </p>
            </div>
            {KENOSIS.map((k, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${k.color}30`, borderRadius: 14, padding: 24, marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <h3 style={{ color: k.color, fontWeight: 800, fontSize: 18, margin: 0 }}>{k.title}</h3>
                  <span style={{ background: `${k.color}18`, color: k.color, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", marginLeft: 12 }}>{k.ref}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{k.body}</p>
              </div>
            ))}
            <div style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25`, borderRadius: 14, padding: 24 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>The Bottom Line</h3>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                However the mechanics are understood, the Chalcedonian formula remains the boundary: Jesus is truly God (his divine nature intact) and truly human (genuinely experiencing human limitation) in one undivided person. The Son lived in the incarnation in total dependence on the Father, guided by the Spirit — modeling the human life of faith that we are called to share.
              </p>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Lectures and sermons on the incarnation from leading evangelical and Reformed scholars and teachers.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                    src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                  <div style={{ padding: "16px 20px" }}>
                    <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                    <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{v.description}</p>
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
