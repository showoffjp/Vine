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
  { videoId: "kTm9Xr2WqLb", title: "Isaiah 14: The Fall of the King of Babylon" },
  { videoId: "pJ7vNcZwHsF", title: "How You Are Fallen: The Day Star and the Pride of Lucifer" },
  { videoId: "dQ4bMxRtLpY", title: "The Five I Will Statements: The Anatomy of Pride" },
  { videoId: "wB6nGhVsKmT", title: "Sheol Stirred Below: God's Judgment on the Proud" },
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
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>Isaiah Chapter 14</h1>
          <p style={{ color: GOLD, fontSize: "1rem", fontStyle: "italic", marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;How you are fallen from heaven, O Day Star, son of Dawn!&rdquo; &mdash; Isaiah 14:12" }} />
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "Isaiah 14 is one of the most arresting chapters in all of prophecy, a thunderous taunt-song raised over the grave of a tyrant. It opens with a promise of breathtaking tenderness &mdash; that the LORD will have compassion on Jacob, again choose Israel, and settle his people in their own land &mdash; and then turns to put a mocking dirge in their mouths, a <em>mashal</em> to be sung against the king of Babylon when the oppressor has at last been brought low. At the heart of the chapter stands the famous lament over the fallen &ldquo;Day Star, son of Dawn,&rdquo; whose five proud boasts to ascend above the stars of God and make himself like the Most High are answered by his crashing descent to the depths of Sheol. From its tender opening to its sweeping close, the chapter proclaims that the LORD of hosts has purposed, and his outstretched hand of judgment will fall upon every proud kingdom and will not be turned back." }} />
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
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: 12 }}>Compassion and Restoration for Israel (vv.1-2)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter opens not with judgment but with mercy: &ldquo;The LORD will have compassion on Jacob and will again choose Israel, and will set them in their own land&rdquo; (v.1). After the terrifying oracle of Babylon&rsquo;s overthrow in chapter 13, the prophet turns to comfort the covenant people. The God who tears down the proud kingdoms of the earth has not forgotten his own; he will pity Jacob, choose Israel afresh, and plant them back in the land of promise. The downfall of Babylon is, for God&rsquo;s people, the dawn of their homecoming." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The restoration is described with a remarkable reversal: &ldquo;and sojourners will join them and will attach themselves to the house of Jacob&rdquo; (v.1), and Israel will &ldquo;take captive those who were their captors, and rule over those who oppressed them&rdquo; (v.2). The foreigners who once held Israel in bondage will become servants in Israel&rsquo;s own land, and the oppressed will be lifted above their oppressors. This is the pattern of divine justice that runs through Scripture: the LORD brings down the mighty from their thrones and exalts the humble. The promise also hints forward to the gathering of the nations into the people of God." }} />
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>The Taunt-Song Begins (vv.3-8)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;When the LORD has given you rest from your pain and turmoil and the hard service with which you were made to serve, you will take up this taunt against the king of Babylon&rdquo; (vv.3-4). The Hebrew word for &ldquo;taunt&rdquo; is <em>mashal</em>, a proverb or poem of mockery. When the day of deliverance comes, Israel will sing a sardonic dirge over the fallen tyrant: &ldquo;How the oppressor has ceased, the insolent fury ceased!&rdquo; The very rod that beat the nations in wrath has been snapped by the hand of God." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The song then turns to a startling image of cosmic relief: &ldquo;The whole earth is at rest and quiet; they break forth into singing&rdquo; (v.7). Even the trees join the celebration &mdash; &ldquo;The cypresses rejoice at you, the cedars of Lebanon, saying, Since you were laid low, no woodcutter comes up against us&rdquo; (v.8). The mighty cedars of Lebanon, so often felled by conquering kings to build their palaces and war machines, now stand in peace. The whole created order, long groaning under the oppressor&rsquo;s violence, exhales at his fall." }} />
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>Sheol Stirs to Meet the King (vv.9-11)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The poem now descends into the realm of the dead with chilling imagination: &ldquo;Sheol beneath is stirred up to meet you when you come; it rouses the shades to greet you, all who were leaders of the earth&rdquo; (v.9). The grave itself awakens in grim welcome. The shades &mdash; the ghostly forms of dead kings who once ruled the nations &mdash; rise from their thrones to receive the new arrival, the tyrant who thought himself untouchable." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Their greeting is bitter mockery: &ldquo;All of them will answer and say to you: You too have become as weak as we! You have become like us!&rdquo; (v.10). The one who terrorized the earth is now no stronger than the feeblest shade. &ldquo;Your pomp is brought down to Sheol, the sound of your harps; maggots are laid as a bed beneath you, and worms are your covers&rdquo; (v.11). Stripped of his music, his splendor, and his power, the great king lies in the dust with worms for his bedding. The contrast between his former glory and his present corruption is total and deliberate." }} />
            </div>

            {/* Section 4 - Key Verse */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ color: GOLD, marginBottom: 12, fontSize: "1.1rem" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0 }}>
                <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;How you are fallen from heaven, O Day Star, son of Dawn! How you are cut down to the ground, you who laid the nations low!&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>Isaiah 14:12 (ESV)</p>
              </blockquote>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: 12 }}>The Fall of the Day Star (vv.12-15)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Here the taunt reaches its famous and haunting climax: &ldquo;How you are fallen from heaven, O Day Star, son of Dawn!&rdquo; (v.12). The Hebrew is <em>Helel ben Shachar</em> &mdash; the shining one, the morning star, the son of the dawn. The image draws on the bright planet Venus that rises before the sun yet is swallowed and overcome by the very day it heralds. The Latin Vulgate rendered <em>Helel</em> as <em>Lucifer</em>, &ldquo;light-bearer,&rdquo; and so the name passed into Christian tradition as a title for the great fallen one." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The king&rsquo;s ruin is traced to the pride of his own heart, expressed in five soaring boasts: &ldquo;You said in your heart, I will ascend to heaven; above the stars of God I will set my throne on high; I will sit on the mount of assembly in the far reaches of the north; I will ascend above the heights of the clouds; I will make myself like the Most High&rdquo; (vv.13-14). Five times he says &ldquo;I will,&rdquo; each reaching higher than the last, until he claims equality with God himself. This is the very essence and anatomy of pride: the creature seeking to dethrone the Creator." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The answer to all this ambition is one devastating line: &ldquo;But you are brought down to Sheol, to the far reaches of the pit&rdquo; (v.15). The one who would climb to the highest heaven is hurled to the lowest depths. There is a precise and terrible symmetry in the judgment: the height of his pretension is matched by the depth of his fall. The aspiration to be like the Most High ends in the maggot-ridden bed of the grave." }} />
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: 12 }}>The Onlookers Marvel and the Dishonored Burial (vv.16-21)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Those who behold the fallen king can scarcely believe their eyes: &ldquo;Those who see you will stare at you and ponder over you: Is this the man who made the earth tremble, who shook kingdoms, who made the world like a desert and overthrew its cities?&rdquo; (vv.16-17). The terror of the nations has become an object of bewildered scrutiny. The man whose mere name once made empires quake now lies exposed and powerless, a spectacle of how completely the LORD can humble the mighty." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "His disgrace is sealed by the manner of his burial &mdash; or rather, his lack of one. &ldquo;All the kings of the nations lie in glory, each in his own tomb; but you are cast out, away from your grave, like a loathed branch&rdquo; (vv.18-19). Unlike other kings who rest in honored splendor, he is thrown out unburied, trampled underfoot like a corpse on a battlefield, &ldquo;not joined with them in burial&rdquo; (v.20). His offspring are to be slaughtered so that they never rise to fill the earth with cities again; the dynasty of the destroyer is itself destroyed." }} />
            </div>

            {/* Section 7 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>The LORD's Oracle Against Babylon and Assyria (vv.22-27)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Now the LORD himself speaks the verdict: &ldquo;I will rise up against them, declares the LORD of hosts, and will cut off from Babylon name and remnant, descendants and posterity&rdquo; (v.22). The proud city will be utterly erased &mdash; not merely defeated but blotted out, &ldquo;a possession of the hedgehog, and pools of water,&rdquo; swept with the broom of destruction (v.23). What man boasted to build forever, God promises to leave to the marsh birds and the standing water." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The oracle then sweeps wider to include Assyria, the great oppressor before Babylon: &ldquo;I will break the Assyrian in my land, and on my mountains trample him underfoot&rdquo; (v.25). And the chapter rises to a magnificent declaration of God&rsquo;s sovereignty over all history: &ldquo;This is the purpose that is purposed concerning the whole earth, and this is the hand that is stretched out over all the nations. For the LORD of hosts has purposed, and who will annul it? His hand is stretched out, and who will turn it back?&rdquo; (vv.26-27). No empire, however vast, can resist the settled purpose of God." }} />
            </div>

            {/* Section 8 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>An Oracle Concerning Philistia (vv.28-32)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter closes with a separate oracle, dated to &ldquo;the year that King Ahaz died&rdquo; (v.28), warning Philistia not to celebrate too soon: &ldquo;Rejoice not, O Philistia, all of you, that the rod that struck you is broken, for from the serpent&rsquo;s root will come forth an adder, and its fruit will be a flying fiery serpent&rdquo; (v.29). The breaking of one oppressor is no cause for relief if a worse one is rising in his place. The image of a serpent giving birth to an ever-fiercer serpent warns that judgment is far from spent." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Yet even here a note of refuge sounds for the people of God: &ldquo;What will one answer the messengers of the nation? The LORD has founded Zion, and in her the afflicted of his people find refuge&rdquo; (v.32). While Philistia faces famine and slaughter, Zion stands as the place that God himself has established, a stronghold for the poor and the afflicted. Amid the rise and fall of empires, the LORD&rsquo;s own city is the sure shelter for all who trust in him." }} />
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
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>God's Compassion and the Restoration of Israel</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Before a single word of taunt is sung, the chapter grounds everything in mercy: &ldquo;The LORD will have compassion on Jacob and will again choose Israel&rdquo; (v.1). The judgment of Babylon is the necessary backdrop to the comfort of God&rsquo;s people; the same hand that shatters the oppressor gathers the oppressed and brings them home. This sets the whole chapter within the framework of covenant love, reminding us that God&rsquo;s acts of judgment in history are never random fury but serve the redemption of his people." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The reversal in verse 2 &mdash; Israel ruling over former captors, sojourners joining the house of Jacob &mdash; embodies a recurring biblical pattern of the great exchange. The proud are humbled and the lowly exalted, the captor becomes captive and the captive becomes free. This anticipates the song Mary would later sing, that God &ldquo;has brought down the mighty from their thrones and exalted those of humble estate&rdquo; (Luke 1:52)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The gathering of foreigners into Israel also hints at a hope larger than one nation. The promise that sojourners will attach themselves to the house of Jacob foreshadows the day when the nations would stream to Zion and be brought near through Christ. God&rsquo;s purpose in judging Babylon is finally a purpose of grace &mdash; to make a people for himself drawn from every land." }} />
            </div>

            {/* Theme 2 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Day Star and the Fall of Satan</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The lament over the fallen &ldquo;Day Star, son of Dawn&rdquo; (<em>Helel ben Shachar</em>) in verses 12-15 is the most discussed passage in the chapter. In its primary, immediate sense it is addressed to the king of Babylon, the human tyrant whose arrogance is mocked through the imagery of a bright star that climbs the dawn sky only to be extinguished by the sunrise. The whole song is, by the prophet&rsquo;s own description, a <em>mashal</em> against a flesh-and-blood ruler, and that earthly reference must always be kept in view." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Yet from early times Christian readers have heard in these words a deeper resonance. The Latin Vulgate translated <em>Helel</em> as <em>Lucifer</em>, &ldquo;light-bearer,&rdquo; and many interpreters have seen the proud aspiration to &ldquo;ascend above the stars of God&rdquo; and &ldquo;make myself like the Most High&rdquo; as language that overflows the bounds of any merely human king and reaches back to the original rebellion of the great adversary. Jesus&rsquo; words, &ldquo;I saw Satan fall like lightning from heaven&rdquo; (Luke 10:18), and the parallel lament over the king of Tyre in Ezekiel 28 have strengthened this typological reading." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The wisest way to read the passage holds both senses together. The primary reference is the king of Babylon, brought low for his pride; but behind the human tyrant stands the dark pattern of all rebellion against God, of which Satan is the archetype and source. Whether or not Isaiah consciously spoke of the devil, the principle is the same throughout Scripture: the proud who exalt themselves against the Most High are cast down, and the spirit of self-deification that ruined the first rebel ruins every tyrant who imitates it." }} />
            </div>

            {/* Theme 3 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: PURPLE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Five I Will Statements: The Essence of Pride</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "At the center of the taunt stand five climbing boasts, each beginning with the words &ldquo;I will&rdquo;: &ldquo;I will ascend to heaven; above the stars of God I will set my throne on high; I will sit on the mount of assembly; I will ascend above the heights of the clouds; I will make myself like the Most High&rdquo; (vv.13-14). The repeated, self-asserting &ldquo;I will&rdquo; is the very grammar of pride, the creature making himself the center and measure of all things. This is the anatomy of sin laid bare: the will of the self set against the will of God." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The five boasts form a ladder of ascent, each rung higher than the last, climbing from heaven, to the stars, to the divine assembly, to the clouds, and finally to the throne of God himself. The final aim is unmasked in the last line: &ldquo;I will make myself like the Most High.&rdquo; All pride, however small, contains this seed &mdash; the desire to be as God, to answer to no one, to be the supreme authority over one&rsquo;s own life. It is the same lie first whispered in Eden: &ldquo;you will be like God&rdquo; (Genesis 3:5)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The contrast with Christ could not be sharper. Where the Day Star said &ldquo;I will ascend&rdquo; and was cast down, the Son of God, &ldquo;though he was in the form of God,&rdquo; did not grasp at equality but &ldquo;emptied himself&rdquo; and humbled himself to death (Philippians 2:6-8) &mdash; and therefore God exalted him. The proud who exalt themselves are humbled; the humble who lower themselves are lifted up. The five &ldquo;I will&rdquo; statements stand forever as a warning that the road of self-exaltation leads only to the pit." }} />
            </div>

            {/* Theme 4 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GREEN, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Pride Humbled and the Certainty of Judgment</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The whole chapter is built on a single stark contrast: the dizzying height of the tyrant&rsquo;s pride and the depth of his humiliation. He who &ldquo;made the earth tremble&rdquo; and &ldquo;shook kingdoms&rdquo; (v.16) ends as a trampled corpse, cast out of his grave, denied even the dignity of an honored burial (vv.18-20). The poem savors this reversal deliberately, holding the king&rsquo;s former terror and present shame side by side so that the lesson cannot be missed: God resists the proud." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This is the consistent witness of Scripture. &ldquo;Pride goes before destruction, and a haughty spirit before a fall&rdquo; (Proverbs 16:18). &ldquo;Everyone who exalts himself will be humbled&rdquo; (Luke 14:11). &ldquo;God opposes the proud but gives grace to the humble&rdquo; (James 4:6, 1 Peter 5:5). The king of Babylon is a towering case study in this unchanging law of the moral universe: the higher the self-exaltation, the more catastrophic the collapse that God brings upon it." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The judgment is not only certain but inescapable. &ldquo;The LORD of hosts has purposed, and who will annul it? His hand is stretched out, and who will turn it back?&rdquo; (v.27). The arrogant may seem invincible for a season, and their fall may be long delayed, but God&rsquo;s settled purpose against all proud rebellion will not be turned aside. Every empire of arrogance, ancient or modern, stands under the same outstretched hand." }} />
            </div>

            {/* Theme 5 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: TEAL, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Sheol, the Shades, and the Taunt-Song</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Isaiah 14 gives one of the Old Testament&rsquo;s most vivid pictures of Sheol, the shadowy realm of the dead. The grave is personified as stirring to meet the arriving king, rousing the &ldquo;shades&rdquo; &mdash; the <em>rephaim</em>, the faded forms of those once mighty &mdash; who rise from their thrones to greet him (vv.9-11). This is poetic imagery rather than systematic doctrine, but it powerfully conveys the leveling of death: in Sheol the great king is no different from the least, &ldquo;as weak as we.&rdquo; Death is the great democracy that exposes the emptiness of earthly pomp." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The literary form of the chapter is the <em>mashal</em>, here a taunt-song or mocking dirge. The prophet borrows the structure of a funeral lament &mdash; the cry &ldquo;How are you fallen!&rdquo; that elsewhere mourns the honored dead &mdash; and turns it inside out into bitter satire. There is no real grief here, only the irony of a funeral for a tyrant whom no one mourns. The genre itself is a sermon: the world&rsquo;s great oppressors, for all their terror, end as the subject of a mocking song." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Yet the picture of Sheol is not the Bible&rsquo;s final word. The same prophet who descends here into the pit will rise to proclaim that God &ldquo;will swallow up death forever&rdquo; (Isaiah 25:8). For the proud who trust in themselves, Sheol is the end of all their boasting; but for the people of God, the grave is not the last word, and the One who tasted death has broken its power. The taunt over the fallen king is, in the end, a foretaste of death&rsquo;s own defeat." }} />
            </div>

            {/* Theme 6 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>God's Sovereign Purpose Over All Nations</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The climax of the oracle is one of Scripture&rsquo;s grandest statements of divine sovereignty: &ldquo;This is the purpose that is purposed concerning the whole earth, and this is the hand that is stretched out over all the nations&rdquo; (v.26). Babylon and Assyria, the two great superpowers of Isaiah&rsquo;s world, are not beyond God&rsquo;s reach; they are tools and targets within his single, all-encompassing plan. The LORD of hosts governs the rise and fall of every empire from the throne of heaven." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The rhetorical questions that follow drive the point home: &ldquo;The LORD of hosts has purposed, and who will annul it? His hand is stretched out, and who will turn it back?&rdquo; (v.27). The answer is obvious and absolute: no one. What God has determined cannot be reversed by any human power, however formidable. This is the firm ground on which God&rsquo;s afflicted people may stand, even when surrounded by hostile and seemingly unstoppable nations." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The chapter ends by naming the place of refuge: &ldquo;The LORD has founded Zion, and in her the afflicted of his people find refuge&rdquo; (v.32). Over against the doomed cities of the proud stands the city God himself has established. For those who tremble before the power of the nations, this is the deepest comfort &mdash; that the same sovereign hand which topples empires has also built a stronghold for the lowly who take shelter in him." }} />
            </div>

          </div>
        )}

        {/* TAB 2: VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>

            {/* vv.1-2 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verses 1-2: Compassion and Homecoming</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The LORD Again Chooses Israel</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.1</strong> &mdash; &ldquo;The LORD will have compassion on Jacob and will again choose Israel, and will set them in their own land, and sojourners will join them.&rdquo; The oracle of comfort follows hard on the judgment of Babylon. God&rsquo;s pity moves him to restore his people to the land, and even to draw foreigners into their company &mdash; a quiet foreshadowing of the nations being gathered into the people of God." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.2</strong> &mdash; &ldquo;They will take captive those who were their captors, and rule over those who oppressed them.&rdquo; The great reversal of divine justice: the oppressed are lifted above their oppressors. What the proud meant for evil, God overturns, exalting the humble and bringing down the mighty in his own time and way." }} />
            </div>

            {/* vv.3-8 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 3-8: The Taunt and the Resting Earth</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>How the Oppressor Has Ceased</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.3-4</strong> &mdash; &ldquo;When the LORD has given you rest... you will take up this taunt against the king of Babylon: How the oppressor has ceased, the insolent fury ceased!&rdquo; The Hebrew <em>mashal</em> is a mocking dirge. When deliverance comes, God&rsquo;s people will sing over the fallen tyrant, marveling that the rod which beat the nations has been broken by God." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.7-8</strong> &mdash; &ldquo;The whole earth is at rest and quiet; they break forth into singing. The cypresses rejoice at you, the cedars of Lebanon, saying, Since you were laid low, no woodcutter comes up against us.&rdquo; Creation itself exhales at the oppressor&rsquo;s fall. Even the great cedars, so often felled by conquering kings, now stand in peace. The violence that oppressed nature and nations alike has ceased." }} />
            </div>

            {/* vv.9-11 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 9-11: Sheol Welcomes the King</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>You Too Have Become as Weak as We</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.9-10</strong> &mdash; &ldquo;Sheol beneath is stirred up to meet you... it rouses the shades to greet you, all who were leaders of the earth... You too have become as weak as we! You have become like us!&rdquo; The grave awakens; dead kings rise from their thrones to mock the new arrival. In death the great tyrant is no stronger than the feeblest shade." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.11</strong> &mdash; &ldquo;Your pomp is brought down to Sheol, the sound of your harps; maggots are laid as a bed beneath you, and worms are your covers.&rdquo; Stripped of music, splendor, and power, the king lies in the dust with worms for his bedding. The contrast between his former glory and present corruption is absolute." }} />
            </div>

            {/* vv.12-15 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 700 }}>Verses 12-15: The Fall of the Day Star</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>How You Are Fallen From Heaven</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.12</strong> &mdash; &ldquo;How you are fallen from heaven, O Day Star, son of Dawn! How you are cut down to the ground, you who laid the nations low!&rdquo; The Hebrew <em>Helel ben Shachar</em> &mdash; rendered <em>Lucifer</em> in the Latin Vulgate &mdash; pictures the morning star swallowed by the dawn. Primarily a taunt over the king of Babylon, it has long been read as also reflecting the fall of Satan (cf. Luke 10:18)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.13-14</strong> &mdash; &ldquo;You said in your heart, I will ascend to heaven; above the stars of God I will set my throne on high... I will make myself like the Most High.&rdquo; Five rising boasts of &ldquo;I will&rdquo; lay bare the anatomy of pride: the creature seeking to dethrone the Creator and seize equality with God himself." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.15</strong> &mdash; &ldquo;But you are brought down to Sheol, to the far reaches of the pit.&rdquo; One line answers all the boasting. The one who would climb to the highest heaven is hurled to the lowest depths; the height of his pretension is matched by the depth of his fall." }} />
            </div>

            {/* vv.16-21 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 700 }}>Verses 16-21: The Dishonored Grave</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Is This the Man Who Made the Earth Tremble?</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.16-17</strong> &mdash; &ldquo;Those who see you will stare at you and ponder over you: Is this the man who made the earth tremble, who shook kingdoms?&rdquo; The terror of the nations has become a spectacle of bewilderment. The man whose name once shook empires now lies exposed and powerless before staring onlookers." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.18-21</strong> &mdash; &ldquo;All the kings of the nations lie in glory, each in his own tomb; but you are cast out, away from your grave.&rdquo; Unlike honored kings, he is thrown out unburied, trampled like a corpse, not joined with them in burial. His offspring are to be cut off so the destroyer&rsquo;s dynasty never rises again." }} />
            </div>

            {/* vv.22-27 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verses 22-27: The LORD's Oracle and Outstretched Hand</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Who Will Turn Back His Hand?</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.22-23</strong> &mdash; &ldquo;I will cut off from Babylon name and remnant, descendants and posterity, declares the LORD.&rdquo; The proud city will be utterly erased, left to the hedgehog and pools of water, swept away with the broom of destruction. What man boasted to build forever, God gives over to the marsh." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.25-27</strong> &mdash; &ldquo;I will break the Assyrian in my land... This is the hand that is stretched out over all the nations... His hand is stretched out, and who will turn it back?&rdquo; God&rsquo;s judgment sweeps from Babylon to Assyria, and the chapter rises to declare his irreversible, sovereign purpose over the whole earth. No empire can annul what the LORD of hosts has determined." }} />
            </div>

            {/* vv.28-32 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 28-32: The Oracle Concerning Philistia</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Rejoice Not, O Philistia</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.29</strong> &mdash; &ldquo;Rejoice not, O Philistia, that the rod that struck you is broken, for from the serpent&rsquo;s root will come forth an adder, and its fruit will be a flying fiery serpent.&rdquo; The breaking of one oppressor is no cause for celebration if a fiercer one is rising in his place. Judgment on the nations is far from spent." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.32</strong> &mdash; &ldquo;The LORD has founded Zion, and in her the afflicted of his people find refuge.&rdquo; Over against the doomed cities of the proud stands the city God himself established. For the lowly and afflicted, Zion is the sure shelter amid the rise and fall of empires &mdash; a refuge built by the same hand that topples the mighty." }} />
            </div>

          </div>
        )}

        {/* TAB 3: APPLICATION */}
        {activeTab === 3 && (
          <div>

            {/* Application 1 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: 12 }}>Guard Your Heart Against the Seed of Pride</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The five &ldquo;I will&rdquo; statements (vv.13-14) expose pride at its root: the desire to be the center, to answer to no one, to make ourselves like the Most High. The same impulse that toppled the king of Babylon lives in every human heart in smaller, subtler forms &mdash; the need to be admired, the resentment of authority, the quiet conviction that we know best. Pride rarely announces itself in cosmic boasts; it hides in our reflexes and self-justifications." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application is sober self-examination. Where am I living as though I were the supreme authority over my own life? Where do I bristle at correction, demand recognition, or refuse to submit my will to God&rsquo;s? The chapter calls us to crucify the &ldquo;I will&rdquo; of self-exaltation and to pray instead the prayer of Christ: &ldquo;not my will, but yours, be done&rdquo; (Luke 22:42). Humility before God is the only safe place to stand." }} />
            </div>

            {/* Application 2 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: ROSE, fontSize: "1.1rem", marginBottom: 12 }}>Do Not Envy the Power of the Wicked</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The king of Babylon &ldquo;made the earth tremble&rdquo; and &ldquo;shook kingdoms&rdquo; (v.16), and for a season his power seemed absolute. Yet the chapter shows the end of all such power: the maggot-ridden bed, the dishonored grave, the mocking song. It is a profound antidote to the temptation, ancient and modern, to envy the arrogant who seem to prosper while flouting God." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "When we are tempted to be unsettled by the apparent triumph of the proud and the powerful, Isaiah 14 trains our eyes to see the end of the story. &ldquo;Fret not yourself because of evildoers... for they will soon fade like the grass&rdquo; (Psalm 37:1-2). The seemingly unstoppable empires of arrogance all stand under the same outstretched hand of God, and their fall is as certain as his word." }} />
            </div>

            {/* Application 3 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.1rem", marginBottom: 12 }}>Take Refuge in Zion, the City God Has Founded</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Amid all the terror of falling kingdoms, the chapter ends with a refuge: &ldquo;The LORD has founded Zion, and in her the afflicted of his people find refuge&rdquo; (v.32). The same God whose hand topples the proud has built a stronghold for the lowly. For the afflicted and the fearful, the answer to the menace of the nations is not their own strength but the shelter God himself has established." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "For us, that refuge is found in Christ, the true and lasting Zion, who said, &ldquo;Come to me, all who labor and are heavy laden, and I will give you rest&rdquo; (Matthew 11:28). When the powers of this age seem overwhelming, we are invited to run into the strong place God has made and to find there a safety no empire can breach. The afflicted who shelter in him will never be put to shame." }} />
            </div>

            {/* Application 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Rest in God's Sovereign and Irreversible Purpose</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;The LORD of hosts has purposed, and who will annul it? His hand is stretched out, and who will turn it back?&rdquo; (v.27). The same sovereignty that guarantees judgment on the proud guarantees comfort for the people of God. Nothing in heaven or earth can overturn what God has determined; his plan for history and for his people is utterly secure." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "This is meant to steady us when the world feels chaotic and out of control. Behind the rise and fall of nations stands a single, settled, redemptive purpose that no power can frustrate. We can release our anxious grip on outcomes and rest in the One who works all things according to the counsel of his will (Ephesians 1:11), trusting that his hand is stretched out for the good of all who love him." }} />
            </div>

            {/* Application 5 - Discussion */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: 12 }}>Discussion Questions</h3>
              <ol style={{ color: MUTED, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                <li dangerouslySetInnerHTML={{ __html: "The five &ldquo;I will&rdquo; statements (vv.13-14) reveal the essence of pride as the desire to be like the Most High. In what subtle, everyday forms does this same impulse show up in your own heart?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Christian tradition has long read the fall of the Day Star (vv.12-15) as reflecting the fall of Satan (cf. Luke 10:18). How does holding together the primary reference to the king of Babylon and the deeper pattern of all rebellion enrich your reading of the passage?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The chapter sets the king&rsquo;s former terror beside his dishonored grave (vv.16-20). How does seeing &ldquo;the end of the story&rdquo; change the way you respond when the proud and powerful seem to prosper now?" }} />
                <li dangerouslySetInnerHTML={{ __html: "&ldquo;The LORD has founded Zion, and in her the afflicted of his people find refuge&rdquo; (v.32). Where are you tempted to seek refuge in your own strength or strategies rather than in God, and what would it look like to run into his stronghold instead?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Verse 27 declares God&rsquo;s purpose cannot be annulled and his hand cannot be turned back. How does the truth of God&rsquo;s irreversible sovereignty bring you comfort in a world that often feels chaotic and out of control?" }} />
              </ol>
            </div>

            {/* Application 6 - Prayer */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}22 0%, ${TEAL}11 100%)`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Prayer Focus</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "LORD of hosts, you bring down the proud from their thrones and lift up the lowly; before you no power on earth can stand. Search my heart and uproot every &ldquo;I will&rdquo; of self-exaltation, every secret desire to be my own god and to answer to no one. Teach me the way of Christ, who did not grasp at equality with you but humbled himself, and so was exalted; let his mind be in me. When the powers of this age seem unstoppable and the proud appear to prosper, fix my eyes on the end of the story and on your hand stretched out over all the nations, which none can turn back. Make me an afflicted one who finds refuge in Zion, sheltering not in my own strength but in you, my strong tower and my rest. And let me rest in your sovereign, redeeming purpose, confident that you work all things according to the counsel of your will, for the good of your people and the glory of your name. Amen." }} />
            </div>

          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 8, color: TEXT }}>Video Teaching</h2>
          <p style={{ color: MUTED, marginBottom: 32, fontSize: "0.95rem" }}>Watch these selected teachings to deepen your understanding of Isaiah 14.</p>
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
