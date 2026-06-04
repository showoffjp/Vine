"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import { CheckCircle2, ChevronRight, Star, Flame, X } from "lucide-react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

interface DisciplineRecord {
  id: string;
  lastPracticed?: string;
  timesThisMonth: number;
  notes: string;
  committed: boolean;
}

interface Discipline {
  id: string;
  name: string;
  category: "inward" | "outward" | "corporate";
  emoji: string;
  color: string;
  tagline: string;
  description: string;
  howTo: string[];
  verse: string;
  verseRef: string;
  teachers: string[];
  difficulty: 1 | 2 | 3;
}

const DISCIPLINES: Discipline[] = [
  {
    id: "prayer", name: "Prayer", category: "inward", emoji: "🙏", color: "#6B4FBB",
    tagline: "Conversation with the living God",
    description: "Prayer is the primary way we commune with God — not a religious obligation but a relationship. It encompasses adoration, confession, thanksgiving, and supplication.",
    howTo: ["Set a specific time and place", "Use the ACTS model: Adoration, Confession, Thanksgiving, Supplication", "Pray the Psalms as a framework", "Keep a prayer journal to track requests and answers", "Combine with silence to listen, not just speak"],
    verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    verseRef: "Philippians 4:6",
    teachers: ["E.M. Bounds", "Richard Foster", "Tim Keller"],
    difficulty: 1,
  },
  {
    id: "bible-reading", name: "Scripture Reading", category: "inward", emoji: "📖", color: "#3B82F6",
    tagline: "Letting God speak through His Word",
    description: "Regular, sustained reading of Scripture — not just for information but for transformation. The goal is to read in such a way that the Word reads us.",
    howTo: ["Use a reading plan (Bible in a year, NT in 90 days)", "Read larger sections for narrative; smaller for poetry and epistles", "Apply OIA: Observe → Interpret → Apply", "Memorize key passages", "Read aloud — especially Psalms and prophets"],
    verse: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.",
    verseRef: "2 Timothy 3:16",
    teachers: ["N.T. Wright", "Tim Keller", "John Piper"],
    difficulty: 1,
  },
  {
    id: "fasting", name: "Fasting", category: "inward", emoji: "✨", color: "#F59E0B",
    tagline: "Hunger for God over hunger for food",
    description: "Voluntarily abstaining from food (or other things) to create space for spiritual attentiveness, intercessory prayer, or repentance. Not performance — but a reorientation of desire.",
    howTo: ["Start with partial fasts (skip one meal)", "Set an intention: What are you seeking God about?", "Spend the hunger time in prayer rather than distraction", "Break the fast with intentional gratitude", "Consider non-food fasts: social media, news, entertainment"],
    verse: "When you fast, do not look somber as the hypocrites do, for they disfigure their faces to show others they are fasting.",
    verseRef: "Matthew 6:16",
    teachers: ["Richard Foster", "Jentezen Franklin", "Dallas Willard"],
    difficulty: 2,
  },
  {
    id: "meditation", name: "Meditation", category: "inward", emoji: "🌿", color: "#10B981",
    tagline: "Ruminating on God's Word",
    description: "Biblical meditation is distinct from Eastern meditation. Rather than emptying the mind, it means filling and saturating the mind with Scripture — turning it over, dwelling on it, letting it speak.",
    howTo: ["Choose one verse or passage", "Read it slowly 3-4 times", "Ask: What does this reveal about God? About me? About the world?", "Paraphrase it in your own words", "Carry it mentally through the day"],
    verse: "Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it.",
    verseRef: "Joshua 1:8",
    teachers: ["Dallas Willard", "Richard Foster", "Lectio Divina tradition"],
    difficulty: 2,
  },
  {
    id: "silence", name: "Silence & Solitude", category: "inward", emoji: "🕊️", color: "#8B5CF6",
    tagline: "Creating space to hear",
    description: "Deliberately withdrawing from noise, people, and activity to be alone with God. Jesus practiced this regularly. In silence, we learn to listen rather than only speak.",
    howTo: ["Start with 10-15 minutes of complete silence", "Go somewhere without screens or noise", "Don't fill the silence with a to-do list", "Let thoughts surface and release them to God", "Gradually extend duration as you practice"],
    verse: "Be still and know that I am God.",
    verseRef: "Psalm 46:10",
    teachers: ["Henri Nouwen", "Dallas Willard", "Thomas Merton"],
    difficulty: 3,
  },
  {
    id: "journaling", name: "Journaling", category: "inward", emoji: "✍️", color: "#EC4899",
    tagline: "Writing as a spiritual act",
    description: "Keeping a record of your spiritual journey — prayers, insights from Scripture, how God is working, confession, gratitude. Journaling externalizes the inner life and creates a record of God's faithfulness.",
    howTo: ["Write what you read in Scripture today and what stood out", "Record answered prayers specifically", "Use honest language — God can handle your doubts and anger", "Review past entries periodically to see growth", "Don't stress about style or grammar"],
    verse: "I will remember the deeds of the Lord; yes, I will remember your miracles of long ago.",
    verseRef: "Psalm 77:11",
    teachers: ["Jim Elliot", "George Whitefield", "Richard Foster"],
    difficulty: 1,
  },
  {
    id: "simplicity", name: "Simplicity", category: "outward", emoji: "⚡", color: "#F97316",
    tagline: "Freedom from the tyranny of things",
    description: "Ordering life to hold material possessions lightly and resist consumer culture. Simplicity is not poverty — it's freedom from anxiety about possessions and clarity about what truly matters.",
    howTo: ["Regularly give away things you don't need", "Fast from buying anything non-essential for a month", "Practice gratitude for what you already have", "Evaluate spending: Does this serve God's kingdom or my comfort?", "Resist the comparison trap on social media"],
    verse: "But godliness with contentment is great gain. For we brought nothing into the world, and we can take nothing out of it.",
    verseRef: "1 Timothy 6:6-7",
    teachers: ["Richard Foster", "Francis of Assisi", "Francis Chan"],
    difficulty: 2,
  },
  {
    id: "service", name: "Service", category: "outward", emoji: "🤝", color: "#3a7d56",
    tagline: "The discipline of not thinking about yourself",
    description: "Choosing to serve others as a spiritual discipline — not grudgingly or for recognition but as a training ground for crucifying self-centeredness and practicing the way of Jesus.",
    howTo: ["Serve anonymously so only God knows", "Look for the overlooked person in every room", "Say yes to the thing you don't feel like doing", "Serve in ways that cost you something real", "Volunteer for unglamorous roles in your community"],
    verse: "Whoever wants to become great among you must be your servant, and whoever wants to be first must be slave of all.",
    verseRef: "Mark 10:43-44",
    teachers: ["Henri Nouwen", "Mother Teresa", "Dallas Willard"],
    difficulty: 2,
  },
  {
    id: "generosity", name: "Generosity", category: "outward", emoji: "🎁", color: "#EF4444",
    tagline: "Holding wealth with open hands",
    description: "Systematically and cheerfully giving financial resources, time, and attention. Generosity is a discipline precisely because it feels costly — and that cost is the point.",
    howTo: ["Tithe first before paying anything else", "Give above the tithe when possible", "Give to people, not just institutions", "Give anonymously regularly", "Budget generosity like any other expense — plan it, not feel it"],
    verse: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.",
    verseRef: "2 Corinthians 9:7",
    teachers: ["Randy Alcorn", "Tim Keller", "Richard Foster"],
    difficulty: 2,
  },
  {
    id: "confession", name: "Confession", category: "corporate", emoji: "🔓", color: "#6366F1",
    tagline: "Walking in the light together",
    description: "Regularly confessing sin — both to God and to a trusted person. James 5:16 assumes this is normal Christianity. Confession breaks the power of secrecy and shame.",
    howTo: ["Find a trusted accountability partner", "Confess specifically, not vaguely", "Don't make confession itself a performance", "Follow confession with repentance — changed direction", "Receive forgiveness — don't keep rehearsing confessed sin"],
    verse: "Therefore confess your sins to each other and pray for each other so that you may be healed.",
    verseRef: "James 5:16",
    teachers: ["Dietrich Bonhoeffer", "Richard Foster", "Tim Keller"],
    difficulty: 3,
  },
  {
    id: "worship", name: "Worship", category: "corporate", emoji: "🎵", color: "#BB4F7A",
    tagline: "Orienting yourself toward God",
    description: "Worship is not just Sunday singing — it's a posture of the whole life, continuously reorienting our desires and attention toward God. Congregational worship trains us in corporate praise.",
    howTo: ["Worship with a physical posture: stand, kneel, raise hands", "Sing even when you don't feel it — worship shapes feeling", "Focus on God's character, not your circumstances", "Practice private worship: singing and praying alone", "Attend corporate worship consistently"],
    verse: "God is spirit, and his worshipers must worship in the Spirit and in truth.",
    verseRef: "John 4:24",
    teachers: ["A.W. Tozer", "Matt Redman", "Louie Giglio"],
    difficulty: 1,
  },
  {
    id: "sabbath", name: "Sabbath", category: "corporate", emoji: "🌙", color: "#4FBBAA",
    tagline: "Rest as an act of trust",
    description: "Keeping the Sabbath is one of the Ten Commandments — and one of the most neglected by modern Christians. Sabbath is declaring that the world doesn't depend on you; it depends on God.",
    howTo: ["Choose a consistent day and protect it", "Stop: no productive work", "Rest: do what restores you", "Delight: enjoy God, people, creation", "Worship: use the day for corporate and personal devotion"],
    verse: "There remains, then, a Sabbath-rest for the people of God; for anyone who enters God's rest also rests from their works.",
    verseRef: "Hebrews 4:9-10",
    teachers: ["Walter Brueggemann", "Mark Buchanan", "John Mark Comer"],
    difficulty: 3,
  },
];

