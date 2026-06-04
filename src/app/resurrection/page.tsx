"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#c9a227";

type Tab = "evidence" | "meaning" | "appearances" | "theories" | "changed" | "videos";

const MINIMAL_FACTS = [
  { num: 1, title: "Jesus Died by Crucifixion", color: "#EF4444", body: "The death of Jesus by Roman crucifixion is one of the best-attested facts in ancient history. It is confirmed by: the four Gospels; Paul (1 Corinthians 15:3-5, Galatians 3:1); the Roman historian Tacitus (Annals 15.44); the Jewish historian Josephus (Antiquities 18.3); Pliny the Younger; and Lucian of Samosata. Roman crucifixion was specifically designed to produce death — legionaries were professionals whose own lives depended on ensuring the condemned died. No historian seriously disputes that Jesus died on a cross circa 30-33 AD.", sources: ["Tacitus, Annals 15.44", "Josephus, Antiquities 18.3", "1 Corinthians 15:3", "All four Gospels"] },
  { num: 2, title: "The Disciples' Belief in Appearances", color: PURPLE, body: "Paul writes in 1 Corinthians 15:3-7 (written c. 55 AD, citing a creed scholars date to within 2-5 years of the crucifixion): 'he appeared to Cephas, then to the twelve. Then he appeared to more than five hundred brothers at one time, most of whom are still alive, though some have fallen asleep. Then he appeared to James, then to all the apostles.' This is not legend — it is an early, verifiable list of named eyewitnesses offered while most were still alive and could be questioned.", sources: ["1 Corinthians 15:3-8", "Luke 24", "John 20-21", "Acts 1-2"] },
  { num: 3, title: "Paul's Conversion", color: GREEN, body: "Paul was a persecutor of Christians — he supervised the execution of Stephen (Acts 8:1) and 'was breathing out murderous threats against the Lord's disciples' (Acts 9:1). His transformation into the church's most prolific missionary requires explanation. Paul himself attributes it solely to an encounter with the risen Jesus (1 Corinthians 15:8; Galatians 1:11-16). Even critical scholars grant that Paul genuinely believed he had seen the risen Christ. Something dramatic happened to him circa 33-35 AD.", sources: ["Acts 9:1-22", "Galatians 1:11-16", "1 Corinthians 15:8-9", "Philippians 3:4-9"] },
  { num: 4, title: "James's Conversion", color: GOLD, body: "James, the brother of Jesus, did not believe in Jesus during his ministry (John 7:5 — 'even his brothers did not believe in him'). After the resurrection, James became a leader of the Jerusalem church and was ultimately executed for his faith (Josephus, Antiquities 20.9). He is listed as one of the resurrection appearances (1 Corinthians 15:7). The most natural explanation: James became a believer because he saw his brother risen from the dead. Family skeptics do not typically die for what they know to be false.", sources: ["John 7:5", "1 Corinthians 15:7", "Acts 15:13-21", "Josephus, Antiquities 20.9"] },
  { num: 5, title: "The Empty Tomb", color: "#3B82F6", body: "The empty tomb is acknowledged even in hostile sources: the Jewish leaders' response in Matthew 28:11-15 — the claim that the disciples stole the body — presupposes the tomb was empty. No early opponent of Christianity claimed the tomb was occupied. The tomb was known and accessible; if the body remained, Christianity could have been refuted at source. Women were the first witnesses — a detail unlikely to be invented in a 1st-century Jewish/Roman context where women's testimony was not legally accepted.", sources: ["Matthew 28:11-15", "Mark 16:1-8", "John 20:1-10", "Acts 2:29-32"] },
];

