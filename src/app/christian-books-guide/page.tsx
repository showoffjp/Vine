"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const CATEGORIES = ["All", "Theology", "Spiritual Formation", "Apologetics", "Devotional", "Christian Living", "Church History", "Marriage & Family", "Leadership"];

const BOOKS = [
  // Theology
  { title: "Mere Christianity", author: "C.S. Lewis", year: 1952, category: "Theology", color: PURPLE, rating: 5, desc: "The single most accessible and intellectually compelling case for Christianity in the English language. Lewis moves from basic morality to the nature of God to the person of Christ with extraordinary clarity. Required reading for any thinking Christian — and the most important book to give to a thoughtful skeptic.", buy: "https://www.amazon.com/Mere-Christianity-C-S-Lewis/dp/0060652926", initials: "MC" },
  { title: "The Holiness of God", author: "R.C. Sproul", year: 1985, category: "Theology", color: "#EF4444", rating: 5, desc: "R.C. Sproul's landmark work on the one attribute of God that Scripture emphasizes above all others. Begins with Isaiah's vision (Isaiah 6), works through the otherness, majesty, and moral perfection of God, and ends with the cross. More Christians name this as the book that changed their view of God than perhaps any other.", buy: "https://www.amazon.com/Holiness-God-R-C-Sproul/dp/0842339574", initials: "HG" },
  { title: "Knowing God", author: "J.I. Packer", year: 1973, category: "Theology", color: GREEN, rating: 5, desc: "The classic introduction to the attributes of God — his wisdom, love, grace, wrath, sovereignty — written by one of the 20th century's greatest evangelical theologians. Warm, precise, and devotionally alive. The best book for someone who wants to actually know God rather than merely know about him.", buy: "https://www.amazon.com/Knowing-God-J-I-Packer/dp/0830816534", initials: "KG" },
  { title: "Desiring God", author: "John Piper", year: 1986, category: "Theology", color: "#8B5CF6", rating: 5, desc: "Piper's foundational case for Christian Hedonism — the provocative idea that God is most glorified in us when we are most satisfied in him. Part theology, part manifesto, part devotional meditation. The book that launched a generation of passion-centered Reformed Christianity and helped thousands see that joy and duty are not opposites.", buy: "https://www.desiringgod.org/books/desiring-god", initials: "DG" },
  { title: "The Reason for God", author: "Tim Keller", year: 2008, category: "Apologetics", color: "#3B82F6", rating: 5, desc: "Keller's systematic and gracious engagement with the most common objections to Christianity raised by his educated, secular, New York City congregation. Addresses: how can a loving God allow suffering? Why is Christianity so exclusive? Is the Bible reliable? One of the most important apologetics books of the last 25 years.", buy: "https://www.amazon.com/Reason-God-Belief-Age-Skepticism/dp/1594483493", initials: "RFG" },
  { title: "The Cost of Discipleship", author: "Dietrich Bonhoeffer", year: 1937, category: "Theology", color: "#10B981", rating: 5, desc: "Written by a German pastor who was ultimately executed for his resistance to the Nazi regime. The book's central distinction — between cheap grace (forgiveness without repentance, faith without cost) and costly grace (grace that demands everything) — is one of the most important insights in modern Christian theology. Prophetic and demanding.", buy: "https://www.amazon.com/Cost-Discipleship-Dietrich-Bonhoeffer/dp/0684815001", initials: "CD" },

  // Spiritual Formation
  { title: "The Pursuit of God", author: "A.W. Tozer", year: 1948, category: "Spiritual Formation", color: "#F59E0B", rating: 5, desc: "Tozer's brief, burning meditation on the soul's hunger for God — on the difference between knowing about God and actually knowing God. Written in a single night on a train, it reads like extended prayer. Its opening paragraph on the inward journey toward God is one of the most quoted passages in modern Christian literature.", buy: "https://www.amazon.com/Pursuit-God-A-W-Tozer/dp/1603748741", initials: "PG" },
  { title: "Celebration of Discipline", author: "Richard Foster", year: 1978, category: "Spiritual Formation", color: "#EC4899", rating: 5, desc: "The definitive modern guide to the classical spiritual disciplines — inward (meditation, prayer, fasting, study), outward (simplicity, solitude, submission, service), and corporate (confession, worship, guidance, celebration). Foster revived interest in the disciplines for the evangelical world. The most comprehensive single-volume treatment available.", buy: "https://www.amazon.com/Celebration-Discipline-Path-Spiritual-Growth/dp/0060628391", initials: "CoD" },
  { title: "The Practice of the Presence of God", author: "Brother Lawrence", year: 1692, category: "Devotional", color: GREEN, rating: 5, desc: "A 17th-century Carmelite monk's letters and conversations on the practice of constantly directing the heart toward God in the midst of ordinary work. Brother Lawrence washed dishes; he also cultivated an unbroken sense of divine presence while washing them. The shortest and perhaps the most life-changing spiritual book ever written.", buy: "https://www.amazon.com/Practice-Presence-God-Brother-Lawrence/dp/0883681056", initials: "PPG" },
  { title: "The Spirit of the Disciplines", author: "Dallas Willard", year: 1988, category: "Spiritual Formation", color: PURPLE, rating: 5, desc: "Willard's philosophical and theological case for why spiritual disciplines are not optional extras but the means by which Christlikeness is formed. Addresses why people who sincerely want to change often fail: without training the body and mind in specific practices, transformation does not happen by will alone.", buy: "https://www.amazon.com/Spirit-Disciplines-Understanding-Lives-Power/dp/006069258X", initials: "SD" },

  // Apologetics
  { title: "Making Sense of God", author: "Tim Keller", year: 2016, category: "Apologetics", color: "#3B82F6", rating: 5, desc: "A companion to The Reason for God, this book makes the positive case for why the Christian account of life, meaning, identity, morality, and hope is more satisfying and coherent than secular alternatives. Pre-apologetics at its best — taking the secular person seriously and engaging their actual concerns.", buy: "https://www.amazon.com/Making-Sense-God-Invitation-Everyone/dp/0525954155", initials: "MSG" },
  { title: "The Language of God", author: "Francis Collins", year: 2006, category: "Apologetics", color: "#10B981", rating: 4, desc: "The former director of the Human Genome Project and the National Institutes of Health makes the case that science and Christianity are not only compatible but mutually illuminating. Collins shows how a rigorous scientist can hold orthodox Christian faith — with intellectual integrity rather than compartmentalization.", buy: "https://www.amazon.com/Language-God-Scientist-Presents-Evidence/dp/0743286391", initials: "LG" },

  // Christian Living
  { title: "Crazy Love", author: "Francis Chan", year: 2008, category: "Christian Living", color: "#EF4444", rating: 5, desc: "Chan's passionate challenge to comfortable, lukewarm Christianity. Starting with God's overwhelming greatness and love, he asks: given this God, how can we live like we do? One of the best-selling Christian books of the 2000s — practical, convicting, and impossible to read without being confronted.", buy: "https://www.amazon.com/Crazy-Love-Overwhelmed-Awesome-God/dp/0781445317", initials: "CL" },
  { title: "Don't Waste Your Life", author: "John Piper", year: 2003, category: "Christian Living", color: "#8B5CF6", rating: 5, desc: "A call to live for the glory of God rather than the American dream of comfort and security. Piper's personal and passionate argument that a life hidden from risk for the sake of safety is a wasted life — and that the most satisfying life is one spent spending itself for what matters most.", buy: "https://www.desiringgod.org/books/dont-waste-your-life", initials: "DWL" },
  { title: "Radical", author: "David Platt", year: 2010, category: "Christian Living", color: "#F59E0B", rating: 5, desc: "Platt examines the American Dream and asks: does the comfortable Christianity many Americans practice bear any resemblance to what Jesus actually called people to? A confronting, sobering, and ultimately hopeful call to take the Great Commission seriously — with your money, your time, and your life.", buy: "https://www.amazon.com/Radical-Taking-Back-Your-Faith/dp/1601422210", initials: "RAD" },

  // Marriage & Family
  { title: "The Meaning of Marriage", author: "Timothy & Kathy Keller", year: 2011, category: "Marriage & Family", color: PURPLE, rating: 5, desc: "The best single book on Christian marriage available. Keller shows that marriage is not primarily about personal fulfillment but about the gospel — about the covenant love of Christ for his church enacted in human relationship. Both theologically rich and practically grounded for engaged and married couples.", buy: "https://www.amazon.com/Meaning-Marriage-Facing-Complexities-Commitment/dp/1594634963", initials: "MM" },

  // Church History
  { title: "The Story of Christianity (2 vols)", author: "Justo González", year: 1984, category: "Church History", color: "#10B981", rating: 5, desc: "The most readable, comprehensive, and fair-minded introduction to the entire sweep of Christian history — from Pentecost to the present day. González writes with extraordinary clarity, covers both Western and non-Western Christianity, and helps readers see that the church's story is far larger, stranger, and more beautiful than any denominational tradition alone conveys.", buy: "https://www.amazon.com/Story-Christianity-Vol-Reformation-Present/dp/0061855871", initials: "SC" },

  // Leadership
  { title: "Spiritual Leadership", author: "J. Oswald Sanders", year: 1967, category: "Leadership", color: GREEN, rating: 5, desc: "The classic text on Christian leadership — what makes a person fit to lead the people of God. Sanders works through biblical, historical, and practical dimensions of spiritual leadership with the directness and wisdom of a man who spent a lifetime in Christian ministry. Particularly strong on the relationship between personal holiness and leadership effectiveness.", buy: "https://www.amazon.com/Spiritual-Leadership-Principles-Excellence-Christian/dp/0802416136", initials: "SL" },
];

