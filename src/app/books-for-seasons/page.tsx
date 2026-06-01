"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "books" | "seasons" | "guides" | "voices";

const SEASON_FILTERS = ["All", "New Believer", "Deep Grief", "Doubt & Crisis", "Marriage & Family", "Calling & Vocation", "Suffering & Illness", "Spiritual Dryness", "Anger & Forgiveness"];

const BOOKS = [
  {
    title: "Mere Christianity",
    author: "C.S. Lewis",
    year: 1952,
    season: "New Believer",
    color: GREEN,
    publisher: "HarperOne",
    description: "Still the finest introduction to Christian belief in print. Lewis — a former atheist Oxford professor — begins with the moral argument and builds to the Incarnation, the Atonement, and what Christian living looks like. Every sentence is calibrated to the skeptical, intelligent non-believer. Perfect for new Christians who came from secular backgrounds and want intellectual grounding.",
    for_whom: "New believers; skeptical seekers; anyone who wants to understand the basics of Christianity without being talked down to",
    best_quote: "If I find in myself a desire which no experience in this world can satisfy, the most probable explanation is that I was made for another world.",
    where_to_get: "Everywhere — Amazon, Christian bookstores, used bookstores. One of the most printed books of the 20th century.",
    initials: "MC",
  },
  {
    title: "Knowing God",
    author: "J.I. Packer",
    year: 1973,
    season: "New Believer",
    color: PURPLE,
    publisher: "IVP",
    description: "Packer's masterwork. Knowing God is a systematic exploration of who God is — His attributes, His ways with humanity, His relationship with His people — written with a pastoral warmth that makes doctrine feel like good news. It is the book most often cited by mature Christians as the one that deepened their knowledge of God more than any other.",
    for_whom: "New believers who want depth; any Christian who has been a believer for years but feels they do not really know God deeply",
    best_quote: "Knowing about God is crucially important for the living of our lives. As it would be cruel to an Amazonian tribesman to fly him to London, put him in a car, and tell him to drive, so we are cruel to ourselves if we try to live in this world without knowing about the God whose world it is.",
    where_to_get: "IVP Books; Amazon; Christian bookstores",
    initials: "KG",
  },
  {
    title: "A Grief Observed",
    author: "C.S. Lewis",
    year: 1961,
    season: "Deep Grief",
    color: "#EF4444",
    publisher: "HarperOne",
    description: "Lewis wrote this raw journal in the months after his wife Joy Davidman died of cancer. He does not offer comfort or platitudes. He records his experience of grief with devastating honesty — including the feeling that God has slammed the door in his face. It is the most honest account of Christian grief ever written, and it ends not with easy resolution but with hard-won trust.",
    for_whom: "Anyone who has lost someone they deeply loved; anyone angry at God over loss; people who want honesty rather than comfort",
    best_quote: "No one ever told me that grief felt so like fear. I am not afraid, but the sensation is like being afraid. The same fluttering in the stomach, the same restlessness, the yawning.",
    where_to_get: "Amazon, Christian bookstores, libraries — widely available",
    initials: "AGO",
  },
  {
    title: "When God Weeps",
    author: "Joni Eareckson Tada & Steven Estes",
    year: 1997,
    season: "Deep Grief",
    color: "#F59E0B",
    publisher: "Zondervan",
    description: "Joni Eareckson Tada became a quadriplegic at 17 after a diving accident. For 50+ years she has lived with chronic pain, depression, and disability — and has become the most credible voice on suffering in the evangelical world. This book addresses why God allows suffering with complete theological seriousness and pastoral depth. It does not explain away the pain; it places it in a larger story.",
    for_whom: "Those in chronic pain; those with terminal or severe illness; caregivers; anyone asking why God allows this specific suffering",
    best_quote: "God permits what he hates to achieve what he loves.",
    where_to_get: "Zondervan; Amazon; joniandfriends.org",
    initials: "WGW",
  },
  {
    title: "Walking with God through Pain and Suffering",
    author: "Timothy Keller",
    year: 2013,
    season: "Suffering & Illness",
    color: "#3B82F6",
    publisher: "Dutton",
    description: "Keller wrote this book while receiving treatment for prostate cancer. It is the most comprehensive treatment of the problem of suffering from an evangelical perspective — covering the philosophical problem (why would a good God allow this?), the cultural problem (our culture has no framework for suffering), and the pastoral problem (what do you do with your own suffering?). Part Three is a sustained meditation on how to walk with God through personal suffering.",
    for_whom: "Anyone facing serious illness; Christians who want both intellectual and pastoral engagement with suffering; those who feel their faith wavering under pain",
    best_quote: "The Christian understanding of suffering says: you are more sinful than you ever dared believe, and you are more loved than you ever dared hope. Both of these together produce the capacity to suffer faithfully.",
    where_to_get: "Dutton / Penguin; Amazon; gospel in life website",
    initials: "WGP",
  },
  {
    title: "Night",
    author: "Elie Wiesel",
    year: 1960,
    season: "Deep Grief",
    color: PURPLE,
    publisher: "Hill and Wang",
    description: "Not a Christian book — Wiesel was Jewish — but widely used by Christian counselors and pastors as the most searingly honest account of faith surviving ultimate darkness. Wiesel's memoir of surviving Auschwitz raises the hardest possible questions about God and suffering, and does not resolve them easily. Reading Night alongside A Grief Observed or The Problem of Pain creates the most honest possible engagement with theodicy.",
    for_whom: "Those facing extreme suffering who need honesty more than answers; pastoral counselors; anyone studying theodicy who needs the human face of the problem",
    best_quote: "Never shall I forget that night, the first night in camp, which has turned my life into one long night... Never shall I forget these things, even if I am condemned to live as long as God Himself. Never.",
    where_to_get: "Hill and Wang; Amazon; any library",
    initials: "NGT",
  },
  {
    title: "The Reason for God",
    author: "Timothy Keller",
    year: 2008,
    season: "Doubt & Crisis",
    color: GREEN,
    publisher: "Dutton",
    description: "Written by Keller for his skeptical Manhattan congregation, this book addresses the most common objections to Christian faith — exclusivity, suffering, hell, evolution, the Bible's reliability — with intellectual rigor and pastoral grace. Part Two then makes a positive case for the Christian faith. It has become the standard recommendation for intellectually-oriented seekers and doubting Christians.",
    for_whom: "Christians going through a faith crisis; college students encountering secular arguments for the first time; anyone whose faith has been shaken by intellectual objections",
    best_quote: "If you believe what you like in the gospels, and reject what you don't like, it is not the gospel you believe, but yourself.",
    where_to_get: "Dutton / Penguin; Amazon; gospelinlife.com",
    initials: "RFG",
  },
  {
    title: "The Marriage Builder",
    author: "Larry Crabb",
    year: 1982,
    season: "Marriage & Family",
    color: "#EF4444",
    publisher: "Zondervan",
    description: "Larry Crabb is one of the most insightful Christian psychologists and marriage counselors alive. The Marriage Builder argues that the real problem in most Christian marriages is that spouses are trying to get from each other what only God can provide — unconditional acceptance, security, significance. When we stop demanding those things from a spouse and receive them from God, we become capable of genuinely loving.",
    for_whom: "Married couples at any stage; engaged couples; those in troubled marriages; anyone who feels their spouse is not meeting their deepest needs",
    best_quote: "Manipulative love says: I will love you if you meet my needs. Biblical love says: I will love you regardless, because God has already met my deepest needs.",
    where_to_get: "Zondervan; Amazon; widely available",
    initials: "TMB",
  },
  {
    title: "Sacred Marriage",
    author: "Gary Thomas",
    year: 2000,
    season: "Marriage & Family",
    color: "#10B981",
    publisher: "Zondervan",
    description: "Thomas's central question: What if God designed marriage to make us holy more than to make us happy? He argues that the friction, disappointment, and sacrifice of marriage are not problems to be solved but the very mechanism God uses to conform us to the image of Christ. One of the most transformative books on Christian marriage because it reframes the entire goal.",
    for_whom: "Married couples who feel disillusioned; those who expected marriage to be primarily fulfilling; those in difficult seasons",
    best_quote: "What if God designed marriage to make us holy more than to make us happy?",
    where_to_get: "Zondervan; Amazon; garythomas.com",
    initials: "SM",
  },
  {
    title: "The Dark Night of the Soul",
    author: "St. John of the Cross",
    year: "1578-1579 (written in prison)",
    season: "Spiritual Dryness",
    color: "#6366F1",
    publisher: "Various translations (Image Books classic)",
    description: "Written by St. John of the Cross while imprisoned by fellow Carmelites for advocating reform, this is the definitive treatment of spiritual desolation in Christian history. The dark night — a period in which all consolation, feeling of God's presence, and spiritual joy disappear — is not a sign of abandonment but of purification. John argues that God strips away our attachment to spiritual consolations to bring us into pure, naked faith.",
    for_whom: "Christians in deep spiritual dryness; those who have lost all sense of God's presence; mature Christians in contemplative stages of formation",
    best_quote: "Where have you hidden, Beloved, and left me moaning? You fled like the stag after wounding me; I went out calling you, but you were gone.",
    where_to_get: "Multiple translations; Image Books edition is most accessible; also free at Christian Classics Ethereal Library",
    initials: "DNS",
  },
  {
    title: "Benefit of the Doubt",
    author: "Gregory Boyd",
    year: 2013,
    season: "Doubt & Crisis",
    color: "#F59E0B",
    publisher: "Baker Books",
    description: "Pastor-theologian Gregory Boyd argues that the evangelical model of faith — requiring certainty before commitment — is itself a primary cause of faith crisis. He proposes a covenantal model of faith that does not require the resolution of intellectual doubts, but rather commitment in the midst of them, as Abraham modeled. A lifeline for Christians who feel their faith is collapsing under unanswered questions.",
    for_whom: "Christians who feel they cannot have faith because they have too many unanswered questions; those whose faith is collapsing; those trained in a certainty-based model of faith",
    best_quote: "The faith God calls us to is not a faith that removes all doubts. It is a faith that trusts in the midst of doubts.",
    where_to_get: "Baker Books; Amazon; reknew.org",
    initials: "BOD",
  },
  {
    title: "Total Forgiveness",
    author: "R.T. Kendall",
    year: 2002,
    season: "Anger & Forgiveness",
    color: "#EF4444",
    publisher: "Charisma House",
    description: "R.T. Kendall (successor to Martyn Lloyd-Jones at Westminster Chapel) argues that most Christians have never truly forgiven the people who wronged them — because they misunderstand what forgiveness actually requires. Forgiveness is not a feeling, not excusing the sin, not necessarily restored trust. It is the specific choice to wish the person well, to not want them punished, and to keep the offense secret. The most practically useful book on forgiveness in print.",
    for_whom: "Anyone nursing bitterness or resentment; those who have been badly wronged; those who have forgiven people with their minds but not their hearts",
    best_quote: "Forgiveness is the most Christlike thing you will ever do. And it will cost you exactly what it cost Jesus — everything.",
    where_to_get: "Charisma House; Amazon; widely available",
    initials: "TF",
  },
  {
    title: "Every Good Endeavor",
    author: "Timothy Keller",
    year: 2012,
    season: "Calling & Vocation",
    color: GREEN,
    publisher: "Dutton",
    description: "Keller's theology of work — the biblical framework for understanding why work matters, how the gospel transforms work, how Christians should engage secular workplaces, and how to navigate the gap between the work we do and the work we wish we could do. Every Good Endeavor is the most practically useful theological treatment of vocation in contemporary evangelical publishing.",
    for_whom: "Christians in secular careers who wonder if their work is spiritually significant; those discerning a call; those frustrated or disillusioned with their work",
    best_quote: "Work is not primarily a thing you do to support your life. Work is a thing you do to serve the world and worship God.",
    where_to_get: "Dutton / Penguin; Amazon; gospelinlife.com",
    initials: "EGE",
  },
];

