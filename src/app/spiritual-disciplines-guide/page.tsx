"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const RED = "#EF4444";
const GOLD = "#D97706";

type Tab = "disciplines" | "traditions" | "rhythms" | "resources" | "voices" | "journal" | "videos";

const SDG_VIDEOS = [
  { videoId: "rtkS_8VWfB0", title: "The Spiritual Disciplines — Dallas Willard and Tim Keller", channel: "Gospel in Life", description: "How Willard's framework for spiritual formation through disciplined practices shaped a generation of Christian leaders." },
  { videoId: "ej_6dVdJSIU", title: "Spiritual Disciplines for Ordinary Christians", channel: "Ligonier Ministries", description: "A practical introduction to the inward, outward, and corporate disciplines — what they are and how to begin." },
  { videoId: "4Eg_di-O8nM", title: "Bible Reading, Prayer, and the Means of Grace", channel: "Desiring God", description: "Piper on the foundation disciplines: why daily Scripture and prayer are non-negotiable for growth in godliness." },
  { videoId: "gV9JugO_5Mk", title: "Silence and Solitude — The Hardest Disciplines", channel: "The Gospel Coalition", description: "Why silence and solitude are the most neglected and most needed spiritual disciplines in the modern world." },
];

const DISCIPLINES = [
  {
    name: "Lectio Divina",
    tradition: "Ancient / Universal",
    color: GREEN,
    category: "Scripture",
    time_needed: "20-45 min",
    difficulty: "Beginner",
    description: "The ancient Christian practice of slow, prayerful Scripture reading. Lectio Divina (divine reading) involves four movements: Lectio (read a short passage slowly, twice), Meditatio (meditate on a word or phrase that stands out), Oratio (respond to God in prayer), Contemplatio (rest in God's presence). Practiced since the desert fathers and formalized by Benedict of Nursia around 530 AD.",
    how_to: "1. Choose a short passage (4-8 verses). 2. Read it slowly twice. 3. Notice a word or phrase that stands out. 4. Sit with that phrase and let it resonate. 5. Respond in prayer. 6. Sit in silence. The goal is not information but encounter.",
    common_mistake: "Reading too much. Lectio is not Bible study — it is letting one short passage speak deeply rather than covering ground.",
    recommended_resource: "Christine Valters Paintner, Lectio Divina — The Sacred Art (SkyLight Paths)",
    scripture: "Psalm 1:2; Joshua 1:8",
    initials: "LD",
  },
  {
    name: "The Daily Examen",
    tradition: "Ignatian",
    color: PURPLE,
    category: "Prayer",
    time_needed: "10-15 min",
    difficulty: "Beginner",
    description: "A prayer practice developed by Ignatius of Loyola for reviewing the day in God's presence. The Examen trains the capacity to notice where God was active in your day — where you responded well and where you did not. After daily practice for months, many people report that they begin noticing God's presence during the day rather than only in retrospect.",
    how_to: "1. Become aware of God's presence. 2. Review the day with gratitude (what moments gave life?). 3. Notice your emotions (where were you consoled or desolated?). 4. Choose one moment that needs attention — either a failure to confess or a grace to thank God for. 5. Ask for guidance tomorrow.",
    common_mistake: "Turning it into a guilt-focused sin inventory rather than a God-noticing practice. The Examen is primarily about gratitude and attentiveness, not performance review.",
    recommended_resource: "Jim Manney, A Simple Life-Changing Prayer (Loyola Press); also Mark Thibodeaux, Reimagining the Ignatian Examen",
    scripture: "Lamentations 3:40; Psalm 139:23-24",
    initials: "EXM",
  },
  {
    name: "Centering Prayer",
    tradition: "Contemplative / Trappist",
    color: "#3B82F6",
    category: "Prayer",
    time_needed: "20 min",
    difficulty: "Intermediate",
    description: "Developed by Thomas Keating, Basil Pennington, and William Meninger at St. Joseph's Abbey (Trappist) in the 1970s, drawing from the medieval English contemplative tradition of The Cloud of Unknowing. Centering Prayer involves resting in God's presence using a sacred word (or image, or breath) as an anchor. When thoughts arise, you gently return to the word. The goal is not emptying the mind but consenting to God's presence and action.",
    how_to: "1. Sit comfortably, eyes closed. 2. Choose a sacred word (God, Jesus, Love, Peace, Abba). 3. Introduce it gently. 4. When thoughts arise, gently return to the sacred word. 5. After 20 minutes, remain in silence 2-3 minutes before opening eyes. Begin with once daily; advanced practitioners do twice daily.",
    common_mistake: "Judging the session by whether thoughts ceased. Thoughts will come constantly — that is normal. The practice is the gentle returning, not the absence of thought.",
    recommended_resource: "Thomas Keating, Open Mind, Open Heart (Continuum); free Lectio 365 app",
    scripture: "Psalm 46:10; 1 Kings 19:12",
    initials: "CP",
  },
  {
    name: "The Prayer of Examen & Consolation",
    tradition: "Ignatian",
    color: "#F59E0B",
    category: "Prayer",
    time_needed: "15 min",
    difficulty: "Beginner",
    description: "Related to but distinct from the Daily Examen, this practice focuses specifically on noticing consolation (when you feel drawn toward God, life, love, joy, peace) and desolation (when you feel drawn toward emptiness, self-centeredness, hopelessness) in your daily experience. Ignatius taught that discernment of spirits — learning to read the interior movements of your soul — is foundational to Christian decision-making.",
    how_to: "At the end of each day, identify: (1) Your high point — the moment of greatest life, energy, or connection. (2) Your low point — the moment of greatest depletion, distance from God, or distress. Pray about both. Over weeks, patterns emerge that reveal your spiritual state and your authentic calling.",
    common_mistake: "Identifying consolation with pleasure and desolation with pain. Physical pain can come during consolation; success can come during desolation. These movements are interior, not circumstantial.",
    recommended_resource: "Dennis Linn, Sleeping with Bread (Paulist Press)",
    scripture: "Galatians 5:22-23; Romans 8:5-6",
    initials: "PEC",
  },
  {
    name: "Fasting",
    tradition: "Universal",
    color: "#EF4444",
    category: "Body",
    time_needed: "Variable (one meal to 40 days)",
    difficulty: "Intermediate",
    description: "The practice of voluntarily abstaining from food (or other appetites) for spiritual purposes. Fasting is commanded and assumed throughout both Testaments and in the teachings of Jesus (When you fast — Matthew 6:16). In the Christian tradition, fasting is understood as: (1) an act of humility and dependence on God, (2) a redirecting of appetite toward God, (3) a form of mourning and intercession, and (4) a training of the will in submission to the Spirit.",
    how_to: "Begin with a one-meal fast (skip lunch, use the time for prayer). Progress to a sunrise-to-sunset fast. Extended fasts (24+ hours) should be entered gradually. Drink water. Use hunger signals as prayer reminders — every time you feel hungry, turn it into a prayer. Break fasts gently with light food.",
    common_mistake: "Turning fasting into dieting, or making it primarily about willpower. The spiritual dimension requires conscious, prayerful intention — otherwise it is just skipping meals.",
    recommended_resource: "Richard Foster, Celebration of Discipline, ch. 4 (Fasting); John Piper, A Hunger for God",
    scripture: "Matthew 6:16-18; Isaiah 58:6-7; Joel 2:12",
    initials: "FAS",
  },
  {
    name: "Scripture Memory",
    tradition: "Universal / Reformed emphasis",
    color: "#10B981",
    category: "Scripture",
    time_needed: "5-15 min/day",
    difficulty: "Beginner",
    description: "The intentional memorization of biblical passages. The Puritans and Reformers were fierce advocates of Scripture memory — they understood that you cannot meditate on what you cannot recall. John Piper has argued that Scripture memory is a more powerful spiritual discipline than almost any other because it stores truth in the mind available for immediate deployment in temptation, suffering, or ministry.",
    how_to: "Start with one verse per week. Use physical cards (Verse Locker app or flashcards). Review previous verses daily. Memorize whole passages rather than isolated verses — context matters. The Navigators Topical Memory System is a proven starter curriculum. Target: 10 minutes of review in the morning, 5 minutes before sleep.",
    common_mistake: "Memorizing verses in isolation rather than passages. A verse without context is a proof-text; a passage memorized is a landscape of truth.",
    recommended_resource: "The Navigators Topical Memory System; Scripture Typer app; Andrew Davis, An Approach to Extended Memorization of Scripture",
    scripture: "Psalm 119:11; Deuteronomy 6:6-9; Colossians 3:16",
    initials: "SM",
  },
  {
    name: "Sabbath",
    tradition: "Jewish / Universal",
    color: "#6366F1",
    category: "Rest",
    time_needed: "24 hours (weekly)",
    difficulty: "Intermediate",
    description: "The weekly 24-hour cessation from work — commanded in Exodus 20 and embodied by Jesus, who rested on the Sabbath. In Jewish practice, Sabbath begins Friday at sundown and ends Saturday at sundown. Christians historically observed it on Sunday. Contemporary Christian Sabbath practice typically involves: cessation from productive work, worship, feasting, delight in creation, and rest. Abraham Heschel called the Sabbath a cathedral in time.",
    how_to: "Choose one day weekly. Identify what constitutes your work (not just your job — tasks, productivity, screen consumption). Stop it from sundown to sundown or your chosen 24 hours. Include: worship, unhurried meals, nature, play, sleep, unscheduled time. Prepare the previous evening — sabbath cannot be improvised.",
    common_mistake: "Making Sabbath into a list of prohibitions rather than a feast of freedom. The rabbis called Sabbath a taste of the world to come — it should feel like liberation, not deprivation.",
    recommended_resource: "Walter Brueggemann, Sabbath as Resistance; Mark Buchanan, The Rest of God; Abraham Heschel, The Sabbath",
    scripture: "Exodus 20:8-11; Genesis 2:2-3; Hebrews 4:9-11",
    initials: "SAB",
  },
  {
    name: "Journaling",
    tradition: "Post-Reformation / Universal",
    color: "#F59E0B",
    category: "Reflection",
    time_needed: "10-30 min/day",
    difficulty: "Beginner",
    description: "Writing as a form of prayer and self-examination before God. Great Christian journalers include John Wesley (who kept detailed spiritual journals), David Brainerd (whose diary was the catalyst for William Carey's missionary call), and Jim Elliot (whose journals are a treasure of evangelical devotional literature). Journaling externalizes the interior life, making it possible to notice patterns, track spiritual growth, and process emotions before God.",
    how_to: "Use any medium — physical notebook or app. Begin with: what happened today? What was I feeling? Where did I notice God (or fail to)? What am I anxious about? What am I grateful for? Review your journal monthly to notice patterns. Some use structured formats (ACTS prayer, gratitude lists); others write freely.",
    common_mistake: "Using journaling primarily to vent emotions rather than bring them before God. Journaling should be prayer in written form — a conversation with God about your interior life, not a diary of events.",
    recommended_resource: "Donald Whittle, Journaling as a Spiritual Practice; David Brainerd, Life and Diary (Jonathan Edwards, editor)",
    scripture: "Psalm 77:1-12; Lamentations 3:19-24",
    initials: "JRN",
  },
  {
    name: "Confession (Auricular)",
    tradition: "Catholic / Anglican / Lutheran",
    color: GREEN,
    category: "Accountability",
    time_needed: "30-60 min",
    difficulty: "Advanced",
    description: "The practice of confessing specific sins to another person who speaks the assurance of forgiveness. In Catholic and Orthodox practice, this is sacramental confession to a priest. In Protestant practice (which affirms the sufficiency of direct confession to God), auricular confession to a trusted pastor, spiritual director, or accountability partner provides the embodied, specific declaration of forgiveness that many people need to receive assurance at a gut level.",
    how_to: "Identify a trusted pastor or spiritual director. Make a specific list of what you are confessing — vague generalities are less effective than named specifics. Come prepared to hear the declaration of forgiveness. After absolution, trust it. James 5:16 is the Protestant foundation: confess your sins to one another and pray for one another, that you may be healed.",
    common_mistake: "Repeating the same confession without actually receiving the forgiveness. The purpose of auricular confession is to make forgiveness external, specific, and embodied — not to repeat the same cycle indefinitely.",
    recommended_resource: "Dietrich Bonhoeffer, Life Together, ch. 5; Richard Foster, Celebration of Discipline, ch. 9",
    scripture: "James 5:16; 1 John 1:9; Psalm 32:3-5",
    initials: "CON",
  },
  {
    name: "Silence & Solitude",
    tradition: "Desert Fathers / Universal",
    color: "#3B82F6",
    category: "Prayer",
    time_needed: "30 min minimum",
    difficulty: "Intermediate",
    description: "The deliberate creation of time alone in silence — disconnected from all input and stimulation. The desert fathers went to the wilderness specifically to practice this. Jesus repeatedly withdrew to solitary places to pray (Luke 5:16). In a hyperconnected, always-stimulated culture, silence and solitude may be the most countercultural and most needed spiritual discipline.",
    how_to: "Start with 30 minutes. Find a physical space with no screens, no music, no conversation. Bring nothing to read. Sit. Pray. Walk slowly. Notice the difficulty of being alone with yourself and with God. Resistance is normal — it is acedia, the ancient enemy of interior life. As you extend the practice, the presence of God becomes more tangible in the silence.",
    common_mistake: "Filling silence with Christian content (podcasts, music, even Bible reading). Silence requires actual silence — not sanctified noise.",
    recommended_resource: "Henri Nouwen, The Way of the Heart (Desert Fathers on silence); Ruth Haley Barton, Invitation to Solitude and Silence",
    scripture: "Luke 5:16; 1 Kings 19:12; Psalm 62:1",
    initials: "SS",
  },
  {
    name: "Intercessory Prayer",
    tradition: "Universal",
    color: GREEN,
    category: "Prayer",
    time_needed: "20-60 min",
    difficulty: "Beginner",
    description: "The practice of sustained prayer for others — standing before God on behalf of another person, community, or need. The church fathers understood intercession through the Old Testament images of Moses lifting his arms on the hill (Exodus 17) and Abraham negotiating with God over Sodom (Genesis 18). Intercessory prayer is not a shopping list delivered to a vending machine but a participation in God's redemptive work for the world. It is the priestly function of every believer.",
    how_to: "Maintain a written prayer list organized by category: family, friends, church, neighbors, city, nation, missionaries. Each day, pray through one or two sections fully rather than rushing through the whole list superficially. Pray Scripture into specific situations. Record answers — seeing prayers answered builds faith for continued intercession. Set a fixed time: early morning intercession is the historic pattern of the church.",
    common_mistake: "Treating intercession as information transfer — giving God facts he already knows. Intercession is relational, persistent engagement. Jesus taught the parable of the persistent widow to show that God honors sustained, faithful asking.",
    recommended_resource: "Ole Hallesby, Prayer (Augsburg); E.M. Bounds, Power Through Prayer",
    scripture: "1 Timothy 2:1; Romans 8:26-27; Exodus 17:11-12",
    initials: "INT",
  },
  {
    name: "Simplicity",
    tradition: "Quaker / Franciscan",
    color: "#10B981",
    category: "Life",
    time_needed: "Ongoing",
    difficulty: "Advanced",
    description: "Voluntary detachment from possessions, status, and consumption as a spiritual discipline. Simplicity is not poverty — it is freedom. Francis of Assisi's embrace of Lady Poverty was not asceticism for its own sake but a declaration of absolute dependence on God. John Wesley's rule — earn all you can, save all you can, give all you can — is one of the most radical financial disciplines in Protestant history. Richard Foster distinguishes inner simplicity (freedom from acquisitiveness) from outer simplicity (the practices that make that inner freedom visible).",
    how_to: "Begin with an audit: what do you own that owns you? Identify possessions, digital habits, or status markers that generate anxiety, pride, or identity. Systematically loosen your grip — give things away, downgrade where possible, refuse the upgrade. Practice regular giving beyond tithe as a discipline of detachment. As Foster notes: simplicity is not about having less — it is about being governed by different values.",
    common_mistake: "Making simplicity into an aesthetic (minimalism as lifestyle brand) rather than a spiritual discipline. Minimalism can become a new form of pride — look how simply I live. True simplicity is invisible; it does not announce itself.",
    recommended_resource: "Richard Foster, Freedom of Simplicity (HarperOne); Sider, Rich Christians in an Age of Hunger",
    scripture: "Matthew 6:19-21; Luke 12:15; 1 Timothy 6:6-8",
    initials: "SIM",
  },
  {
    name: "Service",
    tradition: "Universal",
    color: RED,
    category: "Action",
    time_needed: "Variable",
    difficulty: "Beginner",
    description: "Deliberate, unrecognized service as a spiritual discipline — not volunteer work for resume purposes, but the kind of serving that nobody notices. Jesus washed feet the night before he was crucified. Benedict's Rule instructed monks to receive guests as they would receive Christ, assigning the lowest members of the community to the most menial tasks. Dallas Willard argued that service is one of the most effective disciplines for training the ego out of us, because it places us in situations where we receive no credit, no recognition, and no advancement.",
    how_to: "Identify one act of anonymous service per week — something that will never be known, credited, or rewarded by anyone but God. Over time, add structured commitments: regular service in your local church in an unglamorous role, serving in your neighborhood, caring for a specific person in need. The test of service as discipline: would you still do it if no one ever found out?",
    common_mistake: "Serving from depletion — giving what you do not have, from a tank that is already empty. Service as a discipline requires solitude and prayer as its foundation. You cannot give what you have not received.",
    recommended_resource: "Mark Scandrette, Practicing the Way of Jesus (IVP); Gary Haugen, Just Courage",
    scripture: "Mark 10:45; John 13:14-15; Matthew 25:40",
    initials: "SVC",
  },
  {
    name: "Study (as Discipline)",
    tradition: "Universal / Reformed emphasis",
    color: PURPLE,
    category: "Scripture",
    time_needed: "30-60 min",
    difficulty: "Intermediate",
    description: "The disciplined engagement with Scripture and theology as a means of formation — distinct from devotional reading. Where Lectio Divina asks what does this say to me, Study asks what does this mean and what does it require. The Reformed tradition has been the strongest Protestant advocate of doctrinal formation: the Westminster Larger Catechism is a curriculum of study-as-formation. Dallas Willard argued that Study is the discipline most directly aimed at mortifying ignorance — and that willful ignorance of Scripture is itself a spiritual problem, not merely an intellectual one.",
    how_to: "Use a structured Bible reading plan (professor Grant Horner's system, or M'Cheyne). Study with a good study Bible (ESV Study Bible) and a single-volume commentary (IVP Bible Background Commentary). Add one theology book per quarter. Memorize key passages from what you study — do not merely pass through the material. Keep a study journal where you record observations, questions, and applications.",
    common_mistake: "Substituting study for prayer and relationship with God. The Pharisees studied the Scriptures intensively and missed Christ entirely. Study must be held together with Lectio, prayer, and community to be formative rather than merely informational.",
    recommended_resource: "Howard Hendricks, Living by the Book (Moody); Gordon Fee & Douglas Stuart, How to Read the Bible for All Its Worth",
    scripture: "2 Timothy 2:15; Ezra 7:10; Acts 17:11",
    initials: "STD",
  },
];

