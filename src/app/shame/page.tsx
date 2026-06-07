"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Shame vs. Guilt — A Critical Distinction", verse: "Romans 8:1", body: "Guilt says: 'I did something wrong.' Shame says: 'I am wrong — I am defective, worthless, fundamentally unacceptable.' Guilt is about behavior; shame is about identity. This distinction matters enormously theologically. The gospel addresses both, but in different ways. Guilt is resolved through forgiveness — the judicial declaration that the debt is paid. Shame is resolved through adoption — the relational declaration that you belong, that you are accepted, that your identity is not your failure." },
  { title: "Adam and Eve — Shame Is Ancient", verse: "Genesis 3:7-10", body: "The first recorded human experience after the fall is shame: 'Then the eyes of both of them were opened, and they realized they were naked; so they sewed fig leaves together' (Gen. 3:7). Shame is the oldest wound in the human story. It is the impulse to hide, to cover, to perform acceptability. And God's first response was to seek them out: 'Where are you?' — not as accusation, but as the voice of one who comes looking for the hidden." },
  { title: "The Cross Addresses Shame, Not Only Guilt", verse: "Hebrews 12:2", body: "Hebrews 12:2 says Jesus endured the cross 'scorning its shame.' The cross was designed to be maximally shaming — public, naked, slow, contemptible. Jesus entered into the deepest human experience of shame. The resurrection is not only vindication of innocence (addressing guilt) but reversal of shame — the shamed one is exalted. For the believer, union with Christ means his honor becomes yours. The shame you carry has already been carried and transformed." },
  { title: "You Are Clothed, Not Naked", verse: "Isaiah 61:10", body: "'He has clothed me with garments of salvation and arrayed me in a robe of his righteousness' (Isaiah 61:10). The shame of nakedness — the first symptom of the fall — is directly addressed in the gospel's clothing metaphor. You are not exposed. You are covered. Not by your own fig leaves (performance, reputation, achievement) but by a righteousness that comes from outside you. This is not denial of failure; it is the declaration that failure does not define your standing before God." },
  { title: "God Looks at You With Love, Not Disgust", verse: "Zephaniah 3:17", body: "'The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing' (Zephaniah 3:17). The antidote to shame is not achievement or performance but the gaze of the Father — the one whose opinion defines reality. When Jesus was baptized, before he had done anything in his ministry, the Father said: 'This is my Son, whom I love; with him I am well pleased.' Your acceptance by the Father is not contingent on your record." },
];

