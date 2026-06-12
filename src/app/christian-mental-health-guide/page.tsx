"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";

const TABS = ["Stigma", "Elijah", "Scripture", "Therapy", "Church", "Videos"] as const;
type Tab = typeof TABS[number];

const STIGMA_SECTIONS = [
  {
    title: "The Silence That Kills",
    body: "Mental illness is the most common category of suffering in human experience — and the most under-discussed topic in the average church. Studies consistently find that Christians are as likely as the general population to experience depression, anxiety, OCD, bipolar disorder, and PTSD, yet far less likely to seek treatment. The barriers are largely theological: the implicit or explicit message that mental illness is a spiritual problem with a spiritual solution, and that seeking medication or therapy signals insufficient faith. This silence has consequences. The suicide rate among Christians is not lower than among the general population. The church&apos;s silence on mental health is not a neutral position — it is an active harm.",
    accent: TEAL,
  },
  {
    title: "Where the Stigma Comes From",
    body: "The church&apos;s stigmatization of mental illness has multiple roots. First, a dualistic anthropology inherited from Greek philosophy that treats the body and soul as separable, such that spiritual problems are &ldquo;real&rdquo; and physical ones are secondary. Second, a misreading of passages like Philippians 4:6-7 (&ldquo;do not be anxious&rdquo;) as commands that can be obeyed by willpower alone, rather than as promises grounded in God&apos;s character. Third, a culture of performance — particularly in charismatic and evangelical contexts — where visible joy and confidence are evidence of spiritual health, and depression or anxiety are therefore evidence of spiritual failure. Fourth, a genuine theological conviction, often expressed as &ldquo;all you need is God,&rdquo; that treats professional mental health care as a competitor to faith rather than as an instrument of it.",
    accent: PURPLE,
  },
  {
    title: "What the Bible Actually Teaches",
    body: "The Bible does not treat mental and emotional suffering as evidence of faithlessness. Moses prayed to die under the weight of his leadership burden (Numbers 11:14-15). Elijah fled in suicidal despair after his greatest ministry triumph (1 Kings 19). Job spiraled into suicidal ideation in the middle of his debates with God (Job 3). Jeremiah cursed the day he was born (Jeremiah 20:14-18). David wrote Psalm 88 — the darkest psalm, which ends with the single word &ldquo;darkness&rdquo; and no resolution. These are not presented as failures of faith. They are presented as the authentic experience of people in covenant with God, and they are given to us as prayers. The Bible&apos;s realism about mental suffering is more honest than most churches.",
    accent: GREEN,
  },
  {
    title: "The Whole-Person Gospel",
    body: "The gospel is not a spiritual transaction that leaves the body and mind behind — it is the redemption and resurrection of the whole person. When Jesus healed people, he healed bodies as well as souls. When the disciples were sent out, they healed diseases and cast out demons alongside preaching repentance. The incarnation itself — God becoming flesh — is a theological statement that the physical and mental dimensions of human existence are not spiritually irrelevant. A gospel that dismisses mental illness as a spiritual problem to be prayed away is a truncated gospel. The whole-person gospel takes suffering seriously in every dimension — physical, psychological, relational, and spiritual — and seeks healing in all of them.",
    accent: GOLD,
  },
];

