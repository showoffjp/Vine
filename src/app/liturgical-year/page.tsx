"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "seasons" | "theology" | "practices" | "resources" | "journal" | "videos";

const seasons = [
  {
    id: "advent",
    name: "Advent",
    color: "#8B5CF6",
    weeks: "4 Sundays before Christmas",
    theme: "Waiting, Hope, Preparation",
    symbol: "Advent Wreath",
    key: "Come, Lord Jesus",
    desc: "The church year begins not at Christmas but with Advent — four weeks of patient, expectant waiting. The word comes from Latin adventus (coming). The church waits both for the celebration of Christ's first coming at Christmas and for his promised return. It is a season of sobriety and longing, countercultural to the commercial Christmas rush.",
    liturgicalColor: "Purple or Blue",
    practicalGuide: "Light one candle each Sunday. Read Isaiah 40, 60, and 61. Pray Maranatha ('Come, Lord'). Practice fasting or simplicity. Sing 'O Come O Come Emmanuel.'",
    scriptures: ["Isaiah 40:3-5", "Luke 1:26-38", "Revelation 22:20", "Psalm 80"],
    history: "Advent developed in the 6th century as a 40-day fast before Christmas. Shortened to 4 weeks by the 9th century. The 4 Sunday themes vary: Hope, Peace, Joy, Love (or Christ, Church, John Baptist, Mary in older traditions)."
  },
  {
    id: "christmas",
    name: "Christmas",
    color: "#F59E0B",
    weeks: "December 25 – January 5 (12 days)",
    theme: "Incarnation, Joy, Wonder",
    symbol: "Nativity Scene, Star",
    key: "The Word Became Flesh",
    desc: "Christmas is not a single day but a 12-day season culminating in Epiphany. The church celebrates that the eternal Son of God took on human flesh — the Incarnation. This is the hinge of all history. 'God became man so that man might become God' (Athanasius). Joy and feasting are appropriate.",
    liturgicalColor: "White or Gold",
    practicalGuide: "Read John 1:1-18 on Christmas morning. Keep celebrating through January 5. Sing carols with theological weight: 'Hark! The Herald Angels Sing,' 'O Holy Night.' Exchange gifts as an echo of the Father's gift.",
    scriptures: ["John 1:1-14", "Luke 2:1-20", "Isaiah 9:6", "Hebrews 1:1-3"],
    history: "December 25 was established by the mid-4th century. Whether it was chosen to counter a pagan festival or is an independent calculation remains debated. The 12 days ending at Epiphany come from medieval tradition."
  },
  {
    id: "epiphany",
    name: "Epiphany",
    color: "#F59E0B",
    weeks: "January 6 – Ash Wednesday",
    theme: "Revelation, Mission, Light",
    symbol: "Star, Magi",
    key: "Christ Revealed to the Nations",
    desc: "From the Greek epiphaneia (manifestation), Epiphany celebrates Christ revealed to the Gentiles — beginning with the Magi. The season extends through Jesus's baptism and his first public miracles. It carries a strong missionary character: the light of Christ going to all nations. The season can last 4–9 weeks depending on when Easter falls.",
    liturgicalColor: "White (Jan 6), then Green",
    practicalGuide: "On January 6, read Matthew 2:1-12. Mark your doorposts with chalk (Chalking of the Door: 20+C+M+B+26). The season's length teaches that mission is an ongoing posture, not an event.",
    scriptures: ["Matthew 2:1-12", "Isaiah 60:1-6", "John 2:1-11", "Mark 1:9-11"],
    history: "Epiphany predates Christmas in the Eastern church (January 6 is Christmas for many Orthodox). The Magi visited after the Nativity scene — possibly months to two years later."
  },
  {
    id: "lent",
    name: "Lent",
    color: "#7C3AED",
    weeks: "Ash Wednesday – Holy Saturday (40 days, exc. Sundays)",
    theme: "Repentance, Fasting, Self-Examination",
    symbol: "Ashes, Cross",
    key: "Return to the Lord",
    desc: "Forty days of preparation before Easter, mirroring Jesus's 40-day fast and Israel's 40 years in the wilderness. The church takes stock of sin, practices fasting, and meditates on Christ's suffering. Sundays are not counted — each Sunday is a mini-Easter. Historically Lent prepared converts for baptism at Easter Vigil.",
    liturgicalColor: "Purple",
    practicalGuide: "Begin with Ash Wednesday ('Remember you are dust'). Take on a fast — food, media, an indulgence. Take up a practice: Stations of the Cross, daily prayer, almsgiving. Read through the Psalms of Lament. Attend Maundy Thursday and Good Friday services.",
    scriptures: ["Joel 2:12-13", "Matthew 6:1-18", "Psalm 51", "2 Corinthians 5:20-6:2"],
    history: "Lent's 40-day length was standardized at the Council of Nicaea (325 AD). The Ash Wednesday imposition of ashes dates to the 8th century. Originally excluded Sundays since they are always celebrations of the Resurrection."
  },
  {
    id: "holy-week",
    name: "Holy Week",
    color: "#DC2626",
    weeks: "Palm Sunday – Holy Saturday",
    theme: "Passion, Suffering, Death",
    symbol: "Cross, Bread and Cup",
    key: "Behold the Lamb of God",
    desc: "The most sacred week in the Christian calendar, walked with Jesus through his triumphal entry, the Last Supper, betrayal, trial, crucifixion, and burial. Palm Sunday celebrates his entry. Maundy Thursday centers on the Eucharist and servant-washing. Good Friday meditates on the cross — the church traditionally strips bare. Holy Saturday is the great silence.",
    liturgicalColor: "Red (Palm Sunday, Pentecost), then Black (Good Friday)",
    practicalGuide: "Process with palms on Palm Sunday. On Maundy Thursday, have your feet washed or wash others'. Attend Good Friday service and hold silence. Do not rush past Saturday — the silence of the tomb is spiritually significant.",
    scriptures: ["Matthew 21:1-11", "John 13:1-17", "Isaiah 53", "Luke 23:26-49"],
    history: "The Jerusalem church walked the actual sites by the 4th century. Egeria's diary (381 AD) describes elaborate Holy Week processions. The Tenebrae ('darkness') service of snuffing candles dates to medieval monastic practice."
  },
  {
    id: "easter",
    name: "Easter / Eastertide",
    color: "#10B981",
    weeks: "Easter Sunday – Pentecost (50 days)",
    theme: "Resurrection, New Creation, Joy",
    symbol: "Empty Tomb, Lily, Alleluia",
    key: "Christ Is Risen!",
    desc: "Easter is not one day but fifty days — a great Sunday stretching from the Resurrection to Pentecost. The early church called it the 'Great Fifty Days.' Alleluia, suppressed during Lent, returns with force. The season meditates on resurrection appearances, Jesus's teaching, his Ascension, and anticipation of Pentecost. Every Sunday is now a celebration.",
    liturgicalColor: "White and Gold",
    practicalGuide: "Begin with Easter Vigil (fire lit in darkness, reading salvation history, baptism). Celebrate all 50 days. Sing the Exsultet. Greet with 'Christ is risen! He is risen indeed!' through Pentecost Sunday.",
    scriptures: ["1 Corinthians 15:1-58", "John 20:1-18", "Luke 24:13-35", "Acts 2:1-41"],
    history: "Easter is the oldest and highest Christian feast, celebrated weekly in Sunday worship. The Council of Nicaea (325 AD) standardized the Easter date calculation. The word 'Easter' may derive from Eostre (spring) or from Eastern liturgy."
  },
  {
    id: "pentecost",
    name: "Pentecost",
    color: "#EF4444",
    weeks: "Single day; then Ordinary Time begins",
    theme: "Spirit, Church, Mission",
    symbol: "Flame, Dove",
    key: "Come, Holy Spirit",
    desc: "Fifty days after Easter, Pentecost celebrates the outpouring of the Holy Spirit on the early church (Acts 2). It is sometimes called the 'Birthday of the Church.' The international gathering in Jerusalem (Acts 2:9-11) foreshadows the church's global reach. Red — the color of fire and blood — marks the day.",
    liturgicalColor: "Red",
    practicalGuide: "Wear red to church. Read Acts 2 aloud. Pray for the church worldwide. Celebrate the global spread of the gospel. Missions offerings on this day honor the Spirit's work among nations.",
    scriptures: ["Acts 2:1-41", "Joel 2:28-32", "John 14:15-26", "Romans 8:1-17"],
    history: "Pentecost was already a Jewish feast (Shavuot — 50 days after Passover). The Spirit's arrival on this day connects Exodus (Sinai law) with the new covenant (Spirit written on hearts). Celebrated as a feast day by the 3rd century."
  },
  {
    id: "ordinary-time",
    name: "Ordinary Time",
    color: "#10B981",
    weeks: "Epiphany season + after Pentecost (totaling ~33 weeks)",
    theme: "Growth, Discipleship, Kingdom",
    symbol: "Green (growth)",
    key: "Grow in Grace",
    desc: "Ordinary Time does not mean unimportant — it comes from 'ordinal' (counted) time. The longest season of the year, it focuses on formation and growth in the ordinary rhythms of Christian life. The lectionary walks through the Gospels and epistles systematically. It ends on Christ the King Sunday, completing the year with a declaration of Christ's ultimate reign.",
    liturgicalColor: "Green",
    practicalGuide: "Follow the lectionary during ordinary time. Cultivate the ordinary means of grace: Bible, prayer, church, sacrament. Don't neglect spiritual discipline when seasons of celebration pass. Plant, water, wait for growth.",
    scriptures: ["Galatians 5:22-23", "2 Peter 3:18", "Psalm 1", "Colossians 3:1-17"],
    history: "The term 'Ordinary Time' was introduced in the Roman Rite after Vatican II (1969). Protestant equivalents vary: some call it 'Kingdomtide' (Methodist). Christ the King Sunday was instituted by Pope Pius XI in 1925."
  }
];

