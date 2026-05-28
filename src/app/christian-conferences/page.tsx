"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const CATEGORIES = ["All", "Theology", "Missions", "Youth", "Women", "Worship", "Expository"];

const CONFERENCES = [
  {
    name: "The Gospel Coalition National Conference",
    org: "The Gospel Coalition",
    frequency: "Biennial",
    category: "Theology",
    color: PURPLE,
    location: "Indianapolis, IN",
    size: "~10,000 attendees",
    desc: "TGC's flagship conference brings together some of the best Bible teachers in contemporary evangelicalism for a week of gospel-centered preaching, workshops, and fellowship. Speakers have included Tim Keller, John Piper, Don Carson, Alistair Begg, Francis Chan, and many others. Sessions are free to watch online afterward. The conference is especially oriented toward pastors, church leaders, and serious laypeople who want rigorous biblical exposition.",
    website: "https://www.thegospelcoalition.org/conference/",
    why: "Best single conference for Reformed evangelical theology and expository preaching. Free online content after the conference.",
    notable: "D.A. Carson, Tim Keller, John Piper (founding figures); sessions posted to YouTube",
    initials: "TGC",
  },
  {
    name: "Together for the Gospel (T4G)",
    org: "T4G",
    frequency: "Biennial",
    category: "Theology",
    color: "#3B82F6",
    location: "Louisville, KY",
    size: "~8,000 attendees",
    desc: "Founded by Mark Dever, C.J. Mahaney, Ligon Duncan, and Al Mohler, T4G brings together Reformed Baptist and Presbyterian leaders around the shared commitment to the gospel. The conference emphasizes the health of local churches, the sufficiency of Scripture, and preaching that is both theologically rich and pastorally warm. Many consider it the most important Reformed conference in the world.",
    website: "https://t4g.org/",
    why: "Excellent for church health, elder training, and Reformed soteriology. Free sermon recordings available.",
    notable: "Ligon Duncan, Mark Dever, Al Mohler, John MacArthur",
    initials: "T4G",
  },
  {
    name: "Passion Conference",
    org: "Passion City Church",
    frequency: "Annual (January)",
    category: "Youth",
    color: "#F59E0B",
    location: "Atlanta, GA (Mercedes-Benz Stadium)",
    size: "~60,000 students",
    desc: "Started by Louie Giglio in 1997 for college-age students (18-25), Passion Conference gathers tens of thousands of young adults every January in Atlanta. It combines high-production worship (led by Hillsong United, Chris Tomlin, Kristian Stanfill, and others) with preaching from John Piper, Beth Moore, Priscilla Shirer, David Platt, and others. Passion is widely credited with shaping the worship and spiritual formation of an entire generation of young evangelicals.",
    website: "https://268generation.com/passion/",
    why: "The defining conference for college-age Christians. Excellent worship and preaching lineup. Content available on YouTube.",
    notable: "Louie Giglio, John Piper, Christine Caine; worship by Kristian Stanfill and Crowder",
    initials: "PAS",
  },
  {
    name: "Lausanne Congress",
    org: "Lausanne Movement",
    frequency: "~Every 10 years",
    category: "Missions",
    color: GREEN,
    location: "Rotating global venues",
    size: "4,000-5,000 global leaders",
    desc: "The Lausanne Congress is arguably the most significant global gathering in evangelical missions history. Founded by Billy Graham and John Stott in 1974, it produced the Lausanne Covenant — one of the most important evangelical documents of the 20th century. The 1974, 1989, 2010, and 2024 gatherings brought together church leaders from every continent to address global mission strategy. It has shaped how evangelicals understand the relationship between evangelism, social action, and contextualization.",
    website: "https://lausanne.org/",
    why: "For anyone serious about global missions, church history, and evangelical ecumenism. The Lausanne Covenant is required reading.",
    notable: "Billy Graham, John Stott (1974 founders); attended by church leaders from 200+ nations",
    initials: "LAU",
  },
  {
    name: "Ligonier National Conference",
    org: "Ligonier Ministries",
    frequency: "Annual",
    category: "Theology",
    color: "#EF4444",
    location: "Orlando, FL",
    size: "~3,000 attendees",
    desc: "Founded by R.C. Sproul in 1971, Ligonier Ministries hosts an annual national conference focused on Reformed theology, biblical exposition, and equipping laypeople. After Sproul's death in 2017, the conference continues under leaders like Sinclair Ferguson, Stephen Nichols, and Burk Parsons. The focus is consistently on the holiness and sovereignty of God, the authority of Scripture, and serious doctrinal formation for Christians who want more than surface-level Christianity.",
    website: "https://www.ligonier.org/national-conference/",
    why: "Best conference for classic Reformed theology accessible to laypeople. Excellent free content at Ligonier.org.",
    notable: "R.C. Sproul (founder, d. 2017), Sinclair Ferguson, Derek Thomas, Stephen Nichols",
    initials: "LIG",
  },
  {
    name: "Desiring God Conference",
    org: "Desiring God / Bethlehem College & Seminary",
    frequency: "Annual",
    category: "Theology",
    color: "#10B981",
    location: "Minneapolis, MN",
    size: "~2,000 attendees",
    desc: "John Piper's annual conference for pastors and serious Christians, always organized around a single theme addressed from multiple angles over three days. Past themes have included: The Pastor as Scholar, Holding Fast to the Word of Life, Contending for Our All, and Think: The Life of the Mind and the Love of God. The conference reflects Piper's theological commitments: Christian Hedonism (God is most glorified in us when we are most satisfied in him), Reformed theology, and passionate pastoral formation.",
    website: "https://www.desiringgod.org/conference",
    why: "Unique in its thematic depth. Free audio and video at DesiringGod.org after every conference.",
    notable: "John Piper; guests have included D.A. Carson, Wayne Grudem, Mark Driscoll, Tim Keller",
    initials: "DGC",
  },
  {
    name: "She Reads Truth / IF:Gathering",
    org: "IF:Gathering",
    frequency: "Annual",
    category: "Women",
    color: "#EC4899",
    location: "Austin, TX + global streaming",
    size: "~10,000 in person, 100,000+ online",
    desc: "Founded by Jennie Allen in 2014, IF:Gathering exists to equip women to know God and equip the world. The conference combines Bible teaching, worship, and practical discipleship for women of all ages. Speakers have included Christine Caine, Ann Voskamp, Priscilla Shirer, Rebekah Lyons, and Jennie Allen herself. One of the largest women's Christian conferences in the world, with satellite gatherings in thousands of churches globally.",
    website: "https://www.ifgathering.com/",
    why: "Premier conference for women's discipleship. Strong on Scripture, community, and practical application.",
    notable: "Jennie Allen (founder); Christine Caine, Priscilla Shirer, Ann Voskamp",
    initials: "IFG",
  },
  {
    name: "Exponential Conference",
    org: "Exponential",
    frequency: "Annual",
    category: "Missions",
    color: "#A855F7",
    location: "Orlando, FL + regional events",
    size: "~4,000 in person",
    desc: "Exponential is the world's largest church planting conference, gathering church planters, pastors, and leaders passionate about multiplying the church. It focuses on the practical and theological dimensions of planting new congregations, reaching unchurched populations, and multiplication movements. Resources, books, and all session content are made freely available. It has had particular influence among Baptist and non-denominational evangelical church planters.",
    website: "https://exponential.org/",
    why: "Essential for church planters and anyone with a heart for reaching new communities.",
    notable: "Ed Stetzer, Alan Hirsch, Dave Ferguson, Francis Chan",
    initials: "EXP",
  },
  {
    name: "Bethel School of Supernatural Ministry (BSSM) Awakening",
    org: "Bethel Church",
    frequency: "Annual",
    category: "Worship",
    color: "#00D4AA",
    location: "Redding, CA",
    size: "~3,000 students annually",
    desc: "BSSM is the flagship charismatic/Pentecostal training conference and ministry school, associated with Bethel Church and leaders like Bill Johnson and Kris Vallotton. It emphasizes healing prayer, prophetic ministry, and Spirit-empowered evangelism. It represents a significant wing of global Christianity — charismatic and Pentecostal traditions that account for over 600 million Christians worldwide. Students come from over 80 countries. Whether or not one agrees with all of Bethel's theology, its influence on global charismatic Christianity is undeniable.",
    website: "https://bssm.net/",
    why: "Largest charismatic training school in North America. Important for understanding the global charismatic movement.",
    notable: "Bill Johnson, Kris Vallotton, Danny Silk; alumni include Bethel Music worship leaders",
    initials: "BSS",
  },
  {
    name: "Advance the Church Conference",
    org: "9Marks",
    frequency: "Annual",
    category: "Theology",
    color: "#F59E0B",
    location: "Washington, D.C.",
    size: "~500 church leaders",
    desc: "9Marks's annual conference for church leaders, focused on the marks of a healthy church: expository preaching, biblical theology, the gospel, conversion, evangelism, membership, discipline, discipleship, and leadership. Smaller than most major conferences, it prioritizes depth over breadth. Mark Dever's 9Marks organization has had enormous influence on church polity, elder-led church governance, and the recovery of meaningful church membership in evangelical and Baptist circles.",
    website: "https://www.9marks.org/events/",
    why: "Best conference for church health, ecclesiology, and local church leadership. Excellent free resources at 9Marks.org.",
    notable: "Mark Dever (founder), Jonathan Leeman, Bobby Jamieson",
    initials: "9MC",
  },
];

