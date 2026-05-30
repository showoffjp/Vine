"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const METHODS = [
  {
    name: "Friendship Evangelism",
    color: "#00FF88",
    time: "Ongoing",
    best_for: "People who build deep relationships naturally",
    desc: "The most sustainable and historically fruitful method: sharing the gospel as a natural outgrowth of genuine friendship. Jesus ate with tax collectors and sinners; he was accused of being their friend. The authentic relationship creates trust, creates opportunity for honest conversation, and means the person has already seen the gospel lived before hearing it stated.",
    how: "Be genuinely present to non-Christians in your relational world. Pray for specific people by name. Ask good questions and listen well. Share your faith naturally in the context of real friendship. Invite people into your life — meals, events, church — before asking for a decision.",
    caution: "The main failure mode is becoming so focused on conversion that the friendship becomes a project rather than a genuine relationship — which non-Christians detect immediately.",
  },
  {
    name: "Story-Based (Testimony)",
    color: "#F59E0B",
    time: "5-10 minutes",
    best_for: "Introverts; those with dramatic conversion stories; relational contexts",
    desc: "Sharing the story of your own encounter with Christ — before, turning point, after. Testimony is disarming because it cannot be argued with: this is simply what happened. Paul used his testimony three times in Acts. The power is in the specificity and honesty of the story, not in its drama. An undramatic life genuinely changed by God is as compelling as a prodigal's return.",
    how: "Structure: life before Christ (keep it honest, not lurid), what happened (the encounter or process), life after (what has changed and is changing). Practice a 3-minute version. Keep it personal and concrete, not theological and generic.",
    caution: "Resist the temptation to embellish or to make the before/after contrast unrealistically sharp. Honest simplicity is more compelling than religious theater.",
  },
  {
    name: "Conversational (Questions)",
    color: "#8B5CF6",
    time: "Variable",
    best_for: "Intellectually curious people; those with objections",
    desc: "Using good questions to create a conversation about faith rather than delivering a monologue. Jesus's primary evangelistic method was asking questions: 'Who do people say I am?' 'What do you want me to do for you?' Questions honor the other person's intelligence, reveal what they actually believe, and move the conversation toward the right issues rather than the one you assumed they had.",
    how: "Ask: What do you think happens after death? What do you think about Jesus? Have you ever seriously examined the evidence for the resurrection? What would it take for you to consider Christianity? Listen longer than feels comfortable. Answer questions with questions before giving answers.",
    caution: "Questions can become evasive — a way to talk about Christianity without ever clearly presenting it. Questions should eventually lead to a clear presentation and invitation.",
  },
  {
    name: "Gospel Presentation (Bridge/Romans Road)",
    color: "#EF4444",
    time: "10-20 minutes",
    best_for: "Direct conversations with seekers; people who want clear information",
    desc: "A structured presentation of the gospel message using a progression of Bible verses. Common frameworks: The Bridge Diagram (God-Sin-Christ-Faith), Romans Road (3:23, 6:23, 5:8, 10:9-10), or the Two Ways to Live. Structured presentations are clear, teachable, and effective in contexts where the person is asking 'what must I do to be saved?'",
    how: "Know at least one framework well enough to present it conversationally. Avoid reading a script — use the structure as a skeleton, not a script. Invite a response at the end: 'Does this make sense to you? Where are you on this?'",
    caution: "Formulaic presentations can feel impersonal. Use the structure to serve the conversation, not replace it. Adapt language to the person, not the card.",
  },
  {
    name: "Digital / Online",
    color: "#3B82F6",
    time: "Ongoing",
    best_for: "Those with digital skills; people with large online audiences",
    desc: "Using social media, podcasting, YouTube, blogs, or digital communities to share the gospel at scale. The diaspora is online — including the unchurched, the spiritually curious, and the skeptical. Digital evangelism can reach people who would never enter a church building and can plant seeds across geography in ways impossible before.",
    how: "Create honest, high-quality content that addresses real questions (not just church-insider content). Engage comments and DMs relationally. Be willing to have the hard conversations. Use digital reach to direct people toward local community and in-person faith.",
    caution: "Digital reach is wide but shallow. Online proclamation almost always needs in-person discipleship to bear lasting fruit. Do not mistake viral reach for spiritual transformation.",
  },
  {
    name: "Open-Air / Street",
    color: "#DC2626",
    time: "Short encounters",
    best_for: "Bold personalities; urban settings with pedestrian traffic",
    desc: "Public proclamation of the gospel in open spaces — markets, university campuses, city centers. This was the apostles' primary method: Peter at Pentecost, Paul at the Areopagus, Paul in the synagogues. Open-air evangelism reaches people who are not in any relationship network that would bring them to a gospel conversation and creates opportunities for crowd-level proclamation.",
    how: "Use good questions to engage first rather than launching immediately into proclamation. Know the gospel content thoroughly. Be prepared for objections. Team up with others for prayer and follow-up. Connect interested people to a local church.",
    caution: "Confrontational or condemnatory tone is counterproductive and misrepresents the gospel. The goal is invitation, not argument. Not every personality or context is suited for this.",
  },
];

