"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Your Identity Is Not Your Job", verse: "Colossians 3:3", body: "'For you died, and your life is now hidden with Christ in God' (Colossians 3:3). The deepest truth about who you are is hidden with Christ — not on your resume, not in your title, not in your productivity. Job loss strips away one layer of identity to reveal what remains underneath. What remains underneath is the life that is hidden with Christ. This is not a platitude; it is the most countercultural claim Paul could make in a Roman culture that valued achievement and status as much as any modern one." },
  { title: "God Provided for Those Who Had Nothing", verse: "Exodus 16:4", body: "'Then the LORD said to Moses, \"I will rain down bread from heaven for you\"' (Exodus 16:4). The manna in the wilderness was given to a people who had no provision, no income, no way to provide for themselves, and who were surrounded by nothing but desert. God did not tell them to try harder or trust his general goodness abstractly. He fed them specifically, daily, and concretely. His provision in your crisis may look different from what you expected — but his track record of providing for those who have nothing is unambiguous in Scripture." },
  { title: "Lament About Economic Hardship Is Everywhere in the Psalms", verse: "Psalm 22:1-2", body: "'My God, my God, why have you forsaken me? Why are you so far from saving me?... I cry out by day, but you do not answer.' The Psalms contain extensive lament about circumstances that include economic ruin, social shame, and the experience of God's silence in the face of real need. You are not being unfaithful by being distressed about job loss. The Psalmists were distressed about circumstances far less significant than unemployment." },
  { title: "Work Has Dignity — But the Loss of Work Is Not Punishment", verse: "Ecclesiastes 5:18", body: "'This is what I have observed to be good: that it is appropriate for a person to eat, to drink and to find satisfaction in their toilsome labor under the sun during the few days of life God has given them' (Ecclesiastes 5:18). Work is good, and the loss of work is a real loss — of structure, income, purpose, and identity. But job loss in a broken world is not necessarily God's judgment on the person who lost the job. The economy, technology, organizational dysfunction, and plain misfortune all produce job loss that has nothing to do with the spiritual state of the person affected." },
  { title: "Trust and Practical Action Are Not in Tension", verse: "Proverbs 16:9", body: "'In their hearts humans plan their course, but the LORD establishes their steps' (Proverbs 16:9). Biblical faith is not passive — it makes plans, applies for jobs, updates resumes, seeks counsel, and takes action — while remaining genuinely open to the fact that God's direction may not be what was planned. Trusting God is not an alternative to effort; it is the theological context in which effort takes place, with an open hand rather than a clenched fist." },
];

const VOICES = [
  { id: "keller", name: "Timothy Keller", era: "1950–2023", context: "Every Good Endeavor; theology of work", bio: "Keller's Every Good Endeavor provides one of the most comprehensive theological frameworks for understanding work — its dignity, its limits, its relationship to identity, and what the loss of it means. His application of the gospel to the specific experience of work and career failure gives those who have lost jobs a way of understanding what happened without collapsing into either despair or toxic positivity.", quote: "When we lose a job, we lose not just income but a piece of our story — the way we explained ourselves to ourselves and to others. The gospel's answer is not that work doesn't matter; it's that your identity is not your work. That is the only foundation from which you can pick up and try again without despair.", contribution: "Keller's theology of work gave Christians a sophisticated account of why work matters and why its loss is genuinely painful — without allowing that pain to become identity-destroying." },
  { id: "spurgeon", name: "Charles Spurgeon", era: "1834–1892", context: "Prince of Preachers; suffering and providence", bio: "Spurgeon's extended writings on providence — God's care in apparently dark circumstances — speak directly to the experience of those in financial crisis. His own experience of depression and public failure alongside his unwavering conviction in God's providential care gives his words a weight that cannot be reduced to cheap optimism.", quote: "God is too good to be unkind, too wise to be confused, and too powerful to be thwarted. When I cannot trace his hand, I can still trust his heart. The crisis you are in is not outside his knowledge. His purposes are not defeated by your unemployment notice.", contribution: "Spurgeon's combination of honest acknowledgment of suffering and steady confidence in God's character gave those in crisis a framework for trust that didn't require pretending circumstances were better than they were." },
  { id: "godin", name: "Jeff Goins", era: "Contemporary", context: "Real Artists Don't Starve; calling and vocation", bio: "Goins's work on vocation and calling addresses the specific confusion of those whose identity was tied to a job they've lost — and whose sense of calling is now in question. His practical and theological exploration of what it means to pursue meaningful work in a fractured economy speaks to both the grief of job loss and the opportunity it sometimes creates for genuine vocational reconsideration.", quote: "Losing a job can feel like losing yourself. But sometimes the job you had was not the same as the calling you have. Job loss, as brutal as it is, sometimes forces a clarity about what you actually want to do with your working years that you would never have reached if you had stayed comfortable.", contribution: "Goins helped those navigating job transitions think theologically about vocation and calling — distinguishing between a specific job and a larger sense of purpose — giving the loss a redemptive frame without minimizing the pain." },
];

