"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";


const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

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

const BAPTISM_VIEWS = [
  {
    id: "believers",
    tradition: "Believer's Baptism",
    icon: "🙏",
    position: "An outward sign of an inward work. Baptism follows a credible profession of faith and is administered by immersion as a public testimony of death to sin and new life in Christ.",
    scripture: ["Matthew 28:19", "Acts 2:38", "Romans 6:3-4"],
    practice: "Administered to adults and older children who can personally profess saving faith. Mode is typically immersion, considered most symbolic of burial and resurrection.",
    who: "Adults and older children with credible faith",
    color: GREEN,
  },
  {
    id: "paedo",
    tradition: "Infant Baptism / Paedobaptism",
    icon: "👶",
    position: "The covenant sign applied to covenant children. As circumcision marked membership in the Abrahamic covenant, baptism marks membership in the new covenant community.",
    scripture: ["Genesis 17", "Colossians 2:11-12", "Acts 16:15", "Acts 16:33"],
    practice: "Administered to infants of believing parents as a covenantal sign. Sprinkling or pouring are common modes. Followed by catechesis and confirmation.",
    who: "Infants of believing parents",
    color: PURPLE,
  },
  {
    id: "regeneration",
    tradition: "Baptismal Regeneration",
    icon: "✝️",
    position: "The waters of baptism wash away original sin and convey the grace of regeneration. Baptism is not merely a symbol but an instrument of the new birth.",
    scripture: ["John 3:5", "Titus 3:5", "Acts 2:38", "1 Peter 3:21"],
    practice: "Administered as close to birth as possible for infants. For adult converts, administered after instruction (RCIA in Catholic context). Mode varies by tradition.",
    who: "Infants and adult converts",
    color: "#F59E0B",
  },
  {
    id: "confirmation",
    tradition: "Confirmation Theology",
    icon: "🕊️",
    position: "Baptism in infancy is the beginning of a lifelong journey of faith, completed by confirmation at the age of understanding when the candidate personally owns their faith.",
    scripture: ["Acts 8:14-17", "Hebrews 6:1-2"],
    practice: "Infant baptism (sprinkling) followed by years of catechesis, then personal confirmation at adolescence. Confirmation is seen as completing or ratifying the baptismal grace.",
    who: "Infants (baptism) + adolescents (confirmation)",
    color: "#4FC3F7",
  },
  {
    id: "mode",
    tradition: "Mode Debate: Immersion vs. Sprinkling",
    icon: "🌊",
    position: "Does the physical mode of baptism matter? The Greek word baptizo means to immerse or dip, yet church history shows both immersion and sprinkling practiced from earliest centuries.",
    scripture: ["Matthew 3:16", "Romans 6:3-4", "Ezekiel 36:25", "Acts 2:17"],
    practice: "Evangelical and Baptist traditions insist on immersion as both the proper translation of baptizo and the fullest symbolic representation of Romans 6. Paedobaptist traditions argue mode is not specified and sprinkling is sufficient.",
    who: "Context-dependent by tradition",
    color: MUTED,
  },
];

