"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F"; const CARD = "#12121F"; const BORDER = "#1E1E32"; const GREEN = "#3a7d56"; const PURPLE = "#6B4FBB"; const TEXT = "#F2F2F8"; const MUTED = "#9898B3";

type Tab = "elders" | "deacons" | "training" | "resources" | "journal" | "videos";

const ELDERS = [
  {
    id: "qualifications",
    title: "1 Timothy 3 Qualifications",
    color: "#8B5CF6",
    summary: "15 qualifications spanning character, household, and reputation",
    details: "The New Testament provides an exhaustive list of elder qualifications in 1 Timothy 3:1-7 and Titus 1:5-9. These are not aspirational ideals but binding standards: above reproach; husband of one wife; sober-minded; self-controlled; respectable; hospitable; able to teach; not a drunkard; not violent but gentle; not quarrelsome; not a lover of money; manages his own household well, with children who are believers and not rebellious; not a recent convert (lest he become conceited); and well thought of by outsiders. The list is character-first — only 'able to teach' relates to giftedness. The rest are moral and relational qualifications that take years to assess. A man who checks every doctrinal box but cannot manage his home or is prone to anger fails the biblical standard.",
    keyTexts: "1 Tim 3:1-7; Titus 1:5-9",
    practical: "Assess candidates over years, not months. Watch how they handle conflict, money, family disappointment, and pressure before recommending them for examination."
  },
  {
    id: "role",
    title: "The Elder's Role",
    color: "#10B981",
    summary: "Teaching, shepherding, governing, and protecting the flock",
    details: "Acts 20:28 gives the clearest summary of the elder's calling: 'Keep watch over yourselves and all the flock of which the Holy Spirit has made you overseers. Be shepherds of the church of God, which he bought with his own blood.' The elder's role has four interconnected dimensions. First, teaching and preaching — the public proclamation of the Word of God is the elder's most visible function, but not his only one. Second, shepherding — caring for the souls of the congregation, knowing their struggles, visiting the sick, praying with the suffering. Third, governing and leading — making decisions about the direction of the church, finances, and staffing, accountable to Christ and the congregation. Fourth, protecting from false teaching — Paul's warning in Acts 20:29-31 about 'savage wolves' entering the flock makes the protective function non-negotiable. 1 Peter 5:1-4 calls elders to shepherd willingly, not under compulsion; eagerly, not for dishonest gain; as examples, not as lords over the flock.",
    keyTexts: "Acts 20:28-31; 1 Peter 5:1-4",
    practical: "Elder board meetings should include pastoral reports — not just budgets and logistics but actual knowledge of the congregation's spiritual state."
  },
  {
    id: "plurality",
    title: "Why Plurality Matters",
    color: "#F59E0B",
    summary: "The NT pattern is always plural elders — for accountability and protection",
    details: "The New Testament never describes a single elder leading a local church. Acts 14:23 records Paul and Barnabas appointing 'elders' (plural) in each church. Titus 1:5 instructs Titus to 'appoint elders in every town.' Acts 20:17 calls 'the elders of the church' in Ephesus — plural. James 5:14 says 'call the elders of the church to pray.' The pattern is consistent and intentional. The one-man-band model — a single pastor who makes all decisions and answers to no peers — is not only unbiblical but dangerous. History is littered with ministry disasters caused by lone leaders with no accountability. Plurality prevents the concentration of authority in a single person who can become blind to his own sin. It provides accountability among peers who can speak truth to each other. It also reflects the Trinitarian nature of God — one God, three persons in mutual relationship — a community of leadership rather than a solo act.",
    keyTexts: "Acts 14:23; Titus 1:5; Acts 20:17; James 5:14",
    practical: "Even small churches should work toward identifying, training, and installing at least two or three elders. One qualified paid pastor and two qualified lay elders is a better model than one lone pastor."
  },
  {
    id: "paid",
    title: "Paid vs. Lay Elders",
    color: "#3B82F6",
    summary: "Both are real elders — 1 Tim 5:17 distinguishes by labor, not office",
    details: "1 Timothy 5:17 says: 'The elders who lead well are worthy of double honor, especially those whose work is preaching and teaching.' The word 'especially' introduces a distinction within the category of elder — those whose primary labor is in the Word deserve financial support (verse 18 makes clear 'double honor' includes financial compensation). This is the biblical basis for the teaching elder / ruling elder distinction common in Presbyterian polity. The teaching elder (or pastor) is the elder who gives the majority of his time to preaching and teaching, supported financially by the church. The ruling elder (or lay elder) serves in governance and pastoral care alongside his regular vocation. Both are real elders with identical authority. Neither is more an elder than the other. The difference is role and compensation, not rank or dignity.",
    keyTexts: "1 Tim 5:17-18",
    practical: "Lay elders should be released from professional work pressures when the church needs their pastoral attention. Consider elder expense reimbursement, study funds, and protected time for elder work."
  },
  {
    id: "ordination",
    title: "Ordination",
    color: "#EF4444",
    summary: "Public recognition — not magical, but deeply meaningful",
    details: "Ordination is the public recognition by the church that a man has been called by God, examined by peers, and affirmed by the congregation for the office of elder. 1 Timothy 4:14 refers to 'the laying on of hands by the council of elders' — this is the formal act of ordination. Acts 13:3 records the church at Antioch laying hands on Paul and Barnabas and sending them out. The laying on of hands is not a magical transmission of power or authority but a symbolic and covenantal act: the church is publicly affirming and commissioning the candidate, and the candidate is publicly accepting accountability to the church. Ordination matters because it means the church — not just the individual — is involved in recognizing and authorizing leadership. It also creates accountability: the ordained elder is recognized by and responsible to the community that ordained him. The examination process before ordination should be thorough: theology, character, marriage and family, track record of service, and confirmation of calling from those who know him.",
    keyTexts: "1 Tim 4:14; Acts 13:3",
    practical: "The ordination service should be a worship service, not a formality. Include the congregation in prayer, have the elders lay hands, give a formal charge to the new elder, and include opportunity for congregational affirmation."
  },
  {
    id: "accountability",
    title: "Elder Accountability",
    color: "#6B4FBB",
    summary: "Elders accountable to God first, congregation second — with formal protections",
    details: "Hebrews 13:17 establishes that elders 'keep watch over you as those who must give an account' — their ultimate accountability is to God before whom they will answer for their stewardship of souls. But this vertical accountability does not eliminate horizontal accountability to the congregation. 1 Timothy 5:19-20 provides careful safeguards: 'Do not entertain an accusation against an elder unless it is brought by two or three witnesses. But those elders who are sinning you are to reprove before everyone, so that the others may take warning.' This passage protects elders from false accusations (the two-or-three-witness requirement) while ensuring that genuine sin is addressed publicly — not swept under the rug. The plurality of elders creates mutual accountability among peers: elders can speak truth to each other in ways that subordinates cannot. Regular accountability rhythms — annual reviews, elder retreats, honest conversation about personal spiritual health — are the institutional form of this biblical principle.",
    keyTexts: "1 Tim 5:19-20; Heb 13:17",
    practical: "Each elder should have at least one person — another elder, a trusted mentor, or a counselor — who has explicit permission to ask hard questions about their spiritual life, marriage, finances, and leadership."
  },
];

