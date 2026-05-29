"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "positions" | "timeline" | "keypassages" | "resources";

const POSITIONS = [
  {
    name: "Historic Premillennialism",
    color: GREEN,
    summary: "Christ will return bodily before (pre) a literal 1,000-year (millennium) reign on earth. The church goes through the Tribulation, is resurrected at Christ's return, and reigns with Him for the millennium before the eternal state. The oldest of the major positions, held by Irenaeus, Justin Martyr, Papias, and most early church fathers.",
    key_texts: ["Revelation 20:1-6", "Zechariah 14:1-9", "Isaiah 65:20-25"],
    advocates: "George Ladd, Wayne Grudem, Craig Blomberg",
    strengths: "Most natural reading of Revelation 20; strong patristic support; takes the literal millennium seriously without dispensational distinctives",
    weaknesses: "Requires distinguishing general resurrection from millennial resurrection; Israel/church relationship ambiguous",
    initials: "HPM",
  },
  {
    name: "Dispensational Premillennialism",
    color: "#3B82F6",
    summary: "The dominant view in American evangelicalism. Like Historic Premil in affirming a future millennium, but adds: a secret rapture of the church before a 7-year Tribulation, a distinction between Israel and the church as separate groups with separate destinies, and a literal fulfillment of all OT prophecy in national Israel. Made famous by the Scofield Reference Bible and Left Behind series.",
    key_texts: ["1 Thessalonians 4:16-17", "Daniel 9:24-27", "Revelation 6-19"],
    advocates: "John Walvoord, Charles Ryrie, Tim LaHaye, J. Dwight Pentecost",
    strengths: "Takes biblical literalism consistently; clear chronology; distinguishes Israel and church",
    weaknesses: "The rapture is never explicitly described; Israel-church distinction challenged by NT; relatively recent innovation (1830s Darby)",
    initials: "DPM",
  },
  {
    name: "Amillennialism",
    color: PURPLE,
    summary: "The millennium (Revelation 20) is not a future literal 1,000-year period but the present church age, between Christ's first and second comings, during which Satan is bound in the sense that the gospel goes to all nations. Christ returns once at the end of the age, the resurrection and judgment occur, and the eternal state begins. Augustine's position; the Reformers' position; the dominant Reformed position today.",
    key_texts: ["Revelation 20:1-6 (symbolic reading)", "Romans 11:25-27", "Matthew 12:29"],
    advocates: "Augustine, Calvin, Luther, Anthony Hoekema, Kim Riddlebarger, Sinclair Ferguson",
    strengths: "Consistency with NT use of OT prophecy (typological fulfillment in Christ and church); simpler eschatology; mainstream Reformed position",
    weaknesses: "The binding of Satan (Rev 20:2) seems inconsistent with present experience; requires symbolic reading of what reads as sequential",
    initials: "AMI",
  },
  {
    name: "Postmillennialism",
    color: "#F59E0B",
    summary: "The millennium is the church age in which the gospel progressively wins and transforms cultures, nations, and societies, until a golden age of Christian civilization precedes Christ's return. Christ returns after (post) the millennium. Popular in 19th century American evangelicalism; experienced revival in Reformed and Reconstructionist circles since the 1970s.",
    key_texts: ["Isaiah 2:2-4", "Psalm 110:1-2", "Matthew 13:31-33", "Romans 11:25-27"],
    advocates: "Jonathan Edwards, Loraine Boettner, Greg Bahnsen, R.J. Rushdoony, Doug Wilson",
    strengths: "Takes the Great Commission's global reach seriously; optimistic view of gospel power; Edwards held it during the First Great Awakening",
    weaknesses: "Current global conditions seem contrary; requires reinterpretation of NT persecution and apostasy texts; out of fashion since WWI",
    initials: "PMM",
  },
];

