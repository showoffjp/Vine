"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "A Command, Not a Gift", verse: "Romans 12:13", body: "'Share with the Lord's people who are in need. Practice hospitality' (Romans 12:13). The word 'practice' implies deliberate effort and repetition — not a personality trait but a discipline. The Greek word for hospitality is philoxenia: love of the stranger. It is not reserved for those with large homes, culinary gifts, or extroverted personalities. It is commanded of all believers." },
  { title: "Entertaining Angels", verse: "Hebrews 13:2", body: "'Do not forget to show hospitality to strangers, for by so doing some people have shown hospitality to angels without knowing it' (Hebrews 13:2). The reference is to Abraham and Lot, who welcomed strangers and received divine visitors. The point is not that every stranger might be an angel — but that every stranger bears the image of God. The one you welcome or turn away is more than they appear." },
  { title: "Hospitality and the Kingdom", verse: "Luke 14:12-14", body: "Jesus instructs: 'When you give a luncheon or dinner, do not invite your friends, your brothers or sisters, your relatives, or your rich neighbors... invite the poor, the crippled, the lame, the blind' (Luke 14:12-13). Kingdom hospitality is not reciprocal — it is not social networking with meals attached. It deliberately extends to those who cannot repay, which is precisely what makes it a picture of grace." },
  { title: "Table as Theology", verse: "Luke 15:1-2", body: "Jesus' table fellowship was a theological statement. He ate with sinners and tax collectors — acts of profound social inclusion in a culture where table fellowship communicated acceptance and equality. 'This man welcomes sinners and eats with them' (Luke 15:2) — said as an accusation, but it was his glory. The table was where the kingdom broke through." },
  { title: "The Church as Household", verse: "1 Peter 4:9", body: "'Offer hospitality to one another without grumbling' (1 Peter 4:9). The early church met in homes — hospitality was the infrastructure of the movement. The house church was a home opened for gathering, teaching, prayer, and shared meals. Hospitality is not supplementary to the church's mission; in the New Testament, it often is the mission." },
];

const OBSTACLES = [
  { obstacle: "My Home Isn't Nice Enough", response: "Hospitality is about welcome, not presentation. The person who eats at your table will remember how they felt, not how your kitchen looked. Perfectionism about hosting is often pride in disguise — the real question is not 'will they judge my home?' but 'will I make them feel at home?'" },
  { obstacle: "I'm Too Introverted", response: "Introversion affects how you restore your energy, not whether you can show love. Many deeply hospitable people are introverts. The discipline of hospitality is actually well-suited to introverts, who tend to prefer the depth of one-on-one conversation that a meal provides over the exhaustion of large social events." },
  { obstacle: "I Don't Know How to Cook", response: "You don't need to cook to show hospitality. Order pizza. Buy rotisserie chicken. Slice bread and buy cheese. The meal is a vehicle; welcome is the point. Some of the most remembered acts of hospitality are the simplest: a cup of tea and two hours of listening." },
  { obstacle: "I'm Too Busy", response: "The most honest version of this objection is that we do not prioritize hospitality. A three-hour meal with a neighbor replaces a three-hour evening of Netflix. The meal does not add time to your week — it redirects it toward people. The question is not whether you have time but what you do with the time you have." },
  { obstacle: "I Don't Know Who to Invite", response: "Start with your neighbors. You likely share a wall, a street, or a parking lot with people who are lonely and do not have a community. Ask: who is the person at work who always eats alone? Who moved here recently and knows no one? These are exactly the people who need an invitation most." },
];

const PRACTICES = [
  { title: "The Weekly Table", desc: "Commit to having at least one non-family person at your table each week. It can be a quick lunch or a lingering dinner. The regularity matters more than the scale.", icon: "🍽️" },
  { title: "The Standing Invitation", desc: "Identify two or three people in your life — single people, those who are new, those who struggle — and give them a standing invitation: 'We eat at 6:30 on Sundays. You are always welcome.' Then hold the standing invitation when they come.", icon: "📬" },
  { title: "Learn One Person's Story", desc: "The most hospitable thing you can do at a table is ask the right questions and then listen. Ask: 'What was your family like growing up?' 'What are you most afraid of right now?' Hospitality is interest in the actual human across from you.", icon: "👂" },
  { title: "Host When It's Inconvenient", desc: "The best hospitality happens when it is not convenient. When a friend's evening falls apart, when a neighbor is in crisis, when someone needs a place to sleep. These moments cannot be planned — only responded to with an open door.", icon: "🚪" },
  { title: "The Neighborhood Meal", desc: "Once or twice a year, host something for your immediate neighbors — a block party, a back yard meal, a holiday gathering. You don't need a budget. You need an invitation and a willingness to be surprised by who shows up.", icon: "🏘️" },
  { title: "Follow the Example of Christ", desc: "Before you set a table, remember that you sit at one. The Lord's Supper is the ultimate act of hospitality: broken body and poured-out blood shared freely with the unworthy. Every table you set is a small echo of the one he has set.", icon: "🍷" },
];

