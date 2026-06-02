"use client";

import { useState, useEffect } from "react";
import { BookOpen, Plus, X, Star, Search, Edit2, Trash2 } from "lucide-react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#00FF88";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type ReadStatus = "reading" | "want-to-read" | "completed" | "abandoned";

interface BookEntry {
  id: string;
  title: string;
  author: string;
  genre: string;
  coverEmoji: string;
  status: ReadStatus;
  rating?: 1 | 2 | 3 | 4 | 5;
  currentPage?: number;
  totalPages?: number;
  notes: string;
  startedAt?: string;
  finishedAt?: string;
  addedAt: string;
  year?: number;
}

interface BookRec {
  id: string;
  category: string;
  icon: string;
  books: { title: string; author: string; why: string }[];
}

interface ReadingGuide {
  id: string;
  name: string;
  duration: string;
  description: string;
  steps: string[];
  books_needed: string[];
}

interface VoiceRead {
  id: string;
  name: string;
  era: string;
  context: string;
  bio: string;
  quote: string;
  contribution: string;
}

const GENRES = ["Theology", "Devotional", "Biography", "Apologetics", "Church History", "Christian Living", "Commentary", "Prophecy", "Missions", "Psychology & Faith", "Fiction"];
const GENRE_COLORS: Record<string, string> = {
  "Theology": "#6B4FBB",
  "Devotional": "#00FF88",
  "Biography": "#F59E0B",
  "Apologetics": "#3B82F6",
  "Church History": "#8B5CF6",
  "Christian Living": "#10B981",
  "Commentary": "#EC4899",
  "Prophecy": "#EF4444",
  "Missions": "#F97316",
  "Psychology & Faith": "#14B8A6",
  "Fiction": "#6366F1",
};

const COVER_EMOJIS = ["📖", "✝️", "🕊️", "✨", "🙏", "🌿", "📜", "⛪", "🌍", "💡", "🔥", "📿"];

const STATUS_CONFIG: Record<ReadStatus, { label: string; color: string; icon: string }> = {
  "reading": { label: "Reading", color: "#00FF88", icon: "📚" },
  "want-to-read": { label: "Want to Read", color: "#6B4FBB", icon: "🔖" },
  "completed": { label: "Completed", color: "#F59E0B", icon: "✅" },
  "abandoned": { label: "Abandoned", color: "#4A4A68", icon: "⏸️" },
};

const BOOK_RECS: BookRec[] = [
  {
    id: "r1",
    category: "New Believers",
    icon: "🌱",
    books: [
      { title: "Mere Christianity", author: "C.S. Lewis", why: "The clearest rational case for Christianity written in the 20th century. Start here." },
      { title: "Basic Christianity", author: "John Stott", why: "Stott walks new believers through the person of Christ and the cost of following him with remarkable clarity." },
      { title: "The Purpose Driven Life", author: "Rick Warren", why: "40 days of foundational questions every new Christian should wrestle with: Why am I here? What am I made for?" },
    ],
  },
  {
    id: "r2",
    category: "Prayer & Devotion",
    icon: "🙏",
    books: [
      { title: "The Pursuit of God", author: "A.W. Tozer", why: "Dense with truth on every page. Tozer writes about drawing near to God with uncommon passion and biblical depth." },
      { title: "Prayer", author: "Timothy Keller", why: "Keller synthesizes Calvin, Luther, and Augustine on prayer into the most complete modern guide to intercession." },
      { title: "With Christ in the School of Prayer", author: "Andrew Murray", why: "Murray's 31-chapter devotional on the Lord's Prayer has formed more prayer warriors than almost any other book." },
    ],
  },
  {
    id: "r3",
    category: "Theology & Doctrine",
    icon: "✝️",
    books: [
      { title: "Knowing God", author: "J.I. Packer", why: "The best accessible introduction to the attributes of God. Packer is precise without being cold." },
      { title: "Systematic Theology", author: "Wayne Grudem", why: "The standard comprehensive evangelical systematic theology. Use it as a reference and read it chapter by chapter." },
      { title: "The Holiness of God", author: "R.C. Sproul", why: "One chapter on Isaiah 6 will permanently change how you understand who God is and who you are before him." },
    ],
  },
  {
    id: "r4",
    category: "Christian Living",
    icon: "🌿",
    books: [
      { title: "The Cost of Discipleship", author: "Dietrich Bonhoeffer", why: "The definitive treatment of cheap vs. costly grace. Bonhoeffer wrote it under the shadow of the Nazi state." },
      { title: "Celebration of Discipline", author: "Richard Foster", why: "The spiritual disciplines — fasting, solitude, simplicity, confession — laid out practically and biblically." },
      { title: "Radical", author: "David Platt", why: "A convicting challenge to American Christianity's comfort addiction. Short, blunt, and important." },
    ],
  },
  {
    id: "r5",
    category: "Apologetics",
    icon: "💡",
    books: [
      { title: "The Reason for God", author: "Timothy Keller", why: "Keller engages the seven biggest objections to Christianity with charity, precision, and cultural fluency." },
      { title: "Simply Christian", author: "N.T. Wright", why: "Wright rebuilds the case for Christianity from justice, beauty, and relationship — for the secular mind." },
      { title: "Cold-Case Christianity", author: "J. Warner Wallace", why: "A homicide detective applies criminal investigative methods to the historical claims of the Gospels." },
    ],
  },
  {
    id: "r6",
    category: "Biography & Stories",
    icon: "📖",
    books: [
      { title: "God's Smuggler", author: "Brother Andrew", why: "The story of a Dutch man smuggling Bibles into Communist countries on faith alone. Every Christian should read this." },
      { title: "Through Gates of Splendor", author: "Elisabeth Elliot", why: "The story of five missionaries martyred in Ecuador. One of the most powerful mission narratives ever written." },
      { title: "The Hiding Place", author: "Corrie ten Boom", why: "Corrie's account of hiding Jews from the Nazis and finding God's grace in a concentration camp." },
    ],
  },
];

