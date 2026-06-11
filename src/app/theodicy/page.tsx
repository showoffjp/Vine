"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Problem Stated", verse: "Habakkuk 1:2", body: "'How long, Lord, must I call for help, but you do not listen? Or cry out to you about violence but you do not save?' (Habakkuk 1:2). The problem of evil — why a good, all-powerful God permits suffering and evil — is ancient. The logical form: (1) God is all-good. (2) God is all-powerful. (3) Evil exists. The challenge is that the three seem incompatible. Every serious response to this question is called a theodicy — a justification of God's ways. The Bible does not offer a theodicy in the philosophical sense; it offers something better: a narrative of God's redemptive response to evil." },
  { title: "Evil as the Corruption of Good", verse: "Genesis 3:1-7", body: "Augustine's answer: evil is not a substance created by God but the privation (absence or corruption) of good. God created a good world (Genesis 1:31). Evil entered through creaturely freedom — first in the angelic rebellion, then in Adam and Eve's disobedience. God is not the author of evil; he is the author of a creation with beings capable of real love and real choice — and with that came the possibility of real rebellion. The privation theory is widely influential but does not resolve all versions of the problem." },
  { title: "The Free Will Defense", verse: "Genesis 2:16-17", body: "Alvin Plantinga's free will defense: a world with genuinely free creatures who sometimes choose evil is better than a world of moral robots who always do good by necessity. God could not create free beings who always freely chose good — that is a logical contradiction. If free will is genuinely valuable, then God allowing the evil that results from its misuse is consistent with omnipotence and goodness. The defense addresses moral evil (caused by human choice) but faces harder questions about natural evil (earthquakes, cancer, disease)." },
  { title: "Soul-Making Theodicy", verse: "Romans 5:3-4", body: "John Hick's soul-making theodicy: the world is not a pleasure garden but a vale of soul-making. Suffering is the necessary environment for the development of virtues like courage, patience, compassion, and faith — qualities that require adversity to grow. 'We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope' (Romans 5:3-4). Critics note this does not account for suffering that does not build character — gratuitous evil, the suffering of the innocent, death in infancy." },
  { title: "The Cross as God's Answer", verse: "Romans 8:32", body: "'He who did not spare his own Son, but gave him up for us all — how will he not also, along with him, graciously give us all things?' (Romans 8:32). The Christian's ultimate response to suffering is not a philosophical argument but a person. God did not remain at a safe distance from suffering — he entered it, in the flesh, all the way to death on a cross. The cross does not explain suffering; it shows what God does in the face of it. He suffers alongside us, absorbs the worst of evil, and brings resurrection from it." },
];

const RESPONSES = [
  { response: "Classical Theism (Augustinian)", color: GREEN, thinker: "Augustine, Aquinas", summary: "Evil is a privation of good, not a created substance. God permits evil because he can bring greater goods from it. His sovereignty is comprehensive; nothing lies outside his providential ordering. The good that will ultimately result from allowed evil is beyond present comprehension.", strength: "Takes divine sovereignty seriously; maintains goodness of creation", weakness: "Can feel abstract before actual suffering; underexplains apparently gratuitous evil" },
  { response: "Open Theism", color: "#3B82F6", thinker: "Gregory Boyd, Clark Pinnock", summary: "God genuinely does not know (or chooses not to know) how free creatures will choose. The future is genuinely open. God takes risks in creating free beings. Evil results from the misuse of freedom that God genuinely did not predetermine or foreknow. God grieves evil with us.", strength: "Takes human freedom and God's emotional responsiveness seriously", weakness: "Significantly qualifies divine omniscience; many find it inconsistent with Scripture's prophetic passages" },
  { response: "Soul-Making Theodicy", color: PURPLE, thinker: "John Hick", summary: "The world is designed as an environment for spiritual formation. Struggle, suffering, and adversity are not mistakes but the necessary conditions for developing mature moral and spiritual character. A world without suffering would not allow the development of genuine virtue.", strength: "Connects suffering to growth in ways Scripture affirms", weakness: "Does not address infant death, gratuitous evil, or disproportionate suffering" },
  { response: "Protest Theodicy / Lament", color: "#EF4444", thinker: "Elie Wiesel, Walter Brueggemann", summary: "Sometimes the appropriate response is protest, not explanation. Job's three friends were rebuked for defending God too quickly; Job's honest protest was vindicated. The lament psalms give language to suffering that does not resolve it but expresses it honestly before God. Explanation sometimes silences what should be voiced.", strength: "Takes suffering seriously without minimizing it; gives voice to genuine anguish", weakness: "Not a theodicy in the explanatory sense; leaves the question open" },
];