const TRADITIONS = [
  {
    id: "ignatian",
    name: "Ignatian Spirituality",
    color: PURPLE,
    founder: "Ignatius of Loyola (1491-1556)",
    keyText: "The Spiritual Exercises",
    summary: "Centers formation on imaginative prayer, discernment of spirits, consolation/desolation, and finding God in all things. The Daily Examen is its signature practice.",
    distinctives: [
      "Discernment of spirits — reading interior movements of consolation and desolation",
      "Imaginative prayer — placing yourself in the biblical scene using all five senses",
      "Contemplation in action — finding God in the midst of ordinary life, not just in retreat",
      "The Spiritual Exercises — a 30-day guided retreat for deep interior transformation",
    ],
    bestFor: "People who struggle with anxiety, decision-making, or finding God in ordinary life; those drawn to prayer through imagination and narrative",
    caution: "The emphasis on experience can sometimes blur into subjectivism — always bring interior movements to Scripture and a spiritual director",
    keyPractices: ["Daily Examen", "Lectio Divina", "Contemplative prayer", "Journaling as discernment"],
    recommendedEntry: "Jim Manney, A Simple Life-Changing Prayer (Daily Examen); then David Fleming, What Is Ignatian Spirituality?",
  },
  {
    id: "reformed",
    name: "Reformed/Puritan Spirituality",
    color: GREEN,
    founder: "John Calvin, the English Puritans (16th-17th c.)",
    keyText: "The Institutes of the Christian Religion; The Westminster Standards",
    summary: "Grounds formation in the sovereignty of God, systematic study of Scripture, careful doctrinal formation, and structured corporate worship. The means of grace — Word, sacrament, prayer — are central.",
    distinctives: [
      "Scripture as the primary and sufficient means of grace",
      "Systematic Bible reading and doctrinal study as disciplines",
      "Corporate worship and preaching as formative, not supplementary",
      "Self-examination before Communion as a regular practice",
      "Family worship — heads of households leading prayer and Scripture at home",
    ],
    bestFor: "People who are intellectually oriented; those who need doctrinal grounding before experiential practice; those who thrive in structure",
    caution: "Can produce intellectualism without transformation — knowing more without becoming more. The Puritans themselves warned against this: head knowledge that never reaches the affections.",
    keyPractices: ["Scripture memory", "Extended Bible study", "Corporate worship", "Family devotions", "Lord's Day observance"],
    recommendedEntry: "J.I. Packer, Knowing God; then John Owen, The Mortification of Sin",
  },
  {
    id: "monastic",
    name: "Monastic / Benedictine Spirituality",
    color: "#3B82F6",
    founder: "Benedict of Nursia (480-550 AD)",
    keyText: "The Rule of Saint Benedict",
    summary: "Organizes life around a Rule — a structured rhythm of prayer, work, and rest. The Divine Office (Liturgy of the Hours) structures the day around prayer at fixed times. Community, stability, and manual labor are treated as spiritual practices.",
    distinctives: [
      "Ora et Labora — pray and work as a single integrated calling",
      "The Divine Office — structured prayer at fixed hours (morning, noon, evening, night)",
      "Stability — commitment to a place and community as a spiritual discipline",
      "Hospitality as a spiritual practice (Benedict: receive guests as you would receive Christ)",
      "The abbot as a model of servant leadership — ruling but always serving",
    ],
    bestFor: "People who need structure and rhythm; those recovering from burnout; those drawn to liturgy and fixed-hour prayer",
    caution: "Can become legalistic if the Rule becomes an end rather than a means. Benedict himself warned: the Rule is a school for beginners, not a final destination.",
    keyPractices: ["Fixed-hour prayer (Liturgy of the Hours)", "Lectio Divina", "Sabbath rest", "Manual labor as prayer", "Hospitality"],
    recommendedEntry: "Joan Chittister, The Rule of Benedict; then Mark Buchanan, The Rest of God (Sabbath)",
  },
  {
    id: "charismatic",
    name: "Charismatic/Pentecostal Spirituality",
    color: RED,
    founder: "Early Pentecostalism (Azusa Street, 1906); renewed in 1960s Charismatic movement",
    keyText: "Acts 2; 1 Corinthians 12-14",
    summary: "Centers formation on the immediate experience of the Holy Spirit — tongues, prophecy, healing, and the gifts of the Spirit as present-tense realities. Worship is expressive, prayer is expectant, and formation happens through direct encounter.",
    distinctives: [
      "Expectation of direct, immediate experience of the Holy Spirit",
      "Spiritual gifts (charismata) as regular part of community life",
      "Expressive, participatory worship as formation",
      "Extended prayer, prayer with laying on of hands, prophetic prayer",
      "Spiritual warfare prayer as a regular discipline",
    ],
    bestFor: "People who have become intellectually over-formed but experientially under-formed; those needing to move from head to heart",
    caution: "Experience without doctrinal grounding can lead to spiritual instability or manipulation. Paul in 1 Corinthians was addressing a Charismatic church's excesses: test all things, hold fast what is good.",
    keyPractices: ["Expressive worship", "Extended prayer", "Prophetic prayer", "Fasting and intercession", "Small group accountability"],
    recommendedEntry: "Gordon Fee, God's Empowering Presence; then Jon Tyson, Beautiful Resistance",
  },
  {
    id: "contemplative",
    name: "Contemplative/Desert Spirituality",
    color: GOLD,
    founder: "The Desert Fathers and Mothers (3rd-4th c. Egypt); later Thomas Merton (20th c.)",
    keyText: "The Sayings of the Desert Fathers (Apophthegmata); Thomas Merton, Contemplative Prayer",
    summary: "Grounds formation in radical simplicity, extended silence, and apophatic prayer (approaching God through what he is not). The goal is purification of the heart through kenosis (self-emptying) so that God may fill what is emptied.",
    distinctives: [
      "Hesychasm — the pursuit of inner stillness as the path to divine encounter",
      "Apophatic prayer — resting before God without agenda, concept, or image",
      "Compunction — a deep, loving sorrow for sin that is not guilt but grief",
      "The cell — a physical or interior space of solitude deliberately protected",
      "Abba/Amma — the spiritual guide who knows your interior life and speaks truth into it",
    ],
    bestFor: "People in burnout, over-stimulation, or spiritual dryness; those who need to recover silence and interiority; advanced practitioners",
    caution: "Can become too individualistic, and some contemplative practices imported from non-Christian traditions require careful theological evaluation. Centering Prayer in particular is debated among evangelicals.",
    keyPractices: ["Centering Prayer", "Extended silence", "Lectio Divina", "The Jesus Prayer", "Desert retreats"],
    recommendedEntry: "Henri Nouwen, The Way of the Heart (Desert Fathers); then Thomas Merton, The Seven Storey Mountain",
  },
];