const VOICES_BAP = [
  {
    id: "calvin-b",
    name: "John Calvin",
    era: "1509-1564",
    context: "Institutes of the Christian Religion, Book IV, Chapters 14-16; cornerstone of Reformed covenant theology on baptism",
    bio: "Calvin developed the covenant theology framework that undergirds paedobaptism to this day. His argument is essentially structural: in the Abrahamic covenant, the sign of membership was circumcision, applied to infants. In the new covenant, the sign is baptism. Since the new covenant is more inclusive, not less, than the Abrahamic covenant, it would be strange to exclude covenant children from its sign. Calvin was careful to insist that baptism does not save — it is a sign and seal of the covenant promise, not its cause. But he was equally insistent that the sign belongs to the children of the covenant, just as circumcision did.",
    quote: "Baptism is the sign of the initiation by which we are received into the society of the church, in order that, engrafted in Christ, we may be reckoned among God's children.",
    contribution: "Established the covenant theology framework for paedobaptism that continues to shape Presbyterian, Reformed, and Anglican practice worldwide. His Institutes remain the most thorough defense of infant baptism in Protestant literature.",
  },
  {
    id: "barth-b",
    name: "Karl Barth",
    era: "1886-1968",
    context: "Church Dogmatics IV/4 (posthumously published); the great Reformed theologian who broke with paedobaptism",
    bio: "Barth's late reversal on baptism is one of the most dramatic theological turns of the 20th century. Though trained in Reformed theology and deeply committed to covenant theology throughout his career, his final volume of Church Dogmatics argues that baptism is properly the human response of gratitude and obedience to what God has already done in Christ. It is not itself a means of grace but the believer's public answer to divine grace. This repositioning effectively aligns Barth with the Baptist or believer's baptism tradition — though from a very different theological starting point. His son Markus Barth developed this line further.",
    quote: "Baptism is the first step of the Christian life. It is the act of obedience in which a man publicly confesses the faith which has been given to him.",
    contribution: "Challenged the Reformed consensus on baptism from within, generating a significant theological debate about the relationship between divine grace and human response that continues in contemporary systematic theology.",
  },
  {
    id: "bridge-b",
    name: "Donald Bridge & David Phypers",
    era: "1970s-1980s",
    context: "The Water That Divides (1977); the standard fair-handed overview of the baptism debate from a conservative evangelical perspective",
    bio: "Bridge and Phypers produced what remains the most balanced evangelical treatment of the baptism debate. Rather than advocating for one position, The Water That Divides carefully presents both the paedobaptist and credobaptist cases — the strongest arguments on each side, the weaknesses of each, and the historical reasons the church has never achieved consensus. Their conclusion is that the debate is genuinely difficult, that both sides have strong biblical warrant, and that charity between traditions is essential. The book is often assigned in seminary baptism courses precisely because it resists the polemical tone that typically characterizes writings on the subject.",
    quote: "The one thing the church has been unable to agree on through its history is not whether baptism matters but what it does and who should receive it.",
    contribution: "Provided the definitive even-handed overview of the baptism debate for evangelical audiences, modelling the charity and precision that the subject demands.",
  },
  {
    id: "5nvVVcYD-0w",
    name: "Tom Schreiner",
    era: "b. 1954",
    context: "Believer's Baptism: Sign of the New Covenant in Christ (2006, co-edited with Shawn Wright); Professor of NT at Southern Seminary",
    bio: "Schreiner is the leading contemporary scholarly defender of believer's baptism (credobaptism). His edited volume Believer's Baptism is the most thorough academic case for the Baptist position in print, bringing together exegesis of the key New Testament texts, historical theology, and constructive Baptist ecclesiology. Schreiner argues that in the New Testament, baptism invariably follows faith — it is never administered to those who have not personally confessed Christ. The move from circumcision to baptism in covenant theology, he argues, actually supports believer's baptism: circumcision was administered to male physical descendants, while baptism is administered to spiritual descendants, i.e., believers.",
    quote: "Baptism in the New Testament is always connected with the response of faith. It is the outward sign of an inward reality that has already occurred.",
    contribution: "Provided the most rigorous contemporary scholarly defense of credobaptism, engaging covenant theology on its own terms and making the case that the new covenant structure actually requires believer's baptism.",
  },
  {
    id: "chapell-b",
    name: "Bryan Chapell",
    era: "b. 1952",
    context: "Why Do We Baptize Infants? (2006); President Emeritus of Covenant Seminary; leading PCA pastor-theologian",
    bio: "Chapell's short book Why Do We Baptize Infants? is the most accessible and pastorally warm defense of paedobaptism available. Writing for laypeople in Presbyterian churches who are confused by the practice, Chapell explains the covenant theology framework in plain language, addresses the most common objections, and situates infant baptism within a robust account of God's grace that runs from Abraham to the present. He is careful to distinguish the sign from what it signifies: infant baptism does not make a child a Christian, but it does incorporate the child into the covenant community and places them under the promises and obligations of the covenant.",
    quote: "We baptize our infants not because we believe they are already regenerate, but because they are children of the covenant community and the promises of God extend to them.",
    contribution: "Made the paedobaptist case accessible to ordinary Presbyterian laypeople, helping a generation of Reformed Christians understand and articulate their own practice.",
  },
];