interface DiscTheology {
  id: string;
  title: string;
  icon: string;
  scripture: string;
  description: string;
  key_point: string;
}

const DISC_THEOLOGY: DiscTheology[] = [
  {
    id: "purpose",
    title: "The Purpose of Disciplines",
    icon: "🎯",
    scripture: "1 Timothy 4:7-8",
    description: "Spiritual disciplines do not earn God's grace or favor. They cannot make us righteous before God. What they do is train us — like an athlete trains muscles — to be more receptive to the grace God freely gives. Dallas Willard called them 'training, not trying.' We don't discipline ourselves to impress God; we discipline ourselves so that, when the moment comes, we naturally respond in godly ways.",
    key_point: "Disciplines don't earn grace — they train us to receive and walk in the grace already given.",
  },
  {
    id: "jesus-model",
    title: "Jesus as Model",
    icon: "✝️",
    scripture: "Luke 5:16; Mark 1:35",
    description: "The Gospels repeatedly show Jesus withdrawing to pray, fasting in the wilderness, attending synagogue, celebrating feasts, and engaging in table fellowship. If the Son of God needed rhythms of spiritual formation, how much more do we? Jesus didn't practice disciplines to earn anything — he practiced them as the shape of a life fully oriented toward the Father. His example is our invitation.",
    key_point: "Jesus modeled the disciplines not as obligation but as the natural rhythm of a life lived toward the Father.",
  },
  {
    id: "spirit-role",
    title: "The Role of the Spirit",
    icon: "🕊️",
    scripture: "Galatians 5:22-25; Philippians 2:13",
    description: "Spiritual disciplines are not a replacement for the Holy Spirit — they are a cooperation with him. The Spirit produces fruit in us; disciplines create the conditions in which that fruit can grow. Disciplines without the Spirit become mere willpower and religious performance. The Spirit without any discipline can lead to passivity and presumption. Both are necessary — disciplines are the trellis; the Spirit is the vine.",
    key_point: "Disciplines don't replace the Spirit — they cooperate with him, creating soil where his fruit can grow.",
  },
  {
    id: "legalism-danger",
    title: "The Danger of Legalism",
    icon: "⚠️",
    scripture: "Galatians 3:1-3; Colossians 2:20-23",
    description: "When disciplines are practiced to earn approval — from God or others — they become burdens rather than freedoms. The Pharisees were the most disciplined people of their era, and Jesus called them whitewashed tombs. The difference is motive and orientation. A discipline practiced from fear, pride, or comparison has already been corrupted. Disciplines should feel like freedom moving toward God, not chains binding us to performance.",
    key_point: "Discipline without grace becomes burden. The test is motive: are you training toward God or performing for approval?",
  },
  {
    id: "corporate-personal",
    title: "Corporate vs Personal",
    icon: "🤝",
    scripture: "Hebrews 10:24-25; Matthew 6:6",
    description: "Scripture calls us to both. Personal disciplines — prayer, Scripture, fasting, solitude — form the interior life. Corporate disciplines — worship, confession, service, table fellowship — root us in the body of Christ. Neither is complete without the other. A faith practiced only privately can become self-focused and drift from orthodoxy. A faith practiced only corporately can become performance without transformation. We need both the inner room and the gathered church.",
    key_point: "Both personal and corporate disciplines are essential — one forms the soul; the other grounds it in community.",
  },
];

