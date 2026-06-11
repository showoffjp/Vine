"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";


const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "movements" | "history" | "voices" | "journal" | "videos";

const TYPE_FILTERS = ["All", "24/7 Prayer Houses", "Missions Prayer", "Intercession Networks", "Youth & Campus", "Historical Movements"];

const MOVEMENTS = [
  {
    name: "International House of Prayer (IHOPKC)",
    abbr: "IHOPKC",
    type: "24/7 Prayer Houses",
    color: GREEN,
    location: "Kansas City, Missouri (and global network)",
    founded: "1999",
    founder: "Mike Bickle",
    description: "Founded by Mike Bickle in 1999, IHOPKC has maintained continuous 24/7 prayer and worship without interruption for over 25 years. The prayer room streams live on the internet around the clock. IHOPKC has trained thousands of intercessors and missionaries through its internship programs and Forerunner Christian Fellowship. It has launched a global network of Houses of Prayer that have spread to dozens of nations.",
    what_they_do: "Continuous worship-based intercession; missions training (IHOP University); the OneThing Conference (New Year's, 20,000+ attendees); and equipping churches worldwide in prayer and intercession.",
    key_resource: "ihopkc.org — 24/7 livestream; free teaching archive from Mike Bickle and others",
    impact: "Over 1,000 full-time staff and interns; 24/7 prayer maintained since May 7, 1999; global network of Houses of Prayer",
    initials: "IHK",
  },
  {
    name: "24-7 Prayer International",
    abbr: "24-7 Prayer",
    type: "24/7 Prayer Houses",
    color: PURPLE,
    location: "Guildford, UK (global movement)",
    founded: "1999",
    founder: "Pete Greig",
    description: "Beginning in a church basement in Chichester, England in September 1999, Pete Greig and a group of young adults began praying without stopping — and kept going for months. The movement they sparked became 24-7 Prayer International, now operating in over 120 countries. The Boiler Rooms and Prayer Spaces they planted combine contemplative prayer with radical action in some of the world's most broken communities.",
    what_they_do: "Prayer room networks; the Lectio 365 daily prayer app (over 1 million users); Boiler Rooms (communities of prayer and service in hard places); training resources; missions; the Red Moon Rising book movement.",
    key_resource: "24-7prayer.com; Lectio 365 app (free); Red Moon Rising by Pete Greig",
    impact: "Over 100 million prayer sessions logged globally; prayer rooms in prisons, hospitals, brothels, universities, and churches in 120 nations",
    initials: "247",
  },
  {
    name: "World Prayer Center",
    abbr: "WPC",
    type: "Intercession Networks",
    color: "#3B82F6",
    location: "Colorado Springs, Colorado",
    founded: "1998",
    founder: "Ted Haggard / C. Peter Wagner",
    description: "Founded in partnership with New Life Church and the World Prayer Center network, the Colorado Springs center serves as a hub for global intercession — particularly for unreached peoples, missions, and spiritual mapping. The center provides prayer intelligence on global spiritual conditions and connects intercessors worldwide through its prayer networks.",
    what_they_do: "Global prayer coordination; prayer intelligence on unreached peoples; spiritual mapping training; connecting intercessors across nations",
    key_resource: "worldprayercenter.org",
    impact: "Connected to global prayer networks in dozens of nations; resource center for the AD2000 and Beyond prayer movement",
    initials: "WPC",
  },
  {
    name: "Concerts of Prayer International",
    abbr: "COPI",
    type: "Intercession Networks",
    color: "#F59E0B",
    location: "Minneapolis, Minnesota",
    founded: "1988",
    founder: "David Bryant",
    description: "Founded by David Bryant to promote united, concerted prayer for spiritual awakening and world evangelization. Bryant's Concerts of Prayer model — bringing churches together for focused, united intercession — has been implemented in hundreds of cities. He has been one of the leading voices for the primacy of prayer in the modern missions movement.",
    what_they_do: "Training churches in united prayer events; publishing resources on prayer for revival and missions; Proclaim Hope! proclamation movement",
    key_resource: "davidbryantministries.org; Concerts of Prayer by David Bryant",
    impact: "Concerts of Prayer model implemented in hundreds of cities across America and internationally; Bryant's books have shaped a generation of prayer leaders",
    initials: "COP",
  },
  {
    name: "The Call (TheCall)",
    abbr: "TheCall",
    type: "Youth & Campus",
    color: "#EF4444",
    location: "Nashville, Tennessee (and global events)",
    founded: "2000",
    founder: "Lou Engle",
    description: "Founded by Lou Engle in 2000 with The Call DC — a gathering of over 400,000 young adults on the National Mall in Washington DC for a day of fasting and prayer. TheCall has since held massive prayer gatherings in Nashville, Bangalore, Jerusalem, South Africa, and Brazil, drawing hundreds of thousands to unified days of intercession for national and global transformation.",
    what_they_do: "Massive prayer and fasting gatherings; mobilizing young adults for intercession; prayer for justice, abortion, and moral issues; the Justin connection to Burn 24-7 movement",
    key_resource: "thecall.com; Lou Engle on YouTube",
    impact: "The Call DC (2000): over 400,000 attendees; multiple six-figure gatherings worldwide; catalyzed the 24/7 prayer movement among American youth",
    initials: "TC",
  },
  {
    name: "Burn 24-7",
    abbr: "Burn",
    type: "Youth & Campus",
    color: GREEN,
    location: "Global network (founded in Atlanta)",
    founded: "2007",
    founder: "Sean Feucht & Karl Dedmon",
    description: "A worship and prayer movement that travels globally, setting up 24-hour worship sets in churches, venues, and public spaces. Burn 24-7 events combine continuous worship music with intercession, and have been held in over 50 nations. Sean Feucht has become one of the most prominent voices in worship-based intercession in America, having also led massive outdoor worship gatherings during the COVID-19 period.",
    what_they_do: "24-hour worship and prayer sets in local churches; traveling worship gatherings; mobilizing youth and young adults; Let Us Worship movement",
    key_resource: "burn24-7.com; Let Us Worship by Sean Feucht",
    impact: "Over 50 nations; Let Us Worship gatherings attracted hundreds of thousands; active network of local Burn chapters",
    initials: "B24",
  },
  {
    name: "Herrnhut / Moravian Prayer Legacy",
    abbr: "Moravian",
    type: "Historical Movements",
    color: PURPLE,
    location: "Herrnhut, Germany (founded 1722)",
    founded: "1727",
    founder: "Count Nikolaus von Zinzendorf",
    description: "The Moravian Brethren of Herrnhut began an unbroken prayer meeting on August 13, 1727 that lasted for 100 years without ceasing. From this prayer meeting came the first large-scale Protestant mission movement — Moravian missionaries went to the Caribbean, Greenland, North America, and Africa. Their motto: May the Lamb receive the reward of His suffering. John Wesley's encounter with Moravians on a ship led to his conversion and the Methodist revival.",
    what_they_do: "The historical Moravian model inspired every modern 24/7 prayer movement. The original community at Herrnhut (Germany) still exists and welcomes visitors.",
    key_resource: "moravian.org; Count Zinzendorf: His Life and Times by John Weinlick",
    impact: "The 100-year prayer watch (1727-1827); launched the modern Protestant missions movement; inspired John Wesley, Hudson Taylor, and countless others",
    initials: "MOR",
  },
  {
    name: "World Prayer Assembly",
    abbr: "WPA",
    type: "Intercession Networks",
    color: "#10B981",
    location: "Global (hosted in different countries each gathering)",
    founded: "2012",
    founder: "Global prayer networks coalition",
    description: "A global gathering of prayer movements, networks, and prayer leaders from across the world. The World Prayer Assembly brings together thousands of prayer leaders from every continent to seek God for global awakening, unreached peoples, and the body of Christ united in intercession. The assembly is hosted by different nations and connects the full diversity of the global church in prayer.",
    what_they_do: "Global prayer leader gatherings; connecting national prayer movements; prayer intelligence on global spiritual conditions; strategy for global intercession",
    key_resource: "worldprayerassembly.com; International Prayer Council (ipcprayer.org)",
    impact: "Represents prayer networks spanning virtually every nation; catalyzes national and global prayer movements across all Christian traditions",
    initials: "WPA",
  },
  {
    name: "Awake & Alive (Campus Prayer)",
    abbr: "Campus Prayer",
    type: "Youth & Campus",
    color: "#F59E0B",
    location: "Multiple US and international universities",
    founded: "2010s (growing movement)",
    founder: "Various campus ministries",
    description: "A growing movement of early morning (5am or 6am) prayer gatherings on university campuses, inspired by the historical campus prayer revivals at Wheaton, Asbury, and other Christian colleges. Students gather in dorms, chapels, and campus spaces for intercession before classes. The Asbury Revival of 2023 was preceded by years of these campus prayer meetings and is the most recent major expression of what sustained campus intercession produces.",
    what_they_do: "Early morning campus prayer gatherings; intercession for classmates, campuses, and the world; connecting students to global prayer movements",
    key_resource: "cru.org/prayer; intervarsity.org; also check with your campus ministry",
    impact: "Connected to historic Asbury revival (2023) and preceding decades of Asbury campus prayer; growing across secular and Christian campuses worldwide",
    initials: "CAP",
  },
  {
    name: "Operation World / Global Prayer Digest",
    abbr: "Prayercast",
    type: "Missions Prayer",
    color: "#6366F1",
    location: "Global (UK-based with global network)",
    founded: "1964",
    founder: "Patrick Johnstone (Operation World)",
    description: "Operation World by Patrick Johnstone is the standard reference book for praying through every nation on earth. Published first in 1964 and updated through multiple editions (7th edition 2010), it provides detailed prayer intelligence on the church, unreached peoples, spiritual challenges, and needs of every nation. The Prayercast website and app provide daily video prayer guides for nations. Global Prayer Digest covers unreached people groups daily.",
    what_they_do: "Daily prayer guides for nations and people groups; the most comprehensive resource for informed global intercession available",
    key_resource: "operationworld.org; prayercast.com; Global Prayer Digest at global-prayer-digest.org",
    impact: "Operation World used by millions of intercessors worldwide; Prayercast videos have been viewed millions of times; foundational resource for the global prayer movement",
    initials: "OPW",
  },
];

