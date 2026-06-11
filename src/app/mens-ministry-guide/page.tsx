"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "practices" | "lifestages" | "curriculum" | "leadership" | "resources" | "journal" | "videos";

const theologyPoints = [
  {
    title: "Men Are Made for Battle and Brotherhood",
    content: "Jonathan and David, Paul and Timothy, Jesus and the Twelve — Scripture is full of deep, covenantal male friendship. Men were not made for isolation but for brotherhood forged in shared mission and mutual loyalty. The friendship of David and Jonathan is called surpassing the love of women (2 Samuel 1:26) — not romantically, but in the depth of covenant commitment. The church must provide genuine male community, not merely programs that men attend. Men flourish when they have brothers who know their real life and still show up."
  },
  {
    title: "The Crisis of Male Discipleship",
    content: "Statistically, men are underrepresented in nearly every metric of church life: attendance (57% of congregations are female), small group participation, baptisms, and spiritual leadership in the home. David Murrow, in Why Men Hate Going to Church, argues that the church has not feminized theologically but culturally — in its aesthetics, communication style, relational expectations, and definition of spiritual maturity. Men who are wired for challenge, competition, and mission often find church irrelevant to their real lives. The solution is not to lower the bar but to raise it."
  },
  {
    title: "Biblical Masculinity vs. Cultural Masculinity",
    content: "The Bible presents neither the passive, disengaged man nor the domineering, self-serving man as the ideal. Ephesians 5 calls husbands to the most demanding form of love: self-giving sacrifice modeled on Christ. The warrior, protector, and provider archetypes are not to be abandoned but redeemed — strength placed under submission to God and in service of others. Meekness in Scripture is not weakness; it is bridled power. The strongest man in the room is the one who uses his strength for others rather than himself."
  },
  {
    title: "Accountability as Covenant",
    content: "James 5:16 commands believers to confess their sins to one another and pray for one another. This is not a suggestion for the emotionally brave — it is the normal practice of covenant community. The accountability group is distinct from the therapeutic group: names must be named, specific sins must be confessed, and specific commitments must be kept. Sin flourishes in secrecy. The man who has no one in his life who knows his real struggles — his pornography habit, his anger, his financial dishonesty, his spiritual dryness — is the most dangerous man in any congregation, because he is unseen and therefore unchecked."
  },
  {
    title: "Work, Vocation, and Identity",
    content: "Genesis 3:17-19 reveals that work is one of the primary arenas in which men feel the weight of the curse. Thorns and thistles, futility and toil — the ground resists. In response, men often derive their entire identity from their vocational success or failure. The gospel redefines a man's worth as received, not earned — rooted in adoption by the Father, not performance for the Father. Vocation is reframed not as the sum of a man's value but as one arena in which he serves his neighbor and glorifies God. The man who can fail at work without collapsing has understood the gospel."
  },
  {
    title: "Fatherhood as Discipleship",
    content: "Deuteronomy 6 places the primary responsibility for spiritual formation squarely on fathers: talk about these things when you sit at home, when you walk along the road, when you lie down, when you rise. The crisis of absent fatherhood — physically or spiritually — is the most significant upstream cause of nearly every social pathology we face. But the church can also raise up spiritual fathers (1 Corinthians 4:15 — Paul as father in the faith). Older men mentoring younger men is not a program idea; it is the apostolic pattern. The man who invests in younger men is fulfilling one of the most sacred callings available to him."
  },
  {
    title: "The Danger of the Elder Brother",
    content: "Luke 15:25-32 presents one of Scripture's most penetrating portraits of the religious man: the elder brother who is present but not celebratory, who serves but does not love, who is technically faithful but spiritually hollow. He has kept the rules, stayed home, and done his duty — and is furious when grace is extended to the prodigal. This is one of the most specific warnings in Scripture aimed at men who are already in the church, already serving, already morally respectable. The elder-brother spirit is pride disguised as faithfulness. The man who resents God's grace toward others has revealed that he was serving for a wage, not out of love. This failure is subtler and harder to diagnose than the prodigal's failure, which is why Jesus told the story."
  },
  {
    title: "Men Who Wept: Emotional Honesty in Scripture",
    content: "John 11:35 records that Jesus wept at the tomb of Lazarus without embarrassment or apology — in public, in front of both his disciples and his opponents. Jeremiah complained to God with remarkable directness: 'You deceived me, LORD, and I was deceived' (Jeremiah 20:7). Psalm 22 opens with the raw cry of desolation: 'My God, my God, why have you forsaken me?' The men of Scripture were not stoic. They grieved, raged, wept, complained, and cried out. The suppression of male emotion is a cultural imposition, not a biblical one. The church that holds up an image of Christian manhood as perpetual composure is not following the pattern of Christ, the prophets, or the psalmists. Men who cannot name their grief, fear, or sorrow are not stronger — they are more isolated, more prone to explosion, and less able to empathize with those they lead."
  }
];

