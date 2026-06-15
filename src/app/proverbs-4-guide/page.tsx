"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Get Wisdom",
  "Two Paths",
  "Guard Your Heart",
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
    heading: "A Father&rsquo;s Appeal to Embrace Wisdom",
    reference: "Proverbs 4",
    paragraphs: [
      "Proverbs 4 is one of the most beloved wisdom passages in all of Scripture &mdash; a father&rsquo;s earnest, tender appeal to his children to embrace wisdom above every other treasure. The chapter glows with the warmth of generational love, as a parent who once received wisdom from his own father now passes that same inheritance on to the next generation. Wisdom here is no cold abstraction but a living gift, handed down hand to hand across the years.",
      "The chapter opens with the father recalling his own upbringing: &ldquo;Hear, O sons, a father&rsquo;s instruction, and be attentive, that you may gain insight&rdquo; (v.1). He remembers being a tender child before his own father, who pressed upon him the supreme charge: &ldquo;Get wisdom; get insight&rdquo; (vv.1&ndash;9). Wisdom is to be prized above all, embraced like a beloved companion who exalts and honors those who hold her fast.",
      "From the value of wisdom Paul&rsquo;s ancient counterpart moves to the way of wisdom, setting before his son two diverging paths (vv.10&ndash;19). On the one hand is the way of the righteous, &ldquo;like the light of dawn, which shines brighter and brighter until full day.&rdquo; On the other is the way of the wicked, &ldquo;like deep darkness; they do not know over what they stumble.&rdquo; The choice between these two roads shapes a whole life and its destiny.",
      "The chapter reaches its famous climax in the final section, where the father calls his son to keep wisdom&rsquo;s words within his heart (vv.20&ndash;27). At its center stands the great command: &ldquo;Keep your heart with all vigilance, for from it flow the springs of life&rdquo; (v.23). The heart is the wellspring of the whole person, and so it must be guarded above everything else, for everything else flows from it.",
      "From this central command the father moves outward to the whole person &mdash; mouth, eyes, and feet. Crooked speech is to be put away, the eyes are to look straight ahead, and the feet are to walk a level, well-pondered path. Inner integrity and outward conduct are bound together; a guarded heart produces straight speech, focused vision, and sure steps on the path of life.",
      "Taken together, Proverbs 4 offers a holistic vision of the wise life: wisdom received as a generational inheritance, wisdom chosen over the path of the wicked, and wisdom kept and guarded at the very center of one&rsquo;s being. It is a passage that has shaped countless lives, calling each new generation to treasure wisdom, to walk in her ways, and above all to guard the heart from which life itself flows.",
    ],
  },
  {
    id: "Get Wisdom",
    heading: "Get Wisdom Above All",
    reference: "Proverbs 4:1&ndash;9",
    paragraphs: [
      "The chapter begins with a warm summons to listen: &ldquo;Hear, O sons, a father&rsquo;s instruction, and be attentive, that you may gain insight, for I give you good precepts; do not forsake my teaching&rdquo; (vv.1&ndash;2). The father speaks not as a distant lecturer but as one who has good gifts to bestow. His teaching is precious, and he urges his children not to let it slip away but to receive it gladly.",
      "He then opens a window into his own childhood: &ldquo;When I was a son with my father, tender, the only one in the sight of my mother, he taught me and said to me, &lsquo;Let your heart hold fast my words; keep my commandments, and live&rsquo;&rdquo; (vv.3&ndash;4). Here is wisdom as a living inheritance, passed from grandfather to father to son. What the father now gives, he himself once received as a beloved child.",
      "At the heart of that inherited teaching stands an urgent, repeated command: &ldquo;Get wisdom; get insight; do not forget, and do not turn away from the words of my mouth&rdquo; (v.5). The verbs are active and insistent. Wisdom is not absorbed passively but actively pursued, sought after, laid hold of. It must be gotten, the way one acquires a precious and necessary possession.",
      "Wisdom, moreover, repays those who love her with her own loyal protection: &ldquo;Do not forsake her, and she will keep you; love her, and she will guard you&rdquo; (v.6). The relationship is mutual and personal. To cling to wisdom is to be kept by her; to love her is to be guarded by her. She becomes a faithful companion who watches over the one who embraces her.",
      "Then comes the famous, almost insistent refrain: &ldquo;The beginning of wisdom is this: Get wisdom, and whatever you get, get insight&rdquo; (v.7). Above all other acquisitions a person might pursue &mdash; wealth, status, pleasure, power &mdash; wisdom stands supreme. Whatever else you gather in life, the father says, do not fail to gather this. It is the one acquisition worth any cost.",
      "The section closes with the rich rewards wisdom bestows on those who embrace her: &ldquo;Prize her highly, and she will exalt you; she will honor you if you embrace her. She will place on your head a graceful garland; she will bestow on you a beautiful crown&rdquo; (vv.8&ndash;9). To hold wisdom dear is to be lifted up and adorned. She crowns her lovers with grace and beauty, dignifying the life that treasures her above all.",
    ],
  },
  {
    id: "Two Paths",
    heading: "Two Paths",
    reference: "Proverbs 4:10&ndash;19",
    paragraphs: [
      "The father renews his appeal with the promise of life: &ldquo;Hear, my son, and accept my words, that the years of your life may be many&rdquo; (v.10). To receive wisdom is to receive life itself, full and long. He then reminds his son of the careful guidance already given: &ldquo;I have taught you the way of wisdom; I have led you in the paths of uprightness&rdquo; (v.11). The way has been marked out; now it must be walked.",
      "Walking that way brings a remarkable freedom and security: &ldquo;When you walk, your step will not be hampered, and if you run, you will not stumble&rdquo; (v.12). The path of wisdom is not a narrow, tripping trail but an open, level road. Whether one walks or runs, wisdom clears the way, removing the obstacles that would otherwise bring a person down. He urges his son to take hold of instruction and not let go, for it is his very life (v.13).",
      "Then comes a series of urgent warnings against the opposite road: &ldquo;Do not enter the path of the wicked, and do not walk in the way of the evil&rdquo; (v.14). The father piles up imperatives to make his point unmistakable: &ldquo;Avoid it; do not go on it; turn away from it and pass on&rdquo; (v.15). The path of the wicked is not to be flirted with or sampled but decisively shunned and left behind.",
      "He exposes the disturbing inner life of the wicked: &ldquo;For they cannot sleep unless they have done wrong; they are robbed of sleep unless they have made someone stumble&rdquo; (v.16). Evil has become their food and drink: &ldquo;For they eat the bread of wickedness and drink the wine of violence&rdquo; (v.17). Wrongdoing is not an occasional lapse for them but the very sustenance of their lives, a restless appetite that gives them no peace.",
      "Against this dark portrait the father sets a luminous image of the righteous: &ldquo;But the path of the righteous is like the light of dawn, which shines brighter and brighter until full day&rdquo; (v.18). The way of wisdom is a path of increasing light, beginning like the first gray glimmer of morning and growing steadily until the sun stands at full noon. It is a life that grows ever clearer, brighter, and more certain.",
      "The contrast could not be sharper: &ldquo;The way of the wicked is like deep darkness; they do not know over what they stumble&rdquo; (v.19). Where the righteous walk in growing light, the wicked grope in thickening gloom, unable even to see the things that trip them. Two ways lie open before every person, and they lead to two destinies &mdash; one toward the full light of day, the other into deepening night.",
    ],
  },
  {
    id: "Guard Your Heart",
    heading: "Guard Your Heart",
    reference: "Proverbs 4:20&ndash;27",
    paragraphs: [
      "The final section opens with a tender, urgent plea to pay close attention: &ldquo;My son, be attentive to my words; incline your ear to my sayings. Let them not escape from your sight; keep them within your heart&rdquo; (vv.20&ndash;21). The father wants wisdom not merely heard but treasured, held fast in the inner life where it can do its lasting work. The words are to be kept close, never allowed to slip away.",
      "He explains why these words matter so deeply: &ldquo;For they are life to those who find them, and healing to all their flesh&rdquo; (v.22). Wisdom is not a burden but a source of vitality and wholeness. To those who find and keep these words, they bring life itself and healing to the whole body. Far from confining, wisdom restores and renews the one who embraces it.",
      "Then comes the great central command of the chapter, the verse that crowns the whole: &ldquo;Keep your heart with all vigilance, for from it flow the springs of life&rdquo; (v.23). The heart &mdash; the inner core of thought, desire, and will &mdash; is the wellspring from which everything else in a person flows. Because all of life issues from it, the heart must be guarded above every other treasure, watched with the utmost care.",
      "From this central charge the father moves outward to the mouth: &ldquo;Put away from you crooked speech, and put devious talk far from you&rdquo; (v.24). A guarded heart produces honest speech. Twisted, deceitful words betray a heart that is not being kept; so the father calls his son to banish crookedness from his lips, letting his speech be as straight and true as the path he is to walk.",
      "Next he turns to the eyes: &ldquo;Let your eyes look directly forward, and your gaze be straight before you&rdquo; (v.25). Wisdom calls for focused vision, eyes fixed on the right path rather than wandering after distractions or temptations. A steady, forward-looking gaze keeps a person from being lured aside; the eyes set the direction the feet will follow.",
      "Finally he addresses the feet: &ldquo;Ponder the path of your feet; then all your ways will be sure. Do not swerve to the right or to the left; turn your foot away from evil&rdquo; (vv.26&ndash;27). Wisdom weighs its steps, choosing a level and considered path, refusing to veer off into danger. Heart, mouth, eyes, and feet are all summoned together &mdash; a whole life aligned in integrity on the straight path of wisdom.",
    ],
  },
];