const ELIJAH_SECTIONS = [
  {
    heading: "The Setup: After the Greatest Victory",
    content: "1 Kings 18 records Elijah&apos;s confrontation with the 450 prophets of Baal on Mount Carmel — the most dramatic prophetic showdown in Israel&apos;s history. Elijah calls fire from heaven, wins decisively, kills the false prophets, and ends a three-year drought. By any measure, it is his greatest moment of ministry. In 1 Kings 19, the very next chapter, Jezebel threatens his life and Elijah runs into the wilderness, sits under a juniper tree, and prays to die: &ldquo;It is enough; now, O Lord, take away my life, for I am not better than my fathers.&rdquo; This is the biblical pattern: the collapse that follows the summit. Understanding this is essential for anyone who has experienced spiritual highs followed by devastating lows.",
  },
  {
    heading: "God's Response: Not a Sermon",
    content: "What is striking about God&apos;s response to Elijah&apos;s suicidal depression is what it is not. It is not a theological correction. It is not a rebuke for lack of faith. It is not a reminder of Elijah&apos;s calling or spiritual purpose. It is bread and water. An angel touches Elijah and says &ldquo;arise and eat&rdquo; — twice. Elijah is fed and then allowed to sleep more. Only after his physical needs are met does God invite him to continue: &ldquo;the journey is too great for you.&rdquo; This sequence — physical care before theological instruction — is a profound pastoral model. Before God addressed Elijah&apos;s spiritual crisis, he addressed his body. He ate. He slept. He was touched. God works through the physical.",
  },
  {
    heading: "The Still Small Voice",
    content: "When Elijah finally reaches Horeb, God passes by in wind, earthquake, and fire — and is not in any of them. Then comes the still small voice (or, in some translations, &ldquo;the sound of sheer silence&rdquo;). This is the theophany that meets Elijah&apos;s depression: not spectacle, not power, not dramatic intervention, but quiet presence. For people in the depths of depression, this is deeply pastoral. God does not wait for you to be recovered before he comes near. He meets you in the cave. He comes in the stillness that is all you can bear. The still small voice is the sound of God showing up to the depressed prophet — not to fix him immediately, but to be with him.",
  },
  {
    heading: "The Reorientation: 7,000 Others",
    content: "Elijah tells God &ldquo;I alone am left.&rdquo; This is the distorted perception of severe depression — the certainty that one&apos;s situation is uniquely hopeless, that no one understands, that one is entirely alone. God&apos;s gentle correction: &ldquo;Yet I have reserved seven thousand in Israel, all whose knees have not bowed to Baal.&rdquo; The community Elijah thought had vanished was actually there. This is not a rebuke — it is a restoration of perspective. One of the most consistent features of depression is its isolation, its certainty that the sufferer is uniquely abandoned. The pastoral response — like God&apos;s — is to gently reintroduce the person to community and reality without shaming the distortion.",
  },
  {
    heading: "Application for the Church",
    content: "The Elijah narrative gives us a biblical model for responding to mental health crises: (1) Meet physical needs first — food, sleep, rest, touch. (2) Do not demand theological performance before care. (3) Recognize that great spiritual exertion is often followed by profound emotional collapse. (4) Offer quiet presence rather than dramatic intervention. (5) Gently correct the isolation and distortion of depression with truthful community. (6) Trust that God&apos;s response to Elijah&apos;s suicidal cry was not abandonment but presence. The church that does not know this story — or that skips to the still small voice without the juniper tree — is ill-equipped to care for suffering people.",
  },
];

const SCRIPTURE_ITEMS = [
  {
    ref: "1 Kings 19:4",
    text: "He came to a broom bush, sat down under it and prayed that he might die. It is enough, Lord, he said. Take my life; I am no better than my ancestors.",
    note: "Suicidal ideation in Scripture — not rebuked but met with food and rest.",
    accent: TEAL,
  },
  {
    ref: "Psalm 88:18",
    text: "You have taken from me friend and neighbor — darkness is my closest friend.",
    note: "The darkest psalm — ends with no resolution, only darkness. Canon authorizes honest lament.",
    accent: PURPLE,
  },
  {
    ref: "Psalm 34:18",
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    note: "God&apos;s posture toward mental suffering: proximity, not distance.",
    accent: GREEN,
  },
  {
    ref: "Isaiah 42:3",
    text: "A bruised reed he will not break, and a smoldering wick he will not snuff out.",
    note: "The servant does not destroy what is fragile — a picture of Christ&apos;s tenderness toward the vulnerable.",
    accent: GOLD,
  },
  {
    ref: "Matthew 26:38",
    text: "Then he said to them, My soul is overwhelmed with sorrow to the point of death. Stay here and keep watch with me.",
    note: "Jesus&apos; anguish in Gethsemane — not a failure of faith but perfect faithfulness in the face of anguish.",
    accent: PURPLE,
  },
  {
    ref: "Romans 8:26",
    text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.",
    note: "The Spirit intercedes when we cannot — mental illness does not disable prayer.",
    accent: TEAL,
  },
  {
    ref: "2 Corinthians 12:9",
    text: "My grace is sufficient for you, for my power is made perfect in weakness.",
    note: "Paul&apos;s thorn — weakness is not disqualifying but the very site of God&apos;s power.",
    accent: GREEN,
  },
  {
    ref: "Philippians 4:7",
    text: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
    note: "God guards the mind — peace is not manufactured by willpower but given by God.",
    accent: GOLD,
  },
];

