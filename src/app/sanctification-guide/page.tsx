"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "phases", label: "Three Phases" },
  { id: "mortification", label: "Mortification" },
  { id: "means", label: "Means of Grace" },
  { id: "views", label: "Views & Debates" },
  { id: "obstacles", label: "Obstacles" },
  { id: "practice", label: "In Practice" },
  { id: "journal", label: "Reflection" },
  { id: "videos", label: "Videos" },
];

const PHASES = [
  { num: "01", color: BLUE, phase: "Definitive Sanctification", ref: "1 Corinthians 6:11; Hebrews 10:10",
    body: "At the moment of salvation, the believer is definitively set apart to God. This is not moral improvement but a decisive positional change. 'You were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ and by the Spirit of our God' (1 Corinthians 6:11 — past tense). Hebrews 10:10: 'we have been made holy through the sacrifice of the body of Jesus Christ once for all.' This phase is complete, perfect, and unrepeatable — the Christian is already holy in God's sight through Christ.",
    implication: "Identity precedes transformation. You don't become holy by getting better — you grow because you already are holy in Christ." },
  { num: "02", color: GREEN, phase: "Progressive Sanctification", ref: "Philippians 2:12-13; 2 Peter 3:18",
    body: "Progressive sanctification is the ongoing, lifelong process of becoming more like Christ in character and conduct. 'Work out your salvation with fear and trembling, for it is God who works in you to will and to act in order to fulfill his good purpose' (Philippians 2:12-13). This phase is: progressive (gradual, not instantaneous), real (actual change in character and behavior), cooperative (involving both divine grace and human effort — 'work out... God who works in you'), and incomplete in this life (Philippians 3:12-14 — Paul has 'not yet' arrived).",
    implication: "Sanctification requires effort. It is not passive — it is 'striving' (Hebrews 12:14), 'putting to death' (Romans 8:13), 'pressing on' (Philippians 3:14)." },
  { num: "03", color: GOLD, phase: "Glorification", ref: "Romans 8:30; 1 John 3:2; Philippians 3:21",
    body: "Glorification is the final, completed sanctification at Christ's return when the believer is fully and perfectly conformed to the image of Christ. Romans 8:30 — 'those he justified, he also glorified' (past tense, indicating its certainty). 1 John 3:2 — 'when Christ appears, we shall be like him, for we shall see him as he is.' The resurrection body will be free from sin, suffering, and death. This is the goal toward which progressive sanctification is moving — and its certainty is the motivation for pressing on now.",
    implication: "Sanctification is going somewhere. The trajectory is fixed. The final state is guaranteed. This is the most powerful argument against despair over persistent sin." },
];

const MORTIFICATION_ITEMS = [
  { id: "m1", title: "What Is Mortification?", ref: "Romans 8:13; Colossians 3:5",
    body: "Mortification (from Latin mors, death) is the putting to death of sin in the believer. 'For if you live according to the flesh, you will die; but if by the Spirit you put to death the misdeeds of the body, you will live' (Romans 8:13). Colossians 3:5: 'Put to death, therefore, whatever belongs to your earthly nature: sexual immorality, impurity, lust, evil desires and greed.' John Owen's three-volume work on mortification is the classic treatment: you must kill sin, or sin will kill you. Mortification is not self-punishment but Spirit-empowered war against indwelling sin." },
  { id: "m2", title: "John Owen on Mortification", ref: "Romans 7:24; 1 Corinthians 9:27",
    body: "Owen's classic principles: (1) 'Be killing sin or it will be killing you'; (2) Mortification requires knowledge of the particular sin — its roots, occasions, and patterns; (3) Mortification is only possible through the Spirit — the flesh cannot kill itself; (4) Mortification must be daily — sin is never fully dead in this life; (5) The goal is not mere suppression but actual weakening of the sin's power; (6) Mortification must be accompanied by vivification (coming alive to God) — killing sin is not the whole of sanctification." },
  { id: "m3", title: "Vivification: Coming Alive to God", ref: "Romans 6:11; Galatians 2:20; Colossians 3:1",
    body: "Vivification is the positive counterpart to mortification — coming alive to God, 'setting the mind on things above' (Colossians 3:2), 'counting yourself dead to sin but alive to God in Christ Jesus' (Romans 6:11). Galatians 2:20 — 'I have been crucified with Christ and I no longer live, but Christ lives in me.' You do not become holy primarily by suppressing sin but by being filled with Christ. The affections that attach to sin must be replaced by affections attached to Christ. Jonathan Edwards: the only effective antidote to disordered love is ordered love." },
  { id: "m4", title: "The Role of Confession", ref: "1 John 1:9; James 5:16",
    body: "Confession is a primary means of mortification. 1 John 1:9 — 'If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.' James 5:16 — 'confess your sins to each other and pray for each other so that you may be healed.' Confession keeps sin from becoming entrenched, breaks the power of hidden sin (which grows in darkness), restores fellowship with God and community, and activates the grace of forgiveness that is the ground of sanctification. Regular confession — private to God and communal to trusted brothers/sisters — is non-optional for serious growth." },
];

