"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const VIDEOS = [
  { videoId: "Z8lkuuhVkOI", title: "Understanding Global Missions Today", channel: "Lausanne Movement", description: "A comprehensive look at the current state of global missions — where the church is making inroads, where billions remain unreached, and what faithful mission looks like in the 21st century." },
  { videoId: "fJnGJN6laqE", title: "Let the Nations Be Glad", channel: "Desiring God", description: "Based on John Piper's landmark book, this video unpacks the biblical foundation for world missions: worship is the goal of missions, and missions exists because worship doesn't. A must-watch for anyone discerning a call to the nations." },
  { videoId: "Hr3PkGXYRvI", title: "The State of World Missions", channel: "International Mission Board", description: "IMB surveys the current landscape of global Christianity — explosive church growth in Africa and Asia, the ongoing challenge of unreached people groups, and what it means to participate in the Great Commission today." },
  { videoId: "TuXTFlU-_To", title: "Unreached People Groups", channel: "Desiring God", description: "An introduction to the concept of unreached people groups — the approximately 3.2 billion people who live in ethno-linguistic groups with no indigenous access to the gospel — and why their evangelization is the central strategic challenge of global missions." },
];

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const CATEGORIES = ["All", "Unreached Peoples", "Bible Translation", "Church Planting", "Holistic Mission", "Diaspora", "Training"];

