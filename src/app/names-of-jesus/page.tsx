"use client";
import { useState, useEffect } from "react";
import VerseRef from "@/components/VerseRef";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SERIF = "var(--font-cormorant, Georgia, serif)";

type Tab = "overview" | "names" | "iam" | "journal" | "videos";

const TABS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "names", label: "The Names" },
  { id: "iam", label: "The I AM Statements" },
  { id: "journal", label: "📓 My Journal" },
  { id: "videos", label: "Videos" },
];

type JesusName = {
  name: string;
  subtitle: string;
  meaning: string;
  color: string;
  verse: string;
  scripture: string;
  significance: string;
  category: string;
};

const NAMES: JesusName[] = [
  {
    name: "Jesus",
    subtitle: "Yeshua / Iēsous",
    meaning: "Yahweh Saves",
    color: GREEN,
    verse: "Matthew 1:21",
    scripture:
      "She will bear a son, and you shall call his name Jesus, for he will save his people from their sins.",
    significance:
      "The name 'Jesus' is the Greek form (Iēsous) of the Hebrew 'Yeshua' (a shortened form of Joshua), which means 'Yahweh saves' or 'the LORD is salvation.' The angel told Joseph that the child was to be named Jesus precisely because of his mission: 'he will save his people from their sins.' His very name is the gospel in a word. Unlike Joshua of old, who led Israel into an earthly land, this Jesus leads his people into salvation itself. There is no other name under heaven by which we must be saved (Acts 4:12).",
    category: "Identity & Mission",
  },
  {
    name: "Christ / Messiah",
    subtitle: "Christos / Mashiach",
    meaning: "The Anointed One",
    color: PURPLE,
    verse: "Matthew 16:16",
    scripture:
      "Simon Peter replied, 'You are the Christ, the Son of the living God.'",
    significance:
      "'Christ' is not Jesus' surname but his title. It translates the Hebrew 'Mashiach' (Messiah), meaning 'the Anointed One.' In Israel, prophets, priests, and kings were anointed with oil to set them apart for God's service. The promised Messiah would be the ultimate Anointed One — Prophet, Priest, and King in one person — who would fulfill all the hopes of Israel. When Peter confessed, 'You are the Christ,' he was declaring that Jesus is the long-awaited deliverer through whom God would establish his kingdom and rescue his people.",
    category: "Identity & Mission",
  },
  {
    name: "Immanuel",
    subtitle: "ʿImmānûʾēl",
    meaning: "God With Us",
    color: "#3B82F6",
    verse: "Matthew 1:23 (Isaiah 7:14)",
    scripture:
      "'Behold, the virgin shall conceive and bear a son, and they shall call his name Immanuel' (which means, God with us).",
    significance:
      "Immanuel, prophesied by Isaiah and fulfilled in the birth of Jesus, means 'God with us.' It is the staggering claim at the heart of the incarnation: in Jesus, God has not merely sent a message or a messenger — he has come himself. The transcendent Creator entered his creation, took on flesh, and dwelt among us. This name answers the deepest human longing: that we would not be left alone. From Eden to the New Jerusalem, the story of Scripture is God making his dwelling with his people, and Immanuel is its fulfillment.",
    category: "Identity & Mission",
  },
  {
    name: "Son of God",
    subtitle: "Huios tou Theou",
    meaning: "Divine Sonship",
    color: "#F59E0B",
    verse: "John 1:34",
    scripture: "And I have seen and have borne witness that this is the Son of God.",
    significance:
      "'Son of God' affirms the unique, eternal relationship between Jesus and the Father. He is not a created being or merely a great teacher, but the eternal Son who shares the very nature of God. At his baptism and transfiguration, the Father's voice declared, 'This is my beloved Son.' To call Jesus the Son of God is to confess his deity and his perfect unity with the Father — 'I and the Father are one' (John 10:30). Through faith in him, believers are adopted as sons and daughters of God.",
    category: "Deity & Glory",
  },
  {
    name: "Son of Man",
    subtitle: "Huios tou Anthrōpou",
    meaning: "The Heavenly Yet Human One",
    color: "#10B981",
    verse: "Daniel 7:13-14; Mark 10:45",
    scripture:
      "For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.",
    significance:
      "'Son of Man' was Jesus' favorite title for himself, used over eighty times in the Gospels. It draws on Daniel 7, where 'one like a son of man' comes with the clouds of heaven and is given everlasting dominion. The title holds together two truths: Jesus is truly human, sharing our flesh and our struggles, and yet he is the exalted heavenly figure who will judge the world and reign forever. It expresses both his lowly mission to serve and suffer, and his glorious authority as the coming King.",
    category: "Deity & Glory",
  },
  {
    name: "The Word (Logos)",
    subtitle: "Logos",
    meaning: "God's Eternal Self-Expression",
    color: "#6366F1",
    verse: "John 1:1, 14",
    scripture:
      "In the beginning was the Word, and the Word was with God, and the Word was God... And the Word became flesh and dwelt among us.",
    significance:
      "John opens his Gospel by calling Jesus 'the Word' (Logos) — the eternal self-expression of God. As our words reveal our minds, so the Son perfectly reveals the Father. The Word was with God 'in the beginning,' was himself God, and was the agent of all creation. Then, astonishingly, 'the Word became flesh.' The infinite God communicated himself fully in a human life. To see Jesus is to see what God is like; he is 'the radiance of the glory of God and the exact imprint of his nature' (Hebrews 1:3).",
    category: "Deity & Glory",
  },
  {
    name: "Lamb of God",
    subtitle: "Amnos tou Theou",
    meaning: "The Sacrifice for Sin",
    color: "#EF4444",
    verse: "John 1:29",
    scripture:
      "Behold, the Lamb of God, who takes away the sin of the world!",
    significance:
      "When John the Baptist saw Jesus, he cried, 'Behold, the Lamb of God!' The image reaches back to the Passover lamb whose blood spared Israel from death, and to the daily sacrifices of the temple. Jesus is the final, perfect sacrifice — the spotless Lamb who takes away sin not by covering it temporarily but by removing it entirely through his death. In Revelation, the slain Lamb stands at the center of heaven's worship, for he 'was slain, and by his blood ransomed people for God from every tribe and language and people and nation.'",
    category: "Sacrifice & Salvation",
  },
  {
    name: "Light of the World",
    subtitle: "To Phōs tou Kosmou",
    meaning: "The One Who Banishes Darkness",
    color: "#F59E0B",
    verse: "John 8:12",
    scripture:
      "I am the light of the world. Whoever follows me will not walk in darkness, but will have the light of life.",
    significance:
      "Jesus declared himself the Light of the World, dispelling the darkness of sin, ignorance, and death. Light reveals what is hidden, guides the lost, and gives life. In a world groping in spiritual darkness, Jesus shines as the true light that 'enlightens everyone' (John 1:9). To follow him is to walk out of darkness into his marvelous light. Those who receive his light are themselves made into lights — 'you are the light of the world' (Matthew 5:14) — reflecting his radiance to others.",
    category: "Roles & Ministry",
  },
  {
    name: "Bread of Life",
    subtitle: "Ho Artos tēs Zōēs",
    meaning: "The Sustainer of the Soul",
    color: "#10B981",
    verse: "John 6:35",
    scripture:
      "I am the bread of life; whoever comes to me shall not hunger, and whoever believes in me shall never thirst.",
    significance:
      "After feeding the five thousand, Jesus pointed beyond physical bread to himself as the Bread of Life. As manna sustained Israel in the wilderness, so Jesus sustains the soul — but unlike manna, he gives life that never ends. He satisfies the deepest hunger of the human heart, a hunger no earthly thing can fill. To 'feed' on Christ by faith is to find one's life and nourishment in him alone. He is not merely the giver of bread; he is the bread itself, broken for the life of the world.",
    category: "Roles & Ministry",
  },
  {
    name: "Good Shepherd",
    subtitle: "Ho Poimēn ho Kalos",
    meaning: "The One Who Lays Down His Life",
    color: GREEN,
    verse: "John 10:11",
    scripture:
      "I am the good shepherd. The good shepherd lays down his life for the sheep.",
    significance:
      "Jesus takes up the Old Testament image of the LORD as Israel's Shepherd (Psalm 23; Ezekiel 34) and applies it to himself. As the Good Shepherd, he knows his sheep by name, leads and protects them, seeks the lost, and — unlike hired hands who flee — lays down his life for the flock. His care is personal, sacrificial, and unbreakable: 'no one will snatch them out of my hand' (John 10:28). Where human shepherds had failed Israel, the Good Shepherd gives everything for those he loves.",
    category: "Roles & Ministry",
  },
  {
    name: "The Way, the Truth, and the Life",
    subtitle: "Hē Hodos, hē Alētheia, hē Zōē",
    meaning: "The Only Path to the Father",
    color: "#3B82F6",
    verse: "John 14:6",
    scripture:
      "I am the way, and the truth, and the life. No one comes to the Father except through me.",
    significance:
      "On the night before his death, Jesus comforted his anxious disciples with this threefold claim. He is the Way — the only road to the Father, not pointing to a path but being the path. He is the Truth — the embodiment of reality and faithfulness, not merely teaching truth but being it. He is the Life — the source of eternal and abundant life. The exclusivity of this claim ('no one comes to the Father except through me') is also its comfort: in Christ, the way home to God is fully and finally opened.",
    category: "Roles & Ministry",
  },
  {
    name: "The Vine",
    subtitle: "Hē Ampelos",
    meaning: "The Source of Fruitful Life",
    color: GREEN,
    verse: "John 15:5",
    scripture:
      "I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.",
    significance:
      "Israel was often pictured as a vine, but a fruitless one. Jesus declares himself the true Vine, the genuine source of spiritual life and fruitfulness. Branches bear fruit not by striving but by abiding — remaining vitally connected to him. Cut off from the Vine, the branch withers; joined to him, it flourishes. This name teaches the secret of the Christian life: not independent effort, but dependent union with Christ. All real fruit — love, joy, peace, and good works — flows from staying close to him.",
    category: "Roles & Ministry",
  },
  {
    name: "The Resurrection and the Life",
    subtitle: "Hē Anastasis kai hē Zōē",
    meaning: "The Conqueror of Death",
    color: PURPLE,
    verse: "John 11:25-26",
    scripture:
      "I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die.",
    significance:
      "Standing before the tomb of Lazarus, Jesus made this astonishing claim — and then proved it by raising the dead. He does not merely promise resurrection at the last day; he is the Resurrection. Life itself resides in him, and he has authority over death. For those who believe, physical death is not the end but a doorway into life with him. His own resurrection three days after the cross is the firstfruits and guarantee: because he lives, all who are united to him by faith will live also.",
    category: "Deity & Glory",
  },
  {
    name: "Alpha and Omega",
    subtitle: "To Alpha kai to Ō",
    meaning: "The First and the Last",
    color: "#EC4899",
    verse: "Revelation 22:13",
    scripture:
      "I am the Alpha and the Omega, the first and the last, the beginning and the end.",
    significance:
      "Alpha and Omega are the first and last letters of the Greek alphabet. By taking this title, Jesus claims to encompass all of history and all of reality from beginning to end. The same designation is used for God Almighty in Revelation, an unmistakable affirmation of Christ's full deity and eternity. Nothing precedes him and nothing outlasts him. He is the origin and goal of all things — the One who began the story of creation and will bring it to its appointed end.",
    category: "Deity & Glory",
  },
  {
    name: "King of Kings",
    subtitle: "Basileus Basileōn",
    meaning: "Sovereign Over All Rulers",
    color: "#F59E0B",
    verse: "Revelation 19:16",
    scripture:
      "On his robe and on his thigh he has a name written, King of kings and Lord of lords.",
    significance:
      "'King of kings' declares that Jesus reigns supreme over every earthly authority, ruler, and power. However mighty the kings of this world appear, all are subject to him. He is the rightful King who will return in glory to establish his everlasting kingdom and put down every opposing power. This title both humbles human pride and comforts the persecuted church: the One who rules over Caesar and every tyrant since is Jesus, and his kingdom will have no end.",
    category: "Kingship & Lordship",
  },
  {
    name: "Lord of Lords",
    subtitle: "Kyrios Kyriōn",
    meaning: "Master Over All Masters",
    color: "#6366F1",
    verse: "Revelation 19:16; 1 Timothy 6:15",
    scripture:
      "...the blessed and only Sovereign, the King of kings and Lord of lords.",
    significance:
      "Paired with 'King of kings,' the title 'Lord of lords' proclaims Jesus' absolute sovereignty over every master and authority in heaven and earth. The early Christians confessed 'Jesus is Lord' (Kyrios) in a world that demanded 'Caesar is Lord' — a confession that could cost them their lives. To name Jesus 'Lord of lords' is to surrender every rival allegiance and acknowledge that he alone holds ultimate authority over our lives, our loyalties, and the whole created order.",
    category: "Kingship & Lordship",
  },
  {
    name: "Prince of Peace",
    subtitle: "Sar Shalom",
    meaning: "The Bringer of Wholeness",
    color: "#3B82F6",
    verse: "Isaiah 9:6",
    scripture:
      "For to us a child is born, to us a son is given... and his name shall be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.",
    significance:
      "Isaiah prophesied the coming child who would be the 'Prince of Peace.' This is not merely the cessation of war but 'shalom' — wholeness, flourishing, and right relationship with God and others. Jesus secures this peace by reconciling sinners to God through his cross. He 'himself is our peace' (Ephesians 2:14), breaking down every wall of hostility. His kingdom is one of unending peace, and of its increase 'there will be no end' (Isaiah 9:7).",
    category: "Prophetic Titles",
  },
  {
    name: "Wonderful Counselor",
    subtitle: "Peleʾ Yoʿetz",
    meaning: "The Wise Guide",
    color: "#10B981",
    verse: "Isaiah 9:6",
    scripture:
      "...and his name shall be called Wonderful Counselor.",
    significance:
      "Also from Isaiah's prophecy of the coming Messiah, 'Wonderful Counselor' presents Jesus as the source of perfect wisdom and guidance. The word 'wonderful' carries the sense of something miraculous and beyond human comprehension. Unlike the failing counsel of earthly kings and advisors, Jesus governs and guides with flawless wisdom. He is the One in whom 'are hidden all the treasures of wisdom and knowledge' (Colossians 2:3), and he counsels his people in every trial and decision.",
    category: "Prophetic Titles",
  },
  {
    name: "Bright Morning Star",
    subtitle: "Ho Astēr ho Lampros ho Prōinos",
    meaning: "The Dawn of New Creation",
    color: "#F59E0B",
    verse: "Revelation 22:16",
    scripture:
      "I am the root and the descendant of David, the bright morning star.",
    significance:
      "The morning star rises just before dawn, heralding the end of night and the coming of day. By calling himself the 'bright morning star,' Jesus promises that the long night of sin, sorrow, and death is ending and the everlasting day is at hand. The image recalls the prophecy that 'a star shall come out of Jacob' (Numbers 24:17). For a waiting and weary church, this name is pure hope: the dawn is breaking, and Christ himself is its herald and its light.",
    category: "Prophetic Titles",
  },
  {
    name: "Lion of the Tribe of Judah",
    subtitle: "Ho Leōn ek tēs Phylēs Iouda",
    meaning: "The Triumphant Conqueror",
    color: "#EF4444",
    verse: "Revelation 5:5",
    scripture:
      "Weep no more; behold, the Lion of the tribe of Judah, the Root of David, has conquered.",
    significance:
      "This title fulfills Jacob's ancient blessing over Judah, that the scepter would not depart from his line (Genesis 49:9-10). As the Lion of Judah, Jesus is the royal, victorious King who has conquered sin, death, and Satan. Strikingly, in Revelation the Lion who has triumphed is revealed as a slain Lamb — his conquest came through sacrifice, not violence. Jesus is both the gentle Lamb and the mighty Lion: he wins by laying down his life, and he reigns in unconquerable strength.",
    category: "Kingship & Lordship",
  },
  {
    name: "Great High Priest",
    subtitle: "Archiereus Megas",
    meaning: "The Mediator Who Intercedes",
    color: PURPLE,
    verse: "Hebrews 4:14-16",
    scripture:
      "Since then we have a great high priest who has passed through the heavens, Jesus, the Son of God, let us hold fast our confession.",
    significance:
      "The book of Hebrews presents Jesus as the Great High Priest — greater than Aaron and the priests of Israel. He does not offer the blood of animals year after year but offered himself, once for all, as the perfect sacrifice. Having been tempted in every way as we are, yet without sin, he sympathizes with our weakness. Now he lives forever to intercede for us at the Father's right hand. Through him we may draw near to the throne of grace with confidence to receive mercy and help.",
    category: "Sacrifice & Salvation",
  },
];