export default function ChristianConferencesPage() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = CONFERENCES.filter(c => category === "All" || c.category === category);
  const conf = CONFERENCES.find(c => c.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🏟️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Major Christian Conferences</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The conferences that are shaping evangelical Christianity — from Reformed theology to charismatic renewal, global missions to youth revival. Find your tribe and go deeper.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCategory(c)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${category === c ? GREEN : BORDER}`, background: category === c ? `${GREEN}15` : "transparent", color: category === c ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {c}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: conf ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((c, i) => (
              <button key={i} onClick={() => setSelected(selected === c.name ? null : c.name)}
                style={{ background: selected === c.name ? `${c.color}12` : CARD, border: `1px solid ${selected === c.name ? c.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${c.color}20`, border: `1px solid ${c.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                    {c.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{c.name}</span>
                      <span style={{ background: `${c.color}15`, color: c.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{c.category}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{c.org} · {c.frequency} · {c.location}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 11, flexShrink: 0 }}>{c.size}</span>
                </div>
              </button>
            ))}
          </div>

          {conf && (
            <div style={{ background: CARD, border: `1px solid ${conf.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: `${conf.color}20`, border: `1px solid ${conf.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: conf.color, fontWeight: 900, fontSize: 12, flexShrink: 0 }}>
                  {conf.initials}
                </div>
                <div>
                  <h2 style={{ color: conf.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{conf.name}</h2>
                  <div style={{ color: MUTED, fontSize: 12 }}>{conf.org} · {conf.frequency}</div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
                <div style={{ background: `${conf.color}08`, border: `1px solid ${conf.color}15`, borderRadius: 8, padding: 10 }}>
                  <div style={{ color: conf.color, fontWeight: 700, fontSize: 10, marginBottom: 3 }}>LOCATION</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{conf.location}</p>
                </div>
                <div style={{ background: `${conf.color}08`, border: `1px solid ${conf.color}15`, borderRadius: 8, padding: 10 }}>
                  <div style={{ color: conf.color, fontWeight: 700, fontSize: 10, marginBottom: 3 }}>SIZE</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{conf.size}</p>
                </div>
              </div>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12, marginBottom: 14 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>NOTABLE SPEAKERS</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{conf.notable}</p>
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{conf.desc}</p>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginBottom: 16 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY ATTEND</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{conf.why}</p>
              </div>

              <a href={conf.website} target="_blank" rel="noopener noreferrer"
                style={{ background: `${conf.color}15`, border: `1px solid ${conf.color}30`, color: conf.color, padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                🌐 Visit Official Site
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
