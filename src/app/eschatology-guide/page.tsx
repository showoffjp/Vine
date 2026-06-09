"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "millennium", label: "Millennium Views" },
  { id: "rapture", label: "Rapture Debate" },
  { id: "israel", label: "Israel & Church" },
  { id: "tribulation", label: "Tribulation" },
  { id: "judgment", label: "Final Judgment" },
  { id: "new-creation", label: "New Creation" },
  { id: "living", label: "Living Eschatologically" },
  { id: "videos", label: "Videos" },
];

const ESCHA_TEXTS = [
  {
    ref: "Revelation 21:1-5",
    text: "Then I saw a new heaven and a new earth... And he who was seated on the throne said, 'Behold, I am making all things new.'",
    note: "The final Christian hope: not escape from creation but its total renewal. God dwelling with humanity.",
  },
  {
    ref: "1 Thessalonians 4:16-17",
    text: "For the Lord himself will descend from heaven with a cry of command... and the dead in Christ will rise first.",
    note: "Paul's reassurance to grieving Thessalonians: the dead in Christ will be raised at his return.",
  },
  {
    ref: "Matthew 24:36",
    text: "But concerning that day and hour no one knows, not even the angels of heaven, nor the Son, but the Father only.",
    note: "Jesus explicitly forbids date-setting. The timing of the end is hidden — faithfulness in the meantime is commanded.",
  },
  {
    ref: "2 Peter 3:9",
    text: "The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish.",
    note: "The delay of Christ's return is not failure — it is patience and mercy, giving more time for repentance.",
  },
];

const MILLENNIUM_VIEWS = [
  {
    view: "Historic Premillennialism",
    label: "Christ Returns, Then 1000 Years",
    color: RED,
    summary: "Christ returns bodily before (pre) the millennium — a literal or figurative 1,000-year reign on earth. After this, the final resurrection and judgment. The church passes through the Great Tribulation.",
    scholars: "George Ladd, Wayne Grudem, N.T. Wright (modified)",
    strength: "Natural reading of Revelation 20. Takes OT kingdom promises seriously as literal.",
    weakness: "Requires complex reading of OT and NT promises about the age to come.",
  },
  {
    view: "Dispensational Premillennialism",
    label: "Rapture, Tribulation, Millennium",
    color: GOLD,
    summary: "A pretribulation rapture removes the church before a 7-year Great Tribulation. Then Christ returns with the church to establish a literal 1,000-year kingdom centered in Jerusalem. Israel and the church are kept as separate entities.",
    scholars: "John Darby, C.I. Scofield, John Walvoord, Tim LaHaye",
    strength: "Strong focus on OT promises to Israel. Widely popular in American evangelicalism.",
    weakness: "Rapture doctrine not taught before 1830s. The two-people-of-God framework is debated by most NT scholars.",
  },
  {
    view: "Amillennialism",
    label: "The Millennium Is Now",
    color: GREEN,
    summary: "The 1,000 years represents the entire church age — Christ currently reigns from heaven over the church. There is no future literal millennium. One return of Christ, one resurrection, one judgment.",
    scholars: "Augustine, Calvin, Berkhof, Hoekema, Beale",
    strength: "Avoids complex dispensational distinctions. The most common view historically (Augustine onward). Consistent with NT's 'already/not yet' framework.",
    weakness: "The binding of Satan (Rev 20) seems hard to square with the current age of suffering and evil.",
  },
  {
    view: "Postmillennialism",
    label: "Gospel Advances to Millennium",
    color: TEAL,
    summary: "The gospel will progressively transform the world until a golden age of peace and righteousness (the 'millennium') before Christ returns. Christ returns after (post) this golden age.",
    scholars: "Jonathan Edwards, Charles Hodge, Rousas Rushdoony, Douglas Wilson",
    strength: "Optimistic about the gospel's world-transforming power. Great Commission is expected to genuinely succeed.",
    weakness: "Two World Wars and ongoing global evil make the optimism harder to sustain. Scripture seems to depict increasing opposition before Christ's return.",
  },
];

