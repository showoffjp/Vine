"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#00FF88";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "lament" | "psalms" | "resources";

const theologyPoints = [
  {
    title: "Jesus Wept — and That Changes Everything",
    content: "John 11:35, the shortest verse in Scripture, is also one of the most theologically dense. Jesus weeps at Lazarus's tomb — not because he lacks knowledge or power, but because he is genuinely moved by human grief. The Son of God grieves. This legitimizes grief for every believer. Your tears are not failures of faith; they are a participation in Christ's own sorrow over a broken world."
  },
  {
    title: "Death Is an Enemy — But a Defeated One",
    content: "The Bible does not romanticize death. Paul calls it 'the last enemy' (1 Corinthians 15:26). Death is unnatural — it entered through sin and is not part of God's original design. The Christian does not grieve as one who accepts death as normal. Yet death is a defeated enemy: Christ's resurrection is the first-fruits guaranteeing ours. This creates a both/and: death is real loss AND it has been robbed of its final victory."
  },
  {
    title: "Grief Is Not Faithlessness",
    content: "A toxic form of Christian comfort insists that if you 'really believed,' you wouldn't be sad. This is theological error. Paul's instruction is 'do not grieve as those who have no hope' (1 Thessalonians 4:13) — not 'do not grieve.' The distinction is the horizon of hope, not the absence of grief. Authentic Christian grief is hope-saturated and tears-present simultaneously. Forcing premature peace dishonors both the loss and the person."
  },
  {
    title: "The Psalms of Lament Give Us Language",
    content: "Of the 150 Psalms, roughly one-third are psalms of lament — more than any other category. The early church prayed all 150, including Psalm 88 (which ends without resolution). God has embedded grief language in Scripture because grief is part of life and prayer. When we cannot pray, the Psalms pray for us. Lament is not the opposite of faith; it is the cry of faith into the darkness."
  },
  {
    title: "Eschatological Hope Is Concrete, Not Vague",
    content: "Christian hope is not 'you'll feel better eventually' or 'they're in a better place.' It is the bodily resurrection of the dead, the restoration of all creation, the end of tears and death (Revelation 21:4), and reunion with those who died in Christ. This hope is not wishful thinking but the historical and theological claim on which the entire gospel rests. The more concretely we understand resurrection hope, the more sustaining it becomes in grief."
  },
  {
    title: "Community Is the Medium of Comfort",
    content: "Paul does not say 'I will comfort you' but 'the God of all comfort comforts us in our troubles so that we can comfort those in any trouble' (2 Corinthians 1:3-4). The primary means of divine comfort in grief is the body of Christ — people who weep with those who weep (Romans 12:15), bring meals, sit in silence, remember anniversaries, and refuse to let the bereaved be alone. The church that does this is practicing the love of God."
  }
];

