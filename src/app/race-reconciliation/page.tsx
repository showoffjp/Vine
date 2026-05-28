"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "One Blood, One Humanity", verse: "Acts 17:26", body: "'From one man he made all the nations, that they should inhabit the whole earth' (Acts 17:26). The biblical starting point for race is not diversity — it is unity. All humans share one origin, one Creator, one dignity. Race as a category of fundamental difference is a recent and largely social construct. The gospel begins by dismantling the assumption that any race is fundamentally other." },
  { title: "The Dividing Wall Destroyed", verse: "Ephesians 2:14", body: "'For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility' (Ephesians 2:14). Paul wrote this about Jewish-Gentile division — the most profound ethnic and religious division in the ancient world. The cross, he says, does not transcend that division — it destroys it. A church that reflects ethnic divisions has not yet fully believed the gospel." },
  { title: "The Vision of Heaven", verse: "Revelation 7:9", body: "'After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne' (Revelation 7:9). The end of the story is not a homogenized humanity — it is a reconciled diversity. Every people, language, and culture worshipping together. The church is to be a foretaste of this reality, not a postponement of it." },
  { title: "Lament as Prerequisite", verse: "Amos 5:21-24", body: "Amos rebukes Israel for liturgical activity disconnected from justice: 'Let justice roll on like a river.' Reconciliation that skips lament — honest grief over what has been done and suffered — produces a false peace. White Christians lamenting racial injustice is not political; it is prophetic. Lament is not guilt; it is the acknowledgment that something has gone wrong that must not be minimized." },
  { title: "The Cost of Reconciliation", verse: "2 Corinthians 5:18-20", body: "'God... gave us the ministry of reconciliation' (2 Corinthians 5:18). Reconciliation is a ministry — it requires labor, risk, and loss. Racial reconciliation costs white Christians comfort, narrative, and power. It costs Black and minority Christians the vulnerability of trust after betrayal. Both are real costs. The gospel does not promise painless reconciliation — it provides the resources to bear the cost." },
];

const BARRIERS = [
  { barrier: "Racial Homogeneity in Churches", desc: "The Sunday morning 'most segregated hour' is still largely true. Churches self-segregate by preference, culture, and geography. Homogenous churches are not necessarily racist, but they are unfinished — they do not yet reflect the vision of Revelation 7.", response: "Integrate relationships before integrating services. Cross-cultural friendships are the foundation of cross-cultural churches. Start with genuine relationship, not demographic strategy." },
  { barrier: "Colorblindness Theology", desc: "'I don't see color' is often heard as a compliment but received as an erasure. Claiming not to see race does not end racism — it prevents honest conversation about it. The goal is not blindness to difference but the transformation of how difference is valued.", response: "See and celebrate cultural difference while rejecting racial hierarchy. Learn the history of race in America. Ignorance is not neutral — it perpetuates." },
  { barrier: "Centering Comfort Over Truth", desc: "Reconciliation conversations fail when one group's comfort (usually the majority group's) takes priority over truth-telling. When minority Christians share experiences of racism in the church, being told 'that didn't happen' or 'you're being divisive' is a second wound.", response: "Listen to understand, not to defend. The experience of your brother or sister in Christ is data about reality. Start by believing it, even if you don't fully understand it." },
  { barrier: "Individualism vs. Systemic Reality", desc: "Many white Christians resist the concept of systemic racism because they personally hold no racial animus. But systems can perpetuate inequity without individual malice. Acknowledging systemic sin does not require personal guilt — it requires personal responsibility.", response: "Study history. Read both W.E.B. Du Bois and Thomas Sowell. Understand the history of redlining, mass incarceration, and educational inequity. Form your own informed view." },
  { barrier: "The Politicization Trap", desc: "Race and reconciliation have become politically coded — which causes Christians to take political rather than biblical positions. When a biblical topic (justice, unity, imago dei) gets reduced to a partisan talking point, many Christians disengage precisely when engagement is most needed.", response: "Distinguish political tribes from biblical truth. Let Scripture, not party affiliation, shape your view of human dignity, justice, and what the church is called to be." },
];

const PRACTICES = [
  { title: "Cross-Cultural Friendship", desc: "Seek genuine friendship across racial lines — not for diversity points but for shared life. Attend events, visit neighborhoods, build relationships that expose you to different experiences of America and of the church.", icon: "🤝" },
  { title: "Read and Listen", desc: "Read books by Black, Latino, and Asian Christian leaders. Listen to podcasts and sermons from diverse traditions. Expand your theological and experiential frame beyond your own cultural context.", icon: "📚" },
  { title: "Attend a Different Church", desc: "Visit a church whose ethnic composition differs from your own. Come as a learner and a guest, not as an evaluator. Notice what worship looks like in a different cultural register.", icon: "⛪" },
  { title: "Lament Together", desc: "Don't rush to solutions. Sit with the grief of racial injustice in American history and present reality. Lament together — this is a biblical practice that opens the way for genuine reconciliation.", icon: "😢" },
  { title: "Support Minority-Led Organizations", desc: "Put your time and money toward organizations led by minority Christians working on justice and reconciliation. Following is as important as leading in this work.", icon: "💰" },
  { title: "Speak in Your Church", desc: "Raise the topic in your church context — in small groups, in conversation with pastors. You don't need to be an expert. You need to be someone who refuses comfortable silence on a matter the Bible addresses directly.", icon: "🎙️" },
];

const VOICES = [
  { name: "Bryan Stevenson", book: "Just Mercy", quote: "Each of us is more than the worst thing we have ever done.", tradition: "African-American, Evangelical" },
  { name: "Martin Luther King Jr.", book: "Letter from Birmingham Jail", quote: "Injustice anywhere is a threat to justice everywhere.", tradition: "African-American Baptist" },
  { name: "Jemar Tisby", book: "The Color of Compromise", quote: "Complicity with racism has always been the path of least resistance for white Christians.", tradition: "African-American, Reformed" },
  { name: "John Perkins", book: "Let Justice Roll Down", quote: "Love is the final fight.", tradition: "African-American, evangelical reconciliation pioneer" },
  { name: "Tim Keller", book: "Generous Justice", quote: "If you are not committed to the poor, you cannot say you are committed to Christ.", tradition: "White, Reformed" },
];

export default function RaceReconciliationPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "barriers" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌍</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Race & Reconciliation</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto" }}>
            The vision of Revelation 7 — every nation, tribe, and tongue worshipping together — is not just an end-times hope. It is a present calling. The church is meant to be a foretaste of that reconciled community.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "barriers" as const, label: "Barriers", icon: "🚧" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 14 }}>Voices Worth Hearing</h3>
              {VOICES.map((v, i) => (
                <div key={i} style={{ background: BG, borderRadius: 10, padding: 16, marginBottom: 10 }}>
                  <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.65, marginBottom: 8 }}>"{v.quote}"</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ color: GREEN, fontSize: 13, fontWeight: 700 }}>{v.name}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{v.book}</div>
                    </div>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{v.tradition}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "barriers" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Racial reconciliation is difficult not primarily because of bad will, but because of patterns of thought, church culture, and history that resist honest engagement. Name the barriers to address them.
              </p>
            </div>
            {BARRIERS.map((b, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === b.barrier ? null : b.barrier)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === b.barrier ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{b.barrier}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === b.barrier ? "−" : "+"}</span>
                </button>
                {expanded === b.barrier && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{b.desc}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{b.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Reconciliation is not a conversation — it is a practice. These are concrete, repeated, embodied steps that move toward the vision of the church as a foretaste of heaven.
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
