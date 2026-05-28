"use client";

import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Method = {
  id: string; name: string; icon: string; description: string; color: string;
  steps: string[]; verse: string; goodFor: string; example: string;
};

type ConversationTip = {
  scenario: string; icon: string; tips: string[]; avoid: string;
};

type Story = {
  name: string; country: string; method: string; story: string; verse: string;
};

const methods: Method[] = [
  {
    id: "bridge",
    name: "The Bridge Illustration",
    icon: "🌉",
    description: "A simple visual metaphor showing the gap between humanity and God, bridged by the cross of Christ.",
    color: "#3B82F6",
    steps: [
      "Draw two cliffs on paper — one labeled 'God/Heaven,' one labeled 'Us/Earth.'",
      "Draw a chasm between them labeled 'Sin' — show the separation this creates.",
      "Ask: 'Have you ever felt far from God? The Bible says we all have this problem.'",
      "Quote Romans 3:23: 'All have sinned and fall short of the glory of God.'",
      "Draw a cross bridging the gap — explain that Jesus died to bridge this separation.",
      "Quote John 3:16: 'For God so loved the world that he gave his only Son…'",
      "Invite a response: 'Would you like to cross that bridge today?'"
    ],
    verse: "Romans 5:8",
    goodFor: "Visual learners, people who've never heard the Gospel, one-on-one conversations",
    example: "Carlos used this with a coworker over lunch. He sketched it on a napkin. By the end, his coworker said, 'I never knew God was the one reaching out to me — I always thought I had to earn it.'"
  },
  {
    id: "romans-road",
    name: "The Romans Road",
    icon: "🛣️",
    description: "A series of verses in Romans that trace the path from human sinfulness to salvation through Christ.",
    color: "#00FF88",
    steps: [
      "Start with the problem: Romans 3:23 — 'All have sinned and fall short.'",
      "Show the consequence: Romans 6:23a — 'The wages of sin is death.'",
      "Introduce the gift: Romans 6:23b — 'But the gift of God is eternal life in Christ.'",
      "Demonstrate God's love: Romans 5:8 — 'While we were still sinners, Christ died for us.'",
      "Explain the response: Romans 10:9 — 'If you declare with your mouth, Jesus is Lord…'",
      "Confirm the promise: Romans 10:13 — 'Everyone who calls on the name of the Lord will be saved.'",
      "Ask: 'Does this make sense? Is there anything stopping you from making this decision today?'"
    ],
    verse: "Romans 10:9-10",
    goodFor: "Scripture-based conversations, people who respect the Bible, structured thinkers",
    example: "Aisha shared this with her neighbor after they talked about death and what happens after. Walking through the verses together, her neighbor said, 'This is the first time the Gospel has ever felt logical to me.'"
  },
  {
    id: "four-spiritual-laws",
    name: "The Four Spiritual Laws",
    icon: "📋",
    description: "Developed by Bill Bright of Campus Crusade for Christ, this presents four principles that frame humanity's relationship with God.",
    color: "#6B4FBB",
    steps: [
      "Law 1: God loves you and has a wonderful plan for your life. (John 3:16, John 10:10)",
      "Law 2: Man is sinful and separated from God — he cannot know or experience God's love. (Romans 3:23, Romans 6:23)",
      "Law 3: Jesus Christ is God's only provision for man's sin. Through him you can know and experience God's love. (Romans 5:8, 1 Corinthians 15:3-6, John 14:6)",
      "Law 4: We must individually receive Jesus as Savior and Lord. (John 1:12, Ephesians 2:8-9, John 3:1-8)",
      "Present the two circles: self on the throne vs. Christ on the throne.",
      "Ask: 'Which circle best describes your life?' and 'Which circle would you like it to describe?'",
      "Invite them to pray — read a suggested prayer together if they're willing."
    ],
    verse: "John 3:16",
    goodFor: "Structured and methodical presentations, college campus outreach, follow-up conversations",
    example: "Pastor James uses this at the end of every one-on-one conversation. The 'two circles' diagram consistently prompts people to name exactly where they feel stuck — and opens the door to genuine response."
  },
  {
    id: "story",
    name: "Your Personal Testimony",
    icon: "💬",
    description: "Sharing your own before/after story — what life was like before Christ, how you came to faith, what changed. Every believer has this weapon.",
    color: "#F59E0B",
    steps: [
      "BEFORE: What was your life like before Christ? What were you searching for, struggling with, or missing?",
      "ENCOUNTER: How did you come to faith? Who told you? What was the turning point?",
      "AFTER: What changed? How is your life different now — not perfectly, but genuinely?",
      "Keep it to 3–5 minutes — brevity is a gift to your listener.",
      "Connect their situation: 'Does anything about my story resonate with where you are?'",
      "Transition: 'Has anyone ever explained how you can have that kind of relationship with God?'",
      "Practice your testimony aloud until it feels natural — not scripted, but fluid."
    ],
    verse: "Acts 26:2-23",
    goodFor: "Any conversation, especially with people who are skeptical of religion but open to genuine human experience",
    example: "Maria was nervous to share with her older sister — they'd both grown up in the same household. But she simply said, 'I used to feel completely alone even when surrounded by people. That changed.' Her sister asked, 'When did it change?'"
  },
  {
    id: "questions",
    name: "Asking Good Questions",
    icon: "❓",
    description: "Pioneered by Greg Koukl (Tactics), this approach uses thoughtful questions to create space for the Gospel without pressure or argument.",
    color: "#EC4899",
    steps: [
      "Question 1 — Understand their view: 'What do you mean by that?' (Avoid arguing with a misunderstood position.)",
      "Question 2 — Probe their basis: 'How did you come to that conclusion?' or 'What makes you think that's true?'",
      "Question 3 — Introduce tension: 'Have you ever considered that…?' followed by a gentle challenge.",
      "The Columbo method: ask questions rather than making declarations — you become a curious learner, not a debater.",
      "If they ask your view: share it briefly and clearly, without aggression.",
      "Plant seeds, don't force harvest: 'That's worth thinking about — I'd love to hear what you conclude.'",
      "Follow up: 'Can I send you something about this?'"
    ],
    verse: "Colossians 4:5-6",
    goodFor: "Skeptics, intellectual conversations, hostile or defensive people, long-term relationships",
    example: "David's atheist roommate was surprised when David asked, 'What would change your mind about God?' — not to trap him, but out of genuine curiosity. The question started a year-long conversation that eventually led to faith."
  },
  {
    id: "needs",
    name: "Meeting Felt Needs",
    icon: "🤝",
    description: "Jesus almost always began with a person's immediate need — physical, emotional, or social — before moving to spiritual invitation. This is the pattern of incarnational evangelism.",
    color: "#10B981",
    steps: [
      "Listen deeply: What is the person's pressing concern, pain, or longing?",
      "Address the need genuinely — not as a trick to get to the Gospel, but because Jesus cares about the whole person.",
      "Look for natural bridges: grief → resurrection hope; loneliness → community in Christ; guilt → forgiveness; meaninglessness → purpose.",
      "Share how your faith meets that need in your own life: 'When I was in that same place, I found that…'",
      "Offer to pray with them — prayer is both practical and a gentle Gospel declaration.",
      "Invite them to explore: 'There's a community of people who would love to walk with you — would you ever want to come?'",
      "Don't rush the harvest. Trust that meeting real needs with real love is itself a powerful witness."
    ],
    verse: "Matthew 9:35-36",
    goodFor: "Relationships over time, serving contexts (food banks, hospitals, disasters), people in crisis",
    example: "Kim spent three months helping her grieving colleague with childcare, meals, and just presence. When her colleague finally asked, 'Why do you keep doing this?' — the door to the Gospel opened naturally."
  }
];

