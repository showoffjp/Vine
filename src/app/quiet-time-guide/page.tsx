"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const METHODS = [
  {
    name: "SOAP Method",
    subtitle: "Scripture, Observation, Application, Prayer",
    color: GREEN,
    time: "20-30 min",
    level: "Beginner",
    description: "The SOAP method is one of the most widely taught Bible study frameworks for personal devotion. S: Write out the Scripture passage. O: Observe what the text says (context, who's speaking, what's happening). A: Apply the text to your specific life today. P: Pray the text back to God, using what you've observed and applied as the content of prayer. This method is deliberately simple and complete — it keeps Scripture central, grounds application in observation, and closes with prayer rather than mere information.",
    steps: [
      "Choose a passage (start with 5-10 verses)",
      "Write out the passage in full — copying slows the mind down",
      "Observation: What does this text say? List factual observations",
      "Application: What does this mean for me today, specifically?",
      "Prayer: Pray through what you observed and applied"
    ],
    verse: "Psalm 119:105",
    initials: "SOAP",
  },
  {
    name: "Lectio Divina",
    subtitle: "Sacred Reading — the ancient monastic method",
    color: PURPLE,
    time: "30-45 min",
    level: "Intermediate",
    description: "Lectio Divina (Latin: divine reading) is a structured method of meditative Bible reading developed in the monastic tradition, formalized by Guigo II in the 12th century. It involves four movements: Lectio (reading — read the text slowly, listening for a word or phrase that stands out); Meditatio (meditation — repeat the word or phrase, chew on it, let it open up); Oratio (prayer — respond to God with what has surfaced); Contemplatio (contemplation — rest in God's presence, beyond words). It is deliberately slower and more receptive than analytical study.",
    steps: [
      "Silence: take 2 minutes to quiet yourself before God",
      "Lectio: read the passage aloud slowly 2-3 times",
      "Meditatio: sit with the word or phrase that stood out; repeat it gently",
      "Oratio: speak to God about what you noticed",
      "Contemplatio: rest in silence; let God speak"
    ],
    verse: "Luke 10:39",
    initials: "LD",
  },
  {
    name: "The Daily Examen",
    subtitle: "Ignatius Loyola's evening review",
    color: "#F59E0B",
    time: "15 min",
    level: "Beginner",
    description: "The Examen is an evening prayer practice developed by St. Ignatius Loyola and described in his Spiritual Exercises (1522-1524). It reviews the day in the light of God's presence. Five movements: (1) Gratitude — notice one specific thing from the day for which you're grateful; (2) Review — walk through the day, noticing where God was present; (3) Recognition — notice a moment of failure, distance, or sin; (4) Repentance — bring that moment to God honestly; (5) Hope — ask for grace for tomorrow. It is a structured form of the self-examination the New Testament repeatedly calls for.",
    steps: [
      "Give thanks: what was one specific gift from today?",
      "Review the day: where did you notice God's presence?",
      "Where did you feel distant from God?",
      "Repent honestly of specific failures",
      "Ask for grace for one specific challenge tomorrow"
    ],
    verse: "Lamentations 3:40",
    initials: "EXM",
  },
  {
    name: "Praying Through the Psalms",
    subtitle: "Don Whitney's most-recommended method",
    color: "#3B82F6",
    time: "15-20 min",
    level: "Beginner",
    description: "Don Whitney (author of Praying the Bible) identifies praying through the Psalms as the single most reliable way to combat prayerlessness. The method: open to a psalm, read a verse, let that verse become the content of prayer — then move to the next verse and repeat. When your prayer runs dry (after 30 seconds or 30 minutes), simply move to the next verse. The text provides the vocabulary, the direction, and the range of emotional honesty that our own prayer rarely reaches. You will sometimes find yourself praying things you didn't know you needed to pray.",
    steps: [
      "Open to any Psalm (or use a rotation: Psalm 1-150 over 5 months)",
      "Read the first verse",
      "Turn the verse into prayer — whatever it prompts",
      "When words dry up, move to the next verse",
      "Continue until you've prayed 10-15 minutes"
    ],
    verse: "Psalm 5:1-2",
    initials: "PPS",
  },
  {
    name: "The Lord's Prayer Structure",
    subtitle: "Praying the pattern Jesus taught",
    color: "#EC4899",
    time: "20-25 min",
    level: "Beginner",
    description: "Jesus's model prayer in Matthew 6:9-13 is not a prayer to be merely recited but a structure to be prayed through. Each petition opens a dimension of prayer: Our Father (relationship and intimacy), Hallowed be your name (adoration), Your kingdom come (intercession for God's purposes), Your will be done (submission), Give us today our daily bread (petition — present needs), Forgive us our debts (confession), Lead us not into temptation (spiritual warfare and dependence). Using the Lord's Prayer as a framework expands and organizes prayer rather than mechanically repeating it.",
    steps: [
      "Our Father: spend time in adoration of God as Father",
      "Hallowed be your name: praise God's character specifically",
      "Your kingdom come: pray for gospel advance, specific people",
      "Give us daily bread: present needs",
      "Forgive us our debts: honest confession",
      "Lead us not into temptation: vulnerability and spiritual warfare"
    ],
    verse: "Matthew 6:9-13",
    initials: "TLP",
  },
  {
    name: "Bible Reading + Journal",
    subtitle: "Reading with pen in hand",
    color: "#10B981",
    time: "25-35 min",
    level: "Intermediate",
    description: "Simply reading Scripture with a journal open for recording observations, questions, and responses. More structured than casual reading, less structured than formal SOAP. The discipline of writing forces slower reading and better retention. Many find that the act of writing a single sentence in response to each chapter — one observation, one application, one question — over a year produces a personal theological journal that becomes its own devotional resource. The Blue Letter Bible app and a physical journal work well together for this approach.",
    steps: [
      "Begin with a brief prayer for illumination",
      "Read the passage — as much as you can in 15 minutes",
      "Write one observation (what you noticed)",
      "Write one application (what this means for today)",
      "Write one prayer (your response to God)",
      "Note any questions for later study"
    ],
    verse: "Deuteronomy 17:19",
    initials: "BRJ",
  },
];

