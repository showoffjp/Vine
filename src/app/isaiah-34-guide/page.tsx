"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import VerseRef from "@/components/VerseRef";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB";
const GOLD = "#D97706", TEAL = "#0D9488", ROSE = "#E11D48";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "g9zqBMiVVoo", title: "Isaiah 34 - The Day of God's Wrath" },
  { videoId: "vHzXxdPOivs", title: "Isaiah 34 and 35 - Judgment and Restoration" },
  { videoId: "X6QlMJi1qjY", title: "Edom in Isaiah 34 - A Paradigm of Judgment" },
  { videoId: "3u5CUZ5tK2U", title: "The Heavens Rolled Up Like a Scroll - Isaiah 34" },
];

const VERSE_SECTIONS = [
  {
    id: "vs1",
    ref: "Isaiah 34:1-4",
    title: "The Summons of All Nations to Hear the LORD's Judgment",
    color: ROSE,
    content:
      "Come near, you nations, and listen; pay attention, you peoples! Let the earth hear, and all that is in it, the world, and all that comes out of it! The LORD is angry with all nations; his wrath is on all their armies. He will totally destroy them, he will give them over to slaughter. Their slain will be thrown out, their dead bodies will stink; the mountains will be soaked with their blood. All the stars in the sky will be dissolved and the heavens rolled up like a scroll; all the starry host will fall like withered leaves from the vine, like shriveled figs from the fig tree. The opening of Isaiah 34 is one of the most dramatic summonses in all of Scripture. The prophet calls the entire created order &mdash; nations, peoples, earth, world &mdash; to attend to the divine verdict. The Hebrew verb used for &lsquo;come near&rsquo; (qarav) is the same verb used for approaching a holy presence; Isaiah 34 summons the nations to hear their sentence in the presence of the divine judge. The scope of the judgment is universal: &lsquo;all nations,&rsquo; &lsquo;all their armies,&rsquo; &lsquo;the earth and all that is in it.&rsquo; This is not merely a regional conflict but a cosmic verdict. The language of &lsquo;cherem&rsquo; (total destruction or devotion to destruction) in verse 2 represents the most severe form of divine judgment in the Hebrew Bible. When something or someone is devoted to cherem, it is utterly given over to God with no possibility of redemption or ransom. It was the word used for Jericho&rsquo;s destruction and for the extermination of the Canaanites. Isaiah applies it to all the nations, indicating the eschatological finality of the judgment he is describing. Verses 3-4 intensify the imagery: the physical landscape is soaked with blood, and then the very heavens are dissolved. The rolling up of the heavens like a scroll is one of the most powerful cosmic images in the OT, anticipating Revelation 6:14 (&lsquo;the sky receded like a scroll being rolled up&rsquo;). The starry host, which in the ancient Near East often represented cosmic powers and deities worshiped by the nations, will fall like shriveled figs. The gods of the nations are not immune to the judgment of the LORD of hosts.",
  },
  {
    id: "vs2",
    ref: "Isaiah 34:5-8",
    title: "The Sword of the LORD Against Edom",
    color: GOLD,
    content:
      "My sword has drunk its fill in the heavens; see, it descends in judgment on Edom, the people I have totally destroyed. The sword of the LORD is bathed in blood, it is covered with fat &mdash; the blood of lambs and goats, fat from the kidneys of rams. For the LORD has a sacrifice in Bozrah and a great slaughter in the land of Edom. And the wild oxen will fall with them, the bull calves and the great bulls. Their land will be drenched with blood, and the dust will be soaked with fat. For the LORD has a day of vengeance, a year of retribution, to uphold Zion's cause. Having announced universal judgment, Isaiah narrows the lens to Edom as the paradigm case. The movement from universal to particular is characteristic of prophetic literature: the nations in general stand under judgment, but Edom in particular embodies the posture of all who oppose God&rsquo;s people. Edom (the descendants of Esau, Israel&rsquo;s twin brother) occupied a unique position in biblical history as the perpetual enemy who shares kinship with Israel but has chosen enmity. The word cherem appears again in verse 5 (&lsquo;the people I have totally destroyed&rsquo;) &mdash; Edom is the paradigmatic case of the nations devoted to destruction. The imagery of the divine sword is striking. The sword has drunk its fill in the heavens before descending to earth, suggesting that the judgment has already been decreed in the divine council before it is executed in history. The sacrificial language in verses 6-7 (blood of lambs, fat of rams, slaughter in Bozrah) reverses the normal direction of sacrifice: rather than Israel offering animals to the LORD, the LORD is offering the army of Edom as a sacrifice. Bozrah was Edom&rsquo;s capital city &mdash; a fortified stronghold that the judgment will not spare. Verse 8 names the theological rationale: &lsquo;a day of vengeance, a year of retribution, to uphold Zion&rsquo;s cause.&rsquo; The Hebrew word nakam (vengeance/retribution) does not carry the modern connotation of personal revenge; it is the judicial act of putting right what has been wronged. The LORD acts as the advocate and defender of Zion against all who have oppressed her.",
  },
  {
    id: "vs3",
    ref: "Isaiah 34:9-15",
    title: "Edom's Perpetual Desolation",
    color: PURPLE,
    content:
      "Edom's streams will be turned into pitch, her dust into burning sulfur; her land will become blazing pitch! It will not be quenched night or day; its smoke will rise forever. From generation to generation it will lie desolate; no one will ever pass through it again. The desert owl and screech owl will possess it; the great owl and the raven will nest there. God will stretch out over Edom the measuring line of chaos and the plumb line of desolation. Her nobles will have nothing there to be called a kingdom, all her princes will vanish away. Thorns will overrun her citadels, nettles and brambles her strongholds. She will become a haunt for jackals, a home for owls. Desert creatures will meet with hyenas, and wild goats will bleat to each other; there the night creatures will also lie down and find for themselves places of rest. The owl will nest there and lay eggs, she will hatch them, and care for her young under the shadow of her wings; there also the falcons will gather, each with its mate. After the sword comes the desolation. Isaiah 34:9-15 develops the image of Edom&rsquo;s post-judgment condition with extraordinary detail, and the imagery is deliberately the opposite of creation. Where Genesis 1-2 describes the ordered, inhabited, fruitful creation, Isaiah 34 describes the return to tohu vavohu (chaos and waste). The &lsquo;measuring line of chaos and the plumb line of desolation&rsquo; (v.11) is a particularly sharp reversal: the builder&rsquo;s measuring tools are used not to construct but to demolish. The Hebrew words tohu and vohu (also in v.11) are the same words used in Genesis 1:2 for the pre-creation state of the earth (&lsquo;formless and empty&rsquo;). Edom&rsquo;s judgment is a de-creation, a return to chaos. The animal inhabitants described in verses 11-15 are all creatures of the wilderness, the uncultivated desolate land. In the ancient Near East, these were understood as demonic or unclean creatures associated with places abandoned by God. Jackals, hyenas, wild goats (possibly the goat-demons of Hebrew belief, se&rsquo;irim), owls, falcons, and the night creatures (lilith in Hebrew, possibly a demonic figure in ancient Semitic tradition) all inherit what was once a human kingdom. The shemamah (desolation/waste) that Isaiah predicted in many forms throughout chapters 1-33 here reaches its extreme expression: not merely political defeat or economic ruin, but the complete erasure of human habitation and the return of the land to its pre-civilizational state.",
  },
  {
    id: "vs4",
    ref: "Isaiah 34:16-17",
    title: "The Word of the LORD That Will Not Fail",
    color: TEAL,
    content:
      "Look in the scroll of the LORD and read: None of these will be missing, not one will lack her mate. For it is his mouth that has issued the order, and his Spirit will gather them together. He allots their portions; his hand distributes them by measure. They will possess it forever and dwell there from generation to generation. The closing verses of Isaiah 34 make an extraordinary epistemological claim: there is a heavenly scroll (hassaphar, the book) in which these judgments are recorded, and not one item in it will fail to be fulfilled. The command to &lsquo;look in the scroll of the LORD and read&rsquo; suggests that the prophetic oracle is itself a transcript of what is written in the heavenly record. This concept of a divine book or scroll in which history&rsquo;s events are recorded before they occur appears throughout Isaiah and the Psalms (Psalm 139:16, Isaiah 65:6) and is developed extensively in the book of Revelation (the scroll with seven seals in Revelation 5). The word that the LORD&rsquo;s mouth has issued cannot return to him empty (cf. Isaiah 55:10-11). The Spirit (ruach) of the LORD is the agent who gathers and fulfills what the word has declared, linking the work of prophecy to the work of the Spirit who hovered over the pre-creation chaos in Genesis 1:2. The reference to &lsquo;her mate&rsquo; in verse 16 is applied to the animals named in verse 14 &mdash; the wilderness creatures who will inhabit Edom will be paired and established permanently. This is a terrible parody of the creation mandate: instead of the blessing of human fertility and dominion, the land receives the permanent blessing of desolation. The closing note &mdash; &lsquo;from generation to generation&rsquo; &mdash; frames the permanence of the judgment. Verses 16-17 also function as a call to trust in prophetic Scripture: the reader is invited to compare what Isaiah has written with what history reveals. This was an important apologetic for early Jewish and Christian communities who saw the abandonment of Edom&rsquo;s territory (modern southern Jordan and the Negev) as confirmation of Isaiah&rsquo;s word.",
  },
];

