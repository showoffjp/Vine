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
  { videoId: "kM7pLrWvQ9z", title: "Isaiah 17: The Oracle Concerning Damascus Explained" },
  { videoId: "tB3hNpXcDoY", title: "The Forgotten God of Your Salvation - Isaiah 17:9-11" },
  { videoId: "qW8sFjGmYtA", title: "When the Nations Rage - Isaiah 17:12-14" },
  { videoId: "rV4zKqHnBxL", title: "BibleProject - The Book of Isaiah Overview" },
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
          <p style={{ color: GOLD, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Old Testament Study</p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>Isaiah Chapter 17</h1>
          <p style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: 14, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "&ldquo;In that day man will look to his Maker, and his eyes will look on the Holy One of Israel.&rdquo; (Isaiah 17:7)" }} />
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "Isaiah 17 is an oracle of judgment that becomes, almost without warning, a summons to look at the Maker. It announces the fall of Damascus, the proud capital of Syria, and with it the ruin of the Northern Kingdom of Israel that had bound itself to Syria in a fateful alliance. Yet woven through the verses of doom is a quieter and more hopeful thread: the remnant motif, the gleanings left after the harvest, and the day when a chastened people will turn at last from their handmade altars to the Holy One of Israel. The chapter exposes the root of all the trouble in a single devastating sentence &mdash; &ldquo;you have forgotten the God of your salvation and have not remembered the Rock of your refuge&rdquo; (17:10). It ends with the roar of many nations, like the thundering of the sea, suddenly stilled by the rebuke of God. Here the futility of trusting in alliances and idols meets the sovereignty of the God who alone is the Rock of refuge." }} />
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
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: 12 }}>The Place of Isaiah 17</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Isaiah 17 belongs to the great series of oracles against the nations that runs from chapter 13 through chapter 23. Each oracle declares the sovereignty of the Lord over a particular people or city &mdash; Babylon, Assyria, Philistia, Moab, and here Damascus, the capital of Syria. The historical setting is the volatile period around 735 to 732 BC, when Syria and the Northern Kingdom of Israel formed an alliance and pressured the kingdom of Judah to join their coalition against the rising power of Assyria. This is the Syro-Ephraimite crisis that lies behind the famous Immanuel sign of Isaiah 7." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Because Israel had thrown in its lot with Syria, the oracle against Damascus is also an oracle against Ephraim, the Northern Kingdom. Their fates are bound together by the alliance they trusted. History confirmed the prophecy: Assyria conquered Damascus in 732 BC, and the Northern Kingdom of Samaria fell in 722 BC. The chapter moves in three movements &mdash; the announcement of judgment on Damascus and Ephraim (vv.1-6), the turning of a remnant from idols to the Maker (vv.7-11), and the stilling of the raging nations by the rebuke of God (vv.12-14)." }} />
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>Damascus Will Cease to Be a City</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;An oracle concerning Damascus. Behold, Damascus will cease to be a city and will become a heap of ruins&rdquo; (17:1). The opening is stark. Damascus was one of the most ancient and proud cities of the world, the powerful capital of Syria, yet the word of the Lord pronounces its end. What human strength regarded as permanent the Lord declares will become a heap of ruins. The certainty of the prophecy rests not on political calculation but on the authority of the God who governs the rise and fall of every city." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The judgment spreads beyond Syria. &ldquo;The cities of Aroer are deserted; they will be for flocks, which will lie down, and none will make them afraid&rdquo; (17:2). The image is haunting: once-bustling cities given over to grazing sheep. &ldquo;The fortress will disappear from Ephraim, and the kingdom from Damascus; and the remnant of Syria will be like the glory of the children of Israel&rdquo; (17:3). Israel and Syria, the two allies, share a single doom. The Northern Kingdom loses its fortress, Syria loses its kingdom, and what remains of proud Syria will be as diminished as the faded glory of Israel itself." }} />
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>The Glory of Jacob Brought Low</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;And in that day the glory of Jacob will be brought low, and the fat of his flesh will grow lean&rdquo; (17:4). The prosperity and pride of the Northern Kingdom will wither away. Isaiah reaches for vivid agricultural pictures to convey how little will remain. The judgment will be like a reaper who gathers the standing grain and harvests the ears with his arm, leaving the field stripped bare &mdash; like one gleaning ears of grain in the Valley of Rephaim, where only scattered remnants are left behind (17:5)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Gleanings will be left in it, as when an olive tree is beaten &mdash; two or three berries in the top of the highest bough, four or five on the branches of a fruit tree&rdquo; (17:6). Here is the remnant motif that runs all through Isaiah. After the harvest of judgment, only a tiny remnant survives &mdash; two or three berries in the highest branches, a handful on the boughs. The picture is one of severe judgment, yet it is not total annihilation. A remnant is preserved, and that surviving few becomes the seed of hope and the object of God&rsquo;s ongoing purpose." }} />
            </div>

            {/* Section 4 - Key Verse */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ color: GOLD, marginBottom: 12, fontSize: "1.1rem" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0 }}>
                <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;You have forgotten the God of your salvation and have not remembered the Rock of your refuge.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>Isaiah 17:10 (ESV)</p>
              </blockquote>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: 12 }}>Looking to the Maker, Not the Altars</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The judgment has a redemptive purpose. &ldquo;In that day man will look to his Maker, and his eyes will look on the Holy One of Israel&rdquo; (17:7). When everything they had trusted has been stripped away &mdash; their fortresses, their alliances, their prosperity &mdash; the survivors finally look upward. The verb &ldquo;look&rdquo; is repeated to mark the great reversal: eyes that had been fixed on idols and human power are at last turned toward their Maker, the Holy One of Israel who made them and alone can save them." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The turning to God is also a turning from idols. &ldquo;He will not look to the altars, the work of his hands, and he will not look on the Asherim or the altars of incense that his own fingers have made&rdquo; (17:8). The contrast is pointed: the Maker who made them versus the altars they made with their own hands. The Asherim were wooden poles dedicated to a Canaanite goddess, and the altars of incense were tools of false worship. In the day of judgment the folly of worshiping what one&rsquo;s own fingers have fashioned becomes plain, and the heart turns to the One who fashioned the worshiper." }} />
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: 12 }}>The Raging Nations Rebuked</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The root of the disaster is named without flinching: &ldquo;For you have forgotten the God of your salvation and have not remembered the Rock of your refuge; therefore, though you plant pleasant plants and sow the vine-branch of a stranger&hellip; yet the harvest will flee away in a day of grief and incurable pain&rdquo; (17:10-11). Forgetting God is the essence of their sin. They had labored to build security through foreign alliances and borrowed cults, planting their pleasant plants with great care, only to watch the harvest vanish in a single day of grief." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The chapter closes with a sudden, sweeping vision of the nations. &ldquo;Ah, the thunder of many peoples; they thunder like the thundering of the sea! Ah, the roar of nations; they roar like the roaring of mighty waters!&rdquo; (17:12). The enemy hosts are like a raging, chaotic sea threatening to overwhelm. But God speaks: &ldquo;he will rebuke them, and they will flee far away, chased like chaff on the mountains before the wind and whirling dust before the storm&rdquo; (17:13). At evening there is terror, and before morning they are gone. &ldquo;This is the portion of those who loot us, and the lot of those who plunder us&rdquo; (17:14). The raging sea of the nations is stilled by a single word from the Lord." }} />
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
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Judgment on the Fatal Alliance</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The oracle is addressed to Damascus, but its judgment falls equally on Ephraim, the Northern Kingdom, because the two had bound themselves together. &ldquo;The fortress will disappear from Ephraim, and the kingdom from Damascus&rdquo; (17:3). Israel had abandoned trust in the Lord and instead trusted in a political alliance with Syria against Assyria. By yoking itself to a pagan power, the covenant people had effectively chosen the strength of nations over the strength of their God." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The historical fulfillment is sobering. Assyria captured Damascus in 732 BC, ending Syrian power, and the Northern Kingdom fell to Assyria in 722 BC, ending the kingdom of Israel. The alliance that was supposed to provide security delivered ruin. Both partners were swept away in the very flood they had joined hands to resist. The lesson is woven into the structure of the chapter: an alliance built on the abandonment of God cannot deliver what only God can give." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This theme is central to Isaiah&rsquo;s prophetic message to Judah as well. Again and again Isaiah warns against the temptation to seek security in foreign powers rather than in the Lord. The fall of Damascus and Ephraim stands as a vivid object lesson for Judah: see what happens to those who trust in alliances and forget their God. Trust placed in human coalitions is trust placed in something that will itself be brought low in the day of the Lord&rsquo;s reckoning." }} />
            </div>

            {/* Theme 2 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Remnant Motif: Gleanings Left Behind</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "One of Isaiah&rsquo;s recurring themes appears here in striking agricultural imagery. The judgment is likened to a harvest that strips the field bare, yet leaves a few gleanings: &ldquo;as when an olive tree is beaten &mdash; two or three berries in the top of the highest bough, four or five on the branches&rdquo; (17:6). After the great shaking, only a tiny remnant survives. The picture is severe &mdash; almost everything is gathered up in judgment &mdash; but it is not total annihilation." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The remnant theme runs all through Isaiah, from the prophet&rsquo;s son named Shear-jashub, &ldquo;a remnant shall return,&rdquo; to the promise that a holy seed will remain like the stump of a felled tree. The few berries left in the highest branches are not merely the leftovers of disaster; they are the seed of hope. God&rsquo;s judgments are real and severe, yet he never wholly abandons his purpose. Out of the ruin he preserves a remnant through whom his redemptive plan continues." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This pattern reveals the heart of God in judgment. He does not delight in destruction for its own sake; even his most severe acts serve a purpose of preservation and renewal. The remnant is the bridge between judgment and hope, the thread that carries God&rsquo;s promises through the darkest seasons. Wherever a few are left who will turn back to the Maker, there the future of God&rsquo;s people is secured. The gleanings in the highest bough are a quiet sign that grace outlasts wrath." }} />
            </div>

            {/* Theme 3 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: PURPLE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Turning from Idols to the Maker</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "At the center of the chapter is a beautiful reversal. &ldquo;In that day man will look to his Maker, and his eyes will look on the Holy One of Israel&rdquo; (17:7). The judgment that strips away every false support has a gracious aim: to turn blind eyes back to the One who made them. When fortresses fall and harvests fail and alliances collapse, the survivors are at last brought to look upward to their Maker. The very catastrophe becomes the occasion for a recovery of true sight." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The turning to God is inseparable from a turning from idols. &ldquo;He will not look to the altars, the work of his hands, and he will not look on the Asherim or the altars of incense that his own fingers have made&rdquo; (17:8). Isaiah sets the Maker against the made: the God who fashioned the worshiper versus the altars the worshiper fashioned with his own fingers. There is a profound irony in bowing down to a thing one has manufactured. Idolatry inverts reality, treating the work of human hands as a source of help when it is only a lifeless object." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This contrast between the Maker and the made is one of Isaiah&rsquo;s favorite ways of exposing the folly of idolatry. The idol cannot make, cannot save, cannot answer; it must be carried, but the Maker carries his people. The day of judgment finally makes this plain, and a chastened people abandons the handmade altars to look to the Holy One of Israel. The deepest mercy hidden in the judgment is that it gives back to the people the only object worthy of their gaze &mdash; God himself." }} />
            </div>

            {/* Theme 4 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GREEN, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Forgetting God as the Root Sin</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Isaiah locates the source of all the trouble in a single penetrating diagnosis: &ldquo;For you have forgotten the God of your salvation and have not remembered the Rock of your refuge&rdquo; (17:10). Beneath the alliances and the idols and the misplaced trust lies this one root sin &mdash; forgetting God. To forget the God of your salvation is not mere mental lapse but a settled neglect of the One who saved you, a failure to remember his past deliverance and to rely on his present help." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The titles Isaiah uses are loaded with covenant memory. &ldquo;The God of your salvation&rdquo; recalls the exodus and every deliverance since. &ldquo;The Rock of your refuge&rdquo; echoes the Song of Moses in Deuteronomy 32, where the Lord is repeatedly called the Rock &mdash; the stable, unchanging, faithful foundation of his people. To forget the Rock is to abandon the only secure ground and to build instead on the shifting sand of human strength and false gods that cannot save." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The consequence is futility. &ldquo;Though you plant pleasant plants and sow the vine-branch of a stranger, and though you make them grow on the day that you plant them&hellip; yet the harvest will flee away in a day of grief and incurable pain&rdquo; (17:10-11). They labor with great care over their borrowed cults and foreign alliances, and for a moment things seem to flourish, but the harvest vanishes. Whatever is planted in forgetfulness of God will not endure; the work of the forgetful comes to grief because it is severed from the only source of life." }} />
            </div>

            {/* Theme 5 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: TEAL, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Futility of Trusting Human Strength</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Running through the whole oracle is the exposure of misplaced trust. Damascus trusted its strength as a city; Ephraim trusted its fortresses and its alliance with Syria; both trusted the altars they had made with their own hands. Every one of these supports is shown to be hollow. The fortress disappears, the kingdom vanishes, the glory of Jacob grows lean, and the harvest flees away. What looked solid is revealed as nothing in the day of the Lord." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This is one of Isaiah&rsquo;s most insistent warnings, and it is aimed not only at the nations but at the people of God. The temptation to secure ourselves by the means the world prizes &mdash; political power, military strength, economic prosperity, strategic alliances &mdash; is perennial. Isaiah strips away the illusion. These things cannot bear the weight we place on them; they will themselves be brought low. To build a life or a nation on them is to build on what is destined to fail." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The contrast is everywhere implicit: over against the fortresses that disappear and the harvests that flee stands the Rock of refuge that endures. The only trust that does not disappoint is trust in the God of salvation. Everything else, however impressive, belongs to the things that are shaken. Isaiah&rsquo;s oracle invites the reader to transfer his confidence from the made to the Maker, from the fortress that falls to the Rock that stands forever." }} />
            </div>

            {/* Theme 6 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>God&rsquo;s Sovereignty Over the Raging Nations</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter ends with a vision of overwhelming power suddenly subdued. &ldquo;Ah, the thunder of many peoples; they thunder like the thundering of the sea! Ah, the roar of nations; they roar like the roaring of mighty waters!&rdquo; (17:12). The hostile nations are pictured as a raging sea, the ancient symbol of chaos and menace, surging as if to swallow everything in their path. To human eyes such a tide of peoples appears unstoppable, a flood beyond any power to resist." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Then comes the divine word, and the sea falls silent. &ldquo;The nations roar like the roaring of many waters, but he will rebuke them, and they will flee far away, chased like chaff on the mountains before the wind and whirling dust before the storm&rdquo; (17:13). A single rebuke from God turns the raging waters into fleeing chaff and whirling dust. &ldquo;At evening time, behold, terror! Before morning, they are no more&rdquo; (17:14). What threatened at dusk has vanished by dawn; the menace evaporates at the command of the Lord." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This is the same sovereignty celebrated in Psalm 46, where God is a refuge though the waters roar and foam, and the same authority displayed when Jesus rebuked the wind and the sea so that there was a great calm in Mark 4. The God who stills the raging sea of the nations is the Rock of refuge his people had forgotten. &ldquo;This is the portion of those who loot us, and the lot of those who plunder us&rdquo; (17:14). The chapter that began with the ruin of Damascus ends with the assurance that no raging power can finally prevail against the purposes of the sovereign Lord." }} />
            </div>

          </div>
        )}

        {/* TAB 2: VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>

            {/* v.1 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verse 1: The Oracle Against Damascus</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>A Heap of Ruins</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.1</strong> &mdash; &ldquo;An oracle concerning Damascus. Behold, Damascus will cease to be a city and will become a heap of ruins.&rdquo; The oracle opens with the doom of Syria&rsquo;s ancient and powerful capital. What human strength considered permanent the word of the Lord declares will become rubble. The certainty rests on the authority of the God who rules the rise and fall of every city and nation." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Damascus was the head of the Syro-Ephraimite alliance that had pressured Judah to join its coalition against Assyria. Its fall, fulfilled when Assyria captured the city in 732 BC, signals the collapse of the whole alliance and serves as a warning to all who trust in such coalitions rather than in the Lord." }} />
            </div>

            {/* vv.2-3 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 2-3: Ephraim and Syria Together</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Fortress Will Disappear</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.2</strong> &mdash; &ldquo;The cities of Aroer are deserted; they will be for flocks, which will lie down, and none will make them afraid.&rdquo; Once-inhabited cities become quiet pastures for grazing flocks. The image of sheep lying down undisturbed where people once lived conveys the completeness of the desolation that judgment brings." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.3</strong> &mdash; &ldquo;The fortress will disappear from Ephraim, and the kingdom from Damascus; and the remnant of Syria will be like the glory of the children of Israel.&rdquo; Israel and Syria share a single doom because of their alliance. Ephraim loses its fortress, Syria loses its kingdom, and what remains of proud Syria will be as faded as the diminished glory of Israel itself." }} />
            </div>

            {/* vv.4-6 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 4-6: The Harvest and the Gleanings</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Two or Three Berries Left</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.4</strong> &mdash; &ldquo;And in that day the glory of Jacob will be brought low, and the fat of his flesh will grow lean.&rdquo; The prosperity and pride of the Northern Kingdom will waste away. The picture of a once-fat body growing lean conveys the wasting effect of judgment on a people who had grown comfortable and self-secure." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.5</strong> &mdash; &ldquo;And it shall be as when the reaper gathers standing grain and his arm harvests the ears, and as when one gleans the ears of grain in the Valley of Rephaim.&rdquo; The judgment is like a reaper stripping a field bare, leaving only what scattered ears the gleaners can find. The fertile Valley of Rephaim near Jerusalem makes the image of a stripped harvest vivid to Isaiah&rsquo;s hearers." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.6</strong> &mdash; &ldquo;Gleanings will be left in it, as when an olive tree is beaten &mdash; two or three berries in the top of the highest bough, four or five on the branches.&rdquo; Here is the remnant motif. After the harvest of judgment only a tiny few survive, like the stray olives left after the tree is beaten. The judgment is severe but not total; a remnant is preserved as the seed of hope." }} />
            </div>

            {/* vv.7-8 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 700 }}>Verses 7-8: Looking to the Maker</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Maker, Not the Made</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.7</strong> &mdash; &ldquo;In that day man will look to his Maker, and his eyes will look on the Holy One of Israel.&rdquo; The judgment has a gracious aim. When every false support has been stripped away, the survivors finally look upward. The repeated verb &ldquo;look&rdquo; marks the great reversal: eyes once fixed on idols and human power are turned at last to their Maker." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.8</strong> &mdash; &ldquo;He will not look to the altars, the work of his hands, and he will not look on the Asherim or the altars of incense that his own fingers have made.&rdquo; The contrast is pointed: the Maker who made them against the altars they made with their own hands. The Asherim were poles for a Canaanite goddess; the irony of bowing to what one&rsquo;s own fingers fashioned is exposed in the day of judgment." }} />
            </div>

            {/* vv.9-11 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 700 }}>Verses 9-11: The Forgotten God</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Rock of Your Refuge</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.9</strong> &mdash; &ldquo;In that day their strong cities will be like the deserted places of the wooded heights and the hilltops, which they deserted because of the children of Israel, and there will be desolation.&rdquo; The strong cities of Ephraim will be abandoned just as the Canaanites&rsquo; cities were once abandoned before Israel. The wheel turns full circle, and the dispossessor becomes the dispossessed." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.10</strong> &mdash; &ldquo;For you have forgotten the God of your salvation and have not remembered the Rock of your refuge.&rdquo; Here is the root sin named. Beneath every alliance and idol lies this one failure &mdash; forgetting the God who saved them. The titles &ldquo;God of your salvation&rdquo; and &ldquo;Rock of your refuge&rdquo; recall the exodus and the Song of Moses, where the Lord is the faithful, unchanging Rock." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.11</strong> &mdash; &ldquo;though you make them grow&hellip; yet the harvest will flee away in a day of grief and incurable pain.&rdquo; They labor carefully over their borrowed cults and alliances, and for a moment things flourish, but the harvest vanishes. Whatever is planted in forgetfulness of God comes to grief, severed from the only source of life." }} />
            </div>

            {/* vv.12-14 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verses 12-14: The Raging Nations Stilled</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Before Morning, They Are No More</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.12</strong> &mdash; &ldquo;Ah, the thunder of many peoples; they thunder like the thundering of the sea! Ah, the roar of nations; they roar like the roaring of mighty waters!&rdquo; The hostile nations are pictured as a raging sea, the ancient symbol of chaos, surging as if to swallow everything. To human eyes the tide of peoples seems unstoppable." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.13</strong> &mdash; &ldquo;but he will rebuke them, and they will flee far away, chased like chaff on the mountains before the wind and whirling dust before the storm.&rdquo; A single rebuke from God turns the raging waters into fleeing chaff and whirling dust. The menace that seemed overwhelming scatters at the command of the Lord, who rules the chaos of the nations as easily as the chaos of the sea." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.14</strong> &mdash; &ldquo;At evening time, behold, terror! Before morning, they are no more. This is the portion of those who loot us, and the lot of those who plunder us.&rdquo; What threatened at dusk has vanished by dawn. The chapter that began with the ruin of Damascus ends with the assurance that no raging power can finally prevail against the purposes of the sovereign Lord, the Rock of refuge for his people." }} />
            </div>

          </div>
        )}

        {/* TAB 3: APPLICATION */}
        {activeTab === 3 && (
          <div>

            {/* Application 1 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: 12 }}>Beware the Fatal Alliance</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Israel&rsquo;s ruin came in part from binding itself to Syria, trusting a political alliance instead of the Lord. The judgment that fell on Damascus fell equally on Ephraim because their fates were joined. The warning reaches us wherever we place our security in coalitions, connections, and human strength rather than in God. What we yoke ourselves to in order to feel safe may itself be swept away in the very flood we feared." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application is to examine where our confidence really rests. Are there alliances, relationships, or strategies in which we have placed a trust that belongs to God alone? Isaiah invites us to transfer our confidence from the fortress that disappears to the Rock that endures, and to refuse any partnership that quietly displaces our reliance on the Lord of our salvation." }} />
            </div>

            {/* Application 2 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: ROSE, fontSize: "1.1rem", marginBottom: 12 }}>Hope in the Remnant</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The gleanings left after the harvest &mdash; two or three berries in the highest branches &mdash; remind us that God&rsquo;s judgments are never the whole story. Even in the most severe seasons, he preserves a remnant through whom his purposes continue. When the church seems small, when faithfulness seems rare, when everything appears stripped away, the surviving few are not the leftovers of defeat but the seed of hope." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application is to take heart when we feel like a tiny remnant in a hostile age. God has always worked through the few that remain. The believer who feels overwhelmed by the surrounding decline can find courage in the pattern of Scripture: grace outlasts wrath, and the highest bough still holds its berries. Our task is to be among the faithful gleanings who keep looking to the Maker." }} />
            </div>

            {/* Application 3 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.1rem", marginBottom: 12 }}>Look to the Maker, Not the Made</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;In that day man will look to his Maker&hellip; and he will not look to the altars&hellip; that his own fingers have made.&rdquo; The chapter exposes the folly of trusting in what we ourselves have manufactured. Our idols today are seldom carved poles; they are the careers, comforts, reputations, and securities we build with our own hands and then look to for help they cannot give. The day of trouble exposes them as the lifeless objects they are." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application is to let our gaze be reoriented before judgment forces it. Ask what your eyes habitually look to for security and worth. Is it the Maker, the Holy One who fashioned you, or the things your own fingers have made? Turning to God is always also a turning from idols. The mercy hidden in every shaking is that it can give us back the only object worthy of our gaze." }} />
            </div>

            {/* Application 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Do Not Forget the Rock of Your Refuge</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Isaiah traces all the disaster to one root: &ldquo;you have forgotten the God of your salvation and have not remembered the Rock of your refuge.&rdquo; Forgetting God is the quiet sin that precedes every louder one. It is not always a dramatic rejection; more often it is a slow neglect, a failure to remember his past deliverances and to lean on his present help. From that forgetfulness flow the alliances, the idols, and the futile labors that come to grief." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application is the discipline of remembrance. Like Moses calling Israel to remember the Rock, we must deliberately rehearse what God has done and recall that he alone is our refuge. Build into your life the habits that keep God in view &mdash; Scripture, worship, the recounting of his mercies &mdash; so that you do not drift into the forgetfulness that left a nation in ruins. To remember the Rock is to stand on the only foundation that endures." }} />
            </div>

            {/* Application 5 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: 12 }}>Reflection Questions</h3>
              <ol style={{ color: MUTED, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                <li dangerouslySetInnerHTML={{ __html: "Israel trusted an alliance with Syria more than the Lord. Where are you tempted to find your security in human strength, connections, or strategies rather than in God?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The remnant left only two or three berries in the highest bough. How does the remnant motif give you hope when faithfulness seems rare and the church seems small?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Isaiah contrasts the Maker with the altars made by human hands. What things have you fashioned with your own hands &mdash; achievements, comforts, reputations &mdash; that you are tempted to look to for help they cannot give?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Forgetting God is named as the root sin. In what ways have you grown forgetful of the God of your salvation, and what habits could help you remember the Rock of your refuge?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The raging nations were stilled by a single rebuke from God. What roaring threat in your life or in the world feels unstoppable, and how does God&rsquo;s sovereignty over the nations steady your heart?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The judgment was meant to turn eyes back to the Maker. Is there a hardship in your life that God may be using to lift your gaze from false supports to himself?" }} />
              </ol>
            </div>

            {/* Application 6 */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}22 0%, ${TEAL}11 100%)`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Prayer Focus</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Holy One of Israel, my Maker, I confess how easily I forget you. I have looked to the altars my own fingers have made and trusted in the fortresses that disappear and the alliances that fail. Forgive my forgetfulness, and turn my eyes upward to look to you alone. Teach me to remember the God of my salvation and to lean on you as the Rock of my refuge. When the nations rage and the floods of trouble roar like the thundering of the sea, remind me that one word from you scatters them like chaff before the wind. Make me part of the faithful remnant that looks to you and does not bow to idols. And when you allow hardship to strip away my false supports, let it accomplish its merciful work of lifting my gaze to you. You are my Rock and my refuge; on you alone I will stand. Through Jesus Christ my Lord, amen." }} />
            </div>

          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 8, color: TEXT }}>Video Teaching</h2>
          <p style={{ color: MUTED, marginBottom: 32, fontSize: "0.95rem" }}>Watch these selected teachings to deepen your understanding of Isaiah 17.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "12px 16px" }}>
                  <p style={{ color: TEXT, fontSize: "0.9rem", fontWeight: 600, margin: 0 }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
