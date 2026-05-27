"use client";
import { useState } from "react";

const VIEWS = ["overview", "methods", "testimonies", "faq"] as const;
type View = typeof VIEWS[number];

interface BaptismTestimony {
  id: string;
  name: string;
  age: number;
  location: string;
  story: string;
  method: string;
  verse: string;
  verseRef: string;
}

const TESTIMONIES: BaptismTestimony[] = [
  { id: "1", name: "Marcus J.", age: 28, location: "Atlanta, GA", story: "I grew up in church but never truly surrendered my life to Christ. At 28, after years of chasing success and feeling hollow, I heard a sermon on the prodigal son and broke down in tears. Two weeks later I was baptized in the church pool—surrounded by my small group who had prayed for me for two years. Coming up out of that water felt like breathing for the first time.", method: "Immersion", verse: "We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life.", verseRef: "Romans 6:4" },
  { id: "2", name: "Priya S.", age: 22, location: "Chennai, India", story: "Baptism in India isn't easy when your whole family is Hindu. I came to faith through a university Bible study and knew I needed to make my commitment public—even if it cost me. My father didn't speak to me for six months. But God has been faithful, and I've seen three family members soften toward the gospel since then. My baptism was an act of courage more than celebration, but it was right.", method: "Immersion", verse: "Whoever acknowledges me before others, I will also acknowledge before my Father in heaven.", verseRef: "Matthew 10:32" },
  { id: "3", name: "Elder Tom K.", age: 67, location: "Dublin, Ireland", story: "I was baptized as an infant in the Catholic Church and spent decades practicing religion without relationship. At 62, through a Billy Graham crusade on television, I repented and gave my life to Christ—truly, for the first time. My church family encouraged me to be baptized again as a believer, and I did, in the Atlantic Ocean in October. Cold water, warm heart.", method: "Immersion", verse: "Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins.", verseRef: "Acts 2:38" },
  { id: "4", name: "Jade L.", age: 19, location: "Seoul, South Korea", story: "I was baptized as a teenager in my Korean Presbyterian church. For me, the sprinkling carried deep meaning—the water symbolizing the cleansing blood of Christ poured over my life. What mattered most wasn't the mode but the meaning: I was publicly declaring that I belong to Jesus, not to the world.", method: "Sprinkling", verse: "I will sprinkle clean water on you, and you will be clean; I will cleanse you from all your impurities.", verseRef: "Ezekiel 36:25" },
  { id: "5", name: "David & Amara O.", age: 35, location: "Lagos, Nigeria", story: "My wife and I were baptized together on our first wedding anniversary as a way of declaring that Christ was at the center of our marriage. Our three-year-old watched from the front row. It was the most significant moment of our marriage—more than our vows, because we were vowing to Jesus, not just to each other.", method: "Immersion", verse: "As for me and my household, we will serve the Lord.", verseRef: "Joshua 24:15" },
];

const METHODS = [
  {
    name: "Immersion",
    description: "Full submersion in water, symbolizing burial with Christ and resurrection to new life. Practiced by Baptists, many evangelical churches, and Church of Christ.",
    scriptural: "And when Jesus was baptized, immediately he went up from the water. (Matthew 3:16) — The language suggests coming up out of water, implying full immersion.",
    traditions: ["Baptist", "Church of Christ", "Evangelical Free", "Pentecostal", "Seventh-day Adventist"],
    icon: "🌊",
  },
  {
    name: "Sprinkling (Aspersion)",
    description: "Water sprinkled on the head of the candidate, often used for infant baptism and for those physically unable to be immersed. Common in Reformed, Presbyterian, and some Anglican traditions.",
    scriptural: "I will sprinkle clean water on you, and you will be clean. (Ezekiel 36:25) — Reformed theologians see continuity with OT purification rites.",
    traditions: ["Presbyterian", "Reformed", "United Methodist", "Church of Scotland"],
    icon: "💧",
  },
  {
    name: "Pouring (Affusion)",
    description: "Water poured over the candidate's head, symbolizing the outpouring of the Holy Spirit. Common in Lutheran and Catholic traditions.",
    scriptural: "I will pour out my Spirit on all flesh. (Acts 2:17) — The pouring image connects baptism to Pentecost and the Spirit's work.",
    traditions: ["Lutheran", "Catholic", "Anglican", "Orthodox (some)"],
    icon: "🫗",
  },
];

