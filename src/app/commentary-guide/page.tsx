"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "commentaries" | "howto" | "traditions" | "voices" | "videos";

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

const COMMENTARY_HOWTO = [
  {
    id: 1,
    step: 1,
    title: "Identify the genre of the passage",
    description: "Before opening any commentary, determine what kind of literature you are reading — narrative, prophecy, epistle, wisdom, apocalyptic, law, gospel. Each genre has different rules of interpretation. A commentary on Revelation should be read differently than one on Romans. Knowing the genre tells you which questions to bring and which commentary types to prioritize.",
    tip: "Ask: Is this poetry or prose? Law or narrative? Prophecy or letter? Historical genre shapes everything.",
  },
  {
    id: 2,
    step: 2,
    title: "Read the passage multiple times first",
    description: "Read the text itself — slowly, repeatedly — before consulting any commentary. Observe what is actually there: repeated words, structural patterns, questions the text raises, things you do not understand. Write down your observations and questions. A commentary answers questions; you have to bring the questions. Students who read the commentary first read the text through the commentator's eyes rather than their own.",
    tip: "Read the passage in two different translations before opening any commentary. Note every word or phrase you do not fully understand.",
  },
  {
    id: 3,
    step: 3,
    title: "Use multiple commentaries, not just one",
    description: "No single commentator sees everything, and every commentator has blind spots shaped by their tradition, era, and theological commitments. The best approach uses at least three: a devotional commentary for spiritual texture, an academic commentary for historical-grammatical grounding, and a background commentary for cultural context. When multiple independent scholars reach the same interpretation, confidence increases.",
    tip: "Minimum three: one devotional (Matthew Henry or Guzik), one academic (NICNT/WBC), one background (IVP Bible Background Commentary).",
  },
  {
    id: 4,
    step: 4,
    title: "Cross-reference with systematic theology",
    description: "A commentary tells you what a specific passage means; systematic theology tells you how that passage fits the whole of Scripture's teaching on a topic. After working through the commentary, ask: where does this fit in the overall biblical teaching on this subject? Use a systematic theology (Grudem, Berkhof, or Horton) and the Treasury of Scripture Knowledge cross-references to see how the passage connects to the rest of the canon.",
    tip: "Doctrine is distilled exegesis. If your commentary interpretation contradicts clear biblical teaching elsewhere, reconsider the interpretation.",
  },
  {
    id: 5,
    step: 5,
    title: "Apply — move from observation to application",
    description: "Exegesis without application is incomplete. The goal of Bible study is not merely understanding what the text meant to the original audience — it is understanding what the living God is saying to you through this text today. After establishing the text's meaning, ask: what does this require of me? What must I believe, repent of, do, or trust? The commentary serves the sermon, the study, or the transformation — it is never the final goal.",
    tip: "Ask three application questions: What does this reveal about God? What does this require of me? What does this promise to those who believe?",
  },
];

