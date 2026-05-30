"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const FRAMEWORK_TABS = [
  { id: "biblical" as const, label: "Biblical Stages", icon: "📖" },
  { id: "classic" as const, label: "Classic Frameworks", icon: "📜" },
  { id: "obstacles" as const, label: "Growth Obstacles", icon: "⚠️" },
];

const BIBLICAL_STAGES = [
  {
    stage: "Child",
    greek: "Teknia / Paidia",
    verse: "1 John 2:12-13",
    color: "#3B82F6",
    description: "John's first stage in 1 John 2: 'I write to you, dear children, because your sins have been forgiven on account of his name.' The child's defining characteristic is the experience of forgiveness and the joy of being found. This is the stage of new birth — everything is new, the relief of grace is fresh, and the faith is real but not yet tested.",
    characteristics: [
      "Primarily characterized by gratitude for forgiveness",
      "Faith is sincere but dependent on emotional experience",
      "Scripture is new and exciting; prayer is spontaneous",
      "Strong relationship with spiritual parent/mentor is essential",
      "Vulnerable to false teaching without discernment",
    ],
    needs: "Milk, not solid food (Hebrews 5:12). Basic doctrines, community, mentoring, simple spiritual disciplines.",
    danger: "Spiritual infancy mistaken for spiritual maturity. Some Christians remain children indefinitely — perpetually needing emotional experience to confirm faith.",
    key_practice: "Basic discipleship: Scripture reading, prayer, church involvement, finding a spiritual mentor.",
  },
  {
    stage: "Young Man / Young Woman",
    greek: "Neaniskoi",
    verse: "1 John 2:13-14",
    color: "#F59E0B",
    description: "John writes: 'I write to you, young men, because you have overcome the evil one... you are strong, and the word of God lives in you, and you have overcome the evil one.' The young man/woman stage is characterized by strength, spiritual combat, and Scripture dwelling richly in the person. This is the stage of active engagement — fighting spiritual battles, engaging the culture, growing in doctrinal understanding.",
    characteristics: [
      "Scripture has moved from novelty to formation",
      "Spiritual disciplines are more consistent",
      "Begins to see and resist temptation patterns",
      "Active in service and ministry",
      "Still prone to performance-based Christianity and burnout",
    ],
    needs: "Solid food (Hebrews 5:14). Theological depth, mentored ministry experience, accountability for character growth.",
    danger: "Activism without contemplation. Doing becomes more important than being. Burn-out, spiritual pride, and a Pharisaical relationship with the law.",
    key_practice: "Deepening disciplines: Bible study methods, accountability, serving in meaningful ministry, reading serious theology.",
  },
  {
    stage: "Father / Mother",
    greek: "Pateres",
    verse: "1 John 2:13-14",
    color: GREEN,
    description: "John writes twice: 'I write to you, fathers, because you have known him who is from the beginning.' The repetition is notable — the father's defining characteristic is simply knowing God. Not knowing about God, not doing great things for God, but knowing God. The father stage is about depth, not activity. It is characterized by unhurried intimacy with God and the fruit of long faithfulness.",
    characteristics: [
      "Identity is firmly rooted in who God is, not what they do",
      "Spiritual disciplines are natural, not effortful",
      "Deep discernment in Scripture and in relationships",
      "Others naturally come to them for counsel and mentoring",
      "Marked by humility, patience, and genuine love",
    ],
    needs: "Ongoing deepening. The greatest danger is complacency — assuming arrival. Thomas à Kempis: 'What does it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility?'",
    danger: "Disengagement. Sometimes at this stage, people retire from community. But the father's purpose is to reproduce — to pour out for the next generation.",
    key_practice: "Mentoring others, intercession for the church, contemplative prayer, theological reflection on a lifetime of experience.",
  },
];

