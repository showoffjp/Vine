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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "versebverse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "jVGuaHrGCT4", title: "Proverbs 2 - Seeking Wisdom Like Hidden Treasure" },
  { videoId: "V8NNqSmIYJA", title: "The LORD Gives Wisdom - Proverbs 2:6" },
  { videoId: "oZQME_J3Prg", title: "Wisdom as Protection - Proverbs 2 Commentary" },
  { videoId: "4gBd1vPDVmM", title: "Proverbs 2 Study Guide" },
];

const KEY_THEMES = [
  {
    color: GOLD,
    title: "Wisdom as Divine Gift",
    id: "gift",
    body: "One of the most important theological claims in Proverbs 2 is that wisdom is not self-generated &mdash; it is given by God. &ldquo;For the LORD gives wisdom; from his mouth come knowledge and understanding&rdquo; (Prov 2:6). This undermines any purely self-help reading of the chapter. The earnest seeker does not earn wisdom through effort alone; rather, the effort of seeking positions the person to receive what only God can give. This is the paradox at the heart of the chapter: the conditions are genuinely required (vv.1-4), yet the source is entirely divine (vv.5-6). Wisdom is a gift that is nonetheless found only by those who search for it with everything they have. The Hebrew word <em>chokhmah</em> (wisdom) in the OT refers not merely to intellectual cleverness but to skill in the art of living &mdash; knowing how to navigate the created order in a way that aligns with God&apos;s intentions. Because God made the world, wisdom is, at its root, a participation in the divine mind. No one arrives at that by their own resources. It must be received from the One who designed the world and who alone knows it fully. The earnest seeker is therefore simultaneously active (calling out, seeking, searching) and receptive (waiting on God, trusting his provision). This is not a contradiction but a picture of how the relationship between human effort and divine grace works throughout Scripture.",
  },
  {
    color: GREEN,
    title: "The Discipline of Seeking",
    id: "seeking",
    body: "The opening four verses of Proverbs 2 are a cascade of conditions &mdash; not requirements to earn wisdom, but descriptions of the posture of the genuine seeker. The parent instructs the child: receive (<em>laqach</em>) my words, treasure (<em>tsaphan</em>) my commands, incline (<em>natah</em>) your ear, apply (<em>natan</em>) your heart, call out (<em>qara</em>), lift your voice (<em>natan</em>), seek (<em>baqash</em>) like silver, search (<em>chaphes</em>) like hidden treasure. Each verb adds another layer to what earnest seeking looks like in practice. The analogy to mining for silver and searching for hidden treasure is particularly striking in its ancient context. Mining in the ancient Near East was laborious, dangerous, and painstaking. You did not stumble onto silver; you dug for it through rock and earth, often in darkness, with no guarantee of finding it. And hidden treasure (Hebrew <em>matmon</em>) was something deliberately concealed &mdash; requiring knowledge, persistence, and careful searching to locate. The image is not of casual browsing but of total investment. This has direct implications for how we approach the spiritual disciplines that put us in the way of wisdom: Bible reading, prayer, seeking counsel, sitting under teaching, corporate worship. None of these are magic formulas. But together they constitute the digging, the searching, the calling out that positions us to receive what God freely gives.",
  },
  {
    color: TEAL,
    title: "The Protective Function of Wisdom",
    id: "protection",
    body: "Proverbs 2:12-19 describes wisdom as a protective shield against two categories of danger: the way of evil men (vv.12-15) and the seductive path that leads away from life (vv.16-19). This protective framing is significant. Wisdom is not merely an intellectual achievement or a pleasant quality of character &mdash; it is a survival mechanism. The world is genuinely dangerous. There are people who have given themselves over to perversity, who &ldquo;walk in darkness,&rdquo; who &ldquo;delight in doing evil&rdquo; (v.14). And there are paths that appear inviting but lead to death. Wisdom enables the person who has received it to recognize both dangers and navigate around them. The first danger (vv.12-15) is described in terms of speech: those who &ldquo;speak perverse things,&rdquo; who have abandoned &ldquo;the paths of uprightness to walk in the ways of darkness.&rdquo; Wisdom enables discernment of character and motive &mdash; the ability to detect the marks of a life given over to deceit and manipulation. The second danger (vv.16-19) is more explicitly about a path that does not return. The image of &ldquo;paths of life&rdquo; versus paths that sink down to death is the two-path motif in its starkest form. Some choices are not reversible. Some paths, once taken, change the trajectory of a life permanently. Wisdom that has been genuinely internalized &mdash; that has entered the heart (v.10) and become a delight to the soul &mdash; guards against these paths at the level of desire, not merely decision.",
  },
  {
    color: PURPLE,
    title: "The Two-Path Motif",
    id: "twopaths",
    body: "Proverbs 2 closes (vv.20-22) with a classic expression of one of wisdom literature&apos;s most fundamental literary and theological patterns: the two paths. The upright walk in good paths and the blameless remain in the land; the wicked are cut off and the treacherous are torn away. The two-path motif appears throughout biblical wisdom literature (compare Psalm 1, which opens the Psalter with the same contrast) and reflects a deep theological conviction: that the universe is morally ordered. The choices a person makes about wisdom vs. folly, righteousness vs. wickedness, are not just private lifestyle preferences with no objective consequence. They determine the direction of a life and its ultimate outcome. The imagery of the land in vv.21-22 has Deuteronomic echoes &mdash; the covenant promise of dwelling in the land as a reward for covenant faithfulness. But in Proverbs 2, the land functions as a figure for the good life, the life of shalom, that flows from wisdom. The wicked are not merely punished externally; they are cut off from the good that wisdom would have secured. This is a powerful picture of wisdom not merely as a path to blessing but as the condition of true human flourishing. The one who finds wisdom walks in paths that sustain life; the one who rejects it finds those paths closed off.",
  },
  {
    color: ROSE,
    title: "Hebrew Words Worth Knowing",
    id: "hebrew",
    body: "Proverbs 2 is saturated with wisdom vocabulary, and a brief acquaintance with the Hebrew enriches the reading considerably. <strong>Chokhmah</strong> (wisdom) is the master word &mdash; skill in living, the art of navigating life in accordance with the created order. <strong>Binah</strong> (understanding) is closely related, from the root <em>biyn</em>, meaning to discern or perceive clearly &mdash; it is the capacity to distinguish, to see through, to grasp what is actually going on beneath the surface. <strong>Da&apos;at</strong> (knowledge) in the wisdom tradition is not merely cognitive information but a relational, experiential knowing &mdash; the same word used for knowing a person intimately. To have knowledge of God (v.5) is not merely to know facts about God but to be in right relationship with him. <strong>Keseph</strong> (silver) and <strong>matmon</strong> (hidden treasure) provide the mining analogy that governs the seeking described in vv.1-4. Silver was among the most valuable commodities in the ancient world &mdash; the analogy is to something genuinely precious, not casually acquired. Together, these words paint a picture of wisdom as something altogether different from mere cleverness or information &mdash; it is a form of relational, God-given discernment that enables human beings to live well in a world they did not design and cannot fully comprehend on their own.",
  },
];

