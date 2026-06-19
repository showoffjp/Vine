"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

type Html = { __html: string };
const h = (s: string): Html => ({ __html: s });

const STRUCTURE = [
  {
    title: "1. The Desperate Plea to Be Heard (vv. 1&ndash;2)",
    color: ROSE,
    body:
      "The psalm opens with a fivefold cry for God&rsquo;s attention. &ldquo;Hear my prayer, O LORD; let my cry come to you! Do not hide your face from me in the day of my distress! Incline your ear to me; answer me speedily in the day when I call!&rdquo; The sufferer is not asking for a polished hearing in some distant future; he begs God to act &mdash; and to act <em>quickly</em> &mdash; before strength gives out entirely.",
  },
  {
    title: "2. The Wasting of a Withering Life (vv. 3&ndash;11)",
    color: GOLD,
    body:
      "The longest section pours out the affliction in vivid images. &ldquo;My days pass away like smoke, and my bones burn like a furnace&hellip; I am like a desert owl of the wilderness, like an owl of the waste places; I lie awake; I am like a lonely sparrow on the housetop.&rdquo; The body fails, sleep flees, food is forgotten, and the days lengthen &ldquo;like an evening shadow.&rdquo; This is the language of a life draining away.",
  },
  {
    title: "3. The Eternal, Unchanging King (vv. 12&ndash;22)",
    color: TEAL,
    body:
      "The psalm pivots on a single mighty word: &ldquo;But you, O LORD, are enthroned forever; you are remembered throughout all generations.&rdquo; Against the withering of one fleeting life stands the permanence of God. From this stability flows hope: &ldquo;the LORD will build up Zion; he will appear in his glory; he will regard the prayer of the destitute and will not despise their prayer&rdquo; &mdash; a hope written down &ldquo;for a generation to come.&rdquo;",
  },
  {
    title: "4. The Foundation That Will Not Pass Away (vv. 23&ndash;28)",
    color: GREEN,
    body:
      "The sufferer returns to his own short days &mdash; &ldquo;he has broken my strength&hellip; O my God, take me not away in the midst of my days&rdquo; &mdash; but anchors them to the God whose years &ldquo;endure throughout all generations.&rdquo; The closing meditation soars: &ldquo;Of old you laid the foundation of the earth&hellip; they will perish, but you will remain&hellip; you are the same, and your years have no end.&rdquo; The psalm ends with a promise that &ldquo;the children of your servants shall dwell secure.&rdquo;",
  },
];

const CONTEXT = [
  {
    title: "A Prayer of the Afflicted",
    color: PURPLE,
    body:
      "Psalm 102 carries one of the longest titles in the Psalter: &ldquo;A Prayer of one afflicted, when he is faint and pours out his complaint before the LORD.&rdquo; This superscription frames the whole psalm. It is not a calm theological essay but a raw, faint-hearted pouring out of grief &mdash; and yet it is named a <em>prayer</em>, addressed God-ward from beginning to end.",
  },
  {
    title: "The Fifth Penitential Psalm",
    color: ROSE,
    body:
      "The church has long counted Psalm 102 among the seven Penitential Psalms (6, 32, 38, 51, 102, 130, 143) &mdash; prayers used historically in seasons of repentance and especially in Lent. Though its language is more lament than confession, it belongs to this group because of its deep humbling of the soul before God and its honest acknowledgment of human frailty and need.",
  },
  {
    title: "Written for a Generation to Come",
    color: GOLD,
    body:
      "The psalmist explicitly intends his words to outlive his own crisis: &ldquo;Let this be recorded for a generation to come, so that a people yet to be created may praise the LORD&rdquo; (v. 18). Many readers hear in the psalm the voice of the exile, longing for the rebuilding of Zion. The personal lament is woven into the larger hope of God&rsquo;s restorative purposes for his people across the generations.",
  },
  {
    title: "Quoted of Christ in Hebrews 1",
    color: TEAL,
    body:
      "The closing meditation on God&rsquo;s eternity (vv. 25&ndash;27) is quoted directly in Hebrews 1:10&ndash;12 and applied to the <em>Son</em>. The words first addressed to &ldquo;the LORD&rdquo; are heard as addressed to Christ, making this psalm a witness to his deity and eternity &mdash; the unchanging Creator who laid the foundation of the earth and whose years have no end.",
  },
];