const SCHEDULES = [
  {
    title: "The 5-Minute Devotional",
    desc: "For extraordinarily busy seasons. Read one psalm or proverb. Write one sentence about what stood out. Pray for one minute. Brief, but daily consistency is more formative than occasional marathon sessions.",
    time: "5 min",
    color: "#3B82F6",
  },
  {
    title: "The Standard Quiet Time",
    desc: "15-20 minutes is sustainable for most adults as a daily practice. Read a chapter of Scripture. Use SOAP or journaling. Pray for 5-10 minutes. This pattern sustained across years produces deep formation.",
    time: "20 min",
    color: GREEN,
  },
  {
    title: "The Extended Time",
    desc: "30-45 minutes for those in more focused seasons or who have morning margin. Add time in the Psalms before reading the day's text. Add a few minutes of intercession for specific people. End with silence.",
    time: "45 min",
    color: PURPLE,
  },
  {
    title: "The Sabbath Devotional",
    desc: "One hour or more, once per week (typically Sunday). Extended Bible reading, praying through a full psalm, writing in a spiritual journal, reading a devotional classic (Baxter, Owen, Spurgeon). The longer session provides what the daily sessions can only approach.",
    time: "60+ min",
    color: "#F59E0B",
  },
];

const OBSTACLES = [
  { problem: "I don't have time", solution: "Set a specific time and defend it. 6am works better than 'whenever.' Even 10 minutes at the same time daily beats an hour occasionally. The enemy of the best is often the perfect." },
  { problem: "I fall asleep / get distracted", solution: "Stand up. Walk while you pray. Read aloud. Write notes. Physical engagement fights mental drift. If mornings are your drowsy time, try evenings or lunch." },
  { problem: "I feel nothing — just going through motions", solution: "Barrenness in devotion is normal and should be expected. Don't evaluate prayer by feeling. Pray through the barrenness. 'Lord, I don't want to be here — help me want to.' Honest prayer about prayerlessness is still prayer." },
  { problem: "I don't know where to start reading", solution: "Start with Mark (the fastest Gospel, 16 chapters). Then Romans. Then Psalms. Then Genesis. A systematic reading plan (M'Cheyne, professor Grant, or Bible Recap) takes the daily decision off the table." },
  { problem: "My prayer feels repetitive and hollow", solution: "Use the Lord's Prayer structure or pray through a Psalm. Praying the Bible gives you new vocabulary daily. Your own prayer vocabulary is always going to be limited." },
  { problem: "I miss days and then quit entirely", solution: "When you miss, don't make it worse by quitting. Grace applies to your devotional life too. Come back the next day without self-condemnation or extended guilt. The goal is a lifetime pattern, not a perfect streak." },
];

