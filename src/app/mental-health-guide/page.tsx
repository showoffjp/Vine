"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "conditions" | "myths" | "resources" | "crisis" | "videos";

const MH_VIDEOS = [
  { videoId: "KbFKcFxqVlo", title: "Faith and Mental Health — A Pastor's Perspective", channel: "Gospel in Life", description: "Tim Keller addresses the relationship between prayer, therapy, medication, and genuine healing." },
  { videoId: "ACZbpLkY8To", title: "The Bible and Mental Illness", channel: "Ligonier Ministries", description: "A theological framework for understanding depression, anxiety, and mental illness through a biblical lens." },
  { videoId: "fJnGJN6laqE", title: "When Darkness Doesn't Lift — Depression and Faith", channel: "Desiring God", description: "John Piper reads his book on suffering and depression, offering pastoral care for those in the valley." },
  { videoId: "Z8lkuuhVkOI", title: "Mental Health and the Christian Life", channel: "The Gospel Coalition", description: "Practical theological guidance for Christians navigating mental health struggles in themselves and others." },
];

const THEOLOGY_POINTS = [
  { title: "Mental illness is not a sin — but sin affects mental health", color: GREEN, content: "The physical brain is affected by the Fall like every other organ. Chemical imbalances, genetic predispositions to anxiety and depression, trauma-induced neurological changes — these are medical realities, not signs of spiritual failure. At the same time, unconfessed sin, broken relationships, and disordered desires do produce anxiety, depression, and shame. The distinction matters for treatment: physical causes require medical response; spiritual causes require pastoral response. Most situations involve both." },
  { title: "Lament is spiritual — not weakness", color: PURPLE, content: "Two-thirds of the Psalms are lament — honest, raw expressions of pain, confusion, abandonment, and grief addressed directly to God. The Psalms model that bringing darkness to God (Psalm 88: the only Psalm with no resolution) is not faithlessness but faithfulness. Christians who are trained to perform positivity and suppress negative emotion in the church community are more vulnerable to mental health crisis, not less." },
  { title: "The body and soul are not separate", color: "#3B82F6", content: "Biblical anthropology does not divide the human person into a spiritual soul trapped in an evil body. We are embodied souls — what happens to the body affects the soul, and what happens to the soul affects the body. Sleep deprivation, poor nutrition, chronic physical pain, and hormonal disorders all affect mental health. Treating mental health without attending to physical factors is incomplete." },
  { title: "Professional help is not a lack of faith", color: "#F59E0B", content: "A Christian who sees a cardiologist for heart disease is not demonstrating lack of faith in God's healing power. The same logic applies to a Christian who sees a therapist for depression or takes medication for bipolar disorder. God's common grace has produced genuine understanding of the brain, psychology, and effective treatments. The stigma in some Christian communities against professional mental health treatment has caused enormous unnecessary suffering." },
  { title: "Community is essential, not optional", color: "#EF4444", content: "Mental health crises consistently worsen in isolation. The church's one-another commands — bear one another's burdens (Galatians 6:2), weep with those who weep (Romans 12:15), confess to one another (James 5:16) — are specifically designed to create the relational context that makes healing possible. A church community that is too busy, too image-conscious, or too theologically nervous to accompany people in mental health struggle is failing at a basic Christian responsibility." },
  { title: "Hope is not denial — it is eschatological", color: "#10B981", content: "Christian hope does not deny present suffering; it places it in a larger story that ends in redemption. Romans 8:18 — our present sufferings are not worth comparing to the glory that will be revealed. This is not toxic positivity. It is the eschatological orientation that allows honest lament (this is real pain) alongside genuine hope (it will not have the final word). The best Christian response to mental suffering holds both without collapsing either." },
  { title: "Suffering can be redemptive without being deserved", color: "#EC4899", content: "Job's friends assumed his suffering meant hidden sin; God rebuked them. Jesus said the man born blind sinned neither himself nor his parents (John 9:1-3). Mental suffering is not a verdict on your faith or a punishment for your failures. At the same time, Scripture insists that God can work even profound pain toward good (Rom 8:28) and conform us to Christ through it (2 Cor 1:3-7). Holding these together resists two errors: the cruelty of assuming the sufferer brought it on themselves, and the despair of assuming the suffering is meaningless." },
  { title: "The mind can be renewed — slowly, by grace", color: "#06B6D4", content: "Romans 12:2 speaks of being 'transformed by the renewing of your mind,' and Philippians 4:8 directs attention toward what is true and good. Modern therapy's discovery that thought patterns can be retrained (the basis of cognitive therapy) echoes, in part, what Scripture has long taught about the formation of the mind. This is not a promise of instant cure, nor a denial of biological factors — renewal is usually slow, gradual, and assisted by community, practice, and sometimes medicine. But the trajectory of the Christian life is real change, by grace, over time." },
  { title: "Your worth is not your productivity or your wellness", color: "#8B5CF6", content: "A culture that prizes output and self-optimization tells the struggling that they are falling behind or failing. The gospel says your worth is grounded in being made in God's image and loved in Christ — not in your mood, your output, or your recovery timeline. On the days you can do little, you are no less valued by God. This frees the sufferer from the crushing secondary burden of feeling worthless for being unwell, and frees the church from treating mental health as a performance metric." },
];