const VERSES = [
  {
    ref: "vv. 1-4",
    color: GOLD,
    title: "The Conditions: How to Seek Wisdom",
    body: "The chapter opens with a series of conditional clauses that describe the posture of the genuine seeker. &ldquo;My son, if you receive my words and treasure up my commandments with you, making your ear attentive to wisdom and inclining your heart to understanding; yes, if you call out for insight and raise your voice for understanding, if you seek it like silver and search for it as for hidden treasures...&rdquo; The cascade of &ldquo;if&rdquo; clauses is deliberate: each describes a different dimension of earnest pursuit. <em>Laqach</em> (receive) implies active reception, not passive exposure. <em>Tsaphan</em> (treasure up) implies not merely hearing but storing &mdash; internalizing over time. <em>Natah</em> (incline) implies a deliberate turning of attention, overriding other distractions. <em>Qara</em> (call out) implies vocal, urgent prayer for wisdom. And the mining metaphors (silver, hidden treasure) imply total investment, sustained effort, willingness to go deep. The structure of vv.1-4 is significant: none of these conditions is presented as a self-sufficient technique. They are conditions for receiving, not formulas for generating. The parent is teaching the child that wisdom comes through earnest seeking &mdash; but it is still a gift from beyond.",
  },
  {
    ref: "vv. 5-8",
    color: GREEN,
    title: "The Promise: Understanding the Fear of the LORD",
    body: "The &ldquo;then&rdquo; of verse 5 releases the promise that the conditions of vv.1-4 point toward: &ldquo;then you will understand the fear of the LORD and find the knowledge of God.&rdquo; The goal of earnest seeking is not information but relationship &mdash; understanding what it means to stand before God in reverent awe, and coming to know God himself in the deep, experiential sense of <em>da&apos;at</em>. Verse 6 contains the theological heart of the passage: &ldquo;For the LORD gives wisdom; from his mouth come knowledge and understanding.&rdquo; The word &ldquo;for&rdquo; is crucial &mdash; it grounds the preceding promise in a theological reality. The reason wisdom is available to the earnest seeker is that the LORD is its source and active giver. Verses 7-8 elaborate this by describing God as one who &ldquo;stores up sound wisdom for the upright,&rdquo; who is &ldquo;a shield to those who walk in integrity,&rdquo; who &ldquo;guards the paths of justice&rdquo; and &ldquo;watches over the way of his saints.&rdquo; The description of God as a shield is a military metaphor suggesting active, personal protection. God does not merely point toward wisdom from a distance &mdash; he personally defends those who are walking in it. This passage links wisdom to integrity: the one for whom God stores wisdom is described as &ldquo;upright,&rdquo; &ldquo;those who walk in integrity,&rdquo; and &ldquo;his faithful ones.&rdquo; Seeking wisdom cannot be separated from seeking righteous character.",
  },
  {
    ref: "vv. 9-11",
    color: TEAL,
    title: "The Result: Understanding Enters the Heart",
    body: "Verses 9-11 describe what receiving wisdom does in a person: &ldquo;Then you will understand righteousness and justice and equity, every good path; for wisdom will come into your heart, and knowledge will be pleasant to your soul; discretion will watch over you, understanding will guard you.&rdquo; Several things are striking here. First, the scope of what wisdom enables: righteousness (<em>tsedeq</em>), justice (<em>mishpat</em>), equity (<em>mesharim</em>), every good path. This is not a narrow, pietistic competence &mdash; it is a comprehensive moral discernment that enables the person to navigate every area of life. Second, the location: wisdom comes &ldquo;into your heart.&rdquo; In Hebrew anthropology, the heart (<em>lev</em>) is the center of the inner life &mdash; will, emotion, thought, and decision all reside there. Wisdom that has entered the heart is not an external standard consulted from time to time; it has become constitutive of who you are. It shapes your instincts, your desires, your default responses. Third, the emotional register: &ldquo;knowledge will be pleasant to your soul.&rdquo; The person who has received wisdom does not find it burdensome or dry &mdash; they find it delightful. This is wisdom that has transformed not just the mind but the affections. And finally: discretion and understanding &ldquo;watch over&rdquo; and &ldquo;guard&rdquo; &mdash; again the protective function, now described in terms of inner vigilance.",
  },
  {
    ref: "vv. 12-15",
    color: ROSE,
    title: "Protection from the Way of Evil Men",
    body: "Verses 12-15 describe the first danger from which wisdom protects: &ldquo;delivering you from the way of evil, from men of perverted speech, who forsake the paths of uprightness to walk in the ways of darkness, who rejoice in doing evil and delight in the perverseness of evil, men whose paths are crooked, and who are devious in their ways.&rdquo; The description is vivid and specific. These are not merely people who occasionally do wrong &mdash; they have made a settled choice to &ldquo;forsake the paths of uprightness&rdquo; and have given themselves over to darkness. Their speech is &ldquo;perverted&rdquo; (<em>tahpukot</em>) &mdash; turned upside down, twisted, designed to mislead. They &ldquo;rejoice in doing evil&rdquo; &mdash; they have cultivated a pleasure in wrongdoing that marks the advanced stage of moral corruption. Their paths are &ldquo;crooked&rdquo; (<em>iqesh</em>) and &ldquo;devious.&rdquo; This is a portrait of what happens to a person who has consistently rejected wisdom: the character is formed in the direction of perversity. Wisdom protects against this by enabling discernment of character &mdash; the ability to recognize these marks and to choose not to walk in those paths. The person with wisdom that has entered the heart is not easily deceived by persuasive speech or the apparent glamour of transgression, because they can see where those paths lead.",
  },
  {
    ref: "vv. 16-19",
    color: PURPLE,
    title: "Protection from the Path That Does Not Return",
    body: "Verses 16-19 describe a second and more specifically dangerous path: that of the &ldquo;forbidden woman&rdquo; (Hebrew: <em>zarah</em> &mdash; strange or foreign woman) &ldquo;who has forsaken the companion of her youth and forgotten the covenant of her God; for her house sinks down to death, and her paths to the dead; none who go to her come back, nor do they regain the paths of life.&rdquo; While the figure of the &ldquo;strange woman&rdquo; is read by many commentators as a literal warning against adultery and sexual folly, the context of Proverbs 1-9 suggests she is also a personification of Woman Folly &mdash; the opposite of Lady Wisdom. Her defining characteristic in this passage is covenant violation: she has &ldquo;forsaken the companion of her youth and forgotten the covenant of her God.&rdquo; She has abandoned loyalty and fidelity as the organizing principles of her life. The warning in vv.18-19 is among the most sobering in Proverbs: her paths lead to &ldquo;the dead,&rdquo; and &ldquo;none who go to her come back, nor do they regain the paths of life.&rdquo; Some paths do not allow you to return. Some choices close off others permanently. Wisdom that has been genuinely internalized guards against this not merely by informing the will but by shaping the desires &mdash; so that the path of folly does not appeal in the first place.",
  },
  {
    ref: "vv. 20-22",
    color: GREEN,
    title: "The Two Outcomes: Land and Uprightness",
    body: "The chapter closes with a classic two-path conclusion: &ldquo;So you will walk in the way of the good and keep to the paths of the righteous. For the upright will inhabit the land, and those with integrity will remain in it, but the wicked will be cut off from the land, and the treacherous will be rooted out of it.&rdquo; The conditional structure that opened the chapter (&ldquo;if you receive... then you will understand...&rdquo;) closes with an indicative: &ldquo;so you will walk in the way of the good.&rdquo; The person who has sought wisdom, received it, and been protected by it will find that their life is characterized by walking in righteousness. The language of the land (<em>eretz</em>) in vv.21-22 carries Deuteronomic echoes &mdash; the covenant promise of dwelling in the land as the fruit of covenant faithfulness. But in the context of this wisdom poem, &ldquo;the land&rdquo; signifies more broadly the full, flourishing life that wisdom makes possible: security, permanence, a place of belonging. The wicked are &ldquo;cut off&rdquo; (<em>karat</em>) &mdash; a word used elsewhere for the covenant penalty of exclusion &mdash; and the treacherous are &ldquo;rooted out&rdquo; (<em>nasach</em>). The two-path motif does not merely describe different styles of life; it describes fundamentally different trajectories, different final conditions. Proverbs 2 has traced the complete arc: from earnest seeking, through divine giving, through the internalization of wisdom, through its protective function, to this final outcome of those who walk in wisdom&apos;s way.",
  },
];