const LIFE_STAGES = [
  {
    stage: "Young Man (18-30)",
    icon: "🔥",
    color: "#EF4444",
    challenges: [
      "Identity formation detached from career success",
      "Sexual integrity in the digital age (pornography)",
      "Marriage readiness vs. prolonged adolescence",
      "Finding mentors and meaningful male community",
      "Establishing spiritual disciplines before life's demands peak"
    ],
    callings: [
      "1 John 2:14 — 'young men, you are strong, and the word of God abides in you, and you have overcome the evil one'",
      "Flee youthful passions, pursue righteousness, faith, love (2 Tim 2:22)",
      "Find a Barnabas (mentor) and a Timothy (someone to invest in)"
    ],
    discipleshipFocus: "Establishing the foundation — daily Scripture, accountability, sexual purity, spiritual disciplines. A young man who builds these habits before marriage and children will carry them for life; one who doesn't will struggle to establish them under the pressures of the next stage.",
    practicalStep: "Find one older man (5-10 years ahead in life stage) who will meet you monthly. Prepare 3 specific questions each time. Don't just absorb — bring something back.",
  },
  {
    stage: "Early Family Man (30-45)",
    icon: "🏡",
    color: "#3B82F6",
    challenges: [
      "Marriage health under the weight of young children and career pressure",
      "Spiritual leadership of home that doesn't feel performative or crushing",
      "Maintaining male friendships as everyone's schedules implode",
      "Career ambition potentially displacing family priority",
      "The temptation to give church leadership what should go to family"
    ],
    callings: [
      "Ephesians 5:25 — love your wife as Christ loved the church",
      "Deuteronomy 6:7 — teach your children when you sit, walk, lie down, rise up",
      "Titus 2:2 — pattern for older men teaching younger"
    ],
    discipleshipFocus: "The crisis of this stage: most men are maximally busy precisely when maximum investment is required at home. The disciplines must be non-negotiable or they will simply not happen. Family devotions, even imperfect ones, matter. The father who prays with his children five minutes each morning will have more lasting impact than the father who attends every men's retreat.",
    practicalStep: "Start a family worship rhythm. Even 5 minutes: read one passage, ask one question, pray one prayer together. Do it before you're ready. Don't wait for a system.",
  },
  {
    stage: "Mid-Life Man (45-60)",
    icon: "⚓",
    color: "#6B4FBB",
    challenges: [
      "Mid-life disorientation — achievement and still feeling empty",
      "The second half question: is this all there is?",
      "Marriage entering the post-children season — the relationship that remains",
      "Health, mortality, and stewardship of the body",
      "The danger of career plateau producing bitterness or despair"
    ],
    callings: [
      "Moses at 80 beginning his greatest work (Num 11-12)",
      "Caleb at 85 asking for the hill country (Joshua 14:12)",
      "The man who plants trees whose shade he will never sit under"
    ],
    discipleshipFocus: "Mid-life is the most theologically rich season for men who have eyes to see it. The world's promises have been tested and found partly wanting. The man at 50 knows that career success does not satisfy, that health is uncertain, and that children leave. This can produce either bitter disillusionment or a deep, durable faith that the younger man cannot yet have. The mid-life man who stewards this season well becomes the most powerful discipler in the congregation.",
    practicalStep: "Write down 5 things you believed at 25 about what would make you happy. Evaluate each one honestly. What has held? What has failed? Bring these to God and to a trusted friend.",
  },
  {
    stage: "Empty Nest / Pre-Retirement (60-70)",
    icon: "🌳",
    color: "#10B981",
    challenges: [
      "Purpose redefinition after children leave",
      "Marriage rediscovery — who are we now that it's just us?",
      "Health management and stewardship of remaining capacity",
      "Financial faithfulness — enough vs. more",
      "The temptation to coast spiritually because the hard parenting years are over"
    ],
    callings: [
      "The elder statesman calling — Titus 2:2, older men teaching younger",
      "Caleb's spirit: 'give me this hill country'",
      "Paul at the end: 'I have fought the good fight, finished the race'"
    ],
    discipleshipFocus: "The empty nest season is a gift for men who use it wisely — time and perspective that the younger man cannot have. The church desperately needs men at this stage who have enough wisdom to be honest about their failures and enough life experience to be credible. The most neglected ministry in most churches is older men investing in younger men. This is the season to do it.",
    practicalStep: "Identify one younger man in your church (20s or 30s) who is at the stage you were 25 years ago. Reach out. Invite him to breakfast. Come prepared to talk about what you've learned — both what worked and what you'd do differently.",
  },
  {
    stage: "Senior Man (70+)",
    icon: "👑",
    color: "#D97706",
    challenges: [
      "Health limitations and the spiritual discipline of receiving care",
      "Grief — spouses, friends, capacities lost",
      "Leaving a legacy that outlasts the man himself",
      "The temptation to disengage from the church's life when capacity decreases",
      "Fear of death honestly faced and theologically equipped"
    ],
    callings: [
      "Psalm 71:18 — 'declare your power to the next generation, your mighty acts to all who are to come'",
      "Simeon in the temple — finishing well, eyes having seen salvation",
      "Paul writing 2 Timothy from prison — pouring out to the end"
    ],
    discipleshipFocus: "The senior man's most powerful spiritual act may be dying well — dying with hope, with trust, with the witness of a man who has banked everything on what he preached. This is not morbidity; it is Paul in Philippians 1:21. The man who can say 'to live is Christ and to die is gain' with genuine conviction, not just as a doctrinal position, is the most powerful testimony in the congregation. The senior man who continues to pray, serve, and invest even as capacity diminishes is the cloud of witnesses made visible.",
    practicalStep: "Write a letter to the significant younger people in your life — children, grandchildren, church members you have mentored — describing what you have learned about God. Seal it to be opened when you die or at age 80, whichever comes first.",
  },
];

