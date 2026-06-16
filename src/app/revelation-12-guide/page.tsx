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

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

const videoItems = [
  { videoId: "h3XiKJjMxiY", title: "Revelation 12 - The Woman the Dragon and the Child" },
  { videoId: "RdI8YL8Cfmk", title: "War in Heaven - Michael and the Dragon Revelation 12" },
  { videoId: "GjGFi0kIBho", title: "They Overcame by the Blood of the Lamb Revelation 12:11" },
  { videoId: "bHvXe0AHvR4", title: "The Cosmic War Behind History - Revelation 12" },
];

const KEY_THEMES = [
  {
    id: "th1",
    color: GOLD,
    title: "The Woman Clothed with the Sun (vv. 1-2)",
    body: "A great sign appears in heaven: a woman clothed with the sun, with the moon under her feet, and a crown of twelve stars on her head. She is pregnant and crying out in birth pains. The woman is one of the most richly interpreted symbols in Revelation. In one reading she is Israel (the twelve stars echoing Joseph's dream in Genesis 37:9 &mdash; the twelve tribes). In another she is Mary the mother of Jesus, literally giving birth to the Messiah. In a third she is the church, the community of God's people in every age who bear the Messiah into the world through suffering witness. Many scholars see a layered meaning: all three are present simultaneously. The labor pains echo Isaiah 26:17-18 and Micah 4:10 &mdash; the travail of God's people before the new age dawns. This is not merely Mary's physical labor; it is the whole of redemptive history straining toward the birth of the One who will rule the nations."
  },
  {
    id: "th2",
    color: ROSE,
    title: "The Great Red Dragon (vv. 3-4)",
    body: "Another sign appears: a great red dragon with seven heads, ten horns, and seven crowns on his heads. His tail sweeps a third of the stars out of the sky. John tells us in verse 9 that this dragon is &ldquo;that ancient serpent called the devil, or Satan, who leads the whole world astray.&rdquo; The seven heads and ten horns mirror the beast from the sea in Revelation 13, identifying the dragon as the spiritual power behind every imperial system that opposes God. The sweeping of a third of the stars echoes Daniel 8:10, where Antiochus IV swept down some of the host of heaven. The dragon stands before the woman ready to devour her child the moment he is born &mdash; an image of the spiritual opposition that has pursued the Messiah from birth (echoed in Herod&apos;s massacre of the innocents in Matthew 2). The dragon&apos;s red color suggests murderous intent; he is the original murderer from the beginning (John 8:44)."
  },
  {
    id: "th3",
    color: PURPLE,
    title: "The Birth and Catching Up of the Male Child (vv. 5-6)",
    body: "The woman gives birth to a male child &mdash; one who &ldquo;will rule all the nations with an iron scepter&rdquo; (quoting Psalm 2:9, a royal messianic psalm). The child is caught up to God and to his throne. This is unmistakably the entire arc of Christ&apos;s life compressed into a single image: the incarnation (the birth), the ascension and enthronement (caught up to God and to his throne), and the promise of universal dominion (rule all the nations). Remarkably, the cross and resurrection are not explicitly mentioned here &mdash; but they are implicitly present in the catching up that results from the dragon&apos;s defeat in the following verses. The woman flees to the wilderness where God has prepared a place for her to be cared for for 1,260 days (three and a half years &mdash; the symbolic period of tribulation). This echoes Elijah&apos;s three-year refuge during persecution in 1 Kings 17-18 and Israel&apos;s wilderness provision in Exodus."
  },
  {
    id: "th4",
    color: TEAL,
    title: "War in Heaven: Michael and His Angels (vv. 7-9)",
    body: "Then war broke out in heaven: Michael and his angels fought against the dragon, and the dragon and his angels fought back. The dragon was not strong enough, and they lost their place in heaven. The great dragon &mdash; the ancient serpent, called the devil and Satan, the deceiver of the whole world &mdash; was hurled to the earth, along with his angels. The name Michael means &ldquo;who is like God?&rdquo; He is the archangel specifically associated with the defense of God&apos;s people in Daniel 10:13, 21 and 12:1. The war in heaven is not a primordial battle at the beginning of time (that would require a different reading of the Greek). Rather, this expulsion from heaven is the direct consequence of the ascension of the male child to God&apos;s throne &mdash; when Christ is enthroned, Satan loses his position as the accuser in the heavenly court. The cosmic war behind history has a definitive turning point at the cross and resurrection. Satan&apos;s ejection is permanent: there is no more place for him in heaven."
  },
  {
    id: "th5",
    color: GREEN,
    title: "The Accuser Cast Down &mdash; The Song of Victory (vv. 10-12)",
    body: "Then I heard a loud voice in heaven say: &ldquo;Now have come the salvation and the power and the kingdom of our God, and the authority of his Messiah. For the accuser of our brothers and sisters, who accuses them before our God day and night, has been hurled down. They triumphed over him by the blood of the Lamb and by the word of their testimony; they did not love their lives so much as to shrink from death.&rdquo; This is the theological heart of Revelation 12. The Greek word for accuser is &ldquo;kategoreo&rdquo; &mdash; to bring charges, to prosecute. Satan&apos;s primary activity in the heavenly court has been prosecutorial: he accuses God&apos;s people before God (as in Job 1-2 and Zechariah 3:1). But with the ascension of the Lamb who bears the sins of the world, the accusation is permanently answered. The overcomer&apos;s victory formula is threefold: the blood of the Lamb (objective atonement), the word of their testimony (faithful witness under pressure), and the willingness to die (total surrender to God&apos;s purposes). &ldquo;Nikao&rdquo; &mdash; to overcome or conquer &mdash; is the great Revelation word for the saints who persevere."
  },
  {
    id: "th6",
    color: GOLD,
    title: "The Dragon Pursues the Woman; Wings of an Eagle (vv. 13-17)",
    body: "When the dragon sees that he has been hurled to the earth, he pursues the woman who had given birth to the male child. The woman is given the two wings of a great eagle so that she might fly to the place prepared for her in the wilderness. This imagery directly echoes Exodus 19:4, where God says to Israel: &ldquo;You yourselves have seen what I did to Egypt, and how I carried you on eagles&apos; wings and brought you to myself.&rdquo; The church in every age of persecution is the new Exodus community, carried by God through the wilderness of this age. The dragon then spews a flood from his mouth to sweep the woman away &mdash; but the earth swallows the flood. The flood from the serpent&apos;s mouth may represent slander, false accusation, or the propaganda of empire directed against the church. The earth&apos;s swallowing of the flood is God&apos;s providential protection. Enraged, the dragon goes off to make war against the rest of her offspring &mdash; those who keep God&apos;s commands and hold fast to their testimony about Jesus. This is the situation the original readers face: the dragon cannot destroy the church as a whole, so he persecutes individual believers."
  },
];

