"use client";
import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  useEffect(() => {
    try { const s = localStorage.getItem(key); if (s !== null) setValue(JSON.parse(s)); } catch {}
  }, [key]);
  const set = useCallback((v: T) => { setValue(v); try { localStorage.setItem(key, JSON.stringify(v)); } catch {} }, [key]);
  return [value, set] as const;
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56",
  PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3", GOLD = "#D97706",
  TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = ["Overview","Theology of Cross","Paul on Suffering","Job & Theodicy","The Psalms of Lament","Suffering with Christ","Grief & Hope","Journal","Videos"];

const CROSS_ITEMS = [
  { q: "The Cross as God's Response to Suffering", a: "The Christian claim is not that suffering does not matter or that God is distant from it, but that God entered it. The incarnation and crucifixion are God's own experience of human suffering from the inside: hunger, rejection, betrayal, physical agony, desolation. The theologian Jurgen Moltmann, himself a prisoner of war, developed this in The Crucified God: God suffers with the world in the death of Christ. The cross is not God allowing suffering from a safe distance but God bearing it in full." },
  { q: "Theologia Crucis — Theology of the Cross", a: "Luther's theologia crucis (theology of the cross) vs. theologia gloriae (theology of glory): the theology of glory looks for God in power, success, and triumphs; the theology of the cross finds God precisely in weakness, suffering, and failure. God is found sub contrario — under his opposite. The hidden God is revealed in the crucified Christ. Applied to our lives: we meet God most profoundly not in the heights of spiritual experience but in the depths of our brokenness." },
  { q: "The Problem of Evil and God's Goodness", a: "The logical problem: if God is all-powerful and all-good, why does suffering exist? Proposed responses: (1) Free Will Defense — God values moral freedom and real love requires freedom, which makes real evil possible. (2) Soul-Making Theodicy (Irenaeus/Hick) — the world is a vale of soul-making where genuine virtue develops through trial. (3) Greater Good — suffering produces goods (character, compassion, eternal weight) that could not otherwise exist. (4) Humble Trust — Job's answer: God's ways are beyond full human comprehension; trust is the appropriate response when understanding fails." },
  { q: "Suffering as Participation in Christ", a: "Paul: 'I want to know Christ — yes, to know the power of his resurrection and participation in his sufferings, becoming like him in his death, and so, somehow, attaining to the resurrection from the dead' (Phil 3:10–11). Suffering is not merely a trial to endure but a participation in Christ's own paschal journey. The cross-shaped pattern — death leading to resurrection — is the shape of all Christian experience. Our sufferings, when suffered with Christ, carry eschatological weight and participate in his redemptive work." },
];

const PAUL_ITEMS = [
  { q: "Suffering Produces Character (Romans 5:3–5)", a: "'We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope. And hope does not put us to shame, because God's love has been poured out into our hearts through the Holy Spirit, who has been given to us.' The chain is teleological: each link produces the next. Paul does not say suffering is good in itself but that it is productive in God's purposes — specifically, it produces the eschatological virtue of hope, which is grounded in the Spirit's presence, not in circumstances." },
  { q: "Present Sufferings and Future Glory (Romans 8:18)", a: "'I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.' The comparison is not dismissive but mathematical: the weight of glory is so far beyond present suffering that comparison becomes meaningless. Paul immediately connects this to cosmic suffering: creation groans, we groan, even the Spirit groans in intercession (8:22–26). The whole creation is in labor — present suffering is part of a birth that is already guaranteed." },
  { q: "Comforted to Comfort (2 Corinthians 1:3–7)", a: "'Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.' Paul's theology of comfort is transitive: what is received from God is passed on to others. The suffering that God transforms into comfort becomes the material for ministry. Those who have suffered deeply often have the greatest capacity to accompany others in their suffering." },
  { q: "The Light and Momentary Troubles (2 Corinthians 4:17–18)", a: "'For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal.' The eschatological perspective is not escapism but realism: the unseen dimension is the most real. Paul does not minimize suffering — he lists his own hardships in chapter 11 (beatings, shipwrecks, imprisonment) — but he refuses to let them have the last word." },
];

