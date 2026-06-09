"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const ACCENT = "#EF4444";

type ObaTab = "overview" | "edom" | "pride" | "betrayal" | "dayofthelord" | "kingdom" | "themes" | "journal" | "videos";
type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const TABS: { id: ObaTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "edom", label: "Edom & Esau" },
  { id: "pride", label: "The Pride of the Heart" },
  { id: "betrayal", label: "Standing Aside" },
  { id: "dayofthelord", label: "Day of the LORD" },
  { id: "kingdom", label: "The Kingdom Shall Be the LORD's" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const JOURNAL_KEY = "vine_obadiah_journal";

export default function ObadiahGuide() {
  const [activeTab, setActiveTab] = usePersistedState<ObaTab>("vine_obadiah_tab", "overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(JOURNAL_KEY);
      if (saved) setEntries(JSON.parse(saved));
    } catch { /* noop */ }
  }, []);

  const saveEntry = useCallback(() => {
    if (!verse.trim() && !reflection.trim()) return;
    const entry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      verse: verse.trim(),
      reflection: reflection.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setVerse(""); setReflection(""); setPrayer("");
  }, [verse, reflection, prayer, entries]);

  const deleteEntry = useCallback((id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }, [entries]);

  const toggle = (key: string) => setOpenAccordion(prev => prev === key ? null : key);

  const AccordionItem = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
    <div style={{ borderBottom: `1px solid ${BORDER}`, marginBottom: 4 }}>
      <button
        onClick={() => toggle(id)}
        style={{ width: "100%", textAlign: "left", background: "none", border: "none", color: TEXT, padding: "14px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 15, fontWeight: 600 }}
      >
        {title}
        <span style={{ color: MUTED, fontSize: 13 }}>{openAccordion === id ? "▲" : "▼"}</span>
      </button>
      {openAccordion === id && (
        <div style={{ paddingBottom: 16, color: MUTED, fontSize: 14, lineHeight: 1.8 }}>{children}</div>
      )}
    </div>
  );

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px" }}>

          {/* Header */}
          <div style={{ marginBottom: 8 }}>
            <span style={{ background: ACCENT + "22", color: ACCENT, padding: "3px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase" }}>Minor Prophet · Old Testament</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 12 }}>The Book of Obadiah</h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 32, maxWidth: 680 }}>
            The shortest book in the Old Testament — 21 verses — contains one of its sharpest theological messages. Edom's ancient pride and its gloating over Jerusalem's fall bring a reckoning. But the book ends with an unshakeable promise: "The kingdom shall be the LORD's."
          </p>

          {/* Tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36, borderBottom: `1px solid ${BORDER}`, paddingBottom: 16 }}>
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                style={{
                  padding: "8px 18px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                  background: activeTab === t.id ? ACCENT : CARD,
                  color: activeTab === t.id ? "#fff" : MUTED,
                  transition: "all 0.15s",
                }}
              >{t.label}</button>
            ))}
          </div>

          {/* TAB: Overview */}
          {activeTab === "overview" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>The Shortest Book, the Longest Memory</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}>
                Obadiah is just 21 verses — the shortest book in the entire Old Testament. You can read it in three minutes. But its message reverberates across centuries: national pride, ancient sibling rivalry, the question of whether God sees and acts, and the ultimate certainty of his kingdom.
              </p>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>KEY VERSE</div>
                <div style={{ color: TEXT, fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.7 }}>
                  "The pride of your heart has deceived you, you who live in the clefts of the rock, in your lofty dwelling, who say in your heart, 'Who will bring me down to the ground?'"
                </div>
                <div style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>— Obadiah 3</div>
              </div>

              <AccordionItem id="author" title="Author and Date">
                <p>Obadiah — "Servant of Yahweh" — is one of the most common names in the OT (twelve different Obadiahs appear). We know almost nothing about this one beyond his name and message. His precise dating is debated: some place him among the earliest writing prophets (9th century BC, after Edom's assault during Jehoram's reign, 2 Kings 8:20-22), while others place him after the Babylonian destruction of Jerusalem in 586 BC, when Edom notoriously assisted the enemy. The language of verses 11-14 fits 586 perfectly. Most scholars favor a 6th-century date, making Obadiah a contemporary of Jeremiah and Ezekiel.</p>
              </AccordionItem>

              <AccordionItem id="structure" title="Structure and Context">
                <p>The book divides into two main movements:</p>
                <p style={{ marginTop: 8 }}><strong style={{ color: TEXT }}>Verses 1-14:</strong> Judgment oracle against Edom. God announces that Edom, despite its mountain fortress security, will be brought down. The specific charge: Edom stood aloof while Jerusalem was sacked, gloated, even participated in looting and delivering fugitives to the enemy. This is a betrayal of brotherhood — Edom descends from Esau, Israel from Jacob. These are cousins. Their kinship made the betrayal worse.</p>
                <p style={{ marginTop: 8 }}><strong style={{ color: TEXT }}>Verses 15-21:</strong> The Day of the LORD against all nations, and the restoration of Israel. The principle inverted: "As you have done, it shall be done to you; your deeds shall return on your own head" (v.15). The book ends with eschatological vision — a restored Israel, possessing its inheritance, and the declaration: "The kingdom shall be the LORD's" (v.21).</p>
              </AccordionItem>

              <AccordionItem id="edomhistory" title="Edom in Biblical History">
                <p>The Edom-Israel conflict begins in Genesis with the twins Esau and Jacob in Rebekah's womb: "Two nations are in your womb... the one shall be stronger than the other, the older shall serve the younger" (Gen 25:23). Esau sells his birthright for stew (Gen 25) and loses the blessing to Jacob's deception (Gen 27). The rivalry never healed.</p>
                <p style={{ marginTop: 8 }}>Edom (the nation of Esau's descendants) refused Israel passage during the Exodus (Num 20:14-21). David conquered Edom (2 Sam 8:13-14). Edom rebelled (2 Kings 8:20-22). And at Jerusalem's final fall to Babylon, Edom not only stood aside but apparently cheered, looted, and helped capture Jewish refugees trying to escape — an act that burned into Israel's collective memory (Psalm 137:7; Lamentations 4:21-22; Ezekiel 25:12-14).</p>
              </AccordionItem>
            </div>
          )}

          {/* TAB: Edom & Esau */}
          {activeTab === "edom" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>The Ancient Rivalry: Edom and Israel</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>
                To understand Obadiah, you have to understand one of the oldest wounds in the Bible — the rift between Esau and Jacob, which became the rift between Edom and Israel. These weren't strangers; they were brothers. And that is what made the betrayal unforgivable.
              </p>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>THE ROOT IN GENESIS</div>
                <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14 }}>
                  Genesis 25:23 — God tells Rebekah about the twins before they're born: "Two nations are in your womb, and two peoples from within you shall be divided; the one shall be stronger than the other, the older shall serve the younger." From before birth, the conflict is theological, not merely personal.
                </p>
              </div>

              <AccordionItem id="esau" title="Esau: The 'Red' Man">
                <p>Esau is described as "red, all his body like a hairy cloak" — his name Esau (rough) and his nickname Edom (red) come from this appearance. He is the hunter, the outdoorsman, the favored son of Isaac. He despises his birthright (Gen 25:34 — "he ate and drank and rose and went his way; thus Esau despised his birthright"). The NT summarizes: "See to it that no one is sexually immoral or unholy like Esau, who sold his birthright for a single meal" (Heb 12:16).</p>
                <p style={{ marginTop: 8 }}>Yet Esau is not purely villainous. The reconciliation scene in Genesis 33 is one of the most touching in the Bible — Esau running to meet Jacob, embracing and kissing him, weeping with him. The personal reconciliation happened. The national rivalry never fully healed.</p>
              </AccordionItem>

              <AccordionItem id="petra" title="Edom's Mountain Fortress">
                <p>Edom occupied the mountainous region southeast of the Dead Sea — roughly modern Jordan. Its capital city was Sela (later known as Petra), carved into rose-red rock cliffs, one of the ancient world's most impregnable fortresses. This geography bred a particular arrogance: "Who can bring me down from here?"</p>
                <p style={{ marginTop: 8 }}>Obadiah 3-4 speaks directly to this: "The pride of your heart has deceived you, you who live in the clefts of the rock, in your lofty dwelling, who say in your heart, 'Who will bring me down to the ground?' Though you soar aloft like the eagle, though your nest is set among the stars, from there I will bring you down, declares the LORD." The fortress that seemed eternal would fall.</p>
                <p style={{ marginTop: 8 }}>Historically, Edom was gradually displaced by the Nabataeans (by the 4th century BC), pushed westward into the Negev region (becoming "Idumea"). By the 1st century AD, Herod the Great was an Idumean — ethnic Edomite. The nation of Edom effectively ceased to exist after Rome's destruction of Jerusalem in AD 70. Obadiah's word was fulfilled.</p>
              </AccordionItem>

              <AccordionItem id="malachi" title="Edom in Malachi and Romans">
                <p>Malachi opens with the same Esau-Jacob motif: "'I have loved you,' says the LORD. But you say, 'How have you loved us?' 'Is not Esau Jacob's brother?' declares the LORD. 'Yet I have loved Jacob but Esau I have hated'" (Mal 1:2-3).</p>
                <p style={{ marginTop: 8 }}>Paul quotes this in Romans 9:13 as part of his argument about divine election: "As it is written, 'Jacob I loved, but Esau I hated.'" Paul uses the historical Esau/Edom story as a type to discuss God's sovereign choice — not to teach that God hated Esau personally before birth, but that God's purposes ran through the younger, unexpected line.</p>
                <p style={{ marginTop: 8 }}>The point isn't divine favoritism for its own sake, but the larger principle: God's purposes are not based on human strength, achievement, or birth order. The older serves the younger; the weak confounds the strong (1 Cor 1:27).</p>
              </AccordionItem>
            </div>
          )}

          {/* TAB: Pride */}
          {activeTab === "pride" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>The Pride of the Heart: Obadiah's Central Warning</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>
                Obadiah 3 names Edom's core sin: "The pride of your heart has deceived you." Pride isn't just arrogance — it's a deceiver. It convinces people their security is absolute, their position unassailable. This theological insight reaches from Edom to every human heart.
              </p>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>THE DECEPTION OF PRIDE</div>
                <p style={{ color: TEXT, fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7 }}>
                  "The pride of your heart has deceived you, you who live in the clefts of the rock, in your lofty dwelling, who say in your heart, 'Who will bring me down to the ground?'"
                </p>
                <div style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>— Obadiah 3</div>
              </div>

              <AccordionItem id="pride1" title="Pride as Self-Deception">
                <p>The Hebrew word for pride here is zadon — arrogance, presumption. The phrase "deceived you" (hissit'a) implies that pride isn't merely an attitude; it's an epistemic distortion. Pride doesn't just make you feel good about yourself; it warps your perception of reality. Edom genuinely believed no one could touch them. Their geography confirmed it. Their history confirmed it. And they were wrong.</p>
                <p style={{ marginTop: 8 }}>Proverbs 16:18 — "Pride goes before destruction, and a haughty spirit before a fall." This is the universal principle that Obadiah applies to Edom specifically. The book is a case study in what Proverbs predicted.</p>
              </AccordionItem>

              <AccordionItem id="pride2" title="The Heights of Security">
                <p>Edom said: "Who will bring me down to the ground?" They lived among eagles' heights. And God responds in v.4: "Though you soar aloft like the eagle, though your nest is set among the stars, from there I will bring you down, declares the LORD."</p>
                <p style={{ marginTop: 8 }}>The imagery echoes Isaiah 14:13-15 — the pride of the "Day Star" (Lucifer in Latin tradition): "I will ascend to heaven; above the stars of God I will set my throne on high... I will make myself like the Most High. But you are brought down to Sheol, to the far reaches of the pit." The pattern is universal: the creature exalted beyond its station will be brought down.</p>
                <p style={{ marginTop: 8 }}>Jesus inverts this: "Whoever exalts himself will be humbled, and whoever humbles himself will be exalted" (Matt 23:12). The wisdom of Obadiah and the teaching of Jesus converge.</p>
              </AccordionItem>

              <AccordionItem id="pride3" title="Practical Application">
                <p>Every believer has a "Petra" — a place where they feel secure from judgment, beyond accountability. It may be a position of power, a theological system that explains away sin, financial security, social status, or simply the passage of years without consequence. Obadiah's word is not just for Edom: no nest is set so high that God cannot reach it.</p>
                <p style={{ marginTop: 8 }}>The antidote to Edomite pride is the posture of James 4:6: "God opposes the proud but gives grace to the humble." To receive grace, the posture must be downward — acknowledging need, acknowledging dependence, acknowledging that our position comes from God and can be taken by God.</p>
              </AccordionItem>
            </div>
          )}

          {/* TAB: Betrayal */}
          {activeTab === "betrayal" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>Standing Aside: The Sin of Uninvolvement</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>
                Obadiah 11-14 contains some of the most detailed moral instruction in the Minor Prophets — not about what Edom did, but about what Edom failed to do. The ladder of escalating sin describes how passive observation becomes active betrayal.
              </p>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>THE EIGHT-FOLD INDICTMENT (vv. 11-14)</div>
                <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
                  <p>1. "On the day that you stood aloof" — passive non-involvement (v.11a)</p>
                  <p>2. "On the day that strangers carried off his wealth" — watching the looting (v.11b)</p>
                  <p>3. "You should not have gloated over the day of your brother" (v.12a)</p>
                  <p>4. "You should not have rejoiced over the people of Judah" (v.12b)</p>
                  <p>5. "You should not have boasted in the day of distress" (v.12c)</p>
                  <p>6. "You should not have entered the gate of my people" — actual looting (v.13a)</p>
                  <p>7. "You should not have gloated over his disaster" (v.13b)</p>
                  <p>8. "You should not have stood at the crossroads to cut off his fugitives" — capturing refugees (v.14)</p>
                </div>
              </div>

              <AccordionItem id="ladder" title="The Ladder of Complicity">
                <p>Obadiah 11-14 shows a progression: passive bystander → emotional gloating → active participation → predatory complicity. Each step deepens Edom's guilt. This moral ladder is still relevant: to observe injustice passively, to take satisfaction in others' pain, to begin benefiting from it, and finally to actively participate in it — this is a recognizable human pattern.</p>
                <p style={{ marginTop: 8 }}>The passage raises the uncomfortable question: at what point does non-involvement become complicity? Edom didn't attack Jerusalem. They just watched. Then they cheered. Then they looted. Then they blocked refugees. Verse 11a — "you stood aloof" — is already numbered among their sins.</p>
              </AccordionItem>

              <AccordionItem id="brotherhood" title="The Brotherhood Principle">
                <p>Obadiah says "your brother" and "the people of your brother" — repeatedly emphasizing kinship. Edom and Judah were related peoples (Esau and Jacob). This makes the betrayal worse, not better. To stand aside while your brother suffers — this violates something fundamental about what it means to be human, to be in covenant community.</p>
                <p style={{ marginTop: 8 }}>The NT principle: "If anyone has the world's goods and sees his brother in need, yet closes his heart against him, how does God's love abide in him?" (1 John 3:17). Obadiah's ancient indictment resonates with John's NT teaching. The God who held Edom accountable for its passivity holds his people accountable for theirs.</p>
              </AccordionItem>

              <AccordionItem id="lex" title="The Principle of Retribution">
                <p>Obadiah 15: "As you have done, it shall be done to you; your deeds shall return on your own head." This is not revenge theology but the deep biblical principle that what we do to others shapes what happens to us — whether immediately or ultimately.</p>
                <p style={{ marginTop: 8 }}>Galatians 6:7 — "Do not be deceived: God is not mocked, for whatever one sows, that will he also reap." Jesus in the Sermon on the Mount: "with the measure you use it will be measured back to you" (Matt 7:2). The moral universe is not indifferent. Actions have weight. They return.</p>
              </AccordionItem>
            </div>
          )}

          {/* TAB: Day of the LORD */}
          {activeTab === "dayofthelord" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>The Day of the LORD: Judgment Without Partiality</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>
                Obadiah 15-16 expands the oracle from Edom alone to all nations: "The day of the LORD is near upon all the nations." What happened to Edom is a preview of what happens to every nation, every power that stands against God and exploits the vulnerable.
              </p>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>OBADIAH 15</div>
                <div style={{ color: TEXT, fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7 }}>
                  "For the day of the LORD is near upon all the nations. As you have done, it shall be done to you; your deeds shall return on your own head."
                </div>
              </div>

              <AccordionItem id="dol1" title="The Day of the LORD in the Prophets">
                <p>The Day of the LORD (Yom YHWH) is one of the major themes running through the Hebrew prophets — Amos, Joel, Isaiah, Jeremiah, Ezekiel, Zephaniah, and Malachi all use it. Initially it was a day the Israelites expected to favor them — God coming to defeat their enemies. Amos shocked his audience: "Woe to you who desire the day of the LORD! Why would you have the day of the LORD? It is darkness, and not light" (Amos 5:18). The Day judges Israel too.</p>
                <p style={{ marginTop: 8 }}>Obadiah connects the specific judgment on Edom to this larger eschatological theme. Edom's fall is a down payment, a visible instance of the final day when all accounts are settled.</p>
              </AccordionItem>

              <AccordionItem id="dol2" title="Drinking the Cup">
                <p>Obadiah 16: "For as you have drunk on my holy mountain, so all the nations shall drink continually; they shall drink and swallow, and shall be as though they had never been." The cup metaphor — nations drinking God's judgment — appears throughout the prophets (Jer 25:15-28; Rev 14:10; Rev 16:19). The cup that Edom poured for others will be given to them.</p>
                <p style={{ marginTop: 8 }}>The Gethsemane echo: Jesus prays "Let this cup pass from me" (Matt 26:39). He was drinking the cup of God's wrath on humanity's behalf — absorbing what all nations, including Edom, including Israel, including every human being, deserved. The cup Obadiah describes is real. Jesus drained it.</p>
              </AccordionItem>

              <AccordionItem id="dol3" title="The Theological Point: Accountability">
                <p>The Day of the LORD in Obadiah establishes that history is not morally neutral. Nations are not eternal. Power is not permanent. What empires do to the vulnerable registers with God — not just as an abstract moral principle but as a theological certainty that history moves toward a reckoning.</p>
                <p style={{ marginTop: 8 }}>This was pastoral comfort to the Jews who watched Edom laugh at Jerusalem's destruction. It is pastoral comfort in every age when the powerful seem to escape consequence. Obadiah's word: "as you have done, it shall be done to you." Not yet — but certainly.</p>
              </AccordionItem>
            </div>
          )}

          {/* TAB: Kingdom */}
          {activeTab === "kingdom" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>The Kingdom Shall Be the LORD's</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>
                After 20 verses of judgment, Obadiah's final verse is a trumpet blast of eschatological hope: "Saviors shall go up to Mount Zion to rule Mount Esau, and the kingdom shall be the LORD's" (v.21). The book that began with Edom's pride ends with God's sovereignty.
              </p>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>THE FINAL WORD</div>
                <div style={{ color: TEXT, fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7 }}>
                  "Saviors shall go up to Mount Zion to rule Mount Esau, and the kingdom shall be the LORD's."
                </div>
                <div style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>— Obadiah 21</div>
              </div>

              <AccordionItem id="restoration" title="The Restoration Vision (vv.17-20)">
                <p>Verses 17-20 describe a restored Israel repossessing its land and the surrounding territories. The house of Jacob will be a flame, the house of Esau stubble (v.18). The Negev will possess Esau's mountain. Benjamin will possess Gilead. The exiles of Jerusalem will take the cities of the Negev.</p>
                <p style={{ marginTop: 8 }}>This vision has both historical and eschatological dimensions. Historically, some of this was partially fulfilled in the Maccabean period (2nd century BC). Theologically, it points to the reversal of every injustice and the final possession of God's people of all that was promised.</p>
              </AccordionItem>

              <AccordionItem id="saviors" title="Saviors on Mount Zion">
                <p>The word "saviors" in verse 21 (moshiim — deliverers/judges) may refer to human leaders who will administer judgment — like the judges of old. Or it may have a messianic resonance. Mount Zion in prophetic literature is the place where God's ultimate rule is established (Psalm 2; Isaiah 2:2-4; Micah 4:1-3).</p>
                <p style={{ marginTop: 8 }}>The NT picks up this Zion language: "But you have come to Mount Zion and to the city of the living God, the heavenly Jerusalem" (Heb 12:22). The kingdom that Obadiah announces is the kingdom that Jesus proclaims in the Gospels: "Repent, for the kingdom of heaven is at hand" (Matt 4:17). The King has come. The kingdom is already arriving. It will fully arrive.</p>
              </AccordionItem>

              <AccordionItem id="lordkingdom" title="The Kingdom Shall Be the LORD's">
                <p>The final phrase — "the kingdom shall be the LORD's" (layhwh ha-m'lukah) — is the theological climax of the entire book. All human kingdoms, no matter how powerful, are provisional. Edom's mountain fortress fell. Babylon fell. Rome fell. Every empire that sets itself against God's people and God's purposes ultimately yields to the one kingdom that cannot be shaken (Heb 12:28).</p>
                <p style={{ marginTop: 8 }}>Revelation 11:15 — "The kingdom of the world has become the kingdom of our Lord and of his Christ, and he shall reign forever and ever." This is the trumpet Obadiah is already blowing. The 21-verse book ends at exactly the right place: not with Edom's destruction, not with Israel's restoration, but with God's sovereignty — "the kingdom shall be the LORD's."</p>
                <p style={{ marginTop: 8 }}>Lord's Prayer echo: "Thy kingdom come, thy will be done, on earth as it is in heaven." This is the prayer that Obadiah's final verse anticipates. The kingdom belongs to the LORD. We pray it into visibility.</p>
              </AccordionItem>
            </div>
          )}

          {/* TAB: Themes */}
          {activeTab === "themes" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>Key Theological Themes</h2>

              {[
                {
                  title: "Pride Deceives and Destroys",
                  text: "Edom's cardinal sin is pride (zadon) — the conviction that height equals security, that position equals immunity. Obadiah names it as a deceiver: it warps perception of reality. This is the universal warning running from Proverbs 16:18 through Obadiah through Jesus' teaching on humility.",
                },
                {
                  title: "The Sin of Passive Non-Involvement",
                  text: "The ladder of Edom's sins begins with simply standing aloof. Obadiah teaches that failing to act when action is required is itself a moral failure. The progression from bystander to gloater to participant to predator is gradual and morally coherent. The first step — standing aside — is already counted against them.",
                },
                {
                  title: "Brotherhood and Betrayal",
                  text: "The Esau-Jacob relationship means Edom and Israel were kin. Betrayal of kinship is worse than betrayal by strangers. The NT's community ethics (caring for the household of faith, bearing one another's burdens, Gal 6:2,10) reflects this logic: covenant relationship creates heightened obligation.",
                },
                {
                  title: "The Boomerang Principle",
                  text: "'As you have done, it shall be done to you; your deeds shall return on your own head' (v.15). The moral universe is structured such that what we do to others circles back. Not always immediately, not always visibly, but ultimately. This is not karma in a Buddhist sense but the personal accountability before a just God.",
                },
                {
                  title: "No Fortress Beyond God's Reach",
                  text: "Eagle's heights, mountain fortresses, political power, wealth — Edom's confidence in its geography is the original 'too big to fail.' Obadiah's word is that there is no position so elevated that God cannot reach it. The only security is under God's wings, not above God's reach.",
                },
                {
                  title: "The Kingdom of God as the Horizon",
                  text: "Obadiah begins with a particular judgment on a particular ancient nation. It ends with the universal: 'the kingdom shall be the LORD's.' The book models prophetic thinking — specific, historical situations are read in light of the eschatological horizon where God's rule is complete and visible.",
                },
              ].map(th => (
                <AccordionItem key={th.title} id={th.title} title={th.title}>
                  <p>{th.text}</p>
                </AccordionItem>
              ))}

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginTop: 24 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 12 }}>CROSS-REFERENCES</div>
                {[
                  { ref: "Genesis 25:23", text: "Two nations — the election of Jacob over Esau" },
                  { ref: "Psalm 137:7", text: "Remember, O LORD, against the Edomites the day of Jerusalem" },
                  { ref: "Proverbs 16:18", text: "Pride goes before destruction, haughty spirit before a fall" },
                  { ref: "Amos 5:18", text: "The Day of the LORD is darkness, not light" },
                  { ref: "Lamentations 4:21-22", text: "Edom rejoiced while Jerusalem mourned" },
                  { ref: "Revelation 11:15", text: "The kingdom of the world has become the kingdom of our Lord" },
                ].map(cr => (
                  <div key={cr.ref} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
                    <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 140, flexShrink: 0 }}>{cr.ref}</span>
                    <span style={{ color: MUTED, fontSize: 13 }}>{cr.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: Journal */}
          {activeTab === "journal" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8, color: ACCENT }}>Personal Journal</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 24, fontSize: 14 }}>
                Reflect on what Obadiah's message speaks to your life. Pride? The temptation to stand aside? The comfort of God's sovereignty?
              </p>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>VERSE OR PASSAGE</label>
                  <input
                    value={verse}
                    onChange={e => setVerse(e.target.value)}
                    placeholder="e.g., Obadiah 3, 15, 21..."
                    style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, boxSizing: "border-box" }}
                  />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>REFLECTION</label>
                  <textarea
                    value={reflection}
                    onChange={e => setReflection(e.target.value)}
                    placeholder="What is God saying to you through this passage?"
                    rows={4}
                    style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>PRAYER</label>
                  <textarea
                    value={prayer}
                    onChange={e => setPrayer(e.target.value)}
                    placeholder="Respond in prayer..."
                    rows={3}
                    style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <button
                  onClick={saveEntry}
                  style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 8, padding: "11px 28px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
                >Save Entry</button>
              </div>
              {entries.length > 0 && (
                <div>
                  <h3 style={{ fontWeight: 700, color: MUTED, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1, fontSize: 12 }}>Saved Entries ({entries.length})</h3>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13 }}>{e.verse || "No verse"}</span>
                        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                          <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                          <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>✕</button>
                        </div>
                      </div>
                      {e.reflection && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>{e.reflection}</p>}
                      {e.prayer && <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", borderTop: `1px solid ${BORDER}`, paddingTop: 8, marginTop: 8 }}>Prayer: {e.prayer}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB: Videos */}
          {activeTab === "videos" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8, color: ACCENT }}>Video Resources</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 24, fontSize: 14 }}>Explore Obadiah's message through these teaching videos.</p>
              <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                <VideoEmbed videoId="q9nPnlRgaXE" title="The Book of Obadiah Explained" />
                <VideoEmbed videoId="oNpTha80yyE" title="Edom and the Pride of Nations" />
                <VideoEmbed videoId="ZGk1hl1nNrw" title="The Day of the LORD in the Prophets" />
                <VideoEmbed videoId="NnGBhG03g4M" title="The Kingdom Shall Be the LORD's" />
              </div>
            </div>
          )}

        </div>
        <Footer />
      </div>
    </>
  );
}
