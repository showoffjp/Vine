"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "reasons" | "voices" | "practices";

const THEOLOGY = [
  { title: "God Hears Every Prayer", verse: "Psalm 34:15", body: "The eyes of the LORD are on the righteous and his ears are attentive to their cry (Psalm 34:15). The starting point for understanding unanswered prayer is that no prayer is unheard. The question is not whether God hears but how he responds — and the answers are more complex than yes or no. Every prayer receives a response; it is not always the response we expected or wanted." },
  { title: "Three Possible Answers", verse: "2 Corinthians 12:8-9", body: "Paul prayed three times for the thorn to be removed. The answer was not yes or even wait — it was no, with a reason: 'My grace is sufficient for you, for my power is made perfect in weakness' (2 Corinthians 12:9). The three classic answers: yes (granted), no (the answer is the refusal), and wait (the timing is not yet). All three are real answers. The no is often the most theologically significant." },
  { title: "God's Ways Are Higher", verse: "Isaiah 55:8-9", body: "'My thoughts are not your thoughts, neither are your ways my ways,' declares the LORD. 'As the heavens are higher than the earth, so are my ways higher than your ways and my thoughts than your thoughts' (Isaiah 55:8-9). Unanswered prayer often involves a perspective gap — God sees what we cannot see, weighs what we have not weighed, and pursues a good we have not imagined. This is not a pious platitude; it is the actual explanation for why the sovereign God withholds what we ask for." },
  { title: "The Role of Faith and Will", verse: "Matthew 21:22", body: "Jesus makes statements that seem to promise everything: 'If you believe, you will receive whatever you ask for in prayer' (Matthew 21:22). These texts require careful reading in context. James adds: 'You ask and do not receive, because you ask with wrong motives' (4:3). John adds: 'If we ask anything according to his will, he hears us' (1 John 5:14). The condition is not the intensity of faith but the alignment with God's will. Faith does not command God; it trusts him." },
  { title: "Lament as Faithful Response", verse: "Psalm 22:2", body: "The psalms of lament — 'my God, my God, why have you not answered?' — are not failures of faith but expressions of it. Bringing unanswered prayer to God in honest complaint is the biblical model. God does not demand stoic acceptance of disappointment. He invites honest wrestling — Jacob wrestling with the angel (Genesis 32) is a model, not an exception. Wrestling is not the same as rebellion." },
];

const REASONS = [
  { reason: "Against God's Will", color: "#EF4444", body: "Some prayers are not answered yes because they are requests for things that are contrary to God's revealed will or character. The prayer for an unethical success, the prayer for a relationship that violates covenant — these are not likely to be granted, because God does not work against himself. 'According to his will' is the governing condition." },
  { reason: "Not Yet — Waiting", color: "#F59E0B", body: "Many answered prayers required long waiting. Abraham prayed 25 years before Isaac was born. Hannah prayed for years before Samuel. The disciples prayed 10 days in the upper room before Pentecost. Wait is a real answer that honors the request. The question is whether we will continue to pray through the waiting." },
  { reason: "No for Our Good", color: "#8B5CF6", body: "Sometimes God withholds what we ask for because granting it would harm us — or because the refusal itself is the gift. Paul's thorn produced dependence on grace that a painless life might not have. The answer no is not always a disappointment; sometimes, seen later, it is the mercy." },
  { reason: "Hindered by Sin", color: "#3B82F6", body: "Peter warns husbands that treating their wives poorly will hinder their prayers (1 Peter 3:7). The psalmist: 'If I had cherished sin in my heart, the Lord would not have listened' (Psalm 66:18). Unconfessed sin, unresolved conflict, and unrepentant patterns create relational static that affects prayer. This is not a mechanical obstacle but a relational one." },
  { reason: "Complex Spiritual Delays", color: GREEN, body: "Daniel prayed, and the angel was dispatched — but was delayed by spiritual opposition for three weeks (Daniel 10:12-13). Some answers to prayer are not instantaneous because they involve complex realities in both physical and spiritual dimensions that we cannot see. Persisting in prayer is not lack of faith; it is cooperation with divine purposes." },
];

