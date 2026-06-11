"use client";
import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  useEffect(() => {
    try { const s = localStorage.getItem(key); if (s !== null) setValue(JSON.parse(s)); } catch {}
  }, [key]);
  const set = useCallback((v: T) => { setValue(v); try { localStorage.setItem(key, JSON.stringify(v)); } catch {} }, [key]);
  return [value, set] as const;
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56",
  PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3", GOLD = "#D97706",
  TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = ["Overview","How to Read","Seven Churches","The Throne","Seals & Trumpets","The Beast","New Creation","Journal","Videos"];

const SEVEN_CHURCHES = [
  { name: "Ephesus", rev: "2:1–7", color: RED, praise: "Hard work, perseverance, testing false apostles", rebuke: "Abandoned your first love", call: "Remember the height from which you have fallen; repent and do the first works" },
  { name: "Smyrna", rev: "2:8–11", color: TEAL, praise: "Rich in tribulation, bearing slander faithfully", rebuke: "None", call: "Be faithful unto death and I will give you the crown of life" },
  { name: "Pergamum", rev: "2:12–17", color: GOLD, praise: "Held fast to my name, did not deny faith", rebuke: "Tolerated Balaam's teaching and Nicolaitans", call: "Repent, or I will come and fight against them with the sword of my mouth" },
  { name: "Thyatira", rev: "2:18–29", color: PURPLE, praise: "Love, faith, service, perseverance — more than at first", rebuke: "Tolerated Jezebel's sexual immorality and idol food", call: "Hold on to what you have until I come" },
  { name: "Sardis", rev: "3:1–6", color: BLUE, praise: "A few who have not soiled their clothes", rebuke: "You have a reputation of being alive, but you are dead", call: "Strengthen what remains; wake up; remember what you received" },
  { name: "Philadelphia", rev: "3:7–13", color: GREEN, praise: "Kept my word, not denied my name", rebuke: "None", call: "I have placed before you an open door that no one can shut" },
  { name: "Laodicea", rev: "3:14–22", color: MUTED, praise: "None", rebuke: "Lukewarm — neither hot nor cold; rich but wretched, poor, blind, and naked", call: "Be earnest and repent; I stand at the door and knock" },
];

const SEALS_TRUMPETS = [
  { q: "The Seven Seals (6:1–8:5)", a: "The Lamb opens the scroll seal by seal. The first four release the four horsemen: White (conquest), Red (war), Black (famine), Pale (death and hades). The fifth reveals the souls under the altar crying for justice — the martyrs. The sixth produces cosmic disruption: earthquake, sun black, moon blood-red, stars falling. The seventh, after the sealing of the 144,000 and the great multitude from every nation, opens into the seven trumpets. The seals depict the world's suffering under sin and judgment." },
  { q: "The Seven Trumpets (8:6–11:19)", a: "The trumpets echo the Exodus plagues but with cosmic scope. First: hail, fire, blood — a third of the earth burned. Second: mountain-like mass into sea — third of sea blood. Third: Wormwood poisons a third of fresh water. Fourth: third of sun, moon, stars darkened. Fifth: the abyss opens and locusts from the smoke torment for five months. Sixth: the four angels at the Euphrates released — a third of humanity killed. Seventh: heavenly voices: 'The kingdom of the world has become the kingdom of our Lord and of his Messiah.'" },
  { q: "The 144,000 (7:1–8)", a: "Sealed before the judgments: 12,000 from each of the twelve tribes of Israel. Interpreters divide on whether this is literal Israel, symbolic for the whole church, or a Jewish remnant within the church. The sealing language echoes Ezekiel 9 (the mark on the foreheads of the faithful in Jerusalem before judgment). Structurally, the 144,000 appear again in 14:1 on Mount Zion with the Lamb — pure, undefiled, first fruits. Their identity is bound to the Lamb's fidelity." },
  { q: "The Great Multitude (7:9–17)", a: "'After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb.' They have come out of the great tribulation; they washed their robes in the blood of the Lamb. They serve before the throne day and night. God will wipe every tear from their eyes. This vision of ultimate multiethnic worship is Revelation's answer to the question of God's justice: every suffering people represented before the throne." },
];

