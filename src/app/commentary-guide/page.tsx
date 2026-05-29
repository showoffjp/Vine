"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const TYPE_FILTERS = ["All", "One-Volume", "Expository", "Word Studies", "Academic", "Devotional"];

const COMMENTARIES = [
  {
    title: "The ESV Study Bible",
    type: "One-Volume",
    color: GREEN,
    author: "Multiple scholars (Wayne Grudem, Thomas Schreiner, J.I. Packer, and others)",
    publisher: "Crossway, 2008",
    pages: "2,752 pages",
    translation: "ESV",
    description: "The gold standard one-volume Bible study resource. The ESV Study Bible contains 20,000+ study notes, 240 full-color maps and illustrations, 50 articles on topics from creation to end times, and reading plans. The notes are theological and exegetical rather than merely devotional. Edited and contributed to by some of the most respected Reformed scholars alive.",
    best_for: "Serious Bible readers who want one comprehensive resource; Sunday school teachers; anyone wanting notes that explain theological significance alongside historical-grammatical interpretation",
    level: "Intermediate to Advanced",
    strengths: "Best notes of any one-volume Bible; excellent cross-references; maps are superb; the introductions to each book are outstanding",
    weaknesses: "Decidedly Reformed/complementarian perspective; heavy physical volume",
    price_range: "$30-50",
    initials: "ESV",
  },
  {
    title: "Matthew Henry's Commentary",
    type: "One-Volume",
    color: PURPLE,
    author: "Matthew Henry",
    publisher: "Originally 1706-1714; multiple publishers",
    pages: "2,000+ pages (one-volume abridgement)",
    translation: "KJV",
    description: "The most beloved devotional commentary in the history of English Christianity. Matthew Henry wrote six volumes of verse-by-verse commentary; the one-volume edition abridges the whole. Henry wrote with extraordinary warmth, practical application, and Puritan theological insight. Every paragraph can become a prayer.",
    best_for: "Personal devotional study; sermon preparation; anyone who wants to know what Scripture meant devotionally to English Christianity for 300 years",
    level: "Beginner to Intermediate",
    strengths: "Unmatched devotional richness; applicable to daily life; covers every verse; freely available online (PBible.org)",
    weaknesses: "Old English style; not strong on historical-critical questions; based on KJV",
    price_range: "Free online; $15-30 for print",
    initials: "MH",
  },
  {
    title: "David Guzik's Enduring Word Commentary",
    type: "One-Volume",
    color: "#3B82F6",
    author: "David Guzik",
    publisher: "Enduring Word Media, ongoing",
    pages: "Entire Bible online",
    translation: "Multiple",
    description: "David Guzik has written verse-by-verse commentary on the entire Bible, available free at enduringword.com. The commentary is clear, practical, and theologically evangelical. Each chapter of commentary includes historical context, verse explanation, cross-references, and practical application. Guzik quotes extensively from other commentators (Spurgeon, Lloyd-Jones, Warren Wiersbe, etc.).",
    best_for: "Accessible, free commentary for every Bible passage; sermon preparation; home study; anyone who needs quick verse explanation",
    level: "Beginner to Intermediate",
    strengths: "Completely free; covers the entire Bible; accessible writing; excellent for beginners; integrated into Blue Letter Bible",
    weaknesses: "Not as academically rigorous as technical commentaries; some Reformed evangelical bias",
    price_range: "Free at enduringword.com",
    initials: "EW",
  },
  {
    title: "John MacArthur New Testament Commentary",
    type: "Expository",
    color: "#F59E0B",
    author: "John MacArthur",
    publisher: "Moody Publishers",
    pages: "30+ volumes for NT",
    translation: "NASB",
    description: "John MacArthur's verse-by-verse expository commentary series covers the entire New Testament. MacArthur is a master of systematic exposition — his comments are grammatically precise, doctrinally clear, and thoroughly biblical. The series reflects his strong Calvinist and cessationist convictions. Each volume opens with a detailed introduction to the book and includes extensive word studies and cross-references.",
    best_for: "Pastors and teachers preparing expository messages; anyone wanting thorough NT exposition from a Calvinist perspective; verse-by-verse study",
    level: "Intermediate to Advanced",
    strengths: "Comprehensive NT coverage; grammatical precision; clear Reformed theology; excellent for sermon preparation",
    weaknesses: "Strong Calvinist/dispensationalist bias; cessationist; can be theologically tendentious on contested texts",
    price_range: "$20-30 per volume; full set available in Logos",
    initials: "MAC",
  },
  {
    title: "The IVP Bible Background Commentary",
    type: "Academic",
    color: "#10B981",
    author: "Craig Keener (NT), John Walton (OT)",
    publisher: "IVP Academic",
    pages: "NT: 832 pages; OT: 800 pages",
    translation: "NIV",
    description: "The most useful academic commentary for understanding the cultural and historical background of the biblical text. Keener and Walton are among the world's leading scholars of the first-century Jewish/Roman world (NT) and ancient Near Eastern culture (OT). Every verse receives comment on its specific historical and cultural background — what did the original readers understand? What were the cultural assumptions the author shared with the audience?",
    best_for: "Understanding what the Bible meant in its original context; sermon illustrations from ancient culture; anyone doing serious historical-grammatical exegesis",
    level: "Intermediate to Advanced",
    strengths: "Best cultural background commentary available; Keener and Walton are world-class scholars; dramatically increases comprehension of context",
    weaknesses: "Focuses on background, not theology; not a replacement for expository commentary; some theological neutrality on contested texts",
    price_range: "$25-35 per volume",
    initials: "IVP",
  },
  {
    title: "Word Biblical Commentary (WBC)",
    type: "Academic",
    color: "#EF4444",
    author: "Multiple scholars (Dunn, Metzger, Barker, etc.)",
    publisher: "Thomas Nelson / Zondervan",
    pages: "60 volumes; 600-900 pages each",
    translation: "Author's own translation",
    description: "The premier evangelical academic commentary series. WBC volumes include grammatical analysis of every phrase, extensive interaction with scholarly literature, text notes on manuscript variants, and verse-by-verse exegesis. Each volume is by a specialized scholar. The format includes: form/structure/setting, comment on each unit, and biblical theology explanation. Used in most evangelical seminaries.",
    best_for: "Seminary students; doctoral-level study; pastors doing thorough exegesis; scholarly interaction with secondary literature",
    level: "Advanced",
    strengths: "Most rigorous academic evangelical commentary; own translation; interaction with all major scholarship; strong textual criticism",
    weaknesses: "Extremely expensive; very technical; requires knowledge of Greek/Hebrew for full value",
    price_range: "$35-60 per volume; best accessed through Logos",
    initials: "WBC",
  },
  {
    title: "New International Commentary (NICOT/NICNT)",
    type: "Academic",
    color: "#6366F1",
    author: "Multiple scholars (Bruce, Marshall, Moo, Fee, Wenham, etc.)",
    publisher: "Eerdmans",
    pages: "30+ volumes; 400-600 pages each",
    translation: "Author's own translation",
    description: "The most balanced and widely used academic evangelical commentary series. NICNT/NICOT combines rigorous scholarship with evangelical commitment to Scripture's authority. Volumes by Gordon Fee (1 Corinthians), Douglas Moo (Romans, Galatians), F.F. Bruce (Acts, Hebrews), and Gordon Wenham (Genesis) are considered standard references. Strong on both historical-critical and theological dimensions.",
    best_for: "Pastors and serious students wanting the best balance of academic rigor and theological faithfulness; standard reference for preaching and teaching",
    level: "Intermediate to Advanced",
    strengths: "Best balance of academic rigor and evangelical theology; strong authors; standard reference in evangelical seminaries",
    weaknesses: "Some volumes older and need updating; expensive; individual volume quality varies",
    price_range: "$30-50 per volume",
    initials: "NIC",
  },
  {
    title: "Vine's Complete Expository Dictionary",
    type: "Word Studies",
    color: "#A855F7",
    author: "W.E. Vine",
    publisher: "Thomas Nelson; originally 1940",
    pages: "800 pages",
    translation: "KJV",
    description: "The most widely used NT word study reference for pastors and serious Bible students who lack formal Greek training. Vine organized the dictionary by English words, tracing each through its Greek original — giving the Greek word, its etymology, and its range of meaning across the NT. Simple to use without Greek knowledge.",
    best_for: "Anyone wanting to understand the Greek behind English words without learning Greek; sermon preparation; personal Bible study enrichment",
    level: "Beginner to Intermediate",
    strengths: "Accessible without Greek; widely available; comprehensive NT coverage; also includes OT Hebrew section",
    weaknesses: "Based on KJV; some entries are dated; should be supplemented by more modern lexicons (BDAG) for serious study",
    price_range: "$15-25",
    initials: "VINE",
  },
  {
    title: "The Treasury of Scripture Knowledge",
    type: "Word Studies",
    color: "#EC4899",
    author: "R.A. Torrey (expanded edition)",
    publisher: "Originally 1830; multiple publishers",
    pages: "1,600 pages",
    translation: "KJV",
    description: "The most comprehensive cross-reference work ever produced — over 500,000 Scripture cross-references organized verse-by-verse. For every verse in the Bible, TSK provides dozens of related verses from across the entire Bible. This is the tool for discovering how Scripture interprets Scripture — the Reformers' hermeneutical principle made practical.",
    best_for: "Anyone who wants to understand a verse in light of the whole Bible; seeing patterns across Scripture; word studies without Greek/Hebrew",
    level: "All levels",
    strengths: "Most comprehensive cross-reference work available; helps Scripture interpret Scripture; freely available online (e-sword)",
    weaknesses: "KJV basis; no explanatory text — just references; requires you to follow the references yourself",
    price_range: "Free in E-Sword and other software; $20-30 in print",
    initials: "TSK",
  },
  {
    title: "Spurgeon's Treasury of David",
    type: "Devotional",
    color: GREEN,
    author: "C.H. Spurgeon",
    publisher: "Originally 1869-1885; multiple publishers",
    pages: "3 volumes; 2,700+ total pages",
    translation: "KJV",
    description: "Spurgeon spent 20 years writing this verse-by-verse commentary on the entire Psalter. Each Psalm receives a word-by-word explanation, a homiletical exposition, and a collection of quotations from other expositors throughout church history. It is simultaneously a commentary, an anthology, and a devotional masterpiece. No other commentary on the Psalms comes close to its depth or breadth.",
    best_for: "Serious study or preaching on the Psalms; devotional reading; understanding the history of Psalm interpretation",
    level: "Intermediate to Advanced",
    strengths: "Unmatched depth on the Psalms; 20 years of research; rich homiletical material; freely available online (spurgeon.org)",
    weaknesses: "Victorian English style; KJV basis; only covers Psalms",
    price_range: "Free at spurgeon.org; $30-50 for print edition",
    initials: "SPG",
  },
];

