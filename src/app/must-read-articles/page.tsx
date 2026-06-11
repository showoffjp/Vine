"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";


const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "articles" | "topics" | "writers" | "journal" | "videos";

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

const ARTICLE_TOPICS = [
  {
    id: "suffering",
    topic: "Suffering & Faith",
    icon: "💙",
    description: "Why does God allow pain? These articles wrestle honestly with the hardest question in theology — and refuse easy answers.",
    articles: [
      { title: "Don't Waste Your Cancer", author: "John Piper & David Taylor", publication: "Desiring God" },
      { title: "When I Don't Desire God", author: "John Piper", publication: "Desiring God" },
      { title: "The Mystery of God", author: "Timothy Keller", publication: "Redeemer Report" },
    ],
  },
  {
    id: "marriage",
    topic: "Marriage & Singleness",
    icon: "❤️",
    description: "Whether married or single, these articles reframe what the Bible actually says about covenant, longing, and the gift of the present season.",
    articles: [
      { title: "The Ring Makes All the Difference", author: "Scott Stanley", publication: "Christianity Today" },
      { title: "Singleness Is Not a Problem to Solve", author: "Voddie Baucham", publication: "The Gospel Coalition" },
      { title: "The Meaning of Marriage", author: "Timothy Keller", publication: "First Things" },
    ],
  },
  {
    id: "race",
    topic: "Race & Justice",
    icon: "✊",
    description: "Key essays and chapters on racial reconciliation, the history of the American church, and what the gospel demands of Christians today.",
    articles: [
      { title: "Bloodlines", author: "John Piper", publication: "Desiring God" },
      { title: "Be the Bridge", author: "Latasha Morrison", publication: "Be the Bridge" },
      { title: "The Color of Compromise", author: "Jemar Tisby", publication: "Zondervan" },
    ],
  },
  {
    id: "culture",
    topic: "Cultural Engagement",
    icon: "🌍",
    description: "How should Christians engage, resist, or transform culture? These thinkers span a century and reach very different conclusions.",
    articles: [
      { title: "Christ and Culture", author: "H. Richard Niebuhr", publication: "Harper & Row" },
      { title: "Faithful Presence", author: "James Davison Hunter", publication: "Oxford University Press" },
      { title: "The Benedict Option", author: "Rod Dreher", publication: "First Things" },
    ],
  },
  {
    id: "gospel",
    topic: "The Gospel",
    icon: "✝️",
    description: "The center of everything. These pieces define, defend, and celebrate the announcement that changes everything.",
    articles: [
      { title: "What Is the Gospel?", author: "Kevin DeYoung", publication: "The Gospel Coalition" },
      { title: "The King's Cross", author: "Timothy Keller", publication: "Dutton" },
      { title: "Simply Good News", author: "N.T. Wright", publication: "HarperOne" },
    ],
  },
  {
    id: "prayer",
    topic: "Prayer & Spiritual Life",
    icon: "🙏",
    description: "From medieval monasticism to modern Reformed spirituality, these works teach Christians how to actually pray.",
    articles: [
      { title: "When I Don't Desire God", author: "John Piper", publication: "Desiring God" },
      { title: "The Practice of the Presence of God", author: "Brother Lawrence", publication: "Revell" },
      { title: "A Praying Life", author: "Paul Miller", publication: "NavPress" },
    ],
  },
];

