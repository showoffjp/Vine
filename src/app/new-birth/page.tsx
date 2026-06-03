"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "models" | "voices" | "practices" | "videos";

const VIDEOS = [
  { videoId: "KbFKcFxqVlo", title: "You Must Be Born Again — What Jesus Really Meant", channel: "Tim Keller / Gospel in Life", description: "Keller unpacks John 3 and the radical claim that religious people need regeneration just as much as irreligious ones." },
  { videoId: "fJnGJN6laqE", title: "What Does It Mean to Be Born Again?", channel: "Desiring God", description: "John Piper answers the question with precision and pastoral warmth — what changes, what doesn't, and how you know." },
  { videoId: "ACZbpLkY8To", title: "The New Birth — Regeneration Explained", channel: "Ligonier Ministries", description: "R.C. Sproul explains the Reformed doctrine of regeneration: why the new birth must precede faith, not follow it." },
  { videoId: "Z8lkuuhVkOI", title: "Regeneration and Conversion", channel: "Theology of the Cross", description: "A careful theological treatment of the ordo salutis — how regeneration, faith, repentance, and justification relate." },
];

const VOICES = [
  {
    id: "augustine",
    name: "Augustine of Hippo",
    era: "354-430",
    context: "Bishop of Hippo; foundational theologian for Western Christianity",
    bio: "Augustine's 'Confessions' is the greatest first-person account of the new birth in Christian literature. His description of his own regeneration — the years of resistance, the weeping in the garden, the voice saying 'Take up and read' — shaped all subsequent evangelical conversion narrative. For Augustine, the new birth was not a decision but a rescue: God pursuing and capturing a will that would not and could not find its way to him unaided.",
    quote: "Our heart is restless until it rests in You. You called me; You cried aloud to me; You broke open my deafness. You enlightened me; You shone upon me; You put to flight my blindness.",
    contribution: "Augustine established that regeneration is God's act from start to finish — that the will that is born again could not have initiated its own birth. His anti-Pelagian writings gave the church its most rigorous account of human spiritual inability and divine grace. His conversion narrative in the Confessions set the template for testimony as a genre: honest about sin, specific about the crisis, clear about the transformation.",
  },
  {
    id: "whitefield",
    name: "George Whitefield",
    era: "1714-1770",
    context: "English evangelist; central figure in the First Great Awakening",
    bio: "Whitefield was the greatest evangelist of the 18th century, preaching the new birth to crowds of tens of thousands across Britain and America. His theology was Calvinist — regeneration is God's sovereign act — but his preaching was passionate, urgent, and emotionally direct. He did not merely explain the new birth; he called for it. His open-air preaching broke the assumption that spiritual renewal could only happen in church buildings, and the conversions that followed changed the spiritual landscape of the English-speaking world.",
    quote: "You must be born again. It is not enough to be baptized, confirmed, or to take the Lord's Supper. You must experience the new birth for yourself.",
    contribution: "Whitefield popularized the experience of the new birth as the defining mark of authentic Christianity. He created the template for evangelical preaching: clear exposition of human lostness, urgent call to the new birth, and invitation to immediate response. His partnership and theological debate with John Wesley about the nature of regeneration (Calvinist vs. Arminian) produced a rich tradition of evangelical reflection on exactly what happens in conversion.",
  },
  {
    id: "spurgeon",
    name: "C.H. Spurgeon",
    era: "1834-1892",
    context: "Victorian Baptist preacher; pastor of Metropolitan Tabernacle, London",
    bio: "Spurgeon preached more than 600 sermons on regeneration, the new birth, and conversion over his 38-year ministry. He had a gift for making abstract theological categories feel existentially urgent and personally accessible. A committed Calvinist, he nonetheless preached the free offer of the gospel with emotional intensity — holding together the sovereignty of God in regeneration and the genuine responsibility of every person to believe. His sermon 'The Warrant of Faith' is a classic treatment of how an unconditional offer of Christ can be genuine even if regeneration is God's act.",
    quote: "The new birth is not a reformation of your life. It is not taking the old clay and fashioning it into a new shape. It is a new creation altogether — old things have passed away; behold, all things have become new.",
    contribution: "Spurgeon made regeneration pastoral: he preached it to give assurance to the converted and urgency to the unconverted, not merely to display theological sophistication. His collected sermons remain one of the richest devotional libraries on the nature, evidence, and assurance of the new birth. He also demonstrated that a thoroughgoing Calvinist could preach free and urgent gospel invitations without contradiction.",
  },
  {
    id: "packer",
    name: "J.I. Packer",
    era: "1926-2020",
    context: "Anglican theologian; professor at Regent College Vancouver",
    bio: "Packer's 'Knowing God' (1973) brought the doctrine of regeneration into the mainstream of evangelical spirituality. His chapter 'Sons of God' argues that adoption — being made children of God — is the highest privilege of the gospel, and that the new birth is the event by which this relationship begins. Packer also made a decisive contribution through his introduction to John Owen's 'The Death of Death,' which revived Calvinist soteriology (including its account of regeneration) for 20th century evangelicalism.",
    quote: "Regeneration is a birth. You cannot bring it about by your own efforts. Nor can you repeat it. Nor can you grow out of it. You are simply born into a new family and a new life.",
    contribution: "Packer provided the doctrinal clarity and pastoral warmth that made the Reformed account of regeneration accessible to ordinary evangelicals. His treatment of adoption — the relational consequence of regeneration — moved the doctrine from abstraction to lived experience. He also helped evangelicals recover Owen, Bunyan, and the Puritan tradition of reflection on regeneration, which has had an enormous influence on Reformed evangelical spirituality since the 1970s.",
  },
  {
    id: "chan",
    name: "Francis Chan",
    era: "1967-present",
    context: "American pastor and author; founded Cornerstone Community Church",
    bio: "Chan represents the contemporary evangelical recovery of the Spirit's role in regeneration. His 'Forgotten God' (2009) called the American church to recognize how completely the Holy Spirit had been sidelined — producing a Christianity that looked functional without any supernatural life. Chan's concern was that professing Christians might have intellectual knowledge about the new birth while lacking its experiential reality. His willingness to ask uncomfortable questions about nominal Christianity put regeneration back at the center of pastoral concern.",
    quote: "Are you the same person you were before you came to faith? Then something is wrong. The Spirit of God does not leave people unchanged. New birth means new life.",
    contribution: "Chan raised the diagnostic question that the doctrine of regeneration is always supposed to raise: Has it actually happened? His pastoral work challenged the assumption — common in revivalist Christianity — that praying a prayer guarantees new birth regardless of subsequent evidence. He helped a generation of younger evangelicals take seriously the 1 John markers of genuine regeneration and wrestle honestly with the difference between nominal Christianity and the new life Jesus describes.",
  },
];


