"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Suicidal Suffering Is Not a Sign of Insufficient Faith", verse: "1 Kings 19:4", body: "'He came to a broom bush, sat down under it and prayed that he might die. \"I have had enough, LORD,\" he said. \"Take my life; I am no better than my ancestors.\" Then he lay down under the bush and fell asleep' (1 Kings 19:4). Elijah — the greatest prophet in Israel's history, who had just called fire from heaven on Mount Carmel — prayed to die. He was not spiritually deficient. He was exhausted, depleted, and suicidal. God's response was not condemnation or a rebuke for lack of faith. He sent an angel with food and water, let him sleep, and sent the angel again. He met Elijah's physical exhaustion with physical provision, not theological argument." },
  { title: "God Meets Suicidal People with Presence, Not Condemnation", verse: "1 Kings 19:5-7", body: "When Elijah lay under the broom tree asking to die, God did not rebuke him, argue with his theology, or demand that he get back to work. He sent an angel twice with bread and water, said 'The journey is too much for you,' and waited. This is the model of care for those in suicidal crisis: presence, basic needs, patient accompaniment, no condemnation. The God who met Elijah is the same God who is with those who want to die — not standing in judgment but crouching in care." },
  { title: "Mental Illness Has Physical Causes — It Is Not Spiritual Failure", verse: "Psalm 31:9-10", body: "'Be merciful to me, LORD, for I am in distress; my eyes grow weak with sorrow, my soul and body with grief. My life is consumed by anguish and my years by groaning; my strength fails because of my affliction, and my bones grow weak' (Psalm 31:9-10). The Psalms consistently describe mental and emotional suffering in physical terms — bones, eyes, body, strength. The ancient world did not draw our contemporary line between physical and psychological illness. Depression severe enough to produce suicidal ideation is a medical emergency involving brain chemistry; spiritual practices are not the primary treatment for a medical crisis, though they can support recovery." },
  { title: "The Church Has Historically Failed Suicidal People — and That Must Change", verse: "James 5:14", body: "James instructs the church to call elders for those who are suffering — not to stigmatize them, exclude them, or refuse them burial rites. The church's historical tendency to treat suicide as an unforgivable sin has caused immeasurable damage to families, drove people away from the only community that could help, and has no solid theological foundation. There is no verse in Scripture that lists suicide as the unforgivable sin. The 'unforgivable sin' of Matthew 12:31-32 concerns the attributing of the Holy Spirit's work to Satan — not death by suicide. Those who have died by suicide are not beyond God's mercy." },
  { title: "You Are Deeply Loved in the Darkest Place", verse: "Psalm 139:8", body: "'If I go up to the heavens, you are there; if I make my bed in the depths, you are there' (Psalm 139:8). The word translated 'depths' is Sheol — the realm of the dead. Even in the darkest place a human being can inhabit, the Psalmist confesses: God is there. You are not too far gone for God to reach. The darkness you are in is not beyond his presence. He has not abandoned you in it, and he is not waiting for you to find your way out before he engages you." },
];

