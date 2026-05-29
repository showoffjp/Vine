"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const REGION_FILTERS = ["All", "Israel", "Europe", "Middle East", "Asia", "Americas"];

const SITES = [
  {
    name: "Jerusalem — The Old City",
    region: "Israel",
    country: "Israel / Palestinian Territory",
    color: "#F59E0B",
    significance: "The most sacred city in Christian history. The Old City contains the Church of the Holy Sepulchre (site of the crucifixion, burial, and resurrection), the Via Dolorosa (the traditional path of Jesus to the cross), the Western Wall, the Temple Mount, the Garden of Gethsemane, and the Upper Room. For many Christians, walking the streets of Jerusalem is the most profound spiritual experience of their lives.",
    must_see: "Church of the Holy Sepulchre; Garden of Gethsemane; Via Dolorosa; Yad Vashem Holocaust Memorial; the Kidron Valley",
    best_time: "March-May or October-November; avoid major Jewish and Christian holidays if you want smaller crowds",
    practical: "Christian tours are excellent value — knowledgeable guides dramatically increase the experience. Gary Burge's Whose Land? Whose Promise? is essential pre-trip reading.",
    scripture: "Luke 19:41-44; John 19:17-18; Matthew 28:1-7",
    initials: "JRS",
  },
  {
    name: "Galilee — Sea of Galilee & Nazareth",
    region: "Israel",
    country: "Israel",
    color: "#3B82F6",
    significance: "The region where Jesus grew up, was baptized, called his disciples, preached the Sermon on the Mount, and performed the majority of his miracles. The Sea of Galilee (Lake Kinneret) is where Jesus walked on water, calmed the storm, and appeared to the disciples after the resurrection. Capernaum was Jesus's base of ministry.",
    must_see: "Sea of Galilee (boat ride); Capernaum (ruins of Peter's house and ancient synagogue); Mount of Beatitudes; Yardenit Baptism Site on the Jordan River; Nazareth Village",
    best_time: "Year-round; Galilee is less crowded than Jerusalem",
    practical: "A boat ride on the Sea of Galilee at sunrise is one of the most evocative spiritual experiences available. The water has not changed since the 1st century.",
    scripture: "Matthew 5:1-3; Mark 1:16-20; John 21:1-14",
    initials: "GAL",
  },
  {
    name: "Bethlehem — Church of the Nativity",
    region: "Israel",
    country: "Palestinian Territory",
    color: "#EC4899",
    significance: "The birthplace of Jesus. The Church of the Nativity, built over the traditional site of the manger, is one of the oldest continuously operating churches in the world (constructed by Constantine in 327 AD). The Grotto of the Nativity beneath the church is one of the most affecting spaces in Christianity — a silver star marks the traditional spot of Jesus's birth.",
    must_see: "Church of the Nativity; Grotto of the Nativity; Shepherd's Field (Beit Sahour); Herodium (visible from Bethlehem)",
    best_time: "Most beautiful at Christmas (expect enormous crowds); quieter in off-seasons",
    practical: "Bethlehem is in the West Bank — require an Israeli checkpoint crossing. Most Jerusalem-based Christian tours include a day trip to Bethlehem.",
    scripture: "Luke 2:1-20; Micah 5:2",
    initials: "BTH",
  },
  {
    name: "Rome — Early Christian Sites",
    region: "Europe",
    country: "Italy",
    color: "#EF4444",
    significance: "Rome is the most important city in Western Christianity. Paul was martyred here (~67 AD); Peter was crucified here and buried on Vatican Hill. The Catacombs contain the burial places of hundreds of thousands of early Christians and some of the oldest Christian art in existence. St. Peter's Basilica is the largest church in the world, built over Peter's tomb.",
    must_see: "Vatican Museum and Sistine Chapel; St. Peter's Basilica and tomb; Catacombs of Callixtus (or Domitilla, less crowded); Basilica of San Clemente (multiple layers of history); Appian Way",
    best_time: "April-May or September-October; avoid August when Romans leave and tourists flood in",
    practical: "The Catacombs require a tour guide (by law). San Clemente Basilica is extraordinary — medieval church built over a 4th century church built over a 1st century pagan temple and house church. Three floors of history.",
    scripture: "Acts 28:14-16; Romans 1:7-8; 2 Timothy 4:6",
    initials: "ROM",
  },
  {
    name: "Ephesus",
    region: "Middle East",
    country: "Turkey",
    color: PURPLE,
    significance: "One of the most important cities of the early church. Paul spent three years here (Acts 20:31), the longest of any of his missionary stays. The church at Ephesus received one of Paul's most significant letters. John is traditionally buried here, and Mary (the mother of Jesus) may have spent her final years nearby. Ephesus was also one of the Seven Churches of Revelation.",
    must_see: "The Temple of Artemis (one of the Seven Wonders); Library of Celsus; Great Theater (seats 25,000 — where the Ephesian riot occurred, Acts 19); House of the Virgin Mary; Selçuk Archaeological Museum",
    best_time: "April-May or October; extremely hot and crowded in July-August",
    practical: "A full-day tour combining Ephesus with the House of the Virgin Mary and the tomb of St. John (Ayasuluk Hill) covers all major sites. The ruins are extensive and require comfortable walking shoes.",
    scripture: "Acts 19-20; Ephesians 1-6; Revelation 2:1-7",
    initials: "EPH",
  },
  {
    name: "The Seven Churches of Revelation (Turkey)",
    region: "Middle East",
    country: "Turkey",
    color: "#10B981",
    significance: "Seven cities mentioned in Revelation 2-3: Ephesus, Smyrna (Izmir), Pergamon, Thyatira, Sardis, Philadelphia, and Laodicea — all in western Turkey. Each receives a specific message from the risen Christ. Visiting these sites makes the letters of Revelation come alive with cultural and historical specificity.",
    must_see: "All seven sites can be visited in a week; Ephesus and Pergamon (with its dramatic theater and Altar of Zeus) are the best preserved; Laodicea is still being excavated",
    best_time: "Spring or fall; summers in western Turkey are extremely hot",
    practical: "Several tour operators (Israel Experience, NET Ministries, Inspiration Travel) specialize in Seven Churches itineraries. Colin Hemer's The Letters to the Seven Churches is the definitive scholarly companion.",
    scripture: "Revelation 1:11; Revelation 2-3",
    initials: "7CH",
  },
  {
    name: "Canterbury Cathedral",
    region: "Europe",
    country: "United Kingdom",
    color: "#6366F1",
    significance: "The mother church of the Anglican Communion and one of the most significant pilgrimage sites in medieval Christendom. Thomas Becket was murdered here in 1170 and became the most venerated martyr in medieval England — his shrine made Canterbury the most popular pilgrimage destination in England. Chaucer's Canterbury Tales is the literary monument to this pilgrimage tradition.",
    must_see: "The Shrine of Thomas Becket (actual shrine was destroyed by Henry VIII; the site remains); the stunning Gothic nave; the Crypt; St. Augustine's Abbey ruins nearby",
    best_time: "Year-round; beautiful at Easter and Christmas services",
    practical: "Pilgrims can walk the Pilgrims' Way from Winchester to Canterbury — 115 miles through medieval English countryside. The Cathedral's daily services are open to the public and extraordinarily beautiful.",
    scripture: "Hebrews 12:1; 1 Corinthians 11:1",
    initials: "CTY",
  },
  {
    name: "Assisi",
    region: "Europe",
    country: "Italy",
    color: "#F59E0B",
    significance: "The birthplace of Francis of Assisi — one of the most beloved saints in Christian history. The Basilica of San Francesco contains some of the most important medieval frescoes in Italy (Giotto's depiction of Francis's life) and Francis's tomb. The town has maintained an extraordinary atmosphere of peace and simplicity that reflects its patron saint's legacy.",
    must_see: "Basilica di San Francesco (Upper and Lower Church); San Damiano (the chapel where Francis heard the cross speak); Eremo delle Carceri (the hermitage where Francis prayed in the forest); Basilica di Santa Chiara",
    best_time: "April-May or September-October; the Feast of St. Francis (October 4) draws enormous crowds but is a profound experience",
    practical: "Assisi is a day trip from Florence or Rome, or worth an overnight stay. Walking the path from the town down to San Damiano at dawn is one of the most meditative experiences in Christian travel.",
    scripture: "Matthew 10:9-10; Luke 9:58",
    initials: "ASS",
  },
  {
    name: "Iona, Scotland",
    region: "Europe",
    country: "United Kingdom",
    color: GREEN,
    significance: "The tiny island off the west coast of Scotland where Irish monk Columba founded a monastic community in 563 AD that became the most important center of Celtic Christianity and the evangelization of Scotland and northern England. The Iona Community, founded in 1938, continues the tradition of combining contemplative prayer with social engagement.",
    must_see: "Iona Abbey; the Street of the Dead (ancient burial route); the Nunnery ruins; the wild western beaches (access to the veil is thin here — a Celtic Christian concept); St. Columba's Bay (where Columba landed in 563)",
    best_time: "May-September; Iona is stunningly beautiful but severely weather-dependent; the island has no cars",
    practical: "Iona requires a pilgrimage mindset — ferry from Oban to Mull, then bus, then another ferry. The difficulty of getting there is part of the experience. The Iona Community offers week-long residential programs.",
    scripture: "Psalm 46:10; 1 Kings 19:12",
    initials: "ION",
  },
  {
    name: "Wittenberg, Germany",
    region: "Europe",
    country: "Germany",
    color: "#3B82F6",
    significance: "The birthplace of the Protestant Reformation. Martin Luther posted his 95 Theses on the door of the Castle Church (All Saints' Church) in Wittenberg on October 31, 1517. He lived, taught, and is buried here. The Lutherhaus (Luther's home) is the most significant Reformation museum in the world.",
    must_see: "Castle Church (Schlosskirche) — Luther's tomb and the Theses Door; Lutherhaus museum; Stadtkirche (Town Church where Luther preached most of his sermons); Luther Memorial statue",
    best_time: "April-October; October 31 (Reformation Day) has special services",
    practical: "Wittenberg pairs well with a visit to Erfurt (Luther's monastery) and Eisleben (his birthplace). The Reformation Germany trail connecting these sites is well-signposted.",
    scripture: "Romans 1:17; Galatians 2:16; Ephesians 2:8-9",
    initials: "WIT",
  },
  {
    name: "Taizé, France",
    region: "Europe",
    country: "France",
    color: "#A855F7",
    significance: "An ecumenical Christian monastic community in Burgundy, France, founded by Brother Roger Schutz in 1940. Taizé is one of the most visited pilgrimage sites in the world — over 100,000 young people visit annually. Known for its simple, repetitive meditative worship ('Taizé chants') that has influenced worship globally. The community maintains silence, simplicity, and reconciliation between Christians of all traditions.",
    must_see: "Morning, midday, and evening prayer in the Church of Reconciliation; meeting with the brothers; the community's meals; surrounding Burgundy countryside",
    best_time: "Summer months host the most international gatherings; quieter but still profound in off-seasons",
    practical: "Visitors stay in simple dormitory accommodation. Advance registration required for stays of more than a day. The community's approach to prayer has influenced generations of young Christians across all traditions.",
    scripture: "John 17:21; Psalm 133",
    initials: "TAI",
  },
  {
    name: "Corinth, Greece",
    region: "Europe",
    country: "Greece",
    color: "#EF4444",
    significance: "Paul spent 18 months in Corinth on his second missionary journey — longer than any other city except Ephesus. He founded the church here and wrote at least two letters to it. The ancient city of Corinth includes the Temple of Apollo (7th century BC, still standing when Paul preached here), the Bema (the judgment seat where Paul stood before Gallio in Acts 18), and the port of Cenchreae.",
    must_see: "Ancient Corinth archaeological site; the Bema/judgment seat; Temple of Apollo columns; Corinth Museum; Isthmia (nearby — site of the Isthmian Games Paul references in 1 Corinthians 9:24-27)",
    best_time: "April-May or October; summer is hot and crowded",
    practical: "Corinth makes an excellent day trip from Athens or can be combined with Delphi. Ben Witherington's Conflict and Community in Corinth is the best scholarly guide to the Corinthian correspondence in light of the archaeological context.",
    scripture: "Acts 18:1-18; 1 Corinthians 1:2; 2 Corinthians 5:20",
    initials: "COR",
  },
];

