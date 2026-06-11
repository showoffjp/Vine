"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Elijah's Collapse — Burnout in Scripture", verse: "1 Kings 19:4", body: "After the greatest triumph of his ministry, Elijah ran from a death threat and collapsed under a broom tree: 'I have had enough, LORD. Take my life; I am no better than my ancestors.' This is burnout in its classic form: emotional exhaustion, cynicism ('I am no better'), reduced sense of accomplishment. Elijah had just called fire from heaven. Burnout does not discriminate by spirituality — it often strikes those who have given the most." },
  { title: "The Sabbath Was Made for You", verse: "Mark 2:27", body: "Jesus's provocative statement — 'The Sabbath was made for man, not man for the Sabbath' — reveals God's original design intent. Sabbath is not a rule to obey but a gift to receive: the weekly reminder that the world does not depend on your productivity. God built rest into the fabric of creation (Genesis 2:2-3). He rested on the seventh day — not because he was tired, but as a model for his image-bearers. The burnout epidemic is in part a Sabbath problem." },
  { title: "Our Identity Is Not Our Output", verse: "Matthew 11:28-30", body: "Much Christian ministry burnout is fueled by an identity equation: 'My value = what I produce for God.' This is works-righteousness wearing ministry clothing. Jesus's invitation in Matthew 11:28-30 is not to more efficient service but to rest: 'Come to me, all you who are weary and burdened, and I will give you rest.' The burnout of the person who equates faithfulness with busyness is often God's merciful interruption — an invitation to discover that his love for you preceded your service to him." },
  { title: "The Limits of the Body Are Not Spiritual Failures", verse: "Psalm 103:14", body: "'He knows how we are formed, he remembers that we are dust' (Psalm 103:14). Finitude is not a defect; it is a design feature. God created human beings with physical and psychological limits. Working beyond capacity — whether in ministry, work, or caregiving — is not virtue; it is the violation of a design specification. The capacity to burn out is evidence that you are human. The question is not whether you have limits but whether you will acknowledge them before they enforce themselves." },
];

const VOICES = [
  { id: "scazzero", name: "Peter Scazzero", era: "1956–present", context: "Pastor; Emotionally Healthy Spirituality movement", bio: "Scazzero suffered his own near-burnout as founding pastor of New Life Fellowship in New York City, which led him to develop the Emotionally Healthy Spirituality paradigm. His core insight: 'Emotional health and spiritual maturity are inseparable. It is not possible to be spiritually mature while remaining emotionally immature.' Much Christian burnout is the result of serving from an emotionally empty and unprocessed place.", quote: "We can be orthodox in our theology and completely immature emotionally. Most leadership burnout I have witnessed comes not from working too hard but from working disconnected — disconnected from God, from oneself, from community, and from a sense of call.", contribution: "Scazzero gave the church a framework for understanding why theologically sophisticated Christians burn out: spiritual activity is not the same as spiritual depth, and emotional immaturity can undermine the most gifted and committed servant." },
  { id: "barrs", name: "Jerram Barrs", era: "1943–present", context: "L'Abri Fellowship; Covenant Seminary", bio: "Barrs spent decades at L'Abri Fellowship, a residential study center founded by Francis Schaeffer for people in intellectual and spiritual crisis. His pastoral wisdom on burnout integrates the theological conviction that our humanity — finitude, need for rest, vulnerability — is not a problem to overcome but a reality to embrace as good stewardship of what God has given.", quote: "The Christian doctrine of creation means that our physical and emotional limits are not obstacles to serving God but part of the way God made us. Treating yourself as if you were not finite is not faith; it is a kind of practical atheism — acting as if God needs you to work beyond your limits to accomplish his purposes.", contribution: "Barrs provided a theological case for rest and limits rooted not in self-care language but in the doctrine of creation — God made us finite, and respecting those limits is an act of trust in the sovereign God who does not need our exhausted over-giving." },
  { id: "swenson", name: "Richard Swenson", era: "1947–present", context: "Physician; author of Margin: Restoring Emotional, Physical, Financial, and Time Reserves", bio: "Swenson's Margin (1992) diagnosed what he called 'marginlessness' — the systematic elimination of reserve capacity in modern life — as a primary driver of burnout and fragmentation. His prescription was counter-cultural: deliberately build margin (time, emotional, financial, physical) into every area of life. For Christians, this was framed as stewardship of the human being God entrusted you with.", quote: "The conditions of modern-day living devour margin. Marginlessness is the condition of not having time to finish what you're doing. Margin is the space between your load and your limits. If you are living without margin, you are living at the edge of your limits all the time — and you are one crisis away from collapse.", contribution: "Swenson gave a medically-informed framework for understanding burnout as systemic rather than personal failure, and provided concrete prescriptions for rebuilding the reserve capacity that modern Christian life systematically depletes." },
];

