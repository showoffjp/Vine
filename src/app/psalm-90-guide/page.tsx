"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Eternal God, Fleeting Man",
  "Mortality and Wrath",
  "A Prayer for Mercy",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Overview",
    heading: "A Prayer of Moses, the Man of God",
    reference: "Psalm 90",
    paragraphs: [
      "Psalm 90 bears a singular heading: &ldquo;A Prayer of Moses, the man of God.&rdquo; It is the only psalm attributed to Moses, and likely the oldest poem in the entire Psalter. Composed by the great leader who watched a whole generation perish in the wilderness, it carries the weight of one who knew mortality not as an abstraction but as the daily reality of his people&rsquo;s journey.",
      "The psalm opens by contrasting the eternity of God with the brevity and frailty of human life (vv.1&ndash;6). Before the mountains were brought forth, before the earth was formed, God is. A thousand years in his sight are but as yesterday. Against this measureless permanence, human life is swept away like a flood, like a dream, like grass that springs up in the morning and withers by night.",
      "From this contrast the psalm moves to sober reflection on human sin under God&rsquo;s wrath and the shortness of our days (vv.7&ndash;12). Moses connects the brevity of life directly to sin and divine judgment, refusing to treat death as a mere fact of nature. Yet this hard reflection turns toward wisdom in the pivotal petition: &ldquo;So teach us to number our days that we may get a heart of wisdom.&rdquo;",
      "Finally the psalm ends with a heartfelt prayer for God&rsquo;s mercy, satisfaction, and the establishment of the work of our hands (vv.13&ndash;17). &ldquo;Satisfy us in the morning with your steadfast love&rdquo; gives way to one of the most beloved petitions in Scripture: &ldquo;Establish the work of our hands upon us; yes, establish the work of our hands!&rdquo; The longing for lasting meaning rises out of the awareness of fleeting life.",
      "What makes Psalm 90 so profound is its refusal to flinch from mortality while still reaching out in hope. It does not offer cheap comfort or deny the reality of death and judgment. Instead it places the brevity of human life squarely before the eternity of God and asks what wisdom such a contrast should produce.",
      "The psalm is a meditation on mortality, eternity, and the longing for meaning under God. It teaches that a clear-eyed reckoning with our own finitude, far from leading to despair, can become the doorway to wisdom, to a right valuing of our days, and to a prayer that the eternal God would lend lasting significance to our brief and fragile labors.",
    ],
  },
  {
    id: "Eternal God, Fleeting Man",
    heading: "The Eternal God and Fleeting Man",
    reference: "Psalm 90:1&ndash;6",
    paragraphs: [
      "The psalm begins by grounding human life in the abiding shelter of God. &ldquo;Lord, you have been our dwelling place in all generations.&rdquo; Before any reflection on frailty or sin, Moses establishes that across every generation, in the wilderness and beyond, God himself has been the home of his people. The eternal God is not distant but the very place in which mortal life finds its refuge.",
      "From this anchor the psalm soars to the heights of God&rsquo;s eternity. &ldquo;Before the mountains were brought forth, or ever you had formed the earth and the world, from everlasting to everlasting you are God.&rdquo; The most ancient and enduring things in creation &mdash; the mountains, the earth itself &mdash; had a beginning, but God did not. He stretches from everlasting to everlasting, without origin and without end.",
      "God&rsquo;s relationship to time is unlike anything in human experience. &ldquo;For a thousand years in your sight are but as yesterday when it is past, or as a watch in the night.&rdquo; What seems to us an immense span of history is to God like a single day already gone, or like a brief watch in the darkness. His timelessness frames everything that follows in the psalm.",
      "Against this backdrop, human life is shown to be vanishingly brief. &ldquo;You sweep them away as with a flood; they are like a dream, like grass that is renewed in the morning.&rdquo; Life is carried off as suddenly as a flash flood sweeps away whatever lies in its path, as insubstantial as a dream that fades on waking.",
      "The image of grass deepens the sense of frailty. &ldquo;In the morning it flourishes and is renewed; in the evening it fades and withers.&rdquo; In a single day the grass passes from vigor to death. So too human life, however full of promise in its morning, moves swiftly toward its evening. The contrast with the eternal God could hardly be sharper.",
      "The vast gulf between the eternal Creator and his fragile creatures sets the tone for the sober reflection that follows. Moses does not present this contrast to crush, but to clarify. To see rightly who God is and who we are &mdash; the everlasting One and the fading grass &mdash; is the necessary starting point for the wisdom and the prayer toward which the whole psalm moves.",
    ],
  },
  {
    id: "Mortality and Wrath",
    heading: "Mortality Under God's Wrath",
    reference: "Psalm 90:7&ndash;12",
    paragraphs: [
      "The psalm now names the deeper reason behind human frailty. &ldquo;For we are brought to an end by your anger; by your wrath we are dismayed.&rdquo; Moses does not treat death as a neutral fact of biology. He traces the shortness and trouble of life to the holy displeasure of God against human sin, a sober diagnosis that refuses easy comfort.",
      "Nothing about human life is hidden from God. &ldquo;You have set our iniquities before you, our secret sins in the light of your presence.&rdquo; Even the sins we conceal from others, even from ourselves, stand exposed in the radiance of God&rsquo;s presence. This unflinching honesty about sin gives the psalm its moral weight and its searching seriousness.",
      "The brevity of life is felt as a kind of sigh. &ldquo;For all our days pass away under your wrath; we bring our years to an end like a sigh.&rdquo; The whole of a human life, from beginning to end, is compressed into the length of a single breath exhaled. There is a mournful, weary quality to the image, the sound of a life passing quietly away.",
      "Moses then reckons frankly with the span of our years. &ldquo;The years of our life are seventy, or even by reason of strength eighty; yet their span is but toil and trouble; they are soon gone, and we fly away.&rdquo; Even a long life, even a strong one, is filled largely with labor and sorrow, and it ends all the same; we fly away as swiftly as a bird takes wing.",
      "The reflection presses toward a searching question. &ldquo;Who considers the power of your anger, and your wrath according to the fear of you?&rdquo; Few take seriously the weight of God&rsquo;s holiness or the reality of his judgment. Moses asks his readers to reckon honestly with what most prefer to ignore, to consider the power that stands behind their mortality.",
      "Out of this sober reckoning comes the psalm&rsquo;s pivotal petition. &ldquo;So teach us to number our days that we may get a heart of wisdom.&rdquo; Mortality, rightly faced, becomes the path to wisdom. To count our days &mdash; to know how few and how precious they are &mdash; is to be freed from folly and trivial pursuits, and to learn at last to live with a wise and discerning heart.",
    ],
  },
  {
    id: "A Prayer for Mercy",
    heading: "A Prayer for Mercy and Meaning",
    reference: "Psalm 90:13&ndash;17",
    paragraphs: [
      "Having faced mortality and judgment honestly, the psalm turns from reflection to petition. &ldquo;Return, O Lord! How long? Have pity on your servants!&rdquo; Moses cries out for God to turn back toward his people in compassion. The question &ldquo;How long?&rdquo; carries the ache of those who have endured the weight of affliction and long for relief.",
      "The prayer asks for a deep and lasting satisfaction. &ldquo;Satisfy us in the morning with your steadfast love, that we may rejoice and be glad all our days.&rdquo; In contrast to the grass that flourishes in the morning and withers by night, Moses asks that the morning bring God&rsquo;s steadfast love, a satisfaction that yields joy and gladness through the whole of our fleeting days.",
      "There is a longing for joy proportioned to past sorrow. &ldquo;Make us glad for as many days as you have afflicted us, and for as many years as we have seen evil.&rdquo; Moses does not deny the affliction and evil his people have known; he asks that God would balance those hard days with equal measures of gladness, redeeming the years of trouble with years of joy.",
      "The prayer reaches outward to the next generation. &ldquo;Let your work be shown to your servants, and your glorious power to their children.&rdquo; Moses asks that God&rsquo;s mighty acts be made visible, not only to those who pray but to their children after them, so that the knowledge of God&rsquo;s power might pass on and endure beyond a single fleeting life.",
      "The psalm closes with one of the most beloved petitions in all of Scripture. &ldquo;Let the favor of the Lord our God be upon us, and establish the work of our hands upon us; yes, establish the work of our hands!&rdquo; The repetition is deliberate and urgent. It is the heartfelt cry that our brief, mortal labors might be given lasting significance by the eternal God.",
      "Here the whole psalm comes to rest. Fading creatures, whose days pass like a sigh and whose work might so easily vanish, ask the One who is from everlasting to everlasting to take up their fleeting labors and make them count. It is the longing that what we do in our short span might be established, held, and made to matter by the eternal God in whom alone our dwelling place and our hope are found.",
    ],
  },
];

