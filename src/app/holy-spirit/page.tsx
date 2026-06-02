"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const DOCTRINES = [
  {
    id: "person",
    title: "The Holy Spirit Is a Person",
    icon: "👤",
    color: "#3B82F6",
    summary: "The Holy Spirit is not a force, an it, or divine energy — he is a fully personal being of the Trinity.",
    body: "One of the most common misunderstandings about the Holy Spirit is treating him as an impersonal force — like electricity, or the Force in Star Wars. Scripture consistently presents the Spirit as personal: he speaks (Acts 13:2), he teaches (John 14:26), he guides (John 16:13), he grieves (Ephesians 4:30), he intercedes (Romans 8:26), and he testifies (Romans 8:16). Personal actions require a personal being.\n\nThe Spirit is also fully God — equal with the Father and the Son. The divine attributes are ascribed to him: omniscience (1 Cor 2:10-11), omnipresence (Psalm 139:7-10), omnipotence (Luke 1:35), and eternality (Hebrews 9:14). Ananias and Sapphira lied to the Holy Spirit (Acts 5:3) — and Peter immediately clarified: 'You have not lied just to human beings but to God' (5:4).\n\nTreating the Spirit as personal transforms how we relate to him: we commune with him, cooperate with him, yield to him — not 'use' him.",
    verse: "Do not grieve the Holy Spirit of God, with whom you were sealed for the day of redemption. — Ephesians 4:30",
    application: "Address the Spirit in prayer. Cultivate sensitivity to his promptings. Be attentive to his grieving when you sin.",
  },
  {
    id: "work",
    title: "The Spirit's Work in Salvation",
    icon: "🌊",
    color: "#10B981",
    summary: "From conviction to regeneration to sanctification — the Holy Spirit is the agent of salvation from start to finish.",
    body: "Before anyone can come to faith, the Holy Spirit must work. Jesus told Nicodemus: 'Flesh gives birth to flesh, but the Spirit gives birth to spirit' (John 3:6). The new birth is not a human decision — it is a divine act, worked by the Spirit, in response to the preaching of the Word.\n\nThe Spirit's work in salvation includes: conviction of sin, righteousness, and judgment (John 16:8); regeneration — the new birth that gives spiritual life where there was death (Titus 3:5); indwelling — from the moment of new birth, the Spirit lives in every believer (Romans 8:9); and sealing — the guarantee that salvation is secure (Ephesians 1:13-14).\n\nThe Spirit also continues the work of sanctification — progressively conforming the believer into Christ's image (2 Corinthians 3:18). This is not passive but cooperative: 'work out your salvation with fear and trembling, for it is God who works in you' (Philippians 2:12-13).",
    verse: "He saved us... through the renewing of the Holy Spirit. — Titus 3:5",
    application: "Give credit to the Spirit for every step of spiritual growth. Cooperate actively with his sanctifying work.",
  },
  {
    id: "gifts",
    title: "Spiritual Gifts",
    icon: "🎁",
    color: PURPLE,
    summary: "Every believer receives at least one spiritual gift — a Spirit-empowered capacity for building up the body of Christ.",
    body: "The New Testament lists spiritual gifts in several passages (Romans 12, 1 Corinthians 12-14, Ephesians 4, 1 Peter 4) — the lists are not exhaustive or identical, suggesting these are illustrative rather than complete. The Greek word charismata (gifts of grace) indicates their origin: they are grace-gifts, not achievements earned by spiritual maturity.\n\nChristians disagree about whether all the gifts listed in 1 Corinthians 12 continue today (cessationism) or whether all gifts remain (continuationism). What all traditions agree on: the Spirit gives gifts to every believer for the common good (1 Cor 12:7), gifts are given for service not status, and spiritual gifts unaccompanied by love are worthless (1 Cor 13).\n\nThe gifts include what are often called 'word gifts' (teaching, preaching, prophecy), 'service gifts' (helps, administration, mercy), and 'sign gifts' (healing, miracles, tongues). The goal of all gifts is the same: building up the body of Christ.",
    verse: "To each one the manifestation of the Spirit is given for the common good. — 1 Corinthians 12:7",
    application: "Identify your spiritual gifts through serving, spiritual gifts assessments, and community affirmation. Deploy them actively.",
  },
  {
    id: "filled",
    title: "Being Filled with the Spirit",
    icon: "🔥",
    color: "#EF4444",
    summary: "The command to 'be filled with the Spirit' (Ephesians 5:18) is continuous and ongoing — not a one-time experience.",
    body: "The Greek verb in Ephesians 5:18 ('be filled with the Spirit') is present tense and passive voice — meaning 'keep on being filled' by the Spirit. It is not a one-time second blessing but an ongoing reality to be continually sought and received.\n\nJesus connected this to asking: 'How much more will your Father in heaven give the Holy Spirit to those who ask him!' (Luke 11:13). The pathway to being filled with the Spirit involves: prayer (Luke 11:13), surrender (Romans 12:1), obedience (Acts 5:32), and the Word (Colossians 3:16 — 'Let the word of Christ dwell in you richly' is parallel to Ephesians 5:18's 'be filled with the Spirit').\n\nBeing filled with the Spirit produces specific fruit (Galatians 5:22-23) and specific results: mutual submission, worshipful hearts, thanksgiving (Ephesians 5:19-21). Spirit-filled Christianity is not primarily characterized by dramatic experiences but by transformed character and relationships.",
    verse: "Do not get drunk on wine... Instead, be filled with the Spirit. — Ephesians 5:18",
    application: "Pray daily for fresh filling. Surrender control. Remove what quenches the Spirit. Seek his fullness actively, not passively.",
  },
  {
    id: "fruit",
    title: "The Fruit of the Spirit",
    icon: "🌿",
    color: "#F59E0B",
    summary: "The nine-fold fruit of the Spirit is the evidence of Spirit-filled life — character transformation over time.",
    body: "Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control (Galatians 5:22-23). These are presented as a cluster — not a cafeteria — suggesting that Spirit-filled life produces all of them together, in increasing measure over time.\n\nPaul presents the fruit of the Spirit in contrast to 'the works of the flesh' (5:19-21). The works of the flesh are results of effort in the wrong direction; the fruit of the Spirit grows naturally when we are rightly connected to the vine (John 15:5). You cannot produce these by willpower — but you can cultivate conditions for their growth: remaining in Christ, walking in the Spirit (Gal 5:25), and putting to death the deeds of the flesh (Romans 8:13).\n\nThe diagnostic question for spiritual health is not 'What gifts do I have?' but 'What fruit am I bearing?' Dramatic gifts without transformed character are the red flag Paul describes in 1 Corinthians 13 — 'sounding brass and tinkling cymbal.'",
    verse: "The fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. — Galatians 5:22-23",
    application: "Ask: which of these nine is most obviously lacking in me? Focus cooperative effort there. Ask the Spirit to produce it.",
  },
];