const THEOLOGICAL_MEANINGS = [
  { title: "Vindication of Jesus", ref: "Romans 1:4", icon: "⚡", body: "The resurrection is God's declaration that Jesus is who he claimed to be. Paul writes that Jesus 'was declared to be the Son of God in power according to the Spirit of holiness by his resurrection from the dead.' The resurrection is the Father's stamp of approval on everything Jesus said and did — the verdict reversing the false verdict of the crucifixion. It is divine validation." },
  { title: "Justification Secured", ref: "Romans 4:25", icon: "⚖️", body: "Paul writes that Jesus 'was delivered over to death for our sins and was raised to life for our justification.' The resurrection is not separate from the atonement — it is the declaration that the atonement was accepted. If Christ remained dead, it would signal that the payment for sin was insufficient. The resurrection proves the debt was paid in full. It is the receipt for the transaction of the cross." },
  { title: "Death Conquered", ref: "1 Corinthians 15:54-57", icon: "💀", body: "'Death is swallowed up in victory. O death, where is your victory? O death, where is your sting?' (1 Corinthians 15:54-55). The resurrection is the conquest of the last enemy. Death had humanity in its grip from Genesis 3 — the resurrection of Christ is the decisive reversal of that defeat. Death still physically occurs for believers, but its sting (condemnation and separation from God) has been removed." },
  { title: "Firstfruits of New Creation", ref: "1 Corinthians 15:20-23", icon: "🌾", body: "Christ is the 'firstfruits' of the resurrection harvest. His resurrection is not an isolated miracle but the beginning of the eschatological new creation. N.T. Wright: 'Easter is not about Jesus going to heaven; it is about the beginning of God's new world.' The resurrection of Christ is the prototype of the resurrection of all believers and the pledge of the renewal of all creation." },
  { title: "The Living Intercessor", ref: "Hebrews 7:25; Romans 8:34", icon: "🙏", body: "Because Jesus was raised and ascended, he lives to intercede for his people. 'He always lives to make intercession' for those who come to God through him (Hebrews 7:25). The resurrection means we have not merely a doctrine but a living person — a high priest who is alive, who knows our weakness, and who stands in God's presence on our behalf continually." },
  { title: "Resurrection Life Now", ref: "Colossians 3:1-4; Galatians 2:20", icon: "🌅", body: "Resurrection is not only a future hope — it is a present reality. 'If then you have been raised with Christ, seek the things that are above' (Colossians 3:1). Paul writes: 'I have been crucified with Christ. It is no longer I who live, but Christ who lives in me' (Galatians 2:20). Union with the risen Christ means that resurrection power is available now — for holy living, overcoming sin, and serving God's purposes." },
];

const APPEARANCES = [
  { to: "Mary Magdalene", ref: "John 20:14-18", detail: "The first person to encounter the risen Jesus. She initially mistook him for the gardener — suggesting that the resurrection body was not immediately recognizable but was genuinely physical. Jesus called her name; she recognized him. Her commission: 'Go and tell my brothers.' Women as first witnesses is a mark of historical authenticity — it would not have been invented." },
  { to: "The Two Disciples (Emmaus Road)", ref: "Luke 24:13-35", detail: "Jesus walked with two disciples for seven miles without them recognizing him. He opened the Scriptures — showing the resurrection was the fulfillment of all OT prophecy. At the breaking of bread their eyes were opened. The narrative emphasizes the physical reality of the journey (seven miles, a shared meal) alongside the mysterious transformation of the resurrection body." },
  { to: "The Eleven Disciples", ref: "Luke 24:36-43; John 20:19-23", detail: "Jesus appeared in a room with locked doors, showed his hands and side, said 'Peace be with you,' and ate broiled fish in their presence. This appearance definitively rules out a 'spiritual vision' interpretation — the physicality is emphatic. Jesus specifically invited Thomas to touch his wounds (John 20:27)." },
  { to: "Thomas (Eight Days Later)", ref: "John 20:24-29", detail: "Thomas refused to believe on the testimony of others: 'Unless I see in his hands the mark of the nails, and place my finger into the mark of the nails, and place my hand into his side, I will never believe.' Jesus appeared, invited examination of his wounds, and Thomas confessed: 'My Lord and my God!' — the highest Christological confession in John's Gospel." },
  { to: "500+ Brothers", ref: "1 Corinthians 15:6", detail: "Paul's earliest written account (c. 55 AD) records an appearance 'to more than five hundred brothers at one time, most of whom are still alive.' This is an invitation to investigate — Paul is pointing to living witnesses who can be questioned. A mass hallucination of 500 people is without precedent in psychology or history." },
  { to: "Paul on the Damascus Road", ref: "Acts 9:1-9; 1 Cor 15:8", detail: "The appearance to Paul — a hostile witness whose transformation is inexplicable by any other account. Paul uses the same Greek verb (ophthe — 'he appeared') for his own experience as for the other resurrection appearances, placing his encounter in the same category. This is not a vision; it is the risen Christ appearing to his final 'apostle, born out of due time.'" },
];