const WITNESSES = [
  {
    id: "wolterstorff",
    name: "Nicholas Wolterstorff",
    work: "Lament for a Son (1987)",
    color: "#3B82F6",
    context: "Reformed philosopher, Yale professor. His son Eric died in a mountain-climbing accident at age 25.",
    quote: "I shall look at the world through tears. Perhaps I shall see things that dry-eyed I could not see.",
    insight: "Wolterstorff refused philosophical distancing. He wrote his grief as it was — disorienting, angry, and searching. His conclusion: suffering is not a problem to be solved but a presence to be endured alongside the God who himself wept at Lazarus's tomb. He argues that divine impassibility — the idea that God does not suffer — must be rejected: a God who cannot suffer cannot be the God of the cross.",
  },
  {
    id: "lewis",
    name: "C.S. Lewis",
    work: "A Grief Observed (1961)",
    color: GREEN,
    context: "Oxford and Cambridge scholar, Christian apologist. Written after the death of his wife Joy Davidman from cancer.",
    quote: "Where is God? When you are happy, so happy that you have no sense of needing Him... you will be welcomed with open arms. But go to Him when your need is desperate, when all other help is vain, and what do you find? A door slammed in your face.",
    insight: "Lewis, who had written confidently about suffering in 'The Problem of Pain,' discovered that his confident arguments felt hollow when he was the one in pain. A Grief Observed is the honest record of a faith under pressure — not abandoned but severely tested. He ultimately finds that grief taught him he had been turning God into a cosmic comfort rather than worshipping a real Being. His intellectual theodicy held; his emotional experience of it was far harder than he anticipated.",
  },
  {
    id: "joni",
    name: "Joni Eareckson Tada",
    work: "Joni (1976), A Place of Healing (2010)",
    color: PURPLE,
    context: "Paralyzed from the neck down at 17 in a diving accident. Has lived with quadriplegia for over 55 years, developing chronic pain in later decades.",
    quote: "God permits what he hates to accomplish what he loves.",
    insight: "Joni's theodicy is not theoretical — it has been tested daily for decades. Her answer is not that disability is good, but that God is sovereign over suffering and can accomplish purposes through it that no human wisdom could design. She distinguishes between God allowing suffering and God causing it. Her ongoing engagement with theodicy has deepened over time, especially as chronic pain added a new layer: she no longer speaks only about paralysis but about the grinding reality of never-ending physical suffering — and God's presence within it rather than removal from it.",
  },
  {
    id: "wiesel",
    name: "Elie Wiesel",
    work: "Night (1960), The Trial of God (1979)",
    color: "#EF4444",
    context: "Holocaust survivor. Lost most of his family, including his father, at Auschwitz and Buchenwald. Nobel Peace Prize laureate.",
    quote: "Never shall I forget those moments which murdered my God and my soul and turned my dreams to dust.",
    insight: "Wiesel's engagement with theodicy is the most searing: he describes standing before the hanging body of a child in the camp and hearing someone behind him ask 'Where is God?' and thinking: 'There he is — hanging on the gallows.' This is not atheism; it is protest theodicy at its limit. In 'The Trial of God,' Wiesel dramatizes a formal trial of God for his crimes against Israel — and concludes with a defense of God that is itself haunting. Wiesel never resolved theodicy; he remained a Jew arguing with God to the end, which he understood as itself a form of faithfulness.",
  },
  {
    id: "tencboom",
    name: "Corrie Ten Boom",
    work: "The Hiding Place (1971)",
    color: "#F59E0B",
    context: "Dutch Christian who sheltered Jewish refugees during Nazi occupation. Imprisoned in Ravensbruck concentration camp. Her sister Betsie died there.",
    quote: "There is no pit so deep that God's love is not deeper still.",
    insight: "Corrie's theodicy is not philosophical but experiential: she describes Betsie dying in the camp, malnourished and skeletal, but radiant — insisting that God had shown her they would take what they had learned 'out into the world.' Corrie spent the rest of her long life speaking in 60 countries, including to the very guard who had humiliated her at Ravensbruck — and being able to forgive him in person. Her theodicy is the theology of the resurrection applied to experience: the pit is real, but it is not final. God's love reached all the way down.",
  },
];

