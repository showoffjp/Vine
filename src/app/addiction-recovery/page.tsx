"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Addiction Is a Spiritual Condition", verse: "Romans 7:15", body: "'I do not understand what I do. For what I want to do I do not do, but what I hate I do' (Romans 7:15). Paul's description of the war within is the addict's experience exactly: compulsion, self-betrayal, and the desperate inability to do what you most want to do. Addiction is not primarily a weakness of will — it is a theological condition: the bondage of sin given its most visceral expression." },
  { title: "Christ Came to Set Captives Free", verse: "Luke 4:18", body: "'He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free' (Luke 4:18). Jesus read this from Isaiah at the start of his ministry — and it was not merely metaphor. The freedom Christ proclaimed is real freedom, including freedom from the compulsions that feel inescapable. The gospel is the announcement that captivity is not the final word." },
  { title: "The Role of Community in Recovery", verse: "Galatians 6:1-2", body: "'Brothers and sisters, if someone is caught in a sin, you who live by the Spirit should restore that person gently. Carry each other's burdens' (Galatians 6:1-2). Addiction flourishes in isolation and dies in community. The instruction to 'restore gently' assumes both that sin is real and that restoration is the goal. The community of faith is called to be the context in which recovery becomes possible." },
  { title: "Grace That Meets Repeated Failure", verse: "Lamentations 3:22-23", body: "'Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning' (Lamentations 3:22-23). The person in recovery will relapse. The question is whether the gospel is large enough for repeated failure — not as an excuse for sin, but as the ground of continued hope when sin wins again. The answer of Scripture is emphatically yes: every morning brings new mercy." },
  { title: "The Body and Redemption", verse: "Romans 12:1", body: "'Offer your bodies as a living sacrifice, holy and pleasing to God' (Romans 12:1). Addiction is embodied — it is not merely a spiritual problem but a physical one: neural pathways, chemical dependency, somatic cravings. The gospel does not despise the body; it redeems it. Recovery requires addressing the body: sleep, nutrition, exercise, medical support alongside spiritual community." },
];

const TYPES = [
  { type: "Alcohol", color: "#3B82F6", signs: "Drinking to cope with stress or emotion, hiding how much you drink, failed attempts to quit, neglecting responsibilities due to drinking.", resources: "AA (Alcoholics Anonymous) has Christian participants and is compatible with faith. Christian-specific: Celebrate Recovery, Alcoholics Victorious." },
  { type: "Pornography & Sexual Addiction", color: PURPLE, signs: "Compulsive use despite wanting to stop, escalating content, secrecy, impact on relationships and work, using sexual behavior to cope with emotional pain.", resources: "Celebrate Recovery, XXXchurch, Sex Addicts Anonymous (Christian track), Covenant Eyes accountability software." },
  { type: "Drugs", color: "#EF4444", signs: "Inability to control use, continued use despite consequences, physical withdrawal symptoms, prioritizing substance over relationships and responsibilities.", resources: "Narcotics Anonymous has faith-compatible programs. Medical detox may be necessary and is not a sign of weak faith — seek a doctor." },
  { type: "Gambling", color: "#F59E0B", signs: "Chasing losses, lying about gambling, borrowing money to gamble, gambling affecting family finances, inability to stop despite wanting to.", resources: "Gamblers Anonymous, Celebrate Recovery. Address the underlying lie: that fortune, not God, is the source of security." },
  { type: "Food", color: "#10B981", signs: "Using food to cope with emotions, shame around eating, binge/restrict cycles, inability to stop eating despite physical discomfort, food dominating mental energy.", resources: "Overeaters Anonymous (OA) explicitly uses a 12-step framework. Eating disorder treatment when clinical intervention is needed." },
  { type: "Screens & Technology", color: GREEN, signs: "Inability to be away from phone/games, using technology to escape negative emotion, neglecting relationships and sleep, failed attempts to reduce use.", resources: "See /technology page. Accountability software, digital Sabbath, structured tech-free times. This is the emerging addiction of our generation." },
];

