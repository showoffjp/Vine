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
  { videoId: "9mxXmDEUdgU", title: "Isaiah 35 - The Highway of Holiness" },
  { videoId: "nIZU6bXA8Z8", title: "Streams in the Desert - Isaiah 35 Commentary" },
  { videoId: "vHzXxdPOivs", title: "Isaiah 35 and the Coming Kingdom" },
  { videoId: "xJSzFWVJiqc", title: "Joy of the Redeemed - Isaiah 35 Teaching" },
];

const VERSE_SECTIONS = [
  {
    id: "vs1",
    ref: "Isaiah 35:1-2",
    title: "The Blossoming Desert and the Glory of the LORD",
    color: GREEN,
    content:
      "The desert and the parched land will be glad; the wilderness will rejoice and blossom. Like the crocus, it will burst into bloom; it will rejoice greatly and shout for joy. The glory of Lebanon will be given to it, the splendor of Carmel and Sharon; they will see the glory of the LORD, the splendor of our God. The opening two verses of Isaiah 35 are among the most joyful lines in the entire Bible. After the unrelenting darkness of Isaiah 34 &mdash; the cosmic judgment, the sword against Edom, the perpetual desolation &mdash; the sudden shift to a singing, blossoming wilderness is one of the most dramatic transitions in all of Scripture. The Hebrew word for &lsquo;will be glad&rsquo; (sus) and &lsquo;will rejoice&rsquo; (gil) both describe the most exuberant forms of human joy, and here Isaiah attributes them to the non-human creation. The wilderness is not merely improved or made habitable; it rejoices and shouts for joy (ranan). The crocus (chabatstseleth) that bursts into bloom is a small, fragile flower &mdash; one of the first to appear after winter rains in the desert landscape of the ancient Near East. Isaiah uses this image to describe the beginning of salvation: it looks small and fragile, but it bursts into bloom from the most unlikely ground. The glory of Lebanon, Carmel, and Sharon were the three most renowned landscapes of fruitfulness and beauty in the ancient Levant. Lebanon was known for its towering cedars, Carmel for its dense oak forests and vineyards, Sharon for its fertile coastal plain. To say that the wilderness will receive their glory is to say that the most barren and hopeless place will become the most abundantly fruitful. But the point is not ecological; it is theological: &lsquo;they will see the glory of the LORD.&rsquo; The blossoming wilderness is the landscape in which the divine glory (kavod) becomes visible. Creation responds to God&rsquo;s presence by becoming what it was always meant to be.",
  },
  {
    id: "vs2",
    ref: "Isaiah 35:3-4",
    title: "Strengthening Weak Hands and Feeble Knees",
    color: TEAL,
    content:
      "Strengthen the feeble hands, steady the knees that give way; say to those with fearful hearts, 'Be strong, do not fear; your God will come, he will come with vengeance; with divine retribution he will come to save you.' The sudden shift in verse 3 from creation imagery to direct address is characteristic of prophetic rhetoric: Isaiah has painted the vision of the transformed landscape, and now he turns to address the human community that needs the vision in order to keep going. The commands &lsquo;strengthen&rsquo; (chazzequ) and &lsquo;steady&rsquo; (amtzu) are both intensive imperatives &mdash; the Hebrew grammar expresses urgent, repeated action. This is not a gentle suggestion but a pastoral command: keep encouraging the weak, keep steadying those who are about to collapse. The physical imagery of feeble hands and giving-way knees is the vocabulary of exhaustion and despair. The people to whom Isaiah speaks have been under the weight of Assyrian threat and have lived with the dread of exile. Their hands are too weak to work or fight, their knees too unsteady to stand. The pastoral response is not to minimize the weight they are carrying but to redirect their eyes to the coming of God. &lsquo;Your God will come&rsquo; &mdash; three words in Hebrew (yavo Elohim) that are among the most comforting in the entire OT. The God who will come brings both nakam (vengeance/retribution) and yeshua (salvation) &mdash; the same divine pairing we saw in Isaiah 34:8. The judgment on the oppressor and the salvation of the oppressed are two aspects of the same divine coming. Hebrews 12:12 quotes this passage directly (&lsquo;strengthen your feeble arms and weak knees&rsquo;), applying it to the community of faith enduring hardship in the light of the coming of Christ.",
  },
  {
    id: "vs3",
    ref: "Isaiah 35:5-6a",
    title: "The Healing of the Blind, Deaf, Lame, and Mute",
    color: GOLD,
    content:
      "Then will the eyes of the blind be opened and the ears of the deaf unstopped. Then will the lame leap like a deer, and the mute tongue shout for joy. Verses 5-6a describe what the coming of God will do to human bodies. The four conditions named &mdash; blindness, deafness, lameness, and muteness &mdash; are not merely physical disabilities but in the prophetic literature represent the comprehensive disability that sin and exile have imposed on the people of God. Isaiah has used blindness and deafness throughout chapters 1-33 as images of spiritual and moral failure (Isaiah 6:9-10, 29:18, 32:3-4). The healing in Isaiah 35 is therefore both physical and spiritual: when the LORD comes, he restores the whole person in their whole embodied existence. The specificity of the healing imagery is important: the lame leap &lsquo;like a deer&rsquo; (ke-ayyal) and the mute tongue shouts for joy (ranan). These are images of exuberant, uncontained response to liberation &mdash; not the cautious movement of someone who fears the relief will not last, but the explosive joy of someone who has been freed from a long captivity. Jesus&rsquo;s answer to John the Baptist&rsquo;s messengers in Matthew 11:4-5 (&lsquo;Go back and report to John what you hear and see: The blind receive sight, the lame walk, those who have leprosy are cleansed, the deaf hear&rsquo;) is a direct quotation of Isaiah 35:5-6 combined with Isaiah 61:1. Jesus is not merely saying &lsquo;I am doing good deeds&rsquo;; he is saying &lsquo;the God of Isaiah 35 has arrived in person, and his arrival is what you are seeing.&rsquo; The healings are not incidental to Jesus&rsquo;s ministry but are the visible, bodily signs of the arrival of Isaiah&rsquo;s promised age.",
  },
  {
    id: "vs4",
    ref: "Isaiah 35:6b-7",
    title: "Streams in the Desert and Pools of Water",
    color: PURPLE,
    content:
      "Water will gush forth in the wilderness and streams in the desert. The burning sand will become a pool, the thirsty ground bubbling springs. In the haunts where jackals once lay, grass and reeds and papyrus will grow. Verses 6b-7 provide the ecological counterpart to the healing of human bodies in verses 5-6a: just as the blind, deaf, lame, and mute are made whole, the physical landscape is transformed from death to life. The sequence is deeply connected: the same divine coming that heals bodies also heals creation. Isaiah&rsquo;s vision is not a disembodied spiritual salvation that leaves the material world unchanged; it is a comprehensive transformation that reaches into the physical structures of the created order. The images are stark in their contrast with Isaiah 34. Where Edom&rsquo;s streams became pitch and its dust burning sulfur (34:9), the wilderness streams become water and the burning sand becomes a pool. The jackals that inherited Edom&rsquo;s desolate territory (34:13) are replaced by grass, reeds, and papyrus &mdash; the plant life that signals the presence of permanent water. In the ecology of the ancient Near East, water was not merely a physical necessity but a theological sign: where the LORD is present, water flows. The creation imagery here connects to Genesis 2 (rivers flowing from Eden), Ezekiel 47 (the river flowing from the temple), Zechariah 14:8 (living water flowing from Jerusalem on the Day of the LORD), and Revelation 22:1-2 (the river of the water of life flowing from the throne of God and the Lamb). Isaiah 35:6-7 is a node in the great biblical narrative of water: from the rivers of Eden, through the wilderness streams, to the river of life in the new creation.",
  },
  {
    id: "vs5",
    ref: "Isaiah 35:8-10",
    title: "The Way of Holiness and the Return of the Redeemed",
    color: ROSE,
    content:
      "And a highway will be there; it will be called the Way of Holiness; it will be for those who walk on that Way. The unclean will not journey on it; wicked fools will not go about on it. No lion will be there, nor any ravenous beast; they will not be found there. But only the redeemed will walk there, and those the LORD has rescued will return. They will enter Zion with singing; everlasting joy will crown their heads. Gladness and joy will overtake them, and sorrow and sighing will flee away. The closing verses of Isaiah 35 are among the most beloved in the entire prophetic literature. The Way of Holiness (derek ha-qodesh) is both a physical road &mdash; the highway through the desert along which the exiles will return to Zion &mdash; and a theological concept: the path of life that is open only to those whom the LORD has redeemed. The Hebrew words for those who walk on it are revealing: the ge&rsquo;ulim (the redeemed, v.9) and the pduyim (the ransomed, v.10). Both terms are technical vocabulary from the law of the kinsman-redeemer (go&rsquo;el): the ge&rsquo;ulim are those whose debt has been paid by a family member who has the right to redeem; the pduyim are those who have been purchased out of slavery. The Way of Holiness is not open to the self-sufficient or the morally superior; it is open to those who have been purchased, redeemed, and ransomed by another. The prohibition of the unclean and the wicked fool (v.8) is not a moral barrier that the righteous must scale; it is a description of what the road is: a path through which the LORD leads his own people, and those who walk it are those who have been made holy by the One who leads them. The closing promise &mdash; &lsquo;everlasting joy will crown their heads&rsquo; (sason ve-simchah) and &lsquo;sorrow and sighing will flee away&rsquo; &mdash; is quoted verbatim in Isaiah 51:11, connecting the promise to the even greater redemption announced in the second half of Isaiah. Isaiah 35:10 is quoted or echoed in Revelation 21:4 (&lsquo;He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain&rsquo;), where John sees it fulfilled in the new creation.",
  },
];

