"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Trinity as Community's Ground", verse: "John 17:21", body: "The Christian God is not a solitary being but a communion — Father, Son, and Spirit in eternal relation. Jesus prays that his followers would be one 'just as you are in me and I am in you' (John 17:21). Human community is not an imitation of God's community but a participation in it. The church at its deepest is not a club or an institution but an extension of the Trinitarian life into history." },
  { title: "One Another: The New Command", verse: "John 13:34-35", body: "'A new command I give you: love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another' (John 13:34-35). The NT has 59 'one another' commands — love, forgive, bear with, encourage, confess to, pray for, serve, teach, admonish. Christian community is defined not by attendance but by the quality of these mutual commitments." },
  { title: "Bearing One Another's Burdens", verse: "Galatians 6:2", body: "'Carry each other's burdens, and in this way you will fulfill the law of Christ' (Galatians 6:2). Two verses later Paul adds: 'each one should carry their own load' (6:5). The distinction matters: some burdens are appropriate to carry alone; others require community. The discernment is knowing which is which — and refusing to carry alone what community is designed to share." },
  { title: "The Body and Its Parts", verse: "1 Corinthians 12:14-20", body: "Paul's body metaphor insists on both diversity and unity. 'The body is not made up of one part but of many' (1 Corinthians 12:14). Different gifts, different personalities, different backgrounds — all needed, all honored, none superior. The person who feels like only an eye or an ear is just as essential as the person with visible gifts. The community that values only certain parts has misunderstood the body." },
  { title: "The Church as Family", verse: "1 Timothy 5:1-2", body: "Paul instructs Timothy to treat older men as fathers, younger men as brothers, older women as mothers, younger women as sisters — with absolute purity. The church is not a voluntary association of individuals; it is family. This means obligations that families have: showing up, staying through difficulty, caring for the weak, honoring the old, and nurturing the young. Family language implies permanence, not convenience." },
];

const OBSTACLES = [
  { obstacle: "Consumerism", desc: "Treating church as a product — attending when the experience meets your needs, leaving when it doesn't. The consumer asks 'what do I get?' The member asks 'what can I give?'", response: "Name the posture. Commit to a specific local church for at least a year without evaluating. Begin serving. The shift from consumption to contribution changes everything." },
  { obstacle: "Individualism", desc: "The Western assumption that the self is prior to community and that community is an optional enhancement to individual life. The NT assumes community is constitutive — you cannot be fully Christian alone.", response: "Join a small group where you are known by name. Tell a specific person your actual spiritual condition. Allow your schedule to be shaped by community commitments, not just personal priorities." },
  { obstacle: "Conflict Avoidance", desc: "Leaving rather than resolving. When conflict arises (and it always will), the conflict-avoiding person moves to a new church rather than doing the hard work of reconciliation.", response: "Matthew 18 provides the model: direct conversation first, then widening the circle. The goal is always reconciliation. Leaving to avoid hard conversations is choosing comfort over community." },
  { obstacle: "Busyness and Overcommitment", desc: "Community requires margin — time, attention, and energy to be genuinely present. Overscheduled lives crowd out the spontaneous visits, the lingering conversations, and the availability that deep community requires.", response: "Audit your schedule. Protect certain evenings for community. Be willing to say no to good things to preserve space for relational investment. Presence cannot be replaced by efficient connection." },
  { obstacle: "Past Church Hurt", desc: "Many people have been genuinely harmed by churches or church leaders — through abuse, betrayal, manipulation, or exclusion. The scars of this harm make re-engaging with community difficult and sometimes dangerous.", response: "Go slowly. Find a community with visible markers of health: accountability structures, protected space for the vulnerable, transparent leadership. Consider Christian counseling for processing the specific harm. Not every church is the one that hurt you." },
];

