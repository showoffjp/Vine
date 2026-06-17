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
  { id: "pNgXJHjQdH8", title: "Revelation 17 - Mystery Babylon Explained" },
  { id: "zX3LqGmVs4c", title: "Who Is Babylon the Great? Revelation 17 Study" },
  { id: "mRt9vKwP2dE", title: "The Scarlet Beast and Seven Heads Revelation 17" },
  { id: "fK8nBzQyX1s", title: "The Ten Kings and the Lamb's Victory Revelation 17" },
];

const keyThemes = [
  {
    id: "theme1",
    title: "Spiritual Harlotry and False Religion",
    color: ROSE,
    body: "Babylon represents any system of false worship, idolatry, and spiritual adultery against God. She seduces nations and kings into forsaking true allegiance to the Creator in exchange for the pleasures and power of corrupted human civilization. The imagery of harlotry is drawn from the Old Testament prophets &mdash; Ezekiel, Isaiah, and Jeremiah all used it for Israel&apos;s unfaithfulness and for the seductive power of pagan empires. The great harlot of Revelation 17 is the culmination of that entire tradition: a system so alluring, so glittering with gold and jewels, that even the kings of the earth fall under her spell. Her golden cup is full of abominations, but it looks beautiful on the outside. Spiritual seduction rarely announces itself. It comes dressed in luxury and cultural prestige.",
  },
  {
    id: "theme2",
    title: "The Beast's Nature (Was, Is Not, Is to Come)",
    color: PURPLE,
    body: "The description of the beast in verse 8 &mdash; &quot;the beast that you saw was, and is not, and is about to rise from the bottomless pit&quot; &mdash; is a deliberate counterfeit of the divine name: the One &quot;who is and who was and who is to come&quot; (Rev 1:4). The beast mirrors Christ&apos;s death and resurrection in a dark parody, deceiving those whose names are not written in the Book of Life. This counterfeit nature is central to how the beast operates: it does not present itself as obviously evil but as something glorious and worthy of awe. The earth-dwellers &quot;marvel&quot; at the beast (v.8) &mdash; the same word used for religious wonder. Deception works by imitating what is genuinely worthy of worship. The beast offers a false resurrection, a false lord, a false kingdom.",
  },
  {
    id: "theme3",
    title: "The Mystery of the Seven Heads",
    color: GOLD,
    body: "The angel&apos;s explanation of the seven heads (vv.9-11) is one of the most debated passages in all of apocalyptic literature. Seven mountains and seven kings: five have fallen, one is, one is yet to come. In John&apos;s first-century context, seven hills almost certainly evoked Rome (the city on seven hills). The sequence of kings may refer to Roman emperors, though counting schemes vary among scholars. What is theologically constant is the meaning: seven points to completeness, and the concentration of worldly political power &mdash; however impressive its seven-headed totality &mdash; is finite and countable. The beast is &quot;an eighth and yet belongs to the seven&quot; (v.11), pointing beyond any single historical referent to a recurring pattern of anti-God power that climaxes in a final manifestation. Human empire is always numbered; the Lamb&apos;s kingdom alone has no end.",
  },
  {
    id: "theme4",
    title: "The Ten Kings and Unified Opposition",
    color: TEAL,
    body: "Ten kings who have not yet received kingdoms receive authority with the beast for one hour (v.12). They give their power and authority to the beast (v.13) and together make war on the Lamb (v.14). The coalition is striking: ten distinct powers, normally competitive with one another, are unified in their opposition to God. This is the ultimate political unity &mdash; all the world&apos;s military and political power aligned against heaven. Yet the duration is precise: one hour. The most formidable possible human alliance is measured not in centuries or decades but in an hour. The phrase &quot;one hour&quot; appears again in Revelation 18 for the duration of Babylon&apos;s judgment &mdash; reinforcing the theme that everything belonging to the beast&apos;s kingdom is breathtakingly temporary. Earthly coalitions against God are formidable but not eternal.",
  },
  {
    id: "theme5",
    title: "The Lamb Overcomes All",
    color: GREEN,
    body: "Verse 14 is the theological climax of the chapter: &quot;They will make war on the Lamb, and the Lamb will conquer them, for he is Lord of lords and King of kings, and those with him are called and chosen and faithful.&quot; The victory belongs to the Lamb &mdash; the figure who was slain (Rev 5:6), who won not by superior military force but by faithful obedience unto death and resurrection. The titles &quot;Lord of lords and King of kings&quot; are the highest possible claims of sovereignty, borrowed from Old Testament language for God himself (Deut 10:17; Ps 136:3). The Lamb wears them. And the Lamb is not alone: with him are those who are called, chosen, and faithful. The victory is shared. Those who endure tribulation with the Lamb inherit the outcome of his conquest.",
  },
];