const STATS = [
  { label: "Nations with active prayer movements", value: "120+" },
  { label: "Years IHOPKC has prayed 24/7", value: "25+" },
  { label: "Years Moravian prayer watch lasted", value: "100" },
  { label: "Operation World nations covered", value: "232" },
];

const PRAYER_HISTORY = [
  {
    id: 1,
    era: "1727-1827",
    movement: "The Moravian Prayer Watch",
    location: "Herrnhut, Germany",
    leader: "Count Zinzendorf",
    description: "On August 13, 1727, the Moravian Brethren at Herrnhut experienced a powerful outpouring of the Holy Spirit during a communion service. From this moment they launched a 24/7 prayer watch divided into 2-hour shifts, maintained without interruption for 100 years. The prayer watch became the engine of the first large-scale Protestant missions movement, sending missionaries to the Caribbean, Greenland, Africa, and North America.",
    impact: "100 years of unbroken intercessory prayer; launched modern Protestant missions; inspired John Wesley, Hudson Taylor, and every subsequent 24/7 prayer movement",
  },
  {
    id: 2,
    era: "1857-1858",
    movement: "The Prayer Meeting Revival",
    location: "New York City",
    leader: "Jeremiah Lanphier",
    description: "On September 23, 1857, Dutch Reformed layman Jeremiah Lanphier opened a noonday prayer meeting in New York City. The first meeting drew only 6 people. Within weeks it was overflowing. Within months, 10,000 prayer meetings were meeting daily across America. The financial panic of 1857 drove people to their knees, and the revival that followed became the greatest numerical awakening in American history.",
    impact: "Estimated 1 million conversions in 2 years; transformed cities from New York to Chicago; shaped the theology of the D.L. Moody generation",
  },
  {
    id: 3,
    era: "1904-1905",
    movement: "The Welsh Revival",
    location: "Wales",
    leader: "Evan Roberts",
    description: "Twenty-six-year-old Evan Roberts, after years of intense prayer and longing for revival, began preaching across Wales in late 1904. Within months, 100,000 people were converted. The revival was marked by spontaneous singing, public confession of sin, and an absence of preaching — the Holy Spirit seemed to move before any sermon was given. Crime rates plummeted. Taverns emptied. Coal miners reported that their pit ponies could not understand commands because the miners had stopped swearing.",
    impact: "100,000 conversions in 5 months; dramatic drops in crime, drunkenness, and domestic violence; influenced revival movements in India, Korea, and globally",
  },
  {
    id: 4,
    era: "1906-1909",
    movement: "The Azusa Street Revival",
    location: "Los Angeles",
    leader: "William Seymour",
    description: "Son of former slaves William Seymour led a prayer meeting at 312 Azusa Street in Los Angeles beginning April 9, 1906. What began as a small gathering broke into extraordinary manifestations of tongues, healing, and what participants described as an overwhelming divine presence. Services ran three times daily, seven days a week, for three years. People from around the world came and brought the Pentecostal experience home with them.",
    impact: "Launched the global Pentecostal movement, now the fastest-growing segment of Christianity worldwide with over 500 million adherents",
  },
  {
    id: 5,
    era: "1907-present",
    movement: "The Korean Prayer Movement",
    location: "Pyongyang/Seoul",
    leader: "Sun Chu Kil",
    description: "The Great Korean Revival of 1907 began in Pyongyang during extended prayer meetings led by missionary William Blair and Korean pastor Sun Chu Kil. Mass public confession of sin, weeping, and reconciliation between enemies marked the meetings. Out of this revival came a distinctive Korean church practice: the early morning prayer meeting (Saebyeok Gido), gathering before dawn, often at 5am, to seek God before the workday begins. This practice has never ceased.",
    impact: "Early morning prayer became a Korean church standard; South Korea now sends more Christian missionaries per capita than any nation on earth; Korean megachurches maintain early morning prayer to this day",
  },
  {
    id: 6,
    era: "1999-present",
    movement: "The 24/7 Prayer Movement",
    location: "Global",
    leader: "Pete Greig",
    description: "In September 1999, a group of young adults in Chichester, England began praying without stopping — and did not stop for months. Pete Greig, who started the prayer room, wrote the poem The Vision during one of those sessions. That poem, and the movement it sparked, spread across the world. Today 24-7 Prayer International operates in over 120 countries, combining ancient contemplative prayer practices with radical mission in the world's hardest places.",
    impact: "Continuous prayer rooms in 120 nations; over 100 million prayer sessions logged; the Lectio 365 app serves over 1 million daily users; rediscovering contemplative prayer for a post-Christian generation",
  },
];

