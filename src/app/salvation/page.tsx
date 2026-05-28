"use client";
import { useState } from "react";

const STEPS = [
  {
    id: "need",
    number: "1",
    title: "We All Need Rescue",
    icon: "🌑",
    color: "#EF4444",
    summary: "Romans 3:23 says 'all have sinned.' This is not condemnation — it is diagnosis.",
    content: `The starting point of the gospel is honest: every human being has sinned and fallen short of what God intended for us. Sin is not just behavior — it is the posture of a heart that says "my way" rather than "God's way." It is the default orientation of every person born into the world.\n\nThe consequence of sin is spiritual death — separation from God (Romans 6:23). This is not God being harsh; it is simply the nature of the situation. Light and darkness cannot coexist. A perfectly holy God and unresolved sin cannot simply be overlooked.`,
    verse: "For all have sinned and fall short of the glory of God.",
    verseRef: "Romans 3:23",
  },
  {
    id: "cost",
    number: "2",
    title: "The Cost Was Paid",
    icon: "✝️",
    color: "#6B4FBB",
    summary: "God did not look away from the problem. He entered it. The cross is God's answer to sin.",
    content: `Jesus Christ — fully God, fully human — lived the perfect life we could not live. Then he died the death we deserved. On the cross, every sin of every person who would ever trust in him was placed on Jesus, and he bore the punishment for it fully.\n\n2 Corinthians 5:21: "God made him who had no sin to be sin for us, so that in him we might become the righteousness of God." This is the great exchange: our sin to him, his righteousness to us. This is not a deal we earned; it is pure grace.\n\nThree days later, Jesus rose from the dead — demonstrating that death was not the final word, that he had conquered it, and that eternal life is possible for all who trust in him.`,
    verse: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
    verseRef: "Romans 5:8",
  },
  {
    id: "faith",
    number: "3",
    title: "Faith Receives the Gift",
    icon: "🎁",
    color: "#00FF88",
    summary: "Salvation is not earned by good works or religious effort. It is received by faith.",
    content: `Ephesians 2:8-9 is the clearest statement: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast."\n\nFaith here means trusting in Jesus Christ — not just intellectual agreement that he existed, but personal trust in who he is and what he has done. It means turning from your own way (repentance) and turning to him as Lord and Savior.\n\nThis faith is not a feeling. It is a decision, often imperfect and trembling, that says: "I trust you, Jesus. I cannot save myself. Be my Lord and my Savior."`,
    verse: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God.",
    verseRef: "Ephesians 2:8",
  },
  {
    id: "life",
    number: "4",
    title: "A New Life Begins",
    icon: "🌱",
    color: "#4FC3F7",
    summary: "Salvation is not just forgiveness for the past — it is the beginning of a new life.",
    content: `2 Corinthians 5:17: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" This is not a promise that everything will be easy. It is a promise that your identity has fundamentally changed.\n\nThe Holy Spirit comes to live in every believer (Romans 8:9, Ephesians 1:13). This is not a feeling (though there may be feelings) — it is a spiritual reality. You are no longer alone. You have access to God himself.\n\nNew life includes: being part of a community of believers (the church), growing in Christlikeness over time (sanctification), praying, reading Scripture, and walking in obedience — not to earn favor, but as the natural expression of a changed heart.`,
    verse: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
    verseRef: "2 Corinthians 5:17",
  },
];

