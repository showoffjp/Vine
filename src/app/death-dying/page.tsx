"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Death Is the Last Enemy — But a Defeated One", verse: "1 Corinthians 15:26", body: "Paul calls death 'the last enemy to be destroyed' (1 Corinthians 15:26). It is not celebrated, spiritualized away, or minimized. It is an enemy — a real evil in a fallen world. But it is a defeated enemy. The resurrection of Jesus is the first fruit, the proof-of-concept, the guarantee of what awaits those in him. The sting of death has been drawn (1 Corinthians 15:55-57). Death is real and terrible — and it does not have the last word." },
  { title: "Preparing for Death Is a Christian Discipline", verse: "Psalm 90:12", body: "Moses prayed: 'Teach us to number our days, that we may gain a heart of wisdom' (Psalm 90:12). The medieval church practiced Ars Moriendi — the art of dying well. Christians throughout history understood that preparation for death was a spiritual discipline, not a morbid preoccupation. To live well you must have come to terms with the fact that you will die. Most modern people have never done this. The Christian tradition has enormous resources for it." },
  { title: "Jesus Wept at the Tomb — Grief Is Holy", verse: "John 11:35", body: "'Jesus wept' (John 11:35) — the shortest verse in the Bible and one of the most theologically significant. In the full knowledge that he was about to raise Lazarus, Jesus still wept. He wept with Mary. He was 'deeply moved' — the Greek word conveys something closer to anger or indignation than quiet sorrow. Death is not what God designed, and Jesus weeps with those who weep. Grief is not a failure of faith; it is a holy response to an enemy." },
  { title: "The Dying Need Presence, Not Performance", verse: "Job 2:13", body: "When Job's friends first arrived, they 'sat on the ground with him for seven days and seven nights. No one said a word to him, because they saw how great his suffering was.' The most important thing they did for Job was the silent presence at the beginning — before they opened their mouths and made it worse. Those who are dying or losing someone rarely need theology delivered. They need someone to stay." },
  { title: "Heaven Is Bodily and Relational — Not Disembodied Floating", verse: "Revelation 21:1-4", body: "The New Testament's vision of eternal life is not disembodied souls floating in clouds. It is resurrection — bodily, communal, and earthly in a renewed sense. 'A new heaven and a new earth' (Revelation 21:1). 'The dwelling of God is with man' (21:3). We will know one another, work, worship, and enjoy the new creation — in resurrected bodies. This is not metaphor; it is the specific promise of the gospel. The ache for connection and presence you feel at death does not disappear — it is fulfilled." },
];

const VOICES = [
  { id: "lewis", name: "C.S. Lewis", era: "1898–1963", context: "Oxford/Cambridge don; A Grief Observed", bio: "Lewis lost his wife Joy to cancer in 1960 and recorded the experience in A Grief Observed — one of the most honest documents of grief in Christian literature. He described the experience of bereavement as a door slammed in the face, a sense of God's absence exactly when he was most needed. The book does not arrive at tidy resolution — it traces the uneven, non-linear, often agonizing path through grief to a kind of fragile trust.", quote: "Her absence is like the sky, spread over everything. But no, that is not quite accurate. There is one place where her absence comes locally home to me, and it is a place I can't avoid. I mean my own mind. I had such a different picture of it. The act of living is different all through. Her absence is everywhere.", contribution: "A Grief Observed became a touchstone precisely because Lewis refused to edit his doubt, perform faith, or arrive at premature resolution. He modeled honest engagement with God in the darkness of grief — and the slow, non-linear way through it." },
  { id: "lucado", name: "Max Lucado", era: "1955–present", context: "Pastor; Grace Chapel, San Antonio; bestselling author on comfort and eternity", bio: "Lucado's books on death, heaven, and grief — including When God Whispers Your Name, Heaven: Our Enduring Hope, and Anxious for Nothing — have reached tens of millions of readers who needed the gospel's comfort in accessible, narrative form. His gift for telling true stories in ways that make theological hope viscerally real has been a pastoral resource for countless people sitting with the dying or grieving.", quote: "God's definition of what matters is pretty straightforward: He matters, people matter, and the rest is debatable. The death of someone you love forces everything else to a stop and asks: what are you building your life on?", contribution: "Lucado's pastoral writing gave ordinary Christians language for hope in death — not abstract theological hope but felt, narrative, story-shaped hope that they could hold at the bedside of the dying." },
  { id: "neuhaus", name: "Richard John Neuhaus", era: "1936–2009", context: "Lutheran-turned-Catholic priest; author of As I Lay Dying", bio: "Neuhaus's As I Lay Dying (originally published as A Death on a Friday Afternoon) was written after he came very close to death from abdominal surgery and experienced an encounter he described as lying at the border between life and death. His theological reflections on dying, death, and the hope of resurrection — rooted in the Passion narrative — are among the most serious and beautiful meditations on the subject in recent Christian writing.", quote: "It is still true that before a crucifixion, an Easter. It is still true that death is not the last word. The final word is life — life that is stronger than death, light that overcomes darkness, love that drives out fear.", contribution: "Neuhaus brought a Catholic intellectual's depth, a convert's gratitude, and a dying man's honesty to the theology of death and resurrection. His work helped recover a robust Christian theology of dying well." },
];

