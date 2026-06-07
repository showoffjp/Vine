"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const VIDEOS = [
  { videoId: "gV9JugO_5Mk", title: "Understanding Global Missions Today", channel: "Lausanne Movement", description: "A comprehensive look at the current state of global missions — where the church is making inroads, where billions remain unreached, and what faithful mission looks like in the 21st century." },
  { videoId: "4Eg_di-O8nM", title: "Let the Nations Be Glad", channel: "Desiring God", description: "Based on John Piper's landmark book, this video unpacks the biblical foundation for world missions: worship is the goal of missions, and missions exists because worship doesn't. A must-watch for anyone discerning a call to the nations." },
  { videoId: "rtkS_8VWfB0", title: "The State of World Missions", channel: "International Mission Board", description: "IMB surveys the current landscape of global Christianity — explosive church growth in Africa and Asia, the ongoing challenge of unreached people groups, and what it means to participate in the Great Commission today." },
  { videoId: "GnCscN9LiXM", title: "Unreached People Groups", channel: "Desiring God", description: "An introduction to the concept of unreached people groups — the approximately 3.2 billion people who live in ethno-linguistic groups with no indigenous access to the gospel — and why their evangelization is the central strategic challenge of global missions." },
];

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const CATEGORIES = ["All", "Unreached Peoples", "Bible Translation", "Church Planting", "Holistic Mission", "Diaspora", "Training"];

type Tab = "orgs" | "biblical" | "involved" | "journal" | "videos";

const BIBLICAL_BASIS = [
  { ref: "Genesis 12:1-3", color: GREEN, title: "The Abrahamic Promise: All Nations Blessed", content: "The Great Commission of the Old Testament. God promises Abraham that 'all peoples on earth will be blessed through you' — this is not national favoritism but global mission from the start. Paul interprets this in Galatians 3:8 as the gospel announced in advance: God would justify the Gentiles by faith. Every missions organization today is the fulfillment of a 4,000-year-old promise. The blessing was never meant to stop at Israel — it was always meant to flow outward through Israel to every nation, tribe, people, and language." },
  { ref: "Isaiah 49:6", color: PURPLE, title: "Light to the Nations", content: "'It is too small a thing for you to be my servant to restore the tribes of Jacob and bring back those of Israel I have kept. I will also make you a light for the Gentiles, that my salvation may reach to the ends of the earth.' God addresses the Servant — ultimately fulfilled in Christ — and says that restoration of Israel is not enough. The scope of salvation was always cosmic. No nation, no ethnicity, no geography is outside the reach of what God intends. This verse shaped the early church's conviction that the gospel must go to the Gentiles (Acts 13:47)." },
  { ref: "Matthew 28:18-20", color: "#3B82F6", title: "The Great Commission", content: "'All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.' The mission is grounded in Christ's authority (not ours), aimed at all nations (not just sympathetic ones), and accomplished through three actions: going, baptizing, and teaching. The promise of his presence — 'to the very end of the age' — is the missionary's most fundamental resource." },
  { ref: "Acts 1:8", color: "#EF4444", title: "The Missionary Pattern: Concentric Circles", content: "'You will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.' Jesus gives both a method and a geography. Beginning at home (Jerusalem), expanding to the uncomfortable near-neighbor (Samaria — the people Jews despised), and ultimately to the entire world. This pattern is not permission to skip the local — it is a mandate for simultaneous engagement at every level. Every major missions organization reflects one layer of this pattern, and together they pursue all of it." },
  { ref: "Romans 15:20", color: "#F59E0B", title: "The Frontier Missionary Ambition", content: "'It has always been my ambition to preach the gospel where Christ was not known, so that I would not be building on someone else's foundation.' Paul articulates what we now call frontier missions — the deliberate prioritization of unreached peoples over reached ones. This is not contempt for evangelism at home, but the recognition that strategic urgency belongs to those with no access. The approximately 7,000 unreached people groups today — 3.2 billion people — represent the unfinished frontier Paul described." },
  { ref: "Revelation 7:9-10", color: "#10B981", title: "The Vision: Missions Has a Finish Line", content: "'After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb. They cried out in a loud voice: Salvation belongs to our God, who sits on the throne, and to the Lamb.' This is the destination of global missions — not the conversion of every individual but the representation of every people group before the throne. The missions task will be complete when a worshiping community exists from every nation, tribe, people, and language. John Piper's phrase: 'Missions exists because worship doesn't yet exist in all peoples.'" },
];

