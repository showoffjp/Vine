"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", INDIGO = "#6366F1", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Key Rapture Passage and What It Actually Says",
    verse: "1 Thessalonians 4:16-17",
    text: "For the Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God, and the dead in Christ will rise first. After that, we who are still alive and are left will be caught up together with them in the clouds to meet the Lord in the air. And so we will be with the Lord forever. This is the passage on which rapture theology is built, and it deserves careful reading. The word translated 'caught up' is the Greek harpazo — seized, snatched, taken by force — which in the Latin became rapturo, giving us the English 'rapture.' So the event itself is real and biblical. What the passage does not specify is the timing relative to any tribulation period. Paul's immediate concern is pastoral: he is consoling Thessalonian believers who are worried about Christians who have already died. Will they miss Christ's return? No — the dead in Christ rise first, then the living are caught up together with them. The text says nothing about a seven-year tribulation or a secret coming distinct from the Second Coming; those details come from other passages and from interpretive frameworks layered onto this text by later theological systems.",
  },
  {
    title: "The Rapture Is a Modern Doctrine — Its History Matters",
    verse: "Matthew 24:40",
    text: "Then two men will be in the field; one will be taken and one left. This verse is a cornerstone of pre-tribulation rapture theology — the 'left behind' motif. But here is what every serious student of this doctrine must know: the specific framework of a pre-tribulation rapture, in which the church is secretly removed before a seven-year tribulation period begins, is not found in any substantial form in church history before the 1830s. It was developed and popularized by John Nelson Darby, an Irish Anglican minister who later founded the Plymouth Brethren movement, and spread through the English-speaking evangelical world largely through the Scofield Reference Bible (1909) and Darby's extensive American speaking tours. The early church fathers, the Reformers, the Puritans, and the theologians of the 18th century — all of whom wrote extensively about eschatology — did not teach a pre-tribulation rapture. This is not automatically a reason to reject it; new insights into Scripture are possible. But the recency of the doctrine, and the specific historical pathway by which it spread, should give any serious Christian pause before treating it as obvious biblical teaching.",
  },
  {
    title: "The Debate Is About Timing, Not Whether Christ Returns",
    verse: "John 14:2-3",
    text: "My Father's house has many rooms; if that were not so, would I have told you that I am going there to prepare a place for you? And if I go and prepare a place for you, I will come back and take you to be with me that you also may be where I am. Before entering the debate about rapture timing, it is essential to establish what all orthodox Christians agree on: Christ will return. The return of Christ is not a peripheral doctrine — it is one of the most frequently repeated promises in the New Testament, embedded in the Apostles' Creed, and held with equal conviction by pre-tribulationists, post-tribulationists, amillennialists, and every major Christian tradition. The debate is specifically about the timing and nature of the church's gathering to Christ: does it happen before a period of tribulation, during it, at its conclusion, or is the entire framework of a distinct seven-year tribulation a modern construct that should be questioned? These are real differences worth working through, but they should not obscure the common confession that Jesus is coming back and that his coming is the church's greatest hope.",
  },
  {
    title: "The 'Left Behind' Scenario May Have the Wrong Interpretation",
    verse: "Matthew 24:40-41",
    text: "Two men will be in the field; one will be taken and one left. Two women will be grinding with a hand mill; one will be taken and one left. In the popular pre-tribulation rapture reading, 'taken' is the good outcome — the believer is raptured to safety — and 'left' is the bad outcome — the unbeliever is left to face judgment. But a strong case can be made that the text means the exact opposite. Jesus has just told the parable of Noah (Matthew 24:37-39): in the flood, it was the wicked who were 'taken away' in judgment while Noah and his family were left to inherit the renewed earth. If Jesus is using Noah as the interpretive framework for these verses — which the grammar strongly suggests, since verse 40 begins 'Then' (houtōs) — then 'taken' refers to those taken in judgment, and 'left' refers to those who remain to inherit the kingdom. This is not a fringe interpretation; it was the standard reading before Darbyite dispensationalism made the opposite reading dominant in popular evangelicalism. Scholars like N.T. Wright, Craig Blomberg, and others read it this way. The Left Behind novels may have the eschatological hero and villain entirely backwards.",
  },
  {
    title: "How You Live Now Is More Important Than When He Returns",
    verse: "Matthew 25:13",
    text: "Therefore keep watch, because you do not know the day or the hour. This is the conclusion Jesus draws from the parable of the ten virgins — five who prepared and five who did not. The answer to eschatological uncertainty in the Gospels is never doctrinal precision about the timetable; it is readiness. Jesus repeatedly declines to give his followers a prophetic schedule and repeatedly redirects the question to the matter of character, faithfulness, and active preparation. The bridesmaids who ran out of oil were not unorthodox in their eschatology — they just were not ready. In the parallel parable of the talents (Matthew 25:14-30), the servant condemned is not the one who had wrong beliefs about the master's return date; it is the one who buried his talent and did nothing while waiting. The church has spent enormous energy debating the timing of the rapture when Jesus has made clear that the productive response to his return is faithful stewardship, care for the poor, and watchful readiness — not eschatological map-making.",
  },
];

