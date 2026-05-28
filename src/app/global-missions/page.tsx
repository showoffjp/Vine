"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Missio Dei", verse: "John 20:21", body: "'As the Father has sent me, I am sending you' (John 20:21). Mission originates with God, not the church. Before the Great Commission, there is the sent Son — and before the sent Son, there is the Father who sends. The mission is not something the church does for God; it is something God does through the church. We are participants in the mission of a missionary God." },
  { title: "The Great Commission", verse: "Matthew 28:18-20", body: "'All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you' (Matthew 28:18-20). The command is not primarily 'go' — the main verb is 'make disciples.' Go, baptize, and teach are the three participles that describe how disciples are made. The scope is all nations (panta ta ethne)." },
  { title: "The Vision of Revelation 7", verse: "Revelation 7:9", body: "The end of the story frames the whole mission: 'a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb' (Revelation 7:9). Every unreached people group is a gap between what exists and what God has promised will exist. The mission of the church is moving history toward this vision — one person, one tribe at a time." },
  { title: "The Jerusalem-to-Ends-of-the-Earth Pattern", verse: "Acts 1:8", body: "'You will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth' (Acts 1:8). The witness spreads in concentric circles from the nearest to the furthest. The pattern is not either/or: local community and global nations are both the church's responsibility. A church that is local-only has not yet understood Acts 1:8; a church that only funds overseas missions has also not understood it." },
  { title: "The Unreached People Groups", verse: "Romans 15:20-21", body: "Paul's missionary strategy was explicitly frontier: 'It has always been my ambition to preach the gospel where Christ was not known, so that I would not be building on someone else's foundation' (Romans 15:20). Today, approximately 7,000 people groups remain with little or no access to the gospel. These 'unreached' or 'unengaged' groups represent the primary frontier of Christian mission." },
];

const REGIONS = [
  { region: "The 10/40 Window", color: "#EF4444", pop: "~4.8 billion", unreached: "~5,000 groups", desc: "The rectangular area from West Africa to East Asia between 10 and 40 degrees North latitude — where the majority of the world's Muslims, Hindus, and Buddhists live and where the most unreached people groups are concentrated. Includes the Middle East, North Africa, South Asia, and East Asia.", faiths: "Islam, Hinduism, Buddhism, Animism" },
  { region: "Sub-Saharan Africa", color: "#F59E0B", pop: "~1.1 billion", unreached: "~350 groups", desc: "The largest Christian continent by percentage (projected majority Christian by 2050), but also home to hundreds of unreached groups in the Sahel, Horn of Africa, and interior regions. The church in Africa is growing rapidly and is increasingly sending missionaries to other regions.", faiths: "Christianity (growing), Islam, Animism" },
  { region: "South Asia", color: "#8B5CF6", pop: "~2 billion", unreached: "~2,200 groups", desc: "India, Nepal, Bangladesh, Pakistan, and Sri Lanka — home to the largest concentration of Hindus and a significant Muslim population. Caste-based societies create unique barriers to both conversion and discipleship. The Indian church is rapidly growing and increasingly engaged in mission to its own unreached groups.", faiths: "Hinduism, Islam, Buddhism" },
  { region: "East Asia", color: "#3B82F6", pop: "~1.6 billion", unreached: "~850 groups", desc: "China, Japan, North Korea, and surrounding nations. The Chinese church (estimated 80-100 million believers) is one of the fastest growing and most mission-sending in the world despite severe government restrictions. Japan remains one of the least evangelized wealthy nations.", faiths: "Buddhism, Confucianism, Shintoism, atheism" },
  { region: "Muslim World", color: GREEN, pop: "~1.8 billion", unreached: "~3,000 groups", desc: "From Morocco to Indonesia, the Muslim world represents the largest single unreached bloc. Christianity is growing fastest among Muslims in Iran, Algeria, and parts of the Middle East — often through dreams and visions of Jesus, persecution, and diaspora engagement. Still the world's most underserved by evangelical mission.", faiths: "Islam (Sunni, Shia, Sufi)" },
];

