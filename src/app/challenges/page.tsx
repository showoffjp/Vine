"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, CheckCircle2, Users, Flame, Trophy, Star, Calendar } from "lucide-react";
import { usePersistedState } from "@/hooks/usePersistedState";

type Tab = "active" | "devotionals" | "scripture" | "videos";

const weeklyChallenge = {
  id: 1,
  title: "30-Day Prayer Streak",
  subtitle: "Pray for 5 minutes every day for 30 days",
  description: "Prayer is the foundation of everything. This month, commit to spending at least 5 minutes in prayer each morning. Use the Daily Bread devotional as a guide, journal your prayers, and track your streak.",
  verse: "Devote yourselves to prayer, being watchful and thankful.",
  verseRef: "Colossians 4:2",
  participants: 14823,
  category: "Prayer",
  color: "#3a7d56",
  emoji: "🙏",
  steps: [
    "Open the Vine app first thing in the morning",
    "Read today's Daily Bread devotional",
    "Spend at least 5 minutes in prayer",
    "Write a one-sentence prayer in your Journal",
    "Check off your streak in the app",
  ],
};

const activeChallenges = [
  {
    id: 2,
    title: "Read Through Psalms",
    description: "Read one Psalm per day for 30 days. Reflect, highlight, and pray through each one.",
    verse: "His delight is in the law of the Lord, and on his law he meditates day and night.",
    verseRef: "Psalm 1:2",
    participants: 8421,
    daysLeft: 15,
    category: "Scripture",
    color: "#6B4FBB",
    emoji: "📖",
    difficulty: "Beginner",
  },
  {
    id: 3,
    title: "Bless a Stranger",
    description: "Do one intentional act of kindness for a stranger every day this week — and share what happened.",
    verse: "Do not forget to show hospitality to strangers, for by so doing some people have shown hospitality to angels.",
    verseRef: "Hebrews 13:2",
    participants: 3107,
    daysLeft: 5,
    category: "Community",
    color: "#F59E0B",
    emoji: "🤝",
    difficulty: "Intermediate",
  },
  {
    id: 4,
    title: "Digital Sabbath",
    description: "One day a week, put the phone down. No social media, no streaming. Rest, worship, be present.",
    verse: "Remember the Sabbath day by keeping it holy.",
    verseRef: "Exodus 20:8",
    participants: 5892,
    daysLeft: 28,
    category: "Rest",
    color: "#4FBBAA",
    emoji: "🌿",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "Memorize Romans 8:28-39",
    description: "One of the most powerful passages in Scripture. Memorize it verse by verse over 14 days.",
    verse: "And we know that in all things God works for the good of those who love him.",
    verseRef: "Romans 8:28",
    participants: 2341,
    daysLeft: 10,
    category: "Scripture",
    color: "#EF4444",
    emoji: "🧠",
    difficulty: "Advanced",
  },
  {
    id: 6,
    title: "Give Generously",
    description: "Give away something every day for a week — money, time, words of encouragement, a meal.",
    verse: "Give, and it will be given to you.",
    verseRef: "Luke 6:38",
    participants: 4102,
    daysLeft: 6,
    category: "Generosity",
    color: "#EC4899",
    emoji: "💝",
    difficulty: "Beginner",
  },
];

const completedChallenges = [
  { title: "21-Day Gratitude Journal", participants: 9821, badge: "🏅", date: "May 2026" },
  { title: "Read All 4 Gospels", participants: 6234, badge: "📖", date: "Apr 2026" },
  { title: "One Week of Fasting", participants: 4102, badge: "🔥", date: "Mar 2026" },
];

const categories = ["All", "Prayer", "Scripture", "Community", "Rest", "Generosity"];