const COMMENTARY_TRADITIONS = [
  {
    id: 1,
    tradition: "Reformed / Calvinist",
    description: "The Reformed tradition reads Scripture through the lens of the five solas — sola scriptura, sola fide, sola gratia, solus Christus, soli Deo gloria — and the theological framework of John Calvin's Institutes. Reformed commentaries emphasize covenant theology, the sovereignty of God, the depth of human depravity, the sufficiency of grace, and the unity of the Old and New Testaments. They are typically rigorous in historical-grammatical exegesis but theologically confessional.",
    emphasis: "Covenant, sovereignty, grace, Scripture alone",
    example_commentators: ["John Calvin", "Matthew Henry", "Charles Spurgeon", "John MacArthur", "Douglas Moo"],
  },
  {
    id: 2,
    tradition: "Dispensational",
    description: "Dispensationalism reads the Bible as a history of distinct epochs (dispensations) in which God relates to humanity differently. It employs a consistently literal hermeneutic, especially in prophecy, and maintains a sharp distinction between Israel and the Church. Dispensational commentaries are strong on the prophetic books, detailed on the structure of biblical covenants, and careful about the future fulfillment of Old Testament promises to Israel.",
    emphasis: "Literal hermeneutic, prophecy, Israel-Church distinction",
    example_commentators: ["C.I. Scofield", "John Walvoord", "Charles Ryrie", "J. Dwight Pentecost", "Thomas Ice"],
  },
  {
    id: 3,
    tradition: "Catholic / Orthodox",
    description: "Catholic and Orthodox commentaries read Scripture within and alongside the living Tradition of the Church — the writings of the Church Fathers, the decisions of ecumenical councils, and the ongoing Magisterium (Catholic) or conciliar authority (Orthodox). Scripture is not read independently of Tradition but as one stream within the full deposit of faith. These commentaries are strong on Patristic interpretation, liturgical readings, and the allegorical or typological dimensions of the text.",
    emphasis: "Tradition, Patristics, Magisterium, allegory, liturgy",
    example_commentators: ["Origen", "Augustine", "Thomas Aquinas", "Scott Hahn", "Metropolitan Kallistos Ware"],
  },
  {
    id: 4,
    tradition: "Critical-Historical",
    description: "The historical-critical method approaches Scripture as ancient literature produced in specific historical contexts, using the tools of archaeology, linguistics, form criticism, redaction criticism, and source criticism. It asks: what did this text mean to its original author and audience? What sources did the author use? How was the text composed and edited over time? Critical-historical commentaries are strong on ancient background but vary widely on theological conclusions.",
    emphasis: "Archaeology, original languages, composition history, ancient context",
    example_commentators: ["Craig Keener", "John Walton", "Raymond Brown", "Joseph Fitzmyer", "John Meier"],
  },
  {
    id: 5,
    tradition: "Narrative / Literary",
    description: "Literary and narrative approaches read Scripture as unified literary wholes — attending to story structure, characterization, plot, rhetorical artistry, and intertextual allusions. Rather than dismembering the text into sources and redactions, narrative critics ask: how does this story work as a story? What does the narrator emphasize? How do characters develop? These approaches have renewed appreciation for the aesthetic dimension of Scripture and the sophistication of its authors.",
    emphasis: "Story, character, plot, rhetoric, literary artistry",
    example_commentators: ["Robert Alter", "Meir Sternberg", "Richard Bauckham", "N.T. Wright", "Leland Ryken"],
  },
];