const FAQS = [
  { q: "What if I don't feel anything when I pray?", a: "Salvation is not based on emotional experience. It is based on the promise of God. John 6:37 — 'Whoever comes to me I will never drive away.' If you have genuinely trusted in Christ, you are saved regardless of how you feel. Feelings often come later. Sometimes they don't come at all. The anchor is God's word, not your emotional state." },
  { q: "Do I need to be baptized to be saved?", a: "Most evangelical Christians hold that baptism is not the instrument of salvation but an act of obedience that follows it. The thief on the cross was promised paradise by Jesus before any baptism (Luke 23:43). However, Jesus did command baptism for his disciples (Matthew 28:19), and it is the normal first act of public obedience after faith. Don't delay it." },
  { q: "Can I lose my salvation?", a: "This is one of the most debated questions in Christianity. Those in the Reformed/Calvinist tradition hold that true believers are eternally secure — sealed by the Spirit (Ephesians 1:13). Those in the Arminian/Wesleyan tradition hold that believers can walk away. What virtually all agree on: fruit matters. A life that shows zero evidence of transformation over time raises genuine questions about whether genuine faith was ever present (Matthew 7:15-20)." },
  { q: "What if I keep sinning after I become a Christian?", a: "Every Christian continues to sin (1 John 1:8). Salvation is not about achieving sinlessness — it is about having your relationship with God restored. The trajectory of a Christian life is gradual transformation, not instant perfection. Romans 7 is Paul's honest description of the ongoing struggle. 1 John 1:9 is the provision: ongoing confession, ongoing forgiveness." },
  { q: "Is there any sin too big to be forgiven?", a: "Jesus said the only unforgivable sin is the 'blasphemy of the Holy Spirit' (Matthew 12:31-32). In context, this refers to the deliberate, persistent attribution of Jesus's works to Satan — a hardened rejection of the Spirit's testimony. If you're worried about this, you almost certainly haven't committed it. A heart that worries about its standing before God is not a hardened heart." },
  { q: "Do I need to say a specific prayer?", a: "There is no magic formula. The 'sinner's prayer' is a common starting point, but it is your heart, not the exact words, that matters. What you're expressing: acknowledgment that you're a sinner, belief that Jesus died and rose for you, and turning to him as Lord. Some people can name the moment; others describe a gradual turning. Both are valid." },
];

const TESTIMONIES = [
  { name: "Marcus, 28", story: "I was an atheist through college. I thought Christians were intellectually weak. Then I read C.S. Lewis's Mere Christianity on a dare. I couldn't stop reading. Three months later, I was on my knees in a dorm room, surrendering to a God I had spent years arguing didn't exist. I've never been the same.", verse: "I believe; help my unbelief!", verseRef: "Mark 9:24" },
  { name: "Priya, 22", story: "I grew up Hindu. Coming to faith meant real family cost — my father didn't speak to me for months. But I had read the Gospels and I couldn't deny that Jesus was who he said he was. The peace that followed that prayer has never left, even through the hardest seasons.", verse: "Do not let your hearts be troubled. You believe in God; believe also in me.", verseRef: "John 14:1" },
  { name: "Elena, 52", story: "I was a church member for 30 years before I was actually saved. I knew the words, sang the songs, sat in the pew. It was a crisis — my marriage collapsing, my health failing — that drove me past religion to relationship. I finally asked Jesus to be my actual Lord, not just my cultural background.", verse: "Behold, I stand at the door and knock. If anyone hears my voice and opens the door, I will come in.", verseRef: "Revelation 3:20" },
];