const TIMELINE = [
  { event: "Church Age (Now)", color: GREEN, refs: "Matthew 24:14; Romans 11:25", desc: "The present age in which the gospel goes to all nations, the Holy Spirit is poured out, and the church is being gathered from every people group. All positions agree we are in this era." },
  { event: "Rapture / Gathering (Pre-mil, Dispensational)", color: "#3B82F6", refs: "1 Thessalonians 4:16-17; 1 Corinthians 15:51-52", desc: "In Dispensational Premillennialism, Christ appears in the clouds to remove the church from earth before the Tribulation. The church is not present during the Tribulation. Disputed by all other positions." },
  { event: "The Tribulation (7 years in Dispensationalism)", color: "#EF4444", refs: "Daniel 9:27; Matthew 24:21; Revelation 6-16", desc: "A period of unprecedented divine judgment on earth. Dispensationalism places this before the millennium; other views interpret the tribulation language as referring to the entire church age or Rome's destruction in 70 AD." },
  { event: "Rise of the Antichrist", color: "#F59E0B", refs: "2 Thessalonians 2:3-8; Daniel 9:27; Revelation 13", desc: "The man of lawlessness — restrained during the church age, revealed before Christ's return. Whether this is a single historical figure or a typological pattern repeated throughout history is debated." },
  { event: "Battle of Armageddon", color: "#EF4444", refs: "Revelation 16:16; 19:19-21; Zechariah 14", desc: "The final confrontation between the armies of the Antichrist and Christ. Revelation 19 describes the return of Christ as a conquering King who destroys the beast and the false prophet." },
  { event: "Second Coming of Christ", color: GREEN, refs: "Matthew 24:30; Acts 1:11; Revelation 19:11-16; Zechariah 14:4", desc: "The literal, visible, bodily return of Jesus Christ to earth. All positions agree on this event. Premillennialists place the millennium after; amillennialists see this as the final event before the eternal state." },
  { event: "The Millennium (1,000 years)", color: PURPLE, refs: "Revelation 20:1-6; Isaiah 65:20-25", desc: "A period in which Satan is bound and Christ reigns. Premillennialists believe this is a future literal reign; amillennialists see it as the present church age; postmillennialists see it as a coming golden age of Christian civilization." },
  { event: "Final Judgment (Great White Throne)", color: "#F59E0B", refs: "Revelation 20:11-15; Matthew 25:31-46; John 5:28-29", desc: "The judgment of all people — believers and unbelievers — at the end of the age. All positions agree on this event as the final accounting before the eternal state." },
  { event: "New Creation (Eternal State)", color: GREEN, refs: "Revelation 21-22; Isaiah 65:17; 2 Peter 3:13; Romans 8:21", desc: "The renewed heavens and earth in which God dwells with His people forever. All positions agree on this as the final destination — the restoration of Eden and more, the New Jerusalem, face-to-face relationship with God." },
];

const KEY_PASSAGES = [
  { ref: "Daniel 9:24-27", name: "The 70 Weeks", color: GREEN, summary: "Daniel's prophecy of 70 sevens (490 years) — the foundational eschatological timetable for both Testaments. The Dispensational reading sees a gap between the 69th and 70th week; the historic reading sees continuous fulfillment in Christ." },
  { ref: "Matthew 24 (Olivet Discourse)", name: "Signs of the End", color: PURPLE, summary: "Jesus's own end-times teaching — disputed between those who see it as fulfilled in 70 AD (partial preterism), those who see it as future (futurism), and those who see a dual reference (some fulfilled in 70 AD, some still future)." },
  { ref: "1 Thessalonians 4:13-18", name: "The Rapture Passage", color: "#3B82F6", summary: "Paul's description of the resurrection and gathering of believers at Christ's return. Dispensationalists see a secret rapture here; other positions read this as describing the one second coming at the end of the age." },
  { ref: "2 Thessalonians 2:1-12", name: "The Man of Lawlessness", color: "#EF4444", summary: "Paul describes a restrainer currently holding back the man of lawlessness. Interpretation of the restrainer (the Holy Spirit? the Roman Empire? the church?) drives much eschatological disagreement." },
  { ref: "Revelation 20:1-6", name: "The Millennium", color: "#F59E0B", summary: "The only biblical passage with the explicit 1,000-year reign. Premillennialists read this literally and sequentially; amillennialists read it as recapitulation (not sequence) and as symbolic of the church age." },
  { ref: "Romans 11:25-27", name: "All Israel Will Be Saved", color: "#10B981", summary: "Paul's statement that a partial hardening has come over Israel until the fullness of the Gentiles comes in, and then all Israel will be saved. Disputed whether Israel here means ethnic Israel or the full people of God (church)." },
  { ref: "Ezekiel 38-39", name: "Gog-Magog War", color: GREEN, summary: "A prophecy of a great northern coalition invading Israel in the latter days. Commonly interpreted as Russia + Iran + Turkey. Whether this is before, during, or after the millennium is hotly debated in prophecy circles." },
  { ref: "Zechariah 12-14", name: "The Return to Jerusalem", color: PURPLE, summary: "Jerusalem besieged, Israel mourning the One they pierced, the Mount of Olives splitting as Christ returns. Zechariah 14:4 is cited by Acts 1:11 as the manner of Christ's return — from where He ascended, He will return." },
];

