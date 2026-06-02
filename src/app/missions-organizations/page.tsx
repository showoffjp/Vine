"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "organizations" | "fields" | "how" | "videos";

const TYPE_FILTERS = ["All", "Bible Translation", "Church Planting", "Medical & Relief", "Persecuted Church", "Short-Term Missions", "Unreached Peoples"];

const ORGS = [
  {
    name: "Wycliffe Bible Translators",
    type: "Bible Translation",
    color: GREEN,
    founded: "1942",
    founder: "Cameron Townsend",
    location: "Orlando, Florida (global)",
    url: "wycliffe.org",
    description: "The largest Bible translation organization in the world. Founded by Cameron Townsend after he discovered that the Cakchiquel people of Guatemala had no Bible in their language. Wycliffe has been involved in over 900 completed Bible translation projects and currently has active projects in 1,900+ languages. Their partner organization SIL International provides the linguistic and academic infrastructure.",
    what_they_do: "Bible translation in minority languages worldwide; linguistic analysis of unwritten languages; literacy programs; digital scripture distribution",
    impact: "Over 900 languages now have full Bible translations attributable to Wycliffe partnerships; 1,900+ active translation projects; 168+ million people who can now access Scripture in their heart language",
    how_to_engage: "Short-term trips (wycliffe.org/go); financial support; prayer (Operation World integration); career opportunities in linguistics, IT, and support roles",
    initials: "WBT",
  },
  {
    name: "International Mission Board (IMB)",
    type: "Church Planting",
    color: PURPLE,
    founded: "1845",
    founder: "Southern Baptist Convention",
    location: "Richmond, Virginia (global)",
    url: "imb.org",
    description: "The International Mission Board of the Southern Baptist Convention is the largest Protestant mission-sending agency in the world, with over 3,500 full-time missionaries in 110+ countries. IMB focuses specifically on unreached and unengaged people groups — those with no access to the gospel and no viable church planting movement. Their church-to-church model partners local SBC churches directly with missionary work overseas.",
    what_they_do: "Church planting among unreached peoples; missionary training and sending; Radical-aligned strategy for unreached; missionary kid education",
    impact: "Over 3,500 active missionaries; 110+ countries; thousands of new churches planted annually; partnership with David Platt's Radical ministry",
    how_to_engage: "Church partnerships (imb.org/serve); Journeyman program (young adult 2-year missions); career missionary paths; Lottie Moon Christmas Offering",
    initials: "IMB",
  },
  {
    name: "YWAM (Youth With A Mission)",
    type: "Short-Term Missions",
    color: "#F59E0B",
    founded: "1960",
    founder: "Loren Cunningham",
    location: "Kailua-Kona, Hawaii (300+ locations globally)",
    url: "ywam.org",
    description: "Founded by Loren Cunningham after a vision of waves of young people going to every nation, YWAM is the largest evangelical Christian missions organization in the world by total worker count. Their Discipleship Training School (DTS) — a 6-month intensive combining classroom formation with field missions — has been completed by over 1 million young adults worldwide. YWAM operates in over 180 countries.",
    what_they_do: "Discipleship Training Schools (DTS); short and long-term missions deployment; mercy ships; publishing; school of worship and arts",
    impact: "Over 18,000 staff in 180+ countries; over 1 million DTS graduates; Mercy Ships medical ministry; active in every major unreached region",
    how_to_engage: "DTS enrollment (ywam.org/dts); short-term outreach teams; career staff; financial support",
    initials: "YWM",
  },
  {
    name: "Mercy Ships",
    type: "Medical & Relief",
    color: "#3B82F6",
    founded: "1978",
    founder: "Don Stephens",
    location: "Lindale, Texas / at sea",
    url: "mercyships.org",
    description: "Mercy Ships operates hospital ships staffed by volunteer medical professionals who provide free surgical and medical care to the world's poorest nations. Their flagship ship, the Global Mercy, is the largest civilian hospital ship ever built. Since 1978, Mercy Ships has provided over $2.1 billion in free surgeries and medical care to people who would otherwise have no access to surgical treatment.",
    what_they_do: "Free surgical care (cataract, orthopedic, reconstructive, dental); medical training for local healthcare workers; infrastructure development in host nations",
    impact: "Over $2.1 billion in free medical services since 1978; over 96,000 direct surgical and dental procedures; medical training for thousands of local healthcare workers",
    how_to_engage: "Volunteer medical service (2-week to 2-year slots); financial support; prayer crews; onboard non-medical volunteer opportunities",
    initials: "MS",
  },
  {
    name: "Open Doors International",
    type: "Persecuted Church",
    color: "#EF4444",
    founded: "1955",
    founder: "Brother Andrew (Anne van der Bijl)",
    location: "Santa Ana, California / Netherlands (global)",
    url: "opendoorsusa.org",
    description: "Founded by Brother Andrew, who became famous for smuggling Bibles into Communist countries (documented in his book God Smuggler). Open Doors now serves persecuted Christians in over 60 countries — providing Bibles, training, trauma care, and advocacy. Their annual World Watch List is the definitive ranking of the 50 countries where Christians face the most persecution.",
    what_they_do: "Bible and resource distribution in restricted nations; persecution monitoring (World Watch List); trauma healing programs; legal advocacy; secret church training",
    impact: "World Watch List tracks 360 million persecuted Christians; active in 60+ countries; millions of Bibles and resources distributed annually; Secret Church partnership with David Platt",
    how_to_engage: "Prayer (World Watch List prayer guide); financial support; Secret Church participation; advocacy campaigns; opendoorsusa.org",
    initials: "OD",
  },
  {
    name: "Voice of the Martyrs",
    type: "Persecuted Church",
    color: PURPLE,
    founded: "1967",
    founder: "Richard Wurmbrand",
    location: "Bartlesville, Oklahoma (global)",
    url: "persecution.com",
    description: "Richard Wurmbrand spent 14 years imprisoned and tortured in Communist Romania for his faith before being ransomed to the West. His testimony — documented in Tortured for Christ — led to the founding of Voice of the Martyrs, which now serves persecuted Christians worldwide through Bibles, training, and relief. Their monthly magazine has a circulation of over 700,000.",
    what_they_do: "Bible distribution in restricted nations; family support for imprisoned and martyred believers; Martyr's Oath campaign; prayer mobilization",
    impact: "Over 700,000 monthly magazine subscribers; 45+ nations served; millions of Bibles and resources distributed; Tortured for Christ film",
    how_to_engage: "Monthly magazine subscription (free); Tortured for Christ book/film; Restricted Nations prayer map; Bibles Unbound giving; persecution.com",
    initials: "VOM",
  },
  {
    name: "Frontiers",
    type: "Unreached Peoples",
    color: "#10B981",
    founded: "1982",
    founder: "Greg Livingstone",
    location: "Orlando, Florida (global)",
    url: "frontiersusa.org",
    description: "Frontiers focuses exclusively on Muslim-majority peoples — arguably the largest unreached population on earth. Founded by Greg Livingstone, the organization has developed some of the most sophisticated models for church planting in Muslim contexts, including insider movements, discipleship through oral tradition, and church planting among nomadic peoples. Frontiers currently has over 1,100 workers in 50+ Muslim-majority nations.",
    what_they_do: "Sending and equipping workers to plant churches among Muslim peoples; training in Muslim evangelism and contextualization; mobilizing the Western church toward the Muslim world",
    impact: "1,100+ workers in 50+ nations; growing number of church planting movements among Muslim peoples; training thousands of church members in Muslim ministry",
    how_to_engage: "Short-term exposure trips; career missionary paths; XPLORE magazine; frontiersusa.org/explore",
    initials: "FRT",
  },
  {
    name: "Gospel for Asia (GFA World)",
    type: "Church Planting",
    color: "#F59E0B",
    founded: "1979",
    founder: "K.P. Yohannan",
    location: "Wills Point, Texas / Tiruvalla, India",
    url: "gfa.org",
    description: "Founded by K.P. Yohannan, Gospel for Asia trains and sends indigenous missionaries across South and Southeast Asia — focusing on the 10/40 Window nations where the gospel has least penetrated. Their model emphasizes indigenous church planting rather than Western missionaries — nationals reaching their own people. They have over 16,000 national missionaries on the field.",
    what_they_do: "Training and supporting indigenous missionaries; church planting in unreached villages; clean water wells; Bridge of Hope children's sponsorship; medical care",
    impact: "Over 16,000 national missionaries; 70,000+ churches and fellowships planted; 145,000+ children sponsored; millions of clean water wells provided",
    how_to_engage: "National missionary support (from $30/month); Bridge of Hope child sponsorship; well projects; gfa.org",
    initials: "GFA",
  },
  {
    name: "Samaritan's Purse",
    type: "Medical & Relief",
    color: "#EF4444",
    founded: "1970",
    founder: "Bob Pierce (continued by Franklin Graham)",
    location: "Boone, North Carolina (global)",
    url: "samaritanspurse.org",
    description: "Founded by Bob Pierce (also founder of World Vision), Samaritan's Purse operates disaster relief worldwide alongside long-term development in some of the most dangerous and remote places on earth. Led by Franklin Graham since 1979, the organization combines practical relief with evangelism. Operation Christmas Child — their annual shoeboxes for children program — reaches over 10 million children in 100+ countries every year.",
    what_they_do: "Disaster relief; emergency field hospitals; Operation Christmas Child; clean water; HIV/AIDS care; international development programs",
    impact: "Over 10 million children reached annually through OCC; emergency field hospitals deployed worldwide; major disaster response (earthquakes, floods, conflict zones); COVID-19 field hospitals in Italy and New York",
    how_to_engage: "Operation Christmas Child shoebox packing; financial donation; disaster relief volunteer teams; samaritanspurse.org",
    initials: "SP",
  },
  {
    name: "Cru (Campus Crusade for Christ)",
    type: "Short-Term Missions",
    color: GREEN,
    founded: "1951",
    founder: "Bill and Vonette Bright",
    location: "Orlando, Florida (global)",
    url: "cru.org",
    description: "One of the largest evangelical organizations in the world, Cru (formerly Campus Crusade for Christ) operates on thousands of university campuses worldwide and produces some of the most widely distributed evangelism resources in history — including the JESUS Film, which has been seen by an estimated 8 billion people in 1,900+ languages. Their campus ministry network trains millions of students in evangelism annually.",
    what_they_do: "Campus ministry worldwide; JESUS Film; summer missions programs (Cru Summer); athlete outreach (Athletes in Action); global media evangelism",
    impact: "JESUS Film: 8 billion viewings in 1,900+ languages; campus presence at thousands of universities; summer missions programs involving hundreds of thousands of students",
    how_to_engage: "Summer missions programs; campus ministry involvement; JESUS Film donations; staff roles; cru.org",
    initials: "CRU",
  },
];

