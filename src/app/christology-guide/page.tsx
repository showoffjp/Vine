"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "person", label: "Person of Christ" },
  { id: "natures", label: "Two Natures" },
  { id: "offices", label: "Three Offices" },
  { id: "states", label: "States" },
  { id: "heresies", label: "Heresies" },
  { id: "names", label: "Names & Titles" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const CHRIST_TEXTS = [
  { ref: "John 1:1, 14", text: "In the beginning was the Word, and the Word was with God, and the Word was God... The Word became flesh and made his dwelling among us.", color: GREEN },
  { ref: "Colossians 2:9", text: "For in Christ all the fullness of the Deity lives in bodily form.", color: BLUE },
  { ref: "Philippians 2:6–7", text: "Who, being in very nature God, did not consider equality with God something to be used to his own advantage; rather, he made himself nothing by taking the very nature of a servant.", color: GOLD },
  { ref: "Hebrews 1:3", text: "The Son is the radiance of God's glory and the exact representation of his being, sustaining all things by his powerful word.", color: TEAL },
  { ref: "1 Timothy 2:5", text: "For there is one God and one mediator between God and mankind, the man Christ Jesus.", color: PURPLE },
];

const TWO_NATURES_POINTS = [
  {
    title: "The Chalcedonian Definition (AD 451)",
    desc: "The Council of Chalcedon declared that Christ is 'truly God and truly man, of a rational soul and body; consubstantial with the Father as regards his divinity, and consubstantial with us as regards his humanity... acknowledged in two natures, without confusion, without change, without division, without separation.' This remains the standard for orthodox Christology.",
    color: GOLD,
  },
  {
    title: "The Hypostatic Union",
    desc: "The technical term for the union of Christ's two natures in one person (Greek: hypostasis). The divine and human natures are united in the single person of the eternal Son — not mixed or confused (against Eutychianism), not divided (against Nestorianism), but genuinely one person with two complete natures.",
    color: BLUE,
  },
  {
    title: "Truly Divine",
    desc: "Jesus possesses all the divine attributes: omniscience, omnipotence, omnipresence, eternality, immutability. John 1:1 identifies him as God; John 8:58 records his 'I Am'; Thomas confesses 'My Lord and my God' (John 20:28). He accepted worship, forgave sins, and claimed authority equal to God.",
    color: TEAL,
  },
  {
    title: "Truly Human",
    desc: "The Incarnation is not an appearance but a genuine taking on of human nature. Jesus was born, grew (Luke 2:52), was tired (John 4:6), wept (John 11:35), was tempted (Heb 4:15), and died. He is not merely God in a human costume but the eternal Son who truly became human.",
    color: GREEN,
  },
  {
    title: "The Communicatio Idiomatum",
    desc: "The 'communication of attributes' — because the two natures are united in one person, attributes of either nature can be predicated of the whole person. Thus we can say 'God suffered' or 'the Son of Man is in heaven' (John 3:13). The attributes are not mixed; they belong to the respective natures but the statements describe the one person.",
    color: PURPLE,
  },
];

const THREE_OFFICES = [
  {
    title: "Prophet",
    icon: "📖",
    ot: "Moses promised a prophet like himself (Deut 18:15–18). The OT prophets spoke God's word to Israel.",
    fulfillment: "Jesus is the supreme Prophet — the Word become flesh who is himself the revelation. He taught with authority, not like the scribes (Matt 7:29). 'In the past God spoke... through the prophets... but in these last days he has spoken to us by his Son' (Heb 1:1–2).",
    color: BLUE,
  },
  {
    title: "Priest",
    icon: "✝️",
    ot: "The Aaronic priests offered sacrifices for sin and interceded for Israel. But the sacrifices had to be repeated — they could not finally atone (Heb 10:1–4).",
    fulfillment: "Jesus is the great high priest who offered himself once for all (Heb 7:27). He intercedes for us now at God's right hand (Heb 7:25; Rom 8:34). He is both priest and sacrifice — the Lamb of God who takes away the sin of the world (John 1:29).",
    color: RED,
  },
  {
    title: "King",
    icon: "👑",
    ot: "David's covenant promised an eternal kingdom (2 Sam 7:12–16). Israel longed for the messianic king.",
    fulfillment: "Jesus is the Son of David, the Messiah-King (Matt 1:1; Rev 19:16). His kingdom came with his first advent and will be consummated at his return. He rules now from God's right hand (Eph 1:20–22), with all authority in heaven and earth (Matt 28:18).",
    color: GOLD,
  },
];

const STATES_CONTENT = [
  {
    title: "State of Humiliation",
    desc: "The eternal Son voluntarily veiled his glory and took on the limitations of human existence in the Incarnation — from his birth in a manger through his death on the cross. Philippians 2:7–8 describes this as 'emptying' (kenosis) and 'humbling himself.' This does not mean he ceased to be God but that he did not use his divine prerogatives for his own advantage.",
    color: BLUE,
    steps: ["Incarnation — taking on human nature", "Birth in poverty and obscurity", "Subjection to the law", "Suffering temptation", "Suffering, crucifixion, and death", "Burial"],
  },
  {
    title: "State of Exaltation",
    desc: "Following his humiliation, Christ was exalted by the Father. The resurrection vindicated him and inaugurated his exalted state, which continues and will be consummated at his return.",
    color: GOLD,
    steps: ["Resurrection from the dead", "Post-resurrection appearances (40 days)", "Ascension to the Father's right hand", "Outpouring of the Holy Spirit (Acts 2)", "Session — ruling at God's right hand (Heb 1:3)", "Second Coming in glory (Rev 19)"],
  },
];

const HERESIES = [
  {
    title: "Docetism",
    period: "1st–2nd centuries",
    error: "Christ only appeared to be human (from Gk: dokein, 'to seem'). His body was an illusion or phantom. Associated with Gnosticism's view that matter is evil.",
    correction: "1 John 4:2 — 'Every spirit that acknowledges that Jesus Christ has come in the flesh is from God.' The Incarnation was real, not apparent.",
    color: RED,
  },
  {
    title: "Ebionism",
    period: "1st–2nd centuries",
    error: "Jesus was merely a human man — a righteous Jew who was adopted as God's Son at his baptism (adoptionism). He had no pre-existence or divine nature.",
    correction: "John 1:1–14 affirms pre-existent deity. Col 2:9: 'In Christ all the fullness of the Deity lives in bodily form.'",
    color: MUTED,
  },
  {
    title: "Arianism",
    period: "4th century (Arius)",
    error: "The Son is a created being — 'there was when he was not.' He is the highest of creatures and like God (homoiousios) but not identical in being (homoousios). Condemned at Nicaea (AD 325).",
    correction: "Nicene Creed: the Son is 'of the same substance' (homoousios) as the Father. John 1:1, 8:58, Col 1:15–17 affirm full deity.",
    color: PURPLE,
  },
  {
    title: "Nestorianism",
    period: "5th century (Nestorius)",
    error: "The two natures in Christ are so distinct as to constitute two persons. Mary is only 'Christ-bearer' (Christotokos), not 'God-bearer' (Theotokos).",
    correction: "Condemned at Ephesus (AD 431). Chalcedon (451): Christ is one person in two natures, 'without division, without separation.' The natures are united in one hypostasis.",
    color: BLUE,
  },
  {
    title: "Eutychianism / Monophysitism",
    period: "5th century (Eutyches)",
    error: "Christ's two natures were mixed into one nature — a third thing neither fully human nor fully divine. The human nature was absorbed by the divine, like a drop of honey in the ocean.",
    correction: "Condemned at Chalcedon (451). The two natures are united 'without confusion, without change.' Both remain intact and complete in the one person.",
    color: TEAL,
  },
  {
    title: "Apollinarianism",
    period: "4th century (Apollinaris)",
    error: "Christ had a human body and soul but not a human spirit/mind — the divine Logos replaced the rational soul. Resulted in less-than-full humanity.",
    correction: "Condemned at Constantinople (381). Gregory Nazianzen: 'what is not assumed is not healed.' Christ must be fully human to save full humans.",
    color: GOLD,
  },
];

const NAMES_TITLES = [
  { name: "Jesus", meaning: "YHWH saves (Yeshua)", significance: "His personal name — his mission is embedded in his name. 'You shall call his name Jesus, for he will save his people from their sins' (Matt 1:21).", color: GREEN },
  { name: "Christ / Messiah", meaning: "Anointed One", significance: "The Greek (Christos) and Hebrew (Mashiach) equivalent. The long-awaited anointed Prophet, Priest, and King. Jesus fulfills and transcends all OT messianic expectation.", color: GOLD },
  { name: "Son of God", meaning: "Divine Sonship", significance: "Expresses Christ's unique, eternal relationship to the Father — not adoptive sonship but ontological oneness. 'The Father and I are one' (John 10:30).", color: BLUE },
  { name: "Son of Man", meaning: "Humanity & Daniel 7 Messiah", significance: "Jesus's most common self-designation — evoking both genuine humanity and the glorious figure of Daniel 7:13–14 who comes to receive all dominion.", color: PURPLE },
  { name: "Lord (Kyrios)", meaning: "YHWH / Supreme Authority", significance: "The LXX used Kyrios for YHWH; the NT applies it to Jesus consistently (Phil 2:11; Acts 2:36). Confessing 'Jesus is Lord' is the heart of Christian confession.", color: TEAL },
  { name: "Word (Logos)", meaning: "Divine Reason / Self-Expression", significance: "John 1:1 — the eternal self-expression of God, through whom all things were created. The Logos became flesh — the eternal divine self-communication became a human person.", color: RED },
];

const VIDEOS = [
  { videoId: "WgNS0GObzfc", title: "Who Is Jesus Christ? — R.C. Sproul" },
  { videoId: "dN3GbF9Bx5E", title: "The Hypostatic Union — Ligonier" },
  { videoId: "H5HWVr2T0eM", title: "The Person of Christ — John Frame" },
  { videoId: "VKhbbMmBnWI", title: "Christology and the Council of Chalcedon" },
  { videoId: "6YwRuJ2-kXQ", title: "The Offices of Christ — Prophet, Priest, King" },
];

export default function ChristologyGuidePage() {
  const [tab, setTab] = useLocalStorage("vine_christol_tab", "overview");
  const [openHeresy, setOpenHeresy] = useLocalStorage("vine_christol_her", "");
  const [openName, setOpenName] = useLocalStorage("vine_christol_name", "");
  const [journal, setJournal] = useLocalStorage("vine_christol_journal", "");

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" };
  const accordionBtn = (open: boolean, color: string) => ({
    width: "100%", textAlign: "left" as const, display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "1rem 1.25rem", background: open ? `${color}12` : "transparent",
    border: `1px solid ${open ? color + "40" : BORDER}`, borderRadius: 12, cursor: "pointer", marginBottom: 8,
    color: TEXT, fontWeight: 700, transition: "all .2s",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>✝️</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: GOLD, textTransform: "uppercase" }}>Systematic Theology</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christology: The Person and Work of Christ
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            Who is Jesus Christ? Christology is the study of Christ&apos;s person — his divine and human natures, how they are united in one person, his offices and roles, his humiliation and exaltation, and the classic heresies the church has rejected.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? GOLD : "transparent", color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? GOLD : BORDER}`, cursor: "pointer", transition: "all .18s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GOLD }}>Key Christological Texts</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {CHRIST_TEXTS.map((t) => (
                  <div key={t.ref} style={{ background: `${t.color}10`, border: `1px solid ${t.color}30`, borderRadius: 12, padding: "1rem 1.25rem", borderLeft: `3px solid ${t.color}` }}>
                    <span style={{ fontWeight: 800, color: t.color, fontSize: "0.85rem" }}>{t.ref}</span>
                    <p style={{ color: TEXT, lineHeight: 1.7, marginTop: "0.3rem" }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...card }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: BLUE }}>The Central Confession</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1rem" }}>
                Christian faith stands or falls with the identity of Jesus Christ. The creeds of the church — Nicene (AD 325/381) and Chalcedonian (AD 451) — articulate what Scripture teaches: Jesus is truly God and truly human, one person in two natures.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
                {[
                  { label: "Truly God", icon: "✦", desc: "Consubstantial with the Father — of the same divine being (homoousios). Pre-existent, creator, worshipped.", color: GOLD },
                  { label: "Truly Human", icon: "👤", desc: "Consubstantial with us — born of Mary, tired, tempted, suffered, died. Not an appearance.", color: BLUE },
                  { label: "One Person", icon: "⭕", desc: "Not two persons (Nestorianism) but a single subject — the eternal Son who became flesh.", color: GREEN },
                  { label: "Two Natures", icon: "∞", desc: "Not mixed into one (Eutychianism) but distinct — without confusion, without change.", color: TEAL },
                ].map((item) => (
                  <div key={item.label} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1rem", textAlign: "center" }}>
                    <div style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>{item.icon}</div>
                    <div style={{ fontWeight: 800, color: item.color, marginBottom: "0.4rem" }}>{item.label}</div>
                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "person" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GREEN }}>The Person of Christ</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { title: "Pre-existence", desc: "The eternal Son existed before the Incarnation — 'before Abraham was, I am' (John 8:58). John 1:1–3 places him at the very beginning as the divine Word through whom all things were made. He is not a creature who became divine but the eternal God who became human.", color: GOLD },
                { title: "The Kenosis (Philippians 2:5–11)", desc: "Paul describes the Incarnation as Christ 'emptying himself' (kenosis). He did not empty himself of divinity — that would destroy the Incarnation. Rather he emptied himself of the free exercise of divine prerogatives, the glory he shared with the Father (John 17:5), and took on the form of a servant, embracing real human limitations.", color: BLUE },
                { title: "Impeccability Debate", desc: "Was it possible for Jesus to sin? Impeccability means Christ could not have sinned; peccability means he could have but chose not to. The impeccability view holds that because his person is divine, sin was metaphysically impossible. The peccability view holds genuine temptation required genuine possibility — Heb 4:15 says he was 'tempted in every way, just as we are.' Both affirm he never sinned.", color: TEAL },
                { title: "Jesus as the Second Adam", desc: "Paul's Adam-Christ typology (Rom 5:12–21; 1 Cor 15:45–49) presents Jesus as the representative head of the new humanity, succeeding where the first Adam failed. Where Adam disobeyed and brought death, Christ obeyed and brought life. This typology is foundational for understanding both atonement and resurrection.", color: GREEN },
                { title: "Jesus's Self-Understanding", desc: "Jesus consistently acted with divine authority: forgiving sins (which God alone can do — Mark 2:7), accepting worship, claiming divine names ('I AM'), and placing his own word above Scripture ('You have heard... but I say to you'). C.S. Lewis's trilemma: Lord, Liar, or Lunatic — the evidence points to his genuine divine self-awareness.", color: PURPLE },
              ].map((item) => (
                <div key={item.title} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1.25rem" }}>
                  <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "natures" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: BLUE }}>The Two Natures of Christ</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Chalcedon (451) settled the church&apos;s understanding: Christ is truly God and truly human in one person. This is the bedrock of orthodox Christology, confessed against four great Christological errors.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {TWO_NATURES_POINTS.map((item) => (
                <div key={item.title} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1.25rem" }}>
                  <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "offices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: TEAL, margin: 0 }}>The Threefold Office of Christ</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Calvin popularized the munus triplex — Christ as Prophet, Priest, and King. This framework organizes his work across the span of redemptive history and captures the OT anticipations he fulfills.
            </p>
            {THREE_OFFICES.map((office) => (
              <div key={office.title} style={{ ...card }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "1.8rem" }}>{office.icon}</span>
                  <h3 style={{ fontWeight: 900, fontSize: "1.2rem", color: office.color }}>{office.title}</h3>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div style={{ background: `${MUTED}0A`, borderRadius: 10, padding: "1rem" }}>
                    <div style={{ fontWeight: 700, color: MUTED, fontSize: "0.82rem", letterSpacing: 1, marginBottom: "0.5rem" }}>OLD TESTAMENT TYPE</div>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{office.ot}</p>
                  </div>
                  <div style={{ background: `${office.color}0A`, borderRadius: 10, padding: "1rem" }}>
                    <div style={{ fontWeight: 700, color: office.color, fontSize: "0.82rem", letterSpacing: 1, marginBottom: "0.5rem" }}>FULFILLMENT IN CHRIST</div>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{office.fulfillment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "states" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: PURPLE, margin: 0 }}>The Two States of Christ</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Reformed theology describes Christ&apos;s saving work in terms of two states — humiliation and exaltation — each with distinct steps. The movement from humiliation to exaltation is the shape of redemption.
            </p>
            {STATES_CONTENT.map((state) => (
              <div key={state.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 900, fontSize: "1.15rem", color: state.color, marginBottom: "0.75rem" }}>{state.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1rem" }}>{state.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {state.steps.map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${state.color}20`, border: `1px solid ${state.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 800, color: state.color, flexShrink: 0 }}>{i + 1}</div>
                      <span style={{ color: MUTED, fontSize: "0.95rem" }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "heresies" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: RED }}>Classic Christological Heresies</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              The church&apos;s creeds were formed in response to specific heresies. Understanding what the church rejected clarifies what it confesses. Each heresy either denied Christ&apos;s full humanity or his full divinity — or divided his single person.
            </p>
            {HERESIES.map((h, i) => {
              const key = String(i);
              const open = openHeresy === key;
              return (
                <div key={h.title}>
                  <button type="button" style={accordionBtn(open, h.color)} onClick={() => setOpenHeresy(open ? "" : key)}>
                    <span>{h.title} <span style={{ fontWeight: 400, color: MUTED, fontSize: "0.82rem" }}>— {h.period}</span></span>
                    <span style={{ color: h.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${h.color}0A`, border: `1px solid ${h.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "0.75rem" }}><strong style={{ color: RED }}>Error:</strong> {h.error}</p>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}><strong style={{ color: GREEN }}>Orthodox Response:</strong> {h.correction}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "names" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: TEAL }}>Names and Titles of Christ</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Each name and title of Jesus reveals a facet of his identity. Together they form a portrait of the most important person in history.
            </p>
            {NAMES_TITLES.map((n, i) => {
              const key = String(i);
              const open = openName === key;
              return (
                <div key={n.name}>
                  <button type="button" style={accordionBtn(open, n.color)} onClick={() => setOpenName(open ? "" : key)}>
                    <span style={{ fontWeight: 800 }}>{n.name} <span style={{ fontWeight: 400, color: MUTED, fontSize: "0.85rem" }}>— {n.meaning}</span></span>
                    <span style={{ color: n.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${n.color}0A`, border: `1px solid ${n.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{n.significance}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>Personal Reflection</h2>
            <p style={{ color: MUTED, marginBottom: "1rem" }}>Which aspect of Christ&apos;s person — his full divinity, his genuine humanity, his threefold office, or his two states — has most shaped your faith? What do you want to understand better?</p>
            <textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", boxSizing: "border-box" }}
            />
            {journal && <div style={{ marginTop: "0.75rem", fontSize: "0.82rem", color: MUTED }}>Auto-saved · {journal.length} characters</div>}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Video Teaching on Christology</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId}>
                  <div style={{ fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>{v.title}</div>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 12, overflow: "hidden" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {[
            { label: "Atonement Guide", href: "/atonement-guide" },
            { label: "Resurrection Theology", href: "/resurrection-theology" },
            { label: "Soteriology Guide", href: "/soteriology-guide" },
            { label: "Classic Heresies", href: "/classic-heresies" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ padding: "0.4rem 1rem", borderRadius: 999, fontSize: "0.82rem", fontWeight: 700, border: `1px solid ${BORDER}`, color: MUTED, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