const FAQS = [
  { q: "Is baptism required for salvation?", a: "This is one of the most debated questions in Christianity. Most evangelical Protestants teach that baptism is a public declaration of faith—important and commanded, but not the instrument of salvation (Ephesians 2:8-9). Others (Church of Christ, some Lutherans) hold that baptism is part of the conversion event. What's universally agreed: Jesus commanded it (Matthew 28:19) and every believer should obey." },
  { q: "Should I be baptized again if I was baptized as an infant?", a: "This is a matter of conscience and denomination. Those in Reformed or Catholic traditions see infant baptism as valid (the sign of the covenant applied to children of believers). Those in Baptist/evangelical traditions believe baptism is for confessing believers only, and would encourage rebaptism. Pray, study Scripture (especially Acts and Romans 6), and talk to a pastor you trust." },
  { q: "What does baptism actually do spiritually?", a: "Baptism is a sign and seal of the gospel—it pictures death to sin and resurrection to new life (Romans 6:3-4). In some traditions it is also the occasion of regeneration (new birth). Across all traditions, it is the initiatory rite into the Christian community and marks the public beginning of discipleship." },
  { q: "Can I be baptized alone without a church?", a: "While God is not bound to a ceremony, baptism is by nature communal—it is entering a covenant community. Jesus was baptized by John. The Philippian jailer was baptized with his household in the presence of Paul. The witness of other believers is part of what makes baptism meaningful. We encourage you to be baptized in the context of a local church." },
  { q: "What should I say or do when I get baptized?", a: "Most baptism services involve: a brief testimony or statement of faith, the pastor saying 'I baptize you in the name of the Father, the Son, and the Holy Spirit' (Matthew 28:19), the act of baptism, and a time of prayer and celebration. Some churches allow the person being baptized to share their story publicly first. There is no required script beyond the Trinitarian formula." },
  { q: "Can children be baptized?", a: "In paedobaptist traditions (Reformed, Catholic, Lutheran), children of believing parents are baptized as the covenant sign. In credobaptist traditions (Baptist, evangelical), baptism is reserved for those who can personally confess faith. Many credobaptist churches practice a 'baby dedication' for infants and children. There is no universal age minimum—it depends on evidence of genuine faith." },
];