const VOICES_PRM = [
  {
    id: 1,
    name: "E.M. Bounds",
    era: "1835-1913",
    context: "Power Through Prayer, Prayer and Praying Men",
    bio: "Edward McKendree Bounds was a Methodist Episcopal minister who served as a chaplain in the Confederate Army and spent the last 17 years of his life rising at 4am daily to pray for three hours before breakfast. He wrote 8 books on prayer, none published during his lifetime. He is the most quoted writer on intercessory prayer in the evangelical tradition.",
    quote: "Prayer is not a preparation for the battle — it is the battle.",
    contribution: "Defined the theological weight of prayer as the primary work of the church, not supplementary to it. His 8-volume work on prayer remains the deepest and most comprehensive treatment of the subject in English.",
  },
  {
    id: 2,
    name: "Andrew Murray",
    era: "1828-1917",
    context: "With Christ in the School of Prayer, The Prayer Life",
    bio: "South African Dutch Reformed pastor and author of over 240 books and pamphlets. Murray experienced personal revival during the South African prayer awakening of 1860 and spent the rest of his life teaching on prayer, holiness, and the deeper Christian life. His books circled the globe and still define intercessory prayer for millions.",
    quote: "Prayer is not monologue but dialogue. God's voice in response to mine is its most essential part.",
    contribution: "Systematized the theology of intercessory prayer in a way that was both doctrinally rigorous and practically accessible. With Christ in the School of Prayer remains the best introductory book on the subject.",
  },
  {
    id: 3,
    name: "Rees Howells",
    era: "1879-1950",
    context: "Rees Howells: Intercessor (biography by Norman Grubb)",
    bio: "Welsh coal miner turned missionary who became one of the most remarkable intercessors of the 20th century. Howells founded the Bible College of Wales and believed that intercession was a distinct calling requiring total identification with the object of prayer, full surrender of self-interest, and the ability to prevail in prayer until the answer came. During World War II he led his college community in sustained intercession for key battles.",
    quote: "The intercessor must be identified with the one for whom he prays, and so he becomes their substitute — bearing what they bear.",
    contribution: "Defined intercession as a distinct spiritual calling, not merely an intensified form of petition. His understanding of identification, agony, and authority in prayer shaped the global intercession movement.",
  },
  {
    id: 4,
    name: "Pete Greig",
    era: "b. 1966",
    context: "Red Moon Rising, God on Mute",
    bio: "British pastor, author, and co-founder of 24-7 Prayer International. Greig wrote the poem The Vision that sparked the global 24-7 prayer movement, and has since built one of the most geographically diverse prayer networks in history. His book God on Mute, written during his wife's serious illness, is the most honest and theologically thoughtful book on unanswered prayer in contemporary Christianity.",
    quote: "I am learning to love the questions themselves, as Rilke says, and to live into the answers.",
    contribution: "Founded the 24-7 Prayer movement now in 120 nations; wrote the defining contemporary book on unanswered prayer; translated ancient contemplative prayer practices for a post-Christian generation.",
  },
  {
    id: 5,
    name: "Dutch Sheets",
    era: "b. 1951",
    context: "Intercessory Prayer, Watchman Prayer",
    bio: "American pastor and teacher who has become one of the most systematic and influential teachers on intercession and spiritual warfare prayer in the charismatic-evangelical tradition. His book Intercessory Prayer provides a comprehensive biblical theology of intercession, while Watchman Prayer addresses the specific calling of those who pray for their cities and nations.",
    quote: "Intercession is not trying to get God to do something He doesn't want to do. It is partnering with God to accomplish what He does want to do.",
    contribution: "Provided the most systematic biblical theology of intercession available in the charismatic tradition; clarified the relationship between intercession, spiritual warfare, and God's sovereign will.",
  },
];

