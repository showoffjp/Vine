"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Father Kept Watching the Horizon", verse: "Luke 15:20", body: "'But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him' (Luke 15:20). The father in the parable saw his son 'a long way off' — which means he was watching the road. Waiting and watching is what the father of the prodigal did. If you are a parent watching for a child who has wandered, you are living inside the parable — on the watching side, not the failing side. The watching is not passive; it is the posture of love that has not stopped hoping." },
  { title: "You Are Not Responsible for Every Choice Your Child Makes", verse: "Ezekiel 18:20", body: "'The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child' (Ezekiel 18:20). The theology of individual responsibility in Ezekiel directly addresses the ancient assumption that parents bore the guilt of their children's choices. You did not cause every wound your child carries, and you cannot fix every choice your adult child makes. The painful work of releasing control — while maintaining love — is not abandonment; it is respect for the human freedom that God himself grants." },
  { title: "God Is the Parent of Wandering Children Too", verse: "Isaiah 65:2", body: "'All day long I have held out my hands to an obstinate and rebellious people, who walk in ways not good, pursuing their own imaginations' (Isaiah 65:2). God's experience in the Old Testament is partly the experience of a parent watching children he loves wander persistently into destruction. He knows your grief from the inside. His hands are extended, his heart is toward them, and the outcome is not yet written — not because he has given up, but because love grants freedom and freedom makes outcomes genuinely uncertain." },
  { title: "Praying for the Prodigal Is Real Work", verse: "Romans 8:26", body: "'We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans' (Romans 8:26). When you don't know what to pray for your child — return, healing, safety, whatever form grace might take — Paul tells you that the Spirit is already at work in the groaning itself. Your inarticulate, exhausted prayers are not inadequate; they are exactly the raw material the Spirit works with. You cannot pray your child into the kingdom; but you can persist in the love that looks like prayer." },
  { title: "The Older Brother Is a Warning", verse: "Luke 15:28", body: "'The older brother became angry and refused to go in' (Luke 15:28). Jesus told the parable of the prodigal son to Pharisees who were angry about his welcome of sinners. The older brother's refusal to celebrate the return is treated as a failure, not a virtue. As you wait for your child, it is worth examining whether resentment, pride, or conditions on the welcome have crept in. The father in the parable did not attach terms to the welcome — he ran before he knew what the son would say. The welcome came first." },
];

const VOICES = [
  { id: "manning", name: "Brennan Manning", era: "1934–2013", context: "The Ragamuffin Gospel; grace and the prodigal", bio: "Manning's The Ragamuffin Gospel was written, in part, for those who have wandered from God — but it is equally a book for those who love wanderers. His emphasis on the relentless, pursuing grace of a God who does not attach conditions to his welcome has given thousands of parents a theological posture that enables them to keep the door open without controlling the outcome.", quote: "The father of the prodigal was not waiting at home wondering if the boy had earned a welcome. He was scanning the horizon. The parable tells us something about God — that grace moves toward the lost before the lost has moved toward grace. If you are a parent, that is your model: horizon-watching love, arms-open welcome, no conditions on the embrace.", contribution: "Manning's theology of grace gave parents of prodigals a posture — relentless, unconditional, watching — grounded in the character of God rather than in parental performance." },
  { id: "yancey", name: "Philip Yancey", era: "1949–present", context: "What's So Amazing About Grace; church and wanderers", bio: "Yancey's What's So Amazing About Grace returns repeatedly to the question of what grace actually looks like toward those who have made choices that damage themselves and others. His work gives both the wanderers and those who love them a picture of grace that is both utterly serious about sin and utterly serious about welcome.", quote: "Grace means there is nothing I can do to make God love me more, and nothing I can do to make him love me less. The prodigal's father did not love him more because he came home; he loved him while he was away, and that love was what the son eventually came home to. That is the love you can embody for your child.", contribution: "Yancey helped thousands understand grace as a practical reality — not a theological abstraction — applicable to the specific, daily experience of loving a prodigal child." },
  { id: "jones", name: "James Dobson", era: "1936–present", context: "Focus on the Family; Bringing Up Boys; parenting ministry", bio: "Dobson's When God Doesn't Make Sense addresses the specific grief of parents whose prayers for their children seem unanswered. While his theology has a different flavor from Manning or Yancey, his pastoral engagement with the grief of parents who have done their best and still watch their children wander speaks to a real and common anguish in Christian families.", quote: "Some parents feel that if they had done everything right, their children would not have wandered. That is not always true. Good parents can have prodigal children. Bad parents can have children who walk faithfully. The variables are too complex, the child's freedom too real, the grace of God too unpredictable to reduce to a formula.", contribution: "Dobson addressed the guilt and shame that many Christian parents carry when their children wander, releasing them from the false equation of perfect parenting and guaranteed faithful children." },
];

