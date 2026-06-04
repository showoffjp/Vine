"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theories" | "images" | "objections" | "devotional" | "videos";

const THEORIES = [
  {
    name: "Penal Substitution",
    tradition: "Reformed / Evangelical",
    color: GREEN,
    era: "Systematized in the Reformation; roots in Anselm and Paul",
    summary: "Jesus took the punishment that sinners deserved. The Father's holy wrath against sin — which justice required to be satisfied — was borne by the Son in the place of sinners. God is both just (the penalty was paid) and the justifier of those who have faith in Jesus (Romans 3:26). This is the dominant theory in Reformed, Baptist, and most evangelical traditions.",
    key_texts: "Isaiah 53:4-6; Romans 3:25-26; 2 Corinthians 5:21; Galatians 3:13; 1 Peter 2:24",
    strength: "Directly addresses guilt; integrates God's justice and love; explains the Apostolic emphasis on the blood, the sacrifice, the curse; grounds justification by faith",
    weakness: "Concerns about divine violence (Father punishing Son); does not fully explain what changes in the cosmos; risk of separating the Father's wrath from the Son's love",
    advocates: "Calvin, Owen, Hodge, Packer ('In My Place Condemned He Stood'), Grudem, Carson, Stott ('The Cross of Christ')",
    quote: "God, out of the love which he bore to man, imposed upon himself the necessity of satisfying divine justice. — John Calvin"
  },
  {
    name: "Christus Victor",
    tradition: "Lutheran, Eastern Orthodox, Charismatic",
    color: PURPLE,
    era: "Dominant in the early church; recovered by Gustaf Aulen (1931)",
    summary: "The cross is the site of God's cosmic victory over the powers of sin, death, and the devil. Christ enters enemy territory, absorbs the full force of evil, and rises victorious — defeating the powers that enslaved humanity. This is the dominant view of the early Church Fathers. Gustaf Aulen's 1931 book recovered it for modern theology after Reformed penal substitution had dominated for centuries.",
    key_texts: "Colossians 2:13-15; Hebrews 2:14-15; John 12:31; 1 John 3:8; Revelation 5:5",
    strength: "Captures the cosmic scope of redemption; addresses not just guilt but bondage; resonates with Paul's language about powers and principalities; strong in the early Fathers",
    weakness: "Less clear on how exactly Christ's death defeats the devil; may underemphasize individual guilt and forgiveness; tends to be weak on propitiation",
    advocates: "Origen, Irenaeus, Athanasius, Luther ('The Freedom of a Christian'), Aulen, Greg Boyd, N.T. Wright (partially)",
    quote: "The purpose of the Incarnation was that God, by entering the citadel of the devil's dominion, might overwhelm him. — Irenaeus of Lyon"
  },
  {
    name: "Moral Influence / Exemplarist",
    tradition: "Liberal Protestant, Unitarian",
    color: "#3B82F6",
    era: "Proposed by Peter Abelard (1079-1142); dominant in modern liberal theology",
    summary: "The cross demonstrates God's love in such a powerful way that it moves sinners to repentance and transformation. Christ's death is not a payment or a victory — it is a demonstration of love that reforms the human heart. The atonement's effect is moral (it changes us) not judicial (it satisfies a penalty) or cosmic (it defeats powers).",
    key_texts: "1 John 4:10; John 3:16; Romans 5:8",
    strength: "Takes human moral transformation seriously; avoids objections to divine violence; accessible to modern people skeptical of substitutionary categories",
    weakness: "Reduces the atonement to a moral demonstration; cannot adequately explain why Jesus had to die specifically (a good person's death would suffice); does not address divine justice; rejected by most historic Christian traditions as insufficient",
    advocates: "Abelard; much of 19th century liberal theology; some contemporary progressive theology",
    quote: "The chief purpose of the work of Christ was to teach by example and to stir up our love. — Peter Abelard"
  },
  {
    name: "Satisfaction Theory",
    tradition: "Catholic, Anglican",
    color: "#EF4444",
    era: "Systematized by Anselm of Canterbury in 'Cur Deus Homo' (1098)",
    summary: "Human sin dishonors God's honor — an infinite offense against an infinite God that no finite creature can adequately satisfy. God becomes human in Jesus so that a human being can offer the satisfaction that only God can provide. The Son's death is not payment of a penalty but restoration of God's honor. This medieval theory was the dominant Western atonement theology before the Reformation and remains significant in Catholic theology.",
    key_texts: "Hebrews 2:17; Romans 3:25; 1 John 2:2; 1 John 4:10",
    strength: "Takes divine justice seriously; explains the necessity of the Incarnation (why God had to become human); integrates the medieval honor culture's categories with biblical categories",
    weakness: "Relies heavily on medieval honor categories that are culturally specific; less explicitly biblical than penal substitution; conflates honor and justice",
    advocates: "Anselm; Catholic Scholastic tradition; much of Anglican theology",
    quote: "God could not restore humanity without satisfaction being made, and no creature could make satisfaction for human sin — only God could. So God became human. — Anselm of Canterbury"
  },
  {
    name: "Governmental Theory",
    tradition: "Arminian, Wesleyan",
    color: "#F59E0B",
    era: "Developed by Hugo Grotius (1583-1645)",
    summary: "God is the moral governor of the universe. Sin disrupts the moral order that God is responsible to maintain. Christ's death demonstrates the seriousness of sin and satisfies the demands of God's moral government without requiring that the exact penalty be paid by Jesus. God freely pardons based on Christ's death as a sufficient demonstration of divine justice. This allows for genuine free will — God can pardon without mechanically transferring penalty.",
    key_texts: "Romans 3:25-26; 2 Corinthians 5:19",
    strength: "Preserves human freedom; avoids the strict transfer of guilt and penalty in penal substitution; allows God's forgiveness to be genuinely free rather than mechanically required",
    weakness: "Reduces the atonement to a moral demonstration with consequences; less emphasis on the objective guilt that Christ actually bore; criticized by Reformed theologians as inadequate to Paul's language",
    advocates: "Hugo Grotius; John Miley; Charles Finney (partly); many Wesleyan theologians",
    quote: "God, as the moral governor of the world, provided an atonement sufficient to demonstrate his righteous displeasure with sin while remaining free to extend pardon. — Hugh Grotius"
  },
  {
    name: "Scapegoat Theory (Girardian)",
    tradition: "Contemporary / Catholic (René Girard)",
    color: "#10B981",
    era: "Developed by René Girard in 'Violence and the Sacred' (1972) and 'Things Hidden since the Foundation of the World' (1978)",
    summary: "Human societies manage violence through the scapegoat mechanism — directing collective violence onto a victim who is then blamed for social disorder. The Gospel subverts this mechanism: Jesus is an innocent victim who is killed by collective violence, but the resurrection reveals his innocence. This exposes the scapegoat mechanism as a lie. The Gospel ends sacred violence by revealing the victim's innocence and condemning the perpetrators. Girard was a literary critic and anthropologist who converted to Catholicism through his research.",
    key_texts: "Isaiah 53; Hebrews 13:11-12; John 1:29; 1 Peter 2:22",
    strength: "Explains the anthropological function of sacrifice; illuminates the social dynamics of the Passion narrative; addresses violence as a structural feature of human society",
    weakness: "More anthropological than theological; does not directly address divine justice or propitiation; reading Paul through Girard requires significant interpretive work",
    advocates: "René Girard; James Alison; Brian McLaren (influenced); some Catholic theologians",
    quote: "The Gospel reveals the mechanism of the scapegoat, exposes it, and prevents it from functioning. — René Girard"
  },
];

