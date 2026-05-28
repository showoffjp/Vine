"use client";

import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Stage = { age: string; label: string; emoji: string; color: string; verse: string; verseRef: string; principles: string[]; pitfalls: string[]; practices: string[]; conversation: string; };
type Rhythm = { id: string; name: string; icon: string; frequency: string; description: string; howTo: string[]; verse: string; color: string; };
type HardQuestion = { question: string; ageRange: string; approach: string; sample: string; verse: string; };

const stages: Stage[] = [
  {
    age: "0–5",
    label: "Little Ones",
    emoji: "👶",
    color: "#EC4899",
    verse: "Train up a child in the way he should go; even when he is old he will not depart from it.",
    verseRef: "Proverbs 22:6",
    principles: [
      "Atmosphere matters more than curriculum. Young children absorb the spiritual temperature of the home.",
      "God-talk should be natural, woven into everyday moments rather than confined to special times.",
      "Physical touch and presence communicate love in the same way God's Spirit communicates with us."
    ],
    pitfalls: [
      "Over-moralizing: don't turn every moment into a lesson",
      "Using God primarily as behavior enforcement ('God doesn't like that')",
      "Skipping Bible stories because they're 'too violent' — children can handle narrative honestly told"
    ],
    practices: [
      "Nightly prayer ritual: thank God for 3 specific things that happened today",
      "Read one Bible story per week, slowly and with questions",
      "Show your child the church as people — introduce them to elderly members, international friends",
      "Sing hymns and worship songs at home naturally (bath time, car rides)"
    ],
    conversation: "At this age, conversations are primarily about wonder: 'Look at that butterfly — who made it?' 'How big do you think God is?' Plant seeds of awe."
  },
  {
    age: "6–12",
    label: "Elementary",
    emoji: "📖",
    color: GREEN,
    verse: "These commandments that I give you today are to be on your hearts. Impress them on your children.",
    verseRef: "Deuteronomy 6:6-7",
    principles: [
      "This is the prime window for character formation — habits of prayer, generosity, and service begun now tend to stick.",
      "Children at this age can handle honest answers to hard questions — and will respect you for not dismissing them.",
      "Their faith is beginning to become their own, not just borrowed from you."
    ],
    pitfalls: [
      "Overloading kids with church programs as a substitute for parental discipleship",
      "Avoiding questions like 'Why does God let bad things happen?' — these deserve honest engagement",
      "Legalism: turning faith into a rule system rather than a relationship"
    ],
    practices: [
      "Simple family devotional 3x per week — 10 minutes max at this age",
      "Let them see you reading your Bible personally, not just performing faith",
      "Serve together: food bank, visiting a grandparent, prayer for a sick neighbor",
      "Read a chapter of a kids' devotional (Jesus Storybook Bible, Long Story Short) together"
    ],
    conversation: "'I don't know' is a valid and faith-building answer. 'Let's find out together' is even better. Modeling intellectual humility before God teaches more than having all the answers."
  },
  {
    age: "13–17",
    label: "Teenagers",
    emoji: "🧠",
    color: PURPLE,
    verse: "Don't let anyone look down on you because you are young, but set an example for the believers.",
    verseRef: "1 Timothy 4:12",
    principles: [
      "The relationship is the prerequisite for influence. If they won't talk to you, nothing else works.",
      "Teenagers are looking for faith that makes sense, not just faith that is performed. They smell hypocrisy instantly.",
      "Their doubts are not a sign of failure — they're a sign of intellectual development. Engage the doubts."
    ],
    pitfalls: [
      "Parenting primarily through restriction rather than vision",
      "Making faith about behavior modification instead of encounter with God",
      "Avoiding their real questions about sex, death, suffering, and doubt"
    ],
    practices: [
      "Weekly one-on-one time (coffee, drive, walk) — no agenda, just presence",
      "Read an apologetics book together (Mere Christianity, Case for Christ for teens)",
      "Give them ownership: let them choose where to serve, what to read",
      "Pray for them specifically and let them hear it — be concrete about what you're asking God"
    ],
    conversation: "When they doubt: 'I'm glad you're asking that — it means you're thinking. What made you start questioning it?' Curiosity, not defensiveness, keeps the door open."
  },
  {
    age: "18+",
    label: "Adult Children",
    emoji: "🕊️",
    color: "#10B981",
    verse: "And he arose and came to his father. But when he was yet a great way off, his father saw him, and had compassion, and ran, and fell on his neck, and kissed him.",
    verseRef: "Luke 15:20",
    principles: [
      "Your role has shifted from authority to influence. The relationship is now peer-to-peer.",
      "Pray more, lecture less. The Holy Spirit's job is conviction — yours is love.",
      "Be the safest, warmest place they can return to, especially if they've walked away from faith."
    ],
    pitfalls: [
      "Using every gathering as an opportunity to address their spiritual state",
      "Withdrawing love or relationship when they make choices you disagree with",
      "Comparing them to their siblings or other people's children"
    ],
    practices: [
      "Tell them specifically what you're praying for — and keep praying",
      "Invite without pressuring: 'We'd love for you to come to church on Christmas — no pressure at all'",
      "Celebrate the good in them regardless of their faith status",
      "Share your own struggles honestly — they need to know faith isn't perfect performance"
    ],
    conversation: "The prodigal father didn't chase or lecture — he watched, waited, and ran when he saw his child returning. Your love is the most powerful apologetic you have."
  }
];