const THEMES = [
  {
    color: ROSE,
    title: "Cherem: Total Destruction as Consecration to the LORD (vv.1-2, 5)",
    body:
      "The Hebrew term cherem (pronounced kheh-REM) is one of the most theologically dense and morally challenging concepts in the Old Testament. It refers to something set apart for God in the most absolute sense &mdash; not for human use or redemption but for complete destruction or consecration. When applied to warfare, it meant total annihilation: no survivors, no plunder, no mercy. In Isaiah 34:2 and 5, cherem is applied to all the nations and then specifically to Edom. The theological logic is that these nations have placed themselves in total opposition to the LORD&rsquo;s purposes, and the judgment is correspondingly total. For modern readers, cherem raises acute theological problems: how can a God of love declare total destruction on any people? The prophetic answer is that cherem is not capricious violence but the necessary consequence of sustained, unrepentant opposition to the God who is the source of all order and life. Just as cancer cells that resist treatment and continue to destroy healthy tissue must be removed, those who make themselves permanently devoted to the destruction of God&rsquo;s creation are ultimately given over to the destruction they have chosen. NT theology processes this through the concept of hardening (Romans 9:14-23) and of those who refuse the light being given over to darkness (Romans 1:24, 26, 28). The final cherem in Revelation is the lake of fire &mdash; the ultimate removal of all that refuses to be redeemed.",
  },
  {
    color: GOLD,
    title: "Nakam: Divine Vengeance as Judicial Vindication (v.8)",
    body:
      "The Hebrew word nakam (vengeance, retribution) in verse 8 (&lsquo;a day of vengeance, a year of retribution&rsquo;) carries a very different meaning than the English word suggests. Nakam in the OT context is consistently the prerogative of the judge who vindicates the innocent party in a legal dispute. It is not personal revenge but judicial vindication. When a crime goes unpunished in human courts, the injured party can appeal to the LORD as the ultimate judge, and the LORD&rsquo;s nakam is his act of putting right what human courts have left wrong. In Isaiah 34:8, the nakam is specifically &lsquo;to uphold Zion&rsquo;s cause.&rsquo; Edom had participated in the destruction and humiliation of Jerusalem (Psalm 137:7, Obadiah 10-14), and the LORD&rsquo;s judgment on Edom is the judicial vindication of the people Edom wronged. The NT understanding of divine judgment through the same lens: God is not vengeful in the sense of being personally offended and retaliating; he is the Judge who will finally, completely set right every wrong that has ever been done. Romans 12:19 quotes Deuteronomy 32:35 (&lsquo;It is mine to avenge; I will repay&rsquo;) as the reason believers should not take personal revenge: because justice belongs to the Judge, and the Judge will execute it perfectly.",
  },
  {
    color: PURPLE,
    title: "Shemamah: Desolation as De-Creation (vv.9-15)",
    body:
      "The Hebrew word shemamah (desolation, waste, horror) and its related forms appear throughout Isaiah 34&rsquo;s description of Edom&rsquo;s future condition. Shemamah is the state of land that has been stripped of its created purpose &mdash; no longer inhabited, cultivated, or fruitful, but abandoned to the forces of chaos. Isaiah 34:9-15 is the most developed portrait of shemamah in the prophetic literature, and it is deliberately constructed as the opposite of creation. The tohu and vohu (chaos and waste, Genesis 1:2) that God&rsquo;s creative word overcame in the beginning return as the destiny of the land that opposed God&rsquo;s purposes. The measuring line and plumb line (v.11) are construction tools, but here they measure out desolation rather than a building. The wilderness creatures that inherit Edom&rsquo;s territory are the creatures that populate the margins of human civilization &mdash; the uncultivated, uncanny, unclean animals of the desert wilderness. In the context of Isaiah&rsquo;s canon, shemamah always stands in dialectical relationship to the restoration imagery of chapters like Isaiah 35 &mdash; the same land that becomes waste under judgment will blossom and sing under redemption. The question the prophet raises is which trajectory the reader will inhabit.",
  },
  {
    color: TEAL,
    title: "Hassaphar: The Scroll of the LORD and the Reliability of Prophecy (vv.16-17)",
    body:
      "The reference to hassaphar (the book, the scroll) in Isaiah 34:16 raises one of the most significant questions in OT theology: what is the relationship between prophetic word and historical event? Isaiah&rsquo;s claim is that the judgments he has announced are written in a heavenly scroll, and the reader is invited to verify them against history. This is a bold epistemological move: the prophet does not ask for blind trust but for engaged, critical reading. He is saying: check the scroll against the evidence; see whether the word of the LORD has held. For early Jewish communities who had seen Edom&rsquo;s territory depopulated and eventually abandoned (as Nabataean Arabs pushed Edom&rsquo;s descendants &mdash; the Idumeans &mdash; westward after the 6th century BC), this verification was available. For early Christian communities, the reference to the scroll connected with NT themes of the heavenly book of life (Revelation 20:12-15) and the reliability of prophetic Scripture (2 Peter 1:19-21). The theological implication is that the LORD&rsquo;s word is not merely advisory but constitutive: it makes what it describes, and nothing declared in it will be missing or fail of fulfillment.",
  },
  {
    color: GREEN,
    title: "Yom Nakam: The Day of the LORD as the Climax of Prophetic Hope (v.8)",
    body:
      "Isaiah 34:8 names the event described throughout the chapter as &lsquo;a day of vengeance, a year of retribution, to uphold Zion&rsquo;s cause.&rsquo; This connects with the broader prophetic theme of the &lsquo;Day of the LORD&rsquo; (yom YHWH) that runs through Isaiah, Joel, Amos, Zephaniah, and Malachi. The Day of the LORD is the eschatological moment of divine intervention when the LORD acts decisively to judge his enemies, vindicate his people, and establish his kingdom. In Isaiah, the Day of the LORD is both threat (against sinful Israel, 2:12-21) and hope (against the nations who have oppressed Israel, 34:8). The dual character of the Day &mdash; simultaneously judgment and salvation, depending on one&rsquo;s relationship to the LORD &mdash; is developed most sharply in the pairing of Isaiah 34 and 35: chapter 34 is the Day as judgment (desolation for the enemies of Zion), chapter 35 is the Day as salvation (transformation and return for the redeemed of Zion). The NT&rsquo;s teaching on the return of Christ as both judge and savior draws on this same dual-character understanding of the Day of the LORD.",
  },
];

