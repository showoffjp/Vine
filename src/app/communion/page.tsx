"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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
    color: "#3a7d56",
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

const COMMUNION_THEOLOGY = [
  {
    id: 1,
    view: "Transubstantiation",
    tradition: "Roman Catholic",
    icon: "✝️",
    description: "At the words of consecration, the substance of bread and wine is wholly converted into the substance of Christ's body and blood. The appearances (accidents) of bread and wine remain, but the underlying reality is entirely changed. Thomas Aquinas systematized this using Aristotelian metaphysics, and it was formally defined at the Fourth Lateran Council (1215) and reaffirmed at Trent (1551).",
    scripture: ["Matthew 26:26", "John 6:55", "1 Corinthians 11:24"],
    keyPhrase: "The Real Presence in a physical sense",
  },
  {
    id: 2,
    view: "Consubstantiation / Lutheran View",
    tradition: "Lutheran",
    icon: "🕯️",
    description: "Christ is truly and substantially present in, with, and under the bread and wine — but the bread and wine are not changed in substance. Luther insisted on a literal reading of 'This is my body' and defended the corporeal presence of Christ against Zwingli at Marburg (1529). The mystery is affirmed without Aristotelian explanation.",
    scripture: ["Matthew 26:26", "Luke 22:19", "1 Corinthians 10:16"],
    keyPhrase: "The Real Presence without transformation",
  },
  {
    id: 3,
    view: "Reformed / Calvinist View",
    tradition: "Reformed / Presbyterian",
    icon: "🌿",
    description: "Christ's glorified body is at the right hand of the Father in heaven and is not physically present in the elements. However, by the power of the Holy Spirit, believers are genuinely lifted up to feed on Christ spiritually. Calvin called it 'spiritual eating' — real, not metaphorical, but received by faith rather than by mouth. The Supper is a 'visible word' that seals the promises of the gospel.",
    scripture: ["John 6:51", "1 Corinthians 11:26", "Acts 3:21"],
    keyPhrase: "The Real Presence in a spiritual/heavenly sense",
  },
  {
    id: 4,
    view: "Zwinglian / Memorial View",
    tradition: "Baptist / Evangelical",
    icon: "🍞",
    description: "The bread and wine are signs and symbols of Christ's body and blood — they represent his sacrifice but do not convey it. Communion is primarily a memorial act: the church publicly remembers and declares the death of Christ. Zwingli argued from John 6:63 ('the flesh profits nothing') that a physical eating cannot be intended. Grace is received through faith in the Word, not through the physical elements.",
    scripture: ["1 Corinthians 11:24", "1 Corinthians 11:26", "John 6:63"],
    keyPhrase: "A grateful remembrance, not a re-presentation",
  },
  {
    id: 5,
    view: "Anglican / Middle Way",
    tradition: "Anglican / Episcopal",
    icon: "⚓",
    description: "The Thirty-Nine Articles deliberately avoid specifying the mode of Christ's presence, making room for both Reformed and Lutheran-leaning Anglicans. Article 28 affirms that 'the body of Christ is given, taken, and eaten in the Supper only after a heavenly and spiritual manner' — excluding transubstantiation while affirming genuine reception. The genius of the Anglican via media is its studied ambiguity on contested eucharistic questions.",
    scripture: ["Matthew 26:26", "1 Corinthians 10:16", "1 Corinthians 11:29"],
    keyPhrase: "We receive and eat his body in a heavenly and spiritual manner",
  },
];