const rhythms: Rhythm[] = [
  {
    id: "table",
    name: "The Family Table",
    icon: "🍽️",
    frequency: "Daily",
    color: "#F59E0B",
    description: "Shared meals are one of the most underrated discipleship tools. Jesus did much of his most important teaching at table.",
    howTo: [
      "Protect the meal from screens — present and attentive",
      "Open with a simple blessing — rotate who prays",
      "Ask a 'High/Low' question: best and worst thing about today",
      "Occasionally read a short Scripture or quote before eating",
      "Let conversation linger — don't rush to clear dishes"
    ],
    verse: "Luke 22:14-20"
  },
  {
    id: "sabbath",
    name: "Family Sabbath",
    icon: "🌅",
    frequency: "Weekly",
    color: GREEN,
    description: "One day a week to stop, rest, play, and worship together. This counter-cultural practice forms children's understanding of time and God's provision.",
    howTo: [
      "Agree as a family on one day (Friday sunset to Saturday, or Sunday)",
      "No homework, no work email, no errands — model the rest",
      "Cook a special meal together as a ritual that marks the day",
      "Do something delightful: nature walk, board games, creative project",
      "Close the Sabbath with a simple prayer of gratitude"
    ],
    verse: "Exodus 20:8-10"
  },
  {
    id: "prayer",
    name: "Bedtime Prayer",
    icon: "🙏",
    frequency: "Daily",
    color: PURPLE,
    description: "The nightly prayer is one of the most durable habits you can establish. Children who are prayed over consistently develop a natural prayer life.",
    howTo: [
      "Be present — sit on the bed, not the doorway",
      "Ask: 'What do you want to thank God for? What do you need help with?'",
      "Pray specifically for their concerns — school friends, fears, events",
      "Keep it short for young children; let it lengthen naturally as they grow",
      "On hard nights, pray Psalm 23 or the Lord's Prayer together"
    ],
    verse: "Psalm 4:8"
  },
  {
    id: "service",
    name: "Family Service",
    icon: "🤝",
    frequency: "Monthly",
    color: "#3B82F6",
    description: "Serving together as a family forms children's identity as people who give, not just receive. It counters consumer Christianity at the root.",
    howTo: [
      "Choose one monthly service act as a family — food pantry, neighbor help, church cleanup",
      "Let children lead as much as possible — they carry more when they lead",
      "Debrief afterward: 'What did you notice? How did that feel?'",
      "Connect it explicitly to faith: 'This is what Jesus did'",
      "Consider adopting a recurring cause together across years"
    ],
    verse: "Matthew 20:28"
  },
  {
    id: "devotional",
    name: "Family Devotional",
    icon: "📖",
    frequency: "3x/week",
    color: "#EC4899",
    description: "Not a lecture but a conversation — short, regular, Scripture-anchored time together that builds a shared spiritual vocabulary.",
    howTo: [
      "Keep it to 10-15 minutes maximum",
      "Use a resource: Jesus Storybook Bible (ages 3-10), Long Story Short (ages 6-14)",
      "Ask open questions rather than quiz questions",
      "Make it cozy: candles, hot chocolate — ritual matters",
      "If you miss days, just start again without guilt"
    ],
    verse: "Deuteronomy 6:7"
  },
  {
    id: "advent",
    name: "Seasonal Celebrations",
    icon: "🕯️",
    frequency: "Seasonal",
    color: "#EF4444",
    description: "Advent, Lent, Easter, and Pentecost give the family year a theological rhythm. These seasons teach the whole gospel story through the body.",
    howTo: [
      "Advent: use an Advent wreath and devotional (The Advent Jesse Tree)",
      "Lent: family fast from something, add something (prayer, service, giving)",
      "Easter: make Resurrection Sunday a celebration, not just a church obligation",
      "Pentecost: celebrate the Spirit — less common but deeply formative",
      "Create family traditions for each season that become anticipated rituals"
    ],
    verse: "1 Corinthians 11:26"
  }
];

