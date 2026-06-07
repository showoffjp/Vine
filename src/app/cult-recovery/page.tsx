"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Truth Sets Free — Not Binds, Controls, or Isolates", verse: "John 8:32", body: "'Then you will know the truth, and the truth will set you free' (John 8:32). Jesus described the outcome of genuine encounter with truth as freedom — not compliance, not submission to a leader's interpretation, not growing dependency. Wherever a religious community's version of 'truth' produces increased control, isolation from outside relationships, and fear of questioning, it is moving in the opposite direction from what Jesus described. Freedom is the diagnostic sign of genuine encounter with Jesus; bondage is the diagnostic sign of manipulation, however spiritually it is dressed." },
  { title: "Jesus Contrasted His Leadership With Heavy Burdens", verse: "Matthew 11:28-30", body: "'Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light' (Matthew 11:28-30). This is not naïve optimism about the Christian life — Jesus elsewhere spoke of persecution, self-denial, and costly discipleship. But the nature of his yoke is described as easy and light. A community that leaves you consistently exhausted, fearful, guilty, and unable to think for yourself is not producing what Jesus promised." },
  { title: "The Bereans Were Commended for Checking What They Were Taught", verse: "Acts 17:11", body: "'Now the Berean Jews were of more noble character than those in Thessalonica, for they received the message with great eagerness and examined the Scriptures every day to see if what Paul said was true' (Acts 17:11). The Bereans did not simply accept what a charismatic leader told them — even an apostle. They went back to Scripture to verify. This is not rebellion or lack of submission; it is described as noble character. Any community that discourages you from examining what you are taught is discouraging a practice that Scripture commends." },
  { title: "Leaving Is Not Apostasy", verse: "Galatians 5:1", body: "'It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery' (Galatians 5:1). High-control groups often frame departure as spiritual failure, loss of salvation, or abandonment of God. Paul's letter to the Galatians was written to people being drawn back into a religious system after experiencing freedom in Christ — and he told them, in the strongest terms, not to return. Leaving a high-control religious group is not leaving God; it may be the first genuine step toward him." },
  { title: "God Is Not Threatened by Your Questions", verse: "Isaiah 1:18", body: "'Come now, let us reason together,' says the LORD (Isaiah 1:18). God invited honest dialogue, argument, and questioning throughout Scripture. Abraham negotiated with God over Sodom. Job demanded an explanation for his suffering. The Psalms are filled with complaints directed at God. Any community that treats your honest questions as spiritual rebellion, lack of faith, or the influence of Satan is misrepresenting the God who consistently invited his people to wrestle with him." },
];

const VOICES = [
  { id: "hassan", name: "Steven Hassan", era: "1954–present", context: "Former Moonie; BITE Model; Freedom of Mind", bio: "Hassan left the Unification Church (the 'Moonies') after a car accident interrupted his indoctrination, and has spent decades since researching and developing resources for cult survivors. His BITE Model — Behavior, Information, Thought, and Emotional control — provides a framework for assessing the degree of control any group exercises and is widely used by cult recovery professionals worldwide.", quote: "A healthy group allows you to think critically, to have relationships outside the group, to leave without punishment, and to access information that challenges the group's worldview. When any of those are missing — especially all of them — the structure itself becomes the tool of control, regardless of the group's stated beliefs.", contribution: "Hassan's BITE Model gave survivors, families, and counselors a systematic framework for assessing cult dynamics — moving the question from 'is this a cult?' to measurable, behavioral criteria that don't depend on theology." },
  { id: "lalich", name: "Janja Lalich", era: "1945–present", context: "Sociologist; Bounded Choice; Cult Recovery", bio: "Lalich's concept of 'bounded choice' — the way high-control groups systematically eliminate the conditions for genuine free choice while maintaining the appearance of voluntary participation — is one of the most important frameworks in cult research. Her work helps survivors understand why leaving was so difficult, and why it was so hard to see the control while inside it.", quote: "The hardest thing for cult survivors to accept is that they were not weak or stupid for being controlled. The system was specifically designed to produce compliance. The question is not 'how could you let this happen?' It is 'what mechanisms were used to close off your capacity to choose otherwise?'", contribution: "Lalich's academic rigor helped legitimize cult recovery as a field and gave survivors a way to understand their experience that moved beyond self-blame to systemic analysis." },
  { id: "enroth", name: "Ronald Enroth", era: "1938–2024", context: "Sociologist; Westmont College; Churches That Abuse", bio: "Enroth was a pioneering Christian sociologist whose books Churches That Abuse and Recovering from Churches That Abuse documented the patterns of high-control Christianity decades before the topic was widely discussed. Writing from within the evangelical world rather than outside it, he provided both survivors and Christian communities with analysis that took both the reality of abuse and the possibility of genuine Christian faith seriously.", quote: "The church that abuses does not typically announce itself as abusive. It presents itself as God's true community, as the remnant, as the place where authentic Christianity is practiced. The control is introduced gradually, the isolation builds over time, and by the time it is severe, leaving feels like abandoning God himself.", contribution: "Enroth brought cult recovery scholarship inside the Christian world, providing language and analysis specifically for survivors of high-control Christian groups — who faced the added complexity of wondering whether leaving meant losing their faith." },
];

