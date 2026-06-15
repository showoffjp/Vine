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
  { videoId: "dQw4w9WgXcW", title: "Isaiah 4 - The Branch of the LORD" },
  { videoId: "Lm0pQ3R7sWh", title: "The Remnant and the Book of Life" },
  { videoId: "Zx7Yt2Vb9Kc", title: "The Glory as a Canopy - A New Exodus" },
  { videoId: "Np4Qr8Sd1Lf", title: "Cleansing by Judgment and by Burning" },
];

const THEMES = [
  {
    color: GREEN,
    title: "The Holy Remnant",
    body: "Isaiah 4 closes a long oracle of judgment by turning, suddenly and surprisingly, toward grace. The survivors of the catastrophe are not merely the lucky few who escaped the sword; they are a people deliberately set apart and renamed. To be left in Zion and remain in Jerusalem is to be called holy &mdash; the language of consecration that elsewhere describes the priests and the temple vessels. The remnant is not a sad leftover but a purified seed, the kernel from which God will grow a renewed people. This remnant theology runs through the whole book of Isaiah and reaches its climax in the servant who bears the sins of many.",
  },
  {
    color: TEAL,
    title: "The Branch of the LORD",
    body: "At the heart of the chapter stands a luminous title: the Branch of the LORD, beautiful and glorious. The Hebrew word tsemach (sprout, shoot, growth) becomes one of the great messianic names of the prophets. Jeremiah promises a righteous Branch raised up for David who will reign and execute justice (Jeremiah 23:5 and 33:15). Zechariah names the coming priest-king simply as the Branch (Zechariah 3:8 and 6:12), the one who will build the temple of the LORD. In Isaiah 4 the Branch is paired with the fruit of the land, weaving together the royal hope of a coming king and the agricultural hope of a restored creation.",
  },
  {
    color: GOLD,
    title: "Cleansing Through Judgment",
    body: "The renewal of Zion does not come by ignoring her sin but by burning through it. The LORD will wash away the filth of the daughters of Zion and cleanse the bloodstains of Jerusalem by a spirit of judgment and a spirit of burning. Judgment here is not the opposite of salvation; it is the instrument of it. The same fire that consumes the dross also refines the silver, so that what emerges is genuinely clean. This is the deep biblical logic that the cross will later embody: God does not pardon by pretending sin away but by passing it through the fire of his own holy presence.",
  },
  {
    color: PURPLE,
    title: "The Returning Glory",
    body: "Over the renewed Mount Zion the LORD creates a cloud by day and the shining of a flaming fire by night. Any Israelite ear would catch the echo at once: this is the pillar of cloud and fire that led the people out of Egypt and filled the tabernacle. The glory that once departed from a defiled temple now returns to canopy a cleansed city. The presence of God, the Shekinah, is not a vague comfort but a visible, governing reality, the same divine glory that Ezekiel watched leave and that the prophets longed to see return. Where God dwells, the people are safe and the place is holy.",
  },
  {
    color: ROSE,
    title: "The Canopy of God",
    body: "The imagery of verse 5 is wedding imagery. The Hebrew word for the covering over the assembly is the chuppah, the bridal canopy under which a marriage is solemnized. God spreads his glory over Zion the way a bridegroom spreads his canopy over his bride, and the relationship between the LORD and his renewed people is cast as covenant marriage. This nuptial picture flowers across Scripture, from Hosea to the wedding supper of the Lamb in Revelation. The canopy is at once protection, intimacy, and covenant promise.",
  },
  {
    color: GREEN,
    title: "Shelter from the Storm",
    body: "The final verse gathers the chapter into a single tender image: a booth for shade from the heat by day, and a refuge and shelter from storm and rain. The glory of God is not only splendor to be admired but cover to be hidden under. The same presence that blazes with holiness also shields the weak from the sun and the flood. This is the deep paradox of the divine presence throughout Scripture: the fire that could consume becomes the canopy that protects, because the people beneath it have been made holy.",
  },
];