const NAME_CATEGORIES = [
  "All",
  "Identity & Mission",
  "Deity & Glory",
  "Sacrifice & Salvation",
  "Roles & Ministry",
  "Kingship & Lordship",
  "Prophetic Titles",
];

const I_AM_STATEMENTS = [
  {
    statement: "I am the bread of life.",
    verse: "John 6:35",
    explanation:
      "Spoken after feeding the five thousand, Jesus declares that he, not perishable bread or even the manna of Moses, is the true nourishment for the soul. He satisfies the deepest spiritual hunger and gives life that never ends. To come to him and believe is to be fed forever.",
  },
  {
    statement: "I am the light of the world.",
    verse: "John 8:12",
    explanation:
      "Spoken during the Feast of Tabernacles, when great lamps illuminated the temple courts, Jesus claims to be the light that dispels all spiritual darkness. Those who follow him no longer walk in the darkness of sin and confusion but have the light of life and the guidance of God.",
  },
  {
    statement: "I am the door / the gate.",
    verse: "John 10:9",
    explanation:
      "Using the image of a sheepfold, Jesus says he is the door through which the sheep enter to find salvation, safety, and pasture. He is the only legitimate entrance into the fold of God's people. 'If anyone enters by me, he will be saved.' All other ways in are the ways of thieves and robbers.",
  },
  {
    statement: "I am the good shepherd.",
    verse: "John 10:11, 14",
    explanation:
      "Jesus contrasts himself with hired hands who abandon the sheep in danger. As the Good Shepherd, he knows his sheep intimately and lays down his life for them. This statement points directly to the cross: the Shepherd's love is proven not in words but in his willing, sacrificial death.",
  },
  {
    statement: "I am the resurrection and the life.",
    verse: "John 11:25",
    explanation:
      "Spoken to Martha before Jesus raised Lazarus, this declaration places the power over death in his own person. He does not merely promise a future resurrection; he is the Resurrection. Those who believe in him, though they die, will live, for he holds the keys of life and death.",
  },
  {
    statement: "I am the way, and the truth, and the life.",
    verse: "John 14:6",
    explanation:
      "On the eve of his death, Jesus comforts his disciples with this threefold claim and its great conclusion: 'No one comes to the Father except through me.' He is not one option among many but the exclusive and sufficient path to God — the road, the reality, and the life all in one person.",
  },
  {
    statement: "I am the true vine.",
    verse: "John 15:1, 5",
    explanation:
      "In his final extended teaching before the cross, Jesus pictures himself as the true Vine and his disciples as branches. Apart from him they can do nothing; abiding in him, they bear much fruit. This is the secret of the fruitful Christian life — dependent, continual union with Christ.",
  },
];

