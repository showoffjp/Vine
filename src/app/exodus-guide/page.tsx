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
  { id: "plagues", label: "Ten Plagues" },
  { id: "passover", label: "The Passover" },
  { id: "redsea", label: "Red Sea Crossing" },
  { id: "sinai", label: "Sinai & the Law" },
  { id: "tabernacle", label: "The Tabernacle" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const PLAGUES = [
  { num: "1st", name: "Water to Blood", ref: "7:14-25", color: RED, god: "Khnum / Hapi", desc: "The Nile turned to blood — Egypt's lifeline and the river they worshiped. Hapi was the Nile deity; Khnum was guardian of the Nile's source. The first plague attacks Egypt's most fundamental source of life and worship." },
  { num: "2nd", name: "Frogs", ref: "8:1-15", color: GREEN, god: "Heqet", desc: "Frogs swarm from the Nile into every part of Egypt. Heqet was the frog-goddess of fertility. The plague weaponizes a sacred symbol against Egypt — frogs everywhere become a curse rather than a blessing." },
  { num: "3rd", name: "Gnats/Lice", ref: "8:16-19", color: MUTED, god: "(earth itself)", desc: "The magicians cannot replicate this plague: 'This is the finger of God' (8:19). The earth itself — over which Pharaoh claimed dominion — rises against him." },
  { num: "4th", name: "Flies", ref: "8:20-32", color: GOLD, god: "Khepri", desc: "A distinction appears: the flies do not touch Goshen where Israel lives. God begins to draw a line between his people and Egypt — a foretaste of the Passover's distinction." },
  { num: "5th", name: "Livestock Disease", ref: "9:1-7", color: TEAL, god: "Hathor / Apis", desc: "Egypt's cattle and livestock die; Israel's do not. Hathor (cow goddess) and Apis (sacred bull) are shown to be powerless. Pharaoh sends to check and finds Israel's livestock untouched — still his heart is hardened." },
  { num: "6th", name: "Boils", ref: "9:8-12", color: PURPLE, god: "(medicine / healing)", desc: "Festering boils on every Egyptian and animal. The magicians cannot stand before Moses because of the boils. Egypt's medical tradition — a point of pride — is helpless." },
  { num: "7th", name: "Hail", ref: "9:13-35", color: BLUE, god: "Nut / Seth", desc: "The most severe weather disaster Egypt has ever seen. Those who feared God's word among the Egyptians sheltered their livestock — faith penetrates even among Egypt's servants. Nut (sky goddess) and Seth (storm god) are defeated by the one true God." },
  { num: "8th", name: "Locusts", ref: "10:1-20", color: GREEN, god: "Nepri (grain god)", desc: "Locusts devour every plant the hail left. Egypt's agricultural civilization is stripped bare. Pharaoh's officials beg him to relent: 'Do you not yet realize that Egypt is ruined?' (10:7). Nepri, the grain deity, cannot protect what the Lord destroys." },
  { num: "9th", name: "Darkness", ref: "10:21-29", color: MUTED, god: "Ra / Aten", desc: "Three days of total darkness — while Israel has light in their dwellings. Ra the sun god, Aten (the solar disk), Pharaoh himself (the sun's representative on earth) — all defeated by the God who commands light itself." },
  { num: "10th", name: "Death of the Firstborn", ref: "11-12", color: RED, god: "Pharaoh (firstborn of Ra)", desc: "The final and most devastating plague. Every firstborn in Egypt — from the son of Pharaoh, who is the firstborn of Ra and the son of god, to the firstborn of the slave, to the firstborn of livestock. The Passover lamb dies in Israel's place." },
];

const TABERNACLE_ITEMS = [
  { ref: "Ex 25:8-9", color: GOLD, title: "God Dwells with His People", content: "\"Let them make me a sanctuary, that I may dwell in their midst. Exactly as I show you concerning the pattern of the tabernacle, and of all its furniture, so you shall make it.\" The word used for God's dwelling (shakan) gives us the Shekinah — the dwelling presence of God. The tabernacle is the answer to the problem created at the Fall: how can a holy God dwell in the midst of sinful people? The elaborate sacrificial and priestly system is not bureaucratic religion — it is the pathway of grace that makes the impossible possible." },
  { ref: "The Furniture", color: TEAL, title: "The Sacred Furniture", content: "Each item in the tabernacle carries theological weight. The ark of the covenant holds the tablets of the Law — God's covenant placed under the mercy seat (kapporeth), the place where the high priest sprinkles blood on the Day of Atonement. The menorah (lampstand) provides light in the Holy Place — perhaps symbolizing the tree of life. The table of showbread represents God's provision for his people. The altar of incense represents prayer rising to God. Every detail is prescribed by God himself: Israel cannot invent the terms of approach to the holy God." },
  { ref: "Ex 40:34-38", color: PURPLE, title: "The Glory Fills the Tabernacle", content: "\"Then the cloud covered the tent of meeting, and the glory of the LORD filled the tabernacle. And Moses was not able to enter the tent of meeting because the cloud settled on it, and the glory of the LORD filled the tabernacle.\" The completion of the tabernacle and its filling with the divine glory is the climax of Exodus. What began with the burning bush — God's holy presence appearing to Moses — now takes up permanent residence in the midst of the people. The God who was far-off has made a way to draw near." },
  { ref: "Hebrews 9", color: BLUE, title: "Tabernacle Fulfilled in Christ", content: "The New Testament, especially Hebrews, reads the tabernacle as pointing forward to Christ. Christ is the true High Priest who enters the heavenly sanctuary, not with animal blood but with his own (Heb 9:11-12). John's Gospel declares that 'the Word became flesh and tabernacled (eskénosen) among us' (John 1:14) — using the same vocabulary. Jesus is the true tabernacle: God dwelling with humanity, the mercy seat where wrath is propitiated, the bread of life, the light of the world." },
];

const THEMES = [
  { color: RED, title: "Redemption by Power and Blood", text: "Exodus gives us the paradigmatic OT story of redemption: God hears the groaning of his enslaved people, acts with mighty signs and wonders to free them, and brings them to himself. This pattern shapes all subsequent OT theology — God is repeatedly called 'the LORD your God who brought you out of Egypt, out of the house of slavery' (20:2). The NT reads the Exodus as a type of the greater redemption from slavery to sin accomplished by Christ: the true Passover Lamb whose blood delivers from the angel of death." },
  { color: GOLD, title: "The Name of God: YHWH", text: "At the burning bush, God reveals his personal name to Moses: YHWH (Exodus 3:14-15). The name is related to the verb 'to be' — I AM WHO I AM, or I WILL BE WHAT I WILL BE. This name signals God's absolute, unconditioned existence and his covenant faithfulness. He is not merely a local deity or a tribal god — he is the self-existent, eternal, covenant-keeping God. The revelation of the divine name is the foundation of Israel's worship and the ground of their confidence in prayer." },
  { color: BLUE, title: "The Covenant at Sinai", text: "Exodus 19-24 is the founding of Israel as a covenant nation. God has redeemed Israel from Egypt — not because of their merit but by grace. Now at Sinai, the Law is given not as the means of earning salvation but as the terms of covenant life for people already redeemed. The Ten Commandments begin with the gospel (20:2 — 'I am the LORD your God who brought you out of Egypt') before giving the law. Obedience is the response of a redeemed people, not the mechanism of redemption." },
  { color: PURPLE, title: "The Golden Calf: Sin Against Grace", text: "The golden calf episode (Exodus 32) is the most devastating moment in Exodus. Israel, just weeks after making covenant with God, creates and worships an idol — at the very moment Moses is receiving the blueprint for the tabernacle. The idolatry is not accidental: they are constructing a god in the image of Egyptian worship (Apis, the bull deity). Moses intercedes for the people (32:11-14), bargaining with God's own reputation and promises — a model of prophetic intercession. The episode shows both the depth of human sin and the depth of God's grace." },
  { color: GREEN, title: "Moses and the Prophetic Office", text: "Moses is the founding prophet of Israel — the one to whom God speaks face to face, as a man speaks to his friend (33:11). Through Moses, God gives the law, mediates the covenant, intercedes for the people, and reveals his glory. When Moses asks to see God's glory, God passes before him proclaiming his name: 'The LORD, the LORD, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness' (34:6-7). This great proclamation of the divine character becomes the most quoted passage in the OT, echoed across the Psalms and prophets." },
  { color: TEAL, title: "Creation and New Creation Parallels", text: "Exodus 39-40 is structured with deliberate parallels to Genesis 1. Just as the creation account punctuates each day with God seeing that it was good and ends with the seventh day of rest, so Moses surveys the completed tabernacle, sees that everything is done as the LORD commanded, and blesses the work. The tabernacle is a microcosm of creation — a space where heaven and earth overlap, where God and humanity dwell together. This connection links Exodus's tabernacle with the garden of Eden and points forward to the new creation of Revelation 21-22." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type ExoTab = "overview" | "plagues" | "passover" | "redsea" | "sinai" | "tabernacle" | "themes" | "journal" | "videos";

export default function ExodusGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<ExoTab>("vine_exo_tab", "overview");
  const [openTabernacle, setOpenTabernacle] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_exo_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_exo_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

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
      <main id="main-content" style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 60px", paddingTop: "calc(var(--header-height, 80px) + 40px)" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${RED}20`, border: `1px solid ${RED}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: RED, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Narrative · OT</div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>The Book of Exodus</h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>Israel&apos;s foundational story of redemption — the God who hears the cries of enslaved people, acts with unprecedented power to free them, and draws near to dwell in their midst at the tabernacle.</p>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${activeTab === t.id ? RED : BORDER}`, background: activeTab === t.id ? `${RED}20` : "transparent", color: activeTab === t.id ? RED : MUTED, fontWeight: activeTab === t.id ? 700 : 500, fontSize: 13, cursor: "pointer" }}>
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[["Author", "Moses (traditional)"], ["Period", "~1446 or ~1260 BC"], ["Genre", "Narrative + Law"], ["Hebrew Title", "Shemot (\"Names\")"], ["Key Theme", "Redemption & Covenant"], ["Key Verse", "Ex 6:7"]].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Exodus is the foundational narrative of the entire Old Testament — the story that defines Israel&apos;s identity, shapes its theology, and provides the language for understanding salvation throughout the rest of Scripture. More than any other event, the Exodus gives Israel its core confession: &ldquo;The LORD your God, who brought you out of Egypt, out of the house of slavery&rdquo; (20:2). This single act of divine rescue is cited more than any other event in the OT.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The book divides into two halves. Chapters 1-18 are the story of redemption: slavery, the call of Moses, the plagues, the Passover, the Exodus, and the journey through the wilderness. Chapters 19-40 are the covenant and its requirements: the giving of the Law at Sinai, the golden calf apostasy, and the detailed instructions for and construction of the tabernacle. The arc moves from slavery to worship, from Pharaoh&apos;s house to God&apos;s house.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <div style={{ color: RED, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>THE STRUCTURE OF EXODUS</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["1:1–2:25", "Slavery and the Birth of Moses", "Israel's multiplication, Pharaoh's genocide of Hebrew boys, Moses' birth and rescue, his flight to Midian."],
                  ["3:1–7:13", "The Call of Moses", "The burning bush, the divine name YHWH, Moses' commission, the signs given to him, and his confrontation with Pharaoh."],
                  ["7:14–12:36", "The Ten Plagues", "Nine plagues escalate, hardening Pharaoh's heart, before the final devastating plague — the death of the firstborn."],
                  ["12:1–15:21", "The Passover and Exodus", "The institution of Passover, the death of the firstborn, the Exodus itself, and the crossing of the Red Sea with Moses' victory song."],
                  ["15:22–18:27", "Journey to Sinai", "Bitter water made sweet, manna and quail in the wilderness, water from the rock, victory over Amalek, Jethro's counsel."],
                  ["19:1–24:18", "The Covenant at Sinai", "The Ten Commandments, the Book of the Covenant, the covenant ceremony where the people are sprinkled with blood."],
                  ["25:1–31:18", "Tabernacle Instructions", "Detailed blueprints for the tabernacle, its furniture, the priestly garments, the system of worship — all given by God to Moses on the mountain."],
                  ["32:1–34:35", "The Golden Calf", "Israel's apostasy, Moses' intercession, the tablets broken and renewed, the revelation of God's character (34:6-7)."],
                  ["35:1–40:38", "Tabernacle Construction", "Israel carries out the instructions exactly, completing the tabernacle; the glory of the LORD fills it."],
                ].map(([ref, title, desc]) => (
                  <div key={ref} style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                    <span style={{ background: `${RED}20`, border: `1px solid ${RED}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: RED, fontWeight: 700, whiteSpace: "nowrap", alignSelf: "flex-start" }}>{ref}</span>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{title}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "plagues" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: RED, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>The Ten Plagues (Exodus 7–12)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>The plagues are not random natural disasters — they are a sustained theological argument. Each plague attacks a specific dimension of Egyptian religion, demonstrating that the deities of Egypt are powerless before the God of Israel. Exodus 12:12 states it directly: &ldquo;I will bring judgment on all the gods of Egypt.&rdquo;</p>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>The plagues also serve a literary purpose: they escalate in intensity (1-3 affecting the environment, 4-6 affecting animals and bodies, 7-9 catastrophic, 10 ultimate) while Pharaoh&apos;s heart hardens in stages. The hardening of Pharaoh&apos;s heart (sometimes Pharaoh hardens it, sometimes God does) is one of Exodus&apos; deepest theological problems — raising questions about divine sovereignty and human responsibility that Paul meditates on in Romans 9.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {PLAGUES.map(p => (
                <div key={p.num} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                    <span style={{ background: `${p.color}20`, border: `1px solid ${p.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: p.color, fontWeight: 700 }}>{p.num}</span>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{p.name}</div>
                      <div style={{ color: MUTED, fontSize: 11 }}>{p.ref} · Attacks: {p.god}</div>
                    </div>
                  </div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "passover" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>The Passover (Exodus 12)</h2>
              <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", marginBottom: 18 }}>
                <p style={{ color: GOLD, fontSize: 16, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;The blood will be a sign for you on the houses where you are, and when I see the blood, I will pass over you. No destructive plague will touch you when I strike Egypt.&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>Exodus 12:13</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>The Passover is the hinge event of the entire OT. God instructs each Israelite household to slaughter a year-old male lamb without defect, apply the blood to the doorposts and lintel of the house, and eat the roasted lamb with unleavened bread and bitter herbs that night in haste. The angel of death passes through Egypt; when it sees the blood, it passes over. The firstborn of Egypt die; the firstborn of Israel live — protected not by their merit but by the blood of the lamb.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>God commands that the Passover be observed as a perpetual feast — one of the three great pilgrimage festivals of Israel. Every subsequent Passover recalls and re-presents the original act of redemption. When Paul writes &ldquo;Christ our Passover lamb has been sacrificed&rdquo; (1 Cor 5:7), and when John the Baptist calls Jesus &ldquo;the Lamb of God who takes away the sin of the world&rdquo; (John 1:29), they are reading Jesus as the fulfillment of the Passover.</p>
            </div>
            {[
              { ref: "The Lamb", color: GOLD, title: "Without Defect — Year-Old Male Lamb", content: "The Passover lamb must be without defect (12:5) — a flawless animal. The requirement is not arbitrary; it anticipates the one perfect, sinless sacrifice that the lamb foreshadows. The lamb is selected and examined for four days before being slaughtered (12:3,6) — a detail the NT gospels may echo in the 'triumphal entry' timeline, where Jesus arrives in Jerusalem four days before his death and is repeatedly examined by various authorities who find no fault in him." },
              { ref: "The Blood", color: RED, title: "Applied to the Doorposts", content: "The blood must be actively applied to the doorposts with a branch of hyssop (12:22). The lamb dying is not sufficient — the blood must be applied. This is the consistent pattern of OT atonement theology: the blood shed must be brought to the place of protection or forgiveness. It is not merit that protects Israel — it is the blood visibly applied. Hyssop, a small plant, is the instrument of application — the same plant used for ritual cleansing (Lev 14, Num 19) and recalled in Psalm 51:7: 'Cleanse me with hyssop.'" },
              { ref: "The Meal", color: GREEN, title: "Eating in Haste", content: "The Passover lamb is eaten with unleavened bread (matzah) and bitter herbs — and eaten in haste, with sandals on, staff in hand, ready to leave (12:11). The posture of the meal is the posture of readiness: this is not a leisurely dinner but a departure meal. The unleavened bread became a symbol of leaving sin behind — in the NT, Paul uses this imagery to call the Corinthians to moral purity: 'Cleanse out the old leaven... let us keep the feast with the unleavened bread of sincerity and truth' (1 Cor 5:7-8)." },
              { ref: "The Lord's Supper", color: BLUE, title: "Passover Fulfilled in Jesus", content: "Jesus institutes the Lord's Supper on Passover night (the Last Supper), explicitly connecting his body and blood with the Passover elements. 'This is my body given for you... this cup is the new covenant in my blood, poured out for you' (Luke 22:19-20). He is the Passover Lamb whose blood on the cross causes death to pass over all who are covered by it — not an Israelite household in Egypt but the whole people of God across history. The Lord's Supper is the Christian Passover: the re-presentation of the ultimate deliverance." },
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

        {activeTab === "redsea" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>The Red Sea Crossing (Exodus 14–15)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>The crossing of the Red Sea (or the Sea of Reeds — yam suph in Hebrew) is the final, decisive demonstration of God&apos;s power over Egypt. Israel, trapped between the sea and the Egyptian army, cries out in terror. Moses&apos; response is one of Scripture&apos;s great summaries of faith: &ldquo;The LORD will fight for you; you need only to be still&rdquo; (14:14).</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>God parts the sea, Israel walks through on dry ground, the Egyptian army follows, and the sea returns to drown them. The NT uses this event as a type of baptism: &ldquo;All were baptized into Moses in the cloud and in the sea&rdquo; (1 Cor 10:2) — passing through water as a death and new life, leaving an old existence behind and emerging into a new identity.</p>
            </div>
            {[
              { ref: "Ex 14:13-14", color: BLUE, title: "Stand Firm — The LORD Will Fight", content: "\"Moses answered the people, 'Do not be afraid. Stand firm and you will see the deliverance the LORD will bring you today. The Egyptians you see today you will never see again. The LORD will fight for you; you need only to be still.'\" Israel's only role in their deliverance is to be still — to stop striving and let God act. This is not passivity but the specific obedience of trusting God to be God when the situation is beyond human solution. The NT picks up this pattern: \"Be still and know that I am God\" (Ps 46:10)." },
              { ref: "Ex 14:21-22", color: TEAL, title: "Walls of Water on Both Sides", content: "\"Moses stretched out his hand over the sea, and all that night the LORD drove the sea back with a strong east wind and turned it into dry land. The waters were divided, and the Israelites went through the sea on dry ground, with a wall of water on their right and on their left.\" The image — water standing as walls, Israel walking through on dry ground — echoes the creation narrative where God divides the waters and dry land appears. The Exodus is a new creation: a new world being called into being through the same creative power that formed the first world." },
              { ref: "Ex 15:1-18", color: GOLD, title: "The Song of Moses", content: "After the crossing, Moses leads Israel in the oldest song in Scripture — the Song of the Sea (Ex 15). It moves from narrating the specific deliverance to making universal claims: \"The LORD is a warrior; the LORD is his name\" (15:3). The song ends with a vision of God reigning forever: \"The LORD reigns for ever and ever\" (15:18). The NT book of Revelation echoes this song at the final victory: the redeemed sing 'the song of Moses, the servant of God, and the song of the Lamb' (Rev 15:3) — the Exodus victory now encompassing the entire cosmos." },
              { ref: "1 Cor 10:1-4", color: PURPLE, title: "Baptism in the Sea", content: "Paul reads the Red Sea crossing typologically: \"They were all baptized into Moses in the cloud and in the sea, and all ate the same spiritual food and all drank the same spiritual drink.\" Israel passing through the sea is a type of Christian baptism — death to the old life (Egypt), passage through water, and emergence into new life. Paul's point is not flattering: despite this baptism, most of Israel fell in the wilderness. The type warns Christians not to presume on their sacramental identity without the obedience that flows from it." },
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

        {activeTab === "sinai" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>The Covenant at Sinai (Exodus 19–24)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Sinai is the most important mountain in the OT. Here God meets Israel in cloud, fire, and thunder; here the Law is given; here the covenant is formally enacted. The giving of the Law at Sinai is not a transaction — it is a relationship. God does not say &ldquo;obey the law and I will save you.&rdquo; He saves first (the Exodus) and then gives the law as the framework for the redeemed people&apos;s life. The Ten Commandments open with the indicative (I am the LORD your God who saved you) before the imperatives (you shall...).</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The covenant at Sinai is one of five major covenants in the OT (the others being with Noah, Abraham, David, and the New Covenant). The Mosaic Covenant is bilateral — it includes conditions. Deuteronomy will spell out its blessings for obedience and curses for disobedience. The prophets interpret Israel&apos;s exile as the covenant curses taking effect. The New Covenant (Jer 31:31-34) is the solution to the problem posed by Sinai: what if God writes the law on hearts rather than stone?</p>
            </div>
            {[
              { ref: "Ex 19:4-6", color: PURPLE, title: "On Eagles' Wings — A Kingdom of Priests", content: "\"You yourselves have seen what I did to Egypt, and how I carried you on eagles' wings and brought you to myself. Now if you obey me fully and keep my covenant, then out of all nations you will be my treasured possession. Although the whole earth is mine, you will be for me a kingdom of priests and a holy nation.\" The law is given in the context of grace: God has already carried Israel on eagles' wings. The Sinai covenant gives the redeemed people their identity and vocation — a royal priesthood mediating between God and the nations, pointing the world toward the one true God." },
              { ref: "Ex 20:1-17", color: GOLD, title: "The Ten Commandments (Decalogue)", content: "The Ten Commandments structure covenant life around two axes: love for God (commandments 1-4) and love for neighbor (commandments 5-10). This is the structure Jesus summarizes in the great commandment (Matt 22:37-40). The first commandment is the foundation: 'You shall have no other gods before me' — not because God is insecure, but because Israel's flourishing requires undivided loyalty to the God who is actually good, wise, and powerful to save. Every commandment that follows flows from this primary ordering of love." },
              { ref: "Ex 20:2", color: RED, title: "Gospel Before Law", content: "\"I am the LORD your God, who brought you out of Egypt, out of the land of slavery.\" The preamble to the Ten Commandments is not a command — it is a declaration of grace. God identifies himself as the Redeemer before issuing any requirements. The structure is identical to the NT pattern of grace preceding obedience (Romans 12:1 begins 'therefore' — because of all God has done in chapters 1-11). The law is not the means of earning God's favor; it is the description of what a life shaped by already-received favor looks like." },
              { ref: "Ex 24:7-8", color: TEAL, title: "The Covenant Ceremony", content: "\"Moses then took the blood, sprinkled it on the people and said, 'This is the blood of the covenant that the LORD has made with you in accordance with all these words.'\" The covenant ratification involves blood — animals sacrificed, blood divided between the altar (representing God) and the people. The covenant is sealed in blood: a bond of death, signaling the seriousness of the commitment. When Jesus at the Last Supper says 'This is my blood of the covenant, poured out for many' (Mark 14:24), he is deliberately invoking Exodus 24:8 — inaugurating the new covenant with his own blood." },
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

        {activeTab === "tabernacle" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>The Tabernacle (Exodus 25–40)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Almost half of the book of Exodus is devoted to the tabernacle — its detailed blueprints, the instructions for priestly garments, the system of worship, and then the meticulous account of its construction. This emphasis signals that the tabernacle is not ancillary detail but the theological climax of the Exodus narrative: the goal of redemption from Egypt is not merely freedom but the dwelling of God with his people.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The tabernacle is a portable tent-sanctuary — designed for a people on the move in the wilderness. Its structure has three zones of increasing holiness: the outer court (accessible to all Israelites), the Holy Place (accessible to priests daily), and the Holy of Holies (accessible only to the high priest on the Day of Atonement). This spatial theology of holiness teaches that approach to God requires mediation — a principle fulfilled when the temple veil is torn in two at the crucifixion (Matt 27:51).</p>
            </div>
            {TABERNACLE_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openTabernacle === String(i) ? item.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                <button type="button" onClick={() => setOpenTabernacle(openTabernacle === String(i) ? null : String(i))}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{item.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{openTabernacle === String(i) ? "−" : "+"}</span>
                </button>
                {openTabernacle === String(i) && (
                  <div style={{ padding: "0 22px 18px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "14px 0 0" }}>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "themes" && (
          <div>
            {THEMES.map(t => (
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
              <h2 style={{ color: RED, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>My Exodus Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Record your reflections on redemption, the covenant, the Passover, and what Exodus reveals about the God who saves.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Passage</label><textarea rows={2} value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. Ex 3:14, Ex 12:13, Ex 14:14, Ex 20:2, Ex 34:6-7" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Reflection</label><textarea rows={4} value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="What does this passage teach you about God's redemptive character? How does the Exodus shape your understanding of salvation?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Prayer response</label><textarea rows={3} value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="How are you praying in response to what you've read in Exodus?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <button type="button" onClick={saveEntry} style={{ alignSelf: "flex-start", background: RED, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{jSaved ? "Saved ✓" : "Save Entry"}</button>
              </div>
            </div>
            {jEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {jEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}><span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span><button type="button" onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>✕</button></div>
                    {e.verse && <div style={{ marginBottom: 8 }}><span style={{ color: GOLD, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Passage</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.verse}</p></div>}
                    {e.reflection && <div style={{ marginBottom: 8 }}><span style={{ color: RED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Reflection</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.reflection}</p></div>}
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
              <h2 style={{ color: RED, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on Exodus</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Sermons and lectures on the Exodus narrative, the Passover, Sinai, and the tabernacle — and how it all points to Jesus.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "0uf-PgW7rqE", title: "The Book of Exodus Overview", channel: "BibleProject", description: "BibleProject's animated overview of Exodus — the plagues, Passover, Red Sea crossing, Sinai covenant, and the tabernacle, showing how the whole book builds toward God dwelling with his people." },
                  { videoId: "OVMPgNFHMoA", title: "Passover and the Lord's Supper", channel: "Tim Keller", description: "Keller on the Passover as the OT's central sacrificial moment — the unblemished lamb, blood on the doorposts, and how Jesus fulfills every element as the true Passover Lamb." },
                  { videoId: "MFGHtfqdLRo", title: "The Ten Commandments", channel: "Gospel Coalition", description: "The structure and theology of the Decalogue — why the gospel comes before the law in Exodus 20:2, what each commandment reveals about covenant life, and how they are fulfilled in Christ." },
                  { videoId: "lOMNJMrFPx0", title: "The Tabernacle and its Meaning", channel: "Desiring God", description: "An exploration of the tabernacle's structure, its furniture, and its theological meaning — God drawing near to dwell with sinful people, and how Christ fulfills and surpasses it all." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: RED, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: TEAL, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
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
