"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Bible Is a Trauma-Saturated Book", verse: "Psalm 22:1-2", body: "The Bible is not a sanitized spiritual guidebook — it is a record of people encountering violence, exile, loss, abuse, betrayal, and terror. Joseph was sold into slavery by his brothers. Hagar was cast into the wilderness. The survivors of Jerusalem watched the city burn and their children die of starvation (Lamentations). The psalms document the raw aftermath of catastrophe. The Bible takes trauma seriously because God takes human suffering seriously." },
  { title: "Jesus Bore the Wounds — and Kept Them", verse: "John 20:27", body: "After the resurrection, Jesus still had wounds. When Thomas needed to see and touch them, Jesus offered them. The resurrection did not erase the trauma of the cross — it transformed it. This is profoundly important for survivors of trauma: healing does not mean the wounds disappear. It means they no longer define or control you. The resurrected Christ still carried his scars — but they no longer held him in the grave." },
  { title: "Trauma Is Not a Punishment for Sin", verse: "John 9:2-3", body: "When the disciples asked Jesus about the man born blind — 'Who sinned, this man or his parents?' — Jesus refused both options: 'Neither this man nor his parents sinned.' Trauma does not mean God is punishing you. It does not mean you failed spiritually. It does not mean God is absent. The book of Job dismantled this equation three thousand years ago. Suffering is not necessarily diagnostic of sin." },
  { title: "Lament Is Not the Absence of Faith", verse: "Psalm 88:13-14", body: "Psalm 88 is the most unresolved psalm in the Bible. It ends: 'Why, LORD, do you reject me and hide your face from me?' — and there is no resolution, no turnaround, no 'but I will trust you.' This psalm is in the Bible. The experience of God as absent or hidden in the aftermath of trauma is a biblical experience. God does not require you to have neat resolution to draw near to him." },
  { title: "Healing Is a Process, Not an Event", verse: "Isaiah 42:3", body: "'A bruised reed he will not break, and a smoldering wick he will not snuff out' (Isaiah 42:3). The metaphor is of something fragile, barely alive, at the edge of breaking. God's response is not to force performance but to tend with extraordinary gentleness. Healing from trauma is rarely linear, rarely quick, and almost never achieved alone. The slow, non-linear, often agonizing process of recovery is exactly the territory where God meets the fragile with gentleness." },
];

const VOICES = [
  { id: "allender", name: "Dan Allender", era: "1952–present", context: "Psychologist; Allender Center; The Wounded Heart", bio: "Allender is one of the foundational figures in Christian trauma care. His The Wounded Heart addressed sexual abuse at a time when the church largely avoided the subject, naming both the wound and the pathway toward healing with theological clarity and psychological depth. His framework insists that healing requires telling the true story — not just the sanitized version — and receiving it in the presence of a trustworthy witness.", quote: "The path to healing is not around your story but through it. You must tell the truth about what happened, to someone who can bear to hear it, and receive their response. This is why healing is never solitary. It requires a witness.", contribution: "Allender opened the church to honest engagement with sexual trauma by refusing to minimize or spiritualize away the damage. His work shaped an entire generation of Christian counselors and pastors toward trauma-informed care." },
  { id: "van-der-kolk", name: "Bessel van der Kolk", era: "1943–present", context: "Psychiatrist; The Body Keeps the Score", bio: "Van der Kolk's The Body Keeps the Score (2014) is among the most important books on trauma in recent decades. His central thesis — that trauma is stored in the body, not just the mind — has profound implications for how healing happens. It is not sufficient to cognitively understand what happened; the body must also be engaged through somatic work, EMDR, yoga, movement, and other embodied modalities.", quote: "Traumatized people chronically feel unsafe inside their bodies: the past is alive in the form of gnawing interior discomfort. Their bodies are constantly bombarded by visceral warning signs, and, to control these processes, they often become expert at ignoring their gut feelings and numbing awareness of what is played out inside.", contribution: "Van der Kolk's work revolutionized trauma treatment by insisting on embodied healing and helped Christian counselors understand why Scripture, prayer, and cognitive reframing alone are often insufficient — the body's traumatic memory must also be addressed." },
  { id: "judith-herman", name: "Judith Herman", era: "1942–present", context: "Psychiatrist; Harvard Medical School; Trauma and Recovery", bio: "Herman's Trauma and Recovery (1992) established the framework of complex PTSD and identified the three-stage model of trauma recovery: safety, mourning and remembrance, and reconnection with ordinary life. Her work demonstrated that recovery from complex trauma (repeated abuse, captivity, domestic violence) follows different pathways than single-incident trauma and requires specialized approaches.", quote: "The fundamental stages of recovery are establishing safety, reconstructing the trauma story, and restoring the connection between survivors and their community. These three stages are not strictly sequential; they form a dialectical process that cycles back and forth.", contribution: "Herman's safety-mourning-reconnection model gave both secular and Christian counselors a framework for understanding the stages of trauma recovery and why some interventions (like pressure to forgive too quickly) can re-traumatize rather than heal." },
];

