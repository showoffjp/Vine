"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Bodily Resurrection", verse: "1 Corinthians 15:3-8", body: "Paul's creed in 1 Corinthians 15:3-8 is among the earliest Christian texts, likely received within 5 years of the crucifixion: 'Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures, and that he appeared...' The resurrection is not a symbol or metaphor — Paul explicitly argues for a bodily resurrection and treats the physical empty tomb as essential. If Christ was not raised, he writes, 'your faith is futile' (15:17)." },
  { title: "The Firstfruits and Our Future", verse: "1 Corinthians 15:20-23", body: "Christ is called the 'firstfruits' of those who have died (1 Corinthians 15:20) — which means his resurrection is not a unique exception but a prototype. The resurrection of Jesus is the first installment of the resurrection of all who belong to him. Christian hope is not escape from the body into a spiritual existence; it is the redemption and renewal of the body. The resurrection is the future of the whole cosmos." },
  { title: "Resurrection and Justification", verse: "Romans 4:25", body: "Paul insists that Jesus 'was delivered over to death for our sins and was raised to life for our justification' (Romans 4:25). The resurrection is not merely a proof of something else — it is itself salvific. The resurrection is God's verdict on the cross: the sacrifice was accepted, the debt was paid, and the one who bore our sin has been vindicated. To believe in the resurrection is to believe that death has been defeated and that justification is sure." },
  { title: "The Transformation of the Body", verse: "Philippians 3:20-21", body: "Paul writes that Jesus 'will transform our lowly bodies so that they will be like his glorious body' (Philippians 3:21). The resurrection body is not identical to the pre-death body — it is transformed, glorified, incorruptible. Jesus's resurrection body was physical (he ate, was touched, walked) but also transcended physical limits (appearing in locked rooms). The resurrection body is the same person, fully embodied, but freed from mortality and decay." },
  { title: "Resurrection as New Creation", verse: "2 Corinthians 5:17", body: "The resurrection of Jesus inaugurates the new creation: 'If anyone is in Christ, the new creation has come' (2 Corinthians 5:17). The resurrection is not just a reversal of death — it is a transformation beyond what existed before. The risen Jesus is not returning to a pre-fallen state but entering a glorified, indestructible existence. Those in Christ are already participating in this new creation by the Spirit, awaiting its full arrival at his return." },
];

const EVIDENCE = [
  { title: "The Empty Tomb", color: "#EF4444", body: "The empty tomb is multiply attested by early, independent sources, and crucially — the body was never produced. If Jewish or Roman authorities could have produced the body, the Christian movement would have died in Jerusalem within weeks. The location of the tomb was known; the resurrection was proclaimed in the same city where the crucifixion occurred. No credible ancient source disputes the tomb was empty — only the explanation." },
  { title: "The Post-Resurrection Appearances", color: "#F59E0B", body: "Paul's creed lists appearances to Peter, the Twelve, 500 people at once (many still alive when Paul wrote), James, and Paul himself. The diversity and number of appearance accounts — including skeptics like James and Paul — creates a historical problem for purely psychological explanations. Hallucinations do not appear to 500 people simultaneously. James and Paul had strong reasons to resist the resurrection claim, which makes their conversion and testimony remarkable." },
  { title: "The Conversion of Paul", color: "#8B5CF6", body: "Saul of Tarsus was an educated Pharisee who actively persecuted the early church, considering Jesus a failed messiah (crucifixion was a sign of divine curse under Mosaic law). His dramatic conversion and subsequent willingness to suffer extensively for the resurrection claim is one of the most powerful pieces of evidence. He would have had no psychological motivation to fabricate a resurrection — everything in his background argued against it." },
  { title: "The Conversion of James", color: "#3B82F6", body: "James, the brother of Jesus, was not a follower during Jesus's ministry (John 7:5) and may have considered him troubled (Mark 3:21). He became a central leader in the Jerusalem church and was martyred for his faith. The most natural explanation is the one Paul gives: the risen Jesus appeared to James specifically (1 Corinthians 15:7). People do not die for beliefs they know to be false." },
  { title: "The Sunday Worship Shift", color: GREEN, body: "Jews observed the Sabbath on Saturday — a practice with deep theological roots. Within the first generation, Jewish Christians shifted their primary day of worship to Sunday, the day of resurrection. This is a massive cultural and theological change that demands explanation. The most natural explanation is that something decisive happened on that Sunday that reoriented the community's entire sacred calendar." },
];