const lamentStages = [
  {
    stage: "Shock & Numbness",
    color: "#6B7280",
    biblical: "Lamentations 3:1-20",
    description: "The immediate aftermath of loss often produces a merciful numbness — the mind and body's way of absorbing what cannot be immediately processed. This is not denial; it is natural protective response. It may last hours, days, or weeks.",
    theological: "God does not require us to feel the full weight of grief immediately. The numbness is providential — a grace that staggers revelation so the soul can survive. Trust that understanding will come in layers.",
    pastoral: "Do not rush to fill the silence. Sit with the grieving person. Handle logistics if possible. Do not require theological articulation from someone in shock — just presence and practical help.",
    scripture: "'He has driven me away and made me walk in darkness rather than light.' — Lamentations 3:2"
  },
  {
    stage: "Anguish & Protest",
    color: "#DC2626",
    biblical: "Psalm 22:1-2, Job 3",
    description: "The raw pain surfaces: weeping, anger, Why?, protest against God. Job's friends sat silently for seven days before speaking — and the moment they opened their mouths, they said too much. This stage has a voice and should be allowed to speak.",
    theological: "The lament psalms are protest prayers — 'How long, O Lord?' (Psalm 13). God receives the cry of anguish. Job's honest protest was received by God ('you have spoken of me what is right') more favorably than his friends' theological tidiness. Protest in prayer is not apostasy; it is intimacy.",
    pastoral: "Resist the urge to give reasons, silver linings, or theological explanation. Ask 'what was she like?' Let the grief be spoken aloud. Weep with those who weep (Romans 12:15).",
    scripture: "'My God, my God, why have you forsaken me?' — Psalm 22:1 (also Matthew 27:46)"
  },
  {
    stage: "Disorientation",
    color: "#F59E0B",
    biblical: "Psalm 42, Psalm 77",
    description: "The world no longer makes sense. Identity, routine, and meaning are disrupted. 'What do I do now?' pervades everything. Sleep, appetite, concentration are impaired. The bereaved may feel they're going mad.",
    theological: "Walter Brueggemann's framework (orientation, disorientation, reorientation) names this biblically. Psalm 42 names the disoriented soul: 'My tears have been my food day and night.' The Psalmist preaches to himself ('Why, my soul, are you downcast?') but doesn't escape the darkness yet. God is present in the disorientation even when imperceptible.",
    pastoral: "Check in regularly over months, not just days. The weeks after a funeral are often harder than the days before, when support has withdrawn. Create structure: walk together, eat together. Ask specific questions.",
    scripture: "'Why, my soul, are you downcast? Why so disturbed within me?' — Psalm 42:5"
  },
  {
    stage: "Wrestling & Questions",
    color: "#8B5CF6",
    biblical: "Habakkuk 1-3, Job 38-42",
    description: "As the initial shock subsides, deeper questions emerge: Where was God? Why didn't he intervene? What does this mean for my faith? These are honest theological questions that deserve honest engagement.",
    theological: "Habakkuk is a book of faithful protest: 'How long, Lord, must I call for help?' (1:2). God does not answer every 'why' — his response to Job is not an explanation but a theophany. Yet encountering God in the storm is itself the answer. Faith that survives wrestling is stronger than faith that was never tested.",
    pastoral: "Do not give quick answers to deep questions. Say 'I don't know' when you don't know. Direct the grieving to Scripture, good books on grief, and a counselor if needed. Some questions won't resolve until the resurrection.",
    scripture: "'The Lord is in his holy temple; let all the earth be silent before him.' — Habakkuk 2:20"
  },
  {
    stage: "Thin Integration",
    color: "#10B981",
    biblical: "Lamentations 3:21-33, Romans 8:18",
    description: "Not resolution — but a beginning of carrying the loss rather than being crushed by it. The grief is integrated into a new identity. The bereaved begins to function again, though profoundly changed. Laughter begins to return, tentatively. This is not betrayal of the one lost.",
    theological: "Lamentations 3 turns on the word 'Yet': 'Yet this I call to mind and therefore I have hope: Because of the Lord's great love we are not consumed.' Not because the pain is gone, but because the Lord's faithfulness is remembered. Memory of God's past faithfulness sustains hope for the future. The wound becomes a scar — still present but no longer bleeding.",
    pastoral: "Celebrate small moments of return. Grief does not follow a timeline; anniversaries, holidays, and sensory triggers will revive acute grief for years. Normalize the long arc. Remember the deceased with the bereaved.",
    scripture: "'I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.' — Romans 8:18"
  },
  {
    stage: "Reorientation & New Life",
    color: "#3B82F6",
    biblical: "Revelation 21:1-5, 1 Corinthians 15:51-58",
    description: "Not a return to the old life — that is gone — but the emergence of a new life that carries grief as wisdom. Many who grieve well become ministers of comfort to others (2 Corinthians 1:3-4). Purpose re-emerges. The loss is not forgotten but is now held within a larger story.",
    theological: "The final word in Christian grief is not loss but resurrection. 'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain.' (Revelation 21:4). This is not metaphor but promise. The new creation will include the redemption and restoration of everything grief has taken. Grief has an eschatological horizon — not escape from it, but its ultimate transformation.",
    pastoral: "Encourage the bereaved to begin serving others again — often one of the most healing things. Be aware that grief may resurface at major life events (weddings, graduations) when the loss is felt freshly. Spiritual direction or counseling can accompany the long journey home.",
    scripture: "'Death has been swallowed up in victory. Where, O death, is your victory? Where, O death, is your sting?' — 1 Corinthians 15:54-55"
  }
];