const PRACTICES = [
  { title: "Deprogram Your Thinking — Slowly", icon: "🧠", color: PURPLE, desc: "High-control groups install automatic thought patterns that redirect any critical thinking back into the group's framework. Interrupting these patterns is not a quick process — it requires repeatedly catching automatic thoughts and asking whether they are genuinely your own conclusions or installed responses.", steps: ["Notice: when I have a question or doubt, what is my first automatic thought?", "Ask: where did I learn to think this way? Was it through evidence and reasoning, or repetition and social pressure?", "Give yourself permission to sit with a question without immediately resolving it in the group's favor", "Read perspectives on your former group from people outside it — critical scholarship, survivor accounts, academic research"] },
  { title: "Grieve What Was Taken", icon: "💔", color: "#EF4444", desc: "High-control groups often take years, decades, relationships, career trajectories, and in some cases children and marriages. Leaving requires grieving real losses — not just 'waking up' to a better life. Name what was taken specifically.", steps: ["List what you gave: years, money, relationships, career, family relationships, housing, certainty", "You are allowed to be angry about what was taken — not just relieved to be out", "Anticipatory grief about relationships still inside the group is a real form of grief", "A therapist trained in cult recovery can help you work through accumulated losses"] },
  { title: "Rebuild Your Identity", icon: "🌱", color: GREEN, desc: "High-control groups typically replace individual identity with group identity — your role in the group becomes who you are. Leaving creates an identity vacuum that is disorienting and sometimes unbearable. Rebuilding identity is a slow, non-linear process.", steps: ["Rediscover: what did you enjoy before joining? What interests do you have that were not approved by the group?", "Practice making small decisions independently — and notice the anxiety this creates", "Find former members to talk with: they understand the identity vacuum from the inside", "Be patient with yourself: identity reconstruction takes years, not weeks"] },
  { title: "Find Specialized Cult Recovery Support", icon: "🤝", color: "#F59E0B", desc: "General therapists often lack the specific understanding of high-control group dynamics needed to support cult survivors well. Seek out practitioners with specific training in cult recovery and religious trauma.", steps: ["BITE Model Resources (freedomofmind.com) maintains a therapist directory", "International Cultic Studies Association (ICSA) has survivor resources and conference networks", "Recovery from Religion Foundation has online support communities", "If family members are still inside, contact ICSA about how to maintain relationships while outside"] },
];

