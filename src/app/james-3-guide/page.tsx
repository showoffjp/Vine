"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import VerseRef from "@/components/VerseRef";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB";
const GOLD = "#D97706", TEAL = "#0D9488", ROSE = "#E11D48";

const videoItems = [
  { videoId: "yBHuRCmKTmE", title: "James 3 - Taming the Tongue" },
  { videoId: "xTgibhvmWEI", title: "Two Kinds of Wisdom James 3:13-18" },
  { videoId: "A7jl9xFDqwY", title: "The Power of Words - James 3 Teaching" },
  { videoId: "w_2e4RMB49M", title: "Wisdom from Above - James 3 Sermon" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

const verseAccordionItems = [
  {
    ref: "3:1",
    label: "James 3:1 &mdash; The Stricter Judgment of Teachers",
    body: "James opens with a sobering caution: &ldquo;Not many of you should become teachers, my fellow believers, because you know that we who teach will be judged more strictly.&rdquo; The Greek word for &ldquo;teacher&rdquo; is <em>didaskalos</em> &mdash; one who shapes minds and souls through the word. This is not a prohibition but a warning: teaching amplifies influence, and amplified influence carries amplified accountability. The rabbis taught that one who teaches error to many bears greater guilt than one who sins alone. James, himself a pillar of the Jerusalem church and a teacher of the first order, includes himself in this warning with &ldquo;we who teach.&rdquo; The verse sets the stage for all that follows: if the tongue is the most dangerous member of the body, the teacher&rsquo;s tongue is the most dangerous tongue of all."
  },
  {
    ref: "3:2",
    label: "James 3:2 &mdash; Stumbling in Many Ways",
    body: "James 3:2 establishes the universal condition before narrowing to the tongue: &ldquo;We all stumble in many ways. Anyone who is never at fault in what they say is perfect, able to keep their whole body in check.&rdquo; The word &ldquo;perfect&rdquo; here is <em>teleios</em> &mdash; mature, complete, brought to its intended end. The logic is compressed: the tongue is the hardest member to control; therefore the one who controls it perfectly has achieved mastery over every other part of the body. Full sanctification of speech implies sanctification of the whole person. This is not a bar to meet but a diagnostic: our speech patterns reveal our true spiritual condition more honestly than almost any other behavior."
  },
  {
    ref: "3:3-4",
    label: "James 3:3-4 &mdash; The Bit and the Rudder",
    body: "James employs two vivid analogies for the tongue&rsquo;s disproportionate power. First, the horse&rsquo;s bit: &ldquo;When we put bits into the mouths of horses to make them obey us, we can turn the whole animal.&rdquo; A small piece of iron controls a thousand-pound creature. Second, the ship&rsquo;s rudder: &ldquo;Or take ships as an example. Although they are so large and are driven by strong winds, they are steered by a very small rudder wherever the pilot wants to go.&rdquo; The Greek <em>euthynon</em> means &ldquo;making straight&rdquo; &mdash; the rudder straightens and directs what would otherwise be directionless drift. James&rsquo;s point is that small instruments of direction have outsized effects on large, powerful systems. The tongue is precisely this: small, but determinative of life&rsquo;s direction."
  },
  {
    ref: "3:5-6",
    label: "James 3:5-6 &mdash; The Tongue as Fire and Forest Conflagration",
    body: "Verses 5-6 introduce James&rsquo;s most dramatic image: &ldquo;Consider what a great forest is set on fire by a small spark. The tongue also is a fire, a world of evil among the parts of the body.&rdquo; The Greek <em>glossa</em> (tongue) here becomes an apocalyptic force: it &ldquo;corrupts the whole body, sets the whole course of one&rsquo;s life on fire, and is itself set on fire by hell.&rdquo; The word for &ldquo;course of life&rdquo; is <em>trochon tes geneseos</em> &mdash; literally &ldquo;the wheel of genesis&rdquo; or cycle of existence. James may be borrowing cosmological language from Hellenistic Judaism. The reference to &ldquo;Gehenna&rdquo; (translated &ldquo;hell&rdquo;) &mdash; the valley of burning rubbish south of Jerusalem &mdash; implies that destructive speech has its ultimate origin in the demonic realm. The tongue is not merely bad habit; it is a conduit for cosmic evil."
  },
  {
    ref: "3:7-8",
    label: "James 3:7-8 &mdash; The Untameable Member",
    body: "James now makes his most provocative claim about the tongue: &ldquo;All kinds of animals, birds, reptiles and sea creatures are being tamed and have been tamed by mankind, but no human being can tame the tongue. It is a restless evil, full of deadly poison.&rdquo; This is not fatalistic despair but realistic humility. The catalogue of tamed animals invokes Genesis 1&rsquo;s dominion mandate &mdash; humanity rules over the creatures. But the tongue resists human dominion. The word <em>akatastaton</em> (restless) is the same used in 1:8 for the double-minded man &mdash; unstable, unable to settle. The tongue&rsquo;s poison echoes Psalm 140:3 (&ldquo;their tongues are as sharp as a serpent&rsquo;s&rdquo;). The implication: if humans cannot tame the tongue, only the grace of God operating through the Spirit can produce bridled speech."
  },
  {
    ref: "3:9-10",
    label: "James 3:9-10 &mdash; Blessing and Cursing from the Same Source",
    body: "James exposes the deepest contradiction of unbridled speech: &ldquo;With the tongue we praise our Lord and Father, and with it we curse human beings, who have been made in God&rsquo;s likeness. Out of the same mouth come praise and cursing. My brothers and sisters, this should not be.&rdquo; The theological weight falls on &ldquo;made in God&rsquo;s likeness&rdquo; &mdash; <em>kath&rsquo; homoiosin theou</em>, echoing Genesis 1:26. To curse a person is to attack the image of the God one claims to worship. This is not merely inconsistency; it is a species of blasphemy. The church that blesses God on Sunday and slanders neighbors on Monday is in a state of profound spiritual incoherence. &ldquo;My brothers and sisters, this should not be&rdquo; &mdash; the Greek <em>ou chre</em> is a strong moral ought: these things ought not to coexist."
  },
  {
    ref: "3:11-12",
    label: "James 3:11-12 &mdash; Natural Law Against Contradiction",
    body: "James closes the tongue section with three nature illustrations, all pointing to the same logical impossibility of mixed outputs from a single source: &ldquo;Can both fresh water and salt water flow from the same spring? My brothers and sisters, can a fig tree bear olives, or a grapevine bear figs? Neither can a salt spring produce fresh water.&rdquo; Nature is consistent; its outputs match its sources. A fig tree produces figs because that is what it is. A fresh spring produces fresh water because that is its nature. But the double-tongued person &mdash; blessing God and cursing the image-bearer &mdash; violates this natural law. The implication is regenerative: the solution is not tongue management but transformation of the source, the heart. Only new birth produces a consistently blessing tongue."
  },
  {
    ref: "3:13",
    label: "James 3:13 &mdash; Who Is Wise? Show It by Your Life",
    body: "&ldquo;Who is wise and understanding among you? Let them show it by their good life, by deeds done in the humility that comes from wisdom.&rdquo; James pivots from the tongue to wisdom &mdash; the transition is not abrupt but thematic. The tongue is the instrument of the teacher; wisdom is the content the teacher dispenses. The Greek word <em>katastole</em> (often translated &ldquo;manner of life&rdquo; or &ldquo;conduct&rdquo;) describes the whole pattern of one&rsquo;s behavior. Real wisdom is not demonstrated by rhetorical skill or breadth of knowledge but by the texture of a life. The phrase &ldquo;humility that comes from wisdom&rdquo; &mdash; <em>en prautes sophias</em> &mdash; suggests that meekness and gentleness are wisdom&rsquo;s natural disposition. Boasting about wisdom contradicts wisdom itself."
  },
  {
    ref: "3:14-16",
    label: "James 3:14-16 &mdash; Earthly, Unspiritual, Demonic Wisdom",
    body: "&ldquo;But if you harbor bitter envy and selfish ambition in your hearts, do not boast about it or deny the truth. Such wisdom does not come down from heaven but is earthly, unspiritual, demonic. For where you have envy and selfish ambition, there you find disorder and every evil practice.&rdquo; James identifies two root sins driving false wisdom: <em>zelos pikros</em> (bitter jealousy) and <em>eritheia</em> (selfish ambition &mdash; the word used in Galatians 5:20 for a work of the flesh). The three-level descent of this counterfeit wisdom is striking: earthly (<em>epigeios</em>) &mdash; oriented to temporal concerns; unspiritual (<em>psychike</em>) &mdash; operating from the unrenewed soul; demonic (<em>daimoniodes</em>) &mdash; energized by forces hostile to God. The fruit confirms the source: &ldquo;disorder and every evil practice.&rdquo; Where envy and ambition rule, community disintegrates."
  },
  {
    ref: "3:17",
    label: "James 3:17 &mdash; The Seven Marks of Heavenly Wisdom",
    body: "&ldquo;But the wisdom that comes from heaven is first of all pure; then peace-loving, considerate, submissive, full of mercy and good fruit, impartial and sincere.&rdquo; James gives seven adjectives that together form a portrait of Spirit-formed character. First: <em>hagne</em> (pure) &mdash; unmixed motive, single devotion. Then: peace-loving (<em>eirenike</em>), considerate (<em>epieikes</em> &mdash; the same word used of God&rsquo;s magnanimity in the LXX), submissive (<em>eupeithes</em> &mdash; easily persuaded by what is good), full of mercy and good fruit, impartial (<em>adiakritos</em> &mdash; without wavering or partiality), and sincere (<em>anupokritos</em> &mdash; without hypocrisy or play-acting). This list maps almost exactly onto the fruit of the Spirit in Galatians 5:22-23. Heavenly wisdom is not primarily intellectual; it is moral and relational."
  },
  {
    ref: "3:18",
    label: "James 3:18 &mdash; Peacemakers Reaping Righteousness",
    body: "James closes the chapter with a pregnant summary verse: &ldquo;Peacemakers who sow in peace reap a harvest of righteousness.&rdquo; The word <em>eirenopoios</em> (peacemakers) appears only here in the NT outside the Beatitudes (&ldquo;Blessed are the peacemakers,&rdquo; Matthew 5:9) &mdash; a direct echo of Jesus. The agricultural metaphor of sowing and reaping implies patient, long-term investment in reconciliation. Peace is not merely the absence of conflict but an active sowing of shalom in relationships. The harvest &mdash; <em>karpos dikaiosunes</em> (fruit of righteousness) &mdash; is both the result produced (righteous community) and the character formed (persons shaped by justice and integrity). The whole chapter has been moving toward this: the tongue controlled, wisdom expressed in humility, and peace sown as seed &mdash; these together produce a righteousness that endures."
  },
];

const keyThemes = [
  {
    color: ROSE,
    icon: "&#128293;",
    title: "The Tongue as Fire (vv. 2-6)",
    body: "James uses two extended analogies to press home the tongue&rsquo;s extraordinary power relative to its size. A tiny horse&rsquo;s bit steers a thousand-pound animal. A small rudder guides an entire ship through powerful winds. Likewise, the tongue &mdash; this tiny member &mdash; &ldquo;boasts of great things.&rdquo; Then comes the dark turn: the tongue is a fire that corrupts the whole body, sets the wheel of life ablaze, and draws its destructive energy from Gehenna itself. James&rsquo;s point is not merely that words can hurt feelings; it is that the tongue can channel cosmic evil and set a life &mdash; or a community &mdash; on an irreversible course of destruction."
  },
  {
    color: GOLD,
    icon: "&#128062;",
    title: "The Impossibility of Taming the Tongue (vv. 7-12)",
    body: "All categories of animal have yielded to human taming &mdash; but the tongue resists. James uses this to dismantle human self-confidence: we cannot fix our speech problem through willpower, social pressure, or religious effort. The tongue is a &ldquo;restless evil, full of deadly poison.&rdquo; It blesses God and curses God&rsquo;s image-bearers in the same breath. James appeals to natural law: fresh water and salt water do not come from the same spring; fig trees do not bear olives. The only solution is transformation at the source &mdash; the heart. This prepares the reader for James&rsquo;s alternative: wisdom from above, which alone produces a consistently blessing tongue."
  },
  {
    color: PURPLE,
    icon: "&#128218;",
    title: "Two Kinds of Wisdom (vv. 13-18)",
    body: "James draws a sharp contrast between two wisdoms: one earthly, unspiritual, demonic; the other heavenly, pure, peace-loving. Earthly wisdom is driven by bitter envy (<em>zelos pikros</em>) and selfish ambition (<em>eritheia</em>) &mdash; the same root sins Paul identifies as works of the flesh. Its fruit is disorder and every evil practice. Heavenly wisdom, by contrast, is &ldquo;first of all pure; then peace-loving, considerate, submissive, full of mercy and good fruit, impartial and sincere&rdquo; &mdash; seven characteristics that mirror the fruit of the Spirit. The Greek word <em>sophia</em> (wisdom) here is not merely intellectual; it describes a whole orientation of life and relationship."
  },
  {
    color: TEAL,
    icon: "&#127807;",
    title: "Peacemakers Who Sow in Peace (v. 18)",
    body: "James closes the chapter with a verse that crystallizes his vision: &ldquo;Peacemakers who sow in peace reap a harvest of righteousness.&rdquo; The word <em>eirenopoios</em> (peacemakers) deliberately echoes the Beatitudes and places James&rsquo;s ethics squarely in the tradition of Jesus&rsquo; teaching. Sowing peace is patient, costly, long-term work &mdash; like a farmer trusting the harvest. The harvest is <em>karpos dikaiosunes</em>: a fruit of righteousness that is both personal character and communal flourishing. The whole chapter moves toward this end: tongue disciplined by wisdom, wisdom expressed in humility, and the result &mdash; a community shaped by shalom."
  },
];

const wisdomDiagnostic = [
  { earthly: "Bitter envy toward others&rsquo; success", heavenly: "Rejoicing in others&rsquo; flourishing" },
  { earthly: "Selfish ambition driving decisions", heavenly: "Servant-hearted consideration of others" },
  { earthly: "Boasting about achievements", heavenly: "Quiet, humble deeds done in love" },
  { earthly: "Disorder and conflict in relationships", heavenly: "Peace-making as a way of life" },
  { earthly: "Partiality &mdash; treating people by their usefulness", heavenly: "Impartiality rooted in all bearing God&rsquo;s image" },
  { earthly: "Hypocrisy: performing one thing, living another", heavenly: "Sincerity: word and life aligned" },
  { earthly: "Mercy withheld from those who have failed", heavenly: "Full of mercy and good fruit toward all" },
];

export default function James3GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openVerse, setOpenVerse] = useState<number>(-1);
  const [openWisdom, setOpenWisdom] = useState<number>(-1);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: ".5rem" }}>&#128293;</div>
          <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 900, color: TEXT, marginBottom: ".75rem", lineHeight: 1.2 }}>
            James 3: The Power and Peril of the Tongue, and Wisdom from Above
          </h1>
          <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            A verse-by-verse study guide to James 3 &mdash; covering the tongue&rsquo;s fire, the impossibility of taming it, the two wisdoms, and the call to be peacemakers who sow righteousness.
          </p>
          <div style={{ display: "flex", gap: ".75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.25rem" }}>
            {[
              { label: "18 Verses", color: ROSE },
              { label: "Greek: glossa, sophia", color: PURPLE },
              { label: "Two Wisdoms", color: GOLD },
              { label: "Peacemakers", color: TEAL },
            ].map(({ label, color }) => (
              <span key={label} style={{ background: `${color}22`, border: `1px solid ${color}55`, color, borderRadius: 20, padding: "4px 14px", fontSize: ".8rem", fontWeight: 700 }}>{label}</span>
            ))}
          </div>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((tab) => {
            const id = tab.toLowerCase().replace(/ /g, "-");
            const active = activeTab === id;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(id)}
                style={{
                  padding: ".5rem 1.2rem",
                  borderRadius: 20,
                  border: `1px solid ${active ? GREEN : BORDER}`,
                  background: active ? `${GREEN}22` : CARD,
                  color: active ? GREEN : MUTED,
                  fontWeight: active ? 700 : 400,
                  cursor: "pointer",
                  fontSize: ".88rem",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* TAB: Overview */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem", marginBottom: "1.5rem" }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.35rem", marginBottom: "1rem" }}>Overview of James 3</h2>
              <p
                style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "James 3 stands as one of the most focused and rhetorically powerful chapters in the New Testament. It divides neatly into two halves: a searing analysis of the tongue (vv. 1&ndash;12) and a rich theology of two competing wisdoms (vv. 13&ndash;18). The connection between the halves is organic &mdash; the tongue is the instrument of the teacher, and what teachers dispense is wisdom. The quality of the wisdom determines the quality of the speech, and the quality of the speech determines the health or sickness of the community." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "James writes to a community in which the status of &lsquo;teacher&rsquo; was highly prized. In the Jewish tradition from which early Christianity emerged, the <em>rabbi</em> or teacher commanded enormous respect, and the aspiration to teach was widespread. James does not condemn teaching &mdash; he himself is one of the most significant teachers of the early church &mdash; but he warns that the tongue&rsquo;s power to shape many minds makes the teacher&rsquo;s accountability correspondingly greater." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "The chapter&rsquo;s climax is verse 18: &ldquo;Peacemakers who sow in peace reap a harvest of righteousness.&rdquo; This verse echoes the Beatitudes, anchors the chapter in the teaching of Jesus, and points toward the kind of community that heavenly wisdom is meant to produce: a community characterized not by competition and envy but by patient, costly peace-making." }}
              />
            </div>

            {/* Book Overview Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                ["Chapter", "James 3"],
                ["Verses", "18"],
                ["Key Greek Words", "glossa, sophia, eirenopoios"],
                ["Main Themes", "Tongue, Wisdom, Peace"],
                ["Key Verse", "James 3:17"],
                ["OT Echoes", "Ps 140:3, Gen 1:26"],
              ].map(([k, v]) => (
                <div key={k} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: ".75rem", marginBottom: ".3rem" }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: ".9rem" }}>{v}</div>
                </div>
              ))}
            </div>

            {/* Greek Word Spotlight */}
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${PURPLE}44`, padding: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", marginBottom: "1rem" }}>Key Greek Words in James 3</h3>
              <div style={{ display: "grid", gap: ".85rem" }}>
                {[
                  { word: "glossa", meaning: "tongue", note: "The physical organ of speech, but in James it becomes a synecdoche for the entire inner life&rsquo;s expression. Used six times in this chapter alone (vv. 5, 6, 8 appear explicitly; the concept saturates vv. 1&ndash;12)." },
                  { word: "sophia", meaning: "wisdom", note: "Not merely intellectual knowledge, but a practical orientation of life toward God and neighbor. In James, sophia is something that is &lsquo;from above&rsquo; &mdash; it must be received, not manufactured." },
                  { word: "katastole", meaning: "manner of life / conduct", note: "Used in 3:13 (&lsquo;good conduct&rsquo;). Refers to the settled pattern of behavior that flows from character. Wisdom is demonstrated not in words but in <em>katastole</em>." },
                  { word: "eirenopoios", meaning: "peacemaker", note: "Appears only in Matt. 5:9 and James 3:18 in the NT &mdash; a deliberate echo of the Beatitudes. The peacemaker is not a passive non-combatant but an active cultivator of shalom." },
                ].map(({ word, meaning, note }) => (
                  <div key={word} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ background: `${PURPLE}22`, border: `1px solid ${PURPLE}55`, borderRadius: 8, padding: "6px 12px", minWidth: 90, textAlign: "center", flexShrink: 0 }}>
                      <div style={{ color: PURPLE, fontWeight: 800, fontSize: ".85rem", fontStyle: "italic" }}>{word}</div>
                      <div style={{ color: MUTED, fontSize: ".72rem" }}>{meaning}</div>
                    </div>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: ".88rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: note }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: Key Themes */}
        {activeTab === "key-themes" && (
          <div>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.25rem" }}>Key Themes in James 3</h2>
            <div style={{ display: "grid", gap: "1.25rem", marginBottom: "2rem" }}>
              {keyThemes.map((theme) => (
                <div key={theme.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: ".85rem", alignItems: "flex-start" }}>
                    <div style={{ fontSize: "2rem", flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: theme.icon }} />
                    <div>
                      <h3 style={{ color: theme.color, fontWeight: 800, fontSize: "1.05rem", marginBottom: ".5rem" }}>{theme.title}</h3>
                      <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Wisdom Diagnostic */}
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${GOLD}44`, padding: "1.5rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.1rem", marginBottom: ".5rem" }}>Wisdom Diagnostic: Earthly vs. Heavenly</h3>
              <p style={{ color: MUTED, fontSize: ".88rem", lineHeight: 1.7, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: "James 3:13&ndash;18 draws a stark contrast between two kinds of wisdom. Use this diagnostic to reflect on which wisdom is currently shaping your decisions, relationships, and speech." }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: BORDER, borderRadius: 10, overflow: "hidden" }}>
                <div style={{ background: `${ROSE}18`, padding: ".75rem 1rem", fontWeight: 800, color: ROSE, fontSize: ".85rem" }}>Earthly / Demonic Wisdom</div>
                <div style={{ background: `${GREEN}18`, padding: ".75rem 1rem", fontWeight: 800, color: GREEN, fontSize: ".85rem" }}>Wisdom from Above</div>
                {wisdomDiagnostic.map((row, i) => (
                  <>
                    <div key={`e-${i}`} style={{ background: CARD, padding: ".65rem 1rem", color: MUTED, fontSize: ".85rem", lineHeight: 1.6, borderTop: `1px solid ${BORDER}` }} dangerouslySetInnerHTML={{ __html: row.earthly }} />
                    <div key={`h-${i}`} style={{ background: CARD, padding: ".65rem 1rem", color: MUTED, fontSize: ".85rem", lineHeight: 1.6, borderTop: `1px solid ${BORDER}` }} dangerouslySetInnerHTML={{ __html: row.heavenly }} />
                  </>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: Verse by Verse */}
        {activeTab === "verse-by-verse" && (
          <div>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: ".5rem" }}>Verse by Verse: James 3:1&ndash;18</h2>
            <p style={{ color: MUTED, fontSize: ".88rem", marginBottom: "1.25rem", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: "Click any verse section to expand a detailed commentary. References link to the Vine Bible reader for the original text." }} />

            {verseAccordionItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${openVerse === i ? TEAL : BORDER}`,
                  borderRadius: 12,
                  marginBottom: ".65rem",
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  onClick={() => setOpenVerse(openVerse === i ? -1 : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "1rem 1.25rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <span style={{ color: TEXT, fontWeight: 700, lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: item.label }} />
                  <span style={{ color: TEAL, fontSize: "1.25rem", flexShrink: 0, fontWeight: 400 }}>{openVerse === i ? "-" : "+"}</span>
                </button>
                {openVerse === i && (
                  <div style={{ padding: "0 1.25rem 1.25rem" }}>
                    <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "1rem" }}>
                      <VerseRef reference={`James ${item.ref}`} inline={false} />
                      <p style={{ color: MUTED, lineHeight: 1.85, marginTop: ".85rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${GOLD}44`, padding: "1.5rem", marginTop: "1.25rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1rem", marginBottom: ".75rem" }}>The Seven Qualities of Heavenly Wisdom (3:17)</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: ".6rem" }}>
                {[
                  { word: "Pure", greek: "hagne" },
                  { word: "Peace-loving", greek: "eirenike" },
                  { word: "Considerate", greek: "epieikes" },
                  { word: "Submissive", greek: "eupeithes" },
                  { word: "Full of mercy", greek: "eleous" },
                  { word: "Impartial", greek: "adiakritos" },
                  { word: "Sincere", greek: "anupokritos" },
                ].map(({ word, greek }) => (
                  <div key={word} style={{ background: `${GOLD}15`, border: `1px solid ${GOLD}44`, borderRadius: 8, padding: ".6rem .8rem", textAlign: "center" }}>
                    <div style={{ color: GOLD, fontWeight: 800, fontSize: ".88rem" }}>{word}</div>
                    <div style={{ color: MUTED, fontSize: ".72rem", fontStyle: "italic", marginTop: ".2rem" }}>{greek}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: Application */}
        {activeTab === "application" && (
          <div>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.25rem" }}>Application: Living James 3</h2>

            {/* Tongue Accountability */}
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${ROSE}44`, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: "1.1rem", marginBottom: ".75rem" }}>Guarding the Tongue: A Practical Framework</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: "James does not offer a simple technique for taming the tongue because he insists it cannot be tamed by human effort alone. The path to bridled speech runs through two channels: (1) honest diagnosis of the heart, and (2) receiving wisdom from above through prayer, the Word, and the community of faith." }} />
              <div style={{ display: "grid", gap: "1rem" }}>
                {[
                  {
                    step: "01",
                    title: "The Pause Practice",
                    color: ROSE,
                    body: "James 1:19 says &ldquo;be quick to listen, slow to speak, slow to become angry.&rdquo; Before speaking in a charged moment, practice a deliberate pause. The pause is not weakness; it is the beginning of wisdom. Ask: Is what I am about to say true? Kind? Necessary? Does it build up or tear down? Proverbs 17:28 observes that even a fool is thought wise when they hold their tongue."
                  },
                  {
                    step: "02",
                    title: "Accountability in Community",
                    color: GOLD,
                    body: "James 5:16 calls us to confess sins to one another. This includes sins of speech. Find a trusted brother or sister and share honestly about patterns of destructive speech &mdash; criticism, gossip, exaggeration, harsh words. This vulnerability is not self-flagellation but the kind of mutual confession that James says leads to healing. The tongue problem is not primarily a private discipline problem; it is a community healing opportunity."
                  },
                  {
                    step: "03",
                    title: "Praying for the Tongue",
                    color: PURPLE,
                    body: "Psalm 141:3 prays: &ldquo;Set a guard over my mouth, Lord; keep watch over the door of my lips.&rdquo; Since James insists the tongue cannot be tamed by human effort, prayer is not optional but essential. Pray daily for the Spirit&rsquo;s work in your speech &mdash; not as a vague request but a specific one: &lsquo;Lord, guard my words in this specific conversation, with this specific person, about this specific topic.&rsquo;"
                  },
                  {
                    step: "04",
                    title: "Meditating on the Image of God",
                    color: TEAL,
                    body: "James&rsquo;s deepest argument against cursing others is theological: they are made in God&rsquo;s likeness (3:9). When you are tempted to speak destructively about a person, return to this truth: this person bears the image of God. Their dignity is not derived from their behavior, performance, or usefulness to you. To curse them is to attack the image of the God you worship. Let this truth recalibrate your tongue."
                  },
                ].map(({ step, title, color, body }) => (
                  <div key={step} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ background: `${color}22`, border: `1px solid ${color}55`, borderRadius: 8, padding: "6px 12px", minWidth: 44, textAlign: "center", flexShrink: 0 }}>
                      <div style={{ color, fontWeight: 900, fontSize: "1rem" }}>{step}</div>
                    </div>
                    <div>
                      <div style={{ color, fontWeight: 800, marginBottom: ".35rem" }}>{title}</div>
                      <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: ".9rem" }} dangerouslySetInnerHTML={{ __html: body }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pursuing Wisdom from Above */}
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${PURPLE}44`, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", marginBottom: ".75rem" }}>Pursuing Wisdom from Above</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Heavenly wisdom does not arrive through self-improvement but is received as a gift from God. James 1:5 promises that if anyone lacks wisdom, they should ask God &mdash; who gives generously and without finding fault. This promise is the counterpart to chapter 3&rsquo;s diagnosis: the wisdom problem is solvable, but only by asking the God who gives wisdom freely." }} />
              <div style={{ display: "grid", gap: ".85rem" }}>
                {[
                  { q: "What would it look like for pure, peace-loving wisdom to shape my most difficult relationship?", color: PURPLE },
                  { q: "Where in my life is selfish ambition or bitter envy (James 3:14) shaping my decisions or my speech?", color: GOLD },
                  { q: "Am I a peacemaker? What would it mean to actively sow peace in a broken relationship this week?", color: TEAL },
                  { q: "Do my words consistently align with my stated beliefs, or is there a gap between what I profess and what I say?", color: ROSE },
                ].map(({ q, color }, i) => (
                  <div key={i} style={{ borderLeft: `3px solid ${color}`, paddingLeft: "1rem" }}>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: ".9rem" }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Tongue Tracker */}
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${TEAL}44`, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: "1.1rem", marginBottom: ".75rem" }}>Tongue Accountability Reflections</h3>
              <p style={{ color: MUTED, fontSize: ".88rem", lineHeight: 1.7, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "At the end of each day this week, pause to honestly evaluate your tongue. James calls us to be doers of the word, not hearers only (1:22). Use these reflection prompts to cultivate awareness and repentance." }} />
              <div style={{ display: "grid", gap: ".65rem" }}>
                {[
                  "Was there a moment today where my words set a destructive fire? What happened, and what drove it?",
                  "Did I bless God with my lips while cursing someone made in his image? Who, and why?",
                  "Was my speech today earthly wisdom (competitive, envious, boasting) or heavenly wisdom (gentle, peace-seeking, sincere)?",
                  "Did I sow seeds of peace in a relationship today, or seeds of discord?",
                  "Is there someone I need to go to and ask forgiveness for something I said?",
                ].map((prompt, i) => (
                  <div key={i} style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                    <div style={{ background: `${TEAL}22`, borderRadius: "50%", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: ".75rem", color: TEAL, fontWeight: 800 }}>{i + 1}</div>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: ".88rem" }} dangerouslySetInnerHTML={{ __html: prompt }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Video Section */}
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", marginBottom: "1.25rem" }}>Video Teaching Resources</h3>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {videoItems.map((item) => (
                  <div key={item.videoId} style={{ borderRadius: 10, overflow: "hidden", border: `1px solid ${BORDER}` }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: ".75rem 1rem", background: BG }}>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: ".9rem" }}>{item.title}</div>
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
