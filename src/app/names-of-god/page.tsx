"use client";
import { useState } from "react";
import VerseRef from "@/components/VerseRef";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SERIF = "var(--font-cormorant, Georgia, serif)";

type Tab = "overview" | "names" | "praying" | "videos";

const TABS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "names", label: "The Names" },
  { id: "praying", label: "Praying the Names" },
  { id: "videos", label: "Videos" },
];

type GodName = {
  name: string;
  translit: string;
  hebrew: string;
  meaning: string;
  pronunciation: string;
  color: string;
  verse: string;
  scripture: string;
  significance: string;
  category: string;
};

const NAMES: GodName[] = [
  {
    name: "Elohim",
    translit: "ʾĔlōhîm",
    hebrew: "אֱלֹהִים",
    meaning: "God — the Strong Creator",
    pronunciation: "el-oh-HEEM",
    color: PURPLE,
    verse: "Genesis 1:1",
    scripture: "In the beginning, God (Elohim) created the heavens and the earth.",
    significance:
      "Elohim is the first name of God in the Bible, appearing in the very first verse of Genesis. It is a plural form (the -im ending is masculine plural in Hebrew), yet it almost always takes singular verbs — a grammatical mystery that many Christians have seen as an early hint of the Trinity. Elohim emphasizes God's power, sovereignty, and majesty as the Creator of all things. The root suggests strength and might. By calling God Elohim, Scripture declares that the One who made the cosmos is infinitely powerful and supreme over every created thing — including the false 'gods' of the nations, which the same word can be used to mock.",
    category: "El Names",
  },
  {
    name: "Yahweh (YHWH)",
    translit: "YHWH / Yahweh",
    hebrew: "יְהוָה",
    meaning: "I AM WHO I AM — The Self-Existent One",
    pronunciation: "YAH-weh",
    color: GREEN,
    verse: "Exodus 3:14-15",
    scripture:
      "God said to Moses, 'I AM WHO I AM.' And he said, 'Say this to the people of Israel: I AM has sent me to you.'",
    significance:
      "Yahweh is the personal, covenant name of God — the name revealed to Moses at the burning bush. Written with four Hebrew consonants (the Tetragrammaton, YHWH), it is connected to the verb 'to be' (hayah), meaning 'I AM' or 'He who causes to be.' It declares God's eternal self-existence: he depends on nothing and no one for his being. Out of deep reverence, Jewish tradition stopped pronouncing the name aloud, substituting 'Adonai' (Lord) when reading Scripture. This is why most English Bibles render YHWH as 'the LORD' in small capitals. Yahweh is not a generic deity but the God who knows his people by name and binds himself to them in covenant love.",
    category: "The Covenant Name",
  },
  {
    name: "Adonai",
    translit: "ʾĂdōnāy",
    hebrew: "אֲדֹנָי",
    meaning: "Lord, Master, Sovereign",
    pronunciation: "ah-doh-NIGH",
    color: "#3B82F6",
    verse: "Psalm 8:1",
    scripture: "O LORD (Yahweh), our Lord (Adonai), how majestic is your name in all the earth!",
    significance:
      "Adonai is the plural form of 'adon' (lord or master), used as a title of respect and sovereignty. Where Yahweh is the personal name, Adonai expresses relationship: God is our Master, and we are his servants. The name carries the idea of ownership and authority — a master who provides for, directs, and is responsible for those under him. To call God 'Adonai' is to surrender the right of self-rule and confess that he holds rightful lordship over our lives. It became the spoken substitute for the unspeakable name Yahweh, so that the two names are deeply intertwined in worship.",
    category: "Lordship",
  },
  {
    name: "El Shaddai",
    translit: "ʾĒl Šadday",
    hebrew: "אֵל שַׁדַּי",
    meaning: "God Almighty — The All-Sufficient One",
    pronunciation: "el shah-DIGH",
    color: "#EF4444",
    verse: "Genesis 17:1",
    scripture:
      "I am God Almighty (El Shaddai); walk before me, and be blameless.",
    significance:
      "El Shaddai is the name by which God revealed himself to Abraham when he established the covenant of circumcision and promised that Abraham would be the father of many nations. 'Shaddai' may derive from a word for 'mountain' (the overpowering, immovable One) or from a root meaning 'breast' (the One who nourishes and satisfies). Hence the traditional translation 'God Almighty' alongside the rich sense of 'the All-Sufficient One.' El Shaddai is the God who is mighty enough to fulfill impossible promises — bringing life from Sarah's barren womb — and tender enough to supply every need of his people. He is both all-powerful and all-providing.",
    category: "El Names",
  },
  {
    name: "El Elyon",
    translit: "ʾĒl ʿElyôn",
    hebrew: "אֵל עֶלְיוֹן",
    meaning: "God Most High",
    pronunciation: "el el-YONE",
    color: "#F59E0B",
    verse: "Genesis 14:18-20",
    scripture:
      "Melchizedek... was priest of God Most High (El Elyon). And he blessed him and said, 'Blessed be Abram by God Most High, Possessor of heaven and earth.'",
    significance:
      "El Elyon means 'God Most High' — the supreme, exalted ruler over all. It first appears when Melchizedek, king of Salem, blesses Abram. The name asserts God's absolute supremacy: he is higher than all other powers, gods, kings, and authorities. Where the surrounding nations worshiped a pantheon of regional deities, El Elyon declares one God who reigns over heaven and earth and possesses everything in them. The name reappears throughout the Psalms and is sounded again in Nebuchadnezzar's confession in Daniel, where even a pagan emperor must bow to the Most High who 'rules the kingdom of men.'",
    category: "El Names",
  },
  {
    name: "El Roi",
    translit: "ʾĒl Rŏʾî",
    hebrew: "אֵל רֳאִי",
    meaning: "The God Who Sees Me",
    pronunciation: "el roh-EE",
    color: "#EC4899",
    verse: "Genesis 16:13",
    scripture:
      "She called the name of the LORD who spoke to her, 'You are a God of seeing (El Roi),' for she said, 'Truly here I have seen him who looks after me.'",
    significance:
      "El Roi is a name given to God not by a patriarch or prophet, but by Hagar — an Egyptian slave woman, pregnant, mistreated, and fleeing alone into the wilderness. There the angel of the LORD found her, and she responded by naming God 'the God who sees me.' This is the only place in Scripture where a human being gives God a name. The name is a tender comfort: the forgotten, the marginalized, the overlooked, and the suffering are seen by God. He is not a distant deity but the One whose eyes are upon the lonely and the lowly. No tear falls unnoticed before El Roi.",
    category: "El Names",
  },
  {
    name: "El Olam",
    translit: "ʾĒl ʿÔlām",
    hebrew: "אֵל עוֹלָם",
    meaning: "The Everlasting God",
    pronunciation: "el oh-LAHM",
    color: "#6366F1",
    verse: "Genesis 21:33",
    scripture:
      "Abraham planted a tamarisk tree in Beersheba and called there on the name of the LORD, the Everlasting God (El Olam).",
    significance:
      "El Olam means 'the Everlasting God' or 'the God of eternity.' 'Olam' speaks of the distant, unbounded horizon — time stretching beyond what we can see in both directions. Abraham called on this name after settling a covenant dispute over a well, planting a tree as a sign of permanence. The God who endures forever is not limited by the brevity of human life or the rise and fall of nations. He was before all things and will outlast all things. When everything around us is fading and temporary, El Olam is the unchanging constant — 'from everlasting to everlasting, you are God' (Psalm 90:2).",
    category: "El Names",
  },
  {
    name: "Yahweh Jireh",
    translit: "Yahweh Yirʾeh",
    hebrew: "יְהוָה יִרְאֶה",
    meaning: "The LORD Will Provide",
    pronunciation: "yah-weh yir-EH",
    color: GREEN,
    verse: "Genesis 22:14",
    scripture:
      "So Abraham called the name of that place, 'The LORD will provide (Yahweh Jireh)'; as it is said to this day, 'On the mount of the LORD it shall be provided.'",
    significance:
      "Yahweh Jireh — 'the LORD will provide' (literally, 'the LORD will see to it') — is the name Abraham gave to Mount Moriah after God provided a ram to take the place of Isaac on the altar. At the moment of greatest testing, when obedience seemed to demand the unthinkable, God supplied a substitute. The Hebrew root for 'provide' is the same as 'see' — God's seeing and his providing are one. He sees the need before we do and provides accordingly. Christians have long seen this as a foreshadowing of the cross: on the same range of hills, God would one day provide his own Son as the Lamb, the ultimate substitute.",
    category: "Yahweh Compound Names",
  },
  {
    name: "Yahweh Rapha",
    translit: "Yahweh Rōp̄ʾeḵā",
    hebrew: "יְהוָה רֹפְאֶךָ",
    meaning: "The LORD Who Heals",
    pronunciation: "yah-weh rah-FAH",
    color: "#10B981",
    verse: "Exodus 15:26",
    scripture:
      "I am the LORD, your healer (Yahweh Rapha).",
    significance:
      "Yahweh Rapha — 'the LORD who heals' — was revealed shortly after the Exodus, when the people came to the bitter waters of Marah and God made them sweet. He declared that he is the One who heals his people, in body and in soul. The Hebrew 'rapha' covers healing, mending, restoring, and making whole. Throughout Scripture God heals diseases, but more deeply he heals the brokenness of sin and the wounds of the heart — 'he heals the brokenhearted and binds up their wounds' (Psalm 147:3). Healing flows from his covenant character: he is not merely able to heal, he is by nature the Healer.",
    category: "Yahweh Compound Names",
  },
  {
    name: "Yahweh Nissi",
    translit: "Yahweh Nissî",
    hebrew: "יְהוָה נִסִּי",
    meaning: "The LORD My Banner",
    pronunciation: "yah-weh nee-SEE",
    color: "#EF4444",
    verse: "Exodus 17:15",
    scripture:
      "And Moses built an altar and called the name of it, The LORD Is My Banner (Yahweh Nissi).",
    significance:
      "Yahweh Nissi — 'the LORD my Banner' — was the name Moses gave to the altar he built after Israel's victory over the Amalekites. As long as Moses held up his hands, Israel prevailed; the battle belonged to the LORD. A 'banner' (nes) was the standard or rallying point lifted high so an army could gather around it and march to victory. To call God our Banner is to confess that he is the One we rally to, the One under whose authority we fight, and the One who secures the victory. Our hope in spiritual warfare is not our own strength but the LORD lifted high over us.",
    category: "Yahweh Compound Names",
  },
  {
    name: "Yahweh Shalom",
    translit: "Yahweh Šālôm",
    hebrew: "יְהוָה שָׁלוֹם",
    meaning: "The LORD Is Peace",
    pronunciation: "yah-weh shah-LOME",
    color: "#3B82F6",
    verse: "Judges 6:24",
    scripture:
      "Then Gideon built an altar there to the LORD and called it, The LORD Is Peace (Yahweh Shalom).",
    significance:
      "Yahweh Shalom — 'the LORD is peace' — was the name Gideon gave to the altar he built after encountering the angel of the LORD and fearing he would die for having seen God face to face. Instead of death, he received the word, 'Peace be to you. Do not fear.' 'Shalom' means far more than the absence of conflict — it is wholeness, completeness, well-being, and right relationship with God. In a time of oppression and fear, God revealed that he himself is the source of true peace. This peace is fully realized in Christ, who 'himself is our peace' (Ephesians 2:14).",
    category: "Yahweh Compound Names",
  },
  {
    name: "Yahweh Raah",
    translit: "Yahweh Rōʿî",
    hebrew: "יְהוָה רֹעִי",
    meaning: "The LORD My Shepherd",
    pronunciation: "yah-weh RAH-ah",
    color: GREEN,
    verse: "Psalm 23:1",
    scripture: "The LORD is my shepherd (Yahweh Raah); I shall not want.",
    significance:
      "Yahweh Raah — 'the LORD my Shepherd' — opens the most beloved psalm in Scripture. A shepherd in the ancient world led, fed, guided, protected, and personally knew each sheep. To call God our Shepherd is to confess our dependence and his tender, attentive care. He leads us to green pastures and still waters, restores our souls, walks with us through the valley of the shadow of death, and pursues us with goodness and mercy all our days. Jesus takes up this name and applies it to himself: 'I am the good shepherd. The good shepherd lays down his life for the sheep' (John 10:11).",
    category: "Yahweh Compound Names",
  },
  {
    name: "Yahweh Tsidkenu",
    translit: "Yahweh Ṣidqēnû",
    hebrew: "יְהוָה צִדְקֵנוּ",
    meaning: "The LORD Our Righteousness",
    pronunciation: "yah-weh tsid-KAY-noo",
    color: "#F59E0B",
    verse: "Jeremiah 23:6",
    scripture:
      "In his days Judah will be saved, and Israel will dwell securely. And this is the name by which he will be called: 'The LORD is our righteousness (Yahweh Tsidkenu).'",
    significance:
      "Yahweh Tsidkenu — 'the LORD our Righteousness' — appears in Jeremiah's prophecy of the coming righteous King, the Branch from David's line. In a nation corrupted by unjust rulers, God promised a King whose very name would declare that righteousness comes from the LORD, not from human effort. This name strikes at the heart of the gospel: we have no righteousness of our own, but God provides his righteousness for us. In Christ, 'the LORD our Righteousness' becomes our justification — 'God made him to be sin who knew no sin, so that in him we might become the righteousness of God' (2 Corinthians 5:21).",
    category: "Yahweh Compound Names",
  },
  {
    name: "Yahweh Shammah",
    translit: "Yahweh Šāmmāh",
    hebrew: "יְהוָה שָׁמָּה",
    meaning: "The LORD Is There",
    pronunciation: "yah-weh SHAM-mah",
    color: "#EC4899",
    verse: "Ezekiel 48:35",
    scripture:
      "And the name of the city from that time on shall be, The LORD Is There (Yahweh Shammah).",
    significance:
      "Yahweh Shammah — 'the LORD is there' — is the closing word of the book of Ezekiel, the new name of the restored, future Jerusalem. After the agony of exile, where the people felt abandoned and the glory of God had departed the temple, the vision ends with the promise that God will dwell with his people once more. This is the great trajectory of all Scripture: God making his home with humanity. It points forward to the incarnation, to the indwelling Spirit, and ultimately to the New Jerusalem, where 'the dwelling place of God is with man' (Revelation 21:3). His presence is the final hope.",
    category: "Yahweh Compound Names",
  },
  {
    name: "Yahweh Sabaoth",
    translit: "Yahweh Ṣəḇāʾôṯ",
    hebrew: "יְהוָה צְבָאוֹת",
    meaning: "The LORD of Hosts / Armies",
    pronunciation: "yah-weh sah-bah-OHTH",
    color: "#6366F1",
    verse: "1 Samuel 17:45",
    scripture:
      "You come to me with a sword and with a spear and with a javelin, but I come to you in the name of the LORD of hosts (Yahweh Sabaoth), the God of the armies of Israel.",
    significance:
      "Yahweh Sabaoth — 'the LORD of hosts' or 'the LORD of armies' — is one of the most frequent names of God in the prophets and psalms. 'Hosts' refers to vast assembled armies: the angelic armies of heaven, the stars, and the forces of Israel. The name declares God's command over every power in heaven and on earth. David invokes it as he faces Goliath, confessing that the battle is the LORD's. When God's people feel outnumbered and overwhelmed, this name reminds them that the One who fights for them commands innumerable hosts. 'The LORD of hosts is with us; the God of Jacob is our fortress' (Psalm 46:7).",
    category: "Yahweh Compound Names",
  },
];