const LIFE_SEASONS = [
  {
    id: 1,
    season: "New Believer",
    icon: "🌱",
    description: "The beginning of faith brings joy, disorientation, and an enormous hunger to understand what you have just entered. The right books in this season establish foundations that will shape the entire trajectory of a life of faith.",
    challenges: ["Theological confusion — so many traditions, so many opinions", "Integrating faith with prior secular worldview", "Finding a church and understanding what baptism, communion, and community mean", "Learning to read the Bible without feeling overwhelmed"],
    books: ["Mere Christianity (C.S. Lewis)", "Knowing God (J.I. Packer)", "The Cost of Discipleship (Bonhoeffer)", "Basic Christianity (John Stott)"],
    scripture: "Like newborn babies, crave pure spiritual milk, so that by it you may grow up in your salvation. — 1 Peter 2:2",
  },
  {
    id: 2,
    season: "Marriage & Family",
    icon: "👨‍👩‍👧",
    description: "The early years of marriage and parenting are among the most formative and most demanding of the Christian life. Books in this season help couples understand that marriage is a crucible of sanctification, not primarily a source of personal fulfillment.",
    challenges: ["Unrealistic expectations colliding with reality", "Learning to love when love is not a feeling", "Parenting with grace without losing authority", "Maintaining spiritual intimacy alongside physical and emotional demands"],
    books: ["Sacred Marriage (Gary Thomas)", "The Marriage Builder (Larry Crabb)", "Parenting (Paul David Tripp)", "This Momentary Marriage (John Piper)"],
    scripture: "Husbands, love your wives, as Christ loved the church and gave himself up for her. — Ephesians 5:25",
  },
  {
    id: 3,
    season: "Grief & Loss",
    icon: "🕯️",
    description: "Bereavement strips away the comfortable assumptions of faith and demands an encounter with God in the darkness. The books that help most in grief are not the ones that explain sorrow away but the ones that accompany sufferers into it with honesty.",
    challenges: ["Anger at God that feels like faithlessness", "The absence of God's presence when you need it most", "Well-meaning people who say the wrong things", "The long, slow second year that no one warns you about"],
    books: ["A Grief Observed (C.S. Lewis)", "When God Weeps (Joni Eareckson Tada)", "Lament for a Son (Nicholas Wolterstorff)", "The Problem of Pain (C.S. Lewis)"],
    scripture: "Blessed are those who mourn, for they shall be comforted. — Matthew 5:4",
  },
  {
    id: 4,
    season: "Midlife Questions",
    icon: "🧭",
    description: "Midlife brings questions of purpose, legacy, and identity that earlier seasons postponed. Many Christians arrive at midlife having achieved much but feeling spiritually empty — the books of this season address the deeper questions that success cannot answer.",
    challenges: ["Questioning whether the life you have built is the life you were meant to live", "Facing mortality for the first time as a felt reality", "Spiritual dryness after years of activity and service", "Discerning between calling and mere ambition"],
    books: ["Let Your Life Speak (Parker Palmer)", "A Long Obedience in the Same Direction (Eugene Peterson)", "The Second Half of Life (Richard Rohr)", "Ordering Your Private World (Gordon MacDonald)"],
    scripture: "Teach us to number our days, that we may gain a heart of wisdom. — Psalm 90:12",
  },
  {
    id: 5,
    season: "Suffering & Trial",
    icon: "⛰️",
    description: "Chronic illness, job loss, prolonged financial crisis, prodigal children — the seasons of sustained suffering test faith most severely. Books that helped in this season are not merely intellectual; they are life-preservers grabbed in deep water.",
    challenges: ["Maintaining faith when prayers go unanswered for years", "The isolation of suffering others cannot see or understand", "Theological questions that feel abstract to everyone else but urgent to you", "Finding meaning in pain that seems purely destructive"],
    books: ["Walking with God through Pain and Suffering (Timothy Keller)", "Night (Elie Wiesel)", "Disappointment with God (Philip Yancey)", "Dark Clouds Deep Mercy (Mark Vroegop)"],
    scripture: "I consider that our present sufferings are not worth comparing with the glory that will be revealed in us. — Romans 8:18",
  },
  {
    id: 6,
    season: "Aging & Legacy",
    icon: "🌅",
    description: "The final season of life brings both the richest opportunities for wisdom and the hardest questions about what has mattered. The right books in this season help older believers finish well — to pass faith to the next generation and to face death with hope.",
    challenges: ["Physical limitation eroding the activities that once gave identity", "Grief over friends and contemporaries who have died", "Fear of becoming a burden; questions about what legacy remains", "Facing death with hope rather than denial"],
    books: ["The Wisdom of Each Other (Eugene Peterson)", "When I Don't Desire God (John Piper)", "A Grace Disguised (Jerry Sittser)", "Finishing Well (Bob Buford)"],
    scripture: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you. — Isaiah 46:4",
  },
];

