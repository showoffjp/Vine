"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "petitions" | "commentators" | "history" | "models" | "videos";

const PETITIONS = [
  {
    line: "Our Father in heaven",
    section: "Address",
    color: "#6B4FBB",
    meaning: "The address is revolutionary. Jesus teaches his disciples to approach God as Father — not a distant deity, not a judge, not an impersonal force, but a Father. The Aramaic Abba carries the intimacy of 'Daddy.' This address is not presumptuousness — it is the inheritance of those who are adopted through Christ (Romans 8:15). 'Our' is equally significant: prayer is not private consumption. You approach God as a member of a family, not alone.",
    application: "Begin prayer by remembering who you are addressing. Not a vending machine. Not a genie. Not a distant god. Your Father, who knows you fully and loves you completely. Let this settle before you say anything else.",
    older: "The ancient Jewish Kaddish prayer opens similarly: 'Magnified and sanctified be his great name in the world.' Jesus was giving his disciples a pattern within the prayer tradition they knew, and radicalizing it with Father.",
  },
  {
    line: "Hallowed be your name",
    section: "Thy Kingdom",
    color: "#3B82F6",
    meaning: "The first petition is not for anything the disciple needs — it is for God's reputation. 'Hallowed' means 'set apart as holy, treated as holy.' This petition says: let your name be recognized for what it actually is — holy, majestic, worthy. This is worship as petition: I am asking you to be known as you truly are.",
    application: "Before asking for anything, worship. Before presenting your agenda, acknowledge his. The Lord's Prayer deliberately reorients the praying person away from self-centeredness by beginning with God's glory rather than our needs.",
    older: "The Kaddish: 'Magnified and sanctified be his great name.' The opening is not accidental — Jewish prayer tradition begins with praise before petition, and Jesus follows this structure.",
  },
  {
    line: "Your kingdom come, your will be done, on earth as it is in heaven",
    section: "Thy Kingdom",
    color: "#2563EB",
    meaning: "The second and third petitions are inseparable. The kingdom of God comes wherever his will is done. This is a petition for the alignment of earth with heaven — for the rule of God to be as complete and uncontested in human history as it is in the heavenly realm. It is a political petition, an eschatological petition, and a personal surrender all at once: 'your will, not mine.'",
    application: "Praying 'your will be done' is not passive resignation — it is active alignment. It means: I commit to do your will in my sphere today. Where in your life is your will competing with God's? Name it and surrender it in this petition.",
    older: "This petition shaped the entire theology of Christian mission. The church does not create the kingdom; it witnesses to it and prays for its coming. Evangelism, justice work, and compassion ministry are expressions of this prayer.",
  },
  {
    line: "Give us today our daily bread",
    section: "Our Needs",
    color: "#10B981",
    meaning: "'Daily bread' is the request for today's provision — not next week, not next year. The word 'daily' (epiousios) is unusual and may mean 'bread for the coming day.' This petition teaches dependence: you ask for today. You trust for tomorrow. The manna in the wilderness could not be stored — it was given daily. This petition re-trains the soul away from self-sufficiency toward radical trust.",
    application: "What are you anxious about that this petition is meant to address? Make your concrete material needs known to God today — and practice leaving tomorrow's needs with him until tomorrow. This is the prayer that makes anxiety theologically out of place.",
    older: "The church fathers debated whether 'daily bread' is literal (food) or the Eucharist (communion). Most settled on 'both': the bread that sustains physical life and the bread of life (John 6:35) that sustains spiritual life.",
  },
  {
    line: "Forgive us our debts as we also have forgiven our debtors",
    section: "Our Needs",
    color: "#EF4444",
    meaning: "This is the only petition that Jesus immediately comments on after the prayer (Matthew 6:14-15). The connection is stark: your experience of receiving forgiveness and your willingness to give it are linked. Not that you earn forgiveness by forgiving — but that those who have truly received forgiveness cannot withhold it. The unforgiving servant (Matthew 18) illustrates the contradiction of claiming forgiveness while refusing to give it.",
    application: "Before asking God to forgive you, ask: who have I not forgiven? The petition will not be honest if you are nursing a grudge. This is the most uncomfortable line in the prayer — and the most diagnostic.",
    older: "'Debts' (opheilema in Matthew) and 'trespasses' (paraptoma in Luke 11:4) are slightly different words used for the same petition. The early church used 'trespasses' liturgically; many Protestant traditions follow Luke's version.",
  },
  {
    line: "Lead us not into temptation, but deliver us from the evil one",
    section: "Our Needs",
    color: "#7C3AED",
    meaning: "The final petition acknowledges ongoing vulnerability. 'Lead us not into temptation' can also be translated 'do not bring us to the time of trial' — acknowledging that we cannot handle what we think we can. It is the prayer of James 4:13: 'not in my own strength.' 'Deliver us from the evil one' (or 'from evil') names that the source of the deepest threat is personal and spiritual, not merely circumstantial.",
    application: "This petition is most useful as a morning prayer — before the day begins, before the temptation comes. Ask for deliverance structurally, not just in the moment of temptation. Include in this prayer the specific area of your known vulnerability.",
    older: "The Didache (early 2nd century church document) adds the doxology: 'For thine is the kingdom, the power and the glory, forever. Amen.' This addition, absent in earliest manuscripts, entered the liturgy and is still used in Protestant worship.",
  },
];