const TRADITIONS_COMPARED = [
  { tradition: "Reformed/Presbyterian", view: "Gifts of tongues, prophecy, and miracles ceased with the apostolic age (cessationism). The Spirit continues to work through Word, sacraments, and prayer but not through supernatural signs.", emphasis: "Spirit's work in the Word and regeneration" },
  { tradition: "Baptist (mainstream)", view: "Generally open to the Spirit's work but cautious about charismatic practice. Focus on the Spirit's work in salvation, illumination of Scripture, and community life.", emphasis: "Spirit's work in conversion and Scripture" },
  { tradition: "Pentecostal", view: "All New Testament gifts continue today. 'Baptism in the Spirit' is a distinct, subsequent work to salvation, often evidenced by tongues. Signs and wonders are normal Christianity.", emphasis: "Spirit's miraculous gifts and baptism in Spirit" },
  { tradition: "Charismatic", view: "All gifts continue today, but this conviction exists within mainline denominations (Anglican, Catholic, Lutheran, etc.). Spirit baptism may or may not be doctrinally required.", emphasis: "Gifts and Spirit experience within tradition" },
  { tradition: "Third Wave/Vineyard", view: "All gifts continue today but without the classical Pentecostal requirement of tongues as initial evidence. Signs, wonders, and healing are normal Christian ministry.", emphasis: "Power evangelism and healing ministry" },
];

