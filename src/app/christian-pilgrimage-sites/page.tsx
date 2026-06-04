"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "sites" | "theology" | "planning" | "videos";

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

const PILGRIMAGE_THEOLOGY = [
  {
    id: 1,
    theme: "We Are Strangers and Aliens",
    icon: "🚶",
    scripture: "Hebrews 11:13-16; 1 Peter 2:11",
    description: "Christians are always on pilgrimage; earth is not our home. To go on pilgrimage is not to do something unusual for a Christian — it is to make visible what is always already true. We are a people in transit, moving toward a city whose architect and builder is God.",
    application: "Loosen your grip on comfort and security. Physical pilgrimage trains the soul to hold this world lightly. The pilgrim who returns from Jerusalem, Iona, or Santiago has practiced detachment from the permanent and attachment to the eternal.",
  },
  {
    id: 2,
    theme: "The Journey as Formation",
    icon: "🛤️",
    scripture: "Deuteronomy 8:2",
    description: "God used Israel's wilderness journey to form character — to humble them, to test them, to reveal what was in their hearts. Physical pilgrimage mirrors spiritual formation. The difficulty is not incidental to the journey; it is the point. The blisters are pedagogical.",
    application: "Physical pilgrimage mirrors spiritual formation. Choose pilgrimage routes with enough physical difficulty to be meaningful. Walk rather than ride where possible. Carry what you need and no more. Let the body teach the soul.",
  },
  {
    id: 3,
    theme: "Sacred Places in Scripture",
    icon: "🏛️",
    scripture: "Genesis 28:16-17",
    description: "&ldquo;Surely the LORD is in this place, and I did not know it.&rdquo; Bethel, Jerusalem, and Sinai were encounter sites — places where God broke into human history in ways that made the ground holy. Physical space matters to God. He chose to be born in a specific stable, to die on a specific hill, to rise in a specific garden.",
    application: "Physical space matters to God. Visit the sites of biblical encounter not as a tourist but as one seeking the same God who met Jacob, Moses, and Mary Magdalene there. Come expecting encounter, not merely information.",
  },
  {
    id: 4,
    theme: "The Communion of Saints",
    icon: "☁️",
    scripture: "Hebrews 12:1",
    description: "We are surrounded by a great cloud of witnesses. To walk where the martyrs walked is to join the ongoing story of the church across time. When you stand in the Colosseum, in the Catacombs, in Iona Abbey, you are standing in the company of those who suffered and died for the same faith you now hold.",
    application: "Walking where the martyrs walked connects us to the ongoing story. Research the saints who lived and died at each site you visit. Read their words. Pray their prayers. Let their courage challenge your own.",
  },
  {
    id: 5,
    theme: "Pilgrimage as Protest",
    icon: "✊",
    scripture: "Psalm 84:5-7",
    description: "&ldquo;Blessed are those whose strength is in you, whose hearts are set on pilgrimage.&rdquo; To go on pilgrimage in a culture of comfort is a countercultural act. It is to say that spiritual reality is worth physical inconvenience, that the unseen is worth more than the seen, that God is worth the cost of the journey.",
    application: "To go on pilgrimage is to reorder your priorities against the idol of comfort. Choose inconvenience deliberately. Refuse upgrades. Sleep simply. The sacrifice is part of the statement — I am going because this matters more than my comfort.",
  },
];