const MODELS = [
  {
    id: "acts2",
    name: "The Jerusalem Church",
    era: "Acts 2, 30s AD",
    color: GREEN,
    desc: "The earliest Christian community formed immediately after Pentecost. Three thousand were added in one day, and they 'devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer' (Acts 2:42). They met daily in the temple courts and from house to house. They held possessions loosely, selling property to meet each other's needs. No one claimed anything as their own.",
    features: ["Daily gathering — temple and homes", "Shared meals as central practice", "Radical economic sharing", "Teaching-centered fellowship", "Organic, rapid multiplication"],
    lesson: "The Jerusalem church shows that deep community is not a program but a way of life organized around shared devotion and shared meals. Its practices were not sustainable indefinitely in that form, but its instinct — that the community of Jesus shares everything — remains the permanent challenge to every later church.",
  },
  {
    id: "celtic",
    name: "Celtic Monasticism",
    era: "5th-8th centuries, Ireland and Scotland",
    color: "#F59E0B",
    desc: "The Celtic monastic tradition, exemplified at Iona (founded by Columba in 563) and Lindisfarne, structured community around rhythm, hospitality, and mission. Monks lived together under a rule of life, practiced rhythmic prayer (the Daily Office), welcomed pilgrims and strangers, and sent missionaries outward. The monastery was simultaneously a school, hospital, farm, scriptorium, and prayer community.",
    features: ["Rule of life governing daily rhythms", "Integration of work and prayer", "Radical hospitality to strangers", "Community as launching pad for mission", "Scholarship alongside manual labor"],
    lesson: "The Celtic tradition demonstrates that sustainable community requires structure — a shared rule of life that makes communal rhythms possible across many years. Their integration of contemplation and action, hospitality and mission, has been rediscovered repeatedly by renewal movements. The New Monasticism movement of the 21st century draws heavily from Celtic patterns.",
  },
  {
    id: "finkenwalde",
    name: "Bonhoeffer's Finkenwalde",
    era: "1935-1937, Nazi Germany",
    color: "#EF4444",
    desc: "In the crucible of Nazi Germany, Dietrich Bonhoeffer led an underground seminary called Finkenwalde, combining academic theological training with intentional communal living. Students and faculty prayed together twice daily, practiced individual and corporate confession, shared meals, and held each other accountable to spiritual disciplines. His book 'Life Together' is the direct result of this experiment — writing down what he learned about Christian community before the Gestapo shut the seminary down.",
    features: ["Twice-daily common prayer", "Corporate confession and absolution", "Shared meals as sacramental practice", "Mutual accountability in faith", "Community under external pressure"],
    lesson: "Finkenwalde demonstrates that genuine Christian community is counter-cultural — it runs against the grain of whatever dominant culture surrounds it. Bonhoeffer's central insight from the experience: community is not a human achievement but a divine gift. We must stop trying to construct community on our own terms and receive it as it comes — through Word, prayer, and table.",
  },
  {
    id: "larche",
    name: "L'Arche Communities",
    era: "1964-present, global",
    color: PURPLE,
    desc: "L'Arche was founded by Jean Vanier in France in 1964 when he invited two men with intellectual disabilities to live with him. What began as a simple act of welcome has grown to 154 communities in 38 countries. L'Arche communities are built on friendship between people with and without intellectual disabilities, sharing daily life, meals, and celebration. Vanier described L'Arche as discovering that the 'weak' are not recipients of care but bearers of gifts that transform their caregivers.",
    features: ["Shared daily life across ability levels", "The vulnerable as teachers, not only recipients", "Celebration and ritual as community-builders", "Long-term commitment to relationship", "Community across religious traditions"],
    lesson: "L'Arche embodies Paul's insight in 1 Corinthians 12 that the 'weaker' members are indispensable. Vanier's theological discovery was that proximity to weakness reveals the weakness in all of us — and that this is the beginning of genuine community. He coined the phrase 'the mystery of the poor' to describe the way marginalized people reveal God to those who spend time with them.",
  },
  {
    id: "small-groups",
    name: "The Small Group Movement",
    era: "Wesley's class meetings, 1740s onward",
    color: "#3B82F6",
    desc: "John Wesley organized Methodist converts into 'class meetings' of 12 people who met weekly for mutual accountability: 'How is it with your soul?' Each person answered in turn. Class meetings were not optional — they were the basic unit of Methodist discipleship. Members confessed sin, encouraged one another, and prayed for each other. The practice has been rediscovered repeatedly: Bonhoeffer's discipleship groups, Bill Hybels' small groups at Willow Creek, the house church movement globally.",
    features: ["Fixed membership, committed attendance", "Mutual accountability as centerpiece", "Specific question: 'How is it with your soul?'", "Confession and prayer within the group", "Leadership rotation and development"],
    lesson: "Wesley discovered what many have re-learned: transformation happens in small accountable groups, not in large anonymous gatherings. The class meeting's key feature was not content delivery but mutual self-disclosure and prayer. The question 'How is it with your soul?' assumes that each person has a soul worth examining — and that the answer deserves to be heard.",
  },
];

