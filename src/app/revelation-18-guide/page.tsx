"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const ROSE = "#E11D48";
const PURPLE_LIGHT = "#a78bfa";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

const videoItems = [
  { id: "qL5mTxRnW9v", title: "Revelation 18 - The Fall of Babylon Explained" },
  { id: "bN2pKsVhD7e", title: "Come Out of Her My People - Revelation 18 Study" },
  { id: "wR4cGzQmJ3k", title: "Babylon's Judgment and the Saints' Rejoicing Revelation 18" },
  { id: "hY7tFnPxS6d", title: "The Lament of Kings and Merchants Revelation 18" },
];

const keyThemes = [
  {
    id: "theme1",
    title: "Divine Judgment on Human Pride and Commerce",
    color: GOLD,
    body: "Revelation 18 is an extended meditation on the judgment of human civilization at its height. Babylon does not represent poverty or weakness &mdash; she represents the pinnacle of human achievement apart from God: luxury, trade, culture, power, and the arts. The cargo list in verses 12-13 is staggering in its breadth: gold, silver, jewels, pearls, fine linen, purple cloth, silk, scarlet cloth, citrus wood, ivory, costly wood, bronze, iron, marble, cinnamon, spice, incense, myrrh, frankincense, wine, oil, fine flour, wheat, cattle, sheep, horses, chariots &mdash; and last, most shockingly: &quot;slaves, that is, human souls.&quot; The list culminates in the commodification of persons. When civilization reaches its apex, it is also trafficking in human souls. And all of it falls in one hour. The most developed, most glorious, most productive civilization humanity can build is temporary when it is built apart from God.",
  },
  {
    id: "theme2",
    title: "The Call to Separate: Come Out of Her",
    color: ROSE,
    body: "Verse 4 contains one of the most urgent divine imperatives in all of Scripture: &quot;Come out of her, my people, lest you take part in her sins, lest you share in her plagues.&quot; The call is addressed to God&apos;s people who are apparently still inside Babylon &mdash; not physically outside but spiritually entangled. The danger is not merely contamination from outside but participation: &quot;lest you take part in her sins.&quot; One can live inside Babylon&apos;s systems, consume her products, benefit from her economy &mdash; and in doing so become a participant in what God has judged. The call is not necessarily to physical relocation but to spiritual and moral disengagement from the values, allegiances, and dependencies that make Babylon what she is. The church in every age must hear this call freshly and ask: In what ways have we come to depend on, celebrate, and participate in what God has marked for judgment?",
  },
  {
    id: "theme3",
    title: "The Three Laments",
    color: TEAL,
    body: "The chapter&apos;s emotional center is a triple lament spoken from a safe distance. First the kings of the earth (vv.9-10): they weep and wail when they see the smoke of Babylon&apos;s burning, but they &quot;stand far off, in fear of her torment.&quot; Their grief is self-protective. Second the merchants of the earth (vv.11-17a): they weep and mourn for her because no one buys their cargo anymore. Their grief is explicitly economic: they mourn the end of the market. Third the seafarers (vv.17b-19): those who grew rich from her sea trade &quot;threw dust on their heads and cried out, weeping and mourning.&quot; All three groups share a common characteristic: they mourn from a distance. They do not enter the flames to rescue what they loved. They watch, they weep, and they mourn their own loss &mdash; not Babylon&apos;s sin. Their tears are for the goods they can no longer trade, the market that no longer functions, the city that can no longer buy. This is grief without repentance: sorrow at consequence, not at cause.",
  },
  {
    id: "theme4",
    title: "Heaven's Rejoicing and Earth's Mourning",
    color: PURPLE,
    body: "The chapter sets up a stark contrast between heaven&apos;s perspective and earth&apos;s perspective. Earth mourns: kings, merchants, sailors &mdash; all who grew rich from Babylon &mdash; lament her fall with genuine anguish. Their grief is real; they have lost something real. But then comes verse 20: &quot;Rejoice over her, O heaven, and you saints and apostles and prophets, for God has given judgment for you against her!&quot; Heaven rejoices at exactly what earth mourns. The same event &mdash; the fall of Babylon &mdash; is simultaneously a catastrophe and a victory, depending entirely on one&apos;s allegiance. This contrast is not a call to triumphalism or to joy at human suffering. It is a revelation of perspective: when you see with heaven&apos;s eyes, what looks like loss is often justice, and what looks like victory is often the exposure of what was always built on sand. The saints who suffered under Babylon&apos;s dominance are vindicated. God has judged their cause.",
  },
  {
    id: "theme5",
    title: "The Finality and Completeness of Judgment",
    color: ROSE,
    body: "Verse 21 contains one of the most dramatic images in Revelation: a mighty angel picks up a great millstone and throws it into the sea, declaring: &quot;So will Babylon the great city be thrown down with violence, and will be found no more.&quot; The millstone image comes from Jeremiah 51:63-64: the prophet tied his scroll to a stone and threw it into the Euphrates, saying &quot;thus shall Babylon sink.&quot; John amplifies the image: this is not gentle sinking but violent, total, final destruction. Verses 22-23 then catalogue everything that will go silent in Babylon: the sound of harpists and musicians and flute players and trumpeters, the sound of the millstone grinding, the light of the lamp, the voice of bride and groom. All of human culture&apos;s beauty &mdash; music, food-making, light, marriage &mdash; will be silenced in Babylon. The judgment is total not because these things are evil in themselves but because they have been enslaved to Babylon&apos;s idolatrous system. When Babylon falls, she takes down with her everything she has co-opted.",
  },
];

