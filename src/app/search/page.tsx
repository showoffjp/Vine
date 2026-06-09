"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Search, X, Flame, ChevronRight, Clock, Heart } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const categories = [
  { label: "All", icon: "✦", color: "#3a7d56" },
  { label: "Articles", icon: "📖", color: "#3B82F6" },
  { label: "Discussions", icon: "💬", color: "#6B4FBB" },
  { label: "Scripture", icon: "✝️", color: "#3a7d56" },
  { label: "Stories", icon: "❤️", color: "#EC4899" },
  { label: "Videos", icon: "🎬", color: "#EF4444" },
  { label: "Groups", icon: "👥", color: "#10B981" },
  { label: "People", icon: "🌍", color: "#F59E0B" },
];

const trending = [
  "Unanswered prayer", "Romans 8 explained", "Faith and anxiety",
  "Is the Bible reliable?", "C.S. Lewis quotes", "Sabbath rest",
  "Christian dating", "Doubt and faith", "Prayer warrior",
];

const allResults = [
  {
    type: "Article",
    typeColor: "#3B82F6",
    icon: "📖",
    title: "Why the Resurrection Changes Everything",
    excerpt: "Paul's declaration in 1 Corinthians 15 isn't a footnote to Christianity — it's the entire foundation.",
    meta: "Dr. Marcus Webb · 8 min read · 24.3k views",
    href: "/blog/why-the-resurrection-changes-everything",
    tags: ["Resurrection", "Theology"],
    hearts: 1842,
  },
  {
    type: "Discussion",
    typeColor: "#6B4FBB",
    icon: "💬",
    title: "How do you handle doubt without losing faith?",
    excerpt: "I've been a Christian for 15 years, but the last six months have shaken me. Looking for honest responses, not platitudes.",
    meta: "r/FaithAndDoubt · 847 replies · 2.1k upvotes",
    href: "/discussions/faith-and-doubt-001",
    tags: ["Doubt", "Faith"],
    hearts: 2103,
  },
  {
    type: "Scripture",
    typeColor: "#3a7d56",
    icon: "✝️",
    title: "Romans 8:28 — And we know that in all things God works for the good",
    excerpt: "...of those who love him, who have been called according to his purpose.",
    meta: "New International Version · Romans 8",
    href: "/bible",
    tags: ["Romans", "Providence"],
    hearts: 5821,
  },
  {
    type: "Story",
    typeColor: "#EC4899",
    icon: "❤️",
    title: "From Drug Cartel Enforcer to Church Planter",
    excerpt: "I was 23 years old, knee-deep in cartel work, certain I was going to die before 30...",
    meta: "Carlos Mendez · Bogotá, Colombia · 12 min read",
    href: "/stories/carlos-mendez-drug-cartel-to-church-planter",
    tags: ["Redemption", "Colombia"],
    hearts: 5832,
  },
  {
    type: "Group",
    typeColor: "#10B981",
    icon: "👥",
    title: "Reformed Theology Discussion",
    excerpt: "Deep dives into Reformed theology, covenant theology, the doctrines of grace, and the Westminster Confession.",
    meta: "12,847 members · 341 online",
    href: "/groups",
    tags: ["Theology", "Calvinism"],
    hearts: 0,
  },
  {
    type: "Video",
    typeColor: "#EF4444",
    icon: "🎬",
    title: "Tim Keller on Suffering and the Sovereignty of God",
    excerpt: "A 45-minute lecture on how Christians should think about pain, loss, and God's goodness.",
    meta: "Gospel Coalition · 45 min · 128k views",
    href: "/video",
    tags: ["Suffering", "Tim Keller"],
    hearts: 3201,
  },
  {
    type: "Article",
    typeColor: "#3B82F6",
    icon: "📖",
    title: "AI, ChatGPT, and the Church: A Faithful Reckoning",
    excerpt: "Artificial intelligence isn't going away. The question isn't whether Christians should engage it — it's how.",
    meta: "James Okafor · 9 min read · 32.1k views",
    href: "/blog/ai-chatgpt-church",
    tags: ["Technology", "Ethics"],
    hearts: 2876,
  },
  {
    type: "People",
    typeColor: "#F59E0B",
    icon: "🌍",
    title: "Min-Jun Cho",
    excerpt: "Bible translator working on the first Buryat New Testament. Mongolia.",
    meta: "Vine missionary · 4,201 followers",
    href: "/global-connect",
    tags: ["Missions", "Translation"],
    hearts: 0,
  },
];

