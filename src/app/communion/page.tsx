"use client";
import { useState } from "react";

const VIEWS_OF_COMMUNION = [
  {
    name: "Real Presence (Lutheran)",
    icon: "🕯️",
    color: "#FF8C42",
    summary: "Christ is truly, bodily present in, with, and under the bread and wine — not instead of them.",
    explanation: "Luther's doctrine of consubstantiation: the physical bread and wine remain, but Christ's body and blood are truly present with them. Luther argued fiercely against Zwingli's memorial view, insisting that 'This is my body' means exactly what it says. The mystery is not explained away but embraced.",
    scripture: "This is my body given for you; do this in remembrance of me. (Luke 22:19)",
    traditions: ["Lutheran", "Some Anglicans"],
  },
  {
    name: "Transubstantiation (Catholic / Orthodox)",
    icon: "✝️",
    color: "#6B4FBB",
    summary: "The bread and wine are actually transformed into the body and blood of Christ at consecration.",
    explanation: "Using Aristotelian categories, the Catholic tradition teaches that the substance (essential reality) of bread and wine changes to become Christ's body and blood, while the accidents (appearance, taste, smell) remain. Thomas Aquinas systematized this. Orthodox theology affirms the real transformation but avoids Aristotelian categories.",
    scripture: "For my flesh is real food and my blood is real drink. (John 6:55)",
    traditions: ["Roman Catholic", "Eastern Orthodox"],
  },
  {
    name: "Spiritual Presence (Reformed / Calvinist)",
    icon: "🌿",
    color: "#00FF88",
    summary: "Christ is spiritually, genuinely present at the table — received by faith through the Spirit.",
    explanation: "Calvin's view: Christ's body is in heaven (not omnipresent), but the Spirit truly lifts believers to feed on Christ spiritually through the elements. This is not mere symbolism — genuine grace is received. The supper is a 'visible word' that communicates what Scripture preaches.",
    scripture: "I am the living bread that came down from heaven. Whoever eats this bread will live forever. (John 6:51)",
    traditions: ["Presbyterian", "Reformed", "Some Anglican"],
  },
  {
    name: "Memorial / Symbolic (Zwinglian / Baptist)",
    icon: "🍞",
    color: "#4FC3F7",
    summary: "The bread and wine are symbols and memorials of Christ's body and blood — the presence is spiritual and symbolic, not physical.",
    explanation: "Zwingli argued that 'This is my body' uses the same language as 'I am the vine' — clearly metaphorical. Communion is primarily an act of remembrance and public profession of faith. Baptists and many evangelical traditions hold this view. The focus is on the believer's act of memory and proclamation.",
    scripture: "For whenever you eat this bread and drink this cup, you proclaim the Lord's death until he comes. (1 Corinthians 11:26)",
    traditions: ["Baptist", "most evangelical Protestant", "Pentecostal"],
  },
];

const HOW_TO = [
  { step: "Examine your heart", detail: "1 Corinthians 11:28 — 'Everyone ought to examine themselves before they eat of the bread and drink from the cup.' This is not about achieving perfection but about honest self-assessment: Am I trusting in Christ? Is there unresolved sin or conflict with a brother or sister?", verse: "1 Corinthians 11:28" },
  { step: "Confess and receive forgiveness", detail: "If the Spirit surfaces unconfessed sin in your examination, confess it specifically to God and receive his forgiveness (1 John 1:9). If there is broken relationship with another believer, seek reconciliation as soon as possible (Matthew 5:23-24).", verse: "1 John 1:9" },
  { step: "Participate with faith", detail: "As you take the bread and cup, actively remember what Christ's body and blood accomplished for you. Speak (even silently) to God in gratitude. This is not a passive ritual — it is an active declaration of your trust in the gospel.", verse: "Luke 22:19" },
  { step: "Proclaim the Lord's death", detail: "1 Corinthians 11:26 says Communion is a proclamation — it announces the death of Christ 'until he comes.' By participating, you are preaching the gospel in physical form, to yourself and to the watching church.", verse: "1 Corinthians 11:26" },
  { step: "Receive with community", detail: "Communion is never just between you and God — it is the community eating together at one table. The one loaf represents one body (1 Cor 10:17). Look around at the body of Christ gathered. This is what you belong to.", verse: "1 Corinthians 10:17" },
];

