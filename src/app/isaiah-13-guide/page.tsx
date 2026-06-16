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
  { videoId: "kR7dGmW2pXq", title: "Isaiah 13: The Oracle Concerning Babylon" },
  { videoId: "zT4nBvLcHsY", title: "The Day of the LORD: Near and Yet to Come" },
  { videoId: "mF9pXjQwTbR", title: "When the Stars Go Dark: Cosmic Judgment in Scripture" },
  { videoId: "qN6sYhVkDmL", title: "The Fall of Babylon from Isaiah to Revelation" },
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
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>Isaiah Chapter 13</h1>
          <p style={{ color: GOLD, fontSize: "1rem", fontStyle: "italic", marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Wail, for the day of the LORD is near; as destruction from the Almighty it will come.&rdquo; &mdash; Isaiah 13:6" }} />
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "Isaiah 13 opens the great series of oracles against the nations (chapters 13&ndash;23), and it begins with the empire that would one day swallow Judah whole: Babylon. The prophet sees a banner raised on a bare hill and hears the LORD summoning his consecrated warriors to execute his anger upon a proud kingdom. The language swells beyond a single battlefield into something cosmic and final &mdash; the sun darkened at its rising, the moon withholding its light, the stars of heaven giving no shining. This is the Day of the LORD, that terrible and recurring biblical theme in which God himself steps onto the stage of history to punish the world for its evil and bring down the pomp of the arrogant. By the chapter&rsquo;s end, glorious Babylon, the jewel of kingdoms, lies like Sodom and Gomorrah, an uninhabited ruin where only wild beasts and night creatures dwell." }} />
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
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: 12 }}>The Oracle Begins (v.1)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter opens with a formal heading: &ldquo;The oracle concerning Babylon which Isaiah the son of Amoz saw&rdquo; (v.1). The Hebrew word translated &ldquo;oracle&rdquo; is <em>massa</em>, which carries the sense of a burden &mdash; a weighty, often ominous word laid upon the prophet to deliver. This single verse marks a hinge in the book of Isaiah, beginning the section of oracles against the nations that runs through chapter 23. After eleven chapters concerned chiefly with Judah and Jerusalem, the prophet&rsquo;s gaze now lifts to the great powers of the world stage, and the first to be named is Babylon." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "That Babylon stands at the head of the list is striking, for in Isaiah&rsquo;s own day Assyria, not Babylon, was the dominant threat to Judah. Yet the prophet looks down the corridor of time to the empire that would one day burn Jerusalem and carry its people into exile. The verb &ldquo;saw&rdquo; reminds us that this is revelation, not speculation &mdash; Isaiah did not deduce the future but received it as a vision. From the very first line, the chapter frames the rise and fall of empires as something seen and decreed in the courts of heaven before it ever unfolds on earth." }} />
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>The Mustering of the Army (vv.2-5)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The vision opens with the sights and sounds of an army being raised: &ldquo;On a bare hill raise a signal; cry aloud to them; wave the hand for them to enter the gates of the nobles&rdquo; (v.2). A banner is lifted on a treeless height where it can be seen for miles, and a shout goes up to gather the troops. Then comes the astonishing claim: &ldquo;I myself have commanded my consecrated ones, and have summoned my mighty men to execute my anger, my proudly exulting ones&rdquo; (v.3). The soldiers are called the LORD&rsquo;s &ldquo;consecrated ones&rdquo; &mdash; set apart for a holy task, even though they may not know the God who wields them." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The prophet hears the rising din: &ldquo;The sound of a tumult is on the mountains as of a great multitude! The sound of an uproar of kingdoms, of nations gathering together!&rdquo; (v.4). Whole kingdoms are being marshaled from &ldquo;the end of the heavens&rdquo; (v.5), coming from a distant land as the instruments of divine wrath. The closing line of the section names the true commander: &ldquo;the LORD and the weapons of his indignation, to destroy the whole land.&rdquo; The armies are real, the soldiers are real, but the hand that moves them is the hand of God himself." }} />
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>Wail, for the Day Is Near (vv.6-8)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The summons to the army gives way to a summons to lament: &ldquo;Wail, for the day of the LORD is near; as destruction from the Almighty it will come&rdquo; (v.6). Here the chapter names its central theme &mdash; the Day of the LORD &mdash; and binds it to one of the oldest names of God, <em>Shaddai</em>, the Almighty. There is even a play on words in the Hebrew: <em>shod</em> (destruction) from <em>Shaddai</em> (the Almighty). The day arrives not as random catastrophe but as judgment flowing from the very character and power of God." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The effect on those who face it is total collapse of strength and courage: &ldquo;Therefore all hands will be feeble, and every human heart will melt&rdquo; (v.7). The prophet reaches for the most vivid image of helpless agony: &ldquo;They will be dismayed: pangs and agony will seize them; they will be in anguish like a woman in labor&rdquo; (v.8). They look at one another aghast, &ldquo;their faces aflame.&rdquo; The proud warriors of Babylon, who made others tremble, are themselves reduced to trembling. When the Day of the LORD draws near, no human strength can stand against it." }} />
            </div>

            {/* Section 4 - Key Verse */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ color: GOLD, marginBottom: 12, fontSize: "1.1rem" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0 }}>
                <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Behold, the day of the LORD comes, cruel, with wrath and fierce anger, to make the land a desolation and to destroy its sinners from it. For the stars of the heavens and their constellations will not give their light; the sun will be dark at its rising, and the moon will not shed its light.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>Isaiah 13:9-10 (ESV)</p>
              </blockquote>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: 12 }}>Cosmic Darkness and the Punishment of the World (vv.9-13)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The judgment now expands to a scale that bursts the bounds of any single battle: &ldquo;Behold, the day of the LORD comes, cruel, with wrath and fierce anger&rdquo; (v.9). The heavens themselves go dark: &ldquo;The stars of the heavens and their constellations will not give their light; the sun will be dark at its rising, and the moon will not shed its light&rdquo; (v.10). The lights that order creation and mark the rhythms of life are extinguished, as if the world were returning toward the formless darkness before creation. This is judgment painted on a cosmic canvas." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The target of this judgment widens beyond Babylon to humanity itself: &ldquo;I will punish the world for its evil, and the wicked for their iniquity; I will put an end to the pomp of the arrogant, and lay low the pompous pride of the ruthless&rdquo; (v.11). So devastating is the toll that the LORD declares, &ldquo;I will make people more rare than fine gold, and mankind than the gold of Ophir&rdquo; (v.12). The very heavens tremble and the earth is shaken out of its place &ldquo;at the wrath of the LORD of hosts in the day of his fierce anger&rdquo; (v.13). The fall of one empire becomes a window onto God&rsquo;s final reckoning with all human pride." }} />
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: 12 }}>The Horror of Conquest (vv.14-18)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The vision returns to ground level and the terror of a city falling to its enemies. The foreigners who dwelt in Babylon scatter: &ldquo;Like a hunted gazelle, or like sheep with none to gather them, each will turn to his own people, and each will flee to his own land&rdquo; (v.14). For those who remain, there is no mercy: &ldquo;Whoever is found will be thrust through, and whoever is caught will fall by the sword&rdquo; (v.15). The prophet does not soften the brutality of ancient warfare, and the next verse is among the most harrowing in the book." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Their infants will be dashed in pieces before their eyes; their houses will be plundered and their wives ravished&rdquo; (v.16). The LORD then names the instrument of this destruction: &ldquo;Behold, I am stirring up the Medes against them, who have no regard for silver and do not delight in gold&rdquo; (v.17). These are warriors who cannot be bribed or bought off &mdash; they want destruction, not plunder. &ldquo;Their bows will slaughter the young men; they will have no mercy on the fruit of the womb; their eyes will not pity children&rdquo; (v.18). The horror is unflinching, a sober portrait of what it means when a proud civilization reaps the judgment it has sown." }} />
            </div>

            {/* Section 7 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>Babylon Like Sodom and Gomorrah (vv.19-22)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter ends with the final verdict on the great city: &ldquo;And Babylon, the glory of kingdoms, the splendor and pomp of the Chaldeans, will be like Sodom and Gomorrah when God overthrew them&rdquo; (v.19). The most magnificent city of the ancient world, the envy of nations, is set beside the proverbial archetype of total divine overthrow. What was the glory of kingdoms will become a byword for ruin. The contrast between the splendor of Babylon and the comparison to Sodom is the whole message of the chapter in a single line." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The desolation will be permanent and complete: &ldquo;It will never be inhabited or lived in for all generations; no Arab will pitch his tent there; no shepherds will make their flocks lie down there&rdquo; (v.20). In place of bustling streets, the wilderness reclaims the city: &ldquo;wild animals will lie down there, and their houses will be full of howling creatures; there ostriches will dwell, and there wild goats will dance&rdquo; (v.21). Hyenas will cry in the towers and jackals in the pleasant palaces (v.22). The chapter closes with a note of certainty and nearness: &ldquo;Its time is close at hand and its days will not be prolonged.&rdquo; The proud city will become a haunt of creatures, a monument to the fate of arrogance." }} />
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
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Day of the LORD</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The dominant theme of Isaiah 13 is the Day of the LORD (in Hebrew, <em>yom YHWH</em>), one of the most important and far-reaching concepts in all of Scripture. It is named explicitly in v.6 and v.9 and frames the entire chapter. The phrase refers to that decisive moment when the LORD ceases to work behind the curtain of ordinary history and steps onto the stage directly, openly intervening to judge evil, vindicate righteousness, and establish his rule. It is a day of darkness rather than light, of reckoning rather than celebration." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "What makes the Day of the LORD so rich is its dual horizon. It has a near, historical fulfillment &mdash; the literal fall of Babylon to the Medes and Persians in 539 BC &mdash; and a far, eschatological one, the final judgment of all the earth. Isaiah 13 deliberately blends the two: the language begins with a particular city and a particular army, then swells to embrace &ldquo;the world&rdquo; and &ldquo;mankind&rdquo; and the shaking of the heavens. The historical day becomes a preview and pledge of the ultimate day." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The prophet Amos had already warned that the Day of the LORD would be darkness and not light for the complacent (Amos 5:18-20), and Joel described it in nearly identical cosmic terms (Joel 2:30-31). Isaiah 13 stands within this stream of prophetic teaching and feeds it forward. Every later text that speaks of the day &mdash; in the prophets, in the teaching of Jesus, and in the apostolic letters &mdash; draws on the well that passages like this one helped to dig." }} />
            </div>

            {/* Theme 2 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>God&rsquo;s Sovereignty Over the Nations</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Isaiah 13 places the rise and fall of empires firmly under the command of God. He summons the army with a wave of his hand (v.2), calls the soldiers his &ldquo;consecrated ones&rdquo; and &ldquo;mighty men&rdquo; (v.3), and personally stirs up the Medes against Babylon (v.17). The armies that march are described as &ldquo;the weapons of his indignation&rdquo; (v.5). The point is unmistakable: the great powers of the world are not autonomous actors but instruments in the hand of the Lord of hosts." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This is a recurring conviction throughout Isaiah and the prophets. Assyria is the rod of God&rsquo;s anger (Isaiah 10:5), Cyrus the Persian is the LORD&rsquo;s anointed shepherd (Isaiah 44:28&ndash;45:1), and even Nebuchadnezzar of Babylon is called God&rsquo;s servant by Jeremiah (Jeremiah 25:9). Nations that have never confessed the name of the LORD nonetheless serve his purposes, often without knowing it. The chapter assures God&rsquo;s people that history is not a chaos of competing kingdoms but a story authored and governed from above." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "For Judah, soon to be threatened and then exiled by Babylon, this theme carried enormous comfort. The empire that seemed invincible was already under sentence in the courts of heaven. The same God who raised Babylon up would, in his own time, bring it down. No earthly power, however dazzling its splendor or terrifying its armies, lies beyond the reach and rule of the Lord of hosts." }} />
            </div>

            {/* Theme 3 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: PURPLE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Babylon as the Archetype of Human Pride</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Babylon in Scripture is far more than a geographical location; it becomes a symbol of human civilization organized in proud rebellion against God. The story begins at Babel in Genesis 11, where humanity builds a tower &ldquo;with its top in the heavens&rdquo; to make a name for itself. Babylon (the same word as Babel) thus stands from the start for the impulse to exalt human glory in defiance of heaven. Isaiah 13 calls it &ldquo;the glory of kingdoms, the splendor and pomp of the Chaldeans&rdquo; (v.19) &mdash; the very pinnacle of human achievement and arrogance." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Because Babylon represents pride at its most magnificent, its fall carries a meaning larger than itself. When the LORD declares, &ldquo;I will put an end to the pomp of the arrogant, and lay low the pompous pride of the ruthless&rdquo; (v.11), Babylon becomes the test case for a universal principle. The greatest, proudest city the world has ever produced will be brought to nothing, and in its fall every lesser arrogance reads its own future. The certainty of Babylon&rsquo;s collapse is the certainty that all human pride must finally come down." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This symbolic Babylon is developed all the way to the end of the Bible. In Revelation 17&ndash;18 &ldquo;Babylon the great&rdquo; is the harlot city, drunk on luxury and on the blood of the saints, and her fall is announced in language that deliberately echoes the prophets: &ldquo;Fallen, fallen is Babylon the great&rdquo; (Revelation 18:2). Isaiah 13 is one of the headwaters of that mighty stream. The literal city on the Euphrates becomes the enduring biblical name for every God-defying civilization destined for judgment." }} />
            </div>

            {/* Theme 4 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GREEN, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Cosmic Judgment Imagery</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Among the most arresting features of Isaiah 13 is its cosmic imagery: &ldquo;The stars of the heavens and their constellations will not give their light; the sun will be dark at its rising, and the moon will not shed its light&rdquo; (v.10). The heavens tremble and the earth is shaken out of its place (v.13). On one level this is the language of poetry, evoking the unraveling of the created order to express the magnitude of the judgment. The fall of a kingdom is so cataclysmic that it is as if the very lights of creation went out." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Yet this imagery is not merely decorative. In the ancient world, sun, moon, and stars were often worshiped as gods and trusted as the fixed guarantors of order. To say they go dark is to declare that every supposed source of stability and security collapses before the LORD. The darkening of the heavenly bodies is the visible sign that the One who made them is now acting in judgment, and that nothing in creation can shield the proud from his hand." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This very imagery is taken up directly in the New Testament. Jesus, describing the events surrounding his coming, says, &ldquo;the sun will be darkened, and the moon will not give its light, and the stars will fall from heaven&rdquo; (Matthew 24:29), quoting Isaiah 13 and related texts almost word for word. In Revelation 6:12-14, the sixth seal brings a darkened sun, a blood-red moon, and stars falling like figs. Isaiah&rsquo;s vision of cosmic darkness becomes the shared vocabulary by which Scripture speaks of the great and terrible Day of the LORD." }} />
            </div>

            {/* Theme 5 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: TEAL, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Certainty of the Fall of the Arrogant</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Running through the whole chapter is the absolute certainty that arrogant power will fall. The prophet does not speak in tentative or conditional terms; the oracle is delivered as a settled decree. &ldquo;Behold, the day of the LORD comes&rdquo; (v.9). The final verse insists, &ldquo;Its time is close at hand and its days will not be prolonged&rdquo; (v.22). The judgment is not a possibility to be negotiated but a sentence already pronounced in the heavenly court." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "History bore the prophecy out. Babylon, though it would not fall to the Medes and Persians until 539 BC &mdash; long after Isaiah&rsquo;s lifetime &mdash; did indeed fall, and over the following centuries the once-glorious city declined into the very desolation Isaiah described, eventually becoming an uninhabited ruin. The prophet saw, generations in advance, the certain end of a kingdom not yet at the height of its power. The fulfillment confirms that the word of the LORD does not return empty." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The certainty of Babylon&rsquo;s fall is meant to instruct every generation. The kingdoms that look most permanent, the powers that seem most untouchable, the proud achievements that appear to defy decay &mdash; all stand under the same decree. &ldquo;God opposes the proud&rdquo; (James 4:6), and the LORD alone will be exalted in that day. Isaiah 13 plants this certainty deep, so that the people of God need never be intimidated by the splendor of the arrogant nor despair when evil seems to triumph." }} />
            </div>

            {/* Theme 6 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Judgment on the Whole World, Not Babylon Alone</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Though the oracle is titled &ldquo;concerning Babylon,&rdquo; its scope refuses to stay contained. At its center the LORD declares, &ldquo;I will punish the world for its evil, and the wicked for their iniquity&rdquo; (v.11). The word &ldquo;world&rdquo; (Hebrew <em>tebel</em>) widens the target from a single empire to the inhabited earth as a whole. Babylon is the immediate occasion, but the chapter reaches toward a universal judgment on all human wickedness." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This widening is a deliberate feature of prophetic vision, in which a particular historical event is seen as a foreshadowing of God&rsquo;s ultimate dealings with the human race. The fall of Babylon is the foreground; behind it looms the final reckoning when God will deal with the evil of the world entire. The decimation that makes people &ldquo;more rare than fine gold&rdquo; (v.12) and the shaking of heaven and earth (v.13) are images too vast for one city, pointing past it to the last day." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This dual focus keeps the chapter from being a mere relic of ancient geopolitics. It addresses every reader, in every age, who shares in the pride and rebellion that Babylon embodies. The judgment of the world for its evil is not finished business; it remains the sobering backdrop against which the gospel offers refuge. Isaiah 13 leaves us asking not only what became of an ancient empire but where we ourselves will stand when the LORD rises to judge the world." }} />
            </div>

          </div>
        )}

        {/* TAB 2: VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>

            {/* v.1 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verse 1: The Burden Concerning Babylon</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Oracle Isaiah Saw</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.1</strong> &mdash; &ldquo;The oracle concerning Babylon which Isaiah the son of Amoz saw.&rdquo; The word &ldquo;oracle&rdquo; renders the Hebrew <em>massa</em>, a burden &mdash; a heavy, weighty word laid on the prophet to carry and deliver. This verse begins the collection of oracles against the nations that runs from chapters 13 through 23, and Babylon, the empire that would later destroy Jerusalem, heads the list. That Isaiah &ldquo;saw&rdquo; the oracle reminds us this is revelation given by God, not human forecasting." }} />
            </div>

            {/* vv.2-5 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 2-5: The Army Mustered</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Consecrated Ones from the End of Heaven</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.2-3</strong> &mdash; &ldquo;On a bare hill raise a signal; cry aloud to them; wave the hand for them to enter the gates of the nobles.&rdquo; A banner is lifted on a treeless height where it can be seen far off, and a shout gathers the troops. The LORD declares, &ldquo;I myself have commanded my consecrated ones, and have summoned my mighty men to execute my anger.&rdquo; The soldiers are &ldquo;set apart&rdquo; for a holy task of judgment, even though they serve God unknowingly." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.4-5</strong> &mdash; &ldquo;The sound of a tumult is on the mountains as of a great multitude! The sound of an uproar of kingdoms, of nations gathering together!&rdquo; Whole kingdoms are marshaled into one great host. They come &ldquo;from a distant land, from the end of the heavens, the LORD and the weapons of his indignation, to destroy the whole land.&rdquo; The armies are real, but they are the LORD&rsquo;s weapons, and he is their true commander." }} />
            </div>

            {/* vv.6-8 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 6-8: Wail, for the Day Is Near</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Hearts Melt and Faces Aflame</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.6</strong> &mdash; &ldquo;Wail, for the day of the LORD is near; as destruction from the Almighty it will come.&rdquo; The chapter names its great theme &mdash; the Day of the LORD &mdash; and ties it to <em>Shaddai</em>, the Almighty. The Hebrew even rings with a play on words: <em>shod</em> (destruction) sounds like <em>Shaddai</em>. The day comes not as chance but as the outflow of God&rsquo;s own power." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.7-8</strong> &mdash; &ldquo;Therefore all hands will be feeble, and every human heart will melt.&rdquo; Courage drains away. &ldquo;They will be dismayed: pangs and agony will seize them; they will be in anguish like a woman in labor.&rdquo; They look at one another aghast, &ldquo;their faces aflame.&rdquo; The image of labor pains conveys an agony that cannot be escaped and that grips the strongest. Babylon, which made others tremble, is itself reduced to terror." }} />
            </div>

            {/* vv.9-13 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 700 }}>Verses 9-13: The Day Comes, the Heavens Darken</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Sun Dark, the World Punished</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.9-10</strong> &mdash; &ldquo;Behold, the day of the LORD comes, cruel, with wrath and fierce anger, to make the land a desolation and to destroy its sinners from it.&rdquo; Then the cosmic darkening: &ldquo;The stars of the heavens and their constellations will not give their light; the sun will be dark at its rising, and the moon will not shed its light.&rdquo; The ordering lights of creation go out, as if the world returned toward primeval darkness. This imagery is taken up by Jesus in Matthew 24:29 and by John in Revelation 6:12-13." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.11-12</strong> &mdash; &ldquo;I will punish the world for its evil, and the wicked for their iniquity; I will put an end to the pomp of the arrogant, and lay low the pompous pride of the ruthless.&rdquo; The scope widens from Babylon to &ldquo;the world.&rdquo; So great is the loss of life that &ldquo;I will make people more rare than fine gold, and mankind than the gold of Ophir.&rdquo; Human pride, not gold, is the true target of this judgment." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.13</strong> &mdash; &ldquo;Therefore I will make the heavens tremble, and the earth will be shaken out of its place, at the wrath of the LORD of hosts in the day of his fierce anger.&rdquo; Heaven and earth themselves quake before the Judge. The shaking of creation is the measure of the seriousness of human sin and the certainty of divine reckoning. No corner of the cosmos is unaffected when the LORD of hosts rises in anger." }} />
            </div>

            {/* vv.14-18 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 700 }}>Verses 14-18: The Horror of Conquest</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Medes Who Cannot Be Bought</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.14-16</strong> &mdash; &ldquo;Like a hunted gazelle, or like sheep with none to gather them, each will turn to his own people, and each will flee to his own land.&rdquo; The foreigners flee, and those who remain are shown no mercy: &ldquo;Whoever is found will be thrust through.&rdquo; The unflinching v.16 describes the brutality of ancient warfare in full: infants dashed to pieces, houses plundered, wives ravished. The prophet does not soften the horror of what conquest meant." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.17-18</strong> &mdash; &ldquo;Behold, I am stirring up the Medes against them, who have no regard for silver and do not delight in gold.&rdquo; God names the human agent of judgment: the Medes, allied with the Persians, who took Babylon in 539 BC. They cannot be bribed; they want destruction, not loot. &ldquo;Their bows will slaughter the young men; they will have no mercy on the fruit of the womb; their eyes will not pity children.&rdquo; The ruthlessness of the instrument matches the severity of the sentence." }} />
            </div>

            {/* vv.19-22 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 19-22: Like Sodom and Gomorrah</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Glory of Kingdoms Becomes a Ruin</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.19</strong> &mdash; &ldquo;And Babylon, the glory of kingdoms, the splendor and pomp of the Chaldeans, will be like Sodom and Gomorrah when God overthrew them.&rdquo; The most magnificent city of the ancient world is set beside the archetype of total divine overthrow. The whole message of the chapter is compressed into this one contrast: the splendor of Babylon and the comparison to Sodom." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.20-21</strong> &mdash; &ldquo;It will never be inhabited or lived in for all generations; no Arab will pitch his tent there; no shepherds will make their flocks lie down there.&rdquo; The desolation is permanent. In place of human life, &ldquo;wild animals will lie down there, and their houses will be full of howling creatures; there ostriches will dwell, and there wild goats will dance.&rdquo; The wilderness reclaims the city, and creatures of the waste places take possession of the proud palaces." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.22</strong> &mdash; &ldquo;Hyenas will cry in its towers, and jackals in the pleasant palaces; its time is close at hand and its days will not be prolonged.&rdquo; The cries of scavengers echo where royal courts once met. The chapter ends on a note of certainty and nearness: the sentence is fixed and will not be delayed. The proud city becomes a monument to the fate that awaits all arrogance set against the LORD." }} />
            </div>

          </div>
        )}

        {/* TAB 3: APPLICATION */}
        {activeTab === 3 && (
          <div>

            {/* Application 1 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: 12 }}>No Power Is Beyond God&rsquo;s Reach</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Babylon was the superpower of its age, the glory of kingdoms, seemingly untouchable &mdash; and yet Isaiah saw its certain fall generations before it came to pass. The chapter teaches that no empire, institution, or power, however dazzling its splendor or terrifying its armies, lies beyond the rule of the Lord of hosts. The same God who raised Babylon up brought it down in his appointed time." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "For believers tempted to be intimidated by the powers of this world &mdash; political, cultural, or economic &mdash; this is steadying truth. We need not fear what seems invincible, nor despair when evil appears to triumph. History is governed from heaven, and the proud powers that look permanent stand already under the same decree that fell on Babylon. Our confidence rests not in the stability of any earthly kingdom but in the sovereignty of the One who reigns over them all." }} />
            </div>

            {/* Application 2 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: ROSE, fontSize: "1.1rem", marginBottom: 12 }}>Pride Is on a Collision Course with God</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "At the heart of the chapter the LORD declares that he will &ldquo;put an end to the pomp of the arrogant, and lay low the pompous pride of the ruthless&rdquo; (v.11). Babylon embodied pride at its most magnificent &mdash; the impulse, going back to Babel, to build a name for ourselves in defiance of heaven. Its fall is the visible proof that all such pride is destined to come down, for the LORD alone will be exalted in that day." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The warning presses inward as much as outward. The same pride that toppled an empire lives in the human heart, in the quiet ambition to be self-sufficient, self-exalting, accountable to no one. &ldquo;God opposes the proud but gives grace to the humble&rdquo; (James 4:6). The way of safety is to humble ourselves under God&rsquo;s mighty hand now, while there is time, rather than be brought low when he rises to judge." }} />
            </div>

            {/* Application 3 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.1rem", marginBottom: 12 }}>The Day of the LORD Is Coming</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Isaiah 13 does not let the Day of the LORD remain a distant abstraction; it presses upon the reader its nearness and certainty: &ldquo;Wail, for the day of the LORD is near&rdquo; (v.6). The historical fall of Babylon was a real day of reckoning, and it stands as a preview and pledge of the final day when God will judge the world for its evil. The cosmic imagery that Jesus and Revelation take up reminds us that this great day still lies ahead." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "This calls for sober self-examination and readiness. The same day that will be terror for the arrogant is, for those who take refuge in the Lord, the day of their redemption. The right response to the certainty of judgment is not paralysis but repentance and faith &mdash; to flee the Babylon of pride and rebellion and to find shelter in the One who alone can save in the day of his fierce anger. We live now in the light of that coming day." }} />
            </div>

            {/* Application 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Come Out of Babylon</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "From Genesis to Revelation, Babylon is the symbol of a world organized in proud rebellion against God, intoxicated with its own luxury and glory. Isaiah 13 announces its doom, and Revelation 18 sounds the call that follows: &ldquo;Come out of her, my people, lest you take part in her sins, lest you share in her plagues&rdquo; (Revelation 18:4). To love the splendor of Babylon is to bind oneself to her fate." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application is one of allegiance and affection. Where is our heart set &mdash; on the glory of a passing, God-defying world, or on the city whose builder and maker is God? To &ldquo;come out of Babylon&rdquo; is not necessarily to flee a place but to refuse to share its pride, its idolatry, and its self-exaltation. It is to live as citizens of a different kingdom, holding the comforts of this world loosely because we know how the story of Babylon ends." }} />
            </div>

            {/* Application 5 - Discussion */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: 12 }}>Discussion Questions</h3>
              <ol style={{ color: MUTED, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                <li dangerouslySetInnerHTML={{ __html: "Isaiah 13 portrays the LORD as sovereignly commanding even pagan armies as his &ldquo;consecrated ones&rdquo; (v.3). How does the truth that God governs the rise and fall of nations change the way you view current events and world powers?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The Day of the LORD has both a near, historical fulfillment and a far, final one. How does holding both horizons together deepen your understanding of God&rsquo;s judgment and your own readiness for it?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Babylon stands for human pride at its most magnificent (vv.11, 19). Where do you see the spirit of Babylon &mdash; self-exaltation and defiance of God &mdash; at work in the culture around you, and where do you sense it in your own heart?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Jesus and the book of Revelation reuse the cosmic darkening imagery of Isaiah 13 (Matthew 24:29; Revelation 6:12-13). Why do you think Scripture returns to these images of the sun, moon, and stars going dark to describe the great day of judgment?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Revelation 18:4 calls God&rsquo;s people to &ldquo;come out of&rdquo; Babylon. In practical terms, what would it look like for you to refuse to share in the pride and idolatry of a God-defying world while still living and serving within it?" }} />
              </ol>
            </div>

            {/* Application 6 - Prayer */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}22 0%, ${TEAL}11 100%)`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Prayer Focus</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Almighty LORD of hosts, you raise up kingdoms and bring them down; the proudest empires are but weapons in your hand and dust before your throne. Teach me not to fear the powers of this world nor to envy the splendor of the arrogant, for I have seen in Babylon how every God-defying glory must fall. Search my own heart for the pride of Babel, the quiet ambition to make a name for myself apart from you, and humble me now while there is time. Make me ready for the Day of the LORD, that great and terrible day when the heavens are shaken and the world is judged for its evil. Let me come out of Babylon and take refuge in you alone, the only sure shelter in the day of your fierce anger, that I may stand unashamed before you. Amen." }} />
            </div>

          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 8, color: TEXT }}>Video Teaching</h2>
          <p style={{ color: MUTED, marginBottom: 32, fontSize: "0.95rem" }}>Watch these selected teachings to deepen your understanding of Isaiah 13.</p>
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