type RaptureView = { id: string; name: string; summary: string; strengths: string; concerns: string };

const views: RaptureView[] = [
  {
    id: "pretrib",
    name: "Pre-Tribulation Rapture",
    summary: "The church is raptured — secretly caught up to meet Christ in the air — before a seven-year tribulation period begins. During the tribulation, God deals specifically with ethnic Israel and the nations; the church is absent, having been removed to heaven. At the end of the seven years, Christ returns visibly with his saints (the Second Coming proper) to establish a millennial kingdom. This view is inseparably tied to dispensational theology, which draws a sharp distinction between God's program for Israel and his program for the church. It is the dominant eschatological framework in American evangelical popular culture, spread through the Scofield Reference Bible, the Dallas Theological Seminary tradition, Hal Lindsey's The Late Great Planet Earth, and Tim LaHaye's Left Behind series.",
    strengths: "Provides a systematic and internally coherent prophetic timeline. Takes Old Testament prophecy seriously as literal prediction about Israel's future. Has been enormously effective at generating popular interest in eschatology and Bible prophecy. The distinction between the rapture and the Second Coming allows texts like 1 Thessalonians 4 and Revelation 19 to describe distinct events without harmonization difficulties.",
    concerns: "The doctrine has virtually no historical support before John Nelson Darby in the 1830s — a remarkable absence given how extensively earlier theologians discussed eschatology. The sharp Israel/church distinction is difficult to reconcile with Pauline texts like Romans 11, Galatians 3:28-29, and Ephesians 2:11-22. The specific proof texts are exegetically contested: Matthew 24:40-41 may describe judgment, not rapture; 1 Thessalonians 4 says nothing about tribulation timing. Critics argue the system is built by harmonizing proof texts through a particular grid rather than derived from the natural reading of any single passage.",
  },
  {
    id: "midtrib",
    name: "Mid-Tribulation Rapture",
    summary: "The church is raptured at the midpoint of the seven-year tribulation — specifically at the 3.5-year mark, when the Antichrist breaks his covenant with Israel and begins the 'great tribulation.' The first half of the tribulation is human evil and judgment; the second half is the direct, intensified wrath of God, from which the church is protected by removal. The 'last trump' of 1 Corinthians 15:52 is identified with the seventh trumpet of Revelation 11, which sounds at the midpoint. This view maintains the dispensational framework while acknowledging that the church will experience some tribulation, consistent with the New Testament's promise of persecution.",
    strengths: "Accounts for the New Testament's promise that believers will face tribulation while still protecting them from the fullest expression of divine wrath. The identification of the 'last trump' with the seventh trumpet of Revelation provides a specific textual anchor. Recognizes that the early church did not expect to be exempt from suffering and difficulty.",
    concerns: "Still depends on the dispensational architecture (seven-year tribulation, Israel/church distinction) that is itself contested. The identification of the 'last trump' with the seventh trumpet requires cross-referencing two very different literary contexts. The midpoint rapture is a minority position even within dispensationalism and lacks the broad popular following of pre- or post-tribulationism. The hermeneutical decisions required to locate this view precisely in the text are numerous and complex.",
  },
  {
    id: "posttrib",
    name: "Post-Tribulation Rapture",
    summary: "The church goes through the entire tribulation period and is caught up to meet Christ as he descends at the end — a triumphant escort back to earth, not an evacuation to heaven. The 'meeting in the air' of 1 Thessalonians 4:17 is understood like an official delegation going out of the city gates to welcome a returning king and accompany him back in. The church is present through the tribulation, protected by God as Israel was in Goshen during the plagues of Egypt, but not removed from the earth. This view is the dominant evangelical position outside dispensational circles and has strong historical precedent in the early church fathers.",
    strengths: "Has the clearest historical support among the rapture positions — the early church expected to face tribulation, not escape it. Avoids the exegetical difficulties of the pre-tribulation view: 1 Thessalonians 4 describes one event (Christ's descent), not two separate comings. The 'meeting' language (Greek: apantesis) in 1 Thessalonians 4:17 is used in the New Testament specifically for the civic custom of escorting a returning dignitary — which implies going out and coming back, not being taken away. Consistent with the New Testament's persistent promise that Christians will face suffering and persecution.",
    concerns: "Must explain how the church survives the tribulation's intensity if it is present throughout. The absence of the church from Revelation 4-18 (after the letters to the seven churches in chapters 2-3) is used by pre-tribulationists as evidence for a pre-trib removal, though this argument from silence is disputed. Requires a view of the tribulation that distinguishes between general suffering (which Christians experience) and divine wrath (from which they are protected).",
  },
  {
    id: "prewrath",
    name: "Pre-Wrath Rapture",
    summary: "The church is raptured before the final 'bowls of wrath' (Revelation 16) but after the seal and trumpet judgments. The tribulation begins with the Antichrist's persecution of the church and Israel (the seals and trumpets), but the specific 'wrath of God' — the bowl judgments — comes at the end. The rapture occurs at the opening of the seventh seal, when the 'great multitude' appears in heaven (Revelation 7:9-17), which is identified as the raptured church. This position was developed by Marvin Rosenthal in The Pre-Wrath Rapture of the Church (1990) and refined by Robert Van Kampen.",
    strengths: "Distinguishes carefully between 'tribulation' (human and satanic persecution) and 'wrath of God' (divine judgment), arguing that the church is promised exemption only from the latter. This distinction is exegetically defensible: 1 Thessalonians 5:9 says 'God did not appoint us to suffer wrath,' which may refer specifically to divine judgment rather than all difficulty. Takes the sequential structure of Revelation's judgments more seriously than other views.",
    concerns: "A relatively recent position (1990) without deep historical roots. The specific identification of the rapture with the seventh seal involves a complex series of cross-references that many scholars find over-determined. Like mid-tribulationism, it depends on the dispensational framework while modifying one of its central claims, leaving it caught between the strengths and weaknesses of both parent positions.",
  },
];