const DEACONS = [
  {
    title: "Acts 6 Origins",
    color: "#10B981",
    content: "The office of deacon traces its roots to Acts 6:1-7, where the Hellenistic widows were being overlooked in the daily distribution of food. The Apostles recognized the problem but said plainly: 'It would not be right for us to neglect the ministry of the word of God in order to wait on tables.' They instructed the congregation to select seven men of good repute, full of the Spirit and wisdom, to handle the practical care of the community. The result was that 'the word of God spread' and 'the number of disciples in Jerusalem increased rapidly.' This origin story is definitive: deacons are not lesser servants but essential ones. The practical and mercy ministry of the church is not a distraction from the gospel — it is the gospel made visible in care for the poor and vulnerable. The seven in Acts 6 are not called deacons by name, but they are almost universally recognized as the proto-deacons who establish the pattern for the office.",
    text: "Acts 6:1-7"
  },
  {
    title: "1 Timothy 3 Qualifications",
    color: "#8B5CF6",
    content: "The formal qualifications for deacons appear in 1 Timothy 3:8-13: dignified (not just functionaries but people of character); not double-tongued (honest and consistent — they know the congregation's secrets and must be trustworthy); not addicted to much wine; not greedy for dishonest gain; holding the mystery of faith with a clear conscience (theological grounding, not just practical competence); tested first — they should not be installed without a period of assessment. Verse 12 adds: husband of one wife; managing children and household well. The qualifications mirror the elder qualifications in character while omitting 'able to teach' — deacons are not the primary teachers of the church. Romans 16:1 calls Phoebe a diakonos of the church at Cenchreae, and 1 Timothy 3:11 refers to women who are 'likewise' dignified, sincere, sober, and faithful — language that many scholars apply to female deacons rather than merely deacons' wives.",
    text: "1 Tim 3:8-13; Rom 16:1"
  },
  {
    title: "Deacons vs. Elders",
    color: "#F59E0B",
    content: "The distinction between elders and deacons is functional, not hierarchical in the sense that one is more important. Elders: word and governance. Deacons: mercy and administration. Elders make binding decisions about the church's doctrine, direction, and discipline. Deacons serve the congregation under elder oversight in the practical dimensions of church life. Both offices are necessary. Both require character qualifications. Neither is a stepping stone to the other — they are different callings. Churches that only have one paid pastor and no deacon structure are limiting their ministry by collapsing all functions onto one person or a small group. Churches that have deacons but no real elders have confused administration with shepherding. The complementary nature of the two offices is part of what allows the church to be both doctrinally sound (through faithful elder oversight) and practically effective (through faithful diaconal service).",
    text: "Phil 1:1; Acts 6:1-7; 1 Tim 3"
  },
  {
    title: "The Deacon's Ministry",
    color: "#EF4444",
    content: "In practice, deacons typically carry responsibility for the financial administration, benevolence fund, property and facilities, event logistics, mercy ministry coordination, and care for practical needs in the congregation. But the model of Stephen and Philip in Acts 6-8 cautions against reducing deacons to maintenance people. Stephen was 'full of grace and power' and performed great wonders and signs; he preached a sermon before his martyrdom that is among the most theologically rich in the New Testament. Philip evangelized Samaria and explained Isaiah 53 to the Ethiopian eunuch. The deacons of Acts were not administrators who stayed in their lane — they were servants full of the Spirit whose service overflowed into powerful ministry. The deacon's role is not a ceiling but a base. Faithful service in practical things is the foundation from which the Spirit often launches remarkable ministry.",
    text: "Acts 6:8; 7:1-53; 8:4-40"
  },
];