const COMMENTATORS = [
  {
    id: "tertullian",
    name: "Tertullian",
    era: "c. 155-220",
    context: "North African theologian, first major Latin Christian writer",
    bio: "Tertullian wrote the earliest surviving commentary on the Lord's Prayer, 'On Prayer' (c. 198 AD). He called the Lord's Prayer a 'summary of the whole Gospel' and the 'foundation of all further prayer.' A trained lawyer turned theologian, Tertullian read every word of the prayer with legal precision — the petitions are not polite wishes but formal claims made by children before their Father.",
    quote: "How many sentences are compressed into the Lord's Prayer! How many great matters are summed up in these few words! The entire summary of the Gospel is contained in it.",
    contribution: "Tertullian established the interpretive tradition of reading the Lord's Prayer as a complete theological document, not merely a template. His commentary worked through the prayer phrase by phrase and influenced all subsequent Latin commentary. He also insisted the prayer must be prayed in the Spirit — formal recitation without genuine faith misses the point entirely.",
  },
  {
    id: "origen",
    name: "Origen of Alexandria",
    era: "c. 185-254",
    context: "Greatest theologian of the early church, Alexandria and Caesarea",
    bio: "Origen wrote 'On Prayer' (c. 233 AD), the most philosophically sophisticated early treatment of the Lord's Prayer. He was troubled by the problem of prayer itself — if God is omniscient and his plans are fixed, how does prayer change anything? His answer: prayer changes the one who prays, aligning the human will with the divine. The Lord's Prayer is the pattern for this alignment.",
    quote: "He who prays as he ought will not cease from virtue; he who lives virtuously will not cease from prayer. Prayer and virtue are the two wings by which we ascend to God.",
    contribution: "Origen distinguished four kinds of prayer (supplication, prayer, intercession, thanksgiving) and argued that all four are present in the Lord's Prayer. His most lasting contribution was his insistence that the 'kingdom of God' prayed for in the second petition is the internal reign of God in the soul — an interpretation that influenced centuries of mystical theology and continues to shape contemplative approaches to the prayer.",
  },
  {
    id: "augustine",
    name: "Augustine of Hippo",
    era: "354-430",
    context: "Bishop of Hippo; foundational theologian for Western Christianity",
    bio: "Augustine treated the Lord's Prayer extensively in his 'Letter to Proba,' his 'Sermons on the Sermon on the Mount,' and his catechetical works. For Augustine, the seven petitions correspond to the seven gifts of the Holy Spirit and the seven Beatitudes — the prayer is cosmically structured. The petitions move from eternal (God's glory) to temporal (our needs) to moral (forgiveness and deliverance).",
    quote: "Our heart is restless until it rests in You. The Lord's Prayer is the prayer of that restless heart — restless until it learns to want what God wants.",
    contribution: "Augustine popularized the practice of teaching new Christians the Lord's Prayer as their first act of faith — they would memorize and recite it as a creed-like commitment before baptism. He also emphasized the communal 'our' — Christian prayer is never private therapy but communion with the body of Christ. His seven-petition structure became the standard interpretive framework in Western Christianity.",
  },
  {
    id: "luther",
    name: "Martin Luther",
    era: "1483-1546",
    context: "German Reformer; translated Bible into German, wrote catechisms",
    bio: "Luther expounded the Lord's Prayer in both his Small Catechism (1529) and Large Catechism (1529), making it the centerpiece of Protestant piety. In his 'A Simple Way to Pray' (1535, written for his barber Peter), Luther taught a method of prayer using the Lord's Prayer as a 'garland': take each petition and spin out instruction, thanksgiving, confession, and petition from it. He used the Lord's Prayer himself daily.",
    quote: "To this day I suckle at the Lord's Prayer like a child, and as an old man eat and drink from it and never get my fill. It is the very best prayer, better than the psalter, which is so very dear to me.",
    contribution: "Luther's catechetical explanations of the Lord's Prayer — 'What does this mean?' — are still used in Lutheran confirmation classes today. His most distinctive contribution was the 'garland' method: each petition becomes a launching pad for extended, personal, non-scripted prayer. He democratized the prayer by insisting that ordinary Christians could and must pray it authentically, not merely recite it ceremonially.",
  },
  {
    id: "barth",
    name: "Karl Barth",
    era: "1886-1968",
    context: "Swiss Reformed theologian; 20th century's greatest systematic theologian",
    bio: "Barth's lectures on the Lord's Prayer were given near the end of his life and published as 'The Christian Life' (Church Dogmatics IV/4). For Barth, the Lord's Prayer is the grammar of Christian existence. Because God has already acted decisively in Christ, prayer is not informing God of anything — it is the human being's free, grateful response to what God has already done. 'Thy kingdom come' is not wishful thinking; it is alignment with a coming reality.",
    quote: "The Christian life is not an achievement. It is a response. The Lord's Prayer is what that response sounds like when it is honest about who God is and who we are.",
    contribution: "Barth's christological reading transformed interpretation: every petition is grounded in Christ. 'Our Father' is possible only because Christ has made us children. 'Forgive our debts' is possible only because debts have been paid. The prayer is not a ladder from humanity to God but the echo of God's own yes in Christ. This approach has deeply influenced 20th and 21st century Protestant treatments of prayer and discipleship.",
  },
];