const THEMES = [
  {
    id: "heard",
    title: "The Desperate Plea to Be Heard Quickly",
    color: ROSE,
    body:
      "&ldquo;Hear my prayer, O LORD; let my cry come to you! Do not hide your face from me in the day of my distress&hellip; answer me speedily in the day when I call!&rdquo; (vv. 1&ndash;2). The affliction is urgent, and so is the prayer. The psalmist cannot bear a hidden face or a delayed answer; he needs God <em>now</em>, in the very day of distress. This is faith under pressure &mdash; not the patient calm of full strength but the gasping cry of one whose days are running out. Even at its faintest, faith still cries upward and still asks to be heard.",
    refs: "Psalm 27:9; Psalm 69:17; Psalm 143:7; Psalm 13:1&ndash;3",
  },
  {
    id: "wasting",
    title: "The Wasting of a Fleeting Life",
    color: GOLD,
    body:
      "&ldquo;For my days pass away like smoke, and my bones burn like a furnace. My heart is struck down like grass and has withered&hellip; I am like a desert owl of the wilderness, like an owl of the waste places; I lie awake; I am like a lonely sparrow on the housetop&rdquo; (vv. 3&ndash;7). The images are unforgettable: smoke that vanishes, grass that withers, the solitary night-bird in the ruins, the lone sparrow on the roof. The psalmist&rsquo;s life feels as fleeting and frail as &ldquo;an evening shadow.&rdquo; Scripture does not hide such honesty; it gives the suffering soul words for its weakness.",
    refs: "Job 7:6&ndash;7; Psalm 90:5&ndash;6; James 4:14; Isaiah 40:6&ndash;8",
  },
  {
    id: "eternal",
    title: "The LORD Enthroned Forever",
    color: TEAL,
    body:
      "&ldquo;But you, O LORD, are enthroned forever; you are remembered throughout all generations&rdquo; (v. 12). The whole psalm turns on this &ldquo;but you.&rdquo; Over against the withering of one short life stands the unchanging permanence of God. The sufferer finds his comfort not in the removal of suffering but in the stability of the One who never wastes away. The throne does not totter; the King does not fade. This is the rock beneath the lament &mdash; an eternal God who outlasts every distress.",
    refs: "Psalm 9:7; Psalm 90:1&ndash;2; Lamentations 5:19; Hebrews 13:8",
  },
  {
    id: "zion",
    title: "Hope for Zion and the Destitute",
    color: PURPLE,
    body:
      "&ldquo;You will arise and have pity on Zion&hellip; the LORD will build up Zion; he will appear in his glory; he will regard the prayer of the destitute and will not despise their prayer&rdquo; (vv. 13, 16&ndash;17). The personal lament widens into corporate hope. The same God who is enthroned forever stoops to the destitute and will not despise their prayer. He will rebuild what lies in ruins and reveal his glory. The psalmist records this hope &ldquo;for a generation to come&rdquo; &mdash; his private cry becomes a deposit of hope for a people yet to be created.",
    refs: "Isaiah 40:1&ndash;2; Psalm 69:33; Psalm 51:18; Isaiah 61:1&ndash;3",
  },
  {
    id: "unchanging",
    title: "The Unchanging Creator, the Same Forever",
    color: GREEN,
    body:
      "&ldquo;Of old you laid the foundation of the earth, and the heavens are the work of your hands. They will perish, but you will remain; they will all wear out like a garment&hellip; but you are the same, and your years have no end&rdquo; (vv. 25&ndash;27). Heaven and earth are pictured as a garment that wears out and is changed; God alone is the Tailor who never wears thin. He is &ldquo;the same.&rdquo; Hebrews 1:10&ndash;12 applies these very words to Christ, the eternal Son and Creator &mdash; the unchanging ground on which every fleeting life may finally rest.",
    refs: "Hebrews 1:10&ndash;12; Malachi 3:6; John 1:1&ndash;3; Colossians 1:16&ndash;17",
  },
];

