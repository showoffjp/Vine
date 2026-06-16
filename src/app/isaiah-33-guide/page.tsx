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
  { videoId: "zzGO4q0IVZU", title: "Isaiah 33 - The LORD Our King and Savior" },
  { videoId: "L_a5P6QTYBo", title: "Woe to the Destroyer Isaiah 33" },
  { videoId: "nUOPkifZGvE", title: "Who Can Dwell with God? Isaiah 33:14-16" },
  { videoId: "pXi0j1o3ZaI", title: "Zion Restored - Isaiah 33 Commentary" },
];

const VERSE_SECTIONS = [
  {
    id: "vs1",
    ref: "Isaiah 33:1-6",
    title: "The Woe Oracle Against Assyria the Destroyer",
    color: ROSE,
    content:
      "Woe to you, O destroyer, you who have not been destroyed! Woe to you, O traitor, you who have not been betrayed! When you stop destroying, you will be destroyed; when you stop betraying, you will be betrayed. LORD, be gracious to us; we long for you. Be our strength every morning, our salvation in time of distress. At the thunder of your voice, peoples flee; when you rise up, the nations scatter. Your plunder, O nations, is harvested as by young locusts; like a swarm of locusts people pounce on it. The LORD is exalted, for he dwells on high; he will fill Zion with his justice and righteousness. He will be the sure foundation for your times, a rich store of salvation and wisdom and knowledge; the fear of the LORD is the key to this treasure. The opening woe oracle (Hebrew: hoy) against the unnamed destroyer is one of the most poetically powerful in all of Isaiah. The target is Assyria, the nation that had devastated the ancient Near East with brutal military efficiency, exiling peoples and demolishing cities. Isaiah announces a divine reversal: the destroyer will be destroyed, the betrayer betrayed, by the same principle of justice that governs human affairs under God. The prayer in verses 2-4 is communal lament shifting to trust: 'LORD, be gracious to us; we long for you.' This longing (Hebrew: qavah, the same word used of hoping in the LORD throughout Isaiah) is the posture of those who have run out of human options and cast themselves on divine strength. Verse 5 declares the theological ground of the prayer: the LORD is exalted above all earthly powers. Verse 6 provides one of the most dense condensations of Israel's covenant theology: the LORD himself is the sure foundation (emunah, faithfulness/stability), and in him is a rich store of yeshua (salvation), wisdom, and knowledge. The fear of the LORD is presented not as the emotion of terror but as the key to this treasury &mdash; the posture of reverent trust that unlocks the divine resources.",
  },
  {
    id: "vs2",
    ref: "Isaiah 33:7-13",
    title: "The Failure of Human Alliance and the Rising of the LORD",
    color: GOLD,
    content:
      "Look, their brave men cry aloud in the streets; the envoys of peace weep bitterly. The highways are deserted, no travelers are on the roads. The treaty is broken, its witnesses are despised, no one is respected. The land dries up and wastes away, Lebanon is ashamed and withers; Sharon is like the Arabah, and Bashan and Carmel drop their leaves. 'Now will I arise,' says the LORD. 'Now will I be exalted; now will I be lifted up. You conceive chaff, you give birth to straw; your breath is a fire that consumes you. The peoples will be burned to ashes; like cut thornbushes they will be set ablaze.' You who are far away, hear what I have done; you who are near, acknowledge my power! The sinners in Zion are terrified; trembling grips the godless: 'Who of us can dwell with the consuming fire? Who of us can dwell with everlasting burning?' Verses 7-9 describe the catastrophic failure of human diplomacy. The 'brave men' (Hebrew: erelim, possibly a reference to ambassadors or warriors) cry in the streets because their negotiations with Assyria have collapsed. The envoys of peace weep because the treaty they brokered has been violated. This is the historical moment of Sennacherib's invasion of Judah in 701 BC, when Assyria broke the peace terms and advanced on Jerusalem. But Isaiah interprets this geopolitical disaster theologically: it is the moment when human power reaches its limit and divine power is released. 'Now will I arise,' says the LORD &mdash; the triple repetition (arise, exalted, lifted up) mirrors the divine throne vision of Isaiah 6 and the Servant's exaltation in Isaiah 52:13. When human alliances fail, God acts. The question of verse 14 &mdash; 'Who of us can dwell with the consuming fire?' &mdash; is not rhetorical despair but genuine eschatological inquiry: what kind of life can survive the presence of the holy God?",
  },
  {
    id: "vs3",
    ref: "Isaiah 33:14-16",
    title: "Who Can Dwell with the Devouring Fire?",
    color: PURPLE,
    content:
      "The sinners in Zion are terrified; trembling grips the godless: 'Who of us can dwell with the consuming fire? Who of us can dwell with everlasting burning?' He who walks righteously and speaks what is right, who rejects gain from extortion and keeps his hand from accepting bribes, who stops his ears against plots of murder and shuts his eyes against contemplating evil &mdash; this is the man who will dwell on the heights, whose refuge will be the mountain fortress. His bread will be supplied, and water will not fail him. Verses 14-16 form one of the most morally pointed passages in all of the prophets. The question 'who can dwell with the consuming fire?' is parallel to Psalm 15 and Psalm 24, both of which ask who may ascend the LORD's mountain and dwell in his holy presence. The answer in all three texts is the same: not those with the right ethnic identity, not those who perform the right rituals, but those whose character and conduct are aligned with the character of God. Isaiah's description is vivid and specific: walking righteously (Hebrew: tsaddiq, in right moral order), speaking what is right, rejecting extortion, refusing bribes, refusing to listen to murder plots, refusing to look at evil. The moral anatomy is comprehensive &mdash; it covers walking, speaking, hands, ears, and eyes. The person whose entire embodied existence is oriented toward the good can dwell in the presence of the Holy One. The promised provision &mdash; 'his bread will be supplied, and water will not fail him' &mdash; echoes the wilderness feeding of Israel and anticipates Jesus's promise that those who seek first the kingdom will have their needs met (Matthew 6:33). Nearness to God does not mean material deprivation; it is accompanied by divine provision.",
  },
  {
    id: "vs4",
    ref: "Isaiah 33:17-22",
    title: "The King in His Beauty and the LORD as Judge, Lawgiver, and King",
    color: GREEN,
    content:
      "Your eyes will see the king in his beauty and view a land that stretches far. In your thoughts you will ponder the former terror: 'Where is that officer? Where is the one who took the revenue? Where is the officer in charge of the towers?' You will see those arrogant people no more, those people of an obscure speech, with their strange, incomprehensible tongue. Look on Zion, the city of our festivals; your eyes will see Jerusalem, a peaceful abode, a tent that will not be moved; its stakes will never be pulled up, nor any of its ropes broken. There the LORD will be our Mighty One. It will be like a place of broad rivers and streams. No galley with oars will ride them, no mighty ship will sail them. For the LORD is our judge, the LORD is our lawgiver, the LORD is our king; it is he who will save us. Verse 17 opens a vision of the restored kingdom with one of the most beautiful phrases in the Old Testament: 'Your eyes will see the king in his beauty.' This is the promise of direct, unobstructed access to the royal presence &mdash; not the terror of the woe oracle's beginning but the delight of dwelling in the king's presence. The former terror &mdash; the Assyrian officers who demanded tribute and controlled the city's defenses &mdash; will be gone. Their arrogant speech (v.19, 'incomprehensible tongue') will be silenced. Zion will be a 'peaceful abode, a tent that will not be moved' &mdash; the opposite of the exile's displacement, the permanent dwelling of a people who will never again be uprooted. Verse 21 introduces the river imagery: the LORD will be a place of 'broad rivers and streams' for the city &mdash; but without the military threat that ancient rivers brought (enemy warships could sail up rivers to attack cities). The divine presence provides all the blessing of a great river without any of the vulnerability. Verse 22 is the theological climax of the chapter and one of the most concentrated statements of divine sovereignty in the Old Testament: 'The LORD is our judge, the LORD is our lawgiver, the LORD is our king; it is he who will save us.' Four divine roles in one verse: judge (mishpat), lawgiver (chaqaq), king (melech), savior (yasha). James Madison was familiar with this verse when developing the concept of separation of powers &mdash; recognizing that in human government these functions must be distributed, precisely because only God can be trusted to hold all four simultaneously.",
  },
  {
    id: "vs5",
    ref: "Isaiah 33:23-24",
    title: "Zion's Glorious Future: The Lame Take Prey",
    color: TEAL,
    content:
      "Your rigging hangs loose: the mast is not held secure, the sail is not spread. Then an abundance of spoils will be divided and even the lame will carry off plunder. No one living in Zion will say, 'I am ill'; and the sins of those who dwell there will be forgiven. The closing verses of Isaiah 33 continue the maritime metaphor introduced in verse 21, but here the image shifts to the enemy ship that attempted to attack and is now helplessly disabled &mdash; its rigging loose, mast unsecured, sail unfurled. The would-be attacker is incapacitated; the spoils are available even to the most vulnerable. The 'even the lame will carry off plunder' is a powerful image of complete reversal: those who were most defenseless, least able to fight or flee, now share in the victory of the LORD's salvation. This anticipates the healing of the lame in Isaiah 35:6 and Jesus's own healing ministry, which he cites in Luke 7:22 as the sign of the kingdom's arrival. Verse 24 ends the chapter with two staggering promises: no one in Zion will say 'I am ill,' and the sins of those who dwell there will be forgiven. The connection between sickness and sin is not mechanical causality but eschatological completeness: in the redeemed Zion, both the physical and the moral disorders of the present age are resolved. The forgiveness of sins is named last, as the deepest and most comprehensive act of divine restoration. The Hebrew word for forgiven here is nasa &mdash; 'lifted,' the same root used in the great Servant song of Isaiah 53:12 where the Servant 'bore the sin of many.' The sins are not merely overlooked; they are lifted and carried away.",
  },
];

