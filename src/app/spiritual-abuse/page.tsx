"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Spiritual Abuse Is Real Abuse — Not Just 'Conflict'", verse: "Ezekiel 34:4", body: "God spoke directly to abusive religious leaders through Ezekiel: 'You have not strengthened the weak or healed the sick or bound up the injured. You have not brought back the strays or searched for the lost. You have ruled them harshly and brutally' (Ezekiel 34:4). Scripture does not sanitize the misuse of religious authority. It names it for what it is — exploitation of the vulnerable by those who claimed to speak for God. Calling your experience spiritual abuse is not melodrama; it is accurate biblical language." },
  { title: "Jesus Reserved His Harshest Words for Religious Controllers", verse: "Matthew 23:4", body: "'They tie up heavy, cumbersome loads and put them on other people's shoulders, but they themselves are not willing to lift a finger to move them' (Matthew 23:4). Jesus' most sustained and fierce condemnation was directed not at tax collectors or prostitutes but at religious leaders who used spiritual authority to burden, control, and shame people. He called them whitewashed tombs — beautiful on the outside, death on the inside. The Jesus who wept with the grieving is the same Jesus who condemned those who exploited religious power." },
  { title: "Authority in Christ's Kingdom Is Servant Authority — Not Lordship", verse: "Mark 10:42-45", body: "When his disciples began to compete for positions of power, Jesus corrected them sharply: 'You know that those who are regarded as rulers of the Gentiles lord it over them, and their high officials exercise authority over them. Not so with you' (Mark 10:42-43). Spiritual authority in the kingdom of God is servant authority — given to strengthen others, not to control them. Any exercise of spiritual authority that requires your silence, your submission of conscience, or your unquestioning loyalty is a perversion of what Jesus established." },
  { title: "God Pursues Those Scattered by Harsh Shepherds", verse: "Ezekiel 34:12", body: "'I myself will search for my sheep and look after them. As a shepherd looks after his scattered flock when he is with them, so will I look after my sheep. I will rescue them from all the places where they were scattered on a day of clouds and darkness' (Ezekiel 34:11-12). God's response to abusive religious leadership is not neutrality — it is pursuit. He actively seeks those who were driven away, scattered, and harmed. Your flight from a spiritually abusive community was not flight from God; he is looking for you." },
  { title: "The Testimony of Your Experience Is Trustworthy", verse: "John 9:25", body: "The man born blind, interrogated by the Pharisees who wanted to dismiss his experience, answered simply: 'Whether he is a sinner or not, I don't know. One thing I do know. I was blind but now I see!' (John 9:25). Your first-person experience of spiritual harm is not invalidated by the community's different narrative about itself. You are not required to trust the institution's account of your own experience. What happened to you is real, regardless of whether the community that harmed you acknowledges it." },
];

const VOICES = [
  { id: "vanvonderen", name: "Jeff VanVonderen", era: "1950s–present", context: "Pastor; The Subtle Power of Spiritual Abuse", bio: "VanVonderen's The Subtle Power of Spiritual Abuse (co-authored with David Johnson, 1991) was among the first serious Christian explorations of how religious authority can be weaponized. He identified the patterns: performance-based approval, shame as a control mechanism, image management over authentic community, and silencing dissent. His work gave survivors language for their experience at a time when the topic was almost entirely unacknowledged in Christian circles.", quote: "In a spiritually abusive system, people are there for the system's sake — to build it, to defend it, to feed it. The real needs of real people become secondary to the needs of the institution. And when you start asking whether your needs are being met, you become the problem.", contribution: "VanVonderen was a pioneer in naming spiritual abuse as a distinct category of harm, providing both survivors and counselors with language for something that had long existed without an adequate name." },
  { id: "langberg", name: "Diane Langberg", era: "1950–present", context: "Psychologist; Redeeming Power; trauma specialist", bio: "Diane Langberg has spent decades working with trauma survivors — including survivors of spiritual abuse — and her book Redeeming Power (2020) is one of the most important Christian treatments of how power is misused in religious contexts. She brings both psychological depth and theological precision to the subject, helping churches understand how spiritual authority can become a vehicle for abuse rather than flourishing.", quote: "Power used to serve the self — to protect image, to silence criticism, to produce compliance — is power that has become predatory. It uses the sacred to achieve the profane. And the damage it does is compounded by the fact that God's name is attached to it.", contribution: "Langberg gave the church a rigorous framework for understanding power — why it corrupts, how it is misused, and what redemptive use of power looks like — grounded in both Scripture and decades of clinical work." },
  { id: "allender", name: "Dan Allender", era: "1952–present", context: "Psychologist; The Allender Center; The Wounded Heart", bio: "Allender's work on trauma and spiritual harm has helped thousands understand the specific damage done when the sacred is weaponized. He emphasizes that spiritual abuse is uniquely devastating because it attacks not just the person's psychology but their access to God — the very relationship that might otherwise provide healing. His work gives survivors permission to grieve and be angry without abandoning faith.", quote: "Spiritual abuse is a different category of harm because it uses God as the weapon. When it is God's name attached to your shame, God's will being cited to justify your silence, God's blessing being promised if you comply — the damage goes to the deepest place, the place where you live in relationship to the divine.", contribution: "Allender's integration of psychology and theology helps survivors understand why spiritual abuse is uniquely damaging, and why healing requires both therapeutic and spiritual work." },
];