const GET_INVOLVED = [
  { pathway: "Pray", icon: "🙏", color: GREEN, who: "Every believer", commitment: "Daily, starting now", desc: "The most accessible and most neglected form of missions involvement. Adopt an unreached people group through Joshua Project (joshuaproject.net) and pray for them weekly. The Caleb Project's 'Window International Network' provides prayer calendars for unreached peoples. World Prayer (globalprayernetwork.org) organizes strategic intercession. William Carey called prayer 'the great business of missions.' Every global missionary depends on intercessors more than finances." },
  { pathway: "Give", icon: "💰", color: PURPLE, who: "Employed believers", commitment: "Monthly financial support", desc: "Supporting missions financially is a direct participation in missions: 'How can they preach unless they are sent?' (Romans 10:15). Most career missionaries need full financial support from churches and individuals. Research specific missionaries with organizations you trust. Set up recurring monthly giving at a level you can sustain. Give Mission Aid, Gospel For Asia, and each organization above have clear pathways. Increase your missions giving as God prospers you." },
  { pathway: "Go Short-Term", icon: "✈️", color: "#3B82F6", who: "Ages 18+", commitment: "1-3 weeks to 2 years", desc: "Short-term missions trips (STM) range from one-week service projects to two-year apprenticeships. IMB has journeyman programs for recent graduates; OM has one-year teams; most organizations have opportunities ranging from medical trips to church construction. The purpose of STM should be primarily for the goer's formation — experiencing the world church, gaining burden for unreached peoples, discerning long-term calling — rather than accomplishing specific projects that could be done better by locals. Go with humility." },
  { pathway: "Go Long-Term", icon: "🏠", color: "#EF4444", who: "Called and qualified", commitment: "Life commitment or multiple years", desc: "The most strategic need in global missions is long-term, language-learning, culture-embedded missionaries who commit to a people group for decades. The 10/40 Window (the band between 10 and 40 degrees north latitude, encompassing most of the world's unreached peoples) contains billions who will never hear the gospel unless someone intentionally goes. Career missionary pathways exist through all the organizations listed — typically requiring theological education, church support, and partnership with a sending organization. The harvest is plentiful; the workers are few." },
  { pathway: "Mobilize", icon: "📢", color: "#F59E0B", who: "Church leaders and members", commitment: "Ongoing", desc: "Mobilization means bringing missions vision to your church, small group, campus ministry, and friend network. Present the unreached peoples statistics at your church. Lead a series on global missions. Host a missionary on home assignment. Organize a Perspectives course (perspectives.org) — the most effective academic survey of global missions available. Give others an opportunity to hear and respond. Not everyone will go, but everyone should have a genuine opportunity to consider it." },
  { pathway: "Send", icon: "🚀", color: "#10B981", who: "Churches and well-resourced individuals", commitment: "Active ongoing partnership", desc: "Sending is more than writing a check. A sending church provides financial support, prayer coverage, pastoral accountability, and a community for missionaries on home assignment. Churches that take their role as senders seriously — shepherding, praying for, and staying connected with their missionaries — produce better missionaries and better long-term ministry. Read Patrick Lai's 'Tentmaking' or 'Sending Well' (Barnett and Martin) for the theology of sending and practical guidance." },
];

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
  const [tab, setTab] = usePersistedState<Tab>("vine_global-missions-orgs_tab", "orgs");
  const [category, setCategory] = usePersistedState("vine_global-missions-orgs_category", "All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = ORGS.filter(o => category === "All" || o.category === category);
  const org = ORGS.find(o => o.name === selected);

  const [gmoEntries, setGmoEntries] = useState<{ id: string; date: string; org: string; calling: string; step: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_gmo_entries") ?? "[]"); } catch { return []; }
  });
  const [gmoForm, setGmoForm] = useState({ org: "", calling: "", step: "" });
  const [gmoSaved, setGmoSaved] = useState(false);
  useEffect(() => { try { localStorage.setItem("vine_gmo_entries", JSON.stringify(gmoEntries)); } catch {} }, [gmoEntries]);
  const saveGmoEntry = () => {
    if (!gmoForm.org.trim()) return;
    setGmoEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...gmoForm }, ...prev]);
    setGmoForm({ org: "", calling: "", step: "" });
    setGmoSaved(true); setTimeout(() => setGmoSaved(false), 2000);
  };
  const deleteGmoEntry = (id: string) => setGmoEntries(prev => prev.filter(e => e.id !== id));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌍</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Global Missions Organizations</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The organizations doing the most significant global missions work — from Wycliffe's Bible translation in 2,000 languages to the Chinese underground church's Back to Jerusalem movement. Find your place in the mission.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {[
            { id: "orgs" as Tab, label: "Organizations", icon: "🌍" },
            { id: "biblical" as Tab, label: "Biblical Basis", icon: "📖" },
            { id: "involved" as Tab, label: "Get Involved", icon: "🚀" },
            { id: "journal" as Tab, label: "My Journal", icon: "📓" },
            { id: "videos" as Tab, label: "Videos", icon: "▶️" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? GREEN : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", minWidth: 80 }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "biblical" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 4 }}>
              <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>Global missions is not a New Testament idea — it runs from the first page of Scripture to the last. These passages form the biblical spine of the missionary enterprise.</p>
            </div>
            {BIBLICAL_BASIS.map((b, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${b.color}25`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                  <div style={{ color: b.color, fontWeight: 800, fontSize: 16 }}>{b.title}</div>
                  <span style={{ background: `${b.color}15`, color: b.color, padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{b.ref}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{b.content}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "involved" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 4 }}>
              <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>Everyone has a role in global missions. You do not have to go to participate — but you must participate. These are the {GET_INVOLVED.length} pathways by which Christians join the mission.</p>
            </div>
            {GET_INVOLVED.map((g, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${g.color}25`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 26 }}>{g.icon}</span>
                  <div>
                    <div style={{ color: g.color, fontWeight: 900, fontSize: 17 }}>{g.pathway}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{g.who} · {g.commitment}</div>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{g.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: TEXT }}>My Missions Journal</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>Record organizations you are connecting with, your sense of calling, and how you are taking steps to engage in global missions. Saved privately in your browser.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>ORGANIZATION / FOCUS AREA *</label>
                <textarea value={gmoForm.org} onChange={e => setGmoForm(f => ({ ...f, org: e.target.value }))}
                  placeholder="Which missions organization or cause is resonating with you?" rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>MY SENSE OF CALLING</label>
                <textarea value={gmoForm.calling} onChange={e => setGmoForm(f => ({ ...f, calling: e.target.value }))}
                  placeholder="What is God stirring in you toward global missions?" rows={3}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>NEXT STEP I AM TAKING</label>
                <textarea value={gmoForm.step} onChange={e => setGmoForm(f => ({ ...f, step: e.target.value }))}
                  placeholder="Research, partner, give, go — what is your specific next step?" rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveGmoEntry}
                style={{ background: gmoSaved ? GREEN : PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {gmoSaved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {gmoEntries.length > 0 && (
              <div>
                <h3 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 14, letterSpacing: 1 }}>SAVED ENTRIES ({gmoEntries.length})</h3>
                {gmoEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18, marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                      <button type="button" onClick={() => deleteGmoEntry(entry.id)}
                        style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                    </div>
                    {entry.org && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontWeight: 700, fontSize: 11 }}>ORG: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.org}</span></div>}
                    {entry.calling && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontWeight: 700, fontSize: 11 }}>CALLING: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.calling}</span></div>}
                    {entry.step && <div><span style={{ color: MUTED, fontWeight: 700, fontSize: 11 }}>NEXT STEP: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.step}</span></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
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
            <button type="button" key={c} onClick={() => setCategory(c)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${category === c ? GREEN : BORDER}`, background: category === c ? `${GREEN}15` : "transparent", color: category === c ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {c}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: org ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((o, i) => (
              <button type="button" key={i} onClick={() => setSelected(selected === o.name ? null : o.name)}
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
      </main>
      <Footer />
    </div>
  );
}