const FIGURES = [
  { name: "The Shunamite Woman", desc: "2 Kings 4:8-37. She noticed that a prophet passed by regularly and, without being asked, furnished a room in her home for him. Elisha asked what he could do in return; she wanted nothing. Hospitality as pure gift, expecting no reciprocation.", ref: "2 Kings 4:8-10" },
  { name: "Martha and Mary", desc: "Luke 10:38-42. Martha welcomed Jesus with frantic service. Mary sat at his feet and listened. Jesus commended Mary, not because hospitality doesn't matter, but because the host became so consumed with serving that she missed the guest. The purpose of the table is presence, not performance.", ref: "Luke 10:38-42" },
  { name: "Zacchaeus", desc: "Luke 19:1-10. Zacchaeus was too small to see Jesus and climbed a tree. Jesus looked up and said: 'I must stay at your house today.' Jesus invited himself — the ultimate hospitality. Zacchaeus was transformed by being hosted by Jesus, and immediately became hospitable himself: giving half his wealth to the poor.", ref: "Luke 19:1-10" },
  { name: "Priscilla and Aquila", desc: "Acts 18:1-3, Romans 16:3-5. This couple opened their home repeatedly — to Paul (who lived and worked with them), to Apollos (whom they mentored), and to a church that met in their home. Their home was the infrastructure of the early church in multiple cities.", ref: "Romans 16:3-5" },
];

