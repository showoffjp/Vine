"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "facts" | "theories" | "historians" | "significance";

const MINIMAL_FACTS = [
  { fact: "Jesus died by Roman crucifixion", color: GREEN, scholarly: "Virtually unanimous among historians — including non-Christian historians", evidence: "Multiple independent sources: Tacitus (Annals 15.44), Josephus (Antiquities 18.3), Lucian of Samosata, Mara bar Serapion, plus all four canonical Gospels. Roman crucifixion was the most efficient execution method in the ancient world. The Roman soldier's spear through the side (John 19:34) confirms death.", why_matters: "The resurrection requires that Jesus actually died. Swoon theories (Jesus merely fainted and recovered) fail against the medical evidence of crucifixion and the Roman confirmation process.", source: "Gary Habermas has catalogued over 2,200 scholarly sources on the resurrection; virtually all affirm the death by crucifixion." },
  { fact: "Jesus was buried in a known tomb", color: PURPLE, scholarly: "Widely accepted; the empty tomb tradition is very early", evidence: "The burial by Joseph of Arimathea — a named member of the Sanhedrin — is historically credible precisely because a fictional account would not name an identifiable, checkable person from the enemy camp. The location of the tomb was known, making the empty tomb verifiable by opponents. Paul's early creed in 1 Corinthians 15:3-5 includes burial as a distinct event.", why_matters: "A known tomb makes the empty tomb claim testable. If the body were still there, opponents had every incentive to produce it — they never did.", source: "N.T. Wright, 'The Resurrection of the Son of God'; Craig Evans, 'Jesus and His World'" },
  { fact: "The tomb was discovered empty within days of the crucifixion", color: "#3B82F6", scholarly: "Accepted by the majority of New Testament historians, including critical scholars", evidence: "Even opponents of Christianity in the first century did not deny the empty tomb — they fabricated an explanation for it (the disciples stole the body, Matthew 28:11-15). You do not fabricate an alternative explanation for something that did not happen. Women are named as the primary witnesses — in first-century Jewish culture, women's testimony was not legally admissible, making this a surprising and thus unlikely fabrication.", why_matters: "If the tomb were not empty, Christianity could have been refuted immediately. The Jewish authorities had both the motive and the ability to do so. Their silence is historically significant.", source: "William Lane Craig, 'Reasonable Faith'; Michael Licona, 'The Resurrection of Jesus'" },
  { fact: "Multiple individuals and groups claimed post-resurrection appearances", color: "#EF4444", scholarly: "Near-universal acceptance among historians that the disciples genuinely believed they had seen the risen Jesus", evidence: "Paul's creed in 1 Corinthians 15:3-8 (written within 5 years of the crucifixion, containing tradition that is earlier still) lists: Peter, the Twelve, 500 people simultaneously (most still living when Paul wrote — an invitation to interview them), James, all the Apostles, and Paul himself. These are independent witnesses listed in a creed, not a literary narrative.", why_matters: "People do not suffer and die for something they know is a lie. The disciples' willingness to die for their resurrection claims is evidence of their sincerity, not necessarily of the resurrection — but combined with the empty tomb and the appearances, it is significant.", source: "Habermas and Licona, 'The Case for the Resurrection of Jesus'" },
  { fact: "The disciples' transformation from despair to bold proclamation", color: "#F59E0B", scholarly: "Historically uncontested", evidence: "After the crucifixion, the disciples fled (Mark 14:50) and hid behind locked doors for fear of the Jews (John 20:19). Within weeks, they were publicly proclaiming the resurrection in Jerusalem — the very city where the crucifixion had occurred and where they were maximally vulnerable. This transformation requires an explanation. Peter, who denied Jesus three times, became the first public preacher of the resurrection. All but one of the Twelve died for this claim.", why_matters: "The Apostles were in the best position to know whether the resurrection claims were true. Their transformation from fear to boldness, their willingness to die, and their consistency under persecution is historically remarkable.", source: "Rodney Stark, 'The Rise of Christianity'; Larry Hurtado, 'Lord Jesus Christ'" },
  { fact: "Paul's conversion experience", color: "#10B981", scholarly: "Accepted by virtually all historians — Paul was a persecutor of Christians who became Christianity's greatest missionary after an experience he describes as seeing the risen Christ", evidence: "Galatians 1:13-17 and 1 Corinthians 15:8-9 are Paul's own first-person accounts. He acknowledges he was a persecutor of the church (Acts 8:3; Galatians 1:13) — his conversion has no credible psychological explanation other than the one he gives. He suffered imprisonment, beatings, shipwreck, and finally execution for this claim.", why_matters: "A committed opponent's dramatic conversion based on a claimed appearance of the risen Christ is one of the most significant individual data points in the historical case for the resurrection.", source: "Paul's letters (most extensively 2 Corinthians 11:23-29)" },
  { fact: "James, the brother of Jesus, converted after the crucifixion", color: "#EC4899", scholarly: "Historically attested; James was not a follower of Jesus during Jesus's ministry (John 7:5)", evidence: "John 7:5 explicitly states that Jesus's brothers did not believe in him during his ministry. James became the leader of the Jerusalem church (Acts 15; Galatians 1:19; 2:9) and was executed by the Sanhedrin in 62 AD (Josephus, Antiquities 20.9.1). Paul records that the risen Christ appeared to James specifically (1 Cor 15:7).", why_matters: "Family members are typically the last to accept a sibling's messianic claims. James's conversion from skeptic to martyr requires an explanation. The appearance to James specifically explains what changed.", source: "Josephus, Antiquities 20.9.1; Eusebius, History of the Church" },
];