const videoItems = [
  { videoId: "Ps90Mo7vK2q", title: "Psalm 90 - A Prayer of Moses the Man of God" },
  { videoId: "Et4Gd9Wn1bx", title: "From Everlasting to Everlasting You Are God" },
  { videoId: "Nm6Dy3Kb8vr", title: "Teach Us to Number Our Days" },
  { videoId: "Es2Wk5Hn4pm", title: "Establish the Work of Our Hands" },
];

export default function Psalm90GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 90
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            &ldquo;A Prayer of Moses, the man of God&rdquo; &mdash; the only psalm attributed to Moses and likely the oldest in the Psalter. It contrasts the eternity of God with the brevity of human life, reflects soberly on sin under God&rsquo;s wrath, and prays, &ldquo;Teach us to number our days that we may get a heart of wisdom&hellip; establish the work of our hands.&rdquo; A profound meditation on mortality, eternity, and the longing for meaning.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Psalm 90 through visual teaching on Moses&rsquo; meditation on the eternity of God and the brevity of human life, the sober reckoning with mortality under God&rsquo;s wrath, the pivotal prayer to number our days and gain wisdom, and the longing that the eternal God would establish the fleeting work of our hands.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Number Our Days</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Psalm 90 places the brevity of human life before the eternity of God and finds, in that honest reckoning, the doorway to wisdom. &ldquo;Teach us to number our days that we may get a heart of wisdom.&rdquo; Out of mortality rises the prayer that fading creatures might have their fleeting labors taken up and made to count: &ldquo;Establish the work of our hands.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