const ESSENTIALS = [
  { title: "Know the Gospel Content", desc: "Every method requires knowing what you're communicating. The core: everyone is separated from God by sin; Christ died and rose to provide the way back; repentance and faith unite us to him. Know this well enough to state it in 2 minutes or 20 minutes depending on context.", icon: "📖" },
  { title: "Pray for Specific People", desc: "Evangelism begins in prayer. Name people by name before God. Pray for open hearts, for opportunities, for your own courage. The work of bringing a person to faith is God's — prayer acknowledges that and asks for it.", icon: "🙏" },
  { title: "Listen More Than You Speak", desc: "Find out what the person actually believes and what their actual objections are before presenting anything. Most evangelistic failures are failures of listening. The answer to an unasked question is not effective.", icon: "👂" },
  { title: "Invite a Response", desc: "Every gospel presentation should end with an invitation: 'Would you like to receive this for yourself?' or 'Is there any reason you wouldn't commit to following Jesus today?' Many evangelists present but never ask. The invitation is not manipulative; it is loving — it takes the person seriously enough to ask for a real answer.", icon: "🤝" },
  { title: "Be Willing to Receive Rejection", desc: "Jesus was rejected. Paul was rejected. Every evangelist is rejected. Rejection of the gospel is not rejection of you — it is rejection of Christ's claim, which Christ himself is capable of handling. Fear of rejection is the single greatest obstacle to evangelism in the Western church.", icon: "💪" },
  { title: "Point to Community", desc: "Individual evangelism without community discipleship produces spiritual orphans. Every person who responds to the gospel needs to be connected to a community of believers. Your job is not just to bring someone to a decision but to bring them to a community.", icon: "⛪" },
];

export default function EvangelismMethodsPage() {
  const [activeTab, setActiveTab] = useState<"methods" | "essentials">("methods");
  const [selected, setSelected] = useState("Friendship Evangelism");

  const method = METHODS.find(m => m.name === selected)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📢</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Evangelism Methods</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Every Christian is called to share their faith. There is no single right method — there are many legitimate approaches, each suited to different people, personalities, and contexts.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "methods" as const, label: "Methods", icon: "📋" },
            { id: "essentials" as const, label: "The Essentials", icon: "🔑" },
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
                <button key={m.name} onClick={() => setSelected(m.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selected === m.name ? m.color : BORDER}`, background: selected === m.name ? `${m.color}15` : "transparent", color: selected === m.name ? m.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {m.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${method.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <h2 style={{ color: method.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{method.name}</h2>
                <div style={{ display: "flex", gap: 8, flexShrink: 0, marginLeft: 12 }}>
                  <span style={{ background: BG, color: MUTED, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{method.time}</span>
                </div>
              </div>
              <div style={{ background: `${method.color}08`, border: `1px solid ${method.color}20`, borderRadius: 8, padding: 12, marginBottom: 16 }}>
                <div style={{ color: method.color, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>BEST FOR</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{method.best_for}</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>{method.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>HOW TO DO IT</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{method.how}</p>
                </div>
                <div style={{ background: `#EF444408`, border: `1px solid #EF444420`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CAUTION</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{method.caution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "essentials" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These six essentials apply to every evangelism method. The method varies; the core stays constant.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {ESSENTIALS.map((e, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{e.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{e.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