const PRACTICES = [
  { title: "Safety Before Processing", icon: "🛡️", color: GREEN, desc: "The first requirement for healing is physical and psychological safety. Attempting to process traumatic memory before stability is established can re-traumatize. Establish safety first: a stable housing situation, a safe relationship, a trustworthy counselor.", steps: ["Are you currently safe? If not, address that before anything else", "Identify one person who is safe, trustworthy, and able to hear difficult things", "If you are in a domestic violence situation: the National DV Hotline is 1-800-799-7233", "Consider trauma-informed therapy before attempting to process memories alone"] },
  { title: "Seek Trauma-Informed Care", icon: "🤝", color: PURPLE, desc: "Not all counselors are equipped to work with trauma. Trauma-specific modalities — EMDR, somatic therapy, Internal Family Systems, trauma-focused CBT — have strong evidence for healing. Finding a counselor trained in these is worth the effort.", steps: ["Ask a potential counselor: 'Are you trained in trauma-specific modalities?'", "Look for EMDR-trained therapists at emdria.org", "Consider the Allender Center or CCEF for trauma-informed Christian care", "Be patient: it may take 2-3 tries to find the right fit"] },
  { title: "Name What Happened", icon: "📖", color: "#F59E0B", desc: "Trauma often survives through silence, isolation, and fragmentation. Part of healing is being able to tell the story — not in detail to everyone, but in truth to someone. This is why confession and bearing witness are central to both the gospel and to psychological healing.", steps: ["Write the story in a journal — first for yourself, then consider sharing with a trusted person", "Resist pressure to tell the story before you are ready", "When ready: choose a witness carefully — someone who can hear without minimizing or fixing", "Notice: what details are hardest to say? Those are often where healing is needed most"] },
  { title: "Tend the Body", icon: "🌿", color: "#3B82F6", desc: "Trauma lives in the body. Movement, breath work, physical safety, and somatic awareness are not supplements to healing — they are part of it. Gentle yoga, walking, breathwork, and progressive muscle relaxation can help regulate the nervous system.", steps: ["Establish a simple physical rhythm: daily movement, regular meals, sleep", "Try 4-7-8 breathing when triggered (inhale 4, hold 7, exhale 8)", "Consider trauma-sensitive yoga if available in your area", "Notice where in your body you hold tension — the throat, chest, stomach. Breathe into that space"] },
];

const SCRIPTURE = [
  { verse: "Psalm 34:18", text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you." },
  { verse: "2 Corinthians 1:3-4", text: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles." },
  { verse: "Psalm 56:8", text: "You keep track of all my sorrows. You have collected all my tears in your bottle. You have recorded each one in your book." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
  { verse: "Romans 8:26", text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function TraumaPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_trauma_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_trauma_voice", "allender");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type TraumaJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [traumaJournal, setTraumaJournal] = useState<TraumaJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_traumaj_entries") ?? "[]"); } catch { return []; } });
  const [jtFeeling, setJtFeeling] = useState("");
  const [jtTruth, setJtTruth] = useState("");
  const [jtStep, setJtStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_traumaj_entries", JSON.stringify(traumaJournal)); } catch {} }, [traumaJournal]);
  function saveTraumaEntry() {
    if (!jtFeeling.trim() && !jtTruth.trim()) return;
    setTraumaJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jtFeeling, truth: jtTruth, step: jtStep }, ...prev]);
    setJtFeeling(""); setJtTruth(""); setJtStep("");
  }
  function deleteTraumaEntry(id: string) { setTraumaJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(180deg, rgba(58,125,86,0.06) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>🌊</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Trauma & Healing</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.75 }}>
          Trauma is real, the wounds are real, and God takes both seriously.
          Theology, expert voices, and a path toward genuine healing.
        </p>
        <div style={{ marginTop: 20, display: "inline-block", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 8, padding: "8px 18px", color: "#EF4444", fontSize: 13, fontWeight: 700 }}>
          If you are in crisis: 988 (Crisis Lifeline) · 1-800-799-7233 (Domestic Violence)
        </div>
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Healing Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Write only what feels safe to write. You do not have to process everything at once. One honest sentence is enough.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jtFeeling} onChange={e => setJtFeeling(e.target.value)}
                  placeholder="Where am I in the healing process right now?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jtTruth} onChange={e => setJtTruth(e.target.value)}
                  placeholder="One true thing — about God, about healing, about where I am going..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jtStep} onChange={e => setJtStep(e.target.value)}
                  placeholder="One small step I can take this week..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveTraumaEntry}
                  style={{ alignSelf: "flex-start", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {traumaJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Your story matters. Start wherever you are.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {traumaJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteTraumaEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
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
              { videoId: "53RX2ESIqLM", title: "The Body Keeps the Score — Bessel van der Kolk", channel: "The Commonwealth Club", description: "Van der Kolk explains how trauma is stored in the body, why traditional talk therapy alone is often insufficient, and what embodied healing approaches work — in conversation accessible to a general audience." },
              { videoId: "ZwDlGPCEUoE", title: "Healing Sexual Trauma — Dan Allender", channel: "The Allender Center", description: "Allender on the journey of healing from sexual trauma — what it requires, why the church often fails survivors, and what genuine restoration looks like. Pastoral, courageous, and theologically grounded." },
              { videoId: "6p_yaNFSYao", title: "Trauma and the Gospel", channel: "The Gospel Coalition", description: "How the gospel speaks specifically to trauma survivors — addressing the theological questions that trauma raises (Where was God? Why did he not stop it?) with pastoral honesty." },
              { videoId: "XYZ123trauma", title: "Understanding Complex Trauma", channel: "CCEF", description: "A counseling-focused treatment of complex trauma — the kind that results from repeated, chronic experiences — and what the healing pathway looks like for those who have survived long-term abuse." },
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