const READING_GUIDES: ReadingGuide[] = [
  {
    id: "g1",
    name: "90-Day Bible Through",
    duration: "3 months",
    description: "Read the entire Bible in 90 days using a structured daily reading plan. This pace is intense but transformative — you see the whole narrative arc of Scripture like never before.",
    steps: [
      "Read approximately 12 pages of Scripture each day",
      "Follow a chronological reading order: Genesis through Revelation in narrative sequence",
      "Keep a daily journal noting one thing God said to you",
      "Find a reading partner for accountability and weekly discussion",
      "On days you fall behind, audio Bible while commuting or doing chores",
    ],
    books_needed: ["A Bible (ESV or NIV recommended)", "Reading journal"],
  },
  {
    id: "g2",
    name: "Classic Theology Primer",
    duration: "6 months",
    description: "An introduction to the towering works of Christian theology through the centuries. Read excerpts from Calvin, Aquinas, and Augustine alongside a modern guide.",
    steps: [
      "Month 1-2: Institutes of the Christian Religion (Book 1) — Calvin on the knowledge of God",
      "Month 3: Selected Summa Theologica excerpts — Aquinas on God, creation, and human nature",
      "Month 4-5: Confessions by Augustine — the greatest spiritual autobiography ever written",
      "Month 6: Knowing God by J.I. Packer — as a modern synthesis and application",
      "Keep a theology notebook: write one paragraph summary per chapter",
    ],
    books_needed: [
      "Institutes of the Christian Religion — John Calvin",
      "Summa Theologica (selected excerpts) — Thomas Aquinas",
      "Confessions — Augustine",
      "Knowing God — J.I. Packer",
    ],
  },
  {
    id: "g3",
    name: "Apologetics Foundation",
    duration: "3 months",
    description: "Build a foundation for defending and commending the faith. This guide equips you to engage the most common objections to Christianity with confidence and charity.",
    steps: [
      "Month 1: Mere Christianity (C.S. Lewis) — read one chapter daily, journal objections and responses",
      "Month 2: The Reason for God (Timothy Keller) — study one chapter per week with a discussion group",
      "Month 3: Cold-Case Christianity (J. Warner Wallace) — apply investigative logic to Gospel historicity",
      "Throughout: Practice explaining the Gospel clearly to a skeptical friend — write it out",
      "End with: Write your own personal testimony of faith (2 pages max, aimed at a skeptic)",
    ],
    books_needed: [
      "Mere Christianity — C.S. Lewis",
      "The Reason for God — Timothy Keller",
      "Cold-Case Christianity — J. Warner Wallace",
    ],
  },
  {
    id: "g4",
    name: "Spiritual Formation Classics",
    duration: "6 months",
    description: "The most important books on the interior life and spiritual transformation from the last 50 years. This guide will reshape how you think about growth in Christ.",
    steps: [
      "Month 1: Celebration of Discipline (Richard Foster) — one discipline per week, practiced not just read",
      "Month 2: The Spirit of the Disciplines (Dallas Willard) — the theological foundation for why disciplines form us",
      "Month 3: The Way of the Heart (Henri Nouwen) — solitude, silence, prayer as the desert fathers practiced",
      "Month 4-5: Renovation of the Heart (Dallas Willard) — the most complete model of spiritual transformation",
      "Month 6: Ruthless Elimination of Hurry (John Mark Comer) — applying formation to 21st-century life",
    ],
    books_needed: [
      "Celebration of Discipline — Richard Foster",
      "The Spirit of the Disciplines — Dallas Willard",
      "The Way of the Heart — Henri Nouwen",
      "Renovation of the Heart — Dallas Willard",
      "Ruthless Elimination of Hurry — John Mark Comer",
    ],
  },
  {
    id: "g5",
    name: "Church History Survey",
    duration: "1 year",
    description: "Walk through 2,000 years of Christian history through primary sources and narrative histories. Understanding where we came from transforms how we read the Bible and do church today.",
    steps: [
      "Q1: Early Church (AD 30-500) — read Eusebius' Church History excerpts + Early Christian Fathers anthology",
      "Q2: Medieval to Reformation (500-1600) — read Here I Stand (Roland Bainton) on Luther",
      "Q3: Reformation to Revivals (1600-1900) — read Jonathan Edwards on Revival + John Wesley's Journal excerpts",
      "Q4: Modern Era (1900-present) — read Tortured for Christ (Richard Wurmbrand) + Christianity in Crisis chapters",
      "Supplementary: Church History in Plain Language (Bruce Shelley) as a running narrative companion",
    ],
    books_needed: [
      "Church History in Plain Language — Bruce Shelley",
      "Here I Stand — Roland Bainton",
      "The Works of Jonathan Edwards (Vol. 1) — Jonathan Edwards",
      "Tortured for Christ — Richard Wurmbrand",
      "Early Christian Fathers — Cyril Richardson (ed.)",
    ],
  },
];