const SAMPLE_RHYTHMS = [
  {
    name: "The Busy Person's Rule",
    color: GREEN,
    daily: ["5 min Lectio Divina (one psalm section)", "The Daily Examen (end of day, 10 min)", "One memorized verse review"],
    weekly: ["One 2-hour Sabbath afternoon (minimum)", "One extended prayer time (30 min)"],
    monthly: ["One half-day personal retreat", "Review journal entries for the past month"],
    best_for: "Working adults with families; pastors in demanding seasons; anyone starting out",
  },
  {
    name: "The Student Rule",
    color: PURPLE,
    daily: ["Morning prayer (ACTS format, 15 min)", "Scripture memory review (10 min)", "Evening Examen (5 min)"],
    weekly: ["One extended silent prayer time (1 hour)", "Sabbath rest from study"],
    monthly: ["Spiritual direction meeting (60 min)", "Monthly fast (one day)"],
    best_for: "College students; seminary students; young adults developing foundational habits",
  },
  {
    name: "The Formation-Focused Rule",
    color: "#3B82F6",
    daily: ["Morning Lectio Divina (30 min)", "Centering Prayer (20 min)", "The Daily Examen (15 min)"],
    weekly: ["Full Sabbath (24 hours)", "Weekly confession to spiritual director", "Extended intercessory prayer"],
    monthly: ["8-hour personal retreat day", "Review of Rule and adjustment"],
    best_for: "Those in intentional formation programs; spiritual directors; those in seasons of significant discernment",
  },
  {
    name: "The Ministry Leader's Rule",
    color: GOLD,
    daily: ["Personal Lectio Divina before sermon/teaching prep (30 min)", "The Daily Examen with particular attention to desolation (15 min)", "One unscheduled margin block — no ministry tasks"],
    weekly: ["Full Sabbath — no ministry email, no pastoral availability", "One hour of intercessory prayer for congregation by name", "Physical rest and recreation as a non-negotiable"],
    monthly: ["Spiritual direction (not supervision — a director who holds your soul, not your ministry outcomes)", "Half-day personal retreat away from church building", "Review: am I ministering from overflow or from depletion?"],
    best_for: "Pastors, worship leaders, youth ministers, and anyone in vocational ministry who faces the specific temptation to minister to others while neglecting their own formation",
  },
  {
    name: "The Recovery Rule",
    color: RED,
    daily: ["Morning: simply sit with God for 10 minutes without agenda", "One small physical practice (walk, rest, nourishment) treated as spiritual discipline", "Evening: name one thing you are grateful for and one thing you release"],
    weekly: ["One extended period of complete rest (not productive rest — actual rest)", "One honest conversation with a trusted person about your interior state", "Gentle re-engagement with one simple practice (Examen or Lectio)"],
    monthly: ["Meeting with a spiritual director or trusted counselor", "Gentle assessment: what is recovering? What still needs care?", "No new ministry commitments — protection of the recovering self"],
    best_for: "People coming out of burnout, spiritual dryness, ministry failure, significant loss, or seasons of spiritual numbness where standard disciplines feel impossible",
  },
];