const VOICES_COM = [
  {
    id: 1,
    name: "Ignatius of Antioch",
    era: "c. 35-108 AD",
    context: "Epistle to the Ephesians / Epistle to the Smyrnaeans",
    bio: "Bishop of Antioch and disciple of the Apostle John, Ignatius wrote seven letters while being transported to Rome for martyrdom under Emperor Trajan. His letters contain the earliest non-New Testament references to the Eucharist as a real, physical act with theological weight.",
    quote: "They abstain from the Eucharist and from prayer, because they confess not the Eucharist to be the flesh of our Savior Jesus Christ, which suffered for our sins, and which the Father, of His goodness, raised up again.",
    contribution: "First non-NT writer to describe the Eucharist as 'the medicine of immortality, and the antidote to prevent us from dying.' His letters established the Eucharist as central to Christian identity and anti-Docetic theology.",
  },
  {
    id: 2,
    name: "Martin Luther",
    era: "1483-1546",
    context: "The Babylonian Captivity of the Church (1520) / Marburg Colloquy (1529)",
    bio: "German Reformer and Augustinian monk who ignited the Protestant Reformation. Luther's eucharistic theology was forged in fierce controversy with both Rome (against transubstantiation) and Zwingli (against the memorial view). He held the Marburg Colloquy in 1529, reportedly writing 'This is my body' on the table in chalk to confront Zwingli.",
    quote: "I cannot escape the words of the text which clearly say, 'This is my body.' Let them prove that the body of Christ is not there. I believe the text stands as it reads.",
    contribution: "Defended the Real Presence of Christ in the Supper against both Roman metaphysics and Swiss symbolism. His insistence on taking 'This is my body' literally shaped all subsequent Lutheran eucharistic theology and forced Reformed thinkers to develop their own alternative.",
  },
  {
    id: 3,
    name: "John Calvin",
    era: "1509-1564",
    context: "Institutes of the Christian Religion, Book IV (1559)",
    bio: "French Reformer and theologian who became the dominant figure of the Reformed tradition in Geneva. Calvin sought to mediate between Luther's corporeal presence and Zwingli's bare memorialism, developing the doctrine of spiritual presence: Christ is truly received at the Table by the power of the Holy Spirit, though his body remains in heaven.",
    quote: "Although the mind must be raised to heaven to seek Christ there, yet the bread and wine are the visible signs which represent to us the body and blood of the Lord.",
    contribution: "Developed the 'spiritual presence' view as a genuine third way between Lutheran and Zwinglian extremes. His account of the Supper as a 'visible word' that genuinely communicates grace has shaped Presbyterian, Reformed Baptist, and much evangelical eucharistic practice.",
  },
  {
    id: 4,
    name: "Thomas Cranmer",
    era: "1489-1556",
    context: "The Book of Common Prayer (1549, 1552) / Defence of the True and Catholic Doctrine of the Sacrament",
    bio: "Archbishop of Canterbury under Henry VIII and Edward VI, Cranmer crafted the liturgical language of the Church of England. His eucharistic theology evolved from Lutheran toward Reformed during his lifetime. He was burned at the stake under Mary I for his Protestant views, famously thrusting his right hand first into the flames because it had signed a recantation he later repudiated.",
    quote: "The bread and cup of the Lord's Supper are figures and representations of the body and blood of Christ, and that the body of Christ is received and eaten in the supper only after a heavenly and spiritual manner.",
    contribution: "Crafted the Anglican via media on the Eucharist: language rich enough to allow both Reformed and Lutheran interpretations, excluding transubstantiation while affirming genuine spiritual reception. The Prayer Book's eucharistic rites have shaped Anglican worship for 500 years.",
  },
  {
    id: 5,
    name: "Leonard Vander Zee",
    era: "Contemporary",
    context: "Christ, Baptism and the Lord's Supper (2004)",
    bio: "Reformed pastor and theologian who has written one of the most accessible and ecumenically sensitive modern guides to the sacraments. Drawing on the full breadth of Christian tradition, Vander Zee integrates patristic, Reformed, and contemporary voices to recover a robust sacramental theology for evangelical churches that have often neglected it.",
    quote: "The Lord's Supper is not a symbol of an absent friend but a meal with a present Lord. Christ is the host and the feast. He meets us there.",
    contribution: "Provides the most user-friendly modern integration of the major sacramental traditions. Particularly valuable for evangelical and Reformed readers who want to recover a deeper theology of the Table without abandoning their Protestant commitments.",
  },
];