const CONDITIONS = [
  { name: "Depression", color: GREEN, christian_context: "One of the most common mental health conditions — affecting Christians as frequently as non-Christians. History is full of Christians who suffered from what we now call depression: Spurgeon's black dog, Luther's Anfechtungen, Martin Lloyd-Jones, William Cowper, Mother Teresa's dark night.", signs: "Persistent sadness, hopelessness, loss of interest in previously enjoyed activities, sleep and appetite changes, difficulty concentrating, withdrawal from community", biblical_resources: "Elijah's post-Carmel collapse (1 Kings 19); Psalms 88, 42-43; Lamentations 3:1-20", professional_help: "CBT (Cognitive Behavioral Therapy) is evidence-based; antidepressant medication for moderate-severe cases; psychiatrist evaluation recommended before starting medication", christian_resources: "Grace for the Afflicted (Matthew Stanford); Darkness Is My Closest Friend (Kay Warren); Depression: A Stubborn Darkness (Ed Welch)", initials: "DEP" },
  { name: "Anxiety", color: PURPLE, christian_context: "The most prevalent mental health condition in America. Anxiety has both physiological causes (HPA axis dysregulation, genetic predispositions) and spiritual dimensions (fear of what God may or may not do, control, lack of trust). Philippians 4:6-7 is about the practice of prayer bringing peace — not a command to simply stop being anxious.", signs: "Persistent worry that feels uncontrollable, physical symptoms (racing heart, shortness of breath, tight chest), avoidance of anxiety-triggering situations, sleep disturbance", biblical_resources: "Philippians 4:6-7; Matthew 6:25-34; Psalm 46; 1 Peter 5:7", professional_help: "CBT and exposure therapy are gold-standard treatments; medication (SSRIs, SNRIs) effective for GAD and panic disorder; mindfulness-based approaches have evidence base", christian_resources: "Running Scared (Ed Welch); Anxious for Nothing (Max Lucado); Check with Focus on the Family counseling referral network", initials: "ANX" },
  { name: "Grief & Loss", color: "#EF4444", christian_context: "Grief is not a mental illness but a human response to loss — often misunderstood in Christian communities where premature comfort-giving prevents necessary grief work. Jesus wept at Lazarus's tomb (John 11:35) even knowing he would raise him. The Psalms provide the most sophisticated theology of grief in any literature.", signs: "Waves of sadness and pain, anger (including at God), guilt, isolation, difficulty accepting the loss, physical symptoms (fatigue, illness vulnerability)", biblical_resources: "John 11:35; Psalm 34:18; Matthew 5:4; Lamentations 3", professional_help: "Grief counseling; grief support groups; complicated grief (lasting more than 12 months with significant impairment) may benefit from specialized therapy", christian_resources: "A Grief Observed (C.S. Lewis); When God Weeps (Joni Eareckson Tada); GriefShare (griefshare.org) — church-based grief support groups in 13,000+ locations", initials: "GRF" },
  { name: "Trauma & PTSD", color: "#F59E0B", christian_context: "Trauma — especially childhood trauma — produces measurable neurological changes that affect emotion regulation, memory, and relationship capacity for life. Christians are not exempt from trauma: domestic violence, sexual abuse, natural disasters, war, and medical emergencies happen in Christian families and communities. Spiritual bypass (claiming faith makes trauma irrelevant) is one of the most harmful responses to trauma in Christian contexts.", signs: "Flashbacks and intrusive memories, nightmares, hypervigilance, emotional numbness, avoidance of trauma reminders, difficulty trusting others", biblical_resources: "Psalm 22 (Jesus's cry of dereliction); Isaiah 53:3 (a man of sorrows, acquainted with grief); Romans 8:26 (the Spirit intercedes with groanings)", professional_help: "EMDR (Eye Movement Desensitization and Reprocessing) — the most evidence-based treatment for trauma; Somatic Experiencing; Trauma-focused CBT", christian_resources: "The Body Keeps the Score (Bessel van der Kolk — secular but definitive); Redeeming Your Pain (Mark Foreman); Christian trauma-informed therapy at therapon.com", initials: "TRM" },
  { name: "Addiction", color: "#10B981", christian_context: "Addiction is increasingly understood as a brain disorder with neurological, genetic, and environmental components — not simply a willpower failure or spiritual weakness. This does not remove moral responsibility but it does explain why willpower-based approaches (just stop, pray harder) rarely produce lasting recovery. AA and NA were founded with explicitly theistic/spiritual language; Christian recovery programs model what faith communities can contribute to recovery.", signs: "Continued use despite negative consequences, inability to stop despite repeated attempts, increasing tolerance, withdrawal symptoms, preoccupation with obtaining and using", biblical_resources: "Romans 7:14-25 (Paul's struggle with sin's power); 1 Corinthians 10:13 (no temptation beyond what you can bear); Galatians 5:1 (freedom in Christ)", professional_help: "Medically-supervised detox for alcohol/opioid dependence (dangerous to stop cold turkey); MAT (Medication-Assisted Treatment) for opioid addiction; inpatient treatment for severe cases", christian_resources: "Celebrate Recovery (cr.com) — church-based 12-step program in 35,000+ churches; Teen Challenge International; His House Recovery", initials: "ADD" },
  { name: "Bipolar Disorder", color: "#6366F1", christian_context: "Bipolar disorder involves cycling between depressive lows and manic or hypomanic highs, and is strongly biological — among the most heritable of psychiatric conditions. It is not a spiritual high-and-low or a failure of self-control, and it is dangerous to treat manic episodes as merely 'great faith' or depressive ones as merely 'sin.' Faithful care means accepting that this is a medical condition requiring ongoing treatment, while still ministering to the whole person spiritually and relationally.", signs: "Episodes of elevated mood, decreased need for sleep, racing thoughts, impulsivity or risky behavior (mania); alternating with depressive episodes; rapid or extreme mood shifts", biblical_resources: "Psalm 30 (mourning turned to dancing); Psalm 13 (from anguish to trust); 2 Corinthians 12:9 (grace sufficient in weakness)", professional_help: "Psychiatric care is essential; mood-stabilizing medication (e.g., lithium) is often necessary and effective; consistency in sleep, routine, and medication is central to stability", christian_resources: "Grace for the Afflicted (Matthew Stanford); Darkness Is My Closest Friend (Kay Warren); a church community that supports rather than spiritualizes a medical condition", initials: "BIP" },
  { name: "OCD & Scrupulosity", color: "#EC4899", christian_context: "Obsessive-Compulsive Disorder involves intrusive, distressing thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) done to relieve anxiety. In religious people it can take the form of 'scrupulosity' — tormenting doubts about salvation, blasphemous intrusive thoughts, or compulsive confession and prayer. This is a recognized clinical condition, not weak faith or genuine sin; intrusive thoughts are a symptom, not a reflection of one's heart. Treating scrupulosity as a faith problem alone can deepen the suffering.", signs: "Intrusive unwanted thoughts; compulsive checking, washing, praying, or confessing; relentless doubt about whether one has sinned or is forgiven; rituals to neutralize anxiety", biblical_resources: "Romans 8:1 (no condemnation in Christ); 1 John 3:19-20 (God is greater than our hearts); Psalm 139:23-24", professional_help: "ERP (Exposure and Response Prevention) is the gold-standard therapy; SSRIs are often effective; a therapist familiar with religious scrupulosity is ideal", christian_resources: "The International OCD Foundation (iocdf.org) has scrupulosity resources; work with both a pastor and a clinician who understand the difference between OCD and conscience", initials: "OCD" },
];