const RESOURCE_LIST = [
  { title: "Celebration of Discipline", author: "Richard Foster", note: "The foundational modern treatment — 12 disciplines covered with historical depth and practical application. The starting point for most contemporary formation programs.", color: GREEN },
  { title: "The Spirit of the Disciplines", author: "Dallas Willard", note: "More philosophical than Foster — argues that spiritual disciplines are not legalism but training for Christlikeness. The theological foundation for all of Willard's later work on spiritual formation.", color: PURPLE },
  { title: "The Life You Always Wanted", author: "John Ortberg", note: "Willard's ideas made maximally accessible for everyday believers. Ortberg's warm, pastoral voice and storytelling make this the most readable introduction to the disciplines.", color: "#3B82F6" },
  { title: "Sacred Rhythms", author: "Ruth Haley Barton", note: "Focused on establishing actual rhythms of spiritual practice — solitude, lectio divina, prayer, Sabbath — with deep pastoral wisdom from Barton's formation work at Transforming Center.", color: "#F59E0B" },
  { title: "Transforming Center (Ruth Haley Barton)", note: "The premier evangelical spiritual formation training center. Online courses, retreats, and resources. transformingcenter.org", author: "", color: "#10B981" },
  { title: "The Ruthless Elimination of Hurry", author: "John Mark Comer", note: "The most-read contemporary treatment of the disciplines for a digital-age audience. Comer's diagnosis of hurry as the primary spiritual disease of the smartphone era, and his application of Willard's disciplines as the cure, has made this the most accessible entry point for millennials and Gen Z.", color: GOLD },
  { title: "A Praying Life", author: "Paul Miller", note: "Recovers prayer from duty to delight by treating God as a person rather than a process. Miller's framework — pray like a child, bring your whole self, expect real responses — cuts through the performance anxiety that makes prayer feel impossible for many believers.", color: RED },
  { title: "The Spiritual Exercises", author: "Ignatius of Loyola", note: "The original 30-day retreat guide that formed the Jesuit tradition and shaped five centuries of Catholic and Protestant spiritual direction. Even read as a text rather than practiced as a retreat, it is one of the most important documents in the history of Christian formation.", color: PURPLE },
  { title: "Pray Without Ceasing (Transforming Center)", author: "Ruth Haley Barton", note: "Ruth Haley Barton's formation curriculum — an online course series covering solitude, prayer, Lectio Divina, and communal discernment. Among the most structured and well-resourced Protestant formation curricula available. transformingcenter.org", color: GREEN },
];