const ORGS = [
  {
    name: "Wycliffe Bible Translators",
    founded: 1942,
    category: "Bible Translation",
    color: "#F59E0B",
    size: "~6,000 workers",
    focus: "Bible translation for every language",
    description: "Founded by Cameron Townsend, who encountered a Guatemalan man who told him, 'If your God is so smart, why hasn't he learned my language?' Wycliffe exists to see a Bible translation project begun in every language that needs one. They work in partnership with SIL International (linguists) to learn minority languages, develop writing systems, and translate Scripture. Currently approximately 1,500 languages remain without any Scripture. Wycliffe's goal: a Bible translation started in every language by 2025.",
    impact: "Has contributed to Bible translation work in over 2,000 languages. Entire peoples heard Scripture in their own language for the first time through Wycliffe-affiliated work.",
    how_to_engage: "Short-term trips, financial partnership, prayer for specific language groups, linguistics training programs",
    website: "https://www.wycliffe.org/",
    initials: "WBT",
  },
  {
    name: "IMB (International Mission Board)",
    founded: 1845,
    category: "Church Planting",
    color: "#3B82F6",
    size: "~3,500 missionaries",
    focus: "Church planting among unreached peoples globally",
    description: "The missions arm of the Southern Baptist Convention and one of the largest Protestant missions organizations in the world. IMB focuses specifically on unreached people groups — the approximately 3.2 billion people in groups with no access to the gospel. They emphasize church planting movements (CPM) — discipleship patterns that empower local believers to multiply indigenous churches rapidly. Strong in South Asia, Southeast Asia, and the Muslim world.",
    impact: "Missionaries in over 100 countries. Thousands of new churches planted annually. Significant work among previously unreached Muslim-background populations.",
    how_to_engage: "Short-term trips, financial partnership, 2-year journeyman programs, career missionary pathways",
    website: "https://www.imb.org/",
    initials: "IMB",
  },
  {
    name: "Frontier Ventures (formerly USCWM)",
    founded: 1976,
    category: "Unreached Peoples",
    color: GREEN,
    size: "Staff + network",
    focus: "Research, strategy, and mobilization for unreached people groups",
    description: "Founded by Ralph Winter, who at Lausanne 1974 introduced the concept of 'unreached people groups' — the insight that the world should be divided not by geography (which countries have missionaries) but by ethno-linguistic groups (which peoples have no access to the gospel within their own cultural context). This paradigm shift redirected global missions strategy. Frontier Ventures (through Joshua Project) maintains the most comprehensive database of unreached peoples and produces research tools used by missions agencies worldwide.",
    impact: "The unreached peoples paradigm has shaped all major evangelical missions strategy since 1974. Joshua Project (frontier.org) is used by virtually every major missions agency.",
    how_to_engage: "Study the Joshua Project (joshuaproject.net), adopt an unreached people group for prayer, support researchers",
    website: "https://www.frontierventures.org/",
    initials: "FV",
  },
  {
    name: "SIM (Serving in Mission)",
    founded: 1893,
    category: "Holistic Mission",
    color: PURPLE,
    size: "~1,800 workers from 70+ countries",
    focus: "Holistic ministry: evangelism, church planting, development, and healthcare",
    description: "Founded as the Sudan Interior Mission by three men who walked into the African interior, SIM has grown into one of the most globally diverse missions organizations, with workers from over 70 countries serving in Africa, Asia, and South America. They combine evangelism and church planting with healthcare, education, and community development — a holistic missions model that addresses physical and spiritual needs together. Particularly strong in sub-Saharan Africa and South Asia.",
    impact: "Thousands of churches planted across Africa. Medical work in Niger, Ethiopia, and others. Significant work among Muslim-majority populations in the Sahel.",
    how_to_engage: "Short-term (2 weeks to 2 years), career missionaries, financial partnership, SIM media resources",
    website: "https://www.sim.org/",
    initials: "SIM",
  },
  {
    name: "Operation Mobilization (OM)",
    founded: 1957,
    category: "Church Planting",
    color: "#EF4444",
    size: "~3,700 workers from 115 countries",
    focus: "Evangelism, discipleship, church planting, and ship ministry",
    description: "Founded by George Verwer as a student movement, OM has grown into one of the most diverse evangelical missions organizations. Best known for its ship ministry (MV Logos, Doulos, Logos Hope) that visits port cities with Christian literature and evangelism, OM also plants churches, trains leaders, and mobilizes short-term workers worldwide. Particularly strong in Asia, the Middle East, and among diaspora communities.",
    impact: "Ship ministry has visited over 150 ports in 60+ countries. Thousands of churches planted. Major influence on mobilizing young people into global missions.",
    how_to_engage: "Short-term and career opportunities; ship ministry; financial partnership",
    website: "https://www.om.org/",
    initials: "OM",
  },
  {
    name: "Cru (formerly Campus Crusade)",
    founded: 1951,
    category: "Training",
    color: "#F59E0B",
    size: "~25,000 staff globally",
    focus: "Campus evangelism, leadership training, and global multiplication",
    description: "Founded by Bill and Vonette Bright at UCLA, Cru is one of the largest evangelical parachurch organizations in the world. Known for the Four Spiritual Laws presentation and the Jesus Film (which has been shown to over 9 billion people and resulted in hundreds of millions of decisions), Cru focuses on campus evangelism, discipleship training, and developing global leadership. Their Destino movement focuses on Latino students; Athletes in Action on sports. The Jesus Film Project remains one of the most significant evangelism tools in history.",
    impact: "The Jesus Film: viewed by over 9 billion people. Campus ministries on thousands of universities globally. The Four Spiritual Laws has been distributed over 2.5 billion times.",
    how_to_engage: "Campus ministry involvement, short-term missions, Jesus Film support, financial partnership",
    website: "https://www.cru.org/",
    initials: "CRU",
  },
  {
    name: "Reach Beyond (formerly HCJB Global)",
    founded: 1931,
    category: "Unreached Peoples",
    color: "#10B981",
    size: "~500 workers",
    focus: "Radio, aviation, and medicine in remote and restricted areas",
    description: "Originally established as HCJB (Heralding Christ Jesus' Blessings) shortwave radio in Ecuador, Reach Beyond has pioneered media and aviation ministry to remote and restricted access populations for nearly a century. Their shortwave broadcasts have reached people in countries closed to traditional missionaries. Mission aviation and telemedicine programs serve remote communities that have no other access. Particularly significant in the Amazon basin, Southeast Asia, and Islamic-majority countries.",
    impact: "Decades of shortwave gospel broadcasting to restricted countries. Healthcare in remote Amazon and Papua New Guinean communities. Training local broadcasters in dozens of nations.",
    how_to_engage: "Support specific workers, healthcare partnerships, media training",
    website: "https://www.reachbeyond.org/",
    initials: "RBY",
  },
  {
    name: "Back to Jerusalem (BTJ)",
    founded: 1942,
    category: "Unreached Peoples",
    color: "#A855F7",
    size: "Chinese house church network",
    focus: "Chinese church sending missionaries to the 10/40 Window",
    description: "Back to Jerusalem is a vision held by the Chinese underground church: to send missionaries westward from China through Central Asia and the Middle East to Jerusalem, evangelizing the remaining unreached Muslim, Buddhist, and Hindu peoples along the ancient Silk Road. The BTJ vision originated with Chinese house church leaders in the 1940s and was revived with intensity in the 2000s. It represents the shift of missionary sending toward the Global South. Chinese Christians, many of whom have survived severe persecution, are increasingly becoming the world's most active missionaries.",
    impact: "Hundreds of Chinese missionaries operating in Central Asian countries. Major influence on understanding the global South's central role in completing the Great Commission.",
    how_to_engage: "Prayer for Chinese missionaries; financial support; BTJ resources for education",
    website: "https://backtojerusalem.com/",
    initials: "BTJ",
  },
  {
    name: "TEAM (The Evangelical Alliance Mission)",
    founded: 1890,
    category: "Church Planting",
    color: "#00D4AA",
    size: "~350 workers",
    focus: "Long-term church planting in unreached areas",
    description: "Founded by Fredrik Franson as a vehicle to send missionaries to China, TEAM has evolved into a focused church planting organization with workers in over 20 countries. TEAM emphasizes long-term commitment, language and culture learning, and planting indigenous churches that will themselves multiply. They are particularly active in Central Asia, the Middle East, and parts of Asia where access to the gospel is severely restricted.",
    impact: "Churches planted across Asia, Africa, and the Americas. Strong emphasis on training local leaders to continue the work.",
    how_to_engage: "Career and short-term missionary opportunities, financial partnership",
    website: "https://www.teamworld.org/",
    initials: "TEM",
  },
];