const THEORIES = [
  { theory: "The Disciples Stole the Body", color: MUTED, grade: "Refuted", desc: "Matthew 28:11-15 records that this was the explanation circulated by the Jewish authorities — which means it was the first alternative explanation proposed. Problems: (1) The disciples were in hiding and terrified; (2) Stealing the body would require getting past a Roman guard; (3) The disciples all claimed to have seen the risen Jesus — people do not suffer and die for a hoax they perpetrated; (4) Paul was a persecutor of Christians who converted — he had no motive to participate in a conspiracy.", hist: "No serious historian accepts this today" },
  { theory: "The Swoon Theory (Jesus Merely Fainted)", color: MUTED, grade: "Refuted", desc: "Jesus did not die but fell unconscious, was buried alive, later escaped, and appeared to the disciples. Problems: (1) Roman soldiers were expert executioners; (2) John 19:34 records the spear through the side with a distinct flow of blood and water (likely indicating pericardial effusion and death); (3) A battered, wounded man emerging from a tomb wrapped in burial cloths would not inspire 'he has risen gloriously'; (4) Roman soldiers faced execution for allowing a condemned person to escape.", hist: "Proposed by Venturini in the 18th century; rejected by virtually all historians including non-Christian" },
  { theory: "The Hallucination Theory", color: MUTED, grade: "Inadequate", desc: "The disciples experienced grief-induced hallucinations. Problems: (1) Hallucinations are private experiences; Paul records 500 simultaneous witnesses; (2) Hallucinations do not explain the empty tomb; (3) Grief does not typically produce euphoric hallucinations of victory — it produces visions of the deceased in familiar contexts, not glorious risen form; (4) Paul and James were not in grief — they were opponents.", hist: "Accepted by some liberal scholars; insufficient to explain all the data" },
  { theory: "The Wrong Tomb Theory", color: MUTED, grade: "Implausible", desc: "The women went to the wrong tomb in the confusion of early morning. Problems: (1) Joseph of Arimathea knew where his own tomb was; (2) The Jewish authorities would have checked the correct tomb; (3) This doesn't explain the appearances or Paul's conversion.", hist: "Rarely defended seriously today" },
  { theory: "The Legend Theory", color: MUTED, grade: "Refuted by Timeline", desc: "The resurrection stories developed over decades as the community mythologized Jesus. Problems: (1) Paul's creed in 1 Corinthians 15:3-8 dates the tradition to within 2-5 years of the crucifixion — far too early for legend development; (2) Eyewitnesses were still alive and contradicting the tradition was possible; (3) N.T. Wright's exhaustive study of resurrection language in first-century Judaism shows that the specific claim being made is historically unprecedented and not explicable from Jewish mythology.", hist: "Rests on outdated form-criticism; timeline of documents contradicts it" },
  { theory: "Bodily Resurrection (The Christian Claim)", color: GREEN, grade: "Best Explanation", desc: "Jesus physically rose from the dead on the third day. This hypothesis: (1) Explains the empty tomb; (2) Explains the appearances to individuals and groups; (3) Explains the transformation of the disciples; (4) Explains Paul's conversion; (5) Explains James's conversion; (6) Explains why Christianity — which proclaimed a crucified messiah (scandalous to Jews) and a bodily resurrection (implausible to Greeks) — spread so rapidly across the ancient world.", hist: "The explanation that best accounts for the full range of historical data" },
];

