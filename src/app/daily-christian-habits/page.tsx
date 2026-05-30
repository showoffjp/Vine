"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const HABIT_CATEGORIES = ["All", "Morning", "Throughout Day", "Evening", "Weekly"];

const HABITS = [
  {
    number: 1,
    title: "Wake Up and Acknowledge God Before Your Phone",
    category: "Morning",
    time: "30 seconds",
    color: GREEN,
    description: "Before you look at your phone, say one sentence to God. It doesn't need to be eloquent — 'Good morning, Lord. This day is yours.' This small act declares who is first, resists the immediate attention-grab of social media, and orients the day toward God rather than the feed.",
    scripture: "This is the day the LORD has made; let us rejoice and be glad in it. — Psalm 118:24",
    tip: "Put your Bible or a notecard with this verse where your phone usually is. The physical swap creates the habit.",
    difficulty: "Easy",
  },
  {
    number: 2,
    title: "Read Scripture Before Reading Anything Else",
    category: "Morning",
    time: "10–20 minutes",
    color: "#3B82F6",
    description: "The first information your mind receives in the morning shapes how you think for hours. Reading Scripture first — before news, email, social media — gives God's word the first slot. Even one chapter is more formative than ten articles.",
    scripture: "Your word is a lamp to my feet and a light to my path. — Psalm 119:105",
    tip: "Use a simple reading plan (YouVersion's M'Cheyne plan is excellent) so you don't face the daily decision of what to read. Decision fatigue is the enemy of consistency.",
    difficulty: "Medium",
  },
  {
    number: 3,
    title: "Pray the Lord's Prayer Slowly, Line by Line",
    category: "Morning",
    time: "5 minutes",
    color: PURPLE,
    description: "Most Christians rush through the Lord's Prayer from memory. Instead, pause after each phrase. 'Our Father' — sit with what it means to be adopted. 'Your kingdom come' — name one specific way you want the kingdom to come today. 'Forgive us our debts' — name what you're bringing. Slow down.",
    scripture: "Pray then like this: Our Father in heaven... — Matthew 6:9",
    tip: "Write each phrase of the Lord's Prayer on a separate index card. Spend 1 minute per card. This turns a 30-second recitation into a 7-minute structured prayer.",
    difficulty: "Easy",
  },
  {
    number: 4,
    title: "Write One Sentence of Gratitude",
    category: "Morning",
    time: "2 minutes",
    color: "#F59E0B",
    description: "Research consistently shows that gratitude practices reshape the brain's baseline emotional state. Spiritually, gratitude is the antidote to entitlement and the foundation of joy. One specific sentence — not 'I'm grateful for everything' but 'I'm grateful that my daughter laughed at breakfast' — trains the eyes to see gift.",
    scripture: "Give thanks in all circumstances; for this is the will of God in Christ Jesus for you. — 1 Thessalonians 5:18",
    tip: "Keep a small notebook only for gratitude. The physical act of writing is significantly more effective than typing. Aim for specificity: the more specific, the more formative.",
    difficulty: "Easy",
  },
  {
    number: 5,
    title: "Memorize One Verse Per Week",
    category: "Morning",
    time: "5 minutes daily",
    color: "#10B981",
    description: "Scripture memorization is the most underused spiritual discipline. The Psalms say 'I have hidden your word in my heart that I might not sin against you' — because stored Scripture becomes accessible in moments of temptation, grief, and confusion when you can't open a Bible. One verse per week is 52 verses per year, 520 in a decade.",
    scripture: "I have stored up your word in my heart, that I might not sin against you. — Psalm 119:11",
    tip: "Use the Scripture Typer or Verse Locker app. Review the verse in the morning, during lunch, and before bed. By day 7 it is memorized. Start with John 1:1, Romans 8:1, or Ephesians 2:8-9.",
    difficulty: "Medium",
  },
  {
    number: 6,
    title: "Preach the Gospel to Yourself",
    category: "Morning",
    time: "2 minutes",
    color: "#EF4444",
    description: "Martin Luther said: 'I must hear the gospel daily, because I forget it daily.' The gospel is not just the entry point of the Christian life — it is the environment of the Christian life. Every morning, remind yourself: I am not accepted because of today's performance. I am accepted in Christ, fully, right now.",
    scripture: "There is therefore now no condemnation for those who are in Christ Jesus. — Romans 8:1",
    tip: "Write 'Romans 8:1' on a sticky note on your bathroom mirror. Read it every morning before you leave. When the accuser comes, this is your answer.",
    difficulty: "Easy",
  },
  {
    number: 7,
    title: "Pray Before Every Meal",
    category: "Throughout Day",
    time: "1 minute × 3",
    color: "#F59E0B",
    description: "Mealtime prayer is one of the oldest Christian practices — and one of the simplest. It creates three natural interruptions in the day to return to gratitude and dependence. Don't rush it to a formula. Briefly: thank God for the food, the provision, the people at the table. Name one person to pray for.",
    scripture: "He took the seven loaves and the fish, and when he had given thanks, he broke them... — Matthew 15:36",
    tip: "If you eat with family, rotate who prays. Children who learn to pray naturally at meals grow into adults who pray naturally everywhere.",
    difficulty: "Easy",
  },
  {
    number: 8,
    title: "Set a Mid-Day Prayer Alarm",
    category: "Throughout Day",
    time: "3 minutes",
    color: GREEN,
    description: "The Psalms refer to praying 'morning, noon, and night' (Psalm 55:17), and Daniel prayed three times a day. A mid-day alarm interrupts the drift of the afternoon with a brief return to God. Pause, breathe, name what's pressing, offer it. Three minutes of genuine attention to God mid-day.",
    scripture: "Evening and morning and at noon I utter my complaint and moan, and he hears my voice. — Psalm 55:17",
    tip: "Set a calendar block called 'God' at noon. When the alarm sounds, stop what you're doing, sit quietly for 60 seconds, then pray briefly. The interruption itself is formative.",
    difficulty: "Medium",
  },
  {
    number: 9,
    title: "Listen to a Christian Podcast or Sermon While Commuting",
    category: "Throughout Day",
    time: "15–45 minutes",
    color: PURPLE,
    description: "The average American commute is 27 minutes each way. Over a year, that's nearly 175 hours — 7 full days of input. Used intentionally, a commute can be the equivalent of a seminary semester annually. Ask Pastor John, The Gospel Coalition, Bible Project, and Desiring God all produce excellent audio content.",
    scripture: "Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom. — Colossians 3:16",
    tip: "Start with a show you genuinely enjoy rather than one you feel you should listen to. Habit formation requires positive association. Good starting points: Tim Keller Podcast, Ask Pastor John, or The Bible Project.",
    difficulty: "Easy",
  },
  {
    number: 10,
    title: "Practice the Presence of God in Ordinary Moments",
    category: "Throughout Day",
    time: "Ongoing",
    color: "#00D4AA",
    description: "Brother Lawrence (The Practice of the Presence of God) learned to pray while washing pots — not in formal prayer times but in continuous, low-level attention to God throughout the day. This isn't a technique but a cultivated orientation: the habit of briefly acknowledging God in transitions, decisions, and conversations.",
    scripture: "Pray without ceasing. — 1 Thessalonians 5:17",
    tip: "Pick five 'triggers' in your day — opening a door, getting in a car, starting a meeting — and use each one as a cue to breathe and briefly acknowledge God's presence. After a month, this becomes natural.",
    difficulty: "Hard",
  },
  {
    number: 11,
    title: "Speak Truth to Yourself When Anxiety Comes",
    category: "Throughout Day",
    time: "As needed",
    color: "#3B82F6",
    description: "Anxiety is often a spiritual problem as much as a psychological one — it believes that the outcome of a situation is more determinative of wellbeing than the faithfulness of God. The biblical prescription is not suppression but replacement: speak truth out loud. 'God has not given me a spirit of fear' (2 Tim 1:7). 'The Lord is my shepherd' (Ps 23:1).",
    scripture: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. — Philippians 4:6",
    tip: "Build a personal list of 5 'anxiety verses' — Scriptures that address your specific fear patterns. Write them on a card in your wallet. When anxiety spikes, pull the card.",
    difficulty: "Medium",
  },
  {
    number: 12,
    title: "Do Something Intentionally Kind for Someone",
    category: "Throughout Day",
    time: "5–15 minutes",
    color: "#EC4899",
    description: "The Great Commandment (love your neighbor) is not primarily a feeling but an action. The habit of doing one specific, intentional act of service daily — texting an encouragement, paying for someone's coffee, helping with a task — trains the heart to move away from self-focus. Love practiced becomes love felt.",
    scripture: "And let us consider how to stir up one another to love and good works. — Hebrews 10:24",
    tip: "Every morning, name one person you will intentionally serve today. It doesn't need to be elaborate — a text, a listening ear, a door held open with genuine attention. Specificity before the day starts is essential.",
    difficulty: "Medium",
  },
  {
    number: 13,
    title: "Review the Day with the Daily Examen",
    category: "Evening",
    time: "10 minutes",
    color: "#F59E0B",
    description: "The Daily Examen is a 500-year-old Jesuit prayer practice. Before sleep: (1) Thank God for the day's gifts. (2) Ask for light to see clearly. (3) Review the day — where did you feel God's presence? Where did you resist? (4) Respond honestly. (5) Look forward: what grace do you need for tomorrow? This brings the day to God rather than letting it drift away unexamined.",
    scripture: "Search me, God, and know my heart; test me and know my anxious thoughts. — Psalm 139:23",
    tip: "The Examen takes 10 minutes and dramatically increases self-awareness over time. Use the Pray As You Go app for a guided audio version each evening.",
    difficulty: "Medium",
  },
  {
    number: 14,
    title: "Confess Specific Sins Before Sleeping",
    category: "Evening",
    time: "5 minutes",
    color: "#EF4444",
    description: "The Puritan practice of 'closing accounts with God' each evening — not rehearsing every sin in exhausting detail, but not ignoring them either. Name the specific things from today. Receive the forgiveness that is already yours in Christ. Don't sleep carrying guilt that the cross has already dealt with.",
    scripture: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness. — 1 John 1:9",
    tip: "This practice requires honesty about actual sin — not 'I probably wasn't perfect today' but 'I was proud in that meeting, and I snapped at my spouse.' Naming it makes it real and makes the forgiveness real.",
    difficulty: "Hard",
  },
  {
    number: 15,
    title: "Read Five Minutes of a Good Christian Book Before Bed",
    category: "Evening",
    time: "5–15 minutes",
    color: PURPLE,
    description: "The last information the brain processes before sleep is strongly retained. Reading five minutes of a formative Christian book — not a novel, not social media — gives the subconscious something rich to process overnight. Start small: 5 minutes is the habit, 15 is the outcome.",
    scripture: "Blessed is the one who... meditates on his law day and night. — Psalm 1:2",
    tip: "Keep one book — just one — on your nightstand at all times. The Psalms, a book by C.S. Lewis, N.T. Wright, or Keller. When the book is finished, immediately put the next one there. Never let the nightstand sit empty.",
    difficulty: "Easy",
  },
  {
    number: 16,
    title: "Attend Church Every Week Without Exception",
    category: "Weekly",
    time: "1.5–2 hours",
    color: GREEN,
    description: "Church attendance is not optional in the Christian life — Hebrews 10:25 explicitly warns against neglecting it. But more than obligation, church is the primary means of grace: preaching, Eucharist, baptism, corporate prayer, and the community of the body. Online church attendance is not equivalent to physical presence in a local congregation.",
    scripture: "Not neglecting to meet together, as is the habit of some, but encouraging one another. — Hebrews 10:25",
    tip: "If you don't have a church, finding one is the most urgent spiritual task you have. Use the 9Marks Church Finder, TGC church finder, or Acts 29 network to find a healthy, expository church in your area.",
    difficulty: "Medium",
  },
  {
    number: 17,
    title: "Observe a Weekly Sabbath",
    category: "Weekly",
    time: "24 hours",
    color: "#6366F1",
    description: "The Sabbath is the only commandment with a cosmic grounding — God rested on the seventh day not because he was tired but as a declaration of completion and delight. The Sabbath is an act of trust that the world can run without us for one day. It resists productivity idolatry and restores the body, mind, and soul.",
    scripture: "Remember the Sabbath day, to keep it holy. — Exodus 20:8",
    tip: "A practical Sabbath: from Saturday evening to Sunday evening, no work emails, no task lists, no productivity. Do things you love — read, walk, cook, be with people you love. The point is delight, not rule-keeping.",
    difficulty: "Hard",
  },
  {
    number: 18,
    title: "Connect Meaningfully With One Other Christian",
    category: "Weekly",
    time: "30–60 minutes",
    color: "#EC4899",
    description: "The Christian faith cannot be lived in isolation. The New Testament's 'one another' commands — love one another, bear one another's burdens, confess to one another — all require proximity. One substantive conversation per week (not small talk, but honest faith talk) with another Christian is the minimum for real community.",
    scripture: "Therefore, confess your sins to one another and pray for one another, that you may be healed. — James 5:16",
    tip: "Text one person this week: 'I want to ask you how you're actually doing spiritually.' Be specific. Superficial community is barely better than none. Ask real questions.",
    difficulty: "Medium",
  },
  {
    number: 19,
    title: "Give a Percentage of Every Paycheck First",
    category: "Weekly",
    time: "10 minutes",
    color: "#F59E0B",
    description: "The tithe (giving 10%) is the biblical floor of generosity, not the ceiling. The discipline of giving first — before any other expense — trains the heart that God is the owner and we are managers. It also practically ensures generosity happens rather than hoping what's left over is sufficient.",
    scripture: "Honor the LORD with your wealth and with the firstfruits of all your produce. — Proverbs 3:9",
    tip: "Set up automatic giving to your church before payday. The best generosity is automatic and invisible — it requires a decision once, not weekly willpower. Then pray about whether to increase it.",
    difficulty: "Medium",
  },
  {
    number: 20,
    title: "Review Your Week and Plan the Next Prayerfully",
    category: "Weekly",
    time: "20 minutes",
    color: "#3B82F6",
    description: "Sunday evening or Monday morning: look back at the week past — where did you grow? What slipped? Then look ahead — what is this week calling for spiritually? Name one specific spiritual intention for the week: one area to grow, one person to serve, one sin to resist. Without review, the weeks blur together.",
    scripture: "So teach us to number our days that we may get a heart of wisdom. — Psalm 90:12",
    tip: "Use a simple framework: What went well spiritually this week? What did I neglect? What one thing will I focus on this week? Write it down in your journal.",
    difficulty: "Medium",
  },
  {
    number: 21,
    title: "Fast One Meal Per Week",
    category: "Weekly",
    time: "One skipped meal",
    color: "#10B981",
    description: "Jesus assumed his disciples would fast ('when you fast', not 'if you fast' — Matthew 6:16). Fasting is not earning God's favor — it is declaring that spiritual hunger matters more than physical hunger, and it historically breaks spiritual dryness and sharpens prayer. Start with one meal per week, not a multi-day fast.",
    scripture: "And when you fast, do not look gloomy... — Matthew 6:16",
    tip: "Skip lunch once a week. Use the hunger as a prayer prompt — every time you feel hungry, pray instead of eating. The physical sensation becomes a spiritual signal. Over time, this deepens both prayer and dependence.",
    difficulty: "Hard",
  },
];

