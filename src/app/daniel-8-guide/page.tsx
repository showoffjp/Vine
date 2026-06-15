"use client";
import { useState, useEffect } from "react";
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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verses", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "1wjvO84vF7c", title: "Daniel 8 - The Ram and the Goat Explained" },
  { videoId: "qBQS5MQTQ-A", title: "Alexander the Great in Bible Prophecy" },
  { videoId: "Vo3z-A4nZ0g", title: "Antiochus IV Epiphanes and the Little Horn" },
  { videoId: "Or0VCu2-w_I", title: "The 2300 Evenings and Mornings - The Sanctuary Restored" },
];

const THEMES = [
  {
    color: GOLD,
    title: "The Sovereignty of God Over Empires",
    html: "The vision of Daniel 8 is, at its deepest level, a declaration that God rules the rise and fall of the world&rsquo;s great powers. The ram of Medo-Persia charges in every direction and seems unstoppable, yet it is shattered by the goat of Greece; the goat in turn reaches the height of its strength only to have its great horn broken. No empire in the vision endures by its own might, for each is raised up and cast down according to a script written in heaven before any of these kingdoms existed. Daniel is given this vision not to satisfy curiosity about the future but to assure the exiled people of God that history is not chaos but is held firmly in the hand of the Most High."
  },
  {
    color: TEAL,
    title: "Prophecy and the Map of History",
    html: "Few chapters in Scripture have been confirmed by history as precisely as Daniel 8. Gabriel himself supplies the interpretation: the ram is the kings of Media and Persia, and the goat is the king of Greece. The single great horn that is broken at the peak of its power answers to Alexander the Great, who conquered the known world and died young, his empire divided among his generals into the four horns that arose in its place. This astonishing correspondence between vision and fulfillment testifies that the God who speaks through Daniel truly knows and governs the end from the beginning."
  },
  {
    color: ROSE,
    title: "The Little Horn and the War on the Holy",
    html: "Out of one of the four horns there grows a little horn that becomes exceedingly great, magnifying itself even against the Prince of the host. This power takes away the regular burnt offering, throws down the sanctuary, casts truth to the ground, and prospers for a season. Historically the little horn is identified with Antiochus IV Epiphanes, the Seleucid king who desecrated the Jerusalem temple in 167 BC and tried to abolish the worship of God. Yet the description reaches beyond Antiochus to portray a recurring spirit of arrogant power that exalts itself against heaven and persecutes the people of God."
  },
  {
    color: PURPLE,
    title: "Desecration and Restoration of the Sanctuary",
    html: "At the center of the little horn&rsquo;s assault stands the sanctuary and the regular offering, the daily worship by which Israel met with God. The horn removes the burnt offering and tramples the place of God&rsquo;s dwelling, plunging the worshiping community into desolation. But the vision does not end in defilement: a holy one asks how long the vision will last, and the answer is given, for two thousand three hundred evenings and mornings, then the sanctuary shall be restored. The promise of restoration is woven into the very prophecy of desecration, so that the people may endure the darkness knowing that cleansing and renewal are appointed by God."
  },
  {
    color: GREEN,
    title: "Typology and the Antichrist to Come",
    html: "The little horn of Daniel 8 stands in a line with the little horn of Daniel 7 and looks forward to the man of lawlessness in 2 Thessalonians 2 and the beast of Revelation. Antiochus, who set up an idol in the temple and forced the abandonment of God&rsquo;s law, becomes a type or pattern of a final eschatological adversary who will likewise exalt himself against God and oppress the saints. The vision therefore teaches the people of God to recognize a repeating pattern across history: tyrants will rise who blaspheme heaven and trample the holy, yet each, like Antiochus, will be broken by no human hand."
  },
  {
    color: GOLD,
    title: "The Cost of Receiving Revelation",
    html: "Daniel does not float serenely above the vision; he is overwhelmed by it. He falls on his face in a deep sleep, and even after Gabriel raises and instructs him, he is left appalled, sick for days before he can rise and go about the king&rsquo;s business. The weight of seeing the coming desolation of his people presses upon the prophet so heavily that no one can understand what has happened to him. This honest portrait reminds us that genuine encounter with God&rsquo;s purposes is not always comforting, and that those entrusted with hard truth often bear it with trembling, sustained only by their trust in the God who gave it."
  },
];