const BEAST_ITEMS = [
  { q: "The Dragon, the Sea Beast, and the Land Beast (12–13)", a: "The dragon (identified as the ancient serpent, Satan, 12:9) wages war against the woman and her offspring — a cosmic retelling of redemptive history. He gives his authority to the sea beast (a composite of Daniel's four beasts — Babylon, Persia, Greece, Rome — pointing to empire hostile to God). The land beast promotes worship of the sea beast through signs and economic coercion. The mark of the beast (666) was likely a cipher for Nero Caesar in Hebrew numerology (gematria), identifying the Roman imperial system as beast-power." },
  { q: "The Number 666 (13:18)", a: "'This calls for wisdom. Let the person who has insight calculate the number of the beast, for it is the number of a man. That number is 666.' The most widely accepted solution: Nero Caesar in Hebrew letters = 666 (NRN QSR = 50+200+6+50+100+60+200). A variant text has 616, which is Nero Caesar in Latin letters — supporting the Nero identification. John writes for Christians living under Roman persecution. The beast is not a future individual only but a pattern of imperial idolatry that recurs throughout history." },
  { q: "Babylon the Great (17–18)", a: "The great harlot Babylon sitting on seven hills (Rome) is drunk with the blood of the saints. She represents the seductive power of empire — luxury, commerce, cultural power, and persecution — all wrapped in a religious veneer. Her fall is a massive economic and political collapse: merchants, sea captains, and kings weep (echoing Ezekiel 26–27's lament over Tyre). The church is called: 'Come out of her, my people, so that you will not share in her sins or receive any of her plagues.'" },
  { q: "The Lamb Wins (19:11–21)", a: "The rider on the white horse is called Faithful and True; his robe dipped in blood (his own, from the cross — cf. Is 63). His name is the Word of God. The armies of heaven follow him on white horses. From his mouth comes a sharp sword. He will tread the winepress of the fury of the wrath of God Almighty. The beast and false prophet are captured and thrown into the lake of fire. The dragon is bound for a thousand years. Christ wins not by human military force but by the word of his mouth." },
];

const NEW_CREATION_ITEMS = [
  { q: "The Millennium (20:1–6)", a: "Satan is bound for 1,000 years; the saints who were beheaded for their testimony reign with Christ for 1,000 years. Four main views: (1) Premillennial — Christ returns before a literal 1,000-year earthly reign. (2) Amillennial — the millennium is the current church age; Christ reigning in heaven with the departed saints. (3) Postmillennial — the church progressively Christianizes culture until Christ returns to a largely converted world. (4) Preterist-partial — most fulfilled in AD 70. The number 1,000 is a round number in a symbolic book; the point is Christ's certain, total victory over Satan." },
  { q: "The Final Judgment (20:11–15)", a: "'Then I saw a great white throne and him who was seated on it. The earth and the heavens fled from his presence, and there was no place for them. And I saw the dead, great and small, standing before the throne, and books were opened. Another book was opened, which is the book of life. The dead were judged according to what they had done as recorded in the books. Anyone whose name was not found written in the book of life was thrown into the lake of fire.' The two books: the record of works and the book of life. Final accountability before the holy God." },
  { q: "New Heaven and New Earth (21:1–8)", a: "'Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away, and there was no longer any sea. I saw the Holy City, the new Jerusalem, coming down out of heaven from God, prepared as a bride beautifully dressed for her husband.' This is not escape from creation but creation renewed — God's dwelling is now with humanity. He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away. God makes all things new." },
  { q: "The New Jerusalem (21:9–22:5)", a: "The city has the glory of God, brilliant as jasper. Twelve gates (tribes of Israel), twelve foundations (apostles). Its dimensions: 12,000 stadia in length, width, and height — a perfect cube like the Holy of Holies (1 Kings 6). No temple in the city, because the Lord God Almighty and the Lamb are its temple. No sun needed, because the glory of God is its light and the Lamb is its lamp. The river of life flows from the throne; the tree of life bears twelve fruits. Eden restored; creation completed; the tabernacle of God with humanity eternally." },
];

