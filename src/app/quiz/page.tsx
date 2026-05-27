"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  RotateCcw,
  Share2,
  BookOpen,
  Star,
  Dumbbell,
  Heart,
  Lock,
} from "lucide-react";

// ─── DATA ───────────────────────────────────────────────────────────────────

const quizMeta = [
  {
    id: "spiritual-gifts",
    title: "What Is Your Spiritual Gift?",
    subtitle: "Romans 12, 1 Corinthians 12",
    icon: "✨",
    questions: 10,
    results: 7,
    color: "#00FF88",
    gradient: "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,255,136,0.05))",
    available: true,
  },
  {
    id: "biblical-character",
    title: "Which Biblical Character Are You?",
    subtitle: "8 questions · 8 possible results",
    icon: "📜",
    questions: 8,
    results: 8,
    color: "#6B4FBB",
    gradient: "linear-gradient(135deg, rgba(107,79,187,0.2), rgba(107,79,187,0.05))",
    available: true,
  },
  {
    id: "faith-muscle",
    title: "How Strong Is Your Faith Muscle?",
    subtitle: "12 questions · 5 strength levels",
    icon: "💪",
    questions: 12,
    results: 5,
    color: "#4FBBAA",
    gradient: "linear-gradient(135deg, rgba(79,187,170,0.2), rgba(79,187,170,0.05))",
    available: true,
  },
  {
    id: "prayer-style",
    title: "What's Your Prayer Style?",
    subtitle: "8 questions · 4 types",
    icon: "🙏",
    questions: 8,
    results: 4,
    color: "#BB4F7A",
    gradient: "linear-gradient(135deg, rgba(187,79,122,0.2), rgba(187,79,122,0.05))",
    available: true,
  },
];

// "What Is Your Spiritual Gift?" quiz data
const giftQuestions = [
  {
    q: "When you see someone struggling, your first instinct is to…",
    options: [
      { text: "Explain a truth that could help them", tag: "Teaching" },
      { text: "Come alongside and encourage them", tag: "Encouragement" },
      { text: "Immediately find a practical way to help", tag: "Service" },
      { text: "Feel their pain deeply and sit with them", tag: "Mercy" },
    ],
  },
  {
    q: "Your friends would describe you as…",
    options: [
      { text: "The one who always has an answer or explanation", tag: "Teaching" },
      { text: "The one who makes everyone feel seen and valued", tag: "Encouragement" },
      { text: "The one who gets things done without being asked", tag: "Service" },
      { text: "The one who steps up and takes charge", tag: "Leadership" },
    ],
  },
  {
    q: "When you read the Bible, you naturally gravitate toward…",
    options: [
      { text: "Deep theological passages and doctrine", tag: "Teaching" },
      { text: "Promises and hope-filled verses", tag: "Encouragement" },
      { text: "Commands and calls to action", tag: "Service" },
      { text: "Prophetic books and bold declarations", tag: "Prophecy" },
    ],
  },
  {
    q: "In a group project, you tend to…",
    options: [
      { text: "Do the research and make sure everything is accurate", tag: "Teaching" },
      { text: "Keep morale high when people get discouraged", tag: "Encouragement" },
      { text: "Handle the behind-the-scenes tasks nobody notices", tag: "Service" },
      { text: "Naturally take the lead and organize everyone", tag: "Leadership" },
    ],
  },
  {
    q: "What frustrates you most in a church or community?",
    options: [
      { text: "When people believe things that are biblically inaccurate", tag: "Teaching" },
      { text: "When people feel unloved or overlooked", tag: "Mercy" },
      { text: "When people talk but nothing gets done", tag: "Service" },
      { text: "When nobody steps up to lead", tag: "Leadership" },
    ],
  },
  {
    q: "If you had a free afternoon to serve your community, you'd choose to…",
    options: [
      { text: "Lead a Bible study or teach a class", tag: "Teaching" },
      { text: "Visit someone lonely or in hospital", tag: "Mercy" },
      { text: "Donate money or organize a fundraiser", tag: "Giving" },
      { text: "Clean, build, or organize something practical", tag: "Service" },
    ],
  },
  {
    q: "When someone shares a problem, you tend to…",
    options: [
      { text: "Offer insight and biblical perspective", tag: "Teaching" },
      { text: "Just listen and validate without judgment", tag: "Mercy" },
      { text: "Think of resources or people who could help them", tag: "Giving" },
      { text: "Challenge them gently to grow through it", tag: "Encouragement" },
    ],
  },
  {
    q: "What lights you up most in your faith?",
    options: [
      { text: "Understanding Scripture more deeply every week", tag: "Teaching" },
      { text: "Seeing someone grow through your words", tag: "Encouragement" },
      { text: "Giving generously and seeing impact", tag: "Giving" },
      { text: "Sensing God speak through you", tag: "Prophecy" },
    ],
  },
  {
    q: "Which of these best describes your prayer life?",
    options: [
      { text: "Deep, meditative — I love studying Scripture as I pray", tag: "Teaching" },
      { text: "Intercessory — I pray often for other people", tag: "Mercy" },
      { text: "Bold and declarative — I pray with faith for breakthrough", tag: "Prophecy" },
      { text: "Practical — I ask for wisdom and clarity to lead well", tag: "Leadership" },
    ],
  },
  {
    q: "Your ideal role in a faith community would be…",
    options: [
      { text: "Bible teacher or small group leader", tag: "Teaching" },
      { text: "Pastoral care or grief support team", tag: "Mercy" },
      { text: "Operations or behind-the-scenes team", tag: "Service" },
      { text: "Elder, deacon, or church planter", tag: "Leadership" },
    ],
  },
];

