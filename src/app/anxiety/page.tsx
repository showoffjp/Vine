"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const FOUNDATIONS = [
  { title: "The Most Repeated Command in the Bible", verse: "Isaiah 41:10", body: "'Do not fear' and its variants ('do not be anxious,' 'do not worry,' 'take courage') appear more than 365 times in Scripture. This is not a coincidence or a harsh demand — it is a promise delivered as a command. The command comes attached to a reason: 'Do not fear, for I am with you' (Isaiah 41:10). The antidote to anxiety is not positive thinking or willpower — it is the reality of God's presence." },
  { title: "Anxiety Is Not a Sin — Chronically Refusing God's Peace Is", verse: "Philippians 4:6-7", body: "Anxiety is a normal human response to uncertainty and threat. The disciples were afraid in the storm — Jesus did not rebuke them for being afraid. He invited them to trust. Paul does not say 'you should not feel anxious' but rather 'do not be anxious about anything, but in everything, by prayer and petition... present your requests to God.' The pathway through anxiety is prayer, not denial." },
  { title: "The Body and the Soul Are Connected", verse: "Psalm 42:5", body: "Anxiety is not only spiritual — it has physiological components. God made us as embodied creatures, and the brain's threat-response system (amygdala, cortisol, fight-or-flight) is part of his good design for protection. When it malfunctions or is chronically activated, this is a physiological reality that may require medical, therapeutic, and spiritual care. Telling someone with an anxiety disorder to 'just trust God more' is like telling someone with a broken leg to 'just walk it off.'" },
  { title: "Jesus Was Anxious in Gethsemane", verse: "Matthew 26:38", body: "'My soul is overwhelmed with sorrow to the point of death' (Matt. 26:38). In Gethsemane, Jesus experienced profound anguish — so intense that he sweat drops of blood (Luke 22:44, a recognized physiological response to extreme stress). He did not repress it, perform peace, or deny it. He brought it to the Father in honest, agonized prayer. He is the great high priest who sympathizes with our weakness (Hebrews 4:15) — including anxiety." },
];

const PRACTICES = [
  { title: "Philippians 4 Prayer", icon: "🙏", color: "#3B82F6", desc: "Paul's prescription: 'in everything, by prayer and petition, with thanksgiving, present your requests to God.' This is not a formula — it is a posture. Name what you're anxious about. Bring it to God specifically. Add thanksgiving (not for the anxiety, but for who God is). Repeat.", steps: ["Name the anxiety specifically — don't pray generically", "Make a specific request of God", "Recall something true about God that's relevant to this fear", "End with thanksgiving — not for the fear but for his faithfulness"] },
  { title: "Cognitive Grounding", icon: "🌱", color: "#10B981", desc: "When anxiety is physiologically activated, cognitive work can interrupt the spiral. The 'renewing of the mind' (Romans 12:2) involves actively replacing anxious thoughts with true ones.", steps: ["Notice the anxious thought: 'What am I actually afraid of?'", "Test it: Is this thought true? What does God say about this?", "Replace it: State a true sentence from Scripture", "Do this repeatedly — the mind is retrained through repetition"] },
  { title: "Breath Prayer", icon: "💨", color: PURPLE, desc: "Ancient practice of a short prayer phrase aligned with breath rhythm. Physiologically, slow deep breathing activates the parasympathetic nervous system and reduces cortisol. Spiritually, it anchors attention in God's presence.", steps: ["Inhale slowly (4 counts): 'Lord Jesus'", "Hold (2 counts)", "Exhale slowly (6 counts): 'have mercy on me'", "Repeat 5-10 minutes — especially when anxiety is acute"] },
  { title: "Journaling Anxious Thoughts", icon: "📓", color: "#F59E0B", desc: "Writing anxiety out of the head and onto paper externalizes it, reducing its grip. The act of writing forces the slow-thinking prefrontal cortex to engage, which calms the reactive amygdala.", steps: ["Write the fear without filtering", "Pray over what you wrote — 'Lord, this is what I'm afraid of'", "Write one true sentence about God in response", "Note: not all anxieties resolve on paper — some need community or therapy"] },
  { title: "Seek Community and Help", icon: "🤝", color: "#EF4444", desc: "Chronic, severe, or debilitating anxiety is a medical reality that benefits from professional care — therapy (especially CBT), and in some cases medication. These are not failures of faith; they are the appropriate use of the healing resources God has provided.", steps: ["Tell a trusted friend or pastor what you're experiencing", "Consider seeing a licensed counselor or therapist", "Talk to a doctor if anxiety is physical and persistent", "Don't isolate — anxiety thrives in secrecy and solitude"] },
];

