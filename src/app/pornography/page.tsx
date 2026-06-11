"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "This Is a Struggle Rooted in Longing — Not Just Lust", verse: "Jeremiah 2:13", body: "'My people have committed two sins: They have forsaken me, the spring of living water, and have dug their own cisterns, broken cisterns that cannot hold water' (Jeremiah 2:13). Pornography use is often driven not by too much desire but by misdirected desire — the deep human longing for intimacy, beauty, connection, and escape, searching for satisfaction in a place that cannot provide it. This does not excuse the behavior or minimize the harm, but it reframes the struggle: the problem is not that you want too much but that you are trying to satisfy real needs with something that cannot satisfy them." },
  { title: "Shame Alone Does Not Produce Transformation", verse: "Romans 8:1", body: "'There is now no condemnation for those who are in Christ Jesus' (Romans 8:1). Many men and women have spent years cycling through shame, resolution, failure, and more shame — and the shame loop, without grace, has produced no lasting change. Paul did not write to Christians in Rome to tell them to feel worse about their sin; he wrote to tell them that condemnation was not the mechanism of transformation. Grace and the Spirit are. This is not a license to minimize the seriousness of pornography; it is a diagnosis of why shame-based accountability programs alone so rarely work." },
  { title: "The Body Is Not Shameful — Its Misuse Is", verse: "1 Corinthians 6:19-20", body: "'Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies' (1 Corinthians 6:19-20). Christian ethics is not about transcending the body; it is about honoring a body that belongs to God and was declared good at creation. This means that the goal of recovery is not hating your sexuality but redirecting it — toward the intimate, faithful, embodied love God designed it for." },
  { title: "Transformation Happens in Community, Not in Isolation", verse: "James 5:16", body: "'Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective' (James 5:16). Addiction and compulsion thrive in secrecy. The cycle of shame and hiding is not broken by more willpower exercised alone; it is broken by confession and accountability within a community of genuine acceptance. The instruction is not to confess to everyone — but to confess to someone, specifically and vulnerably." },
  { title: "Lasting Change Requires Addressing Root Causes", verse: "Proverbs 4:23", body: "'Above all else, guard your heart, for everything you do flows from it' (Proverbs 4:23). Behavioral strategies — filters, blockers, accountability software — are tools, not solutions. The patterns of use are symptoms of something deeper: loneliness, stress, trauma, relational disconnection, anxiety, or emotional avoidance. Genuine transformation addresses both the behavior and its roots, which typically requires more than willpower and more than accountability — it requires understanding why the draw is so powerful and what deeper needs are going unmet." },
];

const VOICES = [
  { id: "chester", name: "Tim Chester", era: "1960s–present", context: "Pastor; Closing the Window; gospel-centered recovery", bio: "Chester's Closing the Window is among the most balanced and gospel-centered treatments of pornography in Christian publishing. It takes the struggle seriously without adding to the shame load, and grounds the path toward change in grace and theological understanding rather than willpower and shame-based accountability alone.", quote: "Most men who struggle with porn are trying to deal with it through willpower and shame. But willpower without gospel has a poor track record, and shame without grace drives behavior underground rather than transforming it. The only durable change I've seen comes from people who begin to genuinely believe they are loved despite this — and find that love more compelling than what porn promises.", contribution: "Chester reframed pornography recovery around the gospel rather than shame and willpower, giving men and women a theologically coherent path forward that actually addressed the underlying dynamics of the struggle." },
  { id: "struthers", name: "William Struthers", era: "Contemporary", context: "Neuroscientist; Wired for Intimacy", bio: "Struthers' Wired for Intimacy brings neuroscience to the Christian discussion of pornography — explaining how repeated exposure changes the brain's neural pathways, why willpower becomes less effective over time without structural change, and what the research says about what actually works in recovery. He provides the scientific grounding for what many recover from experience empirically.", quote: "The brain you have after years of pornography use is literally different from the brain you had before. The pathways have been deepened by repetition. This is not a moral failure alone — it is a neurological pattern that requires neurological change. Understanding that can actually be liberating: you are not just weak-willed. You are struggling against patterns your own brain has built.", contribution: "Struthers brought neuroscience into the pastoral conversation, helping both sufferers and counselors understand why the struggle was so persistent and what the research suggested about effective recovery." },
  { id: "allender", name: "Dan Allender", era: "1952–present", context: "Psychologist; The Allender Center; sexual trauma and recovery", bio: "Allender's work on sexuality and recovery addresses the complex relationship between pornography use and underlying trauma, shame, and relational disconnection. His perspective is that compulsive sexual behavior almost always has an autobiographical story — something in the person's history that the behavior is attempting to manage or escape. Addressing that story, not just the behavior, is what produces lasting change.", quote: "I have never worked with a man whose pornography use was simply about lust. When you sit with the story long enough, there is always something underneath: loneliness that was never addressed, trauma that was never processed, a father who was absent or abusive, a marriage in which intimacy has been lost. The behavior is the symptom. The story is what requires healing.", contribution: "Allender's emphasis on autobiographical narrative and underlying trauma gave both counselors and those in recovery a much deeper framework for understanding persistent sexual struggle and what genuine healing requires." },
];

