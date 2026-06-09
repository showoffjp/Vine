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
  { type: "Article", typeColor: "#3a7d56", icon: "🌅", title: "Eschatology: A Comprehensive Guide to End Times", excerpt: "The four millennium views (premillennialism, amillennialism, postmillennialism), the rapture debate (5 views), Israel and the church, the tribulation, final judgment, the new creation, and how eschatology shapes present Christian life.", meta: "Systematic Theology · Eschatology", href: "/eschatology-guide", tags: ["Eschatology", "End Times", "Millennium", "Rapture", "Tribulation", "Second Coming", "Final Judgment", "New Creation", "Dispensationalism"], hearts: 3187 },
  { type: "Article", typeColor: "#EF4444", icon: "✝️", title: "The Atonement: How Christ's Death Saves", excerpt: "A comprehensive guide to the atonement — penal substitution (with objections), Christus Victor, Anselm's satisfaction theory, moral influence, ransom theory, and how to hold them together. Includes key texts and leading theologians.", meta: "Systematic Theology · Soteriology", href: "/atonement-guide", tags: ["Atonement", "Penal Substitution", "Christus Victor", "Propitiation", "Cross", "John Stott", "N.T. Wright", "Sacrifice"], hearts: 2876 },
  { type: "Article", typeColor: "#6B4FBB", icon: "📜", title: "Theology of the Word of God", excerpt: "The doctrine of Scripture — verbal plenary inspiration, inerrancy and infallibility (and what they mean), how the canon formed, sola Scriptura, Scripture's clarity and sufficiency, and 5 views compared (evangelical, Catholic, Orthodox, Barthian, liberal).", meta: "Systematic Theology · Bibliology", href: "/word-of-god-theology", tags: ["Bible", "Inerrancy", "Inspiration", "Scripture", "Canon", "Sola Scriptura", "Infallibility", "Authority of Scripture", "Warfield"], hearts: 2654 },
  { type: "Article", typeColor: "#0D9488", icon: "🧠", title: "Mental Health and Theology", excerpt: "A theological framework for mental health — what Scripture says about the mind, the faith-psychology integration debate, theology of anxiety and depression, the church's role in mental health care, and principles for pastoral counseling.", meta: "Pastoral Theology · Mental Health", href: "/mental-health-theology", tags: ["Mental Health", "Anxiety", "Depression", "Biblical Counseling", "Faith and Psychology", "Pastoral Care", "Lament", "Elijah", "Psalm 22"], hearts: 2891 },
  { type: "Article", typeColor: "#D97706", icon: "🌍", title: "Theology of Mission", excerpt: "The missio Dei, the Great Commission's six elements, the evangelism-justice debate, contextualization principles, unreached peoples and the 10/40 Window, and how local churches participate in God's global mission.", meta: "Missiology · Global Mission", href: "/mission-theology", tags: ["Mission", "Missio Dei", "Great Commission", "Evangelism", "Social Justice", "Contextualization", "Unreached Peoples", "10/40 Window", "Church Planting"], hearts: 2743 },
  { type: "Article", typeColor: "#3a7d56", icon: "👑", title: "The Kingdom of God: A Comprehensive Guide", excerpt: "What is the Kingdom of God? The already/not yet tension, kingdom parables explained, the church-kingdom relationship (4 views), kingdom and politics, the Hebrew vision of shalom, and practical ways to seek the kingdom today.", meta: "Biblical Theology · Kingdom", href: "/kingdom-of-god-guide", tags: ["Kingdom of God", "Already Not Yet", "Kingdom Parables", "Shalom", "Kingdom Politics", "Jesus", "Eschatology", "New Creation"], hearts: 3104 },
  { type: "Article", typeColor: "#3a7d56", icon: "🕊️", title: "Soteriology: The Doctrine of Salvation", excerpt: "A complete guide to how God saves sinners — the ordo salutis (election, calling, regeneration, justification, adoption, sanctification, glorification), the Calvinist-Arminian debate on election and perseverance, and the ground of assurance.", meta: "Systematic Theology · Soteriology", href: "/soteriology-guide", tags: ["Salvation", "Ordo Salutis", "Election", "Justification", "Adoption", "Sanctification", "Perseverance", "Regeneration", "Assurance"], hearts: 3021 },
  { type: "Article", typeColor: "#D97706", icon: "✝️", title: "Christology: The Person and Work of Christ", excerpt: "A comprehensive guide to Christology — the hypostatic union, Christ's two natures (Chalcedon), threefold office (Prophet, Priest, King), states of humiliation and exaltation, the classic heresies, and the names and titles of Christ.", meta: "Systematic Theology · Christology", href: "/christology-guide", tags: ["Christology", "Hypostatic Union", "Two Natures", "Chalcedon", "Incarnation", "Kenosis", "Jesus", "Threefold Office", "Arianism"], hearts: 2987 },
  { type: "Article", typeColor: "#0D9488", icon: "🔥", title: "Pneumatology: A Comprehensive Guide to the Holy Spirit", excerpt: "The person and work of the Holy Spirit — his deity and personality, work in salvation (regeneration, indwelling, sealing), spiritual gifts across all traditions, the fruit of the Spirit, the cessationism debate, and living a Spirit-filled life.", meta: "Systematic Theology · Pneumatology", href: "/pneumatology-guide", tags: ["Holy Spirit", "Pneumatology", "Spiritual Gifts", "Fruit of the Spirit", "Cessationism", "Tongues", "Prophecy", "Spirit-filled"], hearts: 2834 },
  { type: "Article", typeColor: "#6B4FBB", icon: "∞", title: "The Trinity: One God in Three Persons", excerpt: "A comprehensive guide to the doctrine of the Trinity — biblical evidence, historical development (Nicaea, Constantinople, Chalcedon), the Filioque controversy, relations of origin, perichoresis, Trinitarian analogies and their limits, heresies, and practical implications.", meta: "Systematic Theology · Theology Proper", href: "/trinity-guide", tags: ["Trinity", "Father Son Spirit", "Nicene Creed", "Filioque", "Modalism", "Arianism", "Perichoresis", "Trinitarian Theology"], hearts: 3145 },
  { type: "Article", typeColor: "#EF4444", icon: "⚡", title: "Theodicy: Why Does God Allow Suffering?", excerpt: "The philosophical and personal problem of evil — the logical and evidential problems, major theodicies (free will, soul-making, greater good, skeptical theism), Scripture's lament tradition, the cross as God's response to suffering, and pastoral principles.", meta: "Theology & Apologetics · Theodicy", href: "/theodicy-guide", tags: ["Theodicy", "Problem of Evil", "Suffering", "Free Will", "Lament", "Plantinga", "Job", "Theodicy Cross"], hearts: 2918 },
  { type: "Article", typeColor: "#3B82F6", icon: "⛪", title: "Ecclesiology: The Doctrine of the Church", excerpt: "A comprehensive theology of the church — its biblical images (body/bride/temple/family), marks of the true church, three government models compared, the sacraments debate, church membership and discipline, and the church's dual mission.", meta: "Systematic Theology · Ecclesiology", href: "/ecclesiology-guide", tags: ["Church", "Ecclesiology", "Church Government", "Sacraments", "Baptism", "Lord's Supper", "Church Membership", "Church Discipline"], hearts: 2763 },
  { type: "Article", typeColor: "#EF4444", icon: "⚠️", title: "Hamartiology: The Theology of Sin", excerpt: "A comprehensive guide to sin — its biblical definitions (lawlessness, missing the mark, unrighteousness), original sin and the fall, total depravity explained, types of sin, the deceitfulness of sin (Owen), and the gospel's complete response.", meta: "Systematic Theology · Hamartiology", href: "/hamartiology-guide", tags: ["Sin", "Hamartiology", "Original Sin", "Total Depravity", "Fall", "Mortification", "John Owen", "Repentance"], hearts: 2871 },
  { type: "Article", typeColor: "#D97706", icon: "📜", title: "Covenant Theology: A Comprehensive Guide", excerpt: "The Reformed framework for reading the whole Bible — covenant of works, covenant of grace, the five biblical covenants (Noahic/Abrahamic/Mosaic/Davidic/New), the new covenant's superiority, and a detailed comparison with dispensationalism.", meta: "Biblical Theology · Covenant", href: "/covenant-theology-guide", tags: ["Covenant Theology", "Covenant of Grace", "New Covenant", "Dispensationalism", "Paedobaptism", "Reformed Theology", "Biblical Covenants"], hearts: 2698 },
  { type: "Article", typeColor: "#D97706", icon: "✨", title: "The Image of God (Imago Dei): A Comprehensive Guide", excerpt: "What does it mean to be made in God's image? Covers the biblical data, structural/functional/relational views, the fall's effect on the image, Christ as the true image, and profound implications for human dignity, racial justice, disability ethics, and vocation.", meta: "Theological Anthropology · Imago Dei", href: "/image-of-god-guide", tags: ["Image of God", "Imago Dei", "Human Dignity", "Vocation", "Cultural Mandate", "Theological Anthropology", "Racial Justice"], hearts: 2934 },
  { type: "Article", typeColor: "#3B82F6", icon: "😭", title: "Biblical Lament: A Guide to Crying Out to God", excerpt: "Lament is not a failure of faith — it is one of its highest expressions. A comprehensive guide to the theology of lament, the anatomy of a lament psalm, five great lament psalms, New Testament lament, and how to practice lament personally and in community.", meta: "Pastoral Theology · Lament", href: "/lament-guide", tags: ["Lament", "Grief", "Suffering", "Psalms", "Lament Psalms", "Job", "Jeremiah", "Crying Out to God"], hearts: 2612 },
  { type: "Article", typeColor: "#6B4FBB", icon: "🌱", title: "Spiritual Formation: A Comprehensive Guide", excerpt: "The lifelong process of being conformed to the image of Christ. Covers the theology of spiritual formation (Willard/Mulholland), twelve classic spiritual disciplines, five stages of spiritual growth, formation in community, and common pitfalls to avoid.", meta: "Spiritual Disciplines · Formation", href: "/spiritual-formation-guide", tags: ["Spiritual Formation", "Spiritual Disciplines", "Lectio Divina", "Fasting", "Silence", "Contemplation", "Dallas Willard", "Rule of Life"], hearts: 2845 },
  { type: "Article", typeColor: "#0D9488", icon: "🙏", title: "A Theology of Prayer: A Comprehensive Guide", excerpt: "Why pray if God is sovereign? A comprehensive guide — the theology of prayer, why we must pray, the Lord's Prayer as structure, seven types of prayer, unanswered prayer, intercession, and how to build a sustainable prayer life.", meta: "Theology · Prayer", href: "/prayer-theology-guide", tags: ["Prayer", "Theology of Prayer", "Lord's Prayer", "Intercession", "Unanswered Prayer", "Fasting", "Contemplative Prayer", "ACTS"], hearts: 3187 },
  { type: "Article", typeColor: "#6B4FBB", icon: "👑", title: "Theology Proper: The Attributes of God", excerpt: "Who is God and what is he like? A comprehensive guide to the doctrine of God — incommunicable attributes (aseity, omnipotence, omniscience, infinity, immutability), communicable attributes (love, mercy, faithfulness, wisdom), divine holiness and wrath, the names of God, and classical theism's doctrine of divine simplicity.", meta: "Systematic Theology · Theology Proper", href: "/theology-proper-guide", tags: ["Attributes of God", "Theology Proper", "God's Holiness", "Divine Love", "Names of God", "Omniscience", "Omnipotence", "Divine Simplicity", "Aseity"], hearts: 3241 },
  { type: "Article", typeColor: "#D97706", icon: "📖", title: "Bibliology: The Doctrine of Scripture", excerpt: "A comprehensive guide to the Christian doctrine of the Bible — verbal plenary inspiration, inerrancy, the Chicago Statement, how the canon was formed (and why 'Nicaea decided the canon' is a myth), the authority and sufficiency of Scripture, and how to answer the most common objections.", meta: "Systematic Theology · Bibliology", href: "/bibliology-guide", tags: ["Bible", "Inspiration", "Inerrancy", "Canon", "Sola Scriptura", "Scripture Authority", "Inerrancy", "Biblical Canon", "Chicago Statement"], hearts: 2978 },
  { type: "Article", typeColor: "#0D9488", icon: "🧬", title: "Christian Anthropology: What Does It Mean to Be Human?", excerpt: "A comprehensive guide to the biblical theology of the human person — body and soul (dichotomy, trichotomy, holistic monism), the conscience, human emotions, free will (libertarian, compatibilist, Molinist), gender and sexuality, death, and the hope of resurrection.", meta: "Systematic Theology · Christian Anthropology", href: "/christian-anthropology-guide", tags: ["Christian Anthropology", "Free Will", "Body and Soul", "Conscience", "Human Emotions", "Gender", "Sexuality", "Death", "Resurrection Body", "Compatibilism"], hearts: 2756 },
  { type: "Article", typeColor: "#3B82F6", icon: "👼", title: "Angelology: Angels, Demons, and Spiritual Warfare", excerpt: "A comprehensive biblical guide to the invisible realm — the nature and ministry of angels, types of angelic beings (seraphim/cherubim/archangels), the fall and activity of Satan, demonic influence, the armor of God (Ephesians 6), and how to maintain sober biblical balance about the supernatural.", meta: "Systematic Theology · Angelology", href: "/angelology-guide", tags: ["Angels", "Demons", "Satan", "Spiritual Warfare", "Armor of God", "Seraphim", "Cherubim", "Screwtape Letters", "C.S. Lewis"], hearts: 2934 },
  { type: "Article", typeColor: "#3a7d56", icon: "🌱", title: "Sanctification: A Comprehensive Guide to Growing in Holiness", excerpt: "The whole arc of the Christian life — from definitive sanctification at conversion to glorification at the resurrection. Covers three phases, mortification and vivification (John Owen), the means of grace, Calvinist/Wesleyan views, common obstacles, and a six-step practical framework.", meta: "Systematic Theology · Sanctification", href: "/sanctification-guide", tags: ["Sanctification", "Holiness", "Mortification", "Means of Grace", "John Owen", "Legalism", "Progressive Sanctification", "Glorification"], hearts: 3012 },
  { type: "Article", typeColor: "#6B4FBB", icon: "🎙️", title: "Biblical Preaching: A Comprehensive Guide", excerpt: "The theology and practice of Christian proclamation — why preaching works (through the Spirit, not rhetoric), expository vs. topical methods, Christ-centered preaching, sermon structure, the art of application, delivery, common mistakes, and how congregations can listen better.", meta: "Ministry · Homiletics", href: "/preaching-guide", tags: ["Preaching", "Homiletics", "Expository Preaching", "Sermon", "Application", "Christ-Centered", "John Stott", "Tim Keller", "Spurgeon"], hearts: 2678 },
  { type: "Article", typeColor: "#D97706", icon: "🙌", title: "A Theology of Worship: A Comprehensive Guide", excerpt: "Worship is the chief end of human existence. A comprehensive guide — John 4:23-24 (spirit and truth), the Regulative Principle vs. the Normative Principle, elements of gathered worship (Scripture/preaching/prayer/Supper/baptism/offering), music and Psalmody, contemporary vs. traditional debates, and private and family worship.", meta: "Theology · Worship", href: "/worship-theology-guide", tags: ["Worship", "Liturgy", "Worship Music", "Regulative Principle", "Lord's Supper", "Psalms", "Contemporary Worship", "Family Worship"], hearts: 2923 },
  { type: "Article", typeColor: "#3a7d56", icon: "📢", title: "Evangelism: A Comprehensive Guide to Sharing Your Faith", excerpt: "Evangelism is every Christian's calling, not just the gifted few. A comprehensive guide to the Creation-Fall-Redemption-Response gospel framework, four motivations, six steps to starting spiritual conversations, five common objections with responses, four evangelism models, and how to build a culture of witness.", meta: "Ministry · Evangelism", href: "/evangelism-guide", tags: ["Evangelism", "Gospel", "Gospel Presentation", "Witness", "Apologetics", "Objections", "Great Commission", "Creation Fall Redemption"], hearts: 3156 },
  { type: "Article", typeColor: "#6B4FBB", icon: "🎯", title: "Discipleship: A Comprehensive Guide", excerpt: "The Great Commission says 'make disciples,' not just 'win converts.' A comprehensive guide to the theology of discipleship, Bonhoeffer's cost of discipleship, the one-on-one Paul-Timothy model, small group discipleship, the 2 Timothy 2:2 multiplication principle, and a six-step personal discipleship plan.", meta: "Ministry · Discipleship", href: "/discipleship-guide", tags: ["Discipleship", "Great Commission", "Cost of Discipleship", "Small Groups", "Making Disciples", "Bonhoeffer", "2 Timothy 2:2", "Mentoring"], hearts: 3089 },
  { type: "Article", typeColor: "#EF4444", icon: "📚", title: "New Testament Survey: Every Book Explained", excerpt: "A comprehensive survey of all 27 New Testament books — the Gospels (Matthew through John), Acts, Paul's Letters (Romans through Philemon), the General Epistles, and Revelation — with key themes, historical context, and most important texts from each.", meta: "Bible · New Testament", href: "/new-testament-survey", tags: ["New Testament", "Bible Survey", "Gospels", "Paul's Letters", "Romans", "Revelation", "Acts", "Hebrews", "Bible Overview"], hearts: 2876 },
  { type: "Article", typeColor: "#F59E0B", icon: "📖", title: "Old Testament Survey: Every Book Explained", excerpt: "A comprehensive survey of all 39 Old Testament books — the Torah (Genesis through Deuteronomy), Historical Books, Psalms and Wisdom Literature, and the Prophets — with key themes, historical context, and most important texts from each.", meta: "Bible · Old Testament", href: "/old-testament-survey", tags: ["Old Testament", "Bible Survey", "Torah", "Genesis", "Psalms", "Prophets", "Isaiah", "Daniel", "Proverbs", "Bible Overview"], hearts: 2712 },
  { type: "Article", typeColor: "#D97706", icon: "🌅", title: "Heaven and the New Creation: A Comprehensive Guide", excerpt: "What does the Bible actually say about heaven? Covers the intermediate state, soul sleep, purgatory, the new creation (Revelation 21-22), the New Jerusalem, resurrection bodies, what we will do in eternity, and common misconceptions.", meta: "Eschatology · Heaven", href: "/heaven-guide", tags: ["Heaven", "New Creation", "Resurrection Body", "New Jerusalem", "Intermediate State", "Eschatology", "N.T. Wright", "Randy Alcorn", "Eternal Life"], hearts: 3198 },
  { type: "Article", typeColor: "#3B82F6", icon: "💙", title: "A Theology of Suffering: How Christians Endure and Find God in Pain", excerpt: "A pastoral theology of suffering — types of suffering, five biblical purposes, how to respond rightly, how to minister to sufferers, Jesus and suffering (Gethsemane, the cry of dereliction, the Great High Priest), and the hope that sustains through the darkest seasons.", meta: "Pastoral Theology · Suffering", href: "/suffering-guide", tags: ["Suffering", "Theodicy", "Lament", "Ministry", "Gethsemane", "Job", "Paul's Thorn", "Pastoral Care", "Hope"], hearts: 3042 },
  { type: "Article", typeColor: "#D97706", icon: "📜", title: "The Book of Romans: A Comprehensive Study Guide", excerpt: "Paul's magnum opus — the universal problem of sin (Romans 1–3), justification by faith (3–5), union with Christ (6–7), life in the Spirit and Romans 8, the mystery of Israel (9–11), and kingdom ethics (12–16).", meta: "Bible Study · Romans", href: "/romans-guide", tags: ["Romans", "Justification", "No Condemnation", "Romans 8", "Union with Christ", "Israel", "Kingdom Ethics", "Paul", "Bible Study"], hearts: 3287 },
  { type: "Article", typeColor: "#0D9488", icon: "🔬", title: "Science and Christian Faith: A Comprehensive Guide", excerpt: "A comprehensive guide to science and faith — four relationship models (conflict/NOMA/dialogue/integration), four creation views (YEC/OEC/EC/ID), evolution and what it does and doesn't claim, the historical Adam, Big Bang cosmology, and principles for integrating both.", meta: "Apologetics · Science", href: "/science-faith-guide", tags: ["Science and Faith", "Evolution", "Creation", "Young Earth", "BioLogos", "Historical Adam", "Big Bang", "Francis Collins", "Intelligent Design"], hearts: 3012 },
  { type: "Article", typeColor: "#D97706", icon: "📖", title: "Old Testament Theology: A Comprehensive Guide", excerpt: "How to read the OT as Christian Scripture — Christotelic reading, progressive revelation, five major covenants (Noahic/Abrahamic/Mosaic/Davidic/New), typology, the law for Christians today, the Psalms, the prophets, and the great OT promises fulfilled in Christ.", meta: "Biblical Theology · OT", href: "/old-testament-theology-guide", tags: ["Old Testament Theology", "Biblical Theology", "Covenants", "Typology", "Law and Gospel", "Messianic Prophecy", "Psalms", "Prophets", "Isaiah 53"], hearts: 2876 },
  { type: "Article", typeColor: "#D97706", icon: "🏔️", title: "The Sermon on the Mount: A Comprehensive Guide to Matthew 5–7", excerpt: "The kingdom manifesto — the Beatitudes (8 in depth), salt and light, the six antitheses (murder/adultery/divorce/oaths/retaliation/enemies), giving/prayer/fasting, anxiety and trust, judging and asking, two ways and the two builders.", meta: "Bible Study · Matthew 5–7", href: "/sermon-on-the-mount-guide", tags: ["Sermon on the Mount", "Beatitudes", "Kingdom Ethics", "Lord's Prayer", "Matthew 5", "Matthew 6", "Matthew 7", "Golden Rule", "Antitheses"], hearts: 3342 },
  { type: "Article", typeColor: "#3a7d56", icon: "🐑", title: "Pastoral Care: A Comprehensive Guide to Shepherding the Flock", excerpt: "The theology and practice of pastoral care — the cure of souls (cura animarum), hospital and home visitation, ministry to the dying and grieving, crisis care, church discipline, equipping lay shepherds, and sustaining the pastor.", meta: "Ministry · Pastoral Care", href: "/pastoral-care-guide", tags: ["Pastoral Care", "Shepherding", "Church Discipline", "Grief Ministry", "Visitation", "Cure of Souls", "Lay Shepherds", "Ezekiel 34"], hearts: 2789 },
  { type: "Article", typeColor: "#0D9488", icon: "🧠", title: "Christian Counseling: A Comprehensive Guide to Biblical Soul Care", excerpt: "Biblical counseling, Christian psychology, and integration models compared; the sufficiency of Scripture debate; soul care history (Fathers to Reformation to modern); counseling depression, trauma, addiction, and marriage; when to refer.", meta: "Soul Care · Counseling", href: "/christian-counseling-guide", tags: ["Christian Counseling", "Biblical Counseling", "Integration", "Soul Care", "Depression", "Trauma", "Addiction", "Sufficiency of Scripture", "Paul Tripp"], hearts: 2934 },
  { type: "Article", typeColor: "#3a7d56", icon: "✨", title: "Spiritual Gifts: A Complete Biblical Guide", excerpt: "A comprehensive guide to spiritual gifts — the four biblical lists (Romans 12, 1 Corinthians 12, Ephesians 4, 1 Peter 4), cessationism vs. continuationism, sign gifts, service gifts, how to discover your gift, using gifts in community, and guarding against abuse.", meta: "Spiritual Life · Gifts", href: "/spiritual-gifts-guide", tags: ["Spiritual Gifts", "Cessationism", "Continuationism", "Tongues", "Prophecy", "Healing", "Service Gifts", "Romans 12", "1 Corinthians 12"], hearts: 2987 },
  { type: "Article", typeColor: "#6B4FBB", icon: "🤔", title: "Doubt and Christian Faith: A Guide to Questions, Deconstruction, and Trust", excerpt: "A compassionate guide to doubt — four kinds (intellectual/emotional/volitional/vs unbelief), the four biggest intellectual objections, emotional doubt and church hurt, deconstruction (healthy vs. unhealthy), the dark night of the soul (John of the Cross), and six steps to rebuilding faith.", meta: "Faith · Doubt", href: "/doubt-faith-guide", tags: ["Doubt", "Deconstruction", "Faith", "Dark Night of the Soul", "John of the Cross", "Church Hurt", "Intellectual Objections", "Rebuilding Faith", "Lament"], hearts: 3156 },
  { type: "Article", typeColor: "#EC4899", icon: "💍", title: "Christian Marriage: A Comprehensive Biblical Guide", excerpt: "A biblical theology of marriage — covenant vs. contract, Ephesians 5 and the gospel, complementarian vs. egalitarian roles, Gottman communication principles, conflict resolution, three dimensions of intimacy, and pastoral guidance on pornography, infidelity, and divorce.", meta: "Relationships · Marriage", href: "/christian-marriage-guide", tags: ["Christian Marriage", "Covenant Marriage", "Complementarian", "Egalitarian", "Gottman", "Communication", "Conflict", "Intimacy", "Infidelity", "Divorce", "Ephesians 5"], hearts: 3298 },
  { type: "Article", typeColor: "#D97706", icon: "📖", title: "The Gospel of John: A Comprehensive Study Guide", excerpt: "A thorough study of John's Gospel — the Prologue and Word Christology, the seven signs, the seven I AM sayings, the Farewell Discourse (John 13–17), the passion and resurrection, and John's major theological themes (life, light, belief, Father-Son relationship).", meta: "Bible Study · Gospel of John", href: "/gospel-of-john-guide", tags: ["Gospel of John", "I AM Sayings", "Prologue", "Logos", "Seven Signs", "Farewell Discourse", "Resurrection", "John 3:16", "Word Christology"], hearts: 3421 },
  { type: "Article", typeColor: "#D97706", icon: "📜", title: "The Gospel of Matthew: A Comprehensive Study Guide", excerpt: "Matthew's kingdom manifesto — the five great discourses (Sermon on the Mount, Mission, Parables, Community, Olivet), Jesus as New Moses and Son of David, the kingdom of heaven, Matthew's fulfillment quotations, the parables unique to Matthew, and the Great Commission.", meta: "Bible Study · Gospel of Matthew", href: "/gospel-of-matthew-guide", tags: ["Gospel of Matthew", "Kingdom of Heaven", "New Moses", "Son of David", "Parables", "Beatitudes", "Great Commission", "Fulfillment Quotations", "Olivet Discourse"], hearts: 3512 },
  { type: "Article", typeColor: "#3a7d56", icon: "✝️", title: "Theology of Grace: A Comprehensive Biblical Guide", excerpt: "Common grace and special grace; the five points of Calvinism (TULIP) in full depth; Arminian prevenient grace; the compatibilist vs. libertarian free will debate; Molinist middle knowledge; the means of grace (Word, sacrament, prayer); and what it looks like to live by grace rather than law or license.", meta: "Systematic Theology · Grace", href: "/grace-theology-guide", tags: ["Grace", "TULIP", "Calvinism", "Arminianism", "Prevenient Grace", "Irresistible Grace", "Common Grace", "Means of Grace", "Free Will", "Molinism"], hearts: 3389 },
  { type: "Article", typeColor: "#EC4899", icon: "👨‍👩‍👧", title: "Christian Parenting: A Comprehensive Biblical Guide", excerpt: "A biblical theology of children and the covenant; six home discipleship practices (family worship, Deut 6 conversations, catechesis); discipline and grace; shepherding teenagers through doubt and identity; navigating technology, sexuality, and culture; and trusting God when a child walks away.", meta: "Christian Living · Parenting", href: "/christian-parenting-guide", tags: ["Christian Parenting", "Family Worship", "Catechesis", "Discipline", "Teenagers", "Prodigal Children", "Technology", "Home Discipleship", "Covenant Children"], hearts: 3267 },
  { type: "Article", typeColor: "#3a7d56", icon: "🔥", title: "The Book of Acts: A Comprehensive Study Guide", excerpt: "The Acts of the Apostles — Pentecost and the coming of the Spirit, the Jerusalem church (Acts 2–7), Paul's conversion, Peter and Cornelius, the Antioch church, three missionary journeys, the Jerusalem Council, the voyage to Rome. Four major speeches (Peter at Pentecost, Stephen, Paul at Pisidian Antioch, Paul at the Areopagus). The Spirit drives the mission.", meta: "Bible Study · Acts", href: "/book-of-acts-guide", tags: ["Book of Acts", "Pentecost", "Holy Spirit", "Paul", "Missionary Journeys", "Jerusalem Council", "Early Church", "Areopagus", "Acts 2"], hearts: 3198 },
  { type: "Article", typeColor: "#D97706", icon: "🌱", title: "The Book of Genesis: A Comprehensive Study Guide", excerpt: "Genesis from creation to Joseph — the seven-day framework, the image of God, the Fall and proto-evangelion (Gen 3:15), Babel, the call of Abraham, the Abrahamic covenant (Gen 15 and 17), the testing of Abraham (Gen 22), Jacob's wrestling, and Joseph's story of providence: 'You intended evil, but God intended it for good.'", meta: "Bible Study · Genesis", href: "/genesis-guide", tags: ["Book of Genesis", "Creation", "Imago Dei", "Fall", "Proto-Evangelion", "Abraham", "Covenant", "Jacob", "Joseph", "Providence", "Tower of Babel"], hearts: 3445 },
  { type: "Article", typeColor: "#3a7d56", icon: "😊", title: "Christian Joy & Contentment: A Comprehensive Guide", excerpt: "Joy as a fruit of the Spirit — the difference between joy and happiness; Paul's joy from prison in Philippians; joy in suffering (James 1, Romans 5, 1 Peter 1, Hebrews 12); contentment as a learned discipline (Philippians 4:11); Psalms of joy (16, 23, 84, 126); and six practices for cultivating joy (gratitude, sabbath, worship, community).", meta: "Spiritual Life · Joy", href: "/christian-joy-guide", tags: ["Christian Joy", "Contentment", "Philippians", "Joy in Suffering", "Gratitude", "Sabbath", "C.S. Lewis", "John Piper", "Fruit of the Spirit"], hearts: 3156 },
  { type: "Article", typeColor: "#D97706", icon: "⛩️", title: "The Book of Hebrews: A Comprehensive Study Guide", excerpt: "Jesus as superior to angels, Moses, and the Levitical priesthood; Melchizedek and the eternal priesthood; the sympathetic High Priest; once-for-all sacrifice; the new covenant (Jeremiah 31); the veil torn open; five warning passages; Hebrews 11 Hall of Faith; and 'fix your eyes on Jesus' in Hebrews 12.", meta: "Bible Study · Hebrews", href: "/hebrews-guide", tags: ["Book of Hebrews", "High Priest", "Melchizedek", "New Covenant", "Hall of Faith", "Warning Passages", "Hebrews 11", "Hebrews 12", "Once for All"], hearts: 3234 },
  { type: "Article", typeColor: "#3a7d56", icon: "⛓️", title: "The Book of Galatians: A Comprehensive Study Guide", excerpt: "Paul's passionate defense of justification by faith against the Judaizers — the Galatian crisis, the confrontation with Peter, justification by faith alone, the curse of the law, the purpose of the law as guardian, the Abrahamic promise, Hagar and Sarah (two covenants), freedom in Christ, flesh vs. Spirit, and the fruit of the Spirit.", meta: "Bible Study · Galatians", href: "/galatians-guide", tags: ["Book of Galatians", "Justification by Faith", "Galatians 3:28", "Fruit of the Spirit", "Christian Freedom", "Law and Gospel", "Abraham", "Sola Fide", "Judaizers"], hearts: 3289 },
  { type: "Article", typeColor: "#EC4899", icon: "👩", title: "Women in Scripture and Theology: A Comprehensive Guide", excerpt: "Women as image-bearers of God; OT women leaders (Deborah, Ruth, Esther, Proverbs 31); Jesus's countercultural treatment of women; Mary Magdalene as apostle to the apostles; NT women leaders (Phoebe the deacon, Priscilla the teacher, Junia the apostle); the complementarian/egalitarian debate; women mystics and missionaries in church history.", meta: "Biblical Theology · Women", href: "/women-theology-guide", tags: ["Women in the Bible", "Women in Ministry", "Mary Magdalene", "Deborah", "Priscilla", "Phoebe", "Junia", "Complementarianism", "Egalitarianism", "Imago Dei"], hearts: 3167 },
  { type: "Article", typeColor: "#6B4FBB", icon: "😊", title: "The Book of Philippians: A Comprehensive Study Guide", excerpt: "Paul's letter of joy from prison — the Kenosis Hymn (Philippians 2:5-11) on Christ's self-emptying and exaltation, joy in suffering, the surpassing worth of knowing Christ, pressing on toward the prize, the peace of God that surpasses understanding, and contentment in all circumstances.", meta: "Bible Study · Philippians", href: "/philippians-guide", tags: ["Book of Philippians", "Kenosis", "Philippians 4:13", "Philippians 4:7", "Joy", "Contentment", "Humility", "Christ Hymn", "Kenosis Hymn", "Partnership in the Gospel"], hearts: 3412 },
  { type: "Article", typeColor: "#3B82F6", icon: "⚔️", title: "The Book of Ephesians: A Comprehensive Study Guide", excerpt: "Spiritual blessings in Christ — election before the foundation of the world, sealing with the Holy Spirit, dead in trespasses and alive together with Christ (Eph 2:1-10), the mystery of the church as Christ's body, Paul's prayer for spiritual power, the full armor of God, and Christian household ethics.", meta: "Bible Study · Ephesians", href: "/ephesians-guide", tags: ["Book of Ephesians", "Armor of God", "Spiritual Warfare", "Election", "Predestination", "Ephesians 2:8-9", "Grace", "Church as Body of Christ", "Poiema", "Mystery of the Church"], hearts: 3378 },
  { type: "Article", typeColor: "#0D9488", icon: "✝️", title: "The Book of Colossians: A Comprehensive Study Guide", excerpt: "Christ as the image of the invisible God and firstborn over all creation — the Colossian heresy and false philosophy, fullness in Christ, dying and rising with Christ in baptism, putting off the old self and putting on the new, the household codes, and the mystery of Christ in you the hope of glory.", meta: "Bible Study · Colossians", href: "/colossians-guide", tags: ["Book of Colossians", "Christ Hymn", "Colossians 1:15-20", "Fullness in Christ", "New Self", "Colossian Heresy", "Preeminence of Christ", "Image of God", "Hope of Glory", "Household Codes"], hearts: 3301 },
  { type: "Article", typeColor: "#EF4444", icon: "✉️", title: "The Book of 1 Corinthians: A Comprehensive Study Guide", excerpt: "Addressing a divided, troubled church — factionalism and the wisdom of the cross (1 Cor 1:18), spiritual gifts and the body of Christ, the Love Chapter (1 Cor 13), the Lord's Supper institution narrative, the earliest resurrection creed (1 Cor 15:3-4), and the four contrasts of the resurrection body.", meta: "Bible Study · 1 Corinthians", href: "/first-corinthians-guide", tags: ["1 Corinthians", "Book of 1 Corinthians", "Love Chapter", "1 Corinthians 13", "Resurrection", "Lord's Supper", "Spiritual Gifts", "Wisdom of the Cross", "1 Corinthians 15", "Agape Love"], hearts: 3523 },
  { type: "Article", typeColor: "#D97706", icon: "⚒️", title: "The Book of James: A Comprehensive Study Guide", excerpt: "Faith that works — counting trials as joy, the dangerous double-minded doubter, faith without works is dead (Abraham and Rahab), the untameable tongue as a fire of hell, earthly vs. heavenly wisdom, the prayer of faith and Elijah's boldness, the prophetic rebuke of oppressive wealth, and bringing back the wanderer.", meta: "Bible Study · James", href: "/book-of-james-guide", tags: ["Book of James", "Faith and Works", "Taming the Tongue", "Wisdom from Above", "Prayer of Faith", "Testing of Faith", "Elijah", "Faith Without Works", "Royal Law", "Double-Minded"], hearts: 3489 },
  { type: "Article", typeColor: "#0D9488", icon: "⚓", title: "The Book of 1 Peter: A Comprehensive Study Guide", excerpt: "A living hope through resurrection — elect exiles, the royal priesthood and holy nation (1 Pet 2:9), the suffering servant as Christ's pattern, the always-ready answer (1 Pet 3:15), the fiery ordeal as purification, the devil as prowling lion, casting anxiety on God who cares, and the God of all grace who restores.", meta: "Bible Study · 1 Peter", href: "/first-peter-guide", tags: ["1 Peter", "Book of 1 Peter", "Living Hope", "Royal Priesthood", "Suffering", "Elect Exiles", "1 Peter 2:9", "Apologetics", "Fiery Trial", "Cast Your Anxiety"], hearts: 3398 },
  { type: "Article", typeColor: "#6B4FBB", icon: "🔮", title: "The Book of Revelation: A Comprehensive Study Guide", excerpt: "Apocalyptic vision for persecuted Christians — how to read Revelation, the seven churches (Ephesus to Laodicea), the throne room with the Lamb who was slain, the four horsemen, the 144,000 and great multitude from every nation, 666 and Nero, Babylon the Great, the millennium debate, and the New Jerusalem coming down from heaven.", meta: "Bible Study · Revelation", href: "/revelation-guide", tags: ["Book of Revelation", "Seven Churches", "Four Horsemen", "Millennium", "New Jerusalem", "Mark of the Beast", "666", "Apocalyptic", "Babylon", "Lamb of God"], hearts: 3645 },
  { type: "Article", typeColor: "#0D9488", icon: "🏺", title: "The Book of 2 Corinthians: A Comprehensive Study Guide", excerpt: "Paul's most personal letter — treasure in jars of clay (2 Cor 4:7), the four antitheses of suffering, the ministry of reconciliation, the great exchange (2 Cor 5:21), the thorn in the flesh and sufficient grace, the fool's speech listing shipwrecks and stonings, cheerful giving, and the God of all comfort.", meta: "Bible Study · 2 Corinthians", href: "/second-corinthians-guide", tags: ["2 Corinthians", "Book of 2 Corinthians", "Jars of Clay", "Thorn in the Flesh", "Power in Weakness", "Ministry of Reconciliation", "Great Exchange", "2 Corinthians 5:17", "Generous Giving", "New Creation"], hearts: 3421 },
  { type: "Article", typeColor: "#3a7d56", icon: "⚒️", title: "A Theology of Work: A Comprehensive Christian Guide", excerpt: "Work as sacred calling — the cultural mandate (Gen 1:28), God as the original worker, the fall's disorder of work into toil and idolatry, Luther's vocation breakthrough, work as worship (Col 3:23), Sabbath as liberation and eschatological sign, and the eschatological weight of Monday morning (1 Cor 15:58).", meta: "Christian Living · Vocation", href: "/theology-of-work-guide", tags: ["Theology of Work", "Vocation", "Cultural Mandate", "Work as Worship", "Sabbath", "Calling", "Labor", "Colossians 3:23", "Common Good", "New Creation"], hearts: 3289 },
  { type: "Article", typeColor: "#6B4FBB", icon: "🙇", title: "Confession and Repentance: A Comprehensive Christian Guide", excerpt: "The gift of turning — shuv (Hebrew: return), metanoia (Greek: change of direction), Psalm 51 with David's three Hebrew words for sin, the broken and contrite heart God will not despise, godly vs. worldly sorrow (2 Cor 7), the prodigal son's return to the running Father, mutual confession in community, and the assurance of 1 John 1:9.", meta: "Christian Living · Repentance", href: "/confession-repentance-guide", tags: ["Repentance", "Confession", "Psalm 51", "Godly Sorrow", "Prodigal Son", "Metanoia", "Community Confession", "1 John 1:9", "No Condemnation", "Forgiveness"], hearts: 3456 },
  { type: "Article", typeColor: "#EF4444", icon: "⚡", title: "The Gospel of Mark: A Comprehensive Study Guide", excerpt: "The urgent, action-packed Gospel — immediately! (euthys, 40+ times), the Messianic Secret (silence commands and their disobedience), demons who know first, Peter's correct confession with wrong content, three passion predictions and discipleship failure, Gethsemane, the cry of dereliction, and the centurion's confession at the cross.", meta: "Bible Study · Mark", href: "/gospel-of-mark-guide", tags: ["Gospel of Mark", "Book of Mark", "Messianic Secret", "Son of Man", "Ransom for Many", "Mark 10:45", "Passion Narrative", "Peter's Confession", "Gethsemane", "Centurion"], hearts: 3378 },
  { type: "Article", typeColor: "#3B82F6", icon: "🕊️", title: "A Theology of Christian Suffering", excerpt: "From Job's honest protest to the Psalms of Lament — the theology of the cross (theologia crucis), Paul's suffering produces character (Rom 5:3-5), Job's comforters and bad theodicy, the whirlwind speech, reclaiming lament in the church, suffering as fellowship with Christ (Phil 3:10), Jesus weeping at Lazarus's tomb, and grief and hope held together.", meta: "Theology · Suffering", href: "/christian-suffering-guide", tags: ["Suffering", "Theodicy", "Book of Job", "Lament", "Theology of Suffering", "Theologia Crucis", "Romans 8:18", "Why Does God Allow Suffering", "Problem of Evil", "Grief and Hope"], hearts: 3512 },
  { type: "Article", typeColor: "#3a7d56", icon: "🕊️", title: "The Gospel of Luke: A Comprehensive Study Guide", excerpt: "The Gospel of the Great Reversal — the Magnificat's scattered proud and lifted humble, the Nazareth manifesto (Is 61), the beatitudes with woes, the Good Samaritan, the Prodigal Son's running Father, the Pharisee and Tax Collector, Zacchaeus, the Road to Emmaus, and Luke-Acts as the Holy Spirit's two-volume work.", meta: "Bible Study · Luke", href: "/gospel-of-luke-guide", tags: ["Gospel of Luke", "Book of Luke", "Great Reversal", "Good Samaritan", "Magnificat", "Prodigal Son", "Zacchaeus", "Holy Spirit", "Luke-Acts", "Nazareth Manifesto"], hearts: 3534 },
  { type: "Article", typeColor: "#6B4FBB", icon: "🏘️", title: "Christian Community and the Church: A Comprehensive Guide", excerpt: "The church as body, new humanity, and temple of the Spirit — the 59 one-another commands, Jonathan and David's covenant friendship, Aelred's spiritual friendship, church discipline aimed at restoration, small groups and Acts 2 model, the church as eschatological foretaste of the kingdom, and the multiethnic congregation as living Revelation 7:9.", meta: "Church · Community", href: "/christian-community-guide", tags: ["Church", "Community", "Ecclesiology", "Church as Body of Christ", "Spiritual Friendship", "One Another", "Life Together", "Bonhoeffer", "Church Discipline", "New Humanity"], hearts: 3289 },
  { type: "Article", typeColor: "#3B82F6", icon: "🙏", title: "A Theology of Prayer: A Comprehensive Christian Guide", excerpt: "The Lord's Prayer line by line, why prayer works (Spirit's intercession in Romans 8:26), praying the Psalms as Jesus prayed them, Abraham and Moses as intercession models, the high priestly prayer (John 17), unanswered prayer and Jesus's own Gethsemane, and contemplative practices (Lectio Divina, Examen, Jesus Prayer, Centering Prayer).", meta: "Spiritual Formation · Prayer", href: "/theology-of-prayer-guide", tags: ["Prayer", "Lord's Prayer", "Intercession", "Unanswered Prayer", "Lectio Divina", "Examen", "Jesus Prayer", "Contemplative Prayer", "Theology of Prayer", "Praying the Psalms"], hearts: 3445 },
  { type: "Article", typeColor: "#D97706", icon: "📖", title: "The Book of Daniel: A Comprehensive Study Guide", excerpt: "Courage stories under empire (fiery furnace, lions' den, writing on the wall), the four kingdoms statue (Daniel 2), the apocalyptic beasts (Daniel 7), the Son of Man vision, Daniel's prayer (Daniel 9), and the resurrection promise (Daniel 12:2).", meta: "Bible Study · OT Prophecy", href: "/daniel-guide", tags: ["Daniel", "Book of Daniel", "Four Kingdoms", "Son of Man", "Fiery Furnace", "Apocalyptic", "Daniel 9", "Prophecy", "Sovereignty of God"], hearts: 2134 },
  { type: "Article", typeColor: "#3B82F6", icon: "📖", title: "The Book of Isaiah: A Comprehensive Study Guide", excerpt: "The Holy One of Israel, the call vision (Isaiah 6), the four Servant Songs, Isaiah 53 verse by verse, Comfort ye my people (Isaiah 40), eagles wings, new heavens and new earth (Isaiah 65-66), and Isaiah 61 as Jesus's Nazareth manifesto.", meta: "Bible Study · Major Prophet", href: "/isaiah-guide", tags: ["Isaiah", "Servant Songs", "Isaiah 53", "Holy One of Israel", "New Creation", "Suffering Servant", "Comfort", "New Heavens"], hearts: 2456 },
  { type: "Article", typeColor: "#3a7d56", icon: "📖", title: "The Pastoral Epistles: 1 & 2 Timothy and Titus", excerpt: "Elder qualifications (1 Tim 3, Titus 1), training for godliness (1 Tim 4:7-8), sound doctrine vs. false teaching, all Scripture is God-breathed (2 Tim 3:16-17), Paul's final words (2 Tim 4:6-8), and the grace that trains us (Titus 2:11-14).", meta: "Bible Study · Pastoral Letters", href: "/pastoral-epistles-guide", tags: ["Pastoral Epistles", "1 Timothy", "2 Timothy", "Titus", "Elder Qualifications", "Sound Doctrine", "Godliness", "Finish Well"], hearts: 1876 },
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
