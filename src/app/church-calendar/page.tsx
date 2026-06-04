"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SEASONS = [
  {
    id: "advent",
    name: "Advent",
    color: "#6B4FBB",
    emoji: "🕯️",
    timing: "4 Sundays before Christmas",
    theme: "Anticipation & Hope",
    liturgicalColor: "Purple / Blue",
    description: "Advent means 'coming' — a season of expectant waiting for the arrival of Christ. The church anticipates both his first coming (the incarnation we celebrate at Christmas) and his second coming (the return we await). It is a penitential season of self-examination, marked by slowing down, simplifying, and cultivating holy longing.",
    practices: [
      "Light the Advent wreath — one candle per week (Hope, Peace, Joy, Love)",
      "Daily Advent devotionals focusing on Old Testament prophecy",
      "Fasting or simplified living to cultivate hunger for Christ",
      "The Jesse Tree — ornaments tracing the story of salvation",
      "Extended times of silent waiting prayer",
    ],
    verses: ["Isaiah 9:6-7", "Luke 1:26-38", "Romans 13:11-12"],
    historicalNote: "Advent dates to the 4th century and was originally a 6-week preparatory fast. The Western church eventually shortened it to 4 weeks. The tradition of Advent wreaths arose in Germany in the 19th century.",
  },
  {
    id: "christmas",
    name: "Christmas",
    color: "#EF4444",
    emoji: "⭐",
    timing: "December 25 — January 5",
    theme: "Incarnation & Wonder",
    liturgicalColor: "White / Gold",
    description: "Christmas (12 days, not just one) celebrates the Incarnation — God becoming flesh. The theological weight of Christmas is staggering: the Creator entered creation, the Infinite became finite, the Almighty became a helpless infant. This is not merely birth; it is the beginning of the rescue mission.",
    practices: [
      "Midnight or Christmas Day worship services",
      "Read the Nativity accounts (Luke 2 and Matthew 1-2) as a family",
      "Celebrate all 12 days (December 25 - January 5)",
      "Give generously — the Magi brought extravagant gifts",
      "Sing the great Christmas carols as theology",
    ],
    verses: ["John 1:1-14", "Luke 2:1-20", "Philippians 2:5-11"],
    historicalNote: "December 25 was established as Christmas in Rome by the 4th century. The '12 Days of Christmas' reflects the period ending at Epiphany. Many scholars believe the date was chosen to redeem the pagan winter solstice festivals.",
  },
  {
    id: "epiphany",
    name: "Epiphany",
    color: "#F59E0B",
    emoji: "✨",
    timing: "January 6 (season continues until Lent)",
    theme: "Revelation & Light to the Nations",
    liturgicalColor: "White / Green",
    description: "Epiphany celebrates the revelation of Christ to the Gentiles (the Magi) and extends to celebrate all his manifestations: his baptism, his first miracle at Cana, and his gradual self-revelation. The season asks: what does it mean that God's light has come for all nations, not just Israel?",
    practices: [
      "Chalking the Door — write 20+C+M+B+[year] over your front door (Christus mansionem benedicat — 'Christ bless this house')",
      "Three Kings parties for families with children",
      "Study of missions and the global church",
      "Pray for unreached people groups",
      "World Prayer Map — pray for a different nation each day",
    ],
    verses: ["Matthew 2:1-12", "Isaiah 60:1-3", "Matthew 28:18-20"],
    historicalNote: "Epiphany predates Christmas in the Eastern church, where it remains more important than December 25. The word comes from Greek epiphaneia, meaning manifestation or appearance.",
  },
  {
    id: "lent",
    name: "Lent",
    color: "#8B5CF6",
    emoji: "🩶",
    timing: "Ash Wednesday to Holy Saturday (40 days, excluding Sundays)",
    theme: "Repentance, Fasting & Preparation",
    liturgicalColor: "Purple",
    description: "Lent is the 40-day season of self-examination, fasting, and repentance leading to Easter. It mirrors Jesus' 40 days in the wilderness and Israel's 40 years of wandering. It is not about earning grace but about clearing away what obscures our vision of God — making room for Easter to arrive in full force.",
    practices: [
      "Ash Wednesday — receive ashes as a reminder of mortality and repentance ('You are dust...')",
      "Give something up — not to earn but to create space",
      "Take something on — a new spiritual discipline",
      "Daily Scripture reading through Psalms or the Gospels",
      "Stations of the Cross — meditative prayer through Christ's passion",
      "Holy Week observances: Palm Sunday, Maundy Thursday, Good Friday",
    ],
    verses: ["Joel 2:12-13", "Matthew 6:16-18", "2 Corinthians 7:10"],
    historicalNote: "Lent was codified at the Council of Nicaea (325 AD) as preparation for Easter baptism. Ash Wednesday as a formal beginning developed later. The 40 days (Sundays excluded) is intentional — Sundays are always mini-Easter celebrations.",
  },
  {
    id: "holyweek",
    name: "Holy Week",
    color: "#EC4899",
    emoji: "✝️",
    timing: "Palm Sunday through Holy Saturday",
    theme: "The Passion of Christ",
    liturgicalColor: "Red / Purple / Black",
    description: "The most sacred week in the Christian calendar. Each day carries specific theological weight: Palm Sunday (kingly entry), Monday-Wednesday (temple controversies), Maundy Thursday (Last Supper and Gethsemane), Good Friday (crucifixion), Holy Saturday (waiting in grief). To observe Holy Week fully is to enter the story.",
    practices: [
      "Palm Sunday — wave palms, read the triumphal entry, reflect on crowd fickleness",
      "Maundy Thursday — foot washing service, Lord's Supper, prayer vigil",
      "Good Friday — 3-hour service during 9am-3pm, darkness, silence",
      "Holy Saturday — no communion, stripped altar, waiting",
      "Read the passion narrative slowly through the week",
    ],
    verses: ["Matthew 26-27", "John 13:1-17", "Psalm 22"],
    historicalNote: "'Maundy' comes from the Latin mandatum (command) — referring to Jesus' 'new commandment' to love one another (John 13:34). Good Friday is 'Good' because of the goodness God worked through the cross.",
  },
  {
    id: "easter",
    name: "Easter Season",
    color: "#10B981",
    emoji: "🌅",
    timing: "Easter Sunday through Pentecost (50 days)",
    theme: "Resurrection & New Life",
    liturgicalColor: "White / Gold",
    description: "Easter is not a single day but a 50-day season — longer than Lent — because the Resurrection is the center of everything. 'If Christ has not been raised, your faith is futile' (1 Cor 15:17). Eastertide celebrates the post-resurrection appearances of Jesus and anticipates the coming of the Spirit at Pentecost.",
    practices: [
      "Easter Vigil — the greatest of all liturgies, beginning in darkness and ending in light",
      "Alleluia! — restore the word that was buried for Lent",
      "Sunday celebrations throughout the season",
      "Study the resurrection appearances in order",
      "Baptism — historically done at Easter Vigil",
      "Acts reading plan through Eastertide",
    ],
    verses: ["1 Corinthians 15:1-20", "John 20:1-18", "Revelation 1:17-18"],
    historicalNote: "The early church baptized new believers at Easter Vigil — Lent was their preparation. Easter was historically the most important day of the year, not Christmas. The 50-day celebration reflects ancient Israelite counting of days to Pentecost.",
  },
  {
    id: "pentecost",
    name: "Pentecost",
    color: "#EF4444",
    emoji: "🔥",
    timing: "50 days after Easter",
    theme: "The Spirit Poured Out",
    liturgicalColor: "Red",
    description: "Pentecost celebrates the outpouring of the Holy Spirit on the gathered disciples (Acts 2). It is the birthday of the church — when 120 disciples became 3,120, and the mission began. The Spirit given at Pentecost is not a one-time event but an ongoing reality poured out on every believer.",
    practices: [
      "Wear red — the color of fire and the Spirit",
      "Read Acts 2 and the Joel 2 prophecy it fulfills",
      "Pray for fresh filling of the Holy Spirit",
      "Celebrate with joy — this is the church's birthday",
      "Commission or send someone into ministry",
    ],
    verses: ["Acts 2:1-4", "Joel 2:28-32", "Ephesians 5:18"],
    historicalNote: "Pentecost was already a Jewish harvest festival (Shavuot) celebrating the giving of the Torah at Sinai 50 days after the Exodus. The Spirit fell at the very time Israel was celebrating receiving the Law — now the Spirit writes the Law on hearts (Jer 31:33).",
  },
  {
    id: "ordinary",
    name: "Ordinary Time",
    color: "#10B981",
    emoji: "🌿",
    timing: "After Pentecost until Advent (longest season)",
    theme: "Growing in the Ordinary",
    liturgicalColor: "Green",
    description: "Ordinary Time is not unimportant time — 'ordinary' comes from ordinal, meaning 'numbered.' It is the long season of growth, discipleship, and living out the faith in everyday life. Green is the color of life and growth. Most of the Christian life is lived here — not in dramatic peaks but in faithful, steady formation.",
    practices: [
      "Systematic Bible reading — go deep into one book",
      "Develop a consistent rule of life (prayer, service, Sabbath)",
      "Formation practices: fasting, simplicity, solitude",
      "Serve in your local church and community",
      "Cultivate spiritual friendships — this is the season for growth together",
    ],
    verses: ["Colossians 1:9-12", "2 Peter 1:5-8", "Galatians 5:22-23"],
    historicalNote: "Ordinary Time comprises more than half the year — intentionally so. Christianity is not merely a series of high seasons but a way of life practiced in the common. The green vestments symbolize growth that happens quietly, over time.",
  },
];