const VERSES = [
  {
    id: "v1-2",
    ref: "Psalm 102:1&ndash;2",
    title: "Hear My Prayer, Answer Me Speedily",
    color: ROSE,
    body:
      "&ldquo;Hear my prayer, O LORD; let my cry come to you! Do not hide your face from me in the day of my distress! Incline your ear to me; answer me speedily in the day when I call!&rdquo; The psalm opens with a flurry of urgent petitions. The afflicted one does not begin with explanation but with raw need: be heard, be near, do not hide, answer <em>quickly</em>. Strength is failing, and there is no time for delay. Yet every verb is directed God-ward &mdash; the very act of crying out is an act of faith that the LORD hears the destitute.",
  },
  {
    id: "v3-11",
    ref: "Psalm 102:3&ndash;11",
    title: "My Days Pass Away Like Smoke",
    color: GOLD,
    body:
      "&ldquo;For my days pass away like smoke, and my bones burn like a furnace. My heart is struck down like grass and has withered&hellip; I am like a desert owl of the wilderness, like an owl of the waste places; I lie awake; I am like a lonely sparrow on the housetop&hellip; my days are like an evening shadow; I wither away like grass.&rdquo; This long lament heaps image on image to convey a life draining away &mdash; smoke, fever, withered grass, the night-bird among ruins, the solitary sparrow, the lengthening shadow. Sleep, appetite, and strength have all fled. The honesty is striking: Scripture gives suffering a voice instead of demanding a smile.",
  },
  {
    id: "v12-17",
    ref: "Psalm 102:12&ndash;17",
    title: "But You, O LORD, Are Enthroned Forever",
    color: TEAL,
    body:
      "&ldquo;But you, O LORD, are enthroned forever; you are remembered throughout all generations. You will arise and have pity on Zion&hellip; the LORD will build up Zion; he will appear in his glory; he will regard the prayer of the destitute and will not despise their prayer.&rdquo; The mighty &ldquo;but you&rdquo; turns the whole psalm. Against the withering of one life stands the eternal throne of God. From his permanence flows confident hope: he will arise, build up Zion, appear in glory, and &mdash; tenderly &mdash; he will not despise the prayer of the destitute. The eternal King bends down to the broken.",
  },
  {
    id: "v18-22",
    ref: "Psalm 102:18&ndash;22",
    title: "Recorded for a Generation to Come",
    color: PURPLE,
    body:
      "&ldquo;Let this be recorded for a generation to come, so that a people yet to be created may praise the LORD: that he looked down from his holy height; from heaven the LORD looked at the earth, to hear the groans of the prisoners&hellip; that they may declare in Zion the name of the LORD.&rdquo; The psalmist deliberately writes for the future. His crisis becomes a testimony for a people not yet born. The God enthroned on high &ldquo;looked down&rdquo; to hear the groaning prisoner &mdash; the height of his majesty matched by the depth of his attention &mdash; so that future generations would gather in Zion to praise his name.",
  },
  {
    id: "v23-28",
    ref: "Psalm 102:23&ndash;28",
    title: "You Are the Same, Your Years Have No End",
    color: GREEN,
    body:
      "&ldquo;He has broken my strength&hellip; &lsquo;O my God,&rsquo; I say, &lsquo;take me not away in the midst of my days &mdash; you whose years endure throughout all generations!&rsquo; Of old you laid the foundation of the earth&hellip; they will perish, but you will remain; they will all wear out like a garment&hellip; but you are the same, and your years have no end. The children of your servants shall dwell secure.&rdquo; The sufferer&rsquo;s short days are set beside God&rsquo;s endless years. Heaven and earth wear out like clothing; God alone never changes. Hebrews 1:10&ndash;12 hears these words spoken to Christ. And on this unchanging Creator rests the final promise: the children of his servants shall dwell secure.",
  },
];