const voices = [
  {
    id: "ntw",
    name: "N.T. Wright",
    role: "Author, Surprised by Hope; Former Bishop of Durham",
    quote: "The Left Behind books, and the theology they embody, are not merely mistaken at a few points. They are wrong at the level of their entire vision of what God intends for the world and for human beings. The rapture theology assumes that God's plan is to rescue people out of the world, whereas the New Testament teaches that God's plan is the renewal of the world. It assumes that 'going to heaven' is the ultimate destination, whereas the New Testament teaches bodily resurrection in a renewed earth. It reads Matthew 24 and 1 Thessalonians 4 as a literal timetable, whereas the New Testament uses apocalyptic language to make theological and pastoral points.",
    bio: "Wright is the most prominent New Testament scholar in the English-speaking world to have engaged rapture theology directly and critically. In Surprised by Hope and various essays, he argues that the pre-tribulation rapture is not merely one position among others on a secondary issue — it represents a fundamental misreading of what the New Testament says about the resurrection, the new creation, and the destiny of the people of God. His exegesis of 1 Thessalonians 4 and Matthew 24 challenges the plain-text readings on which popular rapture theology depends. Whether or not one accepts his conclusions, his critique requires a response from anyone who holds the pre-trib position seriously.",
  },
  {
    id: "jmac",
    name: "John MacArthur",
    role: "Pastor, Grace Community Church; Author, The Second Coming",
    quote: "The pre-tribulational rapture is not a peripheral doctrine — it is a necessary implication of dispensational hermeneutics, which is simply the consistent, literal interpretation of Scripture. When you interpret prophecy the way you interpret the historical narratives and epistles — literally and grammatically — you inevitably arrive at a pre-tribulational rapture. The church is not Israel, Israel is not the church, and the promises God made to ethnic Israel in the Old Testament will be fulfilled literally. The rapture is the mechanism by which God removes the church so that he can deal with Israel and the nations in the tribulation.",
    bio: "MacArthur is the most prominent living defender of dispensational premillennialism and the pre-tribulation rapture in the Reformed-ish evangelical tradition. His commentaries, sermons, and the Grace to You radio ministry have made him one of the most influential voices for this position in the world. His defense of pre-tribulationism is inseparable from his broader commitment to dispensational hermeneutics: the sharp Israel/church distinction, the literal interpretation of Old Testament prophecy, and the two-stage return of Christ. His work on eschatology is the most rigorous popular-level defense of the pre-trib position currently available, and it must be taken seriously on its own terms before being critiqued.",
  },
  {
    id: "wgrudem",
    name: "Wayne Grudem",
    role: "Author, Systematic Theology; Research Professor, Phoenix Seminary",
    quote: "Christians may legitimately disagree on questions of the millennium and the rapture — these are areas where thoughtful, Bible-believing scholars have come to different conclusions after careful study of the same texts. What is clear and agreed upon is that Christ will return bodily, visibly, and gloriously; that the dead will be raised; and that there will be a final judgment. On the specific question of the rapture's timing relative to tribulation, I think the evidence slightly favors a post-tribulational view, though I hold this with an open hand. The church in every generation should be prepared to face tribulation, not expect to escape it.",
    bio: "Grudem's Systematic Theology is the most widely used evangelical systematic theology in seminary education, and his treatment of eschatology is a model of responsible engagement with a contested topic. He lays out the major positions fairly, presents the exegetical arguments for each, and comes to his own tentative conclusions while acknowledging the genuine difficulty of the texts. His willingness to state a position (mildly post-tribulationist) while strongly affirming the secondary status of the disagreement is a useful model for how Christians should hold eschatological convictions: with conviction but without the dogmatism that treats one's eschatological framework as a test of orthodoxy.",
  },
];

