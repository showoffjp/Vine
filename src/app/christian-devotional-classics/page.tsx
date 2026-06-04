"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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
    author: "Thomas a Kempis",
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
    description: "Foster's landmark survey of the classical spiritual disciplines, organized into three categories: inward disciplines (meditation, prayer, fasting, study), outward disciplines (simplicity, solitude, submission, service), and corporate disciplines (confession, worship, guidance, celebration). Each chapter is practical and historically grounded, drawing on figures from Ignatius Loyola to Thomas a Kempis to George Fox. One of the most widely assigned books in Christian formation courses across denominations.",
    why: "The most accessible and comprehensive introduction to the spiritual disciplines available.",
    format: "230 pages",
    bestEdition: "HarperCollins 25th Anniversary Edition",
    url: "https://www.amazon.com/Celebration-Discipline-Path-Spiritual-Growth/dp/0060628391/",
    initials: "COD2",
    key_quote: "The desperate need today is not for a greater number of intelligent people, or gifted people, but for deep people.",
  },
];

const CDC_THEMES = [
  {
    id: 1,
    theme: "Union with God",
    icon: "✦",
    description: "The mystical tradition's central aim: the soul's progressive transformation into likeness with God, culminating in a union of wills. This is not absorption (the soul does not cease to be itself) but intimate participation in the divine life. Dionysius the Areopagite, Meister Eckhart, John of the Cross, and Julian of Norwich each describe the path — purgation, illumination, union — in their own idioms.",
    classic_examples: ["Dionysius, Mystical Theology", "Meister Eckhart, Sermons", "John of the Cross, Ascent of Mount Carmel", "Julian of Norwich, Revelations of Divine Love"],
  },
  {
    id: 2,
    theme: "The Dark Night of the Soul",
    icon: "◑",
    description: "John of the Cross's term for the experience of spiritual desolation — the withdrawal of sensory consolation and emotional comfort in prayer — that accompanies genuine growth toward God. The dark night is not a sign of divine abandonment but of divine purification: God is stripping the soul of its dependence on feelings and experiences so it can rest in pure faith. This theme recurs across devotional literature under many names: aridity, dryness, desolation, absence.",
    classic_examples: ["John of the Cross, Dark Night of the Soul", "John of the Cross, The Living Flame of Love", "Thomas Merton, Contemplative Prayer", "Henri Nouwen, The Inner Voice of Love"],
  },
  {
    id: 3,
    theme: "Lectio Divina",
    icon: "⊞",
    description: "The ancient practice of reading Scripture as a personal encounter with the living God — slowly, attentively, resting on words that seem to glow. The four movements (lectio: reading, meditatio: meditation, oratio: prayer, contemplatio: contemplation) were formalized by Guigo II the Carthusian in the 12th century but represent a practice going back to the desert fathers. Benedict's Rule made it central to monastic life.",
    classic_examples: ["Guigo II, The Ladder of Monks", "Benedict of Nursia, The Rule of Saint Benedict", "Thomas Merton, Opening the Bible", "Eugene Peterson, Eat This Book"],
  },
  {
    id: 4,
    theme: "Practicing the Presence",
    icon: "◎",
    description: "Brother Lawrence's insight that the presence of God is not confined to the chapel or to set times of prayer but is available continuously — in the kitchen, in the workshop, in the noise and interruption of ordinary life. The practice involves a habitual, gentle returning of attention to God throughout the day. This theme connects to the Desert Fathers' practice of unceasing prayer and to hesychasm in the Eastern tradition.",
    classic_examples: ["Brother Lawrence, Practice of the Presence of God", "Frank Laubach, Letters by a Modern Mystic", "Jean-Pierre de Caussade, Abandonment to Divine Providence", "Thomas Kelly, A Testament of Devotion"],
  },
  {
    id: 5,
    theme: "The Pilgrim's Journey",
    icon: "→",
    description: "The Christian life as a journey, pilgrimage, or progress — with real terrain, real obstacles, real companions, and a definite destination. Bunyan's Pilgrim's Progress is the masterwork of this genre, but the metaphor runs through Dante's Divine Comedy, Augustine's restless heart, and the medieval pilgrimage tradition. The journey motif insists that Christian life is dynamic — there is movement, struggle, setback, and arrival.",
    classic_examples: ["John Bunyan, The Pilgrim's Progress", "Dante Alighieri, The Divine Comedy", "C.S. Lewis, The Pilgrim's Regress", "Eugene Peterson, A Long Obedience in the Same Direction"],
  },
];

