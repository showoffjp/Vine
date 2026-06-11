"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  {
    title: "Depression Is Not a Sin",
    verse: "Psalm 42:5",
    body: "The Psalms are the most honest emotional literature in human history. In Psalm 42, the psalmist cries, 'Why, my soul, are you downcast? Why so disturbed within me?' — then does it again in verse 11, and again in Psalm 43. The repetition is not a failure of faith. It is the biblical model of faith in distress: honest lament addressed to God. Depression — the persistent heaviness, the absence of joy, the inability to believe good things will happen — is a human experience documented throughout Scripture, from Elijah under the broom tree to Jeremiah's 'Lamentations.'"
  },
  {
    title: "Elijah Wanted to Die — God Sent Food and Sleep",
    verse: "1 Kings 19:3-8",
    body: "After the greatest triumph of his prophetic career (the fire on Carmel), Elijah ran into the wilderness, sat under a broom tree, and said: 'I have had enough, LORD. Take my life.' God's first response was not a sermon. It was an angel touching him and saying, 'Get up and eat.' Then food. Then more sleep. Then more food. Then a journey. God treated the physical reality of Elijah's collapse before addressing the theological. This is profoundly instructive: the body matters. Sleep deprivation, nutritional depletion, and exhaustion contribute to depression — and God took these seriously before speaking to the soul."
  },
  {
    title: "Jesus Knew Sorrow — He Is Not Distant from Yours",
    verse: "Isaiah 53:3",
    body: "Jesus was 'a man of sorrows, acquainted with grief' (Isaiah 53:3). At Lazarus's tomb, 'Jesus wept' (John 11:35) — in the full knowledge that he was about to raise him. In Gethsemane, his soul was 'overwhelmed with sorrow to the point of death' (Matthew 26:38). This means our high priest is not unfamiliar with the weight of the darkness you carry. He is not repelled by your suffering; he entered it. He is not waiting for you to feel better before drawing near — he draws near to the brokenhearted (Psalm 34:18)."
  },
  {
    title: "The Brain Is a Physical Organ — Depression Can Be Medical",
    verse: "Psalm 139:14",
    body: "We are 'fearfully and wonderfully made' — which means the body God designed includes a brain whose chemistry can malfunction, whose neural pathways can become dysregulated, whose neurotransmitter systems can be depleted. Major depressive disorder is a recognized medical condition with biological underpinnings. Treating it with medication, therapy, exercise, sleep regulation, and nutritional support is not a failure of faith — any more than treating diabetes with insulin is a failure of faith. God heals through means, and the healing professions are among those means."
  },
  {
    title: "Lament Is a Biblical Act of Worship",
    verse: "Lamentations 3:1-3",
    body: "The book of Lamentations begins: 'I am the man who has seen affliction by the rod of the LORD's wrath. He has driven me away and made me walk in darkness rather than light... he has turned his hand against me again and again, all day long.' This is in the Bible. Honest lament — naming the darkness, holding it before God, refusing both cheap comfort and cynical despair — is a profoundly biblical act. The psalms of lament (Psalms 22, 38, 88) give voice to experiences that many Christians are told they should not have. The Bible gives them a script to pray instead."
  },
];