const RAPTURE_VIEWS = [
  {
    position: "Pretribulation Rapture",
    desc: "The church is 'caught up' to meet Christ in the air before the 7-year Great Tribulation (1 Thess 4:17). God removes the church before pouring out wrath on the earth. Then Christ returns with the church at the end of the Tribulation.",
    origin: "Developed by John Nelson Darby (~1830s). Popularized by the Scofield Reference Bible and the Left Behind series.",
    color: RED,
  },
  {
    position: "Midtribulation Rapture",
    desc: "The church endures the first 3.5 years of the Tribulation — the 'birth pangs' — but is raptured before the second half, the 'Great Tribulation' of God's wrath.",
    origin: "A mediating position; less widely held than pre- or post-trib.",
    color: GOLD,
  },
  {
    position: "Posttribulation Rapture",
    desc: "The church passes through the entire Tribulation before being caught up to meet Christ at his return. The 'rapture' is not a separate event but the church rising to greet the returning King.",
    origin: "The historic position of most Christians before Darby. George Ladd, Robert Gundry.",
    color: TEAL,
  },
  {
    position: "Prewrath Rapture",
    desc: "The church endures until the Day of the Lord begins (near the end of the Tribulation), then is raptured before the final divine wrath. Distinguishes between man's wrath (which the church endures) and God's wrath (which it doesn't).",
    origin: "Robert Van Kampen, Marvin Rosenthal (1990s). A recent alternative position.",
    color: BLUE,
  },
  {
    position: "No Rapture (Amillennial)",
    desc: "There is no separate rapture event. 1 Thessalonians 4:17 describes the general resurrection at Christ's return — believers rise to meet him and escort him back to earth. No pretrib or midtrib distinction.",
    origin: "Historic amillennialism. Held by most Reformed and Catholic theologians.",
    color: GREEN,
  },
];

const ISRAEL_CHURCH = [
  {
    view: "Replacement Theology (Supersessionism)",
    desc: "The church fulfills the promises made to Israel; national Israel has no special future role in God's plan. The church inherits the covenant promises. Widely held historically, though the term 'replacement' is contested.",
    color: BLUE,
  },
  {
    view: "Fulfillment Theology",
    desc: "The church does not replace Israel but fulfills and extends Israel's identity in Christ — the true Israel. Gentiles are grafted in. The church is the eschatological Israel, not a replacement. N.T. Wright, Peter Gentry.",
    color: TEAL,
  },
  {
    view: "Classic Dispensationalism",
    desc: "Israel and the church are two distinct peoples of God with two distinct programs and two distinct destinies. OT promises to Israel will be fulfilled literally in the millennial kingdom. The church did not inherit Israel's earthly promises.",
    color: GOLD,
  },
  {
    view: "Progressive Dispensationalism",
    desc: "A mediating position: Israel's promises are already being fulfilled in the church (inaugurated), while awaiting future fulfillment (consummated). Christ reigns from David's throne now, not only in a future millennium. Bock, Saucy.",
    color: GREEN,
  },
];

const JUDGMENT_POINTS = [
  {
    title: "The General Resurrection",
    desc: "All the dead will be raised — the righteous to eternal life, the unrighteous to judgment (John 5:28-29; Daniel 12:2). Resurrection precedes final judgment. Both are bodily: the same person who lived and died faces the verdict.",
    color: GREEN,
  },
  {
    title: "The Judgment Seat of Christ",
    desc: "Believers will give an account of their works — not for salvation (which is secure) but for reward or loss of reward (1 Corinthians 3:10-15; 2 Corinthians 5:10). The image is of a builder's work tested by fire.",
    color: TEAL,
  },
  {
    title: "The Great White Throne",
    desc: "Revelation 20:11-15 describes the final judgment of the unrighteous. The dead are judged by their works. Anyone not found in the Book of Life is cast into the lake of fire — the second death.",
    color: RED,
  },
  {
    title: "Views on Hell",
    desc: "Three positions: (1) Eternal Conscious Torment — the traditional view; (2) Annihilationism / Conditional Immortality — the wicked cease to exist; (3) Universal Reconciliation — all will ultimately be saved. Most evangelicals hold to ECT or annihilationism.",
    color: PURPLE,
  },
];