const LEADERSHIP_PRINCIPLES = [
  {
    title: "Servant Leadership Is Not Passive Leadership",
    verse: "Mark 10:42-45",
    body: "Jesus's most direct teaching on leadership: 'Whoever wants to be great among you must be your servant, and whoever wants to be first must be slave of all.' This is not a call to passivity or indecision. The servant-leader initiates, decides, and bears the weight of outcomes — but he does so for others, not for himself. The distinction between servant leadership and passive leadership is this: the servant-leader gives himself for others' flourishing; the passive man withdraws to avoid the cost of engagement.",
    color: "#3B82F6",
  },
  {
    title: "Leadership Is Stewardship, Not Ownership",
    verse: "Matthew 25:14-30",
    body: "The parable of the talents is a leadership parable. The master entrusts, expects multiplication, and returns to evaluate. The wicked servant did not steal the talent; he buried it. He was judged not for taking what wasn't his but for failing to steward what was. Christian leadership is always stewardship — of resources, of relationships, of influence, of spiritual gifts. The man who treats his role, his platform, or his family as his own possession to manage for his own benefit has misunderstood the fundamental nature of his leadership.",
    color: "#D97706",
  },
  {
    title: "Prayer Is the Foundation of Christian Leadership",
    verse: "Nehemiah 1:4-5; 2:4",
    body: "Nehemiah prays before he speaks to the king (1:4). When the king asks an unexpected question, Nehemiah prays on the spot before answering (2:4). The pattern: prayer precedes every significant action. J. Oswald Sanders argues that the man whose prayer life is not growing is not growing as a leader. The leader who is too busy to pray has inverted the means and the end. Character is built in prayer; strategy follows from it. The church needs men who pray more than it needs men who plan.",
    color: "#3a7d56",
  },
  {
    title: "The Leader Develops Other Leaders",
    verse: "2 Timothy 2:2",
    body: "'The things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others.' The Pauline model: four generations of leadership in one verse (Paul → Timothy → reliable people → others). The leader who does not develop other leaders is a bottleneck, not a builder. The measure of a man's leadership is not what he accomplished in his lifetime but what continued after him. Moses's greatest act of leadership may have been the laying of hands on Joshua.",
    color: "#6B4FBB",
  },
  {
    title: "Accountability Preserves Leadership",
    verse: "Proverbs 11:14; 15:22",
    body: "Plans fail for lack of counsel, but with many advisers they succeed. The man who cannot be corrected will eventually fail publicly and significantly. The history of fallen Christian leaders is largely a history of men who removed themselves from genuine accountability — who surrounded themselves with admirers, not honest friends. Genuine accountability is not a corporate HR process; it is a covenant relationship with specific men who have the right and obligation to speak truth to your life.",
    color: "#EF4444",
  },
  {
    title: "Integrity Is Not a Leadership Technique",
    verse: "Psalm 78:72",
    body: "David 'shepherded them with integrity of heart; with skillful hands he led them.' Integrity precedes skill. The man of integrity leads from who he is; the man of techniques leads from what he does. Techniques can be learned and deployed without character; integrity cannot be faked in the long run. The leader who is different at home than at church, who is generous in public and miserly in private, who preaches courage and practices cowardice, is working against himself — the truth will eventually surface.",
    color: "#3a7d56",
  },
  {
    title: "The Leader Admits Failure",
    verse: "2 Corinthians 12:9-10",
    body: "'I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.' Paul's leadership model inverted every expectation of his culture — and ours. The Christian leader who admits failure, acknowledges weakness, and confesses sin publicly is not undermining his leadership; he is modeling the gospel he preaches. The man who is never wrong has made his authority the point, not Christ. The man who confesses publicly makes space for others to confess; the man who is always composed prevents it.",
    color: "#D97706",
  },
  {
    title: "Longevity Is a Form of Leadership",
    verse: "Hebrews 12:1",
    body: "The cloud of witnesses is a running metaphor: you are in a race, and the finish line matters. Many men lead brilliantly for a season and then collapse — morally, spiritually, or relationally. The men whose long-term faithfulness has shaped the church most deeply are often not the most gifted but the most persistent. Finishing well — at 70, with your marriage intact, your faith deeper than at 30, your children honoring God, the younger men around you better for having known you — is the ultimate leadership achievement.",
    color: "#6B4FBB",
  },
];

