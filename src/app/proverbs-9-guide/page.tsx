"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

type Tab = "overview" | "themes" | "theology" | "formation" | "videos";

const VERSES = [
  {
    id: "v1",
    ref: "Proverbs 9:1-2",
    heading: "Wisdom Builds Her House",
    color: PURPLE,
    body: "The chapter opens with one of the most architecturally evocative images in all of Wisdom literature: &ldquo;Wisdom has built her house; she has hewn her seven pillars. She has slaughtered her beasts; she has mixed her wine; she has also set her table.&rdquo; Every verb is perfect-tense &mdash; completed, accomplished, ready. Wisdom is not preparing to build; she has built. She is not planning a feast; the feast is ready. This completeness matters theologically: the invitation of wisdom is not to a future possibility but to a present reality. The house is already standing. The table is already set. The question is whether the guest will come. The seven pillars (Hebrew: <em>amudim</em>) have generated enormous scholarly discussion, which will be explored in the Themes tab. The feast &mdash; meat slaughtered, wine mixed, table set &mdash; echoes the covenant meals of the Old Testament and anticipates the banquet language of Jesus (&ldquo;the kingdom of heaven is like a king who prepared a wedding banquet&rdquo;, Matthew 22:2).",
  },
  {
    id: "v2",
    ref: "Proverbs 9:3-4",
    heading: "Wisdom Sends Her Servants",
    color: GREEN,
    body: "Verse 3 describes the mechanism of Wisdom&rsquo;s invitation: &ldquo;She has sent out her young women to call from the highest places in the town: &lsquo;Whoever is simple, let him turn in here!&rsquo;&rdquo; The invitation is broadcast from the highest places &mdash; the city&rsquo;s most prominent locations. This is the opposite of a private dinner party. Wisdom&rsquo;s feast is public, universal, and specifically targeted at &ldquo;the simple&rdquo; (Hebrew: <em>peti</em>). The word <em>peti</em> describes not the wicked but the uninformed &mdash; those who lack moral and spiritual direction, who are open to influence in either direction. Wisdom and Folly both go after exactly the same demographic (compare v. 16, where Folly calls to &ldquo;whoever is simple&rdquo; in identical language). The battle of this chapter is fought over the uninstructed, the impressionable, the not-yet-formed. This is also where the church&rsquo;s mission is directed: not to those who have already decided but to those who are still being formed.",
  },
  {
    id: "v3",
    ref: "Proverbs 9:5-6",
    heading: "Come, Eat of My Bread",
    color: TEAL,
    body: "&ldquo;Come, eat of my bread and drink of the wine I have mixed. Leave your simple ways, and live, and walk in the way of insight.&rdquo; The invitation of Wisdom is both a welcome and a demand. The welcome is lavish &mdash; bread, wine, a feast already prepared. But the demand is clear: &ldquo;leave your simple ways.&rdquo; You cannot remain as you are and accept Wisdom&rsquo;s invitation. The Hebrew verb for &ldquo;leave&rdquo; (<em>azav</em>) is strong &mdash; it means to abandon, forsake, let go completely. This is not a minor adjustment but a directional change. The contrast is between &ldquo;simple ways&rdquo; and &ldquo;the way of insight.&rdquo; Wisdom is presenting two paths: the undirected, morally unformed life on one side; the life of insight, understanding, and ordered living on the other. The promise attached to accepting the invitation is the most fundamental one: &ldquo;live.&rdquo; Not merely exist but live in the full biblical sense &mdash; flourishing life in relationship with God. The parallel of this invitation with Jesus&rsquo;s invitation to the supper (&ldquo;come, for everything is now ready&rdquo;, Luke 14:17) is not accidental.",
  },
  {
    id: "v4",
    ref: "Proverbs 9:7-9",
    heading: "The Scoffer and the Wise",
    color: GOLD,
    body: "Verses 7&ndash;9 interrupt the invitation narrative to deliver a sharp practical lesson about who receives correction: &ldquo;Whoever corrects a scoffer gets himself abuse, and he who reproves a wicked man incurs injury. Do not reprove a scoffer, or he will hate you; reprove a wise man, and he will love you.&rdquo; The contrast is between the &ldquo;scoffer&rdquo; (<em>letz</em>) and the &ldquo;wise man&rdquo; (<em>chakham</em>). The scoffer is not merely wrong; he is impervious to correction. He has closed the feedback loop: rebuke only confirms his contempt. The wise man, by contrast, responds to rebuke with love &mdash; because he knows that correction is a gift, not an attack. Verse 9 adds: &ldquo;Give instruction to a wise man, and he will be still wiser; teach a righteous man, and he will increase in learning.&rdquo; Wisdom is compounding: the wise get wiser, the simple get simpler. This passage stands as a self-referential challenge to the reader: which category are you in? How do you respond when you are corrected?",
  },
  {
    id: "v5",
    ref: "Proverbs 9:10",
    heading: "The Fear of the LORD",
    color: GREEN,
    body: "&ldquo;The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding.&rdquo; Verse 10 is the pivot of the entire chapter and, arguably, the summary maxim of the book of Proverbs as a whole. The identical statement appears in Proverbs 1:7 as the book&rsquo;s foundational thesis. Its reappearance at the structural center of Proverbs 9 &mdash; the culmination of the book&rsquo;s prologue (chapters 1&ndash;9) &mdash; is deliberate. &ldquo;The fear of the LORD&rdquo; (<em>yirat YHWH</em>) is not servile terror but the reverent acknowledgment of who God is: the creator, the moral authority, the one before whom all things are accountable. It is the foundational posture of the creature before the Creator. &ldquo;The beginning&rdquo; (<em>reshit</em>) means not merely the first step but the generative source: wisdom grows from this root. Without the fear of the LORD, what passes for wisdom is merely cleverness &mdash; technical skill in navigating life without reference to the One who made life and defines its meaning. Verse 10b adds: &ldquo;knowledge of the Holy One is understanding.&rdquo; Understanding is not mere information but relational knowledge of the One who is holy.",
  },
  {
    id: "v6",
    ref: "Proverbs 9:11-12",
    heading: "Wisdom Is for Your Own Good",
    color: TEAL,
    body: "Verses 11&ndash;12 draw the personal consequences of accepting or rejecting Wisdom&rsquo;s invitation: &ldquo;For by me your days will be multiplied, and years will be added to your life. If you are wise, you are wise for yourself; if you scoff, you alone will bear it.&rdquo; The structure is elegantly symmetrical: wisdom blesses the wise; scorn destroys the scoffer. And in each case the benefit or damage is personal &mdash; &ldquo;for yourself&rdquo; and &ldquo;you alone.&rdquo; This is not merely self-interest, though it has a self-interested dimension. It is a statement about moral reality: the universe is ordered such that wisdom produces flourishing and folly produces death. This is not karma &mdash; it is the shape of a creation made by a wise Creator whose character is reflected in the structure of reality. The practical implication is liberating: seeking wisdom is not ascetic self-denial but the pursuit of genuine well-being. Proverbs consistently refuses the false dichotomy between virtue and flourishing.",
  },
  {
    id: "v7",
    ref: "Proverbs 9:13-16",
    heading: "The Woman Folly",
    color: ROSE,
    body: "The second half of the chapter introduces Folly as a personified woman who directly mirrors and parodies Wisdom. &ldquo;The woman Folly is loud; she is seductive and knows nothing. She sits at the door of her house; she takes a seat on the highest places of the town, calling to those who pass by, who are going straight on their way.&rdquo; The parallels are precise. Like Wisdom (v. 3), Folly calls from &ldquo;the highest places of the town.&rdquo; Like Wisdom (v. 4), Folly addresses &ldquo;whoever is simple.&rdquo; But the differences are equally precise. Wisdom has built a house, prepared a feast, sent out servants &mdash; her invitation involves active preparation and genuine nourishment. Folly merely sits and calls &mdash; her invitation requires nothing of her and costs her nothing to offer. Folly is &ldquo;loud&rdquo; where Wisdom is articulate. Folly is &ldquo;seductive&rdquo; where Wisdom is substantive. Folly &ldquo;knows nothing&rdquo; where Wisdom is the source of all genuine knowledge. The contrast is between a feast that truly nourishes and an offer that delivers nothing of what it promises.",
  },
  {
    id: "v8",
    ref: "Proverbs 9:17-18",
    heading: "Stolen Water and the House of the Dead",
    color: GOLD,
    body: "The chapter ends with Folly&rsquo;s enticement and its shocking consequence: &ldquo;Stolen water is sweet, and bread eaten in secret is pleasant.&rdquo; But the listener does not know (Hebrew: <em>lo yodea</em>) that &ldquo;the dead are there, that her guests are in the depths of Sheol.&rdquo; Folly&rsquo;s offer sounds appetizing &mdash; the transgressive pleasure of what is secret and stolen. The appeal is real: forbidden things carry an illicit thrill. But the person who enters Folly&rsquo;s house does not know what waits inside. The word &ldquo;Sheol&rdquo; is the Hebrew underworld &mdash; the realm of the dead, the opposite of the &ldquo;life&rdquo; promised by Wisdom in v. 6. The chapter has presented two invitations that look structurally identical &mdash; both call from high places, both target the simple, both offer food and drink &mdash; but they lead to radically different destinations. Wisdom&rsquo;s house is built on seven pillars; Folly&rsquo;s house is built on lies. The reader who has followed the chapter to its end now faces the choice with full information: which door will you enter?",
  },
];