const VERSES = [
  {
    ref: "Isaiah 4:1",
    color: ROSE,
    heading: "Seven Women Take Hold of One Man",
    body: "This verse belongs with the judgment of chapter 3 even as it stands at the head of chapter 4, and it pictures the devastation of war with painful realism. So many men have fallen in battle that seven women take hold of one man, offering to eat their own bread and wear their own clothes &mdash; surrendering every normal claim of marriage &mdash; if only they may be called by his name to take away their reproach. In that culture to be unmarried and childless was a public shame, and the verse measures the cost of judgment in the broken lives of ordinary women. It is a bleak hinge: the last word of the curse before the first word of hope. The chapter will move from this scene of desolation to a vision of glory, and the contrast is deliberate and stark.",
  },
  {
    ref: "Isaiah 4:2",
    color: TEAL,
    heading: "The Branch, Beautiful and Glorious",
    body: "In that day the Branch of the LORD shall be beautiful and glorious, and the fruit of the land shall be the pride and honor of the survivors of Israel. The phrase in that day signals the prophetic turn from judgment to restoration, the day when God acts to save what the sword left behind. The Branch (tsemach) is the green shoot of new life springing up where everything had been cut down, and it carries the seed of the great messianic hope. Beauty and glory replace reproach and shame; fruitfulness replaces barrenness. The very survivors who seemed cursed now become the people for whom God grows his Branch.",
  },
  {
    ref: "Isaiah 4:3",
    color: GREEN,
    heading: "Recorded for Life in Jerusalem",
    body: "Those who are left in Zion and remain in Jerusalem will be called holy, everyone who has been recorded for life in Jerusalem. Here the remnant is named with two of Scripture great motifs. First, holiness: the survivors are consecrated, set apart for God as the temple and its priests were set apart. Second, the book of life: to be recorded for life is to have one name written in the divine register of those who belong to God, a motif that runs forward into Daniel, Malachi, and the Lamb book of life in Revelation. To survive judgment, in Isaiah vision, is to be enrolled by name in the purposes of God.",
  },
  {
    ref: "Isaiah 4:4",
    color: GOLD,
    heading: "Washed by a Spirit of Burning",
    body: "The LORD will wash away the filth of the daughters of Zion and cleanse the bloodstains of Jerusalem from its midst by a spirit of judgment and by a spirit of burning. The defilement is both moral filth and shed blood, the accumulated guilt of a city that had become unjust and violent. God removes it not by overlooking it but by a spirit of judgment and a spirit of burning &mdash; a refining fire that purges what water alone could never reach. The Spirit who hovered over the waters at creation now hovers over Zion to make her new. Cleansing and judgment are here one single act of grace.",
  },
  {
    ref: "Isaiah 4:5",
    color: PURPLE,
    heading: "A Cloud by Day, Fire by Night",
    body: "Then the LORD will create over the whole site of Mount Zion and over her assemblies a cloud by day, and smoke and the shining of a flaming fire by night; for over all the glory there will be a canopy. The verb create (bara) is the same verb used of God making the heavens and the earth, signaling a new creation over Zion. The cloud and fire are the visible glory that led Israel out of Egypt and filled the tabernacle, now returning to a cleansed city in a new exodus. Over all this glory there will be a canopy &mdash; the chuppah, the bridal covering &mdash; so that the renewed Zion is at once a new creation, a new exodus, and a wedding. The departed glory has come home.",
  },
  {
    ref: "Isaiah 4:6",
    color: GREEN,
    heading: "A Booth for Shade and Shelter",
    body: "There will be a booth for shade by day from the heat, and for a refuge and a shelter from the storm and rain. The chapter ends not with blazing splendor but with quiet protection: the glory of God becomes a sukkah, a booth, the same kind of temporary shelter Israel remembered in the wilderness. Under this canopy the people find shade from the scorching sun and cover from the driving storm. The God whose holiness once threatened to consume now spreads himself as shelter over a people made holy. It is the gospel in miniature: the consuming fire becomes the covering grace.",
  },
];

const REFLECTIONS = [
  "Isaiah 4 moves from the desolation of war in verse 1 to the glory of God in verse 5. Where in your own life has God brought hope only after, and through, a season of loss?",
  "To be part of the remnant is to be called holy and recorded for life. What does it mean to you that God knows his people by name and sets them apart for himself?",
  "The cleansing of Zion comes by a spirit of judgment and a spirit of burning, not by avoiding the fire. Where might God be using a refining fire in your life rather than removing the heat?",
  "The returning glory is described as a chuppah, a wedding canopy. How does picturing God presence as covenant marriage rather than mere oversight change the way you relate to him?",
  "The same glory that blazes with holiness becomes a booth of shelter from storm and heat. In what storm do you most need to take refuge under the canopy of God presence today?",
];