const VOICES_READ: VoiceRead[] = [
  {
    id: "v1",
    name: "C.S. Lewis",
    era: "1898-1963",
    context: "Oxford don, literary scholar, Christian apologist",
    bio: "Clive Staples Lewis was an atheist who converted to Christianity at 33 after conversations with J.R.R. Tolkien. He became the most widely read Christian apologist of the 20th century, writing over 30 books including Mere Christianity, The Screwtape Letters, and The Chronicles of Narnia.",
    quote: "It is a good rule, after reading a new book, never to allow yourself another new one till you have read an old one in between. If that is too much for you, you should at least read one old one to every three new ones.",
    contribution: "Lewis's essay 'On the Reading of Old Books' — his introduction to Athanasius' On the Incarnation — is one of the most important pieces of reading guidance ever written. He argued that modern readers systematically deprive themselves of wisdom by reading only contemporary books.",
  },
  {
    id: "v2",
    name: "Thomas a Kempis",
    era: "1380-1471",
    context: "Augustinian monk, Netherlands, author",
    bio: "Thomas a Kempis spent nearly his entire life in a monastery near Zwolle, copying manuscripts and writing devotional works. His The Imitation of Christ, written around 1418, has become the most widely read Christian book after the Bible itself — translated into more languages than any other religious text.",
    quote: "What doth it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility? Better of a surety is a lowly peasant who serveth God, than a proud philosopher who watcheth the stars.",
    contribution: "The Imitation of Christ set the gold standard for devotional reading as a practice of formation, not information. A Kempis taught the church that the goal of reading is not to know more but to become more like Christ — a principle that should govern every Christian reading list.",
  },
  {
    id: "v3",
    name: "John Stott",
    era: "1921-2011",
    context: "Anglican rector of All Souls Langham Place, London; global evangelical statesman",
    bio: "John Stott served as rector of All Souls Church in London for decades while becoming one of the most influential evangelical figures of the 20th century. He was a principal drafter of the Lausanne Covenant, a prolific Bible commentator, and a lifelong advocate for rigorous Christian thinking.",
    quote: "We must allow the Word of God to confront us, to disturb our security, to undermine our complacency and to overthrow our patterns of thought and behavior.",
    contribution: "Stott's book Your Mind Matters made the case that anti-intellectualism is a form of disobedience. His writing modeled what it looks like to bring the full resources of scholarly reading to bear on Christian living, inspiring generations of thoughtful evangelicals.",
  },
  {
    id: "v4",
    name: "Dallas Willard",
    era: "1935-2013",
    context: "Philosophy professor at USC, spiritual formation writer",
    bio: "Dallas Willard taught philosophy at the University of Southern California while writing some of the most important books on Christian spiritual formation of the late 20th century. His The Spirit of the Disciplines and Renovation of the Heart argued that transformation requires deliberate training, not passive belief.",
    quote: "Nondiscipleship costs abiding peace, a life penetrated throughout by love, faith that sees everything in the light of God's overarching governance for good, hopefulness that stands firm in the most discouraging of circumstances, power to do what is right and withstand the forces of evil.",
    contribution: "Willard argued that reading Scripture and Christian classics should function like training in a discipline — not as a source of information but as a means of renovation. His list of must-read spiritual classics shaped an entire generation of formation-focused Christians.",
  },
  {
    id: "v5",
    name: "Eugene Peterson",
    era: "1932-2018",
    context: "Presbyterian pastor, professor of spiritual theology, translator of The Message",
    bio: "Eugene Peterson pastored a small congregation in Maryland for 29 years before writing some of the most influential books on pastoral ministry and spiritual formation. He translated the entire Bible as The Message and wrote A Long Obedience in the Same Direction, which became a classic on discipleship.",
    quote: "Reading is a moral act. When I read rightly, I am changed by what I read — I am formed by the text, not just informed.",
    contribution: "Peterson's Eat This Book is the most complete treatment of lectio divina — the ancient practice of reading Scripture slowly, meditatively, prayerfully, for transformation rather than information. He recovered a way of reading that the church had largely forgotten in the age of speed.",
  },
];