const PRACTICES = [
  { title: "Diagnosis First — Understand Where You Are", icon: "🔍", color: PURPLE, desc: "Burnout has three classic dimensions: emotional exhaustion (depleted), depersonalization/cynicism (detached), and reduced accomplishment (defeated). Knowing which dimension is primary helps identify the response.", steps: ["Emotional exhaustion: Are you consistently depleted with no recovery?", "Cynicism: Have you become numb, detached, or resentful toward what you used to love?", "Reduced accomplishment: Does nothing feel meaningful or effective?", "Name which is primary — this guides the recovery path"] },
  { title: "Stop Before the Complete Collapse", icon: "🛑", color: "#EF4444", desc: "Elijah stopped (collapsed) under a broom tree. Most burnt-out Christians push past the warning signs until the body or soul enforces a stop. The godly response is to stop voluntarily before that happens. This requires faith: trusting that the work will continue without you.", steps: ["Take three days with no productive output — not vacation with guilt", "Tell someone with authority over your schedule: 'I need to stop for a period'", "Do not attempt to solve the burnout while burnt out", "Let the rest be real rest, not recovery-as-productivity"] },
  { title: "Sabbath as Practice, Not Principle", icon: "☀️", color: GREEN, desc: "Sabbath only works if it is practiced, not just believed in. This means a regular, non-negotiable rhythm of cessation — stopping work, receiving rest, engaging in delight. Eugene Peterson called Sabbath the 'subversive act' against a culture that measures worth by productivity.", steps: ["Choose one day per week for Sabbath — write it in your calendar", "Identify 3 things that restore you (not produce) and do them", "Eliminate screens and productivity tools for the day", "Review after 4 weeks — what changed in your capacity and joy?"] },
  { title: "Reconnect with Why You Started", icon: "🧭", color: "#F59E0B", desc: "Burnout often involves identity drift — losing sight of the original calling or love that motivated service. Recovery involves finding the thread back to the original why, before the accumulated obligations obscured it.", steps: ["Journal: 'Why did I originally feel called to this work/ministry?'", "Identify what brought you joy at the beginning that no longer does", "Have a conversation with someone who knew you when you started", "Ask: 'If I could design this role with no constraints, what would remain?'"] },
];

const SCRIPTURE = [
  { verse: "Matthew 11:28-30", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls." },
  { verse: "Psalm 23:1-3", text: "The LORD is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul." },
  { verse: "Isaiah 40:31", text: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." },
  { verse: "Exodus 33:14", text: "The LORD replied, 'My Presence will go with you, and I will give you rest.'" },
  { verse: "Psalm 62:1", text: "Truly my soul finds rest in God; my salvation comes from him." },
  { verse: "Mark 6:31", text: "Then, because so many people were coming and going that they did not even have a chance to eat, he said to them, 'Come with me by yourselves to a quiet place and get some rest.'" },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function BurnoutPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_burnout_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_burnout_voice", "scazzero");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type BurnoutJE = { id: string; date: string; state: string; truth: string; step: string };
  const [burnoutJournal, setBurnoutJournal] = useState<BurnoutJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_burnoutj_entries") ?? "[]"); } catch { return []; } });
  const [jbState, setJbState] = useState("");
  const [jbTruth, setJbTruth] = useState("");
  const [jbStep, setJbStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_burnoutj_entries", JSON.stringify(burnoutJournal)); } catch {} }, [burnoutJournal]);
  function saveBurnoutEntry() {
    if (!jbState.trim() && !jbTruth.trim()) return;
    setBurnoutJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), state: jbState, truth: jbTruth, step: jbStep }, ...prev]);
    setJbState(""); setJbTruth(""); setJbStep("");
  }
  function deleteBurnoutEntry(id: string) { setBurnoutJournal(prev => prev.filter(e => e.id !== id)); }

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
      <main id="main-content" style={{ paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(180deg, rgba(58,125,86,0.06) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>🕯️</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Burnout & Rest</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.75 }}>
          Burnout is not weakness — it is often the cost of faithfulness without appropriate limits.
          Theological foundations and a path toward restoration.
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
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Rest & Recovery Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Name where you are, speak one truth about what God invites you into, and take one step toward rest.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jbState} onChange={e => setJbState(e.target.value)}
                  placeholder="Where am I right now? (exhausted, cynical, empty, numb...)"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jbTruth} onChange={e => setJbTruth(e.target.value)}
                  placeholder="One true thing about God's invitation to rest..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jbStep} onChange={e => setJbStep(e.target.value)}
                  placeholder="One concrete step toward rest this week..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveBurnoutEntry}
                  style={{ alignSelf: "flex-start", background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {burnoutJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Name where you are — that&apos;s the beginning of recovery.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {burnoutJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteBurnoutEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
                    </div>
                    {e.state && <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>{e.state}</p>}
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
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality — Peter Scazzero", channel: "Emotionally Healthy Discipleship", description: "Scazzero on why emotional health and spiritual maturity are inseparable, and how most church burnout stems from serving from an emotionally immature and disconnected place." },
              { videoId: "SqGRnlXplx0", title: "The Rest of God — Eugene Peterson", channel: "Regent College", description: "Peterson on sabbath as a revolutionary act — how the practice of Sabbath subverts the culture of productivity and restores the soul to its proper relationship with God." },
              { videoId: "DFApBaFl5hM", title: "Ministry Burnout: Causes and Cures", channel: "The Gospel Coalition", description: "A panel discussion on the causes of ministry burnout — theological, psychological, and structural — and what genuine recovery looks like for pastors and church workers." },
              { videoId: "G5gLrHClpKQ", title: "Rest Is a Weapon: A Theology of Margin", channel: "Desiring God", description: "A theological case for building margin into life — why rest is not laziness but an act of faith in the God who does not need your exhausted over-giving to accomplish his purposes." },
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