const RESOURCES_DATA = [
  { name: "Grace Alliance", type: "Ministry", desc: "Mental health ministry specifically for Christians — small group resources, training for churches, and direct support. gracealliance.com", color: GREEN },
  { name: "Focus on the Family — Counseling", type: "Referral", desc: "Free initial consultations with licensed Christian counselors; nationwide referral network. focusonthefamily.com/counseling", color: PURPLE },
  { name: "GriefShare", type: "Support Group", desc: "Church-based grief support groups in 13,000+ locations. griefshare.org", color: "#EF4444" },
  { name: "Celebrate Recovery", type: "Recovery", desc: "Christ-centered 12-step recovery program for any hurt, habit, or hang-up. In 35,000+ churches. celebraterecovery.com", color: "#F59E0B" },
  { name: "Association of Biblical Counselors", type: "Counselor Directory", desc: "Directory of certified biblical counselors integrating Scripture with psychological understanding. christiancounseling.com", color: "#3B82F6" },
  { name: "Psychology Today Therapist Finder", type: "Therapist Search", desc: "Allows filtering by religion (Christian) when searching for therapists. psychologytoday.com/us/therapists", color: "#10B981" },
  { name: "National Alliance on Mental Illness (NAMI)", type: "Education", desc: "The largest mental health advocacy organization. Excellent educational resources, peer support groups, helpline. nami.org", color: "#6366F1" },
  { name: "Ed Welch / CCEF", type: "Biblical Counseling", desc: "The Christian Counseling & Educational Foundation produces the most rigorous biblical counseling resources. Running Scared, Side by Side, When People Are Big and God Is Small. ccef.org", color: GREEN },
  { name: "American Association of Christian Counselors", type: "Counselor Directory", desc: "The largest network of Christian counselors, with a searchable directory and certification standards for finding a licensed, professing-Christian therapist. aacc.net", color: "#EC4899" },
  { name: "Fresh Hope for Mental Health", type: "Peer Support", desc: "Christian peer-support groups for those living with a mental health diagnosis and their loved ones, plus podcasts and church-equipping resources. freshhope.us", color: "#8B5CF6" },
  { name: "Soul Shepherding", type: "Spiritual Formation", desc: "Bill and Kristi Gaultiere integrate spiritual direction, psychology, and the practices of Jesus to support emotional and spiritual health, including resources for ministry burnout. soulshepherding.org", color: "#06B6D4" },
  { name: "Mental Health Grace Alliance — Living Grace Groups", type: "Support Group", desc: "Church-based curriculum and small groups combining faith, neuroscience, and practical recovery skills for mental health and well-being. mentalhealthgracealliance.org", color: "#14B8A6" },
];

