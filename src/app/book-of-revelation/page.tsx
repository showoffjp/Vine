"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Eye, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";

const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const RED = "#EF4444";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const MUTED = "#9898B3";
const TEXT = "#F2F2F8";

const TABS = ["overview", "genre", "views", "structure", "symbols", "comfort", "journal", "videos"] as const;
type Tab = (typeof TABS)[number];

const FOUR_VIEWS = [
  {
    name: "Preterist",
    color: GREEN,
    summary: "Most or all of Revelation was fulfilled in the first century — specifically in the Jewish-Roman War (66–70 AD) and the destruction of Jerusalem. Written as encouragement for Christians under Roman persecution.",
    key_claims: [
      "The 'beast' = Nero or Domitian",
      "'Babylon the Great' = Rome",
      "The 'great tribulation' = the siege of Jerusalem",
      "'Soon' and 'shortly' (Rev 1:1) mean first-century events",
    ],
    strengths: "Takes seriously the imminence language ('soon', 'at hand') and the historical context of Roman persecution.",
    weaknesses: "Struggles to explain the final chapters (new creation, universal resurrection) as first-century events.",
    advocates: "R.C. Sproul, Kenneth Gentry, David Chilton",
  },
  {
    name: "Historicist",
    color: GOLD,
    summary: "Revelation maps out the entire history of the church from the first century to the present — with various seals, trumpets, and bowls corresponding to historical events. Dominant Protestant view for 400 years.",
    key_claims: [
      "The Roman Catholic Church = the 'Whore of Babylon'",
      "The Reformation = part of the apocalyptic narrative",
      "History is unfolding the book's prophecies continuously",
    ],
    strengths: "Gave Reformers a framework for understanding their conflict with Rome as having cosmic significance.",
    weaknesses: "Different historicists produce wildly different historical mappings; the method lacks controls.",
    advocates: "Luther, Calvin, most Reformers; now largely abandoned",
  },
  {
    name: "Futurist",
    color: RED,
    summary: "Most of Revelation (chapters 4–22) refers to events that will happen at the end of history — the great tribulation, the Antichrist, the millennium, and the second coming. The majority evangelical view today.",
    key_claims: [
      "A literal 7-year Great Tribulation lies ahead",
      "A literal Antichrist will rise",
      "The rapture, millennium (1000 years), and final judgment are future events",
      "Israel has a distinct prophetic role",
    ],
    strengths: "Takes symbols seriously as pointing to real future events; gives weight to OT prophecy.",
    weaknesses: "The specific 'rapture' + tribulation scheme (dispensationalism) is largely post-1830. 'Literal' interpretation often selective.",
    advocates: "Most evangelical/fundamentalist churches; John MacArthur, Tim LaHaye (Left Behind)",
  },
  {
    name: "Idealist (Symbolic)",
    color: PURPLE,
    summary: "Revelation is not primarily about specific historical events past or future but about the ongoing cosmic battle between God and evil, church and empire, Christ and Satan — in every age.",
    key_claims: [
      "The symbols are not one-to-one prophecy but archetypal patterns",
      "Every age has its 'beasts' and 'Babylons'",
      "The church in every century faces the same spiritual conflict described",
      "The book is primarily about worship, endurance, and ultimate victory",
    ],
    strengths: "Explains why the book has spoken to every persecuted church in every century. Prevents newspaper exegesis.",
    weaknesses: "Risk of losing specific eschatological content; can seem to explain everything and predict nothing.",
    advocates: "Many Reformed and Anglican scholars; G.K. Beale, Richard Bauckham",
  },
];