const scriptures = [
  { verse: "1 Thessalonians 4:16-17", text: "For the Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God, and the dead in Christ will rise first. After that, we who are still alive and are left will be caught up together with them in the clouds to meet the Lord in the air. And so we will be with the Lord forever." },
  { verse: "John 14:2-3", text: "My Father's house has many rooms; if that were not so, would I have told you that I am going there to prepare a place for you? And if I go and prepare a place for you, I will come back and take you to be with me that you also may be where I am." },
  { verse: "Matthew 24:40-41", text: "Two men will be in the field; one will be taken and one left. Two women will be grinding with a hand mill; one will be taken and one left." },
  { verse: "1 Corinthians 15:52", text: "In a flash, in the twinkling of an eye, at the last trumpet. For the trumpet will sound, the dead will be raised imperishable, and we will be changed." },
  { verse: "Revelation 20:4", text: "I saw thrones on which were seated those who had been given authority to judge. And I saw the souls of those who had been beheaded because of their testimony about Jesus and because of the word of God. They had not worshiped the beast or its image and had not received its mark on their foreheads or their hands. They came to life and reigned with Christ a thousand years." },
  { verse: "Matthew 25:13", text: "Therefore keep watch, because you do not know the day or the hour." },
];

type REntry = { id: string; date: string; belief: string; application: string; change: string };