const MYTHS = [
  { myth: "Real Christians don't get depressed or anxious.", truth: "Some of the most faithful believers in history — Spurgeon, Luther, Cowper, Lloyd-Jones, Mother Teresa — wrestled with profound darkness. Two-thirds of the Psalms are laments. Faith and mental suffering coexist throughout Scripture; the presence of struggle is not the absence of faith.", color: GREEN },
  { myth: "If you just prayed more / had more faith, you'd be well.", truth: "Prayer matters, but treating mental illness as merely a prayer deficit shames the sufferer and ignores real biological factors. We do not tell a diabetic that more faith would fix their pancreas. God works through means — including doctors, therapy, medication, and community — as well as through direct intervention.", color: PURPLE },
  { myth: "Taking medication shows you don't trust God.", truth: "Medication is part of God's common grace, like insulin or antibiotics. For many conditions it is the difference between functioning and not. Trusting God and taking medicine are not in competition; using the help God provides is itself an act of stewardship and humility, not faithlessness.", color: "#3B82F6" },
  { myth: "Mental illness is always caused by sin.", truth: "Sin can produce real distress (guilt, anxiety, broken relationships), and that connection should not be ignored. But Scripture explicitly denies that all suffering is the sufferer's fault (John 9:1-3; Job). Brains, like every other organ, are affected by the Fall in ways that are not the individual's moral failure.", color: "#EF4444" },
  { myth: "Seeing a secular therapist will undermine your faith.", truth: "Wisdom and skill are not the exclusive property of believers (common grace). Many Christians thrive with skilled clinicians, including non-Christian ones, especially for evidence-based treatments. That said, you can seek a professing-Christian counselor if you want shared convictions, and you can discuss faith openly with any therapist. Discernment, not avoidance, is the goal.", color: "#F59E0B" },
  { myth: "If I admit I'm struggling, I'll be a burden or lose my witness.", truth: "Galatians 6:2 commands us to bear one another's burdens — which assumes there are burdens to share. Honesty about struggle is not a failed witness; it is often the most powerful one, showing that the gospel is for the broken, not the pretending. Hiding deepens isolation, the very thing that worsens most mental health crises.", color: "#10B981" },
];