const PRACTICES = [
  { title: "Have the Conversation You Need to Have", icon: "💬", color: GREEN, desc: "Most people die with conversations unfinished. The person who is dying — and those who love them — often need specific things said: forgiveness asked or given, gratitude expressed, love declared, blessing spoken. Don't assume there will be more time. Say it now.", steps: ["Ask: 'Is there anything I need to say to this person before they (or I) die?'", "Say it: forgiveness, gratitude, love, blessing", "If you are the dying person: is there anything you need to say to those you will leave?", "Record it in writing if speech is difficult — a letter is a gift"] },
  { title: "Prepare Practically", icon: "📋", color: PURPLE, desc: "Practical preparation — a will, advance directive, documented wishes — is an act of love toward those you will leave. It removes the burden of impossible decisions from grieving family members. It is also an act of faith: acknowledging reality without being controlled by it.", steps: ["Create or update your will if you have not done so", "Complete an advance healthcare directive (living will)", "Tell your family your wishes for end-of-life care", "Document passwords, accounts, and important information"] },
  { title: "Sit With the Dying", icon: "🤝", color: "#F59E0B", desc: "Presence is the primary pastoral gift to the dying. You do not need to say anything brilliant. You do not need to explain anything. You need to stay. Hold a hand. Read a psalm. Sit in silence. The person who is dying knows whether the people around them are present or performing.", steps: ["Show up without agenda — being there is the gift", "Ask: 'Is there anything you'd like me to read, say, or pray?'", "If they want silence, be silent — don't fill the space with words", "Read Psalm 23 slowly aloud; it is the psalm of dying well"] },
  { title: "Allow Yourself to Grieve After", icon: "💧", color: "#EF4444", desc: "Western culture is profoundly impatient with grief. After the first few weeks, mourners are expected to be 'getting back to normal.' There is no normal anymore. Grief has no schedule. The first year is typically the hardest — every first (birthday, holiday, anniversary) without them is a fresh wound.", steps: ["Don't impose a timeline on your grief", "Find a grief group or counselor if the grief becomes isolating", "Mark anniversaries and significant dates intentionally", "Tell others: 'I am still grieving' — you have permission to say so"] },
];