const CHALLENGE_DEVOS = [
  {
    id: "devo-1",
    day: 1,
    title: "Why Disciplines Matter",
    verse: "But Jesus often withdrew to lonely places and prayed.",
    verseRef: "Luke 5:16",
    devotional: "Jesus did not pray because he had to — he prayed because relationship with the Father was the source of everything he did. If the Son of God withdrew regularly to pray, how much more do we need disciplines that reconnect us to the source of life? Beginning a spiritual challenge is an act of imitation: you are doing what Jesus did. The discipline is not the point — the encounter is. But disciplines create the conditions where encounter becomes possible.",
    prayer: "Lord, as I begin this challenge, remind me that the goal is not the habit but you. Make every act of discipline an open door to your presence.",
  },
  {
    id: "devo-3",
    day: 3,
    title: "Past the First Resistance",
    verse: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
    verseRef: "Galatians 6:9",
    devotional: "Day three is where the first wall appears. The decision felt clear on day one; by day three the body and mind are negotiating for a return to the old normal. This is ordinary. Every farmer knows the gap between planting and harvest is filled with days that look like nothing is happening underground. Paul's phrase 'at the proper time' is a promise that the harvest is real even when it is invisible. The seed you are planting in these unremarkable early days is doing its work in the dark.",
    prayer: "Father, when I feel like nothing is changing, remind me that seeds grow unseen. Keep me from weariness. Let me trust the harvest you have promised at the proper time.",
  },
  {
    id: "devo-7",
    day: 7,
    title: "When It Gets Hard",
    verse: "My grace is sufficient for you, for my power is made perfect in weakness.",
    verseRef: "2 Corinthians 12:9",
    devotional: "By day seven, the novelty has worn off. The discipline that felt exciting on day one now feels like work. This is not a sign that something has gone wrong — it is a sign that something important is beginning. Paul did not receive the grace he needed until he asked three times and was told no. The difficulty is not an obstacle to spiritual growth; it is the precise location where growth happens. Weakness is the address where God's power arrives.",
    prayer: "Father, I am weaker than I thought. I need more than discipline — I need you. Where I am failing, pour in what I lack. Let my insufficiency become the occasion for your sufficiency.",
  },
  {
    id: "devo-10",
    day: 10,
    title: "From Effort to Rhythm",
    verse: "Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.",
    verseRef: "Matthew 11:29",
    devotional: "By day ten, something subtle is shifting. The discipline that demanded conscious effort is beginning to find a groove. Jesus describes his yoke not as the absence of work but as work shared at the right pace — a yoke fitted to the one who carries it. Spiritual disciplines were never meant to be a heavy harness you drag alone; they are a yoke you wear with Christ, who carries the weight beside you. If you feel the discipline becoming less of a fight and more of a rhythm, that is not your willpower improving — it is you learning his pace.",
    prayer: "Jesus, teach me your rhythm. Take the parts of this discipline that still feel like striving and turn them into rest. I want to walk in step with you, not ahead of you or behind.",
  },
  {
    id: "devo-14",
    day: 14,
    title: "The Halfway Point",
    verse: "Forgetting what is behind and straining toward what is ahead, I press on toward the goal.",
    verseRef: "Philippians 3:13-14",
    devotional: "Fourteen days in, you are standing exactly in the middle. Behind you are days you kept and perhaps days you missed. Paul's counsel is radical: forget what is behind. Not to ignore it, but to refuse to let it define your momentum. The runner who keeps looking back at the ground already covered loses ground on what lies ahead. The halfway point is not a moment for assessment — it is a moment for renewed commitment. The second half begins now.",
    prayer: "God, I release what is behind me — the good days and the missed ones alike. Set my eyes on what is ahead. Give me fresh resolve for the second half.",
  },
  {
    id: "devo-17",
    day: 17,
    title: "The Unseen Audience",
    verse: "Your Father, who sees what is done in secret, will reward you.",
    verseRef: "Matthew 6:4",
    devotional: "Somewhere past the midpoint, a quiet temptation arrives: since no one is watching, why keep going so carefully? The early enthusiasm that others noticed has faded, and the discipline is now genuinely private. Jesus speaks directly to this moment. The most formative spiritual work happens precisely where no human applause reaches — in the secret place seen only by the Father. The discipline you keep when no one would know if you quit is the discipline actually shaping your character. Day seventeen is hidden, and that is exactly why it matters.",
    prayer: "Father, you see what is done in secret. Let me keep this discipline for your eyes alone, not for applause. Form in me the kind of faithfulness that does not need an audience.",
  },
  {
    id: "devo-21",
    day: 21,
    title: "Deepening the Habit",
    verse: "Whoever looks intently into the perfect law that gives freedom, and continues in it — not forgetting what they have heard, but doing it — they will be blessed in what they do.",
    verseRef: "James 1:25",
    devotional: "Research suggests that twenty-one days is roughly when a behavior begins to feel less effortful. James knew something similar: the person who looks into God's word and does not merely hear but does it is blessed in the doing, not just in the knowing. Discipline, practiced long enough, becomes delight. The spiritual life is not about white-knuckling obedience forever — it is about practicing habits long enough that they become the shape of who you are. By day twenty-one, this discipline is becoming part of you.",
    prayer: "Lord, what began as effort is slowly becoming desire. Complete the work you started in me. Let this discipline become a delight that outlasts the challenge.",
  },
  {
    id: "devo-25",
    day: 25,
    title: "Finishing Stronger Than You Started",
    verse: "Better is the end of a thing than its beginning, and patience is better than pride.",
    verseRef: "Ecclesiastes 7:8",
    devotional: "With the finish line in view, a dangerous thought surfaces: you have basically made it, so the last few days hardly count. But the Preacher of Ecclesiastes insists the end of a thing is better than its beginning. Anyone can start with a burst of pride; it takes patience to finish. The final stretch of a challenge is where character is sealed, not where it can safely slacken. Runners do not coast through the last quarter mile — they empty the tank. Finish these days with the same intentionality you brought to day one, and you will end stronger than you began.",
    prayer: "Lord, guard me from coasting now. Give me patience for the final stretch. Let me finish this challenge with my whole heart, honoring you in the last day as much as the first.",
  },
  {
    id: "devo-30",
    day: 30,
    title: "Not the End, but the Beginning",
    verse: "Let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith.",
    verseRef: "Hebrews 12:1-2",
    devotional: "You have reached day thirty. But Hebrews does not speak of a thirty-day sprint — it speaks of a race marked out for us. The finish line of this challenge is not the finish line of the race; it is a training milestone. Every great athlete uses training seasons to build capacity for the event that matters. You have just completed a training season. The faithfulness you developed here is not meant to end here — it is meant to carry you further into the race that stretches before you.",
    prayer: "Father, thank you for bringing me to this day. Do not let me stop here. Take what was built in these thirty days and let it be the foundation for the life of discipleship still ahead of me.",
  },
];

