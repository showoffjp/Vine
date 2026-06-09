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
  { id: "fearofthelord", label: "Fear of the Lord" },
  { id: "ladywisdom", label: "Lady Wisdom" },
  { id: "types", label: "How Proverbs Work" },
  { id: "proverbs31", label: "Proverbs 31" },
  { id: "themes", label: "Key Themes" },
  { id: "howtoread", label: "How to Read" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const WISDOM_TYPES = [
  { ref: "Observation", color: GREEN, title: "Descriptive Proverbs", example: "\"A soft answer turns away wrath, but a harsh word stirs up anger.\" (Prov 15:1)", desc: "Many proverbs are simply observations about how the world works — they describe patterns without prescribing commands. A soft answer usually does turn away wrath. This is a general truth that comes from watching human nature carefully. It is wisdom derived from experience, not law." },
  { ref: "Better-Than", color: BLUE, title: "Comparative Proverbs", example: "\"Better is a little with righteousness than great revenues with injustice.\" (Prov 16:8)", desc: "\"Better-than\" proverbs compare two situations and rank them according to value. They challenge conventional assumptions about what counts as success or blessing. Often what the world prizes (wealth, power, status) is ranked lower than what God prizes (integrity, peace, wisdom)." },
  { ref: "Numerical", color: PURPLE, title: "Numerical Sayings", example: "\"There are six things the LORD hates, seven that are detestable to him...\" (Prov 6:16)", desc: "Numerical sayings (x, x+1 pattern) group observations together and create a memorable unit. The pattern itself creates suspense and makes the final item in the list especially emphatic. They are a teaching tool — grouping related wisdom for easy retention." },
  { ref: "Contrast", color: GOLD, title: "Antithetic Proverbs", example: "\"The way of the LORD is a stronghold to the blameless, but destruction to evildoers.\" (Prov 10:29)", desc: "Antithetic proverbs place two contrasting realities side by side — wisdom vs. folly, righteous vs. wicked, diligent vs. lazy. The contrast is the teaching. Most of the proverbs in chapters 10-22 follow this \"A but B\" structure." },
];

const THEMES = [
  { color: GOLD, title: "The Tongue", text: "No single topic receives more attention in Proverbs than speech. Words can bring life (12:18), heal wounds (16:24), kindle fires (26:21), and destroy cities (11:9). The wise person knows when to speak and when to be silent. \"Even a fool who keeps silent is considered wise\" (17:28). The discipline of the tongue is the discipline of wisdom itself." },
  { color: TEAL, title: "Work and Diligence", text: "Proverbs is unambiguous: the sluggard is a fool. \"A slack hand causes poverty, but the hand of the diligent makes rich\" (10:4). The ant is held up as a model — she works without being compelled, stores provisions in summer (6:6-8). Diligence is not just economic prudence — it is a form of faithfulness to the creator God who himself works and calls his image-bearers to cultivate creation." },
  { color: GREEN, title: "Pride and Humility", text: "\"Pride goes before destruction, and a haughty spirit before a fall\" (16:18) is arguably the most famous proverb. Pride is the root sin in wisdom literature because it is the refusal to acknowledge dependence — on God, on others, on truth. The wise person is teachable, correctable, and aware of their limits. \"Do not be wise in your own eyes\" (3:7) is a standing warning against the self-deception that masquerades as confidence." },
  { color: PURPLE, title: "Friendship and Community", text: "\"Iron sharpens iron, and one person sharpens another\" (27:17). Proverbs envisions wisdom as a social project — not a private achievement but a communal formation. The wise person chooses friends carefully (13:20), receives correction without resentment (9:8), and speaks truth in love (27:6). Community is the context of wisdom; isolation is the breeding ground of foolishness." },
  { color: BLUE, title: "Wealth and Poverty", text: "Proverbs is neither naive about money nor dismissive of it. Wealth can be a blessing of wisdom and diligence — but it can also be gained unjustly (10:2), hoarded selfishly (11:24), or trusted idolatrously (11:28). \"Better a little with the fear of the LORD than great wealth with turmoil\" (15:16). The goal of Proverbs is not poverty or wealth but character — and character produces honest, generous, peace-filled wealth or honest, dignified poverty." },
  { color: RED, title: "The Wise vs. the Foolish", text: "The fundamental contrast of Proverbs is not poor vs. rich or young vs. old — it is wise vs. foolish. The fool rejects instruction (1:7), is wise in his own eyes (12:15), gives full vent to his anger (29:11), and returns to folly like a dog to its vomit (26:11). The wise person hears, learns, and grows. This contrast is not about intelligence — it is about orientation: toward God and his order, or toward self and its appetites." },
];

const HOW_TO_READ = [
  { title: "Proverbs Are Principles, Not Promises", color: PURPLE, desc: "The most common misreading of Proverbs is treating individual sayings as unconditional promises or guarantees. \"Train up a child in the way he should go; even when he is old he will not depart from it\" (22:6) is a general observation about how formation shapes character — not a guarantee that a godly parent will always have a godly child. Proverbs describes patterns, tendencies, and typical outcomes in a created world governed by God's wisdom. Exceptions exist. Context matters. The wisdom of Proverbs is not a slot machine." },
  { title: "The Book Has Multiple Authors and Collections", color: BLUE, desc: "Proverbs is an anthology, not a single-author book. Solomon provides much of it (chapters 1-9, 10-22, and 25-29 attributed to him), but chapter 30 is attributed to Agur son of Jakeh, and chapter 31:1-9 to King Lemuel, whose mother taught him. This diversity is theologically intentional: wisdom is not the property of any single person or tradition. It is cumulative, cross-cultural, and received across generations." },
  { title: "Read Proverbs 1-9 as Framing for the Rest", color: GREEN, desc: "The long poems in Proverbs 1-9 are the hermeneutical key to reading the individual sayings in chapters 10-31. In 1-9, Lady Wisdom and Woman Folly are two cosmic figures inviting the young person to their tables. The whole drama of human existence is framed as a choice between two invitations. When you read a practical proverb about money or speech or work in chapters 10-31, you are hearing Lady Wisdom speaking — not a self-help guru." },
  { title: "Proverbs and the Fear of the Lord", color: GOLD, desc: "\"The fear of the LORD is the beginning of wisdom\" (1:7) is the thesis statement of the entire book. Every practical proverb flows from this foundation. Fear of the Lord is not terror — it is the posture of a creature before its creator, of a dependent before their sustainer. It is the recognition that I did not design the world and therefore wisdom means learning to live in accordance with how the world actually works — which requires humility, observation, and obedience. Without this foundation, clever sayings are just fortune cookies." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type ProvTab = "overview" | "fearofthelord" | "ladywisdom" | "types" | "proverbs31" | "themes" | "howtoread" | "journal" | "videos";

export default function ProverbsGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<ProvTab>("vine_prov_tab", "overview");
  const [openType, setOpenType] = useState<string | null>(null);
  const [openHow, setOpenHow] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_prov_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_prov_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

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
          <div style={{ display: "inline-block", background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Wisdom · OT</div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>The Book of Proverbs</h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>Ancient Israel&apos;s treasury of wisdom — practical guidance for living in God&apos;s well-ordered world, grounded in the great foundation that the fear of the Lord is the beginning of all wisdom.</p>
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
                {[["Author(s)", "Solomon, Agur, Lemuel"], ["Genre", "Wisdom Literature"], ["Setting", "Israel / Royal Court"], ["Language", "Hebrew (Poetry)"], ["Key Theme", "Fear of the Lord"], ["Key Verse", "Prov 1:7"]].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Proverbs is ancient Israel&apos;s definitive wisdom collection — a curated treasury of observations, instructions, and reflections about how to live well in the world God made. It is not a systematic theology. It is compressed, practical, and concrete: how to speak, work, handle money, choose friends, rear children, and govern yourself under the watchful eye of God.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The book is structured as an anthology. After a long instructional prologue (chapters 1-9) featuring extended poems addressed from a father to his son, the book transitions to the main collection of individual proverbs (chapters 10-31), attributed to Solomon, Agur, and King Lemuel. Chapter 31 closes with the famous poem about the woman of noble character — which is not a job description but a portrait of wisdom embodied in human life.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>THE STRUCTURE OF PROVERBS</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["Chapters 1–9", "Wisdom's Appeal", "Long poems from father to son; Lady Wisdom and Woman Folly as two invitations; the fear of the Lord as foundation."],
                  ["Chapters 10–22:16", "Solomonic Proverbs I", "The main collection of individual proverbs, predominantly antithetic (wise vs. foolish, righteous vs. wicked)."],
                  ["Chapters 22:17–24:34", "Words of the Wise", "A distinct collection; close parallels with Egyptian wisdom (the Instruction of Amenemope) show OT wisdom in dialogue with the ancient world."],
                  ["Chapters 25–29", "Solomonic Proverbs II", "\"Copied by the men of Hezekiah\" (25:1) — a royal editorial project under Hezekiah, centuries after Solomon."],
                  ["Chapter 30", "Words of Agur", "Agur's confession of ignorance before God (30:1-4) and his numerical sayings."],
                  ["Chapter 31", "Words of Lemuel / Ode", "A queen mother's instruction (31:1-9) and the acrostic poem on the capable wife (31:10-31)."],
                ].map(([ref, title, desc]) => (
                  <div key={ref} style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                    <span style={{ background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: GOLD, fontWeight: 700, whiteSpace: "nowrap", alignSelf: "flex-start" }}>{ref}</span>
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

        {activeTab === "fearofthelord" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>The Fear of the Lord (Proverbs 1:7)</h2>
              <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", marginBottom: 18 }}>
                <p style={{ color: GOLD, fontSize: 17, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding.&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>Proverbs 1:7 (NIV) — the thesis statement of the entire book</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>This sentence is not an introduction to Proverbs — it is the thesis of the entire book. Every proverb that follows is an elaboration of this claim: that wisdom, properly understood, has its foundation in the right relationship to God. Without this foundation, all the practical advice about money, speech, and relationships is just folk wisdom — astute observation disconnected from ultimate reality.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The same claim appears in slightly varied forms across the wisdom literature: &ldquo;The fear of the LORD is the beginning of wisdom&rdquo; (Ps 111:10), &ldquo;The fear of the LORD is wisdom, and to turn away from evil is understanding&rdquo; (Job 28:28). It is the shared conviction of OT wisdom theology.</p>
            </div>
            {[
              { ref: "What It Is NOT", color: RED, title: "Not Terror or Servile Fear", content: "The \"fear of the LORD\" is not primarily the cowering of a terrified slave before an unpredictable master. The Hebrew yirat YHWH refers to the reverent awe that recognizes absolute difference in kind — between creature and creator, between dependent and sustainer, between finite and infinite. It is the posture of a creature who knows its place in the order of things and lives accordingly. The opposite of the fear of the Lord is not courage but pride — the refusal to acknowledge dependence." },
              { ref: "Awe + Reverence", color: TEAL, title: "Worshipful Orientation", content: "Fear of the LORD begins in worship. It is first of all a right understanding of who God is and who I am in relation to him. The person who fears the LORD recognizes that wisdom is not self-generated — it must be received. This posture of receptivity is itself the beginning of wisdom. The proud person who thinks they already understand everything is precisely the person who cannot learn. \"Do not be wise in your own eyes; fear the LORD and shun evil\" (3:7)." },
              { ref: "Practical Effect", color: GREEN, title: "How It Shapes Daily Life", content: "Fear of the LORD is not abstract piety — it shapes concrete behavior. Because God is just, the person who fears the Lord does not use dishonest scales (11:1). Because God sees everything, the wise person does not do in secret what they would not do openly (15:3). Because God is generous, the person who fears the Lord is generous (3:9-10). Every practical command in Proverbs flows from this theological root — the character of God shapes the character of the wise person." },
              { ref: "Beginning", color: PURPLE, title: "The Foundational Principle", content: "\"Beginning\" (reshit) does not mean first in sequence — like a first step before getting to the real content. It means primary, foundational, the generative source. Fear of the LORD is the soil from which all wisdom grows. You do not start with fear of the LORD and then move on to practical wisdom as if the foundation is behind you. Fear of the LORD is the lens through which all practical wisdom is seen and applied. Remove this foundation and all the practical proverbs become sophisticated self-help at best." },
              { ref: "Fool", color: GOLD, title: "The Fool Who Rejects It", content: "\"Fools despise wisdom and instruction\" (1:7). The fool in Proverbs is not primarily the silly or uneducated person — it is the person who lives as if God does not exist or does not matter. The fool thinks he can be wise on his own terms, answerable to no one, shaped by his own appetites rather than God's order. The final image of the fool in Proverbs 26 is devastating: \"Like a dog that returns to its vomit is a fool who repeats his folly\" (26:11). Folly is its own punishment." },
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

        {activeTab === "ladywisdom" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Lady Wisdom and Woman Folly (Proverbs 1–9)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Proverbs 1-9 is a series of extended poems in which a father addresses his son about the two paths available to him. But the poems go beyond practical instruction — they personify wisdom and folly as two women, each calling from the city gate, each inviting the young person to her house, each promising a certain kind of life. Lady Wisdom and Woman Folly are the two invitations that frame all of human existence.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>This is not merely a literary device. Lady Wisdom in Proverbs 8 speaks of being present with God at creation — crying out at the city gates, calling all humanity to listen. The invitation to wisdom is nothing less than an invitation to align oneself with the grain of the universe, with the order by which God made the world.</p>
            </div>
            {[
              { ref: "Prov 1:20-23", color: TEAL, title: "Wisdom Cries Out in the Streets", content: "Wisdom does not hide — she calls out loudly in the city square, at the busiest intersection, where the decisions of life are made. This public cry is not a private spiritual experience. Wisdom is available to all who will hear. The invitation is universal and urgent: \"How long will you who are simple love your simple ways?\" The tragedy of the fool is not that wisdom was unavailable — it is that the fool heard and refused." },
              { ref: "Prov 8:22-31", color: GREEN, title: "Wisdom at Creation", content: "In Proverbs 8:22-31, Lady Wisdom speaks in the first person: she was the first of God's works, present at creation, \"rejoicing before him always, rejoicing in his inhabited world.\" This passage has generated rich theological reflection. Early Christians saw in Lady Wisdom a pointer to the Logos of John 1 — the divine wisdom through whom all things were made. Whether or not Wisdom is a distinct divine person, the claim is clear: wisdom is not human achievement; it is built into the structure of creation itself." },
              { ref: "Prov 9:1-6", color: GOLD, title: "Wisdom's Banquet", content: "Lady Wisdom has built her house and set her table. She has sent out her servants and called from the heights: \"Come, eat my bread and drink the wine I have mixed. Leave your simple ways and you will live; walk in the way of insight.\" The image is of a rich, generous feast freely given. Wisdom's invitation is not harsh or demanding — it is the invitation to a banquet. The contrast with Woman Folly makes the choice stark: two houses, two tables, two outcomes." },
              { ref: "Prov 9:13-18", color: RED, title: "Woman Folly's Counterfeit", content: "Woman Folly also sits at her door and calls out — with almost exactly the same words as Lady Wisdom: \"Whoever is simple, let him turn in here.\" Her appeal is seductive: \"Stolen water is sweet, and bread eaten in secret is pleasant.\" But she does not tell her guests that \"the dead are there, that her guests are in the depths of Sheol\" (9:18). Folly's house looks inviting from the outside. It is only after you enter that you discover it is a house of death. The two invitations sound similar. The outcomes are opposite." },
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

        {activeTab === "types" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>How Proverbs Actually Work</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Understanding the literary forms in Proverbs protects against misreading them. Proverbs are not universal laws or guaranteed promises — they are compressed observations about how the created world typically works, under God&apos;s governance. Different types of proverbs work differently and require different kinds of application.</p>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>The skilled reader of Proverbs learns to read each saying in its genre, apply it with wisdom rather than mechanical literalism, and hold individual proverbs in tension with other proverbs that address the same situation from different angles.</p>
            </div>
            {WISDOM_TYPES.map((w, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openType === String(i) ? w.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                <button type="button" onClick={() => setOpenType(openType === String(i) ? null : String(i))}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ background: `${w.color}20`, border: `1px solid ${w.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: w.color, fontWeight: 700 }}>{w.ref}</span>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{w.title}</div>
                      <div style={{ color: MUTED, fontSize: 12, fontStyle: "italic" }}>{w.example}</div>
                    </div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{openType === String(i) ? "−" : "+"}</span>
                </button>
                {openType === String(i) && (
                  <div style={{ padding: "0 22px 18px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "14px 0 0" }}>{w.desc}</p>
                  </div>
                )}
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginTop: 10 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>PROVERBS IN TENSION</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 10px" }}>The wisdom of Proverbs sometimes pairs seemingly contradictory sayings side by side — notably Proverbs 26:4-5:</p>
              <div style={{ background: BG, borderRadius: 8, padding: "12px 16px", marginBottom: 10 }}>
                <p style={{ color: GOLD, fontSize: 14, fontStyle: "italic", margin: 0, lineHeight: 1.7 }}>&ldquo;Do not answer a fool according to his folly, or you yourself will be just like him. (26:4)<br />Answer a fool according to his folly, or he will be wise in his own eyes. (26:5)&rdquo;</p>
              </div>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}>Both proverbs are true — in different situations. The compiler placed them together deliberately: wisdom is knowing which one applies when. This is not a contradiction; it is a test of discernment. The goal of Proverbs is not to give you rules but to give you wisdom — the judgment to apply the right principle at the right time.</p>
            </div>
          </div>
        )}

        {activeTab === "proverbs31" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>The Woman of Noble Character (Proverbs 31:10-31)</h2>
              <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", marginBottom: 18 }}>
                <p style={{ color: GREEN, fontSize: 16, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;A wife of noble character who can find? She is worth far more than rubies.&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>Proverbs 31:10 — the opening of the concluding acrostic poem</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>The poem of Proverbs 31:10-31 is an acrostic — each verse begins with a successive letter of the Hebrew alphabet, from aleph to tav (the Hebrew equivalent of A to Z). This literary form signals completeness: this is a full picture, an exhaustive portrait of wisdom embodied in a human life. The subject is a married woman, but the poem is not addressed to women — it closes a book addressed to young men, showing them what wisdom looks like when it is fully lived.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The Proverbs 31 woman is often used as a standard of impossible domestic perfection. This misreads the poem. She is not a checklist or a life-management ideal. She is the embodiment of Lady Wisdom from chapters 1-9 — the same figure who builds her house (9:1) now fully realized in a woman who manages a household, engages in commerce, provides for the poor, and speaks with wisdom and kindness.</p>
            </div>
            {[
              { ref: "Strength", color: GREEN, title: "A Woman of Strength (Valor)", content: "The Hebrew word translated \"noble character\" (or \"excellent wife\") is esheth chayil — woman of valor, or woman of strength. The same word (chayil) is used for military valor, for Boaz's description as a \"mighty man of valor,\" and for the mighty warriors of Israel's armies. The Proverbs 31 woman is not domestically tame — she is a person of strength, agency, and moral excellence. The poem places in her hands the same language used for Israel's great champions." },
              { ref: "Commerce", color: GOLD, title: "Entrepreneur and Provider", content: "She considers a field and buys it; out of her earnings she plants a vineyard (31:16). She makes linen garments and sells them, and supplies the merchants with sashes (31:24). The Proverbs 31 woman is an entrepreneur, a businesswoman, a landowner. Her household security is not passive — it is actively generated. She is not confined to the house; she works in the fields, in the market, and in the international trade network. Her economic agency is a form of wisdom." },
              { ref: "Generosity", color: TEAL, title: "Open to the Poor", content: "She opens her arms to the poor and extends her hands to the needy (31:20). In the middle of a poem about household management and economic success, a single verse pivots to the margins. The woman of valor is not merely efficient — she is generous. Her household prosperity is not hoarded; it flows outward to those in need. Wisdom, in Proverbs, always generates generosity. The wise person knows that all she has comes from God, and so she holds it with open hands." },
              { ref: "31:26", color: PURPLE, title: "She Speaks with Wisdom", content: "She opens her mouth with wisdom, and the teaching of kindness is on her tongue (31:26). In a book obsessed with right speech — where the tongue can kill or heal, build or destroy — this verse is the crown of the portrait. The wise woman does not just act wisely; she speaks wisely. The word translated \"kindness\" is hesed — the covenantal lovingkindness that describes God's faithful love for his people. Her speech is not merely prudent; it is covenantally shaped." },
              { ref: "31:30", color: RED, title: "The Conclusion: Fear of the Lord", content: "\"Charm is deceptive, and beauty is fleeting; but a woman who fears the LORD is to be praised\" (31:30). The entire poem concludes where the book began: the fear of the LORD. All the economic energy, practical skill, generous action, and wise speech of the Proverbs 31 woman flow from this foundation. She fears the LORD. That is the secret. Without this foundation, all the practical wisdom is ultimately hollow. With it, ordinary life becomes extraordinary." },
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
            {THEMES.map(t => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ color: t.color, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{t.title}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "howtoread" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>How to Read Proverbs Well</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>Proverbs is one of the most commonly misread books in the Bible — either treated as a promise-machine or dismissed as culture-bound folk wisdom. Here are frameworks for reading it with care, faith, and practical wisdom.</p>
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

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>My Proverbs Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Record the wisdom, warnings, and practical insights from your study of Proverbs.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Passage</label><textarea rows={2} value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. Prov 1:7, Prov 3:5-6, Prov 15:1, Prov 31:30" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Reflection</label><textarea rows={4} value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="What does this proverb reveal about God, human nature, or wise living? Where do you see it confirmed or challenged in your life?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Prayer response</label><textarea rows={3} value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="How are you praying in response to what you've learned?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
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
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on Proverbs</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Sermons and lectures on wisdom, the fear of the Lord, Lady Wisdom, and how to apply Proverbs in daily life.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "AzmYV8GNAIM", title: "The Book of Proverbs Overview", channel: "BibleProject", description: "BibleProject's animated overview of Proverbs — the structure of the book, Lady Wisdom and Woman Folly, the fear of the Lord, and how practical wisdom flows from covenant relationship with God." },
                  { videoId: "W5T9KnkAMoU", title: "What Is Wisdom?", channel: "Tim Keller", description: "Keller on the nature of biblical wisdom — why it is not mere cleverness or pragmatism, how it differs from knowledge, and why the fear of the Lord is its only proper foundation." },
                  { videoId: "ZBqnKkjOBGI", title: "The Proverbs 31 Woman", channel: "Gospel Coalition", description: "An exploration of the esheth chayil — woman of valor — in Proverbs 31. What the poem actually says about strength, agency, economic life, and the fear of the Lord as the poem's climax." },
                  { videoId: "RpBlkPd5MoY", title: "Wisdom Literature and the Gospel", channel: "Desiring God", description: "How the wisdom tradition of the OT (Proverbs, Job, Ecclesiastes) prepares for and finds its fulfillment in Jesus Christ — the one in whom are hidden all the treasures of wisdom and knowledge (Col 2:3)." },
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