const READING_PLANS_S = [
  {
    id: 1,
    name: "Foundations of Faith",
    duration: "3 months",
    description: "A guided journey through the intellectual and devotional foundations of Christian belief. Designed for new believers and those who want to rebuild their theological foundation after a season of drift or doubt.",
    phases: [
      { title: "Month 1: Who Is God?", books: ["Knowing God — J.I. Packer", "The Knowledge of the Holy — A.W. Tozer"] },
      { title: "Month 2: Who Is Christ?", books: ["Mere Christianity — C.S. Lewis", "Basic Christianity — John Stott"] },
      { title: "Month 3: What Is the Gospel?", books: ["The Cross of Christ — John Stott", "The Reason for God — Timothy Keller (Part 2)"] },
    ],
  },
  {
    id: 2,
    name: "Emotional & Spiritual Health",
    duration: "3 months",
    description: "A reading journey for Christians who sense their emotional and spiritual lives are disconnected — who know doctrine but feel little, or who feel much but lack structure. Integrates psychology, spiritual direction, and theology.",
    phases: [
      { title: "Month 1: Honest Self-Examination", books: ["The Emotionally Healthy Church — Peter Scazzero", "Emotionally Healthy Spirituality — Peter Scazzero"] },
      { title: "Month 2: The Inner Life", books: ["Renovation of the Heart — Dallas Willard", "Ordering Your Private World — Gordon MacDonald"] },
      { title: "Month 3: Grace & Transformation", books: ["The Return of the Prodigal Son — Henri Nouwen", "The Grace Awakening — Charles Swindoll"] },
    ],
  },
  {
    id: 3,
    name: "Theology & Formation",
    duration: "6 months",
    description: "A six-month deep dive into Christian theology for those who want to move beyond surface-level faith. Covers systematic theology, church history, and the spiritual disciplines in an integrated reading journey.",
    phases: [
      { title: "Months 1-2: Systematic Theology", books: ["Systematic Theology (abridged) — Wayne Grudem", "The Apostles' Creed — Albert Mohler"] },
      { title: "Months 3-4: Historical Theology", books: ["Church History in Plain Language — Bruce Shelley", "On the Incarnation — Athanasius (with C.S. Lewis intro)"] },
      { title: "Months 5-6: Spiritual Disciplines", books: ["The Spirit of the Disciplines — Dallas Willard", "A Long Obedience in the Same Direction — Eugene Peterson"] },
    ],
  },
  {
    id: 4,
    name: "Suffering & Hope",
    duration: "2 months",
    description: "An honest, theologically serious reading journey through the problem of suffering. Designed for those in pain or walking alongside someone in pain — not to resolve the question but to face it faithfully.",
    phases: [
      { title: "Month 1: Into the Darkness", books: ["A Grief Observed — C.S. Lewis", "Night — Elie Wiesel", "Lament for a Son — Nicholas Wolterstorff"] },
      { title: "Month 2: Toward the Light", books: ["Walking with God through Pain and Suffering — Timothy Keller", "When God Weeps — Joni Eareckson Tada"] },
    ],
  },
  {
    id: 5,
    name: "Marriage & Family",
    duration: "3 months",
    description: "A reading journey for married couples or engaged couples who want to build their relationship on a theological foundation rather than cultural assumptions about what marriage should provide.",
    phases: [
      { title: "Month 1: What Marriage Is For", books: ["Sacred Marriage — Gary Thomas", "This Momentary Marriage — John Piper"] },
      { title: "Month 2: The Inner Work", books: ["The Marriage Builder — Larry Crabb", "Love & Respect — Emerson Eggerichs"] },
      { title: "Month 3: Family & Legacy", books: ["Parenting — Paul David Tripp", "The Tech-Wise Family — Andy Crouch"] },
    ],
  },
];