const allResultsExtra = [
  { type: "Article", typeColor: "#EF4444", icon: "📖", title: "The Problem of Evil: Why Suffering Doesn't Disprove God", excerpt: "Epicurus posed the challenge 2,300 years ago. Alvin Plantinga answered it in the 20th century. Here's why the logical problem of evil fails.", meta: "Dr. Priya Singh · 10 min read", href: "/blog/problem-of-evil", tags: ["Theodicy", "Suffering", "Apologetics"], hearts: 1203 },
  { type: "Discussion", typeColor: "#6B4FBB", icon: "💬", title: "Does free will actually exist if God is omniscient?", excerpt: "If God knew before creation every choice I would ever make, in what sense am I actually making free choices?", meta: "r/Theology&Doctrine · 234 replies", href: "/discussions/free-will-omniscience-003", tags: ["Free Will", "Theology"], hearts: 847 },
  { type: "Article", typeColor: "#3a7d56", icon: "📖", title: "The Digital Sabbath: How to Rest in a Hyper-Connected World", excerpt: "Your phones have colonized Sunday. The ancient practice of Shabbat has something radical to say about it.", meta: "Rachel Kim · 6 min read", href: "/blog/digital-sabbath", tags: ["Sabbath", "Technology", "Rest"], hearts: 3891 },
  { type: "Story", typeColor: "#EC4899", icon: "❤️", title: "I Deconstructed My Faith — and Then Found It Again, Better", excerpt: "I left evangelical Christianity at 24. I was done. Four years of questions, grief, and honest searching later, I walked back in.", meta: "Lydia Böhm · Berlin, Germany", href: "/stories/lydia-bohm-deconstruction", tags: ["Deconstruction", "Faith"], hearts: 6104 },
  { type: "Discussion", typeColor: "#3a7d56", icon: "💬", title: "After 3 years of depression and praying for healing, I finally got therapy — and it changed everything.", excerpt: "I believed that if I just had enough faith, my depression would lift. I was drowning. Finally started seeing a Christian counselor.", meta: "r/MentalHealth&Faith · 318 replies", href: "/discussions/depression-therapy-faith-005", tags: ["Depression", "Mental Health", "Therapy"], hearts: 2341 },
  { type: "Story", typeColor: "#F59E0B", icon: "❤️", title: "Widowed at 28 with Three Children. How Faith Became My Only Floor.", excerpt: "When my husband Emmanuel died in a road accident, I had three children under five. What happened next I can only describe as divine provision.", meta: "Amara Osei · Accra, Ghana", href: "/stories/amara-osei-widowed-at-28", tags: ["Grief", "Faith", "Ghana"], hearts: 3241 },
  // Theology topics
  { type: "Article", typeColor: "#3B82F6", icon: "✝️", title: "Understanding the Trinity", excerpt: "One God in three persons — Father, Son, and Holy Spirit. The central mystery of Christian faith, explained with depth and clarity.", meta: "Theology · Core Doctrine", href: "/trinity", tags: ["Trinity", "Theology", "Doctrine"], hearts: 2104 },
  { type: "Article", typeColor: "#3B82F6", icon: "✝️", title: "Theories of Atonement", excerpt: "How does Christ's death save us? Penal substitution, Christus Victor, moral influence — a guide to atonement theology.", meta: "Theology · Core Doctrine", href: "/atonement-theories", tags: ["Atonement", "Cross", "Salvation"], hearts: 1543 },
  { type: "Article", typeColor: "#3B82F6", icon: "✝️", title: "Attributes of God", excerpt: "Omniscience, omnipotence, omnipresence, holiness, love — a study of who God is.", meta: "Theology · Core Doctrine", href: "/attributes-of-god", tags: ["God", "Theology", "Attributes"], hearts: 1892 },
  { type: "Article", typeColor: "#3B82F6", icon: "✝️", title: "Reformed Theology", excerpt: "The five solas, TULIP, covenant theology — an introduction to the Reformed tradition.", meta: "Theology · Tradition", href: "/reformed-theology", tags: ["Reformed", "Calvinism", "Theology"], hearts: 1321 },
  { type: "Article", typeColor: "#3B82F6", icon: "✝️", title: "Systematic Theology 101", excerpt: "A comprehensive introduction to systematic theology — how Christians organize and understand the whole of Christian doctrine.", meta: "Theology · Study Guide", href: "/systematic-theology-101", tags: ["Systematic Theology", "Doctrine", "Study"], hearts: 1654 },
  { type: "Article", typeColor: "#3B82F6", icon: "✝️", title: "Eschatology — End Times Theology", excerpt: "What does the Bible actually say about the end times? Rapture, millennium, judgment, new creation — sorting through the views.", meta: "Theology · Eschatology", href: "/eschatology", tags: ["Eschatology", "End Times", "Revelation"], hearts: 2341 },
  { type: "Article", typeColor: "#3B82F6", icon: "✝️", title: "Spiritual Gifts", excerpt: "What are spiritual gifts? How do you discover yours? A biblical survey from Romans 12, 1 Corinthians 12, and Ephesians 4.", meta: "Spiritual Life · Gifts", href: "/spiritual-gifts", tags: ["Spiritual Gifts", "Holy Spirit", "Ministry"], hearts: 1876 },
  { type: "Article", typeColor: "#3B82F6", icon: "✝️", title: "Apologetics 101", excerpt: "How to defend the Christian faith — from the resurrection to the existence of God to the reliability of Scripture.", meta: "Apologetics · Evidence", href: "/apologetics-101", tags: ["Apologetics", "Evidence", "Faith"], hearts: 2012 },
  { type: "Article", typeColor: "#3B82F6", icon: "✝️", title: "The Armor of God", excerpt: "A verse-by-verse study of Ephesians 6:10-18 — belt of truth, breastplate of righteousness, shield of faith, and more.", meta: "Scripture Study · Ephesians", href: "/armor-of-god", tags: ["Armor of God", "Spiritual Warfare", "Ephesians"], hearts: 1487 },
  { type: "Article", typeColor: "#3B82F6", icon: "✝️", title: "The Beatitudes", excerpt: "Blessed are the poor in spirit, the meek, the merciful, the peacemakers — Jesus's most countercultural sermon.", meta: "Scripture Study · Matthew 5", href: "/beatitudes", tags: ["Beatitudes", "Sermon on the Mount", "Jesus"], hearts: 1923 },
  { type: "Article", typeColor: "#3B82F6", icon: "✝️", title: "Theology of Prayer", excerpt: "Why pray if God already knows? What does prayer actually do? A deep theology of intercession, petition, and communion.", meta: "Theology · Prayer", href: "/theology-of-prayer", tags: ["Prayer", "Theology", "Intercession"], hearts: 1634 },
  { type: "Article", typeColor: "#3B82F6", icon: "✝️", title: "Theology of Forgiveness", excerpt: "What does Scripture say about forgiveness — of others and of ourselves? The costly grace at the heart of the gospel.", meta: "Theology · Forgiveness", href: "/theology-of-forgiveness", tags: ["Forgiveness", "Grace", "Reconciliation"], hearts: 1789 },
  { type: "Article", typeColor: "#3B82F6", icon: "✝️", title: "Theology of Suffering", excerpt: "Why does God allow suffering? From Job to Paul's thorn, exploring the biblical theology of pain and providence.", meta: "Theology · Suffering", href: "/suffering", tags: ["Suffering", "Theodicy", "Providence"], hearts: 2109 },
  // Pastoral / Care
  { type: "Article", typeColor: "#EC4899", icon: "❤️", title: "Anxiety and Christian Faith", excerpt: "Faith does not produce invulnerability to anxiety. What the Bible actually says — and doesn't say — about worry and the anxious mind.", meta: "Mental Health · Pastoral Care", href: "/anxiety", tags: ["Anxiety", "Mental Health", "Faith"], hearts: 3241 },
  { type: "Article", typeColor: "#EC4899", icon: "❤️", title: "Grief: A Christian Guide", excerpt: "Lament is not the opposite of faith — it is faith. A guide for Christians walking through loss, death, and mourning.", meta: "Pastoral Care · Grief", href: "/christian-grief-guide", tags: ["Grief", "Loss", "Lament"], hearts: 2876 },
  { type: "Article", typeColor: "#EC4899", icon: "❤️", title: "Addiction Recovery and Faith", excerpt: "The church and 12-step programs, Celebrate Recovery, biblical principles for recovery — real resources for the battle.", meta: "Pastoral Care · Recovery", href: "/addiction-recovery", tags: ["Addiction", "Recovery", "12-Step"], hearts: 2543 },
  { type: "Article", typeColor: "#EC4899", icon: "❤️", title: "Loneliness and the Body of Christ", excerpt: "Why loneliness is epidemic in the church and what Scripture says about the community we are meant to be.", meta: "Community · Pastoral Care", href: "/loneliness", tags: ["Loneliness", "Community", "Connection"], hearts: 2109 },
  { type: "Article", typeColor: "#EC4899", icon: "❤️", title: "Mental Health and Christian Faith", excerpt: "Real talk about therapy, medication, depression, and anxiety — connecting faith communities with mental health resources.", meta: "Mental Health · Resources", href: "/mental-health", tags: ["Mental Health", "Therapy", "Depression"], hearts: 3012 },
  { type: "Article", typeColor: "#EC4899", icon: "❤️", title: "Christian Marriage", excerpt: "Covenant love, servant leadership, mutual submission, communication, conflict — a biblical vision for Christian marriage.", meta: "Relationships · Marriage", href: "/christian-marriage", tags: ["Marriage", "Covenant", "Relationships"], hearts: 1876 },
  { type: "Article", typeColor: "#EC4899", icon: "❤️", title: "Christian Parenting", excerpt: "From infant baptism debates to prodigal children — a faith-rooted guide to raising children in the way of Jesus.", meta: "Parenting · Family", href: "/parenting", tags: ["Parenting", "Family", "Children"], hearts: 1543 },
  // Disciplines
  { type: "Article", typeColor: "#10B981", icon: "🙏", title: "Prayer Life", excerpt: "How to build a meaningful prayer life — liturgical prayer, conversational prayer, intercession, and the prayer of examen.", meta: "Spiritual Disciplines · Prayer", href: "/prayer-life", tags: ["Prayer", "Spiritual Disciplines", "Devotional"], hearts: 2341 },
  { type: "Article", typeColor: "#10B981", icon: "🙏", title: "Bible Study Methods", excerpt: "Inductive Bible study, lectio divina, the SOAP method — practical guides to getting more from Scripture.", meta: "Bible Study · Methods", href: "/bible-study", tags: ["Bible Study", "Scripture", "Methods"], hearts: 1987 },
  { type: "Article", typeColor: "#10B981", icon: "🙏", title: "Fasting — A Spiritual Discipline", excerpt: "Biblical, theological, and practical guidance for fasting — types of fasts, how to start, and what to expect.", meta: "Spiritual Disciplines · Fasting", href: "/fasting", tags: ["Fasting", "Spiritual Disciplines", "Prayer"], hearts: 1432 },
  { type: "Article", typeColor: "#10B981", icon: "🙏", title: "Sabbath Rest", excerpt: "God rested. Israel rested. But we don't. Reclaiming the gift of sabbath in an anxious, hustle-culture world.", meta: "Spiritual Disciplines · Rest", href: "/sabbath", tags: ["Sabbath", "Rest", "Spiritual Disciplines"], hearts: 2109 },
  { type: "Article", typeColor: "#10B981", icon: "🙏", title: "Spiritual Formation", excerpt: "How are we transformed into the image of Christ? The classic and contemporary path of spiritual formation.", meta: "Spiritual Disciplines · Formation", href: "/spiritual-formation", tags: ["Spiritual Formation", "Transformation", "Discipleship"], hearts: 1765 },
  { type: "Article", typeColor: "#10B981", icon: "🙏", title: "Daily Christian Habits", excerpt: "Morning prayer, Scripture reading, gratitude — how daily rhythms shape the soul over time.", meta: "Spiritual Disciplines · Habits", href: "/daily-christian-habits", tags: ["Habits", "Daily Rhythms", "Spiritual Disciplines"], hearts: 1654 },
  { type: "Article", typeColor: "#10B981", icon: "🙏", title: "Accountability in the Christian Life", excerpt: "The power of accountability partnerships — what they look like, how to start one, and what they are not.", meta: "Discipleship · Accountability", href: "/accountability", tags: ["Accountability", "Discipleship", "Community"], hearts: 1321 },
  // Discipleship tools
  { type: "Article", typeColor: "#6B4FBB", icon: "📖", title: "Verse Memory", excerpt: "Memorize Scripture and hide God's Word in your heart. Flashcard-style verse memorization with spaced repetition.", meta: "Tools · Scripture Memory", href: "/verse-memory", tags: ["Verse Memory", "Scripture", "Memorization"], hearts: 1234 },
  { type: "Article", typeColor: "#6B4FBB", icon: "📖", title: "My Prayer List", excerpt: "Track prayer requests, mark answered prayers, and grow your faith through a record of God's faithfulness.", meta: "Tools · Prayer", href: "/prayer-list", tags: ["Prayer List", "Answered Prayer", "Intercession"], hearts: 987 },
  { type: "Article", typeColor: "#6B4FBB", icon: "📖", title: "Devotional Journal", excerpt: "A private space to process Scripture, record prayers, track spiritual insights, and grow in reflection.", meta: "Tools · Journaling", href: "/journal", tags: ["Journal", "Devotional", "Reflection"], hearts: 1109 },
  { type: "Article", typeColor: "#6B4FBB", icon: "📖", title: "Reading Plan", excerpt: "Follow structured Bible reading plans — chronological, Old Testament, New Testament, or whole Bible in a year.", meta: "Tools · Bible Reading", href: "/reading-plan", tags: ["Reading Plan", "Bible", "Daily Reading"], hearts: 1432 },
  { type: "Article", typeColor: "#6B4FBB", icon: "📖", title: "Habit Tracker", excerpt: "Track spiritual disciplines — daily prayer, Bible reading, fasting, giving — with streaks and accountability.", meta: "Tools · Habits", href: "/habits", tags: ["Habits", "Tracker", "Spiritual Disciplines"], hearts: 876 },
  { type: "Article", typeColor: "#6B4FBB", icon: "📖", title: "Spiritual Gifts Quiz", excerpt: "Discover your spiritual gifts through a carefully designed assessment based on Romans 12, 1 Corinthians 12, and Ephesians 4.", meta: "Tools · Quiz", href: "/quiz", tags: ["Spiritual Gifts", "Quiz", "Ministry"], hearts: 2341 },
  // Bible
  { type: "Scripture", typeColor: "#3a7d56", icon: "✝️", title: "Read the Bible", excerpt: "Access the full Bible — search by book, chapter, or verse. NIV, ESV, KJV, and more translations available.", meta: "Bible · Full Text", href: "/bible", tags: ["Bible", "Scripture", "Reading"], hearts: 4231 },
  { type: "Scripture", typeColor: "#3a7d56", icon: "✝️", title: "Bible Overview", excerpt: "A bird's-eye view of all 66 books — who wrote them, when, why, and what they mean for us.", meta: "Bible Study · Overview", href: "/bible-overview", tags: ["Bible Overview", "Scripture", "Study"], hearts: 2109 },
  { type: "Scripture", typeColor: "#3a7d56", icon: "✝️", title: "Verse of the Day", excerpt: "Daily Scripture with reflection and context — one verse to anchor your day in God's Word.", meta: "Daily · Devotional", href: "/verse-of-the-day", tags: ["Verse of the Day", "Scripture", "Devotional"], hearts: 3412 },
  { type: "Scripture", typeColor: "#3a7d56", icon: "✝️", title: "Sermon on the Mount", excerpt: "A deep study of Matthew 5–7 — the Beatitudes, Lord's Prayer, and the most concentrated teaching of Jesus.", meta: "Scripture Study · Matthew 5-7", href: "/sermon-on-the-mount", tags: ["Sermon on the Mount", "Jesus", "Beatitudes"], hearts: 2109 },
  { type: "Scripture", typeColor: "#3a7d56", icon: "✝️", title: "Ten Commandments", excerpt: "The Decalogue from Exodus 20 — its original context, its theological weight, and its application for Christians today.", meta: "Scripture Study · Exodus 20", href: "/ten-commandments", tags: ["Ten Commandments", "Law", "Moses"], hearts: 1543 },
  // Community
  { type: "Group", typeColor: "#10B981", icon: "👥", title: "Daily Prayer Community", excerpt: "Pray with Christians around the world — post prayer requests, respond to others, and build a global prayer network.", meta: "Community · Prayer", href: "/prayer-wall", tags: ["Prayer", "Community", "Intercession"], hearts: 0 },
  { type: "Group", typeColor: "#10B981", icon: "👥", title: "Community Feed", excerpt: "Connect with other believers — share Scripture, questions, testimonies, and encouragement.", meta: "Community · Feed", href: "/feed", tags: ["Community", "Feed", "Connection"], hearts: 0 },
  { type: "Group", typeColor: "#10B981", icon: "👥", title: "Discussions", excerpt: "Deep conversations about theology, doubt, faith, ethics, and life — honest community for honest questions.", meta: "Community · Discussions", href: "/discussions", tags: ["Discussions", "Theology", "Community"], hearts: 0 },
  { type: "Article", typeColor: "#EC4899", icon: "❤️", title: "Generational Trauma & Faith", excerpt: "Family wounds travel through time. What Exodus 20:5, Ezekiel 18, and 2 Corinthians 5:17 say about inherited patterns — and how healing is possible.", meta: "Pastoral Care · Healing", href: "/generational-trauma-faith", tags: ["Generational Trauma", "Family", "Healing", "Faith"], hearts: 1432 },
  { type: "Article", typeColor: "#6B4FBB", icon: "📖", title: "Introverts, Faith & Church", excerpt: "You were made quiet — and that is not a spiritual problem. Biblical grounding and practical wisdom for introverts navigating extroverted church culture.", meta: "Spiritual Life · Personality", href: "/introverts-faith-church", tags: ["Introverts", "Church", "Spiritual Formation", "Personality"], hearts: 1876 },
  { type: "Article", typeColor: "#3B82F6", icon: "🧭", title: "Discernment: How to Know God's Will", excerpt: "A biblical framework for making major decisions — the two wills of God, wisdom vs. revelation, the role of community, and a six-step discernment method.", meta: "Spiritual Disciplines · Decisions", href: "/discernment-gods-will", tags: ["Discernment", "God's Will", "Decision Making", "Wisdom"], hearts: 2341 },
  { type: "Article", typeColor: "#8B5CF6", icon: "⭕", title: "The Enneagram & Christianity", excerpt: "A balanced Christian guide — its history, the theological debate, all nine types with gospel applications, and how to use it wisely without being used by it.", meta: "Spiritual Formation · Personality", href: "/enneagram-christianity", tags: ["Enneagram", "Personality", "Spiritual Formation", "Self-Knowledge"], hearts: 3102 },
  { type: "Article", typeColor: "#6B4FBB", icon: "🕯️", title: "The Ignatian Examen", excerpt: "A 500-year-old daily prayer practice that teaches you to find God in the ordinary moments of your day — consolation, desolation, and the five-step Examen.", meta: "Spiritual Disciplines · Prayer", href: "/ignatian-examen", tags: ["Examen", "Ignatian", "Prayer", "Spiritual Disciplines", "Consolation"], hearts: 2109 },
  { type: "Article", typeColor: "#3a7d56", icon: "📵", title: "Digital Detox & Faith", excerpt: "Biblical grounding for why attention is a spiritual issue — and four plans (3-day, 7-day social media fast, weekly Sabbath, 40-day Lent) for reclaiming it.", meta: "Spiritual Disciplines · Technology", href: "/digital-detox-faith", tags: ["Digital Detox", "Social Media", "Sabbath", "Technology", "Fasting"], hearts: 2876 },
  { type: "Article", typeColor: "#EF4444", icon: "⚠️", title: "The Prosperity Gospel: A Biblical Assessment", excerpt: "Health-wealth theology fails Job, Paul, and the hall of faith in Hebrews 11. A full critique, guide to key figures, and steps for recovery if it hurt you.", meta: "Theology · Discernment", href: "/prosperity-gospel", tags: ["Prosperity Gospel", "Health Wealth", "Theology", "Word of Faith", "Recovery"], hearts: 2987 },
  { type: "Article", typeColor: "#8B5CF6", icon: "👥", title: "Complementarianism & Egalitarianism", excerpt: "The women-in-ministry debate — what each position teaches, key passages (1 Tim 2, Gal 3:28, Eph 5), major scholars, and how to navigate it in your church.", meta: "Theology · Gender Roles", href: "/complementarianism-egalitarianism", tags: ["Complementarianism", "Egalitarianism", "Women in Ministry", "Gender Roles", "Church"], hearts: 3241 },
  { type: "Article", typeColor: "#F97316", icon: "⚡", title: "Cessationism vs. Continuationism", excerpt: "Have miraculous gifts (tongues, prophecy, healing) ceased? A balanced exegetical guide to one of evangelicalism's most debated questions, with both positions argued by their best advocates.", meta: "Theology · Holy Spirit", href: "/cessationism-continuationism", tags: ["Cessationism", "Continuationism", "Spiritual Gifts", "Tongues", "Prophecy", "Holy Spirit"], hearts: 2876 },
  { type: "Article", typeColor: "#D97706", icon: "📜", title: "Calvinism vs. Arminianism", excerpt: "Election, free will, atonement, perseverance — TULIP vs. FACTS, key passages with dual readings, major scholars (Calvin, Wesley, Sproul, Olson), and the history from Dort to today.", meta: "Theology · Soteriology", href: "/calvinism-arminianism", tags: ["Calvinism", "Arminianism", "Election", "TULIP", "Free Will", "Predestination"], hearts: 4102 },
  { type: "Article", typeColor: "#7C3AED", icon: "🌐", title: "Christian Nationalism: A Biblical Assessment", excerpt: "What is Christian nationalism, why many evangelicals are concerned about it, alternative political theologies (Two Kingdoms, sphere sovereignty), and what the NT says about church and state.", meta: "Theology · Politics", href: "/christian-nationalism", tags: ["Christian Nationalism", "Politics", "Church State", "Political Theology", "Kingdom of God"], hearts: 3876 },
  { type: "Article", typeColor: "#0D9488", icon: "👁️", title: "Open Theism & Classical Theism", excerpt: "Does God know the future exhaustively? A guide to open theism, classical theism, and Molinism — with key passages (Gen 22, Jonah 3, Isa 46), and what it means for prayer.", meta: "Theology · Divine Attributes", href: "/open-theism", tags: ["Open Theism", "Foreknowledge", "Classical Theism", "Molinism", "Divine Sovereignty", "Prayer"], hearts: 1987 },
  { type: "Article", typeColor: "#3B82F6", icon: "🛡️", title: "Just War & Christian Pacifism", excerpt: "Can Christians participate in war? Just war theory's seven criteria (Augustine, Aquinas), Anabaptist pacifism (Yoder, Hauerwas), key biblical passages with dual readings, and conscientious objection.", meta: "Christian Ethics · War", href: "/just-war-pacifism", tags: ["Just War", "Pacifism", "War", "Military", "Christian Ethics", "Nonviolence"], hearts: 2109 },
  { type: "Article", typeColor: "#0D9488", icon: "🧘", title: "Christian Mindfulness & Meditation", excerpt: "Can Christians practice mindfulness and yoga? How biblical meditation differs from Buddhist/secular forms, ancient Christian contemplative traditions, yoga FAQs, and a practical beginner's guide.", meta: "Spiritual Disciplines · Contemplation", href: "/christian-mindfulness", tags: ["Mindfulness", "Meditation", "Yoga", "Contemplative Prayer", "Lectio Divina", "Spiritual Formation"], hearts: 3541 },
  { type: "Article", typeColor: "#7C3AED", icon: "📖", title: "Understanding the Book of Revelation", excerpt: "A plain-language guide to Revelation — apocalyptic genre, the four main views (preterist, historicist, futurist, idealist), chapter-by-chapter guide, key symbols decoded, and what it means for Christians today.", meta: "Bible Study · Eschatology", href: "/book-of-revelation", tags: ["Revelation", "Apocalyptic", "End Times", "Bible Study", "Eschatology", "Symbolism"], hearts: 4231 },
  { type: "Article", typeColor: "#EF4444", icon: "🔥", title: "Hell & Eternal Judgment", excerpt: "What does the Bible say about hell? The three major Christian views — eternal conscious torment, annihilationism, and universalism — with key passages shown through all three readings, 7 major voices, and pastoral reflection for those who struggle with this doctrine.", meta: "Theology · Eschatology", href: "/hell-eternal-judgment", tags: ["Hell", "Eternal Punishment", "Annihilationism", "Universalism", "Judgment", "Eschatology"], hearts: 3987 },
  { type: "Article", typeColor: "#D97706", icon: "⭐", title: "Theosis & Union with Christ", excerpt: "God became man so that man might become God. A guide to theosis — Orthodox, Catholic, and Protestant perspectives on participating in the divine nature through union with Christ.", meta: "Theology · Spiritual Life", href: "/theosis-union-with-christ", tags: ["Theosis", "Union with Christ", "Deification", "Spiritual Formation", "Orthodox", "Mystical Union"], hearts: 2341 },
  { type: "Article", typeColor: "#6B4FBB", icon: "📜", title: "Covenant Theology vs. Dispensationalism", excerpt: "Two major frameworks for reading the Bible as one unified story — covenant theology's seven covenants vs. dispensationalism's seven economies of history. With New Covenant Theology as a middle path.", meta: "Biblical Theology · Hermeneutics", href: "/covenant-dispensationalism", tags: ["Covenant Theology", "Dispensationalism", "Israel", "Church", "End Times", "Hermeneutics", "Rapture"], hearts: 1876 },
  { type: "Article", typeColor: "#D97706", icon: "✝️", title: "Christology: Who Is Jesus?", excerpt: "The center of Christian faith — fully God and fully man. A guide to the divine and human natures of Christ, the Chalcedonian definition, historic heresies (Arianism, Docetism, Nestorianism), and the names and titles of Jesus.", meta: "Systematic Theology · Christology", href: "/christology", tags: ["Christology", "Jesus", "Incarnation", "Trinity", "Chalcedon", "Arianism", "Two Natures"], hearts: 2654 },
  { type: "Article", typeColor: "#F97316", icon: "📜", title: "The Five Solas of the Reformation", excerpt: "Sola Scriptura, Sola Fide, Sola Gratia, Solus Christus, Soli Deo Gloria — the five theological rallying cries of the Protestant Reformation explained with biblical foundations, common objections, and historical context.", meta: "Reformation Theology · Protestant Heritage", href: "/five-solas", tags: ["Five Solas", "Reformation", "Luther", "Protestant", "Sola Scriptura", "Sola Fide", "Grace", "Faith"], hearts: 2187 },
  { type: "Article", typeColor: "#EF4444", icon: "🎯", title: "Hamartiology: A Christian Theology of Sin", excerpt: "What does Christianity teach about sin? Original sin, total depravity, five categories of sin, sin's effects on humanity and creation, and the gospel's answer to each dimension of the problem.", meta: "Systematic Theology · Hamartiology", href: "/theology-of-sin", tags: ["Sin", "Original Sin", "Total Depravity", "Hamartiology", "Gospel", "Salvation", "Repentance"], hearts: 1932 },
  { type: "Article", typeColor: "#EC4899", icon: "💜", title: "Christianity & Human Sexuality", excerpt: "A balanced theological guide to the traditional Christian sexual ethic — biblical arguments, pastoral challenges, side B theology, and how the church can respond with both faithfulness and love.", meta: "Pastoral Theology · Ethics", href: "/christian-sexuality-theology", tags: ["Sexuality", "Marriage", "Sexual Ethics", "LGBTQ", "Celibacy", "Side B", "Pastoral Care"], hearts: 3102 },
  { type: "Article", typeColor: "#3B82F6", icon: "💨", title: "Pneumatology: The Doctrine of the Holy Spirit", excerpt: "Who is the Holy Spirit — person or force? A guide to his personhood, full deity, works in creation and salvation, the fruit and gifts he produces, and the debate over Spirit baptism.", meta: "Systematic Theology · Pneumatology", href: "/pneumatology", tags: ["Holy Spirit", "Trinity", "Spiritual Gifts", "Fruit of the Spirit", "Spirit Baptism", "Pentecost", "Pneumatology"], hearts: 2103 },
  { type: "Article", typeColor: "#3a7d56", icon: "🛡️", title: "Assurance of Salvation", excerpt: "Can you know you are saved? A guide to the three grounds of assurance, the marks of genuine faith, the eternal security debate, and what to do when doubt threatens your confidence in God's promises.", meta: "Soteriology · Assurance", href: "/assurance-salvation", tags: ["Assurance", "Salvation", "Eternal Security", "Doubt", "Once Saved Always Saved", "Perseverance", "1 John"], hearts: 2876 },
  { type: "Article", typeColor: "#3B82F6", icon: "⚖️", title: "Religious Liberty: A Christian Perspective", excerpt: "A theological guide to religious freedom — why genuine faith cannot be coerced, biblical roots, church-state models (two kingdoms, separation, theocracy), current legal threats, and global persecution.", meta: "Christian Ethics · Political Theology", href: "/religious-liberty", tags: ["Religious Liberty", "Church-State", "Conscience", "Persecution", "First Amendment", "Political Theology", "Secularism"], hearts: 1654 },
  { type: "Article", typeColor: "#3B82F6", icon: "💧", title: "Sacraments & Ordinances", excerpt: "Baptism and the Lord's Supper — how different traditions understand them. Credobaptism vs. paedobaptism, five views on the Lord's Supper (transubstantiation, consubstantiation, Calvin, Zwingli, Orthodox), and how many sacraments there are.", meta: "Ecclesiology · Sacramental Theology", href: "/sacraments-ordinances", tags: ["Baptism", "Lord's Supper", "Eucharist", "Sacraments", "Ordinances", "Transubstantiation", "Reformed"], hearts: 1987 },
  { type: "Article", typeColor: "#D97706", icon: "⚖️", title: "Law and Gospel", excerpt: "The nerve of Lutheran and Reformed theology — what the law is, what the gospel is, the three uses of the law, and what happens when you confuse them. Plus the Lutheran vs. Reformed debate on the third use.", meta: "Systematic Theology · Reformation Heritage", href: "/law-gospel", tags: ["Law", "Gospel", "Luther", "Calvin", "Three Uses of the Law", "Antinomianism", "Legalism"], hearts: 1823 },
  { type: "Article", typeColor: "#3B82F6", icon: "🛡️", title: "Christian Apologetics: A Comprehensive Guide", excerpt: "How to defend the Christian faith: 5 arguments for God (cosmological, teleological, moral, ontological, consciousness), 5 major objections, historical evidence for the resurrection, Bible reliability, and 4 apologetic approaches.", meta: "Apologetics · Philosophy of Religion", href: "/christian-apologetics-guide", tags: ["Apologetics", "Arguments for God", "Problem of Evil", "Resurrection", "C.S. Lewis", "William Lane Craig", "Plantinga"], hearts: 3241 },
  { type: "Article", typeColor: "#D97706", icon: "🎨", title: "Theology of Beauty & the Arts", excerpt: "A Christian theology of beauty, creativity, and the arts — from the transcendentals to sub-creation, from Bezalel to Makoto Fujimura. How beauty reflects God's nature, what makes art Christian, and how the arts glorify God.", meta: "Theology · Arts & Culture", href: "/theology-of-beauty", tags: ["Beauty", "Arts", "Creativity", "Aesthetics", "Music", "Culture", "Imago Dei", "Schaeffer", "Fujimura"], hearts: 1743 },
  { type: "Article", typeColor: "#3a7d56", icon: "⚒️", title: "Calling & Vocation: A Christian Guide", excerpt: "The Reformation recovery of secular calling — why every legitimate work is holy service to God and neighbor. How to discern your calling, Luther and Calvin on vocation, the sacred/secular split, and work as worship.", meta: "Christian Living · Vocation Theology", href: "/calling-vocation", tags: ["Calling", "Vocation", "Work", "Luther", "Calvin", "Reformation", "Occupation", "Purpose"], hearts: 2108 },
  { type: "Article", typeColor: "#6B4FBB", icon: "📖", title: "Hermeneutics: How to Read the Bible", excerpt: "A guide to biblical interpretation — the grammatical-historical method, how to interpret 7 biblical genres, the role of context and tradition, the original meaning vs. application, and 8 common interpretation errors to avoid.", meta: "Biblical Studies · Hermeneutics", href: "/hermeneutics-guide", tags: ["Hermeneutics", "Bible Interpretation", "Genre", "Context", "Application", "Exegesis", "Eisegesis", "Inductive Bible Study"], hearts: 2876 },
  { type: "Article", typeColor: "#3a7d56", icon: "⚖️", title: "Justification by Faith: The Heart of the Gospel", excerpt: "The article on which the church stands or falls — what it means to be declared righteous before God, double imputation (our sin to Christ, Christ's righteousness to us), faith and works, 5 views, and the Reformation controversy.", meta: "Systematic Theology · Soteriology", href: "/justification-by-faith", tags: ["Justification", "Salvation", "Imputation", "Faith Alone", "Reformation", "Luther", "Romans", "New Perspective on Paul"], hearts: 3412 },
  { type: "Article", typeColor: "#0D9488", icon: "🌍", title: "Theology of Creation", excerpt: "The Christian doctrine of creation — creatio ex nihilo, the goodness and order of creation, the cultural mandate, 5 views on origins and science (YEC, OEC, ID, Evolutionary Creationism, Framework), and creation care as stewardship.", meta: "Systematic Theology · Protology", href: "/creation-theology", tags: ["Creation", "Creatio Ex Nihilo", "Genesis", "Science and Faith", "Cultural Mandate", "Creation Care", "Young Earth", "Evolutionary Creationism"], hearts: 2154 },
  { type: "Article", typeColor: "#D97706", icon: "🧭", title: "Christian Ethics: A Comprehensive Guide", excerpt: "How Christians make moral decisions — the foundations of Christian ethics, 5 ethical frameworks (natural law, virtue ethics, deontology, consequentialism, divine command), natural law, Scripture's role, and how to reason through hard cases.", meta: "Christian Ethics · Moral Theology", href: "/christian-ethics-guide", tags: ["Ethics", "Morality", "Natural Law", "Virtue Ethics", "Conscience", "Casuistry", "Double Effect", "Hauerwas"], hearts: 1987 },
  { type: "Article", typeColor: "#EC4899", icon: "💍", title: "Theology of Marriage", excerpt: "A comprehensive Christian theology of marriage — its purposes (companionship, procreation, sanctification, gospel sign), covenant nature, husband-wife roles (complementarian vs. egalitarian), and pastoral view on divorce and remarriage.", meta: "Christian Living · Marriage Theology", href: "/marriage-theology", tags: ["Marriage", "Covenant", "Husband", "Wife", "Headship", "Submission", "Divorce", "Remarriage", "Gospel Sign"], hearts: 2543 },
  { type: "Article", typeColor: "#3a7d56", icon: "✝️", title: "The Resurrection: Theology & Evidence", excerpt: "The central claim of Christianity — the bodily resurrection of Jesus. Historical evidence (empty tomb, appearances, disciples' transformation), alternative theories refuted, theological meaning (vindication, justification, new creation), and our future resurrection.", meta: "Apologetics · Resurrection Theology", href: "/resurrection-theology", tags: ["Resurrection", "Easter", "Historical Evidence", "Apologetics", "Empty Tomb", "1 Corinthians 15", "New Creation", "Hope"], hearts: 4123 },
  { type: "Article", typeColor: "#6B4FBB", icon: "🏛️", title: "Church History: A Survey", excerpt: "2,000 years of church history — apostolic age, church fathers, 4 ecumenical councils, medieval church, the Reformation (5 streams), modern missions movement, Pentecostalism, and the global church today by region.", meta: "Church History", href: "/church-history-survey", tags: ["Church History", "Reformation", "Church Fathers", "Augustine", "Luther", "Calvin", "Nicaea", "Chalcedon", "Global Christianity"], hearts: 2234 },
];