const VOICES = [
  { id: "brown", name: "Brené Brown", era: "1965–present", context: "Research professor; University of Houston; author on vulnerability and shame", bio: "Brown's research on shame and vulnerability, while coming from a social science rather than explicitly theological framework, has influenced the broader conversation about shame in ways that have significantly impacted Christian pastoral care. Her foundational insight — that shame thrives in secrecy and silence, and is healed by empathy and connection — is profoundly consistent with a biblical theology of community, confession, and grace.", quote: "Shame hates it when we reach out and tell our story. It hates having words wrapped around it — it can't survive being shared. Shame loves secrecy, silence, and judgment. If you put shame in a Petri dish, it needs three things to grow exponentially: secrecy, silence, and judgment.", contribution: "Brown's research operationalized what biblical wisdom about confession and community has always known: shame dissolves in the light of empathy and belonging. Her work gave the church a social-science framework to understand and address shame in pastoral and counseling contexts." },
  { id: "allender", name: "Dan Allender", era: "1952–present", context: "Psychologist; The Allender Center; author of The Wounded Heart and Bold Love", bio: "Allender is one of the most important Christian psychologists working on shame, trauma, and abuse. His The Wounded Heart directly addresses the shame experienced by survivors of sexual abuse. He developed a framework for understanding how the heart defends against shame through three primary styles — the Good Girl/Boy, the Tough Guy, and the Comedian — each a false self constructed to avoid being known as shameful.", quote: "Shame is the deep sense that you are unacceptable because of something you did, something done to you, or something associated with you. The effect of shame is the creation of a false self to manage others' perception of you, while your true self remains hidden.", contribution: "Allender connected the theology of redemption and new creation to the psychology of shame in ways that provided both clinical and pastoral frameworks. His work opened conversations in the church about abuse, trauma, and the deep healing available through the gospel — not just for cognitive beliefs but for the experienced self." },
  { id: "smedes", name: "Lewis Smedes", era: "1921–2002", context: "Christian Reformed theologian; Fuller Seminary", bio: "Smedes wrote Shame and Grace (1993), one of the most careful theological treatments of shame from a Christian perspective. He distinguished between healthy and toxic shame, traced shame's effects on the self, and then explored how grace — specifically the grace of being accepted, not despite but within our shameful reality — is the specific remedy for shame's deepest wound.", quote: "The grace that rescues us from shame is not a feel-good, cheap-grace that tells us that we are not so bad after all. Grace is what God gives us when he accepts us while we are exactly as bad as we feared we were. It is the acceptance of the unacceptable.", contribution: "Smedes grounded the healing of shame not in self-esteem or achievement but in divine acceptance — the recognition that God's favor does not wait for us to become acceptable. His distinction between healthy shame (which can guide behavior) and toxic shame (which wounds identity) gave pastoral counselors important diagnostic tools." },
  { id: "curt-thompson", name: "Curt Thompson", era: "1959–present", context: "Psychiatrist; author of The Soul of Shame", bio: "Thompson, a Christian psychiatrist, wrote The Soul of Shame (2015), which integrates interpersonal neurobiology with biblical theology to understand shame. His central thesis is that shame is the primary vehicle the enemy uses to disrupt human flourishing and that the healing of shame requires both neurological repair (through attunement, connection, and narrative) and theological reorientation (through the gospel).", quote: "Shame is the most disruptive emotion we know. It is the experience of believing we are bad, broken, or less than — and of fearing we will be discovered. But it is also one of the most universal. You are not the only one who feels it, and you are not condemned to live in it.", contribution: "Thompson's integration of neuroscience and theology gave the church a more complete picture of why shame is so persistent and how it changes the brain, and therefore why healing requires not just intellectual understanding of the gospel but relational, embodied, experiential encounter with the God who sees and accepts." },
];

const PRACTICES = [
  { title: "Name the Shame", icon: "🔦", color: PURPLE, desc: "Shame lives in the dark and dies in the light. The first step is identifying what specific shame you carry — not vague unworthiness but the particular belief: 'I am shameful because ___.' Name it as specifically as you can. What do you most fear others knowing about you?", steps: ["In a private place, finish this sentence: 'I am ashamed because...'", "Notice the physical sensation: where in your body do you feel shame?", "Resist the urge to argue with it or defend yourself against it — just name it", "Bring it to God: 'This is what I believe about myself. Is it true?'"] },
  { title: "Receive the Gaze of the Father", icon: "👁️", color: GREEN, desc: "Shame is healed by love, not achievement. The practice of receiving the Father's gaze — slowly, with attention — rewires the shame response over time. This is not wishful thinking; it is the deliberate attention to what is actually true.", steps: ["Read Zephaniah 3:17 slowly, inserting your name", "Ask: 'What does the Father actually see when he looks at me?'", "Let your imagination picture the Father's face — not of disappointment but of delight", "Stay in that awareness for two minutes — this is uncomfortable; stay anyway"] },
  { title: "Confess to a Safe Person", icon: "🤝", color: "#F59E0B", desc: "James 5:16 says to 'confess your sins to one another.' This is not primarily a legal transaction but a relational one — bringing the shameful thing into the light of another person's empathic response. Being known and accepted in your failure is one of the most powerful experiences of grace available in this life.", steps: ["Identify one person who has demonstrated trustworthiness and discretion", "Ask: 'Can I tell you something I'm ashamed of?'", "Say it — and let the response land. Their acceptance is a tangible expression of God's", "If you don't have such a person, a counselor or spiritual director is the next step"] },
  { title: "Distinguish Shame from Guilt", icon: "⚖️", color: "#EF4444", desc: "When you feel the familiar heaviness, ask yourself: 'Is this guilt (I did something wrong and need to confess and make it right) or shame (I am wrong, defective, unacceptable)?' Guilt can be confessed and resolved. Shame requires different work — identity repair, not just behavioral correction.", steps: ["Ask: 'Am I feeling bad about what I did, or about who I am?'", "If guilt: confess specifically, receive forgiveness, make amends where appropriate", "If shame: resist the impulse to fix it with performance", "Speak truth about your identity: 'I am a child of God. My failure does not define me'"] },
];