const NAME_CATEGORIES = ["All", "El Names", "The Covenant Name", "Lordship", "Yahweh Compound Names"];

const PRAYERS = [
  {
    name: "Elohim — The Mighty Creator",
    prompt:
      "Elohim, you spoke and the universe came into being. The same power that flung the stars into place is the power that sustains my life this moment. I worship you as Creator and confess that I am your creature, dependent on you for every breath.",
  },
  {
    name: "Yahweh — The I AM",
    prompt:
      "Yahweh, you are the eternal I AM — self-existent, dependent on nothing. You knew me before I was, and you will be faithful long after my days are done. Anchor my restless heart in your unchanging being.",
  },
  {
    name: "Adonai — My Lord and Master",
    prompt:
      "Adonai, you are my rightful Lord. I surrender the illusion that I am in charge of my own life. Take the throne. I am your servant; lead me, and I will follow.",
  },
  {
    name: "El Shaddai — God Almighty and All-Sufficient",
    prompt:
      "El Shaddai, you are mighty enough to do the impossible and tender enough to supply my every need. Where I am barren, bring life. Where I am empty, fill me. You are more than enough.",
  },
  {
    name: "El Roi — The God Who Sees Me",
    prompt:
      "El Roi, when I feel invisible and forgotten, you see me. You saw Hagar in the wilderness, and you see me now in my loneliness. Thank you that no part of my story escapes your loving gaze.",
  },
  {
    name: "Yahweh Jireh — The LORD Will Provide",
    prompt:
      "Yahweh Jireh, you saw the need before I did, and you have already made provision. Free me from anxious striving. Help me trust that you will see to what I cannot, just as you provided the Lamb.",
  },
  {
    name: "Yahweh Rapha — The LORD Who Heals",
    prompt:
      "Yahweh Rapha, you are the Healer. I bring my wounds — of body, of mind, of heart, of memory — to you. Bind up what is broken in me, and make me whole according to your perfect wisdom and timing.",
  },
  {
    name: "Yahweh Shalom — The LORD Is Peace",
    prompt:
      "Yahweh Shalom, in a world of conflict and fear, you are my peace. Quiet the storm within me. Reconcile what is fractured. Let your wholeness rule in my heart through Christ, who is my peace.",
  },
  {
    name: "Yahweh Raah — The LORD My Shepherd",
    prompt:
      "Yahweh Raah, lead me to still waters and restore my soul. When I walk through the valley of shadow, let me feel your rod and staff. I will not fear, for you are with me, my good Shepherd.",
  },
  {
    name: "Yahweh Sabaoth — The LORD of Hosts",
    prompt:
      "Yahweh Sabaoth, when I am surrounded and outnumbered, I remember that you command the armies of heaven. The battle is yours. Fight for me, and let me stand still and see your salvation.",
  },
];