export default function SalvationPage() {
  const [tab, setTab] = useState<"gospel" | "prayer" | "faq" | "testimonies">("gospel");
  const [step, setStep] = useState(0);
  const [prayed, setPrayed] = useState(() => {
    try { return localStorage.getItem("vine_salvation_prayed") === "true"; } catch { return false; }
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTestimony, setSelectedTestimony] = useState<typeof TESTIMONIES[0] | null>(null);

  const markPrayed = () => {
    try { localStorage.setItem("vine_salvation_prayed", "true"); } catch {}
    setPrayed(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>✝️</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>The Gospel</h1>
          <p style={{ color: "#9898B3", fontSize: 16 }}>The most important message in the world</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: "1px solid #1E1E32", flexWrap: "wrap" }}>
          {([["gospel", "The Good News"], ["prayer", "Pray Now"], ["faq", "Common Questions"], ["testimonies", "Stories"]] as const).map(([t, label]) => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: tab === t ? "#00FF88" : "#6A6A88", borderBottom: `2px solid ${tab === t ? "#00FF88" : "transparent"}`, marginBottom: -1 }}>
              {label}
            </button>
          ))}
        </div>

        {/* Gospel Tab */}
        {tab === "gospel" && (
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {/* Step navigation */}
            <div style={{ display: "flex", gap: 8, marginBottom: 28, justifyContent: "center" }}>
              {STEPS.map((s, i) => (
                <button key={s.id} onClick={() => setStep(i)}
                  style={{ width: 36, height: 36, borderRadius: "50%", border: `2px solid ${step === i ? s.color : "#2A2A40"}`, background: step === i ? `${s.color}20` : "#12121F", color: step === i ? s.color : "#4A4A68", fontWeight: 800, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>
                  {s.number}
                </button>
              ))}
            </div>

            {/* Active step */}
            {(() => {
              const s = STEPS[step];
              return (
                <div style={{ background: "#12121F", borderRadius: 20, padding: 32, border: `1px solid ${s.color}30`, marginBottom: 20 }}>
                  <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 20 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: `${s.color}20`, border: `2px solid ${s.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>
                      {s.icon}
                    </div>
                    <div>
                      <span style={{ fontSize: 12, color: s.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Step {s.number} of 4</span>
                      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 4 }}>{s.title}</h2>
                    </div>
                  </div>
                  <p style={{ fontSize: 15, color: "#9898B3", marginBottom: 16, fontStyle: "italic" }}>{s.summary}</p>
                  {s.content.split("\n\n").map((p, i) => (
                    <p key={i} style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 16 }}>{p}</p>
                  ))}
                  <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, borderLeft: `3px solid ${s.color}`, marginTop: 8 }}>
                    <p style={{ fontSize: 15, color: "#C0C0D8", fontStyle: "italic" }}>"{s.verse}"</p>
                    <p style={{ fontSize: 13, color: s.color, marginTop: 8, fontWeight: 700 }}>— {s.verseRef}</p>
                  </div>
                </div>
              );
            })()}

            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              {step > 0 && (
                <button onClick={() => setStep(s => s - 1)}
                  style={{ padding: "12px 24px", borderRadius: 12, border: "1px solid #2A2A40", background: "#12121F", color: "#9898B3", cursor: "pointer", fontWeight: 700 }}>
                  ← Previous
                </button>
              )}
              {step < STEPS.length - 1 ? (
                <button onClick={() => setStep(s => s + 1)}
                  style={{ padding: "12px 28px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #00FF88, #00CC6A)", color: "#07070F", cursor: "pointer", fontWeight: 800, fontSize: 15 }}>
                  Next →
                </button>
              ) : (
                <button onClick={() => setTab("prayer")}
                  style={{ padding: "12px 28px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #00FF88, #00CC6A)", color: "#07070F", cursor: "pointer", fontWeight: 800, fontSize: 15 }}>
                  I'm Ready to Respond →
                </button>
              )}
            </div>
          </div>
        )}

        {/* Prayer Tab */}
        {tab === "prayer" && (
          <div style={{ maxWidth: 660, margin: "0 auto" }}>
            {!prayed ? (
              <div style={{ background: "#12121F", borderRadius: 20, padding: 32, border: "1px solid #1E1E32" }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12, textAlign: "center" }}>A Prayer of Surrender</h2>
                <p style={{ fontSize: 14, color: "#9898B3", textAlign: "center", marginBottom: 24 }}>There are no magic words. Speak from your heart. This is a guide.</p>
                <div style={{ background: "#0D0D1A", borderRadius: 16, padding: 24, lineHeight: 2, fontSize: 16, color: "#C0C0D8", border: "1px solid #2A2A40", marginBottom: 24 }}>
                  <p style={{ marginBottom: 12 }}><em>"Lord Jesus,</em></p>
                  <p style={{ marginBottom: 12 }}><em>I know that I am a sinner and that I cannot save myself. I believe that You are the Son of God, that You died on the cross for my sins, and that You rose from the dead.</em></p>
                  <p style={{ marginBottom: 12 }}><em>Right now I turn away from my sin and I turn to You. I ask You to forgive me of everything I've done wrong, and I receive Your forgiveness by faith.</em></p>
                  <p style={{ marginBottom: 12 }}><em>Come into my life. Be my Lord. Be my Savior. I want to follow You for the rest of my life.</em></p>
                  <p><em>In Jesus' name, Amen."</em></p>
                </div>
                <button onClick={markPrayed}
                  style={{ width: "100%", padding: "16px", borderRadius: 14, border: "none", background: "linear-gradient(135deg, #00FF88, #00CC6A)", color: "#07070F", cursor: "pointer", fontWeight: 800, fontSize: 16 }}>
                  I prayed this prayer
                </button>
              </div>
            ) : (
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 12, color: "#00FF88" }}>Welcome to the family!</h2>
                <p style={{ fontSize: 16, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 24, maxWidth: 480, margin: "0 auto 24px" }}>
                  If you prayed that prayer and meant it, heaven is celebrating right now (Luke 15:7). This is the most significant moment of your life.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 480, margin: "0 auto" }}>
                  {[
                    { step: "Tell someone", desc: "Tell a Christian friend, a pastor, or anyone about your decision today." },
                    { step: "Get baptized", desc: "Baptism is your first public act of obedience. Find a church and ask about baptism." },
                    { step: "Find a church", desc: "You need community. Don't try to do this alone. Find a local church this Sunday." },
                    { step: "Read John", desc: "Start with the Gospel of John. Read a chapter a day. Let Jesus introduce himself to you." },
                    { step: "Pray daily", desc: "Prayer is just talking to God. Do it today, tomorrow, and every day after." },
                  ].map((n, i) => (
                    <div key={i} style={{ background: "#12121F", borderRadius: 12, padding: "14px 18px", border: "1px solid #1E1E32", display: "flex", gap: 14, textAlign: "left" }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #00FF88, #6B4FBB)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12, color: "#07070F", flexShrink: 0 }}>{i + 1}</div>
                      <div>
                        <p style={{ fontWeight: 700, fontSize: 14 }}>{n.step}</p>
                        <p style={{ fontSize: 13, color: "#9898B3" }}>{n.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* FAQ Tab */}
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

        {/* Testimonies Tab */}
        {tab === "testimonies" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {TESTIMONIES.map(t => (
              <div key={t.name} onClick={() => setSelectedTestimony(t)}
                style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 22, cursor: "pointer", transition: "border-color 0.2s, transform 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#00FF88"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#1E1E32"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}>
                <p style={{ fontSize: 15, fontWeight: 700, marginBottom: 10, color: "#00FF88" }}>{t.name}</p>
                <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{t.story}</p>
                <p style={{ fontSize: 12, color: "#6A6A88", marginTop: 12, fontStyle: "italic" }}>"{t.verse.slice(0, 50)}..." — {t.verseRef}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedTestimony && (
        <div onClick={() => setSelectedTestimony(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#12121F", borderRadius: 20, padding: 32, maxWidth: 560, width: "100%", border: "1px solid #2A2A40" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: "#00FF88" }}>{selectedTestimony.name}</h2>
              <button onClick={() => setSelectedTestimony(null)} style={{ background: "none", border: "none", color: "#6A6A88", fontSize: 22, cursor: "pointer" }}>×</button>
            </div>
            <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 20 }}>{selectedTestimony.story}</p>
            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 14, borderLeft: "3px solid #00FF88" }}>
              <p style={{ fontSize: 14, color: "#C0C0D8", fontStyle: "italic" }}>"{selectedTestimony.verse}"</p>
              <p style={{ fontSize: 12, color: "#00FF88", marginTop: 8 }}>— {selectedTestimony.verseRef}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
