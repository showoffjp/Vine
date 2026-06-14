"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const BLUE = "#3B82F6";

type Tab = "Why Church Matters" | "What to Look For" | "Red Flags to Avoid" | "Questions to Ask" | "When You Visit" | "Church Traditions";
const TABS: Tab[] = ["Why Church Matters", "What to Look For", "Red Flags to Avoid", "Questions to Ask", "When You Visit", "Church Traditions"];

const whyChurchSections = [
  {
    title: "The Church Is Not Optional",
    body: "The New Testament never envisions the Christian life as a solo spiritual journey. The epistles are written to communities. The imagery is corporate: a body with many members, a building with many stones, a vine with many branches, a flock with a shepherd. Hebrews 10:25 warns: &ldquo;not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near.&rdquo; The Christian life is designed to be lived in community &mdash; not because churches are perfect, but because Christ builds his church (Matt 16:18) and promises to be present where two or three gather in his name.",
  },
  {
    title: "What the Church Gives You That Nothing Else Can",
    body: "A healthy local church provides things that no app, podcast, or online community can fully substitute: the Sacraments (Baptism and the Lord&rsquo;s Supper); the discipline and accountability of a covenant community; pastors who know your name and can shepherd you through crises; the chance to serve and be served; the embodied experience of worship together; and the intergenerational family of God that expands your world beyond your demographic. These are not extras &mdash; they are the regular means of grace that God has appointed for his people.",
  },
  {
    title: "The Church Does Not Have to Be Perfect to Be Your Church",
    body: "Many people are waiting for a church that doesn&rsquo;t disappoint them before they commit. They will wait forever. Every church is a community of sinners in process. The question is not &ldquo;is this church perfect?&rdquo; but &ldquo;is this church faithful to the gospel, are the leaders accountable, and is the community genuinely growing in Christ?&rdquo; You will find your church not when you find one without flaws but when you find one where you can love, serve, and be known &mdash; and stay.",
  },
];

const whatToLookFor = [
  { title: "The Word of God Preached Faithfully", body: "The primary mark of a healthy church is that the Bible is opened and preached. Expository preaching &mdash; working through books of the Bible, explaining what the text says and applying it to life &mdash; is the gold standard. A church that rarely opens the Bible, or treats Scripture as a springboard for personal stories and life advice, has lost its foundation. Ask: Does the sermon arise from the text? Is the gospel clearly present? Is the preacher accountable to Scripture or to his own opinions?" },
  { title: "The Sacraments Rightly Administered", body: "Baptism and the Lord&rsquo;s Supper (Communion) are not optional ceremonies. They are the visible word &mdash; enacted proclamations of the gospel. Baptism declares: I am united with Christ in death and resurrection. The Lord&rsquo;s Supper declares: I am fed by Christ, nourished in community, and waiting for his return. A church that takes these seriously and administers them with theological intentionality is a church that takes the gospel seriously." },
  { title: "Leadership That Is Accountable and Qualified", body: "1 Timothy 3 and Titus 1 give detailed qualifications for elders and deacons: above reproach, faithful in marriage, self-controlled, hospitable, able to teach, not a lover of money, managing household well. These qualities point to character and competence over charisma and platform. Ask: Are the pastors accountable to a board, a denomination, or an outside body? Is there a clear process for addressing pastoral sin or failure? Is financial information transparent to the congregation?" },
  { title: "Genuine Community and Pastoral Care", body: "A church where nobody knows your name after three months of attendance is not a community &mdash; it is a performance. Genuine community involves small groups where people share life, accountability, prayer, and service together. Pastoral care means that when you are in the hospital, grieving, or in crisis, someone from the church shows up. Ask whether the church has a structure for this &mdash; not just a services-on-Sunday model but a genuinely caring community that extends through the week." },
  { title: "A Culture of Grace and Truth Together", body: "Healthy churches hold together what unhealthy churches separate. Some churches are heavy on grace (everyone is welcome, nothing is ever said to challenge) and light on truth (never confronting sin, never calling to repentance). Others are heavy on truth (high standards, accountability) and light on grace (harsh, unforgiving, excluding). Healthy churches are both &mdash; like Jesus: full of grace AND truth (John 1:14). The gospel is this: we are more sinful than we ever dared believe AND more loved than we ever dared hope. Churches that hold both create the conditions for real transformation." },
];