const PRACTICES = [
  { title: "Read the Book of Job", desc: "Job is the Bible's longest and most sustained engagement with the problem of innocent suffering. God rebukes Job's friends — who offered tidy explanations — and vindicates Job's honest protest. Read it slowly. Notice that God never answers Job's 'why' but shows up and restores him. The answer to suffering is a person, not an explanation.", icon: "📖" },
  { title: "Pray the Lament Psalms", desc: "A third of the Psalms are laments — raw, honest expressions of pain, confusion, and complaint addressed directly to God. Psalms 22, 44, 88 do not resolve or provide comfort; they give voice to suffering within a relationship. Using them in prayer teaches us to bring our theodicy questions to God rather than about God.", icon: "🙏" },
  { title: "Hold Explanation and Presence Together", desc: "When someone is suffering, the impulse to explain is understandable but often harmful. Job's friends sat in silence for seven days (Job 2:13) — that was their finest hour. Presence before explanation. The cross does not explain suffering; it promises that God is in it with us. Offer that before offering reasons.", icon: "🤝" },
  { title: "Don't Resolve It Too Quickly", desc: "The Bible gives theodicy resources — free will, soul-making, the cross — but does not tie them into a tidy system. Resist the urge to explain away pain too quickly, in yourself or others. Some suffering cannot be explained; it can only be endured, grieved, and brought to the God who himself endured the cross.", icon: "⚖️" },
  { title: "Point to the Resurrection", desc: "The Christian answer to suffering is not that it is meaningless but that it is not final. Death is real — but resurrection is realer. The resurrection of Jesus is the down payment on the renewal of all things, including the reversal of all that is wrong. This does not minimize present pain but refuses to let present pain have the last word.", icon: "✝️" },
  { title: "Build Theology Before Crisis", desc: "Theodicy questions hit hardest in the middle of suffering — when cognitive processing is compromised by grief and pain. Build your theology of suffering before you need it: study the cross, memorize the lament psalms, read stories of those who suffered well. Preparation is not morbidity; it is wisdom.", icon: "🏗️" },
];

type Tab = "theology" | "responses" | "witnesses" | "practices" | "journal" | "videos";

const VIDEOS = [
  { videoId: "rtkS_8VWfB0", title: "Why Does God Allow Suffering? — Tim Keller", channel: "Gospel in Life", description: "Keller's definitive lecture on the problem of evil — engaging Dostoevsky, Plantinga, and the cross as God's answer." },
  { videoId: "4Eg_di-O8nM", title: "The Problem of Evil — John Piper", channel: "Desiring God", description: "Piper engages theodicy with pastoral and theological depth, refusing easy answers while holding to God's sovereignty." },
  { videoId: "ej_6dVdJSIU", title: "Suffering and the Sovereignty of God", channel: "Ligonier Ministries", description: "R.C. Sproul walks through the classic theodicy positions and how Scripture speaks to each." },
  { videoId: "gV9JugO_5Mk", title: "How C.S. Lewis Responded to Evil and Suffering", channel: "CS Lewis Institute", description: "An exploration of Lewis's two works on suffering — the philosophical 'Problem of Pain' and the visceral 'A Grief Observed' — and what he learned between them." },
];