const JOB_ITEMS = [
  { q: "Job's Protest — The Courage to Lament", a: "Job does not accept his friends' theodicy (you sinned; you suffer). He presses God directly: 'I desire to speak to the Almighty and to argue my case with God' (13:3). His honesty before God is not faithlessness — it is the deepest form of faith: the certainty that God can handle the full weight of the complaint. Job 19:25: 'I know that my redeemer lives, and that in the end he will stand on the earth.' In the depths of suffering, Job clings to the conviction of ultimate vindication." },
  { q: "Job's Comforters — Bad Theology in Action", a: "Eliphaz, Bildad, and Zophar represent retributive theology: suffering proves sin. Their speeches grow longer and more vehement; their theology is orthodox-sounding but wrong. At the end, God rebukes them: 'You have not spoken the truth about me, as my servant Job has' (42:7). The truly faithful response to suffering is not to explain it away with neat theology but to stay present, speak honestly, and trust God with what cannot be explained." },
  { q: "The Whirlwind Speech (Job 38–41)", a: "'Where were you when I laid the earth's foundation? Tell me, if you understand. Who marked off its dimensions?' God's response to Job is not an explanation but a revelation of divine majesty. God does not answer the Why of Job's suffering — he answers with the Who: the Creator who holds all things in being and whose wisdom encompasses what human understanding cannot. Job's response: 'My ears had heard of you but now my eyes have seen you.' Encounter with God is itself the resolution, not a theological explanation." },
  { q: "Why the Book of Job Matters", a: "Job resists the ancient (and modern) prosperity gospel logic: righteousness = blessing, suffering = sin. It insists that suffering is not always deserved, that honest complaint before God is legitimate, and that God is not a vending machine who rewards virtue with prosperity. The book's most important contribution may be this: it validates the experience of the sufferer against those who offer easy explanations. God's final verdict vindicates Job's honest protest over his friends' tidy theology." },
];

const LAMENT_CARDS = [
  { icon: "😭", color: BLUE, title: "What Is Lament?", text: "Biblical lament is honest prayer in pain — the psalms of lament (roughly a third of the Psalter) give voice to human anguish before God. They follow a recognizable structure: address (calling out to God), complaint (expressing the pain honestly), petition (asking God to act), and expression of trust/praise (moving toward renewed confidence). Lament is not faithlessness but a form of faith — it takes God seriously enough to argue with him." },
  { icon: "📖", color: PURPLE, title: "Psalm 22 — My God, Why Have You Forsaken Me?", text: "'My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?' (22:1) — the psalm Jesus prayed from the cross. The lament is total and specific. But the psalm moves: verse 24, 'he has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help.' The same psalm that begins in desolation ends in cosmic praise. Lament is the road, not the destination." },
  { icon: "🌊", color: RED, title: "Psalm 88 — The Darkest Psalm", text: "Psalm 88 is unique: it is the only lament psalm that does not end in praise or renewed trust. It ends in darkness: 'darkness is my closest friend.' It is included in the canon as permission — not every season of suffering has an immediate resolution; not every lament moves quickly to praise. Sometimes faith means staying in the dark, continuing to address God even when there is no felt answer. The address itself is the act of faith." },
  { icon: "💧", color: GREEN, title: "Reclaiming Lament in the Church", text: "Walter Brueggemann argues that the church has systematically suppressed lament — reducing worship to celebration and thanksgiving while outlawing honest complaint. This has two effects: it alienates sufferers (whose experience does not match the triumphalism), and it produces shallow faith (untested by honesty). Reintegrating lament recovers the full range of human experience before God and models a faith that is honest about suffering while still oriented toward the God who hears." },
];

const CHRIST_SUFFERING_ITEMS = [
  { q: "Suffering as Fellowship (Philippians 3:10)", a: "'I want to know Christ — yes, to know the power of his resurrection and participation (koinonia) in his sufferings, becoming like him in his death.' Paul uses the word koinonia — fellowship, communion — for suffering with Christ. This is not merely imitation but participation: because we are in Christ, his death is our death, his suffering is our suffering, his resurrection will be our resurrection. Suffering becomes a means of deepening union with Christ, not distance from him." },
  { q: "Filling Up What Is Lacking in Christ's Afflictions (Col 1:24)", a: "'Now I rejoice in what I am suffering for you, and I fill up in my flesh what is still lacking in regard to Christ's afflictions, for the sake of his body, which is the church.' This difficult verse is not atonement deficiency (Christ's cross is sufficient) but the continuation of the proclamation: the church's suffering in mission extends the announcement of Christ's death to new places. Paul's suffering as apostle participates in and extends the reach of Christ's saving work." },
  { q: "The Suffering Servant (Isaiah 53)", a: "'He was despised and rejected by mankind, a man of suffering, and familiar with pain... Surely he took up our pain and bore our suffering... he was pierced for our transgressions, he was crushed for our iniquities.' Isaiah 53 prophesies a Servant who does not suffer because of his own sin but because of others' — whose suffering is vicarious and redemptive. The NT applies this to Jesus (Acts 8:30–35). Our own suffering, when offered with him, takes on the same shape: not wasted, but potentially redemptive for others." },
  { q: "The God Who Weeps (John 11:35)", a: "'Jesus wept.' The shortest verse in the Bible is also among the most theologically dense. At Lazarus's tomb, knowing he is about to raise Lazarus, Jesus still weeps. He does not weep because he lacks hope; he weeps because he shares in the grief of those who grieve. This is divine compassion: not detached omniscience but fully present pathos. God in Christ is not distant from human suffering but enters it, is moved by it, and weeps with those who weep (Romans 12:15)." },
];