const theologyPoints = [
  {
    title: "Time Itself Is Redeemed",
    content: "In Christ, time is not merely linear progression toward entropy. The liturgical year teaches that time is redeemed and sanctified — marked by the divine economy of creation, fall, and redemption. Each year the church re-walks the story of salvation, not as repetition but as deepening inhabitation of the same true narrative."
  },
  {
    title: "The Calendar as Living Catechism",
    content: "The church fathers understood the calendar as a pedagogical tool: the seasons teach doctrine not through propositions but through embodied participation. Augustine argued that celebration shapes desire. Lent forms penitence; Easter forms joy; Advent forms longing. We are shaped by what we rehearse and what we feast on."
  },
  {
    title: "Sanctifying Ordinary Time",
    content: "Most of life is ordinary. The liturgical calendar redeems the mundane by providing rhythm within it. Green — the color of ordinary time — evokes growth and vitality. The long stretches of counted weeks after Pentecost are not liturgical void but cultivation: where seeds planted in the feasts take root in ordinary faithfulness."
  },
  {
    title: "Feasts and Fasts Shape Desire",
    content: "Alexander Schmemann (For the Life of the World) argued that fasting is not self-punishment but the discipline of desire — learning to want rightly. Feasting is not indulgence but participation in divine joy. The alternation of feast and fast across the year forms a people whose appetites are calibrated to God rather than culture."
  },
  {
    title: "The Lectionary and the Whole Word",
    content: "The Revised Common Lectionary (used by most Protestant traditions) guides congregations through the entire Bible in a three-year cycle. It prevents preachers from camping on favorite texts, ensures the church hears the prophets and the Psalms and the epistles, and links congregations worldwide reading the same texts each Sunday."
  },
  {
    title: "How the Church Fathers Understood Time",
    content: "Origen, Cyprian, Basil, and later Augustine all wrote about the sanctification of time. Basil's On the Holy Spirit connects each day's prayer to the Spirit's work. The monastic tradition extended this to the daily office — seven fixed prayer times sanctifying each hour. The Psalter, prayed through monthly in monasteries, was the liturgical heartbeat."
  }
];