const CDC_READING_GUIDE = [
  {
    id: 1,
    level: "Beginner",
    title: "Starting the Inner Life",
    description: "Begin with books that are accessible, short, and immediately formative. These classics are written for ordinary Christians and require no theological training to benefit from. Read slowly — a chapter or section per day — and let the material shape your practice.",
    texts: [
      { title: "The Imitation of Christ", author: "Thomas a Kempis", why: "The most direct and challenging call to interior holiness ever written. Start with Book I." },
      { title: "My Utmost for His Highest", author: "Oswald Chambers", why: "Daily readings of bracing depth. Chambers assumes nothing and demands everything." },
      { title: "Confessions (Books 1-9)", author: "Augustine of Hippo", why: "Read the autobiography section first. Augustine's self-description will recognize your own experience." },
    ],
  },
  {
    id: 2,
    level: "Intermediate",
    title: "Deepening the Contemplative Life",
    description: "These classics require more patience and are best read with some prior formation. They assume you have begun a regular prayer life and are ready to go deeper into the nature of prayer, surrender, and union with God.",
    texts: [
      { title: "Interior Castle", author: "Teresa of Avila", why: "The most systematic map of the soul's progress toward God. Begin with the Third Mansion." },
      { title: "The Practice of the Presence of God", author: "Brother Lawrence", why: "The simplest and most practical mystical text. Read it first, then reread it slowly." },
      { title: "Spiritual Exercises (Annotation 18 Retreat)", author: "Ignatius of Loyola", why: "The most structured approach to discernment and surrender. Best done with a director." },
    ],
  },
  {
    id: 3,
    level: "Advanced",
    title: "The Apophatic and Mystical Tradition",
    description: "These texts are demanding and presuppose a mature prayer life. They describe stages of prayer and union that most readers will not have experienced — read them for orientation and aspiration rather than immediate application.",
    texts: [
      { title: "The Cloud of Unknowing", author: "Anonymous (14th c. English)", why: "The purest apophatic mysticism in English. Describes contemplative prayer that transcends concepts." },
      { title: "Dark Night of the Soul", author: "John of the Cross", why: "The definitive account of spiritual desolation as divine purification. Requires patience." },
      { title: "Mystical Theology", author: "Dionysius the Areopagite", why: "The fountainhead of the apophatic tradition. Short but dense — read with a commentary." },
    ],
  },
  {
    id: 4,
    level: "Reformation Track",
    title: "Protestant Devotional Classics",
    description: "The Reformers and their heirs produced a rich tradition of devotional literature that is less well known than the Catholic mystical tradition but equally profound. These texts combine theological rigor with warmth of personal piety.",
    texts: [
      { title: "A Treatise on Christian Liberty", author: "Martin Luther", why: "Luther's most devotional piece — on the freedom of the Christian from the law and for the neighbor." },
      { title: "The Institutes (Book III)", author: "John Calvin", why: "Calvin's account of faith, prayer, and union with Christ is often overlooked in debates about predestination." },
      { title: "The Pilgrim's Progress", author: "John Bunyan", why: "The Puritan imagination at its most creative and accurate about actual Christian experience." },
    ],
  },
  {
    id: 5,
    level: "Anglican Track",
    title: "Anglican Devotional Heritage",
    description: "The Anglican tradition produced a distinctive spirituality combining liturgical structure, patristic learning, and warm personal piety. These texts draw on the best of Catholic and Reformed devotional traditions.",
    texts: [
      { title: "Holy Living and Holy Dying", author: "Jeremy Taylor", why: "The most thorough guide to the sanctification of daily life produced in the English tradition." },
      { title: "The Book of Common Prayer (1662)", author: "Thomas Cranmer et al.", why: "Read devotionally, not just liturgically — the collects are among the finest prayers in English." },
      { title: "The Practice of the Presence of God", author: "Brother Lawrence", why: "Beloved across traditions including Anglican — short, universal, and immediately useful." },
    ],
  },
];