const VOICES = [
  {
    id: "yancey",
    name: "Philip Yancey",
    work: "Disappointment with God (1988)",
    color: "#3B82F6",
    quote: "I have learned to trace the thread of his purposes through what seems like a tangled skein of suffering. Whether I succeed depends on whether I trust the heart of the weaver.",
    contribution: "Yancey's honest book emerged from pastoral encounters with people whose faith had collapsed under unanswered prayer. He identifies three questions everyone eventually asks: Is God hidden? Is God silent? Is God unfair? His answer is not philosophical but biographical — tracing the arc of Scripture from the visible God of Exodus to the 'hidden' God of today. His key insight: the absence of the miraculous does not mean the absence of God. Yancey gave a generation permission to ask honest questions and still remain Christian.",
  },
  {
    id: "lewis",
    name: "C.S. Lewis",
    work: "A Grief Observed (1961)",
    color: "#F59E0B",
    quote: "When you are happy, so happy you have no sense of needing Him, if you remember yourself and turn to Him with gratitude and praise, you will be welcomed with open arms. But go to Him when your need is desperate, when all other help is vain, and what do you find? A door slammed in your face.",
    contribution: "Lewis wrote this after the death of his wife Joy from cancer, for which he had prayed fervently. The fury and bewilderment of the early pages feel like heresy; the slow recovery of trust in the later pages shows a faith tested and refined. His conclusion: God was not absent, but Lewis's image of God was being dismantled and rebuilt. The door that felt slammed was the door of his own inadequate conceptions. A Grief Observed is the most honest account of unanswered prayer by any major theologian — precisely because it is not theological but confessional.",
  },
  {
    id: "carmichael",
    name: "Amy Carmichael",
    work: "Roses from Brier (1933)",
    color: "#EC4899",
    quote: "In acceptance lieth peace. But this does not mean that we shall never ask 'Why?' of God. Of course we shall — and he will not be offended. The psalms are full of such questions.",
    contribution: "Carmichael spent 55 years in India, most of it in chronic pain that kept her bedridden. She prayed to be healed; she was not. Out of that unanswered petition came some of the most pastoral writing on suffering in Christian history. Her approach was not resignation but transformation: the unanswered prayer became the occasion for depth of relationship with God that answered prayer might not have created. She wrote 35 books from her sickbed — the most productive years of her life were the years of her greatest limitation.",
  },
  {
    id: "barth",
    name: "Karl Barth",
    work: "Prayer (1952)",
    color: PURPLE,
    quote: "To pray is to ask. We need not be ashamed to ask. Asking is the soul of prayer. God is not frightened by our asking, no matter how bold the request.",
    contribution: "Barth brought rigorous theological analysis to the problem of unanswered prayer without softening its difficulty. His framework: prayer is participation in Christ's own intercession before the Father. When we pray, we are not presenting our requests to a distant God — we are praying with and through Christ who always prays the Father's will perfectly. The 'unanswered' prayer is therefore not rejected but redirected: our petition enters Christ's intercession and is transformed by it. The answer we receive may not be the answer we requested, but it is the answer Christ's intercession produces.",
  },
  {
    id: "willard",
    name: "Dallas Willard",
    work: "The Divine Conspiracy (1998)",
    color: GREEN,
    quote: "Prayer is a matter of interactive relationship with a God who is intelligent, personal, caring, and active. If that is what God is like, then prayer — talking with him, listening to him, responding to him — is exactly what we should expect.",
    contribution: "Willard resisted both the mechanical approach (follow the formula and receive the result) and the passive approach (just accept whatever God does). His framework: prayer is the arena of genuine cooperative relationship with a real Person. God genuinely responds to prayer — which means he genuinely withholds some requests, grants others, and moves the timing of others. The difficulty of unanswered prayer is evidence of the reality of the relationship, not its absence: real relationships involve real negotiation, real disappointment, and real surprise.",
  },
];