const THEMES = [
  {
    id: "pillars",
    label: "The Seven Pillars",
    color: PURPLE,
    body: "The seven pillars of Wisdom&rsquo;s house (Proverbs 9:1) have been interpreted in at least three major ways throughout the history of interpretation. First, the <em>literary/structural</em> reading: the seven pillars represent the seven sub-sections of Proverbs 1&ndash;9, the prologue to the book. Wisdom has built the literary architecture of the book itself. Second, the <em>cosmological/creational</em> reading: the seven pillars echo the seven days of creation in Genesis 1. Wisdom, who was present at creation (&ldquo;beside him, like a master workman,&rdquo; Proverbs 8:30), builds her house on the pattern of the cosmos. Seven is the number of completion and perfection in Hebrew thought. Third, the <em>virtues/gifts</em> reading: patristic interpreters identified the seven pillars with the seven gifts of the Holy Spirit (Isaiah 11:2&ndash;3) or seven cardinal virtues. Ambrose of Milan and other church fathers read Wisdom&rsquo;s house as the church, built on the pillars of the Spirit&rsquo;s gifts. All three readings are illuminating and not mutually exclusive. What is clear is that &ldquo;seven&rdquo; is not random: Wisdom&rsquo;s house is architecturally complete, cosmologically ordered, and spiritually perfect.",
  },
  {
    id: "feast",
    label: "The Feast as Covenant Meal",
    color: GREEN,
    body: "Wisdom&rsquo;s preparation of a feast &mdash; slaughtered animals, mixed wine, set table (Proverbs 9:2) &mdash; resonates deeply with the covenant meal traditions of the Old Testament. In Exodus 24:9&ndash;11, Moses, Aaron, and the elders of Israel ascend the mountain and &ldquo;ate and drank&rdquo; in the presence of God. In Isaiah 25:6, the LORD of hosts prepares &ldquo;a feast of rich food, a feast of well-aged wine&rdquo; for all peoples on his holy mountain &mdash; an eschatological covenant meal that brings the nations into the divine presence. The connection to the New Testament is explicit: Jesus identifies himself as Wisdom at the table (Matthew 11:19, &ldquo;wisdom is justified by her deeds&rdquo;) and the Lord&rsquo;s Supper is the New Covenant feast at which bread and wine are given as participation in his body and blood. The elements of Wisdom&rsquo;s feast in Proverbs 9 &mdash; bread and wine &mdash; are the very elements of the Eucharist. This is not coincidence: Jesus the embodiment of divine Wisdom is the host of the feast that Proverbs 9 anticipates.",
  },
  {
    id: "folly",
    label: "Folly as Anti-Wisdom",
    color: ROSE,
    body: "The personification of Folly in Proverbs 9:13&ndash;18 is one of the most sophisticated literary devices in the Hebrew Bible. Folly is not the opposite of Wisdom in the sense of being her mirror image; she is a parody &mdash; an imitation that copies the external form of Wisdom&rsquo;s invitation while evacuating its substance. Both call from the high places; both address the simple; both offer food and drink. The difference is that Folly offers what does not nourish: &ldquo;stolen water&rdquo; and &ldquo;bread eaten in secret&rdquo; &mdash; the appeal of transgression without the substance of genuine provision. The theological implication is profound: evil rarely presents itself as obviously evil. The great seductions of life are seductive precisely because they mimic the good &mdash; they appeal to legitimate desires (for pleasure, belonging, knowledge, freedom) and redirect them toward what cannot satisfy. Folly succeeds not by being ugly but by appearing beautiful. This is why wisdom &mdash; the capacity to distinguish between genuine good and its counterfeit &mdash; is not a luxury but a survival skill.",
  },
  {
    id: "fear",
    label: "Fear of the LORD as Pivot",
    color: GOLD,
    body: "Proverbs 9:10 (&ldquo;The fear of the LORD is the beginning of wisdom&rdquo;) is positioned at the exact structural center of the chapter, between Wisdom&rsquo;s invitation (vv. 1&ndash;9) and Folly&rsquo;s (vv. 13&ndash;18). Its placement is interpretively significant. The choice between Wisdom and Folly is not ultimately a matter of intelligence or information; it is a matter of orientation. The person who fears the LORD is rightly oriented: she knows who she is (creature), who God is (Creator), and therefore what genuine wisdom looks like (conforming oneself to the Creator&rsquo;s design). The person who does not fear the LORD lacks this orientation &mdash; and without it, what seems wise may be folly, and what seems foolish (the cross, 1 Corinthians 1:18&ndash;25) is the deepest wisdom. Paul&rsquo;s argument in 1 Corinthians 1&ndash;2 that &ldquo;the wisdom of God is foolishness to men&rdquo; is an elaboration of Proverbs 9:10: without the fear of the LORD, the human capacity for wisdom is not merely limited but fundamentally misdirected.",
  },
  {
    id: "paths",
    label: "The Two Paths",
    color: TEAL,
    body: "The &ldquo;two ways&rdquo; or &ldquo;two paths&rdquo; motif is one of the organizing metaphors of the wisdom literature. Psalm 1 opens with the contrast between the righteous person who meditates on Torah and the wicked whose way &ldquo;will perish.&rdquo; Proverbs 4:18&ndash;19 contrasts &ldquo;the path of the righteous&rdquo; (like the light of dawn, growing brighter) with &ldquo;the way of the wicked&rdquo; (like deep darkness). In Proverbs 9, the two paths are embodied in two women making competing invitations from the same location. The genius of the chapter&rsquo;s structure is that the choice is presented as formally identical: both call from high places, both offer food, both address the simple. The choice is not between an obviously good option and an obviously bad one but between two things that look similar on the surface. This is why wisdom matters: it is the discernment to see past the surface similarity to the substantive difference in destination. The New Testament takes up this motif explicitly (Matthew 7:13&ndash;14) and Jesus himself presents it as the final question: narrow gate or wide road?",
  },
];