const SCRIPTURE = [
  { verse: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
  { verse: "John 11:25-26", text: "Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die.'" },
  { verse: "Romans 8:38-39", text: "For I am convinced that neither death nor life... will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
  { verse: "1 Thessalonians 4:13-14", text: "Brothers and sisters, we do not want you to be uninformed about those who sleep in death... for we believe that Jesus died and rose again, and so we believe that God will bring with Jesus those who have fallen asleep in him." },
  { verse: "2 Corinthians 5:1", text: "For we know that if the earthly tent we live in is destroyed, we have a building from God, an eternal house in heaven, not built by human hands." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function DeathDyingPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_death_dying_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_death_dying_voice", "lewis");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type DeathJE = { id: string; date: string; reflection: string; truth: string; step: string };
  const [deathJournal, setDeathJournal] = useState<DeathJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_deathj_entries") ?? "[]"); } catch { return []; } });
  const [jddReflection, setJddReflection] = useState("");
  const [jddTruth, setJddTruth] = useState("");
  const [jddStep, setJddStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_deathj_entries", JSON.stringify(deathJournal)); } catch {} }, [deathJournal]);
  function saveDeathEntry() {
    if (!jddReflection.trim() && !jddTruth.trim()) return;
    setDeathJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), reflection: jddReflection, truth: jddTruth, step: jddStep }, ...prev]);
    setJddReflection(""); setJddTruth(""); setJddStep("");
  }
  function deleteDeathEntry(id: string) { setDeathJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ background: "linear-gradient(180deg, rgba(107,79,187,0.07) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>☁️</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Death, Dying & Hope</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.75 }}>
          Death is the last enemy — and a defeated one. Theology for those facing death,
          caring for the dying, and walking through grief.
        </p>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, margin: "28px 0", overflowX: "auto" }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {THEOLOGY.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, margin: 0, flex: 1, paddingRight: 16 }}>{item.title}</h3>
                  <span style={{ fontSize: 12, color: PURPLE, fontWeight: 700, whiteSpace: "nowrap", background: `${PURPLE}15`, border: `1px solid ${PURPLE}30`, borderRadius: 6, padding: "3px 10px" }}>{item.verse}</span>
                </div>
                <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {VOICES.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${selectedVoice === v.id ? GREEN : BORDER}`, background: selectedVoice === v.id ? `${GREEN}18` : "transparent", color: selectedVoice === v.id ? GREEN : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {v.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ marginBottom: 6 }}><span style={{ fontSize: 22, fontWeight: 900 }}>{voice.name}</span><span style={{ color: MUTED, fontSize: 13, marginLeft: 12 }}>{voice.era}</span></div>
              <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{voice.context}</div>
              <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{voice.bio}</p>
              <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 18, margin: "0 0 20px", color: "#e0e0f0", fontSize: 15, fontStyle: "italic", lineHeight: 1.75 }}>&ldquo;{voice.quote}&rdquo;</blockquote>
              <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Contribution</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{voice.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PRACTICES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{p.icon}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.steps.map((s, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: p.color, fontWeight: 900, fontSize: 13, minWidth: 20 }}>{j + 1}.</span>
                      <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.65 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {SCRIPTURE.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: PURPLE, fontWeight: 800, fontSize: 14, marginBottom: 10 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Whether you are facing your own death, loving someone who is dying, or grieving a loss — write here. Your reflections matter.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jddReflection} onChange={e => setJddReflection(e.target.value)}
                  placeholder="What am I feeling or thinking about death, dying, or grief right now?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jddTruth} onChange={e => setJddTruth(e.target.value)}
                  placeholder="One true thing I'm holding about resurrection hope or God's presence..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jddStep} onChange={e => setJddStep(e.target.value)}
                  placeholder="One conversation or step I need to take..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveDeathEntry}
                  style={{ alignSelf: "flex-start", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {deathJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Write what is on your heart.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {deathJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteDeathEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
                    </div>
                    {e.reflection && <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>{e.reflection}</p>}
                    {e.truth && <p style={{ color: GREEN, fontSize: 13, lineHeight: 1.65, marginBottom: 6 }}>✝ {e.truth}</p>}
                    {e.step && <p style={{ color: PURPLE, fontSize: 13, fontStyle: "italic" }}>→ {e.step}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { videoId: "8VrRy9AqCfc", title: "What Happens When We Die? A Biblical Theology", channel: "The Gospel Coalition", description: "A careful biblical and theological treatment of what the Bible actually teaches about death, the intermediate state, resurrection, and eternal life — clearing up common misconceptions." },
              { videoId: "GxbPeHHxhCU", title: "When God Takes Someone We Love — C.S. Lewis on Grief", channel: "Desiring God", description: "Reflections on A Grief Observed — C.S. Lewis's raw, honest account of grief after his wife's death — and what it teaches us about God, grief, and the path through loss." },
              { videoId: "KtLdxJcLFpE", title: "Heaven: Our Enduring Hope", channel: "Max Lucado", description: "Lucado on the resurrection hope — what heaven actually looks like according to the New Testament, why it matters for how we grieve, and how to comfort those who are dying." },
              { videoId: "A_9ADdvkC_o", title: "Dying Well — The Art of a Good Death", channel: "The Colossian Forum", description: "A theological and practical conversation about dying well — what the Christian tradition has called Ars Moriendi, the art of dying — and how Christians can prepare for and accompany others through death." },
            ].map(v => (
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

      </div>
      </main>
      <Footer />
    </div>
  );
}