const verses = [
  {
    ref: "18:1-3",
    color: GOLD,
    title: "The Angel's Announcement of Babylon's Fall",
    body: "Another angel comes down from heaven with great authority, and the earth is illuminated by his glory &mdash; an image of divine majesty that signals the weight of what follows. His announcement is given in the past tense, as if already accomplished: &quot;Fallen, fallen is Babylon the great!&quot; The doubling (&quot;fallen, fallen&quot;) echoes Isaiah 21:9, where a watchman sees two riders approaching and announces the fall of Babylon. The repetition functions as prophetic certainty &mdash; the declaration is so sure it can be spoken as accomplished. The angel describes what Babylon has become: a dwelling place for demons, a haunt for every unclean spirit, a haunt for every unclean bird, a haunt for every unclean and detestable beast. The great city that was the center of civilization is now a wasteland. The reason for the judgment is stated in verse 3: all nations have drunk the wine of her passionate immorality, the kings of the earth have committed immorality with her, and the merchants of the earth have grown rich from the power of her luxurious living.",
  },
  {
    ref: "18:4-8",
    color: PURPLE,
    title: "Come Out of Her My People",
    body: "Then another voice from heaven &mdash; possibly God himself or Christ &mdash; addresses God&apos;s people directly: &quot;Come out of her, my people, lest you take part in her sins, lest you share in her plagues; for her sins are heaped high as heaven, and God has remembered her iniquities.&quot; The image of sins &quot;heaped high as heaven&quot; is striking: Babel tried to build a tower to heaven (Gen 11); Babylon&apos;s sins have reached heaven through a different kind of accumulation. The voice continues with a command of double recompense: &quot;Pay her back as she herself has paid back others, and repay her double for her deeds; mix a double portion for her in the cup she mixed.&quot; This is not personal revenge but divine justice: she measured out suffering for others, and God will measure out judgment proportionate to her deeds. The judgment falls with speed: &quot;in a single day her plagues will come, pestilence and mourning and famine, and she will be burned up with fire.&quot; For a civilization that seemed eternal and invulnerable, one day is enough. God who judges her is strong.",
  },
  {
    ref: "18:9-10",
    color: ROSE,
    title: "The Kings' Lament",
    body: "The kings of the earth who committed sexual immorality and lived in luxury with her will weep and wail when they see the smoke of her burning. Their response is to &quot;stand far off, in fear of her torment.&quot; The phrase &quot;stand far off&quot; is significant: even now, at the moment of Babylon&apos;s judgment, those who were her intimate partners do not draw near. They watch from a safe distance, not to mourn her genuinely but to protect themselves from contagion with her judgment. Their lament is vivid: &quot;Alas, alas, you great city, you mighty city, Babylon! For in a single hour your judgment has come.&quot; The phrase &quot;in a single hour&quot; occurs three times in this chapter (vv.10, 17, 19) &mdash; a hammering refrain of the shocking speed and totality of the judgment. The phrase &quot;alas, alas&quot; in Greek is &quot;ouai, ouai&quot; &mdash; the same woe-cry that the prophets used for judgment announcements. The kings are quoting prophetic language of doom about a city they loved.",
  },
  {
    ref: "18:11-17a",
    color: TEAL,
    title: "The Merchants' Lament and the Cargo List",
    body: "The merchants of the earth weep and mourn for Babylon because no one buys their cargo anymore. What follows is the remarkable cargo list of verses 12-13, the longest list of trade goods in the New Testament: gold, silver, jewels, pearls, fine linen, purple, silk, scarlet cloth, all kinds of citrus wood, all articles of ivory, all articles of costly wood, bronze, iron, marble, cinnamon, spice, incense, myrrh, frankincense, wine, oil, fine flour, wheat, cattle, sheep, horses, chariots &mdash; and slaves, that is, human souls. The list moves from the most valuable luxury goods down to food staples and finally to people &mdash; listed last, as a commodity among commodities. The phrase &quot;human souls&quot; (psychas anthropon) is theologically pointed: Babylon&apos;s economy ends in the commodification of the most precious thing in existence. The merchants mourn: &quot;the fruit your soul longed for has gone from you, and all your delicacies and your splendors are lost to you, never to be found again!&quot; They throw dust on the ground to mourn the cargo, but they were already throwing human souls on the trading tables.",
  },
  {
    ref: "18:17b-19",
    color: GREEN,
    title: "The Seafarers' Lament",
    body: "All shipmasters and seafarers, sailors and all whose trade is on the sea, stood far off and cried out as they saw the smoke of Babylon&apos;s burning. Their question is elegiac and final: &quot;What city was like the great city?&quot; The rhetorical question contains its own answer: no city has ever been like this one. Her scale, her wealth, her cultural power, her commercial reach were unprecedented. The seafarers &quot;threw dust on their heads and cried out, weeping and mourning.&quot; Throwing dust on the head is a traditional mourning gesture (Job 2:12; Lam 2:10; Ezek 27:30 &mdash; the same gesture used in the lament over Tyre). And Ezekiel 27 is the direct background here: John&apos;s lament over Babylon draws heavily from Ezekiel&apos;s lament over Tyre, another great commercial city destroyed. The seafarers&apos; woe echoes the merchants&apos;: &quot;Alas, alas, for the great city where all who had ships at sea grew rich by her wealth! For in a single hour she has been laid waste.&quot; Three groups, three laments, one refrain: in a single hour.",
  },
  {
    ref: "18:20",
    color: PURPLE_LIGHT,
    title: "The Call to Heaven to Rejoice",
    body: "After three laments from earth, the voice speaks to heaven: &quot;Rejoice over her, O heaven, and you saints and apostles and prophets, for God has given judgment for you against her!&quot; The call to rejoice is not an invitation to gloat at human suffering but a summons to recognize and celebrate divine justice. Three groups are named: saints, apostles, prophets &mdash; the whole people of God across the ages, from the earliest Hebrew prophets who announced Babylon&apos;s doom to the first-century apostles and martyrs who suffered under her Roman embodiment. The phrase &quot;God has given judgment for you against her&quot; uses legal language: God has judged in your favor. The martyrs who cried out under the fifth seal &mdash; &quot;How long, O Lord?&quot; (Rev 6:10) &mdash; receive their answer here. The long patience of God has reached its end point. The court has ruled. Heaven and the whole communion of saints across history have reason to rejoice.",
  },
  {
    ref: "18:21-24",
    color: GOLD,
    title: "The Millstone and the Final Silence",
    body: "A mighty angel took up a stone like a great millstone and threw it into the sea, saying: &quot;So will Babylon the great city be thrown down with violence, and will be found no more at all.&quot; The millstone image echoes both Jeremiah 51:63-64 (the prophet&apos;s stone thrown into the Euphrates as a sign of Babylon&apos;s sinking) and Jesus&apos; words in Matthew 18:6 about the millstone and the sea as images of irreversible judgment. What follows in verses 22-23 is a remarkable inventory of silence: the sound of harpists and musicians and flute players and trumpeters will be heard in you no more. A craftsman of any craft will be found in you no more. The sound of the mill will be heard in you no more. The light of a lamp will shine in you no more. The voice of bridegroom and bride will be heard in you no more. Music, craft, food-making, light, marriage &mdash; the most beautiful human experiences &mdash; silenced forever in Babylon. Why? Because your merchants were the great ones of the earth, because all nations were deceived by your sorcery, and because in you was found the blood of prophets and of saints, and of all who have been slain on earth (v.24). Babylon falls under the weight of accumulated blood: every martyr, every prophet, every faithful one whose death her system required.",
  },
];