const VOICES_QT = [
  { id: "murray", name: "Andrew Murray", era: "1828-1917", context: "With Christ in the School of Prayer (1885); Abide in Christ; South African pastor and devotional writer", bio: "Murray is one of the most prolific devotional writers of the 19th century, and his With Christ in the School of Prayer remains one of the most practical and theologically serious books on prayer ever written. His central conviction: prayer is not a technique but a relationship — the relationship between a dependent creature and an all-sufficient God. Every chapter addresses a specific aspect of prayer from a specific Gospel text, making it a devotional commentary on Jesus as teacher of prayer. Murray prayed for hours daily and considered it the most important work of the Christian life.", quote: "The man who mobilizes the Christian church to pray will make the greatest contribution to world evangelization in history.", contribution: "Made sustained, expectant prayer credible and accessible for ordinary Christians. His devotional writing style — warm, practical, and biblical — has shaped the daily prayer lives of millions across 130 years." },
  { id: "spurgeon-qt", name: "Charles Spurgeon", era: "1834-1892", context: "Morning and Evening (1865); Lectures to My Students; Metropolitan Tabernacle", bio: "Spurgeon preached to 10 million people over his lifetime (before amplification) and maintained a daily devotional life that he considered the secret source of his preaching power. His Morning and Evening — two daily readings with Scripture, meditation, and application — has been in continuous publication for over 150 years. He insisted that the pastor's first congregation was himself, and that the quality of preaching was inseparable from the quality of private devotion. His lectures to his students on prayer, preparation, and life with God are among the most practical on record.", quote: "I would rather teach one man to pray than ten men to preach.", contribution: "Demonstrated by example that massive public ministry is fed by hidden private devotion. Morning and Evening has probably shaped more daily devotional habits than any other book in the English language besides the Bible." },
  { id: "tozer-qt", name: "A.W. Tozer", era: "1897-1963", context: "The Pursuit of God (1948); The Knowledge of the Holy (1961)", bio: "Tozer was a self-educated Christian Missionary Alliance pastor who became one of the most quoted writers in evangelical Christianity. The Pursuit of God opens with a conviction that drove his entire life: 'The reason why many are still troubled, still seeking, still making little forward progress is because they haven't yet come to the end of themselves.' His vision of quiet time was not methodical but relational — a sustained seeking after God himself, not information about God. He spent long hours in prayer and wrote in the mornings before anyone else was awake.", quote: "An infinite God can give all of Himself to each of His children. He does not distribute Himself that each may have a part, but to each one He gives all of Himself as fully as if there were no others.", contribution: "Recovered the experiential and mystical dimension of Protestant devotion — the direct pursuit of God's presence rather than merely his benefits. The Pursuit of God has introduced more evangelicals to contemplative prayer than any other 20th-century book." },
  { id: "chambers", name: "Oswald Chambers", era: "1874-1917", context: "My Utmost for His Highest (1927, published posthumously); YMCA minister", bio: "Chambers died at 43 of appendicitis while serving as a YMCA chaplain in Egypt during World War I. My Utmost for His Highest — compiled from his wife's stenographic notes of his lectures at the Bible Training College — has been the best-selling daily devotional in the English language for nearly a century. Its signature is demanding language: Chambers does not offer comfort first but challenge. 'There is nothing thrilling about a laboring man's work, but it is the laboring man who makes the conceptions of the genius possible.' He expected the Christian to give everything, daily, holding nothing back.", quote: "My utmost for His highest is not devotion for devotion's sake; it is total abandonment to God.", contribution: "Created the template for the daily devotional reading that combines theological seriousness with personal challenge. My Utmost for His Highest has shaped the devotional habits of more evangelicals than any other non-biblical daily reading." },
  { id: "foster-qt", name: "Richard Foster", era: "b. 1942", context: "Celebration of Discipline (1978); Prayer: Finding the Heart's True Home (1992); Renovare", bio: "Foster's Prayer: Finding the Heart's True Home — his follow-up to Celebration of Discipline — is the most comprehensive Protestant treatment of the varieties of prayer. He identifies 21 forms of prayer (simple, prayer of examination, relinquishment, contemplative, healing, etc.), showing that prayer is not a single activity but a family of activities united by orientation toward God. His approach to quiet time is capacious rather than programmatic: the goal is a life saturated with prayer, not a daily appointment kept.", quote: "We must never allow the busyness of our lives to cause us to fail to hear the gentle blowing of the Holy Spirit.", contribution: "Expanded the evangelical imagination for what prayer can be and do. By cataloguing and commending forms of prayer that Protestant culture had forgotten (contemplative, centering, healing), he gave a generation of Christians permission to diversify their devotional practice." },
];