const IMAGES = [
  { image: "Sacrifice", texts: "Hebrews 9-10; Leviticus 16; John 1:29", color: GREEN, desc: "The most developed atonement image in the New Testament — building on the Levitical sacrificial system. The Day of Atonement (Yom Kippur) provided the primary template: the high priest entered the Holy of Holies with blood to atone for Israel's sin. Jesus is simultaneously the High Priest and the sacrifice — fulfilling and ending the sacrificial system. The epistle to the Hebrews develops this image in the most detail." },
  { image: "Propitiation (Mercy Seat)", texts: "Romans 3:25; 1 John 2:2; 1 John 4:10; Hebrews 2:17", color: PURPLE, desc: "The Greek word hilasterion (Romans 3:25) is the same word used in the Septuagint for the mercy seat — the lid of the Ark of the Covenant where God's presence dwelt and where the high priest sprinkled blood on Yom Kippur. God presented Christ as the mercy seat — the place where divine wrath is turned away (propitiated) through blood. This is the most specifically judicial image — God's wrath is not merely demonstrated but actually appeased." },
  { image: "Redemption / Ransom", texts: "Mark 10:45; Galatians 3:13; Ephesians 1:7; Revelation 5:9", color: "#3B82F6", desc: "Jesus paid a ransom price to redeem (purchase back) those enslaved to sin and death. In the ancient world, redemption was a commercial transaction: a slave was freed by the payment of a price. The image applies to Israel's exodus (redemption from Egypt) and to the NT believer's liberation from sin's slavery. Jesus's statement 'the Son of Man came to give his life as a ransom for many' (Mark 10:45) is the most explicit." },
  { image: "Reconciliation", texts: "2 Corinthians 5:18-21; Romans 5:10-11; Colossians 1:19-22", color: "#EF4444", desc: "God in Christ reconciled the world to himself — overcoming the enmity between God and humanity that sin created. The initiative is entirely God's: 'God was reconciling the world to himself in Christ' (2 Cor 5:19). The reconciliation metaphor is relational rather than judicial — it emphasizes the restoration of friendship and access rather than the payment of a penalty." },
  { image: "Justification / Acquittal", texts: "Romans 3:24-26; Romans 4:25; Romans 5:1; Galatians 2:16", color: "#F59E0B", desc: "God declares sinners righteous — not because they are, but because Christ's righteousness is credited to them and their sin was credited to Christ (2 Cor 5:21 — the great exchange). This is a forensic (courtroom) metaphor: the verdict that should condemn is reversed because the penalty was already paid. The Reformation made justification by faith the central soteriological category, grounding it in the substitution and the imputation of righteousness." },
  { image: "New Covenant / New Creation", texts: "Luke 22:20; Jeremiah 31:31-34; 2 Corinthians 5:17; Colossians 1:20", color: "#10B981", desc: "Jesus's death inaugurates the New Covenant promised by Jeremiah — law written on the heart, full forgiveness, direct knowledge of God. It also initiates the new creation: 'If anyone is in Christ, the new creation has come' (2 Cor 5:17). N.T. Wright emphasizes this dimension — the cross is not merely about personal salvation but about the renewal of the entire cosmos, with Christ's death as the event through which God begins to put the world right." },
];