const VERSE_BY_VERSE = [
  {
    id: "v1",
    ref: "12:1-2",
    title: "The First Sign: The Woman",
    body: "A great sign appeared in heaven: a woman clothed with the sun, with the moon under her feet and a crown of twelve stars on her head. She was pregnant and cried out in pain as she was about to give birth. The word &lsquo;sign&rsquo; (Greek: &lsquo;semeion&rsquo;) indicates that this is symbolic, not literal &mdash; this is visionary representation, not a physical woman floating in the sky. The imagery of sun, moon, and stars comes from Joseph&apos;s dream in Genesis 37:9, which refers to Israel (Jacob/sun, Rachel/moon, twelve brothers/stars). The labor pains connect to the OT tradition of the travail of God&apos;s people as they await redemption (Isaiah 26:17, Micah 5:3)."
  },
  {
    id: "v2",
    ref: "12:3-4",
    title: "The Second Sign: The Dragon",
    body: "Then another sign appeared in heaven: an enormous red dragon with seven heads and ten horns and seven crowns on its heads. Its tail swept a third of the stars out of the sky and flung them to the earth. The dragon stood in front of the woman who was about to give birth, so that it might devour her child the moment he was born. The seven heads and ten horns identify this dragon with the sea beast of Revelation 13:1 &mdash; both derive their authority from the same spiritual source. The sweeping of stars from heaven in one early reading referred to the fall of angelic beings (an interpretation drawn from Daniel 8:10 and 2 Enoch). The dragon&apos;s waiting to devour the child evokes Pharaoh&apos;s killing of Hebrew infant boys (Exodus 1) and Herod&apos;s massacre of the innocents (Matthew 2)."
  },
  {
    id: "v3",
    ref: "12:5-6",
    title: "The Birth, Ascension, and Wilderness Refuge",
    body: "She gave birth to a son, a male child, who &lsquo;will rule all the nations with an iron scepter.&rsquo; And her child was snatched up to God and to his throne. The woman fled into the wilderness to a place prepared for her by God, where she might be taken care of for 1,260 days. The &lsquo;iron scepter&rsquo; is Psalm 2:9, a coronation psalm for the Davidic king, here applied to the victorious Messiah. The &lsquo;snatching up&rsquo; (Greek: &lsquo;harpazo&rsquo;) is the same word used for the rapture in 1 Thessalonians 4:17 and Paul&apos;s being caught up to the third heaven in 2 Corinthians 12:2. The 1,260 days equals 42 months equals 3.5 years &mdash; a half-seven, derived from Daniel 7:25 and 12:7. It is the symbolic period of the church&apos;s tribulation and the beast&apos;s authority in Revelation."
  },
  {
    id: "v4",
    ref: "12:7-9",
    title: "War in Heaven: The Expulsion of the Dragon",
    body: "Then war broke out in heaven. Michael and his angels fought against the dragon, and the dragon and his angels fought back. But he was not strong enough, and they lost their place in heaven. The great dragon was hurled down &mdash; that ancient serpent called the devil, or Satan, who leads the whole world astray. He was hurled to the earth, and his angels with him. This is the most important identification in the chapter: the dragon is definitively named &mdash; the ancient serpent (Genesis 3), the devil (Greek: &lsquo;diabolos&rsquo;, slanderer), Satan (Hebrew: adversary). The expulsion from heaven is the consequence of the Lamb&apos;s victory at the cross and the child&apos;s enthronement. Jesus&apos;s words in Luke 10:18 &mdash; &ldquo;I saw Satan fall like lightning from heaven&rdquo; &mdash; anticipate this moment."
  },
  {
    id: "v5",
    ref: "12:10-12",
    title: "The Heavenly Proclamation and the Overcomers&apos; Victory",
    body: "Then I heard a loud voice in heaven say: &ldquo;Now have come the salvation and the power and the kingdom of our God, and the authority of his Messiah. For the accuser of our brothers and sisters, who accuses them before our God day and night, has been hurled down. They triumphed over him by the blood of the Lamb and by the word of their testimony; they did not love their lives so much as to shrink from death. Therefore rejoice, you heavens and you who dwell in them! But woe to the earth and the sea, because the devil has gone down to you! He is filled with fury, because he knows that his time is short.&rdquo; The joy of heaven at Satan&apos;s expulsion is the joy of the vindication of every falsely accused saint. The martyria (testimony/witness) of the saints is their verbal and lived confession of Jesus as Lord &mdash; the exact opposite of what the beast will demand."
  },
  {
    id: "v6",
    ref: "12:13-14",
    title: "The Pursuit and the Eagle&apos;s Wings",
    body: "When the dragon saw that he had been hurled to the earth, he pursued the woman who had given birth to the male child. The woman was given the two wings of a great eagle, so that she might fly to the place prepared for her in the wilderness, where she would be taken care of for a time, times and half a time, out of the serpent&apos;s reach. The eagle&apos;s wings are among the most beautiful images of divine protection in Scripture, directly echoing Exodus 19:4 and Deuteronomy 32:11 &mdash; God bearing Israel on eagles&apos; wings out of Egypt. &ldquo;A time, times and half a time&rdquo; is the same phrase from Daniel 7:25 &mdash; a time (1) + times (2) + half a time (0.5) = 3.5, the symbolic tribulation period. God has prepared a place for the persecuted church in the wilderness of this age."
  },
  {
    id: "v7",
    ref: "12:15-16",
    title: "The Flood from the Serpent&apos;s Mouth",
    body: "Then from his mouth the serpent spewed water like a river, to overtake the woman and sweep her away with the torrent. But the earth helped the woman by opening its mouth and swallowing the river that the dragon had spewed out of his mouth. The flood from the serpent&apos;s mouth has been interpreted as: (1) literal armies of Rome pursuing the early church; (2) slander, false accusation, and propaganda against Christians; (3) the cultural pressure and seductive power of Babylon. The earth swallowing the flood may reflect the Red Sea swallowing Egypt&apos;s armies in Exodus 15:12, or the earth swallowing Korah&apos;s rebel company in Numbers 16:32. God&apos;s providential care for the church is exercised through unexpected means &mdash; even creation itself serves to protect God&apos;s people."
  },
  {
    id: "v8",
    ref: "12:17",
    title: "War Against the Rest of Her Offspring",
    body: "Then the dragon was enraged at the woman and went off to wage war against the rest of her offspring &mdash; those who keep God&apos;s commands and hold fast their testimony about Jesus. The dragon&apos;s final move in this chapter is to turn to war against individual believers: &ldquo;the rest of her offspring.&rdquo; These are described with two marks: keeping God&apos;s commands (covenant faithfulness) and holding fast the testimony about Jesus (martyria, witness, confession of Christ as Lord). This sets up Revelation 13 &mdash; the dragon recruits the beast from the sea and the beast from the earth to wage his war. The chapter ends with the dragon &ldquo;standing on the shore of the sea&rdquo; (some manuscripts), positioning him to summon the first beast in the next chapter."
  },
];