const PRACTICES = [
  { title: "Break the Secrecy — Tell Someone", icon: "🤝", color: GREEN, desc: "Secrecy is the environment in which compulsion thrives. The single most consistent factor in recovery is having at least one person who knows the full reality of the struggle. This does not require public confession — it requires one honest relationship.", steps: ["Choose one person: a pastor, counselor, trusted friend, or accountability partner who will not respond with shame", "Tell the truth about the frequency, triggers, and duration of the struggle — not a sanitized version", "Regular check-ins (weekly minimum) with this person are more effective than crisis calls after failures", "Consider a structured accountability app (Covenant Eyes, Accountable2You) alongside human accountability"] },
  { title: "Understand Your Triggers", icon: "🧠", color: PURPLE, desc: "Pornography use almost always follows identifiable patterns: specific emotional states (loneliness, stress, boredom, anger), times of day, specific situations. Identifying these patterns is the first step to interrupting them.", steps: ["Keep a simple log for two weeks: when the urge was strongest, what preceded it, what you were feeling", "Notice: is this about boredom? Stress? Loneliness? Relational conflict? Escape?", "The urge often peaks and passes within 20-30 minutes — identify what you can do in that window to delay and redirect", "Environmental modifications (device placement, internet filtering) reduce the path of least resistance"] },
  { title: "Address What Is Underneath", icon: "🌱", color: "#F59E0B", desc: "Behavioral management without addressing root causes produces white-knuckle sobriety at best. Understanding what the behavior is attempting to manage — loneliness, stress, emotional numbing, intimacy avoidance, trauma responses — is essential for lasting change.", steps: ["Consider seeing a therapist who specializes in sexual compulsion and underlying trauma", "Ask honestly: what does porn provide that I'm not getting elsewhere? (escape, intimacy, excitement, relief)", "Develop genuine alternatives for the emotional needs the behavior has been meeting", "Invest in your relational life — loneliness is one of the most consistent drivers of compulsive use"] },
  { title: "Replace Shame with Grace — Practically", icon: "✝️", color: PURPLE, desc: "The shame-cycle produces more use, not less. After a failure, the voice that says 'you are hopeless, you will never change, you might as well keep going' is not a voice of godly conviction — it is the voice of shame, and it leads back into the behavior.", steps: ["After a failure: pause, breathe, resist the spiral (shame leads to more use)", "Confess specifically to your accountability person — the same day if possible", "Return to Scripture: 'There is now no condemnation' (Romans 8:1) is not a platitude, it is the foundation", "Mark your clean days, not just your failures — progress is real even when it is slow"] },
];

