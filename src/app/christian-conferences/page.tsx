"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "conferences" | "speakers" | "howto" | "videos";

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

const CONF_SPEAKERS = [
  {
    id: "piper",
    name: "John Piper",
    known_for: "Desiring God, Christian Hedonism",
    conferences: ["Desiring God Conference", "Passion Conference", "Together for the Gospel"],
    bio: "John Piper served as pastor of Bethlehem Baptist Church in Minneapolis for 33 years before founding Desiring God Ministries. His theology of Christian Hedonism — the idea that God is most glorified in us when we are most satisfied in him — has shaped a generation of evangelicals. He has preached at Passion Conference dozens of times, often leaving students in tears.",
    quote: "God is most glorified in us when we are most satisfied in him.",
    style: "Expository, passionate, emotionally intense. Known for weeping at the pulpit and shouting over texts that move him.",
  },
  {
    id: "platt",
    name: "David Platt",
    known_for: "Radical, Secret Church",
    conferences: ["Passion Conference", "Secret Church", "T4G"],
    bio: "David Platt became one of the youngest megachurch pastors in America at age 26, leading The Church at Brook Hills in Birmingham. His book Radical challenged American evangelical consumerism and sold millions of copies. He later led the Southern Baptist Convention's International Mission Board. His Secret Church events — 6-hour prayer and teaching marathons — draw thousands in America with simultaneous global satellite gatherings.",
    quote: "The greatest need in the world is for men and women who will give their lives for the sake of the gospel.",
    style: "Urgent, convicting, globally-minded. Speaks with a sense of moral seriousness about the cost of discipleship.",
  },
  {
    id: "giglio",
    name: "Louie Giglio",
    known_for: "Passion Conference (founder), How Great Is Our God",
    conferences: ["Passion Conference"],
    bio: "Louie Giglio founded the Passion movement in 1997 with a vision to gather college students around the supremacy of Jesus Christ. Passion Conference now fills NFL stadiums annually. His sermon 'How Great Is Our God' — which connects astronomy and the cross — has been heard by tens of millions and is one of the most-watched Christian messages ever recorded. He pastors Passion City Church in Atlanta.",
    quote: "You are not the point. God is the point.",
    style: "Inspirational, visually stunning, wonder-inducing. Known for using science and creation to magnify the greatness of God.",
  },
  {
    id: "moore",
    name: "Beth Moore",
    known_for: "Living Proof Live, women's Bible teaching",
    conferences: ["Living Proof Live"],
    bio: "Beth Moore is one of the most widely read and heard women in evangelical Christianity. Her Living Proof Live conferences and Bible studies have been used by millions of women worldwide. She is known for her deep personal transparency, her passion for Scripture, and her ability to connect biblical text to the emotional interior of women's lives. Her ministry has spanned over four decades.",
    quote: "God never said that the journey would be easy, but He did say that the arrival would be worthwhile.",
    style: "Pastoral, vulnerable, emotionally resonant. Brings personal testimony into direct contact with Scripture.",
  },
  {
    id: "begg",
    name: "Alistair Begg",
    known_for: "Basics Conference, Truth for Life",
    conferences: ["Basics Conference", "The Gospel Coalition"],
    bio: "Alistair Begg is a Scottish expository preacher who has served as senior pastor of Parkside Church near Cleveland, Ohio since 1983. His radio ministry Truth for Life broadcasts to millions daily. The Basics Conference he hosts annually gathers pastors for focused training in biblical exposition. He is known for his clarity, wit, warmth, and uncompromising commitment to letting Scripture speak for itself.",
    quote: "The Bible is not a book of suggestions. It is a book of commands wrapped in promises.",
    style: "Clear, witty, warm, and relentlessly expository. Combines Scottish humor with pastoral depth.",
  },
  {
    id: "chan",
    name: "Francis Chan",
    known_for: "Crazy Love, Forgotten God",
    conferences: ["Passion Conference", "Exponential", "various"],
    bio: "Francis Chan founded Cornerstone Community Church in Simi Valley, California, which grew to 5,000 members. He walked away from it to pursue radical, simple Christianity. His books Crazy Love and Forgotten God have sold millions. He now leads a network of house churches in San Francisco. Chan is one of the most compelling voices calling the American church back to costly, Spirit-filled discipleship.",
    quote: "Our greatest fear should not be of failure, but of succeeding at things in life that don&rsquo;t really matter.",
    style: "Urgent, personal, deeply self-reflective. Known for illustrating points with striking visual props and personal stories of sacrifice.",
  },
];