const STRUCTURE = [
  { ref: "Chapters 1–3", title: "Letters to the Seven Churches", content: "Jesus addresses seven real first-century churches in Asia Minor: Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, Laodicea. Each letter follows a pattern: Christ's self-description, commendation, rebuke, call to repentance, and promise to overcomers. These letters are also seen as patterns for all churches in all times." },
  { ref: "Chapters 4–5", title: "The Heavenly Throne Room", content: "John is transported to heaven and sees God on the throne, surrounded by the four living creatures and twenty-four elders. The Lamb (Christ) who was slain is worthy to open the scroll — the only one in heaven, earth, or under the earth. This vision grounds everything that follows: God reigns; the Lamb has already won." },
  { ref: "Chapters 6–8", title: "The Seven Seals", content: "As the Lamb opens seven seals, history's catastrophes unfold: conquest, war, famine, death (the four horsemen), martyrdom, cosmic upheaval. The seventh seal leads into seven trumpets. Scholars debate whether these are sequential or recapitulatory (telling the same story in different ways)." },
  { ref: "Chapters 8–11", title: "The Seven Trumpets", content: "Plagues reminiscent of the Exodus judgments. The seventh trumpet announces: 'The kingdom of the world has become the kingdom of our Lord and of his Messiah, and he will reign for ever and ever.' Chapter 11 introduces the two witnesses." },
  { ref: "Chapters 12–14", title: "The Dragon and the Beasts", content: "The cosmic conflict: Satan (the dragon), the beast from the sea (empire/political power), the beast from the earth (false religion), and Babylon (corrupt civilization). Chapter 13 contains the famous '666' — the mark of the beast, widely interpreted as emperor Nero (whose name in Hebrew gematria = 666)." },
  { ref: "Chapters 15–16", title: "The Seven Bowls of Wrath", content: "Final, intensified judgments — similar to the trumpets but more complete. These are poured on those who bear the mark of the beast." },
  { ref: "Chapters 17–18", title: "The Fall of Babylon", content: "Babylon the Great — the great prostitute sitting on many waters — is judged. Her fall is mourned by kings and merchants but celebrated in heaven. Most scholars identify Babylon with Rome; the idealist view sees Babylon as any corrupt worldly system in any age." },
  { ref: "Chapters 19–20", title: "The Victory of Christ", content: "The rider on the white horse (Christ) defeats the beast and the false prophet. The millennium — 1,000 years — is described here. The four main views (premillennial, amillennial, postmillennial, and historic premillennial) all interpret this section differently." },
  { ref: "Chapters 21–22", title: "New Creation — New Jerusalem", content: "The new heavens, new earth, and New Jerusalem descend. 'God's dwelling place is now among the people, and he will dwell with them.' No more death, mourning, crying, or pain. The water of life flows freely. Revelation ends not with destruction but with restoration and renewal." },
];

const KEY_SYMBOLS = [
  { symbol: "The Lamb", meaning: "Jesus Christ — crucified and risen. He is worthy to open history's scroll precisely because he was slain. Power in weakness; victory through suffering." },
  { symbol: "The Dragon", meaning: "Satan — the ancient serpent (echoing Genesis 3). His power is real but derivative; he is defeated but not yet destroyed." },
  { symbol: "The Beast (Rev 13)", meaning: "Variously interpreted as: Nero, the Roman Empire, any totalitarian state that demands worship, a future Antichrist. The beast is the political embodiment of the dragon's agenda." },
  { symbol: "Babylon the Great", meaning: "Rome for the first readers; any culture or empire that seduces with luxury and demands idolatrous loyalty. The opposite of the New Jerusalem." },
  { symbol: "144,000", meaning: "The complete people of God — 12 x 12 x 1,000 symbolizing perfection and fullness, not a literal headcount. Drawn from the 12 tribes and 12 apostles." },
  { symbol: "666", meaning: "The number of the beast. Likely a gematria (numerical value of letters) for Nero Caesar in Hebrew: נרון קסר = 666. More broadly, falls one short of 7 (divine perfection) in every digit — the essence of imperfection and humanity without God." },
  { symbol: "The Seven Churches", meaning: "Real first-century churches that also represent the full range of church conditions — faithfulness, compromise, persecution, complacency — in every age." },
  { symbol: "The New Jerusalem", meaning: "The bride of Christ — the church/people of God in their consummated glory, descending from heaven as a gift. Paradise restored, the Eden vision fulfilled." },
];

