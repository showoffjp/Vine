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
  { id: "stories", label: "Courage Stories" },
  { id: "visions", label: "Four Kingdoms" },
  { id: "sonofman", label: "Son of Man" },
  { id: "prayer", label: "Daniel's Prayer" },
  { id: "howtoread", label: "How to Read" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const STORIES = [
  { ref: "Ch. 1", title: "Food, Identity, and Faithfulness", color: GREEN, verses: "1:8-21", story: "Daniel and his three friends refuse the king's food in Babylon, maintaining their Jewish identity in a culture designed to erase it. The test is not dramatic — it is dietary. But the principle is total: they will not compromise the practices that mark them as God's people, even in small things. God honors their faithfulness with wisdom exceeding all the Babylonian magicians — demonstrating that covenant fidelity and intellectual excellence are not in conflict." },
  { ref: "Ch. 3", title: "The Fiery Furnace", color: BLUE, verses: "3:13-30", story: "Shadrach, Meshach, and Abednego refuse to bow to Nebuchadnezzar's golden statue. Their answer is one of the most extraordinary statements of faith in Scripture: Our God is able to deliver us. But even if he does not, we will not bow (3:17-18). They are not bargaining with God — they are declaring that their faithfulness is not conditional on rescue. Thrown into the furnace heated seven times hotter, they are unharmed. And a fourth figure, like a son of the gods, walks with them in the fire." },
  { ref: "Ch. 5", title: "The Writing on the Wall", color: PURPLE, verses: "5:1-31", story: "At Belshazzar's feast, fingers write on the wall: MENE MENE TEKEL PARSIN. Daniel alone can interpret: your kingdom has been weighed in the balance and found wanting. That night Belshazzar is killed. The story is about the judgment that falls on arrogant power that refuses to acknowledge God. It is a story told to sustain God's people under empire: earthly thrones are temporary; divine judgment is certain." },
  { ref: "Ch. 6", title: "Daniel in the Lions' Den", color: GOLD, verses: "6:6-23", story: "Daniel's enemies convince Darius to forbid prayer to anyone but the king. Daniel opens his windows toward Jerusalem and prays three times a day — exactly as before. Nothing changes in his practice because the law changes. He is thrown to the lions. God shuts the lions' mouths. Daniel emerges without a scratch, and his accusers are thrown in. The story is about the cost and reward of uncompromising faithfulness, and about a God who is Lord even over the laws of Medo-Persia." },
];

const KINGDOMS = [
  { number: "1st", name: "Head of Gold", empire: "Babylon", color: GOLD, symbol: "Gold head", desc: "The great statue of Daniel 2 begins with a head of gold — Nebuchadnezzar's Babylon. It is magnificent, powerful, and central. But the statue has a fatal flaw at the bottom: feet of iron and clay, brittle and breakable. Human empire, however glorious, is structurally unstable." },
  { number: "2nd", name: "Chest of Silver", empire: "Medo-Persia", color: "#C0C0C0", symbol: "Bear with ribs", desc: "Silver chest and arms — a less splendid but broader empire. In Daniel 7 this corresponds to the bear with three ribs in its mouth, raised up on one side. Persia conquered Babylon in 539 BC, exactly as Daniel's visions foretold." },
  { number: "3rd", name: "Belly of Bronze", empire: "Greece", color: TEAL, symbol: "Leopard with wings", desc: "Alexander the Great's blazing conquest — the four-winged leopard (Dan 7:6), moving with terrifying speed. His empire broke into four after his death (306-281 BC), just as Daniel's vision of the he-goat whose horn broke into four described." },
  { number: "4th", name: "Legs of Iron", empire: "Rome (and beyond)", color: RED, symbol: "Terrifying beast", desc: "The fourth kingdom is the most powerful and most destructive — it crushes and breaks everything. In Daniel 7 it is a nameless, terrifying beast with iron teeth. Many interpreters see the two legs as the division of Rome into East and West, and the ten toes as later fragmented empires." },
  { number: "5th", name: "The Divine Rock", empire: "Kingdom of God", color: PURPLE, symbol: "Cut without hands", desc: "A rock cut without human hands strikes the statue at the feet, shatters it entirely, and becomes a mountain filling the whole earth — the kingdom of God that will never be destroyed. This is the kingdom inaugurated in Christ and consummated at his return. Daniel 2 ends not with Rome but with the God who displaces all earthly empires." },
];

const HOW_TO_READ = [
  { title: "Apocalyptic Literature", color: PURPLE, desc: "Daniel (chapters 7-12) is the OT's main example of apocalyptic literature — a genre that uses vivid symbolic imagery (beasts, statues, cosmic battles) to unveil (the Greek apokalypsis means unveiling) the heavenly reality behind earthly history. Apocalyptic literature is not primarily predictive journalism; it is pastoral: written to sustain God's people under persecution by showing them that God is sovereign over empires they cannot see." },
  { title: "Historical vs. Predictive Sections", color: BLUE, desc: "Chapters 1-6 are primarily narrative (court stories): how Daniel and his friends remained faithful under Babylonian pressure. Chapters 7-12 are primarily visionary (apocalyptic): the four kingdoms, the Son of Man, the little horn, the 70 weeks. Both halves share the same theology: God is sovereign, his people must be faithful, and his kingdom will prevail." },
  { title: "The 70 Weeks (Daniel 9)", color: GOLD, desc: "The most debated passage in Daniel. Daniel receives a vision of 70 weeks (literally sevens — probably sabbatical years) for the completion of God's purposes: 7 weeks + 62 weeks + 1 week = 70 total. The first 69 weeks lead to the coming of an anointed one. The final week involves a covenant and the end of sacrifice. Interpretations range from purely historical (fulfilled in the Maccabean period) to partially fulfilled (the 69 ended at Christ's ministry) to futurist (the 70th week is yet to come)." },
  { title: "Empire and Faithfulness", color: GREEN, desc: "Daniel was written to Jews living under foreign empire — Babylonian, then Persian, then likely in its final form under Antiochus IV Epiphanes (175-164 BC), who desecrated the Temple and murdered those who refused to abandon Jewish practices. The book's pastoral message across every chapter is the same: you can remain faithful under empire; God sees; the empires will fall; his kingdom will stand." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type DanTab = "overview" | "stories" | "visions" | "sonofman" | "prayer" | "howtoread" | "themes" | "journal" | "videos";

export default function DanielGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<DanTab>("vine_dan_tab", "overview");
  const [openStory, setOpenStory] = useState<string | null>(null);
  const [openHow, setOpenHow] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_dan_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_dan_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

  const saveEntry = useCallback(() => {
    if (!jForm.verse && !jForm.reflection) return;
    const entry: JEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...jForm };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2000);
  }, [jForm]);

  const deleteEntry = useCallback((id: string) => setJEntries(prev => prev.filter(e => e.id !== id)), []);

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 60px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Prophecy · OT</div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>The Book of Daniel</h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>Stories of courageous faithfulness under empire and apocalyptic visions of God's ultimate sovereignty — a book written to sustain God's people when every earthly power seems invincible.</p>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${activeTab === t.id ? GOLD : BORDER}`, background: activeTab === t.id ? `${GOLD}20` : "transparent", color: activeTab === t.id ? GOLD : MUTED, fontWeight: activeTab === t.id ? 700 : 500, fontSize: 13, cursor: "pointer" }}>
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[["Author", "Daniel"], ["Setting", "Babylon (~605-530 BC)"], ["Genre", "Narrative + Apocalyptic"], ["Language", "Hebrew & Aramaic"], ["Key Theme", "God Over Empires"], ["Key Verse", "Dan 2:44"]].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Daniel is unique in the Old Testament: it is the only fully apocalyptic book in the Hebrew canon (Revelation is its New Testament counterpart). It is also written in two languages: the early chapters in Hebrew, then switching to Aramaic (the international language of empire) from 2:4 to 7:28, then back to Hebrew. This bilingualism itself may be theologically significant: the Aramaic sections concern the Gentile empires; the Hebrew sections concern the Jewish people and their future.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The book divides into two clear halves. Chapters 1-6 are court narratives — stories of Daniel and his friends remaining faithful in the courts of Babylon and Persia. Chapters 7-12 are visions — apocalyptic revelations given to Daniel concerning the future of world empires and the coming of God&apos;s kingdom. The two halves share a common theology: God is Lord of history, and he will vindicate his people.</p>
            </div>
          </div>
        )}

        {activeTab === "stories" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Courage Stories (Daniel 1-6)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The narrative section of Daniel comprises some of the most beloved stories in the Old Testament. They are not children&apos;s stories — they are theological essays about identity, faithfulness, and the cost of belonging to God in a world hostile to him. The Babylonian court is not evil-in-a-cartoonish-way; it is seductive, powerful, and generous. The challenge is not to survive it but to remain distinctly God&apos;s in the middle of it.</p>
            </div>
            {STORIES.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openStory === String(i) ? s.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                <button type="button" onClick={() => setOpenStory(openStory === String(i) ? null : String(i))}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ background: `${s.color}20`, border: `1px solid ${s.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: s.color, fontWeight: 700 }}>{s.ref}</span>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{s.title}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{s.verses}</div>
                    </div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{openStory === String(i) ? "−" : "+"}</span>
                </button>
                {openStory === String(i) && (
                  <div style={{ padding: "0 22px 18px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "14px 0 0" }}>{s.story}</p>
                  </div>
                )}
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginTop: 10 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>THE PATTERN OF THE STORIES</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>Each narrative follows a pattern: (1) imperial command that threatens Jewish identity; (2) the test of faithfulness; (3) God&apos;s deliverance; (4) the vindication of God&apos;s people before the Gentile king. The stories are not primarily about Daniel&apos;s courage — they are about God&apos;s faithfulness. Daniel and his friends are faithful because God is faithful. The courage is the fruit of theological conviction, not willpower.</p>
            </div>
          </div>
        )}

        {activeTab === "visions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>The Four Kingdoms (Daniel 2 and 7)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>In Daniel 2, Nebuchadnezzar has a dream of a magnificent statue made of decreasing metals — gold, silver, bronze, iron, clay. Daniel interprets it: four successive world empires, each less glorious than the last, ultimately shattered by a rock cut without human hands — the kingdom of God. The same four empires appear again in Daniel 7 as four terrifying beasts.</p>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>The theology is consistent: human empires, however glorious, are temporary. The kingdom of God, represented by a rock or a human figure (the Son of Man), will replace and outlast them all.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              {KINGDOMS.map(k => (
                <div key={k.number} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                    <span style={{ background: `${k.color}20`, border: `1px solid ${k.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: k.color, fontWeight: 700 }}>{k.number}</span>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{k.name}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{k.empire} · {k.symbol}</div>
                    </div>
                  </div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{k.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "sonofman" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>The Son of Man (Daniel 7:13-14)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>In my vision at night I looked, and there before me was one like a son of man, coming with the clouds of heaven. He approached the Ancient of Days and was led into his presence. He was given authority, glory and sovereign power; all nations and peoples of every language worshiped him. His dominion is an everlasting dominion that will not pass away, and his kingdom is one that will never be destroyed.</p>
              <div style={{ background: BG, borderRadius: 10, padding: "14px 18px", marginBottom: 14 }}>
                <p style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>This is the single most important passage in Daniel for NT Christology. Jesus uses &quot;Son of Man&quot; as his preferred self-designation — over 80 times in the Gospels.</p>
              </div>
            </div>
            {[
              { ref: "Human Likeness", color: GREEN, title: "One Like a Son of Man", content: "The phrase is deliberately ambiguous in Daniel 7. In its OT context, son of man often simply means human being (as in Ezekiel, where God addresses the prophet this way). But this figure is heavenly: he comes with the clouds — imagery elsewhere reserved for God himself. He approaches God (the Ancient of Days) and receives universal dominion. Most scholars see this figure as representing both an individual heavenly deliverer and the corporate people of God (the saints of the Most High, 7:22), with both dimensions fulfilled in Jesus." },
              { ref: "Jesus's Self-Title", color: BLUE, title: "Jesus Chose This Title", content: "Jesus overwhelmingly preferred Son of Man as his self-designation — over Messiah, Lord, or Son of God. This choice is deliberate. By choosing the most ambiguous OT title, Jesus forces people to ask the question: who is this Son of Man? The full answer is given at his trial (Mark 14:62): when asked if he is the Messiah, Jesus replies, I am — and you will see the Son of Man coming on the clouds of heaven. He is invoking Daniel 7:13 and claiming to be its fulfillment." },
              { ref: "Coming on Clouds", color: PURPLE, title: "The Direction of the Vision", content: "In Daniel 7, the Son of Man comes on the clouds to the Ancient of Days — not from heaven to earth, but from earth (or the lower heavens) upward to the throne of God. This is an ascension vision, not a descent. When Jesus applies this to himself, the primary referent is his ascension and enthronement at God's right hand — not primarily the Second Coming (though that is also included). The exaltation of the Son of Man is the vindication of all his suffering." },
              { ref: "Everlasting Kingdom", color: GOLD, title: "The Kingdom That Will Not Be Destroyed", content: "His dominion is an everlasting dominion that will not pass away, and his kingdom is one that will never be destroyed (7:14). This contrasts sharply with each of the four beast-kingdoms, which all receive limited dominion that is eventually stripped away. The kingdom given to the Son of Man does not succeed the others by being more powerful — it succeeds by being of a different kind. It is not bigger Rome; it is the rule of God himself, embodied in the human figure who approaches the Ancient of Days." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "prayer" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Daniel&apos;s Prayer (Daniel 9)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>Daniel 9 contains one of the most remarkable prayers in the entire Bible — a sustained act of corporate confession and intercession on behalf of Israel. Daniel has been reading Jeremiah and realizes the 70-year exile is ending. He does not respond with celebration or passive waiting. He responds with prayer — fasting, sackcloth, and ashes — confessing the sins of his people and pleading for God&apos;s mercy.</p>
            </div>
            {[
              { ref: "9:3-5", color: TEAL, title: "The Posture of Prayer", content: "I turned to the Lord God and pleaded with him in prayer and petition, in fasting, and in sackcloth and ashes. I prayed to the LORD my God and confessed: Lord, the great and awesome God, who keeps his covenant of love with those who love him and keep his commandments, we have sinned and done wrong. Daniel is not a distant observer of Israel's failure — he identifies fully with his people. We have sinned — not they have sinned. This is the prophetic posture of corporate identification with the community's guilt, regardless of personal righteousness." },
              { ref: "9:7-10", color: BLUE, title: "The Theology of Confession", content: "Lord, you are righteous, but this day we are covered with shame... we and our kings, our princes and our ancestors are ashamed because we have sinned against you. The LORD our God is merciful and forgiving, even though we have rebelled against him. Daniel does not negotiate with God or argue his case. He simply states the truth: God is righteous, Israel has been unfaithful, yet God is also merciful. Confession is not groveling — it is theological precision about the nature of the relationship." },
              { ref: "9:17-19", color: GREEN, title: "The Basis of the Plea", content: "Now, our God, hear the prayers and petitions of your servant. For your sake, Lord, look with favor on your desolate sanctuary... We do not make requests of you because we are righteous, but because of your great mercy. Lord, listen! Lord, forgive! Lord, hear and act! For your sake, my God, do not delay. The basis of Daniel's appeal is not Israel's merit — it is God's own name and reputation. For your sake — because God's own glory is bound up with the restoration of his people. The most effective prayers are those that appeal to what God has already committed himself to do." },
              { ref: "9:20-23", color: PURPLE, title: "The Answer in the Midst of Prayer", content: "While I was speaking and praying, confessing my sin and the sin of my people Israel and making my request to the LORD my God... while I was still in prayer, Gabriel, the man I had seen in the earlier vision, came to me in swift flight about the time of the evening sacrifice. He instructed me and said... As soon as you began to pray, a decree went out. The answer comes before Daniel finishes praying — in fact, it was sent at the beginning of his supplication. This detail is significant: Daniel&apos;s prayer is not changing God's mind. It is aligning Daniel with God's already-determined purpose." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "howtoread" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>How to Read Daniel Well</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>Daniel is one of the most misread books in the Bible — its apocalyptic visions have generated more interpretive controversy than almost any other text. Here are frameworks for reading it with care.</p>
            </div>
            {HOW_TO_READ.map((h, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openHow === String(i) ? h.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                <button type="button" onClick={() => setOpenHow(openHow === String(i) ? null : String(i))}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ background: `${h.color}20`, border: `1px solid ${h.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: h.color, fontWeight: 700 }}>Key</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{h.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{openHow === String(i) ? "−" : "+"}</span>
                </button>
                {openHow === String(i) && (
                  <div style={{ padding: "0 22px 18px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "14px 0 0" }}>{h.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "themes" && (
          <div>
            {[
              { color: GOLD, title: "The Sovereignty of God Over Empires", text: "The central theological claim of Daniel is that God is Lord of history. Nebuchadnezzar receives his kingdom from God (2:37-38). The Most High is sovereign over all kingdoms of men (4:25). When the Babylonian, Persian, Greek, and Roman empires seem invincible, Daniel says: they all fall. This is not optimistic activism — it is theological conviction that the God who created history directs it toward his own purposes." },
              { color: BLUE, title: "Faithful Witness Under Pressure", text: "Daniel and his friends never do the dramatic thing when the ordinary thing will do. They request a food test before the fiery furnace; they maintain daily prayer before the lions' den. The formation of faithful character under ordinary pressure is what makes extraordinary courage possible. Faithfulness is habitual before it is heroic." },
              { color: GREEN, title: "Wisdom Greater Than the World's", text: "Daniel is ten times wiser than all the magicians of Babylon (1:20). This is not intelligence — it is the wisdom that comes from knowing and fearing the God who reveals mysteries (2:28). The book consistently demonstrates that the wisdom of God displayed in covenant faithfulness exceeds all the wisdom of worldly empire. The apparently foolish path of faithfulness turns out to be the truly wise path." },
              { color: PURPLE, title: "Resurrection and Vindication", text: "Daniel 12:2 contains one of the clearest OT statements of bodily resurrection: Multitudes who sleep in the dust of the earth will awake: some to everlasting life, others to shame and everlasting contempt. Those who are wise will shine like the brightness of the heavens, and those who lead many to righteousness, like the stars for ever and ever. The resurrection is the final vindication of the faithful — the answer to the question: was it worth it?" },
              { color: RED, title: "The Little Horn and Persecution", text: "A recurring figure in Daniel's visions is the little horn — a boastful power that wages war against the saints, speaks against the Most High, and attempts to change the times and the law. Historically this is often identified with Antiochus IV Epiphanes, who desecrated the Temple in 167 BC. But the pattern recurs: the NT sees the same spirit in every power that exalts itself against God and persecutes his people (cf. 2 Thessalonians 2, Revelation 13). Daniel prepares God's people for this pattern, not just that instance." },
            ].map(t => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ color: t.color, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{t.title}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>My Daniel Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Record the stories, visions, and truths about God&apos;s sovereignty from your study of Daniel.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Passage</label><textarea rows={2} value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. Dan 3:17-18, Dan 7:13-14, Dan 9:18-19" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Reflection</label><textarea rows={4} value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="What does this story or vision say about God's sovereignty? What does faithful witness look like for you?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Prayer response</label><textarea rows={3} value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="How are you praying in response to what you've read in Daniel?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <button type="button" onClick={saveEntry} style={{ alignSelf: "flex-start", background: GOLD, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{jSaved ? "Saved ✓" : "Save Entry"}</button>
              </div>
            </div>
            {jEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {jEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}><span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span><button type="button" onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>✕</button></div>
                    {e.verse && <div style={{ marginBottom: 8 }}><span style={{ color: GOLD, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Passage</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.verse}</p></div>}
                    {e.reflection && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Reflection</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.reflection}</p></div>}
                    {e.prayer && <div><span style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Prayer</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.prayer}</p></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on Daniel</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Sermons and lectures on Daniel&apos;s visions, the courage stories, and the theology of the Son of Man.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "9cSC9uobtPM", title: "The Book of Daniel Overview", channel: "BibleProject", description: "BibleProject's animated overview of Daniel — the narrative structure, the four kingdoms, the Son of Man vision, and the book's theology of faithful witness under empire." },
                  { videoId: "3AEi87bqxss", title: "Daniel and the Fiery Furnace", channel: "Tim Keller", description: "Keller on Daniel 3 — the spiritual logic of the three friends' courage: our God is able to deliver us, but even if he does not. How suffering is transformed by theological conviction." },
                  { videoId: "XozFnPAW8_Q", title: "Son of Man — Daniel 7 and Jesus", channel: "Gospel Coalition", description: "An exploration of Daniel 7:13-14 — the one like a son of man, the Ancient of Days, and why Jesus chose this title above all others. Its implications for Christology and eschatology." },
                  { videoId: "kUYTeGNvCH4", title: "How to Read Apocalyptic Literature", channel: "Desiring God", description: "A framework for reading Daniel and Revelation — understanding apocalyptic genre, symbolic language, and how to apply prophetic literature without sensationalism." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GOLD, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