const DEFAULT_RECENT = ["Philippians 4:13", "prayer for anxiety", "C.S. Lewis Mere Christianity"];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = usePersistedState("vine_search_active_category", "All");
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    try { const s = localStorage.getItem("vine_search_recent"); return s ? JSON.parse(s) : DEFAULT_RECENT; } catch { return DEFAULT_RECENT; }
  });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const submitSearch = (q: string) => {
    if (!q.trim()) return;
    setRecentSearches((prev) => {
      const updated = [q, ...prev.filter((r) => r !== q)].slice(0, 8);
      try { localStorage.setItem("vine_search_recent", JSON.stringify(updated)); } catch {}
      return updated;
    });
  };

  const allResultsCombined = [...allResults, ...allResultsExtra];
  const filtered = allResultsCombined.filter((r) => {
    const matchCat = activeCategory === "All" || r.type === activeCategory || (activeCategory === "Articles" && r.type === "Article") || (activeCategory === "Discussions" && r.type === "Discussion") || (activeCategory === "Scripture" && r.type === "Scripture") || (activeCategory === "Stories" && r.type === "Story") || (activeCategory === "Videos" && r.type === "Video") || (activeCategory === "Groups" && r.type === "Group") || (activeCategory === "People" && r.type === "People");
    const matchQuery = query === "" || r.title.toLowerCase().includes(query.toLowerCase()) || r.excerpt.toLowerCase().includes(query.toLowerCase()) || r.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
    return matchCat && matchQuery;
  });

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <main id="main-content">
      <div className="pb-20" style={{ paddingTop: 80 }}>
        {/* Search Header */}
        <div
          className="py-12 px-4"
          style={{ background: "linear-gradient(180deg, rgba(58,125,86,0.04) 0%, transparent 100%)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color: "#3a7d56" }}>Search Vine</p>
            <div className="relative">
              <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2" style={{ color: "#6A6A88" }} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") submitSearch(query); }}
                aria-label="Search articles, scripture, discussions, people..." placeholder="Search articles, scripture, discussions, people..."
                className="w-full pl-14 pr-12 py-4 rounded-2xl text-base outline-none"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(58,125,86,0.2)",
                  color: "#F2F2F8",
                  fontSize: "1rem",
                }}
              />
              {query && (
                <button type="button" onClick={() => setQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: "#6A6A88" }}>
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Recent Searches */}
            {query === "" && (
              <div className="flex items-center gap-2 mt-4 flex-wrap">
                <span className="text-xs" style={{ color: "#4A4A68" }}>Recent:</span>
                {recentSearches.map((s) => (
                  <button type="button"
                    key={s}
                    onClick={() => { setQuery(s); submitSearch(s); }}
                    className="flex items-center gap-1 text-xs px-3 py-1 rounded-full transition-all"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#8A8AA8" }}
                  >
                    <Clock size={10} /> {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-24">
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#4A4A68" }}>Filter by type</p>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button type="button"
                      key={cat.label}
                      onClick={() => setActiveCategory(cat.label)}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-left transition-all"
                      style={{
                        background: activeCategory === cat.label ? `${cat.color}15` : "transparent",
                        color: activeCategory === cat.label ? cat.color : "#6A6A88",
                        border: `1px solid ${activeCategory === cat.label ? `${cat.color}30` : "transparent"}`,
                      }}
                    >
                      <span>{cat.icon}</span> {cat.label}
                    </button>
                  ))}
                </div>

                {/* Trending */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#4A4A68" }}>
                    <Flame size={10} className="inline mr-1" style={{ color: "#EF4444" }} />Trending
                  </p>
                  <div className="space-y-2">
                    {trending.slice(0, 7).map((t, i) => (
                      <button type="button"
                        key={t}
                        onClick={() => setQuery(t)}
                        className="flex items-center gap-2 text-xs w-full text-left group"
                        style={{ color: "#6A6A88" }}
                      >
                        <span className="font-mono text-xs w-4" style={{ color: "#4A4A68" }}>{i + 1}</span>
                        <span className="group-hover:text-[#3a7d56] transition-colors">{t}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Results */}
            <div className="flex-1 min-w-0">
              {/* Category pills (mobile) */}
              <div className="flex gap-2 flex-wrap mb-6 lg:hidden">
                {categories.map((cat) => (
                  <button type="button"
                    key={cat.label}
                    onClick={() => setActiveCategory(cat.label)}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: activeCategory === cat.label ? "#3a7d56" : "rgba(255,255,255,0.04)",
                      color: activeCategory === cat.label ? "#000" : "#6A6A88",
                      border: `1px solid ${activeCategory === cat.label ? "#3a7d56" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    {cat.icon} {cat.label}
                  </button>
                ))}
              </div>

              {query !== "" && (
                <p className="text-sm mb-5" style={{ color: "#4A4A68" }}>
                  {filtered.length} result{filtered.length !== 1 ? "s" : ""} for <strong style={{ color: "#F2F2F8" }}>&ldquo;{query}&rdquo;</strong>
                </p>
              )}

              {query === "" && (
                <div className="mb-8">
                  <h2 className="text-lg font-black mb-4" style={{ color: "#F2F2F8" }}>Trending on Vine</h2>
                </div>
              )}

              <div className="space-y-3">
                {filtered.map((r, i) => (
                  <Link
                    key={i}
                    href={r.href}
                    className="flex items-start gap-4 p-5 rounded-2xl transition-all group"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", textDecoration: "none" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(58,125,86,0.2)";
                      e.currentTarget.style.background = "rgba(58,125,86,0.03)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    }}
                  >
                    <span className="text-2xl shrink-0 mt-0.5">{r.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${r.typeColor}15`, color: r.typeColor }}>
                          {r.type}
                        </span>
                        {r.tags.map((t) => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.04)", color: "#6A6A88" }}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-black text-base mb-1 group-hover:text-[#3a7d56] transition-colors" style={{ color: "#F2F2F8" }}>
                        {r.title}
                      </h3>
                      <p className="text-sm mb-2 line-clamp-2" style={{ color: "#6A6A88" }}>{r.excerpt}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs" style={{ color: "#4A4A68" }}>{r.meta}</span>
                        {r.hearts > 0 && (
                          <span className="flex items-center gap-1 text-xs" style={{ color: "#4A4A68" }}>
                            <Heart size={10} style={{ color: "#EC4899" }} /> {r.hearts.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <ChevronRight size={16} className="shrink-0 mt-1" style={{ color: "#4A4A68" }} />
                  </Link>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-5xl mb-4">🔍</p>
                  <p className="font-black text-xl mb-2" style={{ color: "#F2F2F8" }}>No results found</p>
                  <p className="text-sm mb-6" style={{ color: "#6A6A88" }}>Try different keywords or browse by category</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {trending.slice(0, 5).map((t) => (
                      <button type="button"
                        key={t}
                        onClick={() => setQuery(t)}
                        className="px-4 py-2 rounded-xl text-sm"
                        style={{ background: "rgba(58,125,86,0.08)", border: "1px solid rgba(58,125,86,0.15)", color: "#3a7d56" }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
