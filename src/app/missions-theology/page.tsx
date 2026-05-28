"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Missio Dei", verse: "John 20:21", body: "The Latin phrase missio Dei (mission of God) expresses the insight that mission is not primarily a human activity organized by the church but the activity of the triune God in which the church participates. 'As the Father has sent me, I am sending you' (John 20:21). The church does not have a mission — the mission has a church. God was a missionary God before the church existed: sending the Son, sending the Spirit, sending the church into the world he so loves." },
  { title: "The Great Commission", verse: "Matthew 28:18-20", body: "'All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you' (Matthew 28:18-20). The Commission grounds the command in authority ('all authority'), defines the task ('make disciples'), specifies the scope ('all nations'), and promises the resource ('I am with you always'). It is the church's permanent mandate." },
  { title: "The Unreached and the Task Remaining", verse: "Revelation 7:9", body: "Revelation 7:9 pictures the completion of the mission: 'a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne.' This is both promise and mandate — the goal toward which missions moves. Today, missiologists estimate 3 billion people live in 'unreached people groups' — communities with no indigenous church capable of evangelizing their population without outside help. The task is not finished." },
  { title: "Word and Deed Together", verse: "Luke 4:18-19", body: "Jesus defined his own mission in Luke 4:18-19 with the words of Isaiah: 'The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free.' The mission includes both proclamation and liberation, gospel preaching and human flourishing. Separating word from deed produces either cheap social work or heartless evangelism — neither is the full mission of God." },
  { title: "Contextualization", verse: "1 Corinthians 9:22", body: "'I have become all things to all people so that by all possible means I might save some' (1 Corinthians 9:22). Paul's cross-cultural missionary strategy was radical cultural adaptation in the service of the unchanging gospel. Contextualization is the task of translating the gospel message into the forms, language, and categories of a new culture without distorting its content. It requires knowing what is essential (the gospel) and what is cultural form (which is adaptable)." },
];

const APPROACHES = [
  { name: "Church Planting", color: GREEN, icon: "⛪", desc: "The primary strategy of the apostolic mission: plant reproducing churches that can evangelize their region without continued outside dependence. A church-planting movement is the self-propagating spread of the gospel through indigenous congregations. The goal is not Western-style churches but communities of disciples that belong to the culture.", best_for: "Long-term gospel impact; unreached people groups; reproducing indigenous leadership" },
  { name: "Relief & Development", color: "#F59E0B", icon: "🌾", desc: "Addressing physical suffering and structural poverty as an expression of the kingdom and the church's love for neighbor. Done well, it listens before acting, builds dignity rather than dependence, and aims at sustainable community transformation rather than short-term charity.", best_for: "Disaster zones; chronic poverty; gaining credibility for gospel proclamation" },
  { name: "Tent-Making", color: PURPLE, icon: "🏕️", desc: "Paul's model: supporting gospel work through secular employment (tent-making) rather than mission support. Used especially in countries where formal missionary activity is restricted but professionals can live and work. The tent-maker's life is the primary evangelistic platform.", best_for: "Creative-access countries; closed or restricted nations; business as mission" },
  { name: "Short-Term Missions", color: "#EF4444", icon: "✈️", desc: "Short-term mission trips (STMs) range from 1 week to 1 year. Research on effectiveness is mixed: the greatest benefit is often to the sender, not the receiver. Done well — serving under local leadership, prioritizing skill transfer, following up — they can contribute meaningfully. Done poorly, they create dependency and disrupt local work.", best_for: "Exposure and mobilization for long-term workers; specific skill contributions to existing work" },
  { name: "Bible Translation", color: "#3B82F6", icon: "📖", desc: "Wycliffe Bible Translators estimates that over 1,600 languages still lack any portion of Scripture. Bible translation in the mother tongue has historically been the most catalytic single factor in gospel advance — when people read or hear Scripture in their heart language, the Spirit's work accelerates.", best_for: "Oral cultures; unreached ethnolinguistic groups; sustainable long-term gospel impact" },
  { name: "Diaspora Missions", color: "#10B981", icon: "🌍", desc: "Migration has brought once-unreached peoples to Western cities. The Pakistani, Somali, and Yemeni communities in London and New York are more reachable in many ways than in their countries of origin. The diaspora represents one of the greatest missiological opportunities of the 21st century.", best_for: "Urban ministry; cross-cultural engagement without international relocation" },
];

const PRACTICES = [
  { title: "Pray for the Unreached", desc: "Adopt an unreached people group in prayer. Organizations like Joshua Project provide detailed information on thousands of groups — their size, location, language, religion, and degree of gospel access. Praying regularly for a specific group creates genuine engagement with the global mission.", icon: "🙏" },
  { title: "Give Sacrificially to Missions", desc: "Global missions is chronically underfunded relative to the enormous remaining task. A small percentage of church giving in the West goes to work among the unreached. Consider increasing the missions percentage of your giving and directing it specifically to work among unreached peoples.", icon: "💝" },
  { title: "Go — Even Short-Term", desc: "Exposure to global mission changes perspective in ways that reading about it does not. Short-term trips done right — serving under local leadership, learning more than you contribute — create long-term mobilizers, senders, and sometimes career missionaries.", icon: "✈️" },
  { title: "Support Missionaries Relationally", desc: "Missionaries need more than financial support — they need genuine relationship, prayer, and connection to the sending church. Write letters. Ask specific questions. Learn what is happening in their context. Relational support sustains missionaries through the loneliness and difficulty that financial support cannot address.", icon: "💌" },
  { title: "Learn Your City's Unreached Communities", desc: "The nations have come to our cities. Find where the Somali, Afghan, or Bengali community is in your area. Learn their story. Build relationships. The global mission includes the diaspora communities in your own neighborhood.", icon: "🏙️" },
  { title: "Read Missionary Biography", desc: "Missionary biographies are among the most spiritually formative books a Christian can read. The lives of Hudson Taylor, Lottie Moon, Jim Elliot, Amy Carmichael, and Samuel Zwemer model what full commitment to the Great Commission looks like and have mobilized generations of missionaries.", icon: "📚" },
];

export default function MissionsTheologyPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "approaches" | "practices">("theology");
  const [selectedApproach, setSelectedApproach] = useState("Church Planting");

  const approach = APPROACHES.find(a => a.name === selectedApproach)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌍</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theology of Missions</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            God is a missionary God. The mission belongs to him — the church is the instrument he has chosen. Every Christian is a participant in the missio Dei, whether across the street or across the world.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "approaches" as const, label: "Approaches", icon: "🗺️" },
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

        {activeTab === "approaches" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {APPROACHES.map(a => (
                <button key={a.name} onClick={() => setSelectedApproach(a.name)}
                  style={{ padding: "8px 12px", borderRadius: 20, border: `1px solid ${selectedApproach === a.name ? a.color : BORDER}`, background: selectedApproach === a.name ? `${a.color}20` : "transparent", color: selectedApproach === a.name ? a.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {a.icon} {a.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${approach.color}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: approach.color, fontWeight: 900, fontSize: 22, marginBottom: 16 }}>{approach.name}</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }}>{approach.desc}</p>
              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>BEST FOR</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{approach.best_for}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Every Christian is a participant in the Great Commission — not all as overseas missionaries, but all as praying, giving, sending, and going members of the missionary people of God.
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