const HOWTO = [
  { title: "Pray Specifically", desc: "Use a resource like Operation World, the Joshua Project (joshuaproject.net), or Prayercast to pray specifically for specific nations, people groups, and missionaries by name. Generic 'pray for the world' prayer is less powerful than focused intercession.", icon: "🙏" },
  { title: "Give to Frontline Missions", desc: "Fund workers going where the church is not. Organizations like Frontiers, TEAM, Pioneers, and SIM place workers with unreached people groups. A modest monthly gift can fund a significant portion of a missionary family's support.", icon: "💰" },
  { title: "Go Short-Term", desc: "Two-week mission trips are most valuable when they serve the long-term work, supplement relationship-based ministry, and result in ongoing engagement (prayer, giving, eventual long-term service). Go with an organization that has long-term presence.", icon: "✈️" },
  { title: "Go Long-Term", desc: "The greatest need in global missions is workers willing to commit 5-10+ years to language learning, culture, relationship-building, and church planting. Short-term trips expose you; long-term service transforms the situation.", icon: "🌍" },
  { title: "Welcome the Diaspora", desc: "The largest unreached people groups in the world are sending their own members to your city. Welcoming international students, refugees, and immigrants may be the most strategic missions investment available to a local church — the gospel goes home with them.", icon: "🤝" },
  { title: "Support Local Partners", desc: "The most effective missionary work is done by local believers from within unreached cultures. Supporting indigenous church planters, Bible translators, and local evangelists is often more strategic and cost-effective than sending Western missionaries.", icon: "🌱" },
];

export default function GlobalMissionsPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "regions" | "howto">("theology");
  const [selected, setSelected] = useState<string | null>("The 10/40 Window");

  const region = REGIONS.find(r => r.region === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌍</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Global Missions</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            'A great multitude that no one could count, from every nation, tribe, people and language, standing before the throne.' This is the vision that drives the mission. Every unreached people group is a gap between what exists and what God has promised.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "regions" as const, label: "Unreached Regions", icon: "🗺️" },
            { id: "howto" as const, label: "How to Engage", icon: "🚀" },
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
          </div>
        )}

        {activeTab === "regions" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 200, flexShrink: 0 }}>
              {REGIONS.map(r => (
                <button key={r.region} onClick={() => setSelected(r.region)}
                  style={{ width: "100%", background: selected === r.region ? `${r.color}15` : "transparent", border: `1px solid ${selected === r.region ? r.color + "60" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <span style={{ color: selected === r.region ? r.color : TEXT, fontWeight: 700, fontSize: 13 }}>{r.region}</span>
                </button>
              ))}
            </div>
            {region && (
              <div style={{ flex: 1 }}>
                <div style={{ background: CARD, border: `1px solid ${region.color}30`, borderRadius: 14, padding: 28 }}>
                  <h2 style={{ color: region.color, fontWeight: 900, fontSize: 22, marginBottom: 16 }}>{region.region}</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                    <div style={{ background: BG, borderRadius: 10, padding: 14, textAlign: "center" }}>
                      <div style={{ color: TEXT, fontWeight: 800, fontSize: 18 }}>{region.pop}</div>
                      <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>Population</div>
                    </div>
                    <div style={{ background: BG, borderRadius: 10, padding: 14, textAlign: "center" }}>
                      <div style={{ color: region.color, fontWeight: 800, fontSize: 18 }}>{region.unreached}</div>
                      <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>Unreached Groups</div>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{region.desc}</p>
                  <div style={{ background: `${region.color}08`, border: `1px solid ${region.color}25`, borderRadius: 10, padding: 14 }}>
                    <div style={{ color: region.color, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>PRIMARY FAITHS</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{region.faiths}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "howto" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Everyone can participate in global mission from where they are. These six pathways represent the full spectrum of engagement — from daily prayer to long-term service.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {HOWTO.map((h, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{h.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{h.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