const MEANS = [
  { color: BLUE, title: "Scripture", body: "The word of God is the primary instrument of sanctification. 'Sanctify them by the truth; your word is truth' (John 17:17). Jesus prays for sanctification through the word. 'All Scripture is God-breathed and useful for... training in righteousness, so that the servant of God may be thoroughly equipped for every good work' (2 Timothy 3:16-17). Scripture shapes the mind (Romans 12:2), exposes sin (Hebrews 4:12), feeds faith, and conforms us to the image of Christ. Regular Bible reading and preaching are the primary sanctifying disciplines." },
  { color: TEAL, title: "Prayer", body: "Prayer is the breath of sanctification — it keeps the soul oriented toward God, exercises dependence, and opens the channel through which grace flows. Jesus's prayer in Gethsemane — 'not my will but yours' — is the model of sanctifying prayer. The Lord's Prayer (Matthew 6) trains the soul in proper ordering of desires and concerns. Paul's prayer for the Philippians (Philippians 1:9-11) is specifically a prayer for sanctification: 'that your love may abound more and more in knowledge and depth of insight.'" },
  { color: GOLD, title: "Christian Community", body: "Sanctification is inherently communal — 'one anothering' is central to it. 'As iron sharpens iron, so one person sharpens another' (Proverbs 27:17). The New Testament commands are mostly plural — 'encourage one another,' 'bear one another's burdens,' 'spur one another on toward love and good deeds' (Hebrews 10:24-25). Accountability, confession to one another, preaching, correction, encouragement — all are corporate means of grace. The isolated Christian grows slowly if at all." },
  { color: GREEN, title: "The Lord's Supper", body: "The Supper is not merely a memorial — it is a means of grace by which Christ's benefits are applied to the believer. 1 Corinthians 11:26 — 'you proclaim the Lord's death until he comes.' Regular participation keeps the believer oriented to the source of their life, confronts sin (Paul warns about eating unworthily), and strengthens communion with Christ and his body. Reformed theology holds that Christ is spiritually present in the Supper in a way that nourishes the soul." },
  { color: PURPLE, title: "Suffering and Trials", body: "James 1:2-4: 'Consider it pure joy... whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete.' Suffering is not a sign of God's absence — it is a means of his sanctifying work. Romans 5:3-5, Hebrews 12:10-11 — God disciplines for our good 'that we may share in his holiness.' The school of affliction is one of the most reliable producers of spiritual maturity." },
];

