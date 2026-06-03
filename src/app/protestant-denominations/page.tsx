"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "denominations" | "history" | "comparison" | "voices" | "videos";

const FAMILIES = ["All", "Reformed", "Baptist", "Lutheran", "Wesleyan", "Anglican", "Pentecostal", "Nondenominational"];

const DENOMS = [
  {
    name: "Presbyterian Church in America (PCA)",
    family: "Reformed",
    founded: 1973,
    size: "~380,000 members, 1,700+ churches (USA)",
    color: PURPLE,
    theology: "Calvinist / Reformed",
    distinctives: "Westminster Confession of Faith (1646) as doctrinal standard. Elder-led (Presbyterian) governance. Infant baptism as covenant sign. Cessationist on sign gifts. Complementarian (male-only ordination). Strong expository preaching tradition.",
    notable_churches: "Redeemer Presbyterian (New York, Tim Keller); Christ Presbyterian (Nashville); Church of the Good Shepherd (Durham, Sam Ferguson)",
    famous_figures: "J. Gresham Machen (founder), Tim Keller, Ligon Duncan, Sean Michael Lucas",
    why_know: "One of the fastest-growing conservative Reformed denominations in North America. Theologically rigorous, serious about church planting.",
    website: "https://www.pcanet.org/",
    initials: "PCA",
  },
  {
    name: "Southern Baptist Convention (SBC)",
    family: "Baptist",
    founded: 1845,
    size: "~14 million members, 46,000+ churches (USA)",
    color: "#3B82F6",
    theology: "Evangelical, Moderate-Calvinist to Non-Calvinist",
    distinctives: "Believer's baptism by immersion. Congregational governance. Priesthood of all believers. Strong missions emphasis (IMB = world's largest Protestant missions agency). Baptist Faith and Message (2000) as confessional document. Complementarian majority.",
    notable_churches: "First Baptist Dallas (Robert Jeffress); McLean Bible (David Platt); The Summit Church (JD Greear)",
    famous_figures: "Billy Graham (raised SBC), Charles Spurgeon (19th c influence), Al Mohler, David Platt",
    why_know: "Largest Protestant denomination in the USA. Represents a wide theological range within Baptist convictions. Significant recent controversy over complementarianism, CRT, and abuse handling.",
    website: "https://www.sbc.net/",
    initials: "SBC",
  },
  {
    name: "The Anglican Church in North America (ACNA)",
    family: "Anglican",
    founded: 2009,
    size: "~130,000 members, 1,000+ churches",
    color: "#F59E0B",
    theology: "Anglican via media — Reformed catholicism",
    distinctives: "Book of Common Prayer liturgy. Episcopal governance (bishops, priests, deacons). Both infant and adult baptism depending on tradition. Anglican 39 Articles as doctrinal foundation. High sacramental view. Wide theological range (evangelical to Anglo-Catholic). Formed by orthodox Anglicans departing The Episcopal Church over LGBTQ ordination.",
    notable_churches: "Church of the Ascension (Pittsburgh); All Saints Waco (Matt Chandler, after 2023)",
    famous_figures: "Stephen Noll, Robert Duncan (ACNA founders); C.S. Lewis and J.I. Packer (Anglican tradition)",
    why_know: "Growing conservative Anglican body in North America, part of Global South Anglican Communion. Combines liturgical richness with evangelical theology.",
    website: "https://www.anglicanchurch.net/",
    initials: "ACNA",
  },
  {
    name: "United Methodist Church (UMC)",
    family: "Wesleyan",
    founded: 1784,
    size: "~5 million members USA (post-2024 split)",
    color: "#EC4899",
    theology: "Wesleyan-Arminian",
    distinctives: "John Wesley's theology: prevenient grace, free will, sanctification as second work of grace, possibility of Christian perfection. Episcopal governance. Infant baptism. Scripture + tradition + reason + experience (Wesleyan Quadrilateral). Significant liberal and conservative wings — progressive denominations formed after 2024 split over LGBTQ ordination.",
    notable_churches: "Saddleback (Rick Warren, raised UMC); multiple large Wesleyan congregations across Midwest",
    famous_figures: "John Wesley, Charles Wesley (18th c), Francis Asbury, E. Stanley Jones",
    why_know: "One of the largest Protestant denominations historically. Currently fractured over sexuality. The Global Methodist Church formed in 2022 for those holding traditional positions.",
    website: "https://www.umc.org/",
    initials: "UMC",
  },
  {
    name: "Evangelical Free Church of America (EFCA)",
    family: "Nondenominational",
    founded: 1950,
    size: "~400,000 members, 1,500+ churches",
    color: GREEN,
    theology: "Evangelical, Broadly Reformed, Cessationist to Open",
    distinctives: "Statement of Faith is its confessional document. Allows latitude on eschatology (unusual — no required position on millennium). Congregational governance. Believer's baptism. 'Free' means freedom on secondary doctrines while maintaining core evangelical orthodoxy.",
    notable_churches: "Trinity Evangelical (Chicago — seminary connection); EFCA Rooted churches; many megachurches nationally",
    famous_figures: "D.A. Carson (long-time Trinity Evangelical faculty); Bruce Ware, Wayne Grudem",
    why_know: "One of the most theologically healthy denominations — serious about doctrine without requiring uniformity on disputable matters. Excellent seminaries.",
    website: "https://www.efca.org/",
    initials: "EFC",
  },
  {
    name: "Assemblies of God (AG)",
    family: "Pentecostal",
    founded: 1914,
    size: "~3 million USA; 70+ million globally",
    color: "#EF4444",
    theology: "Pentecostal/Charismatic, Arminian",
    distinctives: "Baptism of the Holy Spirit as second work of grace, evidenced by speaking in tongues. Continuationism on all gifts. Divine healing as part of the atonement. Strong missions emphasis (world's largest Pentecostal denomination). Free will and possibility of losing salvation.",
    notable_churches: "James River Church (Springfield MO); multiple large AG churches nationally; most Hillsong US churches (historically affiliated)",
    famous_figures: "Smith Wigglesworth (early 20th c), Jimmy Swaggart (controversial), Joyce Meyer (historically AG)",
    why_know: "Largest Pentecostal denomination globally. Represents 600+ million Pentecostal/Charismatic Christians worldwide — the largest segment of global Christianity growth.",
    website: "https://ag.org/",
    initials: "AG",
  },
  {
    name: "Lutheran Church — Missouri Synod (LCMS)",
    family: "Lutheran",
    founded: 1847,
    size: "~1.8 million members, 6,000+ churches (USA)",
    color: "#10B981",
    theology: "Confessional Lutheran",
    distinctives: "Book of Concord (1580) as doctrinal standard. Real presence of Christ in the Eucharist (consubstantiation). Law/Gospel distinction as hermeneutical key. Both infant baptism and believer's baptism recognized. Liturgical tradition. Male-only ordination. Scripture inerrancy emphasized. Different from the ELCA (liberal Lutheran body) on most major current controversies.",
    notable_churches: "Concordia churches; Lutheran Hour Ministries; Concordia Publishing House",
    famous_figures: "Martin Luther (founder of Lutheran tradition); C.F.W. Walther (LCMS founder); Rod Rosenbladt (modern)",
    why_know: "Largest confessional Lutheran denomination in America. Known for theological precision on justification and Law/Gospel.",
    website: "https://www.lcms.org/",
    initials: "LCMS",
  },
  {
    name: "Acts 29 Network",
    family: "Reformed",
    founded: 2001,
    size: "~700 churches worldwide",
    color: "#A855F7",
    theology: "Reformed, Complementarian, Missional",
    distinctives: "Not technically a denomination but a church-planting network. Calvinist theology. Complementarian. Elder-led. Multiethnic church planting focus. Open but cautious on gifts. Associated with Reformed Baptist and Presbyterian theology. Founded by Mark Driscoll (left 2014); led by Matt Chandler through 2022.",
    notable_churches: "The Village Church (Dallas, TX); Sojourn Community (Louisville); C3 churches; Redemption Church (Tempe)",
    famous_figures: "Mark Driscoll (founder, left in controversy), Matt Chandler (long-time president), Darrin Patrick",
    why_know: "One of the most influential Reformed church-planting networks of the 21st century. Has planted hundreds of gospel-centered churches globally.",
    website: "https://www.acts29.com/",
    initials: "A29",
  },
];