const HISTORY = [
  {
    era: "The Didache (c. 85-110 AD)",
    icon: "📜",
    description: "The earliest non-canonical church document instructs Christians to pray the Lord's Prayer three times daily — at morning, noon, and evening. It adds the doxology ('For thine is the kingdom, the power, and the glory, forever. Amen.') not found in the earliest manuscripts of Matthew. This establishes the prayer as the rhythm of Christian daily life from the very beginning of the church's written tradition.",
  },
  {
    era: "The Desert Fathers (3rd-5th centuries)",
    icon: "🏜️",
    description: "The monks of Egypt and Syria made the Lord's Prayer the foundation of the divine office — the cycle of prayer that structured each day. Cassian reports that the Egyptian monks prayed it continuously, not just three times daily. Evagrius Ponticus taught that the petitions corresponded to stages of the spiritual life: beginners focus on forgiveness; the advanced dwell on 'thy kingdom come.' For them the prayer was a whole curriculum in contemplative prayer.",
  },
  {
    era: "Baptismal Tradition (Early-Medieval Church)",
    icon: "💧",
    description: "From Augustine onward, the Lord's Prayer was 'handed over' (traditio) to catechumens preparing for baptism. They received it along with the Creed as the two pillars of Christian identity. On the eve of their baptism they 'gave it back' (redditio) by reciting it from memory before the congregation. The prayer was not just a formula to use — it was a declaration of belonging to the family of God.",
  },
  {
    era: "The Daily Office (Medieval-Reformation)",
    icon: "🕰️",
    description: "The Rule of Benedict (6th century) enshrined the Lord's Prayer at the close of Lauds and Vespers — the morning and evening prayer that ordered monastic life. The rationale: so that at least twice daily, monks would formally forgive one another, acknowledging that community life inevitably produces offenses. The prayer's forgiveness petition was not private but communal renewal. This practice passed into Anglican, Lutheran, and Reformed liturgy through the Reformation.",
  },
  {
    era: "The Reformation Catechisms (16th century)",
    icon: "📖",
    description: "The Lord's Prayer became the structural backbone of Protestant catechesis. Luther's Small Catechism, Calvin's Geneva Catechism, and the Heidelberg Catechism all give extensive space to its exposition. The Heidelberg Catechism devotes questions 118-129 to the Lord's Prayer, making it the fullest section of the entire catechism. The Reformers insisted the prayer be not merely recited but understood — and that understanding it was the work of a lifetime.",
  },
  {
    era: "Ecumenical Rediscovery (20th-21st centuries)",
    icon: "🌍",
    description: "The 20th century saw remarkable convergence around the Lord's Prayer across Catholic, Protestant, and Orthodox traditions. The 1988 agreed text produced a common ecumenical translation used across denominations. Taize, Iona, and other ecumenical communities made the Lord's Prayer the center of shared worship. Contemplative movements (centering prayer, lectio divina) returned the prayer to its monastic roots while opening it to lay Christians. Today it is perhaps the single text that most unites Christian worship across all traditions.",
  },
];

