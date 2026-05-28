"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

export default function AddictionRecoveryPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "types" | "steps">("theology");
  const [selected, setSelected] = useState<string | null>("Alcohol");

  const type = TYPES.find(t => t.type === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
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
            { id: "steps" as const, label: "Recovery Steps", icon: "🪜" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "types" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 180, flexShrink: 0 }}>
              {TYPES.map(t => (
                <button key={t.type} onClick={() => setSelected(t.type)}
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

        {activeTab === "steps" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Recovery from addiction is a process, not an event. These six steps reflect the wisdom accumulated from decades of addiction recovery ministry and research. None of them can be skipped; none of them are enough alone.
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
      </div>
    </div>
  );
}