export default function ChristianPilgrimageSitesPage() {
  const [region, setRegion] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = SITES.filter(s => region === "All" || s.region === region);
  const site = SITES.find(s => s.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🗺️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Pilgrimage & Holy Sites</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The places where Christian history happened — from the hills of Galilee to the Reformation church at Wittenberg. Visiting these sites is among the most spiritually formative experiences available to Christians.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 24, display: "flex", gap: 12, alignItems: "flex-start" }}>
          <span style={{ fontSize: 24, flexShrink: 0 }}>✈️</span>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            Pilgrimage is one of the oldest Christian practices. Christians have been traveling to Jerusalem since the 4th century. The purpose is not to earn God's favor but to let the places shape your imagination and deepen your connection to the story of God's people. Every site on this list will change how you read Scripture.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {REGION_FILTERS.map(r => (
            <button key={r} onClick={() => setRegion(r)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${region === r ? GREEN : BORDER}`, background: region === r ? `${GREEN}15` : "transparent", color: region === r ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {r}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: site ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((s, i) => (
              <button key={i} onClick={() => setSelected(selected === s.name ? null : s.name)}
                style={{ background: selected === s.name ? `${s.color}12` : CARD, border: `1px solid ${selected === s.name ? s.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${s.color}20`, border: `1px solid ${s.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                    {s.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{s.name}</span>
                      <span style={{ background: `${s.color}15`, color: s.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{s.region}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{s.country}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {site && (
            <div style={{ background: CARD, border: `1px solid ${site.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                <div>
                  <h2 style={{ color: site.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{site.name}</h2>
                  <div style={{ color: MUTED, fontSize: 12 }}>{site.country} · {site.region}</div>
                </div>
              </div>

              <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600, marginBottom: 14, display: "inline-block" }}>{site.scripture}</span>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14, marginTop: 10 }}>{site.significance}</p>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 10, marginBottom: 10 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>MUST SEE</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{site.must_see}</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
                <div style={{ background: `${site.color}08`, border: `1px solid ${site.color}15`, borderRadius: 8, padding: 10 }}>
                  <div style={{ color: site.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>BEST TIME</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{site.best_time}</p>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>PRACTICAL TIPS</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{site.practical}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