const FAQS = [
  { q: "Can I take communion on my own at home?", a: "Most traditions encourage Communion within the gathered community — 1 Corinthians 11 situates it in the assembled church. Some traditions allow individual reception (e.g., homebound or sick believers). Most would say solitary private Communion misses something essential about its communal nature, though God's grace is not bound to a setting." },
  { q: "Who can participate in communion?", a: "Most Protestant churches practice 'open communion' — inviting any believer in Christ to participate. Catholic and Orthodox practice 'closed communion' — only those confirmed in their tradition may receive. Some Reformed churches practice 'fenced communion' — requiring church membership or agreement with confessional standards. The New Testament context is the gathered, committed community of believers." },
  { q: "How often should a church celebrate communion?", a: "The NT doesn't specify frequency. The early church appears to have celebrated it every Sunday (Acts 2:42, 20:7). Calvin wanted weekly communion in Geneva but was voted down. Luther celebrated it frequently. Baptist tradition has often celebrated quarterly or monthly. The 'right' frequency is much debated; what matters most is that it is celebrated with meaning and preparation." },
  { q: "What if I'm not baptized — should I take communion?", a: "Historically, baptism has been the initiatory rite into the church and the prerequisite for Communion (the Table). Most traditions teach that Communion follows baptism. If you believe in Christ but are not yet baptized, the appropriate response is to be baptized as soon as possible, not to skip Communion indefinitely." },
  { q: "What does 'eating and drinking unworthily' mean in 1 Corinthians 11?", a: "Paul's context is the Corinthian church where wealthy members ate lavishly and the poor went hungry at the Lord's Supper (1 Cor 11:21). 'Eating unworthily' means participating without discernment of the body — failing to recognize the full community as Christ's body, and treating it as an ordinary meal. It does not mean 'come only when you feel good enough.'" },
];