const VOICES_BFOS = [
  {
    id: 1,
    name: "C.S. Lewis",
    era: "1898-1963",
    context: "Oxford & Cambridge; Anglican convert",
    bio: "C.S. Lewis was surprised by joy — his own phrase for his unexpected conversion to Christianity at 33. He lived through multiple life seasons as a Christian: the intellectual exhilaration of new faith, the agony of losing his wife Joy Davidman to cancer, and the long middle decades of productive scholarship and writing. His work spans the full range of life seasons because he lived them all with rare self-awareness and wrote about each with extraordinary precision. No Christian author has helped more people understand what they are experiencing.",
    quote: "If I find in myself desires which nothing in this world can satisfy, the only logical explanation is that I was made for another world.",
    contribution: "Showed that intellectual rigor and Christian faith are not enemies; wrote the most honest account of Christian grief in print; his corpus accompanies readers through doubt, conversion, marriage, loss, and death",
  },
  {
    id: 2,
    name: "Eugene Peterson",
    era: "1932-2018",
    context: "American pastor; Presbyterian; The Message translator",
    bio: "Eugene Peterson pastored the same congregation in Maryland for 29 years before retiring to write and teach. His concept of 'a long obedience in the same direction' — borrowed from Nietzsche but filled with Christian content — became the defining metaphor for mature discipleship: not spiritual peak experiences but the slow, unglamorous faithfulness of decades. Peterson's books address the spirituality of ordinary pastoral life, midlife questions of purpose, and the formation of character through the long middle years that most Christian books ignore.",
    quote: "The Christian life is not a problem to be solved but a mystery to be lived.",
    contribution: "Named the spirituality of the ordinary; produced The Message as a translation that reads Scripture as living literature; modeled what it looks like to remain faithfully planted in one place for decades",
  },
  {
    id: 3,
    name: "Henri Nouwen",
    era: "1932-1996",
    context: "Dutch Catholic priest; Harvard, Yale, L'Arche",
    bio: "Henri Nouwen left prestigious academic posts at Harvard and Yale to live at L'Arche Daybreak, a community for people with intellectual disabilities in Toronto, where he served as pastor until his death. His books chronicle an inner journey of painful self-discovery — loneliness, the longing for affirmation, the fear of abandonment, the slow discovery that one is the Beloved of God. He addressed the spiritual dimension of midlife, aging, grief, and the inner wounds that professional success cannot heal.",
    quote: "The spiritual life is not a life before, after, or beyond our everyday existence. No, the spiritual life can only be real when it is lived in the midst of the pains and joys of the here and now.",
    contribution: "Named the wound of the Christian leader who cannot receive what they give; The Return of the Prodigal Son became a classic of spiritual formation; modeled downward mobility as a spiritual path",
  },
  {
    id: 4,
    name: "Philip Yancey",
    era: "b. 1949",
    context: "American evangelical journalist and author",
    bio: "Philip Yancey grew up in a racist Southern fundamentalist church and spent his early adulthood working through the damage. His books have chronicled his own journey from wounded faith to hard-won trust — addressing doubt, disappointment with God, suffering, and the strange grace of chronic pain. Yancey is the most widely-read evangelical author on the dark side of faith — the questions that believers are often afraid to ask — and has given millions of readers permission to be honest about their own spiritual struggles.",
    quote: "I have learned that faith means trusting in advance what will only make sense in reverse.",
    contribution: "Where Is God When It Hurts? gave a generation permission to bring honest pain to faith; Disappointment with God named what many Christians felt but could not say; Soul Survivor documented faith surviving institutional religion",
  },
  {
    id: 5,
    name: "Parker Palmer",
    era: "b. 1939",
    context: "American Quaker educator and writer",
    bio: "Parker Palmer is a Quaker educator whose book 'Let Your Life Speak' became one of the defining texts on vocation and calling for a generation of midlife Christians. Palmer writes from his own experience of two severe depressions that stripped away his false self and forced an encounter with what was genuinely his to live. His central insight — that vocation is not what you do but who you are, and that the life you are given wants to be lived — has helped thousands of Christians in midlife and beyond to stop performing others' expectations and start living from their own deepest nature.",
    quote: "Before I can tell my life what I want to do with it, I must listen to my life telling me who I am.",
    contribution: "Let Your Life Speak defined a generation's understanding of vocation; gave language to the experience of false-self living; modeled intellectual humility about Quaker faith as a resource for all traditions",
  },
];