const lamentPsalms = [
  {
    ref: "Psalm 22",
    opening: "My God, my God, why have you forsaken me?",
    theme: "Abandonment & Vindication",
    color: "#DC2626",
    summary: "Jesus quotes this Psalm from the cross (Matthew 27:46), making it the primary text of Christological suffering. The Psalmist moves from utter desolation to confident praise — yet the resolution is not automatic. The cry of abandonment is fully voiced before the turn comes.",
    key: "v. 1-2, 22-24",
    use: "Pray this psalm when you feel utterly alone in grief, when God seems silent, when you cannot manufacture hope. The very act of crying to God is itself faith.",
    prayerPrompt: "Tell God exactly what you feel, using the Psalmist's words. Don't rush to verse 22. Sit in the darkness until the light comes on its own terms."
  },
  {
    ref: "Psalm 13",
    opening: "How long, O Lord? Will you forget me forever?",
    theme: "Impatience & Trust",
    color: "#F59E0B",
    summary: "The shortest full lament psalm. Four times the Psalmist asks 'How long?' — a perfectly legitimate question. Yet the psalm ends with trust: 'I trust in your unfailing love; my heart rejoices in your salvation.' Not because the circumstances change, but because the Psalmist chooses to remember God's character.",
    key: "v. 1, 5-6",
    use: "Pray this when grief is compounded by the length of suffering — when it seems endless. The psalm gives language to the exhaustion of waiting.",
    prayerPrompt: "Write your own 'How long?' questions. Then speak aloud: 'But I trust in your unfailing love.' Notice what it costs you to say that — and say it anyway."
  },
  {
    ref: "Psalm 42-43",
    opening: "Why, my soul, are you downcast?",
    theme: "Depression & Hope",
    color: "#8B5CF6",
    summary: "These two psalms form a single poem — the bereft Psalmist in exile, longing for God like a deer for water. He is mocked ('Where is your God?'), remembers better days, and preaches hope to himself — three times repeating the refrain — while the darkness does not lift. A psalm for those who must argue with their own despair.",
    key: "42:1-2, 42:5, 43:5",
    use: "Pray this in seasons of depression mingled with spiritual longing. The Psalmist does not resolve the tension; he holds it with hope.",
    prayerPrompt: "Ask yourself: 'Why am I downcast?' Write the honest answer. Then ask: 'Where have I seen God's faithfulness before?' Preach those memories back to yourself."
  },
  {
    ref: "Psalm 88",
    opening: "Lord, you are the God who saves me; day and night I cry out to you.",
    theme: "Unresolved Darkness",
    color: "#6B7280",
    summary: "The darkest Psalm in the Psalter — and the only lament with no resolution. It ends: 'darkness is my closest friend.' God has not come. The situation has not changed. The Psalmist still cries but ends in night. This psalm exists to tell those in intractable grief that their experience is in Scripture and their prayer is heard.",
    key: "v. 1, 18",
    use: "Pray this psalm for those in chronic suffering, depression without relief, or when theodicy has no answers. The church's Psalter includes this darkness on purpose.",
    prayerPrompt: "Read it aloud slowly. Notice that the Psalmist still speaks to God even when God seems absent. What does that tell you about the nature of faith?"
  },
  {
    ref: "Psalm 77",
    opening: "I cried out to God for help; I cried out to God to hear me.",
    theme: "Memory as Medicine",
    color: "#10B981",
    summary: "The Psalmist cannot pray, cannot sleep, cannot find consolation — until he turns to memory: 'I will remember the deeds of the Lord.' The poem pivots on deliberate recollection of God's faithfulness at the Red Sea. Memory of past redemption becomes the ground of present hope.",
    key: "v. 1-4, 11-12",
    use: "Pray this when you have lost all sense of God's presence and are tempted to conclude he is absent. Ask: 'When have I seen God act?'",
    prayerPrompt: "Write down five times God came through for you — large or small. Read them aloud as a prayer. Let past faithfulness speak to present darkness."
  },
  {
    ref: "Psalm 90",
    opening: "Lord, you have been our dwelling place throughout all generations.",
    theme: "Mortality & Eternity",
    color: "#3B82F6",
    summary: "The only Psalm attributed to Moses. It meditates on the brevity of human life against the eternal backdrop of God's being. 'Our years come to an end like a sigh.' Not pessimistic — grounded. The appropriate response is wisdom: 'Teach us to number our days.' And the plea: 'satisfy us in the morning with your unfailing love.'",
    key: "v. 1-2, 10, 12, 14",
    use: "Pray this in grief over death and aging, in facing your own mortality, or when a loss makes the shortness of life vivid.",
    prayerPrompt: "Sit with v. 10 ('Our days may come to seventy years'). Is this sobering or liberating? Ask God to teach you to number your days — to live with the weight of their value."
  }
];