export default function GlobalMissionsOrgsPage() {
  const [tab, setTab] = useState<"orgs" | "videos">("orgs");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = ORGS.filter(o => category === "All" || o.category === category);
  const org = ORGS.find(o => o.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌍</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Global Missions Organizations</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The organizations doing the most significant global missions work — from Wycliffe's Bible translation in 2,000 languages to the Chinese underground church's Back to Jerusalem movement. Find your place in the mission.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "orgs" as const, label: "Organizations", icon: "🌍" },
            { id: "videos" as const, label: "Videos", icon: "▶️" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? GREEN : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "videos" && (
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

        {tab === "orgs" && (
        <div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCategory(c)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${category === c ? GREEN : BORDER}`, background: category === c ? `${GREEN}15` : "transparent", color: category === c ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {c}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: org ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((o, i) => (
              <button key={i} onClick={() => setSelected(selected === o.name ? null : o.name)}
                style={{ background: selected === o.name ? `${o.color}12` : CARD, border: `1px solid ${selected === o.name ? o.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${o.color}20`, border: `1px solid ${o.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: o.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                    {o.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{o.name}</span>
                      <span style={{ background: `${o.color}15`, color: o.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{o.category}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>Founded {o.founded} · {o.size}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {org && (
            <div style={{ background: CARD, border: `1px solid ${org.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: `${org.color}20`, border: `1px solid ${org.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: org.color, fontWeight: 900, fontSize: 12, flexShrink: 0 }}>
                  {org.initials}
                </div>
                <div>
                  <h2 style={{ color: org.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{org.name}</h2>
                  <div style={{ color: MUTED, fontSize: 12 }}>Founded {org.founded} · {org.size}</div>
                </div>
              </div>

              <div style={{ background: `${org.color}08`, border: `1px solid ${org.color}15`, borderRadius: 8, padding: 10, marginBottom: 14 }}>
                <div style={{ color: org.color, fontWeight: 700, fontSize: 10, marginBottom: 3 }}>FOCUS</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{org.focus}</p>
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{org.description}</p>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>IMPACT</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{org.impact}</p>
              </div>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12, marginBottom: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>HOW TO ENGAGE</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{org.how_to_engage}</p>
              </div>

              <a href={org.website} target="_blank" rel="noopener noreferrer"
                style={{ background: `${org.color}15`, border: `1px solid ${org.color}30`, color: org.color, padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                🌐 Visit {org.name}
              </a>
            </div>
          )}
        </div>
        </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