const STEPS = [
  { n: 1, title: "Admit and Name It", desc: "The most powerful moment in recovery is also the most resisted: saying out loud, to another person, what is actually happening. 'I am addicted to ___. It has controlled me in these ways.' Secrecy is the addiction's oxygen. Naming it begins the suffocation." },
  { n: 2, title: "Find Community", desc: "Recovery does not happen alone. Find a group — Celebrate Recovery, AA/NA, or a trusted small group of believers who will not shame you. The group provides accountability, witness, and the proof that others have made it through." },
  { n: 3, title: "Seek Professional Help When Needed", desc: "Faith in God and medical treatment are not opposites. Chemical dependency often requires medical supervision for detox. Eating disorders, trauma-driven addiction, and co-occurring mental illness require clinical expertise. Seeking help is wisdom, not weakness." },
  { n: 4, title: "Identify Triggers", desc: "Addiction does not occur randomly. Triggers are predictable: specific emotions (loneliness, stress, boredom), environments (certain places, times of day), relationships, and internal states. Map your pattern. Address triggers structurally — change environments, schedules, and inputs before you are in the moment of temptation." },
  { n: 5, title: "Build New Habits", desc: "Willpower alone fails because the old neural pathway does not disappear — it must be replaced by a new one. When the trigger hits, the plan must be: do this instead, immediately. The replacement must be specific, accessible, and practiced before the temptation arrives." },
  { n: 6, title: "Address the Root Wound", desc: "Addiction is rarely the primary problem — it is the solution to another problem: loneliness, trauma, shame, anxiety, grief, or the absence of meaning. Recovery that addresses only the behavior and not the wound tends to surface through another addiction. Seek to understand what the substance or behavior was doing for you." },
];

const VOICES = [
  {
    id: "manning",
    name: "Brennan Manning",
    work: "The Ragamuffin Gospel (1990)",
    color: GREEN,
    context: "Catholic-turned-Franciscan priest and author who struggled with alcoholism for much of his adult life. His books on grace were written from the inside of broken experience.",
    quote: "The greatest single cause of atheism in the world today is Christians who acknowledge Jesus with their lips, then walk out the door and deny him by their lifestyle. That is what an unbelieving world simply finds unbelievable.",
    reflection: "Manning's alcoholism was not a well-kept secret — he wrote and spoke about it directly. His central insight, drawn from lived experience: grace is not for cleaned-up people. The Ragamuffin Gospel begins from the premise that God loves broken people not after they are fixed but in and through their brokenness. His recovery involved repeated hospitalizations and relapses. He died in 2013 having never completely conquered the addiction. His legacy is the message he kept preaching anyway: 'God loves you as you are, not as you should be, because you will never be as you should be.'",
  },
  {
    id: "cash",
    name: "Johnny Cash",
    work: "Man in Black (autobiography, 1975)",
    color: "#F59E0B",
    context: "Country music icon who struggled with prescription pill addiction and alcohol from the 1950s through multiple decades. His faith was public and turbulent.",
    quote: "You've got to go down a lot of wrong roads to find the right one.",
    reflection: "Cash's addiction to amphetamines and barbiturates nearly ended his career and life in the 1960s. He was arrested, crashed cars, set fire to a forest, and experienced multiple hospitalizations. His recovery was gradual, nonlinear, and deeply connected to his Christian faith — though faith did not make recovery clean or quick. His marriage to June Carter, who refused to enable him and insisted on his treatment, was a central grace. Cash eventually became a Christian speaker and recorded two albums with producer Rick Rubin in the final years of his life that are widely regarded as his most theologically searching work. His testimony was consistently: God was present in the worst of it, not just the recovery.",
  },
  {
    id: "augustine",
    name: "Augustine of Hippo",
    work: "Confessions (397 AD)",
    color: PURPLE,
    context: "4th-century North African theologian and bishop. Before his conversion, he described his life in terms of appetite, compulsion, and the inability to will what he knew was right.",
    quote: "Lord, make me chaste — but not yet.",
    reflection: "Augustine's Confessions is the original recovery memoir. His famous prayer captures the interior experience of addiction: knowing what is right, genuinely wanting to stop, but not yet fully willing to. He describes his years of sexual compulsion and philosophical restlessness as a kind of captivity — not imposed from outside but arising from a disordered will that could not free itself. His conversion is sudden, but the years of struggle before it are described with psychological precision: the multiple attempts to change, the rationalizations, the partial commitments, the relapses. His theological contribution to recovery is the concept of disordered love (amor disordered) — addiction as love for something good, pursued in the wrong way and to the wrong degree, displacing the love of God.",
  },
  {
    id: "prodigal",
    name: "The Prodigal Son",
    work: "Luke 15:11-32",
    color: "#3B82F6",
    context: "Jesus's parable — the paradigmatic biblical story of compulsion, bottoming out, return, and grace.",
    quote: "When he came to his senses, he said, 'How many of my father's hired servants have food to spare, and here I am starving to death!' (Luke 15:17)",
    reflection: "The prodigal son's story follows the exact pattern of addiction and recovery: inheritance (access to resources), compulsive consumption ('wild living'), depletion, degradation (feeding pigs, the lowest possible occupation for a Jewish person), a moment of clarity ('came to his senses'), the decision to return, the shame-anticipating walk home, and the father's running embrace before any confession is complete. Jesus's point is not that the son repented correctly — it is that the father ran. The story identifies the hinge of recovery not as a better willpower or a cleaner spiritual life, but as a moment of clarity followed by the decision to return — and the father who treats the return as an occasion for celebration rather than probation.",
  },
  {
    id: "tenboom",
    name: "The Wesley Class Meetings",
    work: "Methodist movement, 1740s onward",
    color: "#EC4899",
    context: "John Wesley's structured accountability groups were the first systematic Christian recovery communities — predating AA by 200 years.",
    quote: "Watch over one another in love. How is it with your soul? Have you known any sin since we last met? — Wesley class meeting questions",
    reflection: "Wesley's class meetings of 12 people, meeting weekly, practiced a form of mutual accountability that directly addressed compulsive sin — including the alcohol abuse that was rampant in 18th-century England. The weekly question 'How is it with your soul?' and its follow-up — 'Have you known temptation this week? Have you sinned?' — created the conditions for honest self-disclosure in a context of communal support. Methodist historians argue that the class meetings, not Wesley's preaching, account for the lasting transformation of England during the Methodist revival. The structure was simple: small group, fixed membership, weekly accountability, no shaming but no hiding. Bill Wilson was familiar with the Oxford Group's similar practices when he founded AA in 1935.",
  },
];

