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
  { id: "ruth", label: "Ruth" },
  { id: "naomi", label: "Naomi" },
  { id: "boaz", label: "Boaz" },
  { id: "esther", label: "Esther" },
  { id: "mordecai", label: "Mordecai" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const RUTH_SCENES = [
  { ref: "Ruth 1:1–18", color: RED, title: "The Declaration of Loyalty", text: "After Naomi's husband and sons die in Moab, she tells her Moabite daughters-in-law to return to their families. Orpah reluctantly departs, but Ruth refuses with one of the most famous speeches in all literature: 'Do not urge me to leave you or to return from following you. For where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God.' (1:16). This is covenant language — the vocabulary of marriage vows and treaty commitments applied to a friendship between women. Ruth is binding herself irrevocably to Naomi. The Moabite outsider chooses Israel's God before she has any reason to expect blessing." },
  { ref: "Ruth 2", color: GREEN, title: "Gleaning in the Fields of Boaz", text: "Ruth enters Boaz's fields to glean — the Israelite provision for the poor and the stranger (Lev 19:9–10). She 'happens' to land in Boaz's field. In Hebrew narrative, this kind of coincidence is never accidental — it is the hidden hand of providence. Boaz notices her immediately, asks about her identity, and shows her extraordinary favor: extra grain, water, protection, and a seat at his table. His first question to his workers (2:5) signals his notice; his first words to Ruth (2:8) signal his kindness. He has already heard about her covenant loyalty to Naomi (2:11)." },
  { ref: "Ruth 3", color: GOLD, title: "The Threshing Floor Scene", text: "Naomi sends Ruth to the threshing floor at night to approach Boaz. Ruth uncovers his feet and lies down — a proposal of marriage, using covenant and redemption language. She asks him to spread his 'wings' (literally 'corner of garment') over her — the same word used in 2:12 when Boaz prays that God would cover her under his wings. Ruth's request activates the kinsman-redeemer institution (goel) and turns Boaz's prayer back into a call to action. He is deeply moved, calls her 'worthy' (hayil — the same word used of the Proverbs 31 woman), and promises to act." },
  { ref: "Ruth 4", color: BLUE, title: "The Redemption at the Gate", text: "Boaz goes to the city gate — the public legal space in ancient Israel — and publicly arranges to redeem Naomi's land and take Ruth as his wife. A nearer relative who had first right of redemption declines when he learns Ruth is part of the package. Boaz redeems, and Ruth becomes his wife. Their son Obed is born — and the final verses reveal the staggering significance: Obed is the grandfather of David. The Moabite outsider whose loyalty brought her to Israel now stands in the direct lineage of Israel's greatest king — and, by extension, of the Messiah." },
];

const ESTHER_SCENES = [
  { ref: "Esther 1–2", color: PURPLE, title: "The Orphan Becomes Queen", text: "Esther (Hebrew name: Hadassah) is a young Jewish woman living in Persia, orphaned and raised by her older cousin Mordecai. When King Ahasuerus (Xerxes) deposes Queen Vashti and holds a kingdom-wide search for a new queen, Esther is brought to the palace. She finds favor with everyone she meets (the word 'favor' appears repeatedly — echoing Joseph's story). She conceals her Jewish identity on Mordecai's instruction. In a deeply ironic reversal, the marginalized Jewish exile is elevated to the most powerful position available to a woman in the Persian Empire." },
  { ref: "Esther 3–4", color: RED, title: "The Edict of Annihilation and the Call", text: "Haman the Agagite — an enemy of the Jews with deep roots in Israel's ancient conflict with Amalek — rises to power and engineers a royal decree to annihilate every Jew in the empire on a specific date. Mordecai mourns publicly and refuses to conceal the crisis from Esther. She hesitates — to approach the king uninvited is punishable by death. Mordecai's response is the pivotal speech of the book: 'Do not think that because you are in the king's house you alone of all the Jews will escape... And who knows whether you have not come to the kingdom for such a time as this?' (4:13–14). The phrase 'such a time as this' has defined providential courage ever since." },
  { ref: "Esther 5–7", color: GOLD, title: "The Reversal and the Rescue", text: "Esther approaches the king without invitation — risking death — and is received. Rather than asking immediately, she invites the king and Haman to a banquet. At the banquet she invites them to another. The delay builds tension and creates the space for the reversals to begin: on the night between the two banquets, the king cannot sleep and has the royal chronicles read to him. He discovers that Mordecai once saved his life and was never rewarded. Haman arrives to request Mordecai's death and instead is humiliated by being forced to honor him. At the second banquet Esther reveals the plot and names Haman. He is executed on the very gallows he built for Mordecai — a perfect reversal." },
  { ref: "Esther 8–10", color: TEAL, title: "Purim and the Jewish Victory", text: "Because Persian law cannot be revoked, the king allows Mordecai and Esther to issue a second decree: the Jews may arm themselves and defend their lives. They do so, and on the day appointed for their destruction they defeat their enemies. The feast of Purim (named after 'pur' — the lot Haman cast to choose the date) is established to celebrate this rescue. The book ends with Mordecai's elevation to second in the kingdom — echoing Joseph's rise — and the Jewish people 'in every province and in every city, gladness and joy, feast and holiday' (8:17). The outsiders are vindicated; the powerful are overthrown." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type RuthEstherTab = "overview" | "ruth" | "naomi" | "boaz" | "esther" | "mordecai" | "themes" | "journal" | "videos";

export default function RuthEstherGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<RuthEstherTab>("vine_ruthesther_tab", "overview");
  const [openRuth, setOpenRuth] = useState<string | null>(null);
  const [openEsther, setOpenEsther] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_ruthesther_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_ruthesther_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

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

        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, rgba(217,119,6,0.15) 0%, rgba(239,68,68,0.10) 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>👑</div>
            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: TEXT, marginBottom: "0.75rem" }}>
              Ruth & Esther
            </h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 640, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
              Two women. Two impossible situations. Two acts of extraordinary courage that changed the course of history — and reveal a God who works invisibly in the ordinary to accomplish the extraordinary.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[{ label: "Ruth — 4 Chapters", color: GOLD }, { label: "Esther — 10 Chapters", color: RED }, { label: "OT Narrative", color: GREEN }, { label: "Hidden Providence", color: PURPLE }].map(b => (
                <span key={b.label} style={{ background: `${b.color}22`, color: b.color, border: `1px solid ${b.color}44`, borderRadius: 20, padding: "0.3rem 0.9rem", fontSize: "0.8rem", fontWeight: 600 }}>{b.label}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: `${CARD}CC`, position: "sticky", top: "var(--header-height, 80px)", zIndex: 20 }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", overflowX: "auto", padding: "0 1rem" }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id as RuthEstherTab)}
                style={{ padding: "0.9rem 1.1rem", fontSize: "0.82rem", fontWeight: activeTab === t.id ? 700 : 500, color: activeTab === t.id ? accent : MUTED, borderBottom: `2px solid ${activeTab === t.id ? accent : "transparent"}`, background: "none", border: "none", borderBottomWidth: 2, borderBottomStyle: "solid", cursor: "pointer", whiteSpace: "nowrap", transition: "color 150ms" }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
                <div style={{ ...card, padding: "2rem", borderTop: `3px solid ${GOLD}` }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>🌾</div>
                  <h2 style={{ color: GOLD, fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>The Book of Ruth</h2>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "0.75rem" }}>Set "in the days when the judges ruled" (1:1) — a period of Israel's moral chaos — Ruth is a story of extraordinary loyalty and hidden providence. A Moabite widow follows her mother-in-law to a foreign land and, through covenant faithfulness, becomes the great-grandmother of King David.</p>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.9rem" }}>The book contains one of the most theologically rich institutions in the OT: the kinsman-redeemer (goel) — the near relative who has both the right and the responsibility to restore what is lost to a vulnerable family member. Boaz's willing act of redemption becomes a central type of Christ's redemptive work.</p>
                </div>
                <div style={{ ...card, padding: "2rem", borderTop: `3px solid ${RED}` }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>🎭</div>
                  <h2 style={{ color: RED, fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>The Book of Esther</h2>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "0.75rem" }}>Set in the Persian court of Ahasuerus (Xerxes I, 486–465 BC), Esther is one of only two books in the Bible that never explicitly mention God. Yet the book is saturated with divine providence — coincidences that are not coincidences, timing that is too perfect, reversals that are too complete to be accidental.</p>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.9rem" }}>Esther and Mordecai navigate palace intrigue, ethnic genocide, and political risk to rescue their people. The feast of Purim, still celebrated annually by Jewish communities worldwide, commemorates this rescue. The phrase 'for such a time as this' (4:14) has defined providential courage in every generation since.</p>
                </div>
              </div>
              <div style={{ ...card, padding: "2rem" }}>
                <h3 style={{ color: accent, fontWeight: 700, marginBottom: "1rem" }}>What Links These Two Books?</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                  {[
                    { icon: "👩", text: "Both center on women as the primary agents of divine rescue — rare in the ancient world" },
                    { icon: "🎭", text: "Both feature dramatic reversals: the powerless become powerful, the powerful are overthrown" },
                    { icon: "🌍", text: "Both involve outsiders or exiles — Moabite Ruth, diaspora Esther — being used by God" },
                    { icon: "🙈", text: "Both depict God working invisibly — no miracles, no theophanies, only providence through human choices" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                      <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* RUTH */}
          {activeTab === "ruth" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GOLD, marginBottom: "0.5rem" }}>Ruth: The Moabite Who Chose Israel's God</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Ruth's story moves from famine, death, and desolation in Moab to harvest, redemption, and life in Bethlehem — mirroring the larger biblical arc from exile to restoration.</p>
              </div>
              <div style={{ ...card, padding: "1.5rem" }}>
                <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: "0.75rem" }}>Ruth's Declaration (1:16–17)</h3>
                <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1rem", margin: "0 0 1rem", color: TEXT, fontStyle: "italic", lineHeight: 1.8 }}>
                  "Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God. Where you die I will die, and there will I be buried. May the LORD do so to me and more also if anything but death parts me from you."
                </blockquote>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>This speech is not romantic poetry — it is a covenant declaration. Ruth uses the language of YHWH (LORD — the covenant name of Israel's God), the language of communal belonging ("your people shall be my people"), and the language of absolute commitment ("only death will part us"). She is not just staying with Naomi — she is converting to Israel's covenant community.</p>
              </div>
              {RUTH_SCENES.map(s => (
                <div key={s.ref} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenRuth(openRuth === s.ref ? null : s.ref)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                      <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{s.ref}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openRuth === s.ref ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openRuth === s.ref && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* NAOMI */}
          {activeTab === "naomi" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: TEAL, marginBottom: "1rem" }}>Naomi: From Bitter to Blessed</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Naomi is one of the most honestly drawn characters in Scripture. She enters the story with a husband and two sons; she leaves Moab a childless widow. Her name means "pleasant," but she renames herself "Mara" — bitter. "I went away full, and the LORD has brought me back empty" (1:21).</p>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>What is remarkable is that the narrator does not rebuke Naomi for her complaint. The book of Ruth does not flinch from the reality of her loss. Her bitterness is not a sign of weak faith — it is the honest cry of a woman who has suffered enormously and knows where to direct that cry (toward the LORD). By the end of the story, the women of Bethlehem say to Naomi: "Blessed be the LORD, who has not left you this day without a redeemer... He shall be to you a restorer of life and a nourisher of your old age" (4:14–15).</p>
              </div>
              {[
                { color: TEAL, title: "The Theology of Naomi's Complaint", text: "Naomi's direct accusation — 'the hand of the LORD has gone out against me' (1:13) — is not a crisis of faith but an expression of it. She knows that YHWH is the sovereign Lord of her circumstances. Her complaint assumes the covenant relationship rather than denying it. This is the logic of biblical lament: you cry out to God precisely because you believe he is there and that he cares. Naomi's bitterness is a form of prayer." },
                { color: GREEN, title: "Naomi as Strategist", text: "Despite her grief, Naomi is far from passive. She makes strategic calculations throughout the narrative. She releases her daughters-in-law for their own welfare (1:8–13). She notices that Ruth has been in Boaz's field specifically (2:20 — 'the man is a close relative of ours, one of our redeemers'). She engineers the threshing floor encounter (3:1–4) and coaches Ruth in what to say and do. She is not rescued passively — she actively works within the constraints of her cultural world to secure redemption for herself and Ruth." },
                { color: GOLD, title: "Naomi as Type of Israel in Exile", text: "Some scholars read Naomi's journey as a typological portrait of Israel: leaving the Promised Land for a foreign country under the pressure of famine, suffering loss, emptied and bitter, returning home in hope. Her restoration through a redeemer who acts from love and covenant obligation mirrors Israel's hoped-for restoration through YHWH's redemptive action. The child born to Ruth and Boaz — who is placed 'in Naomi's lap' and called 'a son born to Naomi' (4:16–17) — suggests a complete restoration of what was lost." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.75rem" }}>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* BOAZ */}
          {activeTab === "boaz" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GREEN, marginBottom: "1rem" }}>Boaz: The Kinsman-Redeemer</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Boaz is introduced as "a worthy man" (2:1) — using the Hebrew word "hayil," which elsewhere means mighty, capable, excellent, and virtuous. He is a man of substance, character, and covenantal awareness. He is also, the narrator quietly notes, a relative of Naomi's husband Elimelech — setting up the redemption drama before it begins.</p>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>Boaz's greatness is not dramatic — it is quiet, consistent, and costly. He goes beyond legal requirement at every point. The law required that he allow gleaning; he instructs his workers to deliberately leave grain for Ruth. The law provided for redemption; he pursued it willingly even at personal cost (acquiring Ruth along with the land meant his inheritance would pass to her child, not to a future wife of his own). His kindness is not sentiment — it is covenant love acted out in practical generosity.</p>
              </div>
              {[
                { color: GREEN, title: "The Goel Institution", text: "The 'goel' (kinsman-redeemer) is one of the most significant institutions in the Old Testament for understanding Christ. A goel was the nearest male relative with both the right and the responsibility to: (1) redeem property sold under financial pressure, (2) marry a childless widow to preserve her husband's name and estate (levirate marriage, Deut 25), and (3) avenge the blood of a murdered relative. The goel acted from the position of a near relative — insider status — and from motivation of loyal love (hesed). Boaz fulfills all three dimensions. Jesus, as the Son of Man who takes on human flesh to be our 'near relative,' is the ultimate fulfillment of the goel pattern." },
                { color: BLUE, title: "Boaz's Character Revealed", text: "Notice how Boaz is introduced and developed: his first words are a blessing ('The LORD be with you' — 2:4), and his workers' first words back are a blessing (a hint that this is a household formed by faith). He asks about Ruth before doing anything (2:5 — curiosity and care). He speaks directly to Ruth with honor (2:8), provides for her immediate needs (water, table), and protects her dignity (instructing workers not to shame her). He praises her publicly before his household (2:11–12). He is a man of social position who uses that position for others." },
                { color: GOLD, title: "Boaz as a Type of Christ", text: "The typological connection between Boaz and Christ is one of the richest in all of Scripture. Christ is our near kinsman — he took on flesh to be truly human, truly 'one of us,' so that he could act as our goel. He redeemed what was lost (our inheritance forfeited by sin). He did so at personal cost — not just of inheritance, but of life. He acted not from legal obligation but from love. And he, like Boaz, initiated — he came to us in our poverty and our foreignness (we who were 'strangers to the covenants of promise' — Eph 2:12) and brought us in." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.75rem" }}>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* ESTHER */}
          {activeTab === "esther" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: RED, marginBottom: "0.5rem" }}>Esther: For Such a Time as This</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Esther is one of the most carefully crafted narratives in Scripture — a sophisticated political thriller about power, identity, courage, and the invisible hand of God. Though God is never named, the book is saturated with divine presence.</p>
              </div>
              {ESTHER_SCENES.map(s => (
                <div key={s.ref} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenEsther(openEsther === s.ref ? null : s.ref)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                      <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{s.ref}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openEsther === s.ref ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openEsther === s.ref && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.text}</p>
                    </div>
                  )}
                </div>
              ))}
              <div style={{ ...card, padding: "1.5rem" }}>
                <h3 style={{ color: RED, fontWeight: 700, marginBottom: "0.75rem" }}>The Pivotal Verse: Esther 4:14</h3>
                <blockquote style={{ borderLeft: `3px solid ${RED}`, paddingLeft: "1rem", margin: "0 0 1rem", color: TEXT, fontStyle: "italic", lineHeight: 1.8 }}>
                  "For if you keep silent at this time, relief and deliverance will rise for the Jews from another place, but you and your father's house will perish. And who knows whether you have not come to the kingdom for such a time as this?"
                </blockquote>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>Two remarkable things about Mordecai's speech: first, his confidence that God will deliver his people one way or another — Esther's participation is not a condition of rescue but an invitation into the story. Second, the phrase "who knows" — the book's theology of providence is humble, not triumphalist. Mordecai does not say "God has put you here for this." He says "perhaps." Providence is recognized in hindsight, not decreed in advance. This is the honest posture of faith in a world where God works through ordinary means.</p>
              </div>
            </div>
          )}

          {/* MORDECAI */}
          {activeTab === "mordecai" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: PURPLE, marginBottom: "1rem" }}>Mordecai: The Faithful Exile</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Mordecai is introduced with a genealogy that places him in the tribe of Benjamin — the same tribe as King Saul — and identifies him as a descendant of those carried into Babylonian exile (2:5–6). His ancient lineage, his exile status, and his unswerving faith form the backdrop for everything he does.</p>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>He is a guardian (raising his orphaned cousin Esther), a watchman (sitting daily at the king's gate, alert to threats), a patriot (reporting an assassination plot at personal risk), and ultimately a statesman (elevated to second in the kingdom). He embodies the faithful exile who neither assimilates nor withdraws — who maintains identity while engaging the culture, and who ultimately sees his faithfulness vindicated.</p>
              </div>
              {[
                { color: PURPLE, title: "Why Mordecai Refused to Bow", text: "Mordecai's refusal to bow to Haman (3:2) is the hinge of the entire story. The text does not explain exactly why — commentators have suggested it was because Haman was an Amalekite (a hereditary enemy of Israel), or because bowing to Haman would have implied religious submission inappropriate for a Jew, or simply because Mordecai recognized Haman as a dangerous man not worthy of honor. Whatever the specific reason, the narrative presents his refusal as principled, not petulant. His 'no' precipitates the crisis — but also creates the occasion for the rescue." },
                { color: BLUE, title: "Mordecai's Hidden Loyalty", text: "Before the crisis of Haman's plot, Mordecai does something that goes unnoticed at the time: he reports an assassination plot against the king, which is recorded in the royal chronicles (2:21–23). His reward is delayed for years until the pivotal night when the king cannot sleep and the chronicles are read aloud. This is the book's most explicit signal of hidden providence: a good deed unrewarded, buried in the archives, retrieved at exactly the right moment to change the course of history. No coincidence is too small for the God who works in hiddenness." },
                { color: TEAL, title: "Mordecai and the Joseph Pattern", text: "Mordecai's arc follows the Joseph pattern closely: faithful Israelite in a foreign court, refused to compromise integrity, falls into danger precisely because of that faithfulness, and is ultimately vindicated and elevated to the highest position below the king. Both narratives resist the 'prosperity gospel' reading: faithfulness leads through suffering, not around it. And both end with the community rescued because a faithful individual occupied the right position at the right time — placed there, the narratives imply, by a providence that works long before the crisis becomes visible." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.75rem" }}>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* THEMES */}
          {activeTab === "themes" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {[
                { color: GOLD, icon: "🌾", title: "Hesed — Covenant Loyalty", text: "The Hebrew word 'hesed' (steadfast love, covenant loyalty, lovingkindness) is the theological backbone of Ruth. It is used three times: Naomi prays it over her daughters-in-law (1:8), Boaz says Ruth has 'shown more hesed' in her choice to stay (3:10), and the townspeople celebrate Boaz's hesed in redemption (4:15). Hesed is not mere sentiment — it is loyal action toward those in covenant relationship, even when (especially when) it is costly." },
                { color: RED, icon: "🙈", title: "Hidden Providence", text: "Neither Ruth nor Esther mentions God directly performing miracles. Yet both books are saturated with divine action — through 'coincidences' that are too perfectly timed, through human choices that align at just the right moment, through the long arc of history bending toward redemption. Both books teach that God's hiddenness is not his absence. Providence works most powerfully when least visible." },
                { color: PURPLE, icon: "🚪", title: "The Outsider Included", text: "Ruth the Moabite was not supposed to be in the story. Moabites were explicitly excluded from the assembly of Israel (Deut 23:3). Yet she is the protagonist of her book, the great-grandmother of David, and an ancestor of Christ. Esther is an exile in a foreign empire who conceals her identity for survival. Both women are 'outsiders' whom God places at the center of his redemptive work — a preview of the gospel's demolition of every wall of partition (Eph 2:14)." },
                { color: GREEN, icon: "🔄", title: "The Great Reversal", text: "Both stories move through the same arc: vulnerability → threat → risk → reversal → vindication. The powerless become powerful; the powerful who oppose God's people are overthrown. Ruth goes from foreign widow to ancestress of kings. Esther goes from orphaned exile to queen who saves her people. Haman is executed on his own gallows. This pattern of reversal is the grammar of the gospel: the crucified one becomes the risen Lord; the last become first; the humble are exalted." },
                { color: TEAL, icon: "👩", title: "Women as Agents of Salvation", text: "Both books center on women — their initiative, their courage, their wisdom — as the primary instruments of God's rescue. This is theologically deliberate. In a patriarchal world, God consistently uses the unexpected: the younger son, the foreigner, the woman, the exile. Ruth does not wait to be chosen — she chooses. Esther does not wait for permission — she acts, even at the risk of death. The God of Scripture delights in working through the unlikely." },
                { color: BLUE, icon: "🏡", title: "The Restoration of the Family", text: "Both books end with family restored: Naomi, who entered the story having lost husband and sons, gains a grandson who is called 'a son born to Naomi' (Ruth 4:17). Esther and Mordecai establish a new festival observed by Jewish families forever. The family, fractured by death and exile and genocide, is rebuilt. This pattern anticipates the ultimate family restoration — the eschatological gathering of God's household from every nation, tribe, and tongue under one Father." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.5rem" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* JOURNAL */}
          {activeTab === "journal" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", color: accent, marginBottom: "1.5rem" }}>Ruth & Esther Journal</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>VERSE OR PASSAGE</label>
                    <input value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. Ruth 1:16, Esther 4:14" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>REFLECTION</label>
                    <textarea value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="Where do you see God's hidden providence in your own story? What act of loyalty or courage is this passage calling you to?" rows={4} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>PRAYER RESPONSE</label>
                    <textarea value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="A prayer of trust in God's hidden work in your circumstances..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <button onClick={saveJEntry} style={{ background: accent, color: "#fff", border: "none", borderRadius: 8, padding: "0.85rem 2rem", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem", alignSelf: "flex-start" }}>
                    {jSaved ? "✓ Saved" : "Save Entry"}
                  </button>
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

          {/* VIDEOS */}
          {activeTab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>Ruth & Esther — Video Library</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Insightful overviews and deep dives into these two remarkable books and the women at their center.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {[
                  { id: "0h1eoBeR0Rk", title: "Ruth Overview", channel: "BibleProject" },
                  { id: "JydNSlufRpg", title: "Esther Overview", channel: "BibleProject" },
                  { id: "2Eiq7PxTTdc", title: "The Book of Ruth — Full Study", channel: "Spoken Gospel" },
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