const VERSES = [
  {
    ref: "Daniel 8:1-2",
    color: GOLD,
    title: "The Vision by the Ulai Canal",
    html: "In the third year of the reign of King Belshazzar, a vision appears to Daniel, following the earlier vision recorded in chapter 7. He sees himself in Susa, the citadel that lay in the province of Elam, standing beside the Ulai canal. This setting is significant, for Susa would later become a principal capital of the very Persian empire whose rise and fall the vision foretells. The careful naming of time and place grounds the apocalyptic imagery in real history, signaling that what Daniel sees concerns actual kingdoms and definite events rather than timeless abstractions."
  },
  {
    ref: "Daniel 8:3-4",
    color: TEAL,
    title: "The Ram with Two Horns",
    html: "Lifting his eyes, Daniel sees a ram standing on the bank of the canal with two horns, both high, but one higher than the other, and the higher one coming up last. The ram charges westward, northward, and southward, and no beast can stand before it or escape its power, for it does as it pleases and grows great. The two horns of unequal height picture the dual kingdom of Media and Persia, the later and higher horn representing the Persians who came to dominate. The ram&rsquo;s irresistible advance in three directions captures the sweeping conquests by which Medo-Persia became the great power of its age."
  },
  {
    ref: "Daniel 8:5-7",
    color: PURPLE,
    title: "The Goat from the West",
    html: "As Daniel watches, a male goat comes from the west across the face of the whole earth, moving so swiftly that it does not touch the ground, and it has a conspicuous horn between its eyes. It charges the ram in the fury of its power, strikes it, breaks its two horns, and tramples it, and there is no one to rescue the ram from its hand. The goat is the kingdom of Greece, and its single conspicuous horn is Alexander the Great, whose lightning campaigns swept from Macedonia across Asia with a speed the world had never seen. The shattering of the ram&rsquo;s two horns depicts Alexander&rsquo;s decisive overthrow of the Medo-Persian empire at battles such as Issus and Gaugamela."
  },
  {
    ref: "Daniel 8:8",
    color: GREEN,
    title: "The Great Horn Broken, Four in Its Place",
    html: "The goat becomes exceedingly great, but at the height of its power the great horn is broken, and in its place there come up four conspicuous horns toward the four winds of heaven. This detail answers precisely to the death of Alexander in 323 BC at the age of thirty-two, at the very summit of his conquests. After years of struggle his empire was divided among four of his generals, the Diadochi, whose kingdoms spread out toward the four points of the compass. The breaking of the horn at its peak is a sober reminder that human greatness is fragile, cut off in a moment by the God who numbers the days of every ruler."
  },
  {
    ref: "Daniel 8:9-12",
    color: ROSE,
    title: "The Little Horn That Grew Great",
    html: "Out of one of the four horns there comes a little horn, which grows exceedingly great toward the south, toward the east, and toward the glorious land of Israel. It grows great even to the host of heaven, casting down some of the stars and trampling them, and it magnifies itself against the Prince of the host, taking away the regular burnt offering and overthrowing the place of his sanctuary. Because of transgression the host is given over, and the horn throws truth to the ground and prospers in all that it does. This is the Seleucid king Antiochus IV Epiphanes, who in his pride attacked the worship of God, defiled the temple, and sought to suppress the truth of God&rsquo;s law."
  },
  {
    ref: "Daniel 8:13-14",
    color: PURPLE,
    title: "The 2300 Evenings and Mornings",
    html: "Daniel hears a holy one speaking, and another holy one asks how long the vision shall last concerning the regular burnt offering, the transgression that makes desolate, and the trampling of the sanctuary and host. The answer comes: for two thousand three hundred evenings and mornings, then the sanctuary shall be restored to its rightful state. Interpreters differ over whether this counts twenty-three hundred days or, reckoning evening and morning sacrifices separately, about eleven hundred and fifty days, but in either reading the number frames a definite, limited period of desolation. The point is unmistakable: the defilement has a divinely appointed end, after which God will cleanse and restore his sanctuary."
  },
  {
    ref: "Daniel 8:15-19",
    color: TEAL,
    title: "Gabriel Comes to Interpret",
    html: "As Daniel seeks to understand the vision, one having the appearance of a man stands before him, and he hears a human voice call out, &ldquo;Gabriel, make this man understand the vision.&rdquo; When Gabriel approaches, Daniel is terrified and falls on his face, but the angel tells him to understand that the vision concerns the time of the end. Gabriel touches him, raises him to his feet, and promises to make known what shall be at the latter end of the indignation, for the vision refers to an appointed time. Here Scripture interprets itself, as the heavenly messenger removes the veil from the symbols and assures Daniel that every detail belongs to God&rsquo;s settled plan."
  },
  {
    ref: "Daniel 8:20-27",
    color: GOLD,
    title: "The Interpretation and Daniel's Exhaustion",
    html: "Gabriel declares that the two-horned ram is the kings of Media and Persia, and the goat is the king of Greece, while the great horn between its eyes is the first king. The four horns that rose after it broke are four kingdoms that will arise from his nation, though not with his power, and out of them will come a king of bold face who shall grow strong, destroy mighty men and the holy people, and even rise up against the Prince of princes, yet he shall be broken by no human hand. The vision of the evenings and mornings is true, but Daniel is to seal it up, for it refers to many days ahead. Overwhelmed, Daniel lies sick for days, then rises to do the king&rsquo;s business, appalled by the vision and unable to understand it."
  },
];

