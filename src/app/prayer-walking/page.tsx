"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const PW_VIDEOS = [
  { videoId: "KbFKcFxqVlo", title: "Prayer Walking — An Introduction", channel: "Gospel in Life", description: "The spiritual discipline of praying over physical places and how it reshapes both prayer and mission." },
  { videoId: "ACZbpLkY8To", title: "Praying for Your City", channel: "Ligonier Ministries", description: "A biblical case for intercession for your neighborhood, city, and community — and how to do it consistently." },
  { videoId: "fJnGJN6laqE", title: "Walk and Pray — The Practice of Prayer Walking", channel: "Desiring God", description: "Practical guidance for making prayer walking a regular spiritual discipline." },
  { videoId: "Z8lkuuhVkOI", title: "Neighborhood Prayer — Loving Your Community Through Prayer", channel: "The Gospel Coalition", description: "How to pray for the people on your street, in your apartment building, and throughout your neighborhood." },
];

const ROUTES = [
  {
    id: "neighborhood",
    name: "Neighborhood Walk",
    icon: "🏘️",
    time: "20-45 min",
    difficulty: "Beginner",
    description: "Walk your immediate neighborhood with intentional prayer for each house, family, and need you observe.",
    stops: [
      { label: "Your Front Door", prayer: "Lord, let this house be a light in this neighborhood. Make us known as people of peace." },
      { label: "Neighbor's Home (each one)", prayer: "Father, bless the people in this home. Meet their needs — known and unknown. Open their hearts to you." },
      { label: "Schools or Playgrounds", prayer: "God, protect and guide the children of this area. Give wisdom to educators. May your truth take root in young hearts." },
      { label: "Churches You Pass", prayer: "Unite and strengthen every church in this community. Let them be beacons of your presence." },
      { label: "Places of Business", prayer: "Lord, bring integrity and justice into the businesses of this neighborhood. Bless the workers." },
      { label: "Return Home", prayer: "Thank you for this community you've placed me in. Show me how to be a better neighbor and witness." },
    ],
    tips: ["Walk slowly — notice things", "Stop if you feel prompted to pray for a specific house", "Avoid headphones so you can listen to the Spirit", "Consider going with one or two others"],
  },
  {
    id: "city",
    name: "City Prayer Walk",
    icon: "🏙️",
    time: "1-3 hours",
    difficulty: "Intermediate",
    description: "Intercede for the specific spiritual, social, and cultural landscape of your city — its leaders, its poor, its influential centers.",
    stops: [
      { label: "City Hall / Government Buildings", prayer: "Father, raise up righteous leaders. Give wisdom to those in authority. Let your justice flow through the structures of this city." },
      { label: "Courthouses / Police Stations", prayer: "Lord, grant justice, mercy, and integrity to all who work here. Protect those who keep peace. Reform what is broken." },
      { label: "Hospitals / Clinics", prayer: "God of healing, bring comfort, skilled hands, and miraculous intervention to the sick. Strengthen the medical workers." },
      { label: "Schools / Universities", prayer: "Let truth prevail in the places of learning in this city. Protect students from deception. Raise up Christian professors, teachers, and students." },
      { label: "Entertainment Districts", prayer: "Redeem the culture of this city, Lord. Break the power of addiction, exploitation, and emptiness. Bring the gospel into every venue." },
      { label: "Areas of Poverty or Need", prayer: "Father, your heart is for the poor. Let the church be present here. Bring justice, provision, and dignity to those who are forgotten." },
      { label: "High Points / Overlooks", prayer: "Lord, we declare that this city belongs to you. Let your kingdom come and your will be done in [city name] as it is in heaven." },
    ],
    tips: ["Research spiritual history of your city before going", "Identify key leaders by name and pray for them specifically", "Go in small groups (2-4) for safety and spiritual weight", "Consider mapping the city's spiritual strongholds in advance"],
  },
  {
    id: "workplace",
    name: "Workplace Walk",
    icon: "🏢",
    time: "10-20 min",
    difficulty: "Beginner",
    description: "Pray through your workplace — before colleagues arrive, during a lunch break, or after hours. Consecrate the ground you work on.",
    stops: [
      { label: "Your Desk / Workspace", prayer: "Lord, make this desk a place of integrity and excellence. Let my work today honor you." },
      { label: "Manager's or Boss's Office", prayer: "Give wisdom and humility to those who lead here. Let them lead well." },
      { label: "Colleague's Desks (silently)", prayer: "Father, I lift up [name]. Meet their needs. Give me opportunity to show your love." },
      { label: "Break Room / Common Areas", prayer: "Let this be a place of genuine community. Guard conversations from gossip and negativity." },
      { label: "Lobby / Entrance", prayer: "Let everyone who enters and exits here encounter your peace in some way." },
    ],
    tips: ["This works best before others arrive or during off-hours", "You don't have to look like you're praying — walking and praying internally works", "Make it a weekly rhythm", "Keep a note of specific prayer requests from colleagues"],
  },
  {
    id: "scripture",
    name: "Scripture Walk",
    icon: "📖",
    time: "30-60 min",
    difficulty: "Any",
    description: "Walk while slowly meditating on a psalm or passage, pausing at natural points to pray the text back to God.",
    stops: [
      { label: "Before You Begin", prayer: "Psalm 119:18 — 'Open my eyes that I may see wonderful things in your law.'" },
      { label: "First Third of Walk", prayer: "Read and meditate slowly on one verse. Walk. Repeat the verse. Let it settle." },
      { label: "Middle of Walk", prayer: "Pray the verse back to God in your own words. What does it reveal about him? About you?" },
      { label: "Last Third", prayer: "How does this verse apply to your life today? Pray specifically about one application." },
      { label: "Return", prayer: "Thank God for speaking through his Word. Commit to act on one thing from the meditation." },
    ],
    tips: ["Suggested passages: Psalm 23, Psalm 139, Romans 8, John 15", "Walk without destination — the walk supports the meditation, not the reverse", "Bring a small notebook to write impressions", "This is contemplative prayer in motion"],
  },
];

