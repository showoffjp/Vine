"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Worship as the Chief End", verse: "Revelation 4:11", body: "'You are worthy, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they were created and have their being' (Revelation 4:11). The Westminster Shorter Catechism opens: 'Man's chief end is to glorify God and to enjoy him forever.' Worship is not a section of the Christian life — it is the purpose of all Christian life. Everything — work, relationships, prayer, service — is worship rightly understood. The gathered service on Sunday expresses what the scattered life of the week is always meant to be." },
  { title: "Spirit and Truth", verse: "John 4:23-24", body: "'Yet a time is coming and has now come when the true worshipers will worship the Father in the Spirit and in truth, for they are the kind of worshipers the Father seeks. God is spirit, and his worshipers must worship in the Spirit and in truth' (John 4:23-24). Jesus shifts the question of worship from location (Jerusalem or Samaria) to character: Spirit (genuine spiritual reality, not performance) and truth (in accordance with who God actually is). These two poles diagnose every worship failure: formalism without Spirit, emotion without truth." },
  { title: "The Regulative Principle", verse: "Deuteronomy 12:32", body: "The Reformed regulative principle: the church may worship God only in ways he has commanded in Scripture. Anything not commanded is not permitted. 'See that you do all I command you; do not add to it or take away from it' (Deuteronomy 12:32). This produces more liturgical conservatism in Reformed churches. The normative principle (held by Lutherans and many evangelicals): whatever is not prohibited by Scripture is permitted. The two principles produce significantly different worship cultures." },
  { title: "Gathered Worship as Eschatological Assembly", verse: "Hebrews 12:22-24", body: "'You have come to Mount Zion, to the city of the living God, the heavenly Jerusalem. You have come to thousands upon thousands of angels in joyful assembly, to the church of the firstborn, whose names are written in heaven' (Hebrews 12:22-24). Sunday worship is not merely a local meeting — it is a participation in the heavenly assembly around the throne. Every gathering of Christians for worship is an intersection of heaven and earth. This gives gathered worship its gravity; we are not simply meeting together but joining something cosmic." },
  { title: "The Elements of New Testament Worship", verse: "Acts 2:42", body: "Acts 2:42 describes the Jerusalem church's worship pattern: 'They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer.' The Pauline letters add: singing (Colossians 3:16; Ephesians 5:19), reading of Scripture (1 Timothy 4:13), giving (1 Corinthians 16:2), and the Lord's Supper (1 Corinthians 11:23-26). These elements — Word, prayer, song, sacrament, fellowship, giving — form the enduring shape of Christian corporate worship across traditions." },
];

const ELEMENTS = [
  { element: "Gathering & Call to Worship", icon: "🔔", color: GREEN, desc: "Worship begins with God's initiative — a call to come, to be attentive, to turn from the world's noise to the living God. The call to worship is not a warm-up or a performance opener but a theological statement: God has called us into his presence. The gathering is itself a gift, not a human achievement." },
  { element: "Confession & Assurance", icon: "🕊️", color: PURPLE, desc: "Honest worship requires honest acknowledgment of who we are before a holy God. Corporate confession is not morbidity but truth-telling. It is followed by assurance of pardon — the proclamation that the God we have offended has forgiven us in Christ. This movement (confession → absolution) enacts the gospel." },
  { element: "Scripture & Proclamation", icon: "📖", color: "#F59E0B", desc: "The reading and preaching of Scripture is the center of Protestant worship — the Word of God proclaimed, applied, and received. Calvin called the sermon the voice of God himself through the preacher. The congregation receives the Word not as passive consumers but as active hearers who will go and do." },
  { element: "Prayer", icon: "🙏", color: "#EF4444", desc: "Corporate prayer — intercession, thanksgiving, confession, petition — is not filler between more important elements but the church's royal priesthood in action. In prayer, the gathered community exercises its calling to intercede for the world, the church, the city, and the nations." },
  { element: "The Lord's Supper", icon: "🍞", color: "#3B82F6", desc: "The Supper is the visible Word — the gospel enacted in bread and cup. Its regular celebration (weekly in the early church) anchors worship to the body and blood of Christ and the covenant they sealed. The table is the gathering's culmination: Word proclaimed, response made, sacrament received." },
  { element: "Sending", icon: "🌍", color: "#10B981", desc: "Worship ends with a sending: 'Go in peace to love and serve the Lord.' The congregation that entered as scattered individuals is sent out as the embodied mission of God in the world. The gathered worship disperses into the scattered worship of everyday life — work, relationships, service." },
];