const HISTORIANS = [
  { name: "N.T. Wright", tradition: "Anglican Bishop / NT Scholar", color: PURPLE, position: "Full bodily resurrection", url: "ntwrightpage.com", desc: "The most comprehensive historical argument for the resurrection in modern scholarship — 'The Resurrection of the Son of God' (800 pages, 2003). Wright examines resurrection language in all Jewish and pagan literature of the period and argues that the Christian claim is historically unprecedented and not explicable from its religious environment. He argues that the empty tomb + appearances together require the bodily resurrection as the only adequate historical explanation.", key: "The combination of the empty tomb and the post-resurrection appearances is unexplainable on any hypothesis except the one the Apostles proclaimed." },
  { name: "Gary Habermas", tradition: "Evangelical Philosopher", color: GREEN, url: "garyhabermas.com", desc: "Has catalogued over 2,200 scholarly sources on the resurrection since the 1970s and developed the 'Minimal Facts' method — using only facts accepted by the overwhelming majority of scholars (including non-Christian scholars) to build the historical case. His debate with Antony Flew (1985) — Habermas argued for the resurrection, Flew against — was judged by independent observers to have been won by Habermas.", key: "The Minimal Facts approach bypasses debates about biblical inerrancy and builds the case from historically secure data alone." },
  { name: "Michael Licona", tradition: "Evangelical NT Scholar", color: "#3B82F6", url: "risenjesus.com", desc: "Licona's 'The Resurrection of Jesus: A New Historiographical Approach' (2010) applies the methods of historical analysis to the resurrection question in a way that engages secular historical methodology seriously. He argues that historians cannot rule out the resurrection on methodological grounds — naturalistic bias is not historical neutrality. His free resource site risenjesus.com provides extensive responses to skeptical objections.", key: "Historiography cannot rule out the supernatural a priori; the historical evidence must be weighed on its merits." },
  { name: "William Lane Craig", tradition: "Evangelical Philosopher", color: "#EF4444", url: "reasonablefaith.org", desc: "Philosopher and theologian who has debated the resurrection against leading atheist philosophers including Bart Ehrman, A.C. Grayling, and Christopher Hitchens. Craig's version of the minimal facts argument and his philosophical case for the resurrection are accessible through 'Reasonable Faith' (book) and the Reasonable Faith YouTube channel. Has debated over 80 scholars on the existence of God and the resurrection.", key: "A good historical explanation must be capable of accounting for all the data — no competing hypothesis accounts for all the data as well as the resurrection." },
  { name: "Bart Ehrman", tradition: "Agnostic NT Scholar (non-Christian)", color: MUTED, url: "bartehrman.com", desc: "Included because Ehrman is one of the most prominent skeptical NT scholars, and his concessions are significant. Ehrman agrees that: (1) Jesus was crucified under Pilate; (2) the disciples genuinely believed they saw the risen Jesus; (3) Paul was a persecutor who converted. He disagrees about what these facts mean. His debates with Craig and Habermas are available online and are essential for understanding the best skeptical response to the resurrection evidence.", key: "Ehrman concedes the minimal facts while denying their supernatural explanation — the debate then is about historiography and methodology, not the underlying historical data." },
  { name: "Larry Hurtado", tradition: "NT Scholar (University of Edinburgh)", color: "#10B981", url: "larryhurtado.wordpress.com", desc: "One of the world's leading scholars of early Christian devotion to Jesus. His 'Lord Jesus Christ' (2003) documents how early (within years) and how high (worship of Jesus alongside God the Father) early Christian devotion was. This is historically significant because it rules out the gradual legendary development of the resurrection — the devotion was there from the beginning.", key: "The worship of Jesus as divine alongside God the Father — within the context of Jewish monotheism — is the most remarkable development in the history of religion and requires an extraordinary explanation." },
];