const OBJECTIONS = [
  { q: "The disciples stole the body.", a: "This is the oldest counter-claim (Matthew 28:13-15), and it refutes itself on examination. The disciples had every reason not to steal the body — they were hiding in fear after the crucifixion (John 20:19). More importantly, they subsequently died for the claim that Jesus rose. People do not die for something they know is a hoax." },
  { q: "The disciples had hallucinations or visions.", a: "Hallucinations are private experiences, not shared group ones. Paul records an appearance to 500 people simultaneously. Additionally, hallucinations of Jesus would not have led Jews to conclude he was resurrected — the Jewish concept of resurrection was bodily and future, not a spiritual vision of a dead teacher. The hallucination theory cannot explain the empty tomb." },
  { q: "The resurrection accounts contradict each other.", a: "The accounts differ in details that harmonize with independent, unsynchronized witnesses — exactly what you expect from multiple real eyewitness accounts. The core is consistent across all four Gospels and Paul: the tomb was empty on Sunday, and Jesus appeared to people who knew him. Minor differences in peripheral details do not undermine the central shared claims." },
  { q: "Jesus didn't actually die on the cross (swoon theory).", a: "This theory requires us to believe that Roman executioners, who were experts in crucifixion and whose lives depended on prisoners not escaping, failed to kill Jesus — and that a severely flogged man who had been stabbed through the side, wrapped in burial linen, and sealed in a tomb then escaped, moved a stone, overpowered guards, and convinced his disciples he had conquered death. Scholars of all backgrounds reject the swoon theory as historically implausible." },
  { q: "The resurrection is mythology borrowed from pagan religions.", a: "This argument was popular in the early 20th century and has since been largely abandoned by scholars. The specific dying-and-rising god parallels are either distorted or post-Christian. More importantly, Jewish monotheism had deep reasons to reject such pagan parallels, and the resurrection was proclaimed as a specific historical event — not a myth or annual cycle — by eyewitnesses within living memory of the events." },
];

const SCHOLARS = [
  {
    id: "wright",
    name: "N.T. Wright",
    work: "The Resurrection of the Son of God (2003)",
    color: GREEN,
    affiliation: "Bishop of Durham; Professor at St. Andrews and Oxford",
    quote: "The resurrection of Jesus does not mean simply that a new religious experience was available. It means that the new creation has been launched.",
    contribution: "Wright's 800-page historical study is widely considered the most comprehensive modern defense of the bodily resurrection. His method is rigorous historical scholarship: he examines Jewish concepts of resurrection, Greek beliefs about death and afterlife, and the NT texts as historical documents. His key argument: the Jewish concept of resurrection was bodily and future; no first-century Jew would have used the word 'resurrection' to describe a vision of a dead person or a spiritual survival. For the early Christians to use resurrection language about Jesus, something unprecedented must have happened. He also argues that the empty tomb and appearances, taken together, explain the emergence of the early church in a way that no alternative theory can.",
  },
  {
    id: "habermas",
    name: "Gary Habermas",
    work: "The Risen Jesus and Future Hope (2003)",
    color: "#F59E0B",
    affiliation: "Professor of Apologetics at Liberty University; specialized in resurrection research",
    quote: "The resurrection is the best explanation of the historical facts. I don't say that as a conclusion of faith — I say it as a conclusion of historical method.",
    contribution: "Habermas developed what he calls the 'minimal facts' approach to resurrection apologetics: focusing only on the historical data that are accepted by the vast majority of critical scholars — including those who are not Christians. His minimal facts include: Jesus died by crucifixion, the disciples believed they saw Jesus risen, Paul's conversion, James's conversion, and the empty tomb. He argues that the resurrection is the only hypothesis that explains all of these facts together. He has catalogued and analyzed over 3,000 scholarly publications on the resurrection, making him the most thorough academic surveyor of the literature.",
  },
  {
    id: "craig",
    name: "William Lane Craig",
    work: "Reasonable Faith (1994); The Son Rises (1981)",
    color: PURPLE,
    affiliation: "Research Professor of Philosophy at Talbot School of Theology",
    quote: "The inference to the resurrection is not a leap of faith over a chasm of ignorance. It is a conclusion supported by the available historical evidence.",
    contribution: "Craig has debated the resurrection against leading skeptics in major academic venues for decades. His contribution is philosophical rigor: he argues that the resurrection is not just historically plausible but the best inference to the best explanation given the evidence. He distinguishes between historical probability (what method can establish) and metaphysical probability (whether miracles are possible) — and argues that ruling out the resurrection on metaphysical grounds is not a historical argument but a philosophical assumption. His debates have introduced resurrection evidence to millions of students and academics.",
  },
  {
    id: "licona",
    name: "Michael Licona",
    work: "The Resurrection of Jesus: A New Historiographical Approach (2010)",
    color: "#3B82F6",
    affiliation: "Professor of New Testament at Houston Christian University",
    quote: "The resurrection of Jesus is a strong historical conclusion. The data that support it are of the sort that historians regard as the most reliable.",
    contribution: "Licona's contribution is methodological: he applies standard historical criteria — multiple independent attestation, embarrassment, dissimilarity, coherence — to the resurrection data. His book establishes the minimal facts approach on rigorous academic ground and then applies a five-hypothesis comparison, arguing that the resurrection hypothesis outperforms all rivals. A controversy over his treatment of Matthew 27:52-53 (the raised saints at the crucifixion) led to academic debate about how genre affects historical reading — which has enriched resurrection scholarship by forcing more careful engagement with ancient historiographical conventions.",
  },
  {
    id: "lewis",
    name: "C.S. Lewis",
    work: "Miracles (1947); Mere Christianity (1952)",
    color: "#EC4899",
    affiliation: "Oxford and Cambridge scholar; former atheist who converted to Christianity in his early 30s",
    quote: "The central miracle asserted by Christians is the Incarnation. They say that God became man. Every other miracle prepares for this, or exhibits this, or results from this.",
    contribution: "Lewis's contribution to resurrection apologetics is philosophical and imaginative rather than strictly historical. In 'Miracles,' he addresses the prior question: can miracles happen? He argues that naturalism is self-refuting (if all thoughts are products of non-rational causes, including the thought that naturalism is true, then no thought — including that one — can be trusted). If miracles are possible, then the resurrection is to be evaluated on historical evidence, not dismissed a priori. In 'Mere Christianity,' he presents the trilemma argument (Lord, liar, or lunatic) that forces a decision about the resurrection claims implicit in Jesus's own words.",
  },
];

