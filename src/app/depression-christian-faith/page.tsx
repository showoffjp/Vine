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
    title: "Biblical Saints Experienced Depression",
    body: "The idea that Christians should not experience depression is contradicted by the Scripture itself. Elijah, after his greatest prophetic victory, collapsed under a broom tree and asked God to let him die: 'It is enough; now, O LORD, take away my life' (1 Kgs 19:4). Jeremiah cursed the day of his birth (Jer 20:14). The author of Psalm 88 ends in total darkness with no resolution. Job wished he had never been born (Job 3:3). David described himself as 'faint,' 'crushed,' bones 'wasting away' (Ps 38). These are not spiritually deficient people. They are the prophets, psalmists, and witnesses whose words God breathed into Scripture.",
  },
  {
    title: "Depression Is Not a Sin or a Lack of Faith",
    body: "Depression is a condition that affects the brain's functioning — involving changes in neurotransmitter levels, sleep architecture, appetite regulation, cognitive processing, and motivation. It is not primarily caused by insufficient faith, insufficient prayer, or spiritual failure. Just as a person with a broken bone should not be told to 'pray harder and walk normally,' a person with depression should not be told to 'pray harder and feel better.' Depression requires compassion, appropriate treatment, and the kind of sustained presence that the body of Christ is designed to provide.",
  },
  {
    title: "God Meets Depression With Practical Care",
    body: "After Elijah's collapse under the broom tree, God's response is remarkable. He did not give him a theological lecture or rebuke his despair. He let him sleep. Then He sent an angel who touched him and said 'Arise and eat' — providing warm bread and water. This happened twice before God asked Elijah to continue his journey. The first divine response to depression in Scripture is sleep, food, and gentle physical care. This is theology. The body matters. Practical care is not unspiritual.",
  },
  {
    title: "The Darkness of God's Felt Absence",
    body: "Depression often produces what medieval mystics called 'acedia' — a spiritual dryness, a sense of God's absence, an inability to feel what the heart formerly felt. This experience is profoundly disorienting for Christians who base assurance on feeling God's presence. But God's presence is not contingent on our capacity to experience it. 'Even though I walk through the valley of the shadow of death, you are with me' (Ps 23:4) — the 'you are with me' is not conditional on feeling His presence. He is there in the dark.",
  },
  {
    title: "Medication Is Not a Lack of Faith",
    body: "Antidepressants have helped millions of people regain the capacity to function, to engage with life, to think clearly, and to maintain relationships. They do not produce artificial happiness — they restore the baseline function that depression has disrupted. A Christian who takes medication for depression is not demonstrating insufficient faith any more than a Christian who takes insulin for diabetes. We treat physiological conditions with medical care. The brain is a physiological organ.",
  },
];

const voices = [
  {
    name: "Charles Spurgeon",
    title: "19th Century Preacher — Suffered Severe Depression",
    quote: "I am the subject of depressions of spirit so fearful that I hope none of you ever get to such extremes of wretchedness as I go to. The mind can descend far lower than we have any idea of... God knows I speak the truth when I say that I could weep by the hour like a child, and yet I know not what I weep for.",
  },
  {
    name: "Kay Warren",
    title: "Author, 'Choose Joy' — Wife of Rick Warren, Mother of Matthew Warren",
    quote: "Mental illness is not a moral failing. It is a medical condition. We would never tell a diabetic to just have more faith and stop taking insulin. Why do we say that to people with depression? The church must be the safest place on earth to admit you are struggling.",
  },
  {
    name: "Matthew Stanford",
    title: "Author, 'Grace for the Afflicted: A Clinical and Biblical Perspective on Mental Illness'",
    quote: "Depression is among the most treatable of all mental health conditions. Eighty to ninety percent of people with depression who receive appropriate treatment experience significant improvement. The tragedy is that fewer than half ever receive the treatment that could help them — often because of shame, or because the church tells them prayer is sufficient.",
  },
  {
    name: "Henri Nouwen",
    title: "Priest & Author, 'The Inner Voice of Love' — Written During Depression",
    quote: "You have to keep moving — not to get away from the pain, but to move with it. The discipline of staying in your own suffering — not running from it, not drowning in it — is what allows grace to work in the wound rather than around it.",
  },
];

const practices = [
  {
    title: "Seeking Professional Evaluation",
    body: "Depression is assessed by primary care physicians, psychiatrists, and licensed therapists. A full evaluation includes symptom history, severity, functioning impact, and any underlying medical causes. Many medical conditions (thyroid dysfunction, vitamin D deficiency, sleep apnea, anemia) produce depression-like symptoms — ruling these out is part of good care. The PHQ-9 (freely available online) is a validated depression screening tool that can help you prepare for a clinical conversation.",
  },
  {
    title: "The Combination of Therapy and Medication",
    body: "The combination of antidepressant medication and psychotherapy consistently outperforms either alone for moderate-to-severe depression. CBT (Cognitive Behavioral Therapy), IPT (Interpersonal Therapy), and MBCT (Mindfulness-Based Cognitive Therapy) are evidence-based therapies for depression. If cost is a barrier, Open Path Collective (openpathcollective.org) offers reduced-cost therapy sessions ($30–$80) for individuals with financial need.",
  },
  {
    title: "Behavioral Activation — Moving Against the Pull",
    body: "Depression creates a powerful pull toward withdrawal, isolation, and inactivity — which reliably worsens depression. Behavioral activation (a core CBT technique) involves deliberately scheduling small, meaningful activities even when motivation is absent. The goal is not to feel like doing the activity — it is to do it anyway. Physical exercise (even a 20-minute walk) has been shown in multiple studies to produce antidepressant effects equivalent to medication in mild-to-moderate depression.",
  },
  {
    title: "Telling Someone — Ending the Secrecy",
    body: "Depression thrives in silence. The act of telling one trusted person — a spouse, a friend, a pastor, a doctor — is itself therapeutic. It breaks the isolation that amplifies depression and creates the possibility of receiving support. You do not have to explain it perfectly. 'I am struggling with depression and I need help' is enough. The person you tell may not know what to say — but their presence, if they remain with you after you tell them, is healing.",
  },
  {
    title: "Modifying Devotional Practices for Depression Season",
    body: "During severe depression, extended Bible reading or complex prayer may be inaccessible. Modify rather than abandon spiritual practice: memorized short passages ('The LORD is my shepherd'), the Jesus Prayer ('Lord Jesus Christ, Son of God, have mercy on me'), a single Psalm read slowly, or simply naming God's name in the dark. The goal is not spiritual performance but maintaining a thread of connection to God during a season when your capacity is severely limited.",
  },
  {
    title: "Informing Your Church",
    body: "Consider telling your pastor or a trusted church leader about your depression. A good pastor will be glad to know, will pray for you, and may be able to connect you to specific supports. Bring specific requests: 'Can someone check on me weekly?' 'Can I connect with someone who has walked through depression?' 'Can the church help with my therapy costs?' If your church responds with platitudes or shame, that is important information about whether it is a safe community for you in this season.",
  },
];