export default function NamesOfGodPage() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = NAMES.filter((n) => category === "All" || n.category === category);

  const videos = [
    {
      videoId: "ZK3oapeJFII",
      title: "The Names of God — Who Is God?",
      channel: "BibleProject",
      description:
        "An overview of how the Bible reveals God's character through his names, exploring the meaning of Yahweh and the divine identity.",
    },
    {
      videoId: "Qs9M9Z9zKsk",
      title: "YHWH / The Name of God",
      channel: "BibleProject",
      description:
        "A study of the Tetragrammaton (YHWH), why it is rendered 'the LORD,' and what it teaches us about God's eternal, covenant character.",
    },
    {
      videoId: "f5lDFtFA1HI",
      title: "El Shaddai and the Names of God in Genesis",
      channel: "Bible Study",
      description:
        "An exploration of the names God revealed to the patriarchs — El Shaddai, El Elyon, El Roi — and what they meant for Israel's faith.",
    },
    {
      videoId: "Tt8Ga-Oz3Ng",
      title: "Yahweh: The Personal Name of God",
      channel: "Theology Explained",
      description:
        "A teaching on the covenant name Yahweh and the compound 'Jehovah' names — Jireh, Rapha, Nissi, Shalom — and their significance for worship.",
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
            Knowing God
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
            The Names of God
          </h1>
          <p style={{ color: MUTED, fontSize: 18, maxWidth: 680, margin: "0 auto", lineHeight: 1.6 }}>
            In the ancient world, a name was never a mere label — it revealed the very character of
            the one who bore it. As God unveiled himself to his people through the Old Testament, he
            disclosed his nature through a succession of names. To learn them is to learn who God is.
          </p>
        </header>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 36,
          }}
        >
          {TABS.map((t) => (
            <button
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
              <h2 style={{ fontFamily: SERIF, fontSize: 30, margin: "0 0 14px" }}>
                Why God's Names Matter
              </h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 14px" }}>
                Throughout the Hebrew Scriptures, God does not simply tell us facts about himself — he
                reveals himself in moments of need, deliverance, and covenant. Each name was given in a
                particular situation: at the burning bush, on a mountain of testing, by a well in the
                desert, in the midst of battle. To know the names of God is to walk through the story of
                how he has met his people across the centuries.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>
                The names fall into recognizable families. There are the <strong style={{ color: TEXT }}>El names</strong> —
                Elohim, El Shaddai, El Elyon, El Roi, El Olam — built on the ancient Semitic word for
                God, emphasizing power, majesty, and sufficiency. There is the supreme{" "}
                <strong style={{ color: TEXT }}>covenant name, Yahweh (YHWH)</strong>, revealed to Moses
                as the self-existent I AM. And there are the rich{" "}
                <strong style={{ color: TEXT }}>Yahweh compound names</strong> — Jireh, Rapha, Nissi,
                Shalom, Raah, Tsidkenu, Shammah, Sabaoth — each unfolding a facet of how the covenant God
                cares for his people.
              </p>
            </div>

            <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
              {[
                {
                  t: "El — The Strong One",
                  d: "The root 'El' is the oldest Semitic word for deity, expressing strength and power. Compounded with descriptions (Shaddai, Elyon, Roi, Olam), it paints God as Almighty, Most High, the One who sees, and the Everlasting.",
                  c: PURPLE,
                },
                {
                  t: "Yahweh — The I AM",
                  d: "The Tetragrammaton YHWH is God's personal, covenant name, tied to the verb 'to be.' Out of reverence it was not spoken aloud, and English Bibles render it 'the LORD' in small capitals.",
                  c: GREEN,
                },
                {
                  t: "Adonai — The Lord",
                  d: "A title of sovereignty and ownership meaning Master. It became the spoken substitute for the unutterable name Yahweh and expresses our relationship as servants to our rightful Lord.",
                  c: "#3B82F6",
                },
              ].map((b) => (
                <div key={b.t} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                  <h3 style={{ fontFamily: SERIF, fontSize: 21, margin: "0 0 8px", color: b.c }}>{b.t}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: 15 }}>{b.d}</p>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ fontFamily: SERIF, fontSize: 28, margin: "0 0 14px" }}>A Word on Pronunciation</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 14px" }}>
                The four consonants YHWH were written without vowels in ancient Hebrew. When Jewish readers
                came to the name in Scripture, they said 'Adonai' (Lord) instead, out of reverence. Later
                scribes added the vowel points of 'Adonai' to YHWH as a reminder to say the substitute — and
                this hybrid produced the form 'Jehovah' in older English translations. Modern scholars
                reconstruct the original pronunciation as 'Yahweh.'
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>
                This is why the compound names are sometimes seen written 'Jehovah-Jireh' and sometimes
                'Yahweh Yireh' — they are the same name. Whatever the form, the point is the same: the
                eternal covenant God has made himself known.
              </p>
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
                maxWidth: 760,
                lineHeight: 1.5,
              }}
            >
              &ldquo;The name of the LORD is a strong tower; the righteous man runs into it and is
              safe.&rdquo;
              <footer style={{ fontSize: 16, color: MUTED, marginTop: 10, fontStyle: "normal" }}>
                — Proverbs 18:10
              </footer>
            </blockquote>
          </section>
        )}

        {/* The Names */}
        {activeTab === "names" && (
          <section>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
              {NAME_CATEGORIES.map((c) => (
                <button
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
                        <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
                          <h3 style={{ fontFamily: SERIF, fontSize: 27, margin: 0, color: n.color }}>{n.name}</h3>
                          <span style={{ fontFamily: SERIF, fontSize: 24, color: TEXT }}>{n.hebrew}</span>
                        </div>
                        <p style={{ color: TEXT, margin: "6px 0 2px", fontSize: 16, fontWeight: 600 }}>{n.meaning}</p>
                        <p style={{ color: MUTED, margin: 0, fontSize: 14 }}>
                          {n.translit} &middot; pronounced <em>{n.pronunciation}</em>
                        </p>
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

        {/* Praying the Names */}
        {activeTab === "praying" && (
          <section style={{ display: "grid", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ fontFamily: SERIF, fontSize: 30, margin: "0 0 14px" }}>Praying the Names of God</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 14px" }}>
                The names of God are not merely doctrines to study — they are invitations to worship. For
                centuries, believers have prayed through the names of God as a way of grounding their
                requests in his revealed character. When you are afraid, you can call on Yahweh Shalom. When
                you are in need, Yahweh Jireh. When you feel unseen, El Roi. To pray the names is to address
                God for who he truly is, and to let his character reshape what you ask and how you trust.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>
                Use the prayers below as starting points. Pause on each name, read the prayer slowly, and
                then continue in your own words. Let each name lift your eyes from your circumstances to the
                One who is over them.
              </p>
            </div>

            <div style={{ display: "grid", gap: 16 }}>
              {PRAYERS.map((p) => (
                <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, borderLeft: `4px solid ${GREEN}` }}>
                  <h3 style={{ fontFamily: SERIF, fontSize: 21, margin: "0 0 10px", color: GREEN }}>{p.name}</h3>
                  <p style={{ fontFamily: SERIF, fontSize: 18, fontStyle: "italic", color: TEXT, lineHeight: 1.6, margin: 0 }}>
                    {p.prompt}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ fontFamily: SERIF, fontSize: 26, margin: "0 0 14px" }}>A Pattern for Prayer</h2>
              <ol style={{ color: MUTED, lineHeight: 1.85, margin: 0, paddingLeft: 22 }}>
                <li><strong style={{ color: TEXT }}>Adore</strong> — Begin by naming who God is. &ldquo;You are El Shaddai, God Almighty.&rdquo;</li>
                <li><strong style={{ color: TEXT }}>Remember</strong> — Recall how this name was revealed in Scripture and in your own life.</li>
                <li><strong style={{ color: TEXT }}>Ask</strong> — Bring your need in light of his character. The All-Sufficient God can supply your need.</li>
                <li><strong style={{ color: TEXT }}>Rest</strong> — Leave the request with him, trusting the One whose name you have called upon.</li>
              </ol>
            </div>
          </section>
        )}

        {/* Videos */}
        {activeTab === "videos" && (
          <section style={{ display: "grid", gap: 22, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {videos.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <iframe
                  width="100%"
                  style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`}
                  title={v.title}
                  allowFullScreen
                />
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
