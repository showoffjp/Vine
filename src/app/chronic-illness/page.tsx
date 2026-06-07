"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Thorn in the Flesh — Paul's Chronic Condition", verse: "2 Corinthians 12:7-9", body: "Paul describes a 'thorn in the flesh' — a persistent physical affliction he asked God to remove three times. God's response was not healing but presence: 'My grace is sufficient for you, for my power is made perfect in weakness.' Paul arrived at a theology of chronic limitation: 'Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.' God does not always heal in this life. He always provides grace." },
  { title: "Chronic Illness Is Not Punishment for Sin", verse: "John 9:3", body: "Jesus directly addressed the assumption that suffering equals sin when he said of the man born blind: 'Neither this man nor his parents sinned, but this happened so that the works of God might be displayed in him.' This does not resolve the mystery of suffering — it refuses the equation that suffering = divine punishment. Chronic illness is not God's judgment on your faith or your past." },
  { title: "The Body Will Be Redeemed", verse: "Romans 8:23", body: "Paul describes believers as 'groaning inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies' (Romans 8:23). The resurrection is bodily — not an escape from the physical but a transformation of it. The final state of the redeemed includes a body that no longer groans, aches, or fails. This is not wishful thinking; it is the specific promise of the gospel. Your body's suffering now is not its final word." },
  { title: "Weakness Reveals the Source of Strength", verse: "2 Corinthians 4:7", body: "'We have this treasure in jars of clay to show that this all-surpassing power is from God and not from us' (2 Corinthians 4:7). Fragility and limitation are not accidental to the Christian life — they are part of how God's power is made visible. A life of chronic illness, lived in faith, trust, and continued love, is a profoundly powerful witness to the reality of God's sustaining grace. The jar is cracked — and the light gets in." },
];

const VOICES = [
  { id: "tada", name: "Joni Eareckson Tada", era: "1949–present", context: "Quadriplegic since age 17; founder of Joni and Friends", bio: "Tada was paralyzed in a diving accident at 17 and has lived as a quadriplegic for over 55 years. Her decades of writing and ministry on disability and suffering have made her one of the most credible and influential voices on the subject of chronic physical limitation. Her theology of suffering — shaped by her own unrelenting experience of it — insists on both the reality of the pain and the sufficiency of grace.", quote: "I would rather be in this wheelchair knowing Jesus as I do than be on my feet without him. Not because the wheelchair is good — it is not — but because the person of Jesus is better than any physical comfort I could have in the absence of him.", contribution: "Tada modeled a theology of suffering that refuses both cheap optimism ('just trust God and you'll be healed') and hopeless despair. Her decades in a wheelchair — sometimes resenting it, sometimes at peace — demonstrated what it looks like to hold pain and faith simultaneously." },
  { id: "vroegop", name: "Mark Vroegop", era: "1973–present", context: "Pastor; Dark Clouds, Deep Mercy: Discovering the Grace of Lament", bio: "Vroegop's book on lament emerged from the experience of losing a daughter shortly after birth and navigating years of infertility and grief. His theological framework — lament as the honest, faith-filled cry of those suffering to the God who hears — provides a language and a practice for those with chronic illness who feel the distance between what they believed God would do and what their body continues to experience.", quote: "Lament is the language of those who still believe. It is the cry of the person who has not given up on God but who is not pretending that everything is fine. If you are suffering and still praying, you are already doing lament — even if you don't have the language for it.", contribution: "Vroegop recovered the practice of lament for evangelical Christians who had been taught that negative emotions in prayer were evidence of weak faith. His work gave suffering people permission to be honest with God and framework for how to do so." },
  { id: "ruth", name: "John Swinton", era: "1957–present", context: "Professor of practical theology; University of Aberdeen; Raging with Compassion", bio: "Swinton's Raging with Compassion (2007) is one of the most serious theological engagements with evil and suffering from within the Christian tradition. His pastoral theology addresses how communities of faith can accompany those who suffer over the long term — not with explanations but with faithful presence.", quote: "The most important thing a community of faith can offer to those who suffer chronically is not an explanation but a presence — the willingness to stay, to weep, to be bored by the repetition of suffering, and to refuse to abandon. Presence is the primary form of pastoral care.", contribution: "Swinton challenged churches to move from problem-solving pastoral care (fixing the theological problem of suffering) to presence-centered care (accompanying the sufferer faithfully over time). This is especially important for chronic illness, where there is no quick fix." },
];