const resources = [
  {
    title: "A Grief Observed",
    author: "C.S. Lewis",
    type: "Memoir / Theology",
    color: "#6B7280",
    desc: "Lewis's raw journal after the death of his wife Joy Davidman — written in real time, unedited, with doubts, anger at God, and slow return to faith. The most honest book on grief written by a Christian. Its genius is that it does not pretend to resolve grief but walks through it.",
    note: "Read during the early weeks of acute grief. It tells you you're not alone and you're not losing your faith."
  },
  {
    title: "Lament for a Son",
    author: "Nicholas Wolterstorff",
    type: "Memoir / Theology",
    color: "#DC2626",
    desc: "The philosopher-theologian's response to his 25-year-old son's death in a climbing accident. Short, lyrical, and devastating. Wolterstorff wrestles with theodicy, meaning, and what the resurrection actually promises — with intellectual rigor and raw emotion simultaneously.",
    note: "Especially helpful for those who want grief to engage their minds as well as their hearts."
  },
  {
    title: "Streams in the Desert",
    author: "L.B. Cowman",
    type: "Devotional",
    color: "#F59E0B",
    desc: "A classic daily devotional written by a woman who nursed her husband through years of debilitating illness. Every entry was forged in suffering. First published in 1925, it has sustained millions through loss and sorrow. The theology of the desert and the spring is its central image.",
    note: "Best read daily over months, not in one sitting — it is made for the long journey."
  },
  {
    title: "GriefShare",
    author: "Church Grief Support Program",
    type: "Community Program",
    color: "#10B981",
    desc: "A Christ-centered support group program run in thousands of churches across North America and internationally. 13-week video series with workbook and group discussion. The most widely available structured Christian grief support available.",
    note: "Find a group at griefshare.org. Strongly recommended for those who need structured community.",
    url: "https://www.griefshare.org"
  },
  {
    title: "The Problem of Pain",
    author: "C.S. Lewis",
    type: "Apologetics / Theology",
    color: "#8B5CF6",
    desc: "Lewis's intellectual treatment of suffering — written before his own deepest losses, which is what makes it both helpful and limited. Best read alongside A Grief Observed to see the difference between theodicy as theory and theodicy as lived. Together they form a whole.",
    note: "Read this for the theological framework, then Grief Observed for the human reality."
  },
  {
    title: "Dark Clouds, Deep Mercy",
    author: "Mark Vroegop",
    type: "Teaching / Pastoral",
    color: "#3B82F6",
    desc: "The most practical book on lament prayer available — written by a pastor who experienced infant loss. Vroegop walks through the structure of biblical lament, why the church has lost this language, and how to recover it both personally and congregationally.",
    note: "Particularly valuable for pastors and church leaders wanting to teach their congregations to grieve well.",
    url: "https://www.crossway.org/books/dark-clouds-deep-mercy-tpb/"
  }
];