const SCRIPTURE_REMEDIES = [
  { verse: "Matthew 6:34", text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.", focus: "Present-moment focus" },
  { verse: "1 Peter 5:7", text: "Cast all your anxiety on him because he cares for you.", focus: "Release to God" },
  { verse: "Psalm 46:1", text: "God is our refuge and strength, an ever-present help in trouble.", focus: "God's presence" },
  { verse: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", focus: "God's sovereignty" },
  { verse: "2 Timothy 1:7", text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.", focus: "Spirit's empowerment" },
  { verse: "Isaiah 26:3", text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.", focus: "Trust produces peace" },
];

type Tab = "foundations" | "voices" | "practices" | "journal" | "videos";

const VOICES = [
  {
    id: "welch",
    name: "Ed Welch",
    era: "1953-present",
    context: "Biblical counselor; CCEF (Christian Counseling and Educational Foundation)",
    bio: "Welch's 'Running Scared: Fear, Worry, and the God of Rest' (2007) is the most thorough biblical counseling treatment of anxiety. His framework: we are anxious because we want things we cannot control — security, love, physical safety, reputation. The cure is not getting those things but having our wants reoriented by a deeper want: God himself. Welch takes both the spiritual and physiological dimensions of anxiety seriously, resisting the reductionism that treats anxiety as either purely spiritual or purely medical.",
    quote: "Anxiety is not primarily about what we fear losing. It is about what we love. Show me what you are anxious about, and I will show you what you love. And the answer to misplaced love is not the suppression of love but the redirection of it.",
    contribution: "Welch helped evangelical Christians move beyond the simplistic 'just trust God' response to anxiety by showing that anxiety is diagnostic of loves — it reveals what we have made most important. This reframe moves the solution from willpower to worship: the cure for anxiety is not trying harder to trust but actually treasuring God more. His work also provided a framework for integrating medical treatment of anxiety with spiritual formation.",
  },
  {
    id: "ortlund",
    name: "Dane Ortlund",
    era: "1978-present",
    context: "Reformed pastor; author of Gentle and Lowly",
    bio: "Ortlund's 'Gentle and Lowly: The Heart of Christ for Sinners and Sufferers' (2020) addresses anxiety through the lens of Christ's disposition — his tender approachability — rather than through techniques or theology of anxiety itself. His argument: the primary reason anxious Christians remain anxious is that they have a distorted picture of Christ's heart toward them. They imagine a disappointed, impatient, or distant Christ. The healing begins when they encounter the one who says 'Come to me, all who are weary and burdened' — not reluctantly but eagerly.",
    quote: "Christ is not trigger-happy. He is the safest person in the universe for the anxious soul to approach. He has already seen the worst about you and decided to draw near, not pull away.",
    contribution: "Ortlund provided a Christological rather than primarily behavioral or cognitive approach to anxiety: the foundation of peace is not better coping mechanisms but a truer vision of who Christ is. His work resonated widely because it addressed the shame that often accompanies anxiety in evangelical contexts — the feeling that anxiety itself is evidence of spiritual failure. Ortlund's response: it is evidence of need, and Christ meets need with gentleness, not rebuke.",
  },
  {
    id: "hart",
    name: "Archibald Hart",
    era: "1940-present",
    context: "Clinical psychologist; Fuller Seminary; Adrenaline and Stress",
    bio: "Hart's 'The Anxiety Cure' and 'Adrenaline and Stress' are the most widely-read Christian psychological treatments of anxiety. A clinical psychologist and professor at Fuller Seminary, Hart's distinctives: anxiety has a strong physiological component (driven by the adrenal system) that requires embodied interventions — sleep, exercise, slowing down — not merely spiritual ones. He critiques the tendency in Christian culture to spiritualize anxiety in ways that prevent people from getting appropriate medical care.",
    quote: "God created our adrenal system. Anxiety is not a spiritual failure — it is often a physiological alarm system that has gotten stuck in the 'on' position. Addressing it requires attending to the body, not just the soul.",
    contribution: "Hart gave Christian clinicians and pastors a framework for integrating physiological and spiritual dimensions of anxiety care. His insistence that the body matters — that sleep deprivation, chronic adrenaline activation, and physical health directly affect anxiety levels — provided a corrective to purely spiritual approaches. He helped countless pastors refer church members appropriately to medical care without treating this as a failure of faith.",
  },
  {
    id: "keller",
    name: "Tim Keller",
    era: "1950-2023",
    context: "Presbyterian pastor; Redeemer NYC; author of Walking with God through Pain and Suffering",
    bio: "Keller addressed anxiety most directly in his sermon series on Psalms and his book 'Walking with God through Pain and Suffering' (2013). His approach: anxiety is a species of unbelief — not intellectual atheism but practical unbelief, the functional assumption that God is not as present, as powerful, or as good as Scripture says. The cure is not positive thinking but the slow, deliberate work of preaching the gospel to yourself — reminding the anxious soul of truths it has intellectually accepted but emotionally forgotten.",
    quote: "Anxiety is not a character flaw. It is a failure of the imagination to hold God's promises as more real than the circumstances that terrify us. The cure is not willpower — it is imagination retrained by the gospel.",
    contribution: "Keller developed the concept of 'preaching the gospel to yourself' as the primary spiritual discipline for managing anxiety. He made the distinction between belief-that (intellectual assent) and belief-in (experiential trust) — and showed that anxiety often arises from the gap between them. His pastoral approach was non-shaming: he took anxiety seriously as a real struggle rather than a spiritual embarrassment, while refusing to reduce it to purely physiological or psychological causes.",
  },
  {
    id: "robinson",
    name: "Marilynne Robinson",
    era: "1943-present",
    context: "Pulitzer Prize-winning novelist; Gilead; essayist",
    bio: "Robinson does not write directly about anxiety but about fear — particularly the cultural fear that drives so much of Western political and social life. Her essays in 'When I Was a Child I Read Books' and 'The Givenness of Things' argue that a culture shaped by fear is a culture that has lost its theological imagination. The antidote to fear, in Robinson's vision, is the recovery of wonder — of the staggering beauty and gratuity of existence. She makes the case that Christian faith, properly understood, produces not anxiety but an almost reckless generosity and openness.",
    quote: "Fear is not a Christian virtue. We are to be people of hope, and hope is always about what we cannot see or control. The anxious soul has forgotten that it is held by something larger than what it can manage.",
    contribution: "Robinson gave literary and cultural expression to what theologians argue about anxiety: that it is ultimately a failure of wonder, an inability to receive the present moment as gift. Her essays are not self-help resources but they do something that self-help cannot: they create a vision of a way of being in the world that is genuinely free from anxiety because it is genuinely open to God. She is the most important prose stylist in contemporary American Christian literature.",
  },
];

interface AnxietyEntry {
  id: string;
  date: string;
  fear: string;
  truth: string;
}

export default function AnxietyPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_anxiety_tab", "foundations");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_anxiety_voice", "welch");
  const voice = VOICES.find(v => v.id === selectedVoice)!;
  const [entries, setEntries] = useState<AnxietyEntry[]>(() => {
    try { const s = localStorage.getItem("vine_anxiety_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [form, setForm] = useState({ fear: "", truth: "" });
  const [saved, setSaved] = useState(false);

  useEffect(() => { try { localStorage.setItem("vine_anxiety_journal", JSON.stringify(entries)); } catch {} }, [entries]);

  const save = () => {
    if (!form.fear) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toISOString().split("T")[0], ...form }, ...prev].slice(0, 50));
    setForm({ fear: "", truth: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      {/* Crisis banner */}
      <div style={{ background: "rgba(239,68,68,0.08)", borderBottom: "1px solid rgba(239,68,68,0.18)", padding: "10px 20px", textAlign: "center" }}>
        <p style={{ color: "#C0C0D8", fontSize: "13px", margin: 0 }}>
          <strong style={{ color: "#F2F2F8" }}>If you&apos;re in crisis: </strong>
          <strong style={{ color: "#3a7d56" }}>call or text 988</strong>
          <span style={{ color: "#8A8AA8" }}> (Suicide &amp; Crisis Lifeline) · text </span>
          <strong style={{ color: "#3a7d56" }}>HOME to 741741</strong>
          <span style={{ color: "#8A8AA8" }}> (Crisis Text Line) — 24/7, free &amp; confidential</span>
        </p>
      </div>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌊</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Anxiety & Faith</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Anxiety is one of the most common human experiences — and one of the most mishandled in the church. The biblical response is not 'just trust God more' but honest prayer, embodied practice, and real community.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "4Eg_di-O8nM" as const, label: "Foundations", icon: "📖" },
            { id: "voices" as const, label: "Voices", icon: "💬" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "journal" as const, label: "Fear Journal", icon: "✍️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "foundations" && (
          <div>
            {FOUNDATIONS.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{f.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={f.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{f.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 14 }}>Scripture on Anxiety</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {SCRIPTURE_REMEDIES.map(s => (
                  <div key={s.verse} style={{ background: BG, borderRadius: 10, padding: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ color: GREEN, fontWeight: 700, fontSize: 13 }}><VerseRef reference={s.verse} /></span>
                      <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{s.focus}</span>
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>"{s.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {VOICES.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", background: selectedVoice === v.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedVoice === v.id ? PURPLE + "70" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedVoice === v.id ? PURPLE : TEXT, fontWeight: 800, fontSize: 13, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{voice.era}</div>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 24, marginBottom: 4 }}>{voice.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{voice.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{voice.bio}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 10 }}>IN THEIR OWN WORDS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>&ldquo;{voice.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{voice.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {PRACTICES.map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${p.color}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 22 }}>{p.icon}</span>
                  <h3 style={{ color: p.color, fontWeight: 800, fontSize: 17, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, marginBottom: 12 }}>{p.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {p.steps.map((s, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${p.color}20`, border: `1px solid ${p.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: p.color, fontSize: 10, fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
                      <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.55 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Based on the Philippians 4 pattern: name the anxiety specifically, then write one true sentence about God in response. This is not denial — it is reorientation.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <div style={{ marginBottom: 12 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 700, display: "block", marginBottom: 6 }}>What are you anxious about? (be specific)</label>
                <textarea value={form.fear} onChange={e => setForm(f => ({ ...f, fear: e.target.value }))}
                  aria-label="I am afraid that..." placeholder="I am afraid that..."
                  style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, lineHeight: 1.7, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 700, display: "block", marginBottom: 6 }}>What is true about God in relation to this fear?</label>
                <textarea value={form.truth} onChange={e => setForm(f => ({ ...f, truth: e.target.value }))}
                  aria-label="But God is / God says..." placeholder="But God is / God says..."
                  style={{ width: "100%", minHeight: 70, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, lineHeight: 1.7, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
              </div>
              <button type="button" onClick={save}
                style={{ width: "100%", padding: "12px", background: saved ? GREEN : PURPLE, border: "none", borderRadius: 8, color: saved ? BG : "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
                {saved ? "✓ Saved" : "Save Entry"}
              </button>
            </div>
            {entries.length > 0 && (
              <div>
                <h4 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 12 }}>Past Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{new Date(e.date + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</div>
                        <div style={{ color: "#EF4444", fontWeight: 600, fontSize: 14, marginBottom: 4, fontStyle: "italic" }}>"{e.fear}"</div>
                        {e.truth && <div style={{ color: GREEN, fontSize: 14, fontStyle: "italic" }}>"{e.truth}"</div>}
                      </div>
                      <button type="button" onClick={() => deleteEntry(e.id)} aria-label="Delete"
                        style={{ background: "none", border: "none", color: "#3A3A58", cursor: "pointer", fontSize: 16, lineHeight: 1, padding: "0 2px", flexShrink: 0 }}
                        onMouseEnter={ev => (ev.currentTarget as HTMLButtonElement).style.color = "#EF4444"}
                        onMouseLeave={ev => (ev.currentTarget as HTMLButtonElement).style.color = "#3A3A58"}>×</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on anxiety, fear, and finding peace in God.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "mC-zw0zCCtg", title: "Praying Our Fears", channel: "Timothy Keller", description: "Keller explores how honest prayer — not denial — is the biblical pathway through anxiety, drawing on the Psalms and Philippians 4." },
                  { videoId: "7_CGP-12AE0", title: "Peace: Overcoming Anxiety", channel: "Timothy Keller", description: "A sermon on how many believers are cast down because they have not learned what Scripture teaches about Christian peace." },
                  { videoId: "OqwbFGoRYVo", title: "Peace", channel: "Timothy Keller", description: "Keller shows that Christian peace is not the absence of trouble but a settled confidence in God that the world cannot give or take away." },
                  { videoId: "gV9JugO_5Mk", title: "Don't Worry", channel: "Timothy Keller Sermons", description: "An exposition of Matthew 6:25–34 — why Jesus commands us not to worry and what it looks like to live free from anxiety." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Real Help Resources */}
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Get Real Help</h2>
        <p style={{ color: MUTED, fontSize: 14, marginBottom: 20 }}>When anxiety becomes debilitating, professional support is wisdom — not weakness.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
          {[
            { name: "988 Suicide & Crisis Lifeline", desc: "Call or text 988 — 24/7 crisis support. Not just for suicidal crises; anxiety crises welcome.", href: "https://988lifeline.org/", color: "#EF4444" },
            { name: "Crisis Text Line", desc: "Text HOME to 741741 — free, confidential, 24/7. Connect with a trained crisis counselor via text.", href: "https://www.crisistextline.org/", color: "#EF4444" },
            { name: "AACC Therapist Finder", desc: "Find a licensed Christian therapist who integrates faith with evidence-based clinical care.", href: "https://www.aacc.net/resources/find-a-counselor/", color: GREEN },
            { name: "Focus on the Family", desc: "Free 1-hour consultation with a licensed Christian counselor. Anxiety and worry resources.", href: "https://www.focusonthefamily.com/get-help/speak-with-a-counselor/", color: "#F59E0B" },
            { name: "Anxiety & Depression Assoc.", desc: "ADAA: evidence-based information on anxiety disorders, therapist finder, and self-help tools.", href: "https://adaa.org/find-help/treatment/find-a-therapist", color: PURPLE },
          ].map(r => (
            <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer"
              style={{ display: "block", background: CARD, border: `1px solid ${r.color}30`, borderLeft: `3px solid ${r.color}`, borderRadius: 12, padding: 16, textDecoration: "none" }}>
              <p style={{ color: r.color, fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{r.name} ↗</p>
              <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{r.desc}</p>
            </a>
          ))}
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