const giftResults: Record<string, { title: string; description: string; verse: string; example: string; vineUse: string; color: string; emoji: string }> = {
  Teaching: {
    title: "Teaching",
    description: "You have an extraordinary ability to take complex truths and make them clear, accessible, and life-changing. You love to study deeply, explain carefully, and help others understand what they believe and why. You're not satisfied with surface-level faith — you want to know God's Word inside and out, and you're compelled to share what you find.",
    verse: "2 Timothy 2:15 — 'Do your best to present yourself to God as one approved, a worker who has no need to be ashamed, rightly handling the word of truth.'",
    example: "Apollos — 'an eloquent man, competent in the Scriptures' (Acts 18:24). He taught the way of God accurately and powerfully.",
    vineUse: "Lead a Bible Study Circle, write devotionals, record Scripture breakdowns, answer theology questions in Discussions.",
    color: "#00FF88",
    emoji: "📖",
  },
  Encouragement: {
    title: "Encouragement",
    description: "You have the rare gift of seeing the best in people and calling it out. Your words carry unusual weight — you don't just say nice things, you speak truth that lands in people's hearts and moves them forward. People leave conversations with you feeling more capable, more seen, and more hopeful than they did before.",
    verse: "Romans 15:4-5 — 'May the God of endurance and encouragement grant you to live in such harmony with one another.'",
    example: "Barnabas — his very name means 'Son of Encouragement.' He stood by Paul when no one else would (Acts 9:27).",
    vineUse: "Join prayer and support groups, respond to vulnerable posts in Discussions, create uplifting content for the Feed.",
    color: "#4FBBAA",
    emoji: "💬",
  },
  Giving: {
    title: "Giving",
    description: "You experience a unique joy in giving — your time, your money, your resources, yourself. You're not just generous out of duty; giving is an act of worship for you. You notice needs others miss and feel called to meet them. You believe deeply that God supplies in order that we might give freely.",
    verse: "2 Corinthians 9:7 — 'God loves a cheerful giver.'",
    example: "Zacchaeus — transformed by his encounter with Jesus, he gave half his wealth away and repaid fourfold (Luke 19:8).",
    vineUse: "Support Vine Community Fund projects, organize resource drives, mentor others in biblical stewardship and generosity.",
    color: "#BB7A4F",
    emoji: "🎁",
  },
  Leadership: {
    title: "Leadership",
    description: "You have an innate ability to see where things need to go and bring people with you. You're decisive without being dictatorial. You take responsibility naturally, manage people with both structure and grace, and you're most alive when you're steering something toward a vision. God has given you influence — and a sober responsibility to use it well.",
    verse: "Romans 12:8 — 'If it is leadership, lead diligently.'",
    example: "Nehemiah — built the wall of Jerusalem in 52 days through masterful leadership, prayer, and extraordinary resolve (Nehemiah 2).",
    vineUse: "Moderate Discussion Hubs, lead Worship Circles, host Community Groups, mentor emerging believers.",
    color: "#6B4FBB",
    emoji: "👑",
  },
  Mercy: {
    title: "Mercy",
    description: "You feel what others feel. You can walk into a room and immediately sense who is hurting, excluded, or overlooked. You don't just sympathize — you empathize deeply, and your presence brings comfort in ways that words never could. You are often the person people turn to in their darkest moments, and you show up every single time.",
    verse: "Matthew 5:7 — 'Blessed are the merciful, for they shall receive mercy.'",
    example: "The Good Samaritan — moved with compassion, he stopped, he bound wounds, he paid, he stayed (Luke 10:33-35).",
    vineUse: "Volunteer for the Mental Health & Healing circles, respond to prayer requests, lead grief and support groups.",
    color: "#BB4F7A",
    emoji: "💜",
  },
  Service: {
    title: "Service",
    description: "You see needs and you meet them — without needing credit, without waiting to be asked. You're the person who shows up early to set up and stays late to clean up. While others plan and preach, you make everything possible. Your work is rarely in the spotlight, but the Kingdom of God absolutely could not advance without people like you.",
    verse: "Mark 10:45 — 'For even the Son of Man came not to be served but to serve.'",
    example: "Martha (the redeemed version) — her service was an act of love, and Jesus honored it (John 12:2).",
    vineUse: "Help onboard new Vine members, moderate community guidelines, volunteer for Vine Community initiatives.",
    color: "#4F8FBB",
    emoji: "🙌",
  },
  Prophecy: {
    title: "Prophecy",
    description: "You carry a boldness that isn't fully your own. You sense things in the Spirit, speak truth that cuts through confusion, and are not afraid to say what others won't. Your prophetic gift isn't necessarily predicting the future — it's speaking God's truth into the present moment with clarity, courage, and compassion. You were made to speak.",
    verse: "1 Corinthians 14:3 — 'The one who prophesies speaks to people for their upbuilding and encouragement and consolation.'",
    example: "Deborah — a prophetess and judge who led Israel with wisdom and courage (Judges 4–5).",
    vineUse: "Share Spirit-led insights in Discussions, lead prayer and intercession groups, contribute to Vine's Prophetic Voice series.",
    color: "#BB4F7A",
    emoji: "🔥",
  },
};

// ─── BIBLICAL CHARACTER QUIZ ────────────────────────────────────────────────

const characterQuestions = [
  {
    q: "How do you typically respond when life doesn't go as planned?",
    options: [
      { text: "I trust God's bigger plan — even when it's painful", tag: "Joseph" },
      { text: "I wrestle with God until I find clarity and peace", tag: "Jacob" },
      { text: "I take bold, immediate action based on what I know is right", tag: "Deborah" },
      { text: "I feel deeply but find hope in worship and lament", tag: "David" },
    ],
  },
  {
    q: "People would describe your faith as…",
    options: [
      { text: "Steadfast — loyal no matter what", tag: "Ruth" },
      { text: "Intellectual — always studying and analyzing", tag: "Paul" },
      { text: "Courageous — you act when others won't", tag: "Esther" },
      { text: "Passionate — all or nothing, deeply felt", tag: "Peter" },
    ],
  },
  {
    q: "What role do you naturally gravitate toward in a group?",
    options: [
      { text: "The listener and counselor", tag: "Ruth" },
      { text: "The teacher or explainer", tag: "Paul" },
      { text: "The one who gets things done against all odds", tag: "Moses" },
      { text: "The visionary with bold ideas", tag: "Deborah" },
    ],
  },
  {
    q: "When you read the Bible, what resonates most?",
    options: [
      { text: "Psalms — raw emotion, lament, and praise", tag: "David" },
      { text: "Epistles — theology, doctrine, and practical instruction", tag: "Paul" },
      { text: "Prophets — bold calls to justice and righteousness", tag: "Moses" },
      { text: "Stories of everyday faithfulness", tag: "Ruth" },
    ],
  },
  {
    q: "How do you handle suffering and difficulty?",
    options: [
      { text: "I look for purpose in it — God is using this for good", tag: "Joseph" },
      { text: "I pour it out in prayer, often quite emotionally", tag: "David" },
      { text: "I pivot quickly and look for what's next", tag: "Peter" },
      { text: "I stay quietly faithful even when I don't understand", tag: "Ruth" },
    ],
  },
  {
    q: "Your biggest spiritual struggle tends to be…",
    options: [
      { text: "Impulsiveness — acting before thinking", tag: "Peter" },
      { text: "Carrying the weight of leadership alone", tag: "Moses" },
      { text: "Fear — worrying about what people think", tag: "Esther" },
      { text: "Pride — trusting my own strength too much", tag: "Jacob" },
    ],
  },
  {
    q: "What most excites you about the Kingdom of God?",
    options: [
      { text: "Seeing justice and freedom for the oppressed", tag: "Moses" },
      { text: "Deep fellowship and community", tag: "Ruth" },
      { text: "The spread of the Gospel to all nations", tag: "Paul" },
      { text: "Bold, Spirit-empowered action and miracles", tag: "Peter" },
    ],
  },
  {
    q: "Your ideal spiritual legacy would be…",
    options: [
      { text: "Known as someone utterly faithful over a long journey", tag: "Joseph" },
      { text: "A fearless leader who helped others find freedom", tag: "Deborah" },
      { text: "Someone who changed the world through words and teaching", tag: "Paul" },
      { text: "A heart after God — deeply loved, deeply flawed, deeply forgiven", tag: "David" },
    ],
  },
];

