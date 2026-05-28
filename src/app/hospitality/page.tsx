"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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
  { title: "Learn One Person's Story", desc: "The most hospitable thing you can do at a table is ask the right questions and then listen. Ask: 'What was your family like growing up?' 'What are you most afraid of right now?' 'What's something you've always wanted to do?' Hospitality is interest in the actual human across from you.", icon: "👂" },
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

export default function HospitalityPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "obstacles" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
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
    </div>
  );
}