const BAPTISM_VIDEOS = [
  {
    id: "bv1",
    title: "The Reason for God",
    preacher: "Tim Keller",
    videoId: "f7RJATbobik",
    description: "Keller presents the intellectual and spiritual case for Christian faith to a secular audience at Google — grounding baptism and the sacraments in a robust theology of grace.",
  },
  {
    id: "bv2",
    title: "How to Be Born Again",
    preacher: "Billy Graham",
    videoId: "zUKzVFQn4Tc",
    description: "Graham's classic message on the new birth — the spiritual reality that baptism publicly declares and celebrates.",
  },
  {
    id: "bv3",
    title: "The Holiness of God",
    preacher: "R.C. Sproul",
    videoId: "3Dv4-n6OYGI",
    description: "Sproul on the holiness that makes baptism necessary — why an encounter with the holy God always produces radical response.",
  },
  {
    id: "bv4",
    title: "Forgotten God: Theology of Holy Spirit",
    preacher: "Francis Chan",
    videoId: "OqwbFGoRYVo",
    description: "Chan explores the Person of the Holy Spirit — whose work in regeneration baptism proclaims to the watching world.",
  },
  {
    id: "bv5",
    title: "The Prodigal Sons",
    preacher: "Tim Keller",
    videoId: "npEDqbE6faE",
    description: "Keller unpacks the parable that captures what baptism declares: a son who was dead has come home, has been clothed, and is welcomed to the table.",
  },
  {
    id: "bv6",
    title: "Supremacy of Christ and Truth",
    preacher: "Voddie Baucham",
    videoId: "mC-zw0zCCtg",
    description: "Baucham on why baptism in the name of Jesus is not one option among many but the only name under heaven given by which we must be saved.",
  },
];

type Tab = "meaning" | "views" | "voices" | "videos" | "journal";