const characterResults: Record<string, { title: string; description: string; verse: string; example: string; vineUse: string; color: string; emoji: string }> = {
  Joseph: {
    title: "Joseph",
    description: "You have the soul of a long-game thinker. Like Joseph, you've likely been through seasons where your dreams were delayed, betrayed, or buried — and yet you kept trusting that God had a larger design. You are resilient, redemption-minded, and unusually gifted at seeing purpose in suffering. People are often amazed by your lack of bitterness.",
    verse: "Genesis 50:20 — 'You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.'",
    example: "Joseph endured slavery, false accusation, and prison — and became the deliverer of his entire family and nation.",
    vineUse: "Share your testimony of God's faithfulness through long, difficult seasons. Your story will encourage those in the middle of theirs.",
    color: "#F59E0B",
    emoji: "✨",
  },
  David: {
    title: "David",
    description: "You are a person of deep emotion and fierce devotion. Like David, you experience God intensely — in worship, in failure, in victory, in grief. You're not afraid of rawness in prayer. You make mistakes (sometimes spectacular ones), but your heart keeps turning back to God. People are drawn to your authenticity.",
    verse: "Acts 13:22 — 'He raised up David to be their king, of whom he testified: I have found in David the son of Jesse a man after my heart.'",
    example: "David was a shepherd, warrior, poet, king, and sinner — and still the man whose heart aligned most closely with God's own.",
    vineUse: "Lead others in worship and lament. Create devotional content. Be a voice of honest, unpolished faith in Vine Discussions.",
    color: "#6B4FBB",
    emoji: "🎵",
  },
  Paul: {
    title: "Paul",
    description: "You are a thinker and a communicator. Like Paul, you've likely had a dramatic shift in your understanding — a before and an after. You love to go deep into Scripture, wrestle with theology, and help others understand what they believe and why. You're not afraid of hard questions, and you're compelled to explain faith with precision and passion.",
    verse: "Philippians 3:8 — 'I consider everything a loss because of the surpassing worth of knowing Christ Jesus my Lord.'",
    example: "Paul went from persecutor to the most prolific New Testament author — a man whose intellect and passion became entirely consecrated to the Gospel.",
    vineUse: "Write theology posts, lead apologetics discussions, mentor new believers through complex questions of faith.",
    color: "#3B82F6",
    emoji: "📜",
  },
  Ruth: {
    title: "Ruth",
    description: "You are defined by steadfast loyalty. Like Ruth, your most powerful witness is your faithfulness to the people God places in your life — even when it costs you something. You're not flashy. You don't need the spotlight. But where you commit, you stay, and the depth of your faithfulness has shaped more lives than you know.",
    verse: "Ruth 1:16 — 'Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.'",
    example: "Ruth left everything she knew to care for Naomi — a choice born entirely out of love and covenant loyalty.",
    vineUse: "Serve behind the scenes, build one-on-one discipleship relationships, and model what faithful community looks like in every season.",
    color: "#EC4899",
    emoji: "🌾",
  },
  Moses: {
    title: "Moses",
    description: "You carry the weight of calling. Like Moses, you've been placed in a position of significant responsibility — and it hasn't always felt comfortable. You're not naturally self-promotional. In fact, you've probably tried to talk God out of using you. But the needs around you are too great to ignore, and you keep showing up.",
    verse: "Exodus 33:11 — 'The Lord would speak to Moses face to face, as one speaks to a friend.'",
    example: "Moses was slow of speech, uncertain of himself, and tried to hand the job to someone else — and then became the deliverer of an entire nation.",
    vineUse: "Lead communities, mentor emerging leaders, advocate for justice, and model the intimacy with God that makes leadership sustainable.",
    color: "#10B981",
    emoji: "⛰️",
  },
  Esther: {
    title: "Esther",
    description: "You have been placed where you are for a reason. Like Esther, you may have spent time trying to blend in, not quite sure how your faith fits into your context. But there are moments — 'for such a time as this' moments — when you know you have to speak up, stand out, and act. Courage is not your default; it's your choice.",
    verse: "Esther 4:14 — 'Who knows whether you have not come to the kingdom for such a time as this?'",
    example: "Esther risked her life to advocate for her people in the court of a foreign king — faithfulness disguised as courage.",
    vineUse: "Speak up in secular spaces. Use your platform, however large or small, to advocate for what's true and right. Your voice matters.",
    color: "#BB4F7A",
    emoji: "👑",
  },
  Peter: {
    title: "Peter",
    description: "You are all in — and sometimes that means crashing. Like Peter, you lead with your heart, act before you think, and experience both glorious highs and painful failures in your faith. But you get back up. Again and again. And Jesus looks at you and says: on this rock, I will build something. Your passion, redeemed, is extraordinary.",
    verse: "Matthew 16:18 — 'And I tell you that you are Peter, and on this rock I will build my church.'",
    example: "Peter denied Jesus three times and became the church's first great preacher. His failure was not the end of his story.",
    vineUse: "Lead with courage. Be willing to be first — to step out of the boat, to make the bold declaration, to take the risk others won't.",
    color: "#EF4444",
    emoji: "⚡",
  },
  Deborah: {
    title: "Deborah",
    description: "You lead with clarity, conviction, and calm. Like Deborah, you see what needs to happen and you make it happen — without fanfare, without waiting for permission, and without the usual anxiety that paralyzes others. You are a rare combination of wisdom and decisive action. People follow you because they trust your judgment.",
    verse: "Judges 4:4 — 'Now Deborah, a prophet, the wife of Lappidoth, was leading Israel at that time.'",
    example: "Deborah led Israel as prophet, judge, and military strategist in an era when no one expected a woman to hold that role. She did it anyway.",
    vineUse: "Lead groups, moderate communities, shape the culture of Vine spaces. Your wisdom and decisiveness make communities healthier.",
    color: "#00FF88",
    emoji: "🏛️",
  },
  Jacob: {
    title: "Jacob",
    description: "You are a wrestler — with God, with yourself, with the complexity of life. Like Jacob, you've had seasons of striving, of manipulation, of trying to control outcomes by your own cleverness. But in the deepest moments of crisis, you've encountered God and come away marked. Transformed. Still walking with a limp, but walking differently.",
    verse: "Genesis 32:28 — 'Your name will no longer be Jacob, but Israel, because you have struggled with God and with humans and have overcome.'",
    example: "Jacob spent most of his life running from the consequences of his choices — until the night he wrestled with God and was renamed.",
    vineUse: "Your story of transformation speaks to those who feel too complicated or too far gone. Be honest about the wrestling — it gives others permission to do the same.",
    color: "#F59E0B",
    emoji: "🤼",
  },
};

