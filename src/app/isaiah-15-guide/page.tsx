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

const videoItems = [
  { videoId: "kR7mQ2zTbVc", title: "Isaiah 15: The Oracle Concerning Moab" },
  { videoId: "dW9pXn4LhGs", title: "Destroyed in a Night: The Suddenness of Judgment" },
  { videoId: "fH3yJcVtNbQ", title: "My Heart Cries Out for Moab: Compassion in Judgment" },
  { videoId: "qS6wMzPkRdL", title: "God Over the Nations: The Burden Against Moab" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* HERO */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #1a1a2e 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: GOLD, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Chapter Guide</p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>Isaiah Chapter 15</h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "Isaiah 15 is a short but unforgettable lament &mdash; an oracle, or &ldquo;burden,&rdquo; concerning Moab, the nation that lay just east of the Dead Sea and shared a long, complicated history with Israel. In nine swift verses the chapter pictures a whole people overwhelmed in a single night, their proud cities reduced to ruins, their roads filled with weeping refugees, and their famous waters running dry or running with blood. What makes this chapter so striking is not merely the totality of the destruction but the tone of grief that runs through it: the prophet &mdash; and behind him the LORD &mdash; does not gloat over a fallen enemy but cries out in genuine sorrow. Isaiah 15 thus stands as a window into the heart of a God who rules over every nation, who takes no pleasure in the death of the wicked, and who teaches his people to weep even over those they once counted as foes." }} />
        </div>
      </div>

      {/* TABS */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{ padding: "14px 24px", background: "none", border: "none", color: activeTab === i ? TEXT : MUTED, fontFamily: "Georgia, serif", fontSize: "0.95rem", cursor: "pointer", borderBottom: activeTab === i ? `2px solid ${GOLD}` : "2px solid transparent", whiteSpace: "nowrap" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px" }}>

        {/* TAB 0: OVERVIEW */}
        {activeTab === 0 && (
          <div>

            {/* Section 1 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: 12 }}>An Oracle Concerning Moab (v.1)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter opens with a heading that places it within a larger collection: &ldquo;An oracle concerning Moab&rdquo; (v.1). The word translated &ldquo;oracle&rdquo; is the Hebrew <em>massa</em>, literally a &ldquo;burden&rdquo; or &ldquo;lifting&rdquo; &mdash; a weighty word from the LORD that the prophet must carry and deliver. Isaiah 13 through 23 is a sequence of such burdens against the surrounding nations: Babylon, Assyria, Philistia, Moab, Damascus, Cush, Egypt, Tyre, and more. Together they announce a single great truth: the God of Israel is not a tribal deity confined to one people but the sovereign Lord of all the nations of the earth." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The burden falls with terrifying speed: &ldquo;Because Ar of Moab is laid waste in a night, Moab is undone; because Kir of Moab is laid waste in a night, Moab is undone&rdquo; (v.1). Ar and Kir were two of Moab&rsquo;s principal cities, strongholds of its national life. The repeated phrase &ldquo;in a night&rdquo; underscores the suddenness of the blow &mdash; not a long siege but an overnight catastrophe, the kind of disaster that overtakes a people while they sleep and leaves them, by morning, ruined and silenced. The doubled refrain &ldquo;Moab is undone&rdquo; sets the funeral tone for everything that follows." }} />
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>A Nation in Mourning (vv.2-3)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The scene shifts to Moab&rsquo;s response, and it is a portrait of total grief. &ldquo;He has gone up to the temple, and to Dibon, to the high places to weep; over Nebo and over Medeba Moab wails&rdquo; (v.2). In their terror the Moabites stream to their sanctuaries and high places &mdash; the very shrines of Chemosh, their national god &mdash; to pour out their lament. The tragic irony is sharp: they run to the gods who cannot save them, seeking refuge in the heights from a disaster that has already swallowed their cities. Their religion offers them a place to weep but no power to deliver." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The signs of mourning are unmistakable and culturally vivid: &ldquo;On every head is baldness; every beard is shorn&rdquo; (v.2), and the people gird themselves with sackcloth, while &ldquo;on the housetops and in the squares everyone wails and melts in tears&rdquo; (v.3). Shaving the head and cutting the beard were ancient gestures of grief and shame, a stripping away of dignity to match the stripping away of the nation. From the private rooftops to the public squares, no place in Moab is untouched by sorrow. The whole society dissolves into weeping, melting like wax before the heat of judgment." }} />
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>The Cry That Carries (v.4)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The lament grows louder and travels farther: &ldquo;Heshbon and Elealeh cry out; their voice is heard as far as Jahaz&rdquo; (v.4). Heshbon and Elealeh lay in the north of Moab&rsquo;s territory, Jahaz farther out toward the desert frontier; the sound of weeping is so great that it carries across the whole land. This is grief that cannot be contained within a single city &mdash; it spreads from town to town until the entire nation echoes with one continuous cry. The geography itself becomes a map of mourning, every named place a station of sorrow." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Even Moab&rsquo;s soldiers are undone: &ldquo;Therefore the armed men of Moab cry aloud; his soul trembles&rdquo; (v.4). The warriors who should be the last to break are themselves crying out, their courage gone, their very being shaking within them. When a nation&rsquo;s fighting men weep, there is no human strength left to lean on. The collapse is not only of cities and shrines but of the inner spirit of the people; Moab trembles to its core." }} />
            </div>

            {/* Section 4 - Key Verse */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ color: GOLD, marginBottom: 12, fontSize: "1.1rem" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0 }}>
                <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;My heart cries out for Moab; her fugitives flee to Zoar, to Eglath-shelishiyah. For at the ascent of Luhith they go up weeping; on the road to Horonaim they raise a cry of destruction.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>Isaiah 15:5 (ESV)</p>
              </blockquote>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: 12 }}>My Heart Cries Out for Moab (v.5)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "At the heart of the chapter comes a startling line: &ldquo;My heart cries out for Moab&rdquo; (v.5). The speaker &mdash; whether we hear it as the prophet&rsquo;s own voice or, behind him, the voice of the LORD &mdash; does not stand at a cold distance from the falling enemy. The judgment is real and just, yet it is announced through tears. This is no triumphant taunt over a hated rival but a cry of compassion that wells up even while the burden is being delivered. Here the oracle reveals a heart that grieves over the very destruction it foretells." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The verse then follows the refugees along their roads of flight: &ldquo;her fugitives flee to Zoar &hellip; at the ascent of Luhith they go up weeping; on the road to Horonaim they raise a cry of destruction&rdquo; (v.5). We see the people streaming south toward Zoar, the little town at the southern tip of the Dead Sea where Lot once found shelter; we hear them weeping as they climb the slope of Luhith and crying out along the descent to Horonaim. The poetry traces the actual paths of terror, naming the ascents and roads crowded with people carrying what little they could save. It is a procession of sorrow moving across a stricken land." }} />
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: 12 }}>Withered Waters and a Lion for the Survivors (vv.6-9)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The disaster reaches even the land itself. &ldquo;The waters of Nimrim are a desolation; the grass is withered, the vegetation fails, the greenery is no more&rdquo; (v.6). Nimrim was a place of springs and lush pasture; now its waters are wasted and its meadows dead, a fitting emblem of a nation drained of life. The refugees gather what they can and carry it away: &ldquo;the abundance they have gained and what they have laid up they carry away over the Brook of the Willows&rdquo; (v.7). Whatever wealth survives is being hauled across the border, the last remnants of a kingdom on the move." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The cry circles the whole frontier &mdash; &ldquo;the cry has gone around the land of Moab; her wailing reaches to Eglaim, her wailing reaches to Beer-elim&rdquo; (v.8) &mdash; until the lament has touched every border. Then comes a final, ominous note: &ldquo;For the waters of Dibon are full of blood; for I will bring upon Dibon even more, a lion for those of Moab who escape, for the remnant of the land&rdquo; (v.9). The streams run red with slaughter, and for any who survive the first blow, God promises a further terror &mdash; a lion to hunt down the remnant. There will be no quiet escape; judgment pursues even those who flee, sealing the completeness of the burden against Moab." }} />
            </div>

          </div>
        )}

        {/* TAB 1: KEY THEMES */}
        {activeTab === 1 && (
          <div>

            {/* Theme 1 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GOLD, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Suddenness and Totality of Judgment</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The refrain that opens the chapter sets its dominant note: Ar and Kir are &ldquo;laid waste in a night&rdquo; (v.1). Moab does not fall after a long, visible decline that gives ample warning; it is overwhelmed in the dark, between one evening and the next morning. The image is of a people going to sleep secure in their cities and waking &mdash; if they wake at all &mdash; to ruin. Scripture often pictures judgment this way, arriving suddenly upon those who imagined themselves safe." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The totality is just as striking as the suddenness. The catastrophe touches the cities (Ar, Kir, Dibon), the shrines and high places, the rooftops and the public squares, the soldiers and the common people, the springs and pastures, and finally the roads of escape. There is no corner of Moabite life that the burden does not reach. The chapter sweeps from the heights of the temple to the depths of the Brook of the Willows, gathering the whole nation into one lament." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This theme carries a sober warning that outlives ancient Moab. Security that rests on cities, armies, wealth, and idols is fragile, however impressive it appears. The New Testament echoes the same note when it warns that the day of the Lord comes &ldquo;like a thief in the night&rdquo; upon those who say &ldquo;peace and security&rdquo; (1 Thessalonians 5:2-3). Isaiah 15 stands as a permanent reminder that no human stronghold is proof against the God who rules the nations." }} />
            </div>

            {/* Theme 2 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: PURPLE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>God&rsquo;s Sovereignty Over All Nations</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Isaiah 15 belongs to a great block of oracles (chapters 13 through 23) addressed not to Israel but to the surrounding peoples. By delivering a burden against Moab, Damascus, Egypt, Babylon, and the rest, Isaiah declares that the LORD&rsquo;s authority does not stop at Israel&rsquo;s borders. He is the King of every kingdom, the Judge of every people, the One before whom Moab&rsquo;s shrines and Chemosh&rsquo;s high places are powerless. The nations are not outside his reach; they are accountable to him." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Moab is a pointed choice for this theme. The Moabites were Israel&rsquo;s near neighbors and frequent enemies, descended from Lot through the troubling episode in the cave (Genesis 19:30-38). They had hired Balaam against Israel, opposed them in the wilderness, and warred with them across the centuries. That the LORD pronounces judgment over such a people demonstrates that his rule extends even over Israel&rsquo;s rivals &mdash; and that he holds them to account by his own standard, not theirs." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "For the original readers in Judah, this sovereignty was a source of both comfort and warning. Comfort, because the God they served was not a local power outmatched by foreign empires but the Lord of history who weighs every nation. Warning, because if the LORD judges Moab for its pride and sin, Judah must not presume on its privileged position. The God who rules all peoples judges his own covenant people too." }} />
            </div>

            {/* Theme 3 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Lament and Compassion Within Judgment</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "What sets this oracle apart from a mere announcement of doom is its grief. &ldquo;My heart cries out for Moab&rdquo; (v.5) is not the language of a conqueror celebrating victory but the language of one who weeps over the fallen. The same tone returns in Isaiah 16, where the prophet says, &ldquo;I weep with the weeping of Jazer&rdquo; and &ldquo;my inner parts moan like a lyre for Moab&rdquo; (Isaiah 16:9-11). The judgment is genuine, yet it is delivered through tears, not gloating." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This reveals something essential about the character of God. Through Ezekiel he declares, &ldquo;I have no pleasure in the death of the wicked, but that the wicked turn from his way and live&rdquo; (Ezekiel 33:11; cf. 18:23). God&rsquo;s justice is real and his judgments are righteous, but he does not delight in destruction. The cross stands as the ultimate proof of this: the God who must judge sin went to extraordinary lengths in Christ to provide a way for sinners to live rather than perish." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This holds together two truths that we are often tempted to separate. We may imagine that to take sin seriously means to harden ourselves against the sinner, or that to feel compassion means to soften the demands of justice. Isaiah 15 refuses both errors: the burden is heavy and the verdict is firm, yet the heart that pronounces it weeps. To grieve over judgment while still affirming it is to share something of the very heart of God." }} />
            </div>

            {/* Theme 4 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: TEAL, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Futility of Fleeing From Judgment</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Much of the chapter is taken up with movement: people streaming to the high places, fugitives fleeing to Zoar, refugees climbing Luhith and descending toward Horonaim, the abundance carried away over the Brook of the Willows. Moab is a nation in flight, desperately seeking a place beyond the reach of disaster. Yet the closing verse forecloses every escape: &ldquo;a lion for those of Moab who escape, for the remnant of the land&rdquo; (v.9)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The image of the lion is deliberate. It pictures judgment as a predator that hunts down even those who survive the first blow, so that flight only delays rather than averts the end. This echoes Amos&rsquo;s warning that those who flee one danger fall into another, &ldquo;as if a man fled from a lion, and a bear met him&rdquo; (Amos 5:19). When the judgment is the LORD&rsquo;s, there is no neutral ground to which one can run, no border he cannot cross." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The lesson is not that flight is foolish but that the only true refuge is the LORD himself. The very next chapter holds out an astonishing invitation: Moab&rsquo;s fugitives are urged to seek shelter under the shadow of Zion&rsquo;s throne, where a faithful ruler reigns in steadfast love (Isaiah 16:1-5). There is no escaping the God who judges; there is only fleeing to him. Refuge from God can be found only in God." }} />
            </div>

          </div>
        )}

        {/* TAB 2: VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>

            {/* VV 1 */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ color: GOLD, fontSize: "1.15rem", marginBottom: 10 }}>Verse 1 - Laid Waste in a Night</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "&ldquo;An oracle concerning Moab. Because Ar of Moab is laid waste in a night, Moab is undone; because Kir of Moab is laid waste in a night, Moab is undone.&rdquo; The Hebrew <em>massa</em>, &ldquo;burden,&rdquo; marks this as a heavy word the prophet must carry. Ar and Kir were two of Moab&rsquo;s leading cities, and their overnight ruin signals the fall of the whole. The twice-repeated &ldquo;in a night&rdquo; and &ldquo;Moab is undone&rdquo; hammer home both the suddenness and the finality of the blow." }} />
            </div>

            {/* VV 2-3 */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ color: ROSE, fontSize: "1.15rem", marginBottom: 10 }}>Verses 2-3 - Weeping at the High Places</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "&ldquo;He has gone up to the temple, and to Dibon, to the high places to weep; over Nebo and over Medeba Moab wails. On every head is baldness; every beard is shorn.&rdquo; In their fear the Moabites flee to the shrines of Chemosh, seeking from their idols a comfort those idols cannot give. Shaved heads and cut beards were the recognized gestures of grief and humiliation. Verse 3 spreads the mourning everywhere: &ldquo;in the streets they wear sackcloth; on the housetops and in the squares everyone wails and melts in tears,&rdquo; so that public and private life alike dissolve into weeping." }} />
            </div>

            {/* VV 4 */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.15rem", marginBottom: 10 }}>Verse 4 - The Cry Heard Far Away</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Heshbon and Elealeh cry out; their voice is heard as far as Jahaz. Therefore the armed men of Moab cry aloud; his soul trembles.&rdquo; The lament rises from the northern towns and carries all the way to the desert edge at Jahaz, so that the entire land resounds with weeping. Even the warriors, who should embody Moab&rsquo;s strength, are crying out in terror. When the soldiers themselves tremble and weep, there is no human courage left to hold the nation together." }} />
            </div>

            {/* VV 5 */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ color: GREEN, fontSize: "1.15rem", marginBottom: 10 }}>Verse 5 - My Heart Cries Out</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "&ldquo;My heart cries out for Moab; her fugitives flee to Zoar &hellip; at the ascent of Luhith they go up weeping; on the road to Horonaim they raise a cry of destruction.&rdquo; The voice that delivers the burden also breaks with compassion, for this is grief and not gloating. The refugees flee south to Zoar &mdash; the same little town that sheltered Lot when Sodom fell &mdash; while others climb the slope of Luhith in tears and cry out along the road to Horonaim. The poetry traces real paths of flight, each named place crowded with weeping people fleeing the disaster." }} />
            </div>

            {/* VV 6-7 */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ color: TEAL, fontSize: "1.15rem", marginBottom: 10 }}>Verses 6-7 - The Waters and the Withered Grass</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "&ldquo;The waters of Nimrim are a desolation; the grass is withered, the vegetation fails, the greenery is no more. Therefore the abundance they have gained and what they have laid up they carry away over the Brook of the Willows.&rdquo; Even the land mirrors the nation&rsquo;s death: the springs of Nimrim run dry and the lush pastures wither. The survivors gather their remaining wealth and haul it across the border, carrying the last of their stored-up goods over the Brook of the Willows. A people once secure in its abundance is now reduced to refugees fleeing with whatever they can carry." }} />
            </div>

            {/* VV 8-9 */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ color: GOLD, fontSize: "1.15rem", marginBottom: 10 }}>Verses 8-9 - Blood in the Waters and a Lion for the Remnant</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "&ldquo;For a cry has gone around the land of Moab; her wailing reaches to Eglaim, her wailing reaches to Beer-elim. For the waters of Dibon are full of blood; for I will bring upon Dibon even more.&rdquo; The lament circles the entire frontier of Moab, leaving no border untouched. The streams of Dibon run red with slaughter, and the LORD adds the chilling promise to bring yet more upon the city. The chapter closes with the image of &ldquo;a lion for those of Moab who escape, for the remnant of the land&rdquo; (v.9) &mdash; judgment that hunts down even the survivors, so that flight offers no final safety." }} />
            </div>

          </div>
        )}

        {/* TAB 3: APPLICATION */}
        {activeTab === 3 && (
          <div>

            {/* App 1 */}
            <div style={{ marginBottom: 36 }}>
              <h2 style={{ fontSize: "1.4rem", color: GOLD, marginBottom: 12 }}>Hold Your Security Loosely</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Moab fell &ldquo;in a night,&rdquo; its cities, wealth, and armies overturned between one evening and the next morning. The chapter is a warning against trusting in the things that feel most solid &mdash; our finances, our institutions, our reputations, our plans. None of these is wrong to enjoy, but each is on loan and can be withdrawn far more quickly than we imagine. Wisdom holds such things with open hands and rests its deepest security in the God who alone cannot be shaken." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Jesus told the parable of the rich fool who stored up abundance and said to his soul, &ldquo;Take your ease,&rdquo; only to hear, &ldquo;This night your soul is required of you&rdquo; (Luke 12:19-20). Like Moab&rsquo;s overnight ruin, the rich man&rsquo;s reckoning came in a single night. The call is not to anxiety but to lay up treasure where it cannot be lost &mdash; to be &ldquo;rich toward God&rdquo; rather than secure in a stability that may vanish before dawn." }} />
            </div>

            {/* App 2 */}
            <div style={{ marginBottom: 36 }}>
              <h2 style={{ fontSize: "1.4rem", color: PURPLE, marginBottom: 12 }}>Weep Over Your Enemies</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The cry &ldquo;My heart cries out for Moab&rdquo; models a posture that is profoundly counter-cultural. Moab was Israel&rsquo;s neighbor and frequent enemy, yet the oracle grieves rather than gloats over its fall. We are constantly tempted to take quiet satisfaction in the downfall of those we oppose &mdash; rivals, opponents, people who have wronged us. Isaiah 15 calls us instead to feel the weight of their loss, to let our hearts ache even for those we might be inclined to count as adversaries." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This anticipates the command of Jesus: &ldquo;Love your enemies and pray for those who persecute you&rdquo; (Matthew 5:44). And remarkably, it was from Moab that Ruth came &mdash; a Moabite woman grafted into Israel and into the very line of David and of Christ (Ruth 4:13-22; Matthew 1:5). The God who weeps over Moab also redeems out of Moab, reminding us that no people lies beyond the reach of his mercy and that our enemies may yet become our family." }} />
            </div>

            {/* App 3 */}
            <div style={{ marginBottom: 36 }}>
              <h2 style={{ fontSize: "1.4rem", color: TEAL, marginBottom: 12 }}>Flee to God, Not From Him</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Moab&rsquo;s tragedy was that it fled to its high places and its idols, and then fled across its borders, but never fled to the living God. The lion of verse 9 teaches that there is no escaping judgment by running away from the One who sends it. Yet the next chapter holds out an open door: Moab&rsquo;s outcasts are invited to find shelter under the shadow of a throne of steadfast love in Zion (Isaiah 16:4-5). The only refuge from God is found in God himself." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "For us, this points directly to Christ, in whom alone there is shelter from the judgment our sin deserves. To flee to the high places &mdash; to our own religion, achievements, or self-made securities &mdash; is to repeat Moab&rsquo;s mistake. To flee to Christ is to find the refuge that holds. The same God whose burden falls on Moab opens his arms in his Son to all who will come and hide in him." }} />
            </div>

            {/* Reflection questions */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: GOLD, fontSize: "1.2rem", marginBottom: 18 }}>Reflection Questions</h3>
              <ol style={{ color: MUTED, lineHeight: 1.9, paddingLeft: 22, margin: 0 }}>
                <li style={{ marginBottom: 14 }} dangerouslySetInnerHTML={{ __html: "Where am I tempted to rest my security in things that, like Moab&rsquo;s cities, could be taken away in a single night? What would it look like to hold those things more loosely and rest in God instead?" }} />
                <li style={{ marginBottom: 14 }} dangerouslySetInnerHTML={{ __html: "Is there anyone whose downfall I have quietly enjoyed? How does &ldquo;My heart cries out for Moab&rdquo; challenge the way I think and feel about people I count as opponents?" }} />
                <li style={{ marginBottom: 14 }} dangerouslySetInnerHTML={{ __html: "The Moabites ran to their high places to weep but found no power to save. Where might I be running for comfort to things that cannot truly help me?" }} />
                <li style={{ marginBottom: 14 }} dangerouslySetInnerHTML={{ __html: "How does it change my view of God to see that he announces judgment with tears rather than triumph (Ezekiel 33:11)? How should that shape the way I speak of God&rsquo;s justice?" }} />
                <li style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: "Ruth the Moabite was redeemed into the line of Christ. Who in my life might I be writing off as beyond the reach of God&rsquo;s mercy, and how might I pray for them instead?" }} />
              </ol>
            </div>

          </div>
        )}

      </div>

      {/* VIDEO SECTION (always visible) */}
      <div style={{ borderTop: `1px solid ${BORDER}`, background: CARD, padding: "48px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", color: TEXT, marginBottom: 8, textAlign: "center" }}>Watch &amp; Listen</h2>
          <p style={{ color: MUTED, fontSize: "0.95rem", textAlign: "center", marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Teaching and reflections on Isaiah 15 and the oracle concerning Moab." }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <p style={{ color: TEXT, fontSize: "0.95rem", padding: "14px 16px", margin: 0, lineHeight: 1.5 }}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