const OBJECTIONS = [
  { objection: "Isn't penal substitution 'cosmic child abuse'?", color: PURPLE, answer: "This objection (from Steve Chalke's 'The Lost Message of Jesus') misrepresents the doctrine by separating the Father's will from the Son's. The New Testament consistently presents the Atonement as the unified action of the triune God — not the Father punishing the Son, but God in Christ reconciling the world to himself (2 Cor 5:19). The Son is not a third party victim but the second person of the Trinity actively fulfilling his own plan. John 10:17-18: 'I lay down my life... No one takes it from me, but I lay it down of my own accord.'" },
  { objection: "Can an innocent person's suffering pay for someone else's guilt?", color: GREEN, answer: "This objection assumes that the Son and the sinner are simply separate individuals with no relationship. But the doctrine of union with Christ changes this: through faith, believers are united to Christ — his death becomes their death, his righteousness becomes theirs. This is not the arbitrary transfer of guilt and punishment between strangers but the consequence of a profound ontological union. Romans 6:1-11 describes how this union with Christ in death and resurrection actually works." },
  { objection: "Does God need to be satisfied before he can forgive? Can't he just forgive?", color: "#3B82F6", answer: "This is Abelard's objection and the most serious theological one. The answer is that God's justice is not external to God but part of who God is — he cannot simply ignore it any more than he can lie (Heb 6:18). C.S. Lewis's illustration: a magistrate cannot simply 'forgive' a fine that the state requires to be paid — someone must pay it. The question is who. God's answer is that he provides the payment himself, in the person of his Son." },
  { objection: "Why was a bloody sacrifice necessary? Isn't this primitive?", color: "#EF4444", answer: "The question assumes that a 'better' civilization would not require such a thing — but it misses the logic of sacrifice. Sacrifice is the recognition that the real cost of violation must be borne somewhere. A God who simply declares 'I forgive, forget about it' is a God who does not take sin seriously. Hebrews 9:22: 'Without the shedding of blood there is no forgiveness.' The Old Testament sacrificial system was not a barbaric ancient custom but a pedagogy preparing Israel to understand what the cross would mean." },
  { objection: "Aren't there many theories of the atonement? Doesn't that mean none is definitive?", color: "#F59E0B", answer: "Multiple theories are not competing alternatives but complementary facets of one multi-dimensional event. The cross is simultaneously: a substitutionary sacrifice (Levitical), a cosmic victory (over powers), a demonstration of love (moral influence), a satisfaction of justice (judicial), and the inauguration of new creation. No single model exhausts the meaning of the cross — which is why Scripture uses multiple images. The danger is reducing the cross to only one model; the wisdom is holding all the images together in their proper weights." },
];