const PRACTICES = [
  { title: "Name It Accurately", icon: "🔍", color: PURPLE, desc: "Spiritual abuse thrives on naming confusion — the harm is reframed as your spiritual immaturity, your critical spirit, your lack of submission. The first act of recovery is calling it what it is: misuse of spiritual authority to control, shame, isolate, or silence. You are not required to use the language of the community that harmed you.", steps: ["Write a factual description of what happened: who had authority, what they required, what happened when you questioned", "Ask: 'Was my conscience, my perception, or my dissent treated as a problem to be managed?'", "Notice the shame load you are still carrying — and whether that shame was given to you as a tool of control", "You are allowed to say: 'What they did was spiritual abuse'"] },
  { title: "Exit Safely and Completely", icon: "🚪", color: GREEN, desc: "If you are still in the abusive system, safe exit is the first priority — not reconciliation, not explanation, not giving them one more chance. Abusive systems often escalate when challenged. Planning your departure quietly, without announcement, is not deception; it is self-protection.", steps: ["Build connections outside the community before announcing departure if possible", "Do not rely on the abusive community's leadership for exit counseling", "Take important personal records and documents before leaving", "Contact an exit support organization if the community is high-control (see resources below)"] },
  { title: "Find Specialized Support", icon: "🤝", color: "#F59E0B", desc: "Spiritual abuse requires specialized support — from therapists who understand religious trauma, not just general counselors. Well-meaning friends still inside similar systems often cannot hear your story clearly because it challenges their own community.", steps: ["Look for therapists certified in trauma and familiar with religious trauma syndrome", "The Religious Trauma Institute maintains a practitioner directory", "Spiritual Directors International includes directors trained in recovery from spiritual abuse", "Consider a recovery community of other survivors — you are not alone, and your experience is not unique"] },
  { title: "Rebuild Access to God Slowly", icon: "✝️", color: PURPLE, desc: "Spiritual abuse weaponizes the sacred — which means the path back to God must be careful, on your terms, at your pace. Forced reconnection with religious forms before you are ready can re-traumatize rather than heal.", steps: ["Give yourself permission to stay away from church community for a season — God can be met elsewhere", "Begin with forms of spiritual engagement that feel safe: nature, poetry, music, contemplative prayer", "Distinguish between the God of the community that harmed you and the God of Scripture — they may not be the same", "Trust is rebuilt slowly, with evidence — that applies to God-communities as well as people"] },
];