const ALT_THEORIES = [
  { name: "The Hallucination Theory", color: "#EF4444", proposal: "The disciples experienced grief-induced or wish-fulfillment hallucinations of Jesus after his death.", refutation: "Hallucinations are subjective, individual experiences — they cannot be shared simultaneously by 500 people. Hallucinations also do not explain the empty tomb. First-century Jews expected the Messiah to bring political liberation, not be crucified — 'wish fulfillment' runs in exactly the wrong direction. And hallucinations don't convert hardened opponents like Paul and James." },
  { name: "The Swoon Theory", color: "#F59E0B", proposal: "Jesus survived the crucifixion in a swoon (unconscious state) and later revived in the tomb.", refutation: "Roman executioners were professionals who had personal incentive to ensure death. The spear piercing Jesus' side (John 19:34) suggests a post-mortem wound. A man who barely survived torture and crucifixion, unwrapped himself from burial cloths, moved a large stone, and overpowered guards would not inspire belief in the resurrection — he would inspire belief in emergency medicine." },
  { name: "The Stolen Body Theory", color: PURPLE, proposal: "The disciples stole the body and then fabricated the resurrection story.", refutation: "This was the earliest counter-claim (Matthew 28:11-15), which shows the tomb was acknowledged as empty. But the disciples then willingly suffered imprisonment, torture, and martyrdom for what they knew to be a fabrication. People die for beliefs they think are true; they don't die for lies they invented. No conspiracy of this scale maintains coherence under pressure." },
  { name: "The Wrong Tomb Theory", color: GREEN, proposal: "The women went to the wrong tomb in the dark and erroneously concluded it was empty.", refutation: "The Jewish and Roman authorities knew exactly where Jesus was buried. If the disciples were proclaiming resurrection based on the wrong tomb, any opponent could have marched to the correct tomb, produced the body, and ended Christianity on day one. This never happened." },
  { name: "The Legend Theory", color: "#3B82F6", proposal: "The resurrection was a legend that developed over decades as the movement grew.", refutation: "The 1 Corinthians 15:3-7 creed is dated by scholars to within 2-5 years of the crucifixion — far too early for legendary development. The appearances are reported to named, living individuals who could be interrogated. The NT documents were written within the lifetime of eyewitnesses — not centuries later." },
];