export default function CommentaryGuidePage() {
  const [type, setType] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = COMMENTARIES.filter(c => type === "All" || c.type === type);
  const commentary = COMMENTARIES.find(c => c.title === selected);

  const LEVEL_COLOR: Record<string, string> = {
    "Beginner to Intermediate": GREEN,
    "Intermediate": "#F59E0B",
    "Intermediate to Advanced": "#F59E0B",
    "Advanced": "#EF4444",
    "All levels": GREEN,
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📖</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Bible Commentary Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The best commentaries for every level and purpose — from devotional reading to academic exegesis. Commentaries are tools; knowing which tool to use changes everything.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 18, marginBottom: 24 }}>
          <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>START HERE: THE RIGHT COMMENTARY FOR YOUR PURPOSE</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 8 }}>
            {[
              { purpose: "Quick daily reference", rec: "Guzik's Enduring Word (free)" },
              { purpose: "Devotional depth", rec: "Matthew Henry or Spurgeon's Psalms" },
              { purpose: "Cultural context", rec: "IVP Bible Background Commentary" },
              { purpose: "NT expository preaching", rec: "MacArthur NTC or NICNT" },
              { purpose: "Academic/seminary", rec: "Word Biblical Commentary (WBC)" },
              { purpose: "One resource only", rec: "ESV Study Bible" },
            ].map((r, i) => (
              <div key={i} style={{ background: BG, borderRadius: 8, padding: "8px 10px" }}>
                <div style={{ color: MUTED, fontSize: 11 }}>{r.purpose}</div>
                <div style={{ color: TEXT, fontSize: 12, fontWeight: 700, marginTop: 2 }}>{r.rec}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {TYPE_FILTERS.map(t => (
            <button key={t} onClick={() => setType(t)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${type === t ? GREEN : BORDER}`, background: type === t ? `${GREEN}15` : "transparent", color: type === t ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: commentary ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((c, i) => (
              <button key={i} onClick={() => setSelected(selected === c.title ? null : c.title)}
                style={{ background: selected === c.title ? `${c.color}12` : CARD, border: `1px solid ${selected === c.title ? c.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${c.color}20`, border: `1px solid ${c.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                    {c.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{c.title}</span>
                      <span style={{ background: `${c.color}15`, color: c.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{c.type}</span>
                    </div>
                    <div style={{ display: "flex", gap: 8, marginTop: 3, flexWrap: "wrap" }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{c.author.split("(")[0].trim()}</span>
                      <span style={{ color: LEVEL_COLOR[c.level] || GREEN, fontSize: 10, fontWeight: 700 }}>{c.level}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {commentary && (
            <div style={{ background: CARD, border: `1px solid ${commentary.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                <div>
                  <h2 style={{ color: commentary.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{commentary.title}</h2>
                  <div style={{ color: MUTED, fontSize: 12 }}>{commentary.author}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{commentary.publisher} · {commentary.pages}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
                <span style={{ background: `${commentary.color}12`, color: commentary.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{commentary.type}</span>
                <span style={{ background: `${(LEVEL_COLOR[commentary.level] || GREEN)}15`, color: LEVEL_COLOR[commentary.level] || GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{commentary.level}</span>
                <span style={{ background: `${BORDER}`, color: MUTED, padding: "2px 10px", borderRadius: 8, fontSize: 12 }}>{commentary.price_range}</span>
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{commentary.description}</p>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 10, marginBottom: 10 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>BEST FOR</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{commentary.best_for}</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                <div style={{ background: `${commentary.color}08`, border: `1px solid ${commentary.color}15`, borderRadius: 8, padding: 10 }}>
                  <div style={{ color: commentary.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>STRENGTHS</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{commentary.strengths}</p>
                </div>
                <div style={{ background: "#EF444408", border: "1px solid #EF444415", borderRadius: 8, padding: 10 }}>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>LIMITATIONS</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{commentary.weaknesses}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