const DENOM_HISTORY = [
  {
    id: 1,
    event: "Reformation Begins",
    year: "1517",
    description: "Martin Luther posts his 95 Theses on the door of the Castle Church in Wittenberg, challenging the sale of indulgences and sparking the Protestant Reformation across Europe.",
    significance: "The foundational act that broke Western Christianity's institutional unity and launched the Protestant tradition. Sola Scriptura, Sola Fide, and Sola Gratia became the rallying doctrines of the new movement.",
  },
  {
    id: 2,
    event: "Peace of Augsburg",
    year: "1555",
    description: "The Holy Roman Emperor Charles V and the Schmalkaldic League sign a peace treaty formally recognizing Lutheranism as a legitimate Christian tradition alongside Catholicism within the Empire.",
    significance: "Established the principle cuius regio, eius religio — whose realm, his religion. Created legal space for Protestant churches and set the template for denominational coexistence in the West.",
  },
  {
    id: 3,
    event: "English Reformation",
    year: "1534–1559",
    description: "Henry VIII breaks with Rome to obtain an annulment, establishing the Church of England. Subsequent reigns swing between Protestantism and Catholicism until Elizabeth I establishes a via media settlement.",
    significance: "Birthed the Anglican tradition — a distinctive blend of Reformed theology and Catholic liturgical order. Eventually produced Puritanism, Methodism, and influenced Baptist and Congregationalist movements.",
  },
  {
    id: 4,
    event: "Puritan Movement",
    year: "1560–1660",
    description: "English Puritans seek to purify the Church of England of remaining Catholic elements. Many emigrate to New England. The Westminster Assembly (1643–1649) produces the Westminster Confession of Faith.",
    significance: "Produced Reformed Baptist and Presbyterian theology in its mature form. The Westminster Standards remain the doctrinal backbone of the PCA, OPC, and global Reformed Presbyterianism to this day.",
  },
  {
    id: 5,
    event: "Great Awakening",
    year: "1730s–1740s",
    description: "A trans-Atlantic revival led by Jonathan Edwards in New England and George Whitefield across the colonies transforms American Protestant Christianity. Emotional conversion and personal regeneration become central.",
    significance: "Gave birth to evangelical revivalism as a movement. Strengthened Baptist and Methodist growth, weakened established churches, and planted the seeds of American voluntarist denominationalism.",
  },
  {
    id: 6,
    event: "Modern Evangelical Movement",
    year: "1940s–present",
    description: "Billy Graham, Carl Henry, and Harold Ockenga lead a coalition of neo-evangelicals away from fundamentalist separatism. The National Association of Evangelicals (1942) and Fuller Seminary (1947) anchor the movement.",
    significance: "Redefined American Protestant identity around gospel cooperation across denominational lines. Created the evangelical ecumenism that characterizes much of contemporary Protestant life — and much of its tension.",
  },
];

