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
  { id: "joshua", label: "Book of Joshua" },
  { id: "rahab", label: "Rahab & Faith" },
  { id: "covenant", label: "Covenant Renewal" },
  { id: "judges", label: "Book of Judges" },
  { id: "cycle", label: "The Judges Cycle" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const JUDGES_CYCLE = [
  { step: "1", color: RED, title: "Apostasy", ref: "Judges 2:11", quote: "\"And the people of Israel did what was evil in the sight of the LORD and served the Baals.\"", text: "The cycle always begins with Israel abandoning YHWH and turning to the gods of the nations around them — particularly Baal (the Canaanite storm-fertility god) and Asherah. This apostasy is not occasional backsliding — it is structural: the same generation that saw God's deliverance, or the generation immediately following, turns away. The book of Judges is relentlessly honest about this pattern. Israel does not spiral downward from a high point — it cycles, repeatedly, through the same failure." },
  { step: "2", color: GOLD, title: "Oppression", ref: "Judges 2:14–15", quote: "\"So the anger of the LORD was kindled against Israel, and he gave them over to plunderers who plundered them.\"", text: "The divine response to apostasy is not arbitrary punishment but a judicial 'giving over' — God removes his protective presence and allows the natural consequences of covenant unfaithfulness to materialize. Enemies that Israel failed to drive out now oppress them. Foreign nations — Mesopotamia, Moab, Philistia, Midian, Ammon — each serve as the instrument of discipline in different cycles. The oppression is severe and humiliating: Midian makes Israel hide in caves, consuming their crops (6:1–6). The punishment matches the crime: they served foreign gods; now foreign nations rule them." },
  { step: "3", color: BLUE, title: "Crying Out", ref: "Judges 3:9", quote: "\"But when the people of Israel cried out to the LORD, the LORD raised up a deliverer for the people of Israel.\"", text: "In their distress, Israel 'cries out' to YHWH. The Hebrew word (za'aq) is the same used for Israel's cries of oppression in Egypt (Ex 2:23). The cry is not always fully repentant — the people often return to the same patterns immediately after deliverance. But YHWH responds anyway, every time. This is the most remarkable theological fact in the cycle: God's rescue is not conditional on the quality of Israel's repentance. He hears the cry and raises a deliverer. His faithfulness exceeds their faithlessness." },
  { step: "4", color: GREEN, title: "Deliverance", ref: "Judges 3:10", quote: "\"The Spirit of the LORD was upon him, and he judged Israel.\"", text: "Each judge is 'raised up' — the same language used for the prophet-leader Moses. The Spirit of the LORD comes upon them (3:10; 6:34; 11:29; 13:25; 14:6) and empowers them for military victory. The judges are a remarkably diverse collection: Othniel (a model judge, 3:7–11), the left-handed Ehud with his hidden blade (3:12–30), Deborah the prophetess (chapters 4–5), Gideon the fearful farmer turned warrior (chapters 6–8), Jephthah the illegitimate son (chapters 11–12), and Samson the Nazirite undone by his own appetites (chapters 13–16). They are not heroes — they are flawed instruments of grace." },
  { step: "5", color: PURPLE, title: "Peace — Then Repetition", ref: "Judges 3:11", quote: "\"So the land had rest forty years.\"", text: "The cycle ends with 'rest' — shalom, the absence of oppression. But the rest is temporary: 'the people did not listen to their judges' (2:17), and when the judge died, they 'turned back and were more corrupt than their fathers' (2:19). The editorial pattern emphasizes worsening: each cycle is slightly worse than the previous one. Gideon's idolatrous ephod (8:27), his son Abimelech's murderous kingship attempt (chapter 9), Jephthah's vow and his daughter (11:34–40), the Levite's concubine and the civil war (chapters 19–21) — the book descends steadily toward its horrifying conclusion: 'In those days there was no king in Israel. Everyone did what was right in his own eyes' (21:25)." },
];

const JOSHUA_STORIES = [
  { ref: "Joshua 2", color: RED, title: "Rahab: The Harlot Who Had Faith", text: "Rahab the Canaanite prostitute is the most unexpected character in the conquest narrative. She is a Gentile, a woman, an outsider by every measure — and she has better theology than most of Israel. She confesses: 'I know that the LORD has given you the land, and that the fear of you has fallen upon us... for the LORD your God, he is God in the heavens above and on the earth beneath' (2:9, 11). She acts on this faith by hiding the spies and sending the pursuers astray. She is listed in Hebrews 11 as a hero of faith, in Matthew 1:5 as an ancestor of Christ, and in James 2:25 as a model of faith that acts. She is the first person in Canaan to confess Israel's God — and the first Canaanite to be saved." },
  { ref: "Joshua 3–4", color: BLUE, title: "Crossing the Jordan", text: "The Jordan crossing directly mirrors the Red Sea crossing — a second Exodus. The priests carrying the ark step into the water, the water 'rose up in a heap' (3:16), and the people crossed on dry ground. Twelve stones are taken from the riverbed and set up as a memorial at Gilgal, so that when the children ask in time to come what those stones mean (4:21), the story will be told again. The Jordan crossing answers the question the wilderness generation failed: will you trust God to take you into the land? This generation will." },
  { ref: "Joshua 6", color: GOLD, title: "Jericho: The Unwinnable Battle Won By Worship", text: "Jericho is taken not by military strategy but by an act of liturgical obedience: march around the city once a day for six days; on the seventh day, march seven times, the priests blow the ram's horns, the people shout — and the walls fall down (6:20). The battle plan is designed to remove any possibility of human boasting. The victory is entirely YHWH's. The only exception to the 'complete destruction' (herem) is Rahab's household, identified by the scarlet cord — a thread of mercy running through the judgment." },
  { ref: "Joshua 23–24", color: TEAL, title: "Joshua's Farewell and Covenant Renewal at Shechem", text: "Joshua's final chapters are his farewell address and the covenant renewal ceremony at Shechem. In his great speech (24:1–27), Joshua recites Israel's history from Abraham to the conquest — God's initiative throughout — and then presents the choice: 'Choose this day whom you will serve, whether the gods your fathers served in the region beyond the River, or the gods of the Amorites in whose land you dwell. But as for me and my house, we will serve the LORD' (24:15). The people covenant to serve YHWH. Joshua warns them: you cannot serve YHWH — 'he is a holy God, a jealous God' (24:19) — unless you are fully committed. His solemn warning to Israel prefigures the cycles of Judges that follow immediately." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type JJTab = "overview" | "joshua" | "rahab" | "covenant" | "judges" | "cycle" | "themes" | "journal" | "videos";

export default function JoshuaJudgesGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<JJTab>("vine_jj_tab", "overview");
  const [openJoshua, setOpenJoshua] = useState<string | null>(null);
  const [openCycle, setOpenCycle] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_jj_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_jj_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

  const saveJEntry = useCallback(() => {
    if (!jForm.verse.trim() && !jForm.reflection.trim()) return;
    const entry: JEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), verse: jForm.verse, reflection: jForm.reflection, prayer: jForm.prayer };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2500);
  }, [jForm]);

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12 };
  const accent = GREEN;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: `linear-gradient(135deg, rgba(58,125,86,0.15) 0%, rgba(239,68,68,0.10) 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>⚔️</div>
            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: TEXT, marginBottom: "0.75rem" }}>Joshua & Judges</h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 640, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
              Two books that tell the same story from opposite angles: Joshua, the conquest generation that trusted God and took the land. Judges, the generations that forgot and paid the price. Together they answer: what does faithfulness look like when you're standing between promise and possession?
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[{ label: "Joshua — 24 Chapters", color: GREEN }, { label: "Judges — 21 Chapters", color: RED }, { label: "OT History", color: GOLD }, { label: "Conquest & Cycles", color: BLUE }].map(b => (
                <span key={b.label} style={{ background: `${b.color}22`, color: b.color, border: `1px solid ${b.color}44`, borderRadius: 20, padding: "0.3rem 0.9rem", fontSize: "0.8rem", fontWeight: 600 }}>{b.label}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderBottom: `1px solid ${BORDER}`, background: `${CARD}CC`, position: "sticky", top: "var(--header-height, 80px)", zIndex: 20 }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", overflowX: "auto", padding: "0 1rem" }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id as JJTab)}
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
                <div style={{ ...card, padding: "2rem", borderTop: `3px solid ${GREEN}` }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>🏕️</div>
                  <h2 style={{ color: GREEN, fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Joshua: The Conquest</h2>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "0.75rem" }}>Joshua picks up immediately where Deuteronomy ends: Moses has died, the generation of the wilderness is passing away, and a new generation stands on the east bank of the Jordan, ready to enter the land promised to Abraham 400 years earlier.</p>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.9rem" }}>The book falls into two halves: the conquest (chapters 1–12) and the land distribution (chapters 13–24). Joshua is portrayed as a new Moses — like Moses he divides water (the Jordan), like Moses he receives divine revelation, like Moses he leads the people in covenant renewal. The conquest is understood theologically as YHWH fighting for Israel, not Israel fighting for themselves.</p>
                </div>
                <div style={{ ...card, padding: "2rem", borderTop: `3px solid ${RED}` }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>🔄</div>
                  <h2 style={{ color: RED, fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Judges: The Cycles</h2>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "0.75rem" }}>Judges begins where Joshua ends — with Israel in the land — but the contrast is immediate. The generation that knew Joshua dies, and 'there arose another generation after them who did not know the LORD or the work that he had done for Israel' (2:10).</p>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.9rem" }}>The book is structured around five major cycles of apostasy, oppression, crying out, and deliverance. It ends not with resolution but with civic catastrophe: a Levite's concubine gang-raped and murdered, a civil war that nearly annihilates Benjamin, and the refrain: 'In those days there was no king in Israel. Everyone did what was right in his own eyes' (21:25). Judges is Israel's darkest hour — and a cry for something new.</p>
                </div>
              </div>
              <div style={{ ...card, padding: "2rem" }}>
                <h3 style={{ color: accent, fontWeight: 700, marginBottom: "1rem" }}>Why These Two Books Together?</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "0.75rem" }}>Joshua and Judges are theological counterparts. Joshua shows what faithfulness to the covenant looks like — the land is taken, the enemies are defeated, the covenant is renewed. Judges shows what unfaithfulness produces — the land is progressively lost, the enemies return, the covenant is repeatedly broken. Together they answer: the promised land is not automatically possessed; it must be actively inhabited by a people who know and trust their God.</p>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>Both books also raise uncomfortable questions the narrative does not resolve: the violence of the conquest (herem — total destruction), the moral complexity of the judges, the silence of God in Judges' darkest moments. Reading them honestly requires holding both the theological affirmations (God is faithful, the land is gift, deliverance comes through Spirit-empowered leaders) and the uncomfortable historical and moral realities.</p>
              </div>
            </div>
          )}

          {activeTab === "joshua" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GREEN, marginBottom: "0.5rem" }}>Key Stories in Joshua</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>From the Jordan crossing to the final covenant ceremony — the key narratives that define the conquest generation.</p>
              </div>
              {JOSHUA_STORIES.map(s => (
                <div key={s.ref} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenJoshua(openJoshua === s.ref ? null : s.ref)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                      <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{s.ref}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openJoshua === s.ref ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openJoshua === s.ref && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "rahab" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: RED, marginBottom: "1rem" }}>Rahab: A Theology of Unexpected Grace</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Rahab's story is theologically explosive. She is everything the conquest is supposed to eliminate: a Canaanite, a woman, a prostitute, an inhabitant of Jericho — the first city to be placed under complete destruction (herem). And she is saved, she saves the spies, she becomes an ancestor of David and of Christ.</p>
              </div>
              {[
                { color: RED, title: "Her Confession (Joshua 2:9–11)", text: "Rahab's theological statement to the spies is remarkable for its content and its source. She is not a trained theologian — she is a woman who has heard the stories circulating in Canaan about YHWH's acts (the drying up of the Red Sea, the defeat of Sihon and Og). From these stories she draws a confession that Israel's own people often failed to hold: 'the LORD your God, he is God in the heavens above and on the earth beneath.' This is monotheistic confession of the highest order, coming from a woman outside the covenant. Her faith is based on evidence — she heard what God did — and she acted on it." },
                { color: GOLD, title: "The Scarlet Cord (Joshua 2:18–21)", text: "The condition of Rahab's safety is a scarlet cord hung in her window — so the Israelites will know which house to spare. The imagery is unmistakable: the same logic as the Passover blood on the doorposts. The outsider is saved by a visible sign of faith displayed toward the coming deliverer. The cord is scarlet — red, the color of blood. Patristic interpreters saw here a type of the blood of Christ, by which all who shelter under it are spared the judgment that falls on everything around them. Whether or not this typological reading was intended, the structural parallel is real." },
                { color: PURPLE, title: "Rahab in the NT", text: "The NT mentions Rahab three times, each with profound significance. Matthew 1:5 places her in the genealogy of Jesus — she is the mother of Boaz, great-grandmother of David, ancestor of the Messiah. Hebrews 11:31 includes her in the 'Hall of Faith' alongside Abraham, Moses, and the prophets: 'By faith Rahab the prostitute did not perish with those who were disobedient, because she had given a friendly welcome to the spies.' James 2:25 uses her as his second example (alongside Abraham) of faith made alive by works: she believed, and she acted. Her faith was real because it did something." },
                { color: TEAL, title: "The Inclusion of the Outsider", text: "Rahab's salvation establishes a pattern that runs through the entire Bible: the outsider who turns to YHWH in faith is welcomed inside the covenant. Ruth the Moabite, Naomi's foreign daughter-in-law, follows this same pattern. The Ninevites who repent at Jonah's preaching. The Gentiles included in the early church. Paul's declaration that 'there is neither Jew nor Greek' (Gal 3:28). Rahab is the proto-Gentile convert — the first of a long line of outsiders who discover that YHWH's grace extends beyond the boundaries of ethnic Israel. She is in Hebrews 11 as a permanent reminder: the family of faith has always been bigger than any particular group imagined." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.75rem" }}>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "covenant" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: BLUE, marginBottom: "1rem" }}>Joshua 1 and 24: Two Great Speeches</h2>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>Joshua bookends the conquest narrative with two great speeches — the divine commission at the beginning (chapter 1) and Joshua's farewell covenant renewal at the end (chapter 24). Together they frame the whole book: begin with the command of God and end with the choice of the people.</p>
              </div>
              {[
                { color: GREEN, title: "Joshua 1:7–9 — The Commission", text: "'Only be strong and very courageous, being careful to do according to all the law that Moses my servant commanded you. Do not turn from it to the right hand or to the left, that you may have good success wherever you go. This Book of the Law shall not depart from your mouth, but you shall meditate on it day and night, so that you may be careful to do according to all that is written in it. For then you will make your way prosperous, and then you will have good success. Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.' Three repetitions of 'strong and courageous' (1:6, 7, 9) — the courage required is not military bravado but theological fidelity: the courage to keep the covenant when everything around you is uncertain." },
                { color: GOLD, title: "Joshua 24:15 — The Great Choice", text: "'And if it is evil in your eyes to serve the LORD, choose this day whom you will serve, whether the gods your fathers served in the region beyond the River, or the gods of the Amorites in whose land you dwell. But as for me and my house, we will serve the LORD.' This is one of the most powerful statements of personal covenant commitment in all of Scripture. Joshua does not coerce — he presents the choice with full clarity. Three options: the gods of Mesopotamia (where Abraham came from), the gods of Canaan (where they now live), or YHWH. And then his own unconditional declaration before any response from the people. The response of the people follows — and Joshua immediately warns them: this covenant is more serious than they understand. YHWH is holy; he will not overlook unfaithfulness." },
                { color: TEAL, title: "The Stones of Witness (Joshua 24:26–27)", text: "At the end of the covenant ceremony, Joshua sets up a large stone under the oak at the sanctuary. 'Behold, this stone shall be a witness against us, for it has heard all the words of the LORD that he spoke to us. Therefore it shall be a witness against you, lest you deal falsely with your God' (24:27). The stone is a silent witness — it heard the covenant. In the ancient world, non-human witnesses to covenants were common: mountains, rivers, heaven and earth, stones. The implication is that the covenant is objective, public, and recorded — not merely a subjective spiritual experience. Joshua's stone watches the subsequent generations of Judges with knowing silence." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.75rem" }}>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "judges" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: RED, marginBottom: "1rem" }}>The Judges: Flawed Instruments of Grace</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Twelve judges are named in the book. They are not moral exemplars — they are imperfect, often violent, sometimes deeply compromised people through whom the Spirit of God moves anyway. This is the book's most uncomfortable theological claim: God works through deeply flawed human beings.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
                {[
                  { color: GREEN, name: "Othniel", ref: "Judges 3:7–11", text: "The model judge — the only one about whom nothing negative is said. Caleb's nephew, empowered by the Spirit, defeats Cushan-rishathaim of Mesopotamia. He provides the template against which all subsequent judges are measured — and found increasingly wanting." },
                  { color: BLUE, name: "Ehud", ref: "Judges 3:12–30", text: "The left-handed Benjaminite who assassinates the obese King Eglon of Moab with a double-edged sword hidden on his right thigh. One of the Bible's darkest comedies — and a reminder that the book of Judges does not sanitize its heroes." },
                  { color: GOLD, name: "Deborah", ref: "Judges 4–5", text: "The only female judge — a prophetess, judge, and military commander. She summons Barak to battle against Sisera and leads from the front. 'The road on which you are going will not lead to your glory, for the LORD will sell Sisera into the hand of a woman' (4:9). She is, arguably, the most admirable figure in the entire book." },
                  { color: PURPLE, name: "Gideon", ref: "Judges 6–8", text: "Called from threshing wheat in a winepress — hiding from the Midianites — and repeatedly asks for signs. God reduces his army from 32,000 to 300 to eliminate human boasting. Wins a stunning victory. Then immediately makes a golden ephod that becomes an idol, has 70+ sons, and his son Abimelech murders 70 of his brothers to set up a proto-kingship. The greatest military deliverer and a deeply compromised man." },
                  { color: TEAL, name: "Jephthah", ref: "Judges 11–12", text: "Illegitimate son, outcast, leader of 'worthless fellows,' makes a foolish vow to sacrifice whatever comes out of his house first if he returns victorious — and his daughter comes out. The text does not explain or excuse this. It is one of the most disturbing episodes in the OT. Hebrews 11:32 lists him among the heroes of faith — a reminder that faith and moral failure are not mutually exclusive." },
                  { color: RED, name: "Samson", ref: "Judges 13–16", text: "The last judge — a Nazirite from birth with superhuman strength and catastrophically poor judgment. He makes foreign marriages, breaks his vow repeatedly, is manipulated by Delilah, is blinded and imprisoned, and his final act of destroying the temple of Dagon kills more Philistines in death than in his life. He is charismatic, powerful, self-indulgent, and ultimately tragic — a portrait of gifts without character." },
                ].map(judge => (
                  <div key={judge.name} style={{ ...card, padding: "1.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <h3 style={{ color: judge.color, fontWeight: 700 }}>{judge.name}</h3>
                      <span style={{ color: MUTED, fontSize: "0.78rem" }}>{judge.ref}</span>
                    </div>
                    <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{judge.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "cycle" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: RED, marginBottom: "0.5rem" }}>The Judges Cycle: Five Movements</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>The editorial framework of Judges is built around a repeating cycle that describes every major judge narrative. Understanding the cycle is key to understanding the book's theology.</p>
              </div>
              {JUDGES_CYCLE.map(step => (
                <div key={step.step} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenCycle(openCycle === step.step ? null : step.step)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span style={{ background: `${step.color}22`, color: step.color, border: `1px solid ${step.color}44`, borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>{step.step}</span>
                      <span style={{ color: step.color, fontWeight: 700 }}>{step.title}</span>
                      <span style={{ color: MUTED, fontSize: "0.78rem" }}>{step.ref}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openCycle === step.step ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openCycle === step.step && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <blockquote style={{ borderLeft: `3px solid ${step.color}`, paddingLeft: "1rem", margin: "0 0 1rem", color: TEXT, fontStyle: "italic", lineHeight: 1.7, fontSize: "0.9rem" }}>{step.quote}</blockquote>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{step.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "themes" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {[
                { color: GREEN, icon: "🏔️", title: "The Land as Gift and Task", text: "The land of Canaan is consistently described as God's gift to Israel — 'the land I am giving to you' (Josh 1:2). But it is also a task: 'every place that the sole of your foot will tread upon I have given to you' (1:3). The gift must be appropriated through active trust and obedience. Judges shows what happens when a generation stops trusting — the gift becomes a burden. The theological pattern: the land is never simply possessed; it is always inhabited by a people in relationship with their God." },
                { color: RED, icon: "🔄", title: "The Downward Spiral", text: "Judges is carefully structured to show moral and spiritual deterioration. The judges become progressively more compromised: Othniel (perfect model) → Ehud (clever but violent) → Deborah/Barak (courageous but Barak hesitant) → Gideon (great victory, terrible aftermath) → Jephthah (tragic vow) → Samson (gifted, self-destructive). The final chapters (17–21) contain no judge at all — just the horrible consequences of a society without covenant structure. The descent is the argument: without ongoing covenant faithfulness, things always get worse." },
                { color: GOLD, icon: "👑", title: "The Problem of Leadership", text: "Both books raise the question of leadership. Joshua provides inspired, Spirit-led leadership that enables faithfulness. After Joshua, the lack of sustained leadership is catastrophic. The repeated refrain 'everyone did what was right in his own eyes' (17:6; 21:25) indicts moral relativism rooted in structural vacuum. Judges ends not with a solution but with a cry for something new — setting up the demand for a king in 1 Samuel. The king who comes must be YHWH's king, not Israel's idea of a king." },
                { color: PURPLE, icon: "🕊️", title: "The Spirit Empowers the Unexpected", text: "The Spirit of the LORD empowers each judge for their specific task: 'The Spirit of the LORD came upon him' is the theological engine of each deliverance. The Spirit falls on Othniel, Gideon, Jephthah, and Samson — people who are, by any external measure, inadequate. The left-handed, the frightened, the illegitimate, the impulsive. The Spirit does not require qualification; he requires availability. This continues directly into the NT: God 'chose what is foolish in the world to shame the wise' (1 Cor 1:27)." },
                { color: BLUE, icon: "🌏", title: "The Incomplete Conquest and the 'Nations Left'", text: "Judges 1 contains a careful accounting of all the tribes that failed to fully drive out the Canaanite inhabitants. Judah did not drive out the valley inhabitants (1:19). Manasseh, Ephraim, Zebulun, Asher, Naphtali, Dan — each failed to complete the task (1:27–36). The narrator then explains: 'the angel of the LORD went up from Gilgal... I said, 'I will never break my covenant with you, and you shall make no covenant with the inhabitants of this land... But you have not obeyed my voice. What is this you have done? So now I say, I will not drive them out before you, but they shall become thorns in your sides, and their gods shall be a snare to you' (2:1–3). The incomplete obedience creates the conditions for all the subsequent apostasy." },
                { color: TEAL, icon: "❤️", title: "Grace in the Cycle", text: "The most striking theological fact in Judges is that God keeps delivering his people despite their repeated unfaithfulness. He is not bound by their performance — he hears the cry and sends a deliverer, every time. This is not endorsement of the pattern but revelation of divine character: YHWH's commitment to Israel is not conditional on their faithfulness. He is not a God who abandons when disappointed. He disciplines (the oppression) but he never finally rejects. This grace in the cycle is the OT's most sustained portrait of what it means that YHWH is 'a God merciful and gracious, slow to anger, and abounding in steadfast love' (Ex 34:6)." },
              ].map(item => (
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
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", color: accent, marginBottom: "1.5rem" }}>Joshua & Judges Journal</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>VERSE OR PASSAGE</label>
                    <input value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. Joshua 1:9, Joshua 24:15" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>REFLECTION</label>
                    <textarea value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="Where are you in the Judges cycle? What promised land are you trusting God to help you possess? What 'Canaanites' have you left that become thorns?" rows={4} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>PRAYER RESPONSE</label>
                    <textarea value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="'Be strong and courageous. Do not be frightened, for the LORD your God is with you wherever you go.'" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
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
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>Joshua & Judges — Video Library</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Overviews and deep dives into the conquest narratives and the cycles of Judges.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {[
                  { id: "JqONO9UJKC4", title: "Joshua Overview", channel: "BibleProject" },
                  { id: "kOYy8iZAQoI", title: "Judges Overview", channel: "BibleProject" },
                  { id: "pNHNhJXRSZg", title: "The Book of Judges: A Complete Study", channel: "The Bible Explained" },
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