const VIDEOS_PRM = [
  { id: "KRsuCQe7aVk", title: "Forgotten God Part 1", speaker: "Francis Chan" },
  { id: "52ZXFH1wzc8", title: "Forgotten God Part 3: Theology of the Holy Spirit", speaker: "Francis Chan" },
  { id: "5vp9hV8bOjk", title: "Don't Waste Your Life", speaker: "John Piper" },
  { id: "OU69so6VjHA", title: "The Prodigal Sons", speaker: "Tim Keller" },
  { id: "3DRE5kgbYjU", title: "Shocking Youth Message", speaker: "Paul Washer" },
  { id: "mC-zw0zCCtg", title: "Supremacy of Christ and Truth", speaker: "Voddie Baucham" },
];

export default function PrayerMovementsPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_prayer-movements_tab", "movements");
  const [type, setType] = usePersistedState("vine_prayer-movements_type", "All");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<number | null>(null);

  const filtered = MOVEMENTS.filter(m => type === "All" || m.type === type);
  const movement = MOVEMENTS.find(m => m.name === selected);
  const voice = VOICES_PRM.find(v => v.id === selectedVoice);

  const [prmJEntries, setPrmJEntries] = useState<{ id: string; date: string; movement: string; inspired: string; join: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_prmj_entries") ?? "[]"); } catch { return []; }
  });
  const [prmJForm, setPrmJForm] = useState({ movement: "", inspired: "", join: "" });
  const [prmJSaved, setPrmJSaved] = useState(false);
  useEffect(() => { try { localStorage.setItem("vine_prmj_entries", JSON.stringify(prmJEntries)); } catch {} }, [prmJEntries]);
  const savePrmJEntry = () => {
    if (!prmJForm.movement.trim()) return;
    setPrmJEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...prmJForm }, ...prev]);
    setPrmJForm({ movement: "", inspired: "", join: "" });
    setPrmJSaved(true);
    setTimeout(() => setPrmJSaved(false), 2000);
  };
  const deletePrmJEntry = (id: string) => setPrmJEntries(prev => prev.filter(e => e.id !== id));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔥</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Global Prayer Movements</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            From the Moravian 100-year prayer watch to IHOP to 24-7 Prayer &mdash; God is raising up intercessors across the world. The global prayer movement is one of the most significant signs of our time.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {(["movements", "history", "voices", "journal", "videos"] as const).map(t => (
            <button type="button" key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "movements" ? "Movements" : t === "history" ? "History" : t === "voices" ? "Voices" : t === "journal" ? "📓 My Journal" : "Videos"}
            </button>
          ))}
        </div>

        {/* MOVEMENTS TAB */}
        {activeTab === "movements" && (
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
                <button type="button" key={t} onClick={() => setType(t)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${type === t ? GREEN : BORDER}`, background: type === t ? `${GREEN}15` : "transparent", color: type === t ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {t}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: movement ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((m, i) => (
                  <button type="button" key={i} onClick={() => setSelected(selected === m.name ? null : m.name)}
                    style={{ background: selected === m.name ? `${m.color}12` : CARD, border: `1px solid ${selected === m.name ? m.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${m.color}20`, border: `1px solid ${m.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: m.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                        {m.initials}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 14 }}>{m.name}</span>
                        </div>
                        <div style={{ display: "flex", gap: 8, marginTop: 3, flexWrap: "wrap" }}>
                          <span style={{ background: `${m.color}15`, color: m.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{m.type}</span>
                          <span style={{ color: MUTED, fontSize: 11 }}>Founded {m.founded}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {movement && (
                <div style={{ background: CARD, border: `1px solid ${movement.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <h2 style={{ color: movement.color, fontWeight: 900, fontSize: 17, margin: "0 0 2px" }}>{movement.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>Founded {movement.founded} &middot; {movement.location}</div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{movement.description}</p>

                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHAT THEY DO</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{movement.what_they_do}</p>
                  </div>

                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10, marginBottom: 10 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>IMPACT</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{movement.impact}</p>
                  </div>

                  <div style={{ background: `${movement.color}08`, border: `1px solid ${movement.color}20`, borderRadius: 8, padding: 10 }}>
                    <div style={{ color: movement.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>KEY RESOURCE</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{movement.key_resource}</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* HISTORY TAB */}
        {activeTab === "history" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>Historical Prayer Movements</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                The church has always prayed &mdash; but certain seasons of history have been marked by extraordinary corporate intercession that changed nations.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {PRAYER_HISTORY.map(h => (
                <div key={h.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 14 }}>
                    <div style={{ background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, borderRadius: 8, padding: "4px 12px", flexShrink: 0 }}>
                      <span style={{ color: PURPLE, fontWeight: 900, fontSize: 12 }}>{h.era}</span>
                    </div>
                    <div>
                      <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 17, margin: "0 0 2px" }}>{h.movement}</h3>
                      <div style={{ color: MUTED, fontSize: 12 }}>{h.location} &middot; Led by {h.leader}</div>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "0 0 12px" }}>{h.description}</p>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: "10px 14px" }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>IMPACT</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{h.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VOICES TAB */}
        {activeTab === "voices" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>Voices on Corporate Prayer</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                The writers and teachers who have most shaped how the church understands intercession &mdash; from E.M. Bounds rising at 4am to Pete Greig wrestling with unanswered prayer.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: voice ? "210px 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {VOICES_PRM.map(v => (
                  <button type="button" key={v.id} onClick={() => setSelectedVoice(selectedVoice === v.id ? null : v.id)}
                    style={{ background: selectedVoice === v.id ? `${PURPLE}18` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE + "60" : BORDER}`, borderRadius: 10, padding: "14px 16px", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ color: TEXT, fontWeight: 800, fontSize: 14, marginBottom: 3 }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginBottom: 4 }}>{v.era}</div>
                    <div style={{ color: PURPLE, fontSize: 11, fontStyle: "italic" }}>{v.context}</div>
                  </button>
                ))}
              </div>

              {voice && (
                <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 20, margin: "0 0 2px" }}>{voice.name}</h3>
                  <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{voice.era} &middot; {voice.context}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{voice.bio}</p>
                  <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 8, padding: "14px 18px", marginBottom: 14 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>MEMORABLE QUOTE</div>
                    <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", margin: 0, lineHeight: 1.7 }}>
                      &ldquo;{voice.quote}&rdquo;
                    </p>
                  </div>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: "12px 16px" }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>CONTRIBUTION</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{voice.contribution}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>My Prayer Movement Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Record the movement that inspired you, what stirred your heart, and how you might join what God is doing in prayer.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Movement that moved me</label>
                  <textarea rows={2} value={prmJForm.movement} onChange={e => setPrmJForm(f => ({ ...f, movement: e.target.value }))} placeholder="e.g. Moravian prayer watch, IHOPKC, 24-7 Prayer" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>What inspired me</label>
                  <textarea rows={2} value={prmJForm.inspired} onChange={e => setPrmJForm(f => ({ ...f, inspired: e.target.value }))} placeholder="What in this movement's story or practice stirs your heart?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>How I might join</label>
                  <textarea rows={2} value={prmJForm.join} onChange={e => setPrmJForm(f => ({ ...f, join: e.target.value }))} placeholder="What practical step could you take to participate in prayer?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button type="button" onClick={savePrmJEntry} style={{ alignSelf: "flex-start", background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  {prmJSaved ? "Saved ✓" : "Save Entry"}
                </button>
              </div>
            </div>
            {prmJEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {prmJEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deletePrmJEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>✕</button>
                    </div>
                    {e.movement && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Movement</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.movement}</p></div>}
                    {e.inspired && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Inspired By</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.inspired}</p></div>}
                    {e.join && <div><span style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>How I Will Join</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.join}</p></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>Recommended Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                Foundational messages on prayer, the Holy Spirit, and the Christian life &mdash; from some of the most important teachers of our generation.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: 20 }}>
              {VIDEOS_PRM.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{v.title}</div>
                    <div style={{ color: PURPLE, fontSize: 12, fontWeight: 600 }}>{v.speaker}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      </main>
      <Footer />
    </div>
  );
}