interface DiscPractice {
  id: string;
  name: string;
  icon: string;
  type: "inward" | "outward" | "corporate";
  frequency: string;
  description: string;
  getting_started: string[];
}

const DISC_PRACTICES: DiscPractice[] = [
  {
    id: "lectio-divina",
    name: "Lectio Divina",
    icon: "📜",
    type: "inward",
    frequency: "Daily or several times per week",
    description: "An ancient monastic practice of sacred reading. Rather than reading Scripture for information, Lectio Divina moves through four movements: Read (Lectio), Meditate (Meditatio), Pray (Oratio), and Contemplate (Contemplatio). A short passage is read slowly, multiple times, until a word or phrase arrests attention — then that word is carried into prayer and silence.",
    getting_started: [
      "Choose a short passage — 4 to 8 verses is ideal",
      "Read it slowly once, listening for a word or phrase that stands out",
      "Read it again and meditate on that word: let it settle, turn it over",
      "Pray: respond to God from what the text stirred in you",
      "Rest in silence for several minutes, simply being with God",
      "Close with brief thanksgiving and carry the word into your day",
    ],
  },
  {
    id: "centering-prayer",
    name: "Centering Prayer",
    icon: "🌀",
    type: "inward",
    frequency: "20 minutes daily, ideally twice",
    description: "A contemplative prayer method developed by Thomas Keating and Basil Pennington from the ancient tradition of apophatic prayer. Rather than speaking to God, centering prayer creates interior silence so God can speak. A sacred word is chosen as an anchor — when thoughts arise, the word gently redirects attention. It is a practice of consent, not achievement.",
    getting_started: [
      "Choose a sacred word (e.g., 'Jesus,' 'peace,' 'abba') as a symbol of consent to God's presence",
      "Sit comfortably with eyes closed and settle briefly",
      "Silently introduce your sacred word",
      "When thoughts arise, gently return to the sacred word",
      "At the end of 20 minutes, remain in silence for 2 more minutes before opening eyes",
      "Don't evaluate the prayer period — simply show up",
    ],
  },
  {
    id: "examen",
    name: "The Examen",
    icon: "🔍",
    type: "inward",
    frequency: "Daily, preferably at day's end",
    description: "The Daily Examen is a practice developed by Ignatius of Loyola. It is a structured review of the day through the lens of God's presence, designed to cultivate awareness of how God was at work and where we moved toward or away from him. Unlike self-criticism, the Examen is done in gratitude and opens into honest prayer.",
    getting_started: [
      "Give thanks: Begin with gratitude for the concrete gifts of the day",
      "Ask for light: Pray for the Holy Spirit to illuminate your review with honesty and mercy",
      "Review the day: Walk through the hours — where did you feel most alive, most yourself, closest to God?",
      "Face shortcomings: Where did you miss the mark? Name it honestly without shame",
      "Look forward: Choose one way to cooperate with God tomorrow",
    ],
  },
  {
    id: "intercessory-prayer-walk",
    name: "Intercessory Prayer Walk",
    icon: "🚶",
    type: "outward",
    frequency: "Weekly",
    description: "A form of outward intercession where you physically walk through a neighborhood, workplace, or community and pray for the people and places you pass. It combines bodily movement with intercession, embodying the truth that prayer is not only interior. Prayer walking has roots in the Old Testament practice of walking the land and in Jesus' own habit of moving through towns with compassion.",
    getting_started: [
      "Choose a route: your street, neighborhood, workplace, or school campus",
      "Walk slowly and prayerfully — no earbuds",
      "As you pass homes, businesses, or people, pray specifically: for peace, salvation, healing, justice",
      "When prompted, stop and linger in prayer",
      "Carry a small notebook to record what you pray and notice",
      "Do this consistently for one month before evaluating its fruit",
    ],
  },
  {
    id: "table-fellowship",
    name: "Table Fellowship",
    icon: "🍞",
    type: "corporate",
    frequency: "Weekly",
    description: "Intentional, unhurried sharing of meals with others as a spiritual practice. Jesus' most common context for ministry was the table. He ate with sinners, Pharisees, disciples, and strangers. The table is a theology: it declares equality before God, creates space for story, and forms community. Table fellowship is not just hospitality — it is a discipline of presence and generosity.",
    getting_started: [
      "Commit to one intentional shared meal per week with someone outside your household",
      "Prepare the space and the meal as an act of love, not performance",
      "Put phones away and practice full presence",
      "Ask good questions and practice listening more than speaking",
      "If comfortable, close with a brief prayer of thanksgiving for one another",
      "Rotate who you invite — include people outside your usual circle",
    ],
  },
  {
    id: "service-hiddenness",
    name: "Service in Hiddenness",
    icon: "🤫",
    type: "outward",
    frequency: "Weekly",
    description: "Jesus' instruction in Matthew 6 is striking: give, pray, and fast in secret. The discipline of hidden service directly attacks the ego's need for recognition. It is serving in ways that no one will know about except God. This form of service is particularly powerful because the absence of applause strips away impure motives and trains the soul to find its reward in God alone.",
    getting_started: [
      "Identify one act of service you can perform this week that no one will see",
      "Do not tell anyone — not even to share a prayer request about it",
      "Pay attention to what happens in your interior: relief, frustration, peace?",
      "Increase the cost of the hidden service over time",
      "Practice for 30 days and journal what you notice about your motives and freedom",
      "Ask God to search your heart: 'For whom am I doing this?'",
    ],
  },
];

