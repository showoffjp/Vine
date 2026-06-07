"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Marriage Is a Covenant — and Covenants Can Be Repaired", verse: "Hosea 3:1", body: "God told Hosea to pursue his unfaithful wife Gomer, buying her back from slavery, as a living parable of his own covenant love for Israel. Marriage in Scripture is a covenant — not a contract that voids on breach, but a sworn commitment that can absorb betrayal, repair, and restoration. This is not a guarantee that every marriage can be repaired under every circumstance. It is a declaration that the foundation of marriage is covenant fidelity, not performance — and that God's model of covenantal love reaches toward restoration even after severe breach." },
  { title: "Love Is a Choice Before It Is a Feeling", verse: "1 Corinthians 13:4-5", body: "'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs' (1 Corinthians 13:4-5). Paul describes love as a series of active choices, not a description of emotional experience. Marriages in crisis typically involve two people who have stopped making the choices Paul describes — sometimes for good reasons, sometimes not. The question the text raises is not 'do I feel love?' but 'am I willing to choose love?'" },
  { title: "Getting Help Is Not Giving Up", verse: "Proverbs 11:14", body: "'For lack of guidance a nation falls, but victory is won through many advisers' (Proverbs 11:14). Asking for outside help in a marital crisis is the opposite of failure; it is wisdom. Marriages are not designed to be self-contained systems that require no outside support. Seeking pastoral counseling, marriage therapy, or a trusted mentor couple is the application of the principle of many advisers to the most important human covenant most people will ever make." },
  { title: "Repentance Requires More Than Apology", verse: "2 Corinthians 7:10", body: "'Godly sorrow brings repentance that leads to salvation and leaves no regret, but worldly sorrow brings death' (2 Corinthians 7:10). Paul distinguishes between genuine repentance — which produces lasting behavioral change — and 'worldly sorrow,' which is regret about consequences rather than genuine change of direction. In marriages in crisis, the relevant question about repentance is not 'did they say sorry' but 'is there a genuine change in behavior, understanding, and pattern that is sustained over time?'" },
  { title: "Safety Is a Pre-Condition for Reconciliation", verse: "Proverbs 22:3", body: "'The prudent see danger and take refuge, but the simple keep going and pay the penalty' (Proverbs 22:3). Before asking whether a marriage can be repaired, it is necessary to ask whether it is safe for both parties to engage in the repair process. Reconciliation is not the same as remaining in danger. In marriages involving abuse, coercion, or active addictions, safety must be established before couples work can begin. Seeking safety is wisdom, not lack of faith." },
];

const VOICES = [
  { id: "gottman", name: "John Gottman", era: "1942–present", context: "The Seven Principles for Making Marriage Work; relationship researcher", bio: "Gottman's decades of research on what makes marriages succeed and fail — including the identification of the 'Four Horsemen' (criticism, contempt, defensiveness, stonewalling) — is the most rigorous empirical research on marriage available and has been widely integrated into Christian marriage counseling. His research gives couples language for what is actually happening in their relationship and what specific changes produce different outcomes.", quote: "Most marriages that end are not dramatic failures. They are the slow accumulation of emotional dismissals, small contempts, defensive deflections, and unavailability — patterns that, over years, erode the relationship. The good news is that those same patterns can be identified and changed. The issue is usually not the absence of love but the presence of specific patterns that are destroying it.", contribution: "Gottman's research gave both couples and counselors a precise, evidence-based understanding of the specific patterns that damage marriages and what interventions actually help." },
  { id: "thomas", name: "Gary Thomas", era: "1960–present", context: "Sacred Marriage; the spiritual dimensions of marriage", bio: "Thomas's Sacred Marriage reframes the primary purpose of marriage — not as a vehicle for personal happiness but as a context for sanctification. This reframing, while not appropriate in every context (it can be misused to keep people in harmful situations), gives couples in difficulty a larger theological framework: the marriage is not failing because it is not making you happy; it may be succeeding at its deeper purpose of revealing your need for grace.", quote: "If I had to summarize the thesis of Sacred Marriage in one sentence: what if God designed marriage to make us holy more than to make us happy? That does not mean unhappiness is the goal. It means that the difficulty you are experiencing is not evidence that you married the wrong person — it may be evidence that you are being given an opportunity to grow in love, patience, and Christlikeness.", contribution: "Thomas's reframing of marriage's purpose gave couples a theological framework for enduring difficulty without despair — and a way of understanding marital struggle as potentially redemptive rather than simply evidence of failure." },
  { id: "vernick", name: "Leslie Vernick", era: "1958–present", context: "The Emotionally Destructive Marriage; marriage and abuse", bio: "Vernick's work is essential for couples in crisis where there is emotional, verbal, or physical abuse — situations where the generic 'work harder on your marriage' advice is not only inadequate but potentially dangerous. Her distinction between normal marital struggle and destructive marriage patterns helps both individuals and counselors make accurate assessments.", quote: "Not every difficult marriage is a destructive marriage. But when destructive patterns are present — control, contempt, cruelty, or chronic deception — the standard marriage counseling advice can actually make things worse. The first question in a marriage crisis is not 'how do we improve our communication?' It is 'is this relationship safe?'", contribution: "Vernick gave couples, counselors, and churches a framework for distinguishing normal marital difficulty from genuinely destructive patterns, and provided guidance for responding appropriately to each." },
];