export default function CommunionPage() {
  const [tab, setTab] = useState<"what" | "views" | "howto" | "faq">("what");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [reflected, setReflected] = useState(() => {
    try { return localStorage.getItem("vine_communion_reflected") === "true"; } catch { return false; }
  });

  const markReflected = () => {
    try { localStorage.setItem("vine_communion_reflected", "true"); } catch {}
    setReflected(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🍞</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>The Lord's Supper</h1>
          <p style={{ color: "#9898B3", fontSize: 16 }}>Communion, Eucharist, the Breaking of Bread</p>
          <div style={{ background: "rgba(0,255,136,0.06)", borderRadius: 14, padding: "12px 20px", marginTop: 20, border: "1px solid rgba(0,255,136,0.15)", maxWidth: 560, margin: "20px auto 0" }}>
            <p style={{ fontSize: 14, color: "#C0C0D8", fontStyle: "italic" }}>
              "Do this in remembrance of me."
            </p>
            <p style={{ fontSize: 13, color: "#00FF88", fontWeight: 700, marginTop: 6 }}>— Luke 22:19</p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: "1px solid #1E1E32", flexWrap: "wrap" }}>
          {([["what", "What Is It?"], ["views", "Views Across Traditions"], ["howto", "How to Participate"], ["faq", "FAQ"]] as const).map(([t, label]) => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: tab === t ? "#00FF88" : "#6A6A88", borderBottom: `2px solid ${tab === t ? "#00FF88" : "transparent"}`, marginBottom: -1 }}>
              {label}
            </button>
          ))}
        </div>

        {/* What Is It */}
        {tab === "what" && (
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{ background: "#12121F", borderRadius: 18, padding: 28, marginBottom: 24, border: "1px solid #1E1E32" }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, color: "#00FF88" }}>What Is the Lord's Supper?</h2>
              <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 16 }}>
                The Lord's Supper (also called Communion or Eucharist) is one of two ordinances (or sacraments) instituted by Jesus himself on the night of his arrest. He took bread and wine — elements of the Passover meal — and gave them new meaning in light of his imminent death.
              </p>
              <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 16 }}>
                At minimum, every tradition agrees on three things: (1) Communion was instituted by Christ (Luke 22:14-20, 1 Cor 11:23-26). (2) It is to be practiced by the church until Christ returns. (3) It involves bread and a cup that symbolize/convey the body and blood of Christ.
              </p>
              <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8 }}>
                Where traditions diverge is on exactly what happens to the bread and wine, who can participate, how often it should be celebrated, and who can officiate. These differences are significant — but they are disagreements within a common conviction that this meal matters deeply.
              </p>
            </div>

            {/* 3 Meanings */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16, marginBottom: 24 }}>
              {[
                { icon: "🔙", title: "Looking Back", desc: "We remember Christ's death — the body broken, the blood poured out, the price paid for sin.", verse: "Do this in remembrance of me." },
                { icon: "👀", title: "Looking Around", desc: "We recognize the body of Christ — the community of believers at the table together, one loaf, one body.", verse: "Because there is one loaf, we, who are many, are one body." },
                { icon: "⏩", title: "Looking Forward", desc: "We proclaim his coming — every Communion is an act of eschatological anticipation. We eat until he comes.", verse: "You proclaim the Lord's death until he comes." },
              ].map(m => (
                <div key={m.title} style={{ background: "#12121F", borderRadius: 16, padding: 20, border: "1px solid #1E1E32" }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{m.icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{m.title}</h3>
                  <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, marginBottom: 8 }}>{m.desc}</p>
                  <p style={{ fontSize: 12, color: "#00FF88", fontStyle: "italic" }}>"{m.verse}"</p>
                </div>
              ))}
            </div>

            {!reflected ? (
              <div style={{ background: "rgba(0,255,136,0.06)", borderRadius: 16, padding: 24, border: "1px solid rgba(0,255,136,0.2)", textAlign: "center" }}>
                <p style={{ fontSize: 15, color: "#C0C0D8", marginBottom: 16 }}>Next time you take Communion, come ready with all three perspectives: looking back at the cross, looking around at the body, looking forward to the return.</p>
                <button onClick={markReflected} style={{ padding: "12px 28px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #00FF88, #00CC6A)", color: "#07070F", cursor: "pointer", fontWeight: 800, fontSize: 14 }}>
                  I'll approach it this way
                </button>
              </div>
            ) : (
              <div style={{ background: "rgba(0,255,136,0.06)", borderRadius: 16, padding: 20, border: "1px solid rgba(0,255,136,0.2)", textAlign: "center" }}>
                <p style={{ fontSize: 15, color: "#00FF88", fontWeight: 700 }}>✓ Great intention! May every Communion be richer for it.</p>
              </div>
            )}
          </div>
        )}

        {/* Views */}
        {tab === "views" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontSize: 14, color: "#9898B3", lineHeight: 1.7, marginBottom: 8 }}>The Lord's Supper is one of Christianity's most debated topics. Here is a charitable summary of the four main positions, held with conviction by faithful believers across 2,000 years.</p>
            {VIEWS_OF_COMMUNION.map(v => (
              <div key={v.name} style={{ background: "#12121F", borderRadius: 16, padding: 24, border: `1px solid ${v.color}25` }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{v.icon}</span>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 6, color: v.color }}>{v.name}</h3>
                    <p style={{ fontSize: 14, color: "#C0C0D8", fontStyle: "italic" }}>{v.summary}</p>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, marginBottom: 14 }}>{v.explanation}</p>
                <div style={{ background: "#0D0D1A", borderRadius: 10, padding: 12, marginBottom: 12, borderLeft: `3px solid ${v.color}` }}>
                  <p style={{ fontSize: 13, color: "#C0C0D8", fontStyle: "italic" }}>{v.scripture}</p>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {v.traditions.map(t => <span key={t} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 8, background: "#1E1E32", color: "#9898B3" }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* How To */}
        {tab === "howto" && (
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <p style={{ fontSize: 15, color: "#9898B3", marginBottom: 24, lineHeight: 1.7 }}>Whatever your tradition's theology of Communion, here is how to participate well:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {HOW_TO.map((h, i) => (
                <div key={i} style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #00FF88, #6B4FBB)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14, color: "#07070F", flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                  <div style={{ background: "#12121F", borderRadius: 14, padding: "16px 20px", flex: 1, border: "1px solid #1E1E32" }}>
                    <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{h.step}</h4>
                    <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, marginBottom: 8 }}>{h.detail}</p>
                    <span style={{ fontSize: 12, color: "#00FF88", background: "rgba(0,255,136,0.08)", padding: "2px 8px", borderRadius: 8, border: "1px solid rgba(0,255,136,0.2)" }}>{h.verse}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        {tab === "faq" && (
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {FAQS.map((faq, i) => (
              <div key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ background: "#12121F", borderRadius: 14, marginBottom: 12, overflow: "hidden", border: "1px solid #1E1E32", cursor: "pointer" }}>
                <div style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: openFaq === i ? "#00FF88" : "#F2F2F8", flex: 1, marginRight: 12 }}>{faq.q}</h3>
                  <span style={{ fontSize: 20, color: "#6A6A88", flexShrink: 0 }}>{openFaq === i ? "−" : "+"}</span>
                </div>
                {openFaq === i && (
                  <div style={{ padding: "0 20px 18px", borderTop: "1px solid #1E1E32" }}>
                    <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginTop: 14 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
