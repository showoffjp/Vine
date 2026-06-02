"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

const PIONEERS = [
  {
    id: "carey",
    name: "William Carey",
    era: "1761 – 1834",
    context: "English cobbler and pastor, India — 'Father of Modern Missions'",
    bio: "Carey's 1792 pamphlet An Enquiry into the Obligations of Christians to Use Means for the Conversion of the Heathens challenged the church's passive fatalism about missions ('if God wants to save the heathen, he will do it without us'). At the Northampton Association meeting, he famously urged ministers to expect great things from God and attempt great things for God. Within months, the Baptist Missionary Society was founded. Carey sailed to India in 1793 and never returned to England. He spent decades in Serampore, mastering Bengali, Hindi, and Sanskrit, translating the complete Bible into three languages and portions of it into 29 others, founding schools, opposing sati (widow burning), and establishing India's first college.",
    quote: "Expect great things from God. Attempt great things for God.",
    contribution: "Carey created the modern missionary movement. His Enquiry became the founding document of Protestant mission strategy; his method — learning language, translating Scripture, establishing schools, planting indigenous churches, addressing social evils — became the template for the next two centuries of missionary work. He is also credited with founding modern missiology as a discipline. Perhaps most importantly, he showed that an ordinary tradesman, without formal education or denominational backing at first, could change the world by taking the Great Commission seriously.",
  },
  {
    id: "taylor",
    name: "Hudson Taylor",
    era: "1832 – 1905",
    context: "English missionary, founder of China Inland Mission (1865)",
    bio: "Taylor arrived in China in 1854 and immediately recognized that existing mission strategy — clustering in coastal cities, maintaining Western dress and culture — would never reach inland China. He adopted Chinese dress, shaved his forehead and braided a pigtail, and moved into China's interior. Colleagues were scandalized; critics called it compromise. Taylor called it identification — becoming all things to all people that by all means some might be saved (1 Corinthians 9:22). In 1865, on a Brighton beach, overwhelmed by the spiritual need of inland China's 400 million souls, he founded the China Inland Mission with 24 shillings in his pocket. He went on to send over 800 missionaries who planted hundreds of churches across every province of China.",
    quote: "God's work done in God's way will never lack God's supply.",
    contribution: "Taylor pioneered faith missions — organizations that trust God for provision rather than guaranteeing fixed salaries. This model, radical in his day, became the template for the 'faith mission' movement that produced Wycliffe, YWAM, OM, and hundreds of other organizations. His principle of identifying with the local culture rather than imposing Western forms became foundational for contextual missions. His prayer life was legendary — he is reported to have said that he had so much to do that he could not get it done in less than five hours of daily prayer.",
  },
  {
    id: "elliot",
    name: "Jim Elliot",
    era: "1927 – 1956",
    context: "American missionary, martyred in Ecuador by the Waorani (Auca) people",
    bio: "Jim Elliot arrived in Ecuador in 1952 with four other young missionaries — Nate Saint, Roger Youderian, Ed McCully, and Pete Fleming — to reach the Waorani, an isolated Amazonian tribe known for extreme violence (their per-capita homicide rate was among the highest ever recorded). They spent months making radio contact and dropping gifts from a small plane. On January 8, 1956, all five landed on a sand bar called 'Palm Beach' and were killed by Waorani warriors. Elliot was 28. What followed is one of the most remarkable stories in mission history: Elisabeth Elliot and Rachel Saint (Nate's sister) eventually made peaceful contact with the Waorani, including those who had killed their husbands and brother. Most of the tribe became Christians.",
    quote: "He is no fool who gives what he cannot keep to gain that which he cannot lose.",
    contribution: "Elliot's martyrdom galvanized the evangelical missionary movement. The January 1956 Life magazine photo essay reached millions; Elliot's journals, edited by his wife Elisabeth and published as Through Gates of Splendor, became a defining text for missionary calling. Thousands of young people committed themselves to missionary service in the wake of his death. The subsequent conversion of the Waorani — including his killers — demonstrated that the gospel could cross even the most extreme cultural and historical barriers. The story continues to inspire costly missionary commitment.",
  },
  {
    id: "carmichael",
    name: "Amy Carmichael",
    era: "1867 – 1951",
    context: "Irish missionary, Dohnavur Fellowship, India — 55 years without furlough",
    bio: "Amy Carmichael arrived in India in 1895 and spent the remaining 55 years of her life there without once returning home — the longest recorded unbroken missionary service in modern missions. Working in South India, she learned of the practice of dedicating young girls to Hindu temples, where they lived as prostitutes in service to the gods. Against significant opposition — British colonial officials and even some missionaries considered it best not to antagonize local religious custom — Carmichael began rescuing these 'temple children.' She founded the Dohnavur Fellowship, a community that grew to house hundreds of children. She wrote more than 35 books, many during the last 20 years of her life when she was largely bedridden following a serious fall. Her writing shaped a generation of Christians in spiritual depth.",
    quote: "You can give without loving, but you cannot love without giving.",
    contribution: "Carmichael showed that holistic mission — addressing both the spiritual and social dimensions of human need — was not a compromise of the gospel but an expression of it. Her willingness to confront institutional evil (the temple prostitution system) at personal cost, her sustained presence over decades, and her refusal to take furlough reflected a depth of commitment that challenged comfortable Christianity. Her books — especially If, Rose from Brier, and Gold by Moonlight — continue to shape Christian spirituality with their unflinching treatment of suffering and surrender.",
  },
  {
    id: "moon",
    name: "Lottie Moon",
    era: "1840 – 1912",
    context: "Southern Baptist missionary, China 1873 – 1912",
    bio: "Charlotte Diggs 'Lottie' Moon arrived in China in 1873 and began working in Tengchow, where she taught in a school for girls. Dissatisfied with institutional work that kept her from direct evangelism, she eventually moved into the interior — living among the Chinese people, eating Chinese food, wearing Chinese dress — and became one of the most beloved figures in Chinese mission history. As famines ravaged Shandong Province in her final years, Lottie began giving away her food and salary to starving neighbors until she herself was starving. By 1912, she weighed only 50 pounds. Her colleagues put her on a ship back to America; she died at sea on Christmas Eve 1912, before she could reach home.",
    quote: "The needs of the people press upon me, and there is much to be done that I cannot do. I could not bear to contemplate the people here in their ignorance and wretchedness.",
    contribution: "Lottie Moon's letters home sparked what became the Lottie Moon Christmas Offering for international missions, now the largest single offering for Christian missions in the world — raising well over $150 million annually and funding thousands of missionaries. She also argued powerfully that women missionaries should be given full status and freedom to do evangelistic work, not just educational support — a position the Southern Baptist Convention eventually adopted. Her life of self-giving unto death remains one of the most powerful testimonies to the cost of missionary love.",
  },
];

