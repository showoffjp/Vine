"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

export default function ChristianBooksGuidePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

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

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
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
        </div>
      </div>
    </div>
  );
}