const GETTING_STARTED = [
  { icon: "📍", title: "Choose Your Route", text: "Start with your neighborhood or workplace — somewhere you already know. Familiarity with the location lets you focus on prayer rather than navigation." },
  { icon: "🙏", title: "Open in Prayer", text: "Before you begin walking, stop and ask the Holy Spirit to guide your prayers. 'Lord, show me what to see and what to pray.' This shifts it from a walk with prayer to a Spirit-led intercession." },
  { icon: "👁️", title: "Let What You See Guide Prayer", text: "Notice people, buildings, signs, and situations. Let each observation become a prompt. A school → pray for students. An ambulance → pray for whoever is inside." },
  { icon: "🗣️", title: "Pray Aloud When Possible", text: "Praying aloud — even quietly — engages your whole being and is harder to drift from. If you're alone or in an appropriate setting, speak your prayers out loud." },
  { icon: "📝", title: "Record What You Pray", text: "Keep a simple note of what you prayed for and any impressions you receive. Prayer walking often produces surprising clarity about a neighborhood, situation, or person." },
  { icon: "🔄", title: "Make It a Rhythm", text: "The power of prayer walking is in consistency. A weekly 20-minute neighborhood walk done for a year transforms both you and your neighborhood in ways that aren't immediately visible." },
];