const LIVING_POINTS = [
  {
    title: "Urgency Without Anxiety",
    desc: "Because Christ could return at any time, every moment matters — but Jesus forbids anxious date-setting (Matthew 24:36-44). Live alert, not alarmed. Eschatology should produce diligence and faithfulness, not paralysis or speculation.",
    color: GREEN,
  },
  {
    title: "Hope Shapes Suffering",
    desc: "Paul's theology of suffering is thoroughly eschatological: 'the sufferings of this present time are not worth comparing with the glory that is to be revealed' (Romans 8:18). The final horizon transforms the present experience.",
    color: TEAL,
  },
  {
    title: "Creation Care Under Eschatology",
    desc: "The new creation is not creation's destruction but renewal — resurrection, not annihilation. This motivates creation care: we tend what God will redeem. Escapist eschatology (it's all going to burn) produces irresponsibility.",
    color: GOLD,
  },
  {
    title: "Justice and Patience",
    desc: "The certainty of final justice enables patience in the face of present injustice. God's delayed judgment is mercy toward the lost, not indifference to evil. Revelation was written to persecuted believers: God sees, and the end is his.",
    color: PURPLE,
  },
  {
    title: "Evangelism and Mission",
    desc: "Peter says we should hasten the coming of that day by holy living and mission (2 Peter 3:12). The end is not a speculative puzzle but a motivating reality: every person we meet is an eternal being heading toward the judgment seat.",
    color: BLUE,
  },
];

const VIDEOS = [
  { videoId: "0eJ2VUNnT8c", title: "Four Views on the Millennium" },
  { videoId: "kLYKlbqX_G0", title: "The Rapture — Separating Myth from Scripture" },
  { videoId: "JG8DtNlV2GI", title: "New Heaven and New Earth — N.T. Wright" },
  { videoId: "6DLSZ3eFHKo", title: "Final Judgment Explained" },
];