export default function RapturePage() {
  const [tab, setTab] = useState("theology");
  const [rJournal, setRJournal] = useState<REntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_rapture_entries") ?? "[]"); } catch { return []; }
  });
  const [jBelief, setJBelief] = useState("");
  const [jApplication, setJApplication] = useState("");
  const [jChange, setJChange] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_rapture_entries", JSON.stringify(rJournal)); } catch {}
  }, [rJournal]);

  function saveEntry() {
    if (!jBelief.trim() && !jApplication.trim()) return;
    setRJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), belief: jBelief, application: jApplication, change: jChange }, ...prev]);
    setJBelief(""); setJApplication(""); setJChange("");
  }
  function deleteEntry(id: string) { setRJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "views", "voices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Eschatology</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Rapture</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            One of the most debated questions in Christian theology — what the Bible actually says about the gathering of believers at Christ's return, when it happens, and what it means for how we live now.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? INDIGO : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: INDIGO, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "views" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {views.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{v.name}</div>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 0.75rem" }}>{v.summary}</p>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span style={{ color: INDIGO, fontWeight: 600, fontSize: "0.8rem" }}>Strengths: </span>
                    <span style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6 }}>{v.strengths}</span>
                  </div>
                  <div>
                    <span style={{ color: INDIGO, fontWeight: 600, fontSize: "0.8rem" }}>Concerns: </span>
                    <span style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6 }}>{v.concerns}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "voices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {voices.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                  <div style={{ color: INDIGO, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${INDIGO}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: INDIGO, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Rapture Theology Journal</h3>
                <textarea placeholder="What do I currently believe about the rapture, and why?" value={jBelief} onChange={e => setJBelief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="How does my understanding of Christ's return shape how I live now?" value={jApplication} onChange={e => setJApplication(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What would change in my daily life if I focused more on being ready?" value={jChange} onChange={e => setJChange(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: INDIGO, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {rJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : rJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.belief && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>My belief:</strong> {e.belief}</p>}
                  {e.application && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>How it shapes me:</strong> {e.application}</p>}
                  {e.change && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>What would change:</strong> {e.change}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "RMTnDEKDAr4", title: "The Rapture — Pre-Trib, Mid-Trib, or Post-Trib?", channel: "Ligonier Ministries", description: "A careful, balanced survey of the major rapture positions from a Reformed perspective — examining the exegetical arguments for each view and the theological commitments that drive them, without treating the question as settled." },
                { videoId: "6Y4EjU3LJhY", title: "N.T. Wright on the Rapture and Left Behind Theology", channel: "N.T. Wright Online", description: "Wright makes his case that the Left Behind scenario fundamentally misreads both 1 Thessalonians 4 and Matthew 24 — and that the New Testament's actual teaching on the resurrection and new creation is far more compelling than the rapture narrative that has dominated popular evangelicalism." },
                { videoId: "G1R-P9lCFmE", title: "What Is the Rapture? A Biblical Examination", channel: "The Gospel Coalition", description: "A thorough walk through the primary texts used in rapture theology — examining what each passage says in its original context, what it clearly teaches, and where interpreters diverge. Useful for anyone wanting to study the question rather than simply inherit an answer." },
                { videoId: "oVdgJpSM9TQ", title: "Dispensationalism and the Pre-Trib Rapture — History and Theology", channel: "Desiring God", description: "An exploration of how dispensational theology developed, why the pre-tribulation rapture became so dominant in American evangelical culture, and what the exegetical and theological stakes are in the debate between dispensational and covenant approaches to eschatology." },
              ].map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: INDIGO, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                    <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