const MODELS = [
  { title: "Luther's Way to Pray", body: "Martin Luther taught using the Lord's Prayer as a garland: take each petition and 'make a garland' of instruction, thanksgiving, confession, and petition based on it. Don't rush through — let each phrase open into extended reflection. A single petition can sustain fifteen minutes of prayer." },
  { title: "The Daily Office", body: "Many Christian traditions (Anglican, Catholic, Lutheran, Orthodox) pray the Lord's Prayer at multiple fixed hours of the day — morning, noon, and evening. Repeating it multiple times trains the soul in its pattern until the pattern becomes second nature." },
  { title: "Praying the Petitions Separately", body: "Take one petition per day for a week. On Monday, spend your prayer time entirely on 'Our Father in heaven.' On Tuesday, 'Hallowed be your name.' By the end of the week, you have given each petition the attention it deserves." },
  { title: "Singing It", body: "The Lord's Prayer has been set to music in dozens of traditions — Gregorian chant, traditional hymn, contemporary song. Singing prayer engages the body and the memory differently than speaking. Learning a musical setting helps it become memorized scripture." },
];

export default function PrayerOfJesusPage() {
  const [selected, setSelected] = useState("Our Father in heaven");
  const [activeTab, setActiveTab] = useState<Tab>("petitions");
  const [selectedCommentator, setSelectedCommentator] = useState("tertullian");

  const petition = PETITIONS.find(p => p.line === selected)!;
  const commentator = COMMENTATORS.find(c => c.id === selectedCommentator)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🕊️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Lord&apos;s Prayer</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            When asked how to pray, Jesus gave a pattern. Six petitions that restructure how we approach God, what we ask for, and who we are when we ask. Every line is a theology lesson.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "petitions" as const, label: "The Petitions", icon: "🙏" },
            { id: "commentators" as const, label: "Commentators", icon: "💬" },
            { id: "history" as const, label: "History of Use", icon: "📜" },
            { id: "models" as const, label: "How to Pray It", icon: "📖" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "petitions" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 220, flexShrink: 0 }}>
              {PETITIONS.map(p => (
                <button key={p.line} onClick={() => setSelected(p.line)}
                  style={{ width: "100%", background: selected === p.line ? `${p.color}15` : "transparent", border: `1px solid ${selected === p.line ? p.color + "60" : BORDER}`, borderRadius: 10, padding: "10px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: MUTED, fontSize: 10, fontWeight: 700, marginBottom: 2 }}>{p.section}</div>
                  <span style={{ color: selected === p.line ? p.color : TEXT, fontWeight: 700, fontSize: 12, lineHeight: 1.4, display: "block" }}>{p.line}</span>
                </button>
              ))}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${petition.color}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>{petition.section.toUpperCase()}</div>
                  <h2 style={{ color: petition.color, fontWeight: 900, fontSize: 22, lineHeight: 1.4, marginBottom: 0 }}>{petition.line}</h2>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>MEANING</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{petition.meaning}</p>
                </div>

                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16, marginBottom: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>APPLICATION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{petition.application}</p>
                </div>

                <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>HISTORICAL CONTEXT</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{petition.older}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "commentators" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {COMMENTATORS.map(c => (
                <button key={c.id} onClick={() => setSelectedCommentator(c.id)}
                  style={{ width: "100%", background: selectedCommentator === c.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedCommentator === c.id ? PURPLE + "70" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedCommentator === c.id ? PURPLE : TEXT, fontWeight: 800, fontSize: 13, marginBottom: 2 }}>{c.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{c.era}</div>
                </button>
              ))}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{commentator.era}</div>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 24, marginBottom: 4 }}>{commentator.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{commentator.context}</div>
                </div>

                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{commentator.bio}</p>

                <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 10, padding: 18, marginBottom: 20 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 10 }}>IN THEIR OWN WORDS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>&ldquo;{commentator.quote}&rdquo;</p>
                </div>

                <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{commentator.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                No prayer has been more continuously and universally prayed in the history of Christianity. From the second century to the present, across every tradition and culture, the Lord&apos;s Prayer has been the common tongue of Christian worship. Below is a map of how it has been received and used across twenty centuries.
              </p>
            </div>

            {HISTORY.map((h, i) => (
              <div key={i} style={{ display: "flex", gap: 16, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ fontSize: 28, flexShrink: 0, marginTop: 2 }}>{h.icon}</div>
                <div>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 15, marginBottom: 8 }}>{h.era}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{h.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "models" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <div style={{ color: TEXT, fontWeight: 700, fontSize: 16, marginBottom: 12, lineHeight: 1.6 }}>
                &ldquo;Our Father in heaven, hallowed be your name. Your kingdom come, your will be done, on earth as it is in heaven. Give us today our daily bread. And forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from the evil one.&rdquo;
              </div>
              <div style={{ color: MUTED, fontSize: 12 }}>— Matthew 6:9-13</div>
            </div>
            {MODELS.map((m, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{m.title}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{m.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on the Lord's Prayer from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "IvWmwvdJ-mU", title: "How to Pray", channel: "R.C. Sproul / Ligonier", description: "Sproul walks through the structure of the Lord's Prayer as a model for Christian prayer, explaining each petition and its theological significance." },
                  { videoId: "vqxXABgRhVo", title: "The Basis of Prayer: Our Father", channel: "Tim Keller", description: "Keller unpacks 'Our Father in heaven' — the opening address that shapes everything else in the Lord's Prayer — and what it means to pray as a child of God." },
                  { videoId: "3VxyGP7z2rk", title: "If God Is Sovereign, Why Pray?", channel: "R.C. Sproul / Ligonier", description: "Sproul addresses the most common intellectual objection to prayer, arguing from Scripture why intercessory prayer is both necessary and effective despite divine sovereignty." },
                  { videoId: "IWj00KJ6Jow", title: "Adoration — The First Movement of Prayer", channel: "R.C. Sproul / Ligonier", description: "A teaching on how 'hallowed be your name' grounds all prayer in the worship of God — adoration before petition." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