const PRACTICES = [
  { title: "Get Professional Help — Both Individually and Together", icon: "🤝", color: GREEN, desc: "Marriages in genuine crisis almost always benefit from professional support — individual therapy for each partner to address their own patterns, and couples therapy to address the relationship itself. Note: couples therapy is not appropriate when there is active abuse.", steps: ["Find a licensed marriage and family therapist (LMFT) who specializes in couples work", "Both partners should also have individual therapists, not just shared couples therapy", "If your pastor has couples counseling training, they can be a first contact — and should be able to provide referrals", "Give couples therapy at least 12-16 sessions before assessing whether it is working"] },
  { title: "Address the Most Dangerous Patterns First", icon: "🚨", color: "#EF4444", desc: "Gottman's research identified contempt as the single most predictive factor for divorce. Before working on communication skills or romantic connection, the most corrosive patterns must be identified and stopped.", steps: ["Identify: is contempt present? (eye-rolling, mockery, belittling) — this must be addressed first", "Identify: is stonewalling present? (complete emotional withdrawal) — needs individual regulation work", "Identify: is there any form of abuse? — this requires safety assessment before couples work", "Gottman's relationship assessment at gottman.com can help identify specific patterns"] },
  { title: "Build Repair Attempts", icon: "🔧", color: PURPLE, desc: "Gottman's research found that happy couples make frequent 'repair attempts' — small de-escalations during conflict — and that what distinguishes them from unhappy couples is not the absence of conflict but the ability to interrupt it before it becomes destructive.", steps: ["Develop specific de-escalation phrases: 'I need a break', 'Let me start over', 'I'm getting defensive'", "Agree in advance on a time-out protocol: specific words, specific duration, specific return commitment", "Practice reconnecting after conflict rather than letting it linger unresolved", "A couples therapist can help develop a specific repair protocol for your relationship"] },
  { title: "Rebuild Emotional Safety Before Intimacy", icon: "🌱", color: GREEN, desc: "Emotional intimacy — the sense that you are truly known and genuinely accepted — is the foundation from which physical intimacy, trust, and partnership flow. Marriages in crisis almost always involve a collapse of emotional safety.", steps: ["Begin with small, low-stakes conversations that don't immediately return to conflict", "Practice curiosity rather than judgment: 'I want to understand what that was like for you'", "Acknowledge your partner's experience before defending your own", "Physical intimacy should not be pressured during emotional crisis — it will not fix the emotional disconnection"] },
];