const PRACTICES = [
  { title: "Keep the Door Open Without Controlling the Outcome", icon: "🚪", color: GREEN, desc: "The posture of the prodigal's father was waiting with open arms — not pursuing, not controlling, not attaching conditions to the welcome. Maintaining this posture over years is emotionally and spiritually demanding work.", steps: ["Communicate clearly: 'I love you, and you are always welcome here'", "Distinguish between conditional love (I love you if you return) and unconditional love (I love you while you are away)", "Release the outcome — you cannot pray, guilt, or manipulate your child back", "Stay connected at whatever level is possible without enabling destructive behavior"] },
  { title: "Grieve What You Expected", icon: "💔", color: PURPLE, desc: "The grief of a prodigal is partly the grief of a story that is not going the way you hoped. The child you imagined at 35, the faith you expected them to carry, the grandchildren you hoped would be raised in the faith — these are real losses that deserve to be grieved, not suppressed.", steps: ["Name what you are grieving specifically: 'I am grieving the son/daughter I expected'", "Find a counselor or support group who understands this specific grief", "Pray honestly about the grief — don't perform acceptance before you have found it", "Reconnect with your own faith and life — your story is not over because theirs has gone another direction"] },
  { title: "Find Community with Other Parents of Prodigals", icon: "🤝", color: "#F59E0B", desc: "The specific isolation of this grief — loving a child who has rejected what you love most — is best held by people who know it from the inside. These communities exist within the church, though they are often hidden.", steps: ["Ask your pastor to connect you with others carrying this grief in your congregation", "Prodigal's Prayer (prodigalsprayer.com) has resources and community for parents", "Consider a support group specifically for parents of prodigals", "Your grief is not shameful — other parents share it, and community makes it bearable"] },
  { title: "Tend to Your Own Faith — Not Just Theirs", icon: "✝️", color: GREEN, desc: "Parents of prodigals often subordinate their own spiritual life to their anxiety about their child's. But your own continuing faith, health, and joy are not selfish distractions from loving your child — they are the conditions from which sustained love flows.", steps: ["Invest in your own spiritual formation — not just prayer about your child", "Pursue relationships, joys, and purposes beyond your child's situation", "Let God minister to you, not only through you", "Consider: what would full flourishing look like for you, regardless of your child's choices?"] },
];

const SCRIPTURE = [
  { verse: "Luke 15:20", text: "While he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." },
  { verse: "Isaiah 65:2", text: "All day long I have held out my hands to an obstinate and rebellious people, who walk in ways not good, pursuing their own imaginations." },
  { verse: "Romans 8:26", text: "We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Psalm 139:7-8", text: "Where can I go from your Spirit? Where can I flee from your presence? If I go up to the heavens, you are there; if I make my bed in the depths, you are there." },
  { verse: "Proverbs 22:6", text: "Start children off on the way they should go, and even when they are old they will not turn from it." },
  { verse: "Lamentations 3:22-23", text: "Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function ProdigalPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_prodigal_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_prodigal_voice", "manning");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type ProdigalJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [prodJournal, setProdJournal] = useState<ProdigalJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_prodigalj_entries") ?? "[]"); } catch { return []; } });
  const [jprFeeling, setJprFeeling] = useState("");
  const [jprTruth, setJprTruth] = useState("");
  const [jprStep, setJprStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_prodigalj_entries", JSON.stringify(prodJournal)); } catch {} }, [prodJournal]);
  function saveProdEntry() {
    if (!jprFeeling.trim() && !jprTruth.trim()) return;
    setProdJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jprFeeling, truth: jprTruth, step: jprStep }, ...prev]);
    setJprFeeling(""); setJprTruth(""); setJprStep("");
  }
  function deleteProdEntry(id: string) { setProdJournal(prev => prev.filter(e => e.id !== id)); }

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
        <div style={{ fontSize: 52, marginBottom: 12 }}>🏠</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>The Prodigal&rsquo;s Parent</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.75 }}>
          For parents watching a child wander from faith or into destruction.
          Theology, voices, and practices for the long work of watching the horizon with open arms.
        </p>
        <div style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "14px 20px", maxWidth: 440, margin: "0 auto", fontSize: 14, color: "#B0D8BE", lineHeight: 1.7 }}>
          <strong>If you are in crisis:</strong> Call <strong>988</strong> (Suicide &amp; Crisis Lifeline).<br />
          <strong>Support:</strong> Prodigals Prayer (prodigalsprayer.com)
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
                Write about where you are in the waiting — the grief, the hope, the prayers, the relationship.
                Your love is real. Your waiting is holy work.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jprFeeling} onChange={e => setJprFeeling(e.target.value)}
                  placeholder="Where am I today with my child? What am I feeling? What happened recently?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jprTruth} onChange={e => setJprTruth(e.target.value)}
                  placeholder="One true thing I am holding about God, about my child, about this season..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jprStep} onChange={e => setJprStep(e.target.value)}
                  placeholder="One way I will love my child today, or care for myself today..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveProdEntry}
                  style={{ alignSelf: "flex-start", background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {prodJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. The watching is holy work worth recording.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {prodJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteProdEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
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
              { videoId: "NnGBhG03g4M", title: "Praying for Your Prodigal Child — Brennan Manning", channel: "Brennan Manning", description: "Manning on the grace that sustains parents while a child wanders — the posture of watching, the theology of unconditional love, and how to pray honestly without controlling the outcome." },
              { videoId: "j2h-q3ZPKFI", title: "When Your Child Walks Away from Faith", channel: "Focus on the Family", description: "Practical and pastoral guidance for parents navigating a child's departure from faith — what to do, what not to do, how to stay connected, and how to maintain love without conditions." },
              { videoId: "Hq1t7kMjXAY", title: "The Parable of the Prodigal Son — Tim Keller", channel: "Gospel in Life", description: "Keller's extended exposition of Luke 15 — including the often-overlooked older brother — exploring what the parable reveals about grace, welcome, and the posture of the Father." },
              { videoId: "LQNbUqVwVlo", title: "Hope for Parents of Prodigals", channel: "The Gospel Coalition", description: "Stories and theological reflection from parents who have walked the long road of loving a prodigal — what sustained them, what surprised them, and what they wish they had known earlier." },
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