const THEMES = [
  {
    color: ROSE,
    title: "Hoy: The Woe Oracle Against the Destroyer (vv.1-6)",
    body:
      "The Hebrew interjection hoy (woe) is used throughout the prophetic literature to introduce oracles of judgment against those who violate the covenant order. Isaiah uses it extensively in chapters 28-33 (a series of six woe oracles) against false alliances, spiritual blindness, and political schemes that exclude God. In 33:1, the woe against the 'destroyer who has not been destroyed' announces the principle of retributive justice that Isaiah has been building throughout the woe-oracle sequence: the sin you enact will return upon you. Assyria destroyed other nations; Assyria will be destroyed. This is not mere revenge but the structural outworking of divine moral order. The woe oracle format was probably familiar to Isaiah's hearers from the funeral liturgy &mdash; hoy was a mourning cry, used to announce the death of someone who had not yet died. To pronounce hoy over Assyria was to declare its doom in advance, treating its fall as already accomplished. The NT equivalent is the book of Revelation's 'woe' proclamations against Babylon (Rome), which adopt the same prophetic framework: the destroyer is destined for destruction, and the people of God are called to refuse complicity with its systems.",
  },
  {
    color: GOLD,
    title: "Yeshua: Salvation as the LORD's Personal Act (vv.6, 22)",
    body:
      "The Hebrew word yeshua (salvation, deliverance) appears in verse 6 as one of the treasures stored in the LORD ('a rich store of salvation and wisdom and knowledge') and is implied in verse 22 through the verb yasha ('it is he who will save us'). Yeshua is of course the Hebrew name of Jesus &mdash; the one who bears the very name of Israel's salvation. The connection is not accidental from a NT perspective: Matthew 1:21 explicitly connects Jesus's name with his mission ('he will save his people from their sins'). Isaiah 33 understands salvation as God's personal, direct intervention &mdash; not a human achievement mediated by political alliance, military strength, or ritual performance, but the LORD's own act of rising up (v.10) and dwelling among his people. The chapter's structure moves from the failure of human salvation strategies (the broken treaty, the weeping envoys of v.7) to the announcement of divine salvation as the only viable alternative. The political lesson and the theological lesson are the same: yeshua belongs to God alone, and those who seek it elsewhere find only chaff and straw (v.11).",
  },
  {
    color: PURPLE,
    title: "Mishpat: The LORD as Judge and the Order of His Kingdom (v.22)",
    body:
      "The Hebrew word mishpat (justice, judgment, right order) is foundational to Old Testament ethics and eschatology. In Isaiah, mishpat consistently describes the quality of God's rule that will characterize the messianic age: Isaiah 9:7 ('with justice and righteousness from that time on and forever'), Isaiah 11:4 ('with righteousness he will judge the needy'), Isaiah 16:5 ('in faithfulness a man will sit on it &mdash; one who in judging seeks justice'). In Isaiah 33:22, the LORD is named as judge (shophet) &mdash; the one who executes mishpat. But this is not merely a legal role; it is a relational one. The judge in Israel was the one who set right what was wrong, who vindicates the oppressed and holds the oppressor accountable. God as judge is not a fearful concept for the righteous but a welcoming one: it means that wrong will not prevail, that the broken will be vindicated, that the exploited will see justice. The NT's vision of the last judgment draws on this same prophetic wellspring &mdash; Christ returning as judge is the fulfillment of the hope that mishpat will finally, completely, prevail.",
  },
  {
    color: TEAL,
    title: "Shakan: Dwelling in the Presence of the Holy God (vv.14-16)",
    body:
      "The Hebrew root shakan (to dwell, to settle, to take up residence) is one of the most theologically loaded words in the Old Testament. The mishkan (tabernacle) derives from this root: it is the place where God shakes &mdash; 'dwells' &mdash; among his people. The Shekinah glory is likewise from shakan. In Isaiah 33:14-16, the question is who can shakan in the presence of the consuming fire of God's holiness. The answer is the person of righteous character: those who walk, speak, act, listen, and look in ways that reflect the holiness of the God in whose presence they dwell. This is not salvation by works; it is a description of the person who has been transformed by the relationship with the holy God and whose whole embodied existence now reflects that transformation. The NT equivalent is found in Hebrews 12:14 ('without holiness no one will see the Lord') and in the Beatitudes: 'Blessed are the pure in heart, for they will see God' (Matthew 5:8). The question of who can dwell with God is answered not by ritual qualification but by character transformation.",
  },
  {
    color: GREEN,
    title: "Melech: The LORD as King of Zion (vv.17-22)",
    body:
      "The Hebrew word melech (king) appears in Isaiah 33:22 as the third of the LORD's four titles. In the ancient Near East, the king was the supreme embodiment of political, judicial, military, and religious authority. Israel's prophets consistently taught that the true melech of Israel was not the Davidic king (however exalted) but the LORD himself. Isaiah's vision of the LORD as king goes back to his throne vision in chapter 6 ('I saw the Lord, high and exalted, seated on a throne'). The messianic king of Isaiah 33:17 ('your eyes will see the king in his beauty') is therefore both the LORD himself and the one through whom the LORD exercises his kingship. The NT resolution of this tension is found in Jesus: the Son of David who is also the Son of God, the human king through whom the divine melech reigns. Revelation's closing vision of the New Jerusalem draws extensively on Isaiah 33's imagery: the city where the LORD is king, where there is no more suffering or forgiveness needed, where the lame are healed and the sins of the people are carried away.",
  },
];