const THERAPY_SECTIONS = [
  {
    title: "Therapy Is Not a Failure of Faith",
    body: "The most damaging message the church sends about mental health is that seeking therapy represents a failure to trust God. This is theologically incoherent. We do not tell people who have broken legs to pray instead of seeing a doctor. We do not tell people with diabetes that insulin is a failure of faith. The brain is an organ. It can malfunction, as all organs can. The same God who created the healing arts, sanctioned the use of medicine throughout Scripture (Luke 10:34, 1 Timothy 5:23, James 5:14), and placed the physician Luke among his apostles has also provided psychotherapy as a means of healing. Seeking a therapist is using the resources God has provided for healing — not avoiding him.",
    accent: TEAL,
  },
  {
    title: "What Therapy Offers That Prayer Alone Cannot",
    body: "Prayer, Scripture, community, and spiritual direction are genuine and irreplaceable resources for mental health. They are also not sufficient for every condition. Depression with a significant neurological component responds to medication in ways that prayer does not reverse because the mechanism is biochemical, not spiritual. Trauma stored in the body requires somatic approaches that engage the nervous system in ways that sermon-listening does not. Childhood attachment wounds shape the capacity for relationship — including the relationship with God — in ways that require relational repair, not just theological instruction. A Christian who says &ldquo;all you need is God&rdquo; and means &ldquo;don&apos;t get therapy&rdquo; has a truncated theology of how God works.",
    accent: PURPLE,
  },
  {
    title: "Medication and Faith",
    body: "Antidepressants, anti-anxiety medications, mood stabilizers, and antipsychotics are among the most consequential medical advances of the twentieth century. They have enabled millions of people to function, maintain relationships, hold jobs, and live meaningful lives. For Christians, the question is not whether medication is compatible with faith — it clearly is — but whether the side of the church that stigmatizes it as &ldquo;numbing yourself to what God wants you to feel&rdquo; has any biblical warrant. It does not. 1 Timothy 5:23 records Paul recommending wine for Timothy&apos;s stomach problems — a first-century pharmaceutical recommendation. The God who created neurotransmitters is not offended when they are supported by medication.",
    accent: GREEN,
  },
  {
    title: "Finding a Christian Therapist (and When You Don&apos;t Need One)",
    body: "Many Christians seek a therapist who shares their faith. This is reasonable — a therapist who understands the language, community, and meaning-making structures of Christian faith can integrate that framework into treatment rather than working around it. The AACC (American Association of Christian Counselors) and Psychology Today both have searchable directories. That said, not every therapist needs to be Christian. A competent, respectful therapist who does not share your faith can still provide excellent care. What matters most is therapeutic competence, clinical approach, and the quality of the working relationship — not shared creed.",
    accent: GOLD,
  },
];

const CHURCH_SECTIONS = [
  {
    title: "What Churches Get Wrong",
    items: [
      "Treating mental illness as primarily a spiritual problem requiring only spiritual solutions",
      "Shaming people who take psychiatric medication as lacking faith or numbing themselves to God",
      "Responding to depression with &ldquo;just trust God more&rdquo; or &ldquo;choose joy&rdquo;",
      "Creating a culture of performed happiness where honest struggle is unwelcome",
      "Treating therapy and pastoral care as competitors rather than complements",
      "Failing to acknowledge from the pulpit that members struggle with mental illness",
      "Providing no training for pastors or lay leaders in mental health first aid",
      "Referring people to prayer and Scripture without also referring them to appropriate professional care",
    ],
  },
  {
    title: "What Churches Can Do Better",
    items: [
      "Name mental illness from the pulpit — normalize the conversation by addressing it directly",
      "Partner with licensed Christian counselors to provide referrals and reduced-cost care",
      "Train pastors in Mental Health First Aid (a free, evidence-based program)",
      "Create support groups — depression, anxiety, grief, and trauma groups within the congregation",
      "Make clear that medication is not a spiritual failure — that the brain is a physical organ",
      "Preach the Elijah narrative (1 Kings 19) as a model for responding to mental health crises",
      "Build a culture of honest lament — model it in worship, in small groups, in pastoral prayer",
      "Stop performing collective happiness and start practicing honest community",
    ],
  },
];

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const JOURNAL_KEY = "vine_cmhg_journal";