const practices = [
  {
    title: "The Advent Wreath",
    color: "#8B5CF6",
    meaning: "A circular wreath (eternity) with four candles: Hope, Peace, Joy, Love (or one for each Sunday). The Christ candle lit on Christmas Eve represents the light of the world entering darkness.",
    howTo: "Light one candle each Sunday of Advent as a family prayer. Read the associated Scripture. Sing a verse of 'O Come O Come Emmanuel.' Let darkness teach waiting.",
    tradition: "Lutheran, Catholic, and Anglican traditions; now widely ecumenical"
  },
  {
    title: "Ash Wednesday",
    color: "#6B4FBB",
    meaning: "Ashes from burned palm crosses imposed on foreheads with the words 'Remember you are dust, and to dust you shall return' (Genesis 3:19). A stark reminder of mortality and the need for repentance.",
    howTo: "Attend an Ash Wednesday service. If no local service, mark the day with prayer and fasting. Read Psalm 51. Write down what you will fast or take up for Lent.",
    tradition: "Catholic, Anglican, Lutheran, many evangelical churches now observe"
  },
  {
    title: "Stations of the Cross",
    color: "#DC2626",
    meaning: "A devotional walk through 14 stops tracing Jesus's journey from Pilate's court to burial. Developed in Jerusalem to serve pilgrims; spread globally via Franciscans in the 14th century.",
    howTo: "Walk the stations privately with a booklet, with a congregation on Good Friday, or online. Pause at each station to meditate and pray. The stations slow you down and make the Passion concrete.",
    tradition: "Catholic and Anglican; widely adapted in evangelical contexts"
  },
  {
    title: "The Easter Vigil",
    color: "#10B981",
    meaning: "The oldest and most dramatic Christian service: beginning in darkness on Holy Saturday night, a bonfire is lit, the Exsultet is sung, salvation history read aloud from Creation to Resurrection, the font blessed, candidates baptized, and the Eucharist celebrated at midnight.",
    howTo: "Attend an Easter Vigil if available. If not, gather with family to read salvation history passages from Genesis, Exodus, Isaiah, and the Gospel resurrection account. Light a candle in the dark.",
    tradition: "Catholic, Anglican, Lutheran, Eastern Orthodox; increasingly recovered by evangelical churches"
  },
  {
    title: "Pentecost Celebrations",
    color: "#EF4444",
    meaning: "Wearing red (fire and blood), Acts 2 read in multiple languages, and sometimes outdoor worship celebrating the Spirit's global reach. Some churches baptize adults at Pentecost echoing early church practice.",
    howTo: "Invite your congregation to wear red. Read Acts 2:1-41 responsively. Highlight one international mission partner. Pray in multiple languages if your congregation represents multiple nations.",
    tradition: "Universal; particularly vibrant in Pentecostal and charismatic traditions"
  },
  {
    title: "Observing Ordinary Time",
    color: "#10B981",
    meaning: "The discipline of faithfulness without spectacle. Ordinary Time is where the church actually lives most of its life — and where formation happens through sustained, unremarkable faithfulness.",
    howTo: "Follow the lectionary. Develop a reading plan through the year. Memorize Scripture. Practice daily prayer. Don't wait for Advent or Lent to pursue God; the green season is where roots grow deep.",
    tradition: "Universal; particularly emphasized in Anglican and Catholic traditions"
  }
];