const verses = [
  {
    ref: "17:1-2",
    color: ROSE,
    title: "The Invitation to See the Harlot",
    body: "One of the seven angels who had the seven bowls invites John to see &quot;the judgment of the great prostitute who is seated on many waters.&quot; The many waters are explained in verse 15 as &quot;peoples and multitudes and nations and tongues&quot; &mdash; a breathtaking image of global reach and influence. The kings of the earth have committed sexual immorality with her, and the earth&apos;s inhabitants have been made drunk with the wine of her sexual immorality. The language is drawn from Old Testament prophetic tradition: Jeremiah used Babylon as the archetype of seductive empire (Jer 51:7: &quot;Babylon was a golden cup in the LORD&apos;s hand, making all the earth drunken&quot;). The harlot&apos;s power is not primarily military but cultural, economic, and spiritual. She makes people drunk &mdash; she clouds judgment, inflames desire, makes the intoxicated unable to see clearly. This is how worldly systems most effectively corrupt: not through obvious coercion but through alluring intoxication.",
  },
  {
    ref: "17:3-6",
    color: PURPLE,
    title: "The Vision of the Woman and the Beast",
    body: "The angel carries John &quot;in the Spirit into a wilderness&quot; &mdash; the same setting as the vision of the woman clothed with the sun in chapter 12. The wilderness perspective is significant: it is from outside Babylon, at a remove from her seductions, that one can see her clearly. John sees the woman sitting on a scarlet beast full of blasphemous names, having seven heads and ten horns. The woman is arrayed in purple and scarlet, adorned with gold and jewels and pearls, holding a golden cup full of abominations and the impurities of her sexual immorality. On her forehead: a name of mystery, &quot;Babylon the great, mother of prostitutes and of earth&apos;s abominations.&quot; The name on the forehead is a grim parody of the seal of God on the foreheads of the 144,000 (Rev 7) and the name of the Lamb&apos;s Father on the brows of the redeemed (Rev 14:1). The woman is drunk &mdash; not with wine but with the blood of the saints and the blood of the martyrs of Jesus. The power drunk on the blood of the faithful: this is the deepest ugliness beneath the glittering surface.",
  },
  {
    ref: "17:7-8",
    color: GOLD,
    title: "The Angel Explains the Mystery",
    body: "John marvels when he sees the woman &mdash; and the angel responds: &quot;Why do you marvel? I will tell you the mystery of the woman, and of the beast with seven heads and ten horns that carries her.&quot; The explanation that follows is one of the most densely symbolic passages in Revelation. The beast &quot;was, and is not, and is about to rise from the bottomless pit and go to destruction.&quot; This threefold description parodies the divine name (&quot;who is and who was and who is to come&quot;) while also evoking a counterfeit death and resurrection. The beast has a history, a present absence, and a future return &mdash; and the dwellers on earth &quot;whose names have not been written in the Book of Life from the foundation of the world will marvel when they see the beast, because it was and is not and is to come.&quot; The Book of Life is the decisive contrast: those whose names are in it see clearly; those whose names are not in it are bedazzled. Election grants perception. The unregenerate marvel at the beast&apos;s apparent resurrection; the redeemed worship the true Lord who rose.",
  },
  {
    ref: "17:9-11",
    color: TEAL,
    title: "Seven Mountains and Seven Kings",
    body: "Verse 9 begins: &quot;This calls for a mind with wisdom.&quot; The same phrase appears in 13:18 for the mark of the beast (666). Both passages require interpretive care. The seven heads are both seven mountains &mdash; almost certainly evoking Rome, the city on seven hills &mdash; and seven kings. Five have fallen, one is, one is yet to come and will remain only a little while. The beast that was and is not is an eighth king, yet belongs to the seven, and goes to destruction. The numerical scheme has been interpreted in many ways: counting from Julius Caesar, from Augustus, from Caligula, or symbolically. What the scheme resists is simple literalism. The seven mountains and seven kings together point to concentrated, historical, political power opposed to God. The &quot;eighth&quot; who belongs to the seven indicates that the pattern recurs &mdash; the beast is not exhausted in any single historical referent but manifests across history before its final form emerges and is destroyed.",
  },
  {
    ref: "17:12-14",
    color: GREEN,
    title: "Ten Kings and the Lamb's Conquest",
    body: "The ten horns are ten kings who have not yet received kingdoms but receive authority as kings for one hour, together with the beast. They give their power and authority to the beast &mdash; the ultimate political unity, all the world&apos;s power marshaled against heaven. They make war on the Lamb. And here is the pivot: &quot;the Lamb will conquer them, for he is Lord of lords and King of kings, and those with him are called and chosen and faithful.&quot; The victory formula is stated simply and without drama. The Lamb conquers. The title &quot;Lord of lords and King of kings&quot; claims universal sovereignty for Christ. The description of his companions &mdash; &quot;called and chosen and faithful&quot; &mdash; is a compressed theology of election and perseverance. They are called (by God&apos;s initiative), chosen (by God&apos;s sovereign purpose), and faithful (by their own enduring response to grace). All three are necessary; none is sufficient alone. The order is significant: calling and choosing precede faithfulness, but faithfulness is not optional.",
  },
  {
    ref: "17:15-18",
    color: ROSE,
    title: "The Harlot's End and the Great City",
    body: "The angel explains the many waters: &quot;The waters that you saw, where the prostitute is seated, are peoples and multitudes and nations and languages.&quot; The harlot&apos;s dominion is global, spanning every human community. But then comes the great reversal: &quot;the ten horns that you saw, they and the beast will hate the prostitute. They will make her desolate and naked, and devour her flesh and burn her up with fire.&quot; The very powers that served the harlot turn on her and destroy her. This self-destruction of the beast&apos;s system is not accidental: &quot;God has put it into their hearts to carry out his purpose by being of one mind and handing over their royal power to the beast, until the words of God are fulfilled.&quot; Verse 17 is one of the most theologically dense statements in Revelation: God&apos;s sovereignty extends even to the self-destructive decisions of evil powers. They carry out his purpose while pursuing their own. The chapter closes with the identification: &quot;the woman you saw is the great city that has dominion over the kings of the earth.&quot; In John&apos;s day, that city was Rome. In any age, it is whatever civilization claims ultimate authority apart from God.",
  },
];