const scriptures = [
  {
    ref: "Psalm 88:1–2, 18",
    text: "O LORD, God of my salvation; I cry out day and night before you... Darkness is my closest friend.",
    note: "The only psalm that ends in unresolved darkness. God preserved this in Scripture. Prayers that end in darkness are still prayers. God is in the dark.",
  },
  {
    ref: "1 Kings 19:5–6",
    text: "And he lay down and slept under a broom tree. And behold, an angel touched him and said to him, 'Arise and eat.' And he looked, and behold, there was at his head a cake baked on hot stones and a jar of water.",
    note: "God's first response to Elijah's suicidal depression: sleep, food, gentle touch, and a second chance to rest. Not rebuke. Not theology. Care.",
  },
  {
    ref: "Psalm 34:18",
    text: "The LORD is near to the brokenhearted and saves the crushed in spirit.",
    note: "Near. Not 'will be near' when you pray enough. Not 'will be near' when you feel better. Is near. Present tense. The crushed spirit is exactly where God draws close.",
  },
  {
    ref: "Romans 8:38–39",
    text: "Neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    note: "Depression often feels like spiritual separation. It is not. God's love holds in the absence of the ability to feel it. Nothing — not even the numbness of depression — separates you from it.",
  },
  {
    ref: "Isaiah 40:28–31",
    text: "He gives power to the faint, and to him who has no might he increases strength... they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles.",
    note: "Written for people who are faint and have no might — which describes depression precisely. The promise is strength that comes from outside the self, for those who have none left within.",
  },
  {
    ref: "Matthew 11:28",
    text: "Come to me, all who labor and are heavy laden, and I will give you rest.",
    note: "The invitation is to the heavy-laden. Depression is one of the heaviest burdens a person can carry. Jesus specifically calls those carrying it: come. The rest He offers is for the soul, and it is real.",
  },
];

const videos = [
  { id: "XtwIT8JjddM", title: "10,000 Reasons — Matt Redman" },
  { id: "KwX1f2gYKZ4", title: "Graves Into Gardens — Elevation Worship" },
  { id: "IvSuGyJQ6oM", title: "Goodness of God — Bethel Music" },
  { id: "HquJPN3pHOo", title: "Hand Him The Plan — Elevation Church" },
];

const JOURNAL_KEY = "vine_depression_entries";

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
    "What does the darkness feel like today? Can I name it for God, even if I can't explain it?",
    "What is one small thing I can do today that is in the direction of life?",
    "Who is one person I could tell about this struggle? What is stopping me?",
    "Has God been faithful in the past, even in hard seasons? What does that history say about now?",
  ];
  return (
    <div>
      <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
        <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "1rem" }}>Reflection Prompts</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {prompts.map((p, i) => (<li key={i} style={{ color: MUTED, fontSize: "0.9rem", paddingLeft: "1rem", borderLeft: `2px solid ${ACCENT}40` }}>{p}</li>))}
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

export default function DepressionChristianFaith() {
  const [activeTab, setActiveTab] = useState<Tab>("Theology");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content">
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}18 0%, transparent 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "4rem 1.5rem 3rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, borderRadius: 20, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>Depression & Faith</div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>Living with Depression<br /><span style={{ color: ACCENT }}>God Is in the Dark Too</span></h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 620, marginBottom: "1.5rem" }}>For Christians navigating depression — Elijah was suicidal, Jeremiah cursed the day of his birth, Psalm 88 ends in darkness. You are in good company. God's first response to Elijah's collapse was not rebuke — it was warm bread and sleep. He meets you where you are.</p>
            <div style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, borderRadius: 8, padding: "1rem 1.2rem", maxWidth: 520 }}>
              <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>Crisis: <strong>988</strong> Suicide & Crisis Lifeline — call or text 988<br /><span style={{ fontWeight: 400, color: MUTED }}>NAMI: nami.org | 1-800-950-6264 | Open Path Therapy: openpathcollective.org</span></p>
            </div>
          </div>
        </div>
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: BG, position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
            {tabs.map(t => (<button key={t} onClick={() => setActiveTab(t)} style={{ padding: "1rem 1.4rem", background: "none", border: "none", borderBottom: activeTab === t ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === t ? ACCENT : MUTED, fontWeight: activeTab === t ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s" }}>{t}</button>))}
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