const CLASSIC_FRAMEWORKS = [
  {
    name: "The Three Ways (Purgative, Illuminative, Unitive)",
    tradition: "Catholic Mystical Tradition",
    origin: "Pseudo-Dionysius (5th c.), developed by Thomas Aquinas",
    color: PURPLE,
    summary: "The classic Catholic framework for spiritual progress, influential across traditions. The Purgative Way is about removing sin — mortification, confession, detachment from disordered desires. The Illuminative Way is about growth in virtue and knowledge of God — deepening prayer, Scripture, service. The Unitive Way is the goal: union with God in love — the mystics' experience of resting in God, beyond techniques and effort.",
    stages: [
      { name: "Purgative Way", desc: "Removing sin and disordered attachments. Characterized by struggle, confession, and mortification. Primary virtues: humility and obedience." },
      { name: "Illuminative Way", desc: "Growing in knowledge and love of God. Deepening prayer, Scripture, contemplation. Virtues and charity increasing. Life begins to conform to Christ." },
      { name: "Unitive Way", desc: "Union with God in love. The goal of the Christian life — not a feeling but a settled orientation of the whole self toward God. Associated with mystical contemplation." },
    ],
    evangelical_equivalent: "Dallas Willard's formation stages roughly parallel: VIM (Vision, Intention, Means) → spiritual disciplines → transformation of character → Christlikeness.",
  },
  {
    name: "Dallas Willard — Renovation of the Heart",
    tradition: "Evangelical / Spiritual Formation",
    origin: "Dallas Willard, The Divine Conspiracy (1998), Renovation of the Heart (2002)",
    color: GREEN,
    summary: "Willard argued that Christian growth is not primarily about behavior modification but the transformation of the whole person — spirit, mind, will, body, social self, and soul. He used the metaphor of spiritual disciplines as training (not trying) — we train the whole person to respond rightly in the moment of decision. The spiritual life is not about willpower but about transformation through practiced disciplines.",
    stages: [
      { name: "Vision", desc: "A clear vision of what you want to become — not just behaviors, but the kind of person who naturally lives rightly. 'What kind of person do I want to be?'" },
      { name: "Intention", desc: "Deciding to pursue the vision with your will. Willard: 'People do not drift into Christlikeness.' The decision to actually become like Christ." },
      { name: "Means", desc: "The spiritual disciplines as the means of training: solitude, silence, fasting, study, service, prayer. Not legalism but training the whole self toward Christlikeness." },
    ],
    evangelical_equivalent: "Parallels Paul's language in 1 Timothy 4:7 — 'train yourself in godliness' (gymnaze). Physical training is the analogy.",
  },
  {
    name: "James Loder — The Convictional Experience",
    tradition: "Reformed Theological Education",
    origin: "James Loder, The Transforming Moment (1981)",
    color: "#F59E0B",
    summary: "Loder identified a five-step pattern in how God transforms people: (1) Conflict — a situation that disrupts ordinary life and forces a crisis. (2) Interlude for Scanning — the person struggles with the conflict, unable to resolve it through ordinary means. (3) Insight — an intuition or revelation that resolves the conflict in an unexpected way. (4) Release — the energy released when the conflict resolves. (5) Interpretation — making sense of the transformation and integrating it.",
    stages: [
      { name: "Conflict / Crisis", desc: "The disruption that creates openness to transformation. God often uses suffering, failure, or crisis to initiate growth." },
      { name: "Interlude / Wrestling", desc: "The period of struggling with the crisis without resolution. Jacob wrestling the angel. This is the most formative stage." },
      { name: "Insight / Transformation", desc: "The unexpected resolution — often a gift of grace rather than a result of effort. A new perception of God, self, or reality." },
    ],
    evangelical_equivalent: "Romans 5:3-5: Suffering → perseverance → character → hope. Growth comes through trial, not around it.",
  },
  {
    name: "Eugene Peterson — Long Obedience in the Same Direction",
    tradition: "Evangelical Pastoral",
    origin: "Eugene Peterson, A Long Obedience in the Same Direction (1980)",
    color: "#EC4899",
    summary: "Peterson took his title from Nietzsche (who used it negatively) and made it a positive description of Christian growth. Against the consumer culture that demands instant spiritual experiences, Peterson argued that spiritual maturity comes only through sustained, unglamorous, daily faithfulness over years and decades. The Psalms of Ascent (120-134) are the pilgrim's hymnal — songs for a journey.",
    stages: [
      { name: "Starting Out (Ps 120)", desc: "Leaving the false securities of the world. Recognizing the shalom is not in the places we've been living." },
      { name: "The Middle Journey (Ps 121-133)", desc: "The long, sustained faithfulness — worship, community, work, prayer, pilgrimage — over years and decades." },
      { name: "Arriving Home (Ps 134)", desc: "The final goal: dwelling in the presence of God in the community of God's people. Not escape from the world but full participation in God's life." },
    ],
    evangelical_equivalent: "Hebrews 12:1-2: Run the race with endurance, eyes on Jesus. Not sprinting but distance running.",
  },
];