const VOICES_SDG = [
  {
    id: "foster-r",
    name: "Richard Foster",
    era: "b. 1942 · Quaker",
    context: "Celebration of Discipline",
    bio: "Richard Foster's Celebration of Discipline (1978) is the book that introduced the modern evangelical church to the classical spiritual disciplines. Foster organized twelve disciplines into three categories — inward (meditation, prayer, fasting, study), outward (simplicity, solitude, submission, service), and corporate (confession, worship, guidance, celebration). His work recovered practices that had been largely dormant in Protestant contexts since the Reformation, drawing from the deep wells of Catholic and Orthodox spirituality.",
    quote: "Superficiality is the curse of our age. The desperate need today is not for a greater number of intelligent people, or gifted people, but for deep people.",
    contribution: "Foster's Celebration of Discipline is the single most influential book on Protestant spiritual formation in the 20th century. By making the disciplines accessible, practical, and theologically grounded, he opened an entire generation to the classical tradition of Christian spirituality — and the book remains in print nearly 50 years later.",
  },
  {
    id: "willard-d",
    name: "Dallas Willard",
    era: "1935–2013 · Evangelical",
    context: "The Spirit of the Disciplines",
    bio: "Dallas Willard's The Spirit of the Disciplines (1988) is the theological companion to Foster's practical handbook. Willard argued that the disciplines are not optional extras for spiritual specialists but the ordinary means by which disciples become like their Master. His central insight: Jesus did not merely teach the Sermon on the Mount as an ethical code — he lived out of a disciplined spiritual life that made those teachings natural. The disciplines train us into the same kind of life.",
    quote: "The disciplines are activities of mind and body purposefully undertaken to bring our whole selves into effective cooperation with the divine order of things.",
    contribution: "Willard gave spiritual disciplines their best theological defense. His argument that the disciplines are a form of training (not earning) freed evangelicals to engage them without fear of works-righteousness, and his insistence that Jesus himself practiced the disciplines provided the strongest possible model for disciples to follow.",
  },
  {
    id: "barton-rh",
    name: "Ruth Haley Barton",
    era: "b. 1956 · Evangelical",
    context: "Sacred Rhythms",
    bio: "Ruth Haley Barton, co-founder of the Transforming Center, has written extensively on integrating spiritual disciplines into the rhythms of actual life. Her book Sacred Rhythms (2006) takes Foster's and Willard's frameworks and applies them to the particular challenges of contemporary ministry and leadership. Barton emphasizes solitude as the foundation discipline — the one practice without which the others cannot function properly — and provides remarkably practical guidance on establishing sustainable rhythms.",
    quote: "Solitude is not merely the absence of people. It is the practice of being present to God when there is nothing and no one else demanding our attention.",
    contribution: "Barton's work filled the gap between the theology of disciplines (Willard) and the practice of disciplines in real, busy lives. Her emphasis on sustainable rhythms, honest self-knowledge, and communal accountability has made her work especially valuable for ministry leaders and spiritual directors.",
  },
  {
    id: "demarist-g",
    name: "Gary Thomas",
    era: "b. 1958 · Evangelical",
    context: "Sacred Pathways",
    bio: "Gary Thomas's Sacred Pathways (1996) made a crucial observation that is often missing from standard treatments of the disciplines: different people encounter God in fundamentally different ways. Thomas identified nine spiritual temperaments — naturalist, sensate, traditionalist, ascetic, activist, caregiver, enthusiast, contemplative, intellectual — and argued that disciplines should be customized to one's pathway rather than applied identically to everyone. The disciplines are means, not ends, and the means must fit the person.",
    quote: "The spiritual life is not one-size-fits-all. God has made us different, and He meets each of us in the way He designed us to be met.",
    contribution: "Thomas's Sacred Pathways gave the disciplines a much-needed pastoral flexibility. His temperament framework helped individuals and spiritual directors understand why certain disciplines produce life in one person and legalism in another, and gave permission for a more personalized approach to formation.",
  },
  {
    id: "comer-jm",
    name: "John Mark Comer",
    era: "b. 1980 · Evangelical",
    context: "The Ruthless Elimination of Hurry",
    bio: "John Mark Comer's The Ruthless Elimination of Hurry (2019) is the most-read contemporary treatment of spiritual disciplines for a digital-age audience. Comer argues that the greatest obstacle to practicing the disciplines today is not laziness or unbelief but hurry — the acceleration of modern life that makes deep attention nearly impossible. His book applies Willard's framework to the specific conditions of smartphone culture, social media, and constant connectivity.",
    quote: "Hurry is not just a problem of time management. It is a spiritual disorder. Jesus was never in a hurry, and we cannot follow a Jesus we are too busy to be with.",
    contribution: "Comer's work has introduced the classical disciplines to a generation that was largely unreached by Foster and Willard. His diagnosis of hurry as the primary spiritual disease of the digital age, and his application of the disciplines as the cure, has made him the most influential voice on formation for millennials and Gen Z.",
  },
];

export default function SpiritualDisciplinesGuidePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_spiritual-disciplines-guide_tab", "disciplines");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_spiritual-disciplines-guide_voice", "foster-r");
  const [selectedTradition, setSelectedTradition] = usePersistedState("vine_sdg_tradition", "ignatian");
  const voiceItem = VOICES_SDG.find(v => v.id === selectedVoice)!;
  const traditionItem = TRADITIONS.find(t => t.id === selectedTradition)!;
  const [selected, setSelected] = useState<string | null>(null);

  const discipline = DISCIPLINES.find(d => d.name === selected);

  type JournalEntry = { id: string; date: string; discipline: string; experience: string; step: string };
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(() => { try { return JSON.parse(localStorage.getItem("vine_sdgj_entries") ?? "[]"); } catch { return []; } });
  const [jDiscipline, setJDiscipline] = useState("");
  const [jExperience, setJExperience] = useState("");
  const [jStep, setJStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_sdgj_entries", JSON.stringify(journalEntries)); } catch {} }, [journalEntries]);
  function saveJournalEntry() {
    if (!jDiscipline.trim() && !jExperience.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), discipline: jDiscipline, experience: jExperience, step: jStep };
    setJournalEntries(prev => [entry, ...prev]);
    setJDiscipline(""); setJExperience(""); setJStep("");
  }
  function deleteJournalEntry(id: string) { setJournalEntries(prev => prev.filter(e => e.id !== id)); }

  const TAB_LABELS: Record<Tab, string> = {
    disciplines: "The Disciplines",
    traditions: "Traditions",
    rhythms: "Sample Rhythms",
    resources: "Best Resources",
    voices: "Voices",
    journal: "📓 My Journal",
    videos: "Videos",
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌿</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Spiritual Disciplines — Practical Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            The classical practices of Christian formation — Lectio Divina, the Daily Examen, fasting, Sabbath, centering prayer — with practical how-to instructions, common mistakes, and the best resources to go deeper.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["disciplines", "traditions", "rhythms", "resources", "voices", "journal", "videos"] as Tab[]).map(t => (
            <button type="button" key={t} onClick={() => { setTab(t); setSelected(null); }}
              style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textTransform: "capitalize" }}>
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        {tab === "disciplines" && (
          <div style={{ display: "grid", gridTemplateColumns: discipline ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {DISCIPLINES.map((d, i) => (
                <button type="button" key={i} onClick={() => setSelected(selected === d.name ? null : d.name)}
                  style={{ background: selected === d.name ? `${d.color}12` : CARD, border: `1px solid ${selected === d.name ? d.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: `${d.color}20`, border: `1px solid ${d.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: d.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                      {d.initials}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                        <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{d.name}</span>
                        <span style={{ background: `${d.color}15`, color: d.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{d.category}</span>
                      </div>
                      <div style={{ color: MUTED, fontSize: 12, marginTop: 3 }}>{d.tradition} · {d.time_needed} · {d.difficulty}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {discipline && (
              <div style={{ background: CARD, border: `1px solid ${discipline.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                <h2 style={{ color: discipline.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{discipline.name}</h2>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{discipline.tradition} · {discipline.time_needed} · {discipline.difficulty}</div>

                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{discipline.description}</p>

                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>HOW TO PRACTICE</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{discipline.how_to}</p>
                </div>

                <div style={{ background: "#EF444408", border: "1px solid #EF444420", borderRadius: 8, padding: 10, marginBottom: 10 }}>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>COMMON MISTAKE</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{discipline.common_mistake}</p>
                </div>

                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10, marginBottom: 10 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>KEY SCRIPTURE</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{discipline.scripture}</p>
                </div>

                <div style={{ background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10 }}>
                  <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>RECOMMENDED RESOURCE</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{discipline.recommended_resource}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "traditions" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
              {TRADITIONS.map(trad => (
                <button type="button" key={trad.id} onClick={() => setSelectedTradition(trad.id)}
                  style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedTradition === trad.id ? trad.color + "60" : BORDER}`, background: selectedTradition === trad.id ? trad.color + "12" : CARD, cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: selectedTradition === trad.id ? trad.color : TEXT, marginBottom: 2 }}>{trad.name}</div>
                  <div style={{ fontSize: 11, color: MUTED }}>{trad.founder.split("(")[0].trim()}</div>
                </button>
              ))}
            </div>

            <div style={{ flex: 1, background: CARD, border: `1px solid ${traditionItem.color}25`, borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic", marginBottom: 4 }}>Key text: {traditionItem.keyText}</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: traditionItem.color }}>{traditionItem.name}</h2>
              <div style={{ fontSize: 13, color: MUTED, marginBottom: 18 }}>{traditionItem.founder}</div>

              <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.8, marginBottom: 22 }}>{traditionItem.summary}</p>

              <div style={{ background: `${traditionItem.color}08`, border: `1px solid ${traditionItem.color}18`, borderRadius: 10, padding: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: traditionItem.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Distinctives</div>
                {traditionItem.distinctives.map((d, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: traditionItem.color, flexShrink: 0, marginTop: 5 }} />
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{d}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Best For</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{traditionItem.bestFor}</p>
                </div>
                <div style={{ background: "#EF444408", border: "1px solid #EF444420", borderRadius: 8, padding: 14 }}>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Caution</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{traditionItem.caution}</p>
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Key Practices</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {traditionItem.keyPractices.map((p, i) => (
                    <span key={i} style={{ background: `${traditionItem.color}15`, color: traditionItem.color, padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{p}</span>
                  ))}
                </div>
              </div>

              <div style={{ background: BG, borderRadius: 10, padding: 16, borderLeft: `3px solid ${traditionItem.color}` }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Recommended Entry Point</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{traditionItem.recommendedEntry}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "rhythms" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {SAMPLE_RHYTHMS.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${r.color}30`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: r.color, fontWeight: 900, fontSize: 17, marginBottom: 6 }}>{r.name}</div>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 16 }}>Best for: {r.best_for}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                  {[{ label: "DAILY", items: r.daily, color: GREEN }, { label: "WEEKLY", items: r.weekly, color: PURPLE }, { label: "MONTHLY", items: r.monthly, color: "#3B82F6" }].map((section, j) => (
                    <div key={j} style={{ background: `${section.color}08`, border: `1px solid ${section.color}15`, borderRadius: 10, padding: 14 }}>
                      <div style={{ color: section.color, fontWeight: 700, fontSize: 11, marginBottom: 10 }}>{section.label}</div>
                      {section.items.map((item, k) => (
                        <div key={k} style={{ color: TEXT, fontSize: 12, marginBottom: 6, lineHeight: 1.4 }}>· {item}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "resources" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {RESOURCE_LIST.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${r.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: r.color, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{r.title}</div>
                {r.author && <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{r.author}</div>}
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.note}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
              {VOICES_SDG.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(58,125,86,0.4)" : BORDER}`, background: selectedVoice === v.id ? "rgba(58,125,86,0.08)" : CARD, cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? GREEN : TEXT, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: MUTED }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: TEXT }}>{voiceItem.name}</h2>
              <div style={{ fontSize: 13, color: MUTED, marginBottom: 20 }}>{voiceItem.era}</div>
              <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
              <div style={{ background: BG, borderRadius: 12, padding: 20, borderLeft: `3px solid ${GREEN}`, marginBottom: 24 }}>
                <p style={{ fontSize: 15, color: TEXT, lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.75 }}>{voiceItem.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>My Spiritual Disciplines Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Record which disciplines you are practicing, your experience, and the next step in your rhythm.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input value={jDiscipline} onChange={e => setJDiscipline(e.target.value)} placeholder="Discipline (prayer, fasting, solitude, sabbath…)" style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <textarea value={jExperience} onChange={e => setJExperience(e.target.value)} placeholder="What did you experience in this discipline?" rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="Next step — adding or deepening a practice" style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveJournalEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "11px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer", alignSelf: "flex-start" }}>Save Entry</button>
              </div>
            </div>
            {journalEntries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", padding: 32 }}>No journal entries yet. Begin recording your spiritual disciplines journey.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {journalEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ color: GREEN, fontWeight: 700, fontSize: 15 }}>{entry.discipline || "Discipline Journal"}</span>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                    </div>
                    {entry.experience && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}><strong>Experience:</strong> {entry.experience}</p>}
                    {entry.step && <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}><strong>Next Step:</strong> {entry.step}</p>}
                    <button type="button" onClick={() => deleteJournalEntry(entry.id)} style={{ background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "4px 12px", color: MUTED, fontSize: 12, cursor: "pointer" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {SDG_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
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
