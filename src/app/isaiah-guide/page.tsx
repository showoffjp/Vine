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
  { id: "holyone", label: "Holy One of Israel" },
  { id: "servant", label: "Servant Songs" },
  { id: "isaiah53", label: "Isaiah 53" },
  { id: "comfort", label: "Comfort & Hope" },
  { id: "newcreation", label: "New Creation" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const SERVANT_SONGS = [
  { ref: "Isa 42:1-9", title: "First Song: The Servant Who Brings Justice", color: BLUE, content: "Here is my servant, whom I uphold, my chosen one in whom I delight; I will put my Spirit on him, and he will bring justice to the nations. He will not shout or cry out, or raise his voice in the streets. A bruised reed he will not break, and a smoldering wick he will not snuff out. The Servant is introduced with divine endorsement (my servant, my chosen one, my delight) and filled with the Spirit. His mission is justice for the nations — but his method is antithetical to power: quiet, gentle, persistent. He does not crush the barely-surviving; he protects and restores. He is the model of what Jesus does and how he does it." },
  { ref: "Isa 49:1-7", title: "Second Song: The Servant Hidden and Revealed", color: GREEN, content: "Listen to me, you islands; hear this, you distant nations: Before I was born the LORD called me; from my mother's womb he has spoken my name... He said to me: You are my servant, Israel, in whom I will display my splendor. But I said, I have labored in vain; I have spent my strength for nothing at all. Yet what is due me is in the LORD's hand. The Servant speaks here in the first person — formed before birth, given a mouth like a sharpened sword, hidden in the shadow of God's hand. He experiences apparent failure (I have labored in vain) yet his confidence is in God's verdict. His mission expands: not merely to restore Israel, but to be a light for the Gentiles and bring salvation to the ends of the earth." },
  { ref: "Isa 50:4-11", title: "Third Song: The Servant Who Does Not Retreat", color: GOLD, content: "The Sovereign LORD has given me a well-instructed tongue, to know the word that sustains the weary. He wakens me morning by morning, wakens my ear to listen like one being instructed. I offered my back to those who beat me, my cheeks to those who pulled out my beard; I did not hide my face from mocking and spitting. The Servant receives instruction each morning and sustains the weary with a word — a picture of daily, quiet discipleship before the dramatic suffering. When mockery and beatings come, he does not retreat: Because the Sovereign LORD helps me, I will not be disgraced. The suffering is chosen, sustained by the daily discipline of listening to God." },
  { ref: "Isa 52:13–53:12", title: "Fourth Song: The Suffering Servant", color: RED, content: "He was despised and rejected by mankind, a man of suffering, and familiar with pain. Like one from whom people hide their faces he was despised, and we held him in low esteem. Surely he took up our pain and bore our suffering... he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed. This is the most theologically significant OT passage for the NT understanding of the cross. Philip asks the Ethiopian eunuch who the prophet is speaking about, and the answer is Jesus (Acts 8:30-35). The Servant suffers substitutionally: our transgressions, our iniquities, our peace, our healing — all transferred to him." },
];

const COMFORT_PASSAGES = [
  { ref: "40:1-3", color: GREEN, title: "Comfort, Comfort My People", text: "Comfort, comfort my people, says your God. Speak tenderly to Jerusalem, and proclaim to her that her hard service has been completed, that her sin has been paid for, that she has received from the LORD's hand double for all her sins. A voice of one calling: In the wilderness prepare the way for the LORD; make straight in the desert a highway for our God.", note: "The dramatic shift from chapter 39 (the Babylonian captivity announced) to chapter 40 is the pivot of the whole book. Judgment has been announced; now comfort comes. The first word of the new section is double: comfort, comfort — the doubled word signals urgency and tenderness. The herald voice in the wilderness is applied to John the Baptist in all four Gospels." },
  { ref: "40:28-31", color: BLUE, title: "Eagles' Wings", text: "Do you not know? Have you not heard? The LORD is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and his understanding no one can fathom. He gives strength to the weary and increases the power of the weak... those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", note: "The passage opens with interrogation (do you not know?) — implying that Israel has forgotten the basics. God does not grow weary; those who wait on (hope in) him have their strength renewed. The three movements — soar, run, walk — may be intentionally descending in drama: the miracle is not just soaring but simply walking and not fainting, the ordinary faithfulness of ordinary days." },
  { ref: "41:10", color: TEAL, title: "Do Not Fear", text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.", note: "Do not fear appears over 20 times in Isaiah 40-55. This is not positive thinking — it is theological command grounded in the character and presence of God. The command not to fear is always accompanied by a reason: I am with you, I am your God, I will strengthen. The antidote to fear is not more courage but more God." },
  { ref: "43:1-3", color: PURPLE, title: "I Have Redeemed You", text: "But now, this is what the LORD says — he who created you, Jacob, he who formed you, Israel: Do not fear, for I have redeemed you; I have summoned you by name; you are mine. When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you.", note: "Three assertions that define Israel's relationship with God: created by God, formed by God, and redeemed by God. The imagery of passing through waters echoes the Exodus — God has done this before. He who called Israel out of Egypt will call Israel out of Babylon. And crucially: I have summoned you by name; you are mine. Belonging to God is not abstract — it is personal, named, specific." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type IsaTab = "overview" | "holyone" | "servant" | "isaiah53" | "comfort" | "newcreation" | "themes" | "journal" | "videos";

export default function IsaiahGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<IsaTab>("vine_isa_tab", "overview");
  const [openServant, setOpenServant] = useState<string | null>(null);
  const [openComfort, setOpenComfort] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_isa_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_isa_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

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
    <div style={{ background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 60px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${BLUE}20`, border: `1px solid ${BLUE}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: BLUE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Major Prophet · OT</div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>The Book of Isaiah</h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>The fifth Gospel — the most quoted OT book in the NT. The Holy One of Israel, the Suffering Servant, Comfort ye my people, and the new creation where swords are beaten into plowshares.</p>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${activeTab === t.id ? BLUE : BORDER}`, background: activeTab === t.id ? `${BLUE}20` : "transparent", color: activeTab === t.id ? BLUE : MUTED, fontWeight: activeTab === t.id ? 700 : 500, fontSize: 13, cursor: "pointer" }}>
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[["Author", "Isaiah (& editors?)"], ["Period", "~740-681 BC"], ["Chapters", "66"], ["Most Quoted OT", "In the NT"], ["Key Theme", "Salvation Through Suffering"], ["Key Verse", "Isa 53:5"]].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Isaiah is the longest prophetic book and the most theologically rich in the Hebrew Bible. It is quoted or alluded to in the NT more than any other OT book — over 400 times. Jesus opened his ministry by reading from Isaiah 61 (Luke 4:18). When the NT authors want to explain the meaning of Jesus&apos;s life, death, and resurrection, they reach for Isaiah first.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The book divides around chapter 40. Chapters 1-39 are primarily oracles of judgment — Isaiah addresses Judah, the surrounding nations, and Babylon, calling for repentance and announcing consequences. Chapters 40-66 are primarily oracles of comfort — addressed to a people in exile, offering the deepest theology of redemption, the Servant Songs, and the vision of new creation. The shift is radical: from how far you have fallen to behold, I am doing a new thing.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[["Chs. 1-39", "Judgment & Warning", RED, "The Holy One of Israel confronts Judah's idolatry and injustice. Oracles against the nations. The Immanuel prophecy (7:14). Hezekiah's stories. The threat of Babylon."], ["Chs. 40-66", "Comfort & New Creation", BLUE, "Comfort, comfort my people (40:1). The Servant Songs (42, 49, 50, 52-53). I am the LORD who saves. The new exodus. New heavens and new earth (65-66)."]].map(([ref, title, color, desc]) => (
                <div key={String(ref)} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                    <span style={{ background: `${color}20`, border: `1px solid ${color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: String(color), fontWeight: 700 }}>{String(ref)}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{String(title)}</span>
                  </div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{String(desc)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "holyone" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: RED, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>The Holy One of Israel</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Holy One of Israel — this title for God appears 26 times in Isaiah and only 6 times in the rest of the OT combined. It is Isaiah&apos;s signature description of God. The title emerges from Isaiah&apos;s vision in chapter 6 — the seraphim crying Holy, holy, holy is the LORD Almighty; the whole earth is full of his glory.</p>
              <div style={{ background: BG, borderRadius: 10, padding: "14px 18px", marginBottom: 14 }}>
                <p style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>In the year that King Uzziah died, I saw the Lord, high and exalted, seated on a throne; and the train of his robe filled the temple. — Isaiah 6:1</p>
              </div>
            </div>
            {[
              { ref: "6:1-4", color: RED, title: "The Vision That Changed Everything", content: "In the year that King Uzziah died — a year of political crisis — Isaiah sees the LORD enthroned in heavenly glory. The seraphim cover their faces and cry Holy, holy, holy is the LORD Almighty — the triple repetition (a Hebrew superlative) marks God as supremely, absolutely, qualitatively holy. Holy means set apart, other, incomparable. God is not merely very good; he is ontologically different from everything in creation." },
              { ref: "6:5-7", color: PURPLE, title: "Woe Is Me — I Am Undone", content: "Woe to me! I cried. I am ruined! For I am a man of unclean lips, and I live among a people of unclean lips, and my eyes have seen the King, the LORD Almighty. Then one of the seraphim flew to me with a live coal in his hand, which he had taken with tongs from the altar. With it he touched my mouth and said, See, this has touched your lips; your guilt is taken away and your sin atoned for. The vision produces not pride but devastation. Isaiah does not feel more spiritual after seeing God — he feels more wretched. But the devastation is immediately followed by cleansing. The same God whose holiness exposes sin is the God who removes it." },
              { ref: "6:8", color: GREEN, title: "Here Am I, Send Me", content: "Then I heard the voice of the Lord saying, Whom shall I send? And who will go for us? And I said, Here am I. Send me! Isaiah's commissioning follows his cleansing. The order is important: he does not volunteer as a spiritual hero; he is first devastated by God's holiness, then cleansed, then sent. True ministry comes from encounter with the Holy One, not from ambition or gifting alone. And notably: God asks for a volunteer (Whom shall I send?) — he does not conscript. Isaiah responds freely." },
              { ref: "1:4; 12:6", color: TEAL, title: "Israel Has Forsaken the Holy One", content: "The title Holy One of Israel appears both in judgment contexts and in salvation contexts. In judgment: They have forsaken the LORD; they have spurned the Holy One of Israel (1:4). In salvation: Shout aloud and sing for joy, people of Zion, for great is the Holy One of Israel among you (12:6). The same God who judges for forsaking him is the same God who saves and dwells with his people. His holiness is not only his separateness but his moral consistency — he is what he is, whether confronting sin or redeeming sinners." },
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

        {activeTab === "servant" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>The Four Servant Songs</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Isaiah 40-55 contains four distinct poems about a figure called the Servant of the LORD. The identity of the Servant has been debated for centuries: Israel (the nation), an ideal individual within Israel, a specific historical figure, or the messianic king. The NT authors consistently identify the Servant as Jesus — and the NT itself was shaped by the Servant Songs more than by any other OT source.</p>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>The songs were identified and numbered by German scholar Bernhard Duhm in 1892. Their sequence traces a progression: introduction (42), expansion of mission (49), suffering obedience (50), and the climactic suffering and vindication (52-53).</p>
            </div>
            {SERVANT_SONGS.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openServant === String(i) ? s.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                <button type="button" onClick={() => setOpenServant(openServant === String(i) ? null : String(i))}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ background: `${s.color}20`, border: `1px solid ${s.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: s.color, fontWeight: 700 }}>{s.ref}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{s.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{openServant === String(i) ? "−" : "+"}</span>
                </button>
                {openServant === String(i) && (
                  <div style={{ padding: "0 22px 18px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "14px 0 0" }}>{s.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "isaiah53" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: RED, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Isaiah 53: The Suffering Servant</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Isaiah 53 (technically 52:13–53:12) is the most theologically dense passage in the OT. It is the passage Philip uses to explain the gospel to the Ethiopian eunuch (Acts 8:32-35). It contains the clearest OT expression of substitutionary atonement — suffering in the place of others. The NT quotes or alludes to it at least 40 times.</p>
            </div>
            {[
              { ref: "52:13-15", color: PURPLE, title: "Exalted Through Disfigurement", content: "See, my servant will act wisely; he will be raised and lifted up and highly exalted. Just as there were many who were appalled at him — his appearance was so disfigured beyond that of any human being — so he will sprinkle many nations. The passage begins at the end: the Servant will be exalted. But the exaltation comes after disfigurement so severe that people are appalled. The movement is identical to Philippians 2: humiliation to the point of death, then exaltation. The nations will shut their mouths in astonishment at what they witness." },
              { ref: "53:1-3", color: MUTED, title: "Despised and Rejected", content: "He grew up before him like a tender shoot, and like a root out of dry ground. He had no beauty or majesty to attract us to him, nothing in his appearance that we should desire him. He was despised and rejected by mankind, a man of suffering, and familiar with pain. Like one from whom people hide their faces he was despised, and we held him in low esteem. The Servant does not come in power or beauty — there is nothing impressive about his appearance. This is anti-triumphal: the world, looking for a conquering king, sees a suffering nobody. The divine choice to work through apparent weakness is the central scandal of the incarnation." },
              { ref: "53:4-6", color: RED, title: "He Took Our Infirmities", content: "Surely he took up our pain and bore our suffering, yet we considered him punished by God, stricken by him, and afflicted. But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed. We all, like sheep, have gone astray, each of us has turned to our own way; and the LORD has laid on him the iniquity of us all. The substitutionary logic is explicit: our transgressions → his piercing; our iniquities → his crushing; our wandering → laid on him. The suffering is not random — it is purposeful and specifically for others." },
              { ref: "53:7-9", color: BLUE, title: "Silent Before His Accusers", content: "He was oppressed and afflicted, yet he did not open his mouth; he was led like a lamb to the slaughter, and as a sheep before its shearers is silent, so he did not open his mouth. The silence before accusers is striking. Jesus's silence before Pilate (Matt 27:14) and Herod (Luke 23:9) is the fulfillment of this verse. The Servant is not defending himself because the suffering is voluntary. He was assigned a grave with the wicked, and with the rich in his death, though he had done no violence, nor was any deceit in his mouth — a detail the Gospels present as fulfilled by burial in Joseph of Arimathea's tomb." },
              { ref: "53:10-12", color: GREEN, title: "He Will See the Light of Life", content: "Yet it was the LORD's will to crush him and cause him to suffer, and though the LORD makes his life an offering for sin, he will see his offspring and prolong his days, and the will of the LORD will prosper in his hand. After he has suffered, he will see the light of life and be satisfied... I will give him a portion among the great... for he poured out his life unto death. The passage ends with resurrection and vindication: he will see the light of life, he will be satisfied, he will have offspring. The offering for sin (asham — guilt offering) leads to life, not extinction. This is the NT gospel in OT form: death, resurrection, exaltation, and the inheritance of the many." },
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

        {activeTab === "comfort" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Comfort and Hope (Isaiah 40-55)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The second half of Isaiah opens with the most dramatic tonal shift in the Old Testament. After 39 chapters of judgment, the divine voice breaks open: Comfort, comfort my people. The exiled people are addressed with tenderness. Chapters 40-55 contain the richest concentration of comfort theology in Scripture — repeatedly addressing fear, exhaustion, abandonment, and despair with the character and promises of God.</p>
            </div>
            {COMFORT_PASSAGES.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openComfort === String(i) ? item.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                <button type="button" onClick={() => setOpenComfort(openComfort === String(i) ? null : String(i))}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{item.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{openComfort === String(i) ? "−" : "+"}</span>
                </button>
                {openComfort === String(i) && (
                  <div style={{ padding: "0 22px 18px", borderTop: `1px solid ${BORDER}` }}>
                    <blockquote style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "14px 0 12px", padding: "0 0 0 14px", borderLeft: `3px solid ${item.color}` }}>{item.text}</blockquote>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{item.note}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "newcreation" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>The New Creation (Isaiah 65-66)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>Isaiah ends with one of the most glorious visions in all Scripture — the new heavens and the new earth. These chapters are the foundation of the NT vision of new creation (Revelation 21-22 explicitly quotes them). The new creation is not the destruction of this world and replacement with something else; it is the transformation and renewal of this world, purged of everything that defiles it.</p>
            </div>
            {[
              { ref: "65:17-19", color: TEAL, title: "The New Heavens and New Earth", content: "See, I will create new heavens and a new earth. The former things will not be remembered, nor will they come to mind. But be glad and rejoice forever in what I will create, for I will create Jerusalem to be a delight and its people a joy. I will rejoice over Jerusalem and take delight in my people; the sound of weeping and crying will be heard in it no more. The new creation begins with the abolition of grief. The sound of weeping and crying will be heard no more — this is Revelation 21:4 (God will wipe every tear) in Isaiah form. The city is central: the new creation is not an empty paradise but a city where God delights in his people." },
              { ref: "65:20-25", color: GREEN, title: "What the New Creation Looks Like", content: "Never again will there be in it an infant who lives but a few days, or an old man who does not live out his years... My chosen ones will long enjoy the work of their hands. They will not labor in vain, nor will they bear children doomed to misfortune... The wolf and the lamb will feed together, and the lion will eat straw like the ox. The new creation is described in earthly, embodied, social terms: long life, fruitful labor, children who flourish, and the predator-prey relationship among animals transformed. This is not a description of disembodied spirits in a non-material heaven; it is the redemption and renewal of material life." },
              { ref: "2:1-4", color: BLUE, title: "Swords Into Plowshares", content: "In the last days the mountain of the LORD's temple will be established as the highest of the mountains... All nations will stream to it. Many peoples will come and say, Come, let us go up to the mountain of the LORD, to the temple of the God of Jacob... He will judge between the nations and will settle disputes for many peoples. They will beat their swords into plowshares and their spears into pruning hooks. Nation will not take up sword against nation, nor will they train for war anymore. The most famous peace vision in the OT. The nations come to Jerusalem voluntarily, not under compulsion. And the transformation is economic and military simultaneously: weapons of war become tools of agricultural productivity. Peace is not the absence of conflict management systems; it is the transformation of the human project from war to cultivation." },
              { ref: "61:1-3", color: PURPLE, title: "The Year of the LORD's Favor", content: "The Spirit of the Sovereign LORD is on me, because the LORD has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners, to proclaim the year of the LORD's favor and the day of vengeance of our God, to comfort all who mourn. This is the passage Jesus reads in the Nazareth synagogue and applies to himself: Today this scripture is fulfilled in your hearing (Luke 4:21). The Servant/Spirit-anointed figure brings good news specifically to the marginalized: poor, brokenhearted, captive, prisoner, mourning. The gospel has always been for those who know they need it." },
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

        {activeTab === "themes" && (
          <div>
            {[
              { color: RED, title: "The Holy One of Israel", text: "This title — unique to Isaiah — defines God as categorically other. Holiness in Isaiah is not primarily a moral quality but an ontological one: God is in a class by himself. The seraphim's cry (Holy, holy, holy — the only triple repetition of a divine attribute anywhere in Scripture) sets the register for the entire book. Everything that follows is spoken by or about the Holy One — which means even the tenderest comfort passages carry divine weight." },
              { color: BLUE, title: "Salvation (Yeshua)", text: "Isaiah's own name means the LORD saves — and the word salvation (yeshua/yeshuah) appears more in Isaiah than in any other OT book. The gospel is announced in Isaiah decades before Jesus: all the ends of the earth will see the salvation of our God (52:10). Isaiah is the OT book that most explicitly announces salvation not just for Israel but for all nations." },
              { color: GREEN, title: "The New Exodus", text: "The second half of Isaiah is structured as a new Exodus — a new act of redemption corresponding to and exceeding the original Exodus from Egypt. Go out from Babylon... the LORD has redeemed his servant Jacob (48:20). The wilderness will be transformed; the waters will part; God will lead his people home by a new route. This new-exodus framework is foundational to the NT's understanding of Jesus as the one who accomplishes the final, ultimate Exodus from slavery to sin and death." },
              { color: TEAL, title: "Light to the Nations", text: "Isaiah's vision consistently expands beyond Israel to the nations. The Servant is given as a light for the Gentiles, to open eyes that are blind, to free captives from prison (42:7). I will also make you a light for the Gentiles, that my salvation may reach to the ends of the earth (49:6). This universal scope is taken up by Paul (Acts 13:47) as his missionary mandate. Isaiah is not just for Judah — it is for the world." },
              { color: PURPLE, title: "Trust vs. Idolatry", text: "A consistent contrast in Isaiah: trust in the LORD vs. trust in idols or political alliances. The satire of idols in Isaiah 44:9-20 (a man cuts down a tree, uses half for firewood and half to make a god) is one of the most devastating critiques of idolatry in the OT. The same logic applies to trusting Egypt rather than God (30:1-3), trusting Assyria, trusting military power. The fundamental human failure is looking to anything other than the Holy One for salvation." },
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
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>My Isaiah Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Record the oracles, comfort passages, and Servant Song insights from your study of Isaiah.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Passage</label><textarea rows={2} value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. Isa 40:31, Isa 53:5, Isa 61:1-3" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Reflection</label><textarea rows={4} value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="What does this passage reveal about God? About Jesus? About yourself?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Prayer response</label><textarea rows={3} value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="What comfort, call, or challenge are you bringing to God in prayer?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <button type="button" onClick={saveEntry} style={{ alignSelf: "flex-start", background: BLUE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{jSaved ? "Saved ✓" : "Save Entry"}</button>
              </div>
            </div>
            {jEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {jEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}><span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span><button type="button" onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>✕</button></div>
                    {e.verse && <div style={{ marginBottom: 8 }}><span style={{ color: BLUE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Passage</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.verse}</p></div>}
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
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on Isaiah</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Sermons and lectures on Isaiah&apos;s vision of the Holy One, the Servant Songs, and the new creation.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "d0A6Uchb1F8", title: "The Book of Isaiah Overview", channel: "BibleProject", description: "BibleProject's animated overview of Isaiah — the structure, the Holy One of Israel, the Servant Songs, and the vision of new creation that anchors the whole book." },
                  { videoId: "n0QeNVFCbf0", title: "Isaiah 53 — The Suffering Servant", channel: "Tim Keller", description: "Keller on Isaiah 52:13-53:12 — the most extraordinary OT prophecy of the cross, substitutionary suffering, and the vindication that follows." },
                  { videoId: "Vo5MOFf5V0I", title: "Isaiah 40: Comfort My People", channel: "Gospel Coalition", description: "An exposition of Isaiah 40 — the great comfort passage, the everlasting God who does not grow weary, and the promise of renewed strength for the exhausted people of God." },
                  { videoId: "G1VLQoLFWYg", title: "The New Creation Vision in Isaiah 65-66", channel: "Desiring God", description: "Isaiah's vision of new heavens and new earth — what the new creation looks like, how it connects to Revelation 21-22, and what it means for our hope today." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: BLUE, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
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