const ARTICLE_WRITERS = [
  {
    id: "lewis",
    name: "C.S. Lewis",
    era: "1898-1963",
    specialty: "Apologetics & Fiction",
    bio: "C.S. Lewis was an Oxford don, literary critic, and former atheist whose conversion to Christianity in 1931 produced some of the most enduring apologetic and imaginative Christian literature of the 20th century. His essays, collected in God in the Dock and other volumes, remain models of clarity, wit, and intellectual honesty.",
    quote: "I believe in Christianity as I believe that the Sun has risen — not only because I see it, but because by it I see everything else.",
    contribution: "Lewis demonstrated that Christian faith could be defended by a first-rate intellect without surrendering either rigor or imagination. His essays addressed everything from the problem of pain to the nature of miracles to the dangers of chronological snobbery.",
    publications: ["The Problem of Pain", "Mere Christianity", "The Screwtape Letters", "God in the Dock", "Surprised by Joy"],
  },
  {
    id: "chesterton",
    name: "G.K. Chesterton",
    era: "1874-1936",
    specialty: "Cultural Apologetics",
    bio: "Gilbert Keith Chesterton was an English journalist, novelist, and theologian whose prolific output — over 100 books, 4,000 essays, and thousands of poems — made him one of the most widely read Catholic intellectuals of the early 20th century. His argument style relied on paradox, humor, and the unexpected reversal.",
    quote: "The Christian ideal has not been tried and found wanting. It has been found difficult and left untried.",
    contribution: "Chesterton mastered the surprising argument — turning secular assumptions inside out to reveal the hidden logic of orthodoxy. His Orthodoxy remains one of the most entertaining defenses of classical Christianity ever written.",
    publications: ["Orthodoxy", "Heretics", "The Everlasting Man", "St. Francis of Assisi", "What's Wrong with the World"],
  },
  {
    id: "schaeffer",
    name: "Francis Schaeffer",
    era: "1912-1984",
    specialty: "Philosophy & Art",
    bio: "Francis Schaeffer founded L'Abri Fellowship in Switzerland in 1955 as a community where intellectuals, artists, and spiritual seekers could wrestle with Christianity in dialogue with philosophy, art, and culture. His writing diagnosed the consequences of secular humanism decades before most evangelicals recognized the shift.",
    quote: "Christianity is not a series of truths in the plural, but rather truth spelled with a capital T.",
    contribution: "Schaeffer gave evangelicals a philosophical vocabulary to engage secular thought, traced the roots of the modern crisis to the abandonment of a biblical worldview, and insisted that art and aesthetics were legitimate concerns for Christians.",
    publications: ["The God Who Is There", "Art and the Bible", "He Is There and He Is Not Silent", "How Should We Then Live?", "Escape from Reason"],
  },
  {
    id: "oconnor",
    name: "Flannery O'Connor",
    era: "1925-1964",
    specialty: "Fiction & Faith",
    bio: "Flannery O'Connor was a Southern Catholic fiction writer whose short stories and novels used grotesque characters, violence, and dark comedy to dramatize grace as a disruptive, often violent intrusion into ordinary human complacency. She wrote from Georgia while managing lupus, producing two novels and two story collections before her death at 39.",
    quote: "You shall know the truth and the truth shall make you odd.",
    contribution: "O'Connor's essays, collected in Mystery and Manners, articulate a theology of fiction that insists grace cannot be prettified or sentimentalized. Her stories show people being broken open by encounters with the holy that they neither expected nor wanted.",
    publications: ["Mystery and Manners", "Wise Blood", "A Good Man Is Hard to Find", "The Violent Bear It Away", "The Complete Stories"],
  },
  {
    id: "wright",
    name: "N.T. Wright",
    era: "b. 1948",
    specialty: "New Testament & Public Theology",
    bio: "N.T. Wright is a British New Testament scholar, Anglican bishop, and prolific author whose work has reshaped how scholars and laypeople understand the Jewish background of Jesus, Paul's theology of justification, and the meaning of the resurrection. His popular works translate decades of technical scholarship into accessible prose.",
    quote: "Jesus&rsquo;s resurrection is the beginning of God&rsquo;s new project, not to snatch people away from earth to heaven, but to colonize earth with the life of heaven.",
    contribution: "Wright recovered the Jewish rootedness of early Christianity, challenged both liberal dismissals and conservative reductions of the resurrection, and showed how the gospel has implications for justice, beauty, and the renewal of creation.",
    publications: ["Simply Christian", "Surprised by Hope", "The Day the Revolution Began", "Simply Good News", "Paul and the Faithfulness of God"],
  },
];