const AUDIT_ITEMS = [
  { id: "scripture", label: "Reading Scripture daily with attentiveness", color: GOLD },
  { id: "prayer", label: "Praying specifically for wisdom (James 1:5)", color: GREEN },
  { id: "counsel", label: "Actively seeking wise counsel from others", color: TEAL },
  { id: "community", label: "Regular participation in a learning community", color: PURPLE },
  { id: "reflection", label: "Taking time to reflect before major decisions", color: ROSE },
  { id: "correction", label: "Welcoming and acting on correction or feedback", color: GOLD },
  { id: "meditation", label: "Meditating on Scripture rather than just reading", color: GREEN },
];

export default function Proverbs2GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [auditScores, setAuditScores] = useState<Record<string, number>>({});

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* Page header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "inline-block", background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
            Wisdom &middot; Proverbs &middot; Chapter Study
          </div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 12px", lineHeight: 1.2 }}>
            Proverbs 2: Seeking Wisdom Like Hidden Treasure
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: "0 0 20px", maxWidth: 680 }}>
            Proverbs 2 is a single extended poem &mdash; a parent&apos;s instruction to a child on how to receive wisdom. It describes wisdom as something to be earnestly sought, promises divine protection and discernment to those who find it, and closes with the two-path motif that runs through all of biblical wisdom literature.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              ["Genre", "Wisdom Poetry"],
              ["Chapter", "22 verses"],
              ["Key verse", "Proverbs 2:6"],
              ["Key Hebrew", "chokhmah, biyn, da'at"],
            ].map(([k, v]) => (
              <div key={k} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "8px 16px", fontSize: 13 }}>
                <span style={{ color: MUTED, fontWeight: 600 }}>{k}: </span>
                <span style={{ color: TEXT, fontWeight: 700 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tab navigation */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? GOLD : BORDER}`,
                background: activeTab === t.id ? `${GOLD}20` : "transparent",
                color: activeTab === t.id ? GOLD : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ===== OVERVIEW TAB ===== */}
        {activeTab === "overview" && (
          <div>
            {/* Key verse block */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>Key Verse</div>
              <blockquote style={{ margin: 0, padding: "16px 20px", background: BG, borderRadius: 10, borderLeft: `3px solid ${GOLD}` }}>
                <p style={{ color: TEXT, fontSize: 17, lineHeight: 1.75, fontStyle: "italic", margin: 0, fontFamily: "var(--font-cormorant, Georgia, serif)" }}>
                  &ldquo;For the LORD gives wisdom; from his mouth come knowledge and understanding.&rdquo;
                </p>
                <footer style={{ color: MUTED, fontSize: 13, marginTop: 10, fontStyle: "normal" }}>
                  &mdash; <VerseRef reference="Proverbs 2:6">Proverbs 2:6</VerseRef> (ESV)
                </footer>
              </blockquote>
            </div>

            {/* Chapter overview */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h2 style={{ color: TEXT, fontSize: 20, fontWeight: 800, margin: "0 0 16px" }}>Chapter Overview</h2>
              <div
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 2 is not a collection of individual sayings &mdash; it is a single, unified poem. The structure is unusual for Proverbs: rather than a series of disconnected aphorisms, the chapter unfolds as a sustained argument with a conditional structure (<em>if&hellip; then&hellip;</em>) that moves through multiple stages. The parent addresses the child with a series of conditions for receiving wisdom (vv.1&ndash;4), then describes the divine promise that those conditions unlock (vv.5&ndash;8), then catalogues the results of receiving wisdom (vv.9&ndash;11), then identifies two paths from which wisdom protects (vv.12&ndash;19), and closes with the two outcomes &mdash; the path of the upright and the path of the wicked (vv.20&ndash;22). The chapter is, in miniature, the whole argument of Proverbs 1&ndash;9: wisdom is earnestly sought, divinely given, personally received, practically protective, and ultimately determinative of one&apos;s trajectory. It is a poem that deserves to be read as a whole, not mined for individual verses. The movement from conditions to promise to result to protection to outcome is a coherent arc, and understanding that arc is key to applying the chapter faithfully." }}
              />
            </div>

            {/* Structure map */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h2 style={{ color: TEXT, fontSize: 18, fontWeight: 800, margin: "0 0 18px" }}>Chapter Structure</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { ref: "vv. 1-4", color: GOLD, label: "The Conditions", desc: "Receive, treasure, incline your ear, apply your heart, call out, seek like silver and hidden treasure. The six Hebrew verbs of earnest seeking." },
                  { ref: "vv. 5-8", color: GREEN, label: "The Promise", desc: "You will understand the fear of the LORD and find the knowledge of God. The LORD gives wisdom &mdash; he is its source and active giver, a shield to those who walk in integrity." },
                  { ref: "vv. 9-11", color: TEAL, label: "The Result", desc: "Wisdom enters the heart. Knowledge becomes pleasant to the soul. Discretion and understanding become inner guards. Wisdom shapes the affections, not only the intellect." },
                  { ref: "vv. 12-15", color: ROSE, label: "Protection I: Evil Men", desc: "Delivering from those who speak perverse things and walk in dark paths, who rejoice in doing evil and are devious in their ways." },
                  { ref: "vv. 16-19", color: PURPLE, label: "Protection II: The Path That Does Not Return", desc: "The path whose house sinks down to death. None who go there come back. Wisdom guards at the level of desire, not merely decision." },
                  { ref: "vv. 20-22", color: GREEN, label: "The Two Outcomes", desc: "The upright walk in good paths and remain in the land. The wicked are cut off. The two-path motif resolves in radically different final conditions." },
                ].map((item, i, arr) => (
                  <div key={item.ref} style={{ display: "flex", gap: 16, padding: "16px 0", borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, flexShrink: 0 }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0, marginTop: 4 }} />
                      {i < arr.length - 1 && <div style={{ width: 2, flex: 1, background: `${item.color}30`, marginTop: 4 }} />}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6 }}>
                        <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                        <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{item.label}</span>
                      </div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video grid */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: TEXT, fontSize: 18, fontWeight: 800, margin: "0 0 6px" }}>Video Teaching</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: "0 0 22px", lineHeight: 1.65 }}>Sermons and teaching sessions on Proverbs 2 and the pursuit of wisdom.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {videoItems.map(item => (
                  <div key={item.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "12px 14px" }}>
                      <p style={{ color: TEXT, fontWeight: 600, fontSize: 13, margin: 0, lineHeight: 1.45 }}>{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== KEY THEMES TAB ===== */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h2 style={{ color: TEXT, fontSize: 20, fontWeight: 800, margin: "0 0 12px" }}>Key Themes in Proverbs 2</h2>
              <div
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 2 is one of the most theologically dense chapters in the wisdom literature. Five major themes run through the chapter and recur across the broader Proverbs 1&ndash;9 corpus. Understanding them individually and in their interrelations gives depth to every particular passage. The theme of wisdom as divine gift is especially important: without it, the earnest seeking of vv.1&ndash;4 becomes mere self-help technique rather than the posture of faith it actually is." }}
              />
            </div>

            {KEY_THEMES.map(theme => (
              <div
                key={theme.id}
                style={{ background: CARD, border: `1px solid ${openTheme === theme.id ? theme.color : BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden", transition: "border-color 0.15s" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenTheme(openTheme === theme.id ? null : theme.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                >
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: theme.color, flexShrink: 0, display: "inline-block" }} />
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{theme.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, flexShrink: 0 }}>{openTheme === theme.id ? "-" : "+"}</span>
                </button>
                {openTheme === theme.id && (
                  <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${BORDER}` }}>
                    <div
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, marginTop: 16 }}
                      dangerouslySetInnerHTML={{ __html: theme.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Hebrew vocabulary quick reference */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 10 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 16, margin: "0 0 16px" }}>Hebrew Vocabulary at a Glance</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  { word: "chokhmah", gloss: "wisdom &mdash; skill in the art of living", color: GOLD },
                  { word: "binah", gloss: "understanding &mdash; discernment, seeing through", color: TEAL },
                  { word: "da'at", gloss: "knowledge &mdash; relational, experiential knowing", color: GREEN },
                  { word: "biyn", gloss: "to understand / discern (verbal root of binah)", color: PURPLE },
                  { word: "keseph", gloss: "silver &mdash; precious commodity, object of mining", color: ROSE },
                  { word: "matmon", gloss: "hidden treasure &mdash; deliberately concealed wealth", color: GOLD },
                ].map(item => (
                  <div key={item.word} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: item.color, fontWeight: 800, fontSize: 14, fontStyle: "italic", marginBottom: 4 }}>{item.word}</div>
                    <div
                      style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}
                      dangerouslySetInnerHTML={{ __html: item.gloss }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== VERSE BY VERSE TAB ===== */}
        {activeTab === "versebverse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h2 style={{ color: TEXT, fontSize: 20, fontWeight: 800, margin: "0 0 12px" }}>Verse by Verse: Proverbs 2</h2>
              <div
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "This section works through Proverbs 2 in its six main movements, with commentary on the key terms, structure, and theology of each unit. The goal is to read with care &mdash; to notice what the text actually says rather than what we expect it to say, and to allow the literary movement of the chapter to shape our understanding rather than extracting individual verses from context." }}
              />
            </div>

            {/* Verse panels */}
            {VERSES.map(v => (
              <div
                key={v.ref}
                style={{ background: CARD, border: `1px solid ${openVerse === v.ref ? v.color : BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden", transition: "border-color 0.15s" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenVerse(openVerse === v.ref ? null : v.ref)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start", flex: 1 }}>
                    <span style={{ background: `${v.color}20`, border: `1px solid ${v.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: v.color, fontWeight: 700, whiteSpace: "nowrap", marginTop: 2 }}>{v.ref}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{v.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{openVerse === v.ref ? "-" : "+"}</span>
                </button>
                {openVerse === v.ref && (
                  <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${BORDER}` }}>
                    <div
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, marginTop: 16 }}
                      dangerouslySetInnerHTML={{ __html: v.body }}
                    />
                    <div style={{ marginTop: 18, padding: "12px 16px", background: BG, borderRadius: 10, borderLeft: `3px solid ${v.color}` }}>
                      <span style={{ color: v.color, fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>Cross-reference</span>
                      <p style={{ color: MUTED, fontSize: 13, margin: "6px 0 0", lineHeight: 1.65 }}>
                        {v.ref === "vv. 1-4" && <span>Compare <VerseRef reference="James 1:5">James 1:5</VerseRef> &mdash; &ldquo;If any of you lacks wisdom, let him ask God, who gives generously to all without reproach.&rdquo; The same paradox: ask earnestly, receive freely.</span>}
                        {v.ref === "vv. 5-8" && <span>See <VerseRef reference="Proverbs 1:7">Proverbs 1:7</VerseRef> &mdash; &ldquo;The fear of the LORD is the beginning of wisdom.&rdquo; And <VerseRef reference="Colossians 2:3">Colossians 2:3</VerseRef> &mdash; &ldquo;in whom are hidden all the treasures of wisdom and knowledge.&rdquo;</span>}
                        {v.ref === "vv. 9-11" && <span>Compare <VerseRef reference="Psalm 119:11">Psalm 119:11</VerseRef> &mdash; &ldquo;I have stored up your word in my heart.&rdquo; Wisdom enters the heart through the word, creating delight, not mere duty.</span>}
                        {v.ref === "vv. 12-15" && <span>See <VerseRef reference="Psalm 1:1">Psalm 1:1</VerseRef> &mdash; the blessed person does not walk in the counsel of the wicked. The two-path motif in its Psalter form: not walking, not standing, not sitting in the ways of the ungodly.</span>}
                        {v.ref === "vv. 16-19" && <span>Compare <VerseRef reference="Proverbs 9:13-18">Proverbs 9:13-18</VerseRef> &mdash; Woman Folly calls from her door: &ldquo;Stolen water is sweet, and bread eaten in secret is pleasant.&rdquo; But her guests are in the depths of Sheol. The same motif: a path that looks inviting, a house that leads to death.</span>}
                        {v.ref === "vv. 20-22" && <span>See <VerseRef reference="Psalm 1:6">Psalm 1:6</VerseRef> &mdash; &ldquo;The LORD knows the way of the righteous, but the way of the wicked will perish.&rdquo; The Psalter closes the same circle that Proverbs 2 closes here.</span>}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Second video section */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 10 }}>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 16, margin: "0 0 18px" }}>Teaching on Proverbs 2</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {videoItems.map(item => (
                  <div key={item.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <p style={{ color: GOLD, fontWeight: 700, fontSize: 14, margin: 0 }}>{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== APPLICATION TAB ===== */}
        {activeTab === "application" && (
          <div>
            {/* Intro */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h2 style={{ color: TEXT, fontSize: 20, fontWeight: 800, margin: "0 0 14px" }}>Applying Proverbs 2</h2>
              <div
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "The central question raised by Proverbs 2 is not merely &ldquo;do you want wisdom?&rdquo; but &ldquo;are you seeking it with everything you have?&rdquo; The chapter describes seeking wisdom like someone mining for silver or searching for hidden treasure &mdash; with sustained, costly, full-investment effort. This has direct implications for how we think about the spiritual disciplines that put us in the path of wisdom. Below are three frameworks for applying the chapter, followed by a personal wisdom audit." }}
              />
            </div>

            {/* Application frameworks */}
            {[
              {
                color: GOLD,
                title: "What Does Seeking Wisdom Like Silver Look Like?",
                body: "The mining metaphor of Proverbs 2:4 invites us to take stock of how we actually pursue wisdom. Mining for silver in the ancient world required geological knowledge, physical labor, specialized tools, time, and a willingness to go underground into dangerous spaces. No one found silver by walking past a hillside and glancing at it. The metaphor challenges the passive relationship many people have with spiritual formation. Sitting vaguely near the Bible is not mining. Scrolling through devotional content is not mining. Mining looks like: setting aside protected time for Scripture reading with genuine attention; bringing specific questions and problems to the text and refusing to leave until you have wrestled with what it says; seeking out wise people and asking them hard questions about your life; praying persistently and specifically for wisdom in situations where you lack it. James 1:5 makes the same point as Proverbs 2:6 from the other direction: God gives wisdom generously to those who ask &mdash; but the asking is the condition. The willingness to ask, repeatedly and specifically, is itself a form of the earnest seeking Proverbs 2 describes.",
              },
              {
                color: TEAL,
                title: "How Do Spiritual Disciplines Connect to Proverbs 2?",
                body: "The spiritual disciplines that the Christian tradition has identified &mdash; Bible reading and study, prayer, fasting, solitude, community, confession, worship &mdash; can be understood as the concrete practices of the earnest seeking described in Proverbs 2:1&ndash;4. Each discipline is a form of positioning. None of them produces wisdom through their own power; rather, each creates the conditions in which God gives what he has promised to give. Dallas Willard famously described the disciplines as a &ldquo;training&rdquo; rather than a &ldquo;trying&rdquo; &mdash; they are not ways of straining harder to be good but ways of training the whole self (mind, will, affections, body) to receive and respond to what God is doing. Proverbs 2:10 describes wisdom entering &ldquo;the heart&rdquo; and knowledge becoming &ldquo;pleasant to the soul.&rdquo; This is the goal of spiritual formation: not merely correct behavior driven by willpower, but transformed desire. The person who has received wisdom does not merely choose rightly because they must; they find the paths of wisdom genuinely delightful. This transformation of desire is not instantaneous. It is the slow work of sustained seeking, reception, and internalization &mdash; which is precisely what the disciplines accomplish over time.",
              },
              {
                color: PURPLE,
                title: "What Protections Does Wisdom Offer in Daily Life?",
                body: "Proverbs 2:12&ndash;19 describes wisdom as protective &mdash; delivering from the way of evil men and from paths that do not return. This protective function deserves practical attention. Wisdom protects primarily by shaping discernment: the ability to read people, situations, and trajectories accurately. The person with wisdom that has entered the heart (v.10) can recognize the marks of destructive character (vv.12&ndash;15) and the warning signs of paths that lead downward (vv.16&ndash;19). Practically, this suggests that wisdom protects us at the level of friendship and association. Proverbs 13:20 says &ldquo;Whoever walks with the wise becomes wise, but the companion of fools will suffer harm.&rdquo; Wisdom developed through earnest seeking includes the capacity to choose associations well &mdash; to be drawn toward those who are themselves pursuing wisdom and to recognize and maintain appropriate distance from those who have given themselves over to perversity. It also suggests that wisdom protects us at the level of desire. The person who has genuinely internalized wisdom does not find the paths of folly as attractive as someone who has not. This is not a guarantee of immunity from temptation &mdash; but it is a real protection. The transformed affections of v.10 mean that wisdom guards from within, not only through external rules.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                  <h3 style={{ color: item.color, fontWeight: 800, fontSize: 16, margin: 0 }}>{item.title}</h3>
                </div>
                <div
                  style={{ color: MUTED, fontSize: 14, lineHeight: 1.85 }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}

            {/* Wisdom Audit */}
            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>Interactive</div>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 10px" }}>Personal Wisdom Audit</h3>
              <div
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 22 }}
                dangerouslySetInnerHTML={{ __html: "Based on Proverbs 2:1&ndash;4&apos;s description of earnest seeking, rate how actively you are currently pursuing wisdom in each of the following areas. Use a scale of 1 (rarely / not at all) to 5 (consistently and deliberately). This is not a guilt exercise &mdash; it is a discernment tool, a way of honestly examining where the mining metaphor does and does not apply to your life right now." }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {AUDIT_ITEMS.map(item => (
                  <div key={item.id}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{item.label}</span>
                      <span style={{ color: item.color, fontSize: 14, fontWeight: 800 }}>{auditScores[item.id] ?? "-"}/5</span>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      {[1, 2, 3, 4, 5].map(n => (
                        <button
                          type="button"
                          key={n}
                          onClick={() => setAuditScores(s => ({ ...s, [item.id]: n }))}
                          style={{
                            flex: 1,
                            padding: "8px 0",
                            borderRadius: 8,
                            border: `1px solid ${auditScores[item.id] === n ? item.color : BORDER}`,
                            background: auditScores[item.id] === n ? `${item.color}25` : BG,
                            color: auditScores[item.id] === n ? item.color : MUTED,
                            fontWeight: auditScores[item.id] === n ? 800 : 500,
                            fontSize: 14,
                            cursor: "pointer",
                            transition: "all 0.12s",
                          }}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {Object.keys(auditScores).length >= 3 && (
                <div style={{ marginTop: 24, padding: "16px 20px", background: BG, borderRadius: 10, borderLeft: `3px solid ${GOLD}` }}>
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Reflection</div>
                  <div
                    style={{ color: MUTED, fontSize: 14, lineHeight: 1.75 }}
                    dangerouslySetInnerHTML={{ __html: "Look at where you scored lowest. Proverbs 2:1&ndash;4 describes seeking wisdom as a multi-dimensional practice &mdash; it involves receiving instruction, treasuring it, inclining the ear, applying the heart, calling out in prayer, and searching actively. A low score in one area may indicate a specific place where the earnest seeking the chapter describes is less developed. Rather than trying to improve everything at once, consider: which one area, if strengthened, would most affect your overall posture of seeking? Commit to a specific, observable practice in that area for the next 30 days." }}
                  />
                </div>
              )}
            </div>

            {/* Reflection questions */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 18px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { q: "What does it mean in your current season of life to &ldquo;incline your ear to wisdom&rdquo; (Prov 2:2)? What specific distractions or habits make inclining your ear more difficult?", color: GOLD },
                  { q: "Proverbs 2:6 says the LORD gives wisdom. How does this affect your posture when you feel you lack wisdom? Does it produce more prayer, less effort, or both?", color: GREEN },
                  { q: "Verse 10 says wisdom will &ldquo;come into your heart&rdquo; and knowledge will become &ldquo;pleasant to your soul.&rdquo; Is Bible study or wisdom-seeking pleasant to you right now, or does it feel like duty? What accounts for the difference?", color: TEAL },
                  { q: "The chapter warns about paths from which &ldquo;none who go there come back&rdquo; (v.19). Can you identify any habit, relationship, or pattern of thought in your life that Proverbs 2 might describe as a path heading in a dangerous direction?", color: PURPLE },
                  { q: "Vv.21&ndash;22 describe two final conditions: remaining in the land (flourishing) and being cut off from the land (exclusion from the good). How does this long-view perspective on wisdom affect how you think about everyday choices?", color: ROSE },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, padding: "14px 0", borderBottom: i < 4 ? `1px solid ${BORDER}` : "none" }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${item.color}20`, border: `1px solid ${item.color}50`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, fontWeight: 800, color: item.color }}>{i + 1}</div>
                    <div
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.75 }}
                      dangerouslySetInnerHTML={{ __html: item.q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Prayer guide */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 6px" }}>Praying Through Proverbs 2</h3>
              <div
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}
                dangerouslySetInnerHTML={{ __html: "The chapter is itself a model of what it is calling for &mdash; earnest, structured, attentive engagement with God&apos;s instruction. The following prayer guide uses the chapter&apos;s own structure as a framework for prayer." }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "From vv. 1-4: Cry out for wisdom", color: GOLD, text: "Lord, I call out to you for insight. I ask not out of casual interest but out of genuine need. I acknowledge that I do not have the wisdom I require for this season of my life. Teach me what I do not know. Open my ears to hear what I keep missing. Help me to receive and treasure your instruction rather than merely brushing past it." },
                  { label: "From vv. 5-8: Trust the Giver", color: GREEN, text: "You give wisdom, LORD. It comes from your mouth. I cannot generate it on my own, and I am glad I do not have to. Help me to trust your generosity rather than straining to produce what only you can give. Teach me what it means to fear you &mdash; to stand before you in honest, reverent awe &mdash; so that understanding can follow." },
                  { label: "From vv. 9-11: Pray for wisdom in the heart", color: TEAL, text: "I want wisdom not only in my head but in my heart. I want it to be so genuinely mine that it shapes what I find delightful and what I find repellent. Lord, let knowledge become pleasant to my soul. Change my appetites so that I am drawn toward righteousness and justice, not because I am trying harder but because your wisdom is genuinely at home in me." },
                  { label: "From vv. 12-19: Pray for discernment and protection", color: PURPLE, text: "Protect me, Lord, from the way of those who have given themselves over to perversity. Give me discernment to recognize destructive patterns and the wisdom to choose not to walk in them. Guard me from paths that look appealing but do not return. May your wisdom function in my life as a guard on the inside, not merely a rule on the outside." },
                  { label: "From vv. 20-22: Pray for a long-view orientation", color: ROSE, text: "Help me to make choices today with the end in mind. I want to be among those who walk in good paths, who remain rather than being cut off. Give me the long-view perspective that wisdom produces &mdash; the ability to see not just what is immediately appealing but what is ultimately good. Let me live today as someone shaped by the destination of the upright." },
                ].map((p, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 20px" }}>
                    <div style={{ color: p.color, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{p.label}</div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>{p.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Application videos */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 6px" }}>Video Teaching</h3>
              <p style={{ color: MUTED, fontSize: 14, margin: "0 0 20px", lineHeight: 1.65 }}>Further teaching on the pursuit and application of wisdom from Proverbs 2.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {videoItems.map(item => (
                  <div key={item.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <p style={{ color: GOLD, fontWeight: 700, fontSize: 14, margin: 0 }}>{item.title}</p>
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