const APPLICATIONS = [
  {
    title: "Pour Out Your Complaint &mdash; Honestly",
    color: ROSE,
    body:
      "Psalm 102 is titled the prayer of one who &ldquo;pours out his complaint before the LORD.&rdquo; You do not have to tidy up your grief before you bring it to God. When you are faint, when your days feel like smoke, when sleep has fled and you feel like a lonely sparrow on a rooftop, you may say so &mdash; out loud, in prayer. The psalm gives the afflicted permission to be honest. God is not put off by an unvarnished lament; he invites it.",
  },
  {
    title: "Anchor in God&rsquo;s Permanence, Not in Relief",
    color: TEAL,
    body:
      "Notice where the psalmist finds comfort. It is not in the removal of his suffering &mdash; his days are still short, his strength still broken &mdash; but in the words &ldquo;But you, O LORD, are enthroned forever.&rdquo; When your circumstances refuse to change, look away from them to the God who never changes. The stability you crave is not finally in your situation but in the eternal King who outlasts every storm.",
  },
  {
    title: "Let Your Suffering Serve a Generation to Come",
    color: PURPLE,
    body:
      "The psalmist wrote his lament down &ldquo;for a generation to come&hellip; a people yet to be created.&rdquo; Your trials are not wasted. The way God meets you in the depths can become testimony, encouragement, and hope for others &mdash; your children, your church, believers you will never meet. Record how God has heard you; let the destitute who come after you find courage in the same God who did not despise your prayer.",
  },
  {
    title: "Rest on the Christ Who Is the Same",
    color: GREEN,
    body:
      "Hebrews 1 takes the psalm&rsquo;s closing words &mdash; &ldquo;you are the same, and your years have no end&rdquo; &mdash; and applies them to Jesus. The Son who laid the foundation of the earth is the same yesterday, today, and forever (Hebrews 13:8). In a world that wears out like a garment, build your security on the unchanging Christ. The children of his servants shall dwell secure, not because life is stable, but because their God is.",
  },
];

const REFLECTION = [
  "The psalm is &ldquo;a prayer of one afflicted&hellip; when he&hellip; pours out his complaint.&rdquo; When you suffer, do you tend to bottle it up or pour it out before God? What keeps you from praying as honestly as this psalmist?",
  "Which of the psalm&rsquo;s images of frailty &mdash; smoke, withered grass, the night-bird in the ruins, the lonely sparrow, the evening shadow &mdash; speaks most to a season you have known? Why?",
  "The whole psalm turns on &ldquo;But you, O LORD, are enthroned forever&rdquo; (v. 12). What changes in your heart when you shift your gaze from your fleeting circumstances to God&rsquo;s permanence?",
  "Verse 17 says God &ldquo;will regard the prayer of the destitute and will not despise their prayer.&rdquo; Do you truly believe God welcomes the prayers of the weakest and lowest? How would believing it change the way you pray?",
  "The psalmist wrote &ldquo;for a generation to come.&rdquo; Who might be encouraged by hearing how God has met you in your own affliction? Is there a testimony you could record or share?",
  "Hebrews 1 applies &ldquo;you are the same, and your years have no end&rdquo; to Jesus. How does the unchanging eternity of Christ steady you in a world that is constantly wearing out and changing?",
];

const PRAYER =
  "O LORD, hear my prayer, and let my cry come to you; do not hide your face from me in the day of my distress. My days pass away like smoke and my strength is faint, but you, O LORD, are enthroned forever, remembered throughout all generations. You laid the foundation of the earth, and the heavens are the work of your hands; they will perish, but you remain; you are the same, and your years have no end. Regard the prayer of this destitute heart, and do not despise it. Build up your Zion, appear in your glory, and let me and the generations to come dwell secure in you. Through Jesus Christ, the unchanging Son in whom all things hold together, I pray. Amen.";

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 102: A Prayer of the Afflicted" },
  { videoId: "Q2oNOlXzBhY", title: "But You, O LORD, Are Enthroned Forever" },
  { videoId: "8phkAg8PMHE", title: "You Are the Same &mdash; Psalm 102 and Hebrews 1" },
  { videoId: "fNk_zzaMoSs", title: "Hope for the Destitute: Building Up Zion" },
];