const hardQuestions: HardQuestion[] = [
  {
    question: "Why do people die?",
    ageRange: "Ages 3–8",
    approach: "Use honest, simple language. Don't soften death with euphemisms ('went to sleep') — this creates fear and confusion. Affirm grief as right.",
    sample: "'All living things die someday — that's part of how God made the world after sin entered it. But Jesus promised that people who love him will live with him after they die — it's like going to the most wonderful home there is.'",
    verse: "John 11:25-26"
  },
  {
    question: "Did God really create everything in 6 days?",
    ageRange: "Ages 9–14",
    approach: "Present the range of Christian views honestly. Don't frame it as faith vs. science — many sincere Christians hold different views on Genesis 1. What's not negotiable: God created, creation is good, and humans are made in God's image.",
    sample: "'Christians have actually disagreed about this for centuries. Some think it's six literal days, others think the 'days' represent longer periods, others see Genesis 1 as poetry that teaches us who God is rather than exactly how he did it. What all Christians agree on is: God made everything, and it's good.'",
    verse: "Genesis 1:1"
  },
  {
    question: "Why do bad things happen to good people?",
    ageRange: "Ages 8–15",
    approach: "Don't rush to answers. Sit with the question first. Acknowledge that it's genuinely hard. Then introduce the ideas slowly: free will, a fallen world, God entering suffering through Jesus.",
    sample: "'That is one of the hardest questions there is, and some of the smartest people in history have wrestled with it. Here's what I believe: God gave people freedom, and sometimes people use that freedom to hurt others. And God himself came into our pain through Jesus — he didn't stay distant from it.'",
    verse: "Romans 8:18-19"
  },
  {
    question: "What happens to people who never hear about Jesus?",
    ageRange: "Ages 10–17",
    approach: "Be honest about theological tension. Don't give a glib answer. Point to God's justice and mercy, and to our responsibility.",
    sample: "'That's a question Christians have genuinely disagreed on. What I'm confident of is that God is perfectly fair and perfectly merciful — he knows every person's heart. The Bible says he judges people based on what they know. And what we know is that we've heard — which means we're responsible for what we do with it.'",
    verse: "Romans 2:14-16"
  },
  {
    question: "Is it wrong to be gay?",
    ageRange: "Ages 13+",
    approach: "This requires pastoral sensitivity. Affirm the person's worth unconditionally. Be honest about what you believe and why while holding it with humility. Emphasize that people matter more than positions.",
    sample: "'I want to be honest with you: Christians disagree on this, and I believe the Bible teaches that marriage is between a man and woman. But I also want you to know this: your worth to God and to me has nothing to do with this question. I love you completely regardless of what you're figuring out.'",
    verse: "John 13:34-35"
  },
  {
    question: "I don't think I believe in God anymore.",
    ageRange: "Ages 13+",
    approach: "The absolute worst thing to do: panic, threaten, or lecture. The best response: curiosity, openness, and relentless relationship. Doubt is not the enemy of faith — suppression of doubt is.",
    sample: "'Thank you for telling me. That took courage. Tell me more — what's making you feel that way? What would you need to see or understand for faith to make sense again?' [Then listen far more than you speak.]",
    verse: "Jude 1:22"
  }
];