const VIDEOS = [
  { id: "oNNo2WBRGkk", title: "Introduction to Revelation — The Bible Project" },
  { id: "GVo3i_3u2aI", title: "The Four Views of Revelation Explained" },
  { id: "m3T4Gf8bA_I", title: "Revelation's Symbols and Meaning — N.T. Wright" },
  { id: "8jzU8WdZzFY", title: "Reading Revelation as Apocalyptic Literature" },
];

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

export default function RevelationPage() {
  const [tab, setTab] = useLocalStorage("vine_rev_tab", "overview");
  const [expandedView, setExpandedView] = useLocalStorage("vine_rev_view", "");
  const [expandedSection, setExpandedSection] = useLocalStorage("vine_rev_section", "");
  const [journalQuestion, setJournalQuestion] = useLocalStorage("vine_rev_question", "");
  const [journalApplication, setJournalApplication] = useLocalStorage("vine_rev_apply", "");

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <Link href="/dashboard" style={{ color: MUTED, display: "flex", alignItems: "center" }}>
          <ArrowLeft size={18} />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: PURPLE + "22", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Eye size={18} color={PURPLE} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>Understanding the Book of Revelation</div>
            <div style={{ color: MUTED, fontSize: 12 }}>Genre, the four views, key symbols, and what it means today</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "0 20px", display: "flex", gap: 2, overflowX: "auto" }}>
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "12px 10px", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${PURPLE}` : "2px solid transparent", color: tab === t ? TEXT : MUTED, fontWeight: tab === t ? 600 : 400, fontSize: 12, cursor: "pointer", whiteSpace: "nowrap", textTransform: "capitalize" }}>
            {t}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>

        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>The Most Misread Book in the Bible</h2>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              Revelation has been used to predict the end of the world hundreds of times — and has been wrong every time. It has been associated with newspaper prophecy, cult theology, and sensationalist fiction (Left Behind). But it is also one of the most beautiful, pastorally rich, and theologically profound books in the canon.
            </p>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              The first step to understanding it: recognize what kind of book it is.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${PURPLE}44`, padding: 14 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>ORIGINAL AUDIENCE</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>Seven real churches in Roman Asia Minor, c. 95 AD — facing persecution under Domitian. The book was first a pastoral letter to them.</p>
              </div>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${GOLD}44`, padding: 14 }}>
                <div style={{ color: GOLD, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>CENTRAL MESSAGE</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>Jesus Christ is Lord — not Caesar. The Lamb who was slain has conquered. History is heading toward God's victory and the renewal of all things. Hold fast.</p>
              </div>
            </div>
            <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>What Revelation Is and Is Not</div>
              {[
                { is: "A pastoral letter to persecuted first-century Christians", isnt: "A newspaper predicting next year's events" },
                { is: "Apocalyptic literature using standard Jewish symbolic code", isnt: "Straightforward historical description" },
                { is: "A vision of Christ's ultimate cosmic victory", isnt: "A horror novel about tribulation suffering" },
                { is: "A call to worship, endurance, and faithfulness", isnt: "A mathematical puzzle to be decoded" },
              ].map((item, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 8 }}>
                  <div style={{ background: GREEN + "11", borderRadius: 6, padding: "6px 10px" }}>
                    <span style={{ color: GREEN, fontSize: 10, fontWeight: 600 }}>IS </span>
                    <span style={{ fontSize: 11, color: MUTED }}>{item.is}</span>
                  </div>
                  <div style={{ background: RED + "11", borderRadius: 6, padding: "6px 10px" }}>
                    <span style={{ color: RED, fontSize: 10, fontWeight: 600 }}>IS NOT </span>
                    <span style={{ fontSize: 11, color: MUTED }}>{item.isnt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "genre" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>The Genre: Apocalyptic Literature</h2>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              Revelation is an <em>apocalypse</em> — a specific literary genre with standard conventions that John's readers would have recognized immediately. Understanding the genre is the key to reading the book correctly.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { title: "Visionary / Symbolic Language", body: "Apocalyptic literature communicates through visions and symbols, not straightforward description. A seven-headed beast is not meant to be taken as a literal seven-headed creature — it is a symbol of overwhelming, multi-faceted empire. Symbolic language doesn't mean 'not real' — it means the reality is too big for literal description." },
                { title: "Numerology Has Conventional Meanings", body: "Numbers in apocalyptic literature have standard meanings: 7 = completeness/divine perfection; 12 = God's people; 4 = the earth; 1,000 = vast quantity; 6 = imperfection (one less than 7). A 'thousand years' may not mean 1,000 literal years any more than Psalm 50:10 ('cattle on a thousand hills') means God owns exactly 1,000 hills." },
                { title: "Written for the Oppressed", body: "Apocalyptic literature arises in contexts of persecution. Its coded language allowed the community to communicate about political realities (Nero, Rome, the emperor cult) without being immediately understood by their persecutors. 'Babylon' is not ambiguous to the original readers — it is Rome." },
                { title: "Cosmic Combat Narrative", body: "Apocalyptic literature tells a story of cosmic warfare between good and evil — with God's ultimate victory assured. It does not map geopolitical events with journalistic precision; it narrates the spiritual reality behind those events." },
                { title: "Revelatory (Unveiling) Purpose", body: "The word 'apokalypsis' means 'unveiling' — pulling back the curtain to show what is really going on. The book gives persecuted Christians a God's-eye view of history: despite appearances, Christ is Lord; the empire will fall; the Lamb has won." },
              ].map((g, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${PURPLE}33`, padding: 14 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: PURPLE, marginBottom: 6 }}>{g.title}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "views" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>The Four Main Interpretive Views</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Tap each view to read a detailed overview.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {FOUR_VIEWS.map((v) => {
                const isOpen = expandedView === v.name;
                return (
                  <div key={v.name} style={{ background: CARD, borderRadius: 10, border: `1px solid ${v.color}44` }}>
                    <button onClick={() => setExpandedView(isOpen ? "" : v.name)} style={{ width: "100%", background: "none", border: "none", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ background: v.color + "22", color: v.color, borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>{v.name.toUpperCase()}</span>
                      </div>
                      {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 16px 14px" }}>
                        <p style={{ fontSize: 13, color: "#C4C4DC", marginBottom: 12 }}>{v.summary}</p>
                        <div style={{ marginBottom: 10 }}>
                          <div style={{ color: v.color, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>KEY CLAIMS</div>
                          {v.key_claims.map((c, i) => (
                            <div key={i} style={{ display: "flex", gap: 8, marginBottom: 4 }}>
                              <span style={{ color: v.color, flexShrink: 0 }}>•</span>
                              <span style={{ fontSize: 12, color: MUTED }}>{c}</span>
                            </div>
                          ))}
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
                          <div style={{ background: GREEN + "11", borderRadius: 6, padding: 8 }}>
                            <div style={{ color: GREEN, fontSize: 10, fontWeight: 700, marginBottom: 4 }}>STRENGTHS</div>
                            <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{v.strengths}</p>
                          </div>
                          <div style={{ background: RED + "11", borderRadius: 6, padding: 8 }}>
                            <div style={{ color: RED, fontSize: 10, fontWeight: 700, marginBottom: 4 }}>WEAKNESSES</div>
                            <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{v.weaknesses}</p>
                          </div>
                        </div>
                        <div style={{ background: v.color + "11", borderRadius: 6, padding: "4px 8px" }}>
                          <span style={{ color: v.color, fontSize: 11, fontWeight: 600 }}>ADVOCATES: </span>
                          <span style={{ fontSize: 11, color: MUTED }}>{v.advocates}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "structure" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>The Book Chapter by Chapter</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>A plain-language guide to what happens in each section.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {STRUCTURE.map((s) => {
                const isOpen = expandedSection === s.ref;
                return (
                  <div key={s.ref} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <button onClick={() => setExpandedSection(isOpen ? "" : s.ref)} style={{ width: "100%", background: "none", border: "none", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ color: PURPLE, fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>{s.ref}</span>
                        <span style={{ fontSize: 14, fontWeight: 600 }}>{s.title}</span>
                      </div>
                      {isOpen ? <ChevronUp size={16} color={MUTED} style={{ flexShrink: 0 }} /> : <ChevronDown size={16} color={MUTED} style={{ flexShrink: 0 }} />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 16px 14px" }}>
                        <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{s.content}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "symbols" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Key Symbols Decoded</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>What the main images mean — drawing on the OT background John's audience would have known.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
              {KEY_SYMBOLS.map((s, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 14 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{s.symbol}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{s.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "comfort" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>What Revelation Means for Christians Today</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>
              Before it is predictive, Revelation is pastoral. Its first purpose is not to satisfy curiosity about the future but to sustain faith in the present.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { title: "The Lamb Has Already Won", verse: "Revelation 5:5–6; 12:11", body: "The central vision of the book is not the beast's triumph but Christ's. The Lamb who was slain is worthy. The victory of the cross is already decided. Whatever appears on the news, history's outcome is not in doubt." },
                { title: "God Sees What Empires Ignore", verse: "Revelation 6:9–11; 7:9–17", body: "The martyrs under the altar are heard. The vast uncountable multitude from every nation is there. Revelation says: history's hidden casualties are not forgotten. Martyrs have a voice. The nations' great have thrones — but so do the 24 elders who represent the people of God." },
                { title: "Worship Is the Christian Response", verse: "Revelation 4–5; 19:1–8", body: "More than any other book, Revelation depicts heaven as a worship assembly. Every crisis in the book is met with heavenly worship. The call to the church is not to decode prophecy but to worship the Lamb — in anticipation of what is already true in heaven." },
                { title: "The New Creation Is the Goal", verse: "Revelation 21:1–5", body: "Revelation ends not with destruction but with renewal — new heavens, new earth, God dwelling with his people, all things made new. This is not escapism but hope: what God made is worth saving, and he will save it. The gospel's goal is not heaven-as-escape but the restoration of all things." },
                { title: "Hold Fast", verse: "Revelation 2:10; 3:10–11; 14:12", body: "'Be faithful, even to the point of death' — this is the practical application. The visions don't answer the question 'when?' They answer 'why should I keep going?' Answer: because the Lamb has won, the martyrs are heard, and the New Jerusalem is coming." },
              ].map((c, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${GOLD}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{c.title}</div>
                  <div style={{ color: GOLD, fontSize: 11, fontWeight: 600, marginBottom: 8 }}>{c.verse}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Personal Reflection</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Saved to your device only.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>What questions about Revelation have confused or concerned you most? What did you assume about it before reading this guide?</label>
                <textarea value={journalQuestion} onChange={(e) => setJournalQuestion(e.target.value)} placeholder="I always thought Revelation meant… I was confused by… My church taught…" rows={4} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>What from Revelation gives you the most comfort, challenge, or awe?</label>
                <textarea value={journalApplication} onChange={(e) => setJournalApplication(e.target.value)} placeholder="The vision that most moves me is… the section I want to sit with more is… what I want to hold on to is…" rows={4} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              {(journalQuestion || journalApplication) && (
                <p style={{ fontSize: 11, color: MUTED, textAlign: "center" }}>Saved automatically to your device.</p>
              )}
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Video Teaching</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {VIDEOS.map((v) => (
                <div key={v.id} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <div style={{ padding: "10px 14px" }}>
                    <p style={{ fontSize: 13, fontWeight: 600, margin: 0 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Related */}
      <div style={{ padding: "0 20px 32px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16 }}>
          <p style={{ fontSize: 12, color: MUTED, marginBottom: 10 }}>Related Topics</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Eschatology Views", href: "/eschatology-views" },
              { label: "End Times", href: "/end-times" },
              { label: "NT Survey", href: "/new-testament-survey" },
              { label: "Systematic Theology", href: "/systematic-theology-101" },
              { label: "Prophecy Today", href: "/prophecy-today" },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 12px", fontSize: 12, color: MUTED }}>
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