const RELATED = [
  { label: "Psalm 130 Guide", href: "/psalm-130-guide" },
  { label: "Psalm 143 Guide", href: "/psalm-143-guide" },
  { label: "Biblical Lament", href: "/lament-guide" },
  { label: "The Eternity of God", href: "/attributes-of-god-guide" },
];

export default function Psalm102Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const card = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    padding: "1.5rem",
  } as const;

  const accordionBtn = (isOpen: boolean, color: string) => ({
    width: "100%",
    textAlign: "left" as const,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 1.25rem",
    background: isOpen ? `${color}12` : "transparent",
    border: `1px solid ${isOpen ? color + "40" : BORDER}`,
    borderRadius: 12,
    cursor: "pointer",
    marginBottom: 8,
    color: TEXT,
    fontWeight: 700,
    transition: "all .2s",
  });

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: ROSE, textTransform: "uppercase" }}>
              Penitential Psalms
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Psalm 102: A Prayer of the Afflicted
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            The fifth of the seven Penitential Psalms &mdash; the prayer of one who is faint and pours out his complaint
            before the LORD, moving from a withering, fleeting life to the eternal, unchanging God whose years have no end.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              background: `${ROSE}10`,
              border: `1px solid ${ROSE}30`,
              borderLeft: `3px solid ${ROSE}`,
              borderRadius: 12,
              padding: "1.25rem 1.5rem",
            }}
          >
            <div style={{ fontWeight: 800, color: ROSE, fontSize: "0.85rem", marginBottom: "0.4rem" }}>
              Key Verse &mdash; Psalm 102:25&ndash;27
            </div>
            <p
              style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}
              dangerouslySetInnerHTML={h(
                "&ldquo;Of old you laid the foundation of the earth, and the heavens are the work of your hands. They will perish, but you will remain&hellip; but you are the same, and your years have no end.&rdquo;"
              )}
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTab(t);
                setOpen(null);
              }}
              style={{
                padding: "0.5rem 1.1rem",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: "0.82rem",
                background: tab === t ? ROSE : "transparent",
                color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? ROSE : BORDER}`,
                cursor: "pointer",
                transition: "all .18s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: ROSE }}>Summary</h2>
              <p
                style={{ color: MUTED, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={h(
                  "Psalm 102 is the prayer of an afflicted soul pouring out its complaint before God. It begins with an urgent plea to be heard quickly, before strength fails; it pours out the wasting of a fleeting life in unforgettable images &mdash; smoke, withered grass, the lonely sparrow on the housetop, the lengthening evening shadow; then it pivots on a single mighty word, &ldquo;But you, O LORD, are enthroned forever.&rdquo; From God&rsquo;s permanence flows hope that he will build up Zion and regard the prayer of the destitute, a hope recorded for a generation to come. The psalm closes with a soaring meditation on God&rsquo;s eternity &mdash; the unchanging Creator who remains when heaven and earth wear out like a garment &mdash; words that Hebrews 1 applies to Christ himself."
                )}
              />
            </div>

            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GOLD }}>Structure</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {STRUCTURE.map((s) => (
                  <div
                    key={s.title}
                    style={{
                      background: `${s.color}08`,
                      border: `1px solid ${s.color}25`,
                      borderRadius: 12,
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <div
                      style={{ fontWeight: 800, color: s.color, marginBottom: "0.4rem" }}
                      dangerouslySetInnerHTML={h(s.title)}
                    />
                    <p
                      style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}
                      dangerouslySetInnerHTML={h(s.body)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...card }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: PURPLE }}>
                Background and Context
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {CONTEXT.map((c) => (
                  <div key={c.title}>
                    <h3
                      style={{ fontWeight: 800, color: c.color, marginBottom: "0.4rem", fontSize: "1.02rem" }}
                      dangerouslySetInnerHTML={h(c.title)}
                    />
                    <p
                      style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}
                      dangerouslySetInnerHTML={h(c.body)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: GOLD }}>Key Themes</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Five great movements run through this psalm &mdash; from the desperate cry of the afflicted to the
              meditation on the unchanging Creator. Expand each to explore the theme and its cross-references.
            </p>
            {THEMES.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id}>
                  <button type="button" style={accordionBtn(isOpen, item.color)} onClick={() => toggle(item.id)}>
                    <span>{item.title}</span>
                    <span style={{ color: item.color }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        background: `${item.color}0A`,
                        border: `1px solid ${item.color}20`,
                        borderRadius: 10,
                        padding: "1rem 1.25rem",
                        marginBottom: 8,
                      }}
                    >
                      <p
                        style={{ color: MUTED, lineHeight: 1.7, marginTop: 0 }}
                        dangerouslySetInnerHTML={h(item.body)}
                      />
                      <div
                        style={{ color: item.color, fontStyle: "italic", fontSize: "0.85rem", marginTop: "0.75rem" }}
                        dangerouslySetInnerHTML={h("Cross-references: " + item.refs)}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "verse" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: TEAL }}>
              Verse by Verse
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Walk through Psalm 102 in its five natural movements. Expand each section to read the text and a brief
              commentary.
            </p>
            {VERSES.map((v) => {
              const isOpen = open === v.id;
              return (
                <div key={v.id}>
                  <button type="button" style={accordionBtn(isOpen, v.color)} onClick={() => toggle(v.id)}>
                    <span style={{ fontWeight: 800 }}>
                      <span dangerouslySetInnerHTML={h(v.ref)} />{" "}
                      <span style={{ fontWeight: 400, color: MUTED }}>&mdash; {v.title}</span>
                    </span>
                    <span style={{ color: v.color }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        background: `${v.color}0A`,
                        border: `1px solid ${v.color}20`,
                        borderRadius: 10,
                        padding: "1rem 1.25rem",
                        marginBottom: 8,
                      }}
                    >
                      <p
                        style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}
                        dangerouslySetInnerHTML={h(v.body)}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "application" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GREEN }}>
                Living the Psalm
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {APPLICATIONS.map((a) => (
                  <div
                    key={a.title}
                    style={{
                      background: `${a.color}08`,
                      border: `1px solid ${a.color}25`,
                      borderLeft: `3px solid ${a.color}`,
                      borderRadius: 12,
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <h3
                      style={{ fontWeight: 800, color: a.color, marginBottom: "0.4rem", fontSize: "1.02rem" }}
                      dangerouslySetInnerHTML={h(a.title)}
                    />
                    <p
                      style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}
                      dangerouslySetInnerHTML={h(a.body)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: PURPLE }}>
                Questions for Reflection
              </h2>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {REFLECTION.map((q, i) => (
                  <li
                    key={i}
                    style={{ color: MUTED, lineHeight: 1.7 }}
                    dangerouslySetInnerHTML={h(q)}
                  />
                ))}
              </ol>
            </div>

            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: ROSE }}>
                Video Teaching
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <div key={v.videoId}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div
                      style={{ color: MUTED, fontSize: "0.85rem", marginTop: "0.5rem", fontWeight: 600 }}
                      dangerouslySetInnerHTML={h(v.title)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                ...card,
                background: `${GOLD}0C`,
                border: `1px solid ${GOLD}30`,
              }}
            >
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: GOLD }}>
                A Closing Prayer
              </h2>
              <p
                style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}
                dangerouslySetInnerHTML={h(PRAYER)}
              />
            </div>
          </div>
        )}

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {RELATED.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: 999,
                fontSize: "0.82rem",
                fontWeight: 700,
                border: `1px solid ${BORDER}`,
                color: MUTED,
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