const DENOM_COMPARISON = [
  {
    id: 1,
    topic: "Baptism",
    icon: "💧",
    traditions: [
      { name: "Reformed/Presbyterian", position: "Infant baptism as covenant sign; baptism does not regenerate but marks covenant membership" },
      { name: "Baptist", position: "Believer's baptism by immersion only; must follow personal profession of faith" },
      { name: "Lutheran", position: "Infant baptism; sacramental — works regeneration in the elect" },
      { name: "Wesleyan/Methodist", position: "Infant baptism; a means of grace but not automatic regeneration" },
      { name: "Pentecostal", position: "Believer's baptism by immersion; a separate Spirit baptism also emphasized" },
    ],
  },
  {
    id: 2,
    topic: "Lord's Supper",
    icon: "🍞",
    traditions: [
      { name: "Reformed/Presbyterian", position: "Spiritual presence — Christ truly present but not physically; memorial with real spiritual benefit" },
      { name: "Baptist", position: "Memorial only — an ordinance commemorating Christ's sacrifice with no special grace" },
      { name: "Lutheran", position: "Real bodily presence — Christ's body and blood in, with, and under the bread and wine (consubstantiation)" },
      { name: "Wesleyan/Methodist", position: "Means of grace — Christ truly present in a spiritual sense; frequent communion encouraged" },
      { name: "Pentecostal", position: "Generally memorial; some emphasize healing grace available through communion" },
    ],
  },
  {
    id: 3,
    topic: "Church Governance",
    icon: "🏛️",
    traditions: [
      { name: "Reformed/Presbyterian", position: "Presbyterian — ruled by elders (presbyters) in hierarchical councils: session, presbytery, general assembly" },
      { name: "Baptist", position: "Congregational — each local church is autonomous; no binding authority above the local congregation" },
      { name: "Lutheran", position: "Varies — LCMS is representative/synodical; ELCA is episcopal with bishops" },
      { name: "Wesleyan/Methodist", position: "Episcopal — governed by bishops in a connectional system; strong central authority" },
      { name: "Pentecostal", position: "Varies — AG is a cooperative fellowship; many Pentecostal churches are congregational or apostolic" },
    ],
  },
  {
    id: 4,
    topic: "Salvation & Predestination",
    icon: "✝️",
    traditions: [
      { name: "Reformed/Presbyterian", position: "5-point Calvinism (TULIP) — unconditional election, limited atonement, irresistible grace, perseverance of the saints" },
      { name: "Baptist", position: "Divided — Calvinist (Reformed Baptists) to Arminian (General Baptists); SBC has both traditions" },
      { name: "Lutheran", position: "Single predestination — God elects believers; does not predestine anyone to damnation; Law/Gospel tension" },
      { name: "Wesleyan/Methodist", position: "Arminian — prevenient grace enables free choice; salvation can be forfeited; universal atonement" },
      { name: "Pentecostal", position: "Arminian — free will, universal atonement, possibility of apostasy; Spirit baptism as second blessing" },
    ],
  },
  {
    id: 5,
    topic: "Scripture & Tradition",
    icon: "📖",
    traditions: [
      { name: "Reformed/Presbyterian", position: "Sola Scriptura strictly — Scripture alone is the final authority; tradition serves but never equals Scripture" },
      { name: "Baptist", position: "Sola Scriptura — Scripture alone; historically suspicious of creeds, though Baptist confessions are used" },
      { name: "Lutheran", position: "Sola Scriptura — Scripture norma normans; confessions (Book of Concord) as norma normata under Scripture" },
      { name: "Wesleyan/Methodist", position: "Wesleyan Quadrilateral — Scripture is primary, interpreted through tradition, reason, and experience" },
      { name: "Pentecostal", position: "Scripture inerrant and sufficient; experience of the Spirit seen as confirming and illuminating Scripture" },
    ],
  },
];