const APPLICATION = [
  {
    id: "ap1",
    color: GREEN,
    title: "The Blood of the Lamb in the Courtroom of Heaven",
    body: "Satan is named &lsquo;the accuser&rsquo; (Greek: &lsquo;kategoreo&rsquo;) because his primary activity is to bring charges against God&apos;s people in the heavenly court. This is not merely metaphor &mdash; the structure of Job 1-2 and Zechariah 3:1-5 show the same pattern: Satan as the prosecuting attorney, bringing charges, challenging God to abandon his people. The blood of the Lamb is the answer to every accusation. When we confess our sin before God and trust in Christ&apos;s atonement, we are not hoping the Judge will be lenient &mdash; we are presenting the verdict that has already been handed down in our favor. The resurrection is God&apos;s &ldquo;not guilty&rdquo; verdict on Christ, and through union with Christ it is our verdict too. In spiritual battle, this is primary: not spiritual techniques, not formulas, not willpower &mdash; but resting in the completed work of the Lamb."
  },
  {
    id: "ap2",
    color: PURPLE,
    title: "The Word of Testimony as Spiritual Weapon",
    body: "The second weapon in Revelation 12:11 is &ldquo;the word of their testimony&rdquo; &mdash; the Greek &lsquo;martyria&rsquo;, from which we get &lsquo;martyr.&rsquo; In the first century, to hold fast one&apos;s testimony about Jesus as Lord was to refuse the rival confession that Caesar was Lord. The cost was economic exclusion, social ostracism, and sometimes death. The &lsquo;word of testimony&rsquo; for us today is the same: the public, verbal, lived confession that Jesus is Lord over every domain of life &mdash; not just private spirituality. When we speak the truth about Christ in our workplaces, neighborhoods, and families &mdash; especially at cost to ourselves &mdash; we are wielding one of the great weapons of spiritual warfare. The dragon is defeated not by silence but by speech: the speech of the gospel, spoken in the face of the world&apos;s pressures and the enemy&apos;s accusations."
  },
  {
    id: "ap3",
    color: TEAL,
    title: "Not Loving Our Lives Unto Death",
    body: "The third element of the overcomer&apos;s formula is the most demanding: &ldquo;they did not love their lives so much as to shrink from death.&rdquo; The Greek word for &lsquo;love&rsquo; here is &lsquo;agapao&rsquo; &mdash; the same word used for God&apos;s love for the world in John 3:16. The overcomers have re-ordered their love: they love the Lamb more than self-preservation. This is not a call to seek martyrdom or recklessness. It is a call to hold all earthly goods &mdash; reputation, security, comfort, even life itself &mdash; loosely, in open hands, subordinate to faithfulness to Christ. Jesus said the same in Luke 9:24: &ldquo;Whoever wants to save their life will lose it, but whoever loses their life for me will save it.&rdquo; Every act of faithfulness that costs us something &mdash; every refusal to compromise, every costly choice to follow Christ &mdash; is a small death that participates in the pattern of the Lamb."
  },
  {
    id: "ap4",
    color: GOLD,
    title: "The Wilderness Is a Place of Preparation, Not Punishment",
    body: "The woman is given two wings of a great eagle and flies to the wilderness &mdash; a place prepared for her by God. In Israel&apos;s memory, the wilderness was simultaneously the place of greatest testing and greatest intimacy with God. The 40 years in the desert were not evidence that God had abandoned Israel; they were the context in which God provided manna, water from the rock, the pillar of cloud and fire, and the law at Sinai. The Hosea 2:14 oracle promises that God will &ldquo;allure her, lead her into the desert, and speak tenderly to her.&rdquo; When God&apos;s people pass through difficult seasons &mdash; seasons of apparent exile from influence, cultural marginalization, economic pressure &mdash; these are not evidence of abandonment. They are the wilderness, where God is preparing his people and where the dragon cannot ultimately reach them. The 1,260 days have an end."
  },
  {
    id: "ap5",
    color: ROSE,
    title: "The Cosmic War Behind Every Spiritual Battle",
    body: "Revelation 12 reveals the backstory of all history. What we experience as political opposition, cultural pressure, personal temptation, and spiritual attack is not merely human &mdash; it has a cosmic dimension. Paul says in Ephesians 6:12 that &ldquo;our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world.&rdquo; Revelation 12 shows us who is behind those powers: the ancient serpent, the accuser, the deceiver of the whole world, the one who has been hurled from heaven and knows his time is short. The fury of the dragon in verse 12 &mdash; &ldquo;he is filled with fury, because he knows that his time is short&rdquo; &mdash; is the key to understanding the intensity of persecution and temptation in this age. The enemy fights with increasing fury precisely because he has already lost. This is not pessimism; it is gospel realism. The dragon is real; the Lamb has already won; our suffering is not in vain."
  },
];