const CONF_GUIDE = [
  {
    id: "prepare",
    title: "Prepare Before You Go",
    icon: "📖",
    description: "The most productive conference-goers arrive already engaged. Pre-conference preparation transforms passive listening into active learning.",
    tips: [
      "Read at least one book by the main speaker before attending",
      "Listen to 2-3 recent sermons or talks from each major speaker",
      "Write down 1-2 questions you are genuinely wrestling with",
      "Pray specifically for openness to being challenged and changed",
      "Review the conference schedule and mark the sessions you most need",
    ],
  },
  {
    id: "notes",
    title: "Take Handwritten Notes",
    icon: "✏️",
    description: "Research consistently shows handwritten notes produce better retention than digital notes. Write to process, not just to record.",
    tips: [
      "Use a dedicated notebook, not your phone or laptop",
      "Write ideas in your own words as you hear them",
      "Mark with a star anything you want to act on",
      "Leave margin space for questions and personal applications",
      "Review and expand your notes within 24 hours",
    ],
  },
  {
    id: "connect",
    title: "Connect with Others",
    icon: "🤝",
    description: "Conferences are not only for content — they are for community. Some of the most significant conversations happen in hallways and over meals.",
    tips: [
      "Introduce yourself to at least 3 people you don't know",
      "Ask good questions: What brought you here? What are you wrestling with?",
      "Exchange contact information with people worth staying in touch with",
      "Schedule a follow-up conversation before leaving",
      "Sit next to someone you don't know in at least one session",
    ],
  },
  {
    id: "integrate",
    title: "Integrate What You Heard",
    icon: "🌱",
    description: "A conference that changes nothing in your life was just entertainment. The goal is transformation, not information.",
    tips: [
      "Identify ONE specific thing you will change or do differently",
      "Share the most important insight with your small group within a week",
      "Schedule a specific date to read one of the books recommended",
      "Tell one other person what you heard and why it mattered",
      "Return to your notes at 30 days to see what has taken root",
    ],
  },
  {
    id: "evaluate",
    title: "Evaluate Critically",
    icon: "⚖️",
    description: "Even great speakers are fallible. The Bereans examined the Scriptures daily to check whether what Paul said was true (Acts 17:11). Do the same.",
    tips: [
      "Test everything you hear against Scripture, not just against what sounds good",
      "Note claims that need further research before accepting",
      "Distinguish between the speaker's personality and the truth of their content",
      "Discuss a challenging idea with a trusted pastor or mentor",
      "Be as willing to be corrected as you are to be inspired",
    ],
  },
];

const CONF_VIDEOS = [
  { id: "JHdB1dYAteA", title: "Don't Waste Your Life", speaker: "John Piper", venue: "Passion" },
  { id: "yhiHSf_L6_E", title: "Radical", speaker: "David Platt", venue: "Passion 2011" },
  { id: "X1rPalyUshw", title: "How Great Is Our God", speaker: "Louie Giglio", venue: "Passion" },
  { id: "RE8QkBA0Syg", title: "How Great Is Our God (Universe)", speaker: "Louie Giglio", venue: "Passion" },
  { id: "Kxup3OS5ZhQ", title: "The Reason for God", speaker: "Tim Keller", venue: "Google Talks" },
  { id: "by8ykv7-A3c", title: "Supremacy of Christ and Truth", speaker: "Voddie Baucham", venue: "Conference" },
];