export default function ChristianMentalHealthGuide() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState<Tab>("Stigma");
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [draft, setDraft] = useState("");
  const [expandedElijah, setExpandedElijah] = useState<number | null>(0);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(JOURNAL_KEY);
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  function saveEntry() {
    if (!draft.trim()) return;
    const next = [
      { id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() },
      ...entries,
    ];
    setEntries(next);
    try { localStorage.setItem(JOURNAL_KEY, JSON.stringify(next)); } catch {}
    setDraft("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter((e) => e.id !== id);
    setEntries(next);
    try { localStorage.setItem(JOURNAL_KEY, JSON.stringify(next)); } catch {}
  }

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      {/* Crisis Banner */}
      <div style={{ background: "rgba(13,148,136,0.08)", borderBottom: `1px solid rgba(13,148,136,0.22)`, padding: "10px 20px", textAlign: "center" }}>
        <p style={{ color: "#C0C0D8", fontSize: "13px", margin: 0 }}>
          <strong style={{ color: TEXT }}>Crisis support: </strong>
          <strong style={{ color: TEAL }}>call or text 988</strong>
          <span style={{ color: MUTED }}> (Suicide &amp; Crisis Lifeline) &nbsp;&middot;&nbsp; text </span>
          <strong style={{ color: TEAL }}>HOME to 741741</strong>
          <span style={{ color: MUTED }}> (Crisis Text Line) &mdash; 24/7, free &amp; confidential</span>
        </p>
      </div>

      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", padding: "48px 0 36px" }}>
          <div style={{ display: "inline-block", background: `${TEAL}18`, border: `1px solid ${TEAL}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: TEAL, letterSpacing: 1, marginBottom: 18, textTransform: "uppercase" }}>
            Faith &amp; Mental Health
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 14, lineHeight: 1.2 }}>
            Christian Mental Health Guide
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto", lineHeight: 1.8 }}>
            Mental illness is not a spiritual failure. Elijah was suicidal. David wrote Psalm 88. Jesus wept. The whole-person gospel takes the mind seriously &mdash; and so should the church.
          </p>
        </div>

        {/* Stat Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 12, marginBottom: 36 }}>
          {[
            { stat: "1 in 5", label: "Americans experience mental illness each year", color: TEAL },
            { stat: "50%", label: "of Christians delay seeking treatment due to church stigma", color: PURPLE },
            { stat: "1 Kings 19", label: "Elijah&apos;s suicidal depression — in Scripture", color: GREEN },
            { stat: "Psalm 88", label: "Ends with no resolution &mdash; darkness alone", color: GOLD },
          ].map((s, i) => (
            <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${s.color}`, borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ color: s.color, fontWeight: 900, fontSize: 22, marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: s.stat }} />
              <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: s.label }} />
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{ flex: 1, minWidth: 80, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* ── Tab: Stigma ── */}
        {tab === "Stigma" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {STIGMA_SECTIONS.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${s.accent}`, borderRadius: 12, padding: 24 }}>
                <h2 style={{ color: s.accent, fontSize: 19, fontWeight: 800, marginBottom: 12, marginTop: 0 }}>{s.title}</h2>
                <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* ── Tab: Elijah ── */}
        {tab === "Elijah" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                1 Kings 19 is the most detailed account of a mental health crisis in Scripture. Elijah &mdash; the greatest prophet of his generation &mdash; collapses into suicidal despair the morning after his greatest victory. God&apos;s response is a model for pastoral care.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {ELIJAH_SECTIONS.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => setExpandedElijah(expandedElijah === i ? null : i)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", background: "transparent", border: "none", color: TEXT, cursor: "pointer", textAlign: "left" }}
                  >
                    <span style={{ fontWeight: 800, fontSize: 16, color: expandedElijah === i ? GREEN : TEXT }}>{s.heading}</span>
                    <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, marginLeft: 12, lineHeight: 1 }}>{expandedElijah === i ? "−" : "+"}</span>
                  </button>
                  {expandedElijah === i && (
                    <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${BORDER}` }}>
                      <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: "16px 0 0" }}>{s.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Tab: Scripture ── */}
        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 4 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Scripture does not present mental suffering as evidence of spiritual failure. It canonizes the laments, gives voice to the despairing, and shows God drawing near to the crushed in spirit. These texts are not exceptions to the Bible&apos;s message &mdash; they are part of it.
              </p>
            </div>
            {SCRIPTURE_ITEMS.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${s.accent}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: s.accent, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, fontSize: 15, margin: "0 0 10px" }}>&ldquo;{s.text}&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{s.note}</p>
              </div>
            ))}
          </div>
        )}

        {/* ── Tab: Therapy ── */}
        {tab === "Therapy" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {THERAPY_SECTIONS.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${s.accent}`, borderRadius: 12, padding: 24 }}>
                <h2 style={{ color: s.accent, fontSize: 19, fontWeight: 800, marginBottom: 12, marginTop: 0 }}>{s.title}</h2>
                <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: 0 }}>{s.body}</p>
              </div>
            ))}
            <div style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}30`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 16, marginBottom: 14, marginTop: 0 }}>Find Help</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { name: "AACC Counselor Directory", url: "https://www.aacc.net/resources/find-a-counselor/", desc: "Find a licensed Christian counselor integrating faith and evidence-based care." },
                  { name: "Psychology Today Therapist Finder", url: "https://www.psychologytoday.com/us/therapists", desc: "Filter by specialty, insurance, and faith integration." },
                  { name: "Focus on the Family Counseling", url: "https://www.focusonthefamily.com/get-help/speak-with-a-counselor/", desc: "Free 1-hour consultation with a licensed Christian counselor." },
                  { name: "Open Path Collective", url: "https://openpathcollective.org/", desc: "Affordable therapy ($30-$80/session) with trained therapists." },
                ].map((r) => (
                  <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 16px", textDecoration: "none" }}>
                    <span style={{ color: TEAL, fontWeight: 700, fontSize: 14 }}>{r.name} &rarr;</span>
                    <p style={{ color: MUTED, fontSize: 13, margin: "4px 0 0", lineHeight: 1.5 }}>{r.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Tab: Church ── */}
        {tab === "Church" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CHURCH_SECTIONS.map((section, si) => (
              <div key={si} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h2 style={{ color: si === 0 ? "#EF4444" : GREEN, fontSize: 19, fontWeight: 800, marginBottom: 16, marginTop: 0 }}>{section.title}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {section.items.map((item, ii) => (
                    <div key={ii} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: si === 0 ? "#EF4444" : GREEN, flexShrink: 0, marginTop: 7 }} />
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: item }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 12, marginTop: 0 }}>Mental Health First Aid for Churches</h3>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 14px" }}>
                Mental Health First Aid (MHFA) is a free, evidence-based training program that teaches people to recognize and respond to mental health crises. It is particularly well-suited for pastors, deacons, small group leaders, and lay ministers who encounter mental health crises regularly without formal training.
              </p>
              <a href="https://www.mentalhealthfirstaid.org/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: PURPLE, color: "#fff", fontWeight: 700, fontSize: 14, padding: "10px 20px", borderRadius: 8, textDecoration: "none" }}>
                Learn About MHFA Training &rarr;
              </a>
            </div>
          </div>
        )}

        {/* ── Tab: Videos ── */}
        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 4 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Teaching videos from pastors, psychologists, and theologians on the intersection of Christian faith and mental health.
              </p>
            </div>
            {[
              {
                videoId: "ZXGp7fBnLnk",
                title: "Mental Health and the Church",
                channel: "Kay Warren",
                desc: "Kay Warren &mdash; whose son Matthew died by suicide &mdash; speaks with raw pastoral authority on the church&apos;s failure to address mental illness and what faithful care looks like.",
              },
              {
                videoId: "yGqHAhSYtlA",
                title: "When God and Depression Collide",
                channel: "Ed Welch / CCEF",
                desc: "Biblical counselor Ed Welch explores depression through the lens of Scripture, pastoral care, and the whole-person gospel &mdash; moving beyond the &ldquo;just trust God&rdquo; response.",
              },
              {
                videoId: "xBnhsyakuVE",
                title: "Elijah&apos;s Depression and God&apos;s Response",
                channel: "The Vine Teaching",
                desc: "An exposition of 1 Kings 19 &mdash; Elijah&apos;s suicidal collapse after Carmel, God&apos;s response of food and rest, and what this teaches the church about mental health care.",
              },
            ].map((v) => (
              <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "16px 18px" }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 4, marginTop: 0 }}>{v.title}</h3>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 8, margin: "0 0 8px" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.desc }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Journal (always visible below tabs) */}
        <div style={{ marginTop: 48, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
          <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 8, marginTop: 0 }}>Private Reflection Journal</h2>
          <p style={{ color: MUTED, fontSize: 13, marginBottom: 18, lineHeight: 1.6 }}>
            Stored only on this device &mdash; never shared. A space to process what you&apos;re carrying.
          </p>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="What have you been afraid to say out loud about your mental health? What would you say to God if you stopped performing?"
            style={{ width: "100%", minHeight: 120, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "12px 14px", fontSize: 15, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit", lineHeight: 1.7 }}
          />
          <button
            type="button"
            onClick={saveEntry}
            style={{ marginTop: 12, padding: "10px 24px", background: GREEN, color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 15, fontWeight: 700 }}
          >
            Save Entry
          </button>
          {entries.length > 0 && (
            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
              <h3 style={{ color: MUTED, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, margin: 0 }}>Past Entries ({entries.length})</h3>
              {entries.map((e) => (
                <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 16, position: "relative" }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{e.date}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
                  <button
                    type="button"
                    onClick={() => deleteEntry(e.id)}
                    style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 16, lineHeight: 1 }}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