const conversationTips: ConversationTip[] = [
  {
    scenario: "They say: 'I'm not religious.'",
    icon: "🙅",
    tips: [
      "Don't argue or debate — 'I understand. I'm not really 'religious' either in that sense.' (Jesus critiqued religious performance too.)",
      "Ask: 'What do you think of Jesus specifically — separate from organized religion?'",
      "Share that Christianity is about a relationship, not a religious system."
    ],
    avoid: "Don't immediately defend the Church or religion — that's a sidetrack."
  },
  {
    scenario: "They say: 'I believe in science, not God.'",
    icon: "🔬",
    tips: [
      "Validate their love of science — you share it. 'Me too. Many of the best scientists have been Christians.'",
      "Point to the fine-tuning argument or the origin of the universe — science raises the God question, it doesn't answer it.",
      "Name Francis Collins, John Polkinghorne, Roger Penrose — serious scientists who are theists."
    ],
    avoid: "Don't imply science and faith are at war — the question of God is beyond science's scope, not contradicted by it."
  },
  {
    scenario: "They say: 'There's so much evil in the world.'",
    icon: "😔",
    tips: [
      "Don't rush to answer the problem of evil intellectually — first, agree. 'You're right, and it bothers me too.'",
      "Ask: 'Where does your sense that the evil is really wrong come from?' (This is the moral argument).",
      "Share that Christianity enters suffering — God became flesh and suffered. He's not distant from pain."
    ],
    avoid: "Don't say 'God has a plan' immediately — it can feel dismissive of real pain."
  },
  {
    scenario: "They say: 'I used to be a Christian.'",
    icon: "🔄",
    tips: [
      "Listen first — what happened? Hurt? Doubt? Hypocrisy they witnessed?",
      "Validate the experience: 'That sounds really painful/confusing. I'm sorry.'",
      "Distinguish between the church's failures and Jesus himself — 'What do you think of Jesus now, separate from that experience?'"
    ],
    avoid: "Don't immediately try to re-convert them or argue against their past experience."
  }
];

