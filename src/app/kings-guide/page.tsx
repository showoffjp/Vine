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
  { id: "solomon", label: "Solomon" },
  { id: "divided", label: "Divided Kingdom" },
  { id: "elijah", label: "Elijah" },
  { id: "elisha", label: "Elisha" },
  { id: "hezekiah", label: "Hezekiah" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const SOLOMON_SECTIONS = [
  {
    color: GOLD,
    title: "Solomon's Wisdom — 1 Kings 3–4",
    body: "At the beginning of his reign, God appears to Solomon in a dream and offers him anything he asks. Solomon asks for wisdom to govern justly. God is pleased: because he did not ask for long life, wealth, or victory over enemies, God gives him all of it plus the wisdom. The famous judgment of the two mothers (3:16–28) demonstrates what this wisdom looks like in practice: it reads human psychology, cuts through deception, and produces justice for the vulnerable. The report that follows — 'God gave Solomon wisdom and very great discernment, and breadth of mind like the sand on the seashore' (4:29) — establishes Solomon as the greatest sage of the ancient world.",
  },
  {
    color: BLUE,
    title: "The Temple — 1 Kings 5–8",
    body: "Solomon's temple is the defining achievement of his reign and the theological center of the OT until the exile. Built over seven years, it is the permanent dwelling of the divine name — 'the place of which you said, My name shall be there' (8:29). The dedication prayer (chapter 8) is a theological masterpiece: Solomon prays that when people pray toward this place, God will hear from heaven and forgive. He explicitly includes foreigners: 'when a foreigner, who is not of your people Israel, comes from a far country for your name's sake... hear in heaven your dwelling place and do whatever the foreigner asks' (8:41–43). The temple is never meant to be exclusively Israelite. Its courts are for all nations.",
  },
  {
    color: RED,
    title: "Solomon's Failure — 1 Kings 11",
    body: "The pivot of Solomon's story is chapter 11. 'Now King Solomon loved many foreign women' — the text begins carefully. He had 700 wives of royal descent and 300 concubines. 'When Solomon was old, his wives turned away his heart after other gods, and his heart was not wholly true to the LORD his God' (11:4). The man who built the temple builds high places for Chemosh and Moloch. The man who received divine wisdom abandons the God who gave it. God's judgment: the kingdom will be torn from his son. The deuteronomic verdict is precise — Solomon's failure is exactly the failure Deuteronomy 17:17 warned against: 'he must not multiply wives for himself, lest his heart turn away.'",
  },
];

const DIVIDED_SECTIONS = [
  {
    color: RED,
    title: "The Tear — 1 Kings 12",
    body: "When Solomon dies, his son Rehoboam becomes king. The people appeal for a lighter burden. Rehoboam consults his father's elderly advisors, who counsel mercy. He rejects their counsel and follows younger advisors who advise harshness: 'My father disciplined you with whips; I will discipline you with scorpions' (12:11). The ten northern tribes revolt under Jeroboam. From this moment on, there are two kingdoms: the northern kingdom of Israel (ten tribes, capital Samaria) and the southern kingdom of Judah (two tribes, capital Jerusalem). They will never reunify. The political catastrophe is the consequence of Rehoboam's pride — and the fulfillment of God's judgment on Solomon.",
  },
  {
    color: PURPLE,
    title: "The Kings of Israel — All Bad",
    body: "The northern kingdom has nineteen kings across two centuries. The biblical historian evaluates every single one negatively: each 'did evil in the eyes of the LORD.' Jeroboam establishes golden calves at Bethel and Dan ('Here are your gods, Israel, who brought you up out of Egypt,' 12:28 — an almost word-for-word repetition of Aaron's golden calf sin at Sinai). This becomes the defining failure of the northern kingdom. The Omride dynasty (Omri, Ahab) deepens the apostasy. The kingdom falls to Assyria in 722 BC, its people deported and scattered. The prophets Amos, Hosea, and Isaiah speak into this period.",
  },
  {
    color: GREEN,
    title: "The Kings of Judah — Mixed",
    body: "The southern kingdom fares better — it has a few good kings among its twenty rulers (Asa, Jehoshaphat, Hezekiah, Josiah) alongside consistently bad ones. The Davidic covenant keeps the line intact: God preserves Judah 'for David's sake' even when the kings are faithless. The standard verdict is 'he did what was right in the eyes of the LORD' (good) or 'he did evil' (bad), often with the qualification 'but the high places were not removed.' Only Hezekiah and Josiah receive the highest praise. Judah falls to Babylon in 586 BC — the event the entire book has been building toward.",
  },
];

const ELIJAH_SECTIONS = [
  {
    color: GOLD,
    title: "Carmel — 1 Kings 18",
    body: "The most dramatic confrontation in the historical books. Elijah challenges 450 prophets of Baal and 400 prophets of Asherah — all supported by Queen Jezebel — to a contest on Mount Carmel. Two bulls, two altars, two prayers. The god who answers by fire is God. The prophets of Baal pray from morning to noon, cry out louder, cut themselves — nothing. Elijah taunts them magnificently: 'Shout louder! Surely he is a god! Perhaps he is deep in thought, or busy, or traveling. Maybe he is sleeping and must be awakened' (18:27). Then Elijah prays a single, simple prayer. Fire falls from heaven, consumes the sacrifice, the altar, the stones, the dust, and the water in the trench. 'The LORD — he is God!' the people shout. Then Elijah has the prophets of Baal killed.",
  },
  {
    color: TEAL,
    title: "The Still Small Voice — 1 Kings 19",
    body: "Immediately after the greatest triumph of his ministry, Elijah runs. Jezebel threatens his life; he flees to the desert, sits under a broom tree, and prays to die: 'I have had enough, LORD. Take my life; I am no better than my ancestors' (19:4). God's response is to feed him. Twice. Then Elijah travels forty days to Horeb (Sinai). God asks: 'What are you doing here, Elijah?' He sends a great wind, an earthquake, and fire — but God is not in any of them. Then 'after the fire — a still small voice' (19:12, KJV) or 'the sound of a low whisper' (ESV). The contrast with Carmel is deliberate: the same God who answered by fire also speaks in whisper. The prophet who wanted to die is commissioned again.",
  },
  {
    color: PURPLE,
    title: "Elijah's Translation — 2 Kings 2",
    body: "Elijah does not die. As he and Elisha walk together, 'a chariot of fire and horses of fire separated the two of them, and Elijah went up by a whirlwind into heaven' (2:11). Elisha asks for a double portion of Elijah's spirit — the inheritance request of the firstborn son. He receives it: he sees Elijah go. The Elijah theme runs into the NT: Malachi 4:5 promises 'I will send you the prophet Elijah before the great and dreadful day of the LORD.' Jesus identifies John the Baptist as the Elijah who was to come (Matt 11:14). Elijah appears at the transfiguration alongside Moses. He is the permanent symbol of prophetic witness at history's turning points.",
  },
  {
    color: RED,
    title: "Naboth's Vineyard — 1 Kings 21",
    body: "Ahab wants Naboth's vineyard. Naboth refuses to sell his ancestral inheritance — a right protected by Mosaic law. Ahab sulks; Jezebel arranges false charges against Naboth, who is then stoned. Ahab takes the vineyard. Elijah's verdict: 'Have you murdered a man and also taken possession?' (21:19). He pronounces a devastating curse on Ahab and his dynasty. Ahab's brief repentance delays the judgment on him personally but does not remove it from his house. The episode is the OT's clearest statement on state power and property rights: even a king cannot simply take what belongs to a citizen. The prophetic tradition stands against royal injustice without compromise.",
  },
];

const ELISHA_SECTIONS = [
  {
    color: BLUE,
    title: "Double Portion — 2 Kings 2–3",
    body: "Elisha receives Elijah's spirit and immediately performs a miracle — striking the Jordan with Elijah's cloak and it divides as for his master. The witness: 'The spirit of Elijah rests on Elisha' (2:15). The double portion of the firstborn son's inheritance means Elisha's ministry will be marked by twice as many miracles as Elijah's — and the count bears this out. Where Elijah performed 8 miracles, Elisha performs 16 (including one posthumously, when a dead man is thrown into his grave and restored to life at the touch of his bones — 2 Kings 13:21).",
  },
  {
    color: GREEN,
    title: "The Widow's Oil and the Shunammite — 2 Kings 4",
    body: "Chapter 4 contains two remarkable stories. A widow's oil is multiplied until every jar she can borrow is full — enough to pay her debts and live on. A wealthy Shunammite woman who shows hospitality to Elisha is given a son she did not have; when the child dies, Elisha raises him. These stories establish Elisha as operating in the tradition of Elijah's miracles (oil multiplication echoes 1 Kings 17, resurrection echoes 1 Kings 17) while surpassing them in intensity. The prophetic school tradition around Elisha shows that prophetic ministry is community-forming, not solo.",
  },
  {
    color: GOLD,
    title: "Naaman the Leper — 2 Kings 5",
    body: "Naaman is the commander of the Aramean army — Israel's enemy. His Israelite slave girl suggests he see the prophet in Samaria for his leprosy. He comes with chariots and gold. Elisha's instruction is humiliatingly simple: wash seven times in the Jordan. Naaman is furious — the rivers of Syria are better than the Jordan, he protests. His servants persuade him: if the prophet had asked something great, would you not have done it? He washes, is healed, and declares: 'there is no God in all the earth except in Israel' (5:15). Then he asks Elisha's blessing to bow in the temple of Rimmon with his master. Jesus cites this story in Luke 4:27 as proof that God's mercy has always extended beyond Israel to the Gentiles.",
  },
];

const HEZEKIAH_SECTIONS = [
  {
    color: GREEN,
    title: "The Best King — 2 Kings 18",
    body: "Hezekiah receives the highest praise of any Judean king: 'He trusted in the LORD, the God of Israel, so that there was none like him among all the kings of Judah after him, nor among those who were before him' (18:5). He removes the high places, tears down the sacred pillars, and even destroys the bronze serpent Moses made (which Israel had been burning incense to). He is also a practical leader: when Assyria threatens, he fortifies Jerusalem, secures the water supply, and takes action. But his most important act is what he does when the threat exceeds his capacity to respond.",
  },
  {
    color: BLUE,
    title: "Sennacherib's Letter and Hezekiah's Prayer — 2 Kings 19",
    body: "The Assyrian field commander stands outside Jerusalem and shouts: 'Don't let your God deceive you... Has the god of any nation ever delivered his land from the hand of the king of Assyria?' (19:12). When the report reaches Hezekiah, he goes to the temple and spreads the letter before the LORD — literally lays it out before God. His prayer is simple and entirely focused on God's glory: 'You alone are God over all the kingdoms of the earth. Deliver us... so that all kingdoms on earth may know that you, LORD, are the only God' (19:15–19). That night the angel of the LORD strikes 185,000 Assyrians. Sennacherib returns to Nineveh and is murdered by his own sons. The text cuts no corners: God answers this prayer.",
  },
];

const THEMES = [
  { icon: "👑", color: GOLD, title: "The Deuteronomic Standard", body: "The historian of Kings evaluates every king by the standard of Deuteronomy: did he worship YHWH alone, at the prescribed place, without images? The verdict is almost always negative for the north and frequently negative for the south. This framework explains why 2 Kings 18:5's verdict on Hezekiah is so startling — no other king before or after is said to have trusted the LORD as he did. The standard is the Shema: total covenant loyalty to YHWH alone." },
  { icon: "🗣️", color: TEAL, title: "The Prophets as Covenant Prosecutors", body: "Elijah, Elisha, Isaiah, and the unnamed prophets throughout Kings function as covenant prosecutors — they confront kings who violate the covenant and announce the consequences. The word of the LORD through the prophets is not merely predictive; it is effectual — what they announce, happens. The historical books exist in part to demonstrate this: prophecy is fulfilled with precision." },
  { icon: "⚠️", color: RED, title: "The Fall of Israel and Judah", body: "The books of Kings end in catastrophe: Israel falls to Assyria (722 BC) and Judah to Babylon (586 BC). The historian interprets both disasters in explicitly theological terms: Israel was exiled 'because they had sinned against the LORD their God... and had walked in the customs of the nations' (2 Kings 17:7). The destruction is not geopolitical accident — it is the covenant curses of Deuteronomy 28 working themselves out through history. The exile is both historical event and theological verdict." },
  { icon: "🕯️", color: PURPLE, title: "A Lamp for David", body: "Despite the repeated failures of the Davidic dynasty, God preserves Judah 'for David's sake' (1 Kings 11:13; 15:4). The phrase 'gave him a lamp in Jerusalem' (15:4) is the metaphor of covenant continuity: the Davidic line is a flickering lamp that God will not extinguish, even in judgment. This foreshadows the NT claim that Jesus, the Son of David, comes as 'the light of the world' — the lamp the whole covenant story was pointing toward." },
  { icon: "🌍", color: GREEN, title: "The Gentiles and God's Mercy", body: "Solomon's temple prayer includes foreigners. Naaman the Aramean is healed and confesses YHWH. The widow of Zarephath (Elijah) and Naaman (Elisha) are cited by Jesus in Luke 4:24–27 as examples of God's mercy extending beyond Israel. The books of Kings, despite their focus on the covenant people, repeatedly show the God of Israel's concern for the nations." },
  { icon: "🙏", color: BLUE, title: "Prayer as Crisis Response", body: "The books of Kings contain some of Scripture's greatest crisis prayers: Solomon's temple dedication (1 Kings 8), Elijah on Carmel (1 Kings 18:36–37), Hezekiah spreading Sennacherib's letter before the LORD (2 Kings 19:14–19), Hezekiah's personal prayer when told he will die (2 Kings 20:1–3). Each prayer is marked by directness, focus on God's glory rather than personal benefit, and remarkable answers. The books demonstrate that prayer to the living God is not religious performance — it is the most practical thing a person can do." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type KingsTab = "overview" | "solomon" | "divided" | "elijah" | "elisha" | "hezekiah" | "themes" | "journal" | "videos";

export default function KingsGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<KingsTab>("vine_kings_tab", "overview");
  const [openSolomon, setOpenSolomon] = useState<string | null>(null);
  const [openDivided, setOpenDivided] = useState<string | null>(null);
  const [openElijah, setOpenElijah] = useState<string | null>(null);
  const [openElisha, setOpenElisha] = useState<string | null>(null);
  const [openHez, setOpenHez] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_kings_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_kings_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

  const saveJEntry = useCallback(() => {
    if (!jForm.verse.trim() && !jForm.reflection.trim()) return;
    const entry: JEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), verse: jForm.verse, reflection: jForm.reflection, prayer: jForm.prayer };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2500);
  }, [jForm]);

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12 };
  const accent = GOLD;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: `linear-gradient(135deg, rgba(217,119,6,0.15) 0%, rgba(13,148,136,0.10) 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🏛️</div>
            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: TEXT, marginBottom: "0.75rem" }}>1 & 2 Kings</h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 640, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
              Solomon&apos;s temple and disastrous legacy, the divided kingdom, Elijah&apos;s Mount Carmel showdown and still small voice, Elisha&apos;s miracles, Hezekiah&apos;s extraordinary prayer, and the fall of both kingdoms. What happens when the king&apos;s heart turns from God.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[{ label: "1 Kings — 22 Chapters", color: BLUE }, { label: "2 Kings — 25 Chapters", color: GOLD }, { label: "OT History", color: GREEN }, { label: "Prophets: Elijah & Elisha", color: TEAL }].map(b => (
                <span key={b.label} style={{ background: `${b.color}22`, color: b.color, border: `1px solid ${b.color}44`, borderRadius: 20, padding: "0.3rem 0.9rem", fontSize: "0.8rem", fontWeight: 600 }}>{b.label}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderBottom: `1px solid ${BORDER}`, background: `${CARD}CC`, position: "sticky", top: "var(--header-height, 80px)", zIndex: 20 }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", overflowX: "auto", padding: "0 1rem" }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id as KingsTab)}
                style={{ padding: "0.9rem 1.1rem", fontSize: "0.82rem", fontWeight: activeTab === t.id ? 700 : 500, color: activeTab === t.id ? accent : MUTED, borderBottom: `2px solid ${activeTab === t.id ? accent : "transparent"}`, background: "none", border: "none", borderBottomWidth: 2, borderBottomStyle: "solid", cursor: "pointer", whiteSpace: "nowrap", transition: "color 150ms" }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

          {activeTab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
                <div style={{ ...card, padding: "2rem", borderTop: `3px solid ${BLUE}` }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>📜</div>
                  <h2 style={{ color: BLUE, fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>1 Kings: Glory and Disaster</h2>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.9rem" }}>From Solomon&apos;s magnificent beginning — wisdom, the temple, the visit of the Queen of Sheba — to his catastrophic end in idolatry. Then the kingdom tears in two, Ahab and Jezebel deepen the apostasy, and Elijah emerges as the great prophetic challenger of the monarchy.</p>
                </div>
                <div style={{ ...card, padding: "2rem", borderTop: `3px solid ${GOLD}` }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>⚡</div>
                  <h2 style={{ color: GOLD, fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>2 Kings: Decline and Exile</h2>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.9rem" }}>Elisha&apos;s ministry, a brief bright light with Hezekiah and later Josiah, and the relentless downward spiral of the divided monarchy toward the Assyrian destruction of Israel (722 BC) and the Babylonian destruction of Jerusalem and the temple (586 BC).</p>
                </div>
              </div>
              <div style={{ ...card, padding: "2rem" }}>
                <h3 style={{ color: accent, fontWeight: 700, marginBottom: "1rem" }}>The Theological Framework</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "0.75rem" }}>Kings is history written with a theological thesis: the fate of the nation is determined by the faithfulness of its leaders to the covenant. This is not naive — the historian is not ignorant of the political forces (Assyria, Babylon) that play into the fall of both kingdoms. But the primary explanation is theological: Israel and Judah fell because they repeatedly abandoned the LORD their God and served other gods, violating the covenant God made with their fathers.</p>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>The books end with a remarkable note of hope: the exiled king Jehoiachin is released from prison and given a place at the Babylonian king&apos;s table (2 Kings 25:27–30). The Davidic line is not extinguished. The story is not over.</p>
              </div>
            </div>
          )}

          {activeTab === "solomon" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GOLD, marginBottom: "0.5rem" }}>Solomon: The Wisest Man Who Made the Worst Choice</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Solomon is the paradox king: the wisest man who ever lived, who wrote Proverbs and Ecclesiastes, who built the most magnificent temple in Israel&apos;s history — and who ended his reign in idolatry. His story is a case study in what happens when wisdom is divorced from obedience.</p>
              </div>
              {SOLOMON_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenSolomon(openSolomon === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openSolomon === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openSolomon === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "divided" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: RED, marginBottom: "0.5rem" }}>The Divided Kingdom: Two Peoples, Two Fates</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>From 930 BC to 722 BC (north) and 586 BC (south), the two kingdoms pursue radically different paths — the north entirely abandoning covenant faithfulness, the south maintaining a flickering flame through periodic reforming kings.</p>
              </div>
              {DIVIDED_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenDivided(openDivided === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openDivided === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openDivided === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "elijah" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: TEAL, marginBottom: "0.5rem" }}>Elijah: The Prophet Who Did Not Die</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Elijah appears suddenly in 1 Kings 17 with no introduction and departs for heaven without dying. Between those two moments he is the most dramatic prophetic figure in the historical books — confronting kings, calling fire from heaven, fleeing in suicidal depression, and hearing the voice of God in silence.</p>
              </div>
              {ELIJAH_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenElijah(openElijah === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openElijah === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openElijah === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "elisha" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GREEN, marginBottom: "0.5rem" }}>Elisha: The Double-Portion Prophet</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Elisha inherits Elijah&apos;s mantle literally and figuratively. His ministry is marked by an extraordinary number of miracles — multiplication, resurrection, healing, military intelligence, axe heads floating. His most famous miracle involves a foreign enemy general.</p>
              </div>
              {ELISHA_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenElisha(openElisha === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openElisha === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openElisha === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "hezekiah" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GREEN, marginBottom: "0.5rem" }}>Hezekiah: The King Who Prayed</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Hezekiah is the standard against which all kings of Judah are measured. His defining moments are not his military reforms or his engineering of the Siloam tunnel — they are the two prayers he brings before the LORD when circumstances are beyond human capacity.</p>
              </div>
              {HEZEKIAH_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenHez(openHez === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openHez === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openHez === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
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
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "journal" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", color: accent, marginBottom: "1.5rem" }}>Kings Journal</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>VERSE OR PASSAGE</label>
                    <input value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. 1 Kings 19:12, 2 Kings 19:14, 1 Kings 18:37" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>REFLECTION</label>
                    <textarea value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="Where do you see yourself in these stories? Under a broom tree like Elijah? Spreading your problems before God like Hezekiah?" rows={4} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>PRAYER RESPONSE</label>
                    <textarea value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="Deliver us so that all the earth may know that you are God..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
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
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>1 & 2 Kings — Video Library</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Overviews and focused studies on Kings, Elijah, Elisha, and the prophetic tradition.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {[
                  { id: "bVFnKSsKyYQ", title: "1 Kings Overview", channel: "BibleProject" },
                  { id: "DdeZQEgOFAE", title: "2 Kings Overview", channel: "BibleProject" },
                  { id: "hZLHYr0dkQ4", title: "Elijah: The Prophet Who Prayed", channel: "Desiring God" },
                  { id: "NNzQf-3wFr4", title: "Naaman and the Grace of God", channel: "Bible Study" },
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