export default function QuietTimeGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<"methods" | "voices" | "schedules" | "obstacles" | "videos">("vine_quiet-time-guide_tab", "methods");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_quiet-time-guide_voice", "murray");
  const voiceItem = VOICES_QT.find(v => v.id === selectedVoice)!;
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const method = METHODS.find(m => m.name === selectedMethod);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>☀️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Quiet Time Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The daily meeting with God — Bible, prayer, silence — is the single most formative practice in the Christian life. This guide covers the major methods, realistic schedules, and how to push through when it's hard.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "methods" as const, label: "Methods", icon: "📖" },
            { id: "voices" as const, label: "Voices", icon: "💬" },
            { id: "schedules" as const, label: "Schedules", icon: "⏰" },
            { id: "obstacles" as const, label: "Obstacles", icon: "⚠️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "methods" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {METHODS.map(m => (
                <button key={m.name} onClick={() => setSelectedMethod(selectedMethod === m.name ? null : m.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedMethod === m.name ? m.color : BORDER}`, background: selectedMethod === m.name ? `${m.color}20` : "transparent", color: selectedMethod === m.name ? m.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {m.name}
                </button>
              ))}
            </div>

            {method ? (
              <div style={{ background: CARD, border: `1px solid ${method.color}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div>
                    <h2 style={{ color: method.color, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{method.name}</h2>
                    <div style={{ color: MUTED, fontSize: 13 }}>{method.subtitle}</div>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                    <span style={{ background: `${method.color}15`, color: method.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{method.time}</span>
                    <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{method.level}</span>
                  </div>
                </div>

                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }}>{method.description}</p>

                <div style={{ background: `${method.color}08`, border: `1px solid ${method.color}20`, borderRadius: 10, padding: 16, marginBottom: 14 }}>
                  <div style={{ color: method.color, fontWeight: 700, fontSize: 12, marginBottom: 10 }}>HOW TO DO IT</div>
                  <ol style={{ margin: 0, padding: "0 0 0 18px" }}>
                    {method.steps.map((s, i) => (
                      <li key={i} style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 4 }}>{s}</li>
                    ))}
                  </ol>
                </div>

                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}><VerseRef reference={method.verse} /></span>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
                {METHODS.map((m, i) => (
                  <button key={i} onClick={() => setSelectedMethod(m.name)}
                    style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 8, background: `${m.color}20`, border: `1px solid ${m.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: m.color, fontWeight: 900, fontSize: 8, flexShrink: 0 }}>
                        {m.initials}
                      </div>
                      <div>
                        <div style={{ color: m.color, fontWeight: 800, fontSize: 14 }}>{m.name}</div>
                        <div style={{ color: MUTED, fontSize: 11 }}>{m.time} · {m.level}</div>
                      </div>
                    </div>
                    <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.5, margin: 0 }}>{m.subtitle}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_QT.map(v => (
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
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Contribution to Devotional Practice</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "schedules" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The goal is a sustainable daily pattern, not an impressive one. Ten minutes daily for a year beats 90 minutes twice a month. Find the schedule that fits your actual life — then defend it.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {SCHEDULES.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <div style={{ color: s.color, fontWeight: 800, fontSize: 16 }}>{s.title}</div>
                    <span style={{ background: `${s.color}15`, color: s.color, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{s.time}</span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "obstacles" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Every serious Christian struggles with consistency in their devotional life. These are the most common obstacles and how to move through them.
              </p>
            </div>
            {OBSTACLES.map((o, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: "#EF4444", fontWeight: 800, fontSize: 15, marginBottom: 10 }}>"{o.problem}"</div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>RESPONSE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{o.solution}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Practical video guidance on developing a consistent, fruitful daily quiet time with God.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {[
                { id: "cRmWSB1c6L8", title: "How to Study the Bible", teacher: "R.C. Sproul" },
                { id: "72F48OWejh4", title: "7 Powerful Bible Study / Quiet Time Ideas", teacher: "Daily Disciple" },
                { id: "Cjju49Zsst0", title: "My Morning Quiet Time Routine", teacher: "Christian Devotional" },
                { id: "nryZyL59Gh8", title: "Level Up Your Quiet Time with God", teacher: "Spiritual Formation" },
              ].map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{v.teacher}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