interface Voice {
  id: string;
  name: string;
  era: string;
  context: string;
  bio: string;
  quote: string;
  contribution: string;
}

const VOICES_DISC: Voice[] = [
  {
    id: "kempis",
    name: "Thomas a Kempis",
    era: "1380-1471",
    context: "Medieval Catholic mystic, Augustinian monk",
    bio: "Thomas a Kempis spent most of his life in a Dutch monastery, writing, copying manuscripts, and guiding novices. His anonymity was itself a kind of discipline. 'The Imitation of Christ,' likely compiled from decades of his meditations, became the most widely read Christian devotional work outside the Bible. Its relentless focus on inner transformation over external achievement makes it as countercultural today as it was in the 15th century.",
    quote: "What doth it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility?",
    contribution: "Established the interior life — devotion, humility, and imitation of Christ — as the true measure of Christian maturity, over against theological achievement or religious celebrity.",
  },
  {
    id: "foster",
    name: "Richard Foster",
    era: "1942-present",
    context: "Quaker theologian, founder of Renovare",
    bio: "Richard Foster almost single-handedly reintroduced the classical disciplines to evangelical Protestantism. Raised in a Quaker tradition that valued inner silence and simplicity, Foster studied under Dallas Willard at Westmont College and went on to write 'Celebration of Discipline' in 1978. The book categorized disciplines into inward, outward, and corporate streams — a framework that has shaped a generation of Christians and pastors.",
    quote: "The desperate need today is not for a greater number of intelligent people, or gifted people, but for deep people.",
    contribution: "Brought the classical spiritual disciplines back into mainstream Protestant conversation, showing evangelicals that disciplines are not works-righteousness but means of grace.",
  },
  {
    id: "willard",
    name: "Dallas Willard",
    era: "1935-2013",
    context: "Philosopher, USC professor, spiritual formation theologian",
    bio: "Dallas Willard was a philosopher who thought Christianity made factual claims about reality — and that the disciplines were the reasonable response to those claims. In 'The Spirit of the Disciplines' (1988) and 'The Divine Conspiracy' (1998), he argued that Jesus' invitation was to apprenticeship in life under God's rule, not just forgiveness of sins. Willard's phrase 'training, not trying' captures his core insight: the disciplines train the whole person for a different kind of life.",
    quote: "Grace is not opposed to effort; it is opposed to earning. Effort is action; earning is attitude.",
    contribution: "Gave the disciplines a rigorous philosophical and theological foundation, arguing that formation of the whole person — body, soul, mind, and will — is the goal of Christian discipleship.",
  },
  {
    id: "barton",
    name: "Ruth Haley Barton",
    era: "1956-present",
    context: "Spiritual director, founder of Transforming Center",
    bio: "Ruth Haley Barton writes and teaches at the intersection of spiritual formation and leadership. Her books 'Sacred Rhythms' and 'Strengthening the Soul of Your Leadership' address the particular formation challenges faced by Christian leaders in ministry contexts — burnout, drivenness, the loss of interior life under the pressure of productivity. She draws deeply on the Ignatian tradition and the Desert Fathers to call leaders back to the interior.",
    quote: "We cannot give what we do not have. We cannot lead people to places we ourselves have not been.",
    contribution: "Applied the disciplines specifically to the context of ministry leadership, making the case that leaders need formation as much as — perhaps more than — anyone else.",
  },
  {
    id: "comer",
    name: "John Mark Comer",
    era: "1980-present",
    context: "Pastor, author, founder of Practicing the Way",
    bio: "John Mark Comer left a large megachurch pastorate to focus on teaching spiritual formation to a generation formed by smartphones, social media, and ambient distraction. His book 'The Ruthless Elimination of Hurry' (2019) brought the disciplines to a new audience by diagnosing hurry as the primary spiritual disease of modern life. Comer draws heavily on Dallas Willard and John Ortberg while translating their insights for a digital, post-Christian cultural moment.",
    quote: "Hurry is not just a practical problem. It's a spiritual problem. And it's killing us.",
    contribution: "Translated the classical disciplines for a digital-age audience, identifying hurry and distraction as the primary threats to spiritual formation in contemporary life.",
  },
];