const HOW_TO_READ = [
  { title: "Apocalyptic Genre", color: PURPLE, text: "Revelation belongs to a specific Jewish-Christian literary genre: apocalypse (apokalypsis = unveiling). Features include: symbolic numbers, cosmic visions, angelic mediators, heavenly journeys, coded language about current events, and strong dualistic contrasts (lamb/beast, woman/harlot). Interpreters err when they read Revelation as a literal newspaper report of future events rather than as symbolic vision-literature doing what apocalypses do: unveiling the spiritual reality behind current events." },
  { title: "Four Main Views", color: GOLD, text: "Preterist: most of Revelation describes events of 1st century (Nero, Jewish War, AD 70). Historicist: Revelation maps onto the whole of church history from 1st century to return of Christ. Futurist: most of Revelation describes a still-future seven-year tribulation (dispensationalism). Idealist: Revelation is purely symbolic, depicting the cosmic conflict between good and evil in every age without reference to specific historical events. Most scholars use elements of multiple views; the preterist-idealist combination has strong academic support." },
  { title: "Numbers in Revelation", color: TEAL, text: "Numbers are symbolic, not mathematical. 7 = completeness/divine perfection (7 churches, 7 seals, 7 trumpets, 7 bowls). 12 = God's people (12 tribes, 12 apostles). 4 = the whole earth (4 corners, 4 living creatures). 3.5 = time, times, and half a time = 42 months = 1,260 days = half of 7 = incomplete time of persecution (Daniel's influence). 144,000 = 12 x 12 x 1,000 = completeness of God's people multiplied to infinity. 666 = falling short of 7 (divine perfection) by 1, three times over — ultimate inadequacy." },
  { title: "The Central Message", color: GREEN, text: "Revelation was written to persecuted, marginalized Christians in Roman Asia Minor: your suffering is real, the empire is real, but the Lamb who was slain holds all authority in heaven and earth. The beast may seem to win for 42 months, but his power is borrowed time. Christ has already won the decisive victory at the cross and resurrection. Every tear, every martyr's death, every act of faithfulness under pressure has eternal weight. Worship God alone, resist the beast's mark, hold fast — the Lamb wins." },
];

const VIDEOS = [
  { videoId: "QpnIrbq2bKo", title: "Revelation Overview Part 1 – The Bible Project" },
  { videoId: "5nvV5EVx8ZA", title: "Revelation Overview Part 2 – The Bible Project" },
  { videoId: "hRRBzaMgMhE", title: "How to Read the Book of Revelation" },
  { videoId: "GmFyqa64s3E", title: "The New Jerusalem – Revelation 21–22" },
];