export default function Isaiah34GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [reflectionText, setReflectionText] = useState("");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px 60px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${ROSE}22`, border: `1px solid ${ROSE}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: ROSE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            Major Prophet &middot; Isaiah 34
          </div>
          <h1 style={{ color: TEXT, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, margin: "0 0 12px", lineHeight: 1.2 }}>
            Isaiah 34: The Day of the LORD&rsquo;s Vengeance Against the Nations
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: "0 0 20px", maxWidth: 680 }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 34 is a dramatic oracle of divine judgment &mdash; the great &lsquo;day of the LORD&rsquo; against all the nations, with Edom as the paradigm case. The heavens are rolled up like a scroll, the sword of the LORD descends on Edom, and the desolate land becomes an inheritance of wilderness creatures. It forms the dark counterpart to Isaiah 35&rsquo;s joyful vision of salvation and return." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {[
              { label: "Book", value: "Isaiah", color: GREEN },
              { label: "Chapter", value: "34 (17 verses)", color: TEAL },
              { label: "Period", value: "~700 BC", color: GOLD },
              { label: "Key Word", value: "Cherem / Devoted", color: ROSE },
            ].map(item => (
              <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 10, padding: "12px 14px" }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{item.label}</div>
                <div style={{ color: item.color, fontWeight: 700, fontSize: 14 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? ROSE : BORDER}`,
                background: activeTab === t.id ? `${ROSE}22` : "transparent",
                color: activeTab === t.id ? ROSE : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Chapter Overview</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 34 stands as one of the most confrontational and theologically difficult chapters in the entire prophetic corpus. It is a sweeping oracle of divine judgment that moves from the universal (all nations, the entire cosmos) to the particular (Edom, with its capital Bozrah), and finally to the permanent (the desolation that will last from generation to generation). It is an oracle that makes no concession to sentimentality, offering instead a vision of divine justice in its most comprehensive and severe expression." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The chapter divides into four main movements: (1) The cosmic summons and announcement of universal judgment against all nations (vv.1&ndash;4); (2) The focusing of the judgment on Edom as the paradigm case of the nation that opposes Zion (vv.5&ndash;8); (3) The detailed portrait of Edom&rsquo;s perpetual desolation, structured as a deliberate reversal of creation (vv.9&ndash;15); (4) The call to verify these judgments against the heavenly scroll that records them (vv.16&ndash;17)." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 34 cannot be read apart from Isaiah 35. Together they form one of the most carefully constructed literary pairs in the prophetic literature: the darkness of 34 is the necessary context for the light of 35. The desolation of Edom becomes the foil against which the blossoming of the redeemed landscape is painted. The permanent desolation of Edom&rsquo;s territory (shemamah) in chapter 34 becomes the desert that blossoms (tsimach) in chapter 35. Reading them in sequence is essential to grasping both the severity of God&rsquo;s justice and the wonder of his mercy." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Edom as the Paradigm of All Opposition to God</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Edom (the nation descended from Esau, Jacob&rsquo;s twin brother) occupies a unique position in the Old Testament as Israel&rsquo;s perpetual enemy who shares blood kinship with Israel. The siblings Jacob and Esau were rivals in the womb (Genesis 25:22-26), and the rivalry of their descendants continued throughout Israel&rsquo;s history. Edom refused passage to Israel during the wilderness wandering (Numbers 20:14-21), participated in attacks on Judah during the divided kingdom period, and &mdash; most devastatingly &mdash; celebrated and aided the Babylonian destruction of Jerusalem in 587 BC (Psalm 137:7, Obadiah 10-14, Lamentations 4:21-22)." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "In the prophetic tradition, Edom functions as a representative figure for all nations that choose enmity with God&rsquo;s people. Isaiah 34&rsquo;s judgment on Edom is therefore not merely about one historical nation but about the principle that those who make themselves the permanent enemies of God&rsquo;s purposes will experience the permanent reversal of those purposes against themselves. The New Testament book of Revelation draws heavily on Isaiah 34&rsquo;s Edom imagery when describing the judgment of Babylon/Rome (Revelation 17&ndash;18), suggesting that the prophetic structure applies to every empire that makes itself the adversary of God&rsquo;s people." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Key Hebrew Words</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { word: "Cherem", transliteration: "KHEH-rem", meaning: "Devoted to destruction, total consecration to God", verse: "v.2 &mdash; he will totally destroy them; v.5 &mdash; the people I have totally destroyed", color: ROSE },
                  { word: "Nakam", transliteration: "nah-KAM", meaning: "Vengeance, retribution, judicial vindication", verse: "v.8 &mdash; a day of vengeance, a year of retribution", color: GOLD },
                  { word: "Shemamah", transliteration: "sheh-mah-MAH", meaning: "Desolation, waste, horror", verse: "vv.9-15 &mdash; the full portrait of Edom's desolate future", color: PURPLE },
                  { word: "Hassaphar", transliteration: "has-SAH-phar", meaning: "The book, the scroll, the written record", verse: "v.16 &mdash; look in the scroll of the LORD and read", color: TEAL },
                  { word: "Tohu", transliteration: "TOH-hoo", meaning: "Chaos, formlessness, waste (cf. Genesis 1:2)", verse: "v.11 &mdash; the measuring line of chaos", color: GREEN },
                ].map(item => (
                  <div key={item.word} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "baseline", flexWrap: "wrap", marginBottom: 4 }}>
                      <span style={{ color: item.color, fontWeight: 800, fontSize: 16 }}>{item.word}</span>
                      <span style={{ color: MUTED, fontSize: 13, fontStyle: "italic" }}>{item.transliteration}</span>
                    </div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{item.meaning}</div>
                    <div style={{ color: MUTED, fontSize: 13 }} dangerouslySetInnerHTML={{ __html: item.verse }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in Isaiah 34</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 34 weaves together five major theological threads: the concept of cherem (devoted destruction), the nature of nakam (divine vengeance as vindication), the imagery of shemamah (desolation as de-creation), the reliability of hassaphar (the LORD&rsquo;s scroll), and the Day of the LORD as the climax of prophetic hope. Each thread connects to the larger canvas of biblical theology and finds its NT fulfillment in Christ&rsquo;s return as judge." }}
              />
            </div>
            {THEMES.map(theme => (
              <div key={theme.title} style={{ background: CARD, border: `1px solid ${theme.color}44`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
                <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 17, margin: "0 0 12px" }}>{theme.title}</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Isaiah 34 and the Book of Revelation</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The book of Revelation is the NT text most deeply saturated with Isaiah 34 imagery. The following connections are among the most significant:" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                {[
                  { step: "1", label: "The Heavens Rolled Up (Isa. 34:4 / Rev. 6:14)", desc: "The sky receding like a scroll is one of the most dramatic shared images between the two texts", color: ROSE },
                  { step: "2", label: "The Stars Falling (Isa. 34:4 / Rev. 6:13)", desc: "The starry host falling like shriveled figs from a fig tree is echoed directly in Revelation's sixth seal", color: GOLD },
                  { step: "3", label: "Edom/Babylon as the Paradigm Empire (Isa. 34:5-8 / Rev. 17-18)", desc: "Revelation uses Babylon as Edom's counterpart &mdash; the representative empire that has made itself the adversary of God's people", color: PURPLE },
                  { step: "4", label: "The Heavenly Scroll (Isa. 34:16 / Rev. 5:1-9)", desc: "The scroll with seven seals in Revelation is the book of history's completion that only the Lamb can open", color: TEAL },
                  { step: "5", label: "Smoke Rising Forever (Isa. 34:10 / Rev. 19:3)", desc: "The perpetual smoke of Edom's burning is echoed in the smoke of Babylon rising forever in Revelation 19:3", color: GREEN },
                ].map(item => (
                  <div key={item.step} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: BG, borderRadius: 10, padding: 14 }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${item.color}22`, border: `2px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{item.step}</div>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{item.label}</div>
                      <div style={{ color: MUTED, fontSize: 13 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The density of Isaiah 34 allusions in Revelation suggests that John saw Isaiah&rsquo;s oracle against Edom as a prophetic template for the final judgment of all empires that have made themselves the adversaries of the people of God. What Isaiah said about Edom, John applies to Rome &mdash; and by extension, to every oppressive power in every age. Isaiah 34 is not a dead letter from ancient history; it is a living template for understanding how God&rsquo;s justice operates in history and how history ends." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: Isaiah 34</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 34&rsquo;s seventeen verses are grouped below by thematic unit. Click any section to expand the commentary. All verses 1&ndash;17 are covered in the accordion below, including the cosmic summons (vv.1-4), the sword against Edom (vv.5-8), Edom&rsquo;s perpetual desolation (vv.9-15), and the scroll of the LORD (vv.16-17)." }}
              />
            </div>

            {VERSE_SECTIONS.map(section => (
              <div
                key={section.id}
                style={{ background: CARD, border: `1px solid ${openSection === section.id ? section.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden", transition: "border-color 0.15s" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ background: `${section.color}22`, border: `1px solid ${section.color}44`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: section.color, fontWeight: 700, whiteSpace: "nowrap" }}>
                      {section.ref}
                    </span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{section.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18, marginLeft: 12, flexShrink: 0 }}>{openSection === section.id ? "-" : "+"}</span>
                </button>
                {openSection === section.id && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginTop: 16 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 17, margin: "0 0 14px" }}>Key Verse References</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["Isaiah 34:1", "Isaiah 34:2", "Isaiah 34:4", "Isaiah 34:5", "Isaiah 34:8", "Isaiah 34:10", "Isaiah 34:11", "Isaiah 34:16", "Isaiah 34:17"].map(ref => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Application: Holding Together God&rsquo;s Justice and His Mercy</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 34 raises the most acute theological question in biblical faith: how do we hold together the God of judgment &mdash; who rolls up the heavens like a scroll, devotes nations to destruction, and makes Edom a permanent desolation &mdash; with the God of mercy who in Isaiah 35 makes the desert blossom, heals the blind and lame, and leads his people home on the highway of holiness? This is not a question that can be resolved by choosing one attribute and dismissing the other. The God of Isaiah 34 and the God of Isaiah 35 are the same God." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The NT resolution of this tension is found in the cross: Jesus bears the cherem (the devoted destruction) that human sin deserves, so that those who are united to him receive the ge&rsquo;ulim (the redemption) that Isaiah 35 promises. The judgment of Isaiah 34 and the salvation of Isaiah 35 are not contradictory but are two sides of the same divine act of putting right what has gone wrong in creation. The question for every reader is not whether God judges, but which side of the cross they stand on." }}
              />
            </div>

            {[
              {
                color: ROSE,
                title: "What Does It Mean That the LORD Has a Day of Vengeance?",
                icon: "01",
                body: "Isaiah 34:8 names the event a &lsquo;day of vengeance&rsquo; (yom nakam) and a &lsquo;year of retribution.&rsquo; For contemporary Christians formed by a culture that prizes unconditional acceptance and the therapeutic model of God, this language is jarring. But the theological claim is essential: if there is no judgment, there is no justice, and if there is no justice, the victims of history &mdash; the oppressed, the slaughtered, the exiled &mdash; have no advocate. The God who does not judge Edom for its role in the destruction of Jerusalem is not a God of love but a God of indifference. Nakam is the prerogative of the Judge who vindicates the innocent; it is the hope of those who have been wronged and have no human court to appeal to. Romans 12:17-21 channels this same conviction: because God&rsquo;s nakam is certain, believers need not take revenge into their own hands. The Judge will adjudicate; the task of the community is to leave room for his judgment while doing good in the present.",
              },
              {
                color: GOLD,
                title: "Understanding Cherem: The Severity of God and the Seriousness of Sin",
                icon: "02",
                body: "The language of cherem (total destruction) in Isaiah 34 confronts modern readers with what Paul calls &lsquo;the severity of God&rsquo; (Romans 11:22). The same apostle who urges believers to &lsquo;consider the kindness and severity of God&rsquo; also teaches that &lsquo;the wrath of God is being revealed from heaven against all the godlessness and wickedness of people&rsquo; (Romans 1:18). The severity of the judgment in Isaiah 34 is proportional to the severity of what is being judged: sustained, unrepentant opposition to the God who is the source of all life and order. The pastoral application is not to terrorize believers with the threat of judgment but to maintain the moral seriousness that prevents the community from becoming complacent about sin. A community that has lost its sense of the gravity of sin has also lost its appreciation for the grace that covers it. Isaiah 34 preserves the moral weight that makes Isaiah 35 miraculous rather than expected.",
              },
              {
                color: PURPLE,
                title: "Reading the Heavenly Scroll: Trusting the Word When History Is Dark",
                icon: "03",
                body: "Isaiah 34:16&rsquo;s call to &lsquo;look in the scroll of the LORD and read&rsquo; is an invitation to verify prophetic claims against historical reality. This is a remarkable act of intellectual courage: the prophet does not ask for credulous acceptance but for engaged, critical reading. The same posture is commended to believers in every age: when history looks dark, when empires seem invincible, when Edom seems to be winning, the call is to return to the prophetic word and read it against the evidence. The early Christian communities who read Isaiah 34 against the backdrop of Rome&rsquo;s persecution of the church found in it the assurance that the scroll of the LORD records the destiny of every empire, and that no item in the scroll will fail. The pastoral application in times of cultural threat or political oppression is precisely this: return to the prophetic word, read the scroll, and trust that none of its declarations will fail.",
              },
              {
                color: TEAL,
                title: "Isaiah 34 and 35 Together: The Pattern of Judgment and Salvation",
                icon: "04",
                body: "The most important application of Isaiah 34 is that it must always be read with Isaiah 35. They are not two separate oracles with independent meanings; they are two movements of a single symphony. The desolation of 34 is the darkness that makes the light of 35 radiant. The shemamah (desolation) of Edom&rsquo;s territory in chapter 34 is what makes the tsimach (blossoming) of the desert in chapter 35 miraculous. Pastorally, this pairing teaches the pattern of Christian experience: suffering and glory, death and resurrection, judgment and salvation are inseparable. The Christian who has only Isaiah 35 without Isaiah 34 has a sentimentalized gospel that cannot hold the weight of a world of real suffering and real evil. The Christian who has only Isaiah 34 without Isaiah 35 has a gospel of fear without hope. The fullness of Scripture holds both, just as the cross holds both the judgment of God on sin and the mercy of God toward sinners.",
              },
              {
                color: GREEN,
                title: "The Anti-Creation Imagery of Isaiah 34: What Do Wilderness and Chaos Mean?",
                icon: "05",
                body: "The detailed portrait of Edom&rsquo;s desolation in Isaiah 34:9-15 &mdash; with its tohu (chaos), its wilderness creatures, its unquenchable fire &mdash; is structured as the deliberate reversal of creation. Where Genesis 1-2 moves from chaos to order, from darkness to light, from wilderness to garden, Isaiah 34 moves in the opposite direction. The theological implication is profound: opposition to the LORD is ultimately opposition to the order of creation itself, and the judgment that follows is not an arbitrary punishment but the natural consequence of un-creation choosing itself. The Christian application is eschatological: those who align themselves with the Lamb, who belongs to creation&rsquo;s future rather than its dissolution, are aligned with the direction of history that Isaiah 35 describes. The wilderness will become a garden &mdash; not by human effort but by divine redemption. The question is which wilderness we are standing in, and which direction we are facing.",
              },
            ].map(item => (
              <div key={item.icon} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${item.color}22`, border: `2px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 800, fontSize: 12, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h3 style={{ color: item.color, fontWeight: 800, fontSize: 16, margin: "0 0 10px" }}>{item.title}</h3>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  </div>
                </div>
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8, marginBottom: 20 }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Isaiah 34 describes God's judgment in graphic, even disturbing detail. How do you respond emotionally and theologically to this picture of God? What does your response reveal about your underlying assumptions about who God is?",
                  "The concept of cherem (devoted destruction) is one of the most morally challenging ideas in the OT. How does the NT's teaching on the cross &mdash; where Jesus bears the cherem that sin deserves &mdash; shape how you understand the severity of divine judgment?",
                  "Isaiah 34:8 says the day of vengeance is specifically 'to uphold Zion's cause.' How does the understanding of divine judgment as advocacy for the oppressed change how you think about God's justice? In what situations does this promise bring you comfort?",
                  "The scroll of the LORD in 34:16 invites readers to verify prophetic claims against history. How do you practice the discipline of reading current events against the prophetic word? What does this look like concretely in your own life?",
                  "How does reading Isaiah 34 and Isaiah 35 together shape your understanding of Christian hope? What would it mean to hold both the severity of judgment and the wonder of redemption in the same theological frame?",
                ].map((q, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${ROSE}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Personal Reflection: Justice and Mercy</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 34 and 35 together raise the question of how we hold God&rsquo;s justice and mercy together. Use the space below to write a brief reflection: Where in your own life do you most need to trust that God&rsquo;s justice is real? Where do you most need to trust that his mercy is greater than the judgment you fear?" }}
              />
              <textarea
                value={reflectionText}
                onChange={(e) => setReflectionText(e.target.value)}
                placeholder="Write your reflection here..."
                style={{
                  width: "100%",
                  minHeight: 120,
                  background: BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  color: TEXT,
                  fontSize: 14,
                  padding: "12px 14px",
                  resize: "vertical",
                  fontFamily: "inherit",
                  lineHeight: 1.6,
                  boxSizing: "border-box",
                }}
              />
              {reflectionText.length > 0 && (
                <div style={{ marginTop: 10, color: MUTED, fontSize: 12 }}>
                  {reflectionText.length} characters &mdash; your reflection is saved locally in this session.
                </div>
              )}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Teaching Videos</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Video resources for further study and teaching on Isaiah 34.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {videoItems.map(item => (
                  <div key={item.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <h4 style={{ color: TEXT, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
