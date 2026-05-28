"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Heaven is a Person, Then a Place", verse: "John 14:2-3", body: "'My Father's house has many rooms... I am going there to prepare a place for you' (John 14:2). Jesus speaks of heaven as a place — but the context is relationship: 'so that you also may be where I am.' The deepest reality of heaven is not its geography but its inhabitants: the triune God, the church of all ages, the angels. C.S. Lewis put it memorably: those who seek God will find heaven; those who seek heaven may find neither." },
  { title: "The Intermediate State", verse: "Philippians 1:21-23", body: "Between physical death and bodily resurrection is an intermediate state. Paul describes it as being 'with Christ, which is better by far' (Philippians 1:23). Jesus told the dying thief: 'today you will be with me in paradise' (Luke 23:43). The intermediate state is not full Christian hope (which requires bodily resurrection) but it is genuine presence with Christ — conscious, relational, rest. The dead in Christ are not in soul sleep but in his presence." },
  { title: "The Resurrection of the Body", verse: "1 Corinthians 15:42-44", body: "Christian hope is not escape from the body into a spiritual realm — it is the resurrection of the body. The resurrection body is physical (Jesus ate, was touched, showed his wounds) but transformed and imperishable. What is sown perishable will be raised imperishable; what is sown in weakness will be raised in power. The body that will be raised is this body — not a different one, but this one glorified and freed from decay." },
  { title: "The New Jerusalem", verse: "Revelation 21:2-4", body: "John's vision of the new heaven and earth culminates in a city descending from God — the New Jerusalem. God himself dwells there; there is no more death, mourning, crying, or pain. The river of life flows from the throne; the tree of life bears fruit for the healing of the nations. It is a city (human civilization redeemed), a garden (Eden restored), and a temple (the whole space is sacred). The future is social, embodied, and full of human culture made whole." },
  { title: "Degrees of Reward", verse: "1 Corinthians 3:12-15", body: "The NT speaks of degrees of reward for believers in the age to come. Paul describes the quality of each person's work being tested by fire: some will receive a reward; others will be saved 'but only as one escaping through the flames' (1 Corinthians 3:15). Jesus speaks of those who will be 'least' and 'greatest' in the kingdom (Matthew 5:19). All believers will be present; not all will have contributed equally. Faithfulness now has eschatological consequence." },
];

const QUESTIONS = [
  { q: "Will we recognize each other in heaven?", a: "Yes — almost certainly. Jesus's resurrection body was recognizable (Thomas recognized his wounds; Mary recognized his voice). The disciples recognized Moses and Elijah at the Transfiguration without being introduced. The continuity of personal identity in the resurrection, and the social nature of the new Jerusalem, strongly imply that relationships persist. We will know and be known — likely more fully than we were able to know each other here." },
  { q: "What will we do in heaven?", a: "The question reveals how impoverished our imagination of heaven often is. The new creation is not passive floating in clouds — it is active, engaged, purposeful. Revelation depicts worship, reigning with Christ, and the nations bringing their 'glory and honor' into the city (21:26). Dallas Willard argued that the new creation will involve real work, real creativity, real administration, and real relationship — but freed from frustration, futility, and the curse." },
  { q: "Is heaven the final destination or is it the new earth?", a: "The final destination is the new heaven and new earth — a renewed, embodied, material reality. 'Heaven' as a purely spiritual realm is better understood as the intermediate state or as the presence of God rather than the final goal. Revelation 21 describes the New Jerusalem coming down from heaven to the earth — God's realm and human realm merging. The resurrection and new creation are the goal; the current heaven is the waiting room, however glorious." },
  { q: "Will there be sadness in heaven about people who are not there?", a: "This is one of the most pastorally sensitive questions about heaven. The NT does not directly address it. The answer requires holding two truths in tension: God will 'wipe every tear from their eyes' (Revelation 21:4) — implying that present grief does not persist — while also affirming that love is eternal and that the new creation is not achieved by forgetting. Perhaps our transformed understanding will allow us to see as God sees — with grief fully transformed into something that does not diminish joy." },
  { q: "What about hell?", a: "The NT teaches that not all people will be in the new creation. Jesus speaks more about hell than any other figure in Scripture — using imagery of outer darkness, fire, and separation from God. The clearest teaching is that hell is chosen: those who persistently reject God receive what they chose — existence apart from the one who is the source of all good. C.S. Lewis: 'The doors of hell are locked on the inside.' Hell is the serious weight that makes the gospel urgent." },
];

const IMPLICATIONS = [
  { title: "Suffering Has an Endpoint", desc: "Paul describes present sufferings as 'not worth comparing with the glory that will be revealed in us' (Romans 8:18). Every present pain is temporary; the coming joy is permanent and incomparably greater. The resurrection gives suffering a frame that does not make it less real but gives it an ending.", icon: "⏰" },
  { title: "Work Is Not in Vain", desc: "Paul grounds Christian labor in resurrection: 'your labor in the Lord is not in vain' (1 Corinthians 15:58). What is done in Christ has eschatological persistence. This applies to acts of love, justice, beauty, and service that appear to produce no visible result — in God's accounting, nothing done in him is wasted.", icon: "⚒️" },
  { title: "Fear of Death Loses Its Power", desc: "Where the sting of death is, there is where Christ wins (1 Corinthians 15:55). Death for the Christian is the door, not the wall. This does not make death unfearful — it remains an enemy — but it strips it of ultimate threat. The Christian can face death without despair.", icon: "🌊" },
  { title: "Relationships Matter Eternally", desc: "If we will know and be known in the new creation, then the relationships we build here have eternal significance. The friend led to Christ, the child raised in faith, the community built in love — these are not temporary projects but seeds of eternal relationships.", icon: "❤️" },
  { title: "Injustice Will Be Addressed", desc: "The new creation is a world of perfect justice — every wrong answered, every victim vindicated, every act of kindness rewarded. This does not excuse inaction now, but it does mean that the justice we cannot achieve in this life will be fully realized. God will right every wrong.", icon: "⚖️" },
  { title: "Live Now as Citizens of Heaven", desc: "Paul describes Christians as having their citizenship in heaven — not as an excuse to disengage but as an identity that shapes present life. Citizens of the new creation live differently in the old one: by its values, its ethics, its priorities, and its hope.", icon: "🌟" },
];

export default function HeavenPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "questions" | "implications">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>☁️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Heaven & Eternal Life</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Christian hope is not escapism — it is the conviction that this broken world is not the final word. God is preparing a place where every tear is wiped away and every wrong is made right.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "questions" as const, label: "Common Questions", icon: "❓" },
            { id: "implications" as const, label: "Implications for Now", icon: "🌟" },
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

        {activeTab === "questions" && (
          <div>
            {QUESTIONS.map((q, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === q.q ? null : q.q)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === q.q ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{q.q}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === q.q ? "−" : "+"}</span>
                </button>
                {expanded === q.q && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{q.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "implications" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The hope of heaven is not an excuse to disengage from the present — it is the fuel for present faithfulness. These six implications connect the eternal hope to everyday life.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {IMPLICATIONS.map((p, i) => (
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
