"use client";

import { useState } from "react";
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
    subtitle: "12 possible results",
    icon: "📜",
    questions: 12,
    results: 12,
    color: "#6B4FBB",
    gradient: "linear-gradient(135deg, rgba(107,79,187,0.2), rgba(107,79,187,0.05))",
    available: false,
  },
  {
    id: "faith-muscle",
    title: "How Strong Is Your Faith Muscle?",
    subtitle: "Assessment style",
    icon: "💪",
    questions: 15,
    results: 5,
    color: "#4FBBAA",
    gradient: "linear-gradient(135deg, rgba(79,187,170,0.2), rgba(79,187,170,0.05))",
    available: false,
  },
  {
    id: "prayer-style",
    title: "What's Your Prayer Style?",
    subtitle: "4 types",
    icon: "🙏",
    questions: 8,
    results: 4,
    color: "#BB4F7A",
    gradient: "linear-gradient(135deg, rgba(187,79,122,0.2), rgba(187,79,122,0.05))",
    available: false,
  },
];

// "What Is Your Spiritual Gift?" quiz data
const giftQuestions = [
  {
    q: "When you see someone struggling, your first instinct is to…",
    options: [
      { text: "Explain a truth that could help them", gift: "Teaching" },
      { text: "Come alongside and encourage them", gift: "Encouragement" },
      { text: "Immediately find a practical way to help", gift: "Service" },
      { text: "Feel their pain deeply and sit with them", gift: "Mercy" },
    ],
  },
  {
    q: "Your friends would describe you as…",
    options: [
      { text: "The one who always has an answer or explanation", gift: "Teaching" },
      { text: "The one who makes everyone feel seen and valued", gift: "Encouragement" },
      { text: "The one who gets things done without being asked", gift: "Service" },
      { text: "The one who steps up and takes charge", gift: "Leadership" },
    ],
  },
  {
    q: "When you read the Bible, you naturally gravitate toward…",
    options: [
      { text: "Deep theological passages and doctrine", gift: "Teaching" },
      { text: "Promises and hope-filled verses", gift: "Encouragement" },
      { text: "Commands and calls to action", gift: "Service" },
      { text: "Prophetic books and bold declarations", gift: "Prophecy" },
    ],
  },
  {
    q: "In a group project, you tend to…",
    options: [
      { text: "Do the research and make sure everything is accurate", gift: "Teaching" },
      { text: "Keep morale high when people get discouraged", gift: "Encouragement" },
      { text: "Handle the behind-the-scenes tasks nobody notices", gift: "Service" },
      { text: "Naturally take the lead and organize everyone", gift: "Leadership" },
    ],
  },
  {
    q: "What frustrates you most in a church or community?",
    options: [
      { text: "When people believe things that are biblically inaccurate", gift: "Teaching" },
      { text: "When people feel unloved or overlooked", gift: "Mercy" },
      { text: "When people talk but nothing gets done", gift: "Service" },
      { text: "When nobody steps up to lead", gift: "Leadership" },
    ],
  },
  {
    q: "If you had a free afternoon to serve your community, you'd choose to…",
    options: [
      { text: "Lead a Bible study or teach a class", gift: "Teaching" },
      { text: "Visit someone lonely or in hospital", gift: "Mercy" },
      { text: "Donate money or organize a fundraiser", gift: "Giving" },
      { text: "Clean, build, or organize something practical", gift: "Service" },
    ],
  },
  {
    q: "When someone shares a problem, you tend to…",
    options: [
      { text: "Offer insight and biblical perspective", gift: "Teaching" },
      { text: "Just listen and validate without judgment", gift: "Mercy" },
      { text: "Think of resources or people who could help them", gift: "Giving" },
      { text: "Challenge them gently to grow through it", gift: "Encouragement" },
    ],
  },
  {
    q: "What lights you up most in your faith?",
    options: [
      { text: "Understanding Scripture more deeply every week", gift: "Teaching" },
      { text: "Seeing someone grow through your words", gift: "Encouragement" },
      { text: "Giving generously and seeing impact", gift: "Giving" },
      { text: "Sensing God speak through you", gift: "Prophecy" },
    ],
  },
  {
    q: "Which of these best describes your prayer life?",
    options: [
      { text: "Deep, meditative — I love studying Scripture as I pray", gift: "Teaching" },
      { text: "Intercessory — I pray often for other people", gift: "Mercy" },
      { text: "Bold and declarative — I pray with faith for breakthrough", gift: "Prophecy" },
      { text: "Practical — I ask for wisdom and clarity to lead well", gift: "Leadership" },
    ],
  },
  {
    q: "Your ideal role in a faith community would be…",
    options: [
      { text: "Bible teacher or small group leader", gift: "Teaching" },
      { text: "Pastoral care or grief support team", gift: "Mercy" },
      { text: "Operations or behind-the-scenes team", gift: "Service" },
      { text: "Elder, deacon, or church planter", gift: "Leadership" },
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

// ─── COMPONENT ──────────────────────────────────────────────────────────────

export default function QuizPage() {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  function startQuiz(id: string) {
    setActiveQuiz(id);
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
    setSelected(null);
  }

  function handleAnswer(idx: number, gift: string) {
    setSelected(idx);
    setTimeout(() => {
      const newAnswers = [...answers, gift];
      if (currentQ + 1 >= giftQuestions.length) {
        // Tally results
        const counts: Record<string, number> = {};
        newAnswers.forEach((g) => { counts[g] = (counts[g] || 0) + 1; });
        const topGift = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
        setResult(topGift);
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

  const progress = giftQuestions.length > 0 ? ((currentQ) / giftQuestions.length) * 100 : 0;

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
          {activeQuiz === "spiritual-gifts" && !result && (
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
                  Question {currentQ + 1} of {giftQuestions.length}
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
                    width: `${((currentQ + 1) / giftQuestions.length) * 100}%`,
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
                  ✨ WHAT IS YOUR SPIRITUAL GIFT?
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
                  {giftQuestions[currentQ].q}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {giftQuestions[currentQ].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => selected === null && handleAnswer(idx, opt.gift)}
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
          {activeQuiz === "spiritual-gifts" && result && (
            <div style={{ maxWidth: "640px", margin: "0 auto", paddingTop: "32px" }}>
              <div
                style={{
                  background: "#12121F",
                  border: `1px solid ${giftResults[result].color}30`,
                  borderRadius: "24px",
                  overflow: "hidden",
                }}
              >
                {/* Color bar */}
                <div
                  style={{
                    height: "6px",
                    background: `linear-gradient(90deg, ${giftResults[result].color}, ${giftResults[result].color}88)`,
                  }}
                />
                <div style={{ padding: "40px" }}>
                  <p style={{ color: "#8A8AA8", fontSize: "13px", marginBottom: "8px" }}>Your Spiritual Gift Is…</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                    <span style={{ fontSize: "48px" }}>{giftResults[result].emoji}</span>
                    <h2
                      style={{
                        fontSize: "36px",
                        fontWeight: 900,
                        color: giftResults[result].color,
                        lineHeight: 1.1,
                      }}
                    >
                      {giftResults[result].title}
                    </h2>
                  </div>

                  <p style={{ color: "#C0C0D8", fontSize: "15px", lineHeight: 1.8, marginBottom: "24px" }}>
                    {giftResults[result].description}
                  </p>

                  {/* Verse */}
                  <div
                    style={{
                      background: `${giftResults[result].color}10`,
                      border: `1px solid ${giftResults[result].color}25`,
                      borderRadius: "14px",
                      padding: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    <p style={{ color: `${giftResults[result].color}`, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "8px" }}>
                      YOUR VERSE
                    </p>
                    <p style={{ color: "#C0C0D8", fontSize: "14px", fontStyle: "italic", lineHeight: 1.65 }}>
                      {giftResults[result].verse}
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
                      {giftResults[result].example}
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
                      HOW TO USE THIS GIFT ON VINE
                    </p>
                    <p style={{ color: "#8A8AA8", fontSize: "14px", lineHeight: 1.65 }}>
                      {giftResults[result].vineUse}
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
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