const SCRIPTURE = [
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Isaiah 61:10", text: "I delight greatly in the LORD; my soul rejoices in my God. For he has clothed me with garments of salvation and arrayed me in a robe of his righteousness." },
  { verse: "Psalm 34:5", text: "Those who look to him are radiant; their faces are never covered with shame." },
  { verse: "Zephaniah 3:17", text: "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing." },
  { verse: "Hebrews 4:16", text: "Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need." },
  { verse: "1 John 3:20", text: "If our hearts condemn us, we know that God is greater than our hearts, and he knows everything." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function ShamePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_shame_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_shame_voice", "smedes");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type ShameJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [shameJournal, setShameJournal] = useState<ShameJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_shamej_entries") ?? "[]"); } catch { return []; } });
  const [jsFeeling, setJsFeeling] = useState("");
  const [jsTruth, setJsTruth] = useState("");
  const [jsStep, setJsStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_shamej_entries", JSON.stringify(shameJournal)); } catch {} }, [shameJournal]);
  function saveShameEntry() {
    if (!jsFeeling.trim() && !jsTruth.trim()) return;
    setShameJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jsFeeling, truth: jsTruth, step: jsStep }, ...prev]);
    setJsFeeling(""); setJsTruth(""); setJsStep("");
  }
  function deleteShameEntry(id: string) { setShameJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" },
    { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" },
    { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" },
    { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ background: "linear-gradient(180deg, rgba(107,79,187,0.08) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>🌒</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Shame & the Gospel</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.75 }}>
          Shame whispers that you are fundamentally unacceptable. The gospel says otherwise.
          Theological foundations, expert voices, and practices for the journey out of hiding.
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
              <div style={{ marginBottom: 6 }}>
                <span style={{ fontSize: 22, fontWeight: 900 }}>{voice.name}</span>
                <span style={{ color: MUTED, fontSize: 13, marginLeft: 12 }}>{voice.era}</span>
              </div>
              <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{voice.context}</div>
              <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{voice.bio}</p>
              <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 18, margin: "0 0 20px", color: "#e0e0f0", fontSize: 15, fontStyle: "italic", lineHeight: 1.75 }}>
                &ldquo;{voice.quote}&rdquo;
              </blockquote>
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Shame Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Write in this space what you hide from others. Name the shame, speak one true thing from God, take one small step toward the light.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jsFeeling} onChange={e => setJsFeeling(e.target.value)}
                  placeholder="What shame am I carrying? (Name it specifically — this is private)"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jsTruth} onChange={e => setJsTruth(e.target.value)}
                  placeholder="One true thing God says about me that contradicts this shame..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jsStep} onChange={e => setJsStep(e.target.value)}
                  placeholder="One small step toward the light today..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveShameEntry}
                  style={{ alignSelf: "flex-start", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {shameJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Shame loses power when it&apos;s named before God.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {shameJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteShameEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
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
              { videoId: "psN1DORYYV0", title: "The Gift of Imperfection — Brené Brown on Shame", channel: "TED / Brené Brown", description: "Brown's research on shame and vulnerability — how shame thrives in secrecy and is healed by empathy and connection. Essential viewing for understanding the psychology of shame from a researcher who integrates courage, compassion, and connection." },
              { videoId: "RZWf2_2L2v8", title: "Shame and the Gospel", channel: "The Gospel Coalition", description: "A theological treatment of how the gospel specifically addresses shame — not just guilt — and what it means that Jesus bore our shame on the cross and was raised in glory." },
              { videoId: "1nzj7Sf395o", title: "Healing the Shame That Binds You", channel: "CCEF", description: "Dan Allender on shame, the false selves we construct to protect against being known, and how the gospel offers a true self — known, accepted, and beloved." },
              { videoId: "4yRlBMcNNjY", title: "Curt Thompson on the Soul of Shame", channel: "Curt Thompson", description: "Thompson integrates interpersonal neurobiology and biblical theology to explain why shame is so powerful and what the healing process looks like — in community, over time, through attunement and the gospel." },
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
