"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "traps" | "voices" | "practices" | "videos";

const VOICES = [
  {
    id: "nouwen",
    name: "Henri Nouwen",
    era: "1932-1996",
    context: "Dutch Catholic priest; professor at Harvard, Yale, Daybreak Community",
    bio: "Nouwen is the unlikely patron of a certain kind of Christian manhood — one formed by vulnerability, prayer, and the willingness to be known in weakness. His 'The Return of the Prodigal Son' meditates on the father who runs, embraces, weeps, and feasts — arguing that the masculine calling is not to be the elder brother (correct but joyless) but to become the father: a man whose wounds have become a source of compassion for others. Nouwen's own struggles with loneliness and his life at L'Arche shaped a manhood that bears pain without hiding it.",
    quote: "The greatest trap in our life is not success, popularity, or power, but self-rejection. Becoming the Beloved is the great spiritual journey every man is invited to take.",
    contribution: "Nouwen gave Christian men permission to be emotionally honest — to name loneliness, failure, and spiritual hunger without shame. His work challenged the performance-based masculinity common in evangelical culture by insisting that belovedness, not achievement, is the foundation of Christian identity. His integration of the Prodigal Son's father as a masculine archetype has been enormously influential on men's ministry and spiritual direction.",
  },
  {
    id: "eldredge",
    name: "John Eldredge",
    era: "1960-present",
    context: "American author and counselor; Ransomed Heart Ministries",
    bio: "Eldredge's 'Wild at Heart' (2001) became the most widely-read book on Christian masculinity of the 21st century. His central claim: God made men with a warrior heart, an adventure, and a beauty to rescue — and the church has domesticated men into passivity by asking them to be nice rather than fierce. Whatever its critics say about its cultural assumptions, Wild at Heart opened a generation of men to a bigger vision of Christian manhood and gave them language for a longing that most had suppressed.",
    quote: "Deep in his heart, every man longs for a battle to fight, an adventure to live, and a beauty to rescue. These are not the result of the fall; they are the image of God in the heart of a man.",
    contribution: "Eldredge popularized the conversation about authentic masculine formation in the church, creating space for men to talk about desire, wound, and calling. His critique of passive, domesticated Christianity in church settings resonated with millions of men who had experienced exactly that. Whatever one thinks of his theological anthropology, he succeeded in making masculine spiritual formation a central concern for pastors and men's ministry leaders.",
  },
  {
    id: "ortlund",
    name: "Dane Ortlund",
    era: "1978-present",
    context: "Reformed pastor and author; Naperville Presbyterian Church",
    bio: "Ortlund's 'Gentle and Lowly' (2020) centers Christian manhood not on warrior archetypes or heroic achievement but on the heart of Christ — gentle and lowly in heart (Matthew 11:29). Ortlund argues that the defining characteristic of Christ's masculinity is his tender approachability: he is 'the one to whom the heavy-burdened are invited.' A man formed in Christ's image is not primarily fierce but gentle — accessible, tender, and safe. This challenges both secular toughness and religious harshness.",
    quote: "Jesus is not trigger-happy. Not harsh, reactionary, or easily exasperated. He is the most understanding person in the universe. The posture of his heart is gentle and lowly.",
    contribution: "Ortlund provided a Christological corrective to the warrior-centered models of Christian masculinity. By centering Jesus's own self-description ('gentle and lowly') as the heart of the matter, he gave men a different north star: not strength in the sense of domination or fearlessness, but strength as tenderness, approachability, and welcome. This has had wide influence on how younger evangelical men think about pastoral calling and fatherhood.",
  },
  {
    id: "sanders",
    name: "J. Oswald Sanders",
    era: "1902-1992",
    context: "New Zealand Christian leader; director of China Inland Mission",
    bio: "Sanders's 'Spiritual Leadership' (1967) is the standard text on Christian male leadership in the evangelical world. Written from the experience of leading one of the world's largest mission agencies, Sanders argued that Christian leadership is fundamentally different from secular leadership: it flows not from talent or ambition but from spiritual depth, prayer, and self-sacrifice. The leader who does not pray is not leading from the right source. Sanders took the servant-leader model seriously as a description, not just an aspiration.",
    quote: "Leadership is influence — nothing more, nothing less. The man who influences others toward Christlikeness has done the highest work that can be done.",
    contribution: "Sanders gave generations of evangelical men a clear-eyed account of what genuine Christian leadership looks like and costs. His emphasis on prayer as the foundation of leadership — not strategy or charisma — cut against the business-book models that often dominate men's ministry. His chapters on the cost of leadership (loneliness, criticism, pressure, the temptation to manage rather than lead spiritually) remain the most honest treatment of pastoral calling available.",
  },
  {
    id: "chan",
    name: "Francis Chan",
    era: "1967-present",
    context: "American pastor and author; Crazy Love, We Are Church movement",
    bio: "Chan represents a certain kind of counter-cultural Christian masculinity — the man who gave away a comfortable pastorate and successful Christian platform to go where the church was weak and the work was hard. His 'Crazy Love' challenged men to stop living safe, comfortable, domesticated Christian lives and actually follow Jesus into risk. For Chan, biblical manhood is fundamentally about obedience — doing what Jesus said even when it is costly, foolish by the world's standards, and inconvenient.",
    quote: "Stop praying for God to change your circumstances. Start asking him to change you so that you can serve faithfully in the circumstances he has already given you.",
    contribution: "Chan modeled a counter-cultural masculine faithfulness that resonated especially with younger men who were tired of Christianity as a comfortable lifestyle accessory. By actually doing what his theology demanded — giving his house away, leaving his megachurch, moving into hard places — he demonstrated that convictions are revealed by costs. His example has challenged a generation of men to ask what obedience actually requires rather than what comfort allows.",
  },
];