export default function ParentingPage() {
  const [tab, setTab] = useState<"stages" | "rhythms" | "questions" | "prayer">("stages");
  const [selectedStage, setSelectedStage] = useState<Stage | null>(null);
  const [expandedRhythm, setExpandedRhythm] = useState<string | null>(null);
  const [expandedQ, setExpandedQ] = useState<number | null>(null);
  const [savedRhythms, setSavedRhythms] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_parenting_rhythms"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [prayerNote, setPrayerNote] = useState(() => {
    try { return localStorage.getItem("vine_parenting_prayer") || ""; } catch { return ""; }
  });
  const [prayerSaved, setPrayerSaved] = useState(false);

  useEffect(() => {
    try { localStorage.setItem("vine_parenting_rhythms", JSON.stringify([...savedRhythms])); } catch {}
  }, [savedRhythms]);

  const toggleRhythm = (id: string) => setSavedRhythms(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const savePrayer = () => {
    try { localStorage.setItem("vine_parenting_prayer", prayerNote); } catch {}
    setPrayerSaved(true);
    setTimeout(() => setPrayerSaved(false), 2000);
  };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "inherit" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(236,72,153,0.12)", border: "1px solid rgba(236,72,153,0.25)", borderRadius: 20, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ fontSize: 16 }}>👨‍👩‍👧‍👦</span>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "#EC4899", textTransform: "uppercase" }}>Christian Parenting</span>
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, lineHeight: 1.1 }}>
            Raise Them{" "}
            <span style={{ background: "linear-gradient(135deg, #EC4899, #00FF88)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              in the Faith
            </span>
          </h1>
          <p style={{ color: MUTED, fontSize: 17, maxWidth: 580, margin: "0 auto 24px" }}>
            No parent is perfect. But Scripture gives us principles, patterns, and a God who is with us in the hardest moments of raising children. Practical wisdom for every age.
          </p>
          <div style={{ background: "rgba(0,255,136,0.06)", border: "1px solid rgba(0,255,136,0.18)", borderRadius: 12, padding: "14px 20px", maxWidth: 540, margin: "0 auto" }}>
            <p style={{ fontSize: 14, color: "#00CC66", fontStyle: "italic", margin: 0 }}>
              "Hear, O Israel: The Lord our God, the Lord is one. Love the Lord your God with all your heart... Impress them on your children. Talk about them when you sit at home and when you walk along the road."
            </p>
            <p style={{ fontSize: 12, color: MUTED, marginTop: 4, marginBottom: 0 }}>— Deuteronomy 6:4-7</p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, borderBottom: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {[
            { id: "stages", label: "🌱 By Age & Stage" },
            { id: "rhythms", label: "🔄 Family Rhythms" },
            { id: "questions", label: "❓ Hard Questions" },
            { id: "prayer", label: "🙏 Prayer for Your Child" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id as typeof tab)}
              style={{ padding: "10px 16px", borderRadius: "10px 10px 0 0", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13, background: tab === t.id ? CARD : "transparent", color: tab === t.id ? TEXT : MUTED, borderBottom: tab === t.id ? `2px solid ${GREEN}` : "2px solid transparent" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* STAGES TAB */}
        {tab === "stages" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>Each stage requires a different approach. What works with a 5-year-old will not work with a teenager. Wisdom means adjusting the approach while holding the goal constant.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14, marginBottom: 24 }}>
              {stages.map(s => (
                <div key={s.age} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "20px", cursor: "pointer" }}
                  onClick={() => setSelectedStage(s)}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <span style={{ fontSize: 28 }}>{s.emoji}</span>
                    <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: `${s.color}15`, color: s.color, fontWeight: 700 }}>Ages {s.age}</span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 8px", color: s.color }}>{s.label}</h3>
                  <p style={{ fontSize: 12, color: "#A0A0C0", margin: "0 0 12px", fontStyle: "italic" }}>"{s.verse.slice(0, 60)}..."</p>
                  <button style={{ width: "100%", padding: "8px", borderRadius: 10, border: `1px solid ${s.color}30`, background: `${s.color}08`, color: s.color, cursor: "pointer", fontSize: 12, fontWeight: 700 }}>
                    See Guide →
                  </button>
                </div>
              ))}
            </div>

            {selectedStage && (
              <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
                onClick={() => setSelectedStage(null)}>
                <div style={{ background: CARD, border: `1px solid ${selectedStage.color}40`, borderRadius: 20, padding: "32px", maxWidth: 600, width: "100%", maxHeight: "90vh", overflowY: "auto" }}
                  onClick={e => e.stopPropagation()}>
                  <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 16 }}>
                    <span style={{ fontSize: 36 }}>{selectedStage.emoji}</span>
                    <div>
                      <h2 style={{ fontSize: 22, fontWeight: 900, margin: 0, color: selectedStage.color }}>{selectedStage.label}</h2>
                      <p style={{ fontSize: 13, color: MUTED, margin: "4px 0 0" }}>Ages {selectedStage.age}</p>
                    </div>
                  </div>

                  <div style={{ background: `${selectedStage.color}08`, border: `1px solid ${selectedStage.color}30`, borderRadius: 12, padding: "16px", marginBottom: 20 }}>
                    <p style={{ fontSize: 13, fontStyle: "italic", color: "#C0C0D8", lineHeight: 1.7, margin: "0 0 6px" }}>"{selectedStage.verse}"</p>
                    <p style={{ fontSize: 12, fontWeight: 700, color: selectedStage.color, margin: 0 }}>— {selectedStage.verseRef}</p>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontSize: 13, fontWeight: 800, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Core Principles</h4>
                    {selectedStage.principles.map((p, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                        <span style={{ color: GREEN, fontWeight: 900 }}>→</span>
                        <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>{p}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontSize: 13, fontWeight: 800, color: "#EF4444", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Common Pitfalls</h4>
                    {selectedStage.pitfalls.map((p, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                        <span style={{ color: "#EF4444" }}>✗</span>
                        <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>{p}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontSize: 13, fontWeight: 800, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Practices to Try</h4>
                    {selectedStage.practices.map((p, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                        <span style={{ color: PURPLE }}>•</span>
                        <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>{p}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: "16px", marginBottom: 20 }}>
                    <p style={{ fontSize: 12, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>On Conversations</p>
                    <p style={{ fontSize: 14, color: "#A0A0C0", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{selectedStage.conversation}</p>
                  </div>

                  <button onClick={() => setSelectedStage(null)}
                    style={{ width: "100%", padding: "12px", borderRadius: 12, border: "none", background: "rgba(255,255,255,0.08)", color: MUTED, cursor: "pointer", fontSize: 14, fontWeight: 700 }}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* RHYTHMS TAB */}
        {tab === "rhythms" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              The most formative thing you can do as a Christian parent isn't a curriculum — it's repeated, shared practices that give your family a spiritual rhythm. These are the patterns that stick across generations.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {rhythms.map(r => {
                const isExp = expandedRhythm === r.id;
                return (
                  <div key={r.id} style={{ background: CARD, border: `1px solid ${isExp ? r.color + "40" : BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                    <div style={{ padding: "18px 22px" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                        <div style={{ display: "flex", gap: 14, flex: 1 }}>
                          <span style={{ fontSize: 26, flexShrink: 0 }}>{r.icon}</span>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                              <h3 style={{ fontSize: 16, fontWeight: 800, margin: 0 }}>{r.name}</h3>
                              <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: `${r.color}15`, color: r.color, fontWeight: 700 }}>{r.frequency}</span>
                            </div>
                            <p style={{ fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.6 }}>{r.description}</p>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                          <button onClick={() => toggleRhythm(r.id)}
                            style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${savedRhythms.has(r.id) ? PURPLE : BORDER}`, background: savedRhythms.has(r.id) ? "rgba(107,79,187,0.15)" : "transparent", cursor: "pointer", fontSize: 13, color: savedRhythms.has(r.id) ? PURPLE : MUTED }}>
                            {savedRhythms.has(r.id) ? "🔖" : "📌"}
                          </button>
                          <button onClick={() => setExpandedRhythm(isExp ? null : r.id)}
                            style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${r.color}40`, background: `${r.color}10`, color: r.color, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                            {isExp ? "Close" : "How-To"}
                          </button>
                        </div>
                      </div>
                    </div>
                    {isExp && (
                      <div style={{ borderTop: `1px solid ${BORDER}`, padding: "20px 22px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                          {r.howTo.map((step, i) => (
                            <div key={i} style={{ display: "flex", gap: 10 }}>
                              <span style={{ width: 20, height: 20, borderRadius: "50%", background: `${r.color}20`, color: r.color, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>{i + 1}</span>
                              <p style={{ fontSize: 14, color: "#C0C0D8", margin: 0, lineHeight: 1.7 }}>{step}</p>
                            </div>
                          ))}
                        </div>
                        <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(0,255,136,0.08)", color: GREEN, fontWeight: 600 }}>📖 {r.verse}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* HARD QUESTIONS TAB */}
        {tab === "questions" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              Your children will ask the hardest questions about God, life, and death. Avoiding them doesn't make them go away — it trains kids to go elsewhere for answers. Here's how to engage honestly and well.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {hardQuestions.map((q, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${expandedQ === i ? PURPLE + "40" : BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <button onClick={() => setExpandedQ(expandedQ === i ? null : i)}
                    style={{ width: "100%", textAlign: "left", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 15, fontWeight: 700, color: TEXT, margin: "0 0 4px" }}>"{q.question}"</p>
                      <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: "rgba(107,79,187,0.1)", color: PURPLE, fontWeight: 700 }}>{q.ageRange}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 18 }}>{expandedQ === i ? "▾" : "▸"}</span>
                  </button>
                  {expandedQ === i && (
                    <div style={{ borderTop: `1px solid ${BORDER}`, padding: "20px 22px" }}>
                      <div style={{ marginBottom: 16 }}>
                        <h4 style={{ fontSize: 13, fontWeight: 800, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Approach</h4>
                        <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>{q.approach}</p>
                      </div>
                      <div style={{ background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.15)", borderRadius: 12, padding: "16px", marginBottom: 16 }}>
                        <h4 style={{ fontSize: 12, fontWeight: 800, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Sample Response</h4>
                        <p style={{ fontSize: 14, color: "#B0F0C0", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{q.sample}</p>
                      </div>
                      <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(0,255,136,0.08)", color: GREEN, fontWeight: 600 }}>📖 {q.verse}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PRAYER TAB */}
        {tab === "prayer" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              The most powerful thing you can do for your child is pray for them specifically and persistently. Use this space to write your prayers.
            </p>

            {/* Prayer prompts */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "24px", marginBottom: 20 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Prompts for Praying for Your Child</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
                {[
                  { icon: "❤️", prompt: "That they would encounter God personally, not just inherit your faith" },
                  { icon: "🧠", prompt: "For a mind that loves truth and isn't deceived" },
                  { icon: "👥", prompt: "For friendships that call them higher, not lower" },
                  { icon: "🛡️", prompt: "Protection from spiritual harm, abuse, addiction" },
                  { icon: "💪", prompt: "Courage when their faith costs them something" },
                  { icon: "🌱", prompt: "A sense of calling — what they were made to do and be" },
                  { icon: "🔓", prompt: "Freedom from anything that holds them captive" },
                  { icon: "💑", prompt: "A future spouse who loves God (if they marry)" },
                ].map(p => (
                  <div key={p.prompt} style={{ display: "flex", gap: 10, padding: "10px 14px", background: "rgba(255,255,255,0.02)", borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>{p.icon}</span>
                    <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.5 }}>{p.prompt}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prayer journal */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "24px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12 }}>Your Prayer Notes</h3>
              <p style={{ fontSize: 14, color: MUTED, marginBottom: 14 }}>Write specific prayers for your child — by name, for specific situations. Save them here.</p>
              <textarea value={prayerNote} onChange={e => setPrayerNote(e.target.value)}
                placeholder="Lord, for [child's name] today I pray..."
                rows={8}
                style={{ width: "100%", padding: "14px 16px", borderRadius: 12, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.03)", color: TEXT, fontSize: 14, resize: "none", outline: "none", lineHeight: 1.8, marginBottom: 12, boxSizing: "border-box" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontSize: 13, color: MUTED, margin: 0, fontStyle: "italic" }}>"The effective prayer of a righteous person can accomplish much." — James 5:16</p>
                <button onClick={savePrayer}
                  style={{ padding: "10px 22px", borderRadius: 10, border: "none", background: prayerSaved ? "rgba(0,255,136,0.15)" : `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, color: prayerSaved ? GREEN : BG, cursor: "pointer", fontSize: 14, fontWeight: 800 }}>
                  {prayerSaved ? "✓ Saved" : "Save Prayers"}
                </button>
              </div>
            </div>

            {/* Blessing */}
            <div style={{ marginTop: 24, background: `linear-gradient(135deg, rgba(236,72,153,0.06), rgba(0,255,136,0.06))`, border: "1px solid rgba(236,72,153,0.15)", borderRadius: 16, padding: "24px", textAlign: "center" }}>
              <p style={{ fontSize: 28, marginBottom: 12 }}>🙌</p>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>Speak Blessings Over Your Children</h3>
              <p style={{ fontSize: 14, color: MUTED, maxWidth: 440, margin: "0 auto 0", lineHeight: 1.7 }}>
                In Scripture, parents blessed their children verbally. Consider speaking this over your child regularly: "You are loved by God and by us. You are known. You have a purpose. You are not alone." The words we speak over our children become part of how they see themselves.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