const PILGRIMAGE_PLANNING = [
  {
    id: 1,
    destination: "Jerusalem & Holy Land",
    region: "Israel / Palestinian Territory",
    duration: "7-14 days",
    bestFor: "Every Christian",
    description: "Walk where Jesus walked. The Via Dolorosa, the Garden Tomb, the Sea of Galilee, the Mount of Beatitudes, Capernaum, Bethlehem — these are the places where the events of the Gospels occurred. No amount of reading Scripture fully substitutes for standing in these locations. The land reads the Bible back to you.",
    tips: [
      "Book a guided Christian tour — an expert guide transforms the experience",
      "Allocate at least 3 full days in Jerusalem alone; the Old City deserves extended time",
      "Include a day on the Sea of Galilee; a sunrise boat ride is one of the most moving experiences available",
      "Visit Yad Vashem; it provides essential historical context for the modern state and Christian responsibility",
      "Read Gary Burge's Whose Land? Whose Promise? before traveling for theological context",
      "Bring a good Bible and read the relevant passages at each site",
    ],
  },
  {
    id: 2,
    destination: "Rome & Vatican",
    region: "Italy",
    duration: "5-7 days",
    bestFor: "Catholic, Anglican, and Church History enthusiasts",
    description: "The city where Peter and Paul were martyred and where the Western church was headquartered for over a millennium. The Vatican, the Catacombs, the Basilica of San Clemente (three layers of history beneath your feet), and the Appian Way make Rome one of the richest sites for Christian pilgrimage outside Israel.",
    tips: [
      "Book Vatican Museum tickets months in advance — day-of entry is nearly impossible",
      "Visit San Clemente Basilica for a stunning multilayered history of the church",
      "The Catacombs of Domitilla are less crowded than Callixtus and equally significant",
      "Attend Mass at St. Peter's — even non-Catholics will find it meaningful",
      "Walk the Appian Way on Sunday morning when it is closed to cars",
      "Allow one full day simply to walk the ancient streets without a schedule",
    ],
  },
  {
    id: 3,
    destination: "Canterbury",
    region: "England",
    duration: "2-3 days",
    bestFor: "Anglican and Protestant pilgrims",
    description: "The mother church of the Anglican Communion and the destination of the greatest pilgrimage tradition in English history. Thomas Becket was murdered here in 1170 and became the most venerated martyr of medieval England. Chaucer's Canterbury Tales memorialized the pilgrims who walked from London to his shrine.",
    tips: [
      "Walk the Pilgrims' Way from Winchester to Canterbury if time permits — 115 miles of medieval countryside",
      "Attend Evensong in the Cathedral for an incomparable Anglican choral experience",
      "Visit during Easter Week for the most liturgically rich services",
      "The Crypt is older than the current cathedral and deeply atmospheric",
      "Combine with visits to nearby Richborough (one of Britain's most important early Christian sites) and Dover",
      "Read T.S. Eliot's Murder in the Cathedral before visiting the Becket site",
    ],
  },
  {
    id: 4,
    destination: "Santiago de Compostela",
    region: "Spain",
    duration: "30+ days walking (shorter routes available)",
    bestFor: "Spiritual seekers; anyone at a major life transition",
    description: "The Camino Frances — the French Way — begins at Saint-Jean-Pied-de-Port in France and ends 780km later at the Cathedral of Santiago in northwest Spain. It is one of the most spiritually profound journeys available to a person in the modern world. The walking, the community, the simplicity, and the cumulative weight of a thousand years of pilgrimage create a transformative experience unlike any other.",
    tips: [
      "Train for 3-4 months before attempting the Camino Frances; blisters and knee injuries are the main dangers",
      "Pack light — most pilgrims carry too much and mail half home by day three",
      "The Camino Portugues (from Porto) is a beautiful shorter alternative at 240km",
      "Stay in albergues (pilgrim hostels) to experience the Camino community",
      "Obtain a Credencial (pilgrim passport) and collect stamps at each stop",
      "The last 100km from Sarria is the minimum for receiving the Compostela certificate",
    ],
  },
  {
    id: 5,
    destination: "Iona",
    region: "Scotland",
    duration: "3-5 days",
    bestFor: "Celtic spirituality seekers; those seeking contemplative retreat",
    description: "The island of Columba — where Irish Christianity came to evangelize Scotland and northern England in 563 AD. Iona is tiny (3 miles by 1.5 miles), remote, and extraordinarily beautiful. The Iona Community offers a rhythm of daily worship, work, and study that has formed pilgrims for generations. Celtic Christianity&rsquo;s vision of thin places — locations where the distance between heaven and earth seems especially small — is nowhere more felt than here.",
    tips: [
      "Book accommodation months in advance; the island has very limited beds",
      "Participate in the Iona Community's daily worship rhythm: morning and evening prayer in the Abbey",
      "Walk to St. Columba's Bay (where Columba landed) and collect a green stone as is traditional",
      "The Machair (western beaches) at sunset is one of the most beautiful places in Britain",
      "Read the Iona Community's Iona Abbey Worship Book before visiting",
      "The journey — train to Oban, ferry to Mull, bus, ferry — is itself part of the pilgrimage; embrace it",
    ],
  },
];