const stories: Story[] = [
  {
    name: "Priya",
    country: "India",
    method: "Personal Testimony",
    story: "Priya grew up Hindu and had never seriously considered Christianity. Her coworker Sarah never argued with her — she just kept sharing small moments from her life. After a difficult miscarriage, Sarah's honesty about her own grief and faith was what broke through. Priya asked, 'How are you so peaceful when everything is falling apart?' The conversation that followed lasted two hours.",
    verse: "1 Peter 3:15"
  },
  {
    name: "Marcus",
    country: "UK",
    method: "Questions Approach",
    story: "Marcus was a committed atheist who loved debating. He'd demolished every Christian he'd met in arguments. Until he met James, who never argued back — just asked questions. 'What would change your mind?' 'Have you ever seriously read the resurrection arguments?' After 18 months, Marcus said it wasn't any single argument — it was the persistence of the questions he couldn't shake.",
    verse: "Acts 17:22-23"
  },
  {
    name: "Sofia",
    country: "Brazil",
    method: "Meeting Felt Needs",
    story: "Sofia's church opened a food pantry in a neighborhood of São Paulo. They never preached at people who came — they just served. Over months, a woman named Beatriz kept coming. One day she asked why they did it. 'Because God loves you — and we want to.' Beatriz came to faith two weeks later. She now runs the pantry.",
    verse: "Matthew 5:16"
  },
  {
    name: "David",
    country: "USA",
    method: "Bridge Illustration",
    story: "David had been carrying guilt from a past he couldn't shake. His roommate drew the bridge on a whiteboard one night at 2am. 'I'd never seen it that way,' David said later. 'I thought I had to fix myself before God would accept me. The diagram showed me it works the other way.' He prayed that night for the first time in a decade.",
    verse: "Romans 5:8"
  }
];