export default function RevelationGuidePage() {
  const [activeTab, setActiveTab] = useLocalStorage("vine_rev_tab", 0);
  const [openSeal, setOpenSeal] = useLocalStorage("vine_rev_seal", -1);
  const [openBeast, setOpenBeast] = useLocalStorage("vine_rev_beast", -1);
  const [openNew, setOpenNew] = useLocalStorage("vine_rev_new", -1);
  const [journal, setJournal] = useLocalStorage("vine_rev_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui,sans-serif" }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: ".5rem" }}>🔮</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 900, color: TEXT, marginBottom: ".5rem" }}>The Book of Revelation</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>A Comprehensive Study Guide — apocalyptic vision, the seven churches, the Lamb on the throne, the beast and Babylon, the millennium, and the new Jerusalem where God dwells with humanity forever.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setActiveTab(i)} style={{ padding: ".5rem 1.1rem", borderRadius: 20, border: `1px solid ${activeTab === i ? PURPLE : BORDER}`, background: activeTab === i ? `${PURPLE}22` : CARD, color: activeTab === i ? PURPLE : MUTED, fontWeight: activeTab === i ? 700 : 400, cursor: "pointer", fontSize: ".85rem" }}>{t}</button>
          ))}
        </div>

        {/* Tab 0: Overview */}
        {activeTab === 0 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>Overview of Revelation</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>The Revelation of Jesus Christ — the final book of the Christian canon — is a letter sent to seven specific churches in Roman Asia Minor (modern Turkey), written by John while exiled on the island of Patmos around AD 95, likely during the reign of the emperor Domitian.</p>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Its purpose was pastoral and urgent: to strengthen persecuted and spiritually compromised churches with the vision that the crucified and risen Christ holds the scroll of history, that every power hostile to God is already defeated, and that the New Jerusalem — creation healed and complete — is coming. The book opens: "Blessed is the one who reads aloud the words of this prophecy, and blessed are those who hear it and take to heart what is written in it, because the time is near."</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginTop: "1.5rem" }}>
              {[["Author","John (exiled apostle)"],["Date","c. AD 95 (Domitian)"],["Written From","Island of Patmos"],["Audience","Seven churches in Asia Minor"],["Genre","Apocalyptic letter/prophecy"],["Key Theme","The Lamb wins"]].map(([k,v]) => (
                <div key={k} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: ".75rem", marginBottom: ".25rem" }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 1: How to Read */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>How to Read Revelation</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {HOW_TO_READ.map(c => (
                <div key={c.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
                  <div style={{ color: c.color, fontWeight: 800, marginBottom: ".6rem" }}>{c.title}</div>
                  <div style={{ color: MUTED, lineHeight: 1.8 }}>{c.text}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Seven Churches */}
        {activeTab === 2 && (
          <div>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Seven Churches (Chapters 2–3)</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {SEVEN_CHURCHES.map(c => (
                <div key={c.name} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: ".75rem" }}>
                    <div style={{ color: c.color, fontWeight: 800, fontSize: "1.1rem" }}>{c.name}</div>
                    <div style={{ color: MUTED, fontSize: ".8rem" }}>Rev {c.rev}</div>
                  </div>
                  <div style={{ display: "grid", gap: ".5rem" }}>
                    {c.praise !== "None" && <div style={{ background: `${GREEN}15`, borderRadius: 8, padding: ".5rem .75rem" }}><span style={{ color: GREEN, fontWeight: 700, fontSize: ".8rem" }}>PRAISE: </span><span style={{ color: MUTED, fontSize: ".85rem" }}>{c.praise}</span></div>}
                    {c.rebuke !== "None" && <div style={{ background: `${RED}15`, borderRadius: 8, padding: ".5rem .75rem" }}><span style={{ color: RED, fontWeight: 700, fontSize: ".8rem" }}>REBUKE: </span><span style={{ color: MUTED, fontSize: ".85rem" }}>{c.rebuke}</span></div>}
                    <div style={{ background: `${GOLD}15`, borderRadius: 8, padding: ".5rem .75rem" }}><span style={{ color: GOLD, fontWeight: 700, fontSize: ".8rem" }}>CALL: </span><span style={{ color: MUTED, fontSize: ".85rem" }}>{c.call}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: The Throne */}
        {activeTab === 3 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Throne Room Vision (Chapters 4–5)</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>The theological center of Revelation: before any seal is opened, before any trumpet sounds, John sees the throne. Whatever happens in history unfolds within the context of God's sovereign reign. The throne is never empty; never unattended; never threatened.</p>
            {[
              ["The Holy, Holy, Holy God (4:1–11)","Four living creatures (cherubim — one like lion, ox, human, eagle) continuously cry: 'Holy, holy, holy is the Lord God Almighty, who was, and is, and is to come.' Twenty-four elders (representing the whole people of God — 12 tribes + 12 apostles?) cast their crowns before the throne: 'You are worthy, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they were created and have their being.'"],
              ["The Slain Lamb (5:1–7)","John weeps because no one can open the scroll of history. One of the elders says: 'Do not weep! See, the Lion of the tribe of Judah, the Root of David, has triumphed.' John looks and sees — a Lamb, looking as if it had been slain. The supreme paradox of Revelation: the Lion is the Lamb; power is revealed in sacrificial death. The Lamb takes the scroll and the four living creatures and elders fall down in worship."],
              ["The New Song (5:8–14)","'You are worthy to take the scroll and to open its seals, because you were slain, and with your blood you purchased for God persons from every tribe and language and people and nation. You have made them to be a kingdom and priests to serve our God, and they will reign on the earth.' Then ten thousand times ten thousand angels join: 'Worthy is the Lamb, who was slain, to receive power and wealth and wisdom and strength and honor and glory and praise!'"],
              ["Why the Throne Matters","John's readers are suffering under Domitian's Rome. The throne vision answers the real question: Is anyone in charge? Is Rome the ultimate power? The answer is visual and overwhelming: before any history unfolds, before the seals of tribulation are opened, the throne is established, the Lamb is worshiped, and the outcome is certain. Revelation is not primarily about predicting the future — it is about seeing the present truly: sub specie aeternitatis."],
            ].map(([title, body], i) => (
              <div key={i} style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ color: GOLD, fontWeight: 700, marginBottom: ".4rem" }}>{title}</div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{body}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Seals & Trumpets */}
        {activeTab === 4 && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Seals, Trumpets & Bowls (Chapters 6–16)</h2>
            {SEALS_TRUMPETS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openSeal === i ? RED : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenSeal(openSeal === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: RED, fontSize: "1.2rem" }}>{openSeal === i ? "−" : "+"}</span>
                </button>
                {openSeal === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${RED}`, padding: "1.5rem", marginTop: "1rem" }}>
              <div style={{ color: RED, fontWeight: 800, marginBottom: ".75rem" }}>The Seven Bowls (15–16)</div>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>The bowls of wrath are the full and final outpouring of God's judgment — poured out "without mixture" (14:10). They parallel the trumpets but without the one-third limitation: the whole earth is affected. They echo Exodus plagues: sores, sea to blood, rivers to blood, scorching sun, darkness, Euphrates dried up for the kings of the east, and finally the greatest earthquake since humanity existed — "It is done!" (16:17). Babylon receives the cup of the wine of the fury of God's wrath.</p>
            </div>
          </div>
        )}

        {/* Tab 5: The Beast */}
        {activeTab === 5 && (
          <div>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Dragon, Beast & Babylon (Chapters 12–18)</h2>
            {BEAST_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openBeast === i ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenBeast(openBeast === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: PURPLE, fontSize: "1.2rem" }}>{openBeast === i ? "−" : "+"}</span>
                </button>
                {openBeast === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 6: New Creation */}
        {activeTab === 6 && (
          <div>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The New Creation (Chapters 20–22)</h2>
            {NEW_CREATION_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openNew === i ? TEAL : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenNew(openNew === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: TEAL, fontSize: "1.2rem" }}>{openNew === i ? "−" : "+"}</span>
                </button>
                {openNew === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${TEAL}`, padding: "1.5rem", marginTop: "1rem" }}>
              <div style={{ color: TEAL, fontWeight: 800, marginBottom: ".75rem" }}>The Closing Promise (22:20)</div>
              <blockquote style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", lineHeight: 1.8, fontSize: "1.05rem" }}>
                "He who testifies to these things says, 'Yes, I am coming soon.' Amen. Come, Lord Jesus."
              </blockquote>
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: "1rem" }}>Maranatha — Come, Lord Jesus. The whole book ends with longing. The church reading Revelation under Domitian, under any empire, in any age, joins this prayer. Not passive waiting but active longing that shapes all present action. Every act of faithfulness, every refusal of the beast's mark, every tear wiped away — anticipation of the coming One who makes all things new.</p>
            </div>
          </div>
        )}

        {/* Tab 7: Journal */}
        {activeTab === 7 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: ".5rem" }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1rem", fontSize: ".9rem" }}>Reflect on your study of Revelation. Your notes are saved locally.</p>
            {[
              "Which of the seven churches do you most identify with — which praise and rebuke speaks most directly to your current spiritual condition?",
              "How does the throne room vision (chs. 4–5) change how you see the world's current events and your own suffering?",
              "What does the New Jerusalem as the answer to Eden — the tree of life restored, God dwelling with humanity — mean for how you see physical reality, embodiment, and the future?",
            ].map((q, i) => <p key={i} style={{ color: GOLD, fontSize: ".85rem", fontStyle: "italic", marginBottom: ".4rem" }}>{i + 1}. {q}</p>)}
            <textarea
              value={journal}
              onChange={e => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, color: TEXT, padding: "1rem", fontSize: ".95rem", lineHeight: 1.7, resize: "vertical", marginTop: ".75rem", boxSizing: "border-box" }}
            />
            {journal && <p style={{ color: MUTED, fontSize: ".8rem", marginTop: ".5rem" }}>Saved automatically.</p>}
          </div>
        )}

        {/* Tab 8: Videos */}
        {activeTab === 8 && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Video Resources</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <div style={{ color: TEXT, fontWeight: 700 }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
