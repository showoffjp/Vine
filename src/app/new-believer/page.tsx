"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const FIRST_STEPS = [
  {
    n: 1,
    title: "Get Baptized",
    icon: "💧",
    color: "#3B82F6",
    why: "Baptism is the first act of public obedience for a new believer (Matthew 28:19, Acts 2:38). It is the outward declaration of an inward reality — you have died to your old life and been raised with Christ. It is not what saves you, but it is the first thing Jesus commanded after belief.",
    how: "Talk to your pastor or church about baptism. Most churches offer classes. Baptism is done in the presence of the community — it is public for a reason.",
  },
  {
    n: 2,
    title: "Join a Local Church",
    icon: "⛪",
    color: "#10B981",
    why: "The Christian life was never meant to be lived alone. The NT assumes Christians belong to local congregations — communities where they are known, cared for, taught, and held accountable. 'Don't give up meeting together, as some are in the habit of doing' (Hebrews 10:25).",
    how: "If you don't have a church, ask a Christian you respect where they attend. Try several, but commit to one. Look for expository preaching, genuine community, and the gospel at the center.",
  },
  {
    n: 3,
    title: "Start Reading the Bible",
    icon: "📖",
    color: "#F59E0B",
    why: "The Bible is how God speaks. Faith comes by hearing the word of Christ (Romans 10:17). Without regular Scripture reading, your faith will remain shallow — fed by inspiration and feeling rather than by the sustaining Word. Jesus quoted Scripture in every major challenge he faced.",
    how: "Start with the Gospel of John, then Romans. Read a chapter a day. Get a readable translation (ESV, NIV, CSB). Consider a reading plan — the Bible app has many. Don't start in Genesis if you're new — the whole Bible makes more sense after you know Jesus.",
  },
  {
    n: 4,
    title: "Develop a Prayer Life",
    icon: "🙏",
    color: PURPLE,
    why: "Prayer is the primary dialogue of the Christian life with God. Jesus assumed his followers would pray (Matthew 6:5 — 'when you pray,' not 'if you pray'). Prayer is not about technique — it is about relationship. Talk to God honestly about your life.",
    how: "Start with five minutes a day. Use the Lord's Prayer as a template (Matthew 6:9-13). Tell God what you're grateful for, what you need, and what you're sorry for. Listen as well as speak — silence matters.",
  },
  {
    n: 5,
    title: "Tell Someone",
    icon: "📢",
    color: "#EF4444",
    why: "Faith that is never spoken begins to weaken. 'Whoever acknowledges me before others, I will also acknowledge before my Father in heaven' (Matthew 10:32). Witness is not primarily a technique — it is a natural overflow of knowing someone worth knowing.",
    how: "Start with one person who already knows you. Share what changed, not a rehearsed presentation. Your story is the most powerful thing you have. You don't need to know all the answers — 'I found Jesus and everything changed' is enough to begin.",
  },
  {
    n: 6,
    title: "Find a Mentor",
    icon: "🧭",
    color: "#8B5CF6",
    why: "Every new believer benefits from someone further along the faith journey. 'Walk with the wise and become wise' (Proverbs 13:20). A mentor is not a professional — it is an older, more experienced Christian who is willing to meet with you and share their life.",
    how: "Ask your pastor for a recommendation. Look for someone whose character and faith you admire. Meet monthly. Ask questions. Be willing to be known.",
  },
];

const COMMON_QUESTIONS = [
  { q: "Do I have to be perfect now?", a: "No. Becoming a Christian does not mean instantaneous moral perfection — it means beginning a journey of transformation. Sanctification (becoming more like Christ) is a lifelong process. You will fail. The answer to failure is repentance and grace, not self-condemnation. Romans 8:1: 'There is now no condemnation for those who are in Christ Jesus.'" },
  { q: "What if I still doubt?", a: "Doubt is not the opposite of faith — certainty is not required for faithfulness. Even the disciples doubted (Matthew 28:17). Bring your doubts to God honestly, seek community, read honest thinkers who have wrestled with your questions, and keep showing up. Faith is not a feeling — it is a commitment renewed day by day." },
  { q: "Do I have to give up all my old friends?", a: "Not necessarily. Your relationships are one of the primary contexts in which your new faith becomes visible to others. Some relationships may change naturally as your values change. Some old friends may ask you what happened and give you the opportunity to share. Be patient with people, and be patient with yourself." },
  { q: "What about my old habits and sins?", a: "Change takes time. The Holy Spirit is at work in you, but transformation is usually gradual, not instantaneous. For serious addictions or habitual sins, seek help — pastoral care, accountability relationships, and in some cases professional counseling. Don't expect willpower alone to win — you need community and the means of grace." },
  { q: "Which church / denomination is right?", a: "Start with churches that hold the essentials of the faith (the Trinity, the incarnation, salvation by grace through faith, the authority of Scripture, the resurrection). Within those bounds, there is genuine diversity. Visit, pray, and choose a church where you can grow, be known, and be equipped to serve. Don't church-shop forever — commit." },
  { q: "Am I really saved if I still feel the same?", a: "Feelings are not the measure of salvation. Salvation is based on the promise of God, not your emotional state. That said, genuine conversion typically does produce change over time — new desires, new sorrow over sin, new love for God's people. If you've genuinely trusted Christ, you are genuinely saved. Trust the promise, not the feeling." },
];