const SCRIPTURE = [
  { verse: "Hosea 3:1", text: "The LORD said to me, 'Go, show your love to your wife again, though she is loved by another man and is an adulteress. Love her as the LORD loves the Israelites.'" },
  { verse: "1 Corinthians 13:7", text: "Love bears all things, believes all things, hopes all things, endures all things." },
  { verse: "Proverbs 11:14", text: "For lack of guidance a nation falls, but victory is won through many advisers." },
  { verse: "Ecclesiastes 4:12", text: "Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken." },
  { verse: "Matthew 19:6", text: "So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate." },
  { verse: "Romans 12:18", text: "If it is possible, as far as it depends on you, live at peace with everyone." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function MarriageCrisisPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_marriage_crisis_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_marriage_crisis_voice", "gottman");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type MarriageCrisisJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [mcJournal, setMcJournal] = useState<MarriageCrisisJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_marriagecrisisj_entries") ?? "[]"); } catch { return []; } });
  const [jmcFeeling, setJmcFeeling] = useState("");
  const [jmcTruth, setJmcTruth] = useState("");
  const [jmcStep, setJmcStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_marriagecrisisj_entries", JSON.stringify(mcJournal)); } catch {} }, [mcJournal]);
  function saveMcEntry() {
    if (!jmcFeeling.trim() && !jmcTruth.trim()) return;
    setMcJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jmcFeeling, truth: jmcTruth, step: jmcStep }, ...prev]);
    setJmcFeeling(""); setJmcTruth(""); setJmcStep("");
  }
  function deleteMcEntry(id: string) { setMcJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶�� Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ background: "linear-gradient(180deg, rgba(107,79,187,0.08) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>💍</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Marriage in Crisis</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.75 }}>
          For marriages in serious trouble. Theology, research-backed practices, and
          honest voices for the hard work of fighting for a covenant that matters.
        </p>
        <div style={{ background: `${PURPLE}18`, border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: "14px 20px", maxWidth: 480, margin: "0 auto", fontSize: 14, color: "#D0C0F8", lineHeight: 1.7 }}>
          <strong>If you are in danger:</strong> National DV Hotline: <strong>1-800-799-7233</strong><br />
          <strong>Crisis support:</strong> Call or text <strong>988</strong>
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Write honestly about where your marriage is and where you are. This is your space — not couples therapy, not performance, just honesty about what you are experiencing and hoping for.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jmcFeeling} onChange={e => setJmcFeeling(e.target.value)}
                  placeholder="Where is my marriage right now? What am I feeling about it honestly?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jmcTruth} onChange={e => setJmcTruth(e.target.value)}
                  placeholder="What do I actually want for this marriage? What am I holding onto?"
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jmcStep} onChange={e => setJmcStep(e.target.value)}
                  placeholder="One step I can take today — toward help, toward my spouse, or toward my own clarity..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveMcEntry}
                  style={{ alignSelf: "flex-start", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {mcJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Honest reflection in hard seasons is worth the effort.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {mcJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteMcEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
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
              { videoId: "2b0PxJcUCNM", title: "The Four Horsemen — John Gottman", channel: "The Gottman Institute", description: "Gottman explains the four relationship patterns that most reliably predict divorce — criticism, contempt, defensiveness, stonewalling — and how to identify and interrupt them in your own marriage." },
              { videoId: "UHaZ1EAX_J8", title: "Sacred Marriage: Theology for Hard Seasons", channel: "Gary Thomas", description: "Thomas on the theological reframing that helps couples endure difficulty — how marriage can be a vehicle for sanctification, and what that means practically for a marriage that is struggling." },
              { videoId: "O-Ae26mHBT8", title: "Rebuilding Trust After Betrayal", channel: "Focus on the Family", description: "A pastoral and practical conversation about rebuilding trust after infidelity or significant betrayal — what genuine repentance looks like, what rebuilding requires, and what timelines are realistic." },
              { videoId: "ZR-J8DQGFOI", title: "When to Keep Trying and When to Stop", channel: "Leslie Vernick", description: "Vernick on the critical distinction between difficult marriages that can be repaired and destructive marriages where the usual advice is inadequate — how to assess which situation you are in." },
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