const SEEK_HELP = [
  "Symptoms persist for more than two weeks and interfere with work, relationships, sleep, or daily functioning",
  "You experience any thoughts of suicide, self-harm, or that others would be better off without you — seek help immediately (call or text 988)",
  "You are using alcohol, drugs, food, or other behaviors to cope or numb",
  "Loved ones have expressed concern about changes in your mood, behavior, or withdrawal",
  "You feel hopeless, trapped, or unable to imagine things getting better",
  "Panic attacks, intrusive thoughts, or compulsions are disrupting your life",
  "Grief is not easing after many months and is keeping you from functioning",
  "You are a leader or caregiver running on empty, with no margin and growing resentment or numbness",
];

const CRISIS_INFO = [
  { name: "988 Suicide & Crisis Lifeline", number: "Call or text 988", desc: "24/7 free mental health crisis support. Replaced the National Suicide Prevention Lifeline number in 2022. Available by phone, chat, and text. 988lifeline.org", color: "#EF4444" },
  { name: "Crisis Text Line", number: "Text HOME to 741741", desc: "Free 24/7 crisis counseling via text. Connect with a trained crisis counselor for any crisis — not only suicidal thoughts. crisistextline.org", color: "#F59E0B" },
  { name: "SAMHSA National Helpline", number: "1-800-662-4357", desc: "Substance Abuse and Mental Health Services Administration — free, confidential, 24/7 treatment referral for mental health and substance use disorders. samhsa.gov", color: GREEN },
  { name: "Emergency Services", number: "Call 911", desc: "For immediate life-threatening psychiatric emergencies — active suicidal behavior with means, psychosis with danger to self or others.", color: "#EF4444" },
];