const DIFFICULTY_COLOR: Record<string, string> = {
  Easy: GREEN,
  Medium: "#F59E0B",
  Hard: "#EF4444",
};

export default function DailyChristianHabitsPage() {
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = HABITS.filter(h => category === "All" || h.category === category);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌱</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>21 Daily Christian Habits</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto" }}>
            Spiritual growth is not a feeling — it is a set of practiced habits, repeated over years, that reshape who we are. These 21 practices are the building blocks of a life with God.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, textAlign: "center" }}>
          {[
            { label: "Morning Habits", count: HABITS.filter(h => h.category === "Morning").length, color: GREEN },
            { label: "Through the Day", count: HABITS.filter(h => h.category === "Throughout Day").length, color: "#3B82F6" },
            { label: "Evening + Weekly", count: HABITS.filter(h => h.category === "Evening" || h.category === "Weekly").length, color: PURPLE },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 28, fontWeight: 900, color: s.color }}>{s.count}</div>
              <div style={{ color: MUTED, fontSize: 12 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
          {HABIT_CATEGORIES.map(c => (
            <button key={c} onClick={() => setCategory(c)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${category === c ? GREEN : BORDER}`, background: category === c ? `${GREEN}15` : "transparent", color: category === c ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {c}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {filtered.map((h) => (
            <div key={h.number} style={{ borderRadius: expanded === h.number ? "12px 12px 0 0" : 12, overflow: "hidden" }}>
              <button onClick={() => setExpanded(expanded === h.number ? null : h.number)}
                style={{ width: "100%", background: expanded === h.number ? `${h.color}10` : CARD, border: `1px solid ${expanded === h.number ? h.color + "40" : BORDER}`, borderRadius: expanded === h.number ? "12px 12px 0 0" : 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: `${h.color}20`, border: `1px solid ${h.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: h.color, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>
                    {h.number}
                  </div>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{h.title}</div>
                    <div style={{ display: "flex", gap: 8, marginTop: 3, flexWrap: "wrap" }}>
                      <span style={{ color: MUTED, fontSize: 11 }}>{h.category} · {h.time}</span>
                      <span style={{ color: DIFFICULTY_COLOR[h.difficulty], fontSize: 11, fontWeight: 700 }}>{h.difficulty}</span>
                    </div>
                  </div>
                </div>
                <span style={{ color: h.color, flexShrink: 0, marginLeft: 8 }}>{expanded === h.number ? "−" : "+"}</span>
              </button>

              {expanded === h.number && (
                <div style={{ background: BG, border: `1px solid ${h.color}20`, borderTop: "none", borderRadius: "0 0 12px 12px", padding: 22 }}>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{h.description}</p>

                  <div style={{ background: `${h.color}08`, border: `1px solid ${h.color}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                    <div style={{ color: h.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>SCRIPTURE</div>
                    <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>{h.scripture}</p>
                  </div>

                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>PRACTICAL TIP</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{h.tip}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 24, marginTop: 32, textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🔥</div>
          <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 18, marginBottom: 8 }}>Start With Three</h3>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, maxWidth: 500, margin: "0 auto" }}>
            Don't try to implement all 21 at once — that's a guarantee of failure. Pick three habits, one from each time of day, and practice them for 30 days until they're automatic. Then add three more. Compounding spiritual disciplines is more powerful than heroic one-week attempts.
          </p>
        </div>
      </div>
    </div>
  );
}