const THEOLOGY = [
  { title: "Made in the Image of God", verse: "Genesis 1:26-27", body: "Both male and female are made in the image of God (Genesis 1:27) — which means maleness itself is a good gift, not a social construct or a problem to be overcome. The image of God is not distributed equally between the sexes; both bear it fully. Biblical manhood does not begin with a list of behaviors but with a theological conviction: being male is a created, dignified, purposeful reality." },
  { title: "Headship as Servant Leadership", verse: "Ephesians 5:25-28", body: "Paul's language of headship (Ephesians 5:23) is immediately interpreted by the command that follows: 'Husbands, love your wives, just as Christ loved the church and gave himself up for her.' The model of male headship is cruciform. The husband does not lead by demanding but by giving; not by asserting authority but by sacrificing for the good of his wife. Headship is a weight, not a privilege." },
  { title: "The Man Who Endures", verse: "James 1:12", body: "'Blessed is the one who perseveres under trial, because, having stood the test, that person will receive the crown of life' (James 1:12). Endurance under pressure is consistently commended in Scripture. The patriarchs, the prophets, Job, Paul — the pattern of biblical manhood involves facing difficulty without running, suffering without bitterness, and persisting in faithfulness when circumstances argue for giving up." },
  { title: "Tenderness as Strength", verse: "Matthew 11:29", body: "Jesus calls himself 'gentle and humble in heart' (Matthew 11:29) using the same word (prautes) used for meekness — power under control. Tenderness and compassion were not compromises of Jesus's authority; they were expressions of it. A man who cannot weep, receive, listen, or comfort is missing a large portion of what Jesus modeled. Emotional availability is not weakness — it is strength deployed for others." },
  { title: "Fatherhood as Vocation", verse: "Psalm 103:13", body: "'As a father has compassion on his children, so the LORD has compassion on those who fear him' (Psalm 103:13). God uses fatherhood as a primary image for his own character — which means fathering faithfully is participating in the divine nature. The absent, distracted, or harsh father does not just harm his children; he distorts the image of God they see at the most formative time of their lives." },
];