const STATS = [
  { label: "Bible translation projects active", value: "1,900+" },
  { label: "Persecuted Christians globally", value: "360M" },
  { label: "Unreached people groups", value: "7,000+" },
  { label: "Nations with no evangelical church", value: "40+" },
];

const MISSION_FIELDS = [
  {
    id: 1,
    region: "Muslim World",
    subregion: "Middle East, North Africa, Central Asia",
    population: "1.8B Muslims",
    unreached: "0.1% evangelical",
    challenges: ["Visa restrictions and access limitations", "Apostasy laws criminalizing conversion"],
    openDoors: "Partially Open",
    prayer: "Pray for dreams and visions, widely reported as a common catalyst for Muslim conversion to Christ.",
  },
  {
    id: 2,
    region: "Hindu World",
    subregion: "South Asia, India",
    population: "1.2B Hindus",
    unreached: "2% Christian",
    challenges: ["Caste system creating social barriers to conversion", "Hindu nationalism and anti-conversion violence"],
    openDoors: "Partially Open",
    prayer: "Pray for Dalit and tribal movements, which have shown the greatest responsiveness to the gospel.",
  },
  {
    id: 3,
    region: "Buddhist World",
    subregion: "Southeast & East Asia",
    population: "500M Buddhists",
    unreached: "1-3% Christian",
    challenges: ["Spirit worship and ancestor veneration deeply embedded in culture", "Strong cultural identity tied to Buddhism"],
    openDoors: "More Open",
    prayer: "Pray for Thailand, Japan (0.4% Christian), and Cambodia where gospel witness is present but response is slow.",
  },
  {
    id: 4,
    region: "China",
    subregion: "East Asia",
    population: "1.4B",
    unreached: "5-10% Christian (estimates vary)",
    challenges: ["Government surveillance of religious activity", "House church raids and leadership arrests"],
    openDoors: "Restricted",
    prayer: "Pray for the underground church to remain faithful, multiply, and raise up the next generation of leaders.",
  },
  {
    id: 5,
    region: "Sub-Saharan Africa",
    subregion: "Africa south of the Sahara",
    population: "1.2B",
    unreached: "Fastest-growing church on earth",
    challenges: ["Syncretism blending Christianity with traditional religion", "Prosperity gospel distorting the gospel message"],
    openDoors: "Generally Open",
    prayer: "Pray for theological depth to match the extraordinary numerical growth of African Christianity.",
  },
  {
    id: 6,
    region: "Secular Europe",
    subregion: "Western & Northern Europe",
    population: "450M",
    unreached: "Post-Christian",
    challenges: ["Cultural Christianity without genuine conviction", "Deep secularism and spiritual apathy"],
    openDoors: "Open but Apathetic",
    prayer: "Pray for genuine revival and the raising up of European church planters from within European culture.",
  },
];