const DEVOTIONAL = [
  { title: "God Shows His Love in That, While We Were Still Sinners...", ref: "Romans 5:8", color: GREEN, content: "Paul's most direct statement of the atonement's motive: love. 'God shows his love for us in that while we were still sinners, Christ died for us.' The timing is crucial: not after we improved, not after we showed potential, not after we reached out — while we were still sinners. The cross is not God's reward for human effort but his initiative into human failure. This is the foundation of Christian assurance: God's love for you was displayed at the moment of your deepest undeserving." },
  { title: "He Who Knew No Sin Became Sin", ref: "2 Corinthians 5:21", color: PURPLE, content: "The most theologically precise statement of substitution: 'For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God.' The great exchange: our sin attributed to him; his righteousness attributed to us. This is not metaphor — it is the structural fact that makes justification possible. The righteousness you stand in before God is not yours; it is Christ's, received through union with him by faith." },
  { title: "It Is Finished", ref: "John 19:30", color: "#3B82F6", content: "Tetelestai — a Greek commercial term meaning 'paid in full.' Used on receipts when a debt was discharged. Jesus's final word from the cross was an announcement of completed transaction: the work of redemption was not pending, not partial, not dependent on anything additional — it was done. The active verb 'it is finished' (not 'I am finished') means the work of atonement, not Jesus's life, is what was completed. This word is the foundation of Christian assurance: there is nothing left for you to add." },
  { title: "God Was in Christ, Reconciling the World", ref: "2 Corinthians 5:19", color: "#EF4444", content: "Paul's parenthetical — 'God was in Christ, reconciling the world to himself' — contains the most important clarification about who exactly was doing what on the cross. The Father was not absent, punishing a third party. The Father was in Christ — present in, with, and through the Son — carrying out the reconciliation himself. The Trinity is not divided at the cross. The doctrine of the atonement only makes sense within a Trinitarian framework." },
  { title: "Bearing Our Sins in His Body on the Tree", ref: "1 Peter 2:24", color: "#F59E0B", content: "Peter's language is bodily and specific: Jesus bore our sins in his body — not in an abstract transaction but in the physical suffering of the cross. This is the intersection of theology and history: the doctrines of atonement are anchored in a specific bodily event in first-century Palestine. The Jesus of history and the Christ of faith are the same person. The blood that was shed was real blood; the body that was broken was a real body; the death that was died was a real death." },
];