const VOICES_COM = [
  {
    id: 1,
    name: "Origen of Alexandria",
    era: "c. 184-253 AD",
    context: "Early Church, Alexandria",
    bio: "Origen was the most prolific biblical commentator of the early Church — writing commentaries, homilies, and scholia on nearly every book of Scripture. He founded the allegorical method of interpretation, arguing that Scripture has three senses: literal (body), moral (soul), and spiritual (spirit). His Hexapla was the most sophisticated textual critical work of antiquity. Though later condemned for speculative theology, his exegetical work shaped the entire subsequent history of Christian interpretation.",
    quote: "The Holy Scriptures were not composed by human wisdom, but were written by the inspiration of the Holy Spirit, at the will of the Father of all things through Jesus Christ.",
    contribution: "Established the principle that Scripture has multiple levels of meaning; produced the most sophisticated biblical text of antiquity (the Hexapla); shaped allegorical interpretation for a millennium",
  },
  {
    id: 2,
    name: "John Chrysostom",
    era: "c. 347-407 AD",
    context: "Antioch & Constantinople, Early Church",
    bio: "John Chrysostom — whose surname means 'golden-mouthed' — was the greatest preacher of the early Church and the primary representative of the Antiochene school of literal-historical interpretation. Against Origen's allegory, Chrysostom insisted that the literal, historical, grammatical sense of the text was primary. His homilies on Matthew, John, Romans, and the Pauline letters remain masterpieces of expository preaching and are still read as models. He was Archbishop of Constantinople until political enemies exiled him.",
    quote: "This is the cause of all evils — the not knowing the Scriptures. We go into battle without arms, and how ought we to come off other than wounded?",
    contribution: "Established the literal-historical method over against allegory; produced incomparable expository homilies still used by preachers; modeled pastoral application of Scripture in sermons",
  },
  {
    id: 3,
    name: "John Calvin",
    era: "1509-1564",
    context: "Geneva, Protestant Reformation",
    bio: "Calvin wrote commentaries on nearly every book of the Bible — works that remain in print and in use 500 years later. His method was rigorously grammatical and historical, deliberately brief in order to serve the preacher rather than overwhelm the reader, and unswervingly focused on the author's intended meaning. He established the Reformed hermeneutical tradition that would shape evangelical interpretation for centuries: Scripture interprets Scripture, the literal sense is primary, and the aim of interpretation is understanding what the Holy Spirit intended through the human author.",
    quote: "Let this be our first principle: that to know God, we must not seek him in our imagination but in his Word.",
    contribution: "Produced the most influential Protestant commentaries in history; established the grammatical-historical method as the norm for Reformed exegesis; his Institutes organized the theology behind the exegesis",
  },
  {
    id: 4,
    name: "Matthew Henry",
    era: "1662-1714",
    context: "England, Puritan/Nonconformist",
    bio: "Matthew Henry was a Nonconformist minister in Chester whose six-volume commentary on the entire Bible became the most widely-read devotional commentary in the history of English Christianity. He wrote with warmth, practical application, and Puritan theological depth. Every verse received explanation, application, and often a devotional meditation that could become a prayer. His commentary has been in continuous print for over 300 years and shaped the private Bible study of millions of English and American Christians.",
    quote: "Those who would not sin against God must be afraid of the occasions of sin, and must keep at a distance from all appearance of evil.",
    contribution: "Produced the most beloved devotional commentary in English; shaped Protestant private Bible reading for three centuries; demonstrated that rigorous exegesis and warm piety are not opposites",
  },
  {
    id: 5,
    name: "N.T. Wright",
    era: "b. 1948",
    context: "Contemporary, Anglican, United Kingdom",
    bio: "N.T. Wright is arguably the most influential New Testament scholar of the late twentieth and early twenty-first centuries. His multi-volume series 'Christian Origins and the Question of God' (including 'Jesus and the Victory of God' and 'The Resurrection of the Son of God') reframes the entire historical-critical discussion of the New Testament within the context of first-century Jewish apocalyptic thought. His 'For Everyone' commentary series makes his scholarship accessible to ordinary readers. He holds together historical rigor and theological commitment in a way that has influenced scholars across traditions.",
    quote: "The resurrection is not a strange other-worldly event; it is the launching of the new creation, the transformation of the whole cosmos beginning with one human being.",
    contribution: "Renewed historical-critical scholarship's engagement with resurrection and eschatology; reframed Paul's theology within first-century Judaism; produced accessible commentaries bridging academy and church",
  },
];