const CHALLENGE_SCRIPTURE = [
  {
    id: "cs1",
    ref: "1 Corinthians 9:24-27",
    text: "Do you not know that in a race all the runners run, but only one gets the prize? Run in such a way as to get the prize. Everyone who competes in the games goes into strict training. They do it to get a crown that will not last, but we do it to get a crown that will last forever.",
    theme: "Spiritual Athletics",
    application: "Paul uses the language of competitive athletics to describe the spiritual life on purpose: serious athletes train with intensity, not casualness. The spiritual disciplines of prayer, scripture, fasting, and service are training regimens. They are not optional extras for the especially devout — they are how every follower of Jesus gets into shape for the race.",
  },
  {
    id: "cs2",
    ref: "Hebrews 12:1-2",
    text: "Let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith.",
    theme: "Running the Race",
    application: "Two things required for running well: shedding what slows you down, and fixing your eyes on the right target. Spiritual challenges work on both fronts simultaneously. They create intentional moments to lay things aside and redirect focus. What you give your eyes to determines your direction — and Jesus is the only finish line worth running toward.",
  },
  {
    id: "cs3",
    ref: "James 1:2-4",
    text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.",
    theme: "Trials as Training",
    application: "James does not say trials feel like joy — he says to consider them joy, which is an act of the will, not the emotions. The logic is simple and verifiable: testing produces perseverance, perseverance produces maturity. Difficulty in a spiritual challenge is not a sign of failure; it is the precise mechanism through which the challenge produces the growth you are after.",
  },
  {
    id: "cs4",
    ref: "Romans 5:3-5",
    text: "We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope. And hope does not put us to shame, because God's love has been poured out into our hearts through the Holy Spirit.",
    theme: "Character Development",
    application: "Paul traces a chain of transformation: suffering produces perseverance, perseverance produces character, character produces hope. This is not a formula for masochism — it is a description of how formation actually works. The hardest days of any spiritual challenge are the days doing the most work. The discipline you feel least like continuing is usually the one you most need to continue.",
  },
  {
    id: "cs5",
    ref: "2 Timothy 4:7-8",
    text: "I have fought the good fight, I have finished the race, I have kept the faith. Now there is in store for me the crown of righteousness, which the Lord, the righteous Judge, will award to me on that day.",
    theme: "Finishing Well",
    application: "Paul writes these words from prison, facing execution. They are not the triumphant declaration of someone whose circumstances were easy — they are the testimony of someone who persevered through the worst of circumstances. Finishing well does not require perfect conditions. It requires the daily decision to keep the faith, fight the fight, and stay in the race, whatever the cost.",
  },
  {
    id: "cs6",
    ref: "Philippians 4:13",
    text: "I can do all this through him who gives me strength.",
    theme: "Christ-Empowered Living",
    application: "This verse is often quoted as a motivational slogan, but the context is Paul describing contentment in both abundance and need. The strength Christ provides is not athletic willpower or positive thinking — it is the specific grace to remain faithful and at peace whatever the circumstances. In a spiritual challenge, this means the capacity to continue does not come from gritting your teeth; it comes from moment-by-moment dependence on the one who strengthens you.",
  },
];