const THEMES = [
  {
    color: GREEN,
    title: "Sason and Simchah: The Joy of the Redeemed (vv.1-2, 10)",
    body:
      "The Hebrew words sason (joy, gladness, exultation) and simchah (rejoicing, festive delight) appear at the beginning and end of Isaiah 35, framing the entire chapter in the vocabulary of overwhelming joy. Sason is the most intense form of joy in the OT &mdash; the word used for the joy of harvest (Isaiah 9:3), the joy of a bridegroom (Isaiah 62:5), and the joy of those who find the divine word (Jeremiah 15:16). Simchah is the festive, communal joy of a people celebrating a great event together. Together, they describe something more than mere happiness: the deep, overflowing, communal exuberance that happens when something long-hoped-for finally arrives. Isaiah 35 places this joy not in heaven but on the road &mdash; on the Way of Holiness as the redeemed travel toward Zion. The journey home is itself joyful, not merely the arrival. The NT counterpart is found in the Beatitudes: &lsquo;Blessed are you who weep now, for you will laugh&rsquo; (Luke 6:21) and in Jude 24 (&lsquo;to present you before his glorious presence without fault and with great joy&rsquo;). The sason and simchah of Isaiah 35:10 is the joy of those who have been redeemed not by their own merit but by the act of the divine kinsman-redeemer &mdash; the same joy that Jesus describes in the parable of the lost son who was dead and is alive, lost and is found (Luke 15:24).",
  },
  {
    color: TEAL,
    title: "Derek: The Way of Holiness and the Redeemed Community (vv.8-10)",
    body:
      "The Hebrew word derek (way, road, path) in Isaiah 35:8 is theologically loaded. In biblical wisdom literature, the two ways (the way of the righteous and the way of the wicked) are fundamental categories of ethical existence (Psalm 1, Proverbs 4:18-19). In Isaiah, the concept of the &lsquo;way&rsquo; is also developed as the road through the wilderness on which the LORD leads his people home from exile (Isaiah 40:3, &lsquo;a voice of one calling: In the wilderness prepare the way for the LORD&rsquo;). The Way of Holiness in Isaiah 35 combines both dimensions: it is a literal road through the desert and a moral-theological path open only to those who have been redeemed. The NT development of derek is found above all in John 14:6 (&lsquo;I am the way, the truth, and the life&rsquo;) &mdash; where Jesus identifies himself as the derek, the road on which the people of God travel to the Father. The early Christian movement was called simply &lsquo;the Way&rsquo; (Acts 9:2, 19:9, 24:14) &mdash; a title that likely reflects the Isaiah 35 background, understanding the Christian community as those who travel the Way of Holiness on their return from exile to the presence of God.",
  },
  {
    color: GOLD,
    title: "Ge'ulim and Pduyim: The Redeemed and the Ransomed (vv.9-10)",
    body:
      "The two Hebrew terms ge&rsquo;ulim (the redeemed, from ga&rsquo;al, to redeem as a kinsman) and pduyim (the ransomed, from padah, to ransom by payment) are the most concentrated vocabulary of salvation in the OT. Ga&rsquo;al is the word used for the kinsman-redeemer (go&rsquo;el) of the book of Ruth &mdash; the family member with the right and responsibility to purchase the freedom of a relative who has fallen into slavery or debt. When the LORD is the go&rsquo;el, he acts as Israel&rsquo;s divine kinsman who has the right and the willingness to purchase her freedom. Padah refers specifically to the act of ransoming by payment &mdash; it was used for the redemption of firstborn sons who belonged to the LORD (Exodus 13:13-15) and for the release of a slave by payment of a price. Together, the ge&rsquo;ulim and pduyim of Isaiah 35:9-10 describe a community that has been purchased out of captivity by the action of another. NT theology develops both terms Christologically: Jesus is the go&rsquo;el, the divine kinsman who has the right and willingness to redeem; and his death is the padah, the ransom price (Mark 10:45, &lsquo;the Son of Man came to give his life as a ransom for many&rsquo;). Those who walk the Way of Holiness in Isaiah 35 are those who have been ge&rsquo;ulim and pduyim by the one who paid what they could not pay for themselves.",
  },
  {
    color: PURPLE,
    title: "Qadosh: The Holy Road and the Holy God (v.8)",
    body:
      "The Hebrew root qadosh (holy, set apart, consecrated to the divine) appears in the name of the road in Isaiah 35:8 &mdash; the &lsquo;Way of Holiness&rsquo; (derek ha-qadesh). The root is the same as the Holy One of Israel (qadosh Yisrael), one of Isaiah&rsquo;s most distinctive titles for God. The Way of Holiness is the road that participates in the character of the God who builds it. In the ancient world, roads were made and maintained by the power that controlled them; the Roman roads bore the stamp of Roman authority. The Way of Holiness bears the stamp of the Holy One &mdash; it is the road that reflects the character of the God whose presence defines it. The prohibition of the unclean and the wicked fool in verse 8 is therefore not a moral means test (are you holy enough to travel?) but a consequence of the road&rsquo;s character: it is simply not the kind of road on which the unclean can remain unclean, or the foolish can remain foolish. The holiness of the road transforms those who travel it. This connects with Isaiah 6&rsquo;s vision of the Holy One (qadosh, qadosh, qadosh) and with the NT understanding that the Holy Spirit&rsquo;s work is to make the people of God holy (hagios in Greek, the same concept) as they travel toward the holy city.",
  },
  {
    color: ROSE,
    title: "Isaiah 35 and Isaiah 40-55: The Bridge to the Book of Comfort (vv.1-10)",
    body:
      "Scholars have long noted the close literary relationship between Isaiah 35 and Isaiah 40-55 (the &lsquo;Book of Comfort&rsquo; or &lsquo;Deutero-Isaiah&rsquo; in critical scholarship). Both sections share the themes of the blossoming desert (35:1-2 and 41:18-20, 43:19-20), streams in the wilderness (35:6-7 and 43:19-20, 44:3-4), the highway through the wilderness (35:8 and 40:3, 43:16-19), and the joyful return of the redeemed (35:10 and 51:11). The verbal parallels are so close that some scholars describe Isaiah 35 as a &lsquo;bridge text&rsquo; or &lsquo;trailer&rsquo; for Isaiah 40-66 &mdash; a poetic preview of the extended theme of the second half of Isaiah. Whether one holds to single or multiple authorship of Isaiah, the canonical effect is the same: Isaiah 35 functions as the hinge between the first section of Isaiah (chapters 1-35, focused on judgment against Israel and the nations) and the second section (chapters 36-66, focused on comfort, the Servant, and the new creation). Isaiah 35 is the first glimpse of the sunrise after the long night of judgment. It announces what the rest of the book will unfold: that the God who judges is the same God who redeems, and that the desert through which the exiles have walked will be transformed into the garden through which the redeemed walk home.",
  },
];

