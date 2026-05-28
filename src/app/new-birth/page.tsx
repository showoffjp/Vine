"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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
  const [activeTab, setActiveTab] = useState<"theology" | "models" | "practices">("theology");
  const [selectedModel, setSelectedModel] = useState("Reformed / Calvinist");

  const model = MODELS.find(m => m.name === selectedModel)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
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
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{t.verse}</span>
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
    </div>
  );
}