const VOICES = [
  {
    id: "spurgeon",
    name: "Charles Spurgeon",
    era: "1834–1892",
    context: "Victorian Baptist preacher; Metropolitan Tabernacle, London",
    bio: "Spurgeon preached to congregations of up to ten thousand people — and battled clinical depression for much of his adult life. He wrote about it with remarkable candor in an era when such transparency was almost unheard of. He described periods when he sank 'low as Jonah,' when the heavens were 'brass,' when he could not believe what he had preached the week before. His honesty about the experience of depression in a person of deep faith made him uniquely credible and influential on this subject.",
    quote: "I have been down in the depths, where the very clouds were below me. I have been in the valley where the sun seemed never to shine. I know what it is to be in that condition; and if I did not understand it, I should have to confess that my ministry had failed to embrace a very large portion of the human family.",
    contribution: "Spurgeon normalized the experience of depression among serious Christians by refusing to present a false cheerfulness. His openness — at a time when his reputation and ministry were at stake — gave permission to countless Christians to stop performing joy and start bringing their honest darkness to God. His sermons on the 'Slough of Despondency' and allied subjects remain some of the most compassionate Christian writing on the subject."
  },
  {
    id: "lewis",
    name: "C.S. Lewis",
    era: "1898–1963",
    context: "Oxford/Cambridge don; lay theologian; novelist",
    bio: "Lewis wrote The Problem of Pain as a systematic treatment of suffering before it was personal. After his wife Joy died of cancer, he began keeping a grief journal — raw, honest, and at times furious with God. Published as A Grief Observed, it chronicles the psychological and spiritual reality of acute grief and depression in unflinching detail. The contrast between the measured Lewis of The Problem of Pain and the anguished Lewis of A Grief Observed is itself instructive: abstract theology of suffering and the felt experience of it are entirely different things.",
    quote: "Meanwhile, where is God? This is one of the most disquieting symptoms. When you are happy, so happy that you have no sense of needing Him, if you turn to Him then with praise, you will be welcomed with open arms. But go to Him when your need is desperate, when all other help is vain and what do you find? A door slammed in your face.",
    contribution: "A Grief Observed became a classic precisely because Lewis wrote it without editing his doubt, without resolving the tension prematurely, and without arriving at tidy conclusions. He modeled honest engagement with God in the darkness — and the gradual, non-linear way through it. His willingness to describe the experience of God as absent, silent, or hostile in seasons of grief has given permission to Christians to be honest about their own darkness."
  },
  {
    id: "nouwen",
    name: "Henri Nouwen",
    era: "1932–1996",
    context: "Dutch Catholic priest, psychologist; L'Arche Daybreak community",
    bio: "Henri Nouwen suffered a severe depressive breakdown in 1987–1988, which he documented in The Inner Voice of Love (not published until after his death). The book charts the spiritual journey through clinical depression with extraordinary depth. Nouwen spent time in clinical care and later developed one of the most tender, psychologically sophisticated theologies of the 'wounded healer' — the idea that those who have been broken are uniquely equipped to bring compassion to others' brokenness.",
    quote: "Your pain is deep, and it won't simply go away. It is also uniquely yours, because it is linked to some of your earliest life experiences... But your call is to bring that pain home. As long as your wounded part remains foreign to your adult self, your pain will injure you as well as others.",
    contribution: "Nouwen brought together his training as a psychologist, his experience as a priest, and his own lived experience of depression to create a body of work on spiritual formation in suffering that has no equal. His concept of the 'wounded healer' — the minister whose own pain becomes the source of healing for others — has shaped generations of pastoral counselors and chaplains."
  },
  {
    id: "welch",
    name: "Ed Welch",
    era: "1953–present",
    context: "Biblical counselor; CCEF (Christian Counseling and Educational Foundation)",
    bio: "Welch's Depression: A Stubborn Darkness (2004) remains one of the most theologically rigorous and practically compassionate treatments of depression from a biblical counseling perspective. Unlike some approaches in that tradition, Welch takes the physiological reality of depression seriously while still insisting that Scripture speaks meaningfully to the depressed person's experience. He holds together biological, psychological, and spiritual dimensions without collapsing any of them.",
    quote: "When you are depressed, you don't need more information as much as you need a companion who will enter into the dark place with you. But you need someone who actually believes that the darkness is not the final word.",
    contribution: "Welch distinguished himself by refusing both the reductionism that treats depression as purely medical and the reductionism that treats it as purely spiritual. His model insists that the whole person — body, soul, will, community — is involved in both the experience of depression and the pathway through it. His work has influenced an entire generation of biblical counselors to take a more nuanced, compassionate, and medically-informed approach."
  },
];