interface CheckIn {
  id: string;
  date: string;
  sobrietyDays: number;
  mood: string;
  struggle: string;
  victory: string;
  prayer: string;
}

type Tab = "theology" | "types" | "voices" | "steps" | "tracker" | "videos";

export default function AddictionRecoveryPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_addiction-recovery_tab", "theology");
  const [selected, setSelected] = usePersistedState<string>("vine_addiction-recovery_selected", "Alcohol");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_addiction-recovery_voice", "manning");
  const [checkins, setCheckins] = useState<CheckIn[]>(() => {
    try { const s = localStorage.getItem("vine_recovery_checkins"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [ciForm, setCiForm] = useState({ sobrietyDays: 0, mood: "okay", struggle: "", victory: "", prayer: "" });
  const [ciSaved, setCiSaved] = useState(false);

  useEffect(() => { try { localStorage.setItem("vine_recovery_checkins", JSON.stringify(checkins)); } catch {} }, [checkins]);

  const saveCheckin = () => {
    const entry: CheckIn = { id: Date.now().toString(), date: new Date().toISOString().split("T")[0], ...ciForm };
    setCheckins(prev => [entry, ...prev]);
    setCiForm({ sobrietyDays: ciForm.sobrietyDays, mood: "okay", struggle: "", victory: "", prayer: "" });
    setCiSaved(true);
    setTimeout(() => setCiSaved(false), 2000);
  };

  const deleteCheckin = (id: string) => setCheckins(prev => prev.filter(e => e.id !== id));

  const type = TYPES.find(t => t.type === selected);
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      {/* Crisis banner */}
      <div style={{ background: "rgba(239,68,68,0.08)", borderBottom: "1px solid rgba(239,68,68,0.18)", padding: "10px 20px", textAlign: "center" }}>
        <p style={{ color: "#C0C0D8", fontSize: "13px", margin: 0 }}>
          <strong style={{ color: "#F2F2F8" }}>Need immediate help? </strong>
          <strong style={{ color: "#3a7d56" }}>call or text 988</strong>
          <span style={{ color: "#8A8AA8" }}> (Crisis Lifeline) · </span>
          <strong style={{ color: "#3a7d56" }}>SAMHSA: 1-800-662-4357</strong>
          <span style={{ color: "#8A8AA8" }}> (substance use helpline, free &amp; confidential, 24/7)</span>
        </p>
      </div>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔓</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Addiction & Recovery</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            'He has sent me to proclaim freedom for the prisoners.' Addiction is captivity — and the gospel is the announcement that captivity is not the final word. Recovery is possible, but rarely alone.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "types" as const, label: "Types", icon: "🔍" },
            { id: "voices" as const, label: "Voices", icon: "🗣️" },
            { id: "steps" as const, label: "Steps", icon: "🪜" },
            { id: "tracker" as const, label: "My Recovery", icon: "📅" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "types" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 180, flexShrink: 0 }}>
              {TYPES.map(t => (
                <button type="button" key={t.type} onClick={() => setSelected(t.type)}
                  style={{ width: "100%", background: selected === t.type ? `${t.color}15` : "transparent", border: `1px solid ${selected === t.type ? t.color + "60" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <span style={{ color: selected === t.type ? t.color : TEXT, fontWeight: 700, fontSize: 14 }}>{t.type}</span>
                </button>
              ))}
            </div>
            {type && (
              <div style={{ flex: 1 }}>
                <div style={{ background: CARD, border: `1px solid ${type.color}30`, borderRadius: 14, padding: 28 }}>
                  <h2 style={{ color: type.color, fontWeight: 900, fontSize: 22, marginBottom: 16 }}>{type.type}</h2>
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 12, marginBottom: 8 }}>SIGNS TO RECOGNIZE</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{type.signs}</p>
                  </div>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>RESOURCES</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{type.resources}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {VOICES.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", textAlign: "left", background: selectedVoice === v.id ? `${v.color}18` : CARD, border: `1px solid ${selectedVoice === v.id ? v.color : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer" }}>
                  <div style={{ color: selectedVoice === v.id ? v.color : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 3 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.work}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${voice.color}40`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: voice.color, fontWeight: 900, fontSize: 20, marginBottom: 6 }}>{voice.name}</h2>
              <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{voice.work}</div>
              <div style={{ background: BG, borderRadius: 8, padding: "8px 14px", marginBottom: 14 }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>CONTEXT</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{voice.context}</p>
              </div>
              <blockquote style={{ borderLeft: `3px solid ${voice.color}`, paddingLeft: 16, marginBottom: 14 }}>
                <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>"{voice.quote}"</p>
              </blockquote>
              <div style={{ background: `${voice.color}08`, border: `1px solid ${voice.color}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: voice.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>REFLECTION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{voice.reflection}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "steps" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Recovery from addiction is a process, not an event. These {STEPS.length} steps reflect the wisdom accumulated from decades of addiction recovery ministry and research. None of them can be skipped; none of them are enough alone.
              </p>
            </div>
            {STEPS.map(s => (
              <div key={s.n} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12, display: "flex", gap: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${GREEN}15`, border: `2px solid ${GREEN}`, display: "flex", alignItems: "center", justifyContent: "center", color: GREEN, fontWeight: 800, fontSize: 15, flexShrink: 0 }}>{s.n}</div>
                <div>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{s.title}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "tracker" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 18, marginBottom: 6 }}>Recovery Check-In</h3>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 16 }}>Daily accountability and reflection. Recovery happens one day at a time, in community with God.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div>
                  <label style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>SOBRIETY / RECOVERY DAYS</label>
                  <input type="number" min={0} value={ciForm.sobrietyDays}
                    onChange={e => setCiForm(f => ({ ...f, sobrietyDays: parseInt(e.target.value) || 0 }))}
                    aria-label="Sobriety days"
                    style={{ width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>TODAY&apos;S MOOD</label>
                  <select value={ciForm.mood} onChange={e => setCiForm(f => ({ ...f, mood: e.target.value }))}
                    aria-label="Today's mood"
                    style={{ width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, boxSizing: "border-box" }}>
                    {["strong", "okay", "struggling", "crisis"].map(m => <option key={m} value={m}>{m.charAt(0).toUpperCase() + m.slice(1)}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>STRUGGLE TODAY</label>
                  <textarea value={ciForm.struggle} onChange={e => setCiForm(f => ({ ...f, struggle: e.target.value }))}
                    placeholder="What was hard today? Be honest." aria-label="Struggle today"
                    style={{ width: "100%", marginTop: 6, minHeight: 60, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>VICTORY TODAY</label>
                  <textarea value={ciForm.victory} onChange={e => setCiForm(f => ({ ...f, victory: e.target.value }))}
                    placeholder="What did you do right? Even small wins count." aria-label="Victory today"
                    style={{ width: "100%", marginTop: 6, minHeight: 60, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>PRAYER REQUEST</label>
                  <textarea value={ciForm.prayer} onChange={e => setCiForm(f => ({ ...f, prayer: e.target.value }))}
                    placeholder="What do you need from God right now?" aria-label="Prayer request"
                    style={{ width: "100%", marginTop: 6, minHeight: 60, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
                </div>
                <button type="button" onClick={saveCheckin}
                  style={{ padding: "11px", background: ciSaved ? GREEN : PURPLE, border: "none", borderRadius: 8, color: ciSaved ? BG : "#fff", fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
                  {ciSaved ? "✓ Saved" : "Save Today's Check-In"}
                </button>
              </div>
            </div>
            {checkins.length === 0 && (
              <div style={{ textAlign: "center", padding: 40, color: MUTED }}>
                <div style={{ fontSize: 40, marginBottom: 10 }}>🔓</div>
                <p>No check-ins yet. Recovery is one day at a time. Today is the day.</p>
              </div>
            )}
            {checkins.map(e => {
              const moodColors: Record<string, string> = { strong: GREEN, okay: "#3B82F6", struggling: "#F59E0B", crisis: "#EF4444" };
              return (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${moodColors[e.mood] ?? BORDER}25`, borderRadius: 12, padding: 18, marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <div>
                      <span style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginRight: 8 }}>Day {e.sobrietyDays}</span>
                      <span style={{ color: moodColors[e.mood], fontSize: 13, fontWeight: 700 }}>{e.mood.charAt(0).toUpperCase() + e.mood.slice(1)}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>
                        {new Date(e.date + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <button type="button" onClick={() => deleteCheckin(e.id)}
                        style={{ padding: "3px 8px", borderRadius: 6, border: "1px solid rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.08)", color: "#EF4444", cursor: "pointer", fontSize: 12 }}>×</button>
                    </div>
                  </div>
                  {e.struggle && <p style={{ color: MUTED, fontSize: 13, marginBottom: 4 }}><strong style={{ color: "#F59E0B" }}>Struggle: </strong>{e.struggle}</p>}
                  {e.victory && <p style={{ color: MUTED, fontSize: 13, marginBottom: 4 }}><strong style={{ color: GREEN }}>Victory: </strong>{e.victory}</p>}
                  {e.prayer && <p style={{ color: MUTED, fontSize: 13, margin: 0 }}><strong style={{ color: PURPLE }}>Prayer: </strong>{e.prayer}</p>}
                </div>
              );
            })}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "j9phNEaPrv8", title: "Is Addiction a Sign That Someone Is Not a Christian?", channel: "Ligonier Ministries", description: "Burk Parsons addresses whether ongoing addiction disqualifies someone from faith, and what steps toward repentance and freedom look like in Christ." },
                  { videoId: "dy9nwe9zeU8", title: "How to Overcome Your Addictions", channel: "Tony Evans", description: "Dr. Tony Evans preaches on overcoming addiction through the power of the Holy Spirit, grounding recovery in the truth that Christ sets captives free." },
                  { videoId: "iK0NjiBXKN4", title: "How Do I Get Free from Addiction for Good?", channel: "Bible Teaching", description: "A biblical teaching on breaking the cycle of addiction, addressing the spiritual roots of bondage and the path to lasting freedom in Christ." },
                  { videoId: "zMbUXpFiFeo", title: "Stand for Life: Francis Chan and John Piper", channel: "Desiring God", description: "Francis Chan and John Piper at a 2014 event on living faithfully, including a discussion of gospel freedom from the compulsions that enslave." },
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

      {/* Real Recovery Resources */}
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Find Real Help</h2>
        <p style={{ color: MUTED, fontSize: 14, marginBottom: 20 }}>These organizations provide proven, real-world support for addiction recovery.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
          {[
            { name: "Celebrate Recovery", desc: "Christ-centered 12-step program at thousands of churches nationwide. Find a local meeting.", href: "https://www.celebraterecovery.com/cr-locator", color: GREEN },
            { name: "SAMHSA National Helpline", desc: "1-800-662-4357 — Free, confidential, 24/7 treatment referral and information service.", href: "https://www.samhsa.gov/find-help/national-helpline", color: "#EF4444" },
            { name: "Alcoholics Anonymous", desc: "AA meeting finder — thousands of meetings, many faith-compatible. Spiritual framework welcome.", href: "https://www.aa.org/find-aa", color: "#3B82F6" },
            { name: "Narcotics Anonymous", desc: "NA meeting locator — 70,000+ weekly meetings worldwide. Find one near you.", href: "https://www.na.org/meetingsearch/", color: PURPLE },
            { name: "Focus on the Family", desc: "Free 1-hour consultation with a licensed Christian counselor. Addiction resources included.", href: "https://www.focusonthefamily.com/get-help/speak-with-a-counselor/", color: "#F59E0B" },
            { name: "Covenant Eyes", desc: "Accountability software for pornography/screen addiction. Used by millions of Christians.", href: "https://www.covenanteyes.com/", color: "#4FBBAA" },
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