const THEOLOGY = [
  { title: "Born Again: What It Means", verse: "John 3:3", body: "You must be born again (John 3:3) — Jesus's words to Nicodemus establish that entry into God's kingdom requires a radical new beginning, not moral improvement or religious effort. The Greek anothen means both again and from above, capturing both the newness and the divine origin of the regeneration Jesus describes. Like physical birth, spiritual birth is not something you accomplish — it is something that happens to you, by another's agency, giving you a life you did not previously have." },
  { title: "Regeneration by the Spirit", verse: "John 3:8", body: "The Spirit blows where it wills (John 3:8) — regeneration is the sovereign, mysterious act of God's Spirit giving new life to spiritually dead souls. Ezekiel anticipated this: God would give his people a new heart, remove the heart of stone, and put his Spirit within them (Ezekiel 36:26-27). In regeneration, the person who was dead in transgressions (Ephesians 2:1) receives new spiritual life — the capacity and desire to believe, repent, and follow Christ. The Spirit precedes and produces faith, not the reverse." },
  { title: "New Creation in Christ", verse: "2 Corinthians 5:17", body: "If anyone is in Christ, the new creation has come: The old has gone, the new is here (2 Corinthians 5:17). Regeneration is not merely a new start — it is a new ontology. The believer participates in the eschatological new creation that broke into history in Christ's resurrection. Paul's language is cosmic: the same categories (old/new, death/life) that describe the two ages of redemptive history also describe the individual who has been born again. The new birth is personal participation in the resurrection life of Jesus." },
  { title: "The Relationship of Faith and Regeneration", verse: "1 John 5:1", body: "Everyone who believes that Jesus is the Christ is born of God (1 John 5:1). The relationship between regeneration and faith is debated: does faith produce regeneration, or does regeneration produce faith? Reformed theology holds that God regenerates first (giving new life), which produces faith and repentance. Arminian theology holds that God enables faith (by prevenient grace), and faith produces new birth. Both agree that the new birth and saving faith are inseparable and simultaneous in the experience of conversion — the debate concerns their logical and causal order." },
  { title: "Evidence of the New Birth", verse: "1 John 3:9", body: "Whoever has been born of God does not go on sinning (1 John 3:9). The new birth produces a new disposition toward righteousness. The Spirit writes the law on the heart (Hebrews 8:10) — the regenerate person no longer experiences obedience as merely external constraint but as internal desire. The marks of regeneration in 1 John: practicing righteousness, loving brothers, believing that Jesus is the Christ, overcoming the world, keeping away from idols. These are evidences, not conditions — they flow from the new life rather than earning it." },
];