const PRACTICES = [
  { title: "Keep a Prayer Journal", desc: "Record prayers with dates. Reviewing it over months and years reveals patterns of answered prayer you might not have noticed — and provides a long memory that sustains faith during dry seasons. Many Christians who feel that prayer doesn't work have simply not tracked their prayers over time.", icon: "📓" },
  { title: "Persist Without Presumption", desc: "Jesus commends persistence in prayer (Luke 18:1-8 — the persistent widow). Persistence is not demands; it is continued relationship with a trustworthy God. Pray repeatedly and honestly while holding your requests loosely — 'if it is your will.'", icon: "🔄" },
  { title: "Ask Why", desc: "Bring the honest question to God: 'Why haven't you answered?' The lament psalms show that God invites this. Do not suppress the question in the name of faith — name it, bring it, and wait for what shifts in you as you do.", icon: "❓" },
  { title: "Examine Your Motives", desc: "James's diagnosis is uncomfortable but important: you ask for wrong motives (James 4:3). Before concluding that God has not answered, examine what you were actually asking for and why. Sometimes the unanswered prayer reveals the misaligned desire.", icon: "🔍" },
  { title: "Pray Scripture", desc: "Prayers aligned with Scripture are by definition prayers within God's will. Praying the promises of Scripture, the psalms, and the apostolic prayers (Ephesians 1, 3; Colossians 1; Philippians 1) is prayer that we can be confident God receives.", icon: "📖" },
  { title: "Receive Community's Prayer", desc: "When you are depleted and unable to pray, let others carry the petition. The four men lowered their paralyzed friend through the roof — Jesus healed him in response to their faith (Mark 2:5). Your community can hold the prayer when you cannot.", icon: "👥" },
];

export default function UnansweredPrayerPage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [selectedReason, setSelectedReason] = useState("Against God's Will");
  const [selectedVoice, setSelectedVoice] = useState("yancey");

  const reason = REASONS.find(r => r.reason === selectedReason)!;
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🙏</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Unanswered Prayer</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Every believer has prayed and felt they received nothing. The experience of unanswered prayer is one of the most faith-testing realities of the Christian life — and the Bible does not avoid it.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as Tab, label: "Theology", icon: "📖" },
            { id: "reasons" as Tab, label: "Why Unanswered", icon: "🔍" },
            { id: "voices" as Tab, label: "Voices", icon: "💬" },
            { id: "practices" as Tab, label: "Practices", icon: "🛠️" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "reasons" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {REASONS.map(r => (
                <button key={r.reason} onClick={() => setSelectedReason(r.reason)}
                  style={{ padding: "8px 12px", borderRadius: 20, border: `1px solid ${selectedReason === r.reason ? r.color : BORDER}`, background: selectedReason === r.reason ? `${r.color}15` : "transparent", color: selectedReason === r.reason ? r.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {r.reason}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${reason.color}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: reason.color, fontWeight: 900, fontSize: 20, marginBottom: 16 }}>{reason.reason}</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{reason.body}</p>
            </div>
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 190, flexShrink: 0 }}>
              {VOICES.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${selectedVoice === v.id ? v.color : BORDER}`, background: selectedVoice === v.id ? `${v.color}12` : "transparent", color: selectedVoice === v.id ? v.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", marginBottom: 6, textAlign: "left" }}>
                  {v.name}
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${voice.color}30`, borderRadius: 14, padding: 26 }}>
                <div style={{ marginBottom: 16 }}>
                  <h2 style={{ color: voice.color, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{voice.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{voice.work}</div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${voice.color}`, paddingLeft: 16, marginBottom: 20, margin: "0 0 20px 0" }}>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>"{voice.quote}"</p>
                </blockquote>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{voice.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The experience of unanswered prayer can deepen faith rather than destroy it — if met with honesty, persistence, and the right practices.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
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