const VOICES_CDC = [
  {
    id: 1,
    name: "Thomas a Kempis",
    era: "Medieval (1380-1471)",
    context: "Augustinian canon, Deventer, Netherlands",
    bio: "Thomas Hemerken was born near Cologne and spent nearly his entire life in the monastery of Mount St. Agnes near Zwolle. He was part of the Devotio Moderna movement — a renewal of practical, interior piety in reaction to scholastic excess. He copied manuscripts, directed novices, and wrote or compiled the Imitation of Christ, probably before 1427. He lived to the age of ninety-one, writing almost nothing else that has survived.",
    quote: "What doth it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility, and be thus displeasing to the Trinity?",
    contribution: "The Imitation of Christ is the most-read Christian book outside the Bible. Its achievement is to make the interior life feel urgent, possible, and demanding simultaneously.",
  },
  {
    id: 2,
    name: "Julian of Norwich",
    era: "Medieval (c. 1342 – c. 1416)",
    context: "Anchoress, Norwich, England",
    bio: "Julian received sixteen 'showings' or revelations while gravely ill in May 1373. She spent the next twenty years in a cell attached to St. Julian's Church in Norwich, meditating on their meaning. The resulting Revelations of Divine Love (long text) is the first book in English known to have been written by a woman. She is famous for her confident theological vision of divine love: 'All shall be well, and all shall be well, and all manner of thing shall be well.'",
    quote: "All shall be well, and all shall be well, and all manner of thing shall be well.",
    contribution: "The deepest English-language meditation on divine love, theodicy, and the meaning of Christ's passion. Her theology of the motherhood of God and her confidence in ultimate redemption are extraordinary.",
  },
  {
    id: 3,
    name: "Thomas Merton",
    era: "Modern (1915-1968)",
    context: "Trappist monk, Gethsemani, Kentucky",
    bio: "A Columbia-educated literary intellectual and former Communist sympathizer, Merton converted to Catholicism in 1938 and entered the Trappist monastery of Our Lady of Gethsemani in 1941. His autobiography The Seven Storey Mountain (1948) became an unexpected bestseller and launched a decades-long writing career on contemplative prayer, social justice, and interreligious dialogue. He died accidentally in Bangkok while attending a conference on Eastern and Western monasticism.",
    quote: "We are not at peace with others because we are not at peace with ourselves, and we are not at peace with ourselves because we are not at peace with God.",
    contribution: "The most important figure in the 20th-century recovery of contemplative Christianity for ordinary people. His work on prayer, solitude, and the social dimensions of the interior life remains without peer.",
  },
  {
    id: 4,
    name: "Oswald Chambers",
    era: "Early Modern (1874-1917)",
    context: "Scottish evangelist and teacher; YMCA chaplain, Egypt",
    bio: "Born in Aberdeen, Chambers was converted under Spurgeon's preaching and later experienced a second crisis of entire sanctification. He founded the Bible Training College in London, then went to Egypt as a YMCA chaplain to WWI troops, where he died of appendicitis at forty-three. My Utmost for His Highest was compiled posthumously by his wife Gertrude from stenographic notes of his talks, and was first published in 1927. It has never gone out of print.",
    quote: "The destined end of man is not happiness, nor health, but holiness.",
    contribution: "My Utmost for His Highest is the most widely read Protestant devotional of the 20th century — combining the Wesleyan-Holiness tradition with extraordinary psychological penetration and theological seriousness.",
  },
  {
    id: 5,
    name: "A.W. Tozer",
    era: "Modern (1897-1963)",
    context: "Christian & Missionary Alliance pastor, Chicago and Toronto",
    bio: "Aiden Wilson Tozer was largely self-educated — he never attended college or seminary but read voraciously in mystical and classical Christian literature. His two most influential books, The Pursuit of God (1948) and The Knowledge of the Holy (1961), argued that the deepest problem in American evangelicalism was a deficient doctrine of God — a God too small, too comfortable, too familiar. He was known for his prophetic voice against superficial Christianity.",
    quote: "What comes into our minds when we think about God is the most important thing about us.",
    contribution: "Tozer recovered the classical Christian vision of the majesty and transcendence of God for 20th-century evangelicalism. The Pursuit of God and Knowledge of the Holy remain the most accessible devotional theology available.",
  },
];

type Tab = "classics" | "themes" | "reading-guide" | "voices" | "videos";

export default function ChristianDevotionalClassicsPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_christian-devotional-classics_tab", "classics");
  const [era, setEra] = usePersistedState<string>("vine_christian-devotional-classics_era", "All");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<number>(VOICES_CDC[0].id);

  const filtered = CLASSICS.filter(c => era === "All" || c.era === era);
  const book = CLASSICS.find(c => c.title === selected);
  const voice = VOICES_CDC.find(v => v.id === selectedVoice) ?? VOICES_CDC[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📜</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Devotional Classics</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The books that have formed Christian souls across centuries &mdash; from Augustine&rsquo;s restless heart to Bonhoeffer&rsquo;s costly grace. These are the indispensable texts of the Christian inner life.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6, marginBottom: 32, width: "fit-content" }}>
          {(["classics", "themes", "reading-guide", "voices", "videos"] as const).map(t => (
            <button type="button" key={t} onClick={() => setActiveTab(t)}
              style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "classics" ? "Classics" : t === "themes" ? "Themes" : t === "reading-guide" ? "Reading Guide" : t === "voices" ? "Voices" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {activeTab === "classics" && (
          <>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {ERAS.map(e => (
                <button type="button" key={e} onClick={() => setEra(e)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${era === e ? GREEN : BORDER}`, background: era === e ? `${GREEN}15` : "transparent", color: era === e ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {e}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: book ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((c, i) => (
                  <button type="button" key={i} onClick={() => setSelected(selected === c.title ? null : c.title)}
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
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{c.author} &middot; {c.year}</div>
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
                      <div style={{ color: MUTED, fontSize: 12 }}>{book.author} &middot; {book.year} &middot; {book.format}</div>
                    </div>
                  </div>

                  <div style={{ background: `${book.color}08`, border: `1px solid ${book.color}20`, borderRadius: 10, padding: 14, marginBottom: 16 }}>
                    <div style={{ color: book.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY QUOTE</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{book.key_quote}&rdquo;</p>
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
          </>
        )}

        {activeTab === "themes" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CDC_THEMES.map(th => (
              <div key={th.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 900, fontSize: 20, flexShrink: 0 }}>
                    {th.icon}
                  </div>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 18, margin: 0 }}>{th.theme}</h2>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{th.description}</p>
                <div>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>CLASSIC EXAMPLES</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {th.classic_examples.map((ex, i) => (
                      <span key={i} style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}20`, color: TEXT, padding: "4px 12px", borderRadius: 20, fontSize: 12 }}>{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "reading-guide" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {CDC_READING_GUIDE.map(rg => (
              <div key={rg.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ background: PURPLE, color: "#fff", padding: "4px 14px", borderRadius: 20, fontWeight: 800, fontSize: 12 }}>{rg.level}</span>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 17, margin: 0 }}>{rg.title}</h2>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>{rg.description}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {rg.texts.map((tx, i) => (
                    <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 18px" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
                        <span style={{ color: TEXT, fontWeight: 800, fontSize: 14 }}>{tx.title}</span>
                        <span style={{ color: MUTED, fontSize: 12 }}>{tx.author}</span>
                      </div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{tx.why}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 20, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 100 }}>
              {VOICES_CDC.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE + "60" : BORDER}`, borderRadius: 10, padding: "14px 16px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 800, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 3 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{voice.name}</h2>
              <div style={{ color: MUTED, fontSize: 13, marginBottom: 6 }}>{voice.era}</div>
              <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, marginBottom: 16 }}>{voice.context}</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 18 }}>{voice.bio}</p>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16, marginBottom: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 8 }}>SIGNATURE QUOTE</div>
                <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{voice.quote}&rdquo;</p>
              </div>
              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{voice.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Lectures and teachings on the great devotional classics — Augustine, Thomas à Kempis, and the spiritual formation tradition.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "aqh5JgFOFqY", title: "Thomas à Kempis: Lessons on Devotion and Spiritual Growth", channel: "Spiritual Formation", description: "An introduction to Thomas à Kempis's life and the enduring lessons of 'The Imitation of Christ' — the most-read Christian book after the Bible." },
                  { videoId: "5mZpN90XMew", title: "The Imitation of Christ by Thomas à Kempis — Summary & Review", channel: "Christian Classics Review", description: "A summary and review of 'The Imitation of Christ,' exploring why this 15th-century devotional has shaped more Christians than almost any other book." },
                  { videoId: "WhMFn8syhCE", title: "Thomas à Kempis: The Imitation of Christ", channel: "Harvard Classics Lecture Series", description: "A scholarly lecture on 'The Imitation of Christ' from the Harvard Classics series — placing it in historical and literary context." },
                  { videoId: "7z2MiXsR3L0", title: "Thomas à Kempis: The Monk Who Wrote The Imitation of Christ", channel: "Christian Author Series", description: "A biographical and theological portrait of Thomas à Kempis — who he was, why he wrote, and how his words have endured for 600 years." },
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
      </main>
      <Footer />
    </div>
  );
}