const GROWTH_OBSTACLES = [
  {
    obstacle: "Mistaking Activity for Growth",
    color: "#EF4444",
    description: "The most common obstacle in evangelical Christianity: busyness in ministry, church programs, and religious activity that substitutes for actual formation. A person can teach Sunday school, lead a small group, serve on committees, and attend every church event — while remaining essentially unchanged in character. Activity is not formation. Transformation requires the inner work of disciplines that address the will, not just the schedule.",
    solution: "Dallas Willard's question: 'What are you currently doing to train yourself to be like Christ?' Not 'What are you doing for Christ?' but what is happening in your inner life.",
  },
  {
    obstacle: "Avoiding Darkness and Suffering",
    color: PURPLE,
    description: "Most spiritual growth programs emphasize positive experiences. But the Christian tradition consistently teaches that the dark night of the soul — periods of spiritual dryness, absence, and suffering — are often the most formative seasons. John of the Cross wrote about the purifying darkness that strips away false conceptions of God and false sources of security. Trying to avoid spiritual darkness or explain it away is resisting the process.",
    solution: "Learning to pray in darkness without manufacturing light. The Psalms of Lament (13, 22, 88) are the biblical model. Bring the darkness honestly to God rather than pretending it isn't there.",
  },
  {
    obstacle: "Consumerist Spirituality",
    color: "#F59E0B",
    description: "The consumer culture has infiltrated the church: we shop for churches that meet our needs, consume spiritual content without transformation, and move on when growth becomes uncomfortable. Consumerist spirituality treats God as a vendor of experiences and the church as a service provider. Formation, by contrast, requires commitment, friction, and sustained engagement with people who are not like us.",
    solution: "Joining a local church with covenant commitment rather than church-shopping. Submitting to accountability. Staying when it gets hard.",
  },
  {
    obstacle: "Intellectualism without Transformation",
    color: "#3B82F6",
    description: "Among educated evangelicals: accumulating more theology and doctrine without that knowledge transforming character. The Pharisees knew their Bible better than most people today and remained spiritually stagnant. Knowledge can actually harden rather than soften when it becomes a substitute for encounter. Thomas à Kempis: 'What does it profit you to enter into deep discussion concerning the Holy Trinity, if you lack humility?'",
    solution: "Regular practices that engage not just the mind but the will and body: fasting, service, solitude, confession. Theology that descends from the head to the hands.",
  },
  {
    obstacle: "Absence of Spiritual Direction / Mentoring",
    color: GREEN,
    description: "The Christian tradition almost universally assumed a spiritual director or mentor — someone further along who could observe, challenge, and guide. The modern evangelical church has largely abandoned this practice in favor of programs and books. Books are excellent; they cannot notice when you are avoiding something, and they cannot ask the question that cuts to your specific heart condition.",
    solution: "Actively seeking a spiritual director, mentor, or discipleship partner who has earned the right to ask hard questions and who has walked further than you.",
  },
  {
    obstacle: "Premature Closure",
    color: "#EC4899",
    description: "The assumption that because you have been a Christian for 20 years, you have arrived — that spiritual growth is primarily for new believers. The New Testament consistently warns mature believers against complacency. The desert fathers taught that the greatest spiritual danger for experienced Christians is acedia — the deadly sin of spiritual boredom and sloth that masquerades as maturity.",
    solution: "Cultivating 'beginners' mind' — approaching Scripture, prayer, and community as if always beginning again. Thomas Merton: 'The spiritual life is not a career or a success story. It is a series of humiliations of the false self.'",
  },
];

