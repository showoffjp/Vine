"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const VOICES_GROWTH = [
  { id: "teresa", name: "Teresa of Avila", era: "1515-1582", context: "The Interior Castle (1577); Doctor of the Church; Carmelite reformer", bio: "Teresa of Avila's Interior Castle is the most systematic and experiential account of the stages of contemplative prayer in Christian history. She describes the soul as a castle with seven mansions — seven stages of increasing union with God. The outer mansions are marked by struggle, distraction, and self-preoccupation; the inner mansions by increasing surrender, peace, and union. Teresa writes from personal experience — not abstract theory — having traversed these stages over decades. Her practicality is remarkable: she addresses temptation, dryness, and self-deception with the precision of someone who has encountered them.", quote: "Let nothing disturb you, let nothing frighten you; all things are passing away. God never changes. Patience obtains all things. Whoever has God lacks nothing; God alone suffices.", contribution: "Provided the most detailed map of the interior journey in the history of Christian spirituality. Her work made the contemplative tradition accessible to women and laypeople who had been excluded from formal theological education." },
  { id: "john-cross", name: "John of the Cross", era: "1542-1591", context: "Dark Night of the Soul; The Ascent of Mount Carmel; Carmelite mystic", bio: "John's Dark Night of the Soul describes the spiritual experience that Teresa alluded to in passing: the period in which God seems absent, prayer feels dead, and all spiritual consolation disappears. Far from being a sign of failure, John argues, the dark night is a purification — God stripping away the soul's attachment to spiritual experiences in order to produce a purer love. His account of active and passive purification — of the senses and then of the spirit — is the most precise theological analysis of this phenomenon in Christian history.", quote: "In the evening of life, we will be judged on love alone.", contribution: "Named and described the experience of spiritual desolation that every serious Christian encounters but most spiritual guides fail to prepare them for. The Dark Night is now the standard reference for anyone pastoring people through spiritual crisis." },
  { id: "willard-g", name: "Dallas Willard", era: "1935-2013", context: "Renovation of the Heart (2002); The Spirit of the Disciplines (1988); USC philosophy professor", bio: "Willard's contribution to spiritual growth theory is his insistence that formation must involve the whole person: mind, will, body, soul, and social relationships. He identified what he called the 'VIM pattern' — Vision (of who we can be and what life in the kingdom is like), Intention (the decisive choice to actually become that person), and Means (the specific disciplines and practices). Growth does not happen accidentally — it requires intelligent, sustained engagement with the same means Jesus used to train himself and his disciples.", quote: "A person is a spiritual being living in a spiritual world, and that world is as real as the physical world.", contribution: "Recovered the connection between spiritual formation and specific bodily and social practices. His insistence that grace enables effort rather than replacing it gave evangelical Christians permission to practice the disciplines without feeling they were earning their standing with God." },
  { id: "louf", name: "Andre Louf OCSO", era: "1929-2010", context: "Tuning in to Grace (1992); Abbot of Mount des Cats; Cistercian theologian", bio: "Louf's Tuning in to Grace is one of the most underread accounts of how the Holy Spirit shapes Christian growth — not through a staged program but through a life of receptivity to grace at every moment. Louf draws on the Desert Fathers, Ignatius, and the Cistercian tradition to describe growth as fundamentally about learning to receive rather than achieve: 'Grace is always older than our desire for it.' His account of spiritual growth as the gradual discovery of what was always already present — God's prior love — is one of the most practically liberating frameworks available.", quote: "Grace is always older than our desire for it. We do not find God; we discover that we were found.", contribution: "Brought the Cistercian contemplative tradition's account of growth to a broader Protestant audience. His insistence that all spiritual growth is fundamentally passive — receptive to grace — provides a necessary corrective to activity-focused discipleship programs." },
  { id: "foster-g", name: "Richard Foster", era: "b. 1942", context: "Celebration of Discipline (1978); Streams of Living Water (1998); Renovare", bio: "Foster's Streams of Living Water identifies six traditions within the church — the contemplative, holiness, charismatic, social justice, evangelical, and incarnational streams — each representing a different emphasis in spiritual growth. His thesis is that a complete Christian is formed by all six streams, not just one. Celebration of Discipline catalogues twelve spiritual disciplines and argues that they are 'the means of grace' by which the Christian is intentionally trained for growth. Foster's vision of spiritual growth is both comprehensive (the whole person) and integrated (all of Christian history).", quote: "Superficiality is the curse of our age. The desperate need today is not for a greater number of intelligent people, or gifted people, but for deep people.", contribution: "Created a comprehensive map of the Christian spiritual tradition that allowed ordinary evangelicals to access centuries of formation wisdom they had largely forgotten. Celebration of Discipline is the most influential single Protestant book on spiritual growth of the past 50 years." },
];

const SGS_VIDEOS = [
  { videoId: "KbFKcFxqVlo", title: "Stages of Spiritual Growth — Tim Keller", channel: "Gospel in Life", description: "Keller maps the journey from spiritual infancy through maturity, drawing on classic and Reformed frameworks." },
  { videoId: "ACZbpLkY8To", title: "The Dark Night of the Soul — What It Is and How to Navigate It", channel: "Ligonier Ministries", description: "An introduction to the contemplative tradition of spiritual dryness and what it means for ordinary Christians." },
  { videoId: "fJnGJN6laqE", title: "Spiritual Formation — What It Is and Why It Matters", channel: "Desiring God", description: "Piper on the difference between behavior modification and genuine transformation by the Spirit." },
  { videoId: "Z8lkuuhVkOI", title: "Growing in Christlikeness — Dallas Willard's Vision", channel: "The Gospel Coalition", description: "An overview of Willard's model of spiritual formation — how we arrange our life to be shaped by God." },
];

const FRAMEWORK_TABS = [
  { id: "biblical" as const, label: "Biblical Stages", icon: "📖" },
  { id: "classic" as const, label: "Classic Frameworks", icon: "📜" },
  { id: "voices" as const, label: "Voices", icon: "💬" },
  { id: "obstacles" as const, label: "Growth Obstacles", icon: "⚠️" },
  { id: "videos" as const, label: "Videos", icon: "▶️" },
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
  const [activeTab, setActiveTab] = useState<"biblical" | "classic" | "voices" | "obstacles" | "videos">("biblical");
  const [selectedVoice, setSelectedVoice] = useState("teresa");
  const voiceItem = VOICES_GROWTH.find(v => v.id === selectedVoice)!;
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
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
                  <div style={{ color: s.color, fontSize: 11, marginTop: 6, fontWeight: 700 }}><VerseRef reference={s.verse} /></div>
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

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_GROWTH.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? PURPLE : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${PURPLE}15`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Contribution to Spiritual Growth Theology</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
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

        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {SGS_VIDEOS.map(v => (
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