export default function Revelation12GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>

        {/* Hero */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: `${ROSE}20`, border: `1px solid ${ROSE}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: ROSE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
            Revelation &mdash; Chapter 12
          </div>
          <h1 style={{ fontSize: "clamp(1.5rem,4vw,2.3rem)", fontWeight: 900, color: TEXT, marginBottom: "0.75rem", lineHeight: 1.25 }}>
            Revelation 12: The Woman, the Dragon, War in Heaven, and the Overcomer&apos;s Victory
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, maxWidth: 700, fontSize: "1rem" }}
            dangerouslySetInnerHTML={{ __html: "Revelation 12 is the cosmic backstory of the entire book &mdash; the great spiritual war behind human history. Three signs appear: the woman clothed with the sun (Israel/the church/Mary), the great red dragon (Satan), and the male child (Christ) caught up to God. Michael and his angels cast the dragon from heaven; the accuser is hurled down; the saints overcome by the blood of the Lamb and the word of their testimony. The dragon, enraged, goes to make war against the rest of her offspring." }}
          />
        </div>

        {/* At-a-glance cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "0.75rem", marginBottom: "2rem" }}>
          {[
            ["Book", "Revelation"],
            ["Chapter", "12"],
            ["Verses", "1-17"],
            ["Key Theme", "The Lamb Wins"],
            ["Key Verse", "Rev 12:11"],
            ["Greek Focus", "nikao (overcome)"],
          ].map(([k, v]) => (
            <div key={k} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "0.85rem 1rem" }}>
              <div style={{ color: MUTED, fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{k}</div>
              <div style={{ color: TEXT, fontWeight: 700, fontSize: "0.95rem" }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Context block */}
        <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ color: PURPLE, fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.75rem" }}>Chapter Context</div>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
            dangerouslySetInnerHTML={{ __html: "Revelation 12 stands at the structural center of the book. The first half of Revelation (chapters 1&ndash;11) opens with the seven churches, the throne vision, and the seven seals and trumpets. Chapter 12 begins the second half, providing the cosmic backstory that explains why the beast, the false prophet, and Babylon operate as they do. The chapter covers the entire sweep of redemptive history in a single vision: the birth of Christ, the war in heaven consequent to his ascension, Satan&apos;s expulsion, and the resulting persecution of the church. The Greek words central to this chapter: <em>drakon</em> (dragon), <em>diabolos</em> (devil/slanderer), <em>kategoreo</em> (accuse/prosecute), <em>nikao</em> (overcome/conquer), and <em>martyria</em> (testimony/witness). Three symbolic periods of time, all referring to the same era: 1,260 days, 42 months, and &ldquo;a time, times and half a time&rdquo; &mdash; all equal to 3.5 years, derived from Daniel 7:25." }}
          />
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActiveTab(t)}
              style={{
                padding: "0.55rem 1.25rem",
                borderRadius: 20,
                border: `1px solid ${activeTab === t ? PURPLE : BORDER}`,
                background: activeTab === t ? `${PURPLE}22` : "transparent",
                color: activeTab === t ? PURPLE : MUTED,
                fontWeight: activeTab === t ? 700 : 500,
                cursor: "pointer",
                fontSize: "0.875rem",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "Overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.25rem", marginBottom: "1rem" }}>The Three Signs of Revelation 12</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Revelation 12 opens with two &ldquo;signs&rdquo; (Greek: <em>semeia</em>) appearing in heaven. Signs in Revelation are symbolic visions that point beyond themselves to deeper realities. The first sign is the woman clothed with the sun &mdash; a figure who represents, in overlapping layers, Israel, Mary, and the church. The second sign is the great red dragon with seven heads and ten horns. These two signs set up the drama: the dragon seeks to destroy the child the woman is carrying." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1rem" }}>
                {[
                  { color: GOLD, label: "First Sign", val: "The Woman (vv. 1-2)", desc: "Clothed with the sun, moon under her feet, crown of 12 stars &mdash; Israel/Mary/Church in labor" },
                  { color: ROSE, label: "Second Sign", val: "The Dragon (vv. 3-4)", desc: "Great red dragon with 7 heads, 10 horns, sweeping 1/3 of stars &mdash; Satan, the ancient serpent" },
                  { color: PURPLE, label: "Third Sign", val: "The Male Child (v. 5)", desc: "The Messiah caught up to God &mdash; the incarnation, ascension, and enthronement in one image" },
                ].map(c => (
                  <div key={c.label} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                    <div style={{ color: c.color, fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{c.label}</div>
                    <div style={{ color: TEXT, fontWeight: 700, marginBottom: 6 }}>{c.val}</div>
                    <div style={{ color: MUTED, fontSize: "0.82rem", lineHeight: 1.6 }}>{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>Key Symbols Explained</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { sym: "The Woman", meaning: "Israel (12 stars = 12 tribes), Mary (literal mother of the Messiah), and the Church (the community that bears Christ into the world). All three layers are present simultaneously in this rich apocalyptic symbol." },
                  { sym: "The Dragon", meaning: "Explicitly identified in v. 9 as &ldquo;that ancient serpent called the devil, or Satan.&rdquo; The seven heads and ten horns connect him to the political powers of the earth in Revelation 13 &mdash; he is the spiritual power behind all empire hostile to God." },
                  { sym: "The Male Child", meaning: "Christ the Messiah, the fulfillment of Psalm 2:9 who will rule all nations with an iron scepter. His catching up to God&apos;s throne is the ascension and enthronement, the source of Satan&apos;s expulsion." },
                  { sym: "Eagle Wings", meaning: "Exodus 19:4 &mdash; God bore Israel on eagles&apos; wings through the wilderness. The church in every age of persecution is the new Exodus community, protected by God in the desert of this age." },
                  { sym: "1,260 Days", meaning: "Equal to 42 months and &ldquo;a time, times and half a time&rdquo; &mdash; three and a half years, the symbolic period of the church&apos;s tribulation and the beast&apos;s authority, drawn from Daniel 7:25 and 12:7." },
                  { sym: "The Flood", meaning: "Possibly slander, propaganda, or armies &mdash; the dragon&apos;s attempt to overwhelm and destroy the church. The earth swallowing the flood echoes the Red Sea swallowing Egypt&apos;s armies." },
                ].map(s => (
                  <div key={s.sym} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ background: `${TEAL}20`, border: `1px solid ${TEAL}44`, borderRadius: 8, padding: "2px 10px", fontSize: "0.75rem", color: TEAL, fontWeight: 700, whiteSpace: "nowrap", marginTop: 2 }}>{s.sym}</span>
                    <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.meaning }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>Key Greek Words</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "0.75rem" }}>
                {[
                  { word: "drakon", meaning: "dragon &mdash; a monstrous serpent, used in the LXX for Leviathan and other chaos monsters" },
                  { word: "diabolos", meaning: "devil/slanderer &mdash; one who throws accusations; the false accuser" },
                  { word: "kategoreo", meaning: "to accuse, prosecute, bring charges &mdash; Satan&apos;s courtroom activity" },
                  { word: "nikao", meaning: "to overcome, conquer, prevail &mdash; the defining word for faithful saints in Revelation" },
                  { word: "martyria", meaning: "testimony, witness &mdash; the verbal confession of Christ as Lord, regardless of cost" },
                ].map(g => (
                  <div key={g.word} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "0.85rem" }}>
                    <div style={{ color: GREEN, fontWeight: 800, fontStyle: "italic", fontSize: "1rem", marginBottom: 4 }}>{g.word}</div>
                    <div style={{ color: MUTED, fontSize: "0.82rem", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: g.meaning }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>Video Resources</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((item) => (
                  <div key={item.videoId} style={{ background: BG, borderRadius: 12, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "0.85rem 1rem" }}>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: "0.9rem" }}>{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "Key Themes" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem", marginBottom: "0.5rem" }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.75rem" }}>Six Major Themes in Revelation 12</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "Revelation 12 is a chapter of extraordinary theological density. Every image carries multiple layers of meaning, drawn from the Hebrew Scriptures and filtered through the lens of Christ&apos;s death, resurrection, and ascension. Below are the six major themes, each traceable through the chapter&apos;s seventeen verses and each with direct application to the Christian life in any era of history." }}
              />
            </div>

            {KEY_THEMES.map((theme) => (
              <div key={theme.id} style={{ background: CARD, border: `1px solid ${openTheme === theme.id ? theme.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpenTheme(openTheme === theme.id ? null : theme.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "1.1rem 1.3rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <span style={{ color: theme.color, fontWeight: 700, fontSize: "0.95rem", paddingRight: "1rem" }}>{theme.title}</span>
                  <span style={{ color: theme.color, fontSize: "1.2rem", flexShrink: 0 }}>{openTheme === theme.id ? "-" : "+"}</span>
                </button>
                {openTheme === theme.id && (
                  <div style={{ padding: "0 1.3rem 1.2rem", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: "1rem 0 0", fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "Verse by Verse" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem", marginBottom: "0.5rem" }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.75rem" }}>Revelation 12:1-17 &mdash; Verse by Verse</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "A detailed walk through all seventeen verses of Revelation 12, examining the background, the imagery, and the theological significance of each section. Click each section to expand. For cross-references, hover over the verse references to see the text." }}
              />
            </div>

            {VERSE_BY_VERSE.map((item) => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${openVerse === item.id ? TEAL : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpenVerse(openVerse === item.id ? null : item.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "1.1rem 1.3rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ background: `${TEAL}20`, border: `1px solid ${TEAL}44`, borderRadius: 8, padding: "2px 10px", fontSize: "0.75rem", color: TEAL, fontWeight: 700, whiteSpace: "nowrap" }}>
                      <VerseRef reference={`Revelation ${item.ref}`}>{item.ref}</VerseRef>
                    </span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: "0.9rem" }}>{item.title}</span>
                  </div>
                  <span style={{ color: TEAL, fontSize: "1.2rem", flexShrink: 0, marginLeft: "1rem" }}>{openVerse === item.id ? "-" : "+"}</span>
                </button>
                {openVerse === item.id && (
                  <div style={{ padding: "0 1.3rem 1.2rem", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: "1rem 0 0", fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${GREEN}`, padding: "1.5rem", marginTop: "0.5rem" }}>
              <div style={{ color: GREEN, fontWeight: 800, marginBottom: "0.75rem", fontSize: "0.95rem" }}>The Overcomer&apos;s Formula &mdash; Revelation 12:11</div>
              <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 1rem", fontStyle: "italic", color: TEXT, lineHeight: 1.8, fontSize: "1rem" }}>
                &ldquo;They triumphed over him by the blood of the Lamb and by the word of their testimony; they did not love their lives so much as to shrink from death.&rdquo;
              </blockquote>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.875rem" }}
                dangerouslySetInnerHTML={{ __html: "Three elements: (1) the blood of the Lamb &mdash; the objective, completed atonement of Christ that answers every accusation; (2) the word of their testimony (<em>martyria</em>) &mdash; the public, verbal confession of Christ as Lord; (3) not loving their lives unto death &mdash; the willingness to hold life in open hands, subordinate to faithfulness. These three form the complete armor of the overcomer in Revelation&apos;s spiritual warfare." }}
              />
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "Application" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem", marginBottom: "0.5rem" }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.75rem" }}>Application: How Does This Apply Today?</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "Revelation 12 was written to believers facing real imperial persecution &mdash; economic exclusion, social ostracism, imprisonment, and death for their confession that Jesus, not Caesar, is Lord. The chapter&apos;s theology speaks with equal force to believers in every subsequent age, wherever the church faces opposition. Below are five areas of direct application from the text." }}
              />
            </div>

            {APPLICATION.map((item) => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${openApp === item.id ? item.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpenApp(openApp === item.id ? null : item.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "1.1rem 1.3rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <span style={{ color: item.color, fontWeight: 700, fontSize: "0.95rem", paddingRight: "1rem" }}>{item.title}</span>
                  <span style={{ color: item.color, fontSize: "1.2rem", flexShrink: 0 }}>{openApp === item.id ? "-" : "+"}</span>
                </button>
                {openApp === item.id && (
                  <div style={{ padding: "0 1.3rem 1.2rem", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: "1rem 0 0", fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${PURPLE}`, padding: "1.5rem", marginTop: "0.5rem" }}>
              <div style={{ color: PURPLE, fontWeight: 800, marginBottom: "0.75rem" }}>Reflection Questions</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "In what areas of your life does the enemy most often function as &ldquo;the accuser&rdquo; &mdash; bringing charges against you before your own conscience? How does the blood of the Lamb answer those accusations?",
                  "What would it mean for you, in your specific context, to &ldquo;hold fast the word of your testimony&rdquo; at cost to yourself? What confession of Christ as Lord is most costly for you to make publicly?",
                  "Are there &ldquo;wilderness seasons&rdquo; in your own story that you can now recognize as places where God was preparing and protecting you, even when it felt like abandonment?",
                  "The dragon fights with fury &ldquo;because he knows that his time is short.&rdquo; How does knowing that the enemy is a defeated foe fighting borrowed time change how you engage spiritual opposition?",
                ].map((q, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                    <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", marginRight: 8 }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${ROSE}`, padding: "1.5rem", marginTop: "0.5rem" }}>
              <div style={{ color: ROSE, fontWeight: 800, marginBottom: "0.75rem" }}>The Overcomer&apos;s Prayer</div>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "Lord Jesus Christ, Lamb of God who takes away the sin of the world &mdash; I rest in your blood as the answer to every accusation that the ancient accuser brings against me. I am not innocent on my own; I am declared innocent in you. Strengthen me to hold fast the word of my testimony, to confess you as Lord in every sphere of my life, and to hold my own life in open hands, trusting that whoever loses their life for your sake will save it. When the dragon rages, remind me that his fury is the fury of a defeated enemy who knows his time is short. Lead me through the wilderness on eagles&apos; wings. Come, Lord Jesus. Amen." }}
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