const SCRIPTURE = [
  { verse: "Romans 8:1", text: "There is now no condemnation for those who are in Christ Jesus." },
  { verse: "1 Corinthians 6:19-20", text: "Do you not know that your bodies are temples of the Holy Spirit? You are not your own; you were bought at a price. Therefore honor God with your bodies." },
  { verse: "James 5:16", text: "Therefore confess your sins to each other and pray for each other so that you may be healed." },
  { verse: "Philippians 4:8", text: "Whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely... think about such things." },
  { verse: "Jeremiah 2:13", text: "My people have committed two sins: They have forsaken me, the spring of living water, and have dug their own cisterns, broken cisterns that cannot hold water." },
  { verse: "Galatians 6:1", text: "Brothers and sisters, if someone is caught in a sin, you who live by the Spirit should restore that person gently. But watch yourselves, or you also may be tempted." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function PornographyPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_pornography_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_pornography_voice", "chester");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type PornJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [pornJournal, setPornJournal] = useState<PornJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_pornj_entries") ?? "[]"); } catch { return []; } });
  const [jpFeeling, setJpFeeling] = useState("");
  const [jpTruth, setJpTruth] = useState("");
  const [jpStep, setJpStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_pornj_entries", JSON.stringify(pornJournal)); } catch {} }, [pornJournal]);
  function savePornEntry() {
    if (!jpFeeling.trim() && !jpTruth.trim()) return;
    setPornJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jpFeeling, truth: jpTruth, step: jpStep }, ...prev]);
    setJpFeeling(""); setJpTruth(""); setJpStep("");
  }
  function deletePornEntry(id: string) { setPornJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(180deg, rgba(58,125,86,0.08) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>🕊️</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Pornography &amp; Sexual Integrity</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto 24px", lineHeight: 1.75 }}>
          This is a struggle rooted in longing, not just lust. Gospel-centered theology,
          honest voices, and a practical path forward — without the shame spiral.
        </p>
        <div style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "14px 20px", maxWidth: 520, margin: "0 auto", fontSize: 14, color: "#B0D8BE", lineHeight: 1.7 }}>
          <strong>If you are in crisis:</strong> Call <strong>988</strong> (Suicide &amp; Crisis Lifeline).<br />
          <strong>Recovery:</strong> Covenant Eyes · XXXchurch · Setting Captives Free
        </div>
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
              <div style={{ color: GREEN, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{voice.context}</div>
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
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Recovery Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Write honestly — about your struggles, your triggers, your progress, and what you genuinely want. There is no condemnation here, only a space for truth.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jpFeeling} onChange={e => setJpFeeling(e.target.value)}
                  placeholder="What am I feeling today? What triggered me recently, or what is going well?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jpTruth} onChange={e => setJpTruth(e.target.value)}
                  placeholder="One true thing about who I am, who God is, or what genuine freedom looks like for me..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jpStep} onChange={e => setJpStep(e.target.value)}
                  placeholder="One concrete step I will take — not a promise, just one step..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={savePornEntry}
                  style={{ alignSelf: "flex-start", background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {pornJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Every honest word here is a step toward freedom.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {pornJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deletePornEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
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
              { videoId: "0dLmrgNDl5o", title: "Gospel-Centered Approach to Pornography — Tim Chester", channel: "The Gospel Coalition", description: "Chester on why shame-based accountability programs fail and what a gospel-centered approach to pornography recovery actually looks like — addressing root causes rather than just managing behavior." },
              { videoId: "gRJ_QfP2mhU", title: "Your Brain on Porn — William Struthers", channel: "Biola University", description: "Neuroscientist William Struthers explains what pornography use does to the brain over time and what the research says about what actually works in recovery — combining science and Christian ethics." },
              { videoId: "h33oMgwQT5w", title: "The Story Beneath the Struggle — Dan Allender", channel: "The Allender Center", description: "Allender on the autobiographical roots of compulsive sexual behavior — what in a person's history drives the use — and why addressing that story is essential to lasting change." },
              { videoId: "E_d3xrZWqVo", title: "How to Break Free: Practical Steps", channel: "XXXchurch", description: "Practical, non-shame-based guidance on accountability, environmental changes, trigger identification, and what the first steps of genuine recovery look like in practice." },
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
