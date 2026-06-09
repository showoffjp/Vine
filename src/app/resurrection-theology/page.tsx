"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

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

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "evidence", label: "Historical Evidence" },
  { id: "alternatives", label: "Alternative Theories" },
  { id: "meaning", label: "Theological Meaning" },
  { id: "body", label: "The Resurrection Body" },
  { id: "our-resurrection", label: "Our Resurrection" },
  { id: "implications", label: "Implications" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const RESURRECTION_TEXTS = [
  {
    ref: "1 Corinthians 15:3-4",
    text: "That Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures.",
    note: "Paul cites this as early creedal tradition — received, not invented. Dated within years of the crucifixion.",
  },
  {
    ref: "Romans 1:4",
    text: "And was declared to be the Son of God in power according to the Spirit of holiness by his resurrection from the dead.",
    note: "The resurrection is God's vindication of Jesus's claims — the divine stamp of approval on his life and death.",
  },
  {
    ref: "1 Corinthians 15:17",
    text: "And if Christ has not been raised, your faith is futile and you are still in your sins.",
    note: "Paul makes the resurrection non-negotiable: Christianity without the bodily resurrection is not Christianity.",
  },
  {
    ref: "John 11:25",
    text: "I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live.",
    note: "Jesus claims not just that resurrection happens but that he is its source and substance.",
  },
  {
    ref: "Revelation 1:18",
    text: "I am the living one. I died, and behold I am alive forevermore, and I have the keys of Death and Hades.",
    note: "The risen Christ holds authority over death itself — the ultimate source of human fear has been conquered.",
  },
];

const HISTORICAL_FACTS = [
  {
    fact: "The Empty Tomb",
    desc: "All four Gospels report that the tomb was found empty on the first day of the week. The Jewish authorities never produced a body — instead, they spread the story that the disciples stole it (Matthew 28:12-15), which presupposes the tomb was empty.",
    color: GREEN,
  },
  {
    fact: "Post-Resurrection Appearances",
    desc: "Paul lists appearances to Peter, the Twelve, 500 brothers at once (most still alive when Paul wrote), James, all the apostles, and Paul himself (1 Cor 15:5-8). This list is remarkably early — within a few years of the crucifixion.",
    color: TEAL,
  },
  {
    fact: "The Disciples' Transformation",
    desc: "After the crucifixion, the disciples were scattered, fearful, and defeated. Within weeks they were boldly proclaiming the resurrection in Jerusalem — the city where Jesus had just been executed. What transformed them?",
    color: PURPLE,
  },
  {
    fact: "The Conversion of Paul",
    desc: "Saul of Tarsus was a persecutor of Christians who had a dramatic encounter with the risen Jesus (Acts 9). His conversion is best explained by what he claims: he saw the risen Christ. He had no prior motive for fabrication.",
    color: GOLD,
  },
  {
    fact: "The Conversion of James",
    desc: "James, the brother of Jesus, was a skeptic during Jesus's ministry (John 7:5). He became a leader of the Jerusalem church and was martyred for his faith. Paul notes he received an appearance from the risen Jesus (1 Cor 15:7).",
    color: BLUE,
  },
  {
    fact: "The Origin of Sunday Worship",
    desc: "Jewish Christians — who observed Saturday Sabbath — shifted to Sunday worship. The only plausible explanation is that something dramatic happened on Sunday: the resurrection. This shift is attested within the first generation.",
    color: "#EC4899",
  },
];

const ALTERNATIVE_THEORIES = [
  {
    theory: "Swoon Theory",
    claim: "Jesus didn't actually die — he fainted, was buried alive, revived in the tomb, and escaped.",
    refutation: "Roman soldiers were professional executioners; they confirmed death before releasing bodies. The spear thrust (John 19:34) was a death blow. A half-dead Jesus could not have inspired 'resurrection' appearances. The theory was proposed by Venturini in 1806 and is rejected by virtually all modern historians.",
    color: "#EF4444",
  },
  {
    theory: "Stolen Body Theory",
    claim: "The disciples stole the body and fabricated the resurrection story.",
    refutation: "The disciples suffered and died for their testimony. People die for beliefs they think are true; they don't die for what they know to be a lie. The Jewish authorities spread this theory (Matthew 28:12-15) but couldn't produce the body.",
    color: "#F97316",
  },
  {
    theory: "Wrong Tomb Theory",
    claim: "The women went to the wrong tomb and found it empty.",
    refutation: "Joseph of Arimathea knew where his own tomb was. The authorities could have gone to the correct tomb and produced the body. The appearances cannot be explained by a wrong-tomb mistake.",
    color: GOLD,
  },
  {
    theory: "Hallucination Theory",
    claim: "The disciples had subjective visions or hallucinations, not physical appearances.",
    refutation: "Hallucinations are private experiences; Paul reports appearances to groups, including 500 at once. Hallucinations don't produce an empty tomb. Grief hallucinations typically reinforce prior beliefs, not create new ones (disciples expected a conquering Messiah, not resurrection).",
    color: TEAL,
  },
  {
    theory: "Legend Theory",
    claim: "The resurrection is a legend that grew over decades.",
    refutation: "The creed in 1 Corinthians 15:3-8 is dated within 3-5 years of the crucifixion. There was not enough time for legend development. The resurrection was proclaimed in Jerusalem where eyewitnesses and opponents were present.",
    color: PURPLE,
  },
];

const THEOLOGICAL_MEANING = [
  {
    meaning: "Vindication",
    desc: "The resurrection is God's declaration that everything Jesus claimed was true and everything he did was accepted. The cross is not the final word — the empty tomb is God's 'Amen' to Jesus's life and atoning death.",
    color: GOLD,
  },
  {
    meaning: "Defeat of Death",
    desc: "Paul calls death 'the last enemy' (1 Cor 15:26). The resurrection does not merely promise that death will one day be defeated — it demonstrates that it has been. Christ's resurrection is the firstfruits (1 Cor 15:20), the beginning of the new creation.",
    color: GREEN,
  },
  {
    meaning: "Justification",
    desc: "Paul says Jesus 'was raised for our justification' (Romans 4:25). The resurrection is not merely evidence that Christ rose — it is part of the saving event. Our standing before God depends on the living Christ, not just the dead one.",
    color: BLUE,
  },
  {
    meaning: "New Creation",
    desc: "The resurrection body of Jesus is the first instance of the new creation breaking into the old order. The future has arrived. What happens at the end of history (resurrection of all the dead) has already happened to one person — and in him, to all who are united to him.",
    color: TEAL,
  },
  {
    meaning: "Hope",
    desc: "Death is no longer the final word for those in Christ. The resurrection of Jesus is the pledge and guarantee of our own resurrection. This is not mere immortality of the soul — it is bodily resurrection to renewed, embodied life in the new creation.",
    color: PURPLE,
  },
];

const BODY_POINTS = [
  {
    title: "Bodily — Not Spiritual",
    desc: "The resurrection body is a real, physical body — not a disembodied spirit or a vision. Jesus ate, was touched, showed his wounds (Luke 24:39-43, John 20:27). Paul's critics thought resurrection was impossible partly because they disdained the physical — he insists on bodily resurrection.",
    color: GREEN,
  },
  {
    title: "Transformed — Not Resuscitated",
    desc: "The resurrection body is transformed, not merely resuscitated. Lazarus was resuscitated — he would die again. Jesus was resurrected — he 'cannot die again' (Romans 6:9). The body is the same (continuity) yet different (transformation).",
    color: TEAL,
  },
  {
    title: "1 Corinthians 15 Contrasts",
    desc: "Paul contrasts the present body with the resurrection body: perishable/imperishable, dishonor/glory, weakness/power, natural/spiritual. 'Spiritual' does not mean non-physical — it means a body animated by and suited to the Spirit's realm.",
    color: PURPLE,
  },
  {
    title: "Continuity and Identity",
    desc: "The resurrection body is continuous with the earthly body — you are raised, not replaced. The wounds of Jesus are still visible (John 20:27). Personal identity persists through resurrection and transformation.",
    color: GOLD,
  },
];

const IMPLICATIONS = [
  {
    title: "The Body Matters",
    desc: "The resurrection validates the importance of physical bodies. Gnostic spirituality that treats the body as a prison is false. Christian hope is not escape from the body but redemption of the body. This grounds a Christian ethic of care for physical health, sexuality, disability, and the dignity of the dying.",
    color: GREEN,
  },
  {
    title: "History Matters",
    desc: "The resurrection is a historical event, not a metaphor. Christianity is not a spirituality that transcends historical particulars — it depends on a specific man, dying and rising on specific days in a specific location. The bodily resurrection cannot be demythologized without destroying Christianity.",
    color: BLUE,
  },
  {
    title: "Death Is Defeated",
    desc: "Christian grief is real (Jesus wept), but it is not the grief of those without hope (1 Thessalonians 4:13). Death is real loss — but it is not the final word. The bereaved Christian grieves toward resurrection, not into oblivion.",
    color: GOLD,
  },
  {
    title: "Ethics Is Eschatological",
    desc: "Because the future resurrection has already begun in Christ, present life anticipates it. The Spirit working in us now is the Spirit who will raise our bodies (Romans 8:11). Present moral effort is not futile — it will be vindicated and transformed in the resurrection order.",
    color: PURPLE,
  },
  {
    title: "Mission Is Grounded",
    desc: "The Great Commission (Matthew 28:18-20) is given by the risen Christ. His authority grounds the mission. Because he rose, he reigns. Because he reigns, the mission will succeed. The resurrection is the engine of Christian witness.",
    color: TEAL,
  },
];

const VIDEOS = [
  { videoId: "L6NfqQJJoRg", title: "The Resurrection of Jesus — N.T. Wright" },
  { videoId: "aPVqUKBGFKA", title: "Evidence for the Resurrection — Gary Habermas" },
  { videoId: "rHR7h0kBXzQ", title: "What the Resurrection Means for Us — Tim Keller" },
  { videoId: "FYf2UotSobk", title: "1 Corinthians 15 Explained" },
];

export default function ResurrectionTheologyPage() {
  const [tab, setTab] = useLocalStorage("vine_resur_tab", "overview");
  const [openAlt, setOpenAlt] = useLocalStorage("vine_resur_alt", "");
  const [journal, setJournal] = useLocalStorage("vine_resur_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>✝️</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>The Resurrection</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>
            The central claim of the Christian faith: Jesus of Nazareth rose bodily from the dead on the third day. The evidence, the theology, and the implications.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", background: tab === t.id ? GREEN : CARD, color: tab === t.id ? "#fff" : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${GREEN}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>The Indispensable Center</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Paul puts the stakes plainly: if Christ has not been raised, Christian preaching is empty, faith is futile, the dead have perished, and Christians are most to be pitied (1 Corinthians 15:14-19). The resurrection is not an optional add-on to Christianity — it is the foundation on which everything else stands.</p>
            </div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Key Scriptures</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {RESURRECTION_TEXTS.map(t => (
                <div key={t.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                  <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.25rem" }}>{t.ref}</div>
                  <p style={{ fontStyle: "italic", color: TEXT, margin: "0 0 0.25rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EVIDENCE */}
        {tab === "evidence" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: BLUE }}>The Minimal Facts Approach</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Historian Gary Habermas developed the Minimal Facts approach: identify historical facts about the resurrection that are (1) well-evidenced and (2) accepted by the vast majority of scholars — including critical scholars who reject the resurrection. Then ask: what is the best explanation of these facts?</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {HISTORICAL_FACTS.map(f => (
                <div key={f.fact} style={{ background: CARD, border: `1px solid ${f.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${f.color}` }}>
                  <div style={{ fontWeight: 700, color: f.color, marginBottom: "0.4rem" }}>{f.fact}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ALTERNATIVES */}
        {tab === "alternatives" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GOLD }}>Alternative Theories</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Every alternative theory must explain the same evidence: the empty tomb, the appearances, and the disciples&apos; transformation. Each has been proposed and refuted. The bodily resurrection of Jesus remains the most historically adequate explanation of the evidence.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {ALTERNATIVE_THEORIES.map((a, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenAlt(openAlt === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ textAlign: "left" }}>
                      <span style={{ fontWeight: 700, color: a.color }}>{a.theory}</span>
                      <div style={{ color: MUTED, fontSize: "0.8rem", marginTop: "0.1rem" }}>{a.claim}</div>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openAlt === String(i) ? "−" : "+"}</span>
                  </button>
                  {openAlt === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem" }}>
                      <div style={{ background: BG, borderRadius: 8, padding: "0.75rem", borderLeft: `3px solid ${GREEN}` }}>
                        <span style={{ color: GREEN, fontWeight: 700 }}>Response: </span>
                        <span style={{ color: MUTED }}>{a.refutation}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MEANING */}
        {tab === "meaning" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Theological Meaning</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {THEOLOGICAL_MEANING.map(m => (
                <div key={m.meaning} style={{ background: CARD, border: `1px solid ${m.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${m.color}` }}>
                  <div style={{ fontWeight: 700, color: m.color, marginBottom: "0.4rem" }}>{m.meaning}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* THE BODY */}
        {tab === "body" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: PURPLE }}>The Resurrection Body</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Jesus&apos;s resurrection body is the template for understanding our own future resurrection. Paul&apos;s discussion in 1 Corinthians 15 is the most extended NT treatment. The resurrection body is both continuous with and transformed beyond the earthly body.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {BODY_POINTS.map(b => (
                <div key={b.title} style={{ background: CARD, border: `1px solid ${b.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${b.color}` }}>
                  <div style={{ fontWeight: 700, color: b.color, marginBottom: "0.4rem" }}>{b.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* OUR RESURRECTION */}
        {tab === "our-resurrection" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: TEAL }}>Our Future Resurrection</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Christ&apos;s resurrection is the &ldquo;firstfruits&rdquo; — the guarantee and beginning of a harvest to come. All who are united to Christ by faith will be raised bodily at his return. This is not merely survival after death; it is the re-embodied, transformed life of the new creation.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "Firstfruits and Harvest", desc: "1 Corinthians 15:20-23 — Christ is the firstfruits; those who belong to him follow at his coming. The harvest is inevitable because the firstfruits have already been given. Our resurrection is certain because his was.", color: GREEN },
                { title: "At His Return", desc: "1 Thessalonians 4:13-17 — the dead in Christ will rise first, then those alive are caught up together. Resurrection happens at Christ's return, not immediately at death. The intermediate state (soul with Christ) precedes the final resurrection of the body.", color: TEAL },
                { title: "General Resurrection", desc: "Both the righteous and the unrighteous are raised — but to different destinies (John 5:28-29; Daniel 12:2). Resurrection is not salvation; it is the precondition for final judgment and the assignment of eternal destiny.", color: GOLD },
                { title: "The New Creation", desc: "The resurrection leads to the new creation — not disembodied heaven but a renewed physical cosmos. Revelation 21-22 describes the new Jerusalem coming down, God dwelling with his people in embodied glory. The goal is not escape from creation but its transformation.", color: PURPLE },
              ].map(r => (
                <div key={r.title} style={{ background: CARD, border: `1px solid ${r.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${r.color}` }}>
                  <div style={{ fontWeight: 700, color: r.color, marginBottom: "0.4rem" }}>{r.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* IMPLICATIONS */}
        {tab === "implications" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Why It Matters Today</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {IMPLICATIONS.map(i => (
                <div key={i.title} style={{ background: CARD, border: `1px solid ${i.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${i.color}` }}>
                  <div style={{ fontWeight: 700, color: i.color, marginBottom: "0.4rem" }}>{i.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "0.5rem", color: GREEN }}>Personal Reflection</h2>
              <p style={{ color: MUTED, marginBottom: "1rem", fontSize: "0.9rem" }}>How does the resurrection of Jesus change how you face death, loss, and the suffering of this present age?</p>
              <textarea value={journal} onChange={e => setJournal(e.target.value)}
                placeholder="Reflect on what the resurrection means for you. Does it feel real and present, or distant and theoretical? How would your daily life change if you lived with full confidence in the bodily resurrection of Jesus and your own resurrection to come?"
                style={{ width: "100%", minHeight: 220, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              <div style={{ color: MUTED, fontSize: "0.8rem", marginTop: "0.5rem" }}>Saved automatically.</div>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Video Teaching</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))", gap: "1.25rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