const practices = [
  {
    area: "Accountability Groups",
    color: "#DC2626",
    desc: "Same-sex groups of 3–5 men meeting weekly with real questions: pornography, anger, marriage, finances, spiritual discipline. Not a prayer request group.",
    principles: [
      "Ask specific questions, not vague ones — 'have you viewed pornography this week?' not 'how are you doing?'",
      "Keep the group small enough for genuine vulnerability",
      "Meet consistently — trust is built over time, not at retreats",
      "Every man must be both confessor and listener",
      "Hold each other to stated commitments week over week"
    ],
    caution: "An accountability group that never gets to actual sin confession is just a men's small group with a different name. Push past the surface."
  },
  {
    area: "Mentoring",
    color: "#8B5CF6",
    desc: "Older man investing in a younger man. Titus 2:2 pattern. Informal is better than formal program — fishing, coffee, side-by-side work.",
    principles: [
      "Match by life stage and interest, not just availability",
      "Let the relationship breathe — structured but not clinical",
      "The mentor shares his own failures, not just his wisdom",
      "Commit to at least one year — real formation takes time",
      "Celebrate when the younger man surpasses the older"
    ],
    caution: "Formalized mentoring programs often produce filled-in forms, not changed lives. Organic relationship with minimal structure outlasts bureaucratic matching."
  },
  {
    area: "Retreat & Wilderness",
    color: "#10B981",
    desc: "Annual men's retreat or wilderness experience. John Eldredge's Wild at Heart model: silence, challenge, Scripture, brotherhood. Men respond to challenge not comfort.",
    principles: [
      "Remove men from their normal environment — context shapes perception",
      "Include physical challenge: hiking, wilderness survival, hard labor",
      "Build in extended silence and solitude — not just group time",
      "Teach Scripture in a wilderness context: Elijah, David, Jesus in the desert",
      "Debrief with intention — what did God say to you?"
    ],
    caution: "A retreat that is merely a camping trip with a few devotionals will not break patterns. The goal is encounter, not recreation."
  },
  {
    area: "Physical Discipline Together",
    color: "#3B82F6",
    desc: "Training together builds brotherhood. Running club, gym, sports league, hiking group. The body matters; stewardship of physical health is a spiritual discipline.",
    principles: [
      "Men bond through shared physical challenge more naturally than through conversation",
      "The body is not separate from the soul — physical discipline shapes character",
      "Accountability for health and stewardship belongs in discipleship",
      "Early morning training creates a common rhythm and mutual commitment",
      "Use physical time to also pray, memorize Scripture, discuss theology"
    ],
    caution: "Physical training can become an idol or an escape. Ensure it serves brotherhood and holiness rather than replacing interior discipline."
  },
  {
    area: "Scripture & Theology",
    color: "#F59E0B",
    desc: "Men's Bible study. Expository, not topical. Challenge intellectually. Men respond to hard truths better than feel-good content.",
    principles: [
      "Work through whole books of the Bible, not just felt-need topics",
      "Assign reading and preparation — treat men as capable of intellectual rigor",
      "Discuss church history, theology, apologetics — men want to know why",
      "Invite hard questions without deflection",
      "The goal is men who can teach their families, not men who know facts"
    ],
    caution: "A men's Bible study that never confronts the men in the room has defaulted to entertainment. Scripture cuts — let it."
  },
  {
    area: "Service & Mission Together",
    color: "#EF4444",
    desc: "Men serving in community: building, feeding, prison ministry, disaster relief. Men are mobilized by mission not maintenance.",
    principles: [
      "Give men a specific, concrete task with a visible outcome",
      "Prison ministry, homeless outreach, and manual labor attract men who disengage in traditional settings",
      "Frame service as mission, not just charity — you are going as ambassadors of the kingdom",
      "Debrief together: what did you see? what did God do?",
      "Connect local service to global mission — the same impulse serves both"
    ],
    caution: "Men can serve without being transformed if there is no theological integration. Service without discipleship produces moralism."
  }
];

const curriculum = [
  {
    name: "Disciplines of a Godly Man",
    author: "R. Kent Hughes",
    publisher: "Crossway",
    focus: "Classic Reformed guide to male spiritual disciplines: prayer, Scripture, purity, work, family, friendship",
    age: "Adult men",
    theology: "Reformed / Evangelical",
    note: "Highly recommended for accountability groups. Chapter-by-chapter structure makes it ideal for weekly meetings. Honest, practical, and doctrinally serious."
  },
  {
    name: "Wild at Heart",
    author: "John Eldredge",
    publisher: "Thomas Nelson",
    focus: "The masculine soul, adventure, and recovering a man's heart for God and others",
    age: "Adult men — especially men who feel disconnected from church",
    theology: "Evangelical / needs theological supplementing",
    note: "Widely used but theologically uneven. Helpful for reaching men who feel emasculated or bored by church. Read with discernment and supplement with more robust theology."
  },
  {
    name: "The Masculine Mandate",
    author: "Richard Phillips",
    publisher: "Reformation Trust",
    focus: "Biblical theology of man's calling drawn from Genesis: work, keep, lead, provide",
    age: "Adult men",
    theology: "Reformed / PCA",
    note: "More theologically robust than Eldredge. Written by a PCA pastor. Excellent for study groups wanting a biblical foundation for masculinity. Highly recommended."
  },
  {
    name: "Manhood Restored",
    author: "Eric Mason",
    publisher: "B&H Books",
    focus: "Masculinity through the gospel lens from an urban perspective: race, fatherhood, sexuality, vocation",
    age: "Adult men",
    theology: "Gospel-centered / Reformed Baptist",
    note: "Gospel-centered and culturally aware. Addresses issues other masculinity books avoid: race, systemic factors, urban context. Excellent for diverse congregations."
  },
  {
    name: "Man Alive",
    author: "Patrick Morley",
    publisher: "Man in the Mirror",
    focus: "Practical discipleship for men at every life stage; small group curriculum format",
    age: "Adult men — all life stages",
    theology: "Evangelical / Broadly applicable",
    note: "Widely used in church men's ministries across denominations. Accessible and practical. Good for a first men's small group curriculum."
  },
  {
    name: "True Faced",
    author: "Bill Thrall & Bruce McNicol",
    publisher: "NavPress",
    focus: "Grace-based identity vs. performance-based living; breaking cycles of shame and striving",
    age: "Adult men — especially those stuck in shame cycles",
    theology: "Evangelical / Grace-centered",
    note: "Particularly powerful for men who live in chronic shame and performance. Breaks the lie that God's acceptance is contingent on our improvement. Life-changing for many."
  },
  {
    name: "Spiritual Leadership",
    author: "J. Oswald Sanders",
    publisher: "Moody Publishers",
    focus: "The foundations of Christian leadership: prayer, character, sacrifice, and the cost of genuine leadership",
    age: "Adult men — especially those in or preparing for leadership roles",
    theology: "Evangelical / Broadly applicable",
    note: "Written by the former director of China Inland Mission. Sanders argues that prayer is the irreducible foundation of leadership — the man whose prayer life is not growing is not growing as a leader. A classic that rewards re-reading at every decade. Widely recommended across denominational lines."
  },
  {
    name: "The Intentional Father",
    author: "Jon Tyson",
    publisher: "Baker Books",
    focus: "12 rites of passage for raising sons; deliberate, multi-year family discipleship journey",
    age: "Fathers of sons — especially ages 10-18",
    theology: "Evangelical / Broadly applicable",
    note: "Tyson describes how he designed a deliberate, multi-year discipleship journey for his own son. Practical family discipleship that any father can adapt and implement regardless of church tradition or theological background."
  }
];