export default function NamesOfJesusPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_names-of-jesus_tab", "overview");
  const [category, setCategory] = usePersistedState("vine_names-of-jesus_category", "All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = NAMES.filter((n) => category === "All" || n.category === category);

  const [nojEntries, setNojEntries] = useState<{ id: string; date: string; name: string; reveals: string; prayer: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_noj_entries") ?? "[]"); } catch { return []; }
  });
  const [nojForm, setNojForm] = useState({ name: "", reveals: "", prayer: "" });
  const [nojSaved, setNojSaved] = useState(false);
  useEffect(() => { try { localStorage.setItem("vine_noj_entries", JSON.stringify(nojEntries)); } catch {} }, [nojEntries]);
  const saveNojEntry = () => {
    if (!nojForm.name.trim()) return;
    setNojEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...nojForm }, ...prev]);
    setNojForm({ name: "", reveals: "", prayer: "" });
    setNojSaved(true); setTimeout(() => setNojSaved(false), 2000);
  };
  const deleteNojEntry = (id: string) => setNojEntries(prev => prev.filter(e => e.id !== id));

  const videos = [
    {
      videoId: "Cus-z1hgAXw",
      title: "The Gospel of John — Overview",
      channel: "BibleProject",
      description:
        "An overview of John's Gospel, which centers on the identity of Jesus through his signs, titles, and the seven 'I AM' statements.",
    },
    {
      videoId: "iVwauTiyFjM",
      title: "Jesus the Messiah — Who Was Jesus?",
      channel: "BibleProject",
      description:
        "Exploring how Jesus fulfills the role of the promised Messiah, the Anointed One who is Prophet, Priest, and King.",
    },
    {
      videoId: "3Dv4-n6OYGI",
      title: "The Names and Titles of Jesus",
      channel: "Bible Teaching",
      description:
        "A survey of the many names of Jesus — Immanuel, Lamb of God, Son of Man, King of kings — and what each reveals about who he is.",
    },
    {
      videoId: "GGCF3OPWN14",
      title: "The Seven I AM Statements of Jesus",
      channel: "Theology Explained",
      description:
        "A study of the seven great 'I AM' sayings in John's Gospel and their connection to the divine name revealed to Moses.",
    },
  ];

  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <Navbar />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 60px" }}>
        {/* Hero */}
        <header style={{ textAlign: "center", padding: "56px 0 32px" }}>
          <span
            style={{
              display: "inline-block",
              border: `1px solid ${BORDER}`,
              borderRadius: 999,
              padding: "6px 16px",
              fontSize: 13,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: GREEN,
              background: CARD,
            }}
          >
            Knowing Christ
          </span>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              fontWeight: 600,
              margin: "20px 0 12px",
              lineHeight: 1.1,
            }}
          >
            The Names of Jesus
          </h1>
          <p style={{ color: MUTED, fontSize: 18, maxWidth: 700, margin: "0 auto", lineHeight: 1.6 }}>
            Scripture overflows with names and titles for Jesus Christ — each one a window into who he
            is and what he has done. From Immanuel to the Lamb of God, from the Word to the Lion of
            Judah, these names together form a portrait of the Savior of the world.
          </p>
        </header>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
          {TABS.map((t) => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? BG : TEXT,
                border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`,
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <section style={{ display: "grid", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ fontFamily: SERIF, fontSize: 30, margin: "0 0 14px" }}>One Person, Many Names</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 14px" }}>
                No single name could capture the fullness of Jesus Christ. So Scripture gives us many —
                each revealing a different facet of his glory. Some describe his identity and mission
                (Jesus, Christ, Immanuel). Some declare his deity and eternal glory (the Word, Son of God,
                Alpha and Omega). Some unfold his saving work (Lamb of God, Great High Priest). Others
                portray his ministry to us (Good Shepherd, Bread of Life, the Vine), and still others his
                sovereign reign (King of kings, Lion of Judah).
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>
                Taken together, these names tell the whole gospel. The eternal Word became flesh as
                Immanuel; the Lamb of God was slain to take away sin; the Resurrection and the Life rose
                from the grave; and the King of kings now reigns and will return as the Bright Morning Star.
                To meditate on the names of Jesus is to walk slowly through the good news.
              </p>
            </div>

            <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {[
                { t: "His Deity", d: "Son of God, the Word, Alpha and Omega — names that affirm Jesus is fully God, eternal, and the exact imprint of the Father's nature.", c: PURPLE },
                { t: "His Humanity", d: "Son of Man, Immanuel — names that affirm Jesus truly took on flesh, sharing our human nature to redeem it from within.", c: GREEN },
                { t: "His Saving Work", d: "Jesus ('Yahweh saves'), Lamb of God, Great High Priest — names that proclaim how he rescues sinners through his life, death, and intercession.", c: "#F59E0B" },
                { t: "His Reign", d: "Christ, King of kings, Lord of lords, Lion of Judah — names that declare his sovereign rule over all creation, now and forever.", c: "#3B82F6" },
              ].map((b) => (
                <div key={b.t} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                  <h3 style={{ fontFamily: SERIF, fontSize: 21, margin: "0 0 8px", color: b.c }}>{b.t}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: 15 }}>{b.d}</p>
                </div>
              ))}
            </div>

            <blockquote
              style={{
                fontFamily: SERIF,
                fontSize: 24,
                fontStyle: "italic",
                textAlign: "center",
                color: TEXT,
                borderLeft: `3px solid ${GREEN}`,
                padding: "8px 24px",
                margin: "8px auto",
                maxWidth: 780,
                lineHeight: 1.5,
              }}
            >
              &ldquo;Therefore God has highly exalted him and bestowed on him the name that is above every
              name, so that at the name of Jesus every knee should bow.&rdquo;
              <footer style={{ fontSize: 16, color: MUTED, marginTop: 10, fontStyle: "normal" }}>
                — Philippians 2:9-10
              </footer>
            </blockquote>
          </section>
        )}

        {/* The Names */}
        {activeTab === "names" && (
          <section>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
              {NAME_CATEGORIES.map((c) => (
                <button type="button"
                  key={c}
                  onClick={() => setCategory(c)}
                  style={{
                    background: category === c ? PURPLE : "transparent",
                    color: category === c ? TEXT : MUTED,
                    border: `1px solid ${category === c ? PURPLE : BORDER}`,
                    borderRadius: 999,
                    padding: "7px 16px",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {c}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gap: 18 }}>
              {filtered.map((n) => {
                const open = selected === n.name;
                return (
                  <div
                    key={n.name}
                    style={{
                      background: CARD,
                      border: `1px solid ${open ? n.color : BORDER}`,
                      borderRadius: 14,
                      padding: 24,
                      cursor: "pointer",
                      transition: "border-color 0.2s",
                    }}
                    onClick={() => setSelected(open ? null : n.name)}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
                      <div>
                        <h3 style={{ fontFamily: SERIF, fontSize: 27, margin: 0, color: n.color }}>{n.name}</h3>
                        <p style={{ color: TEXT, margin: "6px 0 2px", fontSize: 16, fontWeight: 600 }}>{n.meaning}</p>
                        <p style={{ color: MUTED, margin: 0, fontSize: 14, fontStyle: "italic" }}>{n.subtitle}</p>
                      </div>
                      <span style={{ color: MUTED, fontSize: 13, whiteSpace: "nowrap" }}><VerseRef reference={n.verse} /></span>
                    </div>

                    {open && (
                      <div style={{ marginTop: 18, borderTop: `1px solid ${BORDER}`, paddingTop: 18 }}>
                        <p
                          style={{
                            fontFamily: SERIF,
                            fontSize: 19,
                            fontStyle: "italic",
                            color: TEXT,
                            lineHeight: 1.5,
                            margin: "0 0 16px",
                            borderLeft: `3px solid ${n.color}`,
                            paddingLeft: 16,
                          }}
                        >
                          &ldquo;{n.scripture}&rdquo;
                          <span style={{ display: "block", fontSize: 14, color: MUTED, marginTop: 6, fontStyle: "normal" }}>
                            — {n.verse}
                          </span>
                        </p>
                        <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{n.significance}</p>
                      </div>
                    )}
                    {!open && (
                      <p style={{ color: MUTED, fontSize: 13, marginTop: 14, marginBottom: 0 }}>Click to read the significance &rarr;</p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* I AM Statements */}
        {activeTab === "iam" && (
          <section style={{ display: "grid", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ fontFamily: SERIF, fontSize: 30, margin: "0 0 14px" }}>The &ldquo;I AM&rdquo; Statements of John</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 14px" }}>
                In John's Gospel, Jesus makes seven great declarations beginning with the words &ldquo;I am&rdquo;
                (Greek: <em>egō eimi</em>), each followed by a vivid image. These are not random metaphors. The
                phrase &ldquo;I AM&rdquo; deliberately echoes the divine name God revealed to Moses at the burning
                bush: &ldquo;I AM WHO I AM&rdquo; (Exodus 3:14). By taking this name on his own lips, Jesus claims
                nothing less than the identity of Yahweh himself.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>
                Indeed, on one occasion Jesus said simply, &ldquo;Before Abraham was, I am&rdquo; (John 8:58) — and
                his hearers immediately picked up stones to kill him, because they understood he was claiming
                to be God. The seven 'I am' sayings unfold what it means that the great I AM has come to dwell
                among us as Savior, Shepherd, Bread, Light, Door, Life, and Vine.
              </p>
            </div>

            <div style={{ display: "grid", gap: 16 }}>
              {I_AM_STATEMENTS.map((s, i) => (
                <div key={s.verse} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, borderLeft: `4px solid ${GREEN}` }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                    <span style={{ color: PURPLE, fontWeight: 700, fontSize: 14 }}>{i + 1}.</span>
                    <h3 style={{ fontFamily: SERIF, fontSize: 24, margin: 0, color: TEXT, fontStyle: "italic" }}>
                      &ldquo;{s.statement}&rdquo;
                    </h3>
                    <span style={{ color: MUTED, fontSize: 13 }}><VerseRef reference={s.verse} /></span>
                  </div>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: "12px 0 0" }}>{s.explanation}</p>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ fontFamily: SERIF, fontSize: 26, margin: "0 0 14px" }}>The Absolute &ldquo;I AM&rdquo;</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>
                Beyond the seven sayings with predicates, John records moments where Jesus uses &ldquo;I am&rdquo;
                absolutely, with no completing image — most strikingly in John 8:58: &ldquo;Truly, truly, I say
                to you, before Abraham was, I am.&rdquo; And when the soldiers came to arrest him in the garden
                and he said &ldquo;I am he,&rdquo; they drew back and fell to the ground (John 18:6). In these
                moments the curtain is pulled fully back: the man standing before them is the eternal,
                self-existent God who spoke to Moses from the fire.
              </p>
            </div>
          </section>
        )}

        {/* Videos */}
        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Names of Jesus Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20 }}>Record which names of Jesus you're meditating on and how they're shaping your faith.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                <input value={nojForm.name} onChange={e => setNojForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Which name of Jesus? (e.g. Good Shepherd, Lamb of God)" aria-label="Name of Jesus"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                <textarea value={nojForm.reveals} onChange={e => setNojForm(f => ({ ...f, reveals: e.target.value }))}
                  placeholder="What does this name reveal about who Jesus is?" aria-label="Reveals"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, minHeight: 80, resize: "vertical", fontFamily: "inherit" }} />
                <input value={nojForm.prayer} onChange={e => setNojForm(f => ({ ...f, prayer: e.target.value }))}
                  placeholder="How does this name shape your prayer? (optional)" aria-label="Prayer"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                <button type="button" onClick={saveNojEntry}
                  style={{ padding: "10px 20px", background: GREEN, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", alignSelf: "flex-start" }}>
                  {nojSaved ? "Saved ✓" : "Save Entry"}
                </button>
              </div>
              {nojEntries.length === 0 && <p style={{ color: MUTED, fontSize: 14 }}>No entries yet. Record your first reflection above.</p>}
              {nojEntries.map(e => (
                <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 16, marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                    <button type="button" onClick={() => deleteNojEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 14 }}>✕</button>
                  </div>
                  <p style={{ color: GREEN, fontWeight: 700, fontSize: 14, margin: "0 0 4px" }}>{e.name}</p>
                  {e.reveals && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: "0 0 4px" }}>{e.reveals}</p>}
                  {e.prayer && <p style={{ color: PURPLE, fontSize: 13, fontStyle: "italic", margin: 0 }}>🙏 {e.prayer}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <section style={{ display: "grid", gap: 22, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {videos.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: 20 }}>
                  <h3 style={{ fontFamily: SERIF, fontSize: 20, margin: "0 0 6px" }}>{v.title}</h3>
                  <p style={{ color: GREEN, fontSize: 13, margin: "0 0 10px", fontWeight: 600 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
