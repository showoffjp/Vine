"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "visions", label: "The Visions" },
  { id: "glory", label: "Glory of God" },
  { id: "drybones", label: "Valley of Dry Bones" },
  { id: "signacts", label: "Sign Acts" },
  { id: "newtemple", label: "The New Temple" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const VISIONS = [
  { ref: "Ezekiel 1", color: GOLD, title: "The Throne Chariot (Merkabah)", text: "Ezekiel's call vision is the most elaborate theophany in the entire Bible. From a stormy cloud of fire emerge four living creatures, each with four faces (lion, ox, eagle, human — later identified as cherubim in chapter 10), four wings, and legs like bronze. Beside each creature is a great wheel — wheels within wheels — their rims full of eyes. Above the expanse is a sapphire throne; on the throne is a figure 'like the appearance of a human being' surrounded by radiance 'like the appearance of the bow that is in the cloud on the day of rain' (1:28). Ezekiel's response: he falls on his face. This vision became central to later Jewish mysticism (Merkabah mysticism) and established Ezekiel as the prophet of divine transcendence." },
  { ref: "Ezekiel 8–11", color: RED, title: "The Departure of the Glory", text: "Chapters 8–11 are the most theologically devastating passage in Ezekiel. In a vision, Ezekiel is taken to Jerusalem and shown the abominations in the temple — idols, women weeping for Tammuz, men bowing to the sun. The climax is the departure of the divine glory (kavod) from the temple: step by step, the glory moves from the Holy of Holies (9:3) to the threshold (9:3), to the east gate (10:19), and finally away from the city to the Mount of Olives (11:23). God himself abandons his house. This is the most catastrophic possible event in Israel's theology. The temple without God is just a building — and buildings fall." },
  { ref: "Ezekiel 37:1–14", color: GREEN, title: "The Valley of Dry Bones", text: "In the most famous vision in Ezekiel, the Spirit carries him to a valley full of human bones — 'very dry.' God asks: 'Can these bones live?' Ezekiel's honest answer: 'O Lord GOD, you know.' God commands him to prophesy to the bones; as he does, there is a rattling sound, bones come together, sinews and flesh form, skin covers them — but no breath. Then God commands him to prophesy to the breath (ruach — wind/spirit/breath), and the breath enters, and they live: 'an exceedingly great army.' God interprets: 'These bones are the whole house of Israel.' The vision is a corporate resurrection — Israel, dead in exile, will be raised to life. For Christians, it becomes a type of individual resurrection and of the life-giving work of the Spirit." },
  { ref: "Ezekiel 40–48", color: PURPLE, title: "The New Temple Vision", text: "The final nine chapters describe in extraordinary detail a future temple — its architecture, its liturgy, its priesthood, its surrounding territory, and the river that flows from it. This vision has generated more theological debate than almost any passage in the OT: Is it a literal future temple to be built? A spiritual vision of the new creation? An idealized critique of the Second Temple? Whatever the interpretive conclusion, its theological heart is the return of the divine glory (43:1–5) — the reversal of the departure in chapters 8–11. The book that began with glory departing ends with glory returning to stay: 'The LORD Is There' (48:35 — the new name of the city)." },
];

const SIGN_ACTS = [
  { ref: "Ezek 4:1–3", color: GOLD, title: "The Clay Tablet Siege", text: "God commands Ezekiel to take a clay tablet and draw Jerusalem on it, then set up siege works against it — a toy model of the coming Babylonian siege. This is street theatre on a cosmic scale: the prophet's enacted prophecy participates in the reality it announces. In the ancient world, prophetic sign-acts were understood to set events in motion, not merely predict them." },
  { ref: "Ezek 4:4–8", color: BLUE, title: "Lying on His Side", text: "Ezekiel is commanded to lie on his left side for 390 days (bearing Israel's iniquity) and then on his right side for 40 days (Judah's iniquity). Each day represents a year of punishment. This was either a literal bodily act or a visionary experience — commentators disagree. Either way, the prophet embodies in his body the weight of the people's sin. The prophetic vocation is not merely verbal proclamation but somatic participation." },
  { ref: "Ezek 5:1–4", color: RED, title: "Shaving with a Sword", text: "God commands Ezekiel to shave his head and beard with a sword, weigh the hair, and divide it into thirds: one third to be burned, one third struck with the sword, one third scattered to the wind. A small portion is to be tucked in the hem of his garment — representing the remnant. The shaved head was a sign of extreme mourning and humiliation in the ancient world. The divided thirds represent the three fates of Jerusalem's population: death by plague, death by sword, and exile." },
  { ref: "Ezek 24:15–27", color: PURPLE, title: "The Death of His Wife", text: "God tells Ezekiel that his wife — 'the delight of your eyes' — will die, and that he is not to mourn publicly. She dies. He complies with the command. When the people ask why, he explains: when Jerusalem falls, they too will be too stunned to mourn. His personal tragedy becomes a prophetic sign — the most costly sign-act in all of Scripture. The prophet's grief is real; his restraint is not lack of love but obedience to a divine command that costs him everything personal." },
];

const THEMES = [
  { color: GOLD, icon: "✨", title: "The Kavod — Glory of God", text: "Ezekiel's central theological concern is the 'kavod' (glory/weightiness) of God. The Hebrew word shares a root with 'heavy' — the glory of God is God's manifest, weighty presence. Ezekiel traces this glory's movements: present in the call vision (chapter 1), departing the temple (chapters 8–11), promised to return (chapter 43), and permanently present in the new city whose name is 'The LORD Is There' (48:35). The whole arc of the book is the journey of the divine glory." },
  { color: RED, icon: "💔", title: "Israel as Unfaithful Bride", text: "Chapters 16 and 23 contain extended, graphic allegories of Israel as a bride who abandoned her husband (YHWH) for foreign lovers (Assyria, Babylon, Egypt). The language is deliberately shocking — more explicit than any other OT text. The point is not titillation but theology: Israel's covenant infidelity is porneia — the most intimate betrayal imaginable. The violence of God's judgment in these chapters is the violence of an abandoned covenant partner. The passages end, however, with the promise of restoration: 'I will establish my covenant with you, and you shall know that I am the LORD' (16:62)." },
  { color: GREEN, icon: "🫀", title: "The New Heart and New Spirit", text: "'I will give you a new heart, and a new spirit I will put within you. And I will remove the heart of stone from your flesh and give you a heart of flesh. And I will put my Spirit within you, and cause you to walk in my statutes' (36:26–27). This is Ezekiel's version of the New Covenant — parallel to Jeremiah 31. The transformation is entirely divine initiative: God will remove, God will give, God will put, God will cause. The obstacle to covenant faithfulness is not lack of information (law on stone) but a hard heart. God will perform cardiac surgery on the nation." },
  { color: BLUE, icon: "⚖️", title: "Individual Responsibility", text: "Chapter 18 is a landmark text in OT theology: 'The soul who sins shall die. The son shall not suffer for the iniquity of the father, nor the father suffer for the iniquity of the son' (18:20). Ezekiel's audience was fatalistic — quoting a proverb: 'The fathers have eaten sour grapes, and the children's teeth are set on edge.' They blamed their exile on previous generations. Ezekiel insists: each person is accountable before God for their own choices. Repentance is possible. The past does not determine the future. 'Have I any pleasure in the death of the wicked, declares the Lord GOD, and not rather that he should turn from his way and live?' (18:23)." },
  { color: TEAL, icon: "🌊", title: "The River of Life", text: "'Water was flowing from below the threshold of the temple toward the east... Wherever the river goes, every living creature that swarms will live' (47:1–9). The river flowing from the new temple grows deeper as it flows — ankle-deep, knee-deep, waist-deep, then too deep to cross. On either side are trees bearing fruit every month; their leaves are for healing. This vision is picked up directly in Revelation 22:1–2 — the river of life flowing from God's throne in the New Jerusalem. Ezekiel's river is the OT anticipation of the Spirit's life-giving, ever-deepening flow in the new creation." },
  { color: PURPLE, icon: "👣", title: "The Shepherd of Israel", text: "Chapter 34 is one of the OT's most devastating indictments of bad leadership and most tender promises of divine care. The 'shepherds of Israel' (the kings and leaders) have exploited the flock rather than tending it — eating the fat, wearing the wool, leaving the sick, scattered, and lost to die. God announces: 'I myself will search for my sheep and will seek them out' (34:11). And then: 'I will set up over them one shepherd, my servant David, and he shall feed them' (34:23). Jesus's claim to be 'the good shepherd' in John 10 is a direct fulfillment of Ezekiel 34 — he is the Davidic shepherd YHWH promised." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type EzekTab = "overview" | "visions" | "glory" | "drybones" | "signacts" | "newtemple" | "themes" | "journal" | "videos";

export default function EzekielGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<EzekTab>("vine_ezek_tab", "overview");
  const [openVision, setOpenVision] = useState<string | null>(null);
  const [openSign, setOpenSign] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_ezek_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_ezek_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

  const saveJEntry = useCallback(() => {
    if (!jForm.verse.trim() && !jForm.reflection.trim()) return;
    const entry: JEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), verse: jForm.verse, reflection: jForm.reflection, prayer: jForm.prayer };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2500);
  }, [jForm]);

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12 };
  const accent = PURPLE;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: `linear-gradient(135deg, rgba(107,79,187,0.15) 0%, rgba(217,119,6,0.10) 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🔥</div>
            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: TEXT, marginBottom: "0.75rem" }}>The Book of Ezekiel</h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 640, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
              The most visionary of the prophets — throne chariots, valley of dry bones, a river from the temple, and the promise that God's glory will return. Ezekiel sees the future from the depths of exile.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[{ label: "48 Chapters", color: PURPLE }, { label: "593–571 BC", color: GOLD }, { label: "Major Prophet", color: TEAL }, { label: "Exile & Restoration", color: GREEN }].map(b => (
                <span key={b.label} style={{ background: `${b.color}22`, color: b.color, border: `1px solid ${b.color}44`, borderRadius: 20, padding: "0.3rem 0.9rem", fontSize: "0.8rem", fontWeight: 600 }}>{b.label}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderBottom: `1px solid ${BORDER}`, background: `${CARD}CC`, position: "sticky", top: "var(--header-height, 80px)", zIndex: 20 }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", overflowX: "auto", padding: "0 1rem" }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id as EzekTab)}
                style={{ padding: "0.9rem 1.1rem", fontSize: "0.82rem", fontWeight: activeTab === t.id ? 700 : 500, color: activeTab === t.id ? accent : MUTED, borderBottom: `2px solid ${activeTab === t.id ? accent : "transparent"}`, background: "none", border: "none", borderBottomWidth: 2, borderBottomStyle: "solid", cursor: "pointer", whiteSpace: "nowrap", transition: "color 150ms" }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

          {activeTab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "1rem" }}>The Prophet Among the Exiles</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Ezekiel was a priest who became a prophet among the first wave of Judean exiles in Babylon (597 BC) — twelve years before Jerusalem's final destruction. While Jeremiah remained in Jerusalem watching the city die, Ezekiel ministered to the exiles by the Chebar canal in Babylon, preparing them for the worst and pointing them toward the ultimate restoration.</p>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>His book is the most systematically organized of the major prophets: chapters 1–24 announce judgment on Jerusalem (before its fall in 586 BC), chapters 25–32 are oracles against foreign nations, and chapters 33–48 announce restoration for Israel. The pivot point is chapter 33, when a fugitive arrives with news that the city has fallen — confirming everything Ezekiel had warned.</p>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>Ezekiel is simultaneously the most bizarre and most theologically profound of the prophets. His visions push language to its breaking point trying to describe the indescribable. His sign-acts are more extreme than any other prophet. And his promises of restoration — the new heart (36:26), the valley of dry bones (37), the river of life (47) — are among the most glorious in Scripture.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
                {[
                  { icon: "👤", title: "Who Was Ezekiel?", text: "A priest from the family of Buzi (1:3) who was exiled to Babylon in 597 BC with King Jehoiachin. He was married (his wife died as a sign-act — 24:15–27). He ministered to the Jewish exile community at Tel-abib on the Chebar canal. His visions began in his 30th year — the age a priest would have begun temple service, but he was in exile and never served." },
                  { icon: "📚", title: "Literary Character", text: "Ezekiel is the most carefully dated prophetic book — 13 dates are given, spanning 593–571 BC. It is written primarily in the first person. Its visions are more elaborate than any other prophetic book. It also contains more extended allegories than any other: the vine (15), the unfaithful wife (16), the eagles and vine (17), the two sisters (23), the boiling pot (24)." },
                  { icon: "🏛️", title: "The Priestly Perspective", text: "Ezekiel's priestly training shapes everything. His concerns are for holiness, the temple, the glory of God, proper worship, the distinction between clean and unclean. His language of 'abominations' (toevot) is priestly vocabulary. His new temple vision in chapters 40–48 is architectural, liturgical, and precise — the vision of a priest imagining a purified worship space." },
                  { icon: "✝️", title: "NT Connections", text: "Ezekiel's influence on the NT is massive. The four living creatures of Ezekiel 1 appear in Revelation 4. The valley of dry bones (37) underlies Paul's resurrection theology. The new heart promise (36:26–27) is fulfilled in the Spirit's work at Pentecost. The river of life (47) becomes the river in Revelation 22. Jesus's claim as Good Shepherd (John 10) directly fulfills Ezekiel 34." },
                ].map(item => (
                  <div key={item.title} style={{ ...card, padding: "1.5rem" }}>
                    <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                    <h3 style={{ color: accent, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{item.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "visions" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>Four Major Visions</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Ezekiel's four great visionary sequences form the backbone of the book — from the throne chariot to the departing glory to the dry bones to the new temple.</p>
              </div>
              {VISIONS.map(v => (
                <div key={v.ref} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenVision(openVision === v.ref ? null : v.ref)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <span style={{ color: v.color, fontWeight: 700 }}>{v.title}</span>
                      <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.ref}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openVision === v.ref ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openVision === v.ref && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{v.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "glory" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GOLD, marginBottom: "1rem" }}>The Journey of the Divine Glory</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>The entire book of Ezekiel can be read as a single narrative about the divine glory (kavod): where it begins, where it goes, and where it ends up. This glory-movement is the theological spine of the book.</p>
              </div>
              {[
                { step: "1", ref: "Ezek 1–3", color: GOLD, title: "Glory Appears in Exile", text: "The book opens not in Jerusalem but in Babylon — by the Chebar canal. This is the first shock: God's glory appears outside the Promised Land, outside the temple, in the land of the enemy. God is not confined to Jerusalem or Israel. The vision reassures the exiles that God has not abandoned them — he has followed them into exile. His glory is mobile (hence the wheels and wings — the throne chariot can move anywhere). The God of Israel is not a territorial deity." },
                { step: "2", ref: "Ezek 8–11", color: RED, title: "Glory Departs the Temple", text: "In the second vision (chapters 8–11), Ezekiel is transported to Jerusalem and shown the abominations in the temple. The response of the divine glory is step-by-step departure: from the Holy of Holies to the threshold (9:3), to the east gate (10:19), to the Mount of Olives east of the city (11:23). This is theologically catastrophic. Temple and city will fall not because of Babylon's military power but because God himself has left. The destroyer of Jerusalem is not Nebuchadnezzar — he is merely the instrument of the LORD who has vacated the premises." },
                { step: "3", ref: "Ezek 37–39", color: TEAL, title: "Promise of Return", text: "After the fall of Jerusalem (chapter 33), the tone shifts from judgment to hope. The dry bones vision (37:1–14), the two-sticks vision (37:15–28), and the Gog-Magog battle (38–39) all move toward the ultimate restoration. The promise in 37:27 begins to anticipate the return: 'My dwelling place shall be with them, and I will be their God, and they shall be my people.'" },
                { step: "4", ref: "Ezek 43:1–5", color: PURPLE, title: "Glory Returns to the New Temple", text: "'And behold, the glory of the God of Israel was coming from the east. And the sound of his coming was like the sound of many waters, and the earth shone with his glory' (43:2). The glory that departed eastward (11:23) now returns from the east. It enters the east gate of the new temple, fills the temple, and the voice says: 'This is the place of my throne and the place of the soles of my feet, where I will dwell in the midst of the people of Israel forever' (43:7). The departure is reversed. The exile is over, not just geographically but theologically." },
                { step: "5", ref: "Ezek 48:35", color: GREEN, title: "The New Name of the City", text: "The final verse of the entire book, the new name of the city: 'The LORD Is There' (YHWH Shammah). This is the eschatological destination of the whole story. The city that lost the divine presence (chapters 8–11), that watched its walls burn and its temple desecrated, is renamed for the most important fact about it: God is there, permanently, irreversibly. This is picked up in Revelation 21:3: 'Behold, the dwelling place of God is with man. He will dwell with them, and they will be his people, and God himself will be with them as their God.'" },
              ].map(item => (
                <div key={item.step} style={{ ...card, padding: "1.75rem", borderLeft: `3px solid ${item.color}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                    <span style={{ background: `${item.color}22`, color: item.color, border: `1px solid ${item.color}44`, borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.9rem", flexShrink: 0 }}>{item.step}</span>
                    <div>
                      <h3 style={{ color: item.color, fontWeight: 700 }}>{item.title}</h3>
                      <span style={{ color: MUTED, fontSize: "0.78rem" }}>{item.ref}</span>
                    </div>
                  </div>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "drybones" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GREEN, marginBottom: "1rem" }}>Ezekiel 37: The Valley of Dry Bones</h2>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 1.5rem", color: TEXT, fontStyle: "italic", lineHeight: 1.8 }}>
                  "The hand of the LORD was upon me, and he brought me out in the Spirit of the LORD and set me down in the middle of the valley; it was full of bones. And he led me around among them, and behold, there were very many on the surface of the valley, and behold, they were very dry." — Ezekiel 37:1–2
                </blockquote>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>The valley of dry bones vision is the most famous passage in Ezekiel and one of the most theologically significant in all of Scripture. It operates simultaneously on multiple levels: as a political promise of national restoration for Israel, as an anticipation of bodily resurrection from the dead, and as a paradigm for the Spirit's life-giving work in every generation.</p>
              </div>
              {[
                { color: GREEN, title: "The Structure of the Vision", text: "The vision has a deliberate, two-stage structure. First, Ezekiel prophesies to the bones — and there is dramatic physical restoration: bones come together, sinews form, flesh covers them, skin forms over that. But they are corpses, not living beings. Second, Ezekiel prophesies to the breath (ruach), and the ruach enters, and the corpses become a living army. The two stages correspond to the two aspects of creation in Genesis 2:7: God forms the man from dust (physical formation) and then breathes into his nostrils (life-giving animation). Restoration without the Spirit is just a well-arranged corpse." },
                { color: BLUE, title: "Ruach — Wind, Breath, Spirit", text: "The Hebrew word 'ruach' appears ten times in this short passage — translated variously as 'breath' (4x), 'wind' (twice, in v. 9), and 'Spirit' (in the interpretation, v. 14). This is deliberate. The ruach that animates the dry bones is simultaneously natural breath, the wind of God, and the Spirit of God — inseparable. The vision refuses to choose between physical and spiritual resurrection. The Spirit's work always has bodily dimensions; God's ruach always animates the physical as well as the spiritual." },
                { color: TEAL, title: "The Interpretation: National Restoration", text: "God interprets the vision directly: 'Son of man, these bones are the whole house of Israel. Behold, they say, Our bones are dried up, and our hope is lost; we are indeed cut off' (37:11). The exiles felt like the walking dead — cut off from land, temple, king, and hope. God's response is a direct counter-declaration: 'I will put my Spirit within you, and you shall live, and I will place you in your own land' (37:14). The vision is first and foremost about national resurrection — the return from exile. But it contains a logic that pushes beyond that." },
                { color: PURPLE, title: "The Resurrection Dimension", text: "While the immediate reference is national restoration, the vision cannot be limited to it. The language ('your graves,' 'bring you up from your graves,' 'you shall live') uses actual resurrection vocabulary. Daniel 12:2 (from roughly the same period) explicitly announces individual resurrection. The NT writers — Paul in 1 Corinthians 15, John in Revelation 20 — read Ezekiel 37 as one foundation of the resurrection hope. What God does for the nation in history anticipates what God will do for all the dead at the last day. The Spirit who animates Israel in exile is the 'Spirit who raised Jesus from the dead' (Romans 8:11)." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.75rem" }}>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "signacts" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>Ezekiel's Sign-Acts</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>No prophet enacted more extreme bodily sign-acts than Ezekiel. These were not mere illustrations — in the prophetic understanding, they were performative: they participated in the reality they announced. The prophet's body was a stage for the word of God.</p>
              </div>
              {SIGN_ACTS.map(s => (
                <div key={s.ref} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenSign(openSign === s.ref ? null : s.ref)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                      <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{s.ref}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openSign === s.ref ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openSign === s.ref && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "newtemple" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "1rem" }}>Ezekiel 40–48: The New Temple Vision</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Nine chapters of precise architectural detail — measurements, gates, courts, rooms, the altar, the priests' duties, the land divisions — all flowing from a single visionary experience in which Ezekiel is transported to a very high mountain and shown a new temple complex. These chapters have generated more interpretive debate than almost any other OT passage.</p>
              </div>
              {[
                { color: GOLD, title: "Three Major Interpretive Approaches", text: "1. Literal-Millennial: A physical temple will be built in the future Millennium, with a restored sacrificial system serving a memorial rather than atoning function (common in dispensationalist interpretation). 2. Spiritual-Eschatological: The vision describes the new creation / New Jerusalem figuratively — fulfilled in Christ's body (John 2:19–21), the church as temple (1 Cor 3:16), and ultimately in the New Jerusalem of Revelation 21 where 'the Lord God Almighty and the Lamb are its temple' (Rev 21:22). 3. Ideal-Critical: The vision holds up an ideal that was never meant to be literally enacted but functioned as a critique of Second Temple worship and an inspiration for covenant faithfulness. Most commentators today see the vision as primarily eschatological, fulfilled in Christ and the new creation." },
                { color: PURPLE, title: "The East Gate (Ezek 44:1–3)", text: "One of the most intriguing details in the new temple vision: the east gate is to remain permanently shut because the LORD, the God of Israel, has entered by it (44:2). The gate by which the divine glory returned (43:4) can never be used by any human being — it is consecrated to the presence of God alone. Only the prince may sit inside it to eat bread before the LORD. Jewish tradition associated this gate with the Messiah, and in Christian interpretation it has been read as a type of the Virgin Mary (through whom the eternal Son entered the world) and of the sealed garden of Song 4:12." },
                { color: TEAL, title: "The River of Life (Ezek 47:1–12)", text: "'Then he brought me back to the door of the temple, and behold, water was issuing from below the threshold of the temple toward the east... Wherever the river goes, every living creature that swarms will live, and there will be very many fish' (47:1–9). The river that flows from the new temple grows deeper as it goes — it cannot be forded. On both banks are trees that bear fruit every month, and their leaves are for healing. This vision is the direct source of Revelation 22:1–2 ('the river of the water of life... the tree of life with its twelve kinds of fruit... the leaves of the tree were for the healing of the nations'). Ezekiel's river is the OT's most vivid image of the Spirit's life-giving work in the new creation." },
                { color: GREEN, title: "'The LORD Is There' (Ezek 48:35)", text: "The final verse of the entire book of Ezekiel — its last word — is the new name of the city: YHWH Shammah, 'The LORD Is There.' The whole book has been about where God's glory is and where it is going. It began with the glory appearing in Babylon (chapter 1). It watched the glory depart Jerusalem (chapters 8–11). It watched the city fall (chapter 33). And it ends with the irreversible declaration: the glory has returned and will never leave again. God will be permanently present among his people. This is the promise the NT fulfills: 'Behold, the dwelling place of God is with man' (Rev 21:3)." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.75rem" }}>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "themes" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {THEMES.map(item => (
                <div key={item.title} style={{ ...card, padding: "1.5rem" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "journal" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", color: accent, marginBottom: "1.5rem" }}>Ezekiel Journal</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>VERSE OR PASSAGE</label>
                    <input value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. Ezekiel 36:26, Ezekiel 37:1–14" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>REFLECTION</label>
                    <textarea value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="What dry bones in your life or community need the Spirit's breath? Where do you see God's glory returning?" rows={4} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>PRAYER RESPONSE</label>
                    <textarea value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="Breathe on me, breath of God..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <button onClick={saveJEntry} style={{ background: accent, color: "#fff", border: "none", borderRadius: 8, padding: "0.85rem 2rem", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem", alignSelf: "flex-start" }}>{jSaved ? "✓ Saved" : "Save Entry"}</button>
                </div>
              </div>
              {jEntries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {jEntries.map(entry => (
                    <div key={entry.id} style={{ ...card, padding: "1.5rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                        <span style={{ color: accent, fontWeight: 600, fontSize: "0.9rem" }}>{entry.verse || "Reflection"}</span>
                        <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                      </div>
                      {entry.reflection && <p style={{ color: TEXT, fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "0.5rem" }}>{entry.reflection}</p>}
                      {entry.prayer && <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, fontStyle: "italic" }}>🙏 {entry.prayer}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>Ezekiel — Video Library</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Teachings on Ezekiel's visions, the glory of God, the valley of dry bones, and the new temple.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {[
                  { id: "R-C6sup75BY", title: "Ezekiel Overview — Part 1", channel: "BibleProject" },
                  { id: "SDeCWW_Bnyw", title: "Ezekiel Overview — Part 2", channel: "BibleProject" },
                  { id: "T7r9Lh9gLBk", title: "Valley of Dry Bones Explained", channel: "The Bible Explained" },
                ].map(v => (
                  <div key={v.id} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div>
                      <p style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem" }}>{v.title}</p>
                      <p style={{ color: MUTED, fontSize: "0.8rem" }}>{v.channel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
      <Footer />
    </div>
  );
}