const CHRISTIAN_HOLIDAYS = [
  { name: "Trinity Sunday", date: "First Sunday after Pentecost", description: "Celebrates the mystery of the Trinity — one God in three persons. The Sunday directly after Pentecost, when the full revelation of Father, Son, and Spirit has been completed through the liturgical year." },
  { name: "All Saints Day", date: "November 1", description: "Celebrates all who have died in the faith — both canonized saints and ordinary believers. A day to remember those who have gone before and to be inspired by their faith." },
  { name: "Transfiguration", date: "Last Sunday of Epiphany", description: "Commemorates Jesus' transfiguration on the mountain (Matthew 17). The disciples saw his full divine glory break through. Often observed as the threshold between Epiphany and Lent." },
  { name: "Ascension", date: "40 days after Easter", description: "Celebrates Christ's ascension to the right hand of the Father. Not a goodbye but an enthronement — he rules now from heaven and intercedes for us." },
  { name: "Reformation Sunday", date: "Last Sunday of October", description: "Observed by Protestant churches on October 31 (the anniversary of Luther's 95 Theses, 1517). Reflects on the core Reformation themes: Scripture alone, grace alone, faith alone, Christ alone, glory to God alone." },
  { name: "Christ the King Sunday", date: "Last Sunday of liturgical year", description: "The final Sunday before Advent — the liturgical year ends with a declaration: Jesus is Lord. A counter-cultural statement in any age. All earthly kingdoms are temporary; his kingdom has no end." },
];