const DISC_VIDEOS = [
  { videoId: "KbFKcFxqVlo", title: "What Are Spiritual Disciplines? — Tim Keller", channel: "Gospel in Life", description: "Keller on the purpose of spiritual disciplines: not to earn merit but to create the conditions in which God works transformation." },
  { videoId: "ACZbpLkY8To", title: "The Means of Grace — How God Shapes His People", channel: "Ligonier Ministries", description: "A theological account of the spiritual disciplines as means of grace — practices through which the Spirit forms Christlikeness." },
  { videoId: "fJnGJN6laqE", title: "Dallas Willard and the Spiritual Disciplines", channel: "Desiring God", description: "An introduction to Willard's framework for spiritual formation through disciplined practices — the renovation of the heart." },
  { videoId: "Z8lkuuhVkOI", title: "Solitude, Silence, and Prayer", channel: "The Gospel Coalition", description: "A practical and theological introduction to the inward disciplines of solitude, silence, and contemplative prayer." },
];

export default function DisciplinesPage() {
  const [records, setRecords] = useState<Record<string, DisciplineRecord>>(() => {
    try {
      const s = localStorage.getItem("vine_disciplines");
      return s ? JSON.parse(s) : {};
    } catch { return {}; }
  });

  const [mainTab, setMainTab] = usePersistedState<"tracker" | "theology" | "practices" | "voices" | "videos">("vine_disciplines_main_tab", "tracker");
  const [activeCategory, setActiveCategory] = usePersistedState<"all" | "inward" | "outward" | "corporate">("vine_disciplines_active_category", "all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [noteInput, setNoteInput] = useState("");
  const [selectedVoiceId, setSelectedVoiceId] = usePersistedState("vine_disciplines_selected_voice", "kempis");

  useEffect(() => {
    try { localStorage.setItem("vine_disciplines", JSON.stringify(records)); } catch {}
  }, [records]);

  const getRecord = (id: string): DisciplineRecord => records[id] ?? { id, timesThisMonth: 0, notes: "", committed: false };

  const toggleCommit = (id: string) => {
    setRecords((prev) => {
      const rec = getRecord(id);
      return { ...prev, [id]: { ...rec, committed: !rec.committed } };
    });
  };

  const logPractice = (id: string) => {
    const today = new Date().toISOString().split("T")[0];
    setRecords((prev) => {
      const rec = getRecord(id);
      return { ...prev, [id]: { ...rec, lastPracticed: today, timesThisMonth: rec.timesThisMonth + 1 } };
    });
  };

  const saveNote = (id: string) => {
    if (!noteInput.trim()) return;
    setRecords((prev) => {
      const rec = getRecord(id);
      return { ...prev, [id]: { ...rec, notes: noteInput.trim() } };
    });
    setNoteInput("");
  };

  const today = new Date().toISOString().split("T")[0];
  const filtered = DISCIPLINES.filter((d) => activeCategory === "all" || d.category === activeCategory);
  const committed = DISCIPLINES.filter((d) => getRecord(d.id).committed);
  const practicedToday = DISCIPLINES.filter((d) => getRecord(d.id).lastPracticed === today);
  const selected = DISCIPLINES.find((d) => d.id === selectedId);

  const CATEGORY_LABELS: Record<string, string> = {
    inward: "Inward (Personal)",
    outward: "Outward (Action)",
    corporate: "Corporate (Community)",
  };

  const diffLabel = (d: 1 | 2 | 3) => d === 3 ? "Advanced" : d === 2 ? "Intermediate" : "Beginner";
  const diffColor = (d: 1 | 2 | 3) => d === 3 ? "#EF4444" : d === 2 ? "#F59E0B" : GREEN;

  const typeColor = (type: "inward" | "outward" | "corporate") =>
    type === "inward" ? PURPLE : type === "outward" ? GREEN : "#4FBBAA";

  const selectedVoice = VOICES_DISC.find((v) => v.id === selectedVoiceId) ?? VOICES_DISC[0];

  return (
    <div className="min-h-screen" style={{ background: BG, color: TEXT }}>
      <Navbar />
      <main>
      <div className="pb-20" style={{ paddingTop: 80 }}>

        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-2">
          <div className="flex items-center gap-2 mb-4">
            <Star size={18} style={{ color: GREEN }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>Spiritual Disciplines</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-3">
            Train for{" "}
            <span style={{ background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              godliness.
            </span>
          </h1>
          <p className="text-lg max-w-2xl mb-6" style={{ color: "#6A6A88" }}>
            &ldquo;Train yourself to be godly.&rdquo; — 1 Timothy 4:7. The classic disciplines of the Christian life, with practical guides and progress tracking.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              { label: `${committed.length} Disciplines committed`, color: GREEN },
              { label: `${practicedToday.length} Practiced today`, color: PURPLE },
              { label: `${DISCIPLINES.length} Total disciplines`, color: "#4A4A68" },
            ].map((s) => (
              <div key={s.label} className="px-4 py-2 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="font-bold" style={{ color: s.color }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Tab Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div style={{ borderBottom: `1px solid ${BORDER}`, display: "flex", gap: 0 }}>
            {(["tracker", "theology", "practices", "voices", "videos"] as const).map(tab => (
              <button type="button" key={tab} onClick={() => setMainTab(tab)}
                style={{ background: "none", border: "none", borderBottom: mainTab === tab ? `2px solid ${GREEN}` : "2px solid transparent", color: mainTab === tab ? TEXT : MUTED, fontWeight: mainTab === tab ? 700 : 500, fontSize: 14, padding: "14px 18px", cursor: "pointer" }}>
                {tab === "tracker" ? "Disciplines" : tab === "theology" ? "📖 Theology" : tab === "practices" ? "✨ Practices" : tab === "voices" ? "🎓 Voices" : "▶️ Videos"}
              </button>
            ))}
          </div>
        </div>

        {/* Detail modal */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}>
            <div className="w-full max-w-2xl rounded-2xl p-6 max-h-[90vh] overflow-y-auto" style={{ background: CARD, border: `1px solid ${selected.color}30` }}>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selected.emoji}</span>
                  <div>
                    <h2 className="font-black text-xl" style={{ color: TEXT }}>{selected.name}</h2>
                    <span className="text-xs capitalize px-2 py-0.5 rounded-full font-bold" style={{ background: `${selected.color}15`, color: selected.color, border: `1px solid ${selected.color}30` }}>
                      {CATEGORY_LABELS[selected.category]}
                    </span>
                  </div>
                </div>
                <button aria-label="Close" type="button" onClick={() => setSelectedId(null)} style={{ color: "#4A4A68" }}><X size={20} /></button>
              </div>

              <p className="text-sm italic mb-3" style={{ color: "#8A8AA8" }}>{selected.tagline}</p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#C0C0D8" }}>{selected.description}</p>

              {/* Verse */}
              <div className="p-4 rounded-xl mb-5" style={{ background: "rgba(107,79,187,0.08)", border: "1px solid rgba(107,79,187,0.15)" }}>
                <p className="text-sm italic mb-1" style={{ color: "#C0C0D8" }}>&ldquo;{selected.verse}&rdquo;</p>
                <p className="text-xs font-bold" style={{ color: "#9B8FEB" }}>— {selected.verseRef}</p>
              </div>

              {/* How to practice */}
              <div className="mb-5">
                <h3 className="font-black text-sm mb-3" style={{ color: TEXT }}>How to Practice</h3>
                <div className="space-y-2">
                  {selected.howTo.map((step, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5" style={{ background: `${selected.color}20`, color: selected.color }}>{i + 1}</span>
                      <p className="text-sm" style={{ color: "#C0C0D8" }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teachers */}
              <div className="mb-5">
                <h3 className="font-black text-sm mb-2" style={{ color: TEXT }}>Learn From</h3>
                <div className="flex flex-wrap gap-2">
                  {selected.teachers.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-xl font-semibold" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#8A8AA8" }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Your notes */}
              <div className="mb-5">
                <h3 className="font-black text-sm mb-2" style={{ color: TEXT }}>Your Notes</h3>
                {getRecord(selected.id).notes ? (
                  <div className="p-3 rounded-xl mb-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <p className="text-sm" style={{ color: "#C0C0D8" }}>{getRecord(selected.id).notes}</p>
                  </div>
                ) : null}
                <div className="flex gap-2">
                  <input value={noteInput} onChange={(e) => setNoteInput(e.target.value)} aria-label="Add a personal note or reflection..." placeholder="Add a personal note or reflection..." className="flex-1 px-3 py-2 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: TEXT }} />
                  <button type="button" onClick={() => saveNote(selected.id)} className="px-3 py-2 rounded-xl text-xs font-bold" style={{ background: "rgba(58,125,86,0.1)", color: GREEN, border: "1px solid rgba(58,125,86,0.2)" }}>Save</button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button type="button"
                  onClick={() => { logPractice(selected.id); }}
                  className="flex-1 py-2.5 rounded-xl font-black text-sm flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)", color: BG }}
                >
                  <CheckCircle2 size={14} /> Log Practice Today
                </button>
                <button type="button"
                  onClick={() => toggleCommit(selected.id)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm"
                  style={{
                    background: getRecord(selected.id).committed ? "rgba(107,79,187,0.15)" : "rgba(255,255,255,0.04)",
                    color: getRecord(selected.id).committed ? "#9B8FEB" : "#6A6A88",
                    border: getRecord(selected.id).committed ? "1px solid rgba(107,79,187,0.35)" : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {getRecord(selected.id).committed ? "✓ Committed" : "Commit to This"}
                </button>
              </div>

              {getRecord(selected.id).timesThisMonth > 0 && (
                <p className="text-center mt-3 text-xs" style={{ color: "#4A4A68" }}>
                  <Flame size={10} className="inline mr-1" style={{ color: "#F59E0B" }} />
                  Practiced {getRecord(selected.id).timesThisMonth}x this month
                  {getRecord(selected.id).lastPracticed ? ` · Last: ${getRecord(selected.id).lastPracticed}` : ""}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Tab content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── TRACKER TAB ── */}
          {mainTab === "tracker" && (
            <div>
              {/* Category tabs */}
              <div className="flex gap-2 mb-6 flex-wrap">
                {([["all", "All Disciplines"], ["inward", "Inward"], ["outward", "Outward"], ["corporate", "Corporate"]] as const).map(([k, label]) => (
                  <button type="button"
                    key={k}
                    onClick={() => setActiveCategory(k)}
                    className="px-4 py-2 rounded-xl text-sm font-bold"
                    style={{ background: activeCategory === k ? "rgba(58,125,86,0.12)" : "rgba(255,255,255,0.04)", border: activeCategory === k ? "1px solid rgba(58,125,86,0.3)" : "1px solid rgba(255,255,255,0.08)", color: activeCategory === k ? GREEN : "#6A6A88" }}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((d) => {
                  const rec = getRecord(d.id);
                  const practicedNow = rec.lastPracticed === today;
                  return (
                    <div
                      key={d.id}
                      className="rounded-2xl p-5 cursor-pointer transition-all group"
                      style={{ background: rec.committed ? `${d.color}08` : CARD, border: rec.committed ? `1px solid ${d.color}25` : `1px solid ${BORDER}` }}
                      onClick={() => setSelectedId(d.id)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-3xl">{d.emoji}</span>
                        <div className="flex items-center gap-1.5">
                          {rec.committed && <span className="text-[10px] font-black px-2 py-0.5 rounded-full" style={{ background: `${d.color}15`, color: d.color, border: `1px solid ${d.color}30` }}>✓ Committed</span>}
                          {practicedNow && <span className="text-[10px] font-black px-2 py-0.5 rounded-full" style={{ background: "rgba(58,125,86,0.12)", color: GREEN, border: "1px solid rgba(58,125,86,0.3)" }}>Today ✓</span>}
                        </div>
                      </div>

                      <h3 className="font-black text-base mb-1" style={{ color: TEXT }}>{d.name}</h3>
                      <p className="text-xs mb-3 italic" style={{ color: "#6A6A88" }}>{d.tagline}</p>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full capitalize" style={{ background: "rgba(255,255,255,0.05)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}>
                          {d.category}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${diffColor(d.difficulty)}15`, color: diffColor(d.difficulty), border: `1px solid ${diffColor(d.difficulty)}30` }}>
                          {diffLabel(d.difficulty)}
                        </span>
                      </div>

                      {rec.timesThisMonth > 0 && (
                        <p className="text-xs" style={{ color: "#4A4A68" }}>
                          <Flame size={9} className="inline mr-0.5" style={{ color: "#F59E0B" }} />
                          {rec.timesThisMonth}x this month
                        </p>
                      )}

                      <div className="mt-3 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: d.color }}>
                        View Guide <ChevronRight size={12} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── THEOLOGY TAB ── */}
          {mainTab === "theology" && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-black mb-2" style={{ color: TEXT }}>Theology of the Disciplines</h2>
                <p style={{ color: MUTED, fontSize: 15 }}>Why we practice — the biblical and theological foundation beneath the disciplines.</p>
              </div>
              <div className="grid grid-cols-1 gap-5">
                {DISC_THEOLOGY.map((entry) => (
                  <div key={entry.id} className="rounded-2xl p-6" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl">{entry.icon}</span>
                      <div>
                        <h3 className="font-black text-lg mb-1" style={{ color: TEXT }}>{entry.title}</h3>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(107,79,187,0.15)", color: "#9B8FEB", border: "1px solid rgba(107,79,187,0.25)" }}>{entry.scripture}</span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#C0C0D8" }}>{entry.description}</p>
                    <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20` }}>
                      <span className="text-xs font-black shrink-0 mt-0.5" style={{ color: GREEN }}>KEY</span>
                      <p className="text-sm font-semibold" style={{ color: GREEN }}>{entry.key_point}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── PRACTICES TAB ── */}
          {mainTab === "practices" && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-black mb-2" style={{ color: TEXT }}>Deep Practice Guides</h2>
                <p style={{ color: MUTED, fontSize: 15 }}>{DISC_PRACTICES.length} practices explored in depth — history, method, and step-by-step guides for getting started.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {DISC_PRACTICES.map((p) => {
                  const tColor = typeColor(p.type);
                  return (
                    <div key={p.id} className="rounded-2xl p-6" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{p.icon}</span>
                          <div>
                            <h3 className="font-black text-base" style={{ color: TEXT }}>{p.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full capitalize" style={{ background: `${tColor}15`, color: tColor, border: `1px solid ${tColor}30` }}>{p.type}</span>
                              <span className="text-[10px] font-semibold" style={{ color: MUTED }}>{p.frequency}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: "#C0C0D8" }}>{p.description}</p>
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: MUTED }}>Getting Started</h4>
                        <div className="space-y-2">
                          {p.getting_started.map((step, i) => (
                            <div key={i} className="flex gap-3">
                              <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5" style={{ background: `${tColor}20`, color: tColor }}>{i + 1}</span>
                              <p className="text-sm" style={{ color: "#C0C0D8" }}>{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── VIDEOS TAB ── */}
          {mainTab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: "0 0 40px" }}>
              {DISC_VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                    src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                    <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── VOICES TAB ── */}
          {mainTab === "voices" && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-black mb-2" style={{ color: TEXT }}>Voices on Disciplines</h2>
                <p style={{ color: MUTED, fontSize: 15 }}>Teachers who have shaped how the church thinks about spiritual formation.</p>
              </div>
              <div className="flex gap-6" style={{ alignItems: "flex-start" }}>
                {/* Left panel — voice list */}
                <div className="shrink-0" style={{ width: 220 }}>
                  <div className="flex flex-col gap-2">
                    {VOICES_DISC.map((v) => (
                      <button type="button"
                        key={v.id}
                        onClick={() => setSelectedVoiceId(v.id)}
                        className="text-left rounded-xl p-3"
                        style={{
                          background: selectedVoiceId === v.id ? `${PURPLE}18` : "transparent",
                          border: selectedVoiceId === v.id ? `1px solid ${PURPLE}40` : `1px solid transparent`,
                          cursor: "pointer",
                        }}
                      >
                        <p className="font-bold text-sm" style={{ color: selectedVoiceId === v.id ? TEXT : MUTED }}>{v.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: "#6A6A88" }}>{v.era}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right panel — detail */}
                <div className="flex-1 rounded-2xl p-6" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                  <div className="mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${PURPLE}18`, color: "#9B8FEB", border: `1px solid ${PURPLE}30` }}>{selectedVoice.era}</span>
                  </div>
                  <h2 className="text-2xl font-black mt-3 mb-1" style={{ color: TEXT }}>{selectedVoice.name}</h2>
                  <p className="text-sm mb-4" style={{ color: MUTED }}>{selectedVoice.context}</p>

                  <div className="p-4 rounded-xl mb-5" style={{ background: "rgba(107,79,187,0.08)", border: "1px solid rgba(107,79,187,0.18)" }}>
                    <p className="text-base italic leading-relaxed" style={{ color: "#C0C0D8" }}>&ldquo;{selectedVoice.quote}&rdquo;</p>
                  </div>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#C0C0D8" }}>{selectedVoice.bio}</p>

                  <div className="p-4 rounded-xl" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20` }}>
                    <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: GREEN }}>Contribution</p>
                    <p className="text-sm" style={{ color: "#C0C0D8" }}>{selectedVoice.contribution}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