const redFlags = [
  { flag: "The pastor is unchallengeable", detail: "If questioning the pastor is treated as rebellion, if elders exist only on paper, if financial decisions are made unilaterally, if there is no accountability structure &mdash; these are serious warning signs. Healthy leadership welcomes accountability." },
  { flag: "Scripture is consistently twisted to serve the leader's agenda", detail: "Proof-texting, taking verses wildly out of context, using the Bible to shame or control rather than to illuminate and free &mdash; these are signs that the Bible is being treated as a tool rather than an authority." },
  { flag: "Unhealthy dependence on the leader is cultivated", detail: "If members are discouraged from thinking independently, if outside resources and voices are dismissed, if leaving the church is treated as spiritual betrayal &mdash; these are cult-adjacent patterns that should prompt serious concern." },
  { flag: "The gospel is absent or optional", detail: "If you attend for months and never hear a clear presentation of Jesus' death and resurrection as the basis for forgiveness and new life &mdash; if the message is primarily self-help, political, or prosperity &mdash; you are not hearing the gospel." },
  { flag: "Repentance is absent", detail: "A church that never calls people to repentance, where sin is minimized or ignored, where everyone is affirmed regardless of behavior &mdash; is not taking the New Testament seriously. Love tells the truth." },
  { flag: "There is no process for addressing member sin or pastoral failure", detail: "Matthew 18 gives a clear process for conflict resolution and church discipline. A church with no such process &mdash; or where the process exists only to protect leadership &mdash; is not taking Jesus's instructions seriously." },
];

const questions = [
  "What does this church believe about the Bible? Is it authoritative, inspired, and sufficient?",
  "How is leadership structured? Who holds the pastor(s) accountable? Is there a board or elders?",
  "Is financial information transparent and available to the congregation?",
  "What is the church's stance on the gospel &mdash; on salvation by grace through faith in Christ alone?",
  "How does the church practice church discipline? Is Matthew 18 applied?",
  "Are there small groups or other structures for genuine community beyond Sunday?",
  "What is the church's process for pastoral care? What happens when a member is in crisis?",
  "Does this church have connections to a denomination or network of churches? What accountability exists outside the local congregation?",
  "How does the church handle theological disagreement or conflict?",
  "What is the church's vision for mission &mdash; locally and globally?",
];

const traditions = [
  { name: "Reformed / Presbyterian", accent: PURPLE, description: "Emphasizes the sovereignty of God, salvation by grace alone through faith alone, covenant theology, and historically practices infant baptism. Strong emphasis on preaching and the Westminster Standards or Three Forms of Unity. Examples: PCA, OPC, RPCNA." },
  { name: "Baptist", accent: BLUE, description: "Emphasizes believers' baptism by immersion, the autonomy of the local church, and the priesthood of all believers. Ranges from Calvinist (Reformed Baptist, Acts 29) to Arminian (SBC, Free Will Baptist). Strong commitment to Scripture and evangelism." },
  { name: "Anglican / Episcopal", accent: GREEN, description: "Maintains liturgical worship rooted in the Book of Common Prayer, episcopal church governance (bishops, priests, deacons), and a via media (middle way) between Catholic and Reformed theology. Examples: ACNA, TEC." },
  { name: "Lutheran", accent: GOLD, description: "Emphasizes justification by grace alone through faith alone (Luther's core insight), liturgical worship, and the real presence of Christ in the Lord's Supper. Baptizes infants. Examples: LCMS, WELS, ELCA." },
  { name: "Methodist / Wesleyan", accent: "#10B981", description: "Emphasizes the grace of God available to all, entire sanctification (entire consecration of the will to God), social holiness, and class meetings for accountability. Examples: UMC, Free Methodist, Wesleyan Church." },
  { name: "Pentecostal / Charismatic", accent: "#EF4444", description: "Emphasizes the continuing gifts of the Spirit (speaking in tongues, prophecy, healing), vibrant expressive worship, and personal encounter with the Holy Spirit. Examples: Assemblies of God, IPHC, and many non-denominational charismatic churches." },
];

