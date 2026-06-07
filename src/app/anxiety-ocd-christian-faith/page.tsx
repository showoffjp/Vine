"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#3a7d56";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const tabs = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof tabs[number];

const theology = [
  {
    title: "Anxiety Is Not a Sin",
    body: "When Jesus says 'do not be anxious' (Matt 6:25), He is issuing a pastoral comfort, not a moral command whose violation renders you sinful. This is a crucial distinction. The same Greek word for 'anxious' appears in Philippians 4:6 ('do not be anxious') and in 1 Corinthians 7:32 where Paul himself is described as 'anxious' about the churches — so even Paul was anxious. Clinical anxiety — the neurological condition that produces disproportionate fear responses, physical symptoms, and cognitive distortions — is a physiological reality, not a spiritual failure. Jesus wept, Jesus was troubled in spirit, Jesus was in such distress in Gethsemane that He sweated blood. He understands anxiety from the inside.",
  },
  {
    title: "Scrupulosity: When OCD Targets Faith",
    body: "Scrupulosity is a form of OCD in which the obsessions and compulsions center on religious themes: excessive doubt about sin and forgiveness, fear of having committed the unpardonable sin, inability to pray without repeating prayers 'correctly,' intrusive blasphemous thoughts that the person finds horrifying. People with scrupulosity are often devout Christians who are deeply distressed by the content of their intrusive thoughts — which is precisely the opposite of what they believe. The thoughts are OCD symptoms, not spiritual indications. A therapist trained in OCD treatment (particularly ERP — Exposure and Response Prevention) can help.",
  },
  {
    title: "The Body Is Part of the Person",
    body: "Western Christian thinking has sometimes created a dualism in which the soul or spirit is considered 'real' and the body is considered secondary. Scripture does not teach this. The resurrection of the body is central to Christian theology — God will redeem not just the spirit but the body. This means the physical systems involved in anxiety — the amygdala, the hypothalamic-pituitary-adrenal axis, the autonomic nervous system — are part of the person God created and the person God is redeeming. Treating them with medicine is not a lack of faith. It is appropriate care for the body God inhabits.",
  },
  {
    title: "God Is Present in the Anxious Moment",
    body: "Many Christians with anxiety experience God's felt absence most acutely during anxiety attacks — the moments when their nervous system is most flooded and the capacity for spiritual attunement is most diminished. But God's presence is not contingent on our capacity to feel it. 'Where shall I go from your Spirit? Or where shall I flee from your presence?' (Ps 139:7). He is there in the panic attack, in the 3am spiral, in the worst intrusive thought. The inability to feel Him does not mean He has left.",
  },
  {
    title: "Philippians 4:6–7 Is a Process, Not a Formula",
    body: "'Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.' This passage is frequently used as a formula — if you pray, you won't be anxious. But Paul wrote this from prison. He was describing a practice, not a transaction. The peace that surpasses understanding is real — but it does not preclude the reality of anxiety, medical treatment, or ongoing struggle. It is peace in the midst, not peace instead of.",
  },
];

const voices = [
  {
    name: "Dr. Edward Welch",
    title: "Author, 'Running Scared: Fear, Worry, and the God of Rest'",
    quote: "Fear and worry are not moral failures — they are the soul's honest response to living in a world that is genuinely dangerous, uncertain, and out of our control. The gospel's answer is not more willpower or better thought management. It is a God who is both sovereign over what we fear and genuinely compassionate toward our fear.",
  },
  {
    name: "Dr. Scott Symington",
    title: "Psychologist, 'Full Catastrophe Workbook'",
    quote: "Anxiety disorders are among the most responsive to treatment of any psychiatric condition. The great tragedy is how long people suffer before seeking help — often because they are trying to manage it spiritually alone, or because the shame of 'not having enough faith' prevents them from asking for the help that is available.",
  },
  {
    name: "Kate Bowler",
    title: "Author, 'Good Enough: 40ish Devotionals for a Life of Imperfection'",
    quote: "We have been given too small a vision of what the spiritual life looks like when you are also a person who sweats through shirts in parking lots, who googles symptoms at 2am, whose brain will not stop running catastrophe simulations. God is present in that person too. That person is not a lesser Christian.",
  },
  {
    name: "Jonah Hill",
    title: "Actor — Speaking Publicly on Anxiety",
    quote: "Therapy is not a sign of weakness. It is a sign of self-awareness and commitment to doing the work. The bravest thing I ever did was ask for help.",
  },
];