type Tab = "books" | "readers" | "plans" | "tips" | "videos";

const READERS = [
  {
    id: "edwards",
    name: "Jonathan Edwards",
    era: "1703-1758",
    context: "Puritan pastor; Northampton, MA; America's greatest theologian",
    bio: "Edwards was one of the most disciplined and systematic readers in Christian history. He kept extensive notebooks — the 'Miscellanies' run to 1,400 entries — where he recorded and developed ideas drawn from his reading. He read natural philosophy alongside theology, Newton alongside Calvin, and integrated the best intellectual work of his age into a Reformed theological framework. His reading was not accumulation but formation: every book was brought to bear on the question of how to know and glorify God more fully. He read by candlelight on horseback, pinning observations to his coat for transcription later.",
    quote: "I resolve to study the Scriptures so steadily, constantly, and frequently, as that I may find, and plainly perceive, myself to grow in the knowledge of the same. And I resolve to study other books as tools for understanding Scripture better.",
    contribution: "Edwards modeled the integration of reading across disciplines — theology, natural philosophy, psychology, rhetoric — in service of knowing God. His notebooks showed generations of pastors how to read not merely for information but for formation, developing ideas slowly across years of reflection. His example is especially relevant for Christian thinkers who want to engage seriously with both faith and the intellectual life of their age.",
  },
  {
    id: "spurgeon",
    name: "C.H. Spurgeon",
    era: "1834-1892",
    context: "Metropolitan Tabernacle, London; Prince of Preachers",
    bio: "Spurgeon owned 12,000 volumes and read voraciously — reportedly 6 books per week at his peak. He read the Puritans above all: 'I find the Puritans are rich, and I find that they are mine.' His 'Commenting and Commentaries' (1876) reviewed 1,400 books for ministers, demonstrating not just breadth but critical discernment. He read Owen and Bunyan and Goodwin and Sibbes with the kind of affection that only comes from deep familiarity. His preaching was saturated with the fruit of this reading — not as displayed erudition but as digested nourishment. He called reading 'the second furnace in which the sermon is prepared; prayer is the first.'",
    quote: "Visit many good books, but live in the Bible. A little book read carefully, prayerfully, repeatedly, is worth more than a hundred books skimmed. But a preacher who is not a reader is not preparing his people for eternity — he is entertaining them for an hour.",
    contribution: "Spurgeon demonstrated that breadth of reading and depth of Scripture are not in competition but mutually reinforcing. His 'Treasury of David' (Psalms commentary) distilled hundreds of other commentators into one work, showing what a life of reading produces when brought to bear on a single text. His recommendation of Puritan literature helped preserve it for future generations who might otherwise have neglected it as outdated.",
  },
  {
    id: "stott",
    name: "John Stott",
    era: "1921-2011",
    context: "All Souls, London; Between Two Worlds; prolific author",
    bio: "Stott read in two worlds simultaneously: the ancient world of Scripture and the contemporary world of his congregation's questions. His method, described in 'Between Two Worlds' (1982), required reading in both directions: deep reading of the biblical text and serious engagement with contemporary culture, science, literature, and philosophy. He read broadly to understand the questions people were actually asking — not to find proof texts for predetermined answers. His personal library was a working library: books annotated, cross-referenced, and read more than once. He believed that a preacher who did not read was like a surgeon who did not know anatomy.",
    quote: "The basic model of all Christian preaching is a bridge. One end of the bridge is planted in the ancient text; the other in the contemporary world. The preacher's job is to walk that bridge — and you cannot walk it unless you have read both worlds seriously.",
    contribution: "Stott made disciplined, broad reading a non-negotiable component of faithful preaching. His integration of Scripture and culture required real intellectual engagement rather than superficial illustration-hunting. His own output — 50+ books, all carefully researched and clearly written — modeled what reading in two worlds produces when sustained over a lifetime of ministry.",
  },
  {
    id: "lewis_reader",
    name: "C.S. Lewis",
    era: "1898-1963",
    context: "Oxford and Cambridge; Mere Christianity; The Chronicles of Narnia",
    bio: "Lewis was among the most widely-read Christian writers of the 20th century — and his breadth of reading in medieval literature, mythology, science fiction, and philosophy gave his apologetics an unusual richness and range. His 'An Experiment in Criticism' (1961) argued that we read literature not primarily to get information from it but to enter into other modes of experience. He believed reading great books was a form of spiritual and intellectual formation — an escape not from reality but from the narrow prison of the present moment. His famous introduction to Athanasius's 'On the Incarnation' argued that every Christian should read at least one old book for every new one.",
    quote: "It is a good rule, after reading a new book, never to allow yourself another new one till you have read an old one in between. Every age has its own outlook. It is specially good at seeing certain truths and specially liable to make certain mistakes. We all, therefore, need the books that will correct the characteristic mistakes of our own period.",
    contribution: "Lewis gave the Christian reader permission — and reason — to read widely, imaginatively, and across centuries. His practice of reading old books to correct the blindspots of the contemporary moment is one of the most practically useful pieces of advice for any Christian reader. His integration of pagan mythology, medieval allegory, and Christian theology in his own work demonstrated what happens when a Christian reads without fear of ideas he does not yet agree with.",
  },
  {
    id: "willard",
    name: "Dallas Willard",
    era: "1935-2013",
    context: "USC Philosophy; Spirit of the Disciplines; Divine Conspiracy",
    bio: "Willard approached reading as one of the 'disciplines of engagement' in Christian formation. His argument in 'The Spirit of the Disciplines' (1988): reading trains the mind to inhabit the world that Scripture describes — to think, perceive, and respond from within a biblical framework rather than merely agreeing with it intellectually. He read philosophy professionally (he was a USC professor) and theology devotionally, refusing the split between intellectual and spiritual life. His 'The Divine Conspiracy' is dense with philosophical argument alongside pastoral wisdom — the product of a mind that read broadly across the boundaries that usually separate academic and popular Christian literature.",
    quote: "Reading is not information acquisition. It is the formation of the mind in a world — a way of seeing, responding, valuing. If you read what the world reads, you will see what the world sees. If you read what the saints read, you will begin to see what the saints saw.",
    contribution: "Willard made reading a spiritual discipline rather than an intellectual exercise — an act of formation rather than information. His integration of academic philosophy with spiritual theology modeled a kind of reading that refused to compartmentalize faith and intellect. His own extensive reading across traditions (Protestant, Catholic, Orthodox, secular philosophy) gave his work an unusual breadth and made his spiritual direction credible to academics who might otherwise dismiss popular Christianity.",
  },
];