const VOICES = [
  { id: "katehawkins", name: "Kay Warren", era: "1956–present", context: "Mental health advocate; mother of Matthew Warren", bio: "Kay Warren, wife of Rick Warren, lost her son Matthew to suicide after years of severe mental illness. Her advocacy since his death has helped change the conversation in evangelical churches — confronting the stigma, the bad theology, and the pastoral failures that have kept suicidal people isolated from the communities that could help them. Her grief and her advocacy are inseparable.", quote: "My son was a follower of Jesus Christ who loved God, who served in ministry, and who died by suicide after a lifelong battle with mental illness. His faith did not protect him from a brain disease. And the stigma in the church that makes people hide their suicidal thoughts is not protecting anyone — it is keeping them from help. We have to do better.", contribution: "Warren's willingness to speak publicly from inside the grief of a suicide loss transformed the conversation in many churches, creating permission to address suicide honestly and compassionately." },
  { id: "scazzero", name: "Ed Welch", era: "1951–present", context: "CCEF; Counselor; Depression: A Stubborn Darkness", bio: "Welch is one of the foremost biblical counselors in the area of depression and suicidal ideation. His Depression: A Stubborn Darkness is one of the most careful and compassionate Christian treatments of severe depression, including its suicidal dimension. He takes both the psychological and spiritual dimensions seriously without reducing either to the other.", quote: "When someone is suicidal, the worst thing the church can do is demand that they simply trust God more. The brain is a physical organ. When it is in crisis, the crisis is real — and it requires real help, including medical help. The spiritual dimension matters enormously in recovery, but it is not a substitute for crisis care.", contribution: "Welch helped the church take depression and suicidal thinking seriously as real suffering requiring real care — neither dismissing the spiritual dimension nor using it to avoid competent professional support." },
  { id: "allender", name: "Dan Allender", era: "1952–present", context: "Psychologist; The Allender Center; trauma and suicidality", bio: "Allender's work on trauma and the underlying dynamics of severe suffering speaks directly to the experience of those in suicidal crisis. His emphasis on the autobiographical roots of despair — what in a person's story has produced the conclusion that they should not exist — gives both sufferers and those who love them a framework for understanding the depth of the pain and what genuine healing requires.", quote: "Suicidal thinking is almost always the story of someone who has concluded that the world — and even God — would be better without them. That is a lie. But it is a lie that feels like absolute truth when it is formed by years of trauma, shame, and isolation. The path back is not primarily argument; it is presence, relationship, and slow, patient truth-telling.", contribution: "Allender's integration of story, trauma, and theology helped those accompanying suicidal people understand the depth of the suffering and what the person actually needs." },
];

const PRACTICES = [
  { title: "If You Are in Crisis Right Now — Get Help Now", icon: "🚨", color: "#EF4444", desc: "If you are having suicidal thoughts, especially with a plan, this is a medical emergency. You do not have to manage this alone. Help is available right now, 24/7.", steps: ["Call or text 988 — Suicide and Crisis Lifeline (available 24/7, free, confidential)", "Text HOME to 741741 — Crisis Text Line", "If you are in immediate danger: call 911 or go to the nearest emergency room", "Tell someone near you what you are experiencing — you don't have to handle this alone", "Remove access to means if you can — put distance between you and any plan you've formed"] },
  { title: "Tell Someone the Truth About What You Are Experiencing", icon: "🤝", color: PURPLE, desc: "Suicidal ideation thrives in secrecy. The act of naming it to another person — a friend, family member, pastor, or professional — changes the dynamic. You do not have to perform recovery to ask for help; you just have to let someone in.", steps: ["You don't have to have the right words: 'I'm having thoughts of harming myself and I need help' is enough", "Tell a person who is safe — someone who will not panic, judge, or minimize", "If you can't say it aloud: text or write it", "Your pastor can accompany you; your doctor or counselor can provide the clinical care you need"] },
  { title: "Pursue Professional Care — Not Just Spiritual Support", icon: "⚕️", color: GREEN, desc: "Suicidal ideation severe enough to constitute a crisis requires professional evaluation and possibly medication or hospitalization. Spiritual community is essential but it is not a substitute for clinical care. Both are needed.", steps: ["See your primary care physician or a psychiatrist for evaluation", "Be honest about the severity of your thoughts — do not minimize", "If you have been previously diagnosed with depression, anxiety, or another condition: your current treatment may need adjustment", "Hospitalization is not failure — it is intensive care for a genuine medical emergency"] },
  { title: "For Those Who Love Someone Suicidal", icon: "💙", color: PURPLE, desc: "If someone you love is suicidal, your response matters enormously. The research is consistent: asking directly about suicide does not plant the idea; it opens the door.", steps: ["Ask directly: 'Are you thinking about suicide?' — this is not planting the idea, it is opening a door", "Listen without minimizing or immediately problem-solving", "Take every mention seriously — do not chalk it up to drama or manipulation", "Get professional guidance: the National Alliance on Mental Illness helpline (1-800-950-NAMI) provides support for family members"] },
];