const practices = [
  {
    title: "ERP Therapy for OCD — The Gold Standard",
    body: "Exposure and Response Prevention (ERP) is the evidence-based treatment for OCD with the strongest research support. It works by gradually exposing the person to anxiety-provoking thoughts or situations while preventing the compulsive responses that temporarily relieve anxiety but reinforce the OCD cycle. For scrupulosity, this might involve resisting the compulsion to re-read a prayer or to seek reassurance about forgiveness. The IOCDF (International OCD Foundation, iocdf.org) maintains a therapist directory filtered by ERP specialization.",
  },
  {
    title: "CBT for Anxiety — Practical and Accessible",
    body: "Cognitive Behavioral Therapy (CBT) helps people identify and challenge the cognitive distortions that amplify anxiety — catastrophizing, all-or-nothing thinking, mind-reading, fortune-telling. CBT-based workbooks (such as 'The Anxiety and Worry Workbook' by Clark and Beck) make these tools accessible between sessions. Many anxiety conditions respond well to CBT within 12–20 sessions. Online CBT programs (Headway, Brightline, BetterHelp) have made this more accessible than ever.",
  },
  {
    title: "Physiological Regulation — The Body Matters",
    body: "Anxiety is as much a bodily experience as a mental one. Physiological regulation techniques can interrupt the anxiety cycle: diaphragmatic breathing (inhale 4 counts, hold 4, exhale 6–8), cold water on the face or wrists, vigorous physical exercise, progressive muscle relaxation, or the vagal nerve stimulation technique (humming, gargling). These are not distractions from faith — they are appropriate care for the nervous system God created.",
  },
  {
    title: "Medication as Care, Not Faithlessness",
    body: "SSRIs (selective serotonin reuptake inhibitors) are first-line medical treatment for both anxiety disorders and OCD. For OCD specifically, higher doses are often required than for depression. The combination of medication and therapy (ERP or CBT) consistently produces better outcomes than either alone. Taking medication for anxiety is not a failure of faith — it is appropriate care for a physiological condition. Talk to a psychiatrist (not only a primary care physician for OCD specifically) about medication options.",
  },
  {
    title: "Scripture Engagement That Doesn't Amplify Scrupulosity",
    body: "For those with scrupulosity, certain forms of devotional practice can inadvertently reinforce OCD: checking the Bible repeatedly for reassurance, re-reading the same passage until it 'feels right,' cataloguing potential sins. A therapist familiar with scrupulosity can help redesign devotional practices that are spiritually nourishing without feeding the OCD cycle. Many scrupulosity specialists recommend reducing compulsive reassurance-seeking in prayer and Scripture reading as part of treatment.",
  },
  {
    title: "Naming the Anxious Thought — Not Fusing With It",
    body: "Mindfulness-based approaches to anxiety involve noticing thoughts without identifying with them: 'I notice I am having the thought that something terrible will happen.' This creates a small distance from the thought that reduces its power. For Christians: 'I notice I am having the thought that I am not forgiven' — and then you can bring that thought to Scripture rather than treating it as a factual report. You are not your anxious thoughts. They are what your nervous system is producing right now.",
  },
];

const scriptures = [
  {
    ref: "Philippians 4:6–7",
    text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    note: "Written from prison. A practice, not a formula. The peace that surpasses understanding is real — and it does not preclude ongoing anxiety, medical treatment, or struggle. It is peace in the midst.",
  },
  {
    ref: "Matthew 6:34",
    text: "Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble.",
    note: "Jesus acknowledges that today has genuine trouble. This is not toxic positivity. It is radical presence: you only have to manage today. Tomorrow's trouble belongs to tomorrow.",
  },
  {
    ref: "Psalm 139:7–8",
    text: "Where shall I go from your Spirit? Or where shall I flee from your presence? If I ascend to heaven, you are there! If I make my bed in Sheol, you are there!",
    note: "God is present in the 3am panic attack, in the worst intrusive thought, in the most flooded moment. The inability to feel Him does not mean He has departed.",
  },
  {
    ref: "Isaiah 41:10",
    text: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
    note: "Three promises in one verse: I will strengthen, I will help, I will uphold. Not 'you must generate these yourself.' God supplies what anxiety depletes.",
  },
  {
    ref: "2 Timothy 1:7",
    text: "For God gave us a spirit not of fear but of power and love and self-control.",
    note: "This does not mean anxiety disorders are simply a spiritual choice. The spirit God gives is oriented toward these qualities — and clinical treatment aims to restore the capacity for them that anxiety disorders impair.",
  },
  {
    ref: "Romans 8:26",
    text: "The Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.",
    note: "Anxiety often makes prayer feel impossible — the words don't come, or they circle endlessly in worry rather than reaching God. The Spirit intercedes in that space. Groaning counts as prayer.",
  },
];