export default function BaptismPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_baptism_tab", "meaning");
  const [view, setView] = usePersistedState<"overview" | "methods" | "testimonies" | "faq">("vine_baptism_view", "overview");
  const [selectedTestimony, setSelectedTestimony] = useState<BaptismTestimony | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [decided, setDecided] = useState(() => {
    try { return localStorage.getItem("vine_baptism_decided") === "true"; } catch { return false; }
  });
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_baptism_voice", "calvin-b");

  const markDecided = () => {
    try { localStorage.setItem("vine_baptism_decided", "true"); } catch {}
    setDecided(true);
  };

  const voiceItem = VOICES_BAP.find(v => v.id === selectedVoice)!;

  type BaptismJE = { id: string; date: string; conviction: string; question: string; step: string };
  const [baptismJournal, setBaptismJournal] = useState<BaptismJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_baptj_entries") ?? "[]"); } catch { return []; } });
  const [jConviction, setJConviction] = useState("");
  const [jQuestion, setJQuestion] = useState("");
  const [jStep, setJStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_baptj_entries", JSON.stringify(baptismJournal)); } catch {} }, [baptismJournal]);
  function saveBaptismEntry() {
    if (!jConviction.trim() && !jQuestion.trim()) return;
    setBaptismJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), conviction: jConviction, question: jQuestion, step: jStep }, ...prev]);
    setJConviction(""); setJQuestion(""); setJStep("");
  }
  function deleteBaptismEntry(id: string) { setBaptismJournal(prev => prev.filter(e => e.id !== id)); }

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>💧</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Baptism Guide</h1>
          <p style={{ color: MUTED, fontSize: 16 }}>Understanding, preparing for, and celebrating baptism</p>
        </div>

        {/* Top-level tab bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {(["meaning", "views", "voices", "videos", "journal"] as const).map(t => (
            <button type="button" key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "meaning" ? "Meaning" : t === "views" ? "Views" : t === "voices" ? "Voices" : t === "videos" ? "Videos" : "📓 Journal"}
            </button>
          ))}
        </div>

        {/* MEANING TAB */}
        {activeTab === "meaning" && (
          <div>
            {/* Inner tab bar */}
            <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
              {([["overview", "Overview"], ["methods", "Methods"], ["testimonies", "Testimonies"], ["faq", "FAQ"]] as const).map(([v, label]) => (
                <button type="button" key={v} onClick={() => setView(v)}
                  style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: view === v ? GREEN : "#6A6A88", borderBottom: `2px solid ${view === v ? GREEN : "transparent"}`, marginBottom: -1 }}>
                  {label}
                </button>
              ))}
            </div>

            {view === "overview" && (
              <div style={{ maxWidth: 760, margin: "0 auto" }}>
                <div style={{ background: "linear-gradient(135deg, rgba(58,125,86,0.08), rgba(107,79,187,0.08))", borderRadius: 20, padding: 28, marginBottom: 32, border: "1px solid rgba(58,125,86,0.15)", textAlign: "center" }}>
                  <p style={{ fontSize: 20, color: "#C0C0D8", fontStyle: "italic", lineHeight: 1.7, marginBottom: 12 }}>
                    &ldquo;Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.&rdquo;
                  </p>
                  <p style={{ color: GREEN, fontWeight: 700, fontSize: 14 }}>&mdash; Matthew 28:19</p>
                </div>
                <div style={{ marginBottom: 32 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, color: GREEN }}>What Is Baptism?</h2>
                  <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 16 }}>
                    Baptism is the visible, public rite of entry into the Christian faith and community. It is commanded by Jesus (Matthew 28:19), modeled throughout the New Testament (Acts 2:38, 8:38, 16:33), and practiced by virtually every stream of Christianity across 2,000 years.
                  </p>
                  <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8 }}>
                    The word <em>baptiz&#333;</em> in Greek means to immerse, dip, or wash. Water is used because of its dual significance: cleansing from sin and the death/resurrection imagery of going under and coming back up. Baptism doesn&rsquo;t save &mdash; Christ does &mdash; but baptism is the normal first act of obedience after saving faith.
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { icon: "⚰️", title: "Death to the Old Self", desc: "We identify with Christ's death—the old person of sin is buried. Baptism is a funeral for the old life (Romans 6:3)." },
                    { icon: "✝️", title: "Union with Christ", desc: "We are incorporated into Christ's death and resurrection. We belong to him and to his body (Galatians 3:27)." },
                    { icon: "🌱", title: "New Life Begins", desc: "Coming out of the water symbolizes resurrection—we walk in newness of life, with a new identity in Christ (Romans 6:4)." },
                  ].map(item => (
                    <div key={item.title} style={{ background: CARD, borderRadius: 16, padding: 20, border: `1px solid ${BORDER}` }}>
                      <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: TEXT }}>{item.title}</h3>
                      <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 32 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, color: GREEN }}>Ready to Be Baptized?</h2>
                  {[
                    { step: "1", title: "Examine your heart", desc: "Baptism follows genuine saving faith. Ask: Have I repented of my sins? Do I believe Jesus is Lord and Savior? Have I received him as my own?" },
                    { step: "2", title: "Talk to your pastor", desc: "Let your church family know you're ready. Many churches have a brief baptism preparation class or conversation to walk through the meaning and logistics." },
                    { step: "3", title: "Prepare your testimony", desc: "Before or at baptism, many churches invite you to share briefly: what your life was like before Christ, how you came to faith, and what difference he has made." },
                    { step: "4", title: "Invite your people", desc: "Baptism is a celebration. Invite family, friends—including those who don't yet believe. It's an evangelistic moment." },
                    { step: "5", title: "Step into the water", desc: "It's normal to feel nervous and joyful. The ceremony is simple. The moment is sacred." },
                  ].map(s => (
                    <div key={s.step} style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14, color: BG, flexShrink: 0 }}>{s.step}</div>
                      <div style={{ background: CARD, borderRadius: 12, padding: "14px 18px", flex: 1, border: `1px solid ${BORDER}` }}>
                        <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{s.title}</h4>
                        <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6 }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {!decided ? (
                  <div style={{ background: "linear-gradient(135deg, rgba(58,125,86,0.08), rgba(107,79,187,0.08))", borderRadius: 20, padding: 28, textAlign: "center", border: "1px solid rgba(58,125,86,0.2)" }}>
                    <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Ready to Take the Step?</h3>
                    <p style={{ fontSize: 14, color: MUTED, marginBottom: 20 }}>If you&rsquo;ve decided to be baptized, mark this moment.</p>
                    <button type="button" onClick={markDecided}
                      style={{ padding: "14px 32px", borderRadius: 14, border: "none", background: "linear-gradient(135deg, #3a7d56, #00CC6A)", color: BG, fontWeight: 800, fontSize: 16, cursor: "pointer" }}>
                      Yes, I&rsquo;m Ready to Be Baptized
                    </button>
                  </div>
                ) : (
                  <div style={{ background: "rgba(58,125,86,0.07)", borderRadius: 20, padding: 28, textAlign: "center", border: "1px solid rgba(58,125,86,0.25)" }}>
                    <div style={{ fontSize: 36, marginBottom: 10 }}>🎉</div>
                    <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8, color: GREEN }}>Amazing! Talk to your pastor!</h3>
                    <p style={{ fontSize: 14, color: MUTED }}>Heaven is celebrating this decision. Don&rsquo;t wait &mdash; reach out to your church this week.</p>
                  </div>
                )}
              </div>
            )}

            {view === "methods" && (
              <div style={{ maxWidth: 760, margin: "0 auto" }}>
                <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, marginBottom: 28 }}>
                  Christians have debated the mode of baptism for centuries. Here&rsquo;s a charitable overview of the three main approaches. Note: the form of baptism is secondary to the faith it represents.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {METHODS.map(m => (
                    <div key={m.name} style={{ background: CARD, borderRadius: 18, padding: 24, border: `1px solid ${BORDER}` }}>
                      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                        <span style={{ fontSize: 28 }}>{m.icon}</span>
                        <h3 style={{ fontSize: 20, fontWeight: 800, color: TEXT }}>{m.name}</h3>
                      </div>
                      <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, marginBottom: 16 }}>{m.description}</p>
                      <div style={{ background: "#0D0D1A", borderRadius: 10, padding: 14, marginBottom: 16, borderLeft: `3px solid ${PURPLE}` }}>
                        <p style={{ fontSize: 13, color: "#C0C0D8", fontStyle: "italic", lineHeight: 1.6 }}>{m.scriptural}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: 12, fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Common in</p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                          {m.traditions.map(t => <span key={t} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 8, background: BORDER, color: "#D0D0E8" }}>{t}</span>)}
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
                    <div role="button" tabIndex={0} key={t.id} onClick={() => setSelectedTestimony(t)}
                      style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 22, cursor: "pointer", transition: "border-color 0.2s, transform 0.15s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = GREEN; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = BORDER; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}>
                      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                        <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #3a7d5630, #6B4FBB30)", border: "1px solid #2A2A40", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>💧</div>
                        <div>
                          <p style={{ fontWeight: 700, color: TEXT }}>{t.name}</p>
                          <p style={{ fontSize: 12, color: "#6A6A88" }}>{t.location} &middot; {t.method}</p>
                        </div>
                      </div>
                      <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{t.story}</p>
                      <p style={{ fontSize: 12, color: GREEN, marginTop: 12, fontStyle: "italic" }}>&ldquo;{t.verse.slice(0, 60)}&hellip;&rdquo; &mdash; {t.verseRef}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {view === "faq" && (
              <div style={{ maxWidth: 760, margin: "0 auto" }}>
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
          </div>
        )}

        {/* VIEWS TAB */}
        {activeTab === "views" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {BAPTISM_VIEWS.map(bv => (
              <div key={bv.id} style={{ background: CARD, borderRadius: 18, padding: 28, border: `1px solid ${bv.color}30` }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ fontSize: 28 }}>{bv.icon}</span>
                  <h2 style={{ fontSize: 19, fontWeight: 800, color: TEXT }}>{bv.tradition}</h2>
                </div>
                <p style={{ fontSize: 14, color: bv.color, fontStyle: "italic", marginBottom: 14, fontWeight: 600 }}>&ldquo;{bv.position}&rdquo;</p>
                <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 14 }}>{bv.practice}</p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 12 }}>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Key Scriptures</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {bv.scripture.map(s => <span key={s} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 8, background: `${bv.color}15`, color: bv.color, border: `1px solid ${bv.color}30`, fontWeight: 600 }}>{s}</span>)}
                    </div>
                  </div>
                </div>
                <div style={{ background: `${bv.color}0D`, borderRadius: 8, padding: "8px 14px", display: "inline-block" }}>
                  <span style={{ fontSize: 13, color: bv.color, fontWeight: 700 }}>Administered to: </span>
                  <span style={{ fontSize: 13, color: "#C0C0D8" }}>{bv.who}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VOICES TAB */}
        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_BAP.map(v => (
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
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Contribution to Baptism Theology</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "journal" && (
          <div style={{ maxWidth: 720 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 4 }}>My Baptism Journal</h2>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 20, lineHeight: 1.6 }}>Record your convictions about baptism, questions you&apos;re wrestling with, and steps you&apos;re considering.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div><label style={{ color: MUTED, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 4 }}>Conviction</label><textarea value={jConviction} onChange={e => setJConviction(e.target.value)} placeholder="What do you believe about baptism, and why?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 4 }}>Question</label><textarea value={jQuestion} onChange={e => setJQuestion(e.target.value)} placeholder="What are you still working through?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 4 }}>Next Step</label><textarea value={jStep} onChange={e => setJStep(e.target.value)} placeholder="What will you do with what you&apos;ve learned?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} /></div>
                <button type="button" onClick={saveBaptismEntry} style={{ background: GREEN, color: "#000", border: "none", borderRadius: 8, padding: "11px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer", alignSelf: "flex-start" }}>Save Entry</button>
              </div>
            </div>
            {baptismJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {baptismJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}><span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span><button type="button" onClick={() => deleteBaptismEntry(entry.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button></div>
                    {entry.conviction && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>Conviction</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{entry.conviction}</p></div>}
                    {entry.question && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>Question</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{entry.question}</p></div>}
                    {entry.step && <div><span style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>Next Step</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{entry.step}</p></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 24 }}>
            {BAPTISM_VIDEOS.map(v => (
              <div key={v.id} style={{ background: CARD, borderRadius: 18, padding: 20, border: `1px solid ${BORDER}` }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
                  <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: `${PURPLE}30`, color: "#A080FF", border: `1px solid ${PURPLE}50`, fontWeight: 700 }}>{v.preacher}</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8, color: TEXT }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, marginBottom: 14 }}>{v.description}</p>
                <VideoEmbed videoId={v.videoId} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Testimony Modal */}
      {selectedTestimony && (
        <div aria-hidden="true" onClick={() => setSelectedTestimony(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 100, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "20px", overflowY: "auto" }}>
          <div role="dialog" aria-modal="true" onClick={e => e.stopPropagation()} style={{ background: CARD, borderRadius: 20, padding: 32, maxWidth: 600, width: "100%", border: "1px solid #2A2A40", marginTop: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{selectedTestimony.name}</h2>
                <span style={{ fontSize: 14, color: MUTED }}>{selectedTestimony.location} &middot; {selectedTestimony.method}</span>
              </div>
              <button type="button" onClick={() => setSelectedTestimony(null)} style={{ background: "none", border: "none", color: "#6A6A88", fontSize: 22, cursor: "pointer" }}>×</button>
            </div>
            <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 20 }}>{selectedTestimony.story}</p>
            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, borderLeft: `3px solid ${GREEN}` }}>
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