const READING_PLANS = [
  {
    id: "new_believer",
    name: "New Believer (Year 1)",
    desc: "Start here. These books build the foundation without overwhelming.",
    books: [
      { title: "Mere Christianity", author: "C.S. Lewis", why: "The clearest intellectual introduction to Christianity's core claims. Read first." },
      { title: "The Pursuit of God", author: "A.W. Tozer", why: "Cultivates the devotional life alongside theological understanding. Short but transforming." },
      { title: "The Practice of the Presence of God", author: "Brother Lawrence", why: "One sitting, one life changed. The simplest book on prayer ever written." },
      { title: "Knowing God", author: "J.I. Packer", why: "Once you have the foundation, meet the God you now know. Foundational theology done with warmth." },
    ],
  },
  {
    id: "apologetics",
    name: "Apologetics Track",
    desc: "For Christians who want to think and speak well about their faith with skeptics.",
    books: [
      { title: "Mere Christianity", author: "C.S. Lewis", why: "The classic — moral argument, the problem of evil, the nature of Christ." },
      { title: "The Reason for God", author: "Tim Keller", why: "Addresses contemporary objections with grace, precision, and cultural intelligence." },
      { title: "Making Sense of God", author: "Tim Keller", why: "The positive case for Christianity — makes secular assumptions explicit." },
      { title: "The Language of God", author: "Francis Collins", why: "A world-class scientist explains why he believes. Addresses faith/science tension." },
    ],
  },
  {
    id: "formation",
    name: "Spiritual Formation Track",
    desc: "For Christians who want to actually become different, not just know more.",
    books: [
      { title: "The Spirit of the Disciplines", author: "Dallas Willard", why: "The philosophical and theological case for why disciplines work. Read this first." },
      { title: "Celebration of Discipline", author: "Richard Foster", why: "The practical guide to the classical disciplines. Complements Willard perfectly." },
      { title: "The Practice of the Presence of God", author: "Brother Lawrence", why: "The simplest and most radical model of the practiced presence of God." },
      { title: "The Pursuit of God", author: "A.W. Tozer", why: "The interior life at its most direct. Read slowly and often." },
    ],
  },
  {
    id: "theology",
    name: "Theology Track",
    desc: "For Christians ready to think hard about what they believe and why.",
    books: [
      { title: "Knowing God", author: "J.I. Packer", why: "The best starting point — attributes of God, warm and precise." },
      { title: "Desiring God", author: "John Piper", why: "Rethinks the goal of the Christian life around joy in God." },
      { title: "The Holiness of God", author: "R.C. Sproul", why: "The most important book for recovering a biblical sense of who God is." },
      { title: "The Cost of Discipleship", author: "Dietrich Bonhoeffer", why: "Costly grace vs. cheap grace — essential for understanding what following Jesus requires." },
    ],
  },
];