const MISSION_STEPS = [
  {
    id: 1,
    pathway: "Short-Term Trip",
    icon: "✈️",
    timeCommitment: "1-2 weeks",
    description: "Go and see. Short-term trips are not primarily about what you accomplish — they are about building vision, deepening burden, and serving alongside long-term workers who carry the real weight of the mission.",
    firstStep: "Research trip opportunities through your denomination or a vetted agency like TEAM or SIM International.",
  },
  {
    id: 2,
    pathway: "Tentmaking / Business as Mission",
    icon: "💼",
    timeCommitment: "Long-term",
    description: "Use your professional skills as your platform for access and witness. Tentmakers enter restricted-access nations as professionals — engineers, teachers, doctors — and build relationships that create gospel opportunities.",
    firstStep: "Research Business as Mission (BAM) networks and the Global Trellis community for practical guidance.",
  },
  {
    id: 3,
    pathway: "Unreached People Group Adoption",
    icon: "🌍",
    timeCommitment: "Ongoing",
    description: "Adopt one unreached people group as a church or family — pray for them regularly, give toward their gospel engagement, and go if God calls. The Joshua Project documents over 7,000 UPGs waiting for a witness.",
    firstStep: "Visit joshuaproject.net and adopt one unreached people group today as your ongoing prayer focus.",
  },
  {
    id: 4,
    pathway: "Send and Support",
    icon: "💸",
    timeCommitment: "Ongoing",
    description: "For every missionary on the field, many more senders are required. Faithful financial support and consistent prayer are not lesser forms of participation — they are essential to the global mission.",
    firstStep: "Contact your church missions committee or a trusted sending agency to connect with a missionary to support.",
  },
  {
    id: 5,
    pathway: "Diaspora Missions",
    icon: "🏙️",
    timeCommitment: "Local",
    description: "God is bringing the unreached world to Western cities. International students and immigrants from closed countries are living in your city — often more open to the gospel than they would be at home.",
    firstStep: "Connect with International Students Inc. (ISI) or visit the international student center at your nearest university.",
  },
];