export default function BooksForSeasonsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("books");
  const [season, setSeason] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<number>(VOICES_BFOS[0].id);

  const filtered = BOOKS.filter(b => season === "All" || b.season === season);
  const book = BOOKS.find(b => b.title === selected);
  const voice = VOICES_BFOS.find(v => v.id === selectedVoice)!;

  const SEASON_COLOR: Record<string, string> = {
    "New Believer": GREEN,
    "Deep Grief": "#EF4444",
    "Doubt & Crisis": "#F59E0B",
    "Marriage & Family": "#10B981",
    "Calling & Vocation": "#3B82F6",
    "Suffering & Illness": PURPLE,
    "Spiritual Dryness": "#6366F1",
    "Anger & Forgiveness": "#EC4899",
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📚</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Books for Every Season of Life</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            The right book at the right moment is a gift. Here are the best Christian books for specific life seasons &mdash; grief, doubt, marriage, suffering, dryness, and new faith &mdash; chosen for their proven power to help.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6, width: "fit-content" }}>
          {(["books", "seasons", "guides", "voices"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)}
              style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "books" ? "Books" : t === "seasons" ? "Life Seasons" : t === "guides" ? "Reading Guides" : "Voices"}
            </button>
          ))}
        </div>

        {/* Books Tab */}
        {activeTab === "books" && (
          <>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {SEASON_FILTERS.map(s => (
                <button key={s} onClick={() => setSeason(s)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${season === s ? GREEN : BORDER}`, background: season === s ? `${GREEN}15` : "transparent", color: season === s ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {s}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: book ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((b, i) => (
                  <button key={i} onClick={() => setSelected(selected === b.title ? null : b.title)}
                    style={{ background: selected === b.title ? `${b.color}12` : CARD, border: `1px solid ${selected === b.title ? b.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${b.color}20`, border: `1px solid ${b.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: b.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                        {b.initials}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{b.title}</span>
                          <span style={{ background: `${SEASON_COLOR[b.season] || GREEN}15`, color: SEASON_COLOR[b.season] || GREEN, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{b.season}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 3 }}>{b.author} &middot; {b.year}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {book && (
                <div style={{ background: CARD, border: `1px solid ${book.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <h2 style={{ color: book.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{book.title}</h2>
                  <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{book.author} &middot; {book.year} &middot; {book.publisher}</div>

                  <span style={{ background: `${SEASON_COLOR[book.season] || GREEN}15`, color: SEASON_COLOR[book.season] || GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{book.season}</span>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "14px 0" }}>{book.description}</p>

                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>BEST QUOTE</div>
                    <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.65 }}>&ldquo;{book.best_quote}&rdquo;</p>
                  </div>

                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHO NEEDS THIS BOOK</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{book.for_whom}</p>
                  </div>

                  <div style={{ background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10 }}>
                    <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHERE TO GET IT</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{book.where_to_get}</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* Life Seasons Tab */}
        {activeTab === "seasons" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}20`, borderRadius: 12, padding: 18, marginBottom: 8 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>READING THROUGH LIFE&rsquo;S SEASONS</div>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                Different seasons of life require different books. The same book that transforms a person at 25 may say little to them at 55 — and vice versa. These are the seasons when the right book at the right moment becomes a lifeline.
              </p>
            </div>
            {LIFE_SEASONS.map(ls => (
              <div key={ls.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{ls.icon}</span>
                  <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 18, margin: 0 }}>{ls.season}</h3>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "0 0 16px" }}>{ls.description}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                  <div style={{ background: BG, borderRadius: 8, padding: "12px 14px" }}>
                    <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 10, marginBottom: 8 }}>CHALLENGES IN THIS SEASON</div>
                    <ul style={{ margin: 0, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 4 }}>
                      {ls.challenges.map((c, i) => (
                        <li key={i} style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{c}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ background: BG, borderRadius: 8, padding: "12px 14px" }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 8 }}>RECOMMENDED READING</div>
                    <ul style={{ margin: 0, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 4 }}>
                      {ls.books.map((b, i) => (
                        <li key={i} style={{ color: TEXT, fontSize: 12, lineHeight: 1.5 }}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: "10px 14px" }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>SCRIPTURE FOR THIS SEASON</div>
                  <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>{ls.scripture}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reading Guides Tab */}
        {activeTab === "guides" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}20`, borderRadius: 12, padding: 18, marginBottom: 8 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>THEMED READING JOURNEYS</div>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                These multi-month reading plans are designed as journeys rather than lists — each phase builds on the previous one, taking you deeper into a theme across two to six months of intentional reading.
              </p>
            </div>
            {READING_PLANS_S.map(plan => (
              <div key={plan.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 18, margin: 0, flex: 1 }}>{plan.name}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" }}>{plan.duration}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 18px" }}>{plan.description}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {plan.phases.map((phase, i) => (
                    <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 12, flexShrink: 0, marginTop: 2 }}>
                        {i + 1}
                      </div>
                      <div style={{ flex: 1, background: BG, borderRadius: 8, padding: "10px 14px" }}>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{phase.title}</div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                          {phase.books.map((b, j) => (
                            <div key={j} style={{ color: MUTED, fontSize: 12 }}>{b}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Voices Tab */}
        {activeTab === "voices" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {VOICES_BFOS.map(v => (
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

      </div>
    </div>
  );
}
