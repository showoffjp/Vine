"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const TOPICS = [
  {
    id: "anxiety",
    name: "Anxiety & Worry",
    icon: "😰",
    color: "#3B82F6",
    overview: "Anxiety is one of the most common struggles Christians face — and one of the most directly addressed in Scripture. Biblical counseling for anxiety doesn't dismiss the reality of the experience but challenges the theology underneath it.",
    roots: ["Misplaced trust — trusting in circumstances or self rather than God", "Theological distortion — doubting God's goodness, sovereignty, or awareness", "Habitual mental patterns formed by years of anxious thinking", "Physiological factors — body chemistry, trauma responses, sleep deprivation"],
    biblical: [
      { ref: "Philippians 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." },
      { ref: "Matthew 6:25-34", text: "Therefore I tell you, do not worry about your life... Look at the birds of the air... your heavenly Father feeds them. Are you not much more valuable than they?" },
      { ref: "1 Peter 5:7", text: "Cast all your anxiety on him because he cares for you." },
    ],
    approach: "Anxiety often reflects a theology problem more than a willpower problem. Begin by examining the beliefs underneath the anxiety: What am I really afraid of? What does that fear reveal about what I believe about God? Then bring the truth of God's character, sovereignty, and love into direct contact with those beliefs. Philippians 4 offers a complete framework: prayer + thanksgiving + God's peace + renewing the mind.",
    practicalSteps: [
      "Name the specific fear, not just 'anxiety' in general — vagueness prevents targeted prayer",
      "Practice Philippians 4:8 — actively think about true, noble, right, pure, lovely, admirable things",
      "Develop a specific Scripture response to your most common anxious thoughts",
      "Consider whether physical factors are contributing — sleep, exercise, nutrition, caffeine",
      "Find a trusted person to confess anxiety to — isolation amplifies anxiety",
    ],
    warning: "Persistent anxiety that doesn't respond to spiritual practices may indicate an underlying physiological issue. Christian counseling and medical care are not in conflict — seeking professional help is wisdom, not lack of faith.",
  },
  {
    id: "depression",
    name: "Depression",
    icon: "🌧️",
    color: "#8B5CF6",
    overview: "Depression is not simply sadness — it is often a complex combination of physiological, relational, and spiritual factors. Biblical counseling takes depression seriously while also offering the resources of Scripture, community, and the Spirit.",
    roots: ["Loss — grief unprocessed, identity shattered", "Sin patterns — chronic sin creates spiritual and emotional depression", "Physiological factors — brain chemistry, hormones, illness", "Isolation — the enemy uses aloneness to amplify darkness", "Spiritual attack — Job and Elijah experienced spiritual oppression alongside emotional collapse"],
    biblical: [
      { ref: "Psalm 88", text: "The entire psalm ends without resolution — it is honest darkness brought to God. Even the lament is addressed to 'the God who saves me.'" },
      { ref: "1 Kings 19:3-8", text: "Elijah burned out and wanted to die. God's response: rest, food, water, and presence — before he gave a new assignment." },
      { ref: "Romans 8:26", text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
    ],
    approach: "Depression requires patience — both the sufferer's patience with themselves and the community's patience with the depressed person. Elijah's story is instructive: God did not rebuke him, lecture him, or give him theology. He gave him rest, physical care, and the experience of divine presence. Only then came the gentle question: 'What are you doing here, Elijah?' Care before correction. Presence before prescription.",
    practicalSteps: [
      "Seek professional evaluation — depression often has physiological components that medication can address",
      "Tell one trusted person — the impulse to hide depression feeds it",
      "Address sleep, exercise, and nutrition — these profoundly affect mood",
      "Lament honestly — the Psalms model bringing darkness directly to God",
      "Take small steps of service — serving others is one of the most effective antidepressants",
      "Watch for suicidal ideation and take it seriously — call a crisis line or go to an ER if needed",
    ],
    warning: "Depression with suicidal thoughts is a medical emergency. Crisis resources: 988 (Suicide & Crisis Lifeline), text HOME to 741741 (Crisis Text Line). No spiritual stigma — reaching out for help is courage.",
  },
  {
    id: "addiction",
    name: "Addiction & Compulsive Behavior",
    icon: "🔗",
    color: "#EF4444",
    overview: "Addiction is slavery — and the gospel is liberation. But freedom rarely comes without community, accountability, and often professional help. Biblical counseling takes seriously both the spiritual and physiological dimensions of addiction.",
    roots: ["Seeking comfort, escape, or numbing from legitimate pain through illegitimate means", "Spiritual emptiness — filling the God-shaped hole with substances or behaviors", "Physiological dependency — the brain genuinely changes with sustained addiction", "Shame cycles — shame drives to addiction, addiction produces shame, which drives deeper"],
    biblical: [
      { ref: "John 8:34-36", text: "Everyone who sins is a slave to sin... If the Son sets you free, you will be free indeed." },
      { ref: "1 Corinthians 10:13", text: "God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out." },
      { ref: "James 5:16", text: "Confess your sins to each other and pray for each other so that you may be healed." },
    ],
    approach: "Addiction recovery requires three things working together: grace (freedom from shame), community (accountability and honest relationship), and strategy (removal of access, environmental change, new habits filling the void). White-knuckling alone doesn't work. Neither does grace alone without practical change. Programs like Celebrate Recovery bring all three together in a gospel-centered framework.",
    practicalSteps: [
      "Name it specifically to God and to one trusted person — the confession breaks shame's power",
      "Join a support group — Celebrate Recovery, AA, SMART Recovery — isolation is fatal to recovery",
      "Remove access — delete the app, pour out the alcohol, block the website",
      "Identify the emotional or relational trigger — what does the addiction do for you? What legitimate need is being met illegitimately?",
      "Find a healthy replacement — the void left by the addiction must be filled with something",
      "Professional treatment is often necessary — detox, therapy, or inpatient care can save lives",
    ],
    warning: "Withdrawal from some substances (alcohol, opioids, benzodiazepines) is physically dangerous and requires medical supervision. Don't detox alone from these substances.",
  },
  {
    id: "grief",
    name: "Grief & Loss",
    icon: "💔",
    color: "#EC4899",
    overview: "Grief is love with nowhere to go. It is one of the most universal human experiences and Scripture gives it more space than any other emotional experience — the entire book of Lamentations is devoted to it.",
    roots: ["Death of a loved one", "Loss of marriage or relationship", "Loss of health, capacity, or identity", "Loss of dreams, opportunities, or the future you expected", "Disenfranchised grief — losses others don't acknowledge (miscarriage, pet, estrangement)"],
    biblical: [
      { ref: "John 11:35", text: "Jesus wept. — The Son of God stood at a tomb and wept. Grief is not unbelief." },
      { ref: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
      { ref: "Matthew 5:4", text: "Blessed are those who mourn, for they will be comforted." },
    ],
    approach: "The goal of grief is not to get over the loss but to integrate it — to carry it in a way that allows life to continue. Grief is not linear (Kübler-Ross's stages are descriptive, not prescriptive). The most important thing the church can do is be present — not with answers or timelines but with presence. Don't say 'they're in a better place.' Just say 'I'm so sorry. I love you. I'm here.'",
    practicalSteps: [
      "Allow yourself to grieve — don't rush the process or pretend to be fine",
      "Find a community of people who understand your specific loss (a grief support group)",
      "Create rituals of remembrance — anniversaries, memory boxes, candles — grief needs expression",
      "Distinguish between depression and grief — both are real, but depression may need clinical intervention",
      "Lament to God — Psalm 88 ends in darkness, and that is allowed",
      "Watch for grief that is frozen — if you're not able to function after a year or more, seek professional support",
    ],
    warning: "Grief that turns into inability to function, suicidal thoughts, or prolonged inability to care for yourself may indicate complicated grief disorder or clinical depression. Seek professional support.",
  },
  {
    id: "anger",
    name: "Anger & Bitterness",
    icon: "😤",
    color: "#F97316",
    overview: "Anger itself is not sin — Jesus was angry (Mark 3:5, John 2:15). But anger becomes sin when it is held, expressed destructively, or rooted in pride rather than justice. And bitterness is unresolved anger that has metastasized.",
    roots: ["Unmet legitimate expectations", "Injustice — real or perceived — against yourself or others", "Accumulated hurt without resolution", "Idolatry — the thing you're angry about often reveals what you're worshiping"],
    biblical: [
      { ref: "Ephesians 4:26-27", text: "'In your anger do not sin': Do not let the sun go down while you are still angry, and do not give the devil a foothold." },
      { ref: "James 1:19-20", text: "Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires." },
      { ref: "Hebrews 12:15", text: "See to it that no one falls short of the grace of God and that no bitter root grows up to cause trouble and defile many." },
    ],
    approach: "Anger is often a secondary emotion — it covers fear, grief, or hurt underneath. The first question to ask is not 'Was I right to be angry?' but 'What is this anger telling me about what I care about?' Then: is this something I need to address directly (righteous anger leading to action) or something I need to surrender to God (anger that belongs in prayer)?",
    practicalSteps: [
      "Before reacting, name the emotion underneath the anger — hurt, fear, humiliation?",
      "Delay your response — the sun-goes-down principle means process first, respond after",
      "Identify whether this is righteous anger (injustice against another) or selfish anger (my expectations thwarted)",
      "For ongoing anger toward a specific person: write unsent letters, then bring them to God in prayer",
      "For bitterness: forgiveness is a decision, not a feeling. Make it. Repeat it. Receive healing.",
      "Consider whether anger patterns reflect childhood wounds that need therapeutic attention",
    ],
    warning: "Explosive anger that harms others — physically or verbally — may require anger management classes, therapy, or in cases of abuse, legal intervention. Domestic violence should be reported.",
  },
];

export default function BiblicalCounselingPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "topics">("overview");
  const [selectedTopic, setSelectedTopic] = useState("anxiety");
  const [openSection, setOpenSection] = useState<string>("approach");

  const topic = TOPICS.find(t => t.id === selectedTopic)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🕊️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Biblical Counseling Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Scripture-rooted guidance for life's hardest struggles — not replacing professional care but offering the resources of the gospel.
          </p>
          <div style={{ marginTop: 14, background: "#EF444415", border: "1px solid #EF444430", borderRadius: 8, padding: "10px 20px", display: "inline-block" }}>
            <p style={{ color: "#EF4444", fontSize: 12, margin: 0 }}>⚠️ This resource is for education and spiritual support. It does not replace professional mental health care or medical treatment.</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "overview" as const, label: "What Is It", icon: "📖" },
            { id: "topics" as const, label: "Specific Topics", icon: "🔍" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 26, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 14 }}>Gospel-Centered Counseling</h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 12 }}>
                Biblical counseling is not Christian-flavored advice. It is the application of Scripture, prayer, community, and the work of the Holy Spirit to the full range of human struggle — emotional, relational, and behavioral. It takes both the authority of Scripture and the complexity of human experience seriously.
              </p>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 12 }}>
                The field has grown significantly in the past 50 years, with practitioners like Jay Adams, Paul Tripp, Edward Welch, and Tim Lane developing a robust biblical framework. Key organizations like CCEF (Christian Counseling and Educational Foundation) and ACBC (Association of Certified Biblical Counselors) have produced excellent resources.
              </p>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15 }}>
                Biblical counseling does not deny the complexity of human suffering or the value of psychology's observations. It insists, however, that the deepest resources for transformation are found in Scripture, in the Spirit, and in the community of Christ — and that professional psychological care and gospel-centered care can work together.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
              {TOPICS.map(t => (
                <button key={t.id} onClick={() => { setSelectedTopic(t.id); setActiveTab("topics"); }}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                  <div style={{ color: t.color, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{t.name}</div>
                  <p style={{ color: MUTED, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{t.overview.substring(0, 70)}...</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === "topics" && (
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {TOPICS.map(t => (
                <button key={t.id} onClick={() => setSelectedTopic(t.id)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${selectedTopic === t.id ? t.color : BORDER}`, background: selectedTopic === t.id ? `${t.color}15` : CARD, color: selectedTopic === t.id ? t.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {t.icon} {t.name}
                </button>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${topic.color}40`, borderRadius: 14, padding: 26 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 36 }}>{topic.icon}</span>
                <h2 style={{ color: topic.color, fontWeight: 900, fontSize: 24, margin: 0 }}>{topic.name}</h2>
              </div>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 20 }}>{topic.overview}</p>

              {[
                { id: "roots", label: "Common Roots", content: null },
                { id: "biblical", label: "What Scripture Says", content: null },
                { id: "approach", label: "Biblical Approach", content: null },
                { id: "steps", label: "Practical Steps", content: null },
                { id: "warning", label: "When to Seek Professional Help", content: null },
              ].map(section => (
                <div key={section.id} style={{ marginBottom: 10, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <button onClick={() => setOpenSection(openSection === section.id ? "" : section.id)}
                    style={{ width: "100%", padding: "13px 18px", background: openSection === section.id ? `${topic.color}10` : "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: openSection === section.id ? topic.color : TEXT, fontWeight: 700, fontSize: 14 }}>{section.label}</span>
                    <span style={{ color: MUTED }}>{openSection === section.id ? "−" : "+"}</span>
                  </button>
                  {openSection === section.id && (
                    <div style={{ padding: "0 18px 16px" }}>
                      {section.id === "roots" && (
                        <ul style={{ margin: 0, paddingLeft: 20, marginTop: 4 }}>
                          {topic.roots.map((r, i) => <li key={i} style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, marginBottom: 6 }}>{r}</li>)}
                        </ul>
                      )}
                      {section.id === "biblical" && (
                        <div style={{ marginTop: 8 }}>
                          {topic.biblical.map((v, i) => (
                            <div key={i} style={{ background: BG, borderRadius: 8, padding: 14, marginBottom: 10 }}>
                              <div style={{ color: topic.color, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{v.ref}</div>
                              <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.65, margin: 0 }}>"{v.text}"</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {section.id === "approach" && (
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, marginTop: 4 }}>{topic.approach}</p>
                      )}
                      {section.id === "steps" && (
                        <ol style={{ margin: 0, paddingLeft: 20, marginTop: 4 }}>
                          {topic.practicalSteps.map((s, i) => <li key={i} style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, marginBottom: 8 }}>{s}</li>)}
                        </ol>
                      )}
                      {section.id === "warning" && (
                        <div style={{ marginTop: 4, background: "#EF444410", border: "1px solid #EF444430", borderRadius: 8, padding: 14 }}>
                          <p style={{ color: "#EF4444", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{topic.warning}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
