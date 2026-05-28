"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const CATEGORIES = ["All", "Gospel", "Suffering", "Prayer", "Church", "Culture", "Marriage", "Missions", "Doubt"];

const ARTICLES = [
  {
    title: "What Is the Gospel?",
    author: "Greg Gilbert",
    outlet: "The Gospel Coalition",
    category: "Gospel",
    color: GREEN,
    summary: "A clear, thorough answer to the question that should define the entire Christian life. Gilbert works through the four elements Paul identifies in 1 Corinthians 15:3-4 — Christ died, for our sins, according to the Scriptures, was buried, rose again — and unpacks why each word matters. Essential reading for every Christian who wants to be able to explain what they believe and why.",
    why: "Best single-article summary of the gospel available for free online. Readable in 15 minutes.",
    url: "https://www.thegospelcoalition.org/article/what-is-the-gospel/",
    readTime: "15 min",
    initials: "WIG",
  },
  {
    title: "Don't Waste Your Cancer",
    author: "John Piper & David Mathis",
    outlet: "Desiring God",
    category: "Suffering",
    color: "#EF4444",
    summary: "Written after Piper was diagnosed with prostate cancer, this article argues that cancer — and any terminal diagnosis — can be wasted or redeemed. Wasted if it leads to bitterness, fear, or shallow comfort. Redeemed if it deepens dependence on God, loosens attachment to the world, and sharpens focus on what truly matters. Ten numbered ways not to waste your cancer, each grounded in Scripture.",
    why: "Required reading for anyone walking through illness or caring for someone who is.",
    url: "https://www.desiringgod.org/articles/dont-waste-your-cancer",
    readTime: "20 min",
    initials: "DWC",
  },
  {
    title: "The Danger of the Approval Addiction",
    author: "Paul Tripp",
    outlet: "Paul Tripp Ministries",
    category: "Gospel",
    color: PURPLE,
    summary: "Tripp identifies one of the most pervasive idols in contemporary Christian life: the craving for approval, validation, and acceptance from others. He traces it to a failure to internalize the gospel — the truth that our identity is already secured in Christ and cannot be added to or subtracted from by human opinion. The article is brutally diagnostic and genuinely liberating.",
    why: "Tripp writes with unusual psychological and theological precision about the inner life.",
    url: "https://www.paultripp.com/articles/posts/the-danger-of-the-approval-addiction",
    readTime: "18 min",
    initials: "DAA",
  },
  {
    title: "How to Pray When You Don't Feel Like It",
    author: "Don Whitney",
    outlet: "The Gospel Coalition",
    category: "Prayer",
    color: "#F59E0B",
    summary: "Whitney's most-read article. He describes the universal Christian experience of prayerlessness — not unbelief, but the gap between knowing you should pray and actually doing it. He offers one concrete solution: praying through Scripture, specifically through the Psalms, letting the text provide both the words and the direction when our own words fail us. A small idea with massive practical impact.",
    why: "One of the most practically useful articles in Christian spiritual formation literature.",
    url: "https://www.thegospelcoalition.org/article/how-to-pray-through-the-bible/",
    readTime: "12 min",
    initials: "HPW",
  },
  {
    title: "Is God Disappointed in You?",
    author: "Jared Wilson",
    outlet: "The Gospel Coalition",
    category: "Gospel",
    color: GREEN,
    summary: "Wilson addresses the pervasive feeling among Christians that God is constantly disappointed in them — that he tolerates them but secretly wishes they were better. Wilson dismantles this view from Scripture, arguing that in Christ there is no condemnation (Romans 8:1), no frowning Father, no reluctant acceptance. The joy God has in his adopted children is not performance-conditional. For many readers, this article has been genuinely transformative.",
    why: "Addresses the most common distortion of the gospel in practice.",
    url: "https://www.thegospelcoalition.org/article/is-god-disappointed-in-you/",
    readTime: "10 min",
    initials: "IGD",
  },
  {
    title: "Lessons from an Ordinary Marriage",
    author: "Tim Keller",
    outlet: "New York Times",
    category: "Marriage",
    color: "#EC4899",
    summary: "Written shortly before his death in 2023, Keller reflects on 50 years of marriage to Kathy Keller. He argues that marriage is not primarily about happiness but about the kind of cruciform self-giving that sanctifies both partners. The article is tender, honest about difficulty, and theologically rich — a capstone reflection from one of the great pastoral voices of the 20th and 21st centuries.",
    why: "One of Keller's final written pieces. Beautifully integrates personal testimony with theological reflection.",
    url: "https://www.nytimes.com/2023/02/14/opinion/tim-keller-marriage.html",
    readTime: "15 min",
    initials: "LOM",
  },
  {
    title: "The Holes in Our Holiness",
    author: "Kevin DeYoung",
    outlet: "The Gospel Coalition",
    category: "Gospel",
    color: "#3B82F6",
    summary: "DeYoung argues that the contemporary evangelical church has neglected personal holiness — not in favor of grace, but instead of grace. He identifies the assumption that a focus on justification means ignoring sanctification, and dismantles it from Paul's own letters. Justified people are called to pursue holiness, and the neglect of that calling is a real pastoral problem that DeYoung names directly.",
    why: "A needed corrective to antinomian tendencies in Reformed evangelical culture.",
    url: "https://www.thegospelcoalition.org/article/the-holes-in-our-holiness/",
    readTime: "20 min",
    initials: "HOH",
  },
  {
    title: "How to Be Present in the Age of Distraction",
    author: "Tony Reinke",
    outlet: "Desiring God",
    category: "Culture",
    color: "#10B981",
    summary: "Reinke's diagnostic article on the smartphone era's assault on Christian attention and presence. Drawing on Cal Newport and biblical anthropology, he argues that fragmented attention is a spiritual problem, not merely a productivity problem. The practices he recommends — device sabbath, single-tasking, embodied presence — are grounded in a theology of attention as an act of love and worship.",
    why: "The most theologically grounded treatment of digital distraction available.",
    url: "https://www.desiringgod.org/articles/how-to-be-present-in-an-age-of-distraction",
    readTime: "18 min",
    initials: "HAP",
  },
  {
    title: "Why Doubt Is Not the Opposite of Faith",
    author: "Alister McGrath",
    outlet: "Christianity Today",
    category: "Doubt",
    color: "#A855F7",
    summary: "Oxford theologian Alister McGrath argues that doubt is not the enemy of faith but one of its normal companions. Faith is trust, not certainty — and therefore doubt (intellectual uncertainty) is compatible with genuine faith. McGrath dismantles both the naive view that real Christians never doubt and the cynical view that doubt means faith is false. He offers a mature, historically grounded account of faith that is honest about uncertainty.",
    why: "Essential reading for Christians in seasons of doubt or for those walking with doubters.",
    url: "https://www.christianitytoday.com/ct/faith/why-doubt-not-opposite-of-faith.html",
    readTime: "12 min",
    initials: "WDN",
  },
  {
    title: "What Does It Mean to Be the Church?",
    author: "Jonathan Leeman",
    outlet: "9Marks",
    category: "Church",
    color: PURPLE,
    summary: "Leeman, editorial director at 9Marks, provides one of the most rigorous arguments for why the local church matters — against the cultural drift toward decentralized, individualized Christianity. He grounds church membership in the gospel's logic: if Christ unites people to himself, he unites them to each other, and that union must be locally expressed and accountable. Churches are not optional services; they are the embassies of the kingdom.",
    why: "The best ecclesiology argument available in short article form.",
    url: "https://www.9marks.org/article/what-does-it-mean-to-be-a-church/",
    readTime: "25 min",
    initials: "WDM",
  },
  {
    title: "The Nations Are Not Hopeless",
    author: "David Platt",
    outlet: "Radical",
    category: "Missions",
    color: "#F59E0B",
    summary: "Platt argues from Revelation 7:9 that the outcome of global missions is not in doubt — every people group will be represented before the throne. This is not a comforting excuse for inaction but the ground of perseverance: the harvest is certain, and our labor in it is not in vain. An essential corrective for missionary discouragement and the fatalism that can set in when progress seems slow.",
    why: "Best short piece on the theology of missions and perseverance.",
    url: "https://radical.net/article/the-nations-are-not-hopeless/",
    readTime: "15 min",
    initials: "NNH",
  },
  {
    title: "Dear Church, I'm Exhausted",
    author: "Tish Harrison Warren",
    outlet: "Christianity Today",
    category: "Church",
    color: "#00D4AA",
    summary: "Anglican priest Tish Harrison Warren writes about clergy burnout, congregational exhaustion, and the spiritual poverty of a performance-driven church culture. With unusual honesty about her own weariness, she argues for the recovery of liturgy, Sabbath, and embodied practice as the structural antidotes to ministry exhaustion. One of the most widely shared articles about church health in recent years.",
    why: "Honest, tender, and practically wise about the rhythms of sustainable Christian ministry and life.",
    url: "https://www.christianitytoday.com/ct/2021/dear-church-exhausted-liturgy.html",
    readTime: "15 min",
    initials: "DCE",
  },
];