const VOICES_DENOM = [
  {
    id: 1,
    name: "Martin Luther",
    era: "1483–1546",
    context: "Lutheran Founding",
    bio: "German Augustinian friar, theologian, and professor whose 95 Theses ignited the Protestant Reformation. Translated the Bible into German, wrote major catechisms, and defined Lutheran doctrine through the Augsburg Confession and other writings.",
    quote: "Here I stand. I can do no other. God help me. Amen.",
    contribution: "Luther's doctrine of justification by faith alone became the defining theological claim of Protestantism. His insistence that every believer has direct access to God through Scripture — without a priestly mediator — restructured Western Christianity and created the conditions for every Protestant denomination that followed.",
  },
  {
    id: 2,
    name: "John Calvin",
    era: "1509–1564",
    context: "Reformed Theology",
    bio: "French lawyer-turned-theologian who became the principal architect of Reformed theology. Led the church in Geneva, produced the Institutes of the Christian Religion, and trained pastors who spread Reformed Christianity across Europe.",
    quote: "Our wisdom, in so far as it ought to be deemed true and solid wisdom, consists almost entirely of two parts: the knowledge of God and of ourselves.",
    contribution: "Calvin's systematic theology gave Reformed Protestantism its intellectual framework. His doctrines of sovereignty, predestination, covenant, and church discipline shaped Presbyterianism, the Puritan movement, and much of the Reformed Baptist tradition — influencing theology to this day.",
  },
  {
    id: 3,
    name: "John Wesley",
    era: "1703–1791",
    context: "Methodist Movement",
    bio: "Anglican priest and Oxford-educated theologian whose heart was 'strangely warmed' at Aldersgate in 1738. Traveled over 250,000 miles on horseback preaching the gospel, organized societies and classes that became the Methodist Church.",
    quote: "Do all the good you can, by all the means you can, in all the ways you can, in all the places you can, at all the times you can, to all the people you can, as long as ever you can.",
    contribution: "Wesley's theology of prevenient grace, free will, and sanctification as a second work of grace gave Arminian Protestantism its mature form. His organizational genius through small groups and itinerant preaching created the template for evangelical revivalism and the eventual Holiness and Pentecostal movements.",
  },
  {
    id: 4,
    name: "Roger Williams",
    era: "1603–1683",
    context: "Baptist Freedom",
    bio: "Puritan minister who founded Providence Plantations (Rhode Island) after being banished from Massachusetts Bay Colony for his views on religious liberty and separation of church and state. Founded the first Baptist congregation in America in 1638.",
    quote: "Forced worship stinks in God's nostrils.",
    contribution: "Williams was the first significant Protestant advocate for complete religious liberty and separation of church and state. His founding of Rhode Island as a haven for religious dissenters created a model of pluralism that eventually shaped the First Amendment. His Baptist convictions on believer's baptism and voluntarist church membership remain central to the tradition.",
  },
  {
    id: 5,
    name: "William Booth",
    era: "1829–1912",
    context: "Salvation Army",
    bio: "Methodist minister who left institutional church in 1865 to preach to the poor in London's East End, founding the East London Christian Mission, which became the Salvation Army in 1878. Organized it along military lines with ranks, uniforms, and a commitment to both evangelism and social service.",
    quote: "Go for souls. Go for the worst.",
    contribution: "Booth integrated gospel proclamation with radical social action decades before the Social Gospel movement. The Salvation Army's model of combining evangelism with soup kitchens, shelters, and rehabilitation programs demonstrated that Wesleyan theology produced not only personal holiness but institutional mercy — a model that continues to shape evangelical social ministry worldwide.",
  },
];