const COMMUNION_VIDEOS = [
  { id: "lsTzXI7cJGA", title: "The Prodigal Sons", speaker: "Tim Keller" },
  { id: "OasF7lWlX_M", title: "The Prodigal God: The Elder Brother", speaker: "Tim Keller" },
  { id: "v6xk8e7gdMA", title: "The Holiness of God", speaker: "R.C. Sproul" },
  { id: "7CBgp74UwbU", title: "The Trauma of Holiness", speaker: "R.C. Sproul" },
  { id: "Kxup3OS5ZhQ", title: "The Reason for God at Google", speaker: "Tim Keller" },
  { id: "JHdB1dYAteA", title: "Don't Waste Your Life", speaker: "John Piper" },
];

type Tab = "practice" | "theology" | "voices" | "videos";

export default function CommunionPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_communion_tab", "practice");
  const [tab, setTab] = usePersistedState<"what" | "views" | "howto" | "faq">("vine_communion_tab", "what");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<number | null>(null);
  const [reflected, setReflected] = useState(() => {
    try { return localStorage.getItem("vine_communion_reflected") === "true"; } catch { return false; }
  });

  const markReflected = () => {
    try { localStorage.setItem("vine_communion_reflected", "true"); } catch {}
    setReflected(true);
  };

  const voice = VOICES_COM.find(v => v.id === selectedVoice) ?? null;

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🍞</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>The Lord&rsquo;s Supper</h1>
          <p style={{ color: MUTED, fontSize: 16 }}>Communion, Eucharist, the Breaking of Bread</p>
          <div style={{ background: "rgba(58,125,86,0.06)", borderRadius: 14, padding: "12px 20px", marginTop: 20, border: "1px solid rgba(58,125,86,0.15)", maxWidth: 560, margin: "20px auto 0" }}>
            <p style={{ fontSize: 14, color: "#C0C0D8", fontStyle: "italic" }}>
              &ldquo;Do this in remembrance of me.&rdquo;
            </p>
            <p style={{ fontSize: 13, color: GREEN, fontWeight: 700, marginTop: 6 }}>&mdash; Luke 22:19</p>
          </div>
        </div>

        {/* Top Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {(["practice", "theology", "voices", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer", flex: 1 }}>
              {t === "practice" ? "Practice" : t === "theology" ? "Theology" : t === "voices" ? "Voices" : "Videos"}
            </button>
          ))}
        </div>

        {/* PRACTICE TAB */}
        {activeTab === "practice" && (
          <>
            {/* Inner tabs */}
            <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
              {([["what", "What Is It?"], ["views", "Views Across Traditions"], ["howto", "How to Participate"], ["faq", "FAQ"]] as const).map(([t, label]) => (
                <button key={t} onClick={() => setTab(t)}
                  style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: tab === t ? GREEN : "#6A6A88", borderBottom: `2px solid ${tab === t ? GREEN : "transparent"}`, marginBottom: -1 }}>
                  {label}
                </button>
              ))}
            </div>

            {tab === "what" && (
              <div style={{ maxWidth: 720, margin: "0 auto" }}>
                <div style={{ background: CARD, borderRadius: 18, padding: 28, marginBottom: 24, border: `1px solid ${BORDER}` }}>
                  <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, color: GREEN }}>What Is the Lord&rsquo;s Supper?</h2>
                  <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 16 }}>
                    The Lord&rsquo;s Supper (also called Communion or Eucharist) is one of two ordinances (or sacraments) instituted by Jesus himself on the night of his arrest. He took bread and wine &mdash; elements of the Passover meal &mdash; and gave them new meaning in light of his imminent death.
                  </p>
                  <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 16 }}>
                    At minimum, every tradition agrees on three things: (1) Communion was instituted by Christ (Luke 22:14-20, 1 Cor 11:23-26). (2) It is to be practiced by the church until Christ returns. (3) It involves bread and a cup that symbolize/convey the body and blood of Christ.
                  </p>
                  <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8 }}>
                    Where traditions diverge is on exactly what happens to the bread and wine, who can participate, how often it should be celebrated, and who can officiate. These differences are significant &mdash; but they are disagreements within a common conviction that this meal matters deeply.
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16, marginBottom: 24 }}>
                  {[
                    { icon: "🔙", title: "Looking Back", desc: "We remember Christ's death — the body broken, the blood poured out, the price paid for sin.", verse: "Do this in remembrance of me." },
                    { icon: "👀", title: "Looking Around", desc: "We recognize the body of Christ — the community of believers at the table together, one loaf, one body.", verse: "Because there is one loaf, we, who are many, are one body." },
                    { icon: "⏩", title: "Looking Forward", desc: "We proclaim his coming — every Communion is an act of eschatological anticipation. We eat until he comes.", verse: "You proclaim the Lord's death until he comes." },
                  ].map(m => (
                    <div key={m.title} style={{ background: CARD, borderRadius: 16, padding: 20, border: `1px solid ${BORDER}` }}>
                      <div style={{ fontSize: 28, marginBottom: 10 }}>{m.icon}</div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{m.title}</h3>
                      <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, marginBottom: 8 }}>{m.desc}</p>
                      <p style={{ fontSize: 12, color: GREEN, fontStyle: "italic" }}>&ldquo;{m.verse}&rdquo;</p>
                    </div>
                  ))}
                </div>

                {!reflected ? (
                  <div style={{ background: "rgba(58,125,86,0.06)", borderRadius: 16, padding: 24, border: "1px solid rgba(58,125,86,0.2)", textAlign: "center" }}>
                    <p style={{ fontSize: 15, color: "#C0C0D8", marginBottom: 16 }}>Next time you take Communion, come ready with all three perspectives: looking back at the cross, looking around at the body, looking forward to the return.</p>
                    <button onClick={markReflected} style={{ padding: "12px 28px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #3a7d56, #00CC6A)", color: BG, cursor: "pointer", fontWeight: 800, fontSize: 14 }}>
                      I&rsquo;ll approach it this way
                    </button>
                  </div>
                ) : (
                  <div style={{ background: "rgba(58,125,86,0.06)", borderRadius: 16, padding: 20, border: "1px solid rgba(58,125,86,0.2)", textAlign: "center" }}>
                    <p style={{ fontSize: 15, color: GREEN, fontWeight: 700 }}>&#10003; Great intention! May every Communion be richer for it.</p>
                  </div>
                )}
              </div>
            )}

            {tab === "views" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 760, margin: "0 auto" }}>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 8 }}>The Lord&rsquo;s Supper is one of Christianity&rsquo;s most debated topics. Here is a charitable summary of the four main positions, held with conviction by faithful believers across 2,000 years.</p>
                {VIEWS_OF_COMMUNION.map(v => (
                  <div key={v.name} style={{ background: CARD, borderRadius: 16, padding: 24, border: `1px solid ${v.color}25` }}>
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
                      {v.traditions.map(t => <span key={t} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 8, background: "#1E1E32", color: MUTED }}>{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {tab === "howto" && (
              <div style={{ maxWidth: 680, margin: "0 auto" }}>
                <p style={{ fontSize: 15, color: MUTED, marginBottom: 24, lineHeight: 1.7 }}>Whatever your tradition&rsquo;s theology of Communion, here is how to participate well:</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {HOW_TO.map((h, i) => (
                    <div key={i} style={{ display: "flex", gap: 16 }}>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14, color: BG, flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                      <div style={{ background: CARD, borderRadius: 14, padding: "16px 20px", flex: 1, border: `1px solid ${BORDER}` }}>
                        <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{h.step}</h4>
                        <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, marginBottom: 8 }}>{h.detail}</p>
                        <span style={{ fontSize: 12, color: GREEN, background: "rgba(58,125,86,0.08)", padding: "2px 8px", borderRadius: 8, border: "1px solid rgba(58,125,86,0.2)" }}><VerseRef reference={h.verse} /></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "faq" && (
              <div style={{ maxWidth: 720, margin: "0 auto" }}>
                {FAQS.map((faq, i) => (
                  <div key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ background: CARD, borderRadius: 14, marginBottom: 12, overflow: "hidden", border: `1px solid ${BORDER}`, cursor: "pointer" }}>
                    <div style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: openFaq === i ? GREEN : TEXT, flex: 1, marginRight: 12 }}>{faq.q}</h3>
                      <span style={{ fontSize: 20, color: "#6A6A88", flexShrink: 0 }}>{openFaq === i ? "−" : "+"}</span>
                    </div>
                    {openFaq === i && (
                      <div style={{ padding: "0 20px 18px", borderTop: `1px solid ${BORDER}` }}>
                        <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginTop: 14 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* THEOLOGY TAB */}
        {activeTab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, maxWidth: 720 }}>
              Five major traditions have understood the Lord&rsquo;s Supper in distinct ways. Each view is held by serious biblical scholars &mdash; understanding them sharpens your own convictions and deepens your appreciation of the breadth of Christ&rsquo;s church.
            </p>
            {COMMUNION_THEOLOGY.map(entry => (
              <div key={entry.id} style={{ background: CARD, borderRadius: 16, padding: 28, border: `1px solid ${BORDER}` }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start", flexWrap: "wrap", marginBottom: 14 }}>
                  <span style={{ fontSize: 30 }}>{entry.icon}</span>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginBottom: 6 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 900, color: TEXT, margin: 0 }}>{entry.view}</h3>
                      <span style={{ background: `${PURPLE}25`, color: PURPLE, padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700, border: `1px solid ${PURPLE}40` }}>{entry.tradition}</span>
                    </div>
                    <p style={{ fontSize: 13, color: GREEN, fontWeight: 700, fontStyle: "italic", margin: 0 }}>&ldquo;{entry.keyPhrase}&rdquo;</p>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 16 }}>{entry.description}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {entry.scripture.map(s => (
                    <span key={s} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 8, background: `${GREEN}10`, color: GREEN, border: `1px solid ${GREEN}25`, fontWeight: 600 }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VOICES TAB */}
        {activeTab === "voices" && (
          <div style={{ display: "grid", gridTemplateColumns: voice ? "1fr 210px" : "1fr", gap: 16, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 8 }}>
                Five figures whose writings on the Lord&rsquo;s Supper have shaped how the church understands this meal &mdash; from the first century to today.
              </p>
              {VOICES_COM.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(selectedVoice === v.id ? null : v.id)}
                  style={{ background: selectedVoice === v.id ? `${PURPLE}15` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE + "60" : BORDER}`, borderRadius: 14, padding: "20px 24px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 900, fontSize: 11, flexShrink: 0 }}>
                      {v.name.split(" ").map(n => n[0]).slice(0, 3).join("")}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginBottom: 4 }}>
                        <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{v.name}</span>
                        <span style={{ color: MUTED, fontSize: 12 }}>{v.era}</span>
                      </div>
                      <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{v.context}</div>
                      <p style={{ fontSize: 13, color: "#C0C0D8", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>&ldquo;{v.quote}&rdquo;</p>
                    </div>
                  </div>
                  {selectedVoice !== v.id && (
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, marginTop: 8 }}>{v.contribution}</p>
                  )}
                </button>
              ))}
            </div>

            {voice && (
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 20, position: "sticky", top: 100 }}>
                <div style={{ width: 48, height: 48, borderRadius: 10, background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 900, fontSize: 11, marginBottom: 12 }}>
                  {voice.name.split(" ").map(n => n[0]).slice(0, 3).join("")}
                </div>
                <h3 style={{ color: PURPLE, fontWeight: 900, fontSize: 16, marginBottom: 4 }}>{voice.name}</h3>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 12 }}>{voice.era}</div>
                <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 10, marginBottom: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>SOURCE</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{voice.context}</p>
                </div>
                <p style={{ fontSize: 13, color: "#C0C0D8", lineHeight: 1.65, marginBottom: 12 }}>{voice.bio}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 10 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{voice.contribution}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div>
            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 24 }}>
              Sermons and lectures that illuminate the Lord&rsquo;s Supper, the gospel it proclaims, and the God it exalts.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: 20 }}>
              {COMMUNION_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, borderRadius: 14, overflow: "hidden", border: `1px solid ${BORDER}` }}>
                  <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", borderRadius: 0 }}
                    src={`https://www.youtube.com/embed/${v.id}`} title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <div style={{ padding: "14px 18px" }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: TEXT, marginBottom: 4 }}>{v.title}</div>
                    <div style={{ fontSize: 12, color: MUTED }}>{v.speaker}</div>
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