// ─── FAITH MUSCLE QUIZ ─────────────────────────────────────────────────────

const faithMuscleQuestions = [
  {
    q: "How often do you read or engage with the Bible?",
    options: [
      { text: "Rarely or never", tag: 0 },
      { text: "Occasionally — a few times a month", tag: 1 },
      { text: "A few times a week", tag: 2 },
      { text: "Daily — it's part of my routine", tag: 3 },
    ],
  },
  {
    q: "When you face a hard decision, your first instinct is to…",
    options: [
      { text: "Figure it out on my own", tag: 0 },
      { text: "Ask friends or family", tag: 1 },
      { text: "Pray about it sometimes", tag: 2 },
      { text: "Pray first, then seek counsel", tag: 3 },
    ],
  },
  {
    q: "How would you describe your prayer life?",
    options: [
      { text: "Non-existent or very sporadic", tag: 0 },
      { text: "I pray in crisis but not regularly", tag: 1 },
      { text: "I pray regularly but sometimes it feels routine", tag: 2 },
      { text: "Prayer is my first response in every situation", tag: 3 },
    ],
  },
  {
    q: "When something bad happens to you, how do you typically respond spiritually?",
    options: [
      { text: "I question whether God cares", tag: 0 },
      { text: "I pull back from faith for a while", tag: 1 },
      { text: "I struggle but eventually find peace", tag: 2 },
      { text: "I turn to God first — suffering has deepened my faith", tag: 3 },
    ],
  },
  {
    q: "How would you rate your consistency in spiritual community (church, small group, etc.)?",
    options: [
      { text: "I'm not really in any community", tag: 0 },
      { text: "I attend occasionally when it's convenient", tag: 1 },
      { text: "I'm fairly consistent but not deeply connected", tag: 2 },
      { text: "Community is a core part of my faith life", tag: 3 },
    ],
  },
  {
    q: "How comfortable are you sharing your faith with others?",
    options: [
      { text: "Very uncomfortable — I keep it private", tag: 0 },
      { text: "I'll share if someone directly asks me", tag: 1 },
      { text: "I share naturally with close friends", tag: 2 },
      { text: "I look for opportunities — faith is who I am", tag: 3 },
    ],
  },
  {
    q: "How do you respond when God feels distant or silent?",
    options: [
      { text: "I assume prayer doesn't work and stop", tag: 0 },
      { text: "I feel abandoned and pull away", tag: 1 },
      { text: "I push through and keep trusting, even when it's hard", tag: 2 },
      { text: "I lean in more — seasons of silence have taught me to wait well", tag: 3 },
    ],
  },
  {
    q: "Do you practice any spiritual disciplines beyond Sunday attendance?",
    options: [
      { text: "No — Sunday service is my only practice", tag: 0 },
      { text: "Occasionally — prayer or a devotional", tag: 1 },
      { text: "Yes — a couple of regular habits", tag: 2 },
      { text: "Yes — several consistent practices form my day", tag: 3 },
    ],
  },
  {
    q: "When you sin or fail morally, what happens in your heart?",
    options: [
      { text: "I avoid thinking about God for a while", tag: 0 },
      { text: "I feel shame but eventually move on", tag: 1 },
      { text: "I confess and receive grace, though it takes time", tag: 2 },
      { text: "I return quickly to God — I know where grace is", tag: 3 },
    ],
  },
  {
    q: "How has your understanding of God changed over the last 5 years?",
    options: [
      { text: "It hasn't — or I've moved away from faith", tag: 0 },
      { text: "Slightly — I've questioned more than grown", tag: 1 },
      { text: "Significantly — trials and study have deepened it", tag: 2 },
      { text: "Dramatically — I barely recognize my faith from 5 years ago", tag: 3 },
    ],
  },
  {
    q: "How often do you give generously (financially, time, etc.) as an act of faith?",
    options: [
      { text: "I don't prioritize giving", tag: 0 },
      { text: "Occasionally when I have extra", tag: 1 },
      { text: "Regularly — it's an important part of my faith", tag: 2 },
      { text: "Consistently and sacrificially — giving is worship", tag: 3 },
    ],
  },
  {
    q: "How would you describe your relationship with God right now?",
    options: [
      { text: "Distant or non-existent", tag: 0 },
      { text: "Warm but inconsistent", tag: 1 },
      { text: "Growing — there's genuine pursuit", tag: 2 },
      { text: "Deep and alive — it's the center of my life", tag: 3 },
    ],
  },
];