const TRADITIONS_WORSHIP = [
  { name: "High Church (Catholic, Anglican, Orthodox)", color: "#F59E0B", desc: "Rich liturgical worship structured around the church calendar, the lectionary, and the sacraments. Worship is participatory through responses, creeds, and prayers. The aesthetic (architecture, art, vestments, music) communicates the transcendence of God. The worshiper enters an ancient, multi-sensory pattern that stretches back through the centuries." },
  { name: "Reformed / Presbyterian", color: PURPLE, desc: "Worship shaped by the regulative principle: Scripture, sung Psalms (in some churches), the preached Word, prayer, and sacrament. Emphasis on the glory of God and the teaching of the Word. Simple aesthetics in more Reformed settings; the content of worship (not its form) communicates transcendence." },
  { name: "Evangelical / Contemporary", color: GREEN, desc: "Contemporary worship music, conversational preaching, and informal atmosphere characterize most evangelical churches today. Emphasis on accessibility, emotional engagement, and practical application. The danger is reducing worship to entertainment or emotional experience; the strength is removal of cultural barriers to entry." },
  { name: "Pentecostal / Charismatic", color: "#EF4444", desc: "Worship as encounter with the living God — spontaneous, Spirit-led, emotionally and physically expressive. Space for prophecy, tongues, healing prayer. The Holy Spirit's activity is expected and welcomed during the gathering. Critics: prone to subjectivism; strength: genuine expectation that God shows up." },
];

const PRACTICES = [
  { title: "Come Prepared", desc: "Arrive a few minutes early. Pray before the service: 'Lord, open my heart to receive and respond.' The unprepared worshiper is a passive consumer; the prepared worshiper is an active participant. What you get from worship is largely determined by what you bring to it.", icon: "🙏" },
  { title: "Sing Wholeheartedly", desc: "Corporate singing is not a warm-up or a performance to evaluate — it is the church's voice lifted together. 'Sing to the Lord with grateful praise' (Psalm 147:7). Whether or not your voice is musical, your voice belongs in corporate worship. Half-hearted singing is a liturgical mistake.", icon: "🎵" },
  { title: "Receive the Word Actively", desc: "Take notes. Ask questions. Identify the one thing you will do with this text in the week ahead. Preaching is not a lecture to evaluate but a word to receive and obey. The active hearer leaves with something to do, not merely something to think about.", icon: "📝" },
  { title: "Give Generously", desc: "The offering is not an interruption to worship — it is an act of worship. When the plate passes, something of genuine value is moving: not merely money but the labor, time, and trust represented by money. Giving in worship is a confession that what matters most is not mine to keep.", icon: "💝" },
  { title: "Greet the Stranger", desc: "The gathered church is not a performance you attend alone — it is a community you are part of. Introduce yourself to someone new. Learn a name. The fellowship (koinonia) that Acts 2:42 describes is built one greeting at a time. The worship service ends when you go home, not when the benediction is spoken.", icon: "🤝" },
  { title: "Continue in the Week", desc: "The benediction sends you into the week's worship. 'Present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship' (Romans 12:1). The scattered life of Monday through Saturday is the continuation of Sunday's gathered worship. They interpret each other.", icon: "🌍" },
];

export default function WorshipTheologyPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "elements" | "practices">("theology");
  const [selectedElement, setSelectedElement] = useState("Gathering & Call to Worship");

  const elem = ELEMENTS.find(e => e.element === selectedElement)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🙌</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theology of Worship</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Worship is not a section of the Christian life — it is the whole of it. Sunday gathered worship expresses what all of life is meant to be: the creature before the Creator, glorifying and enjoying God forever.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "elements" as const, label: "Elements", icon: "🎵" },
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
            <div style={{ marginTop: 8 }}>
              <div style={{ color: TEXT, fontWeight: 800, fontSize: 16, marginBottom: 12 }}>Worship Traditions</div>
              {TRADITIONS_WORSHIP.map((trad, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${trad.color}20`, borderRadius: 10, padding: 18, marginBottom: 10 }}>
                  <div style={{ color: trad.color, fontWeight: 800, fontSize: 15, marginBottom: 6 }}>{trad.name}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{trad.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "elements" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {ELEMENTS.map(e => (
                <button key={e.element} onClick={() => setSelectedElement(e.element)}
                  style={{ padding: "8px 12px", borderRadius: 20, border: `1px solid ${selectedElement === e.element ? e.color : BORDER}`, background: selectedElement === e.element ? `${e.color}20` : "transparent", color: selectedElement === e.element ? e.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {e.icon} {e.element}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${elem.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 32 }}>{elem.icon}</span>
                <h2 style={{ color: elem.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{elem.element}</h2>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{elem.desc}</p>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                What you receive from worship is largely determined by what you bring to it. These six practices transform worship from something you attend to something you participate in.
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