const VIDEOS = [
  { id: "v6xk8e7gdMA", title: "The Holiness of God", speaker: "R.C. Sproul" },
  { id: "7CBgp74UwbU", title: "The Trauma of Holiness", speaker: "R.C. Sproul" },
  { id: "X1rPalyUshw", title: "How Great Is Our God", speaker: "Louie Giglio" },
  { id: "JHdB1dYAteA", title: "Don't Waste Your Life", speaker: "John Piper" },
  { id: "lsTzXI7cJGA", title: "The Prodigal Sons", speaker: "Tim Keller" },
  { id: "by8ykv7-A3c", title: "Supremacy of Christ and Truth", speaker: "Voddie Baucham" },
];

export default function ChristianPilgrimageSitesPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_christian-pilgrimage-sites_tab", "sites");
  const [region, setRegion] = usePersistedState<string>("vine_christian-pilgrimage-sites_region", "All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = SITES.filter(s => region === "All" || s.region === region);
  const site = SITES.find(s => s.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🗺️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Pilgrimage &amp; Holy Sites</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The places where Christian history happened &mdash; from the hills of Galilee to the Reformation church at Wittenberg. Visiting these sites is among the most spiritually formative experiences available to Christians.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6, width: "fit-content" }}>
          {(["sites", "theology", "planning", "videos"] as const).map(t => (
            <button type="button" key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "sites" ? "Sites" : t === "theology" ? "Theology" : t === "planning" ? "Planning" : "Videos"}
            </button>
          ))}
        </div>

        {/* Sites tab */}
        {activeTab === "sites" && (
          <>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 24, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>✈️</span>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Pilgrimage is one of the oldest Christian practices. Christians have been traveling to Jerusalem since the 4th century. The purpose is not to earn God&rsquo;s favor but to let the places shape your imagination and deepen your connection to the story of God&rsquo;s people. Every site on this list will change how you read Scripture.
              </p>
            </div>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {REGION_FILTERS.map(r => (
                <button type="button" key={r} onClick={() => setRegion(r)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${region === r ? GREEN : BORDER}`, background: region === r ? `${GREEN}15` : "transparent", color: region === r ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {r}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: site ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((s, i) => (
                  <button type="button" key={i} onClick={() => setSelected(selected === s.name ? null : s.name)}
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
          </>
        )}

        {/* Theology tab */}
        {activeTab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: "0 0 8px" }}>
              Pilgrimage is not tourism with a Bible. It is a theological practice rooted in the conviction that physical space, embodied journey, and sacred encounter are categories God takes seriously. These five themes form the doctrinal foundation for why Christians go on pilgrimage.
            </p>
            {PILGRIMAGE_THEOLOGY.map(entry => (
              <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                  <span style={{ fontSize: 36 }}>{entry.icon}</span>
                  <div>
                    <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{entry.theme}</h2>
                    <span style={{ background: `${PURPLE}18`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{entry.scripture}</span>
                  </div>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }} dangerouslySetInnerHTML={{ __html: entry.description }} />
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>APPLICATION</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{entry.application}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Planning tab */}
        {activeTab === "planning" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: "0 0 8px" }}>
              Practical planning guides for the five most significant Christian pilgrimage destinations &mdash; including duration, best fit, and on-the-ground tips gathered from experienced pilgrims and spiritual directors.
            </p>
            {PILGRIMAGE_PLANNING.map(entry => (
              <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 14 }}>
                  <div>
                    <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{entry.destination}</h2>
                    <div style={{ color: MUTED, fontSize: 13 }}>{entry.region}</div>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ background: `${GREEN}12`, color: GREEN, padding: "4px 12px", borderRadius: 8, fontSize: 12, fontWeight: 700 }}>{entry.duration}</span>
                    <span style={{ background: `${PURPLE}12`, color: PURPLE, padding: "4px 12px", borderRadius: 8, fontSize: 12, fontWeight: 700 }}>{entry.bestFor}</span>
                  </div>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{entry.description}</p>
                <div style={{ background: `${BORDER}40`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 11, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>Planning Tips</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {entry.tips.map((tip, idx) => (
                      <div key={idx} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: GREEN, fontWeight: 900, fontSize: 13, flexShrink: 0, marginTop: 1 }}>{idx + 1}.</span>
                        <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.65 }}>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos tab */}
        {activeTab === "videos" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              Teaching on the holiness, greatness, and beauty of God &mdash; the convictions that send pilgrims on the road and sustain them when the journey is hard.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", borderRadius: 8 }}
                    src={`https://www.youtube.com/embed/${v.id}`} title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ color: TEXT, fontWeight: 800, fontSize: 14 }}>{v.title}</div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 4 }}>{v.speaker}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