const MODELS = [
  {
    name: "Reformed / Calvinist",
    color: PURPLE,
    summary: "Regeneration is wholly monergistic — God alone acts. The Spirit sovereignly gives new spiritual life prior to and as the ground of faith. Because the human will is in bondage to sin (total depravity), it cannot choose God without first being made alive by the Spirit. Regeneration therefore precedes and causes faith, which then precedes and causes justification.",
    key_texts: "John 6:44; Ephesians 2:1-5; 1 John 5:1; Titus 3:5",
    strengths: "Maximizes the gratuity of grace; clear logical sequence; accounts for human spiritual inability",
    challenges: "Must explain how regeneration precedes faith without making faith unnecessary or unreal",
  },
  {
    name: "Arminian / Wesleyan",
    color: GREEN,
    summary: "Prevenient grace — grace that goes before — enables all people to respond to the gospel. The new birth follows faith as its proper result. Human free will, enabled by grace, must cooperate with the Spirit's invitation. Regeneration is synergistic: God's Spirit and human will working together. The new birth can potentially be lost through persistent unbelief.",
    key_texts: "John 1:12-13; Acts 2:38; Romans 10:9-10; Titus 3:5",
    strengths: "Preserves meaningful human agency; explains universal gospel call; consistent with God desiring all to be saved",
    challenges: "Prevenient grace is not explicitly named in Scripture; raises questions about what makes faith possible in one person and not another",
  },
  {
    name: "Catholic",
    color: "#3B82F6",
    summary: "Regeneration is sacramentally mediated, normally through baptism (baptismal regeneration). The new birth is an objective reality conferred in the sacrament and is the beginning of a cooperative process of justification. Grace and human cooperation continue together throughout the Christian life toward the goal of final salvation.",
    key_texts: "John 3:5; Acts 2:38; Titus 3:5; Romans 6:3-4",
    strengths: "Concrete and objective; connects new birth to visible community; historically ancient",
    challenges: "Protestant objection: conflates sign (baptism) with thing signified (regeneration); implies regeneration without faith in infants",
  },
  {
    name: "New Birth as Crisis Event",
    color: "#F59E0B",
    summary: "Emphasized in Pietist, evangelical, and revivalist traditions: the new birth is a datable, conscious, often emotionally significant experience of conversion. While the Reformed-Arminian debate concerns the order of causes, this tradition emphasizes the phenomenology — the person's experience of turning, believing, and being changed. The new birth is not only a theological event but an experienced transformation.",
    key_texts: "Acts 9:1-19; Luke 15:11-32; 2 Corinthians 5:17",
    strengths: "Takes seriously the experiential dimension; produces clear testimony; emphasizes the reality of change",
    challenges: "Can create anxiety in those without a dramatic conversion moment; may underweight ongoing growth in favor of initial crisis",
  },
];