const videoItems = [
  { videoId: "Hp5kR9dW3vL", title: "Proverbs 4 - A Father&rsquo;s Appeal to Embrace Wisdom" },
  { videoId: "Mn7tZ4xK2Jr", title: "Get Wisdom Above All - The Beginning of Wisdom" },
  { videoId: "Vw3cH8nP6Mq", title: "Two Paths - The Light of Dawn and Deep Darkness" },
  { videoId: "Qz9dG1bP4Nk", title: "Guard Your Heart - The Springs of Life" },
];

export default function Proverbs4GuidePage() {
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
            Proverbs Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Proverbs 4
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A father&rsquo;s earnest appeal to his children to embrace wisdom, passed down through generations. He urges them to get wisdom above all, to walk the path of the righteous rather than the way of the wicked, and to guard the heart &mdash; for from it flow the springs of life.
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
              Deepen your study of Proverbs 4 through visual teaching on wisdom as a generational inheritance, the supreme call to get wisdom above all, the two diverging paths of the righteous and the wicked, and the great command to guard the heart from which life flows.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Guard the Heart, the Wellspring of Life</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Proverbs 4 offers a holistic vision of the wise life: wisdom received as a generational inheritance, wisdom chosen over the path of the wicked, and wisdom guarded at the very center of one&rsquo;s being. Above all stands the great command to keep the heart with all vigilance, for from it flow the springs of life &mdash; and from a guarded heart come straight speech, focused eyes, and sure steps.
          </p>
        </div>
      </main>
    </div>
  );
}