const SCRIPTURE = [
  { verse: "John 8:32", text: "Then you will know the truth, and the truth will set you free." },
  { verse: "Matthew 11:28-30", text: "Come to me, all you who are weary and burdened, and I will give you rest. For my yoke is easy and my burden is light." },
  { verse: "Acts 17:11", text: "The Berean Jews were of more noble character... for they examined the Scriptures every day to see if what Paul said was true." },
  { verse: "Galatians 5:1", text: "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery." },
  { verse: "Isaiah 1:18", text: "Come now, let us reason together, says the LORD." },
  { verse: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function CultRecoveryPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_cult_recovery_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_cult_recovery_voice", "hassan");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type CultRecoveryJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [crJournal, setCrJournal] = useState<CultRecoveryJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_cultrecovj_entries") ?? "[]"); } catch { return []; } });
  const [jcrFeeling, setJcrFeeling] = useState("");
  const [jcrTruth, setJcrTruth] = useState("");
  const [jcrStep, setJcrStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_cultrecovj_entries", JSON.stringify(crJournal)); } catch {} }, [crJournal]);
  function saveCrEntry() {
    if (!jcrFeeling.trim() && !jcrTruth.trim()) return;
    setCrJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jcrFeeling, truth: jcrTruth, step: jcrStep }, ...prev]);
    setJcrFeeling(""); setJcrTruth(""); setJcrStep("");
  }
  function deleteCrEntry(id: string) { setCrJournal(prev => prev.filter(e => e.id !== id)); }

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
        <div style={{ fontSize: 52, marginBottom: 12 }}>🕊️</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Recovery from High-Control Groups</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto 24px", lineHeight: 1.75 }}>
          For those leaving cults, high-control churches, or spiritually abusive communities.
          Resources for survivors: understanding what happened, rebuilding identity, and finding genuine faith.
        </p>
        <div style={{ background: `${PURPLE}18`, border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: "14px 20px", maxWidth: 540, margin: "0 auto", fontSize: 14, color: "#D0C0F8", lineHeight: 1.7 }}>
          <strong>Crisis support:</strong> Call <strong>988</strong> (Suicide &amp; Crisis Lifeline) anytime.<br />
          <strong>Cult Recovery:</strong> ICSA (icsahome.com) · BITE Model (freedomofmind.com) · Recovery from Religion
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
                You are allowed to question everything. Your confusion is not a failure of faith — it is the disorientation of someone whose whole framework is being rebuilt. Write honestly and without performing recovery you don&rsquo;t yet feel.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jcrFeeling} onChange={e => setJcrFeeling(e.target.value)}
                  placeholder="What am I noticing, feeling, questioning, or grieving today?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jcrTruth} onChange={e => setJcrTruth(e.target.value)}
                  placeholder="One thing I believe is genuinely true — not what I was told to believe, but what I actually think..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jcrStep} onChange={e => setJcrStep(e.target.value)}
                  placeholder="One small act of independence or clarity today..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveCrEntry}
                  style={{ alignSelf: "flex-start", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {crJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Recovery is slow. Each honest thought counts.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {crJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteCrEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
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
              { videoId: "zIaRtbkDi5Q", title: "The BITE Model — Steven Hassan", channel: "Steven Hassan", description: "Hassan explains his BITE Model framework for identifying high-control groups: the four dimensions of control (Behavior, Information, Thought, Emotional) and how to assess whether a group's structure is designed to control rather than serve its members." },
              { videoId: "J5aqgLlImK0", title: "Leaving a High-Control Religious Group", channel: "ICSA Today", description: "Researchers and former members discuss the specific challenges of leaving high-control religious communities — why it's harder than it looks from the outside, and what recovery typically involves." },
              { videoId: "BnGjnLY0P_0", title: "Recovering from Cultic Groups — Identity and Faith", channel: "ICSA", description: "A discussion of the identity-reconstruction process after leaving a high-control group, with particular attention to what happens to religious faith after high-control religious experience." },
              { videoId: "Xr3DlBbhSb4", title: "Bounded Choice: Why Leaving Was So Hard", channel: "Janja Lalich", description: "Lalich explains her concept of bounded choice — how high-control groups systematically eliminate the conditions for genuine free choice — helping survivors understand why leaving was difficult and why that difficulty reflects the system's design, not their weakness." },
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