export default function EschatologyGuidePage() {
  const [tab, setTab] = useLocalStorage("vine_escha_tab", "overview");
  const [openMill, setOpenMill] = useLocalStorage("vine_escha_mill", "");
  const [openRap, setOpenRap] = useLocalStorage("vine_escha_rap", "");
  const [openIsrael, setOpenIsrael] = useLocalStorage("vine_escha_israel", "");
  const [journal, setJournal] = useLocalStorage("vine_escha_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🌅</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Eschatology</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>
            The doctrine of last things — the return of Christ, the millennium, the resurrection, final judgment, and the new creation. A comprehensive guide to end times theology across the major views.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", background: tab === t.id ? GREEN : CARD, color: tab === t.id ? "#fff" : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${GREEN}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>Why Eschatology Matters</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "0.75rem" }}>Eschatology is not a peripheral curiosity for prophecy charts — it is the horizon that gives all of Christian life its shape. What you believe about the end determines how you understand suffering, justice, mission, creation care, and the purpose of history.</p>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The most important eschatological conviction is not your millennium view — it is that Jesus Christ is coming back, history is heading somewhere, and God will make all things new. The secondary debates (millennium, rapture, Israel) are genuinely important but secondary to this core hope.</p>
            </div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Key Scriptures</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {ESCHA_TEXTS.map(t => (
                <div key={t.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                  <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.25rem" }}>{t.ref}</div>
                  <p style={{ fontStyle: "italic", color: TEXT, margin: "0 0 0.25rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>{t.note}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>Already / Not Yet</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>The key NT framework for eschatology is &ldquo;already / not yet.&rdquo; The kingdom of God has already broken in through Christ&apos;s first coming, resurrection, and the gift of the Spirit. But it is not yet fully consummated — we await the full revelation of the kingdom at Christ&apos;s return. Christians live in the overlap of the ages.</p>
            </div>
          </div>
        )}

        {/* MILLENNIUM */}
        {tab === "millennium" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GOLD }}>The Four Millennium Views</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The millennium (Revelation 20:1-10) — a 1,000-year period — is one of the most debated passages in eschatology. The four major views interpret it differently. All four are held by serious, Bible-believing Christians. This is a secondary doctrine on which Christians may differ.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {MILLENNIUM_VIEWS.map((m, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenMill(openMill === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ textAlign: "left" }}>
                      <span style={{ fontWeight: 700, color: m.color }}>{m.view}</span>
                      <div style={{ color: MUTED, fontSize: "0.8rem", marginTop: "0.1rem" }}>{m.label}</div>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openMill === String(i) ? "−" : "+"}</span>
                  </button>
                  {openMill === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem" }}>
                      <p style={{ color: TEXT, lineHeight: 1.7, marginBottom: "0.75rem" }}>{m.summary}</p>
                      <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}><strong style={{ color: TEAL }}>Key scholars:</strong> {m.scholars}</p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                        <div style={{ background: BG, borderRadius: 8, padding: "0.75rem", borderLeft: `3px solid ${GREEN}` }}>
                          <span style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem" }}>Strength: </span>
                          <span style={{ color: MUTED, fontSize: "0.85rem" }}>{m.strength}</span>
                        </div>
                        <div style={{ background: BG, borderRadius: 8, padding: "0.75rem", borderLeft: `3px solid ${RED}` }}>
                          <span style={{ color: RED, fontWeight: 700, fontSize: "0.85rem" }}>Challenge: </span>
                          <span style={{ color: MUTED, fontSize: "0.85rem" }}>{m.weakness}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RAPTURE */}
        {tab === "rapture" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: BLUE }}>The Rapture Debate</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The &ldquo;rapture&rdquo; refers to the catching up of believers described in 1 Thessalonians 4:16-17. Virtually all Christians affirm that believers will be gathered to meet Christ at his return. The debate is about when — before, during, or after the Great Tribulation — and whether this is a separate event from the Second Coming.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {RAPTURE_VIEWS.map((r, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenRap(openRap === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: r.color, textAlign: "left" }}>{r.position}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openRap === String(i) ? "−" : "+"}</span>
                  </button>
                  {openRap === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem" }}>
                      <p style={{ color: TEXT, lineHeight: 1.7, marginBottom: "0.75rem" }}>{r.desc}</p>
                      <p style={{ color: MUTED, fontStyle: "italic", fontSize: "0.85rem", margin: 0 }}>{r.origin}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ISRAEL */}
        {tab === "israel" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: TEAL }}>Israel and the Church</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>One of the most contested questions in eschatology: does national, ethnic Israel have a special future role in God&apos;s plan? Or have the promises to Israel been fulfilled/extended through the church? This question shapes almost every other end-times debate.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {ISRAEL_CHURCH.map((ic, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenIsrael(openIsrael === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: ic.color, textAlign: "left" }}>{ic.view}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openIsrael === String(i) ? "−" : "+"}</span>
                  </button>
                  {openIsrael === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem", color: MUTED, lineHeight: 1.7 }}>{ic.desc}</div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginTop: "1.5rem" }}>
              <div style={{ fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>Romans 9–11</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>Paul&apos;s most extended treatment of Israel&apos;s role in God&apos;s plan. He affirms God has not rejected his people (11:1), that Jewish hardening is partial and temporary (11:25), and that &ldquo;all Israel will be saved&rdquo; (11:26) — a contested phrase interpreted as ethnic Israel, the church, or a future mass Jewish conversion. The mystery is acknowledged; the mercy is certain.</p>
            </div>
          </div>
        )}

        {/* TRIBULATION */}
        {tab === "tribulation" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: RED }}>The Great Tribulation</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Jesus speaks of a &ldquo;great tribulation, such as has not been from the beginning of the world until now, no, and never will be&rdquo; (Matthew 24:21). Interpretations vary: (1) fulfilled in 70 AD (Jerusalem&apos;s destruction); (2) a future 7-year period at the end of history; (3) the general suffering of the church age.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { view: "Preterist View", desc: "Matthew 24 was substantially fulfilled in the events of 66–70 AD — the Roman siege of Jerusalem and destruction of the temple. This view (full or partial) is held by many Reformed scholars: R.C. Sproul, N.T. Wright.", color: GREEN },
                { view: "Futurist / Dispensational View", desc: "A future 7-year period (Daniel's 70th week) consisting of 3.5 years of tribulation followed by 3.5 years of Great Tribulation. Israel returns to prominence; the Antichrist rises; God pours out judgments described in Revelation 6–18.", color: RED },
                { view: "Idealist View", desc: "The tribulation imagery of Revelation and Matthew 24 describes the general spiritual conflict of the entire church age, not specific future events. The symbols are trans-historical warnings, not predictions of a particular era.", color: PURPLE },
                { view: "Historicist View", desc: "Revelation describes the history of the church from the first century to the present — each seal, trumpet, and bowl corresponds to historical events (Rome, Islam, Reformation, etc.). The dominant view in Protestant history before the 19th century.", color: BLUE },
              ].map(t => (
                <div key={t.view} style={{ background: CARD, border: `1px solid ${t.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${t.color}` }}>
                  <div style={{ fontWeight: 700, color: t.color, marginBottom: "0.4rem" }}>{t.view}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JUDGMENT */}
        {tab === "judgment" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>The Final Judgment</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {JUDGMENT_POINTS.map(j => (
                <div key={j.title} style={{ background: CARD, border: `1px solid ${j.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${j.color}` }}>
                  <div style={{ fontWeight: 700, color: j.color, marginBottom: "0.4rem" }}>{j.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{j.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NEW CREATION */}
        {tab === "new-creation" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${GOLD}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GOLD }}>The New Creation</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The final Christian hope is not heaven (understood as a disembodied spiritual realm) but the new creation — a renewed, physical, embodied existence in a fully redeemed cosmos. Revelation 21-22 describes a new Jerusalem descending to a new earth. The story ends not with souls floating in the sky but with God dwelling in embodied glory with his people.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "Renewal, Not Annihilation", desc: "Romans 8:21 speaks of creation being 'set free from its bondage to corruption.' 2 Peter 3:10-13 speaks of the elements being 'burned up' — but the word suggests refinement/purification, not total destruction. The new creation is this creation renewed, not replaced.", color: GREEN },
                { title: "Embodied Existence", desc: "The resurrection guarantees embodied life in the new creation. The physical dimension of existence is redeemed, not discarded. We do not become angels or pure spirit — we are raised, glorified, embodied persons.", color: TEAL },
                { title: "God Dwells with Humanity", desc: "Revelation 21:3 — 'Behold, the dwelling place of God is with man.' The new creation consummates what the garden began: intimate, face-to-face communion between God and humanity, with no more separation, sin, death, or tears (21:4).", color: PURPLE },
                { title: "Cultural Continuity?", desc: "Revelation 21:26 speaks of 'the glory and honor of the nations' being brought into the New Jerusalem. N.T. Wright and others suggest that the redeemed works of human culture — art, music, scholarship, justice — may have continuity into the new creation, though transformed.", color: GOLD },
              ].map(n => (
                <div key={n.title} style={{ background: CARD, border: `1px solid ${n.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${n.color}` }}>
                  <div style={{ fontWeight: 700, color: n.color, marginBottom: "0.4rem" }}>{n.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LIVING */}
        {tab === "living" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>Living Eschatologically</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The purpose of eschatology is not speculation but transformation. The NT consistently uses end-times truths to ground present ethics, encourage the suffering, motivate the mission, and reorient how we value time, work, money, and relationships.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {LIVING_POINTS.map(l => (
                <div key={l.title} style={{ background: CARD, border: `1px solid ${l.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${l.color}` }}>
                  <div style={{ fontWeight: 700, color: l.color, marginBottom: "0.4rem" }}>{l.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{l.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginTop: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>Personal Reflection</h3>
              <textarea value={journal} onChange={e => setJournal(e.target.value)}
                placeholder="How does your eschatology shape daily life? What does it mean for you personally to live between 'already' and 'not yet'?"
                style={{ width: "100%", minHeight: 160, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              <div style={{ color: MUTED, fontSize: "0.8rem", marginTop: "0.5rem" }}>Saved automatically.</div>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Video Teaching</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))", gap: "1.25rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