const RESOURCES_DATA = [
  { title: "The Millennial Maze", author: "Stanley Grenz", color: GREEN, desc: "Balanced treatment of all four major positions with primary sources and pastoral application. The best single survey of the debate." },
  { title: "Three Views on the Millennium and Beyond", author: "Darrell Bock (ed.)", color: PURPLE, desc: "Premillennial, amillennial, and postmillennial scholars each present and respond to each other's views. Counterpoint format." },
  { title: "The Bible and the Future", author: "Anthony Hoekema", color: "#3B82F6", desc: "The finest amillennial treatment of eschatology available — comprehensive, scholarly, pastoral." },
  { title: "Revelation (NICNT)", author: "G.K. Beale", color: "#F59E0B", desc: "The magisterial scholarly commentary on Revelation from an amillennial perspective. The most thorough treatment of Revelation available in any commentary series." },
  { title: "Things to Come", author: "J. Dwight Pentecost", color: "#EF4444", desc: "The comprehensive textbook of Dispensational eschatology. If you want to understand the system, this is the source." },
  { title: "Behold Israel (Amir Tsarfati)", author: "beholdisrael.org", color: "#10B981", desc: "For real-time prophetic analysis of Israel and the Middle East from a premillennial, Israel-focused perspective." },
];

export default function EndTimesGuidePage() {
  const [tab, setTab] = useState<Tab>("positions");
  const [selected, setSelected] = useState<string | null>(null);

  const position = POSITIONS.find(p => p.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌅</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>End Times Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            A clear-headed guide to eschatology — the four major positions, the timeline of events, the key passages, and the best resources. Maranatha: Come, Lord Jesus.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: "12px 18px", marginBottom: 28 }}>
          <span style={{ color: GREEN, fontWeight: 700, fontSize: 12 }}>A word on eschatology: </span>
          <span style={{ color: MUTED, fontSize: 13 }}>
            Christians of good faith hold different positions on the millennium, the rapture, and the sequence of end-times events. These are secondary doctrines — the return of Christ, the resurrection, and the eternal state are primary. Hold your eschatological system loosely; hold the return of Christ firmly.
          </span>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["positions", "timeline", "keypassages", "resources"] as Tab[]).map(t => (
            <button key={t} onClick={() => { setTab(t); setSelected(null); }}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "positions" ? "4 Positions" : t === "timeline" ? "Timeline" : t === "keypassages" ? "Key Passages" : "Resources"}
            </button>
          ))}
        </div>

        {tab === "positions" && (
          <div style={{ display: "grid", gridTemplateColumns: position ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {POSITIONS.map((p, i) => (
                <button key={i} onClick={() => setSelected(selected === p.name ? null : p.name)}
                  style={{ background: selected === p.name ? `${p.color}12` : CARD, border: `1px solid ${selected === p.name ? p.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: `${p.color}20`, border: `1px solid ${p.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: p.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>{p.initials}</div>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{p.name}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{p.advocates}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            {position && (
              <div style={{ background: CARD, border: `1px solid ${position.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                <h2 style={{ color: position.color, fontWeight: 900, fontSize: 17, margin: "0 0 14px" }}>{position.name}</h2>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{position.summary}</p>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY TEXTS</div>
                  {position.key_texts.map((t, i) => <div key={i} style={{ color: TEXT, fontSize: 12, marginBottom: 3 }}>· {t}</div>)}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 10 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>STRENGTHS</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{position.strengths}</p>
                  </div>
                  <div style={{ background: "#EF444408", border: "1px solid #EF444420", borderRadius: 8, padding: 10 }}>
                    <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WEAKNESSES</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{position.weaknesses}</p>
                  </div>
                </div>
                <div style={{ color: MUTED, fontSize: 12 }}>Major advocates: {position.advocates}</div>
              </div>
            )}
          </div>
        )}

        {tab === "timeline" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {TIMELINE.map((e, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "0 0 20px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: e.color, border: `2px solid ${e.color}`, marginTop: 4 }} />
                  {i < TIMELINE.length - 1 && <div style={{ width: 2, flex: 1, background: BORDER, marginTop: 4 }} />}
                </div>
                <div style={{ background: CARD, border: `1px solid ${e.color}25`, borderRadius: 12, padding: 16, flex: 1 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6, flexWrap: "wrap" }}>
                    <div style={{ color: e.color, fontWeight: 800, fontSize: 14 }}>{e.event}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{e.refs}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "keypassages" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {KEY_PASSAGES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${p.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: p.color, fontWeight: 800, fontSize: 13, marginBottom: 4 }}>{p.ref}</div>
                <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>{p.name}</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.summary}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "resources" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {RESOURCES_DATA.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${r.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: r.color, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{r.title}</div>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{r.author}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