const resources = [
  {
    title: "The Book of Common Prayer",
    author: "Various (1549–present)",
    type: "Primary Text",
    desc: "The 1979 BCP (Episcopal) or the Anglican Church in North America's 2019 BCP contains the full lectionary, collects for each Sunday, and services for the entire liturgical year. An irreplaceable companion for any Christian wanting to worship with the whole church.",
    url: "https://www.bcponline.org"
  },
  {
    title: "For the Life of the World",
    author: "Alexander Schmemann",
    type: "Theology",
    desc: "The Eastern Orthodox priest's masterwork on liturgy and the sanctification of all things. His understanding of the Eucharist as cosmic event and the liturgy as the church's offering of the world back to God is illuminating for any tradition.",
    url: "https://www.svs.edu/for-the-life-of-the-world"
  },
  {
    title: "A Calendar of Saints",
    author: "Frederick Buechner",
    type: "Devotional",
    desc: "Buechner's lyrical portraits of saints across the Christian calendar. Perfect for the liturgical year's commemoration of men and women who embody each season's themes. Accessible and moving for all readers.",
    url: ""
  },
  {
    title: "Revised Common Lectionary",
    author: "Consultation on Common Texts",
    type: "Tool",
    desc: "The three-year lectionary cycle used by most mainline and many evangelical churches. Free online at the Vanderbilt Divinity Library. Tracks Old Testament, Epistle, Gospel, and Psalm readings through the year.",
    url: "https://lectionary.library.vanderbilt.edu"
  },
  {
    title: "Ancient Future Time",
    author: "Robert Webber",
    type: "Guide",
    desc: "Webber's practical guide to following the Christian year, written for evangelicals unfamiliar with liturgical tradition. Explains each season's theology and suggests practices for individuals and congregations.",
    url: ""
  },
  {
    title: "Bread and Wine: Readings for Lent and Easter",
    author: "Plough Publishing",
    type: "Devotional",
    desc: "An anthology of 60 classic and contemporary writers for the Lent-Easter season. Contributors include Bonhoeffer, Merton, O'Connor, Nouwen, Buechner, Chesterton, and Dostoevsky.",
    url: "https://www.plough.com/en/books/b/bread-and-wine"
  }
];