export default function ProtestantDenominationsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("denominations");
  const [family, setFamily] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<number>(1);

  const filtered = DENOMS.filter(d => family === "All" || d.family === family);
  const denom = DENOMS.find(d => d.name === selected);
  const voice = VOICES_DENOM.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⛪</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Protestant Denominations Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The major Protestant traditions &mdash; what they believe, where they came from, and what makes each one distinctive. Know your tradition; respect the others.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6, width: "fit-content" }}>
          {(["denominations", "history", "comparison", "voices", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)}
              style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "denominations" ? "Denominations" : t === "history" ? "History" : t === "comparison" ? "Comparison" : t === "voices" ? "Voices" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {/* Denominations Tab */}
        {activeTab === "denominations" && (
          <>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {FAMILIES.map(f => (
                <button key={f} onClick={() => setFamily(f)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${family === f ? GREEN : BORDER}`, background: family === f ? `${GREEN}15` : "transparent", color: family === f ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {f}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: denom ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((d, i) => (
                  <button key={i} onClick={() => setSelected(selected === d.name ? null : d.name)}
                    style={{ background: selected === d.name ? `${d.color}12` : CARD, border: `1px solid ${selected === d.name ? d.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${d.color}20`, border: `1px solid ${d.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: d.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                        {d.initials}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{d.name}</span>
                          <span style={{ background: `${d.color}15`, color: d.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{d.family}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>Founded {d.founded} &middot; {d.size.split(",")[0]}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {denom && (
                <div style={{ background: CARD, border: `1px solid ${denom.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: `${denom.color}20`, border: `1px solid ${denom.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: denom.color, fontWeight: 900, fontSize: 11, flexShrink: 0 }}>
                      {denom.initials}
                    </div>
                    <div>
                      <h2 style={{ color: denom.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{denom.name}</h2>
                      <div style={{ color: MUTED, fontSize: 12 }}>Founded {denom.founded} &middot; {denom.theology}</div>
                    </div>
                  </div>

                  <div style={{ background: `${denom.color}08`, border: `1px solid ${denom.color}15`, borderRadius: 8, padding: 10, marginBottom: 12 }}>
                    <div style={{ color: denom.color, fontWeight: 700, fontSize: 10, marginBottom: 3 }}>SIZE</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{denom.size}</p>
                  </div>

                  <div style={{ marginBottom: 14 }}>
                    <div style={{ color: denom.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY DISTINCTIVES</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{denom.distinctives}</p>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
                    <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10 }}>
                      <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>KEY FIGURES</div>
                      <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{denom.famous_figures}</p>
                    </div>
                    <div style={{ background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10 }}>
                      <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>NOTABLE CHURCHES</div>
                      <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{denom.notable_churches}</p>
                    </div>
                  </div>

                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginBottom: 16 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY KNOW THIS TRADITION</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{denom.why_know}</p>
                  </div>

                  <a href={denom.website} target="_blank" rel="noopener noreferrer"
                    style={{ background: `${denom.color}15`, border: `1px solid ${denom.color}30`, color: denom.color, padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    🌐 Official Website
                  </a>
                </div>
              )}
            </div>
          </>
        )}

        {/* History Tab */}
        {activeTab === "history" && (
          <div style={{ maxWidth: 720 }}>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>Protestant History Timeline</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Six turning points that shaped Protestant Christianity from the Reformation to today.</p>
            </div>
            <div style={{ position: "relative", paddingLeft: 32 }}>
              <div style={{ position: "absolute", left: 11, top: 0, bottom: 0, width: 2, background: `${BORDER}` }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {DENOM_HISTORY.map((h) => (
                  <div key={h.id} style={{ position: "relative" }}>
                    <div style={{ position: "absolute", left: -32, top: 2, width: 22, height: 22, borderRadius: "50%", background: PURPLE, border: `2px solid ${BG}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff" }} />
                    </div>
                    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                        <span style={{ background: PURPLE, color: "#fff", fontWeight: 900, fontSize: 12, padding: "3px 10px", borderRadius: 6 }}>{h.year}</span>
                        <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 16, margin: 0 }}>{h.event}</h3>
                      </div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: "0 0 12px" }}>{h.description}</p>
                      <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 10 }}>
                        <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>SIGNIFICANCE</div>
                        <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.6, margin: 0 }}>{h.significance}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Comparison Tab */}
        {activeTab === "comparison" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>Theological Comparison</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>How five major Protestant traditions approach five core theological topics.</p>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 700 }}>
                <thead>
                  <tr>
                    <th style={{ background: CARD, border: `1px solid ${BORDER}`, padding: "12px 16px", textAlign: "left", color: MUTED, fontSize: 12, fontWeight: 700, width: 140 }}>TOPIC</th>
                    {DENOM_COMPARISON[0].traditions.map(t => (
                      <th key={t.name} style={{ background: CARD, border: `1px solid ${BORDER}`, padding: "12px 16px", textAlign: "left", color: TEXT, fontSize: 12, fontWeight: 800, minWidth: 160 }}>{t.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DENOM_COMPARISON.map((row) => (
                    <tr key={row.id}>
                      <td style={{ background: `${PURPLE}08`, border: `1px solid ${BORDER}`, padding: "14px 16px", verticalAlign: "top" }}>
                        <div style={{ fontSize: 18, marginBottom: 4 }}>{row.icon}</div>
                        <div style={{ color: PURPLE, fontWeight: 800, fontSize: 13 }}>{row.topic}</div>
                      </td>
                      {row.traditions.map(t => (
                        <td key={t.name} style={{ background: CARD, border: `1px solid ${BORDER}`, padding: "14px 16px", color: TEXT, fontSize: 12, lineHeight: 1.6, verticalAlign: "top" }}>{t.position}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Voices Tab */}
        {activeTab === "voices" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>Founding Voices</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>The men who defined Protestant Christianity&rsquo;s major streams.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 20, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {VOICES_DENOM.map(v => (
                  <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                    style={{ background: selectedVoice === v.id ? `${PURPLE}18` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE + "60" : BORDER}`, borderRadius: 10, padding: "14px 16px", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ color: TEXT, fontWeight: 800, fontSize: 14 }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{v.era} &middot; {v.context}</div>
                  </button>
                ))}
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voice.name}</h3>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ background: `${PURPLE}18`, color: PURPLE, fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 6 }}>{voice.era}</span>
                    <span style={{ background: `${GREEN}12`, color: GREEN, fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 6 }}>{voice.context}</span>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, marginBottom: 18 }}>{voice.bio}</p>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}25`, borderRadius: 10, padding: 16, marginBottom: 18 }}>
                  <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, marginBottom: 8 }}>MEMORABLE QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{voice.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, marginBottom: 8 }}>LASTING CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{voice.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on Protestant denominations, church history, and theological distinctives.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "jzg-QN3mtx4", title: "Lutheran, Reformed, Methodist & Baptist: What's the Difference?", channel: "Gospel Simplicity", description: "A clear comparison of four major Protestant families — their theological commitments, historical origins, and what makes each distinctive." },
                  { videoId: "OLy6LNzrbKg", title: "Pentecostals, Baptists, Presbyterians, and Methodists: The Differences", channel: "Gospel Simplicity", description: "An accessible introduction to four major Protestant traditions, covering their theology of salvation, worship, sacraments, and church governance." },
                  { videoId: "tzLS4O7YaUg", title: "All Christian Denominations Explained in 12 Minutes", channel: "Christianity Facts", description: "A rapid overview of the entire Christian denominational landscape — from Roman Catholic to Eastern Orthodox to the full range of Protestant traditions." },
                  { videoId: "8B8jTX4ayHQ", title: "10 Denominations Explained — Which Ones Still Follow the Bible?", channel: "Redeemed Zoomer", description: "A biblically grounded analysis of ten major Christian denominations, examining their doctrinal commitments, strengths, and weaknesses." },
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
      <Footer />
    </div>
  );
}