const VOICES_CAL = [
  { id: "webber-r", name: "Robert Webber", era: "1933-2007", context: "Ancient-Future Faith (1999); The Divine Embrace (2006); pioneer of liturgical renewal in evangelical churches", bio: "Robert Webber spent three decades arguing that evangelical Christianity had impoverished itself by abandoning the liturgical tradition. His 'Ancient-Future' project sought to recover the wisdom of the early church — including the church calendar — for contemporary evangelical practice. He argued that the liturgical year is not Catholic or Orthodox 'stuff' but the universal church's way of telling the whole story of redemption in time. Webber's writing catalyzed a generation of younger evangelicals who found in the church calendar a depth that contemporary worship styles had failed to provide.", quote: "The liturgical calendar is the church's school of prayer — the way the community of faith orders time around the story of Jesus rather than around the story of the world.", contribution: "Webber's 'Ancient-Future' series and his work at Northern Seminary made the recovery of liturgical practice intellectually respectable for evangelical audiences. More than any other 20th-century evangelical theologian, he is responsible for the widespread adoption of Advent, Lent, and the liturgical calendar in non-denominational churches." },
  { id: "dawn-m", name: "Marva Dawn", era: "1948-2021", context: "Reaching Out Without Dumbing Down (1995); Keeping the Sabbath Wholly (1989); Lutheran theologian of worship", bio: "Marva Dawn was a Lutheran theologian whose work on worship and the church calendar formed generations of pastors and worship leaders. Against the reduction of worship to entertainment and the year to a sequence of marketing seasons, Dawn argued that the church calendar forms people by immersing them in the fullness of God's story. Her treatment of Sabbath — and its relationship to the liturgical calendar — remained essential reading in worship formation. She battled severe illness for decades while producing some of the most theologically rich writing on Christian worship.", quote: "The Church year is not a ladder to be climbed or a journey to be completed — it is a wheel to be inhabited, year after year, until the patterns sink into the bones of the community.", contribution: "Dawn's work provided the theological foundations for liturgical renewal in Lutheran, Reformed, and evangelical circles. Her books on worship and Sabbath are among the most used in seminary worship courses and remain essential reading for pastors grappling with the theology of time." },
  { id: "de-waal", name: "Esther de Waal", era: "b. 1930", context: "Seeking God: The Way of St. Benedict (1984); Living with Contradiction (1989); Benedictine oblate and retreat leader", bio: "Esther de Waal brought the Benedictine tradition — with its highly structured liturgical day and year — to a wide Protestant and Catholic audience. Her accessible writing on the Rule of St. Benedict showed how the medieval monastic ordering of time around the Divine Office and church calendar offered a counter-cultural alternative to the frenetic pace of modernity. She argued that the hours of prayer and the seasons of the year are not constraints but freedoms — a way of being fully present to time rather than being consumed by it.", quote: "The Benedictine ordering of time is a gift — not a burden. It says: there is time enough. Time for work, time for prayer, time for rest. God inhabits all of it.", contribution: "De Waal's writing made the Benedictine tradition accessible to non-monastics seeking a spirituality of time. Her work has been especially influential among Protestant spiritual directors and retreat leaders who have drawn on the Rule of St. Benedict as a framework for contemporary spiritual formation." },
  { id: "rutledge-f", name: "Fleming Rutledge", era: "b. 1937", context: "Advent: The Once and Future Coming of Jesus Christ (2018); Episcopal priest and preacher", bio: "Fleming Rutledge's Advent: The Once and Future Coming of Jesus Christ is the finest contemporary theological exposition of the Advent season. Rutledge argues that Advent has been sentimentalized into a 'pre-Christmas' season when it should be the church's annual confrontation with apocalyptic darkness and eschatological hope. The Advent themes — judgment, coming king, the darkness of the world awaiting light — are not warm-up acts for Christmas but the church's counter-witness to secular optimism. Her Advent sermons span three decades and constitute the most theologically rich preaching on the season in contemporary Anglican/Episcopal tradition.", quote: "Advent is not a season of pleasant anticipation. It is a season of confronting the darkness — the world's darkness, our own darkness — and waiting in expectation for the light that no darkness can overcome.", contribution: "Rutledge's Advent volume recovered the eschatological and apocalyptic dimensions of the season that had been lost in contemporary church practice. It has become essential reading for preachers and worship leaders preparing Advent, and her influence on Anglican homiletics has been substantial." },
  { id: "schmemann-a", name: "Alexander Schmemann", era: "1921-1983", context: "For the Life of the World (1963); Introduction to Liturgical Theology (1966); Orthodox theologian", bio: "Alexander Schmemann was an Orthodox theologian whose work on the liturgical year and sacramental theology has had remarkable influence beyond Orthodoxy. His For the Life of the World argued that the church's liturgy — including the liturgical calendar — is not a retreat from the world but the world's true life restored. The Eucharist and the church year are not religious activities within a secular world but the transformation of time itself. Time, Schmemann argued, is not a container for events but a reality redeemed by Christ — and the liturgical year is how the church lives in redeemed time.", quote: "The purpose of the liturgical year is to transform us — to make us different people. It is not a commemoration of events that happened long ago but the perpetual making-present of what Christ has done for us.", contribution: "Schmemann's liturgical theology has had extraordinary cross-denominational influence. His understanding of the Eucharist and the church year as the church's participation in the Kingdom of God has been adopted by Catholic, Anglican, Lutheran, and evangelical liturgical theologians as a framework for understanding the meaning of Christian time." },
];