const seedBooks: BookEntry[] = [
  {
    id: "b-001", title: "Mere Christianity", author: "C.S. Lewis", genre: "Apologetics",
    coverEmoji: "📖", status: "completed", rating: 5,
    totalPages: 227, notes: "Changed my life. Read it at 2am during my season of doubt. Lewis dismantles every objection methodically and then rebuilds the case for Christianity from the ground up. The 'Liar, Lunatic, or Lord' trilemma is still the most elegant argument I've encountered.",
    startedAt: "2016-03-10", finishedAt: "2016-03-18", addedAt: "2016-03-10", year: 1952,
  },
  {
    id: "b-002", title: "The Pursuit of God", author: "A.W. Tozer", genre: "Devotional",
    coverEmoji: "✨", status: "completed", rating: 5,
    totalPages: 128, notes: "Dense with truth on every page. Tozer writes about mystical union with God without losing any biblical grounding. His chapter on 'The Blessedness of Possessing Nothing' broke me open.",
    startedAt: "2020-01-01", finishedAt: "2020-01-15", addedAt: "2020-01-01", year: 1948,
  },
  {
    id: "b-003", title: "Knowing God", author: "J.I. Packer", genre: "Theology",
    coverEmoji: "✝️", status: "completed", rating: 5,
    totalPages: 284, notes: "The best book on the attributes of God for a general reader. Packer is accessible without being shallow. His chapter on 'God's Wisdom and Ours' is something I return to regularly.",
    startedAt: "2018-06-01", finishedAt: "2018-07-10", addedAt: "2018-06-01", year: 1973,
  },
  {
    id: "b-004", title: "The Cost of Discipleship", author: "Dietrich Bonhoeffer", genre: "Theology",
    coverEmoji: "🕊️", status: "reading", rating: undefined,
    currentPage: 143, totalPages: 316, notes: "Bonhoeffer's distinction between 'cheap grace' and 'costly grace' is one of the most important ideas I've encountered this year. Reading slowly — this one demands it.",
    startedAt: "2026-04-15", addedAt: "2026-04-10", year: 1937,
  },
  {
    id: "b-005", title: "The Screwtape Letters", author: "C.S. Lewis", genre: "Fiction",
    coverEmoji: "📜", status: "completed", rating: 4,
    totalPages: 172, notes: "Clever and unsettling. Lewis exposes spiritual warfare by inverting it — the demon's-eye view of how we're tempted is too accurate to be comfortable.",
    startedAt: "2021-08-01", finishedAt: "2021-08-12", addedAt: "2021-08-01", year: 1942,
  },
  {
    id: "b-006", title: "The Reason for God", author: "Timothy Keller", genre: "Apologetics",
    coverEmoji: "💡", status: "completed", rating: 5,
    totalPages: 293, notes: "Keller is Lewis for our generation. He engages secular objections with charity and precision. I've given this book away more than any other.",
    startedAt: "2019-09-01", finishedAt: "2019-10-15", addedAt: "2019-09-01", year: 2008,
  },
  {
    id: "b-007", title: "Surprised by Hope", author: "N.T. Wright", genre: "Theology",
    coverEmoji: "🌍", status: "reading", rating: undefined,
    currentPage: 87, totalPages: 332, notes: "Wright's reconstruction of a biblical theology of resurrection and new creation is eye-opening. The phrase 'life after life after death' reframes everything about eschatology.",
    startedAt: "2026-05-01", addedAt: "2026-04-28", year: 2008,
  },
  {
    id: "b-008", title: "Boundaries", author: "Dr. Henry Cloud & Dr. John Townsend", genre: "Psychology & Faith",
    coverEmoji: "🌿", status: "completed", rating: 4,
    totalPages: 352, notes: "Practical and biblical. Helped me understand codependency in relationships and why saying 'no' can be an act of love.",
    startedAt: "2022-02-01", finishedAt: "2022-03-15", addedAt: "2022-02-01", year: 1992,
  },
  {
    id: "b-009", title: "Radical", author: "David Platt", genre: "Christian Living",
    coverEmoji: "🔥", status: "completed", rating: 4,
    totalPages: 240, notes: "Convicting. Platt challenges the American dream head-on. Made me re-examine my own comfort-seeking faith. Didn't agree with everything but it moved me.",
    startedAt: "2017-03-01", finishedAt: "2017-04-01", addedAt: "2017-03-01", year: 2010,
  },
  {
    id: "b-010", title: "The Great Divorce", author: "C.S. Lewis", genre: "Fiction",
    coverEmoji: "📖", status: "want-to-read",
    notes: "Recommended by three people this month. Lewis's vision of heaven and hell as a bus trip.",
    addedAt: "2026-05-20", year: 1945,
  },
  {
    id: "b-011", title: "God's Smuggler", author: "Brother Andrew", genre: "Biography",
    coverEmoji: "⛪", status: "want-to-read",
    notes: "The story of Bible smuggling into Communist countries. Every Christian should read this.",
    addedAt: "2026-05-15", year: 1967,
  },
  {
    id: "b-012", title: "Orthodoxy", author: "G.K. Chesterton", genre: "Theology",
    coverEmoji: "✨", status: "want-to-read",
    notes: "Chesterton's account of how he arrived at Christianity. My theologian friend says this is essential.",
    addedAt: "2026-05-10", year: 1908,
  },
];

