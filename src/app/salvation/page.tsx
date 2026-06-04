"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

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
    color: "#3a7d56",
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

const SALVATION_THEOLOGY = [
  {
    id: "justification",
    title: "Justification by Faith",
    scripture: "For all have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus.",
    scriptureRef: "Romans 3:21-26",
    description: "Justification is the divine act by which God declares a guilty sinner righteous in his sight. It is not a process of becoming righteous but a legal declaration that the believer stands accepted before God on the basis of Christ's righteousness imputed to them. The Reformation battle cry — sola fide, faith alone — encapsulates the conviction that this declaration comes through trust, not merit.",
    denomViewpoints: [
      { label: "Lutheran", color: "#4FC3F7" },
      { label: "Reformed", color: PURPLE },
      { label: "Catholic (differs)", color: "#F59E0B" },
    ],
  },
  {
    id: "regeneration",
    title: "Regeneration (New Birth)",
    scripture: "Jesus replied, 'Very truly I tell you, no one can see the kingdom of God unless they are born again.'",
    scriptureRef: "John 3:3-8",
    description: "Regeneration is the Holy Spirit's sovereign work of making the spiritually dead alive. The new birth is not the result of human decision but its prerequisite — a person must be made alive to God before they can respond to the gospel in saving faith. This is the dividing line between monergistic (God alone acts) and synergistic (God and human cooperate) views of salvation.",
    denomViewpoints: [
      { label: "Monergism (Reformed)", color: PURPLE },
      { label: "Synergism (Arminian)", color: GREEN },
      { label: "Catholic/Lutheran", color: "#4FC3F7" },
    ],
  },
  {
    id: "repentance",
    title: "Repentance",
    scripture: "Peter replied, 'Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins.'",
    scriptureRef: "Acts 2:38, Luke 13:3",
    description: "Repentance is the genuine turning from sin toward God — not merely intellectual acknowledgment of wrongdoing, nor purely emotional remorse, but a change of mind and direction that reshapes behavior. Jesus said 'unless you repent, you too will all perish' (Luke 13:3). Repentance is not penance — it is not doing enough to earn forgiveness — but it is the necessary posture of a heart that has genuinely encountered grace.",
    denomViewpoints: [
      { label: "Evangelical", color: GREEN },
      { label: "Catholic (Penance)", color: "#F59E0B" },
      { label: "Reformed", color: PURPLE },
    ],
  },
  {
    id: "assurance",
    title: "Assurance of Salvation",
    scripture: "I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life.",
    scriptureRef: "Romans 8:38-39, 1 John 5:13",
    description: "Can a believer know they are saved? Reformed theology answers with a resounding yes — the Spirit himself bears witness with our spirit that we are children of God (Romans 8:16), and God's elect cannot ultimately fall away (John 10:28-29). Arminian theology qualifies this: assurance is possible but conditional on perseverance. The Catholic tradition distinguishes between the objective reality of justification and the subjective certainty any individual can have in this life.",
    denomViewpoints: [
      { label: "Reformed (Certain)", color: PURPLE },
      { label: "Arminian (Conditional)", color: GREEN },
      { label: "Catholic (Qualified)", color: "#F59E0B" },
    ],
  },
  {
    id: "atonement",
    title: "Substitutionary Atonement",
    scripture: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him.",
    scriptureRef: "Isaiah 53:5-6, 2 Cor 5:21",
    description: "Penal substitutionary atonement is the doctrine that Christ bore the penalty for sin in our place — that the wrath of God which should have fallen on sinners was absorbed by the sinless Son of God on the cross. This is not the only atonement theory in Christian history (Christus Victor, moral influence, and ransom theories also appear), but most evangelicals regard it as the heart of the gospel: God both condemned sin and provided the condemned one.",
    denomViewpoints: [
      { label: "Evangelical", color: GREEN },
      { label: "Reformed", color: PURPLE },
      { label: "Catholic (broader)", color: "#F59E0B" },
    ],
  },
  {
    id: "union",
    title: "Union with Christ",
    scripture: "I have been crucified with Christ and I no longer live, but Christ lives in me.",
    scriptureRef: "Galatians 2:20, Romans 6:3-4",
    description: "Union with Christ is arguably the most comprehensive category in Pauline soteriology. Every other benefit of salvation — justification, sanctification, glorification — flows from being united to Christ by faith. To be 'in Christ' is not a metaphor for vague spiritual feeling but a concrete ontological reality: the believer shares in Christ's death, resurrection, and inheritance. Calvin called union with Christ the 'principal hinge on which religion turns.'",
    denomViewpoints: [
      { label: "Reformed", color: PURPLE },
      { label: "Lutheran", color: "#4FC3F7" },
      { label: "Orthodox (Theosis)", color: "#EF4444" },
    ],
  },
];