export default function BaptismPage() {
  const [view, setView] = useState<View>("overview");
  const [selectedTestimony, setSelectedTestimony] = useState<BaptismTestimony | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [decided, setDecided] = useState(() => {
    try { return localStorage.getItem("vine_baptism_decided") === "true"; } catch { return false; }
  });

  const markDecided = () => {
    try { localStorage.setItem("vine_baptism_decided", "true"); } catch {}
    setDecided(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>💧</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Baptism Guide</h1>
          <p style={{ color: "#9898B3", fontSize: 16 }}>Understanding, preparing for, and celebrating baptism</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: "1px solid #1E1E32", flexWrap: "wrap" }}>
          {([["overview", "Overview"], ["methods", "Methods"], ["testimonies", "Testimonies"], ["faq", "FAQ"]] as [View, string][]).map(([v, label]) => (
            <button key={v} onClick={() => setView(v)}
              style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: view === v ? "#00FF88" : "#6A6A88", borderBottom: `2px solid ${view === v ? "#00FF88" : "transparent"}`, marginBottom: -1 }}>
              {label}
            </button>
          ))}
        </div>

        {view === "overview" && (
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            {/* Hero verse */}
            <div style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.08), rgba(107,79,187,0.08))", borderRadius: 20, padding: 28, marginBottom: 32, border: "1px solid rgba(0,255,136,0.15)", textAlign: "center" }}>
              <p style={{ fontSize: 20, color: "#C0C0D8", fontStyle: "italic", lineHeight: 1.7, marginBottom: 12 }}>
                "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."
              </p>
              <p style={{ color: "#00FF88", fontWeight: 700, fontSize: 14 }}>— Matthew 28:19</p>
            </div>

            {/* What is baptism */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, color: "#00FF88" }}>What Is Baptism?</h2>
              <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 16 }}>
                Baptism is the visible, public rite of entry into the Christian faith and community. It is commanded by Jesus (Matthew 28:19), modeled throughout the New Testament (Acts 2:38, 8:38, 16:33), and practiced by virtually every stream of Christianity across 2,000 years.
              </p>
              <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8 }}>
                The word <em>baptizō</em> in Greek means to immerse, dip, or wash. Water is used because of its dual significance: cleansing from sin and the death/resurrection imagery of going under and coming back up. Baptism doesn't save—Christ does—but baptism is the normal first act of obedience after saving faith.
              </p>
            </div>

            {/* Three meanings */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16, marginBottom: 32 }}>
              {[
                { icon: "⚰️", title: "Death to the Old Self", desc: "We identify with Christ's death—the old person of sin is buried. Baptism is a funeral for the old life (Romans 6:3)." },
                { icon: "✝️", title: "Union with Christ", desc: "We are incorporated into Christ's death and resurrection. We belong to him and to his body (Galatians 3:27)." },
                { icon: "🌱", title: "New Life Begins", desc: "Coming out of the water symbolizes resurrection—we walk in newness of life, with a new identity in Christ (Romans 6:4)." },
              ].map(item => (
                <div key={item.title} style={{ background: "#12121F", borderRadius: 16, padding: 20, border: "1px solid #1E1E32" }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: "#F2F2F8" }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Steps to get baptized */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, color: "#00FF88" }}>Ready to Be Baptized?</h2>
              {[
                { step: "1", title: "Examine your heart", desc: "Baptism follows genuine saving faith. Ask: Have I repented of my sins? Do I believe Jesus is Lord and Savior? Have I received him as my own?" },
                { step: "2", title: "Talk to your pastor", desc: "Let your church family know you're ready. Many churches have a brief baptism preparation class or conversation to walk through the meaning and logistics." },
                { step: "3", title: "Prepare your testimony", desc: "Before or at baptism, many churches invite you to share briefly: what your life was like before Christ, how you came to faith, and what difference he has made." },
                { step: "4", title: "Invite your people", desc: "Baptism is a celebration. Invite family, friends—including those who don't yet believe. It's an evangelistic moment." },
                { step: "5", title: "Step into the water", desc: "It's normal to feel nervous and joyful. The ceremony is simple. The moment is sacred." },
              ].map(s => (
                <div key={s.step} style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #00FF88, #6B4FBB)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14, color: "#07070F", flexShrink: 0 }}>
                    {s.step}
                  </div>
                  <div style={{ background: "#12121F", borderRadius: 12, padding: "14px 18px", flex: 1, border: "1px solid #1E1E32" }}>
                    <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{s.title}</h4>
                    <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            {!decided ? (
              <div style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.08), rgba(107,79,187,0.08))", borderRadius: 20, padding: 28, textAlign: "center", border: "1px solid rgba(0,255,136,0.2)" }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Ready to Take the Step?</h3>
                <p style={{ fontSize: 14, color: "#9898B3", marginBottom: 20 }}>If you've decided to be baptized, mark this moment.</p>
                <button onClick={markDecided}
                  style={{ padding: "14px 32px", borderRadius: 14, border: "none", background: "linear-gradient(135deg, #00FF88, #00CC6A)", color: "#07070F", fontWeight: 800, fontSize: 16, cursor: "pointer" }}>
                  Yes, I'm Ready to Be Baptized
                </button>
              </div>
            ) : (
              <div style={{ background: "rgba(0,255,136,0.07)", borderRadius: 20, padding: 28, textAlign: "center", border: "1px solid rgba(0,255,136,0.25)" }}>
                <div style={{ fontSize: 36, marginBottom: 10 }}>🎉</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8, color: "#00FF88" }}>Amazing! Talk to your pastor!</h3>
                <p style={{ fontSize: 14, color: "#9898B3" }}>Heaven is celebrating this decision. Don't wait—reach out to your church this week.</p>
              </div>
            )}
          </div>
        )}

        {view === "methods" && (
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontSize: 15, color: "#9898B3", lineHeight: 1.7, marginBottom: 28 }}>
              Christians have debated the mode of baptism for centuries. Here's a charitable overview of the three main approaches. Note: the form of baptism is secondary to the faith it represents.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {METHODS.map(m => (
                <div key={m.name} style={{ background: "#12121F", borderRadius: 18, padding: 24, border: "1px solid #1E1E32" }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                    <span style={{ fontSize: 28 }}>{m.icon}</span>
                    <h3 style={{ fontSize: 20, fontWeight: 800, color: "#F2F2F8" }}>{m.name}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, marginBottom: 16 }}>{m.description}</p>
                  <div style={{ background: "#0D0D1A", borderRadius: 10, padding: 14, marginBottom: 16, borderLeft: "3px solid #6B4FBB" }}>
                    <p style={{ fontSize: 13, color: "#C0C0D8", fontStyle: "italic", lineHeight: 1.6 }}>{m.scriptural}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#9898B3", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Common in</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {m.traditions.map(t => <span key={t} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 8, background: "#1E1E32", color: "#D0D0E8" }}>{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "testimonies" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {TESTIMONIES.map(t => (
                <div key={t.id} onClick={() => setSelectedTestimony(t)}
                  style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 22, cursor: "pointer", transition: "border-color 0.2s, transform 0.15s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#00FF88"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#1E1E32"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #00FF8830, #6B4FBB30)", border: "1px solid #2A2A40", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                      💧
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, color: "#F2F2F8" }}>{t.name}</p>
                      <p style={{ fontSize: 12, color: "#6A6A88" }}>{t.location} · {t.method}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {t.story}
                  </p>
                  <p style={{ fontSize: 12, color: "#00FF88", marginTop: 12, fontStyle: "italic" }}>"{t.verse.slice(0, 60)}..." — {t.verseRef}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "faq" && (
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
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

      {/* Testimony Modal */}
      {selectedTestimony && (
        <div onClick={() => setSelectedTestimony(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 100, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "20px", overflowY: "auto" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#12121F", borderRadius: 20, padding: 32, maxWidth: 600, width: "100%", border: "1px solid #2A2A40", marginTop: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{selectedTestimony.name}</h2>
                <span style={{ fontSize: 14, color: "#9898B3" }}>{selectedTestimony.location} · {selectedTestimony.method}</span>
              </div>
              <button onClick={() => setSelectedTestimony(null)} style={{ background: "none", border: "none", color: "#6A6A88", fontSize: 22, cursor: "pointer" }}>×</button>
            </div>
            <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 20 }}>{selectedTestimony.story}</p>
            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, borderLeft: "3px solid #00FF88" }}>
              <p style={{ fontSize: 14, color: "#C0C0D8", fontStyle: "italic" }}>"{selectedTestimony.verse}"</p>
              <p style={{ fontSize: 12, color: "#00FF88", marginTop: 8 }}>— {selectedTestimony.verseRef}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
