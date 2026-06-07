"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

const VOICES_BC = [
  { id: "adams-j", name: "Jay Adams", era: "b. 1929", context: "Competent to Counsel (1970) — founder of modern biblical counseling movement", bio: "Jay Adams is widely considered the founder of the modern biblical counseling movement. His landmark Competent to Counsel (1970) argued that Scripture, not secular psychology, is the primary and sufficient resource for counseling Christians — a position he called nouthetic counseling (from the Greek noutheo, to admonish). Adams rejected the therapeutic framework of psychiatry for spiritual issues, insisting that the church has all the resources it needs in the Word and the Spirit. His work launched a movement that has produced thousands of trained biblical counselors and dozens of institutions, while also generating significant debate about the relationship between Scripture and psychology.", quote: "The church has been robbing itself of its own resources by sending its members to Freud instead of to the God who created them. The Scriptures are sufficient for counseling because they address the heart — and the heart is the problem.", contribution: "Adams's Competent to Counsel launched the biblical counseling movement and gave the church a framework for pastoral care that took Scripture's authority seriously in the counseling room. His nouthetic approach — confrontational, directive, Scripture-saturated — has been refined by subsequent practitioners, but Adams established the foundational principle that the church need not outsource soul care to secular psychology." },
  { id: "tripp-p", name: "Paul David Tripp", era: "b. 1950", context: "Instruments in the Redeemer's Hands (2002); Suffering: Gospel Hope When Life Doesn't Make Sense (2018)", bio: "Paul David Tripp has been the most widely read biblical counseling author of the past two decades. His Instruments in the Redeemer's Hands: People in Need of Change Helping People in Need of Change articulated a vision of every-member ministry in which ordinary Christians are equipped to do the work of soul care — not just trained professionals. Tripp's approach is characterized by deep attention to the heart (the inner life of desires, beliefs, and motivations) rather than just behavior modification. His work on suffering, marriage, parenting, and ministry struggle has made biblical counseling resources accessible to laypeople and pastors across all denominations.", quote: "People don't change because you confront their behavior. They change when the gospel reaches the desires and beliefs that are driving the behavior. Change happens at the level of the heart, not the level of the calendar.", contribution: "Tripp's Instruments in the Redeemer's Hands has trained hundreds of thousands of laypeople and pastors in gospel-centered counseling skills. His books on marriage (What Did You Expect?), parenting (Shepherding a Child's Heart), and ministry (Dangerous Calling) have extended biblical counseling principles into every area of Christian life. He is arguably the most influential popularizer of biblical counseling in the English-speaking world." },
  { id: "welch-e", name: "Edward T. Welch", era: "b. 1953", context: "When People Are Big and God Is Small (1997); Side by Side: Walking with Others in Wisdom and Love (2015)", bio: "Edward Welch has made some of the most significant contributions to biblical counseling's treatment of shame, fear, addiction, and self-esteem. His When People Are Big and God Is Small addressed the fear of people as a spiritual issue — the tendency to give human approval more weight than God's — and offered a biblical framework for breaking free. His work on addiction (Addictions: A Banquet in the Grave) and on depression (Depression: A Stubborn Darkness) demonstrated that biblical counseling could engage the most complex struggles with both theological depth and practical wisdom. Welch is known for his unusual combination of pastoral warmth and intellectual rigor.", quote: "The fear of people is not primarily a psychological problem — it is a theological problem. We fear people because we have a small view of God. The cure is not self-confidence; it is the knowledge of God.", contribution: "Welch's body of work has extended biblical counseling's reach into areas previously dominated by secular psychology: shame, addiction, fear, and depression. His model of coming alongside sufferers (rather than directing them from above) influenced the broader movement toward what practitioners now call 'care before cure.' His accessible writing style has made biblical counseling resources available to struggling Christians who might never see a professional counselor." },
  { id: "lane-t", name: "Tim Lane", era: "b. 1963", context: "How People Change (2006, with Paul Tripp); Unstuck: A Nine-Step Journey to Change That Lasts (2014)", bio: "Tim Lane's work has focused on the process of gospel-driven change — what it looks like for the gospel to actually transform the way people live, think, and relate. How People Change (co-authored with Paul Tripp) is among the most used texts in biblical counseling training programs, offering a systematic framework for understanding the change process from the inside out: from the heart to behavior, from the gospel to daily life. Lane has also worked to build bridges between biblical counseling and local church ministry, insisting that the counseling room is not separate from the life of the congregation but an extension of it.", quote: "Change is not primarily about trying harder or knowing better. It is about the gospel reaching the real me — the desires, the fears, the beliefs that no one else sees — and replacing them with the reality of who God is.", contribution: "How People Change has become a standard text in biblical counseling certification programs and church-based small group curricula. Lane's work on connecting the counseling ministry to local church life has influenced how churches think about pastoral care, shepherding, and community." },
  { id: "powlison-d", name: "David Powlison", era: "1949-2019", context: "Seeing with New Eyes (2003); The Biblical Counseling Movement: History and Context (2010)", bio: "David Powlison was the most academically rigorous voice in the biblical counseling movement, and arguably its wisest. As editor of the Journal of Biblical Counseling for more than two decades and faculty member at CCEF, Powlison articulated a vision of biblical counseling that was nuanced, historically aware, and in genuine dialogue with psychology — neither capitulating to it nor dismissing it. His essay on X-ray questions (diagnostic questions that illuminate the heart) has been one of the most influential pieces in biblical counseling practice. Powlison's final years, during his illness from cancer, produced some of his most profound writing on suffering, dying well, and hope.", quote: "The Bible is not a counseling manual. It is a counseling revelation. It does not give you techniques; it gives you a way of seeing — seeing God, seeing yourself, seeing other people, seeing what is really going on.", contribution: "Powlison's academic work gave the biblical counseling movement intellectual credibility and theological depth. His careful engagement with psychology — taking seriously what it observes while challenging its fundamental assumptions — modeled a sophisticated Christian alternative to both wholesale adoption of secular therapy and reflexive rejection of it. His influence on CCEF's approach has shaped the movement's most nuanced practitioners." },
];