const ARTICLE_VIDEOS = [
  { id: "kfcVPh2VDhQ", title: "The Reason for God", speaker: "Tim Keller", venue: "Google Talks" },
  { id: "57LVVwba6_8", title: "Big Think Interview", speaker: "Tim Keller", venue: "Big Think" },
  { id: "mC-zw0zCCtg", title: "Supremacy of Christ and Truth", speaker: "Voddie Baucham", venue: "Conference" },
  { id: "3Dv4-n6OYGI", title: "The Holiness of God", speaker: "R.C. Sproul", venue: "Ligonier" },
  { id: "HGHqu9-DtXk", title: "Don't Waste Your Life", speaker: "John Piper", venue: "Passion" },
  { id: "E65KV3M8RZE", title: "How Great Is Our God", speaker: "Louie Giglio", venue: "Passion" },
];

export default function MustReadArticlesPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_must-read-articles_tab", "articles");
  const [category, setCategory] = usePersistedState("vine_must-read-articles_category", "All");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedWriter, setSelectedWriter] = useState<string | null>(null);

  const filtered = ARTICLES.filter(a => category === "All" || a.category === category);
  const article = ARTICLES.find(a => a.title === selected);
  const writer = ARTICLE_WRITERS.find(w => w.id === selectedWriter);

  const [mraEntries, setMraEntries] = useState<{ id: string; date: string; article: string; insight: string; applying: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_mra_entries") ?? "[]"); } catch { return []; }
  });
  const [mraForm, setMraForm] = useState({ article: "", insight: "", applying: "" });
  const [mraSaved, setMraSaved] = useState(false);
  useEffect(() => { try { localStorage.setItem("vine_mra_entries", JSON.stringify(mraEntries)); } catch {} }, [mraEntries]);
  const saveMraEntry = () => {
    if (!mraForm.article.trim()) return;
    setMraEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...mraForm }, ...prev]);
    setMraForm({ article: "", insight: "", applying: "" });
    setMraSaved(true); setTimeout(() => setMraSaved(false), 2000);
  };
  const deleteMraEntry = (id: string) => setMraEntries(prev => prev.filter(e => e.id !== id));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📰</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Must-Read Christian Articles</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The articles that have shaped conversations, changed minds, and helped Christians navigate faith. Curated from TGC, Desiring God, Christianity Today, and more &mdash; each one worth your time.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6, width: "fit-content" }}>
          {(["articles", "topics", "writers", "journal", "videos"] as const).map(t => (
            <button type="button" key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "articles" ? "Articles" : t === "topics" ? "Topics" : t === "writers" ? "Writers" : t === "journal" ? "My Journal" : "Videos"}
            </button>
          ))}
        </div>

        {/* Articles Tab */}
        {activeTab === "articles" && (
          <>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {CATEGORIES.map(c => (
                <button type="button" key={c} onClick={() => setCategory(c)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${category === c ? GREEN : BORDER}`, background: category === c ? `${GREEN}15` : "transparent", color: category === c ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {c}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: article ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((a, i) => (
                  <button type="button" key={i} onClick={() => setSelected(selected === a.title ? null : a.title)}
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
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{a.author} &middot; {a.outlet}</div>
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
                      <div style={{ color: MUTED, fontSize: 12 }}>{article.author} &middot; {article.outlet} &middot; {article.readTime}</div>
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
          </>
        )}

        {/* Topics Tab */}
        {activeTab === "topics" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
            {ARTICLE_TOPICS.map(topic => (
              <div key={topic.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{topic.icon}</div>
                <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 17, margin: "0 0 8px" }}>{topic.topic}</h3>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: "0 0 18px" }}>{topic.description}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {topic.articles.map((art, i) => (
                    <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 14px" }}>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 13, marginBottom: 3 }}>{art.title}</div>
                      <div style={{ color: MUTED, fontSize: 11 }}>{art.author} &middot; {art.publication}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Writers Tab */}
        {activeTab === "writers" && (
          <div style={{ display: "grid", gridTemplateColumns: writer ? "210px 1fr" : "1fr", gap: 20, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, position: writer ? "sticky" : "static", top: 100 }}>
              {ARTICLE_WRITERS.map(w => (
                <button type="button" key={w.id} onClick={() => setSelectedWriter(selectedWriter === w.id ? null : w.id)}
                  style={{ background: selectedWriter === w.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedWriter === w.id ? PURPLE + "60" : BORDER}`, borderRadius: 10, padding: "14px 16px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 800, fontSize: 14 }}>{w.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{w.era}</div>
                  <div style={{ color: selectedWriter === w.id ? PURPLE : MUTED, fontSize: 11, marginTop: 2, fontWeight: 600 }}>{w.specialty}</div>
                </button>
              ))}
            </div>

            {writer ? (
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 18 }}>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{writer.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{writer.era} &middot; {writer.specialty}</div>
                </div>

                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16, marginBottom: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>SIGNATURE QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>&ldquo;{writer.quote}&rdquo;</p>
                </div>

                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{writer.bio}</p>

                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14, marginBottom: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{writer.contribution}</p>
                </div>

                <div>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 10, marginBottom: 10 }}>KEY WORKS</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {writer.publications.map((pub, i) => (
                      <span key={i} style={{ background: BG, border: `1px solid ${BORDER}`, color: TEXT, padding: "5px 12px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{pub}</span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
                {ARTICLE_WRITERS.map(w => (
                  <button type="button" key={w.id} onClick={() => setSelectedWriter(w.id)}
                    style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, cursor: "pointer", textAlign: "left" }}>
                    <div style={{ color: PURPLE, fontWeight: 900, fontSize: 16, marginBottom: 4 }}>{w.name}</div>
                    <div style={{ color: MUTED, fontSize: 12, marginBottom: 10 }}>{w.era} &middot; {w.specialty}</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: "0 0 12px" }}>{w.bio.slice(0, 120)}...</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {w.publications.slice(0, 2).map((pub, i) => (
                        <span key={i} style={{ background: `${PURPLE}12`, color: PURPLE, padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600 }}>{pub}</span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Reading Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20 }}>Record articles you've read, what stood out, and how you're applying the insights.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                <input value={mraForm.article} onChange={e => setMraForm(f => ({ ...f, article: e.target.value }))}
                  placeholder="Which article did you read?" aria-label="Article"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                <textarea value={mraForm.insight} onChange={e => setMraForm(f => ({ ...f, insight: e.target.value }))}
                  placeholder="What insight or argument stood out?" aria-label="Insight"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, minHeight: 80, resize: "vertical", fontFamily: "inherit" }} />
                <input value={mraForm.applying} onChange={e => setMraForm(f => ({ ...f, applying: e.target.value }))}
                  placeholder="How are you applying this? (optional)" aria-label="Applying"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                <button type="button" onClick={saveMraEntry}
                  style={{ padding: "10px 20px", background: PURPLE, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", alignSelf: "flex-start" }}>
                  {mraSaved ? "Saved ✓" : "Save Entry"}
                </button>
              </div>
              {mraEntries.length === 0 && <p style={{ color: MUTED, fontSize: 14 }}>No entries yet. Record your first article reflection above.</p>}
              {mraEntries.map(e => (
                <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 16, marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                    <button type="button" onClick={() => deleteMraEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 14 }}>✕</button>
                  </div>
                  <p style={{ color: TEXT, fontWeight: 700, fontSize: 14, margin: "0 0 4px" }}>{e.article}</p>
                  {e.insight && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: "0 0 4px" }}>{e.insight}</p>}
                  {e.applying && <p style={{ color: GREEN, fontSize: 13, fontStyle: "italic", margin: 0 }}>→ {e.applying}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: 24 }}>
            {ARTICLE_VIDEOS.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.id} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <div style={{ color: TEXT, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                  <div style={{ color: MUTED, fontSize: 12 }}>{v.speaker} &middot; {v.venue}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