const CHALLENGE_VIDEOS = [
  {
    id: "cv1",
    title: "Don't Waste Your Life",
    preacher: "John Piper",
    videoId: "JHdB1dYAteA",
    description: "The ultimate challenge: live your whole life for something worth dying for",
  },
  {
    id: "cv2",
    title: "Shocking Youth Message",
    preacher: "Paul Washer",
    videoId: "uuabITeO4l8",
    description: "Washer's call to examine whether our spiritual disciplines are real or performance",
  },
  {
    id: "cv3",
    title: "Radical: Passion 2011",
    preacher: "David Platt",
    videoId: "yhiHSf_L6_E",
    description: "Platt's challenge to Christians to pursue radical discipleship rather than comfortable Christianity",
  },
  {
    id: "cv4",
    title: "Forgotten God Part 1",
    preacher: "Francis Chan",
    videoId: "sWMjg7CxIKk",
    description: "Chan challenges believers to pursue Spirit-powered discipleship, not mere rule-keeping",
  },
  {
    id: "cv5",
    title: "The Prodigal Sons",
    preacher: "Tim Keller",
    videoId: "lsTzXI7cJGA",
    description: "Keller's portrait of the Father who celebrates every return — the motivation behind all spiritual challenges",
  },
  {
    id: "cv6",
    title: "How Great Is Our God",
    preacher: "Louie Giglio",
    videoId: "X1rPalyUshw",
    description: "Seeing God's greatness clearly is the single best motivation for sustained spiritual challenge",
  },
];