const HOWTO = [
  { title: "Pray Specifically", desc: "Use a resource like Operation World, the Joshua Project (joshuaproject.net), or Prayercast to pray specifically for specific nations, people groups, and missionaries by name. Generic 'pray for the world' prayer is less powerful than focused intercession.", icon: "🙏" },
  { title: "Give to Frontline Missions", desc: "Fund workers going where the church is not. Organizations like Frontiers, TEAM, Pioneers, and SIM place workers with unreached people groups. A modest monthly gift can fund a significant portion of a missionary family's support.", icon: "💰" },
  { title: "Go Short-Term", desc: "Two-week mission trips are most valuable when they serve the long-term work, supplement relationship-based ministry, and result in ongoing engagement (prayer, giving, eventual long-term service). Go with an organization that has long-term presence.", icon: "✈️" },
  { title: "Go Long-Term", desc: "The greatest need in global missions is workers willing to commit 5-10+ years to language learning, culture, relationship-building, and church planting. Short-term trips expose you; long-term service transforms the situation.", icon: "🌍" },
  { title: "Welcome the Diaspora", desc: "The largest unreached people groups in the world are sending their own members to your city. Welcoming international students, refugees, and immigrants may be the most strategic missions investment available to a local church — the gospel goes home with them.", icon: "🤝" },
  { title: "Support Local Partners", desc: "The most effective missionary work is done by local believers from within unreached cultures. Supporting indigenous church planters, Bible translators, and local evangelists is often more strategic and cost-effective than sending Western missionaries.", icon: "🌱" },
];

type Tab = "theology" | "regions" | "pioneers" | "howto" | "videos";

export default function GlobalMissionsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [selected, setSelected] = useState<string | null>("The 10/40 Window");
  const [selectedPioneer, setSelectedPioneer] = useState("carey");

  const region = REGIONS.find(r => r.region === selected);
  const pioneer = PIONEERS.find(p => p.id === selectedPioneer)!;

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
            { id: "regions" as const, label: "Regions", icon: "🗺️" },
            { id: "pioneers" as const, label: "Pioneers", icon: "✝️" },
            { id: "howto" as const, label: "How to Engage", icon: "🚀" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
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

        {activeTab === "pioneers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {PIONEERS.map(p => (
                <button key={p.id} onClick={() => setSelectedPioneer(p.id)}
                  style={{ width: "100%", background: selectedPioneer === p.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedPioneer === p.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ color: selectedPioneer === p.id ? GREEN : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{p.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{p.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 26 }}>
              <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: 0 }}>{pioneer.name}</h2>
              <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 16 }}>{pioneer.context}</p>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>{pioneer.bio}</p>
              <blockquote style={{ margin: "0 0 20px", padding: "12px 16px", borderLeft: `3px solid ${GREEN}`, background: `${GREEN}08`, borderRadius: "0 8px 8px 0" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>"{pioneer.quote}"</p>
              </blockquote>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{pioneer.contribution}</p>
              </div>
            </div>
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
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Video teachings on global missions, unreached people groups, and the biblical mandate to take the gospel to every nation.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "4TTiA_dpsvc", title: "The Great Commission: What Jesus Actually Said", channel: "The Bible Project", description: "An animated overview of Matthew 28:18-20 in its full biblical context — the scope of 'all nations,' the authority grounding the command, and what making disciples actually entails." },
                  { videoId: "NUjs-pL3k7I", title: "Unreached People Groups: Who Are They and Why Does It Matter?", channel: "Joshua Project", description: "A clear explanation of what makes a people group 'unreached,' the geography of the 10/40 Window, and why the least-reached peoples represent the primary frontier of Christian mission." },
                  { videoId: "QqTlFSkuA4w", title: "Radical Generosity and Global Mission", channel: "David Platt", description: "Platt on the connection between sacrificial giving, simple living, and the global mission to unreached peoples — what the gospel demands of comfortable Western Christians." },
                  { videoId: "GTnN_hstHec", title: "William Carey: The Father of Modern Missions", channel: "Christianity Today", description: "The story of William Carey — English cobbler, linguist, and pioneer who went to India and never returned, translating the Bible into dozens of languages and founding modern mission methodology." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