const fears = [
  { fear: "What if I say something wrong?", answer: "Your role is to plant seeds, not to convert. Only God changes hearts. You can't mess up a divine appointment by being imperfect." },
  { fear: "What if they ask a question I can't answer?", answer: "Say 'I don't know — that's a great question. Can I look into it and get back to you?' Honesty is more persuasive than false confidence." },
  { fear: "I don't want to ruin the relationship.", answer: "Sharing what you genuinely believe is loving, not damaging. If you were dying of cancer and your friend found a cure, sharing it would be loving, not rude." },
  { fear: "I'm not a good enough Christian to share.", answer: "The Gospel is 'I found something I needed too' — not 'I've arrived.' Your weakness is actually more relatable than perfection." },
  { fear: "I don't know the Bible well enough.", answer: "You need one verse (Romans 3:23), one truth (Jesus died for sin), and one story (your own). That's it. Start there." },
];

export default function EvangelismPage() {
  const [tab, setTab] = useState<"methods" | "conversations" | "fears" | "stories">("methods");
  const [expandedMethod, setExpandedMethod] = useState<string | null>(null);
  const [expandedFear, setExpandedFear] = useState<number | null>(null);
  const [practicedMethods, setPracticedMethods] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_evangelism_practiced"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [savedMethods, setSavedMethods] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_evangelism_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  useEffect(() => {
    try { localStorage.setItem("vine_evangelism_practiced", JSON.stringify([...practicedMethods])); } catch {}
  }, [practicedMethods]);
  useEffect(() => {
    try { localStorage.setItem("vine_evangelism_saved", JSON.stringify([...savedMethods])); } catch {}
  }, [savedMethods]);

  const togglePracticed = (id: string) => setPracticedMethods(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const toggleSaved = (id: string) => setSavedMethods(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "inherit" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.25)", borderRadius: 20, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ fontSize: 16 }}>🌱</span>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: GREEN, textTransform: "uppercase" }}>Evangelism</span>
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, lineHeight: 1.1 }}>
            Sharing Your Faith{" "}
            <span style={{ background: `linear-gradient(135deg, ${GREEN}, #3B82F6)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Naturally
            </span>
          </h1>
          <p style={{ color: MUTED, fontSize: 17, marginBottom: 20, maxWidth: 560, margin: "0 auto 20px" }}>
            Every believer is called to share good news — not by arguing people into the Kingdom, but by loving them there. Practical methods, real conversations, and stories from around the world.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, maxWidth: 500, margin: "0 auto" }}>
            {[
              { v: practicedMethods.size, label: "Methods Practiced", color: GREEN },
              { v: savedMethods.size, label: "Saved", color: PURPLE },
              { v: methods.length, label: "Total Methods", color: "#3B82F6" },
            ].map(s => (
              <div key={s.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "12px 8px", textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: s.color }}>{s.v}</div>
                <div style={{ fontSize: 11, color: MUTED }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, borderBottom: `1px solid ${BORDER}` }}>
          {[
            { id: "methods", label: "🛠️ Methods" },
            { id: "conversations", label: "💬 Conversations" },
            { id: "fears", label: "😰 Common Fears" },
            { id: "stories", label: "🌍 Stories" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id as typeof tab)}
              style={{ padding: "10px 18px", borderRadius: "10px 10px 0 0", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13, background: tab === t.id ? CARD : "transparent", color: tab === t.id ? TEXT : MUTED, borderBottom: tab === t.id ? `2px solid ${GREEN}` : "2px solid transparent" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* METHODS TAB */}
        {tab === "methods" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {methods.map(m => {
              const isExp = expandedMethod === m.id;
              return (
                <div key={m.id} style={{ background: CARD, border: `1px solid ${isExp ? m.color + "40" : BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <div style={{ padding: "20px 24px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                      <div style={{ display: "flex", gap: 14, flex: 1 }}>
                        <span style={{ fontSize: 28, flexShrink: 0 }}>{m.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6, flexWrap: "wrap" }}>
                            <h3 style={{ fontSize: 17, fontWeight: 800, margin: 0, color: TEXT }}>{m.name}</h3>
                            {practicedMethods.has(m.id) && <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: "rgba(0,255,136,0.1)", color: GREEN, fontWeight: 700 }}>✓ Practiced</span>}
                          </div>
                          <p style={{ fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.6 }}>{m.description}</p>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                        <button onClick={() => toggleSaved(m.id)}
                          style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${savedMethods.has(m.id) ? PURPLE : BORDER}`, background: savedMethods.has(m.id) ? "rgba(107,79,187,0.15)" : "transparent", cursor: "pointer", fontSize: 14, color: savedMethods.has(m.id) ? PURPLE : MUTED }}>
                          {savedMethods.has(m.id) ? "🔖" : "📌"}
                        </button>
                        <button onClick={() => setExpandedMethod(isExp ? null : m.id)}
                          style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${m.color}40`, background: `${m.color}10`, color: m.color, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                          {isExp ? "Close" : "Learn"}
                        </button>
                      </div>
                    </div>
                  </div>

                  {isExp && (
                    <div style={{ borderTop: `1px solid ${BORDER}`, padding: "24px" }}>
                      {/* Steps */}
                      <h4 style={{ fontSize: 13, fontWeight: 800, color: m.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>Step-by-Step Guide</h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                        {m.steps.map((step, i) => (
                          <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                            <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${m.color}20`, border: `1px solid ${m.color}40`, color: m.color, fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                            <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>{step}</p>
                          </div>
                        ))}
                      </div>

                      {/* Good For */}
                      <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: "14px 16px", marginBottom: 16 }}>
                        <p style={{ fontSize: 12, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Best For</p>
                        <p style={{ fontSize: 13, color: "#C0C0D8", margin: 0 }}>{m.goodFor}</p>
                      </div>

                      {/* Example */}
                      <div style={{ background: "rgba(0,255,136,0.04)", borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${m.color}`, marginBottom: 20 }}>
                        <p style={{ fontSize: 12, fontWeight: 800, color: m.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Real Example</p>
                        <p style={{ fontSize: 13, color: "#B0D0B0", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{m.example}</p>
                      </div>

                      {/* Footer */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(0,255,136,0.08)", color: GREEN, fontWeight: 600 }}>📖 {m.verse}</span>
                        <button onClick={() => togglePracticed(m.id)}
                          style={{ padding: "8px 18px", borderRadius: 10, border: `1px solid ${practicedMethods.has(m.id) ? GREEN : BORDER}`, background: practicedMethods.has(m.id) ? "rgba(0,255,136,0.1)" : "transparent", color: practicedMethods.has(m.id) ? GREEN : MUTED, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                          {practicedMethods.has(m.id) ? "✓ Practiced" : "Mark as Practiced"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* CONVERSATIONS TAB */}
        {tab === "conversations" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              Practical responses to the situations you'll actually face. Each scenario includes what to say, what to avoid, and how to keep the door open.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {conversationTips.map((tip, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "20px 24px" }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
                    <span style={{ fontSize: 24 }}>{tip.icon}</span>
                    <h3 style={{ fontSize: 16, fontWeight: 800, margin: 0, color: "#EF4444" }}>{tip.scenario}</h3>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                    {tip.tips.map((t, j) => (
                      <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: GREEN, fontWeight: 900, fontSize: 14, flexShrink: 0, marginTop: 2 }}>✓</span>
                        <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.6, margin: 0 }}>{t}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 10, padding: "12px 16px" }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: "#EF4444" }}>⚠ Avoid: </span>
                    <span style={{ fontSize: 13, color: "#D08080" }}>{tip.avoid}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Principle */}
            <div style={{ marginTop: 28, background: `linear-gradient(135deg, rgba(0,255,136,0.06), rgba(107,79,187,0.06))`, border: `1px solid rgba(0,255,136,0.2)`, borderRadius: 16, padding: "24px" }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>The 3-Minute Rule</h3>
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 0 }}>
                In any spiritual conversation, spend the first 3 minutes listening before you say anything about your faith. Ask one genuine question about them. People need to feel heard before they can hear — and a person who feels genuinely understood is ten times more likely to stay in the conversation.
              </p>
            </div>
          </div>
        )}

        {/* FEARS TAB */}
        {tab === "fears" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              Every believer has fears about sharing their faith. These are the most common ones — and why they don't have to stop you.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {fears.map((f, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${expandedFear === i ? GREEN + "40" : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <button onClick={() => setExpandedFear(expandedFear === i ? null : i)}
                    style={{ width: "100%", textAlign: "left", padding: "18px 24px", background: "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <span style={{ fontSize: 20 }}>😰</span>
                      <span style={{ fontSize: 15, fontWeight: 700, color: TEXT }}>{f.fear}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 18 }}>{expandedFear === i ? "▾" : "▸"}</span>
                  </button>
                  {expandedFear === i && (
                    <div style={{ padding: "0 24px 20px", borderTop: `1px solid ${BORDER}`, paddingTop: 16 }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: GREEN, fontWeight: 900, fontSize: 18, flexShrink: 0 }}>→</span>
                        <p style={{ fontSize: 15, color: "#B0F0C0", lineHeight: 1.8, margin: 0 }}>{f.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div style={{ marginTop: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "28px 24px", textAlign: "center" }}>
              <p style={{ fontSize: 28, marginBottom: 12 }}>🙏</p>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>Begin with Prayer</h3>
              <p style={{ fontSize: 14, color: MUTED, maxWidth: 400, margin: "0 auto 16px", lineHeight: 1.7 }}>
                The most powerful preparation for sharing your faith is praying for the specific people in your life. Write their names in your prayer journal and ask God to open doors.
              </p>
              <a href="/prayer-journal" style={{ display: "inline-block", padding: "12px 24px", borderRadius: 12, background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, color: BG, fontWeight: 800, fontSize: 13, textDecoration: "none" }}>
                Open Prayer Journal →
              </a>
            </div>
          </div>
        )}

        {/* STORIES TAB */}
        {tab === "stories" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              Real stories from real people who shared their faith — from different cultures, contexts, and methods.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {stories.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "20px", cursor: "pointer" }}
                  onClick={() => setSelectedStory(s)}>
                  <div style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "center" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900, color: BG, flexShrink: 0 }}>{s.name[0]}</div>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 800, margin: 0 }}>{s.name}</h3>
                      <p style={{ fontSize: 12, color: MUTED, margin: "2px 0 0" }}>📍 {s.country}</p>
                    </div>
                  </div>
                  <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: PURPLE, fontWeight: 700, display: "inline-block", marginBottom: 12 }}>{s.method}</span>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, marginBottom: 12 }}>{s.story.slice(0, 100)}...</p>
                  <span style={{ fontSize: 12, color: GREEN, fontWeight: 600 }}>📖 {s.verse}</span>
                </div>
              ))}
            </div>

            {selectedStory && (
              <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
                onClick={() => setSelectedStory(null)}>
                <div style={{ background: CARD, border: `1px solid rgba(0,255,136,0.3)`, borderRadius: 20, padding: "32px", maxWidth: 520, width: "100%", maxHeight: "90vh", overflowY: "auto" }}
                  onClick={e => e.stopPropagation()}>
                  <div style={{ display: "flex", gap: 12, marginBottom: 20, alignItems: "center" }}>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 900, color: BG }}>{selectedStory.name[0]}</div>
                    <div>
                      <h2 style={{ fontSize: 20, fontWeight: 900, margin: 0 }}>{selectedStory.name}</h2>
                      <p style={{ fontSize: 13, color: MUTED, margin: "4px 0 0" }}>📍 {selectedStory.country} · {selectedStory.method}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 20 }}>{selectedStory.story}</p>
                  <div style={{ background: "rgba(0,255,136,0.06)", border: "1px solid rgba(0,255,136,0.2)", borderRadius: 10, padding: "12px 16px", marginBottom: 20 }}>
                    <span style={{ fontSize: 13, color: GREEN, fontWeight: 700 }}>📖 {selectedStory.verse}</span>
                  </div>
                  <button onClick={() => setSelectedStory(null)}
                    style={{ width: "100%", padding: "12px", borderRadius: 12, border: "none", background: "rgba(255,255,255,0.08)", color: MUTED, cursor: "pointer", fontSize: 14, fontWeight: 700 }}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