export default function ChurchCalendarPage() {
  const [selectedSeason, setSelectedSeason] = usePersistedState<string>("vine_church-calendar_selected_season", "advent");
  const [activeTab, setActiveTab] = usePersistedState<"seasons" | "holidays" | "guide" | "voices" | "videos">("vine_church-calendar_tab", "seasons");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_church-calendar_voice", "webber-r");
  const voiceItem = VOICES_CAL.find(v => v.id === selectedVoice)!;

  const season = SEASONS.find(s => s.id === selectedSeason);

  const getCurrentSeason = () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    if (month === 12 && day >= 25) return "christmas";
    if (month === 1 && day <= 5) return "christmas";
    if (month === 1 || (month === 2 && day <= 2)) return "epiphany";
    if (month >= 3 && month <= 4) return "lent";
    if (month === 4 || (month === 5 && day <= 22)) return "easter";
    if (month === 12) return "advent";
    return "ordinary";
  };

  useEffect(() => {
    setSelectedSeason(getCurrentSeason());
  }, []);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📅</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Christian Calendar</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The liturgical year tells the full story of salvation — Advent through Ordinary Time, shaping how the church experiences time itself.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "seasons" as const, label: "Liturgical Seasons", icon: "🌿" },
            { id: "holidays" as const, label: "Special Days", icon: "✨" },
            { id: "guide" as const, label: "Living the Year", icon: "📖" },
            { id: "voices" as const, label: "Voices", icon: "📣" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "seasons" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {/* Season selector */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 160 }}>
              {SEASONS.map(s => (
                <button key={s.id} onClick={() => setSelectedSeason(s.id)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedSeason === s.id ? s.color : BORDER}`, background: selectedSeason === s.id ? `${s.color}18` : CARD, color: selectedSeason === s.id ? s.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 8 }}>
                  <span>{s.emoji}</span> {s.name}
                </button>
              ))}
            </div>

            {/* Season detail */}
            {season && (
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ background: CARD, border: `1px solid ${season.color}40`, borderRadius: 14, padding: 28 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                    <span style={{ fontSize: 36 }}>{season.emoji}</span>
                    <div>
                      <h2 style={{ color: season.color, fontWeight: 900, fontSize: 24, margin: 0 }}>{season.name}</h2>
                      <div style={{ color: MUTED, fontSize: 13 }}>{season.timing}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
                    <span style={{ background: `${season.color}20`, color: season.color, padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>{season.theme}</span>
                    <span style={{ background: BORDER, color: MUTED, padding: "4px 10px", borderRadius: 20, fontSize: 12 }}>Color: {season.liturgicalColor}</span>
                  </div>
                  <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 20 }}>{season.description}</p>

                  <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Practices for This Season</h4>
                  <ul style={{ margin: 0, paddingLeft: 20, marginBottom: 20 }}>
                    {season.practices.map((p, i) => <li key={i} style={{ color: TEXT, fontSize: 14, marginBottom: 6 }}>{p}</li>)}
                  </ul>

                  <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Key Scriptures</h4>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                    {season.verses.map(v => (
                      <span key={v} style={{ background: `${season.color}15`, color: season.color, padding: "4px 10px", borderRadius: 8, fontSize: 13, fontWeight: 600 }}>{v}</span>
                    ))}
                  </div>

                  <div style={{ background: `${BG}`, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 14 }}>
                    <p style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Historical Note</p>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{season.historicalNote}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "holidays" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {CHRISTIAN_HOLIDAYS.map(h => (
              <div key={h.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, margin: 0 }}>{h.name}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" }}>{h.date}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{h.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "guide" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 26, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 12 }}>Why Follow the Church Calendar?</h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 14 }}>
                The liturgical year is the church's counter-cultural answer to the world's calendar. While the world rushes from Halloween to Christmas to Valentine's Day, the church moves through Advent, Christmas, Epiphany, Lent, Easter, Pentecost — telling the full story of what God has done in Christ.
              </p>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 14 }}>
                Following the church calendar is a practice of formation: you don't just hear the gospel — you live inside it, year after year, in different seasons, letting different parts of the story sink in. Lent teaches repentance. Easter teaches hope. Pentecost teaches dependence on the Spirit. Ordinary Time teaches faithfulness in the mundane.
              </p>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15 }}>
                You don't have to be Catholic, Anglican, or Orthodox to benefit from the calendar. Evangelical and non-denominational Christians are increasingly recovering these rhythms as a framework for discipleship — not as legalism but as wisdom.
              </p>
            </div>
            {[
              { title: "Getting Started", icon: "🌱", steps: ["Learn the basic arc: Advent → Christmas → Epiphany → Lent → Holy Week → Easter → Pentecost → Ordinary Time", "Find one practice for the current season (see the Seasons tab)", "Read the lectionary passage for this week — many churches worldwide read the same texts", "Notice how the season shapes your prayers and attention"] },
              { title: "Deepening the Practice", icon: "📚", steps: ["Get a liturgical calendar or app that tracks the church year", "Observe the major feasts as actual celebrations", "Use the Psalms psalter — read through all 150 in a month", "Practice fasting during Lent and Advent; celebrate fully during Eastertide", "Connect with a church that observes the liturgical year"] },
              { title: "The Calendar as Discipline", icon: "🧘", steps: ["The calendar structures time — it tells you what to pay attention to", "Use the seasons to plan Bible reading themes", "Let the color changes in worship (if your church uses them) signal spiritual transitions", "Journal through the year — notice how different seasons feel different spiritually", "Teach the calendar to your children — it's a whole-body, whole-year catechism"] },
            ].map(s => (
              <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 12 }}>{s.icon} {s.title}</h3>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  {s.steps.map((step, i) => <li key={i} style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, marginBottom: 8 }}>{step}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}
        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_CAL.map(v => (
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
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on the liturgical year, Advent, Lent, and living the church calendar.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "cefE418Z9IY", title: "Advent: The Glory of the Incarnation", channel: "Timothy Keller / Gospel in Life", description: "Tim Keller preaches on the theological depth of Advent — waiting for the coming of Christ as a posture of the soul." },
                  { videoId: "IkzzdfaqJ2k", title: "Advent: The Word", channel: "Timothy Keller / Gospel in Life", description: "Tim Keller on John 1 and the meaning of the Word becoming flesh — the theological center of the Advent season." },
                  { videoId: "3KL_u820fcc", title: "Jesus, Our God — Advent Sermon", channel: "Timothy Keller / Gospel in Life", description: "Tim Keller on the divinity of Christ as the cornerstone of Advent worship and anticipation." },
                  { videoId: "hOwe-54Bigo", title: "Advent: Born Again", channel: "Timothy Keller / Gospel in Life", description: "Tim Keller on the new birth and how it connects to the Advent season's themes of darkness, longing, and the arrival of light." },
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