const VOICES_SAL = [
  {
    id: "luther-s",
    name: "Martin Luther",
    era: "1483-1546",
    context: "Lectures on Romans (1515-1516); 95 Theses (1517); On the Freedom of a Christian (1520); father of the Protestant Reformation",
    bio: "Luther's rediscovery of justification by faith alone was not merely academic — it was the rupture that split Western Christianity. Tormented by his own unworthiness before a holy God, Luther found in Romans 1:17 what he called the 'tower experience': the righteousness of God is not the standard God demands but the gift God gives. This single insight — that God justifies the ungodly through faith in Christ, apart from works — became the hinge of the Reformation. Luther's great contribution was not innovation but recovery: he insisted that medieval Catholicism had buried this truth under layers of human merit and ecclesiastical machinery.",
    quote: "A man is justified by faith without the deeds of the law.",
    contribution: "Recovered the doctrine of justification by faith alone (sola fide) for the Western church, triggering the Protestant Reformation and reshaping how half of global Christianity understands salvation.",
  },
  {
    id: "calvin-s",
    name: "John Calvin",
    era: "1509-1564",
    context: "Institutes of the Christian Religion (1536-1559); Commentaries on the New Testament; pastor in Geneva",
    bio: "Where Luther recovered justification, Calvin systematized the entire ordo salutis — the order of salvation. His Institutes remain the most comprehensive account of Reformed soteriology: election, effectual calling, regeneration, faith, justification, sanctification, and glorification arranged in logical and biblical order. Calvin's doctrine of total depravity — that every faculty of fallen humanity is corrupted, not that humans are as evil as they could be — sets the stage for his unconditional election: if human beings are unable to choose God, then God must choose them. His treatment of union with Christ as the foundation of all salvific benefits anticipated modern Reformed scholarship by four centuries.",
    quote: "We are not our own; let not our reason nor our will rule. We are God's; let us therefore live for him and die for him.",
    contribution: "Provided the most thorough biblical-theological account of the order of salvation in Protestant history. The 'five points of Calvinism' — TULIP — though formalized after his death, represent his theological inheritance to Reformed churches worldwide.",
  },
  {
    id: "spurgeon-s",
    name: "Charles Spurgeon",
    era: "1834-1892",
    context: "Metropolitan Tabernacle, London; Sermons (63 volumes); \"Come Ye Sinners\" and countless evangelistic appeals",
    bio: "Spurgeon held together two things that are often placed in tension: a robust Reformed doctrine of election and an equally robust free offer of the gospel to all sinners without distinction. He preached to 10,000 people weekly at the Metropolitan Tabernacle — the largest congregation in the world at the time — and he extended the invitation without apology: 'Come, every one of you! God commands all men everywhere to repent.' His sermons remain among the richest expositions of the doctrines of grace available, yet they are always warm, urgent, and personal. Spurgeon never allowed Calvinism to cool his evangelistic fire.",
    quote: "I am never so near to God as when I am on my knees, confessing that I cannot save myself and crying out for mercy.",
    contribution: "Demonstrated that the doctrines of grace and earnest evangelism are not enemies but allies. His 63 volumes of sermons remain the most-read evangelical preaching corpus in the English language.",
  },
  {
    id: "graham-s",
    name: "Billy Graham",
    era: "1918-2018",
    context: "Crusade evangelist across 185 countries; Hour of Decision radio broadcast; author of Peace with God (1953)",
    bio: "Billy Graham made the gospel accessible to more human beings than any evangelist in Christian history. Over six decades of crusade ministry, he preached in person to 215 million people in 185 countries and reached hundreds of millions more through radio, television, and film. His message was simple and constant: God loves you, you have sinned, Christ died for you, repent and receive him. He did not trade in complexity or denominational controversy — he stood at the intersection of the broadest possible Christian consensus and invited every person to respond. His 'invitation' at the end of each crusade — 'Just as I Am' playing softly — became the defining image of 20th-century evangelism.",
    quote: "God proved his love on the cross. When Christ hung and bled and died, it was God saying to the world, 'I love you.'",
    contribution: "Made the gospel invitation a global phenomenon. His crusades and broadcasts reached more people with the message of salvation than any other individual in Christian history.",
  },
  {
    id: "packer-s",
    name: "J.I. Packer",
    era: "1926-2020",
    context: "Knowing God (1973); Evangelism and the Sovereignty of God (1961); theologian at Regent College, Vancouver",
    bio: "Packer's Knowing God is the most widely read work of popular Reformed theology in the 20th century — a book that convinced a generation of evangelicals that theological depth and personal devotion are not enemies. His earlier Evangelism and the Sovereignty of God addressed head-on the apparent tension between divine sovereignty and human responsibility in salvation: both are taught in Scripture, both must be affirmed, and neither eliminates the other. Packer recovered the Puritan tradition for evangelical Protestantism, editing and introducing countless Puritan reprints and making their doctrine of salvation accessible to ordinary readers.",
    quote: "Knowing about God is crucially important for the living of our lives. As it would be cruel to an invalid to withhold the news that person's condition is not hopeless, so it is cruel to man to withhold from him the news of God.",
    contribution: "Recovered the Puritan doctrines of grace for modern evangelicals. Knowing God has formed more evangelical minds in the theology of salvation than any comparable work of the 20th century.",
  },
];

