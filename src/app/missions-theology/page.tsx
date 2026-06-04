"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "approaches" | "pioneers" | "practices" | "videos";

const THEOLOGY = [
  { title: "The Missio Dei", verse: "John 20:21", body: "The Latin phrase missio Dei (mission of God) expresses the insight that mission is not primarily a human activity organized by the church but the activity of the triune God in which the church participates. 'As the Father has sent me, I am sending you' (John 20:21). The church does not have a mission — the mission has a church. God was a missionary God before the church existed: sending the Son, sending the Spirit, sending the church into the world he so loves." },
  { title: "The Great Commission", verse: "Matthew 28:18-20", body: "'All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you' (Matthew 28:18-20). The Commission grounds the command in authority ('all authority'), defines the task ('make disciples'), specifies the scope ('all nations'), and promises the resource ('I am with you always'). It is the church's permanent mandate." },
  { title: "The Unreached and the Task Remaining", verse: "Revelation 7:9", body: "Revelation 7:9 pictures the completion of the mission: 'a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne.' This is both promise and mandate — the goal toward which missions moves. Today, missiologists estimate 3 billion people live in 'unreached people groups' — communities with no indigenous church capable of evangelizing their population without outside help. The task is not finished." },
  { title: "Word and Deed Together", verse: "Luke 4:18-19", body: "Jesus defined his own mission in Luke 4:18-19 with the words of Isaiah: 'The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor.' The mission includes both proclamation and liberation, gospel preaching and human flourishing. Separating word from deed produces either cheap social work or heartless evangelism — neither is the full mission of God." },
  { title: "Contextualization", verse: "1 Corinthians 9:22", body: "'I have become all things to all people so that by all possible means I might save some' (1 Corinthians 9:22). Paul's cross-cultural missionary strategy was radical cultural adaptation in the service of the unchanging gospel. Contextualization is the task of translating the gospel message into the forms, language, and categories of a new culture without distorting its content. It requires knowing what is essential (the gospel) and what is cultural form (which is adaptable)." },
];

const APPROACHES = [
  { name: "Church Planting", color: GREEN, icon: "⛪", desc: "The primary strategy of the apostolic mission: plant reproducing churches that can evangelize their region without continued outside dependence. A church-planting movement is the self-propagating spread of the gospel through indigenous congregations. The goal is not Western-style churches but communities of disciples that belong to the culture.", best_for: "Long-term gospel impact; unreached people groups; reproducing indigenous leadership" },
  { name: "Relief & Development", color: "#F59E0B", icon: "🌾", desc: "Addressing physical suffering and structural poverty as an expression of the kingdom and the church's love for neighbor. Done well, it listens before acting, builds dignity rather than dependence, and aims at sustainable community transformation rather than short-term charity.", best_for: "Disaster zones; chronic poverty; gaining credibility for gospel proclamation" },
  { name: "Tent-Making", color: PURPLE, icon: "🏕️", desc: "Paul's model: supporting gospel work through secular employment (tent-making) rather than mission support. Used especially in countries where formal missionary activity is restricted but professionals can live and work. The tent-maker's life is the primary evangelistic platform.", best_for: "Creative-access countries; closed or restricted nations; business as mission" },
  { name: "Short-Term Missions", color: "#EF4444", icon: "✈️", desc: "Short-term mission trips (STMs) range from 1 week to 1 year. Research on effectiveness is mixed: the greatest benefit is often to the sender, not the receiver. Done well — serving under local leadership, prioritizing skill transfer, following up — they can contribute meaningfully.", best_for: "Exposure and mobilization for long-term workers; specific skill contributions to existing work" },
  { name: "Bible Translation", color: "#3B82F6", icon: "📖", desc: "Wycliffe Bible Translators estimates that over 1,600 languages still lack any portion of Scripture. Bible translation in the mother tongue has historically been the most catalytic single factor in gospel advance — when people read or hear Scripture in their heart language, the Spirit's work accelerates.", best_for: "Oral cultures; unreached ethnolinguistic groups; sustainable long-term gospel impact" },
  { name: "Diaspora Missions", color: "#10B981", icon: "🌍", desc: "Migration has brought once-unreached peoples to Western cities. The Pakistani, Somali, and Yemeni communities in London and New York are more reachable in many ways than in their countries of origin. The diaspora represents one of the greatest missiological opportunities of the 21st century.", best_for: "Urban ministry; cross-cultural engagement without international relocation" },
];