const applicationItems = [
  {
    color: GOLD,
    title: "Examine What Babylons You Invest In Emotionally",
    body: "The three laments of kings, merchants, and sailors reveal a diagnostic test: what would make you weep if it were taken away tomorrow? The kings weep over political power and prestige. The merchants weep over economic prosperity and commercial access. The sailors weep over their livelihood and their sense of wonder at what great civilization can build. These are not evil things in themselves &mdash; but when their loss would devastate us more than the loss of God&apos;s approval, we have invested ourselves in Babylon. The chapter invites honest self-examination: In what have I placed my emotional security? What would falling Babylon take from me? What I mourn reveals what I love.",
  },
  {
    color: TEAL,
    title: "Hold Material Prosperity Loosely",
    body: "The cargo list of verses 12-13 is an inventory of human civilization&apos;s finest achievements in commerce &mdash; and it ends in human souls as a commodity. The progression is not accidental: unconstrained material prosperity tends toward the instrumentalization of people. The call to hold prosperity loosely is not a call to poverty but to freedom: to possess things without being possessed by them, to benefit from commerce without being enslaved to its logic, to enjoy wealth without identifying ourselves with it. &quot;In a single hour&quot; all of it can go. The Christian who holds prosperity loosely will not be devastated when Babylon falls, because their treasure is not there.",
  },
  {
    color: ROSE,
    title: "Heed God's Call to Come Out",
    body: "The imperative of verse 4 is not passive: &quot;Come out of her, my people.&quot; This is active, volitional, costly separation from the values and allegiances of systems God has judged. In practical terms, coming out means asking: Am I allowing the logic of the market, the demands of political allegiance, or the pressures of cultural status to override the commands of Christ? Am I making compromises in ethics, witness, or character in order to remain comfortable inside Babylon&apos;s economy? Coming out does not require leaving society &mdash; but it requires refusing to share in Babylon&apos;s sins even while living inside her walls. The saints John addressed were in the empire; what they were called to leave was the empire&apos;s claim on their hearts.",
  },
  {
    color: PURPLE,
    title: "Do Not Mourn What God Judges",
    body: "One of the most subtle temptations the church faces is to mourn alongside the kings and merchants when the things God is judging are taken away. When corrupt systems fall, when the idols of culture lose their power, when Babylonian economies collapse &mdash; the world mourns. The church is tempted to mourn with the world because she has shared in Babylon&apos;s prosperity and comfort. But Revelation 18 addresses God&apos;s people directly: &quot;Rejoice over her, O heaven, and you saints.&quot; The capacity to distinguish between genuine grief over human suffering and inappropriate mourning over the loss of Babylonian systems requires a prior clarity about what is truly good and what merely appeared good. Heaven&apos;s perspective &mdash; that Babylon&apos;s fall is justice &mdash; must become the church&apos;s perspective.",
  },
  {
    color: GREEN,
    title: "Rejoice in God's Justice",
    body: "Heaven&apos;s command to rejoice in verse 20 is not an invitation to cold-hearted satisfaction at destruction. It is an invitation to trust that God&apos;s justice is good &mdash; that the long silence of heaven while the saints suffered was not indifference but patience, and that when God acts in judgment he is setting right what was wrong. The martyrs under the altar who cried &quot;How long, O Lord?&quot; (Rev 6:10) are answered in chapter 18. Their blood, found in Babylon (v.24), is avenged. The rejoicing of heaven is the rejoicing of those who have waited for God and seen him act. It is the joy of vindication &mdash; not over the destruction of enemies but over the establishment of righteousness.",
  },
  {
    color: PURPLE_LIGHT,
    title: "Live With Eternity in View",
    body: "Everything Revelation 18 lists as falling &mdash; music, craft, commerce, food, light, marriage &mdash; will be present in the new creation (Rev 21-22) in purified, eternal form. The music of Babylon silences; the new song of the redeemed continues. The crafts of Babylon end; the beauty of the new Jerusalem surpasses them. The point is not that beauty and culture and commerce are wrong but that when organized around Babylon rather than the Lamb, they are temporary and doomed. The Christian who lives with eternity in view does not despise the good things of this age but holds them loosely, knowing that what is truly good in them will be redeemed and what belongs to Babylon will pass away.",
  },
  {
    color: GOLD,
    title: "Invest in What Survives Babylon's Fall",
    body: "If everything Babylon built falls in one hour, the question becomes: what does not fall? The answer is clear in Revelation&apos;s larger narrative: souls (which Babylon treated as cargo), righteousness, faithfulness, the kingdom of God. Paul asked the same question in 1 Corinthians 3:12-15: is your life&apos;s work built of gold, silver, and precious stones that survive the fire &mdash; or wood, hay, and straw that are consumed? Revelation 18 provides the concrete list of what will burn: the luxury goods, the commercial empire, the cultural achievement organized around human pride and power. What survives is the testimony of the saints, the deeds of righteousness, and the names written in the Book of Life. Invest there.",
  },
];