const CHANGED_LIVES = [
  { name: "The Apostles Themselves", period: "1st century", story: "Eleven men who scattered in fear at the arrest of Jesus became bold proclaimers of his resurrection, willing to be imprisoned, beaten, and executed for their testimony. Peter, who denied Jesus three times, preached at Pentecost to thousands. Every apostle except John died a martyr's death. Their transformation from fearful fugitives to courageous martyrs requires an explanation — and the resurrection provides it." },
  { name: "Constantine to Conversion", period: "4th century", story: "The Roman Empire, which executed Christians for three centuries, became officially Christian under Constantine (313 AD). Whether one evaluates this Christianization positively or negatively, the spread of resurrection faith throughout an empire that tried to destroy it is remarkable. The resurrection message could not be stopped by political and military power." },
  { name: "The Early Church Martyrs", period: "1st–3rd centuries", story: "Christians in the Roman Empire were thrown to lions, set on fire, executed in amphitheaters — and their number grew rather than declined. Tertullian (c. 200 AD): 'The blood of the martyrs is the seed of the church.' People do not die en masse for vague spiritual hopes; they die for the specific conviction that Jesus rose bodily and that his resurrection guarantees their own." },
  { name: "C.S. Lewis", period: "20th century", story: "Oxford and Cambridge professor C.S. Lewis was a committed atheist who was argued, almost against his will, to belief in the resurrection. He called himself 'the most dejected and reluctant convert in all England.' His Mere Christianity, The Problem of Pain, and The Resurrection of Christ became landmark documents of Christian apologetics. The resurrection was the pivot point of his intellectual conversion." },
  { name: "Lee Strobel", period: "Contemporary", story: "A legal affairs journalist for the Chicago Tribune and committed atheist, Strobel investigated the resurrection as a legal reporter after his wife's conversion — intending to disprove it. After two years of investigation he concluded the resurrection was the most reasonable explanation of the evidence. His book The Case for Christ became a bestseller and eventually a film." },
];

const VIDEOS = [
  { videoId: "cgfDocaQFvs", title: "The Resurrection: Historical Evidence", channel: "Gary Habermas / Liberty University", description: "Gary Habermas, the world's leading scholar on the historical evidence for the resurrection, presents the minimal facts argument and responds to alternative theories." },
  { videoId: "7bQCKFe_Bro", title: "The Case for the Resurrection", channel: "Ligonier Ministries", description: "R.C. Sproul examines the historical and theological case for the resurrection of Jesus Christ — why it is the center of Christian faith." },
  { videoId: "JY0lMqZ24y0", title: "Why the Resurrection Matters", channel: "Desiring God", description: "John Piper on why the resurrection is not merely historical trivia but the center of the Christian gospel and the ground of Christian hope." },
  { videoId: "s9-dJTgGMvM", title: "N.T. Wright on the Resurrection", channel: "The Gospel Coalition", description: "N.T. Wright, one of the world's leading NT scholars, explains why the bodily resurrection of Jesus is historically credible and theologically essential." },
  { videoId: "p9K3UlI2yUo", title: "The Empty Tomb: Evidence and Implications", channel: "Ligonier Ministries", description: "An examination of the evidence for the empty tomb and its significance — why no first-century opponent of Christianity argued the tomb was still occupied." },
];

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "evidence", label: "Historical Evidence", icon: "🔍" },
  { id: "meaning", label: "Theological Meaning", icon: "✝️" },
  { id: "appearances", label: "Appearances", icon: "👁️" },
  { id: "theories", label: "Alternative Theories", icon: "🧩" },
  { id: "changed", label: "Changed Lives", icon: "❤️" },
  { id: "videos", label: "Videos", icon: "🎬" },
];