const SALVATION_VIDEOS = [
  {
    id: "sv1",
    title: "How to Be Born Again",
    preacher: "Billy Graham",
    videoId: "RUhJVEWBe4g",
    description: "Graham's classic evangelistic message on the new birth — what it means, why it is necessary, and how to receive it.",
  },
  {
    id: "sv2",
    title: "The Prodigal Sons",
    preacher: "Tim Keller",
    videoId: "lsTzXI7cJGA",
    description: "Keller unpacks Luke 15 to show that both the irreligious younger brother and the self-righteous elder brother are lost — and how Jesus is the true elder brother who rescues both.",
  },
  {
    id: "sv3",
    title: "Shocking Youth Message",
    preacher: "Paul Washer",
    videoId: "uuabITeO4l8",
    description: "A piercing call to genuine conversion — Washer challenges easy-believism and calls young people to examine whether they have truly been born again.",
  },
  {
    id: "sv4",
    title: "The Reason for God (Google Talk)",
    preacher: "Tim Keller",
    videoId: "Kxup3OS5ZhQ",
    description: "Keller presents the intellectual case for Christianity to a secular audience at Google, addressing objections and laying out the logic of the gospel.",
  },
  {
    id: "sv5",
    title: "Radical — Passion 2011",
    preacher: "David Platt",
    videoId: "yhiHSf_L6_E",
    description: "Platt's landmark message challenging American Christians to consider what a fully surrendered response to the gospel actually looks like in practice.",
  },
  {
    id: "sv6",
    title: "Supremacy of Christ and Truth",
    preacher: "Voddie Baucham",
    videoId: "by8ykv7-A3c",
    description: "Baucham makes the exclusive claim of Christ in a pluralistic age — why Jesus alone is the way, the truth, and the life, and why that is good news.",
  },
];

type Tab = "gospel" | "theology" | "voices" | "videos";