const READING_TIPS = [
  { title: "Read old books", desc: "C.S. Lewis recommended reading one old book for every new one. Every era has its characteristic blindspots; old books correct the blindspots of the present age, and present books correct those of the past. A steady diet of only contemporary Christian books produces a Christianity that sounds exactly like the present moment." },
  { title: "Read slowly and mark your books", desc: "A book read once, quickly, without marking, leaves almost nothing. A book read slowly, with a pencil, with passages marked and ideas noted, becomes part of you. Mortimer Adler's 'How to Read a Book' is the best guide to this approach. The goal is not to finish books but to inhabit them." },
  { title: "Keep a reading notebook", desc: "Jonathan Edwards pinned notes to his coat while riding; Spurgeon kept commonplace books; Lewis filled his margins. A reading notebook where you record the best quotes and ideas from each book serves two purposes: it forces digestion of what you read, and it becomes a personal theology reference over time." },
  { title: "Read in community", desc: "The accountability and amplification of shared reading is underestimated. A small group reading the same book creates conversation that deepens understanding far beyond what private reading alone produces. Book clubs, reading partners, and Sunday school classes that read together are some of the most effective formation environments." },
  { title: "Pray before reading theology", desc: "Reading about God is not the same as reading with God. The Puritans refused to read theology without first asking the Holy Spirit to illuminate their understanding. A brief prayer before opening a theological book — even a sentence — reorients the act from information acquisition to encounter. This changes what you receive from the same text." },
  { title: "Let great books beget greater reading", desc: "The best books point beyond themselves. Every time a book quotes another book appreciatively, follow the reference. Spurgeon's recommendation of the Puritans sent him deeper into Owen and Goodwin; Lewis's enthusiasm for MacDonald changed his life. The canon of great Christian reading is not a list to complete but a network to explore — every node leads to others." },
];