export default function AtonementTheoriesPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_atonement-theories_tab", "theories");
  const [selected, setSelected] = useState(THEORIES[0].name);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const sel = THEORIES.find(t => t.name === selected) || THEORIES[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>✝️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theology of the Cross — Atonement</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto" }}>
            Why did Jesus have to die? Six major theories of the atonement, the Bible's own images for the cross, answers to common objections, and devotional reflections on the central event of human history.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["theories", "images", "objections", "devotional", "videos"] as Tab[]).map(t => (
            <button type="button" key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "theories" ? "Atonement Theories" : t === "images" ? "Biblical Images" : t === "objections" ? "Objections Answered" : t === "devotional" ? "Devotional Reflections" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {tab === "theories" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {THEORIES.map((t) => (
                <div role="button" tabIndex={0} key={t.name} onClick={() => setSelected(t.name)}
                  style={{ background: CARD, border: `1px solid ${selected === t.name ? t.color + "60" : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ color: t.color, fontWeight: 800, fontSize: 14 }}>{t.name}</div>
                      <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{t.tradition}</div>
                    </div>
                    <div style={{ color: MUTED, fontSize: 10, background: BORDER, padding: "2px 6px", borderRadius: 4 }}>{t.era.split(';')[0]}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ position: "sticky", top: 20, background: CARD, border: `1px solid ${sel.color}40`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: sel.color, fontWeight: 900, fontSize: 16, marginBottom: 2 }}>{sel.name}</div>
              <div style={{ color: MUTED, fontSize: 11, marginBottom: 12 }}>{sel.tradition}</div>
              <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.7, marginBottom: 12 }}>{sel.summary}</p>
              <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>KEY TEXTS</div>
              <div style={{ color: TEXT, fontSize: 11, marginBottom: 12 }}>{sel.key_texts}</div>
              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 6, padding: "6px 10px", marginBottom: 8 }}>
                <div style={{ color: GREEN, fontSize: 10, fontWeight: 800, marginBottom: 2 }}>STRENGTH</div>
                <div style={{ color: TEXT, fontSize: 11 }}>{sel.strength}</div>
              </div>
              <div style={{ background: `${MUTED}08`, border: `1px solid ${MUTED}20`, borderRadius: 6, padding: "6px 10px", marginBottom: 10 }}>
                <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 2 }}>CONCERN</div>
                <div style={{ color: TEXT, fontSize: 11 }}>{sel.weakness}</div>
              </div>
              <div style={{ color: MUTED, fontSize: 10, fontStyle: "italic" }}>{sel.quote}</div>
            </div>
          </div>
        )}

        {tab === "images" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {IMAGES.map((img, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${img.color}25`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div style={{ color: img.color, fontWeight: 900, fontSize: 16 }}>{img.image}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{img.texts}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{img.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "objections" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {OBJECTIONS.map((o, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[o.objection] ? o.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button type="button" onClick={() => setExpanded(e => ({ ...e, [o.objection]: !e[o.objection] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: o.color, fontWeight: 800, fontSize: 14, paddingRight: 16 }}>{o.objection}</div>
                  <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{expanded[o.objection] ? "−" : "+"}</span>
                </button>
                {expanded[o.objection] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{o.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "devotional" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {DEVOTIONAL.map((d, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${d.color}25`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: d.color, fontWeight: 900, fontSize: 15, marginBottom: 2 }}>{d.title}</div>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 12 }}>{d.ref}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{d.content}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "YrGYoRdNOes", title: "The Necessity of the Atonement", channel: "Ligonier / R.C. Sproul", description: "R.C. Sproul explains why the atonement was necessary — grounded in God's justice and holiness — and what it means that Christ died in our place." },
                  { videoId: "qfNSoxQb0is", title: "The Atonement (Mark 15:33-41)", channel: "Ligonier / R.C. Sproul", description: "Sproul's exposition of the crucifixion account in Mark, exploring the theological depth of Christ's death as the definitive moment of redemption." },
                  { videoId: "RaXKCfR6ErU", title: "The Crucifixion", channel: "Tim Keller / Gospel in Life", description: "Tim Keller preaches on the crucifixion, exploring Christ's cry of dereliction and the profound substitutionary logic at the heart of the cross." },
                  { videoId: "ZZKhMR2gfi0", title: "The Theology of the Cross and Walking with a Limp", channel: "Tim Keller", description: "Keller explores the theology of the cross (theologia crucis) — how God works through weakness and suffering rather than worldly power and glory." },
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