const TRAINING_STEPS = [
  {
    num: 1,
    title: "Identify Character First",
    color: "#8B5CF6",
    body: "The process of identifying future elders and deacons begins years before any title is given. The question is not 'who is gifted?' but 'who embodies 1 Timothy 3?' Look for a man who is above reproach in his daily life — not in a formal, performative way, but genuinely. Watch how he handles conflict, disappointment, money, and power. Observe his marriage and family. See whether people trust him with hard things. Character is slow-grown and slow-assessed. The man who is fast-tracked to eldership because he is articulate and confident is at high risk. The man who has been quietly faithful for a decade, whose wife and children speak well of him, who has served without recognition — that is the man to watch."
  },
  {
    num: 2,
    title: "Informal Mentoring",
    color: "#10B981",
    body: "Before formal processes begin, invite potential elders and deacons into the weight of leadership. Bring them into elder discussions — not as decision-makers but as observers and learners. Walk them through a hard pastoral situation and debrief afterward. Let them sit in on a difficult member conversation. Ask them how they would handle a doctrinal dispute. Show them the financial realities of the church. The goal is not to overwhelm them but to expose them to what the role actually costs, so that any subsequent call is informed and honest. Informal mentoring also allows current leaders to assess how the candidate handles the responsibility of knowledge — discretion, emotional regulation, and prayerfulness under pressure."
  },
  {
    num: 3,
    title: "Theological Formation",
    color: "#F59E0B",
    body: "An elder must be able to teach and guard sound doctrine. This requires intentional theological formation. Not every elder needs a seminary degree, but every elder should have a working knowledge of basic systematic theology, biblical theology, and ecclesiology. He should understand the church's statement of faith, its denominational distinctives, its approach to church discipline and membership. Consider running a formal elder-training cohort through the church — a year-long course in theology, pastoral ministry, and biblical studies. Assign reading (see the Resources tab). The goal is not academic credentials but pastoral competence: the ability to recognize false teaching, ground counselees in Scripture, and help the congregation understand the whole counsel of God."
  },
  {
    num: 4,
    title: "Formal Interview / Examination",
    color: "#3B82F6",
    body: "When the candidate and current elders believe the time is right, conduct a thorough formal examination. The examination should cover: theological convictions (core doctrines, ecclesiology, eschatology, soteriology); character assessment (specific situations from his life, his wife's and children's testimony, references from those he has served); marriage and family (how does he handle conflict at home? what is his wife's view of his readiness?); track record of faithful service (where has he served, what did he sacrifice, who confirms it?); sense of call (does he desire the office, as 1 Tim 3:1 requires, and does that desire appear God-given rather than self-seeking?). The examination is not an interrogation but a serious pastoral conversation."
  },
  {
    num: 5,
    title: "Congregational Input",
    color: "#EF4444",
    body: "The congregation should have genuine opportunity to affirm or raise concerns about a candidate before installation. Whether this takes the form of a formal vote (in congregational polity) or a public announcement with an invitation to raise concerns (in elder-led polity), the principle is the same: the people who know the candidate best have a voice. This is not mob rule — elders retain authority to evaluate concerns and make the final decision. But the congregation's input protects against blind spots in the leadership's assessment and ensures that no one is installed over the objection of people with legitimate knowledge. A candidate whose installation generates genuine, credible concerns should be paused, not rushed through."
  },
  {
    num: 6,
    title: "Public Examination Sermon / Testimony",
    color: GREEN,
    body: "For teaching elders, the public examination sermon is a significant moment: the candidate preaches or teaches publicly, and the congregation witnesses his gift. This is not a performance audition but a fulfillment of the principle that giftedness in teaching must be confirmed — not just claimed. For deacons and ruling elders whose role is not primarily teaching, a public testimony serves a similar function: the candidate shares his faith, his sense of call, and his commitment before the congregation. 1 Timothy 4:14 connects the laying on of hands to a prophecy spoken over Timothy — the community's recognition of God's call made public. The public dimension matters."
  },
  {
    num: 7,
    title: "Formal Ordination / Installation",
    color: "#6B4FBB",
    body: "The ordination service is a worship service, not a formality. It should include: a sermon on the nature of the office and the weight of the calling; the formal laying on of hands by the existing elders (and, where appropriate, other ordained ministers present); a charge given to the new elder or deacon — specific, personal, and scriptural; prayer by the congregation over the candidate; and a formal welcome into the leadership of the church. The service publicly commits the church to support, submit to, and hold accountable this new leader. It is a covenant moment — the church and the leader making public promises to each other under God."
  },
  {
    num: 8,
    title: "Ongoing Training & Accountability",
    color: "#F59E0B",
    body: "Ordination is not the end of formation — it is the beginning of a new season. Installed elders and deacons should participate in: annual elder retreats for theological study, vision alignment, and mutual pastoral care; continuing theological education (books, conferences, formal courses); annual personal reviews conducted by a peer or mentor elder — honest assessment of spiritual health, leadership effectiveness, and growth areas; and the ongoing rhythms of mutual accountability that make the plurality of elders more than an organizational chart. Leaders who stop growing stop leading well. The church should invest generously in the ongoing formation of its leaders — their growth is the congregation's growth."
  },
];