export default function BiblicalCounselingPage() {
  const [activeTab, setActiveTab] = usePersistedState<"overview" | "topics" | "voices" | "schools" | "journal" | "videos">("vine_biblical-counseling_tab", "overview");
  const [selectedTopic, setSelectedTopic] = usePersistedState("vine_biblical-counseling_selected_topic", "anxiety");
  const [openSection, setOpenSection] = usePersistedState<string>("vine_biblical-counseling_open_section", "approach");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_biblical-counseling_voice", "adams-j");
  const voiceItem = VOICES_BC.find(v => v.id === selectedVoice)!;

  const topic = TOPICS.find(t => t.id === selectedTopic)!;

  const [bcounEntries, setBcounEntries] = useState<{ id: string; date: string; struggle: string; scripture: string; step: string }[]>(() => {
    try { const s = localStorage.getItem("vine_bcoun_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [bcounForm, setBcounForm] = useState({ struggle: "", scripture: "", step: "" });
  const [bcounSaved, setBcounSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_bcoun_entries", JSON.stringify(bcounEntries)); }, [bcounEntries]);
  function saveBcounEntry() {
    if (!bcounForm.struggle.trim()) return;
    setBcounEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...bcounForm }, ...prev]);
    setBcounForm({ struggle: "", scripture: "", step: "" });
    setBcounSaved(true); setTimeout(() => setBcounSaved(false), 2000);
  }
  function deleteBcounEntry(id: string) { setBcounEntries(prev => prev.filter(e => e.id !== id)); };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
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
            { id: "schools" as const, label: "Approaches", icon: "🏛️" },
            { id: "voices" as const, label: "Key Voices", icon: "🎓" },
            { id: "journal" as const, label: "My Journal", icon: "📓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
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
                <button type="button" key={t.id} onClick={() => { setSelectedTopic(t.id); setActiveTab("topics"); }}
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
                <button type="button" key={t.id} onClick={() => setSelectedTopic(t.id)}
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
                <div role="button" tabIndex={0} key={section.id} style={{ marginBottom: 10, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <button type="button" onClick={() => setOpenSection(openSection === section.id ? "" : section.id)}
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
        {activeTab === "schools" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Schools of Thought</h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
              Biblical counseling is not monolithic — different practitioners have developed distinct approaches to integrating Scripture and care.
            </p>
            {[
              { name: "Nouthetic Counseling (Jay Adams)", color: "#3B82F6", desc: "The founding approach: confrontational, directive, Scripture-saturated. Adams argued that most emotional and behavioral problems are rooted in sin, and that the counselor's task is to bring Scripture to bear on the counselee's unbiblical patterns. Critics say it underweights suffering and complexity; proponents say it is the only approach that takes sin and grace fully seriously." },
              { name: "CCEF Approach (Welch, Powlison, Tripp)", color: "#8B5CF6", desc: "The Christian Counseling and Educational Foundation approach is more nuanced than Adams's original nouthetic model. It attends equally to suffering and sin, emphasizes empathy before exhortation, takes psychology's observations seriously (while challenging its framework), and integrates the full range of human experience into its gospel-centered care. The dominant approach in academically trained biblical counseling." },
              { name: "Christian Psychology (Roberts, Watson)", color: "#10B981", desc: "Distinguished from biblical counseling proper, Christian psychology attempts to develop a distinctly Christian psychological science — drawing on Christian anthropology, virtue theory, and spiritual formation to reconstruct psychology from within rather than replacing it from without. Proponents include Robert Roberts (Spiritual Emotions) and Mark McMinn (Psychology, Theology, and Spirituality in Christian Counseling)." },
              { name: "Integration Model (Collins, Crabb)", color: "#F59E0B", desc: "The integrationist approach seeks to bring together Christian theology and the best of secular psychology, arguing that all truth is God's truth and that psychology's empirical findings about human behavior are valid observations that can be used in a Christian framework. Larry Crabb's Inside Out and Gary Collins's work represent the evangelical integration tradition. Critics say integration can too easily import secular assumptions under Christian language." },
              { name: "Transformational Ministry (AACC)", color: "#EF4444", desc: "The American Association of Christian Counselors represents a broader tent of licensed Christian counselors who use both psychological methods and Christian resources, integrating prayer, Scripture, and the therapeutic relationship. This approach is the most common among licensed professional counselors who identify as Christian and work in clinical settings." },
            ].map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22, marginBottom: 14 }}>
                <h3 style={{ color: s.color, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{s.name}</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
              {VOICES_BC.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(58,125,86,0.4)" : BORDER}`, background: selectedVoice === v.id ? "rgba(58,125,86,0.08)" : CARD, cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? GREEN : TEXT, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: MUTED }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>{voiceItem.name}</h2>
              <div style={{ fontSize: 13, color: MUTED, marginBottom: 20 }}>{voiceItem.era}</div>
              <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
              <div style={{ background: BG, borderRadius: 12, padding: 20, borderLeft: `3px solid ${GREEN}`, marginBottom: 24 }}>
                <p style={{ fontSize: 15, color: "#E0E0F0", lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.75 }}>{voiceItem.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>Biblical Counseling Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Bring your struggles to Scripture — what you are working through, a verse that speaks, and one step toward change.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 700, display: "block", marginBottom: 6 }}>Struggle I am bringing to the Word</label>
                <textarea value={bcounForm.struggle} onChange={e => setBcounForm(f => ({ ...f, struggle: e.target.value }))} rows={2} placeholder="Anxiety, anger, grief, relational conflict, addiction..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 700, display: "block", marginBottom: 6 }}>Scripture that speaks to it</label>
                <textarea value={bcounForm.scripture} onChange={e => setBcounForm(f => ({ ...f, scripture: e.target.value }))} rows={2} placeholder="What verse or passage addresses the heart of this struggle?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 700, display: "block", marginBottom: 6 }}>One step of obedience or change</label>
                <textarea value={bcounForm.step} onChange={e => setBcounForm(f => ({ ...f, step: e.target.value }))} rows={2} placeholder="What is one concrete step the gospel calls you to take?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveBcounEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {bcounSaved ? "Saved!" : "Save Entry"}
              </button>
            </div>
            {bcounEntries.length > 0 && (
              <div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 16, marginBottom: 14 }}>My Entries ({bcounEntries.length})</h3>
                {bcounEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteBcounEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
                    </div>
                    {e.struggle && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, marginBottom: 6 }}><strong style={{ color: GREEN }}>Struggle:</strong> {e.struggle}</p>}
                    {e.scripture && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, marginBottom: 6 }}><strong style={{ color: PURPLE }}>Scripture:</strong> {e.scripture}</p>}
                    {e.step && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}><strong style={{ color: MUTED }}>Step:</strong> {e.step}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Lectures and teachings from leaders in biblical counseling — CCEF, Paul David Tripp, and others who have shaped this discipline.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "GGCF3OPWN14", title: "What Is Biblical Counseling?", channel: "Edward T. Welch / CCEF", description: "Ed Welch explains what biblical counseling is, how Scripture speaks into real human struggles, and how the gospel provides resources that secular counseling lacks." },
                  { videoId: "t6L-F2emwUc", title: "Helping Relationships: Course Lecture", channel: "Ed Welch / CCEF School of Biblical Counseling", description: "A sample lecture from CCEF's foundational course on helping relationships — how to come alongside people in their suffering with both truth and love." },
                  { videoId: "oNpTha80yyE", title: "Biblical Counseling Perspective — Keynote", channel: "Ed Welch, Ph.D.", description: "Welch presents his framework for biblical counseling, addressing the relationship between the soul, the body, and God's word in the process of change." },
                  { videoId: "4Eg_di-O8nM", title: "CCEF's Tim Lane on How People Change", channel: "CCEF", description: "Tim Lane explains the 'How People Change' curriculum — Paul Tripp and Tim Lane's framework showing how Christ's life, death, and resurrection bring lasting transformation." },
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
      </main>
      <Footer />
    </div>
  );
}