const SIGNIFICANCE = [
  { point: "The resurrection is the hinge of history", color: GREEN, content: "Paul's argument in 1 Corinthians 15 is the most important theological reflection on the resurrection in the NT: 'If Christ has not been raised, your faith is futile and you are still in your sins' (v.17). The resurrection is not decorative theology — it is the load-bearing wall of the Christian faith. Remove it and everything collapses. Affirm it and everything else (forgiveness, the Spirit, eternal life, new creation) follows necessarily." },
  { point: "The resurrection vindicates Jesus's claims", color: PURPLE, content: "Jesus made extraordinary claims about his identity ('Before Abraham was, I am' — John 8:58; 'The Father and I are one' — John 10:30). These claims were the reason for his execution. The resurrection is God the Father's verdict on those claims — the decisive 'Yes' to the question whether Jesus was who he said he was. Romans 1:4 states that Jesus 'was appointed Son of God in power according to the Spirit of holiness by his resurrection from the dead.'" },
  { point: "The resurrection grounds Christian ethics", color: "#3B82F6", content: "N.T. Wright argues that the resurrection grounds Christian ethics in a way no other worldview can: 'You are God's temple' (1 Cor 3:16); 'Your bodies are members of Christ himself' (1 Cor 6:15); 'The one who raised Christ from the dead will also give life to your mortal bodies' (Rom 8:11). Because our bodies will be resurrected, what we do with our bodies matters eternally. Because creation will be renewed, how we treat creation matters. The resurrection is not an escape from the material world but its affirmation." },
  { point: "The resurrection is God's first-fruits of new creation", color: "#EF4444", content: "Paul uses the agricultural image of first-fruits (1 Cor 15:20-23): the resurrection of Jesus is not an isolated miracle but the first installment of the general resurrection that will renew all things. His resurrection body — physical, real, recognizable, yet transformed and imperishable — is a preview of what the new creation will look like. This is why Christian hope is not disembodied heaven but bodily resurrection in a renewed earth (Rev 21-22)." },
  { point: "The resurrection is the proof of the Apostles' authority", color: "#F59E0B", content: "The resurrection appearances were selective — not public demonstrations to all Jerusalem but specific appearances to witnesses who would then testify. This is why the Apostles' authority to speak for Christ is inseparable from their resurrection witness. Paul's claim to apostleship is grounded entirely in his claim that he saw the risen Christ (1 Cor 15:8; 9:1). The resurrection appearances and the Apostolic testimony are structurally linked." },
];