export default function Revelation18GuidePage() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 5rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: `${GOLD}22`, border: `1px solid ${GOLD}55`, borderRadius: 20, padding: "4px 16px", fontSize: 11, color: GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>
            Revelation 18 &mdash; Bible Study Guide
          </div>
          <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, color: TEXT, margin: "0 0 12px" }}>
            The Fall of Babylon the Great
          </h1>
          <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", lineHeight: 1.8, fontSize: "1rem" }}>
            A verse-by-verse study of Revelation 18 &mdash; the dramatic announcement of Babylon&apos;s fall, the call to come out, the three laments of kings and merchants and sailors, heaven&apos;s rejoicing, and the millstone thrown into the sea.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginTop: 28, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
            {[["Passage", "Revelation 18"], ["Verses", "24"], ["Theme", "Babylon Falls"], ["Key Phrase", "In One Hour"], ["Call", "Come Out of Her"]].map(([k, v]) => (
              <div key={k} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 14px" }}>
                <div style={{ color: MUTED, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                <div style={{ color: TEXT, fontWeight: 700, fontSize: 13 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1.2rem" }}>Video Resources</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "1.5rem" }}>
            {videoItems.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.id} title={v.title} />
                <div style={{ padding: "1rem" }}>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem" }}>{v.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: `1px solid ${BORDER}`, marginBottom: "2rem", overflowX: "auto" }}>
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: tab === i ? "2px solid #6B4FBB" : "2px solid transparent", cursor: "pointer", color: tab === i ? PURPLE_LIGHT : MUTED, fontWeight: tab === i ? 700 : 400, fontSize: "0.95rem", whiteSpace: "nowrap" }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tab 0: Overview */}
        {tab === 0 && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "2rem", marginBottom: "1.5rem" }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>Overview of Revelation 18</h2>
              <p dangerouslySetInnerHTML={{ __html: "Revelation 18 is one of the most dramatically sustained chapters in all of Scripture &mdash; a lengthy lament-and-triumph over the fall of Babylon the Great. It is shaped by the Old Testament prophetic tradition of lament over fallen cities, especially Ezekiel&apos;s lament over Tyre (Ezek 27) and Jeremiah&apos;s oracle against Babylon (Jer 50-51). What John does is take those ancient templates and fill them with the full weight of first-century Rome &mdash; and, by extension, every civilization that has organized itself around wealth, power, and human pride apart from God." }} style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The chapter opens with a second angel descending from heaven with great authority, his glory illuminating the earth. He announces Babylon&apos;s fall in prophetic past tense: &quot;Fallen, fallen is Babylon the great!&quot; (v.2) &mdash; the doubling of the declaration signaling absolute certainty. Then a voice from heaven speaks directly to God&apos;s people: &quot;Come out of her, my people&quot; (v.4). The warning is urgent: her sins have reached heaven and God is about to repay double." }} style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "What follows is the triple lament: kings (vv.9-10), merchants (vv.11-17a), and seafarers (vv.17b-19) &mdash; each mourning from a safe distance, each grieving their own loss rather than Babylon&apos;s sin. The refrain hammers three times: &quot;in a single hour.&quot; Then comes the pivot: &quot;Rejoice over her, O heaven, and you saints and apostles and prophets&quot; (v.20). Heaven&apos;s verdict is the opposite of earth&apos;s. A mighty angel then throws a great millstone into the sea (v.21): &quot;So will Babylon the great city be thrown down with violence, and will be found no more.&quot; The chapter closes listing everything that will go silent in Babylon forever &mdash; music, craft, food, light, marriage &mdash; and the reason: her merchants were the great ones of the earth, all nations were deceived by her sorcery, and in her was found the blood of prophets and saints." }} style={{ color: MUTED, lineHeight: 1.8 }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "2rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE_LIGHT, fontWeight: 800, fontSize: "1.1rem", marginBottom: "1rem" }}>Structure of Revelation 18</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  ["vv.1-3", GOLD, "The Angel Announces Babylon's Fall"],
                  ["vv.4-8", ROSE, "The Call to Come Out and the Judgment Described"],
                  ["vv.9-10", TEAL, "The Kings Lament from Afar"],
                  ["vv.11-17a", PURPLE, "The Merchants Weep Over the Cargo"],
                  ["vv.17b-19", GREEN, "The Seafarers Mourn the Great City"],
                  ["v.20", PURPLE_LIGHT, "Heaven Is Called to Rejoice"],
                  ["vv.21-24", GOLD, "The Millstone and the Final Silence"],
                ].map(([ref, color, label]) => (
                  <div key={ref as string} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ background: `${color as string}22`, border: `1px solid ${color as string}44`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: color as string, fontWeight: 700, whiteSpace: "nowrap" }}>{ref}</span>
                    <span style={{ color: MUTED, lineHeight: 1.6, fontSize: "0.9rem", paddingTop: 2 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "2rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: "1.1rem", marginBottom: "1rem" }}>Old Testament Background</h3>
              <p dangerouslySetInnerHTML={{ __html: "Revelation 18 is one of the most allusion-dense chapters in the New Testament. The primary Old Testament sources are:" }} style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  ["Jeremiah 50-51", "The great oracle against Babylon &mdash; including the call to flee from her (Jer 51:6, 45), the description of her sins reaching heaven (Jer 51:9), and the stone thrown into the Euphrates (Jer 51:63-64)."],
                  ["Ezekiel 26-27", "The lament over Tyre, the great commercial city &mdash; including the cargo lists (Ezek 27:12-24), the merchants and sailors mourning from afar (Ezek 27:29-36), and the lamentation pattern John employs."],
                  ["Isaiah 47", "The taunt against Babylon the virgin daughter: her luxurious living, her sorceries, her claim that no one sees her &mdash; all echoed in Revelation 18."],
                  ["Isaiah 21:9", "The watchman&apos;s announcement: &quot;Fallen, fallen is Babylon&quot; &mdash; quoted verbatim in Rev 18:2."],
                ].map(([ref, desc]) => (
                  <div key={ref as string} style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: "1rem" }}>
                    <div style={{ color: TEAL, fontWeight: 700, fontSize: "0.85rem", marginBottom: 4 }}>{ref}</div>
                    <p dangerouslySetInnerHTML={{ __html: desc as string }} style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.9rem" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 1: Key Themes */}
        {tab === 1 && (
          <div>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Key Themes in Revelation 18</h2>
            {keyThemes.map((item) => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${open === item.id ? item.color : BORDER}`, borderRadius: 14, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "1.2rem 1.5rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <span style={{ color: item.color, fontWeight: 700, fontSize: "1rem" }}>{item.title}</span>
                  <span style={{ color: item.color, fontSize: "1.3rem", fontWeight: 700, lineHeight: 1 }}>{open === item.id ? "-" : "+"}</span>
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 1.5rem 1.4rem", borderTop: `1px solid ${BORDER}` }}>
                    <p dangerouslySetInnerHTML={{ __html: item.body }} style={{ color: MUTED, lineHeight: 1.8, margin: "1rem 0 0", fontSize: "0.95rem" }} />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${ROSE}`, borderRadius: 14, padding: "1.5rem", marginTop: "1.5rem" }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: "1rem", marginBottom: "0.75rem" }}>The Cargo List and the Commodification of Persons</h3>
              <p dangerouslySetInnerHTML={{ __html: "Perhaps the most haunting detail in all of Revelation 18 is the last item on the merchants&apos; cargo list: &quot;slaves, that is, human souls.&quot; The Greek is &quot;somata kai psychas anthropon&quot; &mdash; literally &quot;bodies and souls of human beings.&quot; This is not accidental placement. John has arranged the list from the most valuable luxury goods (gold, silver, jewels) down through raw materials and food staples to, at the very bottom, human persons traded as cargo. The progression is a theological statement: when commerce is organized around pride and power apart from God, it will eventually reach the point of trading in persons. Babylon&apos;s economic system, however sophisticated and glorious, ends in the buying and selling of human beings made in the image of God. This alone would be sufficient reason for her judgment." }} style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.95rem" }} />
            </div>
          </div>
        )}

        {/* Tab 2: Verse by Verse */}
        {tab === 2 && (
          <div>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Verse-by-Verse Commentary</h2>
            <p dangerouslySetInnerHTML={{ __html: "Revelation 18 spans 24 verses of sustained prophetic poetry, lament, and theological declaration. The commentary below works through the chapter&apos;s major sections, attending to the Old Testament background, the rhetorical structure of the three laments, and the theological meaning of the millstone image." }} style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }} />

            {verses.map((v) => (
              <div key={v.ref} style={{ background: CARD, border: `1px solid ${open === v.ref ? v.color : BORDER}`, borderRadius: 14, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button
                  onClick={() => toggle(v.ref)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "1.2rem 1.5rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ background: `${v.color}22`, border: `1px solid ${v.color}44`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: v.color, fontWeight: 700, whiteSpace: "nowrap" }}>{v.ref}</span>
                    <span style={{ color: TEXT, fontWeight: 600, fontSize: "0.95rem" }}>{v.title}</span>
                  </div>
                  <span style={{ color: v.color, fontSize: "1.3rem", fontWeight: 700, lineHeight: 1, marginLeft: 12 }}>{open === v.ref ? "-" : "+"}</span>
                </button>
                {open === v.ref && (
                  <div style={{ padding: "0 1.5rem 1.4rem", borderTop: `1px solid ${BORDER}` }}>
                    <p dangerouslySetInnerHTML={{ __html: v.body }} style={{ color: MUTED, lineHeight: 1.8, margin: "1rem 0 0", fontSize: "0.95rem" }} />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${GOLD}`, borderRadius: 14, padding: "1.5rem", marginTop: "1.5rem" }}>
              <div style={{ color: GOLD, fontWeight: 800, fontSize: "1rem", marginBottom: "0.75rem" }}>The Rhetorical Structure of the Three Laments</div>
              <p dangerouslySetInnerHTML={{ __html: "John carefully structures the three laments to create a building crescendo. Each lament is longer than the last (kings: 2 verses; merchants: 6+ verses; sailors: 3 verses including the climactic question). Each lament uses the same grief vocabulary: weep, mourn, cry out, alas alas. Each ends with the same refrain: &quot;in a single hour.&quot; The repetition creates a kind of funeral drumbeat. And all three groups share the same posture: they stand far off. They were intimate with Babylon when she was powerful, but at the moment of her destruction they will not draw near. Their love was always conditional on her usefulness to them. This is the chapter&apos;s implicit indictment of all who love Babylon: they love what she provides, not who she is. And in the moment of her judgment, that conditional love reveals itself as no love at all." }} style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.95rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}`, borderRadius: 14, padding: "1.5rem", marginTop: "1rem" }}>
              <div style={{ color: PURPLE_LIGHT, fontWeight: 800, fontSize: "1rem", marginBottom: "0.75rem" }}>The Millstone Symbolism (v.21)</div>
              <p dangerouslySetInnerHTML={{ __html: "The millstone image that the mighty angel uses in verse 21 draws on Jeremiah 51:63-64, where Jeremiah instructs Seraiah to tie a stone to his scroll and throw it into the Euphrates as a prophetic sign of Babylon&apos;s sinking. John amplifies the image: the millstone is &quot;great&quot; (megas) and the throwing is &quot;with violence&quot; (horme). The millstone is also evoked by Jesus in Matthew 18:6 as a symbol of irreversible judgment &mdash; better to have a millstone around your neck and be thrown into the sea than to cause a little one to stumble. By using the same millstone image for Babylon, John suggests that Babylon has done precisely what Jesus warned against: she has caused many to stumble, leading nations into immorality and merchants into the commodification of human souls. The millstone of judgment fits the crime." }} style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.95rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}`, borderRadius: 14, padding: "1.5rem", marginTop: "1rem" }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: "1rem", marginBottom: "0.75rem" }}>The Silence of Babylon (vv.22-23)</div>
              <p dangerouslySetInnerHTML={{ __html: "The final inventory of what will be silent in Babylon is the chapter&apos;s most poignant section. John lists five sounds and one light that will be extinguished: harpists, musicians, flute players, and trumpeters will be heard no more; the sound of a craftsman working will be heard no more; the grinding of the mill will be heard no more; the light of a lamp will shine no more; the voice of bride and bridegroom will be heard no more. These are not the sounds of decadence and sin &mdash; they are the sounds of civilization at its most beautiful. Music. Making. Food. Light. Marriage. These gifts were given by God; Babylon has enslaved them in service of idolatry. When Babylon falls, she takes these sounds with her into silence &mdash; not because music and craft and marriage are evil but because everything she touches she co-opts. The silence is both judgment and invitation: these good things will be restored in the new creation (Rev 21), freed from Babylon&apos;s corruption, offered back to humanity in their redeemed and eternal form." }} style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.95rem" }} />
            </div>
          </div>
        )}

        {/* Tab 3: Application */}
        {tab === 3 && (
          <div>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.5rem" }}>Application for Today</h2>
            <p dangerouslySetInnerHTML={{ __html: "Revelation 18 is one of the most practically urgent chapters in the New Testament for Christians living inside prosperous Western culture. Its call to come out, its exposure of commerce as idolatry when organized around pride, and its radical revaluation of what matters all press on the contemporary church with particular force. The applications below draw direct lines from the text to twenty-first century Christian life." }} style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }} />

            {applicationItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: item.color, fontWeight: 800, fontSize: "1rem", marginBottom: "0.75rem" }}>{item.title}</div>
                <p dangerouslySetInnerHTML={{ __html: item.body }} style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.95rem", margin: 0 }} />
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${PURPLE}`, borderRadius: 16, padding: "2rem", marginTop: "1.5rem" }}>
              <h3 style={{ color: PURPLE_LIGHT, fontWeight: 800, fontSize: "1.1rem", marginBottom: "1rem" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  "What would you mourn if it were taken away in &quot;a single hour&quot;? What does your answer reveal about where your treasure is?",
                  "In what specific ways are you still &quot;inside&quot; Babylon &mdash; not geographically but in terms of allegiance, emotional investment, or economic dependency?",
                  "Where do you see the commodification of persons &mdash; human beings treated as means to economic ends &mdash; in the systems you participate in? How does the gospel call you to respond?",
                  "What would it look like for you to &quot;come out of her&quot; practically in the next month &mdash; not by withdrawal from the world but by refusing to share in specific sins?",
                  "How does the promise that heaven rejoices over Babylon&apos;s fall change how you hold your own suffering and the apparent triumph of ungodly systems?",
                ].map((q, i) => (
                  <div key={i} style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem" }}>
                    <p dangerouslySetInnerHTML={{ __html: `${i + 1}. ${q}` }} style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}`, borderRadius: 14, padding: "1.5rem", marginTop: "1.5rem" }}>
              <div style={{ color: GOLD, fontWeight: 800, fontSize: "1rem", marginBottom: "0.75rem" }}>The Voice That Speaks Through the Judgment</div>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1rem", margin: "0 0 1rem" }}>
                <p dangerouslySetInnerHTML={{ __html: "&quot;Come out of her, my people, lest you take part in her sins, lest you share in her plagues; for her sins are heaped high as heaven, and God has remembered her iniquities.&quot; &mdash; Revelation 18:4-5" }} style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }} />
              </blockquote>
              <p dangerouslySetInnerHTML={{ __html: "The voice that speaks this command is the voice of love &mdash; God addressing his people as &quot;my people,&quot; warning them before the judgment falls, making a way of escape. The command &quot;come out&quot; is not a command to isolation or cultural irrelevance. It is a command to primary allegiance: belong to the Lamb before you belong to any empire, economy, or culture. The great test Revelation poses to every generation is the same: where do you ultimately belong? The world will always offer the golden cup. The Lamb always offers the water of life. Babylon always builds the most impressive architecture. The new Jerusalem is always coming down from God out of heaven. Choose where your home is, and live from that choice." }} style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.95rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}`, borderRadius: 14, padding: "1.5rem", marginTop: "1rem" }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: "1rem", marginBottom: "0.75rem" }}>Revelation 18 and the New Creation</div>
              <p dangerouslySetInnerHTML={{ __html: "The silence of Babylon in verses 22-23 &mdash; music, craft, food, light, marriage &mdash; is not the last word on these gifts. Revelation 21-22 restores what Babylon corrupted. The new Jerusalem is filled with the glory of God that needs no lamp (21:23). The nations bring their glory and honor into it (21:26). The river of life flows through it (22:1). The tree of life bears twelve kinds of fruit (22:2). Music and craft and feasting will find their eternal form in the new creation &mdash; purified from Babylon&apos;s corruption, offered freely by the one who makes all things new. Revelation 18&apos;s silence is Babylon&apos;s silence, not creation&apos;s silence. What Babylon took down with her in judgment will rise again, transfigured, in the kingdom that has no end." }} style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.95rem" }} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