const faithMuscleResults: Record<string, { title: string; description: string; verse: string; example: string; vineUse: string; color: string; emoji: string }> = {
  Seedling: {
    title: "Seedling 🌱",
    description: "Your faith is young or has been dormant for a while. There's a seed there — genuine and precious — but it needs water, sunlight, and soil to grow. The fact that you took this quiz says something about a hunger that hasn't gone away. The good news: every mighty oak was once exactly where you are.",
    verse: "Matthew 13:31-32 — 'The kingdom of heaven is like a mustard seed... though it is the smallest of all seeds, yet when it grows, it is the largest of garden plants.'",
    example: "The prodigal son came to his senses far from home — and his father ran to meet him. You don't have to earn your way back. Just take the step.",
    vineUse: "Start with the Daily Devotional and one reading plan. Let Vine's community be the soil your faith grows in. Start small. Start today.",
    color: "#10B981",
    emoji: "🌱",
  },
  Sapling: {
    title: "Sapling 🪴",
    description: "You have a genuine faith that's taking root, but it's still building the disciplines and resilience that create depth. You believe and pray, but inconsistency, doubt, and distraction still have more influence than you'd like. This is actually a critical season — the foundations you build now will support everything that comes later.",
    verse: "Colossians 2:7 — 'Rooted and built up in him, strengthened in the faith as you were taught, and overflowing with thankfulness.'",
    example: "Timothy was a young believer Paul had to encourage to 'fan into flame' his gift. Consistent practice transforms trembling faith into unshakeable conviction.",
    vineUse: "Join a reading plan, add a morning devotional habit, and find a small group or discussion community. The consistency compounds over time.",
    color: "#4FBBAA",
    emoji: "🪴",
  },
  Growing: {
    title: "Flourishing 🌿",
    description: "Your faith is genuinely alive and growing. You have established practices, an active prayer life, and a capacity to trust God that has been tested and proven. You're not perfect — you know that — but your direction is clear and consistent. Keep going. The deepest growth often comes in the seasons right after where you currently are.",
    verse: "2 Peter 3:18 — 'But grow in the grace and knowledge of our Lord and Savior Jesus Christ.'",
    example: "The disciples were 'with Jesus' for three years before they understood what they had witnessed. Growth requires time in proximity to the source.",
    vineUse: "Begin mentoring newer believers. Share your journey in Vine Discussions. Take on more spiritual responsibility — you're ready.",
    color: "#00FF88",
    emoji: "🌿",
  },
  "Mighty Oak": {
    title: "Mighty Oak 🌳",
    description: "Your faith has been built through real experience — trial, discipline, and a consistent life of prayer and Scripture. You are the kind of person other believers look to for grounding, wisdom, and stability. You know who God is because you've needed him in ways that theory alone could never produce. Your roots go deep.",
    verse: "Psalm 1:3 — 'They are like a tree planted by streams of water, which yields its fruit in season and whose leaf does not wither.'",
    example: "Paul could say 'I have learned, in whatsoever state I am, therewith to be content' — because he'd been tested in all of them. That contentment is earned.",
    vineUse: "Lead. Disciple. Share your story. Create content that builds others up. Be the steady presence in the community that newcomers need.",
    color: "#6B4FBB",
    emoji: "🌳",
  },
};

function scoreFaithMuscle(answers: string[]): string {
  const total = answers.reduce((sum, a) => sum + Number(a), 0);
  const max = faithMuscleQuestions.length * 3;
  const pct = total / max;
  if (pct < 0.25) return "Seedling";
  if (pct < 0.5) return "Sapling";
  if (pct < 0.75) return "Growing";
  return "Mighty Oak";
}

// ─── PRAYER STYLE QUIZ ─────────────────────────────────────────────────────

const prayerStyleQuestions = [
  {
    q: "When you pray, you feel most connected to God when…",
    options: [
      { text: "I'm kneeling or prostrate, crying out with intensity", tag: "Warrior" },
      { text: "I'm silent, just listening in stillness", tag: "Contemplative" },
      { text: "I'm speaking bold declarations and Scripture aloud", tag: "Prophetic" },
      { text: "I'm just talking to God like a friend — casually and honestly", tag: "Conversational" },
    ],
  },
  {
    q: "Your prayer sessions most often last…",
    options: [
      { text: "30 minutes to hours — I lose track of time interceding", tag: "Warrior" },
      { text: "15–30 minutes in quiet, unhurried stillness", tag: "Contemplative" },
      { text: "However long it takes to feel breakthrough — could be anything", tag: "Prophetic" },
      { text: "5–15 minutes — scattered through my day, not scheduled", tag: "Conversational" },
    ],
  },
  {
    q: "When you pray for others, you're usually…",
    options: [
      { text: "Burdened and persistent — praying until something breaks", tag: "Warrior" },
      { text: "Asking God what he wants to say to them, then praying that", tag: "Contemplative" },
      { text: "Declaring Scripture over them and speaking life and healing", tag: "Prophetic" },
      { text: "Bringing their needs to God conversationally, like sharing with a friend who cares", tag: "Conversational" },
    ],
  },
  {
    q: "The Scripture about prayer that resonates most with you is…",
    options: [
      { text: "Luke 18:1 — 'Always pray and do not give up'", tag: "Warrior" },
      { text: "Psalm 46:10 — 'Be still and know that I am God'", tag: "Contemplative" },
      { text: "Matthew 21:22 — 'If you believe, you will receive whatever you ask in prayer'", tag: "Prophetic" },
      { text: "Matthew 6:9 — 'Our Father in heaven...' — honest and intimate", tag: "Conversational" },
    ],
  },
  {
    q: "When you don't feel like praying, you typically…",
    options: [
      { text: "Push through anyway — my feelings don't determine my faithfulness", tag: "Warrior" },
      { text: "Sit in silence even if words don't come — presence is enough", tag: "Contemplative" },
      { text: "Speak Scripture aloud until faith rises in me", tag: "Prophetic" },
      { text: "Tell God honestly I'm struggling and just be real with him", tag: "Conversational" },
    ],
  },
  {
    q: "Your ideal prayer environment is…",
    options: [
      { text: "A designated prayer closet or space — undistracted and committed", tag: "Warrior" },
      { text: "A quiet, beautiful outdoor setting — nature and silence", tag: "Contemplative" },
      { text: "Wherever I am — I pray with eyes open, standing in the moment", tag: "Prophetic" },
      { text: "During walks, drives, or chores — in the rhythm of ordinary life", tag: "Conversational" },
    ],
  },
  {
    q: "You believe the primary function of prayer is…",
    options: [
      { text: "Spiritual warfare — battling for people and outcomes in the heavenly realm", tag: "Warrior" },
      { text: "Union with God — dwelling in his presence beyond words or requests", tag: "Contemplative" },
      { text: "Alignment — speaking God's word to bring heaven's reality into earth", tag: "Prophetic" },
      { text: "Relationship — simply being with God, honestly and authentically", tag: "Conversational" },
    ],
  },
  {
    q: "When you experience answered prayer, your first response is…",
    options: [
      { text: "Intensified faith — I press in even harder", tag: "Warrior" },
      { text: "Deep, quiet gratitude — a sense of holy wonder", tag: "Contemplative" },
      { text: "Boldness to declare it to others and encourage their faith", tag: "Prophetic" },
      { text: "Joy and relief — like hearing back from a friend I was worried about", tag: "Conversational" },
    ],
  },
];