const PRACTICES = [
  { title: "Take the Grief Seriously First", icon: "💔", color: PURPLE, desc: "Job loss is a genuine loss — of income, of structure, of identity, of community (most workplaces involve friendship), and of the future you planned. It deserves grief before it deserves reframing.", steps: ["Name what specifically you have lost: income, identity, colleagues, structure, purpose", "Give yourself 2-3 weeks before you have to have a 'plan' — some grief before strategy", "Tell your family and close friends honestly — the isolation of hiding job loss multiplies its damage", "Find a counselor or support group if the grief is severe or prolonged"] },
  { title: "Practical Steps Forward", icon: "📋", color: GREEN, desc: "After the initial grief, practical action is both necessary and spiritually significant. Planning is not the opposite of trust; it is trust expressed in responsible stewardship.", steps: ["File for unemployment benefits immediately — this is what they exist for", "Create a realistic budget based on your current resources, not your previous income", "Update your resume and LinkedIn profile while the shock is still fresh", "Tell people in your network — most jobs are found through relationships, not applications"] },
  { title: "Guard Your Mental Health", icon: "🧠", color: "#F59E0B", desc: "Job loss is one of the most significant predictors of depression and anxiety. The combination of financial stress, identity loss, and uncertainty is genuinely heavy. Be proactive about your mental health.", steps: ["Maintain structure: get up at the same time, exercise, eat meals", "Limit doom-scrolling job boards — set specific times for searching, then stop", "Stay socially connected — unemployment is isolating by default; counteract that intentionally", "If you are experiencing persistent depression, anxiety, or hopelessness, talk to your doctor"] },
  { title: "Let This Be an Examination of Calling", icon: "✝️", color: PURPLE, desc: "Not every job loss is an invitation to vocational reconsideration — but some are. When the immediate crisis has stabilized, it is worth asking whether the job you lost is exactly what you should return to.", steps: ["Ask: what aspects of the job did I find genuinely meaningful? What aspects depleted me?", "Consider whether the field, role, or direction you were in aligned with your actual gifts and calling", "Talk to a pastor, mentor, or vocational counselor about what you are made for", "Don't make major vocational decisions during acute grief — wait for the dust to settle first"] },
];

const SCRIPTURE = [
  { verse: "Colossians 3:3", text: "For you died, and your life is now hidden with Christ in God." },
  { verse: "Matthew 6:26", text: "Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they?" },
  { verse: "Psalm 34:10", text: "The lions may grow weak and hungry, but those who seek the LORD lack no good thing." },
  { verse: "Philippians 4:19", text: "And my God will meet all your needs according to the riches of his glory in Christ Jesus." },
  { verse: "Proverbs 16:9", text: "In their hearts humans plan their course, but the LORD establishes their steps." },
  { verse: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function JobLossPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_job_loss_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_job_loss_voice", "keller");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type JobLossJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [jlJournal, setJlJournal] = useState<JobLossJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_joblossj_entries") ?? "[]"); } catch { return []; } });
  const [jjlFeeling, setJjlFeeling] = useState("");
  const [jjlTruth, setJjlTruth] = useState("");
  const [jjlStep, setJjlStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_joblossj_entries", JSON.stringify(jlJournal)); } catch {} }, [jlJournal]);
  function saveJlEntry() {
    if (!jjlFeeling.trim() && !jjlTruth.trim()) return;
    setJlJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jjlFeeling, truth: jjlTruth, step: jjlStep }, ...prev]);
    setJjlFeeling(""); setJjlTruth(""); setJjlStep("");
  }
  function deleteJlEntry(id: string) { setJlJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ background: "linear-gradient(180deg, rgba(58,125,86,0.08) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>🔑</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Job Loss &amp; Unemployment</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.75 }}>
          Your identity is not your job title. God has provided for those with nothing before, and his character has not changed.
          Theology and practical resources for those navigating job loss.
        </p>
        <div style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "14px 20px", maxWidth: 440, margin: "0 auto", fontSize: 14, color: "#B0D8BE", lineHeight: 1.7 }}>
          <strong>If you are in crisis:</strong> Call <strong>988</strong> (Suicide &amp; Crisis Lifeline).<br />
          <strong>Financial help:</strong> 211.org · Local Community Action agencies
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
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Record where you are in this season — the grief, the practical steps, the questions, and the moments of hope.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jjlFeeling} onChange={e => setJjlFeeling(e.target.value)}
                  placeholder="What am I feeling today? What is hard, confusing, or scary right now?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jjlTruth} onChange={e => setJjlTruth(e.target.value)}
                  placeholder="One true thing I'm holding about who I am, what God is doing, or what I know about provision..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jjlStep} onChange={e => setJjlStep(e.target.value)}
                  placeholder="One practical or spiritual step I will take today..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveJlEntry}
                  style={{ alignSelf: "flex-start", background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {jlJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. This season is worth recording honestly.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {jlJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteJlEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
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
              { videoId: "UJAFHxHEVxw", title: "Every Good Endeavor: Theology of Work — Tim Keller", channel: "Gospel in Life", description: "Keller on why work matters theologically, what job loss means in a Christian framework, and how to hold both the genuine pain of unemployment and a robust theology of vocation." },
              { videoId: "BwUkEiB4Z_o", title: "Finding Purpose After Job Loss", channel: "Focus on the Family", description: "Practical and pastoral guidance for those navigating job loss — managing the emotional dimensions, taking practical steps, and finding meaning in the transition." },
              { videoId: "gHSxKlPm-f8", title: "When God Provides Unexpectedly", channel: "Desiring God", description: "Stories and theology of God's unexpected provision — for those who have nothing and are waiting on him to act — grounded in the biblical record of manna, ravens, and unexpected abundance." },
              { videoId: "iJ18AeknpnM", title: "Identity and Calling Beyond Your Career", channel: "The Gospel Coalition", description: "A theological treatment of identity and calling — disentangling who you are from what you do for a living — particularly relevant for those whose sense of purpose was wrapped up in the job they lost." },
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