export default function ChristianBooksGuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>("books");
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedReader, setSelectedReader] = useState("edwards");

  const reader = READERS.find(r => r.id === selectedReader)!;
  const filtered = BOOKS.filter(b => {
    const matchCat = activeCategory === "All" || b.category === activeCategory;
    const matchSearch = !search || b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📚</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Essential Christian Books</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto 24px" }}>
            The books that have shaped Christianity's most faithful readers — curated by category, with real descriptions and where to get them. No filler, no paid placements.
          </p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "8px 14px", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: MUTED, fontSize: 14 }}>🔍</span>
            <input
              type="text"
              placeholder="Search by title or author..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ background: "transparent", border: "none", outline: "none", color: TEXT, fontSize: 14, width: 220 }}
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "books" as const, label: "Book Catalog", icon: "📚" },
            { id: "readers" as const, label: "Great Readers", icon: "💬" },
            { id: "plans" as const, label: "Reading Plans", icon: "📋" },
            { id: "tips" as const, label: "How to Read", icon: "🧠" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "books" && (<><div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${activeCategory === cat ? GREEN : BORDER}`, background: activeCategory === cat ? `${GREEN}15` : "transparent", color: activeCategory === cat ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 60, color: MUTED }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>📖</div>
            <p>No books match your search.</p>
            <button onClick={() => { setActiveCategory("All"); setSearch(""); }} style={{ color: GREEN, background: "none", border: "none", cursor: "pointer", marginTop: 8 }}>Clear filters</button>
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {filtered.map((b, i) => {
            const open = expanded === b.title;
            return (
              <div key={i} style={{ background: CARD, border: `1px solid ${open ? b.color + "40" : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <button
                  onClick={() => setExpanded(open ? null : b.title)}
                  style={{ width: "100%", background: "transparent", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", alignItems: "center", gap: 14, textAlign: "left" }}>
                  <div style={{ width: 48, height: 60, borderRadius: 6, background: `${b.color}25`, border: `1px solid ${b.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 10, fontWeight: 900, color: b.color }}>
                    {b.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 2 }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{b.title}</span>
                      <span style={{ background: `${b.color}15`, color: b.color, padding: "1px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{b.category}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 13 }}>{b.author} · {b.year}</div>
                    <div style={{ display: "flex", gap: 2, marginTop: 4 }}>
                      {Array.from({ length: b.rating }).map((_, j) => (
                        <span key={j} style={{ color: "#F59E0B", fontSize: 12 }}>★</span>
                      ))}
                    </div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{open ? "−" : "+"}</span>
                </button>
                {open && (
                  <div style={{ padding: "0 22px 22px" }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{b.desc}</p>
                    <a href={b.buy} target="_blank" rel="noopener noreferrer"
                      style={{ background: `${b.color}12`, border: `1px solid ${b.color}25`, color: b.color, padding: "9px 18px", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                      📦 Find This Book
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 36, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, textAlign: "center" }}>
          <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
            Most of these books are available free or very cheaply — Desiring God offers all John Piper books free as PDF downloads. Brother Lawrence, A.W. Tozer, and other older works are often available free through Project Gutenberg or Christian Classics Ethereal Library (ccel.org).
          </p>
        </div></>)}

        {activeTab === "readers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {READERS.map(r => (
                <button key={r.id} onClick={() => setSelectedReader(r.id)}
                  style={{ background: selectedReader === r.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedReader === r.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 13 }}>{r.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{r.era}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{r.context}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: TEXT, fontWeight: 900, fontSize: 20, marginBottom: 4 }}>{reader.name}</div>
                  <div style={{ color: MUTED, fontSize: 13 }}>{reader.era} &middot; {reader.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{reader.bio}</p>
                <div style={{ background: BG, border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: 20, marginBottom: 20 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>ON READING</div>
                  <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{reader.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 20 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{reader.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "plans" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {READING_PLANS.map(plan => (
              <div key={plan.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: GREEN, fontWeight: 900, fontSize: 18, marginBottom: 4 }}>{plan.name}</div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>{plan.desc}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {plan.books.map((b, i) => (
                    <div key={i} style={{ display: "flex", gap: 14, background: BG, borderRadius: 10, padding: 16 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 6, background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 900, fontSize: 13, flexShrink: 0 }}>{i + 1}</div>
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{b.title} <span style={{ color: MUTED, fontWeight: 400 }}>— {b.author}</span></div>
                        <div style={{ color: MUTED, fontSize: 13, marginTop: 3 }}>{b.why}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "tips" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {READING_TIPS.map((tip, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: `${GREEN}20`, border: `1px solid ${GREEN}40`, display: "flex", alignItems: "center", justifyContent: "center", color: GREEN, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 16 }}>{tip.title}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Recommendations, reviews, and teachings on the most important books for Christian growth — from classics to modern theology.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "TfdBujxKuqY", title: "The 5 Most Profound C.S. Lewis Books Every Christian Should Read", channel: "Christian Books", description: "A guide to the most formative C.S. Lewis books — from Mere Christianity to The Problem of Pain — and why every Christian should read them." },
                  { videoId: "Cct9oRGBK3g", title: "My 7 Most-Recommended Books on Theology", channel: "Theology Reading Guide", description: "Seven essential theology books recommended for Christians who want to go deeper — from foundational works to more advanced systematic theology." },
                  { videoId: "3MniW8a9Elk", title: "These 10 Books Influenced My Theology the Most", channel: "Theological Formation", description: "A pastor and scholar shares the ten books that most shaped his understanding of Scripture, God, and the Christian life — with explanations of why." },
                  { videoId: "mEpk1U-Uyk4", title: "Best John Piper Books for Beginners", channel: "Ask Pastor John / Desiring God", description: "Piper's own recommendations for where to start reading his work — which books have most shaped the people who read them, and in what order." },
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
    </div>
  );
}