export default function MustReadArticlesPage() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = ARTICLES.filter(a => category === "All" || a.category === category);
  const article = ARTICLES.find(a => a.title === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📰</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Must-Read Christian Articles</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The articles that have shaped conversations, changed minds, and helped Christians navigate faith. Curated from TGC, Desiring God, Christianity Today, and more — each one worth your time.
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

        <div style={{ display: "grid", gridTemplateColumns: article ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((a, i) => (
              <button key={i} onClick={() => setSelected(selected === a.title ? null : a.title)}
                style={{ background: selected === a.title ? `${a.color}12` : CARD, border: `1px solid ${selected === a.title ? a.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${a.color}20`, border: `1px solid ${a.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: a.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                    {a.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{a.title}</span>
                      <span style={{ background: `${a.color}15`, color: a.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{a.category}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{a.author} · {a.outlet}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 11, flexShrink: 0 }}>{a.readTime}</span>
                </div>
              </button>
            ))}
          </div>

          {article && (
            <div style={{ background: CARD, border: `1px solid ${article.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: `${article.color}20`, border: `1px solid ${article.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: article.color, fontWeight: 900, fontSize: 12, flexShrink: 0 }}>
                  {article.initials}
                </div>
                <div>
                  <h2 style={{ color: article.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{article.title}</h2>
                  <div style={{ color: MUTED, fontSize: 12 }}>{article.author} · {article.outlet} · {article.readTime}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                <span style={{ background: `${article.color}12`, color: article.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{article.category}</span>
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{article.summary}</p>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginBottom: 16 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY READ THIS</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{article.why}</p>
              </div>

              <a href={article.url} target="_blank" rel="noopener noreferrer"
                style={{ background: `${article.color}15`, border: `1px solid ${article.color}30`, color: article.color, padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                📖 Read Full Article
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
