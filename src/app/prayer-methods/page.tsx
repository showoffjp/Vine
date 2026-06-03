"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

type Tab = "methods" | "scripture" | "guides" | "videos";

const METHODS = [
  {
    id: "acts",
    name: "ACTS Method",
    category: "Structure",
    icon: "📋",
    description: "A structured prayer framework covering four essential movements: Adoration, Confession, Thanksgiving, and Supplication.",
    howTo: [
      "Adoration: Begin by focusing entirely on who God is—not what he's done for you, but his nature. Praise his holiness, love, power, and faithfulness.",
      "Confession: Honestly acknowledge specific sins and failures. Don't rush. Let the Holy Spirit surface what needs to be addressed.",
      "Thanksgiving: Thank God specifically for what he has done—in your life, in Scripture, in your community. Name concrete blessings.",
      "Supplication: Bring your requests. Pray for yourself, then for others. Make your petitions known with boldness and trust.",
    ],
    benefits: ["Prevents prayers from becoming entirely requests", "Cultivates gratitude and worship", "Creates healthy structure for beginners", "Ensures confession is not skipped"],
    scripture: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    scriptureRef: "Philippians 4:6",
    example: "Lord, You are holy, sovereign, and worthy of all praise (A). I confess that I spoke harshly this morning and chose my phone over my Bible (C). Thank You for the meal, my health, and the friend who called today (T). Please provide for the rent due Friday and bring peace to my family (S).",
  },
  {
    id: "lectio",
    name: "Lectio Divina",
    category: "Contemplative",
    icon: "📚",
    description: "An ancient Christian practice of sacred reading — slow, prayerful engagement with Scripture that moves from reading to reflection to prayer to rest.",
    howTo: [
      "Lectio (Read): Read a short passage slowly, twice. Listen for a word or phrase that stands out — don't analyze, just notice.",
      "Meditatio (Reflect): Sit with the word or phrase. Repeat it gently. Let it work on you. What is God saying through it?",
      "Oratio (Respond): Respond to God in prayer based on what arose. This isn't a prepared speech — it's a natural conversation.",
      "Contemplatio (Rest): Simply rest in God's presence. No agenda. No words if none come. Be still and know that he is God.",
    ],
    benefits: ["Slows down reading to listening", "Allows Scripture to shape prayers", "Cultivates receptivity to the Spirit", "Has 1,500 years of Christian practice behind it"],
    scripture: "Your word is a lamp for my feet, a light on my path.",
    scriptureRef: "Psalm 119:105",
    example: `Sample passage: "The Lord is my shepherd; I shall not want." (Psalm 23:1)\n\nLectio: Read slowly. The word 'shepherd' stands out.\nMeditatio: A shepherd knows each sheep by name. Leads, not drives.\nOratio: Lord, I confess I've been running ahead of you. Lead me today.\nContemplatio: [5 minutes of silence]`,
  },
  {
    id: "lords-prayer",
    name: "The Lord's Prayer as Template",
    category: "Structure",
    icon: "✝️",
    description: "Jesus gave us the Lord's Prayer not as a script to repeat, but as an outline — each phrase a doorway into a different kind of prayer.",
    howTo: [
      "Our Father in heaven: Begin in relational awareness — you are God's child, approaching your Father, not a distant deity.",
      "Hallowed be your name: Spend time in adoration. What does God's name mean to you today? Holy, Provider, Prince of Peace?",
      "Your kingdom come, your will be done: Surrender your agenda. Pray for God's reign in your situation, your city, the world.",
      "Give us today our daily bread: Ask for provision — material and spiritual. Notice the word 'today' — this is not about hoarding.",
      "Forgive us as we forgive: Confess your sins. Then actively release those who have sinned against you. Don't rush this part.",
      "Lead us not into temptation: Ask for protection from specific temptations you face. Name them. Be honest.",
      "Deliver us from evil: Pray for spiritual protection — for yourself and those you love.",
    ],
    benefits: ["Jesus-designed structure", "Balances personal and global concerns", "Keeps confession and forgiveness linked", "Can expand to a rich 20+ minute prayer"],
    scripture: "This, then, is how you should pray: 'Our Father in heaven, hallowed be your name...'",
    scriptureRef: "Matthew 6:9",
    example: "Use each phrase as a heading and journal or pray for 2-3 minutes per section. A 7-phrase prayer can easily become 20+ minutes of meaningful communion.",
  },
  {
    id: "intercessory",
    name: "Intercessory Prayer",
    category: "Intercessory",
    icon: "🙏",
    description: "Standing in the gap for others — praying with specific, persistent, and faith-filled requests on behalf of people and situations you cannot change yourself.",
    howTo: [
      "Choose a person or situation to bring before God. Be specific: not 'pray for the world' but 'pray for Ahmed's health, for God to reveal himself to him.'",
      "Acknowledge God's authority and character relevant to the need. 'You are the Great Physician...' 'You are Lord of all nations...'",
      "Make your specific request. Name what you're asking for, why, and what transformation you're hoping for.",
      "Release the outcome to God. Intercessory prayer is not manipulation — it is participating in God's work. He is sovereign; you are not.",
    ],
    benefits: ["Develops compassion for others", "Trains our focus beyond ourselves", "Has measurable spiritual impact", "Models the intercession of Christ (Romans 8:34)"],
    scripture: "I urge, then, first of all, that petitions, prayers, intercession and thanksgiving be made for all people.",
    scriptureRef: "1 Timothy 2:1",
    example: "Create an intercession list: 5 unsaved people by name, 3 struggling friends, your pastor and church, your city/nation. Pray through one category per day.",
  },
  {
    id: "contemplative",
    name: "Contemplative / Centering Prayer",
    category: "Contemplative",
    icon: "🕊️",
    description: "A practice of wordless, open-hearted prayer before God — releasing inner chatter and consenting to God's presence and action.",
    howTo: [
      "Choose a sacred word: a short word or phrase that expresses your intention to consent to God's presence (e.g., 'Jesus,' 'Abba,' 'Come').",
      "Sit comfortably, eyes closed. Silently introduce your sacred word as a symbol of your consent to God.",
      "When thoughts arise — and they will — gently return to your sacred word. Don't fight the thoughts. Just return.",
      "After your session (start with 10 minutes), remain in silence for 2 minutes before opening your eyes.",
    ],
    benefits: ["Cultivates receptivity to God", "Trains attention and focus", "Rooted in 'be still and know' (Psalm 46:10)", "Counteracts the noise of modern life"],
    scripture: "Be still, and know that I am God.",
    scriptureRef: "Psalm 46:10",
    example: "Sacred word: 'Jesus.' Set a 15-minute timer. Sit quietly. When you notice you're planning dinner or reviewing an email, gently return to 'Jesus.' Let God work beneath the noise.",
  },
  {
    id: "breath-prayer",
    name: "Breath Prayer",
    category: "Embodied",
    icon: "🌬️",
    description: "A very short prayer — usually two phrases — synced to the rhythm of breathing. Ancient Christian practice, used throughout the day.",
    howTo: [
      "Choose a short prayer of 4–8 words total, divided into two halves.",
      "The first half is prayed silently on the inhale; the second on the exhale.",
      "Repeat throughout the day — driving, walking, before meetings, when anxious.",
      "After using one breath prayer for a week or two, you may choose another or return to the same one.",
    ],
    benefits: ["Transforms ordinary moments into prayer", "Anchors attention in God throughout the day", "Based on 1 Thessalonians 5:17 ('pray without ceasing')", "Accessible in any situation"],
    scripture: "Pray continually.",
    scriptureRef: "1 Thessalonians 5:17",
    example: `Examples:\n• Inhale: "Lord Jesus Christ," / Exhale: "have mercy on me"\n• Inhale: "You are my shepherd," / Exhale: "I shall not want"\n• Inhale: "Father," / Exhale: "I trust You"\n• Inhale: "Holy Spirit," / Exhale: "fill me"\n• Inhale: "I am loved" / Exhale: "by the Father"`,
  },
  {
    id: "journaling",
    name: "Journaling Prayer",
    category: "Written",
    icon: "✍️",
    description: "Writing your prayers as letters to God — slowing down, externalizing your thoughts, and creating a record of God's faithfulness.",
    howTo: [
      "Begin with a salutation — 'Father,' 'Lord,' 'Dear Jesus.' This small act shifts you from journaling to praying.",
      "Write freely for 5–10 minutes without editing. Let honesty be more important than eloquence.",
      "Include what you're grateful for, what you're struggling with, what you're asking for, and what you sense God saying.",
      "Date every entry. Reviewing entries from months prior reveals how God has moved — a powerful faith builder.",
    ],
    benefits: ["Externalizes thoughts that stay trapped in anxiety", "Creates a record of answered prayers", "Deepens self-awareness before God", "Can be reread as a spiritual history"],
    scripture: "I cry aloud to the Lord; I lift up my voice to the Lord for mercy. I pour out before him my complaint; before him I tell my trouble.",
    scriptureRef: "Psalm 142:1–2",
    example: "Try: Start with 'Father, today I feel...' and write for 10 minutes without stopping. End with 'What I need from You today is...' Date it and revisit in 30 days.",
  },
  {
    id: "walking",
    name: "Walking Prayer",
    category: "Embodied",
    icon: "🚶",
    description: "Praying while walking — combining physical movement with spiritual attention. Ancient labyrinths and outdoor pilgrimages both draw on this tradition.",
    howTo: [
      "Choose a route: a park loop, neighborhood block, or even a hallway. Set an intention for the walk as prayer.",
      "Pray conversationally as you walk. Speak aloud if you're alone. Notice what you see — let creation prompt praise.",
      "Some people use the walk structure: outbound = confession and petition; return = thanksgiving and listening.",
      "Or walk in silence, praying only with attention — eyes open, heart open, receiving what God offers through creation.",
    ],
    benefits: ["Breaks out of sedentary prayer ruts", "Creation prompts spontaneous praise", "Moving body can unlock stuck emotions", "Connects prayer to life outside four walls"],
    scripture: "The heavens declare the glory of God; the skies proclaim the work of his hands.",
    scriptureRef: "Psalm 19:1",
    example: "Tomorrow morning, walk your neighborhood for 15 minutes. The first 5: confess. The next 5: thank God for everything you see — trees, children, the sun. The last 5: listen.",
  },
  {
    id: "fasting",
    name: "Fasting Prayer",
    category: "Intercessory",
    icon: "🕐",
    description: "Combining abstinence from food (or another pleasure) with intensified prayer — expressing dependence on God and creating space for him to speak.",
    howTo: [
      "Choose the type of fast: full (water only), partial (no solid food), Daniel fast (no meat/sweets), or a media/social fast.",
      "Set a clear purpose: What are you fasting for? Write it down. Fasting without focus drifts into mere dieting.",
      "When hunger strikes, use it as a cue to pray. Hunger becomes a prayer alarm.",
      "Break your fast intentionally — with prayer, Scripture, and gratitude. Resist the urge to binge immediately.",
    ],
    benefits: ["Intensifies prayer focus", "Teaches the body that the spirit takes priority", "Historical basis across all Christian traditions", "Jesus assumed his disciples would fast (Matthew 6:16)"],
    scripture: "When you fast, do not look somber as the hypocrites do... But when you fast, put oil on your head and wash your face.",
    scriptureRef: "Matthew 6:16–17",
    example: "Start with a one-meal fast. Skip lunch, use lunchtime to pray for one specific request. When hunger comes: pray. Reintroduce food at dinner, and thank God.",
  },
  {
    id: "corporate",
    name: "Corporate & Liturgical Prayer",
    category: "Structure",
    icon: "⛪",
    description: "Praying together in community — whether unscripted or through written liturgies that have shaped Christian prayer for centuries.",
    howTo: [
      "Gather with at least one other believer. Jesus promises his presence where two or three gather (Matthew 18:20).",
      "Consider using written prayers — the Book of Common Prayer, the Daily Office, or the Psalms read aloud together.",
      "Responsive prayer: one person leads each line, others respond together. Creates unity without performance.",
      "Pray one topic at a time, with multiple people contributing, before moving to the next. Avoid 'piling on' prayers.",
    ],
    benefits: ["Carries the weight when individual prayer is hard", "Unites the body of Christ in shared language", "Liturgy connects us to 2,000 years of Christian prayer", "Teaches beginners by modeling"],
    scripture: "For where two or three gather in my name, there am I with them.",
    scriptureRef: "Matthew 18:20",
    example: "Try the morning Psalm reading from the Daily Office (Morning Prayer). Read it aloud, even alone. The Psalms are Israel's prayer book — every human emotion is there.",
  },
];