const SCRIPTURE = [
  { verse: "1 Kings 19:4-5", text: "Elijah prayed that he might die: 'I have had enough, LORD. Take my life.' Then he lay down and slept. An angel touched him and said, 'Get up and eat.'" },
  { verse: "Psalm 139:8", text: "If I go up to the heavens, you are there; if I make my bed in the depths, you are there." },
  { verse: "Psalm 34:18", text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Romans 8:38-39", text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers... will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
  { verse: "Psalm 31:9", text: "Be merciful to me, LORD, for I am in distress; my eyes grow weak with sorrow, my soul and body with grief." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function SuicidePreventionPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_suicide_prev_tab", "practices");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_suicide_prev_voice", "katehawkins");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type SuicideJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [spJournal, setSpJournal] = useState<SuicideJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_suicideprevj_entries") ?? "[]"); } catch { return []; } });
  const [jspFeeling, setJspFeeling] = useState("");
  const [jspTruth, setJspTruth] = useState("");
  const [jspStep, setJspStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_suicideprevj_entries", JSON.stringify(spJournal)); } catch {} }, [spJournal]);
  function saveSpEntry() {
    if (!jspFeeling.trim() && !jspTruth.trim()) return;
    setSpJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jspFeeling, truth: jspTruth, step: jspStep }, ...prev]);
    setJspFeeling(""); setJspTruth(""); setJspStep("");
  }
  function deleteSpEntry(id: string) { setSpJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛡️ Help Now" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ background: "linear-gradient(180deg, rgba(239,68,68,0.10) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>💙</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Suicide Prevention &amp; Crisis Support</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.75 }}>
          You are not too far gone. God is present in the darkest place.
          Help is available right now, for you or for someone you love.
        </p>
        <div style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.4)", borderRadius: 12, padding: "18px 24px", maxWidth: 500, margin: "0 auto", fontSize: 15, color: "#F8C0C0", lineHeight: 1.9 }}>
          <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 8 }}>🚨 Crisis Support — Available Now</div>
          <strong>Call or text <span style={{ fontSize: 18 }}>988</span></strong> — Suicide &amp; Crisis Lifeline (24/7, free, confidential)<br />
          <strong>Text HOME to 741741</strong> — Crisis Text Line<br />
          <strong>Call 911</strong> if you are in immediate danger
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
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
              <div style={{ background: "rgba(239,68,68,0.10)", border: "1px solid rgba(239,68,68,0.30)", borderRadius: 8, padding: "12px 16px", marginBottom: 20, fontSize: 14, color: "#F8C0C0", lineHeight: 1.7 }}>
                ⚠️ If you are in crisis right now, please call or text <strong>988</strong> before writing. This journal is for ongoing recovery and reflection — not a substitute for immediate crisis support.
              </div>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Recovery Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                For recording your journey through the darkness and toward the light. Write honestly about where you are and what you are holding.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jspFeeling} onChange={e => setJspFeeling(e.target.value)}
                  placeholder="Where am I today? What am I feeling? What is difficult right now?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jspTruth} onChange={e => setJspTruth(e.target.value)}
                  placeholder="One true thing I can hold onto — about my worth, God's presence, or the possibility of the future..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jspStep} onChange={e => setJspStep(e.target.value)}
                  placeholder="One step toward safety, care, or connection today..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveSpEntry}
                  style={{ alignSelf: "flex-start", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {spJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Your journey is worth recording, one honest day at a time.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {spJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteSpEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
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
              { videoId: "QO0CcGZX5Cc", title: "Kay Warren: The Church and Mental Health", channel: "Saddleback Church", description: "Kay Warren speaks about her son Matthew's death by suicide after lifelong mental illness, and her call for the church to end the stigma that keeps suicidal people from asking for help." },
              { videoId: "Nt2KTVaGjbI", title: "When You Want to Die: A Christian Response", channel: "CCEF", description: "Ed Welch on a compassionate, biblically grounded response to suicidal ideation — what not to say, what suicidal people actually need, and how the church can accompany those in crisis." },
              { videoId: "b8B1JdWOVXU", title: "Elijah Under the Broom Tree: Depression and Suicide in Scripture", channel: "The Gospel Coalition", description: "A careful reading of 1 Kings 19 and what Elijah's experience teaches us about God's response to suicidal suffering — presence, provision, patient care, and no condemnation." },
              { videoId: "c3e-E5T1s3Y", title: "Supporting Someone Who Is Suicidal", channel: "Crisis Text Line", description: "Practical guidance for those who love someone in suicidal crisis — how to ask the question directly, what to say and what not to say, and how to connect them to professional help." },
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