type Tab = "theology" | "evidence" | "scholars" | "objections" | "videos";

export default function ResurrectionPage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [selectedEvidence, setSelectedEvidence] = useState("The Empty Tomb");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedScholar, setSelectedScholar] = useState("wright");

  const ev = EVIDENCE.find(e => e.title === selectedEvidence)!;
  const scholar = SCHOLARS.find(s => s.id === selectedScholar)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✝️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Resurrection</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            'If Christ has not been raised, your faith is futile' (1 Corinthians 15:17). The resurrection is not one Christian belief among many — it is the hinge of history on which everything else depends.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "evidence" as const, label: "Evidence", icon: "🔍" },
            { id: "scholars" as const, label: "Scholars", icon: "🎓" },
            { id: "objections" as const, label: "Objections", icon: "❓" },
            { id: "videos" as const, label: "Videos", icon: "▶️" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "evidence" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The resurrection is a historical claim, not merely a theological one. The earliest Christians staked everything on a specific event in space and time. These are the primary historical facts that demand explanation.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {EVIDENCE.map(e => (
                <button key={e.title} onClick={() => setSelectedEvidence(e.title)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedEvidence === e.title ? e.color : BORDER}`, background: selectedEvidence === e.title ? `${e.color}15` : "transparent", color: selectedEvidence === e.title ? e.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {e.title}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${ev.color}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: ev.color, fontWeight: 900, fontSize: 20, marginBottom: 16 }}>{ev.title}</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{ev.body}</p>
            </div>
          </div>
        )}

        {tab === "scholars" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {SCHOLARS.map(s => (
                <button key={s.id} onClick={() => setSelectedScholar(s.id)}
                  style={{ width: "100%", textAlign: "left", background: selectedScholar === s.id ? `${s.color}18` : CARD, border: `1px solid ${selectedScholar === s.id ? s.color : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer" }}>
                  <div style={{ color: selectedScholar === s.id ? s.color : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 3 }}>{s.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{s.work}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${scholar.color}40`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: scholar.color, fontWeight: 900, fontSize: 20, marginBottom: 4 }}>{scholar.name}</h2>
              <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{scholar.affiliation}</div>
              <blockquote style={{ borderLeft: `3px solid ${scholar.color}`, paddingLeft: 16, marginBottom: 14 }}>
                <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>"{scholar.quote}"</p>
              </blockquote>
              <div style={{ background: BG, borderRadius: 8, padding: "8px 14px", marginBottom: 10 }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>KEY WORK</div>
                <p style={{ color: TEXT, fontSize: 13, fontWeight: 600, margin: 0 }}>{scholar.work}</p>
              </div>
              <div style={{ background: `${scholar.color}08`, border: `1px solid ${scholar.color}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: scholar.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{scholar.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "objections" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These are the most common objections raised against the resurrection — and the responses that have persuaded many skeptics. Honest engagement with objections strengthens rather than weakens faith.
              </p>
            </div>
            {OBJECTIONS.map((o, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === o.q ? null : o.q)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === o.q ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{o.q}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === o.q ? "−" : "+"}</span>
                </button>
                {expanded === o.q && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{o.a}</p>
                  </div>
                )}
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
                  { videoId: "Hr3PkGXYRvI", title: "The Resurrection of Christ", channel: "Ligonier Ministries", description: "R.C. Sproul defends the bodily resurrection of Jesus Christ, explaining why it is the most historically attested and theologically central event in history." },
                  { videoId: "W4jemC-qUc4", title: "He Is Risen! — The Resurrection and Worship", channel: "Ligonier Ministries", description: "R.C. Sproul connects the resurrection to Christian worship — why Sunday is the first day and every week celebrates the risen Christ." },
                  { videoId: "rCPzHB57bOQ", title: "Resurrection: What Did Jesus Do?", channel: "Ligonier Ministries", description: "R.C. Sproul considers Jesus' triumph over the grave and what the resurrection accomplishes for sin, death, and justification." },
                  { videoId: "dXxmSDhvbHY", title: "A Living Hope Through the Resurrection", channel: "Desiring God", description: "John Piper preaches on the resurrection as the ground of Christian hope — the believer's future secured by Christ's indestructible life." },
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