const prayerStyleResults: Record<string, { title: string; description: string; verse: string; example: string; vineUse: string; color: string; emoji: string }> = {
  Warrior: {
    title: "The Prayer Warrior",
    description: "You pray with urgency, persistence, and a deep conviction that spiritual battles are real and that persistent prayer makes a difference. You don't give up when answers are delayed — if anything, resistance increases your intensity. You're the person others call when they're in a crisis, because they know you'll go to the wall for them in prayer.",
    verse: "Ephesians 6:18 — 'Pray in the Spirit on all occasions with all kinds of prayers and requests. With this in mind, be alert and always keep on praying for all the Lord's people.'",
    example: "Anna prayed and fasted in the temple for decades — and was there to see the Messiah when no one else was. Warrior prayer outlasts every season.",
    vineUse: "Join Vine's Global Prayer Wall and intercede for unreached nations. Lead the 24-hour prayer initiatives. Be the one who shows up for the long haul.",
    color: "#EF4444",
    emoji: "⚔️",
  },
  Contemplative: {
    title: "The Contemplative",
    description: "Your prayer life is built on stillness, listening, and deep presence with God. Where others rush to speak, you wait. You've discovered that prayer isn't only asking — it's dwelling, attending, being. You carry a depth of inner life that others notice, even if they can't name what they're sensing. You know the difference between talking about God and actually being with him.",
    verse: "Psalm 62:5 — 'Yes, my soul, find rest in God; my hope comes from him.'",
    example: "Brother Lawrence practiced the presence of God while washing dishes — turning every ordinary moment into an act of sacred attention.",
    vineUse: "Lead contemplative prayer gatherings. Create slow, reflective devotional content. Teach others how to listen, not just speak, in prayer.",
    color: "#6B4FBB",
    emoji: "🕊️",
  },
  Prophetic: {
    title: "The Prophetic Prayer",
    description: "You pray with authority. You've experienced the power of speaking Scripture aloud, of declaring truths before you see them, of coming to prayer not just with requests but with confidence in what God has already said. Your prayer sounds bold, even to yourself sometimes. But you've seen things move when you prayed that way — and you can't go back.",
    verse: "Isaiah 55:11 — 'So is my word that goes out from my mouth: It will not return to me empty, but will accomplish what I desire and achieve the purpose for which I sent it.'",
    example: "Elijah prayed and fire fell. He prayed again and rain came after three years of drought. His prayer was declaration shaped by prophetic conviction.",
    vineUse: "Share Spirit-led prayers in the community. Lead prophetic intercession groups. Help others develop the courage to pray with authority.",
    color: "#F59E0B",
    emoji: "🔥",
  },
  Conversational: {
    title: "The Conversationalist",
    description: "You pray the way you talk to a close friend — honestly, informally, and often. You don't need a dedicated time slot or a dramatic posture. You bring everything to God as it happens: the small frustrations, the random joys, the running commentary of your day. Your prayer life is integrated into your ordinary life rather than separated from it, and there's a childlike quality to your faith that Jesus specifically praised.",
    verse: "Matthew 18:3 — 'Truly I tell you, unless you change and become like little children, you will never enter the kingdom of heaven.'",
    example: "David's psalms are full of conversational prayer — negotiating with God, expressing emotion, reasoning out loud. God called him a man after his own heart.",
    vineUse: "Model authentic, accessible faith in Vine Discussions. Show that prayer doesn't require special vocabulary or posture. Help demystify prayer for new believers.",
    color: "#00FF88",
    emoji: "💬",
  },
};

// ─── UNIFIED QUIZ DATA ──────────────────────────────────────────────────────

type QuizQuestion = { q: string; options: { text: string; tag: string | number }[] };
type QuizResultItem = { title: string; description: string; verse: string; example: string; vineUse: string; color: string; emoji: string };

const allQuizData: Record<string, {
  questions: QuizQuestion[];
  results: Record<string, QuizResultItem>;
  label: string;
  scorer: (answers: string[]) => string;
}> = {
  "spiritual-gifts": {
    questions: giftQuestions,
    results: giftResults,
    label: "Your Spiritual Gift Is…",
    scorer: (answers) => {
      const counts: Record<string, number> = {};
      answers.forEach((g) => { counts[g] = (counts[g] || 0) + 1; });
      return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    },
  },
  "biblical-character": {
    questions: characterQuestions,
    results: characterResults,
    label: "Your Biblical Character Match Is…",
    scorer: (answers) => {
      const counts: Record<string, number> = {};
      answers.forEach((g) => { counts[g as string] = (counts[g as string] || 0) + 1; });
      return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    },
  },
  "faith-muscle": {
    questions: faithMuscleQuestions as QuizQuestion[],
    results: faithMuscleResults,
    label: "Your Faith Strength Level Is…",
    scorer: scoreFaithMuscle,
  },
  "prayer-style": {
    questions: prayerStyleQuestions,
    results: prayerStyleResults,
    label: "Your Prayer Style Is…",
    scorer: (answers) => {
      const counts: Record<string, number> = {};
      answers.forEach((g) => { counts[g] = (counts[g] || 0) + 1; });
      return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    },
  },
};