export default function LiturgicalYearPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_liturgical-year_tab", "seasons");
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (k: string) => setExpanded(p => ({ ...p, [k]: !p[k] }));

  const [lyEntries, setLyEntries] = useState<{ id: string; date: string; season: string; observation: string; practice: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_ly_entries") ?? "[]"); } catch { return []; }
  });
  const [lyForm, setLyForm] = useState({ season: "", observation: "", practice: "" });
  const [lySaved, setLySaved] = useState(false);
  useEffect(() => { try { localStorage.setItem("vine_ly_entries", JSON.stringify(lyEntries)); } catch {} }, [lyEntries]);
  const saveLyEntry = () => {
    if (!lyForm.season.trim()) return;
    setLyEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...lyForm }, ...prev]);
    setLyForm({ season: "", observation: "", practice: "" });
    setLySaved(true); setTimeout(() => setLySaved(false), 2000);
  };
  const deleteLyEntry = (id: string) => setLyEntries(prev => prev.filter(e => e.id !== id));

  const tabs: { id: Tab; label: string }[] = [
    { id: "seasons", label: "The Seasons" },
    { id: "theology", label: "Theology of Time" },
    { id: "practices", label: "Key Practices" },
    { id: "resources", label: "Resources" },
    { id: "journal", label: "📓 My Journal" },
    { id: "videos", label: "🎬 Videos" }
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: 80, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: "#8B5CF6", color: "#fff", padding: "4px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            THE CHRISTIAN CALENDAR
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, margin: "0 0 12px" }}>
            The Liturgical Year
          </h1>
          <p style={{ color: MUTED, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            The church marks time differently. The liturgical year is a year-long walk through the entire gospel story — from Advent longing through Easter joy and Pentecost fire — forming a people who inhabit God's story rather than the world's.
          </p>
        </div>

        {/* Banner */}
        <div style={{ background: "#8B5CF6", borderRadius: 12, padding: "14px 24px", marginBottom: 32, textAlign: "center" }}>
          <p style={{ margin: 0, fontStyle: "italic", fontWeight: 600 }}>
            "For everything there is a season, and a time for every matter under heaven." — Ecclesiastes 3:1
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#000" : TEXT,
                border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`,
                borderRadius: 8, padding: "8px 18px", cursor: "pointer", fontWeight: 600, fontSize: 14
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Seasons Tab */}
        {activeTab === "seasons" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 14 }}>
                {seasons.map(s => (
                  <div
                    key={s.id}
                    onClick={() => setSelectedSeason(s)}
                    style={{
                      background: selectedSeason.id === s.id ? s.color + "22" : CARD,
                      border: `2px solid ${selectedSeason.id === s.id ? s.color : BORDER}`,
                      borderRadius: 10, padding: 16, cursor: "pointer"
                    }}
                  >
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: s.color, marginBottom: 8 }} />
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: MUTED }}>{s.theme}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detail Panel */}
            <div style={{
              width: 340, flexShrink: 0, background: CARD, border: `1px solid ${BORDER}`,
              borderRadius: 12, padding: 24, position: "sticky", top: 20
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 16, height: 16, borderRadius: "50%", background: selectedSeason.color }} />
                <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>{selectedSeason.name}</h3>
              </div>
              <div style={{ background: selectedSeason.color + "22", border: `1px solid ${selectedSeason.color}44`, borderRadius: 8, padding: 10, marginBottom: 14 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: selectedSeason.color }}>{selectedSeason.key}</div>
              </div>
              <div style={{ fontSize: 13, color: MUTED, marginBottom: 4 }}>{selectedSeason.weeks}</div>
              <div style={{ fontSize: 13, marginBottom: 4 }}><span style={{ color: MUTED }}>Color: </span>{selectedSeason.liturgicalColor}</div>
              <div style={{ fontSize: 13, marginBottom: 4 }}><span style={{ color: MUTED }}>Symbol: </span>{selectedSeason.symbol}</div>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: "12px 0" }}>{selectedSeason.desc}</p>
              <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 12, marginBottom: 12 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: GREEN, marginBottom: 6 }}>KEY SCRIPTURES</div>
                {selectedSeason.scriptures.map(s => (
                  <div key={s} style={{ fontSize: 12, color: MUTED, marginBottom: 3 }}>• {s}</div>
                ))}
              </div>
              <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 12 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: PURPLE, marginBottom: 6 }}>HOW TO OBSERVE</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.6 }}>{selectedSeason.practicalGuide}</p>
              </div>
              <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 12, marginTop: 12 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: MUTED, marginBottom: 6 }}>HISTORY</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.6 }}>{selectedSeason.history}</p>
              </div>
            </div>
          </div>
        )}

        {/* Theology Tab */}
        {activeTab === "theology" && (
          <div style={{ maxWidth: 720 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28 }}>
              The church's relationship to time is theological, not merely organizational. The liturgical year embodies a philosophy of time rooted in creation, redemption, and eschatological hope.
            </p>
            {theologyPoints.map((pt, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: 12 }}>
                <button type="button"
                  onClick={() => toggle(`theo-${i}`)}
                  style={{
                    width: "100%", background: "none", border: "none", color: TEXT,
                    padding: "16px 20px", textAlign: "left", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontWeight: 700, fontSize: 15
                  }}
                >
                  {pt.title}
                  <span style={{ color: MUTED }}>{expanded[`theo-${i}`] ? "−" : "+"}</span>
                </button>
                {expanded[`theo-${i}`] && (
                  <div style={{ padding: "0 20px 16px", color: MUTED, lineHeight: 1.7, fontSize: 14 }}>
                    {pt.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Practices Tab */}
        {activeTab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: p.color, marginBottom: 10 }} />
                <h3 style={{ margin: "0 0 8px", fontSize: 17 }}>{p.title}</h3>
                <div style={{ fontSize: 11, color: PURPLE, fontWeight: 700, marginBottom: 10 }}>
                  {p.tradition}
                </div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{p.meaning}</p>
                <div style={{ background: BG, borderRadius: 8, padding: 12 }}>
                  <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 6 }}>HOW TO PRACTICE</div>
                  <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.6 }}>{p.howTo}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === "resources" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {resources.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 8 }}>{r.type.toUpperCase()}</div>
                <h3 style={{ margin: "0 0 4px", fontSize: 16 }}>{r.title}</h3>
                <div style={{ fontSize: 13, color: PURPLE, marginBottom: 10 }}>by {r.author}</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>{r.desc}</p>
                {r.url && (
                  <a
                    href={r.url}
                    target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: 12, color: GREEN, textDecoration: "none", fontWeight: 700 }}
                  >
                    Visit Resource →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Liturgical Year Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20 }}>Record how you're marking the seasons of the church calendar.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                <input value={lyForm.season} onChange={e => setLyForm(f => ({ ...f, season: e.target.value }))}
                  placeholder="Which season are you in? (Advent, Lent, Easter...)" aria-label="Season"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                <textarea value={lyForm.observation} onChange={e => setLyForm(f => ({ ...f, observation: e.target.value }))}
                  placeholder="What are you noticing or learning in this season?" aria-label="Observation"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, minHeight: 80, resize: "vertical", fontFamily: "inherit" }} />
                <input value={lyForm.practice} onChange={e => setLyForm(f => ({ ...f, practice: e.target.value }))}
                  placeholder="What practice are you embracing this season? (optional)" aria-label="Practice"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                <button type="button" onClick={saveLyEntry}
                  style={{ padding: "10px 20px", background: GREEN, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", alignSelf: "flex-start" }}>
                  {lySaved ? "Saved ✓" : "Save Entry"}
                </button>
              </div>
              {lyEntries.length === 0 && <p style={{ color: MUTED, fontSize: 14 }}>No entries yet. Record your first liturgical reflection above.</p>}
              {lyEntries.map(e => (
                <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 16, marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                    <button type="button" onClick={() => deleteLyEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 14 }}>✕</button>
                  </div>
                  <p style={{ color: GREEN, fontWeight: 700, fontSize: 13, margin: "0 0 4px" }}>{e.season}</p>
                  {e.observation && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: "0 0 4px" }}>{e.observation}</p>}
                  {e.practice && <p style={{ color: PURPLE, fontSize: 13, fontStyle: "italic", margin: 0 }}>→ {e.practice}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on the liturgical year, the Christian calendar, and marking time with the church.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "OpfuKKH_SCE", title: "What Is the Church Calendar?", channel: "Desiring God", description: "An accessible introduction to the liturgical year — what it is, why the church developed it, and how following the Christian calendar can shape the whole of life." },
                  { videoId: "ERR0Zq7TBgU", title: "The Liturgical Year", channel: "Catholic Central", description: "An engaging overview of the seasons of the liturgical year — Advent, Christmas, Lent, Easter, Pentecost, and Ordinary Time — and the theology behind each." },
                  { videoId: "nQWFzMvCfLE", title: "The Liturgical Year Explained", channel: "Catechism Series", description: "A clear, visual guide to the liturgical calendar for those new to Christian traditions, explaining how the seasons correspond to the life of Christ." },
                  { videoId: "izrk-erhDdk", title: "Seasons in the Liturgical Calendar", channel: "Church Calendar Series", description: "A deep dive into how the liturgical seasons form Christian communities over time, shaping what we pray, sing, preach, and celebrate throughout the year." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
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
      </main>
      <Footer />
    </div>
  );
}