const PIONEERS = [
  {
    id: "carey",
    name: "William Carey",
    era: "1761-1834",
    color: "#3B82F6",
    field: "India",
    quote: "Expect great things from God; attempt great things for God.",
    bio: "Carey was a cobbler-turned-Baptist minister who challenged the church with the question: is the Great Commission still binding? His 1792 pamphlet An Enquiry into the Obligations of Christians to Use Means for the Conversion of the Heathens is the founding document of the modern missionary movement. He sailed to India in 1793 and spent 41 years there. He translated the Bible into Bengali, Sanskrit, and numerous other Indian languages; established the first printing press in India; founded a college; campaigned against sati (widow-burning); and refused to return to England even when offered significant honors. His wife Dorothy suffered severe mental illness throughout his ministry — a dimension of his suffering rarely told.",
    legacy: "Called the 'father of modern missions.' His vision of systematic, long-term gospel work among specific peoples established the template for Protestant missions for two centuries. His practical approach — learn the language, translate the Scriptures, train local leaders — is still the model.",
  },
  {
    id: "taylor",
    name: "Hudson Taylor",
    era: "1832-1905",
    color: "#F59E0B",
    field: "China",
    quote: "God's work done in God's way will never lack God's supply.",
    bio: "Taylor founded the China Inland Mission (1865), the first 'faith mission' — a mission society that required no guaranteed salary and trusted God for all provision. He was the first Westerner to adopt Chinese dress and customs as a missionary strategy, which was deeply controversial but profoundly effective. He pioneered the interior of China, a region that had resisted Western missions. He suffered enormous personal loss (two wives, four children died in China), physical collapse, and severe depression, yet continued for 51 years. His biography by his son Howard Taylor (Hudson Taylor's Spiritual Secret) became one of the most widely read missionary biographies in history.",
    legacy: "Taylor's China Inland Mission model — faith funding, cultural adaptation, penetration of unreached interior regions — was replicated globally. His emphasis on the interior of countries (not just coastal ports) transformed missionary strategy. His 'Spiritual Secret' (abiding in Christ) became a touchstone of evangelical spirituality.",
  },
  {
    id: "carmichael",
    name: "Amy Carmichael",
    era: "1867-1951",
    color: "#EC4899",
    field: "India (Tamil Nadu)",
    quote: "You can give without loving, but you cannot love without giving.",
    bio: "Carmichael served in India for 55 years without a furlough. She founded the Dohnavur Fellowship to rescue children from temple prostitution — a dangerous, radical act in that cultural context. She did not follow the traditional missionary model of preaching to adults but focused entirely on child protection and education. The last 20 years of her life were spent bedridden after a fall. During this period she wrote 35 books. Her writing on suffering — particularly Things as They Are, which honestly described the lack of visible missionary success — was considered scandalous at the time. She became one of the most beloved Christian writers on prayer, suffering, and discipleship.",
    legacy: "Pioneer of child protection in missionary work. Her model of community care for rescued children anticipates modern child rights advocacy. Her books on suffering have sustained millions.",
  },
  {
    id: "elliot",
    name: "Jim Elliot",
    era: "1927-1956",
    color: "#EF4444",
    field: "Ecuador (Auca/Waorani)",
    quote: "He is no fool who gives what he cannot keep to gain what he cannot lose.",
    bio: "Elliot was one of five missionaries killed by the Auca (now Waorani) people of Ecuador in January 1956 while attempting first contact. He was 28 years old. His wife Elisabeth Elliot subsequently returned to live among the Waorani — taking her daughter with her — and the people who killed her husband were converted. Elisabeth's book Through Gates of Splendor told the story and mobilized a generation of missionaries. Jim's journals (published as Shadow of the Almighty) reveal a young man of exceptional spiritual depth and intentionality who had committed himself fully to Christ before his death.",
    legacy: "The five missionaries' deaths in 1956 were the most reported missionary event in the 20th century. The subsequent conversion of the Auca people — including the man who killed Jim Elliot — is one of the most dramatic demonstrations of the gospel's power in modern missions.",
  },
  {
    id: "moon",
    name: "Lottie Moon",
    era: "1840-1912",
    color: GREEN,
    field: "China",
    quote: "Surely there can be no greater joy than that of saving souls.",
    bio: "Charlotte 'Lottie' Moon was a Southern Baptist missionary to China from 1873 until her death. She lived among the Chinese people (rather than in the foreign missionary compound), adopted Chinese dress and customs, and planted churches in previously unreached areas of northern China. During the Chinese famine of 1906-07, she gave away her food and money until she was herself starving. She died on the ship returning to America, having given everything. The Southern Baptist Convention's annual Christmas offering for missions — now the Lottie Moon Christmas Offering, raising over $150 million annually — is named in her honor.",
    legacy: "The Lottie Moon Christmas Offering has become one of the largest mission funding mechanisms in history, sending thousands of missionaries worldwide. Her model of full cultural identification was radical for her era.",
  },
  {
    id: "zwemer",
    name: "Samuel Zwemer",
    era: "1867-1952",
    color: PURPLE,
    field: "Arabia / Islam",
    quote: "The unoccupied fields of the world — their need and their claim. Humanity is still waiting for the word that will set the captives free.",
    bio: "Zwemer was an American Reformed missionary who dedicated his life to evangelism among Muslims in Arabia, Egypt, and globally — and was profoundly unsuccessful by most missionary measures. He and his wife lost two daughters to heat in Arabia within 8 days. Few Muslims converted. But Zwemer's persistent, respectful, scholarly engagement with Islam over 50 years established the field of Islamic studies within Christian missions. He founded the journal The Muslim World, wrote over 50 books on Islam and missions, and trained the next generation of workers among Muslims. He is called 'the apostle to Islam.'",
    legacy: "Zwemer established Christian missiology toward Islam as an academic and practical discipline. His respectful engagement — genuinely learning Arabic, studying the Quran, and loving Muslims as persons — was a model far ahead of his time.",
  },
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
  const [tab, setTab] = usePersistedState<Tab>("vine_missions-theology_tab", "theology");
  const [selectedApproach, setSelectedApproach] = useState("Church Planting");
  const [selectedPioneer, setSelectedPioneer] = useState("carey");

  const approach = APPROACHES.find(a => a.name === selectedApproach)!;
  const pioneer = PIONEERS.find(p => p.id === selectedPioneer)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
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
            { id: "theology" as Tab, label: "Theology", icon: "📖" },
            { id: "approaches" as Tab, label: "Approaches", icon: "🗺️" },
            { id: "pioneers" as Tab, label: "Pioneers", icon: "🌟" },
            { id: "practices" as Tab, label: "Practices", icon: "🛠️" },
            { id: "videos" as Tab, label: "Videos", icon: "🎬" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "approaches" && (
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

        {tab === "pioneers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 185, flexShrink: 0 }}>
              {PIONEERS.map(p => (
                <button key={p.id} onClick={() => setSelectedPioneer(p.id)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${selectedPioneer === p.id ? p.color : BORDER}`, background: selectedPioneer === p.id ? `${p.color}12` : "transparent", color: selectedPioneer === p.id ? p.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", marginBottom: 6, textAlign: "left" }}>
                  {p.name}
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${pioneer.color}30`, borderRadius: 14, padding: 26 }}>
                <div style={{ marginBottom: 16 }}>
                  <h2 style={{ color: pioneer.color, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{pioneer.name}</h2>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ color: MUTED, fontSize: 13 }}>{pioneer.era}</span>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{pioneer.field}</span>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${pioneer.color}`, paddingLeft: 16, margin: "0 0 18px 0" }}>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>"{pioneer.quote}"</p>
                </blockquote>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 18 }}>{pioneer.bio}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>LASTING LEGACY</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{pioneer.legacy}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
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

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { videoId: "Z8lkuuhVkOI", title: "The Biblical Foundation of Missions", channel: "John Piper Desiring God", description: "John Piper traces the biblical foundation of missions from creation through the Great Commission, showing that God's missionary purpose runs through the whole of Scripture." },
              { videoId: "fJnGJN6laqE", title: "Let the Nations Be Glad", channel: "Desiring God - John Piper", description: "Based on his landmark book, John Piper presents the theological vision of missions — that the goal of missions is the worship of God among all peoples, and that prayer is the primary work." },
              { videoId: "TuXTFlU-_To", title: "Missions and the Great Commission", channel: "Ligonier Ministries", description: "Ligonier Ministries examines the Great Commission as the church's permanent mandate, exploring what it means to make disciples of all nations in our generation." },
              { videoId: "sxMhDVkdULw", title: "Why Missions? The Heart of God for the Nations", channel: "Tim Keller", description: "Tim Keller explores why God's heart for the nations is not a peripheral theme but central to the gospel itself, and what that means for the church's calling in the world." },
            ].map(v => (
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
      </div>
      <Footer />
    </div>
  );
}
