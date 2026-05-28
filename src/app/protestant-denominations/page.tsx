"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

export default function ProtestantDenominationsPage() {
  const [family, setFamily] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = DENOMS.filter(d => family === "All" || d.family === family);
  const denom = DENOMS.find(d => d.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⛪</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Protestant Denominations Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The major Protestant traditions — what they believe, where they came from, and what makes each one distinctive. Know your tradition; respect the others.
          </p>
        </div>

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
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>Founded {d.founded} · {d.size.split(",")[0]}</div>
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
                  <div style={{ color: MUTED, fontSize: 12 }}>Founded {denom.founded} · {denom.theology}</div>
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
      </div>
    </div>
  );
}