export default function Isaiah4GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)", color: TEXT }}>
      {/* Hero section */}
      <header style={{ maxWidth: 880, margin: "0 auto", padding: "48px 20px 28px" }}>
        <div style={{ display: "inline-block", background: `${TEAL}20`, border: `1px solid ${TEAL}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: TEAL, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
          Prophets - Old Testament
        </div>
        <h1 style={{ color: TEXT, fontSize: 36, fontWeight: 900, margin: "0 0 12px", lineHeight: 1.15 }}>
          Isaiah 4: The Branch of the LORD and the Canopy of Glory
        </h1>
        <p style={{ color: GOLD, fontSize: 16, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 6px", maxWidth: 680 }} dangerouslySetInnerHTML={{ __html: "&ldquo;In that day the Branch of the LORD shall be beautiful and glorious, and the fruit of the land shall be the pride and honor of the survivors of Israel.&rdquo;" }} />
        <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>Isaiah 4:2</p>
      </header>

      {/* Sticky tab nav */}
      <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, background: BG, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "12px 20px", display: "flex", gap: 8, flexWrap: "wrap" }}>
          {TABS.map((t) => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? TEAL : BORDER}`,
                background: activeTab === t.id ? `${TEAL}20` : "transparent",
                color: activeTab === t.id ? TEAL : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      <main id="main-content" style={{ maxWidth: 880, margin: "0 auto", padding: "32px 20px 24px" }}>
        {activeTab === "overview" && (
          <section>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 24 }}>
                {[["Book", "Isaiah"], ["Chapter", "4 (of 66)"], ["Genre", "Prophetic Oracle"], ["Setting", "Judah / Jerusalem"], ["Key Title", "The Branch"], ["Key Verse", "Isaiah 4:2"]].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>From Judgment to Glory</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }} dangerouslySetInnerHTML={{ __html: "Isaiah chapter 4 is one of the shortest chapters in the book, yet it carries an extraordinary weight of hope. It stands at the hinge between the searing judgment of chapter 3, where the proud daughters of Zion are stripped of their finery, and the great vineyard song of chapter 5. The first verse still belongs to the curse, picturing a land so emptied of its men by war that seven women cling to one survivor. But from verse 2 onward the prophet lifts his eyes, and the rest of the chapter shines with the promise of a renewed and holy Zion." }} />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }} dangerouslySetInnerHTML={{ __html: "The structure of the chapter is a deliberate movement from desolation to splendor. The judgment of war (v.1) gives way to the budding of the Branch (v.2), then to the naming of a holy remnant recorded for life (v.3), then to a cleansing by the spirit of judgment and burning (v.4), and finally to the return of the divine glory as a canopy of cloud and fire over a sheltered people (vv.5&ndash;6). Each step deepens the wonder: God does not merely spare a few survivors, he consecrates them, refines them, and dwells among them in glory." }} />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "What makes this passage so rich is the density of its imagery. In six verses Isaiah weaves together the messianic hope of the Branch, the remnant theology that runs through his whole book, the book of life motif, the refining fire of judgment, the pillar of cloud and fire from the exodus, the bridal canopy of covenant marriage, and the wilderness booth of shelter. It is a compact gospel: a people purged by fire and covered by glory, a city made holy and married to her God." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <div style={{ color: TEAL, fontWeight: 700, fontSize: 13, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>The Shape of Isaiah 4</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["v.1", "The Aftermath of War", "Seven women take hold of one man to remove their reproach; the closing note of chapter 3 judgment."],
                  ["v.2", "The Branch and the Fruit", "In that day the Branch of the LORD is beautiful and glorious; the turn from judgment to hope."],
                  ["v.3", "A Holy Remnant Named", "Those left in Zion are called holy, everyone recorded for life in Jerusalem; the book of life motif."],
                  ["v.4", "Cleansed by Burning", "The filth and bloodstains of Zion washed away by a spirit of judgment and a spirit of burning."],
                  ["v.5", "Cloud, Fire, and Canopy", "A new exodus pillar of cloud and fire over Zion; the glory as a chuppah, a bridal canopy."],
                  ["v.6", "Shade and Shelter", "A booth for shade by day and a refuge from storm and rain; glory becomes protective cover."],
                ].map(([ref, title, desc]) => (
                  <div key={ref} style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                    <span style={{ background: `${TEAL}20`, border: `1px solid ${TEAL}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: TEAL, fontWeight: 700, whiteSpace: "nowrap", alignSelf: "flex-start" }}>{ref}</span>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{title}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === "themes" && (
          <section>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Key Themes of Isaiah 4</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Beneath the brief surface of this chapter lie some of the deepest currents in all of biblical theology: the remnant made holy, the messianic Branch, the cleansing that comes through judgment, the returning glory of God, and the canopy of covenant protection. Each theme reaches backward into the story of the exodus and forward into the gospel." }} />
            </div>
            {THEMES.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <h3 style={{ color: t.color, fontWeight: 800, fontSize: 17, marginBottom: 10 }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: t.body }} />
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginTop: 6 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>The Branch Across the Prophets</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 10px" }} dangerouslySetInnerHTML={{ __html: "The title Branch (tsemach) is one of the great messianic threads of the Old Testament, and Isaiah 4:2 is where it first buds. Jeremiah promises a righteous Branch for David who will reign as king and be called The LORD Is Our Righteousness (Jeremiah 23:5&ndash;6 and 33:15&ndash;16)." }} />
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Zechariah carries the title further still, naming the coming one simply as my servant the Branch (Zechariah 3:8) and as the man whose name is the Branch, who will branch out and build the temple of the LORD and bear royal honor as both priest and king (Zechariah 6:12&ndash;13). Read together, these passages gather around a single coming figure who is king, priest, and the fruitful new life of God planted in the world." }} />
            </div>
          </section>
        )}

        {activeTab === "verses" && (
          <section>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Verse by Verse Through Isaiah 4</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Walking through the chapter verse by verse reveals its careful design, moving step by step from the reproach of war to the glory of God dwelling among a holy people. Each verse adds a new layer to the vision of a renewed Zion." }} />
            </div>
            {VERSES.map((v) => (
              <div key={v.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${v.color}20`, border: `1px solid ${v.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: v.color, fontWeight: 700, whiteSpace: "nowrap" }}>{v.ref}</span>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 16, margin: 0 }}>{v.heading}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.body }} />
              </div>
            ))}
          </section>
        )}

        {activeTab === "application" && (
          <section>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Living Under the Canopy</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }} dangerouslySetInnerHTML={{ __html: "Isaiah 4 was first spoken to a people facing judgment, but its promises reach all the way to us. The same God who refined Zion still purges his people, names them as his own, and spreads his glory over them as a shelter. To read this chapter today is to be reminded that our hope does not rest on escaping every fire but on belonging to the God who makes us holy through it." }} />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "For the Christian, the Branch has a name. The new life that Isaiah saw springing up over a ruined land took flesh in Jesus, the true vine and the righteous Branch, in whom we are recorded for life and over whom the glory of God rests without measure. The canopy that Isaiah glimpsed becomes, in the New Testament, the promise that God will dwell with his people and shelter them forever." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 17, marginBottom: 10 }}>Hope on the Far Side of Judgment</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The chapter teaches us not to read our seasons of loss as the final word. The same prophet who pronounced the curse also saw the Branch budding on the other side of it. When you walk through a desolation that feels like verse 1, Isaiah 4 invites you to keep reading to verse 2, where the in that day of God promises that he is already growing something beautiful from the ruins." }} />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 17, marginBottom: 10 }}>Welcoming the Refining Fire</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Zion is cleansed by a spirit of judgment and a spirit of burning, not by avoiding the heat. This reframes the difficult and painful refinements of the Christian life. The fire that exposes and burns away our filth is not the absence of God love but one of its sharpest expressions, the same Spirit at work to make us genuinely clean rather than merely comfortable." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}`, borderRadius: 14, padding: 28, marginTop: 6 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {REFLECTIONS.map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ background: `${GREEN}20`, border: `1px solid ${GREEN}40`, color: GREEN, borderRadius: "50%", width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Always-visible video section */}
      <section style={{ maxWidth: 880, margin: "0 auto", padding: "16px 20px 64px" }}>
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
          <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on Isaiah 4</h2>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 20 }} dangerouslySetInnerHTML={{ __html: "Sermons and lectures on the Branch of the LORD, the holy remnant, the cleansing fire, and the returning glory that canopies a renewed Zion." }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h3 style={{ color: ROSE, fontWeight: 700, fontSize: 16, margin: 0 }}>{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