const ELDER_VIDEOS = [
  { videoId: "ej_6dVdJSIU", title: "The Role of Elders in the Church", channel: "9Marks", description: "Mark Dever on the biblical qualifications, responsibilities, and spiritual authority of elders in the local church." },
  { videoId: "rtkS_8VWfB0", title: "Training Church Leaders", channel: "The Gospel Coalition", description: "How to identify, train, and support elders and deacons — investing in leadership for the long-term health of the church." },
  { videoId: "zUKzVFQn4Tc", title: "Servant Leadership in the Church", channel: "Desiring God", description: "John Piper on the character qualifications in 1 Timothy 3 and Titus 1 — what God requires of those who lead his church." },
  { videoId: "gV9JugO_5Mk", title: "Deacons and Service Ministry", channel: "Ligonier Ministries", description: "R.C. Sproul on the office and ministry of deacons — how they free elders for prayer and the Word while serving practical needs." },
];

const RESOURCES = [
  {
    title: "Biblical Eldership",
    author: "Alexander Strauch",
    publisher: "Lewis & Roth Publishers",
    color: "#8B5CF6",
    desc: "The most widely used evangelical book on elders. Comprehensive, biblically grounded, and practically oriented. Strauch argues from the New Testament for a return to genuine plurality of elders. Required reading for anyone being examined for eldership.",
    url: undefined
  },
  {
    title: "The Deliberate Church",
    author: "Mark Dever & Paul Alexander",
    publisher: "9Marks / Crossway",
    color: "#10B981",
    desc: "A practical guide to building a healthy church around elder leadership and congregationalism. Covers polity, membership, preaching, and the slow work of church culture change. Essential for pastors and elders who want to build something lasting.",
    url: undefined
  },
  {
    title: "9Marks Ministry",
    author: "Mark Dever",
    publisher: "9marks.org",
    color: "#3B82F6",
    desc: "The most comprehensive free resource on church health including elder training. Free articles, podcasts, interviews, and books covering every aspect of church polity, eldership, membership, and discipline. The podcast archive alone is worth hundreds of hours of study.",
    url: "https://www.9marks.org"
  },
  {
    title: "Elders in the Life of the Church",
    author: "Phil Newton & Matt Schmucker",
    publisher: "9Marks / Kregel",
    color: "#F59E0B",
    desc: "A practical guide to elder implementation: how to move a church from single-pastor to plurality, how to structure elder meetings, how to handle elder conflict, and how to communicate with the congregation. Grounded in real church experience.",
    url: undefined
  },
  {
    title: "The Deacon",
    author: "Matt Smethurst",
    publisher: "9Marks",
    color: "#EF4444",
    desc: "Short, accessible, and excellent. The recommended first read for new deacons. Covers the biblical basis, the qualifications, and the practical ministry of deacons with pastoral warmth. Can be read in an afternoon; will shape a decade of service.",
    url: undefined
  },
  {
    title: "Deacons: How They Serve and Strengthen the Church",
    author: "Matt Smethurst",
    publisher: "Crossway",
    color: "#6B4FBB",
    desc: "A biblical theology and practical guide to the deacon's role. Deeper than the shorter booklet, this volume traces the diaconal ministry through both testaments and into practical application for contemporary churches. Highly recommended for deacon training cohorts.",
    url: "https://www.9marks.org"
  },
];