const resources = [
  {
    title: "Man in the Mirror",
    author: "Patrick Morley / Organization",
    type: "Ministry Organization",
    desc: "Organization providing men's small group curriculum, training, and coaching for churches. One of the most established men's ministry networks in the US. Resources span evangelism, discipleship, and leadership development.",
    url: "https://maninthemirror.org"
  },
  {
    title: "Resolute Bible Club",
    author: "Resolute",
    type: "App / Devotional",
    desc: "Men's devotional app with accountability features. Daily Bible readings, video teaching, and built-in tools for accountability group use. Designed specifically for men's discipleship rhythms.",
    url: "https://resolute.org"
  },
  {
    title: "Every Man Ministries",
    author: "Steve Arterburn",
    type: "Ministry Organization",
    desc: "Sexual integrity focus for men. Resources, conferences, and support groups for men struggling with pornography and sexual addiction. One of the most trusted organizations in this specific arena.",
    url: "https://everymanministries.com"
  },
  {
    title: "Iron Sharpens Iron Conference",
    author: "National Conference",
    type: "Conference",
    desc: "National men's conference tour held in cities across the US. One-day format with multiple speakers, worship, and breakout sessions. Excellent for mobilizing a men's group and creating a shared experience.",
    url: "https://ironsharpensiron.net"
  },
  {
    title: "No More Christian Nice Guy",
    author: "Paul Coughlin",
    type: "Book",
    desc: "Confronting the epidemic of passivity in Christian men. Coughlin argues that the church has praised a false meekness that produces compliant, disengaged men rather than courageous, self-giving ones. Practical, honest, and provocative."
  },
  {
    title: "The Intentional Father",
    author: "Jon Tyson",
    type: "Book",
    desc: "Twelve rites of passage for raising sons into mature men. Tyson describes how he designed a deliberate, multi-year discipleship journey for his son. Practical family discipleship guide that any father can adapt and implement."
  }
];