export default function CommentaryGuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>("commentaries");
  const [type, setType] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<number>(VOICES_COM[0].id);

  const filtered = COMMENTARIES.filter(c => type === "All" || c.type === type);
  const commentary = COMMENTARIES.find(c => c.title === selected);
  const voice = VOICES_COM.find(v => v.id === selectedVoice)!;

  const LEVEL_COLOR: Record<string, string> = {
    "Beginner to Intermediate": GREEN,
    "Intermediate": "#F59E0B",
    "Intermediate to Advanced": "#F59E0B",
    "Advanced": "#EF4444",
    "All levels": GREEN,
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📖</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Bible Commentary Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The best commentaries for every level and purpose &mdash; from devotional reading to academic exegesis. Commentaries are tools; knowing which tool to use changes everything.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6, width: "fit-content" }}>
          {(["commentaries", "howto", "traditions", "voices", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)}
              style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "commentaries" ? "Commentaries" : t === "howto" ? "How to Use" : t === "traditions" ? "Traditions" : t === "voices" ? "Voices" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {/* Commentaries Tab */}
        {activeTab === "commentaries" && (
          <>
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
                      <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{commentary.publisher} &middot; {commentary.pages}</div>
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
          </>
        )}

        {/* How to Use Tab */}
        {activeTab === "howto" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}20`, borderRadius: 12, padding: 18, marginBottom: 8 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>HOW TO USE A COMMENTARY WELL</div>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                A commentary is a tool, not a substitute for reading Scripture. These {COMMENTARY_HOWTO.length} steps will help you get the most out of any commentary — from beginner to academic level.
              </p>
            </div>
            {COMMENTARY_HOWTO.map(h => (
              <div key={h.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 16, flexShrink: 0 }}>
                    {h.step}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 17, margin: "0 0 10px" }}>{h.title}</h3>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "0 0 14px" }}>{h.description}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ color: GREEN, fontWeight: 900, fontSize: 11, flexShrink: 0, paddingTop: 1 }}>PRO TIP</span>
                      <p style={{ color: GREEN, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{h.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Traditions Tab */}
        {activeTab === "traditions" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}20`, borderRadius: 12, padding: 18, marginBottom: 8 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>FIVE MAJOR INTERPRETIVE TRADITIONS</div>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                Every commentator reads Scripture from within a tradition. Understanding these traditions helps you identify a commentary&rsquo;s assumptions, strengths, and blind spots.
              </p>
            </div>
            {COMMENTARY_TRADITIONS.map(tr => (
              <div key={tr.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 18, margin: 0, flex: 1 }}>{tr.tradition}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" }}>{tr.emphasis.split(",")[0].trim()}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "0 0 14px" }}>{tr.description}</p>
                <div style={{ background: BG, borderRadius: 8, padding: "10px 14px", marginBottom: 10 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>EMPHASIS</div>
                  <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>{tr.emphasis}</p>
                </div>
                <div>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 10, marginBottom: 8 }}>EXAMPLE COMMENTATORS</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {tr.example_commentators.map((name, i) => (
                      <span key={i} style={{ background: `${BORDER}`, color: TEXT, padding: "3px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{name}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Voices Tab */}
        {activeTab === "voices" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {VOICES_COM.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? `${PURPLE}15` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE + "60" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${PURPLE}25`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 900, fontSize: 13, flexShrink: 0 }}>
                      {v.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: TEXT, fontWeight: 800, fontSize: 15, marginBottom: 2 }}>{v.name}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{v.era}</div>
                      <div style={{ color: MUTED, fontSize: 11 }}>{v.context}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: `${PURPLE}25`, border: `1px solid ${PURPLE}50`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 900, fontSize: 16, flexShrink: 0 }}>
                  {voice.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 20, margin: "0 0 2px" }}>{voice.name}</h2>
                  <div style={{ color: MUTED, fontSize: 12 }}>{voice.era}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{voice.context}</div>
                </div>
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "0 0 16px" }}>{voice.bio}</p>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 14, marginBottom: 14 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>IN THEIR OWN WORDS</div>
                <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.7 }}>&ldquo;{voice.quote}&rdquo;</p>
              </div>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>KEY CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{voice.contribution}</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "cRmWSB1c6L8", title: "How to Study the Bible", channel: "R.C. Sproul / Ligonier Ministries", description: "Sproul gives a masterclass in Bible study method — the tools, disciplines, and habits that make a serious reader of Scripture and a wise user of commentaries." },
                  { videoId: "N4WkOkKu9nA", title: "Why Study the Bible? (Knowing Scripture)", channel: "R.C. Sproul / Ligonier Ministries", description: "Sproul makes the case for why every Christian has a responsibility to study Scripture carefully — and why good tools like commentaries are part of that calling." },
                  { videoId: "NWZHL_MoDvY", title: "Literal Interpretation (Knowing Scripture)", channel: "R.C. Sproul / Ligonier Ministries", description: "Sproul on how to interpret Scripture literally — what that actually means, how it differs from wooden literalism, and why commentaries help you read texts in their proper genre." },
                  { videoId: "QG4fcVyHCxM", title: "The Science of Interpretation (Knowing Scripture)", channel: "R.C. Sproul / Ligonier Ministries", description: "Sproul's introduction to hermeneutics — the principles that govern sound interpretation of Scripture and how to use commentaries as tools rather than authorities." },
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