export default function ChristianGriefGuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedPsalm, setSelectedPsalm] = useState(lamentPsalms[0]);

  const toggle = (k: string) => setExpanded(p => ({ ...p, [k]: !p[k] }));

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Grief" },
    { id: "lament", label: "Stages of Lament" },
    { id: "psalms", label: "Lament Psalms" },
    { id: "resources", label: "Resources" }
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: 40, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: "#6B7280", color: "#fff", padding: "4px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            WALKING THROUGH GRIEF
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, margin: "0 0 12px" }}>
            Christian Grief Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Grief is not the opposite of faith. Jesus wept. The Psalter is full of lament. The cross itself is God's entry into human suffering. The church that knows how to grieve has something the world desperately needs.
          </p>
        </div>

        {/* Banner */}
        <div style={{ background: "#1E293B", border: `1px solid ${BORDER}`, borderRadius: 12, padding: "14px 24px", marginBottom: 32, textAlign: "center" }}>
          <p style={{ margin: 0, fontStyle: "italic", color: MUTED }}>
            "Blessed are those who mourn, for they will be comforted." — Matthew 5:4 &nbsp;|&nbsp; "Weep with those who weep." — Romans 12:15
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#000" : TEXT,
                border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`,
                borderRadius: 8, padding: "8px 18px", cursor: "pointer", fontWeight: 600, fontSize: 14
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Theology Tab */}
        {activeTab === "theology" && (
          <div style={{ maxWidth: 720 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28 }}>
              Christianity does not offer an escape from grief — it offers a transformed grief. The gospel enters into suffering rather than explaining it away. These six theological convictions form a foundation for Christian lament.
            </p>
            {theologyPoints.map((pt, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: 12 }}>
                <button
                  onClick={() => toggle(`theo-${i}`)}
                  style={{
                    width: "100%", background: "none", border: "none", color: TEXT,
                    padding: "16px 20px", textAlign: "left", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontWeight: 700, fontSize: 15
                  }}
                >
                  {pt.title}
                  <span style={{ color: MUTED }}>{expanded[`theo-${i}`] ? "−" : "+"}</span>
                </button>
                {expanded[`theo-${i}`] && (
                  <div style={{ padding: "0 20px 16px", color: MUTED, lineHeight: 1.7, fontSize: 14 }}>
                    {pt.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Lament Stages */}
        {activeTab === "lament" && (
          <div>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28, maxWidth: 720 }}>
              Grief does not move in a straight line. These stages are not sequential steps but common territories that the bereaved visit — sometimes repeatedly, sometimes out of order. Each has biblical resonance and pastoral wisdom.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {lamentStages.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ borderLeft: `4px solid ${s.color}`, padding: "20px 24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                      <div>
                        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>{s.stage}</h3>
                        <div style={{ fontSize: 12, color: MUTED, marginTop: 2 }}>Key Text: {s.biblical}</div>
                      </div>
                      <button
                        onClick={() => toggle(`stage-${i}`)}
                        style={{ background: BG, border: `1px solid ${BORDER}`, color: TEXT, padding: "4px 12px", borderRadius: 6, cursor: "pointer", fontSize: 13 }}
                      >
                        {expanded[`stage-${i}`] ? "Hide" : "Expand"}
                      </button>
                    </div>
                    <p style={{ margin: 0, color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{s.description}</p>
                    {expanded[`stage-${i}`] && (
                      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                        <div style={{ background: BG, borderRadius: 8, padding: 14 }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: GREEN, marginBottom: 6 }}>THEOLOGICAL REFLECTION</div>
                          <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.6 }}>{s.theological}</p>
                        </div>
                        <div style={{ background: BG, borderRadius: 8, padding: 14 }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, marginBottom: 6 }}>PASTORAL GUIDANCE</div>
                          <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.6 }}>{s.pastoral}</p>
                        </div>
                        <div style={{ gridColumn: "span 2", background: s.color + "11", border: `1px solid ${s.color}33`, borderRadius: 8, padding: 12 }}>
                          <p style={{ fontSize: 13, fontStyle: "italic", color: TEXT, margin: 0 }}>{s.scripture}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Psalms Tab */}
        {activeTab === "psalms" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.7 }}>
                One-third of the Psalms are laments. God has given us a grief vocabulary in Scripture. These six psalms are the core of the Christian lament tradition.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 14 }}>
                {lamentPsalms.map(p => (
                  <div
                    key={p.ref}
                    onClick={() => setSelectedPsalm(p)}
                    style={{
                      background: selectedPsalm.ref === p.ref ? p.color + "22" : CARD,
                      border: `2px solid ${selectedPsalm.ref === p.ref ? p.color : BORDER}`,
                      borderRadius: 10, padding: 16, cursor: "pointer"
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6, color: p.color }}>{p.ref}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{p.theme}</div>
                    <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic" }}>"{p.opening.substring(0, 40)}…"</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              width: 340, flexShrink: 0, background: CARD, border: `1px solid ${BORDER}`,
              borderRadius: 12, padding: 24, position: "sticky", top: 20
            }}>
              <div style={{ color: selectedPsalm.color, fontSize: 22, fontWeight: 900, marginBottom: 4 }}>{selectedPsalm.ref}</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{selectedPsalm.theme}</div>
              <div style={{ background: selectedPsalm.color + "22", border: `1px solid ${selectedPsalm.color}44`, borderRadius: 8, padding: 10, marginBottom: 14 }}>
                <p style={{ fontSize: 13, fontStyle: "italic", margin: 0, color: TEXT }}>&ldquo;{selectedPsalm.opening}&rdquo;</p>
              </div>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, marginBottom: 12 }}>{selectedPsalm.summary}</p>
              <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 12, marginBottom: 12 }}>
                <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 6 }}>KEY VERSES</div>
                <div style={{ fontSize: 12, color: MUTED }}>{selectedPsalm.key}</div>
              </div>
              <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 12, marginBottom: 12 }}>
                <div style={{ fontSize: 11, color: PURPLE, fontWeight: 700, marginBottom: 6 }}>WHEN TO USE</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{selectedPsalm.use}</p>
              </div>
              <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 12 }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, marginBottom: 6 }}>PRAYER PROMPT</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{selectedPsalm.prayerPrompt}</p>
              </div>
            </div>
          </div>
        )}

        {/* Resources */}
        {activeTab === "resources" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {resources.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, borderTop: `3px solid ${r.color}` }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, marginBottom: 6 }}>{r.type.toUpperCase()}</div>
                <h3 style={{ margin: "0 0 4px", fontSize: 17 }}>{r.title}</h3>
                <div style={{ fontSize: 13, color: r.color, marginBottom: 10 }}>{r.author}</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{r.desc}</p>
                <div style={{ background: BG, borderRadius: 8, padding: 10, marginBottom: r.url ? 12 : 0 }}>
                  <p style={{ fontSize: 12, fontStyle: "italic", color: MUTED, margin: 0 }}>{r.note}</p>
                </div>
                {r.url && (
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 12, color: GREEN, textDecoration: "none", fontWeight: 700 }}
                  >
                    Visit Resource →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