const SCRIPTURE = [
  { verse: "Ezekiel 34:4", text: "You have not strengthened the weak or healed the sick or bound up the injured. You have not brought back the strays or searched for the lost. You have ruled them harshly and brutally." },
  { verse: "Matthew 23:4", text: "They tie up heavy, cumbersome loads and put them on other people's shoulders, but they themselves are not willing to lift a finger to move them." },
  { verse: "Mark 10:43-44", text: "Not so with you. Instead, whoever wants to become great among you must be your servant, and whoever wants to be first must be slave of all." },
  { verse: "Ezekiel 34:12", text: "I will rescue them from all the places where they were scattered on a day of clouds and darkness." },
  { verse: "Luke 4:18", text: "The Spirit of the Lord is on me, because he has anointed me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free." },
  { verse: "Isaiah 61:1-3", text: "He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners... to comfort all who mourn." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function SpiritualAbusePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_spiritual_abuse_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_spiritual_abuse_voice", "vanvonderen");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type SpiritualAbuseJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [saJournal, setSaJournal] = useState<SpiritualAbuseJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_sabusei_entries") ?? "[]"); } catch { return []; } });
  const [jsaFeeling, setJsaFeeling] = useState("");
  const [jsaTruth, setJsaTruth] = useState("");
  const [jsaStep, setJsaStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_sabusei_entries", JSON.stringify(saJournal)); } catch {} }, [saJournal]);
  function saveSaEntry() {
    if (!jsaFeeling.trim() && !jsaTruth.trim()) return;
    setSaJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jsaFeeling, truth: jsaTruth, step: jsaStep }, ...prev]);
    setJsaFeeling(""); setJsaTruth(""); setJsaStep("");
  }
  function deleteSaEntry(id: string) { setSaJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ background: "linear-gradient(180deg, rgba(107,79,187,0.10) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>⚠️</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Spiritual Abuse</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto 24px", lineHeight: 1.75 }}>
          When spiritual authority is used to control, shame, or silence — not to serve.
          Resources for survivors: naming what happened, finding safety, and rebuilding faith.
        </p>
        <div style={{ background: `${PURPLE}18`, border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: "14px 20px", maxWidth: 480, margin: "0 auto", fontSize: 14, color: "#D0C0F8", lineHeight: 1.7 }}>
          <strong>If you are in danger:</strong> Call <strong>988</strong> (Suicide &amp; Crisis Lifeline) or <strong>1-800-799-7233</strong> (National DV Hotline).<br />
          For spiritual abuse resources: <strong>Religious Trauma Institute</strong> · <strong>The Allender Center</strong>
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Recovery Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Your experience is real and your response to it is valid. Write without minimizing, explaining away, or giving the system the benefit of the doubt.
                You are allowed to be angry, confused, grieving, and slowly healing at the same time.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jsaFeeling} onChange={e => setJsaFeeling(e.target.value)}
                  placeholder="What happened, and how am I feeling about it honestly?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jsaTruth} onChange={e => setJsaTruth(e.target.value)}
                  placeholder="One true thing I'm holding onto about God, myself, or my future..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jsaStep} onChange={e => setJsaStep(e.target.value)}
                  placeholder="One small step toward safety, healing, or clarity today..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveSaEntry}
                  style={{ alignSelf: "flex-start", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {saJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Your story deserves to be told accurately and without apology.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {saJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteSaEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
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
              { videoId: "1hSWe3_gfBs", title: "Understanding Spiritual Abuse — Diane Langberg", channel: "Diane Langberg", description: "Langberg on the specific dynamics of spiritual abuse — how authority is used to silence, shame, and control — and what Scripture says about power used to serve rather than exploit." },
              { videoId: "P6GxUNPnGJU", title: "The Subtle Power of Spiritual Abuse", channel: "Jeff VanVonderen", description: "VanVonderen introduces the key patterns of spiritually abusive systems: performance-based belonging, shame as control, image protection over truth, and the silencing of dissent." },
              { videoId: "3RBm6vUOT1g", title: "Healing from Spiritual Abuse", channel: "The Allender Center", description: "Dan Allender on why spiritual abuse causes distinctive harm — because it weaponizes the sacred — and what a slow, genuine healing process looks like in practice." },
              { videoId: "dNnoMbczqXo", title: "When Church Leaders Misuse Power", channel: "The Gospel Coalition", description: "A panel discussion on the patterns of leadership abuse in Christian contexts — what warning signs look like, why communities protect abusers, and what accountability requires." },
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