export default function FindChurchPage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Why Church Matters");

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #0A0A18 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: 13, color: GREEN, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Find a Church</div>
            <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800, color: TEXT, lineHeight: 1.15, marginBottom: 16 }}>
              Finding a Church You Can Call Home
            </h1>
            <p style={{ fontSize: 17, color: MUTED, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              A guide to finding a healthy, Bible-teaching church &mdash; what to look for, red flags to avoid, and how to evaluate what you find. &ldquo;Christ loved the church and gave himself up for her.&rdquo; &mdash; Eph 5:25
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, overflowX: "auto" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", gap: 0, padding: "0 24px" }}>
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ padding: "13px 16px", background: "none", border: "none", borderBottom: activeTab === tab ? `2px solid ${GREEN}` : "2px solid transparent", color: activeTab === tab ? GREEN : MUTED, fontWeight: activeTab === tab ? 700 : 400, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>
          {activeTab === "Why Church Matters" && (
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 32 }}>Why the Local Church Matters</h2>
              {whyChurchSections.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: TEXT, marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.body }} />
                </div>
              ))}
            </div>
          )}

          {activeTab === "What to Look For" && (
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 32 }}>Marks of a Healthy Church</h2>
              {whatToLookFor.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: TEXT, marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.body }} />
                </div>
              ))}
            </div>
          )}

          {activeTab === "Red Flags to Avoid" && (
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8 }}>Warning Signs</h2>
              <p style={{ color: MUTED, marginBottom: 32, lineHeight: 1.6 }}>These patterns are not reasons to give up on church &mdash; they are reasons to look for a different church.</p>
              {redFlags.map((f, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid #E11D4840`, borderRadius: 14, padding: "20px 24px", marginBottom: 16, display: "flex", gap: 16 }}>
                  <div style={{ minWidth: 28, height: 28, borderRadius: "50%", background: "#E11D4820", display: "flex", alignItems: "center", justifyContent: "center", color: "#E11D48", fontWeight: 800, fontSize: 14, flexShrink: 0 }}>!</div>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: TEXT, marginBottom: 6 }}>{f.flag}</h3>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Questions to Ask" && (
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8 }}>Questions to Ask a Church</h2>
              <p style={{ color: MUTED, marginBottom: 32, lineHeight: 1.6 }}>Ask these questions of the pastor, elders, or welcome team. How they respond &mdash; both the content and the tone &mdash; will tell you a great deal.</p>
              <div style={{ display: "grid", gap: 12 }}>
                {questions.map((q, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "16px 20px", display: "flex", gap: 14 }}>
                    <div style={{ minWidth: 28, height: 28, borderRadius: "50%", background: `${BLUE}20`, border: `1px solid ${BLUE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: BLUE, fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{i + 1}</div>
                    <p style={{ color: TEXT, lineHeight: 1.6, margin: 0, paddingTop: 3 }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "When You Visit" && (
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8 }}>How to Evaluate a Church Visit</h2>
              <p style={{ color: MUTED, marginBottom: 32, lineHeight: 1.6 }}>What to notice on your first visit &mdash; and how many visits it takes to know.</p>
              {[
                { title: "Give It at Least Three Visits", body: "First impressions are unreliable. A visiting preacher, a bad tech day, a particularly warm or cold welcome on one Sunday &mdash; these distort your read. Commit to at least three visits before drawing conclusions. The third visit, when the novelty has worn off and you are watching more carefully, is often the most revealing." },
                { title: "Watch How People Treat Strangers", body: "Do people acknowledge you, or does everyone already seem to know everyone else and there is no room? Is there a genuine welcome team, or is the Sunday greeting perfunctory? Are people lingering after the service or rushing for their cars? The culture of a church is most visible in how it treats those who are not yet part of it." },
                { title: "Listen to the Sermon Carefully", body: "Ask yourself: Was the text opened? Did the sermon explain what the passage means? Was the gospel present? Were people called to respond to what God has said &mdash; or called to respond to the preacher&rsquo;s personality? A good sermon always has a clear main point that comes from the text, applied to real life, and pointing to Christ." },
                { title: "Notice the Worship", body: "Worship style (traditional, contemporary, liturgical) is a preference question, not a right or wrong question. What matters is whether the words being sung are true, whether the congregation is genuinely engaged, and whether the service is ordered to serve God rather than impress the audience." },
                { title: "Ask to Meet a Pastor or Elder", body: "Request a meeting with one of the church&rsquo;s pastors or elders. This is entirely normal and healthy churches welcome it. How they respond to your questions, their knowledge of Scripture, and their genuine interest in you as a person will tell you much about the culture they are creating." },
              ].map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: TEXT, marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.body }} />
                </div>
              ))}
            </div>
          )}

          {activeTab === "Church Traditions" && (
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8 }}>The Major Protestant Traditions</h2>
              <p style={{ color: MUTED, marginBottom: 32, lineHeight: 1.6 }}>Understanding the landscape of Christian traditions helps you find a church whose theology and worship align with your convictions.</p>
              <div style={{ display: "grid", gap: 20 }}>
                {traditions.map((t, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${t.accent}40`, borderRadius: 14, padding: "22px 26px" }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: t.accent, marginBottom: 8 }}>{t.name}</div>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{t.description}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 32, background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 14, padding: "24px 28px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: GOLD, marginBottom: 10 }}>On Denominations</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Denominations exist because Christians have disagreed on secondary matters &mdash; baptism, church governance, spiritual gifts, and worship style &mdash; while agreeing on the essentials: the Trinity, the incarnation, the death and resurrection of Christ, and salvation by grace through faith. The existence of denominations is not a sign that Christianity has failed &mdash; it is a sign that Christians take theology seriously enough to disagree about it. On the essentials, the church is one. On secondary matters, there is wisdom in finding a tradition whose convictions you can hold with integrity." }} />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