const applicationItems = [
  {
    color: PURPLE_LIGHT,
    title: "Guard Against Spiritual Seduction",
    body: "The great harlot does not announce herself as an enemy of God. She presents herself in luxury, beauty, and cultural prestige. Her golden cup looks desirable. The call to the church in every age is vigilance against the seductive power of worldly systems that promise fulfillment while poisoning the soul. The &quot;wilderness&quot; perspective that John receives is a gift: step back far enough from the culture to see it clearly. Regular withdrawal for prayer, Scripture, and community gives the perspective needed to see the golden cup for what it contains.",
  },
  {
    color: GOLD,
    title: "Stay Faithful When Culture Pressures Compromise",
    body: "The kings of the earth and the earth&apos;s inhabitants have been made drunk with the wine of the harlot&apos;s fornication. Drunkenness impairs judgment and blurs boundaries. The Christian in a Babylonian culture faces constant pressure to drink just a little &mdash; to accommodate just enough, compromise just enough, go along just enough to avoid the cost of distinction. Revelation 17 offers no middle ground: the harlot and the Lamb, the beast and the Lord of lords. Faithfulness is not passive endurance but active resistance to the numbing pressure of conformity.",
  },
  {
    color: TEAL,
    title: "Trust That God Uses Even Evil for His Purposes",
    body: "Verse 17 is a remarkable theological statement: God puts it into the hearts of the ten kings to give their power to the beast &mdash; until God&apos;s words are fulfilled. The most terrifying coalitions of worldly power operate within the sovereign purpose of God. This is not a comfortable doctrine; it is a stabilizing one. When evil seems to be winning, when hostile powers seem unstoppable, the believer can rest in the knowledge that no plan of Satan or empire exceeds the boundaries God has set. Providence is not passive permission but active governance &mdash; even of evil, toward redemptive ends.",
  },
  {
    color: ROSE,
    title: "Identify Babylon's Influence in Modern Life",
    body: "Babylon is not limited to ancient Rome or a future end-times superstate. It is a recurring pattern: civilization organized around wealth, power, luxury, and cultural prestige, with the blood of the faithful on its hands. Modern Babylon may wear the face of consumerism that turns buying into worship, of nationalism that demands ultimate loyalty, of entertainment that numbs spiritual sensitivity, or of social media that creates a harlot&apos;s cup full of carefully curated self-image. The task is not withdrawal from culture but discernment within it &mdash; identifying where the cup is golden on the outside and full of abominations within.",
  },
  {
    color: GREEN,
    title: "Find Identity in the Lamb, Not the City of Man",
    body: "Those who are with the Lamb are &quot;called and chosen and faithful.&quot; Their identity is not determined by Babylon&apos;s economy, culture, or political arrangements. They belong to the Lamb. This identity &mdash; called by God, chosen in Christ, persevering in faithfulness &mdash; is the anchor against the seductive pull of the great city. When the culture offers belonging through consumption, achievement, or ideological alignment, the Christian has a prior and deeper belonging: to the one who is Lord of lords. No earthly city can give what only the Lamb offers, and no earthly city can take it away.",
  },
  {
    color: PURPLE,
    title: "Remain Among the Called, Chosen, and Faithful",
    body: "The description in verse 14 &mdash; &quot;called and chosen and faithful&quot; &mdash; is both a promise and a call. It is a promise: God has called and chosen a people for himself. It is a call: those people are to be faithful. Faithfulness is not a condition of earning God&apos;s love but a description of those who truly belong to the Lamb. The church that reads Revelation 17 is invited to examine its own faithfulness: Is it making war against the Lamb by accommodating Babylon? Or is it standing with the Lamb, called and chosen and enduring? The question is not accusatory but clarifying &mdash; an invitation to align practice with identity.",
  },
];