export default function MentalHealthGuidePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_mental-health-guide_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<string | null>(null);

  const condition = CONDITIONS.find(c => c.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🧩</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Mental Health & the Christian</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            A biblical theology of mental health, guidance for specific conditions, real resources, and crisis information. The church can and must do better at walking with those who suffer mentally.
          </p>
        </div>

        <div style={{ background: "#EF444408", border: "1px solid #EF444420", borderRadius: 10, padding: "12px 18px", marginBottom: 20 }}>
          <span style={{ color: "#EF4444", fontWeight: 700, fontSize: 12 }}>Crisis? </span>
          <span style={{ color: TEXT, fontSize: 13 }}>If you are in immediate crisis, call or text <strong>988</strong> (Suicide & Crisis Lifeline) or go to your nearest emergency room. See the Crisis tab for more resources.</span>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["theology", "conditions", "myths", "resources", "crisis", "videos"] as Tab[]).map(t => (
            <button type="button" key={t} onClick={() => { setTab(t); setSelected(null); }}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textTransform: "capitalize" }}>
              {t === "theology" ? "Theology" : t === "conditions" ? "Conditions" : t === "myths" ? "Myths & Help" : t === "resources" ? "Resources" : t === "crisis" ? "Crisis Help" : "Videos"}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {THEOLOGY_POINTS.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[p.title] ? p.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button type="button" onClick={() => setExpanded(e => ({ ...e, [p.title]: !e[p.title] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: p.color, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[p.title] ? "−" : "+"}</span>
                </button>
                {expanded[p.title] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{p.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "conditions" && (
          <div style={{ display: "grid", gridTemplateColumns: condition ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {CONDITIONS.map((c, i) => (
                <button type="button" key={i} onClick={() => setSelected(selected === c.name ? null : c.name)}
                  style={{ background: selected === c.name ? `${c.color}12` : CARD, border: `1px solid ${selected === c.name ? c.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: `${c.color}20`, border: `1px solid ${c.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>{c.initials}</div>
                    <div style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{c.name}</div>
                  </div>
                </button>
              ))}
            </div>
            {condition && (
              <div style={{ background: CARD, border: `1px solid ${condition.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                <h2 style={{ color: condition.color, fontWeight: 900, fontSize: 18, margin: "0 0 14px" }}>{condition.name}</h2>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>{condition.christian_context}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>BIBLICAL RESOURCES</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{condition.biblical_resources}</p>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10, marginBottom: 10 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>PROFESSIONAL TREATMENT</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{condition.professional_help}</p>
                </div>
                <div style={{ background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10 }}>
                  <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>CHRISTIAN RESOURCES</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{condition.christian_resources}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "myths" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <div style={{ color: TEXT, fontWeight: 900, fontSize: 18, marginBottom: 4 }}>Myths vs. Truths</div>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: "0 0 6px" }}>Harmful assumptions still circulate in many churches. Replacing them with biblical, accurate understanding is itself a ministry of love.</p>
            </div>
            {MYTHS.map((m, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${m.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ background: "#EF444408", border: "1px solid #EF444420", borderRadius: 8, padding: "10px 12px", marginBottom: 10 }}>
                  <span style={{ color: "#EF4444", fontWeight: 800, fontSize: 10 }}>MYTH · </span>
                  <span style={{ color: TEXT, fontSize: 13, fontStyle: "italic" }}>{m.myth}</span>
                </div>
                <div style={{ background: `${m.color}08`, border: `1px solid ${m.color}15`, borderRadius: 8, padding: "10px 12px" }}>
                  <span style={{ color: m.color, fontWeight: 800, fontSize: 10 }}>TRUTH · </span>
                  <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.65 }}>{m.truth}</span>
                </div>
              </div>
            ))}
            <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}25`, borderRadius: 12, padding: 22, marginTop: 4 }}>
              <div style={{ color: PURPLE, fontWeight: 900, fontSize: 16, marginBottom: 6 }}>When to Seek Professional Help</div>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, marginBottom: 12 }}>Seeking help is wisdom, not weakness. Consider reaching out to a doctor, counselor, or pastor if any of the following are true. If there is any thought of suicide or harm, seek help right away.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {SEEK_HELP.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ color: PURPLE, fontSize: 14, flexShrink: 0 }}>·</div>
                    <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.55 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "resources" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 14 }}>
            {RESOURCES_DATA.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${r.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                  <div style={{ color: r.color, fontWeight: 800, fontSize: 14 }}>{r.name}</div>
                  <span style={{ background: `${r.color}15`, color: r.color, padding: "1px 6px", borderRadius: 6, fontSize: 10, fontWeight: 700 }}>{r.type}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "crisis" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {CRISIS_INFO.map((c, i) => (
              <div key={i} style={{ background: CARD, border: `2px solid ${c.color}40`, borderRadius: 14, padding: 24 }}>
                <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 10 }}>
                  <div style={{ color: c.color, fontWeight: 900, fontSize: 17 }}>{c.name}</div>
                  <div style={{ background: `${c.color}15`, border: `1px solid ${c.color}30`, borderRadius: 8, padding: "4px 14px", color: c.color, fontWeight: 900, fontSize: 16 }}>{c.number}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
            <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 12, padding: 20 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 14, marginBottom: 10 }}>If someone you love is in crisis</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {["Stay with them — do not leave them alone", "Listen without minimizing or fixing — I am here, I love you, I want you to be safe", "Remove access to means if possible (firearms, medications)", "Accompany them to the ER or call 911 if there is immediate danger", "Contact their pastor, counselor, or crisis team immediately after", "Take care of yourself — supporting someone in crisis is exhausting and frightening"].map((s, i) => (
                  <div key={i} style={{ color: TEXT, fontSize: 13 }}>· {s}</div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {MH_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
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
      <Footer />
    </div>
  );
}