const READING_PLAN = [
  { week: "Week 1-2", book: "Gospel of John", reason: "The most theologically rich portrait of Jesus. Written 'so that you may believe' (John 20:31)." },
  { week: "Week 3-4", book: "Romans", reason: "Paul's most systematic presentation of the gospel. Everything from sin to grace to the Christian life." },
  { week: "Week 5-6", book: "Psalms (selected)", reason: "The prayer book of the Bible. Learn how to talk to God through the full range of human experience." },
  { week: "Week 7-8", book: "Luke-Acts", reason: "The story of Jesus and the birth of the early church. How the gospel spread from Jerusalem to the world." },
  { week: "Week 9-10", book: "Ephesians + Colossians", reason: "Who you are in Christ. The riches of grace and the practical life of the church." },
  { week: "Week 11-12", book: "Genesis 1-12", reason: "The beginning — creation, fall, the first promise of redemption, and the call of Abraham." },
];

export default function NewBelieverPage() {
  const [activeTab, setActiveTab] = useState<"steps" | "questions" | "reading">("steps");
  const [completed, setCompleted] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_nb_steps"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });

  useEffect(() => { try { localStorage.setItem("vine_nb_steps", JSON.stringify([...completed])); } catch {} }, [completed]);

  const toggleStep = (n: number) => setCompleted(prev => {
    const next = new Set(prev);
    next.has(n) ? next.delete(n) : next.add(n);
    return next;
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌱</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>First Steps of Faith</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Welcome. You have made the most important decision of your life. Here are the first steps — practical, honest, and grounded in Scripture — for the journey ahead.
          </p>
        </div>

        {completed.size > 0 && (
          <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: 16, marginBottom: 20, textAlign: "center" }}>
            <span style={{ color: GREEN, fontWeight: 700, fontSize: 15 }}>{completed.size} of {FIRST_STEPS.length} first steps taken</span>
          </div>
        )}

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "steps" as const, label: "Six First Steps", icon: "🛠️" },
            { id: "questions" as const, label: "Common Questions", icon: "❓" },
            { id: "reading" as const, label: "Reading Plan", icon: "📖" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "steps" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {FIRST_STEPS.map(s => (
              <div key={s.n} style={{ background: CARD, border: `1px solid ${completed.has(s.n) ? s.color + "40" : BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${s.color}20`, border: `2px solid ${s.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{s.icon}</div>
                    <div>
                      <div style={{ color: s.color, fontWeight: 800, fontSize: 17 }}>Step {s.n}: {s.title}</div>
                    </div>
                  </div>
                  <button onClick={() => toggleStep(s.n)}
                    style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${completed.has(s.n) ? s.color + "50" : BORDER}`, background: completed.has(s.n) ? `${s.color}15` : "transparent", color: completed.has(s.n) ? s.color : MUTED, fontSize: 12, fontWeight: 700, cursor: "pointer", flexShrink: 0 }}>
                    {completed.has(s.n) ? "✓ Done" : "Mark Done"}
                  </button>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>WHY</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.why}</p>
                </div>
                <div style={{ background: `${s.color}10`, border: `1px solid ${s.color}25`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: s.color, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>HOW</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{s.how}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "questions" && (
          <div>
            {COMMON_QUESTIONS.map((q, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>"{q.q}"</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{q.a}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "reading" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                This 12-week plan covers the most essential parts of the Bible for a new believer — starting with the Gospels and working outward. One chapter per day is enough. The goal is consistency, not speed.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {READING_PLAN.map((r, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 80, flexShrink: 0 }}>
                    <div style={{ color: PURPLE, fontSize: 12, fontWeight: 700 }}>{r.week}</div>
                  </div>
                  <div>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{r.book}</div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.55, margin: 0 }}>{r.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