const VOICES_PW = [
  { id: "hawthorne-s", name: "Steve Hawthorne", era: "b. 1950s", context: "Prayerwalking: Praying On-Site With Insight (1993) — the definitive guide to prayer walking as a spiritual practice", bio: "Steve Hawthorne, along with Graham Kendrick, wrote Prayerwalking: Praying On-Site With Insight, which popularized prayer walking as a distinct spiritual discipline for the modern church. Hawthorne argued that praying while physically present in a location connects intercessory prayer to specific places in a way that armchair intercession cannot. Walking through a neighborhood, a city, or a region while praying for it engages not only the mind but the body, the senses, and the imagination — making prayer more specific, more sustained, and more emotionally engaged. The book provided the theological rationale, practical methodology, and historical precedents for organized prayer walking movements worldwide.", quote: "Prayerwalking is not walking while thinking about prayer — it is praying while walking through the places God has called us to love. The feet carry the heart to the place where it is most needed.", contribution: "Prayerwalking catalyzed an international movement of organized prayer walking in the 1990s and 2000s. Hawthorne's work with the U.S. Center for World Mission and his teaching on strategic intercession influenced how mission organizations and local churches approach prayer for their communities. His methodology has been adopted by thousands of churches worldwide." },
  { id: "kendrick-g", name: "Graham Kendrick", era: "b. 1950", context: "March for Jesus movement (1980s-1990s); pioneer of public, processional praise and prayer walking", bio: "Graham Kendrick, British songwriter and worship leader, is best known for worship songs like Shine, Jesus, Shine and The Servant King, but his role in pioneering public, processional prayer walking is equally significant. The March for Jesus movement, which he co-founded in the late 1980s, brought Christians into the streets for public worship and prayer walking in cities worldwide, culminating in coordinated global marches in the early 1990s that involved tens of millions of participants. Kendrick's theology of praise and prayer walking was rooted in the biblical tradition of processional worship — from Israel's march around Jericho to the triumphal entry of Jesus into Jerusalem.", quote: "When we take worship into the streets, we are not invading enemy territory — we are reclaiming what belongs to God. The earth is the Lord's, and prayer walking is one way of saying so.", contribution: "Kendrick's March for Jesus movement introduced prayer walking to millions of Christians who had never heard of the practice, and demonstrated that prayer walking could be done publicly, communally, and joyfully — not just quietly and individually. His influence catalyzed prayer walking movements in hundreds of cities worldwide." },
  { id: "sheets-d", name: "Dutch Sheets", era: "b. 1953", context: "Intercessory Prayer (1996); Watchman Prayer (2000) — on strategic intercession for places and regions", bio: "Dutch Sheets is a charismatic pastor and author whose Intercessory Prayer became one of the most widely read books on intercession in the late 20th century. His theology of intercession emphasizes the watchman function of prayer — believers called to stand guard over particular places, people, and situations, praying with authority against spiritual forces that operate in specific locations. His Watchman Prayer developed this concept specifically for geographic intercession, providing a theological framework for why praying on-site differs from praying at a distance. Sheets argues that physical presence in a location can intensify intercession by engaging all the senses and connecting the prayer directly to the specific spiritual dynamics of the place.", quote: "Watchman prayer is not passive waiting — it is active engagement with the spiritual forces that shape a community. The intercessor who walks the streets is writing history on their knees.", contribution: "Sheets's theological framework for geographic and strategic intercession gave prayer walking a coherent theological basis within charismatic evangelical theology. His books on intercession, combined with his conferences and teaching ministry, have trained tens of thousands of intercessors in prayer walking and strategic intercession." },
  { id: "barton-rt", name: "Ruth Haley Barton", era: "b. 1956", context: "Sacred Rhythms (2006); contemplative walking prayer as embodied presence", bio: "Ruth Haley Barton is a spiritual director and founder of the Transforming Center whose work emphasizes contemplative practices of prayer, including walking prayer as a form of contemplative presence. While Hawthorne and Sheets approach prayer walking primarily through the lens of intercession and spiritual warfare, Barton's approach is contemplative: walking as a form of embodied prayer that connects us to the present moment, to the created world, and to the God who inhabits both. Drawing on the Christian contemplative tradition — including Ignatian walking meditation and Celtic pilgrimage — she offers an approach to prayer walking that is less about strategic intercession and more about receptive, listening presence.", quote: "Walking prayer is the practice of putting your body where your soul is going. When we pray while walking, we give our whole selves — not just our minds — to God's presence.", contribution: "Barton's contemplative approach to prayer walking expanded the practice beyond its charismatic and intercessory roots, making it available to Christians in liturgical, Reformed, and contemplative traditions. Her integration of walking prayer into broader spiritual direction practice has helped thousands of Christians develop an embodied prayer life." },
  { id: "ortlund-r", name: "Ray Ortlund", era: "b. 1952", context: "Immanuel Church Nashville; prayer walking as pastoral love for community", bio: "Ray Ortlund, pastor of Immanuel Church Nashville, has written and preached extensively on prayer as the central practice of pastoral ministry. His approach to prayer walking is pastoral rather than strategic: walking through his neighborhood as a practice of love and pastoral presence, praying for the specific families and situations he encounters. His teaching has given many pastors a model for prayer walking as an expression of pastoral care rather than spiritual warfare — a way of loving a community by interceding specifically for what you see while walking through it.", quote: "I walk my neighborhood because I love it. And I pray while I walk because love and prayer are inseparable. You cannot genuinely love what you don't pray for.", contribution: "Ortlund's pastoral model of prayer walking has influenced how evangelical pastors understand their relationship to the communities they serve. His emphasis on prayer walking as pastoral love — rather than spiritual warfare — has given the practice accessibility for pastors and church members who were put off by more combative presentations." },
];