const PRACTICES = [
  { title: "Pray for the New Birth in Others", desc: "If regeneration is God's act, then prayer for others is the primary means of seeking it. You cannot argue, manipulate, or program someone into new birth — but you can bring them before the One who gives it. Pray specifically for people by name, believing that God hears and acts.", icon: "🙏" },
  { title: "Examine Your Own New Birth", desc: "The 1 John pattern gives concrete markers: practicing righteousness, love for other Christians, belief that Jesus is the Christ, overcoming the world. Not as a frightening audit but as an honest reckoning. If these markers are absent or utterly foreign, that is worth attending to.", icon: "🔍" },
  { title: "Tell Your Conversion Story", desc: "Everyone who has been born again has a story — dramatic or quiet, datable or gradual. Telling it shapes you; hearing others' testimonies shapes you. The stories of God's work in drawing people to himself are among the church's greatest treasures. Know yours and share it.", icon: "💬" },
  { title: "Identify What Changed", desc: "What was it like before, and what changed after? The new birth produces real change — in desires, in relationships, in what you love and what you find hollow. Being able to name the change concretely grounds the doctrine in lived experience and builds confidence in its reality.", icon: "🌿" },
  { title: "Live from the New Nature", desc: "Paul's repeated exhortation is to reckon yourself dead to sin and alive to God — to live from the new nature rather than merely against the old one. You are not trying to become something you are not; you are living out what you already are in Christ. The new birth makes a new way of living possible, not merely commanded.", icon: "🌱" },
  { title: "Welcome the New Birth in Others", desc: "New converts often enter with uncertainty, with unusual questions, with a partial understanding of what has happened to them. The community's task is to welcome, disciple, and form — not to gatekeep with excessive theological tests. The Spirit is not finished; the new birth is the beginning, not the finish line.", icon: "🤝" },
];

export default function NewBirthPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [selectedModel, setSelectedModel] = useState("Reformed / Calvinist");
  const [selectedVoice, setSelectedVoice] = useState("augustine");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  const model = MODELS.find(m => m.name === selectedModel)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌱</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The New Birth</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Regeneration — being born again — is the Spirit's sovereign work of giving new life to spiritually dead souls. It is the beginning of everything: faith, repentance, and new creation life in Christ.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "models" as const, label: "Views", icon: "⚖️" },
            { id: "voices" as const, label: "Voices", icon: "💬" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "videos" as const, label: "Videos", icon: "▶️" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "models" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {MODELS.map(m => (
                <button key={m.name} onClick={() => setSelectedModel(m.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedModel === m.name ? m.color : BORDER}`, background: selectedModel === m.name ? `${m.color}20` : "transparent", color: selectedModel === m.name ? m.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {m.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${model.color}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: model.color, fontWeight: 900, fontSize: 22, marginBottom: 14 }}>{model.name}</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>{model.summary}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                <div style={{ background: `${model.color}08`, border: `1px solid ${model.color}15`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: model.color, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>KEY TEXTS</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{model.key_texts}</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>STRENGTHS</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{model.strengths}</p>
                </div>
              </div>
              <div style={{ background: "#EF444408", border: "1px solid #EF444415", borderRadius: 8, padding: 12 }}>
                <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 11, marginBottom: 4 }}>CHALLENGES</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{model.challenges}</p>
              </div>
            </div>
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

        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {VIDEOS.map(v => (
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

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The new birth is the beginning of the Christian life — not the whole of it. These practices flow from and deepen in those who have been born of the Spirit.
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
      </div>
      <Footer />
    </div>
  );
}