const videoItems = [
  { videoId: "Gvn4a01Y6tY", title: "Proverbs 9 - Two Women, Two Invitations" },
  { videoId: "ACpI0G_jEBE", title: "The Seven Pillars of Wisdom - Proverbs 9:1" },
  { videoId: "7RoqnGcEjcs", title: "The Fear of the LORD - Wisdom&apos;s Foundation in Proverbs" },
  { videoId: "kJHn6BJXJSU", title: "Jesus as Wisdom - Proverbs and the New Testament" },
];

const FORMATION = [
  {
    heading: "Accepting the Invitation",
    color: PURPLE,
    body: "Wisdom&rsquo;s feast is already prepared &mdash; the invitation is the only variable. Formation practice: identify one area of your life where you are consistently avoiding a clear invitation to wisdom. It might be a pattern of behavior you know is wrong, a relationship you have been unwilling to examine honestly, or a spiritual discipline you have postponed indefinitely. Name it. Accept the invitation this week &mdash; not when it is convenient, but now, because the feast is already set.",
  },
  {
    heading: "Becoming Teachable",
    color: GOLD,
    body: "Proverbs 9:8&ndash;9 asks a diagnostic question: are you a scoffer or a wise person? The test is not your self-assessment but your response to correction. Formation practice: recall the last time someone gave you meaningful critical feedback. How did you respond &mdash; internally, not just externally? Did you feel threatened, defensive, dismissive? Or did you receive it as a gift? Bring that response honestly to God and ask: what would it look like to become the person who &ldquo;loves&rdquo; the one who rebukes him (v. 8)?",
  },
  {
    heading: "The Fear of the LORD in Practice",
    color: GREEN,
    body: "The fear of the LORD (Proverbs 9:10) is a posture, not an emotion. It is the habitual orientation of a creature before its Creator. Formation practice: begin each morning this week with a deliberate act of re-orientation. Before opening your phone, before checking your schedule, sit for two minutes in silence and acknowledge: &ldquo;You are God. I am not. My day belongs to you.&rdquo; This is not magic; it is practice. The fear of the LORD is cultivated by repeated, deliberate acts of surrender.",
  },
  {
    heading: "Distinguishing Wisdom from Folly",
    color: TEAL,
    body: "Wisdom and Folly call from the same location and address the same audience (Proverbs 9:3, 14&ndash;15). The difference is not visible at first glance. Formation practice: identify one desire in your life that has two possible objects &mdash; one that genuinely nourishes (Wisdom&rsquo;s bread and wine) and one that merely feels transgressive or exciting (stolen water, bread in secret). Name both explicitly. Then trace each one forward: where does following this desire, over time, actually lead? Wisdom is partly defined by the capacity for this kind of moral projection.",
  },
  {
    heading: "Walking in the Way of Insight",
    color: ROSE,
    body: "Wisdom&rsquo;s invitation in Proverbs 9:6 is not only to a meal but to a way of life: &ldquo;walk in the way of insight.&rdquo; Walking implies direction, consistency, and movement &mdash; not a single decision but an ongoing orientation. Formation practice: identify one concrete &ldquo;insight&rdquo; &mdash; something you genuinely understand about yourself, God, or human life &mdash; that you are not yet walking in. The gap between understanding and walking is the spiritual frontier. Choose one small step that begins to close that gap this week.",
  },
];