const VIDEOS = [
  { videoId: "NjZVHE2ZYII", title: "Why Does God Allow Suffering? – Tim Keller" },
  { videoId: "Juu_H-CRvHI", title: "The Book of Job – Suffering and the Problem of Evil" },
  { videoId: "jzODqIpkYtg", title: "Lament – Rediscovering Honest Prayer" },
];

export default function ChristianSufferingGuidePage() {
  const [activeTab, setActiveTab] = useLocalStorage("vine_suf_tab", 0);
  const [openCross, setOpenCross] = useLocalStorage("vine_suf_cross", -1);
  const [openPaul, setOpenPaul] = useLocalStorage("vine_suf_paul", -1);
  const [openJob, setOpenJob] = useLocalStorage("vine_suf_job", -1);
  const [openChrist, setOpenChrist] = useLocalStorage("vine_suf_christ", -1);
  const [journal, setJournal] = useLocalStorage("vine_suf_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui,sans-serif" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: ".5rem" }}>🕊️</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 900, color: TEXT, marginBottom: ".5rem" }}>A Theology of Christian Suffering</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>A Comprehensive Guide — from Job's honest protest to the Psalms of Lament, from Paul's glory of suffering to the God who weeps at Lazarus's tomb: what the Bible says about pain, grief, and hope.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setActiveTab(i)} style={{ padding: ".5rem 1.1rem", borderRadius: 20, border: `1px solid ${activeTab === i ? BLUE : BORDER}`, background: activeTab === i ? `${BLUE}22` : CARD, color: activeTab === i ? BLUE : MUTED, fontWeight: activeTab === i ? 700 : 400, cursor: "pointer", fontSize: ".85rem" }}>{t}</button>
          ))}
        </div>

        {/* Tab 0: Overview */}
        {activeTab === 0 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: BLUE, fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>Overview: The Christian and Suffering</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>No theological question presses harder on faith than suffering. Why does a good, all-powerful God allow it? Why do the righteous suffer? What do I do when God is silent? Where is God in my pain? The Bible does not offer simple answers, but it offers something better: honest engagement, divine solidarity, and eschatological hope.</p>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>The Christian theology of suffering is shaped by the cross: God did not exempt himself from suffering but entered it fully in Jesus Christ. This means suffering does not prove God's absence — it may be precisely where God is most present. And it means suffering, when suffered with Christ, is not wasted but carries real, eternal weight.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1rem", marginTop: "1.5rem" }}>
              {[["Question","Why does God allow suffering?"],["Foundation","The cross — God enters suffering"],["Model","Job's honest protest"],["Practice","Lament (Psalms 22, 88)"],["Hope","Romans 8:18 — future glory"],["Union","Participation in Christ's sufferings"]].map(([k,v]) => (
                <div key={k} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: ".75rem", marginBottom: ".25rem" }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 1: Theology of Cross */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Cross as God's Answer to Suffering</h2>
            {CROSS_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openCross === i ? RED : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenCross(openCross === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: RED, fontSize: "1.2rem" }}>{openCross === i ? "−" : "+"}</span>
                </button>
                {openCross === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Paul on Suffering */}
        {activeTab === 2 && (
          <div>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Paul's Theology of Suffering</h2>
            {PAUL_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openPaul === i ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenPaul(openPaul === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: PURPLE, fontSize: "1.2rem" }}>{openPaul === i ? "−" : "+"}</span>
                </button>
                {openPaul === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Job & Theodicy */}
        {activeTab === 3 && (
          <div>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Job and the Problem of Suffering</h2>
            {JOB_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openJob === i ? GOLD : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenJob(openJob === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: GOLD, fontSize: "1.2rem" }}>{openJob === i ? "−" : "+"}</span>
                </button>
                {openJob === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Psalms of Lament */}
        {activeTab === 4 && (
          <div>
            <h2 style={{ color: BLUE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Psalms of Lament</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {LAMENT_CARDS.map(c => (
                <div key={c.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.8rem" }}>{c.icon}</span>
                    <div>
                      <div style={{ color: c.color, fontWeight: 800, marginBottom: ".5rem" }}>{c.title}</div>
                      <div style={{ color: MUTED, lineHeight: 1.8 }}>{c.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Suffering with Christ */}
        {activeTab === 5 && (
          <div>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Suffering with Christ</h2>
            {CHRIST_SUFFERING_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openChrist === i ? TEAL : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenChrist(openChrist === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: TEAL, fontSize: "1.2rem" }}>{openChrist === i ? "−" : "+"}</span>
                </button>
                {openChrist === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 6: Grief & Hope */}
        {activeTab === 6 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Grief and Hope — Held Together</h2>
            <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              "Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope." — 1 Thessalonians 4:13
            </blockquote>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.2rem" }}>Paul does not say: do not grieve. He says: do not grieve like those who have no hope. Christian grief and Christian hope are not opposites — they coexist. Grief honors the reality of loss; hope refuses to let loss have the final word. The resurrection does not eliminate grief but it reframes it: death is not the end of the story.</p>
            {[
              ["Blessed Are Those Who Mourn (Matthew 5:4)","'Blessed are those who mourn, for they will be comforted.' The beatitude does not say mourning is pleasant or temporary — it says mourners are blessed and will be comforted. The comfort is the promise of the kingdom: the God who raised Jesus will wipe every tear from every eye. But the mourning is real; the Sermon on the Mount does not fast-forward past grief to comfort."],
              ["The Groaning of Creation (Romans 8:22–26)","'We know that the whole creation has been groaning as in the pains of childbirth right up to the present time. Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship.' Even the Spirit groans in intercession. The groaning is not faithlessness but an expression of the tension between present suffering and future promise. Christian maturity is not the absence of groaning but groaning with hope."],
              ["Lament as Protest Faith","The lament psalms are addressed to God — not complaints to a third party but direct challenges to the divine. This reveals the structure of lament: it is an act of faith that believes God is present and can respond. Nicholas Wolterstorff (Lament for a Son): 'To believe in God does not mean one never asks why. It means one brings the why to God.' Lament refuses both despair (God is absent/doesn't care) and false cheerfulness (everything is fine)."],
              ["The Eschatological Hope","'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away' (Rev 21:4). Christian hope is not that suffering did not matter but that it will be redeemed. The tears that God wipes away were real tears. The mourning that ends was real mourning. Resurrection is not reversal — it is transformation. Every suffering, properly oriented toward God, becomes material for eternal glory (2 Cor 4:17)."],
            ].map(([title, body], i) => (
              <div key={i} style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, marginBottom: ".4rem" }}>{title}</div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{body}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 7: Journal */}
        {activeTab === 7 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: ".5rem" }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1rem", fontSize: ".9rem" }}>Reflect on your theology of suffering. Your notes are saved locally.</p>
            {[
              "What is your honest reaction to suffering — do you tend toward denial (forcing praise before grief is done), despair (no hope), or biblical lament (honest grief with ongoing trust)?",
              "How does the cross — God entering human suffering from the inside — change how you experience your own pain or sit with others in theirs?",
              "Read Psalm 22 or 88. What does it feel like to pray a lament psalm? What does it mean to bring this much honesty to God?",
            ].map((q, i) => <p key={i} style={{ color: GOLD, fontSize: ".85rem", fontStyle: "italic", marginBottom: ".4rem" }}>{i + 1}. {q}</p>)}
            <textarea
              value={journal}
              onChange={e => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, color: TEXT, padding: "1rem", fontSize: ".95rem", lineHeight: 1.7, resize: "vertical", marginTop: ".75rem", boxSizing: "border-box" }}
            />
            {journal && <p style={{ color: MUTED, fontSize: ".8rem", marginTop: ".5rem" }}>Saved automatically.</p>}
          </div>
        )}

        {/* Tab 8: Videos */}
        {activeTab === 8 && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Video Resources</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <div style={{ color: TEXT, fontWeight: 700 }}>{v.title}</div>
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