const TRAPS = [
  { trap: "Passivity", signs: "Abdicating decisions to avoid conflict or blame. Present in body but absent in leadership, engagement, or care. Delegating the difficult to others.", response: "Passivity in men was first displayed in Eden — Adam stood by while the serpent addressed Eve (Genesis 3:6). Engagement, not control, is the cure for passivity. Show up. Make the call. Accept responsibility for your sphere." },
  { trap: "Domination", signs: "Using size, voice, position, or anger to control rather than serve. Making others small so you feel large. Confusing compliance with respect.", response: "Domination is headship corrupted. The same Ephesians 5 that calls men to lead also defines the model: cruciform giving. Power is for protection and provision, not for self-aggrandizement. Men who dominate have not understood servant leadership." },
  { trap: "Achievement Idolatry", signs: "Identity built entirely on career success, income, status, or competence. Emotionally unavailable to family because all energy goes to performance. Using busyness as identity.", response: "A man who is excellent at his job but absent at home has misunderstood what he is for. Work is a calling, not an identity. The man who is known by his children, whose wife is genuinely loved — this is a more lasting and biblical success than any career achievement." },
  { trap: "Emotional Shutdown", signs: "Describing oneself as 'not emotional' as a badge of strength. Inability to name feelings, receive care, or be moved by others' pain. Intellectualizing everything.", response: "Jesus wept (John 11:35). David wrote laments. Paul confessed his own weakness and distress repeatedly. Emotional honesty is not a feminine virtue — it is a human one. A man who cannot feel or express cannot truly lead, love, or be known." },
  { trap: "Sexual Cowardice", signs: "Consuming pornography as a private accommodation. Treating sexual ethics as a private matter that doesn't affect others. Rationalizing ongoing sin.", response: "Paul's command is direct: 'flee sexual immorality' (1 Corinthians 6:18). Not negotiate with it, accommodate it, or manage it — flee. Sexual sin is not a private hobby; it shapes character, damages relationships, and distorts the image of God in the man who pursues it." },
];

const PRACTICES = [
  { title: "Own Your Spiritual Life", desc: "Do not outsource your spiritual formation to your wife, your pastor, or your circumstances. Read Scripture, pray, confess sin, pursue community. A man who is spiritually healthy leads from a full place rather than dragging others into his emptiness.", icon: "📖" },
  { title: "Initiate Hard Conversations", desc: "Passivity avoids; strength engages. Be the one who initiates conflict resolution, difficult feedback, and honest assessment — in your marriage, your friendships, and your parenting. Do not let resentment calcify because you avoided discomfort.", icon: "💬" },
  { title: "Pursue Accountability", desc: "Every man needs other men who know his actual life — his temptations, his failures, his fears, his real marriage. Not surface-level friendship but the kind of friendship that can say the hard thing and still be present next week.", icon: "🤝" },
  { title: "Be Physically Present", desc: "Show up. Be in the room. Attend the recital, the game, the dinner. Presence is not the only thing a man contributes, but it is foundational. Children and wives know the difference between a man who is there and a man who is nearby.", icon: "🏠" },
  { title: "Work with Excellence", desc: "Whatever your hand finds to do, do it with all your might (Ecclesiastes 9:10). Diligence in work is a spiritual discipline — it is stewardship of what God has given, service to those who depend on you, and the rejection of the entitlement that says average is acceptable.", icon: "⚒️" },
  { title: "Receive and Give Tenderness", desc: "Allow yourself to be known and to know others. Receive care without deflecting it. Express affection, gratitude, and appreciation to the people you love — in words, not just provision. Emotional availability is a choice, not a personality type.", icon: "💛" },
];

const MODELS = [
  { name: "Joseph", summary: "Integrity under injustice", desc: "Joseph is wrongfully sold, wrongfully accused, wrongfully imprisoned — and at no point does he retaliate, collapse, or abandon his integrity. He neither demands justice nor succumbs to bitterness. He rises in every context, serves faithfully in every season, and forgives extravagantly when power finally comes to him. A portrait of patient, non-retaliatory strength.", verse: "Genesis 37-50" },
  { name: "David", summary: "Passionate devotion and honest confession", desc: "David's greatness was not the absence of failure but the quality of his repentance. He sinned catastrophically — but the psalms of lament and confession he wrote show a man who could be emotionally present, spiritually honest, and genuinely broken before God. The man after God's own heart was not perfect; he was deeply feeling and unwilling to pretend otherwise.", verse: "Psalm 51" },
  { name: "Boaz", summary: "Provision, protection, and honor", desc: "Boaz notices Ruth, protects her, speaks well of her publicly, extends generosity beyond what was required, and pursues covenant commitment with appropriate urgency when the moment arrived. He is not passive, not domineering — he is a man who sees a need and acts decisively to meet it while honoring the dignity of everyone involved.", verse: "Ruth 2-4" },
  { name: "Paul", summary: "Strength through acknowledged weakness", desc: "Paul is the most theologically confident figure in the New Testament — and the one most willing to describe his weakness, fear, distress, and dependence. He wept over his churches. He described himself as the chief of sinners. His strength was not invulnerability but the genuine experience of God's grace meeting his real failures.", verse: "2 Corinthians 12:9-10" },
];