const VIEWS_ITEMS = [
  { id: "v1", title: "Reformed/Calvinist View: Perseverance and Progressive Growth", ref: "Philippians 1:6; Romans 8:29",
    body: "The Reformed view: sanctification is the inevitable fruit of genuine election and regeneration — those truly saved will grow in holiness (though imperfectly, with setbacks, and never completed in this life). Philippians 1:6: 'he who began a good work in you will carry it on to completion until the day of Christ Jesus.' There is no absolute certainty of moment-by-moment spiritual state, but there is confidence in the trajectory. Antinomianism (you can profess faith and live however you want) is ruled out because grace produces obedience." },
  { id: "v2", title: "Wesleyan/Arminian View: Entire Sanctification", ref: "1 Thessalonians 5:23; Matthew 5:48",
    body: "John Wesley taught that believers can experience 'entire sanctification' or 'perfect love' in this life — a second definite work of grace subsequent to justification in which the root of sin (the bent toward sinning) is removed, leaving the heart full of love for God and neighbor. This is not absolute sinless perfection but freedom from deliberate, intentional sin. 1 Thessalonians 5:23 — 'may your whole spirit, soul and body be kept blameless.' This view is foundational to Holiness, Pentecostal, and many charismatic traditions." },
  { id: "v3", title: "Keswick/Higher Life View: Surrender and Filling", ref: "Galatians 2:20; Romans 6:13",
    body: "The Keswick movement (19th century) taught a 'higher life' of victory over sin through complete surrender to God and being filled with the Spirit. The classic slogan: 'Let go and let God.' On this view, the key transition in sanctification is not effort but surrender — a crisis experience of yielding the self to God that releases the Spirit's power. This view influenced much early 20th-century evangelicalism. Critics note it can produce passivity and does not sufficiently account for Romans 7's depiction of ongoing struggle even in the mature Christian." },
  { id: "v4", title: "The Role of the Law in Sanctification", ref: "Psalm 119:97; Romans 7:12; Galatians 3:24",
    body: "Three views on the law and sanctification: (1) The law is the standard and guide for sanctified living — the Third Use of the Law (Calvin/Westminster). The law reveals God's will for human flourishing and provides the content of sanctification; (2) Christians are not under the law at all (antinomianism — generally rejected); (3) The law drives us to Christ continually (Luther's primary emphasis) but does not function as a guide for the new covenant believer who is led by the Spirit. Most evangelical traditions hold a form of the first position: the moral law (not ceremonial or civil) is the permanent standard for Christian living." },
];

const OBSTACLES_DATA = [
  { color: RED, title: "Legalism", body: "Trying to earn God's favor through performance — treating sanctification as the basis of justification rather than its fruit. The legalist is exhausted, guilt-ridden, and joyless. The cure: keep returning to the gospel of justification by grace through faith. Sanctification flows from a settled identity in Christ, not toward it." },
  { color: PURPLE, title: "Antinomianism", body: "The opposite error — using grace as a license for sin, treating God's forgiveness as permission to disobey. Paul refutes this: 'Shall we go on sinning so that grace may increase? By no means!' (Romans 6:1-2). The person who shows no concern for holiness provides no evidence of genuine regeneration." },
  { color: GOLD, title: "Perfectionism", body: "Expecting complete victory over sin in this life, then either claiming it falsely (producing pride and self-deception) or despairing when the inevitable struggle continues. Paul in Philippians 3:12-14 models the right posture: 'Not that I have already obtained all this, or have already arrived at my goal, but I press on...'" },
  { color: TEAL, title: "Discouragement", body: "The most common and debilitating obstacle. When progress is slow, when the same sin recurs, when failure follows failure, the temptation is to give up. The antidote: long-term perspective (sanctification is measured in decades, not days), community (others who see your growth), and returning always to the certainty of God's faithfulness (Philippians 1:6 — 'he will carry it on to completion')." },
];

const PRACTICE_STEPS = [
  { step: "01", color: BLUE, title: "Name the specific sin", body: "Mortification requires specificity. 'Becoming holier' is not a battle plan. Name the sin, its patterns, its triggers, its roots." },
  { step: "02", color: TEAL, title: "Confess to God and a trusted person", body: "Sin thrives in secrecy. James 5:16 — 'confess to each other.' A trusted accountability partner breaks the shame cycle and adds intercession." },
  { step: "03", color: GREEN, title: "Identify the idol beneath the sin", body: "Most persistent sins are rooted in disordered desires. What good thing have you turned into an ultimate thing? Address the root, not just the branch." },
  { step: "04", color: GOLD, title: "Saturate with Scripture and prayer", body: "The word of God is the primary sanctifying instrument. Daily, specific scriptural engagement with the area of struggle. Pray the Psalms in this area." },
  { step: "05", color: PURPLE, title: "Put on the positive counterpart", body: "Vivification: what virtue should replace the vice? What affection should replace the disordered one? Colossians 3:5-17 always pairs putting off with putting on." },
  { step: "06", color: RED, title: "Arrange your environment", body: "Don't naively leave the same conditions in place. Mortification is practical: if you struggle with pornography, you install filters. If you struggle with anger, you avoid the provocations you can control." },
];