export default function Isaiah35GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [wildernessText, setWildernessText] = useState("");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px 60px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${GREEN}22`, border: `1px solid ${GREEN}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GREEN, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            Major Prophet &middot; Isaiah 35
          </div>
          <h1 style={{ color: TEXT, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, margin: "0 0 12px", lineHeight: 1.2 }}>
            Isaiah 35: The Highway of Holiness and the Joy of the Redeemed
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: "0 0 20px", maxWidth: 680 }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 35 is the joyful counterpart to Isaiah 34&rsquo;s judgment: the desert blossoms, the blind see, the lame leap, streams break out in the wilderness, and the redeemed of the LORD return to Zion on the Way of Holiness with everlasting joy. It is one of the most beautiful and hope-filled chapters in all of Scripture &mdash; and a direct template for Jesus&rsquo;s understanding of his own ministry." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {[
              { label: "Book", value: "Isaiah", color: GREEN },
              { label: "Chapter", value: "35 (10 verses)", color: TEAL },
              { label: "Period", value: "~700 BC", color: GOLD },
              { label: "Key Word", value: "Sason / Joy", color: PURPLE },
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
                dangerouslySetInnerHTML={{ __html: "Isaiah 35 is arguably the most joyful chapter in the entire prophetic literature. It arrives immediately after the unrelenting darkness of Isaiah 34 &mdash; the cosmic judgment, the sword against Edom, the perpetual desolation &mdash; as a sudden and brilliant dawn. The contrast is deliberate and essential: Isaiah 35 is the direct counterpart of Isaiah 34, structured as its mirror image. Where 34 describes de-creation (desolation, wilderness creatures, unquenchable fire), 35 describes re-creation (a blossoming desert, healed bodies, life-giving water, and the joyful return of the redeemed)." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The chapter moves through four movements: (1) The blossoming desert that sees the glory of the LORD (vv.1&ndash;2); (2) The pastoral exhortation to strengthen the weak and fearful with the news of God&rsquo;s coming (vv.3&ndash;4); (3) The healing of the blind, deaf, lame, and mute and the transformation of the landscape into abundant water (vv.5&ndash;7); (4) The Way of Holiness on which the ge&rsquo;ulim and pduyim (the redeemed and ransomed) return to Zion with everlasting joy (vv.8&ndash;10)." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 35 is one of the most cited chapters of Isaiah in the New Testament. Jesus quotes it in Matthew 11:4-5 as the definition of his own ministry. John the Baptist&rsquo;s disciples ask &lsquo;are you the one who is to come, or should we expect someone else?&rsquo; and Jesus answers with the signs of Isaiah 35: the blind see, the lame walk, the deaf hear. He is not merely performing good deeds; he is announcing that the God of Isaiah 35 has arrived, and what Isaiah promised is now beginning." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Isaiah 35 as a Bridge to the Book of Comfort</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 35 occupies a unique structural position in the book. It follows the great judgment chapters (1-34) and precedes the historical interlude of chapters 36-39 (the account of Hezekiah and the Assyrian crisis). Chapters 40-66 then unfold the extended vision of comfort, the Servant Songs, and the new creation. Isaiah 35 anticipates chapters 40-66 so closely &mdash; in language, imagery, and theme &mdash; that it functions as a literary preview or &lsquo;trailer&rsquo; for the second half of the book." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The thematic parallels include: the blossoming desert (35:1-2 and 41:18-20, 43:19-20), the highway through the wilderness (35:8 and 40:3, 43:16-19), strengthening the weak (35:3-4 and 40:29-31), streams in the desert (35:6-7 and 43:19-20, 44:3-4), and the joyful return of the redeemed (35:10 and 51:11). This structural connection suggests that Isaiah 35 is placed intentionally at the midpoint of the book to create a pivot: judgment gives way to salvation, desolation gives way to blossoming, exile gives way to return. The reader who reaches Isaiah 35 after enduring chapters 1-34 experiences something like what the exiles experienced when they first glimpsed the road home." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Key Hebrew Words</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { word: "Sason", transliteration: "sah-SON", meaning: "Joy, gladness, exultation (the most intense form)", verse: "v.10 &mdash; everlasting joy (sason olam) will crown their heads", color: GREEN },
                  { word: "Simchah", transliteration: "sim-KHAH", meaning: "Rejoicing, festive delight, communal celebration", verse: "v.10 &mdash; gladness and joy (simchah) will overtake them", color: GOLD },
                  { word: "Derek", transliteration: "DEH-rekh", meaning: "Way, road, path, manner of life", verse: "v.8 &mdash; it will be called the Way of Holiness", color: TEAL },
                  { word: "Qadosh", transliteration: "kah-DOSH", meaning: "Holy, set apart, consecrated to God", verse: "v.8 &mdash; the Way of Holiness (derek ha-qadesh)", color: PURPLE },
                  { word: "Ge'ulim", transliteration: "geh-oo-LEEM", meaning: "The redeemed (by a kinsman-redeemer)", verse: "v.9 &mdash; only the redeemed (ge'ulim) will walk there", color: ROSE },
                  { word: "Pduyim", transliteration: "peh-doo-YEEM", meaning: "The ransomed (purchased out of captivity)", verse: "v.10 &mdash; those the LORD has rescued (pduyim) will return", color: TEAL },
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
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in Isaiah 35</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 35 weaves together five major theological threads that run through both Testaments: the overwhelming sason and simchah (joy and gladness) of the redeemed, the derek (the Way of Holiness) as both road and moral category, the ge&rsquo;ulim and pduyim (the redeemed and ransomed) as the identity of God&rsquo;s people, the qadosh (holy) character of the road and the God who builds it, and the literary relationship between Isaiah 35 and the Book of Comfort (Isaiah 40-55)." }}
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
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Isaiah 35 in the New Testament</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 35 is one of the most heavily used prophetic chapters in the New Testament. The following are the major points of connection:" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                {[
                  { step: "1", label: "Matthew 11:4-5 / Luke 7:22 &mdash; Jesus and John the Baptist", desc: "Jesus defines his ministry using Isaiah 35:5-6: the blind see, the lame walk, the deaf hear. This is not incidental; Jesus is announcing that Isaiah 35 is being fulfilled.", color: GREEN },
                  { step: "2", label: "Hebrews 12:12 &mdash; Strengthening Weak Hands and Knees", desc: "The author of Hebrews quotes Isaiah 35:3 directly, applying it to believers enduring persecution and suffering who need encouragement to keep going.", color: TEAL },
                  { step: "3", label: "Revelation 21:4 &mdash; Sorrow and Sighing Will Flee Away", desc: "John echoes Isaiah 35:10 in his vision of the new creation: 'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain.'", color: GOLD },
                  { step: "4", label: "John 14:6 &mdash; I Am the Way", desc: "Jesus's declaration 'I am the way (derek)' in John 14:6 draws on Isaiah 35:8's Way of Holiness, identifying himself as the road on which the redeemed travel to the Father.", color: PURPLE },
                  { step: "5", label: "Revelation 22:1-2 &mdash; The River of Life", desc: "Isaiah 35:6-7's streams in the desert find their ultimate fulfillment in the river of the water of life flowing from the throne of God and the Lamb in the new creation.", color: ROSE },
                ].map(item => (
                  <div key={item.step} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: BG, borderRadius: 10, padding: 14 }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${item.color}22`, border: `2px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{item.step}</div>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: item.label }} />
                      <div style={{ color: MUTED, fontSize: 13 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The density of Isaiah 35 in the NT demonstrates that the chapter was central to early Christian understanding of Jesus&rsquo;s identity and mission. He is the one in whom the desert blossoms, the blind see, the lame leap, and the redeemed travel the Way of Holiness home. Isaiah 35 is not a general description of a good future; it is a specific anticipation of the person and work of Jesus Christ." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: Isaiah 35</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 35&rsquo;s ten verses are grouped below by thematic unit. Click any section to expand the commentary. All verses 1&ndash;10 are covered in the accordion below, including the blossoming desert (vv.1-2), strengthening the weak (vv.3-4), healing of the disabled (vv.5-6a), streams in the wilderness (vv.6b-7), and the Way of Holiness with the return of the redeemed (vv.8-10)." }}
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
                {["Isaiah 35:1", "Isaiah 35:2", "Isaiah 35:3", "Isaiah 35:4", "Isaiah 35:5", "Isaiah 35:6", "Isaiah 35:8", "Isaiah 35:9", "Isaiah 35:10"].map(ref => (
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
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Application: How Isaiah 35 Shapes Christian Hope</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 35 is not merely a beautiful poem about a hypothetical future; it is the prophetic template on which Jesus understood and defined his own ministry. When John the Baptist&rsquo;s disciples asked whether Jesus was &lsquo;the one who is to come,&rsquo; Jesus answered with Isaiah 35:5-6: the blind see, the lame walk, the deaf hear (Matthew 11:4-5). He was not simply describing his activities; he was announcing that the God of Isaiah 35 had arrived, and that what the prophet had seen in vision was now beginning to happen in history." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The application of Isaiah 35 for the contemporary church is therefore Christological, eschatological, and pastoral all at once: Christological because the chapter describes the ministry of Jesus; eschatological because it describes the new creation toward which history moves; and pastoral because it addresses people with feeble hands, giving-way knees, and fearful hearts &mdash; precisely the people who are most in need of the encouragement it offers." }}
              />
            </div>

            {[
              {
                color: GREEN,
                title: "Isaiah 35 and Jesus: The Signs of the Kingdom",
                icon: "01",
                body: "Matthew 11:4-5 is one of the most important hermeneutical keys in the New Testament. Jesus answers John&rsquo;s question (&lsquo;are you the one who is to come?&rsquo;) not with a theological statement about his own identity but with an appeal to prophetic evidence: &lsquo;Go back and report to John what you hear and see: The blind receive sight, the lame walk, those who have leprosy are cleansed, the deaf hear, the dead are raised, and the good news is proclaimed to the poor.&rsquo; This is Isaiah 35:5-6 plus Isaiah 61:1. Jesus is identifying his miracles not as isolated acts of compassion but as the visible signs of a prophetically anticipated arrival: the God who would come (Isaiah 35:4) has come, and the healings are the proof. For Christian communities, this means that the miracles of the Gospels should always be read in their prophetic context: they are not merely demonstrations of divine power but announcements of the arrival of Isaiah&rsquo;s promised transformation. Every act of healing, every opened eye, every made-whole lame person in the Gospels is a living exegesis of Isaiah 35.",
              },
              {
                color: TEAL,
                title: "Strengthening Feeble Hands: The Pastoral Vocation of Isaiah 35",
                icon: "02",
                body: "The commands of Isaiah 35:3-4 &mdash; &lsquo;strengthen the feeble hands, steady the knees that give way&rsquo; &mdash; are quoted directly in Hebrews 12:12 as the pastoral task of the suffering Christian community. The author of Hebrews is writing to a community that is exhausted, tempted to give up, and struggling under the weight of persecution and social marginalization. His response is not to minimize the difficulty but to redirect their eyes: &lsquo;Fix your eyes on Jesus, the pioneer and perfecter of faith&rsquo; (Hebrews 12:2), and then to strengthen the feeble hands and steady the giving-way knees by the specific encouragement of Isaiah 35&rsquo;s promise. The pastoral application is direct: the ministry of the church includes the specific, intentional strengthening of those who are about to collapse under the weight they carry. This is not the ministry of the strong to the weak from a position of superiority; it is the ministry of those who have received Isaiah 35&rsquo;s encouragement passing it on to those who have not yet received it. The feeble hands are real; the giving-way knees are real; and the call to strengthen them is a command, not a suggestion.",
              },
              {
                color: GOLD,
                title: "The Way of Holiness and Christian Discipleship",
                icon: "03",
                body: "Isaiah 35:8&rsquo;s Way of Holiness (derek ha-qadesh) has profound implications for how the church understands discipleship. The early Christians were called &lsquo;people of the Way&rsquo; (Acts 9:2, 19:9, 24:14) &mdash; a designation that likely reflects the Isaiah 35 background. To be a disciple is to be a traveler on the Way of Holiness: not merely a believer in a set of doctrines, but a person on a journey that has a specific character (holiness, the character of the Holy One who makes the road) and a specific destination (Zion, the presence of God). The Way of Holiness is open only to the ge&rsquo;ulim and pduyim (the redeemed and ransomed) &mdash; not because it is a moral means test but because it is the road built specifically for those who have been purchased out of captivity. The practical implication: discipleship is not primarily about self-improvement but about traveling in the company of the Redeemer who both makes the road and walks it with us.",
              },
              {
                color: PURPLE,
                title: "Everlasting Joy: Holding Isaiah 35:10 Against Present Suffering",
                icon: "04",
                body: "Isaiah 35:10&rsquo;s promise &mdash; &lsquo;everlasting joy (sason olam) will crown their heads; gladness and joy will overtake them, and sorrow and sighing will flee away&rsquo; &mdash; is one of the great eschatological promises of Scripture. The word translated &lsquo;everlasting&rsquo; (olam) does not merely mean &lsquo;a long time&rsquo;; it means the fullness of time beyond which there is no more sorrow, the age in which joy is the permanent, uninterrupted condition of those in the LORD&rsquo;s presence. Paul&rsquo;s teaching that &lsquo;our present sufferings are not worth comparing with the glory that will be revealed in us&rsquo; (Romans 8:18) draws on the same conviction. The pastoral application is not to trivialize present suffering but to set it in its proper temporal context: the sorrow is real and present; the joy is also real and coming. Revelation 21:4&rsquo;s echo of Isaiah 35:10 (&lsquo;He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain&rsquo;) is the New Testament&rsquo;s definitive statement that what Isaiah promised will be fully and permanently realized.",
              },
              {
                color: ROSE,
                title: "The Blossoming Desert: Signs of the Kingdom in the Present Age",
                icon: "05",
                body: "Isaiah 35:1-2&rsquo;s vision of the desert rejoicing and blossoming has a present-tense dimension for the church: wherever the Spirit of God is at work transforming lives and communities, the desert is beginning to blossom. The church&rsquo;s ministry in situations of social desolation &mdash; in marginalized communities, in places of addiction and poverty, in environments of trauma and loss &mdash; is not merely humanitarian; it is eschatological. It is the planting of crocus flowers in the desert as signs of the coming transformation. The healing of relationships, the restoration of dignity, the greening of communities that were dust &mdash; all of these are anticipatory signs of the Isaiah 35 creation that is coming. The church does not bring the kingdom; that is the LORD&rsquo;s work on the Day of his coming. But the church does bear witness to the kingdom by acting now, in the present age, in ways that reflect the character of the age that is coming.",
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
                  "Isaiah 35:3-4 commands: 'Strengthen the feeble hands, steady the knees that give way.' Who in your community has feeble hands and giving-way knees right now? What would it look like to fulfill this command toward them this week?",
                  "Jesus quotes Isaiah 35:5-6 in Matthew 11:4-5 as the definition of his ministry. What does it mean to you personally that the healings Jesus performed were the visible signs of Isaiah 35 beginning to be fulfilled? How does this shape how you read the Gospels?",
                  "Isaiah 35:8 describes the Way of Holiness as a road open only to the ge'ulim (the redeemed). In what ways do you live as a traveler on this road &mdash; oriented toward a destination, in company with other travelers, shaped by the character of the One who made the road?",
                  "Isaiah 35:10 promises 'everlasting joy will crown their heads' and 'sorrow and sighing will flee away.' How do you hold this eschatological promise against the actual sorrows and sighing you experience in the present? What practices help you to do this honestly rather than superficially?",
                  "Isaiah 35 describes the desert blossoming and the wilderness becoming abundant water. Where in your own life, or in the life of your community, do you see signs of this blossoming beginning? Where is the ground still barren and waiting?",
                ].map((q, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${GREEN}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Wilderness to Garden Reflection Tool */}
            <div style={{ background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 8px" }}>Wilderness to Garden: A Personal Reflection Tool</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 35 describes the transformation of wilderness into garden, of desolation into fruitfulness, as the sign of the LORD&rsquo;s coming salvation. Use the space below to reflect: where in your life do you see desolation that you are longing to see transformed? Where have you already seen the desert begin to blossom? Be specific &mdash; this is not a theological exercise but a personal one." }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${GOLD}` }}>
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>Where do I see desolation becoming fruitful in my life?</div>
                  <textarea
                    value={wildernessText}
                    onChange={(e) => setWildernessText(e.target.value)}
                    placeholder="Write your reflection here..."
                    style={{
                      width: "100%",
                      minHeight: 100,
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 8,
                      color: TEXT,
                      fontSize: 14,
                      padding: "10px 12px",
                      resize: "vertical",
                      fontFamily: "inherit",
                      lineHeight: 1.6,
                      boxSizing: "border-box",
                    }}
                  />
                  {wildernessText.length > 0 && (
                    <div style={{ marginTop: 8, color: MUTED, fontSize: 12 }}>
                      {wildernessText.length} characters &mdash; your reflection is held in this session.
                    </div>
                  )}
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${GREEN}` }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Isaiah 35&rsquo;s promise for those in the wilderness</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;The desert and the parched land will be glad; the wilderness will rejoice and blossom&hellip; Water will gush forth in the wilderness and streams in the desert. The burning sand will become a pool, the thirsty ground bubbling springs.&rdquo; &mdash; Isaiah 35:1, 6b-7" }}
                  />
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${TEAL}` }}>
                  <div style={{ color: TEAL, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>The shape of transformation</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "The wilderness-to-garden transformation in Isaiah 35 does not happen through human effort or optimism; it happens because &lsquo;your God will come&rsquo; (v.4). The believer&rsquo;s role is not to manufacture the blossoming but to &lsquo;strengthen feeble hands&rsquo; and &lsquo;steady giving-way knees&rsquo; &mdash; to keep going, to keep encouraging, to keep traveling the Way of Holiness &mdash; until the One who comes arrives and does what only he can do." }}
                  />
                </div>
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Teaching Videos</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Video resources for further study and teaching on Isaiah 35.
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
