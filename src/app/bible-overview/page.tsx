"use client";
import { useState } from "react";

interface BibleBook {
  name: string;
  abbr: string;
  testament: "OT" | "NT";
  category: string;
  author: string;
  date: string;
  chapters: number;
  theme: string;
  summary: string;
  keyVerse: string;
  keyVerseRef: string;
  bigIdea: string;
  readingTips: string;
}

const BOOKS: BibleBook[] = [
  { name: "Genesis", abbr: "Gen", testament: "OT", category: "Law / Torah", author: "Moses", date: "c. 1446–1406 BC", chapters: 50, theme: "Beginnings", summary: "The book of origins: creation, the Fall, the flood, the dispersion of nations, and the calling of Abraham through whom all nations will be blessed. The first 11 chapters are cosmic history; chapters 12–50 are the patriarchal narratives of Abraham, Isaac, Jacob, and Joseph.", keyVerse: "In the beginning God created the heavens and the earth.", keyVerseRef: "Genesis 1:1", bigIdea: "God creates a good world, humanity rebels, and God begins a plan of redemption through one family that will eventually encompass all nations.", readingTips: "Read chapters 1–3 as a literary and theological unit, not just creation science. The Joseph narrative (37–50) is one of the greatest stories ever told — read it in one sitting." },
  { name: "Exodus", abbr: "Exod", testament: "OT", category: "Law / Torah", author: "Moses", date: "c. 1446–1406 BC", chapters: 40, theme: "Redemption from slavery", summary: "God rescues Israel from Egyptian slavery through Moses, delivers the Ten Commandments, and establishes his covenant with the nation. The second half describes the construction of the Tabernacle — God's dwelling place among his people.", keyVerse: "I am the Lord your God, who brought you out of Egypt, out of the land of slavery.", keyVerseRef: "Exodus 20:2", bigIdea: "God redeems his people through blood (Passover), covenant, and presence. Every detail of the Exodus prefigures the greater redemption through Christ.", readingTips: "The ten plagues are not arbitrary cruelty — each one targets a specific Egyptian deity. Trace that pattern. The Tabernacle instructions (chs. 25–40) are tedious to many, but Hebrews shows why every detail matters." },
  { name: "Psalms", abbr: "Ps", testament: "OT", category: "Poetry / Wisdom", author: "David (primarily), and others", date: "c. 1000–400 BC", chapters: 150, theme: "Prayer and worship", summary: "Israel's songbook and prayer book — 150 poems and songs covering every human emotion: grief, joy, rage, praise, doubt, trust, lament, and celebration. Five books within the book. The Psalms teach us that all of life can be brought before God.", keyVerse: "The Lord is my shepherd; I shall not want.", keyVerseRef: "Psalm 23:1", bigIdea: "Honest, raw, emotional prayer is not faithlessness — it is deep faith. The Psalms model what it looks like to cry out to God from every conceivable situation.", readingTips: "Don't read all 150 at once. Read 5 per day (one from each 'book'). Pray the imprecatory psalms (e.g., 137) as cries for justice rather than personal revenge. They reveal Jesus's heart toward injustice." },
  { name: "Proverbs", abbr: "Prov", testament: "OT", category: "Poetry / Wisdom", author: "Solomon (primarily)", date: "c. 950–700 BC", chapters: 31, theme: "Wisdom for daily life", summary: "The practical wisdom book — pithy observations about life, work, relationships, speech, wealth, and character. Not promises but general principles: typically, diligence leads to prosperity; typically, honesty builds trust. Wisdom begins with the fear of the Lord.", keyVerse: "Trust in the Lord with all your heart and lean not on your own understanding.", keyVerseRef: "Proverbs 3:5", bigIdea: "Wisdom is not intelligence — it is skill in living. Wisdom begins with the right posture toward God (fear/reverence) and expresses itself in every domain of ordinary life.", readingTips: "Read one chapter per day, one per month. The chapters match the days of most months. Compare similar themes across chapters rather than trying to find overarching narrative structure." },
  { name: "Isaiah", abbr: "Isa", testament: "OT", category: "Major Prophets", author: "Isaiah ben Amoz", date: "c. 740–700 BC", chapters: 66, theme: "Judgment and salvation", summary: "Often called the 'fifth Gospel' — Isaiah contains more Messianic prophecy than any other OT book. The first 39 chapters focus on judgment on Israel, Judah, and the nations; the final 27 chapters (beginning with 'Comfort, comfort my people') turn toward hope, the Servant Songs, and the promise of a new creation.", keyVerse: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.", keyVerseRef: "Isaiah 53:5", bigIdea: "God judges sin fully and saves sinners radically. The Suffering Servant of Isaiah 53 is the centerpiece of OT Messianic prophecy.", readingTips: "Read chapters 40–55 as a connected unit of comfort and salvation. The Servant Songs (42, 49, 50, 52-53) are among the most profound passages in all Scripture." },
  { name: "Matthew", abbr: "Matt", testament: "NT", category: "Gospels", author: "Matthew (Levi)", date: "c. AD 50–70", chapters: 28, theme: "Jesus as King and Messiah", summary: "Written primarily for a Jewish audience, Matthew presents Jesus as the fulfillment of all Old Testament promises. Five major discourses structure the book (including the Sermon on the Mount). Matthew emphasizes the Kingdom of Heaven, discipleship, and the church.", keyVerse: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.", keyVerseRef: "Matthew 28:19", bigIdea: "Jesus is the long-awaited Messiah-King, and his kingdom — which begins in the heart — is being established through the making of disciples.", readingTips: "Read the Sermon on the Mount (chapters 5–7) in one sitting. Note how often Matthew uses the phrase 'that it might be fulfilled' — he is showing Jewish readers that Jesus completes the entire Old Testament story." },
  { name: "John", abbr: "John", testament: "NT", category: "Gospels", author: "John the Apostle", date: "c. AD 85–95", chapters: 21, theme: "Jesus as divine Son of God", summary: "The most theological of the four Gospels. John was written that readers 'may believe that Jesus is the Messiah, the Son of God' (20:31). Seven 'I AM' statements. Seven signs. Extensive teaching on the Spirit, love, abiding, and eternal life. The most-used Gospel for evangelism.", keyVerse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", keyVerseRef: "John 3:16", bigIdea: "Jesus is not merely a great teacher or prophet — he is the eternal Word of God (Logos) made flesh. Eternal life is knowing him.", readingTips: "Begin here if you're new to the Bible. Read chapters 13–17 (the Upper Room Discourse) as a single portrait of Jesus's heart the night before his death." },
  { name: "Romans", abbr: "Rom", testament: "NT", category: "Epistles", author: "Paul", date: "c. AD 57", chapters: 16, theme: "The gospel and its implications", summary: "The most systematic theological letter in the New Testament. Paul presents the gospel from the universal need for salvation (1–3) through justification by faith (3–5), sanctification (6–8), God's plan for Israel (9–11), and the ethics of the gospel community (12–16).", keyVerse: "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes.", keyVerseRef: "Romans 1:16", bigIdea: "The gospel reveals the righteousness of God — both his judgment of sin and his merciful provision of righteousness through faith in Christ. This changes everything.", readingTips: "Read chapters 1–8 as the theological core. Don't skip chapters 9–11 — they answer 'But what about Israel?' Chapter 12 is the 'therefore': because of all this, here's how to live." },
  { name: "1 Corinthians", abbr: "1 Cor", testament: "NT", category: "Epistles", author: "Paul", date: "c. AD 55", chapters: 16, theme: "Church unity and practical holiness", summary: "Paul's most practical letter — written in response to multiple problems in the Corinthian church: divisions, sexual immorality, lawsuits, spiritual gift abuse, the Lord's Supper, and resurrection doubt. Chapter 13 is the famous 'love chapter.' Chapter 15 is the most comprehensive NT treatment of the resurrection.", keyVerse: "If I speak in the tongues of men or of angels, but do not have love, I am only a resounding gong or a clanging cymbal.", keyVerseRef: "1 Corinthians 13:1", bigIdea: "The cross must shape every dimension of church life — power dynamics, worship, sexuality, spiritual gifts, and death. The resurrection is not optional Christian doctrine.", readingTips: "Read chapter 13 in context — it comes in the middle of a debate about spiritual gifts. Chapter 15 (on resurrection) is one of the most important chapters in the NT." },
  { name: "Ephesians", abbr: "Eph", testament: "NT", category: "Epistles", author: "Paul", date: "c. AD 60–62", chapters: 6, theme: "The church as the body of Christ", summary: "A letter about the cosmic significance of the church — the body of Christ, the fullness of him who fills everything. The first three chapters describe what God has done (indicative); the last three describe how to live in light of it (imperative). Contains the Armor of God (6:10-18).", keyVerse: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God.", keyVerseRef: "Ephesians 2:8", bigIdea: "The church is not a human organization — it is the body of Christ, seated with him in heavenly places. Every social barrier (Jew/Gentile, slave/free) has been broken down in him.", readingTips: "Read chapters 1–3 for the theological foundation, then 4–6 for application. The household codes (5:21–6:9) should be read in the context of mutual submission (5:21), not in isolation." },
  { name: "Revelation", abbr: "Rev", testament: "NT", category: "Apocalyptic", author: "John the Apostle", date: "c. AD 95", chapters: 22, theme: "Victory of Christ and the Lamb", summary: "A prophetic-apocalyptic letter to seven churches under Roman persecution. Uses symbolic, visionary language drawn from Daniel, Ezekiel, and Zechariah. Its primary message: the Lamb (Jesus) has already won; Christians should faithful endure because history is moving toward God's ultimate triumph.", keyVerse: "He who is the faithful witness, the firstborn from the dead, and the ruler of the kings of the earth... To him who loves us and has freed us from our sins by his blood.", keyVerseRef: "Revelation 1:5", bigIdea: "Despite appearances, Christ is Lord — not Caesar, not any human empire. The church's calling is faithful witness, not anxious survival.", readingTips: "Don't read Revelation as a newspaper-prophecy decoder. Read it as first-century Christians would: as encouragement to hold on under persecution. The symbols come from OT prophets, not current events." },
  { name: "Hebrews", abbr: "Heb", testament: "NT", category: "Epistles", author: "Unknown (possibly Apollos or Priscilla)", date: "c. AD 60–70", chapters: 13, theme: "Jesus as the supreme high priest", summary: "An extended sermon showing that Jesus is greater than angels, Moses, Aaron, and the Levitical priesthood. Written to Jewish Christians tempted to return to Judaism. Uses the OT extensively to show that everything in the Jewish system pointed to Christ — and is now fulfilled in him.", keyVerse: "Therefore, since we have a great high priest who has ascended into heaven, Jesus the Son of God, let us hold firmly to the faith we profess.", keyVerseRef: "Hebrews 4:14", bigIdea: "Jesus is better — better than every OT institution and mediator. The 'therefore' passages call readers to persevere in faith based on who Jesus is.", readingTips: "The 'Hall of Faith' (chapter 11) is best read in context of chapter 12:1-2 — the heroes of faith run the race, and now it's our turn. Don't read chapter 6 (warning passages) in isolation." },
];

const CATEGORIES = ["All", "Law / Torah", "Poetry / Wisdom", "Major Prophets", "Gospels", "Epistles", "Apocalyptic"];
const TESTAMENTS = ["All", "OT", "NT"];

export default function BibleOverviewPage() {
  const [catFilter, setCatFilter] = useState("All");
  const [testamentFilter, setTestamentFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<BibleBook | null>(null);
  const [readIds, setReadIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_bible_overview_read"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [savedIds, setSavedIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_bible_overview_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });

  const toggleRead = (name: string) => {
    setReadIds(prev => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      try { localStorage.setItem("vine_bible_overview_read", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const toggleSave = (name: string) => {
    setSavedIds(prev => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      try { localStorage.setItem("vine_bible_overview_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const filtered = BOOKS.filter(b => {
    if (testamentFilter !== "All" && b.testament !== testamentFilter) return false;
    if (catFilter !== "All" && b.category !== catFilter) return false;
    if (search && !b.name.toLowerCase().includes(search.toLowerCase()) && !b.theme.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const CAT_COLORS: Record<string, string> = {
    "Law / Torah": "#FFB347",
    "Poetry / Wisdom": "#4FC3F7",
    "Major Prophets": "#A080FF",
    "Gospels": "#00FF88",
    "Epistles": "#FF8C42",
    "Apocalyptic": "#FF6B9D",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📚</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Bible Book Overview</h1>
          <p style={{ color: "#9898B3", fontSize: 16 }}>Know what every book is about — its theme, author, and big idea</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(0,255,136,0.1)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.25)", borderRadius: 20, padding: "4px 14px", fontSize: 13 }}>
              {readIds.size}/{BOOKS.length} Read
            </span>
          </div>
        </div>

        {/* Progress */}
        <div style={{ marginBottom: 24, background: "#12121F", borderRadius: 12, padding: "14px 18px", border: "1px solid #1E1E32" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: "#9898B3" }}>Books Overview Progress</span>
            <span style={{ fontSize: 13, color: "#00FF88", fontWeight: 700 }}>{readIds.size} of {BOOKS.length}</span>
          </div>
          <div style={{ height: 6, background: "#1E1E32", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(readIds.size / BOOKS.length) * 100}%`, background: "linear-gradient(90deg, #00FF88, #6B4FBB)", borderRadius: 3, transition: "width 0.3s" }} />
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap", alignItems: "center" }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search books..."
            style={{ flex: 1, minWidth: 200, padding: "8px 14px", borderRadius: 10, background: "#12121F", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, outline: "none" }} />
          <div style={{ display: "flex", gap: 6 }}>
            {TESTAMENTS.map(t => (
              <button key={t} onClick={() => setTestamentFilter(t)}
                style={{ padding: "7px 14px", borderRadius: 10, border: `1px solid ${testamentFilter === t ? "#00FF88" : "#1E1E32"}`, background: testamentFilter === t ? "rgba(0,255,136,0.1)" : "transparent", color: testamentFilter === t ? "#00FF88" : "#9898B3", fontSize: 13, cursor: "pointer", fontWeight: testamentFilter === t ? 700 : 400 }}>
                {t === "OT" ? "Old Testament" : t === "NT" ? "New Testament" : "All"}
              </button>
            ))}
          </div>
          <select value={catFilter} onChange={e => setCatFilter(e.target.value)}
            style={{ padding: "8px 14px", borderRadius: 10, background: "#12121F", border: "1px solid #1E1E32", color: "#9898B3", fontSize: 14, cursor: "pointer" }}>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Books grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {filtered.map(book => (
            <div key={book.name} onClick={() => setSelected(book)}
              style={{ background: "#12121F", border: `1px solid ${readIds.has(book.name) ? "rgba(0,255,136,0.25)" : "#1E1E32"}`, borderRadius: 16, padding: 20, cursor: "pointer", transition: "border-color 0.2s, transform 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLDivElement).style.borderColor = CAT_COLORS[book.category]; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.borderColor = readIds.has(book.name) ? "rgba(0,255,136,0.25)" : "#1E1E32"; }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{book.name}</h3>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: `${CAT_COLORS[book.category]}18`, color: CAT_COLORS[book.category], border: `1px solid ${CAT_COLORS[book.category]}35` }}>{book.category}</span>
                    <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "#1E1E32", color: "#9898B3" }}>{book.chapters} chapters</span>
                  </div>
                </div>
                <button onClick={e => { e.stopPropagation(); toggleSave(book.name); }}
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: savedIds.has(book.name) ? "#FFD700" : "#4A4A68" }}>
                  {savedIds.has(book.name) ? "★" : "☆"}
                </button>
              </div>
              <p style={{ fontSize: 13, color: "#9898B3", marginBottom: 8, fontStyle: "italic" }}>Theme: {book.theme}</p>
              <p style={{ fontSize: 13, color: "#C0C0D8", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {book.bigIdea}
              </p>
              <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "#6A6A88" }}>{book.author} · {book.date}</span>
                <button onClick={e => { e.stopPropagation(); toggleRead(book.name); }}
                  style={{ fontSize: 11, padding: "3px 10px", borderRadius: 8, border: `1px solid ${readIds.has(book.name) ? "rgba(0,255,136,0.3)" : "#2A2A40"}`, background: readIds.has(book.name) ? "rgba(0,255,136,0.1)" : "transparent", color: readIds.has(book.name) ? "#00FF88" : "#6A6A88", cursor: "pointer", fontWeight: 600 }}>
                  {readIds.has(book.name) ? "✓ Read" : "Mark Read"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 100, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "20px", overflowY: "auto" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#12121F", borderRadius: 20, padding: 32, maxWidth: 680, width: "100%", border: "1px solid #2A2A40", marginTop: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 6 }}>{selected.name}</h2>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: `${CAT_COLORS[selected.category]}18`, color: CAT_COLORS[selected.category], border: `1px solid ${CAT_COLORS[selected.category]}35` }}>{selected.category}</span>
                  <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: "#1E1E32", color: "#9898B3" }}>{selected.testament}</span>
                  <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: "#1E1E32", color: "#9898B3" }}>{selected.chapters} chapters</span>
                </div>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: "#6A6A88", fontSize: 22, cursor: "pointer" }}>×</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              {[["Author", selected.author], ["Date", selected.date], ["Theme", selected.theme]].map(([k, v]) => (
                <div key={k} style={{ background: "#0D0D1A", borderRadius: 10, padding: 12 }}>
                  <p style={{ fontSize: 11, color: "#6A6A88", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</p>
                  <p style={{ fontSize: 14, color: "#D0D0E8", fontWeight: 600 }}>{v}</p>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 16 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#00FF88", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Summary</h4>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selected.summary}</p>
            </div>

            <div style={{ marginBottom: 16 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#A080FF", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>The Big Idea</h4>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selected.bigIdea}</p>
            </div>

            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, marginBottom: 16, borderLeft: "3px solid #00FF88" }}>
              <p style={{ fontSize: 15, color: "#C0C0D8", fontStyle: "italic", lineHeight: 1.6 }}>"{selected.keyVerse}"</p>
              <p style={{ fontSize: 13, color: "#00FF88", marginTop: 8, fontWeight: 700 }}>— {selected.keyVerseRef}</p>
            </div>

            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 14, marginBottom: 20 }}>
              <h4 style={{ fontSize: 12, fontWeight: 700, color: "#FFB347", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Reading Tips</h4>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selected.readingTips}</p>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => toggleRead(selected.name)}
                style={{ flex: 1, padding: "12px", borderRadius: 12, border: `1px solid ${readIds.has(selected.name) ? "rgba(0,255,136,0.4)" : "#2A2A40"}`, background: readIds.has(selected.name) ? "rgba(0,255,136,0.12)" : "#1E1E32", color: readIds.has(selected.name) ? "#00FF88" : "#9898B3", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                {readIds.has(selected.name) ? "✓ Marked as Read" : "Mark as Read"}
              </button>
              <button onClick={() => toggleSave(selected.name)}
                style={{ padding: "12px 20px", borderRadius: 12, border: `1px solid ${savedIds.has(selected.name) ? "rgba(255,215,0,0.3)" : "#2A2A40"}`, background: savedIds.has(selected.name) ? "rgba(255,215,0,0.08)" : "#1E1E32", color: savedIds.has(selected.name) ? "#FFD700" : "#9898B3", cursor: "pointer", fontWeight: 700, fontSize: 16 }}>
                {savedIds.has(selected.name) ? "★" : "☆"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