const VIDEOS = [
  { videoId: "YOOsF_xPzLI", title: "What Is Sanctification? — John Piper" },
  { videoId: "qIRBK3Qi3Q4", title: "Mortification of Sin — John Owen's Classic" },
  { videoId: "cjTZvDXmDsQ", title: "How Does God Change Us? — Tim Keller" },
  { videoId: "4cGVlZJlY-E", title: "The Means of Grace — Sinclair Ferguson" },
  { videoId: "jFTvF9UQZGA", title: "Holiness — J.C. Ryle" },
];

export default function SanctificationGuide() {
  const [tab, setTab] = useLocalStorage("vine_sanct_g_tab", "overview");
  const [mortOpen, setMortOpen] = useLocalStorage("vine_sanct_g_mort", "");
  const [viewsOpen, setViewsOpen] = useLocalStorage("vine_sanct_g_views", "");
  const [journal, setJournal] = useLocalStorage("vine_sanct_g_journal", "");

  const card = (body: React.ReactNode) => (
    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" }}>{body}</div>
  );

  const accordion = (
    items: { id: string; title: string; ref?: string; body: string }[],
    openKey: string,
    setOpen: (v: string) => void
  ) => items.map((it) => (
    <div key={it.id} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 8, overflow: "hidden" }}>
      <button onClick={() => setOpen(openKey === it.id ? "" : it.id)}
        style={{ width: "100%", textAlign: "left", padding: "1rem 1.25rem", background: openKey === it.id ? "rgba(58,125,86,0.07)" : "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem" }}>{it.title}</span>
          {it.ref && <span style={{ color: MUTED, fontSize: "0.78rem", marginLeft: 12 }}>{it.ref}</span>}
        </div>
        <span style={{ color: MUTED, fontSize: "1.1rem" }}>{openKey === it.id ? "−" : "+"}</span>
      </button>
      {openKey === it.id && (
        <div style={{ padding: "0 1.25rem 1.25rem", borderTop: `1px solid ${BORDER}` }}>
          <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, marginTop: "1rem" }}>{it.body}</p>
        </div>
      )}
    </div>
  ));

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: "rgba(58,125,86,0.12)", border: `1px solid rgba(58,125,86,0.25)`, borderRadius: 20, padding: "0.35rem 1rem", fontSize: "0.78rem", color: GREEN, fontWeight: 600, marginBottom: "1rem" }}>
            SYSTEMATIC THEOLOGY · SANCTIFICATION
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Sanctification: Growing in Holiness
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
            Sanctification is God's transforming work in the believer — the process by which we are conformed to the image of Christ. It is the whole arc of the Christian life: from the moment of new birth to the moment of glorification.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1.1rem", borderRadius: 20, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", border: `1px solid ${tab === t.id ? GREEN : BORDER}`, background: tab === t.id ? "rgba(58,125,86,0.12)" : "transparent", color: tab === t.id ? GREEN : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ background: "rgba(58,125,86,0.07)", border: `1px solid rgba(58,125,86,0.2)`, borderRadius: 16, padding: "1.5rem", marginBottom: "2rem" }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.75rem" }}>What Is Sanctification?</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                Sanctification (from Latin sanctus, holy) is the process of being made holy. It is both a definitive act at conversion (positional sanctification), an ongoing process throughout life (progressive sanctification), and a final completion at glorification. The three-phase structure is essential: you already are holy (in Christ), you are being made holy (by the Spirit), you will be fully holy (in the resurrection).
              </p>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>
                Westminster Shorter Catechism Q. 35: <em>"Sanctification is the work of God's free grace, whereby we are renewed in the whole man after the image of God, and are enabled more and more to die unto sin, and live unto righteousness."</em>
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              {[{ color: BLUE, icon: "✅", title: "Already Holy", body: "In Christ you are already definitively holy — set apart, sanctified, justified (1 Corinthians 6:11). This is your identity." },
                { color: GREEN, icon: "🌱", title: "Being Made Holy", body: "By the Spirit you are progressively conformed to Christ — a lifelong process involving effort, discipline, failure, and grace." },
                { color: GOLD, icon: "✨", title: "Will Be Fully Holy", body: "At glorification you will be fully and finally free from sin — the goal toward which sanctification is moving (Romans 8:30)." },
                { color: TEAL, icon: "🤝", title: "God and You", body: "'Work out your salvation... for God is at work in you' (Phil 2:12-13). Sanctification is synergistic — divine grace and human effort." },
              ].map((g, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem" }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{g.icon}</div>
                  <div style={{ fontWeight: 800, color: g.color, marginBottom: "0.4rem" }}>{g.title}</div>
                  <p style={{ color: MUTED, fontSize: "0.84rem", lineHeight: 1.6 }}>{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "phases" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The Three Phases of Sanctification</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Understanding all three phases prevents both complacency (ignoring progressive growth) and despair (forgetting that glorification is certain).</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1.25rem" }}>
              {PHASES.map((p) => (
                <div key={p.num} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{ fontWeight: 900, fontSize: "1.8rem", color: p.color, opacity: 0.3, lineHeight: 1 }}>{p.num}</span>
                    <div>
                      <h3 style={{ fontWeight: 800, color: p.color, fontSize: "1.05rem" }}>{p.phase}</h3>
                      <span style={{ color: MUTED, fontSize: "0.78rem" }}>{p.ref}</span>
                    </div>
                  </div>
                  <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>{p.body}</p>
                  <div style={{ padding: "0.6rem 0.9rem", background: "rgba(58,125,86,0.07)", borderLeft: `3px solid ${GREEN}`, borderRadius: 6 }}>
                    <p style={{ color: GREEN, fontSize: "0.82rem", lineHeight: 1.6 }}>{p.implication}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "mortification" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Mortification and Vivification</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>John Owen's classic framework: sanctification involves both putting sin to death (mortification) and coming alive to God (vivification). Both are Spirit-empowered, both require active effort, and neither is possible without the other.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(MORTIFICATION_ITEMS, mortOpen, setMortOpen)}</div>
          </div>
        )}

        {tab === "means" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The Means of Grace</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The means of grace are the ordinary channels through which God works sanctification in his people. They are not magic but disciplines that place us under the flow of divine grace.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {MEANS.map((m, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${m.color}` }}>
                  <h3 style={{ fontWeight: 800, color: m.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{m.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "views" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Views and Debates in Sanctification Theology</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Different theological traditions have significant disagreements about sanctification — especially about the possibility of entire sanctification, the role of the law, and the experience of Romans 7.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(VIEWS_ITEMS, viewsOpen, setViewsOpen)}</div>
          </div>
        )}

        {tab === "obstacles" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Obstacles to Sanctification</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The most common reasons Christians fail to grow — each is a distortion of the right relationship between grace and effort in the Christian life.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {OBSTACLES_DATA.map((o, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${o.color}` }}>
                  <h3 style={{ fontWeight: 800, color: o.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{o.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "practice" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Six Practical Steps for Growth</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Sanctification is not vague — it involves concrete, specific, Spirit-empowered action. Here is a practical framework for working on a specific area of sin.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {PRACTICE_STEPS.map((s) => (
                <div key={s.step} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontWeight: 900, fontSize: "1.5rem", color: s.color, opacity: 0.4, lineHeight: 1, flexShrink: 0 }}>{s.step}</span>
                  <div>
                    <h3 style={{ fontWeight: 800, color: s.color, fontSize: "0.95rem", marginBottom: "0.4rem" }}>{s.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.65 }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>What is the most persistent area of sin or weakness in your life? Name it. What step from the practical framework above would you begin today? What does the certainty of glorification mean for your discouragement?</p>
              <textarea value={journal} onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection here..."
                style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", color: TEXT, fontSize: "0.9rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }} />
              {journal && <p style={{ color: GREEN, fontSize: "0.78rem", marginTop: "0.5rem" }}>Saved automatically.</p>}
            </div>)}
          </div>
        )}

        {tab === "videos" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Video Teaching</h2><p style={{ color: MUTED, fontSize: "0.88rem" }}>Recommended videos on the theology and practice of sanctification and holiness.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.9rem" }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