export default function Revelation17GuidePage() {
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
          <div style={{ display: "inline-block", background: `${ROSE}22`, border: `1px solid ${ROSE}55`, borderRadius: 20, padding: "4px 16px", fontSize: 11, color: ROSE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>
            Revelation 17 &mdash; Bible Study Guide
          </div>
          <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, color: TEXT, margin: "0 0 12px" }}>
            Mystery Babylon and the Beast
          </h1>
          <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", lineHeight: 1.8, fontSize: "1rem" }}>
            A verse-by-verse study of Revelation 17 &mdash; the great harlot seated on many waters, the scarlet beast, the seven heads, the ten kings, and the Lamb who conquers them all.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginTop: 28, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
            {[["Passage", "Revelation 17"], ["Verses", "18"], ["Theme", "Mystery Babylon"], ["Key Figure", "The Harlot"], ["Victory", "The Lamb Wins"]].map(([k, v]) => (
              <div key={k} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 14px" }}>
                <div style={{ color: MUTED, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                <div style={{ color: TEXT, fontWeight: 700, fontSize: 13 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ color: PURPLE_LIGHT, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1.2rem" }}>Video Resources</h2>
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
              <h2 style={{ color: PURPLE_LIGHT, fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>Overview of Revelation 17</h2>
              <p dangerouslySetInnerHTML={{ __html: "Revelation 17 draws back the curtain on one of the Bible&apos;s most arresting images: the great harlot Babylon, seated on many waters and riding a scarlet beast. The chapter opens with one of the seven bowl-angels inviting John to see &quot;the judgment of the great prostitute who is seated on many waters&quot; (v.1). The scene that follows is a sustained apocalyptic vision &mdash; dense with Old Testament allusions, symbolic numbers, and theological freight." }} style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The angel carries John in the Spirit into a wilderness &mdash; that perspective of distance from civilization&apos;s seductions that allows clear sight. There John sees a woman arrayed in purple and scarlet, adorned with gold and jewels and pearls, holding a golden cup full of abominations. On her forehead is written a name of mystery: &quot;Babylon the great, mother of prostitutes and of earth&apos;s abominations.&quot; She is drunk with the blood of the saints and the blood of the martyrs of Jesus." }} style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The beast she rides is scarlet and full of blasphemous names, with seven heads and ten horns. The angel proceeds to explain the mystery: the beast &quot;was, and is not, and is about to rise from the bottomless pit&quot; &mdash; a dark parody of the divine name, a counterfeit resurrection. The seven heads are both seven mountains (almost certainly Rome, the city on seven hills) and seven kings in sequence. The ten horns are ten kings who receive power with the beast for one hour and give their authority to him." }} style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The coalition of beast and kings makes war against the Lamb &mdash; and here is the chapter&apos;s turning point: &quot;the Lamb will conquer them, for he is Lord of lords and King of kings, and those with him are called and chosen and faithful&quot; (v.14). The chapter closes with a final reversal: the very kings who served the harlot turn on her, make her desolate, and burn her with fire &mdash; because God has put it in their hearts to fulfill his purpose. The chapter ends with the identification of the woman: &quot;the great city that has dominion over the kings of the earth.&quot;" }} style={{ color: MUTED, lineHeight: 1.8 }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "2rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.1rem", marginBottom: "1rem" }}>Key Figures in Revelation 17</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                {[
                  ["The Great Harlot", "Babylon &mdash; civilization organized in opposition to God"],
                  ["The Scarlet Beast", "The anti-God political power that carries Babylon"],
                  ["Seven Heads", "Seven mountains and seven kings; Rome and empire"],
                  ["Ten Horns", "Ten kings who give authority to the beast for one hour"],
                  ["The Lamb", "Lord of lords and King of kings who conquers all"],
                  ["The Called", "Those called, chosen, and faithful &mdash; with the Lamb"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                    <div style={{ color: PURPLE_LIGHT, fontWeight: 700, fontSize: "0.85rem", marginBottom: 6 }}>{k}</div>
                    <div dangerouslySetInnerHTML={{ __html: v }} style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6 }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "2rem", marginTop: "1.5rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: "1.1rem", marginBottom: "1rem" }}>Historical and Interpretive Context</h3>
              <p dangerouslySetInnerHTML={{ __html: "Revelation was written to seven churches in Roman Asia Minor, almost certainly during the reign of the emperor Domitian (c. AD 95). In that context, Babylon almost certainly referred to Rome &mdash; a city famous for its seven hills, its dominion over all known nations, and its persecution of Christians. This identification was not unique to John: other Jewish texts of the period (4 Ezra, 2 Baruch) used &quot;Babylon&quot; as a cipher for Rome." }} style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "But John&apos;s Babylon is more than Rome. The Old Testament background &mdash; Jeremiah 51, Isaiah 47, Ezekiel 26-27 &mdash; makes clear that Babylon is a theological archetype: civilization in rebellion against God, seducing the nations with wealth and power while persecuting the faithful. Every age has its Babylon. The first-century reader saw Rome. Later readers have seen other empires. The theological pattern is what endures: worldly power that claims ultimate allegiance, seduces through luxury, and sheds the blood of the faithful is, in John&apos;s terms, Babylon &mdash; and Babylon falls." }} style={{ color: MUTED, lineHeight: 1.8 }} />
            </div>
          </div>
        )}

        {/* Tab 1: Key Themes */}
        {tab === 1 && (
          <div>
            <h2 style={{ color: PURPLE_LIGHT, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Key Themes in Revelation 17</h2>
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

            <div style={{ background: CARD, border: `1px solid ${PURPLE}`, borderRadius: 14, padding: "1.5rem", marginTop: "1.5rem" }}>
              <h3 style={{ color: PURPLE_LIGHT, fontWeight: 800, fontSize: "1rem", marginBottom: "0.75rem" }}>The Central Tension of Chapter 17</h3>
              <p dangerouslySetInnerHTML={{ __html: "Revelation 17 holds together two realities that seem to contradict each other. On one side: an image of overwhelming worldly power. The beast carries the harlot; the kings of the earth are drunk with her wine; the whole world marvels at the beast. On the other side: a declaration of absolute divine sovereignty. The beast goes to destruction. God has put it in the kings&apos; hearts to fulfill his purpose. The Lamb conquers. The chapter does not resolve the tension by minimizing either side. The power of Babylon is real. The victory of the Lamb is also real. And it is the vision of the Lamb&apos;s victory that sustains the church through Babylon&apos;s apparent triumph." }} style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.95rem" }} />
            </div>
          </div>
        )}

        {/* Tab 2: Verse by Verse */}
        {tab === 2 && (
          <div>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Verse-by-Verse Commentary</h2>
            <p dangerouslySetInnerHTML={{ __html: "Revelation 17 contains 18 verses that together build a sustained theological argument through visionary imagery. The commentary below works through the major sections, drawing on the Old Testament background that shaped John&apos;s vision and attending to the symbolic structure of the chapter." }} style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }} />

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
              <div style={{ color: GOLD, fontWeight: 800, fontSize: "1rem", marginBottom: "0.75rem" }}>Structural Note: The Self-Destruction of Babylon</div>
              <p dangerouslySetInnerHTML={{ __html: "One of the most remarkable features of Revelation 17 is that Babylon is not destroyed by an external military force or directly by divine fire from heaven. She is destroyed by the very powers that served her (vv.16-17): the ten kings and the beast turn on her, make her desolate, eat her flesh, and burn her with fire. This is a profound theological observation: systems of false religion and idolatry ultimately cannot sustain themselves. They consume those who serve them and are finally consumed by their own constituent powers. The judgment of Babylon is, in part, the internal logic of sin working itself out to its bitter conclusion. God does not need to intervene from outside &mdash; he has arranged the system so that its own corruption destroys it. His providence governs even the self-destruction of evil." }} style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.95rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}`, borderRadius: 14, padding: "1.5rem", marginTop: "1rem" }}>
              <div style={{ color: PURPLE_LIGHT, fontWeight: 800, fontSize: "1rem", marginBottom: "0.75rem" }}>Old Testament Background</div>
              <p dangerouslySetInnerHTML={{ __html: "Revelation 17 is saturated with Old Testament imagery. The harlot image draws on Ezekiel&apos;s oracles against Tyre (Ezek 26-27) and against Jerusalem-as-harlot (Ezek 16, 23), as well as Nahum&apos;s oracle against Nineveh &quot;the prostitute&quot; (Nah 3:4). The golden cup echoes Jeremiah 51:7: &quot;Babylon was a golden cup in the LORD&apos;s hand, making all the earth drunken.&quot; The many waters as peoples and nations echoes Jeremiah 51:13: &quot;You who dwell by many waters.&quot; The beast from the abyss recalls Daniel&apos;s four beasts from the sea (Dan 7), especially the fourth beast with ten horns. John is not creating symbols from scratch &mdash; he is weaving together the entire prophetic tradition into a climactic vision of what empire always is and what God always does to it." }} style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.95rem" }} />
            </div>
          </div>
        )}

        {/* Tab 3: Application */}
        {tab === 3 && (
          <div>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.5rem" }}>Application for Today</h2>
            <p dangerouslySetInnerHTML={{ __html: "Revelation 17 was written not to satisfy prophetic curiosity but to shape how God&apos;s people live under Babylonian culture. The vision arms the church with clarity about what worldly systems are, what they promise, what they actually deliver, and how they end. Each application point below draws a direct line from the chapter&apos;s theology to present-day Christian life." }} style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }} />

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
                  "Where do you see the &quot;golden cup&quot; effect in your own life &mdash; things that look desirable on the outside but whose contents are corrupting?",
                  "What does the &quot;wilderness perspective&quot; look like practically for you? What practices help you see culture clearly rather than being drunk with it?",
                  "How does the phrase &quot;called and chosen and faithful&quot; function as your identity? Which of the three do you most need to lean into right now?",
                  "In what areas might you be accommodating Babylon in ways that feel small but are actually compromising your primary allegiance to the Lamb?",
                  "How does the certainty of the Lamb&apos;s victory (&quot;the Lamb will conquer them&quot;) change how you face the apparent strength of anti-God forces in your world today?",
                ].map((q, i) => (
                  <div key={i} style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem" }}>
                    <p dangerouslySetInnerHTML={{ __html: `${i + 1}. ${q}` }} style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}`, borderRadius: 14, padding: "1.5rem", marginTop: "1.5rem" }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: "1rem", marginBottom: "0.75rem" }}>The Promise That Anchors Everything</div>
              <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 1rem" }}>
                <p dangerouslySetInnerHTML={{ __html: "&quot;They will make war on the Lamb, and the Lamb will conquer them, for he is Lord of lords and King of kings, and those with him are called and chosen and faithful.&quot; &mdash; Revelation 17:14" }} style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }} />
              </blockquote>
              <p dangerouslySetInnerHTML={{ __html: "This is not a promise for a distant future only &mdash; it is a present reality that shapes every moment of Christian life under Babylonian pressure. The Lamb has already conquered at the cross and resurrection. The final conquest is the public declaration of what is already true. The church lives between the already-accomplished victory and the not-yet-completed revelation of that victory. Revelation 17 is given so that the church can live in confidence: the beast&apos;s apparent dominance is temporary; the Lamb&apos;s reign is eternal. No matter what the harlot offers and no matter how many kings she intoxicates, the outcome is determined. Stand with the Lamb." }} style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.95rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}`, borderRadius: 14, padding: "1.5rem", marginTop: "1rem" }}>
              <div style={{ color: GOLD, fontWeight: 800, fontSize: "1rem", marginBottom: "0.75rem" }}>Further Study</div>
              <p dangerouslySetInnerHTML={{ __html: "For deeper engagement with Revelation 17, study the following Old Testament passages that form its backbone: Jeremiah 50-51 (the oracle against Babylon), Ezekiel 16 and 23 (Jerusalem and Samaria as harlots), Ezekiel 26-27 (the lament over Tyre &mdash; the commercial empire), Isaiah 47 (the fall of Babylon), Daniel 7 (the four beasts and the Son of Man). Reading Revelation 17 in dialogue with these texts reveals how John is not creating a new symbol system but drawing the entire prophetic tradition to its climax in the vision of the great harlot&apos;s judgment and the Lamb&apos;s victory." }} style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.95rem" }} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