const PRACTICES = [
  { title: "Commit to a Specific Community", desc: "Community without commitment is spectating. Choose a local church and commit to it — not provisionally or with one foot out, but with the intention of staying through difficulty. Commitment creates the conditions in which deep community becomes possible.", icon: "🤝" },
  { title: "Move from Rows to Circles", desc: "Sunday gathering is not community — it is worship and proclamation. Community happens in smaller configurations: small groups, one-on-ones, shared meals. If your church participation is limited to Sunday rows, you have not yet entered community.", icon: "⭕" },
  { title: "Practice Hospitality", desc: "Open your home. Regular shared meals are one of the most powerful community-building practices available. The table creates space for the conversations that the church lobby does not. Start with once a month and grow from there.", icon: "🍽️" },
  { title: "Be Known Before Being Needed", desc: "Many people participate in a community's serving before they allow themselves to be known and cared for. Allowing others to know your actual life — including its difficulties — is an act of trust that deepens community.", icon: "💬" },
  { title: "Stay Through the Hard Parts", desc: "Every community has seasons that test loyalty. Conflict, disappointment, transition, and difficulty are opportunities either to leave or to deepen. The communities that become deeply formative are the ones you stayed in when staying was hard.", icon: "⚓" },
  { title: "Celebrate and Mourn Together", desc: "Community is formed in celebrations and laments as much as in ordinary weeks. Show up when people are married, when children are born, when parents die. The presence at the milestone is what distinguishes community from acquaintance.", icon: "🎉" },
];

type Tab = "theology" | "obstacles" | "models" | "practices";

export default function CommunityFormationPage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState("acts2");

  const model = MODELS.find(m => m.id === selectedModel)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⭕</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Building Christian Community</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The Christian faith was never designed to be lived alone. Community is not the optional enhancement to individual faith — it is the environment in which the faith grows and the place where it becomes visible to the world.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "obstacles" as const, label: "Obstacles", icon: "⚠️" },
            { id: "models" as const, label: "Historical Models", icon: "🏛️" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
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

        {tab === "obstacles" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These are the most common reasons Christians remain at the surface of community. Identifying which one is active in your situation is the first step toward going deeper.
              </p>
            </div>
            {OBSTACLES.map((o, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === o.obstacle ? null : o.obstacle)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === o.obstacle ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{o.obstacle}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === o.obstacle ? "−" : "+"}</span>
                </button>
                {expanded === o.obstacle && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{o.desc}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{o.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "models" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {MODELS.map(m => (
                <button key={m.id} onClick={() => setSelectedModel(m.id)}
                  style={{ width: "100%", textAlign: "left", background: selectedModel === m.id ? `${m.color}18` : CARD, border: `1px solid ${selectedModel === m.id ? m.color : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer" }}>
                  <div style={{ color: selectedModel === m.id ? m.color : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 3 }}>{m.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{m.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${model.color}40`, borderRadius: 12, padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                <h2 style={{ color: model.color, fontWeight: 900, fontSize: 20, margin: 0 }}>{model.name}</h2>
                <span style={{ background: `${model.color}18`, color: model.color, padding: "3px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700, marginLeft: 12, whiteSpace: "nowrap" }}>{model.era}</span>
              </div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{model.desc}</p>
              <div style={{ marginBottom: 16 }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>DEFINING FEATURES</div>
                {model.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
                    <span style={{ color: model.color, marginTop: 2, flexShrink: 0 }}>›</span>
                    <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: BG, borderRadius: 10, padding: 16, borderLeft: `3px solid ${model.color}` }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>WHAT IT TEACHES US TODAY</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{model.lesson}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Community does not happen accidentally — it is built through repeated practices of presence, commitment, and vulnerability. These six practices move community from surface to depth.
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
