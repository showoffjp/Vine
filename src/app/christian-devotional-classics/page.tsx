"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const ERAS = ["All", "Ancient", "Medieval", "Reformation", "18th-19th C", "Modern"];

const CLASSICS = [
  {
    title: "Confessions",
    author: "Augustine of Hippo",
    year: "397-400 AD",
    era: "Ancient",
    color: "#F59E0B",
    description: "The most influential spiritual autobiography in history. Augustine traces his restless pursuit of truth and pleasure through Manichaeism, Neo-Platonism, and rhetoric before his dramatic conversion in a Milan garden ('Take up and read'). The opening line — 'You have made us for yourself, O Lord, and our heart is restless until it rests in you' — has never been surpassed as a summary of the human condition. Books 1-9 are autobiography; Books 10-13 are theological meditation on memory, time, and Genesis.",
    why: "Required reading for anyone serious about Christian spirituality. Augustine describes your life — the restlessness, the delay, the unexpected conversion.",
    format: "400 pages (13 books)",
    bestEdition: "Chadwick translation (Oxford World Classics) or Boulding translation (New City Press)",
    url: "https://www.amazon.com/Confessions-Oxford-Worlds-Classics-Augustine/dp/0199537828/",
    initials: "CON",
    key_quote: "You have made us for yourself, O Lord, and our heart is restless until it rests in you.",
  },
  {
    title: "The Imitation of Christ",
    author: "Thomas à Kempis",
    year: "c. 1418-1427",
    era: "Medieval",
    color: PURPLE,
    description: "The most widely read Christian book outside the Bible. Written by a German-Dutch monk, it is organized into four books addressing the interior life, interior consolation, inward conversation with Christ, and the sacrament. Its characteristic mode is direct, unsparing challenge: 'What doth it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility?' It is deliberately anti-intellectual in emphasis — not because thinking is wrong but because self-knowledge and holiness are neglected in favor of scholarly reputation.",
    why: "Cuts through self-deception with extraordinary efficiency. Best read a few paragraphs at a time, slowly.",
    format: "200 pages (4 books)",
    bestEdition: "Leo Sherley-Price translation (Penguin Classics)",
    url: "https://www.amazon.com/Imitation-Christ-Penguin-Classics-Thomas/dp/0140441425/",
    initials: "IOC",
    key_quote: "What doth it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility?",
  },
  {
    title: "The Practice of the Presence of God",
    author: "Brother Lawrence",
    year: "1692",
    era: "Reformation",
    color: GREEN,
    description: "A collection of letters and conversations from a 17th-century French Carmelite lay brother who worked in the kitchen of his monastery. Brother Lawrence describes the simple spiritual practice of continuously turning the attention toward God — not only in formal prayer but in washing dishes, cooking, and everyday tasks. The book is short (under 100 pages) but has proved life-changing for millions of Christians across traditions who feel their spiritual life is confined to set-aside times and places.",
    why: "The most accessible guide to continuous prayer and the sanctification of ordinary work. Read it in an afternoon.",
    format: "Under 100 pages",
    bestEdition: "Translated by Robert J. Edmonson (Paraclete Press) or any free public domain edition",
    url: "https://www.amazon.com/Practice-Presence-God-Brother-Lawrence/dp/1557487731/",
    initials: "PPG",
    key_quote: "We should establish ourselves in a sense of God's Presence, by continually conversing with Him.",
  },
  {
    title: "The Pilgrim's Progress",
    author: "John Bunyan",
    year: "1678",
    era: "Reformation",
    color: "#3B82F6",
    description: "The most famous allegory in Christian literature, written by a tinker imprisoned for preaching without a license. Christian flees the City of Destruction, passes through the Slough of Despond, climbs the Hill of Difficulty, is imprisoned in Doubting Castle by Giant Despair, and finally reaches the Celestial City. The characters (Mr. Worldly Wiseman, Faithful, Hopeful, Talkative, Ignorance) are drawn with penetrating psychological accuracy. No allegory better maps the actual terrain of the Christian life — including its discouragements, detours, and companions.",
    why: "The essential map of the Christian life. More psychologically accurate than most contemporary discipleship literature.",
    format: "300 pages",
    bestEdition: "Any unabridged edition; C.J. Lovik's illustrated edition for accessibility",
    url: "https://www.amazon.com/Pilgrims-Progress-John-Bunyan/dp/0802456731/",
    initials: "PPR",
    key_quote: "As I walked through the wilderness of this world, I lighted on a certain place where was a Den, and I laid me down in that place to sleep; and as I slept I dreamed a dream.",
  },
  {
    title: "Knowing God",
    author: "J.I. Packer",
    year: "1973",
    era: "Modern",
    color: "#10B981",
    description: "Packer's masterwork, shaped by decades of pastoral and theological reflection. The opening chapters argue that the difference between knowing about God (theology) and knowing God (relationship) is the most important distinction in Christian life — and that Western Christianity in particular has elevated the former at the expense of the latter. The remaining chapters unfold the divine attributes — God's wisdom, power, love, holiness, wrath — in a way that is intended not to inform but to transform. Consistently voted among the most influential Christian books of the 20th century.",
    why: "The single best modern treatment of the doctrine of God as a devotional and formative book. First two chapters are essential.",
    format: "250 pages",
    bestEdition: "InterVarsity Press 20th Anniversary Edition",
    url: "https://www.amazon.com/Knowing-God-J-I-Packer/dp/0830816887/",
    initials: "KG",
    key_quote: "One can know a great deal about God without much knowledge of him.",
  },
  {
    title: "Mere Christianity",
    author: "C.S. Lewis",
    year: "1952",
    era: "Modern",
    color: "#EC4899",
    description: "Originally a series of BBC radio broadcasts during World War II, Mere Christianity presents a defense and summary of mere Christianity — the core doctrines shared by all major Christian traditions. Lewis begins with the moral argument for God's existence, moves to the person of Christ (the liar-lunatic-Lord trilemma), and concludes with an account of what Christian life actually looks like from the inside. The chapter 'The Great Sin' (on pride) is frequently cited as the most bracing moral analysis in modern apologetics literature.",
    why: "The single best entry point for intellectually curious non-Christians and for Christians who want to think more clearly about their faith.",
    format: "200 pages",
    bestEdition: "HarperCollins edition",
    url: "https://www.amazon.com/Mere-Christianity-C-S-Lewis/dp/0060652926/",
    initials: "MC",
    key_quote: "Pride is the complete anti-God state of mind.",
  },
  {
    title: "The Cost of Discipleship",
    author: "Dietrich Bonhoeffer",
    year: "1937",
    era: "Modern",
    color: "#EF4444",
    description: "Written as Hitler consolidated power in Germany, this is Bonhoeffer's polemic against 'cheap grace' — the forgiveness of sins without the demand for repentance, baptism without church discipline, absolution without confession. Costly grace, by contrast, confronts us with the call of Christ and compels us to follow. The second half is a verse-by-verse commentary on the Sermon on the Mount. The historical context — Bonhoeffer was leading an underground seminary for confessing church pastors — gives the book an existential urgency that no other discipleship text matches.",
    why: "The most important discipleship book of the 20th century. Will name your comfortable Christianity for what it is.",
    format: "300 pages",
    bestEdition: "Touchstone/Macmillan, translated by R. H. Fuller",
    url: "https://www.amazon.com/Cost-Discipleship-Dietrich-Bonhoeffer/dp/0684815001/",
    initials: "COD",
    key_quote: "Cheap grace is the preaching of forgiveness without requiring repentance.",
  },
  {
    title: "Dark Night of the Soul",
    author: "St. John of the Cross",
    year: "c. 1578",
    era: "Reformation",
    color: "#8B5CF6",
    description: "The 16th-century Spanish mystic's account of the purification of the soul through spiritual desolation. John describes two 'dark nights' — the night of the senses (the stripping of sensory and emotional consolation in prayer) and the night of the spirit (the deeper purification of the intellect and will). The book is addressed to those who have passed through early consolations in prayer and entered a period of aridity and absence where God seems distant. John argues this is not divine withdrawal but divine formation — purifying the soul from its attachments so it can receive deeper union.",
    why: "Essential for anyone who has experienced spiritual dryness and confusion after an earlier season of consolation.",
    format: "200 pages",
    bestEdition: "Translated by Mirabai Starr or Kavanaugh/Rodriguez (Institute of Carmelite Studies)",
    url: "https://www.amazon.com/Dark-Night-Soul-John-Cross/dp/0385014023/",
    initials: "DNS",
    key_quote: "The endurance of darkness is preparation for great light.",
  },
  {
    title: "The Spirit of the Disciplines",
    author: "Dallas Willard",
    year: "1988",
    era: "Modern",
    color: "#F59E0B",
    description: "Willard's argument that the disciplines of Christian life — solitude, fasting, silence, study, service, confession, worship — are not optional additions for serious Christians but the ordinary means by which the human will is transformed to align with Christ's. He argues from the premise that Jesus himself practiced these disciplines and that we cannot expect to live as Jesus lived without training as Jesus trained. A profound integration of theological vision and practical spirituality.",
    why: "The best integration of spiritual disciplines and theological rationale. Read with Celebration of Discipline (Foster).",
    format: "280 pages",
    bestEdition: "HarperCollins",
    url: "https://www.amazon.com/Spirit-Disciplines-Understanding-Transforms-Christian/dp/0060694424/",
    initials: "SOD",
    key_quote: "Grace is not opposed to effort, it is opposed to earning.",
  },
  {
    title: "Celebration of Discipline",
    author: "Richard Foster",
    year: "1978",
    era: "Modern",
    color: "#00D4AA",
    description: "Foster's landmark survey of the classical spiritual disciplines, organized into three categories: inward disciplines (meditation, prayer, fasting, study), outward disciplines (simplicity, solitude, submission, service), and corporate disciplines (confession, worship, guidance, celebration). Each chapter is practical and historically grounded, drawing on figures from Ignatius Loyola to Thomas à Kempis to George Fox. One of the most widely assigned books in Christian formation courses across denominations.",
    why: "The most accessible and comprehensive introduction to the spiritual disciplines available.",
    format: "230 pages",
    bestEdition: "HarperCollins 25th Anniversary Edition",
    url: "https://www.amazon.com/Celebration-Discipline-Path-Spiritual-Growth/dp/0060628391/",
    initials: "COD2",
    key_quote: "The desperate need today is not for a greater number of intelligent people, or gifted people, but for deep people.",
  },
];