export default function ElderDeaconTrainingPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_elder-deacon-training_tab", "elders");

  const [edtEntries, setEdtEntries] = useState<{ id: string; date: string; role: string; applying: string; question: string }[]>(() => {
    try { const s = localStorage.getItem("vine_edt_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [edtForm, setEdtForm] = useState({ role: "", applying: "", question: "" });
  const [edtSaved, setEdtSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_edt_entries", JSON.stringify(edtEntries)); }, [edtEntries]);
  function saveEdtEntry() {
    if (!edtForm.role.trim()) return;
    setEdtEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...edtForm }, ...prev]);
    setEdtForm({ role: "", applying: "", question: "" });
    setEdtSaved(true); setTimeout(() => setEdtSaved(false), 2000);
  }
  function deleteEdtEntry(id: string) { setEdtEntries(prev => prev.filter(e => e.id !== id)); }
  const [selectedElder, setSelectedElder] = usePersistedState<string>("vine_elder-deacon-training_selected_elder", "qualifications");

  const selElder = ELDERS.find(e => e.id === selectedElder) || ELDERS[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>✝</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Elder & Deacon Training</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto" }}>
            Biblical qualifications, the elder and deacon offices, a complete training pathway, and recommended resources — everything a church needs to identify, form, and install faithful leaders.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["elders", "deacons", "training", "resources", "journal", "videos"] as Tab[]).map(t => (
            <button type="button"
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: "none",
                background: tab === t ? GREEN : "transparent",
                color: tab === t ? BG : MUTED,
                fontWeight: 700,
                fontSize: 12,
                cursor: "pointer",
              }}
            >
              {t === "elders" ? "Elders / Overseers" : t === "deacons" ? "Deacons" : t === "training" ? "Training Pathway" : t === "resources" ? "Resources" : t === "journal" ? "📓 My Journal" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {tab === "elders" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 16, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {ELDERS.map(item => (
                <div
                  key={item.id}
                  onClick={() => setSelectedElder(item.id)}
                  style={{
                    background: CARD,
                    border: `1px solid ${selectedElder === item.id ? item.color + "60" : BORDER}`,
                    borderRadius: 12,
                    padding: 18,
                    cursor: "pointer",
                  }}
                >
                  <div style={{ color: item.color, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ color: MUTED, fontSize: 12 }}>{item.summary}</div>
                </div>
              ))}
            </div>
            <div style={{ position: "sticky", top: 20, background: CARD, border: `1px solid ${selElder.color}40`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: selElder.color, fontWeight: 900, fontSize: 16, marginBottom: 8 }}>{selElder.title}</div>
              <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.75, marginBottom: 14 }}>{selElder.details}</p>
              <div style={{ background: `${selElder.color}10`, border: `1px solid ${selElder.color}20`, borderRadius: 8, padding: "10px 14px", marginBottom: 12 }}>
                <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>KEY TEXTS</div>
                <div style={{ color: selElder.color, fontSize: 12, fontWeight: 700 }}>{selElder.keyTexts}</div>
              </div>
              <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>PRACTICAL NOTE</div>
                <div style={{ color: TEXT, fontSize: 12, lineHeight: 1.65 }}>{selElder.practical}</div>
              </div>
            </div>
          </div>
        )}

        {tab === "deacons" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
            {DEACONS.map((d, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${d.color}25`,
                  borderRadius: 12,
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div style={{ color: d.color, fontWeight: 900, fontSize: 14 }}>{d.title}</div>
                <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.75, margin: 0, flex: 1 }}>{d.content}</p>
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                  <span style={{ color: MUTED, fontSize: 10, fontWeight: 800 }}>KEY TEXT </span>
                  <span style={{ color: d.color, fontSize: 11, fontWeight: 700 }}>{d.text}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "training" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}25`, borderRadius: 10, padding: "14px 18px", marginBottom: 24 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>About This Pathway</div>
              <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                This pathway applies to both elders and deacons, with adjustments noted for teaching elders. The timeline is intentionally slow — character formation cannot be rushed. A church that installs leaders quickly will spend years managing the consequences. A church that is patient and thorough will produce leaders who last.
              </p>
            </div>
            {TRAINING_STEPS.map((step, i) => (
              <div key={step.num} style={{ display: "flex", gap: 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 16 }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: step.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: 13,
                    color: BG,
                    flexShrink: 0,
                  }}>
                    {step.num}
                  </div>
                  {i < TRAINING_STEPS.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: BORDER, minHeight: 20, marginTop: 4, marginBottom: 4 }} />
                  )}
                </div>
                <div style={{
                  background: CARD,
                  border: `1px solid ${step.color}25`,
                  borderRadius: 12,
                  padding: "16px 20px",
                  marginBottom: 12,
                  flex: 1,
                }}>
                  <div style={{ color: step.color, fontWeight: 800, fontSize: 14, marginBottom: 8 }}>{step.title}</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "resources" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
            {RESOURCES.map((r, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${r.color}25`,
                  borderRadius: 12,
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div style={{ color: r.color, fontWeight: 900, fontSize: 14 }}>{r.title}</div>
                <div style={{ color: MUTED, fontSize: 11 }}>{r.author}</div>
                <div style={{ fontSize: 10, color: MUTED, background: `${r.color}10`, border: `1px solid ${r.color}20`, borderRadius: 6, padding: "3px 8px", width: "fit-content" }}>{r.publisher}</div>
                <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.7, margin: 0, flex: 1 }}>{r.desc}</p>
                {r.url !== undefined && (
                  <a
                    href={r.url}
                    target="_blank" rel="noopener noreferrer"
                    style={{ color: r.color, fontSize: 11, fontWeight: 700, textDecoration: "none", marginTop: 4 }}
                  >
                    {r.url} →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>My Leadership Journal</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>Reflect on the role you serve in (or aspire to), how you are applying this training, and questions you are bringing to your formation. Saved privately in your browser.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>ROLE I SERVE IN OR ASPIRE TO *</label>
                <textarea value={edtForm.role} onChange={e => setEdtForm(f => ({ ...f, role: e.target.value }))}
                  placeholder="Are you an elder, deacon, aspiring to one of these roles, or in another church leadership position?" rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>HOW I AM APPLYING THIS TRAINING</label>
                <textarea value={edtForm.applying} onChange={e => setEdtForm(f => ({ ...f, applying: e.target.value }))}
                  placeholder="What from this guide are you actively applying in your leadership context?" rows={3}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>QUESTION I AM BRINGING TO MY MENTOR</label>
                <textarea value={edtForm.question} onChange={e => setEdtForm(f => ({ ...f, question: e.target.value }))}
                  placeholder="What question about elder/deacon ministry do you want to bring to a pastor or mentor?" rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveEdtEntry}
                style={{ background: edtSaved ? GREEN : PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {edtSaved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {edtEntries.length > 0 && (
              <div>
                <h3 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 14, letterSpacing: 1 }}>SAVED ENTRIES ({edtEntries.length})</h3>
                {edtEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18, marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                      <button type="button" onClick={() => deleteEdtEntry(entry.id)}
                        style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                    </div>
                    {entry.role && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontWeight: 700, fontSize: 11 }}>ROLE: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.role}</span></div>}
                    {entry.applying && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontWeight: 700, fontSize: 11 }}>APPLYING: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.applying}</span></div>}
                    {entry.question && <div><span style={{ color: MUTED, fontWeight: 700, fontSize: 11 }}>QUESTION: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.question}</span></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {ELDER_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
      </main>
      <Footer />
    </div>
  );
}