export default function Isaiah33GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openSection, setOpenSection] = useState<string | null>(null);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px 60px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${GREEN}22`, border: `1px solid ${GREEN}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GREEN, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            Major Prophet &middot; Isaiah 33
          </div>
          <h1 style={{ color: TEXT, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, margin: "0 0 12px", lineHeight: 1.2 }}>
            Isaiah 33: Woe to the Destroyer, the LORD Our King, and Zion&rsquo;s Glorious Future
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: "0 0 20px", maxWidth: 680 }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 33 moves from a woe oracle against the Assyrian destroyer to a vision of Zion&rsquo;s restoration under the LORD who is simultaneously judge, lawgiver, king, and savior &mdash; the one whose presence is both consuming fire and the source of yeshua, mishpat, and eternal dwelling." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {[
              { label: "Book", value: "Isaiah", color: GREEN },
              { label: "Chapter", value: "33 (24 verses)", color: TEAL },
              { label: "Period", value: "~701 BC", color: GOLD },
              { label: "Key Word", value: "Yeshua / Salvation", color: PURPLE },
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
                border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`,
                background: activeTab === t.id ? `${GREEN}22` : "transparent",
                color: activeTab === t.id ? GREEN : MUTED,
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
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Chapter Overview</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 33 is the sixth and final woe oracle of the sequence that begins in Isaiah 28. It is also one of the most theologically rich chapters in the entire book, combining the raw material of political crisis with some of the highest visions of God&rsquo;s kingship and the restored Zion in all of Scripture. The historical background is the Assyrian crisis of 701 BC: Sennacherib has invaded Judah, the treaty guaranteeing peace has been violated, and human diplomatic options have been exhausted." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The chapter moves through five movements: (1) The woe oracle against Assyria the destroyer and the prayer for grace (vv.1&ndash;6); (2) The failure of human alliance and the divine rising (vv.7&ndash;13); (3) The question of who can dwell with the consuming fire and the portrait of the righteous person (vv.14&ndash;16); (4) The vision of the king in his beauty and the land stretching far, culminating in the declaration of the LORD as judge, lawgiver, and king (vv.17&ndash;22); (5) The complete salvation of Zion &mdash; even the lame carrying spoils, the sick healed, and sins forgiven (vv.23&ndash;24)." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "What makes Isaiah 33 distinctive within the book is its integration of the forensic, royal, and salvific dimensions of God&rsquo;s character. The LORD who is &lsquo;consuming fire&rsquo; (v.14) is also the one who stores up yeshua as a treasure (v.6), who becomes a place of broad rivers for the city (v.21), and who lifts the sins of those who dwell in Zion (v.24). The fear of God is not terror of annihilation but the key that opens the treasury of divine provision." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Context in the Woe-Oracle Sequence (Isaiah 28&ndash;33)</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 28&ndash;33 contains six woe oracles directed at various manifestations of unfaithfulness: chapter 28 (woe to Ephraim&rsquo;s drunkards and the scoffers in Jerusalem), chapter 29 (woe to Ariel/Jerusalem, and to those who hide from God), chapter 30 (woe to the obstinate nation that seeks Egyptian alliance), chapter 31 (woe to those who rely on horses and Egypt), chapter 32 (the coming righteous king, the complacent women, and the Spirit&rsquo;s outpouring), and chapter 33 (woe to the destroyer)." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 33 functions as the climax of the sequence. The previous five woes addressed Israel and Judah&rsquo;s own failures of trust; the sixth woe addresses the external threat that those failures enabled &mdash; the Assyrian empire. The resolution of the sequence is not political but theological: the LORD rises (33:10), the destroyer is destroyed (33:1), and Zion is restored under the direct kingship of the LORD (33:22). The sequence ends where it must end: not with human reformation but with divine sovereignty." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Key Hebrew Words</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { word: "Yeshua", transliteration: "ye-SHOO-ah", meaning: "Salvation, deliverance", verse: "v.6 &mdash; a rich store of salvation", color: GREEN },
                  { word: "Mishpat", transliteration: "mish-PAT", meaning: "Justice, judgment, right order", verse: "v.5 &mdash; he will fill Zion with justice; v.22 &mdash; the LORD is our judge", color: GOLD },
                  { word: "Shakan", transliteration: "sha-KAN", meaning: "Dwell, settle, take up residence", verse: "v.14 &mdash; who can dwell with the consuming fire?", color: PURPLE },
                  { word: "Melech", transliteration: "MEH-lekh", meaning: "King, sovereign ruler", verse: "v.22 &mdash; the LORD is our king; v.17 &mdash; the king in his beauty", color: TEAL },
                  { word: "Adon", transliteration: "ah-DON", meaning: "Lord, master, sovereign", verse: "v.22 &mdash; the LORD as the one who will save us", color: ROSE },
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
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in Isaiah 33</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 33 weaves together five major theological threads that run through the whole of the prophetic literature and find their fulfillment in the New Testament: the prophetic woe as announcement of divine justice, yeshua as God&rsquo;s own act, mishpat as the quality of God&rsquo;s kingdom, the question of dwelling with the holy God, and the LORD as the melech who reigns in Zion." }}
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
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>The Fourfold Title: Judge, Lawgiver, King, Savior (v.22)</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 33:22 is one of the most theologically concentrated verses in the Old Testament. The LORD is given four roles that in human political life are typically distributed across different institutions:" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                {[
                  { step: "1", label: "Judge (shophet)", desc: "The one who executes mishpat &mdash; setting right what is wrong, vindicating the oppressed", color: ROSE },
                  { step: "2", label: "Lawgiver (mehoqeq)", desc: "The source of the moral and covenantal order &mdash; the one who defines what is right", color: GOLD },
                  { step: "3", label: "King (melech)", desc: "The sovereign ruler &mdash; the one whose authority is ultimate and whose reign is just", color: TEAL },
                  { step: "4", label: "Savior (from yasha)", desc: "The deliverer &mdash; the one who rescues his people from the consequences of sin and the power of enemies", color: GREEN },
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
                dangerouslySetInnerHTML={{ __html: "The NT resolution of this fourfold title is found in Jesus Christ: the one through whom God judges (John 5:22, 27), the one who fulfills and deepens the law (Matthew 5:17), the one who reigns as king at God&rsquo;s right hand (Ephesians 1:20-23), and the one whose name (Yeshua) means &lsquo;the LORD saves&rsquo; (Matthew 1:21). Isaiah 33:22 is proto-Trinitarian in the sense that the early church found in it a preview of the full revelation of God as the one who saves through his Son." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: Isaiah 33</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 33&rsquo;s twenty-four verses are grouped below by thematic unit. Click any section to expand the commentary. All verses 1&ndash;24 are covered in the accordion below." }}
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
                {["Isaiah 33:1", "Isaiah 33:2", "Isaiah 33:6", "Isaiah 33:10", "Isaiah 33:14", "Isaiah 33:15", "Isaiah 33:17", "Isaiah 33:22", "Isaiah 33:24"].map(ref => (
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
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Application: The LORD as Judge, Lawgiver, and King &mdash; Trusting the One Who Holds All Authority</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 33 raises the question that confronts every generation: when human authority structures fail &mdash; when treaties are broken, when envoys weep in the streets, when the land withers and the highways are empty &mdash; where does trust belong? The chapter&rsquo;s answer is the theological claim of verse 22: the LORD alone is judge, lawgiver, king, and savior. No human government, no military alliance, no economic system can bear the weight of those four roles simultaneously. Only God can." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The question &lsquo;who of us can dwell with the consuming fire?&rsquo; (v.14) is the most searching question in the chapter. It confronts the reader with the holiness of the God in whom they are placing their trust. This is not a comfortable God, not a God who accommodates himself to our moral preferences or our political agendas. He is consuming fire. The person who dwells with him is the person whose character has been shaped by his character &mdash; walking righteously, speaking truth, refusing corruption, closing eyes and ears against evil." }}
              />
            </div>

            {[
              {
                color: GREEN,
                title: "Trusting the LORD When Human Alliances Fail",
                icon: "01",
                body: "Isaiah 33:7-9 describes the desolation that follows the breakdown of human political arrangements: envoys weeping, highways empty, the land withering. This is the experiential reality that the LORD&rsquo;s kingship is designed to address. The practical application for the contemporary believer is a sustained examination of where trust is actually located. Governments change; economies fluctuate; institutions fail; treaties are broken. Isaiah&rsquo;s word to those who have placed their trust in these structures is not cynicism but redirection: &lsquo;LORD, be gracious to us; we long for you. Be our strength every morning, our salvation in time of distress&rsquo; (v.2). The morning prayer of trust is the structural alternative to the despair of the envoy who has bet everything on a broken treaty.",
              },
              {
                color: PURPLE,
                title: "Living as Those Who Will See the King in His Beauty",
                icon: "02",
                body: "Isaiah 33:17 promises that the eyes of the faithful will see the king in his beauty &mdash; a direct, unobstructed vision of the royal presence that the present age only glimpses through faith and the word. This eschatological promise shapes present life in a specific way: it creates a community of people who are oriented toward a vision that the world around them cannot see. The beauty of the king (the same concept as Psalm 27:4, &lsquo;to gaze on the beauty of the LORD&rsquo;) is the object of Christian contemplation even now. Worship, prayer, Scripture meditation, and sacramental practice are all forms of learning to see the king whose beauty will one day be fully visible. Those who cultivate this vision now are not surprised by what they see when the Day arrives.",
              },
              {
                color: GOLD,
                title: "What Does It Mean That the LORD Is Our Judge, Lawgiver, and King?",
                icon: "03",
                body: "Isaiah 33:22&rsquo;s fourfold title has direct implications for how believers relate to human institutions of law, government, and justice. The LORD as judge means that every human court operates within a moral order that it did not create and cannot revise. The LORD as lawgiver means that the standards of justice are not negotiable according to the preferences of the powerful. The LORD as king means that ultimate political authority belongs to the one who will return to reign, not to any current holder of office. And the LORD as savior means that the outcome of history does not depend on the quality of human governance but on the faithfulness of the one who holds all four roles. This does not produce political quietism &mdash; Isaiah himself was deeply engaged with the political crises of his day &mdash; but it produces a specific kind of political realism: clear-eyed about human failure, anchored in divine sovereignty, active in pursuing justice without despair.",
              },
              {
                color: TEAL,
                title: "Pursuing the Righteousness That Can Dwell in the Divine Presence",
                icon: "04",
                body: "The portrait of the righteous person in Isaiah 33:15-16 is one of the most practically specific in the Old Testament. It covers the whole embodied person: how they walk, how they speak, what their hands accept, what their ears hear, what their eyes look at. The application is not merely individual but communal: a congregation that embodies these qualities becomes a community in which the divine presence can dwell. The shakan of God is not primarily experienced in spectacular moments of spiritual power but in the sustained practice of righteous community life. Where the poor are not left hungry (contrast v.15 with Isaiah 32:6), where bribes are refused, where plots of murder are reported rather than enabled &mdash; there the consuming fire is present not as destruction but as life-giving holiness.",
              },
              {
                color: ROSE,
                title: "The Lame Carrying Spoils: The Reversal of the Kingdom",
                icon: "05",
                body: "Isaiah 33:23 &mdash; &lsquo;even the lame will carry off plunder&rsquo; &mdash; is one of the great reversal images of the Old Testament. The kingdom of the LORD is a kingdom in which those who were most marginalized and least capable of self-defense share fully in the victory of God&rsquo;s salvation. Jesus&rsquo;s healing of the lame (Matthew 11:5, Luke 7:22) is the sign that this reversal has begun. The church&rsquo;s ministry to the most vulnerable &mdash; the disabled, the sick, the marginalized &mdash; is not merely humanitarian; it is eschatological. It is a sign of the kingdom in which the lame carry spoils, in which no one says &lsquo;I am ill&rsquo; (v.24), in which the sins of the people are forgiven and carried away. Every act of care for the most vulnerable in the community is a living embodiment of the Isaiah 33 vision.",
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
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Isaiah 33:2 is a morning prayer of total dependence: 'Be our strength every morning, our salvation in time of distress.' What does it look like to pray this prayer at the beginning of your day? What would it change about your posture toward the day's challenges?",
                  "The question in verse 14 &mdash; 'who of us can dwell with the consuming fire?' &mdash; is addressed to people within the covenant community, not to pagans. How does this question apply to your own life? What aspects of your character, speech, or conduct need to be brought into alignment with the holiness of the God you claim to trust?",
                  "Isaiah 33:22 names the LORD as judge, lawgiver, king, and savior. In what areas of your life are you most tempted to look to human institutions, authorities, or systems to play these roles? What would it look like to redirect that trust toward the LORD?",
                  "Verse 17 promises that 'your eyes will see the king in his beauty.' How are you cultivating the capacity to see the beauty of the LORD now &mdash; in worship, in Scripture, in the community of the church &mdash; as preparation for the full vision that is coming?",
                  "The lame carrying spoils (v.23) is an image of radical inclusion in the victory of God. Who in your community is most 'lame' &mdash; most marginalized, most unable to advocate for themselves? How does your church&rsquo;s ministry to them embody the Isaiah 33 vision of the kingdom?",
                ].map((q, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${GREEN}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Teaching Videos</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Video resources for further study and teaching on Isaiah 33.
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