export default function Proverbs9GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [selectedVerse, setSelectedVerse] = useState("v1");
  const [selectedTheme, setSelectedTheme] = useState("pillars");

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const verse = VERSES.find((v) => v.id === selectedVerse) ?? VERSES[0];
  const theme = THEMES.find((t) => t.id === selectedTheme) ?? THEMES[0];

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        background: BG,
        minHeight: "100vh",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <Navbar />
      <main id="main-content">
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "0 20px 80px" }}>

          {/* Hero */}
          <div style={{ textAlign: "center", padding: "48px 0 36px" }}>
            <div
              style={{
                display: "inline-block",
                background: `${PURPLE}18`,
                border: `1px solid ${PURPLE}40`,
                borderRadius: 30,
                padding: "4px 18px",
                fontSize: 12,
                fontWeight: 700,
                color: PURPLE,
                letterSpacing: "0.08em",
                marginBottom: 16,
                textTransform: "uppercase",
              }}
            >
              Chapter Guide
            </div>
            <h1
              style={{
                fontSize: 36,
                fontWeight: 900,
                marginBottom: 10,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Proverbs 9
            </h1>
            <p
              style={{
                color: GOLD,
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Two Great Invitations
            </p>
            <p
              style={{
                color: MUTED,
                fontSize: 15,
                maxWidth: 600,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Wisdom and Folly both call from the high places and both invite the simple to their tables.
              The question at the heart of human life is which invitation you will accept.
            </p>
          </div>

          {/* Key verse banner */}
          <div
            style={{
              background: `${PURPLE}12`,
              border: `1px solid ${PURPLE}35`,
              borderRadius: 14,
              padding: "20px 24px",
              marginBottom: 36,
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: PURPLE,
                fontSize: 14,
                fontWeight: 700,
                marginBottom: 8,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Key Verse &mdash; Proverbs 9:10
            </p>
            <p
              style={{
                color: TEXT,
                fontSize: 17,
                lineHeight: 1.75,
                fontStyle: "italic",
                margin: 0,
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding.&rdquo;",
              }}
            />
          </div>

          {/* Tab nav */}
          <div
            style={{
              display: "flex",
              gap: 6,
              marginBottom: 32,
              background: CARD,
              borderRadius: 12,
              padding: 6,
              border: `1px solid ${BORDER}`,
            }}
          >
            {(
              [
                { id: "overview" as const, label: "Verse by Verse" },
                { id: "themes" as const, label: "Key Themes" },
                { id: "theology" as const, label: "Theology" },
                { id: "formation" as const, label: "Formation" },
                { id: "videos" as const, label: "Videos" },
              ] as { id: Tab; label: string }[]
            ).map((t) => (
              <button
                type="button"
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                style={{
                  flex: 1,
                  padding: "10px 8px",
                  borderRadius: 8,
                  border: "none",
                  background: activeTab === t.id ? PURPLE : "transparent",
                  color: activeTab === t.id ? "#fff" : MUTED,
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ---- VERSE BY VERSE TAB ---- */}
          {activeTab === "overview" && (
            <div style={{ display: "flex", gap: 20 }}>
              {/* Sidebar */}
              <div style={{ width: 210, flexShrink: 0 }}>
                {VERSES.map((v) => (
                  <button
                    type="button"
                    key={v.id}
                    onClick={() => setSelectedVerse(v.id)}
                    style={{
                      width: "100%",
                      background:
                        selectedVerse === v.id ? `${v.color}14` : "transparent",
                      border: `1px solid ${
                        selectedVerse === v.id ? v.color + "50" : BORDER
                      }`,
                      borderRadius: 10,
                      padding: "10px 12px",
                      marginBottom: 6,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        color: selectedVerse === v.id ? v.color : MUTED,
                        fontWeight: 700,
                        fontSize: 11,
                        marginBottom: 3,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {v.ref}
                    </div>
                    <div
                      style={{
                        color: selectedVerse === v.id ? TEXT : MUTED,
                        fontWeight: 600,
                        fontSize: 12,
                        lineHeight: 1.4,
                      }}
                    >
                      {v.heading}
                    </div>
                  </button>
                ))}
              </div>

              {/* Main content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    background: CARD,
                    border: `1px solid ${verse.color}30`,
                    borderRadius: 14,
                    padding: 28,
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      background: `${verse.color}18`,
                      border: `1px solid ${verse.color}40`,
                      borderRadius: 20,
                      padding: "3px 14px",
                      fontSize: 12,
                      fontWeight: 700,
                      color: verse.color,
                      marginBottom: 14,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {verse.ref}
                  </div>
                  <h2
                    style={{
                      color: verse.color,
                      fontWeight: 900,
                      fontSize: 22,
                      marginBottom: 20,
                      lineHeight: 1.3,
                    }}
                  >
                    {verse.heading}
                  </h2>
                  <p
                    style={{
                      color: TEXT,
                      fontSize: 15,
                      lineHeight: 1.85,
                      margin: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: verse.body }}
                  />
                </div>

                {/* nav arrows */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 16,
                  }}
                >
                  {(() => {
                    const idx = VERSES.findIndex((v) => v.id === selectedVerse);
                    const prev = VERSES[idx - 1];
                    const next = VERSES[idx + 1];
                    return (
                      <>
                        <button
                          type="button"
                          disabled={!prev}
                          onClick={() => prev && setSelectedVerse(prev.id)}
                          style={{
                            background: prev ? CARD : "transparent",
                            border: `1px solid ${BORDER}`,
                            borderRadius: 8,
                            padding: "8px 16px",
                            color: prev ? TEXT : MUTED,
                            fontWeight: 600,
                            fontSize: 13,
                            cursor: prev ? "pointer" : "default",
                            opacity: prev ? 1 : 0.35,
                          }}
                        >
                          &larr; Previous
                        </button>
                        <button
                          type="button"
                          disabled={!next}
                          onClick={() => next && setSelectedVerse(next.id)}
                          style={{
                            background: next ? CARD : "transparent",
                            border: `1px solid ${BORDER}`,
                            borderRadius: 8,
                            padding: "8px 16px",
                            color: next ? TEXT : MUTED,
                            fontWeight: 600,
                            fontSize: 13,
                            cursor: next ? "pointer" : "default",
                            opacity: next ? 1 : 0.35,
                          }}
                        >
                          Next &rarr;
                        </button>
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          )}

          {/* ---- THEMES TAB ---- */}
          {activeTab === "themes" && (
            <div style={{ display: "flex", gap: 20 }}>
              <div style={{ width: 210, flexShrink: 0 }}>
                {THEMES.map((t) => (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => setSelectedTheme(t.id)}
                    style={{
                      width: "100%",
                      background:
                        selectedTheme === t.id ? `${t.color}14` : CARD,
                      border: `1px solid ${
                        selectedTheme === t.id ? t.color + "50" : BORDER
                      }`,
                      borderRadius: 10,
                      padding: "12px 14px",
                      marginBottom: 6,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        color: selectedTheme === t.id ? t.color : TEXT,
                        fontWeight: 700,
                        fontSize: 13,
                      }}
                    >
                      {t.label}
                    </div>
                  </button>
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  background: CARD,
                  border: `1px solid ${theme.color}30`,
                  borderRadius: 14,
                  padding: 28,
                }}
              >
                <h2
                  style={{
                    color: theme.color,
                    fontWeight: 900,
                    fontSize: 22,
                    marginBottom: 20,
                  }}
                >
                  {theme.label}
                </h2>
                <p
                  style={{
                    color: TEXT,
                    fontSize: 15,
                    lineHeight: 1.85,
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: theme.body }}
                />
              </div>
            </div>
          )}

          {/* ---- THEOLOGY TAB ---- */}
          {activeTab === "theology" && (
            <div>
              {[
                {
                  heading: "Jesus as Wisdom Incarnate",
                  ref: "Matthew 11:19 / John 1:1-14",
                  color: PURPLE,
                  body: "The New Testament&rsquo;s identification of Jesus with the divine Wisdom of Proverbs is one of the most profound theological moves in Scripture. In Matthew 11:19, Jesus says &ldquo;wisdom is justified by her deeds&rdquo; &mdash; applying the language of personified Wisdom directly to himself. In 1 Corinthians 1:24, Paul calls Christ &ldquo;the power of God and the wisdom of God.&rdquo; Colossians 2:3 says that in Christ &ldquo;are hidden all the treasures of wisdom and knowledge.&rdquo; This means that Wisdom&rsquo;s invitation in Proverbs 9 is, for the New Testament reader, the invitation of Christ himself. When Wisdom says &ldquo;come, eat of my bread and drink of the wine I have mixed&rdquo; (v. 5), the Eucharistic resonance is not accidental but typological. Jesus is the feast that Wisdom prepared. His body is the bread; his blood is the wine. The seven-pillared house that Wisdom built is the church, built on the apostles and prophets with Christ himself as the cornerstone (Ephesians 2:20).",
                },
                {
                  heading: "Wisdom&rsquo;s Feast as Lord&rsquo;s Supper",
                  ref: "Proverbs 9:2 / Luke 22:19-20",
                  color: GREEN,
                  body: "The eucharistic reading of Proverbs 9:1&ndash;5 has a long history in Christian interpretation. Justin Martyr (c. 150 AD) and Irenaeus of Lyons both connected Wisdom&rsquo;s feast &mdash; mixed wine, set table, prepared bread &mdash; to the Eucharist. The Syriac tradition went further, using Proverbs 9 as a direct scriptural warrant for the Lord&rsquo;s Supper. The argument is not forced: the elements match (bread and wine), the invitation matches (&ldquo;come, eat&rdquo; / &ldquo;take, eat&rdquo;), and the result matches (life &mdash; Proverbs 9:6 / &ldquo;whoever feeds on my flesh and drinks my blood has eternal life&rdquo; &mdash; John 6:54). What Proverbs 9 presents as the great eschatological feast of Wisdom, the New Testament presents as inaugurated in the Lord&rsquo;s Supper and to be consummated at the marriage supper of the Lamb (Revelation 19:9). The church&rsquo;s weekly Eucharist is the practice of attending Wisdom&rsquo;s feast while the world is still attending Folly&rsquo;s.",
                },
                {
                  heading: "The Seven Pillars and the Spirit",
                  ref: "Isaiah 11:2-3 / Proverbs 9:1",
                  color: GOLD,
                  body: "Isaiah 11:2&ndash;3 lists seven gifts of the Spirit resting on the messianic servant: the spirit of wisdom and understanding, the spirit of counsel and might, the spirit of knowledge and the fear of the LORD. The connection between these seven gifts and the seven pillars of Wisdom&rsquo;s house (Proverbs 9:1) was made by Ambrose of Milan (c. 340&ndash;397) and became a standard feature of patristic and medieval commentary. The logic is elegant: Wisdom builds her house on seven pillars (Proverbs 9:1); the Spirit of wisdom rests on the Messiah in seven modes (Isaiah 11:2&ndash;3); therefore the pillars of Wisdom&rsquo;s house are the gifts of the Spirit that constitute the messianic community. This reading unifies the Old Testament wisdom tradition, the messianic prophecy of Isaiah, and the New Testament pneumatology: the Spirit who equipped Jesus is the same Spirit who builds the church as Wisdom&rsquo;s house, equipping its members with the seven gifts for life and ministry.",
                },
                {
                  heading: "The Fear of the LORD in the New Testament",
                  ref: "Proverbs 9:10 / 1 Corinthians 1:18-25",
                  color: TEAL,
                  body: "Paul&rsquo;s argument in 1 Corinthians 1&ndash;2 that the cross is &ldquo;foolishness to those who are perishing&rdquo; (1:18) is a New Testament elaboration of Proverbs 9:10. The &ldquo;wisdom of the world&rdquo; that regards the cross as nonsense is precisely the wisdom that lacks the fear of the LORD &mdash; the wisdom that evaluates reality without reference to the Creator&rsquo;s perspective. Conversely, &ldquo;the wisdom of God&rdquo; that sees the cross as the highest expression of divine power and love is the wisdom that begins with the fear of the LORD. Paul&rsquo;s contrast is not between intelligence and stupidity but between two epistemological starting points: the creature who places herself at the center vs. the creature who places God at the center. The fear of the LORD is not a religious feeling; it is the willingness to reason from God outward rather than from the self outward. Everything else follows from this epistemological posture.",
                },
              ].map((section, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${section.color}25`,
                    borderRadius: 14,
                    padding: 26,
                    marginBottom: 18,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 14,
                      gap: 12,
                    }}
                  >
                    <h3
                      style={{
                        color: section.color,
                        fontWeight: 800,
                        fontSize: 18,
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {section.heading}
                    </h3>
                    <span
                      style={{
                        background: `${section.color}15`,
                        color: section.color,
                        padding: "3px 12px",
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 700,
                        flexShrink: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {section.ref}
                    </span>
                  </div>
                  <p
                    style={{
                      color: TEXT,
                      fontSize: 15,
                      lineHeight: 1.85,
                      margin: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: section.body }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* ---- FORMATION TAB ---- */}
          {activeTab === "formation" && (
            <div>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: 26,
                  marginBottom: 28,
                }}
              >
                <h2
                  style={{
                    color: PURPLE,
                    fontWeight: 800,
                    fontSize: 22,
                    marginBottom: 10,
                  }}
                >
                  Spiritual Formation from Proverbs 9
                </h2>
                <p
                  style={{
                    color: MUTED,
                    fontSize: 14,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Proverbs 9 is not primarily a chapter about information; it is a chapter about invitation. Wisdom has already prepared the feast. The formation question is not &ldquo;do you know about wisdom?&rdquo; but &ldquo;have you accepted the invitation, and are you walking in the way it opens?&rdquo;",
                  }}
                />
              </div>
              {FORMATION.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${item.color}25`,
                    borderLeft: `4px solid ${item.color}`,
                    borderRadius: 12,
                    padding: 22,
                    marginBottom: 16,
                  }}
                >
                  <h3
                    style={{
                      color: item.color,
                      fontWeight: 800,
                      fontSize: 16,
                      marginBottom: 12,
                    }}
                  >
                    {item.heading}
                  </h3>
                  <p
                    style={{
                      color: TEXT,
                      fontSize: 14,
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* ---- VIDEOS TAB ---- */}
          {activeTab === "videos" && (
            <div>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: 26,
                  marginBottom: 28,
                }}
              >
                <h2
                  style={{
                    color: PURPLE,
                    fontWeight: 800,
                    fontSize: 22,
                    marginBottom: 8,
                  }}
                >
                  Video Teachings
                </h2>
                <p
                  style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Selected teachings on Proverbs 9 &mdash; Wisdom&rsquo;s feast, the seven pillars, the fear of the LORD, and Jesus as divine Wisdom incarnate.",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {videoItems.map((v) => (
                  <div
                    key={v.videoId}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 18px" }}>
                      <h4
                        style={{
                          color: PURPLE,
                          fontWeight: 700,
                          fontSize: 16,
                          margin: "0 0 4px",
                        }}
                      >
                        {v.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