const PRACTICES = [
  { title: "Grieve What You Have Lost", icon: "💧", color: PURPLE, desc: "Chronic illness involves ongoing losses: what your body could once do, the future you imagined, relationships affected by your limitations, the life of spontaneity or normalcy you can no longer access. These losses are real and deserve real grief.", steps: ["Name specifically what you have lost — be honest and complete", "Resist the pressure to perform gratitude before you have grieved", "Find a therapist or grief group that understands chronic illness grief", "Grief and faith are not mutually exclusive — they coexist in the psalms"] },
  { title: "Ask God Honest Questions", icon: "🙏", color: GREEN, desc: "The psalms of lament are full of direct questions to God: 'Why, LORD, do you stand far off?' (Ps 10:1). 'How long, LORD? Will you forget me forever?' (Ps 13:1). God is not threatened by your questions. He did not rebuke David, Jeremiah, or Job for asking them.", steps: ["Write your honest questions to God — don't soften them", "Read Psalm 13 and Psalm 88 as models of honest lament", "Ask your question out loud in prayer — even if you don't feel heard", "Trust that the one who made you can handle your honesty"] },
  { title: "Build Your Support System", icon: "👥", color: "#F59E0B", desc: "Chronic illness is a long-distance race that requires a team. Social isolation is both a risk factor for worsening health and a consequence of chronic illness. Deliberately building and maintaining support is a medical and spiritual necessity.", steps: ["Identify 2-3 people who can be reliable, long-term companions in your illness", "Be specific about what you need: 'I need you to check in weekly, not fix anything'", "Find a chronic illness support group (online or in person)", "Give people permission to stay — many drift because they don't know what you need"] },
  { title: "Receive God's Grace for Today", icon: "☀️", color: "#3B82F6", desc: "Chronic illness is a present-tense problem that tempts toward either past grief or future dread. God's grace is given in daily portions — 'new every morning' (Lamentations 3:23). The manna in the wilderness was given day by day. Ask for today's portion.", steps: ["At the start of each day: 'Lord, give me today's grace for today's pain'", "Resist the temptation to calculate how you will survive the next year — just today", "Notice small gifts: a good hour, a moment of comfort, a conversation", "End the day: 'Thank you for today's grace.' Even on hard days, it was there"] },
];

const SCRIPTURE = [
  { verse: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me." },
  { verse: "Romans 8:18", text: "I consider that our present sufferings are not worth comparing with the glory that will be revealed in us." },
  { verse: "Psalm 46:1", text: "God is our refuge and strength, an ever-present help in trouble." },
  { verse: "Isaiah 40:29-31", text: "He gives strength to the weary and increases the power of the weak... those who hope in the LORD will renew their strength." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
  { verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function ChronicIllnessPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_chronic_illness_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_chronic_illness_voice", "tada");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type ChronicJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [chronicJournal, setChronicJournal] = useState<ChronicJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_chronicj_entries") ?? "[]"); } catch { return []; } });
  const [jcFeeling, setJcFeeling] = useState("");
  const [jcTruth, setJcTruth] = useState("");
  const [jcStep, setJcStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_chronicj_entries", JSON.stringify(chronicJournal)); } catch {} }, [chronicJournal]);
  function saveChronicEntry() {
    if (!jcFeeling.trim() && !jcTruth.trim()) return;
    setChronicJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jcFeeling, truth: jcTruth, step: jcStep }, ...prev]);
    setJcFeeling(""); setJcTruth(""); setJcStep("");
  }
  function deleteChronicEntry(id: string) { setChronicJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ background: "linear-gradient(180deg, rgba(58,125,86,0.07) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>🌿</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Chronic Illness & Faith</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.75 }}>
          God does not always heal in this life. He always provides sufficient grace.
          Theological foundations and pastoral care for those living with ongoing physical suffering.
        </p>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, margin: "28px 0", overflowX: "auto" }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "none", background: tab === t.id ? GREEN : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>
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
                  <span style={{ fontSize: 12, color: GREEN, fontWeight: 700, whiteSpace: "nowrap", background: `${GREEN}15`, border: `1px solid ${GREEN}30`, borderRadius: 6, padding: "3px 10px" }}>{item.verse}</span>
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
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 14, marginBottom: 10 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Journey Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Record where you are today — physically, emotionally, spiritually. Over time this becomes a record of God&apos;s sustaining grace.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jcFeeling} onChange={e => setJcFeeling(e.target.value)}
                  placeholder="How am I doing today? (honest, specific — body, emotions, spirit)"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jcTruth} onChange={e => setJcTruth(e.target.value)}
                  placeholder="One true thing about God or his grace that I'm clinging to..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jcStep} onChange={e => setJcStep(e.target.value)}
                  placeholder="One small thing that helped or gave hope today..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveChronicEntry}
                  style={{ alignSelf: "flex-start", background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {chronicJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Your daily experience of God&apos;s grace is worth recording.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {chronicJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteChronicEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
                    </div>
                    {e.feeling && <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>{e.feeling}</p>}
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
              { videoId: "7KMPN9OLoNo", title: "Joni Eareckson Tada on Suffering and God's Grace", channel: "Desiring God", description: "Joni speaks from over five decades in a wheelchair about what she has learned of God's grace in weakness, the theology of the resurrection body, and why she holds suffering and joy together." },
              { videoId: "y-DQH-M1HuM", title: "When God Doesn't Heal", channel: "The Gospel Coalition", description: "A pastoral treatment of the question every chronically ill Christian wrestles with: what do I do with unanswered prayers for healing? What does God's silence mean?" },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on lament as the biblical language for those who are suffering and still believe — how to pray honestly in the darkness of chronic pain and loss." },
              { videoId: "jJPVNIAFmvA", title: "The Theology of Disability and Weakness", channel: "Joni and Friends", description: "A theological framework for understanding disability and chronic illness as part of God's design, not a deviation from it — and what the church's calling is toward those who suffer." },
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