export default function BiblicalManhoodPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_biblical-manhood_tab", "theology");
  const [selectedModel, setSelectedModel] = usePersistedState("vine_biblical-manhood_selected_model", "Joseph");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_biblical-manhood_voice", "nouwen");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  const model = MODELS.find(m => m.name === selectedModel)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚔️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Biblical Manhood</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Not a list of behaviors to perform but a character to form. Biblical manhood is servant leadership, cruciform strength, tenderness deployed for others — modeled by Jesus himself.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "traps" as const, label: "Common Traps", icon: "⚠️" },
            { id: "voices" as const, label: "Voices", icon: "💡" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginTop: 8 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 14, marginBottom: 16 }}>BIBLICAL MODELS</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                {MODELS.map(m => (
                  <button key={m.name} onClick={() => setSelectedModel(m.name)}
                    style={{ padding: "7px 16px", borderRadius: 20, border: `1px solid ${selectedModel === m.name ? GREEN : BORDER}`, background: selectedModel === m.name ? `${GREEN}15` : "transparent", color: selectedModel === m.name ? GREEN : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                    {m.name}
                  </button>
                ))}
              </div>
              <div style={{ background: BG, borderRadius: 10, padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>{model.name}</div>
                    <div style={{ color: MUTED, fontSize: 13, fontStyle: "italic" }}>{model.summary}</div>
                  </div>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={model.verse} /></span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{model.desc}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "traps" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These are the distortions of biblical manhood — not opposites, but corruptions. Each is a good impulse (strength, leadership, work) taken in a direction that harms rather than serves.
              </p>
            </div>
            {TRAPS.map((c, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === c.trap ? null : c.trap)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === c.trap ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{c.trap}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === c.trap ? "−" : "+"}</span>
                </button>
                {expanded === c.trap && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <div style={{ background: `#EF444408`, border: `1px solid #EF444420`, borderRadius: 8, padding: 14, marginBottom: 14 }}>
                      <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 12, marginBottom: 6 }}>SIGNS</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.signs}</p>
                    </div>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {VOICES.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", background: selectedVoice === v.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedVoice === v.id ? PURPLE + "70" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedVoice === v.id ? PURPLE : TEXT, fontWeight: 800, fontSize: 13, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{voice.era}</div>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 24, marginBottom: 4 }}>{voice.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{voice.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{voice.bio}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 10 }}>IN THEIR OWN WORDS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>&ldquo;{voice.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{voice.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Biblical manhood is formed through practice — repeated choices that, over time, reshape character. These {PRACTICES.length} practices address the most common gaps in Christian men.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on biblical manhood — what Scripture says about being a godly man, husband, and leader.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "t3ZYiRM0PN8", title: "John Piper and Darrin Patrick on Biblical Manhood (Part 1)", channel: "Desiring God", description: "Piper and Patrick discuss what genuine biblical masculinity looks like — servant leadership, courage, and sacrificial love grounded in the gospel." },
                  { videoId: "-OcSYqaQVuY", title: "John Piper and Darrin Patrick on Biblical Manhood (Part 2)", channel: "Desiring God", description: "The conversation continues — addressing the specific failures men face and what it looks like to recover a biblical vision of manhood in the local church." },
                  { videoId: "kD7HKwMFUdY", title: "The Value of Masculine Ministry", channel: "John Piper / Desiring God", description: "Piper's address from the 2012 Pastors Conference on God, manhood, and ministry — what it means for men to lead the church with strength and gentleness." },
                  { videoId: "7n7Orxcvh6M", title: "Pursuing Biblical Manhood and Womanhood, Part 1", channel: "John Piper", description: "Piper presents a theological framework for biblical complementarity — what Scripture teaches about the distinct callings of men and women." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
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
      <Footer />
    </div>
  );
}