export default function ChallengesPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_challenges_tab", "active");
  const [joined, setJoined] = useState<Set<number>>(() => {
    try {
      const s = localStorage.getItem("vine_challenges_joined");
      return s ? new Set(JSON.parse(s) as number[]) : new Set([1]);
    } catch { return new Set([1]); }
  });
  const [activeCategory, setActiveCategory] = usePersistedState("vine_challenges_active_category", "All");
  const [completedDays, setCompletedDays] = useState<Set<number>>(() => {
    try {
      const s = localStorage.getItem("vine_prayer_streak");
      return s ? new Set(JSON.parse(s) as number[]) : new Set<number>();
    } catch { return new Set<number>(); }
  });
  const [challengeStartDate] = useState<string>(() => {
    try {
      let d = localStorage.getItem("vine_challenge_start");
      if (!d) {
        d = new Date().toISOString().split("T")[0];
        localStorage.setItem("vine_challenge_start", d);
      }
      return d;
    } catch { return new Date().toISOString().split("T")[0]; }
  });

  useEffect(() => {
    try {
      localStorage.setItem("vine_challenges_joined", JSON.stringify([...joined]));
    } catch {}
  }, [joined]);

  useEffect(() => {
    try {
      localStorage.setItem("vine_prayer_streak", JSON.stringify([...completedDays]));
    } catch {}
  }, [completedDays]);

  const toggleJoin = (id: number) => {
    setJoined((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const today0ch = new Date(); today0ch.setHours(0, 0, 0, 0);
  const start0ch = new Date(challengeStartDate + "T00:00:00");
  const currentChallengeDay = Math.min(30, Math.max(1, Math.floor((today0ch.getTime() - start0ch.getTime()) / 86400000) + 1));

  const toggleDay = (day: number) => {
    if (day > currentChallengeDay) return;
    setCompletedDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });
  };

  const filtered = activeChallenges.filter(
    (c) => activeCategory === "All" || c.category === activeCategory
  );

  const streakDays = Array.from({ length: 30 }, (_, i) => i + 1);
  const completedCount = completedDays.size;

  const tabs: { key: Tab; label: string }[] = [
    { key: "active", label: "Challenges" },
    { key: "devotionals", label: "Devotionals" },
    { key: "scripture", label: "Scripture" },
    { key: "videos", label: "Videos" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Target size={20} style={{ color: "#3a7d56" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>Challenges</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Grow{" "}
            <span style={{ background: "linear-gradient(135deg, #3a7d56, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              together.
            </span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#6A6A88" }}>
            Real spiritual growth happens in community. Join a challenge, track your progress, and cheer others on.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div style={{ display: "flex", gap: 4, borderBottom: "1px solid #1E1E32" }}>
            {tabs.map(({ key, label }) => (
              <button type="button"
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  padding: "10px 22px",
                  fontSize: 14,
                  fontWeight: 600,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: activeTab === key ? "#3a7d56" : "#6A6A88",
                  borderBottom: `2px solid ${activeTab === key ? "#3a7d56" : "transparent"}`,
                  marginBottom: -1,
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab */}
        {activeTab === "active" && (
          <>
            {/* Featured Challenge */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Challenge card */}
                <div className="lg:col-span-2 rounded-2xl p-8" style={{ background: "linear-gradient(135deg, rgba(58,125,86,0.08) 0%, rgba(16,185,129,0.04) 100%)", border: "1px solid rgba(58,125,86,0.25)" }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block" style={{ background: "rgba(58,125,86,0.15)", color: "#3a7d56" }}>
                        🔥 This Month&apos;s Challenge
                      </span>
                      <h2 className="text-3xl font-black mb-2" style={{ color: "#F2F2F8" }}>
                        {weeklyChallenge.emoji} {weeklyChallenge.title}
                      </h2>
                      <p className="text-base mb-4" style={{ color: "#8A8AA8" }}>{weeklyChallenge.description}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl mb-6" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(58,125,86,0.1)" }}>
                    <p className="text-sm italic mb-1" style={{ color: "#C0C0D8" }}>&ldquo;{weeklyChallenge.verse}&rdquo;</p>
                    <p className="text-xs font-bold" style={{ color: "#3a7d56" }}>— {weeklyChallenge.verseRef}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center rounded-xl p-3" style={{ background: "rgba(0,0,0,0.2)" }}>
                      <p className="text-xl font-black" style={{ color: "#3a7d56" }}>{weeklyChallenge.participants.toLocaleString()}</p>
                      <p className="text-xs" style={{ color: "#4A4A68" }}>Participants</p>
                    </div>
                    <div className="text-center rounded-xl p-3" style={{ background: "rgba(0,0,0,0.2)" }}>
                      <p className="text-xl font-black" style={{ color: "#F59E0B" }}>{Math.max(0, 30 - currentChallengeDay + 1)}</p>
                      <p className="text-xs" style={{ color: "#4A4A68" }}>Days left</p>
                    </div>
                    <div className="text-center rounded-xl p-3" style={{ background: "rgba(0,0,0,0.2)" }}>
                      <p className="text-xl font-black" style={{ color: "#6B4FBB" }}>{completedCount}/30</p>
                      <p className="text-xs" style={{ color: "#4A4A68" }}>Your streak</p>
                    </div>
                  </div>

                  <button type="button"
                    onClick={() => toggleJoin(1)}
                    className="w-full py-3.5 rounded-xl font-black text-base transition-all"
                    style={{
                      background: joined.has(1) ? "rgba(58,125,86,0.15)" : "linear-gradient(135deg, #3a7d56, #3a7d56)",
                      color: joined.has(1) ? "#3a7d56" : "#07070F",
                      border: joined.has(1) ? "1px solid rgba(58,125,86,0.4)" : "none",
                    }}
                  >
                    {joined.has(1) ? "✓ Challenge Accepted!" : "Accept Challenge"}
                  </button>
                </div>

                {/* Streak tracker */}
                <div className="rounded-2xl p-6" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-black text-base" style={{ color: "#F2F2F8" }}>Your Streak</h3>
                    <div className="flex items-center gap-1">
                      <Flame size={14} style={{ color: "#E07030" }} />
                      <span className="font-black text-sm" style={{ color: "#F2F2F8" }}>{completedCount} days</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {streakDays.map((day) => {
                      const done = completedDays.has(day);
                      const isToday = day === currentChallengeDay;
                      const isFuture = day > currentChallengeDay;
                      return (
                        <button type="button"
                          key={day}
                          onClick={() => toggleDay(day)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold transition-all"
                          style={{
                            background: isFuture
                              ? "rgba(0,0,0,0.15)"
                              : done
                              ? isToday
                                ? "linear-gradient(135deg, #3a7d56, #52a876)"
                                : "rgba(58,125,86,0.2)"
                              : "#1E1E32",
                            color: isFuture ? "#2A2A3A" : done ? (isToday ? "#07070F" : "#3a7d56") : "#4A4A68",
                            border: isToday && !done ? "1px solid rgba(58,125,86,0.3)" : "none",
                            cursor: isFuture ? "default" : "pointer",
                          }}
                          title={isFuture ? `Day ${day} (not yet)` : `Day ${day}`}
                        >
                          {done ? "✓" : day}
                        </button>
                      );
                    })}
                  </div>
                  <div className="p-3 rounded-xl text-center" style={{ background: "rgba(58,125,86,0.05)", border: "1px solid rgba(58,125,86,0.1)" }}>
                    <p className="text-xs" style={{ color: "#6A6A88" }}>
                      {completedCount === 0
                        ? "Start today — tap a day to mark it complete"
                        : completedCount >= 30
                        ? "🏆 Challenge complete! Amazing!"
                        : `${30 - completedCount} days to go. You've got this!`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Category filter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {categories.map((c) => (
                  <button type="button"
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all"
                    style={{
                      background: activeCategory === c ? "rgba(58,125,86,0.15)" : "rgba(255,255,255,0.03)",
                      border: activeCategory === c ? "1px solid rgba(58,125,86,0.4)" : "1px solid rgba(255,255,255,0.06)",
                      color: activeCategory === c ? "#3a7d56" : "#8A8AA8",
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Challenges */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
              <h2 className="text-xl font-black mb-5" style={{ color: "#F2F2F8" }}>Active Challenges</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((c) => {
                  const isJoined = joined.has(c.id);
                  return (
                    <div key={c.id} className="rounded-2xl p-5 flex flex-col" style={{ background: "#12121F", border: `1px solid ${isJoined ? c.color + "30" : "#1E1E32"}` }}>
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-3xl">{c.emoji}</span>
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: `${c.color}15`, color: c.color }}>
                            {c.category}
                          </span>
                          <span className="text-xs" style={{ color: "#4A4A68" }}>{c.difficulty}</span>
                        </div>
                      </div>
                      <h3 className="font-black text-base mb-2" style={{ color: "#F2F2F8" }}>{c.title}</h3>
                      <p className="text-sm flex-1 mb-3" style={{ color: "#6A6A88", lineHeight: "1.6" }}>{c.description}</p>
                      <div className="flex items-center gap-3 text-xs mb-4" style={{ color: "#4A4A68" }}>
                        <span className="flex items-center gap-1"><Users size={11} /> {c.participants.toLocaleString()}</span>
                        <span className="flex items-center gap-1"><Calendar size={11} /> {c.daysLeft} days left</span>
                      </div>
                      <p className="text-xs italic mb-4" style={{ color: "#8A8AA8" }}>
                        &ldquo;{c.verse}&rdquo; <span style={{ color: c.color }}>— {c.verseRef}</span>
                      </p>
                      <button type="button"
                        onClick={() => toggleJoin(c.id)}
                        className="py-2.5 rounded-xl font-bold text-sm transition-all mt-auto"
                        style={{
                          background: isJoined ? `${c.color}15` : "rgba(255,255,255,0.04)",
                          color: isJoined ? c.color : "#8A8AA8",
                          border: `1px solid ${isJoined ? c.color + "40" : "rgba(255,255,255,0.08)"}`,
                        }}
                      >
                        {isJoined ? <span className="flex items-center justify-center gap-1.5"><CheckCircle2 size={13} /> Joined</span> : "Join Challenge"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Completed Challenges Hall of Fame */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-black mb-5" style={{ color: "#F2F2F8" }}>
                <Trophy size={18} className="inline mr-2" style={{ color: "#F59E0B" }} />
                Hall of Fame
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {completedChallenges.map((c) => (
                  <div key={c.title} className="rounded-2xl p-5 text-center" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                    <div className="text-4xl mb-2">{c.badge}</div>
                    <p className="font-bold text-sm mb-1" style={{ color: "#F2F2F8" }}>{c.title}</p>
                    <p className="text-xs mb-1" style={{ color: "#4A4A68" }}>{c.date}</p>
                    <p className="text-xs flex items-center justify-center gap-1" style={{ color: "#6A6A88" }}>
                      <Star size={10} style={{ color: "#F59E0B" }} />
                      {c.participants.toLocaleString()} completions
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Devotionals Tab */}
        {activeTab === "devotionals" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ marginBottom: 28, textAlign: "center" }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: "#F2F2F8", marginBottom: 8 }}>Challenge Devotionals</h2>
              <p style={{ color: "#9898B3", fontSize: 15, maxWidth: 560, margin: "0 auto" }}>
                Nine key moments across any 30-day challenge &mdash; devotionals written for exactly where you are on the journey.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {CHALLENGE_DEVOS.map(d => (
                <div key={d.id} style={{ background: "#12121F", borderRadius: 16, padding: 28, border: "1px solid #1E1E32" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 16 }}>
                    <div style={{ flexShrink: 0, background: "rgba(107,79,187,0.15)", border: "1px solid rgba(107,79,187,0.3)", borderRadius: 12, padding: "10px 16px", textAlign: "center", minWidth: 68 }}>
                      <div style={{ fontSize: 11, color: "#9898B3", textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>Day</div>
                      <div style={{ fontSize: 26, fontWeight: 900, color: "#6B4FBB", lineHeight: 1 }}>{d.day}</div>
                    </div>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 800, color: "#F2F2F8", marginBottom: 6 }}>{d.title}</h3>
                      <p style={{ fontSize: 14, color: "#3a7d56", fontStyle: "italic", lineHeight: 1.6, margin: 0 }}>
                        &ldquo;{d.verse}&rdquo; <span style={{ fontStyle: "normal", fontWeight: 700, color: "#00BB66" }}>&mdash; {d.verseRef}</span>
                      </p>
                    </div>
                  </div>
                  <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 18 }}>{d.devotional}</p>
                  <div style={{ background: "#07070F", borderRadius: 10, padding: "14px 18px", borderLeft: "3px solid #6B4FBB" }}>
                    <div style={{ fontSize: 11, color: "#6B4FBB", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Prayer Prompt</div>
                    <p style={{ fontSize: 14, color: "#9898B3", lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>{d.prayer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scripture Tab */}
        {activeTab === "scripture" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ marginBottom: 28, textAlign: "center" }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: "#F2F2F8", marginBottom: 8 }}>Scripture on Perseverance &amp; Discipline</h2>
              <p style={{ color: "#9898B3", fontSize: 15, maxWidth: 560, margin: "0 auto" }}>
                Six passages that speak directly to the spirituality of challenge, training, and finishing well.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 18 }}>
              {CHALLENGE_SCRIPTURE.map(s => (
                <div key={s.id} style={{ background: "#12121F", borderRadius: 16, padding: 24, border: "1px solid #1E1E32", display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                    <span style={{ fontSize: 15, fontWeight: 800, color: "#3a7d56" }}>{s.ref}</span>
                    <span style={{ background: "rgba(107,79,187,0.15)", color: "#A080FF", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, border: "1px solid rgba(107,79,187,0.25)" }}>
                      {s.theme}
                    </span>
                  </div>
                  <p style={{ fontSize: 14, color: "#C0C0D8", fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
                  <div style={{ borderTop: "1px solid #1E1E32", paddingTop: 14 }}>
                    <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.7, margin: 0 }}>{s.application}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ marginBottom: 28, textAlign: "center" }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: "#F2F2F8", marginBottom: 8 }}>Sermons to Fuel the Challenge</h2>
              <p style={{ color: "#9898B3", fontSize: 15, maxWidth: 560, margin: "0 auto" }}>
                Preaching that motivates, convicts, and sustains the kind of discipleship no 30-day challenge can contain.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: 24 }}>
              {CHALLENGE_VIDEOS.map(v => (
                <div key={v.id} style={{ background: "#12121F", borderRadius: 16, overflow: "hidden", border: "1px solid #1E1E32" }}>
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", display: "block" }}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div style={{ padding: 18 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span style={{ background: "rgba(107,79,187,0.2)", color: "#A080FF", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, border: "1px solid rgba(107,79,187,0.3)" }}>
                        {v.preacher}
                      </span>
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 800, color: "#F2F2F8", marginBottom: 6 }}>{v.title}</h3>
                    <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
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