export default function ChristianDevotionalClassicsPage() {
  const [era, setEra] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = CLASSICS.filter(c => era === "All" || c.era === era);
  const book = CLASSICS.find(c => c.title === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📜</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Devotional Classics</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The books that have formed Christian souls across centuries — from Augustine's restless heart to Bonhoeffer's costly grace. These are the indispensable texts of the Christian inner life.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {ERAS.map(e => (
            <button key={e} onClick={() => setEra(e)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${era === e ? GREEN : BORDER}`, background: era === e ? `${GREEN}15` : "transparent", color: era === e ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {e}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: book ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((c, i) => (
              <button key={i} onClick={() => setSelected(selected === c.title ? null : c.title)}
                style={{ background: selected === c.title ? `${c.color}12` : CARD, border: `1px solid ${selected === c.title ? c.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${c.color}20`, border: `1px solid ${c.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                    {c.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{c.title}</span>
                      <span style={{ background: `${c.color}15`, color: c.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{c.era}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{c.author} · {c.year}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 11, flexShrink: 0 }}>{c.format}</span>
                </div>
              </button>
            ))}
          </div>

          {book && (
            <div style={{ background: CARD, border: `1px solid ${book.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: `${book.color}20`, border: `1px solid ${book.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: book.color, fontWeight: 900, fontSize: 12, flexShrink: 0 }}>
                  {book.initials}
                </div>
                <div>
                  <h2 style={{ color: book.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{book.title}</h2>
                  <div style={{ color: MUTED, fontSize: 12 }}>{book.author} · {book.year} · {book.format}</div>
                </div>
              </div>

              <div style={{ background: `${book.color}08`, border: `1px solid ${book.color}20`, borderRadius: 10, padding: 14, marginBottom: 16 }}>
                <div style={{ color: book.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY QUOTE</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>"{book.key_quote}"</p>
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{book.description}</p>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginBottom: 14 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY READ THIS</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{book.why}</p>
              </div>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10, marginBottom: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>BEST EDITION</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{book.bestEdition}</p>
              </div>

              <a href={book.url} target="_blank" rel="noopener noreferrer"
                style={{ background: `${book.color}15`, border: `1px solid ${book.color}30`, color: book.color, padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                📚 Find on Amazon
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