const GUIDED = [
  {
    id: "morning",
    title: "Morning Offering",
    duration: "5 min",
    icon: "🌅",
    color: "#FFB347",
    steps: [
      { instruction: "Sit quietly for one minute. Take three deep breaths. Let the busyness of what's ahead settle.", verse: "This is the day the Lord has made; let us rejoice and be glad in it.", verseRef: "Psalm 118:24" },
      { instruction: "Thank God for the gift of another morning. Name three specific things you're grateful for today.", verse: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning.", verseRef: "Lamentations 3:22–23" },
      { instruction: "Confess anything from yesterday that wasn't right. Be specific but brief. Receive forgiveness.", verse: "If we confess our sins, he is faithful and just and will forgive us our sins.", verseRef: "1 John 1:9" },
      { instruction: "Surrender today's plans and concerns to God. Say aloud: 'Lord, today belongs to You. Direct my steps.'", verse: "Commit to the Lord whatever you do, and he will establish your plans.", verseRef: "Proverbs 16:3" },
      { instruction: "Ask for one specific thing you need today — wisdom, courage, peace, provision.", verse: "If any of you lacks wisdom, you should ask God, who gives generously to all.", verseRef: "James 1:5" },
      { instruction: "Close with the Lord's Prayer, slowly. Then: 'Lord, I am yours today. Use me.'", verse: "Your will be done on earth as it is in heaven.", verseRef: "Matthew 6:10" },
    ],
  },
  {
    id: "healing",
    title: "Healing Prayer",
    duration: "8 min",
    icon: "💚",
    color: "#3a7d56",
    steps: [
      { instruction: "Begin in stillness. Place your hand on the area of need or simply open your palms upward — a posture of receiving.", verse: "Lord, if you are willing, you can make me clean.", verseRef: "Matthew 8:2" },
      { instruction: "Acknowledge God as the source of all healing — physical, emotional, and spiritual. He is the Great Physician.", verse: "He heals the brokenhearted and binds up their wounds.", verseRef: "Psalm 147:3" },
      { instruction: "Be honest about your pain. Tell God exactly what hurts — don't sanitize it.", verse: "My soul is in deep anguish. How long, Lord, how long?", verseRef: "Psalm 6:3" },
      { instruction: "Ask for healing with specificity. Physical healing, emotional healing, freedom from fear, restoration of what was lost.", verse: "By his wounds we are healed.", verseRef: "Isaiah 53:5" },
      { instruction: "Release the outcome to God. Healing comes on his timeline, in his way. Your job is trust, not control.", verse: "Not my will, but yours be done.", verseRef: "Luke 22:42" },
      { instruction: "Pray for those with you or for whom you're interceding. Lay hands (literally or symbolically) on them in prayer.", verse: "They will place their hands on sick people, and they will get well.", verseRef: "Mark 16:18" },
      { instruction: "Thank God in advance, by faith, for his work in this situation — seen or unseen.", verse: "Do not be anxious... and the peace of God, which transcends all understanding, will guard your hearts.", verseRef: "Philippians 4:6–7" },
    ],
  },
  {
    id: "confession",
    title: "Confession & Forgiveness",
    duration: "6 min",
    icon: "🕊️",
    color: "#A080FF",
    steps: [
      { instruction: "Sit in silence. Ask the Holy Spirit to search your heart. Don't manufacture guilt — just be open.", verse: "Search me, God, and know my heart; test me and know my anxious thoughts.", verseRef: "Psalm 139:23" },
      { instruction: "Name specific sins that come to mind. Speak them aloud or write them down. Specificity matters.", verse: "If we confess our sins, he is faithful and just and will forgive us our sins.", verseRef: "1 John 1:9" },
      { instruction: "Receive forgiveness. Don't rush past this. Say aloud: 'I am forgiven. There is no condemnation for me.'", verse: "There is now no condemnation for those who are in Christ Jesus.", verseRef: "Romans 8:1" },
      { instruction: "Is there anyone you need to forgive? Name them. Release them from the debt they owe you.", verse: "Forgive as the Lord forgave you.", verseRef: "Colossians 3:13" },
      { instruction: "Ask for the power to change — not willpower, but the Holy Spirit's transforming work.", verse: "Create in me a pure heart, O God, and renew a steadfast spirit within me.", verseRef: "Psalm 51:10" },
      { instruction: "Rest in grace. You are not defined by your failures. You are defined by whose you are.", verse: "See what great love the Father has lavished on us, that we should be called children of God!", verseRef: "1 John 3:1" },
    ],
  },
  {
    id: "family",
    title: "Intercession for Family",
    duration: "7 min",
    icon: "👨‍👩‍👧",
    color: "#4FC3F7",
    steps: [
      { instruction: "Begin by thanking God for your family — even the hard parts. Name each person by name in gratitude.", verse: "I thank my God every time I remember you.", verseRef: "Philippians 1:3" },
      { instruction: "Pray for your spouse or future spouse: wisdom, peace, intimacy with God, protection from the enemy.", verse: "Two are better than one... if either of them falls down, one can help the other up.", verseRef: "Ecclesiastes 4:9–10" },
      { instruction: "Pray for your children or younger family members by name: salvation, identity in Christ, godly friendships, protection.", verse: "Train up a child in the way he should go; even when he is old he will not depart from it.", verseRef: "Proverbs 22:6" },
      { instruction: "Pray for your parents or elders in the family: health, peace, salvation if needed, honoring their role.", verse: "Honor your father and your mother.", verseRef: "Exodus 20:12" },
      { instruction: "Pray for family wounds and broken relationships. Name them. Ask God for healing and reconciliation.", verse: "He will turn the hearts of the parents to their children, and the hearts of the children to their parents.", verseRef: "Malachi 4:6" },
      { instruction: "Declare God's purposes over your family line: 'As for me and my household, we will serve the Lord.'", verse: "As for me and my household, we will serve the Lord.", verseRef: "Joshua 24:15" },
      { instruction: "Ask God to make your home a place of rest, love, and encounter — a foretaste of his kingdom.", verse: "Blessed are all who fear the Lord, who walk in obedience to him. Your children will be like olive shoots around your table.", verseRef: "Psalm 128:1–3" },
    ],
  },
  {
    id: "nighttime",
    title: "Nighttime Gratitude",
    duration: "4 min",
    icon: "🌙",
    color: "#6B4FBB",
    steps: [
      { instruction: "Lie down or sit comfortably. Let the day's busyness drain away. You are held. You are safe.", verse: "He grants sleep to those he loves.", verseRef: "Psalm 127:2" },
      { instruction: "Review today with God: Where did you see his hand? Name five specific gifts from the day.", verse: "Give thanks in all circumstances; for this is God's will for you in Christ Jesus.", verseRef: "1 Thessalonians 5:18" },
      { instruction: "Confess briefly anything that went wrong today. Don't dwell — confess, receive, release.", verse: "In your anger do not sin: do not let the sun go down while you are still angry.", verseRef: "Ephesians 4:26" },
      { instruction: "Surrender tomorrow to God. Release the anxieties you're carrying into sleep. He is awake and working.", verse: "Cast all your anxiety on him because he cares for you.", verseRef: "1 Peter 5:7" },
      { instruction: "Close with Psalm 4:8: 'In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.'", verse: "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.", verseRef: "Psalm 4:8" },
    ],
  },
];

const PLANS = [
  { id: "morning-21", title: "21 Days of Morning Prayer", description: "Build a consistent morning prayer practice using the ACTS method with a new Scripture passage each day.", days: 21, dailyTime: "10 min", icon: "🌅" },
  { id: "city-30", title: "Praying for My City", description: "30 days of intercession for your community — local leaders, schools, neighborhoods, justice, revival.", days: 30, dailyTime: "8 min", icon: "🏙️" },
  { id: "psalms-30", title: "Praying Through the Psalms", description: "30 days with one psalm per day — read, reflect, and respond in prayer. From lament to praise.", days: 30, dailyTime: "12 min", icon: "📖" },
];

const VOICES_PM = [
  { id: "bounds-em", name: "E.M. Bounds", era: "1835-1913", context: "Power Through Prayer (1907); The Necessity of Prayer; spent four hours in prayer every morning", bio: "Edward McKendree Bounds was a Civil War chaplain who spent the last seventeen years of his life rising at 4am to pray until 7am before beginning his day's work. He wrote eleven books on prayer, all posthumously published, that constitute the most intense advocacy for prayer as the central work of the Christian minister in the English language. Bounds argued that the church's weakness is primarily a prayer weakness — that all the organization, education, and technique in the world will not substitute for the power that comes from protracted, earnest prayer. His books on prayer are among the most demanding and convicting in the entire devotional tradition.", quote: "Prayer is not preparation for the battle — prayer is the battle. The real work of the church is done on our knees. Everything else is just follow-through.", contribution: "Bounds's books on prayer, particularly Power Through Prayer, have been in continuous print for over a century and have formed generations of ministers who take prayer seriously as a discipline. His intensity and demands are excessive for many readers — but his core conviction, that prayer is primary and everything else is secondary, has never been successfully refuted." },
  { id: "murray-a", name: "Andrew Murray", era: "1828-1917", context: "With Christ in the School of Prayer (1885); The Ministry of Intercession (1898); South African Reformed pastor", bio: "Andrew Murray was a South African Dutch Reformed pastor who wrote over 200 books and pamphlets on the Christian life, with prayer as the central theme of his life's work. With Christ in the School of Prayer, structured around the Lord's Prayer and the disciples' request 'Lord, teach us to pray,' remains the most systematic devotional treatment of prayer as a discipline to be learned. Murray argued that prayer is not natural to fallen humanity — it must be taught, practiced, and developed through faithful discipline, just as a musician develops through practice. His chapter on intercession and his treatment of faith in prayer have been particularly influential.", quote: "The man who kneels before God can stand before anything. Prayer is not preparation for battle — prayer is the mightiest weapon in battle.", contribution: "Murray's With Christ in the School of Prayer has guided more Christians into structured, disciplined prayer than almost any other 19th-century devotional book. It remains in print, has been translated into dozens of languages, and continues to form the prayer lives of Christians around the world." },
  { id: "hallesby-o", name: "Ole Hallesby", era: "1879-1961", context: "Prayer (1931) — possibly the most widely read systematic treatment of prayer in Scandinavian Christianity", bio: "Ole Hallesby was a Norwegian Lutheran theologian whose book Prayer remains one of the most beloved treatments of the subject in the 20th century. Where Bounds emphasizes intensity and Murray emphasizes discipline, Hallesby emphasizes helplessness: prayer, he argues, is the cry of the helpless to the all-sufficient God, and it is precisely our helplessness — rightly understood — that is the primary qualification for prayer. His famous definition: 'To pray is to let Jesus come into our helplessness.' Hallesby was imprisoned during the Nazi occupation of Norway for his public Christian witness and emerged from prison with an even deeper prayer life.", quote: "To pray is to let Jesus come into our helplessness. It is the cry of the needy to the one who has all we need. Prayer is not our strength — it is our surrender.", contribution: "Prayer has guided generations of Norwegian, Scandinavian, and globally translated readers into a prayer life grounded in grace rather than effort. Its emphasis on helplessness as a prayer qualification — rather than a disqualification — has given permission to many struggling Christians to pray without pretense." },
  { id: "foster-rf", name: "Richard Foster", era: "b. 1942", context: "Prayer: Finding the Heart's True Home (1992); Celebration of Discipline (1978)", bio: "Richard Foster's Prayer: Finding the Heart's True Home is the most comprehensive survey of Christian prayer forms in contemporary evangelical literature — covering adoration, simple prayer, prayer of the forsaken, sacramental prayer, healing prayer, contemplative prayer, and intercessory prayer, among many others. Where most books on prayer focus on one method or tradition, Foster drew on the full breadth of Christian history to show that prayer is a many-roomed house. No single form exhausts what prayer can be. His Celebration of Discipline, with its chapter on prayer, first introduced millions of evangelicals to the broader Christian tradition of spiritual disciplines.", quote: "Prayer catapults us onto the frontier of the spiritual life. Of all the spiritual disciplines, prayer is the most central because it ushers us into perpetual communion with the Father.", contribution: "Foster's Prayer gave evangelicals permission to explore the full range of Christian prayer traditions — including contemplative and charismatic forms — without abandoning their evangelical commitments. It remains the standard introductory text for survey courses on Christian spirituality and prayer in evangelical seminaries." },
  { id: "willard-dpr", name: "Dallas Willard", era: "1935-2013", context: "Hearing God (1984); The Spirit of the Disciplines (1988) — prayer as conversational relationship with God", bio: "Dallas Willard approached prayer primarily as conversation — the two-way communication that constitutes a genuine relationship with God. Where many prayer books focus on what we say to God, Willard argued that the transforming dimension of prayer is hearing God speak. His Hearing God explored the ways God speaks to those who are listening — through Scripture, through the inner voice, through others — and gave Christians a framework for discerning God's communication in prayer. His Spirit of the Disciplines placed prayer within a comprehensive account of how the spiritual disciplines transform human character by putting us in the presence and under the influence of the Kingdom of God.", quote: "Prayer is not performance — it is conversation. And God's part of the conversation is as important as ours. The person who learns to hear God speak has discovered the secret of prayer.", contribution: "Willard's conversational model of prayer, developed across multiple books, gave Christians a framework that was simultaneously relational (it's dialogue, not monologue), practical (he addressed how to discern God's voice), and theologically grounded (prayer as Kingdom participation). It has been especially influential among younger evangelical readers drawn to the spiritual formation tradition." },
];

const PRAYER_SCRIPTURE = [
  {
    id: "lords-prayer-text",
    ref: "Matthew 6:9-13",
    text: "Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven. Give us today our daily bread. And forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from the evil one.",
    theme: "Pattern for Prayer",
    devotional: "The Lord's Prayer is not merely a prayer to be recited but a curriculum to be inhabited. Jesus gives us six movements: adoration of the Father, submission to his kingdom, dependence on his provision, the exchange of forgiveness, protection from temptation, and deliverance from evil. Every essential element of the Christian life is compressed into these few lines. When Jesus says 'This, then, is how you should pray,' he is handing us not a script but a map — a map to the full geography of prayer. Spend five minutes in each movement and a simple prayer becomes a thirty-minute encounter.",
  },
  {
    id: "philippians-peace",
    ref: "Philippians 4:6-7",
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
    theme: "Prayer and Peace",
    devotional: "Paul writes from prison, not from a retreat center. His command not to be anxious is not wishful thinking — it is grounded in a practice: bring everything to God with thanksgiving. The thanksgiving is not a requirement to feel happy about hard things; it is an acknowledgment that God is already at work before we bring our request. The result Paul promises — a peace that transcends understanding — is not the absence of difficulty but a supernatural guarding of the heart and mind. Prayer does not always change our circumstances; it consistently changes what our circumstances do to us.",
  },
  {
    id: "persistent-widow",
    ref: "Luke 18:1-8",
    text: "Then Jesus told his disciples a parable to show them that they should always pray and not give up. He said: 'In a certain town there was a judge who neither feared God nor cared what people thought. And there was a widow in that town who kept coming to him with the plea, Grant me justice against my adversary.'",
    theme: "Perseverance in Prayer",
    devotional: "Jesus tells this parable to a specific end: so that his disciples would always pray and not give up. The parable's logic is from lesser to greater — if an unjust judge eventually grants justice to a persistent widow, how much more will a loving Father respond to his children who cry out day and night? The parable does not teach that God needs to be worn down; it teaches that persistent prayer keeps us oriented toward God as the source of justice and provision. The danger Jesus addresses is not that God won't answer, but that we will lose faith and stop asking. The question at the end is searching: when the Son of Man comes, will he find faith on the earth?",
  },
  {
    id: "spirit-intercedes",
    ref: "Romans 8:26-27",
    text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans. And he who searches our hearts knows the mind of the Spirit, because the Spirit intercedes for God's people in accordance with the will of God.",
    theme: "The Spirit's Help",
    devotional: "This passage is a lifeline for every believer who has sat in prayer not knowing what to say. Paul does not see this as a failure — he describes it as normal Christian experience. We do not know what we ought to pray for. But the Spirit himself intercedes for us with groans that go beyond language. The Spirit within us is already praying in alignment with the Father's will, even when we cannot articulate what we need. When words fail, this passage invites us to simply be present — to offer our silence, our groaning, our confusion — trusting that the Spirit is translating our wordless need into perfect intercession before the throne.",
  },
  {
    id: "pray-without-ceasing",
    ref: "1 Thessalonians 5:16-18",
    text: "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
    theme: "Continuous Prayer",
    devotional: "Three commands in nine words: rejoice always, pray continually, give thanks in all circumstances. The Greek word translated 'continually' (adialeiptos) means without interruption — not that every moment is a formal prayer session, but that there is an unbroken orientation of the heart toward God throughout the day. Brother Lawrence called this 'practicing the presence of God' — turning every ordinary moment into a conversation with the Father. The breath prayer tradition, the Jesus Prayer, the practice of offering the day's first and last thoughts to God — all are attempts to embody this command. The goal is not more religious activity; it is a life in which nothing is outside the sphere of prayer.",
  },
  {
    id: "pour-out-hearts",
    ref: "Psalm 62:8",
    text: "Trust in him at all times, you people; pour out your hearts to him, for God is our refuge.",
    theme: "Raw Honesty Before God",
    devotional: "The invitation to 'pour out your hearts' to God is an invitation to radical honesty — not the sanitized, performance-ready version of ourselves we often bring to prayer, but the actual contents: the fear, the anger, the doubt, the grief, the confusion, the longing. The Psalms model this throughout: Psalm 22 begins with abandonment, Psalm 88 ends in darkness, Psalm 139 asks God to search and know even the anxious thoughts. God is not honored by our pretense that we are fine when we are not. He is a refuge — a refuge is for people who need shelter, not for those who have it all together. Pour out what is actually there.",
  },
];

const PRAYER_GUIDES = [
  {
    id: "daily-office",
    title: "The Daily Office",
    icon: "⏰",
    duration: "15-20 min",
    audience: "Beginners",
    description: "Fixed-hour prayer rooted in the ancient practice of morning and evening prayer. Based on Psalms and Scripture readings, this structure has ordered Christian worship for over 1,500 years — from the desert fathers through Benedictine monasteries to the Book of Common Prayer. It anchors the day in the rhythms of Scripture rather than the rhythms of productivity.",
    schedule: [
      "Morning Psalm — read aloud one Psalm slowly, as prayer",
      "New Testament Reading — one short passage, read twice",
      "The Lord's Prayer — spoken slowly, phrase by phrase",
      "Intercession — brief prayers for self, family, church, world",
      "Closing Collect — a short written prayer committing the day to God",
    ],
  },
  {
    id: "examen",
    title: "The Prayer of Examen",
    icon: "🕯️",
    duration: "15 min",
    audience: "Intermediate",
    description: "Developed by Ignatius of Loyola in the 16th century, the Examen is a daily review of the soul — not a guilt audit, but a prayerful looking back over the day to notice where God was present and where we responded well or poorly. Ignatius considered it so foundational that he said if a Jesuit could only pray once a day, it should be the Examen rather than formal meditation. It trains the soul to see God's fingerprints in ordinary moments.",
    schedule: [
      "Gratitude — name three specific gifts from the past 24 hours",
      "Review — walk slowly through the day, hour by hour, noticing",
      "Sorrow — acknowledge moments of failure, sin, or missed grace",
      "Resolution — name one concrete intention for tomorrow",
      "Look Forward — offer tomorrow to God with one line of surrender",
    ],
  },
  {
    id: "acts-couples",
    title: "ACTS for Couples",
    icon: "👫",
    duration: "10 min",
    audience: "Couples",
    description: "Praying together is one of the most intimate and most avoided practices in marriage. This structured 10-minute guide uses the ACTS framework to give couples a container for shared prayer without the awkwardness of not knowing who should say what. Regular couples prayer is consistently linked in research to higher marital satisfaction, greater emotional intimacy, and reduced conflict — but more importantly, it keeps the couple oriented toward God as the center of the marriage.",
    schedule: [
      "Adoration — one sentence each: who is God to you today?",
      "Confession — one sentence each: where did I fall short this week? (spoken to God, not each other)",
      "Thanksgiving — two or three things each: what are you grateful for together?",
      "Supplication — pray for each other by name, then for your household, then for one person outside your marriage",
    ],
  },
  {
    id: "intercessory-journal",
    title: "Intercessory Prayer Journal",
    icon: "📓",
    duration: "30 min",
    audience: "Advanced",
    description: "Systematic intercession requires a system — otherwise the same people get prayed for while others are forgotten. This 30-minute journal method uses a rotating structure to ensure that prayer covers the full scope of concern: from personal confession to global mission. Keeping a written record transforms intercession from a vague activity into a specific, trackable practice with a documented history of answered and unanswered prayer.",
    schedule: [
      "Praise — 5 minutes of written adoration: attributes of God, specific acts of faithfulness",
      "Personal Confession — 5 minutes: specific sins, failures, patterns requiring repentance",
      "Family & Friends — 10 minutes: name by name intercession for those closest to you",
      "Church & Local Community — 5 minutes: pastor, staff, specific needs in the congregation",
      "Nation & Government — 3 minutes: leaders, justice, cultural issues",
      "World Mission — 2 minutes: unreached people groups, persecuted church, specific missionaries",
    ],
  },
];

const PRAYER_VIDEOS = [
  {
    id: "chan-forgotten-god-1",
    title: "Forgotten God: Why Do I Need the Spirit?",
    preacher: "Francis Chan",
    videoId: "sWMjg7CxIKk",
    description: "Chan challenges Christians to experience the Holy Spirit's role in genuine prayer",
  },
  {
    id: "chan-forgotten-god-2",
    title: "Forgotten God: Theology of the Holy Spirit",
    preacher: "Francis Chan",
    videoId: "SCUEicqda1g",
    description: "Part 3 of Chan's Forgotten God series exploring how the Spirit prays through us",
  },
  {
    id: "keller-prodigal",
    title: "The Prodigal Sons",
    preacher: "Tim Keller",
    videoId: "lsTzXI7cJGA",
    description: "Keller's exposition of Luke 15 showing the Father who runs to meet us — the posture of prayer",
  },
  {
    id: "sproul-holiness-prayer",
    title: "The Holiness of God",
    preacher: "R.C. Sproul",
    videoId: "v6xk8e7gdMA",
    description: "Understanding God's holiness transforms how we approach him in prayer",
  },
  {
    id: "piper-waste-life",
    title: "Don't Waste Your Life",
    preacher: "John Piper",
    videoId: "JHdB1dYAteA",
    description: "Piper's vision for a life of radical God-centeredness that includes a life of prayer",
  },
  {
    id: "washer-shocking",
    title: "Shocking Youth Message",
    preacher: "Paul Washer",
    videoId: "uuabITeO4l8",
    description: "Washer's call to examine the reality of one's prayer life and relationship with Christ",
  },
];

export default function PrayerMethodsPage() {
  const [tab, setTab] = useState<Tab>("methods");
  const [selectedVoice, setSelectedVoice] = useState("bounds-em");
  const voiceItem = VOICES_PM.find(v => v.id === selectedVoice)!;
  const [practiced, setPracticed] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_prayer_methods_practiced"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [saved, setSaved] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_prayer_methods_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [openMethod, setOpenMethod] = useState<string | null>(null);
  const [guidedActive, setGuidedActive] = useState<typeof GUIDED[0] | null>(null);
  const [guidedStep, setGuidedStep] = useState(0);
  const [planStarted, setPlanStarted] = useState<Record<string, string>>(() => {
    try { const s = localStorage.getItem("vine_prayer_plan_started"); return s ? JSON.parse(s) : {}; } catch { return {}; }
  });
  const [catFilter, setCatFilter] = useState("All");

  const togglePracticed = (id: string) => {
    setPracticed(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("vine_prayer_methods_practiced", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const toggleSaved = (id: string) => {
    setSaved(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("vine_prayer_methods_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const startPlan = (id: string) => {
    const next = { ...planStarted, [id]: new Date().toISOString().split("T")[0] };
    setPlanStarted(next);
    try { localStorage.setItem("vine_prayer_plan_started", JSON.stringify(next)); } catch {}
  };

  const categories = ["All", "Structure", "Contemplative", "Intercessory", "Embodied", "Written"];
  const filteredMethods = catFilter === "All" ? METHODS : METHODS.filter(m => m.category === catFilter);

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🙏</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Ways to Pray</h1>
          <p style={{ color: "#9898B3", fontSize: 16 }}>Every prayer form that draws us closer to God</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(58,125,86,0.1)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.25)", borderRadius: 20, padding: "4px 14px", fontSize: 13 }}>
              {practiced.size}/{METHODS.length} Practiced
            </span>
            <span style={{ background: "rgba(107,79,187,0.1)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)", borderRadius: 20, padding: "4px 14px", fontSize: 13 }}>
              {GUIDED.length} Guided Sessions
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 28, borderBottom: "1px solid #1E1E32" }}>
          {([
            ["methods", "Methods"],
            ["scripture", "Scripture"],
            ["guides", "Prayer Guides"],
            ["videos", "Videos"],
          ] as const).map(([t, label]) => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: tab === t ? "#3a7d56" : "#6A6A88", borderBottom: `2px solid ${tab === t ? "#3a7d56" : "transparent"}`, marginBottom: -1 }}>
              {label}
            </button>
          ))}
        </div>

        {/* Methods Tab */}
        {tab === "methods" && (
          <>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {categories.map(c => (
                <button key={c} onClick={() => setCatFilter(c)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${catFilter === c ? "#3a7d56" : "#1E1E32"}`, background: catFilter === c ? "rgba(58,125,86,0.1)" : "transparent", color: catFilter === c ? "#3a7d56" : "#9898B3", fontSize: 13, cursor: "pointer", fontWeight: catFilter === c ? 700 : 400 }}>
                  {c}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {filteredMethods.map(m => (
                <div key={m.id} style={{ background: "#12121F", borderRadius: 16, overflow: "hidden", border: `1px solid ${openMethod === m.id ? "rgba(58,125,86,0.3)" : practiced.has(m.id) ? "rgba(58,125,86,0.15)" : "#1E1E32"}` }}>
                  <div style={{ padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
                    onClick={() => setOpenMethod(openMethod === m.id ? null : m.id)}>
                    <div style={{ display: "flex", gap: 14, alignItems: "center", flex: 1 }}>
                      <span style={{ fontSize: 26 }}>{m.icon}</span>
                      <div>
                        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4, flexWrap: "wrap" }}>
                          <h3 style={{ fontSize: 16, fontWeight: 700, color: openMethod === m.id ? "#3a7d56" : "#F2F2F8" }}>{m.name}</h3>
                          <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)" }}>{m.category}</span>
                          {practiced.has(m.id) && <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "rgba(58,125,86,0.1)", color: "#3a7d56" }}>✓ Practiced</span>}
                        </div>
                        <p style={{ fontSize: 13, color: "#9898B3" }}>{m.description}</p>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, marginLeft: 12 }}>
                      <button onClick={e => { e.stopPropagation(); toggleSaved(m.id); }}
                        style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: saved.has(m.id) ? "#FFD700" : "#4A4A68" }}>
                        {saved.has(m.id) ? "★" : "☆"}
                      </button>
                      <span style={{ color: "#6A6A88", fontSize: 18 }}>{openMethod === m.id ? "−" : "+"}</span>
                    </div>
                  </div>
                  {openMethod === m.id && (
                    <div style={{ padding: "0 22px 22px", borderTop: "1px solid #1E1E32" }}>
                      <div style={{ marginTop: 16, marginBottom: 20 }}>
                        <h4 style={{ fontSize: 13, fontWeight: 700, color: "#3a7d56", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>How to Practice</h4>
                        {m.howTo.map((step, i) => (
                          <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10 }}>
                            <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(58,125,86,0.15)", border: "1px solid rgba(58,125,86,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#3a7d56", flexShrink: 0 }}>{i + 1}</div>
                            <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.6 }}>{step}</p>
                          </div>
                        ))}
                      </div>

                      <div style={{ background: "#0D0D1A", borderRadius: 10, padding: 14, marginBottom: 16, borderLeft: "3px solid #6B4FBB" }}>
                        <p style={{ fontSize: 13, color: "#C0C0D8", fontStyle: "italic", marginBottom: 4 }}>"{m.scripture}"</p>
                        <p style={{ fontSize: 12, color: "#A080FF" }}>— {m.scriptureRef}</p>
                      </div>

                      {m.example && (
                        <div style={{ background: "#0D0D1A", borderRadius: 10, padding: 14, marginBottom: 16 }}>
                          <h4 style={{ fontSize: 12, fontWeight: 700, color: "#9898B3", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Example</h4>
                          <p style={{ fontSize: 13, color: "#C0C0D8", lineHeight: 1.7, whiteSpace: "pre-line" }}>{m.example}</p>
                        </div>
                      )}

                      <div style={{ marginBottom: 16 }}>
                        <h4 style={{ fontSize: 12, fontWeight: 700, color: "#9898B3", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Benefits</h4>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                          {m.benefits.map(b => <span key={b} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 8, background: "#1E1E32", color: "#C0C0D8" }}>{b}</span>)}
                        </div>
                      </div>

                      <button onClick={() => togglePracticed(m.id)}
                        style={{ padding: "10px 20px", borderRadius: 10, border: `1px solid ${practiced.has(m.id) ? "rgba(58,125,86,0.4)" : "#2A2A40"}`, background: practiced.has(m.id) ? "rgba(58,125,86,0.1)" : "#1E1E32", color: practiced.has(m.id) ? "#3a7d56" : "#9898B3", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                        {practiced.has(m.id) ? "✓ Practiced This Method" : "Mark as Practiced"}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Scripture Tab */}
        {tab === "scripture" && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}>Scripture on Prayer</h2>
              <p style={{ color: "#9898B3", fontSize: 15, maxWidth: 580, margin: "0 auto" }}>
                Six passages that define, deepen, and transform the practice of prayer &mdash; with devotional reflections for each.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {PRAYER_SCRIPTURE.map(entry => (
                <div
                  key={entry.id}
                  style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 18, padding: 28 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <span style={{ color: "#3a7d56", fontWeight: 800, fontSize: 16 }}>{entry.ref}</span>
                    <span
                      style={{
                        background: "rgba(107,79,187,0.15)",
                        color: "#A080FF",
                        border: "1px solid rgba(107,79,187,0.3)",
                        borderRadius: 100,
                        padding: "3px 12px",
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      {entry.theme}
                    </span>
                  </div>
                  <p style={{ color: "#C0C0D8", fontSize: 15, fontStyle: "italic", lineHeight: 1.8, marginBottom: 20, borderLeft: "3px solid #3a7d56", paddingLeft: 16 }}>
                    &ldquo;{entry.text}&rdquo;
                  </p>
                  <p style={{ color: "#9898B3", fontSize: 14, lineHeight: 1.9 }}>
                    {entry.devotional}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Prayer Guides Tab */}
        {tab === "guides" && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}>Prayer Guides</h2>
              <p style={{ color: "#9898B3", fontSize: 15, maxWidth: 580, margin: "0 auto" }}>
                Structured frameworks for different stages of the prayer life &mdash; from daily office to systematic intercession.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: 24 }}>
              {PRAYER_GUIDES.map(guide => (
                <div
                  key={guide.id}
                  style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 20, padding: 28 }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
                    <span style={{ fontSize: 32, flexShrink: 0 }}>{guide.icon}</span>
                    <div>
                      <h3 style={{ color: "#F2F2F8", fontWeight: 800, fontSize: 20, marginBottom: 8 }}>{guide.title}</h3>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        <span style={{ background: "rgba(58,125,86,0.1)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.25)", borderRadius: 100, padding: "3px 10px", fontSize: 12, fontWeight: 700 }}>
                          {guide.duration}
                        </span>
                        <span style={{ background: "rgba(107,79,187,0.12)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)", borderRadius: 100, padding: "3px 10px", fontSize: 12, fontWeight: 700 }}>
                          {guide.audience}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>
                    {guide.description}
                  </p>
                  <div>
                    <p style={{ color: "#9898B3", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                      Steps
                    </p>
                    <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                      {guide.schedule.map((step, i) => (
                        <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <div
                            style={{
                              width: 24,
                              height: 24,
                              borderRadius: "50%",
                              background: "rgba(58,125,86,0.12)",
                              border: "1px solid rgba(58,125,86,0.3)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 11,
                              fontWeight: 700,
                              color: "#3a7d56",
                              flexShrink: 0,
                            }}
                          >
                            {i + 1}
                          </div>
                          <span style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.6, paddingTop: 2 }}>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* Videos Tab */}
        {tab === "videos" && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}>Prayer Videos</h2>
              <p style={{ color: "#9898B3", fontSize: 15, maxWidth: 580, margin: "0 auto" }}>
                Messages from preachers and teachers who will challenge and deepen your prayer life.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: 28 }}>
              {PRAYER_VIDEOS.map(video => (
                <div
                  key={video.id}
                  style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 20, overflow: "hidden" }}
                >
                  <div style={{ padding: "20px 20px 0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                      <span
                        style={{
                          background: "rgba(107,79,187,0.2)",
                          color: "#A080FF",
                          border: "1px solid rgba(107,79,187,0.35)",
                          borderRadius: 100,
                          padding: "4px 12px",
                          fontSize: 12,
                          fontWeight: 700,
                        }}
                      >
                        {video.preacher}
                      </span>
                    </div>
                    <h3 style={{ color: "#F2F2F8", fontWeight: 800, fontSize: 17, marginBottom: 8 }}>
                      {video.title}
                    </h3>
                    <p style={{ color: "#9898B3", fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
                      {video.description}
                    </p>
                  </div>
                  <div style={{ padding: "0 20px 20px" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", borderRadius: 8 }}
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
}