const PRACTICES = [
  {
    title: "Don't Perform Recovery",
    icon: "🤍",
    color: "#9333ea",
    desc: "The pressure to seem better than you are — for the sake of others, or for God, or for yourself — deepens isolation. Depression lies: it tells you that you are uniquely broken, that others wouldn't understand, that God is waiting for you to sort yourself out. None of that is true. You are permitted to be exactly where you are.",
    steps: ["Tell one person the truth about how you're actually doing", "Resist the urge to perform spiritual health you don't feel", "Remember: Elijah was honest with God and God met him there", "Don't compare your insides with other people's outsides"]
  },
  {
    title: "Attend to the Physical",
    icon: "🌿",
    color: GREEN,
    desc: "The body is not separate from the soul. Sleep, movement, sunlight, nutrition, and social contact have documented effects on depressive symptoms. This is not a substitute for deeper healing but part of it — God met Elijah's physical needs before addressing his spiritual state.",
    steps: ["Protect sleep: same bedtime, no screens 1 hour before, dark room", "Move daily: even a 10-minute walk has measurable antidepressant effects", "Get outside: natural light regulates circadian rhythms and mood", "Eat: depression often suppresses appetite; eat anyway"]
  },
  {
    title: "Pray the Psalms of Lament",
    icon: "📖",
    color: "#F59E0B",
    desc: "Psalms 22, 38, 42, 43, 88, and others were written for exactly this. Praying them aloud — even without feeling them — is an act of faith. You are telling your soul the truth about God even when your soul doesn't believe it yet.",
    steps: ["Read Psalm 88 aloud — the most unresolved psalm of darkness", "Read Psalm 42 as a dialogue between your soul and God", "Read Psalm 22 and notice that Jesus prayed it from the cross", "Let the psalmist's words be yours when you have none of your own"]
  },
  {
    title: "Seek Competent Care",
    icon: "🤝",
    color: "#EF4444",
    desc: "Depression is a medical condition. Seeking therapy (especially CBT and ACT, which have strong evidence) and consulting a doctor about medication are appropriate responses to a physical illness. These are not failures of faith; they are faithful use of the healing resources God has provided.",
    steps: ["Talk to your primary care doctor about depression symptoms", "Consider a referral to a psychologist or psychiatrist", "Look for a therapist who integrates faith when possible", "Tell your pastor or a trusted friend — don't carry this alone"]
  },
  {
    title: "Stay Connected",
    icon: "👥",
    color: PURPLE,
    desc: "Depression is uniquely isolating — and isolation is uniquely depressing. The instinct to withdraw is understandable but counterproductive. You do not need people to fix anything; you need people to be present. One person who knows and stays is worth more than a hundred who don't know.",
    steps: ["Tell someone 'I'm struggling' — you don't have to explain everything", "Accept help when it's offered — let people bring a meal, check in, sit with you", "Consider a small group or community that can hold you", "If you are having thoughts of suicide, tell someone immediately or call 988"]
  },
];