export default function TheodPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_theodicy_tab", "theology");
  const [selectedResponse, setSelectedResponse] = usePersistedState("vine_theodicy_selected_response", "Classical Theism (Augustinian)");
  const [selectedWitness, setSelectedWitness] = usePersistedState("vine_theodicy_selected_witness", "wolterstorff");

  const resp = RESPONSES.find(r => r.response === selectedResponse)!;
  const witness = WITNESSES.find(w => w.id === selectedWitness)!;

  type JournalEntry = { id: string; date: string; struggle: string; response: string; anchoring: string };
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(() => { try { return JSON.parse(localStorage.getItem("vine_theoj_entries") ?? "[]"); } catch { return []; } });
  const [jStruggle, setJStruggle] = useState("");
  const [jResponse, setJResponse] = useState("");
  const [jAnchoring, setJAnchoring] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_theoj_entries", JSON.stringify(journalEntries)); } catch {} }, [journalEntries]);
  function saveJournalEntry() {
    if (!jStruggle.trim() && !jResponse.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), struggle: jStruggle, response: jResponse, anchoring: jAnchoring };
    setJournalEntries(prev => [entry, ...prev]);
    setJStruggle(""); setJResponse(""); setJAnchoring("");
  }
  function deleteJournalEntry(id: string) { setJournalEntries(prev => prev.filter(e => e.id !== id)); }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔥</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theodicy: The Problem of Evil</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Why does God allow suffering and evil? This is the oldest and hardest challenge to faith. Scripture does not give a philosophical answer — it gives something more powerful: a narrative of God entering suffering and defeating it.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "responses" as const, label: "Responses", icon: "⚖️" },
            { id: "witnesses" as const, label: "Witnesses", icon: "👤" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "journal" as const, label: "My Journal", icon: "📓" },
            { id: "videos" as const, label: "Videos", icon: "▶️" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "responses" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {RESPONSES.map(r => (
                <button type="button" key={r.response} onClick={() => setSelectedResponse(r.response)}
                  style={{ padding: "8px 12px", borderRadius: 20, border: `1px solid ${selectedResponse === r.response ? r.color : BORDER}`, background: selectedResponse === r.response ? `${r.color}20` : "transparent", color: selectedResponse === r.response ? r.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {r.response}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${resp.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <h2 style={{ color: resp.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{resp.response}</h2>
                <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{resp.thinker}</span>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{resp.summary}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>STRENGTH</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{resp.strength}</p>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>WEAKNESS</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{resp.weakness}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "witnesses" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {WITNESSES.map(w => (
                <button type="button" key={w.id} onClick={() => setSelectedWitness(w.id)}
                  style={{ width: "100%", textAlign: "left", background: selectedWitness === w.id ? `${w.color}18` : CARD, border: `1px solid ${selectedWitness === w.id ? w.color : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer" }}>
                  <div style={{ color: selectedWitness === w.id ? w.color : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 3 }}>{w.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{w.work}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${witness.color}40`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: witness.color, fontWeight: 900, fontSize: 20, marginBottom: 6 }}>{witness.name}</h2>
              <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{witness.work}</div>
              <div style={{ background: BG, borderRadius: 8, padding: "10px 14px", marginBottom: 16 }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>CONTEXT</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{witness.context}</p>
              </div>
              <blockquote style={{ borderLeft: `3px solid ${witness.color}`, paddingLeft: 16, marginBottom: 16 }}>
                <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>"{witness.quote}"</p>
              </blockquote>
              <div style={{ background: `${witness.color}08`, border: `1px solid ${witness.color}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: witness.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>THEOLOGICAL INSIGHT</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{witness.insight}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>My Theodicy Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Record the struggles and questions you are bringing to God, responses that have helped, and what is anchoring your faith.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jStruggle} onChange={e => setJStruggle(e.target.value)} placeholder="The struggle or 'why' question you are carrying" rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jResponse} onChange={e => setJResponse(e.target.value)} placeholder="What response or truth has helped you?" rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jAnchoring} onChange={e => setJAnchoring(e.target.value)} placeholder="What is anchoring your faith in this season?" style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveJournalEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "11px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer", alignSelf: "flex-start" }}>Save Entry</button>
              </div>
            </div>
            {journalEntries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", padding: 32 }}>No journal entries yet. Begin bringing your hardest questions to God on paper.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {journalEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ color: PURPLE, fontWeight: 700, fontSize: 15 }}>Theodicy Reflection</span>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                    </div>
                    {entry.struggle && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}><strong>The Struggle:</strong> {entry.struggle}</p>}
                    {entry.response && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}><strong>What Helped:</strong> {entry.response}</p>}
                    {entry.anchoring && <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}><strong>Anchoring:</strong> {entry.anchoring}</p>}
                    <button type="button" onClick={() => deleteJournalEntry(entry.id)} style={{ background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "4px 12px", color: MUTED, fontSize: 12, cursor: "pointer" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Theodicy is ultimately not a problem to solve but a mystery to live through. These practices prepare us for suffering and equip us to be present with others in theirs.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