const SCHOLARS_HS = [
  { id: "fee", name: "Gordon Fee", era: "1934-2022", context: "Assemblies of God; New Testament scholar; Regent College", bio: "Fee's God's Empowering Presence (1994) is the most comprehensive study of the Holy Spirit in Paul's letters. His scholarship is both academically rigorous and personally charismatic — he argues from the text that Paul's communities experienced the Spirit in ways that included tongues, prophecy, and other gifts, and that the New Testament does not provide grounds for cessationism. His smaller work Paul, the Spirit, and the People of God makes the argument accessible.", quote: "The Spirit is the fulfillment of the new covenant promise — the life of the future present in the midst of the present age.", contribution: "Established the exegetical case for continuationism from Paul's letters. His work has given charismatic and Pentecostal scholars the scholarly foundation their tradition needed." },
  { id: "packer", name: "J.I. Packer", era: "1926-2020", context: "Regent College; Reformed Anglican; Keep in Step with the Spirit (1984)", bio: "Packer approached the Holy Spirit from a Reformed perspective, emphasizing the Spirit's work in illuminating Scripture, effecting regeneration, producing the fruit of the Spirit, and guiding the church. He was cautious about charismatic practice — arguing that the experience-centered orientation of the charismatic movement was prone to subjectivism — while acknowledging the Spirit's ongoing work in prayer and sanctification. Keep in Step with the Spirit remains the best Reformed treatment of pneumatology.", quote: "Spiritual gifts are given for building up the body, not for impressing observers or satisfying the recipient.", contribution: "Provided the Reformed tradition's most careful and irenic engagement with charismatic Christianity. His balance — taking spiritual experience seriously while anchoring it to Scripture — models the kind of theological engagement the church needs." },
  { id: "grudem", name: "Wayne Grudem", era: "b. 1948", context: "Phoenix Seminary; Systematic Theology; open but cautious continuationist", bio: "Grudem's chapter on the Holy Spirit in Systematic Theology (1994) is the most widely used evangelical treatment of pneumatology. His position is 'open but cautious' continuationism: all gifts continue today, but they should be exercised with discernment and within the authority of Scripture. His The Gift of Prophecy in the New Testament and Today argues that NT prophecy is not infallible and can be tested — which makes contemporary prophecy practices theologically defensible without claiming Sripts-level authority.", quote: "The Holy Spirit is given to every believer at the moment of conversion and is never said in the New Testament to be a second, subsequent blessing distinct from salvation.", contribution: "Provided evangelical churches with a nuanced middle position between cessationism and full-charismatic theology. His treatment of NT prophecy as fallible-but-genuine has been particularly influential in Third Wave and Vineyard contexts." },
  { id: "macarthur", name: "John MacArthur", era: "b. 1939", context: "Grace Community Church; The Master's Seminary; cessationist", bio: "MacArthur is the most prominent contemporary advocate of cessationism — the view that the miraculous sign gifts (tongues, prophecy, healing) ceased with the death of the apostles. His Charismatic Chaos (1992) and Strange Fire (2013) argue that the charismatic movement has produced massive spiritual confusion by attributing to the Holy Spirit experiences that Scripture does not warrant. His positive pneumatology emphasizes the Spirit's work in illuminating Scripture, convicting of sin, regenerating, and sanctifying.", quote: "The Holy Spirit wrote the Bible. Does it not stand to reason that he would lead you to interpret the Bible, not to have new revelations beyond the Bible?", contribution: "Articulated the most thoroughgoing cessationist case in the contemporary evangelical world. Regardless of whether one agrees with his conclusions, his challenge to the charismatic movement forces continuationists to ground their practice more carefully in Scripture." },
  { id: "storms", name: "Sam Storms", era: "b. 1951", context: "Bridgeway Church, Oklahoma City; former cessationist converted to continuationism", bio: "Storms is unusual: a rigorously Reformed theologian who practices the gifts of the Spirit. His Practicing the Power (2017) is a practical guide to charismata within a theologically careful framework. His journey from cessationism to continuationism — detailed in his writings — gives his work unusual credibility with skeptical readers. He argues that the New Testament provides no exegetical warrant for cessationism and that the gifts are given for the strengthening of the church until Christ returns.", quote: "I believe that all spiritual gifts are still operative today and that all of us should ask God to manifest them through us for the building up of the church.", contribution: "Models how a theologically conservative, exegetically rigorous Reformed pastor can hold continuationist convictions. His work has helped many cessationist-background evangelicals reconsider their position without abandoning doctrinal seriousness." }
];