// ─── COMPONENT ──────────────────────────────────────────────────────────────

export default function QuizPage() {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [savedResults, setSavedResults] = useState<Record<string, string>>(() => {
    try { const s = localStorage.getItem("vine_quiz_results"); return s ? JSON.parse(s) : {}; } catch { return {}; }
  });

  useEffect(() => {
    try { localStorage.setItem("vine_quiz_results", JSON.stringify(savedResults)); } catch {}
  }, [savedResults]);

  function startQuiz(id: string) {
    setActiveQuiz(id);
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
    setSelected(null);
  }

  function handleAnswer(idx: number, tag: string) {
    setSelected(idx);
    setTimeout(() => {
      const newAnswers = [...answers, tag];
      const quizData = allQuizData[activeQuiz!];
      if (currentQ + 1 >= quizData.questions.length) {
        const r = quizData.scorer(newAnswers);
        setResult(r);
        setSavedResults((prev) => ({ ...prev, [activeQuiz!]: r }));
      } else {
        setCurrentQ(currentQ + 1);
        setAnswers(newAnswers);
        setSelected(null);
      }
    }, 380);
  }

  function reset() {
    setActiveQuiz(null);
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
    setSelected(null);
  }

  const activeQuizData = activeQuiz ? allQuizData[activeQuiz] : null;
  const progress = activeQuizData ? (currentQ / activeQuizData.questions.length) * 100 : 0;

  return (
    <div style={{ background: "#07070F", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ paddingTop: "80px" }}>
        {/* HERO */}
        {!activeQuiz && (
          <section
            style={{
              background: "linear-gradient(180deg, rgba(107,79,187,0.15) 0%, transparent 100%)",
              padding: "72px 24px 48px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(0,255,136,0.1)",
                border: "1px solid rgba(0,255,136,0.25)",
                borderRadius: "100px",
                padding: "6px 16px",
                marginBottom: "24px",
              }}
            >
              <Star size={14} style={{ color: "#00FF88" }} />
              <span style={{ color: "#00FF88", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em" }}>
                SPIRITUAL QUIZZES
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: "16px",
                background: "linear-gradient(135deg, #FFFFFF 0%, #00FF88 50%, #BBA8D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Know Yourself. Know Your Calling.
            </h1>
            <p style={{ color: "#8A8AA8", fontSize: "17px", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto" }}>
              Fun, Scripture-based quizzes to help you understand your spiritual identity, gifts, and calling.
            </p>
          </section>
        )}

        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px 80px" }}>

          {/* QUIZ SELECTION */}
          {!activeQuiz && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px", paddingTop: "16px" }}>
              {quizMeta.map((quiz) => (
                <div
                  key={quiz.id}
                  onClick={() => quiz.available && startQuiz(quiz.id)}
                  style={{
                    background: "#12121F",
                    border: `1px solid ${quiz.available ? quiz.color + "30" : "#1E1E32"}`,
                    borderRadius: "20px",
                    padding: "28px",
                    cursor: quiz.available ? "pointer" : "default",
                    position: "relative",
                    opacity: quiz.available ? 1 : 0.7,
                    transition: "transform 0.15s, border-color 0.15s",
                  }}
                >
                  {!quiz.available && (
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: "100px",
                        padding: "4px 10px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Lock size={11} style={{ color: "#6A6A88" }} />
                      <span style={{ color: "#6A6A88", fontSize: "11px", fontWeight: 600 }}>Coming Soon</span>
                    </div>
                  )}
                  <div style={{ fontSize: "36px", marginBottom: "16px" }}>{quiz.icon}</div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 800, fontSize: "18px", marginBottom: "8px", lineHeight: 1.3 }}>
                    {quiz.title}
                  </h3>
                  <p style={{ color: "#8A8AA8", fontSize: "13px", marginBottom: "16px" }}>{quiz.subtitle}</p>
                  {savedResults[quiz.id] && (
                    <div style={{ background: `${quiz.color}10`, border: `1px solid ${quiz.color}25`, borderRadius: "10px", padding: "8px 12px", marginBottom: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontSize: "11px", color: quiz.color, fontWeight: 700 }}>
                        Previous result: {savedResults[quiz.id]}
                      </span>
                    </div>
                  )}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: "12px" }}>
                      <span style={{ color: "#6A6A88", fontSize: "12px" }}>
                        <BookOpen size={11} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                        {quiz.questions} questions
                      </span>
                      <span style={{ color: "#6A6A88", fontSize: "12px" }}>
                        {quiz.results} results
                      </span>
                    </div>
                    {quiz.available && (
                      <button
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          background: `${quiz.color}15`,
                          border: `1px solid ${quiz.color}35`,
                          color: quiz.color,
                          borderRadius: "8px",
                          padding: "7px 14px",
                          fontSize: "12px",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        Start <ChevronRight size={13} />
                      </button>
                    )}
                  </div>
                  {!quiz.available && (
                    <div
                      style={{
                        marginTop: "16px",
                        background: quiz.gradient,
                        border: `1px solid ${quiz.color}20`,
                        borderRadius: "10px",
                        padding: "10px 14px",
                      }}
                    >
                      <p style={{ color: "#8A8AA8", fontSize: "12px" }}>
                        {quiz.id === "biblical-character" && "Discover if you're more like Moses, Ruth, Paul, Esther, or 8 others — based on your personality and faith journey."}
                        {quiz.id === "faith-muscle" && "A 15-question deep-dive into your spiritual disciplines, belief strength, and areas for growth. Honest and constructive."}
                        {quiz.id === "prayer-style" && "Are you a Warrior, a Contemplative, an Intercessor, or a Child? Your prayer style shapes your whole walk with God."}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ACTIVE QUIZ: QUESTIONS */}
          {activeQuiz && activeQuizData && !result && (
            <div style={{ maxWidth: "640px", margin: "0 auto", paddingTop: "32px" }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                <button
                  onClick={reset}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "transparent",
                    border: "none",
                    color: "#8A8AA8",
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  <RotateCcw size={13} /> Back to Quizzes
                </button>
                <span style={{ color: "#8A8AA8", fontSize: "13px" }}>
                  Question {currentQ + 1} of {activeQuizData.questions.length}
                </span>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  height: "6px",
                  background: "#1E1E32",
                  borderRadius: "100px",
                  marginBottom: "36px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    background: "linear-gradient(90deg, #00FF88, #B8922A)",
                    borderRadius: "100px",
                    width: `${((currentQ + 1) / activeQuizData.questions.length) * 100}%`,
                    transition: "width 0.4s ease",
                  }}
                />
              </div>

              {/* Quiz card */}
              <div
                style={{
                  background: "#12121F",
                  border: "1px solid #1E1E32",
                  borderRadius: "24px",
                  padding: "40px",
                }}
              >
                <p style={{ color: "#00FF88", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "16px" }}>
                  {quizMeta.find((q) => q.id === activeQuiz)?.icon} {quizMeta.find((q) => q.id === activeQuiz)?.title.toUpperCase()}
                </p>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#F2F2F8",
                    marginBottom: "28px",
                    lineHeight: 1.4,
                  }}
                >
                  {activeQuizData.questions[currentQ].q}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {activeQuizData.questions[currentQ].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => selected === null && handleAnswer(idx, String(opt.tag))}
                      style={{
                        background:
                          selected === idx
                            ? "linear-gradient(135deg, rgba(0,255,136,0.25), rgba(0,255,136,0.1))"
                            : "#0F0F1C",
                        border:
                          selected === idx
                            ? "1px solid rgba(0,255,136,0.6)"
                            : "1px solid #1E1E32",
                        borderRadius: "14px",
                        padding: "16px 20px",
                        textAlign: "left",
                        color: selected === idx ? "#F2F2F8" : "#C0C0D8",
                        fontSize: "15px",
                        fontWeight: selected === idx ? 700 : 500,
                        cursor: selected !== null ? "default" : "pointer",
                        transition: "all 0.2s",
                        lineHeight: 1.4,
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "26px",
                          height: "26px",
                          borderRadius: "50%",
                          background: selected === idx ? "rgba(0,255,136,0.25)" : "rgba(255,255,255,0.04)",
                          color: selected === idx ? "#00FF88" : "#6A6A88",
                          fontSize: "12px",
                          fontWeight: 800,
                          marginRight: "12px",
                          flexShrink: 0,
                          verticalAlign: "middle",
                        }}
                      >
                        {["A", "B", "C", "D"][idx]}
                      </span>
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* RESULT SCREEN */}
          {activeQuiz && activeQuizData && result && activeQuizData.results[result] && (
            <div style={{ maxWidth: "640px", margin: "0 auto", paddingTop: "32px" }}>
              {(() => {
                const res = activeQuizData.results[result];
                return (
                  <div
                    style={{
                      background: "#12121F",
                      border: `1px solid ${res.color}30`,
                      borderRadius: "24px",
                      overflow: "hidden",
                    }}
                  >
                    {/* Color bar */}
                    <div
                      style={{
                        height: "6px",
                        background: `linear-gradient(90deg, ${res.color}, ${res.color}88)`,
                      }}
                    />
                    <div style={{ padding: "40px" }}>
                      <p style={{ color: "#8A8AA8", fontSize: "13px", marginBottom: "8px" }}>{activeQuizData.label}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                        <span style={{ fontSize: "48px" }}>{res.emoji}</span>
                        <h2
                          style={{
                            fontSize: "36px",
                            fontWeight: 900,
                            color: res.color,
                            lineHeight: 1.1,
                          }}
                        >
                          {res.title}
                        </h2>
                      </div>

                      <p style={{ color: "#C0C0D8", fontSize: "15px", lineHeight: 1.8, marginBottom: "24px" }}>
                        {res.description}
                      </p>

                      {/* Verse */}
                      <div
                        style={{
                          background: `${res.color}10`,
                          border: `1px solid ${res.color}25`,
                          borderRadius: "14px",
                          padding: "20px",
                          marginBottom: "20px",
                        }}
                      >
                        <p style={{ color: res.color, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "8px" }}>
                          YOUR VERSE
                        </p>
                        <p style={{ color: "#C0C0D8", fontSize: "14px", fontStyle: "italic", lineHeight: 1.65 }}>
                          {res.verse}
                        </p>
                      </div>

                      {/* Biblical example */}
                      <div
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid #1E1E32",
                          borderRadius: "14px",
                          padding: "20px",
                          marginBottom: "20px",
                        }}
                      >
                        <p style={{ color: "#00FF88", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "8px" }}>
                          BIBLICAL EXAMPLE
                        </p>
                        <p style={{ color: "#8A8AA8", fontSize: "14px", lineHeight: 1.65 }}>
                          {res.example}
                        </p>
                      </div>

                      {/* Use on Vine */}
                      <div
                        style={{
                          background: "rgba(107,79,187,0.08)",
                          border: "1px solid rgba(107,79,187,0.2)",
                          borderRadius: "14px",
                          padding: "20px",
                          marginBottom: "28px",
                        }}
                      >
                        <p style={{ color: "#8B6FDB", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "8px" }}>
                          HOW TO USE THIS ON VINE
                        </p>
                        <p style={{ color: "#8A8AA8", fontSize: "14px", lineHeight: 1.65 }}>
                          {res.vineUse}
                        </p>
                      </div>

                      {/* Actions */}
                      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                        <button
                          style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            background: "linear-gradient(135deg, #00FF88, #B8922A)",
                            color: "#07070F",
                            border: "none",
                            borderRadius: "12px",
                            padding: "14px",
                            fontWeight: 800,
                            fontSize: "14px",
                            cursor: "pointer",
                          }}
                        >
                          <Share2 size={15} /> Share My Result
                        </button>
                        <button
                          onClick={reset}
                          style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            background: "transparent",
                            color: "#F2F2F8",
                            border: "1px solid #1E1E32",
                            borderRadius: "12px",
                            padding: "14px",
                            fontWeight: 600,
                            fontSize: "14px",
                            cursor: "pointer",
                          }}
                        >
                          <RotateCcw size={14} /> Try Another Quiz
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