export default function SalvationPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_salvation_tab", "gospel");
  const [tab, setTab] = usePersistedState<"gospel" | "prayer" | "faq" | "testimonies">("vine_salvation_tab", "gospel");
  const [step, setStep] = useState(0);
  const [prayed, setPrayed] = useState(() => {
    try { return localStorage.getItem("vine_salvation_prayed") === "true"; } catch { return false; }
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTestimony, setSelectedTestimony] = useState<typeof TESTIMONIES[0] | null>(null);
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_salvation_voice", "luther-s");

  const markPrayed = () => {
    try { localStorage.setItem("vine_salvation_prayed", "true"); } catch {}
    setPrayed(true);
  };

  const voiceItem = VOICES_SAL.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>✝️</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>The Gospel</h1>
          <p style={{ color: MUTED, fontSize: 16 }}>The most important message in the world</p>
        </div>

        {/* Top-level tab bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {(["gospel", "theology", "voices", "videos"] as const).map(t => (
            <button type="button" key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "gospel" ? "The Good News" : t === "theology" ? "Theology" : t === "voices" ? "Voices" : "Videos"}
            </button>
          ))}
        </div>

        {/* GOSPEL TAB */}
        {activeTab === "gospel" && (
          <div>
            {/* Inner tab bar */}
            <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
              {([["gospel", "The Good News"], ["prayer", "Pray Now"], ["faq", "Common Questions"], ["testimonies", "Stories"]] as const).map(([t, label]) => (
                <button type="button" key={t} onClick={() => setTab(t)}
                  style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: tab === t ? GREEN : "#6A6A88", borderBottom: `2px solid ${tab === t ? GREEN : "transparent"}`, marginBottom: -1 }}>
                  {label}
                </button>
              ))}
            </div>

            {tab === "gospel" && (
              <div style={{ maxWidth: 720, margin: "0 auto" }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 28, justifyContent: "center" }}>
                  {STEPS.map((s, i) => (
                    <button type="button" key={s.id} onClick={() => setStep(i)}
                      style={{ width: 36, height: 36, borderRadius: "50%", border: `2px solid ${step === i ? s.color : "#2A2A40"}`, background: step === i ? `${s.color}20` : CARD, color: step === i ? s.color : "#4A4A68", fontWeight: 800, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>
                      {s.number}
                    </button>
                  ))}
                </div>
                {(() => {
                  const s = STEPS[step];
                  return (
                    <div style={{ background: CARD, borderRadius: 20, padding: 32, border: `1px solid ${s.color}30`, marginBottom: 20 }}>
                      <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 20 }}>
                        <div style={{ width: 56, height: 56, borderRadius: 16, background: `${s.color}20`, border: `2px solid ${s.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>{s.icon}</div>
                        <div>
                          <span style={{ fontSize: 12, color: s.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Step {s.number} of {STEPS.length}</span>
                          <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 4 }}>{s.title}</h2>
                        </div>
                      </div>
                      <p style={{ fontSize: 15, color: MUTED, marginBottom: 16, fontStyle: "italic" }}>{s.summary}</p>
                      {s.content.split("\n\n").map((p, i) => (
                        <p key={i} style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 16 }}>{p}</p>
                      ))}
                      <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, borderLeft: `3px solid ${s.color}`, marginTop: 8 }}>
                        <p style={{ fontSize: 15, color: "#C0C0D8", fontStyle: "italic" }}>&ldquo;{s.verse}&rdquo;</p>
                        <p style={{ fontSize: 13, color: s.color, marginTop: 8, fontWeight: 700 }}>&mdash; {s.verseRef}</p>
                      </div>
                    </div>
                  );
                })()}
                <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                  {step > 0 && (
                    <button type="button" onClick={() => setStep(s => s - 1)}
                      style={{ padding: "12px 24px", borderRadius: 12, border: `1px solid #2A2A40`, background: CARD, color: MUTED, cursor: "pointer", fontWeight: 700 }}>
                      &larr; Previous
                    </button>
                  )}
                  {step < STEPS.length - 1 ? (
                    <button type="button" onClick={() => setStep(s => s + 1)}
                      style={{ padding: "12px 28px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #3a7d56, #00CC6A)", color: BG, cursor: "pointer", fontWeight: 800, fontSize: 15 }}>
                      Next &rarr;
                    </button>
                  ) : (
                    <button type="button" onClick={() => setTab("prayer")}
                      style={{ padding: "12px 28px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #3a7d56, #00CC6A)", color: BG, cursor: "pointer", fontWeight: 800, fontSize: 15 }}>
                      I&rsquo;m Ready to Respond &rarr;
                    </button>
                  )}
                </div>
              </div>
            )}

            {tab === "prayer" && (
              <div style={{ maxWidth: 660, margin: "0 auto" }}>
                {!prayed ? (
                  <div style={{ background: CARD, borderRadius: 20, padding: 32, border: `1px solid ${BORDER}` }}>
                    <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12, textAlign: "center" }}>A Prayer of Surrender</h2>
                    <p style={{ fontSize: 14, color: MUTED, textAlign: "center", marginBottom: 24 }}>There are no magic words. Speak from your heart. This is a guide.</p>
                    <div style={{ background: "#0D0D1A", borderRadius: 16, padding: 24, lineHeight: 2, fontSize: 16, color: "#C0C0D8", border: `1px solid #2A2A40`, marginBottom: 24 }}>
                      <p style={{ marginBottom: 12 }}><em>&ldquo;Lord Jesus,</em></p>
                      <p style={{ marginBottom: 12 }}><em>I know that I am a sinner and that I cannot save myself. I believe that You are the Son of God, that You died on the cross for my sins, and that You rose from the dead.</em></p>
                      <p style={{ marginBottom: 12 }}><em>Right now I turn away from my sin and I turn to You. I ask You to forgive me of everything I&rsquo;ve done wrong, and I receive Your forgiveness by faith.</em></p>
                      <p style={{ marginBottom: 12 }}><em>Come into my life. Be my Lord. Be my Savior. I want to follow You for the rest of my life.</em></p>
                      <p><em>In Jesus&rsquo; name, Amen.&rdquo;</em></p>
                    </div>
                    <button type="button" onClick={markPrayed}
                      style={{ width: "100%", padding: "16px", borderRadius: 14, border: "none", background: "linear-gradient(135deg, #3a7d56, #00CC6A)", color: BG, cursor: "pointer", fontWeight: 800, fontSize: 16 }}>
                      I prayed this prayer
                    </button>
                  </div>
                ) : (
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                    <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 12, color: GREEN }}>Welcome to the family!</h2>
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
                        <div key={i} style={{ background: CARD, borderRadius: 12, padding: "14px 18px", border: `1px solid ${BORDER}`, display: "flex", gap: 14, textAlign: "left" }}>
                          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12, color: BG, flexShrink: 0 }}>{i + 1}</div>
                          <div>
                            <p style={{ fontWeight: 700, fontSize: 14 }}>{n.step}</p>
                            <p style={{ fontSize: 13, color: MUTED }}>{n.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {tab === "faq" && (
              <div style={{ maxWidth: 720, margin: "0 auto" }}>
                {FAQS.map((faq, i) => (
                  <div role="button" tabIndex={0} key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}
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

            {tab === "testimonies" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
                {TESTIMONIES.map(t => (
                  <div role="button" tabIndex={0} key={t.name} onClick={() => setSelectedTestimony(t)}
                    style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 22, cursor: "pointer", transition: "border-color 0.2s, transform 0.15s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = GREEN; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = BORDER; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}>
                    <p style={{ fontSize: 15, fontWeight: 700, marginBottom: 10, color: GREEN }}>{t.name}</p>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{t.story}</p>
                    <p style={{ fontSize: 12, color: "#6A6A88", marginTop: 12, fontStyle: "italic" }}>&ldquo;{t.verse.slice(0, 50)}&hellip;&rdquo; &mdash; {t.verseRef}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* THEOLOGY TAB */}
        {activeTab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {SALVATION_THEOLOGY.map(entry => (
              <div key={entry.id} style={{ background: CARD, borderRadius: 18, padding: 28, border: `1px solid ${BORDER}` }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 6, color: TEXT }}>{entry.title}</h2>
                <p style={{ fontSize: 14, color: GREEN, fontStyle: "italic", marginBottom: 14 }}>&ldquo;{entry.scripture}&rdquo; &mdash; {entry.scriptureRef}</p>
                <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 16 }}>{entry.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {entry.denomViewpoints.map(dv => (
                    <span key={dv.label} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: `${dv.color}20`, color: dv.color, border: `1px solid ${dv.color}40`, fontWeight: 700 }}>{dv.label}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VOICES TAB */}
        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_SAL.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? PURPLE : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${PURPLE}1A`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Historical Contribution</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 24 }}>
            {SALVATION_VIDEOS.map(v => (
              <div key={v.id} style={{ background: CARD, borderRadius: 18, padding: 20, border: `1px solid ${BORDER}` }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
                  <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: `${PURPLE}30`, color: "#A080FF", border: `1px solid ${PURPLE}50`, fontWeight: 700 }}>{v.preacher}</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8, color: TEXT }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, marginBottom: 14 }}>{v.description}</p>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", borderRadius: 8 }}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedTestimony && (
        <div aria-hidden="true" onClick={() => setSelectedTestimony(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div role="dialog" aria-modal="true" onClick={e => e.stopPropagation()} style={{ background: CARD, borderRadius: 20, padding: 32, maxWidth: 560, width: "100%", border: "1px solid #2A2A40" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: GREEN }}>{selectedTestimony.name}</h2>
              <button type="button" onClick={() => setSelectedTestimony(null)} style={{ background: "none", border: "none", color: "#6A6A88", fontSize: 22, cursor: "pointer" }}>×</button>
            </div>
            <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 20 }}>{selectedTestimony.story}</p>
            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 14, borderLeft: `3px solid ${GREEN}` }}>
              <p style={{ fontSize: 14, color: "#C0C0D8", fontStyle: "italic" }}>&ldquo;{selectedTestimony.verse}&rdquo;</p>
              <p style={{ fontSize: 12, color: GREEN, marginTop: 8 }}>&mdash; {selectedTestimony.verseRef}</p>
            </div>
          </div>
        </div>
      )}
      </main>
      <Footer />
    </div>
  );
}