export default function ReadingListPage() {
  const [books, setBooks] = useState<BookEntry[]>(() => {
    try {
      const s = localStorage.getItem("vine_reading_list");
      return s ? JSON.parse(s) : seedBooks;
    } catch { return seedBooks; }
  });

  const [mainTab, setMainTab] = useState<"list" | "recommendations" | "guides" | "voices" | "videos">("list");
  const [activeStatus, setActiveStatus] = useState<ReadStatus | "all">("all");
  const [activeGenre, setActiveGenre] = useState("All");
  const [search, setSearch] = useState("");
  const [showCompose, setShowCompose] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [expandedGuide, setExpandedGuide] = useState<string | null>(null);
  const [expandedRec, setExpandedRec] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<VoiceRead>(VOICES_READ[0]);

  const [form, setForm] = useState({
    title: "", author: "", genre: "Theology", coverEmoji: "📖",
    status: "want-to-read" as ReadStatus, currentPage: "", totalPages: "", notes: "", year: "",
  });

  useEffect(() => {
    try { localStorage.setItem("vine_reading_list", JSON.stringify(books)); } catch {}
  }, [books]);

  const resetForm = () => {
    setForm({ title: "", author: "", genre: "Theology", coverEmoji: "📖", status: "want-to-read", currentPage: "", totalPages: "", notes: "", year: "" });
    setEditingId(null);
  };

  const handleEdit = (b: BookEntry) => {
    setForm({
      title: b.title, author: b.author, genre: b.genre, coverEmoji: b.coverEmoji,
      status: b.status, currentPage: b.currentPage?.toString() ?? "", totalPages: b.totalPages?.toString() ?? "",
      notes: b.notes, year: b.year?.toString() ?? "",
    });
    setEditingId(b.id);
    setShowCompose(true);
  };

  const handleSubmit = () => {
    if (!form.title.trim() || !form.author.trim()) return;
    const now = new Date().toISOString().split("T")[0];
    if (editingId) {
      setBooks((prev) => prev.map((b) => b.id !== editingId ? b : {
        ...b, title: form.title, author: form.author, genre: form.genre, coverEmoji: form.coverEmoji,
        status: form.status, currentPage: form.currentPage ? Number(form.currentPage) : undefined,
        totalPages: form.totalPages ? Number(form.totalPages) : undefined, notes: form.notes,
        year: form.year ? Number(form.year) : undefined,
      }));
    } else {
      const newBook: BookEntry = {
        id: `b-${Date.now()}`, title: form.title, author: form.author, genre: form.genre,
        coverEmoji: form.coverEmoji, status: form.status,
        currentPage: form.currentPage ? Number(form.currentPage) : undefined,
        totalPages: form.totalPages ? Number(form.totalPages) : undefined,
        notes: form.notes, addedAt: now,
        year: form.year ? Number(form.year) : undefined,
        startedAt: form.status === "reading" ? now : undefined,
        finishedAt: form.status === "completed" ? now : undefined,
      };
      setBooks((prev) => [newBook, ...prev]);
    }
    setShowCompose(false);
    resetForm();
  };

  const setRating = (bookId: string, rating: 1 | 2 | 3 | 4 | 5) => {
    setBooks((prev) => prev.map((b) => b.id === bookId ? { ...b, rating } : b));
  };

  const filtered = books.filter((b) => {
    const statusMatch = activeStatus === "all" || b.status === activeStatus;
    const genreMatch = activeGenre === "All" || b.genre === activeGenre;
    const searchMatch = !search || b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase());
    return statusMatch && genreMatch && searchMatch;
  });

  const completedCount = books.filter((b) => b.status === "completed").length;
  const readingCount = books.filter((b) => b.status === "reading").length;
  const wantCount = books.filter((b) => b.status === "want-to-read").length;
  const avgRating = (() => {
    const rated = books.filter((b) => b.rating);
    if (!rated.length) return null;
    return (rated.reduce((s, b) => s + (b.rating ?? 0), 0) / rated.length).toFixed(1);
  })();

  return (
    <div className="min-h-screen" style={{ background: BG, color: TEXT }}>
      <div className="pb-20" style={{ paddingTop: 40 }}>

        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 pt-2">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} style={{ color: GREEN }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>Reading List</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black mb-3">
                Grow through{" "}
                <span style={{ background: "linear-gradient(135deg, #00FF88, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  great books.
                </span>
              </h1>
              <p className="text-lg max-w-xl" style={{ color: "#6A6A88" }}>
                Track your spiritual reading, rate books, and build a library of faith-shaping literature.
              </p>
            </div>
            <button
              onClick={() => { resetForm(); setShowCompose(true); }}
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm"
              style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)", color: BG }}
            >
              <Plus size={15} /> Add Book
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-6">
            {[
              { label: `${completedCount} Completed`, color: "#F59E0B", icon: "✅" },
              { label: `${readingCount} Reading now`, color: GREEN, icon: "📚" },
              { label: `${wantCount} Want to read`, color: PURPLE, icon: "🔖" },
              ...(avgRating ? [{ label: `${avgRating} Avg rating`, color: "#EC4899", icon: "⭐" }] : []),
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span>{s.icon}</span>
                <span className="text-sm font-bold" style={{ color: s.color }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Tab Bar */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, marginBottom: 28 }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ display: "flex" }}>
            {(["list", "recommendations", "guides", "voices", "videos"] as const).map(tab => (
              <button key={tab} onClick={() => setMainTab(tab)}
                style={{ background: "none", border: "none", borderBottom: mainTab === tab ? `2px solid ${GREEN}` : "2px solid transparent", color: mainTab === tab ? TEXT : MUTED, fontWeight: mainTab === tab ? 700 : 500, fontSize: 14, padding: "14px 18px", cursor: "pointer" }}>
                {tab === "list" ? "My List" : tab === "recommendations" ? "Recommendations" : tab === "guides" ? "Reading Guides" : tab === "voices" ? "🎓 Voices" : "🎬 Videos"}
              </button>
            ))}
          </div>
        </div>

        {/* Fixed-position modals — always mounted, outside tab conditionals */}
        {showCompose && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}>
            <div className="w-full max-w-lg rounded-2xl p-6 max-h-[90vh] overflow-y-auto" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-black text-lg" style={{ color: TEXT }}>{editingId ? "Edit Book" : "Add Book"}</h3>
                <button onClick={() => { setShowCompose(false); resetForm(); }} style={{ color: "#4A4A68" }}><X size={20} /></button>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} placeholder="Book title" className="px-4 py-2.5 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: TEXT }} />
                  <input value={form.author} onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))} placeholder="Author" className="px-4 py-2.5 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: TEXT }} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <select value={form.genre} onChange={(e) => setForm((f) => ({ ...f, genre: e.target.value }))} className="px-4 py-2.5 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: TEXT }}>
                    {GENRES.map((g) => <option key={g} value={g} style={{ background: CARD }}>{g}</option>)}
                  </select>
                  <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as ReadStatus }))} className="px-4 py-2.5 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: TEXT }}>
                    {(Object.entries(STATUS_CONFIG) as [ReadStatus, typeof STATUS_CONFIG[ReadStatus]][]).map(([k, v]) => (
                      <option key={k} value={k} style={{ background: CARD }}>{v.icon} {v.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Cover emoji</label>
                  <div className="flex gap-2 flex-wrap">
                    {COVER_EMOJIS.map((e) => (
                      <button key={e} onClick={() => setForm((f) => ({ ...f, coverEmoji: e }))} className="w-9 h-9 rounded-lg flex items-center justify-center text-xl" style={{ background: form.coverEmoji === e ? "rgba(0,255,136,0.15)" : "rgba(255,255,255,0.04)", border: form.coverEmoji === e ? "1px solid rgba(0,255,136,0.4)" : "1px solid rgba(255,255,255,0.08)" }}>
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
                {(form.status === "reading" || form.status === "completed") && (
                  <div className="grid grid-cols-2 gap-3">
                    <input type="number" value={form.currentPage} onChange={(e) => setForm((f) => ({ ...f, currentPage: e.target.value }))} placeholder="Current page" min={0} className="px-4 py-2.5 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: TEXT }} />
                    <input type="number" value={form.totalPages} onChange={(e) => setForm((f) => ({ ...f, totalPages: e.target.value }))} placeholder="Total pages" min={1} className="px-4 py-2.5 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: TEXT }} />
                  </div>
                )}
                <input type="number" value={form.year} onChange={(e) => setForm((f) => ({ ...f, year: e.target.value }))} placeholder="Publication year (optional)" min={1000} max={2026} className="w-full px-4 py-2.5 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: TEXT }} />
                <textarea value={form.notes} onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))} placeholder="Notes, quotes, or review..." rows={3} className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: TEXT }} />
              </div>
              <div className="flex gap-3 mt-5">
                <button onClick={() => { setShowCompose(false); resetForm(); }} className="flex-1 py-2.5 rounded-xl font-bold text-sm" style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}>Cancel</button>
                <button onClick={handleSubmit} disabled={!form.title.trim() || !form.author.trim()} className="flex-1 py-2.5 rounded-xl font-black text-sm" style={{ background: (form.title.trim() && form.author.trim()) ? "linear-gradient(135deg, #00FF88, #00BB55)" : "rgba(255,255,255,0.06)", color: (form.title.trim() && form.author.trim()) ? BG : "#4A4A68" }}>
                  {editingId ? "Save" : "Add Book"}
                </button>
              </div>
            </div>
          </div>
        )}

        {confirmDelete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="rounded-2xl p-6 max-w-sm w-full" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
              <p className="font-black text-base mb-2" style={{ color: TEXT }}>Remove this book?</p>
              <div className="flex gap-3 mt-4">
                <button onClick={() => setConfirmDelete(null)} className="flex-1 py-2 rounded-xl font-bold text-sm" style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}>Cancel</button>
                <button onClick={() => { setBooks((prev) => prev.filter((b) => b.id !== confirmDelete)); setConfirmDelete(null); if (selectedBook === confirmDelete) setSelectedBook(null); }} className="flex-1 py-2 rounded-xl font-black text-sm" style={{ background: "rgba(239,68,68,0.15)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.3)" }}>Remove</button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* My List Tab */}
          {mainTab === "list" && (
            <div>
              <div className="flex gap-6">
                <div className="flex-1 min-w-0">
                  {/* Filters */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <div className="relative flex-1">
                      <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#4A4A68" }} />
                      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search books..." className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: TEXT }} />
                    </div>
                  </div>

                  {/* Status tabs */}
                  <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                    {([["all", "All", "#8A8AA8"], ...Object.entries(STATUS_CONFIG).map(([k, v]) => [k, v.label, v.color])] as [string, string, string][]).map(([k, label, color]) => (
                      <button key={k} onClick={() => setActiveStatus(k as ReadStatus | "all")} className="px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap" style={{ background: activeStatus === k ? `${color}15` : "rgba(255,255,255,0.03)", border: activeStatus === k ? `1px solid ${color}40` : "1px solid rgba(255,255,255,0.06)", color: activeStatus === k ? color : "#6A6A88" }}>
                        {STATUS_CONFIG[k as ReadStatus]?.icon ?? "📚"} {label} {k !== "all" ? `(${books.filter((b) => b.status === k).length})` : `(${books.length})`}
                      </button>
                    ))}
                  </div>

                  {/* Genre pills */}
                  <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
                    {["All", ...GENRES].map((g) => (
                      <button key={g} onClick={() => setActiveGenre(g)} className="px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap" style={{ background: activeGenre === g ? `${GENRE_COLORS[g] ?? "#8A8AA8"}15` : "rgba(255,255,255,0.03)", border: activeGenre === g ? `1px solid ${GENRE_COLORS[g] ?? "#8A8AA8"}40` : "1px solid rgba(255,255,255,0.06)", color: activeGenre === g ? GENRE_COLORS[g] ?? "#8A8AA8" : "#6A6A88" }}>
                        {g}
                      </button>
                    ))}
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.length === 0 && (
                      <div className="col-span-full text-center py-16" style={{ color: "#4A4A68" }}>
                        <BookOpen size={40} className="mx-auto mb-3 opacity-20" />
                        <p>No books found</p>
                      </div>
                    )}
                    {filtered.map((book) => {
                      const sc = STATUS_CONFIG[book.status];
                      const gc = GENRE_COLORS[book.genre] ?? "#8A8AA8";
                      const pct = book.currentPage && book.totalPages ? Math.min(100, Math.round((book.currentPage / book.totalPages) * 100)) : null;
                      return (
                        <div
                          key={book.id}
                          className="rounded-2xl p-5 cursor-pointer transition-all relative group"
                          style={{ background: selectedBook === book.id ? "rgba(0,255,136,0.06)" : CARD, border: selectedBook === book.id ? "1px solid rgba(0,255,136,0.2)" : `1px solid ${BORDER}` }}
                          onClick={() => setSelectedBook(selectedBook === book.id ? null : book.id)}
                        >
                          {/* Hover actions */}
                          <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={(e) => { e.stopPropagation(); handleEdit(book); }} className="p-1.5 rounded-lg" style={{ background: "rgba(0,0,0,0.5)", color: "#6A6A88" }}><Edit2 size={11} /></button>
                            <button onClick={(e) => { e.stopPropagation(); setConfirmDelete(book.id); }} className="p-1.5 rounded-lg" style={{ background: "rgba(0,0,0,0.5)", color: "#6A6A88" }}><Trash2 size={11} /></button>
                          </div>

                          <div className="text-4xl mb-3">{book.coverEmoji}</div>
                          <h3 className="font-black text-sm mb-0.5 pr-12 leading-tight" style={{ color: TEXT }}>{book.title}</h3>
                          <p className="text-xs mb-3" style={{ color: "#6A6A88" }}>{book.author}{book.year ? ` · ${book.year}` : ""}</p>

                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${sc.color}15`, color: sc.color, border: `1px solid ${sc.color}30` }}>{sc.icon} {sc.label}</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${gc}15`, color: gc, border: `1px solid ${gc}30` }}>{book.genre}</span>
                          </div>

                          {pct !== null && (
                            <div className="mb-3">
                              <div className="w-full h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                                <div className="h-1.5 rounded-full" style={{ width: `${pct}%`, background: GREEN }} />
                              </div>
                              <p className="text-[10px] mt-1" style={{ color: "#4A4A68" }}>p.{book.currentPage} / {book.totalPages} · {pct}%</p>
                            </div>
                          )}

                          {book.status === "completed" && (
                            <div className="flex gap-0.5" onClick={(e) => e.stopPropagation()}>
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button key={star} onClick={() => setRating(book.id, star as 1 | 2 | 3 | 4 | 5)}>
                                  <Star size={13} fill={book.rating && book.rating >= star ? "#F59E0B" : "none"} style={{ color: book.rating && book.rating >= star ? "#F59E0B" : BORDER }} />
                                </button>
                              ))}
                            </div>
                          )}

                          {book.notes && selectedBook !== book.id && (
                            <p className="text-xs mt-3 line-clamp-2" style={{ color: "#6A6A88" }}>{book.notes}</p>
                          )}

                          {selectedBook === book.id && book.notes && (
                            <div className="mt-3 p-3 rounded-xl" style={{ background: "rgba(0,0,0,0.2)" }}>
                              <p className="text-xs leading-relaxed" style={{ color: "#C0C0D8" }}>{book.notes}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Recommendations Tab */}
          {mainTab === "recommendations" && (
            <div>
              <div style={{ marginBottom: 28 }}>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: TEXT, marginBottom: 8 }}>Book Recommendations</h2>
                <p style={{ fontSize: 14, color: MUTED, maxWidth: 600 }}>
                  Curated reading lists by category. Click any category to explore the books inside.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 18 }}>
                {BOOK_RECS.map((rec) => {
                  const isOpen = expandedRec === rec.id;
                  return (
                    <div key={rec.id} style={{ background: CARD, border: `1px solid ${isOpen ? PURPLE : BORDER}`, borderRadius: 16, overflow: "hidden", transition: "border-color 0.2s" }}>
                      <button
                        onClick={() => setExpandedRec(isOpen ? null : rec.id)}
                        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <div style={{ fontSize: 24 }}>{rec.icon}</div>
                          <div>
                            <div style={{ fontSize: 15, fontWeight: 700, color: TEXT }}>{rec.category}</div>
                            <div style={{ fontSize: 12, color: MUTED }}>{rec.books.length} books</div>
                          </div>
                        </div>
                        <div style={{ color: isOpen ? PURPLE : MUTED, fontSize: 18, fontWeight: 700, transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>›</div>
                      </button>
                      {isOpen && (
                        <div style={{ borderTop: `1px solid ${BORDER}`, padding: "16px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
                          {rec.books.map((b, i) => (
                            <div key={i}>
                              <div style={{ fontSize: 13, fontWeight: 700, color: TEXT, marginBottom: 2 }}>{b.title}</div>
                              <div style={{ fontSize: 11, color: PURPLE, marginBottom: 6 }}>{b.author}</div>
                              <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.6 }}>{b.why}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Reading Guides Tab */}
          {mainTab === "guides" && (
            <div>
              <div style={{ marginBottom: 28 }}>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: TEXT, marginBottom: 8 }}>Reading Guides</h2>
                <p style={{ fontSize: 14, color: MUTED, maxWidth: 600 }}>
                  Structured reading plans with step-by-step guidance. Pick a guide and commit to the journey.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {READING_GUIDES.map((guide) => {
                  const isOpen = expandedGuide === guide.id;
                  return (
                    <div key={guide.id} style={{ background: CARD, border: `1px solid ${isOpen ? GREEN : BORDER}`, borderRadius: 16, overflow: "hidden", transition: "border-color 0.2s" }}>
                      <button
                        onClick={() => setExpandedGuide(isOpen ? null : guide.id)}
                        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                      >
                        <div style={{ flex: 1, paddingRight: 16 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                            <span style={{ fontSize: 16, fontWeight: 700, color: TEXT }}>{guide.name}</span>
                            <span style={{ background: `${GREEN}15`, color: GREEN, border: `1px solid ${GREEN}30`, borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 700 }}>{guide.duration}</span>
                          </div>
                          <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.5 }}>{guide.description}</p>
                        </div>
                        <div style={{ color: isOpen ? GREEN : MUTED, fontSize: 18, fontWeight: 700, flexShrink: 0, transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>›</div>
                      </button>
                      {isOpen && (
                        <div style={{ borderTop: `1px solid ${BORDER}`, padding: "20px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                          <div>
                            <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>Step-by-Step Plan</div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                              {guide.steps.map((step, i) => (
                                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${GREEN}20`, border: `1px solid ${GREEN}40`, color: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                                  <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.6 }}>{step}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div style={{ fontSize: 11, color: PURPLE, fontWeight: 700, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>Books Needed</div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                              {guide.books_needed.map((book, i) => (
                                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                                  <span style={{ color: PURPLE, flexShrink: 0, marginTop: 2 }}>›</span>
                                  <span style={{ fontSize: 12, color: MUTED, lineHeight: 1.5 }}>{book}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Videos Tab */}
          {mainTab === "videos" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                  Video recommendations and guidance on building a rich Christian reading life — from trusted pastors and scholars.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
                {[
                  { id: "uc9NRtCgNDA", title: "Christian Books and Bible Commentaries", teacher: "Tim Keller" },
                  { id: "9nY2mCJzBmk", title: "Tim Keller's Recommended Reading", teacher: "Tim Keller" },
                  { id: "Cct9oRGBK3g", title: "My 7 Most-Recommended Books on Theology", teacher: "Theology Reading" },
                  { id: "FYBA9M_wWGA", title: "Theology Reading List", teacher: "Christian Education" },
                ].map(v => (
                  <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${v.id}`}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                      />
                    </div>
                    <div style={{ padding: "14px 16px" }}>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{v.teacher}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Voices Tab */}
          {mainTab === "voices" && (
            <div>
              <div style={{ marginBottom: 28 }}>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: TEXT, marginBottom: 8 }}>Voices on Christian Reading</h2>
                <p style={{ fontSize: 14, color: MUTED, maxWidth: 600 }}>
                  Thinkers and teachers who have shaped how the church approaches reading, formation, and the life of the mind.
                </p>
              </div>
              <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                {/* Left panel */}
                <div style={{ width: 240, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 24 }}>
                  {VOICES_READ.map((v) => (
                    <button key={v.id} onClick={() => setSelectedVoice(v)}
                      style={{
                        background: selectedVoice.id === v.id ? `${PURPLE}20` : CARD,
                        border: `1px solid ${selectedVoice.id === v.id ? PURPLE : BORDER}`,
                        borderRadius: 12, padding: "12px 14px", cursor: "pointer", textAlign: "left",
                      }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice.id === v.id ? TEXT : MUTED, marginBottom: 2 }}>{v.name}</div>
                      <div style={{ fontSize: 11, color: selectedVoice.id === v.id ? PURPLE : `${MUTED}80` }}>{v.era}</div>
                    </button>
                  ))}
                </div>
                {/* Right panel */}
                <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                  <div style={{ marginBottom: 20 }}>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: TEXT, margin: "0 0 4px" }}>{selectedVoice.name}</h3>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      <span style={{ background: `${PURPLE}20`, color: PURPLE, border: `1px solid ${PURPLE}40`, borderRadius: 20, padding: "2px 12px", fontSize: 11, fontWeight: 700 }}>{selectedVoice.era}</span>
                      <span style={{ fontSize: 12, color: MUTED }}>{selectedVoice.context}</span>
                    </div>
                  </div>

                  <blockquote style={{ margin: "0 0 20px", padding: "16px 20px", borderLeft: `3px solid ${GREEN}`, background: BG, borderRadius: "0 10px 10px 0" }}>
                    <p style={{ fontSize: 15, color: TEXT, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>
                      &ldquo;{selectedVoice.quote}&rdquo;
                    </p>
                  </blockquote>

                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Biography</div>
                    <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.75, margin: 0 }}>{selectedVoice.bio}</p>
                  </div>

                  <div style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${PURPLE}` }}>
                    <div style={{ fontSize: 11, color: PURPLE, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Legacy & Contribution</div>
                    <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.7 }}>{selectedVoice.contribution}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