export default function MensMinistryGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_mens-ministry-guide_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedCurriculum, setSelectedCurriculum] = useState(curriculum[0]);
  const [openStage, setOpenStage] = useState<string | null>(null);

  const toggle = (k: string) => setExpanded(p => ({ ...p, [k]: !p[k] }));

  const [mmgEntries, setMmgEntries] = useState<{ id: string; date: string; challenge: string; practice: string; step: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_mmg_entries") ?? "[]"); } catch { return []; }
  });
  const [mmgForm, setMmgForm] = useState({ challenge: "", practice: "", step: "" });
  const [mmgSaved, setMmgSaved] = useState(false);
  useEffect(() => { try { localStorage.setItem("vine_mmg_entries", JSON.stringify(mmgEntries)); } catch {} }, [mmgEntries]);
  const saveMmgEntry = () => {
    if (!mmgForm.challenge.trim()) return;
    setMmgEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...mmgForm }, ...prev]);
    setMmgForm({ challenge: "", practice: "", step: "" });
    setMmgSaved(true); setTimeout(() => setMmgSaved(false), 2000);
  };
  const deleteMmgEntry = (id: string) => setMmgEntries(prev => prev.filter(e => e.id !== id));

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Brotherhood" },
    { id: "practices", label: "Core Practices" },
    { id: "lifestages", label: "Life Stages" },
    { id: "curriculum", label: "Curriculum Guide" },
    { id: "leadership", label: "Leadership" },
    { id: "resources", label: "Resources" },
    { id: "journal", label: "📓 My Journal" },
    { id: "videos", label: "🎬 Videos" }
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)", fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: PURPLE, color: "#fff", padding: "4px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            MEN&apos;S MINISTRY
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, margin: "0 0 12px" }}>
            Men&apos;s Ministry Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
            Men are underrepresented, under-discipled, and under-challenged in the modern church. Here is a theology, a set of practices, and a resource list for forming men who flourish as brothers, fathers, workers, and leaders.
          </p>
        </div>

        {/* Stat Banner */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 14, marginBottom: 32 }}>
          {[
            { num: "57%", label: "Of church attendees are women" },
            { num: "33%", label: "Of men never open their Bible outside church" },
            { num: "1 in 6", label: "Christian men regularly view pornography" },
            { num: "72%", label: "Of fathers who practice faith raise faithful children" },
            { num: "90%", label: "Of men who become Christians do so before age 30" },
            { num: "3x", label: "More likely to stay in church if father attended regularly" }
          ].map(s => (
            <div key={s.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 14, textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: GREEN }}>{s.num}</div>
              <div style={{ fontSize: 11, color: MUTED, marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#000" : TEXT,
                border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`,
                borderRadius: 8, padding: "8px 18px", cursor: "pointer", fontWeight: 600, fontSize: 14
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Theology */}
        {activeTab === "theology" && (
          <div style={{ maxWidth: 720 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 20 }}>
              Before strategy, models, or curriculum, a theology of men&apos;s ministry must be built. What does Scripture actually say about men — their design, their failures, and their calling in the body of Christ?
            </p>

            {/* Key Scripture Anchors */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 10, marginBottom: 28 }}>
              {[
                { ref: "1 Cor 16:13", text: "\"Act like men, be strong\"" },
                { ref: "Deut 6:6-7", text: "\"Teach them to your children\"" },
                { ref: "Titus 2:2", text: "\"Older men, be sober, dignified, self-controlled\"" },
                { ref: "Eph 5:25", text: "\"Husbands, love as Christ loved\"" },
                { ref: "James 5:16", text: "\"Confess your sins to one another\"" },
                { ref: "2 Tim 2:2", text: "\"Entrust to reliable people who will teach others\"" },
                { ref: "Prov 27:17", text: "\"As iron sharpens iron, so one man sharpens another\"" },
                { ref: "Josh 1:9", text: "\"Be strong and courageous. Do not be afraid\"" },
              ].map(s => (
                <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px" }}>
                  <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 4 }}>{s.ref}</div>
                  <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic", lineHeight: 1.5 }}>{s.text}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 12, color: MUTED, marginBottom: 20 }}>
              Click any topic below to expand the full theological treatment.
            </p>
            {theologyPoints.map((pt, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: 12 }}>
                <button type="button"
                  onClick={() => toggle(`pt-${i}`)}
                  style={{
                    width: "100%", background: "none", border: "none", color: TEXT,
                    padding: "16px 20px", textAlign: "left", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontWeight: 700, fontSize: 15
                  }}
                >
                  {pt.title}
                  <span style={{ color: MUTED, flexShrink: 0, marginLeft: 12 }}>{expanded[`pt-${i}`] ? "−" : "+"}</span>
                </button>
                {expanded[`pt-${i}`] && (
                  <div style={{ padding: "0 20px 16px", color: MUTED, lineHeight: 1.7, fontSize: 14 }}>
                    {pt.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Practices */}
        {activeTab === "practices" && (
          <div>
            <div style={{ maxWidth: 720, marginBottom: 28 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 16 }}>
                Theology must translate into practice. These six practices are the most consistently effective approaches to men&apos;s discipleship — not as a checklist, but as a menu. A healthy men&apos;s ministry will typically have 2-3 of these operating well at any given time.
              </p>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#F59E0B", fontSize: 16 }}>⚠</span>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0 }}>
                  Each practice below includes a caution. Read the cautions — they represent the most common failure modes observed across men&apos;s ministries.
                </p>
              </div>
            </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, borderTop: `3px solid ${p.color}` }}>
                <h3 style={{ margin: "0 0 10px", fontSize: 17 }}>{p.area}</h3>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</p>
                <div style={{ marginBottom: 14 }}>
                  {p.principles.map((pr, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                      <div style={{ color: GREEN, flexShrink: 0, fontWeight: 700, fontSize: 13 }}>✓</div>
                      <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.5 }}>{pr}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: BG, borderRadius: 8, padding: 10 }}>
                  <span style={{ fontSize: 11, color: "#F59E0B", fontWeight: 700 }}>⚠ </span>
                  <span style={{ fontSize: 12, color: MUTED }}>{p.caution}</span>
                </div>
              </div>
            ))}
          </div>
          </div>
        )}

        {/* Life Stages */}
        {activeTab === "lifestages" && (
          <div style={{ maxWidth: 760 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28 }}>
              Men face distinct challenges and callings at each stage of life. Effective men&apos;s ministry addresses where men actually are — not where we wish they were. Click each stage to see the specific challenges, Scripture callings, discipleship focus, and practical next step.
            </p>

            {/* Life Stage Key Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 12, marginBottom: 32 }}>
              {[
                { stage: "18–30", label: "Foundation years — habits set here often persist for life" },
                { stage: "30–45", label: "Highest-pressure season — maximum demand, least flexibility" },
                { stage: "45–60", label: "Mid-life recalibration — richest season for honest faith" },
                { stage: "60–70", label: "Legacy season — the church needs your wisdom most now" },
                { stage: "70+", label: "Finishing strong — dying well is the final testimony" },
              ].map(s => (
                <div key={s.stage} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 14, textAlign: "center" }}>
                  <div style={{ fontSize: 18, fontWeight: 900, color: GREEN, marginBottom: 6 }}>{s.stage}</div>
                  <div style={{ fontSize: 11, color: MUTED, lineHeight: 1.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
            {LIFE_STAGES.map((ls) => {
              const isOpen = openStage === ls.stage;
              return (
                <div key={ls.stage} style={{ background: CARD, border: `1px solid ${isOpen ? ls.color : BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden", transition: "border-color 0.2s" }}>
                  <button
                    type="button"
                    onClick={() => setOpenStage(isOpen ? null : ls.stage)}
                    style={{
                      width: "100%", background: "none", border: "none", color: TEXT,
                      padding: "18px 22px", textAlign: "left", cursor: "pointer",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ fontSize: 24 }}>{ls.icon}</span>
                      <span style={{ fontWeight: 800, fontSize: 16, color: isOpen ? ls.color : TEXT }}>{ls.stage}</span>
                    </div>
                    <span style={{ color: MUTED, flexShrink: 0, fontSize: 20, fontWeight: 300 }}>{isOpen ? "−" : "+"}</span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: "0 22px 22px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 16, marginBottom: 18 }}>

                        {/* Challenges */}
                        <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                          <div style={{ fontSize: 11, color: "#EF4444", fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>CHALLENGES</div>
                          {ls.challenges.map((c, ci) => (
                            <div key={ci} style={{ display: "flex", gap: 8, marginBottom: 7 }}>
                              <div style={{ color: "#EF4444", flexShrink: 0, fontSize: 13, marginTop: 1 }}>▸</div>
                              <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.5 }}>{c}</div>
                            </div>
                          ))}
                        </div>

                        {/* Callings */}
                        <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                          <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>SCRIPTURE CALLINGS</div>
                          {ls.callings.map((c, ci) => (
                            <div key={ci} style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                              <div style={{ color: GREEN, flexShrink: 0, fontSize: 13, marginTop: 1 }}>✦</div>
                              <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.55, fontStyle: "italic" }}>{c}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Discipleship Focus */}
                      <div style={{ background: BG, borderRadius: 10, padding: 16, marginBottom: 14 }}>
                        <div style={{ fontSize: 11, color: PURPLE, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>DISCIPLESHIP FOCUS</div>
                        <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, margin: 0 }}>{ls.discipleshipFocus}</p>
                      </div>

                      {/* Practical Step */}
                      <div style={{ borderLeft: `3px solid ${ls.color}`, paddingLeft: 14 }}>
                        <div style={{ fontSize: 11, color: ls.color, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>PRACTICAL STEP</div>
                        <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.6, margin: 0 }}>{ls.practicalStep}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Life Stage Mentoring Note */}
            <div style={{ marginTop: 24, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>🔗</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>The Mentoring Chain</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                    Effective men&apos;s ministry creates connections across life stages. The Young Man (18-30) needs an Early Family Man (30-45) who has recently navigated what he faces. The Early Family Man needs a Mid-Life Man who has survived the crucible of young children and career. The Mid-Life Man needs a Senior Man who can speak to the second half. Every man should have someone ahead of him and someone behind him. The church that facilitates these connections is doing the work of Titus 2 — not as a program, but as a culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Curriculum */}
        {activeTab === "curriculum" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
                Select any title to see the full summary, audience, and theological notes in the panel on the right.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {curriculum.map(c => (
                  <div
                    key={c.name}
                    onClick={() => setSelectedCurriculum(c)}
                    style={{
                      background: selectedCurriculum.name === c.name ? PURPLE + "22" : CARD,
                      border: `2px solid ${selectedCurriculum.name === c.name ? PURPLE : BORDER}`,
                      borderRadius: 10, padding: 16, cursor: "pointer"
                    }}
                  >
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: MUTED }}>{c.author} · {c.publisher}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              width: 340, flexShrink: 0, background: CARD, border: `1px solid ${BORDER}`,
              borderRadius: 12, padding: 24, position: "sticky", top: 20
            }}>
              <h3 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 800 }}>{selectedCurriculum.name}</h3>
              <div style={{ fontSize: 12, color: PURPLE, fontWeight: 700, marginBottom: 14 }}>{selectedCurriculum.author} — {selectedCurriculum.publisher}</div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 4 }}>FOCUS</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{selectedCurriculum.focus}</p>
              </div>
              <div style={{ marginBottom: 10, borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, marginBottom: 4 }}>AUDIENCE</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{selectedCurriculum.age}</p>
              </div>
              <div style={{ marginBottom: 10, borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, marginBottom: 4 }}>THEOLOGY</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{selectedCurriculum.theology}</p>
              </div>
              <div style={{ background: BG, borderRadius: 8, padding: 10 }}>
                <p style={{ fontSize: 12, fontStyle: "italic", color: MUTED, margin: 0 }}>{selectedCurriculum.note}</p>
              </div>
            </div>
          </div>
        )}

        {/* Leadership */}
        {activeTab === "leadership" && (
          <div>
            <div style={{ maxWidth: 720, marginBottom: 28 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 20 }}>
                Christian male leadership is neither passive nor domineering — it is servant leadership that initiates, decides, and bears cost for the flourishing of others. These eight principles are grounded in Scripture and tested in the long arc of Christian history.
              </p>
              {/* Leadership Key Tensions */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 8 }}>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 16 }}>
                  <div style={{ fontSize: 11, color: "#EF4444", fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>FAILURE MODES TO AVOID</div>
                  {[
                    "Passivity — leading by non-decision",
                    "Domination — leading for self-benefit",
                    "People-pleasing — leading by consensus",
                    "Isolation — leading without accountability",
                    "Short-termism — optimizing for the moment",
                    "Platform-building — leading for personal brand",
                    "Burnout — giving out without taking in"
                  ].map((f, fi) => (
                    <div key={fi} style={{ display: "flex", gap: 8, marginBottom: 7 }}>
                      <div style={{ color: "#EF4444", flexShrink: 0, fontSize: 12 }}>✕</div>
                      <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.5 }}>{f}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 16 }}>
                  <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>MARKS OF SERVANT LEADERSHIP</div>
                  {[
                    "Initiates for others' benefit, not his own",
                    "Absorbs cost rather than passing it on",
                    "Tells the truth even when it costs him",
                    "Develops those around him toward independence",
                    "Outlasts the season — finishes well",
                    "Welcomes correction from trusted men",
                    "Prays before he acts"
                  ].map((m, mi) => (
                    <div key={mi} style={{ display: "flex", gap: 8, marginBottom: 7 }}>
                      <div style={{ color: GREEN, flexShrink: 0, fontSize: 12 }}>✓</div>
                      <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.5 }}>{m}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 20 }}>
              {LEADERSHIP_PRINCIPLES.map((lp, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, borderTop: `3px solid ${lp.color}` }}>
                  <div style={{
                    display: "inline-block", background: lp.color + "22", color: lp.color,
                    fontSize: 11, fontWeight: 700, letterSpacing: 1,
                    padding: "3px 10px", borderRadius: 20, marginBottom: 12
                  }}>
                    {lp.verse}
                  </div>
                  <h3 style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 800, lineHeight: 1.4 }}>{lp.title}</h3>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{lp.body}</p>
                </div>
              ))}
            </div>

            {/* Leadership Closing Quote */}
            <div style={{ marginTop: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
              <div style={{ borderLeft: `4px solid ${PURPLE}`, paddingLeft: 20 }}>
                <p style={{ fontSize: 15, color: TEXT, lineHeight: 1.8, fontStyle: "italic", margin: "0 0 12px" }}>
                  &ldquo;The world is waiting for men who are not for sale; men who are honest, sound from center to circumference, true to the heart&apos;s core; men with consciences as steady as the needle to the pole; men who will stand for the right if the heavens totter and the earth reels; men who can tell the truth and look the world and the devil in the face. Men who neither brag nor run; men that neither flag nor flinch; men who can have courage without shouting it; men in whom the courage of everlasting life runs still, deep, and strong.&rdquo;
                </p>
                <div style={{ fontSize: 12, color: PURPLE, fontWeight: 700 }}>— A. T. Pierson</div>
              </div>
            </div>
          </div>
        )}

        {/* Resources */}
        {activeTab === "resources" && (
          <div>
            <div style={{ maxWidth: 720, marginBottom: 24 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 0 }}>
                Organizations, books, apps, and conferences specifically proven in men&apos;s discipleship contexts. Each entry has been selected for track record, theological substance, and practical applicability in a local church setting.
              </p>
            </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {resources.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 6 }}>{r.type.toUpperCase()}</div>
                <h3 style={{ margin: "0 0 4px", fontSize: 16 }}>{r.title}</h3>
                <div style={{ fontSize: 13, color: PURPLE, marginBottom: 10 }}>{r.author}</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: r.url ? 14 : 0 }}>{r.desc}</p>
                {r.url && (
                  <a
                    href={r.url}
                    target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: 12, color: GREEN, textDecoration: "none", fontWeight: 700 }}
                  >
                    Visit Resource →
                  </a>
                )}
              </div>
            ))}
          </div>
          </div>
        )}
        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Men&apos;s Ministry Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20 }}>Record challenges, practices you&apos;re developing, and next steps as a man in community.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                <input value={mmgForm.challenge} onChange={e => setMmgForm(f => ({ ...f, challenge: e.target.value }))}
                  placeholder="What challenge or area of growth are you working on?" aria-label="Challenge"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                <textarea value={mmgForm.practice} onChange={e => setMmgForm(f => ({ ...f, practice: e.target.value }))}
                  placeholder="What practice or discipline are you building?" aria-label="Practice"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, minHeight: 80, resize: "vertical", fontFamily: "inherit" }} />
                <input value={mmgForm.step} onChange={e => setMmgForm(f => ({ ...f, step: e.target.value }))}
                  placeholder="What's your next concrete step? (optional)" aria-label="Next step"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                <button type="button" onClick={saveMmgEntry}
                  style={{ padding: "10px 20px", background: PURPLE, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", alignSelf: "flex-start" }}>
                  {mmgSaved ? "Saved ✓" : "Save Entry"}
                </button>
              </div>
              {mmgEntries.length === 0 && <p style={{ color: MUTED, fontSize: 14 }}>No entries yet. Record your first men&apos;s ministry reflection above.</p>}
              {mmgEntries.map(e => (
                <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 16, marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                    <button type="button" onClick={() => deleteMmgEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 14 }}>✕</button>
                  </div>
                  <p style={{ color: TEXT, fontWeight: 700, fontSize: 14, margin: "0 0 4px" }}>{e.challenge}</p>
                  {e.practice && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: "0 0 4px" }}>{e.practice}</p>}
                  {e.step && <p style={{ color: GREEN, fontSize: 13, fontStyle: "italic", margin: 0 }}>→ {e.step}</p>}
                </div>
              ))}
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
                  { videoId: "gV9JugO_5Mk", title: "The Strongest Warning I've Ever Given to Men", channel: "Pastor Mark Driscoll", description: "A direct, serious challenge to men about their responsibilities as husbands, fathers, and leaders — what Scripture demands and what is at stake." },
                  { videoId: "ej_6dVdJSIU", title: "How a Real Man Takes Ground", channel: "Pastor Mark Driscoll", description: "Driscoll on what it means for a man to take spiritual ground in his home, his work, and his community — not through domination but through servant leadership." },
                  { videoId: "GQI72THyO5I", title: "David Murrow Interviews Mark Driscoll on Men and Church", channel: "David Murrow", description: "A revealing conversation between the author of Why Men Hate Going to Church and the pastor who built one of the most male-attended churches in America." },
                  { videoId: "krxcqH522uo", title: "Real Men: Vision for Men's Ministry", channel: "Pastor Mark Driscoll", description: "A vision for what genuine men's ministry looks like — not retreats and devotionals but covenant brotherhood, accountability, and mission-driven discipleship." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
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