const MISSIONS_VIDEOS = [
  { id: "yhiHSf_L6_E", title: "Radical — Passion 2011", preacher: "David Platt" },
  { id: "JHdB1dYAteA", title: "Don't Waste Your Life", preacher: "John Piper" },
  { id: "uuabITeO4l8", title: "Shocking Youth Message", preacher: "Paul Washer" },
  { id: "by8ykv7-A3c", title: "Supremacy of Christ and Truth", preacher: "Voddie Baucham" },
  { id: "Kxup3OS5ZhQ", title: "The Reason for God", preacher: "Tim Keller" },
  { id: "X1rPalyUshw", title: "How Great Is Our God", preacher: "Louie Giglio" },
];

export default function MissionsOrganizationsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("organizations");
  const [type, setType] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = ORGS.filter(o => type === "All" || o.type === type);
  const org = ORGS.find(o => o.name === selected);

  const TYPE_COLOR: Record<string, string> = {
    "Bible Translation": GREEN,
    "Church Planting": PURPLE,
    "Medical & Relief": "#3B82F6",
    "Persecuted Church": "#EF4444",
    "Short-Term Missions": "#F59E0B",
    "Unreached Peoples": "#10B981",
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌍</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Missions Organizations Directory</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            The most impactful evangelical missions organizations in the world &mdash; what they do, what they have accomplished, and how you can engage. Go. Give. Pray. Send.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6, width: "fit-content" }}>
          {(["organizations", "fields", "how", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "organizations" ? "Organizations" : t === "fields" ? "Mission Fields" : t === "how" ? "How to Engage" : "Videos"}
            </button>
          ))}
        </div>

        {/* Organizations Tab */}
        {activeTab === "organizations" && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 28 }}>
              {STATS.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: "14px 16px", textAlign: "center" }}>
                  <div style={{ color: GREEN, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{s.value}</div>
                  <div style={{ color: MUTED, fontSize: 11, lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {TYPE_FILTERS.map(t => (
                <button key={t} onClick={() => setType(t)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${type === t ? GREEN : BORDER}`, background: type === t ? `${GREEN}15` : "transparent", color: type === t ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {t}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: org ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((o, i) => (
                  <button key={i} onClick={() => setSelected(selected === o.name ? null : o.name)}
                    style={{ background: selected === o.name ? `${o.color}12` : CARD, border: `1px solid ${selected === o.name ? o.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${o.color}20`, border: `1px solid ${o.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: o.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                        {o.initials}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{o.name}</span>
                          <span style={{ background: `${TYPE_COLOR[o.type] || GREEN}15`, color: TYPE_COLOR[o.type] || GREEN, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{o.type}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 3 }}>Founded {o.founded} &middot; {o.url}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {org && (
                <div style={{ background: CARD, border: `1px solid ${org.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <h2 style={{ color: org.color, fontWeight: 900, fontSize: 17, margin: "0 0 2px" }}>{org.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>Founded {org.founded} by {org.founder} &middot; {org.location}</div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{org.description}</p>

                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHAT THEY DO</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{org.what_they_do}</p>
                  </div>

                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10, marginBottom: 10 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>IMPACT</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{org.impact}</p>
                  </div>

                  <div style={{ background: `${org.color}08`, border: `1px solid ${org.color}20`, borderRadius: 8, padding: 10 }}>
                    <div style={{ color: org.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>HOW TO ENGAGE</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{org.how_to_engage}</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* Mission Fields Tab */}
        {activeTab === "fields" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 28, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>🗺️</span>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                The major unreached mission fields of the world &mdash; where billions live with little or no access to the gospel. Understanding these fields is the first step toward meaningful prayer and engagement.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {MISSION_FIELDS.map(field => (
                <div key={field.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14, flexWrap: "wrap" }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{field.region}</span>
                    <span style={{ color: MUTED, fontSize: 13, paddingTop: 4 }}>{field.subregion}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 10, marginBottom: 14 }}>
                    <div style={{ background: `${BORDER}`, borderRadius: 8, padding: "8px 12px" }}>
                      <div style={{ color: MUTED, fontSize: 10, fontWeight: 700, marginBottom: 2 }}>POPULATION</div>
                      <div style={{ color: TEXT, fontSize: 14, fontWeight: 700 }}>{field.population}</div>
                    </div>
                    <div style={{ background: `${BORDER}`, borderRadius: 8, padding: "8px 12px" }}>
                      <div style={{ color: MUTED, fontSize: 10, fontWeight: 700, marginBottom: 2 }}>EVANGELICAL</div>
                      <div style={{ color: "#EF4444", fontSize: 14, fontWeight: 700 }}>{field.unreached}</div>
                    </div>
                    <div style={{ background: `${BORDER}`, borderRadius: 8, padding: "8px 12px" }}>
                      <div style={{ color: MUTED, fontSize: 10, fontWeight: 700, marginBottom: 2 }}>ACCESS</div>
                      <div style={{ color: "#F59E0B", fontSize: 13, fontWeight: 700 }}>{field.openDoors}</div>
                    </div>
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ color: MUTED, fontSize: 10, fontWeight: 700, marginBottom: 6 }}>KEY CHALLENGES</div>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      {field.challenges.map((ch, ci) => (
                        <li key={ci} style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, marginBottom: 2 }}>{ch}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>PRAYER PROMPT</div>
                    <p style={{ color: GREEN, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.65 }}>{field.prayer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* How to Engage Tab */}
        {activeTab === "how" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 28, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>🚀</span>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Every Christian is called to be part of the Great Commission &mdash; but not every Christian is called to the same role. Here are five pathways for meaningful engagement, whatever your season of life.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {MISSION_STEPS.map(step => (
                <div key={step.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 12 }}>
                    <div style={{ fontSize: 36, flexShrink: 0 }}>{step.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                        <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 17, margin: 0 }}>{step.pathway}</h3>
                        <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{step.timeCommitment}</span>
                      </div>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{step.description}</p>
                    </div>
                  </div>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>FIRST STEP</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{step.firstStep}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 28, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>🎬</span>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                The most stirring missions and gospel preaching available on video &mdash; messages that have sent thousands to the field and moved thousands more to pray and give.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 20 }}>
              {MISSIONS_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", borderRadius: 0 }}
                    src={`https://www.youtube.com/embed/${v.id}`} title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <div style={{ padding: "14px 18px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                    <span style={{ background: `${GREEN}15`, color: GREEN, padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{v.preacher}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