const SCRIPTURE = [
  { verse: "Psalm 34:18", text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Psalm 88:1-2", text: "LORD, you are the God who saves me; day and night I cry out to you. May my prayer come before you; turn your ear to my cry." },
  { verse: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
  { verse: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you." },
  { verse: "Lamentations 3:22-23", text: "Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function DepressionPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_depression_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_depression_voice", "spurgeon");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  // Journal state
  type DepJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [depJournal, setDepJournal] = useState<DepJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_depj_entries") ?? "[]"); } catch { return []; } });
  const [jdFeeling, setJdFeeling] = useState("");
  const [jdTruth, setJdTruth] = useState("");
  const [jdStep, setJdStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_depj_entries", JSON.stringify(depJournal)); } catch {} }, [depJournal]);
  function saveDepEntry() {
    if (!jdFeeling.trim() && !jdTruth.trim()) return;
    setDepJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jdFeeling, truth: jdTruth, step: jdStep }, ...prev]);
    setJdFeeling(""); setJdTruth(""); setJdStep("");
  }
  function deleteDepEntry(id: string) { setDepJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string; icon: string }[] = [
    { id: "theology", label: "Theology", icon: "📖" },
    { id: "voices", label: "Voices", icon: "🎓" },
    { id: "practices", label: "Practices", icon: "🛤️" },
    { id: "scripture", label: "Scripture", icon: "✝️" },
    { id: "journal", label: "My Journal", icon: "📓" },
    { id: "videos", label: "Videos", icon: "▶️" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "var(--header-height, 80px)" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(180deg, rgba(107,79,187,0.08) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>🌑</div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
          Depression & the Christian Faith
        </h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto 24px", lineHeight: 1.75 }}>
          You are not alone. You are not uniquely broken. God is not waiting for you to feel better.
          Scripture, theological wisdom, and practical care for those walking through the darkness.
        </p>
        <div style={{ display: "inline-block", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 8, padding: "10px 20px", color: "#EF4444", fontSize: 13, fontWeight: 700 }}>
          If you are in crisis, call or text 988 (Suicide & Crisis Lifeline)
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, margin: "28px 0", overflowX: "auto" }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY TAB */}
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

        {/* VOICES TAB */}
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

        {/* PRACTICES TAB */}
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

        {/* SCRIPTURE TAB */}
        {tab === "scripture" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>Scripture for the Dark Places</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                These are not platitudes. They are words God has spoken into darkness — from the darkness, about the darkness, through the darkness. Read them slowly. Read them aloud. Let the psalmist pray when you cannot.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {SCRIPTURE.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: PURPLE, fontWeight: 800, fontSize: 14, marginBottom: 10 }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid rgba(239,68,68,0.3)`, borderRadius: 12, padding: 24, marginTop: 24 }}>
              <h3 style={{ color: "#EF4444", fontWeight: 800, fontSize: 16, marginBottom: 8 }}>The Psalms of Lament</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 12 }}>
                Read these psalms when you have no words of your own: Psalm 22, 38, 42, 43, 69, 88, 102, 130, 142. The most unresolved is Psalm 88 — it ends in darkness with no resolution. God included it in Scripture. Your darkness is permitted.
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Ps 22", "Ps 38", "Ps 42", "Ps 43", "Ps 69", "Ps 88", "Ps 102", "Ps 130", "Ps 142"].map(p => (
                  <span key={p} style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 6, padding: "4px 10px", color: "#EF4444", fontSize: 12, fontWeight: 700 }}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* JOURNAL TAB */}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 4, lineHeight: 1.7 }}>
                You do not have to have it together to write here. Name what you feel. Then speak one true thing about God — even if you don&apos;t fully believe it yet.
              </p>
              <p style={{ color: "#EF4444", fontSize: 12, fontWeight: 700, marginBottom: 20 }}>
                If you are in crisis, please call or text 988 before continuing.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea
                  value={jdFeeling}
                  onChange={e => setJdFeeling(e.target.value)}
                  placeholder="How are you honestly feeling right now? (There are no wrong answers here)"
                  rows={3}
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }}
                />
                <textarea
                  value={jdTruth}
                  onChange={e => setJdTruth(e.target.value)}
                  placeholder="One true thing about God — even a verse, even something you barely believe right now..."
                  rows={2}
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }}
                />
                <input
                  value={jdStep}
                  onChange={e => setJdStep(e.target.value)}
                  placeholder="One small, specific step for today (optional — even 'get out of bed' counts)"
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }}
                />
                <button
                  type="button"
                  onClick={saveDepEntry}
                  style={{ alignSelf: "flex-start", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
                >
                  Save Entry
                </button>
              </div>
            </div>
            {depJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>
                <div style={{ fontSize: 40, marginBottom: 10 }}>🕯️</div>
                <p>No entries yet. Your first entry can be just one honest sentence.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {depJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteDepEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
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

        {/* VIDEOS TAB */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>Video Teachings</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Honest, pastorally careful teaching on depression from Christian scholars, counselors, and pastors who have either walked through it themselves or spent careers caring for those who have.
              </p>
            </div>
            {[
              { videoId: "p7FHgCn7SzY", title: "Spurgeon's Battle with Depression", channel: "Desiring God", description: "John Piper explores Spurgeon's lifelong struggle with depression — how the 'Prince of Preachers' wrestled publicly and honestly with darkness, and what his example teaches the church about honesty, faith, and the nature of depression." },
              { videoId: "H7z_bFpGP0c", title: "When Depression Meets Faith", channel: "CCEF / Ed Welch", description: "Ed Welch — author of Depression: A Stubborn Darkness — talks about how biblical counseling approaches depression, what Scripture actually says to the depressed person, and why 'just trust God more' is an insufficient response." },
              { videoId: "jBGE4sYWOl4", title: "Walking Through Depression as a Christian", channel: "The Gospel Coalition", description: "A panel of pastors and counselors discuss the pastoral care of people with depression — what the church gets right, what it gets wrong, and how to accompany someone through the darkness without easy answers." },
              { videoId: "4bZ86G8VrG0", title: "God in the Dark: Finding Faith Through Depression", channel: "BioLogos", description: "A thoughtful theological reflection on how Christians can maintain faith through clinical depression — addressing the question of God's presence in the absence of felt experience." },
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