export default function ResurrectionEvidencePage() {
  const [tab, setTab] = useState<Tab>("facts");
  const [selected, setSelected] = useState(MINIMAL_FACTS[0].fact);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const sel = MINIMAL_FACTS.find(f => f.fact === selected) || MINIMAL_FACTS[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>✝️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Historical Evidence for the Resurrection</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto" }}>
            The minimal facts approach — historical data accepted by the overwhelming majority of scholars, including skeptics — and why the bodily resurrection of Jesus is the best explanation.
          </p>
        </div>

        <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "12px 18px", marginBottom: 28 }}>
          <span style={{ color: GREEN, fontWeight: 800, fontSize: 13 }}>1 Corinthians 15:17 </span>
          <span style={{ color: TEXT, fontSize: 13 }}>"And if Christ has not been raised, your faith is futile and you are still in your sins."</span>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["facts", "theories", "historians", "significance"] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "facts" ? "Minimal Facts" : t === "theories" ? "Alternative Theories" : t === "historians" ? "Key Scholars" : "Why It Matters"}
            </button>
          ))}
        </div>

        {tab === "facts" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {MINIMAL_FACTS.map((f) => (
                <div key={f.fact} onClick={() => setSelected(f.fact)}
                  style={{ background: CARD, border: `1px solid ${selected === f.fact ? f.color + "60" : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer" }}>
                  <div style={{ color: f.color, fontWeight: 800, fontSize: 14 }}>{f.fact}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 4 }}>{f.scholarly}</div>
                </div>
              ))}
            </div>
            <div style={{ position: "sticky", top: 20, background: CARD, border: `1px solid ${sel.color}40`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: sel.color, fontWeight: 900, fontSize: 15, marginBottom: 12 }}>{sel.fact}</div>
              <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>HISTORICAL EVIDENCE</div>
              <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.7, marginBottom: 12 }}>{sel.evidence}</p>
              <div style={{ background: `${sel.color}10`, border: `1px solid ${sel.color}20`, borderRadius: 8, padding: "10px 12px", marginBottom: 10 }}>
                <div style={{ color: sel.color, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>WHY THIS MATTERS</div>
                <div style={{ color: TEXT, fontSize: 12, lineHeight: 1.6 }}>{sel.why_matters}</div>
              </div>
              <div style={{ color: MUTED, fontSize: 11 }}>Sources: {sel.source}</div>
            </div>
          </div>
        )}

        {tab === "theories" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {THEORIES.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${t.color === GREEN ? GREEN + "40" : BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div style={{ color: t.color === GREEN ? GREEN : TEXT, fontWeight: 800, fontSize: 15 }}>{t.theory}</div>
                  <div style={{ background: t.color === GREEN ? `${GREEN}25` : `${MUTED}25`, color: t.color === GREEN ? GREEN : MUTED, padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>{t.grade}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, marginBottom: 10 }}>{t.desc}</p>
                <div style={{ color: MUTED, fontSize: 11, fontStyle: "italic" }}>Scholarly status: {t.hist}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "historians" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 14 }}>
            {HISTORIANS.map((h, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${h.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: h.color, fontWeight: 900, fontSize: 15, marginBottom: 2 }}>{h.name}</div>
                <div style={{ color: MUTED, fontSize: 11, marginBottom: 10 }}>{h.tradition} · {h.url}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, marginBottom: 12 }}>{h.desc}</p>
                <div style={{ background: `${h.color}08`, border: `1px solid ${h.color}15`, borderRadius: 6, padding: "6px 10px" }}>
                  <div style={{ color: h.color, fontSize: 10, fontWeight: 800, marginBottom: 2 }}>KEY POINT</div>
                  <div style={{ color: TEXT, fontSize: 11 }}>{h.key}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "significance" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {SIGNIFICANCE.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[s.point] ? s.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setExpanded(e => ({ ...e, [s.point]: !e[s.point] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: s.color, fontWeight: 800, fontSize: 15 }}>{s.point}</div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[s.point] ? "−" : "+"}</span>
                </button>
                {expanded[s.point] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{s.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