export default function SpiritualGrowthStagesPage() {
  const [activeTab, setActiveTab] = useState<"biblical" | "classic" | "obstacles">("biblical");
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📈</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Stages of Spiritual Growth</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto" }}>
            Spiritual growth is not accidental — it follows recognizable patterns. Understanding where you are and where you're going is essential for intentional formation. These are the maps the tradition has given us.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {FRAMEWORK_TABS.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "biblical" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                In 1 John 2:12-14, the apostle John writes to three groups: children (teknia/paidia), young men (neaniskoi), and fathers (pateres). These are not age categories but spiritual maturity stages — each defined by a characteristic relationship with God and the defining work of that stage.
              </p>
            </div>

            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {BIBLICAL_STAGES.map(s => (
                <button key={s.stage} onClick={() => setSelectedStage(selectedStage === s.stage ? null : s.stage)}
                  style={{ flex: "1 1 200px", background: selectedStage === s.stage ? `${s.color}20` : CARD, border: `1px solid ${selectedStage === s.stage ? s.color : BORDER}`, borderRadius: 12, padding: "18px 16px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: s.color, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{s.stage}</div>
                  <div style={{ color: MUTED, fontSize: 12, fontStyle: "italic" }}>{s.greek}</div>
                  <div style={{ color: s.color, fontSize: 11, marginTop: 6, fontWeight: 700 }}>{s.verse}</div>
                </button>
              ))}
            </div>

            {selectedStage && (() => {
              const s = BIBLICAL_STAGES.find(b => b.stage === selectedStage)!;
              return (
                <div style={{ background: CARD, border: `1px solid ${s.color}30`, borderRadius: 14, padding: 28 }}>
                  <div style={{ marginBottom: 16 }}>
                    <h2 style={{ color: s.color, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{s.stage}</h2>
                    <div style={{ color: MUTED, fontSize: 13, fontStyle: "italic" }}>{s.greek} — {s.verse}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{s.description}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
                    <div style={{ background: `${s.color}08`, border: `1px solid ${s.color}15`, borderRadius: 8, padding: 12 }}>
                      <div style={{ color: s.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>CHARACTERISTICS</div>
                      <ul style={{ margin: 0, padding: "0 0 0 16px" }}>
                        {s.characteristics.map((c, i) => (
                          <li key={i} style={{ color: TEXT, fontSize: 12, lineHeight: 1.6, marginBottom: 3 }}>{c}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 8 }}>
                        <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>NEEDS AT THIS STAGE</div>
                        <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{s.needs}</p>
                      </div>
                      <div style={{ background: "#EF444408", border: "1px solid #EF444415", borderRadius: 8, padding: 12 }}>
                        <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>MAIN DANGER</div>
                        <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{s.danger}</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>KEY PRACTICE FOR THIS STAGE</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{s.key_practice}</p>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {activeTab === "classic" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Christians across centuries and traditions have articulated frameworks for spiritual growth. These frameworks differ in emphasis and language, but converge on several key insights: growth is not linear, it requires intentional practice, and the goal is Christlikeness.
              </p>
            </div>
            {CLASSIC_FRAMEWORKS.map((f, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <button onClick={() => setSelectedFramework(selectedFramework === f.name ? null : f.name)}
                  style={{ width: "100%", background: selectedFramework === f.name ? `${f.color}10` : CARD, border: `1px solid ${selectedFramework === f.name ? f.color + "40" : BORDER}`, borderRadius: selectedFramework === f.name ? "12px 12px 0 0" : 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{f.name}</div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{f.tradition} · {f.origin.split(",")[0]}</div>
                  </div>
                  <span style={{ color: f.color, flexShrink: 0 }}>{selectedFramework === f.name ? "−" : "+"}</span>
                </button>
                {selectedFramework === f.name && (
                  <div style={{ background: BG, border: `1px solid ${f.color}20`, borderTop: "none", borderRadius: "0 0 12px 12px", padding: 22 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{f.summary}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
                      {f.stages.map((s, j) => (
                        <div key={j} style={{ background: `${f.color}08`, border: `1px solid ${f.color}15`, borderRadius: 8, padding: 12 }}>
                          <div style={{ color: f.color, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>{s.name}</div>
                          <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>EVANGELICAL PARALLEL</div>
                      <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{f.evangelical_equivalent}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "obstacles" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Knowing what hinders growth is as important as knowing what promotes it. These are the most common obstacles to spiritual formation — they are structural, not occasional. Most Christians will recognize at least one pattern from their own experience.
              </p>
            </div>
            {GROWTH_OBSTACLES.map((o, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === o.obstacle ? null : o.obstacle)}
                  style={{ width: "100%", background: expanded === o.obstacle ? `${o.color}10` : CARD, border: `1px solid ${expanded === o.obstacle ? o.color + "40" : BORDER}`, borderRadius: expanded === o.obstacle ? "12px 12px 0 0" : 12, padding: "14px 18px", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{o.obstacle}</div>
                  <span style={{ color: o.color, flexShrink: 0 }}>{expanded === o.obstacle ? "−" : "+"}</span>
                </button>
                {expanded === o.obstacle && (
                  <div style={{ background: BG, border: `1px solid ${o.color}20`, borderTop: "none", borderRadius: "0 0 12px 12px", padding: 20 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>{o.description}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>SOLUTION</div>
                      <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{o.solution}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