const REFLECTION = [
  "The empires of Daniel 8 rose and fell exactly as foretold. How does the precise sovereignty of God over human history shape the way you face uncertain times today?",
  "The great horn was broken at the very height of its power. What does Alexander's sudden fall teach you about placing your hope in human strength, success, or security?",
  "The little horn attacked the daily worship of God's people and threw truth to the ground. Where do you see pressure on worship and truth in your own setting, and how should you respond?",
  "The vision promised that the sanctuary would be restored after an appointed time of desolation. How can the certainty of God's appointed end sustain you through a present season of darkness?",
  "Daniel was left appalled and exhausted by what God showed him. Have you allowed God's hard truths to weigh on you honestly, or do you avoid them, and what would faithful endurance look like for you?",
];

type DanTab = "overview" | "themes" | "verses" | "application";

export default function Daniel8GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<DanTab>("overview");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* Hero */}
        <header style={{ marginBottom: 36 }}>
          <div style={{ display: "inline-block", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: PURPLE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
            Daniel - Chapter 8
          </div>
          <h1 style={{ color: TEXT, fontSize: 36, fontWeight: 900, margin: "0 0 14px", lineHeight: 1.2 }}>
            Daniel 8: The Vision of the Ram and the Goat
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, margin: 0, maxWidth: 700, fontStyle: "italic" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;For two thousand three hundred evenings and mornings; then the sanctuary shall be restored to its rightful state.&rdquo; &mdash; Daniel 8:14" }} />
        </header>

        {/* Sticky tab nav */}
        <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, background: BG, paddingTop: 8, paddingBottom: 12, marginBottom: 24, borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {TABS.map(t => (
              <button type="button" key={t.id} onClick={() => setActiveTab(t.id as DanTab)}
                style={{ padding: "9px 18px", borderRadius: 20, border: `1px solid ${activeTab === t.id ? PURPLE : BORDER}`, background: activeTab === t.id ? `${PURPLE}20` : "transparent", color: activeTab === t.id ? PURPLE : MUTED, fontWeight: activeTab === t.id ? 700 : 500, fontSize: 14, cursor: "pointer" }}>
                {t.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Overview */}
        {activeTab === "overview" && (
          <section>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[["Book", "Daniel"], ["Chapter", "8"], ["Setting", "Susa, by the Ulai"], ["Period", "Third year of Belshazzar"], ["Genre", "Apocalyptic Vision"], ["Key Verse", "Daniel 8:14"]].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>A Vision of Empires Rising and Falling</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Daniel 8 records the second of Daniel&rsquo;s great apocalyptic visions, received in the third year of King Belshazzar, before the fall of Babylon to the Medes and Persians. With this chapter the book returns from Aramaic to Hebrew, signaling a sharpened focus on the future of God&rsquo;s own people and the powers that will afflict them. Daniel is transported in vision to the citadel of Susa, beside the Ulai canal, and there he watches a drama of beasts unfold that maps the coming centuries with remarkable clarity. The imagery is strange, but the meaning, supplied by the angel Gabriel, is precise: this is the story of Medo-Persia, Greece, and a tyrant who will assault the worship of God." }} />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The vision moves in three great movements. First a two-horned ram charges across the world, doing as it pleases until nothing can stand before it. Then a swift goat with a single conspicuous horn rushes from the west, shatters the ram, and grows great, only to have its horn broken at the height of its power and replaced by four. Finally, from one of these four there emerges a little horn that magnifies itself against heaven, halts the daily sacrifice, and tramples the sanctuary, until a heavenly voice announces the appointed limit of the desolation and the promise of the sanctuary&rsquo;s restoration." }} />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "What makes Daniel 8 so striking is the exactness with which its symbols correspond to events that lay centuries in Daniel&rsquo;s future. Gabriel names the kingdoms outright: Media and Persia, Greece, and the line of kings that would follow Alexander. The chapter thus stands as a monument to the God who declares the end from the beginning, and as a comfort to a persecuted people who needed to know that their suffering under a coming tyrant had both a cause and a divinely fixed conclusion. It teaches every generation to read the turbulence of history through the lens of God&rsquo;s sovereign and unhurried purpose." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>Reading Apocalyptic Prophecy</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "Daniel 8 belongs to the genre of apocalyptic literature, in which heavenly realities and the course of history are unveiled through vivid symbolic images. Rams, goats, horns, and stars are not literal animals and objects but coded representations of kings and kingdoms, interpreted within the chapter itself by an angel. Reading the chapter well means attending to Gabriel&rsquo;s own explanations rather than imposing speculation, and recognizing that the symbols carry a consistent message about the sovereignty of God over the nations." }} />
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter also illustrates how prophecy can have both a near and a far horizon. The little horn finds its historical fulfillment in Antiochus IV Epiphanes and the Maccabean crisis of the second century BC, yet its arrogant defiance of God and persecution of the saints establishes a pattern that the New Testament sees recurring in the final antichrist. Holding together the historical fulfillment and the typological foreshadowing keeps interpretation anchored in the text while remaining alert to the larger biblical story." }} />
            </div>
          </section>
        )}

        {/* Key Themes */}
        {activeTab === "themes" && (
          <section>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes of Daniel 8</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The vision of the ram and the goat carries a cluster of theological themes that have nourished the church through every age of upheaval. Each beast and horn becomes a vehicle for truths about God&rsquo;s sovereignty, the fragility of human power, the assault on true worship, and the certainty of restoration. Together they form a single message of hope for a people living under hostile empires." }} />
            </div>
            {THEMES.map(t => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 14 }}>
                <h3 style={{ color: t.color, fontWeight: 800, fontSize: 17, margin: "0 0 10px" }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: t.html }} />
              </div>
            ))}
          </section>
        )}

        {/* Verse by Verse */}
        {activeTab === "verses" && (
          <section>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse Through Daniel 8</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Following the vision in order reveals its careful structure: the setting, the two beasts, the climactic little horn, the appointed limit of desolation, and finally Gabriel&rsquo;s interpretation. Watch how the chapter moves from dazzling symbolic imagery to plain angelic explanation, anchoring apocalyptic mystery in the concrete history of nations." }} />
            </div>
            {VERSES.map(v => (
              <div key={v.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10, flexWrap: "wrap" }}>
                  <span style={{ background: `${v.color}20`, border: `1px solid ${v.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: v.color, fontWeight: 700 }}>{v.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{v.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: v.html }} />
              </div>
            ))}
          </section>
        )}

        {/* Application */}
        {activeTab === "application" && (
          <section>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Living Daniel 8 Today</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Daniel 8 was given to a people who would soon face an empire that sought to crush their faith, and it speaks with fresh power to every generation that watches arrogant power rise. The vision teaches believers to interpret the headlines of their own day through the certainty of God&rsquo;s rule, refusing both naive optimism and paralyzing fear. When mighty horns boast against heaven and trample what is holy, the people of God may stand firm, knowing that every tyrant has a fixed and approaching end appointed by the Most High." }} />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter also calls us to a sober and faithful endurance. The little horn could halt the daily offering and trample the sanctuary for a season, but only for a season, and the same is true of every assault on worship and truth in our own time. Like Daniel, we may be wearied and even appalled by the weight of what we see, yet we are summoned to rise and go about our appointed work, trusting that the sanctuary will be restored. To live this vision is to wait with patient hope for the God who breaks the proud by no human hand." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}55`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {REFLECTION.map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", background: `${PURPLE}25`, border: `1px solid ${PURPLE}55`, color: PURPLE, fontWeight: 700, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Always-visible video section */}
        <section style={{ marginTop: 40 }}>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 8px" }}>Teaching Videos on Daniel 8</h2>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 22px" }}>
              Sermons and lectures on the ram and the goat, the rise of Greece, the little horn, and the cleansing of the sanctuary.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              {videoItems.map(v => (
                <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "12px 14px" }}>
                    <h4 style={{ color: TEXT, fontWeight: 700, fontSize: 14, margin: 0, lineHeight: 1.4 }}>{v.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