export default function HolySpiritPage() {
  const [activeTab, setActiveTab] = useState<"doctrines" | "scholars" | "traditions" | "practice" | "videos">("doctrines");
  const [selectedScholar, setSelectedScholar] = useState("fee");
  const scholar = SCHOLARS_HS.find(s => s.id === selectedScholar)!;
  const [selectedDoc, setSelectedDoc] = useState("person");
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);
  const [journalText, setJournalText] = useState(() => {
    try { return localStorage.getItem("vine_hs_journal") || ""; } catch { return ""; }
  });

  useEffect(() => { try { localStorage.setItem("vine_hs_journal", journalText); } catch {} }, [journalText]);

  const doc = DOCTRINES.find(d => d.id === selectedDoc)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔥</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Holy Spirit</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 540, margin: "0 auto" }}>
            The most neglected person of the Trinity — and the most present in the believer's daily life. Understand who he is, what he does, and how to walk with him.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "doctrines" as const, label: "Doctrines", icon: "📖" },
            { id: "scholars" as const, label: "Scholars", icon: "🏛️" },
            { id: "traditions" as const, label: "Traditions", icon: "⚖️" },
            { id: "practice" as const, label: "Walking in the Spirit", icon: "🚶" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 6px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "doctrines" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 170 }}>
              {DOCTRINES.map(d => (
                <button key={d.id} onClick={() => setSelectedDoc(d.id)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedDoc === d.id ? d.color : BORDER}`, background: selectedDoc === d.id ? `${d.color}18` : CARD, color: selectedDoc === d.id ? d.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textAlign: "left" }}>
                  {d.icon} {d.title.substring(0, 20)}{d.title.length > 20 ? "..." : ""}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${doc.color}40`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 32 }}>{doc.icon}</span>
                  <h2 style={{ color: doc.color, fontWeight: 900, fontSize: 20, margin: 0 }}>{doc.title}</h2>
                </div>
                <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.6, marginBottom: 16, borderLeft: `3px solid ${doc.color}`, paddingLeft: 14 }}>{doc.summary}</p>
                {doc.body.split("\n\n").map((para, i) => (
                  <p key={i} style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>{para}</p>
                ))}
                <div style={{ background: `${doc.color}10`, border: `1px solid ${doc.color}30`, borderRadius: 8, padding: 14, marginBottom: 16 }}>
                  <p style={{ color: doc.color, fontSize: 13, fontStyle: "italic", margin: 0 }}>{doc.verse}</p>
                </div>
                <div style={{ background: BG, borderRadius: 8, padding: 14 }}>
                  <p style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Application</p>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{doc.application}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "scholars" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {SCHOLARS_HS.map(s => (
                <button key={s.id} onClick={() => setSelectedScholar(s.id)}
                  style={{ width: "100%", background: selectedScholar === s.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedScholar === s.id ? PURPLE + "80" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedScholar === s.id ? TEXT : MUTED, fontWeight: 700, fontSize: 13 }}>{s.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{s.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 18 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{scholar.name}</h2>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{scholar.era}</span>
                    <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{scholar.context}</span>
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>LIFE & TEACHING</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{scholar.bio}</p>
                </div>
                <div style={{ background: BG, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 10px 10px 0", padding: 18, marginBottom: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>CHARACTERISTIC QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>&ldquo;{scholar.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{scholar.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "traditions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, marginBottom: 10 }}>Where Christians Disagree — and Agree</h3>
              <p style={{ color: TEXT, lineHeight: 1.7, fontSize: 14 }}>The most significant intra-Christian debates about the Spirit concern the continuation of miraculous gifts. Here is an honest overview of the major positions, without picking sides. All traditions affirm the Spirit's deity, his work in salvation, and his presence in every believer.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {TRADITIONS_COMPARED.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                  <h4 style={{ color: PURPLE, fontWeight: 800, fontSize: 16, margin: 0, marginBottom: 8 }}>{t.tradition}</h4>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{t.view}</p>
                  <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 10 }}>
                    <span style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>Emphasis: </span>
                    <span style={{ color: TEXT, fontSize: 12 }}>{t.emphasis}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "practice" && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { title: "Pray in and for the Spirit", color: "#3B82F6", icon: "🙏", practices: ["Ask daily for fresh filling of the Holy Spirit (Luke 11:13)", "Pray 'in the Spirit' — meaning with conscious dependence on the Spirit's help (Jude 20)", "Include thanksgiving and praise — both invite and express Spirit-fullness (Eph 5:18-20)", "Pray with and for other believers — the Spirit is given in community"] },
                { title: "Do Not Quench or Grieve", color: "#EF4444", icon: "⚡", practices: ["Quenching the Spirit (1 Thess 5:19): resisting his promptings, not acting on what he's calling you to", "Grieving the Spirit (Eph 4:30): habitual sin, unresolved bitterness, dishonesty in community", "Regular self-examination: where am I consistently resisting or grieving the Spirit?", "Confession and repentance reopens the flow — 1 John 1:9 is the pathway back"] },
                { title: "Walk in Step with the Spirit", color: "#10B981", icon: "🚶", practices: ["Galatians 5:25 — 'Since we live by the Spirit, let us keep in step with the Spirit'", "This is moment-by-moment awareness: pausing before reacting, asking 'What is the Spirit saying?'", "Practice listening prayer — not all prayer is talking; some is attending", "Act on promptings promptly — delayed obedience is often a form of disobedience"] },
                { title: "Cultivate Sensitivity", color: "#F59E0B", icon: "👂", practices: ["Reduce the noise — media saturation competes with the Spirit's quiet voice", "The Spirit often speaks through Scripture — read expectantly, not just informationally", "The Spirit uses community — 'I sense the Spirit is saying' is a legitimate phrase in mature community", "Journal what you hear — it increases attentiveness and creates a record of faithfulness"] },
              ].map(section => (
                <div key={section.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                  <h3 style={{ color: section.color, fontWeight: 800, fontSize: 17, marginBottom: 14 }}>{section.icon} {section.title}</h3>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    {section.practices.map((p, i) => <li key={i} style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginTop: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, marginBottom: 8 }}>Personal Reflection</h3>
              <textarea value={journalText} onChange={e => setJournalText(e.target.value)}
                placeholder={"Where do I sense the Spirit most active in my life right now?\n\nWhere am I quenching or grieving the Spirit?\n\nWhat is one change I want to make in how I relate to the Spirit?"}
                style={{ width: "100%", minHeight: 160, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16, color: TEXT, fontSize: 14, lineHeight: 1.7, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
            </div>
          </div>
        )}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "rKlMk098oYM", title: "Who Is the Holy Spirit?", channel: "John Piper / Desiring God", description: "Piper answers the foundational question of the Spirit's person and nature — why he is fully God, fully personal, and distinct from Father and Son." },
                  { videoId: "I6oS9i25Lx4", title: "How to Seek the Holy Spirit", channel: "John Piper", description: "A practical and theological message on how believers can actively and prayerfully seek fresh filling of the Holy Spirit in daily life." },
                  { videoId: "EcjZrdQTX10", title: "The Spirit Helps Us in Our Weakness", channel: "John Piper", description: "Piper expounds Romans 8:26 — the Spirit's ministry of intercession when we don't know how to pray, carrying our groaning to the Father." },
                  { videoId: "qvMCdCRWaMI", title: "Preaching in the Holy Spirit", channel: "John Piper / PasCon2018", description: "Piper on the indispensable role of the Holy Spirit in preaching — and what it means for any Christian to speak about God with Spirit-given power." },
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
    </div>
  );
}