export default function ChristianConferencesPage() {
  const [activeTab, setActiveTab] = useState<Tab>("conferences");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<string | null>(null);

  const filtered = CONFERENCES.filter(c => category === "All" || c.category === category);
  const conf = CONFERENCES.find(c => c.name === selected);
  const speaker = CONF_SPEAKERS.find(s => s.id === selectedSpeaker);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🏟️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Major Christian Conferences</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The conferences that are shaping evangelical Christianity &mdash; from Reformed theology to charismatic renewal, global missions to youth revival. Find your tribe and go deeper.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6, width: "fit-content" }}>
          {(["conferences", "speakers", "howto", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "conferences" ? "Conferences" : t === "speakers" ? "Speakers" : t === "howto" ? "How To Attend" : "Videos"}
            </button>
          ))}
        </div>

        {/* Conferences Tab */}
        {activeTab === "conferences" && (
          <>
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
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{c.org} &middot; {c.frequency} &middot; {c.location}</div>
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
                      <div style={{ color: MUTED, fontSize: 12 }}>{conf.org} &middot; {conf.frequency}</div>
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
          </>
        )}

        {/* Speakers Tab */}
        {activeTab === "speakers" && (
          <div style={{ display: "grid", gridTemplateColumns: speaker ? "210px 1fr" : "1fr", gap: 20, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, position: speaker ? "sticky" : "static", top: 100 }}>
              {CONF_SPEAKERS.map(s => (
                <button key={s.id} onClick={() => setSelectedSpeaker(selectedSpeaker === s.id ? null : s.id)}
                  style={{ background: selectedSpeaker === s.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedSpeaker === s.id ? PURPLE + "60" : BORDER}`, borderRadius: 10, padding: "14px 16px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 800, fontSize: 14 }}>{s.name}</div>
                  <div style={{ color: selectedSpeaker === s.id ? PURPLE : MUTED, fontSize: 11, marginTop: 3, fontWeight: 600 }}>{s.known_for}</div>
                </button>
              ))}
            </div>

            {speaker ? (
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{speaker.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13, marginBottom: 10 }}>{speaker.known_for}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {speaker.conferences.map((c, i) => (
                      <span key={i} style={{ background: `${PURPLE}12`, color: PURPLE, padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600 }}>{c}</span>
                    ))}
                  </div>
                </div>

                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16, marginBottom: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>SIGNATURE QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>&ldquo;{speaker.quote}&rdquo;</p>
                </div>

                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{speaker.bio}</p>

                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>SPEAKING STYLE</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{speaker.style}</p>
                </div>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
                {CONF_SPEAKERS.map(s => (
                  <button key={s.id} onClick={() => setSelectedSpeaker(s.id)}
                    style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, cursor: "pointer", textAlign: "left" }}>
                    <div style={{ color: PURPLE, fontWeight: 900, fontSize: 16, marginBottom: 4 }}>{s.name}</div>
                    <div style={{ color: MUTED, fontSize: 12, marginBottom: 10 }}>{s.known_for}</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: "0 0 12px" }}>{s.bio.slice(0, 120)}...</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {s.conferences.slice(0, 2).map((c, i) => (
                        <span key={i} style={{ background: `${PURPLE}12`, color: PURPLE, padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600 }}>{c}</span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* How To Attend Tab */}
        {activeTab === "howto" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {CONF_GUIDE.map((g, i) => (
              <div key={g.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div style={{ fontSize: 36, flexShrink: 0, lineHeight: 1 }}>{g.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <span style={{ background: `${PURPLE}20`, color: PURPLE, width: 24, height: 24, borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12 }}>{i + 1}</span>
                      <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: 0 }}>{g.title}</h3>
                    </div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: "0 0 16px" }}>{g.description}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {g.tips.map((tip, ti) => (
                        <div key={ti} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                          <div style={{ width: 6, height: 6, borderRadius: "50%", background: GREEN, flexShrink: 0, marginTop: 6 }} />
                          <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }}>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: 24 }}>
            {CONF_VIDEOS.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <iframe
                  width="100%"
                  style={{ aspectRatio: "16/9", border: "none", display: "block" }}
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div style={{ padding: "14px 16px" }}>
                  <div style={{ color: TEXT, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                  <div style={{ color: MUTED, fontSize: 12 }}>{v.speaker} &middot; {v.venue}</div>
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