const videos = [
  { id: "oE9qqW1-BkU", title: "Philippians Overview — BibleProject" },
  { id: "qtvQNzPHn-w", title: "Battle Belongs — Phil Wickham" },
  { id: "IvSuGyJQ6oM", title: "Goodness of God — Bethel Music" },
  { id: "fo236aPoxBc", title: "The Rattle of Resurrection — Elevation Church" },
];

const JOURNAL_KEY = "vine_anxiety_ocd_entries";

function JournalTab() {
  const [entries, setEntries] = useState<{ id: number; date: string; text: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");
  const save = () => {
    if (!draft.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  };
  const remove = (id: number) => {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  };
  const prompts = [
    "What am I most afraid of right now? Can I name it specifically?",
    "When has God proven trustworthy in the past, even in anxious seasons?",
    "What compulsions am I doing to manage anxiety that might be making it worse?",
    "What does my nervous system need right now — rest, movement, connection, stillness?",
  ];
  return (
    <div>
      <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
        <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "1rem" }}>Reflection Prompts</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {prompts.map((p, i) => (
            <li key={i} style={{ color: MUTED, fontSize: "0.9rem", paddingLeft: "1rem", borderLeft: `2px solid ${ACCENT}40` }}>{p}</li>
          ))}
        </ul>
      </div>
      <textarea value={draft} onChange={e => setDraft(e.target.value)} placeholder="Write freely — your words are private and stay only on your device..." rows={5} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
      <button onClick={save} style={{ marginTop: 8, padding: "0.6rem 1.6rem", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, fontWeight: 600, cursor: "pointer" }}>Save Entry</button>
      {entries.length > 0 && (
        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {entries.map(e => (
            <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ color: MUTED, fontSize: "0.78rem" }}>{e.date}</span>
                <button onClick={() => remove(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.78rem" }}>Delete</button>
              </div>
              <p style={{ color: TEXT, fontSize: "0.92rem", margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AnxietyOCDChristianFaith() {
  const [activeTab, setActiveTab] = useState<Tab>("Theology");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content">
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}18 0%, transparent 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "4rem 1.5rem 3rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, borderRadius: 20, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>Mental Health & Faith</div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>Anxiety & OCD<br /><span style={{ color: ACCENT }}>The God Who Is There in the Dark</span></h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 620, marginBottom: "1.5rem" }}>For Christians battling anxiety, panic, and OCD — anxiety is not a sin, scrupulosity is a neurological condition not a spiritual one, and the God who was present in Gethsemane is present in your panic attack too.</p>
            <div style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, borderRadius: 8, padding: "1rem 1.2rem", maxWidth: 520 }}>
              <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>Crisis: <strong>988</strong> Suicide & Crisis Lifeline — call or text 988<br /><span style={{ fontWeight: 400, color: MUTED }}>OCD Help: iocdf.org | Anxiety Help: adaa.org | Find a therapist: psychologytoday.com</span></p>
            </div>
          </div>
        </div>
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: BG, position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setActiveTab(t)} style={{ padding: "1rem 1.4rem", background: "none", border: "none", borderBottom: activeTab === t ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === t ? ACCENT : MUTED, fontWeight: activeTab === t ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s" }}>{t}</button>
            ))}
          </div>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "2.5rem 1.5rem" }}>
          {activeTab === "Theology" && (<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{theology.map((item, i) => (<div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}><h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{item.title}</h3><p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{item.body}</p></div>))}</div>)}
          {activeTab === "Voices" && (<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{voices.map((v, i) => (<div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}><p style={{ color: TEXT, lineHeight: 1.8, fontSize: "1rem", fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p><div><div style={{ color: ACCENT, fontWeight: 700, fontSize: "0.9rem" }}>{v.name}</div><div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.title}</div></div></div>))}</div>)}
          {activeTab === "Practices" && (<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{practices.map((p, i) => (<div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}><h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{p.title}</h3><p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{p.body}</p></div>))}</div>)}
          {activeTab === "Scripture" && (<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{scriptures.map((s, i) => (<div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${ACCENT}`, borderRadius: 10, padding: "1.5rem" }}><div style={{ color: ACCENT, fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{s.ref}</div><p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.75, marginBottom: "0.75rem" }}>&ldquo;{s.text}&rdquo;</p><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{s.note}</p></div>))}</div>)}
          {activeTab === "Journal" && <JournalTab />}
          {activeTab === "Videos" && (<div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>{videos.map((v) => (<div key={v.id} style={{ background: CARD, borderRadius: 10, overflow: "hidden", border: `1px solid ${BORDER}` }}><VideoEmbed videoId={v.id} title={v.title} /><div style={{ padding: "1rem 1.2rem" }}><p style={{ color: TEXT, fontWeight: 600, margin: 0 }}>{v.title}</p></div></div>))}</div>)}
        </div>
      </main>
      <Footer />
    </div>
  );
}