const HISTORY = [
  {
    id: "desert",
    name: "Desert Fathers and Mothers",
    era: "4th-5th century",
    desc: "The Desert Fathers and Mothers of Egypt, Syria, and Palestine lived as solitaries, yet their compounds became places of constant pilgrimage. When a visitor arrived, they would break their fast to eat with the guest — a significant sacrifice in a tradition of rigorous fasting. Abba Moses famously said: receive every stranger as you would receive the Lord himself. The paradox was striking: the hermit was simultaneously a host.",
    features: ["Break fasting immediately when a guest arrives", "No penance takes precedence over welcoming the pilgrim", "Receive every stranger as bearing the image of Christ", "Welcome creates the conditions for the guest's own encounter with God"],
    lesson: "For the Desert Fathers, hospitality was not in tension with their solitary vocation — it was part of it. The discipline of the cell formed the capacity to truly welcome. The person who could be alone could also be fully present. Genuine hospitality requires an interior stability that is built in solitude, not despite it.",
  },
  {
    id: "benedict",
    name: "Rule of St. Benedict",
    era: "6th century",
    desc: "Benedict of Nursia wrote his Rule around 530 AD to govern monastic life. Chapter 53 is devoted entirely to hospitality: 'All guests who present themselves are to be welcomed as Christ, for he himself will say: I was a stranger and you welcomed me.' Monasteries following the Rule maintained a dedicated guest house and guest master. The poor and pilgrims received a preferential welcome over the wealthy.",
    features: ["Dedicated guest house and guest master in every monastery", "Reading of Scripture and prayer upon the arrival of each guest", "Feet washing for arriving guests, echoing John 13", "Preferential welcome for the poor over wealthy visitors", "Special honor shown to monks and fellow pilgrims"],
    lesson: "The Benedictine tradition institutionalized hospitality — it built welcoming into the architecture, the schedule, and the leadership of the community. You cannot rely on individual impulse alone; structures must embody the value. A guest room built into the floor plan is more likely to be used than a vague intention to have people over someday.",
  },
  {
    id: "celtic",
    name: "Celtic Monasticism",
    era: "5th-8th century",
    desc: "Irish and Scottish monasteries became way stations along pilgrimage routes, hosting travelers across Britain and the Continent. Celtic monks saw hospitality as a form of mission: strangers brought the gospel to new places and carried it forward. Patrick himself began as a slave and stranger, and his experience shaped a spirituality uniquely attuned to the outsider. The figure of the peregrini — the holy wanderer — was central to Celtic Christianity.",
    features: ["Open table for pilgrims and missionaries along the routes", "The peregrini: holy wanderers who carried the gospel as they received welcome", "See every stranger as a potential bearer of Christ to you", "Hospitality and mission as inseparable — the open door is itself proclamation"],
    lesson: "Celtic Christianity recovered the mobile, at-home-in-the-world character of Abraham's hospitality. They were rooted enough to offer home to others, but also genuinely at home in the world as it was. The hospitable community is never fully settled — it remains open because it understands itself as also passing through, on the way to a city whose builder and maker is God.",
  },
  {
    id: "dorothy",
    name: "Dorothy Day and the Catholic Worker",
    era: "20th century - present",
    desc: "Dorothy Day and Peter Maurin founded the Catholic Worker Movement in 1933, establishing Houses of Hospitality in cities across America to provide food, shelter, and community to the poor without conditions or cost. Day explicitly linked hospitality to the Eucharist: the same body of Christ broken and shared at the altar was to be broken and shared in the soup kitchen. At its height the movement ran over 200 houses worldwide.",
    features: ["Houses of Hospitality opened in every major city — no conditions attached", "No distinction between server and guest: all ate together at the same table", "Voluntary poverty as prerequisite to genuine welcome", "Explicitly connected to the Eucharist: the broken body shared at Mass and at table"],
    lesson: "Dorothy Day demonstrated that radical hospitality requires radical identification. You cannot genuinely welcome the hungry if you live at a comfortable remove from hunger. The Houses of Hospitality were not charity organizations — they were communities in which the workers and the guests lived together. Genuine welcome costs something; it cannot be outsourced from a distance.",
  },
  {
    id: "luther",
    name: "The Reformation Household",
    era: "16th century",
    desc: "The Reformation transformed the pastor's household into a model of Christian community. Martin Luther's home in Wittenberg — the former Black Cloister — became famous for its open table, where students, reformers, travelers, and refugees gathered for meals and conversation. Luther's wife Katharina von Bora managed a household that included up to 40 people at times. These conversations were later collected as the Table Talks (Tischreden).",
    features: ["The pastor's home as gathering place for theological formation", "Katharina von Bora as model of household administration and hospitality", "Welcome of religious refugees fleeing persecution across Europe", "Ordinary domestic life — cooking, conversation, children — as the context for discipleship"],
    lesson: "The Reformation household recovered a specifically Protestant form of hospitality rooted not in monastic rules but in family life. The home became a small church; the family meal became a form of discipleship. Luther's recovery of marriage and the household as a legitimate spiritual vocation created a new vision: ordinary domestic life, well-lived and generously opened, is itself a form of ministry.",
  },
];

type Tab = "theology" | "obstacles" | "history" | "practices";

export default function HospitalityPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedHistory, setSelectedHistory] = useState("desert");

  const history = HISTORY.find(h => h.id === selectedHistory)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🏡</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Practice of Hospitality</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Philoxenia: love of the stranger. Not a personality trait for the naturally social — a command for all believers. The table you set is a small echo of the one Christ has set for us.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "obstacles" as const, label: "Obstacles", icon: "🚧" },
            { id: "history" as const, label: "Through History", icon: "🕰️" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 14 }}>Biblical Hosts</h3>
              {FIGURES.map((f, i) => (
                <div key={i} style={{ background: BG, borderRadius: 10, padding: 18, marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{f.name}</div>
                    <span style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>{f.ref}</span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "obstacles" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Most Christians want to be more hospitable. The gap between intention and practice is almost always one of these five obstacles. Naming them honestly is the first step to moving past them.
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
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{o.response}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "history" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 220, flexShrink: 0 }}>
              {HISTORY.map(h => (
                <button key={h.id} onClick={() => setSelectedHistory(h.id)}
                  style={{ width: "100%", background: selectedHistory === h.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedHistory === h.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedHistory === h.id ? GREEN : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{h.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{h.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 20, margin: 0 }}>{history.name}</h2>
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{history.era}</span>
              </div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>{history.desc}</p>
              <div style={{ background: BG, borderRadius: 10, padding: 16, marginBottom: 16 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 10 }}>DEFINING FEATURES</div>
                {history.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <span style={{ color: GREEN, flexShrink: 0, marginTop: 2 }}>›</span>
                    <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>LESSON FOR TODAY</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{history.lesson}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Hospitality is not an event — it is a posture that generates events. These practices help move from good intentions to open doors.
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