export default function PrayerWalkingPage() {
  const [activeTab, setActiveTab] = usePersistedState<"routes" | "guide" | "journal" | "voices" | "videos">("vine_prayer-walking_tab", "guide");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_prayer-walking_voice", "hawthorne-s");
  const voiceItem = VOICES_PW.find(v => v.id === selectedVoice)!;
  const [selectedRoute, setSelectedRoute] = useState<string>("neighborhood");
  const [completedStops, setCompletedStops] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_pw_stops"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [journalText, setJournalText] = useState(() => {
    try { return localStorage.getItem("vine_pw_journal") || ""; } catch { return ""; }
  });
  const [walkCount, setWalkCount] = useState(() => {
    try { return parseInt(localStorage.getItem("vine_pw_count") || "0"); } catch { return 0; }
  });

  useEffect(() => { try { localStorage.setItem("vine_pw_stops", JSON.stringify([...completedStops])); } catch {} }, [completedStops]);
  useEffect(() => { try { localStorage.setItem("vine_pw_journal", journalText); } catch {} }, [journalText]);
  useEffect(() => { try { localStorage.setItem("vine_pw_count", String(walkCount)); } catch {} }, [walkCount]);

  const route = ROUTES.find(r => r.id === selectedRoute)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🚶</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Prayer Walking</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            Combine physical movement with spiritual intercession — walk your neighborhood, city, or workplace while covering it in prayer.
          </p>
          <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 20px", textAlign: "center" }}>
              <div style={{ color: GREEN, fontWeight: 900, fontSize: 24 }}>{walkCount}</div>
              <div style={{ color: MUTED, fontSize: 12 }}>Walks Completed</div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 20px", textAlign: "center" }}>
              <div style={{ color: PURPLE, fontWeight: 900, fontSize: 24 }}>{completedStops.size}</div>
              <div style={{ color: MUTED, fontSize: 12 }}>Stops Prayed</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "guide" as const, label: "Getting Started", icon: "📋" },
            { id: "routes" as const, label: "Prayer Routes", icon: "🗺️" },
            { id: "journal" as const, label: "Walk Journal", icon: "✍️" },
            { id: "voices" as const, label: "Voices", icon: "📣" },
            { id: "videos" as const, label: "Videos", icon: "▶️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "guide" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 12 }}>What Is Prayer Walking?</h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 12 }}>
                Prayer walking is the practice of moving through a physical space — neighborhood, city, workplace, campus — while interceding for the people and places you encounter. It combines two powerful spiritual disciplines: prayer and presence.
              </p>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15 }}>
                In Scripture, walking had spiritual significance: God told Abraham to "walk through the length and breadth of the land" he was giving him (Gen 13:17). Joshua marched around Jericho. Jesus walked through towns and villages as he prayed for and ministered to people. Nehemiah surveyed the broken walls of Jerusalem at night before interceding and acting. Movement and prayer belong together.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {GETTING_STARTED.map((g, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{g.icon}</div>
                  <h4 style={{ color: PURPLE, fontWeight: 800, fontSize: 15, marginBottom: 8 }}>{g.title}</h4>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{g.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "routes" && (
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {ROUTES.map(r => (
                <button key={r.id} onClick={() => setSelectedRoute(r.id)}
                  style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${selectedRoute === r.id ? GREEN : BORDER}`, background: selectedRoute === r.id ? `${GREEN}15` : CARD, color: selectedRoute === r.id ? GREEN : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {r.icon} {r.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 26 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
                <div>
                  <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: 0, marginBottom: 4 }}>{route.icon} {route.name}</h2>
                  <div style={{ display: "flex", gap: 10 }}>
                    <span style={{ color: MUTED, fontSize: 13 }}>⏱ {route.time}</span>
                    <span style={{ color: MUTED, fontSize: 13 }}>• {route.difficulty}</span>
                  </div>
                </div>
                <button onClick={() => { setWalkCount(c => c + 1); setCompletedStops(new Set()); }}
                  style={{ padding: "8px 18px", background: `${GREEN}20`, border: `1px solid ${GREEN}50`, borderRadius: 8, color: GREEN, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  + Log Walk
                </button>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>{route.description}</p>

              <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Prayer Stops</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {route.stops.map((stop, i) => {
                  const key = `${route.id}-${i}`;
                  const done = completedStops.has(key);
                  return (
                    <div key={i} onClick={() => setCompletedStops(prev => { const n = new Set(prev); done ? n.delete(key) : n.add(key); return n; })}
                      style={{ background: done ? `${GREEN}10` : BG, border: `1px solid ${done ? GREEN + "40" : BORDER}`, borderRadius: 10, padding: 16, cursor: "pointer", transition: "all 0.2s" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                        <div style={{ width: 22, height: 22, borderRadius: "50%", border: `2px solid ${done ? GREEN : BORDER}`, background: done ? GREEN : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                          {done && <span style={{ color: BG, fontSize: 12, fontWeight: 900 }}>✓</span>}
                        </div>
                        <div>
                          <div style={{ color: done ? GREEN : TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{stop.label}</div>
                          <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, fontStyle: "italic" }}>{stop.prayer}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Tips for This Walk</h4>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {route.tips.map((tip, i) => <li key={i} style={{ color: TEXT, fontSize: 14, marginBottom: 6 }}>{tip}</li>)}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, marginBottom: 8 }}>Prayer Walk Journal</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>Record what you prayed for, what you observed, and any impressions or answers you receive over time.</p>
              <textarea value={journalText} onChange={e => setJournalText(e.target.value)}
                placeholder={`Date: ${new Date().toLocaleDateString()}\nRoute: \n\nWhat I noticed:\n\nWhat I prayed:\n\nAny impressions or responses:\n\n---\n`}
                style={{ width: "100%", minHeight: 320, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16, color: TEXT, fontSize: 14, lineHeight: 1.8, resize: "vertical", boxSizing: "border-box", fontFamily: "monospace" }} />
              <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: MUTED, fontSize: 12 }}>Saved automatically</span>
                <span style={{ color: MUTED, fontSize: 12 }}>{journalText.split("\n").filter(Boolean).length} lines</span>
              </div>
            </div>
          </div>
        )}
        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_PW.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? PURPLE : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${PURPLE}15`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Legacy and Contribution</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {PW_VIDEOS.map(v => (
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