export default function ResurrectionPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_resurrection_tab", "evidence");
  const [expandedFact, setExpandedFact] = useState<number | null>(null);
  const [expandedMeaning, setExpandedMeaning] = useState<number | null>(null);
  const [expandedTheory, setExpandedTheory] = useState<number | null>(null);
  const [expandedAppearance, setExpandedAppearance] = useState<number | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: `var(--font-jost, system-ui, sans-serif)` }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #150a0a 0%, #1f0808 40%, #0a100a 100%)`, paddingTop: 100, paddingBottom: 60, textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>🌅</div>
        <div style={{ display: "inline-block", background: `${GOLD}18`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 16px", fontSize: 12, fontWeight: 700, color: GOLD, marginBottom: 16, letterSpacing: 1 }}>
          APOLOGETICS &amp; THEOLOGY
        </div>
        <h1 style={{ fontFamily: `var(--font-cormorant, Georgia, serif)`, fontSize: "clamp(34px, 6vw, 58px)", fontWeight: 700, margin: "0 auto 16px", maxWidth: 700, lineHeight: 1.1 }}>
          The Resurrection of Christ
        </h1>
        <p style={{ color: MUTED, fontSize: 17, maxWidth: 580, margin: "0 auto 24px", lineHeight: 1.75 }}>
          The most important event in human history — and the most scrutinized. The bodily resurrection of Jesus is the hinge of Christian faith: &ldquo;If Christ has not been raised, your faith is futile&rdquo; (1 Corinthians 15:17).
        </p>
        <div style={{ display: "inline-block", background: `${GREEN}18`, border: `1px solid ${GREEN}40`, borderRadius: 20, padding: "6px 20px", fontSize: 13, color: GREEN }}>
          &ldquo;He is not here; he has risen, just as he said.&rdquo; — Matthew 28:6
        </div>
      </div>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Tab nav */}
        <div style={{ display: "flex", gap: 4, margin: "32px 0", background: CARD, borderRadius: 14, padding: 5, border: `1px solid ${BORDER}`, overflowX: "auto" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, minWidth: 80, padding: "10px 6px", borderRadius: 10, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "all 0.2s ease", whiteSpace: "nowrap" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* HISTORICAL EVIDENCE */}
        {activeTab === "evidence" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 12 }}>The Minimal Facts Argument</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}>
                Historian and philosopher Gary Habermas developed the &ldquo;minimal facts&rdquo; approach: identify the facts about the resurrection that are (1) strongly evidenced and (2) accepted by the vast majority of critical scholars regardless of theological commitment. Then ask: what hypothesis best explains all of these facts?
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                The minimal facts include: Jesus died by crucifixion; the disciples genuinely believed they saw him risen; Paul and James — both skeptics — were converted by resurrection appearances; and the tomb was empty. The resurrection of Jesus is the only hypothesis that adequately accounts for all of these accepted facts.
              </p>
            </div>
            {MINIMAL_FACTS.map((f, i) => (
              <div key={i} onClick={() => setExpandedFact(expandedFact === i ? null : i)}
                style={{ background: CARD, border: `1px solid ${expandedFact === i ? `${f.color}60` : BORDER}`, borderRadius: 12, padding: 20, marginBottom: 10, cursor: "pointer", transition: "all 0.2s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ background: `${f.color}20`, color: f.color, borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14, flexShrink: 0 }}>
                      {f.num}
                    </span>
                    <h3 style={{ color: expandedFact === i ? f.color : TEXT, fontWeight: 800, fontSize: 17, margin: 0, transition: "all 0.2s ease" }}>{f.title}</h3>
                  </div>
                  <span style={{ color: MUTED }}>{expandedFact === i ? "▲" : "▼"}</span>
                </div>
                {expandedFact === i && (
                  <div style={{ marginTop: 16 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>{f.body}</p>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {f.sources.map((s, si) => (
                        <span key={si} style={{ background: `${f.color}15`, color: f.color, padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{s}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25`, borderRadius: 14, padding: 22, marginTop: 16 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
                &ldquo;The resurrection appearances establish as historical fact what the disciples claimed — that they had seen Jesus after his death. The question is not whether they believed it but what caused that belief. The resurrection of Jesus is by far the best explanation of the available evidence.&rdquo; — Gary Habermas, <em>The Case for the Resurrection of Jesus</em>
              </p>
            </div>
          </div>
        )}

        {/* THEOLOGICAL MEANING */}
        {activeTab === "meaning" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                The resurrection is not merely a historical fact to be defended — it is packed with theological meaning that transforms everything. Paul treats the resurrection as the hinge of salvation: without it, &ldquo;your faith is futile and you are still in your sins&rdquo; (1 Corinthians 15:17). Every aspect of Christian life and hope is grounded in the risen Christ.
              </p>
            </div>
            {THEOLOGICAL_MEANINGS.map((m, i) => (
              <div key={i} onClick={() => setExpandedMeaning(expandedMeaning === i ? null : i)}
                style={{ background: CARD, border: `1px solid ${expandedMeaning === i ? `${GREEN}50` : BORDER}`, borderRadius: 14, padding: 22, marginBottom: 12, cursor: "pointer", transition: "all 0.2s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 24 }}>{m.icon}</span>
                    <div>
                      <h3 style={{ color: expandedMeaning === i ? GREEN : TEXT, fontWeight: 800, fontSize: 17, margin: 0, transition: "all 0.2s ease" }}>{m.title}</h3>
                      <span style={{ background: `${PURPLE}18`, color: PURPLE, padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 600 }}>{m.ref}</span>
                    </div>
                  </div>
                  <span style={{ color: MUTED }}>{expandedMeaning === i ? "▲" : "▼"}</span>
                </div>
                {expandedMeaning === i && (
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginTop: 14, marginBottom: 0 }}>{m.body}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* APPEARANCES */}
        {activeTab === "appearances" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                The NT records multiple distinct resurrection appearances to multiple individuals and groups over a period of 40 days. These are not vague spiritual impressions — they involve physical contact, shared meals, and extended conversations. The variety of witnesses and settings rules out a simple mass delusion and points to genuine encounters with a risen, bodily Jesus.
              </p>
            </div>
            {APPEARANCES.map((a, i) => (
              <div key={i} onClick={() => setExpandedAppearance(expandedAppearance === i ? null : i)}
                style={{ background: CARD, border: `1px solid ${expandedAppearance === i ? `${PURPLE}60` : BORDER}`, borderRadius: 14, padding: 22, marginBottom: 12, cursor: "pointer", transition: "all 0.2s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <h3 style={{ color: expandedAppearance === i ? PURPLE : TEXT, fontWeight: 800, fontSize: 17, margin: "0 0 4px", transition: "all 0.2s ease" }}>To: {a.to}</h3>
                    <span style={{ background: `${PURPLE}18`, color: PURPLE, padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 600 }}>{a.ref}</span>
                  </div>
                  <span style={{ color: MUTED }}>{expandedAppearance === i ? "▲" : "▼"}</span>
                </div>
                {expandedAppearance === i && (
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginTop: 14, marginBottom: 0 }}>{a.detail}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ALTERNATIVE THEORIES */}
        {activeTab === "theories" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Serious historians have proposed multiple alternative explanations for the resurrection evidence. Each faces significant difficulties. A sound apologetic requires not only defending the resurrection but showing why every alternative fails to account for all of the accepted facts. Click any theory to see the proposal and its refutation.
              </p>
            </div>
            {ALT_THEORIES.map((t, i) => (
              <div key={i} onClick={() => setExpandedTheory(expandedTheory === i ? null : i)}
                style={{ background: CARD, border: `1px solid ${expandedTheory === i ? `${t.color}60` : BORDER}`, borderRadius: 12, padding: 20, marginBottom: 10, cursor: "pointer", transition: "all 0.2s ease" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: t.color, fontWeight: 800, fontSize: 17 }}>{t.name}</div>
                  <span style={{ color: MUTED }}>{expandedTheory === i ? "▲" : "▼"}</span>
                </div>
                {expandedTheory === i && (
                  <div style={{ marginTop: 16 }}>
                    <div style={{ marginBottom: 12 }}>
                      <div style={{ color: t.color, fontSize: 12, fontWeight: 700, marginBottom: 6 }}>THE PROPOSAL</div>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{t.proposal}</p>
                    </div>
                    <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}25`, borderRadius: 10, padding: 14 }}>
                      <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, marginBottom: 6 }}>THE REFUTATION</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{t.refutation}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* CHANGED LIVES */}
        {activeTab === "changed" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                The resurrection is not merely a historical argument — it is a living power that has transformed individuals and changed the course of history. Here are some of the most remarkable stories of lives transformed by the risen Christ.
              </p>
            </div>
            {CHANGED_LIVES.map((c, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div>
                    <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{c.name}</h3>
                    <span style={{ background: `${PURPLE}18`, color: PURPLE, padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 600 }}>{c.period}</span>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{c.story}</p>
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Lectures, debates, and sermons on the resurrection of Christ from leading scholars and apologists.</p>
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
